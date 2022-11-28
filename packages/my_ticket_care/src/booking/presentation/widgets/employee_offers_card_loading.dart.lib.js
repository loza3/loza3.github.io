define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/my_ticket_care/src/shared/shared_widgets/loading_shimmer_widget.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart'], (function load__packages__my_ticket_care__src__booking__presentation__widgets__employee_offers_card_loading_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__rendering__flex$46dart, packages__my_ticket_care__src__shared__shared_widgets__loading_shimmer_widget$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const loading_shimmer_widget = packages__my_ticket_care__src__shared__shared_widgets__loading_shimmer_widget$46dart.src__shared__shared_widgets__loading_shimmer_widget;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  var employee_offers_card_loading = Object.create(dart.library);
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
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoadingEmployeeCard",
        [_Location_column]: 9,
        [_Location_line]: 6,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 5
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330.0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 14,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ShimmerLoading",
        [_Location_column]: 12,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 5,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 5,
        [EdgeInsets_left]: 5
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ShimmerLoading",
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card_loading.dart"
      });
    }
  }, false);
  var C = Array(18).fill(void 0);
  var I = ["package:my_ticket_care/src/booking/presentation/widgets/employee_offers_card_loading.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Color_value = dart.privateName(ui, "Color.value");
  var _buildLoadingCircle = dart.privateName(employee_offers_card_loading, "_buildLoadingCircle");
  var _buildLoadingRectangle = dart.privateName(employee_offers_card_loading, "_buildLoadingRectangle");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  employee_offers_card_loading.LoadingEmployeeCard = class LoadingEmployeeCard extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new employee_offers_card_loading.LoadingEmployeeCard.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let color = colors.Colors.black;
      return new container.Container.new({padding: C[1] || CT.C1, child: new card.Card.new({elevation: 4.0, color: C[2] || CT.C2, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Row.new({children: T.JSArrayOfWidget().of([this[_buildLoadingCircle](color), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([this[_buildLoadingRectangle](color, 12.0, 100.0), this[_buildLoadingRectangle](color, 12.0, 100.0)]), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3})]), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), this[_buildLoadingRectangle](color, 15.0, 250.0), this[_buildLoadingRectangle](color, 15.0, 250.0), this[_buildLoadingRectangle](color, 15.0, 250.0), C[5] || CT.C5]), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    [_buildLoadingCircle](color) {
      return new loading_shimmer_widget.ShimmerLoading.new({isLoading: true, child: new basic.Padding.new({padding: C[10] || CT.C10, child: new container.Container.new({height: 50.0, width: 50.0, decoration: new box_decoration.BoxDecoration.new({color: color, shape: box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    [_buildLoadingRectangle](color, height, width) {
      return new loading_shimmer_widget.ShimmerLoading.new({isLoading: true, child: new basic.Padding.new({padding: C[14] || CT.C14, child: new container.Container.new({color: color, height: height, width: width, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
    }
  };
  (employee_offers_card_loading.LoadingEmployeeCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    employee_offers_card_loading.LoadingEmployeeCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = employee_offers_card_loading.LoadingEmployeeCard.prototype;
  dart.addTypeTests(employee_offers_card_loading.LoadingEmployeeCard);
  dart.addTypeCaches(employee_offers_card_loading.LoadingEmployeeCard);
  dart.setMethodSignature(employee_offers_card_loading.LoadingEmployeeCard, () => ({
    __proto__: dart.getMethods(employee_offers_card_loading.LoadingEmployeeCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildLoadingCircle]: dart.fnType(framework.Widget, [ui.Color]),
    [_buildLoadingRectangle]: dart.fnType(framework.Widget, [ui.Color, core.double, core.double])
  }));
  dart.setLibraryUri(employee_offers_card_loading.LoadingEmployeeCard, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/widgets/employee_offers_card_loading.dart", {
    "package:my_ticket_care/src/booking/presentation/widgets/employee_offers_card_loading.dart": employee_offers_card_loading
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["employee_offers_card_loading.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AAClB,kBAAe;AACrB,YAAO,6DAEE,8BACM,kCAEJ,gCACK,wBACR,6BACY,wBACR,0BAAoB,KAAK,GACzB,0CACyC,yCAC7B,wBACR,6BAAuB,KAAK,EAAE,MAAI,QAClC,6BAAuB,KAAK,EAAE,MAAI,8HAK1C,6BAAuB,KAAK,EAAE,MAAI,QAClC,6BAAuB,KAAK,EAAE,MAAI,QAClC,6BAAuB,KAAK,EAAE,MAAI;IAM5C;0BAEiC;AAC/B,YAAO,2DACM,aACJ,wDAEE,qCACG,aACD,kBACK,6CAAqB,KAAK,SAAkB;IAIhE;6BAEoC,OAAc,QAAe;AAC/D,YAAO,2DACM,aACJ,wDAEE,oCACE,KAAK,UACJ,MAAM,SACP,KAAK;IAIpB;;;QA5DgC;;AAAQ,oFAAW,GAAG;;EAAC","file":"../../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/widgets/employee_offers_card_loading.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__widgets__employee_offers_card_loading: employee_offers_card_loading
  };
}));

//# sourceMappingURL=employee_offers_card_loading.dart.lib.js.map
