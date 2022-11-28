define(['dart_sdk', 'packages/intl/src/intl/regexp.dart', 'packages/intl/src/intl/constants.dart'], (function load__packages__intl__src__intl__intl_stream_dart(dart_sdk, packages__intl__src__intl__regexp$46dart, packages__intl__src__intl__constants$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const regexp = packages__intl__src__intl__regexp$46dart.src__intl__regexp;
  const constants = packages__intl__src__intl__constants$46dart.src__intl__constants;
  var intl_stream = Object.create(dart.library);
  var $substring = dartx.substring;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $codeUnits = dartx.codeUnits;
  var $_get = dartx._get;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:intl/src/intl/intl_stream.dart"];
  var contents$ = dart.privateName(intl_stream, "IntlStream.contents");
  var index = dart.privateName(intl_stream, "IntlStream.index");
  intl_stream.IntlStream = class IntlStream extends core.Object {
    get contents() {
      return this[contents$];
    }
    set contents(value) {
      this[contents$] = value;
    }
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    static ['_#new#tearOff'](contents) {
      return new intl_stream.IntlStream.new(contents);
    }
    atEnd() {
      return this.index >= core.num.as(dart.dload(this.contents, 'length'));
    }
    next() {
      let t0;
      return dart.dsend(this.contents, '_get', [(t0 = this.index, this.index = t0 + 1, t0)]);
    }
    read(howMany = 1) {
      let result = this.peek(howMany);
      this.index = this.index + howMany;
      return result;
    }
    startsWith(pattern) {
      if (typeof this.contents == 'string') return core.bool.as(dart.dsend(this.contents, 'startsWith', [pattern, this.index]));
      return pattern === this.peek(pattern.length);
    }
    peek(howMany = 1) {
      let result = null;
      if (typeof this.contents == 'string') {
        let stringContents = core.String.as(this.contents);
        result = stringContents[$substring](this.index, math.min(core.int, this.index + howMany, stringContents.length));
      } else {
        result = dart.dsend(this.contents, 'sublist', [this.index, this.index + howMany]);
      }
      return result;
    }
    rest() {
      return this.peek(core.int.as(dart.dsend(dart.dload(this.contents, 'length'), '-', [this.index])));
    }
    findIndex(f) {
      while (!this.atEnd()) {
        if (f(this.next())) return this.index - 1;
      }
      return null;
    }
    findIndexes(f) {
      let results = [];
      while (!this.atEnd()) {
        if (f(this.next())) results[$add](this.index - 1);
      }
      return results;
    }
    nextInteger(opts) {
      let t0;
      let digitMatcher = opts && 'digitMatcher' in opts ? opts.digitMatcher : null;
      let zeroDigit = opts && 'zeroDigit' in opts ? opts.zeroDigit : null;
      let string = (t0 = digitMatcher, t0 == null ? regexp.asciiDigitMatcher : t0).stringMatch(core.String.as(this.rest()));
      if (string == null || string[$isEmpty]) return null;
      this.read(string.length);
      if (zeroDigit != null && zeroDigit !== constants.asciiZeroCodeUnit) {
        let oldDigits = string[$codeUnits];
        let newDigits = T.ListOfint().filled(string.length, 0);
        for (let i = 0; i < string.length; i = i + 1) {
          newDigits[$_set](i, oldDigits[$_get](i) - dart.notNull(zeroDigit) + constants.asciiZeroCodeUnit);
        }
        string = core.String.fromCharCodes(newDigits);
      }
      return core.int.parse(string);
    }
  };
  (intl_stream.IntlStream.new = function(contents) {
    this[index] = 0;
    this[contents$] = contents;
    ;
  }).prototype = intl_stream.IntlStream.prototype;
  dart.addTypeTests(intl_stream.IntlStream);
  dart.addTypeCaches(intl_stream.IntlStream);
  dart.setMethodSignature(intl_stream.IntlStream, () => ({
    __proto__: dart.getMethods(intl_stream.IntlStream.__proto__),
    atEnd: dart.fnType(core.bool, []),
    next: dart.fnType(dart.dynamic, []),
    read: dart.fnType(dart.dynamic, [], [core.int]),
    startsWith: dart.fnType(core.bool, [core.String]),
    peek: dart.fnType(dart.dynamic, [], [core.int]),
    rest: dart.fnType(dart.dynamic, []),
    findIndex: dart.fnType(dart.nullable(core.int), [dart.fnType(core.bool, [dart.dynamic])]),
    findIndexes: dart.fnType(core.List, [dart.fnType(core.bool, [dart.dynamic])]),
    nextInteger: dart.fnType(dart.nullable(core.int), [], {digitMatcher: dart.nullable(core.RegExp), zeroDigit: dart.nullable(core.int)}, {})
  }));
  dart.setLibraryUri(intl_stream.IntlStream, I[0]);
  dart.setFieldSignature(intl_stream.IntlStream, () => ({
    __proto__: dart.getFields(intl_stream.IntlStream.__proto__),
    contents: dart.fieldType(dart.dynamic),
    index: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/intl/src/intl/intl_stream.dart", {
    "package:intl/src/intl/intl_stream.dart": intl_stream
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["intl_stream.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBU;;;;;;IACJ;;;;;;;;;;AAIY,YAAA,AAAM,2BAAY,WAAT;IAAe;;;AAEtB,YAAQ,YAAR,yBAAc,iBAAL,kBAAK;IAAG;SAIjB;AACZ,mBAAS,UAAK,OAAO;AACT,MAAhB,aAAA,AAAM,aAAG,OAAO;AAChB,YAAO,OAAM;IACf;eAIuB;AACrB,UAAa,OAAT,2BAAoB,oBAAgB,WAAT,8BAAoB,OAAO,EAAE;AAC5D,YAAO,AAAQ,QAAD,KAAI,UAAK,AAAQ,OAAD;IAChC;SAIkB;AACR;AACR,UAAa,OAAT;AACK,4CAAiB;AAE+B,QADvD,SAAS,AAAe,cAAD,aACnB,YAAO,mBAAI,AAAM,aAAE,OAAO,EAAE,AAAe,cAAD;;AAGG,QAAjD,SAAkB,WAAT,2BAAiB,YAAO,AAAM,aAAE,OAAO;;AAElD,YAAO,OAAM;IACf;;AAGkB,mCAAqB,WAAP,WAAT,gCAAkB;IAAM;cAIT;AACpC,cAAQ;AACN,YAAI,AAAC,CAAA,CAAC,cAAS,MAAO,AAAM,cAAE;;AAEhC,YAAO;IACT;gBAIiD;AAC3C,oBAAU;AACd,cAAQ;AACN,YAAI,AAAC,CAAA,CAAC,cAAS,AAAQ,AAAc,OAAf,OAAK,AAAM,aAAE;;AAErC,YAAO,QAAO;IAChB;;;UAQ0B;UAAmB;AACvC,mBAAoD,CAA7B,KAAb,YAAY,EAAZ,aAAuB,0DAA+B;AACpE,UAAI,AAAO,MAAD,YAAY,AAAO,MAAD,YAAU,MAAO;AAC1B,MAAnB,UAAK,AAAO,MAAD;AACX,UAAI,SAAS,YAAY,SAAS,KAAc;AAE1C,wBAAY,AAAO,MAAD;AAClB,wBAAY,qBAAiB,AAAO,MAAD,SAAS;AAChD,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAO,MAAD,SAAS,IAAA,AAAC,CAAA;AACmC,UAArE,AAAS,SAAA,QAAC,CAAC,EAAI,AAAS,AAAI,AAAY,SAAhB,QAAC,CAAC,iBAAI,SAAS,IAAa;;AAEd,QAAxC,SAAgB,0BAAc,SAAS;;AAEzC,YAAW,gBAAM,MAAM;IACzB;;yCA9EgB;IAFZ,cAAQ;IAEI;;EAAS","file":"../../../../../../../../../../../../packages/intl/src/intl/intl_stream.dart.lib.js"}');
  // Exports:
  return {
    src__intl__intl_stream: intl_stream
  };
}));

//# sourceMappingURL=intl_stream.dart.lib.js.map
