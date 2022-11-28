define(['dart_sdk', 'packages/flutter/src/gestures/debug.dart', 'packages/flutter/src/foundation/print.dart'], (function load__packages__flutter__src__gestures__arena_dart(dart_sdk, packages__flutter__src__gestures__debug$46dart, packages__flutter__src__foundation__print$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__gestures__debug$46dart.src__gestures__debug;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  var arena = Object.create(dart.library);
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $_equals = dartx._equals;
  var $map = dartx.map;
  var $join = dartx.join;
  var $putIfAbsent = dartx.putIfAbsent;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $length = dartx.length;
  var $contains = dartx.contains;
  var $containsKey = dartx.containsKey;
  var $toString = dartx.toString;
  var $padRight = dartx.padRight;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfGestureArenaMember: () => (T.JSArrayOfGestureArenaMember = dart.constFn(_interceptors.JSArray$(arena.GestureArenaMember)))(),
    GestureArenaMemberToString: () => (T.GestureArenaMemberToString = dart.constFn(dart.fnType(core.String, [arena.GestureArenaMember])))(),
    IdentityMapOfint$_GestureArena: () => (T.IdentityMapOfint$_GestureArena = dart.constFn(_js_helper.IdentityMap$(core.int, arena._GestureArena)))(),
    VoidTo_GestureArena: () => (T.VoidTo_GestureArena = dart.constFn(dart.fnType(arena._GestureArena, [])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: arena.GestureDisposition.prototype,
        [_Enum__name]: "accepted",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: arena.GestureDisposition.prototype,
        [_Enum__name]: "rejected",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], arena.GestureDisposition);
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "package:flutter/src/gestures/arena.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/gestures/arena.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  arena.GestureDisposition = class GestureDisposition extends core._Enum {
    toString() {
      return "GestureDisposition." + this[_name];
    }
  };
  (arena.GestureDisposition.new = function(index, name) {
    arena.GestureDisposition.__proto__.new.call(this, index, name);
    ;
  }).prototype = arena.GestureDisposition.prototype;
  dart.addTypeTests(arena.GestureDisposition);
  dart.addTypeCaches(arena.GestureDisposition);
  dart.setLibraryUri(arena.GestureDisposition, I[0]);
  dart.setStaticFieldSignature(arena.GestureDisposition, () => ['values', 'accepted', 'rejected']);
  dart.defineExtensionMethods(arena.GestureDisposition, ['toString']);
  dart.defineLazy(arena.GestureDisposition, {
    /*arena.GestureDisposition.values*/get values() {
      return C[0] || CT.C0;
    },
    /*arena.GestureDisposition.accepted*/get accepted() {
      return C[1] || CT.C1;
    },
    /*arena.GestureDisposition.rejected*/get rejected() {
      return C[2] || CT.C2;
    }
  }, false);
  arena.GestureArenaMember = class GestureArenaMember extends core.Object {};
  (arena.GestureArenaMember.new = function() {
    ;
  }).prototype = arena.GestureArenaMember.prototype;
  dart.addTypeTests(arena.GestureArenaMember);
  dart.addTypeCaches(arena.GestureArenaMember);
  dart.setLibraryUri(arena.GestureArenaMember, I[0]);
  var _arena$ = dart.privateName(arena, "_arena");
  var _pointer$ = dart.privateName(arena, "_pointer");
  var _member$ = dart.privateName(arena, "_member");
  var _resolve = dart.privateName(arena, "_resolve");
  arena.GestureArenaEntry = class GestureArenaEntry extends core.Object {
    static ['_#_#tearOff'](_arena, _pointer, _member) {
      return new arena.GestureArenaEntry.__(_arena, _pointer, _member);
    }
    resolve(disposition) {
      this[_arena$][_resolve](this[_pointer$], this[_member$], disposition);
    }
  };
  (arena.GestureArenaEntry.__ = function(_arena, _pointer, _member) {
    this[_arena$] = _arena;
    this[_pointer$] = _pointer;
    this[_member$] = _member;
    ;
  }).prototype = arena.GestureArenaEntry.prototype;
  dart.addTypeTests(arena.GestureArenaEntry);
  dart.addTypeCaches(arena.GestureArenaEntry);
  dart.setMethodSignature(arena.GestureArenaEntry, () => ({
    __proto__: dart.getMethods(arena.GestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setLibraryUri(arena.GestureArenaEntry, I[0]);
  dart.setFieldSignature(arena.GestureArenaEntry, () => ({
    __proto__: dart.getFields(arena.GestureArenaEntry.__proto__),
    [_arena$]: dart.finalFieldType(arena.GestureArenaManager),
    [_pointer$]: dart.finalFieldType(core.int),
    [_member$]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  arena._GestureArena = class _GestureArena extends core.Object {
    add(member) {
      if (!this.isOpen) dart.assertFailed(null, I[1], 70, 12, "isOpen");
      this.members[$add](member);
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      if (this.members[$isEmpty]) {
        buffer.write("<empty>");
      } else {
        buffer.write(this.members[$map](core.String, dart.fn(member => {
          if (member[$_equals](this.eagerWinner)) {
            return dart.str(member) + " (eager winner)";
          }
          return dart.str(member);
        }, T.GestureArenaMemberToString()))[$join](", "));
      }
      if (this.isOpen) {
        buffer.write(" [open]");
      }
      if (this.isHeld) {
        buffer.write(" [held]");
      }
      if (this.hasPendingSweep) {
        buffer.write(" [hasPendingSweep]");
      }
      return buffer.toString();
    }
    static ['_#new#tearOff']() {
      return new arena._GestureArena.new();
    }
  };
  (arena._GestureArena.new = function() {
    this.members = T.JSArrayOfGestureArenaMember().of([]);
    this.isOpen = true;
    this.isHeld = false;
    this.hasPendingSweep = false;
    this.eagerWinner = null;
    ;
  }).prototype = arena._GestureArena.prototype;
  dart.addTypeTests(arena._GestureArena);
  dart.addTypeCaches(arena._GestureArena);
  dart.setMethodSignature(arena._GestureArena, () => ({
    __proto__: dart.getMethods(arena._GestureArena.__proto__),
    add: dart.fnType(dart.void, [arena.GestureArenaMember])
  }));
  dart.setLibraryUri(arena._GestureArena, I[0]);
  dart.setFieldSignature(arena._GestureArena, () => ({
    __proto__: dart.getFields(arena._GestureArena.__proto__),
    members: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    isOpen: dart.fieldType(core.bool),
    isHeld: dart.fieldType(core.bool),
    hasPendingSweep: dart.fieldType(core.bool),
    eagerWinner: dart.fieldType(dart.nullable(arena.GestureArenaMember))
  }));
  dart.defineExtensionMethods(arena._GestureArena, ['toString']);
  var _arenas = dart.privateName(arena, "_arenas");
  var _debugLogDiagnostic = dart.privateName(arena, "_debugLogDiagnostic");
  var _tryToResolveArena = dart.privateName(arena, "_tryToResolveArena");
  var _resolveInFavorOf = dart.privateName(arena, "_resolveInFavorOf");
  var _resolveByDefault = dart.privateName(arena, "_resolveByDefault");
  arena.GestureArenaManager = class GestureArenaManager extends core.Object {
    add(pointer, member) {
      let state = this[_arenas][$putIfAbsent](pointer, dart.fn(() => {
        if (!this[_debugLogDiagnostic](pointer, "★ Opening new gesture arena.")) dart.assertFailed(null, I[1], 113, 14, "_debugLogDiagnostic(pointer, '★ Opening new gesture arena.')");
        return new arena._GestureArena.new();
      }, T.VoidTo_GestureArena()));
      state.add(member);
      if (!this[_debugLogDiagnostic](pointer, "Adding: " + dart.str(member))) dart.assertFailed(null, I[1], 117, 12, "_debugLogDiagnostic(pointer, 'Adding: $member')");
      return new arena.GestureArenaEntry.__(this, pointer, member);
    }
    close(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) {
        return;
      }
      state.isOpen = false;
      if (!this[_debugLogDiagnostic](pointer, "Closing", state)) dart.assertFailed(null, I[1], 130, 12, "_debugLogDiagnostic(pointer, 'Closing', state)");
      this[_tryToResolveArena](pointer, state);
    }
    sweep(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) {
        return;
      }
      if (!!state.isOpen) dart.assertFailed(null, I[1], 152, 12, "!state.isOpen");
      if (state.isHeld) {
        state.hasPendingSweep = true;
        if (!this[_debugLogDiagnostic](pointer, "Delaying sweep", state)) dart.assertFailed(null, I[1], 155, 14, "_debugLogDiagnostic(pointer, 'Delaying sweep', state)");
        return;
      }
      if (!this[_debugLogDiagnostic](pointer, "Sweeping", state)) dart.assertFailed(null, I[1], 158, 12, "_debugLogDiagnostic(pointer, 'Sweeping', state)");
      this[_arenas][$remove](pointer);
      if (state.members[$isNotEmpty]) {
        if (!this[_debugLogDiagnostic](pointer, "Winner: " + dart.str(state.members[$first]))) dart.assertFailed(null, I[1], 162, 14, "_debugLogDiagnostic(pointer, 'Winner: ${state.members.first}')");
        state.members[$first].acceptGesture(pointer);
        for (let i = 1; i < state.members[$length]; i = i + 1) {
          state.members[$_get](i).rejectGesture(pointer);
        }
      }
    }
    hold(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) {
        return;
      }
      state.isHeld = true;
      if (!this[_debugLogDiagnostic](pointer, "Holding", state)) dart.assertFailed(null, I[1], 189, 12, "_debugLogDiagnostic(pointer, 'Holding', state)");
    }
    release(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) {
        return;
      }
      state.isHeld = false;
      if (!this[_debugLogDiagnostic](pointer, "Releasing", state)) dart.assertFailed(null, I[1], 207, 12, "_debugLogDiagnostic(pointer, 'Releasing', state)");
      if (state.hasPendingSweep) {
        this.sweep(pointer);
      }
    }
    [_resolve](pointer, member, disposition) {
      let t2;
      let state = this[_arenas][$_get](pointer);
      if (state == null) {
        return;
      }
      if (!this[_debugLogDiagnostic](pointer, (disposition === arena.GestureDisposition.accepted ? "Accepting" : "Rejecting") + ": " + dart.str(member))) dart.assertFailed(null, I[1], 221, 12, "_debugLogDiagnostic(pointer, '${ disposition == GestureDisposition.accepted ? \"Accepting\" : \"Rejecting\" }: $member')");
      if (!state.members[$contains](member)) dart.assertFailed(null, I[1], 222, 12, "state.members.contains(member)");
      if (disposition === arena.GestureDisposition.rejected) {
        state.members[$remove](member);
        member.rejectGesture(pointer);
        if (!state.isOpen) {
          this[_tryToResolveArena](pointer, state);
        }
      } else {
        if (!(disposition === arena.GestureDisposition.accepted)) dart.assertFailed(null, I[1], 230, 14, "disposition == GestureDisposition.accepted");
        if (state.isOpen) {
          t2 = state;
          t2.eagerWinner == null ? t2.eagerWinner = member : null;
        } else {
          if (!this[_debugLogDiagnostic](pointer, "Self-declared winner: " + dart.str(member))) dart.assertFailed(null, I[1], 234, 16, "_debugLogDiagnostic(pointer, 'Self-declared winner: $member')");
          this[_resolveInFavorOf](pointer, state, member);
        }
      }
    }
    [_tryToResolveArena](pointer, state) {
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, I[1], 241, 12, "_arenas[pointer] == state");
      if (!!state.isOpen) dart.assertFailed(null, I[1], 242, 12, "!state.isOpen");
      if (state.members[$length] === 1) {
        async.scheduleMicrotask(dart.fn(() => this[_resolveByDefault](pointer, state), T.VoidTovoid()));
      } else if (state.members[$isEmpty]) {
        this[_arenas][$remove](pointer);
        if (!this[_debugLogDiagnostic](pointer, "Arena empty.")) dart.assertFailed(null, I[1], 247, 14, "_debugLogDiagnostic(pointer, 'Arena empty.')");
      } else if (state.eagerWinner != null) {
        if (!this[_debugLogDiagnostic](pointer, "Eager winner: " + dart.str(state.eagerWinner))) dart.assertFailed(null, I[1], 249, 14, "_debugLogDiagnostic(pointer, 'Eager winner: ${state.eagerWinner}')");
        this[_resolveInFavorOf](pointer, state, dart.nullCheck(state.eagerWinner));
      }
    }
    [_resolveByDefault](pointer, state) {
      if (!this[_arenas][$containsKey](pointer)) {
        return;
      }
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, I[1], 258, 12, "_arenas[pointer] == state");
      if (!!state.isOpen) dart.assertFailed(null, I[1], 259, 12, "!state.isOpen");
      let members = state.members;
      if (!(members[$length] === 1)) dart.assertFailed(null, I[1], 261, 12, "members.length == 1");
      this[_arenas][$remove](pointer);
      if (!this[_debugLogDiagnostic](pointer, "Default winner: " + dart.str(state.members[$first]))) dart.assertFailed(null, I[1], 263, 12, "_debugLogDiagnostic(pointer, 'Default winner: ${state.members.first}')");
      state.members[$first].acceptGesture(pointer);
    }
    [_resolveInFavorOf](pointer, state, member) {
      if (!state[$_equals](this[_arenas][$_get](pointer))) dart.assertFailed(null, I[1], 268, 12, "state == _arenas[pointer]");
      if (!(state !== null)) dart.assertFailed(null, I[1], 269, 12, "state != null");
      if (!(state.eagerWinner == null || dart.equals(state.eagerWinner, member))) dart.assertFailed(null, I[1], 270, 12, "state.eagerWinner == null || state.eagerWinner == member");
      if (!!state.isOpen) dart.assertFailed(null, I[1], 271, 12, "!state.isOpen");
      this[_arenas][$remove](pointer);
      for (let rejectedMember of state.members) {
        if (!rejectedMember[$_equals](member)) {
          rejectedMember.rejectGesture(pointer);
        }
      }
      member.acceptGesture(pointer);
    }
    [_debugLogDiagnostic](pointer, message, state = null) {
      if (!dart.fn(() => {
        let t2;
        if (debug.debugPrintGestureArenaDiagnostics) {
          let count = (t2 = state, t2 == null ? null : t2.members[$length]);
          let s = count !== 1 ? "s" : "";
          print.debugPrint("Gesture arena " + pointer[$toString]()[$padRight](4) + " ❙ " + message + (count != null ? " with " + dart.str(count) + " member" + s + "." : ""));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 282, 12, "() {\n      if (debugPrintGestureArenaDiagnostics) {\n        final int? count = state?.members.length;\n        final String s = count != 1 ? 's' : '';\n        debugPrint('Gesture arena ${pointer.toString().padRight(4)} ❙ $message${ count != null ? \" with $count member$s.\" : \"\"}');\n      }\n      return true;\n    }()");
      return true;
    }
    static ['_#new#tearOff']() {
      return new arena.GestureArenaManager.new();
    }
  };
  (arena.GestureArenaManager.new = function() {
    this[_arenas] = new (T.IdentityMapOfint$_GestureArena()).new();
    ;
  }).prototype = arena.GestureArenaManager.prototype;
  dart.addTypeTests(arena.GestureArenaManager);
  dart.addTypeCaches(arena.GestureArenaManager);
  dart.setMethodSignature(arena.GestureArenaManager, () => ({
    __proto__: dart.getMethods(arena.GestureArenaManager.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    close: dart.fnType(dart.void, [core.int]),
    sweep: dart.fnType(dart.void, [core.int]),
    hold: dart.fnType(dart.void, [core.int]),
    release: dart.fnType(dart.void, [core.int]),
    [_resolve]: dart.fnType(dart.void, [core.int, arena.GestureArenaMember, arena.GestureDisposition]),
    [_tryToResolveArena]: dart.fnType(dart.void, [core.int, arena._GestureArena]),
    [_resolveByDefault]: dart.fnType(dart.void, [core.int, arena._GestureArena]),
    [_resolveInFavorOf]: dart.fnType(dart.void, [core.int, arena._GestureArena, arena.GestureArenaMember]),
    [_debugLogDiagnostic]: dart.fnType(core.bool, [core.int, core.String], [dart.nullable(arena._GestureArena)])
  }));
  dart.setLibraryUri(arena.GestureArenaManager, I[0]);
  dart.setFieldSignature(arena.GestureArenaManager, () => ({
    __proto__: dart.getFields(arena.GestureArenaManager.__proto__),
    [_arenas]: dart.finalFieldType(core.Map$(core.int, arena._GestureArena))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/arena.dart", {
    "package:flutter/src/gestures/arena.dart": arena
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["arena.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBA;;;;;;;;;;;;MANK,+BAAM;;;MAET,iCAAQ;;;MAGR,iCAAQ;;;;;;;EAiBV;;;;;;;;;;;;YAiBkC;AACiB,MAA/C,AAAO,wBAAS,iBAAU,gBAAS,WAAW;IAChD;;yCAZyB,QAAa,UAAe;IAA5B;IAAa;IAAe;;EAAQ;;;;;;;;;;;;;;;QA2BjC;AAC1B,WAAO;AACY,MAAnB,AAAQ,mBAAI,MAAM;IACpB;;AAIqB,mBAAS;AAC5B,UAAI,AAAQ;AACa,QAAvB,AAAO,MAAD,OAAO;;AAOC,QALd,AAAO,MAAD,OAAO,AAAQ,AAKlB,gCAL8B,QAAoB;AACnD,cAAI,AAAO,MAAD,WAAI;AACZ,kBAA+B,UAAtB,MAAM;;AAEjB,gBAAgB,UAAP,MAAM;mDACT;;AAEV,UAAI;AACqB,QAAvB,AAAO,MAAD,OAAO;;AAEf,UAAI;AACqB,QAAvB,AAAO,MAAD,OAAO;;AAEf,UAAI;AACgC,QAAlC,AAAO,MAAD,OAAO;;AAEf,YAAO,AAAO,OAAD;IACf;;;;;;IAvC+B,eAA8B;IACxD,cAAS;IACT,cAAS;IACT,uBAAkB;IAMH;;EA+BtB;;;;;;;;;;;;;;;;;;;;;;;QAa4B,SAA4B;AAChC,kBAAQ,AAAQ,4BAAY,OAAO,EAAE;AACvD,aAAO,0BAAoB,OAAO,EAAE;AACpC,cAAO;;AAEQ,MAAjB,AAAM,KAAD,KAAK,MAAM;AAChB,WAAO,0BAAoB,OAAO,EAAE,AAAiB,sBAAP,MAAM;AACpD,YAAyB,gCAAE,MAAM,OAAO,EAAE,MAAM;IAClD;UAKe;AACQ,kBAAQ,AAAO,qBAAC,OAAO;AAC5C,UAAI,AAAM,KAAD;AACP;;AAEkB,MAApB,AAAM,KAAD,UAAU;AACf,WAAO,0BAAoB,OAAO,EAAE,WAAW,KAAK;AAClB,MAAlC,yBAAmB,OAAO,EAAE,KAAK;IACnC;UAee;AACQ,kBAAQ,AAAO,qBAAC,OAAO;AAC5C,UAAI,AAAM,KAAD;AACP;;AAEF,YAAQ,AAAM,KAAD;AACb,UAAI,AAAM,KAAD;AACqB,QAA5B,AAAM,KAAD,mBAAmB;AACxB,aAAO,0BAAoB,OAAO,EAAE,kBAAkB,KAAK;AAC3D;;AAEF,WAAO,0BAAoB,OAAO,EAAE,YAAY,KAAK;AAC9B,MAAvB,AAAQ,uBAAO,OAAO;AACtB,UAAI,AAAM,AAAQ,KAAT;AAEP,aAAO,0BAAoB,OAAO,EAAE,AAAgC,sBAArB,AAAM,AAAQ,KAAT;AACV,QAA1C,AAAM,AAAQ,AAAM,KAAf,+BAA6B,OAAO;AAEzC,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAM,AAAQ,KAAT,mBAAiB,IAAA,AAAC,CAAA;AACF,UAAvC,AAAM,AAAO,AAAI,KAAZ,gBAAS,CAAC,gBAAgB,OAAO;;;IAG5C;SAcc;AACS,kBAAQ,AAAO,qBAAC,OAAO;AAC5C,UAAI,AAAM,KAAD;AACP;;AAEiB,MAAnB,AAAM,KAAD,UAAU;AACf,WAAO,0BAAoB,OAAO,EAAE,WAAW,KAAK;IACtD;YAWiB;AACM,kBAAQ,AAAO,qBAAC,OAAO;AAC5C,UAAI,AAAM,KAAD;AACP;;AAEkB,MAApB,AAAM,KAAD,UAAU;AACf,WAAO,0BAAoB,OAAO,EAAE,aAAa,KAAK;AACtD,UAAI,AAAM,KAAD;AACO,QAAd,WAAM,OAAO;;IAEjB;eAKkB,SAA4B,QAA2B;;AAClD,kBAAQ,AAAO,qBAAC,OAAO;AAC5C,UAAI,AAAM,KAAD;AACP;;AAEF,WAAO,0BAAoB,OAAO,EAAwF,CAAlF,AAAY,WAAD,KAAuB,oCAAW,cAAc,eAAa,gBAAG,MAAM;AACzH,WAAO,AAAM,AAAQ,KAAT,oBAAkB,MAAM;AACpC,UAAI,AAAY,WAAD,KAAuB;AACR,QAA5B,AAAM,AAAQ,KAAT,kBAAgB,MAAM;AACE,QAA7B,AAAO,MAAD,eAAe,OAAO;AAC5B,aAAK,AAAM,KAAD;AAC0B,UAAlC,yBAAmB,OAAO,EAAE,KAAK;;;AAGnC,cAAO,AAAY,WAAD,KAAuB;AACzC,YAAI,AAAM,KAAD;AACqB,eAA5B,KAAK;UAAa,yBAAZ,iBAAgB,MAAM,GAAV;;AAElB,eAAO,0BAAoB,OAAO,EAAE,AAA+B,oCAAP,MAAM;AACzB,UAAzC,wBAAkB,OAAO,EAAE,KAAK,EAAE,MAAM;;;IAG9C;yBAE4B,SAAuB;AACjD,WAAwB,YAAjB,AAAO,qBAAC,OAAO,GAAK,KAAK;AAChC,YAAQ,AAAM,KAAD;AACb,UAAI,AAAM,AAAQ,AAAO,KAAhB,sBAAmB;AACgC,QAA1D,wBAAkB,cAAM,wBAAkB,OAAO,EAAE,KAAK;YACnD,KAAI,AAAM,AAAQ,KAAT;AACS,QAAvB,AAAQ,uBAAO,OAAO;AACtB,aAAO,0BAAoB,OAAO,EAAE;YAC/B,KAAI,AAAM,KAAD;AACd,aAAO,0BAAoB,OAAO,EAAE,AAAoC,4BAAnB,AAAM,KAAD;AACL,QAArD,wBAAkB,OAAO,EAAE,KAAK,EAAmB,eAAjB,AAAM,KAAD;;IAE3C;wBAE2B,SAAuB;AAChD,WAAK,AAAQ,4BAAY,OAAO;AAC9B;;AAEF,WAAwB,YAAjB,AAAO,qBAAC,OAAO,GAAK,KAAK;AAChC,YAAQ,AAAM,KAAD;AACkB,oBAAU,AAAM,KAAD;AAC9C,YAAO,AAAQ,AAAO,OAAR,cAAW;AACF,MAAvB,AAAQ,uBAAO,OAAO;AACtB,WAAO,0BAAoB,OAAO,EAAE,AAAwC,8BAArB,AAAM,AAAQ,KAAT;AAClB,MAA1C,AAAM,AAAQ,AAAM,KAAf,+BAA6B,OAAO;IAC3C;wBAE2B,SAAuB,OAA0B;AAC1E,WAAO,AAAM,KAAD,WAAI,AAAO,qBAAC,OAAO;AAC/B,YAAO,AAAM,KAAD;AACZ,YAAO,AAAM,AAAY,AAAQ,KAArB,wBAA0C,YAAlB,AAAM,KAAD,cAAgB,MAAM;AAC/D,YAAQ,AAAM,KAAD;AACU,MAAvB,AAAQ,uBAAO,OAAO;AACtB,eAA8B,iBAAkB,AAAM,MAAD;AACnD,aAAI,cAAc,WAAI,MAAM;AACW,UAArC,AAAe,cAAD,eAAe,OAAO;;;AAGX,MAA7B,AAAO,MAAD,eAAe,OAAO;IAC9B;0BAE6B,SAAgB,SAA0B;AACrE,WAAO,AAON;;AANC,YAAI;AACS,4BAAQ,KAAK,eAAL,OAAO,AAAQ;AACrB,kBAAI,AAAM,KAAD,KAAI,IAAI,MAAM;AACqF,UAAzH,AAAU,iBAAC,AAA6G,mBAA5F,AAAQ,AAAW,OAAZ,yBAAqB,KAAG,QAAI,OAAO,IAAG,AAAM,KAAD,WAAW,AAAyB,oBAAjB,KAAK,gBAAQ,CAAC,SAAK;;AAEtH,cAAO;;AAET,YAAO;IACT;;;;;;IAvL8B,gBAA8B;;EAwL9D","file":"../../../../../../../../../../packages/flutter/src/gestures/arena.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__arena: arena
  };
}));

//# sourceMappingURL=arena.dart.lib.js.map
