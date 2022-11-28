define(['dart_sdk', 'packages/url_launcher/src/url_launcher_uri.dart'], (function load__packages__my_ticket_care__src__shared__shared_utilities__launch_google_maps_dart(dart_sdk, packages__url_launcher__src__url_launcher_uri$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const url_launcher_uri = packages__url_launcher__src__url_launcher_uri$46dart.src__url_launcher_uri;
  var launch_google_maps = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  launch_google_maps.launchGoogleMaps = function launchGoogleMaps(office) {
    return async.async(core.bool, function* launchGoogleMaps() {
      let latitude = office.geoRefLatitude;
      let longitude = office.geoRefLongitude;
      let googleUrl = "https://www.google.com/maps/search/?api=1&query=" + dart.str(latitude) + "," + dart.str(longitude);
      if (yield url_launcher_uri.canLaunchUrl(core.Uri.parse(googleUrl))) {
        yield url_launcher_uri.launchUrl(core.Uri.parse(googleUrl));
        return true;
      }
      return false;
    });
  };
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_utilities/launch_google_maps.dart", {
    "package:my_ticket_care/src/shared/shared_utilities/launch_google_maps.dart": launch_google_maps
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["launch_google_maps.dart"],"names":[],"mappings":";;;;;;;;;;;;;kEAIqC;AAAR;AACpB,qBAAW,AAAO,MAAD;AACjB,sBAAY,AAAO,MAAD;AAClB,sBACH,AAAsE,8DAApB,QAAQ,mBAAE,SAAS;AAEzE,UAAI,MAAM,8BAAiB,eAAM,SAAS;AACH,QAArC,MAAM,2BAAc,eAAM,SAAS;AACnC,cAAO;;AAGT,YAAO;IACT","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_utilities/launch_google_maps.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_utilities__launch_google_maps: launch_google_maps
  };
}));

//# sourceMappingURL=launch_google_maps.dart.lib.js.map
