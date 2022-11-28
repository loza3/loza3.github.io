define(['dart_sdk', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/multitap.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/selection.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__rendering__paragraph_dart(dart_sdk, packages__flutter__src__rendering__box$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__multitap$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__selection$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const placeholder_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__placeholder_span;
  const inline_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__inline_span;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const strut_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__strut_style;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const key$ = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const multitap = packages__flutter__src__gestures__multitap$46dart.src__gestures__multitap;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const selection = packages__flutter__src__rendering__selection$46dart.src__rendering__selection;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var paragraph$ = Object.create(dart.library);
  var $join = dartx.join;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $indexOf = dartx.indexOf;
  var $any = dartx.any;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $abs = dartx.abs;
  var $isNotEmpty = dartx.isNotEmpty;
  var $elementAt = dartx.elementAt;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $skip = dartx.skip;
  var $floorToDouble = dartx.floorToDouble;
  var $ceilToDouble = dartx.ceilToDouble;
  var $runtimeType = dartx.runtimeType;
  var $keys = dartx.keys;
  var $remove = dartx.remove;
  var $substring = dartx.substring;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    JSArrayOfTextSelection: () => (T.JSArrayOfTextSelection = dart.constFn(_interceptors.JSArray$(text_editing.TextSelection)))(),
    JSArrayOf_SelectableFragment: () => (T.JSArrayOf_SelectableFragment = dart.constFn(_interceptors.JSArray$(paragraph$._SelectableFragment)))(),
    _SelectableFragmentTovoid: () => (T._SelectableFragmentTovoid = dart.constFn(dart.fnType(dart.void, [paragraph$._SelectableFragment])))(),
    JSArrayOfPlaceholderSpan: () => (T.JSArrayOfPlaceholderSpan = dart.constFn(_interceptors.JSArray$(placeholder_span.PlaceholderSpan)))(),
    InlineSpanTobool: () => (T.InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))(),
    _SelectableFragmentTobool: () => (T._SelectableFragmentTobool = dart.constFn(dart.fnType(core.bool, [paragraph$._SelectableFragment])))(),
    ListOfPlaceholderDimensions: () => (T.ListOfPlaceholderDimensions = dart.constFn(core.List$(text_painter.PlaceholderDimensions)))(),
    HitTestEntryOfHitTestTarget: () => (T.HitTestEntryOfHitTestTarget = dart.constFn(hit_test.HitTestEntry$(hit_test.HitTestTarget)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    JSArrayOfPlaceholderDimensions: () => (T.JSArrayOfPlaceholderDimensions = dart.constFn(_interceptors.JSArray$(text_painter.PlaceholderDimensions)))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    PaintingContextAndOffsetTovoid: () => (T.PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))(),
    InlineSpanSemanticsInformationTobool: () => (T.InlineSpanSemanticsInformationTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpanSemanticsInformation])))(),
    JSArrayOfStringAttribute: () => (T.JSArrayOfStringAttribute = dart.constFn(_interceptors.JSArray$(ui.StringAttribute)))(),
    JSArrayOfSemanticsNode: () => (T.JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))(),
    LinkedMapOfKey$SemanticsNode: () => (T.LinkedMapOfKey$SemanticsNode = dart.constFn(_js_helper.LinkedMap$(key$.Key, semantics.SemanticsNode)))(),
    VoidToSemanticsNode: () => (T.VoidToSemanticsNode = dart.constFn(dart.fnType(semantics.SemanticsNode, [])))(),
    SemanticsNodeTodynamic: () => (T.SemanticsNodeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [semantics.SemanticsNode])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    EnumPropertyOfTextAlign: () => (T.EnumPropertyOfTextAlign = dart.constFn(diagnostics.EnumProperty$(ui.TextAlign)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    EnumPropertyOfTextOverflow: () => (T.EnumPropertyOfTextOverflow = dart.constFn(diagnostics.EnumProperty$(text_painter.TextOverflow)))(),
    DiagnosticsPropertyOfLocale: () => (T.DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))(),
    VoidToSelectionResult: () => (T.VoidToSelectionResult = dart.constFn(dart.fnType(selection.SelectionResult, [])))(),
    SelectionResultTodynamic: () => (T.SelectionResultTodynamic = dart.constFn(dart.fnType(dart.dynamic, [selection.SelectionResult])))(),
    VoidToTextPosition: () => (T.VoidToTextPosition = dart.constFn(dart.fnType(ui.TextPosition, [])))(),
    TextPositionTodynamic: () => (T.TextPositionTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ui.TextPosition])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 4
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "clip",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_Enum__name]: "parent",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "identical",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "metadata",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "paint",
        [_Enum_index]: 2
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "layout",
        [_Enum_index]: 3
      });
    },
    get C7() {
      return C[7] = dart.constList([], text_editing.TextSelection);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "baseline",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "aboveBaseline",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "belowBaseline",
        [_Enum_index]: 2
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "top",
        [_Enum_index]: 3
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "middle",
        [_Enum_index]: 5
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "bottom",
        [_Enum_index]: 4
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "visible",
        [_Enum_index]: 3
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "ellipsis",
        [_Enum_index]: 2
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 16777215
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "fade",
        [_Enum_index]: 1
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: selection.SelectionStatus.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 2
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: selection.SelectionGeometry.prototype,
        [SelectionGeometry_hasContent]: true,
        [SelectionGeometry_status]: C[24] || CT.C24,
        [SelectionGeometry_endSelectionPoint]: null,
        [SelectionGeometry_startSelectionPoint]: null
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: selection.SelectionEventType.prototype,
        [_Enum__name]: "startEdgeUpdate",
        [_Enum_index]: 0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: selection.SelectionEventType.prototype,
        [_Enum__name]: "endEdgeUpdate",
        [_Enum_index]: 1
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: selection.SelectionEventType.prototype,
        [_Enum__name]: "clear",
        [_Enum_index]: 2
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: selection.SelectionEventType.prototype,
        [_Enum__name]: "selectAll",
        [_Enum_index]: 3
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: selection.SelectionEventType.prototype,
        [_Enum__name]: "selectWord",
        [_Enum_index]: 4
      });
    }
  }, false);
  var C = Array(30).fill(void 0);
  var I = [
    "package:flutter/src/rendering/paragraph.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/paragraph.dart"
  ];
  var scale = dart.privateName(paragraph$, "TextParentData.scale");
  paragraph$.TextParentData = class TextParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    get scale() {
      return this[scale];
    }
    set scale(value) {
      this[scale] = value;
    }
    toString() {
      let values = (() => {
        let t0 = T.JSArrayOfString().of(["offset=" + dart.str(this.offset)]);
        if (this.scale != null) t0.push("scale=" + dart.str(this.scale));
        t0.push(super.toString());
        return t0;
      })();
      return values[$join]("; ");
    }
    static ['_#new#tearOff']() {
      return new paragraph$.TextParentData.new();
    }
  };
  (paragraph$.TextParentData.new = function() {
    this[scale] = null;
    paragraph$.TextParentData.__proto__.new.call(this);
    ;
  }).prototype = paragraph$.TextParentData.prototype;
  dart.addTypeTests(paragraph$.TextParentData);
  dart.addTypeCaches(paragraph$.TextParentData);
  dart.setLibraryUri(paragraph$.TextParentData, I[0]);
  dart.setFieldSignature(paragraph$.TextParentData, () => ({
    __proto__: dart.getFields(paragraph$.TextParentData.__proto__),
    scale: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(paragraph$.TextParentData, ['toString']);
  var index$ = dart.privateName(paragraph$, "PlaceholderSpanIndexSemanticsTag.index");
  paragraph$.PlaceholderSpanIndexSemanticsTag = class PlaceholderSpanIndexSemanticsTag extends semantics.SemanticsTag {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    static ['_#new#tearOff'](index) {
      return new paragraph$.PlaceholderSpanIndexSemanticsTag.new(index);
    }
    _equals(other) {
      if (other == null) return false;
      return paragraph$.PlaceholderSpanIndexSemanticsTag.is(other) && other.index === this.index;
    }
    get hashCode() {
      return core.Object.hash(dart.wrapType(paragraph$.PlaceholderSpanIndexSemanticsTag), this.index);
    }
  };
  (paragraph$.PlaceholderSpanIndexSemanticsTag.new = function(index) {
    this[index$] = index;
    paragraph$.PlaceholderSpanIndexSemanticsTag.__proto__.new.call(this, "PlaceholderSpanIndexSemanticsTag(" + dart.str(index) + ")");
    ;
  }).prototype = paragraph$.PlaceholderSpanIndexSemanticsTag.prototype;
  dart.addTypeTests(paragraph$.PlaceholderSpanIndexSemanticsTag);
  dart.addTypeCaches(paragraph$.PlaceholderSpanIndexSemanticsTag);
  dart.setLibraryUri(paragraph$.PlaceholderSpanIndexSemanticsTag, I[0]);
  dart.setFieldSignature(paragraph$.PlaceholderSpanIndexSemanticsTag, () => ({
    __proto__: dart.getFields(paragraph$.PlaceholderSpanIndexSemanticsTag.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(paragraph$.PlaceholderSpanIndexSemanticsTag, ['_equals']);
  dart.defineExtensionAccessors(paragraph$.PlaceholderSpanIndexSemanticsTag, ['hashCode']);
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _cachedAttributedLabel = dart.privateName(paragraph$, "_cachedAttributedLabel");
  var _cachedCombinedSemanticsInfos = dart.privateName(paragraph$, "_cachedCombinedSemanticsInfos");
  var _lastSelectableFragments = dart.privateName(paragraph$, "_lastSelectableFragments");
  var _registrar = dart.privateName(paragraph$, "_registrar");
  var __RenderParagraph__placeholderSpans = dart.privateName(paragraph$, "_#RenderParagraph#_placeholderSpans");
  var _needsClipping = dart.privateName(paragraph$, "_needsClipping");
  var _overflowShader = dart.privateName(paragraph$, "_overflowShader");
  var _placeholderDimensions = dart.privateName(paragraph$, "_placeholderDimensions");
  var _semanticsInfo = dart.privateName(paragraph$, "_semanticsInfo");
  var _cachedChildNodes = dart.privateName(paragraph$, "_cachedChildNodes");
  var _softWrap = dart.privateName(paragraph$, "_softWrap");
  var _overflow = dart.privateName(paragraph$, "_overflow");
  var _selectionColor = dart.privateName(paragraph$, "_selectionColor");
  var _textPainter = dart.privateName(paragraph$, "_textPainter");
  var _extractPlaceholderSpans = dart.privateName(paragraph$, "_extractPlaceholderSpans");
  var _removeSelectionRegistrarSubscription = dart.privateName(paragraph$, "_removeSelectionRegistrarSubscription");
  var _disposeSelectableFragments = dart.privateName(paragraph$, "_disposeSelectableFragments");
  var _updateSelectionRegistrarSubscription = dart.privateName(paragraph$, "_updateSelectionRegistrarSubscription");
  var _textSelectionStart = dart.privateName(paragraph$, "_textSelectionStart");
  var _textSelectionEnd = dart.privateName(paragraph$, "_textSelectionEnd");
  var _getSelectableFragments = dart.privateName(paragraph$, "_getSelectableFragments");
  var _placeholderSpans = dart.privateName(paragraph$, "_placeholderSpans");
  var _getOffsetForPosition = dart.privateName(paragraph$, "_getOffsetForPosition");
  var _canComputeIntrinsics = dart.privateName(paragraph$, "_canComputeIntrinsics");
  var _computeChildrenWidthWithMinIntrinsics = dart.privateName(paragraph$, "_computeChildrenWidthWithMinIntrinsics");
  var _layoutText = dart.privateName(paragraph$, "_layoutText");
  var _computeChildrenWidthWithMaxIntrinsics = dart.privateName(paragraph$, "_computeChildrenWidthWithMaxIntrinsics");
  var _computeChildrenHeightWithMinIntrinsics = dart.privateName(paragraph$, "_computeChildrenHeightWithMinIntrinsics");
  var _computeIntrinsicHeight = dart.privateName(paragraph$, "_computeIntrinsicHeight");
  var _layoutTextWithConstraints = dart.privateName(paragraph$, "_layoutTextWithConstraints");
  var _layoutChildren = dart.privateName(paragraph$, "_layoutChildren");
  var _setParentData = dart.privateName(paragraph$, "_setParentData");
  var _canComputeDryLayout = dart.privateName(paragraph$, "_canComputeDryLayout");
  var Color_value = dart.privateName(ui, "Color.value");
  var _createShowOnScreenFor = dart.privateName(paragraph$, "_createShowOnScreenFor");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, paragraph$.TextParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, paragraph$.TextParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, paragraph$.TextParentData));
  const RenderBox_RelayoutWhenSystemFontsChangeMixin$36 = class RenderBox_RelayoutWhenSystemFontsChangeMixin extends RenderBox_RenderBoxContainerDefaultsMixin$36 {};
  (RenderBox_RelayoutWhenSystemFontsChangeMixin$36.new = function() {
    RenderBox_RelayoutWhenSystemFontsChangeMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RelayoutWhenSystemFontsChangeMixin$36.prototype;
  dart.applyMixin(RenderBox_RelayoutWhenSystemFontsChangeMixin$36, object.RelayoutWhenSystemFontsChangeMixin);
  paragraph$.RenderParagraph = class RenderParagraph extends RenderBox_RelayoutWhenSystemFontsChangeMixin$36 {
    static ['_#new#tearOff'](text, opts) {
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[0] || CT.C0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let softWrap = opts && 'softWrap' in opts ? opts.softWrap : true;
      let overflow = opts && 'overflow' in opts ? opts.overflow : C[1] || CT.C1;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[2] || CT.C2;
      let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let selectionColor = opts && 'selectionColor' in opts ? opts.selectionColor : null;
      let registrar = opts && 'registrar' in opts ? opts.registrar : null;
      return new paragraph$.RenderParagraph.new(text, {textAlign: textAlign, textDirection: textDirection, softWrap: softWrap, overflow: overflow, textScaleFactor: textScaleFactor, maxLines: maxLines, locale: locale, strutStyle: strutStyle, textWidthBasis: textWidthBasis, textHeightBehavior: textHeightBehavior, children: children, selectionColor: selectionColor, registrar: registrar});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!paragraph$.TextParentData.is(child.parentData)) {
        child.parentData = new paragraph$.TextParentData.new();
      }
    }
    get text() {
      return dart.nullCheck(this[_textPainter].text);
    }
    set text(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 133, 12, "value != null");
      switch (dart.nullCheck(this[_textPainter].text).compareTo(value)) {
        case C[3] || CT.C3:
        case C[4] || CT.C4:
          {
            return;
          }
        case C[5] || CT.C5:
          {
            this[_textPainter].text = value;
            this[_cachedAttributedLabel] = null;
            this[_cachedCombinedSemanticsInfos] = null;
            this[_extractPlaceholderSpans](value);
            this.markNeedsPaint();
            this.markNeedsSemanticsUpdate();
            break;
          }
        case C[6] || CT.C6:
          {
            this[_textPainter].text = value;
            this[_overflowShader] = null;
            this[_cachedAttributedLabel] = null;
            this[_cachedCombinedSemanticsInfos] = null;
            this[_extractPlaceholderSpans](value);
            this.markNeedsLayout();
            break;
          }
      }
      this[_removeSelectionRegistrarSubscription]();
      this[_disposeSelectableFragments]();
      this[_updateSelectionRegistrarSubscription]();
    }
    get selections() {
      if (this[_lastSelectableFragments] == null) {
        return C[7] || CT.C7;
      }
      let results = T.JSArrayOfTextSelection().of([]);
      for (let fragment of dart.nullCheck(this[_lastSelectableFragments])) {
        if (fragment[_textSelectionStart] != null && fragment[_textSelectionEnd] != null && dart.nullCheck(fragment[_textSelectionStart]).offset !== dart.nullCheck(fragment[_textSelectionEnd]).offset) {
          results[$add](new text_editing.TextSelection.new({baseOffset: dart.nullCheck(fragment[_textSelectionStart]).offset, extentOffset: dart.nullCheck(fragment[_textSelectionEnd]).offset}));
        }
      }
      return results;
    }
    get registrar() {
      return this[_registrar];
    }
    set registrar(value) {
      if (dart.equals(value, this[_registrar])) {
        return;
      }
      this[_removeSelectionRegistrarSubscription]();
      this[_disposeSelectableFragments]();
      this[_registrar] = value;
      this[_updateSelectionRegistrarSubscription]();
    }
    [_updateSelectionRegistrarSubscription]() {
      if (this[_registrar] == null) {
        return;
      }
      this[_lastSelectableFragments] == null ? this[_lastSelectableFragments] = this[_getSelectableFragments]() : null;
      dart.nullCheck(this[_lastSelectableFragments])[$forEach](dart.bind(dart.nullCheck(this[_registrar]), 'add'));
    }
    [_removeSelectionRegistrarSubscription]() {
      if (this[_registrar] == null || this[_lastSelectableFragments] == null) {
        return;
      }
      dart.nullCheck(this[_lastSelectableFragments])[$forEach](dart.bind(dart.nullCheck(this[_registrar]), 'remove'));
    }
    [_getSelectableFragments]() {
      let plainText = this.text.toPlainText({includeSemanticsLabels: false});
      let result = T.JSArrayOf_SelectableFragment().of([]);
      let start = 0;
      while (start < plainText.length) {
        let end = plainText[$indexOf](paragraph$.RenderParagraph._placeholderCharacter, start);
        if (start !== end) {
          if (end === -1) {
            end = plainText.length;
          }
          result[$add](new paragraph$._SelectableFragment.new({paragraph: this, range: new ui.TextRange.new({start: start, end: end})}));
          start = end;
        }
        start = start + 1;
      }
      return result;
    }
    [_disposeSelectableFragments]() {
      if (this[_lastSelectableFragments] == null) {
        return;
      }
      for (let fragment of dart.nullCheck(this[_lastSelectableFragments])) {
        fragment.dispose();
      }
      this[_lastSelectableFragments] = null;
    }
    markNeedsLayout() {
      let t1;
      t1 = this[_lastSelectableFragments];
      t1 == null ? null : t1[$forEach](dart.fn(element => element.didChangeParagraphLayout(), T._SelectableFragmentTovoid()));
      super.markNeedsLayout();
    }
    dispose() {
      this[_removeSelectionRegistrarSubscription]();
      this[_lastSelectableFragments] = null;
      super.dispose();
    }
    get [_placeholderSpans]() {
      let t1;
      t1 = this[__RenderParagraph__placeholderSpans];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_placeholderSpans")) : t1;
    }
    set [_placeholderSpans](library$32package$58flutter$47src$47rendering$47paragraph$46dart$58$58_placeholderSpans$35param) {
      this[__RenderParagraph__placeholderSpans] = library$32package$58flutter$47src$47rendering$47paragraph$46dart$58$58_placeholderSpans$35param;
    }
    [_extractPlaceholderSpans](span) {
      this[_placeholderSpans] = T.JSArrayOfPlaceholderSpan().of([]);
      span.visitChildren(dart.fn(span => {
        if (placeholder_span.PlaceholderSpan.is(span)) {
          this[_placeholderSpans][$add](span);
        }
        return true;
      }, T.InlineSpanTobool()));
    }
    get textAlign() {
      return this[_textPainter].textAlign;
    }
    set textAlign(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 275, 12, "value != null");
      if (this[_textPainter].textAlign === value) {
        return;
      }
      this[_textPainter].textAlign = value;
      this.markNeedsPaint();
    }
    get textDirection() {
      return dart.nullCheck(this[_textPainter].textDirection);
    }
    set textDirection(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 298, 12, "value != null");
      if (this[_textPainter].textDirection === value) {
        return;
      }
      this[_textPainter].textDirection = value;
      this.markNeedsLayout();
    }
    get softWrap() {
      return this[_softWrap];
    }
    set softWrap(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 316, 12, "value != null");
      if (this[_softWrap] === value) {
        return;
      }
      this[_softWrap] = value;
      this.markNeedsLayout();
    }
    get overflow() {
      return this[_overflow];
    }
    set overflow(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 328, 12, "value != null");
      if (this[_overflow] === value) {
        return;
      }
      this[_overflow] = value;
      this[_textPainter].ellipsis = value === text_painter.TextOverflow.ellipsis ? "…" : null;
      this.markNeedsLayout();
    }
    get textScaleFactor() {
      return this[_textPainter].textScaleFactor;
    }
    set textScaleFactor(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 343, 12, "value != null");
      if (this[_textPainter].textScaleFactor === value) {
        return;
      }
      this[_textPainter].textScaleFactor = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get maxLines() {
      return this[_textPainter].maxLines;
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, I[1], 359, 12, "value == null || value > 0");
      if (this[_textPainter].maxLines == value) {
        return;
      }
      this[_textPainter].maxLines = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get locale() {
      return this[_textPainter].locale;
    }
    set locale(value) {
      if (dart.equals(this[_textPainter].locale, value)) {
        return;
      }
      this[_textPainter].locale = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get strutStyle() {
      return this[_textPainter].strutStyle;
    }
    set strutStyle(value) {
      if (dart.equals(this[_textPainter].strutStyle, value)) {
        return;
      }
      this[_textPainter].strutStyle = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get textWidthBasis() {
      return this[_textPainter].textWidthBasis;
    }
    set textWidthBasis(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 401, 12, "value != null");
      if (this[_textPainter].textWidthBasis === value) {
        return;
      }
      this[_textPainter].textWidthBasis = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get textHeightBehavior() {
      return this[_textPainter].textHeightBehavior;
    }
    set textHeightBehavior(value) {
      if (dart.equals(this[_textPainter].textHeightBehavior, value)) {
        return;
      }
      this[_textPainter].textHeightBehavior = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get selectionColor() {
      return this[_selectionColor];
    }
    set selectionColor(value) {
      let t1, t1$;
      if (dart.equals(this[_selectionColor], value)) {
        return;
      }
      this[_selectionColor] = value;
      if (dart.test((t1$ = (t1 = this[_lastSelectableFragments], t1 == null ? null : t1[$any](dart.fn(fragment => fragment.value.hasSelection, T._SelectableFragmentTobool()))), t1$ == null ? false : t1$))) {
        this.markNeedsPaint();
      }
    }
    [_getOffsetForPosition](position) {
      let t1;
      return this.getOffsetForCaret(position, ui.Rect.zero)['+'](new ui.Offset.new(0.0, (t1 = this.getFullHeightForCaret(position), t1 == null ? 0.0 : t1)));
    }
    computeMinIntrinsicWidth(height) {
      if (!this[_canComputeIntrinsics]()) {
        return 0.0;
      }
      this[_computeChildrenWidthWithMinIntrinsics](height);
      this[_layoutText]();
      return this[_textPainter].minIntrinsicWidth;
    }
    computeMaxIntrinsicWidth(height) {
      if (!this[_canComputeIntrinsics]()) {
        return 0.0;
      }
      this[_computeChildrenWidthWithMaxIntrinsics](height);
      this[_layoutText]();
      return this[_textPainter].maxIntrinsicWidth;
    }
    [_computeIntrinsicHeight](width) {
      if (!this[_canComputeIntrinsics]()) {
        return 0.0;
      }
      this[_computeChildrenHeightWithMinIntrinsics](width);
      this[_layoutText]({minWidth: width, maxWidth: width});
      return this[_textPainter].height;
    }
    computeMinIntrinsicHeight(width) {
      return this[_computeIntrinsicHeight](width);
    }
    computeMaxIntrinsicHeight(width) {
      return this[_computeIntrinsicHeight](width);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 479, 12, "!debugNeedsLayout");
      if (!(this.constraints !== null)) dart.assertFailed(null, I[1], 480, 12, "constraints != null");
      if (!this.constraints.debugAssertIsValid()) dart.assertFailed(null, I[1], 481, 12, "constraints.debugAssertIsValid()");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].computeDistanceToActualBaseline(ui.TextBaseline.alphabetic);
    }
    [_canComputeIntrinsics]() {
      for (let span of this[_placeholderSpans]) {
        switch (span.alignment) {
          case C[8] || CT.C8:
          case C[9] || CT.C9:
          case C[10] || CT.C10:
            {
              {
                if (!object.RenderObject.debugCheckingIntrinsics) dart.assertFailed("Intrinsics are not available for PlaceholderAlignment.baseline, " + "PlaceholderAlignment.aboveBaseline, or PlaceholderAlignment.belowBaseline.", I[1], 502, 13, "RenderObject.debugCheckingIntrinsics");
                return false;
              }
            }
          case C[11] || CT.C11:
          case C[12] || CT.C12:
          case C[13] || CT.C13:
            {
              {
                continue;
              }
            }
        }
      }
      return true;
    }
    [_computeChildrenWidthWithMaxIntrinsics](height) {
      let child = this.firstChild;
      let placeholderDimensions = T.ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty);
      let childIndex = 0;
      while (child != null) {
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(child.getMaxIntrinsicWidth(1 / 0), 0.0), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeChildrenWidthWithMinIntrinsics](height) {
      let child = this.firstChild;
      let placeholderDimensions = T.ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty);
      let childIndex = 0;
      while (child != null) {
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(child.getMinIntrinsicWidth(1 / 0), 0.0), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeChildrenHeightWithMinIntrinsics](width) {
      let child = this.firstChild;
      let placeholderDimensions = T.ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty);
      let childIndex = 0;
      width = width / this.textScaleFactor;
      while (child != null) {
        let size = child.getDryLayout(new box.BoxConstraints.new({maxWidth: width}));
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: size, alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    hitTestSelf(position) {
      return true;
    }
    hitTestChildren(result, opts) {
      let t1;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitText = false;
      let textPosition = this[_textPainter].getPositionForOffset(position);
      let span = dart.nullCheck(this[_textPainter].text).getSpanForPosition(textPosition);
      if (span != null && hit_test.HitTestTarget.is(span)) {
        result.add(new (T.HitTestEntryOfHitTestTarget()).new(hit_test.HitTestTarget.as(span)));
        hitText = true;
      }
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length]) {
        let textParentData = paragraph$.TextParentData.as(dart.nullCheck(child.parentData));
        let transform = (t1 = vector_math_64.Matrix4.translationValues(textParentData.offset.dx, textParentData.offset.dy, 0.0), (() => {
          t1.scale(textParentData.scale, textParentData.scale, textParentData.scale);
          return t1;
        })());
        let isHit = result.addWithPaintTransform({transform: transform, position: position, hitTest: dart.fn((result, transformed) => {
            if (!dart.fn(() => {
              let manualPosition = position['-'](textParentData.offset)['/'](dart.nullCheck(textParentData.scale));
              return (transformed.dx - manualPosition.dx)[$abs]() < 1e-10 && (transformed.dy - manualPosition.dy)[$abs]() < 1e-10;
            }, T.VoidTobool())()) dart.assertFailed(null, I[1], 606, 18, "() {\n            final Offset manualPosition = (position - textParentData.offset) / textParentData.scale!;\n            return (transformed.dx - manualPosition.dx).abs() < precisionErrorTolerance\n              && (transformed.dy - manualPosition.dy).abs() < precisionErrorTolerance;\n          }()");
            return dart.nullCheck(child).hitTest(result, {position: transformed});
          }, T.BoxHitTestResultAndOffsetTobool())});
        if (isHit) {
          return true;
        }
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      return hitText;
    }
    get debugHasOverflowShader() {
      return this[_overflowShader] != null;
    }
    [_layoutText](opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      let widthMatters = this.softWrap || this.overflow === text_painter.TextOverflow.ellipsis;
      this[_textPainter].layout({minWidth: minWidth, maxWidth: widthMatters ? maxWidth : 1 / 0});
    }
    systemFontsDidChange() {
      super.systemFontsDidChange();
      this[_textPainter].markNeedsLayout();
    }
    [_layoutTextWithConstraints](constraints) {
      this[_textPainter].setPlaceholderDimensions(this[_placeholderDimensions]);
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
    }
    [_layoutChildren](constraints, opts) {
      let dry = opts && 'dry' in opts ? opts.dry : false;
      if (this.childCount === 0) {
        return T.JSArrayOfPlaceholderDimensions().of([]);
      }
      let child = this.firstChild;
      let placeholderDimensions = T.ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty);
      let childIndex = 0;
      let boxConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
      boxConstraints = boxConstraints['/'](this.textScaleFactor);
      while (child != null) {
        let baselineOffset = null;
        let childSize = null;
        if (!dry) {
          child.layout(boxConstraints, {parentUsesSize: true});
          childSize = child.size;
          switch (this[_placeholderSpans][$_get](childIndex).alignment) {
            case C[8] || CT.C8:
              {
                baselineOffset = child.getDistanceToBaseline(dart.nullCheck(this[_placeholderSpans][$_get](childIndex).baseline));
                break;
              }
            case C[9] || CT.C9:
            case C[10] || CT.C10:
            case C[13] || CT.C13:
            case C[12] || CT.C12:
            case C[11] || CT.C11:
              {
                baselineOffset = null;
                break;
              }
          }
        } else {
          if (!(this[_placeholderSpans][$_get](childIndex).alignment !== ui.PlaceholderAlignment.baseline)) dart.assertFailed(null, I[1], 703, 16, "_placeholderSpans[childIndex].alignment != ui.PlaceholderAlignment.baseline");
          childSize = child.getDryLayout(boxConstraints);
        }
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: childSize, alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline, baselineOffset: baselineOffset}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      return placeholderDimensions;
    }
    [_setParentData]() {
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length]) {
        let textParentData = paragraph$.TextParentData.as(dart.nullCheck(child.parentData));
        textParentData.offset = new ui.Offset.new(dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$_get](childIndex).left, dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$_get](childIndex).top);
        textParentData.scale = dart.nullCheck(this[_textPainter].inlinePlaceholderScales)[$_get](childIndex);
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
    }
    [_canComputeDryLayout]() {
      for (let span of this[_placeholderSpans]) {
        switch (span.alignment) {
          case C[8] || CT.C8:
          case C[9] || CT.C9:
          case C[10] || CT.C10:
            {
              return false;
            }
          case C[11] || CT.C11:
          case C[12] || CT.C12:
          case C[13] || CT.C13:
            {
              continue;
            }
        }
      }
      return true;
    }
    computeDryLayout(constraints) {
      if (!this[_canComputeDryLayout]()) {
        if (!this.debugCannotComputeDryLayout({reason: "Dry layout not available for alignments that require baseline."})) dart.assertFailed(null, I[1], 757, 14, "debugCannotComputeDryLayout(\n        reason: 'Dry layout not available for alignments that require baseline.',\n      )");
        return ui.Size.zero;
      }
      this[_textPainter].setPlaceholderDimensions(this[_layoutChildren](constraints, {dry: true}));
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
      return constraints.constrain(this[_textPainter].size);
    }
    performLayout() {
      let t1;
      let constraints = this.constraints;
      this[_placeholderDimensions] = this[_layoutChildren](constraints);
      this[_layoutTextWithConstraints](constraints);
      this[_setParentData]();
      let textSize = this[_textPainter].size;
      let textDidExceedMaxLines = this[_textPainter].didExceedMaxLines;
      this.size = constraints.constrain(textSize);
      let didOverflowHeight = this.size.height < textSize.height || textDidExceedMaxLines;
      let didOverflowWidth = this.size.width < textSize.width;
      let hasVisualOverflow = didOverflowWidth || didOverflowHeight;
      if (hasVisualOverflow) {
        switch (this[_overflow]) {
          case C[14] || CT.C14:
            {
              this[_needsClipping] = false;
              this[_overflowShader] = null;
              break;
            }
          case C[1] || CT.C1:
          case C[15] || CT.C15:
            {
              this[_needsClipping] = true;
              this[_overflowShader] = null;
              break;
            }
          case C[20] || CT.C20:
            {
              if (!(this.textDirection !== null)) dart.assertFailed(null, I[1], 803, 18, "textDirection != null");
              this[_needsClipping] = true;
              let fadeSizePainter = (t1 = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({style: dart.nullCheck(this[_textPainter].text).style, text: "…"}), textDirection: this.textDirection, textScaleFactor: this.textScaleFactor, locale: this.locale}), (() => {
                t1.layout();
                return t1;
              })());
              if (didOverflowWidth) {
                let fadeEnd = null;
                let fadeStart = null;
                switch (this.textDirection) {
                  case C[16] || CT.C16:
                    {
                      fadeEnd = 0.0;
                      fadeStart = fadeSizePainter.width;
                      break;
                    }
                  case C[17] || CT.C17:
                    {
                      fadeEnd = this.size.width;
                      fadeStart = fadeEnd - fadeSizePainter.width;
                      break;
                    }
                }
                this[_overflowShader] = ui.Gradient.linear(new ui.Offset.new(fadeStart, 0.0), new ui.Offset.new(fadeEnd, 0.0), T.JSArrayOfColor().of([C[18] || CT.C18, C[19] || CT.C19]));
              } else {
                let fadeEnd = this.size.height;
                let fadeStart = fadeEnd - fadeSizePainter.height / 2.0;
                this[_overflowShader] = ui.Gradient.linear(new ui.Offset.new(0.0, fadeStart), new ui.Offset.new(0.0, fadeEnd), T.JSArrayOfColor().of([C[18] || CT.C18, C[19] || CT.C19]));
              }
              break;
            }
        }
      } else {
        this[_needsClipping] = false;
        this[_overflowShader] = null;
      }
    }
    paint(context, offset) {
      let t1;
      this[_layoutTextWithConstraints](this.constraints);
      if (!dart.fn(() => {
        let t1;
        if (debug.debugRepaintTextRainbowEnabled) {
          let paint = (t1 = ui.Paint.new(), (() => {
            t1.color = debug.debugCurrentRepaintColor.toColor();
            return t1;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 859, 12, "() {\n      if (debugRepaintTextRainbowEnabled) {\n        final Paint paint = Paint()\n          ..color = debugCurrentRepaintColor.toColor();\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
      if (this[_needsClipping]) {
        let bounds = offset['&'](this.size);
        if (this[_overflowShader] != null) {
          context.canvas.saveLayer(bounds, ui.Paint.new());
        } else {
          context.canvas.save();
        }
        context.canvas.clipRect(bounds);
      }
      this[_textPainter].paint(context.canvas, offset);
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length]) {
        let textParentData = paragraph$.TextParentData.as(dart.nullCheck(child.parentData));
        let scale = dart.nullCheck(textParentData.scale);
        context.pushTransform(this.needsCompositing, offset['+'](textParentData.offset), vector_math_64.Matrix4.diagonal3Values(scale, scale, scale), dart.fn((context, offset) => {
          context.paintChild(dart.nullCheck(child), offset);
        }, T.PaintingContextAndOffsetTovoid()));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      if (this[_needsClipping]) {
        if (this[_overflowShader] != null) {
          context.canvas.translate(offset.dx, offset.dy);
          let paint = (t1 = ui.Paint.new(), (() => {
            t1.blendMode = ui.BlendMode.modulate;
            t1.shader = this[_overflowShader];
            return t1;
          })());
          context.canvas.drawRect(ui.Offset.zero['&'](this.size), paint);
        }
        context.canvas.restore();
      }
      if (this[_lastSelectableFragments] != null) {
        for (let fragment of dart.nullCheck(this[_lastSelectableFragments])) {
          fragment.paint(context, offset);
        }
      }
      super.paint(context, offset);
    }
    getOffsetForCaret(position, caretPrototype) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 927, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getOffsetForCaret(position, caretPrototype);
    }
    getFullHeightForCaret(position) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 936, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getFullHeightForCaret(position, ui.Rect.zero);
    }
    getBoxesForSelection(selection, opts) {
      let boxHeightStyle = opts && 'boxHeightStyle' in opts ? opts.boxHeightStyle : C[21] || CT.C21;
      let boxWidthStyle = opts && 'boxWidthStyle' in opts ? opts.boxWidthStyle : C[22] || CT.C22;
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 963, 12, "!debugNeedsLayout");
      if (!(boxHeightStyle !== null)) dart.assertFailed(null, I[1], 964, 12, "boxHeightStyle != null");
      if (!(boxWidthStyle !== null)) dart.assertFailed(null, I[1], 965, 12, "boxWidthStyle != null");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getBoxesForSelection(selection, {boxHeightStyle: boxHeightStyle, boxWidthStyle: boxWidthStyle});
    }
    getPositionForOffset(offset) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 978, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getPositionForOffset(offset);
    }
    getWordBoundary(position) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 993, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getWordBoundary(position);
    }
    get textSize() {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 1008, 12, "!debugNeedsLayout");
      return this[_textPainter].size;
    }
    describeSemanticsConfiguration(config) {
      let t1;
      super.describeSemanticsConfiguration(config);
      this[_semanticsInfo] = this.text.getSemanticsInformation();
      if (dart.nullCheck(this[_semanticsInfo])[$any](dart.fn(info => info.recognizer != null, T.InlineSpanSemanticsInformationTobool()))) {
        config.explicitChildNodes = true;
        config.isSemanticBoundary = true;
      } else {
        if (this[_cachedAttributedLabel] == null) {
          let buffer = new core.StringBuffer.new();
          let offset = 0;
          let attributes = T.JSArrayOfStringAttribute().of([]);
          for (let info of dart.nullCheck(this[_semanticsInfo])) {
            let label = (t1 = info.semanticsLabel, t1 == null ? info.text : t1);
            for (let infoAttribute of info.stringAttributes) {
              let originalRange = infoAttribute.range;
              attributes[$add](infoAttribute.copy({range: new ui.TextRange.new({start: offset + originalRange.start, end: offset + originalRange.end})}));
            }
            buffer.write(label);
            offset = offset + label.length;
          }
          this[_cachedAttributedLabel] = new semantics.AttributedString.new(buffer.toString(), {attributes: attributes});
        }
        config.attributedLabel = dart.nullCheck(this[_cachedAttributedLabel]);
        config.textDirection = this.textDirection;
      }
    }
    assembleSemanticsNode(node, config, children) {
      let t2, t2$, t1, t4, t4$, t4$0;
      if (!(this[_semanticsInfo] != null && dart.nullCheck(this[_semanticsInfo])[$isNotEmpty])) dart.assertFailed(null, I[1], 1058, 12, "_semanticsInfo != null && _semanticsInfo!.isNotEmpty");
      let newChildren = T.JSArrayOfSemanticsNode().of([]);
      let currentDirection = this.textDirection;
      let currentRect = null;
      let ordinal = 0.0;
      let start = 0;
      let placeholderIndex = 0;
      let childIndex = 0;
      let child = this.firstChild;
      let newChildCache = new (T.LinkedMapOfKey$SemanticsNode()).new();
      this[_cachedCombinedSemanticsInfos] == null ? this[_cachedCombinedSemanticsInfos] = inline_span.combineSemanticsInfo(dart.nullCheck(this[_semanticsInfo])) : null;
      for (let info of dart.nullCheck(this[_cachedCombinedSemanticsInfos])) {
        let selection = new text_editing.TextSelection.new({baseOffset: start, extentOffset: start + info.text.length});
        start = start + info.text.length;
        if (info.isPlaceholder) {
          while (children[$length] > childIndex && children[$elementAt](childIndex).isTagged(new paragraph$.PlaceholderSpanIndexSemanticsTag.new(placeholderIndex))) {
            let childNode = children[$elementAt](childIndex);
            let parentData = paragraph$.TextParentData.as(dart.nullCheck(dart.nullCheck(child).parentData));
            if (!(parentData.scale != null || parentData.offset._equals(ui.Offset.zero))) dart.assertFailed(null, I[1], 1083, 18, "parentData.scale != null || parentData.offset == Offset.zero");
            if (parentData.scale != null) {
              childNode.rect = new ui.Rect.fromLTWH(childNode.rect.left, childNode.rect.top, childNode.rect.width * dart.nullCheck(parentData.scale), childNode.rect.height * dart.nullCheck(parentData.scale));
              newChildren[$add](childNode);
            }
            childIndex = childIndex + 1;
          }
          child = this.childAfter(dart.nullCheck(child));
          placeholderIndex = placeholderIndex + 1;
        } else {
          let initialDirection = currentDirection;
          let rects = this.getBoxesForSelection(selection);
          if (rects[$isEmpty]) {
            continue;
          }
          let rect = rects[$first].toRect();
          currentDirection = rects[$first].direction;
          for (let textBox of rects[$skip](1)) {
            rect = rect.expandToInclude(textBox.toRect());
            currentDirection = textBox.direction;
          }
          rect = new ui.Rect.fromLTWH(math.max(core.double, 0.0, rect.left), math.max(core.double, 0.0, rect.top), math.min(core.double, rect.width, this.constraints.maxWidth), math.min(core.double, rect.height, this.constraints.maxHeight));
          currentRect = new ui.Rect.fromLTRB(rect.left[$floorToDouble]() - 4.0, rect.top[$floorToDouble]() - 4.0, rect.right[$ceilToDouble]() + 4.0, rect.bottom[$ceilToDouble]() + 4.0);
          let configuration = (t1 = new semantics.SemanticsConfiguration.new(), (() => {
            t1.sortKey = new semantics.OrdinalSortKey.new((t2 = ordinal, ordinal = t2 + 1, t2));
            t1.textDirection = initialDirection;
            t1.attributedLabel = new semantics.AttributedString.new((t2$ = info.semanticsLabel, t2$ == null ? info.text : t2$), {attributes: info.stringAttributes});
            return t1;
          })());
          let recognizer = info.recognizer;
          if (recognizer != null) {
            if (tap.TapGestureRecognizer.is(recognizer)) {
              if (recognizer.onTap != null) {
                configuration.onTap = recognizer.onTap;
                configuration.isLink = true;
              }
            } else if (multitap.DoubleTapGestureRecognizer.is(recognizer)) {
              if (recognizer.onDoubleTap != null) {
                configuration.onTap = recognizer.onDoubleTap;
                configuration.isLink = true;
              }
            } else if (long_press.LongPressGestureRecognizer.is(recognizer)) {
              if (recognizer.onLongPress != null) {
                configuration.onLongPress = recognizer.onLongPress;
              }
            } else {
              if (!false) dart.assertFailed(dart.str(dart.runtimeType(recognizer)) + " is not supported.", I[1], 1147, 20, "false");
            }
          }
          if (node.parentPaintClipRect != null) {
            let paintRect = dart.nullCheck(node.parentPaintClipRect).intersect(currentRect);
            configuration.isHidden = paintRect.isEmpty && !currentRect.isEmpty;
          }
          let newChild = null;
          function newChild$35get() {
            let t2;
            t2 = newChild;
            return t2 == null ? dart.throw(new _internal.LateError.localNI("newChild")) : t2;
          }
          dart.fn(newChild$35get, T.VoidToSemanticsNode());
          function newChild$35set(newChild$35param) {
            if (newChild == null)
              return newChild = newChild$35param;
            else
              dart.throw(new _internal.LateError.localAI("newChild"));
          }
          dart.fn(newChild$35set, T.SemanticsNodeTodynamic());
          if (dart.test((t4$ = (t4 = this[_cachedChildNodes], t4 == null ? null : t4[$isNotEmpty]), t4$ == null ? false : t4$))) {
            newChild$35set(dart.nullCheck(dart.nullCheck(this[_cachedChildNodes])[$remove](dart.nullCheck(this[_cachedChildNodes])[$keys][$first])));
          } else {
            let key = new key$.UniqueKey.new();
            newChild$35set(new semantics.SemanticsNode.new({key: key, showOnScreen: this[_createShowOnScreenFor](key)}));
          }
          t4$0 = newChild$35get();
          (() => {
            t4$0.updateWith({config: configuration});
            t4$0.rect = currentRect;
            return t4$0;
          })();
          newChildCache[$_set](dart.nullCheck(newChild$35get().key), newChild$35get());
          newChildren[$add](newChild$35get());
        }
      }
      if (!(childIndex === children[$length])) dart.assertFailed(null, I[1], 1172, 12, "childIndex == children.length");
      if (!(child == null)) dart.assertFailed(null, I[1], 1173, 12, "child == null");
      this[_cachedChildNodes] = newChildCache;
      node.updateWith({config: config, childrenInInversePaintOrder: newChildren});
    }
    [_createShowOnScreenFor](key) {
      return dart.fn(() => {
        let node = dart.nullCheck(dart.nullCheck(this[_cachedChildNodes])[$_get](key));
        this.showOnScreen({descendant: this, rect: node.rect});
      }, T.VoidTovoid());
    }
    clearSemantics() {
      super.clearSemantics();
      this[_cachedChildNodes] = null;
    }
    debugDescribeChildren() {
      return T.JSArrayOfDiagnosticsNode().of([this.text.toDiagnosticsNode({name: "text", style: diagnostics.DiagnosticsTreeStyle.transition})]);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfTextAlign()).new("textAlign", this.textAlign));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection));
      properties.add(new diagnostics.FlagProperty.new("softWrap", {value: this.softWrap, ifTrue: "wrapping at box width", ifFalse: "no wrapping except at line break characters", showName: true}));
      properties.add(new (T.EnumPropertyOfTextOverflow()).new("overflow", this.overflow));
      properties.add(new diagnostics.DoubleProperty.new("textScaleFactor", this.textScaleFactor, {defaultValue: 1.0}));
      properties.add(new (T.DiagnosticsPropertyOfLocale()).new("locale", this.locale, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {ifNull: "unlimited"}));
    }
  };
  (paragraph$.RenderParagraph.new = function(text, opts) {
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[0] || CT.C0;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : true;
    let overflow = opts && 'overflow' in opts ? opts.overflow : C[1] || CT.C1;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[2] || CT.C2;
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let selectionColor = opts && 'selectionColor' in opts ? opts.selectionColor : null;
    let registrar = opts && 'registrar' in opts ? opts.registrar : null;
    this[_cachedAttributedLabel] = null;
    this[_cachedCombinedSemanticsInfos] = null;
    this[_lastSelectableFragments] = null;
    this[_registrar] = null;
    this[__RenderParagraph__placeholderSpans] = null;
    this[_needsClipping] = false;
    this[_overflowShader] = null;
    this[_placeholderDimensions] = null;
    this[_semanticsInfo] = null;
    this[_cachedChildNodes] = null;
    if (!(text !== null)) dart.assertFailed(null, I[1], 89, 15, "text != null");
    if (!text.debugAssertIsValid()) dart.assertFailed(null, I[1], 90, 15, "text.debugAssertIsValid()");
    if (!(textAlign !== null)) dart.assertFailed(null, I[1], 91, 15, "textAlign != null");
    if (!(textDirection !== null)) dart.assertFailed(null, I[1], 92, 15, "textDirection != null");
    if (!(softWrap !== null)) dart.assertFailed(null, I[1], 93, 15, "softWrap != null");
    if (!(overflow !== null)) dart.assertFailed(null, I[1], 94, 15, "overflow != null");
    if (!(textScaleFactor !== null)) dart.assertFailed(null, I[1], 95, 15, "textScaleFactor != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, I[1], 96, 15, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis !== null)) dart.assertFailed(null, I[1], 97, 15, "textWidthBasis != null");
    this[_softWrap] = softWrap;
    this[_overflow] = overflow;
    this[_selectionColor] = selectionColor;
    this[_textPainter] = new text_painter.TextPainter.new({text: text, textAlign: textAlign, textDirection: textDirection, textScaleFactor: textScaleFactor, maxLines: maxLines, ellipsis: overflow === text_painter.TextOverflow.ellipsis ? "…" : null, locale: locale, strutStyle: strutStyle, textWidthBasis: textWidthBasis, textHeightBehavior: textHeightBehavior});
    paragraph$.RenderParagraph.__proto__.new.call(this);
    this.addAll(children);
    this[_extractPlaceholderSpans](text);
    this.registrar = registrar;
  }).prototype = paragraph$.RenderParagraph.prototype;
  dart.addTypeTests(paragraph$.RenderParagraph);
  dart.addTypeCaches(paragraph$.RenderParagraph);
  dart.setMethodSignature(paragraph$.RenderParagraph, () => ({
    __proto__: dart.getMethods(paragraph$.RenderParagraph.__proto__),
    [_updateSelectionRegistrarSubscription]: dart.fnType(dart.void, []),
    [_removeSelectionRegistrarSubscription]: dart.fnType(dart.void, []),
    [_getSelectableFragments]: dart.fnType(core.List$(paragraph$._SelectableFragment), []),
    [_disposeSelectableFragments]: dart.fnType(dart.void, []),
    [_extractPlaceholderSpans]: dart.fnType(dart.void, [inline_span.InlineSpan]),
    [_getOffsetForPosition]: dart.fnType(ui.Offset, [ui.TextPosition]),
    [_computeIntrinsicHeight]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui.TextBaseline]),
    [_canComputeIntrinsics]: dart.fnType(core.bool, []),
    [_computeChildrenWidthWithMaxIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeChildrenWidthWithMinIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeChildrenHeightWithMinIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_layoutText]: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}, {}),
    [_layoutTextWithConstraints]: dart.fnType(dart.void, [box.BoxConstraints]),
    [_layoutChildren]: dart.fnType(core.List$(text_painter.PlaceholderDimensions), [box.BoxConstraints], {dry: core.bool}, {}),
    [_setParentData]: dart.fnType(dart.void, []),
    [_canComputeDryLayout]: dart.fnType(core.bool, []),
    getOffsetForCaret: dart.fnType(ui.Offset, [ui.TextPosition, ui.Rect]),
    getFullHeightForCaret: dart.fnType(dart.nullable(core.double), [ui.TextPosition]),
    getBoxesForSelection: dart.fnType(core.List$(ui.TextBox), [text_editing.TextSelection], {boxHeightStyle: ui.BoxHeightStyle, boxWidthStyle: ui.BoxWidthStyle}, {}),
    getPositionForOffset: dart.fnType(ui.TextPosition, [ui.Offset]),
    getWordBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    [_createShowOnScreenFor]: dart.fnType(dart.nullable(dart.fnType(dart.void, [])), [key$.Key])
  }));
  dart.setGetterSignature(paragraph$.RenderParagraph, () => ({
    __proto__: dart.getGetters(paragraph$.RenderParagraph.__proto__),
    text: inline_span.InlineSpan,
    selections: core.List$(text_editing.TextSelection),
    registrar: dart.nullable(selection.SelectionRegistrar),
    [_placeholderSpans]: core.List$(placeholder_span.PlaceholderSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    softWrap: core.bool,
    overflow: text_painter.TextOverflow,
    textScaleFactor: core.double,
    maxLines: dart.nullable(core.int),
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    selectionColor: dart.nullable(ui.Color),
    debugHasOverflowShader: core.bool,
    textSize: ui.Size
  }));
  dart.setSetterSignature(paragraph$.RenderParagraph, () => ({
    __proto__: dart.getSetters(paragraph$.RenderParagraph.__proto__),
    text: inline_span.InlineSpan,
    registrar: dart.nullable(selection.SelectionRegistrar),
    [_placeholderSpans]: core.List$(placeholder_span.PlaceholderSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    softWrap: core.bool,
    overflow: text_painter.TextOverflow,
    textScaleFactor: core.double,
    maxLines: dart.nullable(core.int),
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    selectionColor: dart.nullable(ui.Color)
  }));
  dart.setLibraryUri(paragraph$.RenderParagraph, I[0]);
  dart.setFieldSignature(paragraph$.RenderParagraph, () => ({
    __proto__: dart.getFields(paragraph$.RenderParagraph.__proto__),
    [_textPainter]: dart.finalFieldType(text_painter.TextPainter),
    [_cachedAttributedLabel]: dart.fieldType(dart.nullable(semantics.AttributedString)),
    [_cachedCombinedSemanticsInfos]: dart.fieldType(dart.nullable(core.List$(inline_span.InlineSpanSemanticsInformation))),
    [_lastSelectableFragments]: dart.fieldType(dart.nullable(core.List$(paragraph$._SelectableFragment))),
    [_registrar]: dart.fieldType(dart.nullable(selection.SelectionRegistrar)),
    [__RenderParagraph__placeholderSpans]: dart.fieldType(dart.nullable(core.List$(placeholder_span.PlaceholderSpan))),
    [_softWrap]: dart.fieldType(core.bool),
    [_overflow]: dart.fieldType(text_painter.TextOverflow),
    [_selectionColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_needsClipping]: dart.fieldType(core.bool),
    [_overflowShader]: dart.fieldType(dart.nullable(ui.Shader)),
    [_placeholderDimensions]: dart.fieldType(dart.nullable(core.List$(text_painter.PlaceholderDimensions))),
    [_semanticsInfo]: dart.fieldType(dart.nullable(core.List$(inline_span.InlineSpanSemanticsInformation))),
    [_cachedChildNodes]: dart.fieldType(dart.nullable(collection.LinkedHashMap$(key$.Key, semantics.SemanticsNode)))
  }));
  dart.setStaticFieldSignature(paragraph$.RenderParagraph, () => ['_placeholderCharacter']);
  dart.defineLazy(paragraph$.RenderParagraph, {
    /*paragraph$.RenderParagraph._placeholderCharacter*/get _placeholderCharacter() {
      return core.String.fromCharCode(65532);
    }
  }, false);
  var _startHandleLayerLink = dart.privateName(paragraph$, "_startHandleLayerLink");
  var _endHandleLayerLink = dart.privateName(paragraph$, "_endHandleLayerLink");
  var ___SelectableFragment__selectionGeometry = dart.privateName(paragraph$, "_#_SelectableFragment#_selectionGeometry");
  var _cachedRect = dart.privateName(paragraph$, "_cachedRect");
  var _selectionGeometry = dart.privateName(paragraph$, "_selectionGeometry");
  var _getSelectionGeometry = dart.privateName(paragraph$, "_getSelectionGeometry");
  var _updateSelectionGeometry = dart.privateName(paragraph$, "_updateSelectionGeometry");
  var SelectionGeometry_hasContent = dart.privateName(selection, "SelectionGeometry.hasContent");
  var SelectionGeometry_status = dart.privateName(selection, "SelectionGeometry.status");
  var SelectionGeometry_endSelectionPoint = dart.privateName(selection, "SelectionGeometry.endSelectionPoint");
  var SelectionGeometry_startSelectionPoint = dart.privateName(selection, "SelectionGeometry.startSelectionPoint");
  var _updateSelectionEdge = dart.privateName(paragraph$, "_updateSelectionEdge");
  var _handleClearSelection = dart.privateName(paragraph$, "_handleClearSelection");
  var _handleSelectAll = dart.privateName(paragraph$, "_handleSelectAll");
  var _handleSelectWord = dart.privateName(paragraph$, "_handleSelectWord");
  var _didChangeSelection = dart.privateName(paragraph$, "_didChangeSelection");
  var _setSelectionPosition = dart.privateName(paragraph$, "_setSelectionPosition");
  var _rect = dart.privateName(paragraph$, "_rect");
  var _clampTextPosition = dart.privateName(paragraph$, "_clampTextPosition");
  var _positionIsWithinCurrentSelection = dart.privateName(paragraph$, "_positionIsWithinCurrentSelection");
  const Object_Selectable$36 = class Object_Selectable extends core.Object {};
  (Object_Selectable$36.new = function() {
  }).prototype = Object_Selectable$36.prototype;
  dart.applyMixin(Object_Selectable$36, selection.Selectable);
  const Object_ChangeNotifier$36 = class Object_ChangeNotifier extends Object_Selectable$36 {};
  (Object_ChangeNotifier$36.new = function() {
    change_notifier.ChangeNotifier.new.call(this);
  }).prototype = Object_ChangeNotifier$36.prototype;
  dart.applyMixin(Object_ChangeNotifier$36, change_notifier.ChangeNotifier);
  paragraph$._SelectableFragment = class _SelectableFragment extends Object_ChangeNotifier$36 {
    static ['_#new#tearOff'](opts) {
      let paragraph = opts && 'paragraph' in opts ? opts.paragraph : null;
      let range = opts && 'range' in opts ? opts.range : null;
      return new paragraph$._SelectableFragment.new({paragraph: paragraph, range: range});
    }
    get value() {
      return this[_selectionGeometry];
    }
    get [_selectionGeometry]() {
      let t4;
      t4 = this[___SelectableFragment__selectionGeometry];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_selectionGeometry")) : t4;
    }
    set [_selectionGeometry](library$32package$58flutter$47src$47rendering$47paragraph$46dart$58$58_selectionGeometry$35param) {
      this[___SelectableFragment__selectionGeometry] = library$32package$58flutter$47src$47rendering$47paragraph$46dart$58$58_selectionGeometry$35param;
    }
    [_updateSelectionGeometry]() {
      let newValue = this[_getSelectionGeometry]();
      if (this[_selectionGeometry]._equals(newValue)) {
        return;
      }
      this[_selectionGeometry] = newValue;
      this.notifyListeners();
    }
    [_getSelectionGeometry]() {
      let t4;
      if (this[_textSelectionStart] == null || this[_textSelectionEnd] == null) {
        return C[23] || CT.C23;
      }
      let selectionStart = dart.nullCheck(this[_textSelectionStart]).offset;
      let selectionEnd = dart.nullCheck(this[_textSelectionEnd]).offset;
      let isReversed = selectionStart > selectionEnd;
      let startOffsetInParagraphCoordinates = this.paragraph[_getOffsetForPosition](new ui.TextPosition.new({offset: selectionStart}));
      let endOffsetInParagraphCoordinates = selectionStart === selectionEnd ? startOffsetInParagraphCoordinates : this.paragraph[_getOffsetForPosition](new ui.TextPosition.new({offset: selectionEnd}));
      let flipHandles = isReversed !== (ui.TextDirection.rtl === this.paragraph.textDirection);
      let paragraphToFragmentTransform = (t4 = this.getTransformToParagraph(), (() => {
        t4.invert();
        return t4;
      })());
      return new selection.SelectionGeometry.new({startSelectionPoint: new selection.SelectionPoint.new({localPosition: matrix_utils.MatrixUtils.transformPoint(paragraphToFragmentTransform, startOffsetInParagraphCoordinates), lineHeight: this.paragraph[_textPainter].preferredLineHeight, handleType: flipHandles ? selection.TextSelectionHandleType.right : selection.TextSelectionHandleType.left}), endSelectionPoint: new selection.SelectionPoint.new({localPosition: matrix_utils.MatrixUtils.transformPoint(paragraphToFragmentTransform, endOffsetInParagraphCoordinates), lineHeight: this.paragraph[_textPainter].preferredLineHeight, handleType: flipHandles ? selection.TextSelectionHandleType.left : selection.TextSelectionHandleType.right}), status: dart.nullCheck(this[_textSelectionStart]).offset === dart.nullCheck(this[_textSelectionEnd]).offset ? selection.SelectionStatus.collapsed : selection.SelectionStatus.uncollapsed, hasContent: true});
    }
    dispatchSelectionEvent(event) {
      let result = null;
      function result$35get() {
        let t5;
        t5 = result;
        return t5 == null ? dart.throw(new _internal.LateError.localNI("result")) : t5;
      }
      dart.fn(result$35get, T.VoidToSelectionResult());
      function result$35set(result$35param) {
        if (result == null)
          return result = result$35param;
        else
          dart.throw(new _internal.LateError.localAI("result"));
      }
      dart.fn(result$35set, T.SelectionResultTodynamic());
      let existingSelectionStart = this[_textSelectionStart];
      let existingSelectionEnd = this[_textSelectionEnd];
      switch (event.type) {
        case C[25] || CT.C25:
        case C[26] || CT.C26:
          {
            let edgeUpdate = selection.SelectionEdgeUpdateEvent.as(event);
            result$35set(this[_updateSelectionEdge](edgeUpdate.globalPosition, {isEnd: edgeUpdate.type === selection.SelectionEventType.endEdgeUpdate}));
            break;
          }
        case C[27] || CT.C27:
          {
            result$35set(this[_handleClearSelection]());
            break;
          }
        case C[28] || CT.C28:
          {
            result$35set(this[_handleSelectAll]());
            break;
          }
        case C[29] || CT.C29:
          {
            let selectWord = selection.SelectWordSelectionEvent.as(event);
            result$35set(this[_handleSelectWord](selectWord.globalPosition));
            break;
          }
      }
      if (!dart.equals(existingSelectionStart, this[_textSelectionStart]) || !dart.equals(existingSelectionEnd, this[_textSelectionEnd])) {
        this[_didChangeSelection]();
      }
      return result$35get();
    }
    getSelectedContent() {
      if (this[_textSelectionStart] == null || this[_textSelectionEnd] == null) {
        return null;
      }
      let start = math.min(core.int, dart.nullCheck(this[_textSelectionStart]).offset, dart.nullCheck(this[_textSelectionEnd]).offset);
      let end = math.max(core.int, dart.nullCheck(this[_textSelectionStart]).offset, dart.nullCheck(this[_textSelectionEnd]).offset);
      return new selection.SelectedContent.new({plainText: this.paragraph.text.toPlainText({includeSemanticsLabels: false})[$substring](start, end)});
    }
    [_didChangeSelection]() {
      this.paragraph.markNeedsPaint();
      this[_updateSelectionGeometry]();
    }
    [_updateSelectionEdge](globalPosition, opts) {
      let isEnd = opts && 'isEnd' in opts ? opts.isEnd : null;
      this[_setSelectionPosition](null, {isEnd: isEnd});
      let transform = this.paragraph.getTransformTo(null);
      transform.invert();
      let localPosition = matrix_utils.MatrixUtils.transformPoint(transform, globalPosition);
      if (this[_rect].isEmpty) {
        return selection.SelectionUtils.getResultBasedOnRect(this[_rect], localPosition);
      }
      let adjustedOffset = selection.SelectionUtils.adjustDragOffset(this[_rect], localPosition, {direction: this.paragraph.textDirection});
      let position = this[_clampTextPosition](this.paragraph.getPositionForOffset(adjustedOffset));
      this[_setSelectionPosition](position, {isEnd: isEnd});
      if (position.offset === this.range.end) {
        return selection.SelectionResult.next;
      }
      if (position.offset === this.range.start) {
        return selection.SelectionResult.previous;
      }
      return selection.SelectionUtils.getResultBasedOnRect(this[_rect], localPosition);
    }
    [_clampTextPosition](position) {
      if (position.offset > this.range.end || position.offset === this.range.end && position.affinity === ui.TextAffinity.downstream) {
        return new ui.TextPosition.new({offset: this.range.end, affinity: ui.TextAffinity.upstream});
      }
      if (position.offset < this.range.start) {
        return new ui.TextPosition.new({offset: this.range.start});
      }
      return position;
    }
    [_setSelectionPosition](position, opts) {
      let isEnd = opts && 'isEnd' in opts ? opts.isEnd : null;
      if (isEnd) {
        this[_textSelectionEnd] = position;
      } else {
        this[_textSelectionStart] = position;
      }
    }
    [_handleClearSelection]() {
      this[_textSelectionStart] = null;
      this[_textSelectionEnd] = null;
      return selection.SelectionResult.none;
    }
    [_handleSelectAll]() {
      this[_textSelectionStart] = new ui.TextPosition.new({offset: this.range.start});
      this[_textSelectionEnd] = new ui.TextPosition.new({offset: this.range.end, affinity: ui.TextAffinity.upstream});
      return selection.SelectionResult.none;
    }
    [_handleSelectWord](globalPosition) {
      let position = this.paragraph.getPositionForOffset(this.paragraph.globalToLocal(globalPosition));
      if (this[_positionIsWithinCurrentSelection](position)) {
        return selection.SelectionResult.end;
      }
      let word = this.paragraph.getWordBoundary(position);
      if (!word.isNormalized) dart.assertFailed(null, I[1], 1420, 12, "word.isNormalized");
      if (!(word.start >= this.range.start && word.end <= this.range.end)) dart.assertFailed(null, I[1], 1423, 12, "word.start >= range.start && word.end <= range.end");
      let start = null;
      function start$35get() {
        let t8;
        t8 = start;
        return t8 == null ? dart.throw(new _internal.LateError.localNI("start")) : t8;
      }
      dart.fn(start$35get, T.VoidToTextPosition());
      function start$35set(start$35param) {
        return start = start$35param;
      }
      dart.fn(start$35set, T.TextPositionTodynamic());
      let end = null;
      function end$35get() {
        let t11;
        t11 = end;
        return t11 == null ? dart.throw(new _internal.LateError.localNI("end")) : t11;
      }
      dart.fn(end$35get, T.VoidToTextPosition());
      function end$35set(end$35param) {
        return end = end$35param;
      }
      dart.fn(end$35set, T.TextPositionTodynamic());
      if (position.offset >= word.end) {
        start$35set(end$35set(new ui.TextPosition.new({offset: position.offset})));
      } else {
        start$35set(new ui.TextPosition.new({offset: word.start}));
        end$35set(new ui.TextPosition.new({offset: word.end, affinity: ui.TextAffinity.upstream}));
      }
      this[_textSelectionStart] = start$35get();
      this[_textSelectionEnd] = end$35get();
      return selection.SelectionResult.end;
    }
    [_positionIsWithinCurrentSelection](position) {
      if (this[_textSelectionStart] == null || this[_textSelectionEnd] == null) {
        return false;
      }
      let currentStart = null;
      function currentStart$35get() {
        let t14;
        t14 = currentStart;
        return t14 == null ? dart.throw(new _internal.LateError.localNI("currentStart")) : t14;
      }
      dart.fn(currentStart$35get, T.VoidToTextPosition());
      function currentStart$35set(currentStart$35param) {
        return currentStart = currentStart$35param;
      }
      dart.fn(currentStart$35set, T.TextPositionTodynamic());
      let currentEnd = null;
      function currentEnd$35get() {
        let t17;
        t17 = currentEnd;
        return t17 == null ? dart.throw(new _internal.LateError.localNI("currentEnd")) : t17;
      }
      dart.fn(currentEnd$35get, T.VoidToTextPosition());
      function currentEnd$35set(currentEnd$35param) {
        return currentEnd = currentEnd$35param;
      }
      dart.fn(currentEnd$35set, T.TextPositionTodynamic());
      if (paragraph$._SelectableFragment._compareTextPositions(dart.nullCheck(this[_textSelectionStart]), dart.nullCheck(this[_textSelectionEnd])) > 0) {
        currentStart$35set(dart.nullCheck(this[_textSelectionStart]));
        currentEnd$35set(dart.nullCheck(this[_textSelectionEnd]));
      } else {
        currentStart$35set(dart.nullCheck(this[_textSelectionEnd]));
        currentEnd$35set(dart.nullCheck(this[_textSelectionStart]));
      }
      return paragraph$._SelectableFragment._compareTextPositions(currentStart$35get(), position) >= 0 && paragraph$._SelectableFragment._compareTextPositions(currentEnd$35get(), position) <= 0;
    }
    static _compareTextPositions(position, otherPosition) {
      if (position.offset < otherPosition.offset) {
        return 1;
      } else if (position.offset > otherPosition.offset) {
        return -1;
      } else if (position.affinity === otherPosition.affinity) {
        return 0;
      } else {
        return position.affinity === ui.TextAffinity.upstream ? 1 : -1;
      }
    }
    getTransformToParagraph() {
      return vector_math_64.Matrix4.translationValues(this[_rect].left, this[_rect].top, 0.0);
    }
    getTransformTo(ancestor) {
      let t19;
      t19 = this.getTransformToParagraph();
      return (() => {
        t19.multiply(this.paragraph.getTransformTo(ancestor));
        return t19;
      })();
    }
    pushHandleLayers(startHandle, endHandle) {
      if (!this.paragraph.attached) {
        if (!(startHandle == null && endHandle == null)) dart.assertFailed("Only clean up can be called.", I[1], 1486, 14, "startHandle == null && endHandle == null");
        return;
      }
      if (!dart.equals(this[_startHandleLayerLink], startHandle)) {
        this[_startHandleLayerLink] = startHandle;
        this.paragraph.markNeedsPaint();
      }
      if (!dart.equals(this[_endHandleLayerLink], endHandle)) {
        this[_endHandleLayerLink] = endHandle;
        this.paragraph.markNeedsPaint();
      }
    }
    get [_rect]() {
      if (this[_cachedRect] == null) {
        let boxes = this.paragraph.getBoxesForSelection(new text_editing.TextSelection.new({baseOffset: this.range.start, extentOffset: this.range.end}));
        if (boxes[$isNotEmpty]) {
          let result = boxes[$first].toRect();
          for (let index = 1; index < boxes[$length]; index = index + 1) {
            result = result.expandToInclude(boxes[$_get](index).toRect());
          }
          this[_cachedRect] = result;
        } else {
          let offset = this.paragraph[_getOffsetForPosition](new ui.TextPosition.new({offset: this.range.start}));
          this[_cachedRect] = new ui.Rect.fromPoints(offset, offset.translate(0.0, -this.paragraph[_textPainter].preferredLineHeight));
        }
      }
      return dart.nullCheck(this[_cachedRect]);
    }
    didChangeParagraphLayout() {
      this[_cachedRect] = null;
    }
    get size() {
      return this[_rect].size;
    }
    paint(context, offset) {
      let t19;
      if (this[_textSelectionStart] == null || this[_textSelectionEnd] == null) {
        return;
      }
      if (this.paragraph.selectionColor != null) {
        let selection = new text_editing.TextSelection.new({baseOffset: dart.nullCheck(this[_textSelectionStart]).offset, extentOffset: dart.nullCheck(this[_textSelectionEnd]).offset});
        let selectionPaint = (t19 = ui.Paint.new(), (() => {
          t19.style = ui.PaintingStyle.fill;
          t19.color = dart.nullCheck(this.paragraph.selectionColor);
          return t19;
        })());
        for (let textBox of this.paragraph.getBoxesForSelection(selection)) {
          context.canvas.drawRect(textBox.toRect().shift(offset), selectionPaint);
        }
      }
      let transform = this.getTransformToParagraph();
      if (this[_startHandleLayerLink] != null && this.value.startSelectionPoint != null) {
        context.pushLayer(new layer.LeaderLayer.new({link: dart.nullCheck(this[_startHandleLayerLink]), offset: offset['+'](matrix_utils.MatrixUtils.transformPoint(transform, dart.nullCheck(this.value.startSelectionPoint).localPosition))}), dart.fn((context, offset) => {
        }, T.PaintingContextAndOffsetTovoid()), ui.Offset.zero);
      }
      if (this[_endHandleLayerLink] != null && this.value.endSelectionPoint != null) {
        context.pushLayer(new layer.LeaderLayer.new({link: dart.nullCheck(this[_endHandleLayerLink]), offset: offset['+'](matrix_utils.MatrixUtils.transformPoint(transform, dart.nullCheck(this.value.endSelectionPoint).localPosition))}), dart.fn((context, offset) => {
        }, T.PaintingContextAndOffsetTovoid()), ui.Offset.zero);
      }
    }
  };
  (paragraph$._SelectableFragment.new = function(opts) {
    let paragraph = opts && 'paragraph' in opts ? opts.paragraph : null;
    let range = opts && 'range' in opts ? opts.range : null;
    this[_textSelectionStart] = null;
    this[_textSelectionEnd] = null;
    this[_startHandleLayerLink] = null;
    this[_endHandleLayerLink] = null;
    this[___SelectableFragment__selectionGeometry] = null;
    this[_cachedRect] = null;
    this.paragraph = paragraph;
    this.range = range;
    if (!(range.isValid && !range.isCollapsed && range.isNormalized)) dart.assertFailed(null, I[1], 1246, 15, "range.isValid && !range.isCollapsed && range.isNormalized");
    paragraph$._SelectableFragment.__proto__.new.call(this);
    this[_selectionGeometry] = this[_getSelectionGeometry]();
  }).prototype = paragraph$._SelectableFragment.prototype;
  dart.addTypeTests(paragraph$._SelectableFragment);
  dart.addTypeCaches(paragraph$._SelectableFragment);
  dart.setMethodSignature(paragraph$._SelectableFragment, () => ({
    __proto__: dart.getMethods(paragraph$._SelectableFragment.__proto__),
    [_updateSelectionGeometry]: dart.fnType(dart.void, []),
    [_getSelectionGeometry]: dart.fnType(selection.SelectionGeometry, []),
    dispatchSelectionEvent: dart.fnType(selection.SelectionResult, [selection.SelectionEvent]),
    getSelectedContent: dart.fnType(dart.nullable(selection.SelectedContent), []),
    [_didChangeSelection]: dart.fnType(dart.void, []),
    [_updateSelectionEdge]: dart.fnType(selection.SelectionResult, [ui.Offset], {}, {isEnd: core.bool}),
    [_clampTextPosition]: dart.fnType(ui.TextPosition, [ui.TextPosition]),
    [_setSelectionPosition]: dart.fnType(dart.void, [dart.nullable(ui.TextPosition)], {}, {isEnd: core.bool}),
    [_handleClearSelection]: dart.fnType(selection.SelectionResult, []),
    [_handleSelectAll]: dart.fnType(selection.SelectionResult, []),
    [_handleSelectWord]: dart.fnType(selection.SelectionResult, [ui.Offset]),
    [_positionIsWithinCurrentSelection]: dart.fnType(core.bool, [ui.TextPosition]),
    getTransformToParagraph: dart.fnType(vector_math_64.Matrix4, []),
    getTransformTo: dart.fnType(vector_math_64.Matrix4, [dart.nullable(object.RenderObject)]),
    pushHandleLayers: dart.fnType(dart.void, [dart.nullable(layer.LayerLink), dart.nullable(layer.LayerLink)]),
    didChangeParagraphLayout: dart.fnType(dart.void, []),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
  }));
  dart.setStaticMethodSignature(paragraph$._SelectableFragment, () => ['_compareTextPositions']);
  dart.setGetterSignature(paragraph$._SelectableFragment, () => ({
    __proto__: dart.getGetters(paragraph$._SelectableFragment.__proto__),
    value: selection.SelectionGeometry,
    [_selectionGeometry]: selection.SelectionGeometry,
    [_rect]: ui.Rect,
    size: ui.Size
  }));
  dart.setSetterSignature(paragraph$._SelectableFragment, () => ({
    __proto__: dart.getSetters(paragraph$._SelectableFragment.__proto__),
    [_selectionGeometry]: selection.SelectionGeometry
  }));
  dart.setLibraryUri(paragraph$._SelectableFragment, I[0]);
  dart.setFieldSignature(paragraph$._SelectableFragment, () => ({
    __proto__: dart.getFields(paragraph$._SelectableFragment.__proto__),
    range: dart.finalFieldType(ui.TextRange),
    paragraph: dart.finalFieldType(paragraph$.RenderParagraph),
    [_textSelectionStart]: dart.fieldType(dart.nullable(ui.TextPosition)),
    [_textSelectionEnd]: dart.fieldType(dart.nullable(ui.TextPosition)),
    [_startHandleLayerLink]: dart.fieldType(dart.nullable(layer.LayerLink)),
    [_endHandleLayerLink]: dart.fieldType(dart.nullable(layer.LayerLink)),
    [___SelectableFragment__selectionGeometry]: dart.fieldType(dart.nullable(selection.SelectionGeometry)),
    [_cachedRect]: dart.fieldType(dart.nullable(ui.Rect))
  }));
  dart.defineLazy(paragraph$, {
    /*paragraph$._kEllipsis*/get _kEllipsis() {
      return "…";
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/paragraph.dart", {
    "package:flutter/src/rendering/paragraph.dart": paragraph$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["paragraph.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/paragraph.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__paragraph: paragraph$
  };
}));

//# sourceMappingURL=paragraph.dart.lib.js.map