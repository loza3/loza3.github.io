define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/riverpod/src/value_provider.dart', 'packages/flutter/src/material/checkbox_list_tile.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/riverpod/src/state_controller.dart', 'packages/my_ticket_care/src/shared/models/person.dart', 'packages/intl/src/intl/date_format.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/date_picker.dart'], (function load__packages__my_ticket_care__src__shared__shared_utilities__form_related_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__riverpod__src__value_provider$46dart, packages__flutter__src__material__checkbox_list_tile$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__icon_button$46dart, packages__riverpod__src__state_controller$46dart, packages__my_ticket_care__src__shared__models__person$46dart, packages__intl__src__intl__date_format$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__date_picker$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const developer = dart_sdk.developer;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const binding = packages__flutter__src__widgets__title$46dart.src__widgets__binding;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const focus_scope = packages__flutter__src__widgets__title$46dart.src__widgets__focus_scope;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const state_provider = packages__riverpod__src__value_provider$46dart.src__state_provider;
  const checkbox_list_tile = packages__flutter__src__material__checkbox_list_tile$46dart.src__material__checkbox_list_tile;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const list_tile = packages__flutter__src__material__icon_button$46dart.src__material__list_tile;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const state_controller = packages__riverpod__src__state_controller$46dart.src__state_controller;
  const person = packages__my_ticket_care__src__shared__models__person$46dart.src__shared__models__person;
  const date_format = packages__intl__src__intl__date_format$46dart.src__intl__date_format;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const date_picker = packages__flutter__src__material__date_picker$46dart.src__material__date_picker;
  var form_related = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    DurationTovoid: () => (T.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    StateControllerOfGender: () => (T.StateControllerOfGender = dart.constFn(state_controller.StateController$(form_related.Gender)))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    boolNTovoid: () => (T.boolNTovoid = dart.constFn(dart.fnType(dart.void, [T.boolN()])))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetRefAndWidgetNToCheckboxListTile: () => (T.BuildContextAndWidgetRefAndWidgetNToCheckboxListTile = dart.constFn(dart.fnType(checkbox_list_tile.CheckboxListTile, [framework.BuildContext, consumer.WidgetRef, T.WidgetN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    DateTimeN: () => (T.DateTimeN = dart.constFn(dart.nullable(core.DateTime)))(),
    StateControllerOfDateTimeN: () => (T.StateControllerOfDateTimeN = dart.constFn(state_controller.StateController$(T.DateTimeN())))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: form_related.Gender.prototype,
        [_Enum__name]: "male",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: form_related.Gender.prototype,
        [_Enum__name]: "female",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: form_related.Gender.prototype,
        [_Enum__name]: "unselected",
        [_Enum_index]: 2
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], form_related.Gender);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GenderPickerWidget",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
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
        [Text_data]: "Masculino"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CheckboxListTile",
        [_Location_column]: 20,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 18,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[11] || CT.C11,
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
        [Text_data]: "Femenino"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CheckboxListTile",
        [_Location_column]: 20,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 18,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GenderPickerWidget2",
        [_Location_column]: 9,
        [_Location_line]: 80,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 124,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[18] || CT.C18,
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
        [Text_data]: "Masculino"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CheckboxListTile",
        [_Location_column]: 18,
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 114,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 137,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[22] || CT.C22,
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
        [Text_data]: "Femenino"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CheckboxListTile",
        [_Location_column]: 18,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 127,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 112,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DatePickerWidget",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 3,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 3
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 21,
        [_Location_line]: 200,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57782
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[29] || CT.C29,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[30] || CT.C30
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 201,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextButtonWithIcon",
        [_Location_column]: 25,
        [_Location_line]: 190,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 184,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DatePickerWidget2",
        [_Location_column]: 9,
        [_Location_line]: 225,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 21,
        [_Location_line]: 281,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[36] || CT.C36,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[30] || CT.C30
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 282,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextButtonWithIcon",
        [_Location_column]: 25,
        [_Location_line]: 269,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 263,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
      });
    }
  }, false);
  var C = Array(40).fill(void 0);
  var I = [
    "package:my_ticket_care/src/shared/shared_utilities/form_related.dart",
    "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_utilities/form_related.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  form_related.Gender = class Gender extends core._Enum {
    toString() {
      return "Gender." + this[_name];
    }
  };
  (form_related.Gender.new = function(index, name) {
    form_related.Gender.__proto__.new.call(this, index, name);
    ;
  }).prototype = form_related.Gender.prototype;
  dart.addTypeTests(form_related.Gender);
  dart.addTypeCaches(form_related.Gender);
  dart.setLibraryUri(form_related.Gender, I[0]);
  dart.setStaticFieldSignature(form_related.Gender, () => ['values', 'male', 'female', 'unselected']);
  dart.defineExtensionMethods(form_related.Gender, ['toString']);
  dart.defineLazy(form_related.Gender, {
    /*form_related.Gender.values*/get values() {
      return C[0] || CT.C0;
    },
    /*form_related.Gender.male*/get male() {
      return C[1] || CT.C1;
    },
    /*form_related.Gender.female*/get female() {
      return C[2] || CT.C2;
    },
    /*form_related.Gender.unselected*/get unselected() {
      return C[3] || CT.C3;
    }
  }, false);
  var genderProvider$ = dart.privateName(form_related, "GenderPickerWidget.genderProvider");
  var initialValue$ = dart.privateName(form_related, "GenderPickerWidget.initialValue");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  form_related.GenderPickerWidget = class GenderPickerWidget extends consumer.ConsumerStatefulWidget {
    get genderProvider() {
      return this[genderProvider$];
    }
    set genderProvider(value) {
      super.genderProvider = value;
    }
    get initialValue() {
      return this[initialValue$];
    }
    set initialValue(value) {
      super.initialValue = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let genderProvider = opts && 'genderProvider' in opts ? opts.genderProvider : null;
      let initialValue = opts && 'initialValue' in opts ? opts.initialValue : C[3] || CT.C3;
      return new form_related.GenderPickerWidget.new({key: key, genderProvider: genderProvider, initialValue: initialValue, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    createState() {
      return new form_related._GenderPickerWidgetState.new();
    }
  };
  (form_related.GenderPickerWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let genderProvider = opts && 'genderProvider' in opts ? opts.genderProvider : null;
    let initialValue = opts && 'initialValue' in opts ? opts.initialValue : C[3] || CT.C3;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[genderProvider$] = genderProvider;
    this[initialValue$] = initialValue;
    form_related.GenderPickerWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = form_related.GenderPickerWidget.prototype;
  dart.addTypeTests(form_related.GenderPickerWidget);
  dart.addTypeCaches(form_related.GenderPickerWidget);
  dart.setMethodSignature(form_related.GenderPickerWidget, () => ({
    __proto__: dart.getMethods(form_related.GenderPickerWidget.__proto__),
    createState: dart.fnType(consumer.ConsumerState$(form_related.GenderPickerWidget), [])
  }));
  dart.setLibraryUri(form_related.GenderPickerWidget, I[0]);
  dart.setFieldSignature(form_related.GenderPickerWidget, () => ({
    __proto__: dart.getFields(form_related.GenderPickerWidget.__proto__),
    genderProvider: dart.finalFieldType(state_provider.StateProvider$(form_related.Gender)),
    initialValue: dart.finalFieldType(dart.nullable(form_related.Gender))
  }));
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
  form_related._GenderPickerWidgetState = class _GenderPickerWidgetState extends consumer.ConsumerState$(form_related.GenderPickerWidget) {
    initState() {
      super.initState();
      binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
        if (this.widget.initialValue == null) {
          return;
        }
        this.selected = dart.nullCheck(this.widget.initialValue);
        this.setState(dart.fn(() => {
        }, T.VoidTovoid()));
      }, T.DurationTovoid()));
    }
    build(context) {
      return new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new consumer.Consumer.new({builder: dart.fn((context, ref, _) => new checkbox_list_tile.CheckboxListTile.new({contentPadding: edge_insets.EdgeInsets.zero, controlAffinity: list_tile.ListTileControlAffinity.leading, value: this.selected === form_related.Gender.male, onChanged: dart.fn(value => {
                  this.selected = form_related.Gender.male;
                  ref.read(T.StateControllerOfGender(), this.widget.genderProvider.state).state = form_related.Gender.male;
                  this.setState(dart.fn(() => {
                  }, T.VoidTovoid()));
                }, T.boolNTovoid()), title: C[5] || CT.C5, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), T.BuildContextAndWidgetRefAndWidgetNToCheckboxListTile()), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), new basic.Expanded.new({child: new consumer.Consumer.new({builder: dart.fn((context, ref, _) => new checkbox_list_tile.CheckboxListTile.new({contentPadding: edge_insets.EdgeInsets.zero, controlAffinity: list_tile.ListTileControlAffinity.leading, value: this.selected === form_related.Gender.female, onChanged: dart.fn(value => {
                  this.selected = form_related.Gender.female;
                  ref.read(T.StateControllerOfGender(), this.widget.genderProvider.state).state = form_related.Gender.female;
                  this.setState(dart.fn(() => {
                  }, T.VoidTovoid()));
                }, T.boolNTovoid()), title: C[10] || CT.C10, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), T.BuildContextAndWidgetRefAndWidgetNToCheckboxListTile()), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14})]), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
    static ['_#new#tearOff']() {
      return new form_related._GenderPickerWidgetState.new();
    }
  };
  (form_related._GenderPickerWidgetState.new = function() {
    this.selected = form_related.Gender.unselected;
    form_related._GenderPickerWidgetState.__proto__.new.call(this);
    ;
  }).prototype = form_related._GenderPickerWidgetState.prototype;
  dart.addTypeTests(form_related._GenderPickerWidgetState);
  dart.addTypeCaches(form_related._GenderPickerWidgetState);
  dart.setMethodSignature(form_related._GenderPickerWidgetState, () => ({
    __proto__: dart.getMethods(form_related._GenderPickerWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(form_related._GenderPickerWidgetState, I[0]);
  dart.setFieldSignature(form_related._GenderPickerWidgetState, () => ({
    __proto__: dart.getFields(form_related._GenderPickerWidgetState.__proto__),
    selected: dart.fieldType(form_related.Gender)
  }));
  var person$ = dart.privateName(form_related, "GenderPickerWidget2.person");
  var initialValue$0 = dart.privateName(form_related, "GenderPickerWidget2.initialValue");
  form_related.GenderPickerWidget2 = class GenderPickerWidget2 extends framework.StatefulWidget {
    get person() {
      return this[person$];
    }
    set person(value) {
      super.person = value;
    }
    get initialValue() {
      return this[initialValue$0];
    }
    set initialValue(value) {
      super.initialValue = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let person = opts && 'person' in opts ? opts.person : null;
      let initialValue = opts && 'initialValue' in opts ? opts.initialValue : C[3] || CT.C3;
      return new form_related.GenderPickerWidget2.new({key: key, person: person, initialValue: initialValue, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
    createState() {
      return new form_related._GenderPickerWidget2State.new();
    }
  };
  (form_related.GenderPickerWidget2.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let person = opts && 'person' in opts ? opts.person : null;
    let initialValue = opts && 'initialValue' in opts ? opts.initialValue : C[3] || CT.C3;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[person$] = person;
    this[initialValue$0] = initialValue;
    if (!(initialValue !== form_related.Gender.unselected)) dart.assertFailed(null, I[1], 84, 16, "initialValue != Gender.unselected");
    form_related.GenderPickerWidget2.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = form_related.GenderPickerWidget2.prototype;
  dart.addTypeTests(form_related.GenderPickerWidget2);
  dart.addTypeCaches(form_related.GenderPickerWidget2);
  dart.setMethodSignature(form_related.GenderPickerWidget2, () => ({
    __proto__: dart.getMethods(form_related.GenderPickerWidget2.__proto__),
    createState: dart.fnType(framework.State$(form_related.GenderPickerWidget2), [])
  }));
  dart.setLibraryUri(form_related.GenderPickerWidget2, I[0]);
  dart.setFieldSignature(form_related.GenderPickerWidget2, () => ({
    __proto__: dart.getFields(form_related.GenderPickerWidget2.__proto__),
    person: dart.finalFieldType(person.Person),
    initialValue: dart.finalFieldType(dart.nullable(form_related.Gender))
  }));
  form_related._GenderPickerWidget2State = class _GenderPickerWidget2State extends framework.State$(form_related.GenderPickerWidget2) {
    initState() {
      super.initState();
      binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
        if (this.widget.initialValue == null) {
          return;
        }
        this.widget.person.sex = this.widget.initialValue === form_related.Gender.male ? 1 : 0;
        this.selected = dart.nullCheck(this.widget.initialValue);
        this.setState(dart.fn(() => {
        }, T.VoidTovoid()));
      }, T.DurationTovoid()));
    }
    build(context) {
      return new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new checkbox_list_tile.CheckboxListTile.new({contentPadding: edge_insets.EdgeInsets.zero, controlAffinity: list_tile.ListTileControlAffinity.leading, value: this.selected === form_related.Gender.male, onChanged: dart.fn(value => {
                this.selected = form_related.Gender.male;
                this.widget.person.sex = 1;
                this.setState(dart.fn(() => {
                }, T.VoidTovoid()));
              }, T.boolNTovoid()), title: C[17] || CT.C17, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), new basic.Expanded.new({child: new checkbox_list_tile.CheckboxListTile.new({contentPadding: edge_insets.EdgeInsets.zero, controlAffinity: list_tile.ListTileControlAffinity.leading, value: this.selected === form_related.Gender.female, onChanged: dart.fn(value => {
                this.selected = form_related.Gender.female;
                this.widget.person.sex = 0;
                this.setState(dart.fn(() => {
                }, T.VoidTovoid()));
              }, T.boolNTovoid()), title: C[21] || CT.C21, $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24})]), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
    }
    static ['_#new#tearOff']() {
      return new form_related._GenderPickerWidget2State.new();
    }
  };
  (form_related._GenderPickerWidget2State.new = function() {
    this.selected = form_related.Gender.unselected;
    form_related._GenderPickerWidget2State.__proto__.new.call(this);
    ;
  }).prototype = form_related._GenderPickerWidget2State.prototype;
  dart.addTypeTests(form_related._GenderPickerWidget2State);
  dart.addTypeCaches(form_related._GenderPickerWidget2State);
  dart.setMethodSignature(form_related._GenderPickerWidget2State, () => ({
    __proto__: dart.getMethods(form_related._GenderPickerWidget2State.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(form_related._GenderPickerWidget2State, I[0]);
  dart.setFieldSignature(form_related._GenderPickerWidget2State, () => ({
    __proto__: dart.getFields(form_related._GenderPickerWidget2State.__proto__),
    selected: dart.fieldType(form_related.Gender)
  }));
  var dateProvider$ = dart.privateName(form_related, "DatePickerWidget.dateProvider");
  var initialDate$ = dart.privateName(form_related, "DatePickerWidget.initialDate");
  form_related.DatePickerWidget = class DatePickerWidget extends consumer.ConsumerStatefulWidget {
    get dateProvider() {
      return this[dateProvider$];
    }
    set dateProvider(value) {
      super.dateProvider = value;
    }
    get initialDate() {
      return this[initialDate$];
    }
    set initialDate(value) {
      super.initialDate = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let dateProvider = opts && 'dateProvider' in opts ? opts.dateProvider : null;
      let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
      return new form_related.DatePickerWidget.new({key: key, dateProvider: dateProvider, initialDate: initialDate, $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
    createState() {
      return new form_related._DatePickerWidgetState.new();
    }
  };
  (form_related.DatePickerWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let dateProvider = opts && 'dateProvider' in opts ? opts.dateProvider : null;
    let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[dateProvider$] = dateProvider;
    this[initialDate$] = initialDate;
    form_related.DatePickerWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = form_related.DatePickerWidget.prototype;
  dart.addTypeTests(form_related.DatePickerWidget);
  dart.addTypeCaches(form_related.DatePickerWidget);
  dart.setMethodSignature(form_related.DatePickerWidget, () => ({
    __proto__: dart.getMethods(form_related.DatePickerWidget.__proto__),
    createState: dart.fnType(consumer.ConsumerState$(form_related.DatePickerWidget), [])
  }));
  dart.setLibraryUri(form_related.DatePickerWidget, I[0]);
  dart.setFieldSignature(form_related.DatePickerWidget, () => ({
    __proto__: dart.getFields(form_related.DatePickerWidget.__proto__),
    dateProvider: dart.finalFieldType(state_provider.StateProvider$(dart.nullable(core.DateTime))),
    initialDate: dart.finalFieldType(dart.nullable(core.String))
  }));
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
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
  form_related._DatePickerWidgetState = class _DatePickerWidgetState extends consumer.ConsumerState$(form_related.DatePickerWidget) {
    initState() {
      super.initState();
      binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
        let birthday = null;
        let format = new date_format.DateFormat.new("dd/MM/yyyy");
        if (this.widget.initialDate == null) {
          return;
        }
        try {
          birthday = format.parse(dart.nullCheck(this.widget.initialDate));
          this.ref.read(T.StateControllerOfDateTimeN(), this.widget.dateProvider.state).state = birthday;
        } catch (e) {
          let error = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(error)) {
            developer.log(error[$toString]());
            developer.log(stack.toString());
          } else
            throw e;
        }
      }, T.DurationTovoid()));
    }
    build(context) {
      let t3;
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new container.Container.new({padding: C[27] || CT.C27, decoration: new box_decoration.BoxDecoration.new({color: colorScheme.primaryContainer, borderRadius: new border_radius.BorderRadius.circular(8.0)}), child: new text_button._TextButtonWithIcon.new({onPressed: dart.fn(() => async.async(dart.void, (function*() {
            let t3;
            let selectedDate = (t3 = this.ref.watch(T.DateTimeN(), this.widget.dateProvider), t3 == null ? new core.DateTime.now() : t3);
            let date = (yield this.pickWorkdayDate(context, selectedDate));
            if (date == null) {
              return;
            }
            this.ref.read(T.StateControllerOfDateTimeN(), this.widget.dateProvider.state).state = date;
          }).bind(this)), T.VoidToFutureOfvoid()), icon: C[28] || CT.C28, label: new text.Text.new(this.ref.watch(T.DateTimeN(), this.widget.dateProvider) != null ? new date_format.DateFormat.new("dd/MM/yyyy").format(dart.nullCheck(this.ref.watch(T.DateTimeN(), this.widget.dateProvider))) : (t3 = this.widget.initialDate, t3 == null ? new date_format.DateFormat.new("dd/MM/yyyy").format(new core.DateTime.now()) : t3), {style: theme.Theme.of(context).textTheme.bodyLarge, $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32}), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
    pickWorkdayDate(context, initialDate) {
      return async.async(T.DateTimeN(), function* pickWorkdayDate() {
        let date = (yield date_picker.showDatePicker({context: context, initialDate: initialDate, firstDate: new core.DateTime.new(1900), lastDate: new core.DateTime.new(2100)}));
        return date;
      });
    }
    static ['_#new#tearOff']() {
      return new form_related._DatePickerWidgetState.new();
    }
  };
  (form_related._DatePickerWidgetState.new = function() {
    form_related._DatePickerWidgetState.__proto__.new.call(this);
    ;
  }).prototype = form_related._DatePickerWidgetState.prototype;
  dart.addTypeTests(form_related._DatePickerWidgetState);
  dart.addTypeCaches(form_related._DatePickerWidgetState);
  dart.setMethodSignature(form_related._DatePickerWidgetState, () => ({
    __proto__: dart.getMethods(form_related._DatePickerWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    pickWorkdayDate: dart.fnType(async.Future$(dart.nullable(core.DateTime)), [framework.BuildContext, core.DateTime])
  }));
  dart.setLibraryUri(form_related._DatePickerWidgetState, I[0]);
  var person$0 = dart.privateName(form_related, "DatePickerWidget2.person");
  var initialDate$0 = dart.privateName(form_related, "DatePickerWidget2.initialDate");
  form_related.DatePickerWidget2 = class DatePickerWidget2 extends consumer.ConsumerStatefulWidget {
    get person() {
      return this[person$0];
    }
    set person(value) {
      super.person = value;
    }
    get initialDate() {
      return this[initialDate$0];
    }
    set initialDate(value) {
      super.initialDate = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let person = opts && 'person' in opts ? opts.person : null;
      let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
      return new form_related.DatePickerWidget2.new({key: key, person: person, initialDate: initialDate, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
    }
    createState() {
      return new form_related._DatePickerWidget2State.new();
    }
  };
  (form_related.DatePickerWidget2.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let person = opts && 'person' in opts ? opts.person : null;
    let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[person$0] = person;
    this[initialDate$0] = initialDate;
    form_related.DatePickerWidget2.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = form_related.DatePickerWidget2.prototype;
  dart.addTypeTests(form_related.DatePickerWidget2);
  dart.addTypeCaches(form_related.DatePickerWidget2);
  dart.setMethodSignature(form_related.DatePickerWidget2, () => ({
    __proto__: dart.getMethods(form_related.DatePickerWidget2.__proto__),
    createState: dart.fnType(consumer.ConsumerState$(form_related.DatePickerWidget2), [])
  }));
  dart.setLibraryUri(form_related.DatePickerWidget2, I[0]);
  dart.setFieldSignature(form_related.DatePickerWidget2, () => ({
    __proto__: dart.getFields(form_related.DatePickerWidget2.__proto__),
    person: dart.finalFieldType(person.Person),
    initialDate: dart.finalFieldType(dart.nullable(core.DateTime))
  }));
  form_related._DatePickerWidget2State = class _DatePickerWidget2State extends consumer.ConsumerState$(form_related.DatePickerWidget2) {
    initState() {
      super.initState();
      binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
        let format = new date_format.DateFormat.new("dd/MM/yyyy");
        if (this.widget.initialDate == null) {
          return;
        }
        this.selectedDate = dart.nullCheck(this.widget.initialDate);
        this.widget.person.birthday = format.format(dart.nullCheck(this.widget.initialDate));
        this.setState(dart.fn(() => {
        }, T.VoidTovoid()));
      }, T.DurationTovoid()));
    }
    dateToString(date) {
      return new date_format.DateFormat.new("dd/MM/yyyy").format(date);
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new container.Container.new({padding: C[27] || CT.C27, decoration: new box_decoration.BoxDecoration.new({color: colorScheme.primaryContainer, borderRadius: new border_radius.BorderRadius.circular(8.0)}), child: new text_button._TextButtonWithIcon.new({onPressed: dart.fn(() => async.async(dart.void, (function*() {
            focus_scope.FocusScope.of(context).unfocus();
            let date = (yield this.pickWorkdayDate(this.selectedDate));
            if (date == null) {
              return;
            }
            this.selectedDate = date;
            this.widget.person.birthday = this.dateToString(date);
            this.setState(dart.fn(() => {
            }, T.VoidTovoid()));
          }).bind(this)), T.VoidToFutureOfvoid()), icon: C[35] || CT.C35, label: new text.Text.new(this.dateToString(this.selectedDate), {style: theme.Theme.of(context).textTheme.bodyLarge, $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38}), $creationLocationd_0dea112b090073317d4: C[39] || CT.C39});
    }
    pickWorkdayDate(initialDate) {
      return async.async(T.DateTimeN(), (function* pickWorkdayDate() {
        let date = (yield date_picker.showDatePicker({context: this.context, initialDate: initialDate, firstDate: new core.DateTime.new(1900), lastDate: new core.DateTime.new(2100)}));
        return date;
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new form_related._DatePickerWidget2State.new();
    }
  };
  (form_related._DatePickerWidget2State.new = function() {
    this.selectedDate = new core.DateTime.now();
    form_related._DatePickerWidget2State.__proto__.new.call(this);
    ;
  }).prototype = form_related._DatePickerWidget2State.prototype;
  dart.addTypeTests(form_related._DatePickerWidget2State);
  dart.addTypeCaches(form_related._DatePickerWidget2State);
  dart.setMethodSignature(form_related._DatePickerWidget2State, () => ({
    __proto__: dart.getMethods(form_related._DatePickerWidget2State.__proto__),
    dateToString: dart.fnType(core.String, [core.DateTime]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    pickWorkdayDate: dart.fnType(async.Future$(dart.nullable(core.DateTime)), [core.DateTime])
  }));
  dart.setLibraryUri(form_related._DatePickerWidget2State, I[0]);
  dart.setFieldSignature(form_related._DatePickerWidget2State, () => ({
    __proto__: dart.getFields(form_related._DatePickerWidget2State.__proto__),
    selectedDate: dart.fieldType(core.DateTime)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_utilities/form_related.dart", {
    "package:my_ticket_care/src/shared/shared_utilities/form_related.dart": form_related
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["form_related.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_utilities/form_related.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_utilities__form_related: form_related
  };
}));

//# sourceMappingURL=form_related.dart.lib.js.map
