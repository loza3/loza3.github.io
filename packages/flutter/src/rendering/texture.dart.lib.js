define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/box.dart'], (function load__packages__flutter__src__rendering__texture_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  var texture = Object.create(dart.library);
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
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/texture.dart",
    "package:flutter/src/rendering/texture.dart"
  ];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _textureId = dart.privateName(texture, "_textureId");
  var _freeze = dart.privateName(texture, "_freeze");
  var _filterQuality = dart.privateName(texture, "_filterQuality");
  texture.TextureBox = class TextureBox extends box.RenderBox {
    static ['_#new#tearOff'](opts) {
      let textureId = opts && 'textureId' in opts ? opts.textureId : null;
      let freeze = opts && 'freeze' in opts ? opts.freeze : false;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[0] || CT.C0;
      return new texture.TextureBox.new({textureId: textureId, freeze: freeze, filterQuality: filterQuality});
    }
    get textureId() {
      return this[_textureId];
    }
    set textureId(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 52, 12, "value != null");
      if (value !== this[_textureId]) {
        this[_textureId] = value;
        this.markNeedsPaint();
      }
    }
    get freeze() {
      return this[_freeze];
    }
    set freeze(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 63, 12, "value != null");
      if (value !== this[_freeze]) {
        this[_freeze] = value;
        this.markNeedsPaint();
      }
    }
    get filterQuality() {
      return this[_filterQuality];
    }
    set filterQuality(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 74, 12, "value != null");
      if (value !== this[_filterQuality]) {
        this[_filterQuality] = value;
        this.markNeedsPaint();
      }
    }
    get sizedByParent() {
      return true;
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    get isRepaintBoundary() {
      return true;
    }
    computeDryLayout(constraints) {
      return constraints.biggest;
    }
    hitTestSelf(position) {
      return true;
    }
    paint(context, offset) {
      context.addLayer(new layer.TextureLayer.new({rect: new ui.Rect.fromLTWH(offset.dx, offset.dy, this.size.width, this.size.height), textureId: this[_textureId], freeze: this.freeze, filterQuality: this[_filterQuality]}));
    }
  };
  (texture.TextureBox.new = function(opts) {
    let textureId = opts && 'textureId' in opts ? opts.textureId : null;
    let freeze = opts && 'freeze' in opts ? opts.freeze : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[0] || CT.C0;
    if (!(textureId !== null)) dart.assertFailed(null, I[0], 43, 15, "textureId != null");
    this[_textureId] = textureId;
    this[_freeze] = freeze;
    this[_filterQuality] = filterQuality;
    texture.TextureBox.__proto__.new.call(this);
    ;
  }).prototype = texture.TextureBox.prototype;
  dart.addTypeTests(texture.TextureBox);
  dart.addTypeCaches(texture.TextureBox);
  dart.setGetterSignature(texture.TextureBox, () => ({
    __proto__: dart.getGetters(texture.TextureBox.__proto__),
    textureId: core.int,
    freeze: core.bool,
    filterQuality: ui.FilterQuality
  }));
  dart.setSetterSignature(texture.TextureBox, () => ({
    __proto__: dart.getSetters(texture.TextureBox.__proto__),
    textureId: core.int,
    freeze: core.bool,
    filterQuality: ui.FilterQuality
  }));
  dart.setLibraryUri(texture.TextureBox, I[1]);
  dart.setFieldSignature(texture.TextureBox, () => ({
    __proto__: dart.getFields(texture.TextureBox.__proto__),
    [_textureId]: dart.fieldType(core.int),
    [_freeze]: dart.fieldType(core.bool),
    [_filterQuality]: dart.fieldType(ui.FilterQuality)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/texture.dart", {
    "package:flutter/src/rendering/texture.dart": texture
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["texture.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgDuB;IAAU;kBAEb;AAChB,YAAO,AAAM,KAAD;AACZ,UAAI,KAAK,KAAI;AACO,QAAlB,mBAAa,KAAK;AACF,QAAhB;;IAEJ;;AAGmB;IAAO;eAEV;AACd,YAAO,AAAM,KAAD;AACZ,UAAI,KAAK,KAAI;AACI,QAAf,gBAAU,KAAK;AACC,QAAhB;;IAEJ;;AAGmC;IAAc;sBAEjB;AAC9B,YAAO,AAAM,KAAD;AACZ,UAAI,KAAK,KAAI;AACW,QAAtB,uBAAiB,KAAK;AACN,QAAhB;;IAEJ;;AAG0B;IAAI;;AAGK;IAAI;;AAGT;IAAI;qBAGG;AACnC,YAAO,AAAY,YAAD;IACpB;gBAGwB;AAAa;IAAI;UAGd,SAAgB;AAMvC,MALF,AAAQ,OAAD,UAAU,kCACJ,qBAAS,AAAO,MAAD,KAAK,AAAO,MAAD,KAAK,AAAK,iBAAO,AAAK,8BAChD,0BACH,4BACO;IAEnB;;;QAlEe;QACR;QACS;UACJ,AAAU,SAAD;IACN,mBAAE,SAAS;IACd,gBAAE,MAAM;IACD,uBAAE,aAAa;AAPlC;;EAOkC","file":"../../../../../../../../../../packages/flutter/src/rendering/texture.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__texture: texture
  };
}));

//# sourceMappingURL=texture.dart.lib.js.map
