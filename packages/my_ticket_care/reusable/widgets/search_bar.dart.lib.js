define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/text_field.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/material/input_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/placeholder_span.dart'], (function load__packages__my_ticket_care__reusable__widgets__search_bar_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__text_field$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__material__input_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__placeholder_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__title$46dart.src__widgets__editable_text;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const text_field = packages__flutter__src__material__text_field$46dart.src__material__text_field;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const input_border = packages__flutter__src__material__input_border$46dart.src__material__input_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  var search_bar = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchBar",
        [_Location_column]: 9,
        [_Location_line]: 4,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/search_bar.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 25,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/search_bar.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextField",
        [_Location_column]: 14,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/search_bar.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/search_bar.dart"
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = ["package:my_ticket_care/reusable/widgets/search_bar.dart"];
  var searchController$ = dart.privateName(search_bar, "SearchBar.searchController");
  var onChanged$ = dart.privateName(search_bar, "SearchBar.onChanged");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  search_bar.SearchBar = class SearchBar extends framework.StatelessWidget {
    get searchController() {
      return this[searchController$];
    }
    set searchController(value) {
      super.searchController = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
      let searchController = opts && 'searchController' in opts ? opts.searchController : null;
      return new search_bar.SearchBar.new({key: key, onChanged: onChanged, searchController: searchController, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new basic.SizedBox.new({height: 38.0, child: new text_field.TextField.new({onChanged: this.onChanged, controller: this.searchController, decoration: new input_decorator.InputDecoration.new({filled: true, fillColor: colorScheme.onPrimary, contentPadding: C[1] || CT.C1, prefixIcon: new icon.Icon.new(icons.Icons.search, {color: colorScheme.primary, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(50.0), borderSide: borders.BorderSide.none}), hintStyle: new text_style.TextStyle.new({fontSize: 16.0, color: colorScheme.secondary}), hintText: "Busca empresas, servicios, especialistas..."}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
  };
  (search_bar.SearchBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let searchController = opts && 'searchController' in opts ? opts.searchController : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onChanged$] = onChanged;
    this[searchController$] = searchController;
    search_bar.SearchBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_bar.SearchBar.prototype;
  dart.addTypeTests(search_bar.SearchBar);
  dart.addTypeCaches(search_bar.SearchBar);
  dart.setMethodSignature(search_bar.SearchBar, () => ({
    __proto__: dart.getMethods(search_bar.SearchBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_bar.SearchBar, I[0]);
  dart.setFieldSignature(search_bar.SearchBar, () => ({
    __proto__: dart.getFields(search_bar.SearchBar.__proto__),
    searchController: dart.finalFieldType(dart.nullable(editable_text.TextEditingController)),
    onChanged: dart.finalFieldType(dart.fnType(dart.dynamic, [core.String]))
  }));
  dart.trackLibraries("packages/my_ticket_care/reusable/widgets/search_bar.dart", {
    "package:my_ticket_care/reusable/widgets/search_bar.dart": search_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAS+B;;;;;;IACN;;;;;;;;;;;;UAGG;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,iCACG,aACD,yCACM,4BACC,mCACA,iDACA,iBACG,AAAY,WAAD,uDAEV,kBACJ,4BACC,AAAY,WAAD,2EAEZ,uDACuB,wCAAS,mBACb,sCAChB,wCACC,aACH,AAAY,WAAD,wBAEV;IAGpB;;;QAnCO;QACS;QACA;;IADA;IACA;AACX,wDAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/reusable/widgets/search_bar.dart.lib.js"}');
  // Exports:
  return {
    reusable__widgets__search_bar: search_bar
  };
}));

//# sourceMappingURL=search_bar.dart.lib.js.map
