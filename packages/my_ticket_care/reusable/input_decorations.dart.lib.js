define(['dart_sdk', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/input_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/icon_data.dart'], (function load__packages__my_ticket_care__reusable__input_decorations_dart(dart_sdk, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__input_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__icon_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const input_border = packages__flutter__src__material__input_border$46dart.src__material__input_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const colors$ = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  var input_decorations = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293718001.0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291811548.0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289773253.0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287669422.0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286091420.0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284513675.0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283723386.0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282735204.0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281812815.0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280693304.0
      });
    },
    get C4() {
      return C[4] = dart.constMap(core.int, ui.Color, [50, C[5] || CT.C5, 100, C[6] || CT.C6, 200, C[7] || CT.C7, 300, C[8] || CT.C8, 400, C[9] || CT.C9, 500, C[10] || CT.C10, 600, C[11] || CT.C11, 700, C[12] || CT.C12, 800, C[13] || CT.C13, 900, C[14] || CT.C14]);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4284513675.0,
        [ColorSwatch__swatch]: C[4] || CT.C4
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[1] || CT.C1,
        [BorderSide_style]: C[2] || CT.C2,
        [BorderSide_width]: 2,
        [BorderSide_color]: C[3] || CT.C3
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330.0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294309365.0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293848814.0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292927712.0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292269782.0
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290624957.0
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288585374.0
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861.0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284572001.0
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282532418.0
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281348144.0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280361249.0
      });
    },
    get C17() {
      return C[17] = dart.constMap(core.int, ui.Color, [50, C[18] || CT.C18, 100, C[19] || CT.C19, 200, C[20] || CT.C20, 300, C[21] || CT.C21, 350, C[22] || CT.C22, 400, C[23] || CT.C23, 500, C[24] || CT.C24, 600, C[25] || CT.C25, 700, C[26] || CT.C26, 800, C[27] || CT.C27, 850, C[28] || CT.C28, 900, C[29] || CT.C29]);
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4288585374.0,
        [ColorSwatch__swatch]: C[17] || CT.C17
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/input_decorations.dart"
      });
    }
  }, false);
  var C = Array(31).fill(void 0);
  var I = ["package:my_ticket_care/reusable/input_decorations.dart"];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  input_decorations.InputDecorations = class InputDecorations extends core.Object {
    static authInputDecoration(opts) {
      let hintText = opts && 'hintText' in opts ? opts.hintText : null;
      let labelText = opts && 'labelText' in opts ? opts.labelText : null;
      let prefixIcon = opts && 'prefixIcon' in opts ? opts.prefixIcon : null;
      return new input_decorator.InputDecoration.new({enabledBorder: new input_border.UnderlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0), borderSide: C[0] || CT.C0}), border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0)}), hintText: hintText, labelText: labelText, labelStyle: C[15] || CT.C15, prefixIcon: prefixIcon != null ? new icon.Icon.new(prefixIcon, {color: colors.Colors.blueGrey, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}) : null});
    }
    static ['_#new#tearOff']() {
      return new input_decorations.InputDecorations.new();
    }
  };
  (input_decorations.InputDecorations.new = function() {
    ;
  }).prototype = input_decorations.InputDecorations.prototype;
  dart.addTypeTests(input_decorations.InputDecorations);
  dart.addTypeCaches(input_decorations.InputDecorations);
  dart.setStaticMethodSignature(input_decorations.InputDecorations, () => ['authInputDecoration']);
  dart.setLibraryUri(input_decorations.InputDecorations, I[0]);
  dart.trackLibraries("packages/my_ticket_care/reusable/input_decorations.dart", {
    "package:my_ticket_care/reusable/input_decorations.dart": input_decorations
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input_decorations.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAIoB;UACA;UACN;AAEV,YAAO,yDACY,yDACc,wCAAS,4CAG9B,uDACqB,wCAAS,mBAE5B,QAAQ,aACP,SAAS,2CAER,AAAW,UAAD,WAChB,kBACE,UAAU,UACI,oFAEhB;IACZ;;;;;;;EACF","file":"../../../../../../../../../packages/my_ticket_care/reusable/input_decorations.dart.lib.js"}');
  // Exports:
  return {
    reusable__input_decorations: input_decorations
  };
}));

//# sourceMappingURL=input_decorations.dart.lib.js.map
