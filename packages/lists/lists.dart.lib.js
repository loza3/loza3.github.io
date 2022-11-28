define(['dart_sdk'], (function load__packages__lists__lists_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var lists = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $leftShift = dartx['<<'];
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $add = dartx.add;
  var $hashCode = dartx.hashCode;
  var $plus = dartx['+'];
  var $isEmpty = dartx.isEmpty;
  var $last = dartx.last;
  var $clear = dartx.clear;
  var $first = dartx.first;
  var $rightShift = dartx['>>'];
  var $cast = dartx.cast;
  var $toList = dartx.toList;
  var $insert = dartx.insert;
  var $getRange = dartx.getRange;
  var $removeRange = dartx.removeRange;
  var $insertAll = dartx.insertAll;
  var $compareTo = dartx.compareTo;
  var $sort = dartx.sort;
  var $where = dartx.where;
  var $modulo = dartx['%'];
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    JSArrayOfRangeList: () => (T.JSArrayOfRangeList = dart.constFn(_interceptors.JSArray$(lists.RangeList)))(),
    GroupedRangeListOfbool: () => (T.GroupedRangeListOfbool = dart.constFn(lists.GroupedRangeList$(core.bool)))(),
    SyncIterableOfint: () => (T.SyncIterableOfint = dart.constFn(_js_helper.SyncIterable$(core.int)))(),
    IterableOfint: () => (T.IterableOfint = dart.constFn(core.Iterable$(core.int)))(),
    VoidToIterableOfint: () => (T.VoidToIterableOfint = dart.constFn(dart.fnType(T.IterableOfint(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lists/lists.dart"];
  var length$ = dart.privateName(lists, "BitList.length");
  var __BitList__list = dart.privateName(lists, "_#BitList#_list");
  var _list = dart.privateName(lists, "_list");
  const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
  (Object_ListMixin$36.new = function() {
  }).prototype = Object_ListMixin$36.prototype;
  dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(core.bool));
  lists.BitList = class BitList extends Object_ListMixin$36 {
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get [_list]() {
      let t0;
      t0 = this[__BitList__list];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_list")) : t0;
    }
    set [_list](library$32package$58lists$47src$47bit_list$46dart$58$58_list$35param) {
      if (this[__BitList__list] == null)
        this[__BitList__list] = library$32package$58lists$47src$47bit_list$46dart$58$58_list$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_list"));
    }
    static ['_#new#tearOff'](length, fill = false) {
      return new lists.BitList.new(length, fill);
    }
    set length(length) {
      dart.throw(new core.UnsupportedError.new("length="));
    }
    _get(index) {
      if (index < 0 || index >= this.length) {
        dart.throw(new core.RangeError.new(index));
      }
      let slot = (index / 30)[$truncate]();
      let position = slot * 30;
      let mask = (1)[$leftShift](index - position);
      return (this[_list][$_get](slot) & mask) !== 0;
    }
    _set(index, value$) {
      let value = value$;
      let t0, t0$;
      core.bool.as(value);
      if (index < 0 || index >= this.length) {
        dart.throw(new core.RangeError.new(index));
      }
      let slot = (index / 30)[$truncate]();
      let position = slot * 30;
      let mask = (1)[$leftShift](index - position);
      if (value) {
        t0 = this[_list];
        t0[$_set](slot, (t0[$_get](slot) | mask) >>> 0);
      } else {
        t0$ = this[_list];
        t0$[$_set](slot, (t0$[$_get](slot) & (1073741823 ^ mask) >>> 0) >>> 0);
      }
      return value$;
    }
    get(index) {
      return this._get(index);
    }
    reset(index) {
      this._set(index, false);
    }
    set(index) {
      this._set(index, true);
    }
  };
  (lists.BitList.new = function(length, fill = false) {
    this[__BitList__list] = null;
    this[length$] = length;
    if (this.length < 0) {
      dart.throw(new core.ArgumentError.new("length should not be negative: " + dart.str(this.length)));
    }
    let slots = ((this.length - 1) / 30)[$truncate]() + 1;
    if (fill === true) {
      this[_list] = T.ListOfint().filled(slots, 1073741823);
    } else {
      this[_list] = T.ListOfint().filled(slots, 0);
    }
  }).prototype = lists.BitList.prototype;
  dart.addTypeTests(lists.BitList);
  dart.addTypeCaches(lists.BitList);
  dart.setMethodSignature(lists.BitList, () => ({
    __proto__: dart.getMethods(lists.BitList.__proto__),
    _get: dart.fnType(core.bool, [core.int]),
    [$_get]: dart.fnType(core.bool, [core.int]),
    _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
    [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
    get: dart.fnType(core.bool, [core.int]),
    reset: dart.fnType(dart.void, [core.int]),
    set: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(lists.BitList, () => ({
    __proto__: dart.getGetters(lists.BitList.__proto__),
    [_list]: core.List$(core.int)
  }));
  dart.setSetterSignature(lists.BitList, () => ({
    __proto__: dart.getSetters(lists.BitList.__proto__),
    [_list]: core.List$(core.int),
    length: core.int,
    [$length]: core.int
  }));
  dart.setLibraryUri(lists.BitList, I[0]);
  dart.setFieldSignature(lists.BitList, () => ({
    __proto__: dart.getFields(lists.BitList.__proto__),
    length: dart.finalFieldType(core.int),
    [__BitList__list]: dart.fieldType(dart.nullable(core.List$(core.int)))
  }));
  dart.defineExtensionMethods(lists.BitList, ['_get', '_set']);
  dart.defineExtensionAccessors(lists.BitList, ['length']);
  var _length$ = dart.privateName(lists, "_length");
  var _fill$ = dart.privateName(lists, "_fill");
  const _is_FilledList_default = Symbol('_is_FilledList_default');
  lists.FilledList$ = dart.generic(E => {
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    class FilledList extends Object_ListMixin$36 {
      static ['_#new#tearOff'](E, _length, _fill) {
        return new (lists.FilledList$(E)).new(_length, _fill);
      }
      get length() {
        return this[_length$];
      }
      set length(length) {
        dart.throw(new core.UnsupportedError.new("length="));
      }
      _get(index) {
        if (index < 0 || index >= this[_length$]) {
          dart.throw(new core.RangeError.new(index));
        }
        return this[_fill$];
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        dart.throw(new core.UnsupportedError.new("operator []="));
        return value$;
      }
    }
    (FilledList.new = function(_length, _fill) {
      this[_length$] = _length;
      this[_fill$] = _fill;
      if (this[_length$] < 0) {
        dart.throw(new core.ArgumentError.new("length should not be negative: " + dart.str(this.length)));
      }
    }).prototype = FilledList.prototype;
    dart.addTypeTests(FilledList);
    FilledList.prototype[_is_FilledList_default] = true;
    dart.addTypeCaches(FilledList);
    dart.setMethodSignature(FilledList, () => ({
      __proto__: dart.getMethods(FilledList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(FilledList, () => ({
      __proto__: dart.getGetters(FilledList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(FilledList, () => ({
      __proto__: dart.getSetters(FilledList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(FilledList, I[0]);
    dart.setFieldSignature(FilledList, () => ({
      __proto__: dart.getFields(FilledList.__proto__),
      [_fill$]: dart.finalFieldType(E),
      [_length$]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionMethods(FilledList, ['_get', '_set']);
    dart.defineExtensionAccessors(FilledList, ['length']);
    return FilledList;
  });
  lists.FilledList = lists.FilledList$();
  dart.addTypeTests(lists.FilledList, _is_FilledList_default);
  var key$ = dart.privateName(lists, "GroupedRangeList.key");
  var end$ = dart.privateName(lists, "RangeList.end");
  var hashCode = dart.privateName(lists, "RangeList.hashCode");
  var start$ = dart.privateName(lists, "RangeList.start");
  var __RangeList__length = dart.privateName(lists, "_#RangeList#_length");
  const Object_ListMixin$36$ = class Object_ListMixin extends core.Object {};
  (Object_ListMixin$36$.new = function() {
  }).prototype = Object_ListMixin$36$.prototype;
  dart.applyMixin(Object_ListMixin$36$, collection.ListMixin$(core.int));
  lists.RangeList = class RangeList extends Object_ListMixin$36$ {
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get hashCode() {
      return this[hashCode];
    }
    set hashCode(value) {
      super.hashCode = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get [_length$]() {
      let t0;
      t0 = this[__RangeList__length];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_length")) : t0;
    }
    set [_length$](library$32package$58lists$47src$47range_list$46dart$58$58_length$35param) {
      if (this[__RangeList__length] == null)
        this[__RangeList__length] = library$32package$58lists$47src$47range_list$46dart$58$58_length$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_length"));
    }
    static ['_#new#tearOff'](start, end) {
      return new lists.RangeList.new(start, end);
    }
    get length() {
      return this[_length$];
    }
    set length(length) {
      dart.throw(new core.UnsupportedError.new("length="));
    }
    ['+'](other) {
      T.ListOfint().as(other);
      if (!lists.RangeList.is(other)) {
        dart.throw(new core.ArgumentError.new("other: " + dart.str(other)));
      }
      let start = null;
      let end = null;
      let otherRange = other;
      if (this.start < otherRange.start) {
        start = this.start;
      } else {
        start = otherRange.start;
      }
      if (this.end > otherRange.end) {
        end = this.end;
      } else {
        end = otherRange.end;
      }
      return new lists.RangeList.new(start, end);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (lists.RangeList.is(other)) {
        return this.start === other.start && this.end === other.end;
      }
      return false;
    }
    _get(index) {
      if (index < 0 || index >= this[_length$]) {
        dart.throw(new core.RangeError.new(index));
      }
      return this.start + index;
    }
    _set(index, value$) {
      let value = value$;
      core.int.as(value);
      dart.throw(new core.UnsupportedError.new("operator []="));
      return value$;
    }
    contains(value) {
      if (value == null || !core.int.is(value) || dart.notNull(value) > this.end || dart.notNull(value) < this.start) {
        return false;
      }
      return true;
    }
    includes(other) {
      return other.start >= this.start && other.start <= this.end && other.end >= this.start && other.end <= this.end;
    }
    intersect(other) {
      return this.start <= other.start && this.end >= other.start || other.start <= this.start && other.end >= this.start;
    }
    intersection(other) {
      if (!this.intersect(other)) {
        return null;
      }
      if (this._equals(other)) {
        return new lists.RangeList.new(this.start, this.end);
      }
      let start = this.start;
      if (other.start > start) {
        start = other.start;
      }
      let end = this.end;
      if (other.end < end) {
        end = other.end;
      }
      return new lists.RangeList.new(start, end);
    }
    subtract(other) {
      let result = T.JSArrayOfRangeList().of([]);
      if (!this.intersect(other)) {
        return result;
      }
      if (this.start < other.start) {
        result[$add](new lists.RangeList.new(this.start, other.start - 1));
      }
      if (other.end < this.end) {
        result[$add](new lists.RangeList.new(other.end + 1, this.end));
      }
      return result;
    }
    toStepList(step) {
      return new lists.StepList.new(this.start, this.end, step);
    }
    toString() {
      return "[" + dart.str(this.start) + ".." + dart.str(this.end) + "]";
    }
  };
  (lists.RangeList.new = function(start, end) {
    this[__RangeList__length] = null;
    this[hashCode] = (start[$hashCode] | end[$hashCode]) >>> 0;
    this[start$] = start;
    this[end$] = end;
    if (start > end) {
      dart.throw(new core.ArgumentError.new("The value of the argument 'start' is greater than the value of the argument 'end': " + dart.str(this)));
    }
    this[_length$] = end - start + 1;
  }).prototype = lists.RangeList.prototype;
  dart.addTypeTests(lists.RangeList);
  dart.addTypeCaches(lists.RangeList);
  dart.setMethodSignature(lists.RangeList, () => ({
    __proto__: dart.getMethods(lists.RangeList.__proto__),
    '+': dart.fnType(lists.RangeList, [dart.nullable(core.Object)]),
    [$plus]: dart.fnType(lists.RangeList, [dart.nullable(core.Object)]),
    _get: dart.fnType(core.int, [core.int]),
    [$_get]: dart.fnType(core.int, [core.int]),
    _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
    [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
    includes: dart.fnType(core.bool, [lists.RangeList]),
    intersect: dart.fnType(core.bool, [lists.RangeList]),
    intersection: dart.fnType(dart.nullable(lists.RangeList), [lists.RangeList]),
    subtract: dart.fnType(core.List$(lists.RangeList), [lists.RangeList]),
    toStepList: dart.fnType(lists.StepList, [core.int])
  }));
  dart.setGetterSignature(lists.RangeList, () => ({
    __proto__: dart.getGetters(lists.RangeList.__proto__),
    [_length$]: core.int,
    length: core.int,
    [$length]: core.int
  }));
  dart.setSetterSignature(lists.RangeList, () => ({
    __proto__: dart.getSetters(lists.RangeList.__proto__),
    [_length$]: core.int,
    length: core.int,
    [$length]: core.int
  }));
  dart.setLibraryUri(lists.RangeList, I[0]);
  dart.setFieldSignature(lists.RangeList, () => ({
    __proto__: dart.getFields(lists.RangeList.__proto__),
    end: dart.finalFieldType(core.int),
    hashCode: dart.finalFieldType(core.int),
    start: dart.finalFieldType(core.int),
    [__RangeList__length]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(lists.RangeList, [
    '+',
    '_equals',
    '_get',
    '_set',
    'contains',
    'toString'
  ]);
  dart.defineExtensionAccessors(lists.RangeList, ['hashCode', 'length']);
  const _is_GroupedRangeList_default = Symbol('_is_GroupedRangeList_default');
  lists.GroupedRangeList$ = dart.generic(TKey => {
    var __t$GroupedRangeListOfTKey = () => (__t$GroupedRangeListOfTKey = dart.constFn(lists.GroupedRangeList$(TKey)))();
    var __t$JSArrayOfGroupedRangeListOfTKey = () => (__t$JSArrayOfGroupedRangeListOfTKey = dart.constFn(_interceptors.JSArray$(__t$GroupedRangeListOfTKey())))();
    class GroupedRangeList extends lists.RangeList {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
      static ['_#new#tearOff'](TKey, start, end, key) {
        return new (lists.GroupedRangeList$(TKey)).new(start, end, key);
      }
      intersection(other) {
        if (!this.intersect(other)) {
          return null;
        }
        if (this._equals(other)) {
          return new (__t$GroupedRangeListOfTKey()).new(this.start, this.end, this.key);
        }
        let start = this.start;
        if (other.start > start) {
          start = other.start;
        }
        let end = this.end;
        if (other.end < end) {
          end = other.end;
        }
        return new (__t$GroupedRangeListOfTKey()).new(start, end, this.key);
      }
      subtract(other) {
        let result = __t$JSArrayOfGroupedRangeListOfTKey().of([]);
        if (!this.intersect(other)) {
          return result;
        }
        if (this.start < other.start) {
          result[$add](new (__t$GroupedRangeListOfTKey()).new(this.start, other.start - 1, this.key));
        }
        if (other.end < this.end) {
          result[$add](new (__t$GroupedRangeListOfTKey()).new(other.end + 1, this.end, this.key));
        }
        return result;
      }
      toString() {
        return "[" + dart.str(this.start) + ".." + dart.str(this.end) + "](" + dart.str(this.key) + ")";
      }
    }
    (GroupedRangeList.new = function(start, end, key) {
      this[key$] = key;
      GroupedRangeList.__proto__.new.call(this, start, end);
      ;
    }).prototype = GroupedRangeList.prototype;
    dart.addTypeTests(GroupedRangeList);
    GroupedRangeList.prototype[_is_GroupedRangeList_default] = true;
    dart.addTypeCaches(GroupedRangeList);
    dart.setMethodSignature(GroupedRangeList, () => ({
      __proto__: dart.getMethods(GroupedRangeList.__proto__),
      intersection: dart.fnType(dart.nullable(lists.GroupedRangeList$(TKey)), [lists.RangeList]),
      subtract: dart.fnType(core.List$(lists.GroupedRangeList$(TKey)), [lists.RangeList])
    }));
    dart.setLibraryUri(GroupedRangeList, I[0]);
    dart.setFieldSignature(GroupedRangeList, () => ({
      __proto__: dart.getFields(GroupedRangeList.__proto__),
      key: dart.finalFieldType(TKey)
    }));
    dart.defineExtensionMethods(GroupedRangeList, ['toString']);
    return GroupedRangeList;
  });
  lists.GroupedRangeList = lists.GroupedRangeList$();
  dart.addTypeTests(lists.GroupedRangeList, _is_GroupedRangeList_default);
  var base$ = dart.privateName(lists, "ListPointer.base");
  var offset$ = dart.privateName(lists, "ListPointer.offset");
  const _is_ListPointer_default = Symbol('_is_ListPointer_default');
  lists.ListPointer$ = dart.generic(T => {
    var __t$ListOfT = () => (__t$ListOfT = dart.constFn(core.List$(T)))();
    var __t$ListPointerOfT = () => (__t$ListPointerOfT = dart.constFn(lists.ListPointer$(T)))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(T));
    class ListPointer extends Object_ListMixin$36 {
      get base() {
        return this[base$];
      }
      set base(value) {
        super.base = value;
      }
      get offset() {
        return this[offset$];
      }
      set offset(value) {
        this[offset$] = value;
      }
      static ['_#new#tearOff'](T, base, offset = 0) {
        return new (lists.ListPointer$(T)).new(base, offset);
      }
      get length() {
        return this.base[$length] - this.offset;
      }
      set length(length) {
        dart.throw(new core.UnsupportedError.new("set length"));
      }
      ['+'](other) {
        __t$ListOfT().as(other);
        if (core.int.is(other)) {
          let i = core.int.as(other);
          return new (__t$ListPointerOfT()).new(this.base, this.offset + i);
        }
        dart.throw(new core.ArgumentError.value(other, "other"));
      }
      ['-'](other) {
        if (core.int.is(other)) {
          return new (__t$ListPointerOfT()).new(this.base, this.offset - dart.notNull(other));
        }
        dart.throw(new core.ArgumentError.value(other, "other"));
      }
      ['<'](other) {
        if (lists.ListPointer.is(other)) {
          if (this.base === other.base) {
            return this.offset < other.offset;
          }
        } else if (core.List.is(other)) {
          if (this.base === other) {
            return this.offset < 0;
          }
        }
        return false;
      }
      ['<='](other) {
        if (lists.ListPointer.is(other)) {
          if (this.base === other.base) {
            return this.offset <= other.offset;
          }
        } else if (core.List.is(other)) {
          if (this.base === other) {
            return this.offset <= 0;
          }
        }
        return false;
      }
      _equals(other) {
        if (other == null) return false;
        if (lists.ListPointer.is(other)) {
          if (this.base === other.base) {
            if (this.offset === other.offset) {
              return true;
            }
          }
        } else if (core.List.is(other)) {
          if (this.base === other) {
            if (this.offset === 0) {
              return true;
            }
          }
        }
        return false;
      }
      ['>'](other) {
        if (lists.ListPointer.is(other)) {
          if (this.base === other.base) {
            return this.offset > other.offset;
          }
        } else if (core.List.is(other)) {
          if (this.base === other) {
            return this.offset > 0;
          }
        }
        return false;
      }
      ['>='](other) {
        if (lists.ListPointer.is(other)) {
          if (this.base === other.base) {
            return this.offset >= other.offset;
          }
        } else if (core.List.is(other)) {
          if (this.base === other) {
            return this.offset >= 0;
          }
        }
        return false;
      }
      _get(index) {
        return this.base[$_get](this.offset + index);
      }
      _set(index, value$) {
        let value = value$;
        T.as(value);
        this.base[$_set](this.offset + index, value);
        return value$;
      }
      increment(n) {
        return new (__t$ListPointerOfT()).new(this.base, this.offset + n);
      }
    }
    (ListPointer.new = function(base, offset = 0) {
      this[offset$] = 0;
      this[base$] = base;
      this[offset$] = offset;
      ;
    }).prototype = ListPointer.prototype;
    dart.addTypeTests(ListPointer);
    ListPointer.prototype[_is_ListPointer_default] = true;
    dart.addTypeCaches(ListPointer);
    dart.setMethodSignature(ListPointer, () => ({
      __proto__: dart.getMethods(ListPointer.__proto__),
      '+': dart.fnType(lists.ListPointer$(T), [dart.nullable(core.Object)]),
      [$plus]: dart.fnType(lists.ListPointer$(T), [dart.nullable(core.Object)]),
      '-': dart.fnType(lists.ListPointer$(T), [dart.dynamic]),
      '<': dart.fnType(core.bool, [dart.dynamic]),
      '<=': dart.fnType(core.bool, [dart.dynamic]),
      '>': dart.fnType(core.bool, [dart.dynamic]),
      '>=': dart.fnType(core.bool, [dart.dynamic]),
      _get: dart.fnType(T, [core.int]),
      [$_get]: dart.fnType(T, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      increment: dart.fnType(lists.ListPointer$(T), [core.int])
    }));
    dart.setGetterSignature(ListPointer, () => ({
      __proto__: dart.getGetters(ListPointer.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(ListPointer, () => ({
      __proto__: dart.getSetters(ListPointer.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(ListPointer, I[0]);
    dart.setFieldSignature(ListPointer, () => ({
      __proto__: dart.getFields(ListPointer.__proto__),
      base: dart.finalFieldType(core.List$(T)),
      offset: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(ListPointer, ['+', '_equals', '_get', '_set']);
    dart.defineExtensionAccessors(ListPointer, ['length']);
    return ListPointer;
  });
  lists.ListPointer = lists.ListPointer$();
  dart.addTypeTests(lists.ListPointer, _is_ListPointer_default);
  var defaultValue$ = dart.privateName(lists, "SparseList.defaultValue");
  var __SparseList__equals = dart.privateName(lists, "_#SparseList#_equals");
  var __SparseList__fixedLength = dart.privateName(lists, "_#SparseList#_fixedLength");
  var _frozen = dart.privateName(lists, "_frozen");
  var _groups = dart.privateName(lists, "_groups");
  var __SparseList__length = dart.privateName(lists, "_#SparseList#_length");
  var _fixedLength = dart.privateName(lists, "_fixedLength");
  var _equals = dart.privateName(lists, "_equals");
  var _errorModificationNotAllowed = dart.privateName(lists, "_errorModificationNotAllowed");
  var _resetValues = dart.privateName(lists, "_resetValues");
  var _setGroup = dart.privateName(lists, "_setGroup");
  var _findNearestIndex = dart.privateName(lists, "_findNearestIndex");
  const _is_SparseList_default = Symbol('_is_SparseList_default');
  lists.SparseList$ = dart.generic(E => {
    var __t$GroupedRangeListOfE = () => (__t$GroupedRangeListOfE = dart.constFn(lists.GroupedRangeList$(E)))();
    var __t$JSArrayOfGroupedRangeListOfE = () => (__t$JSArrayOfGroupedRangeListOfE = dart.constFn(_interceptors.JSArray$(__t$GroupedRangeListOfE())))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    var __t$ENAndENTobool = () => (__t$ENAndENTobool = dart.constFn(dart.fnType(core.bool, [__t$EN(), __t$EN()])))();
    var __t$ListOfGroupedRangeListOfE = () => (__t$ListOfGroupedRangeListOfE = dart.constFn(core.List$(__t$GroupedRangeListOfE())))();
    var __t$GroupedRangeListOfEN = () => (__t$GroupedRangeListOfEN = dart.constFn(lists.GroupedRangeList$(__t$EN())))();
    var __t$JSArrayOfGroupedRangeListOfEN = () => (__t$JSArrayOfGroupedRangeListOfEN = dart.constFn(_interceptors.JSArray$(__t$GroupedRangeListOfEN())))();
    var __t$GroupedRangeListOfEAndGroupedRangeListOfEToint = () => (__t$GroupedRangeListOfEAndGroupedRangeListOfEToint = dart.constFn(dart.fnType(core.int, [__t$GroupedRangeListOfE(), __t$GroupedRangeListOfE()])))();
    var __t$GroupedRangeListOfETobool = () => (__t$GroupedRangeListOfETobool = dart.constFn(dart.fnType(core.bool, [__t$GroupedRangeListOfE()])))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(dart.nullable(E)));
    class SparseList extends Object_ListMixin$36 {
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      get [_equals]() {
        let t0;
        t0 = this[__SparseList__equals];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_equals")) : t0;
      }
      set [_equals](library$32package$58lists$47src$47sparse_list$46dart$58$58_equals$35param) {
        if (this[__SparseList__equals] == null)
          this[__SparseList__equals] = library$32package$58lists$47src$47sparse_list$46dart$58$58_equals$35param;
        else
          dart.throw(new _internal.LateError.fieldAI("_equals"));
      }
      get [_fixedLength]() {
        let t0;
        t0 = this[__SparseList__fixedLength];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_fixedLength")) : t0;
      }
      set [_fixedLength](library$32package$58lists$47src$47sparse_list$46dart$58$58_fixedLength$35param) {
        if (this[__SparseList__fixedLength] == null)
          this[__SparseList__fixedLength] = library$32package$58lists$47src$47sparse_list$46dart$58$58_fixedLength$35param;
        else
          dart.throw(new _internal.LateError.fieldAI("_fixedLength"));
      }
      get [_length$]() {
        let t0;
        t0 = this[__SparseList__length];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_length")) : t0;
      }
      set [_length$](library$32package$58lists$47src$47sparse_list$46dart$58$58_length$35param) {
        this[__SparseList__length] = library$32package$58lists$47src$47sparse_list$46dart$58$58_length$35param;
      }
      static ['_#new#tearOff'](E, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let equals = opts && 'equals' in opts ? opts.equals : null;
        return new (lists.SparseList$(E)).new({defaultValue: defaultValue, equals: equals});
      }
      static ['_#fixed#tearOff'](E, _length, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let equals = opts && 'equals' in opts ? opts.equals : null;
        return new (lists.SparseList$(E)).fixed(_length, {defaultValue: defaultValue, equals: equals});
      }
      get end() {
        if (this[_groups][$isEmpty]) {
          return null;
        }
        return this[_groups][$last].end;
      }
      get frozen() {
        return this[_frozen];
      }
      get groupCount() {
        return this[_groups][$length];
      }
      get groups() {
        return __t$ListOfGroupedRangeListOfE().unmodifiable(this[_groups]);
      }
      get length() {
        return this[_length$];
      }
      set length(newLength) {
        if (this[_fixedLength]) {
          dart.throw(new core.StateError.new("Unable to set the length of a fixed list."));
        }
        if (this.frozen) {
          this[_errorModificationNotAllowed]();
        }
        if (newLength < 0) {
          dart.throw(new core.RangeError.new(newLength));
        }
        if (this[_length$] === newLength) {
          return;
        }
        if (newLength < this[_length$]) {
          this[_resetValues](new lists.RangeList.new(newLength, this[_length$] - 1));
        } else if (newLength === 0) {
          this[_groups][$clear]();
        }
        this[_length$] = newLength;
      }
      get start() {
        if (this[_groups][$isEmpty]) {
          return null;
        }
        return this[_groups][$first].start;
      }
      _get(index) {
        if (index < 0 || index >= this[_length$]) {
          dart.throw(new core.RangeError.new(index));
        }
        if (this[_groups][$isEmpty]) return this.defaultValue;
        let right = this[_groups][$length];
        if (right === 1) {
          let group = this[_groups][$first];
          if (index <= group.end && index >= group.start) {
            return group.key;
          } else {
            return this.defaultValue;
          }
        }
        let left = 0;
        let key = index;
        let middle = null;
        let value = this.defaultValue;
        while (left < right) {
          middle = (left + right)[$rightShift](1);
          let group = this[_groups][$_get](middle);
          if (group.end < key) {
            left = middle + 1;
          } else {
            if (key >= group.start) {
              return group.key;
            }
            right = middle;
          }
        }
        return value;
      }
      _set(index, value$) {
        let value = value$;
        let t1, t0;
        __t$EN().as(value);
        if (this.frozen) {
          this[_errorModificationNotAllowed]();
        }
        if (index < 0 || index >= this[_length$]) {
          dart.throw(new core.RangeError.new(index));
        }
        if (value == null && this.defaultValue != null) {
          new core.ArgumentError.new("Collection can't contains null because default value is not null.");
        }
        if (t0 = value, t1 = this.defaultValue, this[_equals](t0, t1)) {
          this[_resetValues](new lists.RangeList.new(index, index));
        } else {
          this.setGroup(new (__t$GroupedRangeListOfE()).new(index, index, dart.nullCheck(value)));
        }
        return value$;
      }
      addGroup(group) {
        __t$GroupedRangeListOfE().as(group);
        if (this[_fixedLength]) {
          dart.throw(new core.StateError.new("Unable to add the group into fixed list."));
        }
        if (this.frozen) {
          this[_errorModificationNotAllowed]();
        }
        if (group.start < 0) {
          dart.throw(new core.RangeError.new(group.start));
        }
        this[_setGroup](group);
        if (this[_length$] < group.end + 1) {
          this[_length$] = group.end + 1;
        }
      }
      freeze() {
        this[_frozen] = true;
      }
      getAlignedGroups(range) {
        let intersecGroups = this.getGroups(range)[$cast](__t$GroupedRangeListOfEN())[$toList]();
        if (intersecGroups[$isEmpty]) {
          return __t$JSArrayOfGroupedRangeListOfEN().of([new (__t$GroupedRangeListOfEN()).new(range.start, range.end, this.defaultValue)]);
        }
        let first = intersecGroups[$first];
        if (range.start > first.start) {
          intersecGroups[$_set](0, dart.nullCheck(first.intersection(range)));
        } else if (range.start < first.start) {
          let insertion = new (__t$GroupedRangeListOfEN()).new(range.start, first.start - 1, this.defaultValue);
          intersecGroups[$insert](0, insertion);
        }
        let last = intersecGroups[$last];
        if (range.end > last.end) {
          let addition = new (__t$GroupedRangeListOfEN()).new(last.end + 1, range.end, this.defaultValue);
          intersecGroups[$add](addition);
        } else if (range.end < last.end) {
          intersecGroups[$_set](intersecGroups[$length] - 1, dart.nullCheck(last.intersection(range)));
        }
        return intersecGroups;
      }
      getAllSpace(range) {
        let groups = __t$JSArrayOfGroupedRangeListOfEN().of([]);
        let previous = null;
        for (let group of this.getAlignedGroups(range)) {
          if (previous != null) {
            let start = previous.end + 1;
            let delta = group.start - start;
            if (delta > 0) {
              groups[$add](new (__t$GroupedRangeListOfEN()).new(start, group.start - 1, this.defaultValue));
            }
          }
          groups[$add](group);
          previous = group;
        }
        return groups;
      }
      getGroups(range = null) {
        if (range == null) {
          return this[_groups][$getRange](0, this[_groups][$length]);
        }
        let length = this[_groups][$length];
        let left = this[_findNearestIndex](0, length, range.start);
        let firstIndex = -1;
        let lastIndex = -1;
        for (let i = left; i < length; i = i + 1) {
          if (this[_groups][$_get](i).intersect(range)) {
            if (firstIndex === -1) {
              firstIndex = i;
              lastIndex = i;
            } else {
              lastIndex = i;
            }
          } else if (firstIndex !== -1) {
            break;
          }
        }
        if (firstIndex === -1) {
          return __t$JSArrayOfGroupedRangeListOfE().of([]);
        }
        return this[_groups][$getRange](firstIndex, lastIndex + 1);
      }
      getIndexes() {
        const generator = () => {
          return new (T.SyncIterableOfint()).new((function* generator() {
            for (let group of this.groups) {
              let end = group.end;
              for (let i = group.start; i <= end; i = i + 1) {
                yield i;
              }
            }
          }).bind(this));
        };
        dart.fn(generator, T.VoidToIterableOfint());
        return generator();
      }
      removeValues(range) {
        if (this[_fixedLength]) {
          dart.throw(new core.StateError.new("Unable to remove the values from a fixed list."));
        }
        if (this.frozen) {
          this[_errorModificationNotAllowed]();
        }
        if (range.start < 0) {
          dart.throw(new core.RangeError.new(range.start));
        }
        this[_resetValues](range);
        if (this[_groups][$isEmpty]) {
          if (this[_length$] > range.start) {
            this[_length$] = range.start;
          }
        } else {
          let length = this[_groups][$last].end + 1;
          if (length > range.start && length < range.end) {
            length = range.start;
          }
          this[_length$] = length;
        }
      }
      resetValues(range) {
        if (this.frozen) {
          this[_errorModificationNotAllowed]();
        }
        if (range.start < 0 || range.start >= this[_length$]) {
          dart.throw(new core.RangeError.new(range.start));
        }
        if (range.end >= this[_length$]) {
          dart.throw(new core.RangeError.new(range.end));
        }
        this[_resetValues](range);
      }
      setGroup(group) {
        __t$GroupedRangeListOfE().as(group);
        if (this.frozen) {
          this[_errorModificationNotAllowed]();
        }
        if (group.start < 0 || group.start >= this[_length$]) {
          dart.throw(new core.RangeError.new(group.start));
        }
        if (group.end >= this[_length$]) {
          dart.throw(new core.RangeError.new(group.end));
        }
        this[_setGroup](group);
      }
      trim() {
        if (this[_fixedLength]) {
          dart.throw(new core.StateError.new("Unable to trim a fixed list."));
        }
        if (this.frozen) {
          this[_errorModificationNotAllowed]();
        }
        let groupCount = this[_groups][$length];
        if (groupCount === 0) {
          this[_length$] = 0;
        } else {
          this[_length$] = this[_groups][$_get](groupCount - 1).end + 1;
        }
      }
      [_errorModificationNotAllowed]() {
        dart.throw(new core.StateError.new("Unable to modify the frozen list."));
      }
      [_findNearestIndex](left, right, key) {
        if (right === 0) {
          return 0;
        }
        let middle = null;
        while (left < right) {
          middle = (left + right)[$rightShift](1);
          if (this[_groups][$_get](middle).end < key) {
            left = middle + 1;
          } else {
            right = middle;
          }
        }
        if (left > 0) {
          left = left - 1;
        }
        return left;
      }
      [_resetValues](range) {
        let rangeStart = range.start;
        let rangeEnd = range.end;
        let length = this[_groups][$length];
        let left = this[_findNearestIndex](0, length, range.start);
        let count = 0;
        let newGroups = __t$JSArrayOfGroupedRangeListOfE().of([]);
        for (let i = left; i < length; i = i + 1) {
          let current = this[_groups][$_get](i);
          let start = current.start;
          if (start > rangeEnd) {
            break;
          }
          let intersect = current.intersect(range);
          if (intersect) {
            let end = current.end;
            let key = current.key;
            if (start < rangeStart) {
              let newGroup = new (__t$GroupedRangeListOfE()).new(start, rangeStart - 1, key);
              newGroups[$add](newGroup);
            }
            if (end > rangeEnd) {
              let newGroup = new (__t$GroupedRangeListOfE()).new(rangeEnd + 1, end, key);
              newGroups[$add](newGroup);
            }
          } else {
            newGroups[$add](current);
          }
          count = count + 1;
        }
        this[_groups][$removeRange](left, left + count);
        this[_groups][$insertAll](left, newGroups);
      }
      [_setGroup](group) {
        let t1, t0, t1$, t0$, t1$0, t0$0;
        let groupKey = group.key;
        let length = this[_groups][$length];
        if (length === 0) {
          this[_groups][$add](group);
          return;
        }
        let groupStart = group.start;
        let lastEnd = this[_groups][$last].end;
        let left = null;
        if (groupStart === lastEnd + 1) {
          left = length - 1;
        } else if (groupStart > lastEnd) {
          this[_groups][$add](group);
          return;
        } else {
          left = this[_findNearestIndex](0, length, group.start);
        }
        let groupEnd = group.end;
        let count = 0;
        let newGroups = __t$JSArrayOfGroupedRangeListOfE().of([]);
        for (let i = left; i < length; i = i + 1) {
          let current = this[_groups][$_get](i);
          let start = current.start;
          if (start > groupEnd + 1) {
            break;
          }
          let end = current.end;
          let key = current.key;
          let intersect = current.intersect(group);
          if (intersect) {
            if (start < groupStart) {
              if (t0 = key, t1 = groupKey, this[_equals](t0, t1)) {
                group = new (__t$GroupedRangeListOfE()).new(start, groupEnd, groupKey);
              } else {
                let newGroup = new (__t$GroupedRangeListOfE()).new(start, groupStart - 1, key);
                newGroups[$add](newGroup);
              }
            }
            if (end > groupEnd) {
              if (t0$ = key, t1$ = groupKey, this[_equals](t0$, t1$)) {
                group = new (__t$GroupedRangeListOfE()).new(groupStart, end, key);
              } else {
                let newGroup = new (__t$GroupedRangeListOfE()).new(groupEnd + 1, end, key);
                newGroups[$add](newGroup);
              }
            }
          } else {
            if (t0$0 = key, t1$0 = groupKey, this[_equals](t0$0, t1$0)) {
              if (groupStart === end + 1) {
                group = new (__t$GroupedRangeListOfE()).new(start, groupEnd, key);
              } else if (start === groupEnd + 1) {
                group = new (__t$GroupedRangeListOfE()).new(groupStart, end, key);
              } else {
                newGroups[$add](current);
              }
            } else {
              newGroups[$add](current);
            }
          }
          count = count + 1;
        }
        newGroups[$add](group);
        newGroups[$sort](dart.fn((a, b) => a.start[$compareTo](b.start), __t$GroupedRangeListOfEAndGroupedRangeListOfEToint()));
        this[_groups][$removeRange](left, left + count);
        this[_groups][$insertAll](left, newGroups[$where](dart.fn(e => {
          let t1, t0;
          return !(t0 = e.key, t1 = this.defaultValue, this[_equals](t0, t1));
        }, __t$GroupedRangeListOfETobool())));
      }
    }
    (SparseList.new = function(opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      let equals = opts && 'equals' in opts ? opts.equals : null;
      this[__SparseList__equals] = null;
      this[__SparseList__fixedLength] = null;
      this[_frozen] = false;
      this[_groups] = __t$JSArrayOfGroupedRangeListOfE().of([]);
      this[__SparseList__length] = null;
      this[defaultValue$] = defaultValue;
      this[_length$] = 0;
      this[_fixedLength] = false;
      if (equals != null) {
        this[_equals] = equals;
      } else {
        this[_equals] = dart.fn((e1, e2) => dart.equals(e1, e2), __t$ENAndENTobool());
      }
    }).prototype = SparseList.prototype;
    (SparseList.fixed = function(_length, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      let equals = opts && 'equals' in opts ? opts.equals : null;
      this[__SparseList__equals] = null;
      this[__SparseList__fixedLength] = null;
      this[_frozen] = false;
      this[_groups] = __t$JSArrayOfGroupedRangeListOfE().of([]);
      this[__SparseList__length] = null;
      this[__SparseList__length] = _length;
      this[defaultValue$] = defaultValue;
      if (this[_length$] < 0) {
        dart.throw(new core.ArgumentError.new("length should not be negative: " + dart.str(this.length)));
      }
      this[_fixedLength] = true;
      if (equals != null) {
        this[_equals] = equals;
      } else {
        this[_equals] = dart.fn((e1, e2) => dart.equals(e1, e2), __t$ENAndENTobool());
      }
    }).prototype = SparseList.prototype;
    dart.addTypeTests(SparseList);
    SparseList.prototype[_is_SparseList_default] = true;
    dart.addTypeCaches(SparseList);
    dart.setMethodSignature(SparseList, () => ({
      __proto__: dart.getMethods(SparseList.__proto__),
      _get: dart.fnType(dart.nullable(E), [core.int]),
      [$_get]: dart.fnType(dart.nullable(E), [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      addGroup: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      freeze: dart.fnType(dart.void, []),
      getAlignedGroups: dart.fnType(core.List$(lists.GroupedRangeList$(dart.nullable(E))), [lists.RangeList]),
      getAllSpace: dart.fnType(core.List$(lists.GroupedRangeList$(dart.nullable(E))), [lists.RangeList]),
      getGroups: dart.fnType(core.Iterable$(lists.GroupedRangeList$(E)), [], [dart.nullable(lists.RangeList)]),
      getIndexes: dart.fnType(core.Iterable$(core.int), []),
      removeValues: dart.fnType(dart.void, [lists.RangeList]),
      resetValues: dart.fnType(dart.void, [lists.RangeList]),
      setGroup: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      trim: dart.fnType(dart.void, []),
      [_errorModificationNotAllowed]: dart.fnType(dart.void, []),
      [_findNearestIndex]: dart.fnType(core.int, [core.int, core.int, core.int]),
      [_resetValues]: dart.fnType(dart.void, [lists.RangeList]),
      [_setGroup]: dart.fnType(dart.void, [lists.GroupedRangeList$(E)])
    }));
    dart.setGetterSignature(SparseList, () => ({
      __proto__: dart.getGetters(SparseList.__proto__),
      [_equals]: dart.fnType(core.bool, [dart.nullable(E), dart.nullable(E)]),
      [_fixedLength]: core.bool,
      [_length$]: core.int,
      end: dart.nullable(core.int),
      frozen: core.bool,
      groupCount: core.int,
      groups: core.List$(lists.GroupedRangeList$(E)),
      length: core.int,
      [$length]: core.int,
      start: dart.nullable(core.int)
    }));
    dart.setSetterSignature(SparseList, () => ({
      __proto__: dart.getSetters(SparseList.__proto__),
      [_equals]: dart.fnType(core.bool, [dart.nullable(E), dart.nullable(E)]),
      [_fixedLength]: core.bool,
      [_length$]: core.int,
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(SparseList, I[0]);
    dart.setFieldSignature(SparseList, () => ({
      __proto__: dart.getFields(SparseList.__proto__),
      defaultValue: dart.finalFieldType(dart.nullable(E)),
      [__SparseList__equals]: dart.fieldType(dart.nullable(dart.fnType(core.bool, [dart.nullable(E), dart.nullable(E)]))),
      [__SparseList__fixedLength]: dart.fieldType(dart.nullable(core.bool)),
      [_frozen]: dart.fieldType(core.bool),
      [_groups]: dart.finalFieldType(core.List$(lists.GroupedRangeList$(E))),
      [__SparseList__length]: dart.fieldType(dart.nullable(core.int))
    }));
    dart.defineExtensionMethods(SparseList, ['_get', '_set']);
    dart.defineExtensionAccessors(SparseList, ['length']);
    return SparseList;
  });
  lists.SparseList = lists.SparseList$();
  dart.addTypeTests(lists.SparseList, _is_SparseList_default);
  lists.SparseBoolList = class SparseBoolList extends lists.SparseList$(core.bool) {
    static ['_#new#tearOff']() {
      return new lists.SparseBoolList.new();
    }
    static ['_#fixed#tearOff'](length) {
      return new lists.SparseBoolList.fixed(length);
    }
    addGroup(group) {
      T.GroupedRangeListOfbool().as(group);
      if (!(typeof group.key == 'boolean')) {
        dart.throw(new core.ArgumentError.new("Key '" + dart.str(group.key) + "' must be of type 'bool'."));
      }
      super.addGroup(group);
    }
    setGroup(group) {
      T.GroupedRangeListOfbool().as(group);
      if (!(typeof group.key == 'boolean')) {
        dart.throw(new core.ArgumentError.new("Key '" + dart.str(group.key) + "' must be of type 'bool'."));
      }
      super.setGroup(group);
    }
    _get(index) {
      return dart.nullCheck(super._get(index));
    }
  };
  (lists.SparseBoolList.new = function() {
    lists.SparseBoolList.__proto__.new.call(this, {defaultValue: false});
    ;
  }).prototype = lists.SparseBoolList.prototype;
  (lists.SparseBoolList.fixed = function(length) {
    lists.SparseBoolList.__proto__.fixed.call(this, length, {defaultValue: false});
    ;
  }).prototype = lists.SparseBoolList.prototype;
  dart.addTypeTests(lists.SparseBoolList);
  dart.addTypeCaches(lists.SparseBoolList);
  dart.setMethodSignature(lists.SparseBoolList, () => ({
    __proto__: dart.getMethods(lists.SparseBoolList.__proto__),
    _get: dart.fnType(core.bool, [core.int]),
    [$_get]: dart.fnType(core.bool, [core.int])
  }));
  dart.setLibraryUri(lists.SparseBoolList, I[0]);
  dart.defineExtensionMethods(lists.SparseBoolList, ['_get']);
  var end$0 = dart.privateName(lists, "StepList.end");
  var start$0 = dart.privateName(lists, "StepList.start");
  var __StepList__length = dart.privateName(lists, "_#StepList#_length");
  var __StepList__step = dart.privateName(lists, "_#StepList#_step");
  var _step = dart.privateName(lists, "_step");
  const Object_ListMixin$36$0 = class Object_ListMixin extends core.Object {};
  (Object_ListMixin$36$0.new = function() {
  }).prototype = Object_ListMixin$36$0.prototype;
  dart.applyMixin(Object_ListMixin$36$0, collection.ListMixin$(core.int));
  lists.StepList = class StepList extends Object_ListMixin$36$0 {
    get end() {
      return this[end$0];
    }
    set end(value) {
      super.end = value;
    }
    get start() {
      return this[start$0];
    }
    set start(value) {
      super.start = value;
    }
    get [_length$]() {
      let t0;
      t0 = this[__StepList__length];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_length")) : t0;
    }
    set [_length$](library$32package$58lists$47src$47step_list$46dart$58$58_length$35param) {
      if (this[__StepList__length] == null)
        this[__StepList__length] = library$32package$58lists$47src$47step_list$46dart$58$58_length$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_length"));
    }
    get [_step]() {
      let t0;
      t0 = this[__StepList__step];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_step")) : t0;
    }
    set [_step](library$32package$58lists$47src$47step_list$46dart$58$58_step$35param) {
      if (this[__StepList__step] == null)
        this[__StepList__step] = library$32package$58lists$47src$47step_list$46dart$58$58_step$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_step"));
    }
    static ['_#new#tearOff'](start, end, step = null) {
      return new lists.StepList.new(start, end, step);
    }
    get length() {
      return this[_length$];
    }
    set length(length) {
      dart.throw(new core.UnsupportedError.new("length="));
    }
    get step() {
      return this[_step];
    }
    _get(index) {
      if (index < 0 || index >= this[_length$]) {
        dart.throw(new core.RangeError.new(index));
      }
      return this.start + this.step * index;
    }
    _set(index, value$) {
      let value = value$;
      core.int.as(value);
      dart.throw(new core.UnsupportedError.new("operator []="));
      return value$;
    }
    contains(value) {
      if (value == null || !core.int.is(value)) {
        return false;
      }
      if (this[_length$] === 1) {
        return value === this.start;
      }
      let position = dart.notNull(value) - this.start;
      let index = (position / this.step)[$truncate]();
      if (index >= 0 && index < this[_length$]) {
        if (position[$modulo](index) === 0) {
          return true;
        }
      }
      return false;
    }
    toString() {
      if (this.step > 0) {
        return "[" + dart.str(this.start) + ".." + dart.str(this.end) + "; +" + dart.str(this.step) + "]";
      } else {
        return "[" + dart.str(this.start) + ".." + dart.str(this.end) + "; " + dart.str(this.step) + "]";
      }
    }
  };
  (lists.StepList.new = function(start, end, step = null) {
    this[__StepList__length] = null;
    this[__StepList__step] = null;
    this[start$0] = start;
    this[end$0] = end;
    if (step === 0) {
      dart.throw(new core.ArgumentError.new("step: " + dart.str(step)));
    }
    let count = this.end - this.start;
    if (step == null) {
      if (count > 0) {
        this[_step] = 1;
      } else {
        this[_step] = -1;
      }
    } else {
      this[_step] = step;
    }
    let tempLength = (count / this[_step])[$truncate]();
    if (tempLength < 1) {
      this[_length$] = 1;
    } else {
      this[_length$] = tempLength + 1;
    }
  }).prototype = lists.StepList.prototype;
  dart.addTypeTests(lists.StepList);
  dart.addTypeCaches(lists.StepList);
  dart.setMethodSignature(lists.StepList, () => ({
    __proto__: dart.getMethods(lists.StepList.__proto__),
    _get: dart.fnType(core.int, [core.int]),
    [$_get]: dart.fnType(core.int, [core.int]),
    _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
    [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(lists.StepList, () => ({
    __proto__: dart.getGetters(lists.StepList.__proto__),
    [_length$]: core.int,
    [_step]: core.int,
    length: core.int,
    [$length]: core.int,
    step: core.int
  }));
  dart.setSetterSignature(lists.StepList, () => ({
    __proto__: dart.getSetters(lists.StepList.__proto__),
    [_length$]: core.int,
    [_step]: core.int,
    length: core.int,
    [$length]: core.int
  }));
  dart.setLibraryUri(lists.StepList, I[0]);
  dart.setFieldSignature(lists.StepList, () => ({
    __proto__: dart.getFields(lists.StepList.__proto__),
    end: dart.finalFieldType(core.int),
    start: dart.finalFieldType(core.int),
    [__StepList__length]: dart.fieldType(dart.nullable(core.int)),
    [__StepList__step]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(lists.StepList, ['_get', '_set', 'contains', 'toString']);
  dart.defineExtensionAccessors(lists.StepList, ['length']);
  var _source$ = dart.privateName(lists, "_source");
  const _is_WrappedList_default = Symbol('_is_WrappedList_default');
  lists.WrappedList$ = dart.generic(E => {
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    class WrappedList extends Object_ListMixin$36 {
      static ['_#new#tearOff'](E, _source) {
        return new (lists.WrappedList$(E)).new(_source);
      }
      get length() {
        return this[_source$][$length];
      }
      set length(length) {
        dart.throw(new core.UnsupportedError.new("length="));
      }
      _get(index) {
        return this[_source$][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        dart.throw(new core.UnsupportedError.new("operator []="));
        return value$;
      }
      toString() {
        return this[_source$][$toString]();
      }
    }
    (WrappedList.new = function(_source) {
      this[_source$] = _source;
      ;
    }).prototype = WrappedList.prototype;
    dart.addTypeTests(WrappedList);
    WrappedList.prototype[_is_WrappedList_default] = true;
    dart.addTypeCaches(WrappedList);
    dart.setMethodSignature(WrappedList, () => ({
      __proto__: dart.getMethods(WrappedList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(WrappedList, () => ({
      __proto__: dart.getGetters(WrappedList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(WrappedList, () => ({
      __proto__: dart.getSetters(WrappedList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(WrappedList, I[0]);
    dart.setFieldSignature(WrappedList, () => ({
      __proto__: dart.getFields(WrappedList.__proto__),
      [_source$]: dart.finalFieldType(core.List$(E))
    }));
    dart.defineExtensionMethods(WrappedList, ['_get', '_set', 'toString']);
    dart.defineExtensionAccessors(WrappedList, ['length']);
    return WrappedList;
  });
  lists.WrappedList = lists.WrappedList$();
  dart.addTypeTests(lists.WrappedList, _is_WrappedList_default);
  dart.trackLibraries("packages/lists/lists.dart", {
    "package:lists/lists.dart": lists
  }, {
    "package:lists/lists.dart": ["src/bit_list.dart", "src/filled_list.dart", "src/grouped_range_list.dart", "src/list_pointer.dart", "src/range_list.dart", "src/sparse_bool_list.dart", "src/sparse_list.dart", "src/step_list.dart", "src/wrapped_list.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/bit_list.dart","src/filled_list.dart","src/range_list.dart","src/grouped_range_list.dart","src/list_pointer.dart","src/sparse_list.dart","src/sparse_bool_list.dart","src/step_list.dart","src/wrapped_list.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/lists/lists.dart.lib.js"}');
  // Exports:
  return {
    lists: lists
  };
}));

//# sourceMappingURL=lists.dart.lib.js.map
