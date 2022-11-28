define(['dart_sdk', 'packages/flutter/src/material/date.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/material/text_form_field.dart', 'packages/flutter/src/material/input_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__flutter__src__material__input_date_picker_form_field_dart(dart_sdk, packages__flutter__src__material__date$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__material__text_form_field$46dart, packages__flutter__src__material__input_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date = packages__flutter__src__material__date$46dart.src__material__date;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__title$46dart.src__widgets__editable_text;
  const binding = packages__flutter__src__widgets__title$46dart.src__widgets__binding;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const text_form_field = packages__flutter__src__material__text_form_field$46dart.src__material__text_form_field;
  const input_border = packages__flutter__src__material__input_border$46dart.src__material__input_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var input_date_picker_form_field = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    DurationTovoid: () => (T.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InputDatePickerFormField",
        [_Location_column]: 3,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/input_date_picker_form_field.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[3] || CT.C3,
        [BorderSide_style]: C[4] || CT.C4,
        [BorderSide_width]: 1,
        [BorderSide_color]: C[5] || CT.C5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[7] || CT.C7,
        [BorderRadius_bottomLeft]: C[7] || CT.C7,
        [BorderRadius_topRight]: C[8] || CT.C8,
        [BorderRadius_topLeft]: C[8] || CT.C8
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: input_border.UnderlineInputBorder.prototype,
        [InputBorder_borderSide]: C[2] || CT.C2,
        [UnderlineInputBorder_borderRadius]: C[6] || CT.C6
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextFormField",
        [_Location_column]: 12,
        [_Location_line]: 242,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/input_date_picker_form_field.dart"
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/input_date_picker_form_field.dart",
    "package:flutter/src/material/input_date_picker_form_field.dart"
  ];
  var initialDate$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.initialDate");
  var firstDate$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.firstDate");
  var lastDate$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.lastDate");
  var onDateSubmitted$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.onDateSubmitted");
  var onDateSaved$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.onDateSaved");
  var selectableDayPredicate$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.selectableDayPredicate");
  var errorFormatText$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.errorFormatText");
  var errorInvalidText$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.errorInvalidText");
  var fieldHintText$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.fieldHintText");
  var fieldLabelText$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.fieldLabelText");
  var keyboardType$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.keyboardType");
  var autofocus$ = dart.privateName(input_date_picker_form_field, "InputDatePickerFormField.autofocus");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  input_date_picker_form_field.InputDatePickerFormField = class InputDatePickerFormField extends framework.StatefulWidget {
    get initialDate() {
      return this[initialDate$];
    }
    set initialDate(value) {
      super.initialDate = value;
    }
    get firstDate() {
      return this[firstDate$];
    }
    set firstDate(value) {
      super.firstDate = value;
    }
    get lastDate() {
      return this[lastDate$];
    }
    set lastDate(value) {
      super.lastDate = value;
    }
    get onDateSubmitted() {
      return this[onDateSubmitted$];
    }
    set onDateSubmitted(value) {
      super.onDateSubmitted = value;
    }
    get onDateSaved() {
      return this[onDateSaved$];
    }
    set onDateSaved(value) {
      super.onDateSaved = value;
    }
    get selectableDayPredicate() {
      return this[selectableDayPredicate$];
    }
    set selectableDayPredicate(value) {
      super.selectableDayPredicate = value;
    }
    get errorFormatText() {
      return this[errorFormatText$];
    }
    set errorFormatText(value) {
      super.errorFormatText = value;
    }
    get errorInvalidText() {
      return this[errorInvalidText$];
    }
    set errorInvalidText(value) {
      super.errorInvalidText = value;
    }
    get fieldHintText() {
      return this[fieldHintText$];
    }
    set fieldHintText(value) {
      super.fieldHintText = value;
    }
    get fieldLabelText() {
      return this[fieldLabelText$];
    }
    set fieldLabelText(value) {
      super.fieldLabelText = value;
    }
    get keyboardType() {
      return this[keyboardType$];
    }
    set keyboardType(value) {
      super.keyboardType = value;
    }
    get autofocus() {
      return this[autofocus$];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let onDateSubmitted = opts && 'onDateSubmitted' in opts ? opts.onDateSubmitted : null;
      let onDateSaved = opts && 'onDateSaved' in opts ? opts.onDateSaved : null;
      let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
      let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
      let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
      let fieldHintText = opts && 'fieldHintText' in opts ? opts.fieldHintText : null;
      let fieldLabelText = opts && 'fieldLabelText' in opts ? opts.fieldLabelText : null;
      let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
      return new input_date_picker_form_field.InputDatePickerFormField.new({key: key, initialDate: initialDate, firstDate: firstDate, lastDate: lastDate, onDateSubmitted: onDateSubmitted, onDateSaved: onDateSaved, selectableDayPredicate: selectableDayPredicate, errorFormatText: errorFormatText, errorInvalidText: errorInvalidText, fieldHintText: fieldHintText, fieldLabelText: fieldLabelText, keyboardType: keyboardType, autofocus: autofocus, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new input_date_picker_form_field._InputDatePickerFormFieldState.new();
    }
  };
  (input_date_picker_form_field.InputDatePickerFormField.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let onDateSubmitted = opts && 'onDateSubmitted' in opts ? opts.onDateSubmitted : null;
    let onDateSaved = opts && 'onDateSaved' in opts ? opts.onDateSaved : null;
    let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
    let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
    let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
    let fieldHintText = opts && 'fieldHintText' in opts ? opts.fieldHintText : null;
    let fieldLabelText = opts && 'fieldLabelText' in opts ? opts.fieldLabelText : null;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onDateSubmitted$] = onDateSubmitted;
    this[onDateSaved$] = onDateSaved;
    this[selectableDayPredicate$] = selectableDayPredicate;
    this[errorFormatText$] = errorFormatText;
    this[errorInvalidText$] = errorInvalidText;
    this[fieldHintText$] = fieldHintText;
    this[fieldLabelText$] = fieldLabelText;
    this[keyboardType$] = keyboardType;
    this[autofocus$] = autofocus;
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 61, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 62, 15, "lastDate != null");
    if (!(autofocus !== null)) dart.assertFailed(null, I[0], 63, 15, "autofocus != null");
    this[initialDate$] = initialDate != null ? date.DateUtils.dateOnly(initialDate) : null;
    this[firstDate$] = date.DateUtils.dateOnly(firstDate);
    this[lastDate$] = date.DateUtils.dateOnly(lastDate);
    input_date_picker_form_field.InputDatePickerFormField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (!!this.lastDate.isBefore(this.firstDate)) dart.assertFailed("lastDate " + dart.str(this.lastDate) + " must be on or after firstDate " + dart.str(this.firstDate) + ".", I[0], 68, 7, "!this.lastDate.isBefore(this.firstDate)");
    if (!(initialDate == null || !dart.nullCheck(this.initialDate).isBefore(this.firstDate))) dart.assertFailed("initialDate " + dart.str(this.initialDate) + " must be on or after firstDate " + dart.str(this.firstDate) + ".", I[0], 72, 7, "initialDate == null || !this.initialDate!.isBefore(this.firstDate)");
    if (!(initialDate == null || !dart.nullCheck(this.initialDate).isAfter(this.lastDate))) dart.assertFailed("initialDate " + dart.str(this.initialDate) + " must be on or before lastDate " + dart.str(this.lastDate) + ".", I[0], 76, 7, "initialDate == null || !this.initialDate!.isAfter(this.lastDate)");
    if (!(this.selectableDayPredicate == null || initialDate == null || dart.nullCheck(this.selectableDayPredicate)(dart.nullCheck(this.initialDate)))) dart.assertFailed("Provided initialDate " + dart.str(this.initialDate) + " must satisfy provided selectableDayPredicate.", I[0], 80, 7, "selectableDayPredicate == null || initialDate == null || selectableDayPredicate!(this.initialDate!)");
  }).prototype = input_date_picker_form_field.InputDatePickerFormField.prototype;
  dart.addTypeTests(input_date_picker_form_field.InputDatePickerFormField);
  dart.addTypeCaches(input_date_picker_form_field.InputDatePickerFormField);
  dart.setMethodSignature(input_date_picker_form_field.InputDatePickerFormField, () => ({
    __proto__: dart.getMethods(input_date_picker_form_field.InputDatePickerFormField.__proto__),
    createState: dart.fnType(framework.State$(input_date_picker_form_field.InputDatePickerFormField), [])
  }));
  dart.setLibraryUri(input_date_picker_form_field.InputDatePickerFormField, I[1]);
  dart.setFieldSignature(input_date_picker_form_field.InputDatePickerFormField, () => ({
    __proto__: dart.getFields(input_date_picker_form_field.InputDatePickerFormField.__proto__),
    initialDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    onDateSubmitted: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.DateTime]))),
    onDateSaved: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.DateTime]))),
    selectableDayPredicate: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [core.DateTime]))),
    errorFormatText: dart.finalFieldType(dart.nullable(core.String)),
    errorInvalidText: dart.finalFieldType(dart.nullable(core.String)),
    fieldHintText: dart.finalFieldType(dart.nullable(core.String)),
    fieldLabelText: dart.finalFieldType(dart.nullable(core.String)),
    keyboardType: dart.finalFieldType(dart.nullable(text_input.TextInputType)),
    autofocus: dart.finalFieldType(core.bool)
  }));
  var _controller = dart.privateName(input_date_picker_form_field, "_controller");
  var _selectedDate = dart.privateName(input_date_picker_form_field, "_selectedDate");
  var _inputText = dart.privateName(input_date_picker_form_field, "_inputText");
  var _autoSelected = dart.privateName(input_date_picker_form_field, "_autoSelected");
  var _updateValueForSelectedDate = dart.privateName(input_date_picker_form_field, "_updateValueForSelectedDate");
  var _parseDate = dart.privateName(input_date_picker_form_field, "_parseDate");
  var _isValidAcceptableDate = dart.privateName(input_date_picker_form_field, "_isValidAcceptableDate");
  var _validateDate = dart.privateName(input_date_picker_form_field, "_validateDate");
  var _updateDate = dart.privateName(input_date_picker_form_field, "_updateDate");
  var _handleSaved = dart.privateName(input_date_picker_form_field, "_handleSaved");
  var _handleSubmitted = dart.privateName(input_date_picker_form_field, "_handleSubmitted");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var InputBorder_borderSide = dart.privateName(input_border, "InputBorder.borderSide");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var UnderlineInputBorder_borderRadius = dart.privateName(input_border, "UnderlineInputBorder.borderRadius");
  input_date_picker_form_field._InputDatePickerFormFieldState = class _InputDatePickerFormFieldState extends framework.State$(input_date_picker_form_field.InputDatePickerFormField) {
    initState() {
      super.initState();
      this[_selectedDate] = this.widget.initialDate;
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_updateValueForSelectedDate]();
    }
    didUpdateWidget(oldWidget) {
      input_date_picker_form_field.InputDatePickerFormField.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.initialDate, oldWidget.initialDate)) {
        binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(timeStamp => {
          this.setState(dart.fn(() => {
            this[_selectedDate] = this.widget.initialDate;
            this[_updateValueForSelectedDate]();
          }, T.VoidTovoid()));
        }, T.DurationTovoid()));
      }
    }
    [_updateValueForSelectedDate]() {
      if (this[_selectedDate] != null) {
        let localizations = material_localizations.MaterialLocalizations.of(this.context);
        this[_inputText] = localizations.formatCompactDate(dart.nullCheck(this[_selectedDate]));
        let textEditingValue = this[_controller].value.copyWith({text: this[_inputText]});
        if (this.widget.autofocus && !this[_autoSelected]) {
          textEditingValue = textEditingValue.copyWith({selection: new text_editing.TextSelection.new({baseOffset: 0, extentOffset: dart.nullCheck(this[_inputText]).length})});
          this[_autoSelected] = true;
        }
        this[_controller].value = textEditingValue;
      } else {
        this[_inputText] = "";
        this[_controller].value = this[_controller].value.copyWith({text: this[_inputText]});
      }
    }
    [_parseDate](text) {
      let localizations = material_localizations.MaterialLocalizations.of(this.context);
      return localizations.parseCompactDate(text);
    }
    [_isValidAcceptableDate](date) {
      return date != null && !date.isBefore(this.widget.firstDate) && !date.isAfter(this.widget.lastDate) && (this.widget.selectableDayPredicate == null || dart.nullCheck(this.widget.selectableDayPredicate)(date));
    }
    [_validateDate](text) {
      let t0, t0$;
      let date = this[_parseDate](text);
      if (date == null) {
        t0 = this.widget.errorFormatText;
        return t0 == null ? material_localizations.MaterialLocalizations.of(this.context).invalidDateFormatLabel : t0;
      } else if (!this[_isValidAcceptableDate](date)) {
        t0$ = this.widget.errorInvalidText;
        return t0$ == null ? material_localizations.MaterialLocalizations.of(this.context).dateOutOfRangeLabel : t0$;
      }
      return null;
    }
    [_updateDate](text, callback) {
      let t0;
      let date = this[_parseDate](text);
      if (this[_isValidAcceptableDate](date)) {
        this[_selectedDate] = date;
        this[_inputText] = text;
        t0 = callback;
        t0 == null ? null : t0(dart.nullCheck(this[_selectedDate]));
      }
    }
    [_handleSaved](text) {
      this[_updateDate](text, this.widget.onDateSaved);
    }
    [_handleSubmitted](text) {
      this[_updateDate](text, this.widget.onDateSubmitted);
    }
    build(context) {
      let t0, t0$, t0$0, t0$1;
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let inputTheme = theme.Theme.of(context).inputDecorationTheme;
      return new text_form_field.TextFormField.new({decoration: new input_decorator.InputDecoration.new({border: (t0 = inputTheme.border, t0 == null ? C[1] || CT.C1 : t0), filled: inputTheme.filled, hintText: (t0$ = this.widget.fieldHintText, t0$ == null ? localizations.dateHelpText : t0$), labelText: (t0$0 = this.widget.fieldLabelText, t0$0 == null ? localizations.dateInputLabel : t0$0)}), validator: dart.bind(this, _validateDate), keyboardType: (t0$1 = this.widget.keyboardType, t0$1 == null ? text_input.TextInputType.datetime : t0$1), onSaved: dart.bind(this, _handleSaved), onFieldSubmitted: dart.bind(this, _handleSubmitted), autofocus: this.widget.autofocus, controller: this[_controller], $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    static ['_#new#tearOff']() {
      return new input_date_picker_form_field._InputDatePickerFormFieldState.new();
    }
  };
  (input_date_picker_form_field._InputDatePickerFormFieldState.new = function() {
    this[_controller] = new editable_text.TextEditingController.new();
    this[_selectedDate] = null;
    this[_inputText] = null;
    this[_autoSelected] = false;
    input_date_picker_form_field._InputDatePickerFormFieldState.__proto__.new.call(this);
    ;
  }).prototype = input_date_picker_form_field._InputDatePickerFormFieldState.prototype;
  dart.addTypeTests(input_date_picker_form_field._InputDatePickerFormFieldState);
  dart.addTypeCaches(input_date_picker_form_field._InputDatePickerFormFieldState);
  dart.setMethodSignature(input_date_picker_form_field._InputDatePickerFormFieldState, () => ({
    __proto__: dart.getMethods(input_date_picker_form_field._InputDatePickerFormFieldState.__proto__),
    [_updateValueForSelectedDate]: dart.fnType(dart.void, []),
    [_parseDate]: dart.fnType(dart.nullable(core.DateTime), [dart.nullable(core.String)]),
    [_isValidAcceptableDate]: dart.fnType(core.bool, [dart.nullable(core.DateTime)]),
    [_validateDate]: dart.fnType(dart.nullable(core.String), [dart.nullable(core.String)]),
    [_updateDate]: dart.fnType(dart.void, [dart.nullable(core.String), dart.nullable(dart.fnType(dart.void, [core.DateTime]))]),
    [_handleSaved]: dart.fnType(dart.void, [dart.nullable(core.String)]),
    [_handleSubmitted]: dart.fnType(dart.void, [core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(input_date_picker_form_field._InputDatePickerFormFieldState, I[1]);
  dart.setFieldSignature(input_date_picker_form_field._InputDatePickerFormFieldState, () => ({
    __proto__: dart.getFields(input_date_picker_form_field._InputDatePickerFormFieldState.__proto__),
    [_controller]: dart.finalFieldType(editable_text.TextEditingController),
    [_selectedDate]: dart.fieldType(dart.nullable(core.DateTime)),
    [_inputText]: dart.fieldType(dart.nullable(core.String)),
    [_autoSelected]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/material/input_date_picker_form_field.dart", {
    "package:flutter/src/material/input_date_picker_form_field.dart": input_date_picker_form_field
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input_date_picker_form_field.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/input_date_picker_form_field.dart.lib.js"}');
  // Exports:
  return {
    src__material__input_date_picker_form_field: input_date_picker_form_field
  };
}));

//# sourceMappingURL=input_date_picker_form_field.dart.lib.js.map
