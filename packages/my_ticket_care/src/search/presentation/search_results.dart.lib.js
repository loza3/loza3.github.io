define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/my_ticket_care/src/search/presentation/search_bar.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/my_ticket_care/src/search/providers/search_query_provider.dart', 'packages/my_ticket_care/src/search/presentation/search_results_states.dart', 'packages/my_ticket_care/src/search/presentation/search_results_list.dart'], (function load__packages__my_ticket_care__src__search__presentation__search_results_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__my_ticket_care__src__search__presentation__search_bar$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__my_ticket_care__src__search__providers__search_query_provider$46dart, packages__my_ticket_care__src__search__presentation__search_results_states$46dart, packages__my_ticket_care__src__search__presentation__search_results_list$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const search_bar = packages__my_ticket_care__src__search__presentation__search_bar$46dart.src__search__presentation__search_bar;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const search_query_provider = packages__my_ticket_care__src__search__providers__search_query_provider$46dart.src__search__providers__search_query_provider;
  const search_results_states = packages__my_ticket_care__src__search__presentation__search_results_states$46dart.src__search__presentation__search_results_states;
  const search_results_list = packages__my_ticket_care__src__search__presentation__search_results_list$46dart.src__search__presentation__search_results_list;
  var search_results = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetRefAndWidgetNToWidget: () => (T.BuildContextAndWidgetRefAndWidgetNToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef, T.WidgetN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchResultsScreen",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchBar",
        [_Location_column]: 18,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: search_bar.SearchBar.prototype,
        [Widget__location]: C[4] || CT.C4,
        [Widget_key]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[3] || CT.C3,
        [Padding_padding]: C[5] || CT.C5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchResultsWelcome",
        [_Location_column]: 28,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: search_results_states.SearchResultsWelcome.prototype,
        [Widget__location]: C[7] || CT.C7,
        [Widget_key]: null
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchResultsList",
        [_Location_column]: 28,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: search_results_list.SearchResultsList.prototype,
        [Widget__location]: C[9] || CT.C9,
        [Widget_key]: null
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results.dart"
      });
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = ["package:my_ticket_care/src/search/presentation/search_results.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Padding_padding = dart.privateName(basic, "Padding.padding");
  search_results.SearchResultsScreen = class SearchResultsScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_results.SearchResultsScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new scroll_view.ListView.new({children: T.JSArrayOfWidget().of([C[1] || CT.C1, new consumer.Consumer.new({builder: dart.fn((context, ref, child) => {
              let query = ref.watch(core.String, search_query_provider.searchQueryProvider);
              if (query[$isEmpty]) {
                return C[6] || CT.C6;
              } else {
                return C[8] || CT.C8;
              }
            }, T.BuildContextAndWidgetRefAndWidgetNToWidget()), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10})]), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
  };
  (search_results.SearchResultsScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_results.SearchResultsScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_results.SearchResultsScreen.prototype;
  dart.addTypeTests(search_results.SearchResultsScreen);
  dart.addTypeCaches(search_results.SearchResultsScreen);
  dart.setMethodSignature(search_results.SearchResultsScreen, () => ({
    __proto__: dart.getMethods(search_results.SearchResultsScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_results.SearchResultsScreen, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/search/presentation/search_results.dart", {
    "package:my_ticket_care/src/search/presentation/search_results.dart": search_results
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_results.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAY4B;AACxB,YAAO,yCACK,uCAKR,oCACW,SAAC,SAAS,KAAK;AACf,0BAAQ,AAAI,GAAD,oBAAO;AACzB,kBAAI,AAAM,KAAD;AACP;;AAEA;;;IAMZ;;;QAtBgC;;AAAQ,sEAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/presentation/search_results.dart.lib.js"}');
  // Exports:
  return {
    src__search__presentation__search_results: search_results
  };
}));

//# sourceMappingURL=search_results.dart.lib.js.map
