define(['dart_sdk'], (function load__packages__lottie__src__lottie_image_asset_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var lottie_image_asset = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/lottie_image_asset.dart"];
  var width$ = dart.privateName(lottie_image_asset, "LottieImageAsset.width");
  var height$ = dart.privateName(lottie_image_asset, "LottieImageAsset.height");
  var id$ = dart.privateName(lottie_image_asset, "LottieImageAsset.id");
  var fileName$ = dart.privateName(lottie_image_asset, "LottieImageAsset.fileName");
  var dirName$ = dart.privateName(lottie_image_asset, "LottieImageAsset.dirName");
  var loadedImage = dart.privateName(lottie_image_asset, "LottieImageAsset.loadedImage");
  lottie_image_asset.LottieImageAsset = class LottieImageAsset extends core.Object {
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get fileName() {
      return this[fileName$];
    }
    set fileName(value) {
      super.fileName = value;
    }
    get dirName() {
      return this[dirName$];
    }
    set dirName(value) {
      super.dirName = value;
    }
    get loadedImage() {
      return this[loadedImage];
    }
    set loadedImage(value) {
      this[loadedImage] = value;
    }
    static ['_#new#tearOff'](opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let id = opts && 'id' in opts ? opts.id : null;
      let fileName = opts && 'fileName' in opts ? opts.fileName : null;
      let dirName = opts && 'dirName' in opts ? opts.dirName : null;
      return new lottie_image_asset.LottieImageAsset.new({width: width, height: height, id: id, fileName: fileName, dirName: dirName});
    }
    toString() {
      return "LottieImageAsset(width: " + dart.str(this.width) + ", height: " + dart.str(this.height) + ", id: " + this.id + ", fileName: " + this.fileName + ", dirName: " + this.dirName + ")";
    }
  };
  (lottie_image_asset.LottieImageAsset.new = function(opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let fileName = opts && 'fileName' in opts ? opts.fileName : null;
    let dirName = opts && 'dirName' in opts ? opts.dirName : null;
    this[loadedImage] = null;
    this[width$] = width;
    this[height$] = height;
    this[id$] = id;
    this[fileName$] = fileName;
    this[dirName$] = dirName;
    ;
  }).prototype = lottie_image_asset.LottieImageAsset.prototype;
  dart.addTypeTests(lottie_image_asset.LottieImageAsset);
  dart.addTypeCaches(lottie_image_asset.LottieImageAsset);
  dart.setLibraryUri(lottie_image_asset.LottieImageAsset, I[0]);
  dart.setFieldSignature(lottie_image_asset.LottieImageAsset, () => ({
    __proto__: dart.getFields(lottie_image_asset.LottieImageAsset.__proto__),
    width: dart.finalFieldType(core.int),
    height: dart.finalFieldType(core.int),
    id: dart.finalFieldType(core.String),
    fileName: dart.finalFieldType(core.String),
    dirName: dart.finalFieldType(core.String),
    loadedImage: dart.fieldType(dart.nullable(ui.Image))
  }));
  dart.defineExtensionMethods(lottie_image_asset.LottieImageAsset, ['toString']);
  dart.trackLibraries("packages/lottie/src/lottie_image_asset.dart", {
    "package:lottie/src/lottie_image_asset.dart": lottie_image_asset
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lottie_image_asset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAGY;;;;;;IACA;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACH;;;;;;;;;;;;;;;AAWN,YAAA,AAAmG,uCAAzE,cAAK,wBAAW,eAAM,WAAO,UAAE,iBAAa,gBAAQ,gBAAY,eAAO;IAAE;;;QARpF;QACD;QACA;QACA;QACA;IAPR;IAGS;IACD;IACA;IACA;IACA;;EAAS","file":"../../../../../../../../../../../packages/lottie/src/lottie_image_asset.dart.lib.js"}');
  // Exports:
  return {
    src__lottie_image_asset: lottie_image_asset
  };
}));

//# sourceMappingURL=lottie_image_asset.dart.lib.js.map
