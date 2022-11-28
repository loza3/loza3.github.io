define(['dart_sdk', 'packages/my_ticket_care/models/model_state.dart'], (function load__packages__my_ticket_care__models__office_dart(dart_sdk, packages__my_ticket_care__models__model_state$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model_state = packages__my_ticket_care__models__model_state$46dart.models__model_state;
  var office = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toString = dartx.toString;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: model_state.ModelState.prototype,
        [_Enum__name]: "active",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:my_ticket_care/models/office.dart"];
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
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
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
      let companyId = opts && 'companyId' in opts ? opts.companyId : null;
      let officeState = opts && 'officeState' in opts ? opts.officeState : C[0] || CT.C0;
      let companyName = opts && 'companyName' in opts ? opts.companyName : null;
      let companyLogo = opts && 'companyLogo' in opts ? opts.companyLogo : null;
      return new office.Office.new({officeId: officeId, officeName: officeName, country: country, city: city, address: address, geoRefLatitude: geoRefLatitude, geoRefLongitude: geoRefLongitude, companyId: companyId, officeState: officeState, companyName: companyName, companyLogo: companyLogo});
    }
    toMap() {
      let result = new (T.IdentityMapOfString$dynamic()).new();
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["officeId", this.officeId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["officeName", this.officeName]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["country", this.country]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["city", this.city]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["address", this.address]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["geoRefLatitude", this.geoRefLatitude]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["geoRefLongitude", this.geoRefLongitude]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["officeState", this.officeState.index]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["companyId", this.companyId]));
      if (this.companyName != null) {
        result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["companyName", this.companyName]));
      }
      if (this.companyLogo != null) {
        result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["companyLogo", this.companyLogo]));
      }
      return result;
    }
    static fromMap(map) {
      let t0, t0$, t0$0, t0$1;
      if (map[$_get]("company") == null) {
        map[$_set]("company", new (T.IdentityMapOfString$dynamic()).from(["companyId", map[$_get]("companyId"), "companyLogo", ""]));
      }
      if (!dart.toString(dart.dsend(map[$_get]("company"), '_get', ["companyLogo"]))[$contains]("http")) {
        dart.dsend(map[$_get]("company"), '_set', ["companyLogo", "https://cdn-icons-png.flaticon.com/512/172/172802.png"]);
      }
      return new office.Office.new({officeId: core.int.as(map[$_get]("officeId")), officeName: core.String.as((t0 = map[$_get]("officeName"), t0 == null ? "" : t0)), country: core.String.as((t0$ = map[$_get]("country"), t0$ == null ? "" : t0$)), city: core.String.as((t0$0 = map[$_get]("city"), t0$0 == null ? "" : t0$0)), address: core.String.as((t0$1 = map[$_get]("address"), t0$1 == null ? "" : t0$1)), geoRefLatitude: core.double.as(map[$_get]("geoRefLatitude")), geoRefLongitude: core.double.as(map[$_get]("geoRefLongitude")), officeState: model_state.ModelState.values[$_get](core.int.as(map[$_get]("officeState"))), companyId: core.int.as(dart.dsend(map[$_get]("company"), '_get', ["companyId"])), companyName: T.StringN().as(dart.dsend(map[$_get]("company"), '_get', ["companyName"])), companyLogo: T.StringN().as(dart.dsend(map[$_get]("company"), '_get', ["companyLogo"]))});
    }
    static ['_#fromMap#tearOff'](map) {
      return office.Office.fromMap(map);
    }
    toJson() {
      return convert.json.encode(this.toMap());
    }
    static fromJson(source) {
      return office.Office.fromMap(T.MapOfString$dynamic().as(convert.json.decode(source)));
    }
    static ['_#fromJson#tearOff'](source) {
      return office.Office.fromJson(source);
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
    let companyId = opts && 'companyId' in opts ? opts.companyId : null;
    let officeState = opts && 'officeState' in opts ? opts.officeState : C[0] || CT.C0;
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
    this[companyId$] = companyId;
    this[officeState$] = officeState;
    this[companyName$] = companyName;
    this[companyLogo$] = companyLogo;
    ;
  }).prototype = office.Office.prototype;
  dart.addTypeTests(office.Office);
  dart.addTypeCaches(office.Office);
  dart.setMethodSignature(office.Office, () => ({
    __proto__: dart.getMethods(office.Office.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    toJson: dart.fnType(core.String, [])
  }));
  dart.setStaticMethodSignature(office.Office, () => ['fromMap', 'fromJson']);
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
    companyName: dart.fieldType(dart.nullable(core.String)),
    companyLogo: dart.fieldType(dart.nullable(core.String))
  }));
  dart.trackLibraries("packages/my_ticket_care/models/office.dart", {
    "package:my_ticket_care/models/office.dart": office
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["office.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKM;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACI;;;;;;IACP;;;;;;IACI;;;;;;IACA;;;;;;;;;;;;;;;;;;;;;AAgBA,mBAA0B;AAEK,MAArC,AAAO,MAAD,UAAQ,4CAAC,YAAY;AACc,MAAzC,AAAO,MAAD,UAAQ,4CAAC,cAAc;AACM,MAAnC,AAAO,MAAD,UAAQ,4CAAC,WAAW;AACG,MAA7B,AAAO,MAAD,UAAQ,4CAAC,QAAQ;AACY,MAAnC,AAAO,MAAD,UAAQ,4CAAC,WAAW;AACuB,MAAjD,AAAO,MAAD,UAAQ,4CAAC,kBAAkB;AACkB,MAAnD,AAAO,MAAD,UAAQ,4CAAC,mBAAmB;AACe,MAAjD,AAAO,MAAD,UAAQ,4CAAC,eAAe,AAAY;AACH,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AAE5B,UAAI;AACyC,QAA3C,AAAO,MAAD,UAAQ,4CAAC,eAAe;;AAGhC,UAAI;AACyC,QAA3C,AAAO,MAAD,UAAQ,4CAAC,eAAe;;AAEhC,YAAO,OAAM;IACf;mBAE4C;;AAC1C,UAAI,AAAG,AAAY,GAAZ,QAAC;AAIL,QAHD,AAAG,GAAA,QAAC,WAAa,4CACf,aAAa,AAAG,GAAA,QAAC,cACjB,eAAe;;AAInB,WAAmC,AAAW,cAA3B,WAAd,AAAG,GAAA,QAAC,qBAAW,4BAAmC;AAEM,QAD7C,WAAd,AAAG,GAAA,QAAC,qBAAW,eACX;;AAEN,YAAO,8CACK,AAAG,GAAA,QAAC,0CACgB,KAAlB,AAAG,GAAA,QAAC,eAAD,aAAkB,oCACT,MAAf,AAAG,GAAA,QAAC,YAAD,cAAe,kCACT,OAAZ,AAAG,GAAA,QAAC,SAAD,eAAY,sCACG,OAAf,AAAG,GAAA,QAAC,YAAD,eAAe,4CACX,AAAG,GAAA,QAAC,oDACH,AAAG,GAAA,QAAC,kCACG,AAAM,iDAAC,AAAG,GAAA,QAAC,yCACV,WAAd,AAAG,GAAA,QAAC,qBAAW,4CACC,WAAd,AAAG,GAAA,QAAC,qBAAW,8CACD,WAAd,AAAG,GAAA,QAAC,qBAAW;IAEhC;;;;;AAEmB,YAAA,AAAK,qBAAO;IAAQ;oBAER;AAAW,YAAO,kDAAQ,AAAK,oBAAO,MAAM;IAAE;;;;;;QAjE7D;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACT;QACA;QACA;IAfI,qBAAyB;IAKpB;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACT;IACA;IACA;;EACL","file":"../../../../../../../../../packages/my_ticket_care/models/office.dart.lib.js"}');
  // Exports:
  return {
    models__office: office
  };
}));

//# sourceMappingURL=office.dart.lib.js.map
