define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/node.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/painting/clip.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/semantics/semantics_event.dart', 'packages/flutter/src/painting/binding.dart'], (function load__packages__flutter__src__rendering__layer_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__node$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__painting__clip$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__semantics__semantics_event$46dart, packages__flutter__src__painting__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const node = packages__flutter__src__foundation__node$46dart.src__foundation__node;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const clip = packages__flutter__src__painting__clip$46dart.src__painting__clip;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const semantics_event = packages__flutter__src__semantics__semantics_event$46dart.src__semantics__semantics_event;
  const binding$ = packages__flutter__src__painting__binding$46dart.src__painting__binding;
  var layer$ = Object.create(dart.library);
  var object$ = Object.create(dart.library);
  var debug = Object.create(dart.library);
  var $add = dartx.add;
  var $map = dartx.map;
  var $values = dartx.values;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $remove = dartx.remove;
  var $runtimeType = dartx.runtimeType;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $addAll = dartx.addAll;
  var $ceil = dartx.ceil;
  var $isFinite = dartx.isFinite;
  var $every = dartx.every;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $hashCode = dartx.hashCode;
  var $sort = dartx.sort;
  var $getRange = dartx.getRange;
  var $toList = dartx.toList;
  var $split = dartx.split;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $trim = dartx.trim;
  var $single = dartx.single;
  var $forEach = dartx.forEach;
  var $last = dartx.last;
  var $skip = dartx.skip;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    IdentityMapOfint$VoidTovoid: () => (T$.IdentityMapOfint$VoidTovoid = dart.constFn(_js_helper.IdentityMap$(core.int, T$.VoidTovoid())))(),
    LayerHandleOfLayer: () => (T$.LayerHandleOfLayer = dart.constFn(layer$.LayerHandle$(layer$.Layer)))(),
    ListOfVoidTovoid: () => (T$.ListOfVoidTovoid = dart.constFn(core.List$(T$.VoidTovoid())))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    boolTodynamic: () => (T$.boolTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.bool])))(),
    VoidToint: () => (T$.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    intTodynamic: () => (T$.intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))(),
    ContainerLayerN: () => (T$.ContainerLayerN = dart.constFn(dart.nullable(layer$.ContainerLayer)))(),
    DiagnosticsPropertyOfObject: () => (T$.DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    DiagnosticsPropertyOfObjectN: () => (T$.DiagnosticsPropertyOfObjectN = dart.constFn(diagnostics.DiagnosticsProperty$(T$.ObjectN())))(),
    DiagnosticsPropertyOfString: () => (T$.DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))(),
    DiagnosticsPropertyOfint: () => (T$.DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))(),
    DiagnosticsPropertyOfRect: () => (T$.DiagnosticsPropertyOfRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Rect)))(),
    JSArrayOfLayer: () => (T$.JSArrayOfLayer = dart.constFn(_interceptors.JSArray$(layer$.Layer)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    OffsetEngineLayerN: () => (T$.OffsetEngineLayerN = dart.constFn(dart.nullable(ui.OffsetEngineLayer)))(),
    DiagnosticsPropertyOfOffset: () => (T$.DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))(),
    ClipRectEngineLayerN: () => (T$.ClipRectEngineLayerN = dart.constFn(dart.nullable(ui.ClipRectEngineLayer)))(),
    DiagnosticsPropertyOfClip: () => (T$.DiagnosticsPropertyOfClip = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Clip)))(),
    ClipRRectEngineLayerN: () => (T$.ClipRRectEngineLayerN = dart.constFn(dart.nullable(ui.ClipRRectEngineLayer)))(),
    DiagnosticsPropertyOfRRect: () => (T$.DiagnosticsPropertyOfRRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.RRect)))(),
    ClipPathEngineLayerN: () => (T$.ClipPathEngineLayerN = dart.constFn(dart.nullable(ui.ClipPathEngineLayer)))(),
    ColorFilterEngineLayerN: () => (T$.ColorFilterEngineLayerN = dart.constFn(dart.nullable(ui.ColorFilterEngineLayer)))(),
    DiagnosticsPropertyOfColorFilter: () => (T$.DiagnosticsPropertyOfColorFilter = dart.constFn(diagnostics.DiagnosticsProperty$(ui.ColorFilter)))(),
    ImageFilterEngineLayerN: () => (T$.ImageFilterEngineLayerN = dart.constFn(dart.nullable(ui.ImageFilterEngineLayer)))(),
    DiagnosticsPropertyOfImageFilter: () => (T$.DiagnosticsPropertyOfImageFilter = dart.constFn(diagnostics.DiagnosticsProperty$(ui.ImageFilter)))(),
    doubleTobool: () => (T$.doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))(),
    TransformEngineLayerN: () => (T$.TransformEngineLayerN = dart.constFn(dart.nullable(ui.TransformEngineLayer)))(),
    OpacityEngineLayerN: () => (T$.OpacityEngineLayerN = dart.constFn(dart.nullable(ui.OpacityEngineLayer)))(),
    ShaderMaskEngineLayerN: () => (T$.ShaderMaskEngineLayerN = dart.constFn(dart.nullable(ui.ShaderMaskEngineLayer)))(),
    DiagnosticsPropertyOfShader: () => (T$.DiagnosticsPropertyOfShader = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Shader)))(),
    EnumPropertyOfBlendMode: () => (T$.EnumPropertyOfBlendMode = dart.constFn(diagnostics.EnumProperty$(ui.BlendMode)))(),
    BackdropFilterEngineLayerN: () => (T$.BackdropFilterEngineLayerN = dart.constFn(dart.nullable(ui.BackdropFilterEngineLayer)))(),
    PhysicalShapeEngineLayerN: () => (T$.PhysicalShapeEngineLayerN = dart.constFn(dart.nullable(ui.PhysicalShapeEngineLayer)))(),
    LinkedHashSetOfLeaderLayer: () => (T$.LinkedHashSetOfLeaderLayer = dart.constFn(collection.LinkedHashSet$(layer$.LeaderLayer)))(),
    DurationTovoid: () => (T$.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    DiagnosticsPropertyOfLayerLink: () => (T$.DiagnosticsPropertyOfLayerLink = dart.constFn(diagnostics.DiagnosticsProperty$(layer$.LayerLink)))(),
    JSArrayOfContainerLayer: () => (T$.JSArrayOfContainerLayer = dart.constFn(_interceptors.JSArray$(layer$.ContainerLayer)))(),
    DiagnosticsPropertyOfSize: () => (T$.DiagnosticsPropertyOfSize = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Size)))(),
    DiagnosticsPropertyOfbool: () => (T$.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    OffsetLayerN: () => (T$.OffsetLayerN = dart.constFn(dart.nullable(layer$.OffsetLayer)))(),
    JSArrayOfRenderObject: () => (T$.JSArrayOfRenderObject = dart.constFn(_interceptors.JSArray$(object$.RenderObject)))(),
    LinkedHashSetOfRenderObject: () => (T$.LinkedHashSetOfRenderObject = dart.constFn(collection.LinkedHashSet$(object$.RenderObject)))(),
    IdentityMapOfString$String: () => (T$.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    RenderObjectAndRenderObjectToint: () => (T$.RenderObjectAndRenderObjectToint = dart.constFn(dart.fnType(core.int, [object$.RenderObject, object$.RenderObject])))(),
    LayerHandleOfContainerLayer: () => (T$.LayerHandleOfContainerLayer = dart.constFn(layer$.LayerHandle$(layer$.ContainerLayer)))(),
    RenderObjectTovoid: () => (T$.RenderObjectTovoid = dart.constFn(dart.fnType(dart.void, [object$.RenderObject])))(),
    ListOfDiagnosticsNode: () => (T$.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T$.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T$.ListOfDiagnosticsNode(), [])))(),
    DiagnosticsPropertyOfRenderObject: () => (T$.DiagnosticsPropertyOfRenderObject = dart.constFn(diagnostics.DiagnosticsProperty$(object$.RenderObject)))(),
    PipelineOwnerN: () => (T$.PipelineOwnerN = dart.constFn(dart.nullable(object$.PipelineOwner)))(),
    RenderObjectN: () => (T$.RenderObjectN = dart.constFn(dart.nullable(object$.RenderObject)))(),
    JSArrayOfSemanticsNode: () => (T$.JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))(),
    JSArrayOf_InterestingSemanticsFragment: () => (T$.JSArrayOf_InterestingSemanticsFragment = dart.constFn(_interceptors.JSArray$(object$._InterestingSemanticsFragment)))(),
    LinkedHashSetOf_InterestingSemanticsFragment: () => (T$.LinkedHashSetOf_InterestingSemanticsFragment = dart.constFn(collection.LinkedHashSet$(object$._InterestingSemanticsFragment)))(),
    ListOfSemanticsNode: () => (T$.ListOfSemanticsNode = dart.constFn(core.List$(semantics.SemanticsNode)))(),
    HitTestEntryOfHitTestTarget: () => (T$.HitTestEntryOfHitTestTarget = dart.constFn(hit_test.HitTestEntry$(hit_test.HitTestTarget)))(),
    DiagnosticsPropertyOfParentData: () => (T$.DiagnosticsPropertyOfParentData = dart.constFn(diagnostics.DiagnosticsProperty$(object$.ParentData)))(),
    DiagnosticsPropertyOfConstraints: () => (T$.DiagnosticsPropertyOfConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(object$.Constraints)))(),
    DiagnosticsPropertyOfContainerLayer: () => (T$.DiagnosticsPropertyOfContainerLayer = dart.constFn(diagnostics.DiagnosticsProperty$(layer$.ContainerLayer)))(),
    DiagnosticsPropertyOfSemanticsNode: () => (T$.DiagnosticsPropertyOfSemanticsNode = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsNode)))(),
    LinkedHashSetOfSemanticsTag: () => (T$.LinkedHashSetOfSemanticsTag = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsTag)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_Enum__name]: "low",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
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
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAlias",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.BlendMode.prototype,
        [_Enum__name]: "srcOver",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294940672.0
      });
    },
    get C7() {
      return C[7] = dart.fn(object$.RenderObject._cleanChildRelayoutBoundary, T$.RenderObjectTovoid());
    },
    get C8() {
      return C[8] = dart.fn(object$.RenderObject._propagateRelayoutBoundaryToChild, T$.RenderObjectTovoid());
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "info",
        [_Enum_index]: 3
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "debug",
        [_Enum_index]: 2
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "shallow",
        [_Enum_index]: 10
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2415956223.0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278227199.0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2425393296.0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: colors.HSVColor.prototype,
        [HSVColor_value]: 1,
        [HSVColor_saturation]: 1,
        [HSVColor_hue]: 60,
        [HSVColor_alpha]: 0.4
      });
    }
  }, false);
  var C = Array(18).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/layer.dart",
    "package:flutter/src/rendering/layer.dart",
    "package:flutter/src/rendering/object.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/object.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/debug.dart"
  ];
  var annotation$ = dart.privateName(layer$, "AnnotationEntry.annotation");
  var localPosition$ = dart.privateName(layer$, "AnnotationEntry.localPosition");
  const _is_AnnotationEntry_default = Symbol('_is_AnnotationEntry_default');
  layer$.AnnotationEntry$ = dart.generic(T => {
    class AnnotationEntry extends core.Object {
      get annotation() {
        return this[annotation$];
      }
      set annotation(value) {
        super.annotation = value;
      }
      get localPosition() {
        return this[localPosition$];
      }
      set localPosition(value) {
        super.localPosition = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let annotation = opts && 'annotation' in opts ? opts.annotation : null;
        let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
        return new (layer$.AnnotationEntry$(T)).new({annotation: annotation, localPosition: localPosition});
      }
      toString() {
        return object.objectRuntimeType(this, "AnnotationEntry") + "(annotation: " + dart.str(this.annotation) + ", localPosition: " + dart.str(this.localPosition) + ")";
      }
    }
    (AnnotationEntry.new = function(opts) {
      let annotation = opts && 'annotation' in opts ? opts.annotation : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      this[annotation$] = annotation;
      this[localPosition$] = localPosition;
      if (!(localPosition !== null)) dart.assertFailed(null, I[0], 27, 15, "localPosition != null");
      ;
    }).prototype = AnnotationEntry.prototype;
    dart.addTypeTests(AnnotationEntry);
    AnnotationEntry.prototype[_is_AnnotationEntry_default] = true;
    dart.addTypeCaches(AnnotationEntry);
    dart.setLibraryUri(AnnotationEntry, I[1]);
    dart.setFieldSignature(AnnotationEntry, () => ({
      __proto__: dart.getFields(AnnotationEntry.__proto__),
      annotation: dart.finalFieldType(T),
      localPosition: dart.finalFieldType(ui.Offset)
    }));
    dart.defineExtensionMethods(AnnotationEntry, ['toString']);
    return AnnotationEntry;
  });
  layer$.AnnotationEntry = layer$.AnnotationEntry$();
  dart.addTypeTests(layer$.AnnotationEntry, _is_AnnotationEntry_default);
  var _entries = dart.privateName(layer$, "_entries");
  const _is_AnnotationResult_default = Symbol('_is_AnnotationResult_default');
  layer$.AnnotationResult$ = dart.generic(T => {
    var __t$AnnotationEntryOfT = () => (__t$AnnotationEntryOfT = dart.constFn(layer$.AnnotationEntry$(T)))();
    var __t$JSArrayOfAnnotationEntryOfT = () => (__t$JSArrayOfAnnotationEntryOfT = dart.constFn(_interceptors.JSArray$(__t$AnnotationEntryOfT())))();
    var __t$AnnotationEntryOfTToT = () => (__t$AnnotationEntryOfTToT = dart.constFn(dart.fnType(T, [__t$AnnotationEntryOfT()])))();
    class AnnotationResult extends core.Object {
      add(entry) {
        __t$AnnotationEntryOfT().as(entry);
        return this[_entries][$add](entry);
      }
      get entries() {
        return this[_entries];
      }
      get annotations() {
        return this[_entries][$map](T, dart.fn(entry => entry.annotation, __t$AnnotationEntryOfTToT()));
      }
      static ['_#new#tearOff'](T) {
        return new (layer$.AnnotationResult$(T)).new();
      }
    }
    (AnnotationResult.new = function() {
      this[_entries] = __t$JSArrayOfAnnotationEntryOfT().of([]);
      ;
    }).prototype = AnnotationResult.prototype;
    dart.addTypeTests(AnnotationResult);
    AnnotationResult.prototype[_is_AnnotationResult_default] = true;
    dart.addTypeCaches(AnnotationResult);
    dart.setMethodSignature(AnnotationResult, () => ({
      __proto__: dart.getMethods(AnnotationResult.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AnnotationResult, () => ({
      __proto__: dart.getGetters(AnnotationResult.__proto__),
      entries: core.Iterable$(layer$.AnnotationEntry$(T)),
      annotations: core.Iterable$(T)
    }));
    dart.setLibraryUri(AnnotationResult, I[1]);
    dart.setFieldSignature(AnnotationResult, () => ({
      __proto__: dart.getFields(AnnotationResult.__proto__),
      [_entries]: dart.finalFieldType(core.List$(layer$.AnnotationEntry$(T)))
    }));
    return AnnotationResult;
  });
  layer$.AnnotationResult = layer$.AnnotationResult$();
  dart.addTypeTests(layer$.AnnotationResult, _is_AnnotationResult_default);
  var debugCreator = dart.privateName(layer$, "Layer.debugCreator");
  var _callbacks = dart.privateName(layer$, "_callbacks");
  var _compositionCallbackCount = dart.privateName(layer$, "_compositionCallbackCount");
  var _debugMutationsLocked = dart.privateName(layer$, "_debugMutationsLocked");
  var _debugDisposed = dart.privateName(layer$, "_debugDisposed");
  var _parentHandle = dart.privateName(layer$, "_parentHandle");
  var _refCount = dart.privateName(layer$, "_refCount");
  var _needsAddToScene = dart.privateName(layer$, "_needsAddToScene");
  var _engineLayer = dart.privateName(layer$, "_engineLayer");
  var _nextSibling = dart.privateName(layer$, "_nextSibling");
  var _previousSibling = dart.privateName(layer$, "_previousSibling");
  var _updateSubtreeCompositionObserverCount = dart.privateName(layer$, "_updateSubtreeCompositionObserverCount");
  var _fireCompositionCallbacks = dart.privateName(layer$, "_fireCompositionCallbacks");
  var _unref = dart.privateName(layer$, "_unref");
  var _removeChild = dart.privateName(layer$, "_removeChild");
  var _addToSceneWithRetainedRendering = dart.privateName(layer$, "_addToSceneWithRetainedRendering");
  const AbstractNode_DiagnosticableTreeMixin$36 = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  layer$.Layer = class Layer extends AbstractNode_DiagnosticableTreeMixin$36 {
    get debugCreator() {
      return this[debugCreator];
    }
    set debugCreator(value) {
      this[debugCreator] = value;
    }
    get subtreeHasCompositionCallbacks() {
      return this[_compositionCallbackCount] > 0;
    }
    [_updateSubtreeCompositionObserverCount](delta) {
      if (!(delta !== 0)) dart.assertFailed(null, I[0], 155, 12, "delta != 0");
      this[_compositionCallbackCount] = this[_compositionCallbackCount] + delta;
      if (!(this[_compositionCallbackCount] >= 0)) dart.assertFailed(null, I[0], 157, 12, "_compositionCallbackCount >= 0");
      if (this.parent != null) {
        dart.nullCheck(this.parent)[_updateSubtreeCompositionObserverCount](delta);
      }
    }
    [_fireCompositionCallbacks](opts) {
      let includeChildren = opts && 'includeChildren' in opts ? opts.includeChildren : null;
      for (let callback of T$.ListOfVoidTovoid().of(this[_callbacks][$values])) {
        callback();
      }
    }
    describeClipBounds() {
      return null;
    }
    addCompositionCallback(callback) {
      this[_updateSubtreeCompositionObserverCount](1);
      let callbackId = layer$.Layer._nextCallbackId = layer$.Layer._nextCallbackId + 1;
      this[_callbacks][$_set](callbackId, dart.fn(() => {
        if (!dart.fn(() => {
          this[_debugMutationsLocked] = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 206, 14, "() {\n        _debugMutationsLocked = true;\n        return true;\n      }()");
        callback(this);
        if (!dart.fn(() => {
          this[_debugMutationsLocked] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 211, 14, "() {\n        _debugMutationsLocked = false;\n        return true;\n      }()");
      }, T$.VoidTovoid()));
      return dart.fn(() => {
        if (!(this.debugDisposed || this[_callbacks][$containsKey](callbackId))) dart.assertFailed(null, I[0], 217, 14, "debugDisposed || _callbacks.containsKey(callbackId)");
        this[_callbacks][$remove](callbackId);
        this[_updateSubtreeCompositionObserverCount](-1);
      }, T$.VoidTovoid());
    }
    get debugDisposed() {
      let disposed = null;
      function disposed$35get() {
        let t1;
        t1 = disposed;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("disposed")) : t1;
      }
      dart.fn(disposed$35get, T$.VoidTobool());
      function disposed$35set(disposed$35param) {
        return disposed = disposed$35param;
      }
      dart.fn(disposed$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        disposed$35set(this[_debugDisposed]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 229, 12, "() {\n      disposed = _debugDisposed;\n      return true;\n    }()");
      return disposed$35get();
    }
    [_unref]() {
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 252, 12, "!_debugMutationsLocked");
      if (!(this[_refCount] > 0)) dart.assertFailed(null, I[0], 253, 12, "_refCount > 0");
      this[_refCount] = this[_refCount] - 1;
      if (this[_refCount] === 0) {
        this.dispose();
      }
    }
    get debugHandleCount() {
      let count = null;
      function count$35get() {
        let t4;
        t4 = count;
        return t4 == null ? dart.throw(new _internal.LateError.localNI("count")) : t4;
      }
      dart.fn(count$35get, T$.VoidToint());
      function count$35set(count$35param) {
        return count = count$35param;
      }
      dart.fn(count$35set, T$.intTodynamic());
      if (!dart.fn(() => {
        count$35set(this[_refCount]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 265, 12, "() {\n      count = _refCount;\n      return true;\n    }()");
      return count$35get();
    }
    dispose() {
      let t6;
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 294, 12, "!_debugMutationsLocked");
      if (!!this[_debugDisposed]) dart.assertFailed("Layers must only be disposed once. This is typically handled by " + "LayerHandle and createHandle. Subclasses should not directly call " + "dispose, except to call super.dispose() in an overridden dispose  " + "method. Tests must only call dispose once.", I[0], 296, 7, "!_debugDisposed");
      if (!dart.fn(() => {
        if (!(this[_refCount] === 0)) dart.assertFailed("Do not directly call dispose on a " + dart.str(this[$runtimeType]) + ". Instead, " + "use createHandle and LayerHandle.dispose.", I[0], 304, 9, "_refCount == 0");
        this[_debugDisposed] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 302, 12, "() {\n      assert(\n        _refCount == 0,\n        'Do not directly call dispose on a $runtimeType. Instead, '\n        'use createHandle and LayerHandle.dispose.',\n      );\n      _debugDisposed = true;\n      return true;\n    }()");
      t6 = this[_engineLayer];
      t6 == null ? null : t6.dispose();
      this[_engineLayer] = null;
    }
    get parent() {
      return T$.ContainerLayerN().as(super.parent);
    }
    markNeedsAddToScene() {
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 351, 12, "!_debugMutationsLocked");
      if (!!this.alwaysNeedsAddToScene) dart.assertFailed(dart.str(this[$runtimeType]) + " with alwaysNeedsAddToScene set called markNeedsAddToScene.\n" + "The layer's alwaysNeedsAddToScene is set to true, and therefore it should not call markNeedsAddToScene.", I[0], 353, 7, "!alwaysNeedsAddToScene");
      if (!!this[_debugDisposed]) dart.assertFailed(null, I[0], 357, 12, "!_debugDisposed");
      if (this[_needsAddToScene]) {
        return;
      }
      this[_needsAddToScene] = true;
    }
    debugMarkClean() {
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 373, 12, "!_debugMutationsLocked");
      if (!dart.fn(() => {
        this[_needsAddToScene] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 374, 12, "() {\n      _needsAddToScene = false;\n      return true;\n    }()");
    }
    get alwaysNeedsAddToScene() {
      return false;
    }
    get debugSubtreeNeedsAddToScene() {
      let result = null;
      if (!dart.fn(() => {
        result = this[_needsAddToScene];
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 391, 12, "() {\n      result = _needsAddToScene;\n      return true;\n    }()");
      return result;
    }
    get engineLayer() {
      return this[_engineLayer];
    }
    set engineLayer(value) {
      let t6;
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 423, 12, "!_debugMutationsLocked");
      if (!!this[_debugDisposed]) dart.assertFailed(null, I[0], 424, 12, "!_debugDisposed");
      t6 = this[_engineLayer];
      t6 == null ? null : t6.dispose();
      this[_engineLayer] = value;
      if (!this.alwaysNeedsAddToScene) {
        if (this.parent != null && !dart.nullCheck(this.parent).alwaysNeedsAddToScene) {
          dart.nullCheck(this.parent).markNeedsAddToScene();
        }
      }
    }
    updateSubtreeNeedsAddToScene() {
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 468, 12, "!_debugMutationsLocked");
      this[_needsAddToScene] = this[_needsAddToScene] || this.alwaysNeedsAddToScene;
    }
    get nextSibling() {
      return this[_nextSibling];
    }
    get previousSibling() {
      return this[_previousSibling];
    }
    dropChild(child) {
      layer$.Layer.as(child);
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 482, 12, "!_debugMutationsLocked");
      if (!this.alwaysNeedsAddToScene) {
        this.markNeedsAddToScene();
      }
      if (child[_compositionCallbackCount] !== 0) {
        this[_updateSubtreeCompositionObserverCount](-child[_compositionCallbackCount]);
      }
      super.dropChild(child);
    }
    adoptChild(child) {
      layer$.Layer.as(child);
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 494, 12, "!_debugMutationsLocked");
      if (!this.alwaysNeedsAddToScene) {
        this.markNeedsAddToScene();
      }
      if (child[_compositionCallbackCount] !== 0) {
        this[_updateSubtreeCompositionObserverCount](child[_compositionCallbackCount]);
      }
      super.adoptChild(child);
    }
    remove() {
      let t6;
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 509, 12, "!_debugMutationsLocked");
      t6 = this.parent;
      t6 == null ? null : t6[_removeChild](this);
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return false;
    }
    find(S, localPosition) {
      let result = new (layer$.AnnotationResult$(S)).new();
      this.findAnnotations(S, result, localPosition, {onlyFirst: true});
      return result.entries[$isEmpty] ? null : result.entries[$first].annotation;
    }
    findAllAnnotations(S, localPosition) {
      let result = new (layer$.AnnotationResult$(S)).new();
      this.findAnnotations(S, result, localPosition, {onlyFirst: false});
      return result;
    }
    [_addToSceneWithRetainedRendering](builder) {
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 632, 12, "!_debugMutationsLocked");
      if (!this[_needsAddToScene] && this[_engineLayer] != null) {
        builder.addRetained(dart.nullCheck(this[_engineLayer]));
        return;
      }
      this.addToScene(builder);
      this[_needsAddToScene] = false;
    }
    toStringShort() {
      return super.toStringShort() + (this.owner == null ? " DETACHED" : "");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfObject()).new("owner", this.owner, {level: this.parent != null ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info, defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfObjectN()).new("creator", this.debugCreator, {defaultValue: null, level: diagnostics.DiagnosticLevel.debug}));
      if (this[_engineLayer] != null) {
        properties.add(new (T$.DiagnosticsPropertyOfString()).new("engine layer", diagnostics.describeIdentity(this[_engineLayer])));
      }
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("handles", this.debugHandleCount));
    }
  };
  (layer$.Layer.new = function() {
    this[_callbacks] = new (T$.IdentityMapOfint$VoidTovoid()).new();
    this[_compositionCallbackCount] = 0;
    this[_debugMutationsLocked] = false;
    this[_debugDisposed] = false;
    this[_parentHandle] = new (T$.LayerHandleOfLayer()).new();
    this[_refCount] = 0;
    this[_needsAddToScene] = true;
    this[_engineLayer] = null;
    this[_nextSibling] = null;
    this[_previousSibling] = null;
    this[debugCreator] = null;
    layer$.Layer.__proto__.new.call(this);
    ;
  }).prototype = layer$.Layer.prototype;
  dart.addTypeTests(layer$.Layer);
  dart.addTypeCaches(layer$.Layer);
  dart.setMethodSignature(layer$.Layer, () => ({
    __proto__: dart.getMethods(layer$.Layer.__proto__),
    [_updateSubtreeCompositionObserverCount]: dart.fnType(dart.void, [core.int]),
    [_fireCompositionCallbacks]: dart.fnType(dart.void, [], {}, {includeChildren: core.bool}),
    describeClipBounds: dart.fnType(dart.nullable(ui.Rect), []),
    addCompositionCallback: dart.fnType(dart.fnType(dart.void, []), [dart.fnType(dart.void, [layer$.Layer])]),
    [_unref]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    markNeedsAddToScene: dart.fnType(dart.void, []),
    debugMarkClean: dart.fnType(dart.void, []),
    updateSubtreeNeedsAddToScene: dart.fnType(dart.void, []),
    remove: dart.fnType(dart.void, []),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    find: dart.gFnType(S => [dart.nullable(S), [ui.Offset]], S => [core.Object]),
    findAllAnnotations: dart.gFnType(S => [layer$.AnnotationResult$(S), [ui.Offset]], S => [core.Object]),
    [_addToSceneWithRetainedRendering]: dart.fnType(dart.void, [ui.SceneBuilder])
  }));
  dart.setGetterSignature(layer$.Layer, () => ({
    __proto__: dart.getGetters(layer$.Layer.__proto__),
    subtreeHasCompositionCallbacks: core.bool,
    debugDisposed: core.bool,
    debugHandleCount: core.int,
    parent: dart.nullable(layer$.ContainerLayer),
    alwaysNeedsAddToScene: core.bool,
    debugSubtreeNeedsAddToScene: dart.nullable(core.bool),
    engineLayer: dart.nullable(ui.EngineLayer),
    nextSibling: dart.nullable(layer$.Layer),
    previousSibling: dart.nullable(layer$.Layer)
  }));
  dart.setSetterSignature(layer$.Layer, () => ({
    __proto__: dart.getSetters(layer$.Layer.__proto__),
    engineLayer: dart.nullable(ui.EngineLayer)
  }));
  dart.setLibraryUri(layer$.Layer, I[1]);
  dart.setFieldSignature(layer$.Layer, () => ({
    __proto__: dart.getFields(layer$.Layer.__proto__),
    [_callbacks]: dart.finalFieldType(core.Map$(core.int, dart.fnType(dart.void, []))),
    [_compositionCallbackCount]: dart.fieldType(core.int),
    [_debugMutationsLocked]: dart.fieldType(core.bool),
    [_debugDisposed]: dart.fieldType(core.bool),
    [_parentHandle]: dart.finalFieldType(layer$.LayerHandle$(layer$.Layer)),
    [_refCount]: dart.fieldType(core.int),
    [_needsAddToScene]: dart.fieldType(core.bool),
    [_engineLayer]: dart.fieldType(dart.nullable(ui.EngineLayer)),
    [_nextSibling]: dart.fieldType(dart.nullable(layer$.Layer)),
    [_previousSibling]: dart.fieldType(dart.nullable(layer$.Layer)),
    debugCreator: dart.fieldType(dart.nullable(core.Object))
  }));
  dart.setStaticFieldSignature(layer$.Layer, () => ['_nextCallbackId']);
  dart.defineLazy(layer$.Layer, {
    /*layer$.Layer._nextCallbackId*/get _nextCallbackId() {
      return 0;
    },
    set _nextCallbackId(_) {}
  }, false);
  var _layer$ = dart.privateName(layer$, "_layer");
  const _is_LayerHandle_default = Symbol('_is_LayerHandle_default');
  layer$.LayerHandle$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    class LayerHandle extends core.Object {
      static ['_#new#tearOff'](T, _layer = null) {
        return new (layer$.LayerHandle$(T)).new(_layer);
      }
      get layer() {
        return this[_layer$];
      }
      set layer(layer) {
        let t6, t6$, t6$0;
        __t$TN().as(layer);
        if (!((t6 = layer, t6 == null ? null : t6.debugDisposed) !== true)) dart.assertFailed("Attempted to create a handle to an already disposed layer: " + dart.str(layer) + ".", I[0], 720, 7, "layer?.debugDisposed != true");
        if (layer == this[_layer$]) {
          return;
        }
        t6$ = this[_layer$];
        t6$ == null ? null : t6$[_unref]();
        this[_layer$] = layer;
        if (this[_layer$] != null) {
          t6$0 = dart.nullCheck(this[_layer$]);
          t6$0[_refCount] = t6$0[_refCount] + 1;
        }
      }
      toString() {
        return "LayerHandle(" + (this[_layer$] != null ? dart.toString(this[_layer$]) : "DISPOSED") + ")";
      }
    }
    (LayerHandle.new = function(_layer = null) {
      let t6;
      this[_layer$] = _layer;
      if (this[_layer$] != null) {
        t6 = dart.nullCheck(this[_layer$]);
        t6[_refCount] = t6[_refCount] + 1;
      }
    }).prototype = LayerHandle.prototype;
    dart.addTypeTests(LayerHandle);
    LayerHandle.prototype[_is_LayerHandle_default] = true;
    dart.addTypeCaches(LayerHandle);
    dart.setGetterSignature(LayerHandle, () => ({
      __proto__: dart.getGetters(LayerHandle.__proto__),
      layer: dart.nullable(T)
    }));
    dart.setSetterSignature(LayerHandle, () => ({
      __proto__: dart.getSetters(LayerHandle.__proto__),
      layer: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(LayerHandle, I[1]);
    dart.setFieldSignature(LayerHandle, () => ({
      __proto__: dart.getFields(LayerHandle.__proto__),
      [_layer$]: dart.fieldType(dart.nullable(T))
    }));
    dart.defineExtensionMethods(LayerHandle, ['toString']);
    return LayerHandle;
  });
  layer$.LayerHandle = layer$.LayerHandle$();
  dart.addTypeTests(layer$.LayerHandle, _is_LayerHandle_default);
  var canvasBounds$ = dart.privateName(layer$, "PictureLayer.canvasBounds");
  var _picture = dart.privateName(layer$, "_picture");
  var _isComplexHint = dart.privateName(layer$, "_isComplexHint");
  var _willChangeHint = dart.privateName(layer$, "_willChangeHint");
  layer$.PictureLayer = class PictureLayer extends layer$.Layer {
    get canvasBounds() {
      return this[canvasBounds$];
    }
    set canvasBounds(value) {
      super.canvasBounds = value;
    }
    static ['_#new#tearOff'](canvasBounds) {
      return new layer$.PictureLayer.new(canvasBounds);
    }
    get picture() {
      return this[_picture];
    }
    set picture(picture) {
      let t6;
      if (!!this[_debugDisposed]) dart.assertFailed(null, I[0], 764, 12, "!_debugDisposed");
      this.markNeedsAddToScene();
      t6 = this[_picture];
      t6 == null ? null : t6.dispose();
      this[_picture] = picture;
    }
    get isComplexHint() {
      return this[_isComplexHint];
    }
    set isComplexHint(value) {
      if (value !== this[_isComplexHint]) {
        this[_isComplexHint] = value;
        this.markNeedsAddToScene();
      }
    }
    get willChangeHint() {
      return this[_willChangeHint];
    }
    set willChangeHint(value) {
      if (value !== this[_willChangeHint]) {
        this[_willChangeHint] = value;
        this.markNeedsAddToScene();
      }
    }
    dispose() {
      this.picture = null;
      super.dispose();
    }
    addToScene(builder) {
      if (!(this.picture != null)) dart.assertFailed(null, I[0], 813, 12, "picture != null");
      builder.addPicture(ui.Offset.zero, dart.nullCheck(this.picture), {isComplexHint: this.isComplexHint, willChangeHint: this.willChangeHint});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfRect()).new("paint bounds", this.canvasBounds));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("picture", diagnostics.describeIdentity(this[_picture])));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("raster cache hints", "isComplex = " + dart.str(this.isComplexHint) + ", willChange = " + dart.str(this.willChangeHint)));
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return false;
    }
  };
  (layer$.PictureLayer.new = function(canvasBounds) {
    this[_picture] = null;
    this[_isComplexHint] = false;
    this[_willChangeHint] = false;
    this[canvasBounds$] = canvasBounds;
    layer$.PictureLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PictureLayer.prototype;
  dart.addTypeTests(layer$.PictureLayer);
  dart.addTypeCaches(layer$.PictureLayer);
  dart.setMethodSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getMethods(layer$.PictureLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getGetters(layer$.PictureLayer.__proto__),
    picture: dart.nullable(ui.Picture),
    isComplexHint: core.bool,
    willChangeHint: core.bool
  }));
  dart.setSetterSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getSetters(layer$.PictureLayer.__proto__),
    picture: dart.nullable(ui.Picture),
    isComplexHint: core.bool,
    willChangeHint: core.bool
  }));
  dart.setLibraryUri(layer$.PictureLayer, I[1]);
  dart.setFieldSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getFields(layer$.PictureLayer.__proto__),
    canvasBounds: dart.finalFieldType(ui.Rect),
    [_picture]: dart.fieldType(dart.nullable(ui.Picture)),
    [_isComplexHint]: dart.fieldType(core.bool),
    [_willChangeHint]: dart.fieldType(core.bool)
  }));
  var rect$ = dart.privateName(layer$, "TextureLayer.rect");
  var textureId$ = dart.privateName(layer$, "TextureLayer.textureId");
  var freeze$ = dart.privateName(layer$, "TextureLayer.freeze");
  var filterQuality$ = dart.privateName(layer$, "TextureLayer.filterQuality");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  layer$.TextureLayer = class TextureLayer extends layer$.Layer {
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get textureId() {
      return this[textureId$];
    }
    set textureId(value) {
      super.textureId = value;
    }
    get freeze() {
      return this[freeze$];
    }
    set freeze(value) {
      super.freeze = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    static ['_#new#tearOff'](opts) {
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let textureId = opts && 'textureId' in opts ? opts.textureId : null;
      let freeze = opts && 'freeze' in opts ? opts.freeze : false;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[0] || CT.C0;
      return new layer$.TextureLayer.new({rect: rect, textureId: textureId, freeze: freeze, filterQuality: filterQuality});
    }
    addToScene(builder) {
      builder.addTexture(this.textureId, {offset: this.rect.topLeft, width: this.rect.width, height: this.rect.height, freeze: this.freeze, filterQuality: this.filterQuality});
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return false;
    }
  };
  (layer$.TextureLayer.new = function(opts) {
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let textureId = opts && 'textureId' in opts ? opts.textureId : null;
    let freeze = opts && 'freeze' in opts ? opts.freeze : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[0] || CT.C0;
    this[rect$] = rect;
    this[textureId$] = textureId;
    this[freeze$] = freeze;
    this[filterQuality$] = filterQuality;
    if (!(rect !== null)) dart.assertFailed(null, I[0], 869, 15, "rect != null");
    if (!(textureId !== null)) dart.assertFailed(null, I[0], 870, 15, "textureId != null");
    layer$.TextureLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.TextureLayer.prototype;
  dart.addTypeTests(layer$.TextureLayer);
  dart.addTypeCaches(layer$.TextureLayer);
  dart.setMethodSignature(layer$.TextureLayer, () => ({
    __proto__: dart.getMethods(layer$.TextureLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setLibraryUri(layer$.TextureLayer, I[1]);
  dart.setFieldSignature(layer$.TextureLayer, () => ({
    __proto__: dart.getFields(layer$.TextureLayer.__proto__),
    rect: dart.finalFieldType(ui.Rect),
    textureId: dart.finalFieldType(core.int),
    freeze: dart.finalFieldType(core.bool),
    filterQuality: dart.finalFieldType(ui.FilterQuality)
  }));
  var rect$0 = dart.privateName(layer$, "PlatformViewLayer.rect");
  var viewId$ = dart.privateName(layer$, "PlatformViewLayer.viewId");
  layer$.PlatformViewLayer = class PlatformViewLayer extends layer$.Layer {
    get rect() {
      return this[rect$0];
    }
    set rect(value) {
      super.rect = value;
    }
    get viewId() {
      return this[viewId$];
    }
    set viewId(value) {
      super.viewId = value;
    }
    static ['_#new#tearOff'](opts) {
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let viewId = opts && 'viewId' in opts ? opts.viewId : null;
      return new layer$.PlatformViewLayer.new({rect: rect, viewId: viewId});
    }
    addToScene(builder) {
      builder.addPlatformView(this.viewId, {offset: this.rect.topLeft, width: this.rect.width, height: this.rect.height});
    }
  };
  (layer$.PlatformViewLayer.new = function(opts) {
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let viewId = opts && 'viewId' in opts ? opts.viewId : null;
    this[rect$0] = rect;
    this[viewId$] = viewId;
    if (!(rect !== null)) dart.assertFailed(null, I[0], 917, 15, "rect != null");
    if (!(viewId !== null)) dart.assertFailed(null, I[0], 918, 15, "viewId != null");
    layer$.PlatformViewLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PlatformViewLayer.prototype;
  dart.addTypeTests(layer$.PlatformViewLayer);
  dart.addTypeCaches(layer$.PlatformViewLayer);
  dart.setMethodSignature(layer$.PlatformViewLayer, () => ({
    __proto__: dart.getMethods(layer$.PlatformViewLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder])
  }));
  dart.setLibraryUri(layer$.PlatformViewLayer, I[1]);
  dart.setFieldSignature(layer$.PlatformViewLayer, () => ({
    __proto__: dart.getFields(layer$.PlatformViewLayer.__proto__),
    rect: dart.finalFieldType(ui.Rect),
    viewId: dart.finalFieldType(core.int)
  }));
  var optionsMask$ = dart.privateName(layer$, "PerformanceOverlayLayer.optionsMask");
  var rasterizerThreshold$ = dart.privateName(layer$, "PerformanceOverlayLayer.rasterizerThreshold");
  var checkerboardRasterCacheImages$ = dart.privateName(layer$, "PerformanceOverlayLayer.checkerboardRasterCacheImages");
  var checkerboardOffscreenLayers$ = dart.privateName(layer$, "PerformanceOverlayLayer.checkerboardOffscreenLayers");
  var _overlayRect = dart.privateName(layer$, "_overlayRect");
  layer$.PerformanceOverlayLayer = class PerformanceOverlayLayer extends layer$.Layer {
    get optionsMask() {
      return this[optionsMask$];
    }
    set optionsMask(value) {
      super.optionsMask = value;
    }
    get rasterizerThreshold() {
      return this[rasterizerThreshold$];
    }
    set rasterizerThreshold(value) {
      super.rasterizerThreshold = value;
    }
    get checkerboardRasterCacheImages() {
      return this[checkerboardRasterCacheImages$];
    }
    set checkerboardRasterCacheImages(value) {
      super.checkerboardRasterCacheImages = value;
    }
    get checkerboardOffscreenLayers() {
      return this[checkerboardOffscreenLayers$];
    }
    set checkerboardOffscreenLayers(value) {
      super.checkerboardOffscreenLayers = value;
    }
    static ['_#new#tearOff'](opts) {
      let overlayRect = opts && 'overlayRect' in opts ? opts.overlayRect : null;
      let optionsMask = opts && 'optionsMask' in opts ? opts.optionsMask : null;
      let rasterizerThreshold = opts && 'rasterizerThreshold' in opts ? opts.rasterizerThreshold : null;
      let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : null;
      let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : null;
      return new layer$.PerformanceOverlayLayer.new({overlayRect: overlayRect, optionsMask: optionsMask, rasterizerThreshold: rasterizerThreshold, checkerboardRasterCacheImages: checkerboardRasterCacheImages, checkerboardOffscreenLayers: checkerboardOffscreenLayers});
    }
    get overlayRect() {
      return this[_overlayRect];
    }
    set overlayRect(value) {
      if (!value._equals(this[_overlayRect])) {
        this[_overlayRect] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.optionsMask !== null)) dart.assertFailed(null, I[0], 1000, 12, "optionsMask != null");
      builder.addPerformanceOverlay(this.optionsMask, this.overlayRect);
      builder.setRasterizerTracingThreshold(this.rasterizerThreshold);
      builder.setCheckerboardRasterCacheImages(this.checkerboardRasterCacheImages);
      builder.setCheckerboardOffscreenLayers(this.checkerboardOffscreenLayers);
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return false;
    }
  };
  (layer$.PerformanceOverlayLayer.new = function(opts) {
    let overlayRect = opts && 'overlayRect' in opts ? opts.overlayRect : null;
    let optionsMask = opts && 'optionsMask' in opts ? opts.optionsMask : null;
    let rasterizerThreshold = opts && 'rasterizerThreshold' in opts ? opts.rasterizerThreshold : null;
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : null;
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : null;
    this[optionsMask$] = optionsMask;
    this[rasterizerThreshold$] = rasterizerThreshold;
    this[checkerboardRasterCacheImages$] = checkerboardRasterCacheImages;
    this[checkerboardOffscreenLayers$] = checkerboardOffscreenLayers;
    this[_overlayRect] = overlayRect;
    layer$.PerformanceOverlayLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PerformanceOverlayLayer.prototype;
  dart.addTypeTests(layer$.PerformanceOverlayLayer);
  dart.addTypeCaches(layer$.PerformanceOverlayLayer);
  dart.setMethodSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getMethods(layer$.PerformanceOverlayLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getGetters(layer$.PerformanceOverlayLayer.__proto__),
    overlayRect: ui.Rect
  }));
  dart.setSetterSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getSetters(layer$.PerformanceOverlayLayer.__proto__),
    overlayRect: ui.Rect
  }));
  dart.setLibraryUri(layer$.PerformanceOverlayLayer, I[1]);
  dart.setFieldSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getFields(layer$.PerformanceOverlayLayer.__proto__),
    [_overlayRect]: dart.fieldType(ui.Rect),
    optionsMask: dart.finalFieldType(core.int),
    rasterizerThreshold: dart.finalFieldType(core.int),
    checkerboardRasterCacheImages: dart.finalFieldType(core.bool),
    checkerboardOffscreenLayers: dart.finalFieldType(core.bool)
  }));
  var _firstChild = dart.privateName(layer$, "_firstChild");
  var _lastChild = dart.privateName(layer$, "_lastChild");
  var _debugUltimatePreviousSiblingOf = dart.privateName(layer$, "_debugUltimatePreviousSiblingOf");
  var _debugUltimateNextSiblingOf = dart.privateName(layer$, "_debugUltimateNextSiblingOf");
  layer$.ContainerLayer = class ContainerLayer extends layer$.Layer {
    [_fireCompositionCallbacks](opts) {
      let includeChildren = opts && 'includeChildren' in opts ? opts.includeChildren : null;
      super[_fireCompositionCallbacks]({includeChildren: includeChildren});
      if (!includeChildren) {
        return;
      }
      let child = this.firstChild;
      while (child != null) {
        child[_fireCompositionCallbacks]({includeChildren: includeChildren});
        child = child.nextSibling;
      }
    }
    get firstChild() {
      return this[_firstChild];
    }
    get lastChild() {
      return this[_lastChild];
    }
    get hasChildren() {
      return this[_firstChild] != null;
    }
    buildScene(builder) {
      this.updateSubtreeNeedsAddToScene();
      this.addToScene(builder);
      if (this.subtreeHasCompositionCallbacks) {
        this[_fireCompositionCallbacks]({includeChildren: true});
      }
      this[_needsAddToScene] = false;
      let scene = builder.build();
      return scene;
    }
    [_debugUltimatePreviousSiblingOf](child, opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1067, 12, "child.attached == attached");
      while (child.previousSibling != null) {
        if (!!dart.equals(child.previousSibling, child)) dart.assertFailed(null, I[0], 1069, 14, "child.previousSibling != child");
        child = dart.nullCheck(child.previousSibling);
        if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1071, 14, "child.attached == attached");
      }
      return child[$_equals](equals);
    }
    [_debugUltimateNextSiblingOf](child, opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1077, 12, "child.attached == attached");
      while (child[_nextSibling] != null) {
        if (!!dart.equals(child[_nextSibling], child)) dart.assertFailed(null, I[0], 1079, 14, "child._nextSibling != child");
        child = dart.nullCheck(child[_nextSibling]);
        if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1081, 14, "child.attached == attached");
      }
      return child[$_equals](equals);
    }
    dispose() {
      this.removeAllChildren();
      this[_callbacks][$clear]();
      super.dispose();
    }
    updateSubtreeNeedsAddToScene() {
      super.updateSubtreeNeedsAddToScene();
      let child = this.firstChild;
      while (child != null) {
        child.updateSubtreeNeedsAddToScene();
        this[_needsAddToScene] = this[_needsAddToScene] || child[_needsAddToScene];
        child = child.nextSibling;
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      for (let child = this.lastChild; child != null; child = child.previousSibling) {
        let isAbsorbed = child.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
        if (isAbsorbed) {
          return true;
        }
        if (onlyFirst && result.entries[$isNotEmpty]) {
          return isAbsorbed;
        }
      }
      return false;
    }
    attach(owner) {
      core.Object.as(owner);
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 1120, 12, "!_debugMutationsLocked");
      super.attach(owner);
      let child = this.firstChild;
      while (child != null) {
        child.attach(owner);
        child = child.nextSibling;
      }
    }
    detach() {
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 1131, 12, "!_debugMutationsLocked");
      super.detach();
      let child = this.firstChild;
      while (child != null) {
        child.detach();
        child = child.nextSibling;
      }
      this[_fireCompositionCallbacks]({includeChildren: false});
    }
    append(child) {
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 1149, 12, "!_debugMutationsLocked");
      if (!!child[$_equals](this)) dart.assertFailed(null, I[0], 1150, 12, "child != this");
      if (!!child[$_equals](this.firstChild)) dart.assertFailed(null, I[0], 1151, 12, "child != firstChild");
      if (!!child[$_equals](this.lastChild)) dart.assertFailed(null, I[0], 1152, 12, "child != lastChild");
      if (!(child.parent == null)) dart.assertFailed(null, I[0], 1153, 12, "child.parent == null");
      if (!!child.attached) dart.assertFailed(null, I[0], 1154, 12, "!child.attached");
      if (!(child.nextSibling == null)) dart.assertFailed(null, I[0], 1155, 12, "child.nextSibling == null");
      if (!(child.previousSibling == null)) dart.assertFailed(null, I[0], 1156, 12, "child.previousSibling == null");
      if (!(child[_parentHandle].layer == null)) dart.assertFailed(null, I[0], 1157, 12, "child._parentHandle.layer == null");
      if (!dart.fn(() => {
        let node = this;
        while (node.parent != null) {
          node = dart.nullCheck(node.parent);
        }
        if (!!node[$_equals](child)) dart.assertFailed(null, I[0], 1163, 14, "node != child");
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1158, 12, "() {\n      Layer node = this;\n      while (node.parent != null) {\n        node = node.parent!;\n      }\n      assert(node != child); // indicates we are about to create a cycle\n      return true;\n    }()");
      this.adoptChild(child);
      child[_previousSibling] = this.lastChild;
      if (this.lastChild != null) {
        dart.nullCheck(this.lastChild)[_nextSibling] = child;
      }
      this[_lastChild] = child;
      this[_firstChild] == null ? this[_firstChild] = child : null;
      child[_parentHandle].layer = child;
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1174, 12, "child.attached == attached");
    }
    [_removeChild](child) {
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[0], 1179, 12, "child.parent == this");
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1180, 12, "child.attached == attached");
      if (!this[_debugUltimatePreviousSiblingOf](child, {equals: this.firstChild})) dart.assertFailed(null, I[0], 1181, 12, "_debugUltimatePreviousSiblingOf(child, equals: firstChild)");
      if (!this[_debugUltimateNextSiblingOf](child, {equals: this.lastChild})) dart.assertFailed(null, I[0], 1182, 12, "_debugUltimateNextSiblingOf(child, equals: lastChild)");
      if (!(child[_parentHandle].layer != null)) dart.assertFailed(null, I[0], 1183, 12, "child._parentHandle.layer != null");
      if (child[_previousSibling] == null) {
        if (!dart.equals(this[_firstChild], child)) dart.assertFailed(null, I[0], 1185, 14, "_firstChild == child");
        this[_firstChild] = child[_nextSibling];
      } else {
        dart.nullCheck(child[_previousSibling])[_nextSibling] = child.nextSibling;
      }
      if (child[_nextSibling] == null) {
        if (!dart.equals(this.lastChild, child)) dart.assertFailed(null, I[0], 1191, 14, "lastChild == child");
        this[_lastChild] = child.previousSibling;
      } else {
        dart.nullCheck(child.nextSibling)[_previousSibling] = child.previousSibling;
      }
      if (!(this.firstChild == null === (this.lastChild == null))) dart.assertFailed(null, I[0], 1196, 12, "(firstChild == null) == (lastChild == null)");
      if (!(this.firstChild == null || dart.nullCheck(this.firstChild).attached === this.attached)) dart.assertFailed(null, I[0], 1197, 12, "firstChild == null || firstChild!.attached == attached");
      if (!(this.lastChild == null || dart.nullCheck(this.lastChild).attached === this.attached)) dart.assertFailed(null, I[0], 1198, 12, "lastChild == null || lastChild!.attached == attached");
      if (!(this.firstChild == null || this[_debugUltimateNextSiblingOf](dart.nullCheck(this.firstChild), {equals: this.lastChild}))) dart.assertFailed(null, I[0], 1199, 12, "firstChild == null || _debugUltimateNextSiblingOf(firstChild!, equals: lastChild)");
      if (!(this.lastChild == null || this[_debugUltimatePreviousSiblingOf](dart.nullCheck(this.lastChild), {equals: this.firstChild}))) dart.assertFailed(null, I[0], 1200, 12, "lastChild == null || _debugUltimatePreviousSiblingOf(lastChild!, equals: firstChild)");
      child[_previousSibling] = null;
      child[_nextSibling] = null;
      this.dropChild(child);
      child[_parentHandle].layer = null;
      if (!!child.attached) dart.assertFailed(null, I[0], 1205, 12, "!child.attached");
    }
    removeAllChildren() {
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[0], 1210, 12, "!_debugMutationsLocked");
      let child = this.firstChild;
      while (child != null) {
        let next = child.nextSibling;
        child[_previousSibling] = null;
        child[_nextSibling] = null;
        if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1216, 14, "child.attached == attached");
        this.dropChild(child);
        if (!(child[_parentHandle] !== null)) dart.assertFailed(null, I[0], 1218, 14, "child._parentHandle != null");
        child[_parentHandle].layer = null;
        child = next;
      }
      this[_firstChild] = null;
      this[_lastChild] = null;
    }
    addToScene(builder) {
      this.addChildrenToScene(builder);
    }
    addChildrenToScene(builder) {
      let child = this.firstChild;
      while (child != null) {
        child[_addToSceneWithRetainedRendering](builder);
        child = child.nextSibling;
      }
    }
    applyTransform(child, transform) {
      if (!(child != null)) dart.assertFailed(null, I[0], 1280, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[0], 1281, 12, "transform != null");
    }
    depthFirstIterateChildren() {
      if (this.firstChild == null) {
        return T$.JSArrayOfLayer().of([]);
      }
      let children = T$.JSArrayOfLayer().of([]);
      let child = this.firstChild;
      while (child != null) {
        children[$add](child);
        if (layer$.ContainerLayer.is(child)) {
          children[$addAll](child.depthFirstIterateChildren());
        }
        child = child.nextSibling;
      }
      return children;
    }
    debugDescribeChildren() {
      let children = T$.JSArrayOfDiagnosticsNode().of([]);
      if (this.firstChild == null) {
        return children;
      }
      let child = this.firstChild;
      let count = 1;
      while (true) {
        children[$add](dart.nullCheck(child).toDiagnosticsNode({name: "child " + dart.str(count)}));
        if (dart.equals(child, this.lastChild)) {
          break;
        }
        count = count + 1;
        child = child.nextSibling;
      }
      return children;
    }
    static ['_#new#tearOff']() {
      return new layer$.ContainerLayer.new();
    }
  };
  (layer$.ContainerLayer.new = function() {
    this[_firstChild] = null;
    this[_lastChild] = null;
    layer$.ContainerLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ContainerLayer.prototype;
  dart.addTypeTests(layer$.ContainerLayer);
  dart.addTypeCaches(layer$.ContainerLayer);
  dart.setMethodSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getMethods(layer$.ContainerLayer.__proto__),
    buildScene: dart.fnType(ui.Scene, [ui.SceneBuilder]),
    [_debugUltimatePreviousSiblingOf]: dart.fnType(core.bool, [layer$.Layer], {equals: dart.nullable(layer$.Layer)}, {}),
    [_debugUltimateNextSiblingOf]: dart.fnType(core.bool, [layer$.Layer], {equals: dart.nullable(layer$.Layer)}, {}),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    append: dart.fnType(dart.void, [layer$.Layer]),
    [_removeChild]: dart.fnType(dart.void, [layer$.Layer]),
    removeAllChildren: dart.fnType(dart.void, []),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    addChildrenToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    applyTransform: dart.fnType(dart.void, [dart.nullable(layer$.Layer), vector_math_64.Matrix4]),
    depthFirstIterateChildren: dart.fnType(core.List$(layer$.Layer), [])
  }));
  dart.setGetterSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getGetters(layer$.ContainerLayer.__proto__),
    firstChild: dart.nullable(layer$.Layer),
    lastChild: dart.nullable(layer$.Layer),
    hasChildren: core.bool
  }));
  dart.setLibraryUri(layer$.ContainerLayer, I[1]);
  dart.setFieldSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getFields(layer$.ContainerLayer.__proto__),
    [_firstChild]: dart.fieldType(dart.nullable(layer$.Layer)),
    [_lastChild]: dart.fieldType(dart.nullable(layer$.Layer))
  }));
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var _offset = dart.privateName(layer$, "_offset");
  layer$.OffsetLayer = class OffsetLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
      return new layer$.OffsetLayer.new({offset: offset});
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!value._equals(this[_offset])) {
        this.markNeedsAddToScene();
      }
      this[_offset] = value;
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return super.findAnnotations(S, result, localPosition['-'](this.offset), {onlyFirst: onlyFirst});
    }
    applyTransform(child, transform) {
      if (!(child != null)) dart.assertFailed(null, I[0], 1361, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[0], 1362, 12, "transform != null");
      transform.translate(this.offset.dx, this.offset.dy);
    }
    addToScene(builder) {
      this.engineLayer = builder.pushOffset(this.offset.dx, this.offset.dy, {oldLayer: T$.OffsetEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("offset", this.offset));
    }
    toImage(bounds, opts) {
      let pixelRatio = opts && 'pixelRatio' in opts ? opts.pixelRatio : 1;
      return async.async(ui.Image, (function* toImage() {
        if (!(bounds !== null)) dart.assertFailed(null, I[0], 1405, 12, "bounds != null");
        if (!(pixelRatio !== null)) dart.assertFailed(null, I[0], 1406, 12, "pixelRatio != null");
        let builder = ui.SceneBuilder.new();
        let transform = vector_math_64.Matrix4.translationValues((-bounds.left - this.offset.dx) * pixelRatio, (-bounds.top - this.offset.dy) * pixelRatio, 0.0);
        transform.scale(pixelRatio, pixelRatio);
        builder.pushTransform(transform.storage);
        let scene = this.buildScene(builder);
        try {
          return yield scene.toImage((pixelRatio * bounds.width)[$ceil](), (pixelRatio * bounds.height)[$ceil]());
        } finally {
          scene.dispose();
        }
      }).bind(this));
    }
  };
  (layer$.OffsetLayer.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    this[_offset] = offset;
    layer$.OffsetLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.OffsetLayer.prototype;
  dart.addTypeTests(layer$.OffsetLayer);
  dart.addTypeCaches(layer$.OffsetLayer);
  dart.setMethodSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getMethods(layer$.OffsetLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    toImage: dart.fnType(async.Future$(ui.Image), [ui.Rect], {pixelRatio: core.double}, {})
  }));
  dart.setGetterSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getGetters(layer$.OffsetLayer.__proto__),
    offset: ui.Offset
  }));
  dart.setSetterSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getSetters(layer$.OffsetLayer.__proto__),
    offset: ui.Offset
  }));
  dart.setLibraryUri(layer$.OffsetLayer, I[1]);
  dart.setFieldSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getFields(layer$.OffsetLayer.__proto__),
    [_offset]: dart.fieldType(ui.Offset)
  }));
  var _clipRect = dart.privateName(layer$, "_clipRect");
  var _clipBehavior = dart.privateName(layer$, "_clipBehavior");
  layer$.ClipRectLayer = class ClipRectLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let clipRect = opts && 'clipRect' in opts ? opts.clipRect : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
      return new layer$.ClipRectLayer.new({clipRect: clipRect, clipBehavior: clipBehavior});
    }
    get clipRect() {
      return this[_clipRect];
    }
    set clipRect(value) {
      if (!dart.equals(value, this[_clipRect])) {
        this[_clipRect] = value;
        this.markNeedsAddToScene();
      }
    }
    describeClipBounds() {
      return this.clipRect;
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1476, 12, "value != null");
      if (!(value !== ui.Clip.none)) dart.assertFailed(null, I[0], 1477, 12, "value != Clip.none");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (!dart.nullCheck(this.clipRect).contains(localPosition)) {
        return false;
      }
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.clipRect != null)) dart.assertFailed(null, I[0], 1494, 12, "clipRect != null");
      if (!(this.clipBehavior !== null)) dart.assertFailed(null, I[0], 1495, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.fn(() => {
        enabled = !debug.debugDisableClipLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1497, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushClipRect(dart.nullCheck(this.clipRect), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipRectEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder);
      if (enabled) {
        builder.pop();
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfRect()).new("clipRect", this.clipRect));
      properties.add(new (T$.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipRectLayer.new = function(opts) {
    let clipRect = opts && 'clipRect' in opts ? opts.clipRect : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
    this[_clipRect] = clipRect;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 1447, 15, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[0], 1448, 15, "clipBehavior != Clip.none");
    layer$.ClipRectLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipRectLayer.prototype;
  dart.addTypeTests(layer$.ClipRectLayer);
  dart.addTypeCaches(layer$.ClipRectLayer);
  dart.setMethodSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipRectLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipRectLayer.__proto__),
    clipRect: dart.nullable(ui.Rect),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipRectLayer.__proto__),
    clipRect: dart.nullable(ui.Rect),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipRectLayer, I[1]);
  dart.setFieldSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getFields(layer$.ClipRectLayer.__proto__),
    [_clipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _clipRRect = dart.privateName(layer$, "_clipRRect");
  layer$.ClipRRectLayer = class ClipRRectLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let clipRRect = opts && 'clipRRect' in opts ? opts.clipRRect : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      return new layer$.ClipRRectLayer.new({clipRRect: clipRRect, clipBehavior: clipBehavior});
    }
    get clipRRect() {
      return this[_clipRRect];
    }
    set clipRRect(value) {
      if (!dart.equals(value, this[_clipRRect])) {
        this[_clipRRect] = value;
        this.markNeedsAddToScene();
      }
    }
    describeClipBounds() {
      let t6;
      t6 = this.clipRRect;
      return t6 == null ? null : t6.outerRect;
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1564, 12, "value != null");
      if (!(value !== ui.Clip.none)) dart.assertFailed(null, I[0], 1565, 12, "value != Clip.none");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (!dart.nullCheck(this.clipRRect).contains(localPosition)) {
        return false;
      }
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.clipRRect != null)) dart.assertFailed(null, I[0], 1582, 12, "clipRRect != null");
      if (!(this.clipBehavior !== null)) dart.assertFailed(null, I[0], 1583, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.fn(() => {
        enabled = !debug.debugDisableClipLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1585, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushClipRRect(dart.nullCheck(this.clipRRect), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipRRectEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder);
      if (enabled) {
        builder.pop();
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfRRect()).new("clipRRect", this.clipRRect));
      properties.add(new (T$.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipRRectLayer.new = function(opts) {
    let clipRRect = opts && 'clipRRect' in opts ? opts.clipRRect : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    this[_clipRRect] = clipRRect;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 1539, 15, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[0], 1540, 15, "clipBehavior != Clip.none");
    layer$.ClipRRectLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipRRectLayer.prototype;
  dart.addTypeTests(layer$.ClipRRectLayer);
  dart.addTypeCaches(layer$.ClipRRectLayer);
  dart.setMethodSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipRRectLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipRRectLayer.__proto__),
    clipRRect: dart.nullable(ui.RRect),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipRRectLayer.__proto__),
    clipRRect: dart.nullable(ui.RRect),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipRRectLayer, I[1]);
  dart.setFieldSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getFields(layer$.ClipRRectLayer.__proto__),
    [_clipRRect]: dart.fieldType(dart.nullable(ui.RRect)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _clipPath = dart.privateName(layer$, "_clipPath");
  layer$.ClipPathLayer = class ClipPathLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      return new layer$.ClipPathLayer.new({clipPath: clipPath, clipBehavior: clipBehavior});
    }
    get clipPath() {
      return this[_clipPath];
    }
    set clipPath(value) {
      if (!dart.equals(value, this[_clipPath])) {
        this[_clipPath] = value;
        this.markNeedsAddToScene();
      }
    }
    describeClipBounds() {
      let t6;
      t6 = this.clipPath;
      return t6 == null ? null : t6.getBounds();
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1652, 12, "value != null");
      if (!(value !== ui.Clip.none)) dart.assertFailed(null, I[0], 1653, 12, "value != Clip.none");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (!dart.nullCheck(this.clipPath).contains(localPosition)) {
        return false;
      }
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.clipPath != null)) dart.assertFailed(null, I[0], 1670, 12, "clipPath != null");
      if (!(this.clipBehavior !== null)) dart.assertFailed(null, I[0], 1671, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.fn(() => {
        enabled = !debug.debugDisableClipLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1673, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushClipPath(dart.nullCheck(this.clipPath), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipPathEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder);
      if (enabled) {
        builder.pop();
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipPathLayer.new = function(opts) {
    let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    this[_clipPath] = clipPath;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 1627, 15, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[0], 1628, 15, "clipBehavior != Clip.none");
    layer$.ClipPathLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipPathLayer.prototype;
  dart.addTypeTests(layer$.ClipPathLayer);
  dart.addTypeCaches(layer$.ClipPathLayer);
  dart.setMethodSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipPathLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipPathLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipPathLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipPathLayer, I[1]);
  dart.setFieldSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getFields(layer$.ClipPathLayer.__proto__),
    [_clipPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _colorFilter = dart.privateName(layer$, "_colorFilter");
  layer$.ColorFilterLayer = class ColorFilterLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
      return new layer$.ColorFilterLayer.new({colorFilter: colorFilter});
    }
    get colorFilter() {
      return this[_colorFilter];
    }
    set colorFilter(value) {
      if (!(value != null)) dart.assertFailed(null, I[0], 1716, 12, "value != null");
      if (!dart.equals(value, this[_colorFilter])) {
        this[_colorFilter] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.colorFilter != null)) dart.assertFailed(null, I[0], 1725, 12, "colorFilter != null");
      this.engineLayer = builder.pushColorFilter(dart.nullCheck(this.colorFilter), {oldLayer: T$.ColorFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfColorFilter()).new("colorFilter", this.colorFilter));
    }
  };
  (layer$.ColorFilterLayer.new = function(opts) {
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    this[_colorFilter] = colorFilter;
    layer$.ColorFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ColorFilterLayer.prototype;
  dart.addTypeTests(layer$.ColorFilterLayer);
  dart.addTypeCaches(layer$.ColorFilterLayer);
  dart.setGetterSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.ColorFilterLayer.__proto__),
    colorFilter: dart.nullable(ui.ColorFilter)
  }));
  dart.setSetterSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.ColorFilterLayer.__proto__),
    colorFilter: dart.nullable(ui.ColorFilter)
  }));
  dart.setLibraryUri(layer$.ColorFilterLayer, I[1]);
  dart.setFieldSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getFields(layer$.ColorFilterLayer.__proto__),
    [_colorFilter]: dart.fieldType(dart.nullable(ui.ColorFilter))
  }));
  var _imageFilter = dart.privateName(layer$, "_imageFilter");
  layer$.ImageFilterLayer = class ImageFilterLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let imageFilter = opts && 'imageFilter' in opts ? opts.imageFilter : null;
      return new layer$.ImageFilterLayer.new({imageFilter: imageFilter});
    }
    get imageFilter() {
      return this[_imageFilter];
    }
    set imageFilter(value) {
      if (!(value != null)) dart.assertFailed(null, I[0], 1758, 12, "value != null");
      if (!dart.equals(value, this[_imageFilter])) {
        this[_imageFilter] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.imageFilter != null)) dart.assertFailed(null, I[0], 1767, 12, "imageFilter != null");
      this.engineLayer = builder.pushImageFilter(dart.nullCheck(this.imageFilter), {oldLayer: T$.ImageFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfImageFilter()).new("imageFilter", this.imageFilter));
    }
  };
  (layer$.ImageFilterLayer.new = function(opts) {
    let imageFilter = opts && 'imageFilter' in opts ? opts.imageFilter : null;
    this[_imageFilter] = imageFilter;
    layer$.ImageFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ImageFilterLayer.prototype;
  dart.addTypeTests(layer$.ImageFilterLayer);
  dart.addTypeCaches(layer$.ImageFilterLayer);
  dart.setGetterSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.ImageFilterLayer.__proto__),
    imageFilter: dart.nullable(ui.ImageFilter)
  }));
  dart.setSetterSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.ImageFilterLayer.__proto__),
    imageFilter: dart.nullable(ui.ImageFilter)
  }));
  dart.setLibraryUri(layer$.ImageFilterLayer, I[1]);
  dart.setFieldSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getFields(layer$.ImageFilterLayer.__proto__),
    [_imageFilter]: dart.fieldType(dart.nullable(ui.ImageFilter))
  }));
  var _lastEffectiveTransform = dart.privateName(layer$, "_lastEffectiveTransform");
  var _invertedTransform = dart.privateName(layer$, "_invertedTransform");
  var _inverseDirty = dart.privateName(layer$, "_inverseDirty");
  var _transform = dart.privateName(layer$, "_transform");
  var _transformOffset = dart.privateName(layer$, "_transformOffset");
  layer$.TransformLayer = class TransformLayer extends layer$.OffsetLayer {
    static ['_#new#tearOff'](opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      return new layer$.TransformLayer.new({transform: transform, offset: offset});
    }
    get transform() {
      return this[_transform];
    }
    set transform(value) {
      if (!(value != null)) dart.assertFailed(null, I[0], 1808, 12, "value != null");
      if (!dart.nullCheck(value).storage[$every](dart.fn(component => component[$isFinite], T$.doubleTobool()))) dart.assertFailed(null, I[0], 1809, 12, "value!.storage.every((double component) => component.isFinite)");
      if (dart.equals(value, this[_transform])) {
        return;
      }
      this[_transform] = value;
      this[_inverseDirty] = true;
      this.markNeedsAddToScene();
    }
    addToScene(builder) {
      let t6;
      if (!(this.transform != null)) dart.assertFailed(null, I[0], 1824, 12, "transform != null");
      this[_lastEffectiveTransform] = this.transform;
      if (!this.offset._equals(ui.Offset.zero)) {
        this[_lastEffectiveTransform] = (t6 = vector_math_64.Matrix4.translationValues(this.offset.dx, this.offset.dy, 0.0), (() => {
          t6.multiply(dart.nullCheck(this[_lastEffectiveTransform]));
          return t6;
        })());
      }
      this.engineLayer = builder.pushTransform(dart.nullCheck(this[_lastEffectiveTransform]).storage, {oldLayer: T$.TransformEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    [_transformOffset](localPosition) {
      if (this[_inverseDirty]) {
        this[_invertedTransform] = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(dart.nullCheck(this.transform)));
        this[_inverseDirty] = false;
      }
      if (this[_invertedTransform] == null) {
        return null;
      }
      return matrix_utils.MatrixUtils.transformPoint(dart.nullCheck(this[_invertedTransform]), localPosition);
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      let transformedOffset = this[_transformOffset](localPosition);
      if (transformedOffset == null) {
        return false;
      }
      return super.findAnnotations(S, result, transformedOffset, {onlyFirst: onlyFirst});
    }
    applyTransform(child, transform) {
      if (!(child != null)) dart.assertFailed(null, I[0], 1863, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[0], 1864, 12, "transform != null");
      if (!(this[_lastEffectiveTransform] != null || this.transform != null)) dart.assertFailed(null, I[0], 1865, 12, "_lastEffectiveTransform != null || this.transform != null");
      if (this[_lastEffectiveTransform] == null) {
        transform.multiply(dart.nullCheck(this.transform));
      } else {
        transform.multiply(dart.nullCheck(this[_lastEffectiveTransform]));
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new matrix_utils.TransformProperty.new("transform", this.transform));
    }
  };
  (layer$.TransformLayer.new = function(opts) {
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    this[_lastEffectiveTransform] = null;
    this[_invertedTransform] = null;
    this[_inverseDirty] = true;
    this[_transform] = transform;
    layer$.TransformLayer.__proto__.new.call(this, {offset: offset});
    ;
  }).prototype = layer$.TransformLayer.prototype;
  dart.addTypeTests(layer$.TransformLayer);
  dart.addTypeCaches(layer$.TransformLayer);
  dart.setMethodSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getMethods(layer$.TransformLayer.__proto__),
    [_transformOffset]: dart.fnType(dart.nullable(ui.Offset), [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getGetters(layer$.TransformLayer.__proto__),
    transform: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setSetterSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getSetters(layer$.TransformLayer.__proto__),
    transform: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setLibraryUri(layer$.TransformLayer, I[1]);
  dart.setFieldSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getFields(layer$.TransformLayer.__proto__),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_lastEffectiveTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_invertedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_inverseDirty]: dart.fieldType(core.bool)
  }));
  var _alpha = dart.privateName(layer$, "_alpha");
  layer$.OpacityLayer = class OpacityLayer extends layer$.OffsetLayer {
    static ['_#new#tearOff'](opts) {
      let alpha = opts && 'alpha' in opts ? opts.alpha : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      return new layer$.OpacityLayer.new({alpha: alpha, offset: offset});
    }
    get alpha() {
      return this[_alpha];
    }
    set alpha(value) {
      if (!(value != null)) dart.assertFailed(null, I[0], 1908, 12, "value != null");
      if (value != this[_alpha]) {
        if (value === 255 || this[_alpha] === 255) {
          this.engineLayer = null;
        }
        this[_alpha] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.alpha != null)) dart.assertFailed(null, I[0], 1920, 12, "alpha != null");
      let enabled = this.firstChild != null;
      if (!enabled) {
        this.engineLayer = null;
        return;
      }
      if (!dart.fn(() => {
        enabled = enabled && !debug.debugDisableOpacityLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1931, 12, "() {\n      enabled = enabled && !debugDisableOpacityLayers;\n      return true;\n    }()");
      let realizedAlpha = dart.nullCheck(this.alpha);
      if (enabled && realizedAlpha < 255) {
        if (!T$.OpacityEngineLayerN().is(this[_engineLayer])) dart.assertFailed(null, I[0], 1940, 14, "_engineLayer is ui.OpacityEngineLayer?");
        this.engineLayer = builder.pushOpacity(realizedAlpha, {offset: this.offset, oldLayer: T$.OpacityEngineLayerN().as(this[_engineLayer])});
      } else {
        if (!T$.OffsetEngineLayerN().is(this[_engineLayer])) dart.assertFailed(null, I[0], 1947, 14, "_engineLayer is ui.OffsetEngineLayer?");
        this.engineLayer = builder.pushOffset(this.offset.dx, this.offset.dy, {oldLayer: T$.OffsetEngineLayerN().as(this[_engineLayer])});
      }
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("alpha", this.alpha));
    }
  };
  (layer$.OpacityLayer.new = function(opts) {
    let alpha = opts && 'alpha' in opts ? opts.alpha : null;
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    this[_alpha] = alpha;
    layer$.OpacityLayer.__proto__.new.call(this, {offset: offset});
    ;
  }).prototype = layer$.OpacityLayer.prototype;
  dart.addTypeTests(layer$.OpacityLayer);
  dart.addTypeCaches(layer$.OpacityLayer);
  dart.setGetterSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getGetters(layer$.OpacityLayer.__proto__),
    alpha: dart.nullable(core.int)
  }));
  dart.setSetterSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getSetters(layer$.OpacityLayer.__proto__),
    alpha: dart.nullable(core.int)
  }));
  dart.setLibraryUri(layer$.OpacityLayer, I[1]);
  dart.setFieldSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getFields(layer$.OpacityLayer.__proto__),
    [_alpha]: dart.fieldType(dart.nullable(core.int))
  }));
  var _shader = dart.privateName(layer$, "_shader");
  var _maskRect = dart.privateName(layer$, "_maskRect");
  var _blendMode = dart.privateName(layer$, "_blendMode");
  layer$.ShaderMaskLayer = class ShaderMaskLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let shader = opts && 'shader' in opts ? opts.shader : null;
      let maskRect = opts && 'maskRect' in opts ? opts.maskRect : null;
      let blendMode = opts && 'blendMode' in opts ? opts.blendMode : null;
      return new layer$.ShaderMaskLayer.new({shader: shader, maskRect: maskRect, blendMode: blendMode});
    }
    get shader() {
      return this[_shader];
    }
    set shader(value) {
      if (!dart.equals(value, this[_shader])) {
        this[_shader] = value;
        this.markNeedsAddToScene();
      }
    }
    get maskRect() {
      return this[_maskRect];
    }
    set maskRect(value) {
      if (!dart.equals(value, this[_maskRect])) {
        this[_maskRect] = value;
        this.markNeedsAddToScene();
      }
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(value) {
      if (value != this[_blendMode]) {
        this[_blendMode] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.shader != null)) dart.assertFailed(null, I[0], 2036, 12, "shader != null");
      if (!(this.maskRect != null)) dart.assertFailed(null, I[0], 2037, 12, "maskRect != null");
      if (!(this.blendMode != null)) dart.assertFailed(null, I[0], 2038, 12, "blendMode != null");
      this.engineLayer = builder.pushShaderMask(dart.nullCheck(this.shader), dart.nullCheck(this.maskRect), dart.nullCheck(this.blendMode), {oldLayer: T$.ShaderMaskEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfShader()).new("shader", this.shader));
      properties.add(new (T$.DiagnosticsPropertyOfRect()).new("maskRect", this.maskRect));
      properties.add(new (T$.EnumPropertyOfBlendMode()).new("blendMode", this.blendMode));
    }
  };
  (layer$.ShaderMaskLayer.new = function(opts) {
    let shader = opts && 'shader' in opts ? opts.shader : null;
    let maskRect = opts && 'maskRect' in opts ? opts.maskRect : null;
    let blendMode = opts && 'blendMode' in opts ? opts.blendMode : null;
    this[_shader] = shader;
    this[_maskRect] = maskRect;
    this[_blendMode] = blendMode;
    layer$.ShaderMaskLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ShaderMaskLayer.prototype;
  dart.addTypeTests(layer$.ShaderMaskLayer);
  dart.addTypeCaches(layer$.ShaderMaskLayer);
  dart.setGetterSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getGetters(layer$.ShaderMaskLayer.__proto__),
    shader: dart.nullable(ui.Shader),
    maskRect: dart.nullable(ui.Rect),
    blendMode: dart.nullable(ui.BlendMode)
  }));
  dart.setSetterSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getSetters(layer$.ShaderMaskLayer.__proto__),
    shader: dart.nullable(ui.Shader),
    maskRect: dart.nullable(ui.Rect),
    blendMode: dart.nullable(ui.BlendMode)
  }));
  dart.setLibraryUri(layer$.ShaderMaskLayer, I[1]);
  dart.setFieldSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getFields(layer$.ShaderMaskLayer.__proto__),
    [_shader]: dart.fieldType(dart.nullable(ui.Shader)),
    [_maskRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_blendMode]: dart.fieldType(dart.nullable(ui.BlendMode))
  }));
  var _filter = dart.privateName(layer$, "_filter");
  layer$.BackdropFilterLayer = class BackdropFilterLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let filter = opts && 'filter' in opts ? opts.filter : null;
      let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C[4] || CT.C4;
      return new layer$.BackdropFilterLayer.new({filter: filter, blendMode: blendMode});
    }
    get filter() {
      return this[_filter];
    }
    set filter(value) {
      if (!dart.equals(value, this[_filter])) {
        this[_filter] = value;
        this.markNeedsAddToScene();
      }
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(value) {
      if (value !== this[_blendMode]) {
        this[_blendMode] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.filter != null)) dart.assertFailed(null, I[0], 2104, 12, "filter != null");
      this.engineLayer = builder.pushBackdropFilter(dart.nullCheck(this.filter), {blendMode: this.blendMode, oldLayer: T$.BackdropFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfImageFilter()).new("filter", this.filter));
      properties.add(new (T$.EnumPropertyOfBlendMode()).new("blendMode", this.blendMode));
    }
  };
  (layer$.BackdropFilterLayer.new = function(opts) {
    let filter = opts && 'filter' in opts ? opts.filter : null;
    let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C[4] || CT.C4;
    this[_filter] = filter;
    this[_blendMode] = blendMode;
    layer$.BackdropFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.BackdropFilterLayer.prototype;
  dart.addTypeTests(layer$.BackdropFilterLayer);
  dart.addTypeCaches(layer$.BackdropFilterLayer);
  dart.setGetterSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.BackdropFilterLayer.__proto__),
    filter: dart.nullable(ui.ImageFilter),
    blendMode: ui.BlendMode
  }));
  dart.setSetterSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.BackdropFilterLayer.__proto__),
    filter: dart.nullable(ui.ImageFilter),
    blendMode: ui.BlendMode
  }));
  dart.setLibraryUri(layer$.BackdropFilterLayer, I[1]);
  dart.setFieldSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getFields(layer$.BackdropFilterLayer.__proto__),
    [_filter]: dart.fieldType(dart.nullable(ui.ImageFilter)),
    [_blendMode]: dart.fieldType(ui.BlendMode)
  }));
  var _elevation = dart.privateName(layer$, "_elevation");
  var _color = dart.privateName(layer$, "_color");
  var _shadowColor = dart.privateName(layer$, "_shadowColor");
  layer$.PhysicalModelLayer = class PhysicalModelLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      return new layer$.PhysicalModelLayer.new({clipPath: clipPath, clipBehavior: clipBehavior, elevation: elevation, color: color, shadowColor: shadowColor});
    }
    get clipPath() {
      return this[_clipPath];
    }
    set clipPath(value) {
      if (!dart.equals(value, this[_clipPath])) {
        this[_clipPath] = value;
        this.markNeedsAddToScene();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2174, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    get elevation() {
      return this[_elevation];
    }
    set elevation(value) {
      if (value != this[_elevation]) {
        this[_elevation] = value;
        this.markNeedsAddToScene();
      }
    }
    get color() {
      return this[_color];
    }
    set color(value) {
      if (!dart.equals(value, this[_color])) {
        this[_color] = value;
        this.markNeedsAddToScene();
      }
    }
    get shadowColor() {
      return this[_shadowColor];
    }
    set shadowColor(value) {
      if (!dart.equals(value, this[_shadowColor])) {
        this[_shadowColor] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (!dart.nullCheck(this.clipPath).contains(localPosition)) {
        return false;
      }
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.clipPath != null)) dart.assertFailed(null, I[0], 2233, 12, "clipPath != null");
      if (!(this.clipBehavior !== null)) dart.assertFailed(null, I[0], 2234, 12, "clipBehavior != null");
      if (!(this.elevation != null)) dart.assertFailed(null, I[0], 2235, 12, "elevation != null");
      if (!(this.color != null)) dart.assertFailed(null, I[0], 2236, 12, "color != null");
      if (!(this.shadowColor != null)) dart.assertFailed(null, I[0], 2237, 12, "shadowColor != null");
      let enabled = true;
      if (!dart.fn(() => {
        enabled = !debug.debugDisablePhysicalShapeLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 2240, 12, "() {\n      enabled = !debugDisablePhysicalShapeLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushPhysicalShape({path: dart.nullCheck(this.clipPath), elevation: dart.nullCheck(this.elevation), color: dart.nullCheck(this.color), shadowColor: this.shadowColor, clipBehavior: this.clipBehavior, oldLayer: T$.PhysicalShapeEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder);
      if (enabled) {
        builder.pop();
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation));
      properties.add(new colors.ColorProperty.new("color", this.color));
    }
  };
  (layer$.PhysicalModelLayer.new = function(opts) {
    let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    this[_clipPath] = clipPath;
    this[_clipBehavior] = clipBehavior;
    this[_elevation] = elevation;
    this[_color] = color;
    this[_shadowColor] = shadowColor;
    layer$.PhysicalModelLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PhysicalModelLayer.prototype;
  dart.addTypeTests(layer$.PhysicalModelLayer);
  dart.addTypeCaches(layer$.PhysicalModelLayer);
  dart.setMethodSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getMethods(layer$.PhysicalModelLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getGetters(layer$.PhysicalModelLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip,
    elevation: dart.nullable(core.double),
    color: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color)
  }));
  dart.setSetterSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getSetters(layer$.PhysicalModelLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip,
    elevation: dart.nullable(core.double),
    color: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color)
  }));
  dart.setLibraryUri(layer$.PhysicalModelLayer, I[1]);
  dart.setFieldSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getFields(layer$.PhysicalModelLayer.__proto__),
    [_clipPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_elevation]: dart.fieldType(dart.nullable(core.double)),
    [_color]: dart.fieldType(dart.nullable(ui.Color)),
    [_shadowColor]: dart.fieldType(dart.nullable(ui.Color))
  }));
  var leaderSize = dart.privateName(layer$, "LayerLink.leaderSize");
  var _leader = dart.privateName(layer$, "_leader");
  var _debugPreviousLeaders = dart.privateName(layer$, "_debugPreviousLeaders");
  var _debugLeaderCheckScheduled = dart.privateName(layer$, "_debugLeaderCheckScheduled");
  var _debugScheduleLeadersCleanUpCheck = dart.privateName(layer$, "_debugScheduleLeadersCleanUpCheck");
  var _registerLeader = dart.privateName(layer$, "_registerLeader");
  var _unregisterLeader = dart.privateName(layer$, "_unregisterLeader");
  layer$.LayerLink = class LayerLink extends core.Object {
    get leaderSize() {
      return this[leaderSize];
    }
    set leaderSize(value) {
      this[leaderSize] = value;
    }
    get leader() {
      return this[_leader];
    }
    [_registerLeader](leader) {
      if (!!dart.equals(this[_leader], leader)) dart.assertFailed(null, I[0], 2288, 12, "_leader != leader");
      if (!dart.fn(() => {
        if (this[_leader] != null) {
          this[_debugPreviousLeaders] == null ? this[_debugPreviousLeaders] = T$.LinkedHashSetOfLeaderLayer().new() : null;
          this[_debugScheduleLeadersCleanUpCheck]();
          return dart.nullCheck(this[_debugPreviousLeaders]).add(dart.nullCheck(this[_leader]));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 2289, 12, "(){\n      if (_leader != null) {\n        _debugPreviousLeaders ??= <LeaderLayer>{};\n        _debugScheduleLeadersCleanUpCheck();\n        return _debugPreviousLeaders!.add(_leader!);\n      }\n      return true;\n    }()");
      this[_leader] = leader;
    }
    [_unregisterLeader](leader) {
      if (dart.equals(this[_leader], leader)) {
        this[_leader] = null;
      } else {
        if (!dart.nullCheck(this[_debugPreviousLeaders]).remove(leader)) dart.assertFailed(null, I[0], 2304, 14, "_debugPreviousLeaders!.remove(leader)");
      }
    }
    [_debugScheduleLeadersCleanUpCheck]() {
      if (!(this[_debugPreviousLeaders] != null)) dart.assertFailed(null, I[0], 2319, 12, "_debugPreviousLeaders != null");
      if (!dart.fn(() => {
        if (this[_debugLeaderCheckScheduled]) {
          return true;
        }
        this[_debugLeaderCheckScheduled] = true;
        binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timeStamp => {
          this[_debugLeaderCheckScheduled] = false;
          if (!dart.nullCheck(this[_debugPreviousLeaders])[$isEmpty]) dart.assertFailed(null, I[0], 2327, 16, "_debugPreviousLeaders!.isEmpty");
        }, T$.DurationTovoid()));
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 2320, 12, "() {\n      if (_debugLeaderCheckScheduled) {\n        return true;\n      }\n      _debugLeaderCheckScheduled = true;\n      SchedulerBinding.instance.addPostFrameCallback((Duration timeStamp) {\n        _debugLeaderCheckScheduled = false;\n        assert(_debugPreviousLeaders!.isEmpty);\n      });\n      return true;\n    }()");
    }
    toString() {
      return diagnostics.describeIdentity(this) + "(" + (this[_leader] != null ? "<linked>" : "<dangling>") + ")";
    }
    static ['_#new#tearOff']() {
      return new layer$.LayerLink.new();
    }
  };
  (layer$.LayerLink.new = function() {
    this[_leader] = null;
    this[_debugPreviousLeaders] = null;
    this[_debugLeaderCheckScheduled] = false;
    this[leaderSize] = null;
    ;
  }).prototype = layer$.LayerLink.prototype;
  dart.addTypeTests(layer$.LayerLink);
  dart.addTypeCaches(layer$.LayerLink);
  dart.setMethodSignature(layer$.LayerLink, () => ({
    __proto__: dart.getMethods(layer$.LayerLink.__proto__),
    [_registerLeader]: dart.fnType(dart.void, [layer$.LeaderLayer]),
    [_unregisterLeader]: dart.fnType(dart.void, [layer$.LeaderLayer]),
    [_debugScheduleLeadersCleanUpCheck]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(layer$.LayerLink, () => ({
    __proto__: dart.getGetters(layer$.LayerLink.__proto__),
    leader: dart.nullable(layer$.LeaderLayer)
  }));
  dart.setLibraryUri(layer$.LayerLink, I[1]);
  dart.setFieldSignature(layer$.LayerLink, () => ({
    __proto__: dart.getFields(layer$.LayerLink.__proto__),
    [_leader]: dart.fieldType(dart.nullable(layer$.LeaderLayer)),
    [_debugPreviousLeaders]: dart.fieldType(dart.nullable(core.Set$(layer$.LeaderLayer))),
    [_debugLeaderCheckScheduled]: dart.fieldType(core.bool),
    leaderSize: dart.fieldType(dart.nullable(ui.Size))
  }));
  dart.defineExtensionMethods(layer$.LayerLink, ['toString']);
  var _link = dart.privateName(layer$, "_link");
  layer$.LeaderLayer = class LeaderLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let link = opts && 'link' in opts ? opts.link : null;
      let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
      return new layer$.LeaderLayer.new({link: link, offset: offset});
    }
    get link() {
      return this[_link];
    }
    set link(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2368, 12, "value != null");
      if (this[_link][$_equals](value)) {
        return;
      }
      if (this.attached) {
        this[_link][_unregisterLeader](this);
        value[_registerLeader](this);
      }
      this[_link] = value;
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2389, 12, "value != null");
      if (value._equals(this[_offset])) {
        return;
      }
      this[_offset] = value;
      if (!this.alwaysNeedsAddToScene) {
        this.markNeedsAddToScene();
      }
    }
    attach(owner) {
      core.Object.as(owner);
      super.attach(owner);
      this[_link][_registerLeader](this);
    }
    detach() {
      this[_link][_unregisterLeader](this);
      super.detach();
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return super.findAnnotations(S, result, localPosition['-'](this.offset), {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.offset !== null)) dart.assertFailed(null, I[0], 2418, 12, "offset != null");
      if (!this.offset._equals(ui.Offset.zero)) {
        this.engineLayer = builder.pushTransform(vector_math_64.Matrix4.translationValues(this.offset.dx, this.offset.dy, 0.0).storage, {oldLayer: T$.TransformEngineLayerN().as(this[_engineLayer])});
      }
      this.addChildrenToScene(builder);
      if (!this.offset._equals(ui.Offset.zero)) {
        builder.pop();
      }
    }
    applyTransform(child, transform) {
      if (!this.offset._equals(ui.Offset.zero)) {
        transform.translate(this.offset.dx, this.offset.dy);
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("offset", this.offset));
      properties.add(new (T$.DiagnosticsPropertyOfLayerLink()).new("link", this.link));
    }
  };
  (layer$.LeaderLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    if (!(link !== null)) dart.assertFailed(null, I[0], 2359, 82, "link != null");
    this[_link] = link;
    this[_offset] = offset;
    layer$.LeaderLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.LeaderLayer.prototype;
  dart.addTypeTests(layer$.LeaderLayer);
  dart.addTypeCaches(layer$.LeaderLayer);
  dart.setMethodSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getMethods(layer$.LeaderLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getGetters(layer$.LeaderLayer.__proto__),
    link: layer$.LayerLink,
    offset: ui.Offset
  }));
  dart.setSetterSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getSetters(layer$.LeaderLayer.__proto__),
    link: layer$.LayerLink,
    offset: ui.Offset
  }));
  dart.setLibraryUri(layer$.LeaderLayer, I[1]);
  dart.setFieldSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getFields(layer$.LeaderLayer.__proto__),
    [_link]: dart.fieldType(layer$.LayerLink),
    [_offset]: dart.fieldType(ui.Offset)
  }));
  var showWhenUnlinked$ = dart.privateName(layer$, "FollowerLayer.showWhenUnlinked");
  var unlinkedOffset$ = dart.privateName(layer$, "FollowerLayer.unlinkedOffset");
  var linkedOffset$ = dart.privateName(layer$, "FollowerLayer.linkedOffset");
  var _lastOffset = dart.privateName(layer$, "_lastOffset");
  var _lastTransform = dart.privateName(layer$, "_lastTransform");
  var _debugCheckLeaderBeforeFollower = dart.privateName(layer$, "_debugCheckLeaderBeforeFollower");
  var _establishTransform = dart.privateName(layer$, "_establishTransform");
  layer$.FollowerLayer = class FollowerLayer extends layer$.ContainerLayer {
    get showWhenUnlinked() {
      return this[showWhenUnlinked$];
    }
    set showWhenUnlinked(value) {
      this[showWhenUnlinked$] = value;
    }
    get unlinkedOffset() {
      return this[unlinkedOffset$];
    }
    set unlinkedOffset(value) {
      this[unlinkedOffset$] = value;
    }
    get linkedOffset() {
      return this[linkedOffset$];
    }
    set linkedOffset(value) {
      this[linkedOffset$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let link = opts && 'link' in opts ? opts.link : null;
      let showWhenUnlinked = opts && 'showWhenUnlinked' in opts ? opts.showWhenUnlinked : true;
      let unlinkedOffset = opts && 'unlinkedOffset' in opts ? opts.unlinkedOffset : C[1] || CT.C1;
      let linkedOffset = opts && 'linkedOffset' in opts ? opts.linkedOffset : C[1] || CT.C1;
      return new layer$.FollowerLayer.new({link: link, showWhenUnlinked: showWhenUnlinked, unlinkedOffset: unlinkedOffset, linkedOffset: linkedOffset});
    }
    get link() {
      return this[_link];
    }
    set link(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2484, 12, "value != null");
      this[_link] = value;
    }
    [_transformOffset](localPosition) {
      if (this[_inverseDirty]) {
        this[_invertedTransform] = vector_math_64.Matrix4.tryInvert(dart.nullCheck(this.getLastTransform()));
        this[_inverseDirty] = false;
      }
      if (this[_invertedTransform] == null) {
        return null;
      }
      let vector = vector_math_64.Vector4.new(localPosition.dx, localPosition.dy, 0.0, 1.0);
      let result = dart.nullCheck(this[_invertedTransform]).transform(vector);
      return new ui.Offset.new(result._get(0) - dart.nullCheck(this.linkedOffset).dx, result._get(1) - dart.nullCheck(this.linkedOffset).dy);
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (this[_link].leader == null) {
        if (dart.nullCheck(this.showWhenUnlinked)) {
          return super.findAnnotations(S, result, localPosition['-'](dart.nullCheck(this.unlinkedOffset)), {onlyFirst: onlyFirst});
        }
        return false;
      }
      let transformedOffset = this[_transformOffset](localPosition);
      if (transformedOffset == null) {
        return false;
      }
      return super.findAnnotations(S, result, transformedOffset, {onlyFirst: onlyFirst});
    }
    getLastTransform() {
      if (this[_lastTransform] == null) {
        return null;
      }
      let result = vector_math_64.Matrix4.translationValues(-dart.nullCheck(this[_lastOffset]).dx, -dart.nullCheck(this[_lastOffset]).dy, 0.0);
      result.multiply(dart.nullCheck(this[_lastTransform]));
      return result;
    }
    static _collectTransformForLayerChain(layers) {
      let t6;
      let result = vector_math_64.Matrix4.identity();
      for (let index = layers[$length] - 1; index > 0; index = index - 1) {
        t6 = layers[$_get](index);
        t6 == null ? null : t6.applyTransform(layers[$_get](index - 1), result);
      }
      return result;
    }
    static _pathsToCommonAncestor(a, b, ancestorsA, ancestorsB) {
      if (a == null || b == null) {
        return null;
      }
      if (a == b) {
        return a;
      }
      if (a.depth < b.depth) {
        ancestorsB[$add](b.parent);
        return layer$.FollowerLayer._pathsToCommonAncestor(a, b.parent, ancestorsA, ancestorsB);
      } else if (a.depth > b.depth) {
        ancestorsA[$add](a.parent);
        return layer$.FollowerLayer._pathsToCommonAncestor(a.parent, b, ancestorsA, ancestorsB);
      }
      ancestorsA[$add](a.parent);
      ancestorsB[$add](b.parent);
      return layer$.FollowerLayer._pathsToCommonAncestor(a.parent, b.parent, ancestorsA, ancestorsB);
    }
    [_debugCheckLeaderBeforeFollower](leaderToCommonAncestor, followerToCommonAncestor) {
      if (followerToCommonAncestor[$length] <= 1) {
        return false;
      }
      if (leaderToCommonAncestor[$length] <= 1) {
        return true;
      }
      let leaderSubtreeBelowAncestor = leaderToCommonAncestor[$_get](leaderToCommonAncestor[$length] - 2);
      let followerSubtreeBelowAncestor = followerToCommonAncestor[$_get](followerToCommonAncestor[$length] - 2);
      let sibling = leaderSubtreeBelowAncestor;
      while (sibling != null) {
        if (dart.equals(sibling, followerSubtreeBelowAncestor)) {
          return true;
        }
        sibling = sibling.nextSibling;
      }
      return false;
    }
    [_establishTransform]() {
      if (!(this.link !== null)) dart.assertFailed(null, I[0], 2660, 12, "link != null");
      this[_lastTransform] = null;
      let leader = this[_link].leader;
      if (leader == null) {
        return;
      }
      if (!dart.equals(leader.owner, this.owner)) dart.assertFailed("Linked LeaderLayer anchor is not in the same layer tree as the FollowerLayer.", I[0], 2669, 7, "leader.owner == owner");
      let forwardLayers = T$.JSArrayOfContainerLayer().of([leader]);
      let inverseLayers = T$.JSArrayOfContainerLayer().of([this]);
      let ancestor = layer$.FollowerLayer._pathsToCommonAncestor(leader, this, forwardLayers, inverseLayers);
      if (!(ancestor != null)) dart.assertFailed("LeaderLayer and FollowerLayer do not have a common ancestor.", I[0], 2684, 7, "ancestor != null");
      if (!this[_debugCheckLeaderBeforeFollower](forwardLayers, inverseLayers)) dart.assertFailed("LeaderLayer anchor must come before FollowerLayer in paint order, but the reverse was true.", I[0], 2688, 7, "_debugCheckLeaderBeforeFollower(forwardLayers, inverseLayers)");
      let forwardTransform = layer$.FollowerLayer._collectTransformForLayerChain(forwardLayers);
      leader.applyTransform(null, forwardTransform);
      forwardTransform.translate(dart.nullCheck(this.linkedOffset).dx, dart.nullCheck(this.linkedOffset).dy);
      let inverseTransform = layer$.FollowerLayer._collectTransformForLayerChain(inverseLayers);
      if (inverseTransform.invert() === 0.0) {
        return;
      }
      inverseTransform.multiply(forwardTransform);
      this[_lastTransform] = inverseTransform;
      this[_inverseDirty] = true;
    }
    get alwaysNeedsAddToScene() {
      return true;
    }
    addToScene(builder) {
      if (!(this.link !== null)) dart.assertFailed(null, I[0], 2726, 12, "link != null");
      if (!(this.showWhenUnlinked != null)) dart.assertFailed(null, I[0], 2727, 12, "showWhenUnlinked != null");
      if (this[_link].leader == null && !dart.nullCheck(this.showWhenUnlinked)) {
        this[_lastTransform] = null;
        this[_lastOffset] = null;
        this[_inverseDirty] = true;
        this.engineLayer = null;
        return;
      }
      this[_establishTransform]();
      if (this[_lastTransform] != null) {
        this[_lastOffset] = this.unlinkedOffset;
        this.engineLayer = builder.pushTransform(dart.nullCheck(this[_lastTransform]).storage, {oldLayer: T$.TransformEngineLayerN().as(this[_engineLayer])});
        this.addChildrenToScene(builder);
        builder.pop();
      } else {
        this[_lastOffset] = null;
        let matrix = vector_math_64.Matrix4.translationValues(dart.nullCheck(this.unlinkedOffset).dx, dart.nullCheck(this.unlinkedOffset).dy, 0.0);
        this.engineLayer = builder.pushTransform(matrix.storage, {oldLayer: T$.TransformEngineLayerN().as(this[_engineLayer])});
        this.addChildrenToScene(builder);
        builder.pop();
      }
      this[_inverseDirty] = true;
    }
    applyTransform(child, transform) {
      if (!(child != null)) dart.assertFailed(null, I[0], 2759, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[0], 2760, 12, "transform != null");
      if (this[_lastTransform] != null) {
        transform.multiply(dart.nullCheck(this[_lastTransform]));
      } else {
        transform.multiply(vector_math_64.Matrix4.translationValues(dart.nullCheck(this.unlinkedOffset).dx, dart.nullCheck(this.unlinkedOffset).dy, 0.0));
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLayerLink()).new("link", this.link));
      properties.add(new matrix_utils.TransformProperty.new("transform", this.getLastTransform(), {defaultValue: null}));
    }
  };
  (layer$.FollowerLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    let showWhenUnlinked = opts && 'showWhenUnlinked' in opts ? opts.showWhenUnlinked : true;
    let unlinkedOffset = opts && 'unlinkedOffset' in opts ? opts.unlinkedOffset : C[1] || CT.C1;
    let linkedOffset = opts && 'linkedOffset' in opts ? opts.linkedOffset : C[1] || CT.C1;
    this[_lastOffset] = null;
    this[_lastTransform] = null;
    this[_invertedTransform] = null;
    this[_inverseDirty] = true;
    this[showWhenUnlinked$] = showWhenUnlinked;
    this[unlinkedOffset$] = unlinkedOffset;
    this[linkedOffset$] = linkedOffset;
    if (!(link !== null)) dart.assertFailed(null, I[0], 2475, 15, "link != null");
    this[_link] = link;
    layer$.FollowerLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.FollowerLayer.prototype;
  dart.addTypeTests(layer$.FollowerLayer);
  dart.addTypeCaches(layer$.FollowerLayer);
  dart.setMethodSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getMethods(layer$.FollowerLayer.__proto__),
    [_transformOffset]: dart.fnType(dart.nullable(ui.Offset), [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    getLastTransform: dart.fnType(dart.nullable(vector_math_64.Matrix4), []),
    [_debugCheckLeaderBeforeFollower]: dart.fnType(core.bool, [core.List$(layer$.ContainerLayer), core.List$(layer$.ContainerLayer)]),
    [_establishTransform]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(layer$.FollowerLayer, () => ['_collectTransformForLayerChain', '_pathsToCommonAncestor']);
  dart.setGetterSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getGetters(layer$.FollowerLayer.__proto__),
    link: layer$.LayerLink
  }));
  dart.setSetterSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getSetters(layer$.FollowerLayer.__proto__),
    link: layer$.LayerLink
  }));
  dart.setLibraryUri(layer$.FollowerLayer, I[1]);
  dart.setFieldSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getFields(layer$.FollowerLayer.__proto__),
    [_link]: dart.fieldType(layer$.LayerLink),
    showWhenUnlinked: dart.fieldType(dart.nullable(core.bool)),
    unlinkedOffset: dart.fieldType(dart.nullable(ui.Offset)),
    linkedOffset: dart.fieldType(dart.nullable(ui.Offset)),
    [_lastOffset]: dart.fieldType(dart.nullable(ui.Offset)),
    [_lastTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_invertedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_inverseDirty]: dart.fieldType(core.bool)
  }));
  var value$ = dart.privateName(layer$, "AnnotatedRegionLayer.value");
  var size$ = dart.privateName(layer$, "AnnotatedRegionLayer.size");
  var offset$ = dart.privateName(layer$, "AnnotatedRegionLayer.offset");
  var opaque$ = dart.privateName(layer$, "AnnotatedRegionLayer.opaque");
  const _is_AnnotatedRegionLayer_default = Symbol('_is_AnnotatedRegionLayer_default');
  layer$.AnnotatedRegionLayer$ = dart.generic(T => {
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    class AnnotatedRegionLayer extends layer$.ContainerLayer {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get size() {
        return this[size$];
      }
      set size(value) {
        super.size = value;
      }
      get offset() {
        return this[offset$];
      }
      set offset(value) {
        super.offset = value;
      }
      get opaque() {
        return this[opaque$];
      }
      set opaque(value) {
        super.opaque = value;
      }
      static ['_#new#tearOff'](T, value, opts) {
        let size = opts && 'size' in opts ? opts.size : null;
        let offset = opts && 'offset' in opts ? opts.offset : null;
        let opaque = opts && 'opaque' in opts ? opts.opaque : false;
        return new (layer$.AnnotatedRegionLayer$(T)).new(value, {size: size, offset: offset, opaque: opaque});
      }
      findAnnotations(S, result, localPosition, opts) {
        let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
        let isAbsorbed = super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
        if (result.entries[$isNotEmpty] && onlyFirst) {
          return isAbsorbed;
        }
        if (this.size != null && !this.offset['&'](dart.nullCheck(this.size)).contains(localPosition)) {
          return isAbsorbed;
        }
        if (dart.wrapType(T)._equals(dart.wrapType(S))) {
          isAbsorbed = isAbsorbed || this.opaque;
          let untypedValue = this.value;
          let typedValue = S.as(untypedValue);
          result.add(new (layer$.AnnotationEntry$(S)).new({annotation: typedValue, localPosition: localPosition['-'](this.offset)}));
        }
        return isAbsorbed;
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (__t$DiagnosticsPropertyOfT()).new("value", this.value));
        properties.add(new (T$.DiagnosticsPropertyOfSize()).new("size", this.size, {defaultValue: null}));
        properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("offset", this.offset, {defaultValue: null}));
        properties.add(new (T$.DiagnosticsPropertyOfbool()).new("opaque", this.opaque, {defaultValue: false}));
      }
    }
    (AnnotatedRegionLayer.new = function(value, opts) {
      let t6;
      let size = opts && 'size' in opts ? opts.size : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let opaque = opts && 'opaque' in opts ? opts.opaque : false;
      this[value$] = value;
      this[size$] = size;
      this[opaque$] = opaque;
      if (!(value !== null)) dart.assertFailed(null, I[0], 2806, 15, "value != null");
      if (!(opaque !== null)) dart.assertFailed(null, I[0], 2807, 15, "opaque != null");
      this[offset$] = (t6 = offset, t6 == null ? ui.Offset.zero : t6);
      AnnotatedRegionLayer.__proto__.new.call(this);
      ;
    }).prototype = AnnotatedRegionLayer.prototype;
    dart.addTypeTests(AnnotatedRegionLayer);
    AnnotatedRegionLayer.prototype[_is_AnnotatedRegionLayer_default] = true;
    dart.addTypeCaches(AnnotatedRegionLayer);
    dart.setMethodSignature(AnnotatedRegionLayer, () => ({
      __proto__: dart.getMethods(AnnotatedRegionLayer.__proto__),
      findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
    }));
    dart.setLibraryUri(AnnotatedRegionLayer, I[1]);
    dart.setFieldSignature(AnnotatedRegionLayer, () => ({
      __proto__: dart.getFields(AnnotatedRegionLayer.__proto__),
      value: dart.finalFieldType(T),
      size: dart.finalFieldType(dart.nullable(ui.Size)),
      offset: dart.finalFieldType(ui.Offset),
      opaque: dart.finalFieldType(core.bool)
    }));
    return AnnotatedRegionLayer;
  });
  layer$.AnnotatedRegionLayer = layer$.AnnotatedRegionLayer$();
  dart.addTypeTests(layer$.AnnotatedRegionLayer, _is_AnnotatedRegionLayer_default);
  object$.ParentData = class ParentData extends core.Object {
    detach() {
    }
    toString() {
      return "<none>";
    }
    static ['_#new#tearOff']() {
      return new object$.ParentData.new();
    }
  };
  (object$.ParentData.new = function() {
    ;
  }).prototype = object$.ParentData.prototype;
  dart.addTypeTests(object$.ParentData);
  dart.addTypeCaches(object$.ParentData);
  dart.setMethodSignature(object$.ParentData, () => ({
    __proto__: dart.getMethods(object$.ParentData.__proto__),
    detach: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.ParentData, I[2]);
  dart.defineExtensionMethods(object$.ParentData, ['toString']);
  var estimatedBounds$ = dart.privateName(object$, "PaintingContext.estimatedBounds");
  var _currentLayer = dart.privateName(object$, "_currentLayer");
  var _recorder = dart.privateName(object$, "_recorder");
  var _canvas = dart.privateName(object$, "_canvas");
  var _containerLayer$ = dart.privateName(object$, "_containerLayer");
  var _needsPaint = dart.privateName(object$, "_needsPaint");
  var _layerHandle = dart.privateName(object$, "_layerHandle");
  var _needsCompositedLayerUpdate = dart.privateName(object$, "_needsCompositedLayerUpdate");
  var _paintWithContext = dart.privateName(object$, "_paintWithContext");
  var _wasRepaintBoundary = dart.privateName(object$, "_wasRepaintBoundary");
  var _compositeChild = dart.privateName(object$, "_compositeChild");
  var _isRecording = dart.privateName(object$, "_isRecording");
  var _startRecording = dart.privateName(object$, "_startRecording");
  var Color_value = dart.privateName(ui, "Color.value");
  object$.PaintingContext = class PaintingContext extends clip.ClipContext {
    get estimatedBounds() {
      return this[estimatedBounds$];
    }
    set estimatedBounds(value) {
      super.estimatedBounds = value;
    }
    static ['_#new#tearOff'](_containerLayer, estimatedBounds) {
      return new object$.PaintingContext.new(_containerLayer, estimatedBounds);
    }
    static repaintCompositedChild(child, opts) {
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      if (!child[_needsPaint]) dart.assertFailed(null, I[3], 97, 12, "child._needsPaint");
      object$.PaintingContext._repaintCompositedChild(child, {debugAlsoPaintedParent: debugAlsoPaintedParent});
    }
    static _repaintCompositedChild(child, opts) {
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      let childContext = opts && 'childContext' in opts ? opts.childContext : null;
      if (!child.isRepaintBoundary) dart.assertFailed(null, I[3], 109, 12, "child.isRepaintBoundary");
      if (!dart.fn(() => {
        child.debugRegisterRepaintBoundaryPaint({includedParent: debugAlsoPaintedParent, includedChild: true});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 110, 12, "() {\n      // register the call for RepaintBoundary metrics\n      child.debugRegisterRepaintBoundaryPaint(\n        includedParent: debugAlsoPaintedParent,\n        includedChild: true,\n      );\n      return true;\n    }()");
      let childLayer = T$.OffsetLayerN().as(child[_layerHandle].layer);
      if (childLayer == null) {
        if (!debugAlsoPaintedParent) dart.assertFailed(null, I[3], 120, 14, "debugAlsoPaintedParent");
        if (!(child[_layerHandle].layer == null)) dart.assertFailed(null, I[3], 121, 14, "child._layerHandle.layer == null");
        let layer = child.updateCompositedLayer({oldLayer: null});
        child[_layerHandle].layer = childLayer = layer;
      } else {
        if (!(debugAlsoPaintedParent || childLayer.attached)) dart.assertFailed(null, I[3], 130, 14, "debugAlsoPaintedParent || childLayer.attached");
        let debugOldOffset = null;
        if (!dart.fn(() => {
          debugOldOffset = dart.nullCheck(childLayer).offset;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 132, 14, "() {\n        debugOldOffset = childLayer!.offset;\n        return true;\n      }()");
        childLayer.removeAllChildren();
        let updatedLayer = child.updateCompositedLayer({oldLayer: childLayer});
        if (!(updatedLayer === childLayer)) dart.assertFailed(dart.str(child) + " created a new layer instance " + dart.str(updatedLayer) + " instead of reusing the " + "existing layer " + dart.str(childLayer) + ". See the documentation of RenderObject.updateCompositedLayer " + "for more information on how to correctly implement this method.", I[3], 138, 14, "identical(updatedLayer, childLayer)");
        if (!dart.equals(debugOldOffset, updatedLayer.offset)) dart.assertFailed(null, I[3], 143, 14, "debugOldOffset == updatedLayer.offset");
      }
      child[_needsCompositedLayerUpdate] = false;
      if (!(childLayer == child[_layerHandle].layer)) dart.assertFailed(null, I[3], 147, 12, "identical(childLayer, child._layerHandle.layer)");
      if (!layer$.OffsetLayer.is(child[_layerHandle].layer)) dart.assertFailed(null, I[3], 148, 12, "child._layerHandle.layer is OffsetLayer");
      if (!dart.fn(() => {
        let t6;
        dart.nullCheck(childLayer).debugCreator = (t6 = child.debugCreator, t6 == null ? child[$runtimeType] : t6);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 149, 12, "() {\n      childLayer!.debugCreator = child.debugCreator ?? child.runtimeType;\n      return true;\n    }()");
      childContext == null ? childContext = new object$.PaintingContext.new(childLayer, child.paintBounds) : null;
      child[_paintWithContext](childContext, ui.Offset.zero);
      if (!(childLayer == child[_layerHandle].layer)) dart.assertFailed(null, I[3], 159, 12, "identical(childLayer, child._layerHandle.layer)");
      childContext.stopRecordingIfNeeded();
    }
    static updateLayerProperties(child) {
      if (!(child.isRepaintBoundary && child[_wasRepaintBoundary])) dart.assertFailed(null, I[3], 175, 12, "child.isRepaintBoundary && child._wasRepaintBoundary");
      if (!!child[_needsPaint]) dart.assertFailed(null, I[3], 176, 12, "!child._needsPaint");
      if (!(child[_layerHandle].layer != null)) dart.assertFailed(null, I[3], 177, 12, "child._layerHandle.layer != null");
      let childLayer = layer$.OffsetLayer.as(dart.nullCheck(child[_layerHandle].layer));
      let debugOldOffset = null;
      if (!dart.fn(() => {
        debugOldOffset = childLayer.offset;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 181, 12, "() {\n      debugOldOffset = childLayer.offset;\n      return true;\n    }()");
      let updatedLayer = child.updateCompositedLayer({oldLayer: childLayer});
      if (!(updatedLayer === childLayer)) dart.assertFailed(dart.str(child) + " created a new layer instance " + dart.str(updatedLayer) + " instead of reusing the " + "existing layer " + dart.str(childLayer) + ". See the documentation of RenderObject.updateCompositedLayer " + "for more information on how to correctly implement this method.", I[3], 186, 12, "identical(updatedLayer, childLayer)");
      if (!dart.equals(debugOldOffset, updatedLayer.offset)) dart.assertFailed(null, I[3], 191, 12, "debugOldOffset == updatedLayer.offset");
      child[_needsCompositedLayerUpdate] = false;
    }
    static debugInstrumentRepaintCompositedChild(child, opts) {
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      let customContext = opts && 'customContext' in opts ? opts.customContext : null;
      if (!dart.fn(() => {
        object$.PaintingContext._repaintCompositedChild(child, {debugAlsoPaintedParent: debugAlsoPaintedParent, childContext: customContext});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 208, 12, "() {\n      _repaintCompositedChild(\n        child,\n        debugAlsoPaintedParent: debugAlsoPaintedParent,\n        childContext: customContext,\n      );\n      return true;\n    }()");
    }
    paintChild(child, offset) {
      if (!dart.fn(() => {
        let t6;
        t6 = debug.debugOnProfilePaint;
        t6 == null ? null : t6(child);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 224, 12, "() {\n      debugOnProfilePaint?.call(child);\n      return true;\n    }()");
      if (child.isRepaintBoundary) {
        this.stopRecordingIfNeeded();
        this[_compositeChild](child, offset);
      } else if (child[_wasRepaintBoundary]) {
        if (!layer$.OffsetLayer.is(child[_layerHandle].layer)) dart.assertFailed(null, I[3], 235, 14, "child._layerHandle.layer is OffsetLayer");
        child[_layerHandle].layer = null;
        child[_paintWithContext](this, offset);
      } else {
        child[_paintWithContext](this, offset);
      }
    }
    [_compositeChild](child, offset) {
      if (!!this[_isRecording]) dart.assertFailed(null, I[3], 244, 12, "!_isRecording");
      if (!child.isRepaintBoundary) dart.assertFailed(null, I[3], 245, 12, "child.isRepaintBoundary");
      if (!(this[_canvas] == null || dart.nullCheck(this[_canvas]).getSaveCount() === 1)) dart.assertFailed(null, I[3], 246, 12, "_canvas == null || _canvas!.getSaveCount() == 1");
      if (child[_needsPaint] || !child[_wasRepaintBoundary]) {
        object$.PaintingContext.repaintCompositedChild(child, {debugAlsoPaintedParent: true});
      } else {
        if (child[_needsCompositedLayerUpdate]) {
          object$.PaintingContext.updateLayerProperties(child);
        }
        if (!dart.fn(() => {
          let t6;
          child.debugRegisterRepaintBoundaryPaint();
          dart.nullCheck(child[_layerHandle].layer).debugCreator = (t6 = child.debugCreator, t6 == null ? child : t6);
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 255, 14, "() {\n        // register the call for RepaintBoundary metrics\n        child.debugRegisterRepaintBoundaryPaint();\n        child._layerHandle.layer!.debugCreator = child.debugCreator ?? child;\n        return true;\n      }()");
      }
      if (!layer$.OffsetLayer.is(child[_layerHandle].layer)) dart.assertFailed(null, I[3], 262, 12, "child._layerHandle.layer is OffsetLayer");
      let childOffsetLayer = layer$.OffsetLayer.as(dart.nullCheck(child[_layerHandle].layer));
      childOffsetLayer.offset = offset;
      this.appendLayer(childOffsetLayer);
    }
    appendLayer(layer) {
      if (!!this[_isRecording]) dart.assertFailed(null, I[3], 279, 12, "!_isRecording");
      layer.remove();
      this[_containerLayer$].append(layer);
    }
    get [_isRecording]() {
      let hasCanvas = this[_canvas] != null;
      if (!dart.fn(() => {
        if (hasCanvas) {
          if (!(this[_currentLayer] != null)) dart.assertFailed(null, I[3], 288, 16, "_currentLayer != null");
          if (!(this[_recorder] != null)) dart.assertFailed(null, I[3], 289, 16, "_recorder != null");
          if (!(this[_canvas] != null)) dart.assertFailed(null, I[3], 290, 16, "_canvas != null");
        } else {
          if (!(this[_currentLayer] == null)) dart.assertFailed(null, I[3], 292, 16, "_currentLayer == null");
          if (!(this[_recorder] == null)) dart.assertFailed(null, I[3], 293, 16, "_recorder == null");
          if (!(this[_canvas] == null)) dart.assertFailed(null, I[3], 294, 16, "_canvas == null");
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 286, 12, "() {\n      if (hasCanvas) {\n        assert(_currentLayer != null);\n        assert(_recorder != null);\n        assert(_canvas != null);\n      } else {\n        assert(_currentLayer == null);\n        assert(_recorder == null);\n        assert(_canvas == null);\n      }\n      return true;\n    }()");
      return hasCanvas;
    }
    get canvas() {
      if (this[_canvas] == null) {
        this[_startRecording]();
      }
      if (!(this[_currentLayer] != null)) dart.assertFailed(null, I[3], 316, 12, "_currentLayer != null");
      return dart.nullCheck(this[_canvas]);
    }
    [_startRecording]() {
      if (!!this[_isRecording]) dart.assertFailed(null, I[3], 321, 12, "!_isRecording");
      this[_currentLayer] = new layer$.PictureLayer.new(this.estimatedBounds);
      this[_recorder] = ui.PictureRecorder.new();
      this[_canvas] = ui.Canvas.new(dart.nullCheck(this[_recorder]));
      this[_containerLayer$].append(dart.nullCheck(this[_currentLayer]));
    }
    addCompositionCallback(callback) {
      return this[_containerLayer$].addCompositionCallback(callback);
    }
    stopRecordingIfNeeded() {
      if (!this[_isRecording]) {
        return;
      }
      if (!dart.fn(() => {
        let t6, t6$;
        if (debug.debugRepaintRainbowEnabled) {
          let paint = (t6 = ui.Paint.new(), (() => {
            t6.style = ui.PaintingStyle.stroke;
            t6.strokeWidth = 6.0;
            t6.color = debug.debugCurrentRepaintColor.toColor();
            return t6;
          })());
          this.canvas.drawRect(this.estimatedBounds.deflate(3.0), paint);
        }
        if (debug.debugPaintLayerBordersEnabled) {
          let paint = (t6$ = ui.Paint.new(), (() => {
            t6$.style = ui.PaintingStyle.stroke;
            t6$.strokeWidth = 1.0;
            t6$.color = C[6] || CT.C6;
            return t6$;
          })());
          this.canvas.drawRect(this.estimatedBounds, paint);
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 360, 12, "() {\n      if (debugRepaintRainbowEnabled) {\n        final Paint paint = Paint()\n          ..style = PaintingStyle.stroke\n          ..strokeWidth = 6.0\n          ..color = debugCurrentRepaintColor.toColor();\n        canvas.drawRect(estimatedBounds.deflate(3.0), paint);\n      }\n      if (debugPaintLayerBordersEnabled) {\n        final Paint paint = Paint()\n          ..style = PaintingStyle.stroke\n          ..strokeWidth = 1.0\n          ..color = const Color(0xFFFF9800);\n        canvas.drawRect(estimatedBounds, paint);\n      }\n      return true;\n    }()");
      dart.nullCheck(this[_currentLayer]).picture = dart.nullCheck(this[_recorder]).endRecording();
      this[_currentLayer] = null;
      this[_recorder] = null;
      this[_canvas] = null;
    }
    setIsComplexHint() {
      let t6;
      t6 = this[_currentLayer];
      t6 == null ? null : t6.isComplexHint = true;
    }
    setWillChangeHint() {
      let t6;
      t6 = this[_currentLayer];
      t6 == null ? null : t6.willChangeHint = true;
    }
    addLayer(layer) {
      this.stopRecordingIfNeeded();
      this.appendLayer(layer);
    }
    pushLayer(childLayer, painter, offset, opts) {
      let t6;
      let childPaintBounds = opts && 'childPaintBounds' in opts ? opts.childPaintBounds : null;
      if (!(painter !== null)) dart.assertFailed(null, I[3], 450, 12, "painter != null");
      if (childLayer.hasChildren) {
        childLayer.removeAllChildren();
      }
      this.stopRecordingIfNeeded();
      this.appendLayer(childLayer);
      let childContext = this.createChildContext(childLayer, (t6 = childPaintBounds, t6 == null ? this.estimatedBounds : t6));
      painter(childContext, offset);
      childContext.stopRecordingIfNeeded();
    }
    createChildContext(childLayer, bounds) {
      return new object$.PaintingContext.new(childLayer, bounds);
    }
    pushClipRect(needsCompositing, offset, clipRect, painter, opts) {
      let t6, t6$;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (clipBehavior === ui.Clip.none) {
        painter(this, offset);
        return null;
      }
      let offsetClipRect = clipRect.shift(offset);
      if (needsCompositing) {
        let layer = (t6 = oldLayer, t6 == null ? new layer$.ClipRectLayer.new() : t6);
        t6$ = layer;
        (() => {
          t6$.clipRect = offsetClipRect;
          t6$.clipBehavior = clipBehavior;
          return t6$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetClipRect});
        return layer;
      } else {
        this.clipRectAndPaint(offsetClipRect, clipBehavior, offsetClipRect, dart.fn(() => painter(this, offset), T$.VoidTovoid()));
        return null;
      }
    }
    pushClipRRect(needsCompositing, offset, bounds, clipRRect, painter, opts) {
      let t6, t6$;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(clipBehavior !== null)) dart.assertFailed(null, I[3], 548, 12, "clipBehavior != null");
      if (clipBehavior === ui.Clip.none) {
        painter(this, offset);
        return null;
      }
      let offsetBounds = bounds.shift(offset);
      let offsetClipRRect = clipRRect.shift(offset);
      if (needsCompositing) {
        let layer = (t6 = oldLayer, t6 == null ? new layer$.ClipRRectLayer.new() : t6);
        t6$ = layer;
        (() => {
          t6$.clipRRect = offsetClipRRect;
          t6$.clipBehavior = clipBehavior;
          return t6$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetBounds});
        return layer;
      } else {
        this.clipRRectAndPaint(offsetClipRRect, clipBehavior, offsetBounds, dart.fn(() => painter(this, offset), T$.VoidTovoid()));
        return null;
      }
    }
    pushClipPath(needsCompositing, offset, bounds, clipPath, painter, opts) {
      let t6, t6$;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(clipBehavior !== null)) dart.assertFailed(null, I[3], 588, 12, "clipBehavior != null");
      if (clipBehavior === ui.Clip.none) {
        painter(this, offset);
        return null;
      }
      let offsetBounds = bounds.shift(offset);
      let offsetClipPath = clipPath.shift(offset);
      if (needsCompositing) {
        let layer = (t6 = oldLayer, t6 == null ? new layer$.ClipPathLayer.new() : t6);
        t6$ = layer;
        (() => {
          t6$.clipPath = offsetClipPath;
          t6$.clipBehavior = clipBehavior;
          return t6$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetBounds});
        return layer;
      } else {
        this.clipPathAndPaint(offsetClipPath, clipBehavior, offsetBounds, dart.fn(() => painter(this, offset), T$.VoidTovoid()));
        return null;
      }
    }
    pushColorFilter(offset, colorFilter, painter, opts) {
      let t6;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(colorFilter !== null)) dart.assertFailed(null, I[3], 625, 12, "colorFilter != null");
      let layer = (t6 = oldLayer, t6 == null ? new layer$.ColorFilterLayer.new() : t6);
      layer.colorFilter = colorFilter;
      this.pushLayer(layer, painter, offset);
      return layer;
    }
    pushTransform(needsCompositing, offset, transform, painter, opts) {
      let t6, t6$, t6$0;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      let effectiveTransform = (t6 = vector_math_64.Matrix4.translationValues(offset.dx, offset.dy, 0.0), (() => {
        t6.multiply(transform);
        t6.translate(-offset.dx, -offset.dy);
        return t6;
      })());
      if (needsCompositing) {
        let layer = (t6$ = oldLayer, t6$ == null ? new layer$.TransformLayer.new() : t6$);
        layer.transform = effectiveTransform;
        this.pushLayer(layer, painter, offset, {childPaintBounds: matrix_utils.MatrixUtils.inverseTransformRect(effectiveTransform, this.estimatedBounds)});
        return layer;
      } else {
        t6$0 = this.canvas;
        (() => {
          t6$0.save();
          t6$0.transform(effectiveTransform.storage);
          return t6$0;
        })();
        painter(this, offset);
        this.canvas.restore();
        return null;
      }
    }
    pushOpacity(offset, alpha, painter, opts) {
      let t6, t6$;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      let layer = (t6 = oldLayer, t6 == null ? new layer$.OpacityLayer.new() : t6);
      t6$ = layer;
      (() => {
        t6$.alpha = alpha;
        t6$.offset = offset;
        return t6$;
      })();
      this.pushLayer(layer, painter, ui.Offset.zero);
      return layer;
    }
    toString() {
      return object.objectRuntimeType(this, "PaintingContext") + "#" + dart.str(this[$hashCode]) + "(layer: " + dart.str(this[_containerLayer$]) + ", canvas bounds: " + dart.str(this.estimatedBounds) + ")";
    }
  };
  (object$.PaintingContext.new = function(_containerLayer, estimatedBounds) {
    this[_currentLayer] = null;
    this[_recorder] = null;
    this[_canvas] = null;
    this[_containerLayer$] = _containerLayer;
    this[estimatedBounds$] = estimatedBounds;
    if (!(_containerLayer !== null)) dart.assertFailed(null, I[3], 72, 14, "_containerLayer != null");
    if (!(estimatedBounds !== null)) dart.assertFailed(null, I[3], 73, 14, "estimatedBounds != null");
    ;
  }).prototype = object$.PaintingContext.prototype;
  dart.addTypeTests(object$.PaintingContext);
  dart.addTypeCaches(object$.PaintingContext);
  dart.setMethodSignature(object$.PaintingContext, () => ({
    __proto__: dart.getMethods(object$.PaintingContext.__proto__),
    paintChild: dart.fnType(dart.void, [object$.RenderObject, ui.Offset]),
    [_compositeChild]: dart.fnType(dart.void, [object$.RenderObject, ui.Offset]),
    appendLayer: dart.fnType(dart.void, [layer$.Layer]),
    [_startRecording]: dart.fnType(dart.void, []),
    addCompositionCallback: dart.fnType(dart.fnType(dart.void, []), [dart.fnType(dart.void, [layer$.Layer])]),
    stopRecordingIfNeeded: dart.fnType(dart.void, []),
    setIsComplexHint: dart.fnType(dart.void, []),
    setWillChangeHint: dart.fnType(dart.void, []),
    addLayer: dart.fnType(dart.void, [layer$.Layer]),
    pushLayer: dart.fnType(dart.void, [layer$.ContainerLayer, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]), ui.Offset], {childPaintBounds: dart.nullable(ui.Rect)}, {}),
    createChildContext: dart.fnType(object$.PaintingContext, [layer$.ContainerLayer, ui.Rect]),
    pushClipRect: dart.fnType(dart.nullable(layer$.ClipRectLayer), [core.bool, ui.Offset, ui.Rect, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipRectLayer)}, {}),
    pushClipRRect: dart.fnType(dart.nullable(layer$.ClipRRectLayer), [core.bool, ui.Offset, ui.Rect, ui.RRect, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipRRectLayer)}, {}),
    pushClipPath: dart.fnType(dart.nullable(layer$.ClipPathLayer), [core.bool, ui.Offset, ui.Rect, ui.Path, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipPathLayer)}, {}),
    pushColorFilter: dart.fnType(layer$.ColorFilterLayer, [ui.Offset, ui.ColorFilter, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.ColorFilterLayer)}, {}),
    pushTransform: dart.fnType(dart.nullable(layer$.TransformLayer), [core.bool, ui.Offset, vector_math_64.Matrix4, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.TransformLayer)}, {}),
    pushOpacity: dart.fnType(layer$.OpacityLayer, [ui.Offset, core.int, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.OpacityLayer)}, {})
  }));
  dart.setStaticMethodSignature(object$.PaintingContext, () => ['repaintCompositedChild', '_repaintCompositedChild', 'updateLayerProperties', 'debugInstrumentRepaintCompositedChild']);
  dart.setGetterSignature(object$.PaintingContext, () => ({
    __proto__: dart.getGetters(object$.PaintingContext.__proto__),
    [_isRecording]: core.bool,
    canvas: ui.Canvas
  }));
  dart.setLibraryUri(object$.PaintingContext, I[2]);
  dart.setFieldSignature(object$.PaintingContext, () => ({
    __proto__: dart.getFields(object$.PaintingContext.__proto__),
    [_containerLayer$]: dart.finalFieldType(layer$.ContainerLayer),
    estimatedBounds: dart.finalFieldType(ui.Rect),
    [_currentLayer]: dart.fieldType(dart.nullable(layer$.PictureLayer)),
    [_recorder]: dart.fieldType(dart.nullable(ui.PictureRecorder)),
    [_canvas]: dart.fieldType(dart.nullable(ui.Canvas))
  }));
  dart.defineExtensionMethods(object$.PaintingContext, ['toString']);
  object$.Constraints = class Constraints extends core.Object {
    debugAssertIsValid(opts) {
      let isAppliedConstraint = opts && 'isAppliedConstraint' in opts ? opts.isAppliedConstraint : false;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!this.isNormalized) dart.assertFailed(null, I[3], 784, 12, "isNormalized");
      return this.isNormalized;
    }
  };
  (object$.Constraints.new = function() {
    ;
  }).prototype = object$.Constraints.prototype;
  dart.addTypeTests(object$.Constraints);
  dart.addTypeCaches(object$.Constraints);
  dart.setMethodSignature(object$.Constraints, () => ({
    __proto__: dart.getMethods(object$.Constraints.__proto__),
    debugAssertIsValid: dart.fnType(core.bool, [], {informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])), isAppliedConstraint: core.bool}, {})
  }));
  dart.setLibraryUri(object$.Constraints, I[2]);
  var listener$ = dart.privateName(object$, "SemanticsHandle.listener");
  var _owner = dart.privateName(object$, "_owner");
  var _didDisposeSemanticsHandle = dart.privateName(object$, "_didDisposeSemanticsHandle");
  object$.SemanticsHandle = class SemanticsHandle extends core.Object {
    get listener() {
      return this[listener$];
    }
    set listener(value) {
      super.listener = value;
    }
    static ['_#_#tearOff'](owner, listener) {
      return new object$.SemanticsHandle.__(owner, listener);
    }
    dispose() {
      if (this.listener != null) {
        dart.nullCheck(this[_owner].semanticsOwner).removeListener(dart.nullCheck(this.listener));
      }
      this[_owner][_didDisposeSemanticsHandle]();
    }
  };
  (object$.SemanticsHandle.__ = function(owner, listener) {
    this[listener$] = listener;
    if (!(owner !== null)) dart.assertFailed(null, I[3], 819, 16, "owner != null");
    this[_owner] = owner;
    if (this.listener != null) {
      dart.nullCheck(this[_owner].semanticsOwner).addListener(dart.nullCheck(this.listener));
    }
  }).prototype = object$.SemanticsHandle.prototype;
  dart.addTypeTests(object$.SemanticsHandle);
  dart.addTypeCaches(object$.SemanticsHandle);
  dart.setMethodSignature(object$.SemanticsHandle, () => ({
    __proto__: dart.getMethods(object$.SemanticsHandle.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.SemanticsHandle, I[2]);
  dart.setFieldSignature(object$.SemanticsHandle, () => ({
    __proto__: dart.getFields(object$.SemanticsHandle.__proto__),
    [_owner]: dart.finalFieldType(object$.PipelineOwner),
    listener: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
  var onNeedVisualUpdate$ = dart.privateName(object$, "PipelineOwner.onNeedVisualUpdate");
  var onSemanticsOwnerCreated$ = dart.privateName(object$, "PipelineOwner.onSemanticsOwnerCreated");
  var onSemanticsOwnerDisposed$ = dart.privateName(object$, "PipelineOwner.onSemanticsOwnerDisposed");
  var _rootNode = dart.privateName(object$, "_rootNode");
  var _shouldMergeDirtyNodes = dart.privateName(object$, "_shouldMergeDirtyNodes");
  var _nodesNeedingLayout = dart.privateName(object$, "_nodesNeedingLayout");
  var _debugDoingLayout = dart.privateName(object$, "_debugDoingLayout");
  var _debugAllowMutationsToDirtySubtrees = dart.privateName(object$, "_debugAllowMutationsToDirtySubtrees");
  var _nodesNeedingCompositingBitsUpdate = dart.privateName(object$, "_nodesNeedingCompositingBitsUpdate");
  var _nodesNeedingPaint = dart.privateName(object$, "_nodesNeedingPaint");
  var _debugDoingPaint = dart.privateName(object$, "_debugDoingPaint");
  var _semanticsOwner = dart.privateName(object$, "_semanticsOwner");
  var _outstandingSemanticsHandles = dart.privateName(object$, "_outstandingSemanticsHandles");
  var _debugDoingSemantics = dart.privateName(object$, "_debugDoingSemantics");
  var _nodesNeedingSemantics = dart.privateName(object$, "_nodesNeedingSemantics");
  var _needsLayout = dart.privateName(object$, "_needsLayout");
  var _layoutWithoutResize = dart.privateName(object$, "_layoutWithoutResize");
  var _enableMutationsToDirtySubtrees = dart.privateName(object$, "_enableMutationsToDirtySubtrees");
  var _needsCompositingBitsUpdate = dart.privateName(object$, "_needsCompositingBitsUpdate");
  var _updateCompositingBits = dart.privateName(object$, "_updateCompositingBits");
  var _skippedPaintingOnLayer = dart.privateName(object$, "_skippedPaintingOnLayer");
  var _needsSemanticsUpdate = dart.privateName(object$, "_needsSemanticsUpdate");
  var _updateSemantics = dart.privateName(object$, "_updateSemantics");
  object$.PipelineOwner = class PipelineOwner extends core.Object {
    get onNeedVisualUpdate() {
      return this[onNeedVisualUpdate$];
    }
    set onNeedVisualUpdate(value) {
      super.onNeedVisualUpdate = value;
    }
    get onSemanticsOwnerCreated() {
      return this[onSemanticsOwnerCreated$];
    }
    set onSemanticsOwnerCreated(value) {
      super.onSemanticsOwnerCreated = value;
    }
    get onSemanticsOwnerDisposed() {
      return this[onSemanticsOwnerDisposed$];
    }
    set onSemanticsOwnerDisposed(value) {
      super.onSemanticsOwnerDisposed = value;
    }
    static ['_#new#tearOff'](opts) {
      let onNeedVisualUpdate = opts && 'onNeedVisualUpdate' in opts ? opts.onNeedVisualUpdate : null;
      let onSemanticsOwnerCreated = opts && 'onSemanticsOwnerCreated' in opts ? opts.onSemanticsOwnerCreated : null;
      let onSemanticsOwnerDisposed = opts && 'onSemanticsOwnerDisposed' in opts ? opts.onSemanticsOwnerDisposed : null;
      return new object$.PipelineOwner.new({onNeedVisualUpdate: onNeedVisualUpdate, onSemanticsOwnerCreated: onSemanticsOwnerCreated, onSemanticsOwnerDisposed: onSemanticsOwnerDisposed});
    }
    requestVisualUpdate() {
      let t6;
      t6 = this.onNeedVisualUpdate;
      t6 == null ? null : t6();
    }
    get rootNode() {
      return this[_rootNode];
    }
    set rootNode(value) {
      let t6, t6$;
      if (dart.equals(this[_rootNode], value)) {
        return;
      }
      t6 = this[_rootNode];
      t6 == null ? null : t6.detach();
      this[_rootNode] = value;
      t6$ = this[_rootNode];
      t6$ == null ? null : t6$.attach(this);
    }
    get debugDoingLayout() {
      return this[_debugDoingLayout];
    }
    flushLayout() {
      {
        let debugTimelineArguments = null;
        if (!dart.fn(() => {
          if (debug.debugEnhanceLayoutTimelineArguments) {
            debugTimelineArguments = new (T$.IdentityMapOfString$String()).from(["dirty count", dart.str(this[_nodesNeedingLayout][$length]), "dirty list", dart.str(this[_nodesNeedingLayout])]);
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 965, 14, "() {\n        if (debugEnhanceLayoutTimelineArguments) {\n          debugTimelineArguments = <String, String>{\n            'dirty count': '${_nodesNeedingLayout.length}',\n            'dirty list': '$_nodesNeedingLayout',\n          };\n        }\n        return true;\n      }()");
        developer.Timeline.startSync("LAYOUT", {arguments: debugTimelineArguments});
      }
      if (!dart.fn(() => {
        this[_debugDoingLayout] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 979, 12, "() {\n      _debugDoingLayout = true;\n      return true;\n    }()");
      try {
        while (this[_nodesNeedingLayout][$isNotEmpty]) {
          if (!!this[_shouldMergeDirtyNodes]) dart.assertFailed(null, I[3], 985, 16, "!_shouldMergeDirtyNodes");
          let dirtyNodes = this[_nodesNeedingLayout];
          this[_nodesNeedingLayout] = T$.JSArrayOfRenderObject().of([]);
          dirtyNodes[$sort](dart.fn((a, b) => a.depth - b.depth, T$.RenderObjectAndRenderObjectToint()));
          for (let i = 0; i < dirtyNodes[$length]; i = i + 1) {
            if (this[_shouldMergeDirtyNodes]) {
              this[_shouldMergeDirtyNodes] = false;
              if (this[_nodesNeedingLayout][$isNotEmpty]) {
                this[_nodesNeedingLayout][$addAll](dirtyNodes[$getRange](i, dirtyNodes[$length]));
                break;
              }
            }
            let node = dirtyNodes[$_get](i);
            if (node[_needsLayout] && dart.equals(node.owner, this)) {
              node[_layoutWithoutResize]();
            }
          }
          this[_shouldMergeDirtyNodes] = false;
        }
      } finally {
        this[_shouldMergeDirtyNodes] = false;
        if (!dart.fn(() => {
          this[_debugDoingLayout] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1008, 14, "() {\n        _debugDoingLayout = false;\n        return true;\n      }()");
        {
          developer.Timeline.finishSync();
        }
      }
    }
    [_enableMutationsToDirtySubtrees](callback) {
      if (!this[_debugDoingLayout]) dart.assertFailed(null, I[3], 1027, 12, "_debugDoingLayout");
      let oldState = null;
      if (!dart.fn(() => {
        oldState = this[_debugAllowMutationsToDirtySubtrees];
        this[_debugAllowMutationsToDirtySubtrees] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1029, 12, "() {\n      oldState = _debugAllowMutationsToDirtySubtrees;\n      _debugAllowMutationsToDirtySubtrees = true;\n      return true;\n    }()");
      try {
        callback();
      } finally {
        this[_shouldMergeDirtyNodes] = true;
        if (!dart.fn(() => {
          this[_debugAllowMutationsToDirtySubtrees] = dart.nullCheck(oldState);
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1038, 14, "() {\n        _debugAllowMutationsToDirtySubtrees = oldState!;\n        return true;\n      }()");
      }
    }
    flushCompositingBits() {
      {
        developer.Timeline.startSync("UPDATING COMPOSITING BITS");
      }
      this[_nodesNeedingCompositingBitsUpdate][$sort](dart.fn((a, b) => a.depth - b.depth, T$.RenderObjectAndRenderObjectToint()));
      for (let node of this[_nodesNeedingCompositingBitsUpdate]) {
        if (node[_needsCompositingBitsUpdate] && dart.equals(node.owner, this)) {
          node[_updateCompositingBits]();
        }
      }
      this[_nodesNeedingCompositingBitsUpdate][$clear]();
      {
        developer.Timeline.finishSync();
      }
    }
    get debugDoingPaint() {
      return this[_debugDoingPaint];
    }
    flushPaint() {
      let t6;
      {
        let debugTimelineArguments = null;
        if (!dart.fn(() => {
          if (debug.debugEnhancePaintTimelineArguments) {
            debugTimelineArguments = new (T$.IdentityMapOfString$String()).from(["dirty count", dart.str(this[_nodesNeedingPaint][$length]), "dirty list", dart.str(this[_nodesNeedingPaint])]);
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1087, 14, "() {\n        if (debugEnhancePaintTimelineArguments) {\n          debugTimelineArguments = <String, String>{\n            'dirty count': '${_nodesNeedingPaint.length}',\n            'dirty list': '$_nodesNeedingPaint',\n          };\n        }\n        return true;\n      }()");
        developer.Timeline.startSync("PAINT", {arguments: debugTimelineArguments});
      }
      try {
        if (!dart.fn(() => {
          this[_debugDoingPaint] = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1102, 14, "() {\n        _debugDoingPaint = true;\n        return true;\n      }()");
        let dirtyNodes = this[_nodesNeedingPaint];
        this[_nodesNeedingPaint] = T$.JSArrayOfRenderObject().of([]);
        for (let node of (t6 = dirtyNodes, (() => {
          t6[$sort](dart.fn((a, b) => b.depth - a.depth, T$.RenderObjectAndRenderObjectToint()));
          return t6;
        })())) {
          if (!(node[_layerHandle].layer != null)) dart.assertFailed(null, I[3], 1111, 16, "node._layerHandle.layer != null");
          if ((node[_needsPaint] || node[_needsCompositedLayerUpdate]) && dart.equals(node.owner, this)) {
            if (dart.nullCheck(node[_layerHandle].layer).attached) {
              if (!node.isRepaintBoundary) dart.assertFailed(null, I[3], 1114, 20, "node.isRepaintBoundary");
              if (node[_needsPaint]) {
                object$.PaintingContext.repaintCompositedChild(node);
              } else {
                object$.PaintingContext.updateLayerProperties(node);
              }
            } else {
              node[_skippedPaintingOnLayer]();
            }
          }
        }
        if (!this[_nodesNeedingPaint][$isEmpty]) dart.assertFailed(null, I[3], 1125, 14, "_nodesNeedingPaint.isEmpty");
      } finally {
        if (!dart.fn(() => {
          this[_debugDoingPaint] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1127, 14, "() {\n        _debugDoingPaint = false;\n        return true;\n      }()");
        {
          developer.Timeline.finishSync();
        }
      }
    }
    get semanticsOwner() {
      return this[_semanticsOwner];
    }
    get debugOutstandingSemanticsHandles() {
      return this[_outstandingSemanticsHandles];
    }
    ensureSemantics(opts) {
      let t6;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      this[_outstandingSemanticsHandles] = this[_outstandingSemanticsHandles] + 1;
      if (this[_outstandingSemanticsHandles] === 1) {
        if (!(this[_semanticsOwner] == null)) dart.assertFailed(null, I[3], 1172, 14, "_semanticsOwner == null");
        this[_semanticsOwner] = new semantics.SemanticsOwner.new();
        t6 = this.onSemanticsOwnerCreated;
        t6 == null ? null : t6();
      }
      return new object$.SemanticsHandle.__(this, listener);
    }
    [_didDisposeSemanticsHandle]() {
      let t6;
      if (!(this[_semanticsOwner] != null)) dart.assertFailed(null, I[3], 1180, 12, "_semanticsOwner != null");
      this[_outstandingSemanticsHandles] = this[_outstandingSemanticsHandles] - 1;
      if (this[_outstandingSemanticsHandles] === 0) {
        dart.nullCheck(this[_semanticsOwner]).dispose();
        this[_semanticsOwner] = null;
        t6 = this.onSemanticsOwnerDisposed;
        t6 == null ? null : t6();
      }
    }
    flushSemantics() {
      let t6;
      if (this[_semanticsOwner] == null) {
        return;
      }
      {
        developer.Timeline.startSync("SEMANTICS");
      }
      if (!(this[_semanticsOwner] != null)) dart.assertFailed(null, I[3], 1210, 12, "_semanticsOwner != null");
      if (!dart.fn(() => {
        this[_debugDoingSemantics] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1211, 12, "() {\n      _debugDoingSemantics = true;\n      return true;\n    }()");
      try {
        let nodesToProcess = (t6 = this[_nodesNeedingSemantics][$toList](), (() => {
          t6[$sort](dart.fn((a, b) => a.depth - b.depth, T$.RenderObjectAndRenderObjectToint()));
          return t6;
        })());
        this[_nodesNeedingSemantics].clear();
        for (let node of nodesToProcess) {
          if (node[_needsSemanticsUpdate] && dart.equals(node.owner, this)) {
            node[_updateSemantics]();
          }
        }
        dart.nullCheck(this[_semanticsOwner]).sendSemanticsUpdate();
      } finally {
        if (!this[_nodesNeedingSemantics][$isEmpty]) dart.assertFailed(null, I[3], 1226, 14, "_nodesNeedingSemantics.isEmpty");
        if (!dart.fn(() => {
          this[_debugDoingSemantics] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1227, 14, "() {\n        _debugDoingSemantics = false;\n        return true;\n      }()");
        {
          developer.Timeline.finishSync();
        }
      }
    }
  };
  (object$.PipelineOwner.new = function(opts) {
    let onNeedVisualUpdate = opts && 'onNeedVisualUpdate' in opts ? opts.onNeedVisualUpdate : null;
    let onSemanticsOwnerCreated = opts && 'onSemanticsOwnerCreated' in opts ? opts.onSemanticsOwnerCreated : null;
    let onSemanticsOwnerDisposed = opts && 'onSemanticsOwnerDisposed' in opts ? opts.onSemanticsOwnerDisposed : null;
    this[_rootNode] = null;
    this[_shouldMergeDirtyNodes] = false;
    this[_nodesNeedingLayout] = T$.JSArrayOfRenderObject().of([]);
    this[_debugDoingLayout] = false;
    this[_debugAllowMutationsToDirtySubtrees] = false;
    this[_nodesNeedingCompositingBitsUpdate] = T$.JSArrayOfRenderObject().of([]);
    this[_nodesNeedingPaint] = T$.JSArrayOfRenderObject().of([]);
    this[_debugDoingPaint] = false;
    this[_semanticsOwner] = null;
    this[_outstandingSemanticsHandles] = 0;
    this[_debugDoingSemantics] = false;
    this[_nodesNeedingSemantics] = T$.LinkedHashSetOfRenderObject().new();
    this[onNeedVisualUpdate$] = onNeedVisualUpdate;
    this[onSemanticsOwnerCreated$] = onSemanticsOwnerCreated;
    this[onSemanticsOwnerDisposed$] = onSemanticsOwnerDisposed;
    ;
  }).prototype = object$.PipelineOwner.prototype;
  dart.addTypeTests(object$.PipelineOwner);
  dart.addTypeCaches(object$.PipelineOwner);
  dart.setMethodSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getMethods(object$.PipelineOwner.__proto__),
    requestVisualUpdate: dart.fnType(dart.void, []),
    flushLayout: dart.fnType(dart.void, []),
    [_enableMutationsToDirtySubtrees]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    flushCompositingBits: dart.fnType(dart.void, []),
    flushPaint: dart.fnType(dart.void, []),
    ensureSemantics: dart.fnType(object$.SemanticsHandle, [], {listener: dart.nullable(dart.fnType(dart.void, []))}, {}),
    [_didDisposeSemanticsHandle]: dart.fnType(dart.void, []),
    flushSemantics: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getGetters(object$.PipelineOwner.__proto__),
    rootNode: dart.nullable(node.AbstractNode),
    debugDoingLayout: core.bool,
    debugDoingPaint: core.bool,
    semanticsOwner: dart.nullable(semantics.SemanticsOwner),
    debugOutstandingSemanticsHandles: core.int
  }));
  dart.setSetterSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getSetters(object$.PipelineOwner.__proto__),
    rootNode: dart.nullable(node.AbstractNode)
  }));
  dart.setLibraryUri(object$.PipelineOwner, I[2]);
  dart.setFieldSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getFields(object$.PipelineOwner.__proto__),
    onNeedVisualUpdate: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSemanticsOwnerCreated: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSemanticsOwnerDisposed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_rootNode]: dart.fieldType(dart.nullable(node.AbstractNode)),
    [_shouldMergeDirtyNodes]: dart.fieldType(core.bool),
    [_nodesNeedingLayout]: dart.fieldType(core.List$(object$.RenderObject)),
    [_debugDoingLayout]: dart.fieldType(core.bool),
    [_debugAllowMutationsToDirtySubtrees]: dart.fieldType(core.bool),
    [_nodesNeedingCompositingBitsUpdate]: dart.finalFieldType(core.List$(object$.RenderObject)),
    [_nodesNeedingPaint]: dart.fieldType(core.List$(object$.RenderObject)),
    [_debugDoingPaint]: dart.fieldType(core.bool),
    [_semanticsOwner]: dart.fieldType(dart.nullable(semantics.SemanticsOwner)),
    [_outstandingSemanticsHandles]: dart.fieldType(core.int),
    [_debugDoingSemantics]: dart.fieldType(core.bool),
    [_nodesNeedingSemantics]: dart.finalFieldType(core.Set$(object$.RenderObject))
  }));
  var parentData = dart.privateName(object$, "RenderObject.parentData");
  var debugCreator$ = dart.privateName(object$, "RenderObject.debugCreator");
  var _debugDisposed$ = dart.privateName(object$, "_debugDisposed");
  var _debugDoingThisResize = dart.privateName(object$, "_debugDoingThisResize");
  var _debugDoingThisLayout = dart.privateName(object$, "_debugDoingThisLayout");
  var _debugCanParentUseSize = dart.privateName(object$, "_debugCanParentUseSize");
  var _debugMutationsLocked$ = dart.privateName(object$, "_debugMutationsLocked");
  var _relayoutBoundary = dart.privateName(object$, "_relayoutBoundary");
  var _doingThisLayoutWithCallback = dart.privateName(object$, "_doingThisLayoutWithCallback");
  var _constraints = dart.privateName(object$, "_constraints");
  var _debugDoingThisPaint = dart.privateName(object$, "_debugDoingThisPaint");
  var __RenderObject__wasRepaintBoundary = dart.privateName(object$, "_#RenderObject#_wasRepaintBoundary");
  var __RenderObject__needsCompositing = dart.privateName(object$, "_#RenderObject#_needsCompositing");
  var _cachedSemanticsConfiguration = dart.privateName(object$, "_cachedSemanticsConfiguration");
  var _semantics = dart.privateName(object$, "_semantics");
  var _needsCompositing = dart.privateName(object$, "_needsCompositing");
  var _debugCanPerformMutations = dart.privateName(object$, "_debugCanPerformMutations");
  var _cleanRelayoutBoundary = dart.privateName(object$, "_cleanRelayoutBoundary");
  var _debugReportException = dart.privateName(object$, "_debugReportException");
  var _semanticsConfiguration = dart.privateName(object$, "_semanticsConfiguration");
  var _debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout = dart.privateName(object$, "_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout");
  var _propagateRelayoutBoundary = dart.privateName(object$, "_propagateRelayoutBoundary");
  var _getSemanticsForParent = dart.privateName(object$, "_getSemanticsForParent");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  const AbstractNode_DiagnosticableTreeMixin$36$ = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36$.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36$.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36$.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36$, diagnostics.DiagnosticableTreeMixin);
  object$.RenderObject = class RenderObject extends AbstractNode_DiagnosticableTreeMixin$36$ {
    get parentData() {
      return this[parentData];
    }
    set parentData(value) {
      this[parentData] = value;
    }
    get debugCreator() {
      return this[debugCreator$];
    }
    set debugCreator(value) {
      this[debugCreator$] = value;
    }
    reassemble() {
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
      this.visitChildren(dart.fn(child => {
        child.reassemble();
      }, T$.RenderObjectTovoid()));
    }
    get debugDisposed() {
      let disposed = null;
      if (!dart.fn(() => {
        disposed = this[_debugDisposed$];
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1400, 12, "() {\n      disposed = _debugDisposed;\n      return true;\n    }()");
      return disposed;
    }
    dispose() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 1425, 12, "!_debugDisposed");
      this[_layerHandle].layer = null;
      if (!dart.fn(() => {
        this[_debugDisposed$] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1427, 12, "() {\n      // TODO(dnfield): Enable this assert once clients have had a chance to\n      // migrate.\n      // visitChildren((RenderObject child) {\n      //   assert(\n      //     child.debugDisposed!,\n      //     '${child.runtimeType} (child of $runtimeType) must be disposed before calling super.dispose().',\n      //   );\n      // });\n      _debugDisposed = true;\n      return true;\n    }()");
    }
    setupParentData(child) {
      object$.RenderObject.as(child);
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[3], 1465, 12, "_debugCanPerformMutations");
      if (!object$.ParentData.is(child.parentData)) {
        child.parentData = new object$.ParentData.new();
      }
    }
    adoptChild(child) {
      object$.RenderObject.as(child);
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[3], 1477, 12, "_debugCanPerformMutations");
      if (!(child !== null)) dart.assertFailed(null, I[3], 1478, 12, "child != null");
      this.setupParentData(child);
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsSemanticsUpdate();
      super.adoptChild(child);
    }
    dropChild(child) {
      object$.RenderObject.as(child);
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[3], 1492, 12, "_debugCanPerformMutations");
      if (!(child !== null)) dart.assertFailed(null, I[3], 1493, 12, "child != null");
      if (!(child.parentData != null)) dart.assertFailed(null, I[3], 1494, 12, "child.parentData != null");
      child[_cleanRelayoutBoundary]();
      dart.nullCheck(child.parentData).detach();
      child.parentData = null;
      super.dropChild(child);
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsSemanticsUpdate();
    }
    visitChildren(visitor) {
    }
    [_debugReportException](method, exception, stack) {
      assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "rendering library", context: new assertions.ErrorDescription.new("during " + method + "()"), informationCollector: dart.fn(() => (() => {
          let t6 = T$.JSArrayOfDiagnosticsNode().of([]);
          if (true && this.debugCreator != null) t6.push(new object$.DiagnosticsDebugCreator.new(dart.nullCheck(this.debugCreator)));
          t6.push(this.describeForError("The following RenderObject was being processed when the exception was fired"));
          t6.push(this.describeForError("RenderObject", {style: diagnostics.DiagnosticsTreeStyle.truncateChildren}));
          return t6;
        })(), T$.VoidToListOfDiagnosticsNode())}));
    }
    get debugDoingThisResize() {
      return this[_debugDoingThisResize];
    }
    get debugDoingThisLayout() {
      return this[_debugDoingThisLayout];
    }
    static get debugActiveLayout() {
      return object$.RenderObject._debugActiveLayout;
    }
    get debugCanParentUseSize() {
      return dart.nullCheck(this[_debugCanParentUseSize]);
    }
    get [_debugCanPerformMutations]() {
      let result = null;
      function result$35get() {
        let t8;
        t8 = result;
        return t8 == null ? dart.throw(new _internal.LateError.localNI("result")) : t8;
      }
      dart.fn(result$35get, T$.VoidTobool());
      function result$35set(result$35param) {
        return result = result$35param;
      }
      dart.fn(result$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        let t10, t10$;
        if (this[_debugDisposed$]) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A disposed RenderObject was mutated."), new (T$.DiagnosticsPropertyOfRenderObject()).new("The disposed RenderObject was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        let owner = this.owner;
        if (owner == null || !owner.debugDoingLayout) {
          result$35set(true);
          return true;
        }
        let activeLayoutRoot = this;
        while (activeLayoutRoot != null) {
          let mutationsToDirtySubtreesAllowed = (t10$ = (t10 = activeLayoutRoot.owner, t10 == null ? null : t10[_debugAllowMutationsToDirtySubtrees]), t10$ == null ? false : t10$);
          let doingLayoutWithCallback = activeLayoutRoot[_doingThisLayoutWithCallback];
          if (doingLayoutWithCallback || mutationsToDirtySubtreesAllowed && activeLayoutRoot[_needsLayout]) {
            result$35set(true);
            return true;
          }
          if (!activeLayoutRoot[_debugMutationsLocked$]) {
            let p = activeLayoutRoot.parent;
            activeLayoutRoot = object$.RenderObject.is(p) ? p : null;
          } else {
            break;
          }
        }
        let debugActiveLayout = dart.nullCheck(object$.RenderObject.debugActiveLayout);
        let culpritMethodName = debugActiveLayout.debugDoingThisLayout ? "performLayout" : "performResize";
        let culpritFullMethodName = dart.str(debugActiveLayout[$runtimeType]) + "." + culpritMethodName;
        result$35set(false);
        if (activeLayoutRoot == null) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " was mutated in " + culpritFullMethodName + "."), new assertions.ErrorDescription.new("The RenderObject was mutated when none of its ancestors is actively performing layout."), new (T$.DiagnosticsPropertyOfRenderObject()).new("The RenderObject being mutated was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (T$.DiagnosticsPropertyOfRenderObject()).new("The RenderObject that was mutating the said " + dart.str(this[$runtimeType]) + " was", debugActiveLayout, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        if (dart.equals(activeLayoutRoot, this)) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " was mutated in its own " + culpritMethodName + " implementation."), new assertions.ErrorDescription.new("A RenderObject must not re-dirty itself while still being laid out."), new (T$.DiagnosticsPropertyOfRenderObject()).new("The RenderObject being mutated was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorHint.new("Consider using the LayoutBuilder widget to dynamically change a subtree during layout.")])));
        }
        let summary = new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " was mutated in " + culpritFullMethodName + ".");
        let isMutatedByAncestor = dart.equals(activeLayoutRoot, debugActiveLayout);
        let description = isMutatedByAncestor ? "A RenderObject must not mutate its descendants in its " + culpritMethodName + " method." : "A RenderObject must not mutate another RenderObject from a different render subtree " + "in its " + culpritMethodName + " method.";
        dart.throw(new assertions.FlutterError.fromParts((() => {
          let t10 = T$.JSArrayOfDiagnosticsNode().of([summary, new assertions.ErrorDescription.new(description), new (T$.DiagnosticsPropertyOfRenderObject()).new("The RenderObject being mutated was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (T$.DiagnosticsPropertyOfRenderObject()).new("The " + (isMutatedByAncestor ? "ancestor " : "") + "RenderObject that was mutating the said " + dart.str(this[$runtimeType]) + " was", debugActiveLayout, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]);
          if (!isMutatedByAncestor) t10.push(new (T$.DiagnosticsPropertyOfRenderObject()).new("Their common ancestor was", activeLayoutRoot, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
          t10.push(new assertions.ErrorHint.new("Mutating the layout of another RenderObject may cause some RenderObjects in its subtree to be laid out more than once. " + "Consider using the LayoutBuilder widget to dynamically mutate a subtree during layout."));
          return t10;
        })()));
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1580, 12, "() {\n      if (_debugDisposed) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A disposed RenderObject was mutated.'),\n          DiagnosticsProperty<RenderObject>(\n            'The disposed RenderObject was',\n            this,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n\n      final PipelineOwner? owner = this.owner;\n      // Detached nodes are allowed to mutate and the \"can perform mutations\"\n      // check will be performed when they re-attach. This assert is only useful\n      // during layout.\n      if (owner == null || !owner.debugDoingLayout) {\n        result = true;\n        return true;\n      }\n\n      RenderObject? activeLayoutRoot = this;\n      while (activeLayoutRoot != null) {\n        final bool mutationsToDirtySubtreesAllowed = activeLayoutRoot.owner?._debugAllowMutationsToDirtySubtrees ?? false;\n        final bool doingLayoutWithCallback = activeLayoutRoot._doingThisLayoutWithCallback;\n        // Mutations on this subtree is allowed when:\n        // - the subtree is being mutated in a layout callback.\n        // - a different part of the render tree is doing a layout callback,\n        //   and this subtree is being reparented to that subtree, as a result\n        //   of global key reparenting.\n        if (doingLayoutWithCallback || mutationsToDirtySubtreesAllowed && activeLayoutRoot._needsLayout) {\n          result = true;\n          return true;\n        }\n\n        if (!activeLayoutRoot._debugMutationsLocked) {\n          final AbstractNode? p = activeLayoutRoot.parent;\n          activeLayoutRoot = p is RenderObject ? p : null;\n        } else {\n          // activeLayoutRoot found.\n          break;\n        }\n      }\n\n      final RenderObject debugActiveLayout = RenderObject.debugActiveLayout!;\n      final String culpritMethodName = debugActiveLayout.debugDoingThisLayout ? 'performLayout' : 'performResize';\n      final String culpritFullMethodName = '${debugActiveLayout.runtimeType}.$culpritMethodName';\n      result = false;\n\n      if (activeLayoutRoot == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A $runtimeType was mutated in $culpritFullMethodName.'),\n          ErrorDescription(\n            'The RenderObject was mutated when none of its ancestors is actively performing layout.',\n          ),\n          DiagnosticsProperty<RenderObject>(\n            'The RenderObject being mutated was',\n            this,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n          DiagnosticsProperty<RenderObject>(\n            'The RenderObject that was mutating the said $runtimeType was',\n            debugActiveLayout,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n\n      if (activeLayoutRoot == this) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A $runtimeType was mutated in its own $culpritMethodName implementation.'),\n          ErrorDescription('A RenderObject must not re-dirty itself while still being laid out.'),\n          DiagnosticsProperty<RenderObject>(\n            'The RenderObject being mutated was',\n            this,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n          ErrorHint('Consider using the LayoutBuilder widget to dynamically change a subtree during layout.'),\n        ]);\n      }\n\n      final ErrorSummary summary = ErrorSummary('A $runtimeType was mutated in $culpritFullMethodName.');\n      final bool isMutatedByAncestor = activeLayoutRoot == debugActiveLayout;\n      final String description = isMutatedByAncestor\n        ? 'A RenderObject must not mutate its descendants in its $culpritMethodName method.'\n        : 'A RenderObject must not mutate another RenderObject from a different render subtree '\n          'in its $culpritMethodName method.';\n\n      throw FlutterError.fromParts(<DiagnosticsNode>[\n        summary,\n        ErrorDescription(description),\n        DiagnosticsProperty<RenderObject>(\n          'The RenderObject being mutated was',\n          this,\n          style: DiagnosticsTreeStyle.errorProperty,\n        ),\n        DiagnosticsProperty<RenderObject>(\n          'The ${isMutatedByAncestor ? 'ancestor ' : ''}RenderObject that was mutating the said $runtimeType was',\n          debugActiveLayout,\n          style: DiagnosticsTreeStyle.errorProperty,\n        ),\n        if (!isMutatedByAncestor) DiagnosticsProperty<RenderObject>(\n          'Their common ancestor was',\n          activeLayoutRoot,\n          style: DiagnosticsTreeStyle.errorProperty,\n        ),\n        ErrorHint(\n          'Mutating the layout of another RenderObject may cause some RenderObjects in its subtree to be laid out more than once. '\n          'Consider using the LayoutBuilder widget to dynamically mutate a subtree during layout.'\n        ),\n      ]);\n    }()");
      return result$35get();
    }
    get owner() {
      return T$.PipelineOwnerN().as(super.owner);
    }
    attach(owner) {
      object$.PipelineOwner.as(owner);
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 1700, 12, "!_debugDisposed");
      super.attach(owner);
      if (this[_needsLayout] && this[_relayoutBoundary] != null) {
        this[_needsLayout] = false;
        this.markNeedsLayout();
      }
      if (this[_needsCompositingBitsUpdate]) {
        this[_needsCompositingBitsUpdate] = false;
        this.markNeedsCompositingBitsUpdate();
      }
      if (this[_needsPaint] && this[_layerHandle].layer != null) {
        this[_needsPaint] = false;
        this.markNeedsPaint();
      }
      if (this[_needsSemanticsUpdate] && this[_semanticsConfiguration].isSemanticBoundary) {
        this[_needsSemanticsUpdate] = false;
        this.markNeedsSemanticsUpdate();
      }
    }
    get debugNeedsLayout() {
      let result = null;
      function result$35get() {
        let t12;
        t12 = result;
        return t12 == null ? dart.throw(new _internal.LateError.localNI("result")) : t12;
      }
      dart.fn(result$35get, T$.VoidTobool());
      function result$35set(result$35param) {
        return result = result$35param;
      }
      dart.fn(result$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        result$35set(this[_needsLayout]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1738, 12, "() {\n      result = _needsLayout;\n      return true;\n    }()");
      return result$35get();
    }
    get debugDoingThisLayoutWithCallback() {
      return this[_doingThisLayoutWithCallback];
    }
    get constraints() {
      if (this[_constraints] == null) {
        dart.throw(new core.StateError.new("A RenderObject does not have any constraints before it has been laid out."));
      }
      return dart.nullCheck(this[_constraints]);
    }
    [_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]() {
      if (this[_relayoutBoundary] == null) {
        return true;
      }
      let node = this;
      while (!node[$_equals](this[_relayoutBoundary])) {
        if (!dart.equals(node[_relayoutBoundary], this[_relayoutBoundary])) dart.assertFailed(null, I[3], 1790, 14, "node._relayoutBoundary == _relayoutBoundary");
        if (!(node.parent != null)) dart.assertFailed(null, I[3], 1791, 14, "node.parent != null");
        node = object$.RenderObject.as(dart.nullCheck(node.parent));
        if (!node[_needsLayout] && !node[_debugDoingThisLayout]) {
          return false;
        }
      }
      if (!dart.equals(node[_relayoutBoundary], node)) dart.assertFailed(null, I[3], 1797, 12, "node._relayoutBoundary == node");
      return true;
    }
    markNeedsLayout() {
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[3], 1840, 12, "_debugCanPerformMutations");
      if (this[_needsLayout]) {
        if (!this[_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]()) dart.assertFailed(null, I[3], 1842, 14, "_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout()");
        return;
      }
      if (this[_relayoutBoundary] == null) {
        this[_needsLayout] = true;
        if (this.parent != null) {
          this.markParentNeedsLayout();
        }
        return;
      }
      if (!dart.equals(this[_relayoutBoundary], this)) {
        this.markParentNeedsLayout();
      } else {
        this[_needsLayout] = true;
        if (this.owner != null) {
          if (!dart.fn(() => {
            if (debug.debugPrintMarkNeedsLayoutStacks) {
              assertions.debugPrintStack({label: "markNeedsLayout() called for " + dart.str(this)});
            }
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1860, 16, "() {\n          if (debugPrintMarkNeedsLayoutStacks) {\n            debugPrintStack(label: 'markNeedsLayout() called for $this');\n          }\n          return true;\n        }()");
          dart.nullCheck(this.owner)[_nodesNeedingLayout][$add](this);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      }
    }
    markParentNeedsLayout() {
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[3], 1883, 12, "_debugCanPerformMutations");
      this[_needsLayout] = true;
      if (!(this.parent != null)) dart.assertFailed(null, I[3], 1885, 12, "this.parent != null");
      let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
      if (!this[_doingThisLayoutWithCallback]) {
        parent.markNeedsLayout();
      } else {
        if (!parent[_debugDoingThisLayout]) dart.assertFailed(null, I[3], 1890, 14, "parent._debugDoingThisLayout");
      }
      if (!parent[$_equals](this.parent)) dart.assertFailed(null, I[3], 1892, 12, "parent == this.parent");
    }
    markNeedsLayoutForSizedByParentChange() {
      this.markNeedsLayout();
      this.markParentNeedsLayout();
    }
    [_cleanRelayoutBoundary]() {
      if (!dart.equals(this[_relayoutBoundary], this)) {
        this[_relayoutBoundary] = null;
        this.visitChildren(C[7] || CT.C7);
      }
    }
    [_propagateRelayoutBoundary]() {
      let t14;
      if (dart.equals(this[_relayoutBoundary], this)) {
        return;
      }
      let parentRelayoutBoundary = (t14 = T$.RenderObjectN().as(this.parent), t14 == null ? null : t14[_relayoutBoundary]);
      if (!(parentRelayoutBoundary != null)) dart.assertFailed(null, I[3], 1919, 12, "parentRelayoutBoundary != null");
      if (!dart.equals(parentRelayoutBoundary, this[_relayoutBoundary])) {
        this[_relayoutBoundary] = parentRelayoutBoundary;
        this.visitChildren(C[8] || CT.C8);
      }
    }
    static _cleanChildRelayoutBoundary(child) {
      child[_cleanRelayoutBoundary]();
    }
    static _propagateRelayoutBoundaryToChild(child) {
      child[_propagateRelayoutBoundary]();
    }
    scheduleInitialLayout() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 1942, 12, "!_debugDisposed");
      if (!this.attached) dart.assertFailed(null, I[3], 1943, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, I[3], 1944, 12, "parent is! RenderObject");
      if (!!dart.nullCheck(this.owner)[_debugDoingLayout]) dart.assertFailed(null, I[3], 1945, 12, "!owner!._debugDoingLayout");
      if (!(this[_relayoutBoundary] == null)) dart.assertFailed(null, I[3], 1946, 12, "_relayoutBoundary == null");
      this[_relayoutBoundary] = this;
      if (!dart.fn(() => {
        this[_debugCanParentUseSize] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1948, 12, "() {\n      _debugCanParentUseSize = false;\n      return true;\n    }()");
      dart.nullCheck(this.owner)[_nodesNeedingLayout][$add](this);
    }
    [_layoutWithoutResize]() {
      if (!dart.equals(this[_relayoutBoundary], this)) dart.assertFailed(null, I[3], 1957, 12, "_relayoutBoundary == this");
      let debugPreviousActiveLayout = null;
      if (!!this[_debugMutationsLocked$]) dart.assertFailed(null, I[3], 1959, 12, "!_debugMutationsLocked");
      if (!!this[_doingThisLayoutWithCallback]) dart.assertFailed(null, I[3], 1960, 12, "!_doingThisLayoutWithCallback");
      if (!(this[_debugCanParentUseSize] != null)) dart.assertFailed(null, I[3], 1961, 12, "_debugCanParentUseSize != null");
      if (!dart.fn(() => {
        this[_debugMutationsLocked$] = true;
        this[_debugDoingThisLayout] = true;
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = this;
        if (debug.debugPrintLayouts) {
          print.debugPrint("Laying out (without resize) " + dart.str(this));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1962, 12, "() {\n      _debugMutationsLocked = true;\n      _debugDoingThisLayout = true;\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = this;\n      if (debugPrintLayouts) {\n        debugPrint('Laying out (without resize) $this');\n      }\n      return true;\n    }()");
      try {
        this.performLayout();
        this.markNeedsSemanticsUpdate();
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stack = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          this[_debugReportException]("performLayout", e, stack);
        } else
          throw e$;
      }
      if (!dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        this[_debugDoingThisLayout] = false;
        this[_debugMutationsLocked$] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1978, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      _debugDoingThisLayout = false;\n      _debugMutationsLocked = false;\n      return true;\n    }()");
      this[_needsLayout] = false;
      this.markNeedsPaint();
    }
    layout(constraints, opts) {
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 2013, 12, "!_debugDisposed");
      if (true && debug.debugProfileLayoutsEnabled) {
        let debugTimelineArguments = null;
        if (!dart.fn(() => {
          if (debug.debugEnhanceLayoutTimelineArguments) {
            debugTimelineArguments = this.toDiagnosticsNode().toTimelineArguments();
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2016, 14, "() {\n        if (debugEnhanceLayoutTimelineArguments) {\n          debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();\n        }\n        return true;\n      }()");
        developer.Timeline.startSync(dart.str(this[$runtimeType]), {arguments: debugTimelineArguments});
      }
      if (!(constraints !== null)) dart.assertFailed(null, I[3], 2027, 12, "constraints != null");
      if (!constraints.debugAssertIsValid({isAppliedConstraint: true, informationCollector: dart.fn(() => {
          let stack = core.StackTrace.current.toString()[$split]("\n");
          let targetFrame = null;
          let layoutFramePattern = core.RegExp.new("^#[0-9]+ +RenderObject.layout \\(");
          for (let i = 0; i < stack[$length]; i = i + 1) {
            if (layoutFramePattern[$matchAsPrefix](stack[$_get](i)) != null) {
              targetFrame = i + 1;
              break;
            }
          }
          if (targetFrame != null && dart.notNull(targetFrame) < stack[$length]) {
            let targetFramePattern = core.RegExp.new("^#[0-9]+ +(.+)$");
            let targetFrameMatch = targetFramePattern[$matchAsPrefix](stack[$_get](targetFrame));
            let problemFunction = targetFrameMatch != null && targetFrameMatch.groupCount > 0 ? targetFrameMatch.group(1) : stack[$_get](targetFrame)[$trim]();
            return T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new("These invalid constraints were provided to " + dart.str(this[$runtimeType]) + "'s layout() " + "function by the following function, which probably computed the " + "invalid constraints in question:\n" + "  " + dart.str(problemFunction))]);
          }
          return T$.JSArrayOfDiagnosticsNode().of([]);
        }, T$.VoidToListOfDiagnosticsNode())})) dart.assertFailed(null, I[3], 2028, 12, "constraints.debugAssertIsValid(\n      isAppliedConstraint: true,\n      informationCollector: () {\n        final List<String> stack = StackTrace.current.toString().split('\\n');\n        int? targetFrame;\n        final Pattern layoutFramePattern = RegExp(r'^#[0-9]+ +RenderObject.layout \\(');\n        for (int i = 0; i < stack.length; i += 1) {\n          if (layoutFramePattern.matchAsPrefix(stack[i]) != null) {\n            targetFrame = i + 1;\n            break;\n          }\n        }\n        if (targetFrame != null && targetFrame < stack.length) {\n          final Pattern targetFramePattern = RegExp(r'^#[0-9]+ +(.+)$');\n          final Match? targetFrameMatch = targetFramePattern.matchAsPrefix(stack[targetFrame]);\n          final String? problemFunction = (targetFrameMatch != null && targetFrameMatch.groupCount > 0) ? targetFrameMatch.group(1) : stack[targetFrame].trim();\n          // TODO(jacobr): this case is similar to displaying a single stack frame.\n          return <DiagnosticsNode>[\n            ErrorDescription(\n              \"These invalid constraints were provided to $runtimeType's layout() \"\n              'function by the following function, which probably computed the '\n              'invalid constraints in question:\\n'\n              '  $problemFunction',\n            ),\n          ];\n        }\n        return <DiagnosticsNode>[];\n      },\n    )");
      if (!!this[_debugDoingThisResize]) dart.assertFailed(null, I[3], 2057, 12, "!_debugDoingThisResize");
      if (!!this[_debugDoingThisLayout]) dart.assertFailed(null, I[3], 2058, 12, "!_debugDoingThisLayout");
      let isRelayoutBoundary = !parentUsesSize || this.sizedByParent || constraints.isTight || !object$.RenderObject.is(this.parent);
      let relayoutBoundary = isRelayoutBoundary ? this : dart.nullCheck(object$.RenderObject.as(dart.nullCheck(this.parent))[_relayoutBoundary]);
      if (!dart.fn(() => {
        this[_debugCanParentUseSize] = parentUsesSize;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2061, 12, "() {\n      _debugCanParentUseSize = parentUsesSize;\n      return true;\n    }()");
      if (!this[_needsLayout] && constraints[$_equals](this[_constraints])) {
        if (!dart.fn(() => {
          this[_debugDoingThisResize] = this.sizedByParent;
          this[_debugDoingThisLayout] = !this.sizedByParent;
          let debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
          object$.RenderObject._debugActiveLayout = this;
          this.debugResetSize();
          object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
          this[_debugDoingThisLayout] = false;
          this[_debugDoingThisResize] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2067, 14, "() {\n        // in case parentUsesSize changed since the last invocation, set size\n        // to itself, so it has the right internal debug values.\n        _debugDoingThisResize = sizedByParent;\n        _debugDoingThisLayout = !sizedByParent;\n        final RenderObject? debugPreviousActiveLayout = _debugActiveLayout;\n        _debugActiveLayout = this;\n        debugResetSize();\n        _debugActiveLayout = debugPreviousActiveLayout;\n        _debugDoingThisLayout = false;\n        _debugDoingThisResize = false;\n        return true;\n      }()");
        if (!relayoutBoundary[$_equals](this[_relayoutBoundary])) {
          this[_relayoutBoundary] = relayoutBoundary;
          this.visitChildren(C[8] || CT.C8);
        }
        if (true && debug.debugProfileLayoutsEnabled) {
          developer.Timeline.finishSync();
        }
        return;
      }
      this[_constraints] = constraints;
      if (this[_relayoutBoundary] != null && !relayoutBoundary[$_equals](this[_relayoutBoundary])) {
        this.visitChildren(C[7] || CT.C7);
      }
      this[_relayoutBoundary] = relayoutBoundary;
      if (!!this[_debugMutationsLocked$]) dart.assertFailed(null, I[3], 2099, 12, "!_debugMutationsLocked");
      if (!!this[_doingThisLayoutWithCallback]) dart.assertFailed(null, I[3], 2100, 12, "!_doingThisLayoutWithCallback");
      if (!dart.fn(() => {
        this[_debugMutationsLocked$] = true;
        if (debug.debugPrintLayouts) {
          print.debugPrint("Laying out (" + (this.sizedByParent ? "with separate resize" : "with resize allowed") + ") " + dart.str(this));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2101, 12, "() {\n      _debugMutationsLocked = true;\n      if (debugPrintLayouts) {\n        debugPrint('Laying out (${sizedByParent ? \"with separate resize\" : \"with resize allowed\"}) $this');\n      }\n      return true;\n    }()");
      if (this.sizedByParent) {
        if (!dart.fn(() => {
          this[_debugDoingThisResize] = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2109, 14, "() {\n        _debugDoingThisResize = true;\n        return true;\n      }()");
        try {
          this.performResize();
          if (!dart.fn(() => {
            this.debugAssertDoesMeetConstraints();
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2115, 16, "() {\n          debugAssertDoesMeetConstraints();\n          return true;\n        }()");
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          if (core.Object.is(e)) {
            this[_debugReportException]("performResize", e, stack);
          } else
            throw e$;
        }
        if (!dart.fn(() => {
          this[_debugDoingThisResize] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2122, 14, "() {\n        _debugDoingThisResize = false;\n        return true;\n      }()");
      }
      let debugPreviousActiveLayout = null;
      if (!dart.fn(() => {
        this[_debugDoingThisLayout] = true;
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = this;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2128, 12, "() {\n      _debugDoingThisLayout = true;\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = this;\n      return true;\n    }()");
      try {
        this.performLayout();
        this.markNeedsSemanticsUpdate();
        if (!dart.fn(() => {
          this.debugAssertDoesMeetConstraints();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2137, 14, "() {\n        debugAssertDoesMeetConstraints();\n        return true;\n      }()");
      } catch (e$0) {
        let e = dart.getThrown(e$0);
        let stack = dart.stackTrace(e$0);
        if (core.Object.is(e)) {
          this[_debugReportException]("performLayout", e, stack);
        } else
          throw e$0;
      }
      if (!dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        this[_debugDoingThisLayout] = false;
        this[_debugMutationsLocked$] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2144, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      _debugDoingThisLayout = false;\n      _debugMutationsLocked = false;\n      return true;\n    }()");
      this[_needsLayout] = false;
      this.markNeedsPaint();
      if (true && debug.debugProfileLayoutsEnabled) {
        developer.Timeline.finishSync();
      }
    }
    debugResetSize() {
    }
    get sizedByParent() {
      return false;
    }
    invokeLayoutCallback(T, callback) {
      if (!this[_debugMutationsLocked$]) dart.assertFailed(null, I[3], 2241, 12, "_debugMutationsLocked");
      if (!this[_debugDoingThisLayout]) dart.assertFailed(null, I[3], 2242, 12, "_debugDoingThisLayout");
      if (!!this[_doingThisLayoutWithCallback]) dart.assertFailed(null, I[3], 2243, 12, "!_doingThisLayoutWithCallback");
      this[_doingThisLayoutWithCallback] = true;
      try {
        dart.nullCheck(this.owner)[_enableMutationsToDirtySubtrees](dart.fn(() => {
          callback(T.as(this.constraints));
        }, T$.VoidTovoid()));
      } finally {
        this[_doingThisLayoutWithCallback] = false;
      }
    }
    get debugDoingThisPaint() {
      return this[_debugDoingThisPaint];
    }
    static get debugActivePaint() {
      return object$.RenderObject._debugActivePaint;
    }
    get isRepaintBoundary() {
      return false;
    }
    debugRegisterRepaintBoundaryPaint(opts) {
      let includedParent = opts && 'includedParent' in opts ? opts.includedParent : true;
      let includedChild = opts && 'includedChild' in opts ? opts.includedChild : false;
    }
    get alwaysNeedsCompositing() {
      return false;
    }
    get [_wasRepaintBoundary]() {
      let t17;
      t17 = this[__RenderObject__wasRepaintBoundary];
      return t17 == null ? dart.throw(new _internal.LateError.fieldNI("_wasRepaintBoundary")) : t17;
    }
    set [_wasRepaintBoundary](library$32package$58flutter$47src$47rendering$47object$46dart$58$58_wasRepaintBoundary$35param) {
      this[__RenderObject__wasRepaintBoundary] = library$32package$58flutter$47src$47rendering$47object$46dart$58$58_wasRepaintBoundary$35param;
    }
    updateCompositedLayer(opts) {
      let t17;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      T$.OffsetLayerN().as(oldLayer);
      if (!this.isRepaintBoundary) dart.assertFailed(null, I[3], 2329, 12, "isRepaintBoundary");
      t17 = oldLayer;
      return t17 == null ? new layer$.OffsetLayer.new() : t17;
    }
    get layer() {
      if (!(!this.isRepaintBoundary || this[_layerHandle].layer == null || layer$.OffsetLayer.is(this[_layerHandle].layer))) dart.assertFailed(null, I[3], 2360, 12, "!isRepaintBoundary || _layerHandle.layer == null || _layerHandle.layer is OffsetLayer");
      return this[_layerHandle].layer;
    }
    set layer(newLayer) {
      if (!!this.isRepaintBoundary) dart.assertFailed("Attempted to set a layer to a repaint boundary render object.\n" + "The framework creates and assigns an OffsetLayer to a repaint " + "boundary automatically.", I[3], 2367, 7, "!isRepaintBoundary");
      this[_layerHandle].layer = newLayer;
    }
    get debugLayer() {
      let result = null;
      if (!dart.fn(() => {
        result = this[_layerHandle].layer;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2386, 12, "() {\n      result = _layerHandle.layer;\n      return true;\n    }()");
      return result;
    }
    markNeedsCompositingBitsUpdate() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 2411, 12, "!_debugDisposed");
      if (this[_needsCompositingBitsUpdate]) {
        return;
      }
      this[_needsCompositingBitsUpdate] = true;
      if (object$.RenderObject.is(this.parent)) {
        let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
        if (parent[_needsCompositingBitsUpdate]) {
          return;
        }
        if ((!this[_wasRepaintBoundary] || !this.isRepaintBoundary) && !parent.isRepaintBoundary) {
          parent.markNeedsCompositingBitsUpdate();
          return;
        }
      }
      if (this.owner != null) {
        dart.nullCheck(this.owner)[_nodesNeedingCompositingBitsUpdate][$add](this);
      }
    }
    get [_needsCompositing]() {
      let t17;
      t17 = this[__RenderObject__needsCompositing];
      return t17 == null ? dart.throw(new _internal.LateError.fieldNI("_needsCompositing")) : t17;
    }
    set [_needsCompositing](library$32package$58flutter$47src$47rendering$47object$46dart$58$58_needsCompositing$35param) {
      this[__RenderObject__needsCompositing] = library$32package$58flutter$47src$47rendering$47object$46dart$58$58_needsCompositing$35param;
    }
    get needsCompositing() {
      if (!!this[_needsCompositingBitsUpdate]) dart.assertFailed(null, I[3], 2442, 12, "!_needsCompositingBitsUpdate");
      return this[_needsCompositing];
    }
    [_updateCompositingBits]() {
      let t17;
      if (!this[_needsCompositingBitsUpdate]) {
        return;
      }
      let oldNeedsCompositing = this[_needsCompositing];
      this[_needsCompositing] = false;
      this.visitChildren(dart.fn(child => {
        child[_updateCompositingBits]();
        if (child.needsCompositing) {
          this[_needsCompositing] = true;
        }
      }, T$.RenderObjectTovoid()));
      if (this.isRepaintBoundary || this.alwaysNeedsCompositing) {
        this[_needsCompositing] = true;
      }
      if (!this.isRepaintBoundary && this[_wasRepaintBoundary]) {
        this[_needsPaint] = false;
        this[_needsCompositedLayerUpdate] = false;
        t17 = this.owner;
        t17 == null ? null : t17[_nodesNeedingPaint][$remove](this);
        this[_needsCompositingBitsUpdate] = false;
        this.markNeedsPaint();
      } else if (oldNeedsCompositing !== this[_needsCompositing]) {
        this[_needsCompositingBitsUpdate] = false;
        this.markNeedsPaint();
      } else {
        this[_needsCompositingBitsUpdate] = false;
      }
    }
    get debugNeedsPaint() {
      let result = null;
      function result$35get() {
        let t18;
        t18 = result;
        return t18 == null ? dart.throw(new _internal.LateError.localNI("result")) : t18;
      }
      dart.fn(result$35get, T$.VoidTobool());
      function result$35set(result$35param) {
        return result = result$35param;
      }
      dart.fn(result$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        result$35set(this[_needsPaint]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2496, 12, "() {\n      result = _needsPaint;\n      return true;\n    }()");
      return result$35get();
    }
    get debugNeedsCompositedLayerUpdate() {
      let result = null;
      function result$35get() {
        let t21;
        t21 = result;
        return t21 == null ? dart.throw(new _internal.LateError.localNI("result")) : t21;
      }
      dart.fn(result$35get, T$.VoidTobool());
      function result$35set(result$35param) {
        return result = result$35param;
      }
      dart.fn(result$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        result$35set(this[_needsCompositedLayerUpdate]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2514, 12, "() {\n      result = _needsCompositedLayerUpdate;\n      return true;\n    }()");
      return result$35get();
    }
    markNeedsPaint() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 2543, 12, "!_debugDisposed");
      if (!(this.owner == null || !dart.nullCheck(this.owner).debugDoingPaint)) dart.assertFailed(null, I[3], 2544, 12, "owner == null || !owner!.debugDoingPaint");
      if (this[_needsPaint]) {
        return;
      }
      this[_needsPaint] = true;
      if (this.isRepaintBoundary && this[_wasRepaintBoundary]) {
        if (!dart.fn(() => {
          if (debug.debugPrintMarkNeedsPaintStacks) {
            assertions.debugPrintStack({label: "markNeedsPaint() called for " + dart.str(this)});
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2552, 14, "() {\n        if (debugPrintMarkNeedsPaintStacks) {\n          debugPrintStack(label: 'markNeedsPaint() called for $this');\n        }\n        return true;\n      }()");
        if (!layer$.OffsetLayer.is(this[_layerHandle].layer)) dart.assertFailed(null, I[3], 2560, 14, "_layerHandle.layer is OffsetLayer");
        if (this.owner != null) {
          dart.nullCheck(this.owner)[_nodesNeedingPaint][$add](this);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      } else if (object$.RenderObject.is(this.parent)) {
        let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
        parent.markNeedsPaint();
        if (!parent[$_equals](this.parent)) dart.assertFailed(null, I[3], 2568, 14, "parent == this.parent");
      } else {
        if (!dart.fn(() => {
          if (debug.debugPrintMarkNeedsPaintStacks) {
            assertions.debugPrintStack({label: "markNeedsPaint() called for " + dart.str(this) + " (root of render tree)"});
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2570, 14, "() {\n        if (debugPrintMarkNeedsPaintStacks) {\n          debugPrintStack(label: 'markNeedsPaint() called for $this (root of render tree)');\n        }\n        return true;\n      }()");
        if (this.owner != null) {
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      }
    }
    markNeedsCompositedLayerUpdate() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 2604, 12, "!_debugDisposed");
      if (!(this.owner == null || !dart.nullCheck(this.owner).debugDoingPaint)) dart.assertFailed(null, I[3], 2605, 12, "owner == null || !owner!.debugDoingPaint");
      if (this[_needsCompositedLayerUpdate] || this[_needsPaint]) {
        return;
      }
      this[_needsCompositedLayerUpdate] = true;
      if (this.isRepaintBoundary && this[_wasRepaintBoundary]) {
        if (!(this[_layerHandle].layer != null)) dart.assertFailed(null, I[3], 2615, 14, "_layerHandle.layer != null");
        if (this.owner != null) {
          dart.nullCheck(this.owner)[_nodesNeedingPaint][$add](this);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      } else {
        this.markNeedsPaint();
      }
    }
    [_skippedPaintingOnLayer]() {
      if (!this.attached) dart.assertFailed(null, I[3], 2631, 12, "attached");
      if (!this.isRepaintBoundary) dart.assertFailed(null, I[3], 2632, 12, "isRepaintBoundary");
      if (!(this[_needsPaint] || this[_needsCompositedLayerUpdate])) dart.assertFailed(null, I[3], 2633, 12, "_needsPaint || _needsCompositedLayerUpdate");
      if (!(this[_layerHandle].layer != null)) dart.assertFailed(null, I[3], 2634, 12, "_layerHandle.layer != null");
      if (!!dart.nullCheck(this[_layerHandle].layer).attached) dart.assertFailed(null, I[3], 2635, 12, "!_layerHandle.layer!.attached");
      let node = this.parent;
      while (object$.RenderObject.is(node)) {
        if (node.isRepaintBoundary) {
          if (node[_layerHandle].layer == null) {
            break;
          }
          if (dart.nullCheck(node[_layerHandle].layer).attached) {
            break;
          }
          node[_needsPaint] = true;
        }
        node = node.parent;
      }
    }
    scheduleInitialPaint(rootLayer) {
      if (!rootLayer.attached) dart.assertFailed(null, I[3], 2660, 12, "rootLayer.attached");
      if (!this.attached) dart.assertFailed(null, I[3], 2661, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, I[3], 2662, 12, "parent is! RenderObject");
      if (!!dart.nullCheck(this.owner)[_debugDoingPaint]) dart.assertFailed(null, I[3], 2663, 12, "!owner!._debugDoingPaint");
      if (!this.isRepaintBoundary) dart.assertFailed(null, I[3], 2664, 12, "isRepaintBoundary");
      if (!(this[_layerHandle].layer == null)) dart.assertFailed(null, I[3], 2665, 12, "_layerHandle.layer == null");
      this[_layerHandle].layer = rootLayer;
      if (!this[_needsPaint]) dart.assertFailed(null, I[3], 2667, 12, "_needsPaint");
      dart.nullCheck(this.owner)[_nodesNeedingPaint][$add](this);
    }
    replaceRootLayer(rootLayer) {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 2677, 12, "!_debugDisposed");
      if (!rootLayer.attached) dart.assertFailed(null, I[3], 2678, 12, "rootLayer.attached");
      if (!this.attached) dart.assertFailed(null, I[3], 2679, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, I[3], 2680, 12, "parent is! RenderObject");
      if (!!dart.nullCheck(this.owner)[_debugDoingPaint]) dart.assertFailed(null, I[3], 2681, 12, "!owner!._debugDoingPaint");
      if (!this.isRepaintBoundary) dart.assertFailed(null, I[3], 2682, 12, "isRepaintBoundary");
      if (!(this[_layerHandle].layer != null)) dart.assertFailed(null, I[3], 2683, 12, "_layerHandle.layer != null");
      dart.nullCheck(this[_layerHandle].layer).detach();
      this[_layerHandle].layer = rootLayer;
      this.markNeedsPaint();
    }
    [_paintWithContext](context, offset) {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 2690, 12, "!_debugDisposed");
      if (!dart.fn(() => {
        if (this[_debugDoingThisPaint]) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to paint a RenderObject reentrantly."), this.describeForError("The following RenderObject was already being painted when it was " + "painted again"), new assertions.ErrorDescription.new("Since this typically indicates an infinite recursion, it is " + "disallowed.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2691, 12, "() {\n      if (_debugDoingThisPaint) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Tried to paint a RenderObject reentrantly.'),\n          describeForError(\n            'The following RenderObject was already being painted when it was '\n            'painted again',\n          ),\n          ErrorDescription(\n            'Since this typically indicates an infinite recursion, it is '\n            'disallowed.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      if (this[_needsLayout]) {
        return;
      }
      if (true && debug.debugProfilePaintsEnabled) {
        let debugTimelineArguments = null;
        if (!dart.fn(() => {
          if (debug.debugEnhancePaintTimelineArguments) {
            debugTimelineArguments = this.toDiagnosticsNode().toTimelineArguments();
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2719, 14, "() {\n        if (debugEnhancePaintTimelineArguments) {\n          debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();\n        }\n        return true;\n      }()");
        developer.Timeline.startSync(dart.str(this[$runtimeType]), {arguments: debugTimelineArguments});
      }
      if (!dart.fn(() => {
        if (this[_needsCompositingBitsUpdate]) {
          if (object$.RenderObject.is(this.parent)) {
            let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
            let visitedByParent = false;
            parent.visitChildren(dart.fn(child => {
              if (child[$_equals](this)) {
                visitedByParent = true;
              }
            }, T$.RenderObjectTovoid()));
            if (!visitedByParent) {
              dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A RenderObject was not visited by the parent's visitChildren " + "during paint."), parent.describeForError("The parent was"), this.describeForError("The child that was not visited was"), new assertions.ErrorDescription.new("A RenderObject with children must implement visitChildren and " + "call the visitor exactly once for each child; it also should not " + "paint children that were removed with dropChild."), new assertions.ErrorHint.new("This usually indicates an error in the Flutter framework itself.")])));
            }
          }
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to paint a RenderObject before its compositing bits were " + "updated."), this.describeForError("The following RenderObject was marked as having dirty compositing " + "bits at the time that it was painted"), new assertions.ErrorDescription.new("A RenderObject that still has dirty compositing bits cannot be " + "painted because this indicates that the tree has not yet been " + "properly configured for creating the layer tree."), new assertions.ErrorHint.new("This usually indicates an error in the Flutter framework itself.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2730, 12, "() {\n      if (_needsCompositingBitsUpdate) {\n        if (parent is RenderObject) {\n          final RenderObject parent = this.parent! as RenderObject;\n          bool visitedByParent = false;\n          parent.visitChildren((RenderObject child) {\n            if (child == this) {\n              visitedByParent = true;\n            }\n          });\n          if (!visitedByParent) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary(\n                \"A RenderObject was not visited by the parent's visitChildren \"\n                'during paint.',\n              ),\n              parent.describeForError(\n                'The parent was',\n              ),\n              describeForError(\n                'The child that was not visited was',\n              ),\n              ErrorDescription(\n                'A RenderObject with children must implement visitChildren and '\n                'call the visitor exactly once for each child; it also should not '\n                'paint children that were removed with dropChild.',\n              ),\n              ErrorHint(\n                'This usually indicates an error in the Flutter framework itself.',\n              ),\n            ]);\n          }\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'Tried to paint a RenderObject before its compositing bits were '\n            'updated.',\n          ),\n          describeForError(\n            'The following RenderObject was marked as having dirty compositing '\n            'bits at the time that it was painted',\n          ),\n          ErrorDescription(\n            'A RenderObject that still has dirty compositing bits cannot be '\n            'painted because this indicates that the tree has not yet been '\n            'properly configured for creating the layer tree.',\n          ),\n          ErrorHint(\n            'This usually indicates an error in the Flutter framework itself.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      let debugLastActivePaint = null;
      if (!dart.fn(() => {
        this[_debugDoingThisPaint] = true;
        debugLastActivePaint = object$.RenderObject._debugActivePaint;
        object$.RenderObject._debugActivePaint = this;
        if (!(!this.isRepaintBoundary || this[_layerHandle].layer != null)) dart.assertFailed(null, I[3], 2789, 14, "!isRepaintBoundary || _layerHandle.layer != null");
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2785, 12, "() {\n      _debugDoingThisPaint = true;\n      debugLastActivePaint = _debugActivePaint;\n      _debugActivePaint = this;\n      assert(!isRepaintBoundary || _layerHandle.layer != null);\n      return true;\n    }()");
      this[_needsPaint] = false;
      this[_needsCompositedLayerUpdate] = false;
      this[_wasRepaintBoundary] = this.isRepaintBoundary;
      try {
        this.paint(context, offset);
        if (!!this[_needsLayout]) dart.assertFailed(null, I[3], 2797, 14, "!_needsLayout");
        if (!!this[_needsPaint]) dart.assertFailed(null, I[3], 2798, 14, "!_needsPaint");
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stack = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          this[_debugReportException]("paint", e, stack);
        } else
          throw e$;
      }
      if (!dart.fn(() => {
        this.debugPaint(context, offset);
        object$.RenderObject._debugActivePaint = debugLastActivePaint;
        this[_debugDoingThisPaint] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 2802, 12, "() {\n      debugPaint(context, offset);\n      _debugActivePaint = debugLastActivePaint;\n      _debugDoingThisPaint = false;\n      return true;\n    }()");
      if (true && debug.debugProfilePaintsEnabled) {
        developer.Timeline.finishSync();
      }
    }
    debugPaint(context, offset) {
    }
    paint(context, offset) {
    }
    applyPaintTransform(child, transform) {
      object$.RenderObject.as(child);
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 2855, 12, "child.parent == this");
    }
    paintsChild(child) {
      object$.RenderObject.as(child);
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 2872, 12, "child.parent == this");
      return true;
    }
    getTransformTo(ancestor) {
      let ancestorSpecified = ancestor != null;
      if (!this.attached) dart.assertFailed(null, I[3], 2894, 12, "attached");
      if (ancestor == null) {
        let rootNode = dart.nullCheck(this.owner).rootNode;
        if (object$.RenderObject.is(rootNode)) {
          ancestor = rootNode;
        }
      }
      let renderers = T$.JSArrayOfRenderObject().of([]);
      for (let renderer = this; !renderer[$_equals](ancestor); renderer = object$.RenderObject.as(dart.nullCheck(renderer.parent))) {
        renderers[$add](renderer);
        if (!(renderer.parent != null)) dart.assertFailed(null, I[3], 2904, 14, "renderer.parent != null");
      }
      if (ancestorSpecified) {
        renderers[$add](dart.nullCheck(ancestor));
      }
      let transform = vector_math_64.Matrix4.identity();
      for (let index = renderers[$length] - 1; index > 0; index = index - 1) {
        renderers[$_get](index).applyPaintTransform(renderers[$_get](index - 1), transform);
      }
      return transform;
    }
    describeApproximatePaintClip(child) {
      object$.RenderObject.as(child);
      return null;
    }
    describeSemanticsClip(child) {
      T$.RenderObjectN().as(child);
      return null;
    }
    scheduleInitialSemantics() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 2969, 12, "!_debugDisposed");
      if (!this.attached) dart.assertFailed(null, I[3], 2970, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, I[3], 2971, 12, "parent is! RenderObject");
      if (!!dart.nullCheck(this.owner)[_debugDoingSemantics]) dart.assertFailed(null, I[3], 2972, 12, "!owner!._debugDoingSemantics");
      if (!(this[_semantics] == null)) dart.assertFailed(null, I[3], 2973, 12, "_semantics == null");
      if (!this[_needsSemanticsUpdate]) dart.assertFailed(null, I[3], 2974, 12, "_needsSemanticsUpdate");
      if (!(dart.nullCheck(this.owner)[_semanticsOwner] != null)) dart.assertFailed(null, I[3], 2975, 12, "owner!._semanticsOwner != null");
      dart.nullCheck(this.owner)[_nodesNeedingSemantics].add(this);
      dart.nullCheck(this.owner).requestVisualUpdate();
    }
    describeSemanticsConfiguration(config) {
    }
    sendSemanticsEvent(semanticsEvent) {
      if (dart.nullCheck(this.owner).semanticsOwner == null) {
        return;
      }
      if (this[_semantics] != null && !dart.nullCheck(this[_semantics]).isMergedIntoParent) {
        dart.nullCheck(this[_semantics]).sendEvent(semanticsEvent);
      } else if (this.parent != null) {
        let renderParent = object$.RenderObject.as(dart.nullCheck(this.parent));
        renderParent.sendSemanticsEvent(semanticsEvent);
      }
    }
    get [_semanticsConfiguration]() {
      if (this[_cachedSemanticsConfiguration] == null) {
        this[_cachedSemanticsConfiguration] = new semantics.SemanticsConfiguration.new();
        this.describeSemanticsConfiguration(dart.nullCheck(this[_cachedSemanticsConfiguration]));
      }
      return dart.nullCheck(this[_cachedSemanticsConfiguration]);
    }
    get debugSemantics() {
      {
        return this[_semantics];
      }
      return null;
    }
    clearSemantics() {
      this[_needsSemanticsUpdate] = true;
      this[_semantics] = null;
      this.visitChildren(dart.fn(child => {
        child.clearSemantics();
      }, T$.RenderObjectTovoid()));
    }
    markNeedsSemanticsUpdate() {
      let t24, t24$;
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[3], 3093, 12, "!_debugDisposed");
      if (!(!this.attached || !dart.nullCheck(this.owner)[_debugDoingSemantics])) dart.assertFailed(null, I[3], 3094, 12, "!attached || !owner!._debugDoingSemantics");
      if (!this.attached || dart.nullCheck(this.owner)[_semanticsOwner] == null) {
        this[_cachedSemanticsConfiguration] = null;
        return;
      }
      let wasSemanticsBoundary = this[_semantics] != null && dart.test((t24$ = (t24 = this[_cachedSemanticsConfiguration], t24 == null ? null : t24.isSemanticBoundary), t24$ == null ? false : t24$));
      this[_cachedSemanticsConfiguration] = null;
      let isEffectiveSemanticsBoundary = this[_semanticsConfiguration].isSemanticBoundary && wasSemanticsBoundary;
      let node = this;
      while (!isEffectiveSemanticsBoundary && object$.RenderObject.is(node.parent)) {
        if (!node[$_equals](this) && node[_needsSemanticsUpdate]) {
          break;
        }
        node[_needsSemanticsUpdate] = true;
        node = object$.RenderObject.as(dart.nullCheck(node.parent));
        isEffectiveSemanticsBoundary = node[_semanticsConfiguration].isSemanticBoundary;
        if (isEffectiveSemanticsBoundary && node[_semantics] == null) {
          return;
        }
      }
      if (!node[$_equals](this) && this[_semantics] != null && this[_needsSemanticsUpdate]) {
        dart.nullCheck(this.owner)[_nodesNeedingSemantics].remove(this);
      }
      if (!node[_needsSemanticsUpdate]) {
        node[_needsSemanticsUpdate] = true;
        if (this.owner != null) {
          if (!(node[_semanticsConfiguration].isSemanticBoundary || !object$.RenderObject.is(node.parent))) dart.assertFailed(null, I[3], 3138, 16, "node._semanticsConfiguration.isSemanticBoundary || node.parent is! RenderObject");
          dart.nullCheck(this.owner)[_nodesNeedingSemantics].add(node);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      }
    }
    [_updateSemantics]() {
      let t25, t24, t24$, t24$0, t24$1, t24$2, t24$3;
      if (!(this[_semanticsConfiguration].isSemanticBoundary || !object$.RenderObject.is(this.parent))) dart.assertFailed(null, I[3], 3147, 12, "_semanticsConfiguration.isSemanticBoundary || parent is! RenderObject");
      if (this[_needsLayout]) {
        return;
      }
      let fragment = this[_getSemanticsForParent]({mergeIntoParent: (t24$ = (t24 = this[_semantics], t24 == null ? null : (t25 = t24.parent, t25 == null ? null : t25.isPartOfNodeMerging)), t24$ == null ? false : t24$)});
      if (!object$._InterestingSemanticsFragment.is(fragment)) dart.assertFailed(null, I[3], 3156, 12, "fragment is _InterestingSemanticsFragment");
      let interestingFragment = object$._InterestingSemanticsFragment.as(fragment);
      let result = T$.JSArrayOfSemanticsNode().of([]);
      interestingFragment.compileChildren({parentSemanticsClipRect: (t24$0 = this[_semantics], t24$0 == null ? null : t24$0.parentSemanticsClipRect), parentPaintClipRect: (t24$1 = this[_semantics], t24$1 == null ? null : t24$1.parentPaintClipRect), elevationAdjustment: (t24$3 = (t24$2 = this[_semantics], t24$2 == null ? null : t24$2.elevationAdjustment), t24$3 == null ? 0.0 : t24$3), result: result});
      let node = result[$single];
      if (!(interestingFragment.config == null && node[$_equals](this[_semantics]))) dart.assertFailed(null, I[3], 3167, 12, "interestingFragment.config == null && node == _semantics");
    }
    [_getSemanticsForParent](opts) {
      let mergeIntoParent = opts && 'mergeIntoParent' in opts ? opts.mergeIntoParent : null;
      if (!(mergeIntoParent !== null)) dart.assertFailed(null, I[3], 3174, 12, "mergeIntoParent != null");
      if (!!this[_needsLayout]) dart.assertFailed("Updated layout information required for " + dart.str(this) + " to calculate semantics.", I[3], 3175, 12, "!_needsLayout");
      let config = this[_semanticsConfiguration];
      let dropSemanticsOfPreviousSiblings = config.isBlockingSemanticsOfPreviouslyPaintedNodes;
      let producesForkingFragment = !config.hasBeenAnnotated && !config.isSemanticBoundary;
      let fragments = T$.JSArrayOf_InterestingSemanticsFragment().of([]);
      let toBeMarkedExplicit = T$.LinkedHashSetOf_InterestingSemanticsFragment().new();
      let childrenMergeIntoParent = mergeIntoParent || config.isMergingSemanticsOfDescendants;
      this.visitChildrenForSemantics(dart.fn(renderChild => {
        if (!!this[_needsLayout]) dart.assertFailed(null, I[3], 3186, 14, "!_needsLayout");
        let parentFragment = renderChild[_getSemanticsForParent]({mergeIntoParent: childrenMergeIntoParent});
        if (parentFragment.dropsSemanticsOfPreviousSiblings) {
          fragments[$clear]();
          toBeMarkedExplicit.clear();
          if (!config.isSemanticBoundary) {
            dropSemanticsOfPreviousSiblings = true;
          }
        }
        for (let fragment of parentFragment.interestingFragments) {
          fragments[$add](fragment);
          fragment.addAncestor(this);
          fragment.addTags(config.tagsForChildren);
          if (config.explicitChildNodes || !object$.RenderObject.is(this.parent)) {
            fragment.markAsExplicit();
            continue;
          }
          if (!fragment.hasConfigForParent || producesForkingFragment) {
            continue;
          }
          if (!config.isCompatibleWith(fragment.config)) {
            toBeMarkedExplicit.add(fragment);
          }
          let siblingLength = fragments[$length] - 1;
          for (let i = 0; i < siblingLength; i = i + 1) {
            let siblingFragment = fragments[$_get](i);
            if (!dart.nullCheck(fragment.config).isCompatibleWith(siblingFragment.config)) {
              toBeMarkedExplicit.add(fragment);
              toBeMarkedExplicit.add(siblingFragment);
            }
          }
        }
      }, T$.RenderObjectTovoid()));
      for (let fragment of toBeMarkedExplicit) {
        fragment.markAsExplicit();
      }
      this[_needsSemanticsUpdate] = false;
      let result = null;
      if (!object$.RenderObject.is(this.parent)) {
        if (!!config.hasBeenAnnotated) dart.assertFailed(null, I[3], 3231, 14, "!config.hasBeenAnnotated");
        if (!!mergeIntoParent) dart.assertFailed(null, I[3], 3232, 14, "!mergeIntoParent");
        result = new object$._RootSemanticsFragment.new({owner: this, dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
      } else if (producesForkingFragment) {
        result = new object$._ContainerSemanticsFragment.new({dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
      } else {
        result = new object$._SwitchableSemanticsFragment.new({config: config, mergeIntoParent: mergeIntoParent, owner: this, dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
        if (config.isSemanticBoundary) {
          let fragment = object$._SwitchableSemanticsFragment.as(result);
          fragment.markAsExplicit();
        }
      }
      result.addAll(fragments);
      return result;
    }
    visitChildrenForSemantics(visitor) {
      this.visitChildren(visitor);
    }
    assembleSemanticsNode(node, config, children) {
      if (!node[$_equals](this[_semantics])) dart.assertFailed(null, I[3], 3290, 12, "node == _semantics");
      node.updateWith({config: config, childrenInInversePaintOrder: T$.ListOfSemanticsNode().as(children)});
    }
    handleEvent(event, entry) {
      T$.HitTestEntryOfHitTestTarget().as(entry);
    }
    toStringShort() {
      let header = diagnostics.describeIdentity(this);
      {
        if (this[_debugDisposed$]) {
          header = header + " DISPOSED";
          return header;
        }
        if (this[_relayoutBoundary] != null && !dart.equals(this[_relayoutBoundary], this)) {
          let count = 1;
          let target = T$.RenderObjectN().as(this.parent);
          while (target != null && !dart.equals(target, this[_relayoutBoundary])) {
            target = T$.RenderObjectN().as(target.parent);
            count = count + 1;
          }
          header = header + (" relayoutBoundary=up" + dart.str(count));
        }
        if (this[_needsLayout]) {
          header = header + " NEEDS-LAYOUT";
        }
        if (this[_needsPaint]) {
          header = header + " NEEDS-PAINT";
        }
        if (this[_needsCompositingBitsUpdate]) {
          header = header + " NEEDS-COMPOSITING-BITS-UPDATE";
        }
        if (!this.attached) {
          header = header + " DETACHED";
        }
      }
      return header;
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[9] || CT.C9;
      return this.toStringShort();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : "";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[10] || CT.C10;
      let debugPreviousActiveLayout = null;
      if (!dart.fn(() => {
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = null;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 3369, 12, "() {\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = null;\n      return true;\n    }()");
      let result = super.toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      if (!dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 3379, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      return true;\n    }()");
      return result;
    }
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[10] || CT.C10;
      let debugPreviousActiveLayout = null;
      if (!dart.fn(() => {
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = null;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 3397, 12, "() {\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = null;\n      return true;\n    }()");
      let result = super.toStringShallow({joiner: joiner, minLevel: minLevel});
      if (!dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 3403, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      return true;\n    }()");
      return result;
    }
    debugFillProperties(properties) {
      let t24;
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("needsCompositing", {value: this[_needsCompositing], ifTrue: "needs compositing"}));
      properties.add(new (T$.DiagnosticsPropertyOfObjectN()).new("creator", this.debugCreator, {defaultValue: null, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (T$.DiagnosticsPropertyOfParentData()).new("parentData", this.parentData, {tooltip: dart.test((t24 = this[_debugCanParentUseSize], t24 == null ? false : t24)) ? "can use size" : null, missingIfNull: true}));
      properties.add(new (T$.DiagnosticsPropertyOfConstraints()).new("constraints", this[_constraints], {missingIfNull: true}));
      properties.add(new (T$.DiagnosticsPropertyOfContainerLayer()).new("layer", this[_layerHandle].layer, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfSemanticsNode()).new("semantics node", this[_semantics], {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("isBlockingSemanticsOfPreviouslyPaintedNodes", {value: this[_semanticsConfiguration].isBlockingSemanticsOfPreviouslyPaintedNodes, ifTrue: "blocks semantics of earlier render objects below the common boundary"}));
      properties.add(new diagnostics.FlagProperty.new("isSemanticBoundary", {value: this[_semanticsConfiguration].isSemanticBoundary, ifTrue: "semantic boundary"}));
    }
    debugDescribeChildren() {
      return T$.JSArrayOfDiagnosticsNode().of([]);
    }
    showOnScreen(opts) {
      let t24;
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[11] || CT.C11;
      let curve = opts && 'curve' in opts ? opts.curve : C[12] || CT.C12;
      if (object$.RenderObject.is(this.parent)) {
        let renderParent = object$.RenderObject.as(dart.nullCheck(this.parent));
        renderParent.showOnScreen({descendant: (t24 = descendant, t24 == null ? this : t24), rect: rect, duration: duration, curve: curve});
      }
    }
    describeForError(name, opts) {
      let style = opts && 'style' in opts ? opts.style : C[13] || CT.C13;
      return this.toDiagnosticsNode({name: name, style: style});
    }
  };
  (object$.RenderObject.new = function() {
    this[_debugDisposed$] = false;
    this[parentData] = null;
    this[debugCreator$] = null;
    this[_debugDoingThisResize] = false;
    this[_debugDoingThisLayout] = false;
    this[_debugCanParentUseSize] = null;
    this[_debugMutationsLocked$] = false;
    this[_needsLayout] = true;
    this[_relayoutBoundary] = null;
    this[_doingThisLayoutWithCallback] = false;
    this[_constraints] = null;
    this[_debugDoingThisPaint] = false;
    this[__RenderObject__wasRepaintBoundary] = null;
    this[_layerHandle] = new (T$.LayerHandleOfContainerLayer()).new();
    this[_needsCompositingBitsUpdate] = false;
    this[__RenderObject__needsCompositing] = null;
    this[_needsPaint] = true;
    this[_needsCompositedLayerUpdate] = false;
    this[_cachedSemanticsConfiguration] = null;
    this[_needsSemanticsUpdate] = true;
    this[_semantics] = null;
    object$.RenderObject.__proto__.new.call(this);
    this[_needsCompositing] = this.isRepaintBoundary || this.alwaysNeedsCompositing;
    this[_wasRepaintBoundary] = this.isRepaintBoundary;
  }).prototype = object$.RenderObject.prototype;
  dart.addTypeTests(object$.RenderObject);
  dart.addTypeCaches(object$.RenderObject);
  object$.RenderObject[dart.implements] = () => [hit_test.HitTestTarget];
  dart.setMethodSignature(object$.RenderObject, () => ({
    __proto__: dart.getMethods(object$.RenderObject.__proto__),
    reassemble: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    setupParentData: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    visitChildren: dart.fnType(dart.void, [dart.fnType(dart.void, [object$.RenderObject])]),
    [_debugReportException]: dart.fnType(dart.void, [core.String, core.Object, core.StackTrace]),
    [_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]: dart.fnType(core.bool, []),
    markNeedsLayout: dart.fnType(dart.void, []),
    markParentNeedsLayout: dart.fnType(dart.void, []),
    markNeedsLayoutForSizedByParentChange: dart.fnType(dart.void, []),
    [_cleanRelayoutBoundary]: dart.fnType(dart.void, []),
    [_propagateRelayoutBoundary]: dart.fnType(dart.void, []),
    scheduleInitialLayout: dart.fnType(dart.void, []),
    [_layoutWithoutResize]: dart.fnType(dart.void, []),
    layout: dart.fnType(dart.void, [object$.Constraints], {parentUsesSize: core.bool}, {}),
    debugResetSize: dart.fnType(dart.void, []),
    invokeLayoutCallback: dart.gFnType(T => [dart.void, [dart.fnType(dart.void, [T])]], T => [object$.Constraints]),
    debugRegisterRepaintBoundaryPaint: dart.fnType(dart.void, [], {includedChild: core.bool, includedParent: core.bool}, {}),
    updateCompositedLayer: dart.fnType(layer$.OffsetLayer, [], {oldLayer: dart.nullable(core.Object)}, {}),
    markNeedsCompositingBitsUpdate: dart.fnType(dart.void, []),
    [_updateCompositingBits]: dart.fnType(dart.void, []),
    markNeedsPaint: dart.fnType(dart.void, []),
    markNeedsCompositedLayerUpdate: dart.fnType(dart.void, []),
    [_skippedPaintingOnLayer]: dart.fnType(dart.void, []),
    scheduleInitialPaint: dart.fnType(dart.void, [layer$.ContainerLayer]),
    replaceRootLayer: dart.fnType(dart.void, [layer$.OffsetLayer]),
    [_paintWithContext]: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    debugPaint: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    paint: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    applyPaintTransform: dart.fnType(dart.void, [dart.nullable(core.Object), vector_math_64.Matrix4]),
    paintsChild: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    getTransformTo: dart.fnType(vector_math_64.Matrix4, [dart.nullable(object$.RenderObject)]),
    describeApproximatePaintClip: dart.fnType(dart.nullable(ui.Rect), [dart.nullable(core.Object)]),
    describeSemanticsClip: dart.fnType(dart.nullable(ui.Rect), [dart.nullable(core.Object)]),
    scheduleInitialSemantics: dart.fnType(dart.void, []),
    describeSemanticsConfiguration: dart.fnType(dart.void, [semantics.SemanticsConfiguration]),
    sendSemanticsEvent: dart.fnType(dart.void, [semantics_event.SemanticsEvent]),
    clearSemantics: dart.fnType(dart.void, []),
    markNeedsSemanticsUpdate: dart.fnType(dart.void, []),
    [_updateSemantics]: dart.fnType(dart.void, []),
    [_getSemanticsForParent]: dart.fnType(object$._SemanticsFragment, [], {}, {mergeIntoParent: core.bool}),
    visitChildrenForSemantics: dart.fnType(dart.void, [dart.fnType(dart.void, [object$.RenderObject])]),
    assembleSemanticsNode: dart.fnType(dart.void, [semantics.SemanticsNode, semantics.SemanticsConfiguration, core.Iterable$(semantics.SemanticsNode)]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent, dart.nullable(core.Object)]),
    showOnScreen: dart.fnType(dart.void, [], {curve: curves.Curve, descendant: dart.nullable(object$.RenderObject), duration: core.Duration, rect: dart.nullable(ui.Rect)}, {}),
    describeForError: dart.fnType(diagnostics.DiagnosticsNode, [core.String], {style: diagnostics.DiagnosticsTreeStyle}, {})
  }));
  dart.setStaticMethodSignature(object$.RenderObject, () => ['_cleanChildRelayoutBoundary', '_propagateRelayoutBoundaryToChild']);
  dart.setGetterSignature(object$.RenderObject, () => ({
    __proto__: dart.getGetters(object$.RenderObject.__proto__),
    debugDisposed: dart.nullable(core.bool),
    debugDoingThisResize: core.bool,
    debugDoingThisLayout: core.bool,
    debugCanParentUseSize: core.bool,
    [_debugCanPerformMutations]: core.bool,
    owner: dart.nullable(object$.PipelineOwner),
    debugNeedsLayout: core.bool,
    debugDoingThisLayoutWithCallback: core.bool,
    constraints: object$.Constraints,
    sizedByParent: core.bool,
    debugDoingThisPaint: core.bool,
    isRepaintBoundary: core.bool,
    alwaysNeedsCompositing: core.bool,
    [_wasRepaintBoundary]: core.bool,
    layer: dart.nullable(layer$.ContainerLayer),
    debugLayer: dart.nullable(layer$.ContainerLayer),
    [_needsCompositing]: core.bool,
    needsCompositing: core.bool,
    debugNeedsPaint: core.bool,
    debugNeedsCompositedLayerUpdate: core.bool,
    [_semanticsConfiguration]: semantics.SemanticsConfiguration,
    debugSemantics: dart.nullable(semantics.SemanticsNode)
  }));
  dart.setSetterSignature(object$.RenderObject, () => ({
    __proto__: dart.getSetters(object$.RenderObject.__proto__),
    [_wasRepaintBoundary]: core.bool,
    layer: dart.nullable(layer$.ContainerLayer),
    [_needsCompositing]: core.bool
  }));
  dart.setStaticGetterSignature(object$.RenderObject, () => ['debugActiveLayout', 'debugActivePaint']);
  dart.setLibraryUri(object$.RenderObject, I[2]);
  dart.setFieldSignature(object$.RenderObject, () => ({
    __proto__: dart.getFields(object$.RenderObject.__proto__),
    [_debugDisposed$]: dart.fieldType(core.bool),
    parentData: dart.fieldType(dart.nullable(object$.ParentData)),
    debugCreator: dart.fieldType(dart.nullable(core.Object)),
    [_debugDoingThisResize]: dart.fieldType(core.bool),
    [_debugDoingThisLayout]: dart.fieldType(core.bool),
    [_debugCanParentUseSize]: dart.fieldType(dart.nullable(core.bool)),
    [_debugMutationsLocked$]: dart.fieldType(core.bool),
    [_needsLayout]: dart.fieldType(core.bool),
    [_relayoutBoundary]: dart.fieldType(dart.nullable(object$.RenderObject)),
    [_doingThisLayoutWithCallback]: dart.fieldType(core.bool),
    [_constraints]: dart.fieldType(dart.nullable(object$.Constraints)),
    [_debugDoingThisPaint]: dart.fieldType(core.bool),
    [__RenderObject__wasRepaintBoundary]: dart.fieldType(dart.nullable(core.bool)),
    [_layerHandle]: dart.finalFieldType(layer$.LayerHandle$(layer$.ContainerLayer)),
    [_needsCompositingBitsUpdate]: dart.fieldType(core.bool),
    [__RenderObject__needsCompositing]: dart.fieldType(dart.nullable(core.bool)),
    [_needsPaint]: dart.fieldType(core.bool),
    [_needsCompositedLayerUpdate]: dart.fieldType(core.bool),
    [_cachedSemanticsConfiguration]: dart.fieldType(dart.nullable(semantics.SemanticsConfiguration)),
    [_needsSemanticsUpdate]: dart.fieldType(core.bool),
    [_semantics]: dart.fieldType(dart.nullable(semantics.SemanticsNode))
  }));
  dart.setStaticFieldSignature(object$.RenderObject, () => ['_debugActiveLayout', 'debugCheckingIntrinsics', '_debugActivePaint']);
  dart.defineExtensionMethods(object$.RenderObject, ['toString']);
  dart.defineLazy(object$.RenderObject, {
    /*object$.RenderObject._debugActiveLayout*/get _debugActiveLayout() {
      return null;
    },
    set _debugActiveLayout(_) {},
    /*object$.RenderObject.debugCheckingIntrinsics*/get debugCheckingIntrinsics() {
      return false;
    },
    set debugCheckingIntrinsics(_) {},
    /*object$.RenderObject._debugActivePaint*/get _debugActivePaint() {
      return null;
    },
    set _debugActivePaint(_) {}
  }, false);
  var _child = dart.privateName(object$, "_child");
  const _is_RenderObjectWithChildMixin_default = Symbol('_is_RenderObjectWithChildMixin_default');
  object$.RenderObjectWithChildMixin$ = dart.generic(ChildType => {
    var __t$ChildTypeN = () => (__t$ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    class RenderObjectWithChildMixin extends object$.RenderObject {}
    RenderObjectWithChildMixin[dart.mixinOn] = RenderObject => class RenderObjectWithChildMixin extends RenderObject {
      debugValidateChild(child) {
        if (!dart.fn(() => {
          if (!ChildType.is(child)) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " expected a child of type " + dart.str(dart.wrapType(ChildType)) + " but received a " + "child of type " + dart.str(child[$runtimeType]) + "."), new assertions.ErrorDescription.new("RenderObjects expect specific types of children because they " + "coordinate with their children during layout and paint. For " + "example, a RenderSliver cannot be the child of a RenderBox because " + "a RenderSliver does not understand the RenderBox layout protocol."), new assertions.ErrorSpacer.new(), new (T$.DiagnosticsPropertyOfObjectN()).new("The " + dart.str(this[$runtimeType]) + " that expected a " + dart.str(dart.wrapType(ChildType)) + " child was created by", this.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorSpacer.new(), new (T$.DiagnosticsPropertyOfObjectN()).new("The " + dart.str(child[$runtimeType]) + " that did not match the expected child type " + "was created by", child.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 3499, 12, "() {\n      if (child is! ChildType) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'A $runtimeType expected a child of type $ChildType but received a '\n            'child of type ${child.runtimeType}.',\n          ),\n          ErrorDescription(\n            'RenderObjects expect specific types of children because they '\n            'coordinate with their children during layout and paint. For '\n            'example, a RenderSliver cannot be the child of a RenderBox because '\n            'a RenderSliver does not understand the RenderBox layout protocol.',\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The $runtimeType that expected a $ChildType child was created by',\n            debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The ${child.runtimeType} that did not match the expected child type '\n            'was created by',\n            child.debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
        return true;
      }
      get child() {
        return this[_child];
      }
      set child(value) {
        __t$ChildTypeN().as(value);
        if (this[_child] != null) {
          this.dropChild(dart.nullCheck(this[_child]));
        }
        this[_child] = value;
        if (this[_child] != null) {
          this.adoptChild(dart.nullCheck(this[_child]));
        }
      }
      attach(owner) {
        object$.PipelineOwner.as(owner);
        super.attach(owner);
        if (this[_child] != null) {
          dart.nullCheck(this[_child]).attach(owner);
        }
      }
      detach() {
        super.detach();
        if (this[_child] != null) {
          dart.nullCheck(this[_child]).detach();
        }
      }
      redepthChildren() {
        if (this[_child] != null) {
          this.redepthChild(dart.nullCheck(this[_child]));
        }
      }
      visitChildren(visitor) {
        if (this[_child] != null) {
          visitor(dart.nullCheck(this[_child]));
        }
      }
      debugDescribeChildren() {
        return this.child != null ? T$.JSArrayOfDiagnosticsNode().of([dart.nullCheck(this.child).toDiagnosticsNode({name: "child"})]) : T$.JSArrayOfDiagnosticsNode().of([]);
      }
    };
    (RenderObjectWithChildMixin[dart.mixinNew] = function() {
      this[_child] = null;
    }).prototype = RenderObjectWithChildMixin.prototype;
    dart.addTypeTests(RenderObjectWithChildMixin);
    RenderObjectWithChildMixin.prototype[_is_RenderObjectWithChildMixin_default] = true;
    dart.addTypeCaches(RenderObjectWithChildMixin);
    RenderObjectWithChildMixin[dart.implements] = () => [object$.RenderObject];
    dart.setMethodSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getMethods(RenderObjectWithChildMixin.__proto__),
      debugValidateChild: dart.fnType(core.bool, [object$.RenderObject])
    }));
    dart.setGetterSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getGetters(RenderObjectWithChildMixin.__proto__),
      child: dart.nullable(ChildType)
    }));
    dart.setSetterSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getSetters(RenderObjectWithChildMixin.__proto__),
      child: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(RenderObjectWithChildMixin, I[2]);
    dart.setFieldSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getFields(RenderObjectWithChildMixin.__proto__),
      [_child]: dart.fieldType(dart.nullable(ChildType))
    }));
    return RenderObjectWithChildMixin;
  });
  object$.RenderObjectWithChildMixin = object$.RenderObjectWithChildMixin$();
  dart.addTypeTests(object$.RenderObjectWithChildMixin, _is_RenderObjectWithChildMixin_default);
  var previousSibling = dart.privateName(object$, "ContainerParentDataMixin.previousSibling");
  var nextSibling = dart.privateName(object$, "ContainerParentDataMixin.nextSibling");
  const _is_ContainerParentDataMixin_default = Symbol('_is_ContainerParentDataMixin_default');
  object$.ContainerParentDataMixin$ = dart.generic(ChildType => {
    var __t$ChildTypeN = () => (__t$ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    class ContainerParentDataMixin extends object$.ParentData {}
    ContainerParentDataMixin[dart.mixinOn] = ParentData => class ContainerParentDataMixin extends ParentData {
      get previousSibling() {
        return this[previousSibling];
      }
      set previousSibling(value) {
        this[previousSibling] = __t$ChildTypeN().as(value);
      }
      get nextSibling() {
        return this[nextSibling];
      }
      set nextSibling(value) {
        this[nextSibling] = __t$ChildTypeN().as(value);
      }
      detach() {
        if (!(this.previousSibling == null)) dart.assertFailed("Pointers to siblings must be nulled before detaching ParentData.", I[3], 3596, 12, "previousSibling == null");
        if (!(this.nextSibling == null)) dart.assertFailed("Pointers to siblings must be nulled before detaching ParentData.", I[3], 3597, 12, "nextSibling == null");
        super.detach();
      }
    };
    (ContainerParentDataMixin[dart.mixinNew] = function() {
      this[previousSibling] = null;
      this[nextSibling] = null;
    }).prototype = ContainerParentDataMixin.prototype;
    dart.addTypeTests(ContainerParentDataMixin);
    ContainerParentDataMixin.prototype[_is_ContainerParentDataMixin_default] = true;
    dart.addTypeCaches(ContainerParentDataMixin);
    ContainerParentDataMixin[dart.implements] = () => [object$.ParentData];
    dart.setLibraryUri(ContainerParentDataMixin, I[2]);
    dart.setFieldSignature(ContainerParentDataMixin, () => ({
      __proto__: dart.getFields(ContainerParentDataMixin.__proto__),
      previousSibling: dart.fieldType(dart.nullable(ChildType)),
      nextSibling: dart.fieldType(dart.nullable(ChildType))
    }));
    return ContainerParentDataMixin;
  });
  object$.ContainerParentDataMixin = object$.ContainerParentDataMixin$();
  dart.addTypeTests(object$.ContainerParentDataMixin, _is_ContainerParentDataMixin_default);
  var _childCount = dart.privateName(object$, "_childCount");
  var _firstChild$ = dart.privateName(object$, "_firstChild");
  var _lastChild$ = dart.privateName(object$, "_lastChild");
  var _debugUltimatePreviousSiblingOf$ = dart.privateName(object$, "_debugUltimatePreviousSiblingOf");
  var _debugUltimateNextSiblingOf$ = dart.privateName(object$, "_debugUltimateNextSiblingOf");
  var _insertIntoChildList = dart.privateName(object$, "_insertIntoChildList");
  var _removeFromChildList = dart.privateName(object$, "_removeFromChildList");
  const _is_ContainerRenderObjectMixin_default = Symbol('_is_ContainerRenderObjectMixin_default');
  object$.ContainerRenderObjectMixin$ = dart.generic((ChildType, ParentDataType) => {
    var __t$ChildTypeN = () => (__t$ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    var __t$ListOfChildType = () => (__t$ListOfChildType = dart.constFn(core.List$(ChildType)))();
    var __t$ListNOfChildType = () => (__t$ListNOfChildType = dart.constFn(dart.nullable(__t$ListOfChildType())))();
    class ContainerRenderObjectMixin extends object$.RenderObject {}
    ContainerRenderObjectMixin[dart.mixinOn] = RenderObject => class ContainerRenderObjectMixin extends RenderObject {
      [_debugUltimatePreviousSiblingOf$](child, opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        while (childParentData.previousSibling != null) {
          if (!!dart.equals(childParentData.previousSibling, child)) dart.assertFailed(null, I[3], 3629, 14, "childParentData.previousSibling != child");
          child = dart.nullCheck(childParentData.previousSibling);
          childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        }
        return child[$_equals](equals);
      }
      [_debugUltimateNextSiblingOf$](child, opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        while (childParentData.nextSibling != null) {
          if (!!dart.equals(childParentData.nextSibling, child)) dart.assertFailed(null, I[3], 3638, 14, "childParentData.nextSibling != child");
          child = dart.nullCheck(childParentData.nextSibling);
          childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        }
        return child[$_equals](equals);
      }
      get childCount() {
        return this[_childCount];
      }
      debugValidateChild(child) {
        if (!dart.fn(() => {
          if (!ChildType.is(child)) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " expected a child of type " + dart.str(dart.wrapType(ChildType)) + " but received a " + "child of type " + dart.str(child[$runtimeType]) + "."), new assertions.ErrorDescription.new("RenderObjects expect specific types of children because they " + "coordinate with their children during layout and paint. For " + "example, a RenderSliver cannot be the child of a RenderBox because " + "a RenderSliver does not understand the RenderBox layout protocol."), new assertions.ErrorSpacer.new(), new (T$.DiagnosticsPropertyOfObjectN()).new("The " + dart.str(this[$runtimeType]) + " that expected a " + dart.str(dart.wrapType(ChildType)) + " child was created by", this.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorSpacer.new(), new (T$.DiagnosticsPropertyOfObjectN()).new("The " + dart.str(child[$runtimeType]) + " that did not match the expected child type " + "was created by", child.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 3656, 12, "() {\n      if (child is! ChildType) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'A $runtimeType expected a child of type $ChildType but received a '\n            'child of type ${child.runtimeType}.',\n          ),\n          ErrorDescription(\n            'RenderObjects expect specific types of children because they '\n            'coordinate with their children during layout and paint. For '\n            'example, a RenderSliver cannot be the child of a RenderBox because '\n            'a RenderSliver does not understand the RenderBox layout protocol.',\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The $runtimeType that expected a $ChildType child was created by',\n            debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The ${child.runtimeType} that did not match the expected child type '\n            'was created by',\n            child.debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
        return true;
      }
      [_insertIntoChildList](child, opts) {
        let after = opts && 'after' in opts ? opts.after : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (!(childParentData.nextSibling == null)) dart.assertFailed(null, I[3], 3693, 12, "childParentData.nextSibling == null");
        if (!(childParentData.previousSibling == null)) dart.assertFailed(null, I[3], 3694, 12, "childParentData.previousSibling == null");
        this[_childCount] = this[_childCount] + 1;
        if (!(this[_childCount] > 0)) dart.assertFailed(null, I[3], 3696, 12, "_childCount > 0");
        if (after == null) {
          childParentData.nextSibling = this[_firstChild$];
          if (this[_firstChild$] != null) {
            let firstChildParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(this[_firstChild$]).parentData));
            firstChildParentData.previousSibling = child;
          }
          this[_firstChild$] = child;
          this[_lastChild$] == null ? this[_lastChild$] = child : null;
        } else {
          if (!(this[_firstChild$] != null)) dart.assertFailed(null, I[3], 3707, 14, "_firstChild != null");
          if (!(this[_lastChild$] != null)) dart.assertFailed(null, I[3], 3708, 14, "_lastChild != null");
          if (!this[_debugUltimatePreviousSiblingOf$](after, {equals: this[_firstChild$]})) dart.assertFailed(null, I[3], 3709, 14, "_debugUltimatePreviousSiblingOf(after, equals: _firstChild)");
          if (!this[_debugUltimateNextSiblingOf$](after, {equals: this[_lastChild$]})) dart.assertFailed(null, I[3], 3710, 14, "_debugUltimateNextSiblingOf(after, equals: _lastChild)");
          let afterParentData = ParentDataType.as(dart.nullCheck(after.parentData));
          if (afterParentData.nextSibling == null) {
            if (!dart.equals(after, this[_lastChild$])) dart.assertFailed(null, I[3], 3714, 16, "after == _lastChild");
            childParentData.previousSibling = after;
            afterParentData.nextSibling = child;
            this[_lastChild$] = child;
          } else {
            childParentData.nextSibling = afterParentData.nextSibling;
            childParentData.previousSibling = after;
            let childPreviousSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.previousSibling).parentData));
            let childNextSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.nextSibling).parentData));
            childPreviousSiblingParentData.nextSibling = child;
            childNextSiblingParentData.previousSibling = child;
            if (!dart.equals(afterParentData.nextSibling, child)) dart.assertFailed(null, I[3], 3728, 16, "afterParentData.nextSibling == child");
          }
        }
      }
      insert(child, opts) {
        ChildType.as(child);
        let after = opts && 'after' in opts ? opts.after : null;
        __t$ChildTypeN().as(after);
        if (!!child[$_equals](this)) dart.assertFailed("A RenderObject cannot be inserted into itself.", I[3], 3738, 12, "child != this");
        if (!!dart.equals(after, this)) dart.assertFailed("A RenderObject cannot simultaneously be both the parent and the sibling of another RenderObject.", I[3], 3739, 12, "after != this");
        if (!!child[$_equals](after)) dart.assertFailed("A RenderObject cannot be inserted after itself.", I[3], 3740, 12, "child != after");
        if (!!child[$_equals](this[_firstChild$])) dart.assertFailed(null, I[3], 3741, 12, "child != _firstChild");
        if (!!child[$_equals](this[_lastChild$])) dart.assertFailed(null, I[3], 3742, 12, "child != _lastChild");
        this.adoptChild(child);
        this[_insertIntoChildList](child, {after: after});
      }
      add(child) {
        ChildType.as(child);
        this.insert(child, {after: this[_lastChild$]});
      }
      addAll(children) {
        let t24;
        __t$ListNOfChildType().as(children);
        t24 = children;
        t24 == null ? null : t24[$forEach](dart.bind(this, 'add'));
      }
      [_removeFromChildList](child) {
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (!this[_debugUltimatePreviousSiblingOf$](child, {equals: this[_firstChild$]})) dart.assertFailed(null, I[3], 3759, 12, "_debugUltimatePreviousSiblingOf(child, equals: _firstChild)");
        if (!this[_debugUltimateNextSiblingOf$](child, {equals: this[_lastChild$]})) dart.assertFailed(null, I[3], 3760, 12, "_debugUltimateNextSiblingOf(child, equals: _lastChild)");
        if (!(this[_childCount] >= 0)) dart.assertFailed(null, I[3], 3761, 12, "_childCount >= 0");
        if (childParentData.previousSibling == null) {
          if (!dart.equals(this[_firstChild$], child)) dart.assertFailed(null, I[3], 3763, 14, "_firstChild == child");
          this[_firstChild$] = childParentData.nextSibling;
        } else {
          let childPreviousSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.previousSibling).parentData));
          childPreviousSiblingParentData.nextSibling = childParentData.nextSibling;
        }
        if (childParentData.nextSibling == null) {
          if (!dart.equals(this[_lastChild$], child)) dart.assertFailed(null, I[3], 3770, 14, "_lastChild == child");
          this[_lastChild$] = childParentData.previousSibling;
        } else {
          let childNextSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.nextSibling).parentData));
          childNextSiblingParentData.previousSibling = childParentData.previousSibling;
        }
        childParentData.previousSibling = null;
        childParentData.nextSibling = null;
        this[_childCount] = this[_childCount] - 1;
      }
      remove(child) {
        ChildType.as(child);
        this[_removeFromChildList](child);
        this.dropChild(child);
      }
      removeAll() {
        let child = this[_firstChild$];
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let next = childParentData.nextSibling;
          childParentData.previousSibling = null;
          childParentData.nextSibling = null;
          this.dropChild(child);
          child = next;
        }
        this[_firstChild$] = null;
        this[_lastChild$] = null;
        this[_childCount] = 0;
      }
      move(child, opts) {
        ChildType.as(child);
        let after = opts && 'after' in opts ? opts.after : null;
        __t$ChildTypeN().as(after);
        if (!!child[$_equals](this)) dart.assertFailed(null, I[3], 3813, 12, "child != this");
        if (!!dart.equals(after, this)) dart.assertFailed(null, I[3], 3814, 12, "after != this");
        if (!!child[$_equals](after)) dart.assertFailed(null, I[3], 3815, 12, "child != after");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 3816, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (dart.equals(childParentData.previousSibling, after)) {
          return;
        }
        this[_removeFromChildList](child);
        this[_insertIntoChildList](child, {after: after});
        this.markNeedsLayout();
      }
      attach(owner) {
        object$.PipelineOwner.as(owner);
        super.attach(owner);
        let child = this[_firstChild$];
        while (child != null) {
          child.attach(owner);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      detach() {
        super.detach();
        let child = this[_firstChild$];
        while (child != null) {
          child.detach();
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      redepthChildren() {
        let child = this[_firstChild$];
        while (child != null) {
          this.redepthChild(child);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      visitChildren(visitor) {
        let child = this[_firstChild$];
        while (child != null) {
          visitor(child);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      get firstChild() {
        return this[_firstChild$];
      }
      get lastChild() {
        return this[_lastChild$];
      }
      childBefore(child) {
        ChildType.as(child);
        if (!(child !== null)) dart.assertFailed(null, I[3], 3876, 12, "child != null");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 3877, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        return childParentData.previousSibling;
      }
      childAfter(child) {
        ChildType.as(child);
        if (!(child !== null)) dart.assertFailed(null, I[3], 3884, 12, "child != null");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 3885, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        return childParentData.nextSibling;
      }
      debugDescribeChildren() {
        let children = T$.JSArrayOfDiagnosticsNode().of([]);
        if (this.firstChild != null) {
          let child = dart.nullCheck(this.firstChild);
          let count = 1;
          while (true) {
            children[$add](child.toDiagnosticsNode({name: "child " + dart.str(count)}));
            if (child[$_equals](this.lastChild)) {
              break;
            }
            count = count + 1;
            let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
            child = dart.nullCheck(childParentData.nextSibling);
          }
        }
        return children;
      }
    };
    (ContainerRenderObjectMixin[dart.mixinNew] = function() {
      this[_childCount] = 0;
      this[_firstChild$] = null;
      this[_lastChild$] = null;
    }).prototype = ContainerRenderObjectMixin.prototype;
    dart.addTypeTests(ContainerRenderObjectMixin);
    ContainerRenderObjectMixin.prototype[_is_ContainerRenderObjectMixin_default] = true;
    dart.addTypeCaches(ContainerRenderObjectMixin);
    ContainerRenderObjectMixin[dart.implements] = () => [object$.RenderObject];
    dart.setMethodSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getMethods(ContainerRenderObjectMixin.__proto__),
      [_debugUltimatePreviousSiblingOf$]: dart.fnType(core.bool, [ChildType], {equals: dart.nullable(ChildType)}, {}),
      [_debugUltimateNextSiblingOf$]: dart.fnType(core.bool, [ChildType], {equals: dart.nullable(ChildType)}, {}),
      debugValidateChild: dart.fnType(core.bool, [object$.RenderObject]),
      [_insertIntoChildList]: dart.fnType(dart.void, [ChildType], {after: dart.nullable(ChildType)}, {}),
      insert: dart.fnType(dart.void, [dart.nullable(core.Object)], {after: dart.nullable(core.Object)}, {}),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [_removeFromChildList]: dart.fnType(dart.void, [ChildType]),
      remove: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      removeAll: dart.fnType(dart.void, []),
      move: dart.fnType(dart.void, [dart.nullable(core.Object)], {after: dart.nullable(core.Object)}, {}),
      childBefore: dart.fnType(dart.nullable(ChildType), [dart.nullable(core.Object)]),
      childAfter: dart.fnType(dart.nullable(ChildType), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getGetters(ContainerRenderObjectMixin.__proto__),
      childCount: core.int,
      firstChild: dart.nullable(ChildType),
      lastChild: dart.nullable(ChildType)
    }));
    dart.setLibraryUri(ContainerRenderObjectMixin, I[2]);
    dart.setFieldSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getFields(ContainerRenderObjectMixin.__proto__),
      [_childCount]: dart.fieldType(core.int),
      [_firstChild$]: dart.fieldType(dart.nullable(ChildType)),
      [_lastChild$]: dart.fieldType(dart.nullable(ChildType))
    }));
    return ContainerRenderObjectMixin;
  });
  object$.ContainerRenderObjectMixin = object$.ContainerRenderObjectMixin$();
  dart.addTypeTests(object$.ContainerRenderObjectMixin, _is_ContainerRenderObjectMixin_default);
  object$.RelayoutWhenSystemFontsChangeMixin = class RelayoutWhenSystemFontsChangeMixin extends object$.RenderObject {};
  object$.RelayoutWhenSystemFontsChangeMixin[dart.mixinOn] = RenderObject => class RelayoutWhenSystemFontsChangeMixin extends RenderObject {
    systemFontsDidChange() {
      this.markNeedsLayout();
    }
    attach(owner) {
      object$.PipelineOwner.as(owner);
      super.attach(owner);
      binding$.PaintingBinding.instance.systemFonts.addListener(dart.bind(this, 'systemFontsDidChange'));
    }
    detach() {
      binding$.PaintingBinding.instance.systemFonts.removeListener(dart.bind(this, 'systemFontsDidChange'));
      super.detach();
    }
  };
  dart.addTypeTests(object$.RelayoutWhenSystemFontsChangeMixin);
  dart.addTypeCaches(object$.RelayoutWhenSystemFontsChangeMixin);
  object$.RelayoutWhenSystemFontsChangeMixin[dart.implements] = () => [object$.RenderObject];
  dart.setMethodSignature(object$.RelayoutWhenSystemFontsChangeMixin, () => ({
    __proto__: dart.getMethods(object$.RelayoutWhenSystemFontsChangeMixin.__proto__),
    systemFontsDidChange: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.RelayoutWhenSystemFontsChangeMixin, I[2]);
  object$._SemanticsFragment = class _SemanticsFragment extends core.Object {};
  (object$._SemanticsFragment.new = function(opts) {
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this.dropsSemanticsOfPreviousSiblings = dropsSemanticsOfPreviousSiblings;
    if (!(dropsSemanticsOfPreviousSiblings !== null)) dart.assertFailed(null, I[3], 3954, 15, "dropsSemanticsOfPreviousSiblings != null");
    ;
  }).prototype = object$._SemanticsFragment.prototype;
  dart.addTypeTests(object$._SemanticsFragment);
  dart.addTypeCaches(object$._SemanticsFragment);
  dart.setLibraryUri(object$._SemanticsFragment, I[2]);
  dart.setFieldSignature(object$._SemanticsFragment, () => ({
    __proto__: dart.getFields(object$._SemanticsFragment.__proto__),
    dropsSemanticsOfPreviousSiblings: dart.finalFieldType(core.bool)
  }));
  var interestingFragments = dart.privateName(object$, "_ContainerSemanticsFragment.interestingFragments");
  object$._ContainerSemanticsFragment = class _ContainerSemanticsFragment extends object$._SemanticsFragment {
    get interestingFragments() {
      return this[interestingFragments];
    }
    set interestingFragments(value) {
      super.interestingFragments = value;
    }
    static ['_#new#tearOff'](opts) {
      let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
      return new object$._ContainerSemanticsFragment.new({dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    }
    addAll(fragments) {
      this.interestingFragments[$addAll](fragments);
    }
  };
  (object$._ContainerSemanticsFragment.new = function(opts) {
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this[interestingFragments] = T$.JSArrayOf_InterestingSemanticsFragment().of([]);
    object$._ContainerSemanticsFragment.__proto__.new.call(this, {dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._ContainerSemanticsFragment.prototype;
  dart.addTypeTests(object$._ContainerSemanticsFragment);
  dart.addTypeCaches(object$._ContainerSemanticsFragment);
  dart.setMethodSignature(object$._ContainerSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._ContainerSemanticsFragment.__proto__),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)])
  }));
  dart.setLibraryUri(object$._ContainerSemanticsFragment, I[2]);
  dart.setFieldSignature(object$._ContainerSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._ContainerSemanticsFragment.__proto__),
    interestingFragments: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment))
  }));
  var _tagsForChildren = dart.privateName(object$, "_tagsForChildren");
  var _ancestorChain = dart.privateName(object$, "_ancestorChain");
  object$._InterestingSemanticsFragment = class _InterestingSemanticsFragment extends object$._SemanticsFragment {
    get owner() {
      return this[_ancestorChain][$first];
    }
    get hasConfigForParent() {
      return this.config != null;
    }
    get interestingFragments() {
      return T$.JSArrayOf_InterestingSemanticsFragment().of([this]);
    }
    addTags(tags) {
      if (tags == null || tags[$isEmpty]) {
        return;
      }
      this[_tagsForChildren] == null ? this[_tagsForChildren] = T$.LinkedHashSetOfSemanticsTag().new() : null;
      dart.nullCheck(this[_tagsForChildren]).addAll(tags);
    }
    addAncestor(ancestor) {
      this[_ancestorChain][$add](ancestor);
    }
  };
  (object$._InterestingSemanticsFragment.new = function(opts) {
    let owner = opts && 'owner' in opts ? opts.owner : null;
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this[_tagsForChildren] = null;
    if (!(owner !== null)) dart.assertFailed(null, I[3], 4001, 15, "owner != null");
    this[_ancestorChain] = T$.JSArrayOfRenderObject().of([owner]);
    object$._InterestingSemanticsFragment.__proto__.new.call(this, {dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._InterestingSemanticsFragment.prototype;
  dart.addTypeTests(object$._InterestingSemanticsFragment);
  dart.addTypeCaches(object$._InterestingSemanticsFragment);
  dart.setMethodSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._InterestingSemanticsFragment.__proto__),
    addTags: dart.fnType(dart.void, [dart.nullable(core.Iterable$(semantics.SemanticsTag))]),
    addAncestor: dart.fnType(dart.void, [object$.RenderObject])
  }));
  dart.setGetterSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._InterestingSemanticsFragment.__proto__),
    owner: object$.RenderObject,
    hasConfigForParent: core.bool,
    interestingFragments: core.List$(object$._InterestingSemanticsFragment)
  }));
  dart.setLibraryUri(object$._InterestingSemanticsFragment, I[2]);
  dart.setFieldSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._InterestingSemanticsFragment.__proto__),
    [_ancestorChain]: dart.finalFieldType(core.List$(object$.RenderObject)),
    [_tagsForChildren]: dart.fieldType(dart.nullable(core.Set$(semantics.SemanticsTag)))
  }));
  var _children = dart.privateName(object$, "_children");
  object$._RootSemanticsFragment = class _RootSemanticsFragment extends object$._InterestingSemanticsFragment {
    static ['_#new#tearOff'](opts) {
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
      return new object$._RootSemanticsFragment.new({owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    }
    compileChildren(opts) {
      let t24;
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let elevationAdjustment = opts && 'elevationAdjustment' in opts ? opts.elevationAdjustment : null;
      let result = opts && 'result' in opts ? opts.result : null;
      if (!(this[_tagsForChildren] == null || dart.nullCheck(this[_tagsForChildren])[$isEmpty])) dart.assertFailed(null, I[3], 4093, 12, "_tagsForChildren == null || _tagsForChildren!.isEmpty");
      if (!(parentSemanticsClipRect == null)) dart.assertFailed(null, I[3], 4094, 12, "parentSemanticsClipRect == null");
      if (!(parentPaintClipRect == null)) dart.assertFailed(null, I[3], 4095, 12, "parentPaintClipRect == null");
      if (!(this[_ancestorChain][$length] === 1)) dart.assertFailed(null, I[3], 4096, 12, "_ancestorChain.length == 1");
      if (!(elevationAdjustment === 0.0)) dart.assertFailed(null, I[3], 4097, 12, "elevationAdjustment == 0.0");
      t24 = this.owner;
      t24[_semantics] == null ? t24[_semantics] = new semantics.SemanticsNode.root({showOnScreen: dart.bind(this.owner, 'showOnScreen'), owner: dart.nullCheck(dart.nullCheck(this.owner.owner).semanticsOwner)}) : null;
      let node = dart.nullCheck(this.owner[_semantics]);
      if (!matrix_utils.MatrixUtils.matrixEquals(node.transform, vector_math_64.Matrix4.identity())) dart.assertFailed(null, I[3], 4104, 12, "MatrixUtils.matrixEquals(node.transform, Matrix4.identity())");
      if (!(node.parentSemanticsClipRect == null)) dart.assertFailed(null, I[3], 4105, 12, "node.parentSemanticsClipRect == null");
      if (!(node.parentPaintClipRect == null)) dart.assertFailed(null, I[3], 4106, 12, "node.parentPaintClipRect == null");
      node.rect = this.owner.semanticBounds;
      let children = T$.JSArrayOfSemanticsNode().of([]);
      for (let fragment of this[_children]) {
        if (!(fragment.config == null)) dart.assertFailed(null, I[3], 4112, 14, "fragment.config == null");
        fragment.compileChildren({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, elevationAdjustment: 0.0, result: children});
      }
      node.updateWith({config: null, childrenInInversePaintOrder: children});
      if (!(!node.isInvisible || children[$isEmpty])) dart.assertFailed(null, I[3], 4127, 12, "!node.isInvisible || children.isEmpty");
      result[$add](node);
    }
    get config() {
      return null;
    }
    markAsExplicit() {
    }
    addAll(fragments) {
      this[_children][$addAll](fragments);
    }
  };
  (object$._RootSemanticsFragment.new = function(opts) {
    let owner = opts && 'owner' in opts ? opts.owner : null;
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this[_children] = T$.JSArrayOf_InterestingSemanticsFragment().of([]);
    object$._RootSemanticsFragment.__proto__.new.call(this, {owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._RootSemanticsFragment.prototype;
  dart.addTypeTests(object$._RootSemanticsFragment);
  dart.addTypeCaches(object$._RootSemanticsFragment);
  dart.setMethodSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._RootSemanticsFragment.__proto__),
    compileChildren: dart.fnType(dart.void, [], {parentPaintClipRect: dart.nullable(ui.Rect), parentSemanticsClipRect: dart.nullable(ui.Rect)}, {elevationAdjustment: core.double, result: core.List$(semantics.SemanticsNode)}),
    markAsExplicit: dart.fnType(dart.void, []),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)])
  }));
  dart.setGetterSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._RootSemanticsFragment.__proto__),
    config: dart.nullable(semantics.SemanticsConfiguration)
  }));
  dart.setLibraryUri(object$._RootSemanticsFragment, I[2]);
  dart.setFieldSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._RootSemanticsFragment.__proto__),
    [_children]: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment))
  }));
  var _isConfigWritable = dart.privateName(object$, "_isConfigWritable");
  var _isExplicit = dart.privateName(object$, "_isExplicit");
  var _mergeIntoParent = dart.privateName(object$, "_mergeIntoParent");
  var _config = dart.privateName(object$, "_config");
  var _needsGeometryUpdate = dart.privateName(object$, "_needsGeometryUpdate");
  var _ensureConfigIsWritable = dart.privateName(object$, "_ensureConfigIsWritable");
  object$._SwitchableSemanticsFragment = class _SwitchableSemanticsFragment extends object$._InterestingSemanticsFragment {
    static ['_#new#tearOff'](opts) {
      let mergeIntoParent = opts && 'mergeIntoParent' in opts ? opts.mergeIntoParent : null;
      let config = opts && 'config' in opts ? opts.config : null;
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
      return new object$._SwitchableSemanticsFragment.new({mergeIntoParent: mergeIntoParent, config: config, owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    }
    compileChildren(opts) {
      let t24, t24$, t24$0, t24$1, t24$2, t24$3;
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let elevationAdjustment = opts && 'elevationAdjustment' in opts ? opts.elevationAdjustment : null;
      let result = opts && 'result' in opts ? opts.result : null;
      if (!this[_isExplicit]) {
        this.owner[_semantics] = null;
        for (let fragment of this[_children]) {
          if (!this[_ancestorChain][$first][$_equals](fragment[_ancestorChain][$last])) dart.assertFailed(null, I[3], 4186, 16, "_ancestorChain.first == fragment._ancestorChain.last");
          fragment[_ancestorChain][$addAll](this[_ancestorChain][$skip](1));
          fragment.compileChildren({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, elevationAdjustment: elevationAdjustment + this[_config].elevation, result: result});
        }
        return;
      }
      let geometry = this[_needsGeometryUpdate] ? new object$._SemanticsGeometry.new({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, ancestors: this[_ancestorChain]}) : null;
      if (!this[_mergeIntoParent] && dart.test((t24$ = (t24 = geometry, t24 == null ? null : t24.dropFromTree), t24$ == null ? false : t24$))) {
        return;
      }
      t24$0 = this.owner;
      t24$0[_semantics] == null ? t24$0[_semantics] = new semantics.SemanticsNode.new({showOnScreen: dart.bind(this.owner, 'showOnScreen')}) : null;
      let node = (t24$1 = dart.nullCheck(this.owner[_semantics]), (() => {
        t24$1.isMergedIntoParent = this[_mergeIntoParent];
        t24$1.tags = this[_tagsForChildren];
        return t24$1;
      })());
      node.elevationAdjustment = elevationAdjustment;
      if (elevationAdjustment !== 0.0) {
        this[_ensureConfigIsWritable]();
        t24$2 = this[_config];
        t24$2.elevation = t24$2.elevation + elevationAdjustment;
      }
      if (geometry != null) {
        if (!this[_needsGeometryUpdate]) dart.assertFailed(null, I[3], 4221, 14, "_needsGeometryUpdate");
        t24$3 = node;
        (() => {
          t24$3.rect = geometry.rect;
          t24$3.transform = geometry.transform;
          t24$3.parentSemanticsClipRect = geometry.semanticsClipRect;
          t24$3.parentPaintClipRect = geometry.paintClipRect;
          return t24$3;
        })();
        if (!this[_mergeIntoParent] && geometry.markAsHidden) {
          this[_ensureConfigIsWritable]();
          this[_config].isHidden = true;
        }
      }
      let children = T$.JSArrayOfSemanticsNode().of([]);
      for (let fragment of this[_children]) {
        fragment.compileChildren({parentSemanticsClipRect: node.parentSemanticsClipRect, parentPaintClipRect: node.parentPaintClipRect, elevationAdjustment: 0.0, result: children});
      }
      if (this[_config].isSemanticBoundary) {
        this.owner.assembleSemanticsNode(node, this[_config], children);
      } else {
        node.updateWith({config: this[_config], childrenInInversePaintOrder: children});
      }
      result[$add](node);
    }
    get config() {
      return this[_isExplicit] ? null : this[_config];
    }
    addAll(fragments) {
      for (let fragment of fragments) {
        this[_children][$add](fragment);
        if (fragment.config == null) {
          continue;
        }
        this[_ensureConfigIsWritable]();
        this[_config].absorb(dart.nullCheck(fragment.config));
      }
    }
    [_ensureConfigIsWritable]() {
      if (!this[_isConfigWritable]) {
        this[_config] = this[_config].copy();
        this[_isConfigWritable] = true;
      }
    }
    markAsExplicit() {
      this[_isExplicit] = true;
    }
    get [_needsGeometryUpdate]() {
      return this[_ancestorChain][$length] > 1;
    }
  };
  (object$._SwitchableSemanticsFragment.new = function(opts) {
    let mergeIntoParent = opts && 'mergeIntoParent' in opts ? opts.mergeIntoParent : null;
    let config = opts && 'config' in opts ? opts.config : null;
    let owner = opts && 'owner' in opts ? opts.owner : null;
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this[_isConfigWritable] = false;
    this[_children] = T$.JSArrayOf_InterestingSemanticsFragment().of([]);
    this[_isExplicit] = false;
    this[_mergeIntoParent] = mergeIntoParent;
    this[_config] = config;
    if (!(mergeIntoParent !== null)) dart.assertFailed(null, I[3], 4173, 15, "mergeIntoParent != null");
    if (!(config !== null)) dart.assertFailed(null, I[3], 4174, 15, "config != null");
    object$._SwitchableSemanticsFragment.__proto__.new.call(this, {owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._SwitchableSemanticsFragment.prototype;
  dart.addTypeTests(object$._SwitchableSemanticsFragment);
  dart.addTypeCaches(object$._SwitchableSemanticsFragment);
  dart.setMethodSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._SwitchableSemanticsFragment.__proto__),
    compileChildren: dart.fnType(dart.void, [], {parentPaintClipRect: dart.nullable(ui.Rect), parentSemanticsClipRect: dart.nullable(ui.Rect)}, {elevationAdjustment: core.double, result: core.List$(semantics.SemanticsNode)}),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)]),
    [_ensureConfigIsWritable]: dart.fnType(dart.void, []),
    markAsExplicit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._SwitchableSemanticsFragment.__proto__),
    config: dart.nullable(semantics.SemanticsConfiguration),
    [_needsGeometryUpdate]: core.bool
  }));
  dart.setLibraryUri(object$._SwitchableSemanticsFragment, I[2]);
  dart.setFieldSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._SwitchableSemanticsFragment.__proto__),
    [_mergeIntoParent]: dart.finalFieldType(core.bool),
    [_config]: dart.fieldType(semantics.SemanticsConfiguration),
    [_isConfigWritable]: dart.fieldType(core.bool),
    [_children]: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment)),
    [_isExplicit]: dart.fieldType(core.bool)
  }));
  var _paintClipRect = dart.privateName(object$, "_paintClipRect");
  var _semanticsClipRect = dart.privateName(object$, "_semanticsClipRect");
  var ___SemanticsGeometry__transform = dart.privateName(object$, "_#_SemanticsGeometry#_transform");
  var ___SemanticsGeometry__rect = dart.privateName(object$, "_#_SemanticsGeometry#_rect");
  var _markAsHidden = dart.privateName(object$, "_markAsHidden");
  var _computeValues = dart.privateName(object$, "_computeValues");
  var _transform$ = dart.privateName(object$, "_transform");
  var _rect = dart.privateName(object$, "_rect");
  object$._SemanticsGeometry = class _SemanticsGeometry extends core.Object {
    static ['_#new#tearOff'](opts) {
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let ancestors = opts && 'ancestors' in opts ? opts.ancestors : null;
      return new object$._SemanticsGeometry.new({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, ancestors: ancestors});
    }
    get [_transform$]() {
      let t24;
      t24 = this[___SemanticsGeometry__transform];
      return t24 == null ? dart.throw(new _internal.LateError.fieldNI("_transform")) : t24;
    }
    set [_transform$](library$32package$58flutter$47src$47rendering$47object$46dart$58$58_transform$35param) {
      this[___SemanticsGeometry__transform] = library$32package$58flutter$47src$47rendering$47object$46dart$58$58_transform$35param;
    }
    get [_rect]() {
      let t24;
      t24 = this[___SemanticsGeometry__rect];
      return t24 == null ? dart.throw(new _internal.LateError.fieldNI("_rect")) : t24;
    }
    set [_rect](library$32package$58flutter$47src$47rendering$47object$46dart$58$58_rect$35param) {
      this[___SemanticsGeometry__rect] = library$32package$58flutter$47src$47rendering$47object$46dart$58$58_rect$35param;
    }
    get transform() {
      return this[_transform$];
    }
    get semanticsClipRect() {
      return this[_semanticsClipRect];
    }
    get paintClipRect() {
      return this[_paintClipRect];
    }
    get rect() {
      return this[_rect];
    }
    [_computeValues](parentSemanticsClipRect, parentPaintClipRect, ancestors) {
      if (!(ancestors[$length] > 1)) dart.assertFailed(null, I[3], 4328, 12, "ancestors.length > 1");
      this[_transform$] = vector_math_64.Matrix4.identity();
      this[_semanticsClipRect] = parentSemanticsClipRect;
      this[_paintClipRect] = parentPaintClipRect;
      for (let index = ancestors[$length] - 1; index > 0; index = index - 1) {
        let parent = ancestors[$_get](index);
        let child = ancestors[$_get](index - 1);
        let parentSemanticsClipRect = parent.describeSemanticsClip(child);
        if (parentSemanticsClipRect != null) {
          this[_semanticsClipRect] = parentSemanticsClipRect;
          this[_paintClipRect] = object$._SemanticsGeometry._intersectRects(this[_paintClipRect], parent.describeApproximatePaintClip(child));
        } else {
          this[_semanticsClipRect] = object$._SemanticsGeometry._intersectRects(this[_semanticsClipRect], parent.describeApproximatePaintClip(child));
        }
        object$._SemanticsGeometry._temporaryTransformHolder.setIdentity();
        object$._SemanticsGeometry._applyIntermediatePaintTransforms(parent, child, this[_transform$], object$._SemanticsGeometry._temporaryTransformHolder);
        this[_semanticsClipRect] = object$._SemanticsGeometry._transformRect(this[_semanticsClipRect], object$._SemanticsGeometry._temporaryTransformHolder);
        this[_paintClipRect] = object$._SemanticsGeometry._transformRect(this[_paintClipRect], object$._SemanticsGeometry._temporaryTransformHolder);
      }
      let owner = ancestors[$first];
      this[_rect] = this[_semanticsClipRect] == null ? owner.semanticBounds : dart.nullCheck(this[_semanticsClipRect]).intersect(owner.semanticBounds);
      if (this[_paintClipRect] != null) {
        let paintRect = dart.nullCheck(this[_paintClipRect]).intersect(this[_rect]);
        this[_markAsHidden] = paintRect.isEmpty && !this[_rect].isEmpty;
        if (!this[_markAsHidden]) {
          this[_rect] = paintRect;
        }
      }
    }
    static _transformRect(rect, transform) {
      if (!(transform !== null)) dart.assertFailed(null, I[3], 4371, 12, "transform != null");
      if (rect == null) {
        return null;
      }
      if (rect.isEmpty || transform.isZero()) {
        return ui.Rect.zero;
      }
      return matrix_utils.MatrixUtils.inverseTransformRect(transform, rect);
    }
    static _applyIntermediatePaintTransforms(ancestor, child, transform, clipRectTransform) {
      if (!(ancestor !== null)) dart.assertFailed(null, I[3], 4392, 12, "ancestor != null");
      if (!(child !== null)) dart.assertFailed(null, I[3], 4393, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[3], 4394, 12, "transform != null");
      if (!(clipRectTransform !== null)) dart.assertFailed(null, I[3], 4395, 12, "clipRectTransform != null");
      if (!clipRectTransform.isIdentity()) dart.assertFailed(null, I[3], 4396, 12, "clipRectTransform.isIdentity()");
      let intermediateParent = object$.RenderObject.as(dart.nullCheck(child.parent));
      if (!(intermediateParent !== null)) dart.assertFailed(null, I[3], 4398, 12, "intermediateParent != null");
      while (!intermediateParent[$_equals](ancestor)) {
        intermediateParent.applyPaintTransform(child, transform);
        intermediateParent = object$.RenderObject.as(dart.nullCheck(intermediateParent.parent));
        child = object$.RenderObject.as(dart.nullCheck(child.parent));
        if (!(intermediateParent !== null)) dart.assertFailed(null, I[3], 4403, 14, "intermediateParent != null");
      }
      ancestor.applyPaintTransform(child, transform);
      ancestor.applyPaintTransform(child, clipRectTransform);
    }
    static _intersectRects(a, b) {
      if (a == null) {
        return b;
      }
      if (b == null) {
        return a;
      }
      return a.intersect(b);
    }
    get dropFromTree() {
      return this[_rect].isEmpty;
    }
    get markAsHidden() {
      return this[_markAsHidden];
    }
  };
  (object$._SemanticsGeometry.new = function(opts) {
    let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
    let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
    let ancestors = opts && 'ancestors' in opts ? opts.ancestors : null;
    this[_paintClipRect] = null;
    this[_semanticsClipRect] = null;
    this[___SemanticsGeometry__transform] = null;
    this[___SemanticsGeometry__rect] = null;
    this[_markAsHidden] = false;
    this[_computeValues](parentSemanticsClipRect, parentPaintClipRect, ancestors);
  }).prototype = object$._SemanticsGeometry.prototype;
  dart.addTypeTests(object$._SemanticsGeometry);
  dart.addTypeCaches(object$._SemanticsGeometry);
  dart.setMethodSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getMethods(object$._SemanticsGeometry.__proto__),
    [_computeValues]: dart.fnType(dart.void, [dart.nullable(ui.Rect), dart.nullable(ui.Rect), core.List$(object$.RenderObject)])
  }));
  dart.setStaticMethodSignature(object$._SemanticsGeometry, () => ['_transformRect', '_applyIntermediatePaintTransforms', '_intersectRects']);
  dart.setGetterSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getGetters(object$._SemanticsGeometry.__proto__),
    [_transform$]: vector_math_64.Matrix4,
    [_rect]: ui.Rect,
    transform: vector_math_64.Matrix4,
    semanticsClipRect: dart.nullable(ui.Rect),
    paintClipRect: dart.nullable(ui.Rect),
    rect: ui.Rect,
    dropFromTree: core.bool,
    markAsHidden: core.bool
  }));
  dart.setSetterSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getSetters(object$._SemanticsGeometry.__proto__),
    [_transform$]: vector_math_64.Matrix4,
    [_rect]: ui.Rect
  }));
  dart.setLibraryUri(object$._SemanticsGeometry, I[2]);
  dart.setFieldSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getFields(object$._SemanticsGeometry.__proto__),
    [_paintClipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_semanticsClipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [___SemanticsGeometry__transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [___SemanticsGeometry__rect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_markAsHidden]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(object$._SemanticsGeometry, () => ['_temporaryTransformHolder']);
  dart.defineLazy(object$._SemanticsGeometry, {
    /*object$._SemanticsGeometry._temporaryTransformHolder*/get _temporaryTransformHolder() {
      return new vector_math_64.Matrix4.zero();
    }
  }, false);
  object$.DiagnosticsDebugCreator = class DiagnosticsDebugCreator extends diagnostics.DiagnosticsProperty$(core.Object) {
    static ['_#new#tearOff'](value) {
      return new object$.DiagnosticsDebugCreator.new(value);
    }
  };
  (object$.DiagnosticsDebugCreator.new = function(value) {
    if (!(value !== null)) dart.assertFailed(null, I[3], 4449, 14, "value != null");
    object$.DiagnosticsDebugCreator.__proto__.new.call(this, "debugCreator", value, {level: diagnostics.DiagnosticLevel.hidden});
    ;
  }).prototype = object$.DiagnosticsDebugCreator.prototype;
  dart.addTypeTests(object$.DiagnosticsDebugCreator);
  dart.addTypeCaches(object$.DiagnosticsDebugCreator);
  dart.setLibraryUri(object$.DiagnosticsDebugCreator, I[2]);
  debug._debugDrawDoubleRect = function _debugDrawDoubleRect(canvas, outerRect, innerRect, color) {
    let t24, t24$;
    let path = (t24 = ui.Path.new(), (() => {
      t24.fillType = ui.PathFillType.evenOdd;
      t24.addRect(outerRect);
      t24.addRect(innerRect);
      return t24;
    })());
    let paint = (t24$ = ui.Paint.new(), (() => {
      t24$.color = color;
      return t24$;
    })());
    canvas.drawPath(path, paint);
  };
  debug.debugPaintPadding = function debugPaintPadding(canvas, outerRect, innerRect, opts) {
    let outlineWidth = opts && 'outlineWidth' in opts ? opts.outlineWidth : 2;
    if (!dart.fn(() => {
      let t24;
      if (innerRect != null && !innerRect.isEmpty) {
        debug._debugDrawDoubleRect(canvas, outerRect, innerRect, C[14] || CT.C14);
        debug._debugDrawDoubleRect(canvas, innerRect.inflate(outlineWidth).intersect(outerRect), innerRect, C[15] || CT.C15);
      } else {
        let paint = (t24 = ui.Paint.new(), (() => {
          t24.color = C[16] || CT.C16;
          return t24;
        })());
        canvas.drawRect(outerRect, paint);
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 265, 10, "() {\n    if (innerRect != null && !innerRect.isEmpty) {\n      _debugDrawDoubleRect(canvas, outerRect, innerRect, const Color(0x900090FF));\n      _debugDrawDoubleRect(canvas, innerRect.inflate(outlineWidth).intersect(outerRect), innerRect, const Color(0xFF0090FF));\n    } else {\n      final Paint paint = Paint()\n        ..color = const Color(0x90909090);\n      canvas.drawRect(outerRect, paint);\n    }\n    return true;\n  }()");
  };
  debug.debugAssertAllRenderVarsUnset = function debugAssertAllRenderVarsUnset(reason, opts) {
    let debugCheckIntrinsicSizesOverride = opts && 'debugCheckIntrinsicSizesOverride' in opts ? opts.debugCheckIntrinsicSizesOverride : false;
    if (!dart.fn(() => {
      if (debug.debugPaintSizeEnabled || debug.debugPaintBaselinesEnabled || debug.debugPaintLayerBordersEnabled || debug.debugPaintPointersEnabled || debug.debugRepaintRainbowEnabled || debug.debugRepaintTextRainbowEnabled || !debug.debugCurrentRepaintColor._equals(debug._kDebugDefaultRepaintColor) || debug.debugPrintMarkNeedsLayoutStacks || debug.debugPrintMarkNeedsPaintStacks || debug.debugPrintLayouts || debug.debugCheckIntrinsicSizes !== debugCheckIntrinsicSizesOverride || debug.debugProfileLayoutsEnabled || debug.debugProfilePaintsEnabled || debug.debugOnProfilePaint != null || debug.debugDisableClipLayers || debug.debugDisablePhysicalShapeLayers || debug.debugDisableOpacityLayers) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 290, 10, "() {\n    if (debugPaintSizeEnabled ||\n        debugPaintBaselinesEnabled ||\n        debugPaintLayerBordersEnabled ||\n        debugPaintPointersEnabled ||\n        debugRepaintRainbowEnabled ||\n        debugRepaintTextRainbowEnabled ||\n        debugCurrentRepaintColor != _kDebugDefaultRepaintColor ||\n        debugPrintMarkNeedsLayoutStacks ||\n        debugPrintMarkNeedsPaintStacks ||\n        debugPrintLayouts ||\n        debugCheckIntrinsicSizes != debugCheckIntrinsicSizesOverride ||\n        debugProfileLayoutsEnabled ||\n        debugProfilePaintsEnabled ||\n        debugOnProfilePaint != null ||\n        debugDisableClipLayers ||\n        debugDisablePhysicalShapeLayers ||\n        debugDisableOpacityLayers) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  var HSVColor_value = dart.privateName(colors, "HSVColor.value");
  var HSVColor_saturation = dart.privateName(colors, "HSVColor.saturation");
  var HSVColor_hue = dart.privateName(colors, "HSVColor.hue");
  var HSVColor_alpha = dart.privateName(colors, "HSVColor.alpha");
  dart.defineLazy(debug, {
    /*debug._kDebugDefaultRepaintColor*/get _kDebugDefaultRepaintColor() {
      return C[17] || CT.C17;
    },
    /*debug.debugPaintSizeEnabled*/get debugPaintSizeEnabled() {
      return false;
    },
    set debugPaintSizeEnabled(_) {},
    /*debug.debugPaintBaselinesEnabled*/get debugPaintBaselinesEnabled() {
      return false;
    },
    set debugPaintBaselinesEnabled(_) {},
    /*debug.debugPaintLayerBordersEnabled*/get debugPaintLayerBordersEnabled() {
      return false;
    },
    set debugPaintLayerBordersEnabled(_) {},
    /*debug.debugPaintPointersEnabled*/get debugPaintPointersEnabled() {
      return false;
    },
    set debugPaintPointersEnabled(_) {},
    /*debug.debugRepaintRainbowEnabled*/get debugRepaintRainbowEnabled() {
      return false;
    },
    set debugRepaintRainbowEnabled(_) {},
    /*debug.debugRepaintTextRainbowEnabled*/get debugRepaintTextRainbowEnabled() {
      return false;
    },
    set debugRepaintTextRainbowEnabled(_) {},
    /*debug.debugCurrentRepaintColor*/get debugCurrentRepaintColor() {
      return debug._kDebugDefaultRepaintColor;
    },
    set debugCurrentRepaintColor(_) {},
    /*debug.debugPrintMarkNeedsLayoutStacks*/get debugPrintMarkNeedsLayoutStacks() {
      return false;
    },
    set debugPrintMarkNeedsLayoutStacks(_) {},
    /*debug.debugPrintMarkNeedsPaintStacks*/get debugPrintMarkNeedsPaintStacks() {
      return false;
    },
    set debugPrintMarkNeedsPaintStacks(_) {},
    /*debug.debugPrintLayouts*/get debugPrintLayouts() {
      return false;
    },
    set debugPrintLayouts(_) {},
    /*debug.debugCheckIntrinsicSizes*/get debugCheckIntrinsicSizes() {
      return false;
    },
    set debugCheckIntrinsicSizes(_) {},
    /*debug.debugProfileLayoutsEnabled*/get debugProfileLayoutsEnabled() {
      return false;
    },
    set debugProfileLayoutsEnabled(_) {},
    /*debug.debugProfilePaintsEnabled*/get debugProfilePaintsEnabled() {
      return false;
    },
    set debugProfilePaintsEnabled(_) {},
    /*debug.debugEnhanceLayoutTimelineArguments*/get debugEnhanceLayoutTimelineArguments() {
      return false;
    },
    set debugEnhanceLayoutTimelineArguments(_) {},
    /*debug.debugEnhancePaintTimelineArguments*/get debugEnhancePaintTimelineArguments() {
      return false;
    },
    set debugEnhancePaintTimelineArguments(_) {},
    /*debug.debugOnProfilePaint*/get debugOnProfilePaint() {
      return null;
    },
    set debugOnProfilePaint(_) {},
    /*debug.debugDisableClipLayers*/get debugDisableClipLayers() {
      return false;
    },
    set debugDisableClipLayers(_) {},
    /*debug.debugDisablePhysicalShapeLayers*/get debugDisablePhysicalShapeLayers() {
      return false;
    },
    set debugDisablePhysicalShapeLayers(_) {},
    /*debug.debugDisableOpacityLayers*/get debugDisableOpacityLayers() {
      return false;
    },
    set debugDisableOpacityLayers(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/layer.dart", {
    "package:flutter/src/rendering/layer.dart": layer$,
    "package:flutter/src/rendering/object.dart": object$,
    "package:flutter/src/rendering/debug.dart": debug
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["layer.dart","object.dart","debug.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/layer.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__layer: layer$,
    src__rendering__object: object$,
    src__rendering__debug: debug
  };
}));

//# sourceMappingURL=layer.dart.lib.js.map