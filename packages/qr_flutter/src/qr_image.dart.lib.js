define(['dart_sdk', 'packages/flutter/src/painting/edge_insets.dart', 'packages/qr_flutter/src/types.dart', 'packages/qr_flutter/src/qr_versions.dart', 'packages/flutter/src/widgets/title.dart', 'packages/qr/src/qr_code.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/qr_flutter/src/validator.dart', 'packages/flutter/src/widgets/layout_builder.dart', 'packages/flutter/src/widgets/async.dart', 'packages/flutter/src/rendering/box.dart', 'packages/qr_flutter/src/qr_painter.dart', 'packages/flutter/src/painting/image_stream.dart'], (function load__packages__qr_flutter__src__qr_image_dart(dart_sdk, packages__flutter__src__painting__edge_insets$46dart, packages__qr_flutter__src__types$46dart, packages__qr_flutter__src__qr_versions$46dart, packages__flutter__src__widgets__title$46dart, packages__qr__src__qr_code$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__qr_flutter__src__validator$46dart, packages__flutter__src__widgets__layout_builder$46dart, packages__flutter__src__widgets__async$46dart, packages__flutter__src__rendering__box$46dart, packages__qr_flutter__src__qr_painter$46dart, packages__flutter__src__painting__image_stream$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const types = packages__qr_flutter__src__types$46dart.src__types;
  const qr_versions = packages__qr_flutter__src__qr_versions$46dart.src__qr_versions;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const qr_code = packages__qr__src__qr_code$46dart.src__qr_code;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const validator = packages__qr_flutter__src__validator$46dart.src__validator;
  const layout_builder = packages__flutter__src__widgets__layout_builder$46dart.src__widgets__layout_builder;
  const async$ = packages__flutter__src__widgets__async$46dart.src__widgets__async;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const qr_painter = packages__qr_flutter__src__qr_painter$46dart.src__qr_painter;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  var qr_image = Object.create(dart.library);
  var qr_flutter = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureBuilderOfImage: () => (T.FutureBuilderOfImage = dart.constFn(async$.FutureBuilder$(ui.Image)))(),
    AsyncSnapshotOfImage: () => (T.AsyncSnapshotOfImage = dart.constFn(async$.AsyncSnapshot$(ui.Image)))(),
    BuildContextAndAsyncSnapshotOfImageToWidget: () => (T.BuildContextAndAsyncSnapshotOfImageToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T.AsyncSnapshotOfImage()])))(),
    BuildContextAndBoxConstraintsToWidget: () => (T.BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))(),
    CompleterOfImage: () => (T.CompleterOfImage = dart.constFn(async.Completer$(ui.Image)))(),
    ImageInfoAndboolTovoid: () => (T.ImageInfoAndboolTovoid = dart.constFn(dart.fnType(dart.void, [image_stream.ImageInfo, core.bool])))(),
    StackTraceN: () => (T.StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))(),
    dynamicAndStackTraceNTovoid: () => (T.dynamicAndStackTraceNTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, T.StackTraceN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: types.QrEyeShape.prototype,
        [_Enum__name]: "square",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: types.QrEyeStyle.prototype,
        [QrEyeStyle_color]: C[3] || CT.C3,
        [QrEyeStyle_eyeShape]: C[4] || CT.C4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: types.QrDataModuleShape.prototype,
        [_Enum__name]: "square",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: types.QrDataModuleStyle.prototype,
        [QrDataModuleStyle_color]: C[3] || CT.C3,
        [QrDataModuleStyle_dataModuleShape]: C[6] || CT.C6
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "QrImage",
        [_Location_column]: 3,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "QrImage",
        [_Location_column]: 3,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 22,
        [_Location_line]: 206,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FutureBuilder",
        [_Location_column]: 16,
        [_Location_line]: 190,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutBuilder",
        [_Location_column]: 12,
        [_Location_line]: 180,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 14,
        [_Location_line]: 231,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_QrContentView",
        [_Location_column]: 12,
        [_Location_line]: 226,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 11,
        [_Location_line]: 238,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_QrContentView",
        [_Location_column]: 12,
        [_Location_line]: 243,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_QrContentView",
        [_Location_column]: 3,
        [_Location_line]: 280,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 16,
        [_Location_line]: 312,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 308,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 306,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart"
      });
    }
  }, false);
  var C = Array(20).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/qr_flutter-4.0.0/lib/src/qr_image.dart",
    "package:qr_flutter/src/qr_image.dart"
  ];
  var backgroundColor$ = dart.privateName(qr_image, "QrImage.backgroundColor");
  var foregroundColor$ = dart.privateName(qr_image, "QrImage.foregroundColor");
  var version$ = dart.privateName(qr_image, "QrImage.version");
  var errorCorrectionLevel$ = dart.privateName(qr_image, "QrImage.errorCorrectionLevel");
  var padding$ = dart.privateName(qr_image, "QrImage.padding");
  var size$ = dart.privateName(qr_image, "QrImage.size");
  var errorStateBuilder$ = dart.privateName(qr_image, "QrImage.errorStateBuilder");
  var constrainErrorBounds$ = dart.privateName(qr_image, "QrImage.constrainErrorBounds");
  var gapless$ = dart.privateName(qr_image, "QrImage.gapless");
  var embeddedImage$ = dart.privateName(qr_image, "QrImage.embeddedImage");
  var embeddedImageStyle$ = dart.privateName(qr_image, "QrImage.embeddedImageStyle");
  var embeddedImageEmitsError$ = dart.privateName(qr_image, "QrImage.embeddedImageEmitsError");
  var semanticsLabel$ = dart.privateName(qr_image, "QrImage.semanticsLabel");
  var eyeStyle$ = dart.privateName(qr_image, "QrImage.eyeStyle");
  var dataModuleStyle$ = dart.privateName(qr_image, "QrImage.dataModuleStyle");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Color_value = dart.privateName(ui, "Color.value");
  var QrEyeStyle_color = dart.privateName(types, "QrEyeStyle.color");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var QrEyeStyle_eyeShape = dart.privateName(types, "QrEyeStyle.eyeShape");
  var QrDataModuleStyle_color = dart.privateName(types, "QrDataModuleStyle.color");
  var QrDataModuleStyle_dataModuleShape = dart.privateName(types, "QrDataModuleStyle.dataModuleShape");
  var _data = dart.privateName(qr_image, "_data");
  var _qrCode = dart.privateName(qr_image, "_qrCode");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  qr_image.QrImage = class QrImage extends framework.StatefulWidget {
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get foregroundColor() {
      return this[foregroundColor$];
    }
    set foregroundColor(value) {
      super.foregroundColor = value;
    }
    get version() {
      return this[version$];
    }
    set version(value) {
      super.version = value;
    }
    get errorCorrectionLevel() {
      return this[errorCorrectionLevel$];
    }
    set errorCorrectionLevel(value) {
      super.errorCorrectionLevel = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get errorStateBuilder() {
      return this[errorStateBuilder$];
    }
    set errorStateBuilder(value) {
      super.errorStateBuilder = value;
    }
    get constrainErrorBounds() {
      return this[constrainErrorBounds$];
    }
    set constrainErrorBounds(value) {
      super.constrainErrorBounds = value;
    }
    get gapless() {
      return this[gapless$];
    }
    set gapless(value) {
      super.gapless = value;
    }
    get embeddedImage() {
      return this[embeddedImage$];
    }
    set embeddedImage(value) {
      super.embeddedImage = value;
    }
    get embeddedImageStyle() {
      return this[embeddedImageStyle$];
    }
    set embeddedImageStyle(value) {
      super.embeddedImageStyle = value;
    }
    get embeddedImageEmitsError() {
      return this[embeddedImageEmitsError$];
    }
    set embeddedImageEmitsError(value) {
      super.embeddedImageEmitsError = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    get eyeStyle() {
      return this[eyeStyle$];
    }
    set eyeStyle(value) {
      super.eyeStyle = value;
    }
    get dataModuleStyle() {
      return this[dataModuleStyle$];
    }
    set dataModuleStyle(value) {
      super.dataModuleStyle = value;
    }
    static ['_#new#tearOff'](opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let padding = opts && 'padding' in opts ? opts.padding : C[0] || CT.C0;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[1] || CT.C1;
      let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
      let version = opts && 'version' in opts ? opts.version : -1;
      let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
      let errorStateBuilder = opts && 'errorStateBuilder' in opts ? opts.errorStateBuilder : null;
      let constrainErrorBounds = opts && 'constrainErrorBounds' in opts ? opts.constrainErrorBounds : true;
      let gapless = opts && 'gapless' in opts ? opts.gapless : true;
      let embeddedImage = opts && 'embeddedImage' in opts ? opts.embeddedImage : null;
      let embeddedImageStyle = opts && 'embeddedImageStyle' in opts ? opts.embeddedImageStyle : null;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : "qr code";
      let eyeStyle = opts && 'eyeStyle' in opts ? opts.eyeStyle : C[2] || CT.C2;
      let dataModuleStyle = opts && 'dataModuleStyle' in opts ? opts.dataModuleStyle : C[5] || CT.C5;
      let embeddedImageEmitsError = opts && 'embeddedImageEmitsError' in opts ? opts.embeddedImageEmitsError : false;
      return new qr_image.QrImage.new({data: data, key: key, size: size, padding: padding, backgroundColor: backgroundColor, foregroundColor: foregroundColor, version: version, errorCorrectionLevel: errorCorrectionLevel, errorStateBuilder: errorStateBuilder, constrainErrorBounds: constrainErrorBounds, gapless: gapless, embeddedImage: embeddedImage, embeddedImageStyle: embeddedImageStyle, semanticsLabel: semanticsLabel, eyeStyle: eyeStyle, dataModuleStyle: dataModuleStyle, embeddedImageEmitsError: embeddedImageEmitsError, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    static ['_#withQr#tearOff'](opts) {
      let qr = opts && 'qr' in opts ? opts.qr : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let padding = opts && 'padding' in opts ? opts.padding : C[0] || CT.C0;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[1] || CT.C1;
      let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
      let version = opts && 'version' in opts ? opts.version : -1;
      let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
      let errorStateBuilder = opts && 'errorStateBuilder' in opts ? opts.errorStateBuilder : null;
      let constrainErrorBounds = opts && 'constrainErrorBounds' in opts ? opts.constrainErrorBounds : true;
      let gapless = opts && 'gapless' in opts ? opts.gapless : true;
      let embeddedImage = opts && 'embeddedImage' in opts ? opts.embeddedImage : null;
      let embeddedImageStyle = opts && 'embeddedImageStyle' in opts ? opts.embeddedImageStyle : null;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : "qr code";
      let eyeStyle = opts && 'eyeStyle' in opts ? opts.eyeStyle : C[2] || CT.C2;
      let dataModuleStyle = opts && 'dataModuleStyle' in opts ? opts.dataModuleStyle : C[5] || CT.C5;
      let embeddedImageEmitsError = opts && 'embeddedImageEmitsError' in opts ? opts.embeddedImageEmitsError : false;
      return new qr_image.QrImage.withQr({qr: qr, key: key, size: size, padding: padding, backgroundColor: backgroundColor, foregroundColor: foregroundColor, version: version, errorCorrectionLevel: errorCorrectionLevel, errorStateBuilder: errorStateBuilder, constrainErrorBounds: constrainErrorBounds, gapless: gapless, embeddedImage: embeddedImage, embeddedImageStyle: embeddedImageStyle, semanticsLabel: semanticsLabel, eyeStyle: eyeStyle, dataModuleStyle: dataModuleStyle, embeddedImageEmitsError: embeddedImageEmitsError, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    createState() {
      return new qr_image._QrImageState.new();
    }
  };
  (qr_image.QrImage.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let padding = opts && 'padding' in opts ? opts.padding : C[0] || CT.C0;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[1] || CT.C1;
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
    let version = opts && 'version' in opts ? opts.version : -1;
    let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
    let errorStateBuilder = opts && 'errorStateBuilder' in opts ? opts.errorStateBuilder : null;
    let constrainErrorBounds = opts && 'constrainErrorBounds' in opts ? opts.constrainErrorBounds : true;
    let gapless = opts && 'gapless' in opts ? opts.gapless : true;
    let embeddedImage = opts && 'embeddedImage' in opts ? opts.embeddedImage : null;
    let embeddedImageStyle = opts && 'embeddedImageStyle' in opts ? opts.embeddedImageStyle : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : "qr code";
    let eyeStyle = opts && 'eyeStyle' in opts ? opts.eyeStyle : C[2] || CT.C2;
    let dataModuleStyle = opts && 'dataModuleStyle' in opts ? opts.dataModuleStyle : C[5] || CT.C5;
    let embeddedImageEmitsError = opts && 'embeddedImageEmitsError' in opts ? opts.embeddedImageEmitsError : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[size$] = size;
    this[padding$] = padding;
    this[backgroundColor$] = backgroundColor;
    this[foregroundColor$] = foregroundColor;
    this[version$] = version;
    this[errorCorrectionLevel$] = errorCorrectionLevel;
    this[errorStateBuilder$] = errorStateBuilder;
    this[constrainErrorBounds$] = constrainErrorBounds;
    this[gapless$] = gapless;
    this[embeddedImage$] = embeddedImage;
    this[embeddedImageStyle$] = embeddedImageStyle;
    this[semanticsLabel$] = semanticsLabel;
    this[eyeStyle$] = eyeStyle;
    this[dataModuleStyle$] = dataModuleStyle;
    this[embeddedImageEmitsError$] = embeddedImageEmitsError;
    if (!qr_versions.QrVersions.isSupportedVersion(version)) dart.assertFailed(null, I[0], 49, 16, "QrVersions.isSupportedVersion(version)");
    this[_data] = data;
    this[_qrCode] = null;
    qr_image.QrImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = qr_image.QrImage.prototype;
  (qr_image.QrImage.withQr = function(opts) {
    let qr = opts && 'qr' in opts ? opts.qr : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let padding = opts && 'padding' in opts ? opts.padding : C[0] || CT.C0;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[1] || CT.C1;
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
    let version = opts && 'version' in opts ? opts.version : -1;
    let errorCorrectionLevel = opts && 'errorCorrectionLevel' in opts ? opts.errorCorrectionLevel : 1;
    let errorStateBuilder = opts && 'errorStateBuilder' in opts ? opts.errorStateBuilder : null;
    let constrainErrorBounds = opts && 'constrainErrorBounds' in opts ? opts.constrainErrorBounds : true;
    let gapless = opts && 'gapless' in opts ? opts.gapless : true;
    let embeddedImage = opts && 'embeddedImage' in opts ? opts.embeddedImage : null;
    let embeddedImageStyle = opts && 'embeddedImageStyle' in opts ? opts.embeddedImageStyle : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : "qr code";
    let eyeStyle = opts && 'eyeStyle' in opts ? opts.eyeStyle : C[2] || CT.C2;
    let dataModuleStyle = opts && 'dataModuleStyle' in opts ? opts.dataModuleStyle : C[5] || CT.C5;
    let embeddedImageEmitsError = opts && 'embeddedImageEmitsError' in opts ? opts.embeddedImageEmitsError : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[size$] = size;
    this[padding$] = padding;
    this[backgroundColor$] = backgroundColor;
    this[foregroundColor$] = foregroundColor;
    this[version$] = version;
    this[errorCorrectionLevel$] = errorCorrectionLevel;
    this[errorStateBuilder$] = errorStateBuilder;
    this[constrainErrorBounds$] = constrainErrorBounds;
    this[gapless$] = gapless;
    this[embeddedImage$] = embeddedImage;
    this[embeddedImageStyle$] = embeddedImageStyle;
    this[semanticsLabel$] = semanticsLabel;
    this[eyeStyle$] = eyeStyle;
    this[dataModuleStyle$] = dataModuleStyle;
    this[embeddedImageEmitsError$] = embeddedImageEmitsError;
    if (!qr_versions.QrVersions.isSupportedVersion(version)) dart.assertFailed(null, I[0], 80, 16, "QrVersions.isSupportedVersion(version)");
    this[_data] = null;
    this[_qrCode] = qr;
    qr_image.QrImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = qr_image.QrImage.prototype;
  dart.addTypeTests(qr_image.QrImage);
  dart.addTypeCaches(qr_image.QrImage);
  dart.setMethodSignature(qr_image.QrImage, () => ({
    __proto__: dart.getMethods(qr_image.QrImage.__proto__),
    createState: dart.fnType(qr_image._QrImageState, [])
  }));
  dart.setLibraryUri(qr_image.QrImage, I[1]);
  dart.setFieldSignature(qr_image.QrImage, () => ({
    __proto__: dart.getFields(qr_image.QrImage.__proto__),
    [_data]: dart.finalFieldType(dart.nullable(core.String)),
    [_qrCode]: dart.finalFieldType(dart.nullable(qr_code.QrCode)),
    backgroundColor: dart.finalFieldType(ui.Color),
    foregroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    version: dart.finalFieldType(core.int),
    errorCorrectionLevel: dart.finalFieldType(core.int),
    padding: dart.finalFieldType(edge_insets.EdgeInsets),
    size: dart.finalFieldType(dart.nullable(core.double)),
    errorStateBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(core.Object)]))),
    constrainErrorBounds: dart.finalFieldType(core.bool),
    gapless: dart.finalFieldType(core.bool),
    embeddedImage: dart.finalFieldType(dart.nullable(image_provider.ImageProvider$(core.Object))),
    embeddedImageStyle: dart.finalFieldType(dart.nullable(types.QrEmbeddedImageStyle)),
    embeddedImageEmitsError: dart.finalFieldType(core.bool),
    semanticsLabel: dart.finalFieldType(core.String),
    eyeStyle: dart.finalFieldType(types.QrEyeStyle),
    dataModuleStyle: dart.finalFieldType(types.QrDataModuleStyle)
  }));
  var _qr = dart.privateName(qr_image, "_qr");
  var ___QrImageState__validationResult = dart.privateName(qr_image, "_#_QrImageState#_validationResult");
  var ___QrImageState_streamListener = dart.privateName(qr_image, "_#_QrImageState#streamListener");
  var _validationResult = dart.privateName(qr_image, "_validationResult");
  var _errorWidget = dart.privateName(qr_image, "_errorWidget");
  var _loadQrImage = dart.privateName(qr_image, "_loadQrImage");
  var _qrWidget = dart.privateName(qr_image, "_qrWidget");
  qr_image._QrImageState = class _QrImageState extends framework.State$(qr_image.QrImage) {
    get [_validationResult]() {
      let t0;
      t0 = this[___QrImageState__validationResult];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_validationResult")) : t0;
    }
    set [_validationResult](library$32package$58qr_flutter$47src$47qr_image$46dart$58$58_validationResult$35param) {
      this[___QrImageState__validationResult] = library$32package$58qr_flutter$47src$47qr_image$46dart$58$58_validationResult$35param;
    }
    build(context) {
      if (this.widget[_data] != null) {
        this[_validationResult] = validator.QrValidator.validate({data: dart.nullCheck(this.widget[_data]), version: this.widget.version, errorCorrectionLevel: this.widget.errorCorrectionLevel});
        if (this[_validationResult].isValid) {
          this[_qr] = this[_validationResult].qrCode;
        } else {
          this[_qr] = null;
        }
      } else if (this.widget[_qrCode] != null) {
        this[_qr] = this.widget[_qrCode];
        this[_validationResult] = new validator.QrValidationResult.new({status: validator.QrValidationStatus.valid, qrCode: this[_qr]});
      }
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t0;
          if (!this[_validationResult].isValid) {
            return this[_errorWidget](context, constraints, this[_validationResult].error);
          }
          let widgetSize = (t0 = this.widget.size, t0 == null ? constraints.biggest.shortestSide : t0);
          if (this.widget.embeddedImage != null) {
            return new (T.FutureBuilderOfImage()).new({future: this[_loadQrImage](context, this.widget.embeddedImageStyle), builder: dart.fn((ctx, snapshot) => {
                if (snapshot.error != null) {
                  core.print("snapshot error: " + dart.str(snapshot.error));
                  if (this.widget.embeddedImageEmitsError) {
                    return this[_errorWidget](context, constraints, snapshot.error);
                  } else {
                    return this[_qrWidget](context, null, widgetSize);
                  }
                }
                if (snapshot.hasData) {
                  core.print("loaded image");
                  let loadedImage = snapshot.data;
                  return this[_qrWidget](context, loadedImage, widgetSize);
                } else {
                  return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
                }
              }, T.BuildContextAndAsyncSnapshotOfImageToWidget()), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
          } else {
            return this[_qrWidget](context, null, widgetSize);
          }
        }, T.BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    [_qrWidget](context, image, edgeLength) {
      let painter = new qr_painter.QrPainter.withQr({qr: dart.nullCheck(this[_qr]), color: this.widget.foregroundColor, gapless: this.widget.gapless, embeddedImageStyle: this.widget.embeddedImageStyle, embeddedImage: image, eyeStyle: this.widget.eyeStyle, dataModuleStyle: this.widget.dataModuleStyle});
      return new qr_image._QrContentView.new({edgeLength: edgeLength, backgroundColor: this.widget.backgroundColor, padding: this.widget.padding, semanticsLabel: this.widget.semanticsLabel, child: new basic.CustomPaint.new({painter: painter, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    [_errorWidget](context, constraints, error) {
      let t0;
      let errorWidget = this.widget.errorStateBuilder == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C[14] || CT.C14}) : dart.nullCheck(this.widget.errorStateBuilder)(context, error);
      let errorSideLength = this.widget.constrainErrorBounds ? (t0 = this.widget.size, t0 == null ? constraints.biggest.shortestSide : t0) : constraints.biggest.longestSide;
      return new qr_image._QrContentView.new({edgeLength: errorSideLength, backgroundColor: this.widget.backgroundColor, padding: this.widget.padding, child: errorWidget, semanticsLabel: this.widget.semanticsLabel, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
    get streamListener() {
      let t0;
      t0 = this[___QrImageState_streamListener];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("streamListener")) : t0;
    }
    set streamListener(streamListener$35param) {
      this[___QrImageState_streamListener] = streamListener$35param;
    }
    [_loadQrImage](buildContext, style) {
      return async.async(ui.Image, (function* _loadQrImage() {
        if (style != null) {
        }
        let mq = media_query.MediaQuery.of(buildContext);
        let completer = T.CompleterOfImage().new();
        let stream = dart.nullCheck(this.widget.embeddedImage).resolve(new image_provider.ImageConfiguration.new({devicePixelRatio: mq.devicePixelRatio}));
        this.streamListener = new image_stream.ImageStreamListener.new(dart.fn((info, err) => {
          stream.removeListener(this.streamListener);
          completer.complete(info.image);
        }, T.ImageInfoAndboolTovoid()), {onError: dart.fn((err, _) => {
            stream.removeListener(this.streamListener);
            completer.completeError(core.Object.as(err));
          }, T.dynamicAndStackTraceNTovoid())});
        stream.addListener(this.streamListener);
        return completer.future;
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new qr_image._QrImageState.new();
    }
  };
  (qr_image._QrImageState.new = function() {
    this[_qr] = null;
    this[___QrImageState__validationResult] = null;
    this[___QrImageState_streamListener] = null;
    qr_image._QrImageState.__proto__.new.call(this);
    ;
  }).prototype = qr_image._QrImageState.prototype;
  dart.addTypeTests(qr_image._QrImageState);
  dart.addTypeCaches(qr_image._QrImageState);
  dart.setMethodSignature(qr_image._QrImageState, () => ({
    __proto__: dart.getMethods(qr_image._QrImageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_qrWidget]: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(ui.Image), core.double]),
    [_errorWidget]: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints, dart.nullable(core.Object)]),
    [_loadQrImage]: dart.fnType(async.Future$(ui.Image), [framework.BuildContext, dart.nullable(types.QrEmbeddedImageStyle)])
  }));
  dart.setGetterSignature(qr_image._QrImageState, () => ({
    __proto__: dart.getGetters(qr_image._QrImageState.__proto__),
    [_validationResult]: validator.QrValidationResult,
    streamListener: image_stream.ImageStreamListener
  }));
  dart.setSetterSignature(qr_image._QrImageState, () => ({
    __proto__: dart.getSetters(qr_image._QrImageState.__proto__),
    [_validationResult]: validator.QrValidationResult,
    streamListener: image_stream.ImageStreamListener
  }));
  dart.setLibraryUri(qr_image._QrImageState, I[1]);
  dart.setFieldSignature(qr_image._QrImageState, () => ({
    __proto__: dart.getFields(qr_image._QrImageState.__proto__),
    [_qr]: dart.fieldType(dart.nullable(qr_code.QrCode)),
    [___QrImageState__validationResult]: dart.fieldType(dart.nullable(validator.QrValidationResult)),
    [___QrImageState_streamListener]: dart.fieldType(dart.nullable(image_stream.ImageStreamListener))
  }));
  qr_image._QrContentView = class _QrContentView extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let edgeLength = opts && 'edgeLength' in opts ? opts.edgeLength : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
      return new qr_image._QrContentView.new({edgeLength: edgeLength, child: child, backgroundColor: backgroundColor, padding: padding, semanticsLabel: semanticsLabel, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
    build(context) {
      return new basic.Semantics.new({label: this.semanticsLabel, child: new container.Container.new({width: this.edgeLength, height: this.edgeLength, color: this.backgroundColor, child: new basic.Padding.new({padding: dart.nullCheck(this.padding), child: this.child, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
  };
  (qr_image._QrContentView.new = function(opts) {
    let edgeLength = opts && 'edgeLength' in opts ? opts.edgeLength : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.edgeLength = edgeLength;
    this.child = child;
    this.backgroundColor = backgroundColor;
    this.padding = padding;
    this.semanticsLabel = semanticsLabel;
    qr_image._QrContentView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = qr_image._QrContentView.prototype;
  dart.addTypeTests(qr_image._QrContentView);
  dart.addTypeCaches(qr_image._QrContentView);
  dart.setMethodSignature(qr_image._QrContentView, () => ({
    __proto__: dart.getMethods(qr_image._QrContentView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(qr_image._QrContentView, I[1]);
  dart.setFieldSignature(qr_image._QrContentView, () => ({
    __proto__: dart.getFields(qr_image._QrContentView.__proto__),
    edgeLength: dart.finalFieldType(core.double),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsets)),
    child: dart.finalFieldType(framework.Widget),
    semanticsLabel: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.trackLibraries("packages/qr_flutter/src/qr_image.dart", {
    "package:qr_flutter/src/qr_image.dart": qr_image,
    "package:qr_flutter/qr_flutter.dart": qr_flutter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["qr_image.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/qr_flutter/src/qr_image.dart.lib.js"}');
  // Exports:
  return {
    src__qr_image: qr_image,
    qr_flutter: qr_flutter
  };
}));

//# sourceMappingURL=qr_image.dart.lib.js.map
