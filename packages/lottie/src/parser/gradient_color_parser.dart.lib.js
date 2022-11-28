define(['dart_sdk', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart', 'packages/lottie/src/model/content/gradient_color.dart'], (function load__packages__lottie__src__parser__gradient_color_parser_dart(dart_sdk, packages__lottie__src__parser__moshi__json_utf8_reader$46dart, packages__lottie__src__model__content__gradient_color$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  const gradient_color = packages__lottie__src__model__content__gradient_color$46dart.src__model__content__gradient_color;
  var gradient_color_parser = Object.create(dart.library);
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $truncate = dartx.truncate;
  var $round = dartx.round;
  var $modulo = dartx['%'];
  var $clamp = dartx.clamp;
  var $isNaN = dartx.isNaN;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    ListOfColor: () => (T.ListOfColor = dart.constFn(core.List$(ui.Color)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:lottie/src/parser/gradient_color_parser.dart"];
  var _colorPoints$ = dart.privateName(gradient_color_parser, "_colorPoints");
  var Color_value = dart.privateName(ui, "Color.value");
  var _addOpacityStopsToGradientIfNeeded = dart.privateName(gradient_color_parser, "_addOpacityStopsToGradientIfNeeded");
  var _getOpacityAtPosition = dart.privateName(gradient_color_parser, "_getOpacityAtPosition");
  gradient_color_parser.GradientColorParser = class GradientColorParser extends core.Object {
    static ['_#new#tearOff'](_colorPoints) {
      return new gradient_color_parser.GradientColorParser.new(_colorPoints);
    }
    parse(reader, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : null;
      let array = T.JSArrayOfdouble().of([]);
      let isArray = reader.peek() === json_reader.Token.beginArray;
      if (isArray) {
        reader.beginArray();
      }
      while (reader.hasNext()) {
        array[$add](reader.nextDouble());
      }
      if (array[$length] === 4 && array[$_get](0) === 1) {
        array[$_set](0, 0.0);
        array[$add](1.0);
        array[$add](array[$_get](1));
        array[$add](array[$_get](2));
        array[$add](array[$_get](3));
        this[_colorPoints$] = 2;
      }
      if (isArray) {
        reader.endArray();
      }
      if (this[_colorPoints$] === -1) {
        this[_colorPoints$] = (array[$length] / 4)[$truncate]();
      }
      let positions = T.ListOfdouble().filled(this[_colorPoints$], 0.0);
      let colors = T.ListOfColor().filled(this[_colorPoints$], C[0] || CT.C0);
      let r = 0;
      let g = 0;
      for (let i = 0; i < this[_colorPoints$] * 4; i = i + 1) {
        let colorIndex = (i / 4)[$truncate]();
        let value = array[$_get](i);
        switch (i[$modulo](4)) {
          case 0:
            {
              positions[$_set](colorIndex, value);
              break;
            }
          case 1:
            {
              r = (value * 255)[$round]();
              break;
            }
          case 2:
            {
              g = (value * 255)[$round]();
              break;
            }
          case 3:
            {
              let b = (value * 255)[$round]();
              colors[$_set](colorIndex, new ui.Color.fromARGB(255, r, g, b));
              break;
            }
        }
      }
      let gradientColor = new gradient_color.GradientColor.new(positions, colors);
      this[_addOpacityStopsToGradientIfNeeded](gradientColor, array);
      return gradientColor;
    }
    [_addOpacityStopsToGradientIfNeeded](gradientColor, array) {
      let startIndex = this[_colorPoints$] * 4;
      if (array[$length] <= startIndex) {
        return;
      }
      let opacityStops = ((array[$length] - startIndex) / 2)[$truncate]();
      let positions = T.ListOfdouble().filled(opacityStops, 0.0);
      let opacities = T.ListOfdouble().filled(opacityStops, 0.0);
      for (let i = startIndex, j = 0; i < array[$length]; i = i + 1) {
        if (i[$modulo](2) === 0) {
          positions[$_set](j, array[$_get](i));
        } else {
          opacities[$_set](j, array[$_get](i));
          j = j + 1;
        }
      }
      for (let i = 0; i < gradientColor.size; i = i + 1) {
        let color = gradientColor.colors[$_get](i);
        color = color.withAlpha(this[_getOpacityAtPosition](gradientColor.positions[$_get](i), positions, opacities));
        gradientColor.colors[$_set](i, color);
      }
    }
    [_getOpacityAtPosition](position, positions, opacities) {
      for (let i = 1; i < positions[$length]; i = i + 1) {
        let lastPosition = positions[$_get](i - 1);
        let thisPosition = positions[$_get](i);
        if (positions[$_get](i) >= position) {
          let progress = (position - lastPosition) / (thisPosition - lastPosition);
          progress = progress[$clamp](0.0, 1.0);
          if (progress[$isNaN]) {
            progress = 0.0;
          }
          return (255 * dart.nullCheck(ui.lerpDouble(opacities[$_get](i - 1), opacities[$_get](i), progress)))[$round]();
        }
      }
      return (255 * opacities[$_get](opacities[$length] - 1))[$round]();
    }
  };
  (gradient_color_parser.GradientColorParser.new = function(_colorPoints) {
    this[_colorPoints$] = _colorPoints;
    ;
  }).prototype = gradient_color_parser.GradientColorParser.prototype;
  dart.addTypeTests(gradient_color_parser.GradientColorParser);
  dart.addTypeCaches(gradient_color_parser.GradientColorParser);
  dart.setMethodSignature(gradient_color_parser.GradientColorParser, () => ({
    __proto__: dart.getMethods(gradient_color_parser.GradientColorParser.__proto__),
    parse: dart.fnType(gradient_color.GradientColor, [json_reader.JsonReader], {}, {scale: core.double}),
    [_addOpacityStopsToGradientIfNeeded]: dart.fnType(dart.void, [gradient_color.GradientColor, core.List$(core.double)]),
    [_getOpacityAtPosition]: dart.fnType(core.int, [core.double, core.List$(core.double), core.List$(core.double)])
  }));
  dart.setLibraryUri(gradient_color_parser.GradientColorParser, I[0]);
  dart.setFieldSignature(gradient_color_parser.GradientColorParser, () => ({
    __proto__: dart.getFields(gradient_color_parser.GradientColorParser.__proto__),
    [_colorPoints$]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/lottie/src/parser/gradient_color_parser.dart", {
    "package:lottie/src/parser/gradient_color_parser.dart": gradient_color_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gradient_color_parser.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/lottie/src/parser/gradient_color_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__gradient_color_parser: gradient_color_parser
  };
}));

//# sourceMappingURL=gradient_color_parser.dart.lib.js.map
