define(['dart_sdk', 'packages/latlong2/latlong.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter_map__src__gestures__latlng_tween_dart(dart_sdk, packages__latlong2__latlong$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  var latlng_tween = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_map/src/gestures/latlng_tween.dart"];
  latlng_tween.LatLngTween = class LatLngTween extends tween.Tween$(latlong.LatLng) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new latlng_tween.LatLngTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return new latlong.LatLng.new(dart.nullCheck(this.begin).latitude + (dart.nullCheck(this.end).latitude - dart.nullCheck(this.begin).latitude) * t, dart.nullCheck(this.begin).longitude + (dart.nullCheck(this.end).longitude - dart.nullCheck(this.begin).longitude) * t);
    }
  };
  (latlng_tween.LatLngTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    latlng_tween.LatLngTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = latlng_tween.LatLngTween.prototype;
  dart.addTypeTests(latlng_tween.LatLngTween);
  dart.addTypeCaches(latlng_tween.LatLngTween);
  dart.setLibraryUri(latlng_tween.LatLngTween, I[0]);
  dart.trackLibraries("packages/flutter_map/src/gestures/latlng_tween.dart", {
    "package:flutter_map/src/gestures/latlng_tween.dart": latlng_tween
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["latlng_tween.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;SAQqB;AAAM,oCACd,AAAE,AAAS,eAAhB,uBAAoD,CAA9B,AAAE,AAAS,eAAd,qBAAqB,AAAE,eAAP,wBAAmB,CAAC,EAClD,AAAE,AAAU,eAAjB,wBAAuD,CAAhC,AAAE,AAAU,eAAf,sBAAsB,AAAE,eAAP,yBAAoB,CAAC;IAC3D;;;QAPwB;QAAuB;AAC9C,8DAAa,KAAK,OAAO,GAAG;;EAAC","file":"../../../../../../../../../../../../packages/flutter_map/src/gestures/latlng_tween.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__latlng_tween: latlng_tween
  };
}));

//# sourceMappingURL=latlng_tween.dart.lib.js.map
