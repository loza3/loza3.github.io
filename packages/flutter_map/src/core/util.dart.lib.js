define(['dart_sdk'], (function load__packages__flutter_map__src__core__util_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var util = Object.create(dart.library);
  var $_get = dartx._get;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    MatchToString: () => (T$.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  util.template = function template(str, data) {
    return str[$replaceAllMapped](util._templateRe, dart.fn(match => {
      let firstMatch = match.group(1);
      if (firstMatch == null) {
        dart.throw(core.Exception.new("incorrect URL template: " + str));
      }
      let value = data[$_get](firstMatch);
      if (value == null) {
        dart.throw(core.Exception.new("No value provided for variable " + dart.str(match.group(1))));
      } else {
        return value;
      }
    }, T$.MatchToString()));
  };
  util.wrapNum = function wrapNum(x, range, includeMax = null) {
    let max = range.item2;
    let min = range.item1;
    let d = max - min;
    return x === max && includeMax != null ? x : ((x - min)[$modulo](d) + d)[$modulo](d) + min;
  };
  util.throttleStreamTransformerWithTrailingCall = function throttleStreamTransformerWithTrailingCall(T, duration) {
    let timer = null;
    let recentData = null;
    let trailingCall = false;
    let throttleHandler = null;
    function throttleHandler$35get() {
      let t1;
      t1 = throttleHandler;
      return t1 == null ? dart.throw(new _internal.LateError.localNI("throttleHandler")) : t1;
    }
    dart.fn(throttleHandler$35get, dart.fnType(dart.fnType(dart.void, [T, async.EventSink$(T)]), []));
    function throttleHandler$35set(throttleHandler$35param) {
      if (throttleHandler == null)
        return throttleHandler = throttleHandler$35param;
      else
        dart.throw(new _internal.LateError.localAI("throttleHandler"));
    }
    dart.fn(throttleHandler$35set, dart.fnType(dart.dynamic, [dart.fnType(dart.void, [T, async.EventSink$(T)])]));
    throttleHandler$35set(dart.fn((data, sink) => {
      recentData = data;
      if (timer == null) {
        sink.add(recentData);
        timer = async.Timer.new(duration, dart.fn(() => {
          timer = null;
          if (trailingCall) {
            trailingCall = false;
            throttleHandler$35get()(recentData, sink);
          }
        }, T$.VoidTovoid()));
      } else {
        trailingCall = true;
      }
    }, dart.fnType(dart.void, [T, async.EventSink$(T)])));
    return new (async._StreamHandlerTransformer$(T, T)).new({handleData: throttleHandler$35get(), handleDone: dart.fn(sink => {
        let t3;
        t3 = timer;
        t3 == null ? null : t3.cancel();
        sink.close();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  dart.defineLazy(util, {
    /*util._templateRe*/get _templateRe() {
      return core.RegExp.new("\\{ *([\\w_-]+) *\\}");
    },
    set _templateRe(_) {}
  }, false);
  dart.trackLibraries("packages/flutter_map/src/core/util.dart", {
    "package:flutter_map/src/core/util.dart": util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;oCAWuB,KAAyB;AAC9C,UAAO,AAAI,IAAD,oBAAkB,kBAAa,QAAO;AACxC,uBAAa,AAAM,KAAD,OAAO;AAC/B,UAAI,AAAW,UAAD;AACmC,QAA/C,WAAM,mBAAU,AAA8B,6BAAJ,GAAG;;AAEzC,kBAAQ,AAAI,IAAA,QAAC,UAAU;AAC7B,UAAI,AAAM,KAAD;AAC4D,QAAnE,WAAM,mBAAU,AAAkD,6CAAhB,AAAM,KAAD,OAAO;;AAE9D,cAAO,MAAK;;;EAGlB;kCAEsB,GAA0B,OAAc;AACtD,cAAM,AAAM,KAAD;AACX,cAAM,AAAM,KAAD;AACX,YAAI,AAAI,GAAD,GAAG,GAAG;AACnB,UAAO,AAAE,AAAO,EAAR,KAAI,GAAG,IAAI,UAAU,WAAW,CAAC,GAAuB,AAAI,CAAb,AAAI,CAAb,AAAE,CAAD,GAAG,GAAG,WAAI,CAAC,IAAG,CAAC,WAAI,CAAC,IAAG,GAAG;EAC3E;yGAGa;AACJ;AACL;AACE,uBAAe;AAEiC;;;;;;;;;;;;;;AAkBnD,IAhBD,sBAAkB,SAAG,MAAmB;AACrB,MAAjB,aAAa,IAAI;AAEjB,UAAI,AAAM,KAAD;AACa,QAApB,AAAK,IAAD,KAAK,UAAU;AAQjB,QAPF,QAAQ,gBAAM,QAAQ,EAAE;AACV,UAAZ,QAAQ;AAER,cAAI,YAAY;AACM,YAApB,eAAe;AACkB,YAAjC,AAAe,wBAAC,UAAU,EAAE,IAAI;;;;AAIjB,QAAnB,eAAe;;;AAInB,UAAO,+DACS,qCACA,QAAc;;AACT,aAAf,KAAK;qBAAL,OAAO;AACK,QAAZ,AAAK,IAAD;;EAEZ;;MA7DI,gBAAW;YAAG,iBAAO","file":"../../../../../../../../../../../../packages/flutter_map/src/core/util.dart.lib.js"}');
  // Exports:
  return {
    src__core__util: util
  };
}));

//# sourceMappingURL=util.dart.lib.js.map
