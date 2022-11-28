define(['dart_sdk', 'packages/my_ticket_care/src/shared/models/workday.dart'], (function load__packages__my_ticket_care__src__booking__utils__workday_picker_controller_dart(dart_sdk, packages__my_ticket_care__src__shared__models__workday$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const workday = packages__my_ticket_care__src__shared__models__workday$46dart.src__shared__models__workday;
  var workday_picker_controller = Object.create(dart.library);
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $firstWhere = dartx.firstWhere;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    WorkdayTobool: () => (T.WorkdayTobool = dart.constFn(dart.fnType(core.bool, [workday.Workday])))(),
    DateTimeN: () => (T.DateTimeN = dart.constFn(dart.nullable(core.DateTime)))(),
    DateTimeNTobool: () => (T.DateTimeNTobool = dart.constFn(dart.fnType(core.bool, [T.DateTimeN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/booking/utils/workday_picker_controller.dart"];
  workday_picker_controller.WorkdayPickerController = class WorkdayPickerController extends core.Object {
    filterAvailableWorkdays(workdays) {
      let available = workdays[$where](dart.fn(day => day.isWorkday, T.WorkdayTobool()))[$toList]();
      return available;
    }
    format(date) {
      return dart.str(date.day) + "/" + dart.str(date.month) + "/" + dart.str(date.year);
    }
    createPredicate(workdays) {
      return dart.fn(date => {
        let dateString = this.format(dart.nullCheck(date));
        return workdays.contains(dateString);
      }, T.DateTimeNTobool());
    }
    findWorkdayFromDate(workdays, date) {
      let dateString = this.format(date);
      return workdays[$firstWhere](dart.fn(day => day.dateString === dateString, T.WorkdayTobool()));
    }
    static ['_#new#tearOff']() {
      return new workday_picker_controller.WorkdayPickerController.new();
    }
  };
  (workday_picker_controller.WorkdayPickerController.new = function() {
    ;
  }).prototype = workday_picker_controller.WorkdayPickerController.prototype;
  dart.addTypeTests(workday_picker_controller.WorkdayPickerController);
  dart.addTypeCaches(workday_picker_controller.WorkdayPickerController);
  dart.setMethodSignature(workday_picker_controller.WorkdayPickerController, () => ({
    __proto__: dart.getMethods(workday_picker_controller.WorkdayPickerController.__proto__),
    filterAvailableWorkdays: dart.fnType(core.List$(workday.Workday), [core.List$(workday.Workday)]),
    format: dart.fnType(core.String, [core.DateTime]),
    createPredicate: dart.fnType(dart.fnType(core.bool, [dart.nullable(core.DateTime)]), [core.Set$(core.String)]),
    findWorkdayFromDate: dart.fnType(workday.Workday, [core.List$(workday.Workday), core.DateTime])
  }));
  dart.setLibraryUri(workday_picker_controller.WorkdayPickerController, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/utils/workday_picker_controller.dart", {
    "package:my_ticket_care/src/booking/utils/workday_picker_controller.dart": workday_picker_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["workday_picker_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;4BAGsD;AACpC,sBAAY,AAAS,AAA8B,QAA/B,SAAO,QAAC,OAAQ,AAAI,GAAD;AACrD,YAAO,UAAS;IAClB;WAEuB;AACrB,YAA+C,UAArC,AAAK,IAAD,QAAK,eAAG,AAAK,IAAD,UAAO,eAAG,AAAK,IAAD;IAC1C;oBAEqD;AACnD,YAAO,SAAW;AACT,yBAAa,YAAW,eAAJ,IAAI;AAC/B,cAAO,AAAS,SAAD,UAAU,UAAU;;IAEvC;wBAE0C,UAAmB;AACpD,uBAAa,YAAO,IAAI;AAC/B,YAAO,AAAS,SAAD,cACb,QAAC,OAAQ,AAAI,AAAW,GAAZ,gBAAe,UAAU;IAEzC;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/utils/workday_picker_controller.dart.lib.js"}');
  // Exports:
  return {
    src__booking__utils__workday_picker_controller: workday_picker_controller
  };
}));

//# sourceMappingURL=workday_picker_controller.dart.lib.js.map
