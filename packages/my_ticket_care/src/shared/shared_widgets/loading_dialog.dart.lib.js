define(['dart_sdk', 'packages/flutter/src/material/dialog.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/progress_indicator.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/alignment.dart'], (function load__packages__my_ticket_care__src__shared__shared_widgets__loading_dialog_dart(dart_sdk, packages__flutter__src__material__dialog$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__progress_indicator$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__alignment$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dialog = packages__flutter__src__material__dialog$46dart.src__material__dialog;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const progress_indicator = packages__flutter__src__material__progress_indicator$46dart.src__material__progress_indicator;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  var loading_dialog = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BuildContextToDialog: () => (T.BuildContextToDialog = dart.constFn(dart.fnType(dialog.Dialog, [framework.BuildContext])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 17,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_dialog.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 26,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_dialog.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 28,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_dialog.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[7] || CT.C7
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 15
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget__location]: C[4] || CT.C4,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[5] || CT.C5,
        [Padding_padding]: C[8] || CT.C8
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[3] || CT.C3,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[9] || CT.C9
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1], framework.Widget);
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 20,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_dialog.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 18,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_dialog.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Dialog",
        [_Location_column]: 16,
        [_Location_line]: 10,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_dialog.dart"
      });
    }
  }, false);
  var C = Array(13).fill(void 0);
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  var ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  var ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  var ProgressIndicator_color = dart.privateName(progress_indicator, "ProgressIndicator.color");
  var ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  var ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  var CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var CircularProgressIndicator__indicatorType = dart.privateName(progress_indicator, "CircularProgressIndicator._indicatorType");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Padding_padding = dart.privateName(basic, "Padding.padding");
  var Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  var Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var Align_alignment = dart.privateName(basic, "Align.alignment");
  loading_dialog.showLoadingDialog = function showLoadingDialog(context) {
    dialog.showDialog(dart.dynamic, {barrierDismissible: false, context: context, builder: dart.fn(_ => new dialog.Dialog.new({child: new basic.SizedBox.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: C[0] || CT.C0, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), T.BuildContextToDialog())});
  };
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_widgets/loading_dialog.dart", {
    "package:my_ticket_care/src/shared/shared_widgets/loading_dialog.dart": loading_dialog
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["loading_dialog.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gEAEoC;AAsB5B,IArBN,qDAGwB,gBACX,OAAO,WACP,QAAC,KACD,8BACE,+BACE,oCACsB;EAazC","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_widgets/loading_dialog.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_widgets__loading_dialog: loading_dialog
  };
}));

//# sourceMappingURL=loading_dialog.dart.lib.js.map
