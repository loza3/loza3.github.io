define(['dart_sdk', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/stack_frame.dart'], (function load__packages__flutter__src__foundation__debug_dart(dart_sdk, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__stack_frame$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const math$ = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const stack_frame = packages__flutter__src__foundation__stack_frame$46dart.src__foundation__stack_frame;
  var debug = Object.create(dart.library);
  var diagnostics$ = Object.create(dart.library);
  var assertions = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $toStringAsPrecision = dartx.toStringAsPrecision;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $times = dartx['*'];
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $clear = dartx.clear;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $add = dartx.add;
  var $split = dartx.split;
  var $isNotEmpty = dartx.isNotEmpty;
  var $last = dartx.last;
  var $trimRight = dartx.trimRight;
  var $endsWith = dartx.endsWith;
  var $toUpperCase = dartx.toUpperCase;
  var $contains = dartx.contains;
  var $where = dartx.where;
  var $take = dartx.take;
  var $toList = dartx.toList;
  var $first = dartx.first;
  var $_set = dartx._set;
  var $runtimeType = dartx.runtimeType;
  var $addAll = dartx.addAll;
  var $map = dartx.map;
  var $toString = dartx.toString;
  var $isFinite = dartx.isFinite;
  var $replaceAll = dartx.replaceAll;
  var $join = dartx.join;
  var $values = dartx.values;
  var $any = dartx.any;
  var $entries = dartx.entries;
  var $hashCode = dartx.hashCode;
  var $toUnsigned = dartx.toUnsigned;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $indexOf = dartx.indexOf;
  var $allMatches = dartx.allMatches;
  var $startsWith = dartx.startsWith;
  var $skip = dartx.skip;
  var $setRange = dartx.setRange;
  var $lastIndexOf = dartx.lastIndexOf;
  var $trimLeft = dartx.trimLeft;
  var $cast = dartx.cast;
  var $firstWhere = dartx.firstWhere;
  var $skipWhile = dartx.skipWhile;
  var $forEach = dartx.forEach;
  var $containsKey = dartx.containsKey;
  var $update = dartx.update;
  var $removeAt = dartx.removeAt;
  var $sort = dartx.sort;
  var $single = dartx.single;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    StringN__Tovoid: () => (T$.StringN__Tovoid = dart.constFn(dart.fnType(dart.void, [T$.StringN()], {wrapWidth: T$.intN()}, {})))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfint: () => (T$.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    VoidToint: () => (T$.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    intTodynamic: () => (T$.intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))(),
    intTobool: () => (T$.intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))(),
    DiagnosticsNodeTovoid: () => (T$.DiagnosticsNodeTovoid = dart.constFn(dart.fnType(dart.void, [diagnostics$.DiagnosticsNode])))(),
    DiagnosticsNodeTobool: () => (T$.DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [diagnostics$.DiagnosticsNode])))(),
    DiagnosticsPropertyOfvoid: () => (T$.DiagnosticsPropertyOfvoid = dart.constFn(diagnostics$.DiagnosticsProperty$(dart.void)))(),
    IdentityMapOfString$String: () => (T$.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$ObjectN: () => (T$.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T$.ObjectN())))(),
    MapOfString$ObjectN: () => (T$.MapOfString$ObjectN = dart.constFn(core.Map$(core.String, T$.ObjectN())))(),
    DiagnosticsNodeToMapOfString$ObjectN: () => (T$.DiagnosticsNodeToMapOfString$ObjectN = dart.constFn(dart.fnType(T$.MapOfString$ObjectN(), [diagnostics$.DiagnosticsNode])))(),
    DiagnosticableNodeOfDiagnosticable: () => (T$.DiagnosticableNodeOfDiagnosticable = dart.constFn(diagnostics$.DiagnosticableNode$(diagnostics$.Diagnosticable)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics$.DiagnosticsNode)))(),
    ListOfString: () => (T$.ListOfString = dart.constFn(core.List$(core.String)))(),
    JSArrayOfObject: () => (T$.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))(),
    VoidToString: () => (T$.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    DiagnosticsNodeN: () => (T$.DiagnosticsNodeN = dart.constFn(dart.nullable(diagnostics$.DiagnosticsNode)))(),
    DiagnosticsNodeNTobool: () => (T$.DiagnosticsNodeNTobool = dart.constFn(dart.fnType(core.bool, [T$.DiagnosticsNodeN()])))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    StackFrameTobool: () => (T$.StackFrameTobool = dart.constFn(dart.fnType(core.bool, [stack_frame.StackFrame])))(),
    IterableOfDiagnosticsNode: () => (T$.IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics$.DiagnosticsNode)))(),
    IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode: () => (T$.IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(T$.IterableOfDiagnosticsNode(), [T$.IterableOfDiagnosticsNode()])))(),
    JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode: () => (T$.JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(T$.IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode())))(),
    DiagnosticsPropertyOfFlutterError: () => (T$.DiagnosticsPropertyOfFlutterError = dart.constFn(diagnostics$.DiagnosticsProperty$(assertions.FlutterError)))(),
    DiagnosticsPropertyOfDiagnosticsNode: () => (T$.DiagnosticsPropertyOfDiagnosticsNode = dart.constFn(diagnostics$.DiagnosticsProperty$(diagnostics$.DiagnosticsNode)))(),
    StringToErrorDescription: () => (T$.StringToErrorDescription = dart.constFn(dart.fnType(assertions.ErrorDescription, [core.String])))(),
    IdentityMapOfString$int: () => (T$.IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))(),
    intToint: () => (T$.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    ListOfStringN: () => (T$.ListOfStringN = dart.constFn(core.List$(T$.StringN())))(),
    DiagnosticsNodeToString: () => (T$.DiagnosticsNodeToString = dart.constFn(dart.fnType(core.String, [diagnostics$.DiagnosticsNode])))(),
    StackTraceToStackTrace: () => (T$.StackTraceToStackTrace = dart.constFn(dart.fnType(core.StackTrace, [core.StackTrace])))(),
    FlutterErrorDetails__Tovoid: () => (T$.FlutterErrorDetails__Tovoid = dart.constFn(dart.fnType(dart.void, [assertions.FlutterErrorDetails], {forceReport: core.bool}, {})))(),
    JSArrayOfStackFilter: () => (T$.JSArrayOfStackFilter = dart.constFn(_interceptors.JSArray$(assertions.StackFilter)))(),
    IterableOfString: () => (T$.IterableOfString = dart.constFn(core.Iterable$(core.String)))(),
    IterableOfStringToIterableOfString: () => (T$.IterableOfStringToIterableOfString = dart.constFn(dart.fnType(T$.IterableOfString(), [T$.IterableOfString()])))(),
    StringToDiagnosticsNode: () => (T$.StringToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics$.DiagnosticsNode, [core.String])))(),
    StringTobool: () => (T$.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(print.debugPrintThrottled, T$.StringN__Tovoid());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "hidden",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "fine",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "debug",
        [_Enum_index]: 2
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "info",
        [_Enum_index]: 3
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "warning",
        [_Enum_index]: 4
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "hint",
        [_Enum_index]: 5
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "summary",
        [_Enum_index]: 6
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "error",
        [_Enum_index]: 7
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_Enum__name]: "off",
        [_Enum_index]: 8
      });
    },
    get C1() {
      return C[1] = dart.constList([C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10], diagnostics$.DiagnosticLevel);
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "sparse",
        [_Enum_index]: 1
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "offstage",
        [_Enum_index]: 2
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "dense",
        [_Enum_index]: 3
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "transition",
        [_Enum_index]: 4
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "error",
        [_Enum_index]: 5
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "whitespace",
        [_Enum_index]: 6
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "flat",
        [_Enum_index]: 7
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "singleLine",
        [_Enum_index]: 8
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "errorProperty",
        [_Enum_index]: 9
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "shallow",
        [_Enum_index]: 10
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "truncateChildren",
        [_Enum_index]: 11
      });
    },
    get C11() {
      return C[11] = dart.constList([C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17, C[18] || CT.C18, C[19] || CT.C19, C[20] || CT.C20, C[21] || CT.C21, C[22] || CT.C22, C[23] || CT.C23], diagnostics$.DiagnosticsTreeStyle);
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_Enum__name]: "inSpace",
        [_Enum_index]: 0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_Enum__name]: "inWord",
        [_Enum_index]: 1
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_Enum__name]: "atBreak",
        [_Enum_index]: 2
      });
    },
    get C24() {
      return C[24] = dart.constList([C[25] || CT.C25, C[26] || CT.C26, C[27] || CT.C27], diagnostics$._WordWrapParseMode);
    },
    get C28() {
      return C[28] = dart.constList([], T$.MapOfString$ObjectN());
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: diagnostics$._NoDefaultValue.prototype
      });
    },
    get C30() {
      return C[30] = dart.constList([], diagnostics$.DiagnosticsNode);
    },
    get C31() {
      return C[31] = dart.constMap(core.String, T$.ObjectN(), []);
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: assertions.PartialStackFrame.prototype,
        [method$]: "asynchronous suspension",
        [className$]: "",
        [$package$]: ""
      });
    },
    get C33() {
      return C[33] = dart.fn(assertions.FlutterError._defaultStackTraceDemangler, T$.StackTraceToStackTrace());
    },
    get C34() {
      return C[34] = dart.fn(assertions.FlutterError.dumpErrorToConsole, T$.FlutterErrorDetails__Tovoid());
    },
    get C35() {
      return C[35] = dart.fn(assertions.FlutterError.defaultStackFilter, T$.IterableOfStringToIterableOfString());
    },
    get C36() {
      return C[36] = dart.fn(assertions.DiagnosticsStackTrace._createStackFrame, T$.StringToDiagnosticsNode());
    }
  }, false);
  var C = Array(37).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/foundation/debug.dart",
    "package:flutter/src/foundation/diagnostics.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/foundation/diagnostics.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/foundation/assertions.dart",
    "package:flutter/src/foundation/assertions.dart"
  ];
  debug.debugAssertAllFoundationVarsUnset = function debugAssertAllFoundationVarsUnset(reason, opts) {
    let debugPrintOverride = opts && 'debugPrintOverride' in opts ? opts.debugPrintOverride : C[0] || CT.C0;
    if (!dart.fn(() => {
      if (!print.debugPrint[$_equals](debugPrintOverride) || platform.debugDefaultTargetPlatformOverride != null || debug.debugDoublePrecision != null || debug.debugBrightnessOverride != null) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 29, 10, "() {\n    if (debugPrint != debugPrintOverride ||\n        debugDefaultTargetPlatformOverride != null ||\n        debugDoublePrecision != null ||\n        debugBrightnessOverride != null) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  debug.debugInstrumentAction = function debugInstrumentAction(T, description, action) {
    return async.async(T, function* debugInstrumentAction() {
      let t0;
      let instrument = false;
      if (!dart.fn(() => {
        instrument = debug.debugInstrumentationEnabled;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 73, 10, "() {\n    instrument = debugInstrumentationEnabled;\n    return true;\n  }()");
      if (instrument) {
        let stopwatch = (t0 = new core.Stopwatch.new(), (() => {
          t0.start();
          return t0;
        })());
        try {
          return yield action();
        } finally {
          stopwatch.stop();
          print.debugPrint("Action \"" + description + "\" took " + dart.str(stopwatch.elapsed));
        }
      } else {
        return action();
      }
    });
  };
  debug.debugFormatDouble = function debugFormatDouble(value) {
    if (value == null) {
      return "null";
    }
    if (debug.debugDoublePrecision != null) {
      return value[$toStringAsPrecision](dart.nullCheck(debug.debugDoublePrecision));
    }
    return value[$toStringAsFixed](1);
  };
  dart.defineLazy(debug, {
    /*debug.debugInstrumentationEnabled*/get debugInstrumentationEnabled() {
      return false;
    },
    set debugInstrumentationEnabled(_) {},
    /*debug.debugDoublePrecision*/get debugDoublePrecision() {
      return null;
    },
    set debugDoublePrecision(_) {},
    /*debug.debugBrightnessOverride*/get debugBrightnessOverride() {
      return null;
    },
    set debugBrightnessOverride(_) {},
    /*debug.activeDevToolsServerAddress*/get activeDevToolsServerAddress() {
      return null;
    },
    set activeDevToolsServerAddress(_) {},
    /*debug.connectedVmServiceUri*/get connectedVmServiceUri() {
      return null;
    },
    set connectedVmServiceUri(_) {}
  }, false);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  diagnostics$.DiagnosticLevel = class DiagnosticLevel extends core._Enum {
    toString() {
      return "DiagnosticLevel." + this[_name];
    }
  };
  (diagnostics$.DiagnosticLevel.new = function(index, name) {
    diagnostics$.DiagnosticLevel.__proto__.new.call(this, index, name);
    ;
  }).prototype = diagnostics$.DiagnosticLevel.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticLevel);
  dart.addTypeCaches(diagnostics$.DiagnosticLevel);
  dart.setLibraryUri(diagnostics$.DiagnosticLevel, I[1]);
  dart.setStaticFieldSignature(diagnostics$.DiagnosticLevel, () => ['values', 'hidden', 'fine', 'debug', 'info', 'warning', 'hint', 'summary', 'error', 'off']);
  dart.defineExtensionMethods(diagnostics$.DiagnosticLevel, ['toString']);
  dart.defineLazy(diagnostics$.DiagnosticLevel, {
    /*diagnostics$.DiagnosticLevel.values*/get values() {
      return C[1] || CT.C1;
    },
    /*diagnostics$.DiagnosticLevel.hidden*/get hidden() {
      return C[2] || CT.C2;
    },
    /*diagnostics$.DiagnosticLevel.fine*/get fine() {
      return C[3] || CT.C3;
    },
    /*diagnostics$.DiagnosticLevel.debug*/get debug() {
      return C[4] || CT.C4;
    },
    /*diagnostics$.DiagnosticLevel.info*/get info() {
      return C[5] || CT.C5;
    },
    /*diagnostics$.DiagnosticLevel.warning*/get warning() {
      return C[6] || CT.C6;
    },
    /*diagnostics$.DiagnosticLevel.hint*/get hint() {
      return C[7] || CT.C7;
    },
    /*diagnostics$.DiagnosticLevel.summary*/get summary() {
      return C[8] || CT.C8;
    },
    /*diagnostics$.DiagnosticLevel.error*/get error() {
      return C[9] || CT.C9;
    },
    /*diagnostics$.DiagnosticLevel.off*/get off() {
      return C[10] || CT.C10;
    }
  }, false);
  diagnostics$.DiagnosticsTreeStyle = class DiagnosticsTreeStyle extends core._Enum {
    toString() {
      return "DiagnosticsTreeStyle." + this[_name];
    }
  };
  (diagnostics$.DiagnosticsTreeStyle.new = function(index, name) {
    diagnostics$.DiagnosticsTreeStyle.__proto__.new.call(this, index, name);
    ;
  }).prototype = diagnostics$.DiagnosticsTreeStyle.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsTreeStyle);
  dart.addTypeCaches(diagnostics$.DiagnosticsTreeStyle);
  dart.setLibraryUri(diagnostics$.DiagnosticsTreeStyle, I[1]);
  dart.setStaticFieldSignature(diagnostics$.DiagnosticsTreeStyle, () => ['values', 'none', 'sparse', 'offstage', 'dense', 'transition', 'error', 'whitespace', 'flat', 'singleLine', 'errorProperty', 'shallow', 'truncateChildren']);
  dart.defineExtensionMethods(diagnostics$.DiagnosticsTreeStyle, ['toString']);
  dart.defineLazy(diagnostics$.DiagnosticsTreeStyle, {
    /*diagnostics$.DiagnosticsTreeStyle.values*/get values() {
      return C[11] || CT.C11;
    },
    /*diagnostics$.DiagnosticsTreeStyle.none*/get none() {
      return C[12] || CT.C12;
    },
    /*diagnostics$.DiagnosticsTreeStyle.sparse*/get sparse() {
      return C[13] || CT.C13;
    },
    /*diagnostics$.DiagnosticsTreeStyle.offstage*/get offstage() {
      return C[14] || CT.C14;
    },
    /*diagnostics$.DiagnosticsTreeStyle.dense*/get dense() {
      return C[15] || CT.C15;
    },
    /*diagnostics$.DiagnosticsTreeStyle.transition*/get transition() {
      return C[16] || CT.C16;
    },
    /*diagnostics$.DiagnosticsTreeStyle.error*/get error() {
      return C[17] || CT.C17;
    },
    /*diagnostics$.DiagnosticsTreeStyle.whitespace*/get whitespace() {
      return C[18] || CT.C18;
    },
    /*diagnostics$.DiagnosticsTreeStyle.flat*/get flat() {
      return C[19] || CT.C19;
    },
    /*diagnostics$.DiagnosticsTreeStyle.singleLine*/get singleLine() {
      return C[20] || CT.C20;
    },
    /*diagnostics$.DiagnosticsTreeStyle.errorProperty*/get errorProperty() {
      return C[21] || CT.C21;
    },
    /*diagnostics$.DiagnosticsTreeStyle.shallow*/get shallow() {
      return C[22] || CT.C22;
    },
    /*diagnostics$.DiagnosticsTreeStyle.truncateChildren*/get truncateChildren() {
      return C[23] || CT.C23;
    }
  }, false);
  var prefixLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixLineOne");
  var suffixLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.suffixLineOne");
  var prefixOtherLines$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixOtherLines");
  var prefixLastChildLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixLastChildLineOne");
  var prefixOtherLinesRootNode$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixOtherLinesRootNode");
  var propertyPrefixIfChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertyPrefixIfChildren");
  var propertyPrefixNoChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertyPrefixNoChildren");
  var linkCharacter$ = dart.privateName(diagnostics$, "TextTreeConfiguration.linkCharacter");
  var childLinkSpace = dart.privateName(diagnostics$, "TextTreeConfiguration.childLinkSpace");
  var lineBreak$ = dart.privateName(diagnostics$, "TextTreeConfiguration.lineBreak");
  var lineBreakProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.lineBreakProperties");
  var beforeName$ = dart.privateName(diagnostics$, "TextTreeConfiguration.beforeName");
  var afterName$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterName");
  var afterDescriptionIfBody$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterDescriptionIfBody");
  var afterDescription$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterDescription");
  var beforeProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.beforeProperties");
  var afterProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterProperties");
  var mandatoryAfterProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.mandatoryAfterProperties");
  var propertySeparator$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertySeparator");
  var bodyIndent$ = dart.privateName(diagnostics$, "TextTreeConfiguration.bodyIndent");
  var showChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.showChildren");
  var addBlankLineIfNoChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.addBlankLineIfNoChildren");
  var isNameOnOwnLine$ = dart.privateName(diagnostics$, "TextTreeConfiguration.isNameOnOwnLine");
  var footer$ = dart.privateName(diagnostics$, "TextTreeConfiguration.footer");
  var mandatoryFooter$ = dart.privateName(diagnostics$, "TextTreeConfiguration.mandatoryFooter");
  var isBlankLineBetweenPropertiesAndChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.isBlankLineBetweenPropertiesAndChildren");
  diagnostics$.TextTreeConfiguration = class TextTreeConfiguration extends core.Object {
    get prefixLineOne() {
      return this[prefixLineOne$];
    }
    set prefixLineOne(value) {
      super.prefixLineOne = value;
    }
    get suffixLineOne() {
      return this[suffixLineOne$];
    }
    set suffixLineOne(value) {
      super.suffixLineOne = value;
    }
    get prefixOtherLines() {
      return this[prefixOtherLines$];
    }
    set prefixOtherLines(value) {
      super.prefixOtherLines = value;
    }
    get prefixLastChildLineOne() {
      return this[prefixLastChildLineOne$];
    }
    set prefixLastChildLineOne(value) {
      super.prefixLastChildLineOne = value;
    }
    get prefixOtherLinesRootNode() {
      return this[prefixOtherLinesRootNode$];
    }
    set prefixOtherLinesRootNode(value) {
      super.prefixOtherLinesRootNode = value;
    }
    get propertyPrefixIfChildren() {
      return this[propertyPrefixIfChildren$];
    }
    set propertyPrefixIfChildren(value) {
      super.propertyPrefixIfChildren = value;
    }
    get propertyPrefixNoChildren() {
      return this[propertyPrefixNoChildren$];
    }
    set propertyPrefixNoChildren(value) {
      super.propertyPrefixNoChildren = value;
    }
    get linkCharacter() {
      return this[linkCharacter$];
    }
    set linkCharacter(value) {
      super.linkCharacter = value;
    }
    get childLinkSpace() {
      return this[childLinkSpace];
    }
    set childLinkSpace(value) {
      super.childLinkSpace = value;
    }
    get lineBreak() {
      return this[lineBreak$];
    }
    set lineBreak(value) {
      super.lineBreak = value;
    }
    get lineBreakProperties() {
      return this[lineBreakProperties$];
    }
    set lineBreakProperties(value) {
      super.lineBreakProperties = value;
    }
    get beforeName() {
      return this[beforeName$];
    }
    set beforeName(value) {
      super.beforeName = value;
    }
    get afterName() {
      return this[afterName$];
    }
    set afterName(value) {
      super.afterName = value;
    }
    get afterDescriptionIfBody() {
      return this[afterDescriptionIfBody$];
    }
    set afterDescriptionIfBody(value) {
      super.afterDescriptionIfBody = value;
    }
    get afterDescription() {
      return this[afterDescription$];
    }
    set afterDescription(value) {
      super.afterDescription = value;
    }
    get beforeProperties() {
      return this[beforeProperties$];
    }
    set beforeProperties(value) {
      super.beforeProperties = value;
    }
    get afterProperties() {
      return this[afterProperties$];
    }
    set afterProperties(value) {
      super.afterProperties = value;
    }
    get mandatoryAfterProperties() {
      return this[mandatoryAfterProperties$];
    }
    set mandatoryAfterProperties(value) {
      super.mandatoryAfterProperties = value;
    }
    get propertySeparator() {
      return this[propertySeparator$];
    }
    set propertySeparator(value) {
      super.propertySeparator = value;
    }
    get bodyIndent() {
      return this[bodyIndent$];
    }
    set bodyIndent(value) {
      super.bodyIndent = value;
    }
    get showChildren() {
      return this[showChildren$];
    }
    set showChildren(value) {
      super.showChildren = value;
    }
    get addBlankLineIfNoChildren() {
      return this[addBlankLineIfNoChildren$];
    }
    set addBlankLineIfNoChildren(value) {
      super.addBlankLineIfNoChildren = value;
    }
    get isNameOnOwnLine() {
      return this[isNameOnOwnLine$];
    }
    set isNameOnOwnLine(value) {
      super.isNameOnOwnLine = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get mandatoryFooter() {
      return this[mandatoryFooter$];
    }
    set mandatoryFooter(value) {
      super.mandatoryFooter = value;
    }
    get isBlankLineBetweenPropertiesAndChildren() {
      return this[isBlankLineBetweenPropertiesAndChildren$];
    }
    set isBlankLineBetweenPropertiesAndChildren(value) {
      super.isBlankLineBetweenPropertiesAndChildren = value;
    }
    static ['_#new#tearOff'](opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
      let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
      let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
      let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
      let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
      let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
      let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
      let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
      let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
      let afterDescription = opts && 'afterDescription' in opts ? opts.afterDescription : "";
      let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
      let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
      let mandatoryAfterProperties = opts && 'mandatoryAfterProperties' in opts ? opts.mandatoryAfterProperties : "";
      let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
      let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
      let footer = opts && 'footer' in opts ? opts.footer : "";
      let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
      let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
      let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
      let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
      let beforeName = opts && 'beforeName' in opts ? opts.beforeName : "";
      let suffixLineOne = opts && 'suffixLineOne' in opts ? opts.suffixLineOne : "";
      let mandatoryFooter = opts && 'mandatoryFooter' in opts ? opts.mandatoryFooter : "";
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, prefixLastChildLineOne: prefixLastChildLineOne, prefixOtherLinesRootNode: prefixOtherLinesRootNode, linkCharacter: linkCharacter, propertyPrefixIfChildren: propertyPrefixIfChildren, propertyPrefixNoChildren: propertyPrefixNoChildren, lineBreak: lineBreak, lineBreakProperties: lineBreakProperties, afterName: afterName, afterDescriptionIfBody: afterDescriptionIfBody, afterDescription: afterDescription, beforeProperties: beforeProperties, afterProperties: afterProperties, mandatoryAfterProperties: mandatoryAfterProperties, propertySeparator: propertySeparator, bodyIndent: bodyIndent, footer: footer, showChildren: showChildren, addBlankLineIfNoChildren: addBlankLineIfNoChildren, isNameOnOwnLine: isNameOnOwnLine, isBlankLineBetweenPropertiesAndChildren: isBlankLineBetweenPropertiesAndChildren, beforeName: beforeName, suffixLineOne: suffixLineOne, mandatoryFooter: mandatoryFooter});
    }
  };
  (diagnostics$.TextTreeConfiguration.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
    let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
    let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
    let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
    let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
    let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
    let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
    let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
    let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
    let afterDescription = opts && 'afterDescription' in opts ? opts.afterDescription : "";
    let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
    let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
    let mandatoryAfterProperties = opts && 'mandatoryAfterProperties' in opts ? opts.mandatoryAfterProperties : "";
    let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
    let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
    let footer = opts && 'footer' in opts ? opts.footer : "";
    let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
    let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
    let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
    let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
    let beforeName = opts && 'beforeName' in opts ? opts.beforeName : "";
    let suffixLineOne = opts && 'suffixLineOne' in opts ? opts.suffixLineOne : "";
    let mandatoryFooter = opts && 'mandatoryFooter' in opts ? opts.mandatoryFooter : "";
    this[prefixLineOne$] = prefixLineOne;
    this[prefixOtherLines$] = prefixOtherLines;
    this[prefixLastChildLineOne$] = prefixLastChildLineOne;
    this[prefixOtherLinesRootNode$] = prefixOtherLinesRootNode;
    this[linkCharacter$] = linkCharacter;
    this[propertyPrefixIfChildren$] = propertyPrefixIfChildren;
    this[propertyPrefixNoChildren$] = propertyPrefixNoChildren;
    this[lineBreak$] = lineBreak;
    this[lineBreakProperties$] = lineBreakProperties;
    this[afterName$] = afterName;
    this[afterDescriptionIfBody$] = afterDescriptionIfBody;
    this[afterDescription$] = afterDescription;
    this[beforeProperties$] = beforeProperties;
    this[afterProperties$] = afterProperties;
    this[mandatoryAfterProperties$] = mandatoryAfterProperties;
    this[propertySeparator$] = propertySeparator;
    this[bodyIndent$] = bodyIndent;
    this[footer$] = footer;
    this[showChildren$] = showChildren;
    this[addBlankLineIfNoChildren$] = addBlankLineIfNoChildren;
    this[isNameOnOwnLine$] = isNameOnOwnLine;
    this[isBlankLineBetweenPropertiesAndChildren$] = isBlankLineBetweenPropertiesAndChildren;
    this[beforeName$] = beforeName;
    this[suffixLineOne$] = suffixLineOne;
    this[mandatoryFooter$] = mandatoryFooter;
    if (!(prefixLineOne !== null)) dart.assertFailed(null, I[2], 230, 15, "prefixLineOne != null");
    if (!(prefixOtherLines !== null)) dart.assertFailed(null, I[2], 231, 15, "prefixOtherLines != null");
    if (!(prefixLastChildLineOne !== null)) dart.assertFailed(null, I[2], 232, 15, "prefixLastChildLineOne != null");
    if (!(prefixOtherLinesRootNode !== null)) dart.assertFailed(null, I[2], 233, 15, "prefixOtherLinesRootNode != null");
    if (!(linkCharacter !== null)) dart.assertFailed(null, I[2], 234, 15, "linkCharacter != null");
    if (!(propertyPrefixIfChildren !== null)) dart.assertFailed(null, I[2], 235, 15, "propertyPrefixIfChildren != null");
    if (!(propertyPrefixNoChildren !== null)) dart.assertFailed(null, I[2], 236, 15, "propertyPrefixNoChildren != null");
    if (!(lineBreak !== null)) dart.assertFailed(null, I[2], 237, 15, "lineBreak != null");
    if (!(lineBreakProperties !== null)) dart.assertFailed(null, I[2], 238, 15, "lineBreakProperties != null");
    if (!(afterName !== null)) dart.assertFailed(null, I[2], 239, 15, "afterName != null");
    if (!(afterDescriptionIfBody !== null)) dart.assertFailed(null, I[2], 240, 15, "afterDescriptionIfBody != null");
    if (!(afterDescription !== null)) dart.assertFailed(null, I[2], 241, 15, "afterDescription != null");
    if (!(beforeProperties !== null)) dart.assertFailed(null, I[2], 242, 15, "beforeProperties != null");
    if (!(afterProperties !== null)) dart.assertFailed(null, I[2], 243, 15, "afterProperties != null");
    if (!(propertySeparator !== null)) dart.assertFailed(null, I[2], 244, 15, "propertySeparator != null");
    if (!(bodyIndent !== null)) dart.assertFailed(null, I[2], 245, 15, "bodyIndent != null");
    if (!(footer !== null)) dart.assertFailed(null, I[2], 246, 15, "footer != null");
    if (!(showChildren !== null)) dart.assertFailed(null, I[2], 247, 15, "showChildren != null");
    if (!(addBlankLineIfNoChildren !== null)) dart.assertFailed(null, I[2], 248, 15, "addBlankLineIfNoChildren != null");
    if (!(isNameOnOwnLine !== null)) dart.assertFailed(null, I[2], 249, 15, "isNameOnOwnLine != null");
    if (!(isBlankLineBetweenPropertiesAndChildren !== null)) dart.assertFailed(null, I[2], 250, 15, "isBlankLineBetweenPropertiesAndChildren != null");
    this[childLinkSpace] = " "[$times](linkCharacter.length);
    ;
  }).prototype = diagnostics$.TextTreeConfiguration.prototype;
  dart.addTypeTests(diagnostics$.TextTreeConfiguration);
  dart.addTypeCaches(diagnostics$.TextTreeConfiguration);
  dart.setLibraryUri(diagnostics$.TextTreeConfiguration, I[1]);
  dart.setFieldSignature(diagnostics$.TextTreeConfiguration, () => ({
    __proto__: dart.getFields(diagnostics$.TextTreeConfiguration.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    suffixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.finalFieldType(core.String),
    prefixLastChildLineOne: dart.finalFieldType(core.String),
    prefixOtherLinesRootNode: dart.finalFieldType(core.String),
    propertyPrefixIfChildren: dart.finalFieldType(core.String),
    propertyPrefixNoChildren: dart.finalFieldType(core.String),
    linkCharacter: dart.finalFieldType(core.String),
    childLinkSpace: dart.finalFieldType(core.String),
    lineBreak: dart.finalFieldType(core.String),
    lineBreakProperties: dart.finalFieldType(core.bool),
    beforeName: dart.finalFieldType(core.String),
    afterName: dart.finalFieldType(core.String),
    afterDescriptionIfBody: dart.finalFieldType(core.String),
    afterDescription: dart.finalFieldType(core.String),
    beforeProperties: dart.finalFieldType(core.String),
    afterProperties: dart.finalFieldType(core.String),
    mandatoryAfterProperties: dart.finalFieldType(core.String),
    propertySeparator: dart.finalFieldType(core.String),
    bodyIndent: dart.finalFieldType(core.String),
    showChildren: dart.finalFieldType(core.bool),
    addBlankLineIfNoChildren: dart.finalFieldType(core.bool),
    isNameOnOwnLine: dart.finalFieldType(core.bool),
    footer: dart.finalFieldType(core.String),
    mandatoryFooter: dart.finalFieldType(core.String),
    isBlankLineBetweenPropertiesAndChildren: dart.finalFieldType(core.bool)
  }));
  diagnostics$._WordWrapParseMode = class _WordWrapParseMode extends core._Enum {
    toString() {
      return "_WordWrapParseMode." + this[_name];
    }
  };
  (diagnostics$._WordWrapParseMode.new = function(index, name) {
    diagnostics$._WordWrapParseMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = diagnostics$._WordWrapParseMode.prototype;
  dart.addTypeTests(diagnostics$._WordWrapParseMode);
  dart.addTypeCaches(diagnostics$._WordWrapParseMode);
  dart.setLibraryUri(diagnostics$._WordWrapParseMode, I[1]);
  dart.setStaticFieldSignature(diagnostics$._WordWrapParseMode, () => ['values', 'inSpace', 'inWord', 'atBreak']);
  dart.defineExtensionMethods(diagnostics$._WordWrapParseMode, ['toString']);
  dart.defineLazy(diagnostics$._WordWrapParseMode, {
    /*diagnostics$._WordWrapParseMode.values*/get values() {
      return C[24] || CT.C24;
    },
    /*diagnostics$._WordWrapParseMode.inSpace*/get inSpace() {
      return C[25] || CT.C25;
    },
    /*diagnostics$._WordWrapParseMode.inWord*/get inWord() {
      return C[26] || CT.C26;
    },
    /*diagnostics$._WordWrapParseMode.atBreak*/get atBreak() {
      return C[27] || CT.C27;
    }
  }, false);
  var _nextPrefixOtherLines = dart.privateName(diagnostics$, "_nextPrefixOtherLines");
  var _buffer = dart.privateName(diagnostics$, "_buffer");
  var _currentLine = dart.privateName(diagnostics$, "_currentLine");
  var _wrappableRanges = dart.privateName(diagnostics$, "_wrappableRanges");
  var _numLines = dart.privateName(diagnostics$, "_numLines");
  var _prefixOtherLines = dart.privateName(diagnostics$, "_prefixOtherLines");
  var _getCurrentPrefix = dart.privateName(diagnostics$, "_getCurrentPrefix");
  var _writeLine = dart.privateName(diagnostics$, "_writeLine");
  var _finalizeLine = dart.privateName(diagnostics$, "_finalizeLine");
  var _updatePrefix = dart.privateName(diagnostics$, "_updatePrefix");
  diagnostics$._PrefixedStringBuilder = class _PrefixedStringBuilder extends core.Object {
    static ['_#new#tearOff'](opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
      return new diagnostics$._PrefixedStringBuilder.new({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, wrapWidth: wrapWidth});
    }
    get prefixOtherLines() {
      let t6;
      t6 = this[_nextPrefixOtherLines];
      return t6 == null ? this[_prefixOtherLines] : t6;
    }
    set prefixOtherLines(prefix) {
      this[_prefixOtherLines] = prefix;
      this[_nextPrefixOtherLines] = null;
    }
    incrementPrefixOtherLines(suffix, opts) {
      let updateCurrentLine = opts && 'updateCurrentLine' in opts ? opts.updateCurrentLine : null;
      if (this[_currentLine].isEmpty || updateCurrentLine) {
        this[_prefixOtherLines] = dart.nullCheck(this.prefixOtherLines) + suffix;
        this[_nextPrefixOtherLines] = null;
      } else {
        this[_nextPrefixOtherLines] = dart.nullCheck(this.prefixOtherLines) + suffix;
      }
    }
    get requiresMultipleLines() {
      return this[_numLines] > 1 || this[_numLines] === 1 && this[_currentLine].isNotEmpty || this[_currentLine].length + dart.nullCheck(this[_getCurrentPrefix](true)).length > dart.nullCheck(this.wrapWidth);
    }
    get isCurrentLineEmpty() {
      return this[_currentLine].isEmpty;
    }
    [_finalizeLine](addTrailingLineBreak) {
      let firstLine = this[_buffer].isEmpty;
      let text = this[_currentLine].toString();
      this[_currentLine].clear();
      if (this[_wrappableRanges][$isEmpty]) {
        this[_writeLine](text, {includeLineBreak: addTrailingLineBreak, firstLine: firstLine});
        return;
      }
      let lines = diagnostics$._PrefixedStringBuilder._wordWrapLine(text, this[_wrappableRanges], dart.nullCheck(this.wrapWidth), {startOffset: firstLine ? this.prefixLineOne.length : dart.nullCheck(this[_prefixOtherLines]).length, otherLineOffset: dart.nullCheck(this[_prefixOtherLines]).length});
      let i = 0;
      let length = lines[$length];
      for (let line of lines) {
        i = i + 1;
        this[_writeLine](line, {includeLineBreak: addTrailingLineBreak || i < length, firstLine: firstLine});
      }
      this[_wrappableRanges][$clear]();
    }
    static _wordWrapLine(message, wrapRanges, width, opts) {
      let startOffset = opts && 'startOffset' in opts ? opts.startOffset : 0;
      let otherLineOffset = opts && 'otherLineOffset' in opts ? opts.otherLineOffset : 0;
      if (message.length + startOffset < width) {
        return T$.JSArrayOfString().of([message]);
      }
      let wrappedLine = T$.JSArrayOfString().of([]);
      let startForLengthCalculations = -startOffset;
      let addPrefix = false;
      let index = 0;
      let mode = diagnostics$._WordWrapParseMode.inSpace;
      let lastWordStart = null;
      function lastWordStart$35get() {
        let t7;
        t7 = lastWordStart;
        return t7 == null ? dart.throw(new _internal.LateError.localNI("lastWordStart")) : t7;
      }
      dart.fn(lastWordStart$35get, T$.VoidToint());
      function lastWordStart$35set(lastWordStart$35param) {
        return lastWordStart = lastWordStart$35param;
      }
      dart.fn(lastWordStart$35set, T$.intTodynamic());
      let lastWordEnd = null;
      let start = 0;
      let currentChunk = 0;
      function noWrap(index) {
        while (true) {
          if (currentChunk >= wrapRanges[$length]) {
            return true;
          }
          if (index < wrapRanges[$_get](currentChunk + 1)) {
            break;
          }
          currentChunk = currentChunk + 2;
        }
        return index < wrapRanges[$_get](currentChunk);
      }
      dart.fn(noWrap, T$.intTobool());
      while (true) {
        switch (mode) {
          case C[25] || CT.C25:
            {
              while (index < message.length && message[$_get](index) === " ") {
                index = index + 1;
              }
              lastWordStart$35set(index);
              mode = diagnostics$._WordWrapParseMode.inWord;
              break;
            }
          case C[26] || CT.C26:
            {
              while (index < message.length && (message[$_get](index) !== " " || noWrap(index))) {
                index = index + 1;
              }
              mode = diagnostics$._WordWrapParseMode.atBreak;
              break;
            }
          case C[27] || CT.C27:
            {
              if (index - startForLengthCalculations > width || index === message.length) {
                if (index - startForLengthCalculations <= width || lastWordEnd == null) {
                  lastWordEnd = index;
                }
                let line = message[$substring](start, lastWordEnd);
                wrappedLine[$add](line);
                addPrefix = true;
                if (dart.notNull(lastWordEnd) >= message.length) {
                  return wrappedLine;
                }
                if (lastWordEnd === index) {
                  while (index < message.length && message[$_get](index) === " ") {
                    index = index + 1;
                  }
                  start = index;
                  mode = diagnostics$._WordWrapParseMode.inWord;
                } else {
                  if (!(lastWordStart$35get() > dart.notNull(lastWordEnd))) dart.assertFailed(null, I[2], 945, 22, "lastWordStart > lastWordEnd");
                  start = lastWordStart$35get();
                  mode = diagnostics$._WordWrapParseMode.atBreak;
                }
                startForLengthCalculations = start - otherLineOffset;
                if (!addPrefix) dart.assertFailed(null, I[2], 950, 20, "addPrefix");
                lastWordEnd = null;
              } else {
                lastWordEnd = index;
                mode = diagnostics$._WordWrapParseMode.inSpace;
              }
              break;
            }
        }
      }
    }
    write(s, opts) {
      let t9;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : false;
      if (s[$isEmpty]) {
        return;
      }
      let lines = s[$split]("\n");
      for (let i = 0; i < lines[$length]; i = i + 1) {
        if (i > 0) {
          this[_finalizeLine](true);
          this[_updatePrefix]();
        }
        let line = lines[$_get](i);
        if (line[$isNotEmpty]) {
          if (allowWrap && this.wrapWidth != null) {
            let wrapStart = this[_currentLine].length;
            let wrapEnd = wrapStart + line.length;
            if (this[_wrappableRanges][$isNotEmpty] && this[_wrappableRanges][$last] === wrapStart) {
              this[_wrappableRanges][$last] = wrapEnd;
            } else {
              t9 = this[_wrappableRanges];
              (() => {
                t9[$add](wrapStart);
                t9[$add](wrapEnd);
                return t9;
              })();
            }
          }
          this[_currentLine].write(line);
        }
      }
    }
    [_updatePrefix]() {
      if (this[_nextPrefixOtherLines] != null) {
        this[_prefixOtherLines] = this[_nextPrefixOtherLines];
        this[_nextPrefixOtherLines] = null;
      }
    }
    [_writeLine](line, opts) {
      let includeLineBreak = opts && 'includeLineBreak' in opts ? opts.includeLineBreak : null;
      let firstLine = opts && 'firstLine' in opts ? opts.firstLine : null;
      line = dart.str(this[_getCurrentPrefix](firstLine)) + line;
      this[_buffer].write(line[$trimRight]());
      if (includeLineBreak) {
        this[_buffer].write("\n");
      }
      this[_numLines] = this[_numLines] + 1;
    }
    [_getCurrentPrefix](firstLine) {
      return this[_buffer].isEmpty ? this.prefixLineOne : this[_prefixOtherLines];
    }
    writeRawLines(lines) {
      if (lines[$isEmpty]) {
        return;
      }
      if (this[_currentLine].isNotEmpty) {
        this[_finalizeLine](true);
      }
      if (!this[_currentLine].isEmpty) dart.assertFailed(null, I[2], 1029, 13, "_currentLine.isEmpty");
      this[_buffer].write(lines);
      if (!lines[$endsWith]("\n")) {
        this[_buffer].write("\n");
      }
      this[_numLines] = this[_numLines] + 1;
      this[_updatePrefix]();
    }
    writeStretched(text, targetLineLength) {
      this.write(text);
      let currentLineLength = this[_currentLine].length + dart.nullCheck(this[_getCurrentPrefix](this[_buffer].isEmpty)).length;
      if (!(this[_currentLine].length > 0)) dart.assertFailed(null, I[2], 1043, 13, "_currentLine.length > 0");
      let targetLength = targetLineLength - currentLineLength;
      if (targetLength > 0) {
        if (!text[$isNotEmpty]) dart.assertFailed(null, I[2], 1046, 14, "text.isNotEmpty");
        let lastChar = text[$_get](text.length - 1);
        if (!(lastChar !== "\n")) dart.assertFailed(null, I[2], 1048, 14, "lastChar != '\\n'");
        this[_currentLine].write(lastChar[$times](targetLength));
      }
      this[_wrappableRanges][$clear]();
    }
    build() {
      if (this[_currentLine].isNotEmpty) {
        this[_finalizeLine](false);
      }
      return this[_buffer].toString();
    }
  };
  (diagnostics$._PrefixedStringBuilder.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    this[_nextPrefixOtherLines] = null;
    this[_buffer] = new core.StringBuffer.new();
    this[_currentLine] = new core.StringBuffer.new();
    this[_wrappableRanges] = T$.JSArrayOfint().of([]);
    this[_numLines] = 0;
    this.prefixLineOne = prefixLineOne;
    this.wrapWidth = wrapWidth;
    this[_prefixOtherLines] = prefixOtherLines;
    ;
  }).prototype = diagnostics$._PrefixedStringBuilder.prototype;
  dart.addTypeTests(diagnostics$._PrefixedStringBuilder);
  dart.addTypeCaches(diagnostics$._PrefixedStringBuilder);
  dart.setMethodSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getMethods(diagnostics$._PrefixedStringBuilder.__proto__),
    incrementPrefixOtherLines: dart.fnType(dart.void, [core.String], {}, {updateCurrentLine: core.bool}),
    [_finalizeLine]: dart.fnType(dart.void, [core.bool]),
    write: dart.fnType(dart.void, [core.String], {allowWrap: core.bool}, {}),
    [_updatePrefix]: dart.fnType(dart.void, []),
    [_writeLine]: dart.fnType(dart.void, [core.String], {}, {firstLine: core.bool, includeLineBreak: core.bool}),
    [_getCurrentPrefix]: dart.fnType(dart.nullable(core.String), [core.bool]),
    writeRawLines: dart.fnType(dart.void, [core.String]),
    writeStretched: dart.fnType(dart.void, [core.String, core.int]),
    build: dart.fnType(core.String, [])
  }));
  dart.setStaticMethodSignature(diagnostics$._PrefixedStringBuilder, () => ['_wordWrapLine']);
  dart.setGetterSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getGetters(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixOtherLines: dart.nullable(core.String),
    requiresMultipleLines: core.bool,
    isCurrentLineEmpty: core.bool
  }));
  dart.setSetterSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getSetters(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixOtherLines: dart.nullable(core.String)
  }));
  dart.setLibraryUri(diagnostics$._PrefixedStringBuilder, I[1]);
  dart.setFieldSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getFields(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    [_prefixOtherLines]: dart.fieldType(dart.nullable(core.String)),
    [_nextPrefixOtherLines]: dart.fieldType(dart.nullable(core.String)),
    wrapWidth: dart.finalFieldType(dart.nullable(core.int)),
    [_buffer]: dart.finalFieldType(core.StringBuffer),
    [_currentLine]: dart.finalFieldType(core.StringBuffer),
    [_wrappableRanges]: dart.finalFieldType(core.List$(core.int)),
    [_numLines]: dart.fieldType(core.int)
  }));
  diagnostics$._NoDefaultValue = class _NoDefaultValue extends core.Object {
    static ['_#new#tearOff']() {
      return new diagnostics$._NoDefaultValue.new();
    }
  };
  (diagnostics$._NoDefaultValue.new = function() {
    ;
  }).prototype = diagnostics$._NoDefaultValue.prototype;
  dart.addTypeTests(diagnostics$._NoDefaultValue);
  dart.addTypeCaches(diagnostics$._NoDefaultValue);
  dart.setLibraryUri(diagnostics$._NoDefaultValue, I[1]);
  var _minLevel = dart.privateName(diagnostics$, "_minLevel");
  var _wrapWidth = dart.privateName(diagnostics$, "_wrapWidth");
  var _wrapWidthProperties = dart.privateName(diagnostics$, "_wrapWidthProperties");
  var _maxDescendentsTruncatableNode = dart.privateName(diagnostics$, "_maxDescendentsTruncatableNode");
  var _childTextConfiguration = dart.privateName(diagnostics$, "_childTextConfiguration");
  var _debugRender = dart.privateName(diagnostics$, "_debugRender");
  diagnostics$.TextTreeRenderer = class TextTreeRenderer extends core.Object {
    static ['_#new#tearOff'](opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[4] || CT.C4;
      let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : 100;
      let wrapWidthProperties = opts && 'wrapWidthProperties' in opts ? opts.wrapWidthProperties : 65;
      let maxDescendentsTruncatableNode = opts && 'maxDescendentsTruncatableNode' in opts ? opts.maxDescendentsTruncatableNode : -1;
      return new diagnostics$.TextTreeRenderer.new({minLevel: minLevel, wrapWidth: wrapWidth, wrapWidthProperties: wrapWidthProperties, maxDescendentsTruncatableNode: maxDescendentsTruncatableNode});
    }
    [_childTextConfiguration](child, textStyle) {
      let childStyle = child.style;
      return diagnostics$._isSingleLine(childStyle) || childStyle === diagnostics$.DiagnosticsTreeStyle.errorProperty ? textStyle : child.textTreeConfiguration;
    }
    render(node, opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      {
        return this[_debugRender](node, {prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, parentConfiguration: parentConfiguration});
      }
    }
    [_debugRender](node, opts) {
      let t9, t9$;
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let isSingleLine = diagnostics$._isSingleLine(node.style) && (t9 = parentConfiguration, t9 == null ? null : t9.lineBreakProperties) !== true;
      prefixOtherLines == null ? prefixOtherLines = prefixLineOne : null;
      if (node.linePrefix != null) {
        prefixLineOne = prefixLineOne + dart.nullCheck(node.linePrefix);
        prefixOtherLines = dart.notNull(prefixOtherLines) + dart.nullCheck(node.linePrefix);
      }
      let config = dart.nullCheck(node.textTreeConfiguration);
      if (prefixOtherLines[$isEmpty]) {
        prefixOtherLines = dart.notNull(prefixOtherLines) + config.prefixOtherLinesRootNode;
      }
      if (node.style === diagnostics$.DiagnosticsTreeStyle.truncateChildren) {
        let descendants = T$.JSArrayOfString().of([]);
        let depth = 0;
        let lines = 0;
        function visitor(node) {
          for (let child of node.getChildren()) {
            if (lines < 25) {
              depth = depth + 1;
              descendants[$add](dart.str(prefixOtherLines) + "  "[$times](depth) + dart.str(child));
              if (depth < 5) {
                visitor(child);
              }
              depth = depth - 1;
            } else if (lines === 25) {
              descendants[$add](dart.str(prefixOtherLines) + "  ...(descendants list truncated after " + dart.str(lines) + " lines)");
            }
            lines = lines + 1;
          }
        }
        dart.fn(visitor, T$.DiagnosticsNodeTovoid());
        visitor(node);
        let information = new core.StringBuffer.new(prefixLineOne);
        if (lines > 1) {
          information.writeln("This " + dart.str(node.name) + " had the following descendants (showing up to depth " + dart.str(5) + "):");
        } else if (descendants[$length] === 1) {
          information.writeln("This " + dart.str(node.name) + " had the following child:");
        } else {
          information.writeln("This " + dart.str(node.name) + " has no descendants.");
        }
        information.writeAll(descendants, "\n");
        return information.toString();
      }
      let builder = new diagnostics$._PrefixedStringBuilder.new({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, wrapWidth: math.max(core.int, this[_wrapWidth], prefixOtherLines.length + this[_wrapWidthProperties])});
      let children = node.getChildren();
      let description = node.toDescription({parentConfiguration: parentConfiguration});
      if (config.beforeName[$isNotEmpty]) {
        builder.write(config.beforeName);
      }
      let wrapName = !isSingleLine && node.allowNameWrap;
      let wrapDescription = !isSingleLine && node.allowWrap;
      let uppercaseTitle = node.style === diagnostics$.DiagnosticsTreeStyle.error;
      let name = node.name;
      if (uppercaseTitle) {
        name = (t9$ = name, t9$ == null ? null : t9$[$toUpperCase]());
      }
      if (description === null || description[$isEmpty]) {
        if (node.showName && name != null) {
          builder.write(name, {allowWrap: wrapName});
        }
      } else {
        let includeName = false;
        if (name != null && name[$isNotEmpty] && node.showName) {
          includeName = true;
          builder.write(name, {allowWrap: wrapName});
          if (node.showSeparator) {
            builder.write(config.afterName, {allowWrap: wrapName});
          }
          builder.write(config.isNameOnOwnLine || description[$contains]("\n") ? "\n" : " ", {allowWrap: wrapName});
        }
        if (!isSingleLine && builder.requiresMultipleLines && !builder.isCurrentLineEmpty) {
          builder.write("\n");
        }
        if (includeName) {
          builder.incrementPrefixOtherLines(children[$isEmpty] ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: true});
        }
        if (uppercaseTitle) {
          description = description[$toUpperCase]();
        }
        builder.write(description[$trimRight](), {allowWrap: wrapDescription});
        if (!includeName) {
          builder.incrementPrefixOtherLines(children[$isEmpty] ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: false});
        }
      }
      if (config.suffixLineOne[$isNotEmpty]) {
        builder.writeStretched(config.suffixLineOne, dart.nullCheck(builder.wrapWidth));
      }
      let propertiesIterable = node.getProperties()[$where](dart.fn(n => !n.isFiltered(this[_minLevel]), T$.DiagnosticsNodeTobool()));
      let properties = null;
      if (this[_maxDescendentsTruncatableNode] >= 0 && node.allowTruncate) {
        if (propertiesIterable[$length] < this[_maxDescendentsTruncatableNode]) {
          properties = propertiesIterable[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          properties[$add](diagnostics$.DiagnosticsNode.message("..."));
        } else {
          properties = propertiesIterable[$toList]();
        }
        if (this[_maxDescendentsTruncatableNode] < children[$length]) {
          children = children[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          children[$add](diagnostics$.DiagnosticsNode.message("..."));
        }
      } else {
        properties = propertiesIterable[$toList]();
      }
      if ((properties[$isNotEmpty] || children[$isNotEmpty] || node.emptyBodyDescription != null) && (node.showSeparator || description[$isNotEmpty])) {
        builder.write(config.afterDescriptionIfBody);
      }
      if (config.lineBreakProperties) {
        builder.write(config.lineBreak);
      }
      if (properties[$isNotEmpty]) {
        builder.write(config.beforeProperties);
      }
      builder.incrementPrefixOtherLines(config.bodyIndent, {updateCurrentLine: false});
      if (node.emptyBodyDescription != null && properties[$isEmpty] && children[$isEmpty] && prefixLineOne[$isNotEmpty]) {
        builder.write(dart.nullCheck(node.emptyBodyDescription));
        if (config.lineBreakProperties) {
          builder.write(config.lineBreak);
        }
      }
      for (let i = 0; i < properties[$length]; i = i + 1) {
        let property = properties[$_get](i);
        if (i > 0) {
          builder.write(config.propertySeparator);
        }
        let propertyStyle = dart.nullCheck(property.textTreeConfiguration);
        if (diagnostics$._isSingleLine(property.style)) {
          let propertyRender = this.render(property, {prefixLineOne: propertyStyle.prefixLineOne, prefixOtherLines: propertyStyle.childLinkSpace + propertyStyle.prefixOtherLines, parentConfiguration: config});
          let propertyLines = propertyRender[$split]("\n");
          if (propertyLines[$length] === 1 && !config.lineBreakProperties) {
            builder.write(propertyLines[$first]);
          } else {
            builder.write(propertyRender);
            if (!propertyRender[$endsWith]("\n")) {
              builder.write("\n");
            }
          }
        } else {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(builder.prefixOtherLines) + propertyStyle.prefixLineOne, prefixOtherLines: dart.str(builder.prefixOtherLines) + propertyStyle.childLinkSpace + propertyStyle.prefixOtherLines, parentConfiguration: config});
          builder.writeRawLines(propertyRender);
        }
      }
      if (properties[$isNotEmpty]) {
        builder.write(config.afterProperties);
      }
      builder.write(config.mandatoryAfterProperties);
      if (!config.lineBreakProperties) {
        builder.write(config.lineBreak);
      }
      let prefixChildren = config.bodyIndent;
      let prefixChildrenRaw = dart.str(prefixOtherLines) + prefixChildren;
      if (children[$isEmpty] && config.addBlankLineIfNoChildren && builder.requiresMultipleLines && dart.nullCheck(builder.prefixOtherLines)[$trimRight]()[$isNotEmpty]) {
        builder.write(config.lineBreak);
      }
      if (children[$isNotEmpty] && config.showChildren) {
        if (config.isBlankLineBetweenPropertiesAndChildren && properties[$isNotEmpty] && dart.nullCheck(children[$first].textTreeConfiguration).isBlankLineBetweenPropertiesAndChildren) {
          builder.write(config.lineBreak);
        }
        builder.prefixOtherLines = prefixOtherLines;
        for (let i = 0; i < children[$length]; i = i + 1) {
          let child = children[$_get](i);
          if (!(child !== null)) dart.assertFailed(null, I[2], 1373, 16, "child != null");
          let childConfig = dart.nullCheck(this[_childTextConfiguration](child, config));
          if (i === children[$length] - 1) {
            let lastChildPrefixLineOne = prefixChildrenRaw + childConfig.prefixLastChildLineOne;
            let childPrefixOtherLines = prefixChildrenRaw + childConfig.childLinkSpace + childConfig.prefixOtherLines;
            builder.writeRawLines(this.render(child, {prefixLineOne: lastChildPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(childConfig.childLinkSpace + childConfig.footer);
              if (childConfig.mandatoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.mandatoryFooter, math.max(core.int, dart.nullCheck(builder.wrapWidth), this[_wrapWidthProperties] + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          } else {
            let nextChildStyle = dart.nullCheck(this[_childTextConfiguration](children[$_get](i + 1), config));
            let childPrefixLineOne = prefixChildrenRaw + childConfig.prefixLineOne;
            let childPrefixOtherLines = prefixChildrenRaw + nextChildStyle.linkCharacter + childConfig.prefixOtherLines;
            builder.writeRawLines(this.render(child, {prefixLineOne: childPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(childConfig.linkCharacter + childConfig.footer);
              if (childConfig.mandatoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.mandatoryFooter, math.max(core.int, dart.nullCheck(builder.wrapWidth), this[_wrapWidthProperties] + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          }
        }
      }
      if (parentConfiguration == null && config.mandatoryFooter[$isNotEmpty]) {
        builder.writeStretched(config.mandatoryFooter, dart.nullCheck(builder.wrapWidth));
        builder.write(config.lineBreak);
      }
      return builder.build();
    }
  };
  (diagnostics$.TextTreeRenderer.new = function(opts) {
    let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[4] || CT.C4;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : 100;
    let wrapWidthProperties = opts && 'wrapWidthProperties' in opts ? opts.wrapWidthProperties : 65;
    let maxDescendentsTruncatableNode = opts && 'maxDescendentsTruncatableNode' in opts ? opts.maxDescendentsTruncatableNode : -1;
    if (!(minLevel !== null)) dart.assertFailed(null, I[2], 1098, 15, "minLevel != null");
    this[_minLevel] = minLevel;
    this[_wrapWidth] = wrapWidth;
    this[_wrapWidthProperties] = wrapWidthProperties;
    this[_maxDescendentsTruncatableNode] = maxDescendentsTruncatableNode;
    ;
  }).prototype = diagnostics$.TextTreeRenderer.prototype;
  dart.addTypeTests(diagnostics$.TextTreeRenderer);
  dart.addTypeCaches(diagnostics$.TextTreeRenderer);
  dart.setMethodSignature(diagnostics$.TextTreeRenderer, () => ({
    __proto__: dart.getMethods(diagnostics$.TextTreeRenderer.__proto__),
    [_childTextConfiguration]: dart.fnType(dart.nullable(diagnostics$.TextTreeConfiguration), [diagnostics$.DiagnosticsNode, diagnostics$.TextTreeConfiguration]),
    render: dart.fnType(core.String, [diagnostics$.DiagnosticsNode], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration), prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {}),
    [_debugRender]: dart.fnType(core.String, [diagnostics$.DiagnosticsNode], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration), prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {})
  }));
  dart.setLibraryUri(diagnostics$.TextTreeRenderer, I[1]);
  dart.setFieldSignature(diagnostics$.TextTreeRenderer, () => ({
    __proto__: dart.getFields(diagnostics$.TextTreeRenderer.__proto__),
    [_wrapWidth]: dart.finalFieldType(core.int),
    [_wrapWidthProperties]: dart.finalFieldType(core.int),
    [_minLevel]: dart.finalFieldType(diagnostics$.DiagnosticLevel),
    [_maxDescendentsTruncatableNode]: dart.finalFieldType(core.int)
  }));
  var name$ = dart.privateName(diagnostics$, "DiagnosticsNode.name");
  var showSeparator$ = dart.privateName(diagnostics$, "DiagnosticsNode.showSeparator");
  var showName$ = dart.privateName(diagnostics$, "DiagnosticsNode.showName");
  var linePrefix$ = dart.privateName(diagnostics$, "DiagnosticsNode.linePrefix");
  var style$ = dart.privateName(diagnostics$, "DiagnosticsNode.style");
  var _separator = dart.privateName(diagnostics$, "_separator");
  diagnostics$.DiagnosticsNode = class DiagnosticsNode extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get showSeparator() {
      return this[showSeparator$];
    }
    set showSeparator(value) {
      super.showSeparator = value;
    }
    get showName() {
      return this[showName$];
    }
    set showName(value) {
      super.showName = value;
    }
    get linePrefix() {
      return this[linePrefix$];
    }
    set linePrefix(value) {
      super.linePrefix = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static message(message, opts) {
      let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      if (!(style !== null)) dart.assertFailed(null, I[2], 1475, 12, "style != null");
      if (!(level !== null)) dart.assertFailed(null, I[2], 1476, 12, "level != null");
      return new (T$.DiagnosticsPropertyOfvoid()).new("", null, {description: message, style: style, showName: false, allowWrap: allowWrap, level: level});
    }
    static ['_#message#tearOff'](message, opts) {
      let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      return diagnostics$.DiagnosticsNode.message(message, {style: style, level: level, allowWrap: allowWrap});
    }
    isFiltered(minLevel) {
      return false || this.level.index < minLevel.index;
    }
    get level() {
      return diagnostics$.DiagnosticLevel.info;
    }
    get emptyBodyDescription() {
      return null;
    }
    get allowWrap() {
      return false;
    }
    get allowNameWrap() {
      return false;
    }
    get allowTruncate() {
      return false;
    }
    get [_separator]() {
      return this.showSeparator ? ":" : "";
    }
    toTimelineArguments() {
      {
        ;
        let result = new (T$.IdentityMapOfString$String()).new();
        for (let property of this.getProperties()) {
          if (property.name != null) {
            result[$_set](dart.nullCheck(property.name), property.toDescription({parentConfiguration: diagnostics$.singleLineTextConfiguration}));
          }
        }
        return result;
      }
      return null;
    }
    toJsonMap(delegate) {
      let result = new (T$.IdentityMapOfString$ObjectN()).new();
      if (!dart.fn(() => {
        let t10, t10$;
        let hasChildren = this.getChildren()[$isNotEmpty];
        result = (() => {
          let t9 = new (T$.IdentityMapOfString$ObjectN()).new();
          t9[$_set]("description", this.toDescription());
          t9[$_set]("type", this[$runtimeType].toString());
          if (this.name != null) t9[$_set]("name", this.name);
          if (!this.showSeparator) t9[$_set]("showSeparator", this.showSeparator);
          if (this.level !== diagnostics$.DiagnosticLevel.info) t9[$_set]("level", core['EnumName|get#name'](this.level));
          if (this.showName === false) t9[$_set]("showName", this.showName);
          if (this.emptyBodyDescription != null) t9[$_set]("emptyBodyDescription", this.emptyBodyDescription);
          if (this.style !== diagnostics$.DiagnosticsTreeStyle.sparse) t9[$_set]("style", core['EnumName|get#name'](dart.nullCheck(this.style)));
          if (this.allowTruncate) t9[$_set]("allowTruncate", this.allowTruncate);
          if (hasChildren) t9[$_set]("hasChildren", hasChildren);
          if (dart.test((t10$ = (t10 = this.linePrefix, t10 == null ? null : t10[$isNotEmpty]), t10$ == null ? false : t10$))) t9[$_set]("linePrefix", this.linePrefix);
          if (!this.allowWrap) t9[$_set]("allowWrap", this.allowWrap);
          if (this.allowNameWrap) t9[$_set]("allowNameWrap", this.allowNameWrap);
          t9[$addAll](delegate.additionalNodeProperties(this));
          if (delegate.includeProperties) t9[$_set]("properties", diagnostics$.DiagnosticsNode.toJsonList(delegate.filterProperties(this.getProperties(), this), this, delegate));
          if (delegate.subtreeDepth > 0) t9[$_set]("children", diagnostics$.DiagnosticsNode.toJsonList(delegate.filterChildren(this.getChildren(), this), this, delegate));
          return t9;
        })();
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 1619, 12, "() {\n      final bool hasChildren = getChildren().isNotEmpty;\n      result = <String, Object?>{\n        'description': toDescription(),\n        'type': runtimeType.toString(),\n        if (name != null)\n          'name': name,\n        if (!showSeparator)\n          'showSeparator': showSeparator,\n        if (level != DiagnosticLevel.info)\n          'level': level.name,\n        if (showName == false)\n          'showName': showName,\n        if (emptyBodyDescription != null)\n          'emptyBodyDescription': emptyBodyDescription,\n        if (style != DiagnosticsTreeStyle.sparse)\n          'style': style!.name,\n        if (allowTruncate)\n          'allowTruncate': allowTruncate,\n        if (hasChildren)\n          'hasChildren': hasChildren,\n        if (linePrefix?.isNotEmpty ?? false)\n          'linePrefix': linePrefix,\n        if (!allowWrap)\n          'allowWrap': allowWrap,\n        if (allowNameWrap)\n          'allowNameWrap': allowNameWrap,\n        ...delegate.additionalNodeProperties(this),\n        if (delegate.includeProperties)\n          'properties': toJsonList(\n            delegate.filterProperties(getProperties(), this),\n            this,\n            delegate,\n          ),\n        if (delegate.subtreeDepth > 0)\n          'children': toJsonList(\n            delegate.filterChildren(getChildren(), this),\n            this,\n            delegate,\n          ),\n      };\n      return true;\n    }()");
      return result;
    }
    static toJsonList(nodes, parent, delegate) {
      let truncated = false;
      if (nodes == null) {
        return C[28] || CT.C28;
      }
      let originalNodeCount = nodes[$length];
      nodes = delegate.truncateNodesList(nodes, parent);
      if (nodes[$length] !== originalNodeCount) {
        nodes[$add](diagnostics$.DiagnosticsNode.message("..."));
        truncated = true;
      }
      let json = nodes[$map](T$.MapOfString$ObjectN(), dart.fn(node => node.toJsonMap(delegate.delegateForNode(node)), T$.DiagnosticsNodeToMapOfString$ObjectN()))[$toList]();
      if (truncated) {
        json[$last][$_set]("truncated", true);
      }
      return json;
    }
    toString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[5] || CT.C5;
      let result = super[$toString]();
      if (!(this.style != null)) dart.assertFailed(null, I[2], 1712, 12, "style != null");
      if (!(minLevel !== null)) dart.assertFailed(null, I[2], 1713, 12, "minLevel != null");
      if (!dart.fn(() => {
        if (diagnostics$._isSingleLine(this.style)) {
          result = this.toStringDeep({parentConfiguration: parentConfiguration, minLevel: minLevel});
        } else {
          let description = this.toDescription({parentConfiguration: parentConfiguration});
          if (this.name == null || dart.nullCheck(this.name)[$isEmpty] || !this.showName) {
            result = description;
          } else {
            result = description[$contains]("\n") ? dart.str(this.name) + this[_separator] + "\n" + description : dart.str(this.name) + this[_separator] + " " + description;
          }
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 1714, 12, "() {\n      if (_isSingleLine(style)) {\n        result = toStringDeep(parentConfiguration: parentConfiguration, minLevel: minLevel);\n      } else {\n        final String description = toDescription(parentConfiguration: parentConfiguration);\n\n        if (name == null || name!.isEmpty || !showName) {\n          result = description;\n        } else {\n          result = description.contains('\\n') ? '$name$_separator\\n$description'\n              : '$name$_separator $description';\n        }\n      }\n      return true;\n    }()");
      return result;
    }
    get textTreeConfiguration() {
      if (!(this.style != null)) dart.assertFailed(null, I[2], 1736, 12, "style != null");
      switch (dart.nullCheck(this.style)) {
        case C[12] || CT.C12:
          {
            return null;
          }
        case C[15] || CT.C15:
          {
            return diagnostics$.denseTextConfiguration;
          }
        case C[13] || CT.C13:
          {
            return diagnostics$.sparseTextConfiguration;
          }
        case C[14] || CT.C14:
          {
            return diagnostics$.dashedTextConfiguration;
          }
        case C[18] || CT.C18:
          {
            return diagnostics$.whitespaceTextConfiguration;
          }
        case C[16] || CT.C16:
          {
            return diagnostics$.transitionTextConfiguration;
          }
        case C[20] || CT.C20:
          {
            return diagnostics$.singleLineTextConfiguration;
          }
        case C[21] || CT.C21:
          {
            return diagnostics$.errorPropertyTextConfiguration;
          }
        case C[22] || CT.C22:
          {
            return diagnostics$.shallowTextConfiguration;
          }
        case C[17] || CT.C17:
          {
            return diagnostics$.errorTextConfiguration;
          }
        case C[23] || CT.C23:
          {
            return diagnostics$.whitespaceTextConfiguration;
          }
        case C[19] || CT.C19:
          {
            return diagnostics$.flatTextConfiguration;
          }
      }
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[4] || CT.C4;
      let result = "";
      if (!dart.fn(() => {
        result = new diagnostics$.TextTreeRenderer.new({minLevel: minLevel, wrapWidth: 65}).render(this, {prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, parentConfiguration: parentConfiguration});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 1794, 12, "() {\n      result = TextTreeRenderer(\n        minLevel: minLevel,\n        wrapWidth: 65,\n      ).render(\n        this,\n        prefixLineOne: prefixLineOne,\n        prefixOtherLines: prefixOtherLines,\n        parentConfiguration: parentConfiguration,\n      );\n      return true;\n    }()");
      return result;
    }
  };
  (diagnostics$.DiagnosticsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    this[name$] = name;
    this[style$] = style;
    this[showName$] = showName;
    this[showSeparator$] = showSeparator;
    this[linePrefix$] = linePrefix;
    if (!(showName !== null)) dart.assertFailed(null, I[2], 1448, 15, "showName != null");
    if (!(showSeparator !== null)) dart.assertFailed(null, I[2], 1449, 15, "showSeparator != null");
    if (!(name == null || !name[$endsWith](":"))) dart.assertFailed("Names of diagnostic nodes must not end with colons.\n" + "name:\n" + "  \"" + dart.str(name) + "\"", I[2], 1454, 10, "name == null || !name.endsWith(':')");
    ;
  }).prototype = diagnostics$.DiagnosticsNode.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsNode);
  dart.addTypeCaches(diagnostics$.DiagnosticsNode);
  dart.setMethodSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsNode.__proto__),
    isFiltered: dart.fnType(core.bool, [diagnostics$.DiagnosticLevel]),
    toTimelineArguments: dart.fnType(dart.nullable(core.Map$(core.String, core.String)), []),
    toJsonMap: dart.fnType(core.Map$(core.String, dart.nullable(core.Object)), [diagnostics$.DiagnosticsSerializationDelegate]),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration), prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {})
  }));
  dart.setStaticMethodSignature(diagnostics$.DiagnosticsNode, () => ['message', 'toJsonList']);
  dart.setGetterSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getGetters(diagnostics$.DiagnosticsNode.__proto__),
    level: diagnostics$.DiagnosticLevel,
    emptyBodyDescription: dart.nullable(core.String),
    allowWrap: core.bool,
    allowNameWrap: core.bool,
    allowTruncate: core.bool,
    [_separator]: core.String,
    textTreeConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsNode, I[1]);
  dart.setFieldSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsNode.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    showSeparator: dart.finalFieldType(core.bool),
    showName: dart.finalFieldType(core.bool),
    linePrefix: dart.finalFieldType(dart.nullable(core.String)),
    style: dart.finalFieldType(dart.nullable(diagnostics$.DiagnosticsTreeStyle))
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticsNode, ['toString']);
  var expandableValue$ = dart.privateName(diagnostics$, "DiagnosticsProperty.expandableValue");
  var allowWrap$ = dart.privateName(diagnostics$, "DiagnosticsProperty.allowWrap");
  var allowNameWrap$ = dart.privateName(diagnostics$, "DiagnosticsProperty.allowNameWrap");
  var ifNull$ = dart.privateName(diagnostics$, "DiagnosticsProperty.ifNull");
  var ifEmpty$ = dart.privateName(diagnostics$, "DiagnosticsProperty.ifEmpty");
  var tooltip$ = dart.privateName(diagnostics$, "DiagnosticsProperty.tooltip");
  var missingIfNull$ = dart.privateName(diagnostics$, "DiagnosticsProperty.missingIfNull");
  var defaultValue$ = dart.privateName(diagnostics$, "DiagnosticsProperty.defaultValue");
  var _exception = dart.privateName(diagnostics$, "_exception");
  var _description = dart.privateName(diagnostics$, "_description");
  var _valueComputed = dart.privateName(diagnostics$, "_valueComputed");
  var _value = dart.privateName(diagnostics$, "_value");
  var _computeValue = dart.privateName(diagnostics$, "_computeValue");
  var _defaultLevel = dart.privateName(diagnostics$, "_defaultLevel");
  var _addTooltip = dart.privateName(diagnostics$, "_addTooltip");
  var _maybeCacheValue = dart.privateName(diagnostics$, "_maybeCacheValue");
  const _is_DiagnosticsProperty_default = Symbol('_is_DiagnosticsProperty_default');
  diagnostics$.DiagnosticsProperty$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    class DiagnosticsProperty extends diagnostics$.DiagnosticsNode {
      get expandableValue() {
        return this[expandableValue$];
      }
      set expandableValue(value) {
        super.expandableValue = value;
      }
      get allowWrap() {
        return this[allowWrap$];
      }
      set allowWrap(value) {
        super.allowWrap = value;
      }
      get allowNameWrap() {
        return this[allowNameWrap$];
      }
      set allowNameWrap(value) {
        super.allowNameWrap = value;
      }
      get ifNull() {
        return this[ifNull$];
      }
      set ifNull(value) {
        super.ifNull = value;
      }
      get ifEmpty() {
        return this[ifEmpty$];
      }
      set ifEmpty(value) {
        super.ifEmpty = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get missingIfNull() {
        return this[missingIfNull$];
      }
      set missingIfNull(value) {
        super.missingIfNull = value;
      }
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      static ['_#new#tearOff'](T, name, value, opts) {
        let description = opts && 'description' in opts ? opts.description : null;
        let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
        let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
        let showName = opts && 'showName' in opts ? opts.showName : null;
        let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : null;
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
        let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
        let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
        let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
        let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
        let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
        let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
        let style = opts && 'style' in opts ? opts.style : null;
        let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
        return new (diagnostics$.DiagnosticsProperty$(T)).new(name, value, {description: description, ifNull: ifNull, ifEmpty: ifEmpty, showName: showName, showSeparator: showSeparator, defaultValue: defaultValue, tooltip: tooltip, missingIfNull: missingIfNull, linePrefix: linePrefix, expandableValue: expandableValue, allowWrap: allowWrap, allowNameWrap: allowNameWrap, style: style, level: level});
      }
      static ['_#lazy#tearOff'](T, name, computeValue, opts) {
        let description = opts && 'description' in opts ? opts.description : null;
        let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
        let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
        let showName = opts && 'showName' in opts ? opts.showName : null;
        let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : null;
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
        let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
        let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
        let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
        let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
        let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
        let style = opts && 'style' in opts ? opts.style : null;
        let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
        return new (diagnostics$.DiagnosticsProperty$(T)).lazy(name, computeValue, {description: description, ifNull: ifNull, ifEmpty: ifEmpty, showName: showName, showSeparator: showSeparator, defaultValue: defaultValue, tooltip: tooltip, missingIfNull: missingIfNull, expandableValue: expandableValue, allowWrap: allowWrap, allowNameWrap: allowNameWrap, style: style, level: level});
      }
      toJsonMap(delegate) {
        let v = this.value;
        let properties = null;
        if (delegate.expandPropertyValues && delegate.includeProperties && diagnostics$.Diagnosticable.is(v) && this.getProperties()[$isEmpty]) {
          delegate = delegate.copyWith({subtreeDepth: 0, includeProperties: false});
          properties = diagnostics$.DiagnosticsNode.toJsonList(delegate.filterProperties(v.toDiagnosticsNode().getProperties(), this), this, delegate);
        }
        let json = super.toJsonMap(delegate);
        if (properties != null) {
          json[$_set]("properties", properties);
        }
        if (!dart.equals(this.defaultValue, diagnostics$.kNoDefaultValue)) {
          json[$_set]("defaultValue", dart.toString(this.defaultValue));
        }
        if (this.ifEmpty != null) {
          json[$_set]("ifEmpty", this.ifEmpty);
        }
        if (this.ifNull != null) {
          json[$_set]("ifNull", this.ifNull);
        }
        if (this.tooltip != null) {
          json[$_set]("tooltip", this.tooltip);
        }
        json[$_set]("missingIfNull", this.missingIfNull);
        if (this.exception != null) {
          json[$_set]("exception", dart.toString(this.exception));
        }
        json[$_set]("propertyType", this.propertyType.toString());
        json[$_set]("defaultLevel", core['EnumName|get#name'](this[_defaultLevel]));
        if (diagnostics$.Diagnosticable.is(this.value) || diagnostics$.DiagnosticsNode.is(this.value)) {
          json[$_set]("isDiagnosticableValue", true);
        }
        if (typeof v == 'number') {
          json[$_set]("value", v[$isFinite] ? v : dart.toString(v));
        }
        if (typeof this.value == 'string' || typeof this.value == 'boolean' || this.value == null) {
          json[$_set]("value", this.value);
        }
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let v = this.value;
        return diagnostics$.DiagnosticableTree.is(v) ? v.toStringShort() : dart.toString(v);
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this[_description] != null) {
          return this[_addTooltip](dart.nullCheck(this[_description]));
        }
        if (this.exception != null) {
          return "EXCEPTION (" + dart.str(dart.runtimeType(this.exception)) + ")";
        }
        if (this.ifNull != null && this.value == null) {
          return this[_addTooltip](dart.nullCheck(this.ifNull));
        }
        let result = this.valueToString({parentConfiguration: parentConfiguration});
        if (result[$isEmpty] && this.ifEmpty != null) {
          result = dart.nullCheck(this.ifEmpty);
        }
        return this[_addTooltip](result);
      }
      [_addTooltip](text) {
        if (!(text !== null)) dart.assertFailed(null, I[2], 2750, 12, "text != null");
        return this.tooltip == null ? text : text + " (" + dart.str(this.tooltip) + ")";
      }
      get propertyType() {
        return dart.wrapType(T);
      }
      get value() {
        this[_maybeCacheValue]();
        return this[_value];
      }
      get exception() {
        this[_maybeCacheValue]();
        return this[_exception];
      }
      [_maybeCacheValue]() {
        if (this[_valueComputed]) {
          return;
        }
        this[_valueComputed] = true;
        if (!(this[_computeValue] != null)) dart.assertFailed(null, I[2], 2821, 12, "_computeValue != null");
        try {
          this[_value] = dart.nullCheck(this[_computeValue])();
        } catch (e) {
          let exception = dart.getThrown(e);
          if (core.Object.is(exception)) {
            this[_exception] = exception;
            this[_value] = null;
          } else
            throw e;
        }
      }
      get isInteresting() {
        return dart.equals(this.defaultValue, diagnostics$.kNoDefaultValue) || !dart.equals(this.value, this.defaultValue);
      }
      get level() {
        if (this[_defaultLevel] === diagnostics$.DiagnosticLevel.hidden) {
          return this[_defaultLevel];
        }
        if (this.exception != null) {
          return diagnostics$.DiagnosticLevel.error;
        }
        if (this.value == null && this.missingIfNull) {
          return diagnostics$.DiagnosticLevel.warning;
        }
        if (!this.isInteresting) {
          return diagnostics$.DiagnosticLevel.fine;
        }
        return this[_defaultLevel];
      }
      getProperties() {
        if (this.expandableValue) {
          let object = this.value;
          if (diagnostics$.DiagnosticsNode.is(object)) {
            return object.getProperties();
          }
          if (diagnostics$.Diagnosticable.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getProperties();
          }
        }
        return C[30] || CT.C30;
      }
      getChildren() {
        if (this.expandableValue) {
          let object = this.value;
          if (diagnostics$.DiagnosticsNode.is(object)) {
            return object.getChildren();
          }
          if (diagnostics$.Diagnosticable.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getChildren();
          }
        }
        return C[30] || CT.C30;
      }
    }
    (DiagnosticsProperty.new = function(name, value, opts) {
      let t10;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName !== null)) dart.assertFailed(null, I[2], 2583, 15, "showName != null");
      if (!(showSeparator !== null)) dart.assertFailed(null, I[2], 2584, 15, "showSeparator != null");
      if (!(style !== null)) dart.assertFailed(null, I[2], 2585, 15, "style != null");
      if (!(level !== null)) dart.assertFailed(null, I[2], 2586, 15, "level != null");
      this[_description] = description;
      this[_valueComputed] = true;
      this[_value] = value;
      this[_computeValue] = null;
      this[ifNull$] = (t10 = ifNull, t10 == null ? missingIfNull ? "MISSING" : null : t10);
      this[_defaultLevel] = level;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, linePrefix: linePrefix, style: style});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    (DiagnosticsProperty.lazy = function(name, computeValue, opts) {
      let t10;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName !== null)) dart.assertFailed(null, I[2], 2625, 15, "showName != null");
      if (!(showSeparator !== null)) dart.assertFailed(null, I[2], 2626, 15, "showSeparator != null");
      if (!(dart.equals(defaultValue, diagnostics$.kNoDefaultValue) || __t$TN().is(defaultValue))) dart.assertFailed(null, I[2], 2627, 15, "defaultValue == kNoDefaultValue || defaultValue is T?");
      if (!(missingIfNull !== null)) dart.assertFailed(null, I[2], 2628, 15, "missingIfNull != null");
      if (!(style !== null)) dart.assertFailed(null, I[2], 2629, 15, "style != null");
      if (!(level !== null)) dart.assertFailed(null, I[2], 2630, 15, "level != null");
      this[_description] = description;
      this[_valueComputed] = false;
      this[_value] = null;
      this[_computeValue] = computeValue;
      this[_defaultLevel] = level;
      this[ifNull$] = (t10 = ifNull, t10 == null ? missingIfNull ? "MISSING" : null : t10);
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    dart.addTypeTests(DiagnosticsProperty);
    DiagnosticsProperty.prototype[_is_DiagnosticsProperty_default] = true;
    dart.addTypeCaches(DiagnosticsProperty);
    dart.setMethodSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getMethods(DiagnosticsProperty.__proto__),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {}),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {}),
      [_addTooltip]: dart.fnType(core.String, [core.String]),
      [_maybeCacheValue]: dart.fnType(dart.void, []),
      getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [])
    }));
    dart.setGetterSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getGetters(DiagnosticsProperty.__proto__),
      propertyType: core.Type,
      value: dart.nullable(T),
      exception: dart.nullable(core.Object),
      isInteresting: core.bool
    }));
    dart.setLibraryUri(DiagnosticsProperty, I[1]);
    dart.setFieldSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getFields(DiagnosticsProperty.__proto__),
      [_description]: dart.finalFieldType(dart.nullable(core.String)),
      expandableValue: dart.finalFieldType(core.bool),
      allowWrap: dart.finalFieldType(core.bool),
      allowNameWrap: dart.finalFieldType(core.bool),
      ifNull: dart.finalFieldType(dart.nullable(core.String)),
      ifEmpty: dart.finalFieldType(dart.nullable(core.String)),
      tooltip: dart.finalFieldType(dart.nullable(core.String)),
      missingIfNull: dart.finalFieldType(core.bool),
      [_value]: dart.fieldType(dart.nullable(T)),
      [_valueComputed]: dart.fieldType(core.bool),
      [_exception]: dart.fieldType(dart.nullable(core.Object)),
      defaultValue: dart.finalFieldType(dart.nullable(core.Object)),
      [_defaultLevel]: dart.finalFieldType(diagnostics$.DiagnosticLevel),
      [_computeValue]: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(T), [])))
    }));
    return DiagnosticsProperty;
  });
  diagnostics$.DiagnosticsProperty = diagnostics$.DiagnosticsProperty$();
  dart.addTypeTests(diagnostics$.DiagnosticsProperty, _is_DiagnosticsProperty_default);
  diagnostics$.MessageProperty = class MessageProperty extends diagnostics$.DiagnosticsProperty$(dart.void) {
    static ['_#new#tearOff'](name, message, opts) {
      let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      return new diagnostics$.MessageProperty.new(name, message, {style: style, level: level});
    }
  };
  (diagnostics$.MessageProperty.new = function(name, message, opts) {
    let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    if (!(name !== null)) dart.assertFailed(null, I[2], 1851, 15, "name != null");
    if (!(message !== null)) dart.assertFailed(null, I[2], 1852, 15, "message != null");
    if (!(style !== null)) dart.assertFailed(null, I[2], 1853, 15, "style != null");
    if (!(level !== null)) dart.assertFailed(null, I[2], 1854, 15, "level != null");
    diagnostics$.MessageProperty.__proto__.new.call(this, name, null, {description: message, style: style, level: level});
    ;
  }).prototype = diagnostics$.MessageProperty.prototype;
  dart.addTypeTests(diagnostics$.MessageProperty);
  dart.addTypeCaches(diagnostics$.MessageProperty);
  dart.setLibraryUri(diagnostics$.MessageProperty, I[1]);
  var quoted$ = dart.privateName(diagnostics$, "StringProperty.quoted");
  diagnostics$.StringProperty = class StringProperty extends diagnostics$.DiagnosticsProperty$(core.String) {
    get quoted() {
      return this[quoted$];
    }
    set quoted(value) {
      super.quoted = value;
    }
    static ['_#new#tearOff'](name, value, opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let showName = opts && 'showName' in opts ? opts.showName : null;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      let quoted = opts && 'quoted' in opts ? opts.quoted : true;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let level = opts && 'level' in opts ? opts.level : null;
      return new diagnostics$.StringProperty.new(name, value, {description: description, tooltip: tooltip, showName: showName, defaultValue: defaultValue, quoted: quoted, ifEmpty: ifEmpty, style: style, level: level});
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      json[$_set]("quoted", this.quoted);
      return json;
    }
    valueToString(opts) {
      let t11;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let text = (t11 = this[_description], t11 == null ? this.value : t11);
      if (parentConfiguration != null && !parentConfiguration.lineBreakProperties && text != null) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (this.quoted && text != null) {
        if (this.ifEmpty != null && text[$isEmpty]) {
          return dart.nullCheck(this.ifEmpty);
        }
        return "\"" + dart.str(text) + "\"";
      }
      return dart.toString(text);
    }
  };
  (diagnostics$.StringProperty.new = function(name, value, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
    let quoted = opts && 'quoted' in opts ? opts.quoted : true;
    let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
    let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    this[quoted$] = quoted;
    if (!(showName !== null)) dart.assertFailed(null, I[2], 1879, 15, "showName != null");
    if (!(quoted !== null)) dart.assertFailed(null, I[2], 1880, 15, "quoted != null");
    if (!(style !== null)) dart.assertFailed(null, I[2], 1881, 15, "style != null");
    if (!(level !== null)) dart.assertFailed(null, I[2], 1882, 15, "level != null");
    diagnostics$.StringProperty.__proto__.new.call(this, name, value, {description: description, tooltip: tooltip, showName: showName, defaultValue: defaultValue, ifEmpty: ifEmpty, style: style, level: level});
    ;
  }).prototype = diagnostics$.StringProperty.prototype;
  dart.addTypeTests(diagnostics$.StringProperty);
  dart.addTypeCaches(diagnostics$.StringProperty);
  dart.setLibraryUri(diagnostics$.StringProperty, I[1]);
  dart.setFieldSignature(diagnostics$.StringProperty, () => ({
    __proto__: dart.getFields(diagnostics$.StringProperty.__proto__),
    quoted: dart.finalFieldType(core.bool)
  }));
  var unit$ = dart.privateName(diagnostics$, "_NumProperty.unit");
  const _is__NumProperty_default = Symbol('_is__NumProperty_default');
  diagnostics$._NumProperty$ = dart.generic(T => {
    class _NumProperty extends diagnostics$.DiagnosticsProperty$(T) {
      get unit() {
        return this[unit$];
      }
      set unit(value) {
        super.unit = value;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.unit != null) {
          json[$_set]("unit", this.unit);
        }
        json[$_set]("numberToString", this.numberToString());
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) {
          return dart.toString(this.value);
        }
        return this.unit != null ? this.numberToString() + dart.str(this.unit) : this.numberToString();
      }
    }
    (_NumProperty.new = function(name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      this[unit$] = unit;
      _NumProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, style: style, level: level});
      ;
    }).prototype = _NumProperty.prototype;
    (_NumProperty.lazy = function(name, computeValue, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      this[unit$] = unit;
      _NumProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, style: style, level: level});
      ;
    }).prototype = _NumProperty.prototype;
    dart.addTypeTests(_NumProperty);
    _NumProperty.prototype[_is__NumProperty_default] = true;
    dart.addTypeCaches(_NumProperty);
    dart.setLibraryUri(_NumProperty, I[1]);
    dart.setFieldSignature(_NumProperty, () => ({
      __proto__: dart.getFields(_NumProperty.__proto__),
      unit: dart.finalFieldType(dart.nullable(core.String))
    }));
    return _NumProperty;
  });
  diagnostics$._NumProperty = diagnostics$._NumProperty$();
  dart.addTypeTests(diagnostics$._NumProperty, _is__NumProperty_default);
  diagnostics$.DoubleProperty = class DoubleProperty extends diagnostics$._NumProperty$(core.double) {
    static ['_#new#tearOff'](name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      let showName = opts && 'showName' in opts ? opts.showName : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let level = opts && 'level' in opts ? opts.level : null;
      return new diagnostics$.DoubleProperty.new(name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, style: style, level: level});
    }
    static ['_#lazy#tearOff'](name, computeValue, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      let level = opts && 'level' in opts ? opts.level : null;
      return new diagnostics$.DoubleProperty.lazy(name, computeValue, {ifNull: ifNull, showName: showName, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
    }
    numberToString() {
      return debug.debugFormatDouble(this.value);
    }
  };
  (diagnostics$.DoubleProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    if (!(showName !== null)) dart.assertFailed(null, I[2], 1990, 15, "showName != null");
    if (!(style !== null)) dart.assertFailed(null, I[2], 1991, 15, "style != null");
    if (!(level !== null)) dart.assertFailed(null, I[2], 1992, 15, "level != null");
    diagnostics$.DoubleProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, style: style, level: level});
    ;
  }).prototype = diagnostics$.DoubleProperty.prototype;
  (diagnostics$.DoubleProperty.lazy = function(name, computeValue, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    if (!(showName !== null)) dart.assertFailed(null, I[2], 2009, 15, "showName != null");
    if (!(level !== null)) dart.assertFailed(null, I[2], 2010, 15, "level != null");
    diagnostics$.DoubleProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.DoubleProperty.prototype;
  dart.addTypeTests(diagnostics$.DoubleProperty);
  dart.addTypeCaches(diagnostics$.DoubleProperty);
  dart.setMethodSignature(diagnostics$.DoubleProperty, () => ({
    __proto__: dart.getMethods(diagnostics$.DoubleProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(diagnostics$.DoubleProperty, I[1]);
  diagnostics$.IntProperty = class IntProperty extends diagnostics$._NumProperty$(core.int) {
    static ['_#new#tearOff'](name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let level = opts && 'level' in opts ? opts.level : null;
      return new diagnostics$.IntProperty.new(name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, style: style, level: level});
    }
    numberToString() {
      return dart.toString(this.value);
    }
  };
  (diagnostics$.IntProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
    let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    if (!(showName !== null)) dart.assertFailed(null, I[2], 2033, 15, "showName != null");
    if (!(level !== null)) dart.assertFailed(null, I[2], 2034, 15, "level != null");
    if (!(style !== null)) dart.assertFailed(null, I[2], 2035, 15, "style != null");
    diagnostics$.IntProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, style: style, level: level});
    ;
  }).prototype = diagnostics$.IntProperty.prototype;
  dart.addTypeTests(diagnostics$.IntProperty);
  dart.addTypeCaches(diagnostics$.IntProperty);
  dart.setMethodSignature(diagnostics$.IntProperty, () => ({
    __proto__: dart.getMethods(diagnostics$.IntProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(diagnostics$.IntProperty, I[1]);
  diagnostics$.PercentProperty = class PercentProperty extends diagnostics$.DoubleProperty {
    static ['_#new#tearOff'](name, fraction, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let level = opts && 'level' in opts ? opts.level : null;
      return new diagnostics$.PercentProperty.new(name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) {
        return dart.toString(this.value);
      }
      return this.unit != null ? this.numberToString() + " " + dart.str(this.unit) : this.numberToString();
    }
    numberToString() {
      let v = this.value;
      if (v == null) {
        return dart.toString(this.value);
      }
      return (math$.clampDouble(v, 0.0, 1.0) * 100.0)[$toStringAsFixed](1) + "%";
    }
  };
  (diagnostics$.PercentProperty.new = function(name, fraction, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    if (!(showName !== null)) dart.assertFailed(null, I[2], 2060, 15, "showName != null");
    if (!(level !== null)) dart.assertFailed(null, I[2], 2061, 15, "level != null");
    diagnostics$.PercentProperty.__proto__.new.call(this, name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
    ;
  }).prototype = diagnostics$.PercentProperty.prototype;
  dart.addTypeTests(diagnostics$.PercentProperty);
  dart.addTypeCaches(diagnostics$.PercentProperty);
  dart.setLibraryUri(diagnostics$.PercentProperty, I[1]);
  var ifTrue$ = dart.privateName(diagnostics$, "FlagProperty.ifTrue");
  var ifFalse$ = dart.privateName(diagnostics$, "FlagProperty.ifFalse");
  diagnostics$.FlagProperty = class FlagProperty extends diagnostics$.DiagnosticsProperty$(core.bool) {
    get ifTrue() {
      return this[ifTrue$];
    }
    set ifTrue(value) {
      super.ifTrue = value;
    }
    get ifFalse() {
      return this[ifFalse$];
    }
    set ifFalse(value) {
      super.ifFalse = value;
    }
    static ['_#new#tearOff'](name, opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
      let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      return new diagnostics$.FlagProperty.new(name, {value: value, ifTrue: ifTrue, ifFalse: ifFalse, showName: showName, defaultValue: defaultValue, level: level});
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      if (this.ifTrue != null) {
        json[$_set]("ifTrue", this.ifTrue);
      }
      if (this.ifFalse != null) {
        json[$_set]("ifFalse", this.ifFalse);
      }
      return json;
    }
    valueToString(opts) {
      let t11;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (dart.test((t11 = this.value, t11 == null ? false : t11))) {
        if (this.ifTrue != null) {
          return dart.nullCheck(this.ifTrue);
        }
      } else if (this.value === false) {
        if (this.ifFalse != null) {
          return dart.nullCheck(this.ifFalse);
        }
      }
      return super.valueToString({parentConfiguration: parentConfiguration});
    }
    get showName() {
      let t11, t11$;
      if (this.value == null || dart.test((t11 = this.value, t11 == null ? false : t11)) && this.ifTrue == null || !dart.test((t11$ = this.value, t11$ == null ? true : t11$)) && this.ifFalse == null) {
        return true;
      }
      return super.showName;
    }
    get level() {
      let t11;
      if (dart.test((t11 = this.value, t11 == null ? false : t11))) {
        if (this.ifTrue == null) {
          return diagnostics$.DiagnosticLevel.hidden;
        }
      }
      if (this.value === false) {
        if (this.ifFalse == null) {
          return diagnostics$.DiagnosticLevel.hidden;
        }
      }
      return super.level;
    }
  };
  (diagnostics$.FlagProperty.new = function(name, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
    let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
    let showName = opts && 'showName' in opts ? opts.showName : false;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    this[ifTrue$] = ifTrue;
    this[ifFalse$] = ifFalse;
    if (!(showName !== null)) dart.assertFailed(null, I[2], 2135, 15, "showName != null");
    if (!(level !== null)) dart.assertFailed(null, I[2], 2136, 15, "level != null");
    if (!(ifTrue != null || ifFalse != null)) dart.assertFailed(null, I[2], 2137, 15, "ifTrue != null || ifFalse != null");
    diagnostics$.FlagProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.FlagProperty.prototype;
  dart.addTypeTests(diagnostics$.FlagProperty);
  dart.addTypeCaches(diagnostics$.FlagProperty);
  dart.setGetterSignature(diagnostics$.FlagProperty, () => ({
    __proto__: dart.getGetters(diagnostics$.FlagProperty.__proto__),
    showName: core.bool
  }));
  dart.setLibraryUri(diagnostics$.FlagProperty, I[1]);
  dart.setFieldSignature(diagnostics$.FlagProperty, () => ({
    __proto__: dart.getFields(diagnostics$.FlagProperty.__proto__),
    ifTrue: dart.finalFieldType(dart.nullable(core.String)),
    ifFalse: dart.finalFieldType(dart.nullable(core.String))
  }));
  const _is_IterableProperty_default = Symbol('_is_IterableProperty_default');
  diagnostics$.IterableProperty$ = dart.generic(T => {
    var __t$TToString = () => (__t$TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class IterableProperty extends diagnostics$.DiagnosticsProperty$(core.Iterable$(T)) {
      static ['_#new#tearOff'](T, name, value, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
        let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
        let style = opts && 'style' in opts ? opts.style : null;
        let showName = opts && 'showName' in opts ? opts.showName : null;
        let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : null;
        let level = opts && 'level' in opts ? opts.level : null;
        return new (diagnostics$.IterableProperty$(T)).new(name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, showSeparator: showSeparator, level: level});
      }
      valueToString(opts) {
        let t11;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) {
          return dart.toString(this.value);
        }
        if (dart.nullCheck(this.value)[$isEmpty]) {
          t11 = this.ifEmpty;
          return t11 == null ? "[]" : t11;
        }
        let formattedValues = dart.nullCheck(this.value)[$map](core.String, dart.fn(v => {
          if (dart.wrapType(T)._equals(dart.wrapType(core.double)) && typeof v == 'number') {
            return debug.debugFormatDouble(v);
          } else {
            return dart.toString(v);
          }
        }, __t$TToString()));
        if (parentConfiguration != null && !parentConfiguration.lineBreakProperties) {
          return "[" + formattedValues[$join](", ") + "]";
        }
        return formattedValues[$join](diagnostics$._isSingleLine(this.style) ? ", " : "\n");
      }
      get level() {
        if (this.ifEmpty == null && this.value != null && dart.nullCheck(this.value)[$isEmpty] && super.level !== diagnostics$.DiagnosticLevel.hidden) {
          return diagnostics$.DiagnosticLevel.fine;
        }
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.value != null) {
          json[$_set]("values", dart.nullCheck(this.value)[$map](core.String, dart.fn(value => dart.toString(value), __t$TToString()))[$toList]());
        }
        return json;
      }
    }
    (IterableProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : "[]";
      let style = opts && 'style' in opts ? opts.style : C[20] || CT.C20;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      if (!(style !== null)) dart.assertFailed(null, I[2], 2239, 15, "style != null");
      if (!(showName !== null)) dart.assertFailed(null, I[2], 2240, 15, "showName != null");
      if (!(showSeparator !== null)) dart.assertFailed(null, I[2], 2241, 15, "showSeparator != null");
      if (!(level !== null)) dart.assertFailed(null, I[2], 2242, 15, "level != null");
      IterableProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, showSeparator: showSeparator, level: level});
      ;
    }).prototype = IterableProperty.prototype;
    dart.addTypeTests(IterableProperty);
    IterableProperty.prototype[_is_IterableProperty_default] = true;
    dart.addTypeCaches(IterableProperty);
    dart.setLibraryUri(IterableProperty, I[1]);
    return IterableProperty;
  });
  diagnostics$.IterableProperty = diagnostics$.IterableProperty$();
  dart.addTypeTests(diagnostics$.IterableProperty, _is_IterableProperty_default);
  const _is_EnumProperty_default = Symbol('_is_EnumProperty_default');
  diagnostics$.EnumProperty$ = dart.generic(T => {
    class EnumProperty extends diagnostics$.DiagnosticsProperty$(T) {
      static ['_#new#tearOff'](T, name, value, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let level = opts && 'level' in opts ? opts.level : null;
        return new (diagnostics$.EnumProperty$(T)).new(name, value, {defaultValue: defaultValue, level: level});
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) {
          return dart.toString(this.value);
        }
        return diagnostics$.describeEnum(dart.nullCheck(this.value));
      }
    }
    (EnumProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[29] || CT.C29;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      if (!(level !== null)) dart.assertFailed(null, I[2], 2320, 15, "level != null");
      EnumProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, level: level});
      ;
    }).prototype = EnumProperty.prototype;
    dart.addTypeTests(EnumProperty);
    EnumProperty.prototype[_is_EnumProperty_default] = true;
    dart.addTypeCaches(EnumProperty);
    dart.setLibraryUri(EnumProperty, I[1]);
    return EnumProperty;
  });
  diagnostics$.EnumProperty = diagnostics$.EnumProperty$();
  dart.addTypeTests(diagnostics$.EnumProperty, _is_EnumProperty_default);
  var ifPresent$ = dart.privateName(diagnostics$, "ObjectFlagProperty.ifPresent");
  const _is_ObjectFlagProperty_default = Symbol('_is_ObjectFlagProperty_default');
  diagnostics$.ObjectFlagProperty$ = dart.generic(T => {
    class ObjectFlagProperty extends diagnostics$.DiagnosticsProperty$(T) {
      get ifPresent() {
        return this[ifPresent$];
      }
      set ifPresent(value) {
        super.ifPresent = value;
      }
      static ['_#new#tearOff'](T, name, value, opts) {
        let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
        let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
        let showName = opts && 'showName' in opts ? opts.showName : null;
        let level = opts && 'level' in opts ? opts.level : null;
        return new (diagnostics$.ObjectFlagProperty$(T)).new(name, value, {ifPresent: ifPresent, ifNull: ifNull, showName: showName, level: level});
      }
      static ['_#has#tearOff'](T, name, value, opts) {
        let level = opts && 'level' in opts ? opts.level : null;
        return new (diagnostics$.ObjectFlagProperty$(T)).has(name, value, {level: level});
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value != null) {
          if (this.ifPresent != null) {
            return dart.nullCheck(this.ifPresent);
          }
        } else {
          if (this.ifNull != null) {
            return dart.nullCheck(this.ifNull);
          }
        }
        return super.valueToString({parentConfiguration: parentConfiguration});
      }
      get showName() {
        if (this.value != null && this.ifPresent == null || this.value == null && this.ifNull == null) {
          return true;
        }
        return super.showName;
      }
      get level() {
        if (this.value != null) {
          if (this.ifPresent == null) {
            return diagnostics$.DiagnosticLevel.hidden;
          }
        } else {
          if (this.ifNull == null) {
            return diagnostics$.DiagnosticLevel.hidden;
          }
        }
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.ifPresent != null) {
          json[$_set]("ifPresent", this.ifPresent);
        }
        return json;
      }
    }
    (ObjectFlagProperty.new = function(name, value, opts) {
      let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      this[ifPresent$] = ifPresent;
      if (!(ifPresent != null || ifNull != null)) dart.assertFailed(null, I[2], 2367, 15, "ifPresent != null || ifNull != null");
      if (!(showName !== null)) dart.assertFailed(null, I[2], 2368, 15, "showName != null");
      if (!(level !== null)) dart.assertFailed(null, I[2], 2369, 15, "level != null");
      ObjectFlagProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    (ObjectFlagProperty.has = function(name, value, opts) {
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      if (!(name !== null)) dart.assertFailed(null, I[2], 2381, 15, "name != null");
      if (!(level !== null)) dart.assertFailed(null, I[2], 2382, 15, "level != null");
      this[ifPresent$] = "has " + name;
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: false, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    dart.addTypeTests(ObjectFlagProperty);
    ObjectFlagProperty.prototype[_is_ObjectFlagProperty_default] = true;
    dart.addTypeCaches(ObjectFlagProperty);
    dart.setGetterSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getGetters(ObjectFlagProperty.__proto__),
      showName: core.bool
    }));
    dart.setLibraryUri(ObjectFlagProperty, I[1]);
    dart.setFieldSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getFields(ObjectFlagProperty.__proto__),
      ifPresent: dart.finalFieldType(dart.nullable(core.String))
    }));
    return ObjectFlagProperty;
  });
  diagnostics$.ObjectFlagProperty = diagnostics$.ObjectFlagProperty$();
  dart.addTypeTests(diagnostics$.ObjectFlagProperty, _is_ObjectFlagProperty_default);
  var _hasNonNullEntry = dart.privateName(diagnostics$, "_hasNonNullEntry");
  var _formattedValues = dart.privateName(diagnostics$, "_formattedValues");
  const _is_FlagsSummary_default = Symbol('_is_FlagsSummary_default');
  diagnostics$.FlagsSummary$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$TNTobool = () => (__t$TNTobool = dart.constFn(dart.fnType(core.bool, [__t$TN()])))();
    var __t$MapEntryOfString$TN = () => (__t$MapEntryOfString$TN = dart.constFn(core.MapEntry$(core.String, __t$TN())))();
    var __t$MapEntryOfString$TNTobool = () => (__t$MapEntryOfString$TNTobool = dart.constFn(dart.fnType(core.bool, [__t$MapEntryOfString$TN()])))();
    var __t$MapEntryOfString$TNToString = () => (__t$MapEntryOfString$TNToString = dart.constFn(dart.fnType(core.String, [__t$MapEntryOfString$TN()])))();
    class FlagsSummary extends diagnostics$.DiagnosticsProperty$(core.Map$(core.String, dart.nullable(T))) {
      static ['_#new#tearOff'](T, name, value, opts) {
        let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
        let showName = opts && 'showName' in opts ? opts.showName : null;
        let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : null;
        let level = opts && 'level' in opts ? opts.level : null;
        return new (diagnostics$.FlagsSummary$(T)).new(name, value, {ifEmpty: ifEmpty, showName: showName, showSeparator: showSeparator, level: level});
      }
      get value() {
        return dart.nullCheck(super.value);
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (!(this.value !== null)) dart.assertFailed(null, I[2], 2490, 12, "value != null");
        if (!this[_hasNonNullEntry]() && this.ifEmpty != null) {
          return dart.nullCheck(this.ifEmpty);
        }
        let formattedValues = this[_formattedValues]();
        if (parentConfiguration != null && !parentConfiguration.lineBreakProperties) {
          return "[" + formattedValues[$join](", ") + "]";
        }
        return formattedValues[$join](diagnostics$._isSingleLine(this.style) ? ", " : "\n");
      }
      get level() {
        if (!this[_hasNonNullEntry]() && this.ifEmpty == null) {
          return diagnostics$.DiagnosticLevel.hidden;
        }
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.value[$isNotEmpty]) {
          json[$_set]("values", this[_formattedValues]()[$toList]());
        }
        return json;
      }
      [_hasNonNullEntry]() {
        return this.value[$values][$any](dart.fn(o => o != null, __t$TNTobool()));
      }
      [_formattedValues]() {
        return this.value[$entries][$where](dart.fn(entry => entry.value != null, __t$MapEntryOfString$TNTobool()))[$map](core.String, dart.fn(entry => entry.key, __t$MapEntryOfString$TNToString()));
      }
    }
    (FlagsSummary.new = function(name, value, opts) {
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      if (!(value !== null)) dart.assertFailed(null, I[2], 2480, 15, "value != null");
      if (!(showName !== null)) dart.assertFailed(null, I[2], 2481, 15, "showName != null");
      if (!(showSeparator !== null)) dart.assertFailed(null, I[2], 2482, 15, "showSeparator != null");
      if (!(level !== null)) dart.assertFailed(null, I[2], 2483, 15, "level != null");
      FlagsSummary.__proto__.new.call(this, name, value, {ifEmpty: ifEmpty, showName: showName, showSeparator: showSeparator, level: level});
      ;
    }).prototype = FlagsSummary.prototype;
    dart.addTypeTests(FlagsSummary);
    FlagsSummary.prototype[_is_FlagsSummary_default] = true;
    dart.addTypeCaches(FlagsSummary);
    dart.setMethodSignature(FlagsSummary, () => ({
      __proto__: dart.getMethods(FlagsSummary.__proto__),
      [_hasNonNullEntry]: dart.fnType(core.bool, []),
      [_formattedValues]: dart.fnType(core.Iterable$(core.String), [])
    }));
    dart.setGetterSignature(FlagsSummary, () => ({
      __proto__: dart.getGetters(FlagsSummary.__proto__),
      value: core.Map$(core.String, dart.nullable(T))
    }));
    dart.setLibraryUri(FlagsSummary, I[1]);
    return FlagsSummary;
  });
  diagnostics$.FlagsSummary = diagnostics$.FlagsSummary$();
  dart.addTypeTests(diagnostics$.FlagsSummary, _is_FlagsSummary_default);
  var value$ = dart.privateName(diagnostics$, "DiagnosticableNode.value");
  var _cachedBuilder = dart.privateName(diagnostics$, "_cachedBuilder");
  const _is_DiagnosticableNode_default = Symbol('_is_DiagnosticableNode_default');
  diagnostics$.DiagnosticableNode$ = dart.generic(T => {
    class DiagnosticableNode extends diagnostics$.DiagnosticsNode {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new (diagnostics$.DiagnosticableNode$(T)).new({name: name, value: value, style: style});
      }
      get builder() {
        {
          if (!dart.fn(() => {
            if (this[_cachedBuilder] == null) {
              this[_cachedBuilder] = new diagnostics$.DiagnosticPropertiesBuilder.new();
              this.value.debugFillProperties(dart.nullCheck(this[_cachedBuilder]));
            }
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 2937, 14, "() {\n        if (_cachedBuilder == null) {\n          _cachedBuilder = DiagnosticPropertiesBuilder();\n          value.debugFillProperties(_cachedBuilder!);\n        }\n        return true;\n      }()");
          return this[_cachedBuilder];
        }
      }
      get style() {
        let t11;
        t11 = super.style;
        return t11 == null ? dart.nullCheck(this.builder).defaultDiagnosticsTreeStyle : t11;
      }
      get emptyBodyDescription() {
        return false || false ? "" : dart.nullCheck(this.builder).emptyBodyDescription;
      }
      getProperties() {
        return false || false ? C[30] || CT.C30 : dart.nullCheck(this.builder).properties;
      }
      getChildren() {
        return C[30] || CT.C30;
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let result = "";
        if (!dart.fn(() => {
          result = this.value.toStringShort();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 2967, 12, "() {\n      result = value.toStringShort();\n      return true;\n    }()");
        return result;
      }
    }
    (DiagnosticableNode.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      this[_cachedBuilder] = null;
      this[value$] = value;
      if (!(value !== null)) dart.assertFailed(null, I[2], 2923, 15, "value != null");
      DiagnosticableNode.__proto__.new.call(this, {name: name, style: style});
      ;
    }).prototype = DiagnosticableNode.prototype;
    dart.addTypeTests(DiagnosticableNode);
    DiagnosticableNode.prototype[_is_DiagnosticableNode_default] = true;
    dart.addTypeCaches(DiagnosticableNode);
    dart.setMethodSignature(DiagnosticableNode, () => ({
      __proto__: dart.getMethods(DiagnosticableNode.__proto__),
      getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {})
    }));
    dart.setGetterSignature(DiagnosticableNode, () => ({
      __proto__: dart.getGetters(DiagnosticableNode.__proto__),
      builder: dart.nullable(diagnostics$.DiagnosticPropertiesBuilder),
      style: diagnostics$.DiagnosticsTreeStyle
    }));
    dart.setLibraryUri(DiagnosticableNode, I[1]);
    dart.setFieldSignature(DiagnosticableNode, () => ({
      __proto__: dart.getFields(DiagnosticableNode.__proto__),
      value: dart.finalFieldType(T),
      [_cachedBuilder]: dart.fieldType(dart.nullable(diagnostics$.DiagnosticPropertiesBuilder))
    }));
    return DiagnosticableNode;
  });
  diagnostics$.DiagnosticableNode = diagnostics$.DiagnosticableNode$();
  dart.addTypeTests(diagnostics$.DiagnosticableNode, _is_DiagnosticableNode_default);
  diagnostics$.Diagnosticable = class Diagnosticable extends core.Object {};
  diagnostics$.Diagnosticable[dart.mixinOn] = Object => {
    class Diagnosticable extends Object {
      toStringShort() {
        return diagnostics$.describeIdentity(this);
      }
      toString(opts) {
        let t11;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[5] || CT.C5;
        let fullString = null;
        if (!dart.fn(() => {
          fullString = this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 3112, 12, "() {\n      fullString = toDiagnosticsNode(style: DiagnosticsTreeStyle.singleLine).toString(minLevel: minLevel);\n      return true;\n    }()");
        t11 = fullString;
        return t11 == null ? this.toStringShort() : t11;
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new (T$.DiagnosticableNodeOfDiagnosticable()).new({name: name, value: this, style: style});
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(Diagnosticable, ['toString']);
    return Diagnosticable;
  };
  (diagnostics$.Diagnosticable[dart.mixinNew] = function() {
  }).prototype = diagnostics$.Diagnosticable.prototype;
  dart.addTypeTests(diagnostics$.Diagnosticable);
  dart.addTypeCaches(diagnostics$.Diagnosticable);
  diagnostics$.Diagnosticable[dart.implements] = () => [core.Object];
  dart.setMethodSignature(diagnostics$.Diagnosticable, () => ({
    __proto__: dart.getMethods(diagnostics$.Diagnosticable.__proto__),
    toStringShort: dart.fnType(core.String, []),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    toDiagnosticsNode: dart.fnType(diagnostics$.DiagnosticsNode, [], {name: dart.nullable(core.String), style: dart.nullable(diagnostics$.DiagnosticsTreeStyle)}, {}),
    debugFillProperties: dart.fnType(dart.void, [diagnostics$.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(diagnostics$.Diagnosticable, I[1]);
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics$.Diagnosticable);
  diagnostics$.DiagnosticableTree = class DiagnosticableTree extends Object_Diagnosticable$36 {
    toStringShallow(opts) {
      let t11;
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[4] || CT.C4;
      let shallowString = null;
      if (!dart.fn(() => {
        let result = new core.StringBuffer.new();
        result.write(this.toString());
        result.write(joiner);
        let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        result.write(builder.properties[$where](dart.fn(n => !n.isFiltered(minLevel), T$.DiagnosticsNodeTobool()))[$join](joiner));
        shallowString = result.toString();
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 3387, 12, "() {\n      final StringBuffer result = StringBuffer();\n      result.write(toString());\n      result.write(joiner);\n      final DiagnosticPropertiesBuilder builder = DiagnosticPropertiesBuilder();\n      debugFillProperties(builder);\n      result.write(\n        builder.properties.where((DiagnosticsNode n) => !n.isFiltered(minLevel))\n            .join(joiner),\n      );\n      shallowString = result.toString();\n      return true;\n    }()");
      t11 = shallowString;
      return t11 == null ? this.toString() : t11;
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[4] || CT.C4;
      return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toStringShort() {
      return diagnostics$.describeIdentity(this);
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: this, style: style});
    }
    debugDescribeChildren() {
      return C[30] || CT.C30;
    }
  };
  (diagnostics$.DiagnosticableTree.new = function() {
    ;
  }).prototype = diagnostics$.DiagnosticableTree.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTree);
  dart.addTypeCaches(diagnostics$.DiagnosticableTree);
  dart.setMethodSignature(diagnostics$.DiagnosticableTree, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableTree.__proto__),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableTree, I[1]);
  diagnostics$.DiagnosticableTreeNode = class DiagnosticableTreeNode extends diagnostics$.DiagnosticableNode$(diagnostics$.DiagnosticableTree) {
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: value, style: style});
    }
    getChildren() {
      return this.value.debugDescribeChildren();
    }
  };
  (diagnostics$.DiagnosticableTreeNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    diagnostics$.DiagnosticableTreeNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = diagnostics$.DiagnosticableTreeNode.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTreeNode);
  dart.addTypeCaches(diagnostics$.DiagnosticableTreeNode);
  dart.setLibraryUri(diagnostics$.DiagnosticableTreeNode, I[1]);
  var properties$ = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.properties");
  var defaultDiagnosticsTreeStyle = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.defaultDiagnosticsTreeStyle");
  var emptyBodyDescription = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.emptyBodyDescription");
  diagnostics$.DiagnosticPropertiesBuilder = class DiagnosticPropertiesBuilder extends core.Object {
    get properties() {
      return this[properties$];
    }
    set properties(value) {
      super.properties = value;
    }
    get defaultDiagnosticsTreeStyle() {
      return this[defaultDiagnosticsTreeStyle];
    }
    set defaultDiagnosticsTreeStyle(value) {
      this[defaultDiagnosticsTreeStyle] = value;
    }
    get emptyBodyDescription() {
      return this[emptyBodyDescription];
    }
    set emptyBodyDescription(value) {
      this[emptyBodyDescription] = value;
    }
    static ['_#new#tearOff']() {
      return new diagnostics$.DiagnosticPropertiesBuilder.new();
    }
    static ['_#fromProperties#tearOff'](properties) {
      return new diagnostics$.DiagnosticPropertiesBuilder.fromProperties(properties);
    }
    add(property) {
      if (!dart.fn(() => {
        this.properties[$add](property);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 3057, 12, "() {\n      properties.add(property);\n      return true;\n    }()");
    }
  };
  (diagnostics$.DiagnosticPropertiesBuilder.new = function() {
    this[defaultDiagnosticsTreeStyle] = diagnostics$.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = T$.JSArrayOfDiagnosticsNode().of([]);
    ;
  }).prototype = diagnostics$.DiagnosticPropertiesBuilder.prototype;
  (diagnostics$.DiagnosticPropertiesBuilder.fromProperties = function(properties) {
    this[defaultDiagnosticsTreeStyle] = diagnostics$.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = properties;
    ;
  }).prototype = diagnostics$.DiagnosticPropertiesBuilder.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticPropertiesBuilder);
  dart.addTypeCaches(diagnostics$.DiagnosticPropertiesBuilder);
  dart.setMethodSignature(diagnostics$.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticPropertiesBuilder.__proto__),
    add: dart.fnType(dart.void, [diagnostics$.DiagnosticsNode])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticPropertiesBuilder, I[1]);
  dart.setFieldSignature(diagnostics$.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticPropertiesBuilder.__proto__),
    properties: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    defaultDiagnosticsTreeStyle: dart.fieldType(diagnostics$.DiagnosticsTreeStyle),
    emptyBodyDescription: dart.fieldType(dart.nullable(core.String))
  }));
  diagnostics$.DiagnosticableTreeMixin = class DiagnosticableTreeMixin extends core.Object {};
  diagnostics$.DiagnosticableTreeMixin[dart.mixinOn] = Object => {
    class DiagnosticableTreeMixin extends Object {
      toString(opts) {
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[5] || CT.C5;
        return this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
      }
      toStringShallow(opts) {
        let t11;
        let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[4] || CT.C4;
        let shallowString = null;
        if (!dart.fn(() => {
          let result = new core.StringBuffer.new();
          result.write(this.toStringShort());
          result.write(joiner);
          let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
          this.debugFillProperties(builder);
          result.write(builder.properties[$where](dart.fn(n => !n.isFiltered(minLevel), T$.DiagnosticsNodeTobool()))[$join](joiner));
          shallowString = result.toString();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 3477, 12, "() {\n      final StringBuffer result = StringBuffer();\n      result.write(toStringShort());\n      result.write(joiner);\n      final DiagnosticPropertiesBuilder builder = DiagnosticPropertiesBuilder();\n      debugFillProperties(builder);\n      result.write(\n        builder.properties.where((DiagnosticsNode n) => !n.isFiltered(minLevel))\n            .join(joiner),\n      );\n      shallowString = result.toString();\n      return true;\n    }()");
        t11 = shallowString;
        return t11 == null ? this.toString() : t11;
      }
      toStringDeep(opts) {
        let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
        let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[4] || CT.C4;
        return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      }
      toStringShort() {
        return diagnostics$.describeIdentity(this);
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: this, style: style});
      }
      debugDescribeChildren() {
        return C[30] || CT.C30;
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(DiagnosticableTreeMixin, ['toString']);
    return DiagnosticableTreeMixin;
  };
  (diagnostics$.DiagnosticableTreeMixin[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticableTreeMixin.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTreeMixin);
  dart.addTypeCaches(diagnostics$.DiagnosticableTreeMixin);
  diagnostics$.DiagnosticableTreeMixin[dart.implements] = () => [diagnostics$.DiagnosticableTree, core.Object];
  dart.setMethodSignature(diagnostics$.DiagnosticableTreeMixin, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableTreeMixin.__proto__),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: dart.nullable(core.String)}, {}),
    toStringShort: dart.fnType(core.String, []),
    toDiagnosticsNode: dart.fnType(diagnostics$.DiagnosticsNode, [], {name: dart.nullable(core.String), style: dart.nullable(diagnostics$.DiagnosticsTreeStyle)}, {}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    debugFillProperties: dart.fnType(dart.void, [diagnostics$.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableTreeMixin, I[1]);
  var level$ = dart.privateName(diagnostics$, "DiagnosticsBlock.level");
  var value$0 = dart.privateName(diagnostics$, "DiagnosticsBlock.value");
  var allowTruncate$ = dart.privateName(diagnostics$, "DiagnosticsBlock.allowTruncate");
  var _children = dart.privateName(diagnostics$, "_children");
  var _properties = dart.privateName(diagnostics$, "_properties");
  diagnostics$.DiagnosticsBlock = class DiagnosticsBlock extends diagnostics$.DiagnosticsNode {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get allowTruncate() {
      return this[allowTruncate$];
    }
    set allowTruncate(value) {
      super.allowTruncate = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : null;
      let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
      let allowTruncate = opts && 'allowTruncate' in opts ? opts.allowTruncate : false;
      let children = opts && 'children' in opts ? opts.children : C[30] || CT.C30;
      let properties = opts && 'properties' in opts ? opts.properties : C[30] || CT.C30;
      return new diagnostics$.DiagnosticsBlock.new({name: name, style: style, showName: showName, showSeparator: showSeparator, linePrefix: linePrefix, value: value, description: description, level: level, allowTruncate: allowTruncate, children: children, properties: properties});
    }
    getChildren() {
      return this[_children];
    }
    getProperties() {
      return this[_properties];
    }
    toDescription(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this[_description];
    }
  };
  (diagnostics$.DiagnosticsBlock.new = function(opts) {
    let t11;
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : C[18] || CT.C18;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    let allowTruncate = opts && 'allowTruncate' in opts ? opts.allowTruncate : false;
    let children = opts && 'children' in opts ? opts.children : C[30] || CT.C30;
    let properties = opts && 'properties' in opts ? opts.properties : C[30] || CT.C30;
    this[value$0] = value;
    this[level$] = level;
    this[allowTruncate$] = allowTruncate;
    this[_description] = (t11 = description, t11 == null ? "" : t11);
    this[_children] = children;
    this[_properties] = properties;
    diagnostics$.DiagnosticsBlock.__proto__.new.call(this, {showName: showName && name != null, name: name, style: style, showSeparator: showSeparator, linePrefix: linePrefix});
    ;
  }).prototype = diagnostics$.DiagnosticsBlock.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsBlock);
  dart.addTypeCaches(diagnostics$.DiagnosticsBlock);
  dart.setMethodSignature(diagnostics$.DiagnosticsBlock, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsBlock.__proto__),
    getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    toDescription: dart.fnType(core.String, [], {parentConfiguration: dart.nullable(diagnostics$.TextTreeConfiguration)}, {})
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsBlock, I[1]);
  dart.setFieldSignature(diagnostics$.DiagnosticsBlock, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsBlock.__proto__),
    [_children]: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    [_properties]: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    level: dart.finalFieldType(diagnostics$.DiagnosticLevel),
    [_description]: dart.finalFieldType(core.String),
    value: dart.finalFieldType(dart.nullable(core.Object)),
    allowTruncate: dart.finalFieldType(core.bool)
  }));
  diagnostics$.DiagnosticsSerializationDelegate = class DiagnosticsSerializationDelegate extends core.Object {
    static ['_#new#tearOff'](opts) {
      let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : 0;
      let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : false;
      return new diagnostics$._DefaultDiagnosticsSerializationDelegate.new({subtreeDepth: subtreeDepth, includeProperties: includeProperties});
    }
  };
  (diagnostics$.DiagnosticsSerializationDelegate[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsSerializationDelegate);
  dart.addTypeCaches(diagnostics$.DiagnosticsSerializationDelegate);
  dart.setStaticMethodSignature(diagnostics$.DiagnosticsSerializationDelegate, () => ['new']);
  dart.setLibraryUri(diagnostics$.DiagnosticsSerializationDelegate, I[1]);
  dart.setStaticFieldSignature(diagnostics$.DiagnosticsSerializationDelegate, () => ['_redirecting#']);
  var includeProperties$ = dart.privateName(diagnostics$, "_DefaultDiagnosticsSerializationDelegate.includeProperties");
  var subtreeDepth$ = dart.privateName(diagnostics$, "_DefaultDiagnosticsSerializationDelegate.subtreeDepth");
  diagnostics$._DefaultDiagnosticsSerializationDelegate = class _DefaultDiagnosticsSerializationDelegate extends core.Object {
    get includeProperties() {
      return this[includeProperties$];
    }
    set includeProperties(value) {
      super.includeProperties = value;
    }
    get subtreeDepth() {
      return this[subtreeDepth$];
    }
    set subtreeDepth(value) {
      super.subtreeDepth = value;
    }
    static ['_#new#tearOff'](opts) {
      let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : false;
      let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : 0;
      return new diagnostics$._DefaultDiagnosticsSerializationDelegate.new({includeProperties: includeProperties, subtreeDepth: subtreeDepth});
    }
    additionalNodeProperties(node) {
      return C[31] || CT.C31;
    }
    delegateForNode(node) {
      return this.subtreeDepth > 0 ? this.copyWith({subtreeDepth: this.subtreeDepth - 1}) : this;
    }
    get expandPropertyValues() {
      return false;
    }
    filterChildren(nodes, owner) {
      return nodes;
    }
    filterProperties(nodes, owner) {
      return nodes;
    }
    truncateNodesList(nodes, owner) {
      return nodes;
    }
    copyWith(opts) {
      let t11, t11$;
      let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : null;
      let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : null;
      return new diagnostics$._DefaultDiagnosticsSerializationDelegate.new({subtreeDepth: (t11 = subtreeDepth, t11 == null ? this.subtreeDepth : t11), includeProperties: (t11$ = includeProperties, t11$ == null ? this.includeProperties : t11$)});
    }
  };
  (diagnostics$._DefaultDiagnosticsSerializationDelegate.new = function(opts) {
    let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : false;
    let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : 0;
    this[includeProperties$] = includeProperties;
    this[subtreeDepth$] = subtreeDepth;
    ;
  }).prototype = diagnostics$._DefaultDiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(diagnostics$._DefaultDiagnosticsSerializationDelegate);
  dart.addTypeCaches(diagnostics$._DefaultDiagnosticsSerializationDelegate);
  diagnostics$._DefaultDiagnosticsSerializationDelegate[dart.implements] = () => [diagnostics$.DiagnosticsSerializationDelegate];
  dart.setMethodSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getMethods(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    additionalNodeProperties: dart.fnType(core.Map$(core.String, dart.nullable(core.Object)), [diagnostics$.DiagnosticsNode]),
    delegateForNode: dart.fnType(diagnostics$.DiagnosticsSerializationDelegate, [diagnostics$.DiagnosticsNode]),
    filterChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), diagnostics$.DiagnosticsNode]),
    filterProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), diagnostics$.DiagnosticsNode]),
    truncateNodesList: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), dart.nullable(diagnostics$.DiagnosticsNode)]),
    copyWith: dart.fnType(diagnostics$.DiagnosticsSerializationDelegate, [], {includeProperties: dart.nullable(core.bool), subtreeDepth: dart.nullable(core.int)}, {})
  }));
  dart.setGetterSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getGetters(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    expandPropertyValues: core.bool
  }));
  dart.setLibraryUri(diagnostics$._DefaultDiagnosticsSerializationDelegate, I[1]);
  dart.setFieldSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getFields(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    includeProperties: dart.finalFieldType(core.bool),
    subtreeDepth: dart.finalFieldType(core.int)
  }));
  diagnostics$._isSingleLine = function _isSingleLine(style) {
    return style === diagnostics$.DiagnosticsTreeStyle.singleLine;
  };
  diagnostics$.shortHash = function shortHash(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  diagnostics$.describeIdentity = function describeIdentity(object) {
    return object$.objectRuntimeType(object, "<optimized out>") + "#" + diagnostics$.shortHash(object);
  };
  diagnostics$.describeEnum = function describeEnum(enumEntry) {
    if (core.Enum.is(enumEntry)) {
      return core['EnumName|get#name'](enumEntry);
    }
    let description = enumEntry[$toString]();
    let indexOfDot = description[$indexOf](".");
    if (!(indexOfDot !== -1 && indexOfDot < description.length - 1)) dart.assertFailed("The provided object \"" + dart.str(enumEntry) + "\" is not an enum.", I[2], 3039, 5, "indexOfDot != -1 && indexOfDot < description.length - 1");
    return description[$substring](indexOfDot + 1);
  };
  dart.defineLazy(diagnostics$, {
    /*diagnostics$.sparseTextConfiguration*/get sparseTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "├─", prefixOtherLines: " ", prefixLastChildLineOne: "└─", linkCharacter: "│", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*diagnostics$.dashedTextConfiguration*/get dashedTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╎╌", prefixLastChildLineOne: "└╌", prefixOtherLines: " ", linkCharacter: "╎", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*diagnostics$.denseTextConfiguration*/get denseTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", lineBreakProperties: false, prefixLineOne: "├", prefixOtherLines: "", prefixLastChildLineOne: "└", linkCharacter: "│", propertyPrefixIfChildren: "│", propertyPrefixNoChildren: " ", prefixOtherLinesRootNode: "", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.transitionTextConfiguration*/get transitionTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╞═╦══ ", prefixLastChildLineOne: "╘═╦══ ", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", afterName: " ═══", afterDescriptionIfBody: ":", bodyIndent: "  ", isNameOnOwnLine: true, addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.errorTextConfiguration*/get errorTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╞═╦", prefixLastChildLineOne: "╘═╦", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", beforeName: "══╡ ", suffixLineOne: " ╞══", mandatoryFooter: "═════", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.whitespaceTextConfiguration*/get whitespaceTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.flatTextConfiguration*/get flatTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: "", prefixOtherLinesRootNode: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: "", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.singleLineTextConfiguration*/get singleLineTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: ""});
    },
    /*diagnostics$.errorPropertyTextConfiguration*/get errorPropertyTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: "", isNameOnOwnLine: true});
    },
    /*diagnostics$.shallowTextConfiguration*/get shallowTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false, showChildren: false});
    },
    /*diagnostics$.kNoDefaultValue*/get kNoDefaultValue() {
      return C[29] || CT.C29;
    }
  }, false);
  var $package$ = dart.privateName(assertions, "PartialStackFrame.package");
  var className$ = dart.privateName(assertions, "PartialStackFrame.className");
  var method$ = dart.privateName(assertions, "PartialStackFrame.method");
  assertions.PartialStackFrame = class PartialStackFrame extends core.Object {
    get package() {
      return this[$package$];
    }
    set package(value) {
      super.package = value;
    }
    get className() {
      return this[className$];
    }
    set className(value) {
      super.className = value;
    }
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    static ['_#new#tearOff'](opts) {
      let $package = opts && 'package' in opts ? opts.package : null;
      let className = opts && 'className' in opts ? opts.className : null;
      let method = opts && 'method' in opts ? opts.method : null;
      return new assertions.PartialStackFrame.new({package: $package, className: className, method: method});
    }
    matches(stackFrame) {
      let stackFramePackage = stackFrame.packageScheme + ":" + stackFrame.package + "/" + stackFrame.packagePath;
      {
        return this.package[$allMatches](stackFramePackage)[$isNotEmpty] && stackFrame.method === (this.method[$startsWith]("_") ? "[" + this.method + "]" : this.method);
      }
      return this.package[$allMatches](stackFramePackage)[$isNotEmpty] && stackFrame.method === this.method && stackFrame.className === this.className;
    }
  };
  (assertions.PartialStackFrame.new = function(opts) {
    let $package = opts && 'package' in opts ? opts.package : null;
    let className = opts && 'className' in opts ? opts.className : null;
    let method = opts && 'method' in opts ? opts.method : null;
    this[$package$] = $package;
    this[className$] = className;
    this[method$] = method;
    if (!(className !== null)) dart.assertFailed(null, I[3], 55, 15, "className != null");
    if (!(method !== null)) dart.assertFailed(null, I[3], 56, 15, "method != null");
    if (!($package !== null)) dart.assertFailed(null, I[3], 57, 15, "package != null");
    ;
  }).prototype = assertions.PartialStackFrame.prototype;
  dart.addTypeTests(assertions.PartialStackFrame);
  dart.addTypeCaches(assertions.PartialStackFrame);
  dart.setMethodSignature(assertions.PartialStackFrame, () => ({
    __proto__: dart.getMethods(assertions.PartialStackFrame.__proto__),
    matches: dart.fnType(core.bool, [stack_frame.StackFrame])
  }));
  dart.setLibraryUri(assertions.PartialStackFrame, I[4]);
  dart.setFieldSignature(assertions.PartialStackFrame, () => ({
    __proto__: dart.getFields(assertions.PartialStackFrame.__proto__),
    package: dart.finalFieldType(core.Pattern),
    className: dart.finalFieldType(core.String),
    method: dart.finalFieldType(core.String)
  }));
  dart.setStaticFieldSignature(assertions.PartialStackFrame, () => ['asynchronousSuspension']);
  dart.defineLazy(assertions.PartialStackFrame, {
    /*assertions.PartialStackFrame.asynchronousSuspension*/get asynchronousSuspension() {
      return C[32] || CT.C32;
    }
  }, false);
  assertions.StackFilter = class StackFilter extends core.Object {};
  (assertions.StackFilter.new = function() {
    ;
  }).prototype = assertions.StackFilter.prototype;
  dart.addTypeTests(assertions.StackFilter);
  dart.addTypeCaches(assertions.StackFilter);
  dart.setLibraryUri(assertions.StackFilter, I[4]);
  var frames$ = dart.privateName(assertions, "RepetitiveStackFrameFilter.frames");
  var replacement$ = dart.privateName(assertions, "RepetitiveStackFrameFilter.replacement");
  var _replacements = dart.privateName(assertions, "_replacements");
  var _matchesFrames = dart.privateName(assertions, "_matchesFrames");
  assertions.RepetitiveStackFrameFilter = class RepetitiveStackFrameFilter extends assertions.StackFilter {
    get frames() {
      return this[frames$];
    }
    set frames(value) {
      super.frames = value;
    }
    get replacement() {
      return this[replacement$];
    }
    set replacement(value) {
      super.replacement = value;
    }
    static ['_#new#tearOff'](opts) {
      let frames = opts && 'frames' in opts ? opts.frames : null;
      let replacement = opts && 'replacement' in opts ? opts.replacement : null;
      return new assertions.RepetitiveStackFrameFilter.new({frames: frames, replacement: replacement});
    }
    get numFrames() {
      return this.frames[$length];
    }
    get [_replacements]() {
      return T$.ListOfString().filled(this.numFrames, this.replacement);
    }
    filter(stackFrames, reasons) {
      for (let index = 0; index < stackFrames[$length] - this.numFrames; index = index + 1) {
        if (this[_matchesFrames](stackFrames[$skip](index)[$take](this.numFrames)[$toList]())) {
          reasons[$setRange](index, index + this.numFrames, this[_replacements]);
          index = index + (this.numFrames - 1);
        }
      }
    }
    [_matchesFrames](stackFrames) {
      if (stackFrames[$length] < this.numFrames) {
        return false;
      }
      for (let index = 0; index < stackFrames[$length]; index = index + 1) {
        if (!this.frames[$_get](index).matches(stackFrames[$_get](index))) {
          return false;
        }
      }
      return true;
    }
  };
  (assertions.RepetitiveStackFrameFilter.new = function(opts) {
    let frames = opts && 'frames' in opts ? opts.frames : null;
    let replacement = opts && 'replacement' in opts ? opts.replacement : null;
    this[frames$] = frames;
    this[replacement$] = replacement;
    if (!(frames !== null)) dart.assertFailed(null, I[3], 129, 15, "frames != null");
    if (!(replacement !== null)) dart.assertFailed(null, I[3], 130, 15, "replacement != null");
    assertions.RepetitiveStackFrameFilter.__proto__.new.call(this);
    ;
  }).prototype = assertions.RepetitiveStackFrameFilter.prototype;
  dart.addTypeTests(assertions.RepetitiveStackFrameFilter);
  dart.addTypeCaches(assertions.RepetitiveStackFrameFilter);
  dart.setMethodSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getMethods(assertions.RepetitiveStackFrameFilter.__proto__),
    filter: dart.fnType(dart.void, [core.List$(stack_frame.StackFrame), core.List$(dart.nullable(core.String))]),
    [_matchesFrames]: dart.fnType(core.bool, [core.List$(stack_frame.StackFrame)])
  }));
  dart.setGetterSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getGetters(assertions.RepetitiveStackFrameFilter.__proto__),
    numFrames: core.int,
    [_replacements]: core.List$(core.String)
  }));
  dart.setLibraryUri(assertions.RepetitiveStackFrameFilter, I[4]);
  dart.setFieldSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getFields(assertions.RepetitiveStackFrameFilter.__proto__),
    frames: dart.finalFieldType(core.List$(assertions.PartialStackFrame)),
    replacement: dart.finalFieldType(core.String)
  }));
  assertions._ErrorDiagnostic = class _ErrorDiagnostic extends diagnostics$.DiagnosticsProperty$(core.List$(core.Object)) {
    get value() {
      return dart.nullCheck(super.value);
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this.value[$join]();
    }
  };
  (assertions._ErrorDiagnostic.new = function(message, opts) {
    let style = opts && 'style' in opts ? opts.style : C[19] || CT.C19;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    if (!(message !== null)) dart.assertFailed(null, I[3], 178, 15, "message != null");
    assertions._ErrorDiagnostic.__proto__.new.call(this, null, T$.JSArrayOfObject().of([message]), {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = assertions._ErrorDiagnostic.prototype;
  (assertions._ErrorDiagnostic._fromParts = function(messageParts, opts) {
    let style = opts && 'style' in opts ? opts.style : C[19] || CT.C19;
    let level = opts && 'level' in opts ? opts.level : C[5] || CT.C5;
    if (!(messageParts !== null)) dart.assertFailed(null, I[3], 218, 15, "messageParts != null");
    assertions._ErrorDiagnostic.__proto__.new.call(this, null, messageParts, {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = assertions._ErrorDiagnostic.prototype;
  dart.addTypeTests(assertions._ErrorDiagnostic);
  dart.addTypeCaches(assertions._ErrorDiagnostic);
  dart.setGetterSignature(assertions._ErrorDiagnostic, () => ({
    __proto__: dart.getGetters(assertions._ErrorDiagnostic.__proto__),
    value: core.List$(core.Object)
  }));
  dart.setLibraryUri(assertions._ErrorDiagnostic, I[4]);
  assertions.ErrorDescription = class ErrorDescription extends assertions._ErrorDiagnostic {
    static ['_#new#tearOff'](message) {
      return new assertions.ErrorDescription.new(message);
    }
    static ['_#_fromParts#tearOff'](messageParts) {
      return new assertions.ErrorDescription._fromParts(messageParts);
    }
  };
  (assertions.ErrorDescription.new = function(message) {
    assertions.ErrorDescription.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.info});
    ;
  }).prototype = assertions.ErrorDescription.prototype;
  (assertions.ErrorDescription._fromParts = function(messageParts) {
    assertions.ErrorDescription.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.info});
    ;
  }).prototype = assertions.ErrorDescription.prototype;
  dart.addTypeTests(assertions.ErrorDescription);
  dart.addTypeCaches(assertions.ErrorDescription);
  dart.setLibraryUri(assertions.ErrorDescription, I[4]);
  assertions.ErrorSummary = class ErrorSummary extends assertions._ErrorDiagnostic {
    static ['_#new#tearOff'](message) {
      return new assertions.ErrorSummary.new(message);
    }
    static ['_#_fromParts#tearOff'](messageParts) {
      return new assertions.ErrorSummary._fromParts(messageParts);
    }
  };
  (assertions.ErrorSummary.new = function(message) {
    assertions.ErrorSummary.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.summary});
    ;
  }).prototype = assertions.ErrorSummary.prototype;
  (assertions.ErrorSummary._fromParts = function(messageParts) {
    assertions.ErrorSummary.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.summary});
    ;
  }).prototype = assertions.ErrorSummary.prototype;
  dart.addTypeTests(assertions.ErrorSummary);
  dart.addTypeCaches(assertions.ErrorSummary);
  dart.setLibraryUri(assertions.ErrorSummary, I[4]);
  assertions.ErrorHint = class ErrorHint extends assertions._ErrorDiagnostic {
    static ['_#new#tearOff'](message) {
      return new assertions.ErrorHint.new(message);
    }
    static ['_#_fromParts#tearOff'](messageParts) {
      return new assertions.ErrorHint._fromParts(messageParts);
    }
  };
  (assertions.ErrorHint.new = function(message) {
    assertions.ErrorHint.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.hint});
    ;
  }).prototype = assertions.ErrorHint.prototype;
  (assertions.ErrorHint._fromParts = function(messageParts) {
    assertions.ErrorHint.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.hint});
    ;
  }).prototype = assertions.ErrorHint.prototype;
  dart.addTypeTests(assertions.ErrorHint);
  dart.addTypeCaches(assertions.ErrorHint);
  dart.setLibraryUri(assertions.ErrorHint, I[4]);
  assertions.ErrorSpacer = class ErrorSpacer extends diagnostics$.DiagnosticsProperty$(dart.void) {
    static ['_#new#tearOff']() {
      return new assertions.ErrorSpacer.new();
    }
  };
  (assertions.ErrorSpacer.new = function() {
    assertions.ErrorSpacer.__proto__.new.call(this, "", null, {description: "", showName: false});
    ;
  }).prototype = assertions.ErrorSpacer.prototype;
  dart.addTypeTests(assertions.ErrorSpacer);
  dart.addTypeCaches(assertions.ErrorSpacer);
  dart.setLibraryUri(assertions.ErrorSpacer, I[4]);
  var exception$ = dart.privateName(assertions, "FlutterErrorDetails.exception");
  var stack$ = dart.privateName(assertions, "FlutterErrorDetails.stack");
  var library$ = dart.privateName(assertions, "FlutterErrorDetails.library");
  var context$ = dart.privateName(assertions, "FlutterErrorDetails.context");
  var stackFilter$ = dart.privateName(assertions, "FlutterErrorDetails.stackFilter");
  var informationCollector$ = dart.privateName(assertions, "FlutterErrorDetails.informationCollector");
  var silent$ = dart.privateName(assertions, "FlutterErrorDetails.silent");
  var _exceptionToDiagnosticable = dart.privateName(assertions, "_exceptionToDiagnosticable");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics$.Diagnosticable);
  assertions.FlutterErrorDetails = class FlutterErrorDetails extends Object_Diagnosticable$36$ {
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get stack() {
      return this[stack$];
    }
    set stack(value) {
      super.stack = value;
    }
    get library() {
      return this[library$];
    }
    set library(value) {
      super.library = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get stackFilter() {
      return this[stackFilter$];
    }
    set stackFilter(value) {
      super.stackFilter = value;
    }
    get informationCollector() {
      return this[informationCollector$];
    }
    set informationCollector(value) {
      super.informationCollector = value;
    }
    get silent() {
      return this[silent$];
    }
    set silent(value) {
      super.silent = value;
    }
    static ['_#new#tearOff'](opts) {
      let exception = opts && 'exception' in opts ? opts.exception : null;
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let library = opts && 'library' in opts ? opts.library : "Flutter framework";
      let context = opts && 'context' in opts ? opts.context : null;
      let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let silent = opts && 'silent' in opts ? opts.silent : false;
      return new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: library, context: context, stackFilter: stackFilter, informationCollector: informationCollector, silent: silent});
    }
    copyWith(opts) {
      let t11, t11$, t11$0, t11$1, t11$2, t11$3, t11$4;
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let library = opts && 'library' in opts ? opts.library : null;
      let silent = opts && 'silent' in opts ? opts.silent : null;
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
      return new assertions.FlutterErrorDetails.new({context: (t11 = context, t11 == null ? this.context : t11), exception: (t11$ = exception, t11$ == null ? this.exception : t11$), informationCollector: (t11$0 = informationCollector, t11$0 == null ? this.informationCollector : t11$0), library: (t11$1 = library, t11$1 == null ? this.library : t11$1), silent: (t11$2 = silent, t11$2 == null ? this.silent : t11$2), stack: (t11$3 = stack, t11$3 == null ? this.stack : t11$3), stackFilter: (t11$4 = stackFilter, t11$4 == null ? this.stackFilter : t11$4)});
    }
    exceptionAsString() {
      let longMessage = null;
      if (core.AssertionError.is(this.exception)) {
        let message = core.AssertionError.as(this.exception).message;
        let fullMessage = this.exception[$toString]();
        if (typeof message == 'string' && message !== fullMessage) {
          if (fullMessage.length > message.length) {
            let position = fullMessage[$lastIndexOf](message);
            if (position === fullMessage.length - message.length && position > 2 && fullMessage[$substring](position - 2, position) === ": ") {
              let body = fullMessage[$substring](0, position - 2);
              let splitPoint = body[$indexOf](" Failed assertion:");
              if (splitPoint >= 0) {
                body = body[$substring](0, splitPoint) + "\n" + body[$substring](splitPoint + 1);
              }
              longMessage = message[$trimRight]() + "\n" + body;
            }
          }
        }
        longMessage == null ? longMessage = fullMessage : null;
      } else if (typeof this.exception == 'string') {
        longMessage = core.String.as(this.exception);
      } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
        longMessage = this.exception[$toString]();
      } else {
        longMessage = "  " + dart.str(this.exception);
      }
      longMessage = longMessage[$trimRight]();
      if (longMessage[$isEmpty]) {
        longMessage = "  <no message available>";
      }
      return longMessage;
    }
    [_exceptionToDiagnosticable]() {
      let exception = this.exception;
      if (assertions.FlutterError.is(exception)) {
        return exception;
      }
      if (core.AssertionError.is(exception) && assertions.FlutterError.is(exception.message)) {
        return assertions.FlutterError.as(dart.nullCheck(exception.message));
      }
      return null;
    }
    get summary() {
      let t11;
      const formatException = () => {
        return this.exceptionAsString()[$split]("\n")[$_get](0)[$trimLeft]();
      };
      dart.fn(formatException, T$.VoidToString());
      ;
      let diagnosticable = this[_exceptionToDiagnosticable]();
      let summary = null;
      if (diagnosticable != null) {
        let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        summary = builder.properties[$cast](T$.DiagnosticsNodeN())[$firstWhere](dart.fn(node => dart.nullCheck(node).level === diagnostics$.DiagnosticLevel.summary, T$.DiagnosticsNodeNTobool()), {orElse: dart.fn(() => null, T$.VoidToNull())});
      }
      t11 = summary;
      return t11 == null ? new assertions.ErrorSummary.new(formatException()) : t11;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let verb = new assertions.ErrorDescription.new("thrown" + dart.str(this.context != null ? new assertions.ErrorDescription.new(" " + dart.str(this.context)) : ""));
      let diagnosticable = this[_exceptionToDiagnosticable]();
      if (core.NullThrownError.is(this.exception)) {
        properties.add(new assertions.ErrorDescription.new("The null value was " + dart.str(verb) + "."));
      } else if (typeof this.exception == 'number') {
        properties.add(new assertions.ErrorDescription.new("The number " + dart.str(this.exception) + " was " + dart.str(verb) + "."));
      } else {
        let errorName = null;
        if (core.AssertionError.is(this.exception)) {
          errorName = new assertions.ErrorDescription.new("assertion");
        } else if (typeof this.exception == 'string') {
          errorName = new assertions.ErrorDescription.new("message");
        } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
          errorName = new assertions.ErrorDescription.new(dart.str(this.exception[$runtimeType]));
        } else {
          errorName = new assertions.ErrorDescription.new(dart.str(this.exception[$runtimeType]) + " object");
        }
        properties.add(new assertions.ErrorDescription.new("The following " + dart.str(errorName) + " was " + dart.str(verb) + ":"));
        if (diagnosticable != null) {
          diagnosticable.debugFillProperties(properties);
        } else {
          let prefix = dart.str(this.exception[$runtimeType]) + ": ";
          let message = this.exceptionAsString();
          if (message[$startsWith](prefix)) {
            message = message[$substring](prefix.length);
          }
          properties.add(new assertions.ErrorSummary.new(message));
        }
      }
      if (this.stack != null) {
        if (core.AssertionError.is(this.exception) && diagnosticable == null) {
          let stackFrames = stack_frame.StackFrame.fromStackTrace(assertions.FlutterError.demangleStackTrace(dart.nullCheck(this.stack)))[$skipWhile](dart.fn(frame => frame.packageScheme === "dart", T$.StackFrameTobool()))[$toList]();
          let ourFault = stackFrames[$length] >= 2 && stackFrames[$_get](0).package === "flutter" && stackFrames[$_get](1).package === "flutter";
          if (ourFault) {
            properties.add(new assertions.ErrorSpacer.new());
            properties.add(new assertions.ErrorHint.new("Either the assertion indicates an error in the framework itself, or we should " + "provide substantially more information in this error message to help you determine " + "and fix the underlying cause.\n" + "In either case, please report this assertion by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
          }
        }
        properties.add(new assertions.ErrorSpacer.new());
        properties.add(new assertions.DiagnosticsStackTrace.new("When the exception was thrown, this was the stack", this.stack, {stackFilter: this.stackFilter}));
      }
      if (this.informationCollector != null) {
        properties.add(new assertions.ErrorSpacer.new());
        dart.nullCheck(this.informationCollector)()[$forEach](dart.bind(properties, 'add'));
      }
    }
    toStringShort() {
      return this.library != null ? "Exception caught by " + dart.str(this.library) : "Exception caught";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[5] || CT.C5;
      return this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.error}).toStringDeep({minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new assertions._FlutterErrorDetailsNode.new({name: name, value: this, style: style});
    }
  };
  (assertions.FlutterErrorDetails.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : "Flutter framework";
    let context = opts && 'context' in opts ? opts.context : null;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[exception$] = exception;
    this[stack$] = stack;
    this[library$] = library;
    this[context$] = context;
    this[stackFilter$] = stackFilter;
    this[informationCollector$] = informationCollector;
    this[silent$] = silent;
    if (!(exception !== null)) dart.assertFailed(null, I[3], 407, 15, "exception != null");
    ;
  }).prototype = assertions.FlutterErrorDetails.prototype;
  dart.addTypeTests(assertions.FlutterErrorDetails);
  dart.addTypeCaches(assertions.FlutterErrorDetails);
  dart.setMethodSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getMethods(assertions.FlutterErrorDetails.__proto__),
    copyWith: dart.fnType(assertions.FlutterErrorDetails, [], {context: dart.nullable(diagnostics$.DiagnosticsNode), exception: dart.nullable(core.Object), informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics$.DiagnosticsNode), [])), library: dart.nullable(core.String), silent: dart.nullable(core.bool), stack: dart.nullable(core.StackTrace), stackFilter: dart.nullable(dart.fnType(core.Iterable$(core.String), [core.Iterable$(core.String)]))}, {}),
    exceptionAsString: dart.fnType(core.String, []),
    [_exceptionToDiagnosticable]: dart.fnType(dart.nullable(diagnostics$.Diagnosticable), [])
  }));
  dart.setGetterSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getGetters(assertions.FlutterErrorDetails.__proto__),
    summary: diagnostics$.DiagnosticsNode
  }));
  dart.setLibraryUri(assertions.FlutterErrorDetails, I[4]);
  dart.setFieldSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getFields(assertions.FlutterErrorDetails.__proto__),
    exception: dart.finalFieldType(core.Object),
    stack: dart.finalFieldType(dart.nullable(core.StackTrace)),
    library: dart.finalFieldType(dart.nullable(core.String)),
    context: dart.finalFieldType(dart.nullable(diagnostics$.DiagnosticsNode)),
    stackFilter: dart.finalFieldType(dart.nullable(dart.fnType(core.Iterable$(core.String), [core.Iterable$(core.String)]))),
    informationCollector: dart.finalFieldType(dart.nullable(dart.fnType(core.Iterable$(diagnostics$.DiagnosticsNode), []))),
    silent: dart.finalFieldType(core.bool)
  }));
  dart.setStaticFieldSignature(assertions.FlutterErrorDetails, () => ['propertiesTransformers']);
  dart.defineExtensionMethods(assertions.FlutterErrorDetails, ['toString']);
  dart.defineLazy(assertions.FlutterErrorDetails, {
    /*assertions.FlutterErrorDetails.propertiesTransformers*/get propertiesTransformers() {
      return T$.JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode().of([]);
    }
  }, false);
  var diagnostics$0 = dart.privateName(assertions, "FlutterError.diagnostics");
  const Error_DiagnosticableTreeMixin$36 = class Error_DiagnosticableTreeMixin extends core.Error {};
  (Error_DiagnosticableTreeMixin$36.new = function() {
    Error_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = Error_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(Error_DiagnosticableTreeMixin$36, diagnostics$.DiagnosticableTreeMixin);
  assertions.FlutterError = class FlutterError extends Error_DiagnosticableTreeMixin$36 {
    get diagnostics() {
      return this[diagnostics$0];
    }
    set diagnostics(value) {
      super.diagnostics = value;
    }
    static new(message) {
      let lines = message[$split]("\n");
      return new assertions.FlutterError.fromParts((() => {
        let t11 = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(lines[$first])]);
        t11[$addAll](lines[$skip](1)[$map](diagnostics$.DiagnosticsNode, dart.fn(line => new assertions.ErrorDescription.new(line), T$.StringToErrorDescription())));
        return t11;
      })());
    }
    static ['_#new#tearOff'](message) {
      return assertions.FlutterError.new(message);
    }
    static ['_#fromParts#tearOff'](diagnostics) {
      return new assertions.FlutterError.fromParts(diagnostics);
    }
    get message() {
      return this.toString();
    }
    static _defaultStackTraceDemangler(stackTrace) {
      return stackTrace;
    }
    static resetErrorCount() {
      assertions.FlutterError._errorCount = 0;
    }
    static dumpErrorToConsole(details, opts) {
      let forceReport = opts && 'forceReport' in opts ? opts.forceReport : false;
      if (!(details !== null)) dart.assertFailed(null, I[3], 1001, 12, "details != null");
      if (!(details.exception !== null)) dart.assertFailed(null, I[3], 1002, 12, "details.exception != null");
      let isInDebugMode = false;
      if (!dart.fn(() => {
        isInDebugMode = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 1004, 12, "() {\n      // In debug mode, we ignore the \"silent\" flag.\n      isInDebugMode = true;\n      return true;\n    }()");
      let reportError = isInDebugMode || details.silent !== true;
      if (!reportError && !forceReport) {
        return;
      }
      if (assertions.FlutterError._errorCount === 0 || forceReport) {
        if (isInDebugMode) {
          print.debugPrint(new diagnostics$.TextTreeRenderer.new({wrapWidthProperties: 100, maxDescendentsTruncatableNode: 5}).render(details.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.error}))[$trimRight]());
        } else {
          assertions.debugPrintStack({stackTrace: details.stack, label: details.exception[$toString](), maxFrames: 100});
        }
      } else {
        print.debugPrint("Another exception was thrown: " + dart.str(details.summary));
      }
      assertions.FlutterError._errorCount = assertions.FlutterError._errorCount + 1;
    }
    static addDefaultStackFilter(filter) {
      assertions.FlutterError._stackFilters[$add](filter);
    }
    static defaultStackFilter(frames) {
      let t12, t13;
      let removedPackagesAndClasses = new (T$.IdentityMapOfString$int()).from(["dart:async-patch", 0, "dart:async", 0, "package:stack_trace", 0, "class _AssertionError", 0, "class _FakeAsync", 0, "class _FrameCallbackEntry", 0, "class _Timer", 0, "class _RawReceivePortImpl", 0]);
      let skipped = 0;
      let parsedFrames = stack_frame.StackFrame.fromStackString(frames[$join]("\n"));
      for (let index = 0; index < parsedFrames[$length]; index = index + 1) {
        let frame = parsedFrames[$_get](index);
        let className = "class " + frame.className;
        let $package = frame.packageScheme + ":" + frame.package;
        if (removedPackagesAndClasses[$containsKey](className)) {
          skipped = skipped + 1;
          removedPackagesAndClasses[$update](className, dart.fn(value => value + 1, T$.intToint()));
          parsedFrames[$removeAt](index);
          index = index - 1;
        } else if (removedPackagesAndClasses[$containsKey]($package)) {
          skipped = skipped + 1;
          removedPackagesAndClasses[$update]($package, dart.fn(value => value + 1, T$.intToint()));
          parsedFrames[$removeAt](index);
          index = index - 1;
        }
      }
      let reasons = T$.ListOfStringN().filled(parsedFrames[$length], null);
      for (let filter of assertions.FlutterError._stackFilters) {
        filter.filter(parsedFrames, reasons);
      }
      let result = T$.JSArrayOfString().of([]);
      for (let index = 0; index < parsedFrames[$length]; index = index + 1) {
        let start = index;
        while (index < reasons[$length] - 1 && reasons[$_get](index) != null && reasons[$_get](index + 1) == reasons[$_get](index)) {
          index = index + 1;
        }
        let suffix = "";
        if (reasons[$_get](index) != null) {
          if (index !== start) {
            suffix = " (" + dart.str(index - start + 2) + " frames)";
          } else {
            suffix = " (1 frame)";
          }
        }
        let resultLine = dart.str((t12 = reasons[$_get](index), t12 == null ? parsedFrames[$_get](index).source : t12)) + suffix;
        result[$add](resultLine);
      }
      let where = (t13 = (() => {
        let t12 = T$.JSArrayOfString().of([]);
        for (let entry of removedPackagesAndClasses[$entries])
          if (entry.value > 0) t12.push(entry.key);
        return t12;
      })(), (() => {
        t13[$sort]();
        return t13;
      })());
      if (skipped === 1) {
        result[$add]("(elided one frame from " + where[$single] + ")");
      } else if (skipped > 1) {
        if (where[$length] > 1) {
          where[$_set](where[$length] - 1, "and " + where[$last]);
        }
        if (where[$length] > 2) {
          result[$add]("(elided " + dart.str(skipped) + " frames from " + where[$join](", ") + ")");
        } else {
          result[$add]("(elided " + dart.str(skipped) + " frames from " + where[$join](" ") + ")");
        }
      }
      return result;
    }
    debugFillProperties(properties) {
      this.diagnostics[$forEach](dart.bind(properties, 'add'));
    }
    toStringShort() {
      return "FlutterError";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[5] || CT.C5;
      ;
      let renderer = new diagnostics$.TextTreeRenderer.new({wrapWidth: 4000000000});
      return this.diagnostics[$map](core.String, dart.fn(node => renderer.render(node)[$trimRight](), T$.DiagnosticsNodeToString()))[$join]("\n");
    }
    static reportError(details) {
      let t13;
      if (!(details !== null)) dart.assertFailed(null, I[3], 1182, 12, "details != null");
      if (!(details.exception !== null)) dart.assertFailed(null, I[3], 1183, 12, "details.exception != null");
      t13 = assertions.FlutterError.onError;
      t13 == null ? null : t13(details);
    }
  };
  (assertions.FlutterError.fromParts = function(diagnostics) {
    this[diagnostics$0] = diagnostics;
    if (!diagnostics[$isNotEmpty]) dart.assertFailed(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Empty FlutterError")])), I[3], 844, 53, "diagnostics.isNotEmpty");
    assertions.FlutterError.__proto__.new.call(this);
    if (!(this.diagnostics[$first].level === diagnostics$.DiagnosticLevel.summary)) dart.assertFailed(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("FlutterError is missing a summary."), new assertions.ErrorDescription.new("All FlutterError objects should start with a short (one line) " + "summary description of the problem that was detected."), new (T$.DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: diagnostics$.DiagnosticsTreeStyle.whitespace}), new assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=2_bug.md")])), I[3], 846, 7, "diagnostics.first.level == DiagnosticLevel.summary");
    if (!dart.fn(() => {
      let summaries = this.diagnostics[$where](dart.fn(node => node.level === diagnostics$.DiagnosticLevel.summary, T$.DiagnosticsNodeTobool()));
      if (summaries[$length] > 1) {
        let message = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("FlutterError contained multiple error summaries."), new assertions.ErrorDescription.new("All FlutterError objects should have only a single short " + "(one line) summary description of the problem that was " + "detected."), new (T$.DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: diagnostics$.DiagnosticsTreeStyle.whitespace}), new assertions.ErrorDescription.new("\nThe malformed error has " + dart.str(summaries[$length]) + " summaries.")]);
        let i = 1;
        for (let summary of summaries) {
          message[$add](new (T$.DiagnosticsPropertyOfDiagnosticsNode()).new("Summary " + dart.str(i), summary, {expandableValue: true}));
          i = i + 1;
        }
        message[$add](new assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
        dart.throw(new assertions.FlutterError.fromParts(message));
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 862, 12, "() {\n      final Iterable<DiagnosticsNode> summaries = diagnostics.where((DiagnosticsNode node) => node.level == DiagnosticLevel.summary);\n      if (summaries.length > 1) {\n        final List<DiagnosticsNode> message = <DiagnosticsNode>[\n          ErrorSummary('FlutterError contained multiple error summaries.'),\n          ErrorDescription(\n            'All FlutterError objects should have only a single short '\n            '(one line) summary description of the problem that was '\n            'detected.',\n          ),\n          DiagnosticsProperty<FlutterError>('Malformed', this, expandableValue: true, showSeparator: false, style: DiagnosticsTreeStyle.whitespace),\n          ErrorDescription('\\nThe malformed error has ${summaries.length} summaries.'),\n        ];\n        int i = 1;\n        for (final DiagnosticsNode summary in summaries) {\n          message.add(DiagnosticsProperty<DiagnosticsNode>('Summary $i', summary, expandableValue : true));\n          i += 1;\n        }\n        message.add(ErrorDescription(\n          '\\nThis error should still help you solve your problem, '\n          'however please also report this malformed error in the '\n          'framework by filing a bug on GitHub:\\n'\n          '  https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n        ));\n        throw FlutterError.fromParts(message);\n      }\n      return true;\n    }()");
  }).prototype = assertions.FlutterError.prototype;
  dart.addTypeTests(assertions.FlutterError);
  dart.addTypeCaches(assertions.FlutterError);
  assertions.FlutterError[dart.implements] = () => [core.AssertionError];
  dart.setStaticMethodSignature(assertions.FlutterError, () => ['new', '_defaultStackTraceDemangler', 'resetErrorCount', 'dumpErrorToConsole', 'addDefaultStackFilter', 'defaultStackFilter', 'reportError']);
  dart.setGetterSignature(assertions.FlutterError, () => ({
    __proto__: dart.getGetters(assertions.FlutterError.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(assertions.FlutterError, I[4]);
  dart.setFieldSignature(assertions.FlutterError, () => ({
    __proto__: dart.getFields(assertions.FlutterError.__proto__),
    diagnostics: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode))
  }));
  dart.setStaticFieldSignature(assertions.FlutterError, () => ['onError', 'demangleStackTrace', 'presentError', '_errorCount', 'wrapWidth', '_stackFilters']);
  dart.defineExtensionMethods(assertions.FlutterError, ['toString']);
  dart.defineLazy(assertions.FlutterError, {
    /*assertions.FlutterError.onError*/get onError() {
      return assertions.FlutterError.presentError;
    },
    set onError(_) {},
    /*assertions.FlutterError.demangleStackTrace*/get demangleStackTrace() {
      return C[33] || CT.C33;
    },
    set demangleStackTrace(_) {},
    /*assertions.FlutterError.presentError*/get presentError() {
      return C[34] || CT.C34;
    },
    set presentError(_) {},
    /*assertions.FlutterError._errorCount*/get _errorCount() {
      return 0;
    },
    set _errorCount(_) {},
    /*assertions.FlutterError.wrapWidth*/get wrapWidth() {
      return 100;
    },
    /*assertions.FlutterError._stackFilters*/get _stackFilters() {
      return T$.JSArrayOfStackFilter().of([]);
    }
  }, false);
  assertions.DiagnosticsStackTrace = class DiagnosticsStackTrace extends diagnostics$.DiagnosticsBlock {
    static ['_#new#tearOff'](name, stack, opts) {
      let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : null;
      return new assertions.DiagnosticsStackTrace.new(name, stack, {stackFilter: stackFilter, showSeparator: showSeparator});
    }
    static ['_#singleFrame#tearOff'](name, opts) {
      let frame = opts && 'frame' in opts ? opts.frame : null;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : null;
      return new assertions.DiagnosticsStackTrace.singleFrame(name, {frame: frame, showSeparator: showSeparator});
    }
    static _applyStackFilter(stack, stackFilter) {
      let t13;
      if (stack == null) {
        return T$.JSArrayOfDiagnosticsNode().of([]);
      }
      let filter = (t13 = stackFilter, t13 == null ? C[35] || CT.C35 : t13);
      let frames = filter(dart.str(assertions.FlutterError.demangleStackTrace(stack))[$trimRight]()[$split]("\n"));
      return frames[$map](diagnostics$.DiagnosticsNode, C[36] || CT.C36)[$toList]();
    }
    static _createStackFrame(frame) {
      return diagnostics$.DiagnosticsNode.message(frame, {allowWrap: false});
    }
    get allowTruncate() {
      return false;
    }
  };
  (assertions.DiagnosticsStackTrace.new = function(name, stack, opts) {
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, value: stack, properties: assertions.DiagnosticsStackTrace._applyStackFilter(stack, stackFilter), style: diagnostics$.DiagnosticsTreeStyle.flat, allowTruncate: true, showSeparator: showSeparator});
    ;
  }).prototype = assertions.DiagnosticsStackTrace.prototype;
  (assertions.DiagnosticsStackTrace.singleFrame = function(name, opts) {
    let frame = opts && 'frame' in opts ? opts.frame : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, properties: T$.JSArrayOfDiagnosticsNode().of([assertions.DiagnosticsStackTrace._createStackFrame(frame)]), style: diagnostics$.DiagnosticsTreeStyle.whitespace, showSeparator: showSeparator});
    ;
  }).prototype = assertions.DiagnosticsStackTrace.prototype;
  dart.addTypeTests(assertions.DiagnosticsStackTrace);
  dart.addTypeCaches(assertions.DiagnosticsStackTrace);
  dart.setStaticMethodSignature(assertions.DiagnosticsStackTrace, () => ['_applyStackFilter', '_createStackFrame']);
  dart.setGetterSignature(assertions.DiagnosticsStackTrace, () => ({
    __proto__: dart.getGetters(assertions.DiagnosticsStackTrace.__proto__),
    allowTruncate: core.bool
  }));
  dart.setLibraryUri(assertions.DiagnosticsStackTrace, I[4]);
  assertions._FlutterErrorDetailsNode = class _FlutterErrorDetailsNode extends diagnostics$.DiagnosticableNode$(assertions.FlutterErrorDetails) {
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new assertions._FlutterErrorDetailsNode.new({name: name, value: value, style: style});
    }
    get builder() {
      let builder = super.builder;
      if (builder == null) {
        return null;
      }
      let properties = builder.properties;
      for (let transformer of assertions.FlutterErrorDetails.propertiesTransformers) {
        properties = transformer(properties);
      }
      return new diagnostics$.DiagnosticPropertiesBuilder.fromProperties(properties[$toList]());
    }
  };
  (assertions._FlutterErrorDetailsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    assertions._FlutterErrorDetailsNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = assertions._FlutterErrorDetailsNode.prototype;
  dart.addTypeTests(assertions._FlutterErrorDetailsNode);
  dart.addTypeCaches(assertions._FlutterErrorDetailsNode);
  dart.setLibraryUri(assertions._FlutterErrorDetailsNode, I[4]);
  assertions.debugPrintStack = function debugPrintStack(opts) {
    let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let maxFrames = opts && 'maxFrames' in opts ? opts.maxFrames : null;
    if (label != null) {
      print.debugPrint(label);
    }
    if (stackTrace == null) {
      stackTrace = core.StackTrace.current;
    } else {
      stackTrace = assertions.FlutterError.demangleStackTrace(stackTrace);
    }
    let lines = dart.toString(stackTrace)[$trimRight]()[$split]("\n");
    if (true && lines[$isNotEmpty]) {
      lines = lines[$skipWhile](dart.fn(line => line[$contains]("StackTrace.current") || line[$contains]("dart-sdk/lib/_internal") || line[$contains]("dart:sdk_internal"), T$.StringTobool()));
    }
    if (maxFrames != null) {
      lines = lines[$take](maxFrames);
    }
    print.debugPrint(assertions.FlutterError.defaultStackFilter(lines)[$join]("\n"));
  };
  dart.trackLibraries("packages/flutter/src/foundation/debug.dart", {
    "package:flutter/src/foundation/debug.dart": debug,
    "package:flutter/src/foundation/diagnostics.dart": diagnostics$,
    "package:flutter/src/foundation/assertions.dart": assertions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart","diagnostics.dart","assertions.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/debug.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__debug: debug,
    src__foundation__diagnostics: diagnostics$,
    src__foundation__assertions: assertions
  };
}));

//# sourceMappingURL=debug.dart.lib.js.map