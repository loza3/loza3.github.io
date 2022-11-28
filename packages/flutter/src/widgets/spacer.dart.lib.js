define(['dart_sdk', 'packages/flutter/src/widgets/title.dart'], (function load__packages__flutter__src__widgets__spacer_dart(dart_sdk, packages__flutter__src__widgets__title$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  var spacer = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/spacer.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/spacer.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 12,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/spacer.dart"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/spacer.dart",
    "package:flutter/src/widgets/spacer.dart"
  ];
  var flex$ = dart.privateName(spacer, "Spacer.flex");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  spacer.Spacer = class Spacer extends framework.StatelessWidget {
    get flex() {
      return this[flex$];
    }
    set flex(value) {
      super.flex = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let flex = opts && 'flex' in opts ? opts.flex : 1;
      return new spacer.Spacer.new({key: key, flex: flex, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new basic.Expanded.new({flex: this.flex, child: C[1] || CT.C1, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
  };
  (spacer.Spacer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let flex = opts && 'flex' in opts ? opts.flex : 1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[flex$] = flex;
    if (!(flex !== null)) dart.assertFailed(null, I[0], 46, 14, "flex != null");
    if (!(flex > 0)) dart.assertFailed(null, I[0], 47, 14, "flex > 0");
    spacer.Spacer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = spacer.Spacer.prototype;
  dart.addTypeTests(spacer.Spacer);
  dart.addTypeCaches(spacer.Spacer);
  dart.setMethodSignature(spacer.Spacer, () => ({
    __proto__: dart.getMethods(spacer.Spacer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(spacer.Spacer, I[1]);
  dart.setFieldSignature(spacer.Spacer, () => ({
    __proto__: dart.getFields(spacer.Spacer.__proto__),
    flex: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/spacer.dart", {
    "package:flutter/src/widgets/spacer.dart": spacer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["spacer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuDY;;;;;;;;;;;UAGgB;AACxB,YAAO,+BACC;IAGV;;;QAnBoB;QAAU;;;UACnB,AAAK,IAAD;UACJ,AAAK,IAAD,GAAG;AAFZ,iDAAc,GAAG;;EAEH","file":"../../../../../../../../../../packages/flutter/src/widgets/spacer.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__spacer: spacer
  };
}));

//# sourceMappingURL=spacer.dart.lib.js.map
