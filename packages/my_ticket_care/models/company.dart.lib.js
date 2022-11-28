define(['dart_sdk'], (function load__packages__my_ticket_care__models__company_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var company = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/models/company.dart"];
  var companyId$ = dart.privateName(company, "Company.companyId");
  var companyName$ = dart.privateName(company, "Company.companyName");
  var companyLogo$ = dart.privateName(company, "Company.companyLogo");
  var companyDescription$ = dart.privateName(company, "Company.companyDescription");
  company.Company = class Company extends core.Object {
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
    get companyDescription() {
      return this[companyDescription$];
    }
    set companyDescription(value) {
      this[companyDescription$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let companyId = opts && 'companyId' in opts ? opts.companyId : null;
      let companyName = opts && 'companyName' in opts ? opts.companyName : null;
      let companyLogo = opts && 'companyLogo' in opts ? opts.companyLogo : null;
      let companyDescription = opts && 'companyDescription' in opts ? opts.companyDescription : null;
      return new company.Company.new({companyId: companyId, companyName: companyName, companyLogo: companyLogo, companyDescription: companyDescription});
    }
    toMap() {
      let result = new (T.IdentityMapOfString$dynamic()).new();
      if (this.companyId != null) {
        result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["companyId", this.companyId]));
      }
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["companyName", this.companyName]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["companyLogo", this.companyLogo]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["companyDescription", this.companyDescription]));
      return result;
    }
    static fromMap(map) {
      let t0, t0$, t0$0;
      return new company.Company.new({companyId: T.intN().as(map[$_get]("companyId")), companyName: core.String.as((t0 = map[$_get]("companyName"), t0 == null ? "" : t0)), companyLogo: core.String.as((t0$ = map[$_get]("companyLogo"), t0$ == null ? "" : t0$)), companyDescription: core.String.as((t0$0 = map[$_get]("companyDescription"), t0$0 == null ? "" : t0$0))});
    }
    static ['_#fromMap#tearOff'](map) {
      return company.Company.fromMap(map);
    }
    toJson() {
      return convert.json.encode(this.toMap());
    }
    static fromJson(source) {
      return company.Company.fromMap(T.MapOfString$dynamic().as(convert.json.decode(source)));
    }
    static ['_#fromJson#tearOff'](source) {
      return company.Company.fromJson(source);
    }
  };
  (company.Company.new = function(opts) {
    let companyId = opts && 'companyId' in opts ? opts.companyId : null;
    let companyName = opts && 'companyName' in opts ? opts.companyName : null;
    let companyLogo = opts && 'companyLogo' in opts ? opts.companyLogo : null;
    let companyDescription = opts && 'companyDescription' in opts ? opts.companyDescription : null;
    this[companyName$] = "";
    this[companyLogo$] = "";
    this[companyDescription$] = "";
    this[companyId$] = companyId;
    this[companyName$] = companyName;
    this[companyLogo$] = companyLogo;
    this[companyDescription$] = companyDescription;
    ;
  }).prototype = company.Company.prototype;
  dart.addTypeTests(company.Company);
  dart.addTypeCaches(company.Company);
  dart.setMethodSignature(company.Company, () => ({
    __proto__: dart.getMethods(company.Company.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    toJson: dart.fnType(core.String, [])
  }));
  dart.setStaticMethodSignature(company.Company, () => ['fromMap', 'fromJson']);
  dart.setLibraryUri(company.Company, I[0]);
  dart.setFieldSignature(company.Company, () => ({
    __proto__: dart.getFields(company.Company.__proto__),
    companyId: dart.fieldType(dart.nullable(core.int)),
    companyName: dart.fieldType(core.String),
    companyLogo: dart.fieldType(core.String),
    companyDescription: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/my_ticket_care/models/company.dart", {
    "package:my_ticket_care/models/company.dart": company
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["company.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAGO;;;;;;IACE;;;;;;IACA;;;;;;IACA;;;;;;;;;;;;;;AASC,mBAA0B;AAEhC,UAAI;AACqC,QAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;;AAEa,MAA3C,AAAO,MAAD,UAAQ,4CAAC,eAAe;AACa,MAA3C,AAAO,MAAD,UAAQ,4CAAC,eAAe;AAC2B,MAAzD,AAAO,MAAD,UAAQ,4CAAC,sBAAsB;AAErC,YAAO,OAAM;IACf;mBAE6C;;AAC3C,YAAO,iDACM,AAAG,GAAA,QAAC,4CACiB,KAAnB,AAAG,GAAA,QAAC,gBAAD,aAAmB,wCACH,MAAnB,AAAG,GAAA,QAAC,gBAAD,cAAmB,gDACW,OAA1B,AAAG,GAAA,QAAC,uBAAD,eAA0B;IAErD;;;;;AAEmB,YAAA,AAAK,qBAAO;IAAQ;oBAEP;AAC5B,YAAQ,oDAAQ,AAAK,oBAAO,MAAM;IAAE;;;;;;QA/BjC;QACS;QACA;QACA;IAPT,qBAAc;IACd,qBAAc;IACd,4BAAqB;IAErB;IACS;IACA;IACA;;EACd","file":"../../../../../../../../../packages/my_ticket_care/models/company.dart.lib.js"}');
  // Exports:
  return {
    models__company: company
  };
}));

//# sourceMappingURL=company.dart.lib.js.map
