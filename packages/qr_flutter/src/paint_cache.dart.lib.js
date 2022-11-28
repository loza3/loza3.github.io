define(['dart_sdk', 'packages/qr_flutter/src/types.dart'], (function load__packages__qr_flutter__src__paint_cache_dart(dart_sdk, packages__qr_flutter__src__types$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__qr_flutter__src__types$46dart.src__types;
  var paint_cache = Object.create(dart.library);
  var $add = dartx.add;
  var $_set = dartx._set;
  var $first = dartx.first;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfPaint: () => (T.JSArrayOfPaint = dart.constFn(_interceptors.JSArray$(ui.Paint)))(),
    IdentityMapOfString$Paint: () => (T.IdentityMapOfString$Paint = dart.constFn(_js_helper.IdentityMap$(core.String, ui.Paint)))(),
    PaintN: () => (T.PaintN = dart.constFn(dart.nullable(ui.Paint)))(),
    JSArrayOfPaintN: () => (T.JSArrayOfPaintN = dart.constFn(_interceptors.JSArray$(T.PaintN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:qr_flutter/src/paint_cache.dart"];
  var _pixelPaints = dart.privateName(paint_cache, "_pixelPaints");
  var _keyedPaints = dart.privateName(paint_cache, "_keyedPaints");
  var _cacheKey = dart.privateName(paint_cache, "_cacheKey");
  paint_cache.PaintCache = class PaintCache extends core.Object {
    [_cacheKey](element, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let posKey = position != null ? dart.toString(position) : "any";
      return element.toString() + ":" + posKey;
    }
    cache(paint, element, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (element === types.QrCodeElement.codePixel) {
        this[_pixelPaints][$add](paint);
      } else {
        this[_keyedPaints][$_set](this[_cacheKey](element, {position: position}), paint);
      }
    }
    firstPaint(element, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (element === types.QrCodeElement.codePixel) {
        return this[_pixelPaints][$first];
      } else {
        return this[_keyedPaints][$_get](this[_cacheKey](element, {position: position}));
      }
    }
    paints(element, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (element === types.QrCodeElement.codePixel) {
        return this[_pixelPaints];
      } else {
        return T.JSArrayOfPaintN().of([this[_keyedPaints][$_get](this[_cacheKey](element, {position: position}))]);
      }
    }
    static ['_#new#tearOff']() {
      return new paint_cache.PaintCache.new();
    }
  };
  (paint_cache.PaintCache.new = function() {
    this[_pixelPaints] = T.JSArrayOfPaint().of([]);
    this[_keyedPaints] = new (T.IdentityMapOfString$Paint()).new();
    ;
  }).prototype = paint_cache.PaintCache.prototype;
  dart.addTypeTests(paint_cache.PaintCache);
  dart.addTypeCaches(paint_cache.PaintCache);
  dart.setMethodSignature(paint_cache.PaintCache, () => ({
    __proto__: dart.getMethods(paint_cache.PaintCache.__proto__),
    [_cacheKey]: dart.fnType(core.String, [types.QrCodeElement], {position: dart.nullable(types.FinderPatternPosition)}, {}),
    cache: dart.fnType(dart.void, [ui.Paint, types.QrCodeElement], {position: dart.nullable(types.FinderPatternPosition)}, {}),
    firstPaint: dart.fnType(dart.nullable(ui.Paint), [types.QrCodeElement], {position: dart.nullable(types.FinderPatternPosition)}, {}),
    paints: dart.fnType(core.List$(dart.nullable(ui.Paint)), [types.QrCodeElement], {position: dart.nullable(types.FinderPatternPosition)}, {})
  }));
  dart.setLibraryUri(paint_cache.PaintCache, I[0]);
  dart.setFieldSignature(paint_cache.PaintCache, () => ({
    __proto__: dart.getFields(paint_cache.PaintCache.__proto__),
    [_pixelPaints]: dart.finalFieldType(core.List$(ui.Paint)),
    [_keyedPaints]: dart.finalFieldType(core.Map$(core.String, ui.Paint))
  }));
  dart.trackLibraries("packages/qr_flutter/src/paint_cache.dart", {
    "package:qr_flutter/src/paint_cache.dart": paint_cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["paint_cache.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBAeiC;UAAiC;AACxD,mBAAS,AAAS,QAAD,WAAoB,cAAT,QAAQ,IAAc;AACxD,YAAU,AAAQ,AAAoB,QAArB,cAAY,MAAE,MAAM;IACvC;UAGiB,OAAqB;UACV;AAC1B,UAAI,AAAQ,OAAD,KAAkB;AACJ,QAAvB,AAAa,yBAAI,KAAK;;AAEsC,QAA5D,AAAY,0BAAC,gBAAU,OAAO,aAAY,QAAQ,IAAK,KAAK;;IAEhE;eAIgC;UAAiC;AAC/D,UAAI,AAAQ,OAAD,KAAkB;AAC3B,cAAO,AAAa;;AAEpB,cAAO,AAAY,2BAAC,gBAAU,OAAO,aAAY,QAAQ;;IAE7D;WAMkC;UACN;AAC1B,UAAI,AAAQ,OAAD,KAAkB;AAC3B,cAAO;;AAEP,cAAe,yBAAC,AAAY,0BAAC,gBAAU,OAAO,aAAY,QAAQ;;IAEtE;;;;;;IAvCkB,qBAAsB;IACf,qBAA8B;;EAuCzD","file":"../../../../../../../../../../../packages/qr_flutter/src/paint_cache.dart.lib.js"}');
  // Exports:
  return {
    src__paint_cache: paint_cache
  };
}));

//# sourceMappingURL=paint_cache.dart.lib.js.map
