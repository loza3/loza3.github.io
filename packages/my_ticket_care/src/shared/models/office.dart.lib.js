define(['dart_sdk', 'packages/my_ticket_care/models/model_state.dart'], (function load__packages__my_ticket_care__src__shared__models__office_dart(dart_sdk, packages__my_ticket_care__models__model_state$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model_state = packages__my_ticket_care__models__model_state$46dart.models__model_state;
  var office = Object.create(dart.library);
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    dynamicToOffice: () => (T.dynamicToOffice = dart.constFn(dart.fnType(office.Office, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/shared/models/office.dart"];
  var officeId$ = dart.privateName(office, "Office.officeId");
  var officeName$ = dart.privateName(office, "Office.officeName");
  var country$ = dart.privateName(office, "Office.country");
  var city$ = dart.privateName(office, "Office.city");
  var address$ = dart.privateName(office, "Office.address");
  var geoRefLatitude$ = dart.privateName(office, "Office.geoRefLatitude");
  var geoRefLongitude$ = dart.privateName(office, "Office.geoRefLongitude");
  var officeState$ = dart.privateName(office, "Office.officeState");
  var companyId$ = dart.privateName(office, "Office.companyId");
  var companyName$ = dart.privateName(office, "Office.companyName");
  var companyLogo$ = dart.privateName(office, "Office.companyLogo");
  office.Office = class Office extends core.Object {
    get officeId() {
      return this[officeId$];
    }
    set officeId(value) {
      this[officeId$] = value;
    }
    get officeName() {
      return this[officeName$];
    }
    set officeName(value) {
      this[officeName$] = value;
    }
    get country() {
      return this[country$];
    }
    set country(value) {
      this[country$] = value;
    }
    get city() {
      return this[city$];
    }
    set city(value) {
      this[city$] = value;
    }
    get address() {
      return this[address$];
    }
    set address(value) {
      this[address$] = value;
    }
    get geoRefLatitude() {
      return this[geoRefLatitude$];
    }
    set geoRefLatitude(value) {
      this[geoRefLatitude$] = value;
    }
    get geoRefLongitude() {
      return this[geoRefLongitude$];
    }
    set geoRefLongitude(value) {
      this[geoRefLongitude$] = value;
    }
    get officeState() {
      return this[officeState$];
    }
    set officeState(value) {
      this[officeState$] = value;
    }
    get companyId() {
      return this[companyId$];
    }
    set companyId(value) {
      this[companyId$] = value;
    }
    get companyName() {
      return this[companyName$];
    }
    set companyName(value) {
      this[companyName$] = value;
    }
    get companyLogo() {
      return this[companyLogo$];
    }
    set companyLogo(value) {
      this[companyLogo$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let officeId = opts && 'officeId' in opts ? opts.officeId : null;
      let officeName = opts && 'officeName' in opts ? opts.officeName : null;
      let country = opts && 'country' in opts ? opts.country : null;
      let city = opts && 'city' in opts ? opts.city : null;
      let address = opts && 'address' in opts ? opts.address : null;
      let geoRefLatitude = opts && 'geoRefLatitude' in opts ? opts.geoRefLatitude : null;
      let geoRefLongitude = opts && 'geoRefLongitude' in opts ? opts.geoRefLongitude : null;
      let officeState = opts && 'officeState' in opts ? opts.officeState : null;
      let companyId = opts && 'companyId' in opts ? opts.companyId : null;
      let companyName = opts && 'companyName' in opts ? opts.companyName : null;
      let companyLogo = opts && 'companyLogo' in opts ? opts.companyLogo : null;
      return new office.Office.new({officeId: officeId, officeName: officeName, country: country, city: city, address: address, geoRefLatitude: geoRefLatitude, geoRefLongitude: geoRefLongitude, officeState: officeState, companyId: companyId, companyName: companyName, companyLogo: companyLogo});
    }
    static fromMap(map) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8;
      let mapCompany = T.MapOfString$dynamic().as((t0 = map[$_get]("company"), t0 == null ? new (T.IdentityMapOfString$dynamic()).new() : t0));
      return new office.Office.new({officeId: core.int.as((t0$ = map[$_get]("officeId"), t0$ == null ? -1 : t0$)), officeName: core.String.as((t0$0 = map[$_get]("officeName"), t0$0 == null ? "Null" : t0$0)), country: core.String.as((t0$1 = map[$_get]("country"), t0$1 == null ? "Null" : t0$1)), city: core.String.as((t0$2 = map[$_get]("city"), t0$2 == null ? "Null" : t0$2)), address: core.String.as((t0$3 = map[$_get]("address"), t0$3 == null ? "Null" : t0$3)), geoRefLatitude: office._fixLatitude(core.double.as((t0$4 = map[$_get]("geoRefLatitude"), t0$4 == null ? 20.0 : t0$4))), geoRefLongitude: office._fixLongitude(core.double.as((t0$5 = map[$_get]("geoRefLongitude"), t0$5 == null ? 20.0 : t0$5))), officeState: model_state.ModelState.values[$_get](core.int.as(map[$_get]("officeState"))), companyId: core.int.as((t0$6 = mapCompany[$_get]("companyId"), t0$6 == null ? -1 : t0$6)), companyName: core.String.as((t0$7 = mapCompany[$_get]("companyName"), t0$7 == null ? "Null" : t0$7)), companyLogo: core.String.as((t0$8 = mapCompany[$_get]("companyLogo"), t0$8 == null ? "Null" : t0$8))});
    }
    static ['_#fromMap#tearOff'](map) {
      return office.Office.fromMap(map);
    }
    static fromJson(source) {
      return office.Office.fromMap(T.MapOfString$dynamic().as(convert.json.decode(source)));
    }
    static ['_#fromJson#tearOff'](source) {
      return office.Office.fromJson(source);
    }
    static empty() {
      return new office.Office.new({officeId: -1, officeName: "Null", country: "Null", city: "Null", address: "Null", geoRefLatitude: -17.783711518311975, geoRefLongitude: -63.180371041273325, officeState: model_state.ModelState.active, companyId: -1, companyName: "Null", companyLogo: "https://cdn-icons-png.flaticon.com/512/172/172802.png"});
    }
    static ['_#empty#tearOff']() {
      return office.Office.empty();
    }
    static listFromMap(data) {
      return data[$map](office.Office, dart.fn(e => office.Office.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToOffice()))[$toList]();
    }
  };
  (office.Office.new = function(opts) {
    let officeId = opts && 'officeId' in opts ? opts.officeId : null;
    let officeName = opts && 'officeName' in opts ? opts.officeName : null;
    let country = opts && 'country' in opts ? opts.country : null;
    let city = opts && 'city' in opts ? opts.city : null;
    let address = opts && 'address' in opts ? opts.address : null;
    let geoRefLatitude = opts && 'geoRefLatitude' in opts ? opts.geoRefLatitude : null;
    let geoRefLongitude = opts && 'geoRefLongitude' in opts ? opts.geoRefLongitude : null;
    let officeState = opts && 'officeState' in opts ? opts.officeState : null;
    let companyId = opts && 'companyId' in opts ? opts.companyId : null;
    let companyName = opts && 'companyName' in opts ? opts.companyName : null;
    let companyLogo = opts && 'companyLogo' in opts ? opts.companyLogo : null;
    this[officeState$] = model_state.ModelState.active;
    this[officeId$] = officeId;
    this[officeName$] = officeName;
    this[country$] = country;
    this[city$] = city;
    this[address$] = address;
    this[geoRefLatitude$] = geoRefLatitude;
    this[geoRefLongitude$] = geoRefLongitude;
    this[officeState$] = officeState;
    this[companyId$] = companyId;
    this[companyName$] = companyName;
    this[companyLogo$] = companyLogo;
    ;
  }).prototype = office.Office.prototype;
  dart.addTypeTests(office.Office);
  dart.addTypeCaches(office.Office);
  dart.setStaticMethodSignature(office.Office, () => ['fromMap', 'fromJson', 'empty', 'listFromMap']);
  dart.setLibraryUri(office.Office, I[0]);
  dart.setFieldSignature(office.Office, () => ({
    __proto__: dart.getFields(office.Office.__proto__),
    officeId: dart.fieldType(core.int),
    officeName: dart.fieldType(core.String),
    country: dart.fieldType(core.String),
    city: dart.fieldType(core.String),
    address: dart.fieldType(core.String),
    geoRefLatitude: dart.fieldType(core.double),
    geoRefLongitude: dart.fieldType(core.double),
    officeState: dart.fieldType(model_state.ModelState),
    companyId: dart.fieldType(core.int),
    companyName: dart.fieldType(core.String),
    companyLogo: dart.fieldType(core.String)
  }));
  office._fixLatitude = function _fixLatitude(c) {
    if (c < -90 || c > 90) {
      developer.log("Oficina con latitud invalida");
      c = -17.783711518311975;
    }
    return c;
  };
  office._fixLongitude = function _fixLongitude(c) {
    if (c < -90 || c > 90) {
      developer.log("Oficina con longitud invalida");
      c = -63.180371041273325;
    }
    return c;
  };
  dart.trackLibraries("packages/my_ticket_care/src/shared/models/office.dart", {
    "package:my_ticket_care/src/shared/models/office.dart": office
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["office.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBM;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACI;;;;;;IACP;;;;;;IACG;;;;;;IACA;;;;;;;;;;;;;;;;;;;;mBAeqC;;AACrB,mDAA4B,KAAf,AAAG,GAAA,QAAC,YAAD,aAAe;AAEpD,YAAO,+CACqB,MAAhB,AAAG,GAAA,QAAC,aAAD,cAAgB,CAAC,uCACA,OAAlB,AAAG,GAAA,QAAC,eAAD,eAAkB,0CACT,OAAf,AAAG,GAAA,QAAC,YAAD,eAAe,uCACT,OAAZ,AAAG,GAAA,QAAC,SAAD,eAAY,0CACG,OAAf,AAAG,GAAA,QAAC,YAAD,eAAe,iCACX,oCAAmC,OAAtB,AAAG,GAAA,QAAC,mBAAD,eAAsB,iCACrC,qCAAqC,OAAvB,AAAG,GAAA,QAAC,oBAAD,eAAuB,6BACjC,AAAM,iDAAC,AAAG,GAAA,QAAC,0CACA,OAAxB,AAAU,UAAA,QAAC,cAAD,eAAiB,CAAC,yCACA,OAA1B,AAAU,UAAA,QAAC,gBAAD,eAAmB,8CACH,OAA1B,AAAU,UAAA,QAAC,gBAAD,eAAmB;IAE9C;;;;oBAE+B;AAAW,YAAO,kDAAQ,AAAK,oBAAO,MAAM;IAAE;;;;;AAG3E,YAAO,kCACK,CAAC,eACC,iBACH,cACH,iBACG,wBACO,CAAC,qCACA,CAAC,iCACM,0CACb,CAAC,gBACC,qBACA;IAEjB;;;;uBAE8C;AAC5C,YAAO,AAAK,AAA8B,KAA/B,sBAAK,QAAC,KAAa,iDAAQ,CAAC;IACzC;;;QAnDgB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAfL,qBAAyB;IAKpB;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACd;;;;;;;;;;;;;;;;;;;8CAxCuB;AACzB,QAAI,AAAE,CAAD,GAAG,CAAC,MAAM,AAAE,CAAD,GAAG;AACkB,MAAnC,cAAI;AACmB,MAAvB,IAAI,CAAC;;AAEP,UAAO,EAAC;EACV;gDAE4B;AAC1B,QAAI,AAAE,CAAD,GAAG,CAAC,MAAM,AAAE,CAAD,GAAG;AACmB,MAApC,cAAI;AACmB,MAAvB,IAAI,CAAC;;AAEP,UAAO,EAAC;EACV","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/models/office.dart.lib.js"}');
  // Exports:
  return {
    src__shared__models__office: office
  };
}));

//# sourceMappingURL=office.dart.lib.js.map
