define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/search/providers/fetch_data_provider.dart', 'packages/my_ticket_care/src/search/services/search_type_casting.dart', 'packages/my_ticket_care/src/search/providers/search_query_provider.dart', 'packages/my_ticket_care/src/search/services/search_filter_data.dart', 'packages/my_ticket_care/src/shared/shared_widgets/list_models_widget.dart', 'packages/flutter/src/material/progress_indicator.dart', 'packages/flutter/src/painting/alignment.dart'], (function load__packages__my_ticket_care__src__search__presentation__search_results_list_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__search__providers__fetch_data_provider$46dart, packages__my_ticket_care__src__search__services__search_type_casting$46dart, packages__my_ticket_care__src__search__providers__search_query_provider$46dart, packages__my_ticket_care__src__search__services__search_filter_data$46dart, packages__my_ticket_care__src__shared__shared_widgets__list_models_widget$46dart, packages__flutter__src__material__progress_indicator$46dart, packages__flutter__src__painting__alignment$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const common = packages__riverpod__src__value_provider$46dart.src__common;
  const fetch_data_provider = packages__my_ticket_care__src__search__providers__fetch_data_provider$46dart.src__search__providers__fetch_data_provider;
  const search_type_casting = packages__my_ticket_care__src__search__services__search_type_casting$46dart.src__search__services__search_type_casting;
  const search_query_provider = packages__my_ticket_care__src__search__providers__search_query_provider$46dart.src__search__providers__search_query_provider;
  const search_filter_data = packages__my_ticket_care__src__search__services__search_filter_data$46dart.src__search__services__search_filter_data;
  const list_models_widget = packages__my_ticket_care__src__shared__shared_widgets__list_models_widget$46dart.src__shared__shared_widgets__list_models_widget;
  const progress_indicator = packages__flutter__src__material__progress_indicator$46dart.src__material__progress_indicator;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  var search_results_list = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    AsyncValueOfList: () => (T.AsyncValueOfList = dart.constFn(common.AsyncValue$(core.List)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ListToColumn: () => (T.ListToColumn = dart.constFn(dart.fnType(basic.Column, [core.List])))(),
    ObjectAndStackTraceToText: () => (T.ObjectAndStackTraceToText = dart.constFn(dart.fnType(text.Text, [core.Object, core.StackTrace])))(),
    VoidToCenter: () => (T.VoidToCenter = dart.constFn(dart.fnType(basic.Center, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchResultsList",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListServicesWidget",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListOfficesWidget",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListEmployeesWidget",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
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
        [Text_data]: "Error"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 22,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 36,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_list.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[12] || CT.C12,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[13] || CT.C13
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[11] || CT.C11,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[14] || CT.C14
      });
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = ["package:my_ticket_care/src/search/presentation/search_results_list.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  search_results_list.SearchResultsList = class SearchResultsList extends consumer.ConsumerStatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_results_list.SearchResultsList.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new search_results_list._SearchResultsListState.new();
    }
  };
  (search_results_list.SearchResultsList.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_results_list.SearchResultsList.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_results_list.SearchResultsList.prototype;
  dart.addTypeTests(search_results_list.SearchResultsList);
  dart.addTypeCaches(search_results_list.SearchResultsList);
  dart.setMethodSignature(search_results_list.SearchResultsList, () => ({
    __proto__: dart.getMethods(search_results_list.SearchResultsList.__proto__),
    createState: dart.fnType(consumer.ConsumerState$(search_results_list.SearchResultsList), [])
  }));
  dart.setLibraryUri(search_results_list.SearchResultsList, I[0]);
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
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
  var Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  var Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var Align_alignment = dart.privateName(basic, "Align.alignment");
  search_results_list._SearchResultsListState = class _SearchResultsListState extends consumer.ConsumerState$(search_results_list.SearchResultsList) {
    build(context) {
      let futureData = this.ref.watch(T.AsyncValueOfList(), fetch_data_provider.fetchAllDataProvider);
      return common['AsyncValueX|when'](core.List, framework.Widget, futureData, {data: dart.fn(data => {
          let dataItems = new search_type_casting.SearchTypeCasting.new(data);
          let query = this.ref.watch(core.String, search_query_provider.searchQueryProvider);
          let employees = search_filter_data.SearchFilterData.employeeByName(dataItems.getEmployees(), query);
          let offices = search_filter_data.SearchFilterData.officeByName(dataItems.getOffices(), query);
          let services = search_filter_data.SearchFilterData.serviceByName(dataItems.getServices(), query);
          return new basic.Column.new({children: T.JSArrayOfWidget().of([C[1] || CT.C1, new list_models_widget.ListServicesWidget.new({title: "Servicios & Especialidades", services: services, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), new list_models_widget.ListOfficesWidget.new({title: "Oficinas", offices: offices, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), new list_models_widget.ListEmployeesWidget.new({title: "Empleados", employees: employees, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5})]), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
        }, T.ListToColumn()), error: dart.fn((error, stackTrace) => C[7] || CT.C7, T.ObjectAndStackTraceToText()), loading: dart.fn(() => C[9] || CT.C9, T.VoidToCenter())});
    }
    static ['_#new#tearOff']() {
      return new search_results_list._SearchResultsListState.new();
    }
  };
  (search_results_list._SearchResultsListState.new = function() {
    search_results_list._SearchResultsListState.__proto__.new.call(this);
    ;
  }).prototype = search_results_list._SearchResultsListState.prototype;
  dart.addTypeTests(search_results_list._SearchResultsListState);
  dart.addTypeCaches(search_results_list._SearchResultsListState);
  dart.setMethodSignature(search_results_list._SearchResultsListState, () => ({
    __proto__: dart.getMethods(search_results_list._SearchResultsListState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_results_list._SearchResultsListState, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/search/presentation/search_results_list.dart", {
    "package:my_ticket_care/src/search/presentation/search_results_list.dart": search_results_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_results_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcoD;IAAyB;;;QAH7C;;AAAQ,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ3B;AAClB,uBAAa,AAAI,qCAAM;AAE7B,YAAkB,yDAAX,UAAU,SACT,QAAC;AACa,0BAAY,8CAAkB,IAAI;AAC9C,sBAAQ,AAAI,4BAAM;AAET,0BACM,mDAAe,AAAU,SAAD,iBAAiB,KAAK;AACtD,wBACQ,iDAAa,AAAU,SAAD,eAAe,KAAK;AACjD,yBACO,kDAAc,AAAU,SAAD,gBAAgB,KAAK;AAEjE,gBAAO,iCACK,uCAER,sDACW,wCAAwC,QAAQ,2DAC3D,qDAAyB,qBAAqB,OAAO,2DACrD,uDAA2B,wBAAwB,SAAS;qCAI3D,SAAC,OAAO,uEAGN;IAIb;;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/presentation/search_results_list.dart.lib.js"}');
  // Exports:
  return {
    src__search__presentation__search_results_list: search_results_list
  };
}));

//# sourceMappingURL=search_results_list.dart.lib.js.map
