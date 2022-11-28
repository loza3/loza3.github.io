define(['dart_sdk'], (function load__packages__flare_flutter__base__json_reader_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _native_typed_data = dart_sdk._native_typed_data;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var json_reader = Object.create(dart.library);
  var json_block_reader = Object.create(dart.library);
  var binary_reader = Object.create(dart.library);
  var block_reader = Object.create(dart.library);
  var stream_reader = Object.create(dart.library);
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $removeAt = dartx.removeAt;
  var $toDouble = dartx.toDouble;
  var $length = dartx.length;
  var $first = dartx.first;
  var $toInt = dartx.toInt;
  var $_set = dartx._set;
  var $offsetInBytes = dartx.offsetInBytes;
  var $buffer = dartx.buffer;
  var $asByteData = dartx.asByteData;
  var $getFloat32 = dartx.getFloat32;
  var $getFloat64 = dartx.getFloat64;
  var $getUint8 = dartx.getUint8;
  var $lengthInBytes = dartx.lengthInBytes;
  var $getInt8 = dartx.getInt8;
  var $getUint16 = dartx.getUint16;
  var $getInt16 = dartx.getInt16;
  var $getUint32 = dartx.getUint32;
  var $getInt32 = dartx.getInt32;
  var $rightShift = dartx['>>'];
  var $asUint8List = dartx.asUint8List;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: convert.Base64Decoder.prototype
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:flare_flutter/base/json_reader.dart",
    "package:flare_flutter/base/json_block_reader.dart",
    "package:flare_flutter/base/binary_reader.dart",
    "package:flare_flutter/base/block_reader.dart",
    "package:flare_flutter/base/stream_reader.dart"
  ];
  var _context = dart.privateName(json_reader, "_context");
  var _readObject = dart.privateName(json_reader, "_readObject");
  var _readArray = dart.privateName(json_reader, "_readArray");
  var _readLength = dart.privateName(json_reader, "_readLength");
  json_reader.JSONReader = class JSONReader extends core.Object {
    readProp(T, label) {
      let head = this[_context].first;
      if (core.Map.is(head)) {
        let prop = head[$_get](label);
        head[$remove](label);
        if (T.is(prop)) {
          return prop;
        } else {
          return null;
        }
      } else if (core.List.is(head)) {
        let prop = head[$removeAt](0);
        if (T.is(prop)) {
          return prop;
        } else {
          return null;
        }
      }
      return null;
    }
    readFloat32(label) {
      let t0, t0$;
      let f = this.readProp(core.num, label);
      t0$ = (t0 = f, t0 == null ? null : t0[$toDouble]());
      return t0$ == null ? 0.0 : t0$;
    }
    readFloat32Array(length, label) {
      let ar = _native_typed_data.NativeFloat32List.new(length);
      this[_readArray](ar, label);
      return ar;
    }
    [_readArray](ar, label) {
      let array = this.readProp(core.List, label);
      if (array == null) {
        return;
      }
      for (let i = 0; i < ar[$length]; i = i + 1) {
        let val = core.num.as(array[$_get](i));
        ar[$_set](i, typeof ar[$first] == 'number' ? val[$toDouble]() : val[$toInt]());
      }
    }
    readFloat64(label) {
      let t0, t0$;
      let f = this.readProp(core.num, label);
      t0$ = (t0 = f, t0 == null ? null : t0[$toDouble]());
      return t0$ == null ? 0.0 : t0$;
    }
    readUint8(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readUint8Length() {
      return this[_readLength]();
    }
    isEOF() {
      return this[_context].length <= 1 && dart.equals(dart.dload(this[_readObject], 'length'), 0);
    }
    readInt8(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readUint16(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readUint8Array(length, label) {
      let ar = _native_typed_data.NativeUint8List.new(length);
      this[_readArray](ar, label);
      return ar;
    }
    readUint16Array(length, label) {
      let ar = _native_typed_data.NativeUint16List.new(length);
      this[_readArray](ar, label);
      return ar;
    }
    readInt16(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readUint16Length() {
      return this[_readLength]();
    }
    readUint32Length() {
      return this[_readLength]();
    }
    readUint32(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readInt32(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readVersion() {
      let t0;
      t0 = this.readProp(core.int, "version");
      return t0 == null ? 0 : t0;
    }
    readString(label) {
      let t0;
      t0 = this.readProp(core.String, label);
      return t0 == null ? "" : t0;
    }
    readBool(label) {
      let t0;
      t0 = this.readProp(core.bool, label);
      return t0 == null ? false : t0;
    }
    readId(label) {
      let val = this.readProp(core.num, label);
      return val != null ? val[$toInt]() + 1 : 0;
    }
    openArray(label) {
      let array = this.readProp(dart.dynamic, label);
      this[_context].addFirst(array);
    }
    closeArray() {
      this[_context].removeFirst();
    }
    openObject(label) {
      let o = this.readProp(dart.dynamic, label);
      this[_context].addFirst(o);
    }
    closeObject() {
      this[_context].removeFirst();
    }
    [_readLength]() {
      if (core.List.is(this[_context].first)) {
        return core.List.as(this[_context].first)[$length];
      } else if (core.Map.is(this[_context].first)) {
        return core.Map.as(this[_context].first)[$length];
      }
      return 0;
    }
    readAsset() {
      let encodedAsset = this.readString("data");
      return (C[0] || CT.C0).convert(encodedAsset, 22);
    }
    get containerType() {
      return "json";
    }
    get context() {
      return this[_context];
    }
  };
  (json_reader.JSONReader.new = function(object) {
    this[_context] = new collection.ListQueue.new();
    this[_readObject] = object[$_get]("container");
    this[_context].addFirst(this[_readObject]);
  }).prototype = json_reader.JSONReader.prototype;
  dart.addTypeTests(json_reader.JSONReader);
  dart.addTypeCaches(json_reader.JSONReader);
  json_reader.JSONReader[dart.implements] = () => [stream_reader.StreamReader];
  dart.setMethodSignature(json_reader.JSONReader, () => ({
    __proto__: dart.getMethods(json_reader.JSONReader.__proto__),
    readProp: dart.gFnType(T => [dart.nullable(T), [core.String]], T => [dart.nullable(core.Object)]),
    readFloat32: dart.fnType(core.double, [core.String]),
    readFloat32Array: dart.fnType(typed_data.Float32List, [core.int, core.String]),
    [_readArray]: dart.fnType(dart.void, [core.List, core.String]),
    readFloat64: dart.fnType(core.double, [core.String]),
    readUint8: dart.fnType(core.int, [core.String]),
    readUint8Length: dart.fnType(core.int, []),
    isEOF: dart.fnType(core.bool, []),
    readInt8: dart.fnType(core.int, [core.String]),
    readUint16: dart.fnType(core.int, [core.String]),
    readUint8Array: dart.fnType(typed_data.Uint8List, [core.int, core.String]),
    readUint16Array: dart.fnType(typed_data.Uint16List, [core.int, core.String]),
    readInt16: dart.fnType(core.int, [core.String]),
    readUint16Length: dart.fnType(core.int, []),
    readUint32Length: dart.fnType(core.int, []),
    readUint32: dart.fnType(core.int, [core.String]),
    readInt32: dart.fnType(core.int, [core.String]),
    readVersion: dart.fnType(core.int, []),
    readString: dart.fnType(core.String, [core.String]),
    readBool: dart.fnType(core.bool, [core.String]),
    readId: dart.fnType(core.int, [core.String]),
    openArray: dart.fnType(dart.void, [core.String]),
    closeArray: dart.fnType(dart.void, []),
    openObject: dart.fnType(dart.void, [core.String]),
    closeObject: dart.fnType(dart.void, []),
    [_readLength]: dart.fnType(core.int, []),
    readAsset: dart.fnType(typed_data.Uint8List, [])
  }));
  dart.setGetterSignature(json_reader.JSONReader, () => ({
    __proto__: dart.getGetters(json_reader.JSONReader.__proto__),
    containerType: core.String,
    context: collection.ListQueue
  }));
  dart.setLibraryUri(json_reader.JSONReader, I[0]);
  dart.setFieldSignature(json_reader.JSONReader, () => ({
    __proto__: dart.getFields(json_reader.JSONReader.__proto__),
    [_readObject]: dart.finalFieldType(dart.dynamic),
    [_context]: dart.finalFieldType(collection.ListQueue)
  }));
  var blockType$ = dart.privateName(json_block_reader, "JSONBlockReader.blockType");
  var _peek = dart.privateName(json_block_reader, "_peek");
  json_block_reader.JSONBlockReader = class JSONBlockReader extends json_reader.JSONReader {
    get blockType() {
      return this[blockType$];
    }
    set blockType(value) {
      this[blockType$] = value;
    }
    static ['_#new#tearOff'](object) {
      return new json_block_reader.JSONBlockReader.new(object);
    }
    static ['_#fromObject#tearOff'](blockType, object) {
      return new json_block_reader.JSONBlockReader.fromObject(blockType, object);
    }
    readNextBlock(blockTypes) {
      if (this.isEOF()) {
        return null;
      }
      let obj = new _js_helper.LinkedMap.new();
      obj[$_set]("container", this[_peek]());
      let type = this.readBlockType(blockTypes);
      let c = this.context.first;
      if (core.Map.is(c)) {
        c[$remove](this.nextKey);
      } else if (core.List.is(c)) {
        c[$removeAt](0);
      }
      return new json_block_reader.JSONBlockReader.fromObject(type, obj);
    }
    readBlockType(blockTypes) {
      let next = this[_peek]();
      if (core.Map.is(next)) {
        let c = this.context.first;
        if (core.Map.is(c)) {
          return dart.nullCheck(blockTypes[$_get](this.nextKey));
        } else if (core.List.is(c)) {
          return dart.nullCheck(blockTypes[$_get](next[$_get]("type")));
        }
      } else if (core.List.is(next)) {
        return dart.nullCheck(blockTypes[$_get](this.nextKey));
      }
      return 0;
    }
    [_peek]() {
      let stream = this.context.first;
      let next = null;
      if (core.Map.is(stream)) {
        next = stream[$_get](this.nextKey);
      } else if (core.List.is(stream)) {
        next = stream[$_get](0);
      }
      return next;
    }
    get nextKey() {
      return dart.dload(dart.dload(this.context.first, 'keys'), 'first');
    }
  };
  (json_block_reader.JSONBlockReader.new = function(object) {
    this[blockType$] = 0;
    json_block_reader.JSONBlockReader.__proto__.new.call(this, object);
    ;
  }).prototype = json_block_reader.JSONBlockReader.prototype;
  (json_block_reader.JSONBlockReader.fromObject = function(blockType, object) {
    this[blockType$] = blockType;
    json_block_reader.JSONBlockReader.__proto__.new.call(this, object);
    ;
  }).prototype = json_block_reader.JSONBlockReader.prototype;
  dart.addTypeTests(json_block_reader.JSONBlockReader);
  dart.addTypeCaches(json_block_reader.JSONBlockReader);
  dart.setMethodSignature(json_block_reader.JSONBlockReader, () => ({
    __proto__: dart.getMethods(json_block_reader.JSONBlockReader.__proto__),
    readNextBlock: dart.fnType(dart.nullable(json_block_reader.JSONBlockReader), [core.Map$(core.String, core.int)]),
    readBlockType: dart.fnType(core.int, [core.Map$(core.String, core.int)]),
    [_peek]: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(json_block_reader.JSONBlockReader, () => ({
    __proto__: dart.getGetters(json_block_reader.JSONBlockReader.__proto__),
    nextKey: dart.dynamic
  }));
  dart.setLibraryUri(json_block_reader.JSONBlockReader, I[1]);
  dart.setFieldSignature(json_block_reader.JSONBlockReader, () => ({
    __proto__: dart.getFields(json_block_reader.JSONBlockReader.__proto__),
    blockType: dart.fieldType(core.int)
  }));
  var _readIndex = dart.privateName(binary_reader, "_readIndex");
  var _raw = dart.privateName(binary_reader, "_raw");
  binary_reader.BinaryReader = class BinaryReader extends core.Object {
    get raw() {
      return this[_raw];
    }
    get readIndex() {
      return this[_readIndex];
    }
    readBytes(length) {
      let offset = this[_readIndex] + this.raw[$offsetInBytes];
      this[_readIndex] = this[_readIndex] + length;
      return this.raw[$buffer][$asByteData](offset, length);
    }
    readFloat32(label = null) {
      let value = this[_raw][$getFloat32](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = this[_readIndex] + 4;
      return value;
    }
    readFloat64(label = null) {
      let value = this[_raw][$getFloat64](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = this[_readIndex] + 8;
      return value;
    }
    readUint8(label = null) {
      let t0;
      return this[_raw][$getUint8]((t0 = this[_readIndex], this[_readIndex] = t0 + 1, t0));
    }
    isEOF() {
      return this[_readIndex] >= this[_raw][$lengthInBytes];
    }
    readInt8(label = null) {
      let t0;
      return this[_raw][$getInt8]((t0 = this[_readIndex], this[_readIndex] = t0 + 1, t0));
    }
    readUint16(label = null) {
      let value = this[_raw][$getUint16](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = this[_readIndex] + 2;
      return value;
    }
    readUint16Array(length, label = null) {
      let list = _native_typed_data.NativeUint16List.new(length);
      for (let i = 0; i < length; i = i + 1) {
        list[$_set](i, this[_raw][$getUint16](this[_readIndex], typed_data.Endian.little));
        this[_readIndex] = this[_readIndex] + 2;
      }
      return list;
    }
    readInt16(label = null) {
      let value = this[_raw][$getInt16](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = this[_readIndex] + 2;
      return value;
    }
    readUint32(label = null) {
      let value = this[_raw][$getUint32](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = this[_readIndex] + 4;
      return value;
    }
    readInt32(label = null) {
      let value = this[_raw][$getInt32](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = this[_readIndex] + 4;
      return value;
    }
    readString(label = null) {
      let length = this.readUint32();
      let end = this[_readIndex] + length;
      let stringBuffer = new core.StringBuffer.new();
      while (this[_readIndex] < end) {
        let c1 = this.readUint8();
        if (c1 < 128) {
          stringBuffer.writeCharCode(c1);
        } else if (c1 > 191 && c1 < 224) {
          let c2 = this.readUint8();
          stringBuffer.writeCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
          let c2 = this.readUint8();
          let c3 = this.readUint8();
          let c4 = this.readUint8();
          let u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
          stringBuffer.writeCharCode(55296 + u[$rightShift](10));
          stringBuffer.writeCharCode(56320 + (u & 1023));
        } else {
          let c2 = this.readUint8();
          let c3 = this.readUint8();
          stringBuffer.writeCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
      }
      return stringBuffer.toString();
    }
    readUint8Array(length, label = null) {
      let offset = this[_readIndex] + this[_raw][$offsetInBytes];
      this[_readIndex] = this[_readIndex] + length;
      return this[_raw][$buffer][$asUint8List](offset, length);
    }
    readVersion() {
      return this.readUint32();
    }
    readUint8Length() {
      return this.readUint8();
    }
    readUint32Length() {
      return this.readUint32();
    }
    readUint16Length() {
      return this.readUint16();
    }
    readId(label) {
      return this.readUint16(label);
    }
    readFloat32Array(length, label) {
      let list = _native_typed_data.NativeFloat32List.new(length);
      for (let i = 0; i < length; i = i + 1) {
        list[$_set](i, this[_raw][$getFloat32](this[_readIndex], typed_data.Endian.little));
        this[_readIndex] = this[_readIndex] + 4;
      }
      return list;
    }
    readBool(label) {
      return this.readUint8(label) === 1;
    }
    readAsset() {
      let length = this.readUint32();
      return this.readUint8Array(length);
    }
    openArray(label) {
    }
    closeArray() {
    }
    openObject(label) {
    }
    closeObject() {
    }
    get containerType() {
      return "bin";
    }
  };
  (binary_reader.BinaryReader.new = function(data) {
    this[_readIndex] = 0;
    this[_raw] = data;
    ;
  }).prototype = binary_reader.BinaryReader.prototype;
  dart.addTypeTests(binary_reader.BinaryReader);
  dart.addTypeCaches(binary_reader.BinaryReader);
  binary_reader.BinaryReader[dart.implements] = () => [stream_reader.StreamReader];
  dart.setMethodSignature(binary_reader.BinaryReader, () => ({
    __proto__: dart.getMethods(binary_reader.BinaryReader.__proto__),
    readBytes: dart.fnType(typed_data.ByteData, [core.int]),
    readFloat32: dart.fnType(core.double, [], [dart.nullable(core.String)]),
    readFloat64: dart.fnType(core.double, [], [dart.nullable(core.String)]),
    readUint8: dart.fnType(core.int, [], [dart.nullable(core.String)]),
    isEOF: dart.fnType(core.bool, []),
    readInt8: dart.fnType(core.int, [], [dart.nullable(core.String)]),
    readUint16: dart.fnType(core.int, [], [dart.nullable(core.String)]),
    readUint16Array: dart.fnType(typed_data.Uint16List, [core.int], [dart.nullable(core.String)]),
    readInt16: dart.fnType(core.int, [], [dart.nullable(core.String)]),
    readUint32: dart.fnType(core.int, [], [dart.nullable(core.String)]),
    readInt32: dart.fnType(core.int, [], [dart.nullable(core.String)]),
    readString: dart.fnType(core.String, [], [dart.nullable(core.String)]),
    readUint8Array: dart.fnType(typed_data.Uint8List, [core.int], [dart.nullable(core.String)]),
    readVersion: dart.fnType(core.int, []),
    readUint8Length: dart.fnType(core.int, []),
    readUint32Length: dart.fnType(core.int, []),
    readUint16Length: dart.fnType(core.int, []),
    readId: dart.fnType(core.int, [core.String]),
    readFloat32Array: dart.fnType(typed_data.Float32List, [core.int, core.String]),
    readBool: dart.fnType(core.bool, [core.String]),
    readAsset: dart.fnType(typed_data.Uint8List, []),
    openArray: dart.fnType(dart.void, [core.String]),
    closeArray: dart.fnType(dart.void, []),
    openObject: dart.fnType(dart.void, [core.String]),
    closeObject: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(binary_reader.BinaryReader, () => ({
    __proto__: dart.getGetters(binary_reader.BinaryReader.__proto__),
    raw: typed_data.ByteData,
    readIndex: core.int,
    containerType: core.String
  }));
  dart.setLibraryUri(binary_reader.BinaryReader, I[2]);
  dart.setFieldSignature(binary_reader.BinaryReader, () => ({
    __proto__: dart.getFields(binary_reader.BinaryReader.__proto__),
    [_raw]: dart.finalFieldType(typed_data.ByteData),
    [_readIndex]: dart.fieldType(core.int)
  }));
  var blockType$0 = dart.privateName(block_reader, "BlockReader.blockType");
  block_reader.BlockReader = class BlockReader extends binary_reader.BinaryReader {
    get blockType() {
      return this[blockType$0];
    }
    set blockType(value) {
      this[blockType$0] = value;
    }
    static ['_#new#tearOff'](data) {
      return new block_reader.BlockReader.new(data);
    }
    static ['_#fromBlock#tearOff'](blockType, stream) {
      return new block_reader.BlockReader.fromBlock(blockType, stream);
    }
    readNextBlock(types) {
      if (this.isEOF()) {
        return null;
      }
      let blockType = this.readUint8();
      let length = this.readUint32();
      return new block_reader.BlockReader.fromBlock(blockType, this.readBytes(length));
    }
  };
  (block_reader.BlockReader.new = function(data) {
    this[blockType$0] = 0;
    block_reader.BlockReader.__proto__.new.call(this, data);
    ;
  }).prototype = block_reader.BlockReader.prototype;
  (block_reader.BlockReader.fromBlock = function(blockType, stream) {
    this[blockType$0] = blockType;
    block_reader.BlockReader.__proto__.new.call(this, stream);
    ;
  }).prototype = block_reader.BlockReader.prototype;
  dart.addTypeTests(block_reader.BlockReader);
  dart.addTypeCaches(block_reader.BlockReader);
  dart.setMethodSignature(block_reader.BlockReader, () => ({
    __proto__: dart.getMethods(block_reader.BlockReader.__proto__),
    readNextBlock: dart.fnType(dart.nullable(block_reader.BlockReader), [core.Map$(core.String, core.int)])
  }));
  dart.setLibraryUri(block_reader.BlockReader, I[3]);
  dart.setFieldSignature(block_reader.BlockReader, () => ({
    __proto__: dart.getFields(block_reader.BlockReader.__proto__),
    blockType: dart.fieldType(core.int)
  }));
  var blockType = dart.privateName(stream_reader, "StreamReader.blockType");
  stream_reader.StreamReader = class StreamReader extends core.Object {
    get blockType() {
      return this[blockType];
    }
    set blockType(value) {
      this[blockType] = value;
    }
    static new(data) {
      let t0;
      if (typed_data.ByteData.is(data)) {
        t0 = new block_reader.BlockReader.new(data);
        return (() => {
          t0.readUint8("F");
          t0.readUint8("L");
          t0.readUint8("A");
          t0.readUint8("R");
          t0.readUint8("E");
          return t0;
        })();
      } else if (core.Map.is(data)) {
        return new json_block_reader.JSONBlockReader.new(data);
      } else {
        dart.throw(new core.ArgumentError.new("Unexpected type for data"));
      }
    }
    static ['_#new#tearOff'](data) {
      return stream_reader.StreamReader.new(data);
    }
  };
  (stream_reader.StreamReader[dart.mixinNew] = function() {
    this[blockType] = 0;
  }).prototype = stream_reader.StreamReader.prototype;
  dart.addTypeTests(stream_reader.StreamReader);
  dart.addTypeCaches(stream_reader.StreamReader);
  dart.setStaticMethodSignature(stream_reader.StreamReader, () => ['new']);
  dart.setLibraryUri(stream_reader.StreamReader, I[4]);
  dart.setFieldSignature(stream_reader.StreamReader, () => ({
    __proto__: dart.getFields(stream_reader.StreamReader.__proto__),
    blockType: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/flare_flutter/base/json_reader.dart", {
    "package:flare_flutter/base/json_reader.dart": json_reader,
    "package:flare_flutter/base/json_block_reader.dart": json_block_reader,
    "package:flare_flutter/base/binary_reader.dart": binary_reader,
    "package:flare_flutter/base/block_reader.dart": block_reader,
    "package:flare_flutter/base/stream_reader.dart": stream_reader
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["json_reader.dart","json_block_reader.dart","binary_reader.dart","block_reader.dart","stream_reader.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flare_flutter/base/json_reader.dart.lib.js"}');
  // Exports:
  return {
    base__json_reader: json_reader,
    base__json_block_reader: json_block_reader,
    base__binary_reader: binary_reader,
    base__block_reader: block_reader,
    base__stream_reader: stream_reader
  };
}));

//# sourceMappingURL=json_reader.dart.lib.js.map
