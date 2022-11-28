define(['dart_sdk', 'packages/flutter/src/rendering/shifted_box.dart'], (function load__packages__flutter__src__widgets__text_selection_toolbar_layout_delegate_dart(dart_sdk, packages__flutter__src__rendering__shifted_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shifted_box = packages__flutter__src__rendering__shifted_box$46dart.src__rendering__shifted_box;
  var text_selection_toolbar_layout_delegate = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart"];
  var anchorAbove$ = dart.privateName(text_selection_toolbar_layout_delegate, "TextSelectionToolbarLayoutDelegate.anchorAbove");
  var anchorBelow$ = dart.privateName(text_selection_toolbar_layout_delegate, "TextSelectionToolbarLayoutDelegate.anchorBelow");
  var fitsAbove$ = dart.privateName(text_selection_toolbar_layout_delegate, "TextSelectionToolbarLayoutDelegate.fitsAbove");
  text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate = class TextSelectionToolbarLayoutDelegate extends shifted_box.SingleChildLayoutDelegate {
    get anchorAbove() {
      return this[anchorAbove$];
    }
    set anchorAbove(value) {
      super.anchorAbove = value;
    }
    get anchorBelow() {
      return this[anchorBelow$];
    }
    set anchorBelow(value) {
      super.anchorBelow = value;
    }
    get fitsAbove() {
      return this[fitsAbove$];
    }
    set fitsAbove(value) {
      super.fitsAbove = value;
    }
    static ['_#new#tearOff'](opts) {
      let anchorAbove = opts && 'anchorAbove' in opts ? opts.anchorAbove : null;
      let anchorBelow = opts && 'anchorBelow' in opts ? opts.anchorBelow : null;
      let fitsAbove = opts && 'fitsAbove' in opts ? opts.fitsAbove : null;
      return new text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.new({anchorAbove: anchorAbove, anchorBelow: anchorBelow, fitsAbove: fitsAbove});
    }
    static _centerOn(position, width, max) {
      if (position - width / 2.0 < 0.0) {
        return 0.0;
      }
      if (position + width / 2.0 > max) {
        return max - width;
      }
      return position - width / 2.0;
    }
    getConstraintsForChild(constraints) {
      return constraints.loosen();
    }
    getPositionForChild(size, childSize) {
      let t0;
      let fitsAbove = (t0 = this.fitsAbove, t0 == null ? this.anchorAbove.dy >= childSize.height : t0);
      let anchor = fitsAbove ? this.anchorAbove : this.anchorBelow;
      return new ui.Offset.new(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate._centerOn(anchor.dx, childSize.width, size.width), fitsAbove ? math.max(core.double, 0.0, anchor.dy - childSize.height) : anchor.dy);
    }
    shouldRelayout(oldDelegate) {
      text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.as(oldDelegate);
      return !this.anchorAbove._equals(oldDelegate.anchorAbove) || !this.anchorBelow._equals(oldDelegate.anchorBelow) || this.fitsAbove != oldDelegate.fitsAbove;
    }
  };
  (text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.new = function(opts) {
    let anchorAbove = opts && 'anchorAbove' in opts ? opts.anchorAbove : null;
    let anchorBelow = opts && 'anchorBelow' in opts ? opts.anchorBelow : null;
    let fitsAbove = opts && 'fitsAbove' in opts ? opts.fitsAbove : null;
    this[anchorAbove$] = anchorAbove;
    this[anchorBelow$] = anchorBelow;
    this[fitsAbove$] = fitsAbove;
    text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.__proto__.new.call(this);
    ;
  }).prototype = text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.prototype;
  dart.addTypeTests(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate);
  dart.addTypeCaches(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate);
  dart.setMethodSignature(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate, () => ({
    __proto__: dart.getMethods(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.__proto__),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setStaticMethodSignature(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate, () => ['_centerOn']);
  dart.setLibraryUri(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate, I[0]);
  dart.setFieldSignature(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate, () => ({
    __proto__: dart.getFields(text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.__proto__),
    anchorAbove: dart.finalFieldType(ui.Offset),
    anchorBelow: dart.finalFieldType(ui.Offset),
    fitsAbove: dart.finalFieldType(dart.nullable(core.bool))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/text_selection_toolbar_layout_delegate.dart", {
    "package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart": text_selection_toolbar_layout_delegate
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection_toolbar_layout_delegate.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IA2Be;;;;;;IAKA;;;;;;IASD;;;;;;;;;;;;qBAImB,UAAiB,OAAc;AAE5D,UAAI,AAAS,AAAc,QAAf,GAAG,AAAM,KAAD,GAAG,MAAM;AAC3B,cAAO;;AAIT,UAAI,AAAS,AAAc,QAAf,GAAG,AAAM,KAAD,GAAG,MAAM,GAAG;AAC9B,cAAO,AAAI,IAAD,GAAG,KAAK;;AAIpB,YAAO,AAAS,SAAD,GAAG,AAAM,KAAD,GAAG;IAC5B;2BAGqD;AACnD,YAAO,AAAY,YAAD;IACpB;wBAGgC,MAAW;;AAC9B,uBAA2B,qBAAV,aAAa,AAAY,AAAG,uBAAG,AAAU,SAAD;AACvD,mBAAS,SAAS,GAAG,mBAAc,gBAAjB;AAE/B,YAAO,mBACL,oFACE,AAAO,MAAD,KACN,AAAU,SAAD,QACT,AAAK,IAAD,SAEN,SAAS,GACA,sBAAI,KAAK,AAAO,AAAG,MAAJ,MAAM,AAAU,SAAD,WACnC,AAAO,MAAD,GAFD;IAIb;mBAGuD;;AACrD,YAEI,EAFG,yBAAe,AAAY,WAAD,kBAC1B,yBAAe,AAAY,WAAD,iBAC1B,kBAAa,AAAY,WAAD;IACjC;;;QApEgB;QACA;QACT;IAFS;IACA;IACT;AAHP;;EAIE","file":"../../../../../../../../../../packages/flutter/src/widgets/text_selection_toolbar_layout_delegate.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__text_selection_toolbar_layout_delegate: text_selection_toolbar_layout_delegate
  };
}));

//# sourceMappingURL=text_selection_toolbar_layout_delegate.dart.lib.js.map
