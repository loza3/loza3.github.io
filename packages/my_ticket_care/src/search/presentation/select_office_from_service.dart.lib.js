define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/search/providers/fetch_related_data_provider.dart', 'packages/my_ticket_care/src/shared/models/office.dart', 'packages/flutter/src/material/progress_indicator.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/my_ticket_care/src/shared/shared_widgets/model_cards.dart', 'packages/my_ticket_care/src/booking/presentation/reserve_booking.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__my_ticket_care__src__search__presentation__select_office_from_service_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__search__providers__fetch_related_data_provider$46dart, packages__my_ticket_care__src__shared__models__office$46dart, packages__flutter__src__material__progress_indicator$46dart, packages__flutter__src__painting__alignment$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__my_ticket_care__src__shared__shared_widgets__model_cards$46dart, packages__my_ticket_care__src__booking__presentation__reserve_booking$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const common = packages__riverpod__src__value_provider$46dart.src__common;
  const fetch_related_data_provider = packages__my_ticket_care__src__search__providers__fetch_related_data_provider$46dart.src__search__providers__fetch_related_data_provider;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  const progress_indicator = packages__flutter__src__material__progress_indicator$46dart.src__material__progress_indicator;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const model_cards = packages__my_ticket_care__src__shared__shared_widgets__model_cards$46dart.src__shared__shared_widgets__model_cards;
  const reserve_booking = packages__my_ticket_care__src__booking__presentation__reserve_booking$46dart.src__booking__presentation__reserve_booking;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var select_office_from_service = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    AsyncValueOfList: () => (T.AsyncValueOfList = dart.constFn(common.AsyncValue$(core.List)))(),
    ListOfOffice: () => (T.ListOfOffice = dart.constFn(core.List$(office.Office)))(),
    ListToListOffices: () => (T.ListToListOffices = dart.constFn(dart.fnType(select_office_from_service.ListOffices, [core.List])))(),
    ObjectAndStackTraceToText: () => (T.ObjectAndStackTraceToText = dart.constFn(dart.fnType(text.Text, [core.Object, core.StackTrace])))(),
    VoidToCenter: () => (T.VoidToCenter = dart.constFn(dart.fnType(basic.Center, [])))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetRefAndWidgetNToWidget: () => (T.BuildContextAndWidgetRefAndWidgetNToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef, T.WidgetN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextAndintToOfficeCard: () => (T.BuildContextAndintToOfficeCard = dart.constFn(dart.fnType(model_cards.OfficeCard, [framework.BuildContext, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectOfficeFromService",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectOfficeTitle",
        [_Location_column]: 22,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: select_office_from_service.SelectOfficeTitle.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppBar",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectOfficeServiceTitle",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListOffices",
        [_Location_column]: 26,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 32,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[7] || CT.C7,
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
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 32,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 28,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[11] || CT.C11,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[12] || CT.C12
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[9] || CT.C9,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[10] || CT.C10,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[13] || CT.C13
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 13,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListOffices",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: scroll_physics.NeverScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ReserveBookingScreen",
        [_Location_column]: 29,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: reserve_booking.ReserveBookingScreen.prototype,
        [Widget__location]: C[20] || CT.C20,
        [Widget_key]: null
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeCard",
        [_Location_column]: 16,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectOfficeServiceTitle",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 10
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 14,
        [_Location_line]: 88,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectOfficeTitle",
        [_Location_column]: 9,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 12,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/search/presentation/select_office_from_service.dart"
      });
    }
  }, false);
  var C = Array(29).fill(void 0);
  var I = ["package:my_ticket_care/src/search/presentation/select_office_from_service.dart"];
  var service$ = dart.privateName(select_office_from_service, "SelectOfficeFromService.service");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
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
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  var Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var Align_alignment = dart.privateName(basic, "Align.alignment");
  select_office_from_service.SelectOfficeFromService = class SelectOfficeFromService extends framework.StatelessWidget {
    get service() {
      return this[service$];
    }
    set service(value) {
      super.service = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let service = opts && 'service' in opts ? opts.service : null;
      return new select_office_from_service.SelectOfficeFromService.new({key: key, service: service, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({automaticallyImplyLeading: true, backgroundColor: colorScheme.secondary, title: C[1] || CT.C1, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new select_office_from_service.SelectOfficeServiceTitle.new({service: this.service, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), new consumer.Consumer.new({builder: dart.fn((context, ref, child) => {
                let serviceId = this.service.serviceId;
                let offices = ref.watch(T.AsyncValueOfList(), fetch_related_data_provider.fetchOfficesFromServiceProvider.call(serviceId));
                return common['AsyncValueX|when'](core.List, framework.Widget, offices, {data: dart.fn(data => {
                    let offices = T.ListOfOffice().as(data);
                    return new select_office_from_service.ListOffices.new({offices: offices, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
                  }, T.ListToListOffices()), error: dart.fn((error, stackTrace) => C[6] || CT.C6, T.ObjectAndStackTraceToText()), loading: dart.fn(() => C[8] || CT.C8, T.VoidToCenter())});
              }, T.BuildContextAndWidgetRefAndWidgetNToWidget()), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14})]), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
  };
  (select_office_from_service.SelectOfficeFromService.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let service = opts && 'service' in opts ? opts.service : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[service$] = service;
    select_office_from_service.SelectOfficeFromService.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = select_office_from_service.SelectOfficeFromService.prototype;
  dart.addTypeTests(select_office_from_service.SelectOfficeFromService);
  dart.addTypeCaches(select_office_from_service.SelectOfficeFromService);
  dart.setMethodSignature(select_office_from_service.SelectOfficeFromService, () => ({
    __proto__: dart.getMethods(select_office_from_service.SelectOfficeFromService.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(select_office_from_service.SelectOfficeFromService, I[0]);
  dart.setFieldSignature(select_office_from_service.SelectOfficeFromService, () => ({
    __proto__: dart.getFields(select_office_from_service.SelectOfficeFromService.__proto__),
    service: dart.finalFieldType(service.Service)
  }));
  var offices$ = dart.privateName(select_office_from_service, "ListOffices.offices");
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  select_office_from_service.ListOffices = class ListOffices extends framework.StatelessWidget {
    get offices() {
      return this[offices$];
    }
    set offices(value) {
      super.offices = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let offices = opts && 'offices' in opts ? opts.offices : null;
      return new select_office_from_service.ListOffices.new({key: key, offices: offices, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
    }
    build(context) {
      return new scroll_view.ListView.builder({shrinkWrap: true, physics: C[18] || CT.C18, itemCount: this.offices[$length], itemBuilder: dart.fn((context, index) => new model_cards.OfficeCard.new({item: this.offices[$_get](index), nextScreen: C[19] || CT.C19, $creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), T.BuildContextAndintToOfficeCard()), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
    }
  };
  (select_office_from_service.ListOffices.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let offices = opts && 'offices' in opts ? opts.offices : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[offices$] = offices;
    select_office_from_service.ListOffices.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = select_office_from_service.ListOffices.prototype;
  dart.addTypeTests(select_office_from_service.ListOffices);
  dart.addTypeCaches(select_office_from_service.ListOffices);
  dart.setMethodSignature(select_office_from_service.ListOffices, () => ({
    __proto__: dart.getMethods(select_office_from_service.ListOffices.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(select_office_from_service.ListOffices, I[0]);
  dart.setFieldSignature(select_office_from_service.ListOffices, () => ({
    __proto__: dart.getFields(select_office_from_service.ListOffices.__proto__),
    offices: dart.finalFieldType(core.List$(office.Office))
  }));
  var service$0 = dart.privateName(select_office_from_service, "SelectOfficeServiceTitle.service");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  select_office_from_service.SelectOfficeServiceTitle = class SelectOfficeServiceTitle extends framework.StatelessWidget {
    get service() {
      return this[service$0];
    }
    set service(value) {
      super.service = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let service = opts && 'service' in opts ? opts.service : null;
      return new select_office_from_service.SelectOfficeServiceTitle.new({key: key, service: service, $creationLocationd_0dea112b090073317d4: C[23] || CT.C23});
    }
    build(context) {
      return new basic.Padding.new({padding: C[24] || CT.C24, child: new text.Text.new("Servicio: " + this.service.serviceName, {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
  };
  (select_office_from_service.SelectOfficeServiceTitle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let service = opts && 'service' in opts ? opts.service : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[service$0] = service;
    select_office_from_service.SelectOfficeServiceTitle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = select_office_from_service.SelectOfficeServiceTitle.prototype;
  dart.addTypeTests(select_office_from_service.SelectOfficeServiceTitle);
  dart.addTypeCaches(select_office_from_service.SelectOfficeServiceTitle);
  dart.setMethodSignature(select_office_from_service.SelectOfficeServiceTitle, () => ({
    __proto__: dart.getMethods(select_office_from_service.SelectOfficeServiceTitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(select_office_from_service.SelectOfficeServiceTitle, I[0]);
  dart.setFieldSignature(select_office_from_service.SelectOfficeServiceTitle, () => ({
    __proto__: dart.getFields(select_office_from_service.SelectOfficeServiceTitle.__proto__),
    service: dart.finalFieldType(service.Service)
  }));
  select_office_from_service.SelectOfficeTitle = class SelectOfficeTitle extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new select_office_from_service.SelectOfficeTitle.new({key: key, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new text.Text.new("Mostrando sucursales", {style: dart.nullCheck(theme.Theme.of(context).textTheme.headline6).copyWith({color: colorScheme.onPrimary}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
    }
  };
  (select_office_from_service.SelectOfficeTitle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    select_office_from_service.SelectOfficeTitle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = select_office_from_service.SelectOfficeTitle.prototype;
  dart.addTypeTests(select_office_from_service.SelectOfficeTitle);
  dart.addTypeCaches(select_office_from_service.SelectOfficeTitle);
  dart.setMethodSignature(select_office_from_service.SelectOfficeTitle, () => ({
    __proto__: dart.getMethods(select_office_from_service.SelectOfficeTitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(select_office_from_service.SelectOfficeTitle, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/search/presentation/select_office_from_service.dart", {
    "package:my_ticket_care/src/search/presentation/select_office_from_service.dart": select_office_from_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["select_office_from_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcgB;;;;;;;;;;;UAEY;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAC1C,YAAO,oCACG,mDACqB,uBACV,AAAY,WAAD,iGAGxB,gCACM,wBACR,sEAAkC,uEAC9B,oCACO,SAAC,SAAS,KAAK;AAClB,gCAAY,AAAQ;AAClB,8BAAU,AAAI,GAAD,6BACjB,AAA+B,iEAAC,SAAS;AAE3C,sBAAe,yDAAR,OAAO,SACN,QAAC;AACQ,kCAAe,oBAAL,IAAI;AAC3B,0BAAO,0DAAqB,OAAO;oDAE9B,SAAC,OAAO,uEAGN;;IAWvB;;;QAzCoC;QAAmB;;;AACjD,sFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;IA8CF;;;;;;;;;;;UAEO;AACxB,YAAgB,+CACF,2CAED,AAAQ,oCACN,SAAC,SAAS,UACd,sCACC,AAAO,oBAAC,KAAK;IAK3B;;;QAhBwB;QAAmB;;;AAAY,0EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;IAyBxD;;;;;;;;;;;UAGY;AACxB,YAAO,yDAEE,kBACL,AAAkC,eAArB,AAAQ,kCACR,AAAY,AAAU,eAAnB,OAAO;IAG7B;;;QAfO;QACS;;;AACX,uFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;UAsBM;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,mBACL,gCAGc,AACT,eAHQ,AACR,AACA,eAFW,OAAO,wCAGF,AAAY,WAAD;IAEpC;;;QAdO;;AACF,gFAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/presentation/select_office_from_service.dart.lib.js"}');
  // Exports:
  return {
    src__search__presentation__select_office_from_service: select_office_from_service
  };
}));

//# sourceMappingURL=select_office_from_service.dart.lib.js.map
