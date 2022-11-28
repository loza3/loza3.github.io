define(['dart_sdk', 'packages/latlong2/latlong.dart'], (function load__packages__flutter_map__src__core__center_zoom_dart(dart_sdk, packages__latlong2__latlong$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  var center_zoom = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_map/src/core/center_zoom.dart"];
  var center$ = dart.privateName(center_zoom, "CenterZoom.center");
  var zoom$ = dart.privateName(center_zoom, "CenterZoom.zoom");
  center_zoom.CenterZoom = class CenterZoom extends core.Object {
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get zoom() {
      return this[zoom$];
    }
    set zoom(value) {
      super.zoom = value;
    }
    static ['_#new#tearOff'](opts) {
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new center_zoom.CenterZoom.new({center: center, zoom: zoom});
    }
  };
  (center_zoom.CenterZoom.new = function(opts) {
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    this[center$] = center;
    this[zoom$] = zoom;
    ;
  }).prototype = center_zoom.CenterZoom.prototype;
  dart.addTypeTests(center_zoom.CenterZoom);
  dart.addTypeCaches(center_zoom.CenterZoom);
  dart.setLibraryUri(center_zoom.CenterZoom, I[0]);
  dart.setFieldSignature(center_zoom.CenterZoom, () => ({
    __proto__: dart.getFields(center_zoom.CenterZoom.__proto__),
    center: dart.finalFieldType(latlong.LatLng),
    zoom: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter_map/src/core/center_zoom.dart", {
    "package:flutter_map/src/core/center_zoom.dart": center_zoom
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["center_zoom.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAKe;;;;;;IAGA;;;;;;;;;;;;;QACa;QAAsB;IAAtB;IAAsB;;EAAM","file":"../../../../../../../../../../../../packages/flutter_map/src/core/center_zoom.dart.lib.js"}');
  // Exports:
  return {
    src__core__center_zoom: center_zoom
  };
}));

//# sourceMappingURL=center_zoom.dart.lib.js.map
