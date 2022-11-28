define(['dart_sdk'], (function load__packages__proj4dart__src__globals__nadgrid_store_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var nadgrid_store = Object.create(dart.library);
  var nadgrid$ = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $clear = dartx.clear;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $buffer = dartx.buffer;
  var $split = dartx.split;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $substring = dartx.substring;
  var $getUint8 = dartx.getUint8;
  var $getInt32 = dartx.getInt32;
  var $trim = dartx.trim;
  var $getFloat64 = dartx.getFloat64;
  var $round = dartx.round;
  var $add = dartx.add;
  var $getFloat32 = dartx.getFloat32;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$Nadgird: () => (T.IdentityMapOfString$Nadgird = dart.constFn(_js_helper.IdentityMap$(core.String, nadgrid$.Nadgird)))(),
    StringToNadgridParam: () => (T.StringToNadgridParam = dart.constFn(dart.fnType(nadgrid$.NadgridParam, [core.String])))(),
    IterableOfint: () => (T.IterableOfint = dart.constFn(core.Iterable$(core.int)))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    JSArrayOfSubGrid: () => (T.JSArrayOfSubGrid = dart.constFn(_interceptors.JSArray$(nadgrid$.SubGrid)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    GridNodeToListOfdouble: () => (T.GridNodeToListOfdouble = dart.constFn(dart.fnType(T.ListOfdouble(), [nadgrid$.GridNode])))(),
    JSArrayOfGridNode: () => (T.JSArrayOfGridNode = dart.constFn(_interceptors.JSArray$(nadgrid$.GridNode)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(nadgrid$.Nadgird.parseNadgridString, T.StringToNadgridParam());
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:proj4dart/src/globals/nadgrid_store.dart",
    "package:proj4dart/src/classes/nadgrid.dart"
  ];
  var _nadgridCache = dart.privateName(nadgrid_store, "_nadgridCache");
  nadgrid_store.NadgridStore = class NadgridStore extends core.Object {
    get isEmpty() {
      return this[_nadgridCache][$isEmpty];
    }
    clearNadgirdCache() {
      this[_nadgridCache][$clear]();
    }
    static new() {
      return nadgrid_store.NadgridStore._nadgridStore;
    }
    static ['_#new#tearOff']() {
      return nadgrid_store.NadgridStore.new();
    }
    static ['_#_internal#tearOff']() {
      return new nadgrid_store.NadgridStore._internal();
    }
    get(gridName) {
      return this[_nadgridCache][$_get](gridName);
    }
    register(gridName, nadgrid) {
      let t2, t1, t0;
      t0 = this[_nadgridCache];
      t1 = gridName;
      t2 = nadgrid;
      t0[$_set](t1, t2);
      return t2;
    }
  };
  (nadgrid_store.NadgridStore._internal = function() {
    this[_nadgridCache] = new (T.IdentityMapOfString$Nadgird()).new();
    ;
  }).prototype = nadgrid_store.NadgridStore.prototype;
  dart.addTypeTests(nadgrid_store.NadgridStore);
  dart.addTypeCaches(nadgrid_store.NadgridStore);
  dart.setMethodSignature(nadgrid_store.NadgridStore, () => ({
    __proto__: dart.getMethods(nadgrid_store.NadgridStore.__proto__),
    clearNadgirdCache: dart.fnType(dart.void, []),
    get: dart.fnType(dart.nullable(nadgrid$.Nadgird), [core.String]),
    register: dart.fnType(nadgrid$.Nadgird, [core.String, nadgrid$.Nadgird])
  }));
  dart.setStaticMethodSignature(nadgrid_store.NadgridStore, () => ['new']);
  dart.setGetterSignature(nadgrid_store.NadgridStore, () => ({
    __proto__: dart.getGetters(nadgrid_store.NadgridStore.__proto__),
    isEmpty: core.bool
  }));
  dart.setLibraryUri(nadgrid_store.NadgridStore, I[0]);
  dart.setFieldSignature(nadgrid_store.NadgridStore, () => ({
    __proto__: dart.getFields(nadgrid_store.NadgridStore.__proto__),
    [_nadgridCache]: dart.finalFieldType(core.Map$(core.String, nadgrid$.Nadgird))
  }));
  dart.setStaticFieldSignature(nadgrid_store.NadgridStore, () => ['_nadgridStore']);
  dart.defineLazy(nadgrid_store.NadgridStore, {
    /*nadgrid_store.NadgridStore._nadgridStore*/get _nadgridStore() {
      return new nadgrid_store.NadgridStore._internal();
    }
  }, false);
  var name$ = dart.privateName(nadgrid$, "NadgridParam.name");
  var mandatory$ = dart.privateName(nadgrid$, "NadgridParam.mandatory");
  var grid$ = dart.privateName(nadgrid$, "NadgridParam.grid");
  var isNull$ = dart.privateName(nadgrid$, "NadgridParam.isNull");
  nadgrid$.NadgridParam = class NadgridParam extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get mandatory() {
      return this[mandatory$];
    }
    set mandatory(value) {
      super.mandatory = value;
    }
    get grid() {
      return this[grid$];
    }
    set grid(value) {
      super.grid = value;
    }
    get isNull() {
      return this[isNull$];
    }
    set isNull(value) {
      super.isNull = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let mandatory = opts && 'mandatory' in opts ? opts.mandatory : null;
      let grid = opts && 'grid' in opts ? opts.grid : null;
      let isNull = opts && 'isNull' in opts ? opts.isNull : null;
      return new nadgrid$.NadgridParam.new({name: name, mandatory: mandatory, grid: grid, isNull: isNull});
    }
  };
  (nadgrid$.NadgridParam.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let mandatory = opts && 'mandatory' in opts ? opts.mandatory : null;
    let grid = opts && 'grid' in opts ? opts.grid : null;
    let isNull = opts && 'isNull' in opts ? opts.isNull : null;
    this[name$] = name;
    this[mandatory$] = mandatory;
    this[grid$] = grid;
    this[isNull$] = isNull;
    ;
  }).prototype = nadgrid$.NadgridParam.prototype;
  dart.addTypeTests(nadgrid$.NadgridParam);
  dart.addTypeCaches(nadgrid$.NadgridParam);
  dart.setLibraryUri(nadgrid$.NadgridParam, I[1]);
  dart.setFieldSignature(nadgrid$.NadgridParam, () => ({
    __proto__: dart.getFields(nadgrid$.NadgridParam.__proto__),
    name: dart.finalFieldType(core.String),
    mandatory: dart.finalFieldType(core.bool),
    grid: dart.finalFieldType(dart.nullable(nadgrid$.Nadgird)),
    isNull: dart.finalFieldType(core.bool)
  }));
  var nFields$ = dart.privateName(nadgrid$, "GridHeader.nFields");
  var nSubgridFields$ = dart.privateName(nadgrid$, "GridHeader.nSubgridFields");
  var nSubgrids$ = dart.privateName(nadgrid$, "GridHeader.nSubgrids");
  var shiftType$ = dart.privateName(nadgrid$, "GridHeader.shiftType");
  var fromSemiMajorAxis$ = dart.privateName(nadgrid$, "GridHeader.fromSemiMajorAxis");
  var fromSemiMinorAxis$ = dart.privateName(nadgrid$, "GridHeader.fromSemiMinorAxis");
  var toSemiMajorAxis$ = dart.privateName(nadgrid$, "GridHeader.toSemiMajorAxis");
  var toSemiMinorAxis$ = dart.privateName(nadgrid$, "GridHeader.toSemiMinorAxis");
  nadgrid$.GridHeader = class GridHeader extends core.Object {
    get nFields() {
      return this[nFields$];
    }
    set nFields(value) {
      super.nFields = value;
    }
    get nSubgridFields() {
      return this[nSubgridFields$];
    }
    set nSubgridFields(value) {
      super.nSubgridFields = value;
    }
    get nSubgrids() {
      return this[nSubgrids$];
    }
    set nSubgrids(value) {
      super.nSubgrids = value;
    }
    get shiftType() {
      return this[shiftType$];
    }
    set shiftType(value) {
      super.shiftType = value;
    }
    get fromSemiMajorAxis() {
      return this[fromSemiMajorAxis$];
    }
    set fromSemiMajorAxis(value) {
      super.fromSemiMajorAxis = value;
    }
    get fromSemiMinorAxis() {
      return this[fromSemiMinorAxis$];
    }
    set fromSemiMinorAxis(value) {
      super.fromSemiMinorAxis = value;
    }
    get toSemiMajorAxis() {
      return this[toSemiMajorAxis$];
    }
    set toSemiMajorAxis(value) {
      super.toSemiMajorAxis = value;
    }
    get toSemiMinorAxis() {
      return this[toSemiMinorAxis$];
    }
    set toSemiMinorAxis(value) {
      super.toSemiMinorAxis = value;
    }
    static ['_#new#tearOff'](opts) {
      let nFields = opts && 'nFields' in opts ? opts.nFields : null;
      let nSubgridFields = opts && 'nSubgridFields' in opts ? opts.nSubgridFields : null;
      let nSubgrids = opts && 'nSubgrids' in opts ? opts.nSubgrids : null;
      let shiftType = opts && 'shiftType' in opts ? opts.shiftType : null;
      let fromSemiMajorAxis = opts && 'fromSemiMajorAxis' in opts ? opts.fromSemiMajorAxis : null;
      let fromSemiMinorAxis = opts && 'fromSemiMinorAxis' in opts ? opts.fromSemiMinorAxis : null;
      let toSemiMajorAxis = opts && 'toSemiMajorAxis' in opts ? opts.toSemiMajorAxis : null;
      let toSemiMinorAxis = opts && 'toSemiMinorAxis' in opts ? opts.toSemiMinorAxis : null;
      return new nadgrid$.GridHeader.new({nFields: nFields, nSubgridFields: nSubgridFields, nSubgrids: nSubgrids, shiftType: shiftType, fromSemiMajorAxis: fromSemiMajorAxis, fromSemiMinorAxis: fromSemiMinorAxis, toSemiMajorAxis: toSemiMajorAxis, toSemiMinorAxis: toSemiMinorAxis});
    }
  };
  (nadgrid$.GridHeader.new = function(opts) {
    let nFields = opts && 'nFields' in opts ? opts.nFields : null;
    let nSubgridFields = opts && 'nSubgridFields' in opts ? opts.nSubgridFields : null;
    let nSubgrids = opts && 'nSubgrids' in opts ? opts.nSubgrids : null;
    let shiftType = opts && 'shiftType' in opts ? opts.shiftType : null;
    let fromSemiMajorAxis = opts && 'fromSemiMajorAxis' in opts ? opts.fromSemiMajorAxis : null;
    let fromSemiMinorAxis = opts && 'fromSemiMinorAxis' in opts ? opts.fromSemiMinorAxis : null;
    let toSemiMajorAxis = opts && 'toSemiMajorAxis' in opts ? opts.toSemiMajorAxis : null;
    let toSemiMinorAxis = opts && 'toSemiMinorAxis' in opts ? opts.toSemiMinorAxis : null;
    this[nFields$] = nFields;
    this[nSubgridFields$] = nSubgridFields;
    this[nSubgrids$] = nSubgrids;
    this[shiftType$] = shiftType;
    this[fromSemiMajorAxis$] = fromSemiMajorAxis;
    this[fromSemiMinorAxis$] = fromSemiMinorAxis;
    this[toSemiMajorAxis$] = toSemiMajorAxis;
    this[toSemiMinorAxis$] = toSemiMinorAxis;
    ;
  }).prototype = nadgrid$.GridHeader.prototype;
  dart.addTypeTests(nadgrid$.GridHeader);
  dart.addTypeCaches(nadgrid$.GridHeader);
  dart.setLibraryUri(nadgrid$.GridHeader, I[1]);
  dart.setFieldSignature(nadgrid$.GridHeader, () => ({
    __proto__: dart.getFields(nadgrid$.GridHeader.__proto__),
    nFields: dart.finalFieldType(core.int),
    nSubgridFields: dart.finalFieldType(core.int),
    nSubgrids: dart.finalFieldType(core.int),
    shiftType: dart.finalFieldType(core.String),
    fromSemiMajorAxis: dart.finalFieldType(core.double),
    fromSemiMinorAxis: dart.finalFieldType(core.double),
    toSemiMajorAxis: dart.finalFieldType(core.double),
    toSemiMinorAxis: dart.finalFieldType(core.double)
  }));
  var name$0 = dart.privateName(nadgrid$, "SubGridHeader.name");
  var parent$ = dart.privateName(nadgrid$, "SubGridHeader.parent");
  var lowerLatitude$ = dart.privateName(nadgrid$, "SubGridHeader.lowerLatitude");
  var upperLatitude$ = dart.privateName(nadgrid$, "SubGridHeader.upperLatitude");
  var lowerLongitude$ = dart.privateName(nadgrid$, "SubGridHeader.lowerLongitude");
  var upperLongitude$ = dart.privateName(nadgrid$, "SubGridHeader.upperLongitude");
  var latitudeInterval$ = dart.privateName(nadgrid$, "SubGridHeader.latitudeInterval");
  var longitudeInterval$ = dart.privateName(nadgrid$, "SubGridHeader.longitudeInterval");
  var gridNodeCount$ = dart.privateName(nadgrid$, "SubGridHeader.gridNodeCount");
  nadgrid$.SubGridHeader = class SubGridHeader extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get lowerLatitude() {
      return this[lowerLatitude$];
    }
    set lowerLatitude(value) {
      super.lowerLatitude = value;
    }
    get upperLatitude() {
      return this[upperLatitude$];
    }
    set upperLatitude(value) {
      super.upperLatitude = value;
    }
    get lowerLongitude() {
      return this[lowerLongitude$];
    }
    set lowerLongitude(value) {
      super.lowerLongitude = value;
    }
    get upperLongitude() {
      return this[upperLongitude$];
    }
    set upperLongitude(value) {
      super.upperLongitude = value;
    }
    get latitudeInterval() {
      return this[latitudeInterval$];
    }
    set latitudeInterval(value) {
      super.latitudeInterval = value;
    }
    get longitudeInterval() {
      return this[longitudeInterval$];
    }
    set longitudeInterval(value) {
      super.longitudeInterval = value;
    }
    get gridNodeCount() {
      return this[gridNodeCount$];
    }
    set gridNodeCount(value) {
      super.gridNodeCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let parent = opts && 'parent' in opts ? opts.parent : null;
      let lowerLatitude = opts && 'lowerLatitude' in opts ? opts.lowerLatitude : null;
      let upperLatitude = opts && 'upperLatitude' in opts ? opts.upperLatitude : null;
      let lowerLongitude = opts && 'lowerLongitude' in opts ? opts.lowerLongitude : null;
      let upperLongitude = opts && 'upperLongitude' in opts ? opts.upperLongitude : null;
      let latitudeInterval = opts && 'latitudeInterval' in opts ? opts.latitudeInterval : null;
      let longitudeInterval = opts && 'longitudeInterval' in opts ? opts.longitudeInterval : null;
      let gridNodeCount = opts && 'gridNodeCount' in opts ? opts.gridNodeCount : null;
      return new nadgrid$.SubGridHeader.new({name: name, parent: parent, lowerLatitude: lowerLatitude, upperLatitude: upperLatitude, lowerLongitude: lowerLongitude, upperLongitude: upperLongitude, latitudeInterval: latitudeInterval, longitudeInterval: longitudeInterval, gridNodeCount: gridNodeCount});
    }
  };
  (nadgrid$.SubGridHeader.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let lowerLatitude = opts && 'lowerLatitude' in opts ? opts.lowerLatitude : null;
    let upperLatitude = opts && 'upperLatitude' in opts ? opts.upperLatitude : null;
    let lowerLongitude = opts && 'lowerLongitude' in opts ? opts.lowerLongitude : null;
    let upperLongitude = opts && 'upperLongitude' in opts ? opts.upperLongitude : null;
    let latitudeInterval = opts && 'latitudeInterval' in opts ? opts.latitudeInterval : null;
    let longitudeInterval = opts && 'longitudeInterval' in opts ? opts.longitudeInterval : null;
    let gridNodeCount = opts && 'gridNodeCount' in opts ? opts.gridNodeCount : null;
    this[name$0] = name;
    this[parent$] = parent;
    this[lowerLatitude$] = lowerLatitude;
    this[upperLatitude$] = upperLatitude;
    this[lowerLongitude$] = lowerLongitude;
    this[upperLongitude$] = upperLongitude;
    this[latitudeInterval$] = latitudeInterval;
    this[longitudeInterval$] = longitudeInterval;
    this[gridNodeCount$] = gridNodeCount;
    ;
  }).prototype = nadgrid$.SubGridHeader.prototype;
  dart.addTypeTests(nadgrid$.SubGridHeader);
  dart.addTypeCaches(nadgrid$.SubGridHeader);
  dart.setLibraryUri(nadgrid$.SubGridHeader, I[1]);
  dart.setFieldSignature(nadgrid$.SubGridHeader, () => ({
    __proto__: dart.getFields(nadgrid$.SubGridHeader.__proto__),
    name: dart.finalFieldType(core.String),
    parent: dart.finalFieldType(core.String),
    lowerLatitude: dart.finalFieldType(core.double),
    upperLatitude: dart.finalFieldType(core.double),
    lowerLongitude: dart.finalFieldType(core.double),
    upperLongitude: dart.finalFieldType(core.double),
    latitudeInterval: dart.finalFieldType(core.double),
    longitudeInterval: dart.finalFieldType(core.double),
    gridNodeCount: dart.finalFieldType(core.int)
  }));
  var latitudeShift$ = dart.privateName(nadgrid$, "GridNode.latitudeShift");
  var longitudeShift$ = dart.privateName(nadgrid$, "GridNode.longitudeShift");
  var latitudeAccuracy$ = dart.privateName(nadgrid$, "GridNode.latitudeAccuracy");
  var longitudeAccuracy$ = dart.privateName(nadgrid$, "GridNode.longitudeAccuracy");
  nadgrid$.GridNode = class GridNode extends core.Object {
    get latitudeShift() {
      return this[latitudeShift$];
    }
    set latitudeShift(value) {
      super.latitudeShift = value;
    }
    get longitudeShift() {
      return this[longitudeShift$];
    }
    set longitudeShift(value) {
      super.longitudeShift = value;
    }
    get latitudeAccuracy() {
      return this[latitudeAccuracy$];
    }
    set latitudeAccuracy(value) {
      super.latitudeAccuracy = value;
    }
    get longitudeAccuracy() {
      return this[longitudeAccuracy$];
    }
    set longitudeAccuracy(value) {
      super.longitudeAccuracy = value;
    }
    static ['_#new#tearOff'](opts) {
      let latitudeShift = opts && 'latitudeShift' in opts ? opts.latitudeShift : null;
      let longitudeShift = opts && 'longitudeShift' in opts ? opts.longitudeShift : null;
      let latitudeAccuracy = opts && 'latitudeAccuracy' in opts ? opts.latitudeAccuracy : null;
      let longitudeAccuracy = opts && 'longitudeAccuracy' in opts ? opts.longitudeAccuracy : null;
      return new nadgrid$.GridNode.new({latitudeShift: latitudeShift, longitudeShift: longitudeShift, latitudeAccuracy: latitudeAccuracy, longitudeAccuracy: longitudeAccuracy});
    }
  };
  (nadgrid$.GridNode.new = function(opts) {
    let latitudeShift = opts && 'latitudeShift' in opts ? opts.latitudeShift : null;
    let longitudeShift = opts && 'longitudeShift' in opts ? opts.longitudeShift : null;
    let latitudeAccuracy = opts && 'latitudeAccuracy' in opts ? opts.latitudeAccuracy : null;
    let longitudeAccuracy = opts && 'longitudeAccuracy' in opts ? opts.longitudeAccuracy : null;
    this[latitudeShift$] = latitudeShift;
    this[longitudeShift$] = longitudeShift;
    this[latitudeAccuracy$] = latitudeAccuracy;
    this[longitudeAccuracy$] = longitudeAccuracy;
    ;
  }).prototype = nadgrid$.GridNode.prototype;
  dart.addTypeTests(nadgrid$.GridNode);
  dart.addTypeCaches(nadgrid$.GridNode);
  dart.setLibraryUri(nadgrid$.GridNode, I[1]);
  dart.setFieldSignature(nadgrid$.GridNode, () => ({
    __proto__: dart.getFields(nadgrid$.GridNode.__proto__),
    latitudeShift: dart.finalFieldType(core.double),
    longitudeShift: dart.finalFieldType(core.double),
    latitudeAccuracy: dart.finalFieldType(core.double),
    longitudeAccuracy: dart.finalFieldType(core.double)
  }));
  var ll$ = dart.privateName(nadgrid$, "SubGrid.ll");
  var del$ = dart.privateName(nadgrid$, "SubGrid.del");
  var lim$ = dart.privateName(nadgrid$, "SubGrid.lim");
  var count$ = dart.privateName(nadgrid$, "SubGrid.count");
  var cvs$ = dart.privateName(nadgrid$, "SubGrid.cvs");
  nadgrid$.SubGrid = class SubGrid extends core.Object {
    get ll() {
      return this[ll$];
    }
    set ll(value) {
      super.ll = value;
    }
    get del() {
      return this[del$];
    }
    set del(value) {
      super.del = value;
    }
    get lim() {
      return this[lim$];
    }
    set lim(value) {
      super.lim = value;
    }
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    get cvs() {
      return this[cvs$];
    }
    set cvs(value) {
      super.cvs = value;
    }
    static ['_#new#tearOff'](opts) {
      let ll = opts && 'll' in opts ? opts.ll : null;
      let del = opts && 'del' in opts ? opts.del : null;
      let lim = opts && 'lim' in opts ? opts.lim : null;
      let count = opts && 'count' in opts ? opts.count : null;
      let cvs = opts && 'cvs' in opts ? opts.cvs : null;
      return new nadgrid$.SubGrid.new({ll: ll, del: del, lim: lim, count: count, cvs: cvs});
    }
  };
  (nadgrid$.SubGrid.new = function(opts) {
    let ll = opts && 'll' in opts ? opts.ll : null;
    let del = opts && 'del' in opts ? opts.del : null;
    let lim = opts && 'lim' in opts ? opts.lim : null;
    let count = opts && 'count' in opts ? opts.count : null;
    let cvs = opts && 'cvs' in opts ? opts.cvs : null;
    this[ll$] = ll;
    this[del$] = del;
    this[lim$] = lim;
    this[count$] = count;
    this[cvs$] = cvs;
    ;
  }).prototype = nadgrid$.SubGrid.prototype;
  dart.addTypeTests(nadgrid$.SubGrid);
  dart.addTypeCaches(nadgrid$.SubGrid);
  dart.setLibraryUri(nadgrid$.SubGrid, I[1]);
  dart.setFieldSignature(nadgrid$.SubGrid, () => ({
    __proto__: dart.getFields(nadgrid$.SubGrid.__proto__),
    ll: dart.finalFieldType(core.List$(core.double)),
    del: dart.finalFieldType(core.List$(core.double)),
    lim: dart.finalFieldType(core.List$(core.int)),
    count: dart.finalFieldType(core.int),
    cvs: dart.finalFieldType(core.List$(core.List$(core.double)))
  }));
  var header$ = dart.privateName(nadgrid$, "Nadgird.header");
  var subgrids$ = dart.privateName(nadgrid$, "Nadgird.subgrids");
  nadgrid$.Nadgird = class Nadgird extends core.Object {
    get header() {
      return this[header$];
    }
    set header(value) {
      super.header = value;
    }
    get subgrids() {
      return this[subgrids$];
    }
    set subgrids(value) {
      super.subgrids = value;
    }
    static ['_#new#tearOff'](opts) {
      let header = opts && 'header' in opts ? opts.header : null;
      let subgrids = opts && 'subgrids' in opts ? opts.subgrids : null;
      return new nadgrid$.Nadgird.new({header: header, subgrids: subgrids});
    }
    static factory(key, data) {
      let view = typed_data.ByteData.view(data[$buffer]);
      let endian = nadgrid$.Nadgird.detectEndian(view);
      let header = nadgrid$.Nadgird.readHeader(view, endian);
      if (header.nSubgrids > 1) {
        core.print("Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored");
      }
      let subgrids = nadgrid$.Nadgird.readSubgrids(view, header, endian);
      let nadgrid = new nadgrid$.Nadgird.new({header: header, subgrids: subgrids});
      return nadgrid_store.NadgridStore.new().register(key, nadgrid);
    }
    static ['_#factory#tearOff'](key, data) {
      return nadgrid$.Nadgird.factory(key, data);
    }
    static getNadgrids(nadgrids) {
      if (nadgrids == null) {
        return null;
      }
      let grids = nadgrids[$split](",");
      return grids[$map](nadgrid$.NadgridParam, C[0] || CT.C0)[$toList]();
    }
    static parseNadgridString(value) {
      let optional = value[$_get](0) === "@";
      if (optional) {
        value = value[$substring](1);
      }
      if (value === "null") {
        return new nadgrid$.NadgridParam.new({name: "null", mandatory: !optional, grid: null, isNull: true});
      }
      return new nadgrid$.NadgridParam.new({name: value, mandatory: !optional, grid: nadgrid_store.NadgridStore.new().get(value), isNull: false});
    }
    static secondsToRadians(seconds) {
      return seconds / 3600 * 3.141592653589793 / 180;
    }
    static detectEndian(view) {
      return view[$getUint8](8) === 11 ? typed_data.Endian.little : typed_data.Endian.big;
    }
    static readHeader(view, endian) {
      return new nadgrid$.GridHeader.new({nFields: view[$getInt32](8, endian), nSubgridFields: view[$getInt32](24, endian), nSubgrids: view[$getInt32](40, endian), shiftType: nadgrid$.Nadgird.decodeString(view, 56, 56 + 8)[$trim](), fromSemiMajorAxis: view[$getFloat64](120, endian), fromSemiMinorAxis: view[$getFloat64](136, endian), toSemiMajorAxis: view[$getFloat64](152, endian), toSemiMinorAxis: view[$getFloat64](168, endian)});
    }
    static decodeString(view, start, end) {
      return core.String.fromCharCodes(T.IterableOfint().generate(end - start, dart.fn(x => view[$getUint8](start + x), T.intToint())));
    }
    static readSubgrids(view, header, endian) {
      let gridOffset = 176;
      let grids = T.JSArrayOfSubGrid().of([]);
      for (let i = 0; i < header.nSubgrids; i = i + 1) {
        let subHeader = nadgrid$.Nadgird.readGridHeader(view, gridOffset, endian);
        let nodes = nadgrid$.Nadgird.readGridNodes(view, gridOffset, subHeader, endian);
        let lngColumnCount = (1 + (subHeader.upperLongitude - subHeader.lowerLongitude) / subHeader.longitudeInterval)[$round]();
        let latColumnCount = (1 + (subHeader.upperLatitude - subHeader.lowerLatitude) / subHeader.latitudeInterval)[$round]();
        grids[$add](new nadgrid$.SubGrid.new({ll: T.JSArrayOfdouble().of([nadgrid$.Nadgird.secondsToRadians(subHeader.lowerLongitude), nadgrid$.Nadgird.secondsToRadians(subHeader.lowerLatitude)]), del: T.JSArrayOfdouble().of([nadgrid$.Nadgird.secondsToRadians(subHeader.longitudeInterval), nadgrid$.Nadgird.secondsToRadians(subHeader.latitudeInterval)]), lim: T.JSArrayOfint().of([lngColumnCount, latColumnCount]), count: subHeader.gridNodeCount, cvs: nadgrid$.Nadgird.mapNodes(nodes)}));
      }
      return grids;
    }
    static mapNodes(nodes) {
      return nodes[$map](T.ListOfdouble(), dart.fn(r => T.JSArrayOfdouble().of([nadgrid$.Nadgird.secondsToRadians(r.longitudeShift), nadgrid$.Nadgird.secondsToRadians(r.latitudeShift)]), T.GridNodeToListOfdouble()))[$toList]();
    }
    static readGridHeader(view, offset, endian) {
      return new nadgrid$.SubGridHeader.new({name: nadgrid$.Nadgird.decodeString(view, offset + 8, offset + 16)[$trim](), parent: nadgrid$.Nadgird.decodeString(view, offset + 24, offset + 24 + 8)[$trim](), lowerLatitude: view[$getFloat64](offset + 72, endian), upperLatitude: view[$getFloat64](offset + 88, endian), lowerLongitude: view[$getFloat64](offset + 104, endian), upperLongitude: view[$getFloat64](offset + 120, endian), latitudeInterval: view[$getFloat64](offset + 136, endian), longitudeInterval: view[$getFloat64](offset + 152, endian), gridNodeCount: view[$getInt32](offset + 168, endian)});
    }
    static readGridNodes(view, offset, gridHeader, endian) {
      let nodesOffset = offset + 176;
      let gridRecordLength = 16;
      let gridShiftRecords = T.JSArrayOfGridNode().of([]);
      for (let i = 0; i < gridHeader.gridNodeCount; i = i + 1) {
        let record = new nadgrid$.GridNode.new({latitudeShift: view[$getFloat32](nodesOffset + i * gridRecordLength, endian), longitudeShift: view[$getFloat32](nodesOffset + i * gridRecordLength + 4, endian), latitudeAccuracy: view[$getFloat32](nodesOffset + i * gridRecordLength + 8, endian), longitudeAccuracy: view[$getFloat32](nodesOffset + i * gridRecordLength + 12, endian)});
        gridShiftRecords[$add](record);
      }
      return gridShiftRecords;
    }
  };
  (nadgrid$.Nadgird.new = function(opts) {
    let header = opts && 'header' in opts ? opts.header : null;
    let subgrids = opts && 'subgrids' in opts ? opts.subgrids : null;
    this[header$] = header;
    this[subgrids$] = subgrids;
    ;
  }).prototype = nadgrid$.Nadgird.prototype;
  dart.addTypeTests(nadgrid$.Nadgird);
  dart.addTypeCaches(nadgrid$.Nadgird);
  dart.setStaticMethodSignature(nadgrid$.Nadgird, () => ['factory', 'getNadgrids', 'parseNadgridString', 'secondsToRadians', 'detectEndian', 'readHeader', 'decodeString', 'readSubgrids', 'mapNodes', 'readGridHeader', 'readGridNodes']);
  dart.setLibraryUri(nadgrid$.Nadgird, I[1]);
  dart.setFieldSignature(nadgrid$.Nadgird, () => ({
    __proto__: dart.getFields(nadgrid$.Nadgird.__proto__),
    header: dart.finalFieldType(nadgrid$.GridHeader),
    subgrids: dart.finalFieldType(core.List$(nadgrid$.SubGrid))
  }));
  dart.trackLibraries("packages/proj4dart/src/globals/nadgrid_store.dart", {
    "package:proj4dart/src/globals/nadgrid_store.dart": nadgrid_store,
    "package:proj4dart/src/classes/nadgrid.dart": nadgrid$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["nadgrid_store.dart","../classes/nadgrid.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/proj4dart/src/globals/nadgrid_store.dart.lib.js"}');
  // Exports:
  return {
    src__globals__nadgrid_store: nadgrid_store,
    src__classes__nadgrid: nadgrid$
  };
}));

//# sourceMappingURL=nadgrid_store.dart.lib.js.map
