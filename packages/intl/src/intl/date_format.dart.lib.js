define(['dart_sdk', 'packages/intl/src/intl_helpers.dart', 'packages/intl/src/intl/date_builder.dart', 'packages/intl/src/intl/intl_stream.dart', 'packages/intl/src/date_format_internal.dart', 'packages/intl/date_symbols.dart', 'packages/intl/src/intl/constants.dart', 'packages/intl/src/intl/regexp.dart', 'packages/intl/src/intl/date_computation.dart'], (function load__packages__intl__src__intl__date_format_dart(dart_sdk, packages__intl__src__intl_helpers$46dart, packages__intl__src__intl__date_builder$46dart, packages__intl__src__intl__intl_stream$46dart, packages__intl__src__date_format_internal$46dart, packages__intl__date_symbols$46dart, packages__intl__src__intl__constants$46dart, packages__intl__src__intl__regexp$46dart, packages__intl__src__intl__date_computation$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl_helpers = packages__intl__src__intl_helpers$46dart.src__intl_helpers;
  const date_builder = packages__intl__src__intl__date_builder$46dart.src__intl__date_builder;
  const intl_stream = packages__intl__src__intl__intl_stream$46dart.src__intl__intl_stream;
  const date_format_internal = packages__intl__src__date_format_internal$46dart.src__date_format_internal;
  const date_symbols = packages__intl__date_symbols$46dart.date_symbols;
  const constants = packages__intl__src__intl__constants$46dart.src__intl__constants;
  const regexp = packages__intl__src__intl__regexp$46dart.src__intl__regexp;
  const date_computation = packages__intl__src__intl__date_computation$46dart.src__intl__date_computation;
  var date_format = Object.create(dart.library);
  var $toLowerCase = dartx.toLowerCase;
  var $every = dartx.every;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $putIfAbsent = dartx.putIfAbsent;
  var $codeUnitAt = dartx.codeUnitAt;
  var $codeUnits = dartx.codeUnits;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $reversed = dartx.reversed;
  var $isEmpty = dartx.isEmpty;
  var $substring = dartx.substring;
  var $add = dartx.add;
  var $length = dartx.length;
  var $trim = dartx.trim;
  var $replaceAll = dartx.replaceAll;
  var $contains = dartx.contains;
  var $modulo = dartx['%'];
  var $compareTo = dartx.compareTo;
  var $sort = dartx.sort;
  var $last = dartx.last;
  var $truncate = dartx.truncate;
  var $padLeft = dartx.padLeft;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    intAndintAndint__ToDateTime: () => (T.intAndintAndint__ToDateTime = dart.constFn(dart.fnType(core.DateTime, [core.int, core.int, core.int, core.int, core.int, core.int, core.int, core.bool])))(),
    dynamicTobool: () => (T.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    _DateFormatFieldTobool: () => (T._DateFormatFieldTobool = dart.constFn(dart.fnType(core.bool, [date_format._DateFormatField])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    DateSymbolsN: () => (T.DateSymbolsN = dart.constFn(dart.nullable(date_symbols.DateSymbols)))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    IterableOfint: () => (T.IterableOfint = dart.constFn(core.Iterable$(core.int)))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    StringAndDateFormatTo_DateFormatQuotedField: () => (T.StringAndDateFormatTo_DateFormatQuotedField = dart.constFn(dart.fnType(date_format._DateFormatQuotedField, [core.String, date_format.DateFormat])))(),
    StringAndDateFormatTo_DateFormatPatternField: () => (T.StringAndDateFormatTo_DateFormatPatternField = dart.constFn(dart.fnType(date_format._DateFormatPatternField, [core.String, date_format.DateFormat])))(),
    StringAndDateFormatTo_DateFormatLiteralField: () => (T.StringAndDateFormatTo_DateFormatLiteralField = dart.constFn(dart.fnType(date_format._DateFormatLiteralField, [core.String, date_format.DateFormat])))(),
    StringAndDateFormatTo_DateFormatField: () => (T.StringAndDateFormatTo_DateFormatField = dart.constFn(dart.fnType(date_format._DateFormatField, [core.String, date_format.DateFormat])))(),
    JSArrayOfStringAndDateFormatTo_DateFormatField: () => (T.JSArrayOfStringAndDateFormatTo_DateFormatField = dart.constFn(_interceptors.JSArray$(T.StringAndDateFormatTo_DateFormatField())))(),
    JSArrayOf_DateFormatField: () => (T.JSArrayOf_DateFormatField = dart.constFn(_interceptors.JSArray$(date_format._DateFormatField)))(),
    JSArrayOfRegExp: () => (T.JSArrayOfRegExp = dart.constFn(_interceptors.JSArray$(core.RegExp)))(),
    IdentityMapOfString$bool: () => (T.IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))(),
    IdentityMapOfString$RegExp: () => (T.IdentityMapOfString$RegExp = dart.constFn(_js_helper.IdentityMap$(core.String, core.RegExp)))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    JSArrayOfListOfString: () => (T.JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(T.ListOfString())))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    dynamicAnddynamicToint: () => (T.dynamicAnddynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic, dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(date_format.DateFormat.localeExists, T.dynamicTobool());
    }
  }, false);
  var C = [void 0];
  var I = ["package:intl/src/intl/date_format.dart"];
  var dateTimeConstructor = dart.privateName(date_format, "DateFormat.dateTimeConstructor");
  var _dateOnly = dart.privateName(date_format, "_dateOnly");
  var _pattern = dart.privateName(date_format, "_pattern");
  var _formatFieldsPrivate = dart.privateName(date_format, "_formatFieldsPrivate");
  var _useNativeDigits = dart.privateName(date_format, "_useNativeDigits");
  var _digitMatcher = dart.privateName(date_format, "_digitMatcher");
  var _localeZeroCodeUnit = dart.privateName(date_format, "_localeZeroCodeUnit");
  var _localeZero = dart.privateName(date_format, "_localeZero");
  var _locale = dart.privateName(date_format, "_locale");
  var _formatFields = dart.privateName(date_format, "_formatFields");
  var _parse = dart.privateName(date_format, "_parse");
  var _parseLoose = dart.privateName(date_format, "_parseLoose");
  var _checkDateOnly = dart.privateName(date_format, "_checkDateOnly");
  var _useDefaultPattern = dart.privateName(date_format, "_useDefaultPattern");
  var _appendPattern = dart.privateName(date_format, "_appendPattern");
  var _availableSkeletons = dart.privateName(date_format, "_availableSkeletons");
  var _initDigitMatcher = dart.privateName(date_format, "_initDigitMatcher");
  var _localizeDigits = dart.privateName(date_format, "_localizeDigits");
  var _parsePatternHelper = dart.privateName(date_format, "_parsePatternHelper");
  var _match = dart.privateName(date_format, "_match");
  date_format.DateFormat = class DateFormat extends core.Object {
    get dateTimeConstructor() {
      return this[dateTimeConstructor];
    }
    set dateTimeConstructor(value) {
      this[dateTimeConstructor] = value;
    }
    static ['_#new#tearOff'](newPattern = null, locale = null) {
      return new date_format.DateFormat.new(newPattern, locale);
    }
    format(date) {
      let result = new core.StringBuffer.new();
      for (let field of this[_formatFields]) {
        result.write(field.format(date));
      }
      return result.toString();
    }
    formatDuration(reference) {
      return "";
    }
    formatDurationFrom(duration, date) {
      return "";
    }
    parse(inputString, utc = false) {
      return this[_parse](inputString, {utc: utc, strict: false});
    }
    parseLoose(inputString, utc = false) {
      try {
        return this[_parse](inputString, {utc: utc, strict: true});
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.FormatException.is(ex)) {
          return this[_parseLoose](inputString[$toLowerCase](), utc);
        } else
          throw e;
      }
    }
    [_parseLoose](inputString, utc) {
      let dateFields = new date_builder.DateBuilder.new(this.locale, this.dateTimeConstructor);
      if (utc) dateFields.utc = true;
      let stream = new intl_stream.IntlStream.new(inputString);
      for (let field of this[_formatFields]) {
        field.parseLoose(stream, dateFields);
      }
      if (!stream.atEnd()) {
        dart.throw(new core.FormatException.new("Characters remaining after date parsing in " + inputString));
      }
      dateFields.verify(inputString);
      return dateFields.asDate();
    }
    parseStrict(inputString, utc = false) {
      return this[_parse](inputString, {utc: utc, strict: true});
    }
    [_parse](inputString, opts) {
      let utc = opts && 'utc' in opts ? opts.utc : false;
      let strict = opts && 'strict' in opts ? opts.strict : false;
      let dateFields = new date_builder.DateBuilder.new(this.locale, this.dateTimeConstructor);
      if (utc) dateFields.utc = true;
      dateFields.dateOnly = this.dateOnly;
      let stream = new intl_stream.IntlStream.new(inputString);
      for (let field of this[_formatFields]) {
        field.parse(stream, dateFields);
      }
      if (strict && !stream.atEnd()) {
        dart.throw(new core.FormatException.new("Characters remaining after date parsing in " + inputString));
      }
      if (strict) dateFields.verify(inputString);
      return dateFields.asDate();
    }
    get dateOnly() {
      let t2;
      t2 = this[_dateOnly];
      return t2 == null ? this[_dateOnly] = this[_checkDateOnly] : t2;
    }
    get [_checkDateOnly]() {
      return this[_formatFields][$every](dart.fn(each => each.forDate, T._DateFormatFieldTobool()));
    }
    parseUTC(inputString) {
      return this.parse(inputString, true);
    }
    parseUtc(inputString) {
      return this.parse(inputString, true);
    }
    get locale() {
      return this[_locale];
    }
    static allLocalesWithSymbols() {
      return T.ListOfString().from(core.Iterable.as(dart.dload(date_format_internal.dateTimeSymbols, 'keys')));
    }
    static ['_#d#tearOff'](locale = null) {
      return new date_format.DateFormat.d(locale);
    }
    static ['_#E#tearOff'](locale = null) {
      return new date_format.DateFormat.E(locale);
    }
    static ['_#EEEE#tearOff'](locale = null) {
      return new date_format.DateFormat.EEEE(locale);
    }
    static ['_#LLL#tearOff'](locale = null) {
      return new date_format.DateFormat.LLL(locale);
    }
    static ['_#LLLL#tearOff'](locale = null) {
      return new date_format.DateFormat.LLLL(locale);
    }
    static ['_#M#tearOff'](locale = null) {
      return new date_format.DateFormat.M(locale);
    }
    static ['_#Md#tearOff'](locale = null) {
      return new date_format.DateFormat.Md(locale);
    }
    static ['_#MEd#tearOff'](locale = null) {
      return new date_format.DateFormat.MEd(locale);
    }
    static ['_#MMM#tearOff'](locale = null) {
      return new date_format.DateFormat.MMM(locale);
    }
    static ['_#MMMd#tearOff'](locale = null) {
      return new date_format.DateFormat.MMMd(locale);
    }
    static ['_#MMMEd#tearOff'](locale = null) {
      return new date_format.DateFormat.MMMEd(locale);
    }
    static ['_#MMMM#tearOff'](locale = null) {
      return new date_format.DateFormat.MMMM(locale);
    }
    static ['_#MMMMd#tearOff'](locale = null) {
      return new date_format.DateFormat.MMMMd(locale);
    }
    static ['_#MMMMEEEEd#tearOff'](locale = null) {
      return new date_format.DateFormat.MMMMEEEEd(locale);
    }
    static ['_#QQQ#tearOff'](locale = null) {
      return new date_format.DateFormat.QQQ(locale);
    }
    static ['_#QQQQ#tearOff'](locale = null) {
      return new date_format.DateFormat.QQQQ(locale);
    }
    static ['_#y#tearOff'](locale = null) {
      return new date_format.DateFormat.y(locale);
    }
    static ['_#yM#tearOff'](locale = null) {
      return new date_format.DateFormat.yM(locale);
    }
    static ['_#yMd#tearOff'](locale = null) {
      return new date_format.DateFormat.yMd(locale);
    }
    static ['_#yMEd#tearOff'](locale = null) {
      return new date_format.DateFormat.yMEd(locale);
    }
    static ['_#yMMM#tearOff'](locale = null) {
      return new date_format.DateFormat.yMMM(locale);
    }
    static ['_#yMMMd#tearOff'](locale = null) {
      return new date_format.DateFormat.yMMMd(locale);
    }
    static ['_#yMMMEd#tearOff'](locale = null) {
      return new date_format.DateFormat.yMMMEd(locale);
    }
    static ['_#yMMMM#tearOff'](locale = null) {
      return new date_format.DateFormat.yMMMM(locale);
    }
    static ['_#yMMMMd#tearOff'](locale = null) {
      return new date_format.DateFormat.yMMMMd(locale);
    }
    static ['_#yMMMMEEEEd#tearOff'](locale = null) {
      return new date_format.DateFormat.yMMMMEEEEd(locale);
    }
    static ['_#yQQQ#tearOff'](locale = null) {
      return new date_format.DateFormat.yQQQ(locale);
    }
    static ['_#yQQQQ#tearOff'](locale = null) {
      return new date_format.DateFormat.yQQQQ(locale);
    }
    static ['_#H#tearOff'](locale = null) {
      return new date_format.DateFormat.H(locale);
    }
    static ['_#Hm#tearOff'](locale = null) {
      return new date_format.DateFormat.Hm(locale);
    }
    static ['_#Hms#tearOff'](locale = null) {
      return new date_format.DateFormat.Hms(locale);
    }
    static ['_#j#tearOff'](locale = null) {
      return new date_format.DateFormat.j(locale);
    }
    static ['_#jm#tearOff'](locale = null) {
      return new date_format.DateFormat.jm(locale);
    }
    static ['_#jms#tearOff'](locale = null) {
      return new date_format.DateFormat.jms(locale);
    }
    static ['_#jmv#tearOff'](locale = null) {
      return new date_format.DateFormat.jmv(locale);
    }
    static ['_#jmz#tearOff'](locale = null) {
      return new date_format.DateFormat.jmz(locale);
    }
    static ['_#jv#tearOff'](locale = null) {
      return new date_format.DateFormat.jv(locale);
    }
    static ['_#jz#tearOff'](locale = null) {
      return new date_format.DateFormat.jz(locale);
    }
    static ['_#m#tearOff'](locale = null) {
      return new date_format.DateFormat.m(locale);
    }
    static ['_#ms#tearOff'](locale = null) {
      return new date_format.DateFormat.ms(locale);
    }
    static ['_#s#tearOff'](locale = null) {
      return new date_format.DateFormat.s(locale);
    }
    add_d() {
      return this.addPattern("d");
    }
    add_E() {
      return this.addPattern("E");
    }
    add_EEEE() {
      return this.addPattern("EEEE");
    }
    add_LLL() {
      return this.addPattern("LLL");
    }
    add_LLLL() {
      return this.addPattern("LLLL");
    }
    add_M() {
      return this.addPattern("M");
    }
    add_Md() {
      return this.addPattern("Md");
    }
    add_MEd() {
      return this.addPattern("MEd");
    }
    add_MMM() {
      return this.addPattern("MMM");
    }
    add_MMMd() {
      return this.addPattern("MMMd");
    }
    add_MMMEd() {
      return this.addPattern("MMMEd");
    }
    add_MMMM() {
      return this.addPattern("MMMM");
    }
    add_MMMMd() {
      return this.addPattern("MMMMd");
    }
    add_MMMMEEEEd() {
      return this.addPattern("MMMMEEEEd");
    }
    add_QQQ() {
      return this.addPattern("QQQ");
    }
    add_QQQQ() {
      return this.addPattern("QQQQ");
    }
    add_y() {
      return this.addPattern("y");
    }
    add_yM() {
      return this.addPattern("yM");
    }
    add_yMd() {
      return this.addPattern("yMd");
    }
    add_yMEd() {
      return this.addPattern("yMEd");
    }
    add_yMMM() {
      return this.addPattern("yMMM");
    }
    add_yMMMd() {
      return this.addPattern("yMMMd");
    }
    add_yMMMEd() {
      return this.addPattern("yMMMEd");
    }
    add_yMMMM() {
      return this.addPattern("yMMMM");
    }
    add_yMMMMd() {
      return this.addPattern("yMMMMd");
    }
    add_yMMMMEEEEd() {
      return this.addPattern("yMMMMEEEEd");
    }
    add_yQQQ() {
      return this.addPattern("yQQQ");
    }
    add_yQQQQ() {
      return this.addPattern("yQQQQ");
    }
    add_H() {
      return this.addPattern("H");
    }
    add_Hm() {
      return this.addPattern("Hm");
    }
    add_Hms() {
      return this.addPattern("Hms");
    }
    add_j() {
      return this.addPattern("j");
    }
    add_jm() {
      return this.addPattern("jm");
    }
    add_jms() {
      return this.addPattern("jms");
    }
    add_jmv() {
      return this.addPattern("jmv");
    }
    add_jmz() {
      return this.addPattern("jmz");
    }
    add_jv() {
      return this.addPattern("jv");
    }
    add_jz() {
      return this.addPattern("jz");
    }
    add_m() {
      return this.addPattern("m");
    }
    add_ms() {
      return this.addPattern("ms");
    }
    add_s() {
      return this.addPattern("s");
    }
    get [_formatFields]() {
      if (this[_formatFieldsPrivate] == null) {
        if (this[_pattern] == null) this[_useDefaultPattern]();
        this[_formatFieldsPrivate] = this.parsePattern(dart.nullCheck(this[_pattern]));
      }
      return dart.nullCheck(this[_formatFieldsPrivate]);
    }
    [_useDefaultPattern]() {
      this.add_yMMMMd();
      this.add_jms();
    }
    [_appendPattern](inputPattern, separator = " ") {
      this[_pattern] = this[_pattern] == null ? inputPattern : dart.str(this[_pattern]) + separator + inputPattern;
    }
    addPattern(inputPattern, separator = " ") {
      this[_formatFieldsPrivate] = null;
      if (inputPattern == null) return this;
      if (!this[_availableSkeletons][$containsKey](inputPattern)) {
        this[_appendPattern](inputPattern, separator);
      } else {
        this[_appendPattern](core.String.as(this[_availableSkeletons][$_get](inputPattern)), separator);
      }
      return this;
    }
    get pattern() {
      return this[_pattern];
    }
    get [_availableSkeletons]() {
      return core.Map.as(dart.dsend(date_format_internal.dateTimePatterns, '_get', [this.locale]));
    }
    get dateSymbols() {
      if (this[_locale] !== date_format_internal.lastDateSymbolLocale) {
        date_format_internal.lastDateSymbolLocale = this[_locale];
        date_format_internal.cachedDateSymbols = T.DateSymbolsN().as(dart.dsend(date_format_internal.dateTimeSymbols, '_get', [this[_locale]]));
      }
      return dart.nullCheck(date_format_internal.cachedDateSymbols);
    }
    static shouldUseNativeDigitsByDefaultFor(locale) {
      let t2;
      t2 = date_format.DateFormat._useNativeDigitsByDefault[$_get](locale);
      return t2 == null ? true : t2;
    }
    static useNativeDigitsByDefaultFor(locale, value) {
      date_format.DateFormat._useNativeDigitsByDefault[$_set](locale, value);
    }
    get useNativeDigits() {
      return this[_useNativeDigits] == null ? this[_useNativeDigits] = date_format.DateFormat.shouldUseNativeDigitsByDefaultFor(this.locale) : dart.nullCheck(this[_useNativeDigits]);
    }
    set useNativeDigits(native) {
      this[_useNativeDigits] = native;
      this[_digitMatcher] = null;
      this[_localeZeroCodeUnit] = null;
      this[_localeZero] = null;
    }
    get digitMatcher() {
      if (this[_digitMatcher] != null) return dart.nullCheck(this[_digitMatcher]);
      this[_digitMatcher] = date_format.DateFormat._digitMatchers[$putIfAbsent](this.localeZero, dart.bind(this, _initDigitMatcher));
      return dart.nullCheck(this[_digitMatcher]);
    }
    get localeZeroCodeUnit() {
      return this[_localeZeroCodeUnit] == null ? this[_localeZeroCodeUnit] = this.localeZero[$codeUnitAt](0) : dart.nullCheck(this[_localeZeroCodeUnit]);
    }
    get localeZero() {
      let t2;
      return this[_localeZero] == null ? this[_localeZero] = this.useNativeDigits ? (t2 = this.dateSymbols.ZERODIGIT, t2 == null ? "0" : t2) : "0" : dart.nullCheck(this[_localeZero]);
    }
    get usesNativeDigits() {
      return this.useNativeDigits && this[_localeZeroCodeUnit] !== constants.asciiZeroCodeUnit;
    }
    get usesAsciiDigits() {
      return !this.usesNativeDigits;
    }
    [_localizeDigits](numberString) {
      if (this.usesAsciiDigits) return numberString;
      let newDigits = T.ListOfint().filled(numberString.length, 0);
      let oldDigits = numberString[$codeUnits];
      for (let i = 0; i < numberString.length; i = i + 1) {
        newDigits[$_set](i, oldDigits[$_get](i) + this.localeZeroCodeUnit - constants.asciiZeroCodeUnit);
      }
      return core.String.fromCharCodes(newDigits);
    }
    [_initDigitMatcher]() {
      if (this.usesAsciiDigits) return regexp.asciiDigitMatcher;
      let localeDigits = T.IterableOfint().generate(10, dart.fn(i => i, T.intToint()))[$map](core.int, dart.fn(i => this.localeZeroCodeUnit + i, T.intToint()))[$toList]();
      let localeDigitsString = core.String.fromCharCodes(localeDigits);
      return core.RegExp.new("^[" + localeDigitsString + "]+");
    }
    static localeExists(localeName) {
      if (localeName == null) return false;
      return core.bool.as(dart.dsend(date_format_internal.dateTimeSymbols, 'containsKey', [localeName]));
    }
    static get _fieldConstructors() {
      return T.JSArrayOfStringAndDateFormatTo_DateFormatField().of([dart.fn((pattern, parent) => new date_format._DateFormatQuotedField.new(pattern, parent), T.StringAndDateFormatTo_DateFormatQuotedField()), dart.fn((pattern, parent) => new date_format._DateFormatPatternField.new(pattern, parent), T.StringAndDateFormatTo_DateFormatPatternField()), dart.fn((pattern, parent) => new date_format._DateFormatLiteralField.new(pattern, parent), T.StringAndDateFormatTo_DateFormatLiteralField())]);
    }
    parsePattern(pattern) {
      return this[_parsePatternHelper](pattern)[$reversed][$toList]();
    }
    [_parsePatternHelper](pattern) {
      if (pattern[$isEmpty]) return T.JSArrayOf_DateFormatField().of([]);
      let matched = this[_match](pattern);
      if (matched == null) return T.JSArrayOf_DateFormatField().of([]);
      let parsed = this[_parsePatternHelper](pattern[$substring](matched.fullPattern().length));
      parsed[$add](matched);
      return parsed;
    }
    [_match](pattern) {
      for (let i = 0; i < date_format.DateFormat._matchers[$length]; i = i + 1) {
        let regex = date_format.DateFormat._matchers[$_get](i);
        let match = regex.firstMatch(pattern);
        if (match != null) {
          return date_format.DateFormat._fieldConstructors[$_get](i)(dart.nullCheck(match.group(0)), this);
        }
      }
      return null;
    }
  };
  (date_format.DateFormat.new = function(newPattern = null, locale = null) {
    this[dateTimeConstructor] = dart.fn((year, month, day, hour24, minute, second, fractionalSecond, utc) => {
      if (utc) {
        return new core.DateTime.utc(year, month, day, hour24, minute, second, fractionalSecond);
      } else {
        return new core.DateTime.new(year, month, day, hour24, minute, second, fractionalSecond);
      }
    }, T.intAndintAndint__ToDateTime());
    this[_dateOnly] = null;
    this[_pattern] = null;
    this[_formatFieldsPrivate] = null;
    this[_useNativeDigits] = null;
    this[_digitMatcher] = null;
    this[_localeZeroCodeUnit] = null;
    this[_localeZero] = null;
    this[_locale] = dart.nullCheck(intl_helpers.verifiedLocale(locale, C[0] || CT.C0, null));
    this.addPattern(newPattern);
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.d = function(locale = null) {
    date_format.DateFormat.new.call(this, "d", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.E = function(locale = null) {
    date_format.DateFormat.new.call(this, "E", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.EEEE = function(locale = null) {
    date_format.DateFormat.new.call(this, "EEEE", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.LLL = function(locale = null) {
    date_format.DateFormat.new.call(this, "LLL", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.LLLL = function(locale = null) {
    date_format.DateFormat.new.call(this, "LLLL", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.M = function(locale = null) {
    date_format.DateFormat.new.call(this, "M", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.Md = function(locale = null) {
    date_format.DateFormat.new.call(this, "Md", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.MEd = function(locale = null) {
    date_format.DateFormat.new.call(this, "MEd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.MMM = function(locale = null) {
    date_format.DateFormat.new.call(this, "MMM", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.MMMd = function(locale = null) {
    date_format.DateFormat.new.call(this, "MMMd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.MMMEd = function(locale = null) {
    date_format.DateFormat.new.call(this, "MMMEd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.MMMM = function(locale = null) {
    date_format.DateFormat.new.call(this, "MMMM", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.MMMMd = function(locale = null) {
    date_format.DateFormat.new.call(this, "MMMMd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.MMMMEEEEd = function(locale = null) {
    date_format.DateFormat.new.call(this, "MMMMEEEEd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.QQQ = function(locale = null) {
    date_format.DateFormat.new.call(this, "QQQ", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.QQQQ = function(locale = null) {
    date_format.DateFormat.new.call(this, "QQQQ", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.y = function(locale = null) {
    date_format.DateFormat.new.call(this, "y", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yM = function(locale = null) {
    date_format.DateFormat.new.call(this, "yM", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yMd = function(locale = null) {
    date_format.DateFormat.new.call(this, "yMd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yMEd = function(locale = null) {
    date_format.DateFormat.new.call(this, "yMEd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yMMM = function(locale = null) {
    date_format.DateFormat.new.call(this, "yMMM", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yMMMd = function(locale = null) {
    date_format.DateFormat.new.call(this, "yMMMd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yMMMEd = function(locale = null) {
    date_format.DateFormat.new.call(this, "yMMMEd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yMMMM = function(locale = null) {
    date_format.DateFormat.new.call(this, "yMMMM", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yMMMMd = function(locale = null) {
    date_format.DateFormat.new.call(this, "yMMMMd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yMMMMEEEEd = function(locale = null) {
    date_format.DateFormat.new.call(this, "yMMMMEEEEd", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yQQQ = function(locale = null) {
    date_format.DateFormat.new.call(this, "yQQQ", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.yQQQQ = function(locale = null) {
    date_format.DateFormat.new.call(this, "yQQQQ", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.H = function(locale = null) {
    date_format.DateFormat.new.call(this, "H", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.Hm = function(locale = null) {
    date_format.DateFormat.new.call(this, "Hm", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.Hms = function(locale = null) {
    date_format.DateFormat.new.call(this, "Hms", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.j = function(locale = null) {
    date_format.DateFormat.new.call(this, "j", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.jm = function(locale = null) {
    date_format.DateFormat.new.call(this, "jm", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.jms = function(locale = null) {
    date_format.DateFormat.new.call(this, "jms", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.jmv = function(locale = null) {
    date_format.DateFormat.new.call(this, "jmv", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.jmz = function(locale = null) {
    date_format.DateFormat.new.call(this, "jmz", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.jv = function(locale = null) {
    date_format.DateFormat.new.call(this, "jv", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.jz = function(locale = null) {
    date_format.DateFormat.new.call(this, "jz", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.m = function(locale = null) {
    date_format.DateFormat.new.call(this, "m", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.ms = function(locale = null) {
    date_format.DateFormat.new.call(this, "ms", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  (date_format.DateFormat.s = function(locale = null) {
    date_format.DateFormat.new.call(this, "s", T.StringN().as(locale));
  }).prototype = date_format.DateFormat.prototype;
  dart.addTypeTests(date_format.DateFormat);
  dart.addTypeCaches(date_format.DateFormat);
  dart.setMethodSignature(date_format.DateFormat, () => ({
    __proto__: dart.getMethods(date_format.DateFormat.__proto__),
    format: dart.fnType(core.String, [core.DateTime]),
    formatDuration: dart.fnType(core.String, [core.DateTime]),
    formatDurationFrom: dart.fnType(core.String, [core.Duration, core.DateTime]),
    parse: dart.fnType(core.DateTime, [core.String], [core.bool]),
    parseLoose: dart.fnType(core.DateTime, [core.String], [core.bool]),
    [_parseLoose]: dart.fnType(core.DateTime, [core.String, core.bool]),
    parseStrict: dart.fnType(core.DateTime, [core.String], [core.bool]),
    [_parse]: dart.fnType(core.DateTime, [core.String], {strict: core.bool, utc: core.bool}, {}),
    parseUTC: dart.fnType(core.DateTime, [core.String]),
    parseUtc: dart.fnType(core.DateTime, [core.String]),
    add_d: dart.fnType(date_format.DateFormat, []),
    add_E: dart.fnType(date_format.DateFormat, []),
    add_EEEE: dart.fnType(date_format.DateFormat, []),
    add_LLL: dart.fnType(date_format.DateFormat, []),
    add_LLLL: dart.fnType(date_format.DateFormat, []),
    add_M: dart.fnType(date_format.DateFormat, []),
    add_Md: dart.fnType(date_format.DateFormat, []),
    add_MEd: dart.fnType(date_format.DateFormat, []),
    add_MMM: dart.fnType(date_format.DateFormat, []),
    add_MMMd: dart.fnType(date_format.DateFormat, []),
    add_MMMEd: dart.fnType(date_format.DateFormat, []),
    add_MMMM: dart.fnType(date_format.DateFormat, []),
    add_MMMMd: dart.fnType(date_format.DateFormat, []),
    add_MMMMEEEEd: dart.fnType(date_format.DateFormat, []),
    add_QQQ: dart.fnType(date_format.DateFormat, []),
    add_QQQQ: dart.fnType(date_format.DateFormat, []),
    add_y: dart.fnType(date_format.DateFormat, []),
    add_yM: dart.fnType(date_format.DateFormat, []),
    add_yMd: dart.fnType(date_format.DateFormat, []),
    add_yMEd: dart.fnType(date_format.DateFormat, []),
    add_yMMM: dart.fnType(date_format.DateFormat, []),
    add_yMMMd: dart.fnType(date_format.DateFormat, []),
    add_yMMMEd: dart.fnType(date_format.DateFormat, []),
    add_yMMMM: dart.fnType(date_format.DateFormat, []),
    add_yMMMMd: dart.fnType(date_format.DateFormat, []),
    add_yMMMMEEEEd: dart.fnType(date_format.DateFormat, []),
    add_yQQQ: dart.fnType(date_format.DateFormat, []),
    add_yQQQQ: dart.fnType(date_format.DateFormat, []),
    add_H: dart.fnType(date_format.DateFormat, []),
    add_Hm: dart.fnType(date_format.DateFormat, []),
    add_Hms: dart.fnType(date_format.DateFormat, []),
    add_j: dart.fnType(date_format.DateFormat, []),
    add_jm: dart.fnType(date_format.DateFormat, []),
    add_jms: dart.fnType(date_format.DateFormat, []),
    add_jmv: dart.fnType(date_format.DateFormat, []),
    add_jmz: dart.fnType(date_format.DateFormat, []),
    add_jv: dart.fnType(date_format.DateFormat, []),
    add_jz: dart.fnType(date_format.DateFormat, []),
    add_m: dart.fnType(date_format.DateFormat, []),
    add_ms: dart.fnType(date_format.DateFormat, []),
    add_s: dart.fnType(date_format.DateFormat, []),
    [_useDefaultPattern]: dart.fnType(dart.void, []),
    [_appendPattern]: dart.fnType(dart.void, [core.String], [core.String]),
    addPattern: dart.fnType(date_format.DateFormat, [dart.nullable(core.String)], [core.String]),
    [_localizeDigits]: dart.fnType(core.String, [core.String]),
    [_initDigitMatcher]: dart.fnType(core.RegExp, []),
    parsePattern: dart.fnType(core.List$(date_format._DateFormatField), [core.String]),
    [_parsePatternHelper]: dart.fnType(core.List$(date_format._DateFormatField), [core.String]),
    [_match]: dart.fnType(dart.nullable(date_format._DateFormatField), [core.String])
  }));
  dart.setStaticMethodSignature(date_format.DateFormat, () => ['allLocalesWithSymbols', 'shouldUseNativeDigitsByDefaultFor', 'useNativeDigitsByDefaultFor', 'localeExists']);
  dart.setGetterSignature(date_format.DateFormat, () => ({
    __proto__: dart.getGetters(date_format.DateFormat.__proto__),
    dateOnly: core.bool,
    [_checkDateOnly]: core.bool,
    locale: core.String,
    [_formatFields]: core.List$(date_format._DateFormatField),
    pattern: dart.nullable(core.String),
    [_availableSkeletons]: core.Map,
    dateSymbols: date_symbols.DateSymbols,
    useNativeDigits: core.bool,
    digitMatcher: core.RegExp,
    localeZeroCodeUnit: core.int,
    localeZero: core.String,
    usesNativeDigits: core.bool,
    usesAsciiDigits: core.bool
  }));
  dart.setSetterSignature(date_format.DateFormat, () => ({
    __proto__: dart.getSetters(date_format.DateFormat.__proto__),
    useNativeDigits: core.bool
  }));
  dart.setStaticGetterSignature(date_format.DateFormat, () => ['_fieldConstructors']);
  dart.setLibraryUri(date_format.DateFormat, I[0]);
  dart.setFieldSignature(date_format.DateFormat, () => ({
    __proto__: dart.getFields(date_format.DateFormat.__proto__),
    dateTimeConstructor: dart.fieldType(dart.fnType(core.DateTime, [core.int, core.int, core.int, core.int, core.int, core.int, core.int, core.bool])),
    [_dateOnly]: dart.fieldType(dart.nullable(core.bool)),
    [_locale]: dart.fieldType(core.String),
    [_pattern]: dart.fieldType(dart.nullable(core.String)),
    [_formatFieldsPrivate]: dart.fieldType(dart.nullable(core.List$(date_format._DateFormatField))),
    [_useNativeDigits]: dart.fieldType(dart.nullable(core.bool)),
    [_digitMatcher]: dart.fieldType(dart.nullable(core.RegExp)),
    [_localeZeroCodeUnit]: dart.fieldType(dart.nullable(core.int)),
    [_localeZero]: dart.fieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(date_format.DateFormat, () => ['ABBR_MONTH', 'DAY', 'ABBR_WEEKDAY', 'WEEKDAY', 'ABBR_STANDALONE_MONTH', 'STANDALONE_MONTH', 'NUM_MONTH', 'NUM_MONTH_DAY', 'NUM_MONTH_WEEKDAY_DAY', 'ABBR_MONTH_DAY', 'ABBR_MONTH_WEEKDAY_DAY', 'MONTH', 'MONTH_DAY', 'MONTH_WEEKDAY_DAY', 'ABBR_QUARTER', 'QUARTER', 'YEAR', 'YEAR_NUM_MONTH', 'YEAR_NUM_MONTH_DAY', 'YEAR_NUM_MONTH_WEEKDAY_DAY', 'YEAR_ABBR_MONTH', 'YEAR_ABBR_MONTH_DAY', 'YEAR_ABBR_MONTH_WEEKDAY_DAY', 'YEAR_MONTH', 'YEAR_MONTH_DAY', 'YEAR_MONTH_WEEKDAY_DAY', 'YEAR_ABBR_QUARTER', 'YEAR_QUARTER', 'HOUR24', 'HOUR24_MINUTE', 'HOUR24_MINUTE_SECOND', 'HOUR', 'HOUR_MINUTE', 'HOUR_MINUTE_SECOND', 'HOUR_MINUTE_GENERIC_TZ', 'HOUR_MINUTE_TZ', 'HOUR_GENERIC_TZ', 'HOUR_TZ', 'MINUTE', 'MINUTE_SECOND', 'SECOND', '_matchers', '_useNativeDigitsByDefault', '_digitMatchers']);
  dart.defineLazy(date_format.DateFormat, {
    /*date_format.DateFormat.ABBR_MONTH*/get ABBR_MONTH() {
      return "MMM";
    },
    /*date_format.DateFormat.DAY*/get DAY() {
      return "d";
    },
    /*date_format.DateFormat.ABBR_WEEKDAY*/get ABBR_WEEKDAY() {
      return "E";
    },
    /*date_format.DateFormat.WEEKDAY*/get WEEKDAY() {
      return "EEEE";
    },
    /*date_format.DateFormat.ABBR_STANDALONE_MONTH*/get ABBR_STANDALONE_MONTH() {
      return "LLL";
    },
    /*date_format.DateFormat.STANDALONE_MONTH*/get STANDALONE_MONTH() {
      return "LLLL";
    },
    /*date_format.DateFormat.NUM_MONTH*/get NUM_MONTH() {
      return "M";
    },
    /*date_format.DateFormat.NUM_MONTH_DAY*/get NUM_MONTH_DAY() {
      return "Md";
    },
    /*date_format.DateFormat.NUM_MONTH_WEEKDAY_DAY*/get NUM_MONTH_WEEKDAY_DAY() {
      return "MEd";
    },
    /*date_format.DateFormat.ABBR_MONTH_DAY*/get ABBR_MONTH_DAY() {
      return "MMMd";
    },
    /*date_format.DateFormat.ABBR_MONTH_WEEKDAY_DAY*/get ABBR_MONTH_WEEKDAY_DAY() {
      return "MMMEd";
    },
    /*date_format.DateFormat.MONTH*/get MONTH() {
      return "MMMM";
    },
    /*date_format.DateFormat.MONTH_DAY*/get MONTH_DAY() {
      return "MMMMd";
    },
    /*date_format.DateFormat.MONTH_WEEKDAY_DAY*/get MONTH_WEEKDAY_DAY() {
      return "MMMMEEEEd";
    },
    /*date_format.DateFormat.ABBR_QUARTER*/get ABBR_QUARTER() {
      return "QQQ";
    },
    /*date_format.DateFormat.QUARTER*/get QUARTER() {
      return "QQQQ";
    },
    /*date_format.DateFormat.YEAR*/get YEAR() {
      return "y";
    },
    /*date_format.DateFormat.YEAR_NUM_MONTH*/get YEAR_NUM_MONTH() {
      return "yM";
    },
    /*date_format.DateFormat.YEAR_NUM_MONTH_DAY*/get YEAR_NUM_MONTH_DAY() {
      return "yMd";
    },
    /*date_format.DateFormat.YEAR_NUM_MONTH_WEEKDAY_DAY*/get YEAR_NUM_MONTH_WEEKDAY_DAY() {
      return "yMEd";
    },
    /*date_format.DateFormat.YEAR_ABBR_MONTH*/get YEAR_ABBR_MONTH() {
      return "yMMM";
    },
    /*date_format.DateFormat.YEAR_ABBR_MONTH_DAY*/get YEAR_ABBR_MONTH_DAY() {
      return "yMMMd";
    },
    /*date_format.DateFormat.YEAR_ABBR_MONTH_WEEKDAY_DAY*/get YEAR_ABBR_MONTH_WEEKDAY_DAY() {
      return "yMMMEd";
    },
    /*date_format.DateFormat.YEAR_MONTH*/get YEAR_MONTH() {
      return "yMMMM";
    },
    /*date_format.DateFormat.YEAR_MONTH_DAY*/get YEAR_MONTH_DAY() {
      return "yMMMMd";
    },
    /*date_format.DateFormat.YEAR_MONTH_WEEKDAY_DAY*/get YEAR_MONTH_WEEKDAY_DAY() {
      return "yMMMMEEEEd";
    },
    /*date_format.DateFormat.YEAR_ABBR_QUARTER*/get YEAR_ABBR_QUARTER() {
      return "yQQQ";
    },
    /*date_format.DateFormat.YEAR_QUARTER*/get YEAR_QUARTER() {
      return "yQQQQ";
    },
    /*date_format.DateFormat.HOUR24*/get HOUR24() {
      return "H";
    },
    /*date_format.DateFormat.HOUR24_MINUTE*/get HOUR24_MINUTE() {
      return "Hm";
    },
    /*date_format.DateFormat.HOUR24_MINUTE_SECOND*/get HOUR24_MINUTE_SECOND() {
      return "Hms";
    },
    /*date_format.DateFormat.HOUR*/get HOUR() {
      return "j";
    },
    /*date_format.DateFormat.HOUR_MINUTE*/get HOUR_MINUTE() {
      return "jm";
    },
    /*date_format.DateFormat.HOUR_MINUTE_SECOND*/get HOUR_MINUTE_SECOND() {
      return "jms";
    },
    /*date_format.DateFormat.HOUR_MINUTE_GENERIC_TZ*/get HOUR_MINUTE_GENERIC_TZ() {
      return "jmv";
    },
    /*date_format.DateFormat.HOUR_MINUTE_TZ*/get HOUR_MINUTE_TZ() {
      return "jmz";
    },
    /*date_format.DateFormat.HOUR_GENERIC_TZ*/get HOUR_GENERIC_TZ() {
      return "jv";
    },
    /*date_format.DateFormat.HOUR_TZ*/get HOUR_TZ() {
      return "jz";
    },
    /*date_format.DateFormat.MINUTE*/get MINUTE() {
      return "m";
    },
    /*date_format.DateFormat.MINUTE_SECOND*/get MINUTE_SECOND() {
      return "ms";
    },
    /*date_format.DateFormat.SECOND*/get SECOND() {
      return "s";
    },
    /*date_format.DateFormat._matchers*/get _matchers() {
      return T.JSArrayOfRegExp().of([core.RegExp.new("^'(?:[^']|'')*'"), core.RegExp.new("^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|D+|m+|s+|v+|z+|Z+)"), core.RegExp.new("^[^'GyMkSEahKHcLQdDmsvzZ]+")]);
    },
    /*date_format.DateFormat._useNativeDigitsByDefault*/get _useNativeDigitsByDefault() {
      return new (T.IdentityMapOfString$bool()).new();
    },
    /*date_format.DateFormat._digitMatchers*/get _digitMatchers() {
      return new (T.IdentityMapOfString$RegExp()).new();
    }
  }, false);
  var _trimmedPattern = dart.privateName(date_format, "_trimmedPattern");
  var _trimWhitespace = dart.privateName(date_format, "_trimWhitespace");
  date_format._DateFormatField = class _DateFormatField extends core.Object {
    get forDate() {
      return true;
    }
    get width() {
      return this.pattern.length;
    }
    fullPattern() {
      return this.pattern;
    }
    toString() {
      return this.pattern;
    }
    format(date) {
      return this.pattern;
    }
    parseLiteral(input) {
      let found = input.read(this.width);
      if (!dart.equals(found, this.pattern)) {
        this.throwFormatException(input);
      }
    }
    parseLiteralLoose(input) {
      this[_trimWhitespace](input);
      let found = input.peek(this[_trimmedPattern].length);
      if (dart.equals(found, this[_trimmedPattern])) {
        input.read(this[_trimmedPattern].length);
      }
      this[_trimWhitespace](input);
    }
    [_trimWhitespace](input) {
      while (!input.atEnd() && dart.dtest(dart.dload(dart.dsend(input.peek(), 'trim', []), 'isEmpty'))) {
        input.read();
      }
    }
    throwFormatException(stream) {
      dart.throw(new core.FormatException.new("Trying to read " + dart.str(this) + " from " + dart.str(stream.contents) + " " + "at position " + dart.str(stream.index)));
    }
  };
  (date_format._DateFormatField.new = function(pattern, parent) {
    this.pattern = pattern;
    this.parent = parent;
    this[_trimmedPattern] = pattern[$trim]();
    ;
  }).prototype = date_format._DateFormatField.prototype;
  dart.addTypeTests(date_format._DateFormatField);
  dart.addTypeCaches(date_format._DateFormatField);
  dart.setMethodSignature(date_format._DateFormatField, () => ({
    __proto__: dart.getMethods(date_format._DateFormatField.__proto__),
    fullPattern: dart.fnType(core.String, []),
    format: dart.fnType(core.String, [core.DateTime]),
    parseLiteral: dart.fnType(dart.void, [intl_stream.IntlStream]),
    parseLiteralLoose: dart.fnType(dart.void, [intl_stream.IntlStream]),
    [_trimWhitespace]: dart.fnType(dart.void, [intl_stream.IntlStream]),
    throwFormatException: dart.fnType(dart.Never, [intl_stream.IntlStream])
  }));
  dart.setGetterSignature(date_format._DateFormatField, () => ({
    __proto__: dart.getGetters(date_format._DateFormatField.__proto__),
    forDate: core.bool,
    width: core.int
  }));
  dart.setLibraryUri(date_format._DateFormatField, I[0]);
  dart.setFieldSignature(date_format._DateFormatField, () => ({
    __proto__: dart.getFields(date_format._DateFormatField.__proto__),
    pattern: dart.finalFieldType(core.String),
    parent: dart.fieldType(date_format.DateFormat),
    [_trimmedPattern]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(date_format._DateFormatField, ['toString']);
  date_format._DateFormatLiteralField = class _DateFormatLiteralField extends date_format._DateFormatField {
    static ['_#new#tearOff'](pattern, parent) {
      return new date_format._DateFormatLiteralField.new(pattern, parent);
    }
    parse(input, dateFields) {
      this.parseLiteral(input);
    }
    parseLoose(input, dateFields) {
      return this.parseLiteralLoose(input);
    }
  };
  (date_format._DateFormatLiteralField.new = function(pattern, parent) {
    date_format._DateFormatLiteralField.__proto__.new.call(this, pattern, parent);
    ;
  }).prototype = date_format._DateFormatLiteralField.prototype;
  dart.addTypeTests(date_format._DateFormatLiteralField);
  dart.addTypeCaches(date_format._DateFormatLiteralField);
  dart.setMethodSignature(date_format._DateFormatLiteralField, () => ({
    __proto__: dart.getMethods(date_format._DateFormatLiteralField.__proto__),
    parse: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder]),
    parseLoose: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder])
  }));
  dart.setLibraryUri(date_format._DateFormatLiteralField, I[0]);
  var _fullPattern = dart.privateName(date_format, "_fullPattern");
  date_format._DateFormatQuotedField = class _DateFormatQuotedField extends date_format._DateFormatField {
    fullPattern() {
      return this[_fullPattern];
    }
    static ['_#new#tearOff'](pattern, parent) {
      return new date_format._DateFormatQuotedField.new(pattern, parent);
    }
    parse(input, dateFields) {
      this.parseLiteral(input);
    }
    parseLoose(input, dateFields) {
      return this.parseLiteralLoose(input);
    }
    static _patchQuotes(pattern) {
      if (pattern === "''") {
        return "'";
      } else {
        return pattern[$substring](1, pattern.length - 1)[$replaceAll](date_format._DateFormatQuotedField._twoEscapedQuotes, "'");
      }
    }
  };
  (date_format._DateFormatQuotedField.new = function(pattern, parent) {
    this[_fullPattern] = pattern;
    date_format._DateFormatQuotedField.__proto__.new.call(this, date_format._DateFormatQuotedField._patchQuotes(pattern), parent);
    ;
  }).prototype = date_format._DateFormatQuotedField.prototype;
  dart.addTypeTests(date_format._DateFormatQuotedField);
  dart.addTypeCaches(date_format._DateFormatQuotedField);
  dart.setMethodSignature(date_format._DateFormatQuotedField, () => ({
    __proto__: dart.getMethods(date_format._DateFormatQuotedField.__proto__),
    parse: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder]),
    parseLoose: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder])
  }));
  dart.setStaticMethodSignature(date_format._DateFormatQuotedField, () => ['_patchQuotes']);
  dart.setLibraryUri(date_format._DateFormatQuotedField, I[0]);
  dart.setFieldSignature(date_format._DateFormatQuotedField, () => ({
    __proto__: dart.getFields(date_format._DateFormatQuotedField.__proto__),
    [_fullPattern]: dart.finalFieldType(core.String)
  }));
  dart.setStaticFieldSignature(date_format._DateFormatQuotedField, () => ['_twoEscapedQuotes']);
  dart.defineLazy(date_format._DateFormatQuotedField, {
    /*date_format._DateFormatQuotedField._twoEscapedQuotes*/get _twoEscapedQuotes() {
      return core.RegExp.new("''");
    }
  }, false);
  var _forDate = dart.privateName(date_format, "_forDate");
  date_format._DateFormatPatternField = class _DateFormatPatternField extends date_format._DateFormatField {
    static ['_#new#tearOff'](pattern, parent) {
      return new date_format._DateFormatPatternField.new(pattern, parent);
    }
    format(date) {
      return this.formatField(date);
    }
    parse(input, dateFields) {
      this.parseField(input, dateFields);
    }
    parseLoose(input, dateFields) {
      new date_format._LoosePatternField.new(this.pattern, this.parent).parse(input, dateFields);
    }
    get forDate() {
      let t4;
      t4 = this[_forDate];
      return t4 == null ? this[_forDate] = "cdDEGLMQvyZz"[$contains](this.pattern[$_get](0)) : t4;
    }
    parseField(input, builder) {
      try {
        switch (this.pattern[$_get](0)) {
          case "a":
            {
              this.parseAmPm(input, builder);
              break;
            }
          case "c":
            {
              this.parseStandaloneDay(input);
              break;
            }
          case "d":
            {
              this.handleNumericField(input, dart.bind(builder, 'setDay'));
              break;
            }
          case "D":
            {
              this.handleNumericField(input, dart.bind(builder, 'setDayOfYear'));
              break;
            }
          case "E":
            {
              this.parseDayOfWeek(input);
              break;
            }
          case "G":
            {
              this.parseEra(input);
              break;
            }
          case "h":
            {
              this.parse1To12Hours(input, builder);
              break;
            }
          case "H":
            {
              this.handleNumericField(input, dart.bind(builder, 'setHour'));
              break;
            }
          case "K":
            {
              this.handleNumericField(input, dart.bind(builder, 'setHour'));
              break;
            }
          case "k":
            {
              this.handleNumericField(input, dart.bind(builder, 'setHour'), -1);
              break;
            }
          case "L":
            {
              this.parseStandaloneMonth(input, builder);
              break;
            }
          case "M":
            {
              this.parseMonth(input, builder);
              break;
            }
          case "m":
            {
              this.handleNumericField(input, dart.bind(builder, 'setMinute'));
              break;
            }
          case "Q":
            {
              break;
            }
          case "S":
            {
              this.handleNumericField(input, dart.bind(builder, 'setFractionalSecond'));
              break;
            }
          case "s":
            {
              this.handleNumericField(input, dart.bind(builder, 'setSecond'));
              break;
            }
          case "v":
            {
              break;
            }
          case "y":
            {
              this.parseYear(input, builder);
              break;
            }
          case "z":
            {
              break;
            }
          case "Z":
            {
              break;
            }
          default:
            {
              return;
            }
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          this.throwFormatException(input);
        } else
          throw e$;
      }
    }
    formatField(date) {
      switch (this.pattern[$_get](0)) {
        case "a":
          {
            return this.formatAmPm(date);
          }
        case "c":
          {
            return this.formatStandaloneDay(date);
          }
        case "d":
          {
            return this.formatDayOfMonth(date);
          }
        case "D":
          {
            return this.formatDayOfYear(date);
          }
        case "E":
          {
            return this.formatDayOfWeek(date);
          }
        case "G":
          {
            return this.formatEra(date);
          }
        case "h":
          {
            return this.format1To12Hours(date);
          }
        case "H":
          {
            return this.format0To23Hours(date);
          }
        case "K":
          {
            return this.format0To11Hours(date);
          }
        case "k":
          {
            return this.format24Hours(date);
          }
        case "L":
          {
            return this.formatStandaloneMonth(date);
          }
        case "M":
          {
            return this.formatMonth(date);
          }
        case "m":
          {
            return this.formatMinutes(date);
          }
        case "Q":
          {
            return this.formatQuarter(date);
          }
        case "S":
          {
            return this.formatFractionalSeconds(date);
          }
        case "s":
          {
            return this.formatSeconds(date);
          }
        case "v":
          {
            return this.formatTimeZoneId(date);
          }
        case "y":
          {
            return this.formatYear(date);
          }
        case "z":
          {
            return this.formatTimeZone(date);
          }
        case "Z":
          {
            return this.formatTimeZoneRFC(date);
          }
        default:
          {
            return "";
          }
      }
    }
    get symbols() {
      return this.parent.dateSymbols;
    }
    formatEra(date) {
      let era = date.year > 0 ? 1 : 0;
      return this.width >= 4 ? this.symbols.ERANAMES[$_get](era) : this.symbols.ERAS[$_get](era);
    }
    formatYear(date) {
      let year = date.year;
      if (year < 0) {
        year = -year;
      }
      return this.width === 2 ? this.padTo(2, year[$modulo](100)) : this.padTo(this.width, year);
    }
    handleNumericField(input, setter, offset = 0) {
      let result = input.nextInteger({digitMatcher: this.parent.digitMatcher, zeroDigit: this.parent.localeZeroCodeUnit});
      if (result == null) this.throwFormatException(input);
      setter(dart.notNull(result) + offset);
    }
    parseEnumeratedString(input, possibilities) {
      let results = new intl_stream.IntlStream.new(possibilities).findIndexes(dart.fn(each => dart.equals(input.peek(core.int.as(dart.dload(each, 'length'))), each), T.dynamicTobool()));
      if (results[$isEmpty]) this.throwFormatException(input);
      results[$sort](dart.fn((a, b) => possibilities[$_get](core.int.as(a)).length[$compareTo](possibilities[$_get](core.int.as(b)).length), T.dynamicAnddynamicToint()));
      let longestResult = results[$last];
      input.read(possibilities[$_get](core.int.as(longestResult)).length);
      return core.int.as(longestResult);
    }
    parseYear(input, builder) {
      this.handleNumericField(input, dart.bind(builder, 'setYear'));
      builder.setHasAmbiguousCentury(this.width === 2);
    }
    formatMonth(date) {
      switch (this.width) {
        case 5:
          {
            return this.symbols.NARROWMONTHS[$_get](date.month - 1);
          }
        case 4:
          {
            return this.symbols.MONTHS[$_get](date.month - 1);
          }
        case 3:
          {
            return this.symbols.SHORTMONTHS[$_get](date.month - 1);
          }
        default:
          {
            return this.padTo(this.width, date.month);
          }
      }
    }
    parseMonth(input, dateFields) {
      let possibilities = null;
      switch (this.width) {
        case 5:
          {
            possibilities = this.symbols.NARROWMONTHS;
            break;
          }
        case 4:
          {
            possibilities = this.symbols.MONTHS;
            break;
          }
        case 3:
          {
            possibilities = this.symbols.SHORTMONTHS;
            break;
          }
        default:
          {
            return this.handleNumericField(input, dart.bind(dateFields, 'setMonth'));
          }
      }
      dateFields.month = this.parseEnumeratedString(input, possibilities) + 1;
    }
    format24Hours(date) {
      let hour = date.hour === 0 ? 24 : date.hour;
      return this.padTo(this.width, hour);
    }
    formatFractionalSeconds(date) {
      let basic = this.padTo(3, date.millisecond);
      if (this.width - 3 > 0) {
        let extra = this.padTo(this.width - 3, 0);
        return basic + extra;
      } else {
        return basic;
      }
    }
    formatAmPm(date) {
      let hours = date.hour;
      let index = hours >= 12 && hours < 24 ? 1 : 0;
      let ampm = this.symbols.AMPMS;
      return ampm[$_get](index);
    }
    parseAmPm(input, dateFields) {
      let ampm = this.parseEnumeratedString(intl_stream.IntlStream.as(input), this.symbols.AMPMS);
      if (ampm === 1) dart.dput(dateFields, 'pm', true);
    }
    format1To12Hours(date) {
      let hours = date.hour;
      if (date.hour > 12) hours = hours - 12;
      if (hours === 0) hours = 12;
      return this.padTo(this.width, hours);
    }
    parse1To12Hours(input, dateFields) {
      this.handleNumericField(input, dart.bind(dateFields, 'setHour'));
      if (dateFields.hour === 12) dateFields.hour = 0;
    }
    format0To11Hours(date) {
      return this.padTo(this.width, date.hour[$modulo](12));
    }
    format0To23Hours(date) {
      return this.padTo(this.width, date.hour);
    }
    formatStandaloneDay(date) {
      switch (this.width) {
        case 5:
          {
            return this.symbols.STANDALONENARROWWEEKDAYS[$_get](date.weekday[$modulo](7));
          }
        case 4:
          {
            return this.symbols.STANDALONEWEEKDAYS[$_get](date.weekday[$modulo](7));
          }
        case 3:
          {
            return this.symbols.STANDALONESHORTWEEKDAYS[$_get](date.weekday[$modulo](7));
          }
        default:
          {
            return this.padTo(1, date.day);
          }
      }
    }
    parseStandaloneDay(input) {
      let possibilities = null;
      switch (this.width) {
        case 5:
          {
            possibilities = this.symbols.STANDALONENARROWWEEKDAYS;
            break;
          }
        case 4:
          {
            possibilities = this.symbols.STANDALONEWEEKDAYS;
            break;
          }
        case 3:
          {
            possibilities = this.symbols.STANDALONESHORTWEEKDAYS;
            break;
          }
        default:
          {
            return this.handleNumericField(input, dart.fn(x => x, T.intTovoid()));
          }
      }
      this.parseEnumeratedString(input, possibilities);
    }
    formatStandaloneMonth(date) {
      switch (this.width) {
        case 5:
          {
            return this.symbols.STANDALONENARROWMONTHS[$_get](date.month - 1);
          }
        case 4:
          {
            return this.symbols.STANDALONEMONTHS[$_get](date.month - 1);
          }
        case 3:
          {
            return this.symbols.STANDALONESHORTMONTHS[$_get](date.month - 1);
          }
        default:
          {
            return this.padTo(this.width, date.month);
          }
      }
    }
    parseStandaloneMonth(input, dateFields) {
      let possibilities = null;
      switch (this.width) {
        case 5:
          {
            possibilities = this.symbols.STANDALONENARROWMONTHS;
            break;
          }
        case 4:
          {
            possibilities = this.symbols.STANDALONEMONTHS;
            break;
          }
        case 3:
          {
            possibilities = this.symbols.STANDALONESHORTMONTHS;
            break;
          }
        default:
          {
            return this.handleNumericField(intl_stream.IntlStream.as(input), T.intTovoid().as(dart.dload(dateFields, 'setMonth')));
          }
      }
      dart.dput(dateFields, 'month', this.parseEnumeratedString(intl_stream.IntlStream.as(input), possibilities) + 1);
    }
    formatQuarter(date) {
      let quarter = ((date.month - 1) / 3)[$truncate]();
      switch (this.width) {
        case 4:
          {
            return this.symbols.QUARTERS[$_get](quarter);
          }
        case 3:
          {
            return this.symbols.SHORTQUARTERS[$_get](quarter);
          }
        default:
          {
            return this.padTo(this.width, quarter + 1);
          }
      }
    }
    formatDayOfMonth(date) {
      return this.padTo(this.width, date.day);
    }
    formatDayOfYear(date) {
      return this.padTo(this.width, date_computation.dayOfYear(date.month, date.day, date_computation.isLeapYear(date)));
    }
    formatDayOfWeek(date) {
      return (this.width >= 4 ? this.symbols.WEEKDAYS : this.symbols.SHORTWEEKDAYS)[$_get](date.weekday[$modulo](7));
    }
    parseDayOfWeek(input) {
      let possibilities = this.width >= 4 ? this.symbols.WEEKDAYS : this.symbols.SHORTWEEKDAYS;
      this.parseEnumeratedString(input, possibilities);
    }
    parseEra(input) {
      let possibilities = this.width >= 4 ? this.symbols.ERANAMES : this.symbols.ERAS;
      this.parseEnumeratedString(input, possibilities);
    }
    formatMinutes(date) {
      return this.padTo(this.width, date.minute);
    }
    formatSeconds(date) {
      return this.padTo(this.width, date.second);
    }
    formatTimeZoneId(date) {
      dart.throw(new core.UnimplementedError.new());
    }
    formatTimeZone(date) {
      dart.throw(new core.UnimplementedError.new());
    }
    formatTimeZoneRFC(date) {
      dart.throw(new core.UnimplementedError.new());
    }
    padTo(width, toBePrinted) {
      return this.parent[_localizeDigits](dart.str(toBePrinted)[$padLeft](width, "0"));
    }
  };
  (date_format._DateFormatPatternField.new = function(pattern, parent) {
    this[_forDate] = null;
    date_format._DateFormatPatternField.__proto__.new.call(this, core.String.as(pattern), date_format.DateFormat.as(parent));
    ;
  }).prototype = date_format._DateFormatPatternField.prototype;
  dart.addTypeTests(date_format._DateFormatPatternField);
  dart.addTypeCaches(date_format._DateFormatPatternField);
  dart.setMethodSignature(date_format._DateFormatPatternField, () => ({
    __proto__: dart.getMethods(date_format._DateFormatPatternField.__proto__),
    parse: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder]),
    parseLoose: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder]),
    parseField: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder]),
    formatField: dart.fnType(core.String, [core.DateTime]),
    formatEra: dart.fnType(core.String, [core.DateTime]),
    formatYear: dart.fnType(core.String, [core.DateTime]),
    handleNumericField: dart.fnType(dart.void, [intl_stream.IntlStream, dart.fnType(dart.void, [core.int])], [core.int]),
    parseEnumeratedString: dart.fnType(core.int, [intl_stream.IntlStream, core.List$(core.String)]),
    parseYear: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder]),
    formatMonth: dart.fnType(core.String, [core.DateTime]),
    parseMonth: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder]),
    format24Hours: dart.fnType(core.String, [core.DateTime]),
    formatFractionalSeconds: dart.fnType(core.String, [core.DateTime]),
    formatAmPm: dart.fnType(core.String, [core.DateTime]),
    parseAmPm: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    format1To12Hours: dart.fnType(core.String, [core.DateTime]),
    parse1To12Hours: dart.fnType(dart.void, [intl_stream.IntlStream, date_builder.DateBuilder]),
    format0To11Hours: dart.fnType(core.String, [core.DateTime]),
    format0To23Hours: dart.fnType(core.String, [core.DateTime]),
    formatStandaloneDay: dart.fnType(core.String, [core.DateTime]),
    parseStandaloneDay: dart.fnType(dart.void, [intl_stream.IntlStream]),
    formatStandaloneMonth: dart.fnType(core.String, [core.DateTime]),
    parseStandaloneMonth: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    formatQuarter: dart.fnType(core.String, [core.DateTime]),
    formatDayOfMonth: dart.fnType(core.String, [core.DateTime]),
    formatDayOfYear: dart.fnType(core.String, [core.DateTime]),
    formatDayOfWeek: dart.fnType(core.String, [core.DateTime]),
    parseDayOfWeek: dart.fnType(dart.void, [intl_stream.IntlStream]),
    parseEra: dart.fnType(dart.void, [intl_stream.IntlStream]),
    formatMinutes: dart.fnType(core.String, [core.DateTime]),
    formatSeconds: dart.fnType(core.String, [core.DateTime]),
    formatTimeZoneId: dart.fnType(core.String, [core.DateTime]),
    formatTimeZone: dart.fnType(core.String, [core.DateTime]),
    formatTimeZoneRFC: dart.fnType(core.String, [core.DateTime]),
    padTo: dart.fnType(core.String, [core.int, core.Object])
  }));
  dart.setGetterSignature(date_format._DateFormatPatternField, () => ({
    __proto__: dart.getGetters(date_format._DateFormatPatternField.__proto__),
    symbols: date_symbols.DateSymbols
  }));
  dart.setLibraryUri(date_format._DateFormatPatternField, I[0]);
  dart.setFieldSignature(date_format._DateFormatPatternField, () => ({
    __proto__: dart.getFields(date_format._DateFormatPatternField.__proto__),
    [_forDate]: dart.fieldType(dart.nullable(core.bool))
  }));
  date_format._LoosePatternField = class _LoosePatternField extends date_format._DateFormatPatternField {
    static ['_#new#tearOff'](pattern, parent) {
      return new date_format._LoosePatternField.new(pattern, parent);
    }
    parseEnumeratedString(input, possibilities) {
      let lowercasePossibilities = possibilities[$map](core.String, dart.fn(x => x[$toLowerCase](), T.StringToString()))[$toList]();
      try {
        return super.parseEnumeratedString(input, lowercasePossibilities);
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.FormatException.is(ex)) {
          return -1;
        } else
          throw e;
      }
    }
    parseMonth(input, dateFields) {
      if (this.width <= 2) {
        this.handleNumericField(input, dart.bind(dateFields, 'setMonth'));
        return;
      }
      let possibilities = T.JSArrayOfListOfString().of([this.symbols.MONTHS, this.symbols.SHORTMONTHS]);
      for (let monthNames of possibilities) {
        let month = this.parseEnumeratedString(input, monthNames);
        if (month !== -1) {
          dateFields.month = month + 1;
          return;
        }
      }
      this.throwFormatException(input);
    }
    parseStandaloneDay(input) {
      if (this.width <= 2) {
        this.handleNumericField(input, dart.fn(x => x, T.intTovoid()));
        return;
      }
      let possibilities = T.JSArrayOfListOfString().of([this.symbols.STANDALONEWEEKDAYS, this.symbols.STANDALONESHORTWEEKDAYS]);
      for (let dayNames of possibilities) {
        let day = this.parseEnumeratedString(input, dayNames);
        if (day !== -1) {
          return;
        }
      }
    }
    parseStandaloneMonth(input, dateFields) {
      if (this.width <= 2) {
        this.handleNumericField(intl_stream.IntlStream.as(input), T.intTovoid().as(dart.dload(dateFields, 'setMonth')));
        return;
      }
      let possibilities = T.JSArrayOfListOfString().of([this.symbols.STANDALONEMONTHS, this.symbols.STANDALONESHORTMONTHS]);
      for (let monthNames of possibilities) {
        let month = this.parseEnumeratedString(intl_stream.IntlStream.as(input), monthNames);
        if (month !== -1) {
          dart.dput(dateFields, 'month', month + 1);
          return;
        }
      }
      this.throwFormatException(intl_stream.IntlStream.as(input));
    }
    parseDayOfWeek(input) {
      if (this.width <= 2) {
        this.handleNumericField(input, dart.fn(x => x, T.intTovoid()));
        return;
      }
      let possibilities = T.JSArrayOfListOfString().of([this.symbols.WEEKDAYS, this.symbols.SHORTWEEKDAYS]);
      for (let dayNames of possibilities) {
        let day = this.parseEnumeratedString(input, dayNames);
        if (day !== -1) {
          return;
        }
      }
    }
  };
  (date_format._LoosePatternField.new = function(pattern, parent) {
    date_format._LoosePatternField.__proto__.new.call(this, pattern, parent);
    ;
  }).prototype = date_format._LoosePatternField.prototype;
  dart.addTypeTests(date_format._LoosePatternField);
  dart.addTypeCaches(date_format._LoosePatternField);
  dart.setLibraryUri(date_format._LoosePatternField, I[0]);
  dart.trackLibraries("packages/intl/src/intl/date_format.dart", {
    "package:intl/src/intl/date_format.dart": date_format
  }, {
    "package:intl/src/intl/date_format.dart": ["date_format_field.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["date_format.dart","date_format_field.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwRuB;;;;;;;;;WAaE;AAEjB,mBAAS;AACb,eAAS,QAAS;AACgB,QAAhC,AAAO,MAAD,OAAO,AAAM,KAAD,QAAQ,IAAI;;AAEhC,YAAO,AAAO,OAAD;IACf;mBAO+B;AAAc;IAAE;uBAOZ,UAAmB;AAAS;IAAE;UAS3C,aAAmB;AACrC,0BAAO,WAAW,QAAO,GAAG,UAAU;IAAM;eA2BrB,aAAmB;AAC5C;AACE,cAAO,cAAO,WAAW,QAAO,GAAG,UAAU;;;AAC7C;AACA,gBAAO,mBAAY,AAAY,WAAD,kBAAgB,GAAG;;;;IAErD;kBAE4B,aAAkB;AACxC,uBAAa,iCAAY,aAAQ;AACrC,UAAI,GAAG,EAAE,AAAW,AAAU,UAAX,OAAO;AACtB,mBAAS,+BAAW,WAAW;AACnC,eAAS,QAAS;AACoB,QAApC,AAAM,KAAD,YAAY,MAAM,EAAE,UAAU;;AAErC,WAAK,AAAO,MAAD;AAEqD,QAD9D,WAAM,6BACF,AAAyD,gDAAZ,WAAW;;AAEhC,MAA9B,AAAW,UAAD,QAAQ,WAAW;AAC7B,YAAO,AAAW,WAAD;IACnB;gBAU4B,aAAmB;AAC3C,0BAAO,WAAW,QAAO,GAAG,UAAU;IAAK;aAExB;UAAmB;UAAkB;AAGtD,uBAAa,iCAAY,aAAQ;AACrC,UAAI,GAAG,EAAE,AAAW,AAAU,UAAX,OAAO;AACI,MAA9B,AAAW,UAAD,YAAY;AAClB,mBAAS,+BAAW,WAAW;AACnC,eAAS,QAAS;AACe,QAA/B,AAAM,KAAD,OAAO,MAAM,EAAE,UAAU;;AAEhC,UAAI,MAAM,KAAK,AAAO,MAAD;AAE2C,QAD9D,WAAM,6BACF,AAAyD,gDAAZ,WAAW;;AAE9D,UAAI,MAAM,EAAE,AAAW,AAAmB,UAApB,QAAQ,WAAW;AACzC,YAAO,AAAW,WAAD;IACnB;;;AAKqB;YAAU,cAAV,kBAAc;IAAc;;AAEtB,YAAA,AAAc,6BAAM,QAAC,QAAS,AAAK,IAAD;IAAS;aAQ7C;AAAgB,wBAAM,WAAW,EAAE;IAAK;aAQxC;AAAgB,wBAAM,WAAW,EAAE;IAAK;;AAG5C;IAAO;;AAKxB,oDAAkC,WAAhB;IAAqB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyFrB,6BAAW;IAAI;;AACf,6BAAW;IAAI;;AACZ,6BAAW;IAAO;;AACnB,6BAAW;IAAM;;AAChB,6BAAW;IAAO;;AACrB,6BAAW;IAAI;;AACd,6BAAW;IAAK;;AACf,6BAAW;IAAM;;AACjB,6BAAW;IAAM;;AAChB,6BAAW;IAAO;;AACjB,6BAAW;IAAQ;;AACpB,6BAAW;IAAO;;AACjB,6BAAW;IAAQ;;AACf,6BAAW;IAAY;;AAC7B,6BAAW;IAAM;;AAChB,6BAAW;IAAO;;AACrB,6BAAW;IAAI;;AACd,6BAAW;IAAK;;AACf,6BAAW;IAAM;;AAChB,6BAAW;IAAO;;AAClB,6BAAW;IAAO;;AACjB,6BAAW;IAAQ;;AAClB,6BAAW;IAAS;;AACrB,6BAAW;IAAQ;;AAClB,6BAAW;IAAS;;AAChB,6BAAW;IAAa;;AAC9B,6BAAW;IAAO;;AACjB,6BAAW;IAAQ;;AACvB,6BAAW;IAAI;;AACd,6BAAW;IAAK;;AACf,6BAAW;IAAM;;AACnB,6BAAW;IAAI;;AACd,6BAAW;IAAK;;AACf,6BAAW;IAAM;;AAIjB,6BAAW;IAAM;;AAIjB,6BAAW;IAAM;;AAIlB,6BAAW;IAAK;;AAIhB,6BAAW;IAAK;;AACjB,6BAAW;IAAI;;AACd,6BAAW;IAAK;;AACjB,6BAAW;IAAI;;AAyEnC,UAAI,AAAqB;AACvB,YAAI,AAAS,wBAAS,AAAoB;AACI,QAA9C,6BAAuB,kBAAqB,eAAR;;AAEtC,YAA2B,gBAApB;IACT;;AAKc,MAAZ;AACS,MAAT;IACF;qBAoB2B,cAAsB;AAEyB,MADxE,iBACI,AAAS,yBAAU,YAAY,GAAqC,SAAhC,kBAAS,SAAS,GAAC,YAAY;IACzE;eAS8B,cAAsB;AAKvB,MAA3B,6BAAuB;AACvB,UAAI,AAAa,YAAD,UAAU,MAAO;AACjC,WAAK,AAAoB,wCAAY,YAAY;AACR,QAAvC,qBAAe,YAAY,EAAE,SAAS;;AAEsB,QAA5D,oCAAe,AAAmB,iCAAC,YAAY,IAAG,SAAS;;AAE7D,YAAO;IACT;;AAGuB;IAAQ;;AAGkB,yBAAgB,WAAhB,gDAAiB;IAAO;;AAUvE,UAAI,kBAAW;AACiB,QAA9B,4CAAuB;AACqB,iDAA5C,oBAAmC,WAAf,+CAAgB;;AAEtC,YAAwB,gBAAjB;IACT;6CASqD;;AACnD,WAAO,AAAyB,wDAAC,MAAM;YAAP,cAAY;IAC9C;uCAW+C,QAAa;AACjB,MAAzC,AAAyB,wDAAC,MAAM,EAAI,KAAK;IAC3C;;AAO4B,YAAA,AAAiB,kCACvC,yBAAmB,yDAAkC,eACrC,eAAhB;IAAiB;wBAGE;AACE,MAAzB,yBAAmB,MAAM;AAEL,MAApB,sBAAgB;AACU,MAA1B,4BAAsB;AACJ,MAAlB,oBAAc;IAChB;;AAaE,UAAI,6BAAuB,MAAoB,gBAAb;AACuC,MAAzE,sBAAgB,AAAe,oDAAY,2BAAY;AACvD,YAAoB,gBAAb;IACT;;AAK8B,YAAA,AAAoB,qCAC5C,4BAAsB,AAAW,6BAAW,KACzB,eAAnB;IAAoB;;;AAKD,YAAA,AAAY,6BAC/B,oBAAc,wBAAwC,KAAtB,AAAY,4BAAA,aAAa,YAAM,MACpD,eAAX;IAAY;;AAId,YAAA,AAAgB,yBAAG,8BAAiC;IAAiB;;AAG7C,cAAC;IAAgB;sBAIf;AAC5B,UAAI,sBAAiB,MAAO,aAAY;AACpC,sBAAY,qBAAiB,AAAa,YAAD,SAAS;AAClD,sBAAY,AAAa,YAAD;AAC5B,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAa,YAAD,SAAS,IAAA,AAAC,CAAA;AAE2B,QADnE,AAAS,SAAA,QAAC,CAAC,EACP,AAAS,AAAI,AAAqB,SAAzB,QAAC,CAAC,IAAI,0BAA+B;;AAEpD,YAAc,2BAAc,SAAS;IACvC;;AAKE,UAAI,sBAAiB,MAAc;AAC/B,yBAAwB,AACvB,AACA,2BAFgC,IAAI,QAAC,KAAM,CAAC,iCACxC,QAAC,KAAM,AAAmB,0BAAE,CAAC;AAElC,+BAA4B,0BAAc,YAAY;AAC1D,YAAO,iBAAO,AAAyB,OAArB,kBAAkB;IACtC;wBAIyB;AACvB,UAAI,AAAW,UAAD,UAAU,MAAO;AAC/B,0BAAuB,WAAhB,sDAA4B,UAAU;IAC/C;;AAG8B,oEACpB,SAAC,SAAS,WAAW,2CAAuB,OAAO,EAAE,MAAM,qDAC3D,SAAC,SAAS,WAAW,4CAAwB,OAAO,EAAE,MAAM,sDAC5D,SAAC,SAAS,WAAW,4CAAwB,OAAO,EAAE,MAAM;IAC7D;iBAGkC;AACzC,YAAO,AAA6B,AAAS,2BAAlB,OAAO;IACpC;0BAGkD;AAChD,UAAI,AAAQ,OAAD,YAAU,MAAO;AAExB,oBAAU,aAAO,OAAO;AAC5B,UAAI,AAAQ,OAAD,UAAU,MAAO;AAExB,mBACA,0BAAoB,AAAQ,OAAD,aAAW,AAAQ,AAAc,OAAf;AAC9B,MAAnB,AAAO,MAAD,OAAK,OAAO;AAClB,YAAO,OAAM;IACf;aAGgC;AAC9B,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAU,2CAAQ,IAAA,AAAC,CAAA;AACjC,oBAAQ,AAAS,wCAAC,CAAC;AACnB,oBAAQ,AAAM,KAAD,YAAY,OAAO;AACpC,YAAI,KAAK;AACP,gBAAO,AAAkB,AAAG,kDAAF,CAAC,EAAgB,eAAd,AAAM,KAAD,OAAO,KAAK;;;AAGlD,YAAO;IACT;;yCA/lBoB,mBAAoB;IAgBnB,4BAAsB,SAAK,MAAU,OAAW,KAC7D,QAAY,QAAY,QAAY,kBAAuB;AACjE,UAAI,GAAG;AACL,cAAgB,uBACZ,IAAI,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM,EAAE,gBAAgB;;AAE9D,cAAO,uBACH,IAAI,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM,EAAE,gBAAgB;;;IAwH5D;IAsOE;IAKgB;IA4GlB;IAyBE;IASH;IAOG;IA9gBM,gBAAoD,eAA1C,4BAAe,MAAM,iBAAgB;AAMrC,IAAtB,gBAAW,UAAU;EACvB;uCA0Lc;0CAAgB,oBAAK,MAAM;EAAC;uCAC5B;0CAAgB,oBAAK,MAAM;EAAC;0CACzB;0CAAgB,uBAAQ,MAAM;EAAC;yCAChC;0CAAgB,sBAAO,MAAM;EAAC;0CAC7B;0CAAgB,uBAAQ,MAAM;EAAC;uCAClC;0CAAgB,oBAAK,MAAM;EAAC;wCAC3B;0CAAgB,qBAAM,MAAM;EAAC;yCAC5B;0CAAgB,sBAAO,MAAM;EAAC;yCAC9B;0CAAgB,sBAAO,MAAM;EAAC;0CAC7B;0CAAgB,uBAAQ,MAAM;EAAC;2CAC9B;0CAAgB,wBAAS,MAAM;EAAC;0CACjC;0CAAgB,uBAAQ,MAAM;EAAC;2CAC9B;0CAAgB,wBAAS,MAAM;EAAC;+CAC5B;0CAAgB,4BAAa,MAAM;EAAC;yCAC1C;0CAAgB,sBAAO,MAAM;EAAC;0CAC7B;0CAAgB,uBAAQ,MAAM;EAAC;uCAClC;0CAAgB,oBAAK,MAAM;EAAC;wCAC3B;0CAAgB,qBAAM,MAAM;EAAC;yCAC5B;0CAAgB,sBAAO,MAAM;EAAC;0CAC7B;0CAAgB,uBAAQ,MAAM;EAAC;0CAC/B;0CAAgB,uBAAQ,MAAM;EAAC;2CAC9B;0CAAgB,wBAAS,MAAM;EAAC;4CAC/B;0CAAgB,yBAAU,MAAM;EAAC;2CAClC;0CAAgB,wBAAS,MAAM;EAAC;4CAC/B;0CAAgB,yBAAU,MAAM;EAAC;gDAC7B;0CAAgB,6BAAc,MAAM;EAAC;0CAC3C;0CAAgB,uBAAQ,MAAM;EAAC;2CAC9B;0CAAgB,wBAAS,MAAM;EAAC;uCACpC;0CAAgB,oBAAK,MAAM;EAAC;wCAC3B;0CAAgB,qBAAM,MAAM;EAAC;yCAC5B;0CAAgB,sBAAO,MAAM;EAAC;uCAChC;0CAAgB,oBAAK,MAAM;EAAC;wCAC3B;0CAAgB,qBAAM,MAAM;EAAC;yCAC5B;0CAAgB,sBAAO,MAAM;EAAC;yCAI9B;0CAAgB,sBAAO,MAAM;EAAC;yCAI9B;0CAAgB,sBAAO,MAAM;EAAC;wCAI/B;0CAAgB,qBAAM,MAAM;EAAC;wCAI7B;0CAAgB,qBAAM,MAAM;EAAC;uCAC9B;0CAAgB,oBAAK,MAAM;EAAC;wCAC3B;0CAAgB,qBAAM,MAAM;EAAC;uCAC9B;0CAAgB,oBAAK,MAAM;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmEtB,iCAAU;;;MACV,0BAAG;;;MACH,mCAAY;;;MACZ,8BAAO;;;MACP,4CAAqB;;;MACrB,uCAAgB;;;MAChB,gCAAS;;;MACT,oCAAa;;;MACb,4CAAqB;;;MACrB,qCAAc;;;MACd,6CAAsB;;;MACtB,4BAAK;;;MACL,gCAAS;;;MACT,wCAAiB;;;MACjB,mCAAY;;;MACZ,8BAAO;;;MACP,2BAAI;;;MACJ,qCAAc;;;MACd,yCAAkB;;;MAClB,iDAA0B;;;MAC1B,sCAAe;;;MACf,0CAAmB;;;MACnB,kDAA2B;;;MAC3B,iCAAU;;;MACV,qCAAc;;;MACd,6CAAsB;;;MACtB,wCAAiB;;;MACjB,mCAAY;;;MACZ,6BAAM;;;MACN,oCAAa;;;MACb,2CAAoB;;;MACpB,2BAAI;;;MACJ,kCAAW;;;MACX,yCAAkB;;;MAIlB,6CAAsB;;;MAItB,qCAAc;;;MAId,sCAAe;;;MAIf,8BAAO;;;MACP,6BAAM;;;MACN,oCAAa;;;MACb,6BAAM;;;MAiCA,gCAAS;YAAG,yBAIpC,gBAAO,oBAIP,gBAAO,qEAGP,gBAAO;;MAqDsB,gDAAyB;YAAG;;MA+C1B,qCAAc;YAAG;;;;;;;AC5uB9B;IAAI;;AAIP,YAAA,AAAQ;IAAM;;AAEP;IAAO;;AAEV;IAAO;WAGL;AAGrB,YAAO;IACT;iBAW6B;AACvB,kBAAQ,AAAM,KAAD,MAAM;AACvB,uBAAI,KAAK,EAAI;AACgB,QAA3B,0BAAqB,KAAK;;IAE9B;sBAUkC;AACV,MAAtB,sBAAgB,KAAK;AAEjB,kBAAQ,AAAM,KAAD,MAAM,AAAgB;AACvC,UAAU,YAAN,KAAK,EAAI;AACuB,QAAlC,AAAM,KAAD,MAAM,AAAgB;;AAGP,MAAtB,sBAAgB,KAAK;IACvB;sBAEgC;AAC9B,cAAQ,AAAM,KAAD,uBAAgC,WAAP,WAAb,AAAM,KAAD;AAChB,QAAZ,AAAM,KAAD;;IAET;yBAGsC;AAEF,MADlC,WAAM,6BAAe,AAAC,6BAAiB,QAAI,oBAAQ,AAAO,MAAD,aAAU,MAC/D,0BAAe,AAAO,MAAD;IAC3B;;+CAnEsB,SAAc;IAAd;IAAc;IACd,wBAAE,AAAQ,OAAD;;EAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA4EhB,OAAmB;AACpB,MAAnB,kBAAa,KAAK;IACpB;eAE2B,OAAmB;AAC1C,oCAAkB,KAAK;IAAC;;sDARG,SAAoB;AAC7C,iEAAM,OAAO,EAAE,MAAM;;EAAC;;;;;;;;;;;;AAeJ;IAAY;;;;UAMd,OAAmB;AACpB,MAAnB,kBAAa,KAAK;IACpB;eAE2B,OAAmB;AAC1C,oCAAkB,KAAK;IAAC;wBAIM;AAChC,UAAI,AAAQ,OAAD,KAAI;AACb,cAAO;;AAEP,cAAO,AACF,AACA,QAFS,aACC,GAAG,AAAQ,AAAO,OAAR,UAAU,gBACnB,sDAAmB;;IAEvC;;qDArB8B,SAAoB;IAC/B,qBAAE,OAAO;AACtB,gEAAM,gDAAa,OAAO,GAAG,MAAM;;EAAC;;;;;;;;;;;;;;;;MAS7B,oDAAiB;YAAG,iBAAO;;;;;;;;WAsHjB;AACrB,YAAO,kBAAY,IAAI;IACzB;UAIsB,OAAmB;AACV,MAA7B,gBAAW,KAAK,EAAE,UAAU;IAC9B;eAK2B,OAAmB;AACgB,MAA5D,AAAoC,uCAAjB,cAAS,mBAAc,KAAK,EAAE,UAAU;IAC7D;;;AAWoB;YAAS,cAAT,iBAAa,AAAe,0BAAS,AAAO,oBAAC;IAAG;eAIzC,OAAmB;AAC5C;AACE,gBAAQ,AAAO,oBAAC;;;AAEa,cAAzB,eAAU,KAAK,EAAE,OAAO;AACxB;;;;AAEyB,cAAzB,wBAAmB,KAAK;AACxB;;;;AAEyC,cAAzC,wBAAmB,KAAK,EAAU,UAAR,OAAO;AACjC;;;;AAG+C,cAA/C,wBAAmB,KAAK,EAAU,UAAR,OAAO;AACjC;;;;AAEqB,cAArB,oBAAe,KAAK;AACpB;;;;AAEe,cAAf,cAAS,KAAK;AACd;;;;AAE+B,cAA/B,qBAAgB,KAAK,EAAE,OAAO;AAC9B;;;;AAE0C,cAA1C,wBAAmB,KAAK,EAAU,UAAR,OAAO;AACjC;;;;AAE0C,cAA1C,wBAAmB,KAAK,EAAU,UAAR,OAAO;AACjC;;;;AAE8C,cAA9C,wBAAmB,KAAK,EAAU,UAAR,OAAO,cAAU,CAAC;AAC5C;;;;AAEoC,cAApC,0BAAqB,KAAK,EAAE,OAAO;AACnC;;;;AAE0B,cAA1B,gBAAW,KAAK,EAAE,OAAO;AACzB;;;;AAE4C,cAA5C,wBAAmB,KAAK,EAAU,UAAR,OAAO;AACjC;;;;AAEA;;;;AAEsD,cAAtD,wBAAmB,KAAK,EAAU,UAAR,OAAO;AACjC;;;;AAE4C,cAA5C,wBAAmB,KAAK,EAAU,UAAR,OAAO;AACjC;;;;AAEA;;;;AAEyB,cAAzB,eAAU,KAAK,EAAE,OAAO;AACxB;;;;AAEA;;;;AAEA;;;;AAEA;;;;YAEG;AAAP;AAC2B,UAA3B,0BAAqB,KAAK;;;;IAE9B;gBAG4B;AAC1B,cAAQ,AAAO,oBAAC;;;AAEZ,kBAAO,iBAAW,IAAI;;;;AAEtB,kBAAO,0BAAoB,IAAI;;;;AAE/B,kBAAO,uBAAiB,IAAI;;;;AAE5B,kBAAO,sBAAgB,IAAI;;;;AAE3B,kBAAO,sBAAgB,IAAI;;;;AAE3B,kBAAO,gBAAU,IAAI;;;;AAErB,kBAAO,uBAAiB,IAAI;;;;AAE5B,kBAAO,uBAAiB,IAAI;;;;AAE5B,kBAAO,uBAAiB,IAAI;;;;AAE5B,kBAAO,oBAAc,IAAI;;;;AAEzB,kBAAO,4BAAsB,IAAI;;;;AAEjC,kBAAO,kBAAY,IAAI;;;;AAEvB,kBAAO,oBAAc,IAAI;;;;AAEzB,kBAAO,oBAAc,IAAI;;;;AAEzB,kBAAO,8BAAwB,IAAI;;;;AAEnC,kBAAO,oBAAc,IAAI;;;;AAEzB,kBAAO,uBAAiB,IAAI;;;;AAE5B,kBAAO,iBAAW,IAAI;;;;AAEtB,kBAAO,qBAAe,IAAI;;;;AAE1B,kBAAO,wBAAkB,IAAI;;;;AAE7B,kBAAO;;;IAEb;;AAG2B,YAAA,AAAO;IAAW;cAEnB;AACpB,gBAAM,AAAK,AAAK,IAAN,QAAQ,IAAI,IAAI;AAC9B,YAAO,AAAM,eAAG,IAAI,AAAQ,AAAQ,6BAAC,GAAG,IAAI,AAAQ,AAAI,yBAAC,GAAG;IAC9D;eAE2B;AAErB,iBAAO,AAAK,IAAD;AACf,UAAI,AAAK,IAAD,GAAG;AACG,QAAZ,OAAO,CAAC,IAAI;;AAEd,YAAO,AAAM,gBAAG,IAAI,WAAM,GAAG,AAAK,IAAD,UAAG,QAAO,WAAM,YAAO,IAAI;IAC9D;uBAamC,OAA0B,QACpD;AACH,mBAAS,AAAM,KAAD,4BACA,AAAO,qCACV,AAAO;AACtB,UAAI,AAAO,MAAD,UAAU,AAA2B,0BAAN,KAAK;AACvB,MAAvB,AAAM,MAAA,CAAQ,aAAP,MAAM,IAAG,MAAM;IACxB;0BAWqC,OAAoB;AACnD,oBAAU,AACT,+BADoB,aAAa,cACrB,QAAC,QAAiC,YAAxB,AAAM,KAAD,kBAAW,WAAL,IAAI,eAAY,IAAI;AAC1D,UAAI,AAAQ,OAAD,YAAU,AAA2B,0BAAN,KAAK;AAE0B,MADzE,AAAQ,OAAD,QACH,SAAC,GAAG,MAAM,AAAa,AAAI,AAAO,aAAX,oBAAC,CAAC,sBAAmB,AAAa,AAAI,aAAJ,oBAAC,CAAC;AAC3D,0BAAgB,AAAQ,OAAD;AACoB,MAA/C,AAAM,KAAD,MAAM,AAAa,AAAgB,aAAhB,oBAAC,aAAa;AACtC,yBAAO,aAAa;IACtB;cAE0B,OAAmB;AACD,MAA1C,wBAAmB,KAAK,EAAU,UAAR,OAAO;AACS,MAA1C,AAAQ,OAAD,wBAAwB,AAAM,eAAG;IAC1C;gBAE4B;AAC1B,cAAQ;;;AAEJ,kBAAO,AAAQ,AAAY,kCAAC,AAAK,AAAM,IAAP,SAAS;;;;AAEzC,kBAAO,AAAQ,AAAM,4BAAC,AAAK,AAAM,IAAP,SAAS;;;;AAEnC,kBAAO,AAAQ,AAAW,iCAAC,AAAK,AAAM,IAAP,SAAS;;;;AAExC,kBAAO,YAAM,YAAO,AAAK,IAAD;;;IAE9B;eAE2B,OAAmB;AAC/B;AACb,cAAQ;;;AAEgC,YAApC,gBAAgB,AAAQ;AACxB;;;;AAE8B,YAA9B,gBAAgB,AAAQ;AACxB;;;;AAEmC,YAAnC,gBAAgB,AAAQ;AACxB;;;;AAEA,kBAAO,yBAAmB,KAAK,EAAa,UAAX,UAAU;;;AAEmB,MAAlE,AAAW,UAAD,SAAS,AAA4C,2BAAtB,KAAK,EAAE,aAAa,IAAI;IACnE;kBAE8B;AACxB,iBAAO,AAAK,AAAK,IAAN,UAAS,IAAI,KAAK,AAAK,IAAD;AACrC,YAAO,YAAM,YAAO,IAAI;IAC1B;4BAEwC;AAElC,kBAAQ,WAAM,GAAG,AAAK,IAAD;AACzB,UAAI,AAAM,AAAI,aAAF,IAAI;AACV,oBAAQ,WAAM,AAAM,aAAE,GAAG;AAC7B,cAAO,AAAM,MAAD,GAAG,KAAK;;AAEpB,cAAO,MAAK;;IAEhB;eAE2B;AACrB,kBAAQ,AAAK,IAAD;AACZ,kBAAS,AAAM,AAAO,KAAR,IAAI,MAAQ,AAAM,KAAD,GAAG,KAAM,IAAI;AAC5C,iBAAO,AAAQ;AACnB,YAAO,AAAI,KAAA,QAAC,KAAK;IACnB;cAEe,OAAO;AAEhB,iBAAO,qDAAsB,KAAK,GAAE,AAAQ;AAChD,UAAI,AAAK,IAAD,KAAI,GAAc,AAAS,UAApB,UAAU,QAAM;IACjC;qBAEiC;AAC3B,kBAAQ,AAAK,IAAD;AAChB,UAAI,AAAK,AAAK,IAAN,QAAQ,IAAI,AAAkB,QAAV,AAAM,KAAD,GAAG;AACpC,UAAI,AAAM,KAAD,KAAI,GAAG,AAAU,QAAF;AACxB,YAAO,YAAM,YAAO,KAAK;IAC3B;oBAEgC,OAAmB;AACJ,MAA7C,wBAAmB,KAAK,EAAa,UAAX,UAAU;AACpC,UAAI,AAAW,AAAK,UAAN,UAAS,IAAI,AAAW,AAAQ,UAAT,QAAQ;IAC/C;qBAEiC;AAC/B,YAAO,YAAM,YAAO,AAAK,AAAK,IAAN,eAAQ;IAClC;qBAEiC;AAC/B,YAAO,YAAM,YAAO,AAAK,IAAD;IAC1B;wBAEoC;AAClC,cAAQ;;;AAEJ,kBAAO,AAAQ,AAAwB,8CAAC,AAAK,AAAQ,IAAT,kBAAW;;;;AAEvD,kBAAO,AAAQ,AAAkB,wCAAC,AAAK,AAAQ,IAAT,kBAAW;;;;AAEjD,kBAAO,AAAQ,AAAuB,6CAAC,AAAK,AAAQ,IAAT,kBAAW;;;;AAEtD,kBAAO,YAAM,GAAG,AAAK,IAAD;;;IAE1B;uBAEmC;AAEpB;AACb,cAAQ;;;AAE4C,YAAhD,gBAAgB,AAAQ;AACxB;;;;AAE0C,YAA1C,gBAAgB,AAAQ;AACxB;;;;AAE+C,YAA/C,gBAAgB,AAAQ;AACxB;;;;AAEA,kBAAO,yBAAmB,KAAK,EAAE,QAAC,KAAM,CAAC;;;AAEF,MAA3C,2BAAsB,KAAK,EAAE,aAAa;IAC5C;0BAEsC;AACpC,cAAQ;;;AAEJ,kBAAO,AAAQ,AAAsB,4CAAC,AAAK,AAAM,IAAP,SAAS;;;;AAEnD,kBAAO,AAAQ,AAAgB,sCAAC,AAAK,AAAM,IAAP,SAAS;;;;AAE7C,kBAAO,AAAQ,AAAqB,2CAAC,AAAK,AAAM,IAAP,SAAS;;;;AAElD,kBAAO,YAAM,YAAO,AAAK,IAAD;;;IAE9B;yBAE0B,OAAO;AAClB;AACb,cAAQ;;;AAE0C,YAA9C,gBAAgB,AAAQ;AACxB;;;;AAEwC,YAAxC,gBAAgB,AAAQ;AACxB;;;;AAE6C,YAA7C,gBAAgB,AAAQ;AACxB;;;;AAEA,kBAAO,mDAAmB,KAAK,oBAAa,WAAX,UAAU;;;AAEmB,MAAvD,UAAX,UAAU,WAAS,AAA4C,qDAAtB,KAAK,GAAE,aAAa,IAAI;IACnE;kBAE8B;AACxB,oBAAiC,CAAL,CAAhB,AAAK,AAAM,IAAP,SAAS,KAAK;AAClC,cAAQ;;;AAEJ,kBAAO,AAAQ,AAAQ,8BAAC,OAAO;;;;AAE/B,kBAAO,AAAQ,AAAa,mCAAC,OAAO;;;;AAEpC,kBAAO,YAAM,YAAO,AAAQ,OAAD,GAAG;;;IAEpC;qBAEiC;AAC/B,YAAO,YAAM,YAAO,AAAK,IAAD;IAC1B;oBAEgC;AAAS,wBACrC,YACiB,2BACb,AAAK,IAAD,QAAQ,AAAK,IAAD,MAAuB,4BAAW,IAAI;IAAG;oBAEjC;AAE9B,YAE4B,EAFpB,AAAM,cAAG,IACX,AAAQ,wBACR,AAAQ,mCAAgB,AAAK,AAAS,IAAV,kBAAY;IAChD;mBAE+B;AAEzB,0BAAgB,AAAM,cAAG,IAAI,AAAQ,wBAAW,AAAQ;AACjB,MAA3C,2BAAsB,KAAK,EAAE,aAAa;IAC5C;aAEyB;AACnB,0BAAgB,AAAM,cAAG,IAAI,AAAQ,wBAAW,AAAQ;AACjB,MAA3C,2BAAsB,KAAK,EAAE,aAAa;IAC5C;kBAE8B;AAC5B,YAAO,YAAM,YAAO,AAAK,IAAD;IAC1B;kBAE8B;AAC5B,YAAO,YAAM,YAAO,AAAK,IAAD;IAC1B;qBAEiC;AAEL,MAA1B,WAAM;IACR;mBAE+B;AACH,MAA1B,WAAM;IACR;sBAEkC;AACN,MAA1B,WAAM;IACR;UAIiB,OAAc;AAC3B,YAAA,AAAO,8BAA8B,AAAC,SAAb,WAAW,YAAU,KAAK,EAAE;IAAK;;sDAjatC,SAAS;IAoB3B;AApBqC,gFAAM,OAAO,6BAAE,MAAM;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BA7F5B,OAAoB;AACnD,mCACA,AAAc,AAA4B,aAA7B,oBAAK,QAAC,KAAM,AAAE,CAAD;AAC9B;AACE,cAAa,6BAAsB,KAAK,EAAE,sBAAsB;;;AAChE;AACA,gBAAO,EAAC;;;;IAEZ;eAIgB,OAAO;AACrB,UAAI,AAAM,cAAG;AACmC,QAA9C,wBAAmB,KAAK,EAAa,UAAX,UAAU;AACpC;;AAEE,0BAAgB,8BAAC,AAAQ,qBAAQ,AAAQ;AAC7C,eAAS,aAAc,cAAa;AAC9B,oBAAQ,2BAAsB,KAAK,EAAE,UAAU;AACnD,YAAI,KAAK,KAAI,CAAC;AACgB,UAA5B,AAAW,UAAD,SAAS,AAAM,KAAD,GAAG;AAC3B;;;AAGuB,MAA3B,0BAAqB,KAAK;IAC5B;uBAIwB;AAEtB,UAAI,AAAM,cAAG;AACwB,QAAnC,wBAAmB,KAAK,EAAE,QAAC,KAAM,CAAC;AAClC;;AAEE,0BAAgB,8BAClB,AAAQ,iCACR,AAAQ;AAEV,eAAS,WAAY,cAAa;AAC5B,kBAAM,2BAAsB,KAAK,EAAE,QAAQ;AAC/C,YAAI,GAAG,KAAI,CAAC;AACV;;;IAGN;yBAI0B,OAAO;AAC/B,UAAI,AAAM,cAAG;AACmC,QAA9C,kDAAmB,KAAK,oBAAa,WAAX,UAAU;AACpC;;AAEE,0BAAgB,8BAClB,AAAQ,+BACR,AAAQ;AAEV,eAAS,aAAc,cAAa;AAC9B,oBAAQ,qDAAsB,KAAK,GAAE,UAAU;AACnD,YAAI,KAAK,KAAI,CAAC;AACgB,UAAjB,UAAX,UAAU,WAAS,AAAM,KAAD,GAAG;AAC3B;;;AAGuB,MAA3B,oDAAqB,KAAK;IAC5B;mBAI+B;AAE7B,UAAI,AAAM,cAAG;AACwB,QAAnC,wBAAmB,KAAK,EAAE,QAAC,KAAM,CAAC;AAClC;;AAEE,0BAAgB,8BAAC,AAAQ,uBAAU,AAAQ;AAC/C,eAAS,WAAY,cAAa;AAC5B,kBAAM,2BAAsB,KAAK,EAAE,QAAQ;AAC/C,YAAI,GAAG,KAAI,CAAC;AACV;;;IAGN;;iDAxF0B,SAAS;AAAU,4DAAM,OAAO,EAAE,MAAM;;EAAC","file":"../../../../../../../../../../../../packages/intl/src/intl/date_format.dart.lib.js"}');
  // Exports:
  return {
    src__intl__date_format: date_format
  };
}));

//# sourceMappingURL=date_format.dart.lib.js.map