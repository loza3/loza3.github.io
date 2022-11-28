define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/shared/models/employee.dart', 'packages/my_ticket_care/src/booking/providers/fetch_booking_data.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/card.dart', 'packages/my_ticket_care/src/shared/shared_widgets/loading_shimmer_widget.dart', 'packages/my_ticket_care/src/booking/presentation/widgets/employee_offers_card_loading.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/my_ticket_care/src/shared/models/offer.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/src/booking/providers/booking_state.dart', 'packages/flutter/src/painting/placeholder_span.dart'], (function load__packages__my_ticket_care__src__booking__presentation__widgets__employee_offers_card_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__shared__models__employee$46dart, packages__my_ticket_care__src__booking__providers__fetch_booking_data$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__card$46dart, packages__my_ticket_care__src__shared__shared_widgets__loading_shimmer_widget$46dart, packages__my_ticket_care__src__booking__presentation__widgets__employee_offers_card_loading$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__my_ticket_care__src__shared__models__offer$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__src__booking__providers__booking_state$46dart, packages__flutter__src__painting__placeholder_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const common = packages__riverpod__src__value_provider$46dart.src__common;
  const employee$ = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  const fetch_booking_data = packages__my_ticket_care__src__booking__providers__fetch_booking_data$46dart.src__booking__providers__fetch_booking_data;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const loading_shimmer_widget = packages__my_ticket_care__src__shared__shared_widgets__loading_shimmer_widget$46dart.src__shared__shared_widgets__loading_shimmer_widget;
  const employee_offers_card_loading = packages__my_ticket_care__src__booking__presentation__widgets__employee_offers_card_loading$46dart.src__booking__presentation__widgets__employee_offers_card_loading;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const offer = packages__my_ticket_care__src__shared__models__offer$46dart.src__shared__models__offer;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const booking_state = packages__my_ticket_care__src__booking__providers__booking_state$46dart.src__booking__providers__booking_state;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  var employee_offers_card = Object.create(dart.library);
  var $toString = dartx.toString;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    AsyncValueOfEmployee: () => (T.AsyncValueOfEmployee = dart.constFn(common.AsyncValue$(employee$.Employee)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    EmployeeToContainer: () => (T.EmployeeToContainer = dart.constFn(dart.fnType(container.Container, [employee$.Employee])))(),
    ObjectAndStackTraceToText: () => (T.ObjectAndStackTraceToText = dart.constFn(dart.fnType(text.Text, [core.Object, core.StackTrace])))(),
    VoidToShimmer: () => (T.VoidToShimmer = dart.constFn(dart.fnType(loading_shimmer_widget.Shimmer, [])))(),
    BuildContextAndintToOfferTileWidget: () => (T.BuildContextAndintToOfferTileWidget = dart.constFn(dart.fnType(employee_offers_card.OfferTileWidget, [framework.BuildContext, core.int])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EmployeeOffersCard",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 5
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330.0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EmployeeOffersHeader",
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EmployeeOffersTiles",
        [_Location_column]: 17,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 20,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 18,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[9] || CT.C9,
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
        [Text_data]: "Error obteniendo datos de empleado"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Shimmer",
        [_Location_column]: 22,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoadingEmployeeCard",
        [_Location_column]: 18,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: employee_offers_card_loading.LoadingEmployeeCard.prototype,
        [Widget__location]: C[13] || CT.C13,
        [Widget_key]: null
      });
    },
    get C15() {
      return C[15] = dart.constList([0.1, 0.3, 0.4], core.double);
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293651444.0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294243572.0
      });
    },
    get C16() {
      return C[16] = dart.constList([C[17] || CT.C17, C[18] || CT.C18, C[17] || CT.C17], ui.Color);
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.TileMode.prototype,
        [_Enum__name]: "clamp",
        [_Enum_index]: 0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0.3,
        [Alignment_x]: 1
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -0.3,
        [Alignment_x]: -1
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_transform]: null,
        [Gradient_stops]: C[15] || CT.C15,
        [Gradient_colors]: C[16] || CT.C16,
        [LinearGradient_tileMode]: C[19] || CT.C19,
        [LinearGradient_end]: C[20] || CT.C20,
        [LinearGradient_begin]: C[21] || CT.C21
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: loading_shimmer_widget.Shimmer.prototype,
        [Widget__location]: C[11] || CT.C11,
        [Widget_key]: null,
        [Shimmer_child]: C[12] || CT.C12,
        [Shimmer_linearGradient]: C[14] || CT.C14
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EmployeeOffersHeader",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 18,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 9,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EmployeeOffersTiles",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfferTileWidget",
        [_Location_column]: 18,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 21,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfferTileWidget",
        [_Location_column]: 9,
        [_Location_line]: 101,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 5,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 5,
        [EdgeInsets_left]: 0
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 129,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 16,
        [_Location_line]: 127,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 122,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 12,
        [_Location_line]: 117,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/employee_offers_card.dart"
      });
    }
  }, false);
  var C = Array(39).fill(void 0);
  var I = ["package:my_ticket_care/src/booking/presentation/widgets/employee_offers_card.dart"];
  var employeeId$ = dart.privateName(employee_offers_card, "EmployeeOffersCard.employeeId");
  var offers$ = dart.privateName(employee_offers_card, "EmployeeOffersCard.offers");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Color_value = dart.privateName(ui, "Color.value");
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
  var Shimmer_child = dart.privateName(loading_shimmer_widget, "Shimmer.child");
  var Gradient_transform = dart.privateName(gradient, "Gradient.transform");
  var Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  var Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  var LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  var Shimmer_linearGradient = dart.privateName(loading_shimmer_widget, "Shimmer.linearGradient");
  employee_offers_card.EmployeeOffersCard = class EmployeeOffersCard extends consumer.ConsumerWidget {
    get employeeId() {
      return this[employeeId$];
    }
    set employeeId(value) {
      super.employeeId = value;
    }
    get offers() {
      return this[offers$];
    }
    set offers(value) {
      super.offers = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let employeeId = opts && 'employeeId' in opts ? opts.employeeId : null;
      let offers = opts && 'offers' in opts ? opts.offers : null;
      return new employee_offers_card.EmployeeOffersCard.new({key: key, employeeId: employeeId, offers: offers, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context, ref) {
      let employee = ref.watch(T.AsyncValueOfEmployee(), fetch_booking_data.fetchEmployeeProvider.call(this.employeeId));
      return common['AsyncValueX|when'](employee$.Employee, framework.Widget, employee, {data: dart.fn(employeeData => new container.Container.new({padding: C[1] || CT.C1, child: new card.Card.new({elevation: 4.0, color: C[2] || CT.C2, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new employee_offers_card.EmployeeOffersHeader.new({employee: employeeData, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), new employee_offers_card.EmployeeOffersTiles.new({employee: employeeData, offers: this.offers, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4})]), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), T.EmployeeToContainer()), error: dart.fn((error, stackTrace) => C[8] || CT.C8, T.ObjectAndStackTraceToText()), loading: dart.fn(() => C[10] || CT.C10, T.VoidToShimmer())});
    }
  };
  (employee_offers_card.EmployeeOffersCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let employeeId = opts && 'employeeId' in opts ? opts.employeeId : null;
    let offers = opts && 'offers' in opts ? opts.offers : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[employeeId$] = employeeId;
    this[offers$] = offers;
    employee_offers_card.EmployeeOffersCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = employee_offers_card.EmployeeOffersCard.prototype;
  dart.addTypeTests(employee_offers_card.EmployeeOffersCard);
  dart.addTypeCaches(employee_offers_card.EmployeeOffersCard);
  dart.setMethodSignature(employee_offers_card.EmployeeOffersCard, () => ({
    __proto__: dart.getMethods(employee_offers_card.EmployeeOffersCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef])
  }));
  dart.setLibraryUri(employee_offers_card.EmployeeOffersCard, I[0]);
  dart.setFieldSignature(employee_offers_card.EmployeeOffersCard, () => ({
    __proto__: dart.getFields(employee_offers_card.EmployeeOffersCard.__proto__),
    employeeId: dart.finalFieldType(core.int),
    offers: dart.finalFieldType(core.List$(offer.Offer))
  }));
  var employee$0 = dart.privateName(employee_offers_card, "EmployeeOffersHeader.employee");
  employee_offers_card.EmployeeOffersHeader = class EmployeeOffersHeader extends framework.StatelessWidget {
    get employee() {
      return this[employee$0];
    }
    set employee(value) {
      super.employee = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let employee = opts && 'employee' in opts ? opts.employee : null;
      return new employee_offers_card.EmployeeOffersHeader.new({key: key, employee: employee, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
    }
    build(context) {
      return new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: C[23] || CT.C23, child: new icon.Icon.new(icons.Icons.people, {size: 50.0, color: theme.Theme.of(context).colorScheme.secondary, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(this.employee.personName, {$creationLocationd_0dea112b090073317d4: C[26] || CT.C26}), new text.Text.new(dart.toString(this.employee.specialities), {$creationLocationd_0dea112b090073317d4: C[27] || CT.C27})]), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28})]), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29});
    }
  };
  (employee_offers_card.EmployeeOffersHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let employee = opts && 'employee' in opts ? opts.employee : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[employee$0] = employee;
    employee_offers_card.EmployeeOffersHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = employee_offers_card.EmployeeOffersHeader.prototype;
  dart.addTypeTests(employee_offers_card.EmployeeOffersHeader);
  dart.addTypeCaches(employee_offers_card.EmployeeOffersHeader);
  dart.setMethodSignature(employee_offers_card.EmployeeOffersHeader, () => ({
    __proto__: dart.getMethods(employee_offers_card.EmployeeOffersHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(employee_offers_card.EmployeeOffersHeader, I[0]);
  dart.setFieldSignature(employee_offers_card.EmployeeOffersHeader, () => ({
    __proto__: dart.getFields(employee_offers_card.EmployeeOffersHeader.__proto__),
    employee: dart.finalFieldType(employee$.Employee)
  }));
  var employee$1 = dart.privateName(employee_offers_card, "EmployeeOffersTiles.employee");
  var offers$0 = dart.privateName(employee_offers_card, "EmployeeOffersTiles.offers");
  employee_offers_card.EmployeeOffersTiles = class EmployeeOffersTiles extends framework.StatelessWidget {
    get employee() {
      return this[employee$1];
    }
    set employee(value) {
      super.employee = value;
    }
    get offers() {
      return this[offers$0];
    }
    set offers(value) {
      super.offers = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let employee = opts && 'employee' in opts ? opts.employee : null;
      let offers = opts && 'offers' in opts ? opts.offers : null;
      return new employee_offers_card.EmployeeOffersTiles.new({key: key, employee: employee, offers: offers, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
    }
    build(context) {
      return new scroll_view.ListView.builder({shrinkWrap: true, itemCount: this.offers[$length], itemBuilder: dart.fn((context, index) => new employee_offers_card.OfferTileWidget.new({offer: this.offers[$_get](index), employee: this.employee, $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), T.BuildContextAndintToOfferTileWidget()), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
    }
  };
  (employee_offers_card.EmployeeOffersTiles.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let employee = opts && 'employee' in opts ? opts.employee : null;
    let offers = opts && 'offers' in opts ? opts.offers : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[employee$1] = employee;
    this[offers$0] = offers;
    employee_offers_card.EmployeeOffersTiles.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = employee_offers_card.EmployeeOffersTiles.prototype;
  dart.addTypeTests(employee_offers_card.EmployeeOffersTiles);
  dart.addTypeCaches(employee_offers_card.EmployeeOffersTiles);
  dart.setMethodSignature(employee_offers_card.EmployeeOffersTiles, () => ({
    __proto__: dart.getMethods(employee_offers_card.EmployeeOffersTiles.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(employee_offers_card.EmployeeOffersTiles, I[0]);
  dart.setFieldSignature(employee_offers_card.EmployeeOffersTiles, () => ({
    __proto__: dart.getFields(employee_offers_card.EmployeeOffersTiles.__proto__),
    employee: dart.finalFieldType(employee$.Employee),
    offers: dart.finalFieldType(core.List$(offer.Offer))
  }));
  var offer$ = dart.privateName(employee_offers_card, "OfferTileWidget.offer");
  var employee$2 = dart.privateName(employee_offers_card, "OfferTileWidget.employee");
  employee_offers_card.OfferTileWidget = class OfferTileWidget extends framework.StatelessWidget {
    get offer() {
      return this[offer$];
    }
    set offer(value) {
      super.offer = value;
    }
    get employee() {
      return this[employee$2];
    }
    set employee(value) {
      super.employee = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let offer = opts && 'offer' in opts ? opts.offer : null;
      let employee = opts && 'employee' in opts ? opts.employee : null;
      return new employee_offers_card.OfferTileWidget.new({key: key, offer: offer, employee: employee, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
    build(context) {
      let t0;
      let startTime = this.offer.startTime;
      let endTime = this.offer.endTime;
      let isSelected = provider['WatchContext|watch'](booking_state.BookingStateProvider, context).selectedOffer.offerId === this.offer.offerId;
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          provider['ReadContext|read'](booking_state.BookingStateProvider, context).setOffer(this.offer);
          provider['ReadContext|read'](booking_state.BookingStateProvider, context).setEmployee(this.employee);
        }, T.VoidTovoid()), child: new container.Container.new({color: isSelected ? theme.Theme.of(context).colorScheme.secondary : C[2] || CT.C2, height: 25.0, child: new basic.Padding.new({padding: C[34] || CT.C34, child: (t0 = ui.TextAlign.center, new text.Text.new(startTime + " - " + endTime, {textAlign: t0, style: new text_style.TextStyle.new({color: isSelected ? theme.Theme.of(context).colorScheme.onSecondary : null}), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35})), $creationLocationd_0dea112b090073317d4: C[36] || CT.C36}), $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38});
    }
  };
  (employee_offers_card.OfferTileWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let offer = opts && 'offer' in opts ? opts.offer : null;
    let employee = opts && 'employee' in opts ? opts.employee : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[offer$] = offer;
    this[employee$2] = employee;
    employee_offers_card.OfferTileWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = employee_offers_card.OfferTileWidget.prototype;
  dart.addTypeTests(employee_offers_card.OfferTileWidget);
  dart.addTypeCaches(employee_offers_card.OfferTileWidget);
  dart.setMethodSignature(employee_offers_card.OfferTileWidget, () => ({
    __proto__: dart.getMethods(employee_offers_card.OfferTileWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(employee_offers_card.OfferTileWidget, I[0]);
  dart.setFieldSignature(employee_offers_card.OfferTileWidget, () => ({
    __proto__: dart.getFields(employee_offers_card.OfferTileWidget.__proto__),
    offer: dart.finalFieldType(offer.Offer),
    employee: dart.finalFieldType(employee$.Employee)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/widgets/employee_offers_card.dart", {
    "package:my_ticket_care/src/booking/presentation/widgets/employee_offers_card.dart": employee_offers_card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["employee_offers_card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcY;;;;;;IACQ;;;;;;;;;;;;UAGQ,SAAuB;AACzC,qBAAW,AAAI,GAAD,iCAAO,AAAqB,8CAAC;AAEjD,YAAgB,kEAAT,QAAQ,SACP,QAAC,gBACE,4DAEE,8BACM,kCAEJ,gCACK,wBACR,6DAA+B,YAAY,2DAC3C,4DAA8B,YAAY,UAAU,oRAMvD,SAAC,OAAO,uEAGN;IAMb;;;QAlCU;QAAmB;QAA0B;;IAA1B;IAA0B;AACjD,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;IA0CN;;;;;;;;;;;UAEW;AACxB,YAAO,8BACK,wBACR,wDAES,kBACC,2BACA,aACO,AAAY,AAAY,eAArB,OAAO,+IAG3B,0CACyC,yCAC7B,wBACR,kBAAK,AAAS,sFACd,kBAA2B,cAAtB,AAAS;IAKxB;;;QA1BO;QACS;;;AACX,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;IAiCL;;;;;;IACG;;;;;;;;;;;;UAEQ;AACxB,YAAgB,+CACA,iBACD,AAAO,mCACL,SAAC,SAAS,UACd,qDAAuB,AAAM,mBAAC,KAAK,aAAa;IAE/D;;;QAdO;QACS;QACA;;IADA;IACA;AACX,4EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IAqBR;;;;;;IACG;;;;;;;;;;;;UAEW;;AACjB,sBAAY,AAAM;AAClB,oBAAU,AAAM;AAElB,uBACO,AAA8B,AAAc,AAAQ,mEAA5D,OAAO,4BACH,AAAM;AACd,YAAO,kDACE;AAC+C,UAA5C,AAA6B,iEAArC,OAAO,WAAuC;AACY,UAAlD,AAA6B,iEAArC,OAAO,cAA0C;mCAE5C,oCACE,UAAU,GACL,AAAY,AAAY,eAArB,OAAO,uCADL,UAGT,aACD,8DAGkB,qBADhB,kBAEH,AAAqB,SAAZ,WAAI,OAAO,yBACf,qCAED,UAAU,GAAS,AAAY,AAAY,eAArB,OAAO,4BAA4B,IAA/C;IAM1B;;;QAtCO;QACS;QACA;;IADA;IACA;AACX,wEAAW,GAAG;;EAAC","file":"../../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/widgets/employee_offers_card.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__widgets__employee_offers_card: employee_offers_card
  };
}));

//# sourceMappingURL=employee_offers_card.dart.lib.js.map
