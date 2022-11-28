define(['dart_sdk', 'packages/my_ticket_care/src/shared/models/offer.dart'], (function load__packages__my_ticket_care__src__booking__utils__offer_picker_controller_dart(dart_sdk, packages__my_ticket_care__src__shared__models__offer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const offer = packages__my_ticket_care__src__shared__models__offer$46dart.src__shared__models__offer;
  var offer_picker_controller = Object.create(dart.library);
  var $map = dartx.map;
  var $toSet = dartx.toSet;
  var $where = dartx.where;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    OfferToint: () => (T.OfferToint = dart.constFn(dart.fnType(core.int, [offer.Offer])))(),
    OfferTobool: () => (T.OfferTobool = dart.constFn(dart.fnType(core.bool, [offer.Offer])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/booking/utils/offer_picker_controller.dart"];
  offer_picker_controller.OfferPickerController = class OfferPickerController extends core.Object {
    getEmployeesId(offers) {
      return offers[$map](core.int, dart.fn(e => e.employeeId, T.OfferToint()))[$toSet]();
    }
    getOffersFromEmployee(offers, employeeId) {
      return offers[$where](dart.fn(e => e.employeeId === employeeId, T.OfferTobool()))[$toList]();
    }
    static ['_#new#tearOff']() {
      return new offer_picker_controller.OfferPickerController.new();
    }
  };
  (offer_picker_controller.OfferPickerController.new = function() {
    ;
  }).prototype = offer_picker_controller.OfferPickerController.prototype;
  dart.addTypeTests(offer_picker_controller.OfferPickerController);
  dart.addTypeCaches(offer_picker_controller.OfferPickerController);
  dart.setMethodSignature(offer_picker_controller.OfferPickerController, () => ({
    __proto__: dart.getMethods(offer_picker_controller.OfferPickerController.__proto__),
    getEmployeesId: dart.fnType(core.Set$(core.int), [core.List$(offer.Offer)]),
    getOffersFromEmployee: dart.fnType(core.List$(offer.Offer), [core.List$(offer.Offer), core.int])
  }));
  dart.setLibraryUri(offer_picker_controller.OfferPickerController, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/utils/offer_picker_controller.dart", {
    "package:my_ticket_care/src/booking/utils/offer_picker_controller.dart": offer_picker_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["offer_picker_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;mBAGsC;AAClC,YAAO,AAAO,AAAyB,OAA1B,iBAAK,QAAC,KAAM,AAAE,CAAD;IAC5B;0BAE8C,QAAY;AACxD,YAAO,AAAO,AAAyC,OAA1C,SAAO,QAAC,KAAM,AAAE,AAAW,CAAZ,gBAAe,UAAU;IACvD;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/utils/offer_picker_controller.dart.lib.js"}');
  // Exports:
  return {
    src__booking__utils__offer_picker_controller: offer_picker_controller
  };
}));

//# sourceMappingURL=offer_picker_controller.dart.lib.js.map
