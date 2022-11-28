define(['dart_sdk'], (function load__packages__mgrs_dart__src__classes__lonlat_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var lonlat = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:mgrs_dart/src/classes/lonlat.dart"];
  var lon$ = dart.privateName(lonlat, "LonLat.lon");
  var lat$ = dart.privateName(lonlat, "LonLat.lat");
  lonlat.LonLat = class LonLat extends core.Object {
    get lon() {
      return this[lon$];
    }
    set lon(value) {
      this[lon$] = value;
    }
    get lat() {
      return this[lat$];
    }
    set lat(value) {
      this[lat$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let lon = opts && 'lon' in opts ? opts.lon : null;
      let lat = opts && 'lat' in opts ? opts.lat : null;
      return new lonlat.LonLat.new({lon: lon, lat: lat});
    }
  };
  (lonlat.LonLat.new = function(opts) {
    let lon = opts && 'lon' in opts ? opts.lon : null;
    let lat = opts && 'lat' in opts ? opts.lat : null;
    this[lon$] = lon;
    this[lat$] = lat;
    ;
  }).prototype = lonlat.LonLat.prototype;
  dart.addTypeTests(lonlat.LonLat);
  dart.addTypeCaches(lonlat.LonLat);
  dart.setLibraryUri(lonlat.LonLat, I[0]);
  dart.setFieldSignature(lonlat.LonLat, () => ({
    __proto__: dart.getFields(lonlat.LonLat.__proto__),
    lon: dart.fieldType(core.double),
    lat: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/mgrs_dart/src/classes/lonlat.dart", {
    "package:mgrs_dart/src/classes/lonlat.dart": lonlat
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lonlat.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IACS;;;;;;IACA;;;;;;;;;;;;;QAGW;QACA;IACP,aAAE,GAAG;IACN,aAAE,GAAG","file":"../../../../../../../../../../../../packages/mgrs_dart/src/classes/lonlat.dart.lib.js"}');
  // Exports:
  return {
    src__classes__lonlat: lonlat
  };
}));

//# sourceMappingURL=lonlat.dart.lib.js.map
