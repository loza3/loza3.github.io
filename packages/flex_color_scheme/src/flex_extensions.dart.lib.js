define(['dart_sdk', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/material/icon_button.dart'], (function load__packages__flex_color_scheme__src__flex_extensions_dart(dart_sdk, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__material__icon_button$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const colors$ = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  var flex_extensions = Object.create(dart.library);
  var $round = dartx.round;
  var $truncate = dartx.truncate;
  var $toRadixString = dartx.toRadixString;
  var $toUpperCase = dartx.toUpperCase;
  var $padLeft = dartx.padLeft;
  var $substring = dartx.substring;
  var $replaceAll = dartx.replaceAll;
  var $_get = dartx._get;
  var $last = dartx.last;
  var $split = dartx.split;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    intToColor: () => (T.intToColor = dart.constFn(dart.fnType(ui.Color, [], [core.int])))(),
    ColorAndintToColor: () => (T.ColorAndintToColor = dart.constFn(dart.fnType(ui.Color, [ui.Color], [core.int])))(),
    __ToColor: () => (T.__ToColor = dart.constFn(dart.fnType(ui.Color, [], {keepBlack: core.bool, keepWhite: core.bool, lighten: core.bool, shadeValue: core.int}, {})))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    }
  }, false);
  var C = [void 0];
  var Color_value = dart.privateName(ui, "Color.value");
  flex_extensions['FlexColorExtensions|brighten'] = function FlexColorExtensions$124brighten($this, amount = 10) {
    if (amount <= 0) return $this;
    if (amount > 100) return colors.Colors.white;
    let color = new ui.Color.fromARGB($this.alpha, math.max(core.int, 0, math.min(core.int, 255, $this.red - (255 * -(amount / 100))[$round]())), math.max(core.int, 0, math.min(core.int, 255, $this.green - (255 * -(amount / 100))[$round]())), math.max(core.int, 0, math.min(core.int, 255, $this.blue - (255 * -(amount / 100))[$round]())));
    return color;
  };
  flex_extensions['FlexColorExtensions|get#brighten'] = function FlexColorExtensions$124get$35brighten($this) {
    return dart.fn((amount = 10) => flex_extensions['FlexColorExtensions|brighten']($this, amount), T.intToColor());
  };
  flex_extensions['FlexColorExtensions|lighten'] = function FlexColorExtensions$124lighten($this, amount = 10) {
    if (amount <= 0) return $this;
    if (amount > 100) return colors.Colors.white;
    let hsl = $this._equals(C[0] || CT.C0) ? colors$.HSLColor.fromColor($this).withSaturation(0.0) : colors$.HSLColor.fromColor($this);
    return hsl.withLightness(math.min(core.double, 1.0, math.max(core.double, 0.0, hsl.lightness + amount / 100))).toColor();
  };
  flex_extensions['FlexColorExtensions|get#lighten'] = function FlexColorExtensions$124get$35lighten($this) {
    return dart.fn((amount = 10) => flex_extensions['FlexColorExtensions|lighten']($this, amount), T.intToColor());
  };
  flex_extensions['FlexColorExtensions|darken'] = function FlexColorExtensions$124darken($this, amount = 10) {
    if (amount <= 0) return $this;
    if (amount > 100) return colors.Colors.black;
    let hsl = colors$.HSLColor.fromColor($this);
    return hsl.withLightness(math.min(core.double, 1.0, math.max(core.double, 0.0, hsl.lightness - amount / 100))).toColor();
  };
  flex_extensions['FlexColorExtensions|get#darken'] = function FlexColorExtensions$124get$35darken($this) {
    return dart.fn((amount = 10) => flex_extensions['FlexColorExtensions|darken']($this, amount), T.intToColor());
  };
  flex_extensions['FlexColorExtensions|get#onColor'] = function FlexColorExtensions$124get$35onColor($this) {
    return theme_data.ThemeData.estimateBrightnessForColor($this) === ui.Brightness.light ? colors.Colors.black : colors.Colors.white;
  };
  flex_extensions['FlexColorExtensions|get#isLight'] = function FlexColorExtensions$124get$35isLight($this) {
    return theme_data.ThemeData.estimateBrightnessForColor($this) === ui.Brightness.light;
  };
  flex_extensions['FlexColorExtensions|get#isDark'] = function FlexColorExtensions$124get$35isDark($this) {
    return theme_data.ThemeData.estimateBrightnessForColor($this) === ui.Brightness.dark;
  };
  flex_extensions['FlexColorExtensions|blend'] = function FlexColorExtensions$124blend($this, input, amount = 10) {
    if (amount <= 0) return $this;
    if (amount >= 100) return input;
    return ui.Color.alphaBlend(input.withAlpha((255 * amount / 100)[$truncate]()), $this);
  };
  flex_extensions['FlexColorExtensions|get#blend'] = function FlexColorExtensions$124get$35blend($this) {
    return dart.fn((input, amount = 10) => flex_extensions['FlexColorExtensions|blend']($this, input, amount), T.ColorAndintToColor());
  };
  flex_extensions['FlexColorExtensions|blendAlpha'] = function FlexColorExtensions$124blendAlpha($this, input, alpha = 10) {
    if (alpha <= 0) return $this;
    if (alpha >= 255) return input;
    return ui.Color.alphaBlend(input.withAlpha(alpha), $this);
  };
  flex_extensions['FlexColorExtensions|get#blendAlpha'] = function FlexColorExtensions$124get$35blendAlpha($this) {
    return dart.fn((input, alpha = 10) => flex_extensions['FlexColorExtensions|blendAlpha']($this, input, alpha), T.ColorAndintToColor());
  };
  flex_extensions['FlexColorExtensions|getShadeColor'] = function FlexColorExtensions$124getShadeColor($this, opts) {
    let shadeValue = opts && 'shadeValue' in opts ? opts.shadeValue : 15;
    let lighten = opts && 'lighten' in opts ? opts.lighten : true;
    let keepBlack = opts && 'keepBlack' in opts ? opts.keepBlack : true;
    let keepWhite = opts && 'keepWhite' in opts ? opts.keepWhite : true;
    if (shadeValue <= 0) return $this;
    let usedShadeValue = shadeValue;
    if (usedShadeValue > 100) usedShadeValue = 100;
    if ($this._equals(colors.Colors.black) && !lighten) return $this;
    if ($this._equals(colors.Colors.black) && keepBlack) return $this;
    if ($this._equals(colors.Colors.black)) return flex_extensions['FlexColorExtensions|lighten']($this, usedShadeValue);
    if ($this._equals(colors.Colors.white) && lighten) return $this;
    if ($this._equals(colors.Colors.white) && keepWhite) return $this;
    if ($this._equals(colors.Colors.white)) return flex_extensions['FlexColorExtensions|darken']($this, usedShadeValue);
    if (lighten) {
      return flex_extensions['FlexColorExtensions|lighten']($this, usedShadeValue);
    } else {
      return flex_extensions['FlexColorExtensions|darken']($this, usedShadeValue);
    }
  };
  flex_extensions['FlexColorExtensions|get#getShadeColor'] = function FlexColorExtensions$124get$35getShadeColor($this) {
    return dart.fn(opts => {
      let shadeValue = opts && 'shadeValue' in opts ? opts.shadeValue : 15;
      let lighten = opts && 'lighten' in opts ? opts.lighten : true;
      let keepBlack = opts && 'keepBlack' in opts ? opts.keepBlack : true;
      let keepWhite = opts && 'keepWhite' in opts ? opts.keepWhite : true;
      return flex_extensions['FlexColorExtensions|getShadeColor']($this, {shadeValue: shadeValue, lighten: lighten, keepBlack: keepBlack, keepWhite: keepWhite});
    }, T.__ToColor());
  };
  flex_extensions['FlexColorExtensions|get#hexCode'] = function FlexColorExtensions$124get$35hexCode($this) {
    return $this.value[$toRadixString](16)[$toUpperCase]()[$padLeft](8, "0");
  };
  flex_extensions['FlexColorExtensions|get#hex'] = function FlexColorExtensions$124get$35hex($this) {
    return "#" + $this.value[$toRadixString](16)[$toUpperCase]()[$padLeft](8, "0")[$substring](2);
  };
  flex_extensions['FlexStringExtensions|get#toColor'] = function FlexStringExtensions$124get$35toColor($this) {
    let t18;
    if ($this === "") return C[0] || CT.C0;
    let hexColor = $this[$replaceAll]("#", "");
    hexColor = hexColor[$replaceAll]("0x", "");
    hexColor = hexColor[$padLeft](6, "0");
    hexColor = hexColor[$padLeft](8, "F");
    let length = hexColor.length;
    return new ui.Color.new((t18 = core.int.tryParse("0x" + hexColor[$substring](length - 8, length)), t18 == null ? 4278190080 : t18));
  };
  flex_extensions['FlexStringExtensions|get#capitalize'] = function FlexStringExtensions$124get$35capitalize($this) {
    return $this.length > 1 ? $this[$_get](0)[$toUpperCase]() + $this[$substring](1) : $this[$toUpperCase]();
  };
  flex_extensions['FlexStringExtensions|get#dotTail'] = function FlexStringExtensions$124get$35dotTail($this) {
    return $this[$split](".")[$last];
  };
  dart.trackLibraries("packages/flex_color_scheme/src/flex_extensions.dart", {
    "package:flex_color_scheme/src/flex_extensions.dart": flex_extensions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_extensions.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_extensions.dart.lib.js"}');
  // Exports:
  return {
    src__flex_extensions: flex_extensions
  };
}));

//# sourceMappingURL=flex_extensions.dart.lib.js.map
