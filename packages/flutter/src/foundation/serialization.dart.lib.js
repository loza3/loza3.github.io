define(['dart_sdk'], (function load__packages__flutter__src__foundation__serialization_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var serialization = Object.create(dart.library);
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $setRange = dartx.setRange;
  var $setUint16 = dartx.setUint16;
  var $setUint32 = dartx.setUint32;
  var $setInt32 = dartx.setInt32;
  var $setInt64 = dartx.setInt64;
  var $setFloat64 = dartx.setFloat64;
  var $offsetInBytes = dartx.offsetInBytes;
  var $modulo = dartx['%'];
  var $runtimeType = dartx.runtimeType;
  var $asByteData = dartx.asByteData;
  var $lengthInBytes = dartx.lengthInBytes;
  var $getUint8 = dartx.getUint8;
  var $getUint16 = dartx.getUint16;
  var $getUint32 = dartx.getUint32;
  var $getInt32 = dartx.getInt32;
  var $getInt64 = dartx.getInt64;
  var $getFloat64 = dartx.getFloat64;
  var $asInt32List = dartx.asInt32List;
  var $asInt64List = dartx.asInt64List;
  var $asFloat32List = dartx.asFloat32List;
  var $asFloat64List = dartx.asFloat64List;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/foundation/serialization.dart",
    "package:flutter/src/foundation/serialization.dart"
  ];
  var _currentSize = dart.privateName(serialization, "_currentSize");
  var _isDone = dart.privateName(serialization, "_isDone");
  var _buffer$ = dart.privateName(serialization, "_buffer");
  var _eightBytes$ = dart.privateName(serialization, "_eightBytes");
  var _eightBytesAsList$ = dart.privateName(serialization, "_eightBytesAsList");
  var _resize = dart.privateName(serialization, "_resize");
  var _add = dart.privateName(serialization, "_add");
  var _append = dart.privateName(serialization, "_append");
  var _addAll = dart.privateName(serialization, "_addAll");
  var _alignTo = dart.privateName(serialization, "_alignTo");
  serialization.WriteBuffer = class WriteBuffer extends core.Object {
    static new(opts) {
      let startCapacity = opts && 'startCapacity' in opts ? opts.startCapacity : 8;
      if (!(startCapacity > 0)) dart.assertFailed(null, I[0], 22, 12, "startCapacity > 0");
      let eightBytes = _native_typed_data.NativeByteData.new(8);
      let eightBytesAsList = eightBytes[$buffer][$asUint8List]();
      return new serialization.WriteBuffer.__(_native_typed_data.NativeUint8List.new(startCapacity), eightBytes, eightBytesAsList);
    }
    static ['_#new#tearOff'](opts) {
      let startCapacity = opts && 'startCapacity' in opts ? opts.startCapacity : 8;
      return serialization.WriteBuffer.new({startCapacity: startCapacity});
    }
    static ['_#_#tearOff'](_buffer, _eightBytes, _eightBytesAsList) {
      return new serialization.WriteBuffer.__(_buffer, _eightBytes, _eightBytesAsList);
    }
    [_add](byte) {
      if (this[_currentSize] === this[_buffer$][$length]) {
        this[_resize]();
      }
      this[_buffer$][$_set](this[_currentSize], byte);
      this[_currentSize] = this[_currentSize] + 1;
    }
    [_append](other) {
      let newSize = this[_currentSize] + other[$length];
      if (newSize >= this[_buffer$][$length]) {
        this[_resize](newSize);
      }
      this[_buffer$][$setRange](this[_currentSize], newSize, other);
      this[_currentSize] = this[_currentSize] + other[$length];
    }
    [_addAll](data, start = 0, end = null) {
      let t0;
      let newEnd = (t0 = end, t0 == null ? this[_eightBytesAsList$][$length] : t0);
      let newSize = this[_currentSize] + (newEnd - start);
      if (newSize >= this[_buffer$][$length]) {
        this[_resize](newSize);
      }
      this[_buffer$][$setRange](this[_currentSize], newSize, data);
      this[_currentSize] = newSize;
    }
    [_resize](requiredLength = null) {
      let t0;
      let doubleLength = this[_buffer$][$length] * 2;
      let newLength = math.max(core.int, (t0 = requiredLength, t0 == null ? 0 : t0), doubleLength);
      let newBuffer = _native_typed_data.NativeUint8List.new(newLength);
      newBuffer[$setRange](0, this[_buffer$][$length], this[_buffer$]);
      this[_buffer$] = newBuffer;
    }
    putUint8(byte) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 74, 12, "!_isDone");
      this[_add](byte);
    }
    putUint16(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 80, 12, "!_isDone");
      this[_eightBytes$][$setUint16](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_addAll](this[_eightBytesAsList$], 0, 2);
    }
    putUint32(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 87, 12, "!_isDone");
      this[_eightBytes$][$setUint32](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_addAll](this[_eightBytesAsList$], 0, 4);
    }
    putInt32(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 94, 12, "!_isDone");
      this[_eightBytes$][$setInt32](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_addAll](this[_eightBytesAsList$], 0, 4);
    }
    putInt64(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 101, 12, "!_isDone");
      this[_eightBytes$][$setInt64](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_addAll](this[_eightBytesAsList$], 0, 8);
    }
    putFloat64(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 108, 12, "!_isDone");
      this[_alignTo](8);
      this[_eightBytes$][$setFloat64](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_addAll](this[_eightBytesAsList$]);
    }
    putUint8List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 116, 12, "!_isDone");
      this[_append](list);
    }
    putInt32List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 122, 12, "!_isDone");
      this[_alignTo](4);
      this[_append](list[$buffer][$asUint8List](list[$offsetInBytes], 4 * list[$length]));
    }
    putInt64List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 129, 12, "!_isDone");
      this[_alignTo](8);
      this[_append](list[$buffer][$asUint8List](list[$offsetInBytes], 8 * list[$length]));
    }
    putFloat32List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 136, 12, "!_isDone");
      this[_alignTo](4);
      this[_append](list[$buffer][$asUint8List](list[$offsetInBytes], 4 * list[$length]));
    }
    putFloat64List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 143, 12, "!_isDone");
      this[_alignTo](8);
      this[_append](list[$buffer][$asUint8List](list[$offsetInBytes], 8 * list[$length]));
    }
    [_alignTo](alignment) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 149, 12, "!_isDone");
      let mod = this[_currentSize][$modulo](alignment);
      if (mod !== 0) {
        this[_addAll](serialization.WriteBuffer._zeroBuffer, 0, alignment - mod);
      }
    }
    done() {
      if (this[_isDone]) {
        dart.throw(new core.StateError.new("done() must not be called more than once on the same " + dart.str(this[$runtimeType]) + "."));
      }
      let result = this[_buffer$][$buffer][$asByteData](0, this[_currentSize]);
      this[_buffer$] = _native_typed_data.NativeUint8List.new(0);
      this[_isDone] = true;
      return result;
    }
  };
  (serialization.WriteBuffer.__ = function(_buffer, _eightBytes, _eightBytesAsList) {
    this[_currentSize] = 0;
    this[_isDone] = false;
    this[_buffer$] = _buffer;
    this[_eightBytes$] = _eightBytes;
    this[_eightBytesAsList$] = _eightBytesAsList;
    ;
  }).prototype = serialization.WriteBuffer.prototype;
  dart.addTypeTests(serialization.WriteBuffer);
  dart.addTypeCaches(serialization.WriteBuffer);
  dart.setMethodSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getMethods(serialization.WriteBuffer.__proto__),
    [_add]: dart.fnType(dart.void, [core.int]),
    [_append]: dart.fnType(dart.void, [typed_data.Uint8List]),
    [_addAll]: dart.fnType(dart.void, [typed_data.Uint8List], [core.int, dart.nullable(core.int)]),
    [_resize]: dart.fnType(dart.void, [], [dart.nullable(core.int)]),
    putUint8: dart.fnType(dart.void, [core.int]),
    putUint16: dart.fnType(dart.void, [core.int], {endian: dart.nullable(typed_data.Endian)}, {}),
    putUint32: dart.fnType(dart.void, [core.int], {endian: dart.nullable(typed_data.Endian)}, {}),
    putInt32: dart.fnType(dart.void, [core.int], {endian: dart.nullable(typed_data.Endian)}, {}),
    putInt64: dart.fnType(dart.void, [core.int], {endian: dart.nullable(typed_data.Endian)}, {}),
    putFloat64: dart.fnType(dart.void, [core.double], {endian: dart.nullable(typed_data.Endian)}, {}),
    putUint8List: dart.fnType(dart.void, [typed_data.Uint8List]),
    putInt32List: dart.fnType(dart.void, [typed_data.Int32List]),
    putInt64List: dart.fnType(dart.void, [typed_data.Int64List]),
    putFloat32List: dart.fnType(dart.void, [typed_data.Float32List]),
    putFloat64List: dart.fnType(dart.void, [typed_data.Float64List]),
    [_alignTo]: dart.fnType(dart.void, [core.int]),
    done: dart.fnType(typed_data.ByteData, [])
  }));
  dart.setStaticMethodSignature(serialization.WriteBuffer, () => ['new']);
  dart.setLibraryUri(serialization.WriteBuffer, I[1]);
  dart.setFieldSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getFields(serialization.WriteBuffer.__proto__),
    [_buffer$]: dart.fieldType(typed_data.Uint8List),
    [_currentSize]: dart.fieldType(core.int),
    [_isDone]: dart.fieldType(core.bool),
    [_eightBytes$]: dart.finalFieldType(typed_data.ByteData),
    [_eightBytesAsList$]: dart.finalFieldType(typed_data.Uint8List)
  }));
  dart.setStaticFieldSignature(serialization.WriteBuffer, () => ['_zeroBuffer']);
  dart.defineLazy(serialization.WriteBuffer, {
    /*serialization.WriteBuffer._zeroBuffer*/get _zeroBuffer() {
      return _native_typed_data.NativeUint8List.new(8);
    }
  }, false);
  var data$ = dart.privateName(serialization, "ReadBuffer.data");
  var _position = dart.privateName(serialization, "_position");
  serialization.ReadBuffer = class ReadBuffer extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static ['_#new#tearOff'](data) {
      return new serialization.ReadBuffer.new(data);
    }
    get hasRemaining() {
      return this[_position] < this.data[$lengthInBytes];
    }
    getUint8() {
      let t0;
      return this.data[$getUint8]((t0 = this[_position], this[_position] = t0 + 1, t0));
    }
    getUint16(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getUint16](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = this[_position] + 2;
      return value;
    }
    getUint32(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getUint32](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = this[_position] + 4;
      return value;
    }
    getInt32(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getInt32](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = this[_position] + 4;
      return value;
    }
    getInt64(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getInt64](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = this[_position] + 8;
      return value;
    }
    getFloat64(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      this[_alignTo](8);
      let value = this.data[$getFloat64](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = this[_position] + 8;
      return value;
    }
    getUint8List(length) {
      let list = this.data[$buffer][$asUint8List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + length;
      return list;
    }
    getInt32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asInt32List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + 4 * length;
      return list;
    }
    getInt64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asInt64List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + 8 * length;
      return list;
    }
    getFloat32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asFloat32List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + 4 * length;
      return list;
    }
    getFloat64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asFloat64List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + 8 * length;
      return list;
    }
    [_alignTo](alignment) {
      let mod = this[_position][$modulo](alignment);
      if (mod !== 0) {
        this[_position] = this[_position] + (alignment - mod);
      }
    }
  };
  (serialization.ReadBuffer.new = function(data) {
    this[_position] = 0;
    this[data$] = data;
    if (!(data !== null)) dart.assertFailed(null, I[0], 174, 14, "data != null");
    ;
  }).prototype = serialization.ReadBuffer.prototype;
  dart.addTypeTests(serialization.ReadBuffer);
  dart.addTypeCaches(serialization.ReadBuffer);
  dart.setMethodSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getMethods(serialization.ReadBuffer.__proto__),
    getUint8: dart.fnType(core.int, []),
    getUint16: dart.fnType(core.int, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getUint32: dart.fnType(core.int, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getInt32: dart.fnType(core.int, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getInt64: dart.fnType(core.int, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getFloat64: dart.fnType(core.double, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getUint8List: dart.fnType(typed_data.Uint8List, [core.int]),
    getInt32List: dart.fnType(typed_data.Int32List, [core.int]),
    getInt64List: dart.fnType(typed_data.Int64List, [core.int]),
    getFloat32List: dart.fnType(typed_data.Float32List, [core.int]),
    getFloat64List: dart.fnType(typed_data.Float64List, [core.int]),
    [_alignTo]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getGetters(serialization.ReadBuffer.__proto__),
    hasRemaining: core.bool
  }));
  dart.setLibraryUri(serialization.ReadBuffer, I[1]);
  dart.setFieldSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getFields(serialization.ReadBuffer.__proto__),
    data: dart.finalFieldType(typed_data.ByteData),
    [_position]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/flutter/src/foundation/serialization.dart", {
    "package:flutter/src/foundation/serialization.dart": serialization
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["serialization.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/serialization.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__serialization: serialization
  };
}));

//# sourceMappingURL=serialization.dart.lib.js.map
