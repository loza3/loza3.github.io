define(['dart_sdk', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__services__mouse_cursor_dart(dart_sdk, packages__flutter__src__gestures__events$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const system_channels = packages__flutter__src__services__text_editing_delta$46dart.src__services__system_channels;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var mouse_cursor = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfint$MouseCursorSession: () => (T.IdentityMapOfint$MouseCursorSession = dart.constFn(_js_helper.IdentityMap$(core.int, mouse_cursor.MouseCursorSession)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    DiagnosticsPropertyOfString: () => (T.DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "info",
        [_Enum_index]: 3
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: mouse_cursor._DeferringMouseCursor.prototype
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: mouse_cursor._NoopMouseCursor.prototype
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "none"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "basic"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "click"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "forbidden"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "wait"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "progress"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "contextMenu"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "help"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "text"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "verticalText"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "cell"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "precise"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "move"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "grab"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "grabbing"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "noDrop"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "alias"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "copy"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "disappearing"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "allScroll"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeLeftRight"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpDown"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpLeftDownRight"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpRightDownLeft"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUp"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeDown"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeLeft"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeRight"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpLeft"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeUpRight"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeDownLeft"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeDownRight"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeColumn"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "resizeRow"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "zoomIn"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [kind$]: "zoomOut"
      });
    }
  }, false);
  var C = Array(39).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/mouse_cursor.dart",
    "package:flutter/src/services/mouse_cursor.dart"
  ];
  var fallbackMouseCursor$ = dart.privateName(mouse_cursor, "MouseCursorManager.fallbackMouseCursor");
  var _lastSession = dart.privateName(mouse_cursor, "_lastSession");
  mouse_cursor.MouseCursorManager = class MouseCursorManager extends core.Object {
    get fallbackMouseCursor() {
      return this[fallbackMouseCursor$];
    }
    set fallbackMouseCursor(value) {
      super.fallbackMouseCursor = value;
    }
    static ['_#new#tearOff'](fallbackMouseCursor) {
      return new mouse_cursor.MouseCursorManager.new(fallbackMouseCursor);
    }
    debugDeviceActiveCursor(device) {
      let result = null;
      if (!dart.fn(() => {
        let t0;
        result = (t0 = this[_lastSession][$_get](device), t0 == null ? null : t0.cursor);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 41, 12, "() {\n      result = _lastSession[device]?.cursor;\n      return true;\n    }()");
      return result;
    }
    handleDeviceCursorUpdate(device, triggeringEvent, cursorCandidates) {
      let t0, t0$, t0$0;
      if (events.PointerRemovedEvent.is(triggeringEvent)) {
        this[_lastSession][$remove](device);
        return;
      }
      let lastSession = this[_lastSession][$_get](device);
      let nextCursor = (t0 = mouse_cursor._DeferringMouseCursor.firstNonDeferred(cursorCandidates), t0 == null ? this.fallbackMouseCursor : t0);
      if (!!mouse_cursor._DeferringMouseCursor.is(nextCursor)) dart.assertFailed(null, I[0], 71, 12, "nextCursor is! _DeferringMouseCursor");
      if (dart.equals((t0$ = lastSession, t0$ == null ? null : t0$.cursor), nextCursor)) {
        return;
      }
      let nextSession = nextCursor.createSession(device);
      this[_lastSession][$_set](device, nextSession);
      t0$0 = lastSession;
      t0$0 == null ? null : t0$0.dispose();
      nextSession.activate();
    }
  };
  (mouse_cursor.MouseCursorManager.new = function(fallbackMouseCursor) {
    this[_lastSession] = new (T.IdentityMapOfint$MouseCursorSession()).new();
    this[fallbackMouseCursor$] = fallbackMouseCursor;
    if (!!fallbackMouseCursor[$_equals](mouse_cursor.MouseCursor.defer)) dart.assertFailed(null, I[0], 23, 14, "fallbackMouseCursor != MouseCursor.defer");
    ;
  }).prototype = mouse_cursor.MouseCursorManager.prototype;
  dart.addTypeTests(mouse_cursor.MouseCursorManager);
  dart.addTypeCaches(mouse_cursor.MouseCursorManager);
  dart.setMethodSignature(mouse_cursor.MouseCursorManager, () => ({
    __proto__: dart.getMethods(mouse_cursor.MouseCursorManager.__proto__),
    debugDeviceActiveCursor: dart.fnType(dart.nullable(mouse_cursor.MouseCursor), [core.int]),
    handleDeviceCursorUpdate: dart.fnType(dart.void, [core.int, dart.nullable(events.PointerEvent), core.Iterable$(mouse_cursor.MouseCursor)])
  }));
  dart.setLibraryUri(mouse_cursor.MouseCursorManager, I[1]);
  dart.setFieldSignature(mouse_cursor.MouseCursorManager, () => ({
    __proto__: dart.getFields(mouse_cursor.MouseCursorManager.__proto__),
    fallbackMouseCursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    [_lastSession]: dart.finalFieldType(core.Map$(core.int, mouse_cursor.MouseCursorSession))
  }));
  var cursor$ = dart.privateName(mouse_cursor, "MouseCursorSession.cursor");
  var device$ = dart.privateName(mouse_cursor, "MouseCursorSession.device");
  mouse_cursor.MouseCursorSession = class MouseCursorSession extends core.Object {
    get cursor() {
      return this[cursor$];
    }
    set cursor(value) {
      super.cursor = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
  };
  (mouse_cursor.MouseCursorSession.new = function(cursor, device) {
    this[cursor$] = cursor;
    this[device$] = device;
    if (!(cursor !== null)) dart.assertFailed(null, I[0], 108, 14, "cursor != null");
    if (!(device !== null)) dart.assertFailed(null, I[0], 109, 14, "device != null");
    ;
  }).prototype = mouse_cursor.MouseCursorSession.prototype;
  dart.addTypeTests(mouse_cursor.MouseCursorSession);
  dart.addTypeCaches(mouse_cursor.MouseCursorSession);
  dart.setLibraryUri(mouse_cursor.MouseCursorSession, I[1]);
  dart.setFieldSignature(mouse_cursor.MouseCursorSession, () => ({
    __proto__: dart.getFields(mouse_cursor.MouseCursorSession.__proto__),
    cursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    device: dart.finalFieldType(core.int)
  }));
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  mouse_cursor.MouseCursor = class MouseCursor extends Object_Diagnosticable$36 {
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[0] || CT.C0;
      let debugDescription = this.debugDescription;
      if (minLevel.index >= diagnostics.DiagnosticLevel.info.index && debugDescription !== null) {
        return debugDescription;
      }
      return super.toString({minLevel: minLevel});
    }
  };
  (mouse_cursor.MouseCursor.new = function() {
    ;
  }).prototype = mouse_cursor.MouseCursor.prototype;
  dart.addTypeTests(mouse_cursor.MouseCursor);
  dart.addTypeCaches(mouse_cursor.MouseCursor);
  dart.setLibraryUri(mouse_cursor.MouseCursor, I[1]);
  dart.setStaticFieldSignature(mouse_cursor.MouseCursor, () => ['defer', 'uncontrolled']);
  dart.defineExtensionMethods(mouse_cursor.MouseCursor, ['toString']);
  dart.defineLazy(mouse_cursor.MouseCursor, {
    /*mouse_cursor.MouseCursor.defer*/get defer() {
      return C[1] || CT.C1;
    },
    /*mouse_cursor.MouseCursor.uncontrolled*/get uncontrolled() {
      return C[2] || CT.C2;
    }
  }, false);
  mouse_cursor._DeferringMouseCursor = class _DeferringMouseCursor extends mouse_cursor.MouseCursor {
    static ['_#_#tearOff']() {
      return new mouse_cursor._DeferringMouseCursor.__();
    }
    createSession(device) {
      if (!false) dart.assertFailed("_DeferringMouseCursor can not create a session", I[0], 255, 12, "false");
      dart.throw(new core.UnimplementedError.new());
    }
    get debugDescription() {
      return "defer";
    }
    static firstNonDeferred(cursors) {
      for (let cursor of cursors) {
        if (!(cursor !== null)) dart.assertFailed(null, I[0], 265, 14, "cursor != null");
        if (!cursor[$_equals](mouse_cursor.MouseCursor.defer)) {
          return cursor;
        }
      }
      return null;
    }
  };
  (mouse_cursor._DeferringMouseCursor.__ = function() {
    mouse_cursor._DeferringMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = mouse_cursor._DeferringMouseCursor.prototype;
  dart.addTypeTests(mouse_cursor._DeferringMouseCursor);
  dart.addTypeCaches(mouse_cursor._DeferringMouseCursor);
  dart.setMethodSignature(mouse_cursor._DeferringMouseCursor, () => ({
    __proto__: dart.getMethods(mouse_cursor._DeferringMouseCursor.__proto__),
    createSession: dart.fnType(mouse_cursor.MouseCursorSession, [core.int])
  }));
  dart.setStaticMethodSignature(mouse_cursor._DeferringMouseCursor, () => ['firstNonDeferred']);
  dart.setGetterSignature(mouse_cursor._DeferringMouseCursor, () => ({
    __proto__: dart.getGetters(mouse_cursor._DeferringMouseCursor.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(mouse_cursor._DeferringMouseCursor, I[1]);
  mouse_cursor._NoopMouseCursorSession = class _NoopMouseCursorSession extends mouse_cursor.MouseCursorSession {
    static ['_#new#tearOff'](cursor, device) {
      return new mouse_cursor._NoopMouseCursorSession.new(cursor, device);
    }
    activate() {
      return async.async(dart.void, function* activate() {
      });
    }
    dispose() {
    }
  };
  (mouse_cursor._NoopMouseCursorSession.new = function(cursor, device) {
    mouse_cursor._NoopMouseCursorSession.__proto__.new.call(this, cursor, device);
    ;
  }).prototype = mouse_cursor._NoopMouseCursorSession.prototype;
  dart.addTypeTests(mouse_cursor._NoopMouseCursorSession);
  dart.addTypeCaches(mouse_cursor._NoopMouseCursorSession);
  dart.setMethodSignature(mouse_cursor._NoopMouseCursorSession, () => ({
    __proto__: dart.getMethods(mouse_cursor._NoopMouseCursorSession.__proto__),
    activate: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(mouse_cursor._NoopMouseCursorSession, I[1]);
  mouse_cursor._NoopMouseCursor = class _NoopMouseCursor extends mouse_cursor.MouseCursor {
    static ['_#_#tearOff']() {
      return new mouse_cursor._NoopMouseCursor.__();
    }
    createSession(device) {
      return new mouse_cursor._NoopMouseCursorSession.new(this, device);
    }
    get debugDescription() {
      return "uncontrolled";
    }
  };
  (mouse_cursor._NoopMouseCursor.__ = function() {
    mouse_cursor._NoopMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = mouse_cursor._NoopMouseCursor.prototype;
  dart.addTypeTests(mouse_cursor._NoopMouseCursor);
  dart.addTypeCaches(mouse_cursor._NoopMouseCursor);
  dart.setMethodSignature(mouse_cursor._NoopMouseCursor, () => ({
    __proto__: dart.getMethods(mouse_cursor._NoopMouseCursor.__proto__),
    createSession: dart.fnType(mouse_cursor._NoopMouseCursorSession, [core.int])
  }));
  dart.setGetterSignature(mouse_cursor._NoopMouseCursor, () => ({
    __proto__: dart.getGetters(mouse_cursor._NoopMouseCursor.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(mouse_cursor._NoopMouseCursor, I[1]);
  mouse_cursor._SystemMouseCursorSession = class _SystemMouseCursorSession extends mouse_cursor.MouseCursorSession {
    static ['_#new#tearOff'](cursor, device) {
      return new mouse_cursor._SystemMouseCursorSession.new(cursor, device);
    }
    get cursor() {
      return mouse_cursor.SystemMouseCursor.as(super.cursor);
    }
    activate() {
      return system_channels.SystemChannels.mouseCursor.invokeMethod(dart.void, "activateSystemCursor", new (T.IdentityMapOfString$dynamic()).from(["device", this.device, "kind", this.cursor.kind]));
    }
    dispose() {
    }
  };
  (mouse_cursor._SystemMouseCursorSession.new = function(cursor, device) {
    mouse_cursor._SystemMouseCursorSession.__proto__.new.call(this, cursor, device);
    ;
  }).prototype = mouse_cursor._SystemMouseCursorSession.prototype;
  dart.addTypeTests(mouse_cursor._SystemMouseCursorSession);
  dart.addTypeCaches(mouse_cursor._SystemMouseCursorSession);
  dart.setMethodSignature(mouse_cursor._SystemMouseCursorSession, () => ({
    __proto__: dart.getMethods(mouse_cursor._SystemMouseCursorSession.__proto__),
    activate: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(mouse_cursor._SystemMouseCursorSession, () => ({
    __proto__: dart.getGetters(mouse_cursor._SystemMouseCursorSession.__proto__),
    cursor: mouse_cursor.SystemMouseCursor
  }));
  dart.setLibraryUri(mouse_cursor._SystemMouseCursorSession, I[1]);
  var kind$ = dart.privateName(mouse_cursor, "SystemMouseCursor.kind");
  mouse_cursor.SystemMouseCursor = class SystemMouseCursor extends mouse_cursor.MouseCursor {
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    static ['_#_#tearOff'](opts) {
      let kind = opts && 'kind' in opts ? opts.kind : null;
      return new mouse_cursor.SystemMouseCursor.__({kind: kind});
    }
    get debugDescription() {
      return object.objectRuntimeType(this, "SystemMouseCursor") + "(" + this.kind + ")";
    }
    createSession(device) {
      return new mouse_cursor._SystemMouseCursorSession.new(this, device);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return mouse_cursor.SystemMouseCursor.is(other) && other.kind === this.kind;
    }
    get hashCode() {
      return this.kind[$hashCode];
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfString()).new("kind", this.kind, {level: diagnostics.DiagnosticLevel.debug}));
    }
  };
  (mouse_cursor.SystemMouseCursor.__ = function(opts) {
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[kind$] = kind;
    if (!(kind !== null)) dart.assertFailed(null, I[0], 361, 15, "kind != null");
    mouse_cursor.SystemMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = mouse_cursor.SystemMouseCursor.prototype;
  dart.addTypeTests(mouse_cursor.SystemMouseCursor);
  dart.addTypeCaches(mouse_cursor.SystemMouseCursor);
  dart.setMethodSignature(mouse_cursor.SystemMouseCursor, () => ({
    __proto__: dart.getMethods(mouse_cursor.SystemMouseCursor.__proto__),
    createSession: dart.fnType(mouse_cursor.MouseCursorSession, [core.int])
  }));
  dart.setGetterSignature(mouse_cursor.SystemMouseCursor, () => ({
    __proto__: dart.getGetters(mouse_cursor.SystemMouseCursor.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(mouse_cursor.SystemMouseCursor, I[1]);
  dart.setFieldSignature(mouse_cursor.SystemMouseCursor, () => ({
    __proto__: dart.getFields(mouse_cursor.SystemMouseCursor.__proto__),
    kind: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(mouse_cursor.SystemMouseCursor, ['_equals']);
  dart.defineExtensionAccessors(mouse_cursor.SystemMouseCursor, ['hashCode']);
  mouse_cursor.SystemMouseCursors = class SystemMouseCursors extends core.Object {
    static ['_#_#tearOff']() {
      return new mouse_cursor.SystemMouseCursors.__();
    }
  };
  (mouse_cursor.SystemMouseCursors.__ = function() {
    ;
  }).prototype = mouse_cursor.SystemMouseCursors.prototype;
  dart.addTypeTests(mouse_cursor.SystemMouseCursors);
  dart.addTypeCaches(mouse_cursor.SystemMouseCursors);
  dart.setLibraryUri(mouse_cursor.SystemMouseCursors, I[1]);
  dart.setStaticFieldSignature(mouse_cursor.SystemMouseCursors, () => ['none', 'basic', 'click', 'forbidden', 'wait', 'progress', 'contextMenu', 'help', 'text', 'verticalText', 'cell', 'precise', 'move', 'grab', 'grabbing', 'noDrop', 'alias', 'copy', 'disappearing', 'allScroll', 'resizeLeftRight', 'resizeUpDown', 'resizeUpLeftDownRight', 'resizeUpRightDownLeft', 'resizeUp', 'resizeDown', 'resizeLeft', 'resizeRight', 'resizeUpLeft', 'resizeUpRight', 'resizeDownLeft', 'resizeDownRight', 'resizeColumn', 'resizeRow', 'zoomIn', 'zoomOut']);
  dart.defineLazy(mouse_cursor.SystemMouseCursors, {
    /*mouse_cursor.SystemMouseCursors.none*/get none() {
      return C[3] || CT.C3;
    },
    /*mouse_cursor.SystemMouseCursors.basic*/get basic() {
      return C[4] || CT.C4;
    },
    /*mouse_cursor.SystemMouseCursors.click*/get click() {
      return C[5] || CT.C5;
    },
    /*mouse_cursor.SystemMouseCursors.forbidden*/get forbidden() {
      return C[6] || CT.C6;
    },
    /*mouse_cursor.SystemMouseCursors.wait*/get wait() {
      return C[7] || CT.C7;
    },
    /*mouse_cursor.SystemMouseCursors.progress*/get progress() {
      return C[8] || CT.C8;
    },
    /*mouse_cursor.SystemMouseCursors.contextMenu*/get contextMenu() {
      return C[9] || CT.C9;
    },
    /*mouse_cursor.SystemMouseCursors.help*/get help() {
      return C[10] || CT.C10;
    },
    /*mouse_cursor.SystemMouseCursors.text*/get text() {
      return C[11] || CT.C11;
    },
    /*mouse_cursor.SystemMouseCursors.verticalText*/get verticalText() {
      return C[12] || CT.C12;
    },
    /*mouse_cursor.SystemMouseCursors.cell*/get cell() {
      return C[13] || CT.C13;
    },
    /*mouse_cursor.SystemMouseCursors.precise*/get precise() {
      return C[14] || CT.C14;
    },
    /*mouse_cursor.SystemMouseCursors.move*/get move() {
      return C[15] || CT.C15;
    },
    /*mouse_cursor.SystemMouseCursors.grab*/get grab() {
      return C[16] || CT.C16;
    },
    /*mouse_cursor.SystemMouseCursors.grabbing*/get grabbing() {
      return C[17] || CT.C17;
    },
    /*mouse_cursor.SystemMouseCursors.noDrop*/get noDrop() {
      return C[18] || CT.C18;
    },
    /*mouse_cursor.SystemMouseCursors.alias*/get alias() {
      return C[19] || CT.C19;
    },
    /*mouse_cursor.SystemMouseCursors.copy*/get copy() {
      return C[20] || CT.C20;
    },
    /*mouse_cursor.SystemMouseCursors.disappearing*/get disappearing() {
      return C[21] || CT.C21;
    },
    /*mouse_cursor.SystemMouseCursors.allScroll*/get allScroll() {
      return C[22] || CT.C22;
    },
    /*mouse_cursor.SystemMouseCursors.resizeLeftRight*/get resizeLeftRight() {
      return C[23] || CT.C23;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpDown*/get resizeUpDown() {
      return C[24] || CT.C24;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpLeftDownRight*/get resizeUpLeftDownRight() {
      return C[25] || CT.C25;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpRightDownLeft*/get resizeUpRightDownLeft() {
      return C[26] || CT.C26;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUp*/get resizeUp() {
      return C[27] || CT.C27;
    },
    /*mouse_cursor.SystemMouseCursors.resizeDown*/get resizeDown() {
      return C[28] || CT.C28;
    },
    /*mouse_cursor.SystemMouseCursors.resizeLeft*/get resizeLeft() {
      return C[29] || CT.C29;
    },
    /*mouse_cursor.SystemMouseCursors.resizeRight*/get resizeRight() {
      return C[30] || CT.C30;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpLeft*/get resizeUpLeft() {
      return C[31] || CT.C31;
    },
    /*mouse_cursor.SystemMouseCursors.resizeUpRight*/get resizeUpRight() {
      return C[32] || CT.C32;
    },
    /*mouse_cursor.SystemMouseCursors.resizeDownLeft*/get resizeDownLeft() {
      return C[33] || CT.C33;
    },
    /*mouse_cursor.SystemMouseCursors.resizeDownRight*/get resizeDownRight() {
      return C[34] || CT.C34;
    },
    /*mouse_cursor.SystemMouseCursors.resizeColumn*/get resizeColumn() {
      return C[35] || CT.C35;
    },
    /*mouse_cursor.SystemMouseCursors.resizeRow*/get resizeRow() {
      return C[36] || CT.C36;
    },
    /*mouse_cursor.SystemMouseCursors.zoomIn*/get zoomIn() {
      return C[37] || CT.C37;
    },
    /*mouse_cursor.SystemMouseCursors.zoomOut*/get zoomOut() {
      return C[38] || CT.C38;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/services/mouse_cursor.dart", {
    "package:flutter/src/services/mouse_cursor.dart": mouse_cursor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mouse_cursor.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/services/mouse_cursor.dart.lib.js"}');
  // Exports:
  return {
    src__services__mouse_cursor: mouse_cursor
  };
}));

//# sourceMappingURL=mouse_cursor.dart.lib.js.map