define(['dart_sdk', 'packages/archive/src/util/input_stream.dart', 'packages/archive/src/zlib/inflate.dart', 'packages/archive/src/zlib/inflate_buffer.dart', 'packages/archive/src/util/output_stream.dart'], (function load__packages__archive__src__archive_file_dart(dart_sdk, packages__archive__src__util__input_stream$46dart, packages__archive__src__zlib__inflate$46dart, packages__archive__src__zlib__inflate_buffer$46dart, packages__archive__src__util__output_stream$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const input_stream = packages__archive__src__util__input_stream$46dart.src__util__input_stream;
  const inflate = packages__archive__src__zlib__inflate$46dart.src__zlib__inflate;
  const inflate_buffer = packages__archive__src__zlib__inflate_buffer$46dart.src__zlib__inflate_buffer;
  const output_stream = packages__archive__src__util__output_stream$46dart.src__util__output_stream;
  var archive_file = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $replaceAll = dartx.replaceAll;
  var $length = dartx.length;
  var $buffer = dartx.buffer;
  var $codeUnits = dartx.codeUnits;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    JSArrayOfFutureOfvoid: () => (T.JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(T.FutureOfvoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:archive/src/archive_file.dart"];
  var name$ = dart.privateName(archive_file, "ArchiveFile.name");
  var size$ = dart.privateName(archive_file, "ArchiveFile.size");
  var mode = dart.privateName(archive_file, "ArchiveFile.mode");
  var ownerId = dart.privateName(archive_file, "ArchiveFile.ownerId");
  var groupId = dart.privateName(archive_file, "ArchiveFile.groupId");
  var lastModTime = dart.privateName(archive_file, "ArchiveFile.lastModTime");
  var isFile = dart.privateName(archive_file, "ArchiveFile.isFile");
  var isSymbolicLink = dart.privateName(archive_file, "ArchiveFile.isSymbolicLink");
  var nameOfLinkedFile = dart.privateName(archive_file, "ArchiveFile.nameOfLinkedFile");
  var crc32 = dart.privateName(archive_file, "ArchiveFile.crc32");
  var comment = dart.privateName(archive_file, "ArchiveFile.comment");
  var compress = dart.privateName(archive_file, "ArchiveFile.compress");
  var _rawContent = dart.privateName(archive_file, "_rawContent");
  var _content = dart.privateName(archive_file, "_content");
  var _compressionType$ = dart.privateName(archive_file, "_compressionType");
  archive_file.ArchiveFile = class ArchiveFile extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      this[size$] = value;
    }
    get mode() {
      return this[mode];
    }
    set mode(value) {
      this[mode] = value;
    }
    get ownerId() {
      return this[ownerId];
    }
    set ownerId(value) {
      this[ownerId] = value;
    }
    get groupId() {
      return this[groupId];
    }
    set groupId(value) {
      this[groupId] = value;
    }
    get lastModTime() {
      return this[lastModTime];
    }
    set lastModTime(value) {
      this[lastModTime] = value;
    }
    get isFile() {
      return this[isFile];
    }
    set isFile(value) {
      this[isFile] = value;
    }
    get isSymbolicLink() {
      return this[isSymbolicLink];
    }
    set isSymbolicLink(value) {
      this[isSymbolicLink] = value;
    }
    get nameOfLinkedFile() {
      return this[nameOfLinkedFile];
    }
    set nameOfLinkedFile(value) {
      this[nameOfLinkedFile] = value;
    }
    get crc32() {
      return this[crc32];
    }
    set crc32(value) {
      this[crc32] = value;
    }
    get comment() {
      return this[comment];
    }
    set comment(value) {
      this[comment] = value;
    }
    get compress() {
      return this[compress];
    }
    set compress(value) {
      this[compress] = value;
    }
    get unixPermissions() {
      return this.mode & 511;
    }
    static ['_#new#tearOff'](name, size, content, _compressionType = 0) {
      return new archive_file.ArchiveFile.new(name, size, content, _compressionType);
    }
    static ['_#string#tearOff'](name, content, _compressionType = 0) {
      return new archive_file.ArchiveFile.string(name, content, _compressionType);
    }
    static ['_#noCompress#tearOff'](name, size, content) {
      return new archive_file.ArchiveFile.noCompress(name, size, content);
    }
    static ['_#stream#tearOff'](name, size, contentStream) {
      return new archive_file.ArchiveFile.stream(name, size, contentStream);
    }
    writeContent(output, opts) {
      let freeMemory = opts && 'freeMemory' in opts ? opts.freeMemory : true;
      if (T.ListOfint().is(this[_content])) {
        output.writeBytes(T.ListOfint().as(this[_content]));
      } else if (input_stream.InputStreamBase.is(this[_content])) {
        output.writeInputStream(input_stream.InputStreamBase.as(this[_content]));
      } else if (this[_rawContent] != null) {
        this.decompress();
        output.writeBytes(T.ListOfint().as(this[_content]));
        if (freeMemory) {
          this[_content] = null;
        }
      }
    }
    get content() {
      if (this[_content] == null) {
        this.decompress();
      }
      return this[_content];
    }
    clear() {
      this[_content] = null;
    }
    close() {
      return async.async(dart.void, (function* close() {
        let futures = T.JSArrayOfFutureOfvoid().of([]);
        if (input_stream.InputStreamBase.is(this[_content])) {
          futures[$add](input_stream.InputStreamBase.as(this[_content]).close());
        }
        if (input_stream.InputStreamBase.is(this[_rawContent])) {
          futures[$add](dart.nullCast(this[_rawContent], input_stream.InputStreamBase).close());
        }
        this[_content] = null;
        this[_rawContent] = null;
        yield async.Future.wait(dart.void, futures);
      }).bind(this));
    }
    decompress(output = null) {
      if (this[_content] == null && this[_rawContent] != null) {
        if (this[_compressionType$] === 8) {
          if (output != null) {
            new inflate.Inflate.stream(dart.nullCheck(this[_rawContent]), output);
          } else {
            this[_content] = inflate_buffer.inflateBuffer(dart.nullCheck(this[_rawContent]).toUint8List());
          }
        } else {
          if (output != null) {
            output.writeInputStream(dart.nullCheck(this[_rawContent]));
          } else {
            this[_content] = dart.nullCheck(this[_rawContent]).toUint8List();
          }
        }
        this[_compressionType$] = 0;
      }
    }
    get isCompressed() {
      return this[_compressionType$] !== 0;
    }
    get compressionType() {
      return this[_compressionType$];
    }
    get rawContent() {
      return this[_rawContent];
    }
    toString() {
      return this.name;
    }
  };
  (archive_file.ArchiveFile.new = function(name, size, content, _compressionType = 0) {
    this[size$] = 0;
    this[mode] = 420;
    this[ownerId] = 0;
    this[groupId] = 0;
    this[lastModTime] = (new core.DateTime.now().millisecondsSinceEpoch / 1000)[$truncate]();
    this[isFile] = true;
    this[isSymbolicLink] = false;
    this[nameOfLinkedFile] = "";
    this[crc32] = null;
    this[comment] = null;
    this[compress] = true;
    this[_rawContent] = null;
    this[_content] = null;
    this[name$] = name;
    this[size$] = size;
    this[_compressionType$] = _compressionType;
    this.name = this.name[$replaceAll]("\\", "/");
    if (typed_data.Uint8List.is(content)) {
      this[_content] = content;
      this[_rawContent] = new input_stream.InputStream.new(this[_content]);
      if (this.size <= 0) {
        this.size = content[$length];
      }
    } else if (input_stream.InputStream.is(content)) {
      this[_rawContent] = new input_stream.InputStream.from(content);
      if (this.size <= 0) {
        this.size = content.length;
      }
    } else if (input_stream.InputStreamBase.is(content)) {
      this[_rawContent] = content;
      if (this.size <= 0) {
        this.size = content.length;
      }
    } else if (typed_data.TypedData.is(content)) {
      this[_content] = typed_data.Uint8List.view(content[$buffer]);
      this[_rawContent] = new input_stream.InputStream.new(this[_content]);
      if (this.size <= 0) {
        this.size = typed_data.Uint8List.as(this[_content])[$length];
      }
    } else if (typeof content == 'string') {
      this[_content] = content[$codeUnits];
      this[_rawContent] = new input_stream.InputStream.new(this[_content]);
      if (this.size <= 0) {
        this.size = content[$codeUnits][$length] + 1;
      }
    } else if (T.ListOfint().is(content)) {
      this[_content] = content;
      this[_rawContent] = new input_stream.InputStream.new(this[_content]);
      if (this.size <= 0) {
        this.size = content[$length];
      }
    }
  }).prototype = archive_file.ArchiveFile.prototype;
  (archive_file.ArchiveFile.string = function(name, content, _compressionType = 0) {
    this[size$] = 0;
    this[mode] = 420;
    this[ownerId] = 0;
    this[groupId] = 0;
    this[lastModTime] = (new core.DateTime.now().millisecondsSinceEpoch / 1000)[$truncate]();
    this[isFile] = true;
    this[isSymbolicLink] = false;
    this[nameOfLinkedFile] = "";
    this[crc32] = null;
    this[comment] = null;
    this[compress] = true;
    this[_rawContent] = null;
    this[_content] = null;
    this[name$] = name;
    this[_compressionType$] = _compressionType;
    this.size = content.length;
    this[_content] = _native_typed_data.NativeUint8List.fromList(content[$codeUnits]);
    this[_rawContent] = new input_stream.InputStream.new(this[_content]);
  }).prototype = archive_file.ArchiveFile.prototype;
  (archive_file.ArchiveFile.noCompress = function(name, size, content) {
    this[size$] = 0;
    this[mode] = 420;
    this[ownerId] = 0;
    this[groupId] = 0;
    this[lastModTime] = (new core.DateTime.now().millisecondsSinceEpoch / 1000)[$truncate]();
    this[isFile] = true;
    this[isSymbolicLink] = false;
    this[nameOfLinkedFile] = "";
    this[crc32] = null;
    this[comment] = null;
    this[compress] = true;
    this[_rawContent] = null;
    this[_content] = null;
    this[_compressionType$] = null;
    this[name$] = name;
    this[size$] = size;
    this.name = this.name[$replaceAll]("\\", "/");
    this.compress = false;
    if (typed_data.Uint8List.is(content)) {
      this[_content] = content;
      this[_rawContent] = new input_stream.InputStream.new(this[_content]);
    } else if (input_stream.InputStream.is(content)) {
      this[_rawContent] = new input_stream.InputStream.from(content);
    }
  }).prototype = archive_file.ArchiveFile.prototype;
  (archive_file.ArchiveFile.stream = function(name, size, contentStream) {
    this[size$] = 0;
    this[mode] = 420;
    this[ownerId] = 0;
    this[groupId] = 0;
    this[lastModTime] = (new core.DateTime.now().millisecondsSinceEpoch / 1000)[$truncate]();
    this[isFile] = true;
    this[isSymbolicLink] = false;
    this[nameOfLinkedFile] = "";
    this[crc32] = null;
    this[comment] = null;
    this[compress] = true;
    this[_rawContent] = null;
    this[_content] = null;
    this[_compressionType$] = null;
    this[name$] = name;
    this[size$] = size;
    this.name = this.name[$replaceAll]("\\", "/");
    this.compress = true;
    this[_content] = contentStream;
    this[_compressionType$] = 0;
  }).prototype = archive_file.ArchiveFile.prototype;
  dart.addTypeTests(archive_file.ArchiveFile);
  dart.addTypeCaches(archive_file.ArchiveFile);
  dart.setMethodSignature(archive_file.ArchiveFile, () => ({
    __proto__: dart.getMethods(archive_file.ArchiveFile.__proto__),
    writeContent: dart.fnType(dart.void, [output_stream.OutputStreamBase], {freeMemory: core.bool}, {}),
    clear: dart.fnType(dart.void, []),
    close: dart.fnType(async.Future$(dart.void), []),
    decompress: dart.fnType(dart.void, [], [dart.nullable(output_stream.OutputStreamBase)])
  }));
  dart.setGetterSignature(archive_file.ArchiveFile, () => ({
    __proto__: dart.getGetters(archive_file.ArchiveFile.__proto__),
    unixPermissions: core.int,
    content: dart.dynamic,
    isCompressed: core.bool,
    compressionType: dart.nullable(core.int),
    rawContent: dart.nullable(input_stream.InputStreamBase)
  }));
  dart.setLibraryUri(archive_file.ArchiveFile, I[0]);
  dart.setFieldSignature(archive_file.ArchiveFile, () => ({
    __proto__: dart.getFields(archive_file.ArchiveFile.__proto__),
    name: dart.fieldType(core.String),
    size: dart.fieldType(core.int),
    mode: dart.fieldType(core.int),
    ownerId: dart.fieldType(core.int),
    groupId: dart.fieldType(core.int),
    lastModTime: dart.fieldType(core.int),
    isFile: dart.fieldType(core.bool),
    isSymbolicLink: dart.fieldType(core.bool),
    nameOfLinkedFile: dart.fieldType(core.String),
    crc32: dart.fieldType(dart.nullable(core.int)),
    comment: dart.fieldType(dart.nullable(core.String)),
    compress: dart.fieldType(core.bool),
    [_compressionType$]: dart.fieldType(dart.nullable(core.int)),
    [_rawContent]: dart.fieldType(dart.nullable(input_stream.InputStreamBase)),
    [_content]: dart.fieldType(dart.dynamic)
  }));
  dart.setStaticFieldSignature(archive_file.ArchiveFile, () => ['STORE', 'DEFLATE']);
  dart.defineExtensionMethods(archive_file.ArchiveFile, ['toString']);
  dart.defineLazy(archive_file.ArchiveFile, {
    /*archive_file.ArchiveFile.STORE*/get STORE() {
      return 0;
    },
    /*archive_file.ArchiveFile.DEFLATE*/get DEFLATE() {
      return 8;
    }
  }, false);
  dart.trackLibraries("packages/archive/src/archive_file.dart", {
    "package:archive/src/archive_file.dart": archive_file
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["archive_file.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/archive/src/archive_file.dart.lib.js"}');
  // Exports:
  return {
    src__archive_file: archive_file
  };
}));

//# sourceMappingURL=archive_file.dart.lib.js.map
