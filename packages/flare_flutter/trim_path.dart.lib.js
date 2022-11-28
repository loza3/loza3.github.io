define(['dart_sdk'], (function load__packages__flare_flutter__trim_path_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var trim_path = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  trim_path.trimPath = function trimPath(path, startT, stopT, complement, isSequential) {
    if (isSequential) {
      return trim_path._trimPathSequential(path, startT, stopT, complement);
    } else {
      return trim_path._trimPathSync(path, startT, stopT, complement);
    }
  };
  trim_path._appendPathSegmentSequential = function _appendPathSegmentSequential(metricsIterator, to, offset, start, stop) {
    let nextOffset = offset;
    do {
      let metric = metricsIterator.current;
      nextOffset = offset + metric.length;
      if (start < nextOffset) {
        let extracted = metric.extractPath(start - offset, stop - offset);
        to.addPath(extracted, ui.Offset.zero);
        if (stop < nextOffset) {
          break;
        }
      }
      offset = nextOffset;
    } while (metricsIterator.moveNext());
    return offset;
  };
  trim_path._appendPathSegmentSync = function _appendPathSegmentSync(metric, to, offset, start, stop) {
    let nextOffset = offset + metric.length;
    if (start < nextOffset) {
      let extracted = metric.extractPath(start - offset, stop - offset);
      to.addPath(extracted, ui.Offset.zero);
    }
  };
  trim_path._trimPathSequential = function _trimPathSequential(path, startT, stopT, complement) {
    let result = ui.Path.new();
    let metrics = path.computeMetrics();
    let totalLength = 0.0;
    for (let metric of metrics) {
      totalLength = totalLength + metric.length;
    }
    metrics = path.computeMetrics();
    let trimStart = totalLength * startT;
    let trimStop = totalLength * stopT;
    let offset = 0.0;
    let metricsIterator = metrics.iterator;
    metricsIterator.moveNext();
    if (complement) {
      if (trimStart > 0.0) {
        offset = trim_path._appendPathSegmentSequential(metricsIterator, result, offset, 0.0, trimStart);
      }
      if (trimStop < totalLength) {
        offset = trim_path._appendPathSegmentSequential(metricsIterator, result, offset, trimStop, totalLength);
      }
    } else {
      if (trimStart < trimStop) {
        offset = trim_path._appendPathSegmentSequential(metricsIterator, result, offset, trimStart, trimStop);
      }
    }
    return result;
  };
  trim_path._trimPathSync = function _trimPathSync(path, startT, stopT, complement) {
    let result = ui.Path.new();
    let metrics = path.computeMetrics();
    for (let metric of metrics) {
      let length = metric.length;
      let trimStart = length * startT;
      let trimStop = length * stopT;
      if (complement) {
        if (trimStart > 0.0) {
          trim_path._appendPathSegmentSync(metric, result, 0.0, 0.0, trimStart);
        }
        if (trimStop < length) {
          trim_path._appendPathSegmentSync(metric, result, 0.0, trimStop, length);
        }
      } else {
        if (trimStart < trimStop) {
          trim_path._appendPathSegmentSync(metric, result, 0.0, trimStart, trimStop);
        }
      }
    }
    return result;
  };
  dart.trackLibraries("packages/flare_flutter/trim_path.dart", {
    "package:flare_flutter/trim_path.dart": trim_path
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["trim_path.dart"],"names":[],"mappings":";;;;;;;;;;;;yCAEmB,MAAa,QAAe,OAAY,YAClD;AACP,QAAI,YAAY;AACd,YAAO,+BAAoB,IAAI,EAAE,MAAM,EAAE,KAAK,EAAE,UAAU;;AAE1D,YAAO,yBAAc,IAAI,EAAE,MAAM,EAAE,KAAK,EAAE,UAAU;;EAExD;iFAEyD,iBAChD,IAAW,QAAe,OAAc;AACxC,qBAAa,MAAM;AAC1B;AACa,mBAAS,AAAgB,eAAD;AACA,MAAnC,aAAa,AAAO,MAAD,GAAG,AAAO,MAAD;AAC5B,UAAI,AAAM,KAAD,GAAG,UAAU;AACf,wBAAY,AAAO,MAAD,aAAa,AAAM,KAAD,GAAG,MAAM,EAAE,AAAK,IAAD,GAAG,MAAM;AAE/B,QAAlC,AAAG,EAAD,SAAS,SAAS,EAAS;AAE7B,YAAI,AAAK,IAAD,GAAG,UAAU;AACnB;;;AAIe,MAAnB,SAAS,UAAU;aACZ,AAAgB,eAAD;AACxB,UAAO,OAAM;EACf;qEAGe,QAAa,IAAW,QAAe,OAAc;AAC3D,qBAAa,AAAO,MAAD,GAAG,AAAO,MAAD;AACnC,QAAI,AAAM,KAAD,GAAG,UAAU;AACf,sBAAY,AAAO,MAAD,aAAa,AAAM,KAAD,GAAG,MAAM,EAAE,AAAK,IAAD,GAAG,MAAM;AAC/B,MAAlC,AAAG,EAAD,SAAS,SAAS,EAAS;;EAEjC;+DAGS,MAAa,QAAe,OAAY;AACpC,iBAAS;AAGR,kBAAU,AAAK,IAAD;AACnB,sBAAc;AACrB,aAAsB,SAAU,QAAO;AACT,MAA5B,cAAA,AAAY,WAAD,GAAI,AAAO,MAAD;;AAIQ,IAA/B,UAAU,AAAK,IAAD;AACP,oBAAY,AAAY,WAAD,GAAG,MAAM;AAChC,mBAAW,AAAY,WAAD,GAAG,KAAK;AAC9B,iBAAS;AAEK,0BAAkB,AAAQ,OAAD;AACpB,IAA1B,AAAgB,eAAD;AACf,QAAI,UAAU;AACZ,UAAI,AAAU,SAAD,GAAG;AAEsC,QADpD,SAAS,uCACL,eAAe,EAAE,MAAM,EAAE,MAAM,EAAE,KAAK,SAAS;;AAErD,UAAI,AAAS,QAAD,GAAG,WAAW;AAEmC,QAD3D,SAAS,uCACL,eAAe,EAAE,MAAM,EAAE,MAAM,EAAE,QAAQ,EAAE,WAAW;;;AAG5D,UAAI,AAAU,SAAD,GAAG,QAAQ;AAEmC,QADzD,SAAS,uCACL,eAAe,EAAE,MAAM,EAAE,MAAM,EAAE,SAAS,EAAE,QAAQ;;;AAI5D,UAAO,OAAM;EACf;mDAEwB,MAAa,QAAe,OAAY;AACnD,iBAAS;AAEF,kBAAU,AAAK,IAAD;AAChC,aAAsB,SAAU,QAAO;AAC9B,mBAAS,AAAO,MAAD;AACf,sBAAY,AAAO,MAAD,GAAG,MAAM;AAC3B,qBAAW,AAAO,MAAD,GAAG,KAAK;AAEhC,UAAI,UAAU;AACZ,YAAI,AAAU,SAAD,GAAG;AAC6C,UAA3D,iCAAuB,MAAM,EAAE,MAAM,EAAE,KAAK,KAAK,SAAS;;AAE5D,YAAI,AAAS,QAAD,GAAG,MAAM;AAC0C,UAA7D,iCAAuB,MAAM,EAAE,MAAM,EAAE,KAAK,QAAQ,EAAE,MAAM;;;AAG9D,YAAI,AAAU,SAAD,GAAG,QAAQ;AAC0C,UAAhE,iCAAuB,MAAM,EAAE,MAAM,EAAE,KAAK,SAAS,EAAE,QAAQ;;;;AAIrE,UAAO,OAAM;EACf","file":"../../../../../../../../../../packages/flare_flutter/trim_path.dart.lib.js"}');
  // Exports:
  return {
    trim_path: trim_path
  };
}));

//# sourceMappingURL=trim_path.dart.lib.js.map
