define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__flutter__src__material__card_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const card_theme = packages__flutter__src__material__icon_button$46dart.src__material__card_theme;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var card = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/card.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 18,
        [_Location_line]: 179,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/card.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 16,
        [_Location_line]: 170,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/card.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 168,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/card.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 166,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/card.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[8] || CT.C8,
        [BorderSide_style]: C[9] || CT.C9,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[10] || CT.C10
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[12] || CT.C12,
        [BorderRadius_bottomLeft]: C[12] || CT.C12,
        [BorderRadius_topRight]: C[12] || CT.C12,
        [BorderRadius_topLeft]: C[12] || CT.C12
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[7] || CT.C7,
        [RoundedRectangleBorder_borderRadius]: C[11] || CT.C11
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 12,
        [Radius_x]: 12
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[15] || CT.C15,
        [BorderRadius_bottomLeft]: C[15] || CT.C15,
        [BorderRadius_topRight]: C[15] || CT.C15,
        [BorderRadius_topLeft]: C[15] || CT.C15
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[7] || CT.C7,
        [RoundedRectangleBorder_borderRadius]: C[14] || CT.C14
      });
    }
  }, false);
  var C = Array(16).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/card.dart",
    "package:flutter/src/material/card.dart"
  ];
  var color$ = dart.privateName(card, "Card.color");
  var shadowColor$ = dart.privateName(card, "Card.shadowColor");
  var surfaceTintColor$ = dart.privateName(card, "Card.surfaceTintColor");
  var elevation$ = dart.privateName(card, "Card.elevation");
  var shape$ = dart.privateName(card, "Card.shape");
  var borderOnForeground$ = dart.privateName(card, "Card.borderOnForeground");
  var clipBehavior$ = dart.privateName(card, "Card.clipBehavior");
  var margin$ = dart.privateName(card, "Card.margin");
  var semanticContainer$ = dart.privateName(card, "Card.semanticContainer");
  var child$ = dart.privateName(card, "Card.child");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  card.Card = class Card extends framework.StatelessWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get shadowColor() {
      return this[shadowColor$];
    }
    set shadowColor(value) {
      super.shadowColor = value;
    }
    get surfaceTintColor() {
      return this[surfaceTintColor$];
    }
    set surfaceTintColor(value) {
      super.surfaceTintColor = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get borderOnForeground() {
      return this[borderOnForeground$];
    }
    set borderOnForeground(value) {
      super.borderOnForeground = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get semanticContainer() {
      return this[semanticContainer$];
    }
    set semanticContainer(value) {
      super.semanticContainer = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      let surfaceTintColor = opts && 'surfaceTintColor' in opts ? opts.surfaceTintColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let borderOnForeground = opts && 'borderOnForeground' in opts ? opts.borderOnForeground : true;
      let margin = opts && 'margin' in opts ? opts.margin : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let semanticContainer = opts && 'semanticContainer' in opts ? opts.semanticContainer : true;
      return new card.Card.new({key: key, color: color, shadowColor: shadowColor, surfaceTintColor: surfaceTintColor, elevation: elevation, shape: shape, borderOnForeground: borderOnForeground, margin: margin, clipBehavior: clipBehavior, child: child, semanticContainer: semanticContainer, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11;
      let cardTheme = card_theme.CardTheme.of(context);
      let defaults = theme.Theme.of(context).useMaterial3 ? new card._CardDefaultsM3.new(context) : new card._CardDefaultsM2.new(context);
      return new basic.Semantics.new({container: this.semanticContainer, child: new container.Container.new({margin: (t0$ = (t0 = this.margin, t0 == null ? cardTheme.margin : t0), t0$ == null ? dart.nullCheck(defaults.margin) : t0$), child: new material.Material.new({type: material.MaterialType.card, color: (t0$1 = (t0$0 = this.color, t0$0 == null ? cardTheme.color : t0$0), t0$1 == null ? defaults.color : t0$1), shadowColor: (t0$3 = (t0$2 = this.shadowColor, t0$2 == null ? cardTheme.shadowColor : t0$2), t0$3 == null ? defaults.shadowColor : t0$3), surfaceTintColor: (t0$5 = (t0$4 = this.surfaceTintColor, t0$4 == null ? cardTheme.surfaceTintColor : t0$4), t0$5 == null ? defaults.surfaceTintColor : t0$5), elevation: (t0$7 = (t0$6 = this.elevation, t0$6 == null ? cardTheme.elevation : t0$6), t0$7 == null ? dart.nullCheck(defaults.elevation) : t0$7), shape: (t0$9 = (t0$8 = this.shape, t0$8 == null ? cardTheme.shape : t0$8), t0$9 == null ? defaults.shape : t0$9), borderOnForeground: this.borderOnForeground, clipBehavior: (t0$11 = (t0$10 = this.clipBehavior, t0$10 == null ? cardTheme.clipBehavior : t0$10), t0$11 == null ? dart.nullCheck(defaults.clipBehavior) : t0$11), child: new basic.Semantics.new({explicitChildNodes: !this.semanticContainer, child: this.child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
  };
  (card.Card.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    let surfaceTintColor = opts && 'surfaceTintColor' in opts ? opts.surfaceTintColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let borderOnForeground = opts && 'borderOnForeground' in opts ? opts.borderOnForeground : true;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let semanticContainer = opts && 'semanticContainer' in opts ? opts.semanticContainer : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[shadowColor$] = shadowColor;
    this[surfaceTintColor$] = surfaceTintColor;
    this[elevation$] = elevation;
    this[shape$] = shape;
    this[borderOnForeground$] = borderOnForeground;
    this[margin$] = margin;
    this[clipBehavior$] = clipBehavior;
    this[child$] = child;
    this[semanticContainer$] = semanticContainer;
    if (!(elevation == null || dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, I[0], 74, 15, "elevation == null || elevation >= 0.0");
    if (!(borderOnForeground !== null)) dart.assertFailed(null, I[0], 75, 15, "borderOnForeground != null");
    card.Card.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = card.Card.prototype;
  dart.addTypeTests(card.Card);
  dart.addTypeCaches(card.Card);
  dart.setMethodSignature(card.Card, () => ({
    __proto__: dart.getMethods(card.Card.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(card.Card, I[1]);
  dart.setFieldSignature(card.Card, () => ({
    __proto__: dart.getFields(card.Card.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    shadowColor: dart.finalFieldType(dart.nullable(ui.Color)),
    surfaceTintColor: dart.finalFieldType(dart.nullable(ui.Color)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    borderOnForeground: dart.finalFieldType(core.bool),
    clipBehavior: dart.finalFieldType(dart.nullable(ui.Clip)),
    margin: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    semanticContainer: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  var context$ = dart.privateName(card, "_CardDefaultsM2.context");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  card._CardDefaultsM2 = class _CardDefaultsM2 extends card_theme.CardTheme {
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    static ['_#new#tearOff'](context) {
      return new card._CardDefaultsM2.new(context);
    }
    get color() {
      return theme.Theme.of(this.context).cardColor;
    }
    get shadowColor() {
      return theme.Theme.of(this.context).shadowColor;
    }
  };
  (card._CardDefaultsM2.new = function(context) {
    this[context$] = context;
    card._CardDefaultsM2.__proto__.new.call(this, {clipBehavior: ui.Clip.none, elevation: 1.0, margin: C[5] || CT.C5, shape: C[6] || CT.C6});
    ;
  }).prototype = card._CardDefaultsM2.prototype;
  dart.addTypeTests(card._CardDefaultsM2);
  dart.addTypeCaches(card._CardDefaultsM2);
  dart.setGetterSignature(card._CardDefaultsM2, () => ({
    __proto__: dart.getGetters(card._CardDefaultsM2.__proto__),
    color: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color)
  }));
  dart.setLibraryUri(card._CardDefaultsM2, I[1]);
  dart.setFieldSignature(card._CardDefaultsM2, () => ({
    __proto__: dart.getFields(card._CardDefaultsM2.__proto__),
    context: dart.finalFieldType(framework.BuildContext)
  }));
  var context$0 = dart.privateName(card, "_CardDefaultsM3.context");
  card._CardDefaultsM3 = class _CardDefaultsM3 extends card_theme.CardTheme {
    get context() {
      return this[context$0];
    }
    set context(value) {
      super.context = value;
    }
    static ['_#new#tearOff'](context) {
      return new card._CardDefaultsM3.new(context);
    }
    get color() {
      return theme.Theme.of(this.context).colorScheme.surface;
    }
    get shadowColor() {
      return theme.Theme.of(this.context).colorScheme.shadow;
    }
    get surfaceTintColor() {
      return theme.Theme.of(this.context).colorScheme.surfaceTint;
    }
  };
  (card._CardDefaultsM3.new = function(context) {
    this[context$0] = context;
    card._CardDefaultsM3.__proto__.new.call(this, {clipBehavior: ui.Clip.none, elevation: 1.0, margin: C[5] || CT.C5, shape: C[13] || CT.C13});
    ;
  }).prototype = card._CardDefaultsM3.prototype;
  dart.addTypeTests(card._CardDefaultsM3);
  dart.addTypeCaches(card._CardDefaultsM3);
  dart.setGetterSignature(card._CardDefaultsM3, () => ({
    __proto__: dart.getGetters(card._CardDefaultsM3.__proto__),
    color: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color),
    surfaceTintColor: dart.nullable(ui.Color)
  }));
  dart.setLibraryUri(card._CardDefaultsM3, I[1]);
  dart.setFieldSignature(card._CardDefaultsM3, () => ({
    __proto__: dart.getFields(card._CardDefaultsM3.__proto__),
    context: dart.finalFieldType(framework.BuildContext)
  }));
  dart.trackLibraries("packages/flutter/src/material/card.dart", {
    "package:flutter/src/material/card.dart": card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkFe;;;;;;IAOA;;;;;;IAYA;;;;;;IASC;;;;;;IASK;;;;;;IAMR;;;;;;IAMC;;;;;;IASc;;;;;;IAaf;;;;;;IAKG;;;;;;;;;;;;;;;;;;;;UAGY;;AACR,sBAAsB,wBAAG,OAAO;AAChC,qBAAiB,AAAY,eAAT,OAAO,iBAAiB,6BAAgB,OAAO,IAAI,6BAAgB,OAAO;AAE9G,YAAO,qCACM,+BACJ,sCAC8B,OAApB,kBAAP,aAAU,AAAU,SAAD,eAAZ,cAAsC,eAAf,AAAS,QAAD,wBACvC,iCACc,oCACa,QAAnB,mBAAN,eAAS,AAAU,SAAD,gBAAZ,eAAsB,AAAS,QAAD,8BACO,QAAzB,yBAAZ,eAAe,AAAU,SAAD,sBAAZ,eAA4B,AAAS,QAAD,yCACI,QAA9B,8BAAjB,eAAoB,AAAU,SAAD,2BAAZ,eAAiC,AAAS,QAAD,uCAChC,QAAvB,uBAAV,eAAa,AAAU,SAAD,oBAAZ,eAA4C,eAAlB,AAAS,QAAD,6BACvB,QAAnB,mBAAN,eAAS,AAAU,SAAD,gBAAZ,eAAsB,AAAS,QAAD,oCACvB,wCACiC,SAA1B,2BAAb,gBAAgB,AAAU,SAAD,wBAAZ,gBAAkD,eAArB,AAAS,QAAD,gCACzD,8CACgB,+BACd;IAKjB;;;QA3HQ;QACD;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IATA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACK,AAAU,AAAQ,SAAT,YAAsB,aAAV,SAAS,KAAI;UAClC,AAAmB,kBAAD;AAbxB,6CACE,GAAG;;EAY4B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8HpB;;;;;;;;;;AAGC,YAAM,AAAY,gBAAT;IAAkB;;AAGrB,YAAM,AAAY,gBAAT;IAAoB;;;IAhB5B;AACvB,iEACqB,yBACR;;EAKd;;;;;;;;;;;;;;;IA8BgB;;;;;;;;;;AAGC,YAAM,AAAY,AAAY,gBAArB;IAA4B;;AAG/B,YAAM,AAAY,AAAY,gBAArB;IAA2B;;AAG/B,YAAM,AAAY,AAAY,gBAArB;IAAgC;;;IAjB7C;AACvB,iEACqB,yBACR;;EAGZ","file":"../../../../../../../../../../packages/flutter/src/material/card.dart.lib.js"}');
  // Exports:
  return {
    src__material__card: card
  };
}));

//# sourceMappingURL=card.dart.lib.js.map