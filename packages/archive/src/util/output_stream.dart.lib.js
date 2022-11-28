define(['dart_sdk', 'packages/archive/src/util/input_stream.dart'], (function load__packages__archive__src__util__output_stream_dart(dart_sdk, packages__archive__src__util__input_stream$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const input_stream = packages__archive__src__util__input_stream$46dart.src__util__input_stream;
  var output_stream = Object.create(dart.library);
  var $buffer = dartx.buffer;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $setRange = dartx.setRange;
  var $rightShift = dartx['>>'];
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:archive/src/util/output_stream.dart"];
  output_stream.OutputStreamBase = class OutputStreamBase extends core.Object {};
  (output_stream.OutputStreamBase.new = function() {
    ;
  }).prototype = output_stream.OutputStreamBase.prototype;
  dart.addTypeTests(output_stream.OutputStreamBase);
  dart.addTypeCaches(output_stream.OutputStreamBase);
  dart.setLibraryUri(output_stream.OutputStreamBase, I[0]);
  var length = dart.privateName(output_stream, "OutputStream.length");
  var byteOrder$ = dart.privateName(output_stream, "OutputStream.byteOrder");
  var _buffer = dart.privateName(output_stream, "_buffer");
  var _expandBuffer = dart.privateName(output_stream, "_expandBuffer");
  output_stream.OutputStream = class OutputStream extends output_stream.OutputStreamBase {
    get length() {
      return this[length];
    }
    set length(value) {
      this[length] = value;
    }
    get byteOrder() {
      return this[byteOrder$];
    }
    set byteOrder(value) {
      super.byteOrder = value;
    }
    static ['_#new#tearOff'](opts) {
      let size = opts && 'size' in opts ? opts.size : 32768;
      let byteOrder = opts && 'byteOrder' in opts ? opts.byteOrder : 0;
      return new output_stream.OutputStream.new({size: size, byteOrder: byteOrder});
    }
    flush() {
    }
    getBytes() {
      return typed_data.Uint8List.view(this[_buffer][$buffer], 0, this.length);
    }
    clear() {
      this[_buffer] = _native_typed_data.NativeUint8List.new(32768);
      this.length = 0;
    }
    reset() {
      this.length = 0;
    }
    writeByte(value) {
      let t0;
      if (this.length === this[_buffer][$length]) {
        this[_expandBuffer]();
      }
      this[_buffer][$_set]((t0 = this.length, this.length = t0 + 1, t0), value & 255);
    }
    writeBytes(bytes, len = null) {
      len == null ? len = bytes[$length] : null;
      while (this.length + dart.notNull(len) > this[_buffer][$length]) {
        this[_expandBuffer](this.length + dart.notNull(len) - this[_buffer][$length]);
      }
      this[_buffer][$setRange](this.length, this.length + dart.notNull(len), bytes);
      this.length = this.length + dart.notNull(len);
    }
    writeInputStream(stream) {
      while (this.length + stream.length > this[_buffer][$length]) {
        this[_expandBuffer](this.length + stream.length - this[_buffer][$length]);
      }
      if (input_stream.InputStream.is(stream)) {
        this[_buffer][$setRange](this.length, this.length + stream.length, stream.buffer, stream.offset);
      } else {
        let bytes = stream.toUint8List();
        this[_buffer][$setRange](this.length, this.length + stream.length, bytes, 0);
      }
      this.length = this.length + stream.length;
    }
    writeUint16(value) {
      if (this.byteOrder === 1) {
        this.writeByte(value >> 8 & 255);
        this.writeByte(value & 255);
        return;
      }
      this.writeByte(value & 255);
      this.writeByte(value >> 8 & 255);
    }
    writeUint32(value) {
      if (this.byteOrder === 1) {
        this.writeByte(value[$rightShift](24) & 255);
        this.writeByte(value >> 16 & 255);
        this.writeByte(value >> 8 & 255);
        this.writeByte(value & 255);
        return;
      }
      this.writeByte(value & 255);
      this.writeByte(value >> 8 & 255);
      this.writeByte(value >> 16 & 255);
      this.writeByte(value[$rightShift](24) & 255);
    }
    subset(start, end = null) {
      if (start < 0) {
        start = this.length + start;
      }
      if (end == null) {
        end = this.length;
      } else if (dart.notNull(end) < 0) {
        end = this.length + dart.notNull(end);
      }
      return typed_data.Uint8List.view(this[_buffer][$buffer], start, dart.notNull(end) - start);
    }
    [_expandBuffer](required = null) {
      let blockSize = 32768;
      if (required != null) {
        if (dart.notNull(required) > dart.notNull(blockSize)) {
          blockSize = required;
        }
      }
      let newLength = (this[_buffer][$length] + dart.notNull(blockSize)) * 2;
      let newBuffer = _native_typed_data.NativeUint8List.new(newLength);
      newBuffer[$setRange](0, this[_buffer][$length], this[_buffer]);
      this[_buffer] = newBuffer;
    }
  };
  (output_stream.OutputStream.new = function(opts) {
    let t0;
    let size = opts && 'size' in opts ? opts.size : 32768;
    let byteOrder = opts && 'byteOrder' in opts ? opts.byteOrder : 0;
    this[byteOrder$] = byteOrder;
    this[_buffer] = _native_typed_data.NativeUint8List.new((t0 = size, t0 == null ? 32768 : t0));
    this[length] = 0;
    ;
  }).prototype = output_stream.OutputStream.prototype;
  dart.addTypeTests(output_stream.OutputStream);
  dart.addTypeCaches(output_stream.OutputStream);
  dart.setMethodSignature(output_stream.OutputStream, () => ({
    __proto__: dart.getMethods(output_stream.OutputStream.__proto__),
    flush: dart.fnType(dart.void, []),
    getBytes: dart.fnType(core.List$(core.int), []),
    clear: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, []),
    writeByte: dart.fnType(dart.void, [core.int]),
    writeBytes: dart.fnType(dart.void, [core.List$(core.int)], [dart.nullable(core.int)]),
    writeInputStream: dart.fnType(dart.void, [input_stream.InputStreamBase]),
    writeUint16: dart.fnType(dart.void, [core.int]),
    writeUint32: dart.fnType(dart.void, [core.int]),
    subset: dart.fnType(core.List$(core.int), [core.int], [dart.nullable(core.int)]),
    [_expandBuffer]: dart.fnType(dart.void, [], [dart.nullable(core.int)])
  }));
  dart.setLibraryUri(output_stream.OutputStream, I[0]);
  dart.setFieldSignature(output_stream.OutputStream, () => ({
    __proto__: dart.getFields(output_stream.OutputStream.__proto__),
    length: dart.fieldType(core.int),
    byteOrder: dart.finalFieldType(core.int),
    [_buffer]: dart.fieldType(typed_data.Uint8List)
  }));
  dart.setStaticFieldSignature(output_stream.OutputStream, () => ['_blockSize']);
  dart.defineLazy(output_stream.OutputStream, {
    /*output_stream.OutputStream._blockSize*/get _blockSize() {
      return 32768;
    }
  }, false);
  dart.trackLibraries("packages/archive/src/util/output_stream.dart", {
    "package:archive/src/util/output_stream.dart": output_stream
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["output_stream.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;EAwBA;;;;;;;;;IAIM;;;;;;IACM;;;;;;;;;;;;IAQI;;AAIZ,YAAiB,2BAAK,AAAQ,wBAAQ,GAAG;IAC3C;;AAIiC,MAA/B,gBAAU;AACA,MAAV,cAAS;IACX;;AAIY,MAAV,cAAS;IACX;cAImB;;AACjB,UAAI,AAAO,gBAAG,AAAQ;AACL,QAAf;;AAE8B,MAAhC,AAAO,sBAAO,kBAAN,mBAAM,QAAM,AAAM,KAAD,GAAG;IAC9B;eAI0B,OAAa;AACjB,MAApB,AAAI,GAAD,WAAH,MAAQ,AAAM,KAAD,YAAT;AAEJ,aAAO,AAAO,AAAM,2BAAJ,GAAG,IAAG,AAAQ;AACkB,QAA9C,oBAAe,AAAO,AAAO,2BAAL,GAAG,IAAI,AAAQ;;AAEI,MAA7C,AAAQ,yBAAS,aAAQ,AAAO,2BAAE,GAAG,GAAE,KAAK;AAC/B,MAAb,cAAA,AAAO,2BAAG,GAAG;IACf;qBAGsC;AACpC,aAAO,AAAO,AAAgB,cAAd,AAAO,MAAD,UAAU,AAAQ;AACkB,QAAxD,oBAAe,AAAO,AAAiB,cAAf,AAAO,MAAD,UAAW,AAAQ;;AAGnD,UAAW,4BAAP,MAAM;AAEyD,QADjE,AAAQ,yBACJ,aAAQ,AAAO,cAAE,AAAO,MAAD,SAAS,AAAO,MAAD,SAAS,AAAO,MAAD;;AAErD,oBAAQ,AAAO,MAAD;AACwC,QAA1D,AAAQ,yBAAS,aAAQ,AAAO,cAAE,AAAO,MAAD,SAAS,KAAK,EAAE;;AAEnC,MAAvB,cAAA,AAAO,cAAG,AAAO,MAAD;IAClB;gBAIqB;AACnB,UAAI,AAAU;AACkB,QAA9B,eAAW,AAAM,AAAM,KAAP,IAAI,IAAK;AACA,QAAzB,eAAW,AAAO,KAAF,GAAI;AACpB;;AAEuB,MAAzB,eAAW,AAAO,KAAF,GAAI;AACU,MAA9B,eAAW,AAAM,AAAM,KAAP,IAAI,IAAK;IAC3B;gBAIqB;AACnB,UAAI,AAAU;AACmB,QAA/B,eAAW,AAAM,AAAO,KAAR,cAAI,MAAM;AACK,QAA/B,eAAW,AAAM,AAAO,KAAR,IAAI,KAAM;AACI,QAA9B,eAAW,AAAM,AAAM,KAAP,IAAI,IAAK;AACA,QAAzB,eAAW,AAAO,KAAF,GAAI;AACpB;;AAEuB,MAAzB,eAAW,AAAO,KAAF,GAAI;AACU,MAA9B,eAAW,AAAM,AAAM,KAAP,IAAI,IAAK;AACM,MAA/B,eAAW,AAAM,AAAO,KAAR,IAAI,KAAM;AACK,MAA/B,eAAW,AAAM,AAAO,KAAR,cAAI,MAAM;IAC5B;WAOqB,OAAa;AAChC,UAAI,AAAM,KAAD,GAAG;AACc,QAAxB,QAAS,AAAQ,cAAE,KAAK;;AAG1B,UAAI,AAAI,GAAD;AACO,QAAZ,MAAM;YACD,KAAQ,aAAJ,GAAG,IAAG;AACG,QAAlB,MAAM,AAAO,2BAAE,GAAG;;AAGpB,YAAiB,2BAAK,AAAQ,wBAAQ,KAAK,EAAM,aAAJ,GAAG,IAAG,KAAK;IAC1D;oBAGyB;AACnB;AACJ,UAAI,QAAQ;AACV,YAAa,aAAT,QAAQ,iBAAG,SAAS;AACF,UAApB,YAAY,QAAQ;;;AAGlB,sBAAyC,CAA5B,AAAQ,AAAO,sCAAE,SAAS,KAAI;AAC3C,sBAAY,uCAAU,SAAS;AACS,MAA9C,AAAU,SAAD,YAAU,GAAG,AAAQ,wBAAQ;AACnB,MAAnB,gBAAU,SAAS;IACrB;;;;QAvHmB;QAAwB;;IAC7B,gBAAE,wCAAe,KAAL,IAAI,EAAJ;IACb,eAAE;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;MAuHH,qCAAU","file":"../../../../../../../../../../../../packages/archive/src/util/output_stream.dart.lib.js"}');
  // Exports:
  return {
    src__util__output_stream: output_stream
  };
}));

//# sourceMappingURL=output_stream.dart.lib.js.map
