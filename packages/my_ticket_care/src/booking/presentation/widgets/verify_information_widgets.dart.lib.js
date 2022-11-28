define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/painting/placeholder_span.dart'], (function load__packages__my_ticket_care__src__booking__presentation__widgets__verify_information_widgets_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__painting__placeholder_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  var verify_information_widgets = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BuildContextAndintToInformationTile: () => (T.BuildContextAndintToInformationTile = dart.constFn(dart.fnType(verify_information_widgets.InformationTile, [framework.BuildContext, core.int])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "VerifyInformationCard",
        [_Location_column]: 9,
        [_Location_line]: 4,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 5,
        [EdgeInsets_left]: 20
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "VerifyInformationCardTitle",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[5] || CT.C5,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: scroll_physics.NeverScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InformationTile",
        [_Location_column]: 24,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 22,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 12,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "VerifyInformationCardTitle",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InformationTile",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290456609.0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[18] || CT.C18,
        [TextStyle_fontSize]: 18,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[19] || CT.C19,
        [TextStyle_inherit]: true
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 5,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2315255808.0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[18] || CT.C18,
        [TextStyle_fontSize]: 18,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[22] || CT.C22,
        [TextStyle_inherit]: true
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 110,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[22] || CT.C22,
        [TextStyle_inherit]: true
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 121,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 11,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 14,
        [_Location_line]: 107,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart"
      });
    }
  }, false);
  var C = Array(29).fill(void 0);
  var I = [
    "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/widgets/verify_information_widgets.dart",
    "package:my_ticket_care/src/booking/presentation/widgets/verify_information_widgets.dart"
  ];
  var iconData$ = dart.privateName(verify_information_widgets, "VerifyInformationCard.iconData");
  var iconSize$ = dart.privateName(verify_information_widgets, "VerifyInformationCard.iconSize");
  var title$ = dart.privateName(verify_information_widgets, "VerifyInformationCard.title");
  var tileTitles$ = dart.privateName(verify_information_widgets, "VerifyInformationCard.tileTitles");
  var tileSubtitles$ = dart.privateName(verify_information_widgets, "VerifyInformationCard.tileSubtitles");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Color_value = dart.privateName(ui, "Color.value");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  verify_information_widgets.VerifyInformationCard = class VerifyInformationCard extends framework.StatelessWidget {
    get iconData() {
      return this[iconData$];
    }
    set iconData(value) {
      super.iconData = value;
    }
    get iconSize() {
      return this[iconSize$];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get tileTitles() {
      return this[tileTitles$];
    }
    set tileTitles(value) {
      super.tileTitles = value;
    }
    get tileSubtitles() {
      return this[tileSubtitles$];
    }
    set tileSubtitles(value) {
      super.tileSubtitles = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let iconData = opts && 'iconData' in opts ? opts.iconData : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let tileTitles = opts && 'tileTitles' in opts ? opts.tileTitles : null;
      let tileSubtitles = opts && 'tileSubtitles' in opts ? opts.tileSubtitles : null;
      let iconSize = opts && 'iconSize' in opts ? opts.iconSize : null;
      return new verify_information_widgets.VerifyInformationCard.new({key: key, iconData: iconData, title: title, tileTitles: tileTitles, tileSubtitles: tileSubtitles, iconSize: iconSize, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new card.Card.new({elevation: 5.0, color: C[1] || CT.C1, child: new basic.Padding.new({padding: C[2] || CT.C2, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new verify_information_widgets.VerifyInformationCardTitle.new({iconData: this.iconData, iconSize: this.iconSize, title: this.title, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), C[4] || CT.C4, new scroll_view.ListView.builder({physics: C[6] || CT.C6, shrinkWrap: true, itemCount: this.tileTitles[$length], itemBuilder: dart.fn((context, index) => {
                  let title = this.tileTitles[$_get](index);
                  let subtitle = this.tileSubtitles[$_get](index);
                  return new verify_information_widgets.InformationTile.new({title: title, information: subtitle, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
                }, T.BuildContextAndintToInformationTile()), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8})]), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
  };
  (verify_information_widgets.VerifyInformationCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let iconData = opts && 'iconData' in opts ? opts.iconData : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let tileTitles = opts && 'tileTitles' in opts ? opts.tileTitles : null;
    let tileSubtitles = opts && 'tileSubtitles' in opts ? opts.tileSubtitles : null;
    let iconSize = opts && 'iconSize' in opts ? opts.iconSize : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[iconData$] = iconData;
    this[title$] = title;
    this[tileTitles$] = tileTitles;
    this[tileSubtitles$] = tileSubtitles;
    this[iconSize$] = iconSize;
    if (!(tileTitles[$length] === tileSubtitles[$length])) dart.assertFailed(null, I[0], 11, 16, "tileTitles.length == tileSubtitles.length");
    verify_information_widgets.VerifyInformationCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = verify_information_widgets.VerifyInformationCard.prototype;
  dart.addTypeTests(verify_information_widgets.VerifyInformationCard);
  dart.addTypeCaches(verify_information_widgets.VerifyInformationCard);
  dart.setMethodSignature(verify_information_widgets.VerifyInformationCard, () => ({
    __proto__: dart.getMethods(verify_information_widgets.VerifyInformationCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(verify_information_widgets.VerifyInformationCard, I[1]);
  dart.setFieldSignature(verify_information_widgets.VerifyInformationCard, () => ({
    __proto__: dart.getFields(verify_information_widgets.VerifyInformationCard.__proto__),
    iconData: dart.finalFieldType(icon_data.IconData),
    iconSize: dart.finalFieldType(dart.nullable(core.double)),
    title: dart.finalFieldType(core.String),
    tileTitles: dart.finalFieldType(core.List$(core.String)),
    tileSubtitles: dart.finalFieldType(core.List$(core.String))
  }));
  var iconData$0 = dart.privateName(verify_information_widgets, "VerifyInformationCardTitle.iconData");
  var title$0 = dart.privateName(verify_information_widgets, "VerifyInformationCardTitle.title");
  var iconSize$0 = dart.privateName(verify_information_widgets, "VerifyInformationCardTitle.iconSize");
  verify_information_widgets.VerifyInformationCardTitle = class VerifyInformationCardTitle extends framework.StatelessWidget {
    get iconData() {
      return this[iconData$0];
    }
    set iconData(value) {
      super.iconData = value;
    }
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get iconSize() {
      return this[iconSize$0];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let iconData = opts && 'iconData' in opts ? opts.iconData : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let iconSize = opts && 'iconSize' in opts ? opts.iconSize : null;
      return new verify_information_widgets.VerifyInformationCardTitle.new({key: key, iconData: iconData, title: title, iconSize: iconSize, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    build(context) {
      let t0;
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new icon.Icon.new(this.iconData, {size: (t0 = this.iconSize, t0 == null ? 25.0 : t0), color: colorScheme.secondary, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), new text.Text.new(this.title, {style: new text_style.TextStyle.new({color: colorScheme.secondary, fontWeight: ui.FontWeight.bold, fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14})]), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
  };
  (verify_information_widgets.VerifyInformationCardTitle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let iconData = opts && 'iconData' in opts ? opts.iconData : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let iconSize = opts && 'iconSize' in opts ? opts.iconSize : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[iconData$0] = iconData;
    this[title$0] = title;
    this[iconSize$0] = iconSize;
    verify_information_widgets.VerifyInformationCardTitle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = verify_information_widgets.VerifyInformationCardTitle.prototype;
  dart.addTypeTests(verify_information_widgets.VerifyInformationCardTitle);
  dart.addTypeCaches(verify_information_widgets.VerifyInformationCardTitle);
  dart.setMethodSignature(verify_information_widgets.VerifyInformationCardTitle, () => ({
    __proto__: dart.getMethods(verify_information_widgets.VerifyInformationCardTitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(verify_information_widgets.VerifyInformationCardTitle, I[1]);
  dart.setFieldSignature(verify_information_widgets.VerifyInformationCardTitle, () => ({
    __proto__: dart.getFields(verify_information_widgets.VerifyInformationCardTitle.__proto__),
    iconData: dart.finalFieldType(icon_data.IconData),
    title: dart.finalFieldType(core.String),
    iconSize: dart.finalFieldType(dart.nullable(core.double))
  }));
  var title$1 = dart.privateName(verify_information_widgets, "InformationTile.title");
  var information$ = dart.privateName(verify_information_widgets, "InformationTile.information");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  verify_information_widgets.InformationTile = class InformationTile extends framework.StatelessWidget {
    get title() {
      return this[title$1];
    }
    set title(value) {
      super.title = value;
    }
    get information() {
      return this[information$];
    }
    set information(value) {
      super.information = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let information = opts && 'information' in opts ? opts.information : null;
      return new verify_information_widgets.InformationTile.new({key: key, title: title, information: information, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
    build(context) {
      let errorStyle = C[17] || CT.C17;
      let missingData = false;
      if (this.information === "Null" || this.information === "Person" || this.information === "00:00 - 00:00") {
        missingData = true;
      }
      return new basic.Padding.new({padding: C[20] || CT.C20, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.JSArrayOfWidget().of([new text.Text.new(this.title, {style: missingData ? errorStyle : C[21] || CT.C21, $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), new basic.Expanded.new({flex: 5, child: new text.Text.new(missingData ? "-" : this.information, {textAlign: ui.TextAlign.end, style: C[24] || CT.C24, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26})]), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
    }
  };
  (verify_information_widgets.InformationTile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let information = opts && 'information' in opts ? opts.information : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$1] = title;
    this[information$] = information;
    verify_information_widgets.InformationTile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = verify_information_widgets.InformationTile.prototype;
  dart.addTypeTests(verify_information_widgets.InformationTile);
  dart.addTypeCaches(verify_information_widgets.InformationTile);
  dart.setMethodSignature(verify_information_widgets.InformationTile, () => ({
    __proto__: dart.getMethods(verify_information_widgets.InformationTile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(verify_information_widgets.InformationTile, I[1]);
  dart.setFieldSignature(verify_information_widgets.InformationTile, () => ({
    __proto__: dart.getFields(verify_information_widgets.InformationTile.__proto__),
    title: dart.finalFieldType(core.String),
    information: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/widgets/verify_information_widgets.dart", {
    "package:my_ticket_care/src/booking/presentation/widgets/verify_information_widgets.dart": verify_information_widgets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["verify_information_widgets.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaiB;;;;;;IACD;;;;;;IACD;;;;;;IAEM;;;;;;IAAY;;;;;;;;;;;;;;;UAGL;AACxB,YAAO,+BACM,kCAEJ,sDAGE,gCACK,wBACR,yEACc,yBAAoB,sBAAiB,oFAE1C,sEAEK,iBACD,AAAW,uCACT,SAAC,SAAS;AACd,8BAAQ,AAAU,uBAAC,KAAK;AACxB,iCAAW,AAAa,0BAAC,KAAK;AACrC,wBAAO,4DACE,KAAK,eACC,QAAQ;;IAQrC;;;QA7CO;QACS;QACA;QACA;QACA;QACT;;IAJS;IACA;IACA;IACA;IACT;UACM,AAAW,AAAO,UAAR,cAAW,AAAc,aAAD;AACzC,oFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;IAiDN;;;;;;IACF;;;;;;IACC;;;;;;;;;;;;;UAGY;;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,uCACgC,yCAC3B,wBACR,kBAAK,uBAAyB,oBAAT,aAAY,mBAAW,AAAY,WAAD,uEACvD,kBACE,oBACO,qCACI,AAAY,WAAD,wBACK,8BACb;IAItB;;;QA3BO;QACS;QACA;QACT;;IAFS;IACA;IACT;AACF,yFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiCP;;;;;;IAAO;;;;;;;;;;;;UAEM;AAClB;AAID,wBAAc;AACnB,UAAI,AAAY,qBAAG,UACf,AAAY,qBAAG,YACf,AAAY,qBAAG;AACC,QAAlB,cAAc;;AAEhB,YAAO,yDAEE,sCACgC,+CAC3B,wBACR,kBACE,oBACO,WAAW,GACZ,UAAU,kBADE,6DAOpB,8BACQ,UACC,kBACL,WAAW,GAAG,MAAM,gBAAT,cACU;IAOjC;;;QA3CO;QACS;QACA;;IADA;IACA;AACX,8EAAW,GAAG;;EAAC","file":"../../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/widgets/verify_information_widgets.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__widgets__verify_information_widgets: verify_information_widgets
  };
}));

//# sourceMappingURL=verify_information_widgets.dart.lib.js.map
