define(['dart_sdk', 'packages/source_span/src/span_exception.dart'], (function load__packages__http_parser__src__utils_dart(dart_sdk, packages__source_span__src__span_exception$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const span_exception = packages__source_span__src__span_exception$46dart.src__span_exception;
  var utils = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  utils.wrapFormatException = function wrapFormatException(T, name, value, body) {
    try {
      return body();
    } catch (e) {
      let ex = dart.getThrown(e);
      if (span_exception.SourceSpanFormatException.is(ex)) {
        let error = ex;
        dart.throw(new span_exception.SourceSpanFormatException.new("Invalid " + name + ": " + error.message, error.span, error.source));
      } else if (core.FormatException.is(ex)) {
        let error = ex;
        dart.throw(new core.FormatException.new("Invalid " + name + " \"" + value + "\": " + error.message, error.source, error.offset));
      } else
        throw e;
    }
  };
  dart.trackLibraries("packages/http_parser/src/utils.dart", {
    "package:http_parser/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;8DAUgC,MAAa,OAAoB;AAC/D;AACE,YAAO,AAAI,KAAA;;;AACX;YAAoC;AAE4B,QADhE,WAAM,iDACF,AAAiC,aAAvB,IAAI,UAAI,AAAM,KAAD,UAAY,AAAM,KAAD,OAAO,AAAM,KAAD;YACxD;YAA0B;AAEiD,QAD3E,WAAM,6BACF,AAA0C,aAAhC,IAAI,WAAG,KAAK,YAAK,AAAM,KAAD,UAAY,AAAM,KAAD,SAAS,AAAM,KAAD;;;;EAEvE","file":"../../../../../../../../../../../packages/http_parser/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
