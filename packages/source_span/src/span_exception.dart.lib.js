define(['dart_sdk', 'packages/source_span/src/location_mixin.dart'], (function load__packages__source_span__src__span_exception_dart(dart_sdk, packages__source_span__src__location_mixin$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const span = packages__source_span__src__location_mixin$46dart.src__span;
  var span_exception = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfSourceSpan$String: () => (T.MapOfSourceSpan$String = dart.constFn(core.Map$(span.SourceSpan, core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:source_span/src/span_exception.dart"];
  var _message$ = dart.privateName(span_exception, "_message");
  var _span$ = dart.privateName(span_exception, "_span");
  span_exception.SourceSpanException = class SourceSpanException extends core.Object {
    get message() {
      return this[_message$];
    }
    get span() {
      return this[_span$];
    }
    static ['_#new#tearOff'](_message, _span) {
      return new span_exception.SourceSpanException.new(_message, _span);
    }
    toString(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (this.span == null) return this.message;
      return "Error on " + dart.nullCheck(this.span).message(this.message, {color: color});
    }
  };
  (span_exception.SourceSpanException.new = function(_message, _span) {
    this[_message$] = _message;
    this[_span$] = _span;
    ;
  }).prototype = span_exception.SourceSpanException.prototype;
  dart.addTypeTests(span_exception.SourceSpanException);
  dart.addTypeCaches(span_exception.SourceSpanException);
  span_exception.SourceSpanException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(span_exception.SourceSpanException, () => ({
    __proto__: dart.getMethods(span_exception.SourceSpanException.__proto__),
    toString: dart.fnType(core.String, [], {color: dart.dynamic}, {}),
    [$toString]: dart.fnType(core.String, [], {color: dart.dynamic}, {})
  }));
  dart.setGetterSignature(span_exception.SourceSpanException, () => ({
    __proto__: dart.getGetters(span_exception.SourceSpanException.__proto__),
    message: core.String,
    span: dart.nullable(span.SourceSpan)
  }));
  dart.setLibraryUri(span_exception.SourceSpanException, I[0]);
  dart.setFieldSignature(span_exception.SourceSpanException, () => ({
    __proto__: dart.getFields(span_exception.SourceSpanException.__proto__),
    [_message$]: dart.finalFieldType(core.String),
    [_span$]: dart.finalFieldType(dart.nullable(span.SourceSpan))
  }));
  dart.defineExtensionMethods(span_exception.SourceSpanException, ['toString']);
  var source$ = dart.privateName(span_exception, "SourceSpanFormatException.source");
  span_exception.SourceSpanFormatException = class SourceSpanFormatException extends span_exception.SourceSpanException {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get offset() {
      let t0;
      t0 = this.span;
      return t0 == null ? null : t0.start.offset;
    }
    static ['_#new#tearOff'](message, span, source = null) {
      return new span_exception.SourceSpanFormatException.new(message, span, source);
    }
  };
  (span_exception.SourceSpanFormatException.new = function(message, span, source = null) {
    this[source$] = source;
    span_exception.SourceSpanFormatException.__proto__.new.call(this, message, span);
    ;
  }).prototype = span_exception.SourceSpanFormatException.prototype;
  dart.addTypeTests(span_exception.SourceSpanFormatException);
  dart.addTypeCaches(span_exception.SourceSpanFormatException);
  span_exception.SourceSpanFormatException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getGetters(span_exception.SourceSpanFormatException.__proto__),
    offset: dart.nullable(core.int)
  }));
  dart.setLibraryUri(span_exception.SourceSpanFormatException, I[0]);
  dart.setFieldSignature(span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getFields(span_exception.SourceSpanFormatException.__proto__),
    source: dart.finalFieldType(dart.dynamic)
  }));
  var primaryLabel$ = dart.privateName(span_exception, "MultiSourceSpanException.primaryLabel");
  var secondarySpans$ = dart.privateName(span_exception, "MultiSourceSpanException.secondarySpans");
  span_exception.MultiSourceSpanException = class MultiSourceSpanException extends span_exception.SourceSpanException {
    get primaryLabel() {
      return this[primaryLabel$];
    }
    set primaryLabel(value) {
      super.primaryLabel = value;
    }
    get secondarySpans() {
      return this[secondarySpans$];
    }
    set secondarySpans(value) {
      super.secondarySpans = value;
    }
    static ['_#new#tearOff'](message, span, primaryLabel, secondarySpans) {
      return new span_exception.MultiSourceSpanException.new(message, span, primaryLabel, secondarySpans);
    }
    toString(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let secondaryColor = opts && 'secondaryColor' in opts ? opts.secondaryColor : null;
      if (this.span == null) return this.message;
      let useColor = false;
      let primaryColor = null;
      if (typeof color == 'string') {
        useColor = true;
        primaryColor = color;
      } else if (dart.equals(color, true)) {
        useColor = true;
      }
      let formatted = span['SourceSpanExtension|messageMultiple'](dart.nullCheck(this.span), this.message, this.primaryLabel, this.secondarySpans, {color: useColor, primaryColor: primaryColor, secondaryColor: secondaryColor});
      return "Error on " + formatted;
    }
  };
  (span_exception.MultiSourceSpanException.new = function(message, span, primaryLabel, secondarySpans) {
    this[primaryLabel$] = primaryLabel;
    this[secondarySpans$] = T.MapOfSourceSpan$String().unmodifiable(secondarySpans);
    span_exception.MultiSourceSpanException.__proto__.new.call(this, message, span);
    ;
  }).prototype = span_exception.MultiSourceSpanException.prototype;
  dart.addTypeTests(span_exception.MultiSourceSpanException);
  dart.addTypeCaches(span_exception.MultiSourceSpanException);
  dart.setMethodSignature(span_exception.MultiSourceSpanException, () => ({
    __proto__: dart.getMethods(span_exception.MultiSourceSpanException.__proto__),
    toString: dart.fnType(core.String, [], {color: dart.dynamic, secondaryColor: dart.nullable(core.String)}, {}),
    [$toString]: dart.fnType(core.String, [], {color: dart.dynamic, secondaryColor: dart.nullable(core.String)}, {})
  }));
  dart.setLibraryUri(span_exception.MultiSourceSpanException, I[0]);
  dart.setFieldSignature(span_exception.MultiSourceSpanException, () => ({
    __proto__: dart.getFields(span_exception.MultiSourceSpanException.__proto__),
    primaryLabel: dart.finalFieldType(core.String),
    secondarySpans: dart.finalFieldType(core.Map$(span.SourceSpan, core.String))
  }));
  dart.defineExtensionMethods(span_exception.MultiSourceSpanException, ['toString']);
  var source$0 = dart.privateName(span_exception, "MultiSourceSpanFormatException.source");
  span_exception.MultiSourceSpanFormatException = class MultiSourceSpanFormatException extends span_exception.MultiSourceSpanException {
    get source() {
      return this[source$0];
    }
    set source(value) {
      super.source = value;
    }
    get offset() {
      let t0;
      t0 = this.span;
      return t0 == null ? null : t0.start.offset;
    }
    static ['_#new#tearOff'](message, span, primaryLabel, secondarySpans, source = null) {
      return new span_exception.MultiSourceSpanFormatException.new(message, span, primaryLabel, secondarySpans, source);
    }
  };
  (span_exception.MultiSourceSpanFormatException.new = function(message, span, primaryLabel, secondarySpans, source = null) {
    this[source$0] = source;
    span_exception.MultiSourceSpanFormatException.__proto__.new.call(this, message, span, primaryLabel, secondarySpans);
    ;
  }).prototype = span_exception.MultiSourceSpanFormatException.prototype;
  dart.addTypeTests(span_exception.MultiSourceSpanFormatException);
  dart.addTypeCaches(span_exception.MultiSourceSpanFormatException);
  span_exception.MultiSourceSpanFormatException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(span_exception.MultiSourceSpanFormatException, () => ({
    __proto__: dart.getGetters(span_exception.MultiSourceSpanFormatException.__proto__),
    offset: dart.nullable(core.int)
  }));
  dart.setLibraryUri(span_exception.MultiSourceSpanFormatException, I[0]);
  dart.setFieldSignature(span_exception.MultiSourceSpanFormatException, () => ({
    __proto__: dart.getFields(span_exception.MultiSourceSpanFormatException.__proto__),
    source: dart.finalFieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/source_span/src/span_exception.dart", {
    "package:source_span/src/span_exception.dart": span_exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["span_exception.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAUwB;IAAQ;;AAON;IAAK;;;;;UAaZ;AACf,UAAI,AAAK,mBAAS,MAAO;AACzB,YAAO,AAAkD,eAAlC,AAAE,eAAN,mBAAc,sBAAgB,KAAK;IACxD;;qDAbyB,UAAe;IAAf;IAAe;;EAAM;;;;;;;;;;;;;;;;;;;;;;;IAoBhC;;;;;;;;AAGK;iCAAM,AAAM;IAAM;;;;;2DAEJ,SAAqB;IAAY;AAC5D,sEAAM,OAAO,EAAE,IAAI;;EAAC;;;;;;;;;;;;;;;;IAYb;;;;;;IAMiB;;;;;;;;;;UAkBb;UAAe;AAC9B,UAAI,AAAK,mBAAS,MAAO;AAErB,qBAAW;AACP;AACR,UAAU,OAAN,KAAK;AACQ,QAAf,WAAW;AACS,QAApB,eAAe,KAAK;YACf,KAAU,YAAN,KAAK,EAAI;AACH,QAAf,WAAW;;AAGP,sBAAkB,4CAAF,eAAJ,YACd,cAAS,mBAAc,6BAChB,QAAQ,gBACD,YAAY,kBACV,cAAc;AAClC,YAAO,AAAqB,eAAV,SAAS;IAC7B;;0DAlCgC,SAAqB,MAAW,cACpC;IADoC;IAE3C,wBAAM,wCAAa,cAAc;AAChD,qEAAM,OAAO,EAAE,IAAI;;EAAC;;;;;;;;;;;;;;;;;IAsCZ;;;;;;;;AAGK;iCAAM,AAAM;IAAM;;;;;gEAEC,SAAqB,MAChD,cAAsC;IACvC;AACJ,2EAAM,OAAO,EAAE,IAAI,EAAE,YAAY,EAAE,cAAc;;EAAC","file":"../../../../../../../../../../../packages/source_span/src/span_exception.dart.lib.js"}');
  // Exports:
  return {
    src__span_exception: span_exception
  };
}));

//# sourceMappingURL=span_exception.dart.lib.js.map
