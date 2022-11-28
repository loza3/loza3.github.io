define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/font_awesome_flutter/src/icon_data.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/src/booking/providers/booking_state.dart', 'packages/flutter/src/material/page.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/my_ticket_care/src/shared/models/employee.dart', 'packages/flutter/src/material/circle_avatar.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/my_ticket_care/src/shared/models/office.dart'], (function load__packages__my_ticket_care__src__shared__shared_widgets__model_cards_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__widgets__icon$46dart, packages__font_awesome_flutter__src__icon_data$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__src__booking__providers__booking_state$46dart, packages__flutter__src__material__page$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__my_ticket_care__src__shared__models__employee$46dart, packages__flutter__src__material__circle_avatar$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__my_ticket_care__src__shared__models__office$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const list_tile = packages__flutter__src__material__icon_button$46dart.src__material__list_tile;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__font_awesome_flutter__src__icon_data$46dart.src__icon_data;
  const icon_data$ = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const booking_state = packages__my_ticket_care__src__booking__providers__booking_state$46dart.src__booking__providers__booking_state;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  const circle_avatar = packages__flutter__src__material__circle_avatar$46dart.src__material__circle_avatar;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  var model_cards = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ServiceCard",
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 26,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 20,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: icon_data.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61617
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[4] || CT.C4,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 35,
        [Icon_icon]: C[5] || CT.C5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[3] || CT.C3,
        [Padding_padding]: C[6] || CT.C6
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 31,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: icon_data$.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61068
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[9] || CT.C9,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[10] || CT.C10
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 16,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 14,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SpecialistCard",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 26,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 20,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: icon_data$.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58513
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[18] || CT.C18,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 35,
        [Icon_icon]: C[19] || CT.C19
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget__location]: C[16] || CT.C16,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[17] || CT.C17,
        [Padding_padding]: C[6] || CT.C6
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[23] || CT.C23,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[10] || CT.C10
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeCard",
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleAvatar",
        [_Location_column]: 20,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 107,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 18,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 114,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[34] || CT.C34,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[10] || CT.C10
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 16,
        [_Location_line]: 99,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 14,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 12,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/model_cards.dart"
      });
    }
  }, false);
  var C = Array(38).fill(void 0);
  var I = ["package:my_ticket_care/src/shared/shared_widgets/model_cards.dart"];
  var item$ = dart.privateName(model_cards, "ServiceCard.item");
  var nextScreen$ = dart.privateName(model_cards, "ServiceCard.nextScreen");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data$, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data$, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data$, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data$, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Padding_padding = dart.privateName(basic, "Padding.padding");
  model_cards.ServiceCard = class ServiceCard extends framework.StatelessWidget {
    get item() {
      return this[item$];
    }
    set item(value) {
      super.item = value;
    }
    get nextScreen() {
      return this[nextScreen$];
    }
    set nextScreen(value) {
      super.nextScreen = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let item = opts && 'item' in opts ? opts.item : null;
      let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
      return new model_cards.ServiceCard.new({key: key, item: item, nextScreen: nextScreen, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new basic.SizedBox.new({child: new card.Card.new({elevation: 0.0, child: new list_tile.ListTile.new({leading: C[1] || CT.C1, title: new text.Text.new(this.item.serviceName, {$creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), trailing: C[8] || CT.C8, onTap: dart.fn(() => {
              provider['ReadContext|read'](booking_state.BookingStateProvider, context).setService(this.item);
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => this.nextScreen, T.BuildContextToWidget())}));
            }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
  };
  (model_cards.ServiceCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$] = item;
    this[nextScreen$] = nextScreen;
    model_cards.ServiceCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = model_cards.ServiceCard.prototype;
  dart.addTypeTests(model_cards.ServiceCard);
  dart.addTypeCaches(model_cards.ServiceCard);
  dart.setMethodSignature(model_cards.ServiceCard, () => ({
    __proto__: dart.getMethods(model_cards.ServiceCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(model_cards.ServiceCard, I[0]);
  dart.setFieldSignature(model_cards.ServiceCard, () => ({
    __proto__: dart.getFields(model_cards.ServiceCard.__proto__),
    item: dart.finalFieldType(service.Service),
    nextScreen: dart.finalFieldType(framework.Widget)
  }));
  var item$0 = dart.privateName(model_cards, "SpecialistCard.item");
  var nextScreen$0 = dart.privateName(model_cards, "SpecialistCard.nextScreen");
  model_cards.SpecialistCard = class SpecialistCard extends framework.StatelessWidget {
    get item() {
      return this[item$0];
    }
    set item(value) {
      super.item = value;
    }
    get nextScreen() {
      return this[nextScreen$0];
    }
    set nextScreen(value) {
      super.nextScreen = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let item = opts && 'item' in opts ? opts.item : null;
      let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
      return new model_cards.SpecialistCard.new({key: key, item: item, nextScreen: nextScreen, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    build(context) {
      return new basic.SizedBox.new({child: new card.Card.new({elevation: 0.0, child: new list_tile.ListTile.new({leading: C[15] || CT.C15, title: new text.Text.new(this.item.personName, {$creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), subtitle: new text.Text.new(this.item.companyName, {$creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), trailing: C[22] || CT.C22, onTap: dart.fn(() => {
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => this.nextScreen, T.BuildContextToWidget())}));
            }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
  };
  (model_cards.SpecialistCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$0] = item;
    this[nextScreen$0] = nextScreen;
    model_cards.SpecialistCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = model_cards.SpecialistCard.prototype;
  dart.addTypeTests(model_cards.SpecialistCard);
  dart.addTypeCaches(model_cards.SpecialistCard);
  dart.setMethodSignature(model_cards.SpecialistCard, () => ({
    __proto__: dart.getMethods(model_cards.SpecialistCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(model_cards.SpecialistCard, I[0]);
  dart.setFieldSignature(model_cards.SpecialistCard, () => ({
    __proto__: dart.getFields(model_cards.SpecialistCard.__proto__),
    item: dart.finalFieldType(employee.Employee),
    nextScreen: dart.finalFieldType(framework.Widget)
  }));
  var item$1 = dart.privateName(model_cards, "OfficeCard.item");
  var nextScreen$1 = dart.privateName(model_cards, "OfficeCard.nextScreen");
  model_cards.OfficeCard = class OfficeCard extends framework.StatelessWidget {
    get item() {
      return this[item$1];
    }
    set item(value) {
      super.item = value;
    }
    get nextScreen() {
      return this[nextScreen$1];
    }
    set nextScreen(value) {
      super.nextScreen = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let item = opts && 'item' in opts ? opts.item : null;
      let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
      return new model_cards.OfficeCard.new({key: key, item: item, nextScreen: nextScreen, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27});
    }
    build(context) {
      return new card.Card.new({elevation: 0.0, child: new basic.SizedBox.new({height: 75.0, child: new list_tile.ListTile.new({leading: new circle_avatar.CircleAvatar.new({backgroundImage: new _network_image_web.NetworkImage.new(this.item.companyLogo), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), title: new basic.Padding.new({padding: C[29] || CT.C29, child: new text.Text.new(this.item.officeName, {$creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), subtitle: new text.Text.new(this.item.address, {maxLines: 2, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32}), trailing: C[33] || CT.C33, onTap: dart.fn(() => {
              provider['ReadContext|read'](booking_state.BookingStateProvider, context).setOffice(this.item);
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => this.nextScreen, T.BuildContextToWidget())}));
            }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35}), $creationLocationd_0dea112b090073317d4: C[36] || CT.C36}), $creationLocationd_0dea112b090073317d4: C[37] || CT.C37});
    }
  };
  (model_cards.OfficeCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$1] = item;
    this[nextScreen$1] = nextScreen;
    model_cards.OfficeCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = model_cards.OfficeCard.prototype;
  dart.addTypeTests(model_cards.OfficeCard);
  dart.addTypeCaches(model_cards.OfficeCard);
  dart.setMethodSignature(model_cards.OfficeCard, () => ({
    __proto__: dart.getMethods(model_cards.OfficeCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(model_cards.OfficeCard, I[0]);
  dart.setFieldSignature(model_cards.OfficeCard, () => ({
    __proto__: dart.getFields(model_cards.OfficeCard.__proto__),
    item: dart.finalFieldType(office.Office),
    nextScreen: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_widgets/model_cards.dart", {
    "package:my_ticket_care/src/shared/shared_widgets/model_cards.dart": model_cards
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["model_cards.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcgB;;;;;;IACD;;;;;;;;;;;;UAGa;AACxB,YAAO,gCACE,8BACM,YACJ,2DAQE,kBAAK,AAAK,iHAEV;AACgD,cAA7C,AAA6B,iEAArC,OAAO,aAAyC;AAM/C,cALS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY;;IAOpC;;;QAnCO;QACS;QACA;;IADA;IACA;AACX,2DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IAuCL;;;;;;IACF;;;;;;;;;;;;UAEa;AACxB,YAAO,gCACE,8BACM,YACJ,6DAQE,kBAAK,AAAK,4FACP,kBAAK,AAAK,qHAEb;AAMJ,cALS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY;;IAOpC;;;QAhC2B;QAAmB;QAAoB;;IAApB;IAAoB;AAC5D,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IAyCR;;;;;;IACA;;;;;;;;;;;;UAEa;AACxB,YAAO,+BACM,YACJ,gCACG,aACD,qCACI,qDACU,wCACf,AAAK,0FAGF,wDAEE,kBAAK,AAAK,uJAET,kBACR,AAAK,8BACK,aACa,iIAGlB;AAC+C,cAA5C,AAA6B,iEAArC,OAAO,YAAwC;AAM9C,cALS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY;;IAOpC;;;QAzCO;QACS;QACA;;IADA;IACA;AACX,0DAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_widgets/model_cards.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_widgets__model_cards: model_cards
  };
}));

//# sourceMappingURL=model_cards.dart.lib.js.map
