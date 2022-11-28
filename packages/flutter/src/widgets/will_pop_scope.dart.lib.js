define(['dart_sdk', 'packages/flutter/src/widgets/title.dart'], (function load__packages__flutter__src__widgets__will_pop_scope_dart(dart_sdk, packages__flutter__src__widgets__title$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const routes = packages__flutter__src__widgets__title$46dart.src__widgets__routes;
  var will_pop_scope = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "WillPopScope",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/will_pop_scope.dart"
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/will_pop_scope.dart",
    "package:flutter/src/widgets/will_pop_scope.dart"
  ];
  var child$ = dart.privateName(will_pop_scope, "WillPopScope.child");
  var onWillPop$ = dart.privateName(will_pop_scope, "WillPopScope.onWillPop");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  will_pop_scope.WillPopScope = class WillPopScope extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get onWillPop() {
      return this[onWillPop$];
    }
    set onWillPop(value) {
      super.onWillPop = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let onWillPop = opts && 'onWillPop' in opts ? opts.onWillPop : null;
      return new will_pop_scope.WillPopScope.new({key: key, child: child, onWillPop: onWillPop, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new will_pop_scope._WillPopScopeState.new();
    }
  };
  (will_pop_scope.WillPopScope.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let onWillPop = opts && 'onWillPop' in opts ? opts.onWillPop : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[onWillPop$] = onWillPop;
    if (!(child !== null)) dart.assertFailed(null, I[0], 36, 15, "child != null");
    will_pop_scope.WillPopScope.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = will_pop_scope.WillPopScope.prototype;
  dart.addTypeTests(will_pop_scope.WillPopScope);
  dart.addTypeCaches(will_pop_scope.WillPopScope);
  dart.setMethodSignature(will_pop_scope.WillPopScope, () => ({
    __proto__: dart.getMethods(will_pop_scope.WillPopScope.__proto__),
    createState: dart.fnType(framework.State$(will_pop_scope.WillPopScope), [])
  }));
  dart.setLibraryUri(will_pop_scope.WillPopScope, I[1]);
  dart.setFieldSignature(will_pop_scope.WillPopScope, () => ({
    __proto__: dart.getFields(will_pop_scope.WillPopScope.__proto__),
    child: dart.finalFieldType(framework.Widget),
    onWillPop: dart.finalFieldType(dart.nullable(dart.fnType(async.Future$(core.bool), [])))
  }));
  var _route = dart.privateName(will_pop_scope, "_route");
  will_pop_scope._WillPopScopeState = class _WillPopScopeState extends framework.State$(will_pop_scope.WillPopScope) {
    didChangeDependencies() {
      let t0, t0$;
      super.didChangeDependencies();
      if (this.widget.onWillPop != null) {
        t0 = this[_route];
        t0 == null ? null : t0.removeScopedWillPopCallback(dart.nullCheck(this.widget.onWillPop));
      }
      this[_route] = routes.ModalRoute.of(T.ObjectN(), this.context);
      if (this.widget.onWillPop != null) {
        t0$ = this[_route];
        t0$ == null ? null : t0$.addScopedWillPopCallback(dart.nullCheck(this.widget.onWillPop));
      }
    }
    didUpdateWidget(oldWidget) {
      will_pop_scope.WillPopScope.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.onWillPop, oldWidget.onWillPop) && this[_route] != null) {
        if (oldWidget.onWillPop != null) {
          dart.nullCheck(this[_route]).removeScopedWillPopCallback(dart.nullCheck(oldWidget.onWillPop));
        }
        if (this.widget.onWillPop != null) {
          dart.nullCheck(this[_route]).addScopedWillPopCallback(dart.nullCheck(this.widget.onWillPop));
        }
      }
    }
    dispose() {
      let t0;
      if (this.widget.onWillPop != null) {
        t0 = this[_route];
        t0 == null ? null : t0.removeScopedWillPopCallback(dart.nullCheck(this.widget.onWillPop));
      }
      super.dispose();
    }
    build(context) {
      return this.widget.child;
    }
    static ['_#new#tearOff']() {
      return new will_pop_scope._WillPopScopeState.new();
    }
  };
  (will_pop_scope._WillPopScopeState.new = function() {
    this[_route] = null;
    will_pop_scope._WillPopScopeState.__proto__.new.call(this);
    ;
  }).prototype = will_pop_scope._WillPopScopeState.prototype;
  dart.addTypeTests(will_pop_scope._WillPopScopeState);
  dart.addTypeCaches(will_pop_scope._WillPopScopeState);
  dart.setMethodSignature(will_pop_scope._WillPopScopeState, () => ({
    __proto__: dart.getMethods(will_pop_scope._WillPopScopeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(will_pop_scope._WillPopScopeState, I[1]);
  dart.setFieldSignature(will_pop_scope._WillPopScopeState, () => ({
    __proto__: dart.getFields(will_pop_scope._WillPopScopeState.__proto__),
    [_route]: dart.fieldType(dart.nullable(routes.ModalRoute))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/will_pop_scope.dart", {
    "package:flutter/src/widgets/will_pop_scope.dart": will_pop_scope
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["will_pop_scope.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwCe;;;;;;IAMU;;;;;;;;;;;;;AAGc;IAAoB;;;QAjBjD;QACQ;QACA;;IADA;IACA;UACJ,AAAM,KAAD;AAJX,+DACE,GAAG;;EAGe;;;;;;;;;;;;;;;;;AAsBK,MAAvB;AACN,UAAI,AAAO;AAC6C,aAAtD;4BAAQ,+BAA4C,eAAhB,AAAO;;AAEd,MAA/B,eAAoB,kCAAG;AACvB,UAAI,AAAO;AAC0C,cAAnD;6BAAQ,6BAAyC,eAAhB,AAAO;;IAE5C;oBAGkC;;AACA,MAA1B,sBAAgB,SAAS;AAC/B,uBAAI,AAAO,uBAAa,AAAU,SAAD,eAAc;AAC7C,YAAI,AAAU,SAAD;AAC8C,UAAnD,AAAE,eAAR,0CAAuD,eAAnB,AAAU,SAAD;;AAE/C,YAAI,AAAO;AAC0C,UAA7C,AAAE,eAAR,uCAAiD,eAAhB,AAAO;;;IAG9C;;;AAIE,UAAI,AAAO;AAC6C,aAAtD;4BAAQ,+BAA4C,eAAhB,AAAO;;AAE9B,MAAT;IACR;UAG0B;AAAY,YAAA,AAAO;IAAK;;;;;;IApC7B;;;EAqCvB","file":"../../../../../../../../../../packages/flutter/src/widgets/will_pop_scope.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__will_pop_scope: will_pop_scope
  };
}));

//# sourceMappingURL=will_pop_scope.dart.lib.js.map
