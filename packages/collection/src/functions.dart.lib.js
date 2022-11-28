define(['dart_sdk', 'packages/collection/src/utils.dart'], (function load__packages__collection__src__functions_dart(dart_sdk, packages__collection__src__utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__collection__src__utils$46dart.src__utils;
  var functions = Object.create(dart.library);
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $addAll = dartx.addAll;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $keys = dartx.keys;
  var $toList = dartx.toList;
  var $removeLast = dartx.removeLast;
  var $reversed = dartx.reversed;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ObjectNAndObjectNToint: () => (T.ObjectNAndObjectNToint = dart.constFn(dart.fnType(core.int, [T.ObjectN(), T.ObjectN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(utils.defaultCompare, T.ObjectNAndObjectNToint());
    }
  }, false);
  var C = [void 0];
  functions.mapMap = function mapMap(K1, V1, K2, V2, map, opts) {
    let t0, t0$;
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let keyFn = (t0 = key, t0 == null ? dart.fn((mapKey, _) => K2.as(mapKey), dart.fnType(K2, [K1, V1])) : t0);
    let valueFn = (t0$ = value, t0$ == null ? dart.fn((_, mapValue) => V2.as(mapValue), dart.fnType(V2, [K1, V1])) : t0$);
    let result = new (_js_helper.LinkedMap$(K2, V2)).new();
    map[$forEach](dart.fn((mapKey, mapValue) => {
      result[$_set](keyFn(mapKey, mapValue), valueFn(mapKey, mapValue));
    }, dart.fnType(dart.void, [K1, V1])));
    return result;
  };
  functions.mergeMaps = function mergeMaps(K, V, map1, map2, opts) {
    let t0;
    let value = opts && 'value' in opts ? opts.value : null;
    let result = collection.LinkedHashMap$(K, V).of(map1);
    if (value == null) {
      t0 = result;
      return (() => {
        t0[$addAll](map2);
        return t0;
      })();
    }
    map2[$forEach](dart.fn((key, mapValue) => {
      result[$_set](key, result[$containsKey](key) ? value(V.as(result[$_get](key)), mapValue) : mapValue);
    }, dart.fnType(dart.void, [K, V])));
    return result;
  };
  functions.groupBy = function groupBy(S, T, values, key) {
    let t3, t2, t1, t0;
    let map = new (_js_helper.LinkedMap$(T, core.List$(S))).new();
    for (let element of values) {
      (t0 = map, t1 = key(element), t2 = t0[$_get](t1), t2 == null ? (t3 = _interceptors.JSArray$(S).of([]), t0[$_set](t1, t3), t3) : t2)[$add](element);
    }
    return map;
  };
  functions.minBy = function minBy(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = C[0] || CT.C0 : null;
    let minValue = null;
    let minOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (minOrderBy == null || compare(elementOrderBy, minOrderBy) < 0) {
        minValue = element;
        minOrderBy = elementOrderBy;
      }
    }
    return minValue;
  };
  functions.maxBy = function maxBy(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = C[0] || CT.C0 : null;
    let maxValue = null;
    let maxOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (maxOrderBy == null || dart.nullCheck(compare(elementOrderBy, maxOrderBy)) > 0) {
        maxValue = element;
        maxOrderBy = elementOrderBy;
      }
    }
    return maxValue;
  };
  functions.transitiveClosure = function transitiveClosure(T, graph) {
    let result = new (_js_helper.LinkedMap$(T, core.Set$(T))).new();
    graph[$forEach](dart.fn((vertex, edges) => {
      result[$_set](vertex, collection.LinkedHashSet$(T).from(edges));
    }, dart.fnType(dart.void, [T, core.Iterable$(T)])));
    let keys = graph[$keys][$toList]();
    for (let vertex1 of keys) {
      for (let vertex2 of keys) {
        for (let vertex3 of keys) {
          if (dart.nullCheck(result[$_get](vertex2)).contains(vertex1) && dart.nullCheck(result[$_get](vertex1)).contains(vertex3)) {
            dart.nullCheck(result[$_get](vertex2)).add(vertex3);
          }
        }
      }
    }
    return result;
  };
  functions.stronglyConnectedComponents = function stronglyConnectedComponents(T, graph) {
    let index = 0;
    let stack = _interceptors.JSArray$(dart.nullable(T)).of([]);
    let result = _interceptors.JSArray$(core.Set$(T)).of([]);
    let indices = new (_js_helper.LinkedMap$(T, core.int)).new();
    let lowLinks = new (_js_helper.LinkedMap$(T, core.int)).new();
    let onStack = new (collection._HashSet$(T)).new();
    function strongConnect(vertex) {
      indices[$_set](vertex, index);
      lowLinks[$_set](vertex, index);
      index = index + 1;
      stack[$add](vertex);
      onStack.add(vertex);
      for (let successor of dart.nullCheck(graph[$_get](vertex))) {
        if (!indices[$containsKey](successor)) {
          strongConnect(successor);
          lowLinks[$_set](vertex, math.min(core.int, dart.nullCheck(lowLinks[$_get](vertex)), dart.nullCheck(lowLinks[$_get](successor))));
        } else if (onStack.contains(successor)) {
          lowLinks[$_set](vertex, math.min(core.int, dart.nullCheck(lowLinks[$_get](vertex)), dart.nullCheck(lowLinks[$_get](successor))));
        }
      }
      if (lowLinks[$_get](vertex) == indices[$_get](vertex)) {
        let component = collection.LinkedHashSet$(T).new();
        let neighbor = null;
        do {
          neighbor = stack[$removeLast]();
          onStack.remove(neighbor);
          component.add(T.as(neighbor));
        } while (!dart.equals(neighbor, vertex));
        result[$add](component);
      }
    }
    dart.fn(strongConnect, dart.fnType(dart.void, [T]));
    for (let vertex of graph[$keys]) {
      if (!indices[$containsKey](vertex)) strongConnect(vertex);
    }
    return result[$reversed][$toList]();
  };
  dart.trackLibraries("packages/collection/src/functions.dart", {
    "package:collection/src/functions.dart": functions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["functions.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/collection/src/functions.dart.lib.js"}');
  // Exports:
  return {
    src__functions: functions
  };
}));

//# sourceMappingURL=functions.dart.lib.js.map
