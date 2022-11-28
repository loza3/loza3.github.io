define(['dart_sdk', 'packages/intl/src/intl/intl_stream.dart', 'packages/intl/src/intl/constants.dart', 'packages/intl/number_symbols.dart', 'packages/intl/src/intl_helpers.dart', 'packages/intl/number_symbols_data.dart', 'packages/intl/src/intl/number_format_parser.dart'], (function load__packages__intl__src__intl__number_parser_dart(dart_sdk, packages__intl__src__intl__intl_stream$46dart, packages__intl__src__intl__constants$46dart, packages__intl__number_symbols$46dart, packages__intl__src__intl_helpers$46dart, packages__intl__number_symbols_data$46dart, packages__intl__src__intl__number_format_parser$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl_stream = packages__intl__src__intl__intl_stream$46dart.src__intl__intl_stream;
  const constants = packages__intl__src__intl__constants$46dart.src__intl__constants;
  const number_symbols = packages__intl__number_symbols$46dart.number_symbols;
  const intl_helpers = packages__intl__src__intl_helpers$46dart.src__intl_helpers;
  const number_symbols_data = packages__intl__number_symbols_data$46dart.number_symbols_data;
  const number_format_parser = packages__intl__src__intl__number_format_parser$46dart.src__intl__number_format_parser;
  var number_parser = Object.create(dart.library);
  var number_format = Object.create(dart.library);
  var $codeUnitAt = dartx.codeUnitAt;
  var $isNotEmpty = dartx.isNotEmpty;
  var $keys = dartx.keys;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $floor = dartx.floor;
  var $modulo = dartx['%'];
  var $toString = dartx.toString;
  var $isInfinite = dartx.isInfinite;
  var $isNaN = dartx.isNaN;
  var $round = dartx.round;
  var $ceil = dartx.ceil;
  var $times = dartx['*'];
  var $toInt = dartx.toInt;
  var $truncate = dartx.truncate;
  var $isEmpty = dartx.isEmpty;
  var $padLeft = dartx.padLeft;
  var $substring = dartx.substring;
  var $startsWith = dartx.startsWith;
  var $replaceAll = dartx.replaceAll;
  var $contains = dartx.contains;
  var $split = dartx.split;
  var $first = dartx.first;
  var $last = dartx.last;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $reversed = dartx.reversed;
  var $toList = dartx.toList;
  var $replaceFirst = dartx.replaceFirst;
  var $trim = dartx.trim;
  var $expand = dartx.expand;
  var $endsWith = dartx.endsWith;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidToString: () => (T.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    IdentityMapOfString$Function: () => (T.IdentityMapOfString$Function = dart.constFn(_js_helper.IdentityMap$(core.String, core.Function)))(),
    StringTobool: () => (T.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    NumberSymbolsToStringN: () => (T.NumberSymbolsToStringN = dart.constFn(dart.fnType(T.StringN(), [number_symbols.NumberSymbols])))(),
    NumberSymbolsToString: () => (T.NumberSymbolsToString = dart.constFn(dart.fnType(core.String, [number_symbols.NumberSymbols])))(),
    dynamicTobool: () => (T.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))(),
    JSArrayOf_CompactStyle: () => (T.JSArrayOf_CompactStyle = dart.constFn(_interceptors.JSArray$(number_format._CompactStyle)))(),
    JSArrayOf_CompactStyleBase: () => (T.JSArrayOf_CompactStyleBase = dart.constFn(_interceptors.JSArray$(number_format._CompactStyleBase)))(),
    intAndStringTovoid: () => (T.intAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.String])))(),
    IterableOf_CompactStyle: () => (T.IterableOf_CompactStyle = dart.constFn(core.Iterable$(number_format._CompactStyle)))(),
    _CompactStyleBaseToIterableOf_CompactStyle: () => (T._CompactStyleBaseToIterableOf_CompactStyle = dart.constFn(dart.fnType(T.IterableOf_CompactStyle(), [number_format._CompactStyleBase])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(number_format.NumberFormat.localeExists, T.dynamicTobool());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: number_format._CompactFormatType.prototype,
        [_Enum__name]: "COMPACT_DECIMAL_SHORT_PATTERN",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: number_format._CompactFormatType.prototype,
        [_Enum__name]: "COMPACT_DECIMAL_LONG_PATTERN",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: number_format._CompactFormatType.prototype,
        [_Enum__name]: "COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN",
        [_Enum_index]: 2
      });
    },
    get C1() {
      return C[1] = dart.constList([C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], number_format._CompactFormatType);
    },
    get C5() {
      return C[5] = dart.fn(number_format._CompactNumberFormat._forDecimal, T.NumberSymbolsToString());
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "package:intl/src/intl/number_parser.dart",
    "package:intl/src/intl/number_format.dart"
  ];
  var format$ = dart.privateName(number_parser, "NumberParser.format");
  var text$ = dart.privateName(number_parser, "NumberParser.text");
  var input = dart.privateName(number_parser, "NumberParser.input");
  var value$ = dart.privateName(number_parser, "NumberParser.value");
  var gotPositive = dart.privateName(number_parser, "NumberParser.gotPositive");
  var gotNegative = dart.privateName(number_parser, "NumberParser.gotNegative");
  var gotPositiveSuffix = dart.privateName(number_parser, "NumberParser.gotPositiveSuffix");
  var gotNegativeSuffix = dart.privateName(number_parser, "NumberParser.gotNegativeSuffix");
  var done = dart.privateName(number_parser, "NumberParser.done");
  var prefixesSkipped = dart.privateName(number_parser, "NumberParser.prefixesSkipped");
  var scale = dart.privateName(number_parser, "NumberParser.scale");
  var _normalized = dart.privateName(number_parser, "_normalized");
  var _replacements = dart.privateName(number_parser, "_replacements");
  var _positivePrefix = dart.privateName(number_parser, "_positivePrefix");
  var _negativePrefix = dart.privateName(number_parser, "_negativePrefix");
  var _positiveSuffix = dart.privateName(number_parser, "_positiveSuffix");
  var _negativeSuffix = dart.privateName(number_parser, "_negativeSuffix");
  var _localeZero = dart.privateName(number_parser, "_localeZero");
  var _initializeReplacements = dart.privateName(number_parser, "_initializeReplacements");
  number_parser.NumberParser = class NumberParser extends core.Object {
    get format() {
      return this[format$];
    }
    set format(value) {
      super.format = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get input() {
      return this[input];
    }
    set input(value) {
      super.input = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get gotPositive() {
      return this[gotPositive];
    }
    set gotPositive(value) {
      this[gotPositive] = value;
    }
    get gotNegative() {
      return this[gotNegative];
    }
    set gotNegative(value) {
      this[gotNegative] = value;
    }
    get gotPositiveSuffix() {
      return this[gotPositiveSuffix];
    }
    set gotPositiveSuffix(value) {
      this[gotPositiveSuffix] = value;
    }
    get gotNegativeSuffix() {
      return this[gotNegativeSuffix];
    }
    set gotNegativeSuffix(value) {
      this[gotNegativeSuffix] = value;
    }
    get done() {
      return this[done];
    }
    set done(value) {
      this[done] = value;
    }
    get prefixesSkipped() {
      return this[prefixesSkipped];
    }
    set prefixesSkipped(value) {
      this[prefixesSkipped] = value;
    }
    get scale() {
      return this[scale];
    }
    set scale(value) {
      this[scale] = value;
    }
    get symbols() {
      return this.format.symbols;
    }
    get [_positivePrefix]() {
      return this.format.positivePrefix;
    }
    get [_negativePrefix]() {
      return this.format.negativePrefix;
    }
    get [_positiveSuffix]() {
      return this.format.positiveSuffix;
    }
    get [_negativeSuffix]() {
      return this.format.negativeSuffix;
    }
    get [_localeZero]() {
      return this.format.localeZero;
    }
    static ['_#new#tearOff'](format, text) {
      return new number_parser.NumberParser.new(format, text);
    }
    get replacements() {
      let t0;
      t0 = this[_replacements];
      return t0 == null ? this[_replacements] = this[_initializeReplacements]() : t0;
    }
    [_initializeReplacements]() {
      return new (T.IdentityMapOfString$Function()).from([this.symbols.DECIMAL_SEP, dart.fn(() => ".", T.VoidToString()), this.symbols.EXP_SYMBOL, dart.fn(() => "E", T.VoidToString()), this.symbols.GROUP_SEP, dart.bind(this, 'handleSpace'), this.symbols.PERCENT, dart.fn(() => {
          this.scale = 100;
          return "";
        }, T.VoidToString()), this.symbols.PERMILL, dart.fn(() => {
          this.scale = 1000;
          return "";
        }, T.VoidToString()), " ", dart.bind(this, 'handleSpace'), " ", dart.bind(this, 'handleSpace'), "+", dart.fn(() => "+", T.VoidToString()), "-", dart.fn(() => "-", T.VoidToString())]);
    }
    invalidFormat() {
      return dart.throw(new core.FormatException.new("Invalid number: " + dart.str(this.input.contents)));
    }
    handleSpace() {
      return this.groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit ? "" : this.invalidFormat();
    }
    get groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit() {
      if (this.symbols.GROUP_SEP !== " " || this.symbols.GROUP_SEP !== " ") return true;
      let peeked = this.input.peek(this.symbols.GROUP_SEP.length + 1);
      return this.asDigit(core.String.as(dart.dsend(peeked, '_get', [dart.dsend(dart.dload(peeked, 'length'), '-', [1])]))) != null;
    }
    asDigit(char) {
      let charCode = char[$codeUnitAt](0);
      let digitValue = charCode - this[_localeZero];
      if (digitValue >= 0 && digitValue < 10) {
        return digitValue;
      } else {
        return null;
      }
    }
    checkPrefixes(opts) {
      let skip = opts && 'skip' in opts ? opts.skip : false;
      const checkPrefix = prefix => {
        return prefix[$isNotEmpty] && this.input.startsWith(prefix);
      };
      dart.fn(checkPrefix, T.StringTobool());
      if (checkPrefix(this[_positivePrefix])) this.gotPositive = true;
      if (checkPrefix(this[_negativePrefix])) this.gotNegative = true;
      if (this.gotPositive && this.gotNegative) {
        if (this[_positivePrefix].length > this[_negativePrefix].length) {
          this.gotNegative = false;
        } else if (this[_negativePrefix].length > this[_positivePrefix].length) {
          this.gotPositive = false;
        }
      }
      if (skip) {
        if (this.gotPositive) this.input.read(this[_positivePrefix].length);
        if (this.gotNegative) this.input.read(this[_negativePrefix].length);
      }
    }
    checkSuffixes() {
      let remainder = this.input.rest();
      if (dart.equals(remainder, this[_positiveSuffix])) this.gotPositiveSuffix = true;
      if (dart.equals(remainder, this[_negativeSuffix])) this.gotNegativeSuffix = true;
    }
    processNonDigit() {
      let foundAnInterpretation = false;
      if (this.input.index === 0 && !this.prefixesSkipped) {
        this.prefixesSkipped = true;
        this.checkPrefixes({skip: true});
        foundAnInterpretation = true;
      }
      for (let key of this.replacements[$keys]) {
        if (this.input.startsWith(key)) {
          this[_normalized].write(dart.dcall(dart.nullCheck(this.replacements[$_get](key)), []));
          this.input.read(key.length);
          return;
        }
      }
      if (!foundAnInterpretation) {
        this.done = true;
      }
    }
    parse() {
      if (this.text === this.symbols.NAN) return 0.0 / 0.0;
      if (this.text === this[_positivePrefix] + this.symbols.INFINITY + this[_positiveSuffix]) {
        return 1.0 / 0.0;
      }
      if (this.text === this[_negativePrefix] + this.symbols.INFINITY + this[_negativeSuffix]) {
        return -1.0 / 0.0;
      }
      this.checkPrefixes();
      let parsed = this.parseNumber(this.input);
      if (this.gotPositive && !this.gotPositiveSuffix) this.invalidNumber();
      if (this.gotNegative && !this.gotNegativeSuffix) this.invalidNumber();
      if (!this.input.atEnd()) this.invalidNumber();
      return parsed;
    }
    invalidNumber() {
      return dart.throw(new core.FormatException.new("Invalid Number: " + dart.str(this.input.contents)));
    }
    parseNumber(input) {
      if (this.gotNegative) {
        this[_normalized].write("-");
      }
      while (!this.done && !input.atEnd()) {
        let digit = this.asDigit(core.String.as(input.peek()));
        if (digit != null) {
          this[_normalized].writeCharCode(constants.asciiZeroCodeUnit + dart.notNull(digit));
          input.next();
        } else {
          this.processNonDigit();
        }
        this.checkSuffixes();
      }
      let normalizedText = this[_normalized].toString();
      let parsed = core.int.tryParse(normalizedText);
      parsed == null ? parsed = core.double.parse(normalizedText) : null;
      return dart.notNull(parsed) / this.scale;
    }
  };
  (number_parser.NumberParser.new = function(format, text) {
    this[value$] = null;
    this[_normalized] = new core.StringBuffer.new();
    this[gotPositive] = false;
    this[gotNegative] = false;
    this[gotPositiveSuffix] = false;
    this[gotNegativeSuffix] = false;
    this[done] = false;
    this[prefixesSkipped] = false;
    this[scale] = 1;
    this[_replacements] = null;
    this[format$] = format;
    this[text$] = text;
    this[input] = new intl_stream.IntlStream.new(text);
    this.scale = this.format.multiplier;
    this.value = this.parse();
  }).prototype = number_parser.NumberParser.prototype;
  dart.addTypeTests(number_parser.NumberParser);
  dart.addTypeCaches(number_parser.NumberParser);
  dart.setMethodSignature(number_parser.NumberParser, () => ({
    __proto__: dart.getMethods(number_parser.NumberParser.__proto__),
    [_initializeReplacements]: dart.fnType(core.Map$(core.String, core.Function), []),
    invalidFormat: dart.fnType(dart.void, []),
    handleSpace: dart.fnType(dart.void, []),
    asDigit: dart.fnType(dart.nullable(core.int), [core.String]),
    checkPrefixes: dart.fnType(dart.void, [], {skip: core.bool}, {}),
    checkSuffixes: dart.fnType(dart.void, []),
    processNonDigit: dart.fnType(dart.void, []),
    parse: dart.fnType(core.num, []),
    invalidNumber: dart.fnType(dart.void, []),
    parseNumber: dart.fnType(core.num, [intl_stream.IntlStream])
  }));
  dart.setGetterSignature(number_parser.NumberParser, () => ({
    __proto__: dart.getGetters(number_parser.NumberParser.__proto__),
    symbols: number_symbols.NumberSymbols,
    [_positivePrefix]: core.String,
    [_negativePrefix]: core.String,
    [_positiveSuffix]: core.String,
    [_negativeSuffix]: core.String,
    [_localeZero]: core.int,
    replacements: core.Map$(core.String, core.Function),
    groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit: core.bool
  }));
  dart.setLibraryUri(number_parser.NumberParser, I[0]);
  dart.setFieldSignature(number_parser.NumberParser, () => ({
    __proto__: dart.getFields(number_parser.NumberParser.__proto__),
    format: dart.finalFieldType(number_format.NumberFormat),
    text: dart.finalFieldType(core.String),
    input: dart.finalFieldType(intl_stream.IntlStream),
    value: dart.fieldType(dart.nullable(core.num)),
    [_normalized]: dart.finalFieldType(core.StringBuffer),
    gotPositive: dart.fieldType(core.bool),
    gotNegative: dart.fieldType(core.bool),
    gotPositiveSuffix: dart.fieldType(core.bool),
    gotNegativeSuffix: dart.fieldType(core.bool),
    done: dart.fieldType(core.bool),
    prefixesSkipped: dart.fieldType(core.bool),
    scale: dart.fieldType(core.int),
    [_replacements]: dart.fieldType(dart.nullable(core.Map$(core.String, core.Function)))
  }));
  var negativePrefix = dart.privateName(number_format, "NumberFormat.negativePrefix");
  var positivePrefix = dart.privateName(number_format, "NumberFormat.positivePrefix");
  var negativeSuffix = dart.privateName(number_format, "NumberFormat.negativeSuffix");
  var positiveSuffix = dart.privateName(number_format, "NumberFormat.positiveSuffix");
  var maximumIntegerDigits = dart.privateName(number_format, "NumberFormat.maximumIntegerDigits");
  var minimumIntegerDigits = dart.privateName(number_format, "NumberFormat.minimumIntegerDigits");
  var maximumFractionDigits = dart.privateName(number_format, "NumberFormat.maximumFractionDigits");
  var minimumFractionDigits = dart.privateName(number_format, "NumberFormat.minimumFractionDigits");
  var minimumExponentDigits = dart.privateName(number_format, "NumberFormat.minimumExponentDigits");
  var significantDigitsInUse = dart.privateName(number_format, "NumberFormat.significantDigitsInUse");
  var multiplier = dart.privateName(number_format, "NumberFormat.multiplier");
  var currencyName$ = dart.privateName(number_format, "NumberFormat.currencyName");
  var currencySymbol$ = dart.privateName(number_format, "NumberFormat.currencySymbol");
  var decimalDigits = dart.privateName(number_format, "NumberFormat.decimalDigits");
  var localeZero$ = dart.privateName(number_format, "NumberFormat.localeZero");
  var _significantDigits = dart.privateName(number_format, "_significantDigits");
  var _buffer = dart.privateName(number_format, "_buffer");
  var _isForCurrency$ = dart.privateName(number_format, "_isForCurrency");
  var _locale$ = dart.privateName(number_format, "_locale");
  var _pattern$ = dart.privateName(number_format, "_pattern");
  var _symbols$ = dart.privateName(number_format, "_symbols");
  var _zeroOffset$ = dart.privateName(number_format, "_zeroOffset");
  var _multiplierDigits = dart.privateName(number_format, "_multiplierDigits");
  var _useExponentialNotation = dart.privateName(number_format, "_useExponentialNotation");
  var _groupingSize = dart.privateName(number_format, "_groupingSize");
  var _finalGroupingSize = dart.privateName(number_format, "_finalGroupingSize");
  var _useSignForPositiveExponent = dart.privateName(number_format, "_useSignForPositiveExponent");
  var _decimalSeparatorAlwaysShown = dart.privateName(number_format, "_decimalSeparatorAlwaysShown");
  var _isNaN = dart.privateName(number_format, "_isNaN");
  var _isInfinite = dart.privateName(number_format, "_isInfinite");
  var _signPrefix = dart.privateName(number_format, "_signPrefix");
  var _add = dart.privateName(number_format, "_add");
  var _formatNumber = dart.privateName(number_format, "_formatNumber");
  var _signSuffix = dart.privateName(number_format, "_signSuffix");
  var _formatExponential = dart.privateName(number_format, "_formatExponential");
  var _formatFixed = dart.privateName(number_format, "_formatFixed");
  var _formatExponent = dart.privateName(number_format, "_formatExponent");
  var _pad = dart.privateName(number_format, "_pad");
  var _floor = dart.privateName(number_format, "_floor");
  var _round = dart.privateName(number_format, "_round");
  var _fractionDigitsAfter = dart.privateName(number_format, "_fractionDigitsAfter");
  var _integerDigits = dart.privateName(number_format, "_integerDigits");
  var _hasIntegerDigits = dart.privateName(number_format, "_hasIntegerDigits");
  var _addDigit = dart.privateName(number_format, "_addDigit");
  var _group = dart.privateName(number_format, "_group");
  var _addZero = dart.privateName(number_format, "_addZero");
  var _decimalSeparator = dart.privateName(number_format, "_decimalSeparator");
  var _formatFractionPart = dart.privateName(number_format, "_formatFractionPart");
  var _mainIntegerDigits = dart.privateName(number_format, "_mainIntegerDigits");
  var _slowPad = dart.privateName(number_format, "_slowPad");
  number_format.NumberFormat = class NumberFormat extends core.Object {
    get negativePrefix() {
      return this[negativePrefix];
    }
    set negativePrefix(value) {
      super.negativePrefix = value;
    }
    get positivePrefix() {
      return this[positivePrefix];
    }
    set positivePrefix(value) {
      super.positivePrefix = value;
    }
    get negativeSuffix() {
      return this[negativeSuffix];
    }
    set negativeSuffix(value) {
      super.negativeSuffix = value;
    }
    get positiveSuffix() {
      return this[positiveSuffix];
    }
    set positiveSuffix(value) {
      super.positiveSuffix = value;
    }
    get maximumIntegerDigits() {
      return this[maximumIntegerDigits];
    }
    set maximumIntegerDigits(value) {
      this[maximumIntegerDigits] = value;
    }
    get minimumIntegerDigits() {
      return this[minimumIntegerDigits];
    }
    set minimumIntegerDigits(value) {
      this[minimumIntegerDigits] = value;
    }
    get maximumFractionDigits() {
      return this[maximumFractionDigits];
    }
    set maximumFractionDigits(value) {
      this[maximumFractionDigits] = value;
    }
    get minimumFractionDigits() {
      return this[minimumFractionDigits];
    }
    set minimumFractionDigits(value) {
      this[minimumFractionDigits] = value;
    }
    get minimumExponentDigits() {
      return this[minimumExponentDigits];
    }
    set minimumExponentDigits(value) {
      this[minimumExponentDigits] = value;
    }
    get significantDigitsInUse() {
      return this[significantDigitsInUse];
    }
    set significantDigitsInUse(value) {
      this[significantDigitsInUse] = value;
    }
    get multiplier() {
      return this[multiplier];
    }
    set multiplier(value) {
      super.multiplier = value;
    }
    get currencyName() {
      return this[currencyName$];
    }
    set currencyName(value) {
      this[currencyName$] = value;
    }
    get currencySymbol() {
      return this[currencySymbol$];
    }
    set currencySymbol(value) {
      super.currencySymbol = value;
    }
    get decimalDigits() {
      return this[decimalDigits];
    }
    set decimalDigits(value) {
      super.decimalDigits = value;
    }
    get localeZero() {
      return this[localeZero$];
    }
    set localeZero(value) {
      super.localeZero = value;
    }
    get significantDigits() {
      return this[_significantDigits];
    }
    set significantDigits(x) {
      this[_significantDigits] = x;
      this.significantDigitsInUse = true;
    }
    static new(newPattern = null, locale = null) {
      return number_format.NumberFormat._forPattern(locale, dart.fn(x => newPattern, T.NumberSymbolsToStringN()));
    }
    static ['_#new#tearOff'](newPattern = null, locale = null) {
      return number_format.NumberFormat.new(newPattern, locale);
    }
    static decimalPattern(locale = null) {
      return number_format.NumberFormat._forPattern(locale, dart.fn(x => x.DECIMAL_PATTERN, T.NumberSymbolsToString()));
    }
    static ['_#decimalPattern#tearOff'](locale = null) {
      return number_format.NumberFormat.decimalPattern(locale);
    }
    static percentPattern(locale = null) {
      return number_format.NumberFormat._forPattern(locale, dart.fn(x => x.PERCENT_PATTERN, T.NumberSymbolsToString()));
    }
    static ['_#percentPattern#tearOff'](locale = null) {
      return number_format.NumberFormat.percentPattern(locale);
    }
    static decimalPercentPattern(opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      return number_format.NumberFormat._forPattern(locale, dart.fn(x => x.PERCENT_PATTERN, T.NumberSymbolsToString()), {decimalDigits: decimalDigits});
    }
    static ['_#decimalPercentPattern#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      return number_format.NumberFormat.decimalPercentPattern({locale: locale, decimalDigits: decimalDigits});
    }
    static scientificPattern(locale = null) {
      return number_format.NumberFormat._forPattern(locale, dart.fn(x => x.SCIENTIFIC_PATTERN, T.NumberSymbolsToString()));
    }
    static ['_#scientificPattern#tearOff'](locale = null) {
      return number_format.NumberFormat.scientificPattern(locale);
    }
    static currencyPattern(locale = null, currencyNameOrSymbol = null) {
      if (currencyNameOrSymbol != null && number_format.NumberFormat._checkCurrencyName.hasMatch(currencyNameOrSymbol)) {
        return number_format.NumberFormat.currency({locale: locale, name: currencyNameOrSymbol});
      } else {
        return number_format.NumberFormat.currency({locale: locale, symbol: currencyNameOrSymbol});
      }
    }
    static ['_#currencyPattern#tearOff'](locale = null, currencyNameOrSymbol = null) {
      return number_format.NumberFormat.currencyPattern(locale, currencyNameOrSymbol);
    }
    static ['_#currency#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let symbol = opts && 'symbol' in opts ? opts.symbol : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      let customPattern = opts && 'customPattern' in opts ? opts.customPattern : null;
      return number_format.NumberFormat.currency({locale: locale, name: name, symbol: symbol, decimalDigits: decimalDigits, customPattern: customPattern});
    }
    static currency(opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let symbol = opts && 'symbol' in opts ? opts.symbol : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      let customPattern = opts && 'customPattern' in opts ? opts.customPattern : null;
      return number_format.NumberFormat._forPattern(locale, dart.fn(x => {
        let t0;
        t0 = customPattern;
        return t0 == null ? x.CURRENCY_PATTERN : t0;
      }, T.NumberSymbolsToString()), {name: name, currencySymbol: symbol, decimalDigits: decimalDigits, isForCurrency: true});
    }
    static ['_#simpleCurrency#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      return number_format.NumberFormat.simpleCurrency({locale: locale, name: name, decimalDigits: decimalDigits});
    }
    static simpleCurrency(opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      return number_format.NumberFormat._forPattern(locale, dart.fn(x => x.CURRENCY_PATTERN, T.NumberSymbolsToString()), {name: name, decimalDigits: decimalDigits, lookupSimpleCurrencySymbol: true, isForCurrency: true});
    }
    simpleCurrencySymbol(currencyCode) {
      let t0;
      t0 = constants.simpleCurrencySymbols[$_get](currencyCode);
      return t0 == null ? currencyCode : t0;
    }
    static _forPattern(locale, getPattern, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let currencySymbol = opts && 'currencySymbol' in opts ? opts.currencySymbol : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      let lookupSimpleCurrencySymbol = opts && 'lookupSimpleCurrencySymbol' in opts ? opts.lookupSimpleCurrencySymbol : false;
      let isForCurrency = opts && 'isForCurrency' in opts ? opts.isForCurrency : false;
      locale = dart.nullCheck(intl_helpers.verifiedLocale(locale, C[0] || CT.C0, null));
      let symbols = number_symbols.NumberSymbols.as(number_symbols_data.numberFormatSymbols[$_get](locale));
      let localeZero = symbols.ZERO_DIGIT[$codeUnitAt](0);
      let zeroOffset = localeZero - constants.asciiZeroCodeUnit;
      name == null ? name = symbols.DEF_CURRENCY_CODE : null;
      if (currencySymbol == null && lookupSimpleCurrencySymbol) {
        currencySymbol = constants.simpleCurrencySymbols[$_get](name);
      }
      currencySymbol == null ? currencySymbol = name : null;
      let pattern = getPattern(symbols);
      return new number_format.NumberFormat.__(name, currencySymbol, isForCurrency, locale, localeZero, pattern, symbols, zeroOffset, number_format_parser.NumberFormatParser.parse(symbols, pattern, isForCurrency, currencySymbol, name, decimalDigits));
    }
    static ['_#_forPattern#tearOff'](locale, getPattern, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let currencySymbol = opts && 'currencySymbol' in opts ? opts.currencySymbol : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      let lookupSimpleCurrencySymbol = opts && 'lookupSimpleCurrencySymbol' in opts ? opts.lookupSimpleCurrencySymbol : false;
      let isForCurrency = opts && 'isForCurrency' in opts ? opts.isForCurrency : false;
      return number_format.NumberFormat._forPattern(locale, getPattern, {name: name, currencySymbol: currencySymbol, decimalDigits: decimalDigits, lookupSimpleCurrencySymbol: lookupSimpleCurrencySymbol, isForCurrency: isForCurrency});
    }
    static ['_#_#tearOff'](currencyName, currencySymbol, _isForCurrency, _locale, localeZero, _pattern, _symbols, _zeroOffset, result) {
      return new number_format.NumberFormat.__(currencyName, currencySymbol, _isForCurrency, _locale, localeZero, _pattern, _symbols, _zeroOffset, result);
    }
    static ['_#compact#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      return number_format.NumberFormat.compact({locale: locale});
    }
    static compact(opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      return number_format._CompactNumberFormat.new({locale: locale, formatType: number_format._CompactFormatType.COMPACT_DECIMAL_SHORT_PATTERN});
    }
    static ['_#compactLong#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      return number_format.NumberFormat.compactLong({locale: locale});
    }
    static compactLong(opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      return number_format._CompactNumberFormat.new({locale: locale, formatType: number_format._CompactFormatType.COMPACT_DECIMAL_LONG_PATTERN});
    }
    static ['_#compactSimpleCurrency#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      return number_format.NumberFormat.compactSimpleCurrency({locale: locale, name: name, decimalDigits: decimalDigits});
    }
    static compactSimpleCurrency(opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      return number_format._CompactNumberFormat.new({locale: locale, formatType: number_format._CompactFormatType.COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN, name: name, getPattern: dart.fn(symbols => symbols.CURRENCY_PATTERN, T.NumberSymbolsToString()), decimalDigits: decimalDigits, lookupSimpleCurrencySymbol: true, isForCurrency: true});
    }
    static compactCurrency(opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let symbol = opts && 'symbol' in opts ? opts.symbol : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      return number_format._CompactNumberFormat.new({locale: locale, formatType: number_format._CompactFormatType.COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN, name: name, getPattern: dart.fn(symbols => symbols.CURRENCY_PATTERN, T.NumberSymbolsToString()), currencySymbol: symbol, decimalDigits: decimalDigits, isForCurrency: true});
    }
    static ['_#compactCurrency#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let symbol = opts && 'symbol' in opts ? opts.symbol : null;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      return number_format.NumberFormat.compactCurrency({locale: locale, name: name, symbol: symbol, decimalDigits: decimalDigits});
    }
    get locale() {
      return this[_locale$];
    }
    static localeExists(localeName) {
      if (localeName == null) return false;
      return number_symbols_data.numberFormatSymbols[$containsKey](localeName);
    }
    get symbols() {
      return this[_symbols$];
    }
    format(number) {
      if (this[_isNaN](number)) return this.symbols.NAN;
      if (this[_isInfinite](number)) return this[_signPrefix](number) + this.symbols.INFINITY;
      this[_add](this[_signPrefix](number));
      this[_formatNumber](dart.dsend(number, 'abs', []));
      this[_add](this[_signSuffix](number));
      let result = this[_buffer].toString();
      this[_buffer].clear();
      return result;
    }
    parse(text) {
      return dart.nullCheck(new number_parser.NumberParser.new(this, text).value);
    }
    [_formatNumber](number) {
      if (this[_useExponentialNotation]) {
        this[_formatExponential](core.num.as(number));
      } else {
        this[_formatFixed](number);
      }
    }
    [_formatExponential](number) {
      if (number === 0.0) {
        this[_formatFixed](number);
        this[_formatExponent](0);
        return;
      }
      let exponent = (math.log(number) / number_format._ln10)[$floor]();
      let mantissa = number / math.pow(10.0, exponent);
      if (this.maximumIntegerDigits > 1 && this.maximumIntegerDigits > this.minimumIntegerDigits) {
        while (exponent[$modulo](this.maximumIntegerDigits) !== 0) {
          mantissa = mantissa * 10;
          exponent = exponent - 1;
        }
      } else {
        if (this.minimumIntegerDigits < 1) {
          exponent = exponent + 1;
          mantissa = mantissa / 10;
        } else {
          exponent = exponent - (this.minimumIntegerDigits - 1);
          mantissa = mantissa * math.pow(10, this.minimumIntegerDigits - 1);
        }
      }
      this[_formatFixed](mantissa);
      this[_formatExponent](exponent);
    }
    [_formatExponent](exponent) {
      this[_add](this.symbols.EXP_SYMBOL);
      if (exponent < 0) {
        exponent = -exponent;
        this[_add](this.symbols.MINUS_SIGN);
      } else if (this[_useSignForPositiveExponent]) {
        this[_add](this.symbols.PLUS_SIGN);
      }
      this[_pad](this.minimumExponentDigits, exponent[$toString]());
    }
    [_isInfinite](number) {
      return typeof number == 'number' ? number[$isInfinite] : false;
    }
    [_isNaN](number) {
      return typeof number == 'number' ? number[$isNaN] : false;
    }
    [_floor](number) {
      if (dart.dtest(dart.dload(number, 'isNegative')) && !dart.dtest(dart.dload(dart.dsend(number, 'abs', []), 'isNegative'))) {
        dart.throw(new core.ArgumentError.new("Internal error: expected positive number, got " + dart.str(number)));
      }
      return typeof number == 'number' ? number[$floor]() : dart.dsend(number, '~/', [1]);
    }
    [_round](number) {
      if (typeof number == 'number') {
        if (number[$isInfinite]) {
          return number_format.NumberFormat._maxInt;
        } else {
          return number[$round]();
        }
      } else if (dart.equals(dart.dsend(number, 'remainder', [1]), 0)) {
        return number;
      } else {
        let basic = this[_floor](number);
        let fraction = dart.dsend(dart.dsend(dart.dsend(number, '-', [basic]), 'toDouble', []), 'round', []);
        return dart.equals(fraction, 0) ? number : dart.dsend(number, '+', [fraction]);
      }
    }
    static numberOfIntegerDigits(number) {
      let simpleNumber = dart.dsend(dart.dsend(number, 'toDouble', []), 'abs', []);
      if (dart.dtest(dart.dsend(simpleNumber, '<', [10]))) return 1;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [100]))) return 2;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [1000]))) return 3;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [10000]))) return 4;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [100000]))) return 5;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [1000000]))) return 6;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [10000000]))) return 7;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [100000000]))) return 8;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [1000000000]))) return 9;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [10000000000]))) return 10;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [100000000000]))) return 11;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [1000000000000]))) return 12;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [10000000000000]))) return 13;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [100000000000000]))) return 14;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [1000000000000000]))) return 15;
      if (dart.dtest(dart.dsend(simpleNumber, '<', [10000000000000000]))) return 16;
      return math.max(core.int, 1, (math.log(core.num.as(simpleNumber)) / number_format._ln10)[$ceil]());
    }
    [_fractionDigitsAfter](remainingSignificantDigits) {
      return math.max(core.int, 0, remainingSignificantDigits);
    }
    [_formatFixed](number) {
      let integerPart = null;
      let fractionPart = null;
      let extraIntegerDigits = null;
      let fractionDigits = this.maximumFractionDigits;
      let power = 0;
      let digitMultiplier = null;
      if (this[_isInfinite](number)) {
        integerPart = dart.dsend(number, 'toInt', []);
        extraIntegerDigits = 0;
        fractionPart = 0;
      } else {
        integerPart = this[_floor](number);
        let fraction = dart.dsend(number, '-', [integerPart]);
        if (!dart.equals(dart.dsend(fraction, 'toInt', []), 0)) {
          integerPart = number;
          fraction = 0;
        }
        if (this.significantDigitsInUse) {
          let significantDigits = dart.nullCheck(this.significantDigits);
          let integerLength = number_format.NumberFormat.numberOfIntegerDigits(integerPart);
          let remainingSignificantDigits = significantDigits - this[_multiplierDigits] - integerLength;
          fractionDigits = this[_fractionDigitsAfter](remainingSignificantDigits);
          if (remainingSignificantDigits < 0) {
            let divideBy = math.pow(10, integerLength - significantDigits);
            integerPart = dart.dsend(dart.dsend(dart.dsend(integerPart, '/', [divideBy]), 'round', []), '*', [divideBy]);
          }
        }
        power = dart.asInt(math.pow(10, fractionDigits));
        digitMultiplier = power * this.multiplier;
        let remainingDigits = dart.dsend(this[_round](dart.dsend(fraction, '*', [digitMultiplier])), 'toInt', []);
        if (dart.dtest(dart.dsend(remainingDigits, '>=', [digitMultiplier]))) {
          integerPart = dart.dsend(integerPart, '+', [1]);
          remainingDigits = dart.dsend(remainingDigits, '-', [digitMultiplier]);
        }
        extraIntegerDigits = core.int.as(dart.dsend(remainingDigits, '~/', [power]));
        fractionPart = core.int.as(dart.dsend(remainingDigits, '%', [power]));
      }
      let integerDigits = this[_integerDigits](integerPart, extraIntegerDigits);
      let digitLength = integerDigits.length;
      let fractionPresent = fractionDigits > 0 && (this.minimumFractionDigits > 0 || fractionPart > 0);
      if (this[_hasIntegerDigits](integerDigits)) {
        let padding = "0"[$times](this.minimumIntegerDigits - digitLength);
        integerDigits = padding + integerDigits;
        digitLength = integerDigits.length;
        for (let i = 0; i < digitLength; i = i + 1) {
          this[_addDigit](integerDigits[$codeUnitAt](i));
          this[_group](digitLength, i);
        }
      } else if (!fractionPresent) {
        this[_addZero]();
      }
      this[_decimalSeparator](fractionPresent);
      this[_formatFractionPart]((fractionPart + power)[$toString]());
    }
    [_integerDigits](integerPart, extraIntegerDigits) {
      let paddingDigits = "";
      if (typeof integerPart == 'number' && dart.notNull(integerPart) > number_format.NumberFormat._maxInt) {
        let howManyDigitsTooBig = (math.log(integerPart) / number_format._ln10)[$ceil]() - number_format.NumberFormat._maxDigits;
        let divisor = math.pow(10, howManyDigitsTooBig)[$round]();
        if (divisor === 0) divisor = math.pow(10.0, howManyDigitsTooBig);
        paddingDigits = "0"[$times](howManyDigitsTooBig[$toInt]());
        integerPart = (dart.notNull(integerPart) / divisor)[$truncate]();
      }
      let extra = dart.equals(extraIntegerDigits, 0) ? "" : dart.toString(extraIntegerDigits);
      let intDigits = this[_mainIntegerDigits](integerPart);
      let paddedExtra = intDigits[$isEmpty] ? extra : extra[$padLeft](this[_multiplierDigits], "0");
      return intDigits + paddedExtra + paddingDigits;
    }
    [_mainIntegerDigits](integer) {
      if (dart.equals(integer, 0)) return "";
      let digits = dart.toString(integer);
      if (this.significantDigitsInUse && digits.length > dart.nullCheck(this.significantDigits)) {
        digits = digits[$substring](0, this.significantDigits) + ""[$padLeft](digits.length - dart.nullCheck(this.significantDigits), "0");
      }
      return digits[$startsWith]("-") ? digits[$substring](1) : digits;
    }
    [_formatFractionPart](fractionPart) {
      let fractionLength = fractionPart.length;
      while (fractionPart[$codeUnitAt](fractionLength - 1) === constants.asciiZeroCodeUnit && fractionLength > this.minimumFractionDigits + 1) {
        fractionLength = fractionLength - 1;
      }
      for (let i = 1; i < fractionLength; i = i + 1) {
        this[_addDigit](fractionPart[$codeUnitAt](i));
      }
    }
    [_decimalSeparator](fractionPresent) {
      if (this[_decimalSeparatorAlwaysShown] || fractionPresent) {
        this[_add](this.symbols.DECIMAL_SEP);
      }
    }
    [_hasIntegerDigits](digits) {
      return digits[$isNotEmpty] || this.minimumIntegerDigits > 0;
    }
    [_add](x) {
      this[_buffer].write(x);
    }
    [_addZero]() {
      this[_buffer].write(this.symbols.ZERO_DIGIT);
    }
    [_addDigit](x) {
      this[_buffer].writeCharCode(x + this[_zeroOffset$]);
    }
    [_pad](numberOfDigits, basic) {
      if (this[_zeroOffset$] === 0) {
        this[_buffer].write(basic[$padLeft](numberOfDigits, "0"));
      } else {
        this[_slowPad](numberOfDigits, basic);
      }
    }
    [_slowPad](numberOfDigits, basic) {
      for (let i = 0; i < numberOfDigits - basic.length; i = i + 1) {
        this[_add](this.symbols.ZERO_DIGIT);
      }
      for (let i = 0; i < basic.length; i = i + 1) {
        this[_addDigit](basic[$codeUnitAt](i));
      }
    }
    [_group](totalLength, position) {
      let distanceFromEnd = totalLength - position;
      if (distanceFromEnd <= 1 || this[_groupingSize] <= 0) return;
      if (distanceFromEnd === this[_finalGroupingSize] + 1) {
        this[_add](this.symbols.GROUP_SEP);
      } else if (distanceFromEnd > this[_finalGroupingSize] && (distanceFromEnd - this[_finalGroupingSize])[$modulo](this[_groupingSize]) === 1) {
        this[_add](this.symbols.GROUP_SEP);
      }
    }
    [_signPrefix](x) {
      return dart.dtest(dart.dload(x, 'isNegative')) ? this.negativePrefix : this.positivePrefix;
    }
    [_signSuffix](x) {
      return dart.dtest(dart.dload(x, 'isNegative')) ? this.negativeSuffix : this.positiveSuffix;
    }
    turnOffGrouping() {
      this[_groupingSize] = 0;
      this[_finalGroupingSize] = 0;
    }
    toString() {
      return "NumberFormat(" + this[_locale$] + ", " + dart.str(this[_pattern$]) + ")";
    }
  };
  (number_format.NumberFormat.__ = function(currencyName, currencySymbol, _isForCurrency, _locale, localeZero, _pattern, _symbols, _zeroOffset, result) {
    this[_significantDigits] = null;
    this[significantDigitsInUse] = false;
    this[_buffer] = new core.StringBuffer.new();
    this[currencyName$] = currencyName;
    this[currencySymbol$] = currencySymbol;
    this[_isForCurrency$] = _isForCurrency;
    this[_locale$] = _locale;
    this[localeZero$] = localeZero;
    this[_pattern$] = _pattern;
    this[_symbols$] = _symbols;
    this[_zeroOffset$] = _zeroOffset;
    this[positivePrefix] = result.positivePrefix;
    this[negativePrefix] = result.negativePrefix;
    this[positiveSuffix] = result.positiveSuffix;
    this[negativeSuffix] = result.negativeSuffix;
    this[multiplier] = result.multiplier;
    this[_multiplierDigits] = result.multiplierDigits;
    this[_useExponentialNotation] = result.useExponentialNotation;
    this[minimumExponentDigits] = result.minimumExponentDigits;
    this[maximumIntegerDigits] = result.maximumIntegerDigits;
    this[minimumIntegerDigits] = result.minimumIntegerDigits;
    this[maximumFractionDigits] = result.maximumFractionDigits;
    this[minimumFractionDigits] = result.minimumFractionDigits;
    this[_groupingSize] = result.groupingSize;
    this[_finalGroupingSize] = result.finalGroupingSize;
    this[_useSignForPositiveExponent] = result.useSignForPositiveExponent;
    this[_decimalSeparatorAlwaysShown] = result.decimalSeparatorAlwaysShown;
    this[decimalDigits] = result.decimalDigits;
    ;
  }).prototype = number_format.NumberFormat.prototype;
  dart.addTypeTests(number_format.NumberFormat);
  dart.addTypeCaches(number_format.NumberFormat);
  dart.setMethodSignature(number_format.NumberFormat, () => ({
    __proto__: dart.getMethods(number_format.NumberFormat.__proto__),
    simpleCurrencySymbol: dart.fnType(core.String, [core.String]),
    format: dart.fnType(core.String, [dart.dynamic]),
    parse: dart.fnType(core.num, [core.String]),
    [_formatNumber]: dart.fnType(dart.void, [dart.dynamic]),
    [_formatExponential]: dart.fnType(dart.void, [core.num]),
    [_formatExponent]: dart.fnType(dart.void, [core.num]),
    [_isInfinite]: dart.fnType(core.bool, [dart.dynamic]),
    [_isNaN]: dart.fnType(core.bool, [dart.dynamic]),
    [_floor]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_round]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_fractionDigitsAfter]: dart.fnType(core.int, [core.int]),
    [_formatFixed]: dart.fnType(dart.void, [dart.dynamic]),
    [_integerDigits]: dart.fnType(core.String, [dart.dynamic, dart.dynamic]),
    [_mainIntegerDigits]: dart.fnType(core.String, [dart.dynamic]),
    [_formatFractionPart]: dart.fnType(dart.void, [core.String]),
    [_decimalSeparator]: dart.fnType(dart.void, [core.bool]),
    [_hasIntegerDigits]: dart.fnType(core.bool, [core.String]),
    [_add]: dart.fnType(dart.void, [core.String]),
    [_addZero]: dart.fnType(dart.void, []),
    [_addDigit]: dart.fnType(dart.void, [core.int]),
    [_pad]: dart.fnType(dart.void, [core.int, core.String]),
    [_slowPad]: dart.fnType(dart.void, [core.int, core.String]),
    [_group]: dart.fnType(dart.void, [core.int, core.int]),
    [_signPrefix]: dart.fnType(core.String, [dart.dynamic]),
    [_signSuffix]: dart.fnType(core.String, [dart.dynamic]),
    turnOffGrouping: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(number_format.NumberFormat, () => ['new', 'decimalPattern', 'percentPattern', 'decimalPercentPattern', 'scientificPattern', 'currencyPattern', 'currency', 'simpleCurrency', '_forPattern', 'compact', 'compactLong', 'compactSimpleCurrency', 'compactCurrency', 'localeExists', 'numberOfIntegerDigits']);
  dart.setGetterSignature(number_format.NumberFormat, () => ({
    __proto__: dart.getGetters(number_format.NumberFormat.__proto__),
    significantDigits: dart.nullable(core.int),
    locale: core.String,
    symbols: number_symbols.NumberSymbols
  }));
  dart.setSetterSignature(number_format.NumberFormat, () => ({
    __proto__: dart.getSetters(number_format.NumberFormat.__proto__),
    significantDigits: dart.nullable(core.int)
  }));
  dart.setLibraryUri(number_format.NumberFormat, I[1]);
  dart.setFieldSignature(number_format.NumberFormat, () => ({
    __proto__: dart.getFields(number_format.NumberFormat.__proto__),
    negativePrefix: dart.finalFieldType(core.String),
    positivePrefix: dart.finalFieldType(core.String),
    negativeSuffix: dart.finalFieldType(core.String),
    positiveSuffix: dart.finalFieldType(core.String),
    [_groupingSize]: dart.fieldType(core.int),
    [_finalGroupingSize]: dart.fieldType(core.int),
    [_decimalSeparatorAlwaysShown]: dart.finalFieldType(core.bool),
    [_useSignForPositiveExponent]: dart.finalFieldType(core.bool),
    [_useExponentialNotation]: dart.finalFieldType(core.bool),
    [_isForCurrency$]: dart.finalFieldType(core.bool),
    maximumIntegerDigits: dart.fieldType(core.int),
    minimumIntegerDigits: dart.fieldType(core.int),
    maximumFractionDigits: dart.fieldType(core.int),
    minimumFractionDigits: dart.fieldType(core.int),
    minimumExponentDigits: dart.fieldType(core.int),
    [_significantDigits]: dart.fieldType(dart.nullable(core.int)),
    significantDigitsInUse: dart.fieldType(core.bool),
    multiplier: dart.finalFieldType(core.int),
    [_multiplierDigits]: dart.finalFieldType(core.int),
    [_pattern$]: dart.finalFieldType(dart.nullable(core.String)),
    [_locale$]: dart.finalFieldType(core.String),
    [_symbols$]: dart.finalFieldType(number_symbols.NumberSymbols),
    currencyName: dart.fieldType(dart.nullable(core.String)),
    currencySymbol: dart.finalFieldType(core.String),
    decimalDigits: dart.finalFieldType(dart.nullable(core.int)),
    [_buffer]: dart.finalFieldType(core.StringBuffer),
    localeZero: dart.finalFieldType(core.int),
    [_zeroOffset$]: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(number_format.NumberFormat, () => ['_checkCurrencyName', '_maxInt', '_maxDigits']);
  dart.defineExtensionMethods(number_format.NumberFormat, ['toString']);
  dart.defineLazy(number_format.NumberFormat, {
    /*number_format.NumberFormat._checkCurrencyName*/get _checkCurrencyName() {
      return core.RegExp.new("^[a-zA-Z]{3}$");
    },
    /*number_format.NumberFormat._maxInt*/get _maxInt() {
      return typeof 1 == 'number' ? math.pow(2, 52) : (1e+300)[$floor]();
    },
    /*number_format.NumberFormat._maxDigits*/get _maxDigits() {
      return (math.log(number_format.NumberFormat._maxInt) / math.log(10))[$ceil]();
    }
  }, false);
  number_format._CompactStyleBase = class _CompactStyleBase extends core.Object {};
  (number_format._CompactStyleBase.new = function() {
    ;
  }).prototype = number_format._CompactStyleBase.prototype;
  dart.addTypeTests(number_format._CompactStyleBase);
  dart.addTypeCaches(number_format._CompactStyleBase);
  dart.setLibraryUri(number_format._CompactStyleBase, I[1]);
  number_format._CompactStyleWithNegative = class _CompactStyleWithNegative extends number_format._CompactStyleBase {
    static ['_#new#tearOff'](positiveStyle, negativeStyle) {
      return new number_format._CompactStyleWithNegative.new(positiveStyle, negativeStyle);
    }
    styleForSign(number) {
      return dart.dtest(dart.dsend(number, '<', [0])) ? this.negativeStyle : this.positiveStyle;
    }
    get totalDigits() {
      return this.positiveStyle.totalDigits;
    }
    get divisor() {
      return this.positiveStyle.divisor;
    }
    get allStyles() {
      return T.JSArrayOf_CompactStyle().of([this.positiveStyle, this.negativeStyle]);
    }
  };
  (number_format._CompactStyleWithNegative.new = function(positiveStyle, negativeStyle) {
    this.positiveStyle = positiveStyle;
    this.negativeStyle = negativeStyle;
    ;
  }).prototype = number_format._CompactStyleWithNegative.prototype;
  dart.addTypeTests(number_format._CompactStyleWithNegative);
  dart.addTypeCaches(number_format._CompactStyleWithNegative);
  dart.setMethodSignature(number_format._CompactStyleWithNegative, () => ({
    __proto__: dart.getMethods(number_format._CompactStyleWithNegative.__proto__),
    styleForSign: dart.fnType(number_format._CompactStyle, [dart.dynamic])
  }));
  dart.setGetterSignature(number_format._CompactStyleWithNegative, () => ({
    __proto__: dart.getGetters(number_format._CompactStyleWithNegative.__proto__),
    totalDigits: core.int,
    divisor: core.int,
    allStyles: core.List$(number_format._CompactStyle)
  }));
  dart.setLibraryUri(number_format._CompactStyleWithNegative, I[1]);
  dart.setFieldSignature(number_format._CompactStyleWithNegative, () => ({
    __proto__: dart.getFields(number_format._CompactStyleWithNegative.__proto__),
    positiveStyle: dart.finalFieldType(number_format._CompactStyle),
    negativeStyle: dart.finalFieldType(number_format._CompactStyle)
  }));
  var divisor$ = dart.privateName(number_format, "_CompactStyle.divisor");
  number_format._CompactStyle = class _CompactStyle extends number_format._CompactStyleBase {
    get divisor() {
      return this[divisor$];
    }
    set divisor(value) {
      this[divisor$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let pattern = opts && 'pattern' in opts ? opts.pattern : null;
      let normalizedExponent = opts && 'normalizedExponent' in opts ? opts.normalizedExponent : 0;
      let divisor = opts && 'divisor' in opts ? opts.divisor : 1;
      let expectedDigits = opts && 'expectedDigits' in opts ? opts.expectedDigits : 1;
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      let suffix = opts && 'suffix' in opts ? opts.suffix : "";
      return new number_format._CompactStyle.new({pattern: pattern, normalizedExponent: normalizedExponent, divisor: divisor, expectedDigits: expectedDigits, prefix: prefix, suffix: suffix});
    }
    get totalDigits() {
      return this.normalizedExponent + this.expectedDigits - 1;
    }
    get isFallback() {
      return this.pattern == null || this.pattern === "0";
    }
    get printsAsIs() {
      return this.isFallback || dart.nullCheck(this.pattern)[$replaceAll](core.RegExp.new("[0 ¤]"), "")[$isEmpty];
    }
    styleForSign(number) {
      return this;
    }
    get allStyles() {
      return T.JSArrayOf_CompactStyle().of([this]);
    }
    static _hasNonZeroContent(pattern) {
      return !number_format._CompactStyle._justZeros.hasMatch(pattern);
    }
    static createStyle(pattern, normalizedExponent) {
      let match = number_format._CompactStyle._regex.firstMatch(pattern);
      let integerDigits = dart.nullCheck(dart.nullCheck(match).group(2)).length;
      let prefix = dart.nullCheck(match.group(1));
      let suffix = dart.nullCheck(match.group(3));
      let divisor = 1;
      if (number_format._CompactStyle._hasNonZeroContent(pattern)) {
        divisor = dart.asInt(math.pow(10, normalizedExponent - integerDigits + 1));
      }
      return new number_format._CompactStyle.new({pattern: pattern, normalizedExponent: normalizedExponent, expectedDigits: integerDigits, prefix: prefix, suffix: suffix, divisor: divisor});
    }
  };
  (number_format._CompactStyle.new = function(opts) {
    let pattern = opts && 'pattern' in opts ? opts.pattern : null;
    let normalizedExponent = opts && 'normalizedExponent' in opts ? opts.normalizedExponent : 0;
    let divisor = opts && 'divisor' in opts ? opts.divisor : 1;
    let expectedDigits = opts && 'expectedDigits' in opts ? opts.expectedDigits : 1;
    let prefix = opts && 'prefix' in opts ? opts.prefix : "";
    let suffix = opts && 'suffix' in opts ? opts.suffix : "";
    this.pattern = pattern;
    this.normalizedExponent = normalizedExponent;
    this[divisor$] = divisor;
    this.expectedDigits = expectedDigits;
    this.prefix = prefix;
    this.suffix = suffix;
    ;
  }).prototype = number_format._CompactStyle.prototype;
  dart.addTypeTests(number_format._CompactStyle);
  dart.addTypeCaches(number_format._CompactStyle);
  dart.setMethodSignature(number_format._CompactStyle, () => ({
    __proto__: dart.getMethods(number_format._CompactStyle.__proto__),
    styleForSign: dart.fnType(number_format._CompactStyle, [dart.dynamic])
  }));
  dart.setStaticMethodSignature(number_format._CompactStyle, () => ['_hasNonZeroContent', 'createStyle']);
  dart.setGetterSignature(number_format._CompactStyle, () => ({
    __proto__: dart.getGetters(number_format._CompactStyle.__proto__),
    totalDigits: core.int,
    isFallback: core.bool,
    printsAsIs: core.bool,
    allStyles: core.List$(number_format._CompactStyle)
  }));
  dart.setLibraryUri(number_format._CompactStyle, I[1]);
  dart.setFieldSignature(number_format._CompactStyle, () => ({
    __proto__: dart.getFields(number_format._CompactStyle.__proto__),
    pattern: dart.fieldType(dart.nullable(core.String)),
    normalizedExponent: dart.fieldType(core.int),
    divisor: dart.fieldType(core.int),
    expectedDigits: dart.fieldType(core.int),
    prefix: dart.fieldType(core.String),
    suffix: dart.fieldType(core.String)
  }));
  dart.setStaticFieldSignature(number_format._CompactStyle, () => ['_regex', '_justZeros']);
  dart.defineLazy(number_format._CompactStyle, {
    /*number_format._CompactStyle._regex*/get _regex() {
      return core.RegExp.new("([^0]*)(0+)(.*)");
    },
    /*number_format._CompactStyle._justZeros*/get _justZeros() {
      return core.RegExp.new("^0*$");
    }
  }, false);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  number_format._CompactFormatType = class _CompactFormatType extends core._Enum {
    toString() {
      return "_CompactFormatType." + this[_name];
    }
  };
  (number_format._CompactFormatType.new = function(index, name) {
    number_format._CompactFormatType.__proto__.new.call(this, index, name);
    ;
  }).prototype = number_format._CompactFormatType.prototype;
  dart.addTypeTests(number_format._CompactFormatType);
  dart.addTypeCaches(number_format._CompactFormatType);
  dart.setLibraryUri(number_format._CompactFormatType, I[1]);
  dart.setStaticFieldSignature(number_format._CompactFormatType, () => ['values', 'COMPACT_DECIMAL_SHORT_PATTERN', 'COMPACT_DECIMAL_LONG_PATTERN', 'COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN']);
  dart.defineExtensionMethods(number_format._CompactFormatType, ['toString']);
  dart.defineLazy(number_format._CompactFormatType, {
    /*number_format._CompactFormatType.values*/get values() {
      return C[1] || CT.C1;
    },
    /*number_format._CompactFormatType.COMPACT_DECIMAL_SHORT_PATTERN*/get COMPACT_DECIMAL_SHORT_PATTERN() {
      return C[2] || CT.C2;
    },
    /*number_format._CompactFormatType.COMPACT_DECIMAL_LONG_PATTERN*/get COMPACT_DECIMAL_LONG_PATTERN() {
      return C[3] || CT.C3;
    },
    /*number_format._CompactFormatType.COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN*/get COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN() {
      return C[4] || CT.C4;
    }
  }, false);
  var _style = dart.privateName(number_format, "_style");
  var _styles$ = dart.privateName(number_format, "_styles");
  var _styleFor = dart.privateName(number_format, "_styleFor");
  var _divide = dart.privateName(number_format, "_divide");
  var _stylesForSearching = dart.privateName(number_format, "_stylesForSearching");
  var _tryParsing = dart.privateName(number_format, "_tryParsing");
  number_format._CompactNumberFormat = class _CompactNumberFormat extends number_format.NumberFormat {
    static _forDecimal(symbols) {
      return symbols.DECIMAL_PATTERN;
    }
    static new(opts) {
      let t2;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let formatType = opts && 'formatType' in opts ? opts.formatType : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let currencySymbol = opts && 'currencySymbol' in opts ? opts.currencySymbol : null;
      let getPattern = opts && 'getPattern' in opts ? opts.getPattern : C[5] || CT.C5;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      let lookupSimpleCurrencySymbol = opts && 'lookupSimpleCurrencySymbol' in opts ? opts.lookupSimpleCurrencySymbol : false;
      let isForCurrency = opts && 'isForCurrency' in opts ? opts.isForCurrency : false;
      locale = dart.nullCheck(intl_helpers.verifiedLocale(locale, C[0] || CT.C0, null));
      let symbols = number_symbols.NumberSymbols.as(number_symbols_data.numberFormatSymbols[$_get](locale));
      let localeZero = symbols.ZERO_DIGIT[$codeUnitAt](0);
      let zeroOffset = localeZero - constants.asciiZeroCodeUnit;
      name == null ? name = symbols.DEF_CURRENCY_CODE : null;
      if (currencySymbol == null && lookupSimpleCurrencySymbol) {
        currencySymbol = constants.simpleCurrencySymbols[$_get](name);
      }
      currencySymbol == null ? currencySymbol = name : null;
      let pattern = getPattern(symbols);
      let patterns = null;
      let compactSymbols = dart.nullCheck(number_symbols_data.compactNumberSymbols[$_get](locale));
      let styles = T.JSArrayOf_CompactStyleBase().of([]);
      switch (formatType) {
        case C[2] || CT.C2:
          {
            patterns = compactSymbols.COMPACT_DECIMAL_SHORT_PATTERN;
            break;
          }
        case C[3] || CT.C3:
          {
            patterns = (t2 = compactSymbols.COMPACT_DECIMAL_LONG_PATTERN, t2 == null ? compactSymbols.COMPACT_DECIMAL_SHORT_PATTERN : t2);
            break;
          }
        case C[4] || CT.C4:
          {
            patterns = compactSymbols.COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN;
            break;
          }
        default:
          {
            dart.throw(new core.ArgumentError.notNull("formatType"));
          }
      }
      patterns[$forEach](dart.fn((exponent, pattern) => {
        if (pattern[$contains](";")) {
          let patterns = pattern[$split](";");
          styles[$add](new number_format._CompactStyleWithNegative.new(number_format._CompactStyle.createStyle(patterns[$first], exponent), number_format._CompactStyle.createStyle(patterns[$last], exponent)));
        } else {
          styles[$add](number_format._CompactStyle.createStyle(pattern, exponent));
        }
      }, T.intAndStringTovoid()));
      styles = styles[$reversed][$toList]();
      styles[$add](new number_format._CompactStyle.new());
      return new number_format._CompactNumberFormat.__(name, currencySymbol, isForCurrency, locale, localeZero, pattern, symbols, zeroOffset, number_format_parser.NumberFormatParser.parse(symbols, pattern, isForCurrency, currencySymbol, name, decimalDigits), styles);
    }
    static ['_#new#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let formatType = opts && 'formatType' in opts ? opts.formatType : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let currencySymbol = opts && 'currencySymbol' in opts ? opts.currencySymbol : null;
      let getPattern = opts && 'getPattern' in opts ? opts.getPattern : C[5] || CT.C5;
      let decimalDigits = opts && 'decimalDigits' in opts ? opts.decimalDigits : null;
      let lookupSimpleCurrencySymbol = opts && 'lookupSimpleCurrencySymbol' in opts ? opts.lookupSimpleCurrencySymbol : false;
      let isForCurrency = opts && 'isForCurrency' in opts ? opts.isForCurrency : false;
      return number_format._CompactNumberFormat.new({locale: locale, formatType: formatType, name: name, currencySymbol: currencySymbol, getPattern: getPattern, decimalDigits: decimalDigits, lookupSimpleCurrencySymbol: lookupSimpleCurrencySymbol, isForCurrency: isForCurrency});
    }
    static ['_#_#tearOff'](currencyName, currencySymbol, isForCurrency, locale, localeZero, pattern, symbols, zeroOffset, result, _styles) {
      return new number_format._CompactNumberFormat.__(currencyName, currencySymbol, isForCurrency, locale, localeZero, pattern, symbols, zeroOffset, result, _styles);
    }
    format(number) {
      let style = this[_styleFor](number);
      this[_style] = style;
      let divisor = style.printsAsIs ? 1 : style.divisor;
      let numberToFormat = this[_divide](number, divisor);
      let formatted = super.format(numberToFormat);
      let prefix = style.prefix;
      let suffix = style.suffix;
      if (this[_isForCurrency$] && !style.isFallback) {
        formatted = formatted[$replaceFirst](this.currencySymbol, "")[$trim]();
        prefix = prefix[$replaceFirst]("¤", this.currencySymbol);
        suffix = suffix[$replaceFirst]("¤", this.currencySymbol);
      }
      let withExtras = prefix + formatted + suffix;
      this[_style] = null;
      return withExtras;
    }
    [_fractionDigitsAfter](remainingSignificantDigits) {
      let newFractionDigits = super[_fractionDigitsAfter](remainingSignificantDigits);
      if (!this[_isForCurrency$] || !dart.nullCheck(this[_style]).isFallback) return newFractionDigits;
      if (newFractionDigits > 0 && newFractionDigits < dart.nullCheck(this.decimalDigits)) {
        return dart.nullCheck(this.decimalDigits);
      } else {
        return math.min(core.int, newFractionDigits, dart.nullCheck(this.decimalDigits));
      }
    }
    get minimumFractionDigits() {
      if (!this[_isForCurrency$] || !this.significantDigitsInUse || this[_style] == null || dart.nullCheck(this[_style]).isFallback) {
        return super.minimumFractionDigits;
      } else {
        return 0;
      }
    }
    set minimumFractionDigits(value) {
      super.minimumFractionDigits = value;
    }
    [_divide](numerator, denominator) {
      if (typeof numerator == 'number') {
        return dart.notNull(numerator) / denominator;
      }
      let divided = dart.dsend(numerator, '~/', [denominator]);
      let integerPart = dart.dsend(divided, 'toInt', []);
      if (!dart.equals(divided, integerPart)) {
        dart.throw(new core.FormatException.new("Number too big to use with compact format", numerator));
      }
      let remainder = dart.dsend(dart.dsend(numerator, 'remainder', [denominator]), 'toInt', []);
      let originalFraction = dart.dsend(numerator, '-', [dart.dsend(numerator, '~/', [1])]);
      let fraction = dart.equals(originalFraction, 0) ? 0 : dart.dsend(originalFraction, '/', [denominator]);
      return core.num.as(dart.dsend(dart.dsend(integerPart, '+', [dart.dsend(remainder, '/', [denominator])]), '+', [fraction]));
    }
    [_styleFor](number) {
      let originalLength = number_format.NumberFormat.numberOfIntegerDigits(number);
      let additionalDigits = originalLength - dart.nullCheck(this.significantDigits);
      let digitLength = originalLength;
      if (additionalDigits > 0) {
        let divisor = math.pow(10, additionalDigits);
        let rounded = dart.dsend(dart.dsend(dart.dsend(dart.dsend(number, 'toDouble', []), '/', [divisor]), 'round', []), '*', [divisor]);
        digitLength = number_format.NumberFormat.numberOfIntegerDigits(rounded);
      }
      for (let style of this[_styles$]) {
        if (digitLength > style.totalDigits) {
          return style.styleForSign(number);
        }
      }
      dart.throw(new core.FormatException.new("No compact style found for number. This should not happen", number));
    }
    get [_stylesForSearching]() {
      return this[_styles$][$reversed][$expand](number_format._CompactStyle, dart.fn(x => x.allStyles, T._CompactStyleBaseToIterableOf_CompactStyle()));
    }
    parse(text) {
      for (let style of this[_stylesForSearching]) {
        if (text[$startsWith](style.prefix) && text[$endsWith](style.suffix)) {
          let numberText = text[$substring](style.prefix.length, text.length - style.suffix.length);
          let number = this[_tryParsing](numberText);
          if (number != null) {
            return dart.notNull(number) * style.divisor;
          }
        }
      }
      dart.throw(new core.FormatException.new("Cannot parse compact number in locale '" + this.locale + "'", text));
    }
    [_tryParsing](text) {
      try {
        return super.parse(text);
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.FormatException.is(ex)) {
          return null;
        } else
          throw e;
      }
    }
  };
  (number_format._CompactNumberFormat.__ = function(currencyName, currencySymbol, isForCurrency, locale, localeZero, pattern, symbols, zeroOffset, result, _styles) {
    this[_style] = null;
    this[_styles$] = _styles;
    number_format._CompactNumberFormat.__proto__.__.call(this, currencyName, currencySymbol, isForCurrency, locale, localeZero, pattern, symbols, zeroOffset, result);
    this.significantDigits = 3;
    this.turnOffGrouping();
  }).prototype = number_format._CompactNumberFormat.prototype;
  dart.addTypeTests(number_format._CompactNumberFormat);
  dart.addTypeCaches(number_format._CompactNumberFormat);
  dart.setMethodSignature(number_format._CompactNumberFormat, () => ({
    __proto__: dart.getMethods(number_format._CompactNumberFormat.__proto__),
    [_divide]: dart.fnType(core.num, [dart.dynamic, core.int]),
    [_styleFor]: dart.fnType(number_format._CompactStyle, [dart.dynamic]),
    [_tryParsing]: dart.fnType(dart.nullable(core.num), [core.String])
  }));
  dart.setStaticMethodSignature(number_format._CompactNumberFormat, () => ['_forDecimal', 'new']);
  dart.setGetterSignature(number_format._CompactNumberFormat, () => ({
    __proto__: dart.getGetters(number_format._CompactNumberFormat.__proto__),
    minimumFractionDigits: core.int,
    [_stylesForSearching]: core.Iterable$(number_format._CompactStyle)
  }));
  dart.setLibraryUri(number_format._CompactNumberFormat, I[1]);
  dart.setFieldSignature(number_format._CompactNumberFormat, () => ({
    __proto__: dart.getFields(number_format._CompactNumberFormat.__proto__),
    [_styles$]: dart.finalFieldType(core.List$(number_format._CompactStyleBase)),
    [_style]: dart.fieldType(dart.nullable(number_format._CompactStyle))
  }));
  dart.defineLazy(number_format, {
    /*number_format._ln10*/get _ln10() {
      return math.log(10);
    }
  }, false);
  dart.trackLibraries("packages/intl/src/intl/number_parser.dart", {
    "package:intl/src/intl/number_parser.dart": number_parser,
    "package:intl/src/intl/number_format.dart": number_format
  }, {
    "package:intl/src/intl/number_format.dart": ["compact_number_format.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["number_parser.dart","number_format.dart","compact_number_format.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/intl/src/intl/number_parser.dart.lib.js"}');
  // Exports:
  return {
    src__intl__number_parser: number_parser,
    src__intl__number_format: number_format
  };
}));

//# sourceMappingURL=number_parser.dart.lib.js.map