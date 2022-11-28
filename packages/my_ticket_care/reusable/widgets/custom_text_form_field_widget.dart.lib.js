define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/text_form_field.dart', 'packages/my_ticket_care/reusable/input_decorations.dart', 'packages/flutter/src/widgets/form.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__text_form_field$46dart, packages__my_ticket_care__reusable__input_decorations$46dart, packages__flutter__src__widgets__form$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__title$46dart.src__widgets__editable_text;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const text_form_field = packages__flutter__src__material__text_form_field$46dart.src__material__text_form_field;
  const input_decorations = packages__my_ticket_care__reusable__input_decorations$46dart.reusable__input_decorations;
  const form = packages__flutter__src__widgets__form$46dart.src__widgets__form;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  var custom_text_form_field_widget = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/custom_text_form_field_widget.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextFormField",
        [_Location_column]: 14,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/custom_text_form_field_widget.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/custom_text_form_field_widget.dart"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart"];
  var hintText$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.hintText");
  var labelText$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.labelText");
  var icon$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.icon");
  var autocorrect$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.autocorrect");
  var obscureText$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.obscureText");
  var keyboardType$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.keyboardType");
  var onChanged$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.onChanged");
  var validator$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.validator");
  var onSaved$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.onSaved");
  var controller$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.controller");
  var initialValue$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.initialValue");
  var enabled$ = dart.privateName(custom_text_form_field_widget, "CustomTextFormField.enabled");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  custom_text_form_field_widget.CustomTextFormField = class CustomTextFormField extends framework.StatelessWidget {
    get hintText() {
      return this[hintText$];
    }
    set hintText(value) {
      super.hintText = value;
    }
    get labelText() {
      return this[labelText$];
    }
    set labelText(value) {
      super.labelText = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get keyboardType() {
      return this[keyboardType$];
    }
    set keyboardType(value) {
      super.keyboardType = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get validator() {
      return this[validator$];
    }
    set validator(value) {
      super.validator = value;
    }
    get onSaved() {
      return this[onSaved$];
    }
    set onSaved(value) {
      super.onSaved = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get initialValue() {
      return this[initialValue$];
    }
    set initialValue(value) {
      super.initialValue = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
      let hintText = opts && 'hintText' in opts ? opts.hintText : "";
      let labelText = opts && 'labelText' in opts ? opts.labelText : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : null;
      let obscureText = opts && 'obscureText' in opts ? opts.obscureText : null;
      let validator = opts && 'validator' in opts ? opts.validator : null;
      let onSaved = opts && 'onSaved' in opts ? opts.onSaved : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
      return new custom_text_form_field_widget.CustomTextFormField.new({key: key, onChanged: onChanged, hintText: hintText, labelText: labelText, icon: icon, autocorrect: autocorrect, obscureText: obscureText, validator: validator, onSaved: onSaved, controller: controller, initialValue: initialValue, enabled: enabled, keyboardType: keyboardType, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let t0, t0$;
      return new container.Container.new({padding: C[1] || CT.C1, child: new text_form_field.TextFormField.new({enabled: this.enabled, initialValue: this.initialValue, onSaved: this.onSaved, controller: this.controller, obscureText: (t0 = this.obscureText, t0 == null ? false : t0), autocorrect: (t0$ = this.autocorrect, t0$ == null ? false : t0$), keyboardType: this.keyboardType, decoration: input_decorations.InputDecorations.authInputDecoration({hintText: "", labelText: this.labelText, prefixIcon: this.icon}), onChanged: this.onChanged, validator: this.validator, autovalidateMode: form.AutovalidateMode.onUserInteraction, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
  };
  (custom_text_form_field_widget.CustomTextFormField.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let hintText = opts && 'hintText' in opts ? opts.hintText : "";
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : null;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : null;
    let validator = opts && 'validator' in opts ? opts.validator : null;
    let onSaved = opts && 'onSaved' in opts ? opts.onSaved : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onChanged$] = onChanged;
    this[hintText$] = hintText;
    this[labelText$] = labelText;
    this[icon$] = icon;
    this[autocorrect$] = autocorrect;
    this[obscureText$] = obscureText;
    this[validator$] = validator;
    this[onSaved$] = onSaved;
    this[controller$] = controller;
    this[initialValue$] = initialValue;
    this[enabled$] = enabled;
    this[keyboardType$] = keyboardType;
    custom_text_form_field_widget.CustomTextFormField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = custom_text_form_field_widget.CustomTextFormField.prototype;
  dart.addTypeTests(custom_text_form_field_widget.CustomTextFormField);
  dart.addTypeCaches(custom_text_form_field_widget.CustomTextFormField);
  dart.setMethodSignature(custom_text_form_field_widget.CustomTextFormField, () => ({
    __proto__: dart.getMethods(custom_text_form_field_widget.CustomTextFormField.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(custom_text_form_field_widget.CustomTextFormField, I[0]);
  dart.setFieldSignature(custom_text_form_field_widget.CustomTextFormField, () => ({
    __proto__: dart.getFields(custom_text_form_field_widget.CustomTextFormField.__proto__),
    hintText: dart.finalFieldType(core.String),
    labelText: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(icon_data.IconData),
    autocorrect: dart.finalFieldType(dart.nullable(core.bool)),
    obscureText: dart.finalFieldType(dart.nullable(core.bool)),
    keyboardType: dart.finalFieldType(text_input.TextInputType),
    onChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, [core.String]))),
    validator: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(core.String), [dart.nullable(core.String)]))),
    onSaved: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dart.nullable(core.String)]))),
    controller: dart.finalFieldType(dart.nullable(editable_text.TextEditingController)),
    initialValue: dart.finalFieldType(dart.nullable(core.String)),
    enabled: dart.finalFieldType(dart.nullable(core.bool))
  }));
  dart.trackLibraries("packages/my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart", {
    "package:my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart": custom_text_form_field_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_text_form_field_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIe;;;;;;IACA;;;;;;IACE;;;;;;IACH;;;;;;IACA;;;;;;IACQ;;;;;;IACI;;;;;;IACS;;;;;;IACH;;;;;;IACD;;;;;;IACf;;;;;;IACF;;;;;;;;;;;;;;;;;;;;;;UAmBc;;AACxB,YAAO,6DAEE,gDACI,4BACK,4BACL,0BACG,+BACa,uBAAZ,aAAe,2BACH,wBAAZ,cAAe,4BACd,+BACe,kEACjB,eACC,4BACC,wBAEH,2BACA,kCACwB;IAGzC;;;QArCO;QACA;QACA;QACS;QACA;QACT;QACA;QACA;QACA;QACA;QACA;QACA;QACS;;IAXT;IACA;IACS;IACA;IACT;IACA;IACA;IACA;IACA;IACA;IACA;IACS;AACX,qFAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart.lib.js"}');
  // Exports:
  return {
    reusable__widgets__custom_text_form_field_widget: custom_text_form_field_widget
  };
}));

//# sourceMappingURL=custom_text_form_field_widget.dart.lib.js.map
