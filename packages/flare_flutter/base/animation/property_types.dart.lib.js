define(['dart_sdk'], (function load__packages__flare_flutter__base__animation__property_types_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var property_types = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constMap(core.String, core.int, ["unknown", 0, "posX", 1, "posY", 2, "scaleX", 3, "scaleY", 4, "rotation", 5, "opacity", 6, "drawOrder", 7, "length", 8, "vertices", 9, "strength", 10, "trigger", 11, "intValue", 12, "floatValue", 13, "stringValue", 14, "boolValue", 15, "isCollisionEnabled", 16, "sequence", 17, "activeChild", 18, "pathVertices", 19, "fillColor", 20, "fillGradient", 21, "fillRadial", 22, "strokeColor", 23, "strokeGradient", 24, "strokeRadial", 25, "strokeWidth", 26, "strokeOpacity", 27, "fillOpacity", 28, "width", 29, "height", 30, "cornerRadius", 31, "innerRadius", 32, "strokeStart", 33, "strokeEnd", 34, "strokeOffset", 35, "color", 36, "offsetX", 37, "offsetY", 38, "blurX", 39, "blurY", 40]);
    }
  }, false);
  var C = [void 0];
  var I = ["package:flare_flutter/base/animation/property_types.dart"];
  property_types.PropertyTypes = class PropertyTypes extends core.Object {
    static ['_#new#tearOff']() {
      return new property_types.PropertyTypes.new();
    }
  };
  (property_types.PropertyTypes.new = function() {
    ;
  }).prototype = property_types.PropertyTypes.prototype;
  dart.addTypeTests(property_types.PropertyTypes);
  dart.addTypeCaches(property_types.PropertyTypes);
  dart.setLibraryUri(property_types.PropertyTypes, I[0]);
  dart.setStaticFieldSignature(property_types.PropertyTypes, () => ['unknown', 'posX', 'posY', 'scaleX', 'scaleY', 'rotation', 'opacity', 'drawOrder', 'length', 'imageVertices', 'constraintStrength', 'trigger', 'intProperty', 'floatProperty', 'stringProperty', 'booleanProperty', 'collisionEnabled', 'sequence', 'activeChildIndex', 'pathVertices', 'fillColor', 'fillGradient', 'fillRadial', 'strokeColor', 'strokeGradient', 'strokeRadial', 'strokeWidth', 'strokeOpacity', 'fillOpacity', 'shapeWidth', 'shapeHeight', 'cornerRadius', 'innerRadius', 'strokeStart', 'strokeEnd', 'strokeOffset', 'color', 'offsetX', 'offsetY', 'blurX', 'blurY']);
  dart.defineLazy(property_types.PropertyTypes, {
    /*property_types.PropertyTypes.unknown*/get unknown() {
      return 0;
    },
    /*property_types.PropertyTypes.posX*/get posX() {
      return 1;
    },
    /*property_types.PropertyTypes.posY*/get posY() {
      return 2;
    },
    /*property_types.PropertyTypes.scaleX*/get scaleX() {
      return 3;
    },
    /*property_types.PropertyTypes.scaleY*/get scaleY() {
      return 4;
    },
    /*property_types.PropertyTypes.rotation*/get rotation() {
      return 5;
    },
    /*property_types.PropertyTypes.opacity*/get opacity() {
      return 6;
    },
    /*property_types.PropertyTypes.drawOrder*/get drawOrder() {
      return 7;
    },
    /*property_types.PropertyTypes.length*/get length() {
      return 8;
    },
    /*property_types.PropertyTypes.imageVertices*/get imageVertices() {
      return 9;
    },
    /*property_types.PropertyTypes.constraintStrength*/get constraintStrength() {
      return 10;
    },
    /*property_types.PropertyTypes.trigger*/get trigger() {
      return 11;
    },
    /*property_types.PropertyTypes.intProperty*/get intProperty() {
      return 12;
    },
    /*property_types.PropertyTypes.floatProperty*/get floatProperty() {
      return 13;
    },
    /*property_types.PropertyTypes.stringProperty*/get stringProperty() {
      return 14;
    },
    /*property_types.PropertyTypes.booleanProperty*/get booleanProperty() {
      return 15;
    },
    /*property_types.PropertyTypes.collisionEnabled*/get collisionEnabled() {
      return 16;
    },
    /*property_types.PropertyTypes.sequence*/get sequence() {
      return 17;
    },
    /*property_types.PropertyTypes.activeChildIndex*/get activeChildIndex() {
      return 18;
    },
    /*property_types.PropertyTypes.pathVertices*/get pathVertices() {
      return 19;
    },
    /*property_types.PropertyTypes.fillColor*/get fillColor() {
      return 20;
    },
    /*property_types.PropertyTypes.fillGradient*/get fillGradient() {
      return 21;
    },
    /*property_types.PropertyTypes.fillRadial*/get fillRadial() {
      return 22;
    },
    /*property_types.PropertyTypes.strokeColor*/get strokeColor() {
      return 23;
    },
    /*property_types.PropertyTypes.strokeGradient*/get strokeGradient() {
      return 24;
    },
    /*property_types.PropertyTypes.strokeRadial*/get strokeRadial() {
      return 25;
    },
    /*property_types.PropertyTypes.strokeWidth*/get strokeWidth() {
      return 26;
    },
    /*property_types.PropertyTypes.strokeOpacity*/get strokeOpacity() {
      return 27;
    },
    /*property_types.PropertyTypes.fillOpacity*/get fillOpacity() {
      return 28;
    },
    /*property_types.PropertyTypes.shapeWidth*/get shapeWidth() {
      return 29;
    },
    /*property_types.PropertyTypes.shapeHeight*/get shapeHeight() {
      return 30;
    },
    /*property_types.PropertyTypes.cornerRadius*/get cornerRadius() {
      return 31;
    },
    /*property_types.PropertyTypes.innerRadius*/get innerRadius() {
      return 32;
    },
    /*property_types.PropertyTypes.strokeStart*/get strokeStart() {
      return 33;
    },
    /*property_types.PropertyTypes.strokeEnd*/get strokeEnd() {
      return 34;
    },
    /*property_types.PropertyTypes.strokeOffset*/get strokeOffset() {
      return 35;
    },
    /*property_types.PropertyTypes.color*/get color() {
      return 36;
    },
    /*property_types.PropertyTypes.offsetX*/get offsetX() {
      return 37;
    },
    /*property_types.PropertyTypes.offsetY*/get offsetY() {
      return 38;
    },
    /*property_types.PropertyTypes.blurX*/get blurX() {
      return 39;
    },
    /*property_types.PropertyTypes.blurY*/get blurY() {
      return 40;
    }
  }, false);
  dart.defineLazy(property_types, {
    /*property_types.propertyTypesMap*/get propertyTypesMap() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/flare_flutter/base/animation/property_types.dart", {
    "package:flare_flutter/base/animation/property_types.dart": property_types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["property_types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;EA0CA;;;;;;MAzCmB,oCAAO;;;MACP,iCAAI;;;MACJ,iCAAI;;;MACJ,mCAAM;;;MACN,mCAAM;;;MACN,qCAAQ;;;MACR,oCAAO;;;MACP,sCAAS;;;MACT,mCAAM;;;MACN,0CAAa;;;MACb,+CAAkB;;;MAClB,oCAAO;;;MACP,wCAAW;;;MACX,0CAAa;;;MACb,2CAAc;;;MACd,4CAAe;;;MACf,6CAAgB;;;MAChB,qCAAQ;;;MACR,6CAAgB;;;MAChB,yCAAY;;;MACZ,sCAAS;;;MACT,yCAAY;;;MACZ,uCAAU;;;MACV,wCAAW;;;MACX,2CAAc;;;MACd,yCAAY;;;MACZ,wCAAW;;;MACX,0CAAa;;;MACb,wCAAW;;;MACX,uCAAU;;;MACV,wCAAW;;;MACX,yCAAY;;;MACZ,wCAAW;;;MACX,wCAAW;;;MACX,sCAAS;;;MACT,yCAAY;;;MACZ,kCAAK;;;MACL,oCAAO;;;MACP,oCAAO;;;MACP,kCAAK;;;MACL,kCAAK;;;;;MAGD,+BAAgB","file":"../../../../../../../../../../../../packages/flare_flutter/base/animation/property_types.dart.lib.js"}');
  // Exports:
  return {
    base__animation__property_types: property_types
  };
}));

//# sourceMappingURL=property_types.dart.lib.js.map
