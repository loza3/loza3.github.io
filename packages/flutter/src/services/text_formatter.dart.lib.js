define(['dart_sdk', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/characters/src/characters_impl.dart', 'packages/characters/src/extensions.dart', 'packages/flutter/src/foundation/_platform_web.dart'], (function load__packages__flutter__src__services__text_formatter_dart(dart_sdk, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__services__text_editing$46dart, packages__characters__src__characters_impl$46dart, packages__characters__src__extensions$46dart, packages__flutter__src__foundation___platform_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const characters_impl = packages__characters__src__characters_impl$46dart.src__characters_impl;
  const extensions = packages__characters__src__extensions$46dart.src__extensions;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  var text_formatter = Object.create(dart.library);
  var $allMatches = dartx.allMatches;
  var $substring = dartx.substring;
  var $clamp = dartx.clamp;
  var $length = dartx.length;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: text_formatter.MaxLengthEnforcement.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text_formatter.MaxLengthEnforcement.prototype,
        [_Enum__name]: "enforced",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text_formatter.MaxLengthEnforcement.prototype,
        [_Enum__name]: "truncateAfterCompositionEnds",
        [_Enum_index]: 2
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], text_formatter.MaxLengthEnforcement);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_Enum__name]: "downstream",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1,
        [TextSelection_isDirectional]: false,
        [TextSelection_affinity]: C[5] || CT.C5,
        [TextSelection_extentOffset]: -1,
        [TextSelection_baseOffset]: -1
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "package:flutter/src/services/text_formatter.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/text_formatter.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  text_formatter.MaxLengthEnforcement = class MaxLengthEnforcement extends core._Enum {
    toString() {
      return "MaxLengthEnforcement." + this[_name];
    }
  };
  (text_formatter.MaxLengthEnforcement.new = function(index, name) {
    text_formatter.MaxLengthEnforcement.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_formatter.MaxLengthEnforcement.prototype;
  dart.addTypeTests(text_formatter.MaxLengthEnforcement);
  dart.addTypeCaches(text_formatter.MaxLengthEnforcement);
  dart.setLibraryUri(text_formatter.MaxLengthEnforcement, I[0]);
  dart.setStaticFieldSignature(text_formatter.MaxLengthEnforcement, () => ['values', 'none', 'enforced', 'truncateAfterCompositionEnds']);
  dart.defineExtensionMethods(text_formatter.MaxLengthEnforcement, ['toString']);
  dart.defineLazy(text_formatter.MaxLengthEnforcement, {
    /*text_formatter.MaxLengthEnforcement.values*/get values() {
      return C[0] || CT.C0;
    },
    /*text_formatter.MaxLengthEnforcement.none*/get none() {
      return C[1] || CT.C1;
    },
    /*text_formatter.MaxLengthEnforcement.enforced*/get enforced() {
      return C[2] || CT.C2;
    },
    /*text_formatter.MaxLengthEnforcement.truncateAfterCompositionEnds*/get truncateAfterCompositionEnds() {
      return C[3] || CT.C3;
    }
  }, false);
  text_formatter.TextInputFormatter = class TextInputFormatter extends core.Object {
    static withFunction(formatFunction) {
      return new text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
  };
  (text_formatter.TextInputFormatter.new = function() {
    ;
  }).prototype = text_formatter.TextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.TextInputFormatter);
  dart.addTypeCaches(text_formatter.TextInputFormatter);
  dart.setStaticMethodSignature(text_formatter.TextInputFormatter, () => ['withFunction']);
  dart.setLibraryUri(text_formatter.TextInputFormatter, I[0]);
  text_formatter._SimpleTextInputFormatter = class _SimpleTextInputFormatter extends text_formatter.TextInputFormatter {
    static ['_#new#tearOff'](formatFunction) {
      return new text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
    formatEditUpdate(oldValue, newValue) {
      let t3, t2;
      t2 = oldValue;
      t3 = newValue;
      return this.formatFunction(t2, t3);
    }
  };
  (text_formatter._SimpleTextInputFormatter.new = function(formatFunction) {
    this.formatFunction = formatFunction;
    if (!(formatFunction !== null)) dart.assertFailed(null, I[1], 114, 14, "formatFunction != null");
    ;
  }).prototype = text_formatter._SimpleTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter._SimpleTextInputFormatter);
  dart.addTypeCaches(text_formatter._SimpleTextInputFormatter);
  dart.setMethodSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter._SimpleTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter._SimpleTextInputFormatter, I[0]);
  dart.setFieldSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter._SimpleTextInputFormatter.__proto__),
    formatFunction: dart.finalFieldType(dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue]))
  }));
  text_formatter._MutableTextRange = class _MutableTextRange extends core.Object {
    static ['_#new#tearOff'](base, extent) {
      return new text_formatter._MutableTextRange.new(base, extent);
    }
    static fromComposingRange(range) {
      return range.isValid && !range.isCollapsed ? new text_formatter._MutableTextRange.new(range.start, range.end) : null;
    }
    static fromTextSelection(selection) {
      return selection.isValid ? new text_formatter._MutableTextRange.new(selection.baseOffset, selection.extentOffset) : null;
    }
  };
  (text_formatter._MutableTextRange.new = function(base, extent) {
    this.base = base;
    this.extent = extent;
    ;
  }).prototype = text_formatter._MutableTextRange.prototype;
  dart.addTypeTests(text_formatter._MutableTextRange);
  dart.addTypeCaches(text_formatter._MutableTextRange);
  dart.setStaticMethodSignature(text_formatter._MutableTextRange, () => ['fromComposingRange', 'fromTextSelection']);
  dart.setLibraryUri(text_formatter._MutableTextRange, I[0]);
  dart.setFieldSignature(text_formatter._MutableTextRange, () => ({
    __proto__: dart.getFields(text_formatter._MutableTextRange.__proto__),
    base: dart.fieldType(core.int),
    extent: dart.fieldType(core.int)
  }));
  var TextRange_end = dart.privateName(ui, "TextRange.end");
  var TextRange_start = dart.privateName(ui, "TextRange.start");
  var TextSelection_isDirectional = dart.privateName(text_editing, "TextSelection.isDirectional");
  var TextSelection_affinity = dart.privateName(text_editing, "TextSelection.affinity");
  var TextSelection_extentOffset = dart.privateName(text_editing, "TextSelection.extentOffset");
  var TextSelection_baseOffset = dart.privateName(text_editing, "TextSelection.baseOffset");
  text_formatter._TextEditingValueAccumulator = class _TextEditingValueAccumulator extends core.Object {
    static ['_#new#tearOff'](inputValue) {
      return new text_formatter._TextEditingValueAccumulator.new(inputValue);
    }
    finalize() {
      this.debugFinalized = true;
      let selection = this.selection;
      let composingRegion = this.composingRegion;
      return new text_input.TextEditingValue.new({text: this.stringBuffer.toString(), composing: composingRegion == null || composingRegion.base === composingRegion.extent ? ui.TextRange.empty : new ui.TextRange.new({start: composingRegion.base, end: composingRegion.extent}), selection: selection == null ? C[4] || CT.C4 : new text_editing.TextSelection.new({baseOffset: selection.base, extentOffset: selection.extent, affinity: this.inputValue.selection.affinity, isDirectional: this.inputValue.selection.isDirectional})});
    }
  };
  (text_formatter._TextEditingValueAccumulator.new = function(inputValue) {
    this.stringBuffer = new core.StringBuffer.new();
    this.debugFinalized = false;
    this.inputValue = inputValue;
    this.selection = text_formatter._MutableTextRange.fromTextSelection(inputValue.selection);
    this.composingRegion = text_formatter._MutableTextRange.fromComposingRange(inputValue.composing);
    ;
  }).prototype = text_formatter._TextEditingValueAccumulator.prototype;
  dart.addTypeTests(text_formatter._TextEditingValueAccumulator);
  dart.addTypeCaches(text_formatter._TextEditingValueAccumulator);
  dart.setMethodSignature(text_formatter._TextEditingValueAccumulator, () => ({
    __proto__: dart.getMethods(text_formatter._TextEditingValueAccumulator.__proto__),
    finalize: dart.fnType(text_input.TextEditingValue, [])
  }));
  dart.setLibraryUri(text_formatter._TextEditingValueAccumulator, I[0]);
  dart.setFieldSignature(text_formatter._TextEditingValueAccumulator, () => ({
    __proto__: dart.getFields(text_formatter._TextEditingValueAccumulator.__proto__),
    inputValue: dart.finalFieldType(text_input.TextEditingValue),
    stringBuffer: dart.finalFieldType(core.StringBuffer),
    selection: dart.finalFieldType(dart.nullable(text_formatter._MutableTextRange)),
    composingRegion: dart.finalFieldType(dart.nullable(text_formatter._MutableTextRange)),
    debugFinalized: dart.fieldType(core.bool)
  }));
  var filterPattern$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.filterPattern");
  var allow$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.allow");
  var replacementString$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.replacementString");
  var _processRegion = dart.privateName(text_formatter, "_processRegion");
  text_formatter.FilteringTextInputFormatter = class FilteringTextInputFormatter extends text_formatter.TextInputFormatter {
    get filterPattern() {
      return this[filterPattern$];
    }
    set filterPattern(value) {
      super.filterPattern = value;
    }
    get allow() {
      return this[allow$];
    }
    set allow(value) {
      super.allow = value;
    }
    get replacementString() {
      return this[replacementString$];
    }
    set replacementString(value) {
      super.replacementString = value;
    }
    static ['_#new#tearOff'](filterPattern, opts) {
      let allow = opts && 'allow' in opts ? opts.allow : null;
      let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
      return new text_formatter.FilteringTextInputFormatter.new(filterPattern, {allow: allow, replacementString: replacementString});
    }
    static ['_#allow#tearOff'](filterPattern, opts) {
      let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
      return new text_formatter.FilteringTextInputFormatter.allow(filterPattern, {replacementString: replacementString});
    }
    static ['_#deny#tearOff'](filterPattern, opts) {
      let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
      return new text_formatter.FilteringTextInputFormatter.deny(filterPattern, {replacementString: replacementString});
    }
    formatEditUpdate(oldValue, newValue) {
      let t2, t2$, t2$0, t2$1;
      let formatState = new text_formatter._TextEditingValueAccumulator.new(newValue);
      if (!!formatState.debugFinalized) dart.assertFailed(null, I[1], 353, 12, "!formatState.debugFinalized");
      let matches = this.filterPattern[$allMatches](newValue.text);
      let previousMatch = null;
      for (let match of matches) {
        if (!(match.end >= match.start)) dart.assertFailed(null, I[1], 358, 14, "match.end >= match.start");
        this[_processRegion](this.allow, (t2$ = (t2 = previousMatch, t2 == null ? null : t2.end), t2$ == null ? 0 : t2$), match.start, formatState);
        if (!!formatState.debugFinalized) dart.assertFailed(null, I[1], 365, 14, "!formatState.debugFinalized");
        this[_processRegion](!this.allow, match.start, match.end, formatState);
        if (!!formatState.debugFinalized) dart.assertFailed(null, I[1], 368, 14, "!formatState.debugFinalized");
        previousMatch = match;
      }
      this[_processRegion](this.allow, (t2$1 = (t2$0 = previousMatch, t2$0 == null ? null : t2$0.end), t2$1 == null ? 0 : t2$1), newValue.text.length, formatState);
      if (!!formatState.debugFinalized) dart.assertFailed(null, I[1], 376, 12, "!formatState.debugFinalized");
      return formatState.finalize();
    }
    [_processRegion](isBannedRegion, regionStart, regionEnd, state) {
      let t2, t2$, t2$0, t2$1;
      let replacementString = isBannedRegion ? regionStart === regionEnd ? "" : this.replacementString : state.inputValue.text[$substring](regionStart, regionEnd);
      state.stringBuffer.write(replacementString);
      if (replacementString.length === regionEnd - regionStart) {
        return;
      }
      function adjustIndex(originalIndex) {
        let replacedLength = originalIndex <= regionStart && originalIndex < regionEnd ? 0 : replacementString.length;
        let removedLength = originalIndex[$clamp](regionStart, regionEnd) - regionStart;
        return replacedLength - removedLength;
      }
      dart.fn(adjustIndex, T.intToint());
      t2 = state.selection;
      t2 == null ? null : t2.base = t2.base + adjustIndex(state.inputValue.selection.baseOffset);
      t2$ = state.selection;
      t2$ == null ? null : t2$.extent = t2$.extent + adjustIndex(state.inputValue.selection.extentOffset);
      t2$0 = state.composingRegion;
      t2$0 == null ? null : t2$0.base = t2$0.base + adjustIndex(state.inputValue.composing.start);
      t2$1 = state.composingRegion;
      t2$1 == null ? null : t2$1.extent = t2$1.extent + adjustIndex(state.inputValue.composing.end);
    }
  };
  (text_formatter.FilteringTextInputFormatter.new = function(filterPattern, opts) {
    let allow = opts && 'allow' in opts ? opts.allow : null;
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    this[filterPattern$] = filterPattern;
    this[allow$] = allow;
    this[replacementString$] = replacementString;
    if (!(filterPattern !== null)) dart.assertFailed(null, I[1], 244, 15, "filterPattern != null");
    if (!(allow !== null)) dart.assertFailed(null, I[1], 245, 15, "allow != null");
    if (!(replacementString !== null)) dart.assertFailed(null, I[1], 246, 15, "replacementString != null");
    ;
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  (text_formatter.FilteringTextInputFormatter.allow = function(filterPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    text_formatter.FilteringTextInputFormatter.new.call(this, filterPattern, {allow: true, replacementString: replacementString});
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  (text_formatter.FilteringTextInputFormatter.deny = function(filterPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    text_formatter.FilteringTextInputFormatter.new.call(this, filterPattern, {allow: false, replacementString: replacementString});
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.FilteringTextInputFormatter);
  dart.addTypeCaches(text_formatter.FilteringTextInputFormatter);
  dart.setMethodSignature(text_formatter.FilteringTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.FilteringTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue]),
    [_processRegion]: dart.fnType(dart.void, [core.bool, core.int, core.int, text_formatter._TextEditingValueAccumulator])
  }));
  dart.setLibraryUri(text_formatter.FilteringTextInputFormatter, I[0]);
  dart.setFieldSignature(text_formatter.FilteringTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.FilteringTextInputFormatter.__proto__),
    filterPattern: dart.finalFieldType(core.Pattern),
    allow: dart.finalFieldType(core.bool),
    replacementString: dart.finalFieldType(core.String)
  }));
  dart.setStaticFieldSignature(text_formatter.FilteringTextInputFormatter, () => ['singleLineFormatter', 'digitsOnly']);
  dart.defineLazy(text_formatter.FilteringTextInputFormatter, {
    /*text_formatter.FilteringTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new text_formatter.FilteringTextInputFormatter.deny("\n");
    },
    /*text_formatter.FilteringTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new text_formatter.FilteringTextInputFormatter.allow(core.RegExp.new("[0-9]"));
    }
  }, false);
  var maxLength$ = dart.privateName(text_formatter, "LengthLimitingTextInputFormatter.maxLength");
  var maxLengthEnforcement$ = dart.privateName(text_formatter, "LengthLimitingTextInputFormatter.maxLengthEnforcement");
  text_formatter.LengthLimitingTextInputFormatter = class LengthLimitingTextInputFormatter extends text_formatter.TextInputFormatter {
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    get maxLengthEnforcement() {
      return this[maxLengthEnforcement$];
    }
    set maxLengthEnforcement(value) {
      super.maxLengthEnforcement = value;
    }
    static ['_#new#tearOff'](maxLength, opts) {
      let maxLengthEnforcement = opts && 'maxLengthEnforcement' in opts ? opts.maxLengthEnforcement : null;
      return new text_formatter.LengthLimitingTextInputFormatter.new(maxLength, {maxLengthEnforcement: maxLengthEnforcement});
    }
    static getDefaultMaxLengthEnforcement(platform = null) {
      {
        return text_formatter.MaxLengthEnforcement.truncateAfterCompositionEnds;
      }
    }
    static truncate(value, maxLength) {
      let iterator = new characters_impl.StringCharacterRange.new(value.text);
      if (extensions['StringCharacters|get#characters'](value.text)[$length] > maxLength) {
        iterator.expandNext(maxLength);
      }
      let truncated = iterator.current;
      return new text_input.TextEditingValue.new({text: truncated, selection: value.selection.copyWith({baseOffset: math.min(core.int, value.selection.start, truncated.length), extentOffset: math.min(core.int, value.selection.end, truncated.length)}), composing: !value.composing.isCollapsed && truncated.length > value.composing.start ? new ui.TextRange.new({start: value.composing.start, end: math.min(core.int, value.composing.end, truncated.length)}) : ui.TextRange.empty});
    }
    formatEditUpdate(oldValue, newValue) {
      let t2;
      let maxLength = this.maxLength;
      if (maxLength == null || maxLength === -1 || extensions['StringCharacters|get#characters'](newValue.text)[$length] <= dart.notNull(maxLength)) {
        return newValue;
      }
      if (!(dart.notNull(maxLength) > 0)) dart.assertFailed(null, I[1], 563, 12, "maxLength > 0");
      switch (t2 = this.maxLengthEnforcement, t2 == null ? text_formatter.LengthLimitingTextInputFormatter.getDefaultMaxLengthEnforcement() : t2) {
        case C[1] || CT.C1:
          {
            return newValue;
          }
        case C[2] || CT.C2:
          {
            if (extensions['StringCharacters|get#characters'](oldValue.text)[$length] === maxLength && oldValue.selection.isCollapsed) {
              return oldValue;
            }
            return text_formatter.LengthLimitingTextInputFormatter.truncate(newValue, maxLength);
          }
        case C[3] || CT.C3:
          {
            if (extensions['StringCharacters|get#characters'](oldValue.text)[$length] === maxLength && !oldValue.composing.isValid) {
              return oldValue;
            }
            if (newValue.composing.isValid) {
              return newValue;
            }
            return text_formatter.LengthLimitingTextInputFormatter.truncate(newValue, maxLength);
          }
      }
    }
  };
  (text_formatter.LengthLimitingTextInputFormatter.new = function(maxLength, opts) {
    let maxLengthEnforcement = opts && 'maxLengthEnforcement' in opts ? opts.maxLengthEnforcement : null;
    this[maxLength$] = maxLength;
    this[maxLengthEnforcement$] = maxLengthEnforcement;
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, I[1], 437, 15, "maxLength == null || maxLength == -1 || maxLength > 0");
    ;
  }).prototype = text_formatter.LengthLimitingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.LengthLimitingTextInputFormatter);
  dart.addTypeCaches(text_formatter.LengthLimitingTextInputFormatter);
  dart.setMethodSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setStaticMethodSignature(text_formatter.LengthLimitingTextInputFormatter, () => ['getDefaultMaxLengthEnforcement', 'truncate']);
  dart.setLibraryUri(text_formatter.LengthLimitingTextInputFormatter, I[0]);
  dart.setFieldSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    maxLength: dart.finalFieldType(dart.nullable(core.int)),
    maxLengthEnforcement: dart.finalFieldType(dart.nullable(text_formatter.MaxLengthEnforcement))
  }));
  dart.trackLibraries("packages/flutter/src/services/text_formatter.dart", {
    "package:flutter/src/services/text_formatter.dart": text_formatter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_formatter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyDA;;;;;;;;;;;;MAbK,0CAAM;;;MAGT,wCAAI;;;MAIJ,4CAAQ;;;MAKR,gEAA4B;;;;;wBAyCF;AAExB,YAAO,kDAA0B,cAAc;IACjD;;;;EACF;;;;;;;;;qBAkBqB,UACA;;AAEjB,WAAsB,QAAQ;WAAE,QAAQ;YAAjC,AAAc;IACvB;;;IAX+B;UACpB,AAAe,cAAD;;EAAS;;;;;;;;;;;;;;;;8BAiBqB;AACrD,YAAO,AAAM,AAAQ,MAAT,aAAa,AAAM,KAAD,eAC1B,yCAAkB,AAAM,KAAD,QAAQ,AAAM,KAAD,QACpC;IACN;6BAE0D;AACxD,YAAO,AAAU,UAAD,WACZ,yCAAkB,AAAU,SAAD,aAAa,AAAU,SAAD,iBACjD;IACN;;mDAZuB,MAAW;IAAX;IAAW;;EAAO;;;;;;;;;;;;;;;;;;;;;AAgElB,MAArB,sBAAiB;AACQ,sBAAiB;AACjB,4BAAuB;AAChD,YAAO,4CACC,AAAa,yCACR,AAAgB,AAAQ,eAAT,YAAY,AAAgB,AAAK,eAAN,UAAS,AAAgB,eAAD,UAC7D,qBACV,6BAAiB,AAAgB,eAAD,YAAY,AAAgB,eAAD,sBACtD,AAAU,SAAD,2BAEd,gDACc,AAAU,SAAD,qBACP,AAAU,SAAD,mBAGb,AAAW,AAAU,mDAChB,AAAW,AAAU;IAGhD;;8DArDkC;IAcf,oBAAe;IAiB7B,sBAAiB;IA/BY;IACpB,iBAAoB,mDAAkB,AAAW,UAAD;IAC1C,uBAAoB,oDAAmB,AAAW,UAAD;;EAAW;;;;;;;;;;;;;;;;;;;;;IAgIlE;;;;;;IASH;;;;;;IA+CE;;;;;;;;;;;;;;;;;;;qBAIM,UACA;;AAEkB,wBAAc,oDAA6B,QAAQ;AACtF,YAAQ,AAAY,WAAD;AAEG,oBAAU,AAAc,gCAAW,AAAS,QAAD;AAC1D;AACP,eAAiB,QAAS,QAAO;AAC/B,cAAO,AAAM,AAAI,KAAL,QAAQ,AAAM,KAAD;AAM+C,QAAxE,qBAAe,aAA0B,YAAnB,aAAa,eAAb,OAAe,SAAf,cAAsB,UAAG,AAAM,KAAD,QAAQ,WAAW;AACvE,cAAQ,AAAY,WAAD;AAEwC,QAA3D,sBAAgB,YAAO,AAAM,KAAD,QAAQ,AAAM,KAAD,MAAM,WAAW;AAC1D,cAAQ,AAAY,WAAD;AAEE,QAArB,gBAAgB,KAAK;;AAK0D,MAAjF,qBAAe,aAA0B,eAAnB,aAAa,iBAAb,OAAe,WAAf,eAAsB,WAAG,AAAS,AAAK,QAAN,cAAc,WAAW;AAChF,YAAQ,AAAY,WAAD;AACnB,YAAO,AAAY,YAAD;IACpB;qBAEyB,gBAAoB,aAAiB,WAAwC;;AACvF,8BAAoB,cAAc,GAC1C,AAAY,WAAD,KAAI,SAAS,GAAG,KAAU,yBACtC,AAAM,AAAW,AAAK,KAAjB,6BAA2B,WAAW,EAAE,SAAS,CAFX;AAIJ,MAA3C,AAAM,AAAa,KAAd,oBAAoB,iBAAiB;AAE1C,UAAI,AAAkB,AAAO,iBAAR,YAAW,AAAU,SAAD,GAAG,WAAW;AAGrD;;AAGF,eAAI,YAAgB;AAER,6BAAiB,AAAc,AAAe,aAAhB,IAAI,WAAW,IAAI,AAAc,aAAD,GAAG,SAAS,GAAG,IAAI,AAAkB,iBAAD;AAElG,4BAAgB,AAAc,AAA8B,aAA/B,SAAO,WAAW,EAAE,SAAS,IAAI,WAAW;AACnF,cAAO,AAAe,eAAD,GAAG,aAAa;;;AAGoC,WAA3E,AAAM,KAAD;mBAAC,OAAW,UAAA,AAAK,UAAG,WAAW,CAAC,AAAM,AAAW,AAAU,KAAtB;AACqC,YAA/E,AAAM,KAAD;oBAAC,OAAW,aAAA,AAAO,aAAG,WAAW,CAAC,AAAM,AAAW,AAAU,KAAtB;AACgC,aAA5E,AAAM,KAAD;qBAAC,OAAiB,YAAA,AAAK,YAAG,WAAW,CAAC,AAAM,AAAW,AAAU,KAAtB;AAC4B,aAA5E,AAAM,KAAD;qBAAC,OAAiB,cAAA,AAAO,cAAG,WAAW,CAAC,AAAM,AAAW,AAAU,KAAtB;IACpD;;6DApKO;QACS;QACT;IAFA;IACS;IACT;UACK,AAAc,aAAD;UACb,AAAM,KAAD;UACL,AAAkB,iBAAD;;EAAS;+DAO5B;QACD;8DACC,aAAa,UAAS,yBAAyB,iBAAiB;EAAC;8DAOjE;QACD;8DACC,aAAa,UAAS,0BAA0B,iBAAiB;EAAC;;;;;;;;;;;;;;;;;MAgJ5C,8DAAmB;YAA+B,qDAAK;;MAGvD,qDAAU;YAA+B,sDAAM,gBAAO;;;;;;IAgE3E;;;;;;IAOiB;;;;;;;;;;0CAqBV;AAEhB;AACE,cAA4B;;IAahC;oBASkD,OAAW;AACtC,qBAAW,6CAAe,AAAM,KAAD;AACpD,UAAe,AAAW,AAAO,8CAA7B,AAAM,KAAD,kBAA0B,SAAS;AACZ,QAA9B,AAAS,QAAD,YAAY,SAAS;;AAElB,sBAAY,AAAS,QAAD;AAEjC,YAAO,4CACC,SAAS,aACJ,AAAM,AAAU,KAAX,iCACG,mBAAI,AAAM,AAAU,KAAX,kBAAkB,AAAU,SAAD,wBAClC,mBAAI,AAAM,AAAU,KAAX,gBAAgB,AAAU,SAAD,uBAEf,CAA5B,AAAM,AAAU,KAAX,0BAA0B,AAAU,AAAO,SAAR,UAAU,AAAM,AAAU,KAAX,mBAC/D,6BACS,AAAM,AAAU,KAAX,uBACF,mBAAI,AAAM,AAAU,KAAX,gBAAgB,AAAU,SAAD,aAEpC;IAElB;qBAImB,UACA;;AAEN,sBAAiB;AAE5B,UAAI,AAAU,SAAD,YACX,AAAU,SAAD,KAAI,CAAC,KACA,AAAW,AAAO,8CAAhC,AAAS,QAAD,gCAA2B,SAAS;AAC5C,cAAO,SAAQ;;AAGjB,YAAiB,aAAV,SAAS,IAAG;AAEnB,cAA6B,gCAArB,aAAwB;;;AAE5B,kBAAO,SAAQ;;;;AAIf,gBAAkB,AAAW,AAAO,8CAAhC,AAAS,QAAD,oBAA2B,SAAS,IAAI,AAAS,AAAU,QAAX;AAC1D,oBAAO,SAAQ;;AAIjB,kBAAO,0DAAS,QAAQ,EAAE,SAAS;;;;AAInC,gBAAkB,AAAW,AAAO,8CAAhC,AAAS,QAAD,oBAA2B,SAAS,KAC7C,AAAS,AAAU,QAAX;AACT,oBAAO,SAAQ;;AAMjB,gBAAI,AAAS,AAAU,QAAX;AACV,oBAAO,SAAQ;;AAGjB,kBAAO,0DAAS,QAAQ,EAAE,SAAS;;;IAEzC;;kEA/JO;QACA;IADA;IACA;UACK,AAAU,AAA2B,SAA5B,YAAY,AAAU,SAAD,KAAI,CAAC,KAAe,aAAV,SAAS,IAAG;;EAAE","file":"../../../../../../../../../../packages/flutter/src/services/text_formatter.dart.lib.js"}');
  // Exports:
  return {
    src__services__text_formatter: text_formatter
  };
}));

//# sourceMappingURL=text_formatter.dart.lib.js.map
