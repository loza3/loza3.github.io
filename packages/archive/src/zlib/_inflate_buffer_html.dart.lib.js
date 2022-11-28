define(['dart_sdk', 'packages/archive/src/zlib/inflate.dart'], (function load__packages__archive__src__zlib___inflate_buffer_html_dart(dart_sdk, packages__archive__src__zlib__inflate$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const inflate = packages__archive__src__zlib__inflate$46dart.src__zlib__inflate;
  var _inflate_buffer_html = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  _inflate_buffer_html.inflateBuffer_ = function inflateBuffer_(data) {
    return new inflate.Inflate.new(data).getBytes();
  };
  dart.trackLibraries("packages/archive/src/zlib/_inflate_buffer_html.dart", {
    "package:archive/src/zlib/_inflate_buffer_html.dart": _inflate_buffer_html
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["_inflate_buffer_html.dart"],"names":[],"mappings":";;;;;;;;;;;;gEAEoC;AAClC,UAAO,AAAc,yBAAN,IAAI;EACrB","file":"../../../../../../../../../../../../packages/archive/src/zlib/_inflate_buffer_html.dart.lib.js"}');
  // Exports:
  return {
    src__zlib___inflate_buffer_html: _inflate_buffer_html
  };
}));

//# sourceMappingURL=_inflate_buffer_html.dart.lib.js.map
