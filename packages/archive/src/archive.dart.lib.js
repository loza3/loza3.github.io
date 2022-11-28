define(['dart_sdk', 'packages/archive/src/archive_file.dart'], (function load__packages__archive__src__archive_dart(dart_sdk, packages__archive__src__archive_file$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const archive_file = packages__archive__src__archive_file$46dart.src__archive_file;
  var archive = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $length = dartx.length;
  var $clear = dartx.clear;
  var $first = dartx.first;
  var $last = dartx.last;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $iterator = dartx.iterator;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfArchiveFile: () => (T.JSArrayOfArchiveFile = dart.constFn(_interceptors.JSArray$(archive_file.ArchiveFile)))(),
    IdentityMapOfString$int: () => (T.IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    JSArrayOfFutureOfvoid: () => (T.JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(T.FutureOfvoid())))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:archive/src/archive.dart"];
  var files = dart.privateName(archive, "Archive.files");
  var comment = dart.privateName(archive, "Archive.comment");
  var _fileMap = dart.privateName(archive, "_fileMap");
  archive.Archive = class Archive extends collection.IterableBase$(archive_file.ArchiveFile) {
    get files() {
      return this[files];
    }
    set files(value) {
      this[files] = value;
    }
    get comment() {
      return this[comment];
    }
    set comment(value) {
      this[comment] = value;
    }
    addFile(file) {
      let index = this[_fileMap][$_get](file.name);
      if (index != null) {
        this.files[$_set](index, file);
        return;
      }
      this.files[$add](file);
      this[_fileMap][$_set](file.name, this.files[$length] - 1);
    }
    clear() {
      return async.async(dart.void, (function* clear() {
        let futures = T.JSArrayOfFutureOfvoid().of([]);
        for (let fp of this.files) {
          futures[$add](fp.close());
        }
        this.files[$clear]();
        this[_fileMap][$clear]();
        this.comment = null;
        yield async.Future.wait(dart.void, futures);
      }).bind(this));
    }
    get length() {
      return this.files[$length];
    }
    _get(index) {
      return this.files[$_get](index);
    }
    findFile(name) {
      let index = this[_fileMap][$_get](name);
      return index != null ? this.files[$_get](index) : null;
    }
    numberOfFiles() {
      return this.files[$length];
    }
    fileName(index) {
      return this.files[$_get](index).name;
    }
    fileSize(index) {
      return this.files[$_get](index).size;
    }
    fileData(index) {
      return T.ListOfint().as(this.files[$_get](index).content);
    }
    get first() {
      return this.files[$first];
    }
    get last() {
      return this.files[$last];
    }
    get isEmpty() {
      return this.files[$isEmpty];
    }
    get isNotEmpty() {
      return this.files[$isNotEmpty];
    }
    get iterator() {
      return this.files[$iterator];
    }
    static ['_#new#tearOff']() {
      return new archive.Archive.new();
    }
  };
  (archive.Archive.new = function() {
    this[files] = T.JSArrayOfArchiveFile().of([]);
    this[_fileMap] = new (T.IdentityMapOfString$int()).new();
    this[comment] = null;
    archive.Archive.__proto__.new.call(this);
    ;
  }).prototype = archive.Archive.prototype;
  dart.addTypeTests(archive.Archive);
  dart.addTypeCaches(archive.Archive);
  dart.setMethodSignature(archive.Archive, () => ({
    __proto__: dart.getMethods(archive.Archive.__proto__),
    addFile: dart.fnType(dart.void, [archive_file.ArchiveFile]),
    clear: dart.fnType(async.Future$(dart.void), []),
    _get: dart.fnType(archive_file.ArchiveFile, [core.int]),
    findFile: dart.fnType(dart.nullable(archive_file.ArchiveFile), [core.String]),
    numberOfFiles: dart.fnType(core.int, []),
    fileName: dart.fnType(core.String, [core.int]),
    fileSize: dart.fnType(core.int, [core.int]),
    fileData: dart.fnType(core.List$(core.int), [core.int])
  }));
  dart.setGetterSignature(archive.Archive, () => ({
    __proto__: dart.getGetters(archive.Archive.__proto__),
    iterator: core.Iterator$(archive_file.ArchiveFile),
    [$iterator]: core.Iterator$(archive_file.ArchiveFile)
  }));
  dart.setLibraryUri(archive.Archive, I[0]);
  dart.setFieldSignature(archive.Archive, () => ({
    __proto__: dart.getFields(archive.Archive.__proto__),
    files: dart.fieldType(core.List$(archive_file.ArchiveFile)),
    [_fileMap]: dart.finalFieldType(core.Map$(core.String, core.int)),
    comment: dart.fieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionAccessors(archive.Archive, [
    'length',
    'first',
    'last',
    'isEmpty',
    'isNotEmpty',
    'iterator'
  ]);
  dart.trackLibraries("packages/archive/src/archive.dart", {
    "package:archive/src/archive.dart": archive
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["archive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMoB;;;;;;IAGV;;;;;;YAGiB;AAGnB,kBAAQ,AAAQ,sBAAC,AAAK,IAAD;AACzB,UAAI,KAAK;AACY,QAAnB,AAAK,kBAAC,KAAK,EAAI,IAAI;AACnB;;AAIa,MAAf,AAAM,iBAAI,IAAI;AACwB,MAAtC,AAAQ,sBAAC,AAAK,IAAD,OAAS,AAAM,AAAO,sBAAE;IACvC;;AAEkB;AACZ,sBAAwB;AAC5B,iBAAS,KAAM;AACU,UAAvB,AAAQ,OAAD,OAAK,AAAG,EAAD;;AAEH,QAAb,AAAM;AACU,QAAhB,AAAS;AACK,QAAd,eAAU;AACgB,QAA1B,MAAa,6BAAK,OAAO;MAC3B;;;AAIkB,YAAA,AAAM;IAAM;SAGF;AAAU,YAAA,AAAK,mBAAC,KAAK;IAAC;aAIrB;AACvB,kBAAQ,AAAQ,sBAAC,IAAI;AACzB,YAAO,AAAM,MAAD,WAAW,AAAK,kBAAC,KAAK,IAAI;IACxC;;AAIE,YAAO,AAAM;IACf;aAGoB;AAClB,YAAO,AAAK,AAAQ,mBAAP,KAAK;IACpB;aAGiB;AACf,YAAO,AAAK,AAAQ,mBAAP,KAAK;IACpB;aAGuB;AACrB,YAA4B,kBAArB,AAAK,AAAQ,kBAAP,KAAK;IACpB;;AAGyB,YAAA,AAAM;IAAK;;AAGZ,YAAA,AAAM;IAAI;;AAGd,YAAA,AAAM;IAAO;;AAIV,YAAA,AAAM;IAAU;;AAGD,YAAA,AAAM;IAAQ;;;;;;IA/ElC,cAAQ;IACH,iBAAW;IAE1B;;;EA6EV","file":"../../../../../../../../../../../packages/archive/src/archive.dart.lib.js"}');
  // Exports:
  return {
    src__archive: archive
  };
}));

//# sourceMappingURL=archive.dart.lib.js.map
