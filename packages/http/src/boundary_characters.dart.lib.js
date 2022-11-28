define(['dart_sdk'], (function load__packages__http__src__boundary_characters_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var boundary_characters = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    }
  }, false);
  var C = [void 0];
  dart.defineLazy(boundary_characters, {
    /*boundary_characters.boundaryCharacters*/get boundaryCharacters() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/http/src/boundary_characters.dart", {
    "package:http/src/boundary_characters.dart": boundary_characters
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["boundary_characters.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAYgB,sCAAkB","file":"../../../../../../../../../../../packages/http/src/boundary_characters.dart.lib.js"}');
  // Exports:
  return {
    src__boundary_characters: boundary_characters
  };
}));

//# sourceMappingURL=boundary_characters.dart.lib.js.map
