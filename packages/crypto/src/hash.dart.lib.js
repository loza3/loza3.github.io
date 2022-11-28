define(['dart_sdk', 'packages/crypto/src/digest_sink.dart', 'packages/crypto/src/digest.dart'], (function load__packages__crypto__src__hash_dart(dart_sdk, packages__crypto__src__digest_sink$46dart, packages__crypto__src__digest$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const digest_sink = packages__crypto__src__digest_sink$46dart.src__digest_sink;
  const digest = packages__crypto__src__digest$46dart.src__digest;
  var hash = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:crypto/src/hash.dart"];
  hash.Hash = class Hash extends convert.Converter$(core.List$(core.int), digest.Digest) {
    convert(input) {
      T.ListOfint().as(input);
      let innerSink = new digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(input);
      outerSink.close();
      return innerSink.value;
    }
  };
  (hash.Hash.new = function() {
    hash.Hash.__proto__.new.call(this);
    ;
  }).prototype = hash.Hash.prototype;
  dart.addTypeTests(hash.Hash);
  dart.addTypeCaches(hash.Hash);
  dart.setMethodSignature(hash.Hash, () => ({
    __proto__: dart.getMethods(hash.Hash.__proto__),
    convert: dart.fnType(digest.Digest, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(hash.Hash, I[0]);
  dart.trackLibraries("packages/crypto/src/hash.dart", {
    "package:crypto/src/hash.dart": hash
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hash.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;YAwB2B;;AACnB,sBAAY;AACZ,sBAAY,4BAAuB,SAAS;AAC5B,MAApB,AAAU,SAAD,KAAK,KAAK;AACF,MAAjB,AAAU,SAAD;AACT,YAAO,AAAU,UAAD;IAClB;;;AATM;;EAAM","file":"../../../../../../../../../../../packages/crypto/src/hash.dart.lib.js"}');
  // Exports:
  return {
    src__hash: hash
  };
}));

//# sourceMappingURL=hash.dart.lib.js.map
