define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/services/mouse_cursor.dart'], (function load__packages__flutter_map__src__layer__attribution_layer_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__services__mouse_cursor$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  var attribution_layer = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AttributionWidget",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278220968.0
      });
    },
    get C3() {
      return C[3] = dart.const({
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
        [TextStyle_color]: C[4] || CT.C4,
        [TextStyle_inherit]: true
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3439329279.0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 3,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 3
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 25,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[8] || CT.C8,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "flutter_map | © "
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MouseRegion",
        [_Location_column]: 19,
        [_Location_line]: 53,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 22,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 18,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ColoredBox",
        [_Location_column]: 16,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/attribution_layer.dart"
      });
    }
  }, false);
  var C = Array(16).fill(void 0);
  var I = ["package:flutter_map/src/layer/attribution_layer.dart"];
  var attributionBuilder$ = dart.privateName(attribution_layer, "AttributionWidget.attributionBuilder");
  var alignment$ = dart.privateName(attribution_layer, "AttributionWidget.alignment");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
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
  var Color_value = dart.privateName(ui, "Color.value");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  attribution_layer.AttributionWidget = class AttributionWidget extends framework.StatelessWidget {
    get attributionBuilder() {
      return this[attributionBuilder$];
    }
    set attributionBuilder(value) {
      super.attributionBuilder = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let attributionBuilder = opts && 'attributionBuilder' in opts ? opts.attributionBuilder : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
      return new attribution_layer.AttributionWidget.new({key: key, attributionBuilder: attributionBuilder, alignment: alignment, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    build(context) {
      let t0;
      return new basic.Align.new({alignment: this.alignment, child: (t0 = context, this.attributionBuilder(t0)), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    static defaultWidget(opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let onSourceTapped = opts && 'onSourceTapped' in opts ? opts.onSourceTapped : null;
      let sourceTextStyle = opts && 'sourceTextStyle' in opts ? opts.sourceTextStyle : C[3] || CT.C3;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
      return new basic.Align.new({alignment: alignment, child: new basic.ColoredBox.new({color: C[5] || CT.C5, child: new gesture_detector.GestureDetector.new({onTap: onSourceTapped, child: new basic.Padding.new({padding: C[6] || CT.C6, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidget().of([C[7] || CT.C7, new basic.MouseRegion.new({cursor: onSourceTapped == null ? mouse_cursor.MouseCursor.defer : mouse_cursor.SystemMouseCursors.click, child: new text.Text.new(source, {style: onSourceTapped == null ? null : sourceTextStyle, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10})]), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
  };
  (attribution_layer.AttributionWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let attributionBuilder = opts && 'attributionBuilder' in opts ? opts.attributionBuilder : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[attributionBuilder$] = attributionBuilder;
    this[alignment$] = alignment;
    attribution_layer.AttributionWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = attribution_layer.AttributionWidget.prototype;
  dart.addTypeTests(attribution_layer.AttributionWidget);
  dart.addTypeCaches(attribution_layer.AttributionWidget);
  dart.setMethodSignature(attribution_layer.AttributionWidget, () => ({
    __proto__: dart.getMethods(attribution_layer.AttributionWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(attribution_layer.AttributionWidget, () => ['defaultWidget']);
  dart.setLibraryUri(attribution_layer.AttributionWidget, I[0]);
  dart.setFieldSignature(attribution_layer.AttributionWidget, () => ({
    __proto__: dart.getFields(attribution_layer.AttributionWidget.__proto__),
    attributionBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    alignment: dart.finalFieldType(alignment.Alignment)
  }));
  dart.trackLibraries("packages/flutter_map/src/layer/attribution_layer.dart", {
    "package:flutter_map/src/layer/attribution_layer.dart": attribution_layer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["attribution_layer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASsB;;;;;;IAGJ;;;;;;;;;;;;UAcU;;AACtB,6CAAiB,6BAAqC,OAAO,EAA1B,AAAkB;IAAU;;UAQjD;UACC;UACP;UACA;AAER,6CACa,SAAS,SACb,uDAEE,iDACE,cAAc,SACd,sDAEE,iCACsB,iCACjB,uCAER,mCACU,AAAe,cAAD,WACJ,iCACO,8CAClB,kBACL,MAAM,UACC,AAAe,cAAD,WAAW,OAAO,eAAe;IAQrE;;;QA9CE;QACS;QACT;;IADS;IACT;AACF,uEAAW,GAAG;;EAAC","file":"../../../../../../../../../../../../packages/flutter_map/src/layer/attribution_layer.dart.lib.js"}');
  // Exports:
  return {
    src__layer__attribution_layer: attribution_layer
  };
}));

//# sourceMappingURL=attribution_layer.dart.lib.js.map
