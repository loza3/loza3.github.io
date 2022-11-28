define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/material/constants.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/painting/_network_image_web.dart'], (function load__packages__flutter__src__material__circle_avatar_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__material__constants$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__painting___network_image_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const implicit_animations = packages__flutter__src__widgets__title$46dart.src__widgets__implicit_animations;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const constants = packages__flutter__src__material__constants$46dart.src__material__constants;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  var circle_avatar = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleAvatar",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/circle_avatar.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "dark",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTextStyle",
        [_Location_column]: 26,
        [_Location_line]: 256,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/circle_avatar.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 24,
        [_Location_line]: 254,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/circle_avatar.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MediaQuery",
        [_Location_column]: 22,
        [_Location_line]: 250,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/circle_avatar.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 13,
        [_Location_line]: 249,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/circle_avatar.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedContainer",
        [_Location_column]: 12,
        [_Location_line]: 218,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/circle_avatar.dart"
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/circle_avatar.dart",
    "package:flutter/src/material/circle_avatar.dart"
  ];
  var child$ = dart.privateName(circle_avatar, "CircleAvatar.child");
  var backgroundColor$ = dart.privateName(circle_avatar, "CircleAvatar.backgroundColor");
  var foregroundColor$ = dart.privateName(circle_avatar, "CircleAvatar.foregroundColor");
  var backgroundImage$ = dart.privateName(circle_avatar, "CircleAvatar.backgroundImage");
  var foregroundImage$ = dart.privateName(circle_avatar, "CircleAvatar.foregroundImage");
  var onBackgroundImageError$ = dart.privateName(circle_avatar, "CircleAvatar.onBackgroundImageError");
  var onForegroundImageError$ = dart.privateName(circle_avatar, "CircleAvatar.onForegroundImageError");
  var radius$ = dart.privateName(circle_avatar, "CircleAvatar.radius");
  var minRadius$ = dart.privateName(circle_avatar, "CircleAvatar.minRadius");
  var maxRadius$ = dart.privateName(circle_avatar, "CircleAvatar.maxRadius");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _minDiameter = dart.privateName(circle_avatar, "_minDiameter");
  var _maxDiameter = dart.privateName(circle_avatar, "_maxDiameter");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  circle_avatar.CircleAvatar = class CircleAvatar extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get foregroundColor() {
      return this[foregroundColor$];
    }
    set foregroundColor(value) {
      super.foregroundColor = value;
    }
    get backgroundImage() {
      return this[backgroundImage$];
    }
    set backgroundImage(value) {
      super.backgroundImage = value;
    }
    get foregroundImage() {
      return this[foregroundImage$];
    }
    set foregroundImage(value) {
      super.foregroundImage = value;
    }
    get onBackgroundImageError() {
      return this[onBackgroundImageError$];
    }
    set onBackgroundImageError(value) {
      super.onBackgroundImageError = value;
    }
    get onForegroundImageError() {
      return this[onForegroundImageError$];
    }
    set onForegroundImageError(value) {
      super.onForegroundImageError = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get minRadius() {
      return this[minRadius$];
    }
    set minRadius(value) {
      super.minRadius = value;
    }
    get maxRadius() {
      return this[maxRadius$];
    }
    set maxRadius(value) {
      super.maxRadius = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let backgroundImage = opts && 'backgroundImage' in opts ? opts.backgroundImage : null;
      let foregroundImage = opts && 'foregroundImage' in opts ? opts.foregroundImage : null;
      let onBackgroundImageError = opts && 'onBackgroundImageError' in opts ? opts.onBackgroundImageError : null;
      let onForegroundImageError = opts && 'onForegroundImageError' in opts ? opts.onForegroundImageError : null;
      let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let minRadius = opts && 'minRadius' in opts ? opts.minRadius : null;
      let maxRadius = opts && 'maxRadius' in opts ? opts.maxRadius : null;
      return new circle_avatar.CircleAvatar.new({key: key, child: child, backgroundColor: backgroundColor, backgroundImage: backgroundImage, foregroundImage: foregroundImage, onBackgroundImageError: onBackgroundImageError, onForegroundImageError: onForegroundImageError, foregroundColor: foregroundColor, radius: radius, minRadius: minRadius, maxRadius: maxRadius, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    get [_minDiameter]() {
      let t0, t0$;
      if (this.radius == null && this.minRadius == null && this.maxRadius == null) {
        return 20 * 2.0;
      }
      return 2.0 * dart.notNull((t0$ = (t0 = this.radius, t0 == null ? this.minRadius : t0), t0$ == null ? 0 : t0$));
    }
    get [_maxDiameter]() {
      let t0, t0$;
      if (this.radius == null && this.minRadius == null && this.maxRadius == null) {
        return 20 * 2.0;
      }
      return 2.0 * dart.notNull((t0$ = (t0 = this.radius, t0 == null ? this.maxRadius : t0), t0$ == null ? 1 / 0 : t0$));
    }
    build(context) {
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[0], 193, 12, "debugCheckHasMediaQuery(context)");
      let theme = theme$.Theme.of(context);
      let textStyle = dart.nullCheck(theme.primaryTextTheme.subtitle1).copyWith({color: this.foregroundColor});
      let effectiveBackgroundColor = this.backgroundColor;
      if (effectiveBackgroundColor == null) {
        switch (theme_data.ThemeData.estimateBrightnessForColor(dart.nullCheck(textStyle.color))) {
          case C[1] || CT.C1:
            {
              effectiveBackgroundColor = theme.primaryColorLight;
              break;
            }
          case C[2] || CT.C2:
            {
              effectiveBackgroundColor = theme.primaryColorDark;
              break;
            }
        }
      } else if (this.foregroundColor == null) {
        switch (theme_data.ThemeData.estimateBrightnessForColor(dart.nullCheck(this.backgroundColor))) {
          case C[1] || CT.C1:
            {
              textStyle = textStyle.copyWith({color: theme.primaryColorLight});
              break;
            }
          case C[2] || CT.C2:
            {
              textStyle = textStyle.copyWith({color: theme.primaryColorDark});
              break;
            }
        }
      }
      let minDiameter = this[_minDiameter];
      let maxDiameter = this[_maxDiameter];
      return new implicit_animations.AnimatedContainer.new({constraints: new box.BoxConstraints.new({minHeight: minDiameter, minWidth: minDiameter, maxWidth: maxDiameter, maxHeight: maxDiameter}), duration: constants.kThemeChangeDuration, decoration: new box_decoration.BoxDecoration.new({color: effectiveBackgroundColor, image: this.backgroundImage != null ? new decoration_image.DecorationImage.new({image: dart.nullCheck(this.backgroundImage), onError: this.onBackgroundImageError, fit: box_fit.BoxFit.cover}) : null, shape: box_border.BoxShape.circle}), foregroundDecoration: this.foregroundImage != null ? new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: dart.nullCheck(this.foregroundImage), onError: this.onForegroundImageError, fit: box_fit.BoxFit.cover}), shape: box_border.BoxShape.circle}) : null, child: this.child == null ? null : new basic.Center.new({child: new media_query.MediaQuery.new({data: media_query.MediaQuery.of(context).copyWith({textScaleFactor: 1.0}), child: new icon_theme.IconTheme.new({data: theme.iconTheme.copyWith({color: textStyle.color}), child: new text.DefaultTextStyle.new({style: textStyle, child: dart.nullCheck(this.child), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
  };
  (circle_avatar.CircleAvatar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let backgroundImage = opts && 'backgroundImage' in opts ? opts.backgroundImage : null;
    let foregroundImage = opts && 'foregroundImage' in opts ? opts.foregroundImage : null;
    let onBackgroundImageError = opts && 'onBackgroundImageError' in opts ? opts.onBackgroundImageError : null;
    let onForegroundImageError = opts && 'onForegroundImageError' in opts ? opts.onForegroundImageError : null;
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let minRadius = opts && 'minRadius' in opts ? opts.minRadius : null;
    let maxRadius = opts && 'maxRadius' in opts ? opts.maxRadius : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[backgroundColor$] = backgroundColor;
    this[backgroundImage$] = backgroundImage;
    this[foregroundImage$] = foregroundImage;
    this[onBackgroundImageError$] = onBackgroundImageError;
    this[onForegroundImageError$] = onForegroundImageError;
    this[foregroundColor$] = foregroundColor;
    this[radius$] = radius;
    this[minRadius$] = minRadius;
    this[maxRadius$] = maxRadius;
    if (!(radius == null || minRadius == null && maxRadius == null)) dart.assertFailed(null, I[0], 74, 15, "radius == null || (minRadius == null && maxRadius == null)");
    if (!(backgroundImage != null || onBackgroundImageError == null)) dart.assertFailed(null, I[0], 75, 15, "backgroundImage != null || onBackgroundImageError == null");
    if (!(foregroundImage != null || onForegroundImageError == null)) dart.assertFailed(null, I[0], 76, 15, "foregroundImage != null || onForegroundImageError== null");
    circle_avatar.CircleAvatar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = circle_avatar.CircleAvatar.prototype;
  dart.addTypeTests(circle_avatar.CircleAvatar);
  dart.addTypeCaches(circle_avatar.CircleAvatar);
  dart.setMethodSignature(circle_avatar.CircleAvatar, () => ({
    __proto__: dart.getMethods(circle_avatar.CircleAvatar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(circle_avatar.CircleAvatar, () => ({
    __proto__: dart.getGetters(circle_avatar.CircleAvatar.__proto__),
    [_minDiameter]: core.double,
    [_maxDiameter]: core.double
  }));
  dart.setLibraryUri(circle_avatar.CircleAvatar, I[1]);
  dart.setFieldSignature(circle_avatar.CircleAvatar, () => ({
    __proto__: dart.getFields(circle_avatar.CircleAvatar.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    foregroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    backgroundImage: dart.finalFieldType(dart.nullable(image_provider.ImageProvider$(core.Object))),
    foregroundImage: dart.finalFieldType(dart.nullable(image_provider.ImageProvider$(core.Object))),
    onBackgroundImageError: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)]))),
    onForegroundImageError: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)]))),
    radius: dart.finalFieldType(dart.nullable(core.double)),
    minRadius: dart.finalFieldType(dart.nullable(core.double)),
    maxRadius: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(circle_avatar.CircleAvatar, () => ['_defaultRadius', '_defaultMinRadius', '_defaultMaxRadius']);
  dart.defineLazy(circle_avatar.CircleAvatar, {
    /*circle_avatar.CircleAvatar._defaultRadius*/get _defaultRadius() {
      return 20;
    },
    /*circle_avatar.CircleAvatar._defaultMinRadius*/get _defaultMinRadius() {
      return 0;
    },
    /*circle_avatar.CircleAvatar._defaultMaxRadius*/get _defaultMaxRadius() {
      return 1 / 0;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/circle_avatar.dart", {
    "package:flutter/src/material/circle_avatar.dart": circle_avatar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["circle_avatar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFgB;;;;;;IAQD;;;;;;IASA;;;;;;IAQQ;;;;;;IAKA;;;;;;IAIK;;;;;;IAIA;;;;;;IAcZ;;;;;;IAgBA;;;;;;IAgBA;;;;;;;;;;;;;;;;;;;;;;AAYZ,UAAI,AAAO,uBAAW,AAAU,0BAAW,AAAU;AACnD,cAAsB,MAAE;;AAE1B,YAAO,AAAI,qBAAuB,OAAb,kBAAP,aAAU,sBAAH;IACvB;;;AAGE,UAAI,AAAO,uBAAW,AAAU,0BAAW,AAAU;AACnD,cAAsB,MAAE;;AAE1B,YAAO,AAAI,qBAAuB,OAAb,kBAAP,aAAU,sBAAH;IACvB;UAG0B;AACxB,WAAO,8BAAwB,OAAO;AACtB,kBAAc,gBAAG,OAAO;AAC9B,sBAA4C,AAAE,eAAlC,AAAM,AAAiB,KAAlB,8CAA6C;AACjE,qCAA2B;AAClC,UAAI,AAAyB,wBAAD;AAC1B,gBAAkB,gDAA0C,eAAf,AAAU,SAAD;;;AAEA,cAAlD,2BAA2B,AAAM,KAAD;AAChC;;;;AAEiD,cAAjD,2BAA2B,AAAM,KAAD;AAChC;;;YAEC,KAAI,AAAgB;AACzB,gBAAkB,gDAA0C,eAAf;;;AAEqB,cAA9D,YAAY,AAAU,SAAD,kBAAiB,AAAM,KAAD;AAC3C;;;;AAE6D,cAA7D,YAAY,AAAU,SAAD,kBAAiB,AAAM,KAAD;AAC3C;;;;AAGO,wBAAc;AACd,wBAAc;AAC3B,YAAO,6DACQ,uCACA,WAAW,YACZ,WAAW,YACX,WAAW,aACV,WAAW,cAEd,4CACE,6CACH,wBAAwB,SACxB,AAAgB,+BACnB,iDACwB,eAAf,gCACE,kCACG,yBAEd,aACY,oDAEI,AAAgB,+BAChC,6CACS,iDACiB,eAAf,gCACE,kCACG,+BAEE,+BAElB,aACC,AAAM,qBACP,OACA,6BACS,sCAGY,AAAY,0BAAT,OAAO,6BAA4B,cAChD,oCACC,AAAM,AAAU,KAAX,4BAA2B,AAAU,SAAD,iBACxC,sCACE,SAAS,SACJ,eAAL;IAMzB;;;QAzMQ;QACD;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IATA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACK,AAAO,AAAQ,MAAT,YAAa,AAAU,SAAD,YAAY,AAAU,SAAD;UACjD,AAAwB,eAAT,YAAY,AAAuB,sBAAD;UACjD,AAAwB,eAAT,YAAY,AAAsB,sBAAA;AAdvD,8DACE,GAAG;;EAa0D;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA6FjD,yCAAc;;;MAGd,4CAAiB;;;MAGjB,4CAAiB","file":"../../../../../../../../../../packages/flutter/src/material/circle_avatar.dart.lib.js"}');
  // Exports:
  return {
    src__material__circle_avatar: circle_avatar
  };
}));

//# sourceMappingURL=circle_avatar.dart.lib.js.map
