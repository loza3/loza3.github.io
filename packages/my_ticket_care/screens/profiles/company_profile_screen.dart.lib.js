define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/my_ticket_care/reusable/app_colors.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/my_ticket_care/models/office.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/my_ticket_care/reusable/app_fonts.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/material/circle_avatar.dart', 'packages/flutter/src/painting/_network_image_web.dart'], (function load__packages__my_ticket_care__screens__profiles__company_profile_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__my_ticket_care__reusable__app_colors$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__my_ticket_care__models__office$46dart, packages__flutter__src__rendering__flex$46dart, packages__my_ticket_care__reusable__app_fonts$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__material__circle_avatar$46dart, packages__flutter__src__painting___network_image_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const floating_action_button_location = packages__flutter__src__material__icon_button$46dart.src__material__floating_action_button_location;
  const floating_action_button = packages__flutter__src__material__icon_button$46dart.src__material__floating_action_button;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const app_colors = packages__my_ticket_care__reusable__app_colors$46dart.reusable__app_colors;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const office = packages__my_ticket_care__models__office$46dart.models__office;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const app_fonts = packages__my_ticket_care__reusable__app_fonts$46dart.reusable__app_fonts;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const circle_avatar = packages__flutter__src__material__circle_avatar$46dart.src__material__circle_avatar;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  var company_profile_screen = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CompanyProfileScreen",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 24,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61059
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
        [Icon_size]: 25,
        [Icon_icon]: C[4] || CT.C4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FloatingActionButton",
        [_Location_column]: 16,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 29,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_HeaderProfileCompany",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DataProfileCompany",
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DataProfileCompany",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 20
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[15] || CT.C15,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[18] || CT.C18,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[21] || CT.C21,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 53,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_HeaderProfileCompany",
        [_Location_column]: 9,
        [_Location_line]: 84,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 40,
        [EdgeInsets_left]: 0
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "rectangle",
        [_Enum_index]: 0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280520841.0
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C[28] || CT.C28,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: C[29] || CT.C29
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleAvatar",
        [_Location_column]: 13,
        [_Location_line]: 103,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 110,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[32] || CT.C32,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 113,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 99,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 14,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 93,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/company_profile_screen.dart"
      });
    }
  }, false);
  var C = Array(38).fill(void 0);
  var I = ["package:my_ticket_care/screens/profiles/company_profile_screen.dart"];
  var office$ = dart.privateName(company_profile_screen, "CompanyProfileScreen.office");
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
  company_profile_screen.CompanyProfileScreen = class CompanyProfileScreen extends framework.StatelessWidget {
    get office() {
      return this[office$];
    }
    set office(value) {
      super.office = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let office = opts && 'office' in opts ? opts.office : null;
      return new company_profile_screen.CompanyProfileScreen.new({key: key, office: office, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new scaffold.Scaffold.new({floatingActionButtonLocation: floating_action_button_location.FloatingActionButtonLocation.startTop, floatingActionButton: new basic.Padding.new({padding: C[1] || CT.C1, child: new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
              navigator.Navigator.pop(T.ObjectN(), context);
            }, T.VoidTovoid()), backgroundColor: app_colors.AppColors.primaryColor, foregroundColor: app_colors.AppColors.white, child: C[2] || CT.C2, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new company_profile_screen._HeaderProfileCompany.new({office: this.office, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), new company_profile_screen._DataProfileCompany.new({office: this.office, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8})]), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
  };
  (company_profile_screen.CompanyProfileScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let office = opts && 'office' in opts ? opts.office : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[office$] = office;
    company_profile_screen.CompanyProfileScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = company_profile_screen.CompanyProfileScreen.prototype;
  dart.addTypeTests(company_profile_screen.CompanyProfileScreen);
  dart.addTypeCaches(company_profile_screen.CompanyProfileScreen);
  dart.setMethodSignature(company_profile_screen.CompanyProfileScreen, () => ({
    __proto__: dart.getMethods(company_profile_screen.CompanyProfileScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(company_profile_screen.CompanyProfileScreen, I[0]);
  dart.setFieldSignature(company_profile_screen.CompanyProfileScreen, () => ({
    __proto__: dart.getFields(company_profile_screen.CompanyProfileScreen.__proto__),
    office: dart.finalFieldType(dart.nullable(office.Office))
  }));
  var office$0 = dart.privateName(company_profile_screen, "_DataProfileCompany.office");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  company_profile_screen._DataProfileCompany = class _DataProfileCompany extends framework.StatelessWidget {
    get office() {
      return this[office$0];
    }
    set office(value) {
      super.office = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let office = opts && 'office' in opts ? opts.office : null;
      return new company_profile_screen._DataProfileCompany.new({key: key, office: office, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      return new container.Container.new({padding: C[12] || CT.C12, width: 1 / 0, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisAlignment: flex.MainAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new("País: " + dart.str((t0$ = (t0 = this.office, t0 == null ? null : t0.country), t0$ == null ? "Vacio" : t0$)), {style: app_fonts.AppFonts.titleh1black.copyWith({fontSize: 20.0, fontWeight: ui.FontWeight.w700}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), C[14] || CT.C14, new text.Text.new("Ciudad: " + dart.str((t0$1 = (t0$0 = this.office, t0$0 == null ? null : t0$0.city), t0$1 == null ? "vacio" : t0$1)), {style: app_fonts.AppFonts.titleh1black.copyWith({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), C[17] || CT.C17, new text.Text.new("Dirección: " + dart.str((t0$3 = (t0$2 = this.office, t0$2 == null ? null : t0$2.address), t0$3 == null ? "vacio" : t0$3)), {style: app_fonts.AppFonts.titleh1black.copyWith({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), C[20] || CT.C20, new text.Text.new("Servicios", {style: app_fonts.AppFonts.titleh1black.copyWith({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22})]), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
    }
  };
  (company_profile_screen._DataProfileCompany.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let office = opts && 'office' in opts ? opts.office : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[office$0] = office;
    company_profile_screen._DataProfileCompany.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = company_profile_screen._DataProfileCompany.prototype;
  dart.addTypeTests(company_profile_screen._DataProfileCompany);
  dart.addTypeCaches(company_profile_screen._DataProfileCompany);
  dart.setMethodSignature(company_profile_screen._DataProfileCompany, () => ({
    __proto__: dart.getMethods(company_profile_screen._DataProfileCompany.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(company_profile_screen._DataProfileCompany, I[0]);
  dart.setFieldSignature(company_profile_screen._DataProfileCompany, () => ({
    __proto__: dart.getFields(company_profile_screen._DataProfileCompany.__proto__),
    office: dart.finalFieldType(dart.nullable(office.Office))
  }));
  var office$1 = dart.privateName(company_profile_screen, "_HeaderProfileCompany.office");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  var BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  var BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  var BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  var BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  var BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  var BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  var Color_value = dart.privateName(ui, "Color.value");
  var BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  company_profile_screen._HeaderProfileCompany = class _HeaderProfileCompany extends framework.StatelessWidget {
    get office() {
      return this[office$1];
    }
    set office(value) {
      super.office = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let office = opts && 'office' in opts ? opts.office : null;
      return new company_profile_screen._HeaderProfileCompany.new({key: key, office: office, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      return new container.Container.new({padding: C[26] || CT.C26, decoration: C[27] || CT.C27, child: new basic.Center.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundImage: new _network_image_web.NetworkImage.new((t0$ = (t0 = this.office, t0 == null ? null : t0.companyLogo), t0$ == null ? "https://cdn-icons-png.flaticon.com/512/172/172802.png" : t0$)), radius: 70.0, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), C[31] || CT.C31, new text.Text.new((t0$1 = (t0$0 = this.office, t0$0 == null ? null : t0$0.companyName), t0$1 == null ? "Vacio" : t0$1), {style: app_fonts.AppFonts.titleh1, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33}), new text.Text.new((t0$3 = (t0$2 = this.office, t0$2 == null ? null : t0$2.officeName), t0$3 == null ? "Vacio" : t0$3), {style: app_fonts.AppFonts.titleh2.copyWith({color: app_colors.AppColors.white}), $creationLocationd_0dea112b090073317d4: C[34] || CT.C34})]), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35}), $creationLocationd_0dea112b090073317d4: C[36] || CT.C36}), $creationLocationd_0dea112b090073317d4: C[37] || CT.C37});
    }
  };
  (company_profile_screen._HeaderProfileCompany.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let office = opts && 'office' in opts ? opts.office : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[office$1] = office;
    company_profile_screen._HeaderProfileCompany.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = company_profile_screen._HeaderProfileCompany.prototype;
  dart.addTypeTests(company_profile_screen._HeaderProfileCompany);
  dart.addTypeCaches(company_profile_screen._HeaderProfileCompany);
  dart.setMethodSignature(company_profile_screen._HeaderProfileCompany, () => ({
    __proto__: dart.getMethods(company_profile_screen._HeaderProfileCompany.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(company_profile_screen._HeaderProfileCompany, I[0]);
  dart.setFieldSignature(company_profile_screen._HeaderProfileCompany, () => ({
    __proto__: dart.getFields(company_profile_screen._HeaderProfileCompany.__proto__),
    office: dart.finalFieldType(dart.nullable(office.Office))
  }));
  dart.trackLibraries("packages/my_ticket_care/screens/profiles/company_profile_screen.dart", {
    "package:my_ticket_care/screens/profiles/company_profile_screen.dart": company_profile_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["company_profile_screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOgB;;;;;;;;;;;UAKY;AACxB,YAAO,0DACsD,6FACrC,sDAEb,gEACM;AACa,cAAZ,qCAAI,OAAO;iDAEI,oDACA,0KAOzB,gCACM,wBACR,8DAA8B,sEAC9B,4DAA4B;IAIpC;;;QA3BiC;QAAU;;;AAAW,+EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;IAoCvD;;;;;;;;;;;UAGY;;AACxB,YAAO,6EAGE,0CACkC,kDACF,wCAC3B,wBACR,kBACE,AAAqC,qBAAZ,sCAAhB,OAAQ,aAAR,cAAmB,yBACZ,AACX,oDAAmB,kBAA2B,kGAGrD,kBACE,AAAoC,uBAAZ,2CAAb,OAAQ,YAAR,eAAgB,0BACX,AAAa,oDAAmB,oFAGlD,kBACE,AAA0C,0BAAZ,2CAAhB,OAAQ,eAAR,eAAmB,0BACjB,AAAa,oDAAmB,oFAGlD,kBACE,qBACgB,AAAa,oDAAmB;IAK1D;;;QAtCO;QACS;;;AACX,8EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6CN;;;;;;;;;;;UAGY;;AACxB,YAAO,4FAKE,6BACE,0CACkC,mDACF,yCAC3B,wBACR,qDACmB,yCACK,sCAApB,OAAQ,iBAAR,cACI,yEAEE,kFAKV,mBACsB,2CAApB,OAAQ,mBAAR,eAAuB,yBACP,uFAElB,mBACqB,2CAAnB,OAAQ,kBAAR,eAAsB,yBACN,AAAQ,4CACL;IAO/B;;;QA1CO;QACS;;;AACX,gFAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/screens/profiles/company_profile_screen.dart.lib.js"}');
  // Exports:
  return {
    screens__profiles__company_profile_screen: company_profile_screen
  };
}));

//# sourceMappingURL=company_profile_screen.dart.lib.js.map
