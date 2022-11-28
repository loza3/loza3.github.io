define(['dart_sdk', 'packages/flutter/src/rendering/shifted_box.dart'], (function load__packages__flutter__src__widgets__desktop_text_selection_toolbar_layout_delegate_dart(dart_sdk, packages__flutter__src__rendering__shifted_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shifted_box = packages__flutter__src__rendering__shifted_box$46dart.src__rendering__shifted_box;
  var desktop_text_selection_toolbar_layout_delegate = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart"];
  var anchor$ = dart.privateName(desktop_text_selection_toolbar_layout_delegate, "DesktopTextSelectionToolbarLayoutDelegate.anchor");
  desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate = class DesktopTextSelectionToolbarLayoutDelegate extends shifted_box.SingleChildLayoutDelegate {
    get anchor() {
      return this[anchor$];
    }
    set anchor(value) {
      super.anchor = value;
    }
    static ['_#new#tearOff'](opts) {
      let anchor = opts && 'anchor' in opts ? opts.anchor : null;
      return new desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.new({anchor: anchor});
    }
    getConstraintsForChild(constraints) {
      return constraints.loosen();
    }
    getPositionForChild(size, childSize) {
      let overhang = new ui.Offset.new(this.anchor.dx + childSize.width - size.width, this.anchor.dy + childSize.height - size.height);
      return new ui.Offset.new(overhang.dx > 0.0 ? this.anchor.dx - overhang.dx : this.anchor.dx, overhang.dy > 0.0 ? this.anchor.dy - overhang.dy : this.anchor.dy);
    }
    shouldRelayout(oldDelegate) {
      desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.as(oldDelegate);
      return !this.anchor._equals(oldDelegate.anchor);
    }
  };
  (desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.new = function(opts) {
    let anchor = opts && 'anchor' in opts ? opts.anchor : null;
    this[anchor$] = anchor;
    desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.__proto__.new.call(this);
    ;
  }).prototype = desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.prototype;
  dart.addTypeTests(desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate);
  dart.addTypeCaches(desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate);
  dart.setMethodSignature(desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate, () => ({
    __proto__: dart.getMethods(desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.__proto__),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate, I[0]);
  dart.setFieldSignature(desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate, () => ({
    __proto__: dart.getFields(desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.__proto__),
    anchor: dart.finalFieldType(ui.Offset)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart", {
    "package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart": desktop_text_selection_toolbar_layout_delegate
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["desktop_text_selection_toolbar_layout_delegate.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IA2Be;;;;;;;;;;2BAGwC;AACnD,YAAO,AAAY,YAAD;IACpB;wBAGgC,MAAW;AAC5B,qBAAW,kBACtB,AAAO,AAAG,AAAkB,iBAAhB,AAAU,SAAD,SAAS,AAAK,IAAD,QAClC,AAAO,AAAG,AAAmB,iBAAjB,AAAU,SAAD,UAAU,AAAK,IAAD;AAErC,YAAO,mBACL,AAAS,AAAG,QAAJ,MAAM,MAAM,AAAO,AAAG,iBAAE,AAAS,QAAD,MAAM,AAAO,gBACrD,AAAS,AAAG,QAAJ,MAAM,MAAM,AAAO,AAAG,iBAAE,AAAS,QAAD,MAAM,AAAO;IAEzD;mBAG8D;;AAC5D,YAAc,EAAP,oBAAU,AAAY,WAAD;IAC9B;;;QA5BgB;;AADhB;;EAEE","file":"../../../../../../../../../../packages/flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__desktop_text_selection_toolbar_layout_delegate: desktop_text_selection_toolbar_layout_delegate
  };
}));

//# sourceMappingURL=desktop_text_selection_toolbar_layout_delegate.dart.lib.js.map
