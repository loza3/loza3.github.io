define(['dart_sdk', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__my_ticket_care__src__login__presentation__widgets__login_card_dart(dart_sdk, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var login_card = Object.create(dart.library);
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
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginCard",
        [_Location_column]: 9,
        [_Location_line]: 4,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_card.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 80,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 22,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_card.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 30,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_card.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_card.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 14,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_card.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_card.dart"
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = ["package:my_ticket_care/src/login/presentation/widgets/login_card.dart"];
  var children$ = dart.privateName(login_card, "LoginCard.children");
  var padding$ = dart.privateName(login_card, "LoginCard.padding");
  var margin$ = dart.privateName(login_card, "LoginCard.margin");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  login_card.LoginCard = class LoginCard extends framework.StatelessWidget {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let padding = opts && 'padding' in opts ? opts.padding : C[0] || CT.C0;
      let margin = opts && 'margin' in opts ? opts.margin : C[0] || CT.C0;
      return new login_card.LoginCard.new({key: key, children: children, padding: padding, margin: margin, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    build(context) {
      return new basic.Padding.new({padding: this.margin, child: new scroll_view.ListView.new({children: T.JSArrayOfWidget().of([new card.Card.new({margin: C[2] || CT.C2, color: theme.Theme.of(context).colorScheme.background, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0)}), elevation: 5.0, child: new basic.Padding.new({padding: this.padding, child: new basic.Column.new({children: this.children, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5})]), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
  };
  (login_card.LoginCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let padding = opts && 'padding' in opts ? opts.padding : C[0] || CT.C0;
    let margin = opts && 'margin' in opts ? opts.margin : C[0] || CT.C0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$] = children;
    this[padding$] = padding;
    this[margin$] = margin;
    login_card.LoginCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_card.LoginCard.prototype;
  dart.addTypeTests(login_card.LoginCard);
  dart.addTypeCaches(login_card.LoginCard);
  dart.setMethodSignature(login_card.LoginCard, () => ({
    __proto__: dart.getMethods(login_card.LoginCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_card.LoginCard, I[0]);
  dart.setFieldSignature(login_card.LoginCard, () => ({
    __proto__: dart.getFields(login_card.LoginCard.__proto__),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    margin: dart.finalFieldType(edge_insets.EdgeInsetsGeometry)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/login/presentation/widgets/login_card.dart", {
    "package:my_ticket_care/src/login/presentation/widgets/login_card.dart": login_card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUqB;;;;;;IACM;;;;;;IACA;;;;;;;;;;;;;UAEC;AACxB,YAAO,iCACI,oBACF,wCACK,wBACR,iDAMe,AAAY,AAAY,eAArB,OAAO,iCAEnB,uEAAkD,wCAAS,oBACpD,YACJ,gCACI,qBACF,gCACK;IAOxB;;;QAnCO;QACS;QACT;QACA;;IAFS;IACT;IACA;AACF,wDAAW,GAAG;;EAAC","file":"../../../../../../../../../../../../packages/my_ticket_care/src/login/presentation/widgets/login_card.dart.lib.js"}');
  // Exports:
  return {
    src__login__presentation__widgets__login_card: login_card
  };
}));

//# sourceMappingURL=login_card.dart.lib.js.map
