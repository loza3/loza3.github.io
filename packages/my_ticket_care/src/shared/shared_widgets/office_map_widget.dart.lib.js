define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter_map/src/layer/tile_layer/tile_provider/tile_provider_web.dart', 'packages/cool_alert/src/widgets/cool_alert_buttons.dart', 'packages/my_ticket_care/src/shared/shared_utilities/launch_google_maps.dart', 'packages/positioned_tap_detector_2/positioned_tap_detector_2.dart', 'packages/latlong2/latlong.dart', 'packages/flutter_map/src/layer/attribution_layer.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/my_ticket_care/src/shared/models/office.dart'], (function load__packages__my_ticket_care__src__shared__shared_widgets__office_map_widget_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web$46dart, packages__cool_alert__src__widgets__cool_alert_buttons$46dart, packages__my_ticket_care__src__shared__shared_utilities__launch_google_maps$46dart, packages__positioned_tap_detector_2__positioned_tap_detector_2$46dart, packages__latlong2__latlong$46dart, packages__flutter_map__src__layer__attribution_layer$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__my_ticket_care__src__shared__models__office$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const flutter_map = packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web$46dart.flutter_map;
  const tile_layer = packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web$46dart.src__layer__tile_layer__tile_layer;
  const marker_layer = packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web$46dart.src__layer__marker_layer;
  const cool_alert = packages__cool_alert__src__widgets__cool_alert_buttons$46dart.cool_alert;
  const launch_google_maps = packages__my_ticket_care__src__shared__shared_utilities__launch_google_maps$46dart.src__shared__shared_utilities__launch_google_maps;
  const positioned_tap_detector_2 = packages__positioned_tap_detector_2__positioned_tap_detector_2$46dart.positioned_tap_detector_2;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  const attribution_layer = packages__flutter_map__src__layer__attribution_layer$46dart.src__layer__attribution_layer;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  var office_map_widget = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    TapPositionAndLatLngToFutureOfvoid: () => (T.TapPositionAndLatLngToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [positioned_tap_detector_2.TapPosition, latlong.LatLng])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextToIcon: () => (T.BuildContextToIcon = dart.constFn(dart.fnType(icon.Icon, [framework.BuildContext])))(),
    JSArrayOfMarker: () => (T.JSArrayOfMarker = dart.constFn(_interceptors.JSArray$(marker_layer.Marker)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeMapWidget",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/office_map_widget.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OverflowBox",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/office_map_widget.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TileLayer",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/office_map_widget.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 39,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/office_map_widget.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MarkerLayer",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/office_map_widget.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlutterMap",
        [_Location_column]: 14,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/office_map_widget.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRRect",
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/office_map_widget.dart"
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = ["package:my_ticket_care/src/shared/shared_widgets/office_map_widget.dart"];
  var office$ = dart.privateName(office_map_widget, "OfficeMapWidget.office");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  office_map_widget.OfficeMapWidget = class OfficeMapWidget extends framework.StatelessWidget {
    get office() {
      return this[office$];
    }
    set office(value) {
      super.office = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let office = opts && 'office' in opts ? opts.office : null;
      return new office_map_widget.OfficeMapWidget.new({key: key, office: office, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(15.0), child: new flutter_map.FlutterMap.new({options: new flutter_map.MapOptions.new({onTap: dart.fn((tap, _) => async.async(dart.void, (function*() {
              let openGoogleMaps = false;
              yield cool_alert.CoolAlert.show({context: context, type: cool_alert.CoolAlertType.confirm, title: "Abrir en Google Maps", text: "¿Desea abrir la ubicación en Google Maps?", cancelBtnText: "No", confirmBtnText: "Si", width: 400.0, onConfirmBtnTap: dart.fn(() => {
                  openGoogleMaps = true;
                  navigator.Navigator.pop(T.ObjectN(), context);
                }, T.VoidTovoid())});
              if (openGoogleMaps) {
                yield launch_google_maps.launchGoogleMaps(this.office);
              }
            }).bind(this)), T.TapPositionAndLatLngToFutureOfvoid()), center: new latlong.LatLng.new(this.office.geoRefLatitude, this.office.geoRefLongitude)}), nonRotatedChildren: T.JSArrayOfWidget().of([new basic.OverflowBox.new({maxWidth: 400.0, child: attribution_layer.AttributionWidget.defaultWidget({source: "OpenStreetMap contributors"}), $creationLocationd_0dea112b090073317d4: C[1] || CT.C1})]), children: T.JSArrayOfWidget().of([new tile_layer.TileLayer.new({urlTemplate: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), new marker_layer.MarkerLayer.new({markers: T.JSArrayOfMarker().of([new marker_layer.Marker.new({point: new latlong.LatLng.new(this.office.geoRefLatitude, this.office.geoRefLongitude), builder: dart.fn(context => new icon.Icon.new(icons.Icons.place, {color: colorScheme.error, size: 40.0, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), T.BuildContextToIcon())})]), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4})]), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
  };
  (office_map_widget.OfficeMapWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let office = opts && 'office' in opts ? opts.office : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[office$] = office;
    office_map_widget.OfficeMapWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = office_map_widget.OfficeMapWidget.prototype;
  dart.addTypeTests(office_map_widget.OfficeMapWidget);
  dart.addTypeCaches(office_map_widget.OfficeMapWidget);
  dart.setMethodSignature(office_map_widget.OfficeMapWidget, () => ({
    __proto__: dart.getMethods(office_map_widget.OfficeMapWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(office_map_widget.OfficeMapWidget, I[0]);
  dart.setFieldSignature(office_map_widget.OfficeMapWidget, () => ({
    __proto__: dart.getFields(office_map_widget.OfficeMapWidget.__proto__),
    office: dart.finalFieldType(office.Office)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_widgets/office_map_widget.dart", {
    "package:my_ticket_care/src/shared/shared_widgets/office_map_widget.dart": office_map_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["office_map_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAce;;;;;;;;;;;UAGa;AACN,wBAAoB,AAAY,eAAT,OAAO;AAChD,YAAO,wCACsB,wCAAS,cAC7B,yCACI,uCACA,SAAC,KAAK;AACN,mCAAiB;AAYhB,cAXN,MAAgB,oCACH,OAAO,QACI,yCACb,8BACD,4DACS,sBACC,aACT,wBACU;AACM,kBAArB,iBAAiB;AACK,kBAAZ,qCAAI,OAAO;;AAG3B,kBAAI,cAAc;AACc,gBAA9B,MAAM,oCAAiB;;YAE1B,iEACO,uBACL,AAAO,4BACR,AAAO,oDAGS,wBAClB,qCACY,cACe,2DACf,qGAIJ,wBACR,2CACe,2GAEf,2CACW,wBACP,oCACS,uBAAO,AAAO,4BAAgB,AAAO,uCACnC,QAAC,WAAY,kBACd,2BACC,AAAY,WAAD,cACZ;IAQtB;;;QAhEO;QACS;;;AACX,qEAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_widgets/office_map_widget.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_widgets__office_map_widget: office_map_widget
  };
}));

//# sourceMappingURL=office_map_widget.dart.lib.js.map
