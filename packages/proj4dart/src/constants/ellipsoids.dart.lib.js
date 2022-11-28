define(['dart_sdk', 'packages/proj4dart/src/classes/ellipsoid.dart'], (function load__packages__proj4dart__src__constants__ellipsoids_dart(dart_sdk, packages__proj4dart__src__classes__ellipsoid$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ellipsoid = packages__proj4dart__src__classes__ellipsoid$46dart.src__classes__ellipsoid;
  var ellipsoids = Object.create(dart.library);
  var $toLowerCase = dartx.toLowerCase;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    EllipsoidTobool: () => (T.EllipsoidTobool = dart.constFn(dart.fnType(core.bool, [ellipsoid.Ellipsoid])))(),
    JSArrayOfEllipsoid: () => (T.JSArrayOfEllipsoid = dart.constFn(_interceptors.JSArray$(ellipsoid.Ellipsoid)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  ellipsoids.match = function match(ellipseName) {
    let ell = ellipsoids._ellipsoids[$where](dart.fn(element => element.shortName[$toLowerCase]() === ellipseName[$toLowerCase](), T.EllipsoidTobool()))[$toList]();
    return ell[$length] === 1 ? ell[$_get](0) : null;
  };
  dart.defineLazy(ellipsoids, {
    /*ellipsoids.MERIT*/get MERIT() {
      return new ellipsoid.Ellipsoid.new({a: 6378137.0, rf: 298.257, ellipseName: "MERIT 1983", shortName: "MERIT"});
    },
    /*ellipsoids.SGS85*/get SGS85() {
      return new ellipsoid.Ellipsoid.new({a: 6378136.0, rf: 298.257, ellipseName: "Soviet Geodetic System 85", shortName: "SGS85"});
    },
    /*ellipsoids.GRS80*/get GRS80() {
      return new ellipsoid.Ellipsoid.new({a: 6378137.0, rf: 298.257222101, ellipseName: "GRS 1980(IUGG, 1980)", shortName: "GRS80"});
    },
    /*ellipsoids.IAU76*/get IAU76() {
      return new ellipsoid.Ellipsoid.new({a: 6378140.0, rf: 298.257, ellipseName: "IAU 1976", shortName: "IAU76"});
    },
    /*ellipsoids.airy*/get airy() {
      return new ellipsoid.Ellipsoid.withB({a: 6377563.396, b: 6356256.91, ellipseName: "Airy 1830", shortName: "airy"});
    },
    /*ellipsoids.APL4*/get APL4() {
      return new ellipsoid.Ellipsoid.new({a: 6378137.0, rf: 298.25, ellipseName: "Appl. Physics. 1965", shortName: "APL4"});
    },
    /*ellipsoids.NWL9D*/get NWL9D() {
      return new ellipsoid.Ellipsoid.new({a: 6378145.0, rf: 298.25, ellipseName: "Naval Weapons Lab., 1965", shortName: "NWL9D"});
    },
    /*ellipsoids.mod_airy*/get mod_airy() {
      return new ellipsoid.Ellipsoid.withB({a: 6377340.189, b: 6356034.446, ellipseName: "Modified Airy", shortName: "mod_airy"});
    },
    /*ellipsoids.andrae*/get andrae() {
      return new ellipsoid.Ellipsoid.new({a: 6377104.43, rf: 300.0, ellipseName: "Andrae 1876 (Den., Iclnd.)", shortName: "andrae"});
    },
    /*ellipsoids.aust_SA*/get aust_SA() {
      return new ellipsoid.Ellipsoid.new({a: 6378160.0, rf: 298.25, ellipseName: "Australian Natl & S. Amer. 1969", shortName: "aust_SA"});
    },
    /*ellipsoids.GRS67*/get GRS67() {
      return new ellipsoid.Ellipsoid.new({a: 6378160.0, rf: 298.247167427, ellipseName: "GRS 67(IUGG 1967)", shortName: "GRS67"});
    },
    /*ellipsoids.bessel*/get bessel() {
      return new ellipsoid.Ellipsoid.new({a: 6377397.155, rf: 299.1528128, ellipseName: "Bessel 1841", shortName: "bessel"});
    },
    /*ellipsoids.bess_nam*/get bess_nam() {
      return new ellipsoid.Ellipsoid.new({a: 6377483.865, rf: 299.1528128, ellipseName: "Bessel 1841 (Namibia)", shortName: "bess_nam"});
    },
    /*ellipsoids.clrk66*/get clrk66() {
      return new ellipsoid.Ellipsoid.withB({a: 6378206.4, b: 6356583.8, ellipseName: "Clarke 1866", shortName: "clrk66"});
    },
    /*ellipsoids.clrk80*/get clrk80() {
      return new ellipsoid.Ellipsoid.new({a: 6378249.145, rf: 293.4663, ellipseName: "Clarke 1880 mod.", shortName: "clrk80"});
    },
    /*ellipsoids.clrk58*/get clrk58() {
      return new ellipsoid.Ellipsoid.new({a: 6378293.645208759, rf: 294.2606763692654, ellipseName: "Clarke 1858", shortName: "clrk58"});
    },
    /*ellipsoids.CPM*/get CPM() {
      return new ellipsoid.Ellipsoid.new({a: 6375738.7, rf: 334.29, ellipseName: "Comm. des Poids et Mesures 1799", shortName: "CPM"});
    },
    /*ellipsoids.delmbr*/get delmbr() {
      return new ellipsoid.Ellipsoid.new({a: 6376428.0, rf: 311.5, ellipseName: "Delambre 1810 (Belgium)", shortName: "delmbr"});
    },
    /*ellipsoids.engelis*/get engelis() {
      return new ellipsoid.Ellipsoid.new({a: 6378136.05, rf: 298.2566, ellipseName: "Engelis 1985", shortName: "engelis"});
    },
    /*ellipsoids.evrst30*/get evrst30() {
      return new ellipsoid.Ellipsoid.new({a: 6377276.345, rf: 300.8017, ellipseName: "Everest 1830", shortName: "evrst30"});
    },
    /*ellipsoids.evrst48*/get evrst48() {
      return new ellipsoid.Ellipsoid.new({a: 6377304.063, rf: 300.8017, ellipseName: "Everest 1948", shortName: "evrst48"});
    },
    /*ellipsoids.evrst56*/get evrst56() {
      return new ellipsoid.Ellipsoid.new({a: 6377301.243, rf: 300.8017, ellipseName: "Everest 1956", shortName: "evrst56"});
    },
    /*ellipsoids.evrst69*/get evrst69() {
      return new ellipsoid.Ellipsoid.new({a: 6377295.664, rf: 300.8017, ellipseName: "Everest 1969", shortName: "evrst69"});
    },
    /*ellipsoids.evrstSS*/get evrstSS() {
      return new ellipsoid.Ellipsoid.new({a: 6377298.556, rf: 300.8017, ellipseName: "Everest (Sabah & Sarawak)", shortName: "evrstSS"});
    },
    /*ellipsoids.fschr60*/get fschr60() {
      return new ellipsoid.Ellipsoid.new({a: 6378166.0, rf: 298.3, ellipseName: "Fischer (Mercury Datum) 1960", shortName: "fschr60"});
    },
    /*ellipsoids.fschr60m*/get fschr60m() {
      return new ellipsoid.Ellipsoid.new({a: 6378155.0, rf: 298.3, ellipseName: "Fischer 1960", shortName: "fschr60m"});
    },
    /*ellipsoids.fschr68*/get fschr68() {
      return new ellipsoid.Ellipsoid.new({a: 6378150.0, rf: 298.3, ellipseName: "Fischer 1968", shortName: "fschr68"});
    },
    /*ellipsoids.helmert*/get helmert() {
      return new ellipsoid.Ellipsoid.new({a: 6378200.0, rf: 298.3, ellipseName: "Helmert 1906", shortName: "helmert"});
    },
    /*ellipsoids.hough*/get hough() {
      return new ellipsoid.Ellipsoid.new({a: 6378270.0, rf: 297.0, ellipseName: "Hough", shortName: "hough"});
    },
    /*ellipsoids.intl*/get intl() {
      return new ellipsoid.Ellipsoid.new({a: 6378388.0, rf: 297.0, ellipseName: "International 1909 (Hayford)", shortName: "intl"});
    },
    /*ellipsoids.kaula*/get kaula() {
      return new ellipsoid.Ellipsoid.new({a: 6378163.0, rf: 298.24, ellipseName: "Kaula 1961", shortName: "kaula"});
    },
    /*ellipsoids.lerch*/get lerch() {
      return new ellipsoid.Ellipsoid.new({a: 6378139.0, rf: 298.257, ellipseName: "Lerch 1979", shortName: "lerch"});
    },
    /*ellipsoids.mprts*/get mprts() {
      return new ellipsoid.Ellipsoid.new({a: 6397300.0, rf: 191.0, ellipseName: "Maupertius 1738", shortName: "mprts"});
    },
    /*ellipsoids.new_intl*/get new_intl() {
      return new ellipsoid.Ellipsoid.withB({a: 6378157.5, b: 6356772.2, ellipseName: "New International 1967", shortName: "new_intl"});
    },
    /*ellipsoids.plessis*/get plessis() {
      return new ellipsoid.Ellipsoid.new({a: 6376523.0, rf: 6355863.0, ellipseName: "Plessis 1817 (France)", shortName: "plessis"});
    },
    /*ellipsoids.krass*/get krass() {
      return new ellipsoid.Ellipsoid.new({a: 6378245.0, rf: 298.3, ellipseName: "Krassovsky, 1942", shortName: "krass"});
    },
    /*ellipsoids.SEasia*/get SEasia() {
      return new ellipsoid.Ellipsoid.withB({a: 6378155.0, b: 6356773.3205, ellipseName: "Southeast Asia", shortName: "SEasia"});
    },
    /*ellipsoids.walbeck*/get walbeck() {
      return new ellipsoid.Ellipsoid.withB({a: 6376896.0, b: 6355834.8467, ellipseName: "Walbeck", shortName: "walbeck"});
    },
    /*ellipsoids.WGS60*/get WGS60() {
      return new ellipsoid.Ellipsoid.new({a: 6378165.0, rf: 298.3, ellipseName: "WGS 60", shortName: "WGS60"});
    },
    /*ellipsoids.WGS66*/get WGS66() {
      return new ellipsoid.Ellipsoid.new({a: 6378145.0, rf: 298.25, ellipseName: "WGS 66", shortName: "WGS66"});
    },
    /*ellipsoids.WGS7*/get WGS7() {
      return new ellipsoid.Ellipsoid.new({a: 6378135.0, rf: 298.26, ellipseName: "WGS 72", shortName: "WGS7"});
    },
    /*ellipsoids.WGS84*/get WGS84() {
      return new ellipsoid.Ellipsoid.new({a: 6378137.0, rf: 298.257223563, ellipseName: "WGS 84", shortName: "EGS84"});
    },
    /*ellipsoids.sphere*/get sphere() {
      return new ellipsoid.Ellipsoid.withB({a: 6370997.0, b: 6370997.0, ellipseName: "Normal Sphere (r=6370997)", shortName: "sphere"});
    },
    /*ellipsoids._ellipsoids*/get _ellipsoids() {
      return T.JSArrayOfEllipsoid().of([ellipsoids.MERIT, ellipsoids.SGS85, ellipsoids.GRS80, ellipsoids.IAU76, ellipsoids.airy, ellipsoids.APL4, ellipsoids.NWL9D, ellipsoids.mod_airy, ellipsoids.andrae, ellipsoids.aust_SA, ellipsoids.GRS67, ellipsoids.bessel, ellipsoids.bess_nam, ellipsoids.clrk66, ellipsoids.clrk80, ellipsoids.clrk58, ellipsoids.CPM, ellipsoids.delmbr, ellipsoids.engelis, ellipsoids.evrst30, ellipsoids.evrst48, ellipsoids.evrst56, ellipsoids.evrst69, ellipsoids.evrstSS, ellipsoids.fschr60, ellipsoids.fschr60m, ellipsoids.fschr68, ellipsoids.helmert, ellipsoids.hough, ellipsoids.intl, ellipsoids.kaula, ellipsoids.lerch, ellipsoids.mprts, ellipsoids.new_intl, ellipsoids.plessis, ellipsoids.krass, ellipsoids.SEasia, ellipsoids.walbeck, ellipsoids.WGS60, ellipsoids.WGS66, ellipsoids.WGS7, ellipsoids.WGS84, ellipsoids.sphere]);
    }
  }, false);
  dart.trackLibraries("packages/proj4dart/src/constants/ellipsoids.dart", {
    "package:proj4dart/src/constants/ellipsoids.dart": ellipsoids
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ellipsoids.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;oCAiRwB;AAClB,cAAM,AACL,AAEA,+BAFM,QAAC,WACJ,AAAQ,AAAU,AAAc,OAAzB,+BAA4B,AAAY,WAAD;AAEtD,UAAO,AAAI,AAAO,IAAR,cAAW,IAAI,AAAG,GAAA,QAAC,KAAK;EACpC;;MArRM,gBAAK;YAAG,iCACP,eAAe,sBAAsB,yBAAyB;;MAE/D,gBAAK;YAAG,iCACP,eACC,sBACS,wCACF;;MAET,gBAAK;YAAG,iCACP,eACC,4BACS,mCACF;;MAET,gBAAK;YAAG,iCACP,eAAe,sBAAsB,uBAAuB;;MAE7D,eAAI;YAAa,mCAChB,gBACA,yBACU,wBACF;;MAET,eAAI;YAAG,iCACN,eACC,qBACS,kCACF;;MAET,gBAAK;YAAG,iCACP,eACC,qBACS,uCACF;;MAET,mBAAQ;YAAa,mCACpB,gBACA,0BACU,4BACF;;MAET,iBAAM;YAAG,iCACR,gBACC,oBACS,yCACF;;MAET,kBAAO;YAAG,iCACT,eACC,qBACS,8CACF;;MAET,gBAAK;YAAG,iCACP,eACC,4BACS,gCACF;;MAET,iBAAM;YAAG,iCACR,iBACC,0BACS,0BACF;;MAET,mBAAQ;YAAG,iCACV,iBACC,0BACS,oCACF;;MAET,iBAAM;YAAa,mCAClB,cACA,wBACU,0BACF;;MAET,iBAAM;YAAG,iCACR,iBACC,uBACS,+BACF;;MAET,iBAAM;YAAG,iCACR,uBACC,gCACS,0BACF;;MAET,cAAG;YAAG,iCACL,eACC,qBACS,8CACF;;MAET,iBAAM;YAAG,iCACR,eACC,oBACS,sCACF;;MAET,kBAAO;YAAG,iCACT,gBACC,uBACS,2BACF;;MAET,kBAAO;YAAG,iCACT,iBACC,uBACS,2BACF;;MAET,kBAAO;YAAG,iCACT,iBACC,uBACS,2BACF;;MAET,kBAAO;YAAG,iCACT,iBACC,uBACS,2BACF;;MAET,kBAAO;YAAG,iCACT,iBACC,uBACS,2BACF;;MAET,kBAAO;YAAG,iCACT,iBACC,uBACS,wCACF;;MAET,kBAAO;YAAG,iCACT,eACC,oBACS,2CACF;;MAET,mBAAQ;YAAG,iCACV,eACC,oBACS,2BACF;;MAET,kBAAO;YAAG,iCACT,eAAe,oBAAoB,2BAA2B;;MAE/D,kBAAO;YAAG,iCACT,eAAe,oBAAoB,2BAA2B;;MAE/D,gBAAK;YAAG,iCACP,eAAe,oBAAoB,oBAAoB;;MAExD,eAAI;YAAG,iCACN,eACC,oBACS,2CACF;;MAET,gBAAK;YAAG,iCACP,eAAe,qBAAqB,yBAAyB;;MAE9D,gBAAK;YAAG,iCACP,eAAe,sBAAsB,yBAAyB;;MAE/D,gBAAK;YAAG,iCACP,eACC,oBACS,8BACF;;MAET,mBAAQ;YAAa,mCACpB,cACA,wBACU,qCACF;;MAET,kBAAO;YAAG,iCACT,eACC,wBACS,oCACF;;MAET,gBAAK;YAAG,iCACP,eACC,oBACS,+BACF;;MAET,iBAAM;YAAa,mCAClB,cACA,2BACU,6BACF;;MAET,kBAAO;YAAa,mCACnB,cACA,2BACU,sBACF;;MAET,gBAAK;YAAG,iCACP,eAAe,oBAAoB,qBAAqB;;MAEzD,gBAAK;YAAG,iCACP,eAAe,qBAAqB,qBAAqB;;MAE1D,eAAI;YAAG,iCACN,eAAe,qBAAqB,qBAAqB;;MAE1D,gBAAK;YAAG,iCACP,eAAe,4BAA4B,qBAAqB;;MAEjE,iBAAM;YAAa,mCAClB,cACA,wBACU,wCACF;;MAEO,sBAAW;YAAG,4BAClC,kBACA,kBACA,kBACA,kBACA,iBACA,iBACA,kBACA,qBACA,mBACA,oBACA,kBACA,mBACA,qBACA,mBACA,mBACA,mBACA,gBACA,mBACA,oBACA,oBACA,oBACA,oBACA,oBACA,oBACA,oBACA,qBACA,oBACA,oBACA,kBACA,iBACA,kBACA,kBACA,kBACA,qBACA,oBACA,kBACA,mBACA,oBACA,kBACA,kBACA,iBACA,kBACA","file":"../../../../../../../../../../../../packages/proj4dart/src/constants/ellipsoids.dart.lib.js"}');
  // Exports:
  return {
    src__constants__ellipsoids: ellipsoids
  };
}));

//# sourceMappingURL=ellipsoids.dart.lib.js.map
