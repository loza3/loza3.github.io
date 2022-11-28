define(['dart_sdk', 'packages/collection/src/algorithms.dart', 'packages/collection/src/utils.dart'], (function load__packages__collection__src__iterable_extensions_dart(dart_sdk, packages__collection__src__algorithms$46dart, packages__collection__src__utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const algorithms = packages__collection__src__algorithms$46dart.src__algorithms;
  const utils = packages__collection__src__utils$46dart.src__utils;
  var iterable_extensions = Object.create(dart.library);
  var $iterator = dartx.iterator;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $where = dartx.where;
  var $sort = dartx.sort;
  var $compareTo = dartx.compareTo;
  var $isEmpty = dartx.isEmpty;
  var $last = dartx.last;
  var $_get = dartx._get;
  var $isNaN = dartx.isNaN;
  var $truncate = dartx.truncate;
  var $remainder = dartx.remainder;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    RandomN: () => (T$.RandomN = dart.constFn(dart.nullable(math.Random)))(),
    TAndTToint: () => (T$.TAndTToint = dart.constFn(dart.gFnType(T => [core.int, [T, T]], T => [core.Comparable$(T)])))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(utils.compareComparable, T$.TAndTToint());
    }
  }, false);
  var C = [void 0];
  iterable_extensions['IterableExtension|sample'] = function IterableExtension$124sample(T, $this, count, random = null) {
    core.RangeError.checkNotNegative(count, "count");
    let iterator = $this[$iterator];
    let chosen = _interceptors.JSArray$(T).of([]);
    for (let i = 0; i < count; i = i + 1) {
      if (iterator.moveNext()) {
        chosen[$add](iterator.current);
      } else {
        return chosen;
      }
    }
    let index = count;
    random == null ? random = math.Random.new() : null;
    while (iterator.moveNext()) {
      index = index + 1;
      let position = random.nextInt(index);
      if (position < count) chosen[$_set](position, iterator.current);
    }
    return chosen;
  };
  iterable_extensions['IterableExtension|get#sample'] = function IterableExtension$124get$35sample(T, $this) {
    return dart.fn((count, random = null) => iterable_extensions['IterableExtension|sample'](T, $this, count, random), dart.fnType(core.List$(T), [core.int], [T$.RandomN()]));
  };
  iterable_extensions['IterableExtension|whereNot'] = function IterableExtension$124whereNot(T, $this, test) {
    return $this[$where](dart.fn(element => !test(element), dart.fnType(core.bool, [T])));
  };
  iterable_extensions['IterableExtension|get#whereNot'] = function IterableExtension$124get$35whereNot(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|whereNot'](T, $this, test), dart.fnType(core.Iterable$(T), [dart.fnType(core.bool, [T])]));
  };
  iterable_extensions['IterableExtension|sorted'] = function IterableExtension$124sorted(T, $this, compare) {
    let t6;
    t6 = (() => {
      let t5 = core.List$(T).of($this);
      return t5;
    })();
    return (() => {
      t6[$sort](compare);
      return t6;
    })();
  };
  iterable_extensions['IterableExtension|get#sorted'] = function IterableExtension$124get$35sorted(T, $this) {
    return dart.fn(compare => iterable_extensions['IterableExtension|sorted'](T, $this, compare), dart.fnType(core.List$(T), [dart.fnType(core.int, [T, T])]));
  };
  iterable_extensions['IterableExtension|sortedBy'] = function IterableExtension$124sortedBy(T, K, $this, keyOf) {
    let elements = (() => {
      let t8 = core.List$(T).of($this);
      return t8;
    })();
    algorithms.mergeSortBy(T, K, elements, keyOf, dart.gbind(C[0] || CT.C0, K));
    return elements;
  };
  iterable_extensions['IterableExtension|get#sortedBy'] = function IterableExtension$124get$35sortedBy(T, $this) {
    return dart.fn((K, keyOf) => iterable_extensions['IterableExtension|sortedBy'](T, K, $this, keyOf), dart.gFnType(K => [core.List$(T), [dart.fnType(K, [T])]], K => {
      var __t$ComparableOfK = () => (__t$ComparableOfK = dart.constFn(core.Comparable$(K)))();
      return [__t$ComparableOfK()];
    }));
  };
  iterable_extensions['IterableExtension|sortedByCompare'] = function IterableExtension$124sortedByCompare(T, K, $this, keyOf, compare) {
    let elements = (() => {
      let t11 = core.List$(T).of($this);
      return t11;
    })();
    algorithms.mergeSortBy(T, K, elements, keyOf, compare);
    return elements;
  };
  iterable_extensions['IterableExtension|get#sortedByCompare'] = function IterableExtension$124get$35sortedByCompare(T, $this) {
    return dart.fn((K, keyOf, compare) => iterable_extensions['IterableExtension|sortedByCompare'](T, K, $this, keyOf, compare), dart.gFnType(K => {
      var __t$KAndKToint = () => (__t$KAndKToint = dart.constFn(dart.fnType(core.int, [K, K])))();
      return [core.List$(T), [dart.fnType(K, [T]), __t$KAndKToint()]];
    }, K => {
      var __t$KAndKToint = () => (__t$KAndKToint = dart.constFn(dart.fnType(core.int, [K, K])))();
      return [T$.ObjectN()];
    }));
  };
  iterable_extensions['IterableExtension|get#isSorted'] = function IterableExtension$124get$35isSorted(T, $this) {
    return dart.fn(compare => iterable_extensions['IterableExtension|isSorted'](T, $this, compare), dart.fnType(core.bool, [dart.fnType(core.int, [T, T])]));
  };
  iterable_extensions['IterableExtension|isSorted'] = function IterableExtension$124isSorted(T, $this, compare) {
    let iterator = $this[$iterator];
    if (!iterator.moveNext()) return true;
    let previousElement = iterator.current;
    while (iterator.moveNext()) {
      let element = iterator.current;
      if (compare(previousElement, element) > 0) return false;
      previousElement = element;
    }
    return true;
  };
  iterable_extensions['IterableExtension|isSortedBy'] = function IterableExtension$124isSortedBy(T, K, $this, keyOf) {
    let iterator = $this[$iterator];
    if (!iterator.moveNext()) return true;
    let previousKey = keyOf(iterator.current);
    while (iterator.moveNext()) {
      let key = keyOf(iterator.current);
      if (previousKey[$compareTo](key) > 0) return false;
      previousKey = key;
    }
    return true;
  };
  iterable_extensions['IterableExtension|get#isSortedBy'] = function IterableExtension$124get$35isSortedBy(T, $this) {
    return dart.fn((K, keyOf) => iterable_extensions['IterableExtension|isSortedBy'](T, K, $this, keyOf), dart.gFnType(K => [core.bool, [dart.fnType(K, [T])]], K => {
      var __t$ComparableOfK = () => (__t$ComparableOfK = dart.constFn(core.Comparable$(K)))();
      return [__t$ComparableOfK()];
    }));
  };
  iterable_extensions['IterableExtension|isSortedByCompare'] = function IterableExtension$124isSortedByCompare(T, K, $this, keyOf, compare) {
    let iterator = $this[$iterator];
    if (!iterator.moveNext()) return true;
    let previousKey = keyOf(iterator.current);
    while (iterator.moveNext()) {
      let key = keyOf(iterator.current);
      if (compare(previousKey, key) > 0) return false;
      previousKey = key;
    }
    return true;
  };
  iterable_extensions['IterableExtension|get#isSortedByCompare'] = function IterableExtension$124get$35isSortedByCompare(T, $this) {
    return dart.fn((K, keyOf, compare) => iterable_extensions['IterableExtension|isSortedByCompare'](T, K, $this, keyOf, compare), dart.gFnType(K => {
      var __t$KAndKToint = () => (__t$KAndKToint = dart.constFn(dart.fnType(core.int, [K, K])))();
      return [core.bool, [dart.fnType(K, [T]), __t$KAndKToint()]];
    }, K => {
      var __t$KAndKToint = () => (__t$KAndKToint = dart.constFn(dart.fnType(core.int, [K, K])))();
      return [T$.ObjectN()];
    }));
  };
  iterable_extensions['IterableExtension|forEachIndexed'] = function IterableExtension$124forEachIndexed(T, $this, action) {
    let t20;
    let index = 0;
    for (let element of $this) {
      action((t20 = index, index = t20 + 1, t20), element);
    }
  };
  iterable_extensions['IterableExtension|get#forEachIndexed'] = function IterableExtension$124get$35forEachIndexed(T, $this) {
    return dart.fn(action => iterable_extensions['IterableExtension|forEachIndexed'](T, $this, action), dart.fnType(dart.void, [dart.fnType(dart.void, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|forEachWhile'] = function IterableExtension$124forEachWhile(T, $this, action) {
    for (let element of $this) {
      if (!action(element)) break;
    }
  };
  iterable_extensions['IterableExtension|get#forEachWhile'] = function IterableExtension$124get$35forEachWhile(T, $this) {
    return dart.fn(action => iterable_extensions['IterableExtension|forEachWhile'](T, $this, action), dart.fnType(dart.void, [dart.fnType(core.bool, [T])]));
  };
  iterable_extensions['IterableExtension|forEachIndexedWhile'] = function IterableExtension$124forEachIndexedWhile(T, $this, action) {
    let t24;
    let index = 0;
    for (let element of $this) {
      if (!action((t24 = index, index = t24 + 1, t24), element)) break;
    }
  };
  iterable_extensions['IterableExtension|get#forEachIndexedWhile'] = function IterableExtension$124get$35forEachIndexedWhile(T, $this) {
    return dart.fn(action => iterable_extensions['IterableExtension|forEachIndexedWhile'](T, $this, action), dart.fnType(dart.void, [dart.fnType(core.bool, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|mapIndexed'] = function IterableExtension$124mapIndexed(T, R, $this, convert) {
    return new (_js_helper.SyncIterable$(R)).new(function* IterableExtension$124mapIndexed() {
      let t26;
      let index = 0;
      for (let element of $this) {
        yield convert((t26 = index, index = t26 + 1, t26), element);
      }
    });
  };
  iterable_extensions['IterableExtension|get#mapIndexed'] = function IterableExtension$124get$35mapIndexed(T, $this) {
    return dart.fn((R, convert) => iterable_extensions['IterableExtension|mapIndexed'](T, R, $this, convert), dart.gFnType(R => {
      var __t$IterableOfR = () => (__t$IterableOfR = dart.constFn(core.Iterable$(R)))();
      return [__t$IterableOfR(), [dart.fnType(R, [core.int, T])]];
    }, R => {
      var __t$IterableOfR = () => (__t$IterableOfR = dart.constFn(core.Iterable$(R)))();
      return [T$.ObjectN()];
    }));
  };
  iterable_extensions['IterableExtension|whereIndexed'] = function IterableExtension$124whereIndexed(T, $this, test) {
    return new (_js_helper.SyncIterable$(T)).new(function* IterableExtension$124whereIndexed() {
      let t28;
      let index = 0;
      for (let element of $this) {
        if (test((t28 = index, index = t28 + 1, t28), element)) yield element;
      }
    });
  };
  iterable_extensions['IterableExtension|get#whereIndexed'] = function IterableExtension$124get$35whereIndexed(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|whereIndexed'](T, $this, test), dart.fnType(core.Iterable$(T), [dart.fnType(core.bool, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|whereNotIndexed'] = function IterableExtension$124whereNotIndexed(T, $this, test) {
    return new (_js_helper.SyncIterable$(T)).new(function* IterableExtension$124whereNotIndexed() {
      let t30;
      let index = 0;
      for (let element of $this) {
        if (!test((t30 = index, index = t30 + 1, t30), element)) yield element;
      }
    });
  };
  iterable_extensions['IterableExtension|get#whereNotIndexed'] = function IterableExtension$124get$35whereNotIndexed(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|whereNotIndexed'](T, $this, test), dart.fnType(core.Iterable$(T), [dart.fnType(core.bool, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|expandIndexed'] = function IterableExtension$124expandIndexed(T, R, $this, expand) {
    return new (_js_helper.SyncIterable$(R)).new(function* IterableExtension$124expandIndexed() {
      let t32;
      let index = 0;
      for (let element of $this) {
        yield* expand((t32 = index, index = t32 + 1, t32), element);
      }
    });
  };
  iterable_extensions['IterableExtension|get#expandIndexed'] = function IterableExtension$124get$35expandIndexed(T, $this) {
    return dart.fn((R, expand) => iterable_extensions['IterableExtension|expandIndexed'](T, R, $this, expand), dart.gFnType(R => {
      var __t$IterableOfR = () => (__t$IterableOfR = dart.constFn(core.Iterable$(R)))();
      return [__t$IterableOfR(), [dart.fnType(__t$IterableOfR(), [core.int, T])]];
    }, R => {
      var __t$IterableOfR = () => (__t$IterableOfR = dart.constFn(core.Iterable$(R)))();
      return [T$.ObjectN()];
    }));
  };
  iterable_extensions['IterableExtension|reduceIndexed'] = function IterableExtension$124reduceIndexed(T, $this, combine) {
    let t34;
    let iterator = $this[$iterator];
    if (!iterator.moveNext()) {
      dart.throw(new core.StateError.new("no elements"));
    }
    let index = 1;
    let result = iterator.current;
    while (iterator.moveNext()) {
      result = combine((t34 = index, index = t34 + 1, t34), result, iterator.current);
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#reduceIndexed'] = function IterableExtension$124get$35reduceIndexed(T, $this) {
    return dart.fn(combine => iterable_extensions['IterableExtension|reduceIndexed'](T, $this, combine), dart.fnType(T, [dart.fnType(T, [core.int, T, T])]));
  };
  iterable_extensions['IterableExtension|foldIndexed'] = function IterableExtension$124foldIndexed(T, R, $this, initialValue, combine) {
    let t36;
    let result = initialValue;
    let index = 0;
    for (let element of $this) {
      result = combine((t36 = index, index = t36 + 1, t36), result, element);
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#foldIndexed'] = function IterableExtension$124get$35foldIndexed(T, $this) {
    return dart.fn((R, initialValue, combine) => iterable_extensions['IterableExtension|foldIndexed'](T, R, $this, initialValue, combine), dart.gFnType(R => [R, [R, dart.fnType(R, [core.int, R, T])]], R => [T$.ObjectN()]));
  };
  iterable_extensions['IterableExtension|firstWhereOrNull'] = function IterableExtension$124firstWhereOrNull(T, $this, test) {
    for (let element of $this) {
      if (test(element)) return element;
    }
    return null;
  };
  iterable_extensions['IterableExtension|get#firstWhereOrNull'] = function IterableExtension$124get$35firstWhereOrNull(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|firstWhereOrNull'](T, $this, test), dart.fnType(dart.nullable(T), [dart.fnType(core.bool, [T])]));
  };
  iterable_extensions['IterableExtension|firstWhereIndexedOrNull'] = function IterableExtension$124firstWhereIndexedOrNull(T, $this, test) {
    let t40;
    let index = 0;
    for (let element of $this) {
      if (test((t40 = index, index = t40 + 1, t40), element)) return element;
    }
    return null;
  };
  iterable_extensions['IterableExtension|get#firstWhereIndexedOrNull'] = function IterableExtension$124get$35firstWhereIndexedOrNull(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|firstWhereIndexedOrNull'](T, $this, test), dart.fnType(dart.nullable(T), [dart.fnType(core.bool, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|get#firstOrNull'] = function IterableExtension$124get$35firstOrNull(T, $this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) return iterator.current;
    return null;
  };
  iterable_extensions['IterableExtension|lastWhereOrNull'] = function IterableExtension$124lastWhereOrNull(T, $this, test) {
    let result = null;
    for (let element of $this) {
      if (test(element)) result = element;
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#lastWhereOrNull'] = function IterableExtension$124get$35lastWhereOrNull(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|lastWhereOrNull'](T, $this, test), dart.fnType(dart.nullable(T), [dart.fnType(core.bool, [T])]));
  };
  iterable_extensions['IterableExtension|lastWhereIndexedOrNull'] = function IterableExtension$124lastWhereIndexedOrNull(T, $this, test) {
    let t45;
    let result = null;
    let index = 0;
    for (let element of $this) {
      if (test((t45 = index, index = t45 + 1, t45), element)) result = element;
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#lastWhereIndexedOrNull'] = function IterableExtension$124get$35lastWhereIndexedOrNull(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|lastWhereIndexedOrNull'](T, $this, test), dart.fnType(dart.nullable(T), [dart.fnType(core.bool, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|get#lastOrNull'] = function IterableExtension$124get$35lastOrNull(T, $this) {
    if ($this[$isEmpty]) return null;
    return $this[$last];
  };
  iterable_extensions['IterableExtension|singleWhereOrNull'] = function IterableExtension$124singleWhereOrNull(T, $this, test) {
    let result = null;
    let found = false;
    for (let element of $this) {
      if (test(element)) {
        if (!found) {
          result = element;
          found = true;
        } else {
          return null;
        }
      }
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#singleWhereOrNull'] = function IterableExtension$124get$35singleWhereOrNull(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|singleWhereOrNull'](T, $this, test), dart.fnType(dart.nullable(T), [dart.fnType(core.bool, [T])]));
  };
  iterable_extensions['IterableExtension|singleWhereIndexedOrNull'] = function IterableExtension$124singleWhereIndexedOrNull(T, $this, test) {
    let t50;
    let result = null;
    let found = false;
    let index = 0;
    for (let element of $this) {
      if (test((t50 = index, index = t50 + 1, t50), element)) {
        if (!found) {
          result = element;
          found = true;
        } else {
          return null;
        }
      }
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#singleWhereIndexedOrNull'] = function IterableExtension$124get$35singleWhereIndexedOrNull(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|singleWhereIndexedOrNull'](T, $this, test), dart.fnType(dart.nullable(T), [dart.fnType(core.bool, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|get#singleOrNull'] = function IterableExtension$124get$35singleOrNull(T, $this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let result = iterator.current;
      if (!iterator.moveNext()) {
        return result;
      }
    }
    return null;
  };
  iterable_extensions['IterableExtension|groupFoldBy'] = function IterableExtension$124groupFoldBy(T, K, G, $this, keyOf, combine) {
    let result = new (_js_helper.LinkedMap$(K, G)).new();
    for (let element of $this) {
      let key = keyOf(element);
      result[$_set](key, combine(result[$_get](key), element));
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#groupFoldBy'] = function IterableExtension$124get$35groupFoldBy(T, $this) {
    return dart.fn((K, G, keyOf, combine) => iterable_extensions['IterableExtension|groupFoldBy'](T, K, G, $this, keyOf, combine), dart.gFnType((K, G) => {
      var __t$MapOfK$G = () => (__t$MapOfK$G = dart.constFn(core.Map$(K, G)))();
      var __t$GN = () => (__t$GN = dart.constFn(dart.nullable(G)))();
      return [__t$MapOfK$G(), [dart.fnType(K, [T]), dart.fnType(G, [__t$GN(), T])]];
    }, (K, G) => {
      var __t$MapOfK$G = () => (__t$MapOfK$G = dart.constFn(core.Map$(K, G)))();
      var __t$GN = () => (__t$GN = dart.constFn(dart.nullable(G)))();
      return [T$.ObjectN(), T$.ObjectN()];
    }));
  };
  iterable_extensions['IterableExtension|groupSetsBy'] = function IterableExtension$124groupSetsBy(T, K, $this, keyOf) {
    let t58, t57, t56, t55;
    let result = new (_js_helper.LinkedMap$(K, core.Set$(T))).new();
    for (let element of $this) {
      (t55 = result, t56 = keyOf(element), t57 = t55[$_get](t56), t57 == null ? (t58 = collection.LinkedHashSet$(T).new(), t55[$_set](t56, t58), t58) : t57).add(element);
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#groupSetsBy'] = function IterableExtension$124get$35groupSetsBy(T, $this) {
    return dart.fn((K, keyOf) => iterable_extensions['IterableExtension|groupSetsBy'](T, K, $this, keyOf), dart.gFnType(K => [core.Map$(K, core.Set$(T)), [dart.fnType(K, [T])]], K => [T$.ObjectN()]));
  };
  iterable_extensions['IterableExtension|groupListsBy'] = function IterableExtension$124groupListsBy(T, K, $this, keyOf) {
    let t60, t59, t58, t57;
    let result = new (_js_helper.LinkedMap$(K, core.List$(T))).new();
    for (let element of $this) {
      (t57 = result, t58 = keyOf(element), t59 = t57[$_get](t58), t59 == null ? (t60 = _interceptors.JSArray$(T).of([]), t57[$_set](t58, t60), t60) : t59)[$add](element);
    }
    return result;
  };
  iterable_extensions['IterableExtension|get#groupListsBy'] = function IterableExtension$124get$35groupListsBy(T, $this) {
    return dart.fn((K, keyOf) => iterable_extensions['IterableExtension|groupListsBy'](T, K, $this, keyOf), dart.gFnType(K => [core.Map$(K, core.List$(T)), [dart.fnType(K, [T])]], K => [T$.ObjectN()]));
  };
  iterable_extensions['IterableExtension|splitBefore'] = function IterableExtension$124splitBefore(T, $this, test) {
    return iterable_extensions['IterableExtension|splitBeforeIndexed'](T, $this, dart.fn((_, element) => test(element), dart.fnType(core.bool, [core.int, T])));
  };
  iterable_extensions['IterableExtension|get#splitBefore'] = function IterableExtension$124get$35splitBefore(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|splitBefore'](T, $this, test), dart.fnType(core.Iterable$(core.List$(T)), [dart.fnType(core.bool, [T])]));
  };
  iterable_extensions['IterableExtension|splitAfter'] = function IterableExtension$124splitAfter(T, $this, test) {
    return iterable_extensions['IterableExtension|splitAfterIndexed'](T, $this, dart.fn((_, element) => test(element), dart.fnType(core.bool, [core.int, T])));
  };
  iterable_extensions['IterableExtension|get#splitAfter'] = function IterableExtension$124get$35splitAfter(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|splitAfter'](T, $this, test), dart.fnType(core.Iterable$(core.List$(T)), [dart.fnType(core.bool, [T])]));
  };
  iterable_extensions['IterableExtension|splitBetween'] = function IterableExtension$124splitBetween(T, $this, test) {
    return iterable_extensions['IterableExtension|splitBetweenIndexed'](T, $this, dart.fn((_, first, second) => test(first, second), dart.fnType(core.bool, [core.int, T, T])));
  };
  iterable_extensions['IterableExtension|get#splitBetween'] = function IterableExtension$124get$35splitBetween(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|splitBetween'](T, $this, test), dart.fnType(core.Iterable$(core.List$(T)), [dart.fnType(core.bool, [T, T])]));
  };
  iterable_extensions['IterableExtension|splitBeforeIndexed'] = function IterableExtension$124splitBeforeIndexed(T, $this, test) {
    return new (_js_helper.SyncIterable$(core.List$(T))).new(function* IterableExtension$124splitBeforeIndexed() {
      let t65;
      let iterator = $this[$iterator];
      if (!iterator.moveNext()) {
        return;
      }
      let index = 1;
      let chunk = _interceptors.JSArray$(T).of([iterator.current]);
      while (iterator.moveNext()) {
        let element = iterator.current;
        if (test((t65 = index, index = t65 + 1, t65), element)) {
          yield chunk;
          chunk = _interceptors.JSArray$(T).of([]);
        }
        chunk[$add](element);
      }
      yield chunk;
    });
  };
  iterable_extensions['IterableExtension|get#splitBeforeIndexed'] = function IterableExtension$124get$35splitBeforeIndexed(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|splitBeforeIndexed'](T, $this, test), dart.fnType(core.Iterable$(core.List$(T)), [dart.fnType(core.bool, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|splitAfterIndexed'] = function IterableExtension$124splitAfterIndexed(T, $this, test) {
    return new (_js_helper.SyncIterable$(core.List$(T))).new(function* IterableExtension$124splitAfterIndexed() {
      let t67, t67$;
      let index = 0;
      let chunk = null;
      for (let element of $this) {
        (t67 = chunk, t67 == null ? chunk = _interceptors.JSArray$(T).of([]) : t67)[$add](element);
        if (test((t67$ = index, index = t67$ + 1, t67$), element)) {
          yield chunk;
          chunk = null;
        }
      }
      if (chunk != null) yield chunk;
    });
  };
  iterable_extensions['IterableExtension|get#splitAfterIndexed'] = function IterableExtension$124get$35splitAfterIndexed(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|splitAfterIndexed'](T, $this, test), dart.fnType(core.Iterable$(core.List$(T)), [dart.fnType(core.bool, [core.int, T])]));
  };
  iterable_extensions['IterableExtension|splitBetweenIndexed'] = function IterableExtension$124splitBetweenIndexed(T, $this, test) {
    return new (_js_helper.SyncIterable$(core.List$(T))).new(function* IterableExtension$124splitBetweenIndexed() {
      let t69;
      let iterator = $this[$iterator];
      if (!iterator.moveNext()) return;
      let previous = iterator.current;
      let chunk = _interceptors.JSArray$(T).of([previous]);
      let index = 1;
      while (iterator.moveNext()) {
        let element = iterator.current;
        if (test((t69 = index, index = t69 + 1, t69), previous, element)) {
          yield chunk;
          chunk = _interceptors.JSArray$(T).of([]);
        }
        chunk[$add](element);
        previous = element;
      }
      yield chunk;
    });
  };
  iterable_extensions['IterableExtension|get#splitBetweenIndexed'] = function IterableExtension$124get$35splitBetweenIndexed(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|splitBetweenIndexed'](T, $this, test), dart.fnType(core.Iterable$(core.List$(T)), [dart.fnType(core.bool, [core.int, T, T])]));
  };
  iterable_extensions['IterableExtension|none'] = function IterableExtension$124none(T, $this, test) {
    for (let element of $this) {
      if (test(element)) return false;
    }
    return true;
  };
  iterable_extensions['IterableExtension|get#none'] = function IterableExtension$124get$35none(T, $this) {
    return dart.fn(test => iterable_extensions['IterableExtension|none'](T, $this, test), dart.fnType(core.bool, [dart.fnType(core.bool, [T])]));
  };
  iterable_extensions['IterableExtension|slices'] = function IterableExtension$124slices(T, $this, length) {
    return new (_js_helper.SyncIterable$(core.List$(T))).new(function* IterableExtension$124slices() {
      if (length < 1) dart.throw(new core.RangeError.range(length, 1, null, "length"));
      let iterator = $this[$iterator];
      while (iterator.moveNext()) {
        let slice = _interceptors.JSArray$(T).of([iterator.current]);
        for (let i = 1; i < length && iterator.moveNext(); i = i + 1) {
          slice[$add](iterator.current);
        }
        yield slice;
      }
    });
  };
  iterable_extensions['IterableExtension|get#slices'] = function IterableExtension$124get$35slices(T, $this) {
    return dart.fn(length => iterable_extensions['IterableExtension|slices'](T, $this, length), dart.fnType(core.Iterable$(core.List$(T)), [core.int]));
  };
  iterable_extensions['IterableNullableExtension|whereNotNull'] = function IterableNullableExtension$124whereNotNull(T, $this) {
    return new (_js_helper.SyncIterable$(T)).new(function* IterableNullableExtension$124whereNotNull() {
      for (let element of $this) {
        if (element != null) yield element;
      }
    });
  };
  iterable_extensions['IterableNullableExtension|get#whereNotNull'] = function IterableNullableExtension$124get$35whereNotNull(T, $this) {
    return dart.fn(() => iterable_extensions['IterableNullableExtension|whereNotNull'](T, $this), dart.fnType(core.Iterable$(T), []));
  };
  iterable_extensions['IterableNumberExtension|get#minOrNull'] = function IterableNumberExtension$124get$35minOrNull($this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let value = iterator.current;
      if (value[$isNaN]) {
        return value;
      }
      while (iterator.moveNext()) {
        let newValue = iterator.current;
        if (newValue[$isNaN]) {
          return newValue;
        }
        if (newValue < value) {
          value = newValue;
        }
      }
      return value;
    }
    return null;
  };
  iterable_extensions['IterableNumberExtension|get#min'] = function IterableNumberExtension$124get$35min($this) {
    let t78;
    t78 = iterable_extensions['IterableNumberExtension|get#minOrNull']($this);
    return t78 == null ? dart.throw(new core.StateError.new("No element")) : t78;
  };
  iterable_extensions['IterableNumberExtension|get#maxOrNull'] = function IterableNumberExtension$124get$35maxOrNull($this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let value = iterator.current;
      if (value[$isNaN]) {
        return value;
      }
      while (iterator.moveNext()) {
        let newValue = iterator.current;
        if (newValue[$isNaN]) {
          return newValue;
        }
        if (newValue > value) {
          value = newValue;
        }
      }
      return value;
    }
    return null;
  };
  iterable_extensions['IterableNumberExtension|get#max'] = function IterableNumberExtension$124get$35max($this) {
    let t80;
    t80 = iterable_extensions['IterableNumberExtension|get#maxOrNull']($this);
    return t80 == null ? dart.throw(new core.StateError.new("No element")) : t80;
  };
  iterable_extensions['IterableNumberExtension|get#sum'] = function IterableNumberExtension$124get$35sum($this) {
    let result = 0;
    for (let value of $this) {
      result = result + value;
    }
    return result;
  };
  iterable_extensions['IterableNumberExtension|get#average'] = function IterableNumberExtension$124get$35average($this) {
    let result = 0.0;
    let count = 0;
    for (let value of $this) {
      count = count + 1;
      result = result + (value - result) / count;
    }
    if (count === 0) dart.throw(new core.StateError.new("No elements"));
    return result;
  };
  iterable_extensions['IterableIntegerExtension|get#minOrNull'] = function IterableIntegerExtension$124get$35minOrNull($this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let value = iterator.current;
      while (iterator.moveNext()) {
        let newValue = iterator.current;
        if (newValue < value) {
          value = newValue;
        }
      }
      return value;
    }
    return null;
  };
  iterable_extensions['IterableIntegerExtension|get#min'] = function IterableIntegerExtension$124get$35min($this) {
    let t84;
    t84 = iterable_extensions['IterableIntegerExtension|get#minOrNull']($this);
    return t84 == null ? dart.throw(new core.StateError.new("No element")) : t84;
  };
  iterable_extensions['IterableIntegerExtension|get#maxOrNull'] = function IterableIntegerExtension$124get$35maxOrNull($this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let value = iterator.current;
      while (iterator.moveNext()) {
        let newValue = iterator.current;
        if (newValue > value) {
          value = newValue;
        }
      }
      return value;
    }
    return null;
  };
  iterable_extensions['IterableIntegerExtension|get#max'] = function IterableIntegerExtension$124get$35max($this) {
    let t86;
    t86 = iterable_extensions['IterableIntegerExtension|get#maxOrNull']($this);
    return t86 == null ? dart.throw(new core.StateError.new("No element")) : t86;
  };
  iterable_extensions['IterableIntegerExtension|get#sum'] = function IterableIntegerExtension$124get$35sum($this) {
    let result = 0;
    for (let value of $this) {
      result = result + value;
    }
    return result;
  };
  iterable_extensions['IterableIntegerExtension|get#average'] = function IterableIntegerExtension$124get$35average($this) {
    let average = 0;
    let remainder = 0;
    let count = 0;
    for (let value of $this) {
      count = count + 1;
      let delta = value - average + remainder;
      average = average + (delta / count)[$truncate]();
      remainder = delta[$remainder](count);
    }
    if (count === 0) dart.throw(new core.StateError.new("No elements"));
    return average + remainder / count;
  };
  iterable_extensions['IterableDoubleExtension|get#minOrNull'] = function IterableDoubleExtension$124get$35minOrNull($this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let value = iterator.current;
      if (value[$isNaN]) {
        return value;
      }
      while (iterator.moveNext()) {
        let newValue = iterator.current;
        if (newValue[$isNaN]) {
          return newValue;
        }
        if (newValue < value) {
          value = newValue;
        }
      }
      return value;
    }
    return null;
  };
  iterable_extensions['IterableDoubleExtension|get#min'] = function IterableDoubleExtension$124get$35min($this) {
    let t90;
    t90 = iterable_extensions['IterableDoubleExtension|get#minOrNull']($this);
    return t90 == null ? dart.throw(new core.StateError.new("No element")) : t90;
  };
  iterable_extensions['IterableDoubleExtension|get#maxOrNull'] = function IterableDoubleExtension$124get$35maxOrNull($this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let value = iterator.current;
      if (value[$isNaN]) {
        return value;
      }
      while (iterator.moveNext()) {
        let newValue = iterator.current;
        if (newValue[$isNaN]) {
          return newValue;
        }
        if (newValue > value) {
          value = newValue;
        }
      }
      return value;
    }
    return null;
  };
  iterable_extensions['IterableDoubleExtension|get#max'] = function IterableDoubleExtension$124get$35max($this) {
    let t92;
    t92 = iterable_extensions['IterableDoubleExtension|get#maxOrNull']($this);
    return t92 == null ? dart.throw(new core.StateError.new("No element")) : t92;
  };
  iterable_extensions['IterableDoubleExtension|get#sum'] = function IterableDoubleExtension$124get$35sum($this) {
    let result = 0.0;
    for (let value of $this) {
      result = result + value;
    }
    return result;
  };
  iterable_extensions['IterableIterableExtension|get#flattened'] = function IterableIterableExtension$124get$35flattened(T, $this) {
    return new (_js_helper.SyncIterable$(T)).new(function* IterableIterableExtension$124get$35flattened() {
      for (let elements of $this) {
        yield* elements;
      }
    });
  };
  iterable_extensions['IterableComparableExtension|get#minOrNull'] = function IterableComparableExtension$124get$35minOrNull(T, $this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let value = iterator.current;
      while (iterator.moveNext()) {
        let newValue = iterator.current;
        if (value[$compareTo](newValue) > 0) {
          value = newValue;
        }
      }
      return value;
    }
    return null;
  };
  iterable_extensions['IterableComparableExtension|get#min'] = function IterableComparableExtension$124get$35min(T, $this) {
    let t96;
    t96 = iterable_extensions['IterableComparableExtension|get#minOrNull'](T, $this);
    return t96 == null ? dart.throw(new core.StateError.new("No element")) : t96;
  };
  iterable_extensions['IterableComparableExtension|get#maxOrNull'] = function IterableComparableExtension$124get$35maxOrNull(T, $this) {
    let iterator = $this[$iterator];
    if (iterator.moveNext()) {
      let value = iterator.current;
      while (iterator.moveNext()) {
        let newValue = iterator.current;
        if (value[$compareTo](newValue) < 0) {
          value = newValue;
        }
      }
      return value;
    }
    return null;
  };
  iterable_extensions['IterableComparableExtension|get#max'] = function IterableComparableExtension$124get$35max(T, $this) {
    let t98;
    t98 = iterable_extensions['IterableComparableExtension|get#maxOrNull'](T, $this);
    return t98 == null ? dart.throw(new core.StateError.new("No element")) : t98;
  };
  iterable_extensions['IterableComparableExtension|sorted'] = function IterableComparableExtension$124sorted(T, $this, compare = null) {
    let t100;
    t100 = (() => {
      let t99 = core.List$(T).of($this);
      return t99;
    })();
    return (() => {
      t100[$sort](compare);
      return t100;
    })();
  };
  iterable_extensions['IterableComparableExtension|get#sorted'] = function IterableComparableExtension$124get$35sorted(T, $this) {
    return dart.fn((compare = null) => iterable_extensions['IterableComparableExtension|sorted'](T, $this, compare), dart.fnType(core.List$(T), [], [dart.nullable(dart.fnType(core.int, [T, T]))]));
  };
  iterable_extensions['IterableComparableExtension|isSorted'] = function IterableComparableExtension$124isSorted(T, $this, compare = null) {
    if (compare != null) {
      return iterable_extensions['IterableExtension|isSorted'](T, $this, compare);
    }
    let iterator = $this[$iterator];
    if (!iterator.moveNext()) return true;
    let previousElement = iterator.current;
    while (iterator.moveNext()) {
      let element = iterator.current;
      if (previousElement[$compareTo](element) > 0) return false;
      previousElement = element;
    }
    return true;
  };
  iterable_extensions['IterableComparableExtension|get#isSorted'] = function IterableComparableExtension$124get$35isSorted(T, $this) {
    return dart.fn((compare = null) => iterable_extensions['IterableComparableExtension|isSorted'](T, $this, compare), dart.fnType(core.bool, [], [dart.nullable(dart.fnType(core.int, [T, T]))]));
  };
  iterable_extensions['ComparatorExtension|get#inverse'] = function ComparatorExtension$124get$35inverse(T, $this) {
    return dart.fn((a, b) => $this(b, a), dart.fnType(core.int, [T, T]));
  };
  iterable_extensions['ComparatorExtension|compareBy'] = function ComparatorExtension$124compareBy(T, R, $this, keyOf) {
    return dart.fn((a, b) => $this(keyOf(a), keyOf(b)), dart.fnType(core.int, [R, R]));
  };
  iterable_extensions['ComparatorExtension|get#compareBy'] = function ComparatorExtension$124get$35compareBy(T, $this) {
    return dart.fn((R, keyOf) => iterable_extensions['ComparatorExtension|compareBy'](T, R, $this, keyOf), dart.gFnType(R => {
      var __t$RAndRToint = () => (__t$RAndRToint = dart.constFn(dart.fnType(core.int, [R, R])))();
      return [__t$RAndRToint(), [dart.fnType(T, [R])]];
    }, R => {
      var __t$RAndRToint = () => (__t$RAndRToint = dart.constFn(dart.fnType(core.int, [R, R])))();
      return [T$.ObjectN()];
    }));
  };
  iterable_extensions['ComparatorExtension|then'] = function ComparatorExtension$124then(T, $this, tieBreaker) {
    return dart.fn((a, b) => {
      let result = $this(a, b);
      if (result === 0) result = tieBreaker(a, b);
      return result;
    }, dart.fnType(core.int, [T, T]));
  };
  iterable_extensions['ComparatorExtension|get#then'] = function ComparatorExtension$124get$35then(T, $this) {
    return dart.fn(tieBreaker => iterable_extensions['ComparatorExtension|then'](T, $this, tieBreaker), dart.fnType(dart.fnType(core.int, [T, T]), [dart.fnType(core.int, [T, T])]));
  };
  dart.trackLibraries("packages/collection/src/iterable_extensions.dart", {
    "package:collection/src/iterable_extensions.dart": iterable_extensions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["iterable_extensions.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/collection/src/iterable_extensions.dart.lib.js"}');
  // Exports:
  return {
    src__iterable_extensions: iterable_extensions
  };
}));

//# sourceMappingURL=iterable_extensions.dart.lib.js.map