define(['dart_sdk', 'packages/mgrs_dart/src/classes/lonlat.dart', 'packages/mgrs_dart/src/classes/bbox.dart', 'packages/unicode/unicode.dart', 'packages/mgrs_dart/src/classes/utm.dart'], (function load__packages__mgrs_dart__src__mgrs_dart(dart_sdk, packages__mgrs_dart__src__classes__lonlat$46dart, packages__mgrs_dart__src__classes__bbox$46dart, packages__unicode__unicode$46dart, packages__mgrs_dart__src__classes__utm$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lonlat = packages__mgrs_dart__src__classes__lonlat$46dart.src__classes__lonlat;
  const bbox$ = packages__mgrs_dart__src__classes__bbox$46dart.src__classes__bbox;
  const unicode = packages__unicode__unicode$46dart.unicode;
  const utm$ = packages__mgrs_dart__src__classes__utm$46dart.src__classes__utm;
  var mgrs$ = Object.create(dart.library);
  var $toUpperCase = dartx.toUpperCase;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $truncate = dartx.truncate;
  var $substring = dartx.substring;
  var $floor = dartx.floor;
  var $modulo = dartx['%'];
  var $toDouble = dartx.toDouble;
  var $truncateToDouble = dartx.truncateToDouble;
  var $toLowerCase = dartx.toLowerCase;
  var $indexOf = dartx.indexOf;
  var $isEmpty = dartx.isEmpty;
  var $replaceAll = dartx.replaceAll;
  var $contains = dartx.contains;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:mgrs_dart/src/mgrs.dart"];
  mgrs$.Mgrs = class Mgrs extends core.Object {
    static inverse(mgrs) {
      let bbox = mgrs$.Mgrs.UTMtoLL(mgrs$.Mgrs.decode(mgrs[$toUpperCase]()));
      if (lonlat.LonLat.is(bbox)) {
        return T.JSArrayOfdouble().of([bbox.lon, bbox.lat, bbox.lon, bbox.lat]);
      } else if (bbox$.BBox.is(bbox)) {
        return T.JSArrayOfdouble().of([bbox.left, bbox.bottom, bbox.right, bbox.top]);
      } else {
        dart.throw(core.Exception.new("Neither bbox, nor lonlat"));
      }
    }
    static toPoint(mgrs) {
      if (mgrs === "") {
        dart.throw(core.Exception.new("toPoint received a blank string"));
      }
      let utm = mgrs$.Mgrs.decode(mgrs[$toUpperCase]());
      utm.accuracy = null;
      let bbox = mgrs$.Mgrs.UTMtoLL(utm);
      if (lonlat.LonLat.is(bbox)) {
        return T.JSArrayOfdouble().of([bbox.lon, bbox.lat]);
      } else if (bbox$.BBox.is(bbox)) {
        return T.JSArrayOfdouble().of([(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2]);
      } else {
        dart.throw(core.Exception.new("Neither bbox, nor lonlat"));
      }
    }
    static forward(ll, accuracy) {
      accuracy == null ? accuracy = 5 : null;
      if (ll[$length] !== 2) {
        dart.throw(core.Exception.new("forward received an invalid input: array must contain 2 numbers exactly"));
      }
      let lon = ll[$_get](0);
      let lat = ll[$_get](1);
      if (lon < -180 || lon > 180) {
        dart.throw(core.Exception.new("forward received an invalid longitude of " + dart.str(lon)));
      }
      if (lat < -90 || lat > 90) {
        dart.throw(core.Exception.new("forward received an invalid latitude of " + dart.str(lat)));
      }
      if (lat < -80 || lat > 84) {
        dart.throw(core.Exception.new("forward received a latitude of " + dart.str(lat) + ", but this library does not support conversions of points in polar regions below 80°S and above 84°N"));
      }
      let utm = mgrs$.Mgrs.LLtoUTM(lat, lon);
      return mgrs$.Mgrs.encode(utm, accuracy);
    }
    static encode(utm, accuracy) {
      let seasting = "00000" + dart.str(utm.easting[$truncate]());
      let snorthing = "00000" + dart.str(utm.northing[$truncate]());
      let seastingWithAccuracy = seasting[$substring](seasting.length - 5, seasting.length);
      seastingWithAccuracy = seastingWithAccuracy[$substring](seastingWithAccuracy.length - accuracy);
      let snorthingWithAccuracy = snorthing[$substring](snorthing.length - 5, snorthing.length);
      snorthingWithAccuracy = snorthingWithAccuracy[$substring](snorthingWithAccuracy.length - accuracy);
      let value = dart.str(utm.zoneNumber) + utm.zoneLetter + mgrs$.Mgrs.get100kID(utm.easting, utm.northing, utm.zoneNumber) + seastingWithAccuracy + snorthingWithAccuracy;
      return value;
    }
    static get100kID(easting, northing, zoneNumber) {
      let setParm = mgrs$.Mgrs.get100kSetForZone(zoneNumber);
      let setColumn = (easting / 100000)[$floor]();
      let setRow = (northing / 100000)[$floor]()[$modulo](20);
      return mgrs$.Mgrs.getLetter100kID(setColumn, setRow, setParm);
    }
    static get100kSetForZone(i) {
      let setParm = i[$modulo](mgrs$.Mgrs.NUM_100K_SETS);
      if (setParm === 0) {
        setParm = mgrs$.Mgrs.NUM_100K_SETS;
      }
      return setParm;
    }
    static getLetter100kID(column, row, parm) {
      let index = parm - 1;
      let colOrigin = unicode.toRune(mgrs$.Mgrs.SET_ORIGIN_COLUMN_LETTERS[$_get](index));
      let rowOrigin = unicode.toRune(mgrs$.Mgrs.SET_ORIGIN_ROW_LETTERS[$_get](index));
      let colInt = colOrigin + column - 1;
      let rowInt = rowOrigin + row;
      let rollover = false;
      if (colInt > mgrs$.Mgrs.Z) {
        colInt = colInt - mgrs$.Mgrs.Z + mgrs$.Mgrs.A - 1;
        rollover = true;
      }
      if (colInt === mgrs$.Mgrs.I || colOrigin < mgrs$.Mgrs.I && colInt > mgrs$.Mgrs.I || (colInt > mgrs$.Mgrs.I || colOrigin < mgrs$.Mgrs.I) && rollover) {
        colInt = colInt + 1;
      }
      if (colInt === mgrs$.Mgrs.O || colOrigin < mgrs$.Mgrs.O && colInt > mgrs$.Mgrs.O || (colInt > mgrs$.Mgrs.O || colOrigin < mgrs$.Mgrs.O) && rollover) {
        colInt = colInt + 1;
        if (colInt === mgrs$.Mgrs.I) {
          colInt = colInt + 1;
        }
      }
      if (colInt > mgrs$.Mgrs.Z) {
        colInt = colInt - mgrs$.Mgrs.Z + mgrs$.Mgrs.A - 1;
      }
      if (rowInt > mgrs$.Mgrs.V) {
        rowInt = rowInt - mgrs$.Mgrs.V + mgrs$.Mgrs.A - 1;
        rollover = true;
      } else {
        rollover = false;
      }
      if (rowInt === mgrs$.Mgrs.I || rowOrigin < mgrs$.Mgrs.I && rowInt > mgrs$.Mgrs.I || (rowInt > mgrs$.Mgrs.I || rowOrigin < mgrs$.Mgrs.I) && rollover) {
        rowInt = rowInt + 1;
      }
      if (rowInt === mgrs$.Mgrs.O || rowOrigin < mgrs$.Mgrs.O && rowInt > mgrs$.Mgrs.O || (rowInt > mgrs$.Mgrs.O || rowOrigin < mgrs$.Mgrs.O) && rollover) {
        rowInt = rowInt + 1;
        if (rowInt === mgrs$.Mgrs.I) {
          rowInt = rowInt + 1;
        }
      }
      if (rowInt > mgrs$.Mgrs.V) {
        rowInt = rowInt - mgrs$.Mgrs.V + mgrs$.Mgrs.A - 1;
      }
      let twoLetter = core.String.fromCharCode(colInt) + core.String.fromCharCode(rowInt);
      return twoLetter;
    }
    static degToRad(deg) {
      return deg * (3.141592653589793 / 180);
    }
    static radToDeg(rad) {
      return 180 * (rad / 3.141592653589793);
    }
    static LLtoUTM(lat, lon) {
      let Lat = lat;
      let Long = lon;
      let LatRad = mgrs$.Mgrs.degToRad(Lat);
      let LongRad = mgrs$.Mgrs.degToRad(Long);
      let ZoneNumber = ((Long + 180) / 6)[$floor]() + 1;
      if (Long === 180) {
        ZoneNumber = 60;
      }
      if (Lat >= 56 && Lat < 64 && Long >= 3 && Long < 12) {
        ZoneNumber = 32;
      }
      if (Lat >= 72 && Lat < 84) {
        if (Long >= 0 && Long < 9) {
          ZoneNumber = 31;
        } else if (Long >= 9 && Long < 21) {
          ZoneNumber = 33;
        } else if (Long >= 21 && Long < 33) {
          ZoneNumber = 35;
        } else if (Long >= 33 && Long < 42) {
          ZoneNumber = 37;
        }
      }
      let LongOrigin = ((ZoneNumber - 1) * 6 - 180 + 3)[$toDouble]();
      let LongOriginRad = mgrs$.Mgrs.degToRad(LongOrigin);
      let eccPrimeSquared = 0.00669438 / (1 - 0.00669438);
      let N = 6378137 / math.sqrt(1 - 0.00669438 * math.sin(LatRad) * math.sin(LatRad));
      let T = math.tan(LatRad) * math.tan(LatRad);
      let C = eccPrimeSquared * math.cos(LatRad) * math.cos(LatRad);
      let A = math.cos(LatRad) * (LongRad - LongOriginRad);
      let M = 6378137 * ((1 - 0.00669438 / 4 - 3 * 0.00669438 * 0.00669438 / 64 - 5 * 0.00669438 * 0.00669438 * 0.00669438 / 256) * LatRad - (3 * 0.00669438 / 8 + 3 * 0.00669438 * 0.00669438 / 32 + 45 * 0.00669438 * 0.00669438 * 0.00669438 / 1024) * math.sin(2 * LatRad) + (15 * 0.00669438 * 0.00669438 / 256 + 45 * 0.00669438 * 0.00669438 * 0.00669438 / 1024) * math.sin(4 * LatRad) - 35 * 0.00669438 * 0.00669438 * 0.00669438 / 3072 * math.sin(6 * LatRad));
      let UTMEasting = 0.9996 * N * (A + (1 - T + C) * A * A * A / 6 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120) + 500000;
      let UTMNorthing = 0.9996 * (M + N * math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720));
      if (Lat < 0) {
        UTMNorthing = UTMNorthing + 10000000;
      }
      let utm = new utm$.UTM.new({easting: UTMEasting[$truncateToDouble](), northing: UTMNorthing[$truncateToDouble](), zoneNumber: ZoneNumber, zoneLetter: mgrs$.Mgrs.getLetterDesignator(Lat)});
      return utm;
    }
    static getLetterDesignator(latitude) {
      if (latitude <= 84 && latitude >= 72) {
        return "X";
      } else if (latitude < 72 && latitude >= -80) {
        let index = ((latitude - -80) / 8)[$floor]();
        return "CDEFGHJKLMNPQRSTUVWX"[$_get](index);
      } else {
        return "Z";
      }
    }
    static UTMtoLL(utm) {
      let UTMNorthing = utm.northing;
      let UTMEasting = utm.easting;
      let zoneLetter = utm.zoneLetter;
      let zoneNumber = utm.zoneNumber;
      if (zoneNumber < 0 || zoneNumber > 60) {
        return null;
      }
      let e1 = (1 - math.sqrt(1 - 0.00669438)) / (1 + math.sqrt(1 - 0.00669438));
      let x = UTMEasting - 500000;
      let y = UTMNorthing;
      if (mgrs$.Mgrs.ALPHABET[$indexOf](zoneLetter[$toLowerCase]()) < mgrs$.Mgrs.ALPHABET[$indexOf]("N"[$toLowerCase]())) {
        y = y - 10000000;
      }
      let LongOrigin = (zoneNumber - 1) * 6 - 180 + 3;
      let eccPrimeSquared = 0.00669438 / (1 - 0.00669438);
      let M = y / 0.9996;
      let mu = M / (6378137 * (1 - 0.00669438 / 4 - 3 * 0.00669438 * 0.00669438 / 64 - 5 * 0.00669438 * 0.00669438 * 0.00669438 / 256));
      let phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * math.sin(4 * mu) + 151 * e1 * e1 * e1 / 96 * math.sin(6 * mu);
      let N1 = 6378137 / math.sqrt(1 - 0.00669438 * math.sin(phi1Rad) * math.sin(phi1Rad));
      let T1 = math.tan(phi1Rad) * math.tan(phi1Rad);
      let C1 = eccPrimeSquared * math.cos(phi1Rad) * math.cos(phi1Rad);
      let R1 = 6378137 * (1 - 0.00669438) / math.pow(1 - 0.00669438 * math.sin(phi1Rad) * math.sin(phi1Rad), 1.5);
      let D = x / (N1 * 0.9996);
      let lat = phi1Rad - N1 * math.tan(phi1Rad) / R1 * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
      lat = mgrs$.Mgrs.radToDeg(lat);
      let lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / math.cos(phi1Rad);
      lon = LongOrigin + mgrs$.Mgrs.radToDeg(lon);
      if (utm.accuracy != null) {
        let topRight = mgrs$.Mgrs.UTMtoLL(new utm$.UTM.new({easting: utm.easting + dart.nullCheck(utm.accuracy), northing: utm.northing + dart.nullCheck(utm.accuracy), zoneLetter: utm.zoneLetter, zoneNumber: utm.zoneNumber, accuracy: null}));
        return new bbox$.BBox.new({top: core.double.as(dart.dload(topRight, 'lat')), right: core.double.as(dart.dload(topRight, 'lon')), bottom: lat, left: lon});
      } else {
        return new lonlat.LonLat.new({lat: lat, lon: lon});
      }
    }
    static decode(mgrsString) {
      let t1;
      if (mgrsString[$isEmpty]) {
        dart.throw(core.Exception.new("MGRSPoint coverting from nothing"));
      }
      mgrsString = mgrsString[$replaceAll](" ", "");
      let length = mgrsString.length;
      let hunK = null;
      let sb = "";
      let i = 0;
      for (let t0 = i; i < 2; i = i + 1) {
        let letter = mgrsString[$_get](i);
        if (!mgrs$.Mgrs.ALPHABET[$contains](letter[$toLowerCase]())) {
          sb = sb + letter;
        }
      }
      let zoneNumber = core.int.parse(sb);
      if (i === 0 || i + 3 > length) {
        dart.throw(core.Exception.new("MGRSPoint bad conversion from " + mgrsString));
      }
      let zoneLetter = mgrsString[$_get]((t1 = i, i = t1 + 1, t1));
      if (mgrs$.Mgrs.ALPHABET[$indexOf](zoneLetter[$toLowerCase]()) <= mgrs$.Mgrs.ALPHABET[$indexOf]("A"[$toLowerCase]()) || zoneLetter === "B" || zoneLetter === "Y" || mgrs$.Mgrs.ALPHABET[$indexOf](zoneLetter[$toLowerCase]()) >= mgrs$.Mgrs.ALPHABET[$indexOf]("Z"[$toLowerCase]()) || zoneLetter === "I" || zoneLetter === "O") {
        dart.throw(core.Exception.new("MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString));
      }
      hunK = mgrsString[$substring](i, i = i + 2);
      let set = mgrs$.Mgrs.get100kSetForZone(zoneNumber);
      let east100k = mgrs$.Mgrs.getEastingFromChar(core.String.as(dart.dsend(hunK, '_get', [0])), set);
      let north100k = mgrs$.Mgrs.getNorthingFromChar(core.String.as(dart.dsend(hunK, '_get', [1])), set);
      while (north100k < mgrs$.Mgrs.getMinNorthing(zoneLetter)) {
        north100k = north100k + 2000000;
      }
      let remainder = length - i;
      if (remainder[$modulo](2) !== 0) {
        dart.throw(core.Exception.new("MGRSPoint has to have an even number of digits after the zone letter and two 100km letters - front half for easting meters, second half for northing meters " + mgrsString));
      }
      let sep = (remainder / 2)[$truncate]();
      let sepEasting = 0.0;
      let sepNorthing = 0.0;
      let accuracyBonus = null;
      if (sep > 0) {
        accuracyBonus = (100000 / math.pow(10, sep))[$round]();
        let sepEastingString = mgrsString[$substring](i, i + sep);
        sepEasting = core.double.parse(sepEastingString) * dart.notNull(accuracyBonus);
        let sepNorthingString = mgrsString[$substring](i + sep);
        sepNorthing = core.double.parse(sepNorthingString) * dart.notNull(accuracyBonus);
      }
      let easting = sepEasting + east100k;
      let northing = sepNorthing + north100k;
      let utm = new utm$.UTM.new({easting: easting, northing: northing, zoneLetter: zoneLetter, zoneNumber: zoneNumber, accuracy: accuracyBonus});
      return utm;
    }
    static getEastingFromChar(e, set) {
      let curCol = unicode.toRune(mgrs$.Mgrs.SET_ORIGIN_COLUMN_LETTERS[$_get](set - 1));
      let eastingValue = 100000;
      let rewindMarker = false;
      while (curCol !== unicode.toRune(e[$_get](0))) {
        curCol = curCol + 1;
        if (curCol === mgrs$.Mgrs.I) {
          curCol = curCol + 1;
        }
        if (curCol === mgrs$.Mgrs.O) {
          curCol = curCol + 1;
        }
        if (curCol > mgrs$.Mgrs.Z) {
          if (rewindMarker) {
            dart.throw(core.Exception.new("Bad character: " + e));
          }
          curCol = mgrs$.Mgrs.A;
          rewindMarker = true;
        }
        eastingValue = eastingValue + 100000;
      }
      return eastingValue;
    }
    static getNorthingFromChar(n, set) {
      if (mgrs$.Mgrs.ALPHABET[$indexOf](n[$toLowerCase]()) > mgrs$.Mgrs.ALPHABET[$indexOf]("V"[$toLowerCase]())) {
        dart.throw(core.Exception.new("MGRSPoint given invalid Northing " + n));
      }
      let curRow = unicode.toRune(mgrs$.Mgrs.SET_ORIGIN_ROW_LETTERS[$_get](set - 1));
      let northingValue = 0;
      let rewindMarker = false;
      while (curRow !== unicode.toRune(n[$_get](0))) {
        curRow = curRow + 1;
        if (curRow === mgrs$.Mgrs.I) {
          curRow = curRow + 1;
        }
        if (curRow === mgrs$.Mgrs.O) {
          curRow = curRow + 1;
        }
        if (curRow > mgrs$.Mgrs.V) {
          if (rewindMarker) {
            dart.throw(core.Exception.new("Bad character: " + n));
          }
          curRow = mgrs$.Mgrs.A;
          rewindMarker = true;
        }
        northingValue = northingValue + 100000;
      }
      return northingValue;
    }
    static getMinNorthing(zoneLetter) {
      let northing = null;
      switch (zoneLetter) {
        case "C":
          {
            northing = 1100000;
            break;
          }
        case "D":
          {
            northing = 2000000;
            break;
          }
        case "E":
          {
            northing = 2800000;
            break;
          }
        case "F":
          {
            northing = 3700000;
            break;
          }
        case "G":
          {
            northing = 4600000;
            break;
          }
        case "H":
          {
            northing = 5500000;
            break;
          }
        case "J":
          {
            northing = 6400000;
            break;
          }
        case "K":
          {
            northing = 7300000;
            break;
          }
        case "L":
          {
            northing = 8200000;
            break;
          }
        case "M":
          {
            northing = 9100000;
            break;
          }
        case "N":
          {
            northing = 0;
            break;
          }
        case "P":
          {
            northing = 800000;
            break;
          }
        case "Q":
          {
            northing = 1700000;
            break;
          }
        case "R":
          {
            northing = 2600000;
            break;
          }
        case "S":
          {
            northing = 3500000;
            break;
          }
        case "T":
          {
            northing = 4400000;
            break;
          }
        case "U":
          {
            northing = 5300000;
            break;
          }
        case "V":
          {
            northing = 6200000;
            break;
          }
        case "W":
          {
            northing = 7000000;
            break;
          }
        case "X":
          {
            northing = 7900000;
            break;
          }
        default:
          {
            northing = -1;
          }
      }
      if (northing >= 0) {
        return northing;
      } else {
        dart.throw(core.Exception.new("Invalid zone letter: " + zoneLetter));
      }
    }
    static ['_#new#tearOff']() {
      return new mgrs$.Mgrs.new();
    }
  };
  (mgrs$.Mgrs.new = function() {
    ;
  }).prototype = mgrs$.Mgrs.prototype;
  dart.addTypeTests(mgrs$.Mgrs);
  dart.addTypeCaches(mgrs$.Mgrs);
  dart.setStaticMethodSignature(mgrs$.Mgrs, () => ['inverse', 'toPoint', 'forward', 'encode', 'get100kID', 'get100kSetForZone', 'getLetter100kID', 'degToRad', 'radToDeg', 'LLtoUTM', 'getLetterDesignator', 'UTMtoLL', 'decode', 'getEastingFromChar', 'getNorthingFromChar', 'getMinNorthing']);
  dart.setLibraryUri(mgrs$.Mgrs, I[0]);
  dart.setStaticFieldSignature(mgrs$.Mgrs, () => ['NUM_100K_SETS', 'ALPHABET', 'SET_ORIGIN_COLUMN_LETTERS', 'SET_ORIGIN_ROW_LETTERS', 'A', 'I', 'O', 'V', 'Z']);
  dart.defineLazy(mgrs$.Mgrs, {
    /*mgrs$.Mgrs.NUM_100K_SETS*/get NUM_100K_SETS() {
      return 6;
    },
    /*mgrs$.Mgrs.ALPHABET*/get ALPHABET() {
      return T.JSArrayOfString().of(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    },
    /*mgrs$.Mgrs.SET_ORIGIN_COLUMN_LETTERS*/get SET_ORIGIN_COLUMN_LETTERS() {
      return "AJSAJS";
    },
    /*mgrs$.Mgrs.SET_ORIGIN_ROW_LETTERS*/get SET_ORIGIN_ROW_LETTERS() {
      return "AFAFAF";
    },
    /*mgrs$.Mgrs.A*/get A() {
      return 65;
    },
    /*mgrs$.Mgrs.I*/get I() {
      return 73;
    },
    /*mgrs$.Mgrs.O*/get O() {
      return 79;
    },
    /*mgrs$.Mgrs.V*/get V() {
      return 86;
    },
    /*mgrs$.Mgrs.Z*/get Z() {
      return 90;
    }
  }, false);
  dart.trackLibraries("packages/mgrs_dart/src/mgrs.dart", {
    "package:mgrs_dart/src/mgrs.dart": mgrs$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mgrs.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/mgrs_dart/src/mgrs.dart.lib.js"}');
  // Exports:
  return {
    src__mgrs: mgrs$
  };
}));

//# sourceMappingURL=mgrs.dart.lib.js.map
