define(['dart_sdk', 'packages/term_glyph/src/generated/glyph_set.dart'], (function load__packages__term_glyph__src__generated__unicode_glyph_set_dart(dart_sdk, packages__term_glyph__src__generated__glyph_set$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const glyph_set = packages__term_glyph__src__generated__glyph_set$46dart.src__generated__glyph_set;
  var unicode_glyph_set = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:term_glyph/src/generated/unicode_glyph_set.dart"];
  unicode_glyph_set.UnicodeGlyphSet = class UnicodeGlyphSet extends core.Object {
    static ['_#new#tearOff']() {
      return new unicode_glyph_set.UnicodeGlyphSet.new();
    }
    glyphOrAscii(glyph, alternative) {
      return glyph;
    }
    get bullet() {
      return "•";
    }
    get leftArrow() {
      return "←";
    }
    get rightArrow() {
      return "→";
    }
    get upArrow() {
      return "↑";
    }
    get downArrow() {
      return "↓";
    }
    get longLeftArrow() {
      return "◀━";
    }
    get longRightArrow() {
      return "━▶";
    }
    get horizontalLine() {
      return "─";
    }
    get verticalLine() {
      return "│";
    }
    get topLeftCorner() {
      return "┌";
    }
    get topRightCorner() {
      return "┐";
    }
    get bottomLeftCorner() {
      return "└";
    }
    get bottomRightCorner() {
      return "┘";
    }
    get cross() {
      return "┼";
    }
    get teeUp() {
      return "┴";
    }
    get teeDown() {
      return "┬";
    }
    get teeLeft() {
      return "┤";
    }
    get teeRight() {
      return "├";
    }
    get upEnd() {
      return "╵";
    }
    get downEnd() {
      return "╷";
    }
    get leftEnd() {
      return "╴";
    }
    get rightEnd() {
      return "╶";
    }
    get horizontalLineBold() {
      return "━";
    }
    get verticalLineBold() {
      return "┃";
    }
    get topLeftCornerBold() {
      return "┏";
    }
    get topRightCornerBold() {
      return "┓";
    }
    get bottomLeftCornerBold() {
      return "┗";
    }
    get bottomRightCornerBold() {
      return "┛";
    }
    get crossBold() {
      return "╋";
    }
    get teeUpBold() {
      return "┻";
    }
    get teeDownBold() {
      return "┳";
    }
    get teeLeftBold() {
      return "┫";
    }
    get teeRightBold() {
      return "┣";
    }
    get upEndBold() {
      return "╹";
    }
    get downEndBold() {
      return "╻";
    }
    get leftEndBold() {
      return "╸";
    }
    get rightEndBold() {
      return "╺";
    }
    get horizontalLineDouble() {
      return "═";
    }
    get verticalLineDouble() {
      return "║";
    }
    get topLeftCornerDouble() {
      return "╔";
    }
    get topRightCornerDouble() {
      return "╗";
    }
    get bottomLeftCornerDouble() {
      return "╚";
    }
    get bottomRightCornerDouble() {
      return "╝";
    }
    get crossDouble() {
      return "╬";
    }
    get teeUpDouble() {
      return "╩";
    }
    get teeDownDouble() {
      return "╦";
    }
    get teeLeftDouble() {
      return "╣";
    }
    get teeRightDouble() {
      return "╠";
    }
    get horizontalLineDoubleDash() {
      return "╌";
    }
    get horizontalLineDoubleDashBold() {
      return "╍";
    }
    get verticalLineDoubleDash() {
      return "╎";
    }
    get verticalLineDoubleDashBold() {
      return "╏";
    }
    get horizontalLineTripleDash() {
      return "┄";
    }
    get horizontalLineTripleDashBold() {
      return "┅";
    }
    get verticalLineTripleDash() {
      return "┆";
    }
    get verticalLineTripleDashBold() {
      return "┇";
    }
    get horizontalLineQuadrupleDash() {
      return "┈";
    }
    get horizontalLineQuadrupleDashBold() {
      return "┉";
    }
    get verticalLineQuadrupleDash() {
      return "┊";
    }
    get verticalLineQuadrupleDashBold() {
      return "┋";
    }
  };
  (unicode_glyph_set.UnicodeGlyphSet.new = function() {
    ;
  }).prototype = unicode_glyph_set.UnicodeGlyphSet.prototype;
  dart.addTypeTests(unicode_glyph_set.UnicodeGlyphSet);
  dart.addTypeCaches(unicode_glyph_set.UnicodeGlyphSet);
  unicode_glyph_set.UnicodeGlyphSet[dart.implements] = () => [glyph_set.GlyphSet];
  dart.setMethodSignature(unicode_glyph_set.UnicodeGlyphSet, () => ({
    __proto__: dart.getMethods(unicode_glyph_set.UnicodeGlyphSet.__proto__),
    glyphOrAscii: dart.fnType(core.String, [core.String, core.String])
  }));
  dart.setGetterSignature(unicode_glyph_set.UnicodeGlyphSet, () => ({
    __proto__: dart.getGetters(unicode_glyph_set.UnicodeGlyphSet.__proto__),
    bullet: core.String,
    leftArrow: core.String,
    rightArrow: core.String,
    upArrow: core.String,
    downArrow: core.String,
    longLeftArrow: core.String,
    longRightArrow: core.String,
    horizontalLine: core.String,
    verticalLine: core.String,
    topLeftCorner: core.String,
    topRightCorner: core.String,
    bottomLeftCorner: core.String,
    bottomRightCorner: core.String,
    cross: core.String,
    teeUp: core.String,
    teeDown: core.String,
    teeLeft: core.String,
    teeRight: core.String,
    upEnd: core.String,
    downEnd: core.String,
    leftEnd: core.String,
    rightEnd: core.String,
    horizontalLineBold: core.String,
    verticalLineBold: core.String,
    topLeftCornerBold: core.String,
    topRightCornerBold: core.String,
    bottomLeftCornerBold: core.String,
    bottomRightCornerBold: core.String,
    crossBold: core.String,
    teeUpBold: core.String,
    teeDownBold: core.String,
    teeLeftBold: core.String,
    teeRightBold: core.String,
    upEndBold: core.String,
    downEndBold: core.String,
    leftEndBold: core.String,
    rightEndBold: core.String,
    horizontalLineDouble: core.String,
    verticalLineDouble: core.String,
    topLeftCornerDouble: core.String,
    topRightCornerDouble: core.String,
    bottomLeftCornerDouble: core.String,
    bottomRightCornerDouble: core.String,
    crossDouble: core.String,
    teeUpDouble: core.String,
    teeDownDouble: core.String,
    teeLeftDouble: core.String,
    teeRightDouble: core.String,
    horizontalLineDoubleDash: core.String,
    horizontalLineDoubleDashBold: core.String,
    verticalLineDoubleDash: core.String,
    verticalLineDoubleDashBold: core.String,
    horizontalLineTripleDash: core.String,
    horizontalLineTripleDashBold: core.String,
    verticalLineTripleDash: core.String,
    verticalLineTripleDashBold: core.String,
    horizontalLineQuadrupleDash: core.String,
    horizontalLineQuadrupleDashBold: core.String,
    verticalLineQuadrupleDash: core.String,
    verticalLineQuadrupleDashBold: core.String
  }));
  dart.setLibraryUri(unicode_glyph_set.UnicodeGlyphSet, I[0]);
  dart.trackLibraries("packages/term_glyph/src/generated/unicode_glyph_set.dart", {
    "package:term_glyph/src/generated/unicode_glyph_set.dart": unicode_glyph_set
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["unicode_glyph_set.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;iBAe6B,OAAc;AAAgB,kBAAK;;;AAEzC;IAAG;;AAEA;IAAG;;AAEF;IAAG;;AAEN;IAAG;;AAED;IAAG;;AAEC;IAAI;;AAEH;IAAI;;AAEJ;IAAG;;AAEL;IAAG;;AAEF;IAAG;;AAEF;IAAG;;AAED;IAAG;;AAEF;IAAG;;AAEf;IAAG;;AAEH;IAAG;;AAED;IAAG;;AAEH;IAAG;;AAEF;IAAG;;AAEN;IAAG;;AAED;IAAG;;AAEH;IAAG;;AAEF;IAAG;;AAEO;IAAG;;AAEL;IAAG;;AAEF;IAAG;;AAEF;IAAG;;AAED;IAAG;;AAEF;IAAG;;AAEf;IAAG;;AAEH;IAAG;;AAED;IAAG;;AAEH;IAAG;;AAEF;IAAG;;AAEN;IAAG;;AAED;IAAG;;AAEH;IAAG;;AAEF;IAAG;;AAEK;IAAG;;AAEL;IAAG;;AAEF;IAAG;;AAEF;IAAG;;AAED;IAAG;;AAEF;IAAG;;AAEf;IAAG;;AAEH;IAAG;;AAED;IAAG;;AAEH;IAAG;;AAEF;IAAG;;AAEO;IAAG;;AAEC;IAAG;;AAET;IAAG;;AAEC;IAAG;;AAEL;IAAG;;AAEC;IAAG;;AAET;IAAG;;AAEC;IAAG;;AAEF;IAAG;;AAEC;IAAG;;AAET;IAAG;;AAEC;IAAG;;;;EA7HxB","file":"../../../../../../../../../../../../packages/term_glyph/src/generated/unicode_glyph_set.dart.lib.js"}');
  // Exports:
  return {
    src__generated__unicode_glyph_set: unicode_glyph_set
  };
}));

//# sourceMappingURL=unicode_glyph_set.dart.lib.js.map
