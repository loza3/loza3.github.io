define(['dart_sdk'], (function load__packages__archive__src__util__input_stream_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var input_stream = Object.create(dart.library);
  var $buffer = dartx.buffer;
  var $offsetInBytes = dartx.offsetInBytes;
  var $lengthInBytes = dartx.lengthInBytes;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $leftShift = dartx['<<'];
  var $sublist = dartx.sublist;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:archive/src/util/input_stream.dart"];
  input_stream.InputStreamBase = class InputStreamBase extends core.Object {
    close() {
      return async.async(dart.void, function* close() {
      });
    }
  };
  (input_stream.InputStreamBase.new = function() {
    ;
  }).prototype = input_stream.InputStreamBase.prototype;
  dart.addTypeTests(input_stream.InputStreamBase);
  dart.addTypeCaches(input_stream.InputStreamBase);
  dart.setMethodSignature(input_stream.InputStreamBase, () => ({
    __proto__: dart.getMethods(input_stream.InputStreamBase.__proto__),
    close: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(input_stream.InputStreamBase, I[0]);
  var buffer = dart.privateName(input_stream, "InputStream.buffer");
  var offset = dart.privateName(input_stream, "InputStream.offset");
  var start$ = dart.privateName(input_stream, "InputStream.start");
  var byteOrder$ = dart.privateName(input_stream, "InputStream.byteOrder");
  var __InputStream__length = dart.privateName(input_stream, "_#InputStream#_length");
  var _length = dart.privateName(input_stream, "_length");
  input_stream.InputStream = class InputStream extends input_stream.InputStreamBase {
    get buffer() {
      return this[buffer];
    }
    set buffer(value) {
      this[buffer] = value;
    }
    get offset() {
      return this[offset];
    }
    set offset(value) {
      this[offset] = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      this[start$] = value;
    }
    get byteOrder() {
      return this[byteOrder$];
    }
    set byteOrder(value) {
      this[byteOrder$] = value;
    }
    static ['_#new#tearOff'](data, opts) {
      let byteOrder = opts && 'byteOrder' in opts ? opts.byteOrder : 0;
      let start = opts && 'start' in opts ? opts.start : 0;
      let length = opts && 'length' in opts ? opts.length : null;
      return new input_stream.InputStream.new(data, {byteOrder: byteOrder, start: start, length: length});
    }
    static ['_#from#tearOff'](other) {
      return new input_stream.InputStream.from(other);
    }
    get position() {
      return this.offset - this.start;
    }
    set position(v) {
      this.offset = this.start + v;
    }
    get length() {
      return this[_length] - (this.offset - this.start);
    }
    get isEOS() {
      return this.offset >= this.start + this[_length];
    }
    reset() {
      this.offset = this.start;
    }
    close() {
      return async.async(dart.void, (function* close() {
        this.buffer = T.JSArrayOfint().of([]);
        this[_length] = 0;
      }).bind(this));
    }
    rewind(length = 1) {
      this.offset = this.offset - length;
      if (this.offset < 0) {
        this.offset = 0;
      }
    }
    _get(index) {
      return this.buffer[$_get](this.offset + index);
    }
    subset(position = null, length = null) {
      if (position == null) {
        position = this.offset;
      } else {
        position = dart.notNull(position) + this.start;
      }
      if (length == null || dart.notNull(length) < 0) {
        length = this[_length] - (dart.notNull(position) - this.start);
      }
      return new input_stream.InputStream.new(this.buffer, {byteOrder: this.byteOrder, start: position, length: length});
    }
    indexOf(value, offset = 0) {
      for (let i = this.offset + offset, end = this.offset + this.length; i < end; i = i + 1) {
        if (this.buffer[$_get](i) === value) {
          return i - this.start;
        }
      }
      return -1;
    }
    peekBytes(count, offset = 0) {
      return this.subset(this.offset - this.start + offset, count);
    }
    skip(count) {
      this.offset = this.offset + count;
    }
    readByte() {
      let t0;
      return this.buffer[$_get]((t0 = this.offset, this.offset = t0 + 1, t0));
    }
    readBytes(count) {
      let bytes = this.subset(this.offset - this.start, count);
      this.offset = this.offset + bytes.length;
      return input_stream.InputStream.as(bytes);
    }
    readString(opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      let utf8 = opts && 'utf8' in opts ? opts.utf8 : true;
      if (size == null) {
        let codes = T.JSArrayOfint().of([]);
        if (this.isEOS) {
          return "";
        }
        while (!this.isEOS) {
          let c = this.readByte();
          if (c === 0) {
            break;
          }
          codes[$add](c);
        }
        return utf8 ? new convert.Utf8Decoder.new().convert(codes) : core.String.fromCharCodes(codes);
      }
      let s = this.readBytes(size);
      let bytes = s.toUint8List();
      try {
        let str = utf8 ? new convert.Utf8Decoder.new().convert(bytes) : core.String.fromCharCodes(bytes);
        return str;
      } catch (e) {
        let err = dart.getThrown(e);
        if (core.Object.is(err)) {
          return core.String.fromCharCodes(bytes);
        } else
          throw e;
      }
    }
    readUint16() {
      let t1, t1$;
      let b1 = this.buffer[$_get]((t1 = this.offset, this.offset = t1 + 1, t1)) & 255;
      let b2 = this.buffer[$_get]((t1$ = this.offset, this.offset = t1$ + 1, t1$)) & 255;
      if (this.byteOrder === 1) {
        return (b1 << 8 | b2) >>> 0;
      }
      return (b2 << 8 | b1) >>> 0;
    }
    readUint24() {
      let t1, t1$, t1$0;
      let b1 = this.buffer[$_get]((t1 = this.offset, this.offset = t1 + 1, t1)) & 255;
      let b2 = this.buffer[$_get]((t1$ = this.offset, this.offset = t1$ + 1, t1$)) & 255;
      let b3 = this.buffer[$_get]((t1$0 = this.offset, this.offset = t1$0 + 1, t1$0)) & 255;
      if (this.byteOrder === 1) {
        return (b3 | b2 << 8 >>> 0 | b1 << 16 >>> 0) >>> 0;
      }
      return (b1 | b2 << 8 >>> 0 | b3 << 16 >>> 0) >>> 0;
    }
    readUint32() {
      let t1, t1$, t1$0, t1$1;
      let b1 = this.buffer[$_get]((t1 = this.offset, this.offset = t1 + 1, t1)) & 255;
      let b2 = this.buffer[$_get]((t1$ = this.offset, this.offset = t1$ + 1, t1$)) & 255;
      let b3 = this.buffer[$_get]((t1$0 = this.offset, this.offset = t1$0 + 1, t1$0)) & 255;
      let b4 = this.buffer[$_get]((t1$1 = this.offset, this.offset = t1$1 + 1, t1$1)) & 255;
      if (this.byteOrder === 1) {
        return (b1 << 24 | b2 << 16 >>> 0 | b3 << 8 >>> 0 | b4) >>> 0;
      }
      return (b4 << 24 | b3 << 16 >>> 0 | b2 << 8 >>> 0 | b1) >>> 0;
    }
    readUint64() {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5;
      let b1 = this.buffer[$_get]((t1 = this.offset, this.offset = t1 + 1, t1)) & 255;
      let b2 = this.buffer[$_get]((t1$ = this.offset, this.offset = t1$ + 1, t1$)) & 255;
      let b3 = this.buffer[$_get]((t1$0 = this.offset, this.offset = t1$0 + 1, t1$0)) & 255;
      let b4 = this.buffer[$_get]((t1$1 = this.offset, this.offset = t1$1 + 1, t1$1)) & 255;
      let b5 = this.buffer[$_get]((t1$2 = this.offset, this.offset = t1$2 + 1, t1$2)) & 255;
      let b6 = this.buffer[$_get]((t1$3 = this.offset, this.offset = t1$3 + 1, t1$3)) & 255;
      let b7 = this.buffer[$_get]((t1$4 = this.offset, this.offset = t1$4 + 1, t1$4)) & 255;
      let b8 = this.buffer[$_get]((t1$5 = this.offset, this.offset = t1$5 + 1, t1$5)) & 255;
      if (this.byteOrder === 1) {
        return (b1[$leftShift](56) | b2[$leftShift](48) | b3[$leftShift](40) | b4[$leftShift](32) | b5 << 24 >>> 0 | b6 << 16 >>> 0 | b7 << 8 >>> 0 | b8) >>> 0;
      }
      return (b8[$leftShift](56) | b7[$leftShift](48) | b6[$leftShift](40) | b5[$leftShift](32) | b4 << 24 >>> 0 | b3 << 16 >>> 0 | b2 << 8 >>> 0 | b1) >>> 0;
    }
    toUint8List() {
      let len = this.length;
      if (typed_data.Uint8List.is(this.buffer)) {
        let b = typed_data.Uint8List.as(this.buffer);
        if (this.offset + len > b[$length]) {
          len = b[$length] - this.offset;
        }
        let bytes = typed_data.Uint8List.view(b[$buffer], b[$offsetInBytes] + this.offset, len);
        return bytes;
      }
      let end = this.offset + len;
      if (end > this.buffer[$length]) {
        end = this.buffer[$length];
      }
      return _native_typed_data.NativeUint8List.fromList(this.buffer[$sublist](this.offset, end));
    }
    get [_length]() {
      let t1;
      t1 = this[__InputStream__length];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_length")) : t1;
    }
    set [_length](library$32package$58archive$47src$47util$47input_stream$46dart$58$58_length$35param) {
      this[__InputStream__length] = library$32package$58archive$47src$47util$47input_stream$46dart$58$58_length$35param;
    }
  };
  (input_stream.InputStream.new = function(data, opts) {
    let t0;
    let byteOrder = opts && 'byteOrder' in opts ? opts.byteOrder : 0;
    let start = opts && 'start' in opts ? opts.start : 0;
    let length = opts && 'length' in opts ? opts.length : null;
    this[__InputStream__length] = null;
    this[byteOrder$] = byteOrder;
    this[start$] = start;
    this[buffer] = typed_data.TypedData.is(data) ? typed_data.Uint8List.view(data[$buffer], data[$offsetInBytes], data[$lengthInBytes]) : T.ListOfint().is(data) ? data : T.ListOfint().from(core.Iterable.as(data));
    this[offset] = start;
    this[_length] = (t0 = length, t0 == null ? this.buffer[$length] : t0);
  }).prototype = input_stream.InputStream.prototype;
  (input_stream.InputStream.from = function(other) {
    this[__InputStream__length] = null;
    this[buffer] = other.buffer;
    this[offset] = other.offset;
    this[start$] = other.start;
    this[__InputStream__length] = other[_length];
    this[byteOrder$] = other.byteOrder;
    ;
  }).prototype = input_stream.InputStream.prototype;
  dart.addTypeTests(input_stream.InputStream);
  dart.addTypeCaches(input_stream.InputStream);
  dart.setMethodSignature(input_stream.InputStream, () => ({
    __proto__: dart.getMethods(input_stream.InputStream.__proto__),
    reset: dart.fnType(dart.void, []),
    rewind: dart.fnType(dart.void, [], [core.int]),
    _get: dart.fnType(core.int, [core.int]),
    subset: dart.fnType(input_stream.InputStreamBase, [], [dart.nullable(core.int), dart.nullable(core.int)]),
    indexOf: dart.fnType(core.int, [core.int], [core.int]),
    peekBytes: dart.fnType(input_stream.InputStreamBase, [core.int], [core.int]),
    skip: dart.fnType(dart.void, [core.int]),
    readByte: dart.fnType(core.int, []),
    readBytes: dart.fnType(input_stream.InputStreamBase, [core.int]),
    readString: dart.fnType(core.String, [], {size: dart.nullable(core.int), utf8: core.bool}, {}),
    readUint16: dart.fnType(core.int, []),
    readUint24: dart.fnType(core.int, []),
    readUint32: dart.fnType(core.int, []),
    readUint64: dart.fnType(core.int, []),
    toUint8List: dart.fnType(typed_data.Uint8List, [])
  }));
  dart.setGetterSignature(input_stream.InputStream, () => ({
    __proto__: dart.getGetters(input_stream.InputStream.__proto__),
    position: core.int,
    length: core.int,
    isEOS: core.bool,
    [_length]: core.int
  }));
  dart.setSetterSignature(input_stream.InputStream, () => ({
    __proto__: dart.getSetters(input_stream.InputStream.__proto__),
    position: core.int,
    [_length]: core.int
  }));
  dart.setLibraryUri(input_stream.InputStream, I[0]);
  dart.setFieldSignature(input_stream.InputStream, () => ({
    __proto__: dart.getFields(input_stream.InputStream.__proto__),
    buffer: dart.fieldType(core.List$(core.int)),
    offset: dart.fieldType(core.int),
    start: dart.fieldType(core.int),
    byteOrder: dart.fieldType(core.int),
    [__InputStream__length]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.trackLibraries("packages/archive/src/util/input_stream.dart", {
    "package:archive/src/util/input_stream.dart": input_stream
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input_stream.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/archive/src/util/input_stream.dart.lib.js"}');
  // Exports:
  return {
    src__util__input_stream: input_stream
  };
}));

//# sourceMappingURL=input_stream.dart.lib.js.map
