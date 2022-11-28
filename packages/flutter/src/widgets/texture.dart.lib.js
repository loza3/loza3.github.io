define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/texture.dart'], (function load__packages__flutter__src__widgets__texture_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__texture$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const texture = packages__flutter__src__rendering__texture$46dart.src__rendering__texture;
  var texture$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
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
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Texture",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/texture.dart"
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/texture.dart",
    "package:flutter/src/widgets/texture.dart"
  ];
  var textureId$ = dart.privateName(texture$, "Texture.textureId");
  var freeze$ = dart.privateName(texture$, "Texture.freeze");
  var filterQuality$ = dart.privateName(texture$, "Texture.filterQuality");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  texture$.Texture = class Texture extends framework.LeafRenderObjectWidget {
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
      let key = opts && 'key' in opts ? opts.key : null;
      let textureId = opts && 'textureId' in opts ? opts.textureId : null;
      let freeze = opts && 'freeze' in opts ? opts.freeze : false;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[0] || CT.C0;
      return new texture$.Texture.new({key: key, textureId: textureId, freeze: freeze, filterQuality: filterQuality, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    createRenderObject(context) {
      return new texture.TextureBox.new({textureId: this.textureId, freeze: this.freeze, filterQuality: this.filterQuality});
    }
    updateRenderObject(context, renderObject) {
      texture.TextureBox.as(renderObject);
      renderObject.textureId = this.textureId;
      renderObject.freeze = this.freeze;
      renderObject.filterQuality = this.filterQuality;
    }
  };
  (texture$.Texture.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let textureId = opts && 'textureId' in opts ? opts.textureId : null;
    let freeze = opts && 'freeze' in opts ? opts.freeze : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[0] || CT.C0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[textureId$] = textureId;
    this[freeze$] = freeze;
    this[filterQuality$] = filterQuality;
    if (!(textureId !== null)) dart.assertFailed(null, I[0], 43, 15, "textureId != null");
    texture$.Texture.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = texture$.Texture.prototype;
  dart.addTypeTests(texture$.Texture);
  dart.addTypeCaches(texture$.Texture);
  dart.setMethodSignature(texture$.Texture, () => ({
    __proto__: dart.getMethods(texture$.Texture.__proto__),
    createRenderObject: dart.fnType(texture.TextureBox, [framework.BuildContext])
  }));
  dart.setLibraryUri(texture$.Texture, I[1]);
  dart.setFieldSignature(texture$.Texture, () => ({
    __proto__: dart.getFields(texture$.Texture.__proto__),
    textureId: dart.finalFieldType(core.int),
    freeze: dart.finalFieldType(core.bool),
    filterQuality: dart.finalFieldType(ui.FilterQuality)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/texture.dart", {
    "package:flutter/src/widgets/texture.dart": texture$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["texture.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6CY;;;;;;IAGC;;;;;;IAUS;;;;;;;;;;;;;uBAGuB;AAAY,oDAAsB,wBAAmB,4BAAuB;IAAc;uBAGhG,SAAoB;;AACrB,MAAlC,AAAa,YAAD,aAAa;AACG,MAA5B,AAAa,YAAD,UAAU;AACoB,MAA1C,AAAa,YAAD,iBAAiB;IAC/B;;;QA9BQ;QACQ;QACT;QACA;;IAFS;IACT;IACA;UACK,AAAU,SAAD;AALf,oDACE,GAAG;;EAImB","file":"../../../../../../../../../../packages/flutter/src/widgets/texture.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__texture: texture$
  };
}));

//# sourceMappingURL=texture.dart.lib.js.map
