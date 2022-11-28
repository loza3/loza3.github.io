define(['dart_sdk', 'packages/archive/src/zip/zip_file.dart', 'packages/archive/src/util/archive_exception.dart', 'packages/archive/src/util/input_stream.dart'], (function load__packages__archive__src__zip__zip_directory_dart(dart_sdk, packages__archive__src__zip__zip_file$46dart, packages__archive__src__util__archive_exception$46dart, packages__archive__src__util__input_stream$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const zip_file_header = packages__archive__src__zip__zip_file$46dart.src__zip__zip_file_header;
  const archive_exception = packages__archive__src__util__archive_exception$46dart.src__util__archive_exception;
  const input_stream = packages__archive__src__util__input_stream$46dart.src__util__input_stream;
  var zip_directory = Object.create(dart.library);
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfZipFileHeader: () => (T.JSArrayOfZipFileHeader = dart.constFn(_interceptors.JSArray$(zip_file_header.ZipFileHeader)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:archive/src/zip/zip_directory.dart"];
  var filePosition = dart.privateName(zip_directory, "ZipDirectory.filePosition");
  var numberOfThisDisk = dart.privateName(zip_directory, "ZipDirectory.numberOfThisDisk");
  var diskWithTheStartOfTheCentralDirectory = dart.privateName(zip_directory, "ZipDirectory.diskWithTheStartOfTheCentralDirectory");
  var totalCentralDirectoryEntriesOnThisDisk = dart.privateName(zip_directory, "ZipDirectory.totalCentralDirectoryEntriesOnThisDisk");
  var totalCentralDirectoryEntries = dart.privateName(zip_directory, "ZipDirectory.totalCentralDirectoryEntries");
  var zipFileComment = dart.privateName(zip_directory, "ZipDirectory.zipFileComment");
  var fileHeaders = dart.privateName(zip_directory, "ZipDirectory.fileHeaders");
  var __ZipDirectory_centralDirectorySize = dart.privateName(zip_directory, "_#ZipDirectory#centralDirectorySize");
  var __ZipDirectory_centralDirectoryOffset = dart.privateName(zip_directory, "_#ZipDirectory#centralDirectoryOffset");
  var _findSignature = dart.privateName(zip_directory, "_findSignature");
  var _readZip64Data = dart.privateName(zip_directory, "_readZip64Data");
  zip_directory.ZipDirectory = class ZipDirectory extends core.Object {
    get filePosition() {
      return this[filePosition];
    }
    set filePosition(value) {
      this[filePosition] = value;
    }
    get numberOfThisDisk() {
      return this[numberOfThisDisk];
    }
    set numberOfThisDisk(value) {
      this[numberOfThisDisk] = value;
    }
    get diskWithTheStartOfTheCentralDirectory() {
      return this[diskWithTheStartOfTheCentralDirectory];
    }
    set diskWithTheStartOfTheCentralDirectory(value) {
      this[diskWithTheStartOfTheCentralDirectory] = value;
    }
    get totalCentralDirectoryEntriesOnThisDisk() {
      return this[totalCentralDirectoryEntriesOnThisDisk];
    }
    set totalCentralDirectoryEntriesOnThisDisk(value) {
      this[totalCentralDirectoryEntriesOnThisDisk] = value;
    }
    get totalCentralDirectoryEntries() {
      return this[totalCentralDirectoryEntries];
    }
    set totalCentralDirectoryEntries(value) {
      this[totalCentralDirectoryEntries] = value;
    }
    get zipFileComment() {
      return this[zipFileComment];
    }
    set zipFileComment(value) {
      this[zipFileComment] = value;
    }
    get fileHeaders() {
      return this[fileHeaders];
    }
    set fileHeaders(value) {
      this[fileHeaders] = value;
    }
    get centralDirectorySize() {
      let t0;
      t0 = this[__ZipDirectory_centralDirectorySize];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("centralDirectorySize")) : t0;
    }
    set centralDirectorySize(centralDirectorySize$35param) {
      this[__ZipDirectory_centralDirectorySize] = centralDirectorySize$35param;
    }
    get centralDirectoryOffset() {
      let t0;
      t0 = this[__ZipDirectory_centralDirectoryOffset];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("centralDirectoryOffset")) : t0;
    }
    set centralDirectoryOffset(centralDirectoryOffset$35param) {
      this[__ZipDirectory_centralDirectoryOffset] = centralDirectoryOffset$35param;
    }
    static ['_#new#tearOff']() {
      return new zip_directory.ZipDirectory.new();
    }
    static ['_#read#tearOff'](input, opts) {
      let password = opts && 'password' in opts ? opts.password : null;
      return new zip_directory.ZipDirectory.read(input, {password: password});
    }
    [_readZip64Data](input) {
      let ip = input.position;
      let locPos = this.filePosition - 20;
      if (locPos < 0) {
        return;
      }
      let zip64 = input.subset(locPos, 20);
      let sig = zip64.readUint32();
      if (sig !== 117853008) {
        input.position = ip;
        return;
      }
      let startZip64Disk = zip64.readUint32();
      let zip64DirOffset = zip64.readUint64();
      let numZip64Disks = zip64.readUint32();
      input.position = zip64DirOffset;
      sig = input.readUint32();
      if (sig !== 101075792) {
        input.position = ip;
        return;
      }
      let zip64EOCDSize = input.readUint64();
      let zip64Version = input.readUint16();
      let zip64VersionNeeded = input.readUint16();
      let zip64DiskNumber = input.readUint32();
      let zip64StartDisk = input.readUint32();
      let zip64NumEntriesOnDisk = input.readUint64();
      let zip64NumEntries = input.readUint64();
      let dirSize = input.readUint64();
      let dirOffset = input.readUint64();
      this.numberOfThisDisk = zip64DiskNumber;
      this.diskWithTheStartOfTheCentralDirectory = zip64StartDisk;
      this.totalCentralDirectoryEntriesOnThisDisk = zip64NumEntriesOnDisk;
      this.totalCentralDirectoryEntries = zip64NumEntries;
      this.centralDirectorySize = dirSize;
      this.centralDirectoryOffset = dirOffset;
      input.position = ip;
    }
    [_findSignature](input) {
      let pos = input.position;
      let length = input.length;
      for (let ip = length - 5; ip >= 0; ip = ip - 1) {
        input.position = ip;
        let sig = input.readUint32();
        if (sig === 101010256) {
          input.position = pos;
          return ip;
        }
      }
      dart.throw(new archive_exception.ArchiveException.new("Could not find End of Central Directory Record"));
    }
  };
  (zip_directory.ZipDirectory.new = function() {
    this[filePosition] = -1;
    this[numberOfThisDisk] = 0;
    this[diskWithTheStartOfTheCentralDirectory] = 0;
    this[totalCentralDirectoryEntriesOnThisDisk] = 0;
    this[totalCentralDirectoryEntries] = 0;
    this[__ZipDirectory_centralDirectorySize] = null;
    this[__ZipDirectory_centralDirectoryOffset] = null;
    this[zipFileComment] = "";
    this[fileHeaders] = T.JSArrayOfZipFileHeader().of([]);
    ;
  }).prototype = zip_directory.ZipDirectory.prototype;
  (zip_directory.ZipDirectory.read = function(input, opts) {
    let password = opts && 'password' in opts ? opts.password : null;
    this[filePosition] = -1;
    this[numberOfThisDisk] = 0;
    this[diskWithTheStartOfTheCentralDirectory] = 0;
    this[totalCentralDirectoryEntriesOnThisDisk] = 0;
    this[totalCentralDirectoryEntries] = 0;
    this[__ZipDirectory_centralDirectorySize] = null;
    this[__ZipDirectory_centralDirectoryOffset] = null;
    this[zipFileComment] = "";
    this[fileHeaders] = T.JSArrayOfZipFileHeader().of([]);
    this.filePosition = this[_findSignature](input);
    input.position = this.filePosition;
    let signature = input.readUint32();
    this.numberOfThisDisk = input.readUint16();
    this.diskWithTheStartOfTheCentralDirectory = input.readUint16();
    this.totalCentralDirectoryEntriesOnThisDisk = input.readUint16();
    this.totalCentralDirectoryEntries = input.readUint16();
    this.centralDirectorySize = input.readUint32();
    this.centralDirectoryOffset = input.readUint32();
    let len = input.readUint16();
    if (len > 0) {
      this.zipFileComment = input.readString({size: len, utf8: false});
    }
    this[_readZip64Data](input);
    let dirContent = input.subset(this.centralDirectoryOffset, this.centralDirectorySize);
    while (!dirContent.isEOS) {
      let fileSig = dirContent.readUint32();
      if (fileSig !== 33639248) {
        break;
      }
      this.fileHeaders[$add](new zip_file_header.ZipFileHeader.new(dirContent, input, password));
    }
  }).prototype = zip_directory.ZipDirectory.prototype;
  dart.addTypeTests(zip_directory.ZipDirectory);
  dart.addTypeCaches(zip_directory.ZipDirectory);
  dart.setMethodSignature(zip_directory.ZipDirectory, () => ({
    __proto__: dart.getMethods(zip_directory.ZipDirectory.__proto__),
    [_readZip64Data]: dart.fnType(dart.void, [input_stream.InputStreamBase]),
    [_findSignature]: dart.fnType(core.int, [input_stream.InputStreamBase])
  }));
  dart.setGetterSignature(zip_directory.ZipDirectory, () => ({
    __proto__: dart.getGetters(zip_directory.ZipDirectory.__proto__),
    centralDirectorySize: core.int,
    centralDirectoryOffset: core.int
  }));
  dart.setSetterSignature(zip_directory.ZipDirectory, () => ({
    __proto__: dart.getSetters(zip_directory.ZipDirectory.__proto__),
    centralDirectorySize: core.int,
    centralDirectoryOffset: core.int
  }));
  dart.setLibraryUri(zip_directory.ZipDirectory, I[0]);
  dart.setFieldSignature(zip_directory.ZipDirectory, () => ({
    __proto__: dart.getFields(zip_directory.ZipDirectory.__proto__),
    filePosition: dart.fieldType(core.int),
    numberOfThisDisk: dart.fieldType(core.int),
    diskWithTheStartOfTheCentralDirectory: dart.fieldType(core.int),
    totalCentralDirectoryEntriesOnThisDisk: dart.fieldType(core.int),
    totalCentralDirectoryEntries: dart.fieldType(core.int),
    [__ZipDirectory_centralDirectorySize]: dart.fieldType(dart.nullable(core.int)),
    [__ZipDirectory_centralDirectoryOffset]: dart.fieldType(dart.nullable(core.int)),
    zipFileComment: dart.fieldType(core.String),
    fileHeaders: dart.fieldType(core.List$(zip_file_header.ZipFileHeader))
  }));
  dart.setStaticFieldSignature(zip_directory.ZipDirectory, () => ['signature', 'zip64EocdLocatorSignature', 'zip64EocdLocatorSize', 'zip64EocdSignature', 'zip64EocdSize']);
  dart.defineLazy(zip_directory.ZipDirectory, {
    /*zip_directory.ZipDirectory.signature*/get signature() {
      return 101010256;
    },
    /*zip_directory.ZipDirectory.zip64EocdLocatorSignature*/get zip64EocdLocatorSignature() {
      return 117853008;
    },
    /*zip_directory.ZipDirectory.zip64EocdLocatorSize*/get zip64EocdLocatorSize() {
      return 20;
    },
    /*zip_directory.ZipDirectory.zip64EocdSignature*/get zip64EocdSignature() {
      return 101075792;
    },
    /*zip_directory.ZipDirectory.zip64EocdSize*/get zip64EocdSize() {
      return 56;
    }
  }, false);
  dart.trackLibraries("packages/archive/src/zip/zip_directory.dart", {
    "package:archive/src/zip/zip_directory.dart": zip_directory
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["zip_directory.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/archive/src/zip/zip_directory.dart.lib.js"}');
  // Exports:
  return {
    src__zip__zip_directory: zip_directory
  };
}));

//# sourceMappingURL=zip_directory.dart.lib.js.map
