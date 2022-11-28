define(['dart_sdk'], (function load__packages__http__src__exception_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var exception = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:http/src/exception.dart"];
  var message$ = dart.privateName(exception, "ClientException.message");
  var uri$ = dart.privateName(exception, "ClientException.uri");
  exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    static ['_#new#tearOff'](message, uri = null) {
      return new exception.ClientException.new(message, uri);
    }
    toString() {
      return this.message;
    }
  };
  (exception.ClientException.new = function(message, uri = null) {
    this[message$] = message;
    this[uri$] = uri;
    ;
  }).prototype = exception.ClientException.prototype;
  dart.addTypeTests(exception.ClientException);
  dart.addTypeCaches(exception.ClientException);
  exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exception.ClientException, I[0]);
  dart.setFieldSignature(exception.ClientException, () => ({
    __proto__: dart.getFields(exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(dart.nullable(core.Uri))
  }));
  dart.defineExtensionMethods(exception.ClientException, ['toString']);
  dart.trackLibraries("packages/http/src/exception.dart", {
    "package:http/src/exception.dart": exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["exception.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAMe;;;;;;IAGF;;;;;;;;;;AAKU;IAAO;;4CAHP,SAAe;IAAf;IAAe;;EAAK","file":"../../../../../../../../../../../packages/http/src/exception.dart.lib.js"}');
  // Exports:
  return {
    src__exception: exception
  };
}));

//# sourceMappingURL=exception.dart.lib.js.map
