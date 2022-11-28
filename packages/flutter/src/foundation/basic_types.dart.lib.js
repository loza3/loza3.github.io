define(['dart_sdk'], (function load__packages__flutter__src__foundation__basic_types_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var basic_types = Object.create(dart.library);
  var $iterator = dartx.iterator;
  var $map = dartx.map;
  var $where = dartx.where;
  var $expand = dartx.expand;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $length = dartx.length;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flutter/src/foundation/basic_types.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/foundation/basic_types.dart"
  ];
  var _results = dart.privateName(basic_types, "_results");
  var _prefillIterator$ = dart.privateName(basic_types, "_prefillIterator");
  var _precacheEntireList = dart.privateName(basic_types, "_precacheEntireList");
  var _fillNext = dart.privateName(basic_types, "_fillNext");
  const _is_CachingIterable_default = Symbol('_is_CachingIterable_default');
  basic_types.CachingIterable$ = dart.generic(E => {
    var __t$JSArrayOfE = () => (__t$JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    var __t$_LazyListIteratorOfE = () => (__t$_LazyListIteratorOfE = dart.constFn(basic_types._LazyListIterator$(E)))();
    var __t$CachingIterableOfE = () => (__t$CachingIterableOfE = dart.constFn(basic_types.CachingIterable$(E)))();
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    class CachingIterable extends collection.IterableBase$(E) {
      static ['_#new#tearOff'](E, _prefillIterator) {
        return new (basic_types.CachingIterable$(E)).new(_prefillIterator);
      }
      get iterator() {
        return new (__t$_LazyListIteratorOfE()).new(this);
      }
      map(T, toElement) {
        return new (basic_types.CachingIterable$(T)).new(super[$map](T, toElement)[$iterator]);
      }
      where(test) {
        return new (__t$CachingIterableOfE()).new(super[$where](test)[$iterator]);
      }
      expand(T, toElements) {
        return new (basic_types.CachingIterable$(T)).new(super[$expand](T, toElements)[$iterator]);
      }
      take(count) {
        return new (__t$CachingIterableOfE()).new(super[$take](count)[$iterator]);
      }
      takeWhile(test) {
        return new (__t$CachingIterableOfE()).new(super[$takeWhile](test)[$iterator]);
      }
      skip(count) {
        return new (__t$CachingIterableOfE()).new(super[$skip](count)[$iterator]);
      }
      skipWhile(test) {
        return new (__t$CachingIterableOfE()).new(super[$skipWhile](test)[$iterator]);
      }
      get length() {
        this[_precacheEntireList]();
        return this[_results][$length];
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_precacheEntireList]();
        return __t$ListOfE().of(this[_results], {growable: growable});
      }
      [_precacheEntireList]() {
        while (this[_fillNext]()) {
        }
      }
      [_fillNext]() {
        if (!this[_prefillIterator$].moveNext()) {
          return false;
        }
        this[_results][$add](this[_prefillIterator$].current);
        return true;
      }
    }
    (CachingIterable.new = function(_prefillIterator) {
      this[_results] = __t$JSArrayOfE().of([]);
      this[_prefillIterator$] = _prefillIterator;
      CachingIterable.__proto__.new.call(this);
      ;
    }).prototype = CachingIterable.prototype;
    dart.addTypeTests(CachingIterable);
    CachingIterable.prototype[_is_CachingIterable_default] = true;
    dart.addTypeCaches(CachingIterable);
    dart.setMethodSignature(CachingIterable, () => ({
      __proto__: dart.getMethods(CachingIterable.__proto__),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [_precacheEntireList]: dart.fnType(dart.void, []),
      [_fillNext]: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(CachingIterable, () => ({
      __proto__: dart.getGetters(CachingIterable.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setLibraryUri(CachingIterable, I[0]);
    dart.setFieldSignature(CachingIterable, () => ({
      __proto__: dart.getFields(CachingIterable.__proto__),
      [_prefillIterator$]: dart.finalFieldType(core.Iterator$(E)),
      [_results]: dart.finalFieldType(core.List$(E))
    }));
    dart.defineExtensionMethods(CachingIterable, [
      'map',
      'where',
      'expand',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'toList'
    ]);
    dart.defineExtensionAccessors(CachingIterable, ['iterator', 'length']);
    return CachingIterable;
  });
  basic_types.CachingIterable = basic_types.CachingIterable$();
  dart.addTypeTests(basic_types.CachingIterable, _is_CachingIterable_default);
  var _owner$ = dart.privateName(basic_types, "_owner");
  var _index = dart.privateName(basic_types, "_index");
  const _is__LazyListIterator_default = Symbol('_is__LazyListIterator_default');
  basic_types._LazyListIterator$ = dart.generic(E => {
    class _LazyListIterator extends core.Object {
      static ['_#new#tearOff'](E, _owner) {
        return new (basic_types._LazyListIterator$(E)).new(_owner);
      }
      get current() {
        if (!(this[_index] >= 0)) dart.assertFailed(null, I[1], 208, 12, "_index >= 0");
        if (this[_index] < 0 || this[_index] === this[_owner$][_results][$length]) {
          dart.throw(new core.StateError.new("current can not be call after moveNext has returned false"));
        }
        return this[_owner$][_results][$_get](this[_index]);
      }
      moveNext() {
        if (this[_index] >= this[_owner$][_results][$length]) {
          return false;
        }
        this[_index] = this[_index] + 1;
        if (this[_index] === this[_owner$][_results][$length]) {
          return this[_owner$][_fillNext]();
        }
        return true;
      }
    }
    (_LazyListIterator.new = function(_owner) {
      this[_owner$] = _owner;
      this[_index] = -1;
      ;
    }).prototype = _LazyListIterator.prototype;
    dart.addTypeTests(_LazyListIterator);
    _LazyListIterator.prototype[_is__LazyListIterator_default] = true;
    dart.addTypeCaches(_LazyListIterator);
    _LazyListIterator[dart.implements] = () => [core.Iterator$(E)];
    dart.setMethodSignature(_LazyListIterator, () => ({
      __proto__: dart.getMethods(_LazyListIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_LazyListIterator, () => ({
      __proto__: dart.getGetters(_LazyListIterator.__proto__),
      current: E
    }));
    dart.setLibraryUri(_LazyListIterator, I[0]);
    dart.setFieldSignature(_LazyListIterator, () => ({
      __proto__: dart.getFields(_LazyListIterator.__proto__),
      [_owner$]: dart.finalFieldType(basic_types.CachingIterable$(E)),
      [_index]: dart.fieldType(core.int)
    }));
    return _LazyListIterator;
  });
  basic_types._LazyListIterator = basic_types._LazyListIterator$();
  dart.addTypeTests(basic_types._LazyListIterator, _is__LazyListIterator_default);
  var constructor$ = dart.privateName(basic_types, "Factory.constructor");
  const _is_Factory_default = Symbol('_is_Factory_default');
  basic_types.Factory$ = dart.generic(T => {
    class Factory extends core.Object {
      get _constructor() {
        return this[constructor$];
      }
      set _constructor(value) {
        super._constructor = value;
      }
      static ['_#new#tearOff'](T, constructor) {
        return new (basic_types.Factory$(T)).new(constructor);
      }
      get type() {
        return dart.wrapType(T);
      }
      toString() {
        return "Factory(type: " + dart.str(this.type) + ")";
      }
    }
    (Factory.new = function(constructor) {
      this[constructor$] = constructor;
      if (!(constructor !== null)) dart.assertFailed(null, I[1], 233, 44, "constructor != null");
      ;
    }).prototype = Factory.prototype;
    dart.addTypeTests(Factory);
    Factory.prototype[_is_Factory_default] = true;
    dart.addTypeCaches(Factory);
    dart.setGetterSignature(Factory, () => ({
      __proto__: dart.getGetters(Factory.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(Factory, I[0]);
    dart.setFieldSignature(Factory, () => ({
      __proto__: dart.getFields(Factory.__proto__),
      _constructor: dart.finalFieldType(dart.fnType(T, []))
    }));
    dart.defineExtensionMethods(Factory, ['toString']);
    return Factory;
  });
  basic_types.Factory = basic_types.Factory$();
  dart.addTypeTests(basic_types.Factory, _is_Factory_default);
  basic_types.lerpDuration = function lerpDuration(a, b, t) {
    return new core.Duration.new({microseconds: (a.inMicroseconds + (b.inMicroseconds - a.inMicroseconds) * t)[$round]()});
  };
  dart.trackLibraries("packages/flutter/src/foundation/basic_types.dart", {
    "package:flutter/src/foundation/basic_types.dart": basic_types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["basic_types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwII,cAAO,sCAAqB;MAC9B;aAGmC;AACjC,cAAO,2CAAyB,AAAkB,eAAX,SAAS;MAClD;YAG2C;AACzC,cAAO,oCAAyB,AAAY,cAAN,IAAI;MAC5C;gBAGsD;AACpD,cAAO,2CAAyB,AAAsB,kBAAZ,UAAU;MACtD;WAGqB;AACnB,cAAO,oCAAyB,AAAY,aAAP,KAAK;MAC5C;gBAG6C;AAC3C,cAAO,oCAAyB,AAAgB,kBAAN,IAAI;MAChD;WAGqB;AACnB,cAAO,oCAAyB,AAAY,aAAP,KAAK;MAC5C;gBAG6C;AAC3C,cAAO,oCAAyB,AAAgB,kBAAN,IAAI;MAChD;;AAIuB,QAArB;AACA,cAAO,AAAS;MAClB;;YAGsB;AACC,QAArB;AACA,cAAO,kBAAW,2BAAoB,QAAQ;MAChD;;AAGE,eAAO;;MACT;;AAGE,aAAK,AAAiB;AACpB,gBAAO;;AAE6B,QAAtC,AAAS,qBAAI,AAAiB;AAC9B,cAAO;MACT;;oCAnEqB;MAGP,iBAAc;MAHP;AAArB;;IAAsC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8EpC,cAAO,AAAO,gBAAG;AACjB,YAAI,AAAO,eAAE,KAAK,AAAO,iBAAG,AAAO,AAAS;AACmC,UAA7E,WAAM,wBAAW;;AAEnB,cAAO,AAAO,AAAQ,gCAAC;MACzB;;AAIE,YAAI,AAAO,gBAAG,AAAO,AAAS;AAC5B,gBAAO;;AAEE,QAAX,eAAA,AAAO,eAAG;AACV,YAAI,AAAO,iBAAG,AAAO,AAAS;AAC5B,gBAAO,AAAO;;AAEhB,cAAO;MACT;;;MAxBuB;MAAiB,eAAE,CAAC;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmCvB;;;;;;;;;;AAGJ;MAAC;;AAIhB,cAAO,AAAsB,6BAAN,aAAI;MAC7B;;;MAXmB;YAAsB,AAAY,WAAD;;IAAS;;;;;;;;;;;;;;;;;;mDAehC,GAAY,GAAU;AACnD,UAAO,sCACwE,CAA9D,AAAE,AAAe,CAAhB,kBAAwD,CAArC,AAAE,AAAe,CAAhB,kBAAkB,AAAE,CAAD,mBAAmB,CAAC;EAE/E","file":"../../../../../../../../../../packages/flutter/src/foundation/basic_types.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__basic_types: basic_types
  };
}));

//# sourceMappingURL=basic_types.dart.lib.js.map