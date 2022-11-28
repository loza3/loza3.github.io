define(['dart_sdk', 'packages/qr/src/qr_code.dart', 'packages/qr/src/input_too_long_exception.dart'], (function load__packages__qr_flutter__src__validator_dart(dart_sdk, packages__qr__src__qr_code$46dart, packages__qr__src__input_too_long_exception$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const qr_code = packages__qr__src__qr_code$46dart.src__qr_code;
  const input_too_long_exception = packages__qr__src__input_too_long_exception$46dart.src__input_too_long_exception;
  var validator = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidToQrCode: () => (T.VoidToQrCode = dart.constFn(dart.fnType(qr_code.QrCode, [])))(),
    QrCodeTodynamic: () => (T.QrCodeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [qr_code.QrCode])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: validator.QrValidationStatus.prototype,
        [_Enum__name]: "valid",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: validator.QrValidationStatus.prototype,
        [_Enum__name]: "contentTooLong",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: validator.QrValidationStatus.prototype,
        [_Enum__name]: "error",
        [_Enum_index]: 2
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], validator.QrValidationStatus);
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:qr_flutter/src/validator.dart"];
  validator.QrValidator = class QrValidator extends core.Object {
    static validate(opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let version = opts && 'version' in opts ? opts.version : -1;
      let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
      let qrCode = null;
      function qrCode$35get() {
        let t1;
        t1 = qrCode;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("qrCode")) : t1;
      }
      dart.fn(qrCode$35get, T.VoidToQrCode());
      function qrCode$35set(qrCode$35param) {
        if (qrCode == null)
          return qrCode = qrCode$35param;
        else
          dart.throw(new _internal.LateError.localAI("qrCode"));
      }
      dart.fn(qrCode$35set, T.QrCodeTodynamic());
      try {
        if (version !== -1) {
          qrCode$35set(new qr_code.QrCode.new(version, errorCorrectionLevel));
          qrCode$35get().addData(data);
        } else {
          qrCode$35set(qr_code.QrCode.fromData({data: data, errorCorrectLevel: errorCorrectionLevel}));
        }
        qrCode$35get().make();
        return new validator.QrValidationResult.new({status: validator.QrValidationStatus.valid, qrCode: qrCode$35get()});
      } catch (e) {
        let ex$ = dart.getThrown(e);
        if (input_too_long_exception.InputTooLongException.is(ex$)) {
          let itle = ex$;
          return new validator.QrValidationResult.new({status: validator.QrValidationStatus.contentTooLong, error: itle});
        } else if (core.Exception.is(ex$)) {
          let ex = ex$;
          return new validator.QrValidationResult.new({status: validator.QrValidationStatus.error, error: ex});
        } else
          throw e;
      }
    }
    static ['_#new#tearOff']() {
      return new validator.QrValidator.new();
    }
  };
  (validator.QrValidator.new = function() {
    ;
  }).prototype = validator.QrValidator.prototype;
  dart.addTypeTests(validator.QrValidator);
  dart.addTypeCaches(validator.QrValidator);
  dart.setStaticMethodSignature(validator.QrValidator, () => ['validate']);
  dart.setLibraryUri(validator.QrValidator, I[0]);
  var status$ = dart.privateName(validator, "QrValidationResult.status");
  var qrCode$ = dart.privateName(validator, "QrValidationResult.qrCode");
  var error$ = dart.privateName(validator, "QrValidationResult.error");
  validator.QrValidationResult = class QrValidationResult extends core.Object {
    get status() {
      return this[status$];
    }
    set status(value) {
      this[status$] = value;
    }
    get qrCode() {
      return this[qrCode$];
    }
    set qrCode(value) {
      this[qrCode$] = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      this[error$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let status = opts && 'status' in opts ? opts.status : null;
      let qrCode = opts && 'qrCode' in opts ? opts.qrCode : null;
      let error = opts && 'error' in opts ? opts.error : null;
      return new validator.QrValidationResult.new({status: status, qrCode: qrCode, error: error});
    }
    get isValid() {
      return this.status === validator.QrValidationStatus.valid;
    }
  };
  (validator.QrValidationResult.new = function(opts) {
    let status = opts && 'status' in opts ? opts.status : null;
    let qrCode = opts && 'qrCode' in opts ? opts.qrCode : null;
    let error = opts && 'error' in opts ? opts.error : null;
    this[status$] = status;
    this[qrCode$] = qrCode;
    this[error$] = error;
    ;
  }).prototype = validator.QrValidationResult.prototype;
  dart.addTypeTests(validator.QrValidationResult);
  dart.addTypeCaches(validator.QrValidationResult);
  dart.setGetterSignature(validator.QrValidationResult, () => ({
    __proto__: dart.getGetters(validator.QrValidationResult.__proto__),
    isValid: core.bool
  }));
  dart.setLibraryUri(validator.QrValidationResult, I[0]);
  dart.setFieldSignature(validator.QrValidationResult, () => ({
    __proto__: dart.getFields(validator.QrValidationResult.__proto__),
    status: dart.fieldType(validator.QrValidationStatus),
    qrCode: dart.fieldType(dart.nullable(qr_code.QrCode)),
    error: dart.fieldType(dart.nullable(core.Exception))
  }));
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  validator.QrValidationStatus = class QrValidationStatus extends core._Enum {
    toString() {
      return "QrValidationStatus." + this[_name];
    }
  };
  (validator.QrValidationStatus.new = function(index, name) {
    validator.QrValidationStatus.__proto__.new.call(this, index, name);
    ;
  }).prototype = validator.QrValidationStatus.prototype;
  dart.addTypeTests(validator.QrValidationStatus);
  dart.addTypeCaches(validator.QrValidationStatus);
  dart.setLibraryUri(validator.QrValidationStatus, I[0]);
  dart.setStaticFieldSignature(validator.QrValidationStatus, () => ['values', 'valid', 'contentTooLong', 'error']);
  dart.defineExtensionMethods(validator.QrValidationStatus, ['toString']);
  dart.defineLazy(validator.QrValidationStatus, {
    /*validator.QrValidationStatus.values*/get values() {
      return C[0] || CT.C0;
    },
    /*validator.QrValidationStatus.valid*/get valid() {
      return C[1] || CT.C1;
    },
    /*validator.QrValidationStatus.contentTooLong*/get contentTooLong() {
      return C[2] || CT.C2;
    },
    /*validator.QrValidationStatus.error*/get error() {
      return C[3] || CT.C3;
    }
  }, false);
  dart.trackLibraries("packages/qr_flutter/src/validator.dart", {
    "package:qr_flutter/src/validator.dart": validator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["validator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAgBoB;UACZ;UACA;AAEc;;;;;;;;;;;;;;AAClB;AACE,YAAI,OAAO;AACqC,UAA9C,aAAS,uBAAO,OAAO,EAAE,oBAAoB;AACzB,UAApB,AAAO,uBAAQ,IAAI;;AAKlB,UAHD,aAAgB,+BACR,IAAI,qBACS,oBAAoB;;AAG9B,QAAb,AAAO;AACP,cAAO,+CACwB,4CAAe;;;AAC9C;cAAgC;AAChC,gBAAO,+CACwB,oDAAuB,IAAI;cAC1D;cAAoB;AACpB,gBAAO,+CAA8C,2CAAc,EAAE;;;;IAEzE;;;;;;;EACF;;;;;;;;;IAWqB;;;;;;IAGX;;;;;;IAGG;;;;;;;;;;;;;AAGS,YAAA,AAAO,iBAAsB;IAAK;;;QAZpB;QAAa;QAAa;IAA1B;IAAa;IAAa;;EAAO;;;;;;;;;;;;;;;;;;;;IA2BrE;;;;;;;;;;;;MAXK,mCAAM;;;MAET,kCAAK;;;MAIL,2CAAc;;;MAId,kCAAK","file":"../../../../../../../../../../../packages/qr_flutter/src/validator.dart.lib.js"}');
  // Exports:
  return {
    src__validator: validator
  };
}));

//# sourceMappingURL=validator.dart.lib.js.map
