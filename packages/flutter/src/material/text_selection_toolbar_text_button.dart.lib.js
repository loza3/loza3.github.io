define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__flutter__src__material__text_selection_toolbar_text_button_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var text_selection_toolbar_text_button = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.prototype,
        [_Enum__name]: "first",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.prototype,
        [_Enum__name]: "middle",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.prototype,
        [_Enum__name]: "last",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.prototype,
        [_Enum__name]: "only",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], text_selection_toolbar_text_button._TextSelectionToolbarItemPosition);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextSelectionToolbarTextButton",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar_text_button.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[8] || CT.C8,
        [BorderSide_style]: C[9] || CT.C9,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[10] || CT.C10
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[12] || CT.C12,
        [BorderRadius_bottomLeft]: C[12] || CT.C12,
        [BorderRadius_topRight]: C[12] || CT.C12,
        [BorderRadius_topLeft]: C[12] || CT.C12
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[7] || CT.C7,
        [RoundedRectangleBorder_borderRadius]: C[11] || CT.C11
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 48,
        [OffsetBase__dx]: 48
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 12,
        [_Location_line]: 114,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar_text_button.dart"
      });
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = [
    "package:flutter/src/material/text_selection_toolbar_text_button.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar_text_button.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  text_selection_toolbar_text_button._TextSelectionToolbarItemPosition = class _TextSelectionToolbarItemPosition extends core._Enum {
    toString() {
      return "_TextSelectionToolbarItemPosition." + this[_name];
    }
  };
  (text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.new = function(index, name) {
    text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.prototype;
  dart.addTypeTests(text_selection_toolbar_text_button._TextSelectionToolbarItemPosition);
  dart.addTypeCaches(text_selection_toolbar_text_button._TextSelectionToolbarItemPosition);
  dart.setLibraryUri(text_selection_toolbar_text_button._TextSelectionToolbarItemPosition, I[0]);
  dart.setStaticFieldSignature(text_selection_toolbar_text_button._TextSelectionToolbarItemPosition, () => ['values', 'first', 'middle', 'last', 'only']);
  dart.defineExtensionMethods(text_selection_toolbar_text_button._TextSelectionToolbarItemPosition, ['toString']);
  dart.defineLazy(text_selection_toolbar_text_button._TextSelectionToolbarItemPosition, {
    /*text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.values*/get values() {
      return C[0] || CT.C0;
    },
    /*text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.first*/get first() {
      return C[1] || CT.C1;
    },
    /*text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.middle*/get middle() {
      return C[2] || CT.C2;
    },
    /*text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.last*/get last() {
      return C[3] || CT.C3;
    },
    /*text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.only*/get only() {
      return C[4] || CT.C4;
    }
  }, false);
  var child$ = dart.privateName(text_selection_toolbar_text_button, "TextSelectionToolbarTextButton.child");
  var onPressed$ = dart.privateName(text_selection_toolbar_text_button, "TextSelectionToolbarTextButton.onPressed");
  var padding$ = dart.privateName(text_selection_toolbar_text_button, "TextSelectionToolbarTextButton.padding");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  text_selection_toolbar_text_button.TextSelectionToolbarTextButton = class TextSelectionToolbarTextButton extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      return new text_selection_toolbar_text_button.TextSelectionToolbarTextButton.new({key: key, child: child, padding: padding, onPressed: onPressed, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    static getPadding(index, total) {
      if (!(total > 0 && index >= 0 && index < total)) dart.assertFailed(null, I[1], 71, 12, "total > 0 && index >= 0 && index < total");
      let position = text_selection_toolbar_text_button.TextSelectionToolbarTextButton._getPosition(index, total);
      return new edge_insets.EdgeInsets.only({left: text_selection_toolbar_text_button.TextSelectionToolbarTextButton._getLeftPadding(position), right: text_selection_toolbar_text_button.TextSelectionToolbarTextButton._getRightPadding(position)});
    }
    static _getLeftPadding(position) {
      if (position === text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.first || position === text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.only) {
        return 14.5;
      }
      return 9.5;
    }
    static _getRightPadding(position) {
      if (position === text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.last || position === text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.only) {
        return 14.5;
      }
      return 9.5;
    }
    static _getPosition(index, total) {
      if (index === 0) {
        return total === 1 ? text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.only : text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.first;
      }
      if (index === total - 1) {
        return text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.last;
      }
      return text_selection_toolbar_text_button._TextSelectionToolbarItemPosition.middle;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let isDark = theme.colorScheme.brightness === ui.Brightness.dark;
      let primary = isDark ? colors.Colors.white : colors.Colors.black87;
      return new text_button.TextButton.new({style: text_button.TextButton.styleFrom({primary: primary, shape: C[6] || CT.C6, minimumSize: C[13] || CT.C13, padding: this.padding}), onPressed: this.onPressed, child: this.child, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
  };
  (text_selection_toolbar_text_button.TextSelectionToolbarTextButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[padding$] = padding;
    this[onPressed$] = onPressed;
    text_selection_toolbar_text_button.TextSelectionToolbarTextButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar_text_button.TextSelectionToolbarTextButton.prototype;
  dart.addTypeTests(text_selection_toolbar_text_button.TextSelectionToolbarTextButton);
  dart.addTypeCaches(text_selection_toolbar_text_button.TextSelectionToolbarTextButton);
  dart.setMethodSignature(text_selection_toolbar_text_button.TextSelectionToolbarTextButton, () => ({
    __proto__: dart.getMethods(text_selection_toolbar_text_button.TextSelectionToolbarTextButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(text_selection_toolbar_text_button.TextSelectionToolbarTextButton, () => ['getPadding', '_getLeftPadding', '_getRightPadding', '_getPosition']);
  dart.setLibraryUri(text_selection_toolbar_text_button.TextSelectionToolbarTextButton, I[0]);
  dart.setFieldSignature(text_selection_toolbar_text_button.TextSelectionToolbarTextButton, () => ({
    __proto__: dart.getFields(text_selection_toolbar_text_button.TextSelectionToolbarTextButton.__proto__),
    child: dart.finalFieldType(framework.Widget),
    onPressed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    padding: dart.finalFieldType(edge_insets.EdgeInsets)
  }));
  dart.setStaticFieldSignature(text_selection_toolbar_text_button.TextSelectionToolbarTextButton, () => ['_kMiddlePadding', '_kEndPadding']);
  dart.defineLazy(text_selection_toolbar_text_button.TextSelectionToolbarTextButton, {
    /*text_selection_toolbar_text_button.TextSelectionToolbarTextButton._kMiddlePadding*/get _kMiddlePadding() {
      return 9.5;
    },
    /*text_selection_toolbar_text_button.TextSelectionToolbarTextButton._kEndPadding*/get _kEndPadding() {
      return 14.5;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/text_selection_toolbar_text_button.dart", {
    "package:flutter/src/material/text_selection_toolbar_text_button.dart": text_selection_toolbar_text_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection_toolbar_text_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuBA;;;;;;;;;;;;MAZK,2EAAM;;;MAET,0EAAK;;;MAGL,2EAAM;;;MAGN,yEAAI;;;MAGJ,yEAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuBS;;;;;;IAKO;;;;;;IAYH;;;;;;;;;;;;;sBAOgB,OAAW;AAC1C,YAAO,AAAM,AAAkB,KAAnB,GAAG,KAAK,AAAM,KAAD,IAAI,KAAK,AAAM,KAAD,GAAG,KAAK;AACP,qBAAW,+EAAa,KAAK,EAAE,KAAK;AAC5E,YAAkB,wCACV,kFAAgB,QAAQ,UACvB,mFAAiB,QAAQ;IAEpC;2BAEgE;AAC9D,UAAI,AAAS,QAAD,KAAsC,8EAC3C,AAAS,QAAD,KAAsC;AACnD;;AAEF;IACF;4BAEiE;AAC/D,UAAI,AAAS,QAAD,KAAsC,6EAC3C,AAAS,QAAD,KAAsC;AACnD;;AAEF;IACF;wBAE0D,OAAW;AACnE,UAAI,AAAM,KAAD,KAAI;AACX,cAAO,AAAM,MAAD,KAAI,IACwB,4EACA;;AAE1C,UAAI,AAAM,KAAD,KAAI,AAAM,KAAD,GAAG;AACnB,cAAyC;;AAE3C,YAAyC;IAC3C;UAG0B;AAER,kBAAc,gBAAG,OAAO;AAC7B,mBAAS,AAAM,AAAY,AAAW,KAAxB,4BAAsC;AACnD,oBAAU,MAAM,GAAU,sBAAe,qBAAzB;AAE5B,YAAO,wCACa,2CACP,OAAO,+DAGP,2BAEA,uBACJ;IAEX;;;QA9FQ;QACQ;QACA;QACT;;IAFS;IACA;IACT;AAJD,qGACE,GAAG;;EAIT;;;;;;;;;;;;;;;;;MAIkB,iFAAe;;;MACf,8EAAY","file":"../../../../../../../../../../packages/flutter/src/material/text_selection_toolbar_text_button.dart.lib.js"}');
  // Exports:
  return {
    src__material__text_selection_toolbar_text_button: text_selection_toolbar_text_button
  };
}));

//# sourceMappingURL=text_selection_toolbar_text_button.dart.lib.js.map
