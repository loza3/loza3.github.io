define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/foundation/node.dart', 'packages/flutter/src/semantics/semantics_event.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/semantics/binding.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__semantics__semantics_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__services__text_editing$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__foundation__node$46dart, packages__flutter__src__semantics__semantics_event$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__semantics__binding$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const system_channels = packages__flutter__src__services__text_editing_delta$46dart.src__services__system_channels;
  const node = packages__flutter__src__foundation__node$46dart.src__foundation__node;
  const semantics_event = packages__flutter__src__semantics__semantics_event$46dart.src__semantics__semantics_event;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const binding = packages__flutter__src__semantics__binding$46dart.src__semantics__binding;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var semantics = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $replaceAll = dartx.replaceAll;
  var $values = dartx.values;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $modulo = dartx['%'];
  var $_equals = dartx._equals;
  var $any = dartx.any;
  var $addAll = dartx.addAll;
  var $forEach = dartx.forEach;
  var $containsKey = dartx.containsKey;
  var $remove = dartx.remove;
  var $keys = dartx.keys;
  var $sort = dartx.sort;
  var $clear = dartx.clear;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $toString = dartx.toString;
  var $split = dartx.split;
  var $take = dartx.take;
  var $substring = dartx.substring;
  var $join = dartx.join;
  var $where = dartx.where;
  var $isFinite = dartx.isFinite;
  var $compareTo = dartx.compareTo;
  var $reversed = dartx.reversed;
  var $expand = dartx.expand;
  var $cast = dartx.cast;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfint$CustomSemanticsAction: () => (T.IdentityMapOfint$CustomSemanticsAction = dart.constFn(_js_helper.IdentityMap$(core.int, semantics.CustomSemanticsAction)))(),
    LinkedMapOfCustomSemanticsAction$int: () => (T.LinkedMapOfCustomSemanticsAction$int = dart.constFn(_js_helper.LinkedMap$(semantics.CustomSemanticsAction, core.int)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    ListOfStringAttribute: () => (T.ListOfStringAttribute = dart.constFn(core.List$(ui.StringAttribute)))(),
    DiagnosticsPropertyOfRect: () => (T.DiagnosticsPropertyOfRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Rect)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    intToStringN: () => (T.intToStringN = dart.constFn(dart.fnType(T.StringN(), [core.int])))(),
    IterablePropertyOfString: () => (T.IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))(),
    IterablePropertyOfStringN: () => (T.IterablePropertyOfStringN = dart.constFn(diagnostics.IterableProperty$(T.StringN())))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    SemanticsNodeTobool: () => (T.SemanticsNodeTobool = dart.constFn(dart.fnType(core.bool, [semantics.SemanticsNode])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfSemanticsNode: () => (T.ListOfSemanticsNode = dart.constFn(core.List$(semantics.SemanticsNode)))(),
    LinkedHashSetOfSemanticsNode: () => (T.LinkedHashSetOfSemanticsNode = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsNode)))(),
    SemanticsOwnerN: () => (T.SemanticsOwnerN = dart.constFn(dart.nullable(semantics.SemanticsOwner)))(),
    SemanticsNodeN: () => (T.SemanticsNodeN = dart.constFn(dart.nullable(semantics.SemanticsNode)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ObjectNTovoid: () => (T.ObjectNTovoid = dart.constFn(dart.fnType(dart.void, [T.ObjectN()])))(),
    LinkedHashMapOfSemanticsAction$ObjectNTovoid: () => (T.LinkedHashMapOfSemanticsAction$ObjectNTovoid = dart.constFn(collection.LinkedHashMap$(ui.SemanticsAction, T.ObjectNTovoid())))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    LinkedHashMapOfCustomSemanticsAction$VoidTovoid: () => (T.LinkedHashMapOfCustomSemanticsAction$VoidTovoid = dart.constFn(collection.LinkedHashMap$(semantics.CustomSemanticsAction, T.VoidTovoid())))(),
    LinkedHashSetOfSemanticsTag: () => (T.LinkedHashSetOfSemanticsTag = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsTag)))(),
    LinkedHashSetOfint: () => (T.LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))(),
    JSArrayOf_TraversalSortNode: () => (T.JSArrayOf_TraversalSortNode = dart.constFn(_interceptors.JSArray$(semantics._TraversalSortNode)))(),
    _TraversalSortNodeToSemanticsNode: () => (T._TraversalSortNodeToSemanticsNode = dart.constFn(dart.fnType(semantics.SemanticsNode, [semantics._TraversalSortNode])))(),
    DiagnosticsPropertyOfSemanticsOwner: () => (T.DiagnosticsPropertyOfSemanticsOwner = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsOwner)))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    SemanticsTagToString: () => (T.SemanticsTagToString = dart.constFn(dart.fnType(core.String, [semantics.SemanticsTag])))(),
    SemanticsActionToString: () => (T.SemanticsActionToString = dart.constFn(dart.fnType(core.String, [ui.SemanticsAction])))(),
    CustomSemanticsActionToStringN: () => (T.CustomSemanticsActionToStringN = dart.constFn(dart.fnType(T.StringN(), [semantics.CustomSemanticsAction])))(),
    SemanticsFlagTobool: () => (T.SemanticsFlagTobool = dart.constFn(dart.fnType(core.bool, [ui.SemanticsFlag])))(),
    SemanticsFlagToString: () => (T.SemanticsFlagToString = dart.constFn(dart.fnType(core.String, [ui.SemanticsFlag])))(),
    DiagnosticsPropertyOfSemanticsSortKey: () => (T.DiagnosticsPropertyOfSemanticsSortKey = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsSortKey)))(),
    SemanticsNodeToDiagnosticsNode: () => (T.SemanticsNodeToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics.DiagnosticsNode, [semantics.SemanticsNode])))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    DiagnosticsPropertyOfSemanticsHintOverrides: () => (T.DiagnosticsPropertyOfSemanticsHintOverrides = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsHintOverrides)))(),
    JSArrayOfSemanticsNode: () => (T.JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))(),
    JSArrayOf_BoxEdge: () => (T.JSArrayOf_BoxEdge = dart.constFn(_interceptors.JSArray$(semantics._BoxEdge)))(),
    JSArrayOf_SemanticsSortGroup: () => (T.JSArrayOf_SemanticsSortGroup = dart.constFn(_interceptors.JSArray$(semantics._SemanticsSortGroup)))(),
    _SemanticsSortGroupToListOfSemanticsNode: () => (T._SemanticsSortGroupToListOfSemanticsNode = dart.constFn(dart.fnType(T.ListOfSemanticsNode(), [semantics._SemanticsSortGroup])))(),
    IdentityMapOfint$SemanticsNode: () => (T.IdentityMapOfint$SemanticsNode = dart.constFn(_js_helper.IdentityMap$(core.int, semantics.SemanticsNode)))(),
    IdentityMapOfint$int: () => (T.IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    SemanticsNodeAndSemanticsNodeToint: () => (T.SemanticsNodeAndSemanticsNodeToint = dart.constFn(dart.fnType(core.int, [semantics.SemanticsNode, semantics.SemanticsNode])))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    SemanticsNodeToint: () => (T.SemanticsNodeToint = dart.constFn(dart.fnType(core.int, [semantics.SemanticsNode])))(),
    intToSemanticsNode: () => (T.intToSemanticsNode = dart.constFn(dart.fnType(semantics.SemanticsNode, [core.int])))(),
    LinkedMapOfSemanticsAction$ObjectNTovoid: () => (T.LinkedMapOfSemanticsAction$ObjectNTovoid = dart.constFn(_js_helper.LinkedMap$(ui.SemanticsAction, T.ObjectNTovoid())))(),
    LinkedMapOfCustomSemanticsAction$VoidTovoid: () => (T.LinkedMapOfCustomSemanticsAction$VoidTovoid = dart.constFn(_js_helper.LinkedMap$(semantics.CustomSemanticsAction, T.VoidTovoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], ui.StringAttribute);
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: diagnostics._NoDefaultValue.prototype
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "info",
        [_Enum_index]: 3
      });
    },
    get C3() {
      return C[3] = dart.constList([], semantics.SemanticsNode);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "debug",
        [_Enum_index]: 2
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: semantics.DebugSemanticsDumpOrder.prototype,
        [_Enum__name]: "traversalOrder",
        [_Enum_index]: 1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "sparse",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: semantics.DebugSemanticsDumpOrder.prototype,
        [_Enum__name]: "inverseHitTest",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.constList([C[7] || CT.C7, C[5] || CT.C5], semantics.DebugSemanticsDumpOrder);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(11).fill(void 0);
  var I = [
    "package:flutter/src/semantics/semantics.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/semantics/semantics.dart"
  ];
  var name$ = dart.privateName(semantics, "SemanticsTag.name");
  semantics.SemanticsTag = class SemanticsTag extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    static ['_#new#tearOff'](name) {
      return new semantics.SemanticsTag.new(name);
    }
    toString() {
      return object.objectRuntimeType(this, "SemanticsTag") + "(" + this.name + ")";
    }
  };
  (semantics.SemanticsTag.new = function(name) {
    this[name$] = name;
    ;
  }).prototype = semantics.SemanticsTag.prototype;
  dart.addTypeTests(semantics.SemanticsTag);
  dart.addTypeCaches(semantics.SemanticsTag);
  dart.setLibraryUri(semantics.SemanticsTag, I[0]);
  dart.setFieldSignature(semantics.SemanticsTag, () => ({
    __proto__: dart.getFields(semantics.SemanticsTag.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.SemanticsTag, ['toString']);
  var label$ = dart.privateName(semantics, "CustomSemanticsAction.label");
  var hint$ = dart.privateName(semantics, "CustomSemanticsAction.hint");
  var action$ = dart.privateName(semantics, "CustomSemanticsAction.action");
  semantics.CustomSemanticsAction = class CustomSemanticsAction extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get hint() {
      return this[hint$];
    }
    set hint(value) {
      super.hint = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    static ['_#new#tearOff'](opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      return new semantics.CustomSemanticsAction.new({label: label});
    }
    static ['_#overridingAction#tearOff'](opts) {
      let hint = opts && 'hint' in opts ? opts.hint : null;
      let action = opts && 'action' in opts ? opts.action : null;
      return new semantics.CustomSemanticsAction.overridingAction({hint: hint, action: action});
    }
    get hashCode() {
      return core.Object.hash(this.label, this.hint, this.action);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return semantics.CustomSemanticsAction.is(other) && other.label == this.label && other.hint == this.hint && dart.equals(other.action, this.action);
    }
    toString() {
      return "CustomSemanticsAction(" + dart.str(semantics.CustomSemanticsAction._ids[$_get](this)) + ", label:" + dart.str(this.label) + ", hint:" + dart.str(this.hint) + ", action:" + dart.str(this.action) + ")";
    }
    static getIdentifier(action) {
      let t0;
      let result = semantics.CustomSemanticsAction._ids[$_get](action);
      if (result == null) {
        result = (t0 = semantics.CustomSemanticsAction._nextId, semantics.CustomSemanticsAction._nextId = t0 + 1, t0);
        semantics.CustomSemanticsAction._ids[$_set](action, result);
        semantics.CustomSemanticsAction._actions[$_set](result, action);
      }
      return result;
    }
    static getAction(id) {
      return semantics.CustomSemanticsAction._actions[$_get](id);
    }
  };
  (semantics.CustomSemanticsAction.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    this[label$] = label;
    if (!(label !== null)) dart.assertFailed(null, I[1], 112, 14, "label != null");
    if (!(label !== "")) dart.assertFailed(null, I[1], 113, 14, "label != ''");
    this[hint$] = null;
    this[action$] = null;
    ;
  }).prototype = semantics.CustomSemanticsAction.prototype;
  (semantics.CustomSemanticsAction.overridingAction = function(opts) {
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let action = opts && 'action' in opts ? opts.action : null;
    this[hint$] = hint;
    this[action$] = action;
    if (!(hint !== null)) dart.assertFailed(null, I[1], 122, 14, "hint != null");
    if (!(hint !== "")) dart.assertFailed(null, I[1], 123, 14, "hint != ''");
    if (!(action !== null)) dart.assertFailed(null, I[1], 124, 14, "action != null");
    this[label$] = null;
    ;
  }).prototype = semantics.CustomSemanticsAction.prototype;
  dart.addTypeTests(semantics.CustomSemanticsAction);
  dart.addTypeCaches(semantics.CustomSemanticsAction);
  dart.setStaticMethodSignature(semantics.CustomSemanticsAction, () => ['getIdentifier', 'getAction']);
  dart.setLibraryUri(semantics.CustomSemanticsAction, I[0]);
  dart.setFieldSignature(semantics.CustomSemanticsAction, () => ({
    __proto__: dart.getFields(semantics.CustomSemanticsAction.__proto__),
    label: dart.finalFieldType(dart.nullable(core.String)),
    hint: dart.finalFieldType(dart.nullable(core.String)),
    action: dart.finalFieldType(dart.nullable(ui.SemanticsAction))
  }));
  dart.setStaticFieldSignature(semantics.CustomSemanticsAction, () => ['_nextId', '_actions', '_ids']);
  dart.defineExtensionMethods(semantics.CustomSemanticsAction, ['_equals', 'toString']);
  dart.defineExtensionAccessors(semantics.CustomSemanticsAction, ['hashCode']);
  dart.defineLazy(semantics.CustomSemanticsAction, {
    /*semantics.CustomSemanticsAction._nextId*/get _nextId() {
      return 0;
    },
    set _nextId(_) {},
    /*semantics.CustomSemanticsAction._actions*/get _actions() {
      return new (T.IdentityMapOfint$CustomSemanticsAction()).new();
    },
    /*semantics.CustomSemanticsAction._ids*/get _ids() {
      return new (T.LinkedMapOfCustomSemanticsAction$int()).new();
    }
  }, false);
  var string$ = dart.privateName(semantics, "AttributedString.string");
  var attributes$ = dart.privateName(semantics, "AttributedString.attributes");
  semantics.AttributedString = class AttributedString extends core.Object {
    get string() {
      return this[string$];
    }
    set string(value) {
      super.string = value;
    }
    get attributes() {
      return this[attributes$];
    }
    set attributes(value) {
      super.attributes = value;
    }
    static ['_#new#tearOff'](string, opts) {
      let attributes = opts && 'attributes' in opts ? opts.attributes : C[0] || CT.C0;
      return new semantics.AttributedString.new(string, {attributes: attributes});
    }
    ['+'](other) {
      if (this.string[$isEmpty]) {
        return other;
      }
      if (other.string[$isEmpty]) {
        return this;
      }
      let newString = this.string + other.string;
      let newAttributes = T.ListOfStringAttribute().of(this.attributes);
      if (other.attributes[$isNotEmpty]) {
        let offset = this.string.length;
        for (let attribute of other.attributes) {
          let newRange = new ui.TextRange.new({start: attribute.range.start + offset, end: attribute.range.end + offset});
          let adjustedAttribute = attribute.copy({range: newRange});
          newAttributes[$add](adjustedAttribute);
        }
      }
      return new semantics.AttributedString.new(newString, {attributes: newAttributes});
    }
    _equals(other) {
      if (other == null) return false;
      return other[$runtimeType]._equals(this[$runtimeType]) && semantics.AttributedString.is(other) && other.string === this.string && collections.listEquals(ui.StringAttribute, other.attributes, this.attributes);
    }
    get hashCode() {
      return core.Object.hash(this.string, this.attributes);
    }
    toString() {
      return object.objectRuntimeType(this, "AttributedString") + "('" + this.string + "', attributes: " + dart.str(this.attributes) + ")";
    }
  };
  (semantics.AttributedString.new = function(string, opts) {
    let attributes = opts && 'attributes' in opts ? opts.attributes : C[0] || CT.C0;
    this[string$] = string;
    this[attributes$] = attributes;
    if (!(string[$isNotEmpty] || attributes[$isEmpty])) dart.assertFailed(null, I[1], 191, 15, "string.isNotEmpty || attributes.isEmpty");
    if (!dart.fn(() => {
      for (let attribute of attributes) {
        if (!(string.length >= attribute.range.start && string.length >= attribute.range.end)) dart.assertFailed("The range in " + dart.str(attribute) + " is outside of the string " + string, I[1], 195, 13, "string.length >= attribute.range.start &&\n            string.length >= attribute.range.end");
      }
      return true;
    }, T.VoidTobool())()) dart.assertFailed(null, I[1], 192, 15, "() {\n        for (final StringAttribute attribute in attributes) {\n          assert(\n            string.length >= attribute.range.start &&\n            string.length >= attribute.range.end,\n            'The range in $attribute is outside of the string $string',\n          );\n        }\n        return true;\n      }()");
    ;
  }).prototype = semantics.AttributedString.prototype;
  dart.addTypeTests(semantics.AttributedString);
  dart.addTypeCaches(semantics.AttributedString);
  dart.setMethodSignature(semantics.AttributedString, () => ({
    __proto__: dart.getMethods(semantics.AttributedString.__proto__),
    '+': dart.fnType(semantics.AttributedString, [semantics.AttributedString])
  }));
  dart.setLibraryUri(semantics.AttributedString, I[0]);
  dart.setFieldSignature(semantics.AttributedString, () => ({
    __proto__: dart.getFields(semantics.AttributedString.__proto__),
    string: dart.finalFieldType(core.String),
    attributes: dart.finalFieldType(core.List$(ui.StringAttribute))
  }));
  dart.defineExtensionMethods(semantics.AttributedString, ['_equals', 'toString']);
  dart.defineExtensionAccessors(semantics.AttributedString, ['hashCode']);
  var showWhenEmpty$ = dart.privateName(semantics, "AttributedStringProperty.showWhenEmpty");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  semantics.AttributedStringProperty = class AttributedStringProperty extends diagnostics.DiagnosticsProperty$(semantics.AttributedString) {
    get showWhenEmpty() {
      return this[showWhenEmpty$];
    }
    set showWhenEmpty(value) {
      super.showWhenEmpty = value;
    }
    static ['_#new#tearOff'](name, value, opts) {
      let showName = opts && 'showName' in opts ? opts.showName : null;
      let showWhenEmpty = opts && 'showWhenEmpty' in opts ? opts.showWhenEmpty : false;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      let level = opts && 'level' in opts ? opts.level : null;
      let description = opts && 'description' in opts ? opts.description : null;
      return new semantics.AttributedStringProperty.new(name, value, {showName: showName, showWhenEmpty: showWhenEmpty, defaultValue: defaultValue, level: level, description: description});
    }
    get isInteresting() {
      return super.isInteresting && (this.showWhenEmpty || this.value != null && dart.nullCheck(this.value).string[$isNotEmpty]);
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) {
        return "null";
      }
      let text = dart.nullCheck(this.value).string;
      if (parentConfiguration != null && !parentConfiguration.lineBreakProperties) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (dart.nullCheck(this.value).attributes[$isEmpty]) {
        return "\"" + text + "\"";
      }
      return "\"" + text + "\" " + dart.str(dart.nullCheck(this.value).attributes);
    }
  };
  (semantics.AttributedStringProperty.new = function(name, value, opts) {
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showWhenEmpty = opts && 'showWhenEmpty' in opts ? opts.showWhenEmpty : false;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[1] || CT.C1;
    let level = opts && 'level' in opts ? opts.level : C[2] || CT.C2;
    let description = opts && 'description' in opts ? opts.description : null;
    this[showWhenEmpty$] = showWhenEmpty;
    if (!(showName !== null)) dart.assertFailed(null, I[1], 272, 15, "showName != null");
    if (!(level !== null)) dart.assertFailed(null, I[1], 273, 15, "level != null");
    semantics.AttributedStringProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level, description: description});
    ;
  }).prototype = semantics.AttributedStringProperty.prototype;
  dart.addTypeTests(semantics.AttributedStringProperty);
  dart.addTypeCaches(semantics.AttributedStringProperty);
  dart.setLibraryUri(semantics.AttributedStringProperty, I[0]);
  dart.setFieldSignature(semantics.AttributedStringProperty, () => ({
    __proto__: dart.getFields(semantics.AttributedStringProperty.__proto__),
    showWhenEmpty: dart.finalFieldType(core.bool)
  }));
  var flags$ = dart.privateName(semantics, "SemanticsData.flags");
  var actions$ = dart.privateName(semantics, "SemanticsData.actions");
  var attributedLabel$ = dart.privateName(semantics, "SemanticsData.attributedLabel");
  var attributedValue$ = dart.privateName(semantics, "SemanticsData.attributedValue");
  var attributedIncreasedValue$ = dart.privateName(semantics, "SemanticsData.attributedIncreasedValue");
  var attributedDecreasedValue$ = dart.privateName(semantics, "SemanticsData.attributedDecreasedValue");
  var attributedHint$ = dart.privateName(semantics, "SemanticsData.attributedHint");
  var tooltip$ = dart.privateName(semantics, "SemanticsData.tooltip");
  var textDirection$ = dart.privateName(semantics, "SemanticsData.textDirection");
  var textSelection$ = dart.privateName(semantics, "SemanticsData.textSelection");
  var scrollChildCount$ = dart.privateName(semantics, "SemanticsData.scrollChildCount");
  var scrollIndex$ = dart.privateName(semantics, "SemanticsData.scrollIndex");
  var scrollPosition$ = dart.privateName(semantics, "SemanticsData.scrollPosition");
  var scrollExtentMax$ = dart.privateName(semantics, "SemanticsData.scrollExtentMax");
  var scrollExtentMin$ = dart.privateName(semantics, "SemanticsData.scrollExtentMin");
  var platformViewId$ = dart.privateName(semantics, "SemanticsData.platformViewId");
  var maxValueLength$ = dart.privateName(semantics, "SemanticsData.maxValueLength");
  var currentValueLength$ = dart.privateName(semantics, "SemanticsData.currentValueLength");
  var rect$ = dart.privateName(semantics, "SemanticsData.rect");
  var tags$ = dart.privateName(semantics, "SemanticsData.tags");
  var transform$ = dart.privateName(semantics, "SemanticsData.transform");
  var elevation$ = dart.privateName(semantics, "SemanticsData.elevation");
  var thickness$ = dart.privateName(semantics, "SemanticsData.thickness");
  var customSemanticsActionIds$ = dart.privateName(semantics, "SemanticsData.customSemanticsActionIds");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  semantics.SemanticsData = class SemanticsData extends Object_Diagnosticable$36 {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    get attributedLabel() {
      return this[attributedLabel$];
    }
    set attributedLabel(value) {
      super.attributedLabel = value;
    }
    get attributedValue() {
      return this[attributedValue$];
    }
    set attributedValue(value) {
      super.attributedValue = value;
    }
    get attributedIncreasedValue() {
      return this[attributedIncreasedValue$];
    }
    set attributedIncreasedValue(value) {
      super.attributedIncreasedValue = value;
    }
    get attributedDecreasedValue() {
      return this[attributedDecreasedValue$];
    }
    set attributedDecreasedValue(value) {
      super.attributedDecreasedValue = value;
    }
    get attributedHint() {
      return this[attributedHint$];
    }
    set attributedHint(value) {
      super.attributedHint = value;
    }
    get tooltip() {
      return this[tooltip$];
    }
    set tooltip(value) {
      super.tooltip = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get textSelection() {
      return this[textSelection$];
    }
    set textSelection(value) {
      super.textSelection = value;
    }
    get scrollChildCount() {
      return this[scrollChildCount$];
    }
    set scrollChildCount(value) {
      super.scrollChildCount = value;
    }
    get scrollIndex() {
      return this[scrollIndex$];
    }
    set scrollIndex(value) {
      super.scrollIndex = value;
    }
    get scrollPosition() {
      return this[scrollPosition$];
    }
    set scrollPosition(value) {
      super.scrollPosition = value;
    }
    get scrollExtentMax() {
      return this[scrollExtentMax$];
    }
    set scrollExtentMax(value) {
      super.scrollExtentMax = value;
    }
    get scrollExtentMin() {
      return this[scrollExtentMin$];
    }
    set scrollExtentMin(value) {
      super.scrollExtentMin = value;
    }
    get platformViewId() {
      return this[platformViewId$];
    }
    set platformViewId(value) {
      super.platformViewId = value;
    }
    get maxValueLength() {
      return this[maxValueLength$];
    }
    set maxValueLength(value) {
      super.maxValueLength = value;
    }
    get currentValueLength() {
      return this[currentValueLength$];
    }
    set currentValueLength(value) {
      super.currentValueLength = value;
    }
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      super.tags = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get thickness() {
      return this[thickness$];
    }
    set thickness(value) {
      super.thickness = value;
    }
    get customSemanticsActionIds() {
      return this[customSemanticsActionIds$];
    }
    set customSemanticsActionIds(value) {
      super.customSemanticsActionIds = value;
    }
    static ['_#new#tearOff'](opts) {
      let flags = opts && 'flags' in opts ? opts.flags : null;
      let actions = opts && 'actions' in opts ? opts.actions : null;
      let attributedLabel = opts && 'attributedLabel' in opts ? opts.attributedLabel : null;
      let attributedValue = opts && 'attributedValue' in opts ? opts.attributedValue : null;
      let attributedIncreasedValue = opts && 'attributedIncreasedValue' in opts ? opts.attributedIncreasedValue : null;
      let attributedDecreasedValue = opts && 'attributedDecreasedValue' in opts ? opts.attributedDecreasedValue : null;
      let attributedHint = opts && 'attributedHint' in opts ? opts.attributedHint : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let thickness = opts && 'thickness' in opts ? opts.thickness : null;
      let textSelection = opts && 'textSelection' in opts ? opts.textSelection : null;
      let scrollIndex = opts && 'scrollIndex' in opts ? opts.scrollIndex : null;
      let scrollChildCount = opts && 'scrollChildCount' in opts ? opts.scrollChildCount : null;
      let scrollPosition = opts && 'scrollPosition' in opts ? opts.scrollPosition : null;
      let scrollExtentMax = opts && 'scrollExtentMax' in opts ? opts.scrollExtentMax : null;
      let scrollExtentMin = opts && 'scrollExtentMin' in opts ? opts.scrollExtentMin : null;
      let platformViewId = opts && 'platformViewId' in opts ? opts.platformViewId : null;
      let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
      let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
      let tags = opts && 'tags' in opts ? opts.tags : null;
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let customSemanticsActionIds = opts && 'customSemanticsActionIds' in opts ? opts.customSemanticsActionIds : null;
      return new semantics.SemanticsData.new({flags: flags, actions: actions, attributedLabel: attributedLabel, attributedValue: attributedValue, attributedIncreasedValue: attributedIncreasedValue, attributedDecreasedValue: attributedDecreasedValue, attributedHint: attributedHint, tooltip: tooltip, textDirection: textDirection, rect: rect, elevation: elevation, thickness: thickness, textSelection: textSelection, scrollIndex: scrollIndex, scrollChildCount: scrollChildCount, scrollPosition: scrollPosition, scrollExtentMax: scrollExtentMax, scrollExtentMin: scrollExtentMin, platformViewId: platformViewId, maxValueLength: maxValueLength, currentValueLength: currentValueLength, tags: tags, transform: transform, customSemanticsActionIds: customSemanticsActionIds});
    }
    get label() {
      return this.attributedLabel.string;
    }
    get value() {
      return this.attributedValue.string;
    }
    get increasedValue() {
      return this.attributedIncreasedValue.string;
    }
    get decreasedValue() {
      return this.attributedDecreasedValue.string;
    }
    get hint() {
      return this.attributedHint.string;
    }
    hasFlag(flag) {
      return (this.flags & flag.index) !== 0;
    }
    hasAction(action) {
      return (this.actions & action.index) !== 0;
    }
    toStringShort() {
      return object.objectRuntimeType(this, "SemanticsData");
    }
    debugFillProperties(properties) {
      let t2, t2$;
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfRect()).new("rect", this.rect, {showName: false}));
      properties.add(new matrix_utils.TransformProperty.new("transform", this.transform, {showName: false, defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: 0.0}));
      properties.add(new diagnostics.DoubleProperty.new("thickness", this.thickness, {defaultValue: 0.0}));
      let actionSummary = (() => {
        let t0 = T.JSArrayOfString().of([]);
        for (let action of ui.SemanticsAction.values[$values])
          if ((this.actions & action.index) !== 0) t0.push(diagnostics.describeEnum(action));
        return t0;
      })();
      let customSemanticsActionSummary = dart.nullCheck(this.customSemanticsActionIds)[$map](T.StringN(), dart.fn(actionId => dart.nullCheck(semantics.CustomSemanticsAction.getAction(actionId)).label, T.intToStringN()))[$toList]();
      properties.add(new (T.IterablePropertyOfString()).new("actions", actionSummary, {ifEmpty: null}));
      properties.add(new (T.IterablePropertyOfStringN()).new("customActions", customSemanticsActionSummary, {ifEmpty: null}));
      let flagSummary = (() => {
        let t1 = T.JSArrayOfString().of([]);
        for (let flag of ui.SemanticsFlag.values[$values])
          if ((this.flags & flag.index) !== 0) t1.push(diagnostics.describeEnum(flag));
        return t1;
      })();
      properties.add(new (T.IterablePropertyOfString()).new("flags", flagSummary, {ifEmpty: null}));
      properties.add(new semantics.AttributedStringProperty.new("label", this.attributedLabel));
      properties.add(new semantics.AttributedStringProperty.new("value", this.attributedValue));
      properties.add(new semantics.AttributedStringProperty.new("increasedValue", this.attributedIncreasedValue));
      properties.add(new semantics.AttributedStringProperty.new("decreasedValue", this.attributedDecreasedValue));
      properties.add(new semantics.AttributedStringProperty.new("hint", this.attributedHint));
      properties.add(new diagnostics.StringProperty.new("tooltip", this.tooltip, {defaultValue: ""}));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      if (dart.test((t2$ = (t2 = this.textSelection, t2 == null ? null : t2.isValid), t2$ == null ? false : t2$))) {
        properties.add(new diagnostics.MessageProperty.new("textSelection", "[" + dart.str(dart.nullCheck(this.textSelection).start) + ", " + dart.str(dart.nullCheck(this.textSelection).end) + "]"));
      }
      properties.add(new diagnostics.IntProperty.new("platformViewId", this.platformViewId, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxValueLength", this.maxValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("currentValueLength", this.currentValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollChildren", this.scrollChildCount, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollIndex", this.scrollIndex, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMin", this.scrollExtentMin, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollPosition", this.scrollPosition, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMax", this.scrollExtentMax, {defaultValue: null}));
    }
    _equals(other) {
      if (other == null) return false;
      return semantics.SemanticsData.is(other) && other.flags === this.flags && other.actions === this.actions && other.attributedLabel._equals(this.attributedLabel) && other.attributedValue._equals(this.attributedValue) && other.attributedIncreasedValue._equals(this.attributedIncreasedValue) && other.attributedDecreasedValue._equals(this.attributedDecreasedValue) && other.attributedHint._equals(this.attributedHint) && other.tooltip === this.tooltip && other.textDirection == this.textDirection && other.rect._equals(this.rect) && collections.setEquals(semantics.SemanticsTag, other.tags, this.tags) && other.scrollChildCount == this.scrollChildCount && other.scrollIndex == this.scrollIndex && dart.equals(other.textSelection, this.textSelection) && other.scrollPosition == this.scrollPosition && other.scrollExtentMax == this.scrollExtentMax && other.scrollExtentMin == this.scrollExtentMin && other.platformViewId == this.platformViewId && other.maxValueLength == this.maxValueLength && other.currentValueLength == this.currentValueLength && dart.equals(other.transform, this.transform) && other.elevation === this.elevation && other.thickness === this.thickness && semantics.SemanticsData._sortedListsEqual(other.customSemanticsActionIds, this.customSemanticsActionIds);
    }
    get hashCode() {
      return core.Object.hash(this.flags, this.actions, this.attributedLabel, this.attributedValue, this.attributedIncreasedValue, this.attributedDecreasedValue, this.attributedHint, this.tooltip, this.textDirection, this.rect, this.tags, this.textSelection, this.scrollChildCount, this.scrollIndex, this.scrollPosition, this.scrollExtentMax, this.scrollExtentMin, this.platformViewId, this.maxValueLength, core.Object.hash(this.currentValueLength, this.transform, this.elevation, this.thickness, this.customSemanticsActionIds == null ? null : core.Object.hashAll(dart.nullCheck(this.customSemanticsActionIds))));
    }
    static _sortedListsEqual(left, right) {
      if (left == null && right == null) {
        return true;
      }
      if (left != null && right != null) {
        if (left[$length] !== right[$length]) {
          return false;
        }
        for (let i = 0; i < left[$length]; i = i + 1) {
          if (left[$_get](i) !== right[$_get](i)) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
  };
  (semantics.SemanticsData.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let attributedLabel = opts && 'attributedLabel' in opts ? opts.attributedLabel : null;
    let attributedValue = opts && 'attributedValue' in opts ? opts.attributedValue : null;
    let attributedIncreasedValue = opts && 'attributedIncreasedValue' in opts ? opts.attributedIncreasedValue : null;
    let attributedDecreasedValue = opts && 'attributedDecreasedValue' in opts ? opts.attributedDecreasedValue : null;
    let attributedHint = opts && 'attributedHint' in opts ? opts.attributedHint : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let thickness = opts && 'thickness' in opts ? opts.thickness : null;
    let textSelection = opts && 'textSelection' in opts ? opts.textSelection : null;
    let scrollIndex = opts && 'scrollIndex' in opts ? opts.scrollIndex : null;
    let scrollChildCount = opts && 'scrollChildCount' in opts ? opts.scrollChildCount : null;
    let scrollPosition = opts && 'scrollPosition' in opts ? opts.scrollPosition : null;
    let scrollExtentMax = opts && 'scrollExtentMax' in opts ? opts.scrollExtentMax : null;
    let scrollExtentMin = opts && 'scrollExtentMin' in opts ? opts.scrollExtentMin : null;
    let platformViewId = opts && 'platformViewId' in opts ? opts.platformViewId : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let customSemanticsActionIds = opts && 'customSemanticsActionIds' in opts ? opts.customSemanticsActionIds : null;
    this[flags$] = flags;
    this[actions$] = actions;
    this[attributedLabel$] = attributedLabel;
    this[attributedValue$] = attributedValue;
    this[attributedIncreasedValue$] = attributedIncreasedValue;
    this[attributedDecreasedValue$] = attributedDecreasedValue;
    this[attributedHint$] = attributedHint;
    this[tooltip$] = tooltip;
    this[textDirection$] = textDirection;
    this[rect$] = rect;
    this[elevation$] = elevation;
    this[thickness$] = thickness;
    this[textSelection$] = textSelection;
    this[scrollIndex$] = scrollIndex;
    this[scrollChildCount$] = scrollChildCount;
    this[scrollPosition$] = scrollPosition;
    this[scrollExtentMax$] = scrollExtentMax;
    this[scrollExtentMin$] = scrollExtentMin;
    this[platformViewId$] = platformViewId;
    this[maxValueLength$] = maxValueLength;
    this[currentValueLength$] = currentValueLength;
    this[tags$] = tags;
    this[transform$] = transform;
    this[customSemanticsActionIds$] = customSemanticsActionIds;
    if (!(flags !== null)) dart.assertFailed(null, I[1], 342, 15, "flags != null");
    if (!(actions !== null)) dart.assertFailed(null, I[1], 343, 15, "actions != null");
    if (!(attributedLabel !== null)) dart.assertFailed(null, I[1], 344, 15, "attributedLabel != null");
    if (!(attributedValue !== null)) dart.assertFailed(null, I[1], 345, 15, "attributedValue != null");
    if (!(attributedDecreasedValue !== null)) dart.assertFailed(null, I[1], 346, 15, "attributedDecreasedValue != null");
    if (!(attributedIncreasedValue !== null)) dart.assertFailed(null, I[1], 347, 15, "attributedIncreasedValue != null");
    if (!(attributedHint !== null)) dart.assertFailed(null, I[1], 348, 15, "attributedHint != null");
    if (!(tooltip === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with tooltip \"" + tooltip + "\" had a null textDirection.", I[1], 349, 15, "tooltip == '' || textDirection != null");
    if (!(attributedLabel.string === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with label \"" + attributedLabel.string + "\" had a null textDirection.", I[1], 350, 15, "attributedLabel.string == '' || textDirection != null");
    if (!(attributedValue.string === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with value \"" + attributedValue.string + "\" had a null textDirection.", I[1], 351, 15, "attributedValue.string == '' || textDirection != null");
    if (!(attributedDecreasedValue.string === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with decreasedValue \"" + attributedDecreasedValue.string + "\" had a null textDirection.", I[1], 352, 15, "attributedDecreasedValue.string == '' || textDirection != null");
    if (!(attributedIncreasedValue.string === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with increasedValue \"" + attributedIncreasedValue.string + "\" had a null textDirection.", I[1], 353, 15, "attributedIncreasedValue.string == '' || textDirection != null");
    if (!(attributedHint.string === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with hint \"" + attributedHint.string + "\" had a null textDirection.", I[1], 354, 15, "attributedHint.string == '' || textDirection != null");
    if (!(rect !== null)) dart.assertFailed(null, I[1], 355, 15, "rect != null");
    ;
  }).prototype = semantics.SemanticsData.prototype;
  dart.addTypeTests(semantics.SemanticsData);
  dart.addTypeCaches(semantics.SemanticsData);
  dart.setMethodSignature(semantics.SemanticsData, () => ({
    __proto__: dart.getMethods(semantics.SemanticsData.__proto__),
    hasFlag: dart.fnType(core.bool, [ui.SemanticsFlag]),
    hasAction: dart.fnType(core.bool, [ui.SemanticsAction])
  }));
  dart.setStaticMethodSignature(semantics.SemanticsData, () => ['_sortedListsEqual']);
  dart.setGetterSignature(semantics.SemanticsData, () => ({
    __proto__: dart.getGetters(semantics.SemanticsData.__proto__),
    label: core.String,
    value: core.String,
    increasedValue: core.String,
    decreasedValue: core.String,
    hint: core.String
  }));
  dart.setLibraryUri(semantics.SemanticsData, I[0]);
  dart.setFieldSignature(semantics.SemanticsData, () => ({
    __proto__: dart.getFields(semantics.SemanticsData.__proto__),
    flags: dart.finalFieldType(core.int),
    actions: dart.finalFieldType(core.int),
    attributedLabel: dart.finalFieldType(semantics.AttributedString),
    attributedValue: dart.finalFieldType(semantics.AttributedString),
    attributedIncreasedValue: dart.finalFieldType(semantics.AttributedString),
    attributedDecreasedValue: dart.finalFieldType(semantics.AttributedString),
    attributedHint: dart.finalFieldType(semantics.AttributedString),
    tooltip: dart.finalFieldType(core.String),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    textSelection: dart.finalFieldType(dart.nullable(text_editing.TextSelection)),
    scrollChildCount: dart.finalFieldType(dart.nullable(core.int)),
    scrollIndex: dart.finalFieldType(dart.nullable(core.int)),
    scrollPosition: dart.finalFieldType(dart.nullable(core.double)),
    scrollExtentMax: dart.finalFieldType(dart.nullable(core.double)),
    scrollExtentMin: dart.finalFieldType(dart.nullable(core.double)),
    platformViewId: dart.finalFieldType(dart.nullable(core.int)),
    maxValueLength: dart.finalFieldType(dart.nullable(core.int)),
    currentValueLength: dart.finalFieldType(dart.nullable(core.int)),
    rect: dart.finalFieldType(ui.Rect),
    tags: dart.finalFieldType(dart.nullable(core.Set$(semantics.SemanticsTag))),
    transform: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    elevation: dart.finalFieldType(core.double),
    thickness: dart.finalFieldType(core.double),
    customSemanticsActionIds: dart.finalFieldType(dart.nullable(core.List$(core.int)))
  }));
  dart.defineExtensionMethods(semantics.SemanticsData, ['_equals']);
  dart.defineExtensionAccessors(semantics.SemanticsData, ['hashCode']);
  var key$ = dart.privateName(semantics, "SemanticsNode.key");
  var parentSemanticsClipRect = dart.privateName(semantics, "SemanticsNode.parentSemanticsClipRect");
  var parentPaintClipRect = dart.privateName(semantics, "SemanticsNode.parentPaintClipRect");
  var elevationAdjustment = dart.privateName(semantics, "SemanticsNode.elevationAdjustment");
  var indexInParent = dart.privateName(semantics, "SemanticsNode.indexInParent");
  var tags = dart.privateName(semantics, "SemanticsNode.tags");
  var _transform = dart.privateName(semantics, "_transform");
  var _rect = dart.privateName(semantics, "_rect");
  var _isMergedIntoParent = dart.privateName(semantics, "_isMergedIntoParent");
  var _mergeAllDescendantsIntoThisNode = dart.privateName(semantics, "_mergeAllDescendantsIntoThisNode");
  var _children = dart.privateName(semantics, "_children");
  var __SemanticsNode__debugPreviousSnapshot = dart.privateName(semantics, "_#SemanticsNode#_debugPreviousSnapshot");
  var _dead = dart.privateName(semantics, "_dead");
  var _dirty = dart.privateName(semantics, "_dirty");
  var _actions = dart.privateName(semantics, "_actions");
  var _customSemanticsActions = dart.privateName(semantics, "_customSemanticsActions");
  var _actionsAsBits = dart.privateName(semantics, "_actionsAsBits");
  var _flags = dart.privateName(semantics, "_flags");
  var _attributedLabel = dart.privateName(semantics, "_attributedLabel");
  var _attributedValue = dart.privateName(semantics, "_attributedValue");
  var _attributedIncreasedValue = dart.privateName(semantics, "_attributedIncreasedValue");
  var _attributedDecreasedValue = dart.privateName(semantics, "_attributedDecreasedValue");
  var _attributedHint = dart.privateName(semantics, "_attributedHint");
  var _tooltip = dart.privateName(semantics, "_tooltip");
  var _elevation = dart.privateName(semantics, "_elevation");
  var _thickness = dart.privateName(semantics, "_thickness");
  var _hintOverrides = dart.privateName(semantics, "_hintOverrides");
  var _textDirection = dart.privateName(semantics, "_textDirection");
  var _sortKey = dart.privateName(semantics, "_sortKey");
  var _textSelection = dart.privateName(semantics, "_textSelection");
  var _isMultiline = dart.privateName(semantics, "_isMultiline");
  var _scrollChildCount = dart.privateName(semantics, "_scrollChildCount");
  var _scrollIndex = dart.privateName(semantics, "_scrollIndex");
  var _scrollPosition = dart.privateName(semantics, "_scrollPosition");
  var _scrollExtentMax = dart.privateName(semantics, "_scrollExtentMax");
  var _scrollExtentMin = dart.privateName(semantics, "_scrollExtentMin");
  var _platformViewId = dart.privateName(semantics, "_platformViewId");
  var _maxValueLength = dart.privateName(semantics, "_maxValueLength");
  var _currentValueLength = dart.privateName(semantics, "_currentValueLength");
  var _id = dart.privateName(semantics, "_id");
  var _showOnScreen = dart.privateName(semantics, "_showOnScreen");
  var _markDirty = dart.privateName(semantics, "_markDirty");
  var _debugPreviousSnapshot = dart.privateName(semantics, "_debugPreviousSnapshot");
  var _replaceChildren = dart.privateName(semantics, "_replaceChildren");
  var _visitDescendants = dart.privateName(semantics, "_visitDescendants");
  var _nodes = dart.privateName(semantics, "_nodes");
  var _detachedNodes = dart.privateName(semantics, "_detachedNodes");
  var _dirtyNodes = dart.privateName(semantics, "_dirtyNodes");
  var _isDifferentFromCurrentSemanticAnnotation = dart.privateName(semantics, "_isDifferentFromCurrentSemanticAnnotation");
  var _canPerformAction = dart.privateName(semantics, "_canPerformAction");
  var _childrenInTraversalOrder = dart.privateName(semantics, "_childrenInTraversalOrder");
  var _addToUpdate = dart.privateName(semantics, "_addToUpdate");
  const AbstractNode_DiagnosticableTreeMixin$36 = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  semantics.SemanticsNode = class SemanticsNode extends AbstractNode_DiagnosticableTreeMixin$36 {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get parentSemanticsClipRect() {
      return this[parentSemanticsClipRect];
    }
    set parentSemanticsClipRect(value) {
      this[parentSemanticsClipRect] = value;
    }
    get parentPaintClipRect() {
      return this[parentPaintClipRect];
    }
    set parentPaintClipRect(value) {
      this[parentPaintClipRect] = value;
    }
    get elevationAdjustment() {
      return this[elevationAdjustment];
    }
    set elevationAdjustment(value) {
      this[elevationAdjustment] = value;
    }
    get indexInParent() {
      return this[indexInParent];
    }
    set indexInParent(value) {
      this[indexInParent] = value;
    }
    get tags() {
      return this[tags];
    }
    set tags(value) {
      this[tags] = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let showOnScreen = opts && 'showOnScreen' in opts ? opts.showOnScreen : null;
      return new semantics.SemanticsNode.new({key: key, showOnScreen: showOnScreen});
    }
    static ['_#root#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let showOnScreen = opts && 'showOnScreen' in opts ? opts.showOnScreen : null;
      let owner = opts && 'owner' in opts ? opts.owner : null;
      return new semantics.SemanticsNode.root({key: key, showOnScreen: showOnScreen, owner: owner});
    }
    static _generateNewId() {
      semantics.SemanticsNode._lastIdentifier = (semantics.SemanticsNode._lastIdentifier + 1)[$modulo](65535);
      return semantics.SemanticsNode._lastIdentifier;
    }
    get id() {
      return this[_id];
    }
    get transform() {
      return this[_transform];
    }
    set transform(value) {
      if (!matrix_utils.MatrixUtils.matrixEquals(this[_transform], value)) {
        this[_transform] = value == null || matrix_utils.MatrixUtils.isIdentity(value) ? null : value;
        this[_markDirty]();
      }
    }
    get rect() {
      return this[_rect];
    }
    set rect(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 1604, 12, "value != null");
      if (!value.isFinite) dart.assertFailed(dart.str(this) + " (with " + dart.str(this.owner) + ") tried to set a non-finite rect.", I[1], 1605, 12, "value.isFinite");
      if (!this[_rect]._equals(value)) {
        this[_rect] = value;
        this[_markDirty]();
      }
    }
    get isInvisible() {
      return !this.isMergedIntoParent && this.rect.isEmpty;
    }
    get isMergedIntoParent() {
      return this[_isMergedIntoParent];
    }
    set isMergedIntoParent(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 1689, 12, "value != null");
      if (this[_isMergedIntoParent] === value) {
        return;
      }
      this[_isMergedIntoParent] = value;
      this[_markDirty]();
    }
    get isPartOfNodeMerging() {
      return this.mergeAllDescendantsIntoThisNode || this.isMergedIntoParent;
    }
    get mergeAllDescendantsIntoThisNode() {
      return this[_mergeAllDescendantsIntoThisNode];
    }
    get [_debugPreviousSnapshot]() {
      let t2;
      t2 = this[__SemanticsNode__debugPreviousSnapshot];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_debugPreviousSnapshot")) : t2;
    }
    set [_debugPreviousSnapshot](library$32package$58flutter$47src$47semantics$47semantics$46dart$58$58_debugPreviousSnapshot$35param) {
      this[__SemanticsNode__debugPreviousSnapshot] = library$32package$58flutter$47src$47semantics$47semantics$46dart$58$58_debugPreviousSnapshot$35param;
    }
    [_replaceChildren](newChildren) {
      let t3;
      if (!!newChildren[$any](dart.fn(child => child[$_equals](this), T.SemanticsNodeTobool()))) dart.assertFailed(null, I[1], 1724, 12, "!newChildren.any((SemanticsNode child) => child == this)");
      if (!dart.fn(() => {
        if (newChildren === this[_children]) {
          let mutationErrors = T.JSArrayOfDiagnosticsNode().of([]);
          if (newChildren[$length] !== this[_debugPreviousSnapshot][$length]) {
            mutationErrors[$add](new assertions.ErrorDescription.new("The list's length has changed from " + dart.str(this[_debugPreviousSnapshot][$length]) + " " + "to " + dart.str(newChildren[$length]) + "."));
          } else {
            for (let i = 0; i < newChildren[$length]; i = i + 1) {
              if (newChildren[$_get](i) !== this[_debugPreviousSnapshot][$_get](i)) {
                if (mutationErrors[$isNotEmpty]) {
                  mutationErrors[$add](new assertions.ErrorSpacer.new());
                }
                mutationErrors[$add](new assertions.ErrorDescription.new("Child node at position " + dart.str(i) + " was replaced:"));
                mutationErrors[$add](newChildren[$_get](i).toDiagnosticsNode({name: "Previous child", style: diagnostics.DiagnosticsTreeStyle.singleLine}));
                mutationErrors[$add](this[_debugPreviousSnapshot][$_get](i).toDiagnosticsNode({name: "New child", style: diagnostics.DiagnosticsTreeStyle.singleLine}));
              }
            }
          }
          if (mutationErrors[$isNotEmpty]) {
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t2 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Failed to replace child semantics nodes because the list of `SemanticsNode`s was mutated."), new assertions.ErrorHint.new("Instead of mutating the existing list, create a new list containing the desired `SemanticsNode`s."), new assertions.ErrorDescription.new("Error details:")]);
              t2[$addAll](mutationErrors);
              return t2;
            })()));
          }
        }
        if (!(!newChildren[$any](dart.fn(node => node.isMergedIntoParent, T.SemanticsNodeTobool())) || this.isPartOfNodeMerging)) dart.assertFailed(null, I[1], 1754, 14, "!newChildren.any((SemanticsNode node) => node.isMergedIntoParent) || isPartOfNodeMerging");
        this[_debugPreviousSnapshot] = T.ListOfSemanticsNode().of(newChildren);
        let ancestor = this;
        while (semantics.SemanticsNode.is(ancestor.parent)) {
          ancestor = dart.nullCheck(ancestor.parent);
        }
        if (!!newChildren[$any](dart.fn(child => child[$_equals](ancestor), T.SemanticsNodeTobool()))) dart.assertFailed(null, I[1], 1762, 14, "!newChildren.any((SemanticsNode child) => child == ancestor)");
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1725, 12, "() {\n      if (identical(newChildren, _children)) {\n        final List<DiagnosticsNode> mutationErrors = <DiagnosticsNode>[];\n        if (newChildren.length != _debugPreviousSnapshot.length) {\n          mutationErrors.add(ErrorDescription(\n            \"The list's length has changed from ${_debugPreviousSnapshot.length} \"\n            'to ${newChildren.length}.',\n          ));\n        } else {\n          for (int i = 0; i < newChildren.length; i++) {\n            if (!identical(newChildren[i], _debugPreviousSnapshot[i])) {\n              if (mutationErrors.isNotEmpty) {\n                mutationErrors.add(ErrorSpacer());\n              }\n              mutationErrors.add(ErrorDescription('Child node at position $i was replaced:'));\n              mutationErrors.add(newChildren[i].toDiagnosticsNode(name: 'Previous child', style: DiagnosticsTreeStyle.singleLine));\n              mutationErrors.add(_debugPreviousSnapshot[i].toDiagnosticsNode(name: 'New child', style: DiagnosticsTreeStyle.singleLine));\n            }\n          }\n        }\n        if (mutationErrors.isNotEmpty) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('Failed to replace child semantics nodes because the list of `SemanticsNode`s was mutated.'),\n            ErrorHint('Instead of mutating the existing list, create a new list containing the desired `SemanticsNode`s.'),\n            ErrorDescription('Error details:'),\n            ...mutationErrors,\n          ]);\n        }\n      }\n      assert(!newChildren.any((SemanticsNode node) => node.isMergedIntoParent) || isPartOfNodeMerging);\n\n      _debugPreviousSnapshot = List<SemanticsNode>.of(newChildren);\n\n      SemanticsNode ancestor = this;\n      while (ancestor.parent is SemanticsNode) {\n        ancestor = ancestor.parent!;\n      }\n      assert(!newChildren.any((SemanticsNode child) => child == ancestor));\n      return true;\n    }()");
      if (!dart.fn(() => {
        let seenChildren = T.LinkedHashSetOfSemanticsNode().new();
        for (let child of newChildren) {
          if (!seenChildren.add(child)) dart.assertFailed(null, I[1], 1768, 16, "seenChildren.add(child)");
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1765, 12, "() {\n      final Set<SemanticsNode> seenChildren = <SemanticsNode>{};\n      for (final SemanticsNode child in newChildren) {\n        assert(seenChildren.add(child));\n      } // check for duplicate adds\n      return true;\n    }()");
      if (this[_children] != null) {
        for (let child of dart.nullCheck(this[_children])) {
          child[_dead] = true;
        }
      }
      for (let child of newChildren) {
        if (!!child.isInvisible) dart.assertFailed("Child " + dart.str(child) + " is invisible and should not be added as a child of " + dart.str(this) + ".", I[1], 1780, 14, "!child.isInvisible");
        child[_dead] = false;
      }
      let sawChange = false;
      if (this[_children] != null) {
        for (let child of dart.nullCheck(this[_children])) {
          if (child[_dead]) {
            if (dart.equals(child.parent, this)) {
              this.dropChild(child);
            }
            sawChange = true;
          }
        }
      }
      for (let child of newChildren) {
        if (!dart.equals(child.parent, this)) {
          if (child.parent != null) {
            t3 = child.parent;
            t3 == null ? null : t3.dropChild(child);
          }
          if (!!child.attached) dart.assertFailed(null, I[1], 1806, 16, "!child.attached");
          this.adoptChild(child);
          sawChange = true;
        }
      }
      if (!sawChange && this[_children] != null) {
        if (!(newChildren !== null)) dart.assertFailed(null, I[1], 1812, 14, "newChildren != null");
        if (!(newChildren[$length] === dart.nullCheck(this[_children])[$length])) dart.assertFailed(null, I[1], 1813, 14, "newChildren.length == _children!.length");
        for (let i = 0; i < dart.nullCheck(this[_children])[$length]; i = i + 1) {
          if (dart.nullCheck(this[_children])[$_get](i).id !== newChildren[$_get](i).id) {
            sawChange = true;
            break;
          }
        }
      }
      this[_children] = newChildren;
      if (sawChange) {
        this[_markDirty]();
      }
    }
    get hasChildren() {
      let t3, t3$;
      t3$ = (t3 = this[_children], t3 == null ? null : t3[$isNotEmpty]);
      return t3$ == null ? false : t3$;
    }
    get childrenCount() {
      return this.hasChildren ? dart.nullCheck(this[_children])[$length] : 0;
    }
    visitChildren(visitor) {
      if (this[_children] != null) {
        for (let child of dart.nullCheck(this[_children])) {
          if (!visitor(child)) {
            return;
          }
        }
      }
    }
    [_visitDescendants](visitor) {
      if (this[_children] != null) {
        for (let child of dart.nullCheck(this[_children])) {
          if (!visitor(child) || !child[_visitDescendants](visitor)) {
            return false;
          }
        }
      }
      return true;
    }
    get owner() {
      return T.SemanticsOwnerN().as(super.owner);
    }
    get parent() {
      return T.SemanticsNodeN().as(super.parent);
    }
    redepthChildren() {
      let t3;
      t3 = this[_children];
      t3 == null ? null : t3[$forEach](dart.bind(this, 'redepthChild'));
    }
    attach(owner) {
      semantics.SemanticsOwner.as(owner);
      super.attach(owner);
      while (owner[_nodes][$containsKey](this.id)) {
        this[_id] = semantics.SemanticsNode._generateNewId();
      }
      owner[_nodes][$_set](this.id, this);
      owner[_detachedNodes].remove(this);
      if (this[_dirty]) {
        this[_dirty] = false;
        this[_markDirty]();
      }
      if (this[_children] != null) {
        for (let child of dart.nullCheck(this[_children])) {
          child.attach(owner);
        }
      }
    }
    detach() {
      if (!dart.nullCheck(this.owner)[_nodes][$containsKey](this.id)) dart.assertFailed(null, I[1], 1902, 12, "owner!._nodes.containsKey(id)");
      if (!!dart.nullCheck(this.owner)[_detachedNodes].contains(this)) dart.assertFailed(null, I[1], 1903, 12, "!owner!._detachedNodes.contains(this)");
      dart.nullCheck(this.owner)[_nodes][$remove](this.id);
      dart.nullCheck(this.owner)[_detachedNodes].add(this);
      super.detach();
      if (!(this.owner == null)) dart.assertFailed(null, I[1], 1907, 12, "owner == null");
      if (this[_children] != null) {
        for (let child of dart.nullCheck(this[_children])) {
          if (dart.equals(child.parent, this)) {
            child.detach();
          }
        }
      }
      this[_markDirty]();
    }
    [_markDirty]() {
      if (this[_dirty]) {
        return;
      }
      this[_dirty] = true;
      if (this.attached) {
        if (!!dart.nullCheck(this.owner)[_detachedNodes].contains(this)) dart.assertFailed(null, I[1], 1932, 14, "!owner!._detachedNodes.contains(this)");
        dart.nullCheck(this.owner)[_dirtyNodes].add(this);
      }
    }
    [_isDifferentFromCurrentSemanticAnnotation](config) {
      return !this[_attributedLabel]._equals(config.attributedLabel) || !this[_attributedHint]._equals(config.attributedHint) || this[_elevation] !== config.elevation || this[_thickness] !== config.thickness || !this[_attributedValue]._equals(config.attributedValue) || !this[_attributedIncreasedValue]._equals(config.attributedIncreasedValue) || !this[_attributedDecreasedValue]._equals(config.attributedDecreasedValue) || this[_tooltip] !== config.tooltip || this[_flags] !== config[_flags] || this[_textDirection] != config.textDirection || !dart.equals(this[_sortKey], config[_sortKey]) || !dart.equals(this[_textSelection], config[_textSelection]) || this[_scrollPosition] != config[_scrollPosition] || this[_scrollExtentMax] != config[_scrollExtentMax] || this[_scrollExtentMin] != config[_scrollExtentMin] || this[_actionsAsBits] !== config[_actionsAsBits] || this.indexInParent != config.indexInParent || this.platformViewId != config.platformViewId || this[_maxValueLength] != config[_maxValueLength] || this[_currentValueLength] != config[_currentValueLength] || this[_mergeAllDescendantsIntoThisNode] !== config.isMergingSemanticsOfDescendants;
    }
    isTagged(tag) {
      return this.tags != null && dart.nullCheck(this.tags).contains(tag);
    }
    hasFlag(flag) {
      return (this[_flags] & flag.index) !== 0;
    }
    get label() {
      return this[_attributedLabel].string;
    }
    get attributedLabel() {
      return this[_attributedLabel];
    }
    get value() {
      return this[_attributedValue].string;
    }
    get attributedValue() {
      return this[_attributedValue];
    }
    get increasedValue() {
      return this[_attributedIncreasedValue].string;
    }
    get attributedIncreasedValue() {
      return this[_attributedIncreasedValue];
    }
    get decreasedValue() {
      return this[_attributedDecreasedValue].string;
    }
    get attributedDecreasedValue() {
      return this[_attributedDecreasedValue];
    }
    get hint() {
      return this[_attributedHint].string;
    }
    get attributedHint() {
      return this[_attributedHint];
    }
    get tooltip() {
      return this[_tooltip];
    }
    get elevation() {
      return this[_elevation];
    }
    get thickness() {
      return this[_thickness];
    }
    get hintOverrides() {
      return this[_hintOverrides];
    }
    get textDirection() {
      return this[_textDirection];
    }
    get sortKey() {
      return this[_sortKey];
    }
    get textSelection() {
      return this[_textSelection];
    }
    get isMultiline() {
      return this[_isMultiline];
    }
    get scrollChildCount() {
      return this[_scrollChildCount];
    }
    get scrollIndex() {
      return this[_scrollIndex];
    }
    get scrollPosition() {
      return this[_scrollPosition];
    }
    get scrollExtentMax() {
      return this[_scrollExtentMax];
    }
    get scrollExtentMin() {
      return this[_scrollExtentMin];
    }
    get platformViewId() {
      return this[_platformViewId];
    }
    get maxValueLength() {
      return this[_maxValueLength];
    }
    get currentValueLength() {
      return this[_currentValueLength];
    }
    [_canPerformAction](action) {
      return this[_actions][$containsKey](action);
    }
    updateWith(opts) {
      let t3;
      let config = opts && 'config' in opts ? opts.config : null;
      let childrenInInversePaintOrder = opts && 'childrenInInversePaintOrder' in opts ? opts.childrenInInversePaintOrder : null;
      config == null ? config = semantics.SemanticsNode._kEmptyConfig : null;
      if (this[_isDifferentFromCurrentSemanticAnnotation](config)) {
        this[_markDirty]();
      }
      if (!(config.platformViewId == null || childrenInInversePaintOrder == null || childrenInInversePaintOrder[$isEmpty])) dart.assertFailed("SemanticsNodes with children must not specify a platformViewId.", I[1], 2280, 7, "config.platformViewId == null || childrenInInversePaintOrder == null || childrenInInversePaintOrder.isEmpty");
      this[_attributedLabel] = config.attributedLabel;
      this[_attributedValue] = config.attributedValue;
      this[_attributedIncreasedValue] = config.attributedIncreasedValue;
      this[_attributedDecreasedValue] = config.attributedDecreasedValue;
      this[_attributedHint] = config.attributedHint;
      this[_tooltip] = config.tooltip;
      this[_hintOverrides] = config.hintOverrides;
      this[_elevation] = config.elevation;
      this[_thickness] = config.thickness;
      this[_flags] = config[_flags];
      this[_textDirection] = config.textDirection;
      this[_sortKey] = config.sortKey;
      this[_actions] = T.LinkedHashMapOfSemanticsAction$ObjectNTovoid().of(config[_actions]);
      this[_customSemanticsActions] = T.LinkedHashMapOfCustomSemanticsAction$VoidTovoid().of(config[_customSemanticsActions]);
      this[_actionsAsBits] = config[_actionsAsBits];
      this[_textSelection] = config[_textSelection];
      this[_isMultiline] = config.isMultiline;
      this[_scrollPosition] = config[_scrollPosition];
      this[_scrollExtentMax] = config[_scrollExtentMax];
      this[_scrollExtentMin] = config[_scrollExtentMin];
      this[_mergeAllDescendantsIntoThisNode] = config.isMergingSemanticsOfDescendants;
      this[_scrollChildCount] = config.scrollChildCount;
      this[_scrollIndex] = config.scrollIndex;
      this.indexInParent = config.indexInParent;
      this[_platformViewId] = config[_platformViewId];
      this[_maxValueLength] = config[_maxValueLength];
      this[_currentValueLength] = config[_currentValueLength];
      this[_replaceChildren]((t3 = childrenInInversePaintOrder, t3 == null ? C[3] || CT.C3 : t3));
      if (!(!this[_canPerformAction](ui.SemanticsAction.increase) || this.value === "" === (this.increasedValue === ""))) dart.assertFailed("A SemanticsNode with action \"increase\" needs to be annotated with either both \"value\" and \"increasedValue\" or neither", I[1], 2314, 7, "!_canPerformAction(SemanticsAction.increase) || (value == '') == (increasedValue == '')");
      if (!(!this[_canPerformAction](ui.SemanticsAction.decrease) || this.value === "" === (this.decreasedValue === ""))) dart.assertFailed("A SemanticsNode with action \"increase\" needs to be annotated with either both \"value\" and \"decreasedValue\" or neither", I[1], 2318, 7, "!_canPerformAction(SemanticsAction.decrease) || (value == '') == (decreasedValue == '')");
    }
    getSemanticsData() {
      let t3;
      let flags = this[_flags];
      let actions = this[_actionsAsBits];
      let attributedLabel = this[_attributedLabel];
      let attributedValue = this[_attributedValue];
      let attributedIncreasedValue = this[_attributedIncreasedValue];
      let attributedDecreasedValue = this[_attributedDecreasedValue];
      let attributedHint = this[_attributedHint];
      let tooltip = this[_tooltip];
      let textDirection = this[_textDirection];
      let mergedTags = this.tags == null ? null : T.LinkedHashSetOfSemanticsTag().of(dart.nullCheck(this.tags));
      let textSelection = this[_textSelection];
      let scrollChildCount = this[_scrollChildCount];
      let scrollIndex = this[_scrollIndex];
      let scrollPosition = this[_scrollPosition];
      let scrollExtentMax = this[_scrollExtentMax];
      let scrollExtentMin = this[_scrollExtentMin];
      let platformViewId = this[_platformViewId];
      let maxValueLength = this[_maxValueLength];
      let currentValueLength = this[_currentValueLength];
      let elevation = this[_elevation];
      let thickness = this[_thickness];
      let customSemanticsActionIds = T.LinkedHashSetOfint().new();
      for (let action of this[_customSemanticsActions][$keys]) {
        customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
      }
      if (this.hintOverrides != null) {
        if (dart.nullCheck(this.hintOverrides).onTapHint != null) {
          let action = new semantics.CustomSemanticsAction.overridingAction({hint: dart.nullCheck(dart.nullCheck(this.hintOverrides).onTapHint), action: ui.SemanticsAction.tap});
          customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
        }
        if (dart.nullCheck(this.hintOverrides).onLongPressHint != null) {
          let action = new semantics.CustomSemanticsAction.overridingAction({hint: dart.nullCheck(dart.nullCheck(this.hintOverrides).onLongPressHint), action: ui.SemanticsAction.longPress});
          customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
        }
      }
      if (this.mergeAllDescendantsIntoThisNode) {
        this[_visitDescendants](dart.fn(node => {
          if (!node.isMergedIntoParent) dart.assertFailed(null, I[1], 2374, 16, "node.isMergedIntoParent");
          flags = (flags | node[_flags]) >>> 0;
          actions = (actions | node[_actionsAsBits]) >>> 0;
          textDirection == null ? textDirection = node[_textDirection] : null;
          textSelection == null ? textSelection = node[_textSelection] : null;
          scrollChildCount == null ? scrollChildCount = node[_scrollChildCount] : null;
          scrollIndex == null ? scrollIndex = node[_scrollIndex] : null;
          scrollPosition == null ? scrollPosition = node[_scrollPosition] : null;
          scrollExtentMax == null ? scrollExtentMax = node[_scrollExtentMax] : null;
          scrollExtentMin == null ? scrollExtentMin = node[_scrollExtentMin] : null;
          platformViewId == null ? platformViewId = node[_platformViewId] : null;
          maxValueLength == null ? maxValueLength = node[_maxValueLength] : null;
          currentValueLength == null ? currentValueLength = node[_currentValueLength] : null;
          if (attributedValue === null || attributedValue.string === "") {
            attributedValue = node[_attributedValue];
          }
          if (attributedIncreasedValue === null || attributedIncreasedValue.string === "") {
            attributedIncreasedValue = node[_attributedIncreasedValue];
          }
          if (attributedDecreasedValue === null || attributedDecreasedValue.string === "") {
            attributedDecreasedValue = node[_attributedDecreasedValue];
          }
          if (tooltip === "") {
            tooltip = node[_tooltip];
          }
          if (node.tags != null) {
            mergedTags == null ? mergedTags = T.LinkedHashSetOfSemanticsTag().new() : null;
            dart.nullCheck(mergedTags).addAll(dart.nullCheck(node.tags));
          }
          for (let action of this[_customSemanticsActions][$keys]) {
            customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
          }
          if (node.hintOverrides != null) {
            if (dart.nullCheck(node.hintOverrides).onTapHint != null) {
              let action = new semantics.CustomSemanticsAction.overridingAction({hint: dart.nullCheck(dart.nullCheck(node.hintOverrides).onTapHint), action: ui.SemanticsAction.tap});
              customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
            }
            if (dart.nullCheck(node.hintOverrides).onLongPressHint != null) {
              let action = new semantics.CustomSemanticsAction.overridingAction({hint: dart.nullCheck(dart.nullCheck(node.hintOverrides).onLongPressHint), action: ui.SemanticsAction.longPress});
              customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
            }
          }
          attributedLabel = semantics._concatAttributedString({thisAttributedString: attributedLabel, thisTextDirection: textDirection, otherAttributedString: node[_attributedLabel], otherTextDirection: node[_textDirection]});
          attributedHint = semantics._concatAttributedString({thisAttributedString: attributedHint, thisTextDirection: textDirection, otherAttributedString: node[_attributedHint], otherTextDirection: node[_textDirection]});
          thickness = math.max(core.double, thickness, node[_thickness] + node[_elevation]);
          return true;
        }, T.SemanticsNodeTobool()));
      }
      return new semantics.SemanticsData.new({flags: flags, actions: actions, attributedLabel: attributedLabel, attributedValue: attributedValue, attributedIncreasedValue: attributedIncreasedValue, attributedDecreasedValue: attributedDecreasedValue, attributedHint: attributedHint, tooltip: tooltip, textDirection: textDirection, rect: this.rect, transform: this.transform, elevation: elevation, thickness: thickness, tags: mergedTags, textSelection: textSelection, scrollChildCount: scrollChildCount, scrollIndex: scrollIndex, scrollPosition: scrollPosition, scrollExtentMax: scrollExtentMax, scrollExtentMin: scrollExtentMin, platformViewId: platformViewId, maxValueLength: maxValueLength, currentValueLength: currentValueLength, customSemanticsActionIds: (t3 = customSemanticsActionIds[$toList](), (() => {
          t3[$sort]();
          return t3;
        })())});
    }
    static _initIdentityTransform() {
      return vector_math_64.Matrix4.identity().storage;
    }
    [_addToUpdate](builder, customSemanticsActionIdsUpdate) {
      let t3, t3$, t3$0, t3$1, t3$2, t3$3, t3$4, t3$5, t3$6, t3$7, t3$8, t3$9, t3$10;
      if (!this[_dirty]) dart.assertFailed(null, I[1], 2478, 12, "_dirty");
      let data = this.getSemanticsData();
      let childrenInTraversalOrder = null;
      let childrenInHitTestOrder = null;
      if (!this.hasChildren || this.mergeAllDescendantsIntoThisNode) {
        childrenInTraversalOrder = semantics.SemanticsNode._kEmptyChildList;
        childrenInHitTestOrder = semantics.SemanticsNode._kEmptyChildList;
      } else {
        let childCount = dart.nullCheck(this[_children])[$length];
        let sortedChildren = this[_childrenInTraversalOrder]();
        childrenInTraversalOrder = _native_typed_data.NativeInt32List.new(childCount);
        for (let i = 0; i < childCount; i = i + 1) {
          childrenInTraversalOrder[$_set](i, sortedChildren[$_get](i).id);
        }
        childrenInHitTestOrder = _native_typed_data.NativeInt32List.new(childCount);
        for (let i = childCount - 1; i >= 0; i = i - 1) {
          childrenInHitTestOrder[$_set](i, dart.nullCheck(this[_children])[$_get](childCount - i - 1).id);
        }
      }
      let customSemanticsActionIds = null;
      if (dart.test((t3$ = (t3 = data.customSemanticsActionIds, t3 == null ? null : t3[$isNotEmpty]), t3$ == null ? false : t3$))) {
        customSemanticsActionIds = _native_typed_data.NativeInt32List.new(dart.nullCheck(data.customSemanticsActionIds)[$length]);
        for (let i = 0; i < dart.nullCheck(data.customSemanticsActionIds)[$length]; i = i + 1) {
          customSemanticsActionIds[$_set](i, dart.nullCheck(data.customSemanticsActionIds)[$_get](i));
          customSemanticsActionIdsUpdate.add(dart.nullCheck(data.customSemanticsActionIds)[$_get](i));
        }
      }
      builder.updateNode({id: this.id, flags: data.flags, actions: data.actions, rect: data.rect, label: data.attributedLabel.string, labelAttributes: data.attributedLabel.attributes, value: data.attributedValue.string, valueAttributes: data.attributedValue.attributes, increasedValue: data.attributedIncreasedValue.string, increasedValueAttributes: data.attributedIncreasedValue.attributes, decreasedValue: data.attributedDecreasedValue.string, decreasedValueAttributes: data.attributedDecreasedValue.attributes, hint: data.attributedHint.string, hintAttributes: data.attributedHint.attributes, tooltip: data.tooltip, textDirection: data.textDirection, textSelectionBase: data.textSelection != null ? dart.nullCheck(data.textSelection).baseOffset : -1, textSelectionExtent: data.textSelection != null ? dart.nullCheck(data.textSelection).extentOffset : -1, platformViewId: (t3$0 = data.platformViewId, t3$0 == null ? -1 : t3$0), maxValueLength: (t3$1 = data.maxValueLength, t3$1 == null ? -1 : t3$1), currentValueLength: (t3$2 = data.currentValueLength, t3$2 == null ? -1 : t3$2), scrollChildren: (t3$3 = data.scrollChildCount, t3$3 == null ? 0 : t3$3), scrollIndex: (t3$4 = data.scrollIndex, t3$4 == null ? 0 : t3$4), scrollPosition: (t3$5 = data.scrollPosition, t3$5 == null ? 0 / 0 : t3$5), scrollExtentMax: (t3$6 = data.scrollExtentMax, t3$6 == null ? 0 / 0 : t3$6), scrollExtentMin: (t3$7 = data.scrollExtentMin, t3$7 == null ? 0 / 0 : t3$7), transform: (t3$9 = (t3$8 = data.transform, t3$8 == null ? null : t3$8.storage), t3$9 == null ? semantics.SemanticsNode._kIdentityTransform : t3$9), elevation: data.elevation, thickness: data.thickness, childrenInTraversalOrder: childrenInTraversalOrder, childrenInHitTestOrder: childrenInHitTestOrder, additionalActions: (t3$10 = customSemanticsActionIds, t3$10 == null ? semantics.SemanticsNode._kEmptyCustomSemanticsActionsList : t3$10)});
      this[_dirty] = false;
    }
    [_childrenInTraversalOrder]() {
      let inheritedTextDirection = this.textDirection;
      let ancestor = this.parent;
      while (inheritedTextDirection == null && ancestor != null) {
        inheritedTextDirection = ancestor.textDirection;
        ancestor = ancestor.parent;
      }
      let childrenInDefaultOrder = null;
      if (inheritedTextDirection != null) {
        childrenInDefaultOrder = semantics._childrenInDefaultOrder(dart.nullCheck(this[_children]), inheritedTextDirection);
      } else {
        childrenInDefaultOrder = this[_children];
      }
      let everythingSorted = T.JSArrayOf_TraversalSortNode().of([]);
      let sortNodes = T.JSArrayOf_TraversalSortNode().of([]);
      let lastSortKey = null;
      for (let position = 0; position < dart.nullCheck(childrenInDefaultOrder)[$length]; position = position + 1) {
        let child = childrenInDefaultOrder[$_get](position);
        let sortKey = child.sortKey;
        lastSortKey = position > 0 ? childrenInDefaultOrder[$_get](position - 1).sortKey : null;
        let isCompatibleWithPreviousSortKey = position === 0 || dart.runtimeType(sortKey)._equals(dart.runtimeType(lastSortKey)) && (sortKey == null || sortKey.name == dart.nullCheck(lastSortKey).name);
        if (!isCompatibleWithPreviousSortKey && sortNodes[$isNotEmpty]) {
          if (lastSortKey != null) {
            sortNodes[$sort]();
          }
          everythingSorted[$addAll](sortNodes);
          sortNodes[$clear]();
        }
        sortNodes[$add](new semantics._TraversalSortNode.new({node: child, sortKey: sortKey, position: position}));
      }
      if (lastSortKey != null) {
        sortNodes[$sort]();
      }
      everythingSorted[$addAll](sortNodes);
      return everythingSorted[$map](semantics.SemanticsNode, dart.fn(sortNode => sortNode.node, T._TraversalSortNodeToSemanticsNode()))[$toList]();
    }
    sendEvent(event) {
      if (!this.attached) {
        return;
      }
      system_channels.SystemChannels.accessibility.send(event.toMap({nodeId: this.id}));
    }
    toStringShort() {
      return object.objectRuntimeType(this, "SemanticsNode") + "#" + dart.str(this.id);
    }
    debugFillProperties(properties) {
      let t3, t3$, t3$0, t3$1;
      super.debugFillProperties(properties);
      let hideOwner = true;
      if (this[_dirty]) {
        let inDirtyNodes = this.owner != null && dart.nullCheck(this.owner)[_dirtyNodes].contains(this);
        properties.add(new diagnostics.FlagProperty.new("inDirtyNodes", {value: inDirtyNodes, ifTrue: "dirty", ifFalse: "STALE"}));
        hideOwner = inDirtyNodes;
      }
      properties.add(new (T.DiagnosticsPropertyOfSemanticsOwner()).new("owner", this.owner, {level: hideOwner ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info}));
      properties.add(new diagnostics.FlagProperty.new("isMergedIntoParent", {value: this.isMergedIntoParent, ifTrue: "merged up ⬆️"}));
      properties.add(new diagnostics.FlagProperty.new("mergeAllDescendantsIntoThisNode", {value: this.mergeAllDescendantsIntoThisNode, ifTrue: "merge boundary ⛔️"}));
      let offset = this.transform != null ? matrix_utils.MatrixUtils.getAsTranslation(dart.nullCheck(this.transform)) : null;
      if (offset != null) {
        properties.add(new (T.DiagnosticsPropertyOfRect()).new("rect", this.rect.shift(offset), {showName: false}));
      } else {
        let scale = this.transform != null ? matrix_utils.MatrixUtils.getAsScale(dart.nullCheck(this.transform)) : null;
        let description = null;
        if (scale != null) {
          description = dart.str(this.rect) + " scaled by " + scale[$toStringAsFixed](1) + "x";
        } else if (this.transform != null && !matrix_utils.MatrixUtils.isIdentity(dart.nullCheck(this.transform))) {
          let matrix = dart.toString(this.transform)[$split]("\n")[$take](4)[$map](core.String, dart.fn(line => line[$substring](4), T.StringToString()))[$join]("; ");
          description = dart.str(this.rect) + " with transform [" + matrix + "]";
        }
        properties.add(new (T.DiagnosticsPropertyOfRect()).new("rect", this.rect, {description: description, showName: false}));
      }
      properties.add(new (T.IterablePropertyOfString()).new("tags", (t3 = this.tags, t3 == null ? null : t3[$map](core.String, dart.fn(tag => tag.name, T.SemanticsTagToString()))), {defaultValue: null}));
      let actions = (t3$ = this[_actions][$keys][$map](core.String, dart.fn(action => diagnostics.describeEnum(action), T.SemanticsActionToString()))[$toList](), (() => {
        t3$[$sort]();
        return t3$;
      })());
      let customSemanticsActions = this[_customSemanticsActions][$keys][$map](T.StringN(), dart.fn(action => action.label, T.CustomSemanticsActionToStringN()))[$toList]();
      properties.add(new (T.IterablePropertyOfString()).new("actions", actions, {ifEmpty: null}));
      properties.add(new (T.IterablePropertyOfStringN()).new("customActions", customSemanticsActions, {ifEmpty: null}));
      let flags = ui.SemanticsFlag.values[$values][$where](dart.fn(flag => this.hasFlag(flag), T.SemanticsFlagTobool()))[$map](core.String, dart.fn(flag => flag.toString()[$substring]("SemanticsFlag.".length), T.SemanticsFlagToString()))[$toList]();
      properties.add(new (T.IterablePropertyOfString()).new("flags", flags, {ifEmpty: null}));
      properties.add(new diagnostics.FlagProperty.new("isInvisible", {value: this.isInvisible, ifTrue: "invisible"}));
      properties.add(new diagnostics.FlagProperty.new("isHidden", {value: this.hasFlag(ui.SemanticsFlag.isHidden), ifTrue: "HIDDEN"}));
      properties.add(new semantics.AttributedStringProperty.new("label", this[_attributedLabel]));
      properties.add(new semantics.AttributedStringProperty.new("value", this[_attributedValue]));
      properties.add(new semantics.AttributedStringProperty.new("increasedValue", this[_attributedIncreasedValue]));
      properties.add(new semantics.AttributedStringProperty.new("decreasedValue", this[_attributedDecreasedValue]));
      properties.add(new semantics.AttributedStringProperty.new("hint", this[_attributedHint]));
      properties.add(new diagnostics.StringProperty.new("tooltip", this[_tooltip], {defaultValue: ""}));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this[_textDirection], {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfSemanticsSortKey()).new("sortKey", this.sortKey, {defaultValue: null}));
      if (dart.test((t3$1 = (t3$0 = this[_textSelection], t3$0 == null ? null : t3$0.isValid), t3$1 == null ? false : t3$1))) {
        properties.add(new diagnostics.MessageProperty.new("text selection", "[" + dart.str(dart.nullCheck(this[_textSelection]).start) + ", " + dart.str(dart.nullCheck(this[_textSelection]).end) + "]"));
      }
      properties.add(new diagnostics.IntProperty.new("platformViewId", this.platformViewId, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxValueLength", this.maxValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("currentValueLength", this.currentValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollChildren", this.scrollChildCount, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollIndex", this.scrollIndex, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMin", this.scrollExtentMin, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollPosition", this.scrollPosition, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMax", this.scrollExtentMax, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: 0.0}));
      properties.add(new diagnostics.DoubleProperty.new("thickness", this.thickness, {defaultValue: 0.0}));
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[4] || CT.C4;
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C[5] || CT.C5;
      if (!(childOrder !== null)) dart.assertFailed(null, I[1], 2691, 12, "childOrder != null");
      return this.toDiagnosticsNode({childOrder: childOrder}).toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : C[6] || CT.C6;
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C[5] || CT.C5;
      return new semantics._SemanticsDiagnosticableNode.new({name: name, value: this, style: style, childOrder: childOrder});
    }
    debugDescribeChildren(opts) {
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C[7] || CT.C7;
      return this.debugListChildrenInOrder(childOrder)[$map](diagnostics.DiagnosticsNode, dart.fn(node => node.toDiagnosticsNode({childOrder: childOrder}), T.SemanticsNodeToDiagnosticsNode()))[$toList]();
    }
    debugListChildrenInOrder(childOrder) {
      if (!(childOrder !== null)) dart.assertFailed(null, I[1], 2718, 12, "childOrder != null");
      if (this[_children] == null) {
        return C[3] || CT.C3;
      }
      switch (childOrder) {
        case C[7] || CT.C7:
          {
            return dart.nullCheck(this[_children]);
          }
        case C[5] || CT.C5:
          {
            return this[_childrenInTraversalOrder]();
          }
      }
    }
  };
  (semantics.SemanticsNode.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showOnScreen = opts && 'showOnScreen' in opts ? opts.showOnScreen : null;
    this[_transform] = null;
    this[_rect] = ui.Rect.zero;
    this[parentSemanticsClipRect] = null;
    this[parentPaintClipRect] = null;
    this[elevationAdjustment] = null;
    this[indexInParent] = null;
    this[_isMergedIntoParent] = false;
    this[_mergeAllDescendantsIntoThisNode] = semantics.SemanticsNode._kEmptyConfig.isMergingSemanticsOfDescendants;
    this[_children] = null;
    this[__SemanticsNode__debugPreviousSnapshot] = null;
    this[_dead] = false;
    this[_dirty] = false;
    this[_actions] = semantics.SemanticsNode._kEmptyConfig[_actions];
    this[_customSemanticsActions] = semantics.SemanticsNode._kEmptyConfig[_customSemanticsActions];
    this[_actionsAsBits] = semantics.SemanticsNode._kEmptyConfig[_actionsAsBits];
    this[tags] = null;
    this[_flags] = semantics.SemanticsNode._kEmptyConfig[_flags];
    this[_attributedLabel] = semantics.SemanticsNode._kEmptyConfig.attributedLabel;
    this[_attributedValue] = semantics.SemanticsNode._kEmptyConfig.attributedValue;
    this[_attributedIncreasedValue] = semantics.SemanticsNode._kEmptyConfig.attributedIncreasedValue;
    this[_attributedDecreasedValue] = semantics.SemanticsNode._kEmptyConfig.attributedDecreasedValue;
    this[_attributedHint] = semantics.SemanticsNode._kEmptyConfig.attributedHint;
    this[_tooltip] = semantics.SemanticsNode._kEmptyConfig.tooltip;
    this[_elevation] = semantics.SemanticsNode._kEmptyConfig.elevation;
    this[_thickness] = semantics.SemanticsNode._kEmptyConfig.thickness;
    this[_hintOverrides] = null;
    this[_textDirection] = semantics.SemanticsNode._kEmptyConfig.textDirection;
    this[_sortKey] = null;
    this[_textSelection] = null;
    this[_isMultiline] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[key$] = key;
    this[_id] = semantics.SemanticsNode._generateNewId();
    this[_showOnScreen] = showOnScreen;
    semantics.SemanticsNode.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsNode.prototype;
  (semantics.SemanticsNode.root = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showOnScreen = opts && 'showOnScreen' in opts ? opts.showOnScreen : null;
    let owner = opts && 'owner' in opts ? opts.owner : null;
    this[_transform] = null;
    this[_rect] = ui.Rect.zero;
    this[parentSemanticsClipRect] = null;
    this[parentPaintClipRect] = null;
    this[elevationAdjustment] = null;
    this[indexInParent] = null;
    this[_isMergedIntoParent] = false;
    this[_mergeAllDescendantsIntoThisNode] = semantics.SemanticsNode._kEmptyConfig.isMergingSemanticsOfDescendants;
    this[_children] = null;
    this[__SemanticsNode__debugPreviousSnapshot] = null;
    this[_dead] = false;
    this[_dirty] = false;
    this[_actions] = semantics.SemanticsNode._kEmptyConfig[_actions];
    this[_customSemanticsActions] = semantics.SemanticsNode._kEmptyConfig[_customSemanticsActions];
    this[_actionsAsBits] = semantics.SemanticsNode._kEmptyConfig[_actionsAsBits];
    this[tags] = null;
    this[_flags] = semantics.SemanticsNode._kEmptyConfig[_flags];
    this[_attributedLabel] = semantics.SemanticsNode._kEmptyConfig.attributedLabel;
    this[_attributedValue] = semantics.SemanticsNode._kEmptyConfig.attributedValue;
    this[_attributedIncreasedValue] = semantics.SemanticsNode._kEmptyConfig.attributedIncreasedValue;
    this[_attributedDecreasedValue] = semantics.SemanticsNode._kEmptyConfig.attributedDecreasedValue;
    this[_attributedHint] = semantics.SemanticsNode._kEmptyConfig.attributedHint;
    this[_tooltip] = semantics.SemanticsNode._kEmptyConfig.tooltip;
    this[_elevation] = semantics.SemanticsNode._kEmptyConfig.elevation;
    this[_thickness] = semantics.SemanticsNode._kEmptyConfig.thickness;
    this[_hintOverrides] = null;
    this[_textDirection] = semantics.SemanticsNode._kEmptyConfig.textDirection;
    this[_sortKey] = null;
    this[_textSelection] = null;
    this[_isMultiline] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[key$] = key;
    this[_id] = 0;
    this[_showOnScreen] = showOnScreen;
    semantics.SemanticsNode.__proto__.new.call(this);
    this.attach(owner);
  }).prototype = semantics.SemanticsNode.prototype;
  dart.addTypeTests(semantics.SemanticsNode);
  dart.addTypeCaches(semantics.SemanticsNode);
  dart.setMethodSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getMethods(semantics.SemanticsNode.__proto__),
    [_replaceChildren]: dart.fnType(dart.void, [core.List$(semantics.SemanticsNode)]),
    visitChildren: dart.fnType(dart.void, [dart.fnType(core.bool, [semantics.SemanticsNode])]),
    [_visitDescendants]: dart.fnType(core.bool, [dart.fnType(core.bool, [semantics.SemanticsNode])]),
    [_markDirty]: dart.fnType(dart.void, []),
    [_isDifferentFromCurrentSemanticAnnotation]: dart.fnType(core.bool, [semantics.SemanticsConfiguration]),
    isTagged: dart.fnType(core.bool, [semantics.SemanticsTag]),
    hasFlag: dart.fnType(core.bool, [ui.SemanticsFlag]),
    [_canPerformAction]: dart.fnType(core.bool, [ui.SemanticsAction]),
    updateWith: dart.fnType(dart.void, [], {childrenInInversePaintOrder: dart.nullable(core.List$(semantics.SemanticsNode))}, {config: dart.nullable(semantics.SemanticsConfiguration)}),
    getSemanticsData: dart.fnType(semantics.SemanticsData, []),
    [_addToUpdate]: dart.fnType(dart.void, [ui.SemanticsUpdateBuilder, core.Set$(core.int)]),
    [_childrenInTraversalOrder]: dart.fnType(core.List$(semantics.SemanticsNode), []),
    sendEvent: dart.fnType(dart.void, [semantics_event.SemanticsEvent]),
    toStringDeep: dart.fnType(core.String, [], {childOrder: semantics.DebugSemanticsDumpOrder, minLevel: diagnostics.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {}),
    toDiagnosticsNode: dart.fnType(diagnostics.DiagnosticsNode, [], {childOrder: semantics.DebugSemanticsDumpOrder, name: dart.nullable(core.String), style: dart.nullable(diagnostics.DiagnosticsTreeStyle)}, {}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics.DiagnosticsNode), [], {childOrder: semantics.DebugSemanticsDumpOrder}, {}),
    debugListChildrenInOrder: dart.fnType(core.List$(semantics.SemanticsNode), [semantics.DebugSemanticsDumpOrder])
  }));
  dart.setStaticMethodSignature(semantics.SemanticsNode, () => ['_generateNewId', '_initIdentityTransform']);
  dart.setGetterSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getGetters(semantics.SemanticsNode.__proto__),
    id: core.int,
    transform: dart.nullable(vector_math_64.Matrix4),
    rect: ui.Rect,
    isInvisible: core.bool,
    isMergedIntoParent: core.bool,
    isPartOfNodeMerging: core.bool,
    mergeAllDescendantsIntoThisNode: core.bool,
    [_debugPreviousSnapshot]: core.List$(semantics.SemanticsNode),
    hasChildren: core.bool,
    childrenCount: core.int,
    owner: dart.nullable(semantics.SemanticsOwner),
    parent: dart.nullable(semantics.SemanticsNode),
    label: core.String,
    attributedLabel: semantics.AttributedString,
    value: core.String,
    attributedValue: semantics.AttributedString,
    increasedValue: core.String,
    attributedIncreasedValue: semantics.AttributedString,
    decreasedValue: core.String,
    attributedDecreasedValue: semantics.AttributedString,
    hint: core.String,
    attributedHint: semantics.AttributedString,
    tooltip: core.String,
    elevation: core.double,
    thickness: core.double,
    hintOverrides: dart.nullable(semantics.SemanticsHintOverrides),
    textDirection: dart.nullable(ui.TextDirection),
    sortKey: dart.nullable(semantics.SemanticsSortKey),
    textSelection: dart.nullable(text_editing.TextSelection),
    isMultiline: dart.nullable(core.bool),
    scrollChildCount: dart.nullable(core.int),
    scrollIndex: dart.nullable(core.int),
    scrollPosition: dart.nullable(core.double),
    scrollExtentMax: dart.nullable(core.double),
    scrollExtentMin: dart.nullable(core.double),
    platformViewId: dart.nullable(core.int),
    maxValueLength: dart.nullable(core.int),
    currentValueLength: dart.nullable(core.int)
  }));
  dart.setSetterSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getSetters(semantics.SemanticsNode.__proto__),
    transform: dart.nullable(vector_math_64.Matrix4),
    rect: ui.Rect,
    isMergedIntoParent: core.bool,
    [_debugPreviousSnapshot]: core.List$(semantics.SemanticsNode)
  }));
  dart.setLibraryUri(semantics.SemanticsNode, I[0]);
  dart.setFieldSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getFields(semantics.SemanticsNode.__proto__),
    key: dart.finalFieldType(dart.nullable(key.Key)),
    [_id]: dart.fieldType(core.int),
    [_showOnScreen]: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_rect]: dart.fieldType(ui.Rect),
    parentSemanticsClipRect: dart.fieldType(dart.nullable(ui.Rect)),
    parentPaintClipRect: dart.fieldType(dart.nullable(ui.Rect)),
    elevationAdjustment: dart.fieldType(dart.nullable(core.double)),
    indexInParent: dart.fieldType(dart.nullable(core.int)),
    [_isMergedIntoParent]: dart.fieldType(core.bool),
    [_mergeAllDescendantsIntoThisNode]: dart.fieldType(core.bool),
    [_children]: dart.fieldType(dart.nullable(core.List$(semantics.SemanticsNode))),
    [__SemanticsNode__debugPreviousSnapshot]: dart.fieldType(dart.nullable(core.List$(semantics.SemanticsNode))),
    [_dead]: dart.fieldType(core.bool),
    [_dirty]: dart.fieldType(core.bool),
    [_actions]: dart.fieldType(core.Map$(ui.SemanticsAction, dart.fnType(dart.void, [dart.nullable(core.Object)]))),
    [_customSemanticsActions]: dart.fieldType(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))),
    [_actionsAsBits]: dart.fieldType(core.int),
    tags: dart.fieldType(dart.nullable(core.Set$(semantics.SemanticsTag))),
    [_flags]: dart.fieldType(core.int),
    [_attributedLabel]: dart.fieldType(semantics.AttributedString),
    [_attributedValue]: dart.fieldType(semantics.AttributedString),
    [_attributedIncreasedValue]: dart.fieldType(semantics.AttributedString),
    [_attributedDecreasedValue]: dart.fieldType(semantics.AttributedString),
    [_attributedHint]: dart.fieldType(semantics.AttributedString),
    [_tooltip]: dart.fieldType(core.String),
    [_elevation]: dart.fieldType(core.double),
    [_thickness]: dart.fieldType(core.double),
    [_hintOverrides]: dart.fieldType(dart.nullable(semantics.SemanticsHintOverrides)),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_sortKey]: dart.fieldType(dart.nullable(semantics.SemanticsSortKey)),
    [_textSelection]: dart.fieldType(dart.nullable(text_editing.TextSelection)),
    [_isMultiline]: dart.fieldType(dart.nullable(core.bool)),
    [_scrollChildCount]: dart.fieldType(dart.nullable(core.int)),
    [_scrollIndex]: dart.fieldType(dart.nullable(core.int)),
    [_scrollPosition]: dart.fieldType(dart.nullable(core.double)),
    [_scrollExtentMax]: dart.fieldType(dart.nullable(core.double)),
    [_scrollExtentMin]: dart.fieldType(dart.nullable(core.double)),
    [_platformViewId]: dart.fieldType(dart.nullable(core.int)),
    [_maxValueLength]: dart.fieldType(dart.nullable(core.int)),
    [_currentValueLength]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.setStaticFieldSignature(semantics.SemanticsNode, () => ['_maxFrameworkAccessibilityIdentifier', '_lastIdentifier', '_kEmptyConfig', '_kEmptyChildList', '_kEmptyCustomSemanticsActionsList', '_kIdentityTransform']);
  dart.defineLazy(semantics.SemanticsNode, {
    /*semantics.SemanticsNode._maxFrameworkAccessibilityIdentifier*/get _maxFrameworkAccessibilityIdentifier() {
      return 65535;
    },
    /*semantics.SemanticsNode._lastIdentifier*/get _lastIdentifier() {
      return 0;
    },
    set _lastIdentifier(_) {},
    /*semantics.SemanticsNode._kEmptyConfig*/get _kEmptyConfig() {
      return new semantics.SemanticsConfiguration.new();
    },
    /*semantics.SemanticsNode._kEmptyChildList*/get _kEmptyChildList() {
      return _native_typed_data.NativeInt32List.new(0);
    },
    /*semantics.SemanticsNode._kEmptyCustomSemanticsActionsList*/get _kEmptyCustomSemanticsActionsList() {
      return _native_typed_data.NativeInt32List.new(0);
    },
    /*semantics.SemanticsNode._kIdentityTransform*/get _kIdentityTransform() {
      return semantics.SemanticsNode._initIdentityTransform();
    }
  }, false);
  semantics._SemanticsDiagnosticableNode = class _SemanticsDiagnosticableNode extends diagnostics.DiagnosticableNode$(semantics.SemanticsNode) {
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : null;
      return new semantics._SemanticsDiagnosticableNode.new({name: name, value: value, style: style, childOrder: childOrder});
    }
    getChildren() {
      return this.value.debugDescribeChildren({childOrder: this.childOrder});
    }
  };
  (semantics._SemanticsDiagnosticableNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let childOrder = opts && 'childOrder' in opts ? opts.childOrder : null;
    this.childOrder = childOrder;
    semantics._SemanticsDiagnosticableNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = semantics._SemanticsDiagnosticableNode.prototype;
  dart.addTypeTests(semantics._SemanticsDiagnosticableNode);
  dart.addTypeCaches(semantics._SemanticsDiagnosticableNode);
  dart.setLibraryUri(semantics._SemanticsDiagnosticableNode, I[0]);
  dart.setFieldSignature(semantics._SemanticsDiagnosticableNode, () => ({
    __proto__: dart.getFields(semantics._SemanticsDiagnosticableNode.__proto__),
    childOrder: dart.finalFieldType(semantics.DebugSemanticsDumpOrder)
  }));
  var onTapHint$ = dart.privateName(semantics, "SemanticsHintOverrides.onTapHint");
  var onLongPressHint$ = dart.privateName(semantics, "SemanticsHintOverrides.onLongPressHint");
  semantics.SemanticsHintOverrides = class SemanticsHintOverrides extends diagnostics.DiagnosticableTree {
    get onTapHint() {
      return this[onTapHint$];
    }
    set onTapHint(value) {
      super.onTapHint = value;
    }
    get onLongPressHint() {
      return this[onLongPressHint$];
    }
    set onLongPressHint(value) {
      super.onLongPressHint = value;
    }
    static ['_#new#tearOff'](opts) {
      let onTapHint = opts && 'onTapHint' in opts ? opts.onTapHint : null;
      let onLongPressHint = opts && 'onLongPressHint' in opts ? opts.onLongPressHint : null;
      return new semantics.SemanticsHintOverrides.new({onTapHint: onTapHint, onLongPressHint: onLongPressHint});
    }
    get isNotEmpty() {
      return this.onTapHint != null || this.onLongPressHint != null;
    }
    get hashCode() {
      return core.Object.hash(this.onTapHint, this.onLongPressHint);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return semantics.SemanticsHintOverrides.is(other) && other.onTapHint == this.onTapHint && other.onLongPressHint == this.onLongPressHint;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("onTapHint", this.onTapHint, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("onLongPressHint", this.onLongPressHint, {defaultValue: null}));
    }
  };
  (semantics.SemanticsHintOverrides.new = function(opts) {
    let onTapHint = opts && 'onTapHint' in opts ? opts.onTapHint : null;
    let onLongPressHint = opts && 'onLongPressHint' in opts ? opts.onLongPressHint : null;
    this[onTapHint$] = onTapHint;
    this[onLongPressHint$] = onLongPressHint;
    if (!(onTapHint !== "")) dart.assertFailed(null, I[1], 720, 15, "onTapHint != ''");
    if (!(onLongPressHint !== "")) dart.assertFailed(null, I[1], 721, 15, "onLongPressHint != ''");
    semantics.SemanticsHintOverrides.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsHintOverrides.prototype;
  dart.addTypeTests(semantics.SemanticsHintOverrides);
  dart.addTypeCaches(semantics.SemanticsHintOverrides);
  dart.setGetterSignature(semantics.SemanticsHintOverrides, () => ({
    __proto__: dart.getGetters(semantics.SemanticsHintOverrides.__proto__),
    isNotEmpty: core.bool
  }));
  dart.setLibraryUri(semantics.SemanticsHintOverrides, I[0]);
  dart.setFieldSignature(semantics.SemanticsHintOverrides, () => ({
    __proto__: dart.getFields(semantics.SemanticsHintOverrides.__proto__),
    onTapHint: dart.finalFieldType(dart.nullable(core.String)),
    onLongPressHint: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(semantics.SemanticsHintOverrides, ['_equals']);
  dart.defineExtensionAccessors(semantics.SemanticsHintOverrides, ['hashCode']);
  var enabled$ = dart.privateName(semantics, "SemanticsProperties.enabled");
  var checked$ = dart.privateName(semantics, "SemanticsProperties.checked");
  var toggled$ = dart.privateName(semantics, "SemanticsProperties.toggled");
  var selected$ = dart.privateName(semantics, "SemanticsProperties.selected");
  var button$ = dart.privateName(semantics, "SemanticsProperties.button");
  var link$ = dart.privateName(semantics, "SemanticsProperties.link");
  var header$ = dart.privateName(semantics, "SemanticsProperties.header");
  var textField$ = dart.privateName(semantics, "SemanticsProperties.textField");
  var slider$ = dart.privateName(semantics, "SemanticsProperties.slider");
  var keyboardKey$ = dart.privateName(semantics, "SemanticsProperties.keyboardKey");
  var readOnly$ = dart.privateName(semantics, "SemanticsProperties.readOnly");
  var focusable$ = dart.privateName(semantics, "SemanticsProperties.focusable");
  var focused$ = dart.privateName(semantics, "SemanticsProperties.focused");
  var inMutuallyExclusiveGroup$ = dart.privateName(semantics, "SemanticsProperties.inMutuallyExclusiveGroup");
  var hidden$ = dart.privateName(semantics, "SemanticsProperties.hidden");
  var obscured$ = dart.privateName(semantics, "SemanticsProperties.obscured");
  var multiline$ = dart.privateName(semantics, "SemanticsProperties.multiline");
  var scopesRoute$ = dart.privateName(semantics, "SemanticsProperties.scopesRoute");
  var namesRoute$ = dart.privateName(semantics, "SemanticsProperties.namesRoute");
  var image$ = dart.privateName(semantics, "SemanticsProperties.image");
  var liveRegion$ = dart.privateName(semantics, "SemanticsProperties.liveRegion");
  var maxValueLength$0 = dart.privateName(semantics, "SemanticsProperties.maxValueLength");
  var currentValueLength$0 = dart.privateName(semantics, "SemanticsProperties.currentValueLength");
  var label$0 = dart.privateName(semantics, "SemanticsProperties.label");
  var attributedLabel$0 = dart.privateName(semantics, "SemanticsProperties.attributedLabel");
  var value$ = dart.privateName(semantics, "SemanticsProperties.value");
  var attributedValue$0 = dart.privateName(semantics, "SemanticsProperties.attributedValue");
  var increasedValue$ = dart.privateName(semantics, "SemanticsProperties.increasedValue");
  var attributedIncreasedValue$0 = dart.privateName(semantics, "SemanticsProperties.attributedIncreasedValue");
  var decreasedValue$ = dart.privateName(semantics, "SemanticsProperties.decreasedValue");
  var attributedDecreasedValue$0 = dart.privateName(semantics, "SemanticsProperties.attributedDecreasedValue");
  var hint$0 = dart.privateName(semantics, "SemanticsProperties.hint");
  var attributedHint$0 = dart.privateName(semantics, "SemanticsProperties.attributedHint");
  var tooltip$0 = dart.privateName(semantics, "SemanticsProperties.tooltip");
  var hintOverrides$ = dart.privateName(semantics, "SemanticsProperties.hintOverrides");
  var textDirection$0 = dart.privateName(semantics, "SemanticsProperties.textDirection");
  var sortKey$ = dart.privateName(semantics, "SemanticsProperties.sortKey");
  var tagForChildren$ = dart.privateName(semantics, "SemanticsProperties.tagForChildren");
  var onTap$ = dart.privateName(semantics, "SemanticsProperties.onTap");
  var onLongPress$ = dart.privateName(semantics, "SemanticsProperties.onLongPress");
  var onScrollLeft$ = dart.privateName(semantics, "SemanticsProperties.onScrollLeft");
  var onScrollRight$ = dart.privateName(semantics, "SemanticsProperties.onScrollRight");
  var onScrollUp$ = dart.privateName(semantics, "SemanticsProperties.onScrollUp");
  var onScrollDown$ = dart.privateName(semantics, "SemanticsProperties.onScrollDown");
  var onIncrease$ = dart.privateName(semantics, "SemanticsProperties.onIncrease");
  var onDecrease$ = dart.privateName(semantics, "SemanticsProperties.onDecrease");
  var onCopy$ = dart.privateName(semantics, "SemanticsProperties.onCopy");
  var onCut$ = dart.privateName(semantics, "SemanticsProperties.onCut");
  var onPaste$ = dart.privateName(semantics, "SemanticsProperties.onPaste");
  var onMoveCursorForwardByCharacter$ = dart.privateName(semantics, "SemanticsProperties.onMoveCursorForwardByCharacter");
  var onMoveCursorBackwardByCharacter$ = dart.privateName(semantics, "SemanticsProperties.onMoveCursorBackwardByCharacter");
  var onMoveCursorForwardByWord$ = dart.privateName(semantics, "SemanticsProperties.onMoveCursorForwardByWord");
  var onMoveCursorBackwardByWord$ = dart.privateName(semantics, "SemanticsProperties.onMoveCursorBackwardByWord");
  var onSetSelection$ = dart.privateName(semantics, "SemanticsProperties.onSetSelection");
  var onSetText$ = dart.privateName(semantics, "SemanticsProperties.onSetText");
  var onDidGainAccessibilityFocus$ = dart.privateName(semantics, "SemanticsProperties.onDidGainAccessibilityFocus");
  var onDidLoseAccessibilityFocus$ = dart.privateName(semantics, "SemanticsProperties.onDidLoseAccessibilityFocus");
  var onDismiss$ = dart.privateName(semantics, "SemanticsProperties.onDismiss");
  var customSemanticsActions$ = dart.privateName(semantics, "SemanticsProperties.customSemanticsActions");
  semantics.SemanticsProperties = class SemanticsProperties extends diagnostics.DiagnosticableTree {
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get checked() {
      return this[checked$];
    }
    set checked(value) {
      super.checked = value;
    }
    get toggled() {
      return this[toggled$];
    }
    set toggled(value) {
      super.toggled = value;
    }
    get selected() {
      return this[selected$];
    }
    set selected(value) {
      super.selected = value;
    }
    get button() {
      return this[button$];
    }
    set button(value) {
      super.button = value;
    }
    get link() {
      return this[link$];
    }
    set link(value) {
      super.link = value;
    }
    get header() {
      return this[header$];
    }
    set header(value) {
      super.header = value;
    }
    get textField() {
      return this[textField$];
    }
    set textField(value) {
      super.textField = value;
    }
    get slider() {
      return this[slider$];
    }
    set slider(value) {
      super.slider = value;
    }
    get keyboardKey() {
      return this[keyboardKey$];
    }
    set keyboardKey(value) {
      super.keyboardKey = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get focusable() {
      return this[focusable$];
    }
    set focusable(value) {
      super.focusable = value;
    }
    get focused() {
      return this[focused$];
    }
    set focused(value) {
      super.focused = value;
    }
    get inMutuallyExclusiveGroup() {
      return this[inMutuallyExclusiveGroup$];
    }
    set inMutuallyExclusiveGroup(value) {
      super.inMutuallyExclusiveGroup = value;
    }
    get hidden() {
      return this[hidden$];
    }
    set hidden(value) {
      super.hidden = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get multiline() {
      return this[multiline$];
    }
    set multiline(value) {
      super.multiline = value;
    }
    get scopesRoute() {
      return this[scopesRoute$];
    }
    set scopesRoute(value) {
      super.scopesRoute = value;
    }
    get namesRoute() {
      return this[namesRoute$];
    }
    set namesRoute(value) {
      super.namesRoute = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get liveRegion() {
      return this[liveRegion$];
    }
    set liveRegion(value) {
      super.liveRegion = value;
    }
    get maxValueLength() {
      return this[maxValueLength$0];
    }
    set maxValueLength(value) {
      super.maxValueLength = value;
    }
    get currentValueLength() {
      return this[currentValueLength$0];
    }
    set currentValueLength(value) {
      super.currentValueLength = value;
    }
    get label() {
      return this[label$0];
    }
    set label(value) {
      super.label = value;
    }
    get attributedLabel() {
      return this[attributedLabel$0];
    }
    set attributedLabel(value) {
      super.attributedLabel = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get attributedValue() {
      return this[attributedValue$0];
    }
    set attributedValue(value) {
      super.attributedValue = value;
    }
    get increasedValue() {
      return this[increasedValue$];
    }
    set increasedValue(value) {
      super.increasedValue = value;
    }
    get attributedIncreasedValue() {
      return this[attributedIncreasedValue$0];
    }
    set attributedIncreasedValue(value) {
      super.attributedIncreasedValue = value;
    }
    get decreasedValue() {
      return this[decreasedValue$];
    }
    set decreasedValue(value) {
      super.decreasedValue = value;
    }
    get attributedDecreasedValue() {
      return this[attributedDecreasedValue$0];
    }
    set attributedDecreasedValue(value) {
      super.attributedDecreasedValue = value;
    }
    get hint() {
      return this[hint$0];
    }
    set hint(value) {
      super.hint = value;
    }
    get attributedHint() {
      return this[attributedHint$0];
    }
    set attributedHint(value) {
      super.attributedHint = value;
    }
    get tooltip() {
      return this[tooltip$0];
    }
    set tooltip(value) {
      super.tooltip = value;
    }
    get hintOverrides() {
      return this[hintOverrides$];
    }
    set hintOverrides(value) {
      super.hintOverrides = value;
    }
    get textDirection() {
      return this[textDirection$0];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get sortKey() {
      return this[sortKey$];
    }
    set sortKey(value) {
      super.sortKey = value;
    }
    get tagForChildren() {
      return this[tagForChildren$];
    }
    set tagForChildren(value) {
      super.tagForChildren = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onLongPress() {
      return this[onLongPress$];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get onScrollLeft() {
      return this[onScrollLeft$];
    }
    set onScrollLeft(value) {
      super.onScrollLeft = value;
    }
    get onScrollRight() {
      return this[onScrollRight$];
    }
    set onScrollRight(value) {
      super.onScrollRight = value;
    }
    get onScrollUp() {
      return this[onScrollUp$];
    }
    set onScrollUp(value) {
      super.onScrollUp = value;
    }
    get onScrollDown() {
      return this[onScrollDown$];
    }
    set onScrollDown(value) {
      super.onScrollDown = value;
    }
    get onIncrease() {
      return this[onIncrease$];
    }
    set onIncrease(value) {
      super.onIncrease = value;
    }
    get onDecrease() {
      return this[onDecrease$];
    }
    set onDecrease(value) {
      super.onDecrease = value;
    }
    get onCopy() {
      return this[onCopy$];
    }
    set onCopy(value) {
      super.onCopy = value;
    }
    get onCut() {
      return this[onCut$];
    }
    set onCut(value) {
      super.onCut = value;
    }
    get onPaste() {
      return this[onPaste$];
    }
    set onPaste(value) {
      super.onPaste = value;
    }
    get onMoveCursorForwardByCharacter() {
      return this[onMoveCursorForwardByCharacter$];
    }
    set onMoveCursorForwardByCharacter(value) {
      super.onMoveCursorForwardByCharacter = value;
    }
    get onMoveCursorBackwardByCharacter() {
      return this[onMoveCursorBackwardByCharacter$];
    }
    set onMoveCursorBackwardByCharacter(value) {
      super.onMoveCursorBackwardByCharacter = value;
    }
    get onMoveCursorForwardByWord() {
      return this[onMoveCursorForwardByWord$];
    }
    set onMoveCursorForwardByWord(value) {
      super.onMoveCursorForwardByWord = value;
    }
    get onMoveCursorBackwardByWord() {
      return this[onMoveCursorBackwardByWord$];
    }
    set onMoveCursorBackwardByWord(value) {
      super.onMoveCursorBackwardByWord = value;
    }
    get onSetSelection() {
      return this[onSetSelection$];
    }
    set onSetSelection(value) {
      super.onSetSelection = value;
    }
    get onSetText() {
      return this[onSetText$];
    }
    set onSetText(value) {
      super.onSetText = value;
    }
    get onDidGainAccessibilityFocus() {
      return this[onDidGainAccessibilityFocus$];
    }
    set onDidGainAccessibilityFocus(value) {
      super.onDidGainAccessibilityFocus = value;
    }
    get onDidLoseAccessibilityFocus() {
      return this[onDidLoseAccessibilityFocus$];
    }
    set onDidLoseAccessibilityFocus(value) {
      super.onDidLoseAccessibilityFocus = value;
    }
    get onDismiss() {
      return this[onDismiss$];
    }
    set onDismiss(value) {
      super.onDismiss = value;
    }
    get customSemanticsActions() {
      return this[customSemanticsActions$];
    }
    set customSemanticsActions(value) {
      super.customSemanticsActions = value;
    }
    static ['_#new#tearOff'](opts) {
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let checked = opts && 'checked' in opts ? opts.checked : null;
      let selected = opts && 'selected' in opts ? opts.selected : null;
      let toggled = opts && 'toggled' in opts ? opts.toggled : null;
      let button = opts && 'button' in opts ? opts.button : null;
      let link = opts && 'link' in opts ? opts.link : null;
      let header = opts && 'header' in opts ? opts.header : null;
      let textField = opts && 'textField' in opts ? opts.textField : null;
      let slider = opts && 'slider' in opts ? opts.slider : null;
      let keyboardKey = opts && 'keyboardKey' in opts ? opts.keyboardKey : null;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
      let focusable = opts && 'focusable' in opts ? opts.focusable : null;
      let focused = opts && 'focused' in opts ? opts.focused : null;
      let inMutuallyExclusiveGroup = opts && 'inMutuallyExclusiveGroup' in opts ? opts.inMutuallyExclusiveGroup : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let multiline = opts && 'multiline' in opts ? opts.multiline : null;
      let scopesRoute = opts && 'scopesRoute' in opts ? opts.scopesRoute : null;
      let namesRoute = opts && 'namesRoute' in opts ? opts.namesRoute : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let liveRegion = opts && 'liveRegion' in opts ? opts.liveRegion : null;
      let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
      let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let attributedLabel = opts && 'attributedLabel' in opts ? opts.attributedLabel : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let attributedValue = opts && 'attributedValue' in opts ? opts.attributedValue : null;
      let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
      let attributedIncreasedValue = opts && 'attributedIncreasedValue' in opts ? opts.attributedIncreasedValue : null;
      let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
      let attributedDecreasedValue = opts && 'attributedDecreasedValue' in opts ? opts.attributedDecreasedValue : null;
      let hint = opts && 'hint' in opts ? opts.hint : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let attributedHint = opts && 'attributedHint' in opts ? opts.attributedHint : null;
      let hintOverrides = opts && 'hintOverrides' in opts ? opts.hintOverrides : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
      let tagForChildren = opts && 'tagForChildren' in opts ? opts.tagForChildren : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let onScrollLeft = opts && 'onScrollLeft' in opts ? opts.onScrollLeft : null;
      let onScrollRight = opts && 'onScrollRight' in opts ? opts.onScrollRight : null;
      let onScrollUp = opts && 'onScrollUp' in opts ? opts.onScrollUp : null;
      let onScrollDown = opts && 'onScrollDown' in opts ? opts.onScrollDown : null;
      let onIncrease = opts && 'onIncrease' in opts ? opts.onIncrease : null;
      let onDecrease = opts && 'onDecrease' in opts ? opts.onDecrease : null;
      let onCopy = opts && 'onCopy' in opts ? opts.onCopy : null;
      let onCut = opts && 'onCut' in opts ? opts.onCut : null;
      let onPaste = opts && 'onPaste' in opts ? opts.onPaste : null;
      let onMoveCursorForwardByCharacter = opts && 'onMoveCursorForwardByCharacter' in opts ? opts.onMoveCursorForwardByCharacter : null;
      let onMoveCursorBackwardByCharacter = opts && 'onMoveCursorBackwardByCharacter' in opts ? opts.onMoveCursorBackwardByCharacter : null;
      let onMoveCursorForwardByWord = opts && 'onMoveCursorForwardByWord' in opts ? opts.onMoveCursorForwardByWord : null;
      let onMoveCursorBackwardByWord = opts && 'onMoveCursorBackwardByWord' in opts ? opts.onMoveCursorBackwardByWord : null;
      let onSetSelection = opts && 'onSetSelection' in opts ? opts.onSetSelection : null;
      let onSetText = opts && 'onSetText' in opts ? opts.onSetText : null;
      let onDidGainAccessibilityFocus = opts && 'onDidGainAccessibilityFocus' in opts ? opts.onDidGainAccessibilityFocus : null;
      let onDidLoseAccessibilityFocus = opts && 'onDidLoseAccessibilityFocus' in opts ? opts.onDidLoseAccessibilityFocus : null;
      let onDismiss = opts && 'onDismiss' in opts ? opts.onDismiss : null;
      let customSemanticsActions = opts && 'customSemanticsActions' in opts ? opts.customSemanticsActions : null;
      return new semantics.SemanticsProperties.new({enabled: enabled, checked: checked, selected: selected, toggled: toggled, button: button, link: link, header: header, textField: textField, slider: slider, keyboardKey: keyboardKey, readOnly: readOnly, focusable: focusable, focused: focused, inMutuallyExclusiveGroup: inMutuallyExclusiveGroup, hidden: hidden, obscured: obscured, multiline: multiline, scopesRoute: scopesRoute, namesRoute: namesRoute, image: image, liveRegion: liveRegion, maxValueLength: maxValueLength, currentValueLength: currentValueLength, label: label, attributedLabel: attributedLabel, value: value, attributedValue: attributedValue, increasedValue: increasedValue, attributedIncreasedValue: attributedIncreasedValue, decreasedValue: decreasedValue, attributedDecreasedValue: attributedDecreasedValue, hint: hint, tooltip: tooltip, attributedHint: attributedHint, hintOverrides: hintOverrides, textDirection: textDirection, sortKey: sortKey, tagForChildren: tagForChildren, onTap: onTap, onLongPress: onLongPress, onScrollLeft: onScrollLeft, onScrollRight: onScrollRight, onScrollUp: onScrollUp, onScrollDown: onScrollDown, onIncrease: onIncrease, onDecrease: onDecrease, onCopy: onCopy, onCut: onCut, onPaste: onPaste, onMoveCursorForwardByCharacter: onMoveCursorForwardByCharacter, onMoveCursorBackwardByCharacter: onMoveCursorBackwardByCharacter, onMoveCursorForwardByWord: onMoveCursorForwardByWord, onMoveCursorBackwardByWord: onMoveCursorBackwardByWord, onSetSelection: onSetSelection, onSetText: onSetText, onDidGainAccessibilityFocus: onDidGainAccessibilityFocus, onDidLoseAccessibilityFocus: onDidLoseAccessibilityFocus, onDismiss: onDismiss, customSemanticsActions: customSemanticsActions});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("checked", this.checked, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("selected", this.selected, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("label", this.label, {defaultValue: null}));
      properties.add(new semantics.AttributedStringProperty.new("attributedLabel", this.attributedLabel, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("value", this.value, {defaultValue: null}));
      properties.add(new semantics.AttributedStringProperty.new("attributedValue", this.attributedValue, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("increasedValue", this.value, {defaultValue: null}));
      properties.add(new semantics.AttributedStringProperty.new("attributedIncreasedValue", this.attributedIncreasedValue, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("decreasedValue", this.value, {defaultValue: null}));
      properties.add(new semantics.AttributedStringProperty.new("attributedDecreasedValue", this.attributedDecreasedValue, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("hint", this.hint, {defaultValue: null}));
      properties.add(new semantics.AttributedStringProperty.new("attributedHint", this.attributedHint, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("tooltip", this.tooltip));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfSemanticsSortKey()).new("sortKey", this.sortKey, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfSemanticsHintOverrides()).new("hintOverrides", this.hintOverrides, {defaultValue: null}));
    }
    toStringShort() {
      return object.objectRuntimeType(this, "SemanticsProperties");
    }
  };
  (semantics.SemanticsProperties.new = function(opts) {
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let checked = opts && 'checked' in opts ? opts.checked : null;
    let selected = opts && 'selected' in opts ? opts.selected : null;
    let toggled = opts && 'toggled' in opts ? opts.toggled : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let link = opts && 'link' in opts ? opts.link : null;
    let header = opts && 'header' in opts ? opts.header : null;
    let textField = opts && 'textField' in opts ? opts.textField : null;
    let slider = opts && 'slider' in opts ? opts.slider : null;
    let keyboardKey = opts && 'keyboardKey' in opts ? opts.keyboardKey : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
    let focusable = opts && 'focusable' in opts ? opts.focusable : null;
    let focused = opts && 'focused' in opts ? opts.focused : null;
    let inMutuallyExclusiveGroup = opts && 'inMutuallyExclusiveGroup' in opts ? opts.inMutuallyExclusiveGroup : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : null;
    let multiline = opts && 'multiline' in opts ? opts.multiline : null;
    let scopesRoute = opts && 'scopesRoute' in opts ? opts.scopesRoute : null;
    let namesRoute = opts && 'namesRoute' in opts ? opts.namesRoute : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let liveRegion = opts && 'liveRegion' in opts ? opts.liveRegion : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let attributedLabel = opts && 'attributedLabel' in opts ? opts.attributedLabel : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let attributedValue = opts && 'attributedValue' in opts ? opts.attributedValue : null;
    let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
    let attributedIncreasedValue = opts && 'attributedIncreasedValue' in opts ? opts.attributedIncreasedValue : null;
    let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
    let attributedDecreasedValue = opts && 'attributedDecreasedValue' in opts ? opts.attributedDecreasedValue : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let attributedHint = opts && 'attributedHint' in opts ? opts.attributedHint : null;
    let hintOverrides = opts && 'hintOverrides' in opts ? opts.hintOverrides : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
    let tagForChildren = opts && 'tagForChildren' in opts ? opts.tagForChildren : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onScrollLeft = opts && 'onScrollLeft' in opts ? opts.onScrollLeft : null;
    let onScrollRight = opts && 'onScrollRight' in opts ? opts.onScrollRight : null;
    let onScrollUp = opts && 'onScrollUp' in opts ? opts.onScrollUp : null;
    let onScrollDown = opts && 'onScrollDown' in opts ? opts.onScrollDown : null;
    let onIncrease = opts && 'onIncrease' in opts ? opts.onIncrease : null;
    let onDecrease = opts && 'onDecrease' in opts ? opts.onDecrease : null;
    let onCopy = opts && 'onCopy' in opts ? opts.onCopy : null;
    let onCut = opts && 'onCut' in opts ? opts.onCut : null;
    let onPaste = opts && 'onPaste' in opts ? opts.onPaste : null;
    let onMoveCursorForwardByCharacter = opts && 'onMoveCursorForwardByCharacter' in opts ? opts.onMoveCursorForwardByCharacter : null;
    let onMoveCursorBackwardByCharacter = opts && 'onMoveCursorBackwardByCharacter' in opts ? opts.onMoveCursorBackwardByCharacter : null;
    let onMoveCursorForwardByWord = opts && 'onMoveCursorForwardByWord' in opts ? opts.onMoveCursorForwardByWord : null;
    let onMoveCursorBackwardByWord = opts && 'onMoveCursorBackwardByWord' in opts ? opts.onMoveCursorBackwardByWord : null;
    let onSetSelection = opts && 'onSetSelection' in opts ? opts.onSetSelection : null;
    let onSetText = opts && 'onSetText' in opts ? opts.onSetText : null;
    let onDidGainAccessibilityFocus = opts && 'onDidGainAccessibilityFocus' in opts ? opts.onDidGainAccessibilityFocus : null;
    let onDidLoseAccessibilityFocus = opts && 'onDidLoseAccessibilityFocus' in opts ? opts.onDidLoseAccessibilityFocus : null;
    let onDismiss = opts && 'onDismiss' in opts ? opts.onDismiss : null;
    let customSemanticsActions = opts && 'customSemanticsActions' in opts ? opts.customSemanticsActions : null;
    this[enabled$] = enabled;
    this[checked$] = checked;
    this[selected$] = selected;
    this[toggled$] = toggled;
    this[button$] = button;
    this[link$] = link;
    this[header$] = header;
    this[textField$] = textField;
    this[slider$] = slider;
    this[keyboardKey$] = keyboardKey;
    this[readOnly$] = readOnly;
    this[focusable$] = focusable;
    this[focused$] = focused;
    this[inMutuallyExclusiveGroup$] = inMutuallyExclusiveGroup;
    this[hidden$] = hidden;
    this[obscured$] = obscured;
    this[multiline$] = multiline;
    this[scopesRoute$] = scopesRoute;
    this[namesRoute$] = namesRoute;
    this[image$] = image;
    this[liveRegion$] = liveRegion;
    this[maxValueLength$0] = maxValueLength;
    this[currentValueLength$0] = currentValueLength;
    this[label$0] = label;
    this[attributedLabel$0] = attributedLabel;
    this[value$] = value;
    this[attributedValue$0] = attributedValue;
    this[increasedValue$] = increasedValue;
    this[attributedIncreasedValue$0] = attributedIncreasedValue;
    this[decreasedValue$] = decreasedValue;
    this[attributedDecreasedValue$0] = attributedDecreasedValue;
    this[hint$0] = hint;
    this[tooltip$0] = tooltip;
    this[attributedHint$0] = attributedHint;
    this[hintOverrides$] = hintOverrides;
    this[textDirection$0] = textDirection;
    this[sortKey$] = sortKey;
    this[tagForChildren$] = tagForChildren;
    this[onTap$] = onTap;
    this[onLongPress$] = onLongPress;
    this[onScrollLeft$] = onScrollLeft;
    this[onScrollRight$] = onScrollRight;
    this[onScrollUp$] = onScrollUp;
    this[onScrollDown$] = onScrollDown;
    this[onIncrease$] = onIncrease;
    this[onDecrease$] = onDecrease;
    this[onCopy$] = onCopy;
    this[onCut$] = onCut;
    this[onPaste$] = onPaste;
    this[onMoveCursorForwardByCharacter$] = onMoveCursorForwardByCharacter;
    this[onMoveCursorBackwardByCharacter$] = onMoveCursorBackwardByCharacter;
    this[onMoveCursorForwardByWord$] = onMoveCursorForwardByWord;
    this[onMoveCursorBackwardByWord$] = onMoveCursorBackwardByWord;
    this[onSetSelection$] = onSetSelection;
    this[onSetText$] = onSetText;
    this[onDidGainAccessibilityFocus$] = onDidGainAccessibilityFocus;
    this[onDidLoseAccessibilityFocus$] = onDidLoseAccessibilityFocus;
    this[onDismiss$] = onDismiss;
    this[customSemanticsActions$] = customSemanticsActions;
    if (!(label == null || attributedLabel == null)) dart.assertFailed("Only one of label or attributedLabel should be provided", I[1], 837, 15, "label == null || attributedLabel == null");
    if (!(value == null || attributedValue == null)) dart.assertFailed("Only one of value or attributedValue should be provided", I[1], 838, 15, "value == null || attributedValue == null");
    if (!(increasedValue == null || attributedIncreasedValue == null)) dart.assertFailed("Only one of increasedValue or attributedIncreasedValue should be provided", I[1], 839, 15, "increasedValue == null || attributedIncreasedValue == null");
    if (!(decreasedValue == null || attributedDecreasedValue == null)) dart.assertFailed("Only one of decreasedValue or attributedDecreasedValue should be provided", I[1], 840, 15, "decreasedValue == null || attributedDecreasedValue == null");
    if (!(hint == null || attributedHint == null)) dart.assertFailed("Only one of hint or attributedHint should be provided", I[1], 841, 15, "hint == null || attributedHint == null");
    semantics.SemanticsProperties.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsProperties.prototype;
  dart.addTypeTests(semantics.SemanticsProperties);
  dart.addTypeCaches(semantics.SemanticsProperties);
  dart.setLibraryUri(semantics.SemanticsProperties, I[0]);
  dart.setFieldSignature(semantics.SemanticsProperties, () => ({
    __proto__: dart.getFields(semantics.SemanticsProperties.__proto__),
    enabled: dart.finalFieldType(dart.nullable(core.bool)),
    checked: dart.finalFieldType(dart.nullable(core.bool)),
    toggled: dart.finalFieldType(dart.nullable(core.bool)),
    selected: dart.finalFieldType(dart.nullable(core.bool)),
    button: dart.finalFieldType(dart.nullable(core.bool)),
    link: dart.finalFieldType(dart.nullable(core.bool)),
    header: dart.finalFieldType(dart.nullable(core.bool)),
    textField: dart.finalFieldType(dart.nullable(core.bool)),
    slider: dart.finalFieldType(dart.nullable(core.bool)),
    keyboardKey: dart.finalFieldType(dart.nullable(core.bool)),
    readOnly: dart.finalFieldType(dart.nullable(core.bool)),
    focusable: dart.finalFieldType(dart.nullable(core.bool)),
    focused: dart.finalFieldType(dart.nullable(core.bool)),
    inMutuallyExclusiveGroup: dart.finalFieldType(dart.nullable(core.bool)),
    hidden: dart.finalFieldType(dart.nullable(core.bool)),
    obscured: dart.finalFieldType(dart.nullable(core.bool)),
    multiline: dart.finalFieldType(dart.nullable(core.bool)),
    scopesRoute: dart.finalFieldType(dart.nullable(core.bool)),
    namesRoute: dart.finalFieldType(dart.nullable(core.bool)),
    image: dart.finalFieldType(dart.nullable(core.bool)),
    liveRegion: dart.finalFieldType(dart.nullable(core.bool)),
    maxValueLength: dart.finalFieldType(dart.nullable(core.int)),
    currentValueLength: dart.finalFieldType(dart.nullable(core.int)),
    label: dart.finalFieldType(dart.nullable(core.String)),
    attributedLabel: dart.finalFieldType(dart.nullable(semantics.AttributedString)),
    value: dart.finalFieldType(dart.nullable(core.String)),
    attributedValue: dart.finalFieldType(dart.nullable(semantics.AttributedString)),
    increasedValue: dart.finalFieldType(dart.nullable(core.String)),
    attributedIncreasedValue: dart.finalFieldType(dart.nullable(semantics.AttributedString)),
    decreasedValue: dart.finalFieldType(dart.nullable(core.String)),
    attributedDecreasedValue: dart.finalFieldType(dart.nullable(semantics.AttributedString)),
    hint: dart.finalFieldType(dart.nullable(core.String)),
    attributedHint: dart.finalFieldType(dart.nullable(semantics.AttributedString)),
    tooltip: dart.finalFieldType(dart.nullable(core.String)),
    hintOverrides: dart.finalFieldType(dart.nullable(semantics.SemanticsHintOverrides)),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    sortKey: dart.finalFieldType(dart.nullable(semantics.SemanticsSortKey)),
    tagForChildren: dart.finalFieldType(dart.nullable(semantics.SemanticsTag)),
    onTap: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onLongPress: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onScrollLeft: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onScrollRight: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onScrollUp: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onScrollDown: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onIncrease: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onDecrease: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onCopy: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onCut: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onPaste: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onMoveCursorForwardByCharacter: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    onMoveCursorBackwardByCharacter: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    onMoveCursorForwardByWord: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    onMoveCursorBackwardByWord: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    onSetSelection: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection]))),
    onSetText: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    onDidGainAccessibilityFocus: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onDidLoseAccessibilityFocus: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onDismiss: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    customSemanticsActions: dart.finalFieldType(dart.nullable(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))))
  }));
  semantics._BoxEdge = class _BoxEdge extends core.Object {
    static ['_#new#tearOff'](opts) {
      let isLeadingEdge = opts && 'isLeadingEdge' in opts ? opts.isLeadingEdge : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let node = opts && 'node' in opts ? opts.node : null;
      return new semantics._BoxEdge.new({isLeadingEdge: isLeadingEdge, offset: offset, node: node});
    }
    compareTo(other) {
      semantics._BoxEdge.as(other);
      return this.offset[$compareTo](other.offset);
    }
  };
  (semantics._BoxEdge.new = function(opts) {
    let isLeadingEdge = opts && 'isLeadingEdge' in opts ? opts.isLeadingEdge : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let node = opts && 'node' in opts ? opts.node : null;
    this.isLeadingEdge = isLeadingEdge;
    this.offset = offset;
    this.node = node;
    if (!(isLeadingEdge !== null)) dart.assertFailed(null, I[1], 2745, 15, "isLeadingEdge != null");
    if (!(offset !== null)) dart.assertFailed(null, I[1], 2746, 15, "offset != null");
    if (!offset[$isFinite]) dart.assertFailed(null, I[1], 2747, 15, "offset.isFinite");
    if (!(node !== null)) dart.assertFailed(null, I[1], 2748, 15, "node != null");
    ;
  }).prototype = semantics._BoxEdge.prototype;
  dart.addTypeTests(semantics._BoxEdge);
  dart.addTypeCaches(semantics._BoxEdge);
  semantics._BoxEdge[dart.implements] = () => [core.Comparable$(semantics._BoxEdge)];
  dart.setMethodSignature(semantics._BoxEdge, () => ({
    __proto__: dart.getMethods(semantics._BoxEdge.__proto__),
    compareTo: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [$compareTo]: dart.fnType(core.int, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(semantics._BoxEdge, I[0]);
  dart.setFieldSignature(semantics._BoxEdge, () => ({
    __proto__: dart.getFields(semantics._BoxEdge.__proto__),
    isLeadingEdge: dart.finalFieldType(core.bool),
    offset: dart.finalFieldType(core.double),
    node: dart.finalFieldType(semantics.SemanticsNode)
  }));
  dart.defineExtensionMethods(semantics._BoxEdge, ['compareTo']);
  semantics._SemanticsSortGroup = class _SemanticsSortGroup extends core.Comparable {
    static ['_#new#tearOff'](opts) {
      let startOffset = opts && 'startOffset' in opts ? opts.startOffset : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new semantics._SemanticsSortGroup.new({startOffset: startOffset, textDirection: textDirection});
    }
    compareTo(other) {
      semantics._SemanticsSortGroup.as(other);
      return this.startOffset[$compareTo](other.startOffset);
    }
    sortedWithinVerticalGroup() {
      let edges = T.JSArrayOf_BoxEdge().of([]);
      for (let child of this.nodes) {
        let childRect = child.rect.deflate(0.1);
        edges[$add](new semantics._BoxEdge.new({isLeadingEdge: true, offset: semantics._pointInParentCoordinates(child, childRect.topLeft).dx, node: child}));
        edges[$add](new semantics._BoxEdge.new({isLeadingEdge: false, offset: semantics._pointInParentCoordinates(child, childRect.bottomRight).dx, node: child}));
      }
      edges[$sort]();
      let horizontalGroups = T.JSArrayOf_SemanticsSortGroup().of([]);
      let group = null;
      let depth = 0;
      for (let edge of edges) {
        if (edge.isLeadingEdge) {
          depth = depth + 1;
          group == null ? group = new semantics._SemanticsSortGroup.new({startOffset: edge.offset, textDirection: this.textDirection}) : null;
          group.nodes[$add](edge.node);
        } else {
          depth = depth - 1;
        }
        if (depth === 0) {
          horizontalGroups[$add](dart.nullCheck(group));
          group = null;
        }
      }
      horizontalGroups[$sort]();
      if (this.textDirection === ui.TextDirection.rtl) {
        horizontalGroups = horizontalGroups[$reversed][$toList]();
      }
      return horizontalGroups[$expand](semantics.SemanticsNode, dart.fn(group => group.sortedWithinKnot(), T._SemanticsSortGroupToListOfSemanticsNode()))[$toList]();
    }
    sortedWithinKnot() {
      let t3;
      if (this.nodes[$length] <= 1) {
        return this.nodes;
      }
      let nodeMap = new (T.IdentityMapOfint$SemanticsNode()).new();
      let edges = new (T.IdentityMapOfint$int()).new();
      for (let node of this.nodes) {
        nodeMap[$_set](node.id, node);
        let center = semantics._pointInParentCoordinates(node, node.rect.center);
        for (let nextNode of this.nodes) {
          if (node === nextNode || edges[$_get](nextNode.id) === node.id) {
            continue;
          }
          let nextCenter = semantics._pointInParentCoordinates(nextNode, nextNode.rect.center);
          let centerDelta = nextCenter['-'](center);
          let direction = centerDelta.direction;
          let isLtrAndForward = this.textDirection === ui.TextDirection.ltr && -3.141592653589793 / 4 < direction && direction < 3 * 3.141592653589793 / 4;
          let isRtlAndForward = this.textDirection === ui.TextDirection.rtl && (direction < -3 * 3.141592653589793 / 4 || direction > 3 * 3.141592653589793 / 4);
          if (isLtrAndForward || isRtlAndForward) {
            edges[$_set](node.id, nextNode.id);
          }
        }
      }
      let sortedIds = T.JSArrayOfint().of([]);
      let visitedIds = T.LinkedHashSetOfint().new();
      let startNodes = (t3 = this.nodes[$toList](), (() => {
        t3[$sort](dart.fn((a, b) => {
          let aTopLeft = semantics._pointInParentCoordinates(a, a.rect.topLeft);
          let bTopLeft = semantics._pointInParentCoordinates(b, b.rect.topLeft);
          let verticalDiff = aTopLeft.dy[$compareTo](bTopLeft.dy);
          if (verticalDiff !== 0) {
            return -verticalDiff;
          }
          return -aTopLeft.dx[$compareTo](bTopLeft.dx);
        }, T.SemanticsNodeAndSemanticsNodeToint()));
        return t3;
      })());
      function search(id) {
        if (visitedIds.contains(id)) {
          return;
        }
        visitedIds.add(id);
        if (edges[$containsKey](id)) {
          search(dart.nullCheck(edges[$_get](id)));
        }
        sortedIds[$add](id);
      }
      dart.fn(search, T.intTovoid());
      startNodes[$map](core.int, dart.fn(node => node.id, T.SemanticsNodeToint()))[$forEach](search);
      return sortedIds[$map](semantics.SemanticsNode, dart.fn(id => dart.nullCheck(nodeMap[$_get](id)), T.intToSemanticsNode()))[$toList]()[$reversed][$toList]();
    }
  };
  (semantics._SemanticsSortGroup.new = function(opts) {
    let startOffset = opts && 'startOffset' in opts ? opts.startOffset : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this.nodes = T.JSArrayOfSemanticsNode().of([]);
    this.startOffset = startOffset;
    this.textDirection = textDirection;
    if (!(startOffset !== null)) dart.assertFailed(null, I[1], 2782, 15, "startOffset != null");
    ;
  }).prototype = semantics._SemanticsSortGroup.prototype;
  dart.addTypeTests(semantics._SemanticsSortGroup);
  dart.addTypeCaches(semantics._SemanticsSortGroup);
  dart.setMethodSignature(semantics._SemanticsSortGroup, () => ({
    __proto__: dart.getMethods(semantics._SemanticsSortGroup.__proto__),
    compareTo: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [$compareTo]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    sortedWithinVerticalGroup: dart.fnType(core.List$(semantics.SemanticsNode), []),
    sortedWithinKnot: dart.fnType(core.List$(semantics.SemanticsNode), [])
  }));
  dart.setLibraryUri(semantics._SemanticsSortGroup, I[0]);
  dart.setFieldSignature(semantics._SemanticsSortGroup, () => ({
    __proto__: dart.getFields(semantics._SemanticsSortGroup.__proto__),
    startOffset: dart.finalFieldType(core.double),
    textDirection: dart.finalFieldType(ui.TextDirection),
    nodes: dart.finalFieldType(core.List$(semantics.SemanticsNode))
  }));
  dart.defineExtensionMethods(semantics._SemanticsSortGroup, ['compareTo']);
  semantics._TraversalSortNode = class _TraversalSortNode extends core.Object {
    static ['_#new#tearOff'](opts) {
      let node = opts && 'node' in opts ? opts.node : null;
      let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
      let position = opts && 'position' in opts ? opts.position : null;
      return new semantics._TraversalSortNode.new({node: node, sortKey: sortKey, position: position});
    }
    compareTo(other) {
      semantics._TraversalSortNode.as(other);
      if (this.sortKey == null || other.sortKey == null) {
        return this.position - other.position;
      }
      return dart.nullCheck(this.sortKey).compareTo(dart.nullCheck(other.sortKey));
    }
  };
  (semantics._TraversalSortNode.new = function(opts) {
    let node = opts && 'node' in opts ? opts.node : null;
    let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this.node = node;
    this.sortKey = sortKey;
    this.position = position;
    if (!(node !== null)) dart.assertFailed(null, I[1], 3006, 14, "node != null");
    if (!(position !== null)) dart.assertFailed(null, I[1], 3007, 14, "position != null");
    ;
  }).prototype = semantics._TraversalSortNode.prototype;
  dart.addTypeTests(semantics._TraversalSortNode);
  dart.addTypeCaches(semantics._TraversalSortNode);
  semantics._TraversalSortNode[dart.implements] = () => [core.Comparable$(semantics._TraversalSortNode)];
  dart.setMethodSignature(semantics._TraversalSortNode, () => ({
    __proto__: dart.getMethods(semantics._TraversalSortNode.__proto__),
    compareTo: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [$compareTo]: dart.fnType(core.int, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(semantics._TraversalSortNode, I[0]);
  dart.setFieldSignature(semantics._TraversalSortNode, () => ({
    __proto__: dart.getFields(semantics._TraversalSortNode.__proto__),
    node: dart.finalFieldType(semantics.SemanticsNode),
    sortKey: dart.finalFieldType(dart.nullable(semantics.SemanticsSortKey)),
    position: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(semantics._TraversalSortNode, ['compareTo']);
  var _getSemanticsActionHandlerForId = dart.privateName(semantics, "_getSemanticsActionHandlerForId");
  var _getSemanticsActionHandlerForPosition = dart.privateName(semantics, "_getSemanticsActionHandlerForPosition");
  semantics.SemanticsOwner = class SemanticsOwner extends change_notifier.ChangeNotifier {
    get rootSemanticsNode() {
      return this[_nodes][$_get](0);
    }
    dispose() {
      this[_dirtyNodes].clear();
      this[_nodes][$clear]();
      this[_detachedNodes].clear();
      super.dispose();
    }
    sendSemanticsUpdate() {
      let t3, t3$, t3$0;
      if (this[_dirtyNodes][$isEmpty]) {
        return;
      }
      let customSemanticsActionIds = T.LinkedHashSetOfint().new();
      let visitedNodes = T.JSArrayOfSemanticsNode().of([]);
      while (this[_dirtyNodes][$isNotEmpty]) {
        let localDirtyNodes = this[_dirtyNodes][$where](dart.fn(node => !this[_detachedNodes].contains(node), T.SemanticsNodeTobool()))[$toList]();
        this[_dirtyNodes].clear();
        this[_detachedNodes].clear();
        localDirtyNodes[$sort](dart.fn((a, b) => a.depth - b.depth, T.SemanticsNodeAndSemanticsNodeToint()));
        visitedNodes[$addAll](localDirtyNodes);
        for (let node of localDirtyNodes) {
          if (!node[_dirty]) dart.assertFailed(null, I[1], 3069, 16, "node._dirty");
          if (!(node.parent == null || !dart.nullCheck(node.parent).isPartOfNodeMerging || node.isMergedIntoParent)) dart.assertFailed(null, I[1], 3070, 16, "node.parent == null || !node.parent!.isPartOfNodeMerging || node.isMergedIntoParent");
          if (node.isPartOfNodeMerging) {
            if (!(node.mergeAllDescendantsIntoThisNode || node.parent != null)) dart.assertFailed(null, I[1], 3072, 18, "node.mergeAllDescendantsIntoThisNode || node.parent != null");
            if (node.parent != null && dart.nullCheck(node.parent).isPartOfNodeMerging) {
              dart.nullCheck(node.parent)[_markDirty]();
              node[_dirty] = false;
            }
          }
        }
      }
      visitedNodes[$sort](dart.fn((a, b) => a.depth - b.depth, T.SemanticsNodeAndSemanticsNodeToint()));
      let builder = binding.SemanticsBinding.instance.createSemanticsUpdateBuilder();
      for (let node of visitedNodes) {
        if (!((t3 = node.parent, t3 == null ? null : t3[_dirty]) !== true)) dart.assertFailed(null, I[1], 3084, 14, "node.parent?._dirty != true");
        if (node[_dirty] && node.attached) {
          node[_addToUpdate](builder, customSemanticsActionIds);
        }
      }
      this[_dirtyNodes].clear();
      for (let actionId of customSemanticsActionIds) {
        let action = dart.nullCheck(semantics.CustomSemanticsAction.getAction(actionId));
        builder.updateCustomAction({id: actionId, label: action.label, hint: action.hint, overrideId: (t3$0 = (t3$ = action.action, t3$ == null ? null : t3$.index), t3$0 == null ? -1 : t3$0)});
      }
      binding.SemanticsBinding.instance.platformDispatcher.updateSemantics(builder.build());
      this.notifyListeners();
    }
    [_getSemanticsActionHandlerForId](id, action) {
      let result = this[_nodes][$_get](id);
      if (result != null && result.isPartOfNodeMerging && !result[_canPerformAction](action)) {
        result[_visitDescendants](dart.fn(node => {
          if (node[_canPerformAction](action)) {
            result = node;
            return false;
          }
          return true;
        }, T.SemanticsNodeTobool()));
      }
      if (result == null || !dart.nullCheck(result)[_canPerformAction](action)) {
        return null;
      }
      return dart.nullCheck(result)[_actions][$_get](action);
    }
    performAction(id, action, args = null) {
      if (!(action !== null)) dart.assertFailed(null, I[1], 3133, 12, "action != null");
      let handler = this[_getSemanticsActionHandlerForId](id, action);
      if (handler != null) {
        handler(args);
        return;
      }
      if (action[$_equals](ui.SemanticsAction.showOnScreen) && dart.nullCheck(this[_nodes][$_get](id))[_showOnScreen] != null) {
        dart.nullCheck(dart.nullCheck(this[_nodes][$_get](id))[_showOnScreen])();
      }
    }
    [_getSemanticsActionHandlerForPosition](node, position, action) {
      let t3;
      if (node.transform != null) {
        let inverse = vector_math_64.Matrix4.identity();
        if (inverse.copyInverse(dart.nullCheck(node.transform)) === 0.0) {
          return null;
        }
        position = matrix_utils.MatrixUtils.transformPoint(inverse, position);
      }
      if (!node.rect.contains(position)) {
        return null;
      }
      if (node.mergeAllDescendantsIntoThisNode) {
        let result = null;
        node[_visitDescendants](dart.fn(child => {
          if (child[_canPerformAction](action)) {
            result = child;
            return false;
          }
          return true;
        }, T.SemanticsNodeTobool()));
        t3 = result;
        return t3 == null ? null : t3[_actions][$_get](action);
      }
      if (node.hasChildren) {
        for (let child of dart.nullCheck(node[_children])[$reversed]) {
          let handler = this[_getSemanticsActionHandlerForPosition](child, position, action);
          if (handler != null) {
            return handler;
          }
        }
      }
      return node[_actions][$_get](action);
    }
    performActionAt(position, action, args = null) {
      if (!(action !== null)) dart.assertFailed(null, I[1], 3187, 12, "action != null");
      let node = this.rootSemanticsNode;
      if (node == null) {
        return;
      }
      let handler = this[_getSemanticsActionHandlerForPosition](node, position, action);
      if (handler != null) {
        handler(args);
      }
    }
    toString() {
      return diagnostics.describeIdentity(this);
    }
    static ['_#new#tearOff']() {
      return new semantics.SemanticsOwner.new();
    }
  };
  (semantics.SemanticsOwner.new = function() {
    this[_dirtyNodes] = T.LinkedHashSetOfSemanticsNode().new();
    this[_nodes] = new (T.IdentityMapOfint$SemanticsNode()).new();
    this[_detachedNodes] = T.LinkedHashSetOfSemanticsNode().new();
    semantics.SemanticsOwner.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsOwner.prototype;
  dart.addTypeTests(semantics.SemanticsOwner);
  dart.addTypeCaches(semantics.SemanticsOwner);
  dart.setMethodSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getMethods(semantics.SemanticsOwner.__proto__),
    sendSemanticsUpdate: dart.fnType(dart.void, []),
    [_getSemanticsActionHandlerForId]: dart.fnType(dart.nullable(dart.fnType(dart.void, [dart.nullable(core.Object)])), [core.int, ui.SemanticsAction]),
    performAction: dart.fnType(dart.void, [core.int, ui.SemanticsAction], [dart.nullable(core.Object)]),
    [_getSemanticsActionHandlerForPosition]: dart.fnType(dart.nullable(dart.fnType(dart.void, [dart.nullable(core.Object)])), [semantics.SemanticsNode, ui.Offset, ui.SemanticsAction]),
    performActionAt: dart.fnType(dart.void, [ui.Offset, ui.SemanticsAction], [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getGetters(semantics.SemanticsOwner.__proto__),
    rootSemanticsNode: dart.nullable(semantics.SemanticsNode)
  }));
  dart.setLibraryUri(semantics.SemanticsOwner, I[0]);
  dart.setFieldSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getFields(semantics.SemanticsOwner.__proto__),
    [_dirtyNodes]: dart.finalFieldType(core.Set$(semantics.SemanticsNode)),
    [_nodes]: dart.finalFieldType(core.Map$(core.int, semantics.SemanticsNode)),
    [_detachedNodes]: dart.finalFieldType(core.Set$(semantics.SemanticsNode))
  }));
  dart.defineExtensionMethods(semantics.SemanticsOwner, ['toString']);
  var explicitChildNodes = dart.privateName(semantics, "SemanticsConfiguration.explicitChildNodes");
  var isBlockingSemanticsOfPreviouslyPaintedNodes = dart.privateName(semantics, "SemanticsConfiguration.isBlockingSemanticsOfPreviouslyPaintedNodes");
  var _isSemanticBoundary = dart.privateName(semantics, "_isSemanticBoundary");
  var _hasBeenAnnotated = dart.privateName(semantics, "_hasBeenAnnotated");
  var _onTap = dart.privateName(semantics, "_onTap");
  var _onLongPress = dart.privateName(semantics, "_onLongPress");
  var _onScrollLeft = dart.privateName(semantics, "_onScrollLeft");
  var _onDismiss = dart.privateName(semantics, "_onDismiss");
  var _onScrollRight = dart.privateName(semantics, "_onScrollRight");
  var _onScrollUp = dart.privateName(semantics, "_onScrollUp");
  var _onScrollDown = dart.privateName(semantics, "_onScrollDown");
  var _onIncrease = dart.privateName(semantics, "_onIncrease");
  var _onDecrease = dart.privateName(semantics, "_onDecrease");
  var _onCopy = dart.privateName(semantics, "_onCopy");
  var _onCut = dart.privateName(semantics, "_onCut");
  var _onPaste = dart.privateName(semantics, "_onPaste");
  var _onShowOnScreen = dart.privateName(semantics, "_onShowOnScreen");
  var _onMoveCursorForwardByCharacter = dart.privateName(semantics, "_onMoveCursorForwardByCharacter");
  var _onMoveCursorBackwardByCharacter = dart.privateName(semantics, "_onMoveCursorBackwardByCharacter");
  var _onMoveCursorForwardByWord = dart.privateName(semantics, "_onMoveCursorForwardByWord");
  var _onMoveCursorBackwardByWord = dart.privateName(semantics, "_onMoveCursorBackwardByWord");
  var _onSetSelection = dart.privateName(semantics, "_onSetSelection");
  var _onSetText = dart.privateName(semantics, "_onSetText");
  var _onDidGainAccessibilityFocus = dart.privateName(semantics, "_onDidGainAccessibilityFocus");
  var _onDidLoseAccessibilityFocus = dart.privateName(semantics, "_onDidLoseAccessibilityFocus");
  var _indexInParent = dart.privateName(semantics, "_indexInParent");
  var _isMergingSemanticsOfDescendants = dart.privateName(semantics, "_isMergingSemanticsOfDescendants");
  var _tagsForChildren = dart.privateName(semantics, "_tagsForChildren");
  var _addAction = dart.privateName(semantics, "_addAction");
  var _addArgumentlessAction = dart.privateName(semantics, "_addArgumentlessAction");
  var _onCustomSemanticsAction = dart.privateName(semantics, "_onCustomSemanticsAction");
  var _hasFlag = dart.privateName(semantics, "_hasFlag");
  var _setFlag = dart.privateName(semantics, "_setFlag");
  semantics.SemanticsConfiguration = class SemanticsConfiguration extends core.Object {
    get explicitChildNodes() {
      return this[explicitChildNodes];
    }
    set explicitChildNodes(value) {
      this[explicitChildNodes] = value;
    }
    get isBlockingSemanticsOfPreviouslyPaintedNodes() {
      return this[isBlockingSemanticsOfPreviouslyPaintedNodes];
    }
    set isBlockingSemanticsOfPreviouslyPaintedNodes(value) {
      this[isBlockingSemanticsOfPreviouslyPaintedNodes] = value;
    }
    get isSemanticBoundary() {
      return this[_isSemanticBoundary];
    }
    set isSemanticBoundary(value) {
      if (!(!this.isMergingSemanticsOfDescendants || value)) dart.assertFailed(null, I[1], 3227, 12, "!isMergingSemanticsOfDescendants || value");
      this[_isSemanticBoundary] = value;
    }
    get hasBeenAnnotated() {
      return this[_hasBeenAnnotated];
    }
    [_addAction](action, handler) {
      if (!(handler !== null)) dart.assertFailed(null, I[1], 3289, 12, "handler != null");
      this[_actions][$_set](action, handler);
      this[_actionsAsBits] = (this[_actionsAsBits] | action.index) >>> 0;
      this[_hasBeenAnnotated] = true;
    }
    [_addArgumentlessAction](action, handler) {
      if (!(handler !== null)) dart.assertFailed(null, I[1], 3301, 12, "handler != null");
      this[_addAction](action, dart.fn(args => {
        if (!(args == null)) dart.assertFailed(null, I[1], 3303, 14, "args == null");
        handler();
      }, T.ObjectNTovoid()));
    }
    get onTap() {
      return this[_onTap];
    }
    set onTap(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.tap, dart.nullCheck(value));
      this[_onTap] = value;
    }
    get onLongPress() {
      return this[_onLongPress];
    }
    set onLongPress(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.longPress, dart.nullCheck(value));
      this[_onLongPress] = value;
    }
    get onScrollLeft() {
      return this[_onScrollLeft];
    }
    set onScrollLeft(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollLeft, dart.nullCheck(value));
      this[_onScrollLeft] = value;
    }
    get onDismiss() {
      return this[_onDismiss];
    }
    set onDismiss(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.dismiss, dart.nullCheck(value));
      this[_onDismiss] = value;
    }
    get onScrollRight() {
      return this[_onScrollRight];
    }
    set onScrollRight(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollRight, dart.nullCheck(value));
      this[_onScrollRight] = value;
    }
    get onScrollUp() {
      return this[_onScrollUp];
    }
    set onScrollUp(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollUp, dart.nullCheck(value));
      this[_onScrollUp] = value;
    }
    get onScrollDown() {
      return this[_onScrollDown];
    }
    set onScrollDown(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollDown, dart.nullCheck(value));
      this[_onScrollDown] = value;
    }
    get onIncrease() {
      return this[_onIncrease];
    }
    set onIncrease(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.increase, dart.nullCheck(value));
      this[_onIncrease] = value;
    }
    get onDecrease() {
      return this[_onDecrease];
    }
    set onDecrease(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.decrease, dart.nullCheck(value));
      this[_onDecrease] = value;
    }
    get onCopy() {
      return this[_onCopy];
    }
    set onCopy(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.copy, dart.nullCheck(value));
      this[_onCopy] = value;
    }
    get onCut() {
      return this[_onCut];
    }
    set onCut(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.cut, dart.nullCheck(value));
      this[_onCut] = value;
    }
    get onPaste() {
      return this[_onPaste];
    }
    set onPaste(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.paste, dart.nullCheck(value));
      this[_onPaste] = value;
    }
    get onShowOnScreen() {
      return this[_onShowOnScreen];
    }
    set onShowOnScreen(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.showOnScreen, dart.nullCheck(value));
      this[_onShowOnScreen] = value;
    }
    get onMoveCursorForwardByCharacter() {
      return this[_onMoveCursorForwardByCharacter];
    }
    set onMoveCursorForwardByCharacter(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 3540, 12, "value != null");
      this[_addAction](ui.SemanticsAction.moveCursorForwardByCharacter, dart.fn(args => {
        let extendSelection = core.bool.as(dart.nullCheck(args));
        dart.nullCheck(value)(extendSelection);
      }, T.ObjectNTovoid()));
      this[_onMoveCursorForwardByCharacter] = value;
    }
    get onMoveCursorBackwardByCharacter() {
      return this[_onMoveCursorBackwardByCharacter];
    }
    set onMoveCursorBackwardByCharacter(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 3558, 12, "value != null");
      this[_addAction](ui.SemanticsAction.moveCursorBackwardByCharacter, dart.fn(args => {
        let extendSelection = core.bool.as(dart.nullCheck(args));
        dart.nullCheck(value)(extendSelection);
      }, T.ObjectNTovoid()));
      this[_onMoveCursorBackwardByCharacter] = value;
    }
    get onMoveCursorForwardByWord() {
      return this[_onMoveCursorForwardByWord];
    }
    set onMoveCursorForwardByWord(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 3576, 12, "value != null");
      this[_addAction](ui.SemanticsAction.moveCursorForwardByWord, dart.fn(args => {
        let extendSelection = core.bool.as(dart.nullCheck(args));
        dart.nullCheck(value)(extendSelection);
      }, T.ObjectNTovoid()));
      this[_onMoveCursorForwardByCharacter] = value;
    }
    get onMoveCursorBackwardByWord() {
      return this[_onMoveCursorBackwardByWord];
    }
    set onMoveCursorBackwardByWord(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 3594, 12, "value != null");
      this[_addAction](ui.SemanticsAction.moveCursorBackwardByWord, dart.fn(args => {
        let extendSelection = core.bool.as(dart.nullCheck(args));
        dart.nullCheck(value)(extendSelection);
      }, T.ObjectNTovoid()));
      this[_onMoveCursorBackwardByCharacter] = value;
    }
    get onSetSelection() {
      return this[_onSetSelection];
    }
    set onSetSelection(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 3612, 12, "value != null");
      this[_addAction](ui.SemanticsAction.setSelection, dart.fn(args => {
        if (!(args != null && core.Map.is(args))) dart.assertFailed(null, I[1], 3614, 14, "args != null && args is Map");
        let selection = core.Map.as(dart.nullCheck(args))[$cast](core.String, core.int);
        if (!(selection !== null && selection[$_get]("base") != null && selection[$_get]("extent") != null)) dart.assertFailed(null, I[1], 3616, 14, "selection != null && selection['base'] != null && selection['extent'] != null");
        dart.nullCheck(value)(new text_editing.TextSelection.new({baseOffset: dart.nullCheck(selection[$_get]("base")), extentOffset: dart.nullCheck(selection[$_get]("extent"))}));
      }, T.ObjectNTovoid()));
      this[_onSetSelection] = value;
    }
    get onSetText() {
      return this[_onSetText];
    }
    set onSetText(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 3635, 12, "value != null");
      this[_addAction](ui.SemanticsAction.setText, dart.fn(args => {
        if (!(args != null && typeof args == 'string')) dart.assertFailed(null, I[1], 3637, 14, "args != null && args is String");
        let text = core.String.as(dart.nullCheck(args));
        dart.nullCheck(value)(text);
      }, T.ObjectNTovoid()));
      this[_onSetText] = value;
    }
    get onDidGainAccessibilityFocus() {
      return this[_onDidGainAccessibilityFocus];
    }
    set onDidGainAccessibilityFocus(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.didGainAccessibilityFocus, dart.nullCheck(value));
      this[_onDidGainAccessibilityFocus] = value;
    }
    get onDidLoseAccessibilityFocus() {
      return this[_onDidLoseAccessibilityFocus];
    }
    set onDidLoseAccessibilityFocus(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.didLoseAccessibilityFocus, dart.nullCheck(value));
      this[_onDidLoseAccessibilityFocus] = value;
    }
    getActionHandler(action) {
      return this[_actions][$_get](action);
    }
    get sortKey() {
      return this[_sortKey];
    }
    set sortKey(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 3710, 12, "value != null");
      this[_sortKey] = value;
      this[_hasBeenAnnotated] = true;
    }
    get indexInParent() {
      return this[_indexInParent];
    }
    set indexInParent(value) {
      this[_indexInParent] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollChildCount() {
      return this[_scrollChildCount];
    }
    set scrollChildCount(value) {
      if (value == this.scrollChildCount) {
        return;
      }
      this[_scrollChildCount] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollIndex() {
      return this[_scrollIndex];
    }
    set scrollIndex(value) {
      if (value == this.scrollIndex) {
        return;
      }
      this[_scrollIndex] = value;
      this[_hasBeenAnnotated] = true;
    }
    get platformViewId() {
      return this[_platformViewId];
    }
    set platformViewId(value) {
      if (value == this.platformViewId) {
        return;
      }
      this[_platformViewId] = value;
      this[_hasBeenAnnotated] = true;
    }
    get maxValueLength() {
      return this[_maxValueLength];
    }
    set maxValueLength(value) {
      if (value == this.maxValueLength) {
        return;
      }
      this[_maxValueLength] = value;
      this[_hasBeenAnnotated] = true;
    }
    get currentValueLength() {
      return this[_currentValueLength];
    }
    set currentValueLength(value) {
      if (value == this.currentValueLength) {
        return;
      }
      this[_currentValueLength] = value;
      this[_hasBeenAnnotated] = true;
    }
    get isMergingSemanticsOfDescendants() {
      return this[_isMergingSemanticsOfDescendants];
    }
    set isMergingSemanticsOfDescendants(value) {
      if (!this.isSemanticBoundary) dart.assertFailed(null, I[1], 3813, 12, "isSemanticBoundary");
      this[_isMergingSemanticsOfDescendants] = value;
      this[_hasBeenAnnotated] = true;
    }
    get customSemanticsActions() {
      return this[_customSemanticsActions];
    }
    set customSemanticsActions(value) {
      this[_hasBeenAnnotated] = true;
      this[_actionsAsBits] = (this[_actionsAsBits] | ui.SemanticsAction.customAction.index) >>> 0;
      this[_customSemanticsActions] = value;
      this[_actions][$_set](ui.SemanticsAction.customAction, dart.bind(this, _onCustomSemanticsAction));
    }
    [_onCustomSemanticsAction](args) {
      let action = semantics.CustomSemanticsAction.getAction(core.int.as(dart.nullCheck(args)));
      if (action == null) {
        return;
      }
      let callback = this[_customSemanticsActions][$_get](action);
      if (callback != null) {
        callback();
      }
    }
    get label() {
      return this[_attributedLabel].string;
    }
    set label(label) {
      if (!(label !== null)) dart.assertFailed(null, I[1], 3855, 12, "label != null");
      this[_attributedLabel] = new semantics.AttributedString.new(label);
      this[_hasBeenAnnotated] = true;
    }
    get attributedLabel() {
      return this[_attributedLabel];
    }
    set attributedLabel(attributedLabel) {
      this[_attributedLabel] = attributedLabel;
      this[_hasBeenAnnotated] = true;
    }
    get value() {
      return this[_attributedValue].string;
    }
    set value(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 3896, 12, "value != null");
      this[_attributedValue] = new semantics.AttributedString.new(value);
      this[_hasBeenAnnotated] = true;
    }
    get attributedValue() {
      return this[_attributedValue];
    }
    set attributedValue(attributedValue) {
      this[_attributedValue] = attributedValue;
      this[_hasBeenAnnotated] = true;
    }
    get increasedValue() {
      return this[_attributedIncreasedValue].string;
    }
    set increasedValue(increasedValue) {
      if (!(increasedValue !== null)) dart.assertFailed(null, I[1], 3942, 12, "increasedValue != null");
      this[_attributedIncreasedValue] = new semantics.AttributedString.new(increasedValue);
      this[_hasBeenAnnotated] = true;
    }
    get attributedIncreasedValue() {
      return this[_attributedIncreasedValue];
    }
    set attributedIncreasedValue(attributedIncreasedValue) {
      this[_attributedIncreasedValue] = attributedIncreasedValue;
      this[_hasBeenAnnotated] = true;
    }
    get decreasedValue() {
      return this[_attributedDecreasedValue].string;
    }
    set decreasedValue(decreasedValue) {
      if (!(decreasedValue !== null)) dart.assertFailed(null, I[1], 3980, 12, "decreasedValue != null");
      this[_attributedDecreasedValue] = new semantics.AttributedString.new(decreasedValue);
      this[_hasBeenAnnotated] = true;
    }
    get attributedDecreasedValue() {
      return this[_attributedDecreasedValue];
    }
    set attributedDecreasedValue(attributedDecreasedValue) {
      this[_attributedDecreasedValue] = attributedDecreasedValue;
      this[_hasBeenAnnotated] = true;
    }
    get hint() {
      return this[_attributedHint].string;
    }
    set hint(hint) {
      if (!(hint !== null)) dart.assertFailed(null, I[1], 4015, 12, "hint != null");
      this[_attributedHint] = new semantics.AttributedString.new(hint);
      this[_hasBeenAnnotated] = true;
    }
    get attributedHint() {
      return this[_attributedHint];
    }
    set attributedHint(attributedHint) {
      this[_attributedHint] = attributedHint;
      this[_hasBeenAnnotated] = true;
    }
    get tooltip() {
      return this[_tooltip];
    }
    set tooltip(tooltip) {
      this[_tooltip] = tooltip;
      this[_hasBeenAnnotated] = true;
    }
    get hintOverrides() {
      return this[_hintOverrides];
    }
    set hintOverrides(value) {
      if (value == null) {
        return;
      }
      this[_hintOverrides] = value;
      this[_hasBeenAnnotated] = true;
    }
    get elevation() {
      return this[_elevation];
    }
    set elevation(value) {
      if (!(value !== null && value >= 0.0)) dart.assertFailed(null, I[1], 4068, 12, "value != null && value >= 0.0");
      if (value === this[_elevation]) {
        return;
      }
      this[_elevation] = value;
      this[_hasBeenAnnotated] = true;
    }
    get thickness() {
      return this[_thickness];
    }
    set thickness(value) {
      if (!(value !== null && value >= 0.0)) dart.assertFailed(null, I[1], 4085, 12, "value != null && value >= 0.0");
      if (value === this[_thickness]) {
        return;
      }
      this[_thickness] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scopesRoute() {
      return this[_hasFlag](ui.SemanticsFlag.scopesRoute);
    }
    set scopesRoute(value) {
      this[_setFlag](ui.SemanticsFlag.scopesRoute, value);
    }
    get namesRoute() {
      return this[_hasFlag](ui.SemanticsFlag.namesRoute);
    }
    set namesRoute(value) {
      this[_setFlag](ui.SemanticsFlag.namesRoute, value);
    }
    get isImage() {
      return this[_hasFlag](ui.SemanticsFlag.isImage);
    }
    set isImage(value) {
      this[_setFlag](ui.SemanticsFlag.isImage, value);
    }
    get liveRegion() {
      return this[_hasFlag](ui.SemanticsFlag.isLiveRegion);
    }
    set liveRegion(value) {
      this[_setFlag](ui.SemanticsFlag.isLiveRegion, value);
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(textDirection) {
      this[_textDirection] = textDirection;
      this[_hasBeenAnnotated] = true;
    }
    get isSelected() {
      return this[_hasFlag](ui.SemanticsFlag.isSelected);
    }
    set isSelected(value) {
      this[_setFlag](ui.SemanticsFlag.isSelected, value);
    }
    get isEnabled() {
      return this[_hasFlag](ui.SemanticsFlag.hasEnabledState) ? this[_hasFlag](ui.SemanticsFlag.isEnabled) : null;
    }
    set isEnabled(value) {
      this[_setFlag](ui.SemanticsFlag.hasEnabledState, true);
      this[_setFlag](ui.SemanticsFlag.isEnabled, dart.nullCheck(value));
    }
    get isChecked() {
      return this[_hasFlag](ui.SemanticsFlag.hasCheckedState) ? this[_hasFlag](ui.SemanticsFlag.isChecked) : null;
    }
    set isChecked(value) {
      this[_setFlag](ui.SemanticsFlag.hasCheckedState, true);
      this[_setFlag](ui.SemanticsFlag.isChecked, dart.nullCheck(value));
    }
    get isToggled() {
      return this[_hasFlag](ui.SemanticsFlag.hasToggledState) ? this[_hasFlag](ui.SemanticsFlag.isToggled) : null;
    }
    set isToggled(value) {
      this[_setFlag](ui.SemanticsFlag.hasToggledState, true);
      this[_setFlag](ui.SemanticsFlag.isToggled, dart.nullCheck(value));
    }
    get isInMutuallyExclusiveGroup() {
      return this[_hasFlag](ui.SemanticsFlag.isInMutuallyExclusiveGroup);
    }
    set isInMutuallyExclusiveGroup(value) {
      this[_setFlag](ui.SemanticsFlag.isInMutuallyExclusiveGroup, value);
    }
    get isFocusable() {
      return this[_hasFlag](ui.SemanticsFlag.isFocusable);
    }
    set isFocusable(value) {
      this[_setFlag](ui.SemanticsFlag.isFocusable, value);
    }
    get isFocused() {
      return this[_hasFlag](ui.SemanticsFlag.isFocused);
    }
    set isFocused(value) {
      this[_setFlag](ui.SemanticsFlag.isFocused, value);
    }
    get isButton() {
      return this[_hasFlag](ui.SemanticsFlag.isButton);
    }
    set isButton(value) {
      this[_setFlag](ui.SemanticsFlag.isButton, value);
    }
    get isLink() {
      return this[_hasFlag](ui.SemanticsFlag.isLink);
    }
    set isLink(value) {
      this[_setFlag](ui.SemanticsFlag.isLink, value);
    }
    get isHeader() {
      return this[_hasFlag](ui.SemanticsFlag.isHeader);
    }
    set isHeader(value) {
      this[_setFlag](ui.SemanticsFlag.isHeader, value);
    }
    get isSlider() {
      return this[_hasFlag](ui.SemanticsFlag.isSlider);
    }
    set isSlider(value) {
      this[_setFlag](ui.SemanticsFlag.isSlider, value);
    }
    get isKeyboardKey() {
      return this[_hasFlag](ui.SemanticsFlag.isKeyboardKey);
    }
    set isKeyboardKey(value) {
      this[_setFlag](ui.SemanticsFlag.isKeyboardKey, value);
    }
    get isHidden() {
      return this[_hasFlag](ui.SemanticsFlag.isHidden);
    }
    set isHidden(value) {
      this[_setFlag](ui.SemanticsFlag.isHidden, value);
    }
    get isTextField() {
      return this[_hasFlag](ui.SemanticsFlag.isTextField);
    }
    set isTextField(value) {
      this[_setFlag](ui.SemanticsFlag.isTextField, value);
    }
    get isReadOnly() {
      return this[_hasFlag](ui.SemanticsFlag.isReadOnly);
    }
    set isReadOnly(value) {
      this[_setFlag](ui.SemanticsFlag.isReadOnly, value);
    }
    get isObscured() {
      return this[_hasFlag](ui.SemanticsFlag.isObscured);
    }
    set isObscured(value) {
      this[_setFlag](ui.SemanticsFlag.isObscured, value);
    }
    get isMultiline() {
      return this[_hasFlag](ui.SemanticsFlag.isMultiline);
    }
    set isMultiline(value) {
      this[_setFlag](ui.SemanticsFlag.isMultiline, value);
    }
    get hasImplicitScrolling() {
      return this[_hasFlag](ui.SemanticsFlag.hasImplicitScrolling);
    }
    set hasImplicitScrolling(value) {
      this[_setFlag](ui.SemanticsFlag.hasImplicitScrolling, value);
    }
    get textSelection() {
      return this[_textSelection];
    }
    set textSelection(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 4335, 12, "value != null");
      this[_textSelection] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollPosition() {
      return this[_scrollPosition];
    }
    set scrollPosition(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 4353, 12, "value != null");
      this[_scrollPosition] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollExtentMax() {
      return this[_scrollExtentMax];
    }
    set scrollExtentMax(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 4369, 12, "value != null");
      this[_scrollExtentMax] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollExtentMin() {
      return this[_scrollExtentMin];
    }
    set scrollExtentMin(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 4385, 12, "value != null");
      this[_scrollExtentMin] = value;
      this[_hasBeenAnnotated] = true;
    }
    get tagsForChildren() {
      return this[_tagsForChildren];
    }
    addTagForChildren(tag) {
      this[_tagsForChildren] == null ? this[_tagsForChildren] = T.LinkedHashSetOfSemanticsTag().new() : null;
      dart.nullCheck(this[_tagsForChildren]).add(tag);
    }
    [_setFlag](flag, value) {
      if (value) {
        this[_flags] = (this[_flags] | flag.index) >>> 0;
      } else {
        this[_flags] = (this[_flags] & ~flag.index >>> 0) >>> 0;
      }
      this[_hasBeenAnnotated] = true;
    }
    [_hasFlag](flag) {
      return (this[_flags] & flag.index) !== 0;
    }
    isCompatibleWith(other) {
      if (other == null || !other.hasBeenAnnotated || !this.hasBeenAnnotated) {
        return true;
      }
      if ((this[_actionsAsBits] & other[_actionsAsBits]) !== 0) {
        return false;
      }
      if ((this[_flags] & other[_flags]) !== 0) {
        return false;
      }
      if (this[_platformViewId] != null && other[_platformViewId] != null) {
        return false;
      }
      if (this[_maxValueLength] != null && other[_maxValueLength] != null) {
        return false;
      }
      if (this[_currentValueLength] != null && other[_currentValueLength] != null) {
        return false;
      }
      if (this[_attributedValue] !== null && this[_attributedValue].string[$isNotEmpty] && other[_attributedValue] !== null && other[_attributedValue].string[$isNotEmpty]) {
        return false;
      }
      return true;
    }
    absorb(child) {
      if (!!this.explicitChildNodes) dart.assertFailed(null, I[1], 4480, 12, "!explicitChildNodes");
      if (!child.hasBeenAnnotated) {
        return;
      }
      this[_actions][$addAll](child[_actions]);
      this[_customSemanticsActions][$addAll](child[_customSemanticsActions]);
      this[_actionsAsBits] = (this[_actionsAsBits] | child[_actionsAsBits]) >>> 0;
      this[_flags] = (this[_flags] | child[_flags]) >>> 0;
      this[_textSelection] == null ? this[_textSelection] = child[_textSelection] : null;
      this[_scrollPosition] == null ? this[_scrollPosition] = child[_scrollPosition] : null;
      this[_scrollExtentMax] == null ? this[_scrollExtentMax] = child[_scrollExtentMax] : null;
      this[_scrollExtentMin] == null ? this[_scrollExtentMin] = child[_scrollExtentMin] : null;
      this[_hintOverrides] == null ? this[_hintOverrides] = child[_hintOverrides] : null;
      this[_indexInParent] == null ? this[_indexInParent] = child.indexInParent : null;
      this[_scrollIndex] == null ? this[_scrollIndex] = child[_scrollIndex] : null;
      this[_scrollChildCount] == null ? this[_scrollChildCount] = child[_scrollChildCount] : null;
      this[_platformViewId] == null ? this[_platformViewId] = child[_platformViewId] : null;
      this[_maxValueLength] == null ? this[_maxValueLength] = child[_maxValueLength] : null;
      this[_currentValueLength] == null ? this[_currentValueLength] = child[_currentValueLength] : null;
      this.textDirection == null ? this.textDirection = child.textDirection : null;
      this[_sortKey] == null ? this[_sortKey] = child[_sortKey] : null;
      this[_attributedLabel] = semantics._concatAttributedString({thisAttributedString: this[_attributedLabel], thisTextDirection: this.textDirection, otherAttributedString: child[_attributedLabel], otherTextDirection: child.textDirection});
      if (this[_attributedValue] === null || this[_attributedValue].string === "") {
        this[_attributedValue] = child[_attributedValue];
      }
      if (this[_attributedIncreasedValue] === null || this[_attributedIncreasedValue].string === "") {
        this[_attributedIncreasedValue] = child[_attributedIncreasedValue];
      }
      if (this[_attributedDecreasedValue] === null || this[_attributedDecreasedValue].string === "") {
        this[_attributedDecreasedValue] = child[_attributedDecreasedValue];
      }
      this[_attributedHint] = semantics._concatAttributedString({thisAttributedString: this[_attributedHint], thisTextDirection: this.textDirection, otherAttributedString: child[_attributedHint], otherTextDirection: child.textDirection});
      if (this[_tooltip] === "") {
        this[_tooltip] = child[_tooltip];
      }
      this[_thickness] = math.max(core.double, this[_thickness], child[_thickness] + child[_elevation]);
      this[_hasBeenAnnotated] = this[_hasBeenAnnotated] || child[_hasBeenAnnotated];
    }
    copy() {
      let t3;
      t3 = new semantics.SemanticsConfiguration.new();
      return (() => {
        t3[_isSemanticBoundary] = this[_isSemanticBoundary];
        t3.explicitChildNodes = this.explicitChildNodes;
        t3.isBlockingSemanticsOfPreviouslyPaintedNodes = this.isBlockingSemanticsOfPreviouslyPaintedNodes;
        t3[_hasBeenAnnotated] = this[_hasBeenAnnotated];
        t3[_isMergingSemanticsOfDescendants] = this[_isMergingSemanticsOfDescendants];
        t3[_textDirection] = this[_textDirection];
        t3[_sortKey] = this[_sortKey];
        t3[_attributedLabel] = this[_attributedLabel];
        t3[_attributedIncreasedValue] = this[_attributedIncreasedValue];
        t3[_attributedValue] = this[_attributedValue];
        t3[_attributedDecreasedValue] = this[_attributedDecreasedValue];
        t3[_attributedHint] = this[_attributedHint];
        t3[_hintOverrides] = this[_hintOverrides];
        t3[_tooltip] = this[_tooltip];
        t3[_elevation] = this[_elevation];
        t3[_thickness] = this[_thickness];
        t3[_flags] = this[_flags];
        t3[_tagsForChildren] = this[_tagsForChildren];
        t3[_textSelection] = this[_textSelection];
        t3[_scrollPosition] = this[_scrollPosition];
        t3[_scrollExtentMax] = this[_scrollExtentMax];
        t3[_scrollExtentMin] = this[_scrollExtentMin];
        t3[_actionsAsBits] = this[_actionsAsBits];
        t3[_indexInParent] = this.indexInParent;
        t3[_scrollIndex] = this[_scrollIndex];
        t3[_scrollChildCount] = this[_scrollChildCount];
        t3[_platformViewId] = this[_platformViewId];
        t3[_maxValueLength] = this[_maxValueLength];
        t3[_currentValueLength] = this[_currentValueLength];
        t3[_actions][$addAll](this[_actions]);
        t3[_customSemanticsActions][$addAll](this[_customSemanticsActions]);
        return t3;
      })();
    }
    static ['_#new#tearOff']() {
      return new semantics.SemanticsConfiguration.new();
    }
  };
  (semantics.SemanticsConfiguration.new = function() {
    this[_isSemanticBoundary] = false;
    this[explicitChildNodes] = false;
    this[isBlockingSemanticsOfPreviouslyPaintedNodes] = false;
    this[_hasBeenAnnotated] = false;
    this[_actions] = new (T.LinkedMapOfSemanticsAction$ObjectNTovoid()).new();
    this[_actionsAsBits] = 0;
    this[_onTap] = null;
    this[_onLongPress] = null;
    this[_onScrollLeft] = null;
    this[_onDismiss] = null;
    this[_onScrollRight] = null;
    this[_onScrollUp] = null;
    this[_onScrollDown] = null;
    this[_onIncrease] = null;
    this[_onDecrease] = null;
    this[_onCopy] = null;
    this[_onCut] = null;
    this[_onPaste] = null;
    this[_onShowOnScreen] = null;
    this[_onMoveCursorForwardByCharacter] = null;
    this[_onMoveCursorBackwardByCharacter] = null;
    this[_onMoveCursorForwardByWord] = null;
    this[_onMoveCursorBackwardByWord] = null;
    this[_onSetSelection] = null;
    this[_onSetText] = null;
    this[_onDidGainAccessibilityFocus] = null;
    this[_onDidLoseAccessibilityFocus] = null;
    this[_sortKey] = null;
    this[_indexInParent] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[_isMergingSemanticsOfDescendants] = false;
    this[_customSemanticsActions] = new (T.LinkedMapOfCustomSemanticsAction$VoidTovoid()).new();
    this[_attributedLabel] = new semantics.AttributedString.new("");
    this[_attributedValue] = new semantics.AttributedString.new("");
    this[_attributedIncreasedValue] = new semantics.AttributedString.new("");
    this[_attributedDecreasedValue] = new semantics.AttributedString.new("");
    this[_attributedHint] = new semantics.AttributedString.new("");
    this[_tooltip] = "";
    this[_hintOverrides] = null;
    this[_elevation] = 0.0;
    this[_thickness] = 0.0;
    this[_textDirection] = null;
    this[_textSelection] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_tagsForChildren] = null;
    this[_flags] = 0;
    ;
  }).prototype = semantics.SemanticsConfiguration.prototype;
  dart.addTypeTests(semantics.SemanticsConfiguration);
  dart.addTypeCaches(semantics.SemanticsConfiguration);
  dart.setMethodSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getMethods(semantics.SemanticsConfiguration.__proto__),
    [_addAction]: dart.fnType(dart.void, [ui.SemanticsAction, dart.fnType(dart.void, [dart.nullable(core.Object)])]),
    [_addArgumentlessAction]: dart.fnType(dart.void, [ui.SemanticsAction, dart.fnType(dart.void, [])]),
    getActionHandler: dart.fnType(dart.nullable(dart.fnType(dart.void, [dart.nullable(core.Object)])), [ui.SemanticsAction]),
    [_onCustomSemanticsAction]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    addTagForChildren: dart.fnType(dart.void, [semantics.SemanticsTag]),
    [_setFlag]: dart.fnType(dart.void, [ui.SemanticsFlag, core.bool]),
    [_hasFlag]: dart.fnType(core.bool, [ui.SemanticsFlag]),
    isCompatibleWith: dart.fnType(core.bool, [dart.nullable(semantics.SemanticsConfiguration)]),
    absorb: dart.fnType(dart.void, [semantics.SemanticsConfiguration]),
    copy: dart.fnType(semantics.SemanticsConfiguration, [])
  }));
  dart.setGetterSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getGetters(semantics.SemanticsConfiguration.__proto__),
    isSemanticBoundary: core.bool,
    hasBeenAnnotated: core.bool,
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onScrollLeft: dart.nullable(dart.fnType(dart.void, [])),
    onDismiss: dart.nullable(dart.fnType(dart.void, [])),
    onScrollRight: dart.nullable(dart.fnType(dart.void, [])),
    onScrollUp: dart.nullable(dart.fnType(dart.void, [])),
    onScrollDown: dart.nullable(dart.fnType(dart.void, [])),
    onIncrease: dart.nullable(dart.fnType(dart.void, [])),
    onDecrease: dart.nullable(dart.fnType(dart.void, [])),
    onCopy: dart.nullable(dart.fnType(dart.void, [])),
    onCut: dart.nullable(dart.fnType(dart.void, [])),
    onPaste: dart.nullable(dart.fnType(dart.void, [])),
    onShowOnScreen: dart.nullable(dart.fnType(dart.void, [])),
    onMoveCursorForwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorForwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onSetSelection: dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection])),
    onSetText: dart.nullable(dart.fnType(dart.void, [core.String])),
    onDidGainAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    onDidLoseAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    sortKey: dart.nullable(semantics.SemanticsSortKey),
    indexInParent: dart.nullable(core.int),
    scrollChildCount: dart.nullable(core.int),
    scrollIndex: dart.nullable(core.int),
    platformViewId: dart.nullable(core.int),
    maxValueLength: dart.nullable(core.int),
    currentValueLength: dart.nullable(core.int),
    isMergingSemanticsOfDescendants: core.bool,
    customSemanticsActions: core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])),
    label: core.String,
    attributedLabel: semantics.AttributedString,
    value: core.String,
    attributedValue: semantics.AttributedString,
    increasedValue: core.String,
    attributedIncreasedValue: semantics.AttributedString,
    decreasedValue: core.String,
    attributedDecreasedValue: semantics.AttributedString,
    hint: core.String,
    attributedHint: semantics.AttributedString,
    tooltip: core.String,
    hintOverrides: dart.nullable(semantics.SemanticsHintOverrides),
    elevation: core.double,
    thickness: core.double,
    scopesRoute: core.bool,
    namesRoute: core.bool,
    isImage: core.bool,
    liveRegion: core.bool,
    textDirection: dart.nullable(ui.TextDirection),
    isSelected: core.bool,
    isEnabled: dart.nullable(core.bool),
    isChecked: dart.nullable(core.bool),
    isToggled: dart.nullable(core.bool),
    isInMutuallyExclusiveGroup: core.bool,
    isFocusable: core.bool,
    isFocused: core.bool,
    isButton: core.bool,
    isLink: core.bool,
    isHeader: core.bool,
    isSlider: core.bool,
    isKeyboardKey: core.bool,
    isHidden: core.bool,
    isTextField: core.bool,
    isReadOnly: core.bool,
    isObscured: core.bool,
    isMultiline: core.bool,
    hasImplicitScrolling: core.bool,
    textSelection: dart.nullable(text_editing.TextSelection),
    scrollPosition: dart.nullable(core.double),
    scrollExtentMax: dart.nullable(core.double),
    scrollExtentMin: dart.nullable(core.double),
    tagsForChildren: dart.nullable(core.Iterable$(semantics.SemanticsTag))
  }));
  dart.setSetterSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getSetters(semantics.SemanticsConfiguration.__proto__),
    isSemanticBoundary: core.bool,
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onScrollLeft: dart.nullable(dart.fnType(dart.void, [])),
    onDismiss: dart.nullable(dart.fnType(dart.void, [])),
    onScrollRight: dart.nullable(dart.fnType(dart.void, [])),
    onScrollUp: dart.nullable(dart.fnType(dart.void, [])),
    onScrollDown: dart.nullable(dart.fnType(dart.void, [])),
    onIncrease: dart.nullable(dart.fnType(dart.void, [])),
    onDecrease: dart.nullable(dart.fnType(dart.void, [])),
    onCopy: dart.nullable(dart.fnType(dart.void, [])),
    onCut: dart.nullable(dart.fnType(dart.void, [])),
    onPaste: dart.nullable(dart.fnType(dart.void, [])),
    onShowOnScreen: dart.nullable(dart.fnType(dart.void, [])),
    onMoveCursorForwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorForwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onSetSelection: dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection])),
    onSetText: dart.nullable(dart.fnType(dart.void, [core.String])),
    onDidGainAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    onDidLoseAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    sortKey: dart.nullable(semantics.SemanticsSortKey),
    indexInParent: dart.nullable(core.int),
    scrollChildCount: dart.nullable(core.int),
    scrollIndex: dart.nullable(core.int),
    platformViewId: dart.nullable(core.int),
    maxValueLength: dart.nullable(core.int),
    currentValueLength: dart.nullable(core.int),
    isMergingSemanticsOfDescendants: core.bool,
    customSemanticsActions: core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])),
    label: core.String,
    attributedLabel: semantics.AttributedString,
    value: core.String,
    attributedValue: semantics.AttributedString,
    increasedValue: core.String,
    attributedIncreasedValue: semantics.AttributedString,
    decreasedValue: core.String,
    attributedDecreasedValue: semantics.AttributedString,
    hint: core.String,
    attributedHint: semantics.AttributedString,
    tooltip: core.String,
    hintOverrides: dart.nullable(semantics.SemanticsHintOverrides),
    elevation: core.double,
    thickness: core.double,
    scopesRoute: core.bool,
    namesRoute: core.bool,
    isImage: core.bool,
    liveRegion: core.bool,
    textDirection: dart.nullable(ui.TextDirection),
    isSelected: core.bool,
    isEnabled: dart.nullable(core.bool),
    isChecked: dart.nullable(core.bool),
    isToggled: dart.nullable(core.bool),
    isInMutuallyExclusiveGroup: core.bool,
    isFocusable: core.bool,
    isFocused: core.bool,
    isButton: core.bool,
    isLink: core.bool,
    isHeader: core.bool,
    isSlider: core.bool,
    isKeyboardKey: core.bool,
    isHidden: core.bool,
    isTextField: core.bool,
    isReadOnly: core.bool,
    isObscured: core.bool,
    isMultiline: core.bool,
    hasImplicitScrolling: core.bool,
    textSelection: dart.nullable(text_editing.TextSelection),
    scrollPosition: dart.nullable(core.double),
    scrollExtentMax: dart.nullable(core.double),
    scrollExtentMin: dart.nullable(core.double)
  }));
  dart.setLibraryUri(semantics.SemanticsConfiguration, I[0]);
  dart.setFieldSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getFields(semantics.SemanticsConfiguration.__proto__),
    [_isSemanticBoundary]: dart.fieldType(core.bool),
    explicitChildNodes: dart.fieldType(core.bool),
    isBlockingSemanticsOfPreviouslyPaintedNodes: dart.fieldType(core.bool),
    [_hasBeenAnnotated]: dart.fieldType(core.bool),
    [_actions]: dart.finalFieldType(core.Map$(ui.SemanticsAction, dart.fnType(dart.void, [dart.nullable(core.Object)]))),
    [_actionsAsBits]: dart.fieldType(core.int),
    [_onTap]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onLongPress]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollLeft]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDismiss]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollRight]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollUp]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollDown]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onIncrease]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDecrease]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onCopy]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onCut]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onPaste]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onShowOnScreen]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onMoveCursorForwardByCharacter]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorBackwardByCharacter]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorForwardByWord]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorBackwardByWord]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onSetSelection]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection]))),
    [_onSetText]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    [_onDidGainAccessibilityFocus]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDidLoseAccessibilityFocus]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_sortKey]: dart.fieldType(dart.nullable(semantics.SemanticsSortKey)),
    [_indexInParent]: dart.fieldType(dart.nullable(core.int)),
    [_scrollChildCount]: dart.fieldType(dart.nullable(core.int)),
    [_scrollIndex]: dart.fieldType(dart.nullable(core.int)),
    [_platformViewId]: dart.fieldType(dart.nullable(core.int)),
    [_maxValueLength]: dart.fieldType(dart.nullable(core.int)),
    [_currentValueLength]: dart.fieldType(dart.nullable(core.int)),
    [_isMergingSemanticsOfDescendants]: dart.fieldType(core.bool),
    [_customSemanticsActions]: dart.fieldType(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))),
    [_attributedLabel]: dart.fieldType(semantics.AttributedString),
    [_attributedValue]: dart.fieldType(semantics.AttributedString),
    [_attributedIncreasedValue]: dart.fieldType(semantics.AttributedString),
    [_attributedDecreasedValue]: dart.fieldType(semantics.AttributedString),
    [_attributedHint]: dart.fieldType(semantics.AttributedString),
    [_tooltip]: dart.fieldType(core.String),
    [_hintOverrides]: dart.fieldType(dart.nullable(semantics.SemanticsHintOverrides)),
    [_elevation]: dart.fieldType(core.double),
    [_thickness]: dart.fieldType(core.double),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_textSelection]: dart.fieldType(dart.nullable(text_editing.TextSelection)),
    [_scrollPosition]: dart.fieldType(dart.nullable(core.double)),
    [_scrollExtentMax]: dart.fieldType(dart.nullable(core.double)),
    [_scrollExtentMin]: dart.fieldType(dart.nullable(core.double)),
    [_tagsForChildren]: dart.fieldType(dart.nullable(core.Set$(semantics.SemanticsTag))),
    [_flags]: dart.fieldType(core.int)
  }));
  var _name = dart.privateName(core, "_name");
  semantics.DebugSemanticsDumpOrder = class DebugSemanticsDumpOrder extends core._Enum {
    toString() {
      return "DebugSemanticsDumpOrder." + this[_name];
    }
  };
  (semantics.DebugSemanticsDumpOrder.new = function(index, name) {
    semantics.DebugSemanticsDumpOrder.__proto__.new.call(this, index, name);
    ;
  }).prototype = semantics.DebugSemanticsDumpOrder.prototype;
  dart.addTypeTests(semantics.DebugSemanticsDumpOrder);
  dart.addTypeCaches(semantics.DebugSemanticsDumpOrder);
  dart.setLibraryUri(semantics.DebugSemanticsDumpOrder, I[0]);
  dart.setStaticFieldSignature(semantics.DebugSemanticsDumpOrder, () => ['values', 'inverseHitTest', 'traversalOrder']);
  dart.defineExtensionMethods(semantics.DebugSemanticsDumpOrder, ['toString']);
  dart.defineLazy(semantics.DebugSemanticsDumpOrder, {
    /*semantics.DebugSemanticsDumpOrder.values*/get values() {
      return C[8] || CT.C8;
    },
    /*semantics.DebugSemanticsDumpOrder.inverseHitTest*/get inverseHitTest() {
      return C[7] || CT.C7;
    },
    /*semantics.DebugSemanticsDumpOrder.traversalOrder*/get traversalOrder() {
      return C[5] || CT.C5;
    }
  }, false);
  var name$0 = dart.privateName(semantics, "SemanticsSortKey.name");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  semantics.SemanticsSortKey = class SemanticsSortKey extends Object_Diagnosticable$36$ {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    compareTo(other) {
      semantics.SemanticsSortKey.as(other);
      if (!this[$runtimeType]._equals(other[$runtimeType])) dart.assertFailed("Semantics sort keys can only be compared to other sort keys of the same type.", I[1], 4647, 12, "runtimeType == other.runtimeType");
      if (this.name == other.name) {
        return this.doCompare(other);
      }
      if (this.name == null && other.name != null) {
        return -1;
      } else if (this.name != null && other.name == null) {
        return 1;
      }
      return dart.nullCheck(this.name)[$compareTo](dart.nullCheck(other.name));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("name", this.name, {defaultValue: null}));
    }
  };
  (semantics.SemanticsSortKey.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    this[name$0] = name;
    ;
  }).prototype = semantics.SemanticsSortKey.prototype;
  dart.addTypeTests(semantics.SemanticsSortKey);
  dart.addTypeCaches(semantics.SemanticsSortKey);
  semantics.SemanticsSortKey[dart.implements] = () => [core.Comparable$(semantics.SemanticsSortKey)];
  dart.setMethodSignature(semantics.SemanticsSortKey, () => ({
    __proto__: dart.getMethods(semantics.SemanticsSortKey.__proto__),
    compareTo: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [$compareTo]: dart.fnType(core.int, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(semantics.SemanticsSortKey, I[0]);
  dart.setFieldSignature(semantics.SemanticsSortKey, () => ({
    __proto__: dart.getFields(semantics.SemanticsSortKey.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(semantics.SemanticsSortKey, ['compareTo']);
  var order$ = dart.privateName(semantics, "OrdinalSortKey.order");
  semantics.OrdinalSortKey = class OrdinalSortKey extends semantics.SemanticsSortKey {
    get order() {
      return this[order$];
    }
    set order(value) {
      super.order = value;
    }
    static ['_#new#tearOff'](order, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      return new semantics.OrdinalSortKey.new(order, {name: name});
    }
    doCompare(other) {
      semantics.OrdinalSortKey.as(other);
      if (other.order === null || this.order === null || other.order === this.order) {
        return 0;
      }
      return this.order[$compareTo](other.order);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("order", this.order, {defaultValue: null}));
    }
  };
  (semantics.OrdinalSortKey.new = function(order, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    this[order$] = order;
    if (!(order !== null)) dart.assertFailed(null, I[1], 4710, 15, "order != null");
    if (!(order !== 0 / 0)) dart.assertFailed(null, I[1], 4711, 15, "order != double.nan");
    if (!(order > -1 / 0)) dart.assertFailed(null, I[1], 4712, 15, "order > double.negativeInfinity");
    if (!(order < 1 / 0)) dart.assertFailed(null, I[1], 4713, 15, "order < double.infinity");
    semantics.OrdinalSortKey.__proto__.new.call(this, {name: name});
    ;
  }).prototype = semantics.OrdinalSortKey.prototype;
  dart.addTypeTests(semantics.OrdinalSortKey);
  dart.addTypeCaches(semantics.OrdinalSortKey);
  dart.setMethodSignature(semantics.OrdinalSortKey, () => ({
    __proto__: dart.getMethods(semantics.OrdinalSortKey.__proto__),
    doCompare: dart.fnType(core.int, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(semantics.OrdinalSortKey, I[0]);
  dart.setFieldSignature(semantics.OrdinalSortKey, () => ({
    __proto__: dart.getFields(semantics.OrdinalSortKey.__proto__),
    order: dart.finalFieldType(core.double)
  }));
  semantics.debugResetSemanticsIdCounter = function debugResetSemanticsIdCounter() {
    semantics.SemanticsNode._lastIdentifier = 0;
  };
  semantics._pointInParentCoordinates = function _pointInParentCoordinates(node, point) {
    if (node.transform == null) {
      return point;
    }
    let vector = vector_math_64.Vector3.new(point.dx, point.dy, 0.0);
    dart.nullCheck(node.transform).transform3(vector);
    return new ui.Offset.new(vector.x, vector.y);
  };
  semantics._childrenInDefaultOrder = function _childrenInDefaultOrder(children, textDirection) {
    let edges = T.JSArrayOf_BoxEdge().of([]);
    for (let child of children) {
      if (!child.rect.isFinite) dart.assertFailed(null, I[1], 2951, 12, "child.rect.isFinite");
      let childRect = child.rect.deflate(0.1);
      edges[$add](new semantics._BoxEdge.new({isLeadingEdge: true, offset: semantics._pointInParentCoordinates(child, childRect.topLeft).dy, node: child}));
      edges[$add](new semantics._BoxEdge.new({isLeadingEdge: false, offset: semantics._pointInParentCoordinates(child, childRect.bottomRight).dy, node: child}));
    }
    edges[$sort]();
    let verticalGroups = T.JSArrayOf_SemanticsSortGroup().of([]);
    let group = null;
    let depth = 0;
    for (let edge of edges) {
      if (edge.isLeadingEdge) {
        depth = depth + 1;
        group == null ? group = new semantics._SemanticsSortGroup.new({startOffset: edge.offset, textDirection: textDirection}) : null;
        group.nodes[$add](edge.node);
      } else {
        depth = depth - 1;
      }
      if (depth === 0) {
        verticalGroups[$add](dart.nullCheck(group));
        group = null;
      }
    }
    verticalGroups[$sort]();
    return verticalGroups[$expand](semantics.SemanticsNode, dart.fn(group => group.sortedWithinVerticalGroup(), T._SemanticsSortGroupToListOfSemanticsNode()))[$toList]();
  };
  semantics._concatAttributedString = function _concatAttributedString(opts) {
    let thisAttributedString = opts && 'thisAttributedString' in opts ? opts.thisAttributedString : null;
    let otherAttributedString = opts && 'otherAttributedString' in opts ? opts.otherAttributedString : null;
    let thisTextDirection = opts && 'thisTextDirection' in opts ? opts.thisTextDirection : null;
    let otherTextDirection = opts && 'otherTextDirection' in opts ? opts.otherTextDirection : null;
    if (otherAttributedString.string[$isEmpty]) {
      return thisAttributedString;
    }
    if (thisTextDirection != otherTextDirection && otherTextDirection != null) {
      switch (otherTextDirection) {
        case C[9] || CT.C9:
          {
            otherAttributedString = new semantics.AttributedString.new("‫")['+'](otherAttributedString)['+'](new semantics.AttributedString.new("‬"));
            break;
          }
        case C[10] || CT.C10:
          {
            otherAttributedString = new semantics.AttributedString.new("‪")['+'](otherAttributedString)['+'](new semantics.AttributedString.new("‬"));
            break;
          }
      }
    }
    if (thisAttributedString.string[$isEmpty]) {
      return otherAttributedString;
    }
    return thisAttributedString['+'](new semantics.AttributedString.new("\n"))['+'](otherAttributedString);
  };
  dart.setBaseClass(semantics._SemanticsSortGroup, core.Comparable$(semantics._SemanticsSortGroup));
  dart.trackLibraries("packages/flutter/src/semantics/semantics.dart", {
    "package:flutter/src/semantics/semantics.dart": semantics
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["semantics.dart"],"names":[],"mappings":"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D,KAAK,mCAAe,kBAAkB,2BAAqB;AAC6C,MAAlH,AAAW,UAAD,KAAK,2CAAyB,4BAA4B,8CAAwC;AACjC,MAA3E,AAAW,UAAD,KAAK,mCAAe,kBAAkB,2BAAqB;AAC6C,MAAlH,AAAW,UAAD,KAAK,2CAAyB,4BAA4B,8CAAwC;AAC5C,MAAhE,AAAW,UAAD,KAAK,mCAAe,QAAQ,0BAAoB;AACoC,MAA9F,AAAW,UAAD,KAAK,2CAAyB,kBAAkB,oCAA8B;AACtC,MAAlD,AAAW,UAAD,KAAK,mCAAe,WAAW;AACsD,MAA/F,AAAW,UAAD,KAAK,0CAA4B,iBAAiB,mCAA6B;AACI,MAA7F,AAAW,UAAD,KAAK,oDAAsC,WAAW,6BAAuB;AACwB,MAA/G,AAAW,UAAD,KAAK,0DAA4C,iBAAiB,mCAA6B;IAC3G;;AAG0B,sCAAkB,MAAM;IAAsB;;;QA9tBjE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IA1DA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACK,AAAM,AAAQ,KAAT,YAAY,AAAgB,eAAD,6BAAU;UAC1C,AAAM,AAAQ,KAAT,YAAY,AAAgB,eAAD,6BAAU;UAC1C,AAAe,AAAQ,cAAT,YAAY,AAAyB,wBAAD,6BAAU;UA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","file":"../../../../../../../../../../packages/flutter/src/semantics/semantics.dart.lib.js"}');
  // Exports:
  return {
    src__semantics__semantics: semantics
  };
}));

//# sourceMappingURL=semantics.dart.lib.js.map
