define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flare_flutter/asset_provider.dart'], (function load__packages__flare_flutter__provider__memory_flare_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flare_flutter__asset_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const asset_provider = packages__flare_flutter__asset_provider$46dart.asset_provider;
  var memory_flare = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $runtimeType = dartx.runtimeType;
  var $_equals = dartx._equals;
  var $buffer = dartx.buffer;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfByteData: () => (T.FutureOfByteData = dart.constFn(async.Future$(typed_data.ByteData)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flare_flutter/provider/memory_flare.dart"];
  var bytes$ = dart.privateName(memory_flare, "MemoryFlare.bytes");
  memory_flare.MemoryFlare = class MemoryFlare extends asset_provider.AssetProvider {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](opts) {
      let bytes = opts && 'bytes' in opts ? opts.bytes : null;
      return new memory_flare.MemoryFlare.new({bytes: bytes});
    }
    get hashCode() {
      return this.bytes[$hashCode];
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.runtimeType(other)._equals(this[$runtimeType])) {
        return false;
      }
      return memory_flare.MemoryFlare.is(other) && other.bytes[$_equals](this.bytes);
    }
    load() {
      return T.FutureOfByteData().value(typed_data.ByteData.view(this.bytes[$buffer]));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + diagnostics.describeIdentity(this.bytes) + ")";
    }
  };
  (memory_flare.MemoryFlare.new = function(opts) {
    let bytes = opts && 'bytes' in opts ? opts.bytes : null;
    this[bytes$] = bytes;
    memory_flare.MemoryFlare.__proto__.new.call(this);
    ;
  }).prototype = memory_flare.MemoryFlare.prototype;
  dart.addTypeTests(memory_flare.MemoryFlare);
  dart.addTypeCaches(memory_flare.MemoryFlare);
  dart.setMethodSignature(memory_flare.MemoryFlare, () => ({
    __proto__: dart.getMethods(memory_flare.MemoryFlare.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [])
  }));
  dart.setLibraryUri(memory_flare.MemoryFlare, I[0]);
  dart.setFieldSignature(memory_flare.MemoryFlare, () => ({
    __proto__: dart.getFields(memory_flare.MemoryFlare.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  dart.defineExtensionMethods(memory_flare.MemoryFlare, ['_equals', 'toString']);
  dart.defineExtensionAccessors(memory_flare.MemoryFlare, ['hashCode']);
  dart.trackLibraries("packages/flare_flutter/provider/memory_flare.dart", {
    "package:flare_flutter/provider/memory_flare.dart": memory_flare
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["memory_flare.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IASkB;;;;;;;;;;;AAKI,YAAA,AAAM;IAAQ;YAGT;;AACvB,WAAU,iBAAN,KAAK,UAAgB;AACvB,cAAO;;AAET,YAAa,AAAe,6BAArB,KAAK,KAAmB,AAAM,AAAM,KAAP,iBAAU;IAChD;;AAG2B,YAAO,4BAAe,yBAAK,AAAM;IAAQ;;AAG/C,YAA0C,UAAxC,sBAAW,MAAG,6BAAiB,cAAO;IAAE;;;QAjB9B;;AAA3B;;EAAkC","file":"../../../../../../../../../../../packages/flare_flutter/provider/memory_flare.dart.lib.js"}');
  // Exports:
  return {
    provider__memory_flare: memory_flare
  };
}));

//# sourceMappingURL=memory_flare.dart.lib.js.map
