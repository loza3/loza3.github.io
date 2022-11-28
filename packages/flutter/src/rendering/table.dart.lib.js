define(['dart_sdk', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/table_border.dart'], (function load__packages__flutter__src__rendering__table_dart(dart_sdk, packages__flutter__src__rendering__box$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__table_border$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const object$ = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const table_border = packages__flutter__src__rendering__table_border$46dart.src__rendering__table_border;
  var table = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $isFinite = dartx.isFinite;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $first = dartx.first;
  var $forEach = dartx.forEach;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $_equals = dartx._equals;
  var $isEmpty = dartx.isEmpty;
  var $clear = dartx.clear;
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $addAll = dartx.addAll;
  var $fold = dartx.fold;
  var $reversed = dartx.reversed;
  var $last = dartx.last;
  var $add = dartx.add;
  var $getRange = dartx.getRange;
  var $skip = dartx.skip;
  var $map = dartx.map;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    RenderBoxN: () => (T.RenderBoxN = dart.constFn(dart.nullable(box.RenderBox)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    IdentityMapOfint$TableColumnWidth: () => (T.IdentityMapOfint$TableColumnWidth = dart.constFn(_js_helper.IdentityMap$(core.int, table.TableColumnWidth)))(),
    JSArrayOfRenderBoxN: () => (T.JSArrayOfRenderBoxN = dart.constFn(_interceptors.JSArray$(T.RenderBoxN())))(),
    ListOfRenderBoxN: () => (T.ListOfRenderBoxN = dart.constFn(core.List$(T.RenderBoxN())))(),
    MapOfint$TableColumnWidth: () => (T.MapOfint$TableColumnWidth = dart.constFn(core.Map$(core.int, table.TableColumnWidth)))(),
    ListOfDecoration: () => (T.ListOfDecoration = dart.constFn(core.List$(decoration.Decoration)))(),
    BoxPainterN: () => (T.BoxPainterN = dart.constFn(dart.nullable(decoration.BoxPainter)))(),
    ListOfBoxPainterN: () => (T.ListOfBoxPainterN = dart.constFn(core.List$(T.BoxPainterN())))(),
    _HashSetOfRenderBox: () => (T._HashSetOfRenderBox = dart.constFn(collection._HashSet$(box.RenderBox)))(),
    SyncIterableOfRenderBox: () => (T.SyncIterableOfRenderBox = dart.constFn(_js_helper.SyncIterable$(box.RenderBox)))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    ListOfdoubleN: () => (T.ListOfdoubleN = dart.constFn(core.List$(T.doubleN())))(),
    doubleAnddoubleTodouble: () => (T.doubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    DiagnosticsPropertyOfTableBorder: () => (T.DiagnosticsPropertyOfTableBorder = dart.constFn(diagnostics.DiagnosticsProperty$(table_border.TableBorder)))(),
    DiagnosticsPropertyOfMapOfint$TableColumnWidth: () => (T.DiagnosticsPropertyOfMapOfint$TableColumnWidth = dart.constFn(diagnostics.DiagnosticsProperty$(T.MapOfint$TableColumnWidth())))(),
    DiagnosticsPropertyOfTableColumnWidth: () => (T.DiagnosticsPropertyOfTableColumnWidth = dart.constFn(diagnostics.DiagnosticsProperty$(table.TableColumnWidth)))(),
    IterablePropertyOfString: () => (T.IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))(),
    doubleNToString: () => (T.doubleNToString = dart.constFn(dart.fnType(core.String, [T.doubleN()])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    DiagnosticsPropertyOfObject: () => (T.DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_Enum__name]: "top",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_Enum__name]: "middle",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_Enum__name]: "bottom",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_Enum__name]: "baseline",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: table.TableCellVerticalAlignment.prototype,
        [_Enum__name]: "fill",
        [_Enum_index]: 4
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5], table.TableCellVerticalAlignment);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: table.FlexColumnWidth.prototype,
        [value$1]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: image_provider.ImageConfiguration.prototype,
        [ImageConfiguration_platform]: null,
        [ImageConfiguration_size]: null,
        [ImageConfiguration_textDirection]: null,
        [ImageConfiguration_locale]: null,
        [ImageConfiguration_devicePixelRatio]: null,
        [ImageConfiguration_bundle]: null
      });
    },
    get C8() {
      return C[8] = dart.constList([], T.RenderBoxN());
    },
    get C9() {
      return C[9] = dart.constList([], decoration.Decoration);
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C12() {
      return C[12] = dart.constList([], core.double);
    },
    get C13() {
      return C[13] = dart.fn(debug.debugFormatDouble, T.doubleNToString());
    }
  }, false);
  var C = Array(14).fill(void 0);
  var I = [
    "package:flutter/src/rendering/table.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/table.dart"
  ];
  var verticalAlignment = dart.privateName(table, "TableCellParentData.verticalAlignment");
  var x = dart.privateName(table, "TableCellParentData.x");
  var y = dart.privateName(table, "TableCellParentData.y");
  table.TableCellParentData = class TableCellParentData extends box.BoxParentData {
    get verticalAlignment() {
      return this[verticalAlignment];
    }
    set verticalAlignment(value) {
      this[verticalAlignment] = value;
    }
    get x() {
      return this[x];
    }
    set x(value) {
      this[x] = value;
    }
    get y() {
      return this[y];
    }
    set y(value) {
      this[y] = value;
    }
    toString() {
      return super.toString() + "; " + (this.verticalAlignment == null ? "default vertical alignment" : dart.str(this.verticalAlignment));
    }
    static ['_#new#tearOff']() {
      return new table.TableCellParentData.new();
    }
  };
  (table.TableCellParentData.new = function() {
    this[verticalAlignment] = null;
    this[x] = null;
    this[y] = null;
    table.TableCellParentData.__proto__.new.call(this);
    ;
  }).prototype = table.TableCellParentData.prototype;
  dart.addTypeTests(table.TableCellParentData);
  dart.addTypeCaches(table.TableCellParentData);
  dart.setLibraryUri(table.TableCellParentData, I[0]);
  dart.setFieldSignature(table.TableCellParentData, () => ({
    __proto__: dart.getFields(table.TableCellParentData.__proto__),
    verticalAlignment: dart.fieldType(dart.nullable(table.TableCellVerticalAlignment)),
    x: dart.fieldType(dart.nullable(core.int)),
    y: dart.fieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(table.TableCellParentData, ['toString']);
  table.TableColumnWidth = class TableColumnWidth extends core.Object {
    flex(cells) {
      return null;
    }
    toString() {
      return object.objectRuntimeType(this, "TableColumnWidth");
    }
  };
  (table.TableColumnWidth.new = function() {
    ;
  }).prototype = table.TableColumnWidth.prototype;
  dart.addTypeTests(table.TableColumnWidth);
  dart.addTypeCaches(table.TableColumnWidth);
  dart.setMethodSignature(table.TableColumnWidth, () => ({
    __proto__: dart.getMethods(table.TableColumnWidth.__proto__),
    flex: dart.fnType(dart.nullable(core.double), [core.Iterable$(box.RenderBox)])
  }));
  dart.setLibraryUri(table.TableColumnWidth, I[0]);
  dart.defineExtensionMethods(table.TableColumnWidth, ['toString']);
  var _flex = dart.privateName(table, "IntrinsicColumnWidth._flex");
  var _flex$ = dart.privateName(table, "_flex");
  table.IntrinsicColumnWidth = class IntrinsicColumnWidth extends table.TableColumnWidth {
    get [_flex$]() {
      return this[_flex];
    }
    set [_flex$](value) {
      super[_flex$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let flex = opts && 'flex' in opts ? opts.flex : null;
      return new table.IntrinsicColumnWidth.new({flex: flex});
    }
    minIntrinsicWidth(cells, containerWidth) {
      let result = 0.0;
      for (let cell of cells) {
        result = math.max(core.double, result, cell.getMinIntrinsicWidth(1 / 0));
      }
      return result;
    }
    maxIntrinsicWidth(cells, containerWidth) {
      let result = 0.0;
      for (let cell of cells) {
        result = math.max(core.double, result, cell.getMaxIntrinsicWidth(1 / 0));
      }
      return result;
    }
    flex(cells) {
      return this[_flex$];
    }
    toString() {
      let t0;
      return object.objectRuntimeType(this, "IntrinsicColumnWidth") + "(flex: " + dart.str((t0 = this[_flex$], t0 == null ? null : t0[$toStringAsFixed](1))) + ")";
    }
  };
  (table.IntrinsicColumnWidth.new = function(opts) {
    let flex = opts && 'flex' in opts ? opts.flex : null;
    this[_flex] = flex;
    table.IntrinsicColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.IntrinsicColumnWidth.prototype;
  dart.addTypeTests(table.IntrinsicColumnWidth);
  dart.addTypeCaches(table.IntrinsicColumnWidth);
  dart.setMethodSignature(table.IntrinsicColumnWidth, () => ({
    __proto__: dart.getMethods(table.IntrinsicColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.IntrinsicColumnWidth, I[0]);
  dart.setFieldSignature(table.IntrinsicColumnWidth, () => ({
    __proto__: dart.getFields(table.IntrinsicColumnWidth.__proto__),
    [_flex$]: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(table.IntrinsicColumnWidth, ['toString']);
  var value$ = dart.privateName(table, "FixedColumnWidth.value");
  table.FixedColumnWidth = class FixedColumnWidth extends table.TableColumnWidth {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    static ['_#new#tearOff'](value) {
      return new table.FixedColumnWidth.new(value);
    }
    minIntrinsicWidth(cells, containerWidth) {
      return this.value;
    }
    maxIntrinsicWidth(cells, containerWidth) {
      return this.value;
    }
    toString() {
      return object.objectRuntimeType(this, "FixedColumnWidth") + "(" + debug.debugFormatDouble(this.value) + ")";
    }
  };
  (table.FixedColumnWidth.new = function(value) {
    this[value$] = value;
    if (!(value !== null)) dart.assertFailed(null, I[1], 137, 47, "value != null");
    table.FixedColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.FixedColumnWidth.prototype;
  dart.addTypeTests(table.FixedColumnWidth);
  dart.addTypeCaches(table.FixedColumnWidth);
  dart.setMethodSignature(table.FixedColumnWidth, () => ({
    __proto__: dart.getMethods(table.FixedColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.FixedColumnWidth, I[0]);
  dart.setFieldSignature(table.FixedColumnWidth, () => ({
    __proto__: dart.getFields(table.FixedColumnWidth.__proto__),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(table.FixedColumnWidth, ['toString']);
  var value$0 = dart.privateName(table, "FractionColumnWidth.value");
  table.FractionColumnWidth = class FractionColumnWidth extends table.TableColumnWidth {
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    static ['_#new#tearOff'](value) {
      return new table.FractionColumnWidth.new(value);
    }
    minIntrinsicWidth(cells, containerWidth) {
      if (!containerWidth[$isFinite]) {
        return 0.0;
      }
      return this.value * containerWidth;
    }
    maxIntrinsicWidth(cells, containerWidth) {
      if (!containerWidth[$isFinite]) {
        return 0.0;
      }
      return this.value * containerWidth;
    }
    toString() {
      return object.objectRuntimeType(this, "FractionColumnWidth") + "(" + dart.str(this.value) + ")";
    }
  };
  (table.FractionColumnWidth.new = function(value) {
    this[value$0] = value;
    if (!(value !== null)) dart.assertFailed(null, I[1], 164, 50, "value != null");
    table.FractionColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.FractionColumnWidth.prototype;
  dart.addTypeTests(table.FractionColumnWidth);
  dart.addTypeCaches(table.FractionColumnWidth);
  dart.setMethodSignature(table.FractionColumnWidth, () => ({
    __proto__: dart.getMethods(table.FractionColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.FractionColumnWidth, I[0]);
  dart.setFieldSignature(table.FractionColumnWidth, () => ({
    __proto__: dart.getFields(table.FractionColumnWidth.__proto__),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(table.FractionColumnWidth, ['toString']);
  var value$1 = dart.privateName(table, "FlexColumnWidth.value");
  table.FlexColumnWidth = class FlexColumnWidth extends table.TableColumnWidth {
    get value() {
      return this[value$1];
    }
    set value(value) {
      super.value = value;
    }
    static ['_#new#tearOff'](value = 1) {
      return new table.FlexColumnWidth.new(value);
    }
    minIntrinsicWidth(cells, containerWidth) {
      return 0.0;
    }
    maxIntrinsicWidth(cells, containerWidth) {
      return 0.0;
    }
    flex(cells) {
      return this.value;
    }
    toString() {
      return object.objectRuntimeType(this, "FlexColumnWidth") + "(" + debug.debugFormatDouble(this.value) + ")";
    }
  };
  (table.FlexColumnWidth.new = function(value = 1) {
    this[value$1] = value;
    if (!(value !== null)) dart.assertFailed(null, I[1], 202, 54, "value != null");
    table.FlexColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.FlexColumnWidth.prototype;
  dart.addTypeTests(table.FlexColumnWidth);
  dart.addTypeCaches(table.FlexColumnWidth);
  dart.setMethodSignature(table.FlexColumnWidth, () => ({
    __proto__: dart.getMethods(table.FlexColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    flex: dart.fnType(core.double, [core.Iterable$(box.RenderBox)])
  }));
  dart.setLibraryUri(table.FlexColumnWidth, I[0]);
  dart.setFieldSignature(table.FlexColumnWidth, () => ({
    __proto__: dart.getFields(table.FlexColumnWidth.__proto__),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(table.FlexColumnWidth, ['toString']);
  var a$ = dart.privateName(table, "MaxColumnWidth.a");
  var b$ = dart.privateName(table, "MaxColumnWidth.b");
  table.MaxColumnWidth = class MaxColumnWidth extends table.TableColumnWidth {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    static ['_#new#tearOff'](a, b) {
      return new table.MaxColumnWidth.new(a, b);
    }
    minIntrinsicWidth(cells, containerWidth) {
      return math.max(core.double, this.a.minIntrinsicWidth(cells, containerWidth), this.b.minIntrinsicWidth(cells, containerWidth));
    }
    maxIntrinsicWidth(cells, containerWidth) {
      return math.max(core.double, this.a.maxIntrinsicWidth(cells, containerWidth), this.b.maxIntrinsicWidth(cells, containerWidth));
    }
    flex(cells) {
      let aFlex = this.a.flex(cells);
      if (aFlex == null) {
        return this.b.flex(cells);
      }
      let bFlex = this.b.flex(cells);
      if (bFlex == null) {
        return null;
      }
      return math.max(core.double, aFlex, bFlex);
    }
    toString() {
      return object.objectRuntimeType(this, "MaxColumnWidth") + "(" + dart.str(this.a) + ", " + dart.str(this.b) + ")";
    }
  };
  (table.MaxColumnWidth.new = function(a, b) {
    this[a$] = a;
    this[b$] = b;
    table.MaxColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.MaxColumnWidth.prototype;
  dart.addTypeTests(table.MaxColumnWidth);
  dart.addTypeCaches(table.MaxColumnWidth);
  dart.setMethodSignature(table.MaxColumnWidth, () => ({
    __proto__: dart.getMethods(table.MaxColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.MaxColumnWidth, I[0]);
  dart.setFieldSignature(table.MaxColumnWidth, () => ({
    __proto__: dart.getFields(table.MaxColumnWidth.__proto__),
    a: dart.finalFieldType(table.TableColumnWidth),
    b: dart.finalFieldType(table.TableColumnWidth)
  }));
  dart.defineExtensionMethods(table.MaxColumnWidth, ['toString']);
  var a$0 = dart.privateName(table, "MinColumnWidth.a");
  var b$0 = dart.privateName(table, "MinColumnWidth.b");
  table.MinColumnWidth = class MinColumnWidth extends table.TableColumnWidth {
    get a() {
      return this[a$0];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$0];
    }
    set b(value) {
      super.b = value;
    }
    static ['_#new#tearOff'](a, b) {
      return new table.MinColumnWidth.new(a, b);
    }
    minIntrinsicWidth(cells, containerWidth) {
      return math.min(core.double, this.a.minIntrinsicWidth(cells, containerWidth), this.b.minIntrinsicWidth(cells, containerWidth));
    }
    maxIntrinsicWidth(cells, containerWidth) {
      return math.min(core.double, this.a.maxIntrinsicWidth(cells, containerWidth), this.b.maxIntrinsicWidth(cells, containerWidth));
    }
    flex(cells) {
      let aFlex = this.a.flex(cells);
      if (aFlex == null) {
        return this.b.flex(cells);
      }
      let bFlex = this.b.flex(cells);
      if (bFlex == null) {
        return null;
      }
      return math.min(core.double, aFlex, bFlex);
    }
    toString() {
      return object.objectRuntimeType(this, "MinColumnWidth") + "(" + dart.str(this.a) + ", " + dart.str(this.b) + ")";
    }
  };
  (table.MinColumnWidth.new = function(a, b) {
    this[a$0] = a;
    this[b$0] = b;
    table.MinColumnWidth.__proto__.new.call(this);
    ;
  }).prototype = table.MinColumnWidth.prototype;
  dart.addTypeTests(table.MinColumnWidth);
  dart.addTypeCaches(table.MinColumnWidth);
  dart.setMethodSignature(table.MinColumnWidth, () => ({
    __proto__: dart.getMethods(table.MinColumnWidth.__proto__),
    minIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double]),
    maxIntrinsicWidth: dart.fnType(core.double, [core.Iterable$(box.RenderBox), core.double])
  }));
  dart.setLibraryUri(table.MinColumnWidth, I[0]);
  dart.setFieldSignature(table.MinColumnWidth, () => ({
    __proto__: dart.getFields(table.MinColumnWidth.__proto__),
    a: dart.finalFieldType(table.TableColumnWidth),
    b: dart.finalFieldType(table.TableColumnWidth)
  }));
  dart.defineExtensionMethods(table.MinColumnWidth, ['toString']);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  table.TableCellVerticalAlignment = class TableCellVerticalAlignment extends core._Enum {
    toString() {
      return "TableCellVerticalAlignment." + this[_name];
    }
  };
  (table.TableCellVerticalAlignment.new = function(index, name) {
    table.TableCellVerticalAlignment.__proto__.new.call(this, index, name);
    ;
  }).prototype = table.TableCellVerticalAlignment.prototype;
  dart.addTypeTests(table.TableCellVerticalAlignment);
  dart.addTypeCaches(table.TableCellVerticalAlignment);
  dart.setLibraryUri(table.TableCellVerticalAlignment, I[0]);
  dart.setStaticFieldSignature(table.TableCellVerticalAlignment, () => ['values', 'top', 'middle', 'bottom', 'baseline', 'fill']);
  dart.defineExtensionMethods(table.TableCellVerticalAlignment, ['toString']);
  dart.defineLazy(table.TableCellVerticalAlignment, {
    /*table.TableCellVerticalAlignment.values*/get values() {
      return C[0] || CT.C0;
    },
    /*table.TableCellVerticalAlignment.top*/get top() {
      return C[1] || CT.C1;
    },
    /*table.TableCellVerticalAlignment.middle*/get middle() {
      return C[2] || CT.C2;
    },
    /*table.TableCellVerticalAlignment.bottom*/get bottom() {
      return C[3] || CT.C3;
    },
    /*table.TableCellVerticalAlignment.baseline*/get baseline() {
      return C[4] || CT.C4;
    },
    /*table.TableCellVerticalAlignment.fill*/get fill() {
      return C[5] || CT.C5;
    }
  }, false);
  var ImageConfiguration_platform = dart.privateName(image_provider, "ImageConfiguration.platform");
  var ImageConfiguration_size = dart.privateName(image_provider, "ImageConfiguration.size");
  var ImageConfiguration_textDirection = dart.privateName(image_provider, "ImageConfiguration.textDirection");
  var ImageConfiguration_locale = dart.privateName(image_provider, "ImageConfiguration.locale");
  var ImageConfiguration_devicePixelRatio = dart.privateName(image_provider, "ImageConfiguration.devicePixelRatio");
  var ImageConfiguration_bundle = dart.privateName(image_provider, "ImageConfiguration.bundle");
  var _children = dart.privateName(table, "_children");
  var _rowDecorations = dart.privateName(table, "_rowDecorations");
  var _rowDecorationPainters = dart.privateName(table, "_rowDecorationPainters");
  var _baselineDistance = dart.privateName(table, "_baselineDistance");
  var _rowTops = dart.privateName(table, "_rowTops");
  var _columnLefts = dart.privateName(table, "_columnLefts");
  var __RenderTable__tableWidth = dart.privateName(table, "_#RenderTable#_tableWidth");
  var _textDirection = dart.privateName(table, "_textDirection");
  var _columns = dart.privateName(table, "_columns");
  var _rows = dart.privateName(table, "_rows");
  var _columnWidths = dart.privateName(table, "_columnWidths");
  var _defaultColumnWidth = dart.privateName(table, "_defaultColumnWidth");
  var _border = dart.privateName(table, "_border");
  var _textBaseline = dart.privateName(table, "_textBaseline");
  var _defaultVerticalAlignment = dart.privateName(table, "_defaultVerticalAlignment");
  var _configuration = dart.privateName(table, "_configuration");
  var _computeColumnWidths = dart.privateName(table, "_computeColumnWidths");
  var _tableWidth = dart.privateName(table, "_tableWidth");
  table.RenderTable = class RenderTable extends box.RenderBox {
    static ['_#new#tearOff'](opts) {
      let columns = opts && 'columns' in opts ? opts.columns : null;
      let rows = opts && 'rows' in opts ? opts.rows : null;
      let columnWidths = opts && 'columnWidths' in opts ? opts.columnWidths : null;
      let defaultColumnWidth = opts && 'defaultColumnWidth' in opts ? opts.defaultColumnWidth : C[6] || CT.C6;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let border = opts && 'border' in opts ? opts.border : null;
      let rowDecorations = opts && 'rowDecorations' in opts ? opts.rowDecorations : null;
      let configuration = opts && 'configuration' in opts ? opts.configuration : C[7] || CT.C7;
      let defaultVerticalAlignment = opts && 'defaultVerticalAlignment' in opts ? opts.defaultVerticalAlignment : C[1] || CT.C1;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let children = opts && 'children' in opts ? opts.children : null;
      return new table.RenderTable.new({columns: columns, rows: rows, columnWidths: columnWidths, defaultColumnWidth: defaultColumnWidth, textDirection: textDirection, border: border, rowDecorations: rowDecorations, configuration: configuration, defaultVerticalAlignment: defaultVerticalAlignment, textBaseline: textBaseline, children: children});
    }
    get columns() {
      return this[_columns];
    }
    set columns(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 422, 12, "value != null");
      if (!(value >= 0)) dart.assertFailed(null, I[1], 423, 12, "value >= 0");
      if (value === this.columns) {
        return;
      }
      let oldColumns = this.columns;
      let oldChildren = this[_children];
      this[_columns] = value;
      this[_children] = T.ListOfRenderBoxN().filled(this.columns * this.rows, null);
      let columnsToCopy = math.min(core.int, this.columns, oldColumns);
      for (let y = 0; y < this.rows; y = y + 1) {
        for (let x = 0; x < columnsToCopy; x = x + 1) {
          this[_children][$_set](x + y * this.columns, oldChildren[$_get](x + y * oldColumns));
        }
      }
      if (oldColumns > this.columns) {
        for (let y = 0; y < this.rows; y = y + 1) {
          for (let x = this.columns; x < oldColumns; x = x + 1) {
            let xy = x + y * oldColumns;
            if (oldChildren[$_get](xy) != null) {
              this.dropChild(dart.nullCheck(oldChildren[$_get](xy)));
            }
          }
        }
      }
      this.markNeedsLayout();
    }
    get rows() {
      return this[_rows];
    }
    set rows(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 457, 12, "value != null");
      if (!(value >= 0)) dart.assertFailed(null, I[1], 458, 12, "value >= 0");
      if (value === this.rows) {
        return;
      }
      if (this[_rows] > value) {
        for (let xy = this.columns * value; xy < this[_children][$length]; xy = xy + 1) {
          if (this[_children][$_get](xy) != null) {
            this.dropChild(dart.nullCheck(this[_children][$_get](xy)));
          }
        }
      }
      this[_rows] = value;
      this[_children][$length] = this.columns * this.rows;
      this.markNeedsLayout();
    }
    get columnWidths() {
      return T.MapOfint$TableColumnWidth().unmodifiable(this[_columnWidths]);
    }
    set columnWidths(value) {
      let t2;
      if (this[_columnWidths][$_equals](value)) {
        return;
      }
      if (this[_columnWidths][$isEmpty] && value == null) {
        return;
      }
      this[_columnWidths] = (t2 = value, t2 == null ? new (T.IdentityMapOfint$TableColumnWidth()).new() : t2);
      this.markNeedsLayout();
    }
    setColumnWidth(column, value) {
      if (dart.equals(this[_columnWidths][$_get](column), value)) {
        return;
      }
      this[_columnWidths][$_set](column, value);
      this.markNeedsLayout();
    }
    get defaultColumnWidth() {
      return this[_defaultColumnWidth];
    }
    set defaultColumnWidth(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 516, 12, "value != null");
      if (this.defaultColumnWidth[$_equals](value)) {
        return;
      }
      this[_defaultColumnWidth] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 528, 12, "value != null");
      if (this[_textDirection] === value) {
        return;
      }
      this[_textDirection] = value;
      this.markNeedsLayout();
    }
    get border() {
      return this[_border];
    }
    set border(value) {
      if (dart.equals(this.border, value)) {
        return;
      }
      this[_border] = value;
      this.markNeedsPaint();
    }
    get rowDecorations() {
      let t2;
      return T.ListOfDecoration().unmodifiable((t2 = this[_rowDecorations], t2 == null ? C[9] || CT.C9 : t2));
    }
    set rowDecorations(value) {
      let t2;
      if (dart.equals(this[_rowDecorations], value)) {
        return;
      }
      this[_rowDecorations] = value;
      if (this[_rowDecorationPainters] != null) {
        for (let painter of dart.nullCheck(this[_rowDecorationPainters])) {
          t2 = painter;
          t2 == null ? null : t2.dispose();
        }
      }
      this[_rowDecorationPainters] = this[_rowDecorations] != null ? T.ListOfBoxPainterN().filled(dart.nullCheck(this[_rowDecorations])[$length], null) : null;
    }
    get configuration() {
      return this[_configuration];
    }
    set configuration(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 576, 12, "value != null");
      if (value._equals(this[_configuration])) {
        return;
      }
      this[_configuration] = value;
      this.markNeedsPaint();
    }
    get defaultVerticalAlignment() {
      return this[_defaultVerticalAlignment];
    }
    set defaultVerticalAlignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 588, 12, "value != null");
      if (this[_defaultVerticalAlignment] === value) {
        return;
      }
      this[_defaultVerticalAlignment] = value;
      this.markNeedsLayout();
    }
    get textBaseline() {
      return this[_textBaseline];
    }
    set textBaseline(value) {
      if (this[_textBaseline] == value) {
        return;
      }
      this[_textBaseline] = value;
      this.markNeedsLayout();
    }
    setupParentData(child) {
      object$.RenderObject.as(child);
      if (!table.TableCellParentData.is(child.parentData)) {
        child.parentData = new table.TableCellParentData.new();
      }
    }
    setFlatChildren(columns, cells) {
      if (cells[$_equals](this[_children]) && columns === this[_columns]) {
        return;
      }
      if (!(columns >= 0)) dart.assertFailed(null, I[1], 626, 12, "columns >= 0");
      if (columns === 0 || cells[$isEmpty]) {
        if (!(cells === null || cells[$isEmpty])) dart.assertFailed(null, I[1], 629, 14, "cells == null || cells.isEmpty");
        this[_columns] = columns;
        if (this[_children][$isEmpty]) {
          if (!(this[_rows] === 0)) dart.assertFailed(null, I[1], 632, 16, "_rows == 0");
          return;
        }
        for (let oldChild of this[_children]) {
          if (oldChild != null) {
            this.dropChild(oldChild);
          }
        }
        this[_rows] = 0;
        this[_children][$clear]();
        this.markNeedsLayout();
        return;
      }
      if (!(cells !== null)) dart.assertFailed(null, I[1], 645, 12, "cells != null");
      if (!(cells[$length][$modulo](columns) === 0)) dart.assertFailed(null, I[1], 646, 12, "cells.length % columns == 0");
      let lostChildren = new (T._HashSetOfRenderBox()).new();
      for (let y = 0; y < this[_rows]; y = y + 1) {
        for (let x = 0; x < this[_columns]; x = x + 1) {
          let xyOld = x + y * this[_columns];
          let xyNew = x + y * columns;
          if (this[_children][$_get](xyOld) != null && (x >= columns || xyNew >= cells[$length] || !dart.equals(this[_children][$_get](xyOld), cells[$_get](xyNew)))) {
            lostChildren.add(dart.nullCheck(this[_children][$_get](xyOld)));
          }
        }
      }
      let y = 0;
      while (y * columns < cells[$length]) {
        for (let x = 0; x < columns; x = x + 1) {
          let xyNew = x + y * columns;
          let xyOld = x + y * this[_columns];
          if (cells[$_get](xyNew) != null && (x >= this[_columns] || y >= this[_rows] || !dart.equals(this[_children][$_get](xyOld), cells[$_get](xyNew)))) {
            if (!lostChildren.remove(cells[$_get](xyNew))) {
              this.adoptChild(dart.nullCheck(cells[$_get](xyNew)));
            }
          }
        }
        y = y + 1;
      }
      lostChildren[$forEach](dart.bind(this, 'dropChild'));
      this[_columns] = columns;
      this[_rows] = (cells[$length] / columns)[$truncate]();
      this[_children] = T.ListOfRenderBoxN().of(cells);
      if (!(this[_children][$length] === this.rows * columns)) dart.assertFailed(null, I[1], 680, 12, "_children.length == rows * columns");
      this.markNeedsLayout();
    }
    setChildren(cells) {
      if (cells == null) {
        this.setFlatChildren(0, C[8] || CT.C8);
        return;
      }
      for (let oldChild of this[_children]) {
        if (oldChild != null) {
          this.dropChild(oldChild);
        }
      }
      this[_children][$clear]();
      this[_columns] = cells[$isNotEmpty] ? cells[$first][$length] : 0;
      this[_rows] = 0;
      cells[$forEach](dart.bind(this, 'addRow'));
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 700, 12, "_children.length == rows * columns");
    }
    addRow(cells) {
      if (!(cells[$length] === this.columns)) dart.assertFailed(null, I[1], 707, 12, "cells.length == columns");
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 708, 12, "_children.length == rows * columns");
      this[_rows] = this[_rows] + 1;
      this[_children][$addAll](cells);
      for (let cell of cells) {
        if (cell != null) {
          this.adoptChild(cell);
        }
      }
      this.markNeedsLayout();
    }
    setChild(x, y, value) {
      if (!(x !== null)) dart.assertFailed(null, I[1], 725, 12, "x != null");
      if (!(y !== null)) dart.assertFailed(null, I[1], 726, 12, "y != null");
      if (!(x >= 0 && x < this.columns && y >= 0 && y < this.rows)) dart.assertFailed(null, I[1], 727, 12, "x >= 0 && x < columns && y >= 0 && y < rows");
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 728, 12, "_children.length == rows * columns");
      let xy = x + y * this.columns;
      let oldChild = this[_children][$_get](xy);
      if (dart.equals(oldChild, value)) {
        return;
      }
      if (oldChild != null) {
        this.dropChild(oldChild);
      }
      this[_children][$_set](xy, value);
      if (value != null) {
        this.adoptChild(value);
      }
    }
    attach(owner) {
      let t2;
      object$.PipelineOwner.as(owner);
      super.attach(owner);
      for (let child of this[_children]) {
        t2 = child;
        t2 == null ? null : t2.attach(owner);
      }
    }
    detach() {
      let t2, t2$;
      super.detach();
      if (this[_rowDecorationPainters] != null) {
        for (let painter of dart.nullCheck(this[_rowDecorationPainters])) {
          t2 = painter;
          t2 == null ? null : t2.dispose();
        }
        this[_rowDecorationPainters] = T.ListOfBoxPainterN().filled(dart.nullCheck(this[_rowDecorations])[$length], null);
      }
      for (let child of this[_children]) {
        t2$ = child;
        t2$ == null ? null : t2$.detach();
      }
    }
    visitChildren(visitor) {
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 767, 12, "_children.length == rows * columns");
      for (let child of this[_children]) {
        if (child != null) {
          visitor(child);
        }
      }
    }
    computeMinIntrinsicWidth(height) {
      let t2;
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 777, 12, "_children.length == rows * columns");
      let totalMinWidth = 0.0;
      for (let x = 0; x < this.columns; x = x + 1) {
        let columnWidth = (t2 = this[_columnWidths][$_get](x), t2 == null ? this.defaultColumnWidth : t2);
        let columnCells = this.column(x);
        totalMinWidth = totalMinWidth + columnWidth.minIntrinsicWidth(columnCells, 1 / 0);
      }
      return totalMinWidth;
    }
    computeMaxIntrinsicWidth(height) {
      let t2;
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 789, 12, "_children.length == rows * columns");
      let totalMaxWidth = 0.0;
      for (let x = 0; x < this.columns; x = x + 1) {
        let columnWidth = (t2 = this[_columnWidths][$_get](x), t2 == null ? this.defaultColumnWidth : t2);
        let columnCells = this.column(x);
        totalMaxWidth = totalMaxWidth + columnWidth.maxIntrinsicWidth(columnCells, 1 / 0);
      }
      return totalMaxWidth;
    }
    computeMinIntrinsicHeight(width) {
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 803, 12, "_children.length == rows * columns");
      let widths = this[_computeColumnWidths](new box.BoxConstraints.tightForFinite({width: width}));
      let rowTop = 0.0;
      for (let y = 0; y < this.rows; y = y + 1) {
        let rowHeight = 0.0;
        for (let x = 0; x < this.columns; x = x + 1) {
          let xy = x + y * this.columns;
          let child = this[_children][$_get](xy);
          if (child != null) {
            rowHeight = math.max(core.double, rowHeight, child.getMaxIntrinsicHeight(widths[$_get](x)));
          }
        }
        rowTop = rowTop + rowHeight;
      }
      return rowTop;
    }
    computeMaxIntrinsicHeight(width) {
      return this.computeMinIntrinsicHeight(width);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 829, 12, "!debugNeedsLayout");
      return this[_baselineDistance];
    }
    column(x) {
      return new (T.SyncIterableOfRenderBox()).new((function* column() {
        for (let y = 0; y < this.rows; y = y + 1) {
          let xy = x + y * this.columns;
          let child = this[_children][$_get](xy);
          if (child != null) {
            yield child;
          }
        }
      }).bind(this));
    }
    row(y) {
      return new (T.SyncIterableOfRenderBox()).new((function* row() {
        let start = y * this.columns;
        let end = (y + 1) * this.columns;
        for (let xy = start; xy < end; xy = xy + 1) {
          let child = this[_children][$_get](xy);
          if (child != null) {
            yield child;
          }
        }
      }).bind(this));
    }
    [_computeColumnWidths](constraints) {
      let t2;
      if (!(constraints !== null)) dart.assertFailed(null, I[1], 867, 12, "constraints != null");
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 868, 12, "_children.length == rows * columns");
      let widths = T.ListOfdouble().filled(this.columns, 0.0);
      let minWidths = T.ListOfdouble().filled(this.columns, 0.0);
      let flexes = T.ListOfdoubleN().filled(this.columns, null);
      let tableWidth = 0.0;
      let unflexedTableWidth = 0.0;
      let totalFlex = 0.0;
      for (let x = 0; x < this.columns; x = x + 1) {
        let columnWidth = (t2 = this[_columnWidths][$_get](x), t2 == null ? this.defaultColumnWidth : t2);
        let columnCells = this.column(x);
        let maxIntrinsicWidth = columnWidth.maxIntrinsicWidth(columnCells, constraints.maxWidth);
        if (!maxIntrinsicWidth[$isFinite]) dart.assertFailed(null, I[1], 891, 14, "maxIntrinsicWidth.isFinite");
        if (!(maxIntrinsicWidth >= 0.0)) dart.assertFailed(null, I[1], 892, 14, "maxIntrinsicWidth >= 0.0");
        widths[$_set](x, maxIntrinsicWidth);
        tableWidth = tableWidth + maxIntrinsicWidth;
        let minIntrinsicWidth = columnWidth.minIntrinsicWidth(columnCells, constraints.maxWidth);
        if (!minIntrinsicWidth[$isFinite]) dart.assertFailed(null, I[1], 897, 14, "minIntrinsicWidth.isFinite");
        if (!(minIntrinsicWidth >= 0.0)) dart.assertFailed(null, I[1], 898, 14, "minIntrinsicWidth >= 0.0");
        minWidths[$_set](x, minIntrinsicWidth);
        if (!(maxIntrinsicWidth >= minIntrinsicWidth)) dart.assertFailed(null, I[1], 900, 14, "maxIntrinsicWidth >= minIntrinsicWidth");
        let flex = columnWidth.flex(columnCells);
        if (flex != null) {
          if (!flex[$isFinite]) dart.assertFailed(null, I[1], 904, 16, "flex.isFinite");
          if (!(dart.notNull(flex) > 0.0)) dart.assertFailed(null, I[1], 905, 16, "flex > 0.0");
          flexes[$_set](x, flex);
          totalFlex = totalFlex + dart.notNull(flex);
        } else {
          unflexedTableWidth = unflexedTableWidth + maxIntrinsicWidth;
        }
      }
      let maxWidthConstraint = constraints.maxWidth;
      let minWidthConstraint = constraints.minWidth;
      if (totalFlex > 0.0) {
        let targetWidth = null;
        if (maxWidthConstraint[$isFinite]) {
          targetWidth = maxWidthConstraint;
        } else {
          targetWidth = minWidthConstraint;
        }
        if (tableWidth < targetWidth) {
          let remainingWidth = targetWidth - unflexedTableWidth;
          if (!remainingWidth[$isFinite]) dart.assertFailed(null, I[1], 928, 16, "remainingWidth.isFinite");
          if (!(remainingWidth >= 0.0)) dart.assertFailed(null, I[1], 929, 16, "remainingWidth >= 0.0");
          for (let x = 0; x < this.columns; x = x + 1) {
            if (flexes[$_get](x) != null) {
              let flexedWidth = remainingWidth * dart.nullCheck(flexes[$_get](x)) / totalFlex;
              if (!flexedWidth[$isFinite]) dart.assertFailed(null, I[1], 933, 20, "flexedWidth.isFinite");
              if (!(flexedWidth >= 0.0)) dart.assertFailed(null, I[1], 934, 20, "flexedWidth >= 0.0");
              if (widths[$_get](x) < flexedWidth) {
                let delta = flexedWidth - widths[$_get](x);
                tableWidth = tableWidth + delta;
                widths[$_set](x, flexedWidth);
              }
            }
          }
          if (!(tableWidth + 1e-10 >= targetWidth)) dart.assertFailed(null, I[1], 942, 16, "tableWidth + precisionErrorTolerance >= targetWidth");
        }
      } else if (tableWidth < minWidthConstraint) {
        let delta = (minWidthConstraint - tableWidth) / this.columns;
        for (let x = 0; x < this.columns; x = x + 1) {
          widths[$_set](x, widths[$_get](x) + delta);
        }
        tableWidth = minWidthConstraint;
      }
      if (tableWidth > maxWidthConstraint) {
        let deficit = tableWidth - maxWidthConstraint;
        let availableColumns = this.columns;
        while (deficit > 1e-10 && totalFlex > 1e-10) {
          let newTotalFlex = 0.0;
          for (let x = 0; x < this.columns; x = x + 1) {
            if (flexes[$_get](x) != null) {
              let newWidth = widths[$_get](x) - deficit * dart.nullCheck(flexes[$_get](x)) / totalFlex;
              if (!newWidth[$isFinite]) dart.assertFailed(null, I[1], 984, 20, "newWidth.isFinite");
              if (newWidth <= minWidths[$_get](x)) {
                deficit = deficit - (widths[$_get](x) - minWidths[$_get](x));
                widths[$_set](x, minWidths[$_get](x));
                flexes[$_set](x, null);
                availableColumns = availableColumns - 1;
              } else {
                deficit = deficit - (widths[$_get](x) - newWidth);
                widths[$_set](x, newWidth);
                newTotalFlex = newTotalFlex + dart.nullCheck(flexes[$_get](x));
              }
              if (!(widths[$_get](x) >= 0.0)) dart.assertFailed(null, I[1], 996, 20, "widths[x] >= 0.0");
            }
          }
          totalFlex = newTotalFlex;
        }
        while (deficit > 1e-10 && availableColumns > 0) {
          let delta = deficit / availableColumns;
          if (!(delta !== 0)) dart.assertFailed(null, I[1], 1008, 16, "delta != 0");
          let newAvailableColumns = 0;
          for (let x = 0; x < this.columns; x = x + 1) {
            let availableDelta = widths[$_get](x) - minWidths[$_get](x);
            if (availableDelta > 0.0) {
              if (availableDelta <= delta) {
                deficit = deficit - (widths[$_get](x) - minWidths[$_get](x));
                widths[$_set](x, minWidths[$_get](x));
              } else {
                deficit = deficit - delta;
                widths[$_set](x, widths[$_get](x) - delta);
                newAvailableColumns = newAvailableColumns + 1;
              }
            }
          }
          availableColumns = newAvailableColumns;
        }
      }
      return widths;
    }
    set [_tableWidth](library$32package$58flutter$47src$47rendering$47table$46dart$58$58_tableWidth$35param) {
      this[__RenderTable__tableWidth] = library$32package$58flutter$47src$47rendering$47table$46dart$58$58_tableWidth$35param;
    }
    get [_tableWidth]() {
      let t2;
      t2 = this[__RenderTable__tableWidth];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_tableWidth")) : t2;
    }
    getRowBox(row) {
      if (!(row >= 0)) dart.assertFailed(null, I[1], 1043, 12, "row >= 0");
      if (!(row < this.rows)) dart.assertFailed(null, I[1], 1044, 12, "row < rows");
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 1045, 12, "!debugNeedsLayout");
      return new ui.Rect.fromLTRB(0.0, this[_rowTops][$_get](row), this.size.width, this[_rowTops][$_get](row + 1));
    }
    computeDryLayout(constraints) {
      let t2;
      if (this.rows * this.columns === 0) {
        return constraints.constrain(ui.Size.zero);
      }
      let widths = this[_computeColumnWidths](constraints);
      let tableWidth = widths[$fold](core.double, 0.0, dart.fn((a, b) => a + b, T.doubleAnddoubleTodouble()));
      let rowTop = 0.0;
      for (let y = 0; y < this.rows; y = y + 1) {
        let rowHeight = 0.0;
        for (let x = 0; x < this.columns; x = x + 1) {
          let xy = x + y * this.columns;
          let child = this[_children][$_get](xy);
          if (child != null) {
            let childParentData = table.TableCellParentData.as(dart.nullCheck(child.parentData));
            if (!(childParentData !== null)) dart.assertFailed(null, I[1], 1064, 18, "childParentData != null");
            switch (t2 = childParentData.verticalAlignment, t2 == null ? this.defaultVerticalAlignment : t2) {
              case C[4] || CT.C4:
                {
                  if (!this.debugCannotComputeDryLayout({reason: "TableCellVerticalAlignment.baseline requires a full layout for baseline metrics to be available."})) dart.assertFailed(null, I[1], 1067, 22, "debugCannotComputeDryLayout(\n                reason: 'TableCellVerticalAlignment.baseline requires a full layout for baseline metrics to be available.',\n              )");
                  return ui.Size.zero;
                }
              case C[1] || CT.C1:
              case C[2] || CT.C2:
              case C[3] || CT.C3:
                {
                  let childSize = child.getDryLayout(new box.BoxConstraints.tightFor({width: widths[$_get](x)}));
                  rowHeight = math.max(core.double, rowHeight, childSize.height);
                  break;
                }
              case C[5] || CT.C5:
                {
                  break;
                }
            }
          }
        }
        rowTop = rowTop + rowHeight;
      }
      return constraints.constrain(new ui.Size.new(tableWidth, rowTop));
    }
    performLayout() {
      let t2, t2$;
      let constraints = this.constraints;
      let rows = this.rows;
      let columns = this.columns;
      if (!(this[_children][$length] === rows * columns)) dart.assertFailed(null, I[1], 1092, 12, "_children.length == rows * columns");
      if (rows * columns === 0) {
        this[_tableWidth] = 0.0;
        this.size = constraints.constrain(ui.Size.zero);
        return;
      }
      let widths = this[_computeColumnWidths](constraints);
      let positions = T.ListOfdouble().filled(columns, 0.0);
      switch (this.textDirection) {
        case C[10] || CT.C10:
          {
            positions[$_set](columns - 1, 0.0);
            for (let x = columns - 2; x >= 0; x = x - 1) {
              positions[$_set](x, positions[$_get](x + 1) + widths[$_get](x + 1));
            }
            this[_columnLefts] = positions[$reversed];
            this[_tableWidth] = positions[$first] + widths[$first];
            break;
          }
        case C[11] || CT.C11:
          {
            positions[$_set](0, 0.0);
            for (let x = 1; x < columns; x = x + 1) {
              positions[$_set](x, positions[$_get](x - 1) + widths[$_get](x - 1));
            }
            this[_columnLefts] = positions;
            this[_tableWidth] = positions[$last] + widths[$last];
            break;
          }
      }
      this[_rowTops][$clear]();
      this[_baselineDistance] = null;
      let rowTop = 0.0;
      for (let y = 0; y < rows; y = y + 1) {
        this[_rowTops][$add](rowTop);
        let rowHeight = 0.0;
        let haveBaseline = false;
        let beforeBaselineDistance = 0.0;
        let afterBaselineDistance = 0.0;
        let baselines = T.ListOfdouble().filled(columns, 0.0);
        for (let x = 0; x < columns; x = x + 1) {
          let xy = x + y * columns;
          let child = this[_children][$_get](xy);
          if (child != null) {
            let childParentData = table.TableCellParentData.as(dart.nullCheck(child.parentData));
            if (!(childParentData !== null)) dart.assertFailed(null, I[1], 1136, 18, "childParentData != null");
            childParentData.x = x;
            childParentData.y = y;
            switch (t2 = childParentData.verticalAlignment, t2 == null ? this.defaultVerticalAlignment : t2) {
              case C[4] || CT.C4:
                {
                  if (!(this.textBaseline != null)) dart.assertFailed("An explicit textBaseline is required when using baseline alignment.", I[1], 1141, 22, "textBaseline != null");
                  child.layout(new box.BoxConstraints.tightFor({width: widths[$_get](x)}), {parentUsesSize: true});
                  let childBaseline = child.getDistanceToBaseline(dart.nullCheck(this.textBaseline), {onlyReal: true});
                  if (childBaseline != null) {
                    beforeBaselineDistance = math.max(core.double, beforeBaselineDistance, childBaseline);
                    afterBaselineDistance = math.max(core.double, afterBaselineDistance, child.size.height - dart.notNull(childBaseline));
                    baselines[$_set](x, childBaseline);
                    haveBaseline = true;
                  } else {
                    rowHeight = math.max(core.double, rowHeight, child.size.height);
                    childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop);
                  }
                  break;
                }
              case C[1] || CT.C1:
              case C[2] || CT.C2:
              case C[3] || CT.C3:
                {
                  child.layout(new box.BoxConstraints.tightFor({width: widths[$_get](x)}), {parentUsesSize: true});
                  rowHeight = math.max(core.double, rowHeight, child.size.height);
                  break;
                }
              case C[5] || CT.C5:
                {
                  break;
                }
            }
          }
        }
        if (haveBaseline) {
          if (y === 0) {
            this[_baselineDistance] = beforeBaselineDistance;
          }
          rowHeight = math.max(core.double, rowHeight, beforeBaselineDistance + afterBaselineDistance);
        }
        for (let x = 0; x < columns; x = x + 1) {
          let xy = x + y * columns;
          let child = this[_children][$_get](xy);
          if (child != null) {
            let childParentData = table.TableCellParentData.as(dart.nullCheck(child.parentData));
            switch (t2$ = childParentData.verticalAlignment, t2$ == null ? this.defaultVerticalAlignment : t2$) {
              case C[4] || CT.C4:
                {
                  childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop + beforeBaselineDistance - baselines[$_get](x));
                  break;
                }
              case C[1] || CT.C1:
                {
                  childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop);
                  break;
                }
              case C[2] || CT.C2:
                {
                  childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop + (rowHeight - child.size.height) / 2.0);
                  break;
                }
              case C[3] || CT.C3:
                {
                  childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop + rowHeight - child.size.height);
                  break;
                }
              case C[5] || CT.C5:
                {
                  child.layout(new box.BoxConstraints.tightFor({width: widths[$_get](x), height: rowHeight}));
                  childParentData.offset = new ui.Offset.new(positions[$_get](x), rowTop);
                  break;
                }
            }
          }
        }
        rowTop = rowTop + rowHeight;
      }
      this[_rowTops][$add](rowTop);
      this.size = constraints.constrain(new ui.Size.new(this[_tableWidth], rowTop));
      if (!(this[_rowTops][$length] === rows + 1)) dart.assertFailed(null, I[1], 1200, 12, "_rowTops.length == rows + 1");
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 1205, 12, "_children.length == rows * columns");
      for (let index = this[_children][$length] - 1; index >= 0; index = index - 1) {
        let child = this[_children][$_get](index);
        if (child != null) {
          let childParentData = box.BoxParentData.as(dart.nullCheck(child.parentData));
          let isHit = result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
              if (!transformed._equals(position['-'](childParentData.offset))) dart.assertFailed(null, I[1], 1214, 20, "transformed == position - childParentData.offset");
              return child.hitTest(result, {position: transformed});
            }, T.BoxHitTestResultAndOffsetTobool())});
          if (isHit) {
            return true;
          }
        }
      }
      return false;
    }
    paint(context, offset) {
      let t3, t2;
      if (!(this[_children][$length] === this.rows * this.columns)) dart.assertFailed(null, I[1], 1228, 12, "_children.length == rows * columns");
      if (this.rows * this.columns === 0) {
        if (this.border != null) {
          let borderRect = new ui.Rect.fromLTWH(offset.dx, offset.dy, this[_tableWidth], 0.0);
          dart.nullCheck(this.border).paint(context.canvas, borderRect, {rows: C[12] || CT.C12, columns: C[12] || CT.C12});
        }
        return;
      }
      if (!(this[_rowTops][$length] === this.rows + 1)) dart.assertFailed(null, I[1], 1236, 12, "_rowTops.length == rows + 1");
      if (this[_rowDecorations] != null) {
        if (!(dart.nullCheck(this[_rowDecorations])[$length] === dart.nullCheck(this[_rowDecorationPainters])[$length])) dart.assertFailed(null, I[1], 1238, 14, "_rowDecorations!.length == _rowDecorationPainters!.length");
        let canvas = context.canvas;
        for (let y = 0; y < this.rows; y = y + 1) {
          if (dart.nullCheck(this[_rowDecorations])[$length] <= y) {
            break;
          }
          if (dart.nullCheck(this[_rowDecorations])[$_get](y) != null) {
            t2 = dart.nullCheck(this[_rowDecorationPainters]);
            t3 = y;
            t2[$_get](t3) == null ? t2[$_set](t3, dart.nullCheck(dart.nullCheck(this[_rowDecorations])[$_get](y)).createBoxPainter(dart.bind(this, 'markNeedsPaint'))) : null;
            dart.nullCheck(dart.nullCheck(this[_rowDecorationPainters])[$_get](y)).paint(canvas, new ui.Offset.new(offset.dx, offset.dy + this[_rowTops][$_get](y)), this.configuration.copyWith({size: new ui.Size.new(this.size.width, this[_rowTops][$_get](y + 1) - this[_rowTops][$_get](y))}));
          }
        }
      }
      for (let index = 0; index < this[_children][$length]; index = index + 1) {
        let child = this[_children][$_get](index);
        if (child != null) {
          let childParentData = box.BoxParentData.as(dart.nullCheck(child.parentData));
          context.paintChild(child, childParentData.offset['+'](offset));
        }
      }
      if (!(this[_rows] === this[_rowTops][$length] - 1)) dart.assertFailed(null, I[1], 1261, 12, "_rows == _rowTops.length - 1");
      if (!(this[_columns] === dart.nullCheck(this[_columnLefts])[$length])) dart.assertFailed(null, I[1], 1262, 12, "_columns == _columnLefts!.length");
      if (this.border != null) {
        let borderRect = new ui.Rect.fromLTWH(offset.dx, offset.dy, this[_tableWidth], this[_rowTops][$last]);
        let rows = this[_rowTops][$getRange](1, this[_rowTops][$length] - 1);
        let columns = dart.nullCheck(this[_columnLefts])[$skip](1);
        dart.nullCheck(this.border).paint(context.canvas, borderRect, {rows: rows, columns: columns});
      }
    }
    debugFillProperties(properties) {
      let t2;
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfTableBorder()).new("border", this.border, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfMapOfint$TableColumnWidth()).new("specified column widths", this[_columnWidths], {level: this[_columnWidths][$isEmpty] ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info}));
      properties.add(new (T.DiagnosticsPropertyOfTableColumnWidth()).new("default column width", this.defaultColumnWidth));
      properties.add(new diagnostics.MessageProperty.new("table size", dart.str(this.columns) + "×" + dart.str(this.rows)));
      properties.add(new (T.IterablePropertyOfString()).new("column offsets", (t2 = this[_columnLefts], t2 == null ? null : t2[$map](core.String, C[13] || CT.C13)), {ifNull: "unknown"}));
      properties.add(new (T.IterablePropertyOfString()).new("row offsets", this[_rowTops][$map](core.String, C[13] || CT.C13), {ifNull: "unknown"}));
    }
    debugDescribeChildren() {
      if (this[_children][$isEmpty]) {
        return T.JSArrayOfDiagnosticsNode().of([diagnostics.DiagnosticsNode.message("table is empty")]);
      }
      let children = T.JSArrayOfDiagnosticsNode().of([]);
      for (let y = 0; y < this.rows; y = y + 1) {
        for (let x = 0; x < this.columns; x = x + 1) {
          let xy = x + y * this.columns;
          let child = this[_children][$_get](xy);
          let name = "child (" + dart.str(x) + ", " + dart.str(y) + ")";
          if (child != null) {
            children[$add](child.toDiagnosticsNode({name: name}));
          } else {
            children[$add](new (T.DiagnosticsPropertyOfObject()).new(name, null, {ifNull: "is null", showSeparator: false}));
          }
        }
      }
      return children;
    }
  };
  (table.RenderTable.new = function(opts) {
    let t2, t2$, t2$0, t2$1, t2$2;
    let columns = opts && 'columns' in opts ? opts.columns : null;
    let rows = opts && 'rows' in opts ? opts.rows : null;
    let columnWidths = opts && 'columnWidths' in opts ? opts.columnWidths : null;
    let defaultColumnWidth = opts && 'defaultColumnWidth' in opts ? opts.defaultColumnWidth : C[6] || CT.C6;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let rowDecorations = opts && 'rowDecorations' in opts ? opts.rowDecorations : null;
    let configuration = opts && 'configuration' in opts ? opts.configuration : C[7] || CT.C7;
    let defaultVerticalAlignment = opts && 'defaultVerticalAlignment' in opts ? opts.defaultVerticalAlignment : C[1] || CT.C1;
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this[_children] = C[8] || CT.C8;
    this[_rowDecorations] = null;
    this[_rowDecorationPainters] = null;
    this[_baselineDistance] = null;
    this[_rowTops] = T.JSArrayOfdouble().of([]);
    this[_columnLefts] = null;
    this[__RenderTable__tableWidth] = null;
    if (!(columns == null || dart.notNull(columns) >= 0)) dart.assertFailed(null, I[1], 388, 15, "columns == null || columns >= 0");
    if (!(rows == null || dart.notNull(rows) >= 0)) dart.assertFailed(null, I[1], 389, 15, "rows == null || rows >= 0");
    if (!(rows == null || children == null)) dart.assertFailed(null, I[1], 390, 15, "rows == null || children == null");
    if (!(defaultColumnWidth !== null)) dart.assertFailed(null, I[1], 391, 15, "defaultColumnWidth != null");
    if (!(textDirection !== null)) dart.assertFailed(null, I[1], 392, 15, "textDirection != null");
    if (!(configuration !== null)) dart.assertFailed(null, I[1], 393, 15, "configuration != null");
    this[_textDirection] = textDirection;
    this[_columns] = (t2 = columns, t2 == null ? children != null && children[$isNotEmpty] ? children[$first][$length] : 0 : t2);
    this[_rows] = (t2$ = rows, t2$ == null ? 0 : t2$);
    this[_columnWidths] = (t2$0 = columnWidths, t2$0 == null ? new (T.IdentityMapOfint$TableColumnWidth()).new() : t2$0);
    this[_defaultColumnWidth] = defaultColumnWidth;
    this[_border] = border;
    this[_textBaseline] = textBaseline;
    this[_defaultVerticalAlignment] = defaultVerticalAlignment;
    this[_configuration] = configuration;
    table.RenderTable.__proto__.new.call(this);
    this[_children] = (t2$1 = T.JSArrayOfRenderBoxN().of([]), (() => {
      t2$1[$length] = this[_columns] * this[_rows];
      return t2$1;
    })());
    this.rowDecorations = rowDecorations;
    t2$2 = children;
    t2$2 == null ? null : t2$2[$forEach](dart.bind(this, 'addRow'));
  }).prototype = table.RenderTable.prototype;
  dart.addTypeTests(table.RenderTable);
  dart.addTypeCaches(table.RenderTable);
  dart.setMethodSignature(table.RenderTable, () => ({
    __proto__: dart.getMethods(table.RenderTable.__proto__),
    setColumnWidth: dart.fnType(dart.void, [core.int, table.TableColumnWidth]),
    setFlatChildren: dart.fnType(dart.void, [core.int, core.List$(dart.nullable(box.RenderBox))]),
    setChildren: dart.fnType(dart.void, [dart.nullable(core.List$(core.List$(box.RenderBox)))]),
    addRow: dart.fnType(dart.void, [core.List$(dart.nullable(box.RenderBox))]),
    setChild: dart.fnType(dart.void, [core.int, core.int, dart.nullable(box.RenderBox)]),
    column: dart.fnType(core.Iterable$(box.RenderBox), [core.int]),
    row: dart.fnType(core.Iterable$(box.RenderBox), [core.int]),
    [_computeColumnWidths]: dart.fnType(core.List$(core.double), [box.BoxConstraints]),
    getRowBox: dart.fnType(ui.Rect, [core.int])
  }));
  dart.setGetterSignature(table.RenderTable, () => ({
    __proto__: dart.getGetters(table.RenderTable.__proto__),
    columns: core.int,
    rows: core.int,
    columnWidths: dart.nullable(core.Map$(core.int, table.TableColumnWidth)),
    defaultColumnWidth: table.TableColumnWidth,
    textDirection: ui.TextDirection,
    border: dart.nullable(table_border.TableBorder),
    rowDecorations: core.List$(decoration.Decoration),
    configuration: image_provider.ImageConfiguration,
    defaultVerticalAlignment: table.TableCellVerticalAlignment,
    textBaseline: dart.nullable(ui.TextBaseline),
    [_tableWidth]: core.double
  }));
  dart.setSetterSignature(table.RenderTable, () => ({
    __proto__: dart.getSetters(table.RenderTable.__proto__),
    columns: core.int,
    rows: core.int,
    columnWidths: dart.nullable(core.Map$(core.int, table.TableColumnWidth)),
    defaultColumnWidth: table.TableColumnWidth,
    textDirection: ui.TextDirection,
    border: dart.nullable(table_border.TableBorder),
    rowDecorations: dart.nullable(core.List$(dart.nullable(decoration.Decoration))),
    configuration: image_provider.ImageConfiguration,
    defaultVerticalAlignment: table.TableCellVerticalAlignment,
    textBaseline: dart.nullable(ui.TextBaseline),
    [_tableWidth]: core.double
  }));
  dart.setLibraryUri(table.RenderTable, I[0]);
  dart.setFieldSignature(table.RenderTable, () => ({
    __proto__: dart.getFields(table.RenderTable.__proto__),
    [_children]: dart.fieldType(core.List$(dart.nullable(box.RenderBox))),
    [_columns]: dart.fieldType(core.int),
    [_rows]: dart.fieldType(core.int),
    [_columnWidths]: dart.fieldType(core.Map$(core.int, table.TableColumnWidth)),
    [_defaultColumnWidth]: dart.fieldType(table.TableColumnWidth),
    [_textDirection]: dart.fieldType(ui.TextDirection),
    [_border]: dart.fieldType(dart.nullable(table_border.TableBorder)),
    [_rowDecorations]: dart.fieldType(dart.nullable(core.List$(dart.nullable(decoration.Decoration)))),
    [_rowDecorationPainters]: dart.fieldType(dart.nullable(core.List$(dart.nullable(decoration.BoxPainter)))),
    [_configuration]: dart.fieldType(image_provider.ImageConfiguration),
    [_defaultVerticalAlignment]: dart.fieldType(table.TableCellVerticalAlignment),
    [_textBaseline]: dart.fieldType(dart.nullable(ui.TextBaseline)),
    [_baselineDistance]: dart.fieldType(dart.nullable(core.double)),
    [_rowTops]: dart.finalFieldType(core.List$(core.double)),
    [_columnLefts]: dart.fieldType(dart.nullable(core.Iterable$(core.double))),
    [__RenderTable__tableWidth]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/table.dart", {
    "package:flutter/src/rendering/table.dart": table
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["table.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/table.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__table: table
  };
}));

//# sourceMappingURL=table.dart.lib.js.map
