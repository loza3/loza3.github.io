define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/proxy_box.dart'], (function load__packages__flutter__src__widgets__color_filter_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__proxy_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  var color_filter = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    DiagnosticsPropertyOfColorFilter: () => (T.DiagnosticsPropertyOfColorFilter = dart.constFn(diagnostics.DiagnosticsProperty$(ui.ColorFilter)))(),
    ColorFilterLayerN: () => (T.ColorFilterLayerN = dart.constFn(dart.nullable(layer.ColorFilterLayer)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ColorFiltered",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/color_filter.dart"
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/color_filter.dart",
    "package:flutter/src/widgets/color_filter.dart"
  ];
  var colorFilter$ = dart.privateName(color_filter, "ColorFiltered.colorFilter");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  color_filter.ColorFiltered = class ColorFiltered extends framework.SingleChildRenderObjectWidget {
    get colorFilter() {
      return this[colorFilter$];
    }
    set colorFilter(value) {
      super.colorFilter = value;
    }
    static ['_#new#tearOff'](opts) {
      let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let key = opts && 'key' in opts ? opts.key : null;
      return new color_filter.ColorFiltered.new({colorFilter: colorFilter, child: child, key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createRenderObject(context) {
      return new color_filter._ColorFilterRenderObject.new(this.colorFilter);
    }
    updateRenderObject(context, renderObject) {
      object.RenderObject.as(renderObject);
      color_filter._ColorFilterRenderObject.as(renderObject).colorFilter = this.colorFilter;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfColorFilter()).new("colorFilter", this.colorFilter));
    }
  };
  (color_filter.ColorFiltered.new = function(opts) {
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[colorFilter$] = colorFilter;
    if (!(colorFilter !== null)) dart.assertFailed(null, I[0], 38, 16, "colorFilter != null");
    color_filter.ColorFiltered.__proto__.new.call(this, {child: child, key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = color_filter.ColorFiltered.prototype;
  dart.addTypeTests(color_filter.ColorFiltered);
  dart.addTypeCaches(color_filter.ColorFiltered);
  dart.setMethodSignature(color_filter.ColorFiltered, () => ({
    __proto__: dart.getMethods(color_filter.ColorFiltered.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(color_filter.ColorFiltered, I[1]);
  dart.setFieldSignature(color_filter.ColorFiltered, () => ({
    __proto__: dart.getFields(color_filter.ColorFiltered.__proto__),
    colorFilter: dart.finalFieldType(ui.ColorFilter)
  }));
  var _colorFilter$ = dart.privateName(color_filter, "_colorFilter");
  color_filter._ColorFilterRenderObject = class _ColorFilterRenderObject extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](_colorFilter) {
      return new color_filter._ColorFilterRenderObject.new(_colorFilter);
    }
    get colorFilter() {
      return this[_colorFilter$];
    }
    set colorFilter(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 64, 12, "value != null");
      if (!value[$_equals](this[_colorFilter$])) {
        this[_colorFilter$] = value;
        this.markNeedsPaint();
      }
    }
    get alwaysNeedsCompositing() {
      return this.child != null;
    }
    paint(context, offset) {
      this.layer = context.pushColorFilter(offset, this.colorFilter, dart.bind(this, 'paint', super.paint), {oldLayer: T.ColorFilterLayerN().as(this.layer)});
      if (!dart.fn(() => {
        dart.nullCheck(this.layer).debugCreator = this.debugCreator;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 77, 12, "() {\n      layer!.debugCreator = debugCreator;\n      return true;\n    }()");
    }
  };
  (color_filter._ColorFilterRenderObject.new = function(_colorFilter) {
    this[_colorFilter$] = _colorFilter;
    color_filter._ColorFilterRenderObject.__proto__.new.call(this);
    ;
  }).prototype = color_filter._ColorFilterRenderObject.prototype;
  dart.addTypeTests(color_filter._ColorFilterRenderObject);
  dart.addTypeCaches(color_filter._ColorFilterRenderObject);
  dart.setGetterSignature(color_filter._ColorFilterRenderObject, () => ({
    __proto__: dart.getGetters(color_filter._ColorFilterRenderObject.__proto__),
    colorFilter: ui.ColorFilter
  }));
  dart.setSetterSignature(color_filter._ColorFilterRenderObject, () => ({
    __proto__: dart.getSetters(color_filter._ColorFilterRenderObject.__proto__),
    colorFilter: ui.ColorFilter
  }));
  dart.setLibraryUri(color_filter._ColorFilterRenderObject, I[1]);
  dart.setFieldSignature(color_filter._ColorFilterRenderObject, () => ({
    __proto__: dart.getFields(color_filter._ColorFilterRenderObject.__proto__),
    [_colorFilter$]: dart.fieldType(ui.ColorFilter)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/color_filter.dart", {
    "package:flutter/src/widgets/color_filter.dart": color_filter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["color_filter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwCoB;;;;;;;;;;;;uBAG2B;AAAY,2DAAyB;IAAY;uBAGzD,SAAsB;;AACW,MAAtD,AAA6B,yCAA1C,YAAY,gBAA4C;IAC3D;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACwC,MAA5E,AAAW,UAAD,KAAK,+CAAiC,eAAe;IACjE;;;QAlBmC;QAAmB;QAAa;;IAAhC;UACtB,AAAY,WAAD;AADlB,gEAAgD,KAAK,OAAQ,GAAG;;EACrC;;;;;;;;;;;;;;;;;;AAuBF;IAAY;oBAEf;AAC1B,YAAO,AAAM,KAAD;AACZ,WAAI,KAAK,WAAI;AACS,QAApB,sBAAe,KAAK;AACJ,QAAhB;;IAEJ;;AAGmC,YAAA,AAAM;IAAO;UAGrB,SAAgB;AAC8D,MAAvG,aAAQ,AAAQ,OAAD,iBAAiB,MAAM,EAAE,kBAAmB,kDAAuB,yBAAN;AAC5E,WAAO,AAGN;AAFmC,QAA7B,AAAE,eAAP,2BAAsB;AACtB,cAAO;;IAEX;;;IAtB8B;AAA9B;;EAA2C","file":"../../../../../../../../../../packages/flutter/src/widgets/color_filter.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__color_filter: color_filter
  };
}));

//# sourceMappingURL=color_filter.dart.lib.js.map
