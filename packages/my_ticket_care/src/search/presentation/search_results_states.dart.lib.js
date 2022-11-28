define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/material/icon_button.dart'], (function load__packages__my_ticket_care__src__search__presentation__search_results_states_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__material__icon_button$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  var search_results_states = Object.create(dart.library);
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
        [_Location_name]: "SearchResultsWelcome",
        [_Location_column]: 9,
        [_Location_line]: 4,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_states.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 11,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_states.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 11,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_states.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_states.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_states.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_states.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_results_states.dart"
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = ["package:my_ticket_care/src/search/presentation/search_results_states.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  search_results_states.SearchResultsWelcome = class SearchResultsWelcome extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_results_states.SearchResultsWelcome.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.height * 0.23, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), new icon.Icon.new(icons.Icons.local_hospital, {size: 50.0, color: theme.Theme.of(context).primaryColor, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), new text.Text.new("Busca y reserva tu cita", {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), new text.Text.new("Con MyTicket.", {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4})]), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
  };
  (search_results_states.SearchResultsWelcome.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_results_states.SearchResultsWelcome.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_results_states.SearchResultsWelcome.prototype;
  dart.addTypeTests(search_results_states.SearchResultsWelcome);
  dart.addTypeCaches(search_results_states.SearchResultsWelcome);
  dart.setMethodSignature(search_results_states.SearchResultsWelcome, () => ({
    __proto__: dart.getMethods(search_results_states.SearchResultsWelcome.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_results_states.SearchResultsWelcome, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/search/presentation/search_results_states.dart", {
    "package:my_ticket_care/src/search/presentation/search_results_states.dart": search_results_states
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_results_states.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,8BACE,yCACgC,yCAC3B,wBACR,gCACqB,AAAY,AAAK,AAAO,0BAArB,OAAO,gBAAgB,+DAE/C,kBACQ,mCACA,aACO,AAAY,eAAT,OAAO,yEAEzB,kBACE,mCACa,AAAY,AAAU,eAAnB,OAAO,iFAEzB,kBACE,yBACa,AAAY,AAAU,eAAnB,OAAO;IAKjC;;;QA3BiC;;AAAQ,8EAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/presentation/search_results_states.dart.lib.js"}');
  // Exports:
  return {
    src__search__presentation__search_results_states: search_results_states
  };
}));

//# sourceMappingURL=search_results_states.dart.lib.js.map
