define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/material/colors.dart', 'packages/cool_alert/src/constants/images.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flare_flutter/flare_actor.dart', 'packages/cool_alert/src/utils/single_loop_controller.dart', 'packages/lottie/src/render_lottie.dart', 'packages/flutter/src/widgets/visibility.dart', 'packages/flutter/src/material/dialog.dart', 'packages/cool_alert/src/utils/animate.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__cool_alert__src__widgets__cool_alert_buttons_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__material__colors$46dart, packages__cool_alert__src__constants__images$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flare_flutter__flare_actor$46dart, packages__cool_alert__src__utils__single_loop_controller$46dart, packages__lottie__src__render_lottie$46dart, packages__flutter__src__widgets__visibility$46dart, packages__flutter__src__material__dialog$46dart, packages__cool_alert__src__utils__animate$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const text$ = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const routes = packages__flutter__src__widgets__title$46dart.src__widgets__routes;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const material_button = packages__flutter__src__material__icon_button$46dart.src__material__material_button;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const images = packages__cool_alert__src__constants__images$46dart.src__constants__images;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const flare_actor = packages__flare_flutter__flare_actor$46dart.flare_actor;
  const single_loop_controller = packages__cool_alert__src__utils__single_loop_controller$46dart.src__utils__single_loop_controller;
  const lottie = packages__lottie__src__render_lottie$46dart.src__lottie;
  const visibility = packages__flutter__src__widgets__visibility$46dart.src__widgets__visibility;
  const dialog = packages__flutter__src__material__dialog$46dart.src__material__dialog;
  const animate = packages__cool_alert__src__utils__animate$46dart.src__utils__animate;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  var cool_alert_buttons = Object.create(dart.library);
  var cool_alert_container = Object.create(dart.library);
  var cool_alert_options = Object.create(dart.library);
  var cool_alert = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextN: () => (T.BuildContextN = dart.constFn(dart.nullable(framework.BuildContext)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    AnimationOfdouble: () => (T.AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))(),
    BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget: () => (T.BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T.AnimationOfdouble(), T.AnimationOfdouble(), framework.Widget])))(),
    BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToContainer: () => (T.BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, T.AnimationOfdouble(), T.AnimationOfdouble()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CoolAlertButtons",
        [_Location_column]: 3,
        [_Location_line]: 8,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 14,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 14,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 16,
        [_Location_line]: 81,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 80,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MaterialButton",
        [_Location_column]: 21,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 16,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 89,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 23,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_buttons.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CoolAlertContainer",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 22,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: cool_alert.CoolAlertType.prototype,
        [_Enum__name]: "success",
        [_Enum_index]: 0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: cool_alert.CoolAlertType.prototype,
        [_Enum__name]: "error",
        [_Enum_index]: 1
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: cool_alert.CoolAlertType.prototype,
        [_Enum__name]: "warning",
        [_Enum_index]: 2
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: cool_alert.CoolAlertType.prototype,
        [_Enum__name]: "confirm",
        [_Enum_index]: 3
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: cool_alert.CoolAlertType.prototype,
        [_Enum__name]: "info",
        [_Enum_index]: 4
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlareActor",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlareActor",
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 117,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 132,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Visibility",
        [_Location_column]: 14,
        [_Location_line]: 130,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 142,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 14,
        [_Location_line]: 150,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 159,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 23,
        [_Location_line]: 161,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 171,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CoolAlertButtons",
        [_Location_column]: 14,
        [_Location_line]: 173,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/widgets/cool_alert_container.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: cool_alert.CoolAlertType.prototype,
        [_Enum__name]: "custom",
        [_Enum_index]: 6
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: cool_alert.CoolAlertType.prototype,
        [_Enum__name]: "loading",
        [_Enum_index]: 5
      });
    },
    get C43() {
      return C[43] = dart.constList([C[21] || CT.C21, C[22] || CT.C22, C[23] || CT.C23, C[24] || CT.C24, C[25] || CT.C25, C[42] || CT.C42, C[41] || CT.C41], cool_alert.CoolAlertType);
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: cool_alert.CoolAlertAnimType.prototype,
        [_Enum__name]: "scale",
        [_Enum_index]: 0
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: cool_alert.CoolAlertAnimType.prototype,
        [_Enum__name]: "rotate",
        [_Enum_index]: 1
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: cool_alert.CoolAlertAnimType.prototype,
        [_Enum__name]: "slideInDown",
        [_Enum_index]: 2
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: cool_alert.CoolAlertAnimType.prototype,
        [_Enum__name]: "slideInUp",
        [_Enum_index]: 3
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: cool_alert.CoolAlertAnimType.prototype,
        [_Enum__name]: "slideInLeft",
        [_Enum_index]: 4
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: cool_alert.CoolAlertAnimType.prototype,
        [_Enum__name]: "slideInRight",
        [_Enum_index]: 5
      });
    },
    get C44() {
      return C[44] = dart.constList([C[45] || CT.C45, C[46] || CT.C46, C[47] || CT.C47, C[48] || CT.C48, C[49] || CT.C49, C[50] || CT.C50], cool_alert.CoolAlertAnimType);
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281370070.0
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283522159.0
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CoolAlertContainer",
        [_Location_column]: 16,
        [_Location_line]: 130,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/cool_alert.dart"
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AlertDialog",
        [_Location_column]: 19,
        [_Location_line]: 125,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/cool_alert.dart"
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 40,
        [_Location_line]: 166,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/cool_alert.dart"
      });
    }
  }, false);
  var C = Array(56).fill(void 0);
  var I = [
    "package:cool_alert/src/widgets/cool_alert_buttons.dart",
    "package:cool_alert/src/widgets/cool_alert_container.dart",
    "package:cool_alert/src/models/cool_alert_options.dart",
    "package:cool_alert/cool_alert.dart"
  ];
  var options$ = dart.privateName(cool_alert_buttons, "CoolAlertButtons.options");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _cancelBtn = dart.privateName(cool_alert_buttons, "_cancelBtn");
  var _okayBtn = dart.privateName(cool_alert_buttons, "_okayBtn");
  var _buildButton = dart.privateName(cool_alert_buttons, "_buildButton");
  var _defaultTextStyle = dart.privateName(cool_alert_buttons, "_defaultTextStyle");
  cool_alert_buttons.CoolAlertButtons = class CoolAlertButtons extends framework.StatelessWidget {
    get options() {
      return this[options$];
    }
    set options(value) {
      super.options = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return new cool_alert_buttons.CoolAlertButtons.new({key: key, options: options, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 10.0}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([this[_cancelBtn](context), this[_okayBtn](context)]), $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    [_okayBtn](context) {
      let t0;
      let showCancelBtn = dart.nullCheck(this.options).type === cool_alert.CoolAlertType.confirm ? true : dart.nullCheck(dart.nullCheck(this.options).showCancelBtn);
      let _okayBtn = this[_buildButton]({context: T.BuildContextN().as(context), isOkayBtn: true, text: dart.nullCheck(dart.nullCheck(this.options).confirmBtnText), onTap: (t0 = dart.nullCheck(this.options).onConfirmBtnTap, t0 == null ? dart.fn(() => navigator.Navigator.pop(T.ObjectN(), framework.BuildContext.as(context)), T.VoidTovoid()) : t0)});
      if (showCancelBtn) {
        return new basic.Expanded.new({child: _okayBtn, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
      } else {
        return _okayBtn;
      }
    }
    [_cancelBtn](context) {
      let t0;
      let showCancelBtn = dart.nullCheck(this.options).type === cool_alert.CoolAlertType.confirm ? true : dart.nullCheck(dart.nullCheck(this.options).showCancelBtn);
      let _cancelBtn = this[_buildButton]({context: T.BuildContextN().as(context), isOkayBtn: false, text: dart.nullCheck(dart.nullCheck(this.options).cancelBtnText), onTap: (t0 = dart.nullCheck(this.options).onCancelBtnTap, t0 == null ? dart.fn(() => navigator.Navigator.pop(T.ObjectN(), framework.BuildContext.as(context)), T.VoidTovoid()) : t0)});
      if (showCancelBtn) {
        return new basic.Expanded.new({child: _cancelBtn, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
      } else {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
      }
    }
    [_buildButton](opts) {
      let t0;
      let context = opts && 'context' in opts ? opts.context : null;
      let isOkayBtn = opts && 'isOkayBtn' in opts ? opts.isOkayBtn : null;
      let text = opts && 'text' in opts ? opts.text : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let _btnText = new text$.Text.new(text, {style: this[_defaultTextStyle](isOkayBtn), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
      let okayBtn = new material_button.MaterialButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), color: (t0 = dart.nullCheck(this.options).confirmBtnColor, t0 == null ? theme.Theme.of(dart.nullCheck(context)).primaryColor : t0), onPressed: onTap, child: new container.Container.new({child: new basic.Center.new({child: _btnText, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
      let cancelBtn = new gesture_detector.GestureDetector.new({onTap: onTap, child: new container.Container.new({child: new basic.Center.new({child: _btnText, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
      return isOkayBtn ? okayBtn : cancelBtn;
    }
    [_defaultTextStyle](isOkayBtn) {
      let t0, t0$;
      let textStyle = new text_style.TextStyle.new({color: isOkayBtn ? colors.Colors.white : colors.Colors.grey, fontWeight: ui.FontWeight.w600, fontSize: 18.0});
      if (isOkayBtn) {
        t0 = dart.nullCheck(this.options).confirmBtnTextStyle;
        return t0 == null ? textStyle : t0;
      } else {
        t0$ = dart.nullCheck(this.options).cancelBtnTextStyle;
        return t0$ == null ? textStyle : t0$;
      }
    }
  };
  (cool_alert_buttons.CoolAlertButtons.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$] = options;
    cool_alert_buttons.CoolAlertButtons.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cool_alert_buttons.CoolAlertButtons.prototype;
  dart.addTypeTests(cool_alert_buttons.CoolAlertButtons);
  dart.addTypeCaches(cool_alert_buttons.CoolAlertButtons);
  dart.setMethodSignature(cool_alert_buttons.CoolAlertButtons, () => ({
    __proto__: dart.getMethods(cool_alert_buttons.CoolAlertButtons.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_okayBtn]: dart.fnType(framework.Widget, [dart.dynamic]),
    [_cancelBtn]: dart.fnType(framework.Widget, [dart.dynamic]),
    [_buildButton]: dart.fnType(framework.Widget, [], {context: dart.nullable(framework.BuildContext), onTap: dart.nullable(dart.fnType(dart.void, []))}, {isOkayBtn: core.bool, text: core.String}),
    [_defaultTextStyle]: dart.fnType(text_style.TextStyle, [core.bool])
  }));
  dart.setLibraryUri(cool_alert_buttons.CoolAlertButtons, I[0]);
  dart.setFieldSignature(cool_alert_buttons.CoolAlertButtons, () => ({
    __proto__: dart.getFields(cool_alert_buttons.CoolAlertButtons.__proto__),
    options: dart.finalFieldType(dart.nullable(cool_alert_options.CoolAlertOptions))
  }));
  var options$0 = dart.privateName(cool_alert_container, "CoolAlertContainer.options");
  var _buildHeader = dart.privateName(cool_alert_container, "_buildHeader");
  var _buildTitle = dart.privateName(cool_alert_container, "_buildTitle");
  var _buildText = dart.privateName(cool_alert_container, "_buildText");
  var _buildButtons = dart.privateName(cool_alert_container, "_buildButtons");
  var _buildWidget = dart.privateName(cool_alert_container, "_buildWidget");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _whatTitle = dart.privateName(cool_alert_container, "_whatTitle");
  cool_alert_container.CoolAlertContainer = class CoolAlertContainer extends framework.StatelessWidget {
    get options() {
      return this[options$0];
    }
    set options(value) {
      super.options = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return new cool_alert_container.CoolAlertContainer.new({key: key, options: options, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    build(context) {
      let t0;
      let _header = this[_buildHeader](context);
      let _title = this[_buildTitle](context);
      let _text = this[_buildText](context);
      let _buttons = this[_buildButtons]();
      let _widget = this[_buildWidget](context);
      let _content = new container.Container.new({padding: new edge_insets.EdgeInsets.all(20.0), child: new basic.Column.new({children: T.JSArrayOfWidget().of([_title, new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), _text, dart.nullCheck(_widget), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), _buttons]), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
      return new container.Container.new({width: (t0 = dart.nullCheck(this.options).width, t0 == null ? media_query.MediaQuery.of(context).size.width : t0), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidget().of([_header, _content]), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
    [_buildHeader](context) {
      if (dart.nullCheck(this.options).type === cool_alert.CoolAlertType.loading) {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
      } else {
        let anim = images.AppAnim.success;
        switch (dart.nullCheck(this.options).type) {
          case C[21] || CT.C21:
            {
              anim = images.AppAnim.success;
              break;
            }
          case C[22] || CT.C22:
            {
              anim = images.AppAnim.error;
              break;
            }
          case C[23] || CT.C23:
            {
              anim = images.AppAnim.warning;
              break;
            }
          case C[24] || CT.C24:
            {
              anim = images.AppAnim.info;
              break;
            }
          case C[25] || CT.C25:
            {
              anim = images.AppAnim.info;
              break;
            }
          default:
            {
              anim = images.AppAnim.info;
            }
        }
        if (dart.nullCheck(this.options).flareAsset != null) {
          anim = dart.nullCheck(this.options).flareAsset;
        }
        return new container.Container.new({width: 1 / 0, decoration: new box_decoration.BoxDecoration.new({color: dart.nullCheck(this.options).backgroundColor, borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(dart.nullCheck(dart.nullCheck(this.options).borderRadius)), topRight: new ui.Radius.circular(dart.nullCheck(dart.nullCheck(this.options).borderRadius))})}), child: new container.Container.new({height: 150.0, width: 150.0, child: dart.nullCheck(this.options).lottieAsset == null ? new flare_actor.FlareActor.new(anim, {animation: dart.nullCheck(this.options).loopAnimation ? dart.nullCheck(this.options).flareAnimationName : null, controller: dart.nullCheck(this.options).loopAnimation ? null : new single_loop_controller.SingleLoopController.new(dart.nullCheck(dart.nullCheck(this.options).flareAnimationName), 1.0), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26}) : lottie.Lottie.asset(dart.nullCheck(dart.nullCheck(this.options).lottieAsset)), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
      }
    }
    [_buildTitle](context) {
      let t0;
      if (dart.nullCheck(this.options).type === cool_alert.CoolAlertType.loading) {
        return new basic.Padding.new({padding: C[29] || CT.C29, child: new container.Container.new({height: 100.0, width: 100.0, child: dart.nullCheck(this.options).lottieAsset == null ? new flare_actor.FlareActor.new(images.AppAnim.loading, {animation: dart.nullCheck(this.options).flareAnimationName, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}) : lottie.Lottie.asset(dart.nullCheck(dart.nullCheck(this.options).lottieAsset)), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
      } else {
        let title = (t0 = dart.nullCheck(this.options).title, t0 == null ? this[_whatTitle]() : t0);
        return new visibility.Visibility.new({visible: title != null, child: new text$.Text.new(dart.str(title), {style: theme.Theme.of(framework.BuildContext.as(context)).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33}), $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
      }
    }
    [_buildText](context) {
      let t0, t0$;
      if (dart.nullCheck(this.options).text == null && dart.nullCheck(this.options).type !== cool_alert.CoolAlertType.loading) {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[35] || CT.C35});
      } else {
        let text = "";
        if (dart.nullCheck(this.options).type === cool_alert.CoolAlertType.loading) {
          text = (t0 = dart.nullCheck(this.options).text, t0 == null ? "Loading..." : t0);
        } else {
          text = dart.nullCheck(this.options).text;
        }
        return new text$.Text.new((t0$ = text, t0$ == null ? "" : t0$), {textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C[36] || CT.C36});
      }
    }
    [_buildWidget](context) {
      let t0;
      if (dart.nullCheck(this.options).widget == null && dart.nullCheck(this.options).type !== cool_alert.CoolAlertType.custom) {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[37] || CT.C37});
      } else {
        let widget = new container.Container.new({$creationLocationd_0dea112b090073317d4: C[38] || CT.C38});
        if (dart.nullCheck(this.options).type === cool_alert.CoolAlertType.custom) {
          widget = (t0 = dart.nullCheck(this.options).widget, t0 == null ? widget : t0);
        }
        return dart.nullCheck(this.options).widget;
      }
    }
    [_buildButtons]() {
      if (dart.nullCheck(this.options).type === cool_alert.CoolAlertType.loading) {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[39] || CT.C39});
      } else {
        return new cool_alert_buttons.CoolAlertButtons.new({options: this.options, $creationLocationd_0dea112b090073317d4: C[40] || CT.C40});
      }
    }
    [_whatTitle]() {
      switch (dart.nullCheck(this.options).type) {
        case C[21] || CT.C21:
          {
            return "Success!!!";
          }
        case C[22] || CT.C22:
          {
            return "Error!!!";
          }
        case C[23] || CT.C23:
          {
            return "Warning!!!";
          }
        case C[24] || CT.C24:
          {
            return "Are you sure?";
          }
        case C[25] || CT.C25:
          {
            return "Info!";
          }
        case C[41] || CT.C41:
          {
            return null;
          }
        case C[42] || CT.C42:
          {
            return null;
          }
        default:
          {
            return null;
          }
      }
    }
  };
  (cool_alert_container.CoolAlertContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$0] = options;
    cool_alert_container.CoolAlertContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cool_alert_container.CoolAlertContainer.prototype;
  dart.addTypeTests(cool_alert_container.CoolAlertContainer);
  dart.addTypeCaches(cool_alert_container.CoolAlertContainer);
  dart.setMethodSignature(cool_alert_container.CoolAlertContainer, () => ({
    __proto__: dart.getMethods(cool_alert_container.CoolAlertContainer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildHeader]: dart.fnType(framework.Widget, [dart.dynamic]),
    [_buildTitle]: dart.fnType(framework.Widget, [dart.dynamic]),
    [_buildText]: dart.fnType(framework.Widget, [dart.dynamic]),
    [_buildWidget]: dart.fnType(dart.nullable(framework.Widget), [dart.dynamic]),
    [_buildButtons]: dart.fnType(framework.Widget, []),
    [_whatTitle]: dart.fnType(dart.nullable(core.String), [])
  }));
  dart.setLibraryUri(cool_alert_container.CoolAlertContainer, I[1]);
  dart.setFieldSignature(cool_alert_container.CoolAlertContainer, () => ({
    __proto__: dart.getFields(cool_alert_container.CoolAlertContainer.__proto__),
    options: dart.finalFieldType(dart.nullable(cool_alert_options.CoolAlertOptions))
  }));
  var title$ = dart.privateName(cool_alert_options, "CoolAlertOptions.title");
  var text$0 = dart.privateName(cool_alert_options, "CoolAlertOptions.text");
  var widget$ = dart.privateName(cool_alert_options, "CoolAlertOptions.widget");
  var type$ = dart.privateName(cool_alert_options, "CoolAlertOptions.type");
  var animType$ = dart.privateName(cool_alert_options, "CoolAlertOptions.animType");
  var barrierDismissible$ = dart.privateName(cool_alert_options, "CoolAlertOptions.barrierDismissible");
  var onConfirmBtnTap$ = dart.privateName(cool_alert_options, "CoolAlertOptions.onConfirmBtnTap");
  var onCancelBtnTap$ = dart.privateName(cool_alert_options, "CoolAlertOptions.onCancelBtnTap");
  var confirmBtnText$ = dart.privateName(cool_alert_options, "CoolAlertOptions.confirmBtnText");
  var cancelBtnText$ = dart.privateName(cool_alert_options, "CoolAlertOptions.cancelBtnText");
  var confirmBtnColor$ = dart.privateName(cool_alert_options, "CoolAlertOptions.confirmBtnColor");
  var confirmBtnTextStyle$ = dart.privateName(cool_alert_options, "CoolAlertOptions.confirmBtnTextStyle");
  var cancelBtnTextStyle$ = dart.privateName(cool_alert_options, "CoolAlertOptions.cancelBtnTextStyle");
  var showCancelBtn$ = dart.privateName(cool_alert_options, "CoolAlertOptions.showCancelBtn");
  var borderRadius$ = dart.privateName(cool_alert_options, "CoolAlertOptions.borderRadius");
  var backgroundColor$ = dart.privateName(cool_alert_options, "CoolAlertOptions.backgroundColor");
  var flareAsset$ = dart.privateName(cool_alert_options, "CoolAlertOptions.flareAsset");
  var flareAnimationName$ = dart.privateName(cool_alert_options, "CoolAlertOptions.flareAnimationName");
  var lottieAsset$ = dart.privateName(cool_alert_options, "CoolAlertOptions.lottieAsset");
  var width$ = dart.privateName(cool_alert_options, "CoolAlertOptions.width");
  var loopAnimation$ = dart.privateName(cool_alert_options, "CoolAlertOptions.loopAnimation");
  cool_alert_options.CoolAlertOptions = class CoolAlertOptions extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      this[text$0] = value;
    }
    get widget() {
      return this[widget$];
    }
    set widget(value) {
      this[widget$] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get animType() {
      return this[animType$];
    }
    set animType(value) {
      this[animType$] = value;
    }
    get barrierDismissible() {
      return this[barrierDismissible$];
    }
    set barrierDismissible(value) {
      this[barrierDismissible$] = value;
    }
    get onConfirmBtnTap() {
      return this[onConfirmBtnTap$];
    }
    set onConfirmBtnTap(value) {
      this[onConfirmBtnTap$] = value;
    }
    get onCancelBtnTap() {
      return this[onCancelBtnTap$];
    }
    set onCancelBtnTap(value) {
      this[onCancelBtnTap$] = value;
    }
    get confirmBtnText() {
      return this[confirmBtnText$];
    }
    set confirmBtnText(value) {
      this[confirmBtnText$] = value;
    }
    get cancelBtnText() {
      return this[cancelBtnText$];
    }
    set cancelBtnText(value) {
      this[cancelBtnText$] = value;
    }
    get confirmBtnColor() {
      return this[confirmBtnColor$];
    }
    set confirmBtnColor(value) {
      this[confirmBtnColor$] = value;
    }
    get confirmBtnTextStyle() {
      return this[confirmBtnTextStyle$];
    }
    set confirmBtnTextStyle(value) {
      this[confirmBtnTextStyle$] = value;
    }
    get cancelBtnTextStyle() {
      return this[cancelBtnTextStyle$];
    }
    set cancelBtnTextStyle(value) {
      this[cancelBtnTextStyle$] = value;
    }
    get showCancelBtn() {
      return this[showCancelBtn$];
    }
    set showCancelBtn(value) {
      this[showCancelBtn$] = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      this[borderRadius$] = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      this[backgroundColor$] = value;
    }
    get flareAsset() {
      return this[flareAsset$];
    }
    set flareAsset(value) {
      this[flareAsset$] = value;
    }
    get flareAnimationName() {
      return this[flareAnimationName$];
    }
    set flareAnimationName(value) {
      this[flareAnimationName$] = value;
    }
    get lottieAsset() {
      return this[lottieAsset$];
    }
    set lottieAsset(value) {
      this[lottieAsset$] = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      this[width$] = value;
    }
    get loopAnimation() {
      return this[loopAnimation$];
    }
    set loopAnimation(value) {
      this[loopAnimation$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let title = opts && 'title' in opts ? opts.title : null;
      let text = opts && 'text' in opts ? opts.text : null;
      let widget = opts && 'widget' in opts ? opts.widget : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let animType = opts && 'animType' in opts ? opts.animType : null;
      let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : null;
      let onConfirmBtnTap = opts && 'onConfirmBtnTap' in opts ? opts.onConfirmBtnTap : null;
      let onCancelBtnTap = opts && 'onCancelBtnTap' in opts ? opts.onCancelBtnTap : null;
      let confirmBtnText = opts && 'confirmBtnText' in opts ? opts.confirmBtnText : null;
      let cancelBtnText = opts && 'cancelBtnText' in opts ? opts.cancelBtnText : null;
      let confirmBtnColor = opts && 'confirmBtnColor' in opts ? opts.confirmBtnColor : null;
      let confirmBtnTextStyle = opts && 'confirmBtnTextStyle' in opts ? opts.confirmBtnTextStyle : null;
      let cancelBtnTextStyle = opts && 'cancelBtnTextStyle' in opts ? opts.cancelBtnTextStyle : null;
      let showCancelBtn = opts && 'showCancelBtn' in opts ? opts.showCancelBtn : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let flareAsset = opts && 'flareAsset' in opts ? opts.flareAsset : null;
      let flareAnimationName = opts && 'flareAnimationName' in opts ? opts.flareAnimationName : null;
      let lottieAsset = opts && 'lottieAsset' in opts ? opts.lottieAsset : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let loopAnimation = opts && 'loopAnimation' in opts ? opts.loopAnimation : false;
      return new cool_alert_options.CoolAlertOptions.new({title: title, text: text, widget: widget, type: type, animType: animType, barrierDismissible: barrierDismissible, onConfirmBtnTap: onConfirmBtnTap, onCancelBtnTap: onCancelBtnTap, confirmBtnText: confirmBtnText, cancelBtnText: cancelBtnText, confirmBtnColor: confirmBtnColor, confirmBtnTextStyle: confirmBtnTextStyle, cancelBtnTextStyle: cancelBtnTextStyle, showCancelBtn: showCancelBtn, borderRadius: borderRadius, backgroundColor: backgroundColor, flareAsset: flareAsset, flareAnimationName: flareAnimationName, lottieAsset: lottieAsset, width: width, loopAnimation: loopAnimation});
    }
  };
  (cool_alert_options.CoolAlertOptions.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let widget = opts && 'widget' in opts ? opts.widget : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let animType = opts && 'animType' in opts ? opts.animType : null;
    let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : null;
    let onConfirmBtnTap = opts && 'onConfirmBtnTap' in opts ? opts.onConfirmBtnTap : null;
    let onCancelBtnTap = opts && 'onCancelBtnTap' in opts ? opts.onCancelBtnTap : null;
    let confirmBtnText = opts && 'confirmBtnText' in opts ? opts.confirmBtnText : null;
    let cancelBtnText = opts && 'cancelBtnText' in opts ? opts.cancelBtnText : null;
    let confirmBtnColor = opts && 'confirmBtnColor' in opts ? opts.confirmBtnColor : null;
    let confirmBtnTextStyle = opts && 'confirmBtnTextStyle' in opts ? opts.confirmBtnTextStyle : null;
    let cancelBtnTextStyle = opts && 'cancelBtnTextStyle' in opts ? opts.cancelBtnTextStyle : null;
    let showCancelBtn = opts && 'showCancelBtn' in opts ? opts.showCancelBtn : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let flareAsset = opts && 'flareAsset' in opts ? opts.flareAsset : null;
    let flareAnimationName = opts && 'flareAnimationName' in opts ? opts.flareAnimationName : null;
    let lottieAsset = opts && 'lottieAsset' in opts ? opts.lottieAsset : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let loopAnimation = opts && 'loopAnimation' in opts ? opts.loopAnimation : false;
    this[barrierDismissible$] = false;
    this[title$] = title;
    this[text$0] = text;
    this[widget$] = widget;
    this[type$] = type;
    this[animType$] = animType;
    this[barrierDismissible$] = barrierDismissible;
    this[onConfirmBtnTap$] = onConfirmBtnTap;
    this[onCancelBtnTap$] = onCancelBtnTap;
    this[confirmBtnText$] = confirmBtnText;
    this[cancelBtnText$] = cancelBtnText;
    this[confirmBtnColor$] = confirmBtnColor;
    this[confirmBtnTextStyle$] = confirmBtnTextStyle;
    this[cancelBtnTextStyle$] = cancelBtnTextStyle;
    this[showCancelBtn$] = showCancelBtn;
    this[borderRadius$] = borderRadius;
    this[backgroundColor$] = backgroundColor;
    this[flareAsset$] = flareAsset;
    this[flareAnimationName$] = flareAnimationName;
    this[lottieAsset$] = lottieAsset;
    this[width$] = width;
    this[loopAnimation$] = loopAnimation;
    ;
  }).prototype = cool_alert_options.CoolAlertOptions.prototype;
  dart.addTypeTests(cool_alert_options.CoolAlertOptions);
  dart.addTypeCaches(cool_alert_options.CoolAlertOptions);
  dart.setLibraryUri(cool_alert_options.CoolAlertOptions, I[2]);
  dart.setFieldSignature(cool_alert_options.CoolAlertOptions, () => ({
    __proto__: dart.getFields(cool_alert_options.CoolAlertOptions.__proto__),
    title: dart.fieldType(dart.nullable(core.String)),
    text: dart.fieldType(dart.nullable(core.String)),
    widget: dart.fieldType(dart.nullable(framework.Widget)),
    type: dart.fieldType(cool_alert.CoolAlertType),
    animType: dart.fieldType(dart.nullable(cool_alert.CoolAlertAnimType)),
    barrierDismissible: dart.fieldType(dart.nullable(core.bool)),
    onConfirmBtnTap: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onCancelBtnTap: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    confirmBtnText: dart.fieldType(dart.nullable(core.String)),
    cancelBtnText: dart.fieldType(dart.nullable(core.String)),
    confirmBtnColor: dart.fieldType(dart.nullable(ui.Color)),
    confirmBtnTextStyle: dart.fieldType(dart.nullable(text_style.TextStyle)),
    cancelBtnTextStyle: dart.fieldType(dart.nullable(text_style.TextStyle)),
    showCancelBtn: dart.fieldType(dart.nullable(core.bool)),
    borderRadius: dart.fieldType(dart.nullable(core.double)),
    backgroundColor: dart.fieldType(dart.nullable(ui.Color)),
    flareAsset: dart.fieldType(dart.nullable(core.String)),
    flareAnimationName: dart.fieldType(dart.nullable(core.String)),
    lottieAsset: dart.fieldType(dart.nullable(core.String)),
    width: dart.fieldType(dart.nullable(core.double)),
    loopAnimation: dart.fieldType(core.bool)
  }));
  var _name = dart.privateName(core, "_name");
  cool_alert.CoolAlertType = class CoolAlertType extends core._Enum {
    toString() {
      return "CoolAlertType." + this[_name];
    }
  };
  (cool_alert.CoolAlertType.new = function(index, name) {
    cool_alert.CoolAlertType.__proto__.new.call(this, index, name);
    ;
  }).prototype = cool_alert.CoolAlertType.prototype;
  dart.addTypeTests(cool_alert.CoolAlertType);
  dart.addTypeCaches(cool_alert.CoolAlertType);
  dart.setLibraryUri(cool_alert.CoolAlertType, I[3]);
  dart.setStaticFieldSignature(cool_alert.CoolAlertType, () => ['values', 'success', 'error', 'warning', 'confirm', 'info', 'loading', 'custom']);
  dart.defineExtensionMethods(cool_alert.CoolAlertType, ['toString']);
  dart.defineLazy(cool_alert.CoolAlertType, {
    /*cool_alert.CoolAlertType.values*/get values() {
      return C[43] || CT.C43;
    },
    /*cool_alert.CoolAlertType.success*/get success() {
      return C[21] || CT.C21;
    },
    /*cool_alert.CoolAlertType.error*/get error() {
      return C[22] || CT.C22;
    },
    /*cool_alert.CoolAlertType.warning*/get warning() {
      return C[23] || CT.C23;
    },
    /*cool_alert.CoolAlertType.confirm*/get confirm() {
      return C[24] || CT.C24;
    },
    /*cool_alert.CoolAlertType.info*/get info() {
      return C[25] || CT.C25;
    },
    /*cool_alert.CoolAlertType.loading*/get loading() {
      return C[42] || CT.C42;
    },
    /*cool_alert.CoolAlertType.custom*/get custom() {
      return C[41] || CT.C41;
    }
  }, false);
  cool_alert.CoolAlertAnimType = class CoolAlertAnimType extends core._Enum {
    toString() {
      return "CoolAlertAnimType." + this[_name];
    }
  };
  (cool_alert.CoolAlertAnimType.new = function(index, name) {
    cool_alert.CoolAlertAnimType.__proto__.new.call(this, index, name);
    ;
  }).prototype = cool_alert.CoolAlertAnimType.prototype;
  dart.addTypeTests(cool_alert.CoolAlertAnimType);
  dart.addTypeCaches(cool_alert.CoolAlertAnimType);
  dart.setLibraryUri(cool_alert.CoolAlertAnimType, I[3]);
  dart.setStaticFieldSignature(cool_alert.CoolAlertAnimType, () => ['values', 'scale', 'rotate', 'slideInDown', 'slideInUp', 'slideInLeft', 'slideInRight']);
  dart.defineExtensionMethods(cool_alert.CoolAlertAnimType, ['toString']);
  dart.defineLazy(cool_alert.CoolAlertAnimType, {
    /*cool_alert.CoolAlertAnimType.values*/get values() {
      return C[44] || CT.C44;
    },
    /*cool_alert.CoolAlertAnimType.scale*/get scale() {
      return C[45] || CT.C45;
    },
    /*cool_alert.CoolAlertAnimType.rotate*/get rotate() {
      return C[46] || CT.C46;
    },
    /*cool_alert.CoolAlertAnimType.slideInDown*/get slideInDown() {
      return C[47] || CT.C47;
    },
    /*cool_alert.CoolAlertAnimType.slideInUp*/get slideInUp() {
      return C[48] || CT.C48;
    },
    /*cool_alert.CoolAlertAnimType.slideInLeft*/get slideInLeft() {
      return C[49] || CT.C49;
    },
    /*cool_alert.CoolAlertAnimType.slideInRight*/get slideInRight() {
      return C[50] || CT.C50;
    }
  }, false);
  var Color_value = dart.privateName(ui, "Color.value");
  cool_alert.CoolAlert = class CoolAlert extends core.Object {
    static show(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let text = opts && 'text' in opts ? opts.text : null;
      let widget = opts && 'widget' in opts ? opts.widget : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let animType = opts && 'animType' in opts ? opts.animType : C[45] || CT.C45;
      let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
      let onConfirmBtnTap = opts && 'onConfirmBtnTap' in opts ? opts.onConfirmBtnTap : null;
      let onCancelBtnTap = opts && 'onCancelBtnTap' in opts ? opts.onCancelBtnTap : null;
      let confirmBtnText = opts && 'confirmBtnText' in opts ? opts.confirmBtnText : "Ok";
      let cancelBtnText = opts && 'cancelBtnText' in opts ? opts.cancelBtnText : "Cancel";
      let confirmBtnColor = opts && 'confirmBtnColor' in opts ? opts.confirmBtnColor : C[51] || CT.C51;
      let confirmBtnTextStyle = opts && 'confirmBtnTextStyle' in opts ? opts.confirmBtnTextStyle : null;
      let cancelBtnTextStyle = opts && 'cancelBtnTextStyle' in opts ? opts.cancelBtnTextStyle : null;
      let showCancelBtn = opts && 'showCancelBtn' in opts ? opts.showCancelBtn : false;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : 10;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[52] || CT.C52;
      let flareAsset = opts && 'flareAsset' in opts ? opts.flareAsset : null;
      let flareAnimationName = opts && 'flareAnimationName' in opts ? opts.flareAnimationName : "play";
      let lottieAsset = opts && 'lottieAsset' in opts ? opts.lottieAsset : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let autoCloseDuration = opts && 'autoCloseDuration' in opts ? opts.autoCloseDuration : null;
      let loopAnimation = opts && 'loopAnimation' in opts ? opts.loopAnimation : false;
      if (autoCloseDuration != null) {
        T.FutureOfNull().delayed(autoCloseDuration, dart.fn(() => {
          navigator.Navigator.of(context, {rootNavigator: true}).pop(T.ObjectN());
        }, T.VoidToNull()));
      }
      let options = new cool_alert_options.CoolAlertOptions.new({title: title, text: text, widget: widget, type: type, animType: animType, barrierDismissible: barrierDismissible, onConfirmBtnTap: onConfirmBtnTap, onCancelBtnTap: onCancelBtnTap, confirmBtnText: confirmBtnText, cancelBtnText: cancelBtnText, confirmBtnColor: confirmBtnColor, confirmBtnTextStyle: confirmBtnTextStyle, cancelBtnTextStyle: cancelBtnTextStyle, showCancelBtn: showCancelBtn, borderRadius: borderRadius, backgroundColor: backgroundColor, flareAsset: flareAsset, flareAnimationName: flareAnimationName, lottieAsset: lottieAsset, width: width, loopAnimation: loopAnimation});
      let child = new dialog.AlertDialog.new({contentPadding: edge_insets.EdgeInsets.zero, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(borderRadius)}), content: new cool_alert_container.CoolAlertContainer.new({options: options, $creationLocationd_0dea112b090073317d4: C[53] || CT.C53}), $creationLocationd_0dea112b090073317d4: C[54] || CT.C54});
      return routes.showGeneralDialog(T.ObjectN(), {barrierColor: colors.Colors.black.withOpacity(0.5), transitionBuilder: dart.fn((context, anim1, __, widget) => {
          switch (animType) {
            case C[45] || CT.C45:
              {
                return animate.Animate.scale({child: child, animation: anim1});
              }
            case C[46] || CT.C46:
              {
                return animate.Animate.rotate({child: child, animation: anim1});
              }
            case C[47] || CT.C47:
              {
                return animate.Animate.slideInDown({child: child, animation: anim1});
              }
            case C[48] || CT.C48:
              {
                return animate.Animate.slideInUp({child: child, animation: anim1});
              }
            case C[49] || CT.C49:
              {
                return animate.Animate.slideInLeft({child: child, animation: anim1});
              }
            case C[50] || CT.C50:
              {
                return animate.Animate.slideInRight({child: child, animation: anim1});
              }
            default:
              {
                return child;
              }
          }
        }, T.BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget()), transitionDuration: new core.Duration.new({milliseconds: 200}), barrierDismissible: autoCloseDuration != null ? false : barrierDismissible, barrierLabel: "", context: context, pageBuilder: dart.fn((context, _, __) => new container.Container.new({$creationLocationd_0dea112b090073317d4: C[55] || CT.C55}), T.BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToContainer())});
    }
    static ['_#new#tearOff']() {
      return new cool_alert.CoolAlert.new();
    }
  };
  (cool_alert.CoolAlert.new = function() {
    ;
  }).prototype = cool_alert.CoolAlert.prototype;
  dart.addTypeTests(cool_alert.CoolAlert);
  dart.addTypeCaches(cool_alert.CoolAlert);
  dart.setStaticMethodSignature(cool_alert.CoolAlert, () => ['show']);
  dart.setLibraryUri(cool_alert.CoolAlert, I[3]);
  dart.trackLibraries("packages/cool_alert/src/widgets/cool_alert_buttons.dart", {
    "package:cool_alert/src/widgets/cool_alert_buttons.dart": cool_alert_buttons,
    "package:cool_alert/src/widgets/cool_alert_container.dart": cool_alert_container,
    "package:cool_alert/src/models/cool_alert_options.dart": cool_alert_options,
    "package:cool_alert/cool_alert.dart": cool_alert
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cool_alert_buttons.dart","cool_alert_container.dart","../models/cool_alert_options.dart","../../cool_alert.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/cool_alert/src/widgets/cool_alert_buttons.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__cool_alert_buttons: cool_alert_buttons,
    src__widgets__cool_alert_container: cool_alert_container,
    src__models__cool_alert_options: cool_alert_options,
    cool_alert: cool_alert
  };
}));

//# sourceMappingURL=cool_alert_buttons.dart.lib.js.map
