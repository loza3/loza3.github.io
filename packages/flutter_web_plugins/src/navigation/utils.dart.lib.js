define(['dart_sdk'], (function load__packages__flutter_web_plugins__src__navigation__utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $_get = dartx._get;
  var $getAttribute = dartx.getAttribute;
  var $endsWith = dartx.endsWith;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  utils.extractPathname = function extractPathname(url) {
    let t0;
    utils._urlParsingNode.href = url;
    let pathname = (t0 = utils._urlParsingNode.pathname, t0 == null ? "" : t0);
    return pathname[$isEmpty] || pathname[$_get](0) === "/" ? pathname : "/" + pathname;
  };
  utils.getBaseElementHrefFromDom = function getBaseElementHrefFromDom() {
    let t0;
    t0 = utils._baseElement;
    return t0 == null ? null : t0[$getAttribute]("href");
  };
  utils.checkBaseHref = function checkBaseHref(baseHref) {
    if (baseHref == null) {
      dart.throw(core.Exception.new("Please add a <base> element to your index.html"));
    }
    if (!baseHref[$endsWith]("/")) {
      dart.throw(core.Exception.new("The base href has to end with a \"/\" to work correctly"));
    }
    return baseHref;
  };
  utils.ensureLeadingSlash = function ensureLeadingSlash(path) {
    if (!path[$startsWith]("/")) {
      return "/" + path;
    }
    return path;
  };
  utils.stripTrailingSlash = function stripTrailingSlash(path) {
    if (path[$endsWith]("/")) {
      return path[$substring](0, path.length - 1);
    }
    return path;
  };
  dart.defineLazy(utils, {
    /*utils._urlParsingNode*/get _urlParsingNode() {
      return html.AnchorElement.new();
    },
    /*utils._baseElement*/get _baseElement() {
      return html.document.querySelector("base");
    }
  }, false);
  dart.trackLibraries("packages/flutter_web_plugins/src/navigation/utils.dart", {
    "package:flutter_web_plugins/src/navigation/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;mDAY8B;;AACF,IAA1B,AAAgB,6BAAO,GAAG;AACb,oBAAoC,KAAzB,AAAgB,gCAAA,aAAY;AACpD,UAAQ,AAAS,AAAQ,SAAT,cAAY,AAAQ,AAAI,QAAJ,QAAC,OAAM,MAAO,QAAQ,GAAG,AAAY,MAAT,QAAQ;EAC1E;;;AAQuC;+BAAc,kBAAa;EAAO;+CAK5C;AAC3B,QAAI,AAAS,QAAD;AACuD,MAAjE,WAAM,mBAAU;;AAElB,SAAK,AAAS,QAAD,YAAU;AACmD,MAAxE,WAAM,mBAAU;;AAElB,UAAO,SAAQ;EACjB;yDAKiC;AAC/B,SAAK,AAAK,IAAD,cAAY;AACnB,YAAO,AAAQ,OAAL,IAAI;;AAEhB,UAAO,KAAI;EACb;yDAGiC;AAC/B,QAAI,AAAK,IAAD,YAAU;AAChB,YAAO,AAAK,KAAD,aAAW,GAAG,AAAK,AAAO,IAAR,UAAU;;AAEzC,UAAO,KAAI;EACb;;MAjDoB,qBAAe;YAAG;;MAavB,kBAAY;YAAG,AAAS,6BAAc","file":"../../../../../../../../../../packages/flutter_web_plugins/src/navigation/utils.dart.lib.js"}');
  // Exports:
  return {
    src__navigation__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
