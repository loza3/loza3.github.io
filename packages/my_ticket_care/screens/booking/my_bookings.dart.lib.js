define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/widgets/annotated_region.dart', 'packages/flutter/src/services/system_chrome.dart', 'packages/my_ticket_care/reusable/app_colors.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/my_ticket_care/models/test_data/booking_test_data.dart', 'packages/flutter/src/material/page.dart', 'packages/my_ticket_care/screens/booking/booking_info.dart', 'packages/my_ticket_care/reusable/container_cards.dart'], (function load__packages__my_ticket_care__screens__booking__my_bookings_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__widgets__annotated_region$46dart, packages__flutter__src__services__system_chrome$46dart, packages__my_ticket_care__reusable__app_colors$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__my_ticket_care__models__test_data__booking_test_data$46dart, packages__flutter__src__material__page$46dart, packages__my_ticket_care__screens__booking__booking_info$46dart, packages__my_ticket_care__reusable__container_cards$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const annotated_region = packages__flutter__src__widgets__annotated_region$46dart.src__widgets__annotated_region;
  const system_chrome = packages__flutter__src__services__system_chrome$46dart.src__services__system_chrome;
  const app_colors = packages__my_ticket_care__reusable__app_colors$46dart.reusable__app_colors;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const booking_test_data = packages__my_ticket_care__models__test_data__booking_test_data$46dart.models__test_data__booking_test_data;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const booking_info = packages__my_ticket_care__screens__booking__booking_info$46dart.screens__booking__booking_info;
  const container_cards = packages__my_ticket_care__reusable__container_cards$46dart.reusable__container_cards;
  var my_bookings = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    AnnotatedRegionOfSystemUiOverlayStyle: () => (T.AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(annotated_region.AnnotatedRegion$(system_chrome.SystemUiOverlayStyle)))(),
    BuildContextToBookingInfo: () => (T.BuildContextToBookingInfo = dart.constFn(dart.fnType(booking_info.BookingInfo, [framework.BuildContext])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    BuildContextAndintToGestureDetector: () => (T.BuildContextAndintToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [framework.BuildContext, core.int])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MyBookings",
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingInfo",
        [_Location_column]: 53,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 30,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 33,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 15,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 16,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnnotatedRegion",
        [_Location_column]: 28,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/my_bookings.dart"
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = ["package:my_ticket_care/screens/booking/my_bookings.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  my_bookings.MyBookings = class MyBookings extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new my_bookings.MyBookings.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new my_bookings._MyBookingsState.new();
    }
  };
  (my_bookings.MyBookings.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    my_bookings.MyBookings.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = my_bookings.MyBookings.prototype;
  dart.addTypeTests(my_bookings.MyBookings);
  dart.addTypeCaches(my_bookings.MyBookings);
  dart.setMethodSignature(my_bookings.MyBookings, () => ({
    __proto__: dart.getMethods(my_bookings.MyBookings.__proto__),
    createState: dart.fnType(framework.State$(my_bookings.MyBookings), [])
  }));
  dart.setLibraryUri(my_bookings.MyBookings, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  my_bookings._MyBookingsState = class _MyBookingsState extends framework.State$(my_bookings.MyBookings) {
    build(context) {
      return new scaffold.Scaffold.new({bottomNavigationBar: new (T.AnnotatedRegionOfSystemUiOverlayStyle()).new({value: system_chrome.SystemUiOverlayStyle.light.copyWith({statusBarColor: app_colors.AppColors.primaryColor}), child: new scaffold.Scaffold.new({body: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new scroll_view.ListView.builder({padding: C[1] || CT.C1, itemCount: booking_test_data.listadoReservas[$length], itemBuilder: dart.fn((context, index) => {
                      let bookItem = booking_test_data.listadoReservas[$_get](index);
                      let serviceName = core.String.as(bookItem[$_get]("serviceName"));
                      let time = core.String.as(bookItem[$_get]("time"));
                      let specialistName = core.String.as(bookItem[$_get]("specialistName"));
                      let date = core.String.as(bookItem[$_get]("date"));
                      let companyName = core.String.as(bookItem[$_get]("companyName"));
                      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new booking_info.BookingInfo.new({serviceData: bookItem, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), T.BuildContextToBookingInfo())}));
                        }, T.VoidTovoid()), child: container_cards.ContainersCards.cardsDecorations({context: context, hora: true, imagen: "https://picsum.photos/300/30" + index[$toString](), titulo: serviceName, subtitulo: companyName, subtitulo2: specialistName, button1: date, button2: time}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
                    }, T.BuildContextAndintToGestureDetector()), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5})]), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    static ['_#new#tearOff']() {
      return new my_bookings._MyBookingsState.new();
    }
  };
  (my_bookings._MyBookingsState.new = function() {
    my_bookings._MyBookingsState.__proto__.new.call(this);
    ;
  }).prototype = my_bookings._MyBookingsState.prototype;
  dart.addTypeTests(my_bookings._MyBookingsState);
  dart.addTypeCaches(my_bookings._MyBookingsState);
  dart.setMethodSignature(my_bookings._MyBookingsState, () => ({
    __proto__: dart.getMethods(my_bookings._MyBookingsState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(my_bookings._MyBookingsState, I[0]);
  dart.trackLibraries("packages/my_ticket_care/screens/booking/my_bookings.dart", {
    "package:my_ticket_care/screens/booking/my_bookings.dart": my_bookings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["my_bookings.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWqC;IAAkB;;;QAH9B;;AAAQ,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;UAQpB;AACxB,YAAO,iDACgB,4DACS,AACvB,mEAAmC,4CACjC,iCACC,0CACmC,yCACrB,wBAChB,+BACkB,qEAED,AAAgB,yDACd,SAAC,SAAS;AACjB,qCAAW,AAAe,yCAAC,KAAK;AAC7B,uDAAc,AAAQ,QAAA,QAAC;AACvB,gDAAO,AAAQ,QAAA,QAAC;AAChB,0DAAiB,AAAQ,QAAA,QAAC;AAC1B,gDAAO,AAAQ,QAAA,QAAC;AAChB,uDAAc,AAAQ,QAAA,QAAC;AAE9B,4BAAO,kDACE;AAQJ,0BAPS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY,+CACP,QAAQ;mDAKN,2DACV,OAAO,QACV,cAEF,AAAiD,iCAAlB,AAAM,KAAD,uBAChC,WAAW,aACR,WAAW,cACV,cAAc,WACjB,IAAI,WACJ,IAAI;;IASvC;;;;;;;;EACF","file":"../../../../../../../../../../packages/my_ticket_care/screens/booking/my_bookings.dart.lib.js"}');
  // Exports:
  return {
    screens__booking__my_bookings: my_bookings
  };
}));

//# sourceMappingURL=my_bookings.dart.lib.js.map
