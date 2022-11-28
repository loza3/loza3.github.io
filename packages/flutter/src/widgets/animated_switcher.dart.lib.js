define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/alignment.dart'], (function load__packages__flutter__src__widgets__animated_switcher_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__alignment$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const animation$ = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  var animated_switcher = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $forEach = dartx.forEach;
  var $isEmpty = dartx.isEmpty;
  var $map = dartx.map;
  var $length = dartx.length;
  var $last = dartx.last;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    AnimationOfdouble: () => (T.AnimationOfdouble = dart.constFn(animation$.Animation$(core.double)))(),
    WidgetAndAnimationOfdoubleToWidget: () => (T.WidgetAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.Widget, T.AnimationOfdouble()])))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    ListOfWidget: () => (T.ListOfWidget = dart.constFn(core.List$(framework.Widget)))(),
    WidgetNAndListOfWidgetToWidget: () => (T.WidgetNAndListOfWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [T.WidgetN(), T.ListOfWidget()])))(),
    LinkedHashSetOf_ChildEntry: () => (T.LinkedHashSetOf_ChildEntry = dart.constFn(collection.LinkedHashSet$(animated_switcher._ChildEntry)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    AnimationStatusTovoid: () => (T.AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation$.AnimationStatus])))(),
    _ChildEntryToWidget: () => (T._ChildEntryToWidget = dart.constFn(dart.fnType(framework.Widget, [animated_switcher._ChildEntry])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C1() {
      return C[1] = dart.fn(animated_switcher.AnimatedSwitcher.defaultTransitionBuilder, T.WidgetAndAnimationOfdoubleToWidget());
    },
    get C2() {
      return C[2] = dart.fn(animated_switcher.AnimatedSwitcher.defaultLayoutBuilder, T.WidgetNAndListOfWidgetToWidget());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedSwitcher",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_switcher.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeTransition",
        [_Location_column]: 12,
        [_Location_line]: 224,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_switcher.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 12,
        [_Location_line]: 238,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_switcher.dart"
      });
    },
    get C6() {
      return C[6] = dart.constList([], framework.Widget);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "KeyedSubtree",
        [_Location_column]: 32,
        [_Location_line]: 346,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_switcher.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "KeyedSubtree",
        [_Location_column]: 24,
        [_Location_line]: 369,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_switcher.dart"
      });
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_switcher.dart",
    "package:flutter/src/widgets/animated_switcher.dart"
  ];
  animated_switcher._ChildEntry = class _ChildEntry extends core.Object {
    static ['_#new#tearOff'](opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let transition = opts && 'transition' in opts ? opts.transition : null;
      let widgetChild = opts && 'widgetChild' in opts ? opts.widgetChild : null;
      return new animated_switcher._ChildEntry.new({controller: controller, animation: animation, transition: transition, widgetChild: widgetChild});
    }
    toString() {
      return "Entry#" + diagnostics.shortHash(this) + "(" + dart.str(this.widgetChild) + ")";
    }
  };
  (animated_switcher._ChildEntry.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let transition = opts && 'transition' in opts ? opts.transition : null;
    let widgetChild = opts && 'widgetChild' in opts ? opts.widgetChild : null;
    this.controller = controller;
    this.animation = animation;
    this.transition = transition;
    this.widgetChild = widgetChild;
    if (!(animation !== null)) dart.assertFailed(null, I[0], 22, 15, "animation != null");
    if (!(transition !== null)) dart.assertFailed(null, I[0], 23, 15, "transition != null");
    if (!(controller !== null)) dart.assertFailed(null, I[0], 24, 15, "controller != null");
    ;
  }).prototype = animated_switcher._ChildEntry.prototype;
  dart.addTypeTests(animated_switcher._ChildEntry);
  dart.addTypeCaches(animated_switcher._ChildEntry);
  dart.setLibraryUri(animated_switcher._ChildEntry, I[1]);
  dart.setFieldSignature(animated_switcher._ChildEntry, () => ({
    __proto__: dart.getFields(animated_switcher._ChildEntry.__proto__),
    controller: dart.finalFieldType(animation_controller.AnimationController),
    animation: dart.finalFieldType(animation$.Animation$(core.double)),
    transition: dart.fieldType(framework.Widget),
    widgetChild: dart.fieldType(framework.Widget)
  }));
  dart.defineExtensionMethods(animated_switcher._ChildEntry, ['toString']);
  var child$ = dart.privateName(animated_switcher, "AnimatedSwitcher.child");
  var duration$ = dart.privateName(animated_switcher, "AnimatedSwitcher.duration");
  var reverseDuration$ = dart.privateName(animated_switcher, "AnimatedSwitcher.reverseDuration");
  var switchInCurve$ = dart.privateName(animated_switcher, "AnimatedSwitcher.switchInCurve");
  var switchOutCurve$ = dart.privateName(animated_switcher, "AnimatedSwitcher.switchOutCurve");
  var transitionBuilder$ = dart.privateName(animated_switcher, "AnimatedSwitcher.transitionBuilder");
  var layoutBuilder$ = dart.privateName(animated_switcher, "AnimatedSwitcher.layoutBuilder");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  animated_switcher.AnimatedSwitcher = class AnimatedSwitcher extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get reverseDuration() {
      return this[reverseDuration$];
    }
    set reverseDuration(value) {
      super.reverseDuration = value;
    }
    get switchInCurve() {
      return this[switchInCurve$];
    }
    set switchInCurve(value) {
      super.switchInCurve = value;
    }
    get switchOutCurve() {
      return this[switchOutCurve$];
    }
    set switchOutCurve(value) {
      super.switchOutCurve = value;
    }
    get transitionBuilder() {
      return this[transitionBuilder$];
    }
    set transitionBuilder(value) {
      super.transitionBuilder = value;
    }
    get layoutBuilder() {
      return this[layoutBuilder$];
    }
    set layoutBuilder(value) {
      super.layoutBuilder = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
      let switchInCurve = opts && 'switchInCurve' in opts ? opts.switchInCurve : C[0] || CT.C0;
      let switchOutCurve = opts && 'switchOutCurve' in opts ? opts.switchOutCurve : C[0] || CT.C0;
      let transitionBuilder = opts && 'transitionBuilder' in opts ? opts.transitionBuilder : C[1] || CT.C1;
      let layoutBuilder = opts && 'layoutBuilder' in opts ? opts.layoutBuilder : C[2] || CT.C2;
      return new animated_switcher.AnimatedSwitcher.new({key: key, child: child, duration: duration, reverseDuration: reverseDuration, switchInCurve: switchInCurve, switchOutCurve: switchOutCurve, transitionBuilder: transitionBuilder, layoutBuilder: layoutBuilder, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    createState() {
      return new animated_switcher._AnimatedSwitcherState.new();
    }
    static defaultTransitionBuilder(child, animation) {
      return new transitions.FadeTransition.new({opacity: animation, child: child, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    static defaultLayoutBuilder(currentChild, previousChildren) {
      return new basic.Stack.new({alignment: alignment.Alignment.center, children: (() => {
          let t0 = T.ListOfWidget().of(previousChildren);
          if (currentChild != null) t0.push(currentChild);
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    debugFillProperties(properties) {
      let t1;
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("duration", this.duration.inMilliseconds, {unit: "ms"}));
      properties.add(new diagnostics.IntProperty.new("reverseDuration", (t1 = this.reverseDuration, t1 == null ? null : t1.inMilliseconds), {unit: "ms", defaultValue: null}));
    }
  };
  (animated_switcher.AnimatedSwitcher.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let switchInCurve = opts && 'switchInCurve' in opts ? opts.switchInCurve : C[0] || CT.C0;
    let switchOutCurve = opts && 'switchOutCurve' in opts ? opts.switchOutCurve : C[0] || CT.C0;
    let transitionBuilder = opts && 'transitionBuilder' in opts ? opts.transitionBuilder : C[1] || CT.C1;
    let layoutBuilder = opts && 'layoutBuilder' in opts ? opts.layoutBuilder : C[2] || CT.C2;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[switchInCurve$] = switchInCurve;
    this[switchOutCurve$] = switchOutCurve;
    this[transitionBuilder$] = transitionBuilder;
    this[layoutBuilder$] = layoutBuilder;
    if (!(duration !== null)) dart.assertFailed(null, I[0], 120, 15, "duration != null");
    if (!(switchInCurve !== null)) dart.assertFailed(null, I[0], 121, 15, "switchInCurve != null");
    if (!(switchOutCurve !== null)) dart.assertFailed(null, I[0], 122, 15, "switchOutCurve != null");
    if (!(transitionBuilder !== null)) dart.assertFailed(null, I[0], 123, 15, "transitionBuilder != null");
    if (!(layoutBuilder !== null)) dart.assertFailed(null, I[0], 124, 15, "layoutBuilder != null");
    animated_switcher.AnimatedSwitcher.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = animated_switcher.AnimatedSwitcher.prototype;
  dart.addTypeTests(animated_switcher.AnimatedSwitcher);
  dart.addTypeCaches(animated_switcher.AnimatedSwitcher);
  dart.setMethodSignature(animated_switcher.AnimatedSwitcher, () => ({
    __proto__: dart.getMethods(animated_switcher.AnimatedSwitcher.__proto__),
    createState: dart.fnType(framework.State$(animated_switcher.AnimatedSwitcher), [])
  }));
  dart.setStaticMethodSignature(animated_switcher.AnimatedSwitcher, () => ['defaultTransitionBuilder', 'defaultLayoutBuilder']);
  dart.setLibraryUri(animated_switcher.AnimatedSwitcher, I[1]);
  dart.setFieldSignature(animated_switcher.AnimatedSwitcher, () => ({
    __proto__: dart.getFields(animated_switcher.AnimatedSwitcher.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    duration: dart.finalFieldType(core.Duration),
    reverseDuration: dart.finalFieldType(dart.nullable(core.Duration)),
    switchInCurve: dart.finalFieldType(curves.Curve),
    switchOutCurve: dart.finalFieldType(curves.Curve),
    transitionBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.Widget, animation$.Animation$(core.double)])),
    layoutBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [dart.nullable(framework.Widget), core.List$(framework.Widget)]))
  }));
  var _currentEntry = dart.privateName(animated_switcher, "_currentEntry");
  var _outgoingEntries = dart.privateName(animated_switcher, "_outgoingEntries");
  var _outgoingWidgets = dart.privateName(animated_switcher, "_outgoingWidgets");
  var _childNumber = dart.privateName(animated_switcher, "_childNumber");
  var _addEntryForNewChild = dart.privateName(animated_switcher, "_addEntryForNewChild");
  var _updateTransitionForEntry = dart.privateName(animated_switcher, "_updateTransitionForEntry");
  var _markChildWidgetCacheAsDirty = dart.privateName(animated_switcher, "_markChildWidgetCacheAsDirty");
  var _newEntry = dart.privateName(animated_switcher, "_newEntry");
  var _rebuildOutgoingWidgetsIfNeeded = dart.privateName(animated_switcher, "_rebuildOutgoingWidgetsIfNeeded");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(animated_switcher.AnimatedSwitcher) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(animated_switcher.AnimatedSwitcher)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(animated_switcher.AnimatedSwitcher));
  animated_switcher._AnimatedSwitcherState = class _AnimatedSwitcherState extends State_TickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_addEntryForNewChild]({animate: false});
    }
    didUpdateWidget(oldWidget) {
      animated_switcher.AnimatedSwitcher.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!this.widget.transitionBuilder[$_equals](oldWidget.transitionBuilder)) {
        this[_outgoingEntries][$forEach](dart.bind(this, _updateTransitionForEntry));
        if (this[_currentEntry] != null) {
          this[_updateTransitionForEntry](dart.nullCheck(this[_currentEntry]));
        }
        this[_markChildWidgetCacheAsDirty]();
      }
      let hasNewChild = this.widget.child != null;
      let hasOldChild = this[_currentEntry] != null;
      if (hasNewChild !== hasOldChild || hasNewChild && !framework.Widget.canUpdate(dart.nullCheck(this.widget.child), dart.nullCheck(this[_currentEntry]).widgetChild)) {
        this[_childNumber] = this[_childNumber] + 1;
        this[_addEntryForNewChild]({animate: true});
      } else if (this[_currentEntry] != null) {
        if (!(hasOldChild && hasNewChild)) dart.assertFailed(null, I[0], 289, 14, "hasOldChild && hasNewChild");
        if (!framework.Widget.canUpdate(dart.nullCheck(this.widget.child), dart.nullCheck(this[_currentEntry]).widgetChild)) dart.assertFailed(null, I[0], 290, 14, "Widget.canUpdate(widget.child!, _currentEntry!.widgetChild)");
        dart.nullCheck(this[_currentEntry]).widgetChild = dart.nullCheck(this.widget.child);
        this[_updateTransitionForEntry](dart.nullCheck(this[_currentEntry]));
        this[_markChildWidgetCacheAsDirty]();
      }
    }
    [_addEntryForNewChild](opts) {
      let animate = opts && 'animate' in opts ? opts.animate : null;
      if (!(animate || this[_currentEntry] == null)) dart.assertFailed(null, I[0], 302, 12, "animate || _currentEntry == null");
      if (this[_currentEntry] != null) {
        if (!animate) dart.assertFailed(null, I[0], 304, 14, "animate");
        if (!!this[_outgoingEntries].contains(this[_currentEntry])) dart.assertFailed(null, I[0], 305, 14, "!_outgoingEntries.contains(_currentEntry)");
        this[_outgoingEntries].add(dart.nullCheck(this[_currentEntry]));
        dart.nullCheck(this[_currentEntry]).controller.reverse();
        this[_markChildWidgetCacheAsDirty]();
        this[_currentEntry] = null;
      }
      if (this.widget.child == null) {
        return;
      }
      let controller = new animation_controller.AnimationController.new({duration: this.widget.duration, reverseDuration: this.widget.reverseDuration, vsync: this});
      let animation = new animations.CurvedAnimation.new({parent: controller, curve: this.widget.switchInCurve, reverseCurve: this.widget.switchOutCurve});
      this[_currentEntry] = this[_newEntry]({child: dart.nullCheck(this.widget.child), controller: controller, animation: animation, builder: this.widget.transitionBuilder});
      if (animate) {
        controller.forward();
      } else {
        if (!this[_outgoingEntries][$isEmpty]) dart.assertFailed(null, I[0], 333, 14, "_outgoingEntries.isEmpty");
        controller.value = 1.0;
      }
    }
    [_newEntry](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let entry = new animated_switcher._ChildEntry.new({widgetChild: child, transition: basic.KeyedSubtree.wrap(builder(child, animation), this[_childNumber], {$creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), animation: animation, controller: controller});
      animation.addStatusListener(dart.fn(status => {
        if (status === animation$.AnimationStatus.dismissed) {
          this.setState(dart.fn(() => {
            if (!this.mounted) dart.assertFailed(null, I[0], 353, 18, "mounted");
            if (!this[_outgoingEntries].contains(entry)) dart.assertFailed(null, I[0], 354, 18, "_outgoingEntries.contains(entry)");
            this[_outgoingEntries].remove(entry);
            this[_markChildWidgetCacheAsDirty]();
          }, T.VoidTovoid()));
          controller.dispose();
        }
      }, T.AnimationStatusTovoid()));
      return entry;
    }
    [_markChildWidgetCacheAsDirty]() {
      this[_outgoingWidgets] = null;
    }
    [_updateTransitionForEntry](entry) {
      let t3, t2, t1;
      entry.transition = new basic.KeyedSubtree.new({key: entry.transition.key, child: (t1 = this.widget, t2 = entry.widgetChild, t3 = entry.animation, t1.transitionBuilder(t2, t3)), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    [_rebuildOutgoingWidgetsIfNeeded]() {
      this[_outgoingWidgets] == null ? this[_outgoingWidgets] = T.ListOfWidget().unmodifiable(this[_outgoingEntries][$map](framework.Widget, dart.fn(entry => entry.transition, T._ChildEntryToWidget()))) : null;
      if (!(this[_outgoingEntries][$length] === dart.nullCheck(this[_outgoingWidgets])[$length])) dart.assertFailed(null, I[0], 379, 12, "_outgoingEntries.length == _outgoingWidgets!.length");
      if (!(this[_outgoingEntries][$isEmpty] || this[_outgoingEntries][$last].transition._equals(dart.nullCheck(this[_outgoingWidgets])[$last]))) dart.assertFailed(null, I[0], 380, 12, "_outgoingEntries.isEmpty || _outgoingEntries.last.transition == _outgoingWidgets!.last");
    }
    dispose() {
      if (this[_currentEntry] != null) {
        dart.nullCheck(this[_currentEntry]).controller.dispose();
      }
      for (let entry of this[_outgoingEntries]) {
        entry.controller.dispose();
      }
      super.dispose();
    }
    build(context) {
      let t1, t3, t2, t1$;
      this[_rebuildOutgoingWidgetsIfNeeded]();
      t1$ = this.widget;
      t2 = (t1 = this[_currentEntry], t1 == null ? null : t1.transition);
      t3 = dart.nullCheck(this[_outgoingWidgets]);
      return t1$.layoutBuilder(t2, t3);
    }
    static ['_#new#tearOff']() {
      return new animated_switcher._AnimatedSwitcherState.new();
    }
  };
  (animated_switcher._AnimatedSwitcherState.new = function() {
    this[_currentEntry] = null;
    this[_outgoingEntries] = T.LinkedHashSetOf_ChildEntry().new();
    this[_outgoingWidgets] = C[6] || CT.C6;
    this[_childNumber] = 0;
    animated_switcher._AnimatedSwitcherState.__proto__.new.call(this);
    ;
  }).prototype = animated_switcher._AnimatedSwitcherState.prototype;
  dart.addTypeTests(animated_switcher._AnimatedSwitcherState);
  dart.addTypeCaches(animated_switcher._AnimatedSwitcherState);
  dart.setMethodSignature(animated_switcher._AnimatedSwitcherState, () => ({
    __proto__: dart.getMethods(animated_switcher._AnimatedSwitcherState.__proto__),
    [_addEntryForNewChild]: dart.fnType(dart.void, [], {}, {animate: core.bool}),
    [_newEntry]: dart.fnType(animated_switcher._ChildEntry, [], {}, {animation: animation$.Animation$(core.double), builder: dart.fnType(framework.Widget, [framework.Widget, animation$.Animation$(core.double)]), child: framework.Widget, controller: animation_controller.AnimationController}),
    [_markChildWidgetCacheAsDirty]: dart.fnType(dart.void, []),
    [_updateTransitionForEntry]: dart.fnType(dart.void, [animated_switcher._ChildEntry]),
    [_rebuildOutgoingWidgetsIfNeeded]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(animated_switcher._AnimatedSwitcherState, I[1]);
  dart.setFieldSignature(animated_switcher._AnimatedSwitcherState, () => ({
    __proto__: dart.getFields(animated_switcher._AnimatedSwitcherState.__proto__),
    [_currentEntry]: dart.fieldType(dart.nullable(animated_switcher._ChildEntry)),
    [_outgoingEntries]: dart.finalFieldType(core.Set$(animated_switcher._ChildEntry)),
    [_outgoingWidgets]: dart.fieldType(dart.nullable(core.List$(framework.Widget))),
    [_childNumber]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/animated_switcher.dart", {
    "package:flutter/src/widgets/animated_switcher.dart": animated_switcher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animated_switcher.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuCuB,YAAA,AAAwC,YAA/B,sBAAU,QAAM,eAAE,oBAAW;IAAE;;;QAtB7C;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;UACJ,AAAU,SAAD;UACT,AAAW,UAAD;UACV,AAAW,UAAD;;EAAS;;;;;;;;;;;;;;;;;;;;;;;;IAiHjB;;;;;;IAQC;;;;;;IASC;;;;;;IAYJ;;;;;;IAYA;;;;;;IAoB4B;;;;;;IAaJ;;;;;;;;;;;;;;;;;;AAGK;IAAwB;oCASnB,OAAyB;AACrE,YAAO,8CACI,SAAS,SACX,KAAK;IAEhB;gCAS2C,cAA2B;AACpE,YAAO,iCACgB,sCACH;uCACb,gBAAgB;AACnB,cAAI,YAAY,UAAU,oBAAY;;;IAG5C;wBAGqD;;AACd,MAA/B,0BAAoB,UAAU;AACwC,MAA5E,AAAW,UAAD,KAAK,gCAAY,YAAY,AAAS,qCAAsB;AACyC,MAA/G,AAAW,UAAD,KAAK,gCAAY,4DAAmB,OAAiB,2BAAsB,oBAAoB;IAC3G;;;QA5IQ;QACD;QACS;QACT;QACA;QACA;QACA;QACA;;IANA;IACS;IACT;IACA;IACA;IACA;IACA;UACK,AAAS,QAAD;UACR,AAAc,aAAD;UACb,AAAe,cAAD;UACd,AAAkB,iBAAD;UACjB,AAAc,aAAD;AAbnB,sEACE,GAAG;;EAYuB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2If,MAAX;AAC8B,MAApC,qCAA8B;IAChC;oBAGsC;;AACJ,MAA1B,sBAAgB,SAAS;AAI/B,WAAI,AAAO,wCAAqB,AAAU,SAAD;AACY,QAAnD,AAAiB,2CAAQ;AACzB,YAAI;AACuC,UAAzC,gCAAuC,eAAb;;AAEE,QAA9B;;AAGS,wBAAc,AAAO,AAAM;AAC3B,wBAAc,AAAc;AACvC,UAAI,WAAW,KAAI,WAAW,IAC1B,WAAW,KAAY,2BAAsB,eAAZ,AAAO,oBAAqB,AAAE,eAAf;AAEjC,QAAjB,qBAAA,AAAa,qBAAG;AACmB,QAAnC,qCAA8B;YACzB,KAAI;AACT,cAAO,AAAY,WAAD,IAAI,WAAW;AACjC,aAAc,2BAAsB,eAAZ,AAAO,oBAAqB,AAAE,eAAf;AAKG,QAA7B,AAAE,eAAf,mCAAyC,eAAZ,AAAO;AACK,QAAzC,gCAAuC,eAAb;AACI,QAA9B;;IAEJ;;UAE0C;AACxC,YAAO,AAAQ,OAAD,IAAI,AAAc;AAChC,UAAI;AACF,aAAO,OAAO;AACd,cAAQ,AAAiB,gCAAS;AACE,QAApC,AAAiB,2BAAiB,eAAb;AACc,QAAtB,AAAE,AAAW,eAA1B;AAC8B,QAA9B;AACoB,QAApB,sBAAgB;;AAElB,UAAI,AAAO,AAAM;AACf;;AAEwB,uBAAa,4DAC3B,AAAO,uCACA,AAAO,oCACjB;AAEe,sBAAY,4CAC1B,UAAU,SACX,AAAO,yCACA,AAAO;AAOtB,MALD,sBAAgB,wBACK,eAAZ,AAAO,gCACF,UAAU,aACX,SAAS,WACX,AAAO;AAElB,UAAI,OAAO;AACW,QAApB,AAAW,UAAD;;AAEV,aAAO,AAAiB;AACF,QAAtB,AAAW,UAAD,SAAS;;IAEvB;;UAGkB;UAC2B;UACd;UACF;AAET,kBAAQ,oDACX,KAAK,cACO,wBAAK,AAAO,OAAA,CAAC,KAAK,EAAE,SAAS,GAAG,yFAC9C,SAAS,cACR,UAAU;AAYtB,MAVF,AAAU,SAAD,mBAAmB,QAAiB;AAC3C,YAAI,AAAO,MAAD,KAAoB;AAM1B,UALF,cAAS;AACP,iBAAO;AACP,iBAAO,AAAiB,gCAAS,KAAK;AACR,YAA9B,AAAiB,8BAAO,KAAK;AACC,YAA9B;;AAEkB,UAApB,AAAW,UAAD;;;AAGd,YAAO,MAAK;IACd;;AAGyB,MAAvB,yBAAmB;IACrB;gCAE2C;;AAIxC,MAHD,AAAM,KAAD,cAAc,iCACZ,AAAM,AAAW,KAAZ,8BACH,kBAAyB,AAAM,KAAD,mBAAc,AAAM,KAAD,YAAzB;IAEnC;;AAKG,MAFgB,iCAAjB,yBAAqB,8BACnB,AAAiB,+CAAY,QAAa,SAAU,AAAM,KAAD,0CAD1C;AAGjB,YAAO,AAAiB,AAAO,oCAAmB,AAAE,eAAlB;AAClC,YAAO,AAAiB,AAAQ,oCAAG,AAAiB,AAAK,AAAW,iDAAmB,AAAE,eAAlB;IACzE;;AAIE,UAAI;AACiC,QAAtB,AAAE,AAAW,eAA1B;;AAEF,eAAuB,QAAS;AACJ,QAA1B,AAAM,AAAW,KAAZ;;AAEQ,MAAT;IACR;UAG0B;;AACS,MAAjC;AACA,YAAO;mDAAqB,OAAe;WAA4B,eAAhB;YAA5B;IAC7B;;;;;;IA9Ia;IACU,yBAAgC;IACzC;IACV,qBAAe;;;EA4IrB","file":"../../../../../../../../../../packages/flutter/src/widgets/animated_switcher.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__animated_switcher: animated_switcher
  };
}));

//# sourceMappingURL=animated_switcher.dart.lib.js.map
