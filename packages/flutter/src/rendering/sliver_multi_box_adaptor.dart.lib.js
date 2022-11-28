define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__rendering__sliver_multi_box_adaptor_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var sliver_multi_box_adaptor = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $containsValue = dartx.containsValue;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $containsKey = dartx.containsKey;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $values = dartx.values;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $isNotEmpty = dartx.isNotEmpty;
  var $keys = dartx.keys;
  var $sort = dartx.sort;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfint$RenderBox: () => (T.IdentityMapOfint$RenderBox = dart.constFn(_js_helper.IdentityMap$(core.int, box.RenderBox)))(),
    JSArrayOfRenderBox: () => (T.JSArrayOfRenderBox = dart.constFn(_interceptors.JSArray$(box.RenderBox)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    RenderBoxN: () => (T.RenderBoxN = dart.constFn(dart.nullable(box.RenderBox)))(),
    SliverConstraintsTovoid: () => (T.SliverConstraintsTovoid = dart.constFn(dart.fnType(dart.void, [sliver.SliverConstraints])))(),
    RenderBoxTobool: () => (T.RenderBoxTobool = dart.constFn(dart.fnType(core.bool, [box.RenderBox])))(),
    SliverMultiBoxAdaptorParentDataN: () => (T.SliverMultiBoxAdaptorParentDataN = dart.constFn(dart.nullable(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: -1,
        [OffsetBase__dx]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: -1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "package:flutter/src/rendering/sliver_multi_box_adaptor.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/sliver_multi_box_adaptor.dart"
  ];
  sliver_multi_box_adaptor.RenderSliverBoxChildManager = class RenderSliverBoxChildManager extends core.Object {
    didStartLayout() {
    }
    didFinishLayout() {
    }
    debugAssertChildListLocked() {
      return true;
    }
  };
  (sliver_multi_box_adaptor.RenderSliverBoxChildManager.new = function() {
    ;
  }).prototype = sliver_multi_box_adaptor.RenderSliverBoxChildManager.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.RenderSliverBoxChildManager);
  dart.addTypeCaches(sliver_multi_box_adaptor.RenderSliverBoxChildManager);
  dart.setMethodSignature(sliver_multi_box_adaptor.RenderSliverBoxChildManager, () => ({
    __proto__: dart.getMethods(sliver_multi_box_adaptor.RenderSliverBoxChildManager.__proto__),
    didStartLayout: dart.fnType(dart.void, []),
    didFinishLayout: dart.fnType(dart.void, []),
    debugAssertChildListLocked: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(sliver_multi_box_adaptor.RenderSliverBoxChildManager, I[0]);
  var keepAlive = dart.privateName(sliver_multi_box_adaptor, "KeepAliveParentDataMixin.keepAlive");
  sliver_multi_box_adaptor.KeepAliveParentDataMixin = class KeepAliveParentDataMixin extends core.Object {};
  sliver_multi_box_adaptor.KeepAliveParentDataMixin[dart.mixinOn] = Object => class KeepAliveParentDataMixin extends Object {
    get keepAlive() {
      return this[keepAlive];
    }
    set keepAlive(value) {
      this[keepAlive] = value;
    }
  };
  (sliver_multi_box_adaptor.KeepAliveParentDataMixin[dart.mixinNew] = function() {
    this[keepAlive] = false;
  }).prototype = sliver_multi_box_adaptor.KeepAliveParentDataMixin.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.KeepAliveParentDataMixin);
  dart.addTypeCaches(sliver_multi_box_adaptor.KeepAliveParentDataMixin);
  sliver_multi_box_adaptor.KeepAliveParentDataMixin[dart.implements] = () => [object.ParentData, core.Object];
  dart.setLibraryUri(sliver_multi_box_adaptor.KeepAliveParentDataMixin, I[0]);
  dart.setFieldSignature(sliver_multi_box_adaptor.KeepAliveParentDataMixin, () => ({
    __proto__: dart.getFields(sliver_multi_box_adaptor.KeepAliveParentDataMixin.__proto__),
    keepAlive: dart.fieldType(core.bool)
  }));
  sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin = class RenderSliverWithKeepAliveMixin extends core.Object {};
  sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin[dart.mixinOn] = Object => class RenderSliverWithKeepAliveMixin extends Object {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!sliver_multi_box_adaptor.KeepAliveParentDataMixin.is(child.parentData)) dart.assertFailed(null, I[1], 140, 12, "child.parentData is KeepAliveParentDataMixin");
    }
  };
  (sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin[dart.mixinNew] = function() {
  }).prototype = sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin);
  dart.addTypeCaches(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin);
  sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin[dart.implements] = () => [sliver.RenderSliver, core.Object];
  dart.setMethodSignature(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin, () => ({
    __proto__: dart.getMethods(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin.__proto__),
    setupParentData: dart.fnType(dart.void, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin, I[0]);
  var index = dart.privateName(sliver_multi_box_adaptor, "SliverMultiBoxAdaptorParentData.index");
  var _keptAlive = dart.privateName(sliver_multi_box_adaptor, "_keptAlive");
  const SliverLogicalParentData_ContainerParentDataMixin$36 = class SliverLogicalParentData_ContainerParentDataMixin extends sliver.SliverLogicalParentData {};
  (SliverLogicalParentData_ContainerParentDataMixin$36.new = function() {
    object.ContainerParentDataMixin$(box.RenderBox)[dart.mixinNew].call(this);
    SliverLogicalParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
  }).prototype = SliverLogicalParentData_ContainerParentDataMixin$36.prototype;
  dart.applyMixin(SliverLogicalParentData_ContainerParentDataMixin$36, object.ContainerParentDataMixin$(box.RenderBox));
  const SliverLogicalParentData_KeepAliveParentDataMixin$36 = class SliverLogicalParentData_KeepAliveParentDataMixin extends SliverLogicalParentData_ContainerParentDataMixin$36 {};
  (SliverLogicalParentData_KeepAliveParentDataMixin$36.new = function() {
    sliver_multi_box_adaptor.KeepAliveParentDataMixin[dart.mixinNew].call(this);
    SliverLogicalParentData_KeepAliveParentDataMixin$36.__proto__.new.call(this);
  }).prototype = SliverLogicalParentData_KeepAliveParentDataMixin$36.prototype;
  dart.applyMixin(SliverLogicalParentData_KeepAliveParentDataMixin$36, sliver_multi_box_adaptor.KeepAliveParentDataMixin);
  sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData = class SliverMultiBoxAdaptorParentData extends SliverLogicalParentData_KeepAliveParentDataMixin$36 {
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get keptAlive() {
      return this[_keptAlive];
    }
    toString() {
      return "index=" + dart.str(this.index) + "; " + (this.keepAlive === true ? "keepAlive; " : "") + super.toString();
    }
    static ['_#new#tearOff']() {
      return new sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.new();
    }
  };
  (sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.new = function() {
    this[index] = null;
    this[_keptAlive] = false;
    sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData);
  dart.addTypeCaches(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData);
  dart.setGetterSignature(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData, () => ({
    __proto__: dart.getGetters(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.__proto__),
    keptAlive: core.bool
  }));
  dart.setLibraryUri(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData, I[0]);
  dart.setFieldSignature(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData, () => ({
    __proto__: dart.getFields(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.__proto__),
    index: dart.fieldType(dart.nullable(core.int)),
    [_keptAlive]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData, ['toString']);
  var _keepAliveBucket = dart.privateName(sliver_multi_box_adaptor, "_keepAliveBucket");
  var __RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives = dart.privateName(sliver_multi_box_adaptor, "_#RenderSliverMultiBoxAdaptor#_debugDanglingKeepAlives");
  var _debugChildIntegrityEnabled = dart.privateName(sliver_multi_box_adaptor, "_debugChildIntegrityEnabled");
  var _childManager = dart.privateName(sliver_multi_box_adaptor, "_childManager");
  var _debugDanglingKeepAlives = dart.privateName(sliver_multi_box_adaptor, "_debugDanglingKeepAlives");
  var _debugVerifyChildOrder = dart.privateName(sliver_multi_box_adaptor, "_debugVerifyChildOrder");
  var _debugAssertChildListLocked = dart.privateName(sliver_multi_box_adaptor, "_debugAssertChildListLocked");
  var _createOrObtainChild = dart.privateName(sliver_multi_box_adaptor, "_createOrObtainChild");
  var _destroyOrCacheChild = dart.privateName(sliver_multi_box_adaptor, "_destroyOrCacheChild");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  const RenderSliver_ContainerRenderObjectMixin$36 = class RenderSliver_ContainerRenderObjectMixin extends sliver.RenderSliver {};
  (RenderSliver_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData)[dart.mixinNew].call(this);
    RenderSliver_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderSliver_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData));
  const RenderSliver_RenderSliverHelpers$36 = class RenderSliver_RenderSliverHelpers extends RenderSliver_ContainerRenderObjectMixin$36 {};
  (RenderSliver_RenderSliverHelpers$36.new = function() {
    RenderSliver_RenderSliverHelpers$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverHelpers$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverHelpers$36, sliver.RenderSliverHelpers);
  const RenderSliver_RenderSliverWithKeepAliveMixin$36 = class RenderSliver_RenderSliverWithKeepAliveMixin extends RenderSliver_RenderSliverHelpers$36 {};
  (RenderSliver_RenderSliverWithKeepAliveMixin$36.new = function() {
    RenderSliver_RenderSliverWithKeepAliveMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverWithKeepAliveMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverWithKeepAliveMixin$36, sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin);
  sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor = class RenderSliverMultiBoxAdaptor extends RenderSliver_RenderSliverWithKeepAliveMixin$36 {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.is(child.parentData)) {
        child.parentData = new sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.new();
      }
    }
    get childManager() {
      return this[_childManager];
    }
    get [_debugDanglingKeepAlives]() {
      let t0;
      t0 = this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_debugDanglingKeepAlives")) : t0;
    }
    set [_debugDanglingKeepAlives](library$32package$58flutter$47src$47rendering$47sliver_multi_box_adaptor$46dart$58$58_debugDanglingKeepAlives$35param) {
      this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives] = library$32package$58flutter$47src$47rendering$47sliver_multi_box_adaptor$46dart$58$58_debugDanglingKeepAlives$35param;
    }
    get debugChildIntegrityEnabled() {
      return this[_debugChildIntegrityEnabled];
    }
    set debugChildIntegrityEnabled(enabled) {
      if (!(enabled !== null)) dart.assertFailed(null, I[1], 232, 12, "enabled != null");
      if (!dart.fn(() => {
        this[_debugChildIntegrityEnabled] = enabled;
        return this[_debugVerifyChildOrder]() && (!this[_debugChildIntegrityEnabled] || this[_debugDanglingKeepAlives][$isEmpty]);
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 233, 12, "() {\n      _debugChildIntegrityEnabled = enabled;\n      return _debugVerifyChildOrder() &&\n        (!_debugChildIntegrityEnabled || _debugDanglingKeepAlives.isEmpty);\n    }()");
    }
    adoptChild(child) {
      object.RenderObject.as(child);
      super.adoptChild(child);
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (!childParentData[_keptAlive]) {
        this.childManager.didAdoptChild(box.RenderBox.as(child));
      }
    }
    [_debugAssertChildListLocked]() {
      return this.childManager.debugAssertChildListLocked();
    }
    [_debugVerifyChildOrder]() {
      if (this[_debugChildIntegrityEnabled]) {
        let child = this.firstChild;
        let index = null;
        while (child != null) {
          index = this.indexOf(child);
          child = this.childAfter(child);
          if (!(child == null || this.indexOf(child) > index)) dart.assertFailed(null, I[1], 261, 16, "child == null || indexOf(child) > index");
        }
      }
      return true;
    }
    insert(child, opts) {
      box.RenderBox.as(child);
      let after = opts && 'after' in opts ? opts.after : null;
      T.RenderBoxN().as(after);
      if (!!this[_keepAliveBucket][$containsValue](child)) dart.assertFailed(null, I[1], 269, 12, "!_keepAliveBucket.containsValue(child)");
      super.insert(child, {after: after});
      if (!(this.firstChild != null)) dart.assertFailed(null, I[1], 271, 12, "firstChild != null");
      if (!this[_debugVerifyChildOrder]()) dart.assertFailed(null, I[1], 272, 12, "_debugVerifyChildOrder()");
    }
    move(child, opts) {
      box.RenderBox.as(child);
      let after = opts && 'after' in opts ? opts.after : null;
      T.RenderBoxN().as(after);
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (!childParentData.keptAlive) {
        super.move(child, {after: after});
        this.childManager.didAdoptChild(child);
        this.markNeedsLayout();
      } else {
        if (dart.equals(this[_keepAliveBucket][$_get](childParentData.index), child)) {
          this[_keepAliveBucket][$remove](childParentData.index);
        }
        if (!dart.fn(() => {
          this[_debugDanglingKeepAlives][$remove](child);
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 299, 14, "() {\n        _debugDanglingKeepAlives.remove(child);\n        return true;\n      }()");
        this.childManager.didAdoptChild(child);
        if (!dart.fn(() => {
          if (this[_keepAliveBucket][$containsKey](childParentData.index)) {
            this[_debugDanglingKeepAlives][$add](dart.nullCheck(this[_keepAliveBucket][$_get](childParentData.index)));
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 308, 14, "() {\n        if (_keepAliveBucket.containsKey(childParentData.index)) {\n          _debugDanglingKeepAlives.add(_keepAliveBucket[childParentData.index]!);\n        }\n        return true;\n      }()");
        this[_keepAliveBucket][$_set](dart.nullCheck(childParentData.index), child);
      }
    }
    remove(child) {
      box.RenderBox.as(child);
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (!childParentData[_keptAlive]) {
        super.remove(child);
        return;
      }
      if (!dart.equals(this[_keepAliveBucket][$_get](childParentData.index), child)) dart.assertFailed(null, I[1], 325, 12, "_keepAliveBucket[childParentData.index] == child");
      if (!dart.fn(() => {
        this[_debugDanglingKeepAlives][$remove](child);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 326, 12, "() {\n      _debugDanglingKeepAlives.remove(child);\n      return true;\n    }()");
      this[_keepAliveBucket][$remove](childParentData.index);
      this.dropChild(child);
    }
    removeAll() {
      super.removeAll();
      this[_keepAliveBucket][$values][$forEach](dart.bind(this, 'dropChild'));
      this[_keepAliveBucket][$clear]();
    }
    [_createOrObtainChild](index, opts) {
      let after = opts && 'after' in opts ? opts.after : null;
      this.invokeLayoutCallback(sliver.SliverConstraints, dart.fn(constraints => {
        if (!constraints._equals(this.constraints)) dart.assertFailed(null, I[1], 343, 14, "constraints == this.constraints");
        if (this[_keepAliveBucket][$containsKey](index)) {
          let child = dart.nullCheck(this[_keepAliveBucket][$remove](index));
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
          if (!childParentData[_keptAlive]) dart.assertFailed(null, I[1], 347, 16, "childParentData._keptAlive");
          this.dropChild(child);
          child.parentData = childParentData;
          this.insert(child, {after: after});
          childParentData[_keptAlive] = false;
        } else {
          this[_childManager].createChild(index, {after: after});
        }
      }, T.SliverConstraintsTovoid()));
    }
    [_destroyOrCacheChild](child) {
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (childParentData.keepAlive) {
        if (!!childParentData[_keptAlive]) dart.assertFailed(null, I[1], 361, 14, "!childParentData._keptAlive");
        this.remove(child);
        this[_keepAliveBucket][$_set](dart.nullCheck(childParentData.index), child);
        child.parentData = childParentData;
        super.adoptChild(child);
        childParentData[_keptAlive] = true;
      } else {
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[1], 368, 14, "child.parent == this");
        this[_childManager].removeChild(child);
        if (!(child.parent == null)) dart.assertFailed(null, I[1], 370, 14, "child.parent == null");
      }
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      super.attach(owner);
      for (let child of this[_keepAliveBucket][$values]) {
        child.attach(owner);
      }
    }
    detach() {
      super.detach();
      for (let child of this[_keepAliveBucket][$values]) {
        child.detach();
      }
    }
    redepthChildren() {
      super.redepthChildren();
      this[_keepAliveBucket][$values][$forEach](dart.bind(this, 'redepthChild'));
    }
    visitChildren(visitor) {
      super.visitChildren(visitor);
      this[_keepAliveBucket][$values][$forEach](visitor);
    }
    visitChildrenForSemantics(visitor) {
      super.visitChildren(visitor);
    }
    addInitialChild(opts) {
      let index = opts && 'index' in opts ? opts.index : 0;
      let layoutOffset = opts && 'layoutOffset' in opts ? opts.layoutOffset : 0;
      if (!this[_debugAssertChildListLocked]()) dart.assertFailed(null, I[1], 426, 12, "_debugAssertChildListLocked()");
      if (!(this.firstChild == null)) dart.assertFailed(null, I[1], 427, 12, "firstChild == null");
      this[_createOrObtainChild](index, {after: null});
      if (this.firstChild != null) {
        if (!dart.equals(this.firstChild, this.lastChild)) dart.assertFailed(null, I[1], 430, 14, "firstChild == lastChild");
        if (!(this.indexOf(dart.nullCheck(this.firstChild)) === index)) dart.assertFailed(null, I[1], 431, 14, "indexOf(firstChild!) == index");
        let firstChildParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
        firstChildParentData.layoutOffset = layoutOffset;
        return true;
      }
      this.childManager.setDidUnderflow(true);
      return false;
    }
    insertAndLayoutLeadingChild(childConstraints, opts) {
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (!this[_debugAssertChildListLocked]()) dart.assertFailed(null, I[1], 458, 12, "_debugAssertChildListLocked()");
      let index = this.indexOf(dart.nullCheck(this.firstChild)) - 1;
      this[_createOrObtainChild](index, {after: null});
      if (this.indexOf(dart.nullCheck(this.firstChild)) === index) {
        dart.nullCheck(this.firstChild).layout(childConstraints, {parentUsesSize: parentUsesSize});
        return this.firstChild;
      }
      this.childManager.setDidUnderflow(true);
      return null;
    }
    insertAndLayoutChild(childConstraints, opts) {
      let after = opts && 'after' in opts ? opts.after : null;
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (!this[_debugAssertChildListLocked]()) dart.assertFailed(null, I[1], 487, 12, "_debugAssertChildListLocked()");
      if (!(after != null)) dart.assertFailed(null, I[1], 488, 12, "after != null");
      let index = this.indexOf(dart.nullCheck(after)) + 1;
      this[_createOrObtainChild](index, {after: after});
      let child = this.childAfter(after);
      if (child != null && this.indexOf(child) === index) {
        child.layout(childConstraints, {parentUsesSize: parentUsesSize});
        return child;
      }
      this.childManager.setDidUnderflow(true);
      return null;
    }
    collectGarbage(leadingGarbage, trailingGarbage) {
      if (!this[_debugAssertChildListLocked]()) dart.assertFailed(null, I[1], 511, 12, "_debugAssertChildListLocked()");
      if (!(this.childCount >= leadingGarbage + trailingGarbage)) dart.assertFailed(null, I[1], 512, 12, "childCount >= leadingGarbage + trailingGarbage");
      this.invokeLayoutCallback(sliver.SliverConstraints, dart.fn(constraints => {
        while (leadingGarbage > 0) {
          this[_destroyOrCacheChild](dart.nullCheck(this.firstChild));
          leadingGarbage = leadingGarbage - 1;
        }
        while (trailingGarbage > 0) {
          this[_destroyOrCacheChild](dart.nullCheck(this.lastChild));
          trailingGarbage = trailingGarbage - 1;
        }
        this[_keepAliveBucket][$values][$where](dart.fn(child => {
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
          return !childParentData.keepAlive;
        }, T.RenderBoxTobool()))[$toList]()[$forEach](dart.bind(this[_childManager], 'removeChild'));
        if (!this[_keepAliveBucket][$values][$where](dart.fn(child => {
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
          return !childParentData.keepAlive;
        }, T.RenderBoxTobool()))[$isEmpty]) dart.assertFailed(null, I[1], 529, 14, "_keepAliveBucket.values.where((RenderBox child) {\n        final SliverMultiBoxAdaptorParentData childParentData = child.parentData! as SliverMultiBoxAdaptorParentData;\n        return !childParentData.keepAlive;\n      }).isEmpty");
      }, T.SliverConstraintsTovoid()));
    }
    indexOf(child) {
      if (!(child !== null)) dart.assertFailed(null, I[1], 539, 12, "child != null");
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (!(childParentData.index != null)) dart.assertFailed(null, I[1], 541, 12, "childParentData.index != null");
      return dart.nullCheck(childParentData.index);
    }
    paintExtentOf(child) {
      if (!(child !== null)) dart.assertFailed(null, I[1], 549, 12, "child != null");
      if (!child.hasSize) dart.assertFailed(null, I[1], 550, 12, "child.hasSize");
      switch (this.constraints.axis) {
        case C[0] || CT.C0:
          {
            return child.size.width;
          }
        case C[1] || CT.C1:
          {
            return child.size.height;
          }
      }
    }
    hitTestChildren(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      let child = this.lastChild;
      let boxResult = new box.BoxHitTestResult.wrap(result);
      while (child != null) {
        if (this.hitTestBoxChild(boxResult, child, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition})) {
          return true;
        }
        child = this.childBefore(child);
      }
      return false;
    }
    childMainAxisPosition(child) {
      box.RenderBox.as(child);
      return dart.nullCheck(this.childScrollOffset(child)) - this.constraints.scrollOffset;
    }
    childScrollOffset(child) {
      object.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[1], 579, 12, "child != null");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[1], 580, 12, "child.parent == this");
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      return childParentData.layoutOffset;
    }
    paintsChild(child) {
      let t0;
      box.RenderBox.as(child);
      let childParentData = T.SliverMultiBoxAdaptorParentDataN().as(child.parentData);
      return (t0 = childParentData, t0 == null ? null : t0.index) != null && !this[_keepAliveBucket][$containsKey](dart.nullCheck(childParentData).index);
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (!this.paintsChild(child)) {
        transform.setZero();
      } else {
        this.applyPaintTransformForBoxChild(child, transform);
      }
    }
    paint(context, offset) {
      if (this.firstChild == null) {
        return;
      }
      let mainAxisUnit = null;
      let crossAxisUnit = null;
      let originOffset = null;
      let addExtent = null;
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C[4] || CT.C4:
          {
            mainAxisUnit = C[2] || CT.C2;
            crossAxisUnit = C[3] || CT.C3;
            originOffset = offset['+'](new ui.Offset.new(0.0, dart.nullCheck(this.geometry).paintExtent));
            addExtent = true;
            break;
          }
        case C[6] || CT.C6:
          {
            mainAxisUnit = C[3] || CT.C3;
            crossAxisUnit = C[5] || CT.C5;
            originOffset = offset;
            addExtent = false;
            break;
          }
        case C[7] || CT.C7:
          {
            mainAxisUnit = C[5] || CT.C5;
            crossAxisUnit = C[3] || CT.C3;
            originOffset = offset;
            addExtent = false;
            break;
          }
        case C[9] || CT.C9:
          {
            mainAxisUnit = C[8] || CT.C8;
            crossAxisUnit = C[5] || CT.C5;
            originOffset = offset['+'](new ui.Offset.new(dart.nullCheck(this.geometry).paintExtent, 0.0));
            addExtent = true;
            break;
          }
      }
      if (!(mainAxisUnit !== null)) dart.assertFailed(null, I[1], 643, 12, "mainAxisUnit != null");
      if (!(addExtent !== null)) dart.assertFailed(null, I[1], 644, 12, "addExtent != null");
      let child = this.firstChild;
      while (child != null) {
        let mainAxisDelta = this.childMainAxisPosition(child);
        let crossAxisDelta = this.childCrossAxisPosition(child);
        let childOffset = new ui.Offset.new(originOffset.dx + mainAxisUnit.dx * mainAxisDelta + crossAxisUnit.dx * crossAxisDelta, originOffset.dy + mainAxisUnit.dy * mainAxisDelta + crossAxisUnit.dy * crossAxisDelta);
        if (addExtent) {
          childOffset = childOffset['+'](mainAxisUnit['*'](this.paintExtentOf(child)));
        }
        if (mainAxisDelta < this.constraints.remainingPaintExtent && mainAxisDelta + this.paintExtentOf(child) > 0) {
          context.paintChild(child, childOffset);
        }
        child = this.childAfter(child);
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(diagnostics.DiagnosticsNode.message(this.firstChild != null ? "currently live children: " + dart.str(this.indexOf(dart.nullCheck(this.firstChild))) + " to " + dart.str(this.indexOf(dart.nullCheck(this.lastChild))) : "no children current live"));
    }
    debugAssertChildListIsNonEmptyAndContiguous() {
      if (!dart.fn(() => {
        if (!(this.firstChild != null)) dart.assertFailed(null, I[1], 679, 14, "firstChild != null");
        let index = this.indexOf(dart.nullCheck(this.firstChild));
        let child = this.childAfter(dart.nullCheck(this.firstChild));
        while (child != null) {
          index = index + 1;
          if (!(this.indexOf(child) === index)) dart.assertFailed(null, I[1], 684, 16, "indexOf(child) == index");
          child = this.childAfter(child);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 678, 12, "() {\n      assert(firstChild != null);\n      int index = indexOf(firstChild!);\n      RenderBox? child = childAfter(firstChild!);\n      while (child != null) {\n        index += 1;\n        assert(indexOf(child) == index);\n        child = childAfter(child);\n      }\n      return true;\n    }()");
      return true;
    }
    debugDescribeChildren() {
      let t0;
      let children = T.JSArrayOfDiagnosticsNode().of([]);
      if (this.firstChild != null) {
        let child = this.firstChild;
        while (true) {
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(child).parentData));
          children[$add](child.toDiagnosticsNode({name: "child with index " + dart.str(childParentData.index)}));
          if (dart.equals(child, this.lastChild)) {
            break;
          }
          child = childParentData.nextSibling;
        }
      }
      if (this[_keepAliveBucket][$isNotEmpty]) {
        let indices = (t0 = this[_keepAliveBucket][$keys][$toList](), (() => {
          t0[$sort]();
          return t0;
        })());
        for (let index of indices) {
          children[$add](dart.nullCheck(this[_keepAliveBucket][$_get](index)).toDiagnosticsNode({name: "child with index " + dart.str(index) + " (kept alive but not laid out)", style: diagnostics.DiagnosticsTreeStyle.offstage}));
        }
      }
      return children;
    }
  };
  (sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    this[_keepAliveBucket] = new (T.IdentityMapOfint$RenderBox()).new();
    this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives] = null;
    this[_debugChildIntegrityEnabled] = true;
    if (!(childManager !== null)) dart.assertFailed(null, I[1], 191, 15, "childManager != null");
    this[_childManager] = childManager;
    sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__.new.call(this);
    if (!dart.fn(() => {
      this[_debugDanglingKeepAlives] = T.JSArrayOfRenderBox().of([]);
      return true;
    }, T.VoidTobool())()) dart.assertFailed(null, I[1], 193, 12, "() {\n      _debugDanglingKeepAlives = <RenderBox>[];\n      return true;\n    }()");
  }).prototype = sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor);
  dart.addTypeCaches(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor);
  dart.setMethodSignature(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, () => ({
    __proto__: dart.getMethods(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__),
    [_debugAssertChildListLocked]: dart.fnType(core.bool, []),
    [_debugVerifyChildOrder]: dart.fnType(core.bool, []),
    [_createOrObtainChild]: dart.fnType(dart.void, [core.int], {}, {after: dart.nullable(box.RenderBox)}),
    [_destroyOrCacheChild]: dart.fnType(dart.void, [box.RenderBox]),
    addInitialChild: dart.fnType(core.bool, [], {index: core.int, layoutOffset: core.double}, {}),
    insertAndLayoutLeadingChild: dart.fnType(dart.nullable(box.RenderBox), [box.BoxConstraints], {parentUsesSize: core.bool}, {}),
    insertAndLayoutChild: dart.fnType(dart.nullable(box.RenderBox), [box.BoxConstraints], {parentUsesSize: core.bool}, {after: dart.nullable(box.RenderBox)}),
    collectGarbage: dart.fnType(dart.void, [core.int, core.int]),
    indexOf: dart.fnType(core.int, [box.RenderBox]),
    paintExtentOf: dart.fnType(core.double, [box.RenderBox]),
    debugAssertChildListIsNonEmptyAndContiguous: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, () => ({
    __proto__: dart.getGetters(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__),
    childManager: sliver_multi_box_adaptor.RenderSliverBoxChildManager,
    [_debugDanglingKeepAlives]: core.List$(box.RenderBox),
    debugChildIntegrityEnabled: core.bool
  }));
  dart.setSetterSignature(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, () => ({
    __proto__: dart.getSetters(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__),
    [_debugDanglingKeepAlives]: core.List$(box.RenderBox),
    debugChildIntegrityEnabled: core.bool
  }));
  dart.setLibraryUri(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, I[0]);
  dart.setFieldSignature(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, () => ({
    __proto__: dart.getFields(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__),
    [_childManager]: dart.finalFieldType(sliver_multi_box_adaptor.RenderSliverBoxChildManager),
    [_keepAliveBucket]: dart.finalFieldType(core.Map$(core.int, box.RenderBox)),
    [__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives]: dart.fieldType(dart.nullable(core.List$(box.RenderBox))),
    [_debugChildIntegrityEnabled]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver_multi_box_adaptor.dart", {
    "package:flutter/src/rendering/sliver_multi_box_adaptor.dart": sliver_multi_box_adaptor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_multi_box_adaptor.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_multi_box_adaptor.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_multi_box_adaptor: sliver_multi_box_adaptor
  };
}));

//# sourceMappingURL=sliver_multi_box_adaptor.dart.lib.js.map