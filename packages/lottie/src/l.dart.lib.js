define(['dart_sdk'], (function load__packages__lottie__src__l_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var l = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    ListOfStringN: () => (T.ListOfStringN = dart.constFn(core.List$(T.StringN())))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/l.dart"];
  l.L = class L extends core.Object {
    static get _sections() {
      let t0;
      t0 = l.L['_#_sections'];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_sections")) : t0;
    }
    static set _sections(library$32package$58lottie$47src$47l$46dart$58$58_sections$35param) {
      l.L['_#_sections'] = library$32package$58lottie$47src$47l$46dart$58$58_sections$35param;
    }
    static get _startTimeNs() {
      let t0;
      t0 = l.L['_#_startTimeNs'];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_startTimeNs")) : t0;
    }
    static set _startTimeNs(library$32package$58lottie$47src$47l$46dart$58$58_startTimeNs$35param) {
      l.L['_#_startTimeNs'] = library$32package$58lottie$47src$47l$46dart$58$58_startTimeNs$35param;
    }
    static get traceEnabled() {
      return l.L._traceEnabled;
    }
    static set traceEnabled(enabled) {
      if (l.L._traceEnabled === enabled) {
        return;
      }
      l.L._traceEnabled = enabled;
      if (l.L._traceEnabled) {
        l.L._sections = T.ListOfStringN().filled(20, null);
        l.L._startTimeNs = T.ListOfint().filled(20, 0);
      }
    }
    static beginSection(section) {
      if (!l.L._traceEnabled) {
        return;
      }
      if (l.L._traceDepth === 20) {
        l.L._depthPastMaxDepth = l.L._depthPastMaxDepth + 1;
        return;
      }
      l.L._sections[$_set](l.L._traceDepth, section);
      l.L._startTimeNs[$_set](l.L._traceDepth, new core.DateTime.now().microsecondsSinceEpoch);
      developer.Timeline.startSync("Lottie::" + section);
      l.L._traceDepth = l.L._traceDepth + 1;
    }
    static endSection(section) {
      if (l.L._depthPastMaxDepth > 0) {
        l.L._depthPastMaxDepth = l.L._depthPastMaxDepth - 1;
        return 0.0;
      }
      if (!l.L._traceEnabled) {
        return 0.0;
      }
      l.L._traceDepth = l.L._traceDepth - 1;
      if (l.L._traceDepth === -1) {
        dart.throw(new core.StateError.new("Can't end trace section. There are none."));
      }
      if (section !== l.L._sections[$_get](l.L._traceDepth)) {
        dart.throw(new core.StateError.new("Unbalanced trace call " + section + ". Expected " + dart.str(l.L._sections[$_get](l.L._traceDepth)) + "."));
      }
      developer.Timeline.finishSync();
      return (new core.DateTime.now().microsecondsSinceEpoch - l.L._startTimeNs[$_get](l.L._traceDepth)) / 1000;
    }
    static ['_#new#tearOff']() {
      return new l.L.new();
    }
  };
  (l.L.new = function() {
    ;
  }).prototype = l.L.prototype;
  dart.addTypeTests(l.L);
  dart.addTypeCaches(l.L);
  dart.setStaticMethodSignature(l.L, () => ['beginSection', 'endSection']);
  dart.setStaticGetterSignature(l.L, () => ['_sections', '_startTimeNs', 'traceEnabled']);
  dart.setStaticSetterSignature(l.L, () => ['_sections', '_startTimeNs', 'traceEnabled']);
  dart.setLibraryUri(l.L, I[0]);
  dart.setStaticFieldSignature(l.L, () => ['_maxDepth', '_traceEnabled', '_#_sections', '_#_startTimeNs', '_traceDepth', '_depthPastMaxDepth']);
  dart.defineLazy(l.L, {
    /*l.L._maxDepth*/get _maxDepth() {
      return 20;
    },
    /*l.L._traceEnabled*/get _traceEnabled() {
      return false;
    },
    set _traceEnabled(_) {},
    /*l.L['_#_sections']*/get ['_#_sections']() {
      return null;
    },
    set ['_#_sections'](_) {},
    /*l.L['_#_startTimeNs']*/get ['_#_startTimeNs']() {
      return null;
    },
    set ['_#_startTimeNs'](_) {},
    /*l.L._traceDepth*/get _traceDepth() {
      return 0;
    },
    set _traceDepth(_) {},
    /*l.L._depthPastMaxDepth*/get _depthPastMaxDepth() {
      return 0;
    },
    set _depthPastMaxDepth(_) {}
  }, false);
  dart.trackLibraries("packages/lottie/src/l.dart", {
    "package:lottie/src/l.dart": l
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["l.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAK4B;;IAAS;yBAAT;;IAAS;;;AACb;;IAAY;4BAAZ;;IAAY;;AAIF;IAAa;4BAChB;AAC3B,UAAI,AAAc,sBAAG,OAAO;AAC1B;;AAEqB,MAAvB,oBAAgB,OAAO;AACvB,UAAI;AACsC,QAAxC,gBAAiB,6BAAkB;AACK,QAAxC,mBAAoB,yBAAkB;;IAE1C;wBAEgC;AAC9B,WAAK;AACH;;AAEF,UAAI,AAAY;AACM,QAApB,yBAAA,AAAkB,yBAAA;AAClB;;AAE8B,MAAhC,AAAS,qBAAC,iBAAe,OAAO;AACiC,MAAjE,AAAY,wBAAC,iBAAwB,AAAM;AACL,MAA7B,6BAAU,AAAkB,aAAR,OAAO;AACvB,MAAb,kBAAA,AAAW,kBAAA;IACb;sBAEgC;AAC9B,UAAI,AAAmB,yBAAE;AACH,QAApB,yBAAA,AAAkB,yBAAA;AAClB,cAAO;;AAET,WAAK;AACH,cAAO;;AAEI,MAAb,kBAAA,AAAW,kBAAA;AACX,UAAI,AAAY,oBAAG,CAAC;AAC0C,QAA5D,WAAM,wBAAW;;AAEnB,UAAI,OAAO,KAAI,AAAS,qBAAC;AAEqB,QAD5C,WAAM,wBAAU,AAAC,2BAAwB,OAAO,GAC5C,yBAAc,AAAS,qBAAC,oBAAa;;AAEtB,MAAZ;AACT,YAA2E,EAA1D,AAAM,AAAuB,iDAAE,AAAY,wBAAC,oBACzD;IACN;;;;;;;EACF;;;;;;;;;MArDmB,aAAS;;;MACd,iBAAa;YAAG;;;MACF,kBAC5B;YAD4B;;;MACJ,qBACxB;YADwB;;;MACX,eAAW;YAAG;;;MACd,sBAAkB;YAAG","file":"../../../../../../../../../../../packages/lottie/src/l.dart.lib.js"}');
  // Exports:
  return {
    src__l: l
  };
}));

//# sourceMappingURL=l.dart.lib.js.map
