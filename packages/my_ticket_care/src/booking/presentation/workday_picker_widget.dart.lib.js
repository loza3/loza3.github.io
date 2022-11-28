define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/src/booking/providers/booking_state.dart', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/shared/models/workday.dart', 'packages/my_ticket_care/src/booking/providers/fetch_booking_data.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/my_ticket_care/src/booking/utils/workday_picker_controller.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/date_picker.dart', 'packages/flutter_riverpod/src/consumer.dart'], (function load__packages__my_ticket_care__src__booking__presentation__workday_picker_widget_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__src__booking__providers__booking_state$46dart, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__shared__models__workday$46dart, packages__my_ticket_care__src__booking__providers__fetch_booking_data$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__my_ticket_care__src__booking__utils__workday_picker_controller$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__date_picker$46dart, packages__flutter_riverpod__src__consumer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const booking_state = packages__my_ticket_care__src__booking__providers__booking_state$46dart.src__booking__providers__booking_state;
  const common = packages__riverpod__src__value_provider$46dart.src__common;
  const workday = packages__my_ticket_care__src__shared__models__workday$46dart.src__shared__models__workday;
  const fetch_booking_data = packages__my_ticket_care__src__booking__providers__fetch_booking_data$46dart.src__booking__providers__fetch_booking_data;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const workday_picker_controller = packages__my_ticket_care__src__booking__utils__workday_picker_controller$46dart.src__booking__utils__workday_picker_controller;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const date_picker = packages__flutter__src__material__date_picker$46dart.src__material__date_picker;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  var workday_picker_widget = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  var $map = dartx.map;
  var $toSet = dartx.toSet;
  var $first = dartx.first;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfWorkday: () => (T.ListOfWorkday = dart.constFn(core.List$(workday.Workday)))(),
    AsyncValueOfListOfWorkday: () => (T.AsyncValueOfListOfWorkday = dart.constFn(common.AsyncValue$(T.ListOfWorkday())))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    ListOfWorkdayToTextButton: () => (T.ListOfWorkdayToTextButton = dart.constFn(dart.fnType(text_button.TextButton, [T.ListOfWorkday()])))(),
    ObjectAndStackTraceToText: () => (T.ObjectAndStackTraceToText = dart.constFn(dart.fnType(text.Text, [core.Object, core.StackTrace])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidToTextButton: () => (T.VoidToTextButton = dart.constFn(dart.fnType(text_button.TextButton, [])))(),
    WorkdayToString: () => (T.WorkdayToString = dart.constFn(dart.fnType(core.String, [workday.Workday])))(),
    DateTimeN: () => (T.DateTimeN = dart.constFn(dart.nullable(core.DateTime)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "WorkdayPickerWidget",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/workday_picker_widget.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 3,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 3
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 25,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/workday_picker_widget.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57782
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[3] || CT.C3,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[4] || CT.C4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/workday_picker_widget.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextButtonWithIcon",
        [_Location_column]: 29,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/workday_picker_widget.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/workday_picker_widget.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 60,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/workday_picker_widget.dart"
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
        [Text_data]: "Cargando..."
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 18,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/workday_picker_widget.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/workday_picker_widget.dart"
      });
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = ["package:my_ticket_care/src/booking/presentation/workday_picker_widget.dart"];
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
  workday_picker_widget.WorkdayPickerWidget = class WorkdayPickerWidget extends consumer.ConsumerWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new workday_picker_widget.WorkdayPickerWidget.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context, ref) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let bookingState = provider.Provider.of(booking_state.BookingStateProvider, context, {listen: false});
      let officeId = bookingState.selectedOffice.officeId;
      let futureWorkdayFromOffice = ref.watch(T.AsyncValueOfListOfWorkday(), fetch_booking_data.fetchWorkdaysProvider.call(officeId));
      return new container.Container.new({padding: C[1] || CT.C1, decoration: new box_decoration.BoxDecoration.new({color: colorScheme.primaryContainer, borderRadius: new border_radius.BorderRadius.circular(8.0)}), child: common['AsyncValueX|when'](T.ListOfWorkday(), T.WidgetN(), futureWorkdayFromOffice, {data: dart.fn(days => new text_button._TextButtonWithIcon.new({onPressed: dart.fn(() => async.async(dart.void, (function*() {
              if (days[$isEmpty]) {
                return;
              }
              let date = (yield this.pickWorkdayDate(context, days));
              if (date == null) {
                return;
              }
              let controller = new workday_picker_controller.WorkdayPickerController.new();
              let picked = controller.findWorkdayFromDate(days, date);
              bookingState.setWorkday(picked);
            }).bind(this)), T.VoidToFutureOfvoid()), icon: C[2] || CT.C2, label: new text.Text.new(provider['WatchContext|watch'](booking_state.BookingStateProvider, context).selectedWorkday.dateString, {style: theme.Theme.of(context).textTheme.bodyLarge, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), T.ListOfWorkdayToTextButton()), error: dart.fn((error, stackTrace) => new text.Text.new(error[$toString](), {$creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), T.ObjectAndStackTraceToText()), loading: dart.fn(() => new text_button.TextButton.new({onPressed: dart.fn(() => {
            }, T.VoidTovoid()), child: C[8] || CT.C8, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), T.VoidToTextButton())}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    pickWorkdayDate(context, days) {
      return async.async(T.DateTimeN(), function* pickWorkdayDate() {
        let controller = new workday_picker_controller.WorkdayPickerController.new();
        let available = controller.filterAvailableWorkdays(days);
        let predicate = available[$map](core.String, dart.fn(e => e.dateString, T.WorkdayToString()))[$toSet]();
        if (available[$isEmpty]) {
          return null;
        }
        let initialDate = available[$first].date;
        let workday = provider.Provider.of(booking_state.BookingStateProvider, context, {listen: false}).selectedWorkday;
        if (workday.workdayId !== -1) {
          initialDate = workday.date;
        }
        let date = (yield date_picker.showDatePicker({context: context, initialDate: initialDate, firstDate: available[$first].date, selectableDayPredicate: new workday_picker_controller.WorkdayPickerController.new().createPredicate(predicate), lastDate: new core.DateTime.new(2100)}));
        return date;
      });
    }
  };
  (workday_picker_widget.WorkdayPickerWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    workday_picker_widget.WorkdayPickerWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = workday_picker_widget.WorkdayPickerWidget.prototype;
  dart.addTypeTests(workday_picker_widget.WorkdayPickerWidget);
  dart.addTypeCaches(workday_picker_widget.WorkdayPickerWidget);
  dart.setMethodSignature(workday_picker_widget.WorkdayPickerWidget, () => ({
    __proto__: dart.getMethods(workday_picker_widget.WorkdayPickerWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef]),
    pickWorkdayDate: dart.fnType(async.Future$(dart.nullable(core.DateTime)), [framework.BuildContext, core.List$(workday.Workday)])
  }));
  dart.setLibraryUri(workday_picker_widget.WorkdayPickerWidget, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/workday_picker_widget.dart", {
    "package:my_ticket_care/src/booking/presentation/workday_picker_widget.dart": workday_picker_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["workday_picker_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAc4B,SAAmB;AAC/B,wBAAoB,AAAY,eAAT,OAAO;AAErB,yBACH,yDAAyB,OAAO,WAAU;AAExD,qBAAW,AAAa,AAAe,YAAhB;AACrB,oCAA0B,AAAI,GAAD,sCAAO,AAAqB,8CAAC,QAAQ;AAExE,YAAO,kEAEO,6CACH,AAAY,WAAD,iCACS,wCAAS,eAEP,2DAAxB,uBAAuB,SACtB,QAAC,QACa,oDACL;AACT,kBAAI,AAAK,IAAD;AACN;;AAGQ,0BAAO,MAAM,qBAAgB,OAAO,EAAE,IAAI;AACpD,kBAAI,AAAK,IAAD;AACN;;AAEI,+BAAa;AACX,2BAAS,AAAW,UAAD,qBAAqB,IAAI,EAAE,IAAI;AAC3B,cAA/B,AAAa,YAAD,YAAY,MAAM;YAC/B,qEAEM,kBACG,AAA8B,AAAgB,mEAAtD,OAAO,sCACM,AAAY,AAAU,eAAnB,OAAO,gLAItB,SAAC,OAAO,eACN,kBAAK,AAAM,KAAD,kHAEV,cACA,2CAAsB;;IAIrC;oBAGiB,SAAuB;AADP;AAEzB,yBAAa;AACL,wBAAY,AAAW,UAAD,yBAAyB,IAAI;AACrD,wBAAY,AAAU,AAAyB,SAA1B,oBAAK,QAAC,KAAM,AAAE,CAAD;AAE9C,YAAI,AAAU,SAAD;AACX,gBAAO;;AAGA,0BAAc,AAAU,AAAM,SAAP;AAExB,sBACU,AACT,yDADkC,OAAO,WAAU;AAE5D,YAAI,AAAQ,OAAD,eAAc,CAAC;AACE,UAA1B,cAAc,AAAQ,OAAD;;AAGb,oBAAO,MAAM,qCACZ,OAAO,eACH,WAAW,aACb,AAAU,AAAM,SAAP,uCAEhB,AAA0B,4EAAgB,SAAS,aAC7C,sBAAS;AAErB,cAAO,KAAI;MACb;;;;QA/EgC;;AAAQ,6EAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/workday_picker_widget.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__workday_picker_widget: workday_picker_widget
  };
}));

//# sourceMappingURL=workday_picker_widget.dart.lib.js.map
