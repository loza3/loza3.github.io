define(['dart_sdk'], (function load__packages__lottie__src__model__font_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var font = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/model/font.dart"];
  var family$ = dart.privateName(font, "Font.family");
  var name$ = dart.privateName(font, "Font.name");
  var style$ = dart.privateName(font, "Font.style");
  var ascent$ = dart.privateName(font, "Font.ascent");
  font.Font = class Font extends core.Object {
    get family() {
      return this[family$];
    }
    set family(value) {
      super.family = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get ascent() {
      return this[ascent$];
    }
    set ascent(value) {
      super.ascent = value;
    }
    static ['_#new#tearOff'](opts) {
      let family = opts && 'family' in opts ? opts.family : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let ascent = opts && 'ascent' in opts ? opts.ascent : null;
      return new font.Font.new({family: family, name: name, style: style, ascent: ascent});
    }
  };
  (font.Font.new = function(opts) {
    let family = opts && 'family' in opts ? opts.family : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let ascent = opts && 'ascent' in opts ? opts.ascent : null;
    this[family$] = family;
    this[name$] = name;
    this[style$] = style;
    this[ascent$] = ascent;
    ;
  }).prototype = font.Font.prototype;
  dart.addTypeTests(font.Font);
  dart.addTypeCaches(font.Font);
  dart.setLibraryUri(font.Font, I[0]);
  dart.setFieldSignature(font.Font, () => ({
    __proto__: dart.getFields(font.Font.__proto__),
    family: dart.finalFieldType(core.String),
    name: dart.finalFieldType(core.String),
    style: dart.finalFieldType(core.String),
    ascent: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/lottie/src/model/font.dart", {
    "package:lottie/src/model/font.dart": font
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["font.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IACe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;;;;;;;;QAGM;QACD;QACA;QACA;IAHC;IACD;IACA;IACA;;EAAQ","file":"../../../../../../../../../../../../packages/lottie/src/model/font.dart.lib.js"}');
  // Exports:
  return {
    src__model__font: font
  };
}));

//# sourceMappingURL=font.dart.lib.js.map
