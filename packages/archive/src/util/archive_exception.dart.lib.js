define(['dart_sdk'], (function load__packages__archive__src__util__archive_exception_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var archive_exception = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:archive/src/util/archive_exception.dart"];
  archive_exception.ArchiveException = class ArchiveException extends core.FormatException {
    static ['_#new#tearOff'](message, source = null, offset = null) {
      return new archive_exception.ArchiveException.new(message, source, offset);
    }
  };
  (archive_exception.ArchiveException.new = function(message, source = null, offset = null) {
    archive_exception.ArchiveException.__proto__.new.call(this, message, source, offset);
    ;
  }).prototype = archive_exception.ArchiveException.prototype;
  dart.addTypeTests(archive_exception.ArchiveException);
  dart.addTypeCaches(archive_exception.ArchiveException);
  dart.setLibraryUri(archive_exception.ArchiveException, I[0]);
  dart.trackLibraries("packages/archive/src/util/archive_exception.dart", {
    "package:archive/src/util/archive_exception.dart": archive_exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["archive_exception.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;qDAE0B,SAAkB,eAAa;AACjD,gEAAM,OAAO,EAAE,MAAM,EAAE,MAAM;;EAAC","file":"../../../../../../../../../../../../packages/archive/src/util/archive_exception.dart.lib.js"}');
  // Exports:
  return {
    src__util__archive_exception: archive_exception
  };
}));

//# sourceMappingURL=archive_exception.dart.lib.js.map
