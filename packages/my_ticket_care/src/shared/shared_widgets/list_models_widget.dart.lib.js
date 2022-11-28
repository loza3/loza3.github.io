define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/my_ticket_care/src/shared/models/employee.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/my_ticket_care/screens/profiles/employee_profile_screen.dart', 'packages/my_ticket_care/src/search/presentation/select_office_from_service.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/my_ticket_care/src/shared/models/office.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/material/circle_avatar.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/page.dart'], (function load__packages__my_ticket_care__src__shared__shared_widgets__list_models_widget_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__my_ticket_care__src__shared__models__employee$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__my_ticket_care__screens__profiles__employee_profile_screen$46dart, packages__my_ticket_care__src__search__presentation__select_office_from_service$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__my_ticket_care__src__shared__models__office$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__material__circle_avatar$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__page$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const list_tile = packages__flutter__src__material__icon_button$46dart.src__material__list_tile;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const model_cards = packages__my_ticket_care__screens__profiles__employee_profile_screen$46dart.reusable__widgets__model_cards;
  const select_office_from_service = packages__my_ticket_care__src__search__presentation__select_office_from_service$46dart.src__search__presentation__select_office_from_service;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const circle_avatar = packages__flutter__src__material__circle_avatar$46dart.src__material__circle_avatar;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  var list_models_widget = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $isNotEmpty = dartx.isNotEmpty;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextAndintToServiceCard: () => (T.BuildContextAndintToServiceCard = dart.constFn(dart.fnType(model_cards.ServiceCard, [framework.BuildContext, core.int])))(),
    BuildContextAndintToOfficeCard2: () => (T.BuildContextAndintToOfficeCard2 = dart.constFn(dart.fnType(list_models_widget.OfficeCard2, [framework.BuildContext, core.int])))(),
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
        [_Location_name]: "ListEmployeesWidget",
        [_Location_column]: 9,
        [_Location_line]: 8,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListServicesWidget",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: scroll_physics.NeverScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectOfficeFromService",
        [_Location_column]: 27,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ServiceCard",
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 18,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListOfficesWidget",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectOfficeFromService",
        [_Location_column]: 27,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeCard2",
        [_Location_column]: 20,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 18,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 12,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeCard2",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleAvatar",
        [_Location_column]: 20,
        [_Location_line]: 103,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 110,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 18,
        [_Location_line]: 108,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 112,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 117,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61068
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[25] || CT.C25,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[26] || CT.C26
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 16,
        [_Location_line]: 102,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 14,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 12,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/list_models_widget.dart"
      });
    }
  }, false);
  var C = Array(30).fill(void 0);
  var I = ["package:my_ticket_care/src/shared/shared_widgets/list_models_widget.dart"];
  var employees$ = dart.privateName(list_models_widget, "ListEmployeesWidget.employees");
  var title$ = dart.privateName(list_models_widget, "ListEmployeesWidget.title");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  list_models_widget.ListEmployeesWidget = class ListEmployeesWidget extends framework.StatelessWidget {
    get employees() {
      return this[employees$];
    }
    set employees(value) {
      super.employees = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let employees = opts && 'employees' in opts ? opts.employees : null;
      let title = opts && 'title' in opts ? opts.title : null;
      return new list_models_widget.ListEmployeesWidget.new({key: key, employees: employees, title: title, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
  };
  (list_models_widget.ListEmployeesWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let employees = opts && 'employees' in opts ? opts.employees : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[employees$] = employees;
    this[title$] = title;
    list_models_widget.ListEmployeesWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = list_models_widget.ListEmployeesWidget.prototype;
  dart.addTypeTests(list_models_widget.ListEmployeesWidget);
  dart.addTypeCaches(list_models_widget.ListEmployeesWidget);
  dart.setMethodSignature(list_models_widget.ListEmployeesWidget, () => ({
    __proto__: dart.getMethods(list_models_widget.ListEmployeesWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(list_models_widget.ListEmployeesWidget, I[0]);
  dart.setFieldSignature(list_models_widget.ListEmployeesWidget, () => ({
    __proto__: dart.getFields(list_models_widget.ListEmployeesWidget.__proto__),
    employees: dart.finalFieldType(core.List$(employee.Employee)),
    title: dart.finalFieldType(dart.nullable(core.String))
  }));
  var services$ = dart.privateName(list_models_widget, "ListServicesWidget.services");
  var title$0 = dart.privateName(list_models_widget, "ListServicesWidget.title");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  list_models_widget.ListServicesWidget = class ListServicesWidget extends framework.StatelessWidget {
    get services() {
      return this[services$];
    }
    set services(value) {
      super.services = value;
    }
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let services = opts && 'services' in opts ? opts.services : null;
      let title = opts && 'title' in opts ? opts.title : null;
      return new list_models_widget.ListServicesWidget.new({key: key, services: services, title: title, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    build(context) {
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
          let t0 = T.JSArrayOfWidget().of([]);
          if (this.title != null) t0.push(new basic.Padding.new({padding: C[3] || CT.C3, child: new text.Text.new(dart.nullCheck(this.title), {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}));
          t0.push(new scroll_view.ListView.builder({shrinkWrap: true, physics: C[6] || CT.C6, itemCount: this.services[$length], itemBuilder: dart.fn((context, index) => new model_cards.ServiceCard.new({item: this.services[$_get](index), nextScreen: new select_office_from_service.SelectOfficeFromService.new({service: this.services[$_get](index), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), T.BuildContextAndintToServiceCard()), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}));
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
  };
  (list_models_widget.ListServicesWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let services = opts && 'services' in opts ? opts.services : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[services$] = services;
    this[title$0] = title;
    list_models_widget.ListServicesWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = list_models_widget.ListServicesWidget.prototype;
  dart.addTypeTests(list_models_widget.ListServicesWidget);
  dart.addTypeCaches(list_models_widget.ListServicesWidget);
  dart.setMethodSignature(list_models_widget.ListServicesWidget, () => ({
    __proto__: dart.getMethods(list_models_widget.ListServicesWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(list_models_widget.ListServicesWidget, I[0]);
  dart.setFieldSignature(list_models_widget.ListServicesWidget, () => ({
    __proto__: dart.getFields(list_models_widget.ListServicesWidget.__proto__),
    services: dart.finalFieldType(core.List$(service.Service)),
    title: dart.finalFieldType(dart.nullable(core.String))
  }));
  var offices$ = dart.privateName(list_models_widget, "ListOfficesWidget.offices");
  var title$1 = dart.privateName(list_models_widget, "ListOfficesWidget.title");
  list_models_widget.ListOfficesWidget = class ListOfficesWidget extends framework.StatelessWidget {
    get offices() {
      return this[offices$];
    }
    set offices(value) {
      super.offices = value;
    }
    get title() {
      return this[title$1];
    }
    set title(value) {
      super.title = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let offices = opts && 'offices' in opts ? opts.offices : null;
      let title = opts && 'title' in opts ? opts.title : null;
      return new list_models_widget.ListOfficesWidget.new({key: key, offices: offices, title: title, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    build(context) {
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
          let t1 = T.JSArrayOfWidget().of([]);
          if (this.title != null && this.offices[$isNotEmpty]) t1.push(new basic.Padding.new({padding: C[3] || CT.C3, child: new text.Text.new(dart.nullCheck(this.title), {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}));
          t1.push(new scroll_view.ListView.builder({shrinkWrap: true, physics: C[6] || CT.C6, itemCount: this.offices[$length], itemBuilder: dart.fn((context, index) => new list_models_widget.OfficeCard2.new({item: this.offices[$_get](index), nextScreen: new select_office_from_service.SelectOfficeFromService.new({service: service.Service.empty(), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), T.BuildContextAndintToOfficeCard2()), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}));
          return t1;
        })(), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
    }
  };
  (list_models_widget.ListOfficesWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let offices = opts && 'offices' in opts ? opts.offices : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[offices$] = offices;
    this[title$1] = title;
    list_models_widget.ListOfficesWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = list_models_widget.ListOfficesWidget.prototype;
  dart.addTypeTests(list_models_widget.ListOfficesWidget);
  dart.addTypeCaches(list_models_widget.ListOfficesWidget);
  dart.setMethodSignature(list_models_widget.ListOfficesWidget, () => ({
    __proto__: dart.getMethods(list_models_widget.ListOfficesWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(list_models_widget.ListOfficesWidget, I[0]);
  dart.setFieldSignature(list_models_widget.ListOfficesWidget, () => ({
    __proto__: dart.getFields(list_models_widget.ListOfficesWidget.__proto__),
    offices: dart.finalFieldType(core.List$(office.Office)),
    title: dart.finalFieldType(dart.nullable(core.String))
  }));
  var item$ = dart.privateName(list_models_widget, "OfficeCard2.item");
  var nextScreen$ = dart.privateName(list_models_widget, "OfficeCard2.nextScreen");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  list_models_widget.OfficeCard2 = class OfficeCard2 extends framework.StatelessWidget {
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
      return new list_models_widget.OfficeCard2.new({key: key, item: item, nextScreen: nextScreen, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
    }
    build(context) {
      return new card.Card.new({elevation: 0.0, child: new basic.SizedBox.new({height: 75.0, child: new list_tile.ListTile.new({leading: new circle_avatar.CircleAvatar.new({backgroundImage: new _network_image_web.NetworkImage.new(this.item.companyLogo), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), title: new basic.Padding.new({padding: C[20] || CT.C20, child: new text.Text.new(this.item.officeName, {$creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), subtitle: new text.Text.new(this.item.address, {maxLines: 2, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), trailing: C[24] || CT.C24, onTap: dart.fn(() => {
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => this.nextScreen, T.BuildContextToWidget())}));
            }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29});
    }
  };
  (list_models_widget.OfficeCard2.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$] = item;
    this[nextScreen$] = nextScreen;
    list_models_widget.OfficeCard2.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = list_models_widget.OfficeCard2.prototype;
  dart.addTypeTests(list_models_widget.OfficeCard2);
  dart.addTypeCaches(list_models_widget.OfficeCard2);
  dart.setMethodSignature(list_models_widget.OfficeCard2, () => ({
    __proto__: dart.getMethods(list_models_widget.OfficeCard2.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(list_models_widget.OfficeCard2, I[0]);
  dart.setFieldSignature(list_models_widget.OfficeCard2, () => ({
    __proto__: dart.getFields(list_models_widget.OfficeCard2.__proto__),
    item: dart.finalFieldType(office.Office),
    nextScreen: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_widgets/list_models_widget.dart", {
    "package:my_ticket_care/src/shared/shared_widgets/list_models_widget.dart": list_models_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["list_models_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUuB;;;;;;IACP;;;;;;;;;;;;UAEY;AACxB,YAAO;IACT;;;QARgC;QAAmB;QAAgB;;IAAhB;IAAgB;AAC7D,0EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;IAcD;;;;;;IACN;;;;;;;;;;;;UAEY;AACxB,YAAO,2CACkC,yCAC7B;;AACR,cAAI,oBACF,8DAES,kBAAU,eAAL,qBAAqB,AAAY,AAAU,eAAnB,OAAO;AAEtC,gEACK,yCAED,AAAS,qCACP,SAAC,SAAS,UACd,uCACC,AAAQ,qBAAC,KAAK,eACR,qEACD,AAAQ,qBAAC,KAAK;;;IAOrC;;;QA9B+B;QAAmB;QAAe;;IAAf;IAAe;AAC3D,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IAoCF;;;;;;IACL;;;;;;;;;;;;UAEY;AACxB,YAAO,2CACkC,yCAC7B;;AACR,cAAI,sBAAiB,AAAQ,2BAC3B,8DAES,kBAAU,eAAL,qBAAqB,AAAY,AAAU,eAAnB,OAAO;AAEtC,gEACK,yCAED,AAAQ,oCACN,SAAC,SAAS,UACd,8CACC,AAAO,oBAAC,KAAK,eACP,qEACO;;;IAO/B;;;QA9B8B;QAAmB;QAAc;;IAAd;IAAc;AACzD,wEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuCR;;;;;;IACA;;;;;;;;;;;;UAEa;AACxB,YAAO,+BACM,YACJ,gCACG,aACD,qCACI,qDACU,wCACf,AAAK,0FAGF,wDAEE,kBAAK,AAAK,uJAET,kBACR,AAAK,8BACK,aACa,iIAGlB;AAMJ,cALS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY;;IAOpC;;;QAxCO;QACS;QACA;;IADA;IACA;AACX,kEAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_widgets/list_models_widget.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_widgets__list_models_widget: list_models_widget
  };
}));

//# sourceMappingURL=list_models_widget.dart.lib.js.map
