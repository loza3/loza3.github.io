define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/my_ticket_care/src/booking/presentation/workday_picker_widget.dart', 'packages/my_ticket_care/src/booking/presentation/offer_picker_widget.dart'], (function load__packages__my_ticket_care__src__booking__presentation__reserve_booking_offer_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__icon_button$46dart, packages__my_ticket_care__src__booking__presentation__workday_picker_widget$46dart, packages__my_ticket_care__src__booking__presentation__offer_picker_widget$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const workday_picker_widget = packages__my_ticket_care__src__booking__presentation__workday_picker_widget$46dart.src__booking__presentation__workday_picker_widget;
  const offer_picker_widget = packages__my_ticket_care__src__booking__presentation__offer_picker_widget$46dart.src__booking__presentation__offer_picker_widget;
  var reserve_booking_offer = Object.create(dart.library);
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
        [_Location_name]: "ReserveBookingOfferScreen",
        [_Location_column]: 9,
        [_Location_line]: 7,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[3] || CT.C3,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "WorkdayPickerWidget",
        [_Location_column]: 17,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: workday_picker_widget.WorkdayPickerWidget.prototype,
        [Widget__location]: C[8] || CT.C8,
        [Widget_key]: null
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: 2,
        [Divider_height]: 30
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[13] || CT.C13,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfferPickerWidget",
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: offer_picker_widget.OfferPickerWidget.prototype,
        [Widget__location]: C[15] || CT.C15,
        [Widget_key]: null
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_offer.dart"
      });
    }
  }, false);
  var C = Array(18).fill(void 0);
  var I = ["package:my_ticket_care/src/booking/presentation/reserve_booking_offer.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  reserve_booking_offer.ReserveBookingOfferScreen = class ReserveBookingOfferScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new reserve_booking_offer.ReserveBookingOfferScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new basic.Padding.new({padding: C[1] || CT.C1, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([C[2] || CT.C2, new text.Text.new("Seleccione la fecha: ", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), C[5] || CT.C5, C[7] || CT.C7, C[9] || CT.C9, new text.Text.new("Ofertas disponibles: ", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), C[12] || CT.C12, C[14] || CT.C14]), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
    }
  };
  (reserve_booking_offer.ReserveBookingOfferScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    reserve_booking_offer.ReserveBookingOfferScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reserve_booking_offer.ReserveBookingOfferScreen.prototype;
  dart.addTypeTests(reserve_booking_offer.ReserveBookingOfferScreen);
  dart.addTypeCaches(reserve_booking_offer.ReserveBookingOfferScreen);
  dart.setMethodSignature(reserve_booking_offer.ReserveBookingOfferScreen, () => ({
    __proto__: dart.getMethods(reserve_booking_offer.ReserveBookingOfferScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(reserve_booking_offer.ReserveBookingOfferScreen, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/reserve_booking_offer.dart", {
    "package:my_ticket_care/src/booking/presentation/reserve_booking_offer.dart": reserve_booking_offer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reserve_booking_offer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,uDAEE,0CACkC,0CAC7B,uCAER,kBAAK,iCACY,AAAY,AAAU,eAAnB,OAAO,6HAI3B,kBAAK,iCACY,AAAY,AAAU,eAAnB,OAAO;IAMnC;;;QAtBsC;;AAAQ,mFAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/reserve_booking_offer.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__reserve_booking_offer: reserve_booking_offer
  };
}));

//# sourceMappingURL=reserve_booking_offer.dart.lib.js.map
