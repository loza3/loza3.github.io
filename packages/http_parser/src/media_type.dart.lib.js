define(['dart_sdk', 'packages/http_parser/src/case_insensitive_map.dart', 'packages/http_parser/src/utils.dart', 'packages/string_scanner/src/utils.dart', 'packages/http_parser/src/scan.dart'], (function load__packages__http_parser__src__media_type_dart(dart_sdk, packages__http_parser__src__case_insensitive_map$46dart, packages__http_parser__src__utils$46dart, packages__string_scanner__src__utils$46dart, packages__http_parser__src__scan$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const case_insensitive_map = packages__http_parser__src__case_insensitive_map$46dart.src__case_insensitive_map;
  const utils = packages__http_parser__src__utils$46dart.src__utils;
  const string_scanner = packages__string_scanner__src__utils$46dart.src__string_scanner;
  const scan = packages__http_parser__src__scan$46dart.src__scan;
  var media_type = Object.create(dart.library);
  var $toLowerCase = dartx.toLowerCase;
  var $_set = dartx._set;
  var $split = dartx.split;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    UnmodifiableMapViewOfString$String: () => (T.UnmodifiableMapViewOfString$String = dart.constFn(collection.UnmodifiableMapView$(core.String, core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    CaseInsensitiveMapOfString: () => (T.CaseInsensitiveMapOfString = dart.constFn(case_insensitive_map.CaseInsensitiveMap$(core.String)))(),
    VoidToMediaType: () => (T.VoidToMediaType = dart.constFn(dart.fnType(media_type.MediaType, [])))(),
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    MatchToString: () => (T.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))(),
    StringAndStringTovoid: () => (T.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:http_parser/src/media_type.dart"];
  var type$ = dart.privateName(media_type, "MediaType.type");
  var subtype$ = dart.privateName(media_type, "MediaType.subtype");
  var parameters$ = dart.privateName(media_type, "MediaType.parameters");
  media_type.MediaType = class MediaType extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get subtype() {
      return this[subtype$];
    }
    set subtype(value) {
      super.subtype = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get mimeType() {
      return this.type + "/" + this.subtype;
    }
    static parse(mediaType) {
      return utils.wrapFormatException(media_type.MediaType, "media type", mediaType, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(mediaType);
        scanner.scan(scan.whitespace);
        scanner.expect(scan.token);
        let type = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
        scanner.expect("/");
        scanner.expect(scan.token);
        let subtype = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
        scanner.scan(scan.whitespace);
        let parameters = new (T.IdentityMapOfString$String()).new();
        while (scanner.scan(";")) {
          scanner.scan(scan.whitespace);
          scanner.expect(scan.token);
          let attribute = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
          scanner.expect("=");
          let value = null;
          if (scanner.scan(scan.token)) {
            value = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
          } else {
            value = scan.expectQuotedString(scanner);
          }
          scanner.scan(scan.whitespace);
          parameters[$_set](attribute, value);
        }
        scanner.expectDone();
        return new media_type.MediaType.new(type, subtype, parameters);
      }, T.VoidToMediaType()));
    }
    static ['_#parse#tearOff'](mediaType) {
      return media_type.MediaType.parse(mediaType);
    }
    static ['_#new#tearOff'](type, subtype, parameters = null) {
      return new media_type.MediaType.new(type, subtype, parameters);
    }
    change(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subtype = opts && 'subtype' in opts ? opts.subtype : null;
      let mimeType = opts && 'mimeType' in opts ? opts.mimeType : null;
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let clearParameters = opts && 'clearParameters' in opts ? opts.clearParameters : false;
      if (mimeType != null) {
        if (type != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [type] and [mimeType]."));
        } else if (subtype != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [subtype] and " + "[mimeType]."));
        }
        let segments = mimeType[$split]("/");
        if (segments[$length] !== 2) {
          dart.throw(new core.FormatException.new("Invalid mime type \"" + dart.str(mimeType) + "\"."));
        }
        type = segments[$_get](0);
        subtype = segments[$_get](1);
      }
      type == null ? type = this.type : null;
      subtype == null ? subtype = this.subtype : null;
      parameters == null ? parameters = new (T.IdentityMapOfString$String()).new() : null;
      if (!clearParameters) {
        let newParameters = parameters;
        parameters = T.LinkedHashMapOfString$String().from(this.parameters);
        parameters[$addAll](newParameters);
      }
      return new media_type.MediaType.new(type, subtype, parameters);
    }
    toString() {
      let t0;
      let buffer = (t0 = new core.StringBuffer.new(), (() => {
        t0.write(this.type);
        t0.write("/");
        t0.write(this.subtype);
        return t0;
      })());
      this.parameters[$forEach](dart.fn((attribute, value) => {
        let t0;
        buffer.write("; " + attribute + "=");
        if (scan.nonToken.hasMatch(value)) {
          t0 = buffer;
          (() => {
            t0.write("\"");
            t0.write(value[$replaceAllMapped](media_type._escapedChar, dart.fn(match => "\\" + dart.str(match._get(0)), T.MatchToString())));
            t0.write("\"");
            return t0;
          })();
        } else {
          buffer.write(value);
        }
      }, T.StringAndStringTovoid()));
      return buffer.toString();
    }
  };
  (media_type.MediaType.new = function(type, subtype, parameters = null) {
    this[type$] = type[$toLowerCase]();
    this[subtype$] = subtype[$toLowerCase]();
    this[parameters$] = new (T.UnmodifiableMapViewOfString$String()).new(parameters == null ? new (T.IdentityMapOfString$String()).new() : new (T.CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = media_type.MediaType.prototype;
  dart.addTypeTests(media_type.MediaType);
  dart.addTypeCaches(media_type.MediaType);
  dart.setMethodSignature(media_type.MediaType, () => ({
    __proto__: dart.getMethods(media_type.MediaType.__proto__),
    change: dart.fnType(media_type.MediaType, [], {clearParameters: core.bool, mimeType: dart.nullable(core.String), parameters: dart.nullable(core.Map$(core.String, core.String)), subtype: dart.nullable(core.String), type: dart.nullable(core.String)}, {})
  }));
  dart.setStaticMethodSignature(media_type.MediaType, () => ['parse']);
  dart.setGetterSignature(media_type.MediaType, () => ({
    __proto__: dart.getGetters(media_type.MediaType.__proto__),
    mimeType: core.String
  }));
  dart.setLibraryUri(media_type.MediaType, I[0]);
  dart.setFieldSignature(media_type.MediaType, () => ({
    __proto__: dart.getFields(media_type.MediaType.__proto__),
    type: dart.finalFieldType(core.String),
    subtype: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(media_type.MediaType, ['toString']);
  dart.defineLazy(media_type, {
    /*media_type._escapedChar*/get _escapedChar() {
      return core.RegExp.new("[\"\\x00-\\x1F\\x7F]");
    }
  }, false);
  dart.trackLibraries("packages/http_parser/src/media_type.dart", {
    "package:http_parser/src/media_type.dart": media_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["media_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBe;;;;;;IAKA;;;;;;IAKa;;;;;;;AAGH,YAAE,AAAc,aAAV,MAAE;IAAQ;iBAKR;AAG3B,6DAAoB,cAAc,SAAS,EAAE;AACrC,sBAAU,qCAAc,SAAS;AACf,QAAxB,AAAQ,OAAD,MAAM;AACQ,QAArB,AAAQ,OAAD,QAAQ;AACT,mBAA4B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AACb,QAAnB,AAAQ,OAAD,QAAQ;AACM,QAArB,AAAQ,OAAD,QAAQ;AACT,sBAA+B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AACX,QAAxB,AAAQ,OAAD,MAAM;AAEP,yBAA6B;AACnC,eAAO,AAAQ,OAAD,MAAM;AACM,UAAxB,AAAQ,OAAD,MAAM;AACQ,UAArB,AAAQ,OAAD,QAAQ;AACT,0BAAiC,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AAClB,UAAnB,AAAQ,OAAD,QAAQ;AAER;AACP,cAAI,AAAQ,OAAD,MAAM;AACe,YAA9B,QAA6B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;;AAEQ,YAAnC,QAAQ,wBAAmB,OAAO;;AAGZ,UAAxB,AAAQ,OAAD,MAAM;AACgB,UAA7B,AAAU,UAAA,QAAC,SAAS,EAAI,KAAK;;AAGX,QAApB,AAAQ,OAAD;AACP,cAAO,8BAAU,IAAI,EAAE,OAAO,EAAE,UAAU;;IAC1C;;;;;;;;UAkBO;UACD;UACA;UACa;UAChB;AACP,UAAI,QAAQ;AACV,YAAI,IAAI;AAC6D,UAAnE,WAAM,2BAAc;cACf,KAAI,OAAO;AAEE,UADlB,WAAM,2BAAa,AAAC,yCAChB;;AAGA,uBAAW,AAAS,QAAD,SAAO;AAChC,YAAI,AAAS,QAAD,cAAW;AACkC,UAAvD,WAAM,6BAAgB,AAAgC,kCAAX,QAAQ;;AAGnC,QAAlB,OAAO,AAAQ,QAAA,QAAC;AACK,QAArB,UAAU,AAAQ,QAAA,QAAC;;AAGH,MAAlB,AAAK,IAAD,WAAJ,OAAc,YAAT;AACmB,MAAxB,AAAQ,OAAD,WAAP,UAAiB,eAAT;AACS,MAAjB,AAAW,UAAD,WAAV,aAAe,6CAAJ;AAEX,WAAK,eAAe;AACZ,4BAAgB,UAAU;AACM,QAAtC,aAAiB,sCAAU;AACK,QAAhC,AAAW,UAAD,UAAQ,aAAa;;AAGjC,YAAO,8BAAU,IAAI,EAAE,OAAO,EAAE,UAAU;IAC5C;;;AAOQ,sDAAS;AACX,iBAAM;AACN,iBAAM;AACN,iBAAM;;;AAaR,MAXF,AAAW,0BAAQ,SAAC,WAAW;;AACA,QAA7B,AAAO,MAAD,OAAO,AAAe,OAAX,SAAS;AAC1B,YAAI,AAAS,uBAAS,KAAK;AAKX,eAJd,MAAM;UAAN;AACI,qBAAM;AACN,qBACE,AAAM,KAAD,oBAAkB,yBAAc,QAAC,SAAU,AAAe,gBAAV,AAAK,KAAA,MAAC;AAC7D,qBAAM;;;;AAES,UAAnB,AAAO,MAAD,OAAO,KAAK;;;AAItB,YAAO,AAAO,OAAD;IACf;;uCA3EiB,MAAa,SAA+B;IAClD,cAAE,AAAK,IAAD;IACH,iBAAE,AAAQ,OAAD;IACN,oBAAE,iDACT,AAAW,UAAD,WAAW,6CAAwB,0CAAK,UAAU;;EAAE;;;;;;;;;;;;;;;;;;;;;MApEpE,uBAAY;YAAG,iBAAO","file":"../../../../../../../../../../../packages/http_parser/src/media_type.dart.lib.js"}');
  // Exports:
  return {
    src__media_type: media_type
  };
}));

//# sourceMappingURL=media_type.dart.lib.js.map
