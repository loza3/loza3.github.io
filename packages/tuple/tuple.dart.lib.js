define(['dart_sdk', 'packages/quiver/src/core/hash.dart'], (function load__packages__tuple__tuple_dart(dart_sdk, packages__quiver__src__core__hash$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__src__core__hash$46dart.src__core__hash;
  var tuple = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:tuple/tuple.dart"];
  var item1$ = dart.privateName(tuple, "Tuple2.item1");
  var item2$ = dart.privateName(tuple, "Tuple2.item2");
  const _is_Tuple2_default = Symbol('_is_Tuple2_default');
  tuple.Tuple2$ = dart.generic((T1, T2) => {
    var __t$Tuple2OfT1$T2 = () => (__t$Tuple2OfT1$T2 = dart.constFn(tuple.Tuple2$(T1, T2)))();
    class Tuple2 extends core.Object {
      get item1() {
        return this[item1$];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$];
      }
      set item2(value) {
        super.item2 = value;
      }
      static ['_#new#tearOff'](T1, T2, item1, item2) {
        return new (tuple.Tuple2$(T1, T2)).new(item1, item2);
      }
      static fromList(items) {
        if (items[$length] !== 2) {
          dart.throw(new core.ArgumentError.new("items must have length 2"));
        }
        return new (tuple.Tuple2$(T1, T2)).new(T1.as(items[$_get](0)), T2.as(items[$_get](1)));
      }
      static ['_#fromList#tearOff'](T1, T2, items) {
        return tuple.Tuple2$(T1, T2).fromList(items);
      }
      withItem1(v) {
        T1.as(v);
        return new (__t$Tuple2OfT1$T2()).new(v, this.item2);
      }
      withItem2(v) {
        T2.as(v);
        return new (__t$Tuple2OfT1$T2()).new(this.item1, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return tuple.Tuple2.is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2);
      }
      get hashCode() {
        return hash.hash2(dart.hashCode(this.item1), dart.hashCode(this.item2));
      }
    }
    (Tuple2.new = function(item1, item2) {
      this[item1$] = item1;
      this[item2$] = item2;
      ;
    }).prototype = Tuple2.prototype;
    dart.addTypeTests(Tuple2);
    Tuple2.prototype[_is_Tuple2_default] = true;
    dart.addTypeCaches(Tuple2);
    dart.setMethodSignature(Tuple2, () => ({
      __proto__: dart.getMethods(Tuple2.__proto__),
      withItem1: dart.fnType(tuple.Tuple2$(T1, T2), [dart.nullable(core.Object)]),
      withItem2: dart.fnType(tuple.Tuple2$(T1, T2), [dart.nullable(core.Object)]),
      toList: dart.fnType(core.List, [], {growable: core.bool}, {})
    }));
    dart.setStaticMethodSignature(Tuple2, () => ['fromList']);
    dart.setLibraryUri(Tuple2, I[0]);
    dart.setFieldSignature(Tuple2, () => ({
      __proto__: dart.getFields(Tuple2.__proto__),
      item1: dart.finalFieldType(T1),
      item2: dart.finalFieldType(T2)
    }));
    dart.defineExtensionMethods(Tuple2, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple2, ['hashCode']);
    return Tuple2;
  });
  tuple.Tuple2 = tuple.Tuple2$();
  dart.addTypeTests(tuple.Tuple2, _is_Tuple2_default);
  var item1$0 = dart.privateName(tuple, "Tuple3.item1");
  var item2$0 = dart.privateName(tuple, "Tuple3.item2");
  var item3$ = dart.privateName(tuple, "Tuple3.item3");
  const _is_Tuple3_default = Symbol('_is_Tuple3_default');
  tuple.Tuple3$ = dart.generic((T1, T2, T3) => {
    var __t$Tuple3OfT1$T2$T3 = () => (__t$Tuple3OfT1$T2$T3 = dart.constFn(tuple.Tuple3$(T1, T2, T3)))();
    class Tuple3 extends core.Object {
      get item1() {
        return this[item1$0];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$0];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$];
      }
      set item3(value) {
        super.item3 = value;
      }
      static ['_#new#tearOff'](T1, T2, T3, item1, item2, item3) {
        return new (tuple.Tuple3$(T1, T2, T3)).new(item1, item2, item3);
      }
      static fromList(items) {
        if (items[$length] !== 3) {
          dart.throw(new core.ArgumentError.new("items must have length 3"));
        }
        return new (tuple.Tuple3$(T1, T2, T3)).new(T1.as(items[$_get](0)), T2.as(items[$_get](1)), T3.as(items[$_get](2)));
      }
      static ['_#fromList#tearOff'](T1, T2, T3, items) {
        return tuple.Tuple3$(T1, T2, T3).fromList(items);
      }
      withItem1(v) {
        T1.as(v);
        return new (__t$Tuple3OfT1$T2$T3()).new(v, this.item2, this.item3);
      }
      withItem2(v) {
        T2.as(v);
        return new (__t$Tuple3OfT1$T2$T3()).new(this.item1, v, this.item3);
      }
      withItem3(v) {
        T3.as(v);
        return new (__t$Tuple3OfT1$T2$T3()).new(this.item1, this.item2, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return tuple.Tuple3.is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3);
      }
      get hashCode() {
        return hash.hash3(dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3));
      }
    }
    (Tuple3.new = function(item1, item2, item3) {
      this[item1$0] = item1;
      this[item2$0] = item2;
      this[item3$] = item3;
      ;
    }).prototype = Tuple3.prototype;
    dart.addTypeTests(Tuple3);
    Tuple3.prototype[_is_Tuple3_default] = true;
    dart.addTypeCaches(Tuple3);
    dart.setMethodSignature(Tuple3, () => ({
      __proto__: dart.getMethods(Tuple3.__proto__),
      withItem1: dart.fnType(tuple.Tuple3$(T1, T2, T3), [dart.nullable(core.Object)]),
      withItem2: dart.fnType(tuple.Tuple3$(T1, T2, T3), [dart.nullable(core.Object)]),
      withItem3: dart.fnType(tuple.Tuple3$(T1, T2, T3), [dart.nullable(core.Object)]),
      toList: dart.fnType(core.List, [], {growable: core.bool}, {})
    }));
    dart.setStaticMethodSignature(Tuple3, () => ['fromList']);
    dart.setLibraryUri(Tuple3, I[0]);
    dart.setFieldSignature(Tuple3, () => ({
      __proto__: dart.getFields(Tuple3.__proto__),
      item1: dart.finalFieldType(T1),
      item2: dart.finalFieldType(T2),
      item3: dart.finalFieldType(T3)
    }));
    dart.defineExtensionMethods(Tuple3, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple3, ['hashCode']);
    return Tuple3;
  });
  tuple.Tuple3 = tuple.Tuple3$();
  dart.addTypeTests(tuple.Tuple3, _is_Tuple3_default);
  var item1$1 = dart.privateName(tuple, "Tuple4.item1");
  var item2$1 = dart.privateName(tuple, "Tuple4.item2");
  var item3$0 = dart.privateName(tuple, "Tuple4.item3");
  var item4$ = dart.privateName(tuple, "Tuple4.item4");
  const _is_Tuple4_default = Symbol('_is_Tuple4_default');
  tuple.Tuple4$ = dart.generic((T1, T2, T3, T4) => {
    var __t$Tuple4OfT1$T2$T3$T4 = () => (__t$Tuple4OfT1$T2$T3$T4 = dart.constFn(tuple.Tuple4$(T1, T2, T3, T4)))();
    class Tuple4 extends core.Object {
      get item1() {
        return this[item1$1];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$1];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$0];
      }
      set item3(value) {
        super.item3 = value;
      }
      get item4() {
        return this[item4$];
      }
      set item4(value) {
        super.item4 = value;
      }
      static ['_#new#tearOff'](T1, T2, T3, T4, item1, item2, item3, item4) {
        return new (tuple.Tuple4$(T1, T2, T3, T4)).new(item1, item2, item3, item4);
      }
      static fromList(items) {
        if (items[$length] !== 4) {
          dart.throw(new core.ArgumentError.new("items must have length 4"));
        }
        return new (tuple.Tuple4$(T1, T2, T3, T4)).new(T1.as(items[$_get](0)), T2.as(items[$_get](1)), T3.as(items[$_get](2)), T4.as(items[$_get](3)));
      }
      static ['_#fromList#tearOff'](T1, T2, T3, T4, items) {
        return tuple.Tuple4$(T1, T2, T3, T4).fromList(items);
      }
      withItem1(v) {
        T1.as(v);
        return new (__t$Tuple4OfT1$T2$T3$T4()).new(v, this.item2, this.item3, this.item4);
      }
      withItem2(v) {
        T2.as(v);
        return new (__t$Tuple4OfT1$T2$T3$T4()).new(this.item1, v, this.item3, this.item4);
      }
      withItem3(v) {
        T3.as(v);
        return new (__t$Tuple4OfT1$T2$T3$T4()).new(this.item1, this.item2, v, this.item4);
      }
      withItem4(v) {
        T4.as(v);
        return new (__t$Tuple4OfT1$T2$T3$T4()).new(this.item1, this.item2, this.item3, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3, this.item4], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + ", " + dart.str(this.item4) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return tuple.Tuple4.is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3) && dart.equals(other.item4, this.item4);
      }
      get hashCode() {
        return hash.hash4(dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3), dart.hashCode(this.item4));
      }
    }
    (Tuple4.new = function(item1, item2, item3, item4) {
      this[item1$1] = item1;
      this[item2$1] = item2;
      this[item3$0] = item3;
      this[item4$] = item4;
      ;
    }).prototype = Tuple4.prototype;
    dart.addTypeTests(Tuple4);
    Tuple4.prototype[_is_Tuple4_default] = true;
    dart.addTypeCaches(Tuple4);
    dart.setMethodSignature(Tuple4, () => ({
      __proto__: dart.getMethods(Tuple4.__proto__),
      withItem1: dart.fnType(tuple.Tuple4$(T1, T2, T3, T4), [dart.nullable(core.Object)]),
      withItem2: dart.fnType(tuple.Tuple4$(T1, T2, T3, T4), [dart.nullable(core.Object)]),
      withItem3: dart.fnType(tuple.Tuple4$(T1, T2, T3, T4), [dart.nullable(core.Object)]),
      withItem4: dart.fnType(tuple.Tuple4$(T1, T2, T3, T4), [dart.nullable(core.Object)]),
      toList: dart.fnType(core.List, [], {growable: core.bool}, {})
    }));
    dart.setStaticMethodSignature(Tuple4, () => ['fromList']);
    dart.setLibraryUri(Tuple4, I[0]);
    dart.setFieldSignature(Tuple4, () => ({
      __proto__: dart.getFields(Tuple4.__proto__),
      item1: dart.finalFieldType(T1),
      item2: dart.finalFieldType(T2),
      item3: dart.finalFieldType(T3),
      item4: dart.finalFieldType(T4)
    }));
    dart.defineExtensionMethods(Tuple4, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple4, ['hashCode']);
    return Tuple4;
  });
  tuple.Tuple4 = tuple.Tuple4$();
  dart.addTypeTests(tuple.Tuple4, _is_Tuple4_default);
  var item1$2 = dart.privateName(tuple, "Tuple5.item1");
  var item2$2 = dart.privateName(tuple, "Tuple5.item2");
  var item3$1 = dart.privateName(tuple, "Tuple5.item3");
  var item4$0 = dart.privateName(tuple, "Tuple5.item4");
  var item5$ = dart.privateName(tuple, "Tuple5.item5");
  const _is_Tuple5_default = Symbol('_is_Tuple5_default');
  tuple.Tuple5$ = dart.generic((T1, T2, T3, T4, T5) => {
    var __t$Tuple5OfT1$T2$T3$T4$T5 = () => (__t$Tuple5OfT1$T2$T3$T4$T5 = dart.constFn(tuple.Tuple5$(T1, T2, T3, T4, T5)))();
    class Tuple5 extends core.Object {
      get item1() {
        return this[item1$2];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$2];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$1];
      }
      set item3(value) {
        super.item3 = value;
      }
      get item4() {
        return this[item4$0];
      }
      set item4(value) {
        super.item4 = value;
      }
      get item5() {
        return this[item5$];
      }
      set item5(value) {
        super.item5 = value;
      }
      static ['_#new#tearOff'](T1, T2, T3, T4, T5, item1, item2, item3, item4, item5) {
        return new (tuple.Tuple5$(T1, T2, T3, T4, T5)).new(item1, item2, item3, item4, item5);
      }
      static fromList(items) {
        if (items[$length] !== 5) {
          dart.throw(new core.ArgumentError.new("items must have length 5"));
        }
        return new (tuple.Tuple5$(T1, T2, T3, T4, T5)).new(T1.as(items[$_get](0)), T2.as(items[$_get](1)), T3.as(items[$_get](2)), T4.as(items[$_get](3)), T5.as(items[$_get](4)));
      }
      static ['_#fromList#tearOff'](T1, T2, T3, T4, T5, items) {
        return tuple.Tuple5$(T1, T2, T3, T4, T5).fromList(items);
      }
      withItem1(v) {
        T1.as(v);
        return new (__t$Tuple5OfT1$T2$T3$T4$T5()).new(v, this.item2, this.item3, this.item4, this.item5);
      }
      withItem2(v) {
        T2.as(v);
        return new (__t$Tuple5OfT1$T2$T3$T4$T5()).new(this.item1, v, this.item3, this.item4, this.item5);
      }
      withItem3(v) {
        T3.as(v);
        return new (__t$Tuple5OfT1$T2$T3$T4$T5()).new(this.item1, this.item2, v, this.item4, this.item5);
      }
      withItem4(v) {
        T4.as(v);
        return new (__t$Tuple5OfT1$T2$T3$T4$T5()).new(this.item1, this.item2, this.item3, v, this.item5);
      }
      withItem5(v) {
        T5.as(v);
        return new (__t$Tuple5OfT1$T2$T3$T4$T5()).new(this.item1, this.item2, this.item3, this.item4, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3, this.item4, this.item5], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + ", " + dart.str(this.item4) + ", " + dart.str(this.item5) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return tuple.Tuple5.is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3) && dart.equals(other.item4, this.item4) && dart.equals(other.item5, this.item5);
      }
      get hashCode() {
        return hash.hashObjects([dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3), dart.hashCode(this.item4), dart.hashCode(this.item5)]);
      }
    }
    (Tuple5.new = function(item1, item2, item3, item4, item5) {
      this[item1$2] = item1;
      this[item2$2] = item2;
      this[item3$1] = item3;
      this[item4$0] = item4;
      this[item5$] = item5;
      ;
    }).prototype = Tuple5.prototype;
    dart.addTypeTests(Tuple5);
    Tuple5.prototype[_is_Tuple5_default] = true;
    dart.addTypeCaches(Tuple5);
    dart.setMethodSignature(Tuple5, () => ({
      __proto__: dart.getMethods(Tuple5.__proto__),
      withItem1: dart.fnType(tuple.Tuple5$(T1, T2, T3, T4, T5), [dart.nullable(core.Object)]),
      withItem2: dart.fnType(tuple.Tuple5$(T1, T2, T3, T4, T5), [dart.nullable(core.Object)]),
      withItem3: dart.fnType(tuple.Tuple5$(T1, T2, T3, T4, T5), [dart.nullable(core.Object)]),
      withItem4: dart.fnType(tuple.Tuple5$(T1, T2, T3, T4, T5), [dart.nullable(core.Object)]),
      withItem5: dart.fnType(tuple.Tuple5$(T1, T2, T3, T4, T5), [dart.nullable(core.Object)]),
      toList: dart.fnType(core.List, [], {growable: core.bool}, {})
    }));
    dart.setStaticMethodSignature(Tuple5, () => ['fromList']);
    dart.setLibraryUri(Tuple5, I[0]);
    dart.setFieldSignature(Tuple5, () => ({
      __proto__: dart.getFields(Tuple5.__proto__),
      item1: dart.finalFieldType(T1),
      item2: dart.finalFieldType(T2),
      item3: dart.finalFieldType(T3),
      item4: dart.finalFieldType(T4),
      item5: dart.finalFieldType(T5)
    }));
    dart.defineExtensionMethods(Tuple5, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple5, ['hashCode']);
    return Tuple5;
  });
  tuple.Tuple5 = tuple.Tuple5$();
  dart.addTypeTests(tuple.Tuple5, _is_Tuple5_default);
  var item1$3 = dart.privateName(tuple, "Tuple6.item1");
  var item2$3 = dart.privateName(tuple, "Tuple6.item2");
  var item3$2 = dart.privateName(tuple, "Tuple6.item3");
  var item4$1 = dart.privateName(tuple, "Tuple6.item4");
  var item5$0 = dart.privateName(tuple, "Tuple6.item5");
  var item6$ = dart.privateName(tuple, "Tuple6.item6");
  const _is_Tuple6_default = Symbol('_is_Tuple6_default');
  tuple.Tuple6$ = dart.generic((T1, T2, T3, T4, T5, T6) => {
    var __t$Tuple6OfT1$T2$T3$T4$T5$T6 = () => (__t$Tuple6OfT1$T2$T3$T4$T5$T6 = dart.constFn(tuple.Tuple6$(T1, T2, T3, T4, T5, T6)))();
    class Tuple6 extends core.Object {
      get item1() {
        return this[item1$3];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$3];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$2];
      }
      set item3(value) {
        super.item3 = value;
      }
      get item4() {
        return this[item4$1];
      }
      set item4(value) {
        super.item4 = value;
      }
      get item5() {
        return this[item5$0];
      }
      set item5(value) {
        super.item5 = value;
      }
      get item6() {
        return this[item6$];
      }
      set item6(value) {
        super.item6 = value;
      }
      static ['_#new#tearOff'](T1, T2, T3, T4, T5, T6, item1, item2, item3, item4, item5, item6) {
        return new (tuple.Tuple6$(T1, T2, T3, T4, T5, T6)).new(item1, item2, item3, item4, item5, item6);
      }
      static fromList(items) {
        if (items[$length] !== 6) {
          dart.throw(new core.ArgumentError.new("items must have length 6"));
        }
        return new (tuple.Tuple6$(T1, T2, T3, T4, T5, T6)).new(T1.as(items[$_get](0)), T2.as(items[$_get](1)), T3.as(items[$_get](2)), T4.as(items[$_get](3)), T5.as(items[$_get](4)), T6.as(items[$_get](5)));
      }
      static ['_#fromList#tearOff'](T1, T2, T3, T4, T5, T6, items) {
        return tuple.Tuple6$(T1, T2, T3, T4, T5, T6).fromList(items);
      }
      withItem1(v) {
        T1.as(v);
        return new (__t$Tuple6OfT1$T2$T3$T4$T5$T6()).new(v, this.item2, this.item3, this.item4, this.item5, this.item6);
      }
      withItem2(v) {
        T2.as(v);
        return new (__t$Tuple6OfT1$T2$T3$T4$T5$T6()).new(this.item1, v, this.item3, this.item4, this.item5, this.item6);
      }
      withItem3(v) {
        T3.as(v);
        return new (__t$Tuple6OfT1$T2$T3$T4$T5$T6()).new(this.item1, this.item2, v, this.item4, this.item5, this.item6);
      }
      withItem4(v) {
        T4.as(v);
        return new (__t$Tuple6OfT1$T2$T3$T4$T5$T6()).new(this.item1, this.item2, this.item3, v, this.item5, this.item6);
      }
      withItem5(v) {
        T5.as(v);
        return new (__t$Tuple6OfT1$T2$T3$T4$T5$T6()).new(this.item1, this.item2, this.item3, this.item4, v, this.item6);
      }
      withItem6(v) {
        T6.as(v);
        return new (__t$Tuple6OfT1$T2$T3$T4$T5$T6()).new(this.item1, this.item2, this.item3, this.item4, this.item5, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3, this.item4, this.item5, this.item6], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + ", " + dart.str(this.item4) + ", " + dart.str(this.item5) + ", " + dart.str(this.item6) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return tuple.Tuple6.is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3) && dart.equals(other.item4, this.item4) && dart.equals(other.item5, this.item5) && dart.equals(other.item6, this.item6);
      }
      get hashCode() {
        return hash.hashObjects([dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3), dart.hashCode(this.item4), dart.hashCode(this.item5), dart.hashCode(this.item6)]);
      }
    }
    (Tuple6.new = function(item1, item2, item3, item4, item5, item6) {
      this[item1$3] = item1;
      this[item2$3] = item2;
      this[item3$2] = item3;
      this[item4$1] = item4;
      this[item5$0] = item5;
      this[item6$] = item6;
      ;
    }).prototype = Tuple6.prototype;
    dart.addTypeTests(Tuple6);
    Tuple6.prototype[_is_Tuple6_default] = true;
    dart.addTypeCaches(Tuple6);
    dart.setMethodSignature(Tuple6, () => ({
      __proto__: dart.getMethods(Tuple6.__proto__),
      withItem1: dart.fnType(tuple.Tuple6$(T1, T2, T3, T4, T5, T6), [dart.nullable(core.Object)]),
      withItem2: dart.fnType(tuple.Tuple6$(T1, T2, T3, T4, T5, T6), [dart.nullable(core.Object)]),
      withItem3: dart.fnType(tuple.Tuple6$(T1, T2, T3, T4, T5, T6), [dart.nullable(core.Object)]),
      withItem4: dart.fnType(tuple.Tuple6$(T1, T2, T3, T4, T5, T6), [dart.nullable(core.Object)]),
      withItem5: dart.fnType(tuple.Tuple6$(T1, T2, T3, T4, T5, T6), [dart.nullable(core.Object)]),
      withItem6: dart.fnType(tuple.Tuple6$(T1, T2, T3, T4, T5, T6), [dart.nullable(core.Object)]),
      toList: dart.fnType(core.List, [], {growable: core.bool}, {})
    }));
    dart.setStaticMethodSignature(Tuple6, () => ['fromList']);
    dart.setLibraryUri(Tuple6, I[0]);
    dart.setFieldSignature(Tuple6, () => ({
      __proto__: dart.getFields(Tuple6.__proto__),
      item1: dart.finalFieldType(T1),
      item2: dart.finalFieldType(T2),
      item3: dart.finalFieldType(T3),
      item4: dart.finalFieldType(T4),
      item5: dart.finalFieldType(T5),
      item6: dart.finalFieldType(T6)
    }));
    dart.defineExtensionMethods(Tuple6, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple6, ['hashCode']);
    return Tuple6;
  });
  tuple.Tuple6 = tuple.Tuple6$();
  dart.addTypeTests(tuple.Tuple6, _is_Tuple6_default);
  var item1$4 = dart.privateName(tuple, "Tuple7.item1");
  var item2$4 = dart.privateName(tuple, "Tuple7.item2");
  var item3$3 = dart.privateName(tuple, "Tuple7.item3");
  var item4$2 = dart.privateName(tuple, "Tuple7.item4");
  var item5$1 = dart.privateName(tuple, "Tuple7.item5");
  var item6$0 = dart.privateName(tuple, "Tuple7.item6");
  var item7$ = dart.privateName(tuple, "Tuple7.item7");
  const _is_Tuple7_default = Symbol('_is_Tuple7_default');
  tuple.Tuple7$ = dart.generic((T1, T2, T3, T4, T5, T6, T7) => {
    var __t$Tuple7OfT1$T2$T3$T4$T5$T6$T7 = () => (__t$Tuple7OfT1$T2$T3$T4$T5$T6$T7 = dart.constFn(tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7)))();
    class Tuple7 extends core.Object {
      get item1() {
        return this[item1$4];
      }
      set item1(value) {
        super.item1 = value;
      }
      get item2() {
        return this[item2$4];
      }
      set item2(value) {
        super.item2 = value;
      }
      get item3() {
        return this[item3$3];
      }
      set item3(value) {
        super.item3 = value;
      }
      get item4() {
        return this[item4$2];
      }
      set item4(value) {
        super.item4 = value;
      }
      get item5() {
        return this[item5$1];
      }
      set item5(value) {
        super.item5 = value;
      }
      get item6() {
        return this[item6$0];
      }
      set item6(value) {
        super.item6 = value;
      }
      get item7() {
        return this[item7$];
      }
      set item7(value) {
        super.item7 = value;
      }
      static ['_#new#tearOff'](T1, T2, T3, T4, T5, T6, T7, item1, item2, item3, item4, item5, item6, item7) {
        return new (tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7)).new(item1, item2, item3, item4, item5, item6, item7);
      }
      static fromList(items) {
        if (items[$length] !== 7) {
          dart.throw(new core.ArgumentError.new("items must have length 7"));
        }
        return new (tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7)).new(T1.as(items[$_get](0)), T2.as(items[$_get](1)), T3.as(items[$_get](2)), T4.as(items[$_get](3)), T5.as(items[$_get](4)), T6.as(items[$_get](5)), T7.as(items[$_get](6)));
      }
      static ['_#fromList#tearOff'](T1, T2, T3, T4, T5, T6, T7, items) {
        return tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7).fromList(items);
      }
      withItem1(v) {
        T1.as(v);
        return new (__t$Tuple7OfT1$T2$T3$T4$T5$T6$T7()).new(v, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7);
      }
      withItem2(v) {
        T2.as(v);
        return new (__t$Tuple7OfT1$T2$T3$T4$T5$T6$T7()).new(this.item1, v, this.item3, this.item4, this.item5, this.item6, this.item7);
      }
      withItem3(v) {
        T3.as(v);
        return new (__t$Tuple7OfT1$T2$T3$T4$T5$T6$T7()).new(this.item1, this.item2, v, this.item4, this.item5, this.item6, this.item7);
      }
      withItem4(v) {
        T4.as(v);
        return new (__t$Tuple7OfT1$T2$T3$T4$T5$T6$T7()).new(this.item1, this.item2, this.item3, v, this.item5, this.item6, this.item7);
      }
      withItem5(v) {
        T5.as(v);
        return new (__t$Tuple7OfT1$T2$T3$T4$T5$T6$T7()).new(this.item1, this.item2, this.item3, this.item4, v, this.item6, this.item7);
      }
      withItem6(v) {
        T6.as(v);
        return new (__t$Tuple7OfT1$T2$T3$T4$T5$T6$T7()).new(this.item1, this.item2, this.item3, this.item4, this.item5, v, this.item7);
      }
      withItem7(v) {
        T7.as(v);
        return new (__t$Tuple7OfT1$T2$T3$T4$T5$T6$T7()).new(this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, v);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : false;
        return core.List.from([this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7], {growable: growable});
      }
      toString() {
        return "[" + dart.str(this.item1) + ", " + dart.str(this.item2) + ", " + dart.str(this.item3) + ", " + dart.str(this.item4) + ", " + dart.str(this.item5) + ", " + dart.str(this.item6) + ", " + dart.str(this.item7) + "]";
      }
      _equals(other) {
        if (other == null) return false;
        return tuple.Tuple7.is(other) && dart.equals(other.item1, this.item1) && dart.equals(other.item2, this.item2) && dart.equals(other.item3, this.item3) && dart.equals(other.item4, this.item4) && dart.equals(other.item5, this.item5) && dart.equals(other.item6, this.item6) && dart.equals(other.item7, this.item7);
      }
      get hashCode() {
        return hash.hashObjects([dart.hashCode(this.item1), dart.hashCode(this.item2), dart.hashCode(this.item3), dart.hashCode(this.item4), dart.hashCode(this.item5), dart.hashCode(this.item6), dart.hashCode(this.item7)]);
      }
    }
    (Tuple7.new = function(item1, item2, item3, item4, item5, item6, item7) {
      this[item1$4] = item1;
      this[item2$4] = item2;
      this[item3$3] = item3;
      this[item4$2] = item4;
      this[item5$1] = item5;
      this[item6$0] = item6;
      this[item7$] = item7;
      ;
    }).prototype = Tuple7.prototype;
    dart.addTypeTests(Tuple7);
    Tuple7.prototype[_is_Tuple7_default] = true;
    dart.addTypeCaches(Tuple7);
    dart.setMethodSignature(Tuple7, () => ({
      __proto__: dart.getMethods(Tuple7.__proto__),
      withItem1: dart.fnType(tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7), [dart.nullable(core.Object)]),
      withItem2: dart.fnType(tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7), [dart.nullable(core.Object)]),
      withItem3: dart.fnType(tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7), [dart.nullable(core.Object)]),
      withItem4: dart.fnType(tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7), [dart.nullable(core.Object)]),
      withItem5: dart.fnType(tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7), [dart.nullable(core.Object)]),
      withItem6: dart.fnType(tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7), [dart.nullable(core.Object)]),
      withItem7: dart.fnType(tuple.Tuple7$(T1, T2, T3, T4, T5, T6, T7), [dart.nullable(core.Object)]),
      toList: dart.fnType(core.List, [], {growable: core.bool}, {})
    }));
    dart.setStaticMethodSignature(Tuple7, () => ['fromList']);
    dart.setLibraryUri(Tuple7, I[0]);
    dart.setFieldSignature(Tuple7, () => ({
      __proto__: dart.getFields(Tuple7.__proto__),
      item1: dart.finalFieldType(T1),
      item2: dart.finalFieldType(T2),
      item3: dart.finalFieldType(T3),
      item4: dart.finalFieldType(T4),
      item5: dart.finalFieldType(T5),
      item6: dart.finalFieldType(T6),
      item7: dart.finalFieldType(T7)
    }));
    dart.defineExtensionMethods(Tuple7, ['toString', '_equals']);
    dart.defineExtensionAccessors(Tuple7, ['hashCode']);
    return Tuple7;
  });
  tuple.Tuple7 = tuple.Tuple7$();
  dart.addTypeTests(tuple.Tuple7, _is_Tuple7_default);
  dart.trackLibraries("packages/tuple/tuple.dart", {
    "package:tuple/tuple.dart": tuple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tuple.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/tuple/tuple.dart.lib.js"}');
  // Exports:
  return {
    tuple: tuple
  };
}));

//# sourceMappingURL=tuple.dart.lib.js.map
