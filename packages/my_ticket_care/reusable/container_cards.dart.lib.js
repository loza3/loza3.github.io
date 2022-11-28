define(['dart_sdk', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/box_shadow.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/placeholder_span.dart'], (function load__packages__my_ticket_care__reusable__container_cards_dart(dart_sdk, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__box_shadow$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__placeholder_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const image = packages__flutter__src__widgets__title$46dart.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const box_shadow = packages__flutter__src__painting__box_shadow$46dart.src__painting__box_shadow;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  var container_cards = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfBoxShadow: () => (T.JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 38,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRRect",
        [_Location_column]: 30,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 27,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 27,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 27,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 28,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 19,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 24,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 11,
        [_Location_line]: 80,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 93,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 19,
        [_Location_line]: 88,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 106,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 19,
        [_Location_line]: 101,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 15,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 11,
        [_Location_line]: 83,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/container_cards.dart"
      });
    }
  }, false);
  var C = Array(24).fill(void 0);
  var I = ["package:my_ticket_care/reusable/container_cards.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  container_cards.ContainersCards = class ContainersCards extends framework.StatelessWidget {
    static cardsDecorations(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let imagen = opts && 'imagen' in opts ? opts.imagen : null;
      let titulo = opts && 'titulo' in opts ? opts.titulo : null;
      let subtitulo = opts && 'subtitulo' in opts ? opts.subtitulo : null;
      let subtitulo2 = opts && 'subtitulo2' in opts ? opts.subtitulo2 : null;
      let hora = opts && 'hora' in opts ? opts.hora : null;
      let button1 = opts && 'button1' in opts ? opts.button1 : null;
      let button2 = opts && 'button2' in opts ? opts.button2 : null;
      let shadow = opts && 'shadow' in opts ? opts.shadow : null;
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(10.0), margin: new edge_insets.EdgeInsets.only({bottom: 15.0}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(20.0), color: colorScheme.background, boxShadow: shadow == null ? T.JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.grey.withOpacity(0.2), spreadRadius: 0.0, blurRadius: 2.0, offset: new ui.Offset.new(0.0, 1.0)})]) : null}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.SizedBox.new({width: 60.0, height: 60.0, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20.0), child: new image.Image.network(imagen, {$creationLocationd_0dea112b090073317d4: C[0] || CT.C0}), $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), new basic.Flexible.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(titulo, {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 15.0, fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), new text.Text.new(subtitulo, {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(500)}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), new text.Text.new(hora ? dart.str(subtitulo2) : "", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(500)}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8})]), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10})]), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12})]), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.JSArrayOfWidget().of([new basic.Row.new({children: T.JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 8.0, horizontal: 15.0}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(12.0), color: colors.Colors.grey.shade200}), child: new text.Text.new(button1, {style: new text_style.TextStyle.new({color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 8.0, horizontal: 15.0}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(12.0), color: colorScheme.primary}), child: new text.Text.new(button2, {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19})]), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20})]), $creationLocationd_0dea112b090073317d4: C[21] || CT.C21})]), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23});
    }
  };
  (container_cards.ContainersCards.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    container_cards.ContainersCards.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = container_cards.ContainersCards.prototype;
  dart.addTypeTests(container_cards.ContainersCards);
  dart.addTypeCaches(container_cards.ContainersCards);
  dart.setStaticMethodSignature(container_cards.ContainersCards, () => ['cardsDecorations']);
  dart.setLibraryUri(container_cards.ContainersCards, I[0]);
  dart.trackLibraries("packages/my_ticket_care/reusable/container_cards.dart", {
    "package:my_ticket_care/reusable/container_cards.dart": container_cards
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["container_cards.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU0B;UACN;UACA;UACA;UACR;UACM;UACE;UACA;UACV;AAEM,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,uCACe,+BAAI,eACL,yCAAa,oBACpB,oDACiB,wCAAS,cAC7B,AAAY,WAAD,wBACN,AAAO,MAAD,WACZ,2BACE,qCACgB,AAAK,+BAAY,oBACjB,iBACF,aACJ,kBAAO,KAAG,WAGtB,eAED,gCACK,wBACR,sCACuC,+CAC3B,wBACR,+BACS,6BAAc,wBACnB,+BACW,cACC,aACD,uCACsB,wCAAS,cACvB,wBAAQ,MAAM,8KAEjC,+BAAgB,+DAChB,+BACS,0CACoC,yCAC7B,wBACR,kBAAK,MAAM,UACA,qCACW,+BACJ,kBACa,+EAC/B,gCACU,8DAEV,kBAAK,SAAS,UACH,qCAAwB,AAAI,wBAAC,iEACxC,gCACU,8DAEV,kBAAK,IAAI,GAAiB,SAAZ,UAAU,IAAI,EAAnB,UACE,qCAAwB,AAAI,wBAAC,4WAOxD,gCACU,iEAEV,sCACuC,+CAC3B,wBACR,6BACY,wBACR,sCACsB,gDAAoB,iBAAe,oBAC3C,oDACmB,wCAAS,cACtB,AAAK,sCAChB,kBACL,OAAO,UACA,qCAAwB,6IAGnC,+BACS,iEAET,sCACsB,gDAAoB,iBAAe,oBAC3C,oDACmB,wCAAS,cAC7B,AAAY,WAAD,mBACf,kBACL,OAAO,UACA,qCAAwB;IAUnD;;;QAhH6B;;AAAvB,mEAAuB,GAAG;;EAAE","file":"../../../../../../../../../packages/my_ticket_care/reusable/container_cards.dart.lib.js"}');
  // Exports:
  return {
    reusable__container_cards: container_cards
  };
}));

//# sourceMappingURL=container_cards.dart.lib.js.map
