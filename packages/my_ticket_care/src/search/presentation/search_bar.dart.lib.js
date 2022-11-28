define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/riverpod/src/state_controller.dart', 'packages/flutter/src/material/text_field.dart', 'packages/my_ticket_care/src/search/providers/search_query_provider.dart', 'packages/flutter/src/material/input_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/riverpod/src/value_provider.dart'], (function load__packages__my_ticket_care__src__search__presentation__search_bar_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__riverpod__src__state_controller$46dart, packages__flutter__src__material__text_field$46dart, packages__my_ticket_care__src__search__providers__search_query_provider$46dart, packages__flutter__src__material__input_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__riverpod__src__value_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const focus_scope = packages__flutter__src__widgets__title$46dart.src__widgets__focus_scope;
  const editable_text = packages__flutter__src__widgets__title$46dart.src__widgets__editable_text;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const state_controller = packages__riverpod__src__state_controller$46dart.src__state_controller;
  const text_field = packages__flutter__src__material__text_field$46dart.src__material__text_field;
  const search_query_provider = packages__my_ticket_care__src__search__providers__search_query_provider$46dart.src__search__providers__search_query_provider;
  const input_border = packages__flutter__src__material__input_border$46dart.src__material__input_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const state_provider = packages__riverpod__src__value_provider$46dart.src__state_provider;
  var search_bar = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    StateControllerOfbool: () => (T.StateControllerOfbool = dart.constFn(state_controller.StateController$(core.bool)))(),
    boolTovoid: () => (T.boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))(),
    StateControllerOfString: () => (T.StateControllerOfString = dart.constFn(state_controller.StateController$(core.String)))(),
    StringTovoid: () => (T.StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))(),
    StateProviderOfbool: () => (T.StateProviderOfbool = dart.constFn(state_provider.StateProvider$(core.bool)))(),
    StateProviderRefOfbool: () => (T.StateProviderRefOfbool = dart.constFn(state_provider.StateProviderRef$(core.bool)))(),
    StateProviderRefOfboolTobool: () => (T.StateProviderRefOfboolTobool = dart.constFn(dart.fnType(core.bool, [T.StateProviderRefOfbool()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchBar",
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 21,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 13,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchTextField",
        [_Location_column]: 26,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: search_bar.SearchTextField.prototype,
        [Widget__location]: C[4] || CT.C4,
        [Widget_key]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 22,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 14,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchTextField",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 25,
        [_Location_line]: 78,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextField",
        [_Location_column]: 16,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Focus",
        [_Location_column]: 14,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FocusScope",
        [_Location_column]: 12,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/search_bar.dart"
      });
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = ["package:my_ticket_care/src/search/presentation/search_bar.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  search_bar.SearchBar = class SearchBar extends consumer.ConsumerWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_bar.SearchBar.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context, ref) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let isOpen = ref.watch(core.bool, search_bar.searchIsOpenProvider);
      let leftPadding = isOpen ? 0.0 : 20.0;
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(20.0), border: box_border.Border.all({width: 2.0, color: colorScheme.primary})}), child: new basic.Row.new({children: (() => {
            let t0 = T.JSArrayOfWidget().of([]);
            if (isOpen) t0.push(new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.arrow_back_ios_new, {color: colorScheme.primary, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), onPressed: dart.fn(() => {
                focus_scope.FocusScope.of(context).unfocus();
              }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}));
            t0.push(new basic.Expanded.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 20.0, left: leftPadding}), child: C[3] || CT.C3, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}));
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
  };
  (search_bar.SearchBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_bar.SearchBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_bar.SearchBar.prototype;
  dart.addTypeTests(search_bar.SearchBar);
  dart.addTypeCaches(search_bar.SearchBar);
  dart.setMethodSignature(search_bar.SearchBar, () => ({
    __proto__: dart.getMethods(search_bar.SearchBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef])
  }));
  dart.setLibraryUri(search_bar.SearchBar, I[0]);
  search_bar.SearchTextField = class SearchTextField extends consumer.ConsumerStatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_bar.SearchTextField.new({key: key, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    createState() {
      return new search_bar._SearchTextFieldState.new();
    }
  };
  (search_bar.SearchTextField.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_bar.SearchTextField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_bar.SearchTextField.prototype;
  dart.addTypeTests(search_bar.SearchTextField);
  dart.addTypeCaches(search_bar.SearchTextField);
  dart.setMethodSignature(search_bar.SearchTextField, () => ({
    __proto__: dart.getMethods(search_bar.SearchTextField.__proto__),
    createState: dart.fnType(consumer.ConsumerState$(search_bar.SearchTextField), [])
  }));
  dart.setLibraryUri(search_bar.SearchTextField, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  search_bar._SearchTextFieldState = class _SearchTextFieldState extends consumer.ConsumerState$(search_bar.SearchTextField) {
    dispose() {
      super.dispose();
      this.searchController.dispose();
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new focus_scope.FocusScope.new({child: new focus_scope.Focus.new({onFocusChange: dart.fn(isFocused => {
            this.ref.read(T.StateControllerOfbool(), search_bar.searchIsOpenProvider.state).state = isFocused;
          }, T.boolTovoid()), child: new text_field.TextField.new({onChanged: dart.fn(query => {
              this.ref.read(T.StateControllerOfString(), search_query_provider.searchQueryProvider.state).state = query;
            }, T.StringTovoid()), controller: this.searchController, decoration: new input_decorator.InputDecoration.new({suffixIcon: new icon.Icon.new(icons.Icons.search, {color: colorScheme.primary, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), filled: true, fillColor: colorScheme.onPrimary, contentPadding: C[11] || CT.C11, border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(50.0), borderSide: borders.BorderSide.none}), hintStyle: new text_style.TextStyle.new({fontSize: 16.0, color: colorScheme.secondary}), hintText: "Busca empresas, servicios, especialistas..."}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    static ['_#new#tearOff']() {
      return new search_bar._SearchTextFieldState.new();
    }
  };
  (search_bar._SearchTextFieldState.new = function() {
    this.searchController = new editable_text.TextEditingController.new();
    search_bar._SearchTextFieldState.__proto__.new.call(this);
    ;
  }).prototype = search_bar._SearchTextFieldState.prototype;
  dart.addTypeTests(search_bar._SearchTextFieldState);
  dart.addTypeCaches(search_bar._SearchTextFieldState);
  dart.setMethodSignature(search_bar._SearchTextFieldState, () => ({
    __proto__: dart.getMethods(search_bar._SearchTextFieldState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_bar._SearchTextFieldState, I[0]);
  dart.setFieldSignature(search_bar._SearchTextFieldState, () => ({
    __proto__: dart.getFields(search_bar._SearchTextFieldState.__proto__),
    searchController: dart.finalFieldType(editable_text.TextEditingController)
  }));
  dart.defineLazy(search_bar, {
    /*search_bar.searchIsOpenProvider*/get searchIsOpenProvider() {
      return new (T.StateProviderOfbool()).new(dart.fn(ref => false, T.StateProviderRefOfboolTobool()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/search/presentation/search_bar.dart", {
    "package:my_ticket_care/src/search/presentation/search_bar.dart": search_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B,SAAmB;AAC/B,wBAAoB,AAAY,eAAT,OAAO;AAErC,mBAAS,AAAI,GAAD,kBAAO;AACjB,wBAAc,MAAM,GAAG,MAAI,IAAP;AAC3B,YAAO,0CACO,oDACmB,wCAAS,eACrB,8BACN,YACA,AAAY,WAAD,qBAEjB,6BACK;;AACR,gBAAI,MAAM,EACR,8CACQ,kBACE,wCACC,AAAY,WAAD,8EAET;AACuB,gBAArB,AAAY,0BAAT,OAAO;;AAG3B,mDACW,gCACW,wCAAY,YAAU,WAAW;;;IAM/D;;;QAnCuB;;AAAjB,wDAAiB,GAAG;;EAAE;;;;;;;;;;;;;;AA0CoB;IAAuB;;;QAH3C;;AAAQ,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;AAWlC,MAAT;AACoB,MAA1B,AAAiB;IACnB;UAG0B;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,wCACE,0CACU,QAAC;AACwC,YAAtD,AAAI,AAAiC,yCAA5B,AAAqB,+CAAe,SAAS;qCAEjD,yCACM,QAAC;AACuC,cAAjD,AAAI,AAAgC,2CAA3B,AAAoB,yDAAe,KAAK;8CAEvC,mCACA,qDACE,kBACJ,4BACC,AAAY,WAAD,6EAEZ,iBACG,AAAY,WAAD,qDAEd,uDACuB,wCAAS,mBACb,sCAChB,wCACC,aACH,AAAY,WAAD,wBAEV;IAKpB;;;;;;IA1CM,wBAAmB;;;EA2C3B;;;;;;;;;;;;;MA5FM,+BAAoB;YAAG,mCAAoB,QAAC,OAAQ","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/presentation/search_bar.dart.lib.js"}');
  // Exports:
  return {
    src__search__presentation__search_bar: search_bar
  };
}));

//# sourceMappingURL=search_bar.dart.lib.js.map
