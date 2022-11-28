define(['dart_sdk', 'packages/archive/src/zlib/huffman_table.dart', 'packages/archive/src/util/input_stream.dart', 'packages/archive/src/util/output_stream.dart'], (function load__packages__archive__src__zlib__inflate_dart(dart_sdk, packages__archive__src__zlib__huffman_table$46dart, packages__archive__src__util__input_stream$46dart, packages__archive__src__util__output_stream$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const huffman_table = packages__archive__src__zlib__huffman_table$46dart.src__zlib__huffman_table;
  const input_stream = packages__archive__src__util__input_stream$46dart.src__util__input_stream;
  const output_stream = packages__archive__src__util__output_stream$46dart.src__util__output_stream;
  var inflate = Object.create(dart.library);
  var $length = dartx.length;
  var $setRange = dartx.setRange;
  var $rightShift = dartx['>>'];
  var $leftShift = dartx['<<'];
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $buffer = dartx.buffer;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8], core.int);
    },
    get C1() {
      return C[1] = dart.constList([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], core.int);
    },
    get C2() {
      return C[2] = dart.constList([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], core.int);
    },
    get C3() {
      return C[3] = dart.constList([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], core.int);
    },
    get C4() {
      return C[4] = dart.constList([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], core.int);
    },
    get C5() {
      return C[5] = dart.constList([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], core.int);
    },
    get C6() {
      return C[6] = dart.constList([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], core.int);
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = ["package:archive/src/zlib/inflate.dart"];
  var inputSet = dart.privateName(inflate, "Inflate.inputSet");
  var output = dart.privateName(inflate, "Inflate.output");
  var __Inflate_input = dart.privateName(inflate, "_#Inflate#input");
  var _bitBuffer = dart.privateName(inflate, "_bitBuffer");
  var _bitBufferLen = dart.privateName(inflate, "_bitBufferLen");
  var _blockPos = dart.privateName(inflate, "_blockPos");
  var _fixedLiteralLengthTable = dart.privateName(inflate, "_fixedLiteralLengthTable");
  var _fixedDistanceTable = dart.privateName(inflate, "_fixedDistanceTable");
  var _inflate = dart.privateName(inflate, "_inflate");
  var _parseBlock = dart.privateName(inflate, "_parseBlock");
  var _readBits = dart.privateName(inflate, "_readBits");
  var _parseUncompressedBlock = dart.privateName(inflate, "_parseUncompressedBlock");
  var _parseFixedHuffmanBlock = dart.privateName(inflate, "_parseFixedHuffmanBlock");
  var _parseDynamicHuffmanBlock = dart.privateName(inflate, "_parseDynamicHuffmanBlock");
  var _readCodeByTable = dart.privateName(inflate, "_readCodeByTable");
  var _decodeHuffman = dart.privateName(inflate, "_decodeHuffman");
  var _decode = dart.privateName(inflate, "_decode");
  inflate.Inflate = class Inflate extends core.Object {
    get inputSet() {
      return this[inputSet];
    }
    set inputSet(value) {
      this[inputSet] = value;
    }
    get output() {
      return this[output];
    }
    set output(value) {
      this[output] = value;
    }
    get input() {
      let t0;
      t0 = this[__Inflate_input];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("input")) : t0;
    }
    set input(input$35param) {
      this[__Inflate_input] = input$35param;
    }
    static ['_#new#tearOff'](bytes, uncompressedSize = null) {
      return new inflate.Inflate.new(bytes, uncompressedSize);
    }
    static ['_#buffer#tearOff'](input, uncompressedSize = null) {
      return new inflate.Inflate.buffer(input, uncompressedSize);
    }
    static ['_#stream#tearOff'](input = null, outputStream = null) {
      return new inflate.Inflate.stream(input, outputStream);
    }
    streamInput(bytes) {
      if (this.inputSet && input_stream.InputStream.is(this.input)) {
        let i = input_stream.InputStream.as(this.input);
        i.offset = this[_blockPos];
        let inputLen = this.input.length;
        let newLen = inputLen + bytes[$length];
        let newBytes = _native_typed_data.NativeUint8List.new(newLen);
        newBytes[$setRange](0, inputLen, i.buffer, i.offset);
        newBytes[$setRange](inputLen, newLen, bytes, 0);
        this.input = new input_stream.InputStream.new(newBytes);
      } else {
        this.input = new input_stream.InputStream.new(bytes);
      }
      this.inputSet = true;
    }
    inflateNext() {
      this[_bitBuffer] = 0;
      this[_bitBufferLen] = 0;
      if (output_stream.OutputStream.is(this.output)) {
        dart.dsend(this.output, 'clear', []);
      }
      if (!this.inputSet || this.input.isEOS) {
        return null;
      }
      try {
        if (input_stream.InputStream.is(this.input)) {
          let i = input_stream.InputStream.as(this.input);
          this[_blockPos] = i.offset;
        }
        this[_parseBlock]();
        this[_blockPos] = 0;
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          return null;
        } else
          throw e$;
      }
      if (output_stream.OutputStream.is(this.output)) {
        return T.ListOfint().as(dart.dsend(this.output, 'getBytes', []));
      }
      return null;
    }
    getBytes() {
      return T.ListOfint().as(dart.dsend(this.output, 'getBytes', []));
    }
    [_inflate]() {
      this[_bitBuffer] = 0;
      this[_bitBufferLen] = 0;
      if (!this.inputSet) {
        return;
      }
      while (!this.input.isEOS) {
        if (!this[_parseBlock]()) {
          break;
        }
      }
    }
    [_parseBlock]() {
      if (this.input.isEOS) {
        return false;
      }
      let blockHeader = this[_readBits](3);
      let finalBlock = (blockHeader & 1) !== 0;
      let blockType = blockHeader[$rightShift](1);
      switch (blockType) {
        case 0:
          {
            if (this[_parseUncompressedBlock]() === -1) {
              return false;
            }
            break;
          }
        case 1:
          {
            if (this[_parseFixedHuffmanBlock]() === -1) {
              return false;
            }
            break;
          }
        case 2:
          {
            if (this[_parseDynamicHuffmanBlock]() === -1) {
              return false;
            }
            break;
          }
        default:
          {
            return false;
          }
      }
      return !finalBlock;
    }
    [_readBits](length) {
      if (length === 0) {
        return 0;
      }
      while (this[_bitBufferLen] < length) {
        if (this.input.isEOS) {
          return -1;
        }
        let octet = this.input.readByte();
        this[_bitBuffer] = (this[_bitBuffer] | octet[$leftShift](this[_bitBufferLen])) >>> 0;
        this[_bitBufferLen] = this[_bitBufferLen] + 8;
      }
      let octet = (this[_bitBuffer] & (1)[$leftShift](length) - 1) >>> 0;
      this[_bitBuffer] = this[_bitBuffer][$rightShift](length);
      this[_bitBufferLen] = this[_bitBufferLen] - length;
      return octet;
    }
    [_readCodeByTable](table) {
      let codeTable = table.table;
      let maxCodeLength = table.maxCodeLength;
      while (this[_bitBufferLen] < maxCodeLength) {
        if (this.input.isEOS) {
          return -1;
        }
        let octet = this.input.readByte();
        this[_bitBuffer] = (this[_bitBuffer] | octet[$leftShift](this[_bitBufferLen])) >>> 0;
        this[_bitBufferLen] = this[_bitBufferLen] + 8;
      }
      let codeWithLength = codeTable[$_get]((this[_bitBuffer] & (1)[$leftShift](maxCodeLength) - 1) >>> 0);
      let codeLength = codeWithLength[$rightShift](16);
      this[_bitBuffer] = this[_bitBuffer][$rightShift](codeLength);
      this[_bitBufferLen] = this[_bitBufferLen] - codeLength;
      return codeWithLength & 65535;
    }
    [_parseUncompressedBlock]() {
      this[_bitBuffer] = 0;
      this[_bitBufferLen] = 0;
      let len = this[_readBits](16);
      let nlen = (this[_readBits](16) ^ 65535) >>> 0;
      if (len !== 0 && len !== nlen) {
        return -1;
      }
      if (len > this.input.length) {
        return -1;
      }
      dart.dsend(this.output, 'writeInputStream', [this.input.readBytes(len)]);
      return 0;
    }
    [_parseFixedHuffmanBlock]() {
      return this[_decodeHuffman](this[_fixedLiteralLengthTable], this[_fixedDistanceTable]);
    }
    [_parseDynamicHuffmanBlock]() {
      let numLitLengthCodes = this[_readBits](5);
      if (numLitLengthCodes === -1) {
        return -1;
      }
      numLitLengthCodes = numLitLengthCodes + 257;
      if (numLitLengthCodes > 288) {
        return -1;
      }
      let numDistanceCodes = this[_readBits](5);
      if (numDistanceCodes === -1) {
        return -1;
      }
      numDistanceCodes = numDistanceCodes + 1;
      if (numDistanceCodes > 32) {
        return -1;
      }
      let numCodeLengths = this[_readBits](4);
      if (numCodeLengths === -1) {
        return -1;
      }
      numCodeLengths = numCodeLengths + 4;
      if (numCodeLengths > 19) {
        return -1;
      }
      let codeLengths = _native_typed_data.NativeUint8List.new(inflate.Inflate._order[$length]);
      for (let i = 0; i < numCodeLengths; i = i + 1) {
        let len = this[_readBits](3);
        if (len === -1) {
          return -1;
        }
        codeLengths[$_set](inflate.Inflate._order[$_get](i), len);
      }
      let codeLengthsTable = new huffman_table.HuffmanTable.new(codeLengths);
      let litLenDistLengths = _native_typed_data.NativeUint8List.new(numLitLengthCodes + numDistanceCodes);
      let litlenLengths = typed_data.Uint8List.view(litLenDistLengths[$buffer], 0, numLitLengthCodes);
      let distLengths = typed_data.Uint8List.view(litLenDistLengths[$buffer], numLitLengthCodes, numDistanceCodes);
      if (this[_decode](litLenDistLengths[$length], codeLengthsTable, litLenDistLengths) === -1) {
        return -1;
      }
      return this[_decodeHuffman](new huffman_table.HuffmanTable.new(litlenLengths), new huffman_table.HuffmanTable.new(distLengths));
    }
    [_decodeHuffman](litlen, dist) {
      while (true) {
        let code = this[_readCodeByTable](litlen);
        if (code < 0 || code > 285) {
          return -1;
        }
        if (code === 256) {
          break;
        }
        if (code < 256) {
          dart.dsend(this.output, 'writeByte', [code & 255]);
          continue;
        }
        let ti = code - 257;
        let codeLength = inflate.Inflate._lengthCodeTable[$_get](ti) + this[_readBits](inflate.Inflate._lengthExtraTable[$_get](ti));
        let distCode = this[_readCodeByTable](dist);
        if (distCode < 0 || distCode > 29) {
          return -1;
        }
        let distance = inflate.Inflate._distCodeTable[$_get](distCode) + this[_readBits](inflate.Inflate._distExtraTable[$_get](distCode));
        while (codeLength > distance) {
          dart.dsend(this.output, 'writeBytes', [dart.dsend(this.output, 'subset', [-distance])]);
          codeLength = codeLength - distance;
        }
        if (codeLength === distance) {
          dart.dsend(this.output, 'writeBytes', [dart.dsend(this.output, 'subset', [-distance])]);
        } else {
          dart.dsend(this.output, 'writeBytes', [dart.dsend(this.output, 'subset', [-distance, codeLength - distance])]);
        }
      }
      while (this[_bitBufferLen] >= 8) {
        this[_bitBufferLen] = this[_bitBufferLen] - 8;
        this.input.rewind(1);
      }
      return 0;
    }
    [_decode](num, table, codeLengths) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4;
      let prev = 0;
      let i = 0;
      while (i < num) {
        let code = this[_readCodeByTable](table);
        if (code === -1) {
          return -1;
        }
        switch (code) {
          case 16:
            {
              let repeat = this[_readBits](2);
              if (repeat === -1) {
                return -1;
              }
              repeat = repeat + 3;
              while ((t1 = repeat, repeat = t1 - 1, t1) > 0) {
                codeLengths[$_set]((t1$ = i, i = t1$ + 1, t1$), prev);
              }
              break;
            }
          case 17:
            {
              let repeat = this[_readBits](3);
              if (repeat === -1) {
                return -1;
              }
              repeat = repeat + 3;
              while ((t1$0 = repeat, repeat = t1$0 - 1, t1$0) > 0) {
                codeLengths[$_set]((t1$1 = i, i = t1$1 + 1, t1$1), 0);
              }
              prev = 0;
              break;
            }
          case 18:
            {
              let repeat = this[_readBits](7);
              if (repeat === -1) {
                return -1;
              }
              repeat = repeat + 11;
              while ((t1$2 = repeat, repeat = t1$2 - 1, t1$2) > 0) {
                codeLengths[$_set]((t1$3 = i, i = t1$3 + 1, t1$3), 0);
              }
              prev = 0;
              break;
            }
          default:
            {
              if (code < 0 || code > 15) {
                return -1;
              }
              codeLengths[$_set]((t1$4 = i, i = t1$4 + 1, t1$4), code);
              prev = code;
              break;
            }
        }
      }
      return 0;
    }
  };
  (inflate.Inflate.new = function(bytes, uncompressedSize = null) {
    this[__Inflate_input] = null;
    this[inputSet] = false;
    this[_bitBuffer] = 0;
    this[_bitBufferLen] = 0;
    this[_blockPos] = 0;
    this[_fixedLiteralLengthTable] = new huffman_table.HuffmanTable.new(inflate.Inflate._fixedLiteralLengths);
    this[_fixedDistanceTable] = new huffman_table.HuffmanTable.new(inflate.Inflate._fixedDistanceTableData);
    this[__Inflate_input] = new input_stream.InputStream.new(bytes);
    this[output] = new output_stream.OutputStream.new({size: uncompressedSize});
    this.inputSet = true;
    this[_inflate]();
  }).prototype = inflate.Inflate.prototype;
  (inflate.Inflate.buffer = function(input, uncompressedSize = null) {
    this[__Inflate_input] = null;
    this[inputSet] = false;
    this[_bitBuffer] = 0;
    this[_bitBufferLen] = 0;
    this[_blockPos] = 0;
    this[_fixedLiteralLengthTable] = new huffman_table.HuffmanTable.new(inflate.Inflate._fixedLiteralLengths);
    this[_fixedDistanceTable] = new huffman_table.HuffmanTable.new(inflate.Inflate._fixedDistanceTableData);
    this[__Inflate_input] = input;
    this[output] = new output_stream.OutputStream.new({size: uncompressedSize});
    this.inputSet = true;
    this[_inflate]();
  }).prototype = inflate.Inflate.prototype;
  (inflate.Inflate.stream = function(input = null, outputStream = null) {
    let t0;
    this[__Inflate_input] = null;
    this[inputSet] = false;
    this[_bitBuffer] = 0;
    this[_bitBufferLen] = 0;
    this[_blockPos] = 0;
    this[_fixedLiteralLengthTable] = new huffman_table.HuffmanTable.new(inflate.Inflate._fixedLiteralLengths);
    this[_fixedDistanceTable] = new huffman_table.HuffmanTable.new(inflate.Inflate._fixedDistanceTableData);
    this[output] = (t0 = outputStream, t0 == null ? new output_stream.OutputStream.new() : t0);
    if (input != null) {
      this.input = input;
      this.inputSet = true;
    }
    this[_inflate]();
  }).prototype = inflate.Inflate.prototype;
  dart.addTypeTests(inflate.Inflate);
  dart.addTypeCaches(inflate.Inflate);
  dart.setMethodSignature(inflate.Inflate, () => ({
    __proto__: dart.getMethods(inflate.Inflate.__proto__),
    streamInput: dart.fnType(dart.void, [core.List$(core.int)]),
    inflateNext: dart.fnType(dart.nullable(core.List$(core.int)), []),
    getBytes: dart.fnType(core.List$(core.int), []),
    [_inflate]: dart.fnType(dart.void, []),
    [_parseBlock]: dart.fnType(core.bool, []),
    [_readBits]: dart.fnType(core.int, [core.int]),
    [_readCodeByTable]: dart.fnType(core.int, [huffman_table.HuffmanTable]),
    [_parseUncompressedBlock]: dart.fnType(core.int, []),
    [_parseFixedHuffmanBlock]: dart.fnType(core.int, []),
    [_parseDynamicHuffmanBlock]: dart.fnType(core.int, []),
    [_decodeHuffman]: dart.fnType(core.int, [huffman_table.HuffmanTable, huffman_table.HuffmanTable]),
    [_decode]: dart.fnType(core.int, [core.int, huffman_table.HuffmanTable, core.List$(core.int)])
  }));
  dart.setGetterSignature(inflate.Inflate, () => ({
    __proto__: dart.getGetters(inflate.Inflate.__proto__),
    input: input_stream.InputStreamBase
  }));
  dart.setSetterSignature(inflate.Inflate, () => ({
    __proto__: dart.getSetters(inflate.Inflate.__proto__),
    input: input_stream.InputStreamBase
  }));
  dart.setLibraryUri(inflate.Inflate, I[0]);
  dart.setFieldSignature(inflate.Inflate, () => ({
    __proto__: dart.getFields(inflate.Inflate.__proto__),
    [__Inflate_input]: dart.fieldType(dart.nullable(input_stream.InputStreamBase)),
    inputSet: dart.fieldType(core.bool),
    output: dart.fieldType(dart.dynamic),
    [_bitBuffer]: dart.fieldType(core.int),
    [_bitBufferLen]: dart.fieldType(core.int),
    [_blockPos]: dart.fieldType(core.int),
    [_fixedLiteralLengthTable]: dart.finalFieldType(huffman_table.HuffmanTable),
    [_fixedDistanceTable]: dart.finalFieldType(huffman_table.HuffmanTable)
  }));
  dart.setStaticFieldSignature(inflate.Inflate, () => ['_fixedLiteralLengths', '_fixedDistanceTableData', '_order', '_lengthCodeTable', '_lengthExtraTable', '_distCodeTable', '_distExtraTable']);
  dart.defineLazy(inflate.Inflate, {
    /*inflate.Inflate._fixedLiteralLengths*/get _fixedLiteralLengths() {
      return C[0] || CT.C0;
    },
    /*inflate.Inflate._fixedDistanceTableData*/get _fixedDistanceTableData() {
      return C[1] || CT.C1;
    },
    /*inflate.Inflate._order*/get _order() {
      return C[2] || CT.C2;
    },
    /*inflate.Inflate._lengthCodeTable*/get _lengthCodeTable() {
      return C[3] || CT.C3;
    },
    /*inflate.Inflate._lengthExtraTable*/get _lengthExtraTable() {
      return C[4] || CT.C4;
    },
    /*inflate.Inflate._distCodeTable*/get _distCodeTable() {
      return C[5] || CT.C5;
    },
    /*inflate.Inflate._distExtraTable*/get _distExtraTable() {
      return C[6] || CT.C6;
    }
  }, false);
  dart.trackLibraries("packages/archive/src/zlib/inflate.dart", {
    "package:archive/src/zlib/inflate.dart": inflate
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["inflate.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/archive/src/zlib/inflate.dart.lib.js"}');
  // Exports:
  return {
    src__zlib__inflate: inflate
  };
}));

//# sourceMappingURL=inflate.dart.lib.js.map
