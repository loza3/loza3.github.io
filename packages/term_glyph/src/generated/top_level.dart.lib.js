define(['dart_sdk', 'packages/term_glyph/src/generated/ascii_glyph_set.dart', 'packages/term_glyph/src/generated/unicode_glyph_set.dart'], (function load__packages__term_glyph__src__generated__top_level_dart(dart_sdk, packages__term_glyph__src__generated__ascii_glyph_set$46dart, packages__term_glyph__src__generated__unicode_glyph_set$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ascii_glyph_set = packages__term_glyph__src__generated__ascii_glyph_set$46dart.src__generated__ascii_glyph_set;
  const unicode_glyph_set = packages__term_glyph__src__generated__unicode_glyph_set$46dart.src__generated__unicode_glyph_set;
  var top_level = Object.create(dart.library);
  var term_glyph = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ascii_glyph_set.AsciiGlyphSet.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: unicode_glyph_set.UnicodeGlyphSet.prototype
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  dart.copyProperties(top_level, {
    get bullet() {
      return term_glyph.glyphs.bullet;
    },
    get leftArrow() {
      return term_glyph.glyphs.leftArrow;
    },
    get rightArrow() {
      return term_glyph.glyphs.rightArrow;
    },
    get upArrow() {
      return term_glyph.glyphs.upArrow;
    },
    get downArrow() {
      return term_glyph.glyphs.downArrow;
    },
    get longLeftArrow() {
      return term_glyph.glyphs.longLeftArrow;
    },
    get longRightArrow() {
      return term_glyph.glyphs.longRightArrow;
    },
    get horizontalLine() {
      return term_glyph.glyphs.horizontalLine;
    },
    get verticalLine() {
      return term_glyph.glyphs.verticalLine;
    },
    get topLeftCorner() {
      return term_glyph.glyphs.topLeftCorner;
    },
    get topRightCorner() {
      return term_glyph.glyphs.topRightCorner;
    },
    get bottomLeftCorner() {
      return term_glyph.glyphs.bottomLeftCorner;
    },
    get bottomRightCorner() {
      return term_glyph.glyphs.bottomRightCorner;
    },
    get cross() {
      return term_glyph.glyphs.cross;
    },
    get teeUp() {
      return term_glyph.glyphs.teeUp;
    },
    get teeDown() {
      return term_glyph.glyphs.teeDown;
    },
    get teeLeft() {
      return term_glyph.glyphs.teeLeft;
    },
    get teeRight() {
      return term_glyph.glyphs.teeRight;
    },
    get upEnd() {
      return term_glyph.glyphs.upEnd;
    },
    get downEnd() {
      return term_glyph.glyphs.downEnd;
    },
    get leftEnd() {
      return term_glyph.glyphs.leftEnd;
    },
    get rightEnd() {
      return term_glyph.glyphs.rightEnd;
    },
    get horizontalLineBold() {
      return term_glyph.glyphs.horizontalLineBold;
    },
    get verticalLineBold() {
      return term_glyph.glyphs.verticalLineBold;
    },
    get topLeftCornerBold() {
      return term_glyph.glyphs.topLeftCornerBold;
    },
    get topRightCornerBold() {
      return term_glyph.glyphs.topRightCornerBold;
    },
    get bottomLeftCornerBold() {
      return term_glyph.glyphs.bottomLeftCornerBold;
    },
    get bottomRightCornerBold() {
      return term_glyph.glyphs.bottomRightCornerBold;
    },
    get crossBold() {
      return term_glyph.glyphs.crossBold;
    },
    get teeUpBold() {
      return term_glyph.glyphs.teeUpBold;
    },
    get teeDownBold() {
      return term_glyph.glyphs.teeDownBold;
    },
    get teeLeftBold() {
      return term_glyph.glyphs.teeLeftBold;
    },
    get teeRightBold() {
      return term_glyph.glyphs.teeRightBold;
    },
    get upEndBold() {
      return term_glyph.glyphs.upEndBold;
    },
    get downEndBold() {
      return term_glyph.glyphs.downEndBold;
    },
    get leftEndBold() {
      return term_glyph.glyphs.leftEndBold;
    },
    get rightEndBold() {
      return term_glyph.glyphs.rightEndBold;
    },
    get horizontalLineDouble() {
      return term_glyph.glyphs.horizontalLineDouble;
    },
    get verticalLineDouble() {
      return term_glyph.glyphs.verticalLineDouble;
    },
    get topLeftCornerDouble() {
      return term_glyph.glyphs.topLeftCornerDouble;
    },
    get topRightCornerDouble() {
      return term_glyph.glyphs.topRightCornerDouble;
    },
    get bottomLeftCornerDouble() {
      return term_glyph.glyphs.bottomLeftCornerDouble;
    },
    get bottomRightCornerDouble() {
      return term_glyph.glyphs.bottomRightCornerDouble;
    },
    get crossDouble() {
      return term_glyph.glyphs.crossDouble;
    },
    get teeUpDouble() {
      return term_glyph.glyphs.teeUpDouble;
    },
    get teeDownDouble() {
      return term_glyph.glyphs.teeDownDouble;
    },
    get teeLeftDouble() {
      return term_glyph.glyphs.teeLeftDouble;
    },
    get teeRightDouble() {
      return term_glyph.glyphs.teeRightDouble;
    },
    get horizontalLineDoubleDash() {
      return term_glyph.glyphs.horizontalLineDoubleDash;
    },
    get horizontalLineDoubleDashBold() {
      return term_glyph.glyphs.horizontalLineDoubleDashBold;
    },
    get verticalLineDoubleDash() {
      return term_glyph.glyphs.verticalLineDoubleDash;
    },
    get verticalLineDoubleDashBold() {
      return term_glyph.glyphs.verticalLineDoubleDashBold;
    },
    get horizontalLineTripleDash() {
      return term_glyph.glyphs.horizontalLineTripleDash;
    },
    get horizontalLineTripleDashBold() {
      return term_glyph.glyphs.horizontalLineTripleDashBold;
    },
    get verticalLineTripleDash() {
      return term_glyph.glyphs.verticalLineTripleDash;
    },
    get verticalLineTripleDashBold() {
      return term_glyph.glyphs.verticalLineTripleDashBold;
    },
    get horizontalLineQuadrupleDash() {
      return term_glyph.glyphs.horizontalLineQuadrupleDash;
    },
    get horizontalLineQuadrupleDashBold() {
      return term_glyph.glyphs.horizontalLineQuadrupleDashBold;
    },
    get verticalLineQuadrupleDash() {
      return term_glyph.glyphs.verticalLineQuadrupleDash;
    },
    get verticalLineQuadrupleDashBold() {
      return term_glyph.glyphs.verticalLineQuadrupleDashBold;
    }
  });
  term_glyph.glyphOrAscii = function glyphOrAscii(glyph, alternative) {
    return term_glyph.glyphs.glyphOrAscii(glyph, alternative);
  };
  dart.copyProperties(term_glyph, {
    get glyphs() {
      return term_glyph._glyphs;
    },
    get ascii() {
      return term_glyph.glyphs[$_equals](term_glyph.asciiGlyphs);
    },
    set ascii(value) {
      term_glyph._glyphs = value ? term_glyph.asciiGlyphs : term_glyph.unicodeGlyphs;
    }
  });
  dart.defineLazy(term_glyph, {
    /*term_glyph.asciiGlyphs*/get asciiGlyphs() {
      return C[0] || CT.C0;
    },
    /*term_glyph.unicodeGlyphs*/get unicodeGlyphs() {
      return C[1] || CT.C1;
    },
    /*term_glyph._glyphs*/get _glyphs() {
      return term_glyph.unicodeGlyphs;
    },
    set _glyphs(_) {}
  }, false);
  dart.trackLibraries("packages/term_glyph/src/generated/top_level.dart", {
    "package:term_glyph/src/generated/top_level.dart": top_level,
    "package:term_glyph/term_glyph.dart": term_glyph
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["top_level.dart","../../term_glyph.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYqB,YAAM,AAAO;IAAM;;AAShB,YAAM,AAAO;IAAS;;AASrB,YAAM,AAAO;IAAU;;AAM1B,YAAM,AAAO;IAAO;;AAMlB,YAAM,AAAO;IAAS;;AAMlB,YAAM,AAAO;IAAa;;AAMzB,YAAM,AAAO;IAAc;;AAM3B,YAAM,AAAO;IAAc;;AAM7B,YAAM,AAAO;IAAY;;AAMxB,YAAM,AAAO;IAAa;;AAMzB,YAAM,AAAO;IAAc;;AAMzB,YAAM,AAAO;IAAgB;;AAM5B,YAAM,AAAO;IAAiB;;AAM1C,YAAM,AAAO;IAAK;;AAMlB,YAAM,AAAO;IAAK;;AAMhB,YAAM,AAAO;IAAO;;AAMpB,YAAM,AAAO;IAAO;;AAMnB,YAAM,AAAO;IAAQ;;AAMxB,YAAM,AAAO;IAAK;;AAMhB,YAAM,AAAO;IAAO;;AAMpB,YAAM,AAAO;IAAO;;AAMnB,YAAM,AAAO;IAAQ;;AAMX,YAAM,AAAO;IAAkB;;AAMjC,YAAM,AAAO;IAAgB;;AAM5B,YAAM,AAAO;IAAiB;;AAM7B,YAAM,AAAO;IAAkB;;AAM7B,YAAM,AAAO;IAAoB;;AAMhC,YAAM,AAAO;IAAqB;;AAM9C,YAAM,AAAO;IAAS;;AAMtB,YAAM,AAAO;IAAS;;AAMpB,YAAM,AAAO;IAAW;;AAMxB,YAAM,AAAO;IAAW;;AAMvB,YAAM,AAAO;IAAY;;AAM5B,YAAM,AAAO;IAAS;;AAMpB,YAAM,AAAO;IAAW;;AAMxB,YAAM,AAAO;IAAW;;AAMvB,YAAM,AAAO;IAAY;;AAMjB,YAAM,AAAO;IAAoB;;AAMnC,YAAM,AAAO;IAAkB;;AAM9B,YAAM,AAAO;IAAmB;;AAM/B,YAAM,AAAO;IAAoB;;AAM/B,YAAM,AAAO;IAAsB;;AAMlC,YAAM,AAAO;IAAuB;;AAMhD,YAAM,AAAO;IAAW;;AAMxB,YAAM,AAAO;IAAW;;AAMtB,YAAM,AAAO;IAAa;;AAM1B,YAAM,AAAO;IAAa;;AAMzB,YAAM,AAAO;IAAc;;AAMjB,YAAM,AAAO;IAAwB;;AAOxE,YAAM,AAAO;IAA4B;;AAMR,YAAM,AAAO;IAAsB;;AAOpE,YAAM,AAAO;IAA0B;;AAMJ,YAAM,AAAO;IAAwB;;AAOxE,YAAM,AAAO;IAA4B;;AAMR,YAAM,AAAO;IAAsB;;AAOpE,YAAM,AAAO;IAA0B;;AAOvC,YAAM,AAAO;IAA2B;;AAOxC,YAAM,AAAO;IAA+B;;AAMR,YAAM,AAAO;IAAyB;;AAO1E,YAAM,AAAO;IAA6B;;kDCxVnB,OAAc;AACrC,UAAA,AAAO,gCAAa,KAAK,EAAE,WAAW;EAAC;;;AAhBpB;IAAO;;AAOZ,YAAA,AAAO,6BAAG;IAAW;cAExB;AACgC,MAA7C,qBAAU,KAAK,GAAG,yBAAc,wBAAjB;IACjB;;;MAnBe,sBAAW;;;MAGX,wBAAa;;;MAMnB,kBAAO;YAAG","file":"../../../../../../../../../../../../packages/term_glyph/src/generated/top_level.dart.lib.js"}');
  // Exports:
  return {
    src__generated__top_level: top_level,
    term_glyph: term_glyph
  };
}));

//# sourceMappingURL=top_level.dart.lib.js.map
