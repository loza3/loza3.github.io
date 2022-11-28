define(['dart_sdk', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__foundation__stack_frame_dart(dart_sdk, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var stack_frame = Object.create(dart.library);
  var $trim = dartx.trim;
  var $split = dartx.split;
  var $isNotEmpty = dartx.isNotEmpty;
  var $where = dartx.where;
  var $map = dartx.map;
  var $whereType = dartx.whereType;
  var $toList = dartx.toList;
  var $startsWith = dartx.startsWith;
  var $_get = dartx._get;
  var $replaceFirst = dartx.replaceFirst;
  var $length = dartx.length;
  var $first = dartx.first;
  var $skip = dartx.skip;
  var $join = dartx.join;
  var $single = dartx.single;
  var $replaceAll = dartx.replaceAll;
  var $contains = dartx.contains;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringTobool: () => (T.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))(),
    StackFrameN: () => (T.StackFrameN = dart.constFn(dart.nullable(stack_frame.StackFrame)))(),
    StringToStackFrameN: () => (T.StringToStackFrameN = dart.constFn(dart.fnType(T.StackFrameN(), [core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(stack_frame.StackFrame.fromStackTraceLine, T.StringToStackFrameN());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: stack_frame.StackFrame.prototype,
        [isConstructor$]: false,
        [method$]: "asynchronous suspension",
        [className$]: "",
        [column$]: -1,
        [line$]: -1,
        [packagePath$]: "",
        [$package$]: "",
        [packageScheme$]: "",
        [number$]: -1,
        [source$]: "<asynchronous suspension>"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: stack_frame.StackFrame.prototype,
        [isConstructor$]: false,
        [method$]: "...",
        [className$]: "",
        [column$]: -1,
        [line$]: -1,
        [packagePath$]: "",
        [$package$]: "",
        [packageScheme$]: "",
        [number$]: -1,
        [source$]: "..."
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/foundation/stack_frame.dart",
    "package:flutter/src/foundation/stack_frame.dart"
  ];
  var source$ = dart.privateName(stack_frame, "StackFrame.source");
  var number$ = dart.privateName(stack_frame, "StackFrame.number");
  var packageScheme$ = dart.privateName(stack_frame, "StackFrame.packageScheme");
  var $package$ = dart.privateName(stack_frame, "StackFrame.package");
  var packagePath$ = dart.privateName(stack_frame, "StackFrame.packagePath");
  var line$ = dart.privateName(stack_frame, "StackFrame.line");
  var column$ = dart.privateName(stack_frame, "StackFrame.column");
  var className$ = dart.privateName(stack_frame, "StackFrame.className");
  var method$ = dart.privateName(stack_frame, "StackFrame.method");
  var isConstructor$ = dart.privateName(stack_frame, "StackFrame.isConstructor");
  stack_frame.StackFrame = class StackFrame extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get number() {
      return this[number$];
    }
    set number(value) {
      super.number = value;
    }
    get packageScheme() {
      return this[packageScheme$];
    }
    set packageScheme(value) {
      super.packageScheme = value;
    }
    get package() {
      return this[$package$];
    }
    set package(value) {
      super.package = value;
    }
    get packagePath() {
      return this[packagePath$];
    }
    set packagePath(value) {
      super.packagePath = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
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
    get isConstructor() {
      return this[isConstructor$];
    }
    set isConstructor(value) {
      super.isConstructor = value;
    }
    static ['_#new#tearOff'](opts) {
      let number = opts && 'number' in opts ? opts.number : null;
      let column = opts && 'column' in opts ? opts.column : null;
      let line = opts && 'line' in opts ? opts.line : null;
      let packageScheme = opts && 'packageScheme' in opts ? opts.packageScheme : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      let packagePath = opts && 'packagePath' in opts ? opts.packagePath : null;
      let className = opts && 'className' in opts ? opts.className : "";
      let method = opts && 'method' in opts ? opts.method : null;
      let isConstructor = opts && 'isConstructor' in opts ? opts.isConstructor : false;
      let source = opts && 'source' in opts ? opts.source : null;
      return new stack_frame.StackFrame.new({number: number, column: column, line: line, packageScheme: packageScheme, package: $package, packagePath: packagePath, className: className, method: method, isConstructor: isConstructor, source: source});
    }
    static fromStackTrace(stack) {
      if (!(stack !== null)) dart.assertFailed(null, I[0], 77, 12, "stack != null");
      return stack_frame.StackFrame.fromStackString(stack.toString());
    }
    static fromStackString(stack) {
      if (!(stack !== null)) dart.assertFailed(null, I[0], 83, 12, "stack != null");
      return stack[$trim]()[$split]("\n")[$where](dart.fn(line => line[$isNotEmpty], T.StringTobool()))[$map](T.StackFrameN(), C[0] || CT.C0)[$whereType](stack_frame.StackFrame)[$toList]();
    }
    static _parseWebFrame(line) {
      {
        return stack_frame.StackFrame._parseWebDebugFrame(line);
      }
    }
    static _parseWebDebugFrame(line) {
      let hasPackage = line[$startsWith]("package");
      let parser = hasPackage ? core.RegExp.new("^(package.+) (\\d+):(\\d+)\\s+(.+)$") : core.RegExp.new("^(.+) (\\d+):(\\d+)\\s+(.+)$");
      let match = parser.firstMatch(line);
      if (!(match != null)) dart.assertFailed("Expected " + line + " to match " + dart.str(parser) + ".", I[0], 112, 12, "match != null");
      match = dart.nullCheck(match);
      let $package = "<unknown>";
      let packageScheme = "<unknown>";
      let packagePath = "<unknown>";
      if (hasPackage) {
        packageScheme = "package";
        let packageUri = core.Uri.parse(dart.nullCheck(match.group(1)));
        $package = packageUri.pathSegments[$_get](0);
        packagePath = packageUri.path[$replaceFirst](packageUri.pathSegments[$_get](0) + "/", "");
      }
      return new stack_frame.StackFrame.new({number: -1, packageScheme: packageScheme, package: $package, packagePath: packagePath, line: core.int.parse(dart.nullCheck(match.group(2))), column: core.int.parse(dart.nullCheck(match.group(3))), className: "<unknown>", method: dart.nullCheck(match.group(4)), source: line});
    }
    static _parseWebNonDebugFrame(line) {
      let match = stack_frame.StackFrame._webNonDebugFramePattern.firstMatch(line);
      if (match == null) {
        return null;
      }
      let classAndMethod = dart.nullCheck(match.group(1))[$split](".");
      let className = classAndMethod[$length] > 1 ? classAndMethod[$first] : "<unknown>";
      let method = classAndMethod[$length] > 1 ? classAndMethod[$skip](1)[$join](".") : classAndMethod[$single];
      return new stack_frame.StackFrame.new({number: -1, packageScheme: "<unknown>", package: "<unknown>", packagePath: "<unknown>", line: -1, column: -1, className: className, method: method, source: line});
    }
    static fromStackTraceLine(line) {
      if (!(line !== null)) dart.assertFailed(null, I[0], 184, 12, "line != null");
      if (line === "<asynchronous suspension>") {
        return stack_frame.StackFrame.asynchronousSuspension;
      } else if (line === "...") {
        return stack_frame.StackFrame.stackOverFlowElision;
      }
      if (!(line !== "===== asynchronous gap ===========================")) dart.assertFailed("Got a stack frame from package:stack_trace, where a vm or web frame was expected. " + "This can happen if FlutterError.demangleStackTrace was not set in an environment " + "that propagates non-standard stack traces to the framework, such as during tests.", I[0], 192, 7, "line != '===== asynchronous gap ==========================='");
      if (!line[$startsWith]("#")) {
        return stack_frame.StackFrame._parseWebFrame(line);
      }
      let parser = core.RegExp.new("^#(\\d+) +(.+) \\((.+?):?(\\d+){0,1}:?(\\d+){0,1}\\)$");
      let match = parser.firstMatch(line);
      if (!(match != null)) dart.assertFailed("Expected " + line + " to match " + dart.str(parser) + ".", I[0], 205, 12, "match != null");
      match = dart.nullCheck(match);
      let isConstructor = false;
      let className = "";
      let method = dart.nullCheck(match.group(2))[$replaceAll](".<anonymous closure>", "");
      if (method[$startsWith]("new")) {
        let methodParts = method[$split](" ");
        className = methodParts[$length] > 1 ? method[$split](" ")[$_get](1) : "<unknown>";
        method = "";
        if (className[$contains](".")) {
          let parts = className[$split](".");
          className = parts[$_get](0);
          method = parts[$_get](1);
        }
        isConstructor = true;
      } else if (method[$contains](".")) {
        let parts = method[$split](".");
        className = parts[$_get](0);
        method = parts[$_get](1);
      }
      let packageUri = core.Uri.parse(dart.nullCheck(match.group(3)));
      let $package = "<unknown>";
      let packagePath = packageUri.path;
      if (packageUri.scheme === "dart" || packageUri.scheme === "package") {
        $package = packageUri.pathSegments[$_get](0);
        packagePath = packageUri.path[$replaceFirst](packageUri.pathSegments[$_get](0) + "/", "");
      }
      return new stack_frame.StackFrame.new({number: core.int.parse(dart.nullCheck(match.group(1))), className: className, method: method, packageScheme: packageUri.scheme, package: $package, packagePath: packagePath, line: match.group(4) == null ? -1 : core.int.parse(dart.nullCheck(match.group(4))), column: match.group(5) == null ? -1 : core.int.parse(dart.nullCheck(match.group(5))), isConstructor: isConstructor, source: line});
    }
    get hashCode() {
      return core.Object.hash(this.number, this.package, this.line, this.column, this.className, this.method, this.source);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return stack_frame.StackFrame.is(other) && other.number === this.number && other.package === this.package && other.line === this.line && other.column === this.column && other.className === this.className && other.method === this.method && other.source === this.source;
    }
    toString() {
      return object.objectRuntimeType(this, "StackFrame") + "(#" + dart.str(this.number) + ", " + this.packageScheme + ":" + this.package + "/" + this.packagePath + ":" + dart.str(this.line) + ":" + dart.str(this.column) + ", className: " + this.className + ", method: " + this.method + ")";
    }
  };
  (stack_frame.StackFrame.new = function(opts) {
    let number = opts && 'number' in opts ? opts.number : null;
    let column = opts && 'column' in opts ? opts.column : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let packageScheme = opts && 'packageScheme' in opts ? opts.packageScheme : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    let packagePath = opts && 'packagePath' in opts ? opts.packagePath : null;
    let className = opts && 'className' in opts ? opts.className : "";
    let method = opts && 'method' in opts ? opts.method : null;
    let isConstructor = opts && 'isConstructor' in opts ? opts.isConstructor : false;
    let source = opts && 'source' in opts ? opts.source : null;
    this[number$] = number;
    this[column$] = column;
    this[line$] = line;
    this[packageScheme$] = packageScheme;
    this[$package$] = $package;
    this[packagePath$] = packagePath;
    this[className$] = className;
    this[method$] = method;
    this[isConstructor$] = isConstructor;
    this[source$] = source;
    if (!(number !== null)) dart.assertFailed(null, I[0], 38, 16, "number != null");
    if (!(column !== null)) dart.assertFailed(null, I[0], 39, 16, "column != null");
    if (!(line !== null)) dart.assertFailed(null, I[0], 40, 16, "line != null");
    if (!(method !== null)) dart.assertFailed(null, I[0], 41, 16, "method != null");
    if (!(packageScheme !== null)) dart.assertFailed(null, I[0], 42, 16, "packageScheme != null");
    if (!($package !== null)) dart.assertFailed(null, I[0], 43, 16, "package != null");
    if (!(packagePath !== null)) dart.assertFailed(null, I[0], 44, 16, "packagePath != null");
    if (!(className !== null)) dart.assertFailed(null, I[0], 45, 16, "className != null");
    if (!(isConstructor !== null)) dart.assertFailed(null, I[0], 46, 16, "isConstructor != null");
    if (!(source !== null)) dart.assertFailed(null, I[0], 47, 16, "source != null");
    ;
  }).prototype = stack_frame.StackFrame.prototype;
  dart.addTypeTests(stack_frame.StackFrame);
  dart.addTypeCaches(stack_frame.StackFrame);
  dart.setStaticMethodSignature(stack_frame.StackFrame, () => ['fromStackTrace', 'fromStackString', '_parseWebFrame', '_parseWebDebugFrame', '_parseWebNonDebugFrame', 'fromStackTraceLine']);
  dart.setLibraryUri(stack_frame.StackFrame, I[1]);
  dart.setFieldSignature(stack_frame.StackFrame, () => ({
    __proto__: dart.getFields(stack_frame.StackFrame.__proto__),
    source: dart.finalFieldType(core.String),
    number: dart.finalFieldType(core.int),
    packageScheme: dart.finalFieldType(core.String),
    package: dart.finalFieldType(core.String),
    packagePath: dart.finalFieldType(core.String),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int),
    className: dart.finalFieldType(core.String),
    method: dart.finalFieldType(core.String),
    isConstructor: dart.finalFieldType(core.bool)
  }));
  dart.setStaticFieldSignature(stack_frame.StackFrame, () => ['asynchronousSuspension', 'stackOverFlowElision', '_webNonDebugFramePattern']);
  dart.defineExtensionMethods(stack_frame.StackFrame, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stack_frame.StackFrame, ['hashCode']);
  dart.defineLazy(stack_frame.StackFrame, {
    /*stack_frame.StackFrame.asynchronousSuspension*/get asynchronousSuspension() {
      return C[1] || CT.C1;
    },
    /*stack_frame.StackFrame.stackOverFlowElision*/get stackOverFlowElision() {
      return C[2] || CT.C2;
    },
    /*stack_frame.StackFrame._webNonDebugFramePattern*/get _webNonDebugFramePattern() {
      return core.RegExp.new("^\\s*at ([^\\s]+).*$");
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/stack_frame.dart", {
    "package:flutter/src/foundation/stack_frame.dart": stack_frame
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stack_frame.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/stack_frame.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__stack_frame: stack_frame
  };
}));

//# sourceMappingURL=stack_frame.dart.lib.js.map