define(['dart_sdk'], (function load__packages__http_parser__src__scan_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var scan = Object.create(dart.library);
  var $add = dartx.add;
  var $substring = dartx.substring;
  var $replaceAllMapped = dartx.replaceAllMapped;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MatchToString: () => (T.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  scan.parseList = function parseList(T, scanner, parseElement) {
    let result = _interceptors.JSArray$(T).of([]);
    while (scanner.scan(",")) {
      scanner.scan(scan.whitespace);
    }
    result[$add](parseElement());
    scanner.scan(scan.whitespace);
    while (scanner.scan(",")) {
      scanner.scan(scan.whitespace);
      if (scanner.matches(",") || scanner.isDone) continue;
      result[$add](parseElement());
      scanner.scan(scan.whitespace);
    }
    return result;
  };
  scan.expectQuotedString = function expectQuotedString(scanner, opts) {
    let name = opts && 'name' in opts ? opts.name : "quoted string";
    scanner.expect(scan._quotedString, {name: name});
    let string = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
    return string[$substring](1, string.length - 1)[$replaceAllMapped](scan._quotedPair, dart.fn(match => dart.nullCheck(match._get(1)), T.MatchToString()));
  };
  dart.defineLazy(scan, {
    /*scan.token*/get token() {
      return core.RegExp.new("[^()<>@,;:\"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+");
    },
    /*scan._lws*/get _lws() {
      return core.RegExp.new("(?:\\r\\n)?[ \\t]+");
    },
    /*scan._quotedString*/get _quotedString() {
      return core.RegExp.new("\"(?:[^\"\\x00-\\x1F\\x7F]|\\\\.)*\"");
    },
    /*scan._quotedPair*/get _quotedPair() {
      return core.RegExp.new("\\\\(.)");
    },
    /*scan.nonToken*/get nonToken() {
      return core.RegExp.new("[()<>@,;:\"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]");
    },
    /*scan.whitespace*/get whitespace() {
      return core.RegExp.new("(?:" + scan._lws.pattern + ")*");
    }
  }, false);
  dart.trackLibraries("packages/http_parser/src/scan.dart", {
    "package:http_parser/src/scan.dart": scan
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scan.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;yCAgCmC,SAAsB;AACjD,iBAAY;AAGlB,WAAO,AAAQ,OAAD,MAAM;AACM,MAAxB,AAAQ,OAAD,MAAM;;AAGW,IAA1B,AAAO,MAAD,OAAK,AAAY,YAAA;AACC,IAAxB,AAAQ,OAAD,MAAM;AAEb,WAAO,AAAQ,OAAD,MAAM;AACM,MAAxB,AAAQ,OAAD,MAAM;AAGb,UAAI,AAAQ,OAAD,SAAS,QAAQ,AAAQ,OAAD,SAAS;AAElB,MAA1B,AAAO,MAAD,OAAK,AAAY,YAAA;AACC,MAAxB,AAAQ,OAAD,MAAM;;AAGf,UAAO,OAAM;EACf;wDAOgB;QACP;AAEkC,IAAzC,AAAQ,OAAD,QAAQ,2BAAqB,IAAI;AAClC,iBAA8B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AAClC,UAAO,AACF,AACA,OAFQ,aACE,GAAG,AAAO,AAAO,MAAR,UAAU,sBACZ,kBAAa,QAAC,SAAkB,eAAR,AAAK,KAAA,MAAC;EACtD;;MA9DM,UAAK;YAAG,iBAAO;;MAGf,SAAI;YAAG,iBAAO;;MAGd,kBAAa;YAAG,iBAAO;;MAGvB,gBAAW;YAAG,iBAAO;;MAGrB,aAAQ;YAAG,iBAAO;;MAGlB,eAAU;YAAG,iBAAO,AAAsB,QAAhB,AAAK,oBAAQ","file":"../../../../../../../../../../../packages/http_parser/src/scan.dart.lib.js"}');
  // Exports:
  return {
    src__scan: scan
  };
}));

//# sourceMappingURL=scan.dart.lib.js.map
