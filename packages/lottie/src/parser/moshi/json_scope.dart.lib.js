define(['dart_sdk'], (function load__packages__lottie__src__parser__moshi__json_scope_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var json_scope = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/parser/moshi/json_scope.dart"];
  json_scope.JsonScope = class JsonScope extends core.Object {
    static ['_#_#tearOff']() {
      return new json_scope.JsonScope.__();
    }
    static getPath(stackSize, stack, pathNames, pathIndices) {
      let t0, t0$;
      let result = (t0 = new core.StringBuffer.new(), (() => {
        t0.write("$");
        return t0;
      })());
      for (let i = 0; i < stackSize; i = i + 1) {
        switch (stack[$_get](i)) {
          case 1:
          case 2:
            {
              t0$ = result;
              (() => {
                t0$.write("[");
                t0$.write(pathIndices[$_get](i));
                t0$.write("]");
                return t0$;
              })();
              break;
            }
          case 3:
          case 4:
          case 5:
            {
              result.write(".");
              if (pathNames[$_get](i) != null) {
                result.write(pathNames[$_get](i));
              }
              break;
            }
          case 7:
          case 6:
          case 8:
            {
              break;
            }
        }
      }
      return result.toString();
    }
  };
  (json_scope.JsonScope.__ = function() {
    ;
  }).prototype = json_scope.JsonScope.prototype;
  dart.addTypeTests(json_scope.JsonScope);
  dart.addTypeCaches(json_scope.JsonScope);
  dart.setStaticMethodSignature(json_scope.JsonScope, () => ['getPath']);
  dart.setLibraryUri(json_scope.JsonScope, I[0]);
  dart.setStaticFieldSignature(json_scope.JsonScope, () => ['emptyArray', 'nonEmptyArray', 'emptyObject', 'danglingName', 'nonEmptyObject', 'emptyDocument', 'nonEmptyDocument', 'closed']);
  dart.defineLazy(json_scope.JsonScope, {
    /*json_scope.JsonScope.emptyArray*/get emptyArray() {
      return 1;
    },
    /*json_scope.JsonScope.nonEmptyArray*/get nonEmptyArray() {
      return 2;
    },
    /*json_scope.JsonScope.emptyObject*/get emptyObject() {
      return 3;
    },
    /*json_scope.JsonScope.danglingName*/get danglingName() {
      return 4;
    },
    /*json_scope.JsonScope.nonEmptyObject*/get nonEmptyObject() {
      return 5;
    },
    /*json_scope.JsonScope.emptyDocument*/get emptyDocument() {
      return 6;
    },
    /*json_scope.JsonScope.nonEmptyDocument*/get nonEmptyDocument() {
      return 7;
    },
    /*json_scope.JsonScope.closed*/get closed() {
      return 8;
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/parser/moshi/json_scope.dart", {
    "package:lottie/src/parser/moshi/json_scope.dart": json_scope
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["json_scope.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;mBAkC4B,WAAqB,OAAqB,WACtD;;AACR,sDAAS;AAAgB,iBAAM;;;AACnC,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,SAAS,EAAE,IAAA,AAAC,CAAA;AAC9B,gBAAQ,AAAK,KAAA,QAAC,CAAC;;;;AAMG,oBAHd,MAAM;cAAN;AACI,0BAAM;AACN,0BAAM,AAAW,WAAA,QAAC,CAAC;AACnB,0BAAM;;;AACV;;;;;;AAKiB,cAAjB,AAAO,MAAD,OAAO;AACb,kBAAI,AAAS,SAAA,QAAC,CAAC;AACa,gBAA1B,AAAO,MAAD,OAAO,AAAS,SAAA,QAAC,CAAC;;AAE1B;;;;;;AAKA;;;;AAGN,YAAO,AAAO,OAAD;IACf;;;;EA7Da;;;;;;;MAGI,+BAAU;;;MAGV,kCAAa;;;MAGb,gCAAW;;;MAGX,iCAAY;;;MAGZ,mCAAc;;;MAGd,kCAAa;;;MAGb,qCAAgB;;;MAGhB,2BAAM","file":"../../../../../../../../../../../../../packages/lottie/src/parser/moshi/json_scope.dart.lib.js"}');
  // Exports:
  return {
    src__parser__moshi__json_scope: json_scope
  };
}));

//# sourceMappingURL=json_scope.dart.lib.js.map
