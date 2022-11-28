define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/box_shadow.dart'], (function load__packages__my_ticket_care__reusable__widgets__card_container_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__box_shadow$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const box_shadow = packages__flutter__src__painting__box_shadow$46dart.src__painting__box_shadow;
  var card_container = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CardContainer",
        [_Location_column]: 9,
        [_Location_line]: 6,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/card_container.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 30
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 30,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 30,
        [EdgeInsets_left]: 30
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: -10,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 520093696
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.BlurStyle.prototype,
        [_Enum__name]: "normal",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: box_shadow.BoxShadow.prototype,
        [Shadow_blurRadius]: 15,
        [Shadow_offset]: C[5] || CT.C5,
        [Shadow_color]: C[6] || CT.C6,
        [BoxShadow_blurStyle]: C[7] || CT.C7,
        [BoxShadow_spreadRadius]: 0
      });
    },
    get C3() {
      return C[3] = dart.constList([C[4] || CT.C4], box_shadow.BoxShadow);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/card_container.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/card_container.dart"
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = ["package:my_ticket_care/reusable/widgets/card_container.dart"];
  var child$ = dart.privateName(card_container, "CardContainer.child");
  var width$ = dart.privateName(card_container, "CardContainer.width");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Shadow_blurRadius = dart.privateName(ui, "Shadow.blurRadius");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var Shadow_offset = dart.privateName(ui, "Shadow.offset");
  var Color_value = dart.privateName(ui, "Color.value");
  var Shadow_color = dart.privateName(ui, "Shadow.color");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BoxShadow_blurStyle = dart.privateName(box_shadow, "BoxShadow.blurStyle");
  var BoxShadow_spreadRadius = dart.privateName(box_shadow, "BoxShadow.spreadRadius");
  card_container.CardContainer = class CardContainer extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let width = opts && 'width' in opts ? opts.width : null;
      return new card_container.CardContainer.new({key: key, child: child, width: width, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let t0;
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new basic.Padding.new({padding: C[1] || CT.C1, child: new container.Container.new({width: (t0 = this.width, t0 == null ? 1 / 0 : t0), padding: C[2] || CT.C2, decoration: new box_decoration.BoxDecoration.new({color: colorScheme.background, borderRadius: new border_radius.BorderRadius.circular(30.0), boxShadow: C[3] || CT.C3}), child: this.child, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
  };
  (card_container.CardContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[width$] = width;
    card_container.CardContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = card_container.CardContainer.prototype;
  dart.addTypeTests(card_container.CardContainer);
  dart.addTypeCaches(card_container.CardContainer);
  dart.setMethodSignature(card_container.CardContainer, () => ({
    __proto__: dart.getMethods(card_container.CardContainer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(card_container.CardContainer, I[0]);
  dart.setFieldSignature(card_container.CardContainer, () => ({
    __proto__: dart.getFields(card_container.CardContainer.__proto__),
    child: dart.finalFieldType(framework.Widget),
    width: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.trackLibraries("packages/my_ticket_care/reusable/widgets/card_container.dart", {
    "package:my_ticket_care/reusable/widgets/card_container.dart": card_container
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["card_container.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACC;;;;;;;;;;;;UAIY;;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAC1C,YAAO,uDAEE,qCACQ,iBAAN,8DAEK,6CACH,AAAY,WAAD,2BACS,wCAAS,0CAM/B;IAGb;;;QArB2B;QAAmB;QAAY;;IAAZ;IAAY;AAApD,gEAAqB,GAAG;;EAAmC","file":"../../../../../../../../../../packages/my_ticket_care/reusable/widgets/card_container.dart.lib.js"}');
  // Exports:
  return {
    reusable__widgets__card_container: card_container
  };
}));

//# sourceMappingURL=card_container.dart.lib.js.map
