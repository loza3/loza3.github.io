define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/painting/borders.dart'], (function load__packages__flutter_signin_button__button_builder_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__painting__borders$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const material_button = packages__flutter__src__material__icon_button$46dart.src__material__material_button;
  const button_theme = packages__flutter__src__material__icon_button$46dart.src__material__button_theme;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  var button_builder = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidToNvoid: () => (T.VoidToNvoid = dart.constFn(dart.nullable(T.VoidTovoid())))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1308622847
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 3,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MaterialButton",
        [_Location_column]: 12,
        [_Location_line]: 79,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 13,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 16,
        [_Location_line]: 108,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 14,
        [_Location_line]: 107,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 103,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 12,
        [_Location_line]: 137,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_builder.dart"
      });
    }
  }, false);
  var C = Array(11).fill(void 0);
  var I = ["package:flutter_signin_button/button_builder.dart"];
  var icon$ = dart.privateName(button_builder, "SignInButtonBuilder.icon");
  var image$ = dart.privateName(button_builder, "SignInButtonBuilder.image");
  var mini$ = dart.privateName(button_builder, "SignInButtonBuilder.mini");
  var text$ = dart.privateName(button_builder, "SignInButtonBuilder.text");
  var fontSize$ = dart.privateName(button_builder, "SignInButtonBuilder.fontSize");
  var textColor$ = dart.privateName(button_builder, "SignInButtonBuilder.textColor");
  var iconColor$ = dart.privateName(button_builder, "SignInButtonBuilder.iconColor");
  var backgroundColor$ = dart.privateName(button_builder, "SignInButtonBuilder.backgroundColor");
  var splashColor$ = dart.privateName(button_builder, "SignInButtonBuilder.splashColor");
  var highlightColor$ = dart.privateName(button_builder, "SignInButtonBuilder.highlightColor");
  var onPressed$ = dart.privateName(button_builder, "SignInButtonBuilder.onPressed");
  var padding$ = dart.privateName(button_builder, "SignInButtonBuilder.padding");
  var innerPadding$ = dart.privateName(button_builder, "SignInButtonBuilder.innerPadding");
  var shape$ = dart.privateName(button_builder, "SignInButtonBuilder.shape");
  var elevation$ = dart.privateName(button_builder, "SignInButtonBuilder.elevation");
  var height$ = dart.privateName(button_builder, "SignInButtonBuilder.height");
  var width$ = dart.privateName(button_builder, "SignInButtonBuilder.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _getButtonChild = dart.privateName(button_builder, "_getButtonChild");
  var _getIconOrImage = dart.privateName(button_builder, "_getIconOrImage");
  button_builder.SignInButtonBuilder = class SignInButtonBuilder extends framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get mini() {
      return this[mini$];
    }
    set mini(value) {
      super.mini = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get textColor() {
      return this[textColor$];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get iconColor() {
      return this[iconColor$];
    }
    set iconColor(value) {
      super.iconColor = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get splashColor() {
      return this[splashColor$];
    }
    set splashColor(value) {
      super.splashColor = value;
    }
    get highlightColor() {
      return this[highlightColor$];
    }
    set highlightColor(value) {
      super.highlightColor = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get innerPadding() {
      return this[innerPadding$];
    }
    set innerPadding(value) {
      super.innerPadding = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let text = opts && 'text' in opts ? opts.text : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : 14;
      let textColor = opts && 'textColor' in opts ? opts.textColor : C[0] || CT.C0;
      let iconColor = opts && 'iconColor' in opts ? opts.iconColor : C[0] || CT.C0;
      let splashColor = opts && 'splashColor' in opts ? opts.splashColor : C[1] || CT.C1;
      let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : C[1] || CT.C1;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let innerPadding = opts && 'innerPadding' in opts ? opts.innerPadding : null;
      let mini = opts && 'mini' in opts ? opts.mini : false;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 2;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let width = opts && 'width' in opts ? opts.width : null;
      return new button_builder.SignInButtonBuilder.new({key: key, backgroundColor: backgroundColor, onPressed: onPressed, text: text, icon: icon, image: image, fontSize: fontSize, textColor: textColor, iconColor: iconColor, splashColor: splashColor, highlightColor: highlightColor, padding: padding, innerPadding: innerPadding, mini: mini, elevation: elevation, shape: shape, height: height, width: width, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    build(context) {
      let t0, t0$, t0$0;
      return new material_button.MaterialButton.new({key: this.key, minWidth: this.mini ? (t0 = this.width, t0 == null ? 35.0 : t0) : null, height: this.height, elevation: this.elevation, padding: (t0$ = this.padding, t0$ == null ? new edge_insets.EdgeInsets.all(0.0) : t0$), color: this.backgroundColor, onPressed: T.VoidToNvoid().as(this.onPressed), splashColor: this.splashColor, highlightColor: this.highlightColor, child: this[_getButtonChild](context), shape: (t0$0 = this.shape, t0$0 == null ? button_theme.ButtonTheme.of(context).shape : t0$0), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    [_getButtonChild](context) {
      let t0, t0$, t0$0, t0$1;
      if (this.mini) {
        return new container.Container.new({width: (t0 = this.height, t0 == null ? 35.0 : t0), height: (t0$ = this.width, t0$ == null ? 35.0 : t0$), child: this[_getIconOrImage](), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
      }
      return new container.Container.new({constraints: new box.BoxConstraints.new({maxWidth: (t0$0 = this.width, t0$0 == null ? 220.0 : t0$0)}), child: new basic.Center.new({child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: (t0$1 = this.innerPadding, t0$1 == null ? new edge_insets.EdgeInsets.symmetric({horizontal: 13.0}) : t0$1), child: this[_getIconOrImage](), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), new text.Text.new(this.text, {style: new text_style.TextStyle.new({color: this.textColor, fontSize: this.fontSize, backgroundColor: new ui.Color.fromRGBO(0, 0, 0, 0.0)}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6})]), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    [_getIconOrImage]() {
      if (this.image != null) {
        return this.image;
      }
      return new icon.Icon.new(this.icon, {size: 20.0, color: this.iconColor, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
  };
  (button_builder.SignInButtonBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : 14;
    let textColor = opts && 'textColor' in opts ? opts.textColor : C[0] || CT.C0;
    let iconColor = opts && 'iconColor' in opts ? opts.iconColor : C[0] || CT.C0;
    let splashColor = opts && 'splashColor' in opts ? opts.splashColor : C[1] || CT.C1;
    let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : C[1] || CT.C1;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let innerPadding = opts && 'innerPadding' in opts ? opts.innerPadding : null;
    let mini = opts && 'mini' in opts ? opts.mini : false;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 2;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[backgroundColor$] = backgroundColor;
    this[onPressed$] = onPressed;
    this[text$] = text;
    this[icon$] = icon;
    this[image$] = image;
    this[fontSize$] = fontSize;
    this[textColor$] = textColor;
    this[iconColor$] = iconColor;
    this[splashColor$] = splashColor;
    this[highlightColor$] = highlightColor;
    this[padding$] = padding;
    this[innerPadding$] = innerPadding;
    this[mini$] = mini;
    this[elevation$] = elevation;
    this[shape$] = shape;
    this[height$] = height;
    this[width$] = width;
    button_builder.SignInButtonBuilder.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = button_builder.SignInButtonBuilder.prototype;
  dart.addTypeTests(button_builder.SignInButtonBuilder);
  dart.addTypeCaches(button_builder.SignInButtonBuilder);
  dart.setMethodSignature(button_builder.SignInButtonBuilder, () => ({
    __proto__: dart.getMethods(button_builder.SignInButtonBuilder.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getButtonChild]: dart.fnType(container.Container, [framework.BuildContext]),
    [_getIconOrImage]: dart.fnType(dart.nullable(framework.Widget), [])
  }));
  dart.setLibraryUri(button_builder.SignInButtonBuilder, I[0]);
  dart.setFieldSignature(button_builder.SignInButtonBuilder, () => ({
    __proto__: dart.getFields(button_builder.SignInButtonBuilder.__proto__),
    icon: dart.finalFieldType(dart.nullable(icon_data.IconData)),
    image: dart.finalFieldType(dart.nullable(framework.Widget)),
    mini: dart.finalFieldType(core.bool),
    text: dart.finalFieldType(core.String),
    fontSize: dart.finalFieldType(core.double),
    textColor: dart.finalFieldType(ui.Color),
    iconColor: dart.finalFieldType(ui.Color),
    backgroundColor: dart.finalFieldType(ui.Color),
    splashColor: dart.finalFieldType(ui.Color),
    highlightColor: dart.finalFieldType(ui.Color),
    onPressed: dart.finalFieldType(core.Function),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsets)),
    innerPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsets)),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    elevation: dart.finalFieldType(core.double),
    height: dart.finalFieldType(dart.nullable(core.double)),
    width: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.trackLibraries("packages/flutter_signin_button/button_builder.dart", {
    "package:flutter_signin_button/button_builder.dart": button_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_builder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQkB;;;;;;IAMF;;;;;;IAGH;;;;;;IAGE;;;;;;IAGA;;;;;;IAID;;;;;;IACR;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAGW;;;;;;IAGG;;;;;;IAAS;;;;;;IAKR;;;;;;IAGN;;;;;;IAGC;;;;;;IAGA;;;;;;;;;;;;;;;;;;;;;;;;;;;UA0BY;;AACxB,YAAO,8CACA,oBACK,aAAa,iBAAN,aAAS,aAAO,cACzB,wBACG,0BACM,oBAAR,cAAsB,+BAAI,oBAC5B,iCACc,mBAAV,8BACE,kCACG,4BACT,sBAAgB,OAAO,WACjB,mBAAN,eAAqB,AAAY,4BAAT,OAAO;IAE1C;sBAGuC;;AACrC,UAAI;AACF,cAAO,sCACS,kBAAP,aAAU,qBACH,kBAAN,cAAS,oBACV;;AAGX,YAAO,2CACQ,uCACK,mBAAN,eAAS,wBAEd,6BACE,uCACkC,0CACrB,wBAChB,iCACwB,0BAAb,eACM,kDACG,uBAEX,kFAET,kBACE,mBACO,qCACE,0BACG,gCACa,sBAAS,GAAG,GAAG,GAAG;IAOvD;;AAIE,UAAI;AACF,cAAO;;AAET,YAAO,mBACL,kBACM,aACM;IAEhB;;;QAtFO;QACS;QACA;QACA;QACT;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAhBS;IACA;IACA;IACT;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;AAlBP;;EAmBE","file":"../../../../../../../../../../packages/flutter_signin_button/button_builder.dart.lib.js"}');
  // Exports:
  return {
    button_builder: button_builder
  };
}));

//# sourceMappingURL=button_builder.dart.lib.js.map
