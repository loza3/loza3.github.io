define(['dart_sdk', 'packages/flutter_web_plugins/src/plugin_registry.dart', 'packages/flutter_facebook_auth_web/src/facebook_auth_plugin.dart', 'packages/flutter_secure_storage_web/flutter_secure_storage_web.dart', 'packages/google_sign_in_web/google_sign_in_web.dart', 'packages/shared_preferences_web/shared_preferences_web.dart', 'packages/url_launcher_web/url_launcher_web.dart', 'packages/video_player_web/video_player_web.dart', 'packages/wakelock_web/wakelock_web.dart'], (function load__web_plugin_registrant_dart(dart_sdk, packages__flutter_web_plugins__src__plugin_registry$46dart, packages__flutter_facebook_auth_web__src__facebook_auth_plugin$46dart, packages__flutter_secure_storage_web__flutter_secure_storage_web$46dart, packages__google_sign_in_web__google_sign_in_web$46dart, packages__shared_preferences_web__shared_preferences_web$46dart, packages__url_launcher_web__url_launcher_web$46dart, packages__video_player_web__video_player_web$46dart, packages__wakelock_web__wakelock_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  const facebook_auth_plugin = packages__flutter_facebook_auth_web__src__facebook_auth_plugin$46dart.src__facebook_auth_plugin;
  const flutter_secure_storage_web = packages__flutter_secure_storage_web__flutter_secure_storage_web$46dart.flutter_secure_storage_web;
  const google_sign_in_web = packages__google_sign_in_web__google_sign_in_web$46dart.google_sign_in_web;
  const shared_preferences_web = packages__shared_preferences_web__shared_preferences_web$46dart.shared_preferences_web;
  const url_launcher_web = packages__url_launcher_web__url_launcher_web$46dart.url_launcher_web;
  const video_player_web = packages__video_player_web__video_player_web$46dart.video_player_web;
  const wakelock_web = packages__wakelock_web__wakelock_web$46dart.wakelock_web;
  var web_plugin_registrant = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  web_plugin_registrant.registerPlugins = function registerPlugins(pluginRegistrar = null) {
    let t0;
    let registrar = (t0 = pluginRegistrar, t0 == null ? plugin_registry.webPluginRegistrar : t0);
    facebook_auth_plugin.FlutterFacebookAuthPlugin.registerWith(registrar);
    flutter_secure_storage_web.FlutterSecureStorageWeb.registerWith(registrar);
    google_sign_in_web.GoogleSignInPlugin.registerWith(registrar);
    shared_preferences_web.SharedPreferencesPlugin.registerWith(registrar);
    url_launcher_web.UrlLauncherPlugin.registerWith(registrar);
    video_player_web.VideoPlayerPlugin.registerWith(registrar);
    wakelock_web.WakelockWeb.registerWith(registrar);
    registrar.registerMessageHandler();
  };
  dart.trackLibraries("web_plugin_registrant.dart", {
    "org-dartlang-app:/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;mEAiBuC;;AACrB,qBAA4B,KAAhB,eAAe,EAAf,aAAmB;AACE,IAAvB,4DAAa,SAAS;AACD,IAAvB,gEAAa,SAAS;AACJ,IAAvB,mDAAa,SAAS;AACM,IAAvB,4DAAa,SAAS;AACL,IAAvB,gDAAa,SAAS;AACC,IAAvB,gDAAa,SAAS;AACL,IAAvB,sCAAa,SAAS;AACA,IAAlC,AAAU,SAAD;EACX","file":"web_plugin_registrant.dart.lib.js"}');
  // Exports:
  return {
    web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=web_plugin_registrant.dart.lib.js.map
