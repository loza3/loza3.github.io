define(['dart_sdk'], (function load__packages__lottie__src__providers__provider_web_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var provider_web = Object.create(dart.library);
  var $response = dartx.response;
  var $onLoadEnd = dartx.onLoadEnd;
  var $readyState = dartx.readyState;
  var $result = dartx.result;
  var $relativePath = dartx.relativePath;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  provider_web.loadHttp = function loadHttp(uri, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return async.async(typed_data.Uint8List, function* loadHttp() {
      let request = (yield html.HttpRequest.request(uri.toString(), {requestHeaders: headers, responseType: "blob"}));
      return provider_web._loadBlob(html.Blob.as(request[$response]));
    });
  };
  provider_web.loadFile = function loadFile(file) {
    return provider_web._loadBlob(html.File.as(file));
  };
  provider_web._loadBlob = function _loadBlob(file) {
    return async.async(typed_data.Uint8List, function* _loadBlob() {
      let reader = html.FileReader.new();
      reader.readAsArrayBuffer(file);
      yield reader[$onLoadEnd].first;
      if (reader[$readyState] !== 2) {
        dart.throw(core.Exception.new("Error while reading blob"));
      }
      return typed_data.Uint8List.as(dart.nullCheck(reader[$result]));
    });
  };
  provider_web.filePath = function filePath(file) {
    let t0;
    t0 = html.File.as(file)[$relativePath];
    return t0 == null ? "" : t0;
  };
  provider_web.loadImageForFile = function loadImageForFile(file, lottieImage) {
    dart.throw(new core.UnimplementedError.new());
  };
  dart.trackLibraries("packages/lottie/src/providers/provider_web.dart", {
    "package:lottie/src/providers/provider_web.dart": provider_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["provider_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;4CAO+B;QAA2B;AAAhC;AACpB,qBAAU,MAAkB,yBAAQ,AAAI,GAAD,8BACvB,OAAO,gBAAgB;AAE3C,YAAO,wBAA2B,aAAjB,AAAQ,OAAD;IAC1B;;4CAEkC;AAChC,UAAO,wBAAe,aAAL,IAAI;EACvB;8CAEiC;AAAN;AACrB,mBAAS;AACiB,MAA9B,AAAO,MAAD,mBAAmB,IAAI;AAED,MAA5B,MAAM,AAAO,AAAU,MAAX;AACZ,UAAI,AAAO,MAAD;AACmC,QAA3C,WAAM,mBAAU;;AAGlB,YAAsB,yBAAF,eAAb,AAAO,MAAD;IACf;;4CAEuB;;AACrB,SAAa,AAAS,aAAd,IAAI;UAAU,cAAgB;EACxC;4DAEsC,MAAuB;AACjC,IAA1B,WAAM;EACR","file":"../../../../../../../../../../../../packages/lottie/src/providers/provider_web.dart.lib.js"}');
  // Exports:
  return {
    src__providers__provider_web: provider_web
  };
}));

//# sourceMappingURL=provider_web.dart.lib.js.map
