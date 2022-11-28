define(['dart_sdk', 'packages/shared_preferences/shared_preferences.dart', 'packages/http/src/multipart_request.dart'], (function load__packages__my_ticket_care__services__cache_manager_dart(dart_sdk, packages__shared_preferences__shared_preferences$46dart, packages__http__src__multipart_request$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_preferences = packages__shared_preferences__shared_preferences$46dart.shared_preferences;
  const http = packages__http__src__multipart_request$46dart.http;
  var cache_manager = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 54000000000.0
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:my_ticket_care/services/cache_manager.dart"];
  var _cacheValidDuration = dart.privateName(cache_manager, "_cacheValidDuration");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _cacheTimeLimitExceeded = dart.privateName(cache_manager, "_cacheTimeLimitExceeded");
  var _storeTimeStored = dart.privateName(cache_manager, "_storeTimeStored");
  cache_manager.CacheManager = class CacheManager extends core.Object {
    static new() {
      return cache_manager.CacheManager._singleton;
    }
    static ['_#new#tearOff']() {
      return cache_manager.CacheManager.new();
    }
    static ['_#_internal#tearOff']() {
      return new cache_manager.CacheManager._internal();
    }
    getRequest(opts) {
      let url = opts && 'url' in opts ? opts.url : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(core.String, (function* getRequest() {
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        let responseBody = prefs.getString(url);
        if (responseBody == null || this[_cacheTimeLimitExceeded](prefs, url)) {
          let response = null;
          try {
            response = (yield http.get(core.Uri.parse(url), {headers: headers}));
          } catch (e$) {
            let e = dart.getThrown(e$);
            if (core.Object.is(e)) {
              dart.throw("Error during GET Request of: " + url);
            } else
              throw e$;
          }
          if (response.statusCode !== 200) {
            dart.throw("The request failed, status: " + dart.str(response.statusCode));
          }
          responseBody = response.body;
          prefs.setString(url, responseBody);
          this[_storeTimeStored](prefs, url);
        }
        return responseBody;
      }).bind(this));
    }
    [_storeTimeStored](prefs, url) {
      prefs.setInt(url + "+++++time", new core.DateTime.now().millisecondsSinceEpoch);
    }
    [_cacheTimeLimitExceeded](prefs, url) {
      let savedTime = prefs.getInt(url + "+++++time");
      if (savedTime == null) {
        return true;
      }
      let currentTime = new core.DateTime.now().millisecondsSinceEpoch;
      let timeStoredInDevice = currentTime - dart.notNull(savedTime);
      if (timeStoredInDevice >= this[_cacheValidDuration].inMilliseconds) {
        return true;
      }
      return false;
    }
  };
  (cache_manager.CacheManager._internal = function() {
    this[_cacheValidDuration] = C[0] || CT.C0;
    ;
  }).prototype = cache_manager.CacheManager.prototype;
  dart.addTypeTests(cache_manager.CacheManager);
  dart.addTypeCaches(cache_manager.CacheManager);
  dart.setMethodSignature(cache_manager.CacheManager, () => ({
    __proto__: dart.getMethods(cache_manager.CacheManager.__proto__),
    getRequest: dart.fnType(async.Future$(core.String), [], {headers: dart.nullable(core.Map$(core.String, core.String))}, {url: core.String}),
    [_storeTimeStored]: dart.fnType(dart.void, [shared_preferences.SharedPreferences, core.String]),
    [_cacheTimeLimitExceeded]: dart.fnType(core.bool, [shared_preferences.SharedPreferences, core.String])
  }));
  dart.setStaticMethodSignature(cache_manager.CacheManager, () => ['new']);
  dart.setLibraryUri(cache_manager.CacheManager, I[0]);
  dart.setFieldSignature(cache_manager.CacheManager, () => ({
    __proto__: dart.getFields(cache_manager.CacheManager.__proto__),
    [_cacheValidDuration]: dart.finalFieldType(core.Duration)
  }));
  dart.setStaticFieldSignature(cache_manager.CacheManager, () => ['_singleton']);
  dart.defineLazy(cache_manager.CacheManager, {
    /*cache_manager.CacheManager._singleton*/get _singleton() {
      return new cache_manager.CacheManager._internal();
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/services/cache_manager.dart", {
    "package:my_ticket_care/services/cache_manager.dart": cache_manager
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cache_manager.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQI,YAAO;IACT;;;;;;;;UAQqB;UAA0B;AADtB;AAEL,qBAAQ,MAAwB;AAE1C,2BAAe,AAAM,KAAD,WAAW,GAAG;AAE1C,YAAI,AAAa,YAAD,YAAY,8BAAwB,KAAK,EAAE,GAAG;AACnD;AACT;AACwD,YAAtD,YAAW,MAAM,SAAQ,eAAM,GAAG,aAAY,OAAO;;gBAC9C;AAAP;AAC2C,cAA3C,WAAO,AAAmC,kCAAJ,GAAG;;;;AAG3C,cAAI,AAAS,QAAD,gBAAe;AACmC,YAA5D,WAAO,AAAoD,0CAArB,AAAS,QAAD;;AAGpB,UAA5B,eAAe,AAAS,QAAD;AAEW,UAAlC,AAAM,KAAD,WAAW,GAAG,EAAE,YAAY;AACL,UAA5B,uBAAiB,KAAK,EAAE,GAAG;;AAG7B,cAAO,aAAY;MACrB;;uBAEwC,OAAc;AACgB,MAApE,AAAM,KAAD,QAAU,AAAa,GAAV,gBAAqB,AAAM;IAC/C;8BAE+C,OAAc;AACtD,sBAAY,AAAM,KAAD,QAAU,AAAa,GAAV;AACnC,UAAI,AAAU,SAAD;AACX,cAAO;;AAEL,wBAAuB,AAAM;AAE7B,+BAAqB,AAAY,WAAD,gBAAG,SAAS;AAChD,UAAI,AAAmB,kBAAD,IAAI,AAAoB;AAC5C,cAAO;;AAET,YAAO;IACT;;;IA9Ce;;EAFS;;;;;;;;;;;;;;;;;MANE,qCAAU;YAAgB","file":"../../../../../../../../../packages/my_ticket_care/services/cache_manager.dart.lib.js"}');
  // Exports:
  return {
    services__cache_manager: cache_manager
  };
}));

//# sourceMappingURL=cache_manager.dart.lib.js.map
