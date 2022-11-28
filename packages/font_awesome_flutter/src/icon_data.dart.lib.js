define(['dart_sdk', 'packages/flutter/src/widgets/icon_data.dart'], (function load__packages__font_awesome_flutter__src__icon_data_dart(dart_sdk, packages__flutter__src__widgets__icon_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  var icon_data$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:font_awesome_flutter/src/icon_data.dart"];
  icon_data$.IconDataBrands = class IconDataBrands extends icon_data.IconData {
    static ['_#new#tearOff'](codePoint) {
      return new icon_data$.IconDataBrands.new(codePoint);
    }
  };
  (icon_data$.IconDataBrands.new = function(codePoint) {
    icon_data$.IconDataBrands.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeBrands", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataBrands.prototype;
  dart.addTypeTests(icon_data$.IconDataBrands);
  dart.addTypeCaches(icon_data$.IconDataBrands);
  dart.setLibraryUri(icon_data$.IconDataBrands, I[0]);
  icon_data$.IconDataSolid = class IconDataSolid extends icon_data.IconData {
    static ['_#new#tearOff'](codePoint) {
      return new icon_data$.IconDataSolid.new(codePoint);
    }
  };
  (icon_data$.IconDataSolid.new = function(codePoint) {
    icon_data$.IconDataSolid.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeSolid", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataSolid.prototype;
  dart.addTypeTests(icon_data$.IconDataSolid);
  dart.addTypeCaches(icon_data$.IconDataSolid);
  dart.setLibraryUri(icon_data$.IconDataSolid, I[0]);
  icon_data$.IconDataRegular = class IconDataRegular extends icon_data.IconData {
    static ['_#new#tearOff'](codePoint) {
      return new icon_data$.IconDataRegular.new(codePoint);
    }
  };
  (icon_data$.IconDataRegular.new = function(codePoint) {
    icon_data$.IconDataRegular.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeRegular", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataRegular.prototype;
  dart.addTypeTests(icon_data$.IconDataRegular);
  dart.addTypeCaches(icon_data$.IconDataRegular);
  dart.setLibraryUri(icon_data$.IconDataRegular, I[0]);
  icon_data$.IconDataLight = class IconDataLight extends icon_data.IconData {
    static ['_#new#tearOff'](codePoint) {
      return new icon_data$.IconDataLight.new(codePoint);
    }
  };
  (icon_data$.IconDataLight.new = function(codePoint) {
    icon_data$.IconDataLight.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeLight", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataLight.prototype;
  dart.addTypeTests(icon_data$.IconDataLight);
  dart.addTypeCaches(icon_data$.IconDataLight);
  dart.setLibraryUri(icon_data$.IconDataLight, I[0]);
  var secondary$ = dart.privateName(icon_data$, "IconDataDuotone.secondary");
  icon_data$.IconDataDuotone = class IconDataDuotone extends icon_data.IconData {
    get secondary() {
      return this[secondary$];
    }
    set secondary(value) {
      super.secondary = value;
    }
    static ['_#new#tearOff'](codePoint, opts) {
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      return new icon_data$.IconDataDuotone.new(codePoint, {secondary: secondary});
    }
  };
  (icon_data$.IconDataDuotone.new = function(codePoint, opts) {
    let secondary = opts && 'secondary' in opts ? opts.secondary : null;
    this[secondary$] = secondary;
    icon_data$.IconDataDuotone.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeDuotone", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataDuotone.prototype;
  dart.addTypeTests(icon_data$.IconDataDuotone);
  dart.addTypeCaches(icon_data$.IconDataDuotone);
  dart.setLibraryUri(icon_data$.IconDataDuotone, I[0]);
  dart.setFieldSignature(icon_data$.IconDataDuotone, () => ({
    __proto__: dart.getFields(icon_data$.IconDataDuotone.__proto__),
    secondary: dart.finalFieldType(dart.nullable(icon_data.IconData))
  }));
  icon_data$.IconDataThin = class IconDataThin extends icon_data.IconData {
    static ['_#new#tearOff'](codePoint) {
      return new icon_data$.IconDataThin.new(codePoint);
    }
  };
  (icon_data$.IconDataThin.new = function(codePoint) {
    icon_data$.IconDataThin.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeThin", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataThin.prototype;
  dart.addTypeTests(icon_data$.IconDataThin);
  dart.addTypeCaches(icon_data$.IconDataThin);
  dart.setLibraryUri(icon_data$.IconDataThin, I[0]);
  dart.trackLibraries("packages/font_awesome_flutter/src/icon_data.dart", {
    "package:font_awesome_flutter/src/icon_data.dart": icon_data$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;4CAQ2B;AACnB,uDACE,SAAS,eACG,kCACC;;EACd;;;;;;;;;2CAOiB;AAClB,sDACE,SAAS,eACG,iCACC;;EACd;;;;;;;;;6CAOmB;AACpB,wDACE,SAAS,eACG,mCACC;;EACd;;;;;;;;;2CAQiB;AAClB,sDACE,SAAS,eACG,iCACC;;EACd;;;;;;IAaS;;;;;;;;;;;6CAEU;QAAiB;;AACrC,wDACE,SAAS,eACG,mCACC;;EACd;;;;;;;;;;;;;0CAQgB;AACjB,qDACE,SAAS,eACG,gCACC;;EACd","file":"../../../../../../../../../../../packages/font_awesome_flutter/src/icon_data.dart.lib.js"}');
  // Exports:
  return {
    src__icon_data: icon_data$
  };
}));

//# sourceMappingURL=icon_data.dart.lib.js.map
