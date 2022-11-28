define(['dart_sdk'], (function load__packages__qr_flutter__src__errors_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var errors = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:qr_flutter/src/errors.dart"];
  var providedVersion$ = dart.privateName(errors, "QrUnsupportedVersionException.providedVersion");
  var message$ = dart.privateName(errors, "QrUnsupportedVersionException.message");
  errors.QrUnsupportedVersionException = class QrUnsupportedVersionException extends core.Object {
    get providedVersion() {
      return this[providedVersion$];
    }
    set providedVersion(value) {
      super.providedVersion = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    static new(providedVersion) {
      let message = "Invalid version. " + dart.str(providedVersion) + " is not >= " + dart.str(1) + " " + "and <= " + dart.str(40);
      return new errors.QrUnsupportedVersionException._internal(providedVersion, message);
    }
    static ['_#new#tearOff'](providedVersion) {
      return errors.QrUnsupportedVersionException.new(providedVersion);
    }
    static ['_#_internal#tearOff'](providedVersion, message) {
      return new errors.QrUnsupportedVersionException._internal(providedVersion, message);
    }
    toString() {
      return "QrUnsupportedVersionException: " + this.message;
    }
  };
  (errors.QrUnsupportedVersionException._internal = function(providedVersion, message) {
    this[providedVersion$] = providedVersion;
    this[message$] = message;
    ;
  }).prototype = errors.QrUnsupportedVersionException.prototype;
  dart.addTypeTests(errors.QrUnsupportedVersionException);
  dart.addTypeCaches(errors.QrUnsupportedVersionException);
  errors.QrUnsupportedVersionException[dart.implements] = () => [core.Exception];
  dart.setStaticMethodSignature(errors.QrUnsupportedVersionException, () => ['new']);
  dart.setLibraryUri(errors.QrUnsupportedVersionException, I[0]);
  dart.setFieldSignature(errors.QrUnsupportedVersionException, () => ({
    __proto__: dart.getFields(errors.QrUnsupportedVersionException.__proto__),
    providedVersion: dart.finalFieldType(core.int),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(errors.QrUnsupportedVersionException, ['toString']);
  var message$0 = dart.privateName(errors, "QrEmbeddedImageException.message");
  errors.QrEmbeddedImageException = class QrEmbeddedImageException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    static new(message) {
      return new errors.QrEmbeddedImageException._internal(message);
    }
    static ['_#new#tearOff'](message) {
      return errors.QrEmbeddedImageException.new(message);
    }
    static ['_#_internal#tearOff'](message) {
      return new errors.QrEmbeddedImageException._internal(message);
    }
    toString() {
      return "QrEmbeddedImageException: " + this.message;
    }
  };
  (errors.QrEmbeddedImageException._internal = function(message) {
    this[message$0] = message;
    ;
  }).prototype = errors.QrEmbeddedImageException.prototype;
  dart.addTypeTests(errors.QrEmbeddedImageException);
  dart.addTypeCaches(errors.QrEmbeddedImageException);
  errors.QrEmbeddedImageException[dart.implements] = () => [core.Exception];
  dart.setStaticMethodSignature(errors.QrEmbeddedImageException, () => ['new']);
  dart.setLibraryUri(errors.QrEmbeddedImageException, I[0]);
  dart.setFieldSignature(errors.QrEmbeddedImageException, () => ({
    __proto__: dart.getFields(errors.QrEmbeddedImageException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(errors.QrEmbeddedImageException, ['toString']);
  dart.trackLibraries("packages/qr_flutter/src/errors.dart", {
    "package:qr_flutter/src/errors.dart": errors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["errors.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAwBY;;;;;;IAGG;;;;;;eAb6B;AAClC,oBAAQ,AACV,+BAAmB,eAAe,kCAA4B,MAC9D;AACJ,YAAqC,oDAAU,eAAe,EAAE,OAAO;IACzE;;;;;;;;AAWqB,YAAA,AAAyC,qCAAR;IAAQ;;6DATjB,iBAAsB;IAAtB;IAAsB;;EAAQ;;;;;;;;;;;;;;IAsB9D;;;;;;eAN2B;AACtC,YAAgC,+CAAU,OAAO;IACnD;;;;;;;;AAOqB,YAAA,AAAoC,gCAAR;IAAQ;;;IANjB;;EAAQ","file":"../../../../../../../../../../../packages/qr_flutter/src/errors.dart.lib.js"}');
  // Exports:
  return {
    src__errors: errors
  };
}));

//# sourceMappingURL=errors.dart.lib.js.map
