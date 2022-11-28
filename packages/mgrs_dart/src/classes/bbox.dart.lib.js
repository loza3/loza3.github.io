define(['dart_sdk'], (function load__packages__mgrs_dart__src__classes__bbox_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var bbox = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:mgrs_dart/src/classes/bbox.dart"];
  var top$ = dart.privateName(bbox, "BBox.top");
  var bottom$ = dart.privateName(bbox, "BBox.bottom");
  var right$ = dart.privateName(bbox, "BBox.right");
  var left$ = dart.privateName(bbox, "BBox.left");
  bbox.BBox = class BBox extends core.Object {
    get top() {
      return this[top$];
    }
    set top(value) {
      this[top$] = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      this[bottom$] = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      this[right$] = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      this[left$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let top = opts && 'top' in opts ? opts.top : null;
      let bottom = opts && 'bottom' in opts ? opts.bottom : null;
      let right = opts && 'right' in opts ? opts.right : null;
      let left = opts && 'left' in opts ? opts.left : null;
      return new bbox.BBox.new({top: top, bottom: bottom, right: right, left: left});
    }
  };
  (bbox.BBox.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let left = opts && 'left' in opts ? opts.left : null;
    this[top$] = top;
    this[bottom$] = bottom;
    this[right$] = right;
    this[left$] = left;
    ;
  }).prototype = bbox.BBox.prototype;
  dart.addTypeTests(bbox.BBox);
  dart.addTypeCaches(bbox.BBox);
  dart.setLibraryUri(bbox.BBox, I[0]);
  dart.setFieldSignature(bbox.BBox, () => ({
    __proto__: dart.getFields(bbox.BBox.__proto__),
    top: dart.fieldType(core.double),
    bottom: dart.fieldType(core.double),
    right: dart.fieldType(core.double),
    left: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/mgrs_dart/src/classes/bbox.dart", {
    "package:mgrs_dart/src/classes/bbox.dart": bbox
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bbox.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;;;;;;;;QAGW;QACA;QACA;QACA;IACP,aAAE,GAAG;IACH,gBAAE,MAAM;IACT,eAAE,KAAK;IACR,cAAE,IAAI","file":"../../../../../../../../../../../../packages/mgrs_dart/src/classes/bbox.dart.lib.js"}');
  // Exports:
  return {
    src__classes__bbox: bbox
  };
}));

//# sourceMappingURL=bbox.dart.lib.js.map
