define(['dart_sdk', 'packages/flutter_map/src/layer/tile_layer/tile_provider/network_image_provider.dart', 'packages/http/retry.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/image_resolution.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter_map/src/core/point.dart', 'packages/tuple/tuple.dart', 'packages/flutter_map/src/core/bounds.dart', 'packages/flutter_map/src/core/util.dart', 'packages/flutter_map/src/geo/latlng_bounds.dart', 'packages/collection/src/equality.dart', 'packages/flutter/src/foundation/key.dart', 'packages/latlong2/latlong.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter_map/src/geo/crs/crs.dart', 'packages/flutter/src/widgets/color_filter.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/rendering/stack.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/image_stream.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/scheduler/ticker.dart', 'packages/flutter/src/widgets/layout_builder.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/collection/src/iterable_extensions.dart', 'packages/polylabel/src/polylabel_base.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter_map/src/gestures/map_events.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter_map/src/core/center_zoom.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter_map/src/gestures/interactive_flag.dart', 'packages/flutter_map/src/gestures/multi_finger_gesture.dart', 'packages/flutter/src/physics/spring_simulation.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter_map/src/gestures/latlng_tween.dart', 'packages/flutter/src/gestures/scale.dart', 'packages/positioned_tap_detector_2/positioned_tap_detector_2.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/team.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/gestures/monodrag.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web_dart(dart_sdk, packages__flutter_map__src__layer__tile_layer__tile_provider__network_image_provider$46dart, packages__http__retry$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__image_resolution$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter_map__src__core__point$46dart, packages__tuple__tuple$46dart, packages__flutter_map__src__core__bounds$46dart, packages__flutter_map__src__core__util$46dart, packages__flutter_map__src__geo__latlng_bounds$46dart, packages__collection__src__equality$46dart, packages__flutter__src__foundation__key$46dart, packages__latlong2__latlong$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter_map__src__geo__crs__crs$46dart, packages__flutter__src__widgets__color_filter$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__rendering__stack$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__image_stream$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__scheduler__ticker$46dart, packages__flutter__src__widgets__layout_builder$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__collection__src__iterable_extensions$46dart, packages__polylabel__src__polylabel_base$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter_map__src__gestures__map_events$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter_map__src__core__center_zoom$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter_map__src__gestures__interactive_flag$46dart, packages__flutter_map__src__gestures__multi_finger_gesture$46dart, packages__flutter__src__physics__spring_simulation$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter_map__src__gestures__latlng_tween$46dart, packages__flutter__src__gestures__scale$46dart, packages__positioned_tap_detector_2__positioned_tap_detector_2$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__team$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__gestures__monodrag$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const _engine = dart_sdk._engine;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const network_image_provider = packages__flutter_map__src__layer__tile_layer__tile_provider__network_image_provider$46dart.src__layer__tile_layer__tile_provider__network_image_provider;
  const retry = packages__http__retry$46dart.retry;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const image_resolution = packages__flutter__src__painting__image_resolution$46dart.src__painting__image_resolution;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const image = packages__flutter__src__widgets__title$46dart.src__widgets__image;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const binding = packages__flutter__src__widgets__title$46dart.src__widgets__binding;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const automatic_keep_alive = packages__flutter__src__widgets__title$46dart.src__widgets__automatic_keep_alive;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const point = packages__flutter_map__src__core__point$46dart.src__core__point;
  const tuple = packages__tuple__tuple$46dart.tuple;
  const bounds = packages__flutter_map__src__core__bounds$46dart.src__core__bounds;
  const util = packages__flutter_map__src__core__util$46dart.src__core__util;
  const latlng_bounds = packages__flutter_map__src__geo__latlng_bounds$46dart.src__geo__latlng_bounds;
  const equality = packages__collection__src__equality$46dart.src__equality;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const crs = packages__flutter_map__src__geo__crs__crs$46dart.src__geo__crs__crs;
  const color_filter = packages__flutter__src__widgets__color_filter$46dart.src__widgets__color_filter;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  const layout_builder = packages__flutter__src__widgets__layout_builder$46dart.src__widgets__layout_builder;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const iterable_extensions = packages__collection__src__iterable_extensions$46dart.src__iterable_extensions;
  const polylabel_base = packages__polylabel__src__polylabel_base$46dart.src__polylabel_base;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const map_events = packages__flutter_map__src__gestures__map_events$46dart.src__gestures__map_events;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const center_zoom = packages__flutter_map__src__core__center_zoom$46dart.src__core__center_zoom;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const interactive_flag = packages__flutter_map__src__gestures__interactive_flag$46dart.src__gestures__interactive_flag;
  const multi_finger_gesture = packages__flutter_map__src__gestures__multi_finger_gesture$46dart.src__gestures__multi_finger_gesture;
  const spring_simulation = packages__flutter__src__physics__spring_simulation$46dart.src__physics__spring_simulation;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const latlng_tween = packages__flutter_map__src__gestures__latlng_tween$46dart.src__gestures__latlng_tween;
  const scale = packages__flutter__src__gestures__scale$46dart.src__gestures__scale;
  const positioned_tap_detector_2 = packages__positioned_tap_detector_2__positioned_tap_detector_2$46dart.positioned_tap_detector_2;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const team = packages__flutter__src__gestures__team$46dart.src__gestures__team;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const monodrag = packages__flutter__src__gestures__monodrag$46dart.src__gestures__monodrag;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var tile_provider_web = Object.create(dart.library);
  var file_tile_provider_web = Object.create(dart.library);
  var base_tile_provider = Object.create(dart.library);
  var transformation_calculator = Object.create(dart.library);
  var animated_tile = Object.create(dart.library);
  var tile_widget = Object.create(dart.library);
  var tile_transformation = Object.create(dart.library);
  var tile_manager = Object.create(dart.library);
  var level$ = Object.create(dart.library);
  var tile_layer = Object.create(dart.library);
  var tile_builder = Object.create(dart.library);
  var tile = Object.create(dart.library);
  var coords = Object.create(dart.library);
  var polyline_layer = Object.create(dart.library);
  var plugin_api = Object.create(dart.library);
  var label = Object.create(dart.library);
  var polygon_layer = Object.create(dart.library);
  var overlay_image_layer = Object.create(dart.library);
  var marker_layer = Object.create(dart.library);
  var circle_layer = Object.create(dart.library);
  var map_state_widget = Object.create(dart.library);
  var map = Object.create(dart.library);
  var gestures = Object.create(dart.library);
  var flutter_map_state = Object.create(dart.library);
  var flutter_map = Object.create(dart.library);
  var $remove = dartx.remove;
  var $toInt = dartx.toInt;
  var $round = dartx.round;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  var $addAll = dartx.addAll;
  var $leftShift = dartx['<<'];
  var $isEmpty = dartx.isEmpty;
  var $modulo = dartx['%'];
  var $length = dartx.length;
  var $_get = dartx._get;
  var $keys = dartx.keys;
  var $add = dartx.add;
  var $toDouble = dartx.toDouble;
  var $values = dartx.values;
  var $toList = dartx.toList;
  var $compareTo = dartx.compareTo;
  var $sort = dartx.sort;
  var $entries = dartx.entries;
  var $floorToDouble = dartx.floorToDouble;
  var $containsKey = dartx.containsKey;
  var $roundToDouble = dartx.roundToDouble;
  var $abs = dartx.abs;
  var $ceilToDouble = dartx.ceilToDouble;
  var $split = dartx.split;
  var $take = dartx.take;
  var $join = dartx.join;
  var $map = dartx.map;
  var $toUpperCase = dartx.toUpperCase;
  var $forEach = dartx.forEach;
  var $floor = dartx.floor;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $last = dartx.last;
  var $first = dartx.first;
  var $indexOf = dartx.indexOf;
  var $runtimeType = dartx.runtimeType;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    IdentityMapOfString$String: () => (T$.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    LinkedHashMapOfString$String: () => (T$.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    IdentityMapOfdouble$Level: () => (T$.IdentityMapOfdouble$Level = dart.constFn(_js_helper.IdentityMap$(core.double, level$.Level)))(),
    JSArrayOfdouble: () => (T$.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    IdentityMapOfString$Tile: () => (T$.IdentityMapOfString$Tile = dart.constFn(_js_helper.IdentityMap$(core.String, tile.Tile)))(),
    ListOfTile: () => (T$.ListOfTile = dart.constFn(core.List$(tile.Tile)))(),
    TileAndTileToint: () => (T$.TileAndTileToint = dart.constFn(dart.fnType(core.int, [tile.Tile, tile.Tile])))(),
    LinkedHashMapOfString$Tile: () => (T$.LinkedHashMapOfString$Tile = dart.constFn(collection.LinkedHashMap$(core.String, tile.Tile)))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    CustomPointOfnum: () => (T$.CustomPointOfnum = dart.constFn(point.CustomPoint$(core.num)))(),
    CoordsOfdouble: () => (T$.CoordsOfdouble = dart.constFn(coords.Coords$(core.double)))(),
    MapOfString$String: () => (T$.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    StringAndMapOfString$StringToString: () => (T$.StringAndMapOfString$StringToString = dart.constFn(dart.fnType(core.String, [core.String, T$.MapOfString$String()])))(),
    voidTovoid: () => (T$.voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))(),
    MapEqualityOfString$String: () => (T$.MapEqualityOfString$String = dart.constFn(equality.MapEquality$(core.String, core.String)))(),
    DefaultEqualityOfNever: () => (T$.DefaultEqualityOfNever = dart.constFn(equality.DefaultEquality$(dart.Never)))(),
    IdentityMapOfdouble$TileTransformation: () => (T$.IdentityMapOfdouble$TileTransformation = dart.constFn(_js_helper.IdentityMap$(core.double, tile_transformation.TileTransformation)))(),
    JSArrayOfWidget: () => (T$.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ValueKeyOfString: () => (T$.ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))(),
    doubleTobool: () => (T$.doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))(),
    Tuple2Ofdouble$double: () => (T$.Tuple2Ofdouble$double = dart.constFn(tuple.Tuple2$(core.double, core.double)))(),
    BoundsOfnum: () => (T$.BoundsOfnum = dart.constFn(bounds.Bounds$(core.num)))(),
    JSArrayOfCoordsOfdouble: () => (T$.JSArrayOfCoordsOfdouble = dart.constFn(_interceptors.JSArray$(T$.CoordsOfdouble())))(),
    CoordsOfdoubleAndCoordsOfdoubleToint: () => (T$.CoordsOfdoubleAndCoordsOfdoubleToint = dart.constFn(dart.fnType(core.int, [T$.CoordsOfdouble(), T$.CoordsOfdouble()])))(),
    StringToString: () => (T$.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    StringAndStringTovoid: () => (T$.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    JSArrayOfnum: () => (T$.JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core.num)))(),
    ObjectToNull: () => (T$.ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))(),
    CoordsOfnum: () => (T$.CoordsOfnum = dart.constFn(coords.Coords$(core.num)))(),
    JSArrayOfOffset: () => (T$.JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))(),
    BuildContextAndBoxConstraintsToStack: () => (T$.BuildContextAndBoxConstraintsToStack = dart.constFn(dart.fnType(basic.Stack, [framework.BuildContext, box.BoxConstraints])))(),
    ColorTodouble: () => (T$.ColorTodouble = dart.constFn(dart.fnType(core.double, [ui.Color])))(),
    VoidToOffset: () => (T$.VoidToOffset = dart.constFn(dart.fnType(ui.Offset, [])))(),
    OffsetTodynamic: () => (T$.OffsetTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ui.Offset])))(),
    OffsetTodouble: () => (T$.OffsetTodouble = dart.constFn(dart.fnType(core.double, [ui.Offset])))(),
    PointOfdouble: () => (T$.PointOfdouble = dart.constFn(math.Point$(core.double)))(),
    OffsetToPointOfdouble: () => (T$.OffsetToPointOfdouble = dart.constFn(dart.fnType(T$.PointOfdouble(), [ui.Offset])))(),
    PointOfnum: () => (T$.PointOfnum = dart.constFn(math.Point$(core.num)))(),
    ListOfPointOfnum: () => (T$.ListOfPointOfnum = dart.constFn(core.List$(T$.PointOfnum())))(),
    JSArrayOfListOfPointOfnum: () => (T$.JSArrayOfListOfPointOfnum = dart.constFn(_interceptors.JSArray$(T$.ListOfPointOfnum())))(),
    ListOfOffset: () => (T$.ListOfOffset = dart.constFn(core.List$(ui.Offset)))(),
    ListOfListOfOffset: () => (T$.ListOfListOfOffset = dart.constFn(core.List$(T$.ListOfOffset())))(),
    intToListOfOffset: () => (T$.intToListOfOffset = dart.constFn(dart.fnType(T$.ListOfOffset(), [core.int])))(),
    AnchorPosOfAnchor: () => (T$.AnchorPosOfAnchor = dart.constFn(marker_layer.AnchorPos$(marker_layer.Anchor)))(),
    AnchorPosOfAnchorAlign: () => (T$.AnchorPosOfAnchorAlign = dart.constFn(marker_layer.AnchorPos$(marker_layer.AnchorAlign)))(),
    StreamControllerOfMapEvent: () => (T$.StreamControllerOfMapEvent = dart.constFn(async.StreamController$(map_events.MapEvent)))(),
    TweenOfOffset: () => (T$.TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))(),
    TweenOfdouble: () => (T$.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))(),
    DurationTovoid: () => (T$.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    GestureRecognizerFactoryOfGestureRecognizer: () => (T$.GestureRecognizerFactoryOfGestureRecognizer = dart.constFn(gesture_detector.GestureRecognizerFactory$(recognizer.GestureRecognizer)))(),
    LinkedMapOfType$GestureRecognizerFactoryOfGestureRecognizer: () => (T$.LinkedMapOfType$GestureRecognizerFactoryOfGestureRecognizer = dart.constFn(_js_helper.LinkedMap$(core.Type, T$.GestureRecognizerFactoryOfGestureRecognizer())))(),
    GestureRecognizerFactoryWithHandlersOfTapGestureRecognizer: () => (T$.GestureRecognizerFactoryWithHandlersOfTapGestureRecognizer = dart.constFn(gesture_detector.GestureRecognizerFactoryWithHandlers$(tap.TapGestureRecognizer)))(),
    VoidToTapGestureRecognizer: () => (T$.VoidToTapGestureRecognizer = dart.constFn(dart.fnType(tap.TapGestureRecognizer, [])))(),
    TapGestureRecognizerTovoid: () => (T$.TapGestureRecognizerTovoid = dart.constFn(dart.fnType(dart.void, [tap.TapGestureRecognizer])))(),
    GestureRecognizerFactoryWithHandlersOfLongPressGestureRecognizer: () => (T$.GestureRecognizerFactoryWithHandlersOfLongPressGestureRecognizer = dart.constFn(gesture_detector.GestureRecognizerFactoryWithHandlers$(long_press.LongPressGestureRecognizer)))(),
    VoidToLongPressGestureRecognizer: () => (T$.VoidToLongPressGestureRecognizer = dart.constFn(dart.fnType(long_press.LongPressGestureRecognizer, [])))(),
    LongPressGestureRecognizerTovoid: () => (T$.LongPressGestureRecognizerTovoid = dart.constFn(dart.fnType(dart.void, [long_press.LongPressGestureRecognizer])))(),
    GestureRecognizerFactoryWithHandlersOfVerticalDragGestureRecognizer: () => (T$.GestureRecognizerFactoryWithHandlersOfVerticalDragGestureRecognizer = dart.constFn(gesture_detector.GestureRecognizerFactoryWithHandlers$(monodrag.VerticalDragGestureRecognizer)))(),
    VoidToVerticalDragGestureRecognizer: () => (T$.VoidToVerticalDragGestureRecognizer = dart.constFn(dart.fnType(monodrag.VerticalDragGestureRecognizer, [])))(),
    DragUpdateDetailsTovoid: () => (T$.DragUpdateDetailsTovoid = dart.constFn(dart.fnType(dart.void, [drag_details.DragUpdateDetails])))(),
    VerticalDragGestureRecognizerTovoid: () => (T$.VerticalDragGestureRecognizerTovoid = dart.constFn(dart.fnType(dart.void, [monodrag.VerticalDragGestureRecognizer])))(),
    GestureRecognizerFactoryWithHandlersOfHorizontalDragGestureRecognizer: () => (T$.GestureRecognizerFactoryWithHandlersOfHorizontalDragGestureRecognizer = dart.constFn(gesture_detector.GestureRecognizerFactoryWithHandlers$(monodrag.HorizontalDragGestureRecognizer)))(),
    VoidToHorizontalDragGestureRecognizer: () => (T$.VoidToHorizontalDragGestureRecognizer = dart.constFn(dart.fnType(monodrag.HorizontalDragGestureRecognizer, [])))(),
    HorizontalDragGestureRecognizerTovoid: () => (T$.HorizontalDragGestureRecognizerTovoid = dart.constFn(dart.fnType(dart.void, [monodrag.HorizontalDragGestureRecognizer])))(),
    GestureRecognizerFactoryWithHandlersOfScaleGestureRecognizer: () => (T$.GestureRecognizerFactoryWithHandlersOfScaleGestureRecognizer = dart.constFn(gesture_detector.GestureRecognizerFactoryWithHandlers$(scale.ScaleGestureRecognizer)))(),
    VoidToScaleGestureRecognizer: () => (T$.VoidToScaleGestureRecognizer = dart.constFn(dart.fnType(scale.ScaleGestureRecognizer, [])))(),
    ScaleGestureRecognizerTovoid: () => (T$.ScaleGestureRecognizerTovoid = dart.constFn(dart.fnType(dart.void, [scale.ScaleGestureRecognizer])))(),
    BuildContextAndBoxConstraintsToMapStateInheritedWidget: () => (T$.BuildContextAndBoxConstraintsToMapStateInheritedWidget = dart.constFn(dart.fnType(map_state_widget.MapStateInheritedWidget, [framework.BuildContext, box.BoxConstraints])))(),
    CustomPointOfdouble: () => (T$.CustomPointOfdouble = dart.constFn(point.CustomPoint$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constMap(core.String, core.String, []);
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedTile",
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/animated_tile.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/animated_tile.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RawImage",
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/animated_tile.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TileWidget",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_widget.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedTile",
        [_Location_column]: 14,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_widget.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_widget.dart"
      });
    },
    get C7() {
      return C[7] = dart.constList([], core.String);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292927712.0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C11() {
      return C[11] = dart.fn(util.template, T$.StringAndMapOfString$StringToString());
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: tile_layer.EvictErrorTileStrategy.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TileLayer",
        [_Location_column]: 3,
        [_Location_line]: 239,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_layer.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: T$.DefaultEqualityOfNever().prototype
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: T$.MapEqualityOfString$String().prototype,
        [MapEquality__valueEquality]: C[15] || CT.C15,
        [MapEquality__keyEquality]: C[15] || CT.C15
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TileWidget",
        [_Location_column]: 9,
        [_Location_line]: 435,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_layer.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 28,
        [_Location_line]: 450,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_layer.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 464,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_layer.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Opacity",
        [_Location_column]: 12,
        [_Location_line]: 462,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_layer.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 50000
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: T$.CustomPointOfnum().prototype,
        [Point_y]: 1,
        [Point_x]: 1
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: tile_layer.EvictErrorTileStrategy.prototype,
        [_Enum__name]: "dispose",
        [_Enum_index]: 1
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: tile_layer.EvictErrorTileStrategy.prototype,
        [_Enum__name]: "notVisibleRespectMargin",
        [_Enum_index]: 2
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: tile_layer.EvictErrorTileStrategy.prototype,
        [_Enum__name]: "notVisible",
        [_Enum_index]: 3
      });
    },
    get C22() {
      return C[22] = dart.constList([C[12] || CT.C12, C[23] || CT.C23, C[24] || CT.C24, C[25] || CT.C25], tile_layer.EvictErrorTileStrategy);
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: T$.Tuple2Ofdouble$double().prototype,
        [Tuple2_item2]: 180,
        [Tuple2_item1]: -180
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: crs.Transformation.prototype,
        [Transformation_d]: 0.5,
        [Transformation_c]: -2.495320233665337e-8,
        [Transformation_b]: 0.5,
        [Transformation_a]: 2.495320233665337e-8
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: crs.SphericalMercator.prototype
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: crs.Epsg3857.prototype,
        [Earth_wrapLat]: null,
        [Earth_wrapLng]: C[27] || CT.C27,
        [Epsg3857_transformation]: C[28] || CT.C28,
        [Epsg3857_projection]: C[29] || CT.C29,
        [Epsg3857_code]: "EPSG:3857"
      });
    },
    get C30() {
      return C[30] = dart.fn(core.Uri.encodeComponent, T$.StringToString());
    },
    get C32() {
      return C[32] = dart.constList([-1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0], core.double);
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: _engine.CkMatrixColorFilter.prototype,
        [CkMatrixColorFilter_matrix]: C[32] || CT.C32
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ColorFiltered",
        [_Location_column]: 10,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ColorFiltered",
        [_Location_column]: 10,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 96,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 9,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 12,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 10,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 9,
        [_Location_line]: 127,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 12,
        [_Location_line]: 123,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 10,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_builder.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255360.0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967040.0
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: ui.StrokeCap.prototype,
        [_Enum__name]: "round",
        [_Enum_index]: 1
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: ui.StrokeJoin.prototype,
        [_Enum__name]: "round",
        [_Enum_index]: 1
      });
    },
    get C47() {
      return C[47] = dart.constList([], polyline_layer.Polyline);
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PolylineLayer",
        [_Location_column]: 3,
        [_Location_line]: 53,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/polyline_layer.dart"
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 31,
        [_Location_line]: 85,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/polyline_layer.dart"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 16,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/polyline_layer.dart"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutBuilder",
        [_Location_column]: 12,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/polyline_layer.dart"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: polygon_layer.PolygonLabelPlacement.prototype,
        [_Enum__name]: "polylabel",
        [_Enum_index]: 1
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: polygon_layer.PolygonLabelPlacement.prototype,
        [_Enum__name]: "centroid",
        [_Enum_index]: 0
      });
    },
    get C55() {
      return C[55] = dart.constList([C[54] || CT.C54, C[53] || CT.C53], polygon_layer.PolygonLabelPlacement);
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C57() {
      return C[57] = dart.constList([], polygon_layer.Polygon);
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PolygonLayer",
        [_Location_column]: 3,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/polygon_layer.dart"
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/polygon_layer.dart"
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 16,
        [_Location_line]: 112,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/polygon_layer.dart"
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutBuilder",
        [_Location_column]: 12,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/polygon_layer.dart"
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/overlay_image_layer.dart"
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 12,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/overlay_image_layer.dart"
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_Enum__name]: "medium",
        [_Enum_index]: 2
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 16,
        [_Location_line]: 124,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/overlay_image_layer.dart"
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 12,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/overlay_image_layer.dart"
      });
    },
    get C67() {
      return C[67] = dart.constList([], overlay_image_layer.BaseOverlayImage);
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OverlayImageLayer",
        [_Location_column]: 9,
        [_Location_line]: 135,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/overlay_image_layer.dart"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 14,
        [_Location_line]: 141,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/overlay_image_layer.dart"
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRect",
        [_Location_column]: 12,
        [_Location_line]: 140,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/overlay_image_layer.dart"
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: marker_layer.AnchorAlign.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 1
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: marker_layer.AnchorAlign.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 2
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: marker_layer.AnchorAlign.prototype,
        [_Enum__name]: "top",
        [_Enum_index]: 3
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: marker_layer.AnchorAlign.prototype,
        [_Enum__name]: "bottom",
        [_Enum_index]: 4
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: marker_layer.AnchorAlign.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 5
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: marker_layer.AnchorAlign.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C76() {
      return C[76] = dart.constList([C[77] || CT.C77, C[71] || CT.C71, C[72] || CT.C72, C[73] || CT.C73, C[74] || CT.C74, C[75] || CT.C75], marker_layer.AnchorAlign);
    },
    get C78() {
      return C[78] = dart.constList([], marker_layer.Marker);
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MarkerLayer",
        [_Location_column]: 9,
        [_Location_line]: 153,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/marker_layer.dart"
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 23,
        [_Location_line]: 190,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/marker_layer.dart"
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 9,
        [_Location_line]: 199,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/marker_layer.dart"
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 12,
        [_Location_line]: 209,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/marker_layer.dart"
      });
    },
    get C84() {
      return C[84] = dart.constList([], circle_layer.CircleMarker);
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleLayer",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/circle_layer.dart"
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: latlong.Vincenty.prototype
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: latlong.Distance.prototype,
        [Distance__calculator]: C[87] || CT.C87,
        [Distance__roundResult]: true,
        [Distance__radius]: 6378137
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 13,
        [_Location_line]: 48,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/circle_layer.dart"
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 16,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/circle_layer.dart"
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutBuilder",
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/circle_layer.dart"
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MapStateInheritedWidget",
        [_Location_column]: 9,
        [_Location_line]: 7,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/map_state_widget.dart"
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 12
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: flutter_map.FitBoundsOptions.prototype,
        [FitBoundsOptions_inside]: false,
        [FitBoundsOptions_zoom]: null,
        [FitBoundsOptions_maxZoom]: 17,
        [FitBoundsOptions_padding]: C[93] || CT.C93
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 350000
      });
    },
    get C95() {
      return C[95] = dart.constList([], framework.Widget);
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlutterMap",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/flutter_map.dart"
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RawGestureDetector",
        [_Location_column]: 17,
        [_Location_line]: 193,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PositionedTapDetector2",
        [_Location_column]: 18,
        [_Location_line]: 187,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Listener",
        [_Location_column]: 16,
        [_Location_line]: 181,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MapStateInheritedWidget",
        [_Location_column]: 14,
        [_Location_line]: 179,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutBuilder",
        [_Location_column]: 12,
        [_Location_line]: 172,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 22,
        [_Location_line]: 211,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 30,
        [_Location_line]: 209,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OverflowBox",
        [_Location_column]: 11,
        [_Location_line]: 204,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 11,
        [_Location_line]: 216,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 14,
        [_Location_line]: 202,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRect",
        [_Location_column]: 12,
        [_Location_line]: 201,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/map/flutter_map_state.dart"
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: T$.CustomPointOfdouble().prototype,
        [Point_y]: 0,
        [Point_x]: 0
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: flutter_map.FitBoundsOptions.prototype,
        [FitBoundsOptions_inside]: false,
        [FitBoundsOptions_zoom]: null,
        [FitBoundsOptions_maxZoom]: 17,
        [FitBoundsOptions_padding]: C[110] || CT.C110
      });
    }
  }, false);
  var C = Array(111).fill(void 0);
  var I = [
    "package:flutter_map/src/layer/tile_layer/tile_provider/base_tile_provider.dart",
    "package:flutter_map/src/layer/tile_layer/tile_provider/tile_provider_web.dart",
    "package:flutter_map/src/layer/tile_layer/tile_provider/file_tile_provider_web.dart",
    "package:flutter_map/src/layer/tile_layer/transformation_calculator.dart",
    "package:flutter_map/src/layer/tile_layer/animated_tile.dart",
    "package:flutter_map/src/layer/tile_layer/tile_widget.dart",
    "package:flutter_map/src/layer/tile_layer/tile_transformation.dart",
    "package:flutter_map/src/layer/tile_layer/tile_manager.dart",
    "package:flutter_map/src/layer/tile_layer/level.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_layer.dart",
    "package:flutter_map/src/layer/tile_layer/tile_layer.dart",
    "package:flutter_map/src/layer/tile_layer/tile.dart",
    "package:flutter_map/src/layer/tile_layer/coords.dart",
    "package:flutter_map/src/layer/polyline_layer.dart",
    "package:flutter_map/src/layer/label.dart",
    "package:flutter_map/src/layer/polygon_layer.dart",
    "package:flutter_map/src/layer/overlay_image_layer.dart",
    "package:flutter_map/src/layer/marker_layer.dart",
    "package:flutter_map/src/layer/circle_layer.dart",
    "package:flutter_map/src/map/map_state_widget.dart",
    "package:flutter_map/src/map/map.dart",
    "package:flutter_map/flutter_map.dart",
    "package:flutter_map/src/gestures/gestures.dart",
    "package:flutter_map/src/map/flutter_map_state.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/flutter_map.dart"
  ];
  var __NetworkTileProvider_retryClient = dart.privateName(tile_provider_web, "_#NetworkTileProvider#retryClient");
  var headers$ = dart.privateName(base_tile_provider, "TileProvider.headers");
  var _getZoomForUrl = dart.privateName(base_tile_provider, "_getZoomForUrl");
  base_tile_provider.TileProvider = class TileProvider extends core.Object {
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      this[headers$] = value;
    }
    dispose() {
    }
    getTileUrl(coords, options) {
      let t0, t2, t1, t0$;
      let urlTemplate = options.wmsOptions != null ? dart.nullCheck(options.wmsOptions).getUrl(coords, options.tileSize[$toInt](), options.retinaMode) : options.urlTemplate;
      let z = this[_getZoomForUrl](coords, options);
      let data = new (T$.IdentityMapOfString$String()).from(["x", coords.x[$round]()[$toString](), "y", coords.y[$round]()[$toString](), "z", z[$round]()[$toString](), "s", this.getSubdomain(coords, options), "r", "@2x"]);
      if (options.tms) {
        data[$_set]("y", this.invertY(coords.y[$round](), z[$round]())[$toString]());
      }
      let allOpts = (t0 = T$.LinkedHashMapOfString$String().from(data), (() => {
        t0[$addAll](options.additionalOptions);
        return t0;
      })());
      t0$ = options;
      t1 = dart.nullCheck(urlTemplate);
      t2 = allOpts;
      return t0$.templateFunction(t1, t2);
    }
    [_getZoomForUrl](coords, options) {
      let zoom = coords.z;
      if (options.zoomReverse) {
        zoom = options.maxZoom - zoom;
      }
      return zoom = zoom + options.zoomOffset;
    }
    invertY(y, z) {
      return (1)[$leftShift](z) - 1 - y;
    }
    getSubdomain(coords, options) {
      if (options.subdomains[$isEmpty]) {
        return "";
      }
      let index = (coords.x + coords.y)[$round]()[$modulo](options.subdomains[$length]);
      return options.subdomains[$_get](index);
    }
  };
  (base_tile_provider.TileProvider.new = function(opts) {
    let headers = opts && 'headers' in opts ? opts.headers : C[0] || CT.C0;
    this[headers$] = headers;
    ;
  }).prototype = base_tile_provider.TileProvider.prototype;
  dart.addTypeTests(base_tile_provider.TileProvider);
  dart.addTypeCaches(base_tile_provider.TileProvider);
  dart.setMethodSignature(base_tile_provider.TileProvider, () => ({
    __proto__: dart.getMethods(base_tile_provider.TileProvider.__proto__),
    dispose: dart.fnType(dart.void, []),
    getTileUrl: dart.fnType(core.String, [coords.Coords$(core.num), tile_layer.TileLayer]),
    [_getZoomForUrl]: dart.fnType(core.double, [coords.Coords$(core.num), tile_layer.TileLayer]),
    invertY: dart.fnType(core.int, [core.int, core.int]),
    getSubdomain: dart.fnType(core.String, [coords.Coords$(core.num), tile_layer.TileLayer])
  }));
  dart.setLibraryUri(base_tile_provider.TileProvider, I[0]);
  dart.setFieldSignature(base_tile_provider.TileProvider, () => ({
    __proto__: dart.getFields(base_tile_provider.TileProvider.__proto__),
    headers: dart.fieldType(core.Map$(core.String, core.String))
  }));
  tile_provider_web.NetworkTileProvider = class NetworkTileProvider extends base_tile_provider.TileProvider {
    static ['_#new#tearOff'](opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return new tile_provider_web.NetworkTileProvider.new({headers: headers});
    }
    get retryClient() {
      let t0;
      t0 = this[__NetworkTileProvider_retryClient];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("retryClient")) : t0;
    }
    set retryClient(retryClient$35param) {
      if (this[__NetworkTileProvider_retryClient] == null)
        this[__NetworkTileProvider_retryClient] = retryClient$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("retryClient"));
    }
    getImage(coords, options) {
      let t0;
      return new network_image_provider.FMNetworkImageProvider.new(this.getTileUrl(coords, options), {headers: (t0 = this.headers, (() => {
          t0[$remove]("User-Agent");
          return t0;
        })())});
    }
  };
  (tile_provider_web.NetworkTileProvider.new = function(opts) {
    let t0;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    this[__NetworkTileProvider_retryClient] = null;
    tile_provider_web.NetworkTileProvider.__proto__.new.call(this);
    this.headers = (t0 = headers, t0 == null ? new (T$.IdentityMapOfString$String()).new() : t0);
  }).prototype = tile_provider_web.NetworkTileProvider.prototype;
  dart.addTypeTests(tile_provider_web.NetworkTileProvider);
  dart.addTypeCaches(tile_provider_web.NetworkTileProvider);
  dart.setMethodSignature(tile_provider_web.NetworkTileProvider, () => ({
    __proto__: dart.getMethods(tile_provider_web.NetworkTileProvider.__proto__),
    getImage: dart.fnType(image_provider.ImageProvider$(core.Object), [coords.Coords$(core.num), tile_layer.TileLayer])
  }));
  dart.setGetterSignature(tile_provider_web.NetworkTileProvider, () => ({
    __proto__: dart.getGetters(tile_provider_web.NetworkTileProvider.__proto__),
    retryClient: retry.RetryClient
  }));
  dart.setSetterSignature(tile_provider_web.NetworkTileProvider, () => ({
    __proto__: dart.getSetters(tile_provider_web.NetworkTileProvider.__proto__),
    retryClient: retry.RetryClient
  }));
  dart.setLibraryUri(tile_provider_web.NetworkTileProvider, I[1]);
  dart.setFieldSignature(tile_provider_web.NetworkTileProvider, () => ({
    __proto__: dart.getFields(tile_provider_web.NetworkTileProvider.__proto__),
    [__NetworkTileProvider_retryClient]: dart.fieldType(dart.nullable(retry.RetryClient))
  }));
  tile_provider_web.NetworkNoRetryTileProvider = class NetworkNoRetryTileProvider extends base_tile_provider.TileProvider {
    static ['_#new#tearOff'](opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return new tile_provider_web.NetworkNoRetryTileProvider.new({headers: headers});
    }
    getImage(coords, options) {
      let t0;
      return new _network_image_web.NetworkImage.new(this.getTileUrl(coords, options), {headers: (t0 = this.headers, (() => {
          t0[$remove]("User-Agent");
          return t0;
        })())});
    }
  };
  (tile_provider_web.NetworkNoRetryTileProvider.new = function(opts) {
    let t0;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    tile_provider_web.NetworkNoRetryTileProvider.__proto__.new.call(this);
    this.headers = (t0 = headers, t0 == null ? new (T$.IdentityMapOfString$String()).new() : t0);
  }).prototype = tile_provider_web.NetworkNoRetryTileProvider.prototype;
  dart.addTypeTests(tile_provider_web.NetworkNoRetryTileProvider);
  dart.addTypeCaches(tile_provider_web.NetworkNoRetryTileProvider);
  dart.setMethodSignature(tile_provider_web.NetworkNoRetryTileProvider, () => ({
    __proto__: dart.getMethods(tile_provider_web.NetworkNoRetryTileProvider.__proto__),
    getImage: dart.fnType(image_provider.ImageProvider$(core.Object), [coords.Coords$(core.num), tile_layer.TileLayer])
  }));
  dart.setLibraryUri(tile_provider_web.NetworkNoRetryTileProvider, I[1]);
  tile_provider_web.AssetTileProvider = class AssetTileProvider extends base_tile_provider.TileProvider {
    static ['_#new#tearOff']() {
      return new tile_provider_web.AssetTileProvider.new();
    }
    getImage(coords, options) {
      return new image_resolution.AssetImage.new(this.getTileUrl(coords, options));
    }
  };
  (tile_provider_web.AssetTileProvider.new = function() {
    tile_provider_web.AssetTileProvider.__proto__.new.call(this);
    ;
  }).prototype = tile_provider_web.AssetTileProvider.prototype;
  dart.addTypeTests(tile_provider_web.AssetTileProvider);
  dart.addTypeCaches(tile_provider_web.AssetTileProvider);
  dart.setMethodSignature(tile_provider_web.AssetTileProvider, () => ({
    __proto__: dart.getMethods(tile_provider_web.AssetTileProvider.__proto__),
    getImage: dart.fnType(image_provider.ImageProvider$(core.Object), [coords.Coords$(core.num), tile_layer.TileLayer])
  }));
  dart.setLibraryUri(tile_provider_web.AssetTileProvider, I[1]);
  var customTileUrl$ = dart.privateName(tile_provider_web, "CustomTileProvider.customTileUrl");
  tile_provider_web.CustomTileProvider = class CustomTileProvider extends base_tile_provider.TileProvider {
    get customTileUrl() {
      return this[customTileUrl$];
    }
    set customTileUrl(value) {
      super.customTileUrl = value;
    }
    static ['_#new#tearOff'](opts) {
      let customTileUrl = opts && 'customTileUrl' in opts ? opts.customTileUrl : null;
      return new tile_provider_web.CustomTileProvider.new({customTileUrl: customTileUrl});
    }
    getTileUrl(coords, options) {
      let t1, t0;
      t0 = coords;
      t1 = options;
      return this.customTileUrl(t0, t1);
    }
    getImage(coords, options) {
      return new image_resolution.AssetImage.new(this.getTileUrl(coords, options));
    }
  };
  (tile_provider_web.CustomTileProvider.new = function(opts) {
    let customTileUrl = opts && 'customTileUrl' in opts ? opts.customTileUrl : null;
    this[customTileUrl$] = customTileUrl;
    tile_provider_web.CustomTileProvider.__proto__.new.call(this);
    ;
  }).prototype = tile_provider_web.CustomTileProvider.prototype;
  dart.addTypeTests(tile_provider_web.CustomTileProvider);
  dart.addTypeCaches(tile_provider_web.CustomTileProvider);
  dart.setMethodSignature(tile_provider_web.CustomTileProvider, () => ({
    __proto__: dart.getMethods(tile_provider_web.CustomTileProvider.__proto__),
    getImage: dart.fnType(image_provider.ImageProvider$(core.Object), [coords.Coords$(core.num), tile_layer.TileLayer])
  }));
  dart.setLibraryUri(tile_provider_web.CustomTileProvider, I[1]);
  dart.setFieldSignature(tile_provider_web.CustomTileProvider, () => ({
    __proto__: dart.getFields(tile_provider_web.CustomTileProvider.__proto__),
    customTileUrl: dart.finalFieldType(dart.fnType(core.String, [coords.Coords$(core.num), tile_layer.TileLayer]))
  }));
  file_tile_provider_web.FileTileProvider = class FileTileProvider extends base_tile_provider.TileProvider {
    static ['_#new#tearOff']() {
      return new file_tile_provider_web.FileTileProvider.new();
    }
    getImage(coords, options) {
      return new _network_image_web.NetworkImage.new(this.getTileUrl(coords, options));
    }
  };
  (file_tile_provider_web.FileTileProvider.new = function() {
    file_tile_provider_web.FileTileProvider.__proto__.new.call(this);
    ;
  }).prototype = file_tile_provider_web.FileTileProvider.prototype;
  dart.addTypeTests(file_tile_provider_web.FileTileProvider);
  dart.addTypeCaches(file_tile_provider_web.FileTileProvider);
  dart.setMethodSignature(file_tile_provider_web.FileTileProvider, () => ({
    __proto__: dart.getMethods(file_tile_provider_web.FileTileProvider.__proto__),
    getImage: dart.fnType(image_provider.ImageProvider$(core.Object), [coords.Coords$(core.num), tile_layer.TileLayer])
  }));
  dart.setLibraryUri(file_tile_provider_web.FileTileProvider, I[2]);
  var _levels = dart.privateName(transformation_calculator, "_levels");
  transformation_calculator.TransformationCalculator = class TransformationCalculator extends core.Object {
    levelAt(zoom) {
      return this[_levels][$_get](zoom);
    }
    getOrCreateLevel(zoom, map) {
      let t2, t1, t0;
      let level = this[_levels][$_get](zoom);
      if (level != null) return level;
      t0 = this[_levels];
      t1 = zoom;
      t2 = new level$.Level.new({origin: map.project(map.unproject(map.pixelOrigin), zoom), zoom: zoom});
      t0[$_set](t1, t2);
      return t2;
    }
    whereLevel(test) {
      let result = T$.JSArrayOfdouble().of([]);
      for (let levelZoom of this[_levels][$keys]) {
        if (test(levelZoom)) result[$add](levelZoom);
      }
      return result;
    }
    removeLevel(levelZoom) {
      this[_levels][$remove](levelZoom);
    }
    transformationFor(levelZoom, map) {
      let level = dart.nullCheck(this[_levels][$_get](levelZoom));
      let scale = map.getZoomScale(map.zoom, level.zoom);
      let pixelOrigin = map.getNewPixelOrigin(map.center, map.zoom).round();
      let translate = level.origin.multiplyBy(scale)['-'](pixelOrigin);
      return new tile_transformation.TileTransformation.new({scale: scale, translate: translate});
    }
    static ['_#new#tearOff']() {
      return new transformation_calculator.TransformationCalculator.new();
    }
  };
  (transformation_calculator.TransformationCalculator.new = function() {
    this[_levels] = new (T$.IdentityMapOfdouble$Level()).new();
    ;
  }).prototype = transformation_calculator.TransformationCalculator.prototype;
  dart.addTypeTests(transformation_calculator.TransformationCalculator);
  dart.addTypeCaches(transformation_calculator.TransformationCalculator);
  dart.setMethodSignature(transformation_calculator.TransformationCalculator, () => ({
    __proto__: dart.getMethods(transformation_calculator.TransformationCalculator.__proto__),
    levelAt: dart.fnType(dart.nullable(level$.Level), [core.double]),
    getOrCreateLevel: dart.fnType(level$.Level, [core.double, flutter_map_state.FlutterMapState]),
    whereLevel: dart.fnType(core.List$(core.double), [dart.fnType(core.bool, [core.double])]),
    removeLevel: dart.fnType(dart.void, [core.double]),
    transformationFor: dart.fnType(tile_transformation.TileTransformation, [core.double, flutter_map_state.FlutterMapState])
  }));
  dart.setLibraryUri(transformation_calculator.TransformationCalculator, I[3]);
  dart.setFieldSignature(transformation_calculator.TransformationCalculator, () => ({
    __proto__: dart.getFields(transformation_calculator.TransformationCalculator.__proto__),
    [_levels]: dart.finalFieldType(core.Map$(core.double, level$.Level))
  }));
  var tile$ = dart.privateName(animated_tile, "AnimatedTile.tile");
  var errorImage$ = dart.privateName(animated_tile, "AnimatedTile.errorImage");
  var tileBuilder$ = dart.privateName(animated_tile, "AnimatedTile.tileBuilder");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  animated_tile.AnimatedTile = class AnimatedTile extends framework.StatefulWidget {
    get tile() {
      return this[tile$];
    }
    set tile(value) {
      super.tile = value;
    }
    get errorImage() {
      return this[errorImage$];
    }
    set errorImage(value) {
      super.errorImage = value;
    }
    get tileBuilder() {
      return this[tileBuilder$];
    }
    set tileBuilder(value) {
      super.tileBuilder = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let tile = opts && 'tile' in opts ? opts.tile : null;
      let errorImage = opts && 'errorImage' in opts ? opts.errorImage : null;
      let tileBuilder = opts && 'tileBuilder' in opts ? opts.tileBuilder : null;
      return new animated_tile.AnimatedTile.new({key: key, tile: tile, errorImage: errorImage, tileBuilder: tileBuilder, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    createState() {
      return new animated_tile._AnimatedTileState.new();
    }
  };
  (animated_tile.AnimatedTile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let tile = opts && 'tile' in opts ? opts.tile : null;
    let errorImage = opts && 'errorImage' in opts ? opts.errorImage : null;
    let tileBuilder = opts && 'tileBuilder' in opts ? opts.tileBuilder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[tile$] = tile;
    this[errorImage$] = errorImage;
    this[tileBuilder$] = tileBuilder;
    animated_tile.AnimatedTile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = animated_tile.AnimatedTile.prototype;
  dart.addTypeTests(animated_tile.AnimatedTile);
  dart.addTypeCaches(animated_tile.AnimatedTile);
  dart.setMethodSignature(animated_tile.AnimatedTile, () => ({
    __proto__: dart.getMethods(animated_tile.AnimatedTile.__proto__),
    createState: dart.fnType(framework.State$(animated_tile.AnimatedTile), [])
  }));
  dart.setLibraryUri(animated_tile.AnimatedTile, I[4]);
  dart.setFieldSignature(animated_tile.AnimatedTile, () => ({
    __proto__: dart.getFields(animated_tile.AnimatedTile.__proto__),
    tile: dart.finalFieldType(tile.Tile),
    errorImage: dart.finalFieldType(dart.nullable(image_provider.ImageProvider$(core.Object))),
    tileBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, tile.Tile])))
  }));
  var _handleChange = dart.privateName(animated_tile, "_handleChange");
  animated_tile._AnimatedTileState = class _AnimatedTileState extends framework.State$(animated_tile.AnimatedTile) {
    build(context) {
      let t0;
      let tileWidget = this.widget.tile.loadError && this.widget.errorImage != null ? new image.Image.new({image: dart.nullCheck(this.widget.errorImage), fit: box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}) : new basic.RawImage.new({image: (t0 = this.widget.tile.imageInfo, t0 == null ? null : t0.image), fit: box_fit.BoxFit.fill, opacity: this.widget.tile.animationController, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
      return this.widget.tileBuilder == null ? tileWidget : dart.nullCheck(this.widget.tileBuilder)(context, tileWidget, this.widget.tile);
    }
    initState() {
      super.initState();
      if (this.widget.tile.animationController != null) {
        dart.nullCheck(this.widget.tile.animationController).addListener(dart.bind(this, _handleChange));
        this.listenerAttached = true;
      }
    }
    dispose() {
      let t0;
      if (this.listenerAttached) {
        t0 = this.widget.tile.animationController;
        t0 == null ? null : t0.removeListener(dart.bind(this, _handleChange));
      }
      super.dispose();
    }
    didUpdateWidget(oldWidget) {
      animated_tile.AnimatedTile.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!this.listenerAttached && this.widget.tile.animationController != null) {
        dart.nullCheck(this.widget.tile.animationController).addListener(dart.bind(this, _handleChange));
        this.listenerAttached = true;
      }
    }
    [_handleChange]() {
      if (this.mounted) {
        this.setState(dart.fn(() => {
        }, T$.VoidTovoid()));
      }
    }
    static ['_#new#tearOff']() {
      return new animated_tile._AnimatedTileState.new();
    }
  };
  (animated_tile._AnimatedTileState.new = function() {
    this.listenerAttached = false;
    animated_tile._AnimatedTileState.__proto__.new.call(this);
    ;
  }).prototype = animated_tile._AnimatedTileState.prototype;
  dart.addTypeTests(animated_tile._AnimatedTileState);
  dart.addTypeCaches(animated_tile._AnimatedTileState);
  dart.setMethodSignature(animated_tile._AnimatedTileState, () => ({
    __proto__: dart.getMethods(animated_tile._AnimatedTileState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_handleChange]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(animated_tile._AnimatedTileState, I[4]);
  dart.setFieldSignature(animated_tile._AnimatedTileState, () => ({
    __proto__: dart.getFields(animated_tile._AnimatedTileState.__proto__),
    listenerAttached: dart.fieldType(core.bool)
  }));
  var tile$0 = dart.privateName(tile_widget, "TileWidget.tile");
  var size$ = dart.privateName(tile_widget, "TileWidget.size");
  var tileTransformation$ = dart.privateName(tile_widget, "TileWidget.tileTransformation");
  var errorImage$0 = dart.privateName(tile_widget, "TileWidget.errorImage");
  var tileBuilder$0 = dart.privateName(tile_widget, "TileWidget.tileBuilder");
  tile_widget.TileWidget = class TileWidget extends framework.StatelessWidget {
    get tile() {
      return this[tile$0];
    }
    set tile(value) {
      super.tile = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get tileTransformation() {
      return this[tileTransformation$];
    }
    set tileTransformation(value) {
      super.tileTransformation = value;
    }
    get errorImage() {
      return this[errorImage$0];
    }
    set errorImage(value) {
      super.errorImage = value;
    }
    get tileBuilder() {
      return this[tileBuilder$0];
    }
    set tileBuilder(value) {
      super.tileBuilder = value;
    }
    static ['_#new#tearOff'](opts) {
      let tile = opts && 'tile' in opts ? opts.tile : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let tileTransformation = opts && 'tileTransformation' in opts ? opts.tileTransformation : null;
      let errorImage = opts && 'errorImage' in opts ? opts.errorImage : null;
      let tileBuilder = opts && 'tileBuilder' in opts ? opts.tileBuilder : null;
      let key = opts && 'key' in opts ? opts.key : null;
      return new tile_widget.TileWidget.new({tile: tile, size: size, tileTransformation: tileTransformation, errorImage: errorImage, tileBuilder: tileBuilder, key: key, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    build(context) {
      let pos = this.tile.tilePos.multiplyBy(this.tileTransformation.scale)['+'](this.tileTransformation.translate);
      let width = this.size.x * this.tileTransformation.scale;
      let height = this.size.y * this.tileTransformation.scale;
      return new basic.Positioned.new({left: pos.x[$toDouble](), top: pos.y[$toDouble](), width: width[$toDouble](), height: height[$toDouble](), child: new animated_tile.AnimatedTile.new({tile: this.tile, errorImage: this.errorImage, tileBuilder: this.tileBuilder, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
  };
  (tile_widget.TileWidget.new = function(opts) {
    let tile = opts && 'tile' in opts ? opts.tile : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let tileTransformation = opts && 'tileTransformation' in opts ? opts.tileTransformation : null;
    let errorImage = opts && 'errorImage' in opts ? opts.errorImage : null;
    let tileBuilder = opts && 'tileBuilder' in opts ? opts.tileBuilder : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[tile$0] = tile;
    this[size$] = size;
    this[tileTransformation$] = tileTransformation;
    this[errorImage$0] = errorImage;
    this[tileBuilder$0] = tileBuilder;
    tile_widget.TileWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tile_widget.TileWidget.prototype;
  dart.addTypeTests(tile_widget.TileWidget);
  dart.addTypeCaches(tile_widget.TileWidget);
  dart.setMethodSignature(tile_widget.TileWidget, () => ({
    __proto__: dart.getMethods(tile_widget.TileWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(tile_widget.TileWidget, I[5]);
  dart.setFieldSignature(tile_widget.TileWidget, () => ({
    __proto__: dart.getFields(tile_widget.TileWidget.__proto__),
    tile: dart.finalFieldType(tile.Tile),
    size: dart.finalFieldType(point.CustomPoint$(core.num)),
    tileTransformation: dart.finalFieldType(tile_transformation.TileTransformation),
    errorImage: dart.finalFieldType(dart.nullable(image_provider.ImageProvider$(core.Object))),
    tileBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, tile.Tile])))
  }));
  var scale$ = dart.privateName(tile_transformation, "TileTransformation.scale");
  var translate$ = dart.privateName(tile_transformation, "TileTransformation.translate");
  tile_transformation.TileTransformation = class TileTransformation extends core.Object {
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get translate() {
      return this[translate$];
    }
    set translate(value) {
      super.translate = value;
    }
    static ['_#new#tearOff'](opts) {
      let scale = opts && 'scale' in opts ? opts.scale : null;
      let translate = opts && 'translate' in opts ? opts.translate : null;
      return new tile_transformation.TileTransformation.new({scale: scale, translate: translate});
    }
  };
  (tile_transformation.TileTransformation.new = function(opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let translate = opts && 'translate' in opts ? opts.translate : null;
    this[scale$] = scale;
    this[translate$] = translate;
    ;
  }).prototype = tile_transformation.TileTransformation.prototype;
  dart.addTypeTests(tile_transformation.TileTransformation);
  dart.addTypeCaches(tile_transformation.TileTransformation);
  dart.setLibraryUri(tile_transformation.TileTransformation, I[6]);
  dart.setFieldSignature(tile_transformation.TileTransformation, () => ({
    __proto__: dart.getFields(tile_transformation.TileTransformation.__proto__),
    scale: dart.finalFieldType(core.double),
    translate: dart.finalFieldType(point.CustomPoint$(core.num))
  }));
  var _tiles = dart.privateName(tile_manager, "_tiles");
  var _retainParent = dart.privateName(tile_manager, "_retainParent");
  var _retainChildren = dart.privateName(tile_manager, "_retainChildren");
  tile_manager.TileManager = class TileManager extends core.Object {
    all() {
      return this[_tiles][$values][$toList]();
    }
    sortedByDistanceToZoomAscending(maxZoom, currentZoom) {
      let t1;
      t1 = (() => {
        let t0 = T$.ListOfTile().of(this[_tiles][$values]);
        return t0;
      })();
      return (() => {
        t1[$sort](dart.fn((a, b) => a.zIndex(maxZoom, currentZoom)[$compareTo](b.zIndex(maxZoom, currentZoom)), T$.TileAndTileToint()));
        return t1;
      })();
    }
    anyWithZoomLevel(zoomLevel) {
      for (let tile of this[_tiles][$values]) {
        if (tile.coords.z === zoomLevel) {
          return true;
        }
      }
      return false;
    }
    tileAt(coords) {
      return this[_tiles][$_get](coords.key);
    }
    get allLoaded() {
      for (let entry of this[_tiles][$entries]) {
        if (entry.value.loaded == null) {
          return false;
        }
      }
      return true;
    }
    allWithinZoom(minZoom, maxZoom) {
      for (let tile of this[_tiles][$values]) {
        if (tile.coords.z > maxZoom || tile.coords.z < minZoom) {
          return false;
        }
      }
      return true;
    }
    markTileWithCoordsAsCurrent(coords) {
      let tile = this[_tiles][$_get](coords.key);
      if (tile != null) {
        tile.current = true;
        return true;
      } else {
        return false;
      }
    }
    add(coords, tile) {
      this[_tiles][$_set](coords.key, tile);
    }
    remove(key, evictStrategy) {
      let tile = this[_tiles][$_get](key);
      if (tile == null) {
        return;
      }
      tile.dispose(tile.loadError && evictStrategy !== tile_layer.EvictErrorTileStrategy.none);
      this[_tiles][$remove](key);
    }
    removeAll(evictStrategy) {
      let toRemove = T$.LinkedHashMapOfString$Tile().from(this[_tiles]);
      for (let key of toRemove[$keys]) {
        this.remove(key, evictStrategy);
      }
    }
    removeAtZoom(zoom, evictStrategy) {
      let toRemove = T$.JSArrayOfString().of([]);
      for (let entry of this[_tiles][$entries]) {
        if (entry.value.coords.z !== zoom) {
          continue;
        }
        toRemove[$add](entry.key);
      }
      for (let key of toRemove) {
        this.remove(key, evictStrategy);
      }
    }
    reloadImages(layer, wrapX, wrapY) {
      for (let tile of this[_tiles][$values]) {
        tile.imageProvider = layer.tileProvider.getImage(tile.coords.wrap(wrapX, wrapY), layer);
        tile.loadTileImage();
      }
    }
    abortLoading(tileZoom, evictionStrategy) {
      let toRemove = T$.JSArrayOfString().of([]);
      for (let entry of this[_tiles][$entries]) {
        let tile = entry.value;
        if (tile.coords.z !== tileZoom && tile.loaded == null) {
          toRemove[$add](entry.key);
        }
      }
      for (let key of toRemove) {
        let tile = dart.nullCheck(this[_tiles][$_get](key));
        tile.tileReady = null;
        tile.dispose(tile.loadError && evictionStrategy !== tile_layer.EvictErrorTileStrategy.none);
        this[_tiles][$remove](key);
      }
    }
    markToPrune(currentZoom, noPruneRange) {
      for (let entry of this[_tiles][$entries]) {
        let tile = entry.value;
        let c = tile.coords;
        if (tile.current && (c.z !== currentZoom || !noPruneRange.contains(new (T$.CustomPointOfnum()).new(c.x, c.y)))) {
          tile.current = false;
        }
      }
    }
    evictErrorTilesBasedOnStrategy(tileRange, evictStrategy) {
      if (evictStrategy === tile_layer.EvictErrorTileStrategy.notVisibleRespectMargin) {
        let toRemove = T$.JSArrayOfString().of([]);
        for (let entry of this[_tiles][$entries]) {
          let tile = entry.value;
          if (tile.loadError && !tile.current) {
            toRemove[$add](entry.key);
          }
        }
        for (let key of toRemove) {
          dart.nullCheck(this[_tiles][$_get](key)).dispose(true);
          this[_tiles][$remove](key);
        }
      } else if (evictStrategy === tile_layer.EvictErrorTileStrategy.notVisible) {
        let toRemove = T$.JSArrayOfString().of([]);
        for (let entry of this[_tiles][$entries]) {
          let tile = entry.value;
          let c = tile.coords;
          if (tile.loadError && (!tile.current || !tileRange.contains(new (T$.CustomPointOfnum()).new(c.x, c.y)))) {
            toRemove[$add](entry.key);
          }
        }
        for (let key of toRemove) {
          dart.nullCheck(this[_tiles][$_get](key)).dispose(true);
          this[_tiles][$remove](key);
        }
      }
    }
    prune(zoom, evictStrategy) {
      if (zoom == null) {
        this.removeAll(evictStrategy);
        return;
      }
      for (let entry of this[_tiles][$entries]) {
        let tile = entry.value;
        tile.retain = tile.current;
      }
      for (let entry of this[_tiles][$entries]) {
        let tile = entry.value;
        if (tile.current && !tile.active) {
          let coords = tile.coords;
          if (!this[_retainParent](coords.x, coords.y, coords.z, coords.z - 5)) {
            this[_retainChildren](coords.x, coords.y, coords.z, coords.z + 2);
          }
        }
      }
      let toRemove = T$.JSArrayOfString().of([]);
      for (let entry of this[_tiles][$entries]) {
        let tile = entry.value;
        if (!tile.retain) {
          toRemove[$add](entry.key);
        }
      }
      for (let key of toRemove) {
        this.remove(key, evictStrategy);
      }
    }
    [_retainChildren](x, y, z, maxZoom) {
      for (let i = 2 * x; i < 2 * x + 2; i = i + 1) {
        for (let j = 2 * y; j < 2 * y + 2; j = j + 1) {
          let coords = new (T$.CoordsOfdouble()).new(i, j);
          coords.z = z + 1;
          let tile = this[_tiles][$_get](coords.key);
          if (tile != null) {
            if (tile.active) {
              tile.retain = true;
              continue;
            } else if (tile.loaded != null) {
              tile.retain = true;
            }
          }
          if (z + 1 < maxZoom) {
            this[_retainChildren](i, j, z + 1, maxZoom);
          }
        }
      }
    }
    [_retainParent](x, y, z, minZoom) {
      let x2 = (x / 2)[$floorToDouble]();
      let y2 = (y / 2)[$floorToDouble]();
      let z2 = z - 1;
      let coords2 = new (T$.CoordsOfdouble()).new(x2, y2);
      coords2.z = z2;
      let tile = this[_tiles][$_get](coords2.key);
      if (tile != null) {
        if (tile.active) {
          tile.retain = true;
          return true;
        } else if (tile.loaded != null) {
          tile.retain = true;
        }
      }
      if (z2 > minZoom) {
        return this[_retainParent](x2, y2, z2, minZoom);
      }
      return false;
    }
    static ['_#new#tearOff']() {
      return new tile_manager.TileManager.new();
    }
  };
  (tile_manager.TileManager.new = function() {
    this[_tiles] = new (T$.IdentityMapOfString$Tile()).new();
    ;
  }).prototype = tile_manager.TileManager.prototype;
  dart.addTypeTests(tile_manager.TileManager);
  dart.addTypeCaches(tile_manager.TileManager);
  dart.setMethodSignature(tile_manager.TileManager, () => ({
    __proto__: dart.getMethods(tile_manager.TileManager.__proto__),
    all: dart.fnType(core.List$(tile.Tile), []),
    sortedByDistanceToZoomAscending: dart.fnType(core.List$(tile.Tile), [core.double, core.double]),
    anyWithZoomLevel: dart.fnType(core.bool, [core.double]),
    tileAt: dart.fnType(dart.nullable(tile.Tile), [coords.Coords$(core.num)]),
    allWithinZoom: dart.fnType(core.bool, [core.double, core.double]),
    markTileWithCoordsAsCurrent: dart.fnType(core.bool, [coords.Coords$(core.num)]),
    add: dart.fnType(dart.void, [coords.Coords$(core.double), tile.Tile]),
    remove: dart.fnType(dart.void, [core.String, tile_layer.EvictErrorTileStrategy]),
    removeAll: dart.fnType(dart.void, [tile_layer.EvictErrorTileStrategy]),
    removeAtZoom: dart.fnType(dart.void, [core.double, tile_layer.EvictErrorTileStrategy]),
    reloadImages: dart.fnType(dart.void, [tile_layer.TileLayer, dart.nullable(tuple.Tuple2$(core.double, core.double)), dart.nullable(tuple.Tuple2$(core.double, core.double))]),
    abortLoading: dart.fnType(dart.void, [dart.nullable(core.double), tile_layer.EvictErrorTileStrategy]),
    markToPrune: dart.fnType(dart.void, [dart.nullable(core.double), bounds.Bounds$(core.num)]),
    evictErrorTilesBasedOnStrategy: dart.fnType(dart.void, [bounds.Bounds$(core.num), tile_layer.EvictErrorTileStrategy]),
    prune: dart.fnType(dart.void, [dart.nullable(core.double), tile_layer.EvictErrorTileStrategy]),
    [_retainChildren]: dart.fnType(dart.void, [core.double, core.double, core.double, core.double]),
    [_retainParent]: dart.fnType(core.bool, [core.double, core.double, core.double, core.double])
  }));
  dart.setGetterSignature(tile_manager.TileManager, () => ({
    __proto__: dart.getGetters(tile_manager.TileManager.__proto__),
    allLoaded: core.bool
  }));
  dart.setLibraryUri(tile_manager.TileManager, I[7]);
  dart.setFieldSignature(tile_manager.TileManager, () => ({
    __proto__: dart.getFields(tile_manager.TileManager.__proto__),
    [_tiles]: dart.finalFieldType(core.Map$(core.String, tile.Tile))
  }));
  var origin$ = dart.privateName(level$, "Level.origin");
  var zoom$ = dart.privateName(level$, "Level.zoom");
  level$.Level = class Level extends core.Object {
    get origin() {
      return this[origin$];
    }
    set origin(value) {
      super.origin = value;
    }
    get zoom() {
      return this[zoom$];
    }
    set zoom(value) {
      super.zoom = value;
    }
    static ['_#new#tearOff'](opts) {
      let origin = opts && 'origin' in opts ? opts.origin : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new level$.Level.new({origin: origin, zoom: zoom});
    }
  };
  (level$.Level.new = function(opts) {
    let origin = opts && 'origin' in opts ? opts.origin : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    this[origin$] = origin;
    this[zoom$] = zoom;
    ;
  }).prototype = level$.Level.prototype;
  dart.addTypeTests(level$.Level);
  dart.addTypeCaches(level$.Level);
  dart.setLibraryUri(level$.Level, I[8]);
  dart.setFieldSignature(level$.Level, () => ({
    __proto__: dart.getFields(level$.Level.__proto__),
    origin: dart.finalFieldType(point.CustomPoint$(core.num)),
    zoom: dart.finalFieldType(core.double)
  }));
  var urlTemplate$ = dart.privateName(tile_layer, "TileLayer.urlTemplate");
  var tms$ = dart.privateName(tile_layer, "TileLayer.tms");
  var wmsOptions$ = dart.privateName(tile_layer, "TileLayer.wmsOptions");
  var tileSize$ = dart.privateName(tile_layer, "TileLayer.tileSize");
  var minZoom$ = dart.privateName(tile_layer, "TileLayer.minZoom");
  var maxZoom$ = dart.privateName(tile_layer, "TileLayer.maxZoom");
  var minNativeZoom$ = dart.privateName(tile_layer, "TileLayer.minNativeZoom");
  var maxNativeZoom$ = dart.privateName(tile_layer, "TileLayer.maxNativeZoom");
  var zoomReverse$ = dart.privateName(tile_layer, "TileLayer.zoomReverse");
  var zoomOffset$ = dart.privateName(tile_layer, "TileLayer.zoomOffset");
  var subdomains$ = dart.privateName(tile_layer, "TileLayer.subdomains");
  var backgroundColor$ = dart.privateName(tile_layer, "TileLayer.backgroundColor");
  var opacity$ = dart.privateName(tile_layer, "TileLayer.opacity");
  var tileProvider$ = dart.privateName(tile_layer, "TileLayer.tileProvider");
  var keepBuffer$ = dart.privateName(tile_layer, "TileLayer.keepBuffer");
  var errorImage$1 = dart.privateName(tile_layer, "TileLayer.errorImage");
  var additionalOptions$ = dart.privateName(tile_layer, "TileLayer.additionalOptions");
  var updateInterval$ = dart.privateName(tile_layer, "TileLayer.updateInterval");
  var tileFadeInDuration$ = dart.privateName(tile_layer, "TileLayer.tileFadeInDuration");
  var tileFadeInStart$ = dart.privateName(tile_layer, "TileLayer.tileFadeInStart");
  var tileFadeInStartWhenOverride$ = dart.privateName(tile_layer, "TileLayer.tileFadeInStartWhenOverride");
  var overrideTilesWhenUrlChanges$ = dart.privateName(tile_layer, "TileLayer.overrideTilesWhenUrlChanges");
  var retinaMode$ = dart.privateName(tile_layer, "TileLayer.retinaMode");
  var errorTileCallback$ = dart.privateName(tile_layer, "TileLayer.errorTileCallback");
  var templateFunction$ = dart.privateName(tile_layer, "TileLayer.templateFunction");
  var tileBuilder$1 = dart.privateName(tile_layer, "TileLayer.tileBuilder");
  var tilesContainerBuilder$ = dart.privateName(tile_layer, "TileLayer.tilesContainerBuilder");
  var evictErrorTileStrategy$ = dart.privateName(tile_layer, "TileLayer.evictErrorTileStrategy");
  var fastReplace$ = dart.privateName(tile_layer, "TileLayer.fastReplace");
  var reset$ = dart.privateName(tile_layer, "TileLayer.reset");
  var tileBounds$ = dart.privateName(tile_layer, "TileLayer.tileBounds");
  var Color_value = dart.privateName(ui, "Color.value");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  tile_layer.TileLayer = class TileLayer extends framework.StatefulWidget {
    get urlTemplate() {
      return this[urlTemplate$];
    }
    set urlTemplate(value) {
      super.urlTemplate = value;
    }
    get tms() {
      return this[tms$];
    }
    set tms(value) {
      super.tms = value;
    }
    get wmsOptions() {
      return this[wmsOptions$];
    }
    set wmsOptions(value) {
      super.wmsOptions = value;
    }
    get tileSize() {
      return this[tileSize$];
    }
    set tileSize(value) {
      super.tileSize = value;
    }
    get minZoom() {
      return this[minZoom$];
    }
    set minZoom(value) {
      super.minZoom = value;
    }
    get maxZoom() {
      return this[maxZoom$];
    }
    set maxZoom(value) {
      super.maxZoom = value;
    }
    get minNativeZoom() {
      return this[minNativeZoom$];
    }
    set minNativeZoom(value) {
      super.minNativeZoom = value;
    }
    get maxNativeZoom() {
      return this[maxNativeZoom$];
    }
    set maxNativeZoom(value) {
      super.maxNativeZoom = value;
    }
    get zoomReverse() {
      return this[zoomReverse$];
    }
    set zoomReverse(value) {
      super.zoomReverse = value;
    }
    get zoomOffset() {
      return this[zoomOffset$];
    }
    set zoomOffset(value) {
      super.zoomOffset = value;
    }
    get subdomains() {
      return this[subdomains$];
    }
    set subdomains(value) {
      super.subdomains = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get tileProvider() {
      return this[tileProvider$];
    }
    set tileProvider(value) {
      super.tileProvider = value;
    }
    get keepBuffer() {
      return this[keepBuffer$];
    }
    set keepBuffer(value) {
      super.keepBuffer = value;
    }
    get errorImage() {
      return this[errorImage$1];
    }
    set errorImage(value) {
      super.errorImage = value;
    }
    get additionalOptions() {
      return this[additionalOptions$];
    }
    set additionalOptions(value) {
      super.additionalOptions = value;
    }
    get updateInterval() {
      return this[updateInterval$];
    }
    set updateInterval(value) {
      super.updateInterval = value;
    }
    get tileFadeInDuration() {
      return this[tileFadeInDuration$];
    }
    set tileFadeInDuration(value) {
      super.tileFadeInDuration = value;
    }
    get tileFadeInStart() {
      return this[tileFadeInStart$];
    }
    set tileFadeInStart(value) {
      super.tileFadeInStart = value;
    }
    get tileFadeInStartWhenOverride() {
      return this[tileFadeInStartWhenOverride$];
    }
    set tileFadeInStartWhenOverride(value) {
      super.tileFadeInStartWhenOverride = value;
    }
    get overrideTilesWhenUrlChanges() {
      return this[overrideTilesWhenUrlChanges$];
    }
    set overrideTilesWhenUrlChanges(value) {
      super.overrideTilesWhenUrlChanges = value;
    }
    get retinaMode() {
      return this[retinaMode$];
    }
    set retinaMode(value) {
      super.retinaMode = value;
    }
    get errorTileCallback() {
      return this[errorTileCallback$];
    }
    set errorTileCallback(value) {
      super.errorTileCallback = value;
    }
    get templateFunction() {
      return this[templateFunction$];
    }
    set templateFunction(value) {
      super.templateFunction = value;
    }
    get tileBuilder() {
      return this[tileBuilder$1];
    }
    set tileBuilder(value) {
      super.tileBuilder = value;
    }
    get tilesContainerBuilder() {
      return this[tilesContainerBuilder$];
    }
    set tilesContainerBuilder(value) {
      super.tilesContainerBuilder = value;
    }
    get evictErrorTileStrategy() {
      return this[evictErrorTileStrategy$];
    }
    set evictErrorTileStrategy(value) {
      super.evictErrorTileStrategy = value;
    }
    get fastReplace() {
      return this[fastReplace$];
    }
    set fastReplace(value) {
      super.fastReplace = value;
    }
    get reset() {
      return this[reset$];
    }
    set reset(value) {
      super.reset = value;
    }
    get tileBounds() {
      return this[tileBounds$];
    }
    set tileBounds(value) {
      super.tileBounds = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let urlTemplate = opts && 'urlTemplate' in opts ? opts.urlTemplate : null;
      let tileSize = opts && 'tileSize' in opts ? opts.tileSize : 256;
      let minZoom = opts && 'minZoom' in opts ? opts.minZoom : 0;
      let maxZoom = opts && 'maxZoom' in opts ? opts.maxZoom : 18;
      let minNativeZoom = opts && 'minNativeZoom' in opts ? opts.minNativeZoom : null;
      let maxNativeZoom = opts && 'maxNativeZoom' in opts ? opts.maxNativeZoom : null;
      let zoomReverse = opts && 'zoomReverse' in opts ? opts.zoomReverse : false;
      let zoomOffset = opts && 'zoomOffset' in opts ? opts.zoomOffset : 0;
      let additionalOptions = opts && 'additionalOptions' in opts ? opts.additionalOptions : null;
      let subdomains = opts && 'subdomains' in opts ? opts.subdomains : C[7] || CT.C7;
      let keepBuffer = opts && 'keepBuffer' in opts ? opts.keepBuffer : 2;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[8] || CT.C8;
      let errorImage = opts && 'errorImage' in opts ? opts.errorImage : null;
      let tileProvider = opts && 'tileProvider' in opts ? opts.tileProvider : null;
      let tms = opts && 'tms' in opts ? opts.tms : false;
      let wmsOptions = opts && 'wmsOptions' in opts ? opts.wmsOptions : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let updateInterval = opts && 'updateInterval' in opts ? opts.updateInterval : C[9] || CT.C9;
      let tileFadeInDuration = opts && 'tileFadeInDuration' in opts ? opts.tileFadeInDuration : C[10] || CT.C10;
      let tileFadeInStart = opts && 'tileFadeInStart' in opts ? opts.tileFadeInStart : 0;
      let tileFadeInStartWhenOverride = opts && 'tileFadeInStartWhenOverride' in opts ? opts.tileFadeInStartWhenOverride : 0;
      let overrideTilesWhenUrlChanges = opts && 'overrideTilesWhenUrlChanges' in opts ? opts.overrideTilesWhenUrlChanges : false;
      let retinaMode = opts && 'retinaMode' in opts ? opts.retinaMode : false;
      let errorTileCallback = opts && 'errorTileCallback' in opts ? opts.errorTileCallback : null;
      let templateFunction = opts && 'templateFunction' in opts ? opts.templateFunction : C[11] || CT.C11;
      let tileBuilder = opts && 'tileBuilder' in opts ? opts.tileBuilder : null;
      let tilesContainerBuilder = opts && 'tilesContainerBuilder' in opts ? opts.tilesContainerBuilder : null;
      let evictErrorTileStrategy = opts && 'evictErrorTileStrategy' in opts ? opts.evictErrorTileStrategy : C[12] || CT.C12;
      let fastReplace = opts && 'fastReplace' in opts ? opts.fastReplace : false;
      let reset = opts && 'reset' in opts ? opts.reset : null;
      let tileBounds = opts && 'tileBounds' in opts ? opts.tileBounds : null;
      let userAgentPackageName = opts && 'userAgentPackageName' in opts ? opts.userAgentPackageName : "unknown";
      return new tile_layer.TileLayer.new({key: key, urlTemplate: urlTemplate, tileSize: tileSize, minZoom: minZoom, maxZoom: maxZoom, minNativeZoom: minNativeZoom, maxNativeZoom: maxNativeZoom, zoomReverse: zoomReverse, zoomOffset: zoomOffset, additionalOptions: additionalOptions, subdomains: subdomains, keepBuffer: keepBuffer, backgroundColor: backgroundColor, errorImage: errorImage, tileProvider: tileProvider, tms: tms, wmsOptions: wmsOptions, opacity: opacity, updateInterval: updateInterval, tileFadeInDuration: tileFadeInDuration, tileFadeInStart: tileFadeInStart, tileFadeInStartWhenOverride: tileFadeInStartWhenOverride, overrideTilesWhenUrlChanges: overrideTilesWhenUrlChanges, retinaMode: retinaMode, errorTileCallback: errorTileCallback, templateFunction: templateFunction, tileBuilder: tileBuilder, tilesContainerBuilder: tilesContainerBuilder, evictErrorTileStrategy: evictErrorTileStrategy, fastReplace: fastReplace, reset: reset, tileBounds: tileBounds, userAgentPackageName: userAgentPackageName, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    createState() {
      return new tile_layer._TileLayerState.new();
    }
  };
  (tile_layer.TileLayer.new = function(opts) {
    let t1;
    let key = opts && 'key' in opts ? opts.key : null;
    let urlTemplate = opts && 'urlTemplate' in opts ? opts.urlTemplate : null;
    let tileSize = opts && 'tileSize' in opts ? opts.tileSize : 256;
    let minZoom = opts && 'minZoom' in opts ? opts.minZoom : 0;
    let maxZoom = opts && 'maxZoom' in opts ? opts.maxZoom : 18;
    let minNativeZoom = opts && 'minNativeZoom' in opts ? opts.minNativeZoom : null;
    let maxNativeZoom = opts && 'maxNativeZoom' in opts ? opts.maxNativeZoom : null;
    let zoomReverse = opts && 'zoomReverse' in opts ? opts.zoomReverse : false;
    let zoomOffset = opts && 'zoomOffset' in opts ? opts.zoomOffset : 0;
    let additionalOptions = opts && 'additionalOptions' in opts ? opts.additionalOptions : null;
    let subdomains = opts && 'subdomains' in opts ? opts.subdomains : C[7] || CT.C7;
    let keepBuffer = opts && 'keepBuffer' in opts ? opts.keepBuffer : 2;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[8] || CT.C8;
    let errorImage = opts && 'errorImage' in opts ? opts.errorImage : null;
    let tileProvider = opts && 'tileProvider' in opts ? opts.tileProvider : null;
    let tms = opts && 'tms' in opts ? opts.tms : false;
    let wmsOptions = opts && 'wmsOptions' in opts ? opts.wmsOptions : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    let updateInterval = opts && 'updateInterval' in opts ? opts.updateInterval : C[9] || CT.C9;
    let tileFadeInDuration = opts && 'tileFadeInDuration' in opts ? opts.tileFadeInDuration : C[10] || CT.C10;
    let tileFadeInStart = opts && 'tileFadeInStart' in opts ? opts.tileFadeInStart : 0;
    let tileFadeInStartWhenOverride = opts && 'tileFadeInStartWhenOverride' in opts ? opts.tileFadeInStartWhenOverride : 0;
    let overrideTilesWhenUrlChanges = opts && 'overrideTilesWhenUrlChanges' in opts ? opts.overrideTilesWhenUrlChanges : false;
    let retinaMode = opts && 'retinaMode' in opts ? opts.retinaMode : false;
    let errorTileCallback = opts && 'errorTileCallback' in opts ? opts.errorTileCallback : null;
    let templateFunction = opts && 'templateFunction' in opts ? opts.templateFunction : C[11] || CT.C11;
    let tileBuilder = opts && 'tileBuilder' in opts ? opts.tileBuilder : null;
    let tilesContainerBuilder = opts && 'tilesContainerBuilder' in opts ? opts.tilesContainerBuilder : null;
    let evictErrorTileStrategy = opts && 'evictErrorTileStrategy' in opts ? opts.evictErrorTileStrategy : C[12] || CT.C12;
    let fastReplace = opts && 'fastReplace' in opts ? opts.fastReplace : false;
    let reset = opts && 'reset' in opts ? opts.reset : null;
    let tileBounds = opts && 'tileBounds' in opts ? opts.tileBounds : null;
    let userAgentPackageName = opts && 'userAgentPackageName' in opts ? opts.userAgentPackageName : "unknown";
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[urlTemplate$] = urlTemplate;
    this[minNativeZoom$] = minNativeZoom;
    this[maxNativeZoom$] = maxNativeZoom;
    this[zoomReverse$] = zoomReverse;
    this[subdomains$] = subdomains;
    this[keepBuffer$] = keepBuffer;
    this[backgroundColor$] = backgroundColor;
    this[errorImage$1] = errorImage;
    this[tms$] = tms;
    this[wmsOptions$] = wmsOptions;
    this[opacity$] = opacity;
    this[tileFadeInStart$] = tileFadeInStart;
    this[tileFadeInStartWhenOverride$] = tileFadeInStartWhenOverride;
    this[overrideTilesWhenUrlChanges$] = overrideTilesWhenUrlChanges;
    this[retinaMode$] = retinaMode;
    this[errorTileCallback$] = errorTileCallback;
    this[templateFunction$] = templateFunction;
    this[tileBuilder$1] = tileBuilder;
    this[tilesContainerBuilder$] = tilesContainerBuilder;
    this[evictErrorTileStrategy$] = evictErrorTileStrategy;
    this[fastReplace$] = fastReplace;
    this[reset$] = reset;
    this[tileBounds$] = tileBounds;
    this[updateInterval$] = updateInterval['<='](core.Duration.zero) ? null : updateInterval;
    this[tileFadeInDuration$] = tileFadeInDuration['<='](core.Duration.zero) ? null : tileFadeInDuration;
    if (!(tileFadeInStart >= 0.0 && tileFadeInStart <= 1.0)) dart.assertFailed(null, I[9], 283, 16, "tileFadeInStart >= 0.0 && tileFadeInStart <= 1.0");
    if (!(tileFadeInStartWhenOverride >= 0.0 && tileFadeInStartWhenOverride <= 1.0)) dart.assertFailed(null, I[9], 284, 16, "tileFadeInStartWhenOverride >= 0.0 &&\n            tileFadeInStartWhenOverride <= 1.0");
    this[maxZoom$] = wmsOptions == null && retinaMode && maxZoom > 0.0 && !zoomReverse ? maxZoom - 1.0 : maxZoom;
    this[minZoom$] = wmsOptions == null && retinaMode && maxZoom > 0.0 && zoomReverse ? math.max(core.double, minZoom + 1.0, 0.0) : minZoom;
    this[zoomOffset$] = wmsOptions == null && retinaMode && maxZoom > 0.0 ? zoomReverse ? zoomOffset - 1.0 : zoomOffset + 1.0 : zoomOffset;
    this[tileSize$] = wmsOptions == null && retinaMode && maxZoom > 0.0 ? (tileSize / 2.0)[$floorToDouble]() : tileSize;
    this[additionalOptions$] = additionalOptions == null ? C[0] || CT.C0 : T$.LinkedHashMapOfString$String().from(additionalOptions);
    this[tileProvider$] = tileProvider == null ? new tile_provider_web.NetworkNoRetryTileProvider.new({headers: new (T$.IdentityMapOfString$String()).from(["User-Agent", "flutter_map (" + userAgentPackageName + ")"])}) : (t1 = tileProvider, (() => {
      t1.headers = (() => {
        let t2 = T$.LinkedHashMapOfString$String().of(tileProvider.headers);
        if (!tileProvider.headers[$containsKey]("User-Agent")) t2[$_set]("User-Agent", "flutter_map (" + userAgentPackageName + ")");
        return t2;
      })();
      return t1;
    })());
    tile_layer.TileLayer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tile_layer.TileLayer.prototype;
  dart.addTypeTests(tile_layer.TileLayer);
  dart.addTypeCaches(tile_layer.TileLayer);
  dart.setMethodSignature(tile_layer.TileLayer, () => ({
    __proto__: dart.getMethods(tile_layer.TileLayer.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(tile_layer.TileLayer, I[10]);
  dart.setFieldSignature(tile_layer.TileLayer, () => ({
    __proto__: dart.getFields(tile_layer.TileLayer.__proto__),
    urlTemplate: dart.finalFieldType(dart.nullable(core.String)),
    tms: dart.finalFieldType(core.bool),
    wmsOptions: dart.finalFieldType(dart.nullable(tile_layer.WMSTileLayerOptions)),
    tileSize: dart.finalFieldType(core.double),
    minZoom: dart.finalFieldType(core.double),
    maxZoom: dart.finalFieldType(core.double),
    minNativeZoom: dart.finalFieldType(dart.nullable(core.double)),
    maxNativeZoom: dart.finalFieldType(dart.nullable(core.double)),
    zoomReverse: dart.finalFieldType(core.bool),
    zoomOffset: dart.finalFieldType(core.double),
    subdomains: dart.finalFieldType(core.List$(core.String)),
    backgroundColor: dart.finalFieldType(ui.Color),
    opacity: dart.finalFieldType(core.double),
    tileProvider: dart.finalFieldType(base_tile_provider.TileProvider),
    keepBuffer: dart.finalFieldType(core.int),
    errorImage: dart.finalFieldType(dart.nullable(image_provider.ImageProvider$(core.Object))),
    additionalOptions: dart.finalFieldType(core.Map$(core.String, core.String)),
    updateInterval: dart.finalFieldType(dart.nullable(core.Duration)),
    tileFadeInDuration: dart.finalFieldType(dart.nullable(core.Duration)),
    tileFadeInStart: dart.finalFieldType(core.double),
    tileFadeInStartWhenOverride: dart.finalFieldType(core.double),
    overrideTilesWhenUrlChanges: dart.finalFieldType(core.bool),
    retinaMode: dart.finalFieldType(core.bool),
    errorTileCallback: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [tile.Tile, dart.dynamic]))),
    templateFunction: dart.finalFieldType(dart.fnType(core.String, [core.String, core.Map$(core.String, core.String)])),
    tileBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, tile.Tile]))),
    tilesContainerBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, core.List$(tile.Tile)]))),
    evictErrorTileStrategy: dart.finalFieldType(tile_layer.EvictErrorTileStrategy),
    fastReplace: dart.finalFieldType(core.bool),
    reset: dart.finalFieldType(dart.nullable(async.Stream$(dart.void))),
    tileBounds: dart.finalFieldType(dart.nullable(latlng_bounds.LatLngBounds))
  }));
  var ___TileLayerState__globalTileRange = dart.privateName(tile_layer, "_#_TileLayerState#_globalTileRange");
  var _wrapX = dart.privateName(tile_layer, "_wrapX");
  var _wrapY = dart.privateName(tile_layer, "_wrapY");
  var _tileZoom = dart.privateName(tile_layer, "_tileZoom");
  var _resetSub = dart.privateName(tile_layer, "_resetSub");
  var _throttleUpdate = dart.privateName(tile_layer, "_throttleUpdate");
  var ___TileLayerState__tileSize = dart.privateName(tile_layer, "_#_TileLayerState#_tileSize");
  var ___TileLayerState__tileManager = dart.privateName(tile_layer, "_#_TileLayerState#_tileManager");
  var ___TileLayerState__transformationCalculator = dart.privateName(tile_layer, "_#_TileLayerState#_transformationCalculator");
  var _pruneLater = dart.privateName(tile_layer, "_pruneLater");
  var _globalTileRange = dart.privateName(tile_layer, "_globalTileRange");
  var _tileSize = dart.privateName(tile_layer, "_tileSize");
  var _tileManager = dart.privateName(tile_layer, "_tileManager");
  var _transformationCalculator = dart.privateName(tile_layer, "_transformationCalculator");
  var _resetTiles = dart.privateName(tile_layer, "_resetTiles");
  var _encodedBaseUrl = dart.privateName(tile_layer, "_encodedBaseUrl");
  var MapEquality__valueEquality = dart.privateName(equality, "MapEquality._valueEquality");
  var MapEquality__keyEquality = dart.privateName(equality, "MapEquality._keyEquality");
  var _clampZoom = dart.privateName(tile_layer, "_clampZoom");
  var _setView = dart.privateName(tile_layer, "_setView");
  var _updateLevels = dart.privateName(tile_layer, "_updateLevels");
  var _resetGrid = dart.privateName(tile_layer, "_resetGrid");
  var _update = dart.privateName(tile_layer, "_update");
  var _pxBoundsToTileRange = dart.privateName(tile_layer, "_pxBoundsToTileRange");
  var _getTiledPixelBounds = dart.privateName(tile_layer, "_getTiledPixelBounds");
  var _latLngBoundsToPixelBounds = dart.privateName(tile_layer, "_latLngBoundsToPixelBounds");
  var _areCoordsInsideTileBounds = dart.privateName(tile_layer, "_areCoordsInsideTileBounds");
  var _isValidTile = dart.privateName(tile_layer, "_isValidTile");
  var _getTilePos = dart.privateName(tile_layer, "_getTilePos");
  var _tileReady = dart.privateName(tile_layer, "_tileReady");
  var Point_y = dart.privateName(math, "Point.y");
  var Point_x = dart.privateName(math, "Point.x");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(tile_layer.TileLayer) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(tile_layer.TileLayer)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(tile_layer.TileLayer));
  tile_layer._TileLayerState = class _TileLayerState extends State_TickerProviderStateMixin$36 {
    get [_globalTileRange]() {
      let t2;
      t2 = this[___TileLayerState__globalTileRange];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_globalTileRange")) : t2;
    }
    set [_globalTileRange](library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer$46dart$58$58_globalTileRange$35param) {
      this[___TileLayerState__globalTileRange] = library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer$46dart$58$58_globalTileRange$35param;
    }
    get [_tileSize]() {
      let t2;
      t2 = this[___TileLayerState__tileSize];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_tileSize")) : t2;
    }
    set [_tileSize](library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer$46dart$58$58_tileSize$35param) {
      this[___TileLayerState__tileSize] = library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer$46dart$58$58_tileSize$35param;
    }
    get [_tileManager]() {
      let t2;
      t2 = this[___TileLayerState__tileManager];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_tileManager")) : t2;
    }
    set [_tileManager](library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer$46dart$58$58_tileManager$35param) {
      if (this[___TileLayerState__tileManager] == null)
        this[___TileLayerState__tileManager] = library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer$46dart$58$58_tileManager$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_tileManager"));
    }
    get [_transformationCalculator]() {
      let t2;
      t2 = this[___TileLayerState__transformationCalculator];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_transformationCalculator")) : t2;
    }
    set [_transformationCalculator](library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer$46dart$58$58_transformationCalculator$35param) {
      if (this[___TileLayerState__transformationCalculator] == null)
        this[___TileLayerState__transformationCalculator] = library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer$46dart$58$58_transformationCalculator$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_transformationCalculator"));
    }
    initState() {
      let t2;
      super.initState();
      this[_tileManager] = new tile_manager.TileManager.new();
      this[_transformationCalculator] = new transformation_calculator.TransformationCalculator.new();
      this[_tileSize] = new (T$.CustomPointOfnum()).new(this.widget.tileSize, this.widget.tileSize);
      if (this.widget.reset != null) {
        this[_resetSub] = (t2 = this.widget.reset, t2 == null ? null : t2.listen(dart.fn(_ => this[_resetTiles](), T$.voidTovoid())));
      }
    }
    didUpdateWidget(oldWidget) {
      let t2, t2$, t2$0, t2$1, t2$2;
      tile_layer.TileLayer.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      let reloadTiles = false;
      if (oldWidget.tileSize !== this.widget.tileSize) {
        this[_tileSize] = new (T$.CustomPointOfnum()).new(this.widget.tileSize, this.widget.tileSize);
        reloadTiles = true;
      }
      if (oldWidget.retinaMode !== this.widget.retinaMode) {
        reloadTiles = true;
      }
      reloadTiles = !!(reloadTiles | !this[_tileManager].allWithinZoom(this.widget.minZoom, this.widget.maxZoom));
      if (!dart.equals(oldWidget.updateInterval, this.widget.updateInterval)) {
        t2 = this[_throttleUpdate];
        t2 == null ? null : t2.close();
      }
      if (!reloadTiles) {
        let oldUrl = (t2$0 = (t2$ = oldWidget.wmsOptions, t2$ == null ? null : t2$[_encodedBaseUrl]), t2$0 == null ? oldWidget.urlTemplate : t2$0);
        let newUrl = (t2$2 = (t2$1 = this.widget.wmsOptions, t2$1 == null ? null : t2$1[_encodedBaseUrl]), t2$2 == null ? this.widget.urlTemplate : t2$2);
        let oldOptions = oldWidget.additionalOptions;
        let newOptions = this.widget.additionalOptions;
        if (oldUrl != newUrl || !(C[14] || CT.C14).equals(oldOptions, newOptions)) {
          if (this.widget.overrideTilesWhenUrlChanges) {
            this[_tileManager].reloadImages(this.widget, this[_wrapX], this[_wrapY]);
          } else {
            reloadTiles = true;
          }
        }
      }
      if (reloadTiles) {
        this[_tileManager].removeAll(this.widget.evictErrorTileStrategy);
      }
    }
    dispose() {
      let t2, t2$, t2$0;
      this[_tileManager].removeAll(this.widget.evictErrorTileStrategy);
      t2 = this[_resetSub];
      t2 == null ? null : t2.cancel();
      t2$ = this[_pruneLater];
      t2$ == null ? null : t2$.cancel();
      this.widget.tileProvider.dispose();
      t2$0 = this[_throttleUpdate];
      t2$0 == null ? null : t2$0.close();
      super.dispose();
    }
    build(context) {
      let t5, t4, t3;
      let map = dart.nullCheck(flutter_map_state.FlutterMapState.maybeOf(context));
      let tileZoom = this[_clampZoom](map.zoom[$roundToDouble]());
      if (this[_tileZoom] == null) {
        if (tileZoom <= this.widget.maxZoom && tileZoom >= this.widget.minZoom) {
          this[_tileZoom] = tileZoom;
          this[_setView](map, map.center, tileZoom);
        }
      } else {
        if ((tileZoom - dart.nullCheck(this[_tileZoom]))[$abs]() >= 1) {
          this[_setView](map, map.center, tileZoom);
        } else {
          if (this[_throttleUpdate] != null) {
            dart.nullCheck(this[_throttleUpdate]).add(null);
          }
        }
      }
      this[_setView](map, map.center, map.zoom);
      let tilesToRender = this[_tileZoom] == null ? this[_tileManager].all() : this[_tileManager].sortedByDistanceToZoomAscending(this.widget.maxZoom, dart.nullCheck(this[_tileZoom]));
      let zoomToTransformation = new (T$.IdentityMapOfdouble$TileTransformation()).new();
      let tileWidgets = (() => {
        let t2 = T$.JSArrayOfWidget().of([]);
        for (let tile of tilesToRender)
          t2.push(new tile_widget.TileWidget.new({tile: tile, size: this[_tileSize], tileTransformation: (t3 = zoomToTransformation[$_get](tile.coords.z), t3 == null ? (t4 = tile.coords.z, t5 = this[_transformationCalculator].transformationFor(tile.coords.z, map), zoomToTransformation[$_set](t4, t5), t5) : t3), errorImage: this.widget.errorImage, tileBuilder: this.widget.tileBuilder, key: new (T$.ValueKeyOfString()).new(tile.coordsKey), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}));
        return t2;
      })();
      let tilesContainer = new basic.Stack.new({children: tileWidgets, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
      let tilesLayer = this.widget.tilesContainerBuilder == null ? tilesContainer : dart.nullCheck(this.widget.tilesContainerBuilder)(context, tilesContainer, tilesToRender);
      return new basic.Opacity.new({opacity: this.widget.opacity, child: new container.Container.new({color: this.widget.backgroundColor, child: tilesLayer, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
    getTileSize() {
      return this[_tileSize];
    }
    [_updateLevels](map) {
      let zoom = this[_tileZoom];
      if (zoom == null) return null;
      let toRemove = this[_transformationCalculator].whereLevel(dart.fn(levelZoom => levelZoom !== zoom && !this[_tileManager].anyWithZoomLevel(levelZoom), T$.doubleTobool()));
      for (let z of toRemove) {
        this[_tileManager].removeAtZoom(z, this.widget.evictErrorTileStrategy);
        this[_transformationCalculator].removeLevel(z);
      }
      return this[_transformationCalculator].getOrCreateLevel(zoom, map);
    }
    [_resetTiles]() {
      this[_tileManager].removeAll(this.widget.evictErrorTileStrategy);
    }
    [_clampZoom](zoom) {
      if (this.widget.minNativeZoom != null && zoom < dart.nullCheck(this.widget.minNativeZoom)) {
        return dart.nullCheck(this.widget.minNativeZoom);
      }
      if (this.widget.maxNativeZoom != null && dart.nullCheck(this.widget.maxNativeZoom) < zoom) {
        return dart.nullCheck(this.widget.maxNativeZoom);
      }
      return zoom;
    }
    [_setView](map, center, zoom) {
      let tileZoom = this[_clampZoom](zoom[$roundToDouble]());
      if (dart.notNull(tileZoom) > this.widget.maxZoom || dart.notNull(tileZoom) < this.widget.minZoom) {
        tileZoom = null;
      }
      this[_tileZoom] = tileZoom;
      this[_tileManager].abortLoading(this[_tileZoom], this.widget.evictErrorTileStrategy);
      this[_updateLevels](map);
      this[_resetGrid](map);
      if (this[_tileZoom] != null) {
        this[_update](map, center);
      }
      this[_tileManager].prune(this[_tileZoom], this.widget.evictErrorTileStrategy);
    }
    [_resetGrid](map) {
      let crs = map.options.crs;
      let tileSize = this.getTileSize();
      let tileZoom = this[_tileZoom];
      let bounds = map.getPixelWorldBounds(this[_tileZoom]);
      if (bounds != null) {
        this[_globalTileRange] = this[_pxBoundsToTileRange](bounds);
      }
      this[_wrapX] = crs.wrapLng;
      if (this[_wrapX] != null) {
        let first = (map.project(new latlong.LatLng.new(0.0, dart.nullCheck(crs.wrapLng).item1), tileZoom).x / tileSize.x)[$floorToDouble]();
        let second = (map.project(new latlong.LatLng.new(0.0, dart.nullCheck(crs.wrapLng).item2), tileZoom).x / tileSize.y)[$ceilToDouble]();
        this[_wrapX] = new (T$.Tuple2Ofdouble$double()).new(first, second);
      }
      this[_wrapY] = crs.wrapLat;
      if (this[_wrapY] != null) {
        let first = (map.project(new latlong.LatLng.new(dart.nullCheck(crs.wrapLat).item1, 0.0), tileZoom).y / tileSize.x)[$floorToDouble]();
        let second = (map.project(new latlong.LatLng.new(dart.nullCheck(crs.wrapLat).item2, 0.0), tileZoom).y / tileSize.y)[$ceilToDouble]();
        this[_wrapY] = new (T$.Tuple2Ofdouble$double()).new(first, second);
      }
    }
    [_getTiledPixelBounds](map, center) {
      let scale = map.getZoomScale(map.zoom, this[_tileZoom]);
      let pixelCenter = map.project(center, this[_tileZoom]).floor();
      let halfSize = map.size['/'](scale * 2);
      return T$.BoundsOfnum().new(pixelCenter['-'](halfSize), pixelCenter['+'](halfSize));
    }
    [_update](map, center) {
      if (this[_tileZoom] == null) {
        return;
      }
      let zoom = this[_clampZoom](map.zoom);
      center == null ? center = map.center : null;
      let pixelBounds = this[_getTiledPixelBounds](map, center);
      let tileRange = this[_pxBoundsToTileRange](pixelBounds);
      let tileCenter = tileRange.center;
      let queue = T$.JSArrayOfCoordsOfdouble().of([]);
      let margin = this.widget.keepBuffer;
      let noPruneRange = T$.BoundsOfnum().new(tileRange.bottomLeft['-'](new (T$.CustomPointOfnum()).new(margin, -margin)), tileRange.topRight['+'](new (T$.CustomPointOfnum()).new(margin, -margin)));
      this[_tileManager].markToPrune(this[_tileZoom], noPruneRange);
      if ((zoom - dart.nullCheck(this[_tileZoom]))[$abs]() > 1) {
        this[_setView](map, center, zoom);
        return;
      }
      for (let j = tileRange.min.y; j <= tileRange.max.y; j = j + 1) {
        for (let i = tileRange.min.x; i <= tileRange.max.x; i = i + 1) {
          let coords = new (T$.CoordsOfdouble()).new(i[$toDouble](), j[$toDouble]());
          coords.z = dart.nullCheck(this[_tileZoom]);
          if (this.widget.tileBounds != null) {
            let tilePxBounds = this[_pxBoundsToTileRange](this[_latLngBoundsToPixelBounds](map, dart.nullCheck(this.widget.tileBounds), dart.nullCheck(this[_tileZoom])));
            if (!this[_areCoordsInsideTileBounds](coords, tilePxBounds)) {
              continue;
            }
          }
          if (!this[_isValidTile](map.options.crs, coords)) {
            continue;
          }
          if (!this[_tileManager].markTileWithCoordsAsCurrent(coords)) {
            queue[$add](coords);
          }
        }
      }
      this[_tileManager].evictErrorTilesBasedOnStrategy(tileRange, this.widget.evictErrorTileStrategy);
      queue[$sort](dart.fn((a, b) => (a.distanceTo(tileCenter) - b.distanceTo(tileCenter))[$toInt](), T$.CoordsOfdoubleAndCoordsOfdoubleToint()));
      for (let coords of queue) {
        let newTile = new tile.Tile.new({coords: coords, tilePos: this[_getTilePos](map, coords), current: true, imageProvider: this.widget.tileProvider.getImage(coords.wrap(this[_wrapX], this[_wrapY]), this.widget), tileReady: dart.bind(this, _tileReady)});
        this[_tileManager].add(coords, newTile);
        newTile.loadTileImage();
      }
    }
    [_isValidTile](crs, coords) {
      if (!crs.infinite) {
        let bounds = this[_globalTileRange];
        if (crs.wrapLng == null && (coords.x < bounds.min.x || coords.x > bounds.max.x) || crs.wrapLat == null && (coords.y < bounds.min.y || coords.y > bounds.max.y)) {
          return false;
        }
      }
      return true;
    }
    [_areCoordsInsideTileBounds](coords, tileBounds) {
      let t3;
      let bounds = (t3 = tileBounds, t3 == null ? this[_globalTileRange] : t3);
      if (coords.x < bounds.min.x || coords.x > bounds.max.x || coords.y < bounds.min.y || coords.y > bounds.max.y) {
        return false;
      }
      return true;
    }
    [_latLngBoundsToPixelBounds](map, bounds, thisZoom) {
      let swPixel = map.project(dart.nullCheck(bounds.southWest), thisZoom).floor();
      let nePixel = map.project(dart.nullCheck(bounds.northEast), thisZoom).ceil();
      let pxBounds = T$.BoundsOfnum().new(swPixel, nePixel);
      return pxBounds;
    }
    [_tileReady](coords, error, tile) {
      let t3;
      if (error != null) {
        print.debugPrint(dart.toString(error));
        dart.nullCheck(tile).loadError = true;
        if (this.widget.errorTileCallback != null) {
          dart.nullCheck(this.widget.errorTileCallback)(tile, error);
        }
      } else {
        dart.nullCheck(tile).loadError = false;
      }
      tile = this[_tileManager].tileAt(tile.coords);
      if (tile == null) return;
      if (this.widget.fastReplace && this.mounted) {
        this.setState(dart.fn(() => {
          dart.nullCheck(tile).active = true;
          if (this[_tileManager].allLoaded) {
            this[_tileManager].prune(this[_tileZoom], this.widget.evictErrorTileStrategy);
          }
        }, T$.VoidTovoid()));
        return;
      }
      let fadeInStart = tile.loaded == null ? this.widget.tileFadeInStart : this.widget.tileFadeInStartWhenOverride;
      tile.loaded = new core.DateTime.now();
      if (this.widget.tileFadeInDuration == null || fadeInStart === 1.0 || tile.loadError && this.widget.errorImage == null) {
        tile.active = true;
      } else {
        tile.startFadeInAnimation(dart.nullCheck(this.widget.tileFadeInDuration), this, {from: fadeInStart});
      }
      if (this.mounted) {
        this.setState(dart.fn(() => {
        }, T$.VoidTovoid()));
      }
      if (this[_tileManager].allLoaded) {
        t3 = this[_pruneLater];
        t3 == null ? null : t3.cancel();
        this[_pruneLater] = async.Timer.new(this.widget.tileFadeInDuration != null ? dart.nullCheck(this.widget.tileFadeInDuration)['+'](C[20] || CT.C20) : C[20] || CT.C20, dart.fn(() => {
          if (this.mounted) {
            this.setState(dart.fn(() => {
              this[_tileManager].prune(this[_tileZoom], this.widget.evictErrorTileStrategy);
            }, T$.VoidTovoid()));
          }
        }, T$.VoidTovoid()));
      }
    }
    [_getTilePos](map, coords) {
      let level = this[_transformationCalculator].getOrCreateLevel(coords.z, map);
      return coords.scaleBy(this.getTileSize())['-'](level.origin);
    }
    [_pxBoundsToTileRange](bounds) {
      let tileSize = this.getTileSize();
      return T$.BoundsOfnum().new(bounds.min.unscaleBy(tileSize).floor(), bounds.max.unscaleBy(tileSize).ceil()['-'](C[21] || CT.C21));
    }
    static ['_#new#tearOff']() {
      return new tile_layer._TileLayerState.new();
    }
  };
  (tile_layer._TileLayerState.new = function() {
    this[___TileLayerState__globalTileRange] = null;
    this[_wrapX] = null;
    this[_wrapY] = null;
    this[_tileZoom] = null;
    this[_resetSub] = null;
    this[_throttleUpdate] = null;
    this[___TileLayerState__tileSize] = null;
    this[___TileLayerState__tileManager] = null;
    this[___TileLayerState__transformationCalculator] = null;
    this[_pruneLater] = null;
    tile_layer._TileLayerState.__proto__.new.call(this);
    ;
  }).prototype = tile_layer._TileLayerState.prototype;
  dart.addTypeTests(tile_layer._TileLayerState);
  dart.addTypeCaches(tile_layer._TileLayerState);
  dart.setMethodSignature(tile_layer._TileLayerState, () => ({
    __proto__: dart.getMethods(tile_layer._TileLayerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getTileSize: dart.fnType(point.CustomPoint$(core.num), []),
    [_updateLevels]: dart.fnType(dart.nullable(level$.Level), [flutter_map_state.FlutterMapState]),
    [_resetTiles]: dart.fnType(dart.void, []),
    [_clampZoom]: dart.fnType(core.double, [core.double]),
    [_setView]: dart.fnType(dart.void, [flutter_map_state.FlutterMapState, latlong.LatLng, core.double]),
    [_resetGrid]: dart.fnType(dart.void, [flutter_map_state.FlutterMapState]),
    [_getTiledPixelBounds]: dart.fnType(bounds.Bounds$(core.num), [flutter_map_state.FlutterMapState, latlong.LatLng]),
    [_update]: dart.fnType(dart.void, [flutter_map_state.FlutterMapState, dart.nullable(latlong.LatLng)]),
    [_isValidTile]: dart.fnType(core.bool, [crs.Crs, coords.Coords$(core.num)]),
    [_areCoordsInsideTileBounds]: dart.fnType(core.bool, [coords.Coords$(core.num), dart.nullable(bounds.Bounds$(core.num))]),
    [_latLngBoundsToPixelBounds]: dart.fnType(bounds.Bounds$(core.num), [flutter_map_state.FlutterMapState, latlng_bounds.LatLngBounds, core.double]),
    [_tileReady]: dart.fnType(dart.void, [coords.Coords$(core.double), dart.dynamic, dart.nullable(tile.Tile)]),
    [_getTilePos]: dart.fnType(point.CustomPoint$(core.num), [flutter_map_state.FlutterMapState, coords.Coords$(core.num)]),
    [_pxBoundsToTileRange]: dart.fnType(bounds.Bounds$(core.num), [bounds.Bounds$(core.num)])
  }));
  dart.setGetterSignature(tile_layer._TileLayerState, () => ({
    __proto__: dart.getGetters(tile_layer._TileLayerState.__proto__),
    [_globalTileRange]: bounds.Bounds$(core.num),
    [_tileSize]: point.CustomPoint$(core.num),
    [_tileManager]: tile_manager.TileManager,
    [_transformationCalculator]: transformation_calculator.TransformationCalculator
  }));
  dart.setSetterSignature(tile_layer._TileLayerState, () => ({
    __proto__: dart.getSetters(tile_layer._TileLayerState.__proto__),
    [_globalTileRange]: bounds.Bounds$(core.num),
    [_tileSize]: point.CustomPoint$(core.num),
    [_tileManager]: tile_manager.TileManager,
    [_transformationCalculator]: transformation_calculator.TransformationCalculator
  }));
  dart.setLibraryUri(tile_layer._TileLayerState, I[10]);
  dart.setFieldSignature(tile_layer._TileLayerState, () => ({
    __proto__: dart.getFields(tile_layer._TileLayerState.__proto__),
    [___TileLayerState__globalTileRange]: dart.fieldType(dart.nullable(bounds.Bounds$(core.num))),
    [_wrapX]: dart.fieldType(dart.nullable(tuple.Tuple2$(core.double, core.double))),
    [_wrapY]: dart.fieldType(dart.nullable(tuple.Tuple2$(core.double, core.double))),
    [_tileZoom]: dart.fieldType(dart.nullable(core.double)),
    [_resetSub]: dart.fieldType(dart.nullable(async.StreamSubscription$(dart.void))),
    [_throttleUpdate]: dart.fieldType(dart.nullable(async.StreamController$(dart.nullable(latlong.LatLng)))),
    [___TileLayerState__tileSize]: dart.fieldType(dart.nullable(point.CustomPoint$(core.num))),
    [___TileLayerState__tileManager]: dart.fieldType(dart.nullable(tile_manager.TileManager)),
    [___TileLayerState__transformationCalculator]: dart.fieldType(dart.nullable(transformation_calculator.TransformationCalculator)),
    [_pruneLater]: dart.fieldType(dart.nullable(async.Timer))
  }));
  var _name = dart.privateName(core, "_name");
  tile_layer.EvictErrorTileStrategy = class EvictErrorTileStrategy extends core._Enum {
    toString() {
      return "EvictErrorTileStrategy." + this[_name];
    }
  };
  (tile_layer.EvictErrorTileStrategy.new = function(index, name) {
    tile_layer.EvictErrorTileStrategy.__proto__.new.call(this, index, name);
    ;
  }).prototype = tile_layer.EvictErrorTileStrategy.prototype;
  dart.addTypeTests(tile_layer.EvictErrorTileStrategy);
  dart.addTypeCaches(tile_layer.EvictErrorTileStrategy);
  dart.setLibraryUri(tile_layer.EvictErrorTileStrategy, I[10]);
  dart.setStaticFieldSignature(tile_layer.EvictErrorTileStrategy, () => ['values', 'none', 'dispose', 'notVisibleRespectMargin', 'notVisible']);
  dart.defineExtensionMethods(tile_layer.EvictErrorTileStrategy, ['toString']);
  dart.defineLazy(tile_layer.EvictErrorTileStrategy, {
    /*tile_layer.EvictErrorTileStrategy.values*/get values() {
      return C[22] || CT.C22;
    },
    /*tile_layer.EvictErrorTileStrategy.none*/get none() {
      return C[12] || CT.C12;
    },
    /*tile_layer.EvictErrorTileStrategy.dispose*/get dispose() {
      return C[23] || CT.C23;
    },
    /*tile_layer.EvictErrorTileStrategy.notVisibleRespectMargin*/get notVisibleRespectMargin() {
      return C[24] || CT.C24;
    },
    /*tile_layer.EvictErrorTileStrategy.notVisible*/get notVisible() {
      return C[25] || CT.C25;
    }
  }, false);
  var service = dart.privateName(tile_layer, "WMSTileLayerOptions.service");
  var request = dart.privateName(tile_layer, "WMSTileLayerOptions.request");
  var baseUrl$ = dart.privateName(tile_layer, "WMSTileLayerOptions.baseUrl");
  var layers$ = dart.privateName(tile_layer, "WMSTileLayerOptions.layers");
  var styles$ = dart.privateName(tile_layer, "WMSTileLayerOptions.styles");
  var format$ = dart.privateName(tile_layer, "WMSTileLayerOptions.format");
  var version$ = dart.privateName(tile_layer, "WMSTileLayerOptions.version");
  var transparent$ = dart.privateName(tile_layer, "WMSTileLayerOptions.transparent");
  var uppercaseBoolValue$ = dart.privateName(tile_layer, "WMSTileLayerOptions.uppercaseBoolValue");
  var crs$ = dart.privateName(tile_layer, "WMSTileLayerOptions.crs");
  var otherParameters$ = dart.privateName(tile_layer, "WMSTileLayerOptions.otherParameters");
  var Earth_wrapLat = dart.privateName(crs, "Earth.wrapLat");
  var Tuple2_item2 = dart.privateName(tuple, "Tuple2.item2");
  var Tuple2_item1 = dart.privateName(tuple, "Tuple2.item1");
  var Earth_wrapLng = dart.privateName(crs, "Earth.wrapLng");
  var Transformation_d = dart.privateName(crs, "Transformation.d");
  var Transformation_c = dart.privateName(crs, "Transformation.c");
  var Transformation_b = dart.privateName(crs, "Transformation.b");
  var Transformation_a = dart.privateName(crs, "Transformation.a");
  var Epsg3857_transformation = dart.privateName(crs, "Epsg3857.transformation");
  var Epsg3857_projection = dart.privateName(crs, "Epsg3857.projection");
  var Epsg3857_code = dart.privateName(crs, "Epsg3857.code");
  var __WMSTileLayerOptions__encodedBaseUrl = dart.privateName(tile_layer, "_#WMSTileLayerOptions#_encodedBaseUrl");
  var __WMSTileLayerOptions__versionNumber = dart.privateName(tile_layer, "_#WMSTileLayerOptions#_versionNumber");
  var _versionNumber = dart.privateName(tile_layer, "_versionNumber");
  var _buildEncodedBaseUrl = dart.privateName(tile_layer, "_buildEncodedBaseUrl");
  tile_layer.WMSTileLayerOptions = class WMSTileLayerOptions extends core.Object {
    get service() {
      return this[service];
    }
    set service(value) {
      super.service = value;
    }
    get request() {
      return this[request];
    }
    set request(value) {
      super.request = value;
    }
    get baseUrl() {
      return this[baseUrl$];
    }
    set baseUrl(value) {
      super.baseUrl = value;
    }
    get layers() {
      return this[layers$];
    }
    set layers(value) {
      super.layers = value;
    }
    get styles() {
      return this[styles$];
    }
    set styles(value) {
      super.styles = value;
    }
    get format() {
      return this[format$];
    }
    set format(value) {
      super.format = value;
    }
    get version() {
      return this[version$];
    }
    set version(value) {
      super.version = value;
    }
    get transparent() {
      return this[transparent$];
    }
    set transparent(value) {
      super.transparent = value;
    }
    get uppercaseBoolValue() {
      return this[uppercaseBoolValue$];
    }
    set uppercaseBoolValue(value) {
      super.uppercaseBoolValue = value;
    }
    get crs() {
      return this[crs$];
    }
    set crs(value) {
      super.crs = value;
    }
    get otherParameters() {
      return this[otherParameters$];
    }
    set otherParameters(value) {
      super.otherParameters = value;
    }
    get [_encodedBaseUrl]() {
      let t5;
      t5 = this[__WMSTileLayerOptions__encodedBaseUrl];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_encodedBaseUrl")) : t5;
    }
    set [_encodedBaseUrl](library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer_options$46dart$58$58_encodedBaseUrl$35param) {
      if (this[__WMSTileLayerOptions__encodedBaseUrl] == null)
        this[__WMSTileLayerOptions__encodedBaseUrl] = library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer_options$46dart$58$58_encodedBaseUrl$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_encodedBaseUrl"));
    }
    get [_versionNumber]() {
      let t5;
      t5 = this[__WMSTileLayerOptions__versionNumber];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_versionNumber")) : t5;
    }
    set [_versionNumber](library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer_options$46dart$58$58_versionNumber$35param) {
      if (this[__WMSTileLayerOptions__versionNumber] == null)
        this[__WMSTileLayerOptions__versionNumber] = library$32package$58flutter_map$47src$47layer$47tile_layer$47tile_layer_options$46dart$58$58_versionNumber$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_versionNumber"));
    }
    static ['_#new#tearOff'](opts) {
      let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
      let layers = opts && 'layers' in opts ? opts.layers : C[7] || CT.C7;
      let styles = opts && 'styles' in opts ? opts.styles : C[7] || CT.C7;
      let format = opts && 'format' in opts ? opts.format : "image/png";
      let version = opts && 'version' in opts ? opts.version : "1.1.1";
      let transparent = opts && 'transparent' in opts ? opts.transparent : true;
      let uppercaseBoolValue = opts && 'uppercaseBoolValue' in opts ? opts.uppercaseBoolValue : false;
      let crs = opts && 'crs' in opts ? opts.crs : C[26] || CT.C26;
      let otherParameters = opts && 'otherParameters' in opts ? opts.otherParameters : C[0] || CT.C0;
      return new tile_layer.WMSTileLayerOptions.new({baseUrl: baseUrl, layers: layers, styles: styles, format: format, version: version, transparent: transparent, uppercaseBoolValue: uppercaseBoolValue, crs: crs, otherParameters: otherParameters});
    }
    [_buildEncodedBaseUrl]() {
      let t5;
      let projectionKey = this[_versionNumber] >= 1.3 ? "crs" : "srs";
      let buffer = (t5 = new core.StringBuffer.new(this.baseUrl), (() => {
        t5.write("&service=" + this.service);
        t5.write("&request=" + this.request);
        t5.write("&layers=" + this.layers[$map](core.String, C[30] || CT.C30)[$join](","));
        t5.write("&styles=" + this.styles[$map](core.String, C[30] || CT.C30)[$join](","));
        t5.write("&format=" + core.Uri.encodeComponent(this.format));
        t5.write("&" + projectionKey + "=" + core.Uri.encodeComponent(this.crs.code));
        t5.write("&version=" + core.Uri.encodeComponent(this.version));
        t5.write("&transparent=" + dart.str(this.uppercaseBoolValue ? this.transparent[$toString]()[$toUpperCase]() : this.transparent));
        return t5;
      })());
      this.otherParameters[$forEach](dart.fn((k, v) => buffer.write("&" + k + "=" + core.Uri.encodeComponent(v)), T$.StringAndStringTovoid()));
      return buffer.toString();
    }
    getUrl(coords, tileSize, retinaMode) {
      let tileSizePoint = new (T$.CustomPointOfnum()).new(tileSize, tileSize);
      let nvPoint = coords.scaleBy(tileSizePoint);
      let sePoint = nvPoint['+'](tileSizePoint);
      let nvCoords = dart.nullCheck(this.crs.pointToLatLng(nvPoint, coords.z));
      let seCoords = dart.nullCheck(this.crs.pointToLatLng(sePoint, coords.z));
      let nv = this.crs.projection.project(nvCoords);
      let se = this.crs.projection.project(seCoords);
      let bounds = T$.BoundsOfnum().new(nv, se);
      let bbox = this[_versionNumber] >= 1.3 && crs.Epsg4326.is(this.crs) ? T$.JSArrayOfnum().of([bounds.min.y, bounds.min.x, bounds.max.y, bounds.max.x]) : T$.JSArrayOfnum().of([bounds.min.x, bounds.min.y, bounds.max.x, bounds.max.y]);
      let buffer = new core.StringBuffer.new(this[_encodedBaseUrl]);
      buffer.write("&width=" + dart.str(retinaMode ? tileSize * 2 : tileSize));
      buffer.write("&height=" + dart.str(retinaMode ? tileSize * 2 : tileSize));
      buffer.write("&bbox=" + bbox[$join](","));
      return buffer.toString();
    }
  };
  (tile_layer.WMSTileLayerOptions.new = function(opts) {
    let t5;
    let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
    let layers = opts && 'layers' in opts ? opts.layers : C[7] || CT.C7;
    let styles = opts && 'styles' in opts ? opts.styles : C[7] || CT.C7;
    let format = opts && 'format' in opts ? opts.format : "image/png";
    let version = opts && 'version' in opts ? opts.version : "1.1.1";
    let transparent = opts && 'transparent' in opts ? opts.transparent : true;
    let uppercaseBoolValue = opts && 'uppercaseBoolValue' in opts ? opts.uppercaseBoolValue : false;
    let crs = opts && 'crs' in opts ? opts.crs : C[26] || CT.C26;
    let otherParameters = opts && 'otherParameters' in opts ? opts.otherParameters : C[0] || CT.C0;
    this[service] = "WMS";
    this[request] = "GetMap";
    this[__WMSTileLayerOptions__encodedBaseUrl] = null;
    this[__WMSTileLayerOptions__versionNumber] = null;
    this[baseUrl$] = baseUrl;
    this[layers$] = layers;
    this[styles$] = styles;
    this[format$] = format;
    this[version$] = version;
    this[transparent$] = transparent;
    this[uppercaseBoolValue$] = uppercaseBoolValue;
    this[crs$] = crs;
    this[otherParameters$] = otherParameters;
    this[_versionNumber] = (t5 = core.double.tryParse(this.version[$split](".")[$take](2)[$join](".")), t5 == null ? 0.0 : t5);
    this[_encodedBaseUrl] = this[_buildEncodedBaseUrl]();
  }).prototype = tile_layer.WMSTileLayerOptions.prototype;
  dart.addTypeTests(tile_layer.WMSTileLayerOptions);
  dart.addTypeCaches(tile_layer.WMSTileLayerOptions);
  dart.setMethodSignature(tile_layer.WMSTileLayerOptions, () => ({
    __proto__: dart.getMethods(tile_layer.WMSTileLayerOptions.__proto__),
    [_buildEncodedBaseUrl]: dart.fnType(core.String, []),
    getUrl: dart.fnType(core.String, [coords.Coords$(core.num), core.int, core.bool])
  }));
  dart.setGetterSignature(tile_layer.WMSTileLayerOptions, () => ({
    __proto__: dart.getGetters(tile_layer.WMSTileLayerOptions.__proto__),
    [_encodedBaseUrl]: core.String,
    [_versionNumber]: core.double
  }));
  dart.setSetterSignature(tile_layer.WMSTileLayerOptions, () => ({
    __proto__: dart.getSetters(tile_layer.WMSTileLayerOptions.__proto__),
    [_encodedBaseUrl]: core.String,
    [_versionNumber]: core.double
  }));
  dart.setLibraryUri(tile_layer.WMSTileLayerOptions, I[10]);
  dart.setFieldSignature(tile_layer.WMSTileLayerOptions, () => ({
    __proto__: dart.getFields(tile_layer.WMSTileLayerOptions.__proto__),
    service: dart.finalFieldType(core.String),
    request: dart.finalFieldType(core.String),
    baseUrl: dart.finalFieldType(core.String),
    layers: dart.finalFieldType(core.List$(core.String)),
    styles: dart.finalFieldType(core.List$(core.String)),
    format: dart.finalFieldType(core.String),
    version: dart.finalFieldType(core.String),
    transparent: dart.finalFieldType(core.bool),
    uppercaseBoolValue: dart.finalFieldType(core.bool),
    crs: dart.finalFieldType(crs.Crs),
    otherParameters: dart.finalFieldType(core.Map$(core.String, core.String)),
    [__WMSTileLayerOptions__encodedBaseUrl]: dart.fieldType(dart.nullable(core.String)),
    [__WMSTileLayerOptions__versionNumber]: dart.fieldType(dart.nullable(core.double))
  }));
  var CkMatrixColorFilter_matrix = dart.privateName(_engine, "CkMatrixColorFilter.matrix");
  tile_builder.darkModeTilesContainerBuilder = function darkModeTilesContainerBuilder(context, tilesContainer, tiles) {
    return new color_filter.ColorFiltered.new({colorFilter: C[31] || CT.C31, child: tilesContainer, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
  };
  tile_builder.darkModeTileBuilder = function darkModeTileBuilder(context, tileWidget, tile) {
    return new color_filter.ColorFiltered.new({colorFilter: C[31] || CT.C31, child: tileWidget, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
  };
  tile_builder.coordinateDebugTileBuilder = function coordinateDebugTileBuilder(context, tileWidget, tile) {
    let coords = tile.coords;
    let readableKey = dart.str(coords.x[$floor]()) + " : " + dart.str(coords.y[$floor]()) + " : " + dart.str(coords.z[$floor]());
    return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all()}), child: new basic.Stack.new({fit: stack.StackFit.passthrough, children: T$.JSArrayOfWidget().of([tileWidget, new basic.Center.new({child: new text.Text.new(readableKey, {style: theme.Theme.of(context).textTheme.headline5, $creationLocationd_0dea112b090073317d4: C[35] || CT.C35}), $creationLocationd_0dea112b090073317d4: C[36] || CT.C36})]), $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38});
  };
  tile_builder.loadingTimeDebugTileBuilder = function loadingTimeDebugTileBuilder(context, tileWidget, tile) {
    let loadStarted = tile.loadStarted;
    let loaded = tile.loaded;
    let time = loaded == null ? "Loading" : dart.str((loaded.millisecond - loadStarted.millisecond)[$abs]()) + " ms";
    return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all()}), child: new basic.Stack.new({fit: stack.StackFit.passthrough, children: T$.JSArrayOfWidget().of([tileWidget, new basic.Center.new({child: new text.Text.new(time, {style: theme.Theme.of(context).textTheme.headline5, $creationLocationd_0dea112b090073317d4: C[39] || CT.C39}), $creationLocationd_0dea112b090073317d4: C[40] || CT.C40})]), $creationLocationd_0dea112b090073317d4: C[41] || CT.C41}), $creationLocationd_0dea112b090073317d4: C[42] || CT.C42});
  };
  var coords$ = dart.privateName(tile, "Tile.coords");
  var tilePos$ = dart.privateName(tile, "Tile.tilePos");
  var imageProvider$ = dart.privateName(tile, "Tile.imageProvider");
  var current$ = dart.privateName(tile, "Tile.current");
  var retain$ = dart.privateName(tile, "Tile.retain");
  var active$ = dart.privateName(tile, "Tile.active");
  var loadError$ = dart.privateName(tile, "Tile.loadError");
  var loaded = dart.privateName(tile, "Tile.loaded");
  var animationController = dart.privateName(tile, "Tile.animationController");
  var tileReady$ = dart.privateName(tile, "Tile.tileReady");
  var imageInfo = dart.privateName(tile, "Tile.imageInfo");
  var __Tile_loadStarted = dart.privateName(tile, "_#Tile#loadStarted");
  var _imageStream = dart.privateName(tile, "_imageStream");
  var __Tile__listener = dart.privateName(tile, "_#Tile#_listener");
  var _listener = dart.privateName(tile, "_listener");
  var _tileOnLoad = dart.privateName(tile, "_tileOnLoad");
  var _tileOnError = dart.privateName(tile, "_tileOnError");
  var _onAnimateEnd = dart.privateName(tile, "_onAnimateEnd");
  tile.Tile = class Tile extends core.Object {
    get coords() {
      return this[coords$];
    }
    set coords(value) {
      super.coords = value;
    }
    get tilePos() {
      return this[tilePos$];
    }
    set tilePos(value) {
      super.tilePos = value;
    }
    get imageProvider() {
      return this[imageProvider$];
    }
    set imageProvider(value) {
      this[imageProvider$] = value;
    }
    get current() {
      return this[current$];
    }
    set current(value) {
      this[current$] = value;
    }
    get retain() {
      return this[retain$];
    }
    set retain(value) {
      this[retain$] = value;
    }
    get active() {
      return this[active$];
    }
    set active(value) {
      this[active$] = value;
    }
    get loadError() {
      return this[loadError$];
    }
    set loadError(value) {
      this[loadError$] = value;
    }
    get loaded() {
      return this[loaded];
    }
    set loaded(value) {
      this[loaded] = value;
    }
    get animationController() {
      return this[animationController];
    }
    set animationController(value) {
      this[animationController] = value;
    }
    get tileReady() {
      return this[tileReady$];
    }
    set tileReady(value) {
      this[tileReady$] = value;
    }
    get imageInfo() {
      return this[imageInfo];
    }
    set imageInfo(value) {
      this[imageInfo] = value;
    }
    get loadStarted() {
      let t5;
      t5 = this[__Tile_loadStarted];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("loadStarted")) : t5;
    }
    set loadStarted(loadStarted$35param) {
      this[__Tile_loadStarted] = loadStarted$35param;
    }
    get opacity() {
      return this.animationController == null ? this.active ? 1.0 : 0.0 : dart.nullCheck(this.animationController).value;
    }
    get [_listener]() {
      let t5;
      t5 = this[__Tile__listener];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_listener")) : t5;
    }
    set [_listener](library$32package$58flutter_map$47src$47layer$47tile_layer$47tile$46dart$58$58_listener$35param) {
      this[__Tile__listener] = library$32package$58flutter_map$47src$47layer$47tile_layer$47tile$46dart$58$58_listener$35param;
    }
    static ['_#new#tearOff'](opts) {
      let coords = opts && 'coords' in opts ? opts.coords : null;
      let tilePos = opts && 'tilePos' in opts ? opts.tilePos : null;
      let imageProvider = opts && 'imageProvider' in opts ? opts.imageProvider : null;
      let tileReady = opts && 'tileReady' in opts ? opts.tileReady : null;
      let current = opts && 'current' in opts ? opts.current : false;
      let active = opts && 'active' in opts ? opts.active : false;
      let retain = opts && 'retain' in opts ? opts.retain : false;
      let loadError = opts && 'loadError' in opts ? opts.loadError : false;
      return new tile.Tile.new({coords: coords, tilePos: tilePos, imageProvider: imageProvider, tileReady: tileReady, current: current, active: active, retain: retain, loadError: loadError});
    }
    loadTileImage() {
      let t5, t5$;
      this.loadStarted = new core.DateTime.now();
      try {
        let oldImageStream = this[_imageStream];
        this[_imageStream] = this.imageProvider.resolve(image_provider.ImageConfiguration.empty);
        if (!dart.nullCheck(this[_imageStream]).key[$_equals]((t5 = oldImageStream, t5 == null ? null : t5.key))) {
          t5$ = oldImageStream;
          t5$ == null ? null : t5$.removeListener(this[_listener]);
          this[_listener] = new image_stream.ImageStreamListener.new(dart.bind(this, _tileOnLoad), {onError: dart.bind(this, _tileOnError)});
          dart.nullCheck(this[_imageStream]).addListener(this[_listener]);
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        let s = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          this[_tileOnError](e, s);
        } else
          throw e$;
      }
    }
    dispose(evict = false) {
      let t7, t7$, t7$0;
      if (evict) {
        try {
          this.imageProvider.evict().catchError(dart.fn(e => {
            print.debugPrint(e[$toString]());
          }, T$.ObjectToNull()));
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (core.Object.is(e)) {
            print.debugPrint(e[$toString]());
          } else
            throw e$;
        }
      }
      t7 = this.animationController;
      t7 == null ? null : t7.removeStatusListener(dart.bind(this, _onAnimateEnd));
      t7$ = this.animationController;
      t7$ == null ? null : t7$.dispose();
      t7$0 = this[_imageStream];
      t7$0 == null ? null : t7$0.removeListener(this[_listener]);
    }
    startFadeInAnimation(duration, vsync, opts) {
      let t7, t7$, t7$0;
      let from = opts && 'from' in opts ? opts.from : null;
      t7 = this.animationController;
      t7 == null ? null : t7.removeStatusListener(dart.bind(this, _onAnimateEnd));
      t7$ = this.animationController;
      t7$ == null ? null : t7$.dispose();
      this.animationController = (t7$0 = new animation_controller.AnimationController.new({duration: duration, vsync: vsync}), (() => {
        t7$0.addStatusListener(dart.bind(this, _onAnimateEnd));
        return t7$0;
      })());
      dart.nullCheck(this.animationController).forward({from: from});
    }
    [_onAnimateEnd](status) {
      if (status === animation.AnimationStatus.completed) {
        this.active = true;
      }
    }
    [_tileOnLoad](imageInfo, synchronousCall) {
      if (this.tileReady != null) {
        this.imageInfo = imageInfo;
        dart.nullCheck(this.tileReady)(this.coords, null, this);
      }
    }
    [_tileOnError](exception, stackTrace) {
      let t7;
      if (this.tileReady != null) {
        dart.nullCheck(this.tileReady)(this.coords, (t7 = exception, t7 == null ? "Unknown exception during loadTileImage" : t7), this);
      }
    }
    get coordsKey() {
      return this.coords.key;
    }
    zIndex(maxZoom, currentZoom) {
      return maxZoom - (currentZoom - this.coords.z)[$abs]();
    }
    get hashCode() {
      return this.coords.hashCode;
    }
    _equals(other) {
      if (other == null) return false;
      return tile.Tile.is(other) && this.coords._equals(other.coords);
    }
  };
  (tile.Tile.new = function(opts) {
    let coords = opts && 'coords' in opts ? opts.coords : null;
    let tilePos = opts && 'tilePos' in opts ? opts.tilePos : null;
    let imageProvider = opts && 'imageProvider' in opts ? opts.imageProvider : null;
    let tileReady = opts && 'tileReady' in opts ? opts.tileReady : null;
    let current = opts && 'current' in opts ? opts.current : false;
    let active = opts && 'active' in opts ? opts.active : false;
    let retain = opts && 'retain' in opts ? opts.retain : false;
    let loadError = opts && 'loadError' in opts ? opts.loadError : false;
    this[loaded] = null;
    this[__Tile_loadStarted] = null;
    this[animationController] = null;
    this[imageInfo] = null;
    this[_imageStream] = null;
    this[__Tile__listener] = null;
    this[coords$] = coords;
    this[tilePos$] = tilePos;
    this[imageProvider$] = imageProvider;
    this[tileReady$] = tileReady;
    this[current$] = current;
    this[active$] = active;
    this[retain$] = retain;
    this[loadError$] = loadError;
    ;
  }).prototype = tile.Tile.prototype;
  dart.addTypeTests(tile.Tile);
  dart.addTypeCaches(tile.Tile);
  dart.setMethodSignature(tile.Tile, () => ({
    __proto__: dart.getMethods(tile.Tile.__proto__),
    loadTileImage: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [], [core.bool]),
    startFadeInAnimation: dart.fnType(dart.void, [core.Duration, ticker.TickerProvider], {from: dart.nullable(core.double)}, {}),
    [_onAnimateEnd]: dart.fnType(dart.void, [animation.AnimationStatus]),
    [_tileOnLoad]: dart.fnType(dart.void, [image_stream.ImageInfo, core.bool]),
    [_tileOnError]: dart.fnType(dart.void, [dart.dynamic, dart.nullable(core.StackTrace)]),
    zIndex: dart.fnType(core.double, [core.double, core.double])
  }));
  dart.setGetterSignature(tile.Tile, () => ({
    __proto__: dart.getGetters(tile.Tile.__proto__),
    loadStarted: core.DateTime,
    opacity: core.double,
    [_listener]: image_stream.ImageStreamListener,
    coordsKey: core.String
  }));
  dart.setSetterSignature(tile.Tile, () => ({
    __proto__: dart.getSetters(tile.Tile.__proto__),
    loadStarted: core.DateTime,
    [_listener]: image_stream.ImageStreamListener
  }));
  dart.setLibraryUri(tile.Tile, I[11]);
  dart.setFieldSignature(tile.Tile, () => ({
    __proto__: dart.getFields(tile.Tile.__proto__),
    coords: dart.finalFieldType(coords.Coords$(core.double)),
    tilePos: dart.finalFieldType(point.CustomPoint$(core.num)),
    imageProvider: dart.fieldType(image_provider.ImageProvider$(core.Object)),
    current: dart.fieldType(core.bool),
    retain: dart.fieldType(core.bool),
    active: dart.fieldType(core.bool),
    loadError: dart.fieldType(core.bool),
    loaded: dart.fieldType(dart.nullable(core.DateTime)),
    [__Tile_loadStarted]: dart.fieldType(dart.nullable(core.DateTime)),
    animationController: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    tileReady: dart.fieldType(dart.nullable(dart.fnType(dart.void, [coords.Coords$(core.double), dart.dynamic, tile.Tile]))),
    imageInfo: dart.fieldType(dart.nullable(image_stream.ImageInfo)),
    [_imageStream]: dart.fieldType(dart.nullable(image_stream.ImageStream)),
    [__Tile__listener]: dart.fieldType(dart.nullable(image_stream.ImageStreamListener))
  }));
  dart.defineExtensionMethods(tile.Tile, ['_equals']);
  dart.defineExtensionAccessors(tile.Tile, ['hashCode']);
  var __Coords_z = dart.privateName(coords, "_#Coords#z");
  const _is_Coords_default = Symbol('_is_Coords_default');
  coords.Coords$ = dart.generic(T => {
    class Coords extends point.CustomPoint$(T) {
      get z() {
        let t7;
        t7 = this[__Coords_z];
        return t7 == null ? dart.throw(new _internal.LateError.fieldNI("z")) : t7;
      }
      set z(z$35param) {
        T.as(z$35param);
        this[__Coords_z] = z$35param;
      }
      static ['_#new#tearOff'](T, x, y) {
        return new (coords.Coords$(T)).new(x, y);
      }
      wrap(wrapX, wrapY) {
        let newCoords = new (T$.CoordsOfdouble()).new(wrapX != null ? util.wrapNum(this.x[$toDouble](), wrapX) : this.x[$toDouble](), wrapY != null ? util.wrapNum(this.y[$toDouble](), wrapY) : this.y[$toDouble]());
        newCoords.z = this.z[$toDouble]();
        return newCoords;
      }
      get key() {
        return dart.str(this.x) + ":" + dart.str(this.y) + ":" + dart.str(this.z);
      }
      toString() {
        return "Coords(" + dart.str(this.x) + ", " + dart.str(this.y) + ", " + dart.str(this.z) + ")";
      }
      _equals(other) {
        if (other == null) return false;
        if (T$.CoordsOfnum().is(other)) {
          return this.x === other.x && this.y === other.y && this.z === other.z;
        }
        return false;
      }
      get hashCode() {
        return core.Object.hash(this.x[$hashCode], this.y[$hashCode], this.z[$hashCode]);
      }
    }
    (Coords.new = function(x, y) {
      this[__Coords_z] = null;
      Coords.__proto__.new.call(this, x, y);
      ;
    }).prototype = Coords.prototype;
    dart.addTypeTests(Coords);
    Coords.prototype[_is_Coords_default] = true;
    dart.addTypeCaches(Coords);
    dart.setMethodSignature(Coords, () => ({
      __proto__: dart.getMethods(Coords.__proto__),
      wrap: dart.fnType(coords.Coords$(core.double), [dart.nullable(tuple.Tuple2$(core.double, core.double)), dart.nullable(tuple.Tuple2$(core.double, core.double))])
    }));
    dart.setGetterSignature(Coords, () => ({
      __proto__: dart.getGetters(Coords.__proto__),
      z: T,
      key: core.String
    }));
    dart.setSetterSignature(Coords, () => ({
      __proto__: dart.getSetters(Coords.__proto__),
      z: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(Coords, I[12]);
    dart.setFieldSignature(Coords, () => ({
      __proto__: dart.getFields(Coords.__proto__),
      [__Coords_z]: dart.fieldType(dart.nullable(T))
    }));
    dart.defineExtensionMethods(Coords, ['toString', '_equals']);
    dart.defineExtensionAccessors(Coords, ['hashCode']);
    return Coords;
  });
  coords.Coords = coords.Coords$();
  dart.addTypeTests(coords.Coords, _is_Coords_default);
  var points$ = dart.privateName(polyline_layer, "Polyline.points");
  var offsets = dart.privateName(polyline_layer, "Polyline.offsets");
  var strokeWidth$ = dart.privateName(polyline_layer, "Polyline.strokeWidth");
  var color$ = dart.privateName(polyline_layer, "Polyline.color");
  var borderStrokeWidth$ = dart.privateName(polyline_layer, "Polyline.borderStrokeWidth");
  var borderColor$ = dart.privateName(polyline_layer, "Polyline.borderColor");
  var gradientColors$ = dart.privateName(polyline_layer, "Polyline.gradientColors");
  var colorsStop$ = dart.privateName(polyline_layer, "Polyline.colorsStop");
  var isDotted$ = dart.privateName(polyline_layer, "Polyline.isDotted");
  var strokeCap$ = dart.privateName(polyline_layer, "Polyline.strokeCap");
  var strokeJoin$ = dart.privateName(polyline_layer, "Polyline.strokeJoin");
  var __Polyline_boundingBox = dart.privateName(polyline_layer, "_#Polyline#boundingBox");
  polyline_layer.Polyline = class Polyline extends core.Object {
    get points() {
      return this[points$];
    }
    set points(value) {
      super.points = value;
    }
    get offsets() {
      return this[offsets];
    }
    set offsets(value) {
      super.offsets = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get borderStrokeWidth() {
      return this[borderStrokeWidth$];
    }
    set borderStrokeWidth(value) {
      super.borderStrokeWidth = value;
    }
    get borderColor() {
      return this[borderColor$];
    }
    set borderColor(value) {
      super.borderColor = value;
    }
    get gradientColors() {
      return this[gradientColors$];
    }
    set gradientColors(value) {
      super.gradientColors = value;
    }
    get colorsStop() {
      return this[colorsStop$];
    }
    set colorsStop(value) {
      super.colorsStop = value;
    }
    get isDotted() {
      return this[isDotted$];
    }
    set isDotted(value) {
      super.isDotted = value;
    }
    get strokeCap() {
      return this[strokeCap$];
    }
    set strokeCap(value) {
      super.strokeCap = value;
    }
    get strokeJoin() {
      return this[strokeJoin$];
    }
    set strokeJoin(value) {
      super.strokeJoin = value;
    }
    get boundingBox() {
      let t7;
      t7 = this[__Polyline_boundingBox];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("boundingBox")) : t7;
    }
    set boundingBox(boundingBox$35param) {
      this[__Polyline_boundingBox] = boundingBox$35param;
    }
    static ['_#new#tearOff'](opts) {
      let points = opts && 'points' in opts ? opts.points : null;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 1;
      let color = opts && 'color' in opts ? opts.color : C[43] || CT.C43;
      let borderStrokeWidth = opts && 'borderStrokeWidth' in opts ? opts.borderStrokeWidth : 0;
      let borderColor = opts && 'borderColor' in opts ? opts.borderColor : C[44] || CT.C44;
      let gradientColors = opts && 'gradientColors' in opts ? opts.gradientColors : null;
      let colorsStop = opts && 'colorsStop' in opts ? opts.colorsStop : null;
      let isDotted = opts && 'isDotted' in opts ? opts.isDotted : false;
      let strokeCap = opts && 'strokeCap' in opts ? opts.strokeCap : C[45] || CT.C45;
      let strokeJoin = opts && 'strokeJoin' in opts ? opts.strokeJoin : C[46] || CT.C46;
      return new polyline_layer.Polyline.new({points: points, strokeWidth: strokeWidth, color: color, borderStrokeWidth: borderStrokeWidth, borderColor: borderColor, gradientColors: gradientColors, colorsStop: colorsStop, isDotted: isDotted, strokeCap: strokeCap, strokeJoin: strokeJoin});
    }
  };
  (polyline_layer.Polyline.new = function(opts) {
    let points = opts && 'points' in opts ? opts.points : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 1;
    let color = opts && 'color' in opts ? opts.color : C[43] || CT.C43;
    let borderStrokeWidth = opts && 'borderStrokeWidth' in opts ? opts.borderStrokeWidth : 0;
    let borderColor = opts && 'borderColor' in opts ? opts.borderColor : C[44] || CT.C44;
    let gradientColors = opts && 'gradientColors' in opts ? opts.gradientColors : null;
    let colorsStop = opts && 'colorsStop' in opts ? opts.colorsStop : null;
    let isDotted = opts && 'isDotted' in opts ? opts.isDotted : false;
    let strokeCap = opts && 'strokeCap' in opts ? opts.strokeCap : C[45] || CT.C45;
    let strokeJoin = opts && 'strokeJoin' in opts ? opts.strokeJoin : C[46] || CT.C46;
    this[offsets] = T$.JSArrayOfOffset().of([]);
    this[__Polyline_boundingBox] = null;
    this[points$] = points;
    this[strokeWidth$] = strokeWidth;
    this[color$] = color;
    this[borderStrokeWidth$] = borderStrokeWidth;
    this[borderColor$] = borderColor;
    this[gradientColors$] = gradientColors;
    this[colorsStop$] = colorsStop;
    this[isDotted$] = isDotted;
    this[strokeCap$] = strokeCap;
    this[strokeJoin$] = strokeJoin;
    ;
  }).prototype = polyline_layer.Polyline.prototype;
  dart.addTypeTests(polyline_layer.Polyline);
  dart.addTypeCaches(polyline_layer.Polyline);
  dart.setGetterSignature(polyline_layer.Polyline, () => ({
    __proto__: dart.getGetters(polyline_layer.Polyline.__proto__),
    boundingBox: latlng_bounds.LatLngBounds
  }));
  dart.setSetterSignature(polyline_layer.Polyline, () => ({
    __proto__: dart.getSetters(polyline_layer.Polyline.__proto__),
    boundingBox: latlng_bounds.LatLngBounds
  }));
  dart.setLibraryUri(polyline_layer.Polyline, I[13]);
  dart.setFieldSignature(polyline_layer.Polyline, () => ({
    __proto__: dart.getFields(polyline_layer.Polyline.__proto__),
    points: dart.finalFieldType(core.List$(latlong.LatLng)),
    offsets: dart.finalFieldType(core.List$(ui.Offset)),
    strokeWidth: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    borderStrokeWidth: dart.finalFieldType(core.double),
    borderColor: dart.finalFieldType(dart.nullable(ui.Color)),
    gradientColors: dart.finalFieldType(dart.nullable(core.List$(ui.Color))),
    colorsStop: dart.finalFieldType(dart.nullable(core.List$(core.double))),
    isDotted: dart.finalFieldType(core.bool),
    strokeCap: dart.finalFieldType(ui.StrokeCap),
    strokeJoin: dart.finalFieldType(ui.StrokeJoin),
    [__Polyline_boundingBox]: dart.fieldType(dart.nullable(latlng_bounds.LatLngBounds))
  }));
  var polylines$ = dart.privateName(polyline_layer, "PolylineLayer.polylines");
  var polylineCulling$ = dart.privateName(polyline_layer, "PolylineLayer.polylineCulling");
  var saveLayers$ = dart.privateName(polyline_layer, "PolylineLayer.saveLayers");
  var _fillOffsets = dart.privateName(polyline_layer, "_fillOffsets");
  polyline_layer.PolylineLayer = class PolylineLayer extends framework.StatelessWidget {
    get polylines() {
      return this[polylines$];
    }
    set polylines(value) {
      super.polylines = value;
    }
    get polylineCulling() {
      return this[polylineCulling$];
    }
    set polylineCulling(value) {
      super.polylineCulling = value;
    }
    get saveLayers() {
      return this[saveLayers$];
    }
    set saveLayers(value) {
      super.saveLayers = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let polylines = opts && 'polylines' in opts ? opts.polylines : C[47] || CT.C47;
      let polylineCulling = opts && 'polylineCulling' in opts ? opts.polylineCulling : false;
      let saveLayers = opts && 'saveLayers' in opts ? opts.saveLayers : false;
      return new polyline_layer.PolylineLayer.new({key: key, polylines: polylines, polylineCulling: polylineCulling, saveLayers: saveLayers, $creationLocationd_0dea112b090073317d4: C[48] || CT.C48});
    }
    build(context) {
      let map = dart.nullCheck(flutter_map_state.FlutterMapState.maybeOf(context));
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, bc) => {
          let size = new ui.Size.new(bc.maxWidth, bc.maxHeight);
          let polylineWidgets = T$.JSArrayOfWidget().of([]);
          for (let polylineOpt of this.polylines) {
            polylineOpt.offsets[$clear]();
            if (this.polylineCulling && !polylineOpt.boundingBox.isOverlapping(map.bounds)) {
              continue;
            }
            this[_fillOffsets](polylineOpt.offsets, polylineOpt.points, map);
            polylineWidgets[$add](new basic.CustomPaint.new({painter: new polyline_layer.PolylinePainter.new(polylineOpt, this.saveLayers), size: size, $creationLocationd_0dea112b090073317d4: C[49] || CT.C49}));
          }
          return new basic.Stack.new({children: polylineWidgets, $creationLocationd_0dea112b090073317d4: C[50] || CT.C50});
        }, T$.BuildContextAndBoxConstraintsToStack()), $creationLocationd_0dea112b090073317d4: C[51] || CT.C51});
    }
    [_fillOffsets](offsets, points, map) {
      let len = points[$length];
      for (let i = 0; i < len; i = i + 1) {
        let point = points[$_get](i);
        let offset = map.getOffsetFromOrigin(point);
        offsets[$add](offset);
      }
    }
  };
  (polyline_layer.PolylineLayer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let polylines = opts && 'polylines' in opts ? opts.polylines : C[47] || CT.C47;
    let polylineCulling = opts && 'polylineCulling' in opts ? opts.polylineCulling : false;
    let saveLayers = opts && 'saveLayers' in opts ? opts.saveLayers : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[polylines$] = polylines;
    this[polylineCulling$] = polylineCulling;
    this[saveLayers$] = saveLayers;
    polyline_layer.PolylineLayer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (this.polylineCulling) {
      for (let polyline of this.polylines) {
        polyline.boundingBox = new latlng_bounds.LatLngBounds.fromPoints(polyline.points);
      }
    }
  }).prototype = polyline_layer.PolylineLayer.prototype;
  dart.addTypeTests(polyline_layer.PolylineLayer);
  dart.addTypeCaches(polyline_layer.PolylineLayer);
  dart.setMethodSignature(polyline_layer.PolylineLayer, () => ({
    __proto__: dart.getMethods(polyline_layer.PolylineLayer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_fillOffsets]: dart.fnType(dart.void, [core.List$(ui.Offset), core.List$(latlong.LatLng), flutter_map_state.FlutterMapState])
  }));
  dart.setLibraryUri(polyline_layer.PolylineLayer, I[13]);
  dart.setFieldSignature(polyline_layer.PolylineLayer, () => ({
    __proto__: dart.getFields(polyline_layer.PolylineLayer.__proto__),
    polylines: dart.finalFieldType(core.List$(polyline_layer.Polyline)),
    polylineCulling: dart.finalFieldType(core.bool),
    saveLayers: dart.finalFieldType(core.bool)
  }));
  var polylineOpt$ = dart.privateName(polyline_layer, "PolylinePainter.polylineOpt");
  var saveLayers$0 = dart.privateName(polyline_layer, "PolylinePainter.saveLayers");
  var _paintGradient = dart.privateName(polyline_layer, "_paintGradient");
  var _paintDottedLine = dart.privateName(polyline_layer, "_paintDottedLine");
  var _paintLine = dart.privateName(polyline_layer, "_paintLine");
  var _getColorsStop = dart.privateName(polyline_layer, "_getColorsStop");
  var _calculateColorsStop = dart.privateName(polyline_layer, "_calculateColorsStop");
  polyline_layer.PolylinePainter = class PolylinePainter extends custom_paint.CustomPainter {
    get polylineOpt() {
      return this[polylineOpt$];
    }
    set polylineOpt(value) {
      super.polylineOpt = value;
    }
    get saveLayers() {
      return this[saveLayers$0];
    }
    set saveLayers(value) {
      super.saveLayers = value;
    }
    static ['_#new#tearOff'](polylineOpt, saveLayers) {
      return new polyline_layer.PolylinePainter.new(polylineOpt, saveLayers);
    }
    paint(canvas, size) {
      let t7, t7$, t8, t7$0, t7$1, t7$2;
      if (this.polylineOpt.offsets[$isEmpty]) {
        return;
      }
      let rect = ui.Offset.zero['&'](size);
      canvas.clipRect(rect);
      let paint = (t7 = ui.Paint.new(), (() => {
        t7.strokeWidth = this.polylineOpt.strokeWidth;
        t7.strokeCap = this.polylineOpt.strokeCap;
        t7.strokeJoin = this.polylineOpt.strokeJoin;
        t7.blendMode = ui.BlendMode.srcOver;
        return t7;
      })());
      if (this.polylineOpt.gradientColors == null) {
        paint.color = this.polylineOpt.color;
      } else {
        dart.nullCheck(this.polylineOpt.gradientColors)[$isNotEmpty] ? paint.shader = this[_paintGradient]() : paint.color = this.polylineOpt.color;
      }
      let filterPaint = null;
      if (this.polylineOpt.borderColor != null) {
        filterPaint = (t7$ = ui.Paint.new(), (() => {
          t7$.color = dart.nullCheck(this.polylineOpt.borderColor).withAlpha(255);
          t7$.strokeWidth = this.polylineOpt.strokeWidth;
          t7$.strokeCap = this.polylineOpt.strokeCap;
          t7$.strokeJoin = this.polylineOpt.strokeJoin;
          t7$.blendMode = ui.BlendMode.dstOut;
          return t7$;
        })());
      }
      let borderPaint = this.polylineOpt.borderStrokeWidth > 0.0 ? (t7$0 = ui.Paint.new(), (() => {
        t7$0.color = (t8 = this.polylineOpt.borderColor, t8 == null ? C[52] || CT.C52 : t8);
        t7$0.strokeWidth = this.polylineOpt.strokeWidth + this.polylineOpt.borderStrokeWidth;
        t7$0.strokeCap = this.polylineOpt.strokeCap;
        t7$0.strokeJoin = this.polylineOpt.strokeJoin;
        t7$0.blendMode = ui.BlendMode.srcOver;
        return t7$0;
      })()) : null;
      let radius = paint.strokeWidth / 2;
      let borderRadius = dart.notNull((t7$2 = (t7$1 = borderPaint, t7$1 == null ? null : t7$1.strokeWidth), t7$2 == null ? 0.0 : t7$2)) / 2;
      if (this.polylineOpt.isDotted) {
        let spacing = this.polylineOpt.strokeWidth * 1.5;
        if (this.saveLayers) canvas.saveLayer(rect, ui.Paint.new());
        if (borderPaint != null && filterPaint != null) {
          this[_paintDottedLine](canvas, this.polylineOpt.offsets, borderRadius, spacing, borderPaint);
          this[_paintDottedLine](canvas, this.polylineOpt.offsets, radius, spacing, filterPaint);
        }
        this[_paintDottedLine](canvas, this.polylineOpt.offsets, radius, spacing, paint);
        if (this.saveLayers) canvas.restore();
      } else {
        paint.style = ui.PaintingStyle.stroke;
        if (this.saveLayers) canvas.saveLayer(rect, ui.Paint.new());
        if (borderPaint != null && filterPaint != null) {
          borderPaint.style = ui.PaintingStyle.stroke;
          this[_paintLine](canvas, this.polylineOpt.offsets, borderPaint);
          filterPaint.style = ui.PaintingStyle.stroke;
          this[_paintLine](canvas, this.polylineOpt.offsets, filterPaint);
        }
        this[_paintLine](canvas, this.polylineOpt.offsets, paint);
        if (this.saveLayers) canvas.restore();
      }
    }
    [_paintDottedLine](canvas, offsets, radius, stepLength, paint) {
      let path = ui.Path.new();
      let startDistance = 0.0;
      for (let i = 0; i < offsets[$length] - 1; i = i + 1) {
        let o0 = offsets[$_get](i);
        let o1 = offsets[$_get](i + 1);
        let totalDistance = polyline_layer._dist(o0, o1);
        let distance = startDistance;
        while (distance < totalDistance) {
          let f1 = distance / totalDistance;
          let f0 = 1.0 - f1;
          let offset = new ui.Offset.new(o0.dx * f0 + o1.dx * f1, o0.dy * f0 + o1.dy * f1);
          path.addOval(new ui.Rect.fromCircle({center: offset, radius: radius}));
          distance = distance + stepLength;
        }
        startDistance = distance < totalDistance ? stepLength - (totalDistance - distance) : distance - totalDistance;
      }
      path.addOval(new ui.Rect.fromCircle({center: this.polylineOpt.offsets[$last], radius: radius}));
      canvas.drawPath(path, paint);
    }
    [_paintLine](canvas, offsets, paint) {
      let t7;
      if (offsets[$isEmpty]) {
        return;
      }
      let path = (t7 = ui.Path.new(), (() => {
        t7.addPolygon(offsets, false);
        return t7;
      })());
      canvas.drawPath(path, paint);
    }
    [_paintGradient]() {
      return ui.Gradient.linear(this.polylineOpt.offsets[$first], this.polylineOpt.offsets[$last], dart.nullCheck(this.polylineOpt.gradientColors), this[_getColorsStop]());
    }
    [_getColorsStop]() {
      return this.polylineOpt.colorsStop != null && dart.nullCheck(this.polylineOpt.colorsStop)[$length] === dart.nullCheck(this.polylineOpt.gradientColors)[$length] ? this.polylineOpt.colorsStop : this[_calculateColorsStop]();
    }
    [_calculateColorsStop]() {
      let colorsStopInterval = 1.0 / dart.nullCheck(this.polylineOpt.gradientColors)[$length];
      return dart.nullCheck(this.polylineOpt.gradientColors)[$map](core.double, dart.fn(gradientColor => dart.nullCheck(this.polylineOpt.gradientColors)[$indexOf](gradientColor) * colorsStopInterval, T$.ColorTodouble()))[$toList]();
    }
    shouldRepaint(oldDelegate) {
      polyline_layer.PolylinePainter.as(oldDelegate);
      return false;
    }
  };
  (polyline_layer.PolylinePainter.new = function(polylineOpt, saveLayers) {
    this[polylineOpt$] = polylineOpt;
    this[saveLayers$0] = saveLayers;
    polyline_layer.PolylinePainter.__proto__.new.call(this);
    ;
  }).prototype = polyline_layer.PolylinePainter.prototype;
  dart.addTypeTests(polyline_layer.PolylinePainter);
  dart.addTypeCaches(polyline_layer.PolylinePainter);
  dart.setMethodSignature(polyline_layer.PolylinePainter, () => ({
    __proto__: dart.getMethods(polyline_layer.PolylinePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    [_paintDottedLine]: dart.fnType(dart.void, [ui.Canvas, core.List$(ui.Offset), core.double, core.double, ui.Paint]),
    [_paintLine]: dart.fnType(dart.void, [ui.Canvas, core.List$(ui.Offset), ui.Paint]),
    [_paintGradient]: dart.fnType(ui.Gradient, []),
    [_getColorsStop]: dart.fnType(dart.nullable(core.List$(core.double)), []),
    [_calculateColorsStop]: dart.fnType(core.List$(core.double), []),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(polyline_layer.PolylinePainter, I[13]);
  dart.setFieldSignature(polyline_layer.PolylinePainter, () => ({
    __proto__: dart.getFields(polyline_layer.PolylinePainter.__proto__),
    polylineOpt: dart.finalFieldType(polyline_layer.Polyline),
    saveLayers: dart.finalFieldType(core.bool)
  }));
  polyline_layer._dist = function _dist(v, w) {
    return math.sqrt(polyline_layer._dist2(v, w));
  };
  polyline_layer._dist2 = function _dist2(v, w) {
    return polyline_layer._sqr(v.dx - w.dx) + polyline_layer._sqr(v.dy - w.dy);
  };
  polyline_layer._sqr = function _sqr(x) {
    return x * x;
  };
  label.Label = class Label extends core.Object {
    static paintText(canvas, points, labelText, labelStyle, rotationRad, opts) {
      let rotate = opts && 'rotate' in opts ? opts.rotate : false;
      let labelPlacement = opts && 'labelPlacement' in opts ? opts.labelPlacement : C[53] || CT.C53;
      let placementPoint = null;
      function placementPoint$35get() {
        let t8;
        t8 = placementPoint;
        return t8 == null ? dart.throw(new _internal.LateError.localNI("placementPoint")) : t8;
      }
      dart.fn(placementPoint$35get, T$.VoidToOffset());
      function placementPoint$35set(placementPoint$35param) {
        return placementPoint = placementPoint$35param;
      }
      dart.fn(placementPoint$35set, T$.OffsetTodynamic());
      switch (labelPlacement) {
        case C[54] || CT.C54:
          {
            placementPoint$35set(label.Label._computeCentroid(points));
            break;
          }
        case C[53] || CT.C53:
          {
            placementPoint$35set(label.Label._computePolylabel(points));
            break;
          }
      }
      let dx = placementPoint$35get().dx;
      let dy = placementPoint$35get().dy;
      let textSpan = new text_span.TextSpan.new({text: labelText, style: labelStyle});
      let textPainter = new text_painter.TextPainter.new({text: textSpan, textAlign: ui.TextAlign.center, textDirection: ui.TextDirection.ltr, maxLines: 1});
      if (dx > 0) {
        textPainter.layout({minWidth: 0.0, maxWidth: 1 / 0});
        dx = dx - textPainter.width / 2;
        dy = dy - textPainter.height / 2;
        let maxDx = 0.0;
        let minDx = 1 / 0;
        for (let point of points) {
          maxDx = math.max(core.double, maxDx, point.dx);
          minDx = math.min(core.double, minDx, point.dx);
        }
        if (maxDx - minDx > textPainter.width) {
          canvas.save();
          if (rotate) {
            canvas.translate(placementPoint$35get().dx, placementPoint$35get().dy);
            canvas.rotate(-rotationRad);
            canvas.translate(-placementPoint$35get().dx, -placementPoint$35get().dy);
          }
          textPainter.paint(canvas, new ui.Offset.new(dx, dy));
          canvas.restore();
        }
      }
    }
    static _computeCentroid(points) {
      return new ui.Offset.new(iterable_extensions['IterableNumberExtension|get#average'](points[$map](core.double, dart.fn(e => e.dx, T$.OffsetTodouble()))[$toList]()), iterable_extensions['IterableNumberExtension|get#average'](points[$map](core.double, dart.fn(e => e.dy, T$.OffsetTodouble()))[$toList]()));
    }
    static _computePolylabel(points) {
      let labelPosition = polylabel_base.polylabel(T$.JSArrayOfListOfPointOfnum().of([points[$map](T$.PointOfdouble(), dart.fn(p => new (T$.PointOfdouble()).new(p.dx, p.dy), T$.OffsetToPointOfdouble()))[$toList]()]));
      return new ui.Offset.new(labelPosition.point.x[$toDouble](), labelPosition.point.y[$toDouble]());
    }
    static ['_#new#tearOff']() {
      return new label.Label.new();
    }
  };
  (label.Label.new = function() {
    ;
  }).prototype = label.Label.prototype;
  dart.addTypeTests(label.Label);
  dart.addTypeCaches(label.Label);
  dart.setStaticMethodSignature(label.Label, () => ['paintText', '_computeCentroid', '_computePolylabel']);
  dart.setLibraryUri(label.Label, I[14]);
  polygon_layer.PolygonLabelPlacement = class PolygonLabelPlacement extends core._Enum {
    toString() {
      return "PolygonLabelPlacement." + this[_name];
    }
  };
  (polygon_layer.PolygonLabelPlacement.new = function(index, name) {
    polygon_layer.PolygonLabelPlacement.__proto__.new.call(this, index, name);
    ;
  }).prototype = polygon_layer.PolygonLabelPlacement.prototype;
  dart.addTypeTests(polygon_layer.PolygonLabelPlacement);
  dart.addTypeCaches(polygon_layer.PolygonLabelPlacement);
  dart.setLibraryUri(polygon_layer.PolygonLabelPlacement, I[15]);
  dart.setStaticFieldSignature(polygon_layer.PolygonLabelPlacement, () => ['values', 'centroid', 'polylabel']);
  dart.defineExtensionMethods(polygon_layer.PolygonLabelPlacement, ['toString']);
  dart.defineLazy(polygon_layer.PolygonLabelPlacement, {
    /*polygon_layer.PolygonLabelPlacement.values*/get values() {
      return C[55] || CT.C55;
    },
    /*polygon_layer.PolygonLabelPlacement.centroid*/get centroid() {
      return C[54] || CT.C54;
    },
    /*polygon_layer.PolygonLabelPlacement.polylabel*/get polylabel() {
      return C[53] || CT.C53;
    }
  }, false);
  var points$0 = dart.privateName(polygon_layer, "Polygon.points");
  var offsets$ = dart.privateName(polygon_layer, "Polygon.offsets");
  var holePointsList$ = dart.privateName(polygon_layer, "Polygon.holePointsList");
  var holeOffsetsList = dart.privateName(polygon_layer, "Polygon.holeOffsetsList");
  var color$0 = dart.privateName(polygon_layer, "Polygon.color");
  var borderStrokeWidth$0 = dart.privateName(polygon_layer, "Polygon.borderStrokeWidth");
  var borderColor$0 = dart.privateName(polygon_layer, "Polygon.borderColor");
  var disableHolesBorder$ = dart.privateName(polygon_layer, "Polygon.disableHolesBorder");
  var isDotted$0 = dart.privateName(polygon_layer, "Polygon.isDotted");
  var isFilled$ = dart.privateName(polygon_layer, "Polygon.isFilled");
  var strokeCap$0 = dart.privateName(polygon_layer, "Polygon.strokeCap");
  var strokeJoin$0 = dart.privateName(polygon_layer, "Polygon.strokeJoin");
  var label$ = dart.privateName(polygon_layer, "Polygon.label");
  var labelStyle$ = dart.privateName(polygon_layer, "Polygon.labelStyle");
  var labelPlacement$ = dart.privateName(polygon_layer, "Polygon.labelPlacement");
  var rotateLabel$ = dart.privateName(polygon_layer, "Polygon.rotateLabel");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var __Polygon_boundingBox = dart.privateName(polygon_layer, "_#Polygon#boundingBox");
  polygon_layer.Polygon = class Polygon extends core.Object {
    get points() {
      return this[points$0];
    }
    set points(value) {
      super.points = value;
    }
    get offsets() {
      return this[offsets$];
    }
    set offsets(value) {
      super.offsets = value;
    }
    get holePointsList() {
      return this[holePointsList$];
    }
    set holePointsList(value) {
      super.holePointsList = value;
    }
    get holeOffsetsList() {
      return this[holeOffsetsList];
    }
    set holeOffsetsList(value) {
      super.holeOffsetsList = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get borderStrokeWidth() {
      return this[borderStrokeWidth$0];
    }
    set borderStrokeWidth(value) {
      super.borderStrokeWidth = value;
    }
    get borderColor() {
      return this[borderColor$0];
    }
    set borderColor(value) {
      super.borderColor = value;
    }
    get disableHolesBorder() {
      return this[disableHolesBorder$];
    }
    set disableHolesBorder(value) {
      super.disableHolesBorder = value;
    }
    get isDotted() {
      return this[isDotted$0];
    }
    set isDotted(value) {
      super.isDotted = value;
    }
    get isFilled() {
      return this[isFilled$];
    }
    set isFilled(value) {
      super.isFilled = value;
    }
    get strokeCap() {
      return this[strokeCap$0];
    }
    set strokeCap(value) {
      super.strokeCap = value;
    }
    get strokeJoin() {
      return this[strokeJoin$0];
    }
    set strokeJoin(value) {
      super.strokeJoin = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get labelStyle() {
      return this[labelStyle$];
    }
    set labelStyle(value) {
      super.labelStyle = value;
    }
    get labelPlacement() {
      return this[labelPlacement$];
    }
    set labelPlacement(value) {
      super.labelPlacement = value;
    }
    get rotateLabel() {
      return this[rotateLabel$];
    }
    set rotateLabel(value) {
      super.rotateLabel = value;
    }
    get boundingBox() {
      let t12;
      t12 = this[__Polygon_boundingBox];
      return t12 == null ? dart.throw(new _internal.LateError.fieldNI("boundingBox")) : t12;
    }
    set boundingBox(boundingBox$35param) {
      if (this[__Polygon_boundingBox] == null)
        this[__Polygon_boundingBox] = boundingBox$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("boundingBox"));
    }
    static ['_#new#tearOff'](opts) {
      let points = opts && 'points' in opts ? opts.points : null;
      let holePointsList = opts && 'holePointsList' in opts ? opts.holePointsList : null;
      let color = opts && 'color' in opts ? opts.color : C[43] || CT.C43;
      let borderStrokeWidth = opts && 'borderStrokeWidth' in opts ? opts.borderStrokeWidth : 0;
      let borderColor = opts && 'borderColor' in opts ? opts.borderColor : C[44] || CT.C44;
      let disableHolesBorder = opts && 'disableHolesBorder' in opts ? opts.disableHolesBorder : false;
      let isDotted = opts && 'isDotted' in opts ? opts.isDotted : false;
      let isFilled = opts && 'isFilled' in opts ? opts.isFilled : false;
      let strokeCap = opts && 'strokeCap' in opts ? opts.strokeCap : C[45] || CT.C45;
      let strokeJoin = opts && 'strokeJoin' in opts ? opts.strokeJoin : C[46] || CT.C46;
      let label = opts && 'label' in opts ? opts.label : null;
      let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : C[56] || CT.C56;
      let labelPlacement = opts && 'labelPlacement' in opts ? opts.labelPlacement : C[54] || CT.C54;
      let rotateLabel = opts && 'rotateLabel' in opts ? opts.rotateLabel : false;
      return new polygon_layer.Polygon.new({points: points, holePointsList: holePointsList, color: color, borderStrokeWidth: borderStrokeWidth, borderColor: borderColor, disableHolesBorder: disableHolesBorder, isDotted: isDotted, isFilled: isFilled, strokeCap: strokeCap, strokeJoin: strokeJoin, label: label, labelStyle: labelStyle, labelPlacement: labelPlacement, rotateLabel: rotateLabel});
    }
  };
  (polygon_layer.Polygon.new = function(opts) {
    let points = opts && 'points' in opts ? opts.points : null;
    let holePointsList = opts && 'holePointsList' in opts ? opts.holePointsList : null;
    let color = opts && 'color' in opts ? opts.color : C[43] || CT.C43;
    let borderStrokeWidth = opts && 'borderStrokeWidth' in opts ? opts.borderStrokeWidth : 0;
    let borderColor = opts && 'borderColor' in opts ? opts.borderColor : C[44] || CT.C44;
    let disableHolesBorder = opts && 'disableHolesBorder' in opts ? opts.disableHolesBorder : false;
    let isDotted = opts && 'isDotted' in opts ? opts.isDotted : false;
    let isFilled = opts && 'isFilled' in opts ? opts.isFilled : false;
    let strokeCap = opts && 'strokeCap' in opts ? opts.strokeCap : C[45] || CT.C45;
    let strokeJoin = opts && 'strokeJoin' in opts ? opts.strokeJoin : C[46] || CT.C46;
    let label = opts && 'label' in opts ? opts.label : null;
    let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : C[56] || CT.C56;
    let labelPlacement = opts && 'labelPlacement' in opts ? opts.labelPlacement : C[54] || CT.C54;
    let rotateLabel = opts && 'rotateLabel' in opts ? opts.rotateLabel : false;
    this[offsets$] = T$.JSArrayOfOffset().of([]);
    this[__Polygon_boundingBox] = null;
    this[points$0] = points;
    this[holePointsList$] = holePointsList;
    this[color$0] = color;
    this[borderStrokeWidth$0] = borderStrokeWidth;
    this[borderColor$0] = borderColor;
    this[disableHolesBorder$] = disableHolesBorder;
    this[isDotted$0] = isDotted;
    this[isFilled$] = isFilled;
    this[strokeCap$0] = strokeCap;
    this[strokeJoin$0] = strokeJoin;
    this[label$] = label;
    this[labelStyle$] = labelStyle;
    this[labelPlacement$] = labelPlacement;
    this[rotateLabel$] = rotateLabel;
    this[holeOffsetsList] = holePointsList == null || holePointsList[$isEmpty] ? null : T$.ListOfListOfOffset().generate(holePointsList[$length], dart.fn(_ => T$.JSArrayOfOffset().of([]), T$.intToListOfOffset()));
    ;
  }).prototype = polygon_layer.Polygon.prototype;
  dart.addTypeTests(polygon_layer.Polygon);
  dart.addTypeCaches(polygon_layer.Polygon);
  dart.setGetterSignature(polygon_layer.Polygon, () => ({
    __proto__: dart.getGetters(polygon_layer.Polygon.__proto__),
    boundingBox: latlng_bounds.LatLngBounds
  }));
  dart.setSetterSignature(polygon_layer.Polygon, () => ({
    __proto__: dart.getSetters(polygon_layer.Polygon.__proto__),
    boundingBox: latlng_bounds.LatLngBounds
  }));
  dart.setLibraryUri(polygon_layer.Polygon, I[15]);
  dart.setFieldSignature(polygon_layer.Polygon, () => ({
    __proto__: dart.getFields(polygon_layer.Polygon.__proto__),
    points: dart.finalFieldType(core.List$(latlong.LatLng)),
    offsets: dart.finalFieldType(core.List$(ui.Offset)),
    holePointsList: dart.finalFieldType(dart.nullable(core.List$(core.List$(latlong.LatLng)))),
    holeOffsetsList: dart.finalFieldType(dart.nullable(core.List$(core.List$(ui.Offset)))),
    color: dart.finalFieldType(ui.Color),
    borderStrokeWidth: dart.finalFieldType(core.double),
    borderColor: dart.finalFieldType(ui.Color),
    disableHolesBorder: dart.finalFieldType(core.bool),
    isDotted: dart.finalFieldType(core.bool),
    isFilled: dart.finalFieldType(core.bool),
    strokeCap: dart.finalFieldType(ui.StrokeCap),
    strokeJoin: dart.finalFieldType(ui.StrokeJoin),
    [__Polygon_boundingBox]: dart.fieldType(dart.nullable(latlng_bounds.LatLngBounds)),
    label: dart.finalFieldType(dart.nullable(core.String)),
    labelStyle: dart.finalFieldType(text_style.TextStyle),
    labelPlacement: dart.finalFieldType(polygon_layer.PolygonLabelPlacement),
    rotateLabel: dart.finalFieldType(core.bool)
  }));
  var polygons$ = dart.privateName(polygon_layer, "PolygonLayer.polygons");
  var polygonCulling$ = dart.privateName(polygon_layer, "PolygonLayer.polygonCulling");
  var _fillOffsets$ = dart.privateName(polygon_layer, "_fillOffsets");
  polygon_layer.PolygonLayer = class PolygonLayer extends framework.StatelessWidget {
    get polygons() {
      return this[polygons$];
    }
    set polygons(value) {
      super.polygons = value;
    }
    get polygonCulling() {
      return this[polygonCulling$];
    }
    set polygonCulling(value) {
      super.polygonCulling = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let polygons = opts && 'polygons' in opts ? opts.polygons : C[57] || CT.C57;
      let polygonCulling = opts && 'polygonCulling' in opts ? opts.polygonCulling : false;
      return new polygon_layer.PolygonLayer.new({key: key, polygons: polygons, polygonCulling: polygonCulling, $creationLocationd_0dea112b090073317d4: C[58] || CT.C58});
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, bc) => {
          let map = dart.nullCheck(flutter_map_state.FlutterMapState.maybeOf(context));
          let size = new ui.Size.new(bc.maxWidth, bc.maxHeight);
          let polygonsWidget = T$.JSArrayOfWidget().of([]);
          for (let polygon of this.polygons) {
            polygon.offsets[$clear]();
            if (polygon.holeOffsetsList != null) {
              for (let offsets of dart.nullCheck(polygon.holeOffsetsList)) {
                offsets[$clear]();
              }
            }
            if (this.polygonCulling && !polygon.boundingBox.isOverlapping(map.bounds)) {
              continue;
            }
            this[_fillOffsets$](polygon.offsets, polygon.points, map);
            if (polygon.holePointsList != null) {
              let len = dart.nullCheck(polygon.holePointsList)[$length];
              for (let i = 0; i < len; i = i + 1) {
                this[_fillOffsets$](dart.nullCheck(polygon.holeOffsetsList)[$_get](i), dart.nullCheck(polygon.holePointsList)[$_get](i), map);
              }
            }
            polygonsWidget[$add](new basic.CustomPaint.new({painter: new polygon_layer.PolygonPainter.new(polygon, map.rotationRad), size: size, $creationLocationd_0dea112b090073317d4: C[59] || CT.C59}));
          }
          return new basic.Stack.new({children: polygonsWidget, $creationLocationd_0dea112b090073317d4: C[60] || CT.C60});
        }, T$.BuildContextAndBoxConstraintsToStack()), $creationLocationd_0dea112b090073317d4: C[61] || CT.C61});
    }
    [_fillOffsets$](offsets, points, map) {
      let len = points[$length];
      for (let i = 0; i < len; i = i + 1) {
        let point = points[$_get](i);
        let offset = map.getOffsetFromOrigin(point);
        offsets[$add](offset);
      }
    }
  };
  (polygon_layer.PolygonLayer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let polygons = opts && 'polygons' in opts ? opts.polygons : C[57] || CT.C57;
    let polygonCulling = opts && 'polygonCulling' in opts ? opts.polygonCulling : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[polygons$] = polygons;
    this[polygonCulling$] = polygonCulling;
    polygon_layer.PolygonLayer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (this.polygonCulling) {
      for (let polygon of this.polygons) {
        polygon.boundingBox = new latlng_bounds.LatLngBounds.fromPoints(polygon.points);
      }
    }
  }).prototype = polygon_layer.PolygonLayer.prototype;
  dart.addTypeTests(polygon_layer.PolygonLayer);
  dart.addTypeCaches(polygon_layer.PolygonLayer);
  dart.setMethodSignature(polygon_layer.PolygonLayer, () => ({
    __proto__: dart.getMethods(polygon_layer.PolygonLayer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_fillOffsets$]: dart.fnType(dart.void, [core.List$(ui.Offset), core.List$(latlong.LatLng), flutter_map_state.FlutterMapState])
  }));
  dart.setLibraryUri(polygon_layer.PolygonLayer, I[15]);
  dart.setFieldSignature(polygon_layer.PolygonLayer, () => ({
    __proto__: dart.getFields(polygon_layer.PolygonLayer.__proto__),
    polygons: dart.finalFieldType(core.List$(polygon_layer.Polygon)),
    polygonCulling: dart.finalFieldType(core.bool)
  }));
  var polygonOpt$ = dart.privateName(polygon_layer, "PolygonPainter.polygonOpt");
  var rotationRad$ = dart.privateName(polygon_layer, "PolygonPainter.rotationRad");
  var _paintPolygon = dart.privateName(polygon_layer, "_paintPolygon");
  var _paintDottedLine$ = dart.privateName(polygon_layer, "_paintDottedLine");
  var _paintLine$ = dart.privateName(polygon_layer, "_paintLine");
  var _paintBorder = dart.privateName(polygon_layer, "_paintBorder");
  var _dist$ = dart.privateName(polygon_layer, "_dist");
  var _dist2$ = dart.privateName(polygon_layer, "_dist2");
  var _sqr$ = dart.privateName(polygon_layer, "_sqr");
  polygon_layer.PolygonPainter = class PolygonPainter extends custom_paint.CustomPainter {
    get polygonOpt() {
      return this[polygonOpt$];
    }
    set polygonOpt(value) {
      super.polygonOpt = value;
    }
    get rotationRad() {
      return this[rotationRad$];
    }
    set rotationRad(value) {
      super.rotationRad = value;
    }
    static ['_#new#tearOff'](polygonOpt, rotationRad) {
      return new polygon_layer.PolygonPainter.new(polygonOpt, rotationRad);
    }
    paint(canvas, size) {
      if (this.polygonOpt.offsets[$isEmpty]) {
        return;
      }
      let rect = ui.Offset.zero['&'](size);
      this[_paintPolygon](canvas, rect);
    }
    [_paintBorder](canvas) {
      let t12, t12$;
      if (this.polygonOpt.borderStrokeWidth > 0.0) {
        let borderPaint = (t12 = ui.Paint.new(), (() => {
          t12.color = this.polygonOpt.borderColor;
          t12.strokeWidth = this.polygonOpt.borderStrokeWidth;
          return t12;
        })());
        if (this.polygonOpt.isDotted) {
          let borderRadius = this.polygonOpt.borderStrokeWidth / 2;
          let spacing = this.polygonOpt.borderStrokeWidth * 1.5;
          this[_paintDottedLine$](canvas, this.polygonOpt.offsets, borderRadius, spacing, borderPaint);
          if (!this.polygonOpt.disableHolesBorder && this.polygonOpt.holeOffsetsList != null) {
            for (let offsets of dart.nullCheck(this.polygonOpt.holeOffsetsList)) {
              this[_paintDottedLine$](canvas, offsets, borderRadius, spacing, borderPaint);
            }
          }
        } else {
          t12$ = borderPaint;
          (() => {
            t12$.style = ui.PaintingStyle.stroke;
            t12$.strokeCap = this.polygonOpt.strokeCap;
            t12$.strokeJoin = this.polygonOpt.strokeJoin;
            return t12$;
          })();
          this[_paintLine$](canvas, this.polygonOpt.offsets, borderPaint);
          if (!this.polygonOpt.disableHolesBorder && this.polygonOpt.holeOffsetsList != null) {
            for (let offsets of dart.nullCheck(this.polygonOpt.holeOffsetsList)) {
              this[_paintLine$](canvas, offsets, borderPaint);
            }
          }
        }
      }
    }
    [_paintDottedLine$](canvas, offsets, radius, stepLength, paint) {
      let startDistance = 0.0;
      for (let i = 0; i < offsets[$length]; i = i + 1) {
        let o0 = offsets[$_get](i[$modulo](offsets[$length]));
        let o1 = offsets[$_get]((i + 1)[$modulo](offsets[$length]));
        let totalDistance = this[_dist$](o0, o1);
        let distance = startDistance;
        while (distance < totalDistance) {
          let f1 = distance / totalDistance;
          let f0 = 1.0 - f1;
          let offset = new ui.Offset.new(o0.dx * f0 + o1.dx * f1, o0.dy * f0 + o1.dy * f1);
          canvas.drawCircle(offset, radius, paint);
          distance = distance + stepLength;
        }
        startDistance = distance < totalDistance ? stepLength - (totalDistance - distance) : distance - totalDistance;
      }
      canvas.drawCircle(offsets[$last], radius, paint);
    }
    [_paintLine$](canvas, offsets, paint) {
      let t12;
      if (offsets[$isEmpty]) {
        return;
      }
      let path = (t12 = ui.Path.new(), (() => {
        t12.addPolygon(offsets, true);
        return t12;
      })());
      canvas.drawPath(path, paint);
    }
    [_paintPolygon](canvas, rect) {
      let t12, t12$;
      let paint = ui.Paint.new();
      if (this.polygonOpt.holeOffsetsList != null) {
        canvas.saveLayer(rect, paint);
        paint.style = ui.PaintingStyle.fill;
        for (let offsets of dart.nullCheck(this.polygonOpt.holeOffsetsList)) {
          let path = ui.Path.new();
          path.addPolygon(offsets, true);
          canvas.drawPath(path, paint);
        }
        t12 = paint;
        (() => {
          t12.color = this.polygonOpt.color;
          t12.blendMode = ui.BlendMode.srcOut;
          return t12;
        })();
        let path = ui.Path.new();
        path.addPolygon(this.polygonOpt.offsets, true);
        canvas.drawPath(path, paint);
        this[_paintBorder](canvas);
        canvas.restore();
      } else {
        canvas.clipRect(rect);
        t12$ = paint;
        (() => {
          t12$.style = this.polygonOpt.isFilled ? ui.PaintingStyle.fill : ui.PaintingStyle.stroke;
          t12$.color = this.polygonOpt.color;
          return t12$;
        })();
        let path = ui.Path.new();
        path.addPolygon(this.polygonOpt.offsets, true);
        canvas.drawPath(path, paint);
        this[_paintBorder](canvas);
        if (this.polygonOpt.label != null) {
          label.Label.paintText(canvas, this.polygonOpt.offsets, this.polygonOpt.label, this.polygonOpt.labelStyle, this.rotationRad, {rotate: this.polygonOpt.rotateLabel, labelPlacement: this.polygonOpt.labelPlacement});
        }
      }
    }
    shouldRepaint(oldDelegate) {
      polygon_layer.PolygonPainter.as(oldDelegate);
      return false;
    }
    [_dist$](v, w) {
      return math.sqrt(this[_dist2$](v, w));
    }
    [_dist2$](v, w) {
      return this[_sqr$](v.dx - w.dx) + this[_sqr$](v.dy - w.dy);
    }
    [_sqr$](x) {
      return x * x;
    }
  };
  (polygon_layer.PolygonPainter.new = function(polygonOpt, rotationRad) {
    this[polygonOpt$] = polygonOpt;
    this[rotationRad$] = rotationRad;
    polygon_layer.PolygonPainter.__proto__.new.call(this);
    ;
  }).prototype = polygon_layer.PolygonPainter.prototype;
  dart.addTypeTests(polygon_layer.PolygonPainter);
  dart.addTypeCaches(polygon_layer.PolygonPainter);
  dart.setMethodSignature(polygon_layer.PolygonPainter, () => ({
    __proto__: dart.getMethods(polygon_layer.PolygonPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    [_paintBorder]: dart.fnType(dart.void, [ui.Canvas]),
    [_paintDottedLine$]: dart.fnType(dart.void, [ui.Canvas, core.List$(ui.Offset), core.double, core.double, ui.Paint]),
    [_paintLine$]: dart.fnType(dart.void, [ui.Canvas, core.List$(ui.Offset), ui.Paint]),
    [_paintPolygon]: dart.fnType(dart.void, [ui.Canvas, ui.Rect]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    [_dist$]: dart.fnType(core.double, [ui.Offset, ui.Offset]),
    [_dist2$]: dart.fnType(core.double, [ui.Offset, ui.Offset]),
    [_sqr$]: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(polygon_layer.PolygonPainter, I[15]);
  dart.setFieldSignature(polygon_layer.PolygonPainter, () => ({
    __proto__: dart.getFields(polygon_layer.PolygonPainter.__proto__),
    polygonOpt: dart.finalFieldType(polygon_layer.Polygon),
    rotationRad: dart.finalFieldType(core.double)
  }));
  overlay_image_layer.BaseOverlayImage = class BaseOverlayImage extends core.Object {
    buildImageForOverlay() {
      return new image.Image.new({image: this.imageProvider, fit: box_fit.BoxFit.fill, color: new ui.Color.fromRGBO(255, 255, 255, this.opacity), colorBlendMode: ui.BlendMode.modulate, gaplessPlayback: this.gaplessPlayback, $creationLocationd_0dea112b090073317d4: C[62] || CT.C62});
    }
  };
  (overlay_image_layer.BaseOverlayImage.new = function() {
    ;
  }).prototype = overlay_image_layer.BaseOverlayImage.prototype;
  dart.addTypeTests(overlay_image_layer.BaseOverlayImage);
  dart.addTypeCaches(overlay_image_layer.BaseOverlayImage);
  dart.setMethodSignature(overlay_image_layer.BaseOverlayImage, () => ({
    __proto__: dart.getMethods(overlay_image_layer.BaseOverlayImage.__proto__),
    buildImageForOverlay: dart.fnType(image.Image, [])
  }));
  dart.setLibraryUri(overlay_image_layer.BaseOverlayImage, I[16]);
  var bounds$ = dart.privateName(overlay_image_layer, "OverlayImage.bounds");
  var imageProvider$0 = dart.privateName(overlay_image_layer, "OverlayImage.imageProvider");
  var opacity$0 = dart.privateName(overlay_image_layer, "OverlayImage.opacity");
  var gaplessPlayback$ = dart.privateName(overlay_image_layer, "OverlayImage.gaplessPlayback");
  overlay_image_layer.OverlayImage = class OverlayImage extends overlay_image_layer.BaseOverlayImage {
    get bounds() {
      return this[bounds$];
    }
    set bounds(value) {
      super.bounds = value;
    }
    get imageProvider() {
      return this[imageProvider$0];
    }
    set imageProvider(value) {
      super.imageProvider = value;
    }
    get opacity() {
      return this[opacity$0];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get gaplessPlayback() {
      return this[gaplessPlayback$];
    }
    set gaplessPlayback(value) {
      super.gaplessPlayback = value;
    }
    static ['_#new#tearOff'](opts) {
      let bounds = opts && 'bounds' in opts ? opts.bounds : null;
      let imageProvider = opts && 'imageProvider' in opts ? opts.imageProvider : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let gaplessPlayback = opts && 'gaplessPlayback' in opts ? opts.gaplessPlayback : false;
      return new overlay_image_layer.OverlayImage.new({bounds: bounds, imageProvider: imageProvider, opacity: opacity, gaplessPlayback: gaplessPlayback});
    }
    buildPositionedForOverlay(map) {
      let bounds = T$.BoundsOfnum().new(map.project(this.bounds.northWest)['-'](map.pixelOrigin), map.project(this.bounds.southEast)['-'](map.pixelOrigin));
      return new basic.Positioned.new({left: bounds.topLeft.x[$toDouble](), top: bounds.topLeft.y[$toDouble](), width: bounds.size.x[$toDouble](), height: bounds.size.y[$toDouble](), child: this.buildImageForOverlay(), $creationLocationd_0dea112b090073317d4: C[63] || CT.C63});
    }
  };
  (overlay_image_layer.OverlayImage.new = function(opts) {
    let bounds = opts && 'bounds' in opts ? opts.bounds : null;
    let imageProvider = opts && 'imageProvider' in opts ? opts.imageProvider : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    let gaplessPlayback = opts && 'gaplessPlayback' in opts ? opts.gaplessPlayback : false;
    this[bounds$] = bounds;
    this[imageProvider$0] = imageProvider;
    this[opacity$0] = opacity;
    this[gaplessPlayback$] = gaplessPlayback;
    ;
  }).prototype = overlay_image_layer.OverlayImage.prototype;
  dart.addTypeTests(overlay_image_layer.OverlayImage);
  dart.addTypeCaches(overlay_image_layer.OverlayImage);
  dart.setMethodSignature(overlay_image_layer.OverlayImage, () => ({
    __proto__: dart.getMethods(overlay_image_layer.OverlayImage.__proto__),
    buildPositionedForOverlay: dart.fnType(basic.Positioned, [flutter_map_state.FlutterMapState])
  }));
  dart.setLibraryUri(overlay_image_layer.OverlayImage, I[16]);
  dart.setFieldSignature(overlay_image_layer.OverlayImage, () => ({
    __proto__: dart.getFields(overlay_image_layer.OverlayImage.__proto__),
    bounds: dart.finalFieldType(latlng_bounds.LatLngBounds),
    imageProvider: dart.finalFieldType(image_provider.ImageProvider$(core.Object)),
    opacity: dart.finalFieldType(core.double),
    gaplessPlayback: dart.finalFieldType(core.bool)
  }));
  var imageProvider$1 = dart.privateName(overlay_image_layer, "RotatedOverlayImage.imageProvider");
  var topLeftCorner$ = dart.privateName(overlay_image_layer, "RotatedOverlayImage.topLeftCorner");
  var bottomLeftCorner$ = dart.privateName(overlay_image_layer, "RotatedOverlayImage.bottomLeftCorner");
  var bottomRightCorner$ = dart.privateName(overlay_image_layer, "RotatedOverlayImage.bottomRightCorner");
  var opacity$1 = dart.privateName(overlay_image_layer, "RotatedOverlayImage.opacity");
  var gaplessPlayback$0 = dart.privateName(overlay_image_layer, "RotatedOverlayImage.gaplessPlayback");
  var filterQuality$ = dart.privateName(overlay_image_layer, "RotatedOverlayImage.filterQuality");
  overlay_image_layer.RotatedOverlayImage = class RotatedOverlayImage extends overlay_image_layer.BaseOverlayImage {
    get imageProvider() {
      return this[imageProvider$1];
    }
    set imageProvider(value) {
      super.imageProvider = value;
    }
    get topLeftCorner() {
      return this[topLeftCorner$];
    }
    set topLeftCorner(value) {
      super.topLeftCorner = value;
    }
    get bottomLeftCorner() {
      return this[bottomLeftCorner$];
    }
    set bottomLeftCorner(value) {
      super.bottomLeftCorner = value;
    }
    get bottomRightCorner() {
      return this[bottomRightCorner$];
    }
    set bottomRightCorner(value) {
      super.bottomRightCorner = value;
    }
    get opacity() {
      return this[opacity$1];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get gaplessPlayback() {
      return this[gaplessPlayback$0];
    }
    set gaplessPlayback(value) {
      super.gaplessPlayback = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    static ['_#new#tearOff'](opts) {
      let imageProvider = opts && 'imageProvider' in opts ? opts.imageProvider : null;
      let topLeftCorner = opts && 'topLeftCorner' in opts ? opts.topLeftCorner : null;
      let bottomLeftCorner = opts && 'bottomLeftCorner' in opts ? opts.bottomLeftCorner : null;
      let bottomRightCorner = opts && 'bottomRightCorner' in opts ? opts.bottomRightCorner : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let gaplessPlayback = opts && 'gaplessPlayback' in opts ? opts.gaplessPlayback : false;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[64] || CT.C64;
      return new overlay_image_layer.RotatedOverlayImage.new({imageProvider: imageProvider, topLeftCorner: topLeftCorner, bottomLeftCorner: bottomLeftCorner, bottomRightCorner: bottomRightCorner, opacity: opacity, gaplessPlayback: gaplessPlayback, filterQuality: filterQuality});
    }
    buildPositionedForOverlay(map) {
      let pxTopLeft = map.project(this.topLeftCorner)['-'](map.pixelOrigin);
      let pxBottomRight = map.project(this.bottomRightCorner)['-'](map.pixelOrigin);
      let pxBottomLeft = map.project(this.bottomLeftCorner)['-'](map.pixelOrigin);
      let pxTopRight = pxTopLeft['-'](pxBottomLeft)['+'](pxBottomRight);
      let bounds = T$.BoundsOfnum().new(pxTopLeft, pxBottomRight).extend(pxTopRight).extend(pxBottomLeft);
      let vectorX = pxTopRight['-'](pxTopLeft)['/'](bounds.size.x);
      let vectorY = pxBottomLeft['-'](pxTopLeft)['/'](bounds.size.y);
      let offset = pxTopLeft['-'](bounds.topLeft);
      let a = vectorX.x[$toDouble]();
      let b = vectorX.y[$toDouble]();
      let c = vectorY.x[$toDouble]();
      let d = vectorY.y[$toDouble]();
      let tx = offset.x[$toDouble]();
      let ty = offset.y[$toDouble]();
      return new basic.Positioned.new({left: bounds.topLeft.x[$toDouble](), top: bounds.topLeft.y[$toDouble](), width: bounds.size.x[$toDouble](), height: bounds.size.y[$toDouble](), child: new basic.Transform.new({transform: vector_math_64.Matrix4.new(a, b, 0.0, 0.0, c, d, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, tx, ty, 0.0, 1.0), filterQuality: this.filterQuality, child: this.buildImageForOverlay(), $creationLocationd_0dea112b090073317d4: C[65] || CT.C65}), $creationLocationd_0dea112b090073317d4: C[66] || CT.C66});
    }
  };
  (overlay_image_layer.RotatedOverlayImage.new = function(opts) {
    let imageProvider = opts && 'imageProvider' in opts ? opts.imageProvider : null;
    let topLeftCorner = opts && 'topLeftCorner' in opts ? opts.topLeftCorner : null;
    let bottomLeftCorner = opts && 'bottomLeftCorner' in opts ? opts.bottomLeftCorner : null;
    let bottomRightCorner = opts && 'bottomRightCorner' in opts ? opts.bottomRightCorner : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    let gaplessPlayback = opts && 'gaplessPlayback' in opts ? opts.gaplessPlayback : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[64] || CT.C64;
    this[imageProvider$1] = imageProvider;
    this[topLeftCorner$] = topLeftCorner;
    this[bottomLeftCorner$] = bottomLeftCorner;
    this[bottomRightCorner$] = bottomRightCorner;
    this[opacity$1] = opacity;
    this[gaplessPlayback$0] = gaplessPlayback;
    this[filterQuality$] = filterQuality;
    ;
  }).prototype = overlay_image_layer.RotatedOverlayImage.prototype;
  dart.addTypeTests(overlay_image_layer.RotatedOverlayImage);
  dart.addTypeCaches(overlay_image_layer.RotatedOverlayImage);
  dart.setMethodSignature(overlay_image_layer.RotatedOverlayImage, () => ({
    __proto__: dart.getMethods(overlay_image_layer.RotatedOverlayImage.__proto__),
    buildPositionedForOverlay: dart.fnType(basic.Positioned, [flutter_map_state.FlutterMapState])
  }));
  dart.setLibraryUri(overlay_image_layer.RotatedOverlayImage, I[16]);
  dart.setFieldSignature(overlay_image_layer.RotatedOverlayImage, () => ({
    __proto__: dart.getFields(overlay_image_layer.RotatedOverlayImage.__proto__),
    imageProvider: dart.finalFieldType(image_provider.ImageProvider$(core.Object)),
    topLeftCorner: dart.finalFieldType(latlong.LatLng),
    bottomLeftCorner: dart.finalFieldType(latlong.LatLng),
    bottomRightCorner: dart.finalFieldType(latlong.LatLng),
    opacity: dart.finalFieldType(core.double),
    gaplessPlayback: dart.finalFieldType(core.bool),
    filterQuality: dart.finalFieldType(dart.nullable(ui.FilterQuality))
  }));
  var overlayImages$ = dart.privateName(overlay_image_layer, "OverlayImageLayer.overlayImages");
  overlay_image_layer.OverlayImageLayer = class OverlayImageLayer extends framework.StatelessWidget {
    get overlayImages() {
      return this[overlayImages$];
    }
    set overlayImages(value) {
      super.overlayImages = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let overlayImages = opts && 'overlayImages' in opts ? opts.overlayImages : C[67] || CT.C67;
      return new overlay_image_layer.OverlayImageLayer.new({key: key, overlayImages: overlayImages, $creationLocationd_0dea112b090073317d4: C[68] || CT.C68});
    }
    build(context) {
      let map = dart.nullCheck(flutter_map_state.FlutterMapState.maybeOf(context));
      return new basic.ClipRect.new({child: new basic.Stack.new({children: (() => {
            let t12 = T$.JSArrayOfWidget().of([]);
            for (let overlayImage of this.overlayImages)
              t12.push(overlayImage.buildPositionedForOverlay(map));
            return t12;
          })(), $creationLocationd_0dea112b090073317d4: C[69] || CT.C69}), $creationLocationd_0dea112b090073317d4: C[70] || CT.C70});
    }
  };
  (overlay_image_layer.OverlayImageLayer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let overlayImages = opts && 'overlayImages' in opts ? opts.overlayImages : C[67] || CT.C67;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[overlayImages$] = overlayImages;
    overlay_image_layer.OverlayImageLayer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = overlay_image_layer.OverlayImageLayer.prototype;
  dart.addTypeTests(overlay_image_layer.OverlayImageLayer);
  dart.addTypeCaches(overlay_image_layer.OverlayImageLayer);
  dart.setMethodSignature(overlay_image_layer.OverlayImageLayer, () => ({
    __proto__: dart.getMethods(overlay_image_layer.OverlayImageLayer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(overlay_image_layer.OverlayImageLayer, I[16]);
  dart.setFieldSignature(overlay_image_layer.OverlayImageLayer, () => ({
    __proto__: dart.getFields(overlay_image_layer.OverlayImageLayer.__proto__),
    overlayImages: dart.finalFieldType(core.List$(overlay_image_layer.BaseOverlayImage))
  }));
  var left$ = dart.privateName(marker_layer, "Anchor.left");
  var top$ = dart.privateName(marker_layer, "Anchor.top");
  marker_layer.Anchor = class Anchor extends core.Object {
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    static ['_#new#tearOff'](left, top) {
      return new marker_layer.Anchor.new(left, top);
    }
    static ['_#_#tearOff'](width, height, alignOpt) {
      return new marker_layer.Anchor.__(width, height, alignOpt);
    }
    static _leftOffset(width, alignOpt) {
      switch (alignOpt) {
        case C[71] || CT.C71:
          {
            return 0.0;
          }
        case C[72] || CT.C72:
          {
            return width;
          }
        case C[73] || CT.C73:
        case C[74] || CT.C74:
        case C[75] || CT.C75:
        default:
          {
            return width / 2;
          }
      }
    }
    static _topOffset(height, alignOpt) {
      switch (alignOpt) {
        case C[73] || CT.C73:
          {
            return 0.0;
          }
        case C[74] || CT.C74:
          {
            return height;
          }
        case C[71] || CT.C71:
        case C[72] || CT.C72:
        case C[75] || CT.C75:
        default:
          {
            return height / 2;
          }
      }
    }
    static forPos(pos, width, height) {
      if (pos == null) return new marker_layer.Anchor.__(width, height, marker_layer.AnchorAlign.none);
      if (marker_layer.AnchorAlign.is(pos.value)) {
        return new marker_layer.Anchor.__(width, height, marker_layer.AnchorAlign.as(pos.value));
      }
      if (marker_layer.Anchor.is(pos.value)) return marker_layer.Anchor.as(pos.value);
      dart.throw(core.Exception.new("Unsupported AnchorPos value type: " + dart.str(dart.runtimeType(pos)) + "."));
    }
    static ['_#forPos#tearOff'](pos, width, height) {
      return marker_layer.Anchor.forPos(pos, width, height);
    }
  };
  (marker_layer.Anchor.new = function(left, top) {
    this[left$] = left;
    this[top$] = top;
    ;
  }).prototype = marker_layer.Anchor.prototype;
  (marker_layer.Anchor.__ = function(width, height, alignOpt) {
    this[left$] = marker_layer.Anchor._leftOffset(width, alignOpt);
    this[top$] = marker_layer.Anchor._topOffset(height, alignOpt);
    ;
  }).prototype = marker_layer.Anchor.prototype;
  dart.addTypeTests(marker_layer.Anchor);
  dart.addTypeCaches(marker_layer.Anchor);
  dart.setStaticMethodSignature(marker_layer.Anchor, () => ['_leftOffset', '_topOffset', 'forPos']);
  dart.setLibraryUri(marker_layer.Anchor, I[17]);
  dart.setFieldSignature(marker_layer.Anchor, () => ({
    __proto__: dart.getFields(marker_layer.Anchor.__proto__),
    left: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double)
  }));
  var value$ = dart.privateName(marker_layer, "AnchorPos.value");
  const _is_AnchorPos_default = Symbol('_is_AnchorPos_default');
  marker_layer.AnchorPos$ = dart.generic(T => {
    class AnchorPos extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = T.as(value);
      }
      static ['_#_#tearOff'](T, value) {
        return new (marker_layer.AnchorPos$(T)).__(value);
      }
      static exactly(anchor) {
        return new (T$.AnchorPosOfAnchor()).__(anchor);
      }
      static align(alignOpt) {
        return new (T$.AnchorPosOfAnchorAlign()).__(alignOpt);
      }
    }
    (AnchorPos.__ = function(value) {
      this[value$] = value;
      ;
    }).prototype = AnchorPos.prototype;
    dart.addTypeTests(AnchorPos);
    AnchorPos.prototype[_is_AnchorPos_default] = true;
    dart.addTypeCaches(AnchorPos);
    dart.setStaticMethodSignature(AnchorPos, () => ['exactly', 'align']);
    dart.setLibraryUri(AnchorPos, I[17]);
    dart.setFieldSignature(AnchorPos, () => ({
      __proto__: dart.getFields(AnchorPos.__proto__),
      value: dart.fieldType(T)
    }));
    return AnchorPos;
  });
  marker_layer.AnchorPos = marker_layer.AnchorPos$();
  dart.addTypeTests(marker_layer.AnchorPos, _is_AnchorPos_default);
  marker_layer.AnchorAlign = class AnchorAlign extends core._Enum {
    toString() {
      return "AnchorAlign." + this[_name];
    }
  };
  (marker_layer.AnchorAlign.new = function(index, name) {
    marker_layer.AnchorAlign.__proto__.new.call(this, index, name);
    ;
  }).prototype = marker_layer.AnchorAlign.prototype;
  dart.addTypeTests(marker_layer.AnchorAlign);
  dart.addTypeCaches(marker_layer.AnchorAlign);
  dart.setLibraryUri(marker_layer.AnchorAlign, I[17]);
  dart.setStaticFieldSignature(marker_layer.AnchorAlign, () => ['values', 'none', 'left', 'right', 'top', 'bottom', 'center']);
  dart.defineExtensionMethods(marker_layer.AnchorAlign, ['toString']);
  dart.defineLazy(marker_layer.AnchorAlign, {
    /*marker_layer.AnchorAlign.values*/get values() {
      return C[76] || CT.C76;
    },
    /*marker_layer.AnchorAlign.none*/get none() {
      return C[77] || CT.C77;
    },
    /*marker_layer.AnchorAlign.left*/get left() {
      return C[71] || CT.C71;
    },
    /*marker_layer.AnchorAlign.right*/get right() {
      return C[72] || CT.C72;
    },
    /*marker_layer.AnchorAlign.top*/get top() {
      return C[73] || CT.C73;
    },
    /*marker_layer.AnchorAlign.bottom*/get bottom() {
      return C[74] || CT.C74;
    },
    /*marker_layer.AnchorAlign.center*/get center() {
      return C[75] || CT.C75;
    }
  }, false);
  var point$ = dart.privateName(marker_layer, "Marker.point");
  var builder$ = dart.privateName(marker_layer, "Marker.builder");
  var key$ = dart.privateName(marker_layer, "Marker.key");
  var width$ = dart.privateName(marker_layer, "Marker.width");
  var height$ = dart.privateName(marker_layer, "Marker.height");
  var anchor = dart.privateName(marker_layer, "Marker.anchor");
  var rotate$ = dart.privateName(marker_layer, "Marker.rotate");
  var rotateOrigin$ = dart.privateName(marker_layer, "Marker.rotateOrigin");
  var rotateAlignment$ = dart.privateName(marker_layer, "Marker.rotateAlignment");
  marker_layer.Marker = class Marker extends core.Object {
    get point() {
      return this[point$];
    }
    set point(value) {
      super.point = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get anchor() {
      return this[anchor];
    }
    set anchor(value) {
      super.anchor = value;
    }
    get rotate() {
      return this[rotate$];
    }
    set rotate(value) {
      super.rotate = value;
    }
    get rotateOrigin() {
      return this[rotateOrigin$];
    }
    set rotateOrigin(value) {
      super.rotateOrigin = value;
    }
    get rotateAlignment() {
      return this[rotateAlignment$];
    }
    set rotateAlignment(value) {
      super.rotateAlignment = value;
    }
    static ['_#new#tearOff'](opts) {
      let point = opts && 'point' in opts ? opts.point : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let width = opts && 'width' in opts ? opts.width : 30;
      let height = opts && 'height' in opts ? opts.height : 30;
      let rotate = opts && 'rotate' in opts ? opts.rotate : null;
      let rotateOrigin = opts && 'rotateOrigin' in opts ? opts.rotateOrigin : null;
      let rotateAlignment = opts && 'rotateAlignment' in opts ? opts.rotateAlignment : null;
      let anchorPos = opts && 'anchorPos' in opts ? opts.anchorPos : null;
      return new marker_layer.Marker.new({point: point, builder: builder, key: key, width: width, height: height, rotate: rotate, rotateOrigin: rotateOrigin, rotateAlignment: rotateAlignment, anchorPos: anchorPos});
    }
  };
  (marker_layer.Marker.new = function(opts) {
    let point = opts && 'point' in opts ? opts.point : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let width = opts && 'width' in opts ? opts.width : 30;
    let height = opts && 'height' in opts ? opts.height : 30;
    let rotate = opts && 'rotate' in opts ? opts.rotate : null;
    let rotateOrigin = opts && 'rotateOrigin' in opts ? opts.rotateOrigin : null;
    let rotateAlignment = opts && 'rotateAlignment' in opts ? opts.rotateAlignment : null;
    let anchorPos = opts && 'anchorPos' in opts ? opts.anchorPos : null;
    this[point$] = point;
    this[builder$] = builder;
    this[key$] = key;
    this[width$] = width;
    this[height$] = height;
    this[rotate$] = rotate;
    this[rotateOrigin$] = rotateOrigin;
    this[rotateAlignment$] = rotateAlignment;
    this[anchor] = marker_layer.Anchor.forPos(anchorPos, width, height);
    ;
  }).prototype = marker_layer.Marker.prototype;
  dart.addTypeTests(marker_layer.Marker);
  dart.addTypeCaches(marker_layer.Marker);
  dart.setLibraryUri(marker_layer.Marker, I[17]);
  dart.setFieldSignature(marker_layer.Marker, () => ({
    __proto__: dart.getFields(marker_layer.Marker.__proto__),
    point: dart.finalFieldType(latlong.LatLng),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    key: dart.finalFieldType(dart.nullable(key.Key)),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    anchor: dart.finalFieldType(marker_layer.Anchor),
    rotate: dart.finalFieldType(dart.nullable(core.bool)),
    rotateOrigin: dart.finalFieldType(dart.nullable(ui.Offset)),
    rotateAlignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry))
  }));
  var markers$ = dart.privateName(marker_layer, "MarkerLayer.markers");
  var rotate$0 = dart.privateName(marker_layer, "MarkerLayer.rotate");
  var rotateOrigin$0 = dart.privateName(marker_layer, "MarkerLayer.rotateOrigin");
  var rotateAlignment$0 = dart.privateName(marker_layer, "MarkerLayer.rotateAlignment");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  marker_layer.MarkerLayer = class MarkerLayer extends framework.StatelessWidget {
    get markers() {
      return this[markers$];
    }
    set markers(value) {
      super.markers = value;
    }
    get rotate() {
      return this[rotate$0];
    }
    set rotate(value) {
      super.rotate = value;
    }
    get rotateOrigin() {
      return this[rotateOrigin$0];
    }
    set rotateOrigin(value) {
      super.rotateOrigin = value;
    }
    get rotateAlignment() {
      return this[rotateAlignment$0];
    }
    set rotateAlignment(value) {
      super.rotateAlignment = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let markers = opts && 'markers' in opts ? opts.markers : C[78] || CT.C78;
      let rotate = opts && 'rotate' in opts ? opts.rotate : false;
      let rotateOrigin = opts && 'rotateOrigin' in opts ? opts.rotateOrigin : null;
      let rotateAlignment = opts && 'rotateAlignment' in opts ? opts.rotateAlignment : C[79] || CT.C79;
      return new marker_layer.MarkerLayer.new({key: key, markers: markers, rotate: rotate, rotateOrigin: rotateOrigin, rotateAlignment: rotateAlignment, $creationLocationd_0dea112b090073317d4: C[80] || CT.C80});
    }
    build(context) {
      let t15, t15$, t15$0, t16, t15$1, t16$, t15$2;
      let map = dart.nullCheck(flutter_map_state.FlutterMapState.maybeOf(context));
      let markerWidgets = T$.JSArrayOfWidget().of([]);
      for (let marker of this.markers) {
        let pxPoint = map.project(marker.point);
        let rightPortion = marker.width - marker.anchor.left;
        let leftPortion = marker.anchor.left;
        let bottomPortion = marker.height - marker.anchor.top;
        let topPortion = marker.anchor.top;
        let sw = new (T$.CustomPointOfnum()).new(pxPoint.x + leftPortion, pxPoint.y - bottomPortion);
        let ne = new (T$.CustomPointOfnum()).new(pxPoint.x - rightPortion, pxPoint.y + topPortion);
        if (!map.pixelBounds.containsPartialBounds(T$.BoundsOfnum().new(sw, ne))) {
          continue;
        }
        let pos = pxPoint['-'](map.pixelOrigin);
        let markerWidget = dart.test((t15 = marker.rotate, t15 == null ? this.rotate : t15)) ? new basic.Transform.rotate({angle: -map.rotationRad, origin: (t15$ = marker.rotateOrigin, t15$ == null ? this.rotateOrigin : t15$), alignment: (t15$0 = marker.rotateAlignment, t15$0 == null ? this.rotateAlignment : t15$0), child: (t15$1 = marker, t16 = context, t15$1.builder(t16)), $creationLocationd_0dea112b090073317d4: C[81] || CT.C81}) : (t15$2 = marker, t16$ = context, t15$2.builder(t16$));
        markerWidgets[$add](new basic.Positioned.new({key: marker.key, width: marker.width, height: marker.height, left: pos.x - rightPortion, top: pos.y - bottomPortion, child: markerWidget, $creationLocationd_0dea112b090073317d4: C[82] || CT.C82}));
      }
      return new basic.Stack.new({children: markerWidgets, $creationLocationd_0dea112b090073317d4: C[83] || CT.C83});
    }
  };
  (marker_layer.MarkerLayer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let markers = opts && 'markers' in opts ? opts.markers : C[78] || CT.C78;
    let rotate = opts && 'rotate' in opts ? opts.rotate : false;
    let rotateOrigin = opts && 'rotateOrigin' in opts ? opts.rotateOrigin : null;
    let rotateAlignment = opts && 'rotateAlignment' in opts ? opts.rotateAlignment : C[79] || CT.C79;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[markers$] = markers;
    this[rotate$0] = rotate;
    this[rotateOrigin$0] = rotateOrigin;
    this[rotateAlignment$0] = rotateAlignment;
    marker_layer.MarkerLayer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = marker_layer.MarkerLayer.prototype;
  dart.addTypeTests(marker_layer.MarkerLayer);
  dart.addTypeCaches(marker_layer.MarkerLayer);
  dart.setMethodSignature(marker_layer.MarkerLayer, () => ({
    __proto__: dart.getMethods(marker_layer.MarkerLayer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(marker_layer.MarkerLayer, I[17]);
  dart.setFieldSignature(marker_layer.MarkerLayer, () => ({
    __proto__: dart.getFields(marker_layer.MarkerLayer.__proto__),
    markers: dart.finalFieldType(core.List$(marker_layer.Marker)),
    rotate: dart.finalFieldType(core.bool),
    rotateOrigin: dart.finalFieldType(dart.nullable(ui.Offset)),
    rotateAlignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry))
  }));
  var point$0 = dart.privateName(circle_layer, "CircleMarker.point");
  var radius$ = dart.privateName(circle_layer, "CircleMarker.radius");
  var color$1 = dart.privateName(circle_layer, "CircleMarker.color");
  var borderStrokeWidth$1 = dart.privateName(circle_layer, "CircleMarker.borderStrokeWidth");
  var borderColor$1 = dart.privateName(circle_layer, "CircleMarker.borderColor");
  var useRadiusInMeter$ = dart.privateName(circle_layer, "CircleMarker.useRadiusInMeter");
  var offset = dart.privateName(circle_layer, "CircleMarker.offset");
  var realRadius = dart.privateName(circle_layer, "CircleMarker.realRadius");
  circle_layer.CircleMarker = class CircleMarker extends core.Object {
    get point() {
      return this[point$0];
    }
    set point(value) {
      super.point = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get borderStrokeWidth() {
      return this[borderStrokeWidth$1];
    }
    set borderStrokeWidth(value) {
      super.borderStrokeWidth = value;
    }
    get borderColor() {
      return this[borderColor$1];
    }
    set borderColor(value) {
      super.borderColor = value;
    }
    get useRadiusInMeter() {
      return this[useRadiusInMeter$];
    }
    set useRadiusInMeter(value) {
      super.useRadiusInMeter = value;
    }
    get offset() {
      return this[offset];
    }
    set offset(value) {
      this[offset] = value;
    }
    get realRadius() {
      return this[realRadius];
    }
    set realRadius(value) {
      this[realRadius] = value;
    }
    static ['_#new#tearOff'](opts) {
      let point = opts && 'point' in opts ? opts.point : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let useRadiusInMeter = opts && 'useRadiusInMeter' in opts ? opts.useRadiusInMeter : false;
      let color = opts && 'color' in opts ? opts.color : C[43] || CT.C43;
      let borderStrokeWidth = opts && 'borderStrokeWidth' in opts ? opts.borderStrokeWidth : 0;
      let borderColor = opts && 'borderColor' in opts ? opts.borderColor : C[44] || CT.C44;
      return new circle_layer.CircleMarker.new({point: point, radius: radius, useRadiusInMeter: useRadiusInMeter, color: color, borderStrokeWidth: borderStrokeWidth, borderColor: borderColor});
    }
  };
  (circle_layer.CircleMarker.new = function(opts) {
    let point = opts && 'point' in opts ? opts.point : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let useRadiusInMeter = opts && 'useRadiusInMeter' in opts ? opts.useRadiusInMeter : false;
    let color = opts && 'color' in opts ? opts.color : C[43] || CT.C43;
    let borderStrokeWidth = opts && 'borderStrokeWidth' in opts ? opts.borderStrokeWidth : 0;
    let borderColor = opts && 'borderColor' in opts ? opts.borderColor : C[44] || CT.C44;
    this[offset] = ui.Offset.zero;
    this[realRadius] = 0;
    this[point$0] = point;
    this[radius$] = radius;
    this[useRadiusInMeter$] = useRadiusInMeter;
    this[color$1] = color;
    this[borderStrokeWidth$1] = borderStrokeWidth;
    this[borderColor$1] = borderColor;
    ;
  }).prototype = circle_layer.CircleMarker.prototype;
  dart.addTypeTests(circle_layer.CircleMarker);
  dart.addTypeCaches(circle_layer.CircleMarker);
  dart.setLibraryUri(circle_layer.CircleMarker, I[18]);
  dart.setFieldSignature(circle_layer.CircleMarker, () => ({
    __proto__: dart.getFields(circle_layer.CircleMarker.__proto__),
    point: dart.finalFieldType(latlong.LatLng),
    radius: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    borderStrokeWidth: dart.finalFieldType(core.double),
    borderColor: dart.finalFieldType(ui.Color),
    useRadiusInMeter: dart.finalFieldType(core.bool),
    offset: dart.fieldType(ui.Offset),
    realRadius: dart.fieldType(core.num)
  }));
  var circles$ = dart.privateName(circle_layer, "CircleLayer.circles");
  var Distance__calculator = dart.privateName(latlong, "Distance._calculator");
  var Distance__roundResult = dart.privateName(latlong, "Distance._roundResult");
  var Distance__radius = dart.privateName(latlong, "Distance._radius");
  circle_layer.CircleLayer = class CircleLayer extends framework.StatelessWidget {
    get circles() {
      return this[circles$];
    }
    set circles(value) {
      super.circles = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let circles = opts && 'circles' in opts ? opts.circles : C[84] || CT.C84;
      return new circle_layer.CircleLayer.new({key: key, circles: circles, $creationLocationd_0dea112b090073317d4: C[85] || CT.C85});
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, bc) => {
          let size = new ui.Size.new(bc.maxWidth, bc.maxHeight);
          let map = dart.nullCheck(flutter_map_state.FlutterMapState.maybeOf(context));
          let circleWidgets = T$.JSArrayOfWidget().of([]);
          for (let circle of this.circles) {
            circle.offset = map.getOffsetFromOrigin(circle.point);
            if (circle.useRadiusInMeter) {
              let r = (C[86] || CT.C86).offset(circle.point, circle.radius, 180);
              let delta = circle.offset['-'](map.getOffsetFromOrigin(r));
              circle.realRadius = delta.distance;
            }
            circleWidgets[$add](new basic.CustomPaint.new({painter: new circle_layer.CirclePainter.new(circle), size: size, $creationLocationd_0dea112b090073317d4: C[88] || CT.C88}));
          }
          return new basic.Stack.new({children: circleWidgets, $creationLocationd_0dea112b090073317d4: C[89] || CT.C89});
        }, T$.BuildContextAndBoxConstraintsToStack()), $creationLocationd_0dea112b090073317d4: C[90] || CT.C90});
    }
  };
  (circle_layer.CircleLayer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let circles = opts && 'circles' in opts ? opts.circles : C[84] || CT.C84;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[circles$] = circles;
    circle_layer.CircleLayer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = circle_layer.CircleLayer.prototype;
  dart.addTypeTests(circle_layer.CircleLayer);
  dart.addTypeCaches(circle_layer.CircleLayer);
  dart.setMethodSignature(circle_layer.CircleLayer, () => ({
    __proto__: dart.getMethods(circle_layer.CircleLayer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(circle_layer.CircleLayer, I[18]);
  dart.setFieldSignature(circle_layer.CircleLayer, () => ({
    __proto__: dart.getFields(circle_layer.CircleLayer.__proto__),
    circles: dart.finalFieldType(core.List$(circle_layer.CircleMarker))
  }));
  var circle$ = dart.privateName(circle_layer, "CirclePainter.circle");
  var _paintCircle = dart.privateName(circle_layer, "_paintCircle");
  circle_layer.CirclePainter = class CirclePainter extends custom_paint.CustomPainter {
    get circle() {
      return this[circle$];
    }
    set circle(value) {
      super.circle = value;
    }
    static ['_#new#tearOff'](circle) {
      return new circle_layer.CirclePainter.new(circle);
    }
    paint(canvas, size) {
      let t15, t15$;
      let rect = ui.Offset.zero['&'](size);
      canvas.clipRect(rect);
      let paint = (t15 = ui.Paint.new(), (() => {
        t15.style = ui.PaintingStyle.fill;
        t15.color = this.circle.color;
        return t15;
      })());
      this[_paintCircle](canvas, this.circle.offset, this.circle.useRadiusInMeter ? this.circle.realRadius : this.circle.radius, paint);
      if (this.circle.borderStrokeWidth > 0) {
        let paint = (t15$ = ui.Paint.new(), (() => {
          t15$.style = ui.PaintingStyle.stroke;
          t15$.color = this.circle.borderColor;
          t15$.strokeWidth = this.circle.borderStrokeWidth;
          return t15$;
        })());
        this[_paintCircle](canvas, this.circle.offset, this.circle.useRadiusInMeter ? this.circle.realRadius : this.circle.radius, paint);
      }
    }
    [_paintCircle](canvas, offset, radius, paint) {
      canvas.drawCircle(offset, radius, paint);
    }
    shouldRepaint(oldDelegate) {
      circle_layer.CirclePainter.as(oldDelegate);
      return false;
    }
  };
  (circle_layer.CirclePainter.new = function(circle) {
    this[circle$] = circle;
    circle_layer.CirclePainter.__proto__.new.call(this);
    ;
  }).prototype = circle_layer.CirclePainter.prototype;
  dart.addTypeTests(circle_layer.CirclePainter);
  dart.addTypeCaches(circle_layer.CirclePainter);
  dart.setMethodSignature(circle_layer.CirclePainter, () => ({
    __proto__: dart.getMethods(circle_layer.CirclePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    [_paintCircle]: dart.fnType(dart.void, [ui.Canvas, ui.Offset, core.double, ui.Paint]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(circle_layer.CirclePainter, I[18]);
  dart.setFieldSignature(circle_layer.CirclePainter, () => ({
    __proto__: dart.getFields(circle_layer.CirclePainter.__proto__),
    circle: dart.finalFieldType(circle_layer.CircleMarker)
  }));
  var mapState$ = dart.privateName(map_state_widget, "MapStateInheritedWidget.mapState");
  map_state_widget.MapStateInheritedWidget = class MapStateInheritedWidget extends framework.InheritedWidget {
    get mapState() {
      return this[mapState$];
    }
    set mapState(value) {
      super.mapState = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let mapState = opts && 'mapState' in opts ? opts.mapState : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new map_state_widget.MapStateInheritedWidget.new({key: key, mapState: mapState, child: child, $creationLocationd_0dea112b090073317d4: C[91] || CT.C91});
    }
    updateShouldNotify(oldWidget) {
      map_state_widget.MapStateInheritedWidget.as(oldWidget);
      return true;
    }
    static maybeOf(context) {
      return context.dependOnInheritedWidgetOfExactType(map_state_widget.MapStateInheritedWidget);
    }
  };
  (map_state_widget.MapStateInheritedWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let mapState = opts && 'mapState' in opts ? opts.mapState : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[mapState$] = mapState;
    map_state_widget.MapStateInheritedWidget.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = map_state_widget.MapStateInheritedWidget.prototype;
  dart.addTypeTests(map_state_widget.MapStateInheritedWidget);
  dart.addTypeCaches(map_state_widget.MapStateInheritedWidget);
  dart.setMethodSignature(map_state_widget.MapStateInheritedWidget, () => ({
    __proto__: dart.getMethods(map_state_widget.MapStateInheritedWidget.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setStaticMethodSignature(map_state_widget.MapStateInheritedWidget, () => ['maybeOf']);
  dart.setLibraryUri(map_state_widget.MapStateInheritedWidget, I[19]);
  dart.setFieldSignature(map_state_widget.MapStateInheritedWidget, () => ({
    __proto__: dart.getFields(map_state_widget.MapStateInheritedWidget.__proto__),
    mapState: dart.finalFieldType(flutter_map_state.FlutterMapState)
  }));
  var _mapEventSink = dart.privateName(map, "_mapEventSink");
  var __MapControllerImpl__state = dart.privateName(map, "_#MapControllerImpl#_state");
  var _state = dart.privateName(map, "_state");
  var FitBoundsOptions_inside = dart.privateName(flutter_map, "FitBoundsOptions.inside");
  var FitBoundsOptions_zoom = dart.privateName(flutter_map, "FitBoundsOptions.zoom");
  var FitBoundsOptions_maxZoom = dart.privateName(flutter_map, "FitBoundsOptions.maxZoom");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var FitBoundsOptions_padding = dart.privateName(flutter_map, "FitBoundsOptions.padding");
  map.MapControllerImpl = class MapControllerImpl extends core.Object {
    get mapEventSink() {
      return this[_mapEventSink].sink;
    }
    get mapEventStream() {
      return this[_mapEventSink].stream;
    }
    get [_state]() {
      let t15;
      t15 = this[__MapControllerImpl__state];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_state")) : t15;
    }
    set [_state](library$32package$58flutter_map$47src$47map$47map$46dart$58$58_state$35param) {
      this[__MapControllerImpl__state] = library$32package$58flutter_map$47src$47map$47map$46dart$58$58_state$35param;
    }
    set state(state) {
      this[_state] = state;
    }
    dispose() {
      this[_mapEventSink].close();
    }
    moveAndRotate(center, zoom, degree, opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      return this[_state].moveAndRotate(center, zoom, degree, {source: map_events.MapEventSource.mapController, id: id});
    }
    move(center, zoom, opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      return this[_state].move(center, zoom, {id: id, source: map_events.MapEventSource.mapController});
    }
    fitBounds(bounds, opts) {
      let options = opts && 'options' in opts ? opts.options : C[92] || CT.C92;
      this[_state].fitBounds(bounds, dart.nullCheck(options));
    }
    centerZoomFitBounds(bounds, opts) {
      let options = opts && 'options' in opts ? opts.options : C[92] || CT.C92;
      return this[_state].centerZoomFitBounds(bounds, dart.nullCheck(options));
    }
    get center() {
      return this[_state].center;
    }
    get bounds() {
      return this[_state].bounds;
    }
    get zoom() {
      return this[_state].zoom;
    }
    get rotation() {
      return this[_state].rotation;
    }
    rotate(degree, opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      return this[_state].rotate(degree, {id: id, source: map_events.MapEventSource.mapController});
    }
    latLngToScreenPoint(latLng) {
      return this[_state].latLngToScreenPoint(latLng);
    }
    pointToLatLng(localPoint) {
      return this[_state].pointToLatLng(localPoint);
    }
    rotatePoint(mapCenter, point, opts) {
      let counterRotation = opts && 'counterRotation' in opts ? opts.counterRotation : true;
      return this[_state].rotatePoint(mapCenter, point, {counterRotation: counterRotation});
    }
    static ['_#new#tearOff']() {
      return new map.MapControllerImpl.new();
    }
  };
  (map.MapControllerImpl.new = function() {
    this[_mapEventSink] = T$.StreamControllerOfMapEvent().broadcast();
    this[__MapControllerImpl__state] = null;
    ;
  }).prototype = map.MapControllerImpl.prototype;
  dart.addTypeTests(map.MapControllerImpl);
  dart.addTypeCaches(map.MapControllerImpl);
  map.MapControllerImpl[dart.implements] = () => [flutter_map.MapController];
  dart.setMethodSignature(map.MapControllerImpl, () => ({
    __proto__: dart.getMethods(map.MapControllerImpl.__proto__),
    dispose: dart.fnType(dart.void, []),
    moveAndRotate: dart.fnType(flutter_map.MoveAndRotateResult, [latlong.LatLng, core.double, core.double], {id: dart.nullable(core.String)}, {}),
    move: dart.fnType(core.bool, [latlong.LatLng, core.double], {id: dart.nullable(core.String)}, {}),
    fitBounds: dart.fnType(dart.void, [latlng_bounds.LatLngBounds], {options: dart.nullable(flutter_map.FitBoundsOptions)}, {}),
    centerZoomFitBounds: dart.fnType(center_zoom.CenterZoom, [latlng_bounds.LatLngBounds], {options: dart.nullable(flutter_map.FitBoundsOptions)}, {}),
    rotate: dart.fnType(core.bool, [core.double], {id: dart.nullable(core.String)}, {}),
    latLngToScreenPoint: dart.fnType(point.CustomPoint$(core.num), [latlong.LatLng]),
    pointToLatLng: dart.fnType(dart.nullable(latlong.LatLng), [point.CustomPoint$(core.num)]),
    rotatePoint: dart.fnType(point.CustomPoint$(core.num), [point.CustomPoint$(core.num), point.CustomPoint$(core.num)], {counterRotation: core.bool}, {})
  }));
  dart.setGetterSignature(map.MapControllerImpl, () => ({
    __proto__: dart.getGetters(map.MapControllerImpl.__proto__),
    mapEventSink: async.StreamSink$(map_events.MapEvent),
    mapEventStream: async.Stream$(map_events.MapEvent),
    [_state]: flutter_map_state.FlutterMapState,
    center: latlong.LatLng,
    bounds: dart.nullable(latlng_bounds.LatLngBounds),
    zoom: core.double,
    rotation: core.double
  }));
  dart.setSetterSignature(map.MapControllerImpl, () => ({
    __proto__: dart.getSetters(map.MapControllerImpl.__proto__),
    [_state]: flutter_map_state.FlutterMapState,
    state: flutter_map_state.FlutterMapState
  }));
  dart.setLibraryUri(map.MapControllerImpl, I[20]);
  dart.setFieldSignature(map.MapControllerImpl, () => ({
    __proto__: dart.getFields(map.MapControllerImpl.__proto__),
    [_mapEventSink]: dart.finalFieldType(async.StreamController$(map_events.MapEvent)),
    [__MapControllerImpl__state]: dart.fieldType(dart.nullable(flutter_map_state.FlutterMapState))
  }));
  var _dragMode = dart.privateName(gestures, "_dragMode");
  var _gestureWinner = dart.privateName(gestures, "_gestureWinner");
  var _pointerCounter = dart.privateName(gestures, "_pointerCounter");
  var _isListeningForInterruptions = dart.privateName(gestures, "_isListeningForInterruptions");
  var _rotationStarted = dart.privateName(gestures, "_rotationStarted");
  var _pinchZoomStarted = dart.privateName(gestures, "_pinchZoomStarted");
  var _pinchMoveStarted = dart.privateName(gestures, "_pinchMoveStarted");
  var _dragStarted = dart.privateName(gestures, "_dragStarted");
  var _flingAnimationStarted = dart.privateName(gestures, "_flingAnimationStarted");
  var __MapGestureMixin__scaleCorrector = dart.privateName(gestures, "_#MapGestureMixin#_scaleCorrector");
  var __MapGestureMixin__lastRotation = dart.privateName(gestures, "_#MapGestureMixin#_lastRotation");
  var __MapGestureMixin__lastScale = dart.privateName(gestures, "_#MapGestureMixin#_lastScale");
  var __MapGestureMixin__lastFocalLocal = dart.privateName(gestures, "_#MapGestureMixin#_lastFocalLocal");
  var __MapGestureMixin__mapCenterStart = dart.privateName(gestures, "_#MapGestureMixin#_mapCenterStart");
  var __MapGestureMixin__mapZoomStart = dart.privateName(gestures, "_#MapGestureMixin#_mapZoomStart");
  var __MapGestureMixin__focalStartLocal = dart.privateName(gestures, "_#MapGestureMixin#_focalStartLocal");
  var __MapGestureMixin__focalStartLatLng = dart.privateName(gestures, "_#MapGestureMixin#_focalStartLatLng");
  var __MapGestureMixin__flingController = dart.privateName(gestures, "_#MapGestureMixin#_flingController");
  var __MapGestureMixin__flingAnimation = dart.privateName(gestures, "_#MapGestureMixin#_flingAnimation");
  var __MapGestureMixin__doubleTapController = dart.privateName(gestures, "_#MapGestureMixin#_doubleTapController");
  var __MapGestureMixin__doubleTapZoomAnimation = dart.privateName(gestures, "_#MapGestureMixin#_doubleTapZoomAnimation");
  var __MapGestureMixin__doubleTapCenterAnimation = dart.privateName(gestures, "_#MapGestureMixin#_doubleTapCenterAnimation");
  var _tapUpCounter = dart.privateName(gestures, "_tapUpCounter");
  var _doubleTapHoldMaxDelay = dart.privateName(gestures, "_doubleTapHoldMaxDelay");
  var _offsetToCrs = dart.privateName(gestures, "_offsetToCrs");
  var _offsetToPoint = dart.privateName(gestures, "_offsetToPoint");
  var _getNewEventCenterZoomPosition = dart.privateName(gestures, "_getNewEventCenterZoomPosition");
  var _scaleCorrector = dart.privateName(gestures, "_scaleCorrector");
  var _lastRotation = dart.privateName(gestures, "_lastRotation");
  var _lastScale = dart.privateName(gestures, "_lastScale");
  var _lastFocalLocal = dart.privateName(gestures, "_lastFocalLocal");
  var _mapCenterStart = dart.privateName(gestures, "_mapCenterStart");
  var _mapZoomStart = dart.privateName(gestures, "_mapZoomStart");
  var _focalStartLocal = dart.privateName(gestures, "_focalStartLocal");
  var _focalStartLatLng = dart.privateName(gestures, "_focalStartLatLng");
  var _flingController = dart.privateName(gestures, "_flingController");
  var _flingAnimation = dart.privateName(gestures, "_flingAnimation");
  var _doubleTapController = dart.privateName(gestures, "_doubleTapController");
  var _doubleTapZoomAnimation = dart.privateName(gestures, "_doubleTapZoomAnimation");
  var _doubleTapCenterAnimation = dart.privateName(gestures, "_doubleTapCenterAnimation");
  var _handleFlingAnimation = dart.privateName(gestures, "_handleFlingAnimation");
  var _flingAnimationStatusListener = dart.privateName(gestures, "_flingAnimationStatusListener");
  var _handleDoubleTapZoomAnimation = dart.privateName(gestures, "_handleDoubleTapZoomAnimation");
  var _doubleTapZoomStatusListener = dart.privateName(gestures, "_doubleTapZoomStatusListener");
  var _getMultiFingerGestureFlags = dart.privateName(gestures, "_getMultiFingerGestureFlags");
  var _yieldMultiFingerGestureWinner = dart.privateName(gestures, "_yieldMultiFingerGestureWinner");
  var _stopListeningForAnimationInterruptions = dart.privateName(gestures, "_stopListeningForAnimationInterruptions");
  var _handleDoubleTapHold = dart.privateName(gestures, "_handleDoubleTapHold");
  var _rotateOffset = dart.privateName(gestures, "_rotateOffset");
  var _getZoomForScale = dart.privateName(gestures, "_getZoomForScale");
  var _resetDoubleTapHold = dart.privateName(gestures, "_resetDoubleTapHold");
  var _startDoubleTapAnimation = dart.privateName(gestures, "_startDoubleTapAnimation");
  var _startListeningForAnimationInterruptions = dart.privateName(gestures, "_startListeningForAnimationInterruptions");
  var children$ = dart.privateName(flutter_map, "FlutterMap.children");
  var nonRotatedChildren$ = dart.privateName(flutter_map, "FlutterMap.nonRotatedChildren");
  var options$ = dart.privateName(flutter_map, "FlutterMap.options");
  var mapController$ = dart.privateName(flutter_map, "FlutterMap.mapController");
  flutter_map.FlutterMap = class FlutterMap extends framework.StatefulWidget {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get nonRotatedChildren() {
      return this[nonRotatedChildren$];
    }
    set nonRotatedChildren(value) {
      super.nonRotatedChildren = value;
    }
    get options() {
      return this[options$];
    }
    set options(value) {
      super.options = value;
    }
    get mapController() {
      return this[mapController$];
    }
    set mapController(value) {
      super.mapController = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let children = opts && 'children' in opts ? opts.children : C[95] || CT.C95;
      let nonRotatedChildren = opts && 'nonRotatedChildren' in opts ? opts.nonRotatedChildren : C[95] || CT.C95;
      let mapController = opts && 'mapController' in opts ? opts.mapController : null;
      return new flutter_map.FlutterMap.new({key: key, options: options, children: children, nonRotatedChildren: nonRotatedChildren, mapController: mapController, $creationLocationd_0dea112b090073317d4: C[96] || CT.C96});
    }
    createState() {
      return new flutter_map_state.FlutterMapState.new();
    }
  };
  (flutter_map.FlutterMap.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let children = opts && 'children' in opts ? opts.children : C[95] || CT.C95;
    let nonRotatedChildren = opts && 'nonRotatedChildren' in opts ? opts.nonRotatedChildren : C[95] || CT.C95;
    let mapController = opts && 'mapController' in opts ? opts.mapController : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$] = options;
    this[children$] = children;
    this[nonRotatedChildren$] = nonRotatedChildren;
    this[mapController$] = mapController;
    flutter_map.FlutterMap.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_map.FlutterMap.prototype;
  dart.addTypeTests(flutter_map.FlutterMap);
  dart.addTypeCaches(flutter_map.FlutterMap);
  dart.setMethodSignature(flutter_map.FlutterMap, () => ({
    __proto__: dart.getMethods(flutter_map.FlutterMap.__proto__),
    createState: dart.fnType(flutter_map_state.FlutterMapState, [])
  }));
  dart.setLibraryUri(flutter_map.FlutterMap, I[21]);
  dart.setFieldSignature(flutter_map.FlutterMap, () => ({
    __proto__: dart.getFields(flutter_map.FlutterMap.__proto__),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    nonRotatedChildren: dart.finalFieldType(core.List$(framework.Widget)),
    options: dart.finalFieldType(flutter_map.MapOptions),
    mapController: dart.finalFieldType(dart.nullable(flutter_map.MapController))
  }));
  const State_TickerProviderStateMixin$36$ = class State_TickerProviderStateMixin extends framework.State$(flutter_map.FlutterMap) {};
  (State_TickerProviderStateMixin$36$.new = function() {
    ticker_provider.TickerProviderStateMixin$(flutter_map.FlutterMap)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$, ticker_provider.TickerProviderStateMixin$(flutter_map.FlutterMap));
  gestures.MapGestureMixin = class MapGestureMixin extends State_TickerProviderStateMixin$36$ {
    onPointerDown(event) {
      this[_pointerCounter] = this[_pointerCounter] + 1;
      if (this.mapState.options.onPointerDown != null) {
        let latlng = this[_offsetToCrs](event.localPosition);
        dart.nullCheck(this.mapState.options.onPointerDown)(event, latlng);
      }
    }
    onPointerUp(event) {
      this[_pointerCounter] = this[_pointerCounter] - 1;
      if (this.mapState.options.onPointerUp != null) {
        let latlng = this[_offsetToCrs](event.localPosition);
        dart.nullCheck(this.mapState.options.onPointerUp)(event, latlng);
      }
    }
    onPointerCancel(event) {
      this[_pointerCounter] = this[_pointerCounter] - 1;
      if (this.mapState.options.onPointerCancel != null) {
        let latlng = this[_offsetToCrs](event.localPosition);
        dart.nullCheck(this.mapState.options.onPointerCancel)(event, latlng);
      }
    }
    onPointerHover(event) {
      if (this.mapState.options.onPointerHover != null) {
        let latlng = this[_offsetToCrs](event.localPosition);
        dart.nullCheck(this.mapState.options.onPointerHover)(event, latlng);
      }
    }
    onPointerSignal(pointerSignal) {
      let t15, t15$;
      if (events.PointerScrollEvent.is(pointerSignal) && this.mapState.options.enableScrollWheel && pointerSignal.scrollDelta.dy !== 0) {
        let minZoom = (t15 = this.mapState.options.minZoom, t15 == null ? 0.0 : t15);
        let maxZoom = (t15$ = this.mapState.options.maxZoom, t15$ == null ? 1 / 0 : t15$);
        let newZoom = (this.mapState.zoom - pointerSignal.scrollDelta.dy * this.mapState.options.scrollWheelVelocity)[$clamp](minZoom, maxZoom);
        let newCenterZoom = this[_getNewEventCenterZoomPosition](this[_offsetToPoint](pointerSignal.localPosition), newZoom);
        this.mapState.move(latlong.LatLng.as(newCenterZoom[$_get](0)), core.double.as(newCenterZoom[$_get](1)), {source: map_events.MapEventSource.scrollWheel});
      }
    }
    get [_scaleCorrector]() {
      let t15;
      t15 = this[__MapGestureMixin__scaleCorrector];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_scaleCorrector")) : t15;
    }
    set [_scaleCorrector](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_scaleCorrector$35param) {
      this[__MapGestureMixin__scaleCorrector] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_scaleCorrector$35param;
    }
    get [_lastRotation]() {
      let t15;
      t15 = this[__MapGestureMixin__lastRotation];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_lastRotation")) : t15;
    }
    set [_lastRotation](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_lastRotation$35param) {
      this[__MapGestureMixin__lastRotation] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_lastRotation$35param;
    }
    get [_lastScale]() {
      let t15;
      t15 = this[__MapGestureMixin__lastScale];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_lastScale")) : t15;
    }
    set [_lastScale](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_lastScale$35param) {
      this[__MapGestureMixin__lastScale] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_lastScale$35param;
    }
    get [_lastFocalLocal]() {
      let t15;
      t15 = this[__MapGestureMixin__lastFocalLocal];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_lastFocalLocal")) : t15;
    }
    set [_lastFocalLocal](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_lastFocalLocal$35param) {
      this[__MapGestureMixin__lastFocalLocal] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_lastFocalLocal$35param;
    }
    get [_mapCenterStart]() {
      let t15;
      t15 = this[__MapGestureMixin__mapCenterStart];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_mapCenterStart")) : t15;
    }
    set [_mapCenterStart](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_mapCenterStart$35param) {
      this[__MapGestureMixin__mapCenterStart] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_mapCenterStart$35param;
    }
    get [_mapZoomStart]() {
      let t15;
      t15 = this[__MapGestureMixin__mapZoomStart];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_mapZoomStart")) : t15;
    }
    set [_mapZoomStart](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_mapZoomStart$35param) {
      this[__MapGestureMixin__mapZoomStart] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_mapZoomStart$35param;
    }
    get [_focalStartLocal]() {
      let t15;
      t15 = this[__MapGestureMixin__focalStartLocal];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_focalStartLocal")) : t15;
    }
    set [_focalStartLocal](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_focalStartLocal$35param) {
      this[__MapGestureMixin__focalStartLocal] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_focalStartLocal$35param;
    }
    get [_focalStartLatLng]() {
      let t15;
      t15 = this[__MapGestureMixin__focalStartLatLng];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_focalStartLatLng")) : t15;
    }
    set [_focalStartLatLng](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_focalStartLatLng$35param) {
      this[__MapGestureMixin__focalStartLatLng] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_focalStartLatLng$35param;
    }
    get [_flingController]() {
      let t15;
      t15 = this[__MapGestureMixin__flingController];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_flingController")) : t15;
    }
    set [_flingController](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_flingController$35param) {
      if (this[__MapGestureMixin__flingController] == null)
        this[__MapGestureMixin__flingController] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_flingController$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_flingController"));
    }
    get [_flingAnimation]() {
      let t15;
      t15 = this[__MapGestureMixin__flingAnimation];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_flingAnimation")) : t15;
    }
    set [_flingAnimation](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_flingAnimation$35param) {
      this[__MapGestureMixin__flingAnimation] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_flingAnimation$35param;
    }
    get [_doubleTapController]() {
      let t15;
      t15 = this[__MapGestureMixin__doubleTapController];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_doubleTapController")) : t15;
    }
    set [_doubleTapController](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_doubleTapController$35param) {
      if (this[__MapGestureMixin__doubleTapController] == null)
        this[__MapGestureMixin__doubleTapController] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_doubleTapController$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_doubleTapController"));
    }
    get [_doubleTapZoomAnimation]() {
      let t15;
      t15 = this[__MapGestureMixin__doubleTapZoomAnimation];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_doubleTapZoomAnimation")) : t15;
    }
    set [_doubleTapZoomAnimation](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_doubleTapZoomAnimation$35param) {
      this[__MapGestureMixin__doubleTapZoomAnimation] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_doubleTapZoomAnimation$35param;
    }
    get [_doubleTapCenterAnimation]() {
      let t15;
      t15 = this[__MapGestureMixin__doubleTapCenterAnimation];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_doubleTapCenterAnimation")) : t15;
    }
    set [_doubleTapCenterAnimation](library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_doubleTapCenterAnimation$35param) {
      this[__MapGestureMixin__doubleTapCenterAnimation] = library$32package$58flutter_map$47src$47gestures$47gestures$46dart$58$58_doubleTapCenterAnimation$35param;
    }
    initState() {
      let t15, t15$;
      super.initState();
      this[_flingController] = (t15 = new animation_controller.AnimationController.new({vsync: this}), (() => {
        t15.addListener(dart.bind(this, _handleFlingAnimation));
        t15.addStatusListener(dart.bind(this, _flingAnimationStatusListener));
        return t15;
      })());
      this[_doubleTapController] = (t15$ = new animation_controller.AnimationController.new({vsync: this, duration: C[9] || CT.C9}), (() => {
        t15$.addListener(dart.bind(this, _handleDoubleTapZoomAnimation));
        t15$.addStatusListener(dart.bind(this, _doubleTapZoomStatusListener));
        return t15$;
      })());
    }
    didUpdateWidget(oldWidget) {
      flutter_map.FlutterMap.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      let oldFlags = oldWidget.options.interactiveFlags;
      let flags = this.options.interactiveFlags;
      let oldGestures = this[_getMultiFingerGestureFlags]({mapOptions: oldWidget.options});
      let gestures = this[_getMultiFingerGestureFlags]();
      if (flags !== oldFlags || gestures !== oldGestures) {
        let emitMapEventMoveEnd = false;
        if (!interactive_flag.InteractiveFlag.hasFlag(flags, 2)) {
          this.closeFlingAnimationController(map_events.MapEventSource.interactiveFlagsChanged);
        }
        if (!interactive_flag.InteractiveFlag.hasFlag(flags, 16)) {
          this.closeDoubleTapController(map_events.MapEventSource.interactiveFlagsChanged);
        }
        if (this[_rotationStarted] && !(interactive_flag.InteractiveFlag.hasFlag(flags, 32) && multi_finger_gesture.MultiFingerGesture.hasFlag(gestures, 4))) {
          this[_rotationStarted] = false;
          if (this[_gestureWinner] === 4) {
            this[_gestureWinner] = 0;
          }
          this.mapState.emitMapEvent(new map_events.MapEventRotateEnd.new({center: this.mapState.center, zoom: this.mapState.zoom, source: map_events.MapEventSource.interactiveFlagsChanged}));
        }
        if (this[_pinchZoomStarted] && !(interactive_flag.InteractiveFlag.hasFlag(flags, 8) && multi_finger_gesture.MultiFingerGesture.hasFlag(gestures, 2))) {
          this[_pinchZoomStarted] = false;
          emitMapEventMoveEnd = true;
          if (this[_gestureWinner] === 2) {
            this[_gestureWinner] = 0;
          }
        }
        if (this[_pinchMoveStarted] && !(interactive_flag.InteractiveFlag.hasFlag(flags, 4) && multi_finger_gesture.MultiFingerGesture.hasFlag(gestures, 1))) {
          this[_pinchMoveStarted] = false;
          emitMapEventMoveEnd = true;
          if (this[_gestureWinner] === 1) {
            this[_gestureWinner] = 0;
          }
        }
        if (this[_dragStarted] && !interactive_flag.InteractiveFlag.hasFlag(flags, 1)) {
          this[_dragStarted] = false;
          emitMapEventMoveEnd = true;
        }
        if (emitMapEventMoveEnd) {
          this.mapState.emitMapEvent(new map_events.MapEventRotateEnd.new({center: this.mapState.center, zoom: this.mapState.zoom, source: map_events.MapEventSource.interactiveFlagsChanged}));
        }
      }
    }
    [_yieldMultiFingerGestureWinner](gestureWinner, resetStartVariables) {
      this[_gestureWinner] = gestureWinner;
      if (resetStartVariables) {
        this[_scaleCorrector] = 1.0 - this[_lastScale];
      }
    }
    [_getMultiFingerGestureFlags](opts) {
      let gestureWinner = opts && 'gestureWinner' in opts ? opts.gestureWinner : null;
      let mapOptions = opts && 'mapOptions' in opts ? opts.mapOptions : null;
      gestureWinner == null ? gestureWinner = this[_gestureWinner] : null;
      mapOptions == null ? mapOptions = this.options : null;
      if (mapOptions.enableMultiFingerGestureRace) {
        if (gestureWinner === 2) {
          return mapOptions.pinchZoomWinGestures;
        } else if (gestureWinner === 4) {
          return mapOptions.rotationWinGestures;
        } else if (gestureWinner === 1) {
          return mapOptions.pinchMoveWinGestures;
        }
        return 0;
      } else {
        return 7;
      }
    }
    closeFlingAnimationController(source) {
      this[_flingAnimationStarted] = false;
      if (this[_flingController].isAnimating) {
        this[_flingController].stop();
        this[_stopListeningForAnimationInterruptions]();
        this.mapState.emitMapEvent(new map_events.MapEventFlingAnimationEnd.new({center: this.mapState.center, zoom: this.mapState.zoom, source: source}));
      }
    }
    closeDoubleTapController(source) {
      if (this[_doubleTapController].isAnimating) {
        this[_doubleTapController].stop();
        this[_stopListeningForAnimationInterruptions]();
        this.mapState.emitMapEvent(new map_events.MapEventDoubleTapZoomEnd.new({center: this.mapState.center, zoom: this.mapState.zoom, source: source}));
      }
    }
    handleScaleStart(details) {
      this[_dragMode] = this[_pointerCounter] === 1;
      let eventSource = this[_dragMode] ? map_events.MapEventSource.dragStart : map_events.MapEventSource.multiFingerGestureStart;
      this.closeFlingAnimationController(eventSource);
      this.closeDoubleTapController(eventSource);
      this[_gestureWinner] = 0;
      this[_mapZoomStart] = this.mapState.zoom;
      this[_mapCenterStart] = this.mapState.center;
      this[_focalStartLocal] = this[_lastFocalLocal] = details.localFocalPoint;
      this[_focalStartLatLng] = this[_offsetToCrs](this[_focalStartLocal]);
      this[_dragStarted] = false;
      this[_pinchZoomStarted] = false;
      this[_pinchMoveStarted] = false;
      this[_rotationStarted] = false;
      this[_lastRotation] = 0.0;
      this[_scaleCorrector] = 0.0;
      this[_lastScale] = 1.0;
    }
    handleScaleUpdate(details) {
      if (this[_tapUpCounter] === 1) {
        this[_handleDoubleTapHold](details);
        return;
      }
      let eventSource = this[_dragMode] ? map_events.MapEventSource.onDrag : map_events.MapEventSource.onMultiFinger;
      let flags = this.options.interactiveFlags;
      let focalOffset = details.localFocalPoint;
      let currentRotation = latlong.radianToDeg(details.rotation);
      if (this[_dragMode]) {
        if (interactive_flag.InteractiveFlag.hasFlag(flags, 1)) {
          if (!this[_dragStarted]) {
            this[_dragStarted] = true;
            this.mapState.emitMapEvent(new map_events.MapEventMoveStart.new({center: this.mapState.center, zoom: this.mapState.zoom, source: eventSource}));
          }
          let oldCenterPt = this.mapState.project(this.mapState.center, this.mapState.zoom);
          let localDistanceOffset = this[_rotateOffset](this[_lastFocalLocal]['-'](focalOffset));
          let newCenterPt = oldCenterPt['+'](this[_offsetToPoint](localDistanceOffset));
          let newCenter = this.mapState.unproject(newCenterPt, this.mapState.zoom);
          this.mapState.move(newCenter, this.mapState.zoom, {hasGesture: true, source: eventSource});
        }
      } else {
        let hasIntPinchMove = interactive_flag.InteractiveFlag.hasFlag(flags, 4);
        let hasIntPinchZoom = interactive_flag.InteractiveFlag.hasFlag(flags, 8);
        let hasIntRotate = interactive_flag.InteractiveFlag.hasFlag(flags, 32);
        if (hasIntPinchMove || hasIntPinchZoom || hasIntRotate) {
          let hasGestureRace = this.options.enableMultiFingerGestureRace;
          if (hasGestureRace && this[_gestureWinner] === 0) {
            if (hasIntPinchZoom && (this[_getZoomForScale](this[_mapZoomStart], details.scale) - this[_mapZoomStart])[$abs]() >= this.options.pinchZoomThreshold) {
              if (this.options.debugMultiFingerGestureWinner) {
                print.debugPrint("Multi Finger Gesture winner: Pinch Zoom");
              }
              this[_yieldMultiFingerGestureWinner](2, true);
            } else if (hasIntRotate && currentRotation[$abs]() >= this.options.rotationThreshold) {
              if (this.options.debugMultiFingerGestureWinner) {
                print.debugPrint("Multi Finger Gesture winner: Rotate");
              }
              this[_yieldMultiFingerGestureWinner](4, true);
            } else if (hasIntPinchMove && this[_focalStartLocal]['-'](focalOffset).distance >= this.options.pinchMoveThreshold) {
              if (this.options.debugMultiFingerGestureWinner) {
                print.debugPrint("Multi Finger Gesture winner: Pinch Move");
              }
              this[_yieldMultiFingerGestureWinner](1, true);
            }
          }
          if (!hasGestureRace || this[_gestureWinner] !== 0) {
            let gestures = this[_getMultiFingerGestureFlags]();
            let hasGesturePinchMove = multi_finger_gesture.MultiFingerGesture.hasFlag(gestures, 1);
            let hasGesturePinchZoom = multi_finger_gesture.MultiFingerGesture.hasFlag(gestures, 2);
            let hasGestureRotate = multi_finger_gesture.MultiFingerGesture.hasFlag(gestures, 4);
            let hasMove = hasIntPinchMove && hasGesturePinchMove;
            let hasZoom = hasIntPinchZoom && hasGesturePinchZoom;
            let hasRotate = hasIntRotate && hasGestureRotate;
            let mapMoved = false;
            let mapRotated = false;
            if (hasMove || hasZoom) {
              let newZoom = null;
              if (hasZoom) {
                newZoom = this[_getZoomForScale](this[_mapZoomStart], details.scale + this[_scaleCorrector]);
                if (!this[_pinchZoomStarted]) {
                  if (newZoom !== this[_mapZoomStart]) {
                    this[_pinchZoomStarted] = true;
                    if (!this[_pinchMoveStarted]) {
                      this.mapState.emitMapEvent(new map_events.MapEventMoveStart.new({center: this.mapState.center, zoom: this.mapState.zoom, source: eventSource}));
                    }
                  }
                }
              } else {
                newZoom = this.mapState.zoom;
              }
              let newCenter = null;
              if (hasMove) {
                if (!this[_pinchMoveStarted] && !this[_lastFocalLocal]._equals(focalOffset)) {
                  this[_pinchMoveStarted] = true;
                  if (!this[_pinchZoomStarted]) {
                    this.mapState.emitMapEvent(new map_events.MapEventMoveStart.new({center: this.mapState.center, zoom: this.mapState.zoom, source: eventSource}));
                  }
                }
                if (this[_pinchMoveStarted]) {
                  let oldCenterPt = this.mapState.project(this.mapState.center, newZoom);
                  let newFocalLatLong = this[_offsetToCrs](this[_focalStartLocal], newZoom);
                  let newFocalPt = this.mapState.project(newFocalLatLong, newZoom);
                  let oldFocalPt = this.mapState.project(this[_focalStartLatLng], newZoom);
                  let zoomDifference = oldFocalPt['-'](newFocalPt);
                  let moveDifference = this[_rotateOffset](this[_focalStartLocal]['-'](this[_lastFocalLocal]));
                  let newCenterPt = oldCenterPt['+'](zoomDifference)['+'](this[_offsetToPoint](moveDifference));
                  newCenter = this.mapState.unproject(newCenterPt, newZoom);
                } else {
                  newCenter = this.mapState.center;
                }
              } else {
                newCenter = this.mapState.center;
              }
              if (this[_pinchZoomStarted] || this[_pinchMoveStarted]) {
                mapMoved = this.mapState.move(newCenter, newZoom, {hasGesture: true, source: eventSource});
              }
            }
            if (hasRotate) {
              if (!this[_rotationStarted] && currentRotation !== 0.0) {
                this[_rotationStarted] = true;
                this.mapState.emitMapEvent(new map_events.MapEventRotateStart.new({center: this.mapState.center, zoom: this.mapState.zoom, source: eventSource}));
              }
              if (this[_rotationStarted]) {
                let rotationDiff = currentRotation - this[_lastRotation];
                mapRotated = this.mapState.rotate(this.mapState.rotation + rotationDiff, {hasGesture: true, source: eventSource});
              }
            }
            if (mapMoved || mapRotated) this.mapState.setState(dart.fn(() => {
            }, T$.VoidTovoid()));
          }
        }
      }
      this[_lastRotation] = currentRotation;
      this[_lastScale] = details.scale;
      this[_lastFocalLocal] = focalOffset;
    }
    handleScaleEnd(details) {
      let t15;
      this[_resetDoubleTapHold]();
      let eventSource = this[_dragMode] ? map_events.MapEventSource.dragEnd : map_events.MapEventSource.multiFingerEnd;
      if (this[_rotationStarted]) {
        this[_rotationStarted] = false;
        this.mapState.emitMapEvent(new map_events.MapEventRotateEnd.new({center: this.mapState.center, zoom: this.mapState.zoom, source: eventSource}));
      }
      if (this[_dragStarted] || this[_pinchZoomStarted] || this[_pinchMoveStarted]) {
        this[_dragStarted] = this[_pinchZoomStarted] = this[_pinchMoveStarted] = false;
        this.mapState.emitMapEvent(new map_events.MapEventMoveEnd.new({center: this.mapState.center, zoom: this.mapState.zoom, source: eventSource}));
      }
      let hasFling = interactive_flag.InteractiveFlag.hasFlag(this.options.interactiveFlags, 2);
      let magnitude = details.velocity.pixelsPerSecond.distance;
      if (magnitude < 800 || !hasFling) {
        if (hasFling) {
          this.mapState.emitMapEvent(new map_events.MapEventFlingAnimationNotStarted.new({center: this.mapState.center, zoom: this.mapState.zoom, source: eventSource}));
        }
        return;
      }
      let direction = details.velocity.pixelsPerSecond['/'](magnitude);
      let distance = ui.Offset.zero['&'](new ui.Size.new(dart.nullCheck(this.mapState.nonrotatedSize).x, dart.nullCheck(this.mapState.nonrotatedSize).y)).shortestSide;
      let flingOffset = this[_focalStartLocal]['-'](this[_lastFocalLocal]);
      this[_flingAnimation] = new (T$.TweenOfOffset()).new({begin: flingOffset, end: flingOffset['-'](direction['*'](distance))}).animate(this[_flingController]);
      t15 = this[_flingController];
      (() => {
        t15.value = 0.0;
        t15.fling({velocity: magnitude / 1000.0, springDescription: new spring_simulation.SpringDescription.withDampingRatio({mass: 1.0, stiffness: 1000.0, ratio: 5.0})});
        return t15;
      })();
    }
    handleTap(position) {
      this.closeFlingAnimationController(map_events.MapEventSource.tap);
      this.closeDoubleTapController(map_events.MapEventSource.tap);
      let latlng = this[_offsetToCrs](dart.nullCheck(position.relative));
      if (this.options.onTap != null) {
        dart.nullCheck(this.options.onTap)(position, latlng);
      }
      this.mapState.emitMapEvent(new map_events.MapEventTap.new({tapPosition: latlng, center: this.mapState.center, zoom: this.mapState.zoom, source: map_events.MapEventSource.tap}));
    }
    handleLongPress(position) {
      this[_resetDoubleTapHold]();
      this.closeFlingAnimationController(map_events.MapEventSource.longPress);
      this.closeDoubleTapController(map_events.MapEventSource.longPress);
      let latlng = this[_offsetToCrs](dart.nullCheck(position.relative));
      if (this.options.onLongPress != null) {
        dart.nullCheck(this.options.onLongPress)(position, latlng);
      }
      this.mapState.emitMapEvent(new map_events.MapEventLongPress.new({tapPosition: latlng, center: this.mapState.center, zoom: this.mapState.zoom, source: map_events.MapEventSource.longPress}));
    }
    [_offsetToCrs](offset, zoom = null) {
      let t15, t15$;
      let focalStartPt = this.mapState.project(this.mapState.center, (t15 = zoom, t15 == null ? this.mapState.zoom : t15));
      let point = this[_offsetToPoint](offset)['-'](dart.nullCheck(this.mapState.nonrotatedSize)['/'](2.0)).rotate(this.mapState.rotationRad);
      let newCenterPt = focalStartPt['+'](point);
      return this.mapState.unproject(newCenterPt, (t15$ = zoom, t15$ == null ? this.mapState.zoom : t15$));
    }
    handleDoubleTap(tapPosition) {
      this[_resetDoubleTapHold]();
      this.closeFlingAnimationController(map_events.MapEventSource.doubleTap);
      this.closeDoubleTapController(map_events.MapEventSource.doubleTap);
      if (interactive_flag.InteractiveFlag.hasFlag(this.options.interactiveFlags, 16)) {
        let centerZoom = this[_getNewEventCenterZoomPosition](this[_offsetToPoint](dart.nullCheck(tapPosition.relative)), this[_getZoomForScale](this.mapState.zoom, 2.0));
        this[_startDoubleTapAnimation](core.double.as(centerZoom[$_get](1)), latlong.LatLng.as(centerZoom[$_get](0)));
      }
    }
    [_getNewEventCenterZoomPosition](cursorPos, newZoom) {
      let viewCenter = dart.nullCheck(this.mapState.nonrotatedSize)['/'](2);
      let offset = cursorPos['-'](viewCenter).rotate(this.mapState.rotationRad);
      let scale = this.mapState.getZoomScale(newZoom, this.mapState.zoom);
      let newOffset = offset['*'](1.0 - 1.0 / scale);
      let mapCenter = this.mapState.project(this.mapState.center);
      let newCenter = this.mapState.unproject(mapCenter['+'](newOffset));
      return [newCenter, newZoom];
    }
    [_startDoubleTapAnimation](newZoom, newCenter) {
      this[_doubleTapZoomAnimation] = new (T$.TweenOfdouble()).new({begin: this.mapState.zoom, end: newZoom}).chain(new tween.CurveTween.new({curve: curves.Curves.linear})).animate(this[_doubleTapController]);
      this[_doubleTapCenterAnimation] = new latlng_tween.LatLngTween.new({begin: this.mapState.center, end: newCenter}).chain(new tween.CurveTween.new({curve: curves.Curves.linear})).animate(this[_doubleTapController]);
      this[_doubleTapController].forward({from: 0.0});
    }
    [_doubleTapZoomStatusListener](status) {
      if (status === animation.AnimationStatus.forward) {
        this.mapState.emitMapEvent(new map_events.MapEventDoubleTapZoomStart.new({center: this.mapState.center, zoom: this.mapState.zoom, source: map_events.MapEventSource.doubleTapZoomAnimationController}));
        this[_startListeningForAnimationInterruptions]();
      } else if (status === animation.AnimationStatus.completed) {
        this[_stopListeningForAnimationInterruptions]();
        this.mapState.emitMapEvent(new map_events.MapEventDoubleTapZoomEnd.new({center: this.mapState.center, zoom: this.mapState.zoom, source: map_events.MapEventSource.doubleTapZoomAnimationController}));
      }
    }
    [_handleDoubleTapZoomAnimation]() {
      this.mapState.move(this[_doubleTapCenterAnimation].value, this[_doubleTapZoomAnimation].value, {hasGesture: true, source: map_events.MapEventSource.doubleTapZoomAnimationController});
    }
    handleOnTapUp(details) {
      let t15;
      t15 = this[_doubleTapHoldMaxDelay];
      t15 == null ? null : t15.cancel();
      if ((this[_tapUpCounter] = this[_tapUpCounter] + 1) === 1) {
        this[_doubleTapHoldMaxDelay] = async.Timer.new(C[94] || CT.C94, dart.bind(this, _resetDoubleTapHold));
      }
    }
    [_handleDoubleTapHold](details) {
      let t15, t15$, t15$0;
      t15 = this[_doubleTapHoldMaxDelay];
      t15 == null ? null : t15.cancel();
      let flags = this.options.interactiveFlags;
      if (interactive_flag.InteractiveFlag.hasFlag(flags, 8)) {
        let zoom = this.mapState.zoom;
        let focalOffset = details.localFocalPoint;
        let verticalOffset = this[_focalStartLocal]['-'](focalOffset).dy;
        let newZoom = this[_mapZoomStart] - verticalOffset / 360 * zoom;
        let min = (t15$ = this.options.minZoom, t15$ == null ? 0.0 : t15$);
        let max = (t15$0 = this.options.maxZoom, t15$0 == null ? 1 / 0 : t15$0);
        let actualZoom = math.max(core.double, min, math.min(core.double, max, newZoom));
        this.mapState.move(this.mapState.center, actualZoom, {hasGesture: true, source: map_events.MapEventSource.doubleTapHold});
      }
    }
    [_resetDoubleTapHold]() {
      let t15;
      t15 = this[_doubleTapHoldMaxDelay];
      t15 == null ? null : t15.cancel();
      this[_tapUpCounter] = 0;
    }
    [_flingAnimationStatusListener](status) {
      if (status === animation.AnimationStatus.completed) {
        this[_flingAnimationStarted] = false;
        this[_stopListeningForAnimationInterruptions]();
        this.mapState.emitMapEvent(new map_events.MapEventFlingAnimationEnd.new({center: this.mapState.center, zoom: this.mapState.zoom, source: map_events.MapEventSource.flingAnimationController}));
      }
    }
    [_handleFlingAnimation]() {
      if (!this[_flingAnimationStarted]) {
        this[_flingAnimationStarted] = true;
        this.mapState.emitMapEvent(new map_events.MapEventFlingAnimationStart.new({center: this.mapState.center, zoom: this.mapState.zoom, source: map_events.MapEventSource.flingAnimationController}));
        this[_startListeningForAnimationInterruptions]();
      }
      let newCenterPoint = this.mapState.project(this[_mapCenterStart])['+'](this[_offsetToPoint](this[_flingAnimation].value).rotate(this.mapState.rotationRad));
      let newCenter = this.mapState.unproject(newCenterPoint);
      this.mapState.move(newCenter, this.mapState.zoom, {hasGesture: true, source: map_events.MapEventSource.flingAnimationController});
    }
    [_startListeningForAnimationInterruptions]() {
      this[_isListeningForInterruptions] = true;
    }
    [_stopListeningForAnimationInterruptions]() {
      this[_isListeningForInterruptions] = false;
    }
    handleAnimationInterruptions(event) {
      if (this[_isListeningForInterruptions] === false) {
        return;
      }
      this.closeDoubleTapController(event.source);
      this.closeFlingAnimationController(event.source);
    }
    [_offsetToPoint](offset) {
      return new (T$.CustomPointOfnum()).new(offset.dx, offset.dy);
    }
    [_getZoomForScale](startZoom, scale) {
      let resultZoom = scale === 1.0 ? startZoom : startZoom + math.log(scale) / 0.6931471805599453;
      return this.mapState.fitZoomToBounds(resultZoom);
    }
    [_rotateOffset](offset) {
      let radians = this.mapState.rotationRad;
      if (radians !== 0.0) {
        let cos = math.cos(radians);
        let sin = math.sin(radians);
        let nx = cos * offset.dx + sin * offset.dy;
        let ny = cos * offset.dy - sin * offset.dx;
        return new ui.Offset.new(nx, ny);
      }
      return offset;
    }
    dispose() {
      this[_flingController].dispose();
      this[_doubleTapController].dispose();
      super.dispose();
    }
  };
  (gestures.MapGestureMixin.new = function() {
    this[_dragMode] = false;
    this[_gestureWinner] = 0;
    this[_pointerCounter] = 0;
    this[_isListeningForInterruptions] = false;
    this[_rotationStarted] = false;
    this[_pinchZoomStarted] = false;
    this[_pinchMoveStarted] = false;
    this[_dragStarted] = false;
    this[_flingAnimationStarted] = false;
    this[__MapGestureMixin__scaleCorrector] = null;
    this[__MapGestureMixin__lastRotation] = null;
    this[__MapGestureMixin__lastScale] = null;
    this[__MapGestureMixin__lastFocalLocal] = null;
    this[__MapGestureMixin__mapCenterStart] = null;
    this[__MapGestureMixin__mapZoomStart] = null;
    this[__MapGestureMixin__focalStartLocal] = null;
    this[__MapGestureMixin__focalStartLatLng] = null;
    this[__MapGestureMixin__flingController] = null;
    this[__MapGestureMixin__flingAnimation] = null;
    this[__MapGestureMixin__doubleTapController] = null;
    this[__MapGestureMixin__doubleTapZoomAnimation] = null;
    this[__MapGestureMixin__doubleTapCenterAnimation] = null;
    this[_tapUpCounter] = 0;
    this[_doubleTapHoldMaxDelay] = null;
    gestures.MapGestureMixin.__proto__.new.call(this);
    ;
  }).prototype = gestures.MapGestureMixin.prototype;
  dart.addTypeTests(gestures.MapGestureMixin);
  dart.addTypeCaches(gestures.MapGestureMixin);
  dart.setMethodSignature(gestures.MapGestureMixin, () => ({
    __proto__: dart.getMethods(gestures.MapGestureMixin.__proto__),
    onPointerDown: dart.fnType(dart.void, [events.PointerDownEvent]),
    onPointerUp: dart.fnType(dart.void, [events.PointerUpEvent]),
    onPointerCancel: dart.fnType(dart.void, [events.PointerCancelEvent]),
    onPointerHover: dart.fnType(dart.void, [events.PointerHoverEvent]),
    onPointerSignal: dart.fnType(dart.void, [events.PointerSignalEvent]),
    [_yieldMultiFingerGestureWinner]: dart.fnType(dart.void, [core.int, core.bool]),
    [_getMultiFingerGestureFlags]: dart.fnType(core.int, [], {gestureWinner: dart.nullable(core.int), mapOptions: dart.nullable(flutter_map.MapOptions)}, {}),
    closeFlingAnimationController: dart.fnType(dart.void, [map_events.MapEventSource]),
    closeDoubleTapController: dart.fnType(dart.void, [map_events.MapEventSource]),
    handleScaleStart: dart.fnType(dart.void, [scale.ScaleStartDetails]),
    handleScaleUpdate: dart.fnType(dart.void, [scale.ScaleUpdateDetails]),
    handleScaleEnd: dart.fnType(dart.void, [scale.ScaleEndDetails]),
    handleTap: dart.fnType(dart.void, [positioned_tap_detector_2.TapPosition]),
    handleLongPress: dart.fnType(dart.void, [positioned_tap_detector_2.TapPosition]),
    [_offsetToCrs]: dart.fnType(latlong.LatLng, [ui.Offset], [dart.nullable(core.double)]),
    handleDoubleTap: dart.fnType(dart.void, [positioned_tap_detector_2.TapPosition]),
    [_getNewEventCenterZoomPosition]: dart.fnType(core.List, [point.CustomPoint$(core.num), core.double]),
    [_startDoubleTapAnimation]: dart.fnType(dart.void, [core.double, latlong.LatLng]),
    [_doubleTapZoomStatusListener]: dart.fnType(dart.void, [animation.AnimationStatus]),
    [_handleDoubleTapZoomAnimation]: dart.fnType(dart.void, []),
    handleOnTapUp: dart.fnType(dart.void, [tap.TapUpDetails]),
    [_handleDoubleTapHold]: dart.fnType(dart.void, [scale.ScaleUpdateDetails]),
    [_resetDoubleTapHold]: dart.fnType(dart.void, []),
    [_flingAnimationStatusListener]: dart.fnType(dart.void, [animation.AnimationStatus]),
    [_handleFlingAnimation]: dart.fnType(dart.void, []),
    [_startListeningForAnimationInterruptions]: dart.fnType(dart.void, []),
    [_stopListeningForAnimationInterruptions]: dart.fnType(dart.void, []),
    handleAnimationInterruptions: dart.fnType(dart.void, [map_events.MapEvent]),
    [_offsetToPoint]: dart.fnType(point.CustomPoint$(core.num), [ui.Offset]),
    [_getZoomForScale]: dart.fnType(core.double, [core.double, core.double]),
    [_rotateOffset]: dart.fnType(ui.Offset, [ui.Offset])
  }));
  dart.setGetterSignature(gestures.MapGestureMixin, () => ({
    __proto__: dart.getGetters(gestures.MapGestureMixin.__proto__),
    [_scaleCorrector]: core.double,
    [_lastRotation]: core.double,
    [_lastScale]: core.double,
    [_lastFocalLocal]: ui.Offset,
    [_mapCenterStart]: latlong.LatLng,
    [_mapZoomStart]: core.double,
    [_focalStartLocal]: ui.Offset,
    [_focalStartLatLng]: latlong.LatLng,
    [_flingController]: animation_controller.AnimationController,
    [_flingAnimation]: animation.Animation$(ui.Offset),
    [_doubleTapController]: animation_controller.AnimationController,
    [_doubleTapZoomAnimation]: animation.Animation$(core.double),
    [_doubleTapCenterAnimation]: animation.Animation$(latlong.LatLng)
  }));
  dart.setSetterSignature(gestures.MapGestureMixin, () => ({
    __proto__: dart.getSetters(gestures.MapGestureMixin.__proto__),
    [_scaleCorrector]: core.double,
    [_lastRotation]: core.double,
    [_lastScale]: core.double,
    [_lastFocalLocal]: ui.Offset,
    [_mapCenterStart]: latlong.LatLng,
    [_mapZoomStart]: core.double,
    [_focalStartLocal]: ui.Offset,
    [_focalStartLatLng]: latlong.LatLng,
    [_flingController]: animation_controller.AnimationController,
    [_flingAnimation]: animation.Animation$(ui.Offset),
    [_doubleTapController]: animation_controller.AnimationController,
    [_doubleTapZoomAnimation]: animation.Animation$(core.double),
    [_doubleTapCenterAnimation]: animation.Animation$(latlong.LatLng)
  }));
  dart.setLibraryUri(gestures.MapGestureMixin, I[22]);
  dart.setFieldSignature(gestures.MapGestureMixin, () => ({
    __proto__: dart.getFields(gestures.MapGestureMixin.__proto__),
    [_dragMode]: dart.fieldType(core.bool),
    [_gestureWinner]: dart.fieldType(core.int),
    [_pointerCounter]: dart.fieldType(core.int),
    [_isListeningForInterruptions]: dart.fieldType(core.bool),
    [_rotationStarted]: dart.fieldType(core.bool),
    [_pinchZoomStarted]: dart.fieldType(core.bool),
    [_pinchMoveStarted]: dart.fieldType(core.bool),
    [_dragStarted]: dart.fieldType(core.bool),
    [_flingAnimationStarted]: dart.fieldType(core.bool),
    [__MapGestureMixin__scaleCorrector]: dart.fieldType(dart.nullable(core.double)),
    [__MapGestureMixin__lastRotation]: dart.fieldType(dart.nullable(core.double)),
    [__MapGestureMixin__lastScale]: dart.fieldType(dart.nullable(core.double)),
    [__MapGestureMixin__lastFocalLocal]: dart.fieldType(dart.nullable(ui.Offset)),
    [__MapGestureMixin__mapCenterStart]: dart.fieldType(dart.nullable(latlong.LatLng)),
    [__MapGestureMixin__mapZoomStart]: dart.fieldType(dart.nullable(core.double)),
    [__MapGestureMixin__focalStartLocal]: dart.fieldType(dart.nullable(ui.Offset)),
    [__MapGestureMixin__focalStartLatLng]: dart.fieldType(dart.nullable(latlong.LatLng)),
    [__MapGestureMixin__flingController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [__MapGestureMixin__flingAnimation]: dart.fieldType(dart.nullable(animation.Animation$(ui.Offset))),
    [__MapGestureMixin__doubleTapController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [__MapGestureMixin__doubleTapZoomAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [__MapGestureMixin__doubleTapCenterAnimation]: dart.fieldType(dart.nullable(animation.Animation$(latlong.LatLng))),
    [_tapUpCounter]: dart.fieldType(core.int),
    [_doubleTapHoldMaxDelay]: dart.fieldType(dart.nullable(async.Timer))
  }));
  dart.setStaticFieldSignature(gestures.MapGestureMixin, () => ['_kMinFlingVelocity']);
  dart.defineLazy(gestures.MapGestureMixin, {
    /*gestures.MapGestureMixin._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 800;
    }
  }, false);
  var _positionedTapController = dart.privateName(flutter_map_state, "_positionedTapController");
  var _team = dart.privateName(flutter_map_state, "_team");
  var _localController = dart.privateName(flutter_map_state, "_localController");
  var __FlutterMapState__zoom = dart.privateName(flutter_map_state, "_#FlutterMapState#_zoom");
  var __FlutterMapState__rotation = dart.privateName(flutter_map_state, "_#FlutterMapState#_rotation");
  var __FlutterMapState__pixelOrigin = dart.privateName(flutter_map_state, "_#FlutterMapState#_pixelOrigin");
  var __FlutterMapState__center = dart.privateName(flutter_map_state, "_#FlutterMapState#_center");
  var __FlutterMapState__bounds = dart.privateName(flutter_map_state, "_#FlutterMapState#_bounds");
  var __FlutterMapState__pixelBounds = dart.privateName(flutter_map_state, "_#FlutterMapState#_pixelBounds");
  var _nonrotatedSize = dart.privateName(flutter_map_state, "_nonrotatedSize");
  var _size = dart.privateName(flutter_map_state, "_size");
  var _safeAreaCache = dart.privateName(flutter_map_state, "_safeAreaCache");
  var _safeAreaZoom = dart.privateName(flutter_map_state, "_safeAreaZoom");
  var _rotation = dart.privateName(flutter_map_state, "_rotation");
  var _center = dart.privateName(flutter_map_state, "_center");
  var _zoom = dart.privateName(flutter_map_state, "_zoom");
  var _pixelBounds = dart.privateName(flutter_map_state, "_pixelBounds");
  var _bounds = dart.privateName(flutter_map_state, "_bounds");
  var _calculateBounds = dart.privateName(flutter_map_state, "_calculateBounds");
  var _pixelOrigin = dart.privateName(flutter_map_state, "_pixelOrigin");
  var _buildMap = dart.privateName(flutter_map_state, "_buildMap");
  var _updateSizeByOriginalSizeAndRotation = dart.privateName(flutter_map_state, "_updateSizeByOriginalSizeAndRotation");
  var _handleMoveEmit = dart.privateName(flutter_map_state, "_handleMoveEmit");
  var _safeArea = dart.privateName(flutter_map_state, "_safeArea");
  var _calculateScreenHeightInDegrees = dart.privateName(flutter_map_state, "_calculateScreenHeightInDegrees");
  var _calculateScreenWidthInDegrees = dart.privateName(flutter_map_state, "_calculateScreenWidthInDegrees");
  const MapGestureMixin_AutomaticKeepAliveClientMixin$36 = class MapGestureMixin_AutomaticKeepAliveClientMixin extends gestures.MapGestureMixin {};
  (MapGestureMixin_AutomaticKeepAliveClientMixin$36.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(flutter_map.FlutterMap)[dart.mixinNew].call(this);
    MapGestureMixin_AutomaticKeepAliveClientMixin$36.__proto__.new.call(this);
  }).prototype = MapGestureMixin_AutomaticKeepAliveClientMixin$36.prototype;
  dart.applyMixin(MapGestureMixin_AutomaticKeepAliveClientMixin$36, automatic_keep_alive.AutomaticKeepAliveClientMixin$(flutter_map.FlutterMap));
  flutter_map_state.FlutterMapState = class FlutterMapState extends MapGestureMixin_AutomaticKeepAliveClientMixin$36 {
    get options() {
      return this.widget.options;
    }
    get mapState() {
      return this;
    }
    get mapController() {
      let t15;
      t15 = this.widget.mapController;
      return t15 == null ? this[_localController] : t15;
    }
    initState() {
      super.initState();
      this.mapController.state = this;
      this[_rotation] = this.options.rotation;
      this[_center] = this.options.center;
      this[_zoom] = this.options.zoom;
      this[_pixelBounds] = this.getPixelBounds(this.zoom);
      this[_bounds] = this[_calculateBounds]();
      this.move(this.options.center, this.zoom, {source: map_events.MapEventSource.initialization});
      if (this.options.bounds != null) {
        this.fitBounds(dart.nullCheck(this.options.bounds), this.options.boundsOptions);
      }
      binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
        let t15;
        t15 = this.options.onMapReady;
        t15 == null ? null : t15();
      }, T$.DurationTovoid()));
    }
    didUpdateWidget(oldWidget) {
      flutter_map.FlutterMap.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      this.mapController.state = this;
    }
    build(context) {
      let t15;
      super.build(context);
      let gestureSettings = (t15 = media_query.MediaQuery.maybeOf(context), t15 == null ? null : t15.gestureSettings);
      let gestures = new (T$.LinkedMapOfType$GestureRecognizerFactoryOfGestureRecognizer()).new();
      gestures[$_set](dart.wrapType(tap.TapGestureRecognizer), new (T$.GestureRecognizerFactoryWithHandlersOfTapGestureRecognizer()).new(dart.fn(() => new tap.TapGestureRecognizer.new({debugOwner: this}), T$.VoidToTapGestureRecognizer()), dart.fn(instance => {
        let t15;
        t15 = instance;
        (() => {
          t15.onTapDown = dart.bind(this[_positionedTapController], 'onTapDown');
          t15.onTapUp = dart.bind(this, 'handleOnTapUp');
          t15.onTap = dart.bind(this[_positionedTapController], 'onTap');
          return t15;
        })();
      }, T$.TapGestureRecognizerTovoid())));
      gestures[$_set](dart.wrapType(long_press.LongPressGestureRecognizer), new (T$.GestureRecognizerFactoryWithHandlersOfLongPressGestureRecognizer()).new(dart.fn(() => new long_press.LongPressGestureRecognizer.new({debugOwner: this}), T$.VoidToLongPressGestureRecognizer()), dart.fn(instance => {
        instance.onLongPress = dart.bind(this[_positionedTapController], 'onLongPress');
      }, T$.LongPressGestureRecognizerTovoid())));
      if (this.options.absorbPanEventsOnScrollables && interactive_flag.InteractiveFlag.hasFlag(this.options.interactiveFlags, 1)) {
        gestures[$_set](dart.wrapType(monodrag.VerticalDragGestureRecognizer), new (T$.GestureRecognizerFactoryWithHandlersOfVerticalDragGestureRecognizer()).new(dart.fn(() => new monodrag.VerticalDragGestureRecognizer.new({debugOwner: this}), T$.VoidToVerticalDragGestureRecognizer()), dart.fn(instance => {
          let t15;
          instance.onUpdate = dart.fn(details => {
          }, T$.DragUpdateDetailsTovoid());
          instance.gestureSettings = gestureSettings;
          t15 = instance;
          t15.team == null ? t15.team = this[_team] : null;
        }, T$.VerticalDragGestureRecognizerTovoid())));
        gestures[$_set](dart.wrapType(monodrag.HorizontalDragGestureRecognizer), new (T$.GestureRecognizerFactoryWithHandlersOfHorizontalDragGestureRecognizer()).new(dart.fn(() => new monodrag.HorizontalDragGestureRecognizer.new({debugOwner: this}), T$.VoidToHorizontalDragGestureRecognizer()), dart.fn(instance => {
          let t15;
          instance.onUpdate = dart.fn(details => {
          }, T$.DragUpdateDetailsTovoid());
          instance.gestureSettings = gestureSettings;
          t15 = instance;
          t15.team == null ? t15.team = this[_team] : null;
        }, T$.HorizontalDragGestureRecognizerTovoid())));
      }
      gestures[$_set](dart.wrapType(scale.ScaleGestureRecognizer), new (T$.GestureRecognizerFactoryWithHandlersOfScaleGestureRecognizer()).new(dart.fn(() => new scale.ScaleGestureRecognizer.new({debugOwner: this}), T$.VoidToScaleGestureRecognizer()), dart.fn(instance => {
        let t15, t15$;
        t15 = instance;
        (() => {
          t15.onStart = dart.bind(this, 'handleScaleStart');
          t15.onUpdate = dart.bind(this, 'handleScaleUpdate');
          t15.onEnd = dart.bind(this, 'handleScaleEnd');
          return t15;
        })();
        t15$ = instance;
        t15$.team == null ? t15$.team = this[_team] : null;
        this[_team].captain = instance;
      }, T$.ScaleGestureRecognizerTovoid())));
      this[_pixelBounds] = this.getPixelBounds(this.zoom);
      this[_bounds] = this[_calculateBounds]();
      this[_pixelOrigin] = this.getNewPixelOrigin(this[_center]);
      if (this.options.bounds != null) {
        this.fitBounds(dart.nullCheck(this.options.bounds), this.options.boundsOptions);
      }
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          this.setSize(constraints.maxWidth, constraints.maxHeight);
          this[_pixelBounds] = this.getPixelBounds(this.zoom);
          this[_bounds] = this[_calculateBounds]();
          return new map_state_widget.MapStateInheritedWidget.new({mapState: this, child: new basic.Listener.new({onPointerDown: dart.bind(this, 'onPointerDown'), onPointerUp: dart.bind(this, 'onPointerUp'), onPointerCancel: dart.bind(this, 'onPointerCancel'), onPointerHover: dart.bind(this, 'onPointerHover'), onPointerSignal: dart.bind(this, 'onPointerSignal'), child: new positioned_tap_detector_2.PositionedTapDetector2.new({controller: this[_positionedTapController], onTap: dart.bind(this, 'handleTap'), onLongPress: dart.bind(this, 'handleLongPress'), onDoubleTap: dart.bind(this, 'handleDoubleTap'), child: new gesture_detector.RawGestureDetector.new({gestures: gestures, child: this[_buildMap](this.size), $creationLocationd_0dea112b090073317d4: C[97] || CT.C97}), $creationLocationd_0dea112b090073317d4: C[98] || CT.C98}), $creationLocationd_0dea112b090073317d4: C[99] || CT.C99}), $creationLocationd_0dea112b090073317d4: C[100] || CT.C100});
        }, T$.BuildContextAndBoxConstraintsToMapStateInheritedWidget()), $creationLocationd_0dea112b090073317d4: C[101] || CT.C101});
    }
    [_buildMap](size) {
      return new basic.ClipRect.new({child: new basic.Stack.new({children: T$.JSArrayOfWidget().of([new basic.OverflowBox.new({minWidth: size.x, maxWidth: size.x, minHeight: size.y, maxHeight: size.y, child: new basic.Transform.rotate({angle: this.rotationRad, child: new basic.Stack.new({children: this.widget.children, $creationLocationd_0dea112b090073317d4: C[102] || CT.C102}), $creationLocationd_0dea112b090073317d4: C[103] || CT.C103}), $creationLocationd_0dea112b090073317d4: C[104] || CT.C104}), new basic.Stack.new({children: this.widget.nonRotatedChildren, $creationLocationd_0dea112b090073317d4: C[105] || CT.C105})]), $creationLocationd_0dea112b090073317d4: C[106] || CT.C106}), $creationLocationd_0dea112b090073317d4: C[107] || CT.C107});
    }
    get wantKeepAlive() {
      return this.options.keepAlive;
    }
    get [_zoom]() {
      let t15;
      t15 = this[__FlutterMapState__zoom];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_zoom")) : t15;
    }
    set [_zoom](library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_zoom$35param) {
      this[__FlutterMapState__zoom] = library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_zoom$35param;
    }
    get [_rotation]() {
      let t15;
      t15 = this[__FlutterMapState__rotation];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_rotation")) : t15;
    }
    set [_rotation](library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_rotation$35param) {
      this[__FlutterMapState__rotation] = library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_rotation$35param;
    }
    get zoom() {
      return this[_zoom];
    }
    get rotation() {
      return this[_rotation];
    }
    get rotationRad() {
      return latlong.degToRadian(this[_rotation]);
    }
    get [_pixelOrigin]() {
      let t15;
      t15 = this[__FlutterMapState__pixelOrigin];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_pixelOrigin")) : t15;
    }
    set [_pixelOrigin](library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_pixelOrigin$35param) {
      this[__FlutterMapState__pixelOrigin] = library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_pixelOrigin$35param;
    }
    get pixelOrigin() {
      return this[_pixelOrigin];
    }
    get [_center]() {
      let t15;
      t15 = this[__FlutterMapState__center];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_center")) : t15;
    }
    set [_center](library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_center$35param) {
      this[__FlutterMapState__center] = library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_center$35param;
    }
    get center() {
      return this[_center];
    }
    get [_bounds]() {
      let t15;
      t15 = this[__FlutterMapState__bounds];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_bounds")) : t15;
    }
    set [_bounds](library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_bounds$35param) {
      this[__FlutterMapState__bounds] = library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_bounds$35param;
    }
    get bounds() {
      return this[_bounds];
    }
    get [_pixelBounds]() {
      let t15;
      t15 = this[__FlutterMapState__pixelBounds];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_pixelBounds")) : t15;
    }
    set [_pixelBounds](library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_pixelBounds$35param) {
      this[__FlutterMapState__pixelBounds] = library$32package$58flutter_map$47src$47map$47flutter_map_state$46dart$58$58_pixelBounds$35param;
    }
    get pixelBounds() {
      return this[_pixelBounds];
    }
    get nonrotatedSize() {
      return this[_nonrotatedSize];
    }
    setSize(width, height) {
      let isCurrSizeNull = this[_nonrotatedSize] == null;
      if (isCurrSizeNull || dart.nullCheck(this[_nonrotatedSize]).x !== width || dart.nullCheck(this[_nonrotatedSize]).y !== height) {
        this[_nonrotatedSize] = new (T$.CustomPointOfdouble()).new(width, height);
        this[_updateSizeByOriginalSizeAndRotation]();
      }
    }
    get size() {
      let t15;
      t15 = this[_size];
      return t15 == null ? C[108] || CT.C108 : t15;
    }
    [_updateSizeByOriginalSizeAndRotation]() {
      let originalWidth = dart.nullCheck(this[_nonrotatedSize]).x;
      let originalHeight = dart.nullCheck(this[_nonrotatedSize]).y;
      if (this[_rotation] !== 0.0) {
        let cosAngle = math.cos(this.rotationRad)[$abs]();
        let sinAngle = math.sin(this.rotationRad)[$abs]();
        let width = originalWidth * cosAngle + originalHeight * sinAngle;
        let height = originalHeight * cosAngle + originalWidth * sinAngle;
        this[_size] = new (T$.CustomPointOfdouble()).new(width, height);
      } else {
        this[_size] = new (T$.CustomPointOfdouble()).new(originalWidth, originalHeight);
      }
      this[_pixelOrigin] = this.getNewPixelOrigin(this[_center]);
    }
    [_handleMoveEmit](targetCenter, targetZoom, oldCenter, oldZoom, hasGesture, source, id) {
      if (source === map_events.MapEventSource.flingAnimationController) {
        this.emitMapEvent(new map_events.MapEventFlingAnimation.new({center: oldCenter, zoom: oldZoom, targetCenter: targetCenter, targetZoom: targetZoom, source: source}));
      } else if (source === map_events.MapEventSource.doubleTapZoomAnimationController) {
        this.emitMapEvent(new map_events.MapEventDoubleTapZoom.new({center: oldCenter, zoom: oldZoom, targetCenter: targetCenter, targetZoom: targetZoom, source: source}));
      } else if (source === map_events.MapEventSource.scrollWheel) {
        this.emitMapEvent(new map_events.MapEventScrollWheelZoom.new({center: oldCenter, zoom: oldZoom, targetCenter: targetCenter, targetZoom: targetZoom, source: source}));
      } else if (source === map_events.MapEventSource.onDrag || source === map_events.MapEventSource.onMultiFinger) {
        this.emitMapEvent(new map_events.MapEventMove.new({center: oldCenter, zoom: oldZoom, targetCenter: targetCenter, targetZoom: targetZoom, source: source}));
      } else if (source === map_events.MapEventSource.mapController) {
        this.emitMapEvent(new map_events.MapEventMove.new({id: id, center: oldCenter, zoom: oldZoom, targetCenter: targetCenter, targetZoom: targetZoom, source: source}));
      } else if (source === map_events.MapEventSource.custom) {
        if (targetZoom !== oldZoom || targetCenter.latitude !== oldCenter.latitude || targetCenter.longitude !== oldCenter.longitude) {
          this.emitMapEvent(new map_events.MapEventMove.new({id: id, center: oldCenter, zoom: oldZoom, targetCenter: targetCenter, targetZoom: targetZoom, source: source}));
        }
      }
    }
    emitMapEvent(event) {
      if (event.source === map_events.MapEventSource.mapController && map_events.MapEventMove.is(event)) {
        this.handleAnimationInterruptions(event);
      }
      this.setState(dart.fn(() => {
        let t15;
        t15 = this.widget.options.onMapEvent;
        t15 == null ? null : t15(event);
      }, T$.VoidTovoid()));
      this.mapController.mapEventSink.add(event);
    }
    rotate(newRotation, opts) {
      let hasGesture = opts && 'hasGesture' in opts ? opts.hasGesture : false;
      let source = opts && 'source' in opts ? opts.source : null;
      let id = opts && 'id' in opts ? opts.id : null;
      if (newRotation !== this[_rotation]) {
        let oldRotation = this[_rotation];
        this.setState(dart.fn(() => {
          this[_rotation] = newRotation;
        }, T$.VoidTovoid()));
        this[_updateSizeByOriginalSizeAndRotation]();
        this.emitMapEvent(new map_events.MapEventRotate.new({id: id, currentRotation: oldRotation, targetRotation: this[_rotation], center: this[_center], zoom: this[_zoom], source: source}));
        return true;
      }
      return false;
    }
    moveAndRotate(newCenter, newZoom, newRotation, opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let id = opts && 'id' in opts ? opts.id : null;
      let moveSucc = this.move(newCenter, newZoom, {id: id, source: source});
      let rotateSucc = this.rotate(newRotation, {id: id, source: source});
      return new flutter_map.MoveAndRotateResult.new(moveSucc, rotateSucc);
    }
    move(newCenter, newZoom, opts) {
      let t15;
      let hasGesture = opts && 'hasGesture' in opts ? opts.hasGesture : false;
      let source = opts && 'source' in opts ? opts.source : null;
      let id = opts && 'id' in opts ? opts.id : null;
      newZoom = this.fitZoomToBounds(newZoom);
      let mapMoved = !dart.equals(newCenter, this[_center]) || newZoom !== this[_zoom];
      if (!mapMoved || !this[_bounds].isValid) {
        return false;
      }
      if (this.isOutOfBounds(newCenter)) {
        if (!this.options.slideOnBoundaries) {
          return false;
        }
        newCenter = this.containPoint(newCenter, this[_center]);
      }
      if (this.options.maxBounds != null) {
        let adjustedCenter = this.adjustCenterIfOutsideMaxBounds(newCenter, newZoom, dart.nullCheck(this.options.maxBounds));
        if (adjustedCenter == null) {
          return false;
        } else {
          newCenter = adjustedCenter;
        }
      }
      let oldCenter = this[_center];
      let oldZoom = this[_zoom];
      this.setState(dart.fn(() => {
        this[_zoom] = newZoom;
        this[_center] = newCenter;
      }, T$.VoidTovoid()));
      this[_pixelBounds] = this.getPixelBounds(this[_zoom]);
      this[_pixelOrigin] = this.getNewPixelOrigin(newCenter);
      this[_handleMoveEmit](newCenter, newZoom, oldCenter, oldZoom, hasGesture, source, id);
      t15 = this.options.onPositionChanged;
      t15 == null ? null : t15(new flutter_map.MapPosition.new({center: newCenter, bounds: this[_bounds], zoom: newZoom, hasGesture: hasGesture}), hasGesture);
      return true;
    }
    fitZoomToBounds(zoom) {
      if (this.options.maxZoom != null) {
        zoom = zoom > dart.nullCheck(this.options.maxZoom) ? dart.nullCheck(this.options.maxZoom) : zoom;
      }
      if (this.options.minZoom != null) {
        zoom = zoom < dart.nullCheck(this.options.minZoom) ? dart.nullCheck(this.options.minZoom) : zoom;
      }
      return zoom;
    }
    fitBounds(bounds, options) {
      if (!bounds.isValid) {
        dart.throw(core.Exception.new("Bounds are not valid."));
      }
      let target = this.getBoundsCenterZoom(bounds, options);
      this.move(target.center, target.zoom, {source: map_events.MapEventSource.fitBounds});
    }
    centerZoomFitBounds(bounds, options) {
      if (!bounds.isValid) {
        dart.throw(core.Exception.new("Bounds are not valid."));
      }
      return this.getBoundsCenterZoom(bounds, options);
    }
    [_calculateBounds]() {
      return new latlng_bounds.LatLngBounds.new(this.unproject(this[_pixelBounds].bottomLeft), this.unproject(this[_pixelBounds].topRight));
    }
    getBoundsCenterZoom(bounds, options) {
      let paddingTL = new (T$.CustomPointOfdouble()).new(options.padding.left, options.padding.top);
      let paddingBR = new (T$.CustomPointOfdouble()).new(options.padding.right, options.padding.bottom);
      let paddingTotalXY = paddingTL['+'](paddingBR);
      let zoom = this.getBoundsZoom(bounds, paddingTotalXY, {inside: options.inside});
      zoom = math.min(core.double, options.maxZoom, zoom);
      let paddingOffset = paddingBR['-'](paddingTL)['/'](2);
      let swPoint = this.project(dart.nullCheck(bounds.southWest), zoom);
      let nePoint = this.project(dart.nullCheck(bounds.northEast), zoom);
      let center = this.unproject(swPoint['+'](nePoint)['/'](2)['+'](paddingOffset), zoom);
      return new center_zoom.CenterZoom.new({center: center, zoom: zoom});
    }
    getBoundsZoom(bounds, padding, opts) {
      let t15, t15$;
      let inside = opts && 'inside' in opts ? opts.inside : false;
      let zoom = this.zoom;
      let min = (t15 = this.options.minZoom, t15 == null ? 0.0 : t15);
      let max = (t15$ = this.options.maxZoom, t15$ == null ? 1 / 0 : t15$);
      let nw = bounds.northWest;
      let se = bounds.southEast;
      let size = this.size['-'](padding);
      size = new (T$.CustomPointOfdouble()).new(math.max(core.num, 0.0, size.x), math.max(core.num, 0.0, size.y));
      let boundsSize = T$.BoundsOfnum().new(this.project(se, zoom), this.project(nw, zoom)).size;
      let scaleX = size.x / boundsSize.x;
      let scaleY = size.y / boundsSize.y;
      let scale = inside ? math.max(core.double, scaleX, scaleY) : math.min(core.double, scaleX, scaleY);
      zoom = this.getScaleZoom(scale, zoom);
      return math.max(core.double, min, math.min(core.double, max, zoom));
    }
    project(latlng, zoom = null) {
      zoom == null ? zoom = this[_zoom] : null;
      return this.options.crs.latLngToPoint(latlng, zoom);
    }
    unproject(point, zoom = null) {
      zoom == null ? zoom = this[_zoom] : null;
      return dart.nullCheck(this.options.crs.pointToLatLng(point, zoom));
    }
    layerPointToLatLng(point) {
      return this.unproject(point);
    }
    getZoomScale(toZoom, fromZoom) {
      let t15;
      let crs = this.options.crs;
      fromZoom = (t15 = fromZoom, t15 == null ? this[_zoom] : t15);
      return crs.scale(toZoom) / crs.scale(fromZoom);
    }
    getScaleZoom(scale, fromZoom) {
      let t15;
      let crs = this.options.crs;
      fromZoom = (t15 = fromZoom, t15 == null ? this[_zoom] : t15);
      return crs.zoom(scale * crs.scale(fromZoom));
    }
    getPixelWorldBounds(zoom) {
      let t15;
      return this.options.crs.getProjectedBounds((t15 = zoom, t15 == null ? this[_zoom] : t15));
    }
    getOffsetFromOrigin(pos) {
      let delta = this.project(pos)['-'](this[_pixelOrigin]);
      return new ui.Offset.new(delta.x[$toDouble](), delta.y[$toDouble]());
    }
    getNewPixelOrigin(center, zoom = null) {
      let viewHalf = this.size['/'](2.0);
      return this.project(center, zoom)['-'](viewHalf).round();
    }
    getPixelBounds(zoom) {
      let mapZoom = zoom;
      let scale = this.getZoomScale(mapZoom, zoom);
      let pixelCenter = this.project(this.center, zoom).floor();
      let halfSize = this.size['/'](scale * 2);
      return T$.BoundsOfnum().new(pixelCenter['-'](halfSize), pixelCenter['+'](halfSize));
    }
    adjustCenterIfOutsideMaxBounds(testCenter, testZoom, maxBounds) {
      let t15, t15$;
      let newCenter = null;
      let swPixel = this.project(dart.nullCheck(maxBounds.southWest), testZoom);
      let nePixel = this.project(dart.nullCheck(maxBounds.northEast), testZoom);
      let centerPix = this.project(testCenter, testZoom);
      let halfSizeX = this.size.x / 2;
      let halfSizeY = this.size.y / 2;
      let leftOkCenter = math.min(core.num, swPixel.x, nePixel.x) + halfSizeX;
      let rightOkCenter = math.max(core.num, swPixel.x, nePixel.x) - halfSizeX;
      let topOkCenter = math.min(core.num, swPixel.y, nePixel.y) + halfSizeY;
      let botOkCenter = math.max(core.num, swPixel.y, nePixel.y) - halfSizeY;
      let newCenterX = null;
      let newCenterY = null;
      let wasAdjusted = false;
      if (centerPix.x < leftOkCenter) {
        wasAdjusted = true;
        newCenterX = leftOkCenter;
      } else if (centerPix.x > rightOkCenter) {
        wasAdjusted = true;
        newCenterX = rightOkCenter;
      }
      if (centerPix.y < topOkCenter) {
        wasAdjusted = true;
        newCenterY = topOkCenter;
      } else if (centerPix.y > botOkCenter) {
        wasAdjusted = true;
        newCenterY = botOkCenter;
      }
      if (!wasAdjusted) {
        return testCenter;
      }
      let newCx = (t15 = newCenterX, t15 == null ? centerPix.x : t15);
      let newCy = (t15$ = newCenterY, t15$ == null ? centerPix.y : t15$);
      if (newCx < leftOkCenter || newCx > rightOkCenter || newCy < topOkCenter || newCy > botOkCenter) {
        return null;
      } else {
        newCenter = this.unproject(new (T$.CustomPointOfnum()).new(newCx, newCy), testZoom);
      }
      return newCenter;
    }
    latLngToScreenPoint(latLng) {
      let nonRotatedPixelOrigin = this.project(this[_center], this.zoom)['-'](dart.nullCheck(this.nonrotatedSize)['/'](2.0)).round();
      let point = this.options.crs.latLngToPoint(latLng, this.zoom);
      let mapCenter = this.options.crs.latLngToPoint(this.center, this.zoom);
      if (this.rotation !== 0.0) {
        point = this.rotatePoint(mapCenter, point, {counterRotation: false});
      }
      return point['-'](nonRotatedPixelOrigin);
    }
    pointToLatLng(localPoint) {
      if (this.nonrotatedSize == null) {
        return null;
      }
      let width = dart.nullCheck(this.nonrotatedSize).x;
      let height = dart.nullCheck(this.nonrotatedSize).y;
      let localPointCenterDistance = new (T$.CustomPointOfnum()).new(width / 2 - localPoint.x, height / 2 - localPoint.y);
      let mapCenter = this.options.crs.latLngToPoint(this.center, this.zoom);
      let point = mapCenter['-'](localPointCenterDistance);
      if (this.rotation !== 0.0) {
        point = this.rotatePoint(mapCenter, point);
      }
      return this.options.crs.pointToLatLng(point, this.zoom);
    }
    rotatePoint(mapCenter, point, opts) {
      let t15;
      let counterRotation = opts && 'counterRotation' in opts ? opts.counterRotation : true;
      let counterRotationFactor = counterRotation ? -1 : 1;
      let m = (t15 = vector_math_64.Matrix4.identity(), (() => {
        t15.translate(mapCenter.x[$toDouble](), mapCenter.y[$toDouble]());
        t15.rotateZ(this.rotationRad * counterRotationFactor);
        t15.translate(-mapCenter.x[$toDouble](), -mapCenter.y[$toDouble]());
        return t15;
      })());
      let tp = matrix_utils.MatrixUtils.transformPoint(m, new ui.Offset.new(point.x[$toDouble](), point.y[$toDouble]()));
      return new (T$.CustomPointOfnum()).new(tp.dx, tp.dy);
    }
    isOutOfBounds(center) {
      if (this.options.adaptiveBoundaries) {
        return !dart.nullCheck(this[_safeArea]).contains(center);
      }
      if (this.options.swPanBoundary != null && this.options.nePanBoundary != null) {
        if (center == null) {
          return true;
        } else if (center.latitude < dart.nullCheck(this.options.swPanBoundary).latitude || center.latitude > dart.nullCheck(this.options.nePanBoundary).latitude) {
          return true;
        } else if (center.longitude < dart.nullCheck(this.options.swPanBoundary).longitude || center.longitude > dart.nullCheck(this.options.nePanBoundary).longitude) {
          return true;
        }
      }
      return false;
    }
    containPoint(point, fallback) {
      if (this.options.adaptiveBoundaries) {
        return dart.nullCheck(this[_safeArea]).containPoint(point, fallback);
      } else {
        return new latlong.LatLng.new(point.latitude[$clamp](dart.nullCheck(this.options.swPanBoundary).latitude, dart.nullCheck(this.options.nePanBoundary).latitude), point.longitude[$clamp](dart.nullCheck(this.options.swPanBoundary).longitude, dart.nullCheck(this.options.nePanBoundary).longitude));
      }
    }
    get [_safeArea]() {
      let controllerZoom = this[_zoom];
      if (controllerZoom !== this[_safeAreaZoom] || this[_safeAreaCache] == null) {
        this[_safeAreaZoom] = controllerZoom;
        let halfScreenHeight = this[_calculateScreenHeightInDegrees]() / 2;
        let halfScreenWidth = this[_calculateScreenWidthInDegrees]() / 2;
        let southWestLatitude = dart.nullCheck(this.options.swPanBoundary).latitude + halfScreenHeight;
        let southWestLongitude = dart.nullCheck(this.options.swPanBoundary).longitude + halfScreenWidth;
        let northEastLatitude = dart.nullCheck(this.options.nePanBoundary).latitude - halfScreenHeight;
        let northEastLongitude = dart.nullCheck(this.options.nePanBoundary).longitude - halfScreenWidth;
        this[_safeAreaCache] = new flutter_map_state._SafeArea.new(new latlong.LatLng.new(southWestLatitude, southWestLongitude), new latlong.LatLng.new(northEastLatitude, northEastLongitude));
      }
      return this[_safeAreaCache];
    }
    [_calculateScreenWidthInDegrees]() {
      let degreesPerPixel = 360 / math.pow(2, this.zoom + 8);
      return dart.nullCheck(this.options.screenSize).width * degreesPerPixel;
    }
    [_calculateScreenHeightInDegrees]() {
      return dart.nullCheck(this.options.screenSize).height * 170.102258 / math.pow(2, this.zoom + 8);
    }
    static maybeOf(context, opts) {
      let t15;
      let nullOk = opts && 'nullOk' in opts ? opts.nullOk : false;
      let widget = context.dependOnInheritedWidgetOfExactType(map_state_widget.MapStateInheritedWidget);
      if (nullOk || widget != null) {
        t15 = widget;
        return t15 == null ? null : t15.mapState;
      }
      dart.throw(assertions.FlutterError.new("MapState.of() called with a context that does not contain a FlutterMap."));
    }
    static ['_#new#tearOff']() {
      return new flutter_map_state.FlutterMapState.new();
    }
  };
  (flutter_map_state.FlutterMapState.new = function() {
    this[_positionedTapController] = new positioned_tap_detector_2.PositionedTapController.new();
    this[_team] = new team.GestureArenaTeam.new();
    this[_localController] = new map.MapControllerImpl.new();
    this[__FlutterMapState__zoom] = null;
    this[__FlutterMapState__rotation] = null;
    this[__FlutterMapState__pixelOrigin] = null;
    this[__FlutterMapState__center] = null;
    this[__FlutterMapState__bounds] = null;
    this[__FlutterMapState__pixelBounds] = null;
    this[_nonrotatedSize] = null;
    this[_size] = null;
    this[_safeAreaCache] = null;
    this[_safeAreaZoom] = null;
    flutter_map_state.FlutterMapState.__proto__.new.call(this);
    ;
  }).prototype = flutter_map_state.FlutterMapState.prototype;
  dart.addTypeTests(flutter_map_state.FlutterMapState);
  dart.addTypeCaches(flutter_map_state.FlutterMapState);
  dart.setMethodSignature(flutter_map_state.FlutterMapState, () => ({
    __proto__: dart.getMethods(flutter_map_state.FlutterMapState.__proto__),
    [_buildMap]: dart.fnType(framework.Widget, [point.CustomPoint$(core.double)]),
    setSize: dart.fnType(dart.void, [core.double, core.double]),
    [_updateSizeByOriginalSizeAndRotation]: dart.fnType(dart.void, []),
    [_handleMoveEmit]: dart.fnType(dart.void, [latlong.LatLng, core.double, latlong.LatLng, core.double, core.bool, map_events.MapEventSource, dart.nullable(core.String)]),
    emitMapEvent: dart.fnType(dart.void, [map_events.MapEvent]),
    rotate: dart.fnType(core.bool, [core.double], {hasGesture: core.bool, id: dart.nullable(core.String)}, {source: map_events.MapEventSource}),
    moveAndRotate: dart.fnType(flutter_map.MoveAndRotateResult, [latlong.LatLng, core.double, core.double], {id: dart.nullable(core.String)}, {source: map_events.MapEventSource}),
    move: dart.fnType(core.bool, [latlong.LatLng, core.double], {hasGesture: core.bool, id: dart.nullable(core.String)}, {source: map_events.MapEventSource}),
    fitZoomToBounds: dart.fnType(core.double, [core.double]),
    fitBounds: dart.fnType(dart.void, [latlng_bounds.LatLngBounds, flutter_map.FitBoundsOptions]),
    centerZoomFitBounds: dart.fnType(center_zoom.CenterZoom, [latlng_bounds.LatLngBounds, flutter_map.FitBoundsOptions]),
    [_calculateBounds]: dart.fnType(latlng_bounds.LatLngBounds, []),
    getBoundsCenterZoom: dart.fnType(center_zoom.CenterZoom, [latlng_bounds.LatLngBounds, flutter_map.FitBoundsOptions]),
    getBoundsZoom: dart.fnType(core.double, [latlng_bounds.LatLngBounds, point.CustomPoint$(core.double)], {inside: core.bool}, {}),
    project: dart.fnType(point.CustomPoint$(core.num), [latlong.LatLng], [dart.nullable(core.double)]),
    unproject: dart.fnType(latlong.LatLng, [point.CustomPoint$(core.num)], [dart.nullable(core.double)]),
    layerPointToLatLng: dart.fnType(latlong.LatLng, [point.CustomPoint$(core.num)]),
    getZoomScale: dart.fnType(core.double, [core.double, dart.nullable(core.double)]),
    getScaleZoom: dart.fnType(core.double, [core.double, dart.nullable(core.double)]),
    getPixelWorldBounds: dart.fnType(dart.nullable(bounds.Bounds$(core.num)), [dart.nullable(core.double)]),
    getOffsetFromOrigin: dart.fnType(ui.Offset, [latlong.LatLng]),
    getNewPixelOrigin: dart.fnType(point.CustomPoint$(core.num), [latlong.LatLng], [dart.nullable(core.double)]),
    getPixelBounds: dart.fnType(bounds.Bounds$(core.num), [core.double]),
    adjustCenterIfOutsideMaxBounds: dart.fnType(dart.nullable(latlong.LatLng), [latlong.LatLng, core.double, latlng_bounds.LatLngBounds]),
    latLngToScreenPoint: dart.fnType(point.CustomPoint$(core.num), [latlong.LatLng]),
    pointToLatLng: dart.fnType(dart.nullable(latlong.LatLng), [point.CustomPoint$(core.num)]),
    rotatePoint: dart.fnType(point.CustomPoint$(core.num), [point.CustomPoint$(core.num), point.CustomPoint$(core.num)], {counterRotation: core.bool}, {}),
    isOutOfBounds: dart.fnType(core.bool, [dart.nullable(latlong.LatLng)]),
    containPoint: dart.fnType(latlong.LatLng, [latlong.LatLng, latlong.LatLng]),
    [_calculateScreenWidthInDegrees]: dart.fnType(core.double, []),
    [_calculateScreenHeightInDegrees]: dart.fnType(core.double, [])
  }));
  dart.setStaticMethodSignature(flutter_map_state.FlutterMapState, () => ['maybeOf']);
  dart.setGetterSignature(flutter_map_state.FlutterMapState, () => ({
    __proto__: dart.getGetters(flutter_map_state.FlutterMapState.__proto__),
    options: flutter_map.MapOptions,
    mapState: flutter_map_state.FlutterMapState,
    mapController: flutter_map.MapController,
    wantKeepAlive: core.bool,
    [_zoom]: core.double,
    [_rotation]: core.double,
    zoom: core.double,
    rotation: core.double,
    rotationRad: core.double,
    [_pixelOrigin]: point.CustomPoint$(core.num),
    pixelOrigin: point.CustomPoint$(core.num),
    [_center]: latlong.LatLng,
    center: latlong.LatLng,
    [_bounds]: latlng_bounds.LatLngBounds,
    bounds: latlng_bounds.LatLngBounds,
    [_pixelBounds]: bounds.Bounds$(core.num),
    pixelBounds: bounds.Bounds$(core.num),
    nonrotatedSize: dart.nullable(point.CustomPoint$(core.num)),
    size: point.CustomPoint$(core.double),
    [_safeArea]: dart.nullable(flutter_map_state._SafeArea)
  }));
  dart.setSetterSignature(flutter_map_state.FlutterMapState, () => ({
    __proto__: dart.getSetters(flutter_map_state.FlutterMapState.__proto__),
    [_zoom]: core.double,
    [_rotation]: core.double,
    [_pixelOrigin]: point.CustomPoint$(core.num),
    [_center]: latlong.LatLng,
    [_bounds]: latlng_bounds.LatLngBounds,
    [_pixelBounds]: bounds.Bounds$(core.num)
  }));
  dart.setLibraryUri(flutter_map_state.FlutterMapState, I[23]);
  dart.setFieldSignature(flutter_map_state.FlutterMapState, () => ({
    __proto__: dart.getFields(flutter_map_state.FlutterMapState.__proto__),
    [_positionedTapController]: dart.finalFieldType(positioned_tap_detector_2.PositionedTapController),
    [_team]: dart.finalFieldType(team.GestureArenaTeam),
    [_localController]: dart.finalFieldType(flutter_map.MapController),
    [__FlutterMapState__zoom]: dart.fieldType(dart.nullable(core.double)),
    [__FlutterMapState__rotation]: dart.fieldType(dart.nullable(core.double)),
    [__FlutterMapState__pixelOrigin]: dart.fieldType(dart.nullable(point.CustomPoint$(core.num))),
    [__FlutterMapState__center]: dart.fieldType(dart.nullable(latlong.LatLng)),
    [__FlutterMapState__bounds]: dart.fieldType(dart.nullable(latlng_bounds.LatLngBounds)),
    [__FlutterMapState__pixelBounds]: dart.fieldType(dart.nullable(bounds.Bounds$(core.num))),
    [_nonrotatedSize]: dart.fieldType(dart.nullable(point.CustomPoint$(core.num))),
    [_size]: dart.fieldType(dart.nullable(point.CustomPoint$(core.double))),
    [_safeAreaCache]: dart.fieldType(dart.nullable(flutter_map_state._SafeArea)),
    [_safeAreaZoom]: dart.fieldType(dart.nullable(core.double))
  }));
  flutter_map_state._SafeArea = class _SafeArea extends core.Object {
    static ['_#new#tearOff'](southWest, northEast) {
      return new flutter_map_state._SafeArea.new(southWest, northEast);
    }
    contains(point) {
      return this.isLatitudeBlocked || this.isLongitudeBlocked ? false : this.bounds.contains(point);
    }
    containPoint(point, fallback) {
      return new latlong.LatLng.new(this.isLatitudeBlocked ? fallback.latitude : point.latitude[$clamp](this.bounds.south, this.bounds.north), this.isLongitudeBlocked ? fallback.longitude : point.longitude[$clamp](this.bounds.west, this.bounds.east));
    }
  };
  (flutter_map_state._SafeArea.new = function(southWest, northEast) {
    this.bounds = new latlng_bounds.LatLngBounds.new(southWest, northEast);
    this.isLatitudeBlocked = southWest.latitude > northEast.latitude;
    this.isLongitudeBlocked = southWest.longitude > northEast.longitude;
    ;
  }).prototype = flutter_map_state._SafeArea.prototype;
  dart.addTypeTests(flutter_map_state._SafeArea);
  dart.addTypeCaches(flutter_map_state._SafeArea);
  dart.setMethodSignature(flutter_map_state._SafeArea, () => ({
    __proto__: dart.getMethods(flutter_map_state._SafeArea.__proto__),
    contains: dart.fnType(core.bool, [dart.nullable(latlong.LatLng)]),
    containPoint: dart.fnType(latlong.LatLng, [latlong.LatLng, latlong.LatLng])
  }));
  dart.setLibraryUri(flutter_map_state._SafeArea, I[23]);
  dart.setFieldSignature(flutter_map_state._SafeArea, () => ({
    __proto__: dart.getFields(flutter_map_state._SafeArea.__proto__),
    bounds: dart.finalFieldType(latlng_bounds.LatLngBounds),
    isLatitudeBlocked: dart.finalFieldType(core.bool),
    isLongitudeBlocked: dart.finalFieldType(core.bool)
  }));
  flutter_map.MapController = class MapController extends core.Object {
    static new() {
      return new map.MapControllerImpl.new();
    }
    static ['_#new#tearOff']() {
      return flutter_map.MapController.new();
    }
  };
  (flutter_map.MapController[dart.mixinNew] = function() {
  }).prototype = flutter_map.MapController.prototype;
  dart.addTypeTests(flutter_map.MapController);
  dart.addTypeCaches(flutter_map.MapController);
  dart.setStaticMethodSignature(flutter_map.MapController, () => ['new']);
  dart.setLibraryUri(flutter_map.MapController, I[21]);
  var crs$0 = dart.privateName(flutter_map, "MapOptions.crs");
  var zoom$0 = dart.privateName(flutter_map, "MapOptions.zoom");
  var rotation$ = dart.privateName(flutter_map, "MapOptions.rotation");
  var debugMultiFingerGestureWinner$ = dart.privateName(flutter_map, "MapOptions.debugMultiFingerGestureWinner");
  var enableMultiFingerGestureRace$ = dart.privateName(flutter_map, "MapOptions.enableMultiFingerGestureRace");
  var rotationThreshold$ = dart.privateName(flutter_map, "MapOptions.rotationThreshold");
  var rotationWinGestures$ = dart.privateName(flutter_map, "MapOptions.rotationWinGestures");
  var pinchZoomThreshold$ = dart.privateName(flutter_map, "MapOptions.pinchZoomThreshold");
  var pinchZoomWinGestures$ = dart.privateName(flutter_map, "MapOptions.pinchZoomWinGestures");
  var pinchMoveThreshold$ = dart.privateName(flutter_map, "MapOptions.pinchMoveThreshold");
  var pinchMoveWinGestures$ = dart.privateName(flutter_map, "MapOptions.pinchMoveWinGestures");
  var enableScrollWheel$ = dart.privateName(flutter_map, "MapOptions.enableScrollWheel");
  var scrollWheelVelocity$ = dart.privateName(flutter_map, "MapOptions.scrollWheelVelocity");
  var minZoom$0 = dart.privateName(flutter_map, "MapOptions.minZoom");
  var maxZoom$0 = dart.privateName(flutter_map, "MapOptions.maxZoom");
  var interactiveFlags$ = dart.privateName(flutter_map, "MapOptions.interactiveFlags");
  var absorbPanEventsOnScrollables$ = dart.privateName(flutter_map, "MapOptions.absorbPanEventsOnScrollables");
  var onTap$ = dart.privateName(flutter_map, "MapOptions.onTap");
  var onLongPress$ = dart.privateName(flutter_map, "MapOptions.onLongPress");
  var onPointerDown$ = dart.privateName(flutter_map, "MapOptions.onPointerDown");
  var onPointerUp$ = dart.privateName(flutter_map, "MapOptions.onPointerUp");
  var onPointerCancel$ = dart.privateName(flutter_map, "MapOptions.onPointerCancel");
  var onPointerHover$ = dart.privateName(flutter_map, "MapOptions.onPointerHover");
  var onPositionChanged$ = dart.privateName(flutter_map, "MapOptions.onPositionChanged");
  var onMapEvent$ = dart.privateName(flutter_map, "MapOptions.onMapEvent");
  var slideOnBoundaries$ = dart.privateName(flutter_map, "MapOptions.slideOnBoundaries");
  var screenSize$ = dart.privateName(flutter_map, "MapOptions.screenSize");
  var adaptiveBoundaries$ = dart.privateName(flutter_map, "MapOptions.adaptiveBoundaries");
  var center$ = dart.privateName(flutter_map, "MapOptions.center");
  var bounds$0 = dart.privateName(flutter_map, "MapOptions.bounds");
  var boundsOptions$ = dart.privateName(flutter_map, "MapOptions.boundsOptions");
  var swPanBoundary$ = dart.privateName(flutter_map, "MapOptions.swPanBoundary");
  var nePanBoundary$ = dart.privateName(flutter_map, "MapOptions.nePanBoundary");
  var onMapReady$ = dart.privateName(flutter_map, "MapOptions.onMapReady");
  var maxBounds$ = dart.privateName(flutter_map, "MapOptions.maxBounds");
  var keepAlive$ = dart.privateName(flutter_map, "MapOptions.keepAlive");
  flutter_map.MapOptions = class MapOptions extends core.Object {
    get crs() {
      return this[crs$0];
    }
    set crs(value) {
      super.crs = value;
    }
    get zoom() {
      return this[zoom$0];
    }
    set zoom(value) {
      super.zoom = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    get debugMultiFingerGestureWinner() {
      return this[debugMultiFingerGestureWinner$];
    }
    set debugMultiFingerGestureWinner(value) {
      super.debugMultiFingerGestureWinner = value;
    }
    get enableMultiFingerGestureRace() {
      return this[enableMultiFingerGestureRace$];
    }
    set enableMultiFingerGestureRace(value) {
      super.enableMultiFingerGestureRace = value;
    }
    get rotationThreshold() {
      return this[rotationThreshold$];
    }
    set rotationThreshold(value) {
      super.rotationThreshold = value;
    }
    get rotationWinGestures() {
      return this[rotationWinGestures$];
    }
    set rotationWinGestures(value) {
      super.rotationWinGestures = value;
    }
    get pinchZoomThreshold() {
      return this[pinchZoomThreshold$];
    }
    set pinchZoomThreshold(value) {
      super.pinchZoomThreshold = value;
    }
    get pinchZoomWinGestures() {
      return this[pinchZoomWinGestures$];
    }
    set pinchZoomWinGestures(value) {
      super.pinchZoomWinGestures = value;
    }
    get pinchMoveThreshold() {
      return this[pinchMoveThreshold$];
    }
    set pinchMoveThreshold(value) {
      super.pinchMoveThreshold = value;
    }
    get pinchMoveWinGestures() {
      return this[pinchMoveWinGestures$];
    }
    set pinchMoveWinGestures(value) {
      super.pinchMoveWinGestures = value;
    }
    get enableScrollWheel() {
      return this[enableScrollWheel$];
    }
    set enableScrollWheel(value) {
      super.enableScrollWheel = value;
    }
    get scrollWheelVelocity() {
      return this[scrollWheelVelocity$];
    }
    set scrollWheelVelocity(value) {
      super.scrollWheelVelocity = value;
    }
    get minZoom() {
      return this[minZoom$0];
    }
    set minZoom(value) {
      super.minZoom = value;
    }
    get maxZoom() {
      return this[maxZoom$0];
    }
    set maxZoom(value) {
      super.maxZoom = value;
    }
    get interactiveFlags() {
      return this[interactiveFlags$];
    }
    set interactiveFlags(value) {
      super.interactiveFlags = value;
    }
    get absorbPanEventsOnScrollables() {
      return this[absorbPanEventsOnScrollables$];
    }
    set absorbPanEventsOnScrollables(value) {
      super.absorbPanEventsOnScrollables = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onLongPress() {
      return this[onLongPress$];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get onPointerDown() {
      return this[onPointerDown$];
    }
    set onPointerDown(value) {
      super.onPointerDown = value;
    }
    get onPointerUp() {
      return this[onPointerUp$];
    }
    set onPointerUp(value) {
      super.onPointerUp = value;
    }
    get onPointerCancel() {
      return this[onPointerCancel$];
    }
    set onPointerCancel(value) {
      super.onPointerCancel = value;
    }
    get onPointerHover() {
      return this[onPointerHover$];
    }
    set onPointerHover(value) {
      super.onPointerHover = value;
    }
    get onPositionChanged() {
      return this[onPositionChanged$];
    }
    set onPositionChanged(value) {
      super.onPositionChanged = value;
    }
    get onMapEvent() {
      return this[onMapEvent$];
    }
    set onMapEvent(value) {
      super.onMapEvent = value;
    }
    get slideOnBoundaries() {
      return this[slideOnBoundaries$];
    }
    set slideOnBoundaries(value) {
      super.slideOnBoundaries = value;
    }
    get screenSize() {
      return this[screenSize$];
    }
    set screenSize(value) {
      super.screenSize = value;
    }
    get adaptiveBoundaries() {
      return this[adaptiveBoundaries$];
    }
    set adaptiveBoundaries(value) {
      super.adaptiveBoundaries = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get bounds() {
      return this[bounds$0];
    }
    set bounds(value) {
      super.bounds = value;
    }
    get boundsOptions() {
      return this[boundsOptions$];
    }
    set boundsOptions(value) {
      super.boundsOptions = value;
    }
    get swPanBoundary() {
      return this[swPanBoundary$];
    }
    set swPanBoundary(value) {
      super.swPanBoundary = value;
    }
    get nePanBoundary() {
      return this[nePanBoundary$];
    }
    set nePanBoundary(value) {
      super.nePanBoundary = value;
    }
    get onMapReady() {
      return this[onMapReady$];
    }
    set onMapReady(value) {
      super.onMapReady = value;
    }
    get maxBounds() {
      return this[maxBounds$];
    }
    set maxBounds(value) {
      super.maxBounds = value;
    }
    get keepAlive() {
      return this[keepAlive$];
    }
    set keepAlive(value) {
      super.keepAlive = value;
    }
    static ['_#new#tearOff'](opts) {
      let absorbPanEventsOnScrollables = opts && 'absorbPanEventsOnScrollables' in opts ? opts.absorbPanEventsOnScrollables : true;
      let crs = opts && 'crs' in opts ? opts.crs : C[26] || CT.C26;
      let center = opts && 'center' in opts ? opts.center : null;
      let bounds = opts && 'bounds' in opts ? opts.bounds : null;
      let boundsOptions = opts && 'boundsOptions' in opts ? opts.boundsOptions : C[109] || CT.C109;
      let zoom = opts && 'zoom' in opts ? opts.zoom : 13;
      let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
      let debugMultiFingerGestureWinner = opts && 'debugMultiFingerGestureWinner' in opts ? opts.debugMultiFingerGestureWinner : false;
      let enableMultiFingerGestureRace = opts && 'enableMultiFingerGestureRace' in opts ? opts.enableMultiFingerGestureRace : false;
      let rotationThreshold = opts && 'rotationThreshold' in opts ? opts.rotationThreshold : 20;
      let rotationWinGestures = opts && 'rotationWinGestures' in opts ? opts.rotationWinGestures : 4;
      let pinchZoomThreshold = opts && 'pinchZoomThreshold' in opts ? opts.pinchZoomThreshold : 0.5;
      let pinchZoomWinGestures = opts && 'pinchZoomWinGestures' in opts ? opts.pinchZoomWinGestures : 3;
      let pinchMoveThreshold = opts && 'pinchMoveThreshold' in opts ? opts.pinchMoveThreshold : 40;
      let pinchMoveWinGestures = opts && 'pinchMoveWinGestures' in opts ? opts.pinchMoveWinGestures : 3;
      let enableScrollWheel = opts && 'enableScrollWheel' in opts ? opts.enableScrollWheel : true;
      let scrollWheelVelocity = opts && 'scrollWheelVelocity' in opts ? opts.scrollWheelVelocity : 0.005;
      let minZoom = opts && 'minZoom' in opts ? opts.minZoom : null;
      let maxZoom = opts && 'maxZoom' in opts ? opts.maxZoom : null;
      let interactiveFlags = opts && 'interactiveFlags' in opts ? opts.interactiveFlags : 63;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let onPointerDown = opts && 'onPointerDown' in opts ? opts.onPointerDown : null;
      let onPointerUp = opts && 'onPointerUp' in opts ? opts.onPointerUp : null;
      let onPointerCancel = opts && 'onPointerCancel' in opts ? opts.onPointerCancel : null;
      let onPointerHover = opts && 'onPointerHover' in opts ? opts.onPointerHover : null;
      let onPositionChanged = opts && 'onPositionChanged' in opts ? opts.onPositionChanged : null;
      let onMapEvent = opts && 'onMapEvent' in opts ? opts.onMapEvent : null;
      let onMapReady = opts && 'onMapReady' in opts ? opts.onMapReady : null;
      let slideOnBoundaries = opts && 'slideOnBoundaries' in opts ? opts.slideOnBoundaries : false;
      let adaptiveBoundaries = opts && 'adaptiveBoundaries' in opts ? opts.adaptiveBoundaries : false;
      let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
      let swPanBoundary = opts && 'swPanBoundary' in opts ? opts.swPanBoundary : null;
      let nePanBoundary = opts && 'nePanBoundary' in opts ? opts.nePanBoundary : null;
      let maxBounds = opts && 'maxBounds' in opts ? opts.maxBounds : null;
      let keepAlive = opts && 'keepAlive' in opts ? opts.keepAlive : false;
      return new flutter_map.MapOptions.new({absorbPanEventsOnScrollables: absorbPanEventsOnScrollables, crs: crs, center: center, bounds: bounds, boundsOptions: boundsOptions, zoom: zoom, rotation: rotation, debugMultiFingerGestureWinner: debugMultiFingerGestureWinner, enableMultiFingerGestureRace: enableMultiFingerGestureRace, rotationThreshold: rotationThreshold, rotationWinGestures: rotationWinGestures, pinchZoomThreshold: pinchZoomThreshold, pinchZoomWinGestures: pinchZoomWinGestures, pinchMoveThreshold: pinchMoveThreshold, pinchMoveWinGestures: pinchMoveWinGestures, enableScrollWheel: enableScrollWheel, scrollWheelVelocity: scrollWheelVelocity, minZoom: minZoom, maxZoom: maxZoom, interactiveFlags: interactiveFlags, onTap: onTap, onLongPress: onLongPress, onPointerDown: onPointerDown, onPointerUp: onPointerUp, onPointerCancel: onPointerCancel, onPointerHover: onPointerHover, onPositionChanged: onPositionChanged, onMapEvent: onMapEvent, onMapReady: onMapReady, slideOnBoundaries: slideOnBoundaries, adaptiveBoundaries: adaptiveBoundaries, screenSize: screenSize, swPanBoundary: swPanBoundary, nePanBoundary: nePanBoundary, maxBounds: maxBounds, keepAlive: keepAlive});
    }
  };
  (flutter_map.MapOptions.new = function(opts) {
    let t15;
    let absorbPanEventsOnScrollables = opts && 'absorbPanEventsOnScrollables' in opts ? opts.absorbPanEventsOnScrollables : true;
    let crs = opts && 'crs' in opts ? opts.crs : C[26] || CT.C26;
    let center = opts && 'center' in opts ? opts.center : null;
    let bounds = opts && 'bounds' in opts ? opts.bounds : null;
    let boundsOptions = opts && 'boundsOptions' in opts ? opts.boundsOptions : C[109] || CT.C109;
    let zoom = opts && 'zoom' in opts ? opts.zoom : 13;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    let debugMultiFingerGestureWinner = opts && 'debugMultiFingerGestureWinner' in opts ? opts.debugMultiFingerGestureWinner : false;
    let enableMultiFingerGestureRace = opts && 'enableMultiFingerGestureRace' in opts ? opts.enableMultiFingerGestureRace : false;
    let rotationThreshold = opts && 'rotationThreshold' in opts ? opts.rotationThreshold : 20;
    let rotationWinGestures = opts && 'rotationWinGestures' in opts ? opts.rotationWinGestures : 4;
    let pinchZoomThreshold = opts && 'pinchZoomThreshold' in opts ? opts.pinchZoomThreshold : 0.5;
    let pinchZoomWinGestures = opts && 'pinchZoomWinGestures' in opts ? opts.pinchZoomWinGestures : 3;
    let pinchMoveThreshold = opts && 'pinchMoveThreshold' in opts ? opts.pinchMoveThreshold : 40;
    let pinchMoveWinGestures = opts && 'pinchMoveWinGestures' in opts ? opts.pinchMoveWinGestures : 3;
    let enableScrollWheel = opts && 'enableScrollWheel' in opts ? opts.enableScrollWheel : true;
    let scrollWheelVelocity = opts && 'scrollWheelVelocity' in opts ? opts.scrollWheelVelocity : 0.005;
    let minZoom = opts && 'minZoom' in opts ? opts.minZoom : null;
    let maxZoom = opts && 'maxZoom' in opts ? opts.maxZoom : null;
    let interactiveFlags = opts && 'interactiveFlags' in opts ? opts.interactiveFlags : 63;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onPointerDown = opts && 'onPointerDown' in opts ? opts.onPointerDown : null;
    let onPointerUp = opts && 'onPointerUp' in opts ? opts.onPointerUp : null;
    let onPointerCancel = opts && 'onPointerCancel' in opts ? opts.onPointerCancel : null;
    let onPointerHover = opts && 'onPointerHover' in opts ? opts.onPointerHover : null;
    let onPositionChanged = opts && 'onPositionChanged' in opts ? opts.onPositionChanged : null;
    let onMapEvent = opts && 'onMapEvent' in opts ? opts.onMapEvent : null;
    let onMapReady = opts && 'onMapReady' in opts ? opts.onMapReady : null;
    let slideOnBoundaries = opts && 'slideOnBoundaries' in opts ? opts.slideOnBoundaries : false;
    let adaptiveBoundaries = opts && 'adaptiveBoundaries' in opts ? opts.adaptiveBoundaries : false;
    let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
    let swPanBoundary = opts && 'swPanBoundary' in opts ? opts.swPanBoundary : null;
    let nePanBoundary = opts && 'nePanBoundary' in opts ? opts.nePanBoundary : null;
    let maxBounds = opts && 'maxBounds' in opts ? opts.maxBounds : null;
    let keepAlive = opts && 'keepAlive' in opts ? opts.keepAlive : false;
    this[absorbPanEventsOnScrollables$] = absorbPanEventsOnScrollables;
    this[crs$0] = crs;
    this[bounds$0] = bounds;
    this[boundsOptions$] = boundsOptions;
    this[zoom$0] = zoom;
    this[rotation$] = rotation;
    this[debugMultiFingerGestureWinner$] = debugMultiFingerGestureWinner;
    this[enableMultiFingerGestureRace$] = enableMultiFingerGestureRace;
    this[rotationThreshold$] = rotationThreshold;
    this[rotationWinGestures$] = rotationWinGestures;
    this[pinchZoomThreshold$] = pinchZoomThreshold;
    this[pinchZoomWinGestures$] = pinchZoomWinGestures;
    this[pinchMoveThreshold$] = pinchMoveThreshold;
    this[pinchMoveWinGestures$] = pinchMoveWinGestures;
    this[enableScrollWheel$] = enableScrollWheel;
    this[scrollWheelVelocity$] = scrollWheelVelocity;
    this[minZoom$0] = minZoom;
    this[maxZoom$0] = maxZoom;
    this[interactiveFlags$] = interactiveFlags;
    this[onTap$] = onTap;
    this[onLongPress$] = onLongPress;
    this[onPointerDown$] = onPointerDown;
    this[onPointerUp$] = onPointerUp;
    this[onPointerCancel$] = onPointerCancel;
    this[onPointerHover$] = onPointerHover;
    this[onPositionChanged$] = onPositionChanged;
    this[onMapEvent$] = onMapEvent;
    this[onMapReady$] = onMapReady;
    this[slideOnBoundaries$] = slideOnBoundaries;
    this[adaptiveBoundaries$] = adaptiveBoundaries;
    this[screenSize$] = screenSize;
    this[swPanBoundary$] = swPanBoundary;
    this[nePanBoundary$] = nePanBoundary;
    this[maxBounds$] = maxBounds;
    this[keepAlive$] = keepAlive;
    this[center$] = (t15 = center, t15 == null ? new latlong.LatLng.new(50.5, 30.51) : t15);
    if (!(rotationThreshold >= 0.0)) dart.assertFailed(null, I[24], 324, 16, "rotationThreshold >= 0.0");
    if (!(pinchZoomThreshold >= 0.0)) dart.assertFailed(null, I[24], 325, 16, "pinchZoomThreshold >= 0.0");
    if (!(pinchMoveThreshold >= 0.0)) dart.assertFailed(null, I[24], 326, 16, "pinchMoveThreshold >= 0.0");
    if (!(!this.adaptiveBoundaries || this.screenSize != null)) dart.assertFailed("screenSize must be set in order to enable adaptive boundaries.", I[24], 327, 12, "!adaptiveBoundaries || screenSize != null");
  }).prototype = flutter_map.MapOptions.prototype;
  dart.addTypeTests(flutter_map.MapOptions);
  dart.addTypeCaches(flutter_map.MapOptions);
  dart.setLibraryUri(flutter_map.MapOptions, I[21]);
  dart.setFieldSignature(flutter_map.MapOptions, () => ({
    __proto__: dart.getFields(flutter_map.MapOptions.__proto__),
    crs: dart.finalFieldType(crs.Crs),
    zoom: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double),
    debugMultiFingerGestureWinner: dart.finalFieldType(core.bool),
    enableMultiFingerGestureRace: dart.finalFieldType(core.bool),
    rotationThreshold: dart.finalFieldType(core.double),
    rotationWinGestures: dart.finalFieldType(core.int),
    pinchZoomThreshold: dart.finalFieldType(core.double),
    pinchZoomWinGestures: dart.finalFieldType(core.int),
    pinchMoveThreshold: dart.finalFieldType(core.double),
    pinchMoveWinGestures: dart.finalFieldType(core.int),
    enableScrollWheel: dart.finalFieldType(core.bool),
    scrollWheelVelocity: dart.finalFieldType(core.double),
    minZoom: dart.finalFieldType(dart.nullable(core.double)),
    maxZoom: dart.finalFieldType(dart.nullable(core.double)),
    interactiveFlags: dart.finalFieldType(core.int),
    absorbPanEventsOnScrollables: dart.finalFieldType(core.bool),
    onTap: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [positioned_tap_detector_2.TapPosition, latlong.LatLng]))),
    onLongPress: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [positioned_tap_detector_2.TapPosition, latlong.LatLng]))),
    onPointerDown: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerDownEvent, latlong.LatLng]))),
    onPointerUp: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerUpEvent, latlong.LatLng]))),
    onPointerCancel: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerCancelEvent, latlong.LatLng]))),
    onPointerHover: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerHoverEvent, latlong.LatLng]))),
    onPositionChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [flutter_map.MapPosition, core.bool]))),
    onMapEvent: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [map_events.MapEvent]))),
    slideOnBoundaries: dart.finalFieldType(core.bool),
    screenSize: dart.finalFieldType(dart.nullable(ui.Size)),
    adaptiveBoundaries: dart.finalFieldType(core.bool),
    center: dart.finalFieldType(latlong.LatLng),
    bounds: dart.finalFieldType(dart.nullable(latlng_bounds.LatLngBounds)),
    boundsOptions: dart.finalFieldType(flutter_map.FitBoundsOptions),
    swPanBoundary: dart.finalFieldType(dart.nullable(latlong.LatLng)),
    nePanBoundary: dart.finalFieldType(dart.nullable(latlong.LatLng)),
    onMapReady: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    maxBounds: dart.finalFieldType(dart.nullable(latlng_bounds.LatLngBounds)),
    keepAlive: dart.finalFieldType(core.bool)
  }));
  const padding$ = FitBoundsOptions_padding;
  const maxZoom$1 = FitBoundsOptions_maxZoom;
  const zoom$1 = FitBoundsOptions_zoom;
  const inside$ = FitBoundsOptions_inside;
  flutter_map.FitBoundsOptions = class FitBoundsOptions extends core.Object {
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get maxZoom() {
      return this[maxZoom$1];
    }
    set maxZoom(value) {
      super.maxZoom = value;
    }
    get zoom() {
      return this[zoom$1];
    }
    set zoom(value) {
      super.zoom = value;
    }
    get inside() {
      return this[inside$];
    }
    set inside(value) {
      super.inside = value;
    }
    static ['_#new#tearOff'](opts) {
      let padding = opts && 'padding' in opts ? opts.padding : C[110] || CT.C110;
      let maxZoom = opts && 'maxZoom' in opts ? opts.maxZoom : 17;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      let inside = opts && 'inside' in opts ? opts.inside : false;
      return new flutter_map.FitBoundsOptions.new({padding: padding, maxZoom: maxZoom, zoom: zoom, inside: inside});
    }
  };
  (flutter_map.FitBoundsOptions.new = function(opts) {
    let padding = opts && 'padding' in opts ? opts.padding : C[110] || CT.C110;
    let maxZoom = opts && 'maxZoom' in opts ? opts.maxZoom : 17;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    let inside = opts && 'inside' in opts ? opts.inside : false;
    this[padding$] = padding;
    this[maxZoom$1] = maxZoom;
    this[zoom$1] = zoom;
    this[inside$] = inside;
    ;
  }).prototype = flutter_map.FitBoundsOptions.prototype;
  dart.addTypeTests(flutter_map.FitBoundsOptions);
  dart.addTypeCaches(flutter_map.FitBoundsOptions);
  dart.setLibraryUri(flutter_map.FitBoundsOptions, I[21]);
  dart.setFieldSignature(flutter_map.FitBoundsOptions, () => ({
    __proto__: dart.getFields(flutter_map.FitBoundsOptions.__proto__),
    padding: dart.finalFieldType(edge_insets.EdgeInsets),
    maxZoom: dart.finalFieldType(core.double),
    zoom: dart.finalFieldType(dart.nullable(core.double)),
    inside: dart.finalFieldType(core.bool)
  }));
  var center$0 = dart.privateName(flutter_map, "MapPosition.center");
  var bounds$1 = dart.privateName(flutter_map, "MapPosition.bounds");
  var zoom$2 = dart.privateName(flutter_map, "MapPosition.zoom");
  var hasGesture$ = dart.privateName(flutter_map, "MapPosition.hasGesture");
  flutter_map.MapPosition = class MapPosition extends core.Object {
    get center() {
      return this[center$0];
    }
    set center(value) {
      super.center = value;
    }
    get bounds() {
      return this[bounds$1];
    }
    set bounds(value) {
      super.bounds = value;
    }
    get zoom() {
      return this[zoom$2];
    }
    set zoom(value) {
      super.zoom = value;
    }
    get hasGesture() {
      return this[hasGesture$];
    }
    set hasGesture(value) {
      super.hasGesture = value;
    }
    static ['_#new#tearOff'](opts) {
      let center = opts && 'center' in opts ? opts.center : null;
      let bounds = opts && 'bounds' in opts ? opts.bounds : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      let hasGesture = opts && 'hasGesture' in opts ? opts.hasGesture : false;
      return new flutter_map.MapPosition.new({center: center, bounds: bounds, zoom: zoom, hasGesture: hasGesture});
    }
    get hashCode() {
      return dart.hashCode(this.center) + dart.hashCode(this.bounds) + dart.hashCode(this.zoom);
    }
    _equals(other) {
      if (other == null) return false;
      return flutter_map.MapPosition.is(other) && dart.equals(other.center, this.center) && dart.equals(other.bounds, this.bounds) && other.zoom == this.zoom;
    }
  };
  (flutter_map.MapPosition.new = function(opts) {
    let center = opts && 'center' in opts ? opts.center : null;
    let bounds = opts && 'bounds' in opts ? opts.bounds : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    let hasGesture = opts && 'hasGesture' in opts ? opts.hasGesture : false;
    this[center$0] = center;
    this[bounds$1] = bounds;
    this[zoom$2] = zoom;
    this[hasGesture$] = hasGesture;
    ;
  }).prototype = flutter_map.MapPosition.prototype;
  dart.addTypeTests(flutter_map.MapPosition);
  dart.addTypeCaches(flutter_map.MapPosition);
  dart.setLibraryUri(flutter_map.MapPosition, I[21]);
  dart.setFieldSignature(flutter_map.MapPosition, () => ({
    __proto__: dart.getFields(flutter_map.MapPosition.__proto__),
    center: dart.finalFieldType(dart.nullable(latlong.LatLng)),
    bounds: dart.finalFieldType(dart.nullable(latlng_bounds.LatLngBounds)),
    zoom: dart.finalFieldType(dart.nullable(core.double)),
    hasGesture: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(flutter_map.MapPosition, ['_equals']);
  dart.defineExtensionAccessors(flutter_map.MapPosition, ['hashCode']);
  var moveSuccess$ = dart.privateName(flutter_map, "MoveAndRotateResult.moveSuccess");
  var rotateSuccess$ = dart.privateName(flutter_map, "MoveAndRotateResult.rotateSuccess");
  flutter_map.MoveAndRotateResult = class MoveAndRotateResult extends core.Object {
    get moveSuccess() {
      return this[moveSuccess$];
    }
    set moveSuccess(value) {
      super.moveSuccess = value;
    }
    get rotateSuccess() {
      return this[rotateSuccess$];
    }
    set rotateSuccess(value) {
      super.rotateSuccess = value;
    }
    static ['_#new#tearOff'](moveSuccess, rotateSuccess) {
      return new flutter_map.MoveAndRotateResult.new(moveSuccess, rotateSuccess);
    }
  };
  (flutter_map.MoveAndRotateResult.new = function(moveSuccess, rotateSuccess) {
    this[moveSuccess$] = moveSuccess;
    this[rotateSuccess$] = rotateSuccess;
    ;
  }).prototype = flutter_map.MoveAndRotateResult.prototype;
  dart.addTypeTests(flutter_map.MoveAndRotateResult);
  dart.addTypeCaches(flutter_map.MoveAndRotateResult);
  dart.setLibraryUri(flutter_map.MoveAndRotateResult, I[21]);
  dart.setFieldSignature(flutter_map.MoveAndRotateResult, () => ({
    __proto__: dart.getFields(flutter_map.MoveAndRotateResult.__proto__),
    moveSuccess: dart.finalFieldType(core.bool),
    rotateSuccess: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter_map/src/layer/tile_layer/tile_provider/tile_provider_web.dart", {
    "package:flutter_map/src/layer/tile_layer/tile_provider/tile_provider_web.dart": tile_provider_web,
    "package:flutter_map/src/layer/tile_layer/tile_provider/file_tile_provider_web.dart": file_tile_provider_web,
    "package:flutter_map/src/layer/tile_layer/tile_provider/base_tile_provider.dart": base_tile_provider,
    "package:flutter_map/src/layer/tile_layer/transformation_calculator.dart": transformation_calculator,
    "package:flutter_map/src/layer/tile_layer/animated_tile.dart": animated_tile,
    "package:flutter_map/src/layer/tile_layer/tile_widget.dart": tile_widget,
    "package:flutter_map/src/layer/tile_layer/tile_transformation.dart": tile_transformation,
    "package:flutter_map/src/layer/tile_layer/tile_manager.dart": tile_manager,
    "package:flutter_map/src/layer/tile_layer/level.dart": level$,
    "package:flutter_map/src/layer/tile_layer/tile_layer.dart": tile_layer,
    "package:flutter_map/src/layer/tile_layer/tile_builder.dart": tile_builder,
    "package:flutter_map/src/layer/tile_layer/tile.dart": tile,
    "package:flutter_map/src/layer/tile_layer/coords.dart": coords,
    "package:flutter_map/src/layer/polyline_layer.dart": polyline_layer,
    "package:flutter_map/plugin_api.dart": plugin_api,
    "package:flutter_map/src/layer/label.dart": label,
    "package:flutter_map/src/layer/polygon_layer.dart": polygon_layer,
    "package:flutter_map/src/layer/overlay_image_layer.dart": overlay_image_layer,
    "package:flutter_map/src/layer/marker_layer.dart": marker_layer,
    "package:flutter_map/src/layer/circle_layer.dart": circle_layer,
    "package:flutter_map/src/map/map_state_widget.dart": map_state_widget,
    "package:flutter_map/src/map/map.dart": map,
    "package:flutter_map/src/gestures/gestures.dart": gestures,
    "package:flutter_map/src/map/flutter_map_state.dart": flutter_map_state,
    "package:flutter_map/flutter_map.dart": flutter_map
  }, {
    "package:flutter_map/src/layer/tile_layer/tile_layer.dart": ["tile_layer_options.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["base_tile_provider.dart","tile_provider_web.dart","file_tile_provider_web.dart","../transformation_calculator.dart","../animated_tile.dart","../tile_widget.dart","../tile_transformation.dart","../tile_manager.dart","../level.dart","../tile_layer.dart","../tile_layer_options.dart","../tile_builder.dart","../tile.dart","../coords.dart","../../polyline_layer.dart","../../label.dart","../../polygon_layer.dart","../../overlay_image_layer.dart","../../marker_layer.dart","../../circle_layer.dart","../../../map/map_state_widget.dart","../../../map/map.dart","../../../../flutter_map.dart","../../../gestures/gestures.dart","../../../map/flutter_map_state.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../../../packages/flutter_map/src/layer/tile_layer/tile_provider/tile_provider_web.dart.lib.js"}');
  // Exports:
  return {
    src__layer__tile_layer__tile_provider__tile_provider_web: tile_provider_web,
    src__layer__tile_layer__tile_provider__file_tile_provider_web: file_tile_provider_web,
    src__layer__tile_layer__tile_provider__base_tile_provider: base_tile_provider,
    src__layer__tile_layer__transformation_calculator: transformation_calculator,
    src__layer__tile_layer__animated_tile: animated_tile,
    src__layer__tile_layer__tile_widget: tile_widget,
    src__layer__tile_layer__tile_transformation: tile_transformation,
    src__layer__tile_layer__tile_manager: tile_manager,
    src__layer__tile_layer__level: level$,
    src__layer__tile_layer__tile_layer: tile_layer,
    src__layer__tile_layer__tile_builder: tile_builder,
    src__layer__tile_layer__tile: tile,
    src__layer__tile_layer__coords: coords,
    src__layer__polyline_layer: polyline_layer,
    plugin_api: plugin_api,
    src__layer__label: label,
    src__layer__polygon_layer: polygon_layer,
    src__layer__overlay_image_layer: overlay_image_layer,
    src__layer__marker_layer: marker_layer,
    src__layer__circle_layer: circle_layer,
    src__map__map_state_widget: map_state_widget,
    src__map__map: map,
    src__gestures__gestures: gestures,
    src__map__flutter_map_state: flutter_map_state,
    flutter_map: flutter_map
  };
}));

//# sourceMappingURL=tile_provider_web.dart.lib.js.map
