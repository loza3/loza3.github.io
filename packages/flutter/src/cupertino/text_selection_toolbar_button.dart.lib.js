define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/cupertino/button.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__cupertino__text_selection_toolbar_button_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__cupertino__button$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text$ = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const button = packages__flutter__src__cupertino__button$46dart.src__cupertino__button;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var text_selection_toolbar_button = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar_button.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTextSelectionToolbarButton",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar_button.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTextSelectionToolbarButton",
        [_Location_column]: 3,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar_button.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoButton",
        [_Location_column]: 12,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar_button.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
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
        [TextStyle_letterSpacing]: -0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[5] || CT.C5,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3944751136.0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 18,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 18
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = ["package:flutter/src/cupertino/text_selection_toolbar_button.dart"];
  var child$ = dart.privateName(text_selection_toolbar_button, "CupertinoTextSelectionToolbarButton.child");
  var onPressed$ = dart.privateName(text_selection_toolbar_button, "CupertinoTextSelectionToolbarButton.onPressed");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  text_selection_toolbar_button.CupertinoTextSelectionToolbarButton = class CupertinoTextSelectionToolbarButton extends framework.StatelessWidget {
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
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.new({key: key, onPressed: onPressed, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static ['_#text#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let text = opts && 'text' in opts ? opts.text : null;
      return new text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.text({key: key, onPressed: onPressed, text: text, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    build(context) {
      return new button.CupertinoButton.new({borderRadius: null, color: text_selection_toolbar_button._kToolbarBackgroundColor, disabledColor: text_selection_toolbar_button._kToolbarBackgroundColor, onPressed: this.onPressed, padding: text_selection_toolbar_button._kToolbarButtonPadding, pressedOpacity: this.onPressed == null ? 1.0 : 0.7, child: this.child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
  };
  (text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[child$] = child;
    text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.prototype;
  (text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.text = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[child$] = new text$.Text.new(text, {overflow: text_painter.TextOverflow.ellipsis, style: text_selection_toolbar_button._kToolbarButtonFontStyle.copyWith({color: onPressed != null ? colors.CupertinoColors.white : colors.CupertinoColors.inactiveGray}), $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.prototype;
  dart.addTypeTests(text_selection_toolbar_button.CupertinoTextSelectionToolbarButton);
  dart.addTypeCaches(text_selection_toolbar_button.CupertinoTextSelectionToolbarButton);
  dart.setMethodSignature(text_selection_toolbar_button.CupertinoTextSelectionToolbarButton, () => ({
    __proto__: dart.getMethods(text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection_toolbar_button.CupertinoTextSelectionToolbarButton, I[0]);
  dart.setFieldSignature(text_selection_toolbar_button.CupertinoTextSelectionToolbarButton, () => ({
    __proto__: dart.getFields(text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.__proto__),
    child: dart.finalFieldType(framework.Widget),
    onPressed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
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
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var Color_value = dart.privateName(ui, "Color.value");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  dart.defineLazy(text_selection_toolbar_button, {
    /*text_selection_toolbar_button._kToolbarButtonFontStyle*/get _kToolbarButtonFontStyle() {
      return C[4] || CT.C4;
    },
    /*text_selection_toolbar_button._kToolbarBackgroundColor*/get _kToolbarBackgroundColor() {
      return C[6] || CT.C6;
    },
    /*text_selection_toolbar_button._kToolbarButtonPadding*/get _kToolbarButtonPadding() {
      return C[7] || CT.C7;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/text_selection_toolbar_button.dart", {
    "package:flutter/src/cupertino/text_selection_toolbar_button.dart": text_selection_toolbar_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection_toolbar_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmDe;;;;;;IAKO;;;;;;;;;;;;;;;;;;UAGM;AACxB,YAAO,+CACS,aACP,uEACQ,mEACJ,yBACF,sEACO,AAAU,yBAAU,MAAM,YACnC;IAEX;;;QA1CQ;QACD;QACS;;IADT;IACS;AAHV,qGACE,GAAG;;EAGT;;QAKM;QACD;QACW;;IADX;IAEI,eAAE,mBACN,IAAI,aACmB,2CAChB,AAAyB,wEACvB,AAAU,SAAD,WAA2B,+BAAwB;AAR5E,qGACQ,GAAG;;EASL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAnCQ,sDAAwB;;;MAS5B,sDAAwB;;;MAGnB,oDAAsB","file":"../../../../../../../../../../packages/flutter/src/cupertino/text_selection_toolbar_button.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__text_selection_toolbar_button: text_selection_toolbar_button
  };
}));

//# sourceMappingURL=text_selection_toolbar_button.dart.lib.js.map
