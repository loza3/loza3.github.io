define(['dart_sdk'], (function load__packages__wkt_parser__src__parser_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var parser$ = Object.create(dart.library);
  var $trim = dartx.trim;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $removeLast = dartx.removeLast;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListN: () => (T.ListN = dart.constFn(dart.nullable(core.List)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:wkt_parser/src/parser.dart"];
  var text$ = dart.privateName(parser$, "Parser.text");
  var level = dart.privateName(parser$, "Parser.level");
  var place = dart.privateName(parser$, "Parser.place");
  var root = dart.privateName(parser$, "Parser.root");
  var stack = dart.privateName(parser$, "Parser.stack");
  var currentObject = dart.privateName(parser$, "Parser.currentObject");
  var state = dart.privateName(parser$, "Parser.state");
  var word = dart.privateName(parser$, "Parser.word");
  var _output = dart.privateName(parser$, "_output");
  var _neutral = dart.privateName(parser$, "_neutral");
  var _keyword = dart.privateName(parser$, "_keyword");
  var _quoted = dart.privateName(parser$, "_quoted");
  var _afterquote = dart.privateName(parser$, "_afterquote");
  var _number = dart.privateName(parser$, "_number");
  var _readCharacter = dart.privateName(parser$, "_readCharacter");
  var _afterItem = dart.privateName(parser$, "_afterItem");
  parser$.Parser = class Parser extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    get level() {
      return this[level];
    }
    set level(value) {
      this[level] = value;
    }
    get place() {
      return this[place];
    }
    set place(value) {
      this[place] = value;
    }
    get root() {
      return this[root];
    }
    set root(value) {
      this[root] = value;
    }
    get stack() {
      return this[stack];
    }
    set stack(value) {
      this[stack] = value;
    }
    get currentObject() {
      return this[currentObject];
    }
    set currentObject(value) {
      this[currentObject] = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get word() {
      return this[word];
    }
    set word(value) {
      this[word] = value;
    }
    static ['_#new#tearOff'](text) {
      return new parser$.Parser.new(text);
    }
    static parseString(txt) {
      let parser = new parser$.Parser.new(txt);
      return parser[_output]();
    }
    [_readCharacter]() {
      let t0, t0$;
      let char = this.text[$_get]((t0 = this.place, this.place = t0 + 1, t0));
      if (this.state !== 4) {
        while (parser$.whitespaceRegexp.hasMatch(char)) {
          if (this.place >= this.text.length) {
            return;
          }
          char = this.text[$_get]((t0$ = this.place, this.place = t0$ + 1, t0$));
        }
      }
      switch (this.state) {
        case 1:
          {
            return this[_neutral](char);
          }
        case 2:
          {
            return this[_keyword](char);
          }
        case 4:
          {
            return this[_quoted](char);
          }
        case 5:
          {
            return this[_afterquote](char);
          }
        case 3:
          {
            return this[_number](char);
          }
        case -1:
          {
            return;
          }
      }
    }
    [_afterquote](char) {
      if (char === "\"") {
        this.word = dart.dsend(this.word, '+', ["\""]);
        this.state = 4;
        return;
      }
      if (parser$.endThingsRegexp.hasMatch(char)) {
        this.word = dart.dsend(this.word, 'trim', []);
        this[_afterItem](char);
        return;
      }
      dart.throw(core.Exception.new("haven't handled \"" + char + "\" in afterquote yet, index " + dart.str(this.place)));
    }
    [_afterItem](char) {
      if (char === ",") {
        if (this.word != null) {
          dart.nullCheck(this.currentObject)[$add](this.word);
        }
        this.word = null;
        this.state = 1;
        return;
      }
      if (char === "]") {
        this.level = this.level - 1;
        if (this.word != null) {
          dart.nullCheck(this.currentObject)[$add](this.word);
          this.word = null;
        }
        this.state = 1;
        this.currentObject = T.ListN().as(this.stack[$removeLast]());
        if (this.currentObject == null) {
          this.state = -1;
        }
        return;
      }
    }
    [_quoted](char) {
      if (char === "\"") {
        this.state = 5;
        return;
      }
      this.word = dart.dsend(this.word, '+', [char]);
      return;
    }
    [_keyword](char) {
      if (parser$.keywordRegex.hasMatch(char)) {
        this.word = dart.dsend(this.word, '+', [char]);
        return;
      }
      if (char === "[") {
        let newObjects = [];
        newObjects[$add](this.word);
        this.level = this.level + 1;
        if (this.root == null) {
          this.root = newObjects;
        } else {
          dart.nullCheck(this.currentObject)[$add](newObjects);
        }
        this.stack[$add](this.currentObject);
        this.currentObject = newObjects;
        this.state = 1;
        return;
      }
      if (parser$.endThingsRegexp.hasMatch(char)) {
        this[_afterItem](char);
        return;
      }
      dart.throw(core.Exception.new("havn't handled \"" + char + "\" in keyword yet, index " + dart.str(this.place)));
    }
    [_number](char) {
      if (parser$.digetsRegexp.hasMatch(char)) {
        this.word = dart.dsend(this.word, '+', [char]);
        return;
      }
      if (parser$.endThingsRegexp.hasMatch(char)) {
        this.word = core.double.parse(core.String.as(this.word));
        this[_afterItem](char);
        return;
      }
      dart.throw(core.Exception.new("haven't handled \"" + char + "\" in number yet, index " + dart.str(this.place)));
    }
    [_neutral](char) {
      if (parser$.latinRegexp.hasMatch(char)) {
        this.word = char;
        this.state = 2;
        return;
      }
      if (char === "\"") {
        this.word = "";
        this.state = 4;
        return;
      }
      if (parser$.digetsRegexp.hasMatch(char)) {
        this.word = char;
        this.state = 3;
        return;
      }
      if (parser$.endThingsRegexp.hasMatch(char)) {
        this[_afterItem](char);
        return;
      }
      dart.throw(core.Exception.new("haven't handled \"" + char + "\" in neutral yet, index " + dart.str(this.place)));
    }
    [_output]() {
      while (this.place < this.text.length) {
        this[_readCharacter]();
      }
      if (this.state === -1) {
        return dart.nullCheck(this.root);
      }
      dart.throw(core.Exception.new("unable to parse string " + this.text + ". State is " + dart.str(this.state)));
    }
  };
  (parser$.Parser.new = function(text) {
    this[word] = null;
    this[text$] = text[$trim]();
    this[level] = 0;
    this[place] = 0;
    this[root] = null;
    this[stack] = [];
    this[currentObject] = null;
    this[state] = 1;
    ;
  }).prototype = parser$.Parser.prototype;
  dart.addTypeTests(parser$.Parser);
  dart.addTypeCaches(parser$.Parser);
  dart.setMethodSignature(parser$.Parser, () => ({
    __proto__: dart.getMethods(parser$.Parser.__proto__),
    [_readCharacter]: dart.fnType(dart.void, []),
    [_afterquote]: dart.fnType(dart.void, [core.String]),
    [_afterItem]: dart.fnType(dart.void, [core.String]),
    [_quoted]: dart.fnType(dart.void, [core.String]),
    [_keyword]: dart.fnType(dart.void, [core.String]),
    [_number]: dart.fnType(dart.void, [core.String]),
    [_neutral]: dart.fnType(dart.void, [core.String]),
    [_output]: dart.fnType(core.List, [])
  }));
  dart.setStaticMethodSignature(parser$.Parser, () => ['parseString']);
  dart.setLibraryUri(parser$.Parser, I[0]);
  dart.setFieldSignature(parser$.Parser, () => ({
    __proto__: dart.getFields(parser$.Parser.__proto__),
    text: dart.fieldType(core.String),
    level: dart.fieldType(core.int),
    place: dart.fieldType(core.int),
    root: dart.fieldType(dart.nullable(core.List)),
    stack: dart.fieldType(core.List),
    currentObject: dart.fieldType(dart.nullable(core.List)),
    state: dart.fieldType(core.int),
    word: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(parser$, {
    /*parser$.NEUTRAL*/get NEUTRAL() {
      return 1;
    },
    /*parser$.KEYWORD*/get KEYWORD() {
      return 2;
    },
    /*parser$.NUMBER*/get NUMBER() {
      return 3;
    },
    /*parser$.QUOTED*/get QUOTED() {
      return 4;
    },
    /*parser$.AFTERQUOTE*/get AFTERQUOTE() {
      return 5;
    },
    /*parser$.ENDED*/get ENDED() {
      return -1;
    },
    /*parser$.whitespaceRegexp*/get whitespaceRegexp() {
      return core.RegExp.new("\\s");
    },
    set whitespaceRegexp(_) {},
    /*parser$.latinRegexp*/get latinRegexp() {
      return core.RegExp.new("[A-Za-z]");
    },
    set latinRegexp(_) {},
    /*parser$.keywordRegex*/get keywordRegex() {
      return core.RegExp.new("[A-Za-z84]");
    },
    set keywordRegex(_) {},
    /*parser$.endThingsRegexp*/get endThingsRegexp() {
      return core.RegExp.new("[,\\]]");
    },
    set endThingsRegexp(_) {},
    /*parser$.digetsRegexp*/get digetsRegexp() {
      return core.RegExp.new("[\\d\\.E\\-\\+]");
    },
    set digetsRegexp(_) {}
  }, false);
  dart.trackLibraries("packages/wkt_parser/src/parser.dart", {
    "package:wkt_parser/src/parser.dart": parser$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["parser.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/wkt_parser/src/parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser: parser$
  };
}));

//# sourceMappingURL=parser.dart.lib.js.map
