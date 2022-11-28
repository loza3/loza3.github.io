define(['dart_sdk', 'packages/collection/src/comparators.dart'], (function load__packages__collection__src__equality_dart(dart_sdk, packages__collection__src__comparators$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const comparators = packages__collection__src__comparators$46dart.src__comparators;
  var equality$ = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $iterator = dartx.iterator;
  var $rightShift = dartx['>>'];
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $keys = dartx.keys;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    DefaultEqualityOfNever: () => (T.DefaultEqualityOfNever = dart.constFn(equality$.DefaultEquality$(dart.Never)))(),
    LinkedMapOf_MapEntry$int: () => (T.LinkedMapOf_MapEntry$int = dart.constFn(_js_helper.LinkedMap$(equality$._MapEntry, core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: T.DefaultEqualityOfNever().prototype
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:collection/src/equality.dart"];
  const _is_Equality_default = Symbol('_is_Equality_default');
  equality$.Equality$ = dart.generic(E => {
    class Equality extends core.Object {
      static ['_#new#tearOff'](E) {
        return new (equality$.DefaultEquality$(E)).new();
      }
    }
    (Equality[dart.mixinNew] = function() {
    }).prototype = Equality.prototype;
    dart.addTypeTests(Equality);
    Equality.prototype[_is_Equality_default] = true;
    dart.addTypeCaches(Equality);
    dart.setStaticMethodSignature(Equality, () => ['new']);
    dart.setLibraryUri(Equality, I[0]);
    dart.setStaticFieldSignature(Equality, () => ['_redirecting#']);
    return Equality;
  });
  equality$.Equality = equality$.Equality$();
  dart.addTypeTests(equality$.Equality, _is_Equality_default);
  var _comparisonKey = dart.privateName(equality$, "_comparisonKey");
  var _inner = dart.privateName(equality$, "_inner");
  const _is_EqualityBy_default = Symbol('_is_EqualityBy_default');
  equality$.EqualityBy$ = dart.generic((E, F) => {
    class EqualityBy extends core.Object {
      static ['_#new#tearOff'](E, F, comparisonKey, inner = C[0] || CT.C0) {
        return new (equality$.EqualityBy$(E, F)).new(comparisonKey, inner);
      }
      equals(e1, e2) {
        let t0, t0$;
        E.as(e1);
        E.as(e2);
        return this[_inner].equals((t0 = e1, this[_comparisonKey](t0)), (t0$ = e2, this[_comparisonKey](t0$)));
      }
      hash(e) {
        let t0;
        E.as(e);
        return this[_inner].hash((t0 = e, this[_comparisonKey](t0)));
      }
      isValidKey(o) {
        let t0;
        if (E.is(o)) {
          let value = (t0 = o, this[_comparisonKey](t0));
          return this[_inner].isValidKey(value);
        }
        return false;
      }
    }
    (EqualityBy.new = function(comparisonKey, inner = C[0] || CT.C0) {
      this[_comparisonKey] = comparisonKey;
      this[_inner] = inner;
      ;
    }).prototype = EqualityBy.prototype;
    dart.addTypeTests(EqualityBy);
    EqualityBy.prototype[_is_EqualityBy_default] = true;
    dart.addTypeCaches(EqualityBy);
    EqualityBy[dart.implements] = () => [equality$.Equality$(E)];
    dart.setMethodSignature(EqualityBy, () => ({
      __proto__: dart.getMethods(EqualityBy.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(EqualityBy, I[0]);
    dart.setFieldSignature(EqualityBy, () => ({
      __proto__: dart.getFields(EqualityBy.__proto__),
      [_comparisonKey]: dart.finalFieldType(dart.fnType(F, [E])),
      [_inner]: dart.finalFieldType(equality$.Equality$(F))
    }));
    return EqualityBy;
  });
  equality$.EqualityBy = equality$.EqualityBy$();
  dart.addTypeTests(equality$.EqualityBy, _is_EqualityBy_default);
  const _is_DefaultEquality_default = Symbol('_is_DefaultEquality_default');
  equality$.DefaultEquality$ = dart.generic(E => {
    class DefaultEquality extends core.Object {
      static ['_#new#tearOff'](E) {
        return new (equality$.DefaultEquality$(E)).new();
      }
      equals(e1, e2) {
        return dart.equals(e1, e2);
      }
      hash(e) {
        return dart.hashCode(e);
      }
      isValidKey(o) {
        return true;
      }
    }
    (DefaultEquality.new = function() {
      ;
    }).prototype = DefaultEquality.prototype;
    dart.addTypeTests(DefaultEquality);
    DefaultEquality.prototype[_is_DefaultEquality_default] = true;
    dart.addTypeCaches(DefaultEquality);
    DefaultEquality[dart.implements] = () => [equality$.Equality$(E)];
    dart.setMethodSignature(DefaultEquality, () => ({
      __proto__: dart.getMethods(DefaultEquality.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(DefaultEquality, I[0]);
    return DefaultEquality;
  });
  equality$.DefaultEquality = equality$.DefaultEquality$();
  dart.addTypeTests(equality$.DefaultEquality, _is_DefaultEquality_default);
  const _is_IdentityEquality_default = Symbol('_is_IdentityEquality_default');
  equality$.IdentityEquality$ = dart.generic(E => {
    class IdentityEquality extends core.Object {
      static ['_#new#tearOff'](E) {
        return new (equality$.IdentityEquality$(E)).new();
      }
      equals(e1, e2) {
        E.as(e1);
        E.as(e2);
        return core.identical(e1, e2);
      }
      hash(e) {
        E.as(e);
        return core.identityHashCode(e);
      }
      isValidKey(o) {
        return true;
      }
    }
    (IdentityEquality.new = function() {
      ;
    }).prototype = IdentityEquality.prototype;
    dart.addTypeTests(IdentityEquality);
    IdentityEquality.prototype[_is_IdentityEquality_default] = true;
    dart.addTypeCaches(IdentityEquality);
    IdentityEquality[dart.implements] = () => [equality$.Equality$(E)];
    dart.setMethodSignature(IdentityEquality, () => ({
      __proto__: dart.getMethods(IdentityEquality.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(IdentityEquality, I[0]);
    return IdentityEquality;
  });
  equality$.IdentityEquality = equality$.IdentityEquality$();
  dart.addTypeTests(equality$.IdentityEquality, _is_IdentityEquality_default);
  var _elementEquality = dart.privateName(equality$, "IterableEquality._elementEquality");
  var _elementEquality$ = dart.privateName(equality$, "_elementEquality");
  const _is_IterableEquality_default = Symbol('_is_IterableEquality_default');
  equality$.IterableEquality$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$IterableNOfE = () => (__t$IterableNOfE = dart.constFn(dart.nullable(__t$IterableOfE())))();
    class IterableEquality extends core.Object {
      get [_elementEquality$]() {
        return this[_elementEquality];
      }
      set [_elementEquality$](value) {
        super[_elementEquality$] = value;
      }
      static ['_#new#tearOff'](E, elementEquality = C[0] || CT.C0) {
        return new (equality$.IterableEquality$(E)).new(elementEquality);
      }
      equals(elements1, elements2) {
        __t$IterableNOfE().as(elements1);
        __t$IterableNOfE().as(elements2);
        if (elements1 == elements2) return true;
        if (elements1 == null || elements2 == null) return false;
        let it1 = elements1[$iterator];
        let it2 = elements2[$iterator];
        while (true) {
          let hasNext = it1.moveNext();
          if (hasNext !== it2.moveNext()) return false;
          if (!hasNext) return true;
          if (!this[_elementEquality$].equals(it1.current, it2.current)) return false;
        }
      }
      hash(elements) {
        __t$IterableNOfE().as(elements);
        if (elements == null) return dart.hashCode(null);
        let hash = 0;
        for (let element of elements) {
          let c = this[_elementEquality$].hash(element);
          hash = (hash + c & 2147483647) >>> 0;
          hash = (hash + (hash << 10 >>> 0) & 2147483647) >>> 0;
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = (hash + (hash << 3 >>> 0) & 2147483647) >>> 0;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = (hash + (hash << 15 >>> 0) & 2147483647) >>> 0;
        return hash;
      }
      isValidKey(o) {
        return __t$IterableOfE().is(o);
      }
    }
    (IterableEquality.new = function(elementEquality = C[0] || CT.C0) {
      this[_elementEquality] = elementEquality;
      ;
    }).prototype = IterableEquality.prototype;
    dart.addTypeTests(IterableEquality);
    IterableEquality.prototype[_is_IterableEquality_default] = true;
    dart.addTypeCaches(IterableEquality);
    IterableEquality[dart.implements] = () => [equality$.Equality$(core.Iterable$(E))];
    dart.setMethodSignature(IterableEquality, () => ({
      __proto__: dart.getMethods(IterableEquality.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(IterableEquality, I[0]);
    dart.setFieldSignature(IterableEquality, () => ({
      __proto__: dart.getFields(IterableEquality.__proto__),
      [_elementEquality$]: dart.finalFieldType(equality$.Equality$(dart.nullable(E)))
    }));
    return IterableEquality;
  });
  equality$.IterableEquality = equality$.IterableEquality$();
  dart.addTypeTests(equality$.IterableEquality, _is_IterableEquality_default);
  var _elementEquality$0 = dart.privateName(equality$, "ListEquality._elementEquality");
  const _is_ListEquality_default = Symbol('_is_ListEquality_default');
  equality$.ListEquality$ = dart.generic(E => {
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$ListNOfE = () => (__t$ListNOfE = dart.constFn(dart.nullable(__t$ListOfE())))();
    class ListEquality extends core.Object {
      get [_elementEquality$]() {
        return this[_elementEquality$0];
      }
      set [_elementEquality$](value) {
        super[_elementEquality$] = value;
      }
      static ['_#new#tearOff'](E, elementEquality = C[0] || CT.C0) {
        return new (equality$.ListEquality$(E)).new(elementEquality);
      }
      equals(list1, list2) {
        __t$ListNOfE().as(list1);
        __t$ListNOfE().as(list2);
        if (list1 == list2) return true;
        if (list1 == null || list2 == null) return false;
        let length = list1[$length];
        if (length !== list2[$length]) return false;
        for (let i = 0; i < length; i = i + 1) {
          if (!this[_elementEquality$].equals(list1[$_get](i), list2[$_get](i))) return false;
        }
        return true;
      }
      hash(list) {
        __t$ListNOfE().as(list);
        if (list == null) return dart.hashCode(null);
        let hash = 0;
        for (let i = 0; i < list[$length]; i = i + 1) {
          let c = this[_elementEquality$].hash(list[$_get](i));
          hash = (hash + c & 2147483647) >>> 0;
          hash = (hash + (hash << 10 >>> 0) & 2147483647) >>> 0;
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = (hash + (hash << 3 >>> 0) & 2147483647) >>> 0;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = (hash + (hash << 15 >>> 0) & 2147483647) >>> 0;
        return hash;
      }
      isValidKey(o) {
        return __t$ListOfE().is(o);
      }
    }
    (ListEquality.new = function(elementEquality = C[0] || CT.C0) {
      this[_elementEquality$0] = elementEquality;
      ;
    }).prototype = ListEquality.prototype;
    dart.addTypeTests(ListEquality);
    ListEquality.prototype[_is_ListEquality_default] = true;
    dart.addTypeCaches(ListEquality);
    ListEquality[dart.implements] = () => [equality$.Equality$(core.List$(E))];
    dart.setMethodSignature(ListEquality, () => ({
      __proto__: dart.getMethods(ListEquality.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(ListEquality, I[0]);
    dart.setFieldSignature(ListEquality, () => ({
      __proto__: dart.getFields(ListEquality.__proto__),
      [_elementEquality$]: dart.finalFieldType(equality$.Equality$(E))
    }));
    return ListEquality;
  });
  equality$.ListEquality = equality$.ListEquality$();
  dart.addTypeTests(equality$.ListEquality, _is_ListEquality_default);
  var _elementEquality$1 = dart.privateName(equality$, "_UnorderedEquality._elementEquality");
  const _is__UnorderedEquality_default = Symbol('_is__UnorderedEquality_default');
  equality$._UnorderedEquality$ = dart.generic((E, T) => {
    var __t$HashMapOfE$int = () => (__t$HashMapOfE$int = dart.constFn(collection.HashMap$(E, core.int)))();
    var __t$EAndETobool = () => (__t$EAndETobool = dart.constFn(dart.fnType(core.bool, [E, E])))();
    var __t$EToint = () => (__t$EToint = dart.constFn(dart.fnType(core.int, [E])))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    class _UnorderedEquality extends core.Object {
      get [_elementEquality$]() {
        return this[_elementEquality$1];
      }
      set [_elementEquality$](value) {
        super[_elementEquality$] = value;
      }
      equals(elements1, elements2) {
        let t0;
        __t$TN().as(elements1);
        __t$TN().as(elements2);
        if (elements1 == elements2) return true;
        if (elements1 == null || elements2 == null) return false;
        let counts = __t$HashMapOfE$int().new({equals: __t$EAndETobool().as(dart.bind(this[_elementEquality$], 'equals')), hashCode: __t$EToint().as(dart.bind(this[_elementEquality$], 'hash')), isValidKey: dart.bind(this[_elementEquality$], 'isValidKey')});
        let length = 0;
        for (let e of elements1) {
          let count = (t0 = counts[$_get](e), t0 == null ? 0 : t0);
          counts[$_set](e, count + 1);
          length = length + 1;
        }
        for (let e of elements2) {
          let count = counts[$_get](e);
          if (count == null || count === 0) return false;
          counts[$_set](e, dart.notNull(count) - 1);
          length = length - 1;
        }
        return length === 0;
      }
      hash(elements) {
        __t$TN().as(elements);
        if (elements == null) return dart.hashCode(null);
        let hash = 0;
        for (let element of elements) {
          let c = this[_elementEquality$].hash(element);
          hash = (hash + c & 2147483647) >>> 0;
        }
        hash = (hash + (hash << 3 >>> 0) & 2147483647) >>> 0;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = (hash + (hash << 15 >>> 0) & 2147483647) >>> 0;
        return hash;
      }
    }
    (_UnorderedEquality.new = function(_elementEquality) {
      this[_elementEquality$1] = _elementEquality;
      ;
    }).prototype = _UnorderedEquality.prototype;
    dart.addTypeTests(_UnorderedEquality);
    _UnorderedEquality.prototype[_is__UnorderedEquality_default] = true;
    dart.addTypeCaches(_UnorderedEquality);
    _UnorderedEquality[dart.implements] = () => [equality$.Equality$(T)];
    dart.setMethodSignature(_UnorderedEquality, () => ({
      __proto__: dart.getMethods(_UnorderedEquality.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      hash: dart.fnType(core.int, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_UnorderedEquality, I[0]);
    dart.setFieldSignature(_UnorderedEquality, () => ({
      __proto__: dart.getFields(_UnorderedEquality.__proto__),
      [_elementEquality$]: dart.finalFieldType(equality$.Equality$(E))
    }));
    return _UnorderedEquality;
  });
  equality$._UnorderedEquality = equality$._UnorderedEquality$();
  dart.addTypeTests(equality$._UnorderedEquality, _is__UnorderedEquality_default);
  const _is_UnorderedIterableEquality_default = Symbol('_is_UnorderedIterableEquality_default');
  equality$.UnorderedIterableEquality$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    class UnorderedIterableEquality extends equality$._UnorderedEquality$(E, core.Iterable$(E)) {
      static ['_#new#tearOff'](E, elementEquality = C[0] || CT.C0) {
        return new (equality$.UnorderedIterableEquality$(E)).new(elementEquality);
      }
      isValidKey(o) {
        return __t$IterableOfE().is(o);
      }
    }
    (UnorderedIterableEquality.new = function(elementEquality = C[0] || CT.C0) {
      UnorderedIterableEquality.__proto__.new.call(this, elementEquality);
      ;
    }).prototype = UnorderedIterableEquality.prototype;
    dart.addTypeTests(UnorderedIterableEquality);
    UnorderedIterableEquality.prototype[_is_UnorderedIterableEquality_default] = true;
    dart.addTypeCaches(UnorderedIterableEquality);
    dart.setMethodSignature(UnorderedIterableEquality, () => ({
      __proto__: dart.getMethods(UnorderedIterableEquality.__proto__),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(UnorderedIterableEquality, I[0]);
    return UnorderedIterableEquality;
  });
  equality$.UnorderedIterableEquality = equality$.UnorderedIterableEquality$();
  dart.addTypeTests(equality$.UnorderedIterableEquality, _is_UnorderedIterableEquality_default);
  const _is_SetEquality_default = Symbol('_is_SetEquality_default');
  equality$.SetEquality$ = dart.generic(E => {
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    class SetEquality extends equality$._UnorderedEquality$(E, core.Set$(E)) {
      static ['_#new#tearOff'](E, elementEquality = C[0] || CT.C0) {
        return new (equality$.SetEquality$(E)).new(elementEquality);
      }
      isValidKey(o) {
        return __t$SetOfE().is(o);
      }
    }
    (SetEquality.new = function(elementEquality = C[0] || CT.C0) {
      SetEquality.__proto__.new.call(this, elementEquality);
      ;
    }).prototype = SetEquality.prototype;
    dart.addTypeTests(SetEquality);
    SetEquality.prototype[_is_SetEquality_default] = true;
    dart.addTypeCaches(SetEquality);
    dart.setMethodSignature(SetEquality, () => ({
      __proto__: dart.getMethods(SetEquality.__proto__),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(SetEquality, I[0]);
    return SetEquality;
  });
  equality$.SetEquality = equality$.SetEquality$();
  dart.addTypeTests(equality$.SetEquality, _is_SetEquality_default);
  var _keyEquality = dart.privateName(equality$, "_keyEquality");
  var _valueEquality = dart.privateName(equality$, "_valueEquality");
  equality$._MapEntry = class _MapEntry extends core.Object {
    static ['_#new#tearOff'](equality, key, value) {
      return new equality$._MapEntry.new(equality, key, value);
    }
    get hashCode() {
      return (3 * this.equality[_keyEquality].hash(this.key) + 7 * this.equality[_valueEquality].hash(this.value) & 2147483647) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return equality$._MapEntry.is(other) && this.equality[_keyEquality].equals(this.key, other.key) && this.equality[_valueEquality].equals(this.value, other.value);
    }
  };
  (equality$._MapEntry.new = function(equality, key, value) {
    this.equality = equality;
    this.key = key;
    this.value = value;
    ;
  }).prototype = equality$._MapEntry.prototype;
  dart.addTypeTests(equality$._MapEntry);
  dart.addTypeCaches(equality$._MapEntry);
  dart.setLibraryUri(equality$._MapEntry, I[0]);
  dart.setFieldSignature(equality$._MapEntry, () => ({
    __proto__: dart.getFields(equality$._MapEntry.__proto__),
    equality: dart.finalFieldType(equality$.MapEquality),
    key: dart.finalFieldType(dart.nullable(core.Object)),
    value: dart.finalFieldType(dart.nullable(core.Object))
  }));
  dart.defineExtensionMethods(equality$._MapEntry, ['_equals']);
  dart.defineExtensionAccessors(equality$._MapEntry, ['hashCode']);
  var _keyEquality$ = dart.privateName(equality$, "MapEquality._keyEquality");
  var _valueEquality$ = dart.privateName(equality$, "MapEquality._valueEquality");
  const _is_MapEquality_default = Symbol('_is_MapEquality_default');
  equality$.MapEquality$ = dart.generic((K, V) => {
    var __t$MapOfK$V = () => (__t$MapOfK$V = dart.constFn(core.Map$(K, V)))();
    var __t$MapNOfK$V = () => (__t$MapNOfK$V = dart.constFn(dart.nullable(__t$MapOfK$V())))();
    class MapEquality extends core.Object {
      get [_keyEquality]() {
        return this[_keyEquality$];
      }
      set [_keyEquality](value) {
        super[_keyEquality] = value;
      }
      get [_valueEquality]() {
        return this[_valueEquality$];
      }
      set [_valueEquality](value) {
        super[_valueEquality] = value;
      }
      static ['_#new#tearOff'](K, V, opts) {
        let keys = opts && 'keys' in opts ? opts.keys : C[0] || CT.C0;
        let values = opts && 'values' in opts ? opts.values : C[0] || CT.C0;
        return new (equality$.MapEquality$(K, V)).new({keys: keys, values: values});
      }
      equals(map1, map2) {
        let t0;
        __t$MapNOfK$V().as(map1);
        __t$MapNOfK$V().as(map2);
        if (map1 == map2) return true;
        if (map1 == null || map2 == null) return false;
        let length = map1[$length];
        if (length !== map2[$length]) return false;
        let equalElementCounts = new (T.LinkedMapOf_MapEntry$int()).new();
        for (let key of map1[$keys]) {
          let entry = new equality$._MapEntry.new(this, key, map1[$_get](key));
          let count = (t0 = equalElementCounts[$_get](entry), t0 == null ? 0 : t0);
          equalElementCounts[$_set](entry, count + 1);
        }
        for (let key of map2[$keys]) {
          let entry = new equality$._MapEntry.new(this, key, map2[$_get](key));
          let count = equalElementCounts[$_get](entry);
          if (count == null || count === 0) return false;
          equalElementCounts[$_set](entry, dart.notNull(count) - 1);
        }
        return true;
      }
      hash(map) {
        __t$MapNOfK$V().as(map);
        if (map == null) return dart.hashCode(null);
        let hash = 0;
        for (let key of map[$keys]) {
          let keyHash = this[_keyEquality].hash(key);
          let valueHash = this[_valueEquality].hash(V.as(map[$_get](key)));
          hash = (hash + 3 * keyHash + 7 * valueHash & 2147483647) >>> 0;
        }
        hash = (hash + (hash << 3 >>> 0) & 2147483647) >>> 0;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = (hash + (hash << 15 >>> 0) & 2147483647) >>> 0;
        return hash;
      }
      isValidKey(o) {
        return __t$MapOfK$V().is(o);
      }
    }
    (MapEquality.new = function(opts) {
      let keys = opts && 'keys' in opts ? opts.keys : C[0] || CT.C0;
      let values = opts && 'values' in opts ? opts.values : C[0] || CT.C0;
      this[_keyEquality$] = keys;
      this[_valueEquality$] = values;
      ;
    }).prototype = MapEquality.prototype;
    dart.addTypeTests(MapEquality);
    MapEquality.prototype[_is_MapEquality_default] = true;
    dart.addTypeCaches(MapEquality);
    MapEquality[dart.implements] = () => [equality$.Equality$(core.Map$(K, V))];
    dart.setMethodSignature(MapEquality, () => ({
      __proto__: dart.getMethods(MapEquality.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(MapEquality, I[0]);
    dart.setFieldSignature(MapEquality, () => ({
      __proto__: dart.getFields(MapEquality.__proto__),
      [_keyEquality]: dart.finalFieldType(equality$.Equality$(K)),
      [_valueEquality]: dart.finalFieldType(equality$.Equality$(V))
    }));
    return MapEquality;
  });
  equality$.MapEquality = equality$.MapEquality$();
  dart.addTypeTests(equality$.MapEquality, _is_MapEquality_default);
  var _equalities = dart.privateName(equality$, "MultiEquality._equalities");
  var _equalities$ = dart.privateName(equality$, "_equalities");
  const _is_MultiEquality_default = Symbol('_is_MultiEquality_default');
  equality$.MultiEquality$ = dart.generic(E => {
    class MultiEquality extends core.Object {
      get [_equalities$]() {
        return this[_equalities];
      }
      set [_equalities$](value) {
        super[_equalities$] = value;
      }
      static ['_#new#tearOff'](E, equalities) {
        return new (equality$.MultiEquality$(E)).new(equalities);
      }
      equals(e1, e2) {
        E.as(e1);
        E.as(e2);
        for (let eq of this[_equalities$]) {
          if (eq.isValidKey(e1)) return eq.isValidKey(e2) && eq.equals(e1, e2);
        }
        return false;
      }
      hash(e) {
        E.as(e);
        for (let eq of this[_equalities$]) {
          if (eq.isValidKey(e)) return eq.hash(e);
        }
        return 0;
      }
      isValidKey(o) {
        for (let eq of this[_equalities$]) {
          if (eq.isValidKey(o)) return true;
        }
        return false;
      }
    }
    (MultiEquality.new = function(equalities) {
      this[_equalities] = equalities;
      ;
    }).prototype = MultiEquality.prototype;
    dart.addTypeTests(MultiEquality);
    MultiEquality.prototype[_is_MultiEquality_default] = true;
    dart.addTypeCaches(MultiEquality);
    MultiEquality[dart.implements] = () => [equality$.Equality$(E)];
    dart.setMethodSignature(MultiEquality, () => ({
      __proto__: dart.getMethods(MultiEquality.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
      isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(MultiEquality, I[0]);
    dart.setFieldSignature(MultiEquality, () => ({
      __proto__: dart.getFields(MultiEquality.__proto__),
      [_equalities$]: dart.finalFieldType(core.Iterable$(equality$.Equality$(E)))
    }));
    return MultiEquality;
  });
  equality$.MultiEquality = equality$.MultiEquality$();
  dart.addTypeTests(equality$.MultiEquality, _is_MultiEquality_default);
  var _base = dart.privateName(equality$, "DeepCollectionEquality._base");
  var _unordered = dart.privateName(equality$, "DeepCollectionEquality._unordered");
  var _base$ = dart.privateName(equality$, "_base");
  var _unordered$ = dart.privateName(equality$, "_unordered");
  equality$.DeepCollectionEquality = class DeepCollectionEquality extends core.Object {
    get [_base$]() {
      return this[_base];
    }
    set [_base$](value) {
      super[_base$] = value;
    }
    get [_unordered$]() {
      return this[_unordered];
    }
    set [_unordered$](value) {
      super[_unordered$] = value;
    }
    static ['_#new#tearOff'](base = C[0] || CT.C0) {
      return new equality$.DeepCollectionEquality.new(base);
    }
    static ['_#unordered#tearOff'](base = C[0] || CT.C0) {
      return new equality$.DeepCollectionEquality.unordered(base);
    }
    equals(e1, e2) {
      if (core.Set.is(e1)) {
        return core.Set.is(e2) && new equality$.SetEquality.new(this).equals(e1, e2);
      }
      if (core.Map.is(e1)) {
        return core.Map.is(e2) && new equality$.MapEquality.new({keys: this, values: this}).equals(e1, e2);
      }
      if (!this[_unordered$]) {
        if (core.List.is(e1)) {
          return core.List.is(e2) && new equality$.ListEquality.new(this).equals(e1, e2);
        }
        if (core.Iterable.is(e1)) {
          return core.Iterable.is(e2) && new equality$.IterableEquality.new(this).equals(e1, e2);
        }
      } else if (core.Iterable.is(e1)) {
        if (core.List.is(e1) !== core.List.is(e2)) return false;
        return core.Iterable.is(e2) && new equality$.UnorderedIterableEquality.new(this).equals(e1, e2);
      }
      return this[_base$].equals(e1, e2);
    }
    hash(o) {
      if (core.Set.is(o)) return new equality$.SetEquality.new(this).hash(o);
      if (core.Map.is(o)) return new equality$.MapEquality.new({keys: this, values: this}).hash(o);
      if (!this[_unordered$]) {
        if (core.List.is(o)) return new equality$.ListEquality.new(this).hash(o);
        if (core.Iterable.is(o)) return new equality$.IterableEquality.new(this).hash(o);
      } else if (core.Iterable.is(o)) {
        return new equality$.UnorderedIterableEquality.new(this).hash(o);
      }
      return this[_base$].hash(o);
    }
    isValidKey(o) {
      return core.Iterable.is(o) || core.Map.is(o) || this[_base$].isValidKey(o);
    }
  };
  (equality$.DeepCollectionEquality.new = function(base = C[0] || CT.C0) {
    this[_base] = base;
    this[_unordered] = false;
    ;
  }).prototype = equality$.DeepCollectionEquality.prototype;
  (equality$.DeepCollectionEquality.unordered = function(base = C[0] || CT.C0) {
    this[_base] = base;
    this[_unordered] = true;
    ;
  }).prototype = equality$.DeepCollectionEquality.prototype;
  dart.addTypeTests(equality$.DeepCollectionEquality);
  dart.addTypeCaches(equality$.DeepCollectionEquality);
  equality$.DeepCollectionEquality[dart.implements] = () => [equality$.Equality];
  dart.setMethodSignature(equality$.DeepCollectionEquality, () => ({
    __proto__: dart.getMethods(equality$.DeepCollectionEquality.__proto__),
    equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
    hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
    isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(equality$.DeepCollectionEquality, I[0]);
  dart.setFieldSignature(equality$.DeepCollectionEquality, () => ({
    __proto__: dart.getFields(equality$.DeepCollectionEquality.__proto__),
    [_base$]: dart.finalFieldType(equality$.Equality),
    [_unordered$]: dart.finalFieldType(core.bool)
  }));
  equality$.CaseInsensitiveEquality = class CaseInsensitiveEquality extends core.Object {
    static ['_#new#tearOff']() {
      return new equality$.CaseInsensitiveEquality.new();
    }
    equals(string1, string2) {
      core.String.as(string1);
      core.String.as(string2);
      return comparators.equalsIgnoreAsciiCase(string1, string2);
    }
    hash(string) {
      core.String.as(string);
      return comparators.hashIgnoreAsciiCase(string);
    }
    isValidKey(object) {
      return typeof object == 'string';
    }
  };
  (equality$.CaseInsensitiveEquality.new = function() {
    ;
  }).prototype = equality$.CaseInsensitiveEquality.prototype;
  dart.addTypeTests(equality$.CaseInsensitiveEquality);
  dart.addTypeCaches(equality$.CaseInsensitiveEquality);
  equality$.CaseInsensitiveEquality[dart.implements] = () => [equality$.Equality$(core.String)];
  dart.setMethodSignature(equality$.CaseInsensitiveEquality, () => ({
    __proto__: dart.getMethods(equality$.CaseInsensitiveEquality.__proto__),
    equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
    hash: dart.fnType(core.int, [dart.nullable(core.Object)]),
    isValidKey: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(equality$.CaseInsensitiveEquality, I[0]);
  dart.defineLazy(equality$, {
    /*equality$._hashMask*/get _hashMask() {
      return 2147483647;
    }
  }, false);
  dart.trackLibraries("packages/collection/src/equality.dart", {
    "package:collection/src/equality.dart": equality$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["equality.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/collection/src/equality.dart.lib.js"}');
  // Exports:
  return {
    src__equality: equality$
  };
}));

//# sourceMappingURL=equality.dart.lib.js.map
