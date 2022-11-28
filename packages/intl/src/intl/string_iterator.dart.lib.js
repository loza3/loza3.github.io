define(['dart_sdk'], (function load__packages__intl__src__intl__string_iterator_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var string_iterator = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:intl/src/intl/string_iterator.dart"];
  var input$ = dart.privateName(string_iterator, "StringIterator.input");
  var nextIndex = dart.privateName(string_iterator, "StringIterator.nextIndex");
  var _current = dart.privateName(string_iterator, "_current");
  string_iterator.StringIterator = class StringIterator extends core.Object {
    get input() {
      return this[input$];
    }
    set input(value) {
      super.input = value;
    }
    get nextIndex() {
      return this[nextIndex];
    }
    set nextIndex(value) {
      this[nextIndex] = value;
    }
    static ['_#new#tearOff'](input) {
      return new string_iterator.StringIterator.new(input);
    }
    get current() {
      return this[_current];
    }
    moveNext() {
      let t0;
      if (this.nextIndex >= this.input.length) {
        this[_current] = null;
        return false;
      }
      this[_current] = this.input[$_get]((t0 = this.nextIndex, this.nextIndex = t0 + 1, t0));
      return true;
    }
    get peek() {
      return this.nextIndex >= this.input.length ? null : this.input[$_get](this.nextIndex);
    }
  };
  (string_iterator.StringIterator.new = function(input) {
    this[nextIndex] = 0;
    this[_current] = null;
    this[input$] = input;
    ;
  }).prototype = string_iterator.StringIterator.prototype;
  dart.addTypeTests(string_iterator.StringIterator);
  dart.addTypeCaches(string_iterator.StringIterator);
  dart.setMethodSignature(string_iterator.StringIterator, () => ({
    __proto__: dart.getMethods(string_iterator.StringIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(string_iterator.StringIterator, () => ({
    __proto__: dart.getGetters(string_iterator.StringIterator.__proto__),
    current: dart.nullable(core.String),
    peek: dart.nullable(core.String)
  }));
  dart.setLibraryUri(string_iterator.StringIterator, I[0]);
  dart.setFieldSignature(string_iterator.StringIterator, () => ({
    __proto__: dart.getFields(string_iterator.StringIterator.__proto__),
    input: dart.finalFieldType(core.String),
    nextIndex: dart.fieldType(core.int),
    [_current]: dart.fieldType(dart.nullable(core.String))
  }));
  dart.trackLibraries("packages/intl/src/intl/string_iterator.dart", {
    "package:intl/src/intl/string_iterator.dart": string_iterator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["string_iterator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAOe;;;;;;IACT;;;;;;;;;;AAKmB;IAAQ;;;AAG7B,UAAI,AAAU,kBAAG,AAAM;AACN,QAAf,iBAAW;AACX,cAAO;;AAEoB,MAA7B,iBAAW,AAAK,mBAAU,qBAAT,sBAAS;AAC1B,YAAO;IACT;;AAEoB,YAAA,AAAU,mBAAG,AAAM,oBAAS,OAAO,AAAK,kBAAC;IAAU;;iDAbnD;IAHhB,kBAAY;IACR;IAEY;;EAAM","file":"../../../../../../../../../../../../packages/intl/src/intl/string_iterator.dart.lib.js"}');
  // Exports:
  return {
    src__intl__string_iterator: string_iterator
  };
}));

//# sourceMappingURL=string_iterator.dart.lib.js.map
