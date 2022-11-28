define(['dart_sdk', 'packages/flutter/src/gestures/events.dart'], (function load__packages__flutter__src__gestures__converter_dart(dart_sdk, packages__flutter__src__gestures__events$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  var converter = Object.create(dart.library);
  var $where = dartx.where;
  var $map = dartx.map;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    PointerDataTobool: () => (T.PointerDataTobool = dart.constFn(dart.fnType(core.bool, [ui.PointerData])))(),
    PointerDataTo_PointerEventDescription: () => (T.PointerDataTo_PointerEventDescription = dart.constFn(dart.fnType(events._PointerEventDescription, [ui.PointerData])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "add",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "hover",
        [_Enum_index]: 3
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 4
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "move",
        [_Enum_index]: 5
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 6
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "cancel",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "remove",
        [_Enum_index]: 2
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "panZoomStart",
        [_Enum_index]: 7
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "panZoomUpdate",
        [_Enum_index]: 8
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_Enum__name]: "panZoomEnd",
        [_Enum_index]: 9
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_Enum__name]: "scroll",
        [_Enum_index]: 1
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_Enum__name]: "unknown",
        [_Enum_index]: 2
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "mouse",
        [_Enum_index]: 1
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "trackpad",
        [_Enum_index]: 4
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "touch",
        [_Enum_index]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "stylus",
        [_Enum_index]: 2
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "invertedStylus",
        [_Enum_index]: 3
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "unknown",
        [_Enum_index]: 5
      });
    }
  }, false);
  var C = Array(19).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/gestures/converter.dart",
    "package:flutter/src/gestures/converter.dart"
  ];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  converter.PointerEventConverter = class PointerEventConverter extends core.Object {
    static ['_#_#tearOff']() {
      return new converter.PointerEventConverter.__();
    }
    static expand(data, devicePixelRatio) {
      return data[$where](dart.fn(datum => datum.signalKind !== ui.PointerSignalKind.unknown, T.PointerDataTobool()))[$map](events.PointerEvent, dart.fn(datum => {
        let t0;
        let position = new ui.Offset.new(datum.physicalX, datum.physicalY)['/'](devicePixelRatio);
        if (!(position !== null)) dart.assertFailed(null, I[0], 57, 18, "position != null");
        let delta = new ui.Offset.new(datum.physicalDeltaX, datum.physicalDeltaY)['/'](devicePixelRatio);
        let radiusMinor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMinor, devicePixelRatio);
        let radiusMajor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMajor, devicePixelRatio);
        let radiusMin = converter.PointerEventConverter._toLogicalPixels(datum.radiusMin, devicePixelRatio);
        let radiusMax = converter.PointerEventConverter._toLogicalPixels(datum.radiusMax, devicePixelRatio);
        let timeStamp = datum.timeStamp;
        let kind = datum.kind;
        if (!(datum.change !== null)) dart.assertFailed(null, I[0], 65, 18, "datum.change != null");
        switch (t0 = datum.signalKind, t0 == null ? ui.PointerSignalKind.none : t0) {
          case C[10] || CT.C10:
            {
              switch (datum.change) {
                case C[0] || CT.C0:
                  {
                    return new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, embedderId: datum.embedderId});
                  }
                case C[1] || CT.C1:
                  {
                    return new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: delta, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: datum.synthesized, embedderId: datum.embedderId});
                  }
                case C[2] || CT.C2:
                  {
                    return new events.PointerDownEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, embedderId: datum.embedderId});
                  }
                case C[3] || CT.C3:
                  {
                    return new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, delta: delta, buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, platformData: datum.platformData, synthesized: datum.synthesized, embedderId: datum.embedderId});
                  }
                case C[4] || CT.C4:
                  {
                    return new events.PointerUpEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, embedderId: datum.embedderId});
                  }
                case C[5] || CT.C5:
                  {
                    return new events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, embedderId: datum.embedderId});
                  }
                case C[6] || CT.C6:
                  {
                    return new events.PointerRemovedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, embedderId: datum.embedderId});
                  }
                case C[7] || CT.C7:
                  {
                    return new events.PointerPanZoomStartEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, embedderId: datum.embedderId, synthesized: datum.synthesized});
                  }
                case C[8] || CT.C8:
                  {
                    let pan = new ui.Offset.new(datum.panX, datum.panY)['/'](devicePixelRatio);
                    let panDelta = new ui.Offset.new(datum.panDeltaX, datum.panDeltaY)['/'](devicePixelRatio);
                    return new events.PointerPanZoomUpdateEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, pan: pan, panDelta: panDelta, scale: datum.scale, rotation: datum.rotation, embedderId: datum.embedderId, synthesized: datum.synthesized});
                  }
                case C[9] || CT.C9:
                  {
                    return new events.PointerPanZoomEndEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, embedderId: datum.embedderId, synthesized: datum.synthesized});
                  }
              }
            }
          case C[11] || CT.C11:
            {
              let scrollDelta = new ui.Offset.new(datum.scrollDeltaX, datum.scrollDeltaY)['/'](devicePixelRatio);
              return new events.PointerScrollEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, scrollDelta: scrollDelta, embedderId: datum.embedderId});
            }
          case C[12] || CT.C12:
          default:
            {
              dart.throw(new core.StateError.new("Unreachable"));
            }
        }
      }, T.PointerDataTo_PointerEventDescription()));
    }
    static _toLogicalPixels(physicalPixels, devicePixelRatio) {
      return physicalPixels / devicePixelRatio;
    }
  };
  (converter.PointerEventConverter.__ = function() {
    ;
  }).prototype = converter.PointerEventConverter.prototype;
  dart.addTypeTests(converter.PointerEventConverter);
  dart.addTypeCaches(converter.PointerEventConverter);
  dart.setStaticMethodSignature(converter.PointerEventConverter, () => ['expand', '_toLogicalPixels']);
  dart.setLibraryUri(converter.PointerEventConverter, I[1]);
  converter._synthesiseDownButtons = function _synthesiseDownButtons(buttons, kind) {
    switch (kind) {
      case C[13] || CT.C13:
      case C[14] || CT.C14:
        {
          return buttons;
        }
      case C[15] || CT.C15:
      case C[16] || CT.C16:
      case C[17] || CT.C17:
        {
          return buttons === 0 ? 1 : buttons;
        }
      case C[18] || CT.C18:
        {
          return buttons === 0 ? 1 : buttons;
        }
    }
  };
  dart.trackLibraries("packages/flutter/src/gestures/converter.dart", {
    "package:flutter/src/gestures/converter.dart": converter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["converter.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/converter.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__converter: converter
  };
}));

//# sourceMappingURL=converter.dart.lib.js.map
