define(['dart_sdk', 'packages/proj4dart/src/classes/constant_datum.dart'], (function load__packages__proj4dart__src__constants__datums_dart(dart_sdk, packages__proj4dart__src__classes__constant_datum$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const constant_datum = packages__proj4dart__src__classes__constant_datum$46dart.src__classes__constant_datum;
  var datums = Object.create(dart.library);
  var $toLowerCase = dartx.toLowerCase;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$ConstantDatum: () => (T.IdentityMapOfString$ConstantDatum = dart.constFn(_js_helper.IdentityMap$(core.String, constant_datum.ConstantDatum)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  datums.match = function match(name) {
    return datums.datums[$_get](name[$toLowerCase]());
  };
  dart.defineLazy(datums, {
    /*datums.datums*/get datums() {
      return new (T.IdentityMapOfString$ConstantDatum()).from(["wgs84", new constant_datum.ConstantDatum.new({towgs84: "0,0,0", ellipse: "WGS84", datumName: "WGS84"}), "ch1903", new constant_datum.ConstantDatum.new({towgs84: "674.374,15.056,405.346", ellipse: "bessel", datumName: "swiss"}), "ggrs87", new constant_datum.ConstantDatum.new({towgs84: "-199.87,74.79,246.62", ellipse: "GRS80", datumName: "Greek_Geodetic_Reference_System_1987"}), "nad83", new constant_datum.ConstantDatum.new({towgs84: "0,0,0", ellipse: "GRS80", datumName: "North_American_Datum_1983"}), "nad27", new constant_datum.ConstantDatum.withNadgrid({nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat", ellipse: "clrk66", datumName: "North_American_Datum_1927"}), "potsdam", new constant_datum.ConstantDatum.new({towgs84: "606.0,23.0,413.0", ellipse: "bessel", datumName: "Potsdam Rauenberg 1950 DHDN"}), "carthage", new constant_datum.ConstantDatum.new({towgs84: "-263.0,6.0,431.0", ellipse: "clark80", datumName: "Carthage 1934 Tunisia"}), "hermannskogel", new constant_datum.ConstantDatum.new({towgs84: "653.0,-212.0,449.0", ellipse: "bessel", datumName: "Hermannskogel"}), "osni52", new constant_datum.ConstantDatum.new({towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15", ellipse: "airy", datumName: "Irish National"}), "ire65", new constant_datum.ConstantDatum.new({towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15", ellipse: "mod_airy", datumName: "Ireland 1965"}), "rassadiran", new constant_datum.ConstantDatum.new({towgs84: "-133.63,-157.5,-158.62", ellipse: "intl", datumName: "Rassadiran"}), "nzgd49", new constant_datum.ConstantDatum.new({towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993", ellipse: "intl", datumName: "New Zealand Geodetic Datum 1949"}), "osgb36", new constant_datum.ConstantDatum.new({towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894", ellipse: "airy", datumName: "Airy 1830"}), "s_jtsk", new constant_datum.ConstantDatum.new({towgs84: "589,76,480", ellipse: "bessel", datumName: "S-JTSK (Ferro)"}), "beduaram", new constant_datum.ConstantDatum.new({towgs84: "-106,-87,188", ellipse: "clrk80", datumName: "Beduaram"}), "gunung_segara", new constant_datum.ConstantDatum.new({towgs84: "-403,684,41", ellipse: "bessel", datumName: "Gunung Segara Jakarta"}), "rnb72", new constant_datum.ConstantDatum.new({towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1", ellipse: "intl", datumName: "Reseau National Belge 1972"})]);
    }
  }, false);
  dart.trackLibraries("packages/proj4dart/src/constants/datums.dart", {
    "package:proj4dart/src/constants/datums.dart": datums
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["datums.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;gCAiE4B;AAC1B,UAAO,AAAM,sBAAC,AAAK,IAAD;EACpB;;MAjEM,aAAM;YAAG,mDACb,SACI,+CAAuB,kBAAkB,oBAAoB,WACjE,UAAU,+CACG,mCAAmC,qBAAqB,WACrE,UAAU,+CACG,iCACA,oBACE,0CACf,SAAS,+CACI,kBACA,oBACE,+BACf,SAAuB,wDACT,qDACD,qBACE,+BACf,WAAW,+CACE,6BACA,qBACE,iCACf,YAAY,+CACC,6BACA,sBACE,2BACf,iBAAiB,+CACJ,+BACA,qBACE,mBACf,UAAU,+CACG,+DACA,mBACE,oBACf,SAAS,+CACI,+DACA,uBACE,kBACf,cAAc,+CACD,mCACA,mBACE,gBACf,UAAU,+CACG,uDACA,mBACE,qCACf,UAAU,+CACG,mEACA,mBACE,eACf,UAAU,+CACG,uBAAuB,qBAAqB,oBACzD,YAAY,+CACC,yBAAyB,qBAAqB,cAC3D,iBAAiB,+CACJ,wBACA,qBACE,2BACf,SAAS,+CACI,kEACA,mBACE","file":"../../../../../../../../../../../../packages/proj4dart/src/constants/datums.dart.lib.js"}');
  // Exports:
  return {
    src__constants__datums: datums
  };
}));

//# sourceMappingURL=datums.dart.lib.js.map
