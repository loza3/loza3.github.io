define(['dart_sdk', 'packages/archive/src/zlib/_inflate_buffer_html.dart'], (function load__packages__archive__src__zlib__inflate_buffer_dart(dart_sdk, packages__archive__src__zlib___inflate_buffer_html$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _inflate_buffer_html = packages__archive__src__zlib___inflate_buffer_html$46dart.src__zlib___inflate_buffer_html;
  var inflate_buffer = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  inflate_buffer.inflateBuffer = function inflateBuffer(array) {
    return _inflate_buffer_html.inflateBuffer_(array);
  };
  dart.trackLibraries("packages/archive/src/zlib/inflate_buffer.dart", {
    "package:archive/src/zlib/inflate_buffer.dart": inflate_buffer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["inflate_buffer.dart"],"names":[],"mappings":";;;;;;;;;;;;wDAImC;AACjC,UAAO,qCAAe,KAAK;EAC7B","file":"../../../../../../../../../../../../packages/archive/src/zlib/inflate_buffer.dart.lib.js"}');
  // Exports:
  return {
    src__zlib__inflate_buffer: inflate_buffer
  };
}));

//# sourceMappingURL=inflate_buffer.dart.lib.js.map
