define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/vector_math/vector_math.dart', 'packages/flutter/src/animation/curves.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__cool_alert__src__utils__animate_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__vector_math__vector_math$46dart, packages__flutter__src__animation__curves$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const vector_math = packages__vector_math__vector_math$46dart.vector_math;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  var animate = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Opacity",
        [_Location_column]: 14,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 22,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Opacity",
        [_Location_column]: 14,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 22,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Opacity",
        [_Location_column]: 14,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 12,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Opacity",
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Opacity",
        [_Location_column]: 14,
        [_Location_line]: 66,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 12,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Opacity",
        [_Location_column]: 14,
        [_Location_line]: 80,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 12,
        [_Location_line]: 78,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/cool_alert-1.1.0/lib/src/utils/animate.dart"
      });
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = ["package:cool_alert/src/utils/animate.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  animate.Animate = class Animate extends core.Object {
    static scale(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      return new basic.Transform.scale({scale: animation.value, child: new basic.Opacity.new({opacity: animation.value, child: child, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0}), $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static rotate(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      return new basic.Transform.rotate({angle: vector_math.radians(animation.value * 360), child: new basic.Opacity.new({opacity: animation.value, child: child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    static slideInDown(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let curvedValue = curves.Curves.easeInOutBack.transform(animation.value) - 1.0;
      return new basic.Transform.new({transform: vector_math_64.Matrix4.translationValues(0.0, curvedValue * 200, 0.0), child: new basic.Opacity.new({opacity: animation.value, child: child, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    static slideInUp(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let curvedValue = curves.Curves.easeInOutBack.transform(animation.value) - 1.0;
      return new basic.Transform.new({transform: vector_math_64.Matrix4.translationValues(0.0, curvedValue * -200, 0.0), child: new basic.Opacity.new({opacity: animation.value, child: child, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    static slideInLeft(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let curvedValue = curves.Curves.easeInOutBack.transform(animation.value) - 1.0;
      return new basic.Transform.new({transform: vector_math_64.Matrix4.translationValues(curvedValue * 200, 0.0, 0.0), child: new basic.Opacity.new({opacity: animation.value, child: child, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    static slideInRight(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let curvedValue = curves.Curves.easeInOutBack.transform(core.double.as(animation.value)) - 1.0;
      return new basic.Transform.new({transform: vector_math_64.Matrix4.translationValues(curvedValue * -200, 0.0, 0.0), child: new basic.Opacity.new({opacity: core.double.as(animation.value), child: child, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    static ['_#new#tearOff']() {
      return new animate.Animate.new();
    }
  };
  (animate.Animate.new = function() {
    ;
  }).prototype = animate.Animate.prototype;
  dart.addTypeTests(animate.Animate);
  dart.addTypeCaches(animate.Animate);
  dart.setStaticMethodSignature(animate.Animate, () => ['scale', 'rotate', 'slideInDown', 'slideInUp', 'slideInLeft', 'slideInRight']);
  dart.setLibraryUri(animate.Animate, I[0]);
  dart.trackLibraries("packages/cool_alert/src/utils/animate.dart", {
    "package:cool_alert/src/utils/animate.dart": animate
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animate.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAKoB;UACW;AAE3B,YAAiB,mCACR,AAAU,SAAD,eACT,gCACI,AAAU,SAAD,eACX,KAAK;IAGlB;;UAGkB;UACW;AAE3B,YAAiB,oCACH,oBAAQ,AAAU,AAAM,SAAP,SAAS,aAC/B,gCACI,AAAU,SAAD,eACX,KAAK;IAGlB;;UAGkB;UACW;AAErB,wBAAqB,AAAc,AAA2B,sCAAjB,AAAU,SAAD,UAAU;AACtE,YAAO,qCACc,yCAAkB,KAAK,AAAY,WAAD,GAAG,KAAK,aACtD,gCACI,AAAU,SAAD,eACX,KAAK;IAGlB;;UAGkB;UACW;AAErB,wBAAqB,AAAc,AAA2B,sCAAjB,AAAU,SAAD,UAAU;AACtE,YAAO,qCACc,yCAAkB,KAAK,AAAY,WAAD,GAAG,CAAC,KAAK,aACvD,gCACI,AAAU,SAAD,eACX,KAAK;IAGlB;;UAGkB;UACW;AAErB,wBAAqB,AAAc,AAA2B,sCAAjB,AAAU,SAAD,UAAU;AACtE,YAAO,qCACc,yCAAkB,AAAY,WAAD,GAAG,KAAK,KAAK,aACtD,gCACI,AAAU,SAAD,eACX,KAAK;IAGlB;;UAGkB;UACG;AAEb,wBAAqB,AAAc,AAA2B,qDAAjB,AAAU,SAAD,WAAU;AACtE,YAAO,qCACc,yCAAkB,AAAY,WAAD,GAAG,CAAC,KAAK,KAAG,aACrD,+CACI,AAAU,SAAD,gBACX,KAAK;IAGlB;;;;;;;EACF","file":"../../../../../../../../../../../../packages/cool_alert/src/utils/animate.dart.lib.js"}');
  // Exports:
  return {
    src__utils__animate: animate
  };
}));

//# sourceMappingURL=animate.dart.lib.js.map
