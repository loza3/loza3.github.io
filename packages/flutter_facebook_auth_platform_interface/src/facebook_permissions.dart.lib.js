define(['dart_sdk'], (function load__packages__flutter_facebook_auth_platform_interface__src__facebook_permissions_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var facebook_permissions = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_facebook_auth_platform_interface/src/facebook_permissions.dart"];
  var granted$ = dart.privateName(facebook_permissions, "FacebookPermissions.granted");
  var declined$ = dart.privateName(facebook_permissions, "FacebookPermissions.declined");
  facebook_permissions.FacebookPermissions = class FacebookPermissions extends core.Object {
    get granted() {
      return this[granted$];
    }
    set granted(value) {
      super.granted = value;
    }
    get declined() {
      return this[declined$];
    }
    set declined(value) {
      super.declined = value;
    }
    static ['_#new#tearOff'](opts) {
      let granted = opts && 'granted' in opts ? opts.granted : null;
      let declined = opts && 'declined' in opts ? opts.declined : null;
      return new facebook_permissions.FacebookPermissions.new({granted: granted, declined: declined});
    }
  };
  (facebook_permissions.FacebookPermissions.new = function(opts) {
    let granted = opts && 'granted' in opts ? opts.granted : null;
    let declined = opts && 'declined' in opts ? opts.declined : null;
    this[granted$] = granted;
    this[declined$] = declined;
    ;
  }).prototype = facebook_permissions.FacebookPermissions.prototype;
  dart.addTypeTests(facebook_permissions.FacebookPermissions);
  dart.addTypeCaches(facebook_permissions.FacebookPermissions);
  dart.setLibraryUri(facebook_permissions.FacebookPermissions, I[0]);
  dart.setFieldSignature(facebook_permissions.FacebookPermissions, () => ({
    __proto__: dart.getFields(facebook_permissions.FacebookPermissions.__proto__),
    granted: dart.finalFieldType(core.List$(core.String)),
    declined: dart.finalFieldType(core.List$(core.String))
  }));
  dart.trackLibraries("packages/flutter_facebook_auth_platform_interface/src/facebook_permissions.dart", {
    "package:flutter_facebook_auth_platform_interface/src/facebook_permissions.dart": facebook_permissions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["facebook_permissions.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAGqB;;;;;;IAGA;;;;;;;;;;;;;QAEgB;QAAuB;IAAvB;IAAuB;;EAAU","file":"../../../../../../../../../../../packages/flutter_facebook_auth_platform_interface/src/facebook_permissions.dart.lib.js"}');
  // Exports:
  return {
    src__facebook_permissions: facebook_permissions
  };
}));

//# sourceMappingURL=facebook_permissions.dart.lib.js.map
