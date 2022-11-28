define(['dart_sdk', 'packages/my_ticket_care/models/model_state.dart'], (function load__packages__my_ticket_care__src__shared__models__service_dart(dart_sdk, packages__my_ticket_care__models__model_state$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model_state = packages__my_ticket_care__models__model_state$46dart.models__model_state;
  var service = Object.create(dart.library);
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    dynamicToService: () => (T.dynamicToService = dart.constFn(dart.fnType(service.Service, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/shared/models/service.dart"];
  var __Service_serviceId = dart.privateName(service, "_#Service#serviceId");
  var __Service_serviceName = dart.privateName(service, "_#Service#serviceName");
  var __Service_serviceState = dart.privateName(service, "_#Service#serviceState");
  var __Service_companyTypeId = dart.privateName(service, "_#Service#companyTypeId");
  service.Service = class Service extends core.Object {
    get serviceId() {
      let t0;
      t0 = this[__Service_serviceId];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("serviceId")) : t0;
    }
    set serviceId(serviceId$35param) {
      this[__Service_serviceId] = serviceId$35param;
    }
    get serviceName() {
      let t0;
      t0 = this[__Service_serviceName];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("serviceName")) : t0;
    }
    set serviceName(serviceName$35param) {
      this[__Service_serviceName] = serviceName$35param;
    }
    get serviceState() {
      let t0;
      t0 = this[__Service_serviceState];
      return t0 == null ? this[__Service_serviceState] = model_state.ModelState.active : t0;
    }
    set serviceState(serviceState$35param) {
      this[__Service_serviceState] = serviceState$35param;
    }
    get companyTypeId() {
      let t0;
      t0 = this[__Service_companyTypeId];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("companyTypeId")) : t0;
    }
    set companyTypeId(companyTypeId$35param) {
      this[__Service_companyTypeId] = companyTypeId$35param;
    }
    static ['_#new#tearOff'](opts) {
      let serviceId = opts && 'serviceId' in opts ? opts.serviceId : null;
      let serviceName = opts && 'serviceName' in opts ? opts.serviceName : null;
      let serviceState = opts && 'serviceState' in opts ? opts.serviceState : null;
      let companyTypeId = opts && 'companyTypeId' in opts ? opts.companyTypeId : null;
      return new service.Service.new({serviceId: serviceId, serviceName: serviceName, serviceState: serviceState, companyTypeId: companyTypeId});
    }
    static fromMap(map) {
      let t0, t0$, t0$0, t0$1;
      return new service.Service.new({serviceId: core.int.as((t0 = map[$_get]("serviceId"), t0 == null ? -1 : t0)), serviceName: core.String.as((t0$ = map[$_get]("serviceName"), t0$ == null ? "Null" : t0$)), serviceState: model_state.ModelState.values[$_get](core.int.as((t0$0 = map[$_get]("serviceState"), t0$0 == null ? 0 : t0$0))), companyTypeId: core.int.as((t0$1 = map[$_get]("companyTypeId"), t0$1 == null ? -1 : t0$1))});
    }
    static ['_#fromMap#tearOff'](map) {
      return service.Service.fromMap(map);
    }
    static empty() {
      return new service.Service.new({serviceId: -1, serviceName: "Null", serviceState: model_state.ModelState.active, companyTypeId: -1});
    }
    static ['_#empty#tearOff']() {
      return service.Service.empty();
    }
    static listFromMap(data) {
      return data[$map](service.Service, dart.fn(e => service.Service.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToService()))[$toList]();
    }
  };
  (service.Service.new = function(opts) {
    let serviceId = opts && 'serviceId' in opts ? opts.serviceId : null;
    let serviceName = opts && 'serviceName' in opts ? opts.serviceName : null;
    let serviceState = opts && 'serviceState' in opts ? opts.serviceState : null;
    let companyTypeId = opts && 'companyTypeId' in opts ? opts.companyTypeId : null;
    this[__Service_serviceId] = null;
    this[__Service_serviceName] = null;
    this[__Service_serviceState] = null;
    this[__Service_companyTypeId] = null;
    this[__Service_serviceId] = serviceId;
    this[__Service_serviceName] = serviceName;
    this[__Service_serviceState] = serviceState;
    this[__Service_companyTypeId] = companyTypeId;
    ;
  }).prototype = service.Service.prototype;
  dart.addTypeTests(service.Service);
  dart.addTypeCaches(service.Service);
  dart.setStaticMethodSignature(service.Service, () => ['fromMap', 'empty', 'listFromMap']);
  dart.setGetterSignature(service.Service, () => ({
    __proto__: dart.getGetters(service.Service.__proto__),
    serviceId: core.int,
    serviceName: core.String,
    serviceState: model_state.ModelState,
    companyTypeId: core.int
  }));
  dart.setSetterSignature(service.Service, () => ({
    __proto__: dart.getSetters(service.Service.__proto__),
    serviceId: core.int,
    serviceName: core.String,
    serviceState: model_state.ModelState,
    companyTypeId: core.int
  }));
  dart.setLibraryUri(service.Service, I[0]);
  dart.setFieldSignature(service.Service, () => ({
    __proto__: dart.getFields(service.Service.__proto__),
    [__Service_serviceId]: dart.fieldType(dart.nullable(core.int)),
    [__Service_serviceName]: dart.fieldType(dart.nullable(core.String)),
    [__Service_serviceState]: dart.fieldType(dart.nullable(model_state.ModelState)),
    [__Service_companyTypeId]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/models/service.dart", {
    "package:my_ticket_care/src/shared/models/service.dart": service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAGW;;IAAS;kBAAT;;IAAS;;;AACN;;IAAW;oBAAX;;IAAW;;;AACP;yDAA0B;IAAM;qBAAhC;;IAAgC;;;AACvC;;IAAa;sBAAb;;IAAa;;;;;;;;mBASuB;;AAC3C,YAAO,kDACuB,KAAjB,AAAG,GAAA,QAAC,cAAD,aAAiB,CAAC,uCACA,MAAnB,AAAG,GAAA,QAAC,gBAAD,cAAmB,8BACV,AAAM,kDAAqB,OAApB,AAAG,GAAA,QAAC,iBAAD,eAAoB,yCACnB,OAArB,AAAG,GAAA,QAAC,kBAAD,eAAqB,CAAC;IAE5C;;;;;AAGE,YAAO,qCACQ,CAAC,gBACC,sBACY,8CACV,CAAC;IACtB;;;;uBAE+C;AAC7C,YAAO,AAAK,AAA+B,KAAhC,wBAAK,QAAC,KAAc,mDAAQ,CAAC;IAC1C;;;QAzBgB;QACA;QACA;QACA;gCATP;kCACG;mCACI;oCACP;IAGO;IACA;IACA;IACA;;EACd","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/models/service.dart.lib.js"}');
  // Exports:
  return {
    src__shared__models__service: service
  };
}));

//# sourceMappingURL=service.dart.lib.js.map
