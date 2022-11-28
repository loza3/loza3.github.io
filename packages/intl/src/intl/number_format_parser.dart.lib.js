define(['dart_sdk', 'packages/intl/src/intl/string_iterator.dart', 'packages/intl/number_symbols_data.dart', 'packages/intl/number_symbols.dart'], (function load__packages__intl__src__intl__number_format_parser_dart(dart_sdk, packages__intl__src__intl__string_iterator$46dart, packages__intl__number_symbols_data$46dart, packages__intl__number_symbols$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const string_iterator = packages__intl__src__intl__string_iterator$46dart.src__intl__string_iterator;
  const number_symbols_data = packages__intl__number_symbols_data$46dart.number_symbols_data;
  const number_symbols = packages__intl__number_symbols$46dart.number_symbols;
  var number_format_parser = Object.create(dart.library);
  var $round = dartx.round;
  var $toUpperCase = dartx.toUpperCase;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Too many percent/permill"
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:intl/src/intl/number_format_parser.dart"];
  var negativePrefix = dart.privateName(number_format_parser, "NumberFormatParseResult.negativePrefix");
  var positivePrefix = dart.privateName(number_format_parser, "NumberFormatParseResult.positivePrefix");
  var negativeSuffix = dart.privateName(number_format_parser, "NumberFormatParseResult.negativeSuffix");
  var positiveSuffix = dart.privateName(number_format_parser, "NumberFormatParseResult.positiveSuffix");
  var multiplier = dart.privateName(number_format_parser, "NumberFormatParseResult.multiplier");
  var minimumExponentDigits = dart.privateName(number_format_parser, "NumberFormatParseResult.minimumExponentDigits");
  var maximumIntegerDigits = dart.privateName(number_format_parser, "NumberFormatParseResult.maximumIntegerDigits");
  var minimumIntegerDigits = dart.privateName(number_format_parser, "NumberFormatParseResult.minimumIntegerDigits");
  var maximumFractionDigits = dart.privateName(number_format_parser, "NumberFormatParseResult.maximumFractionDigits");
  var minimumFractionDigits = dart.privateName(number_format_parser, "NumberFormatParseResult.minimumFractionDigits");
  var groupingSize = dart.privateName(number_format_parser, "NumberFormatParseResult.groupingSize");
  var finalGroupingSize = dart.privateName(number_format_parser, "NumberFormatParseResult.finalGroupingSize");
  var decimalSeparatorAlwaysShown = dart.privateName(number_format_parser, "NumberFormatParseResult.decimalSeparatorAlwaysShown");
  var useSignForPositiveExponent = dart.privateName(number_format_parser, "NumberFormatParseResult.useSignForPositiveExponent");
  var useExponentialNotation = dart.privateName(number_format_parser, "NumberFormatParseResult.useExponentialNotation");
  var decimalDigits$ = dart.privateName(number_format_parser, "NumberFormatParseResult.decimalDigits");
  number_format_parser.NumberFormatParseResult = class NumberFormatParseResult extends core.Object {
    get negativePrefix() {
      return this[negativePrefix];
    }
    set negativePrefix(value) {
      this[negativePrefix] = value;
    }
    get positivePrefix() {
      return this[positivePrefix];
    }
    set positivePrefix(value) {
      this[positivePrefix] = value;
    }
    get negativeSuffix() {
      return this[negativeSuffix];
    }
    set negativeSuffix(value) {
      this[negativeSuffix] = value;
    }
    get positiveSuffix() {
      return this[positiveSuffix];
    }
    set positiveSuffix(value) {
      this[positiveSuffix] = value;
    }
    get multiplier() {
      return this[multiplier];
    }
    set multiplier(value) {
      this[multiplier] = value;
    }
    get minimumExponentDigits() {
      return this[minimumExponentDigits];
    }
    set minimumExponentDigits(value) {
      this[minimumExponentDigits] = value;
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
    get groupingSize() {
      return this[groupingSize];
    }
    set groupingSize(value) {
      this[groupingSize] = value;
    }
    get finalGroupingSize() {
      return this[finalGroupingSize];
    }
    set finalGroupingSize(value) {
      this[finalGroupingSize] = value;
    }
    get decimalSeparatorAlwaysShown() {
      return this[decimalSeparatorAlwaysShown];
    }
    set decimalSeparatorAlwaysShown(value) {
      this[decimalSeparatorAlwaysShown] = value;
    }
    get useSignForPositiveExponent() {
      return this[useSignForPositiveExponent];
    }
    set useSignForPositiveExponent(value) {
      this[useSignForPositiveExponent] = value;
    }
    get useExponentialNotation() {
      return this[useExponentialNotation];
    }
    set useExponentialNotation(value) {
      this[useExponentialNotation] = value;
    }
    get decimalDigits() {
      return this[decimalDigits$];
    }
    set decimalDigits(value) {
      this[decimalDigits$] = value;
    }
    get multiplierDigits() {
      return (math.log(this.multiplier) / number_format_parser._ln10)[$round]();
    }
    static ['_#new#tearOff'](symbols, decimalDigits) {
      return new number_format_parser.NumberFormatParseResult.new(symbols, decimalDigits);
    }
  };
  (number_format_parser.NumberFormatParseResult.new = function(symbols, decimalDigits) {
    this[positivePrefix] = "";
    this[negativeSuffix] = "";
    this[positiveSuffix] = "";
    this[multiplier] = 1;
    this[minimumExponentDigits] = 0;
    this[maximumIntegerDigits] = 40;
    this[minimumIntegerDigits] = 1;
    this[maximumFractionDigits] = 3;
    this[minimumFractionDigits] = 0;
    this[groupingSize] = 3;
    this[finalGroupingSize] = 3;
    this[decimalSeparatorAlwaysShown] = false;
    this[useSignForPositiveExponent] = false;
    this[useExponentialNotation] = false;
    this[decimalDigits$] = decimalDigits;
    this[negativePrefix] = symbols.MINUS_SIGN;
    ;
  }).prototype = number_format_parser.NumberFormatParseResult.prototype;
  dart.addTypeTests(number_format_parser.NumberFormatParseResult);
  dart.addTypeCaches(number_format_parser.NumberFormatParseResult);
  dart.setGetterSignature(number_format_parser.NumberFormatParseResult, () => ({
    __proto__: dart.getGetters(number_format_parser.NumberFormatParseResult.__proto__),
    multiplierDigits: core.int
  }));
  dart.setLibraryUri(number_format_parser.NumberFormatParseResult, I[0]);
  dart.setFieldSignature(number_format_parser.NumberFormatParseResult, () => ({
    __proto__: dart.getFields(number_format_parser.NumberFormatParseResult.__proto__),
    negativePrefix: dart.fieldType(core.String),
    positivePrefix: dart.fieldType(core.String),
    negativeSuffix: dart.fieldType(core.String),
    positiveSuffix: dart.fieldType(core.String),
    multiplier: dart.fieldType(core.int),
    minimumExponentDigits: dart.fieldType(core.int),
    maximumIntegerDigits: dart.fieldType(core.int),
    minimumIntegerDigits: dart.fieldType(core.int),
    maximumFractionDigits: dart.fieldType(core.int),
    minimumFractionDigits: dart.fieldType(core.int),
    groupingSize: dart.fieldType(core.int),
    finalGroupingSize: dart.fieldType(core.int),
    decimalSeparatorAlwaysShown: dart.fieldType(core.bool),
    useSignForPositiveExponent: dart.fieldType(core.bool),
    useExponentialNotation: dart.fieldType(core.bool),
    decimalDigits: dart.fieldType(dart.nullable(core.int))
  }));
  var symbols$ = dart.privateName(number_format_parser, "NumberFormatParser.symbols");
  var pattern = dart.privateName(number_format_parser, "NumberFormatParser.pattern");
  var isForCurrency$ = dart.privateName(number_format_parser, "NumberFormatParser.isForCurrency");
  var currencySymbol$ = dart.privateName(number_format_parser, "NumberFormatParser.currencySymbol");
  var currencyName$ = dart.privateName(number_format_parser, "NumberFormatParser.currencyName");
  var result = dart.privateName(number_format_parser, "NumberFormatParser.result");
  var groupingSizeSetExplicitly = dart.privateName(number_format_parser, "NumberFormatParser.groupingSizeSetExplicitly");
  var inQuote = dart.privateName(number_format_parser, "NumberFormatParser.inQuote");
  var decimalPos = dart.privateName(number_format_parser, "NumberFormatParser.decimalPos");
  var digitLeftCount = dart.privateName(number_format_parser, "NumberFormatParser.digitLeftCount");
  var zeroDigitCount = dart.privateName(number_format_parser, "NumberFormatParser.zeroDigitCount");
  var digitRightCount = dart.privateName(number_format_parser, "NumberFormatParser.digitRightCount");
  var groupingCount = dart.privateName(number_format_parser, "NumberFormatParser.groupingCount");
  var _parse = dart.privateName(number_format_parser, "_parse");
  var _defaultDecimalDigits = dart.privateName(number_format_parser, "_defaultDecimalDigits");
  var _parseAffix = dart.privateName(number_format_parser, "_parseAffix");
  var _parseTrunk = dart.privateName(number_format_parser, "_parseTrunk");
  var FormatException_offset = dart.privateName(core, "FormatException.offset");
  var FormatException_source = dart.privateName(core, "FormatException.source");
  var FormatException_message = dart.privateName(core, "FormatException.message");
  number_format_parser.NumberFormatParser = class NumberFormatParser extends core.Object {
    get symbols() {
      return this[symbols$];
    }
    set symbols(value) {
      super.symbols = value;
    }
    get pattern() {
      return this[pattern];
    }
    set pattern(value) {
      super.pattern = value;
    }
    get isForCurrency() {
      return this[isForCurrency$];
    }
    set isForCurrency(value) {
      super.isForCurrency = value;
    }
    get currencySymbol() {
      return this[currencySymbol$];
    }
    set currencySymbol(value) {
      super.currencySymbol = value;
    }
    get currencyName() {
      return this[currencyName$];
    }
    set currencyName(value) {
      super.currencyName = value;
    }
    get result() {
      return this[result];
    }
    set result(value) {
      super.result = value;
    }
    get groupingSizeSetExplicitly() {
      return this[groupingSizeSetExplicitly];
    }
    set groupingSizeSetExplicitly(value) {
      this[groupingSizeSetExplicitly] = value;
    }
    get inQuote() {
      return this[inQuote];
    }
    set inQuote(value) {
      this[inQuote] = value;
    }
    get decimalPos() {
      return this[decimalPos];
    }
    set decimalPos(value) {
      this[decimalPos] = value;
    }
    get digitLeftCount() {
      return this[digitLeftCount];
    }
    set digitLeftCount(value) {
      this[digitLeftCount] = value;
    }
    get zeroDigitCount() {
      return this[zeroDigitCount];
    }
    set zeroDigitCount(value) {
      this[zeroDigitCount] = value;
    }
    get digitRightCount() {
      return this[digitRightCount];
    }
    set digitRightCount(value) {
      this[digitRightCount] = value;
    }
    get groupingCount() {
      return this[groupingCount];
    }
    set groupingCount(value) {
      this[groupingCount] = value;
    }
    static ['_#new#tearOff'](symbols, input, isForCurrency, currencySymbol, currencyName, decimalDigits) {
      return new number_format_parser.NumberFormatParser.new(symbols, input, isForCurrency, currencySymbol, currencyName, decimalDigits);
    }
    static parse(symbols, input, isForCurrency, currencySymbol, currencyName, decimalDigits) {
      let t0;
      return input == null ? new number_format_parser.NumberFormatParseResult.new(symbols, decimalDigits) : (t0 = new number_format_parser.NumberFormatParser.new(symbols, input, isForCurrency, currencySymbol, currencyName, decimalDigits), (() => {
        t0[_parse]();
        return t0;
      })()).result;
    }
    get [_defaultDecimalDigits]() {
      let t0;
      t0 = number_symbols_data.currencyFractionDigits[$_get](this.currencyName[$toUpperCase]());
      return t0 == null ? dart.nullCheck(number_symbols_data.currencyFractionDigits[$_get]("DEFAULT")) : t0;
    }
    [_parse]() {
      let t0;
      this.result.positivePrefix = this[_parseAffix]();
      let trunk = this[_parseTrunk]();
      this.result.positiveSuffix = this[_parseAffix]();
      if (this.pattern.current === ";") {
        this.pattern.moveNext();
        this.result.negativePrefix = this[_parseAffix]();
        let trunkIterator = new string_iterator.StringIterator.new(trunk);
        while (trunkIterator.moveNext()) {
          let each = trunkIterator.current;
          if (this.pattern.current != each && this.pattern.current != null) {
            dart.throw(new core.FormatException.new("Positive and negative trunks must be the same", trunk));
          }
          this.pattern.moveNext();
        }
        this.result.negativeSuffix = this[_parseAffix]();
      } else {
        this.result.negativePrefix = this.result.negativePrefix + this.result.positivePrefix;
        this.result.negativeSuffix = this.result.positiveSuffix + this.result.negativeSuffix;
      }
      if (this.isForCurrency) {
        t0 = this.result;
        t0.decimalDigits == null ? t0.decimalDigits = this[_defaultDecimalDigits] : null;
      }
      if (this.result.decimalDigits != null) {
        this.result.minimumFractionDigits = dart.nullCheck(this.result.decimalDigits);
        this.result.maximumFractionDigits = dart.nullCheck(this.result.decimalDigits);
      }
    }
    [_parseAffix]() {
      let affix = new core.StringBuffer.new();
      this.inQuote = false;
      while (this.parseCharacterAffix(affix) && this.pattern.moveNext()) {
      }
      return affix.toString();
    }
    parseCharacterAffix(affix) {
      let ch = this.pattern.current;
      if (ch == null) return false;
      if (ch === "'") {
        if (this.pattern.peek === "'") {
          this.pattern.moveNext();
          affix.write("'");
        } else {
          this.inQuote = !this.inQuote;
        }
        return true;
      }
      if (this.inQuote) {
        affix.write(ch);
      } else {
        switch (ch) {
          case "#":
          case "0":
          case ",":
          case ".":
          case ";":
            {
              return false;
            }
          case "¤":
            {
              affix.write(this.currencySymbol);
              break;
            }
          case "%":
            {
              if (this.result.multiplier !== 1 && this.result.multiplier !== 100) {
                dart.throw(C[0] || CT.C0);
              }
              this.result.multiplier = 100;
              affix.write(this.symbols.PERCENT);
              break;
            }
          case "‰":
            {
              if (this.result.multiplier !== 1 && this.result.multiplier !== 1000) {
                dart.throw(C[0] || CT.C0);
              }
              this.result.multiplier = 1000;
              affix.write(this.symbols.PERMILL);
              break;
            }
          default:
            {
              affix.write(ch);
            }
        }
      }
      return true;
    }
    [_parseTrunk]() {
      let loop = true;
      let trunk = new core.StringBuffer.new();
      while (this.pattern.current != null && loop) {
        loop = this.parseTrunkCharacter(trunk);
      }
      if (this.zeroDigitCount === 0 && this.digitLeftCount > 0 && this.decimalPos >= 0) {
        let n = this.decimalPos === 0 ? 1 : this.decimalPos;
        this.digitRightCount = this.digitLeftCount - n;
        this.digitLeftCount = n - 1;
        this.zeroDigitCount = 1;
      }
      if (this.decimalPos < 0 && this.digitRightCount > 0 || this.decimalPos >= 0 && (this.decimalPos < this.digitLeftCount || this.decimalPos > this.digitLeftCount + this.zeroDigitCount) || this.groupingCount === 0) {
        dart.throw(new core.FormatException.new("Malformed pattern \"" + this.pattern.input + "\""));
      }
      let totalDigits = this.digitLeftCount + this.zeroDigitCount + this.digitRightCount;
      this.result.maximumFractionDigits = this.decimalPos >= 0 ? totalDigits - this.decimalPos : 0;
      if (this.decimalPos >= 0) {
        this.result.minimumFractionDigits = this.digitLeftCount + this.zeroDigitCount - this.decimalPos;
        if (this.result.minimumFractionDigits < 0) {
          this.result.minimumFractionDigits = 0;
        }
      }
      let effectiveDecimalPos = this.decimalPos >= 0 ? this.decimalPos : totalDigits;
      this.result.minimumIntegerDigits = effectiveDecimalPos - this.digitLeftCount;
      if (this.result.useExponentialNotation) {
        this.result.maximumIntegerDigits = this.digitLeftCount + this.result.minimumIntegerDigits;
        if (this.result.maximumFractionDigits === 0 && this.result.minimumIntegerDigits === 0) {
          this.result.minimumIntegerDigits = 1;
        }
      }
      this.result.finalGroupingSize = math.max(core.int, 0, this.groupingCount);
      if (!this.groupingSizeSetExplicitly) {
        this.result.groupingSize = this.result.finalGroupingSize;
      }
      this.result.decimalSeparatorAlwaysShown = this.decimalPos === 0 || this.decimalPos === totalDigits;
      return trunk.toString();
    }
    parseTrunkCharacter(trunk) {
      let t0;
      let ch = this.pattern.current;
      switch (ch) {
        case "#":
          {
            if (this.zeroDigitCount > 0) {
              this.digitRightCount = this.digitRightCount + 1;
            } else {
              this.digitLeftCount = this.digitLeftCount + 1;
            }
            if (this.groupingCount >= 0 && this.decimalPos < 0) {
              this.groupingCount = this.groupingCount + 1;
            }
            break;
          }
        case "0":
          {
            if (this.digitRightCount > 0) {
              dart.throw(new core.FormatException.new("Unexpected \"0\" in pattern \"" + this.pattern.input));
            }
            this.zeroDigitCount = this.zeroDigitCount + 1;
            if (this.groupingCount >= 0 && this.decimalPos < 0) {
              this.groupingCount = this.groupingCount + 1;
            }
            break;
          }
        case ",":
          {
            if (this.groupingCount > 0) {
              this.groupingSizeSetExplicitly = true;
              this.result.groupingSize = this.groupingCount;
            }
            this.groupingCount = 0;
            break;
          }
        case ".":
          {
            if (this.decimalPos >= 0) {
              dart.throw(new core.FormatException.new("Multiple decimal separators in pattern \"" + dart.str(this.pattern) + "\""));
            }
            this.decimalPos = this.digitLeftCount + this.zeroDigitCount + this.digitRightCount;
            break;
          }
        case "E":
          {
            dart.dsend(trunk, 'write', [ch]);
            if (this.result.useExponentialNotation) {
              dart.throw(new core.FormatException.new("Multiple exponential symbols in pattern \"" + dart.str(this.pattern) + "\""));
            }
            this.result.useExponentialNotation = true;
            this.result.minimumExponentDigits = 0;
            this.pattern.moveNext();
            let nextChar = this.pattern.current;
            if (nextChar === "+") {
              dart.dsend(trunk, 'write', [this.pattern.current]);
              this.pattern.moveNext();
              this.result.useSignForPositiveExponent = true;
            }
            while (this.pattern.current === "0") {
              dart.dsend(trunk, 'write', [this.pattern.current]);
              this.pattern.moveNext();
              t0 = this.result;
              t0.minimumExponentDigits = t0.minimumExponentDigits + 1;
            }
            if (this.digitLeftCount + this.zeroDigitCount < 1 || this.result.minimumExponentDigits < 1) {
              dart.throw(new core.FormatException.new("Malformed exponential pattern \"" + dart.str(this.pattern) + "\""));
            }
            return false;
          }
        default:
          {
            return false;
          }
      }
      dart.dsend(trunk, 'write', [ch]);
      this.pattern.moveNext();
      return true;
    }
  };
  (number_format_parser.NumberFormatParser.new = function(symbols, input, isForCurrency, currencySymbol, currencyName, decimalDigits) {
    this[groupingSizeSetExplicitly] = false;
    this[inQuote] = false;
    this[decimalPos] = -1;
    this[digitLeftCount] = 0;
    this[zeroDigitCount] = 0;
    this[digitRightCount] = 0;
    this[groupingCount] = -1;
    this[symbols$] = symbols;
    this[isForCurrency$] = isForCurrency;
    this[currencySymbol$] = currencySymbol;
    this[currencyName$] = currencyName;
    this[result] = new number_format_parser.NumberFormatParseResult.new(symbols, decimalDigits);
    this[pattern] = new string_iterator.StringIterator.new(input);
    this.pattern.moveNext();
  }).prototype = number_format_parser.NumberFormatParser.prototype;
  dart.addTypeTests(number_format_parser.NumberFormatParser);
  dart.addTypeCaches(number_format_parser.NumberFormatParser);
  dart.setMethodSignature(number_format_parser.NumberFormatParser, () => ({
    __proto__: dart.getMethods(number_format_parser.NumberFormatParser.__proto__),
    [_parse]: dart.fnType(dart.void, []),
    [_parseAffix]: dart.fnType(core.String, []),
    parseCharacterAffix: dart.fnType(core.bool, [core.StringBuffer]),
    [_parseTrunk]: dart.fnType(core.String, []),
    parseTrunkCharacter: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setStaticMethodSignature(number_format_parser.NumberFormatParser, () => ['parse']);
  dart.setGetterSignature(number_format_parser.NumberFormatParser, () => ({
    __proto__: dart.getGetters(number_format_parser.NumberFormatParser.__proto__),
    [_defaultDecimalDigits]: core.int
  }));
  dart.setLibraryUri(number_format_parser.NumberFormatParser, I[0]);
  dart.setFieldSignature(number_format_parser.NumberFormatParser, () => ({
    __proto__: dart.getFields(number_format_parser.NumberFormatParser.__proto__),
    symbols: dart.finalFieldType(number_symbols.NumberSymbols),
    pattern: dart.finalFieldType(string_iterator.StringIterator),
    isForCurrency: dart.finalFieldType(core.bool),
    currencySymbol: dart.finalFieldType(core.String),
    currencyName: dart.finalFieldType(core.String),
    result: dart.finalFieldType(number_format_parser.NumberFormatParseResult),
    groupingSizeSetExplicitly: dart.fieldType(core.bool),
    inQuote: dart.fieldType(core.bool),
    decimalPos: dart.fieldType(core.int),
    digitLeftCount: dart.fieldType(core.int),
    zeroDigitCount: dart.fieldType(core.int),
    digitRightCount: dart.fieldType(core.int),
    groupingCount: dart.fieldType(core.int)
  }));
  dart.setStaticFieldSignature(number_format_parser.NumberFormatParser, () => ['PATTERN_SEPARATOR', 'QUOTE', 'PATTERN_DIGIT', 'PATTERN_ZERO_DIGIT', 'PATTERN_GROUPING_SEPARATOR', 'PATTERN_DECIMAL_SEPARATOR', 'PATTERN_CURRENCY_SIGN', 'PATTERN_PER_MILLE', 'PER_MILLE_SCALE', 'PATTERN_PERCENT', 'PERCENT_SCALE', 'PATTERN_EXPONENT', 'PATTERN_PLUS']);
  dart.defineLazy(number_format_parser.NumberFormatParser, {
    /*number_format_parser.NumberFormatParser.PATTERN_SEPARATOR*/get PATTERN_SEPARATOR() {
      return ";";
    },
    /*number_format_parser.NumberFormatParser.QUOTE*/get QUOTE() {
      return "'";
    },
    /*number_format_parser.NumberFormatParser.PATTERN_DIGIT*/get PATTERN_DIGIT() {
      return "#";
    },
    /*number_format_parser.NumberFormatParser.PATTERN_ZERO_DIGIT*/get PATTERN_ZERO_DIGIT() {
      return "0";
    },
    /*number_format_parser.NumberFormatParser.PATTERN_GROUPING_SEPARATOR*/get PATTERN_GROUPING_SEPARATOR() {
      return ",";
    },
    /*number_format_parser.NumberFormatParser.PATTERN_DECIMAL_SEPARATOR*/get PATTERN_DECIMAL_SEPARATOR() {
      return ".";
    },
    /*number_format_parser.NumberFormatParser.PATTERN_CURRENCY_SIGN*/get PATTERN_CURRENCY_SIGN() {
      return "¤";
    },
    /*number_format_parser.NumberFormatParser.PATTERN_PER_MILLE*/get PATTERN_PER_MILLE() {
      return "‰";
    },
    /*number_format_parser.NumberFormatParser.PER_MILLE_SCALE*/get PER_MILLE_SCALE() {
      return 1000;
    },
    /*number_format_parser.NumberFormatParser.PATTERN_PERCENT*/get PATTERN_PERCENT() {
      return "%";
    },
    /*number_format_parser.NumberFormatParser.PERCENT_SCALE*/get PERCENT_SCALE() {
      return 100;
    },
    /*number_format_parser.NumberFormatParser.PATTERN_EXPONENT*/get PATTERN_EXPONENT() {
      return "E";
    },
    /*number_format_parser.NumberFormatParser.PATTERN_PLUS*/get PATTERN_PLUS() {
      return "+";
    }
  }, false);
  dart.defineLazy(number_format_parser, {
    /*number_format_parser._ln10*/get _ln10() {
      return math.log(10);
    }
  }, false);
  dart.trackLibraries("packages/intl/src/intl/number_format_parser.dart", {
    "package:intl/src/intl/number_format_parser.dart": number_format_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["number_format_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgBS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEH;;;;;;IAGA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IAEC;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;;AAhBuB,YAA0B,EAAzB,AAAgB,SAAZ,mBAAc;IAAc;;;;;+DAmBvB,SAAc;IAxB7C,uBAAiB;IACjB,uBAAiB;IACjB,uBAAiB;IAEpB,mBAAa;IAGb,8BAAwB;IAExB,6BAAuB;IACvB,6BAAuB;IACvB,8BAAwB;IACxB,8BAAwB;IAExB,qBAAe;IACf,0BAAoB;IAEnB,oCAA8B;IAC9B,mCAA6B;IAC7B,+BAAyB;IAKsB;IAC/B,uBAAE,AAAQ,OAAD;;EAAW;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyBrB;;;;;;IAGC;;;;;;IAGV;;;;;;IAGE;;;;;;IAEA;;;;;;IAGiB;;;;;;IAEzB;;;;;;IAyEA;;;;;;IA+DD;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;;iBA9HkB,SACN,OACH,eACE,gBACA,cACF;;AACT,YAAA,AAAM,MAAD,WACC,qDAAwB,OAAO,EAAE,aAAa,IAI3C,MAHF,gDAAmB,OAAO,EAAE,KAAK,EAAE,aAAa,EAAE,cAAc,EAC3D,YAAY,EAAE,aAAa,GADhC;AAEK;;;IACG;;;AAMf,WAAA,AAAsB,kDAAC,AAAa;YAAd,cACW,eAAjC,AAAsB,kDAAC;IAAW;;;AAIC,MAArC,AAAO,6BAAiB;AACpB,kBAAQ;AACyB,MAArC,AAAO,6BAAiB;AAGxB,UAAI,AAAQ,AAAQ;AACA,QAAlB,AAAQ;AAC6B,QAArC,AAAO,6BAAiB;AAGpB,4BAAgB,uCAAe,KAAK;AACxC,eAAO,AAAc,aAAD;AACd,qBAAO,AAAc,aAAD;AACxB,cAAI,AAAQ,wBAAW,IAAI,IAAI,AAAQ;AAEsB,YAD3D,WAAM,6BACF,iDAAiD,KAAK;;AAE1C,UAAlB,AAAQ;;AAE2B,QAArC,AAAO,6BAAiB;;AAG6C,QAArE,AAAO,6BAAiB,AAAO,AAAe,6BAAE,AAAO;AACc,QAArE,AAAO,6BAAiB,AAAO,AAAe,6BAAE,AAAO;;AAGzD,UAAI;AAC4C,aAA9C;QAAqB,2BAAd,mBAAkB,8BAAJ;;AAEvB,UAAI,AAAO;AAC2C,QAApD,AAAO,oCAA4C,eAApB,AAAO;AACc,QAApD,AAAO,oCAA4C,eAApB,AAAO;;IAE1C;;AASM,kBAAQ;AACG,MAAf,eAAU;AACV,aAAO,yBAAoB,KAAK,KAAK,AAAQ;;AAC7C,YAAO,AAAM,MAAD;IACd;wBAKsC;AAChC,eAAK,AAAQ;AACjB,UAAI,AAAG,EAAD,UAAU,MAAO;AACvB,UAAI,AAAG,EAAD;AACJ,YAAI,AAAQ,AAAK;AACG,UAAlB,AAAQ;AACU,UAAlB,AAAM,KAAD;;AAEa,UAAlB,gBAAW;;AAEb,cAAO;;AAGT,UAAI;AACa,QAAf,AAAM,KAAD,OAAO,EAAE;;AAEd,gBAAQ,EAAE;;;;;;;AAMN,oBAAO;;;;AAGoB,cAA3B,AAAM,KAAD,OAAO;AACZ;;;;AAEA,kBAAI,AAAO,2BAAc,KAAK,AAAO;AACoB,gBAAvD;;AAE+B,cAAjC,AAAO;AACqB,cAA5B,AAAM,KAAD,OAAO,AAAQ;AACpB;;;;AAEA,kBAAI,AAAO,2BAAc,KAAK,AAAO;AACoB,gBAAvD;;AAEiC,cAAnC,AAAO;AACqB,cAA5B,AAAM,KAAD,OAAO,AAAQ;AACpB;;;;AAEe,cAAf,AAAM,KAAD,OAAO,EAAE;;;;AAGpB,YAAO;IACT;;AAYM,iBAAO;AACP,kBAAQ;AACZ,aAAO,AAAQ,gCAAmB,IAAI;AACH,QAAjC,OAAO,yBAAoB,KAAK;;AAGlC,UAAI,AAAe,wBAAG,KAAK,AAAe,sBAAE,KAAK,AAAW,mBAAG;AAGzD,gBAAI,AAAW,oBAAG,IAAI,IAAI;AACM,QAApC,uBAAkB,AAAe,sBAAE,CAAC;AACd,QAAtB,sBAAiB,AAAE,CAAD,GAAG;AACH,QAAlB,sBAAiB;;AAInB,UAAI,AAAW,kBAAE,KAAK,AAAgB,uBAAE,KACpC,AAAW,mBAAG,MACT,AAAW,kBAAE,uBACV,AAAW,kBAAE,AAAe,sBAAE,wBACtC,AAAc,uBAAG;AAC0C,QAA7D,WAAM,6BAAgB,AAAsC,yBAAhB,AAAQ,qBAAM;;AAExD,wBAAc,AAAe,AAAiB,sBAAf,sBAAiB;AAGF,MADlD,AAAO,oCACH,AAAW,mBAAG,IAAI,AAAY,WAAD,GAAG,kBAAa;AACjD,UAAI,AAAW,mBAAG;AAEgC,QADhD,AAAO,oCACH,AAAe,AAAiB,sBAAf,sBAAiB;AACtC,YAAI,AAAO,AAAsB,oCAAE;AACD,UAAhC,AAAO,oCAAwB;;;AAO/B,gCAAsB,AAAW,mBAAG,IAAI,kBAAa,WAAW;AACF,MAAlE,AAAO,mCAAuB,AAAoB,mBAAD,GAAG;AACpD,UAAI,AAAO;AAEuC,QADhD,AAAO,mCACH,AAAe,sBAAE,AAAO;AAG5B,YAAI,AAAO,AAAsB,sCAAG,KAChC,AAAO,AAAqB,qCAAG;AACF,UAA/B,AAAO,mCAAuB;;;AAIc,MAAhD,AAAO,gCAAoB,mBAAI,GAAG;AAClC,WAAK;AAC2C,QAA9C,AAAO,2BAAe,AAAO;;AAGiB,MADhD,AAAO,0CACH,AAAW,AAAK,oBAAF,KAAK,AAAW,oBAAG,WAAW;AAEhD,YAAO,AAAM,MAAD;IACd;wBAKyB;;AACnB,eAAK,AAAQ;AACjB,cAAQ,EAAE;;;AAEN,gBAAI,AAAe,sBAAE;AACF,cAAjB,uBAAA,AAAe,uBAAA;;AAEC,cAAhB,sBAAA,AAAc,sBAAA;;AAEhB,gBAAI,AAAc,sBAAG,KAAK,AAAW,kBAAE;AACtB,cAAf,qBAAA,AAAa,qBAAA;;AAEf;;;;AAEA,gBAAI,AAAgB,uBAAE;AACgD,cAApE,WAAM,6BAAgB,AAA6C,mCAAf,AAAQ;;AAE9C,YAAhB,sBAAA,AAAc,sBAAA;AACd,gBAAI,AAAc,sBAAG,KAAK,AAAW,kBAAE;AACtB,cAAf,qBAAA,AAAa,qBAAA;;AAEf;;;;AAEA,gBAAI,AAAc,qBAAE;AACc,cAAhC,iCAA4B;AACO,cAAnC,AAAO,2BAAe;;AAEP,YAAjB,qBAAgB;AAChB;;;;AAEA,gBAAI,AAAW,mBAAG;AAEwC,cADxD,WAAM,6BACF,AAAmD,uDAAT,gBAAO;;AAEO,YAA9D,kBAAa,AAAe,AAAiB,sBAAf,sBAAiB;AAC/C;;;;AAEe,YAAT,WAAN,KAAK,YAAO,EAAE;AACd,gBAAI,AAAO;AAEgD,cADzD,WAAM,6BACF,AAAoD,wDAAT,gBAAO;;AAEpB,YAApC,AAAO,qCAAyB;AACA,YAAhC,AAAO,oCAAwB;AAGb,YAAlB,AAAQ;AACJ,2BAAW,AAAQ;AACvB,gBAAI,AAAS,QAAD;AACkB,cAAtB,WAAN,KAAK,YAAO,AAAQ;AACF,cAAlB,AAAQ;AACgC,cAAxC,AAAO,yCAA6B;;AAKtC,mBAAO,AAAQ,AAAQ;AACO,cAAtB,WAAN,KAAK,YAAO,AAAQ;AACF,cAAlB,AAAQ;AACsB,mBAA9B;cAAO,2BAAA,AAAqB,2BAAA;;AAG9B,gBAAK,AAAe,AAAkB,sBAAhB,sBAAkB,KACpC,AAAO,AAAsB,oCAAE;AACgC,cAAjE,WAAM,6BAAgB,AAA0C,8CAAT,gBAAO;;AAEhE,kBAAO;;;;AAEP,kBAAO;;;AAEI,MAAT,WAAN,KAAK,YAAO,EAAE;AACI,MAAlB,AAAQ;AACR,YAAO;IACT;;0DApRwB,SAAgB,OAAY,eAC3C,gBAAqB,cAAmB;IAP5C,kCAA4B;IAyE5B,gBAAU;IA+DX,mBAAa,CAAC;IACd,uBAAiB;IACjB,uBAAiB;IACjB,wBAAkB;IAClB,sBAAgB,CAAC;IAtIG;IAA4B;IAC3C;IAAqB;IACjB,eAAE,qDAAwB,OAAO,EAAE,aAAa;IAC/C,gBAAE,uCAAe,KAAK;AAChB,IAAlB,AAAQ;EACV;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA1Ca,yDAAiB;;;MACjB,6CAAK;;;MACL,qDAAa;;;MACb,0DAAkB;;;MAClB,kEAA0B;;;MAC1B,iEAAyB;;;MACzB,6DAAqB;;;MACrB,yDAAiB;;;MACjB,uDAAe;;;MACf,uDAAe;;;MACf,qDAAa;;;MACb,wDAAgB;;;MAChB,oDAAY;;;;;MAgTrB,0BAAK;YAAG,UAAI","file":"../../../../../../../../../../../../packages/intl/src/intl/number_format_parser.dart.lib.js"}');
  // Exports:
  return {
    src__intl__number_format_parser: number_format_parser
  };
}));

//# sourceMappingURL=number_format_parser.dart.lib.js.map
