define(['dart_sdk', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/rendering/sliver_multi_box_adaptor.dart'], (function load__packages__flutter__src__rendering__sliver_list_dart(dart_sdk, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const sliver_multi_box_adaptor = packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart.src__rendering__sliver_multi_box_adaptor;
  var sliver_list = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/sliver_list.dart",
    "package:flutter/src/rendering/sliver_list.dart"
  ];
  sliver_list.RenderSliverList = class RenderSliverList extends sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor {
    static ['_#new#tearOff'](opts) {
      let childManager = opts && 'childManager' in opts ? opts.childManager : null;
      return new sliver_list.RenderSliverList.new({childManager: childManager});
    }
    performLayout() {
      let constraints = this.constraints;
      this.childManager.didStartLayout();
      this.childManager.setDidUnderflow(false);
      let scrollOffset = constraints.scrollOffset + constraints.cacheOrigin;
      if (!(scrollOffset >= 0.0)) dart.assertFailed(null, I[0], 52, 12, "scrollOffset >= 0.0");
      let remainingExtent = constraints.remainingCacheExtent;
      if (!(remainingExtent >= 0.0)) dart.assertFailed(null, I[0], 54, 12, "remainingExtent >= 0.0");
      let targetEndScrollOffset = scrollOffset + remainingExtent;
      let childConstraints = constraints.asBoxConstraints();
      let leadingGarbage = 0;
      let trailingGarbage = 0;
      let reachedEnd = false;
      if (this.firstChild == null) {
        if (!this.addInitialChild()) {
          this.geometry = sliver.SliverGeometry.zero;
          this.childManager.didFinishLayout();
          return;
        }
      }
      let leadingChildWithLayout = null;
      let trailingChildWithLayout = null;
      let earliestUsefulChild = this.firstChild;
      if (this.childScrollOffset(dart.nullCheck(this.firstChild)) == null) {
        let leadingChildrenWithoutLayoutOffset = 0;
        while (earliestUsefulChild != null && this.childScrollOffset(earliestUsefulChild) == null) {
          earliestUsefulChild = this.childAfter(earliestUsefulChild);
          leadingChildrenWithoutLayoutOffset = leadingChildrenWithoutLayoutOffset + 1;
        }
        this.collectGarbage(leadingChildrenWithoutLayoutOffset, 0);
        if (this.firstChild == null) {
          if (!this.addInitialChild()) {
            this.geometry = sliver.SliverGeometry.zero;
            this.childManager.didFinishLayout();
            return;
          }
        }
      }
      earliestUsefulChild = this.firstChild;
      for (let earliestScrollOffset = dart.nullCheck(this.childScrollOffset(dart.nullCheck(earliestUsefulChild))); earliestScrollOffset > scrollOffset; earliestScrollOffset = dart.nullCheck(this.childScrollOffset(earliestUsefulChild))) {
        earliestUsefulChild = this.insertAndLayoutLeadingChild(childConstraints, {parentUsesSize: true});
        if (earliestUsefulChild == null) {
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
          childParentData.layoutOffset = 0.0;
          if (scrollOffset === 0.0) {
            dart.nullCheck(this.firstChild).layout(childConstraints, {parentUsesSize: true});
            earliestUsefulChild = this.firstChild;
            leadingChildWithLayout = earliestUsefulChild;
            trailingChildWithLayout == null ? trailingChildWithLayout = earliestUsefulChild : null;
            break;
          } else {
            this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: -scrollOffset});
            return;
          }
        }
        let firstChildScrollOffset = earliestScrollOffset - this.paintExtentOf(dart.nullCheck(this.firstChild));
        if (firstChildScrollOffset < -1e-10) {
          this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: -firstChildScrollOffset});
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
          childParentData.layoutOffset = 0.0;
          return;
        }
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(earliestUsefulChild.parentData));
        childParentData.layoutOffset = firstChildScrollOffset;
        if (!dart.equals(earliestUsefulChild, this.firstChild)) dart.assertFailed(null, I[0], 168, 14, "earliestUsefulChild == firstChild");
        leadingChildWithLayout = earliestUsefulChild;
        trailingChildWithLayout == null ? trailingChildWithLayout = earliestUsefulChild : null;
      }
      if (!(dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))) > -1e-10)) dart.assertFailed(null, I[0], 173, 12, "childScrollOffset(firstChild!)! > -precisionErrorTolerance");
      if (scrollOffset < 1e-10) {
        while (this.indexOf(dart.nullCheck(this.firstChild)) > 0) {
          let earliestScrollOffset = dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild)));
          earliestUsefulChild = this.insertAndLayoutLeadingChild(childConstraints, {parentUsesSize: true});
          if (!(earliestUsefulChild != null)) dart.assertFailed(null, I[0], 186, 16, "earliestUsefulChild != null");
          let firstChildScrollOffset = earliestScrollOffset - this.paintExtentOf(dart.nullCheck(this.firstChild));
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
          childParentData.layoutOffset = 0.0;
          if (firstChildScrollOffset < -1e-10) {
            this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: -firstChildScrollOffset});
            return;
          }
        }
      }
      if (!dart.equals(earliestUsefulChild, this.firstChild)) dart.assertFailed(null, I[0], 208, 12, "earliestUsefulChild == firstChild");
      if (!(dart.nullCheck(this.childScrollOffset(dart.nullCheck(earliestUsefulChild))) <= scrollOffset)) dart.assertFailed(null, I[0], 209, 12, "childScrollOffset(earliestUsefulChild!)! <= scrollOffset");
      if (leadingChildWithLayout == null) {
        dart.nullCheck(earliestUsefulChild).layout(childConstraints, {parentUsesSize: true});
        leadingChildWithLayout = earliestUsefulChild;
        trailingChildWithLayout = earliestUsefulChild;
      }
      let inLayoutRange = true;
      let child = earliestUsefulChild;
      let index = this.indexOf(dart.nullCheck(child));
      let endScrollOffset = dart.nullCheck(this.childScrollOffset(child)) + this.paintExtentOf(child);
      const advance = () => {
        if (!(child != null)) dart.assertFailed(null, I[0], 229, 14, "child != null");
        if (dart.equals(child, trailingChildWithLayout)) {
          inLayoutRange = false;
        }
        child = this.childAfter(dart.nullCheck(child));
        if (child == null) {
          inLayoutRange = false;
        }
        index = index + 1;
        if (!inLayoutRange) {
          if (child == null || this.indexOf(dart.nullCheck(child)) !== index) {
            child = this.insertAndLayoutChild(childConstraints, {after: trailingChildWithLayout, parentUsesSize: true});
            if (child == null) {
              return false;
            }
          } else {
            dart.nullCheck(child).layout(childConstraints, {parentUsesSize: true});
          }
          trailingChildWithLayout = child;
        }
        if (!(child != null)) dart.assertFailed(null, I[0], 255, 14, "child != null");
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(child).parentData));
        childParentData.layoutOffset = endScrollOffset;
        if (!(childParentData.index === index)) dart.assertFailed(null, I[0], 258, 14, "childParentData.index == index");
        endScrollOffset = dart.nullCheck(this.childScrollOffset(dart.nullCheck(child))) + this.paintExtentOf(dart.nullCheck(child));
        return true;
      };
      dart.fn(advance, T.VoidTobool());
      while (endScrollOffset < scrollOffset) {
        leadingGarbage = leadingGarbage + 1;
        if (!advance()) {
          if (!(leadingGarbage === this.childCount)) dart.assertFailed(null, I[0], 267, 16, "leadingGarbage == childCount");
          if (!(child == null)) dart.assertFailed(null, I[0], 268, 16, "child == null");
          this.collectGarbage(leadingGarbage - 1, 0);
          if (!dart.equals(this.firstChild, this.lastChild)) dart.assertFailed(null, I[0], 271, 16, "firstChild == lastChild");
          let extent = dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.lastChild))) + this.paintExtentOf(dart.nullCheck(this.lastChild));
          this.geometry = new sliver.SliverGeometry.new({scrollExtent: extent, maxPaintExtent: extent});
          return;
        }
      }
      while (endScrollOffset < targetEndScrollOffset) {
        if (!advance()) {
          reachedEnd = true;
          break;
        }
      }
      if (child != null) {
        child = this.childAfter(dart.nullCheck(child));
        while (child != null) {
          trailingGarbage = trailingGarbage + 1;
          child = this.childAfter(dart.nullCheck(child));
        }
      }
      this.collectGarbage(leadingGarbage, trailingGarbage);
      if (!this.debugAssertChildListIsNonEmptyAndContiguous()) dart.assertFailed(null, I[0], 303, 12, "debugAssertChildListIsNonEmptyAndContiguous()");
      let estimatedMaxScrollOffset = null;
      if (reachedEnd) {
        estimatedMaxScrollOffset = endScrollOffset;
      } else {
        estimatedMaxScrollOffset = this.childManager.estimateMaxScrollOffset(constraints, {firstIndex: this.indexOf(dart.nullCheck(this.firstChild)), lastIndex: this.indexOf(dart.nullCheck(this.lastChild)), leadingScrollOffset: this.childScrollOffset(dart.nullCheck(this.firstChild)), trailingScrollOffset: endScrollOffset});
        if (!(estimatedMaxScrollOffset >= endScrollOffset - dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))))) dart.assertFailed(null, I[0], 315, 14, "estimatedMaxScrollOffset >= endScrollOffset - childScrollOffset(firstChild!)!");
      }
      let paintExtent = this.calculatePaintOffset(constraints, {from: dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))), to: endScrollOffset});
      let cacheExtent = this.calculateCacheOffset(constraints, {from: dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))), to: endScrollOffset});
      let targetEndScrollOffsetForPaint = constraints.scrollOffset + constraints.remainingPaintExtent;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: estimatedMaxScrollOffset, paintExtent: paintExtent, cacheExtent: cacheExtent, maxPaintExtent: estimatedMaxScrollOffset, hasVisualOverflow: endScrollOffset > targetEndScrollOffsetForPaint || constraints.scrollOffset > 0.0});
      if (estimatedMaxScrollOffset === endScrollOffset) {
        this.childManager.setDidUnderflow(true);
      }
      this.childManager.didFinishLayout();
    }
  };
  (sliver_list.RenderSliverList.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    sliver_list.RenderSliverList.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_list.RenderSliverList.prototype;
  dart.addTypeTests(sliver_list.RenderSliverList);
  dart.addTypeCaches(sliver_list.RenderSliverList);
  dart.setMethodSignature(sliver_list.RenderSliverList, () => ({
    __proto__: dart.getMethods(sliver_list.RenderSliverList.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_list.RenderSliverList, I[1]);
  dart.trackLibraries("packages/flutter/src/rendering/sliver_list.dart", {
    "package:flutter/src/rendering/sliver_list.dart": sliver_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_list.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_list.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_list: sliver_list
  };
}));

//# sourceMappingURL=sliver_list.dart.lib.js.map
