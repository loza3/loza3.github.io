define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/src/booking/providers/booking_state.dart', 'packages/my_ticket_care/src/booking/providers/fetch_booking_data.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/shared/models/offer.dart', 'packages/my_ticket_care/src/booking/utils/offer_picker_controller.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/my_ticket_care/src/booking/presentation/widgets/employee_offers_card.dart', 'packages/my_ticket_care/src/shared/shared_widgets/loading_shimmer_widget.dart', 'packages/my_ticket_care/src/booking/presentation/widgets/employee_offers_card_loading.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/painting/alignment.dart'], (function load__packages__my_ticket_care__src__booking__presentation__offer_picker_widget_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__src__booking__providers__booking_state$46dart, packages__my_ticket_care__src__booking__providers__fetch_booking_data$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__shared__models__offer$46dart, packages__my_ticket_care__src__booking__utils__offer_picker_controller$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__my_ticket_care__src__booking__presentation__widgets__employee_offers_card$46dart, packages__my_ticket_care__src__shared__shared_widgets__loading_shimmer_widget$46dart, packages__my_ticket_care__src__booking__presentation__widgets__employee_offers_card_loading$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__painting__alignment$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const booking_state = packages__my_ticket_care__src__booking__providers__booking_state$46dart.src__booking__providers__booking_state;
  const fetch_booking_data = packages__my_ticket_care__src__booking__providers__fetch_booking_data$46dart.src__booking__providers__fetch_booking_data;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const common = packages__riverpod__src__value_provider$46dart.src__common;
  const offer = packages__my_ticket_care__src__shared__models__offer$46dart.src__shared__models__offer;
  const offer_picker_controller = packages__my_ticket_care__src__booking__utils__offer_picker_controller$46dart.src__booking__utils__offer_picker_controller;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const employee_offers_card = packages__my_ticket_care__src__booking__presentation__widgets__employee_offers_card$46dart.src__booking__presentation__widgets__employee_offers_card;
  const loading_shimmer_widget = packages__my_ticket_care__src__shared__shared_widgets__loading_shimmer_widget$46dart.src__shared__shared_widgets__loading_shimmer_widget;
  const employee_offers_card_loading = packages__my_ticket_care__src__booking__presentation__widgets__employee_offers_card_loading$46dart.src__booking__presentation__widgets__employee_offers_card_loading;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  var offer_picker_widget = Object.create(dart.library);
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfOffer: () => (T.ListOfOffer = dart.constFn(core.List$(offer.Offer)))(),
    AsyncValueOfListOfOffer: () => (T.AsyncValueOfListOfOffer = dart.constFn(common.AsyncValue$(T.ListOfOffer())))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndintToEmployeeOffersCard: () => (T.BuildContextAndintToEmployeeOffersCard = dart.constFn(dart.fnType(employee_offers_card.EmployeeOffersCard, [framework.BuildContext, core.int])))(),
    ListOfOfferToExpanded: () => (T.ListOfOfferToExpanded = dart.constFn(dart.fnType(basic.Expanded, [T.ListOfOffer()])))(),
    ObjectAndStackTraceToText: () => (T.ObjectAndStackTraceToText = dart.constFn(dart.fnType(text.Text, [core.Object, core.StackTrace])))(),
    VoidToShimmer: () => (T.VoidToShimmer = dart.constFn(dart.fnType(loading_shimmer_widget.Shimmer, [])))(),
    BuildContextAndWidgetRefAndWidgetNToContainer: () => (T.BuildContextAndWidgetRefAndWidgetNToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, consumer.WidgetRef, T.WidgetN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfferPickerWidget",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EmployeeOffersCard",
        [_Location_column]: 34,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 39,
        [_Location_line]: 48,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 28,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 34,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[6] || CT.C6,
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
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Shimmer",
        [_Location_column]: 34,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoadingEmployeeCard",
        [_Location_column]: 30,
        [_Location_line]: 66,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: employee_offers_card_loading.LoadingEmployeeCard.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null
      });
    },
    get C12() {
      return C[12] = dart.constList([0.1, 0.3, 0.4], core.double);
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293651444.0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294243572.0
      });
    },
    get C13() {
      return C[13] = dart.constList([C[14] || CT.C14, C[15] || CT.C15, C[14] || CT.C14], ui.Color);
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.TileMode.prototype,
        [_Enum__name]: "clamp",
        [_Enum_index]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0.3,
        [Alignment_x]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -0.3,
        [Alignment_x]: -1
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_transform]: null,
        [Gradient_stops]: C[12] || CT.C12,
        [Gradient_colors]: C[13] || CT.C13,
        [LinearGradient_tileMode]: C[16] || CT.C16,
        [LinearGradient_end]: C[17] || CT.C17,
        [LinearGradient_begin]: C[18] || CT.C18
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: loading_shimmer_widget.Shimmer.prototype,
        [Widget__location]: C[8] || CT.C8,
        [Widget_key]: null,
        [Shimmer_child]: C[9] || CT.C9,
        [Shimmer_linearGradient]: C[11] || CT.C11
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 22,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/offer_picker_widget.dart"
      });
    }
  }, false);
  var C = Array(21).fill(void 0);
  var I = ["package:my_ticket_care/src/booking/presentation/offer_picker_widget.dart"];
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
  var Shimmer_child = dart.privateName(loading_shimmer_widget, "Shimmer.child");
  var Gradient_transform = dart.privateName(gradient, "Gradient.transform");
  var Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  var Color_value = dart.privateName(ui, "Color.value");
  var Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  var LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  var Shimmer_linearGradient = dart.privateName(loading_shimmer_widget, "Shimmer.linearGradient");
  offer_picker_widget.OfferPickerWidget = class OfferPickerWidget extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new offer_picker_widget.OfferPickerWidget.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let bookingInfo = provider.Provider.of(booking_state.BookingStateProvider, context, {listen: true});
      let workday = bookingInfo.selectedWorkday;
      let office = bookingInfo.selectedOffice;
      let service = bookingInfo.selectedService;
      let workdayWasPicked = workday.workdayId !== -1;
      let offerParameter = new fetch_booking_data.OfferParameters.new({officeId: office.officeId, serviceId: service.serviceId, workdayId: workday.workdayId});
      return !workdayWasPicked ? new text.Text.new("Elige una fecha para continuar", {style: theme.Theme.of(context).textTheme.bodyLarge, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}) : new consumer.Consumer.new({builder: dart.fn((context, ref, child) => {
          let futureOffers = ref.watch(T.AsyncValueOfListOfOffer(), fetch_booking_data.fetchOffersProvider.call(offerParameter));
          return new container.Container.new({child: common['AsyncValueX|when'](T.ListOfOffer(), T.WidgetN(), futureOffers, {data: dart.fn(data => {
                let offers = data;
                let employeesId = new offer_picker_controller.OfferPickerController.new().getEmployeesId(offers)[$toList]();
                return new basic.Expanded.new({child: new scroll_view.ListView.builder({itemCount: employeesId[$length], itemBuilder: dart.fn((context, index) => {
                      let employeeId = employeesId[$_get](index);
                      let employeeOffers = new offer_picker_controller.OfferPickerController.new().getOffersFromEmployee(offers, employeeId);
                      return new employee_offers_card.EmployeeOffersCard.new({employeeId: employeeId, offers: employeeOffers, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
                    }, T.BuildContextAndintToEmployeeOffersCard()), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
              }, T.ListOfOfferToExpanded()), error: dart.fn((error, stackTrace) => C[5] || CT.C5, T.ObjectAndStackTraceToText()), loading: dart.fn(() => C[7] || CT.C7, T.VoidToShimmer())}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
        }, T.BuildContextAndWidgetRefAndWidgetNToContainer()), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
    }
  };
  (offer_picker_widget.OfferPickerWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    offer_picker_widget.OfferPickerWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = offer_picker_widget.OfferPickerWidget.prototype;
  dart.addTypeTests(offer_picker_widget.OfferPickerWidget);
  dart.addTypeCaches(offer_picker_widget.OfferPickerWidget);
  dart.setMethodSignature(offer_picker_widget.OfferPickerWidget, () => ({
    __proto__: dart.getMethods(offer_picker_widget.OfferPickerWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(offer_picker_widget.OfferPickerWidget, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/offer_picker_widget.dart", {
    "package:my_ticket_care/src/booking/presentation/offer_picker_widget.dart": offer_picker_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["offer_picker_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAgB4B;AACH,wBACR,yDAAyB,OAAO,WAAU;AAC/C,oBAAU,AAAY,WAAD;AACtB,mBAAS,AAAY,WAAD;AACnB,oBAAU,AAAY,WAAD;AAExB,6BAAmB,AAAQ,AAAU,OAAX,eAAc,CAAC;AAExC,2BAAiB,sDACT,AAAO,MAAD,sBACL,AAAQ,OAAD,uBACP,AAAQ,OAAD;AAEtB,cAAQ,gBAAgB,GAClB,kBACE,0CACa,AAAY,AAAU,eAAnB,OAAO,iFAErB,oCACO,SAAC,SAAS,KAAK;AAChB,6BACF,AAAI,GAAD,oCAAO,AAAmB,4CAAC,cAAc;AAChD,gBAAO,qCACe,yDAAb,YAAY,SACX,QAAC;AACO,6BAAS,IAAI;AACf,kCACN,AAAwB,AAAuB,uEAAR,MAAM;AAEjD,sBAAO,gCACW,6CACH,AAAY,WAAD,wBACT,SAAC,SAAS;AACjB,uCAAa,AAAW,WAAA,QAAC,KAAK;AACtB,2CAAiB,AACxB,8EAAsB,MAAM,EAAE,UAAU;AAE7C,4BAAO,8DACS,UAAU,UAAU,cAAc;;oDAKnD,SAAC,OAAO,uEAGN;;IASzB;;;QA3D8B;;AAAQ,yEAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/offer_picker_widget.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__offer_picker_widget: offer_picker_widget
  };
}));

//# sourceMappingURL=offer_picker_widget.dart.lib.js.map
