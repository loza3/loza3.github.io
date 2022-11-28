define(['dart_sdk', 'packages/crypto/src/digest.dart'], (function load__packages__crypto__src__digest_sink_dart(dart_sdk, packages__crypto__src__digest$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const digest = packages__crypto__src__digest$46dart.src__digest;
  var digest_sink = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:crypto/src/digest_sink.dart"];
  var _value = dart.privateName(digest_sink, "_value");
  digest_sink.DigestSink = class DigestSink extends core.Sink$(digest.Digest) {
    get value() {
      return dart.nullCheck(this[_value]);
    }
    add(value) {
      digest.Digest.as(value);
      if (this[_value] != null) dart.throw(new core.StateError.new("add may only be called once."));
      this[_value] = value;
    }
    close() {
      if (this[_value] == null) dart.throw(new core.StateError.new("add must be called once."));
    }
    static ['_#new#tearOff']() {
      return new digest_sink.DigestSink.new();
    }
  };
  (digest_sink.DigestSink.new = function() {
    this[_value] = null;
    ;
  }).prototype = digest_sink.DigestSink.prototype;
  dart.addTypeTests(digest_sink.DigestSink);
  dart.addTypeCaches(digest_sink.DigestSink);
  dart.setMethodSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getMethods(digest_sink.DigestSink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getGetters(digest_sink.DigestSink.__proto__),
    value: digest.Digest
  }));
  dart.setLibraryUri(digest_sink.DigestSink, I[0]);
  dart.setFieldSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getFields(digest_sink.DigestSink.__proto__),
    [_value]: dart.fieldType(dart.nullable(digest.Digest))
  }));
  dart.trackLibraries("packages/crypto/src/digest_sink.dart", {
    "package:crypto/src/digest_sink.dart": digest_sink
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["digest_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAWsB,YAAM,gBAAN;IAAO;QAQX;;AACd,UAAI,sBAAgB,AAAgD,WAA1C,wBAAW;AACvB,MAAd,eAAS,KAAK;IAChB;;AAIE,UAAI,AAAO,sBAAS,AAA4C,WAAtC,wBAAW;IACvC;;;;;;IAdQ;;EAeV","file":"../../../../../../../../../../../packages/crypto/src/digest_sink.dart.lib.js"}');
  // Exports:
  return {
    src__digest_sink: digest_sink
  };
}));

//# sourceMappingURL=digest_sink.dart.lib.js.map
