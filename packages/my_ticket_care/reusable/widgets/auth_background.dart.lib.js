define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/safe_area.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__my_ticket_care__reusable__widgets__auth_background_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__safe_area$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const safe_area = packages__flutter__src__widgets__safe_area$46dart.src__widgets__safe_area;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var auth_background = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AuthBackground",
        [_Location_column]: 9,
        [_Location_line]: 6,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_PurpleBox",
        [_Location_column]: 17,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: auth_background._PurpleBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HeaderIcon",
        [_Location_column]: 17,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: auth_background.HeaderIcon.prototype,
        [Widget__location]: C[4] || CT.C4,
        [Widget_key]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 14,
        [_Location_line]: 14,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HeaderIcon",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 22,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61268
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C[11] || CT.C11,
        [Icon_size]: 75,
        [Icon_icon]: C[12] || CT.C12
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SafeArea",
        [_Location_column]: 12,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_PurpleBox",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_Buble",
        [_Location_column]: 48,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: auth_background._Buble.prototype,
        [Widget__location]: C[20] || CT.C20,
        [Widget_key]: null
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: basic.Positioned.prototype,
        [Widget__location]: C[18] || CT.C18,
        [Widget_key]: null,
        [ProxyWidget_child]: C[19] || CT.C19,
        [Positioned_height]: null,
        [Positioned_width]: null,
        [Positioned_bottom]: null,
        [Positioned_right]: null,
        [Positioned_top]: 90,
        [Positioned_left]: 30
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_Buble",
        [_Location_column]: 49,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: auth_background._Buble.prototype,
        [Widget__location]: C[24] || CT.C24,
        [Widget_key]: null
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: basic.Positioned.prototype,
        [Widget__location]: C[22] || CT.C22,
        [Widget_key]: null,
        [ProxyWidget_child]: C[23] || CT.C23,
        [Positioned_height]: null,
        [Positioned_width]: null,
        [Positioned_bottom]: null,
        [Positioned_right]: null,
        [Positioned_top]: -40,
        [Positioned_left]: 60
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_Buble",
        [_Location_column]: 49,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: auth_background._Buble.prototype,
        [Widget__location]: C[28] || CT.C28,
        [Widget_key]: null
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: basic.Positioned.prototype,
        [Widget__location]: C[26] || CT.C26,
        [Widget_key]: null,
        [ProxyWidget_child]: C[27] || CT.C27,
        [Positioned_height]: null,
        [Positioned_width]: null,
        [Positioned_bottom]: null,
        [Positioned_right]: null,
        [Positioned_top]: 120,
        [Positioned_left]: 10
      });
    },
    get C16() {
      return C[16] = dart.constList([C[17] || CT.C17, C[21] || CT.C21, C[25] || CT.C25], framework.Widget);
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 14,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_Buble",
        [_Location_column]: 9,
        [_Location_line]: 80,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 218103807
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 84,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/auth_background.dart"
      });
    }
  }, false);
  var C = Array(34).fill(void 0);
  var I = ["package:my_ticket_care/reusable/widgets/auth_background.dart"];
  var child$ = dart.privateName(auth_background, "AuthBackground.child");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  auth_background.AuthBackground = class AuthBackground extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new auth_background.AuthBackground.new({key: key, child: child, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new basic.SizedBox.new({width: 1 / 0, height: 1 / 0, child: new basic.Stack.new({children: T.JSArrayOfWidget().of([C[1] || CT.C1, C[3] || CT.C3, this.child]), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
  };
  (auth_background.AuthBackground.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    auth_background.AuthBackground.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth_background.AuthBackground.prototype;
  dart.addTypeTests(auth_background.AuthBackground);
  dart.addTypeCaches(auth_background.AuthBackground);
  dart.setMethodSignature(auth_background.AuthBackground, () => ({
    __proto__: dart.getMethods(auth_background.AuthBackground.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(auth_background.AuthBackground, I[0]);
  dart.setFieldSignature(auth_background.AuthBackground, () => ({
    __proto__: dart.getFields(auth_background.AuthBackground.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Color_value = dart.privateName(ui, "Color.value");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  auth_background.HeaderIcon = class HeaderIcon extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new auth_background.HeaderIcon.new({key: key, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    build(context) {
      return new safe_area.SafeArea.new({child: new container.Container.new({width: 1 / 0, margin: C[8] || CT.C8, child: C[9] || CT.C9, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
  };
  (auth_background.HeaderIcon.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    auth_background.HeaderIcon.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth_background.HeaderIcon.prototype;
  dart.addTypeTests(auth_background.HeaderIcon);
  dart.addTypeCaches(auth_background.HeaderIcon);
  dart.setMethodSignature(auth_background.HeaderIcon, () => ({
    __proto__: dart.getMethods(auth_background.HeaderIcon.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(auth_background.HeaderIcon, I[0]);
  var _buildBoxDecoration = dart.privateName(auth_background, "_buildBoxDecoration");
  var ProxyWidget_child = dart.privateName(framework, "ProxyWidget.child");
  var Positioned_height = dart.privateName(basic, "Positioned.height");
  var Positioned_width = dart.privateName(basic, "Positioned.width");
  var Positioned_bottom = dart.privateName(basic, "Positioned.bottom");
  var Positioned_right = dart.privateName(basic, "Positioned.right");
  var Positioned_top = dart.privateName(basic, "Positioned.top");
  var Positioned_left = dart.privateName(basic, "Positioned.left");
  auth_background._PurpleBox = class _PurpleBox extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new auth_background._PurpleBox.new({key: key, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
    build(context) {
      let size = media_query.MediaQuery.of(context).size;
      return new container.Container.new({width: 1 / 0, height: size.height, decoration: this[_buildBoxDecoration](context), child: new basic.Stack.new({children: C[16] || CT.C16, $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
    }
    [_buildBoxDecoration](context) {
      return new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColor().of([theme.Theme.of(context).colorScheme.primary, theme.Theme.of(context).colorScheme.tertiary])})});
    }
  };
  (auth_background._PurpleBox.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    auth_background._PurpleBox.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth_background._PurpleBox.prototype;
  dart.addTypeTests(auth_background._PurpleBox);
  dart.addTypeCaches(auth_background._PurpleBox);
  dart.setMethodSignature(auth_background._PurpleBox, () => ({
    __proto__: dart.getMethods(auth_background._PurpleBox.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildBoxDecoration]: dart.fnType(box_decoration.BoxDecoration, [framework.BuildContext])
  }));
  dart.setLibraryUri(auth_background._PurpleBox, I[0]);
  auth_background._Buble = class _Buble extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new auth_background._Buble.new({key: key, $creationLocationd_0dea112b090073317d4: C[31] || CT.C31});
    }
    build(context) {
      return new container.Container.new({width: 100.0, height: 100.0, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(100.0), color: C[32] || CT.C32}), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
  };
  (auth_background._Buble.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    auth_background._Buble.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth_background._Buble.prototype;
  dart.addTypeTests(auth_background._Buble);
  dart.addTypeCaches(auth_background._Buble);
  dart.setMethodSignature(auth_background._Buble, () => ({
    __proto__: dart.getMethods(auth_background._Buble.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(auth_background._Buble, I[0]);
  dart.trackLibraries("packages/my_ticket_care/reusable/widgets/auth_background.dart", {
    "package:my_ticket_care/reusable/widgets/auth_background.dart": auth_background
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_background.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;;;;;;UAKa;AACxB,YAAO,6DAIE,+BACK,sDAGR;IAIR;;;QAhB4B;QAAmB;;;AAAzC,kEAAsB,GAAG;;EAAuB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAyB5B;AACxB,YAAO,oCACE;IAUX;;;QAhBO;;AACF,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;UAsBM;AAClB,iBAAkB,AAAY,0BAAT,OAAO;AAClC,YAAO,oDAEG,AAAK,IAAD,qBACA,0BAAoB,OAAO,UAChC;IAQX;0BAE+C;AAAY,6DAC3C,yCAAuB,uBACzB,AAAY,AAAY,eAArB,OAAO,uBACV,AAAY,AAAY,eAArB,OAAO;IAOnB;;;QA7BkB;;AAAQ,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;UAoCpB;AACxB,YAAO,qCACE,eACC,mBACI,oDACmB,wCAAS;IAG5C;;;QAXmB;;AAAQ,0DAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/reusable/widgets/auth_background.dart.lib.js"}');
  // Exports:
  return {
    reusable__widgets__auth_background: auth_background
  };
}));

//# sourceMappingURL=auth_background.dart.lib.js.map
