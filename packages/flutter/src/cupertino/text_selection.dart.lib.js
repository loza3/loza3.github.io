define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/editable.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/cupertino/debug.dart', 'packages/flutter/src/cupertino/text_selection_toolbar_button.dart', 'packages/flutter/src/cupertino/text_selection_toolbar.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/rendering/selection.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__flutter__src__cupertino__text_selection_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__editable$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__cupertino__debug$46dart, packages__flutter__src__cupertino__text_selection_toolbar_button$46dart, packages__flutter__src__cupertino__text_selection_toolbar$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__rendering__selection$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text_selection = packages__flutter__src__widgets__title$46dart.src__widgets__text_selection;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const editable = packages__flutter__src__rendering__editable$46dart.src__rendering__editable;
  const math$ = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const localizations$ = packages__flutter__src__cupertino__debug$46dart.src__cupertino__localizations;
  const text_selection_toolbar_button = packages__flutter__src__cupertino__text_selection_toolbar_button$46dart.src__cupertino__text_selection_toolbar_button;
  const text_selection_toolbar = packages__flutter__src__cupertino__text_selection_toolbar$46dart.src__cupertino__text_selection_toolbar;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const theme = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__theme;
  const selection = packages__flutter__src__rendering__selection$46dart.src__rendering__selection;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  var text_selection$ = Object.create(dart.library);
  var $first = dartx.first;
  var $last = dartx.last;
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    StringAndFnTovoid: () => (T.StringAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.String, T.VoidTovoid()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoTextSelectionControlsToolbar",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 9,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTextSelectionToolbarButton",
        [_Location_column]: 53,
        [_Location_line]: 129,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 151,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTextSelectionToolbar",
        [_Location_column]: 12,
        [_Location_line]: 154,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 6,
        [OffsetBase__dx]: 6
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10.5,
        [OffsetBase__dx]: 5
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoTextSelectionControlsToolbar",
        [_Location_column]: 12,
        [_Location_line]: 217,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 32,
        [_Location_line]: 237,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 247,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: selection.TextSelectionHandleType.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 254,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 16,
        [_Location_line]: 258,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: selection.TextSelectionHandleType.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 22,
        [_Location_line]: 267,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[18] || CT.C18,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: null
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: selection.TextSelectionHandleType.prototype,
        [_Enum__name]: "collapsed",
        [_Enum_index]: 2
      });
    }
  }, false);
  var C = Array(20).fill(void 0);
  var I = [
    "package:flutter/src/cupertino/text_selection.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection.dart"
  ];
  var clipboardStatus$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.clipboardStatus");
  var endpoints$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.endpoints");
  var globalEditableRegion$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.globalEditableRegion");
  var handleCopy$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.handleCopy");
  var handleCut$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.handleCut");
  var handlePaste$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.handlePaste");
  var handleSelectAll$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.handleSelectAll");
  var selectionMidpoint$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.selectionMidpoint");
  var textLineHeight$ = dart.privateName(text_selection$, "_CupertinoTextSelectionControlsToolbar.textLineHeight");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  text_selection$._CupertinoTextSelectionControlsToolbar = class _CupertinoTextSelectionControlsToolbar extends framework.StatefulWidget {
    get clipboardStatus() {
      return this[clipboardStatus$];
    }
    set clipboardStatus(value) {
      super.clipboardStatus = value;
    }
    get endpoints() {
      return this[endpoints$];
    }
    set endpoints(value) {
      super.endpoints = value;
    }
    get globalEditableRegion() {
      return this[globalEditableRegion$];
    }
    set globalEditableRegion(value) {
      super.globalEditableRegion = value;
    }
    get handleCopy() {
      return this[handleCopy$];
    }
    set handleCopy(value) {
      super.handleCopy = value;
    }
    get handleCut() {
      return this[handleCut$];
    }
    set handleCut(value) {
      super.handleCut = value;
    }
    get handlePaste() {
      return this[handlePaste$];
    }
    set handlePaste(value) {
      super.handlePaste = value;
    }
    get handleSelectAll() {
      return this[handleSelectAll$];
    }
    set handleSelectAll(value) {
      super.handleSelectAll = value;
    }
    get selectionMidpoint() {
      return this[selectionMidpoint$];
    }
    set selectionMidpoint(value) {
      super.selectionMidpoint = value;
    }
    get textLineHeight() {
      return this[textLineHeight$];
    }
    set textLineHeight(value) {
      super.textLineHeight = value;
    }
    static ['_#new#tearOff'](opts) {
      let clipboardStatus = opts && 'clipboardStatus' in opts ? opts.clipboardStatus : null;
      let endpoints = opts && 'endpoints' in opts ? opts.endpoints : null;
      let globalEditableRegion = opts && 'globalEditableRegion' in opts ? opts.globalEditableRegion : null;
      let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
      let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
      let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
      let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
      let selectionMidpoint = opts && 'selectionMidpoint' in opts ? opts.selectionMidpoint : null;
      let textLineHeight = opts && 'textLineHeight' in opts ? opts.textLineHeight : null;
      return new text_selection$._CupertinoTextSelectionControlsToolbar.new({clipboardStatus: clipboardStatus, endpoints: endpoints, globalEditableRegion: globalEditableRegion, handleCopy: handleCopy, handleCut: handleCut, handlePaste: handlePaste, handleSelectAll: handleSelectAll, selectionMidpoint: selectionMidpoint, textLineHeight: textLineHeight, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new text_selection$._CupertinoTextSelectionControlsToolbarState.new();
    }
  };
  (text_selection$._CupertinoTextSelectionControlsToolbar.new = function(opts) {
    let clipboardStatus = opts && 'clipboardStatus' in opts ? opts.clipboardStatus : null;
    let endpoints = opts && 'endpoints' in opts ? opts.endpoints : null;
    let globalEditableRegion = opts && 'globalEditableRegion' in opts ? opts.globalEditableRegion : null;
    let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
    let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
    let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
    let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
    let selectionMidpoint = opts && 'selectionMidpoint' in opts ? opts.selectionMidpoint : null;
    let textLineHeight = opts && 'textLineHeight' in opts ? opts.textLineHeight : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[clipboardStatus$] = clipboardStatus;
    this[endpoints$] = endpoints;
    this[globalEditableRegion$] = globalEditableRegion;
    this[handleCopy$] = handleCopy;
    this[handleCut$] = handleCut;
    this[handlePaste$] = handlePaste;
    this[handleSelectAll$] = handleSelectAll;
    this[selectionMidpoint$] = selectionMidpoint;
    this[textLineHeight$] = textLineHeight;
    text_selection$._CupertinoTextSelectionControlsToolbar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._CupertinoTextSelectionControlsToolbar.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionControlsToolbar);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionControlsToolbar);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionControlsToolbar, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionControlsToolbar.__proto__),
    createState: dart.fnType(text_selection$._CupertinoTextSelectionControlsToolbarState, [])
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionControlsToolbar, I[0]);
  dart.setFieldSignature(text_selection$._CupertinoTextSelectionControlsToolbar, () => ({
    __proto__: dart.getFields(text_selection$._CupertinoTextSelectionControlsToolbar.__proto__),
    clipboardStatus: dart.finalFieldType(dart.nullable(text_selection.ClipboardStatusNotifier)),
    endpoints: dart.finalFieldType(core.List$(editable.TextSelectionPoint)),
    globalEditableRegion: dart.finalFieldType(ui.Rect),
    handleCopy: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleCut: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handlePaste: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleSelectAll: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    selectionMidpoint: dart.finalFieldType(ui.Offset),
    textLineHeight: dart.finalFieldType(core.double)
  }));
  var _onChangedClipboardStatus = dart.privateName(text_selection$, "_onChangedClipboardStatus");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  text_selection$._CupertinoTextSelectionControlsToolbarState = class _CupertinoTextSelectionControlsToolbarState extends framework.State$(text_selection$._CupertinoTextSelectionControlsToolbar) {
    [_onChangedClipboardStatus]() {
      this.setState(dart.fn(() => {
      }, T.VoidTovoid()));
    }
    initState() {
      let t0;
      super.initState();
      t0 = this.widget.clipboardStatus;
      t0 == null ? null : t0.addListener(dart.bind(this, _onChangedClipboardStatus));
    }
    didUpdateWidget(oldWidget) {
      let t0, t0$;
      text_selection$._CupertinoTextSelectionControlsToolbar.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(oldWidget.clipboardStatus, this.widget.clipboardStatus)) {
        t0 = oldWidget.clipboardStatus;
        t0 == null ? null : t0.removeListener(dart.bind(this, _onChangedClipboardStatus));
        t0$ = this.widget.clipboardStatus;
        t0$ == null ? null : t0$.addListener(dart.bind(this, _onChangedClipboardStatus));
      }
    }
    dispose() {
      let t0;
      super.dispose();
      t0 = this.widget.clipboardStatus;
      t0 == null ? null : t0.removeListener(dart.bind(this, _onChangedClipboardStatus));
    }
    build(context) {
      let t0, t0$;
      if (this.widget.handlePaste != null && (t0 = this.widget.clipboardStatus, t0 == null ? null : t0.value) === text_selection.ClipboardStatus.unknown) {
        return C[1] || CT.C1;
      }
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[1], 89, 12, "debugCheckHasMediaQuery(context)");
      let mediaQuery = media_query.MediaQuery.of(context);
      let anchorX = math$.clampDouble(this.widget.selectionMidpoint.dx + this.widget.globalEditableRegion.left, 26 + mediaQuery.padding.left, mediaQuery.size.width - mediaQuery.padding.right - 26);
      let topAmountInEditableRegion = this.widget.endpoints[$first].point.dy - this.widget.textLineHeight;
      let anchorTop = math.max(core.num, topAmountInEditableRegion, 0) + this.widget.globalEditableRegion.top;
      let anchorAbove = new ui.Offset.new(anchorX, anchorTop);
      let anchorBelow = new ui.Offset.new(anchorX, this.widget.endpoints[$last].point.dy + this.widget.globalEditableRegion.top);
      let items = T.JSArrayOfWidget().of([]);
      let localizations = localizations$.CupertinoLocalizations.of(context);
      let onePhysicalPixelVerticalDivider = new basic.SizedBox.new({width: 1.0 / media_query.MediaQuery.of(context).devicePixelRatio, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
      function addToolbarButton(text, onPressed) {
        if (items[$isNotEmpty]) {
          items[$add](onePhysicalPixelVerticalDivider);
        }
        items[$add](new text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.text({onPressed: onPressed, text: text, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}));
      }
      dart.fn(addToolbarButton, T.StringAndFnTovoid());
      if (this.widget.handleCut != null) {
        addToolbarButton(localizations.cutButtonLabel, dart.nullCheck(this.widget.handleCut));
      }
      if (this.widget.handleCopy != null) {
        addToolbarButton(localizations.copyButtonLabel, dart.nullCheck(this.widget.handleCopy));
      }
      if (this.widget.handlePaste != null && (t0$ = this.widget.clipboardStatus, t0$ == null ? null : t0$.value) === text_selection.ClipboardStatus.pasteable) {
        addToolbarButton(localizations.pasteButtonLabel, dart.nullCheck(this.widget.handlePaste));
      }
      if (this.widget.handleSelectAll != null) {
        addToolbarButton(localizations.selectAllButtonLabel, dart.nullCheck(this.widget.handleSelectAll));
      }
      if (items[$isEmpty]) {
        return C[5] || CT.C5;
      }
      return new text_selection_toolbar.CupertinoTextSelectionToolbar.new({anchorAbove: anchorAbove, anchorBelow: anchorBelow, children: items, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    static ['_#new#tearOff']() {
      return new text_selection$._CupertinoTextSelectionControlsToolbarState.new();
    }
  };
  (text_selection$._CupertinoTextSelectionControlsToolbarState.new = function() {
    text_selection$._CupertinoTextSelectionControlsToolbarState.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._CupertinoTextSelectionControlsToolbarState.prototype;
  dart.addTypeTests(text_selection$._CupertinoTextSelectionControlsToolbarState);
  dart.addTypeCaches(text_selection$._CupertinoTextSelectionControlsToolbarState);
  dart.setMethodSignature(text_selection$._CupertinoTextSelectionControlsToolbarState, () => ({
    __proto__: dart.getMethods(text_selection$._CupertinoTextSelectionControlsToolbarState.__proto__),
    [_onChangedClipboardStatus]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection$._CupertinoTextSelectionControlsToolbarState, I[0]);
  var color$ = dart.privateName(text_selection$, "_TextSelectionHandlePainter.color");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  text_selection$._TextSelectionHandlePainter = class _TextSelectionHandlePainter extends custom_paint.CustomPainter {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    static ['_#new#tearOff'](color) {
      return new text_selection$._TextSelectionHandlePainter.new(color);
    }
    paint(canvas, size) {
      let t0, t0$;
      let paint = (t0 = ui.Paint.new(), (() => {
        t0.color = this.color;
        return t0;
      })());
      let circle = new ui.Rect.fromCircle({center: C[8] || CT.C8, radius: 6});
      let line = new ui.Rect.fromPoints(C[9] || CT.C9, new ui.Offset.new(6 + 1, size.height));
      let path = (t0$ = ui.Path.new(), (() => {
        t0$.addOval(circle);
        t0$.addRect(line);
        return t0$;
      })());
      canvas.drawPath(path, paint);
    }
    shouldRepaint(oldPainter) {
      text_selection$._TextSelectionHandlePainter.as(oldPainter);
      return !this.color._equals(oldPainter.color);
    }
  };
  (text_selection$._TextSelectionHandlePainter.new = function(color) {
    this[color$] = color;
    text_selection$._TextSelectionHandlePainter.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._TextSelectionHandlePainter.prototype;
  dart.addTypeTests(text_selection$._TextSelectionHandlePainter);
  dart.addTypeCaches(text_selection$._TextSelectionHandlePainter);
  dart.setMethodSignature(text_selection$._TextSelectionHandlePainter, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionHandlePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionHandlePainter, I[0]);
  dart.setFieldSignature(text_selection$._TextSelectionHandlePainter, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionHandlePainter.__proto__),
    color: dart.finalFieldType(ui.Color)
  }));
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  text_selection$.CupertinoTextSelectionControls = class CupertinoTextSelectionControls extends text_selection.TextSelectionControls {
    getHandleSize(textLineHeight) {
      return new ui.Size.new(6 * 2, textLineHeight + 6 * 2 - 1.5);
    }
    buildToolbar(context, globalEditableRegion, textLineHeight, selectionMidpoint, endpoints, delegate, clipboardStatus, lastSecondaryTapDownPosition) {
      return new text_selection$._CupertinoTextSelectionControlsToolbar.new({clipboardStatus: clipboardStatus, endpoints: endpoints, globalEditableRegion: globalEditableRegion, handleCut: this.canCut(delegate) ? dart.fn(() => this.handleCut(delegate), T.VoidTovoid()) : null, handleCopy: this.canCopy(delegate) ? dart.fn(() => this.handleCopy(delegate), T.VoidTovoid()) : null, handlePaste: this.canPaste(delegate) ? dart.fn(() => this.handlePaste(delegate), T.VoidTovoid()) : null, handleSelectAll: this.canSelectAll(delegate) ? dart.fn(() => this.handleSelectAll(delegate), T.VoidTovoid()) : null, selectionMidpoint: selectionMidpoint, textLineHeight: textLineHeight, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    buildHandle(context, type, textLineHeight, onTap = null) {
      let t0;
      let desiredSize = null;
      let handle = null;
      let customPaint = new basic.CustomPaint.new({painter: new text_selection$._TextSelectionHandlePainter.new(theme.CupertinoTheme.of(context).primaryColor), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
      switch (type) {
        case C[13] || CT.C13:
          {
            desiredSize = this.getHandleSize(textLineHeight);
            handle = new basic.SizedBox.fromSize({size: desiredSize, child: customPaint, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
            return handle;
          }
        case C[16] || CT.C16:
          {
            desiredSize = this.getHandleSize(textLineHeight);
            handle = new basic.SizedBox.fromSize({size: desiredSize, child: customPaint, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
            return new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), (() => {
                t0.translate(desiredSize.width / 2, desiredSize.height / 2);
                t0.rotateZ(3.141592653589793);
                t0.translate(-desiredSize.width / 2, -desiredSize.height / 2);
                return t0;
              })()), child: handle, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
          }
        case C[19] || CT.C19:
          {
            return C[17] || CT.C17;
          }
      }
    }
    getHandleAnchor(type, textLineHeight) {
      let handleSize = null;
      switch (type) {
        case C[13] || CT.C13:
          {
            handleSize = this.getHandleSize(textLineHeight);
            return new ui.Offset.new(handleSize.width / 2, handleSize.height);
          }
        case C[16] || CT.C16:
          {
            handleSize = this.getHandleSize(textLineHeight);
            return new ui.Offset.new(handleSize.width / 2, handleSize.height - 2 * 6 + 1.5);
          }
        case C[19] || CT.C19:
          {
            handleSize = this.getHandleSize(textLineHeight);
            return new ui.Offset.new(handleSize.width / 2, textLineHeight + (handleSize.height - textLineHeight) / 2);
          }
      }
    }
    static ['_#new#tearOff']() {
      return new text_selection$.CupertinoTextSelectionControls.new();
    }
  };
  (text_selection$.CupertinoTextSelectionControls.new = function() {
    ;
  }).prototype = text_selection$.CupertinoTextSelectionControls.prototype;
  dart.addTypeTests(text_selection$.CupertinoTextSelectionControls);
  dart.addTypeCaches(text_selection$.CupertinoTextSelectionControls);
  dart.setMethodSignature(text_selection$.CupertinoTextSelectionControls, () => ({
    __proto__: dart.getMethods(text_selection$.CupertinoTextSelectionControls.__proto__),
    getHandleSize: dart.fnType(ui.Size, [core.double]),
    buildToolbar: dart.fnType(framework.Widget, [framework.BuildContext, ui.Rect, core.double, ui.Offset, core.List$(editable.TextSelectionPoint), text_input.TextSelectionDelegate, dart.nullable(text_selection.ClipboardStatusNotifier), dart.nullable(ui.Offset)]),
    buildHandle: dart.fnType(framework.Widget, [framework.BuildContext, selection.TextSelectionHandleType, core.double], [dart.nullable(dart.fnType(dart.void, []))]),
    getHandleAnchor: dart.fnType(ui.Offset, [selection.TextSelectionHandleType, core.double])
  }));
  dart.setLibraryUri(text_selection$.CupertinoTextSelectionControls, I[0]);
  dart.defineLazy(text_selection$, {
    /*text_selection$._kSelectionHandleOverlap*/get _kSelectionHandleOverlap() {
      return 1.5;
    },
    /*text_selection$._kSelectionHandleRadius*/get _kSelectionHandleRadius() {
      return 6;
    },
    /*text_selection$._kArrowScreenPadding*/get _kArrowScreenPadding() {
      return 26;
    },
    /*text_selection$.cupertinoTextSelectionControls*/get cupertinoTextSelectionControls() {
      return new text_selection$.CupertinoTextSelectionControls.new();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/text_selection.dart", {
    "package:flutter/src/cupertino/text_selection.dart": text_selection$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/cupertino/text_selection.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__text_selection: text_selection$
  };
}));

//# sourceMappingURL=text_selection.dart.lib.js.map
