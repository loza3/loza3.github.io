define(['dart_sdk', 'packages/flare_flutter/asset_provider.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__flare_flutter__provider__asset_flare_dart(dart_sdk, packages__flare_flutter__asset_provider$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const asset_provider = packages__flare_flutter__asset_provider$46dart.asset_provider;
  const asset_bundle = packages__flutter__src__services__text_editing_delta$46dart.src__services__asset_bundle;
  var asset_flare = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flare_flutter/provider/asset_flare.dart"];
  var bundle$ = dart.privateName(asset_flare, "AssetFlare.bundle");
  var name$ = dart.privateName(asset_flare, "AssetFlare.name");
  asset_flare.AssetFlare = class AssetFlare extends asset_provider.AssetProvider {
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    static ['_#new#tearOff'](opts) {
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let name = opts && 'name' in opts ? opts.name : null;
      return new asset_flare.AssetFlare.new({bundle: bundle, name: name});
    }
    get hashCode() {
      return ui.hashValues(this.bundle, this.name);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.runtimeType(other)._equals(this[$runtimeType])) {
        return false;
      }
      return asset_flare.AssetFlare.is(other) && other.bundle[$_equals](this.bundle) && other.name === this.name;
    }
    load() {
      return this.bundle.load(this.name);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + this.name + "\")";
    }
  };
  (asset_flare.AssetFlare.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let name = opts && 'name' in opts ? opts.name : null;
    this[bundle$] = bundle;
    this[name$] = name;
    asset_flare.AssetFlare.__proto__.new.call(this);
    ;
  }).prototype = asset_flare.AssetFlare.prototype;
  dart.addTypeTests(asset_flare.AssetFlare);
  dart.addTypeCaches(asset_flare.AssetFlare);
  dart.setMethodSignature(asset_flare.AssetFlare, () => ({
    __proto__: dart.getMethods(asset_flare.AssetFlare.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [])
  }));
  dart.setLibraryUri(asset_flare.AssetFlare, I[0]);
  dart.setFieldSignature(asset_flare.AssetFlare, () => ({
    __proto__: dart.getFields(asset_flare.AssetFlare.__proto__),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(asset_flare.AssetFlare, ['_equals', 'toString']);
  dart.defineExtensionAccessors(asset_flare.AssetFlare, ['hashCode']);
  dart.trackLibraries("packages/flare_flutter/provider/asset_flare.dart", {
    "package:flare_flutter/provider/asset_flare.dart": asset_flare
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["asset_flare.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAYoB;;;;;;IAIL;;;;;;;;;;;;AAQO,2BAAW,aAAQ;IAAK;YAGnB;;AACvB,WAAU,iBAAN,KAAK,UAAgB;AACvB,cAAO;;AAET,YAAa,AAAwC,2BAA9C,KAAK,KAAkB,AAAM,AAAO,KAAR,kBAAW,gBAAU,AAAM,AAAK,KAAN,UAAS;IACxE;;AAG2B,YAAA,AAAO,kBAAK;IAAK;;AAGvB,YAA8C,UAA5C,sBAAW,uBAAU,eAAM,eAAU,YAAI;IAAG;;;QAnBnD;QACA;IADA;IACA;AAFV;;EAGJ","file":"../../../../../../../../../../../packages/flare_flutter/provider/asset_flare.dart.lib.js"}');
  // Exports:
  return {
    provider__asset_flare: asset_flare
  };
}));

//# sourceMappingURL=asset_flare.dart.lib.js.map
