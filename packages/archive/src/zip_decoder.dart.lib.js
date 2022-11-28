define(['dart_sdk', 'packages/archive/src/util/input_stream.dart', 'packages/archive/src/zip/zip_directory.dart', 'packages/archive/src/archive.dart', 'packages/archive/src/util/crc32.dart', 'packages/archive/src/util/archive_exception.dart', 'packages/archive/src/archive_file.dart'], (function load__packages__archive__src__zip_decoder_dart(dart_sdk, packages__archive__src__util__input_stream$46dart, packages__archive__src__zip__zip_directory$46dart, packages__archive__src__archive$46dart, packages__archive__src__util__crc32$46dart, packages__archive__src__util__archive_exception$46dart, packages__archive__src__archive_file$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const input_stream = packages__archive__src__util__input_stream$46dart.src__util__input_stream;
  const zip_directory = packages__archive__src__zip__zip_directory$46dart.src__zip__zip_directory;
  const archive$ = packages__archive__src__archive$46dart.src__archive;
  const crc32 = packages__archive__src__util__crc32$46dart.src__util__crc32;
  const archive_exception = packages__archive__src__util__archive_exception$46dart.src__util__archive_exception;
  const archive_file = packages__archive__src__archive_file$46dart.src__archive_file;
  var zip_decoder = Object.create(dart.library);
  var $rightShift = dartx['>>'];
  var $endsWith = dartx.endsWith;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:archive/src/zip_decoder.dart"];
  var __ZipDecoder_directory = dart.privateName(zip_decoder, "_#ZipDecoder#directory");
  zip_decoder.ZipDecoder = class ZipDecoder extends core.Object {
    get directory() {
      let t0;
      t0 = this[__ZipDecoder_directory];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("directory")) : t0;
    }
    set directory(directory$35param) {
      this[__ZipDecoder_directory] = directory$35param;
    }
    decodeBytes(data, opts) {
      let verify = opts && 'verify' in opts ? opts.verify : false;
      let password = opts && 'password' in opts ? opts.password : null;
      return this.decodeBuffer(new input_stream.InputStream.new(data), {verify: verify, password: password});
    }
    decodeBuffer(input, opts) {
      let verify = opts && 'verify' in opts ? opts.verify : false;
      let password = opts && 'password' in opts ? opts.password : null;
      this.directory = new zip_directory.ZipDirectory.read(input, {password: password});
      let archive = new archive$.Archive.new();
      for (let zfh of this.directory.fileHeaders) {
        let zf = dart.nullCheck(zfh.file);
        let mode = dart.nullCheck(zfh.externalFileAttributes);
        let compress = zf.compressionMethod !== 0;
        if (verify) {
          let computedCrc = crc32.getCrc32(zf.content);
          if (computedCrc !== zf.crc32) {
            dart.throw(new archive_exception.ArchiveException.new("Invalid CRC for file in archive."));
          }
        }
        let content = zf.rawContent;
        let file = new archive_file.ArchiveFile.new(zf.filename, dart.nullCheck(zf.uncompressedSize), content, zf.compressionMethod);
        file.mode = mode[$rightShift](16);
        if (zfh.versionMadeBy[$rightShift](8) === 3) {
          let isFile = (file.mode & 258048) === 32768;
          file.isFile = isFile;
        } else {
          file.isFile = !file.name[$endsWith]("/");
        }
        file.crc32 = zf.crc32;
        file.compress = compress;
        file.lastModTime = (zf.lastModFileDate << 16 | zf.lastModFileTime) >>> 0;
        archive.addFile(file);
      }
      return archive;
    }
    static ['_#new#tearOff']() {
      return new zip_decoder.ZipDecoder.new();
    }
  };
  (zip_decoder.ZipDecoder.new = function() {
    this[__ZipDecoder_directory] = null;
    ;
  }).prototype = zip_decoder.ZipDecoder.prototype;
  dart.addTypeTests(zip_decoder.ZipDecoder);
  dart.addTypeCaches(zip_decoder.ZipDecoder);
  dart.setMethodSignature(zip_decoder.ZipDecoder, () => ({
    __proto__: dart.getMethods(zip_decoder.ZipDecoder.__proto__),
    decodeBytes: dart.fnType(archive$.Archive, [core.List$(core.int)], {password: dart.nullable(core.String), verify: core.bool}, {}),
    decodeBuffer: dart.fnType(archive$.Archive, [input_stream.InputStreamBase], {password: dart.nullable(core.String), verify: core.bool}, {})
  }));
  dart.setGetterSignature(zip_decoder.ZipDecoder, () => ({
    __proto__: dart.getGetters(zip_decoder.ZipDecoder.__proto__),
    directory: zip_directory.ZipDirectory
  }));
  dart.setSetterSignature(zip_decoder.ZipDecoder, () => ({
    __proto__: dart.getSetters(zip_decoder.ZipDecoder.__proto__),
    directory: zip_directory.ZipDirectory
  }));
  dart.setLibraryUri(zip_decoder.ZipDecoder, I[0]);
  dart.setFieldSignature(zip_decoder.ZipDecoder, () => ({
    __proto__: dart.getFields(zip_decoder.ZipDecoder.__proto__),
    [__ZipDecoder_directory]: dart.fieldType(dart.nullable(zip_directory.ZipDirectory))
  }));
  dart.trackLibraries("packages/archive/src/zip_decoder.dart", {
    "package:archive/src/zip_decoder.dart": zip_decoder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["zip_decoder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAUoB;;IAAS;kBAAT;;IAAS;gBAEG;UAAY;UAAwB;AAChE,YAAO,mBAAa,iCAAY,IAAI,YAAW,MAAM,YAAY,QAAQ;IAC3E;iBAEqC;UAC3B;UAAwB;AACwB,MAAxD,iBAAyB,oCAAK,KAAK,aAAY,QAAQ;AACjD,oBAAU;AAEhB,eAAW,MAAO,AAAU;AACpB,iBAAa,eAAR,AAAI,GAAD;AAGR,mBAAiC,eAA1B,AAAI,GAAD;AACV,uBAAW,AAAG,AAAkB,EAAnB;AAEnB,YAAI,MAAM;AACF,4BAAc,eAAS,AAAG,EAAD;AAC/B,cAAI,WAAW,KAAI,AAAG,EAAD;AACuC,YAA1D,WAAM,2CAAiB;;;AAInB,sBAAU,AAAG,EAAD;AAChB,mBAAO,iCACP,AAAG,EAAD,WAA8B,eAAnB,AAAG,EAAD,oBAAoB,OAAO,EAAE,AAAG,EAAD;AAE5B,QAAtB,AAAK,IAAD,QAAQ,AAAK,IAAD,cAAI;AAIpB,YAAI,AAAI,AAAc,AAAK,GAApB,4BAAkB,OAAK;AAEtB,uBAA6B,CAApB,AAAK,AAAK,IAAN,QAAQ,YAAW;AAClB,UAApB,AAAK,IAAD,UAAU,MAAM;;AAEkB,UAAtC,AAAK,IAAD,WAAW,AAAK,AAAK,IAAN,iBAAe;;AAGf,QAArB,AAAK,IAAD,SAAS,AAAG,EAAD;AACS,QAAxB,AAAK,IAAD,YAAY,QAAQ;AACwC,QAAhE,AAAK,IAAD,eAAwC,CAAzB,AAAG,AAAgB,EAAjB,oBAAoB,KAAK,AAAG,EAAD;AAE3B,QAArB,AAAQ,OAAD,SAAS,IAAI;;AAGtB,YAAO,QAAO;IAChB;;;;;;mCAjDkB;;EAkDpB","file":"../../../../../../../../../../../packages/archive/src/zip_decoder.dart.lib.js"}');
  // Exports:
  return {
    src__zip_decoder: zip_decoder
  };
}));

//# sourceMappingURL=zip_decoder.dart.lib.js.map
