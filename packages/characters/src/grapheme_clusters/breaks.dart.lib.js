define(['dart_sdk', 'packages/characters/src/grapheme_clusters/table.dart'], (function load__packages__characters__src__grapheme_clusters__breaks_dart(dart_sdk, packages__characters__src__grapheme_clusters__table$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const table = packages__characters__src__grapheme_clusters__table$46dart.src__grapheme_clusters__table;
  var breaks = Object.create(dart.library);
  var $codeUnitAt = dartx.codeUnitAt;
  var $toRadixString = dartx.toRadixString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:characters/src/grapheme_clusters/breaks.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/characters-1.2.1/lib/src/grapheme_clusters/breaks.dart"
  ];
  var base$ = dart.privateName(breaks, "Breaks.base");
  var end$ = dart.privateName(breaks, "Breaks.end");
  var cursor$ = dart.privateName(breaks, "Breaks.cursor");
  var state$ = dart.privateName(breaks, "Breaks.state");
  breaks.Breaks = class Breaks extends core.Object {
    get base() {
      return this[base$];
    }
    set base(value) {
      super.base = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get cursor() {
      return this[cursor$];
    }
    set cursor(value) {
      this[cursor$] = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      this[state$] = value;
    }
    static ['_#new#tearOff'](base, cursor, end, state) {
      return new breaks.Breaks.new(base, cursor, end, state);
    }
    copy() {
      return new breaks.Breaks.new(this.base, this.cursor, this.end, this.state);
    }
    nextBreak() {
      let t0;
      while (this.cursor < this.end) {
        let breakAt = this.cursor;
        let char = this.base[$codeUnitAt]((t0 = this.cursor, this.cursor = t0 + 1, t0));
        if ((char & 64512) !== 55296) {
          this.state = table.move(this.state, table.low(char));
          if ((this.state & 1) === 0) {
            return breakAt;
          }
          continue;
        }
        let category = 2;
        if (this.cursor < this.end) {
          let nextChar = this.base[$codeUnitAt](this.cursor);
          if ((nextChar & 64512) === 56320) {
            category = table.high(char, nextChar);
            this.cursor = this.cursor + 1;
          }
        }
        this.state = table.move(this.state, category);
        if ((this.state & 1) === 0) {
          return breakAt;
        }
      }
      this.state = table.move(this.state, 15);
      if ((this.state & 1) === 0) return this.cursor;
      return -1;
    }
  };
  (breaks.Breaks.new = function(base, cursor, end, state) {
    this[base$] = base;
    this[cursor$] = cursor;
    this[end$] = end;
    this[state$] = state;
    ;
  }).prototype = breaks.Breaks.prototype;
  dart.addTypeTests(breaks.Breaks);
  dart.addTypeCaches(breaks.Breaks);
  dart.setMethodSignature(breaks.Breaks, () => ({
    __proto__: dart.getMethods(breaks.Breaks.__proto__),
    copy: dart.fnType(breaks.Breaks, []),
    nextBreak: dart.fnType(core.int, [])
  }));
  dart.setLibraryUri(breaks.Breaks, I[0]);
  dart.setFieldSignature(breaks.Breaks, () => ({
    __proto__: dart.getFields(breaks.Breaks.__proto__),
    base: dart.finalFieldType(core.String),
    end: dart.finalFieldType(core.int),
    cursor: dart.fieldType(core.int),
    state: dart.fieldType(core.int)
  }));
  var base$0 = dart.privateName(breaks, "BackBreaks.base");
  var start$ = dart.privateName(breaks, "BackBreaks.start");
  var cursor$0 = dart.privateName(breaks, "BackBreaks.cursor");
  var state$0 = dart.privateName(breaks, "BackBreaks.state");
  var _lookAhead = dart.privateName(breaks, "_lookAhead");
  breaks.BackBreaks = class BackBreaks extends core.Object {
    get base() {
      return this[base$0];
    }
    set base(value) {
      super.base = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get cursor() {
      return this[cursor$0];
    }
    set cursor(value) {
      this[cursor$0] = value;
    }
    get state() {
      return this[state$0];
    }
    set state(value) {
      this[state$0] = value;
    }
    static ['_#new#tearOff'](base, cursor, start, state) {
      return new breaks.BackBreaks.new(base, cursor, start, state);
    }
    copy() {
      return new breaks.BackBreaks.new(this.base, this.cursor, this.start, this.state);
    }
    nextBreak() {
      while (this.cursor > this.start) {
        let breakAt = this.cursor;
        let char = this.base[$codeUnitAt](this.cursor = this.cursor - 1);
        if ((char & 64512) !== 56320) {
          this.state = table.moveBack(this.state, table.low(char));
          if (this.state >= 208) this.state = this[_lookAhead](this.state);
          if ((this.state & 1) === 0) {
            return breakAt;
          }
          continue;
        }
        let category = 2;
        if (this.cursor >= this.start) {
          let prevChar = this.base[$codeUnitAt](this.cursor - 1);
          if ((prevChar & 64512) === 55296) {
            category = table.high(prevChar, char);
            this.cursor = this.cursor - 1;
          }
        }
        this.state = table.moveBack(this.state, category);
        if (this.state >= 208) this.state = this[_lookAhead](this.state);
        if ((this.state & 1) === 0) {
          return breakAt;
        }
      }
      this.state = table.moveBack(this.state, 15);
      if (this.state >= 208) this.state = this[_lookAhead](this.state);
      if ((this.state & 1) === 0) return this.cursor;
      return -1;
    }
    [_lookAhead](state) {
      return breaks.lookAhead(this.base, this.start, this.cursor, state);
    }
  };
  (breaks.BackBreaks.new = function(base, cursor, start, state) {
    this[base$0] = base;
    this[cursor$0] = cursor;
    this[start$] = start;
    this[state$0] = state;
    ;
  }).prototype = breaks.BackBreaks.prototype;
  dart.addTypeTests(breaks.BackBreaks);
  dart.addTypeCaches(breaks.BackBreaks);
  dart.setMethodSignature(breaks.BackBreaks, () => ({
    __proto__: dart.getMethods(breaks.BackBreaks.__proto__),
    copy: dart.fnType(breaks.BackBreaks, []),
    nextBreak: dart.fnType(core.int, []),
    [_lookAhead]: dart.fnType(core.int, [core.int])
  }));
  dart.setLibraryUri(breaks.BackBreaks, I[0]);
  dart.setFieldSignature(breaks.BackBreaks, () => ({
    __proto__: dart.getFields(breaks.BackBreaks.__proto__),
    base: dart.finalFieldType(core.String),
    start: dart.finalFieldType(core.int),
    cursor: dart.fieldType(core.int),
    state: dart.fieldType(core.int)
  }));
  breaks.lookAhead = function lookAhead(base, start, cursor, state) {
    if (!(state >= 208)) dart.assertFailed(null, I[1], 156, 10, "state >= stateLookaheadMin");
    if (state === 208) {
      return breaks.lookAheadRegional(base, start, cursor);
    }
    if (state === 224) {
      let prevPic = breaks.lookAheadPictorgraphicExtend(base, start, cursor);
      if (prevPic >= 0) return (144 | 1) >>> 0;
      return 64;
    }
    dart.throw(new core.StateError.new("Unexpected state: " + state[$toRadixString](16)));
  };
  breaks.lookAheadRegional = function lookAheadRegional(base, start, cursor) {
    let count = 0;
    let index = cursor;
    while (index - 2 >= start) {
      let tail = base[$codeUnitAt](index - 1);
      if ((tail & 64512) !== 56320) break;
      let lead = base[$codeUnitAt](index - 2);
      if ((lead & 64512) !== 55296) break;
      let category = table.high(lead, tail);
      if (category !== 6) break;
      index = index - 2;
      count = (count ^ 1) >>> 0;
    }
    if (count === 0) {
      return (192 | 1) >>> 0;
    } else {
      return 144;
    }
  };
  breaks.lookAheadPictorgraphicExtend = function lookAheadPictorgraphicExtend(base, start, cursor) {
    let index = cursor;
    while (index > start) {
      let char = base[$codeUnitAt](index = index - 1);
      let prevChar = 0;
      let category = 2;
      if ((char & 64512) !== 56320) {
        category = table.low(char);
      } else if (index > start && ((prevChar = base[$codeUnitAt](index = index - 1)) & 64512) === 55296) {
        category = table.high(prevChar, char);
      } else {
        break;
      }
      if (category === 7) {
        return index;
      }
      if (category !== 4) break;
    }
    return -1;
  };
  breaks.isGraphemeClusterBoundary = function isGraphemeClusterBoundary(text, start, end, index) {
    if (!(0 <= start)) dart.assertFailed(null, I[1], 237, 10, "0 <= start");
    if (!(start <= index)) dart.assertFailed(null, I[1], 238, 10, "start <= index");
    if (!(index <= end)) dart.assertFailed(null, I[1], 239, 10, "index <= end");
    if (!(end <= text.length)) dart.assertFailed(null, I[1], 240, 10, "end <= text.length");
    if (start < index && index < end) {
      let char = text[$codeUnitAt](index);
      let prevChar = text[$codeUnitAt](index - 1);
      let catAfter = 2;
      if ((char & 63488) !== 55296) {
        catAfter = table.low(char);
      } else if ((char & 64512) === 55296) {
        if (index + 1 >= end) return true;
        let nextChar = text[$codeUnitAt](index + 1);
        if ((nextChar & 64512) !== 56320) return true;
        catAfter = table.high(char, nextChar);
      } else {
        return (prevChar & 64512) !== 55296;
      }
      let catBefore = 2;
      if ((prevChar & 64512) !== 56320) {
        catBefore = table.low(prevChar);
        index = index - 1;
      } else {
        index = index - 2;
        if (start <= index) {
          let prevPrevChar = text[$codeUnitAt](index);
          if ((prevPrevChar & 64512) !== 55296) {
            return true;
          }
          catBefore = table.high(prevPrevChar, prevChar);
        } else {
          return true;
        }
      }
      let state = table.moveBack(176, catAfter);
      if (!(state < 208)) dart.assertFailed(null, I[1], 287, 12, "state < stateLookaheadMin");
      state = table.moveBack(state, catBefore);
      if (state >= 208) {
        state = breaks.lookAhead(text, start, index, state);
      }
      return (state & 1) === 0;
    }
    return start !== end;
  };
  breaks.previousBreak = function previousBreak(text, start, end, index) {
    if (!(0 <= start)) dart.assertFailed(null, I[1], 301, 10, "0 <= start");
    if (!(start <= index)) dart.assertFailed(null, I[1], 302, 10, "start <= index");
    if (!(index <= end)) dart.assertFailed(null, I[1], 303, 10, "index <= end");
    if (!(end <= text.length)) dart.assertFailed(null, I[1], 304, 10, "end <= text.length");
    if (index === start || index === end) return index;
    let indexBefore = index;
    let nextChar = text[$codeUnitAt](index);
    let category = 2;
    if ((nextChar & 63488) !== 55296) {
      category = table.low(nextChar);
    } else if ((nextChar & 64512) === 55296) {
      let indexAfter = index + 1;
      if (indexAfter < end) {
        let secondChar = text[$codeUnitAt](indexAfter);
        if ((secondChar & 64512) === 56320) {
          category = table.high(nextChar, secondChar);
        }
      }
    } else {
      let prevChar = text[$codeUnitAt](index - 1);
      if ((prevChar & 64512) === 55296) {
        category = table.high(prevChar, nextChar);
        indexBefore = indexBefore - 1;
      }
    }
    return new breaks.BackBreaks.new(text, indexBefore, start, table.moveBack(176, category)).nextBreak();
  };
  breaks.nextBreak = function nextBreak(text, start, end, index) {
    if (!(0 <= start)) dart.assertFailed(null, I[1], 335, 10, "0 <= start");
    if (!(start <= index)) dart.assertFailed(null, I[1], 336, 10, "start <= index");
    if (!(index <= end)) dart.assertFailed(null, I[1], 337, 10, "index <= end");
    if (!(end <= text.length)) dart.assertFailed(null, I[1], 338, 10, "end <= text.length");
    if (index === start || index === end) return index;
    let indexBefore = index - 1;
    let prevChar = text[$codeUnitAt](indexBefore);
    let prevCategory = 2;
    if ((prevChar & 63488) !== 55296) {
      prevCategory = table.low(prevChar);
    } else if ((prevChar & 64512) === 55296) {
      let nextChar = text[$codeUnitAt](index);
      if ((nextChar & 64512) === 56320) {
        index = index + 1;
        if (index === end) return end;
        prevCategory = table.high(prevChar, nextChar);
      }
    } else if (indexBefore > start) {
      let secondCharIndex = indexBefore - 1;
      let secondChar = text[$codeUnitAt](secondCharIndex);
      if ((secondChar & 64512) === 55296) {
        indexBefore = secondCharIndex;
        prevCategory = table.high(secondChar, prevChar);
      }
    }
    let state = 48;
    if (prevCategory === 6) {
      let prevState = breaks.lookAheadRegional(text, start, indexBefore);
      if (prevState !== 144) {
        state = 160;
      }
    } else if (prevCategory === 1 || prevCategory === 4) {
      let prevPic = breaks.lookAheadPictorgraphicExtend(text, start, indexBefore);
      if (prevPic >= 0) {
        state = prevCategory === 1 ? 144 : 128;
      }
    } else {
      state = table.move(176, prevCategory);
    }
    return new breaks.Breaks.new(text, index, text.length, state).nextBreak();
  };
  dart.trackLibraries("packages/characters/src/grapheme_clusters/breaks.dart", {
    "package:characters/src/grapheme_clusters/breaks.dart": breaks
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["breaks.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/characters/src/grapheme_clusters/breaks.dart.lib.js"}');
  // Exports:
  return {
    src__grapheme_clusters__breaks: breaks
  };
}));

//# sourceMappingURL=breaks.dart.lib.js.map