define(['dart_sdk'], (function load__packages__lottie__src__parser__moshi__buffer_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var buffer$ = Object.create(dart.library);
  var $_get = dartx._get;
  var $length = dartx.length;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/parser/moshi/buffer.dart"];
  var buffer$0 = dart.privateName(buffer$, "Buffer.buffer");
  var _start = dart.privateName(buffer$, "_start");
  var _size = dart.privateName(buffer$, "_size");
  var _selectPrefix = dart.privateName(buffer$, "_selectPrefix");
  buffer$.Buffer = class Buffer extends core.Object {
    get buffer() {
      return this[buffer$0];
    }
    set buffer(value) {
      super.buffer = value;
    }
    static ['_#new#tearOff'](buffer) {
      return new buffer$.Buffer.new(buffer);
    }
    get size() {
      return this[_size];
    }
    static _checkOffsetAndCount(size, offset, byteCount) {
      if ((offset | byteCount) >>> 0 < 0 || offset > size || size - offset < byteCount) {
        dart.throw(core.Exception.new("size=" + dart.str(size) + " offset=" + dart.str(offset) + " byteCount=" + dart.str(byteCount)));
      }
    }
    readUtf8(byteCount) {
      if (this[_size] < byteCount) dart.throw(core.Exception.new("size < " + dart.str(byteCount) + ": " + dart.str(this[_size])));
      let string = convert.utf8.decoder.convert(this.buffer, this[_start], this[_start] + byteCount);
      this[_start] = this[_start] + byteCount;
      this[_size] = this[_size] - byteCount;
      return string;
    }
    readByte() {
      let t0;
      if (this[_size] === 0) dart.throw(core.Exception.new("size == 0"));
      let byte = this.buffer[$_get]((t0 = this[_start], this[_start] = t0 + 1, t0));
      this[_size] = this[_size] - 1;
      return byte;
    }
    request(byteCount) {
      if (this[_start] + byteCount > this.buffer[$length]) {
        this[_size] = this.buffer[$length] - this[_start];
        return false;
      }
      this[_size] = math.max(core.int, byteCount, this[_size]);
      return true;
    }
    getByte(pos) {
      buffer$.Buffer._checkOffsetAndCount(this[_size], pos, 1);
      return this.buffer[$_get](this[_start] + pos);
    }
    skip(byteCount) {
      this[_start] = this[_start] + byteCount;
      if (this[_start] >= this.buffer[$length]) {
        this[_start] = this.buffer[$length] - 1;
        dart.throw(core.Exception.new("source is exhausted"));
      }
      this[_size] = this[_size] - byteCount;
      this[_size] = math.max(core.int, 0, this[_size]);
    }
    select(options) {
      let index = this[_selectPrefix](options);
      if (index === -1) return -1;
      let size = options[$_get](index)[$length];
      this.skip(size);
      return index;
    }
    [_selectPrefix](options) {
      for (let i = 0; i < options[$length]; i = i + 1) {
        let option = options[$_get](i);
        if (buffer$.Buffer._isPrefix(option, this.buffer, this[_start])) {
          return i;
        }
      }
      return -1;
    }
    static _isPrefix(search, buffer, start) {
      for (let i = 0; i < search[$length]; i = i + 1) {
        if (search[$_get](i) !== buffer[$_get](start + i)) {
          return false;
        }
      }
      return true;
    }
    indexOfElement(targetBytes, fromIndex) {
      let i = fromIndex;
      while (this[_start] + i < this.buffer[$length]) {
        this[_size] = math.max(core.int, i + 1, this[_size]);
        let bufferByte = this.buffer[$_get](this[_start] + i);
        for (let targetByte of targetBytes) {
          if (targetByte === bufferByte) {
            return i;
          }
        }
        i = i + 1;
      }
      return -1;
    }
    indexOf(b, fromIndex) {
      let i = fromIndex;
      while (this[_start] + i < this.buffer[$length]) {
        this[_size] = math.max(core.int, i + 1, this[_size]);
        let bufferByte = this.buffer[$_get](this[_start] + i);
        if (b === bufferByte) {
          return i;
        }
        i = i + 1;
      }
      return -1;
    }
    indexOfBytes(bytes, fromIndex) {
      let i = fromIndex;
      while (this[_start] + i < this.buffer[$length]) {
        this[_size] = math.max(core.int, i + 1, this[_size]);
        if (buffer$.Buffer._isPrefix(bytes, this.buffer, this[_start] + i)) {
          return i;
        }
        i = i + 1;
      }
      return -1;
    }
    clear() {
    }
  };
  (buffer$.Buffer.new = function(buffer) {
    this[_start] = 0;
    this[_size] = 0;
    this[buffer$0] = buffer;
    ;
  }).prototype = buffer$.Buffer.prototype;
  dart.addTypeTests(buffer$.Buffer);
  dart.addTypeCaches(buffer$.Buffer);
  dart.setMethodSignature(buffer$.Buffer, () => ({
    __proto__: dart.getMethods(buffer$.Buffer.__proto__),
    readUtf8: dart.fnType(core.String, [core.int]),
    readByte: dart.fnType(core.int, []),
    request: dart.fnType(core.bool, [core.int]),
    getByte: dart.fnType(core.int, [core.int]),
    skip: dart.fnType(dart.void, [core.int]),
    select: dart.fnType(core.int, [core.List$(core.List$(core.int))]),
    [_selectPrefix]: dart.fnType(core.int, [core.List$(core.List$(core.int))]),
    indexOfElement: dart.fnType(core.int, [core.List$(core.int), core.int]),
    indexOf: dart.fnType(core.int, [core.int, core.int]),
    indexOfBytes: dart.fnType(core.int, [core.List$(core.int), core.int]),
    clear: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(buffer$.Buffer, () => ['_checkOffsetAndCount', '_isPrefix']);
  dart.setGetterSignature(buffer$.Buffer, () => ({
    __proto__: dart.getGetters(buffer$.Buffer.__proto__),
    size: core.int
  }));
  dart.setLibraryUri(buffer$.Buffer, I[0]);
  dart.setFieldSignature(buffer$.Buffer, () => ({
    __proto__: dart.getFields(buffer$.Buffer.__proto__),
    buffer: dart.finalFieldType(typed_data.Uint8List),
    [_start]: dart.fieldType(core.int),
    [_size]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/lottie/src/parser/moshi/buffer.dart", {
    "package:lottie/src/parser/moshi/buffer.dart": buffer$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["buffer.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../../packages/lottie/src/parser/moshi/buffer.dart.lib.js"}');
  // Exports:
  return {
    src__parser__moshi__buffer: buffer$
  };
}));

//# sourceMappingURL=buffer.dart.lib.js.map
