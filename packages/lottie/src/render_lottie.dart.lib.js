define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/lottie/src/frame_rate.dart', 'packages/flutter/src/widgets/title.dart', 'packages/lottie/src/options.dart', 'packages/lottie/src/providers/provider_web.dart', 'packages/path/src/path_set.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/lottie/src/lottie_image_asset.dart', 'packages/flutter/src/painting/image_resolution.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/widgets/async.dart', 'packages/lottie/src/l.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/painting/image_stream.dart', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart', 'packages/lottie/src/parser/font_parser.dart', 'packages/lottie/src/model/font.dart', 'packages/lottie/src/utils/path_factory.dart', 'packages/lottie/src/animation/content/shape_modifier_content.dart', 'packages/lottie/src/utils.dart', 'packages/lottie/src/animation/content/path_content.dart', 'packages/lottie/src/animation/content/content.dart', 'packages/lottie/src/lottie_property.dart', 'packages/lottie/src/value/drop_shadow.dart', 'packages/lottie/src/animation/content/drawing_content.dart', 'packages/vector_math/vector_math_64.dart', 'packages/lottie/src/animation/content/greedy_content.dart', 'packages/lottie/src/model/cubic_curve_data.dart', 'packages/lottie/src/model/content/shape_data.dart', 'packages/lottie/src/utils/dash_path.dart', 'packages/lottie/src/model/content/gradient_type.dart', 'packages/lottie/src/model/content/gradient_color.dart', 'packages/lottie/src/value/lottie_frame_info.dart', 'packages/lottie/src/parser/path_parser.dart', 'packages/lottie/src/parser/json_utils.dart', 'packages/lottie/src/utils/path_interpolator.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/animation/curves.dart', 'packages/lottie/src/parser/float_parser.dart', 'packages/lottie/src/parser/integer_parser.dart', 'packages/lottie/src/parser/offset_parser.dart', 'packages/lottie/src/parser/scale_xy_parser.dart', 'packages/lottie/src/parser/shape_data_parser.dart', 'packages/lottie/src/model/document_data.dart', 'packages/lottie/src/parser/document_data_parser.dart', 'packages/lottie/src/parser/color_parser.dart', 'packages/lottie/src/parser/gradient_color_parser.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/characters/src/extensions.dart', 'packages/lottie/src/utils/gamma_evaluator.dart', 'packages/lottie/src/animation/content/modifier_content.dart', 'packages/lottie/src/value/lottie_relative_point_value_callback.dart', 'packages/lottie/src/value/lottie_relative_double_value_callback.dart', 'packages/lottie/src/value/lottie_relative_integer_value_callback.dart', 'packages/lottie/src/performance_tracker.dart', 'packages/archive/src/zip_decoder.dart', 'packages/archive/src/archive_file.dart'], (function load__packages__lottie__src__render_lottie_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__box_fit$46dart, packages__lottie__src__frame_rate$46dart, packages__flutter__src__widgets__title$46dart, packages__lottie__src__options$46dart, packages__lottie__src__providers__provider_web$46dart, packages__path__src__path_set$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__lottie__src__lottie_image_asset$46dart, packages__flutter__src__painting__image_resolution$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__widgets__async$46dart, packages__lottie__src__l$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__painting__image_stream$46dart, packages__lottie__src__parser__moshi__json_utf8_reader$46dart, packages__lottie__src__parser__font_parser$46dart, packages__lottie__src__model__font$46dart, packages__lottie__src__utils__path_factory$46dart, packages__lottie__src__animation__content__shape_modifier_content$46dart, packages__lottie__src__utils$46dart, packages__lottie__src__animation__content__path_content$46dart, packages__lottie__src__animation__content__content$46dart, packages__lottie__src__lottie_property$46dart, packages__lottie__src__value__drop_shadow$46dart, packages__lottie__src__animation__content__drawing_content$46dart, packages__vector_math__vector_math_64$46dart, packages__lottie__src__animation__content__greedy_content$46dart, packages__lottie__src__model__cubic_curve_data$46dart, packages__lottie__src__model__content__shape_data$46dart, packages__lottie__src__utils__dash_path$46dart, packages__lottie__src__model__content__gradient_type$46dart, packages__lottie__src__model__content__gradient_color$46dart, packages__lottie__src__value__lottie_frame_info$46dart, packages__lottie__src__parser__path_parser$46dart, packages__lottie__src__parser__json_utils$46dart, packages__lottie__src__utils__path_interpolator$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__animation__curves$46dart, packages__lottie__src__parser__float_parser$46dart, packages__lottie__src__parser__integer_parser$46dart, packages__lottie__src__parser__offset_parser$46dart, packages__lottie__src__parser__scale_xy_parser$46dart, packages__lottie__src__parser__shape_data_parser$46dart, packages__lottie__src__model__document_data$46dart, packages__lottie__src__parser__document_data_parser$46dart, packages__lottie__src__parser__color_parser$46dart, packages__lottie__src__parser__gradient_color_parser$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__characters__src__extensions$46dart, packages__lottie__src__utils__gamma_evaluator$46dart, packages__lottie__src__animation__content__modifier_content$46dart, packages__lottie__src__value__lottie_relative_point_value_callback$46dart, packages__lottie__src__value__lottie_relative_double_value_callback$46dart, packages__lottie__src__value__lottie_relative_integer_value_callback$46dart, packages__lottie__src__performance_tracker$46dart, packages__archive__src__zip_decoder$46dart, packages__archive__src__archive_file$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment$ = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const frame_rate = packages__lottie__src__frame_rate$46dart.src__frame_rate;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const options = packages__lottie__src__options$46dart.src__options;
  const provider_web = packages__lottie__src__providers__provider_web$46dart.src__providers__provider_web;
  const path = packages__path__src__path_set$46dart.path;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const lottie_image_asset = packages__lottie__src__lottie_image_asset$46dart.src__lottie_image_asset;
  const image_resolution = packages__flutter__src__painting__image_resolution$46dart.src__painting__image_resolution;
  const asset_bundle = packages__flutter__src__services__text_editing_delta$46dart.src__services__asset_bundle;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const async$ = packages__flutter__src__widgets__async$46dart.src__widgets__async;
  const l = packages__lottie__src__l$46dart.src__l;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  const font_parser = packages__lottie__src__parser__font_parser$46dart.src__parser__font_parser;
  const font = packages__lottie__src__model__font$46dart.src__model__font;
  const path_factory = packages__lottie__src__utils__path_factory$46dart.src__utils__path_factory;
  const shape_modifier_content = packages__lottie__src__animation__content__shape_modifier_content$46dart.src__animation__content__shape_modifier_content;
  const utils = packages__lottie__src__utils$46dart.src__utils;
  const path_content = packages__lottie__src__animation__content__path_content$46dart.src__animation__content__path_content;
  const content = packages__lottie__src__animation__content__content$46dart.src__animation__content__content;
  const lottie_property = packages__lottie__src__lottie_property$46dart.src__lottie_property;
  const drop_shadow = packages__lottie__src__value__drop_shadow$46dart.src__value__drop_shadow;
  const drawing_content = packages__lottie__src__animation__content__drawing_content$46dart.src__animation__content__drawing_content;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const greedy_content = packages__lottie__src__animation__content__greedy_content$46dart.src__animation__content__greedy_content;
  const cubic_curve_data = packages__lottie__src__model__cubic_curve_data$46dart.src__model__cubic_curve_data;
  const shape_data = packages__lottie__src__model__content__shape_data$46dart.src__model__content__shape_data;
  const dash_path = packages__lottie__src__utils__dash_path$46dart.src__utils__dash_path;
  const gradient_type = packages__lottie__src__model__content__gradient_type$46dart.src__model__content__gradient_type;
  const gradient_color = packages__lottie__src__model__content__gradient_color$46dart.src__model__content__gradient_color;
  const lottie_frame_info = packages__lottie__src__value__lottie_frame_info$46dart.src__value__lottie_frame_info;
  const path_parser = packages__lottie__src__parser__path_parser$46dart.src__parser__path_parser;
  const json_utils = packages__lottie__src__parser__json_utils$46dart.src__parser__json_utils;
  const path_interpolator = packages__lottie__src__utils__path_interpolator$46dart.src__utils__path_interpolator;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const float_parser = packages__lottie__src__parser__float_parser$46dart.src__parser__float_parser;
  const integer_parser = packages__lottie__src__parser__integer_parser$46dart.src__parser__integer_parser;
  const offset_parser = packages__lottie__src__parser__offset_parser$46dart.src__parser__offset_parser;
  const scale_xy_parser = packages__lottie__src__parser__scale_xy_parser$46dart.src__parser__scale_xy_parser;
  const shape_data_parser = packages__lottie__src__parser__shape_data_parser$46dart.src__parser__shape_data_parser;
  const document_data = packages__lottie__src__model__document_data$46dart.src__model__document_data;
  const document_data_parser = packages__lottie__src__parser__document_data_parser$46dart.src__parser__document_data_parser;
  const color_parser = packages__lottie__src__parser__color_parser$46dart.src__parser__color_parser;
  const gradient_color_parser = packages__lottie__src__parser__gradient_color_parser$46dart.src__parser__gradient_color_parser;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const extensions = packages__characters__src__extensions$46dart.src__extensions;
  const gamma_evaluator = packages__lottie__src__utils__gamma_evaluator$46dart.src__utils__gamma_evaluator;
  const modifier_content = packages__lottie__src__animation__content__modifier_content$46dart.src__animation__content__modifier_content;
  const lottie_relative_point_value_callback = packages__lottie__src__value__lottie_relative_point_value_callback$46dart.src__value__lottie_relative_point_value_callback;
  const lottie_relative_double_value_callback = packages__lottie__src__value__lottie_relative_double_value_callback$46dart.src__value__lottie_relative_double_value_callback;
  const lottie_relative_integer_value_callback = packages__lottie__src__value__lottie_relative_integer_value_callback$46dart.src__value__lottie_relative_integer_value_callback;
  const performance_tracker = packages__lottie__src__performance_tracker$46dart.src__performance_tracker;
  const zip_decoder = packages__archive__src__zip_decoder$46dart.src__zip_decoder;
  const archive_file = packages__archive__src__archive_file$46dart.src__archive_file;
  var render_lottie = Object.create(dart.library);
  var raw_lottie = Object.create(dart.library);
  var network_provider = Object.create(dart.library);
  var memory_provider = Object.create(dart.library);
  var file_provider = Object.create(dart.library);
  var lottie_provider = Object.create(dart.library);
  var asset_provider = Object.create(dart.library);
  var lottie_builder = Object.create(dart.library);
  var lottie = Object.create(dart.library);
  var load_image = Object.create(dart.library);
  var font_character_parser = Object.create(dart.library);
  var lottie_composition_parser = Object.create(dart.library);
  var marker = Object.create(dart.library);
  var mask_parser = Object.create(dart.library);
  var drop_shadow_effect_parser = Object.create(dart.library);
  var shape_trim_path_parser = Object.create(dart.library);
  var shape_stroke_parser = Object.create(dart.library);
  var shape_content = Object.create(dart.library);
  var shape_path = Object.create(dart.library);
  var shape_path_parser = Object.create(dart.library);
  var shape_group_parser = Object.create(dart.library);
  var fill_content = Object.create(dart.library);
  var shape_fill = Object.create(dart.library);
  var shape_fill_parser = Object.create(dart.library);
  var rounded_corners_parser = Object.create(dart.library);
  var repeater_content = Object.create(dart.library);
  var repeater = Object.create(dart.library);
  var repeat_parser = Object.create(dart.library);
  var rounded_corners = Object.create(dart.library);
  var rounded_corners_content = Object.create(dart.library);
  var rectangle_content = Object.create(dart.library);
  var rectangle_shape = Object.create(dart.library);
  var rectangle_shape_parser = Object.create(dart.library);
  var polystar_content = Object.create(dart.library);
  var polystar_shape = Object.create(dart.library);
  var polysar_shape_parser = Object.create(dart.library);
  var merge_paths_content = Object.create(dart.library);
  var merge_paths = Object.create(dart.library);
  var merge_paths_parser = Object.create(dart.library);
  var base_stroke_content = Object.create(dart.library);
  var stroke_content = Object.create(dart.library);
  var shape_stroke = Object.create(dart.library);
  var gradient_stroke_content = Object.create(dart.library);
  var gradient_stroke = Object.create(dart.library);
  var gradient_stroke_parser = Object.create(dart.library);
  var drop_shadow_keyframe_animation = Object.create(dart.library);
  var gradient_fill_content = Object.create(dart.library);
  var gradient_fill = Object.create(dart.library);
  var gradient_fill_parser = Object.create(dart.library);
  var compound_trim_path_content = Object.create(dart.library);
  var ellipse_content = Object.create(dart.library);
  var circle_shape = Object.create(dart.library);
  var circle_shape_parser = Object.create(dart.library);
  var content_model_parser = Object.create(dart.library);
  var blur_effect_parser = Object.create(dart.library);
  var path_keyframe_parser = Object.create(dart.library);
  var animatable_path_value_parser = Object.create(dart.library);
  var split_dimension_path_keyframe_animation = Object.create(dart.library);
  var animatable_split_dimension_path_value = Object.create(dart.library);
  var animatable_transform_parser = Object.create(dart.library);
  var keyframe_parser = Object.create(dart.library);
  var keyframes_parser = Object.create(dart.library);
  var animatable_point_value = Object.create(dart.library);
  var gradient_color_keyframe_animation = Object.create(dart.library);
  var animatable_gradient_color_value = Object.create(dart.library);
  var animatable_value_parser = Object.create(dart.library);
  var animatable_text_properties_parser = Object.create(dart.library);
  var layer_parser = Object.create(dart.library);
  var text_layer = Object.create(dart.library);
  var solid_layer = Object.create(dart.library);
  var shape_layer = Object.create(dart.library);
  var null_layer = Object.create(dart.library);
  var animatable_text_properties = Object.create(dart.library);
  var text_keyframe_animation = Object.create(dart.library);
  var animatable_text_frame = Object.create(dart.library);
  var layer$ = Object.create(dart.library);
  var image_layer = Object.create(dart.library);
  var color_keyframe_animation = Object.create(dart.library);
  var animatable_color_value = Object.create(dart.library);
  var drop_shadow_effect = Object.create(dart.library);
  var blur_effect = Object.create(dart.library);
  var animatable_scale_value = Object.create(dart.library);
  var point_keyframe_animation = Object.create(dart.library);
  var shape_trim_path = Object.create(dart.library);
  var trim_path_content = Object.create(dart.library);
  var utils$ = Object.create(dart.library);
  var path_keyframe = Object.create(dart.library);
  var path_keyframe_animation = Object.create(dart.library);
  var animatable_path_value = Object.create(dart.library);
  var animatable_double_value = Object.create(dart.library);
  var content_model = Object.create(dart.library);
  var animatable_transform = Object.create(dart.library);
  var transform_keyframe_animation = Object.create(dart.library);
  var key_path_element_content = Object.create(dart.library);
  var misc = Object.create(dart.library);
  var shape_keyframe_animation = Object.create(dart.library);
  var animatable_shape_value = Object.create(dart.library);
  var animatable_value = Object.create(dart.library);
  var base_animatable_value = Object.create(dart.library);
  var integer_keyframe_animation = Object.create(dart.library);
  var animatable_integer_value = Object.create(dart.library);
  var mask = Object.create(dart.library);
  var mask_keyframe_animation = Object.create(dart.library);
  var keyframe_animation = Object.create(dart.library);
  var double_keyframe_animation = Object.create(dart.library);
  var base_layer = Object.create(dart.library);
  var value_callback_keyframe_animation = Object.create(dart.library);
  var composition_layer = Object.create(dart.library);
  var keyframe$ = Object.create(dart.library);
  var base_keyframe_animation = Object.create(dart.library);
  var lottie_value_callback = Object.create(dart.library);
  var key_path_element = Object.create(dart.library);
  var key_path = Object.create(dart.library);
  var value_delegate = Object.create(dart.library);
  var lottie_delegates = Object.create(dart.library);
  var lottie_drawable = Object.create(dart.library);
  var content_group = Object.create(dart.library);
  var shape_group = Object.create(dart.library);
  var font_character = Object.create(dart.library);
  var composition$ = Object.create(dart.library);
  var lottie$ = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $values = dartx.values;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  var $lengthInBytes = dartx.lengthInBytes;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  var $first = dartx.first;
  var $keys = dartx.keys;
  var $clear = dartx.clear;
  var $startsWith = dartx.startsWith;
  var $add = dartx.add;
  var $round = dartx.round;
  var $split = dartx.split;
  var $trim = dartx.trim;
  var $toLowerCase = dartx.toLowerCase;
  var $clamp = dartx.clamp;
  var $toInt = dartx.toInt;
  var $lastIndexOf = dartx.lastIndexOf;
  var $removeAt = dartx.removeAt;
  var $reversed = dartx.reversed;
  var $toList = dartx.toList;
  var $truncate = dartx.truncate;
  var $ceil = dartx.ceil;
  var $toDouble = dartx.toDouble;
  var $floor = dartx.floor;
  var $map = dartx.map;
  var $fold = dartx.fold;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $modulo = dartx['%'];
  var $contains = dartx.contains;
  var $putIfAbsent = dartx.putIfAbsent;
  var $width = dartx.width;
  var $height = dartx.height;
  var $endsWith = dartx.endsWith;
  var $replaceAll = dartx.replaceAll;
  var $containsKey = dartx.containsKey;
  var $abs = dartx.abs;
  var $substring = dartx.substring;
  var $insert = dartx.insert;
  var $last = dartx.last;
  var $toString = dartx.toString;
  var $every = dartx.every;
  var $addAll = dartx.addAll;
  var $sublist = dartx.sublist;
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $firstWhere = dartx.firstWhere;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    DiagnosticsPropertyOfLottieComposition: () => (T$.DiagnosticsPropertyOfLottieComposition = dart.constFn(diagnostics.DiagnosticsProperty$(composition$.LottieComposition)))(),
    EnumPropertyOfBoxFit: () => (T$.EnumPropertyOfBoxFit = dart.constFn(diagnostics.EnumProperty$(box_fit.BoxFit)))(),
    DiagnosticsPropertyOfAlignmentGeometry: () => (T$.DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment$.AlignmentGeometry)))(),
    FutureOfLottieComposition: () => (T$.FutureOfLottieComposition = dart.constFn(async.Future$(composition$.LottieComposition)))(),
    VoidToFutureOfLottieComposition: () => (T$.VoidToFutureOfLottieComposition = dart.constFn(dart.fnType(T$.FutureOfLottieComposition(), [])))(),
    IdentityMapOfString$FutureOfLottieComposition: () => (T$.IdentityMapOfString$FutureOfLottieComposition = dart.constFn(_js_helper.IdentityMap$(core.String, T$.FutureOfLottieComposition())))(),
    DiagnosticsPropertyOfLottieProvider: () => (T$.DiagnosticsPropertyOfLottieProvider = dart.constFn(diagnostics.DiagnosticsProperty$(lottie_provider.LottieProvider)))(),
    DiagnosticsPropertyOfFunction: () => (T$.DiagnosticsPropertyOfFunction = dart.constFn(diagnostics.DiagnosticsProperty$(core.Function)))(),
    LottieCompositionToLottieComposition: () => (T$.LottieCompositionToLottieComposition = dart.constFn(dart.fnType(composition$.LottieComposition, [composition$.LottieComposition])))(),
    FutureBuilderOfLottieComposition: () => (T$.FutureBuilderOfLottieComposition = dart.constFn(async$.FutureBuilder$(composition$.LottieComposition)))(),
    AsyncSnapshotOfLottieComposition: () => (T$.AsyncSnapshotOfLottieComposition = dart.constFn(async$.AsyncSnapshot$(composition$.LottieComposition)))(),
    BuildContextAndAsyncSnapshotOfLottieCompositionToWidget: () => (T$.BuildContextAndAsyncSnapshotOfLottieCompositionToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T$.AsyncSnapshotOfLottieComposition()])))(),
    DiagnosticsPropertyOfFutureOfLottieComposition: () => (T$.DiagnosticsPropertyOfFutureOfLottieComposition = dart.constFn(diagnostics.DiagnosticsProperty$(T$.FutureOfLottieComposition())))(),
    WidgetN: () => (T$.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetNToRawLottie: () => (T$.BuildContextAndWidgetNToRawLottie = dart.constFn(dart.fnType(raw_lottie.RawLottie, [framework.BuildContext, T$.WidgetN()])))(),
    ImageN: () => (T$.ImageN = dart.constFn(dart.nullable(ui.Image)))(),
    CompleterOfImageN: () => (T$.CompleterOfImageN = dart.constFn(async.Completer$(T$.ImageN())))(),
    VoidToImageStreamListener: () => (T$.VoidToImageStreamListener = dart.constFn(dart.fnType(image_stream.ImageStreamListener, [])))(),
    ImageStreamListenerTodynamic: () => (T$.ImageStreamListenerTodynamic = dart.constFn(dart.fnType(dart.dynamic, [image_stream.ImageStreamListener])))(),
    ImageInfoAndboolTovoid: () => (T$.ImageInfoAndboolTovoid = dart.constFn(dart.fnType(dart.void, [image_stream.ImageInfo, core.bool])))(),
    StackTraceN: () => (T$.StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))(),
    dynamicAndStackTraceNTovoid: () => (T$.dynamicAndStackTraceNTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, T$.StackTraceN()])))(),
    JSArrayOfShapeGroup: () => (T$.JSArrayOfShapeGroup = dart.constFn(_interceptors.JSArray$(shape_group.ShapeGroup)))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    VoidToString: () => (T$.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    StringTodynamic: () => (T$.StringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String])))(),
    JSArrayOfLayer: () => (T$.JSArrayOfLayer = dart.constFn(_interceptors.JSArray$(layer$.Layer)))(),
    IdentityMapOfint$Layer: () => (T$.IdentityMapOfint$Layer = dart.constFn(_js_helper.IdentityMap$(core.int, layer$.Layer)))(),
    VoidToMaskMode: () => (T$.VoidToMaskMode = dart.constFn(dart.fnType(mask.MaskMode, [])))(),
    MaskModeTodynamic: () => (T$.MaskModeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [mask.MaskMode])))(),
    VoidToAnimatableShapeValue: () => (T$.VoidToAnimatableShapeValue = dart.constFn(dart.fnType(animatable_shape_value.AnimatableShapeValue, [])))(),
    AnimatableShapeValueTodynamic: () => (T$.AnimatableShapeValueTodynamic = dart.constFn(dart.fnType(dart.dynamic, [animatable_shape_value.AnimatableShapeValue])))(),
    VoidToAnimatableIntegerValue: () => (T$.VoidToAnimatableIntegerValue = dart.constFn(dart.fnType(animatable_integer_value.AnimatableIntegerValue, [])))(),
    AnimatableIntegerValueTodynamic: () => (T$.AnimatableIntegerValueTodynamic = dart.constFn(dart.fnType(dart.dynamic, [animatable_integer_value.AnimatableIntegerValue])))(),
    JSArrayOfAnimatableDoubleValue: () => (T$.JSArrayOfAnimatableDoubleValue = dart.constFn(_interceptors.JSArray$(animatable_double_value.AnimatableDoubleValue)))(),
    KeyframeOfint: () => (T$.KeyframeOfint = dart.constFn(keyframe$.Keyframe$(core.int)))(),
    JSArrayOfKeyframeOfint: () => (T$.JSArrayOfKeyframeOfint = dart.constFn(_interceptors.JSArray$(T$.KeyframeOfint())))(),
    JSArrayOfShapeModifierContent: () => (T$.JSArrayOfShapeModifierContent = dart.constFn(_interceptors.JSArray$(shape_modifier_content.ShapeModifierContent)))(),
    JSArrayOfContentModel: () => (T$.JSArrayOfContentModel = dart.constFn(_interceptors.JSArray$(content_model.ContentModel)))(),
    JSArrayOfPathContent: () => (T$.JSArrayOfPathContent = dart.constFn(_interceptors.JSArray$(path_content.PathContent)))(),
    LottieValueCallbackOfColor: () => (T$.LottieValueCallbackOfColor = dart.constFn(lottie_value_callback.LottieValueCallback$(ui.Color)))(),
    LottieValueCallbackNOfColor: () => (T$.LottieValueCallbackNOfColor = dart.constFn(dart.nullable(T$.LottieValueCallbackOfColor())))(),
    LottieValueCallbackOfint: () => (T$.LottieValueCallbackOfint = dart.constFn(lottie_value_callback.LottieValueCallback$(core.int)))(),
    LottieValueCallbackNOfint: () => (T$.LottieValueCallbackNOfint = dart.constFn(dart.nullable(T$.LottieValueCallbackOfint())))(),
    ColorFilterN: () => (T$.ColorFilterN = dart.constFn(dart.nullable(ui.ColorFilter)))(),
    ValueCallbackKeyframeAnimationOfColorFilter$ColorFilterN: () => (T$.ValueCallbackKeyframeAnimationOfColorFilter$ColorFilterN = dart.constFn(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(ui.ColorFilter, T$.ColorFilterN())))(),
    LottieValueCallbackOfColorFilter: () => (T$.LottieValueCallbackOfColorFilter = dart.constFn(lottie_value_callback.LottieValueCallback$(ui.ColorFilter)))(),
    LottieValueCallbackOfdouble: () => (T$.LottieValueCallbackOfdouble = dart.constFn(lottie_value_callback.LottieValueCallback$(core.double)))(),
    LottieValueCallbackNOfdouble: () => (T$.LottieValueCallbackNOfdouble = dart.constFn(dart.nullable(T$.LottieValueCallbackOfdouble())))(),
    ValueCallbackKeyframeAnimationOfdouble$double: () => (T$.ValueCallbackKeyframeAnimationOfdouble$double = dart.constFn(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(core.double, core.double)))(),
    LottieValueCallbackOfDropShadow: () => (T$.LottieValueCallbackOfDropShadow = dart.constFn(lottie_value_callback.LottieValueCallback$(drop_shadow.DropShadow)))(),
    LottieValueCallbackNOfDropShadow: () => (T$.LottieValueCallbackNOfDropShadow = dart.constFn(dart.nullable(T$.LottieValueCallbackOfDropShadow())))(),
    JSArrayOfContent: () => (T$.JSArrayOfContent = dart.constFn(_interceptors.JSArray$(content.Content)))(),
    JSArrayOfCubicCurveData: () => (T$.JSArrayOfCubicCurveData = dart.constFn(_interceptors.JSArray$(cubic_curve_data.CubicCurveData)))(),
    LottieValueCallbackOfOffset: () => (T$.LottieValueCallbackOfOffset = dart.constFn(lottie_value_callback.LottieValueCallback$(ui.Offset)))(),
    LottieValueCallbackNOfOffset: () => (T$.LottieValueCallbackNOfOffset = dart.constFn(dart.nullable(T$.LottieValueCallbackOfOffset())))(),
    VoidToAnimatableDoubleValue: () => (T$.VoidToAnimatableDoubleValue = dart.constFn(dart.fnType(animatable_double_value.AnimatableDoubleValue, [])))(),
    AnimatableDoubleValueTodynamic: () => (T$.AnimatableDoubleValueTodynamic = dart.constFn(dart.fnType(dart.dynamic, [animatable_double_value.AnimatableDoubleValue])))(),
    AnimatableValueOfOffset$Offset: () => (T$.AnimatableValueOfOffset$Offset = dart.constFn(animatable_value.AnimatableValue$(ui.Offset, ui.Offset)))(),
    VoidToAnimatableValueOfOffset$Offset: () => (T$.VoidToAnimatableValueOfOffset$Offset = dart.constFn(dart.fnType(T$.AnimatableValueOfOffset$Offset(), [])))(),
    AnimatableValueOfOffset$OffsetTodynamic: () => (T$.AnimatableValueOfOffset$OffsetTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.AnimatableValueOfOffset$Offset()])))(),
    VoidToMergePathsMode: () => (T$.VoidToMergePathsMode = dart.constFn(dart.fnType(merge_paths.MergePathsMode, [])))(),
    MergePathsModeTodynamic: () => (T$.MergePathsModeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [merge_paths.MergePathsMode])))(),
    JSArrayOf_PathGroup: () => (T$.JSArrayOf_PathGroup = dart.constFn(_interceptors.JSArray$(base_stroke_content._PathGroup)))(),
    AnimatableDoubleValueToDoubleKeyframeAnimation: () => (T$.AnimatableDoubleValueToDoubleKeyframeAnimation = dart.constFn(dart.fnType(double_keyframe_animation.DoubleKeyframeAnimation, [animatable_double_value.AnimatableDoubleValue])))(),
    ListOfdouble: () => (T$.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    doubleAndPathMetricTodouble: () => (T$.doubleAndPathMetricTodouble = dart.constFn(dart.fnType(core.double, [core.double, ui.PathMetric])))(),
    IdentityMapOfint$Gradient: () => (T$.IdentityMapOfint$Gradient = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Gradient)))(),
    ListOfColor: () => (T$.ListOfColor = dart.constFn(core.List$(ui.Color)))(),
    ValueCallbackKeyframeAnimationOfListOfColor$ListOfColor: () => (T$.ValueCallbackKeyframeAnimationOfListOfColor$ListOfColor = dart.constFn(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(T$.ListOfColor(), T$.ListOfColor())))(),
    LottieValueCallbackOfListOfColor: () => (T$.LottieValueCallbackOfListOfColor = dart.constFn(lottie_value_callback.LottieValueCallback$(T$.ListOfColor())))(),
    JSArrayOfColor: () => (T$.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    DropShadowN: () => (T$.DropShadowN = dart.constFn(dart.nullable(drop_shadow.DropShadow)))(),
    DropShadowNToColor: () => (T$.DropShadowNToColor = dart.constFn(dart.fnType(ui.Color, [T$.DropShadowN()])))(),
    DropShadowNTodouble: () => (T$.DropShadowNTodouble = dart.constFn(dart.fnType(core.double, [T$.DropShadowN()])))(),
    LottieFrameInfoOfDropShadow: () => (T$.LottieFrameInfoOfDropShadow = dart.constFn(lottie_frame_info.LottieFrameInfo$(drop_shadow.DropShadow)))(),
    JSArrayOfTrimPathContent: () => (T$.JSArrayOfTrimPathContent = dart.constFn(_interceptors.JSArray$(trim_path_content.TrimPathContent)))(),
    VoidToAnimatablePointValue: () => (T$.VoidToAnimatablePointValue = dart.constFn(dart.fnType(animatable_point_value.AnimatablePointValue, [])))(),
    AnimatablePointValueTodynamic: () => (T$.AnimatablePointValueTodynamic = dart.constFn(dart.fnType(dart.dynamic, [animatable_point_value.AnimatablePointValue])))(),
    JsonReader__ToOffset: () => (T$.JsonReader__ToOffset = dart.constFn(dart.fnType(ui.Offset, [json_reader.JsonReader], {}, {scale: core.double})))(),
    KeyframeOfOffset: () => (T$.KeyframeOfOffset = dart.constFn(keyframe$.Keyframe$(ui.Offset)))(),
    JSArrayOfKeyframeOfOffset: () => (T$.JSArrayOfKeyframeOfOffset = dart.constFn(_interceptors.JSArray$(T$.KeyframeOfOffset())))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfVoidTovoid: () => (T$.JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(T$.VoidTovoid())))(),
    KeyframeOfdouble: () => (T$.KeyframeOfdouble = dart.constFn(keyframe$.Keyframe$(core.double)))(),
    VoidToCurve: () => (T$.VoidToCurve = dart.constFn(dart.fnType(curves.Curve, [])))(),
    IdentityMapOfint$Curve: () => (T$.IdentityMapOfint$Curve = dart.constFn(_js_helper.IdentityMap$(core.int, curves.Curve)))(),
    KeyframeOfGradientColor: () => (T$.KeyframeOfGradientColor = dart.constFn(keyframe$.Keyframe$(gradient_color.GradientColor)))(),
    JsonReader__Todouble: () => (T$.JsonReader__Todouble = dart.constFn(dart.fnType(core.double, [json_reader.JsonReader], {}, {scale: core.double})))(),
    JsonReader__Toint: () => (T$.JsonReader__Toint = dart.constFn(dart.fnType(core.int, [json_reader.JsonReader], {}, {scale: core.double})))(),
    JsonReader__ToShapeData: () => (T$.JsonReader__ToShapeData = dart.constFn(dart.fnType(shape_data.ShapeData, [json_reader.JsonReader], {}, {scale: core.double})))(),
    JsonReader__ToDocumentData: () => (T$.JsonReader__ToDocumentData = dart.constFn(dart.fnType(document_data.DocumentData, [json_reader.JsonReader], {}, {scale: core.double})))(),
    JsonReader__ToColor: () => (T$.JsonReader__ToColor = dart.constFn(dart.fnType(ui.Color, [json_reader.JsonReader], {}, {scale: core.double})))(),
    JSArrayOfMask: () => (T$.JSArrayOfMask = dart.constFn(_interceptors.JSArray$(mask.Mask)))(),
    JSArrayOfKeyframeOfdouble: () => (T$.JSArrayOfKeyframeOfdouble = dart.constFn(_interceptors.JSArray$(T$.KeyframeOfdouble())))(),
    ListOfContentGroup: () => (T$.ListOfContentGroup = dart.constFn(core.List$(content_group.ContentGroup)))(),
    LinkedMapOfFontCharacter$ListOfContentGroup: () => (T$.LinkedMapOfFontCharacter$ListOfContentGroup = dart.constFn(_js_helper.LinkedMap$(font_character.FontCharacter, T$.ListOfContentGroup())))(),
    JSArrayOfContentGroup: () => (T$.JSArrayOfContentGroup = dart.constFn(_interceptors.JSArray$(content_group.ContentGroup)))(),
    ValueCallbackKeyframeAnimationOfColor$Color: () => (T$.ValueCallbackKeyframeAnimationOfColor$Color = dart.constFn(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(ui.Color, ui.Color)))(),
    LottieValueCallbackOfString: () => (T$.LottieValueCallbackOfString = dart.constFn(lottie_value_callback.LottieValueCallback$(core.String)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    BaseKeyframeAnimationOfObject$ObjectN: () => (T$.BaseKeyframeAnimationOfObject$ObjectN = dart.constFn(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, T$.ObjectN())))(),
    JSArrayOfBaseKeyframeAnimationOfObject$ObjectN: () => (T$.JSArrayOfBaseKeyframeAnimationOfObject$ObjectN = dart.constFn(_interceptors.JSArray$(T$.BaseKeyframeAnimationOfObject$ObjectN())))(),
    JSArrayOfBaseLayer: () => (T$.JSArrayOfBaseLayer = dart.constFn(_interceptors.JSArray$(base_layer.BaseLayer)))(),
    KeyframeOfDocumentData: () => (T$.KeyframeOfDocumentData = dart.constFn(keyframe$.Keyframe$(document_data.DocumentData)))(),
    LottieFrameInfoOfDocumentData: () => (T$.LottieFrameInfoOfDocumentData = dart.constFn(lottie_frame_info.LottieFrameInfo$(document_data.DocumentData)))(),
    LottieFrameInfoOfString: () => (T$.LottieFrameInfoOfString = dart.constFn(lottie_frame_info.LottieFrameInfo$(core.String)))(),
    KeyframeOfColor: () => (T$.KeyframeOfColor = dart.constFn(keyframe$.Keyframe$(ui.Color)))(),
    JSArrayOfKeyframeOfColor: () => (T$.JSArrayOfKeyframeOfColor = dart.constFn(_interceptors.JSArray$(T$.KeyframeOfColor())))(),
    ValueCallbackKeyframeAnimationOfOffset$Offset: () => (T$.ValueCallbackKeyframeAnimationOfOffset$Offset = dart.constFn(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(ui.Offset, ui.Offset)))(),
    ValueCallbackKeyframeAnimationOfint$int: () => (T$.ValueCallbackKeyframeAnimationOfint$int = dart.constFn(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(core.int, core.int)))(),
    KeyframeOfShapeData: () => (T$.KeyframeOfShapeData = dart.constFn(keyframe$.Keyframe$(shape_data.ShapeData)))(),
    BaseKeyframeAnimationOfShapeData$Path: () => (T$.BaseKeyframeAnimationOfShapeData$Path = dart.constFn(base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path)))(),
    JSArrayOfBaseKeyframeAnimationOfShapeData$Path: () => (T$.JSArrayOfBaseKeyframeAnimationOfShapeData$Path = dart.constFn(_interceptors.JSArray$(T$.BaseKeyframeAnimationOfShapeData$Path())))(),
    BaseKeyframeAnimationOfint$int: () => (T$.BaseKeyframeAnimationOfint$int = dart.constFn(base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)))(),
    JSArrayOfBaseKeyframeAnimationOfint$int: () => (T$.JSArrayOfBaseKeyframeAnimationOfint$int = dart.constFn(_interceptors.JSArray$(T$.BaseKeyframeAnimationOfint$int())))(),
    IdentityMapOfint$BaseLayer: () => (T$.IdentityMapOfint$BaseLayer = dart.constFn(_js_helper.IdentityMap$(core.int, base_layer.BaseLayer)))(),
    ValueDelegateOfOffset: () => (T$.ValueDelegateOfOffset = dart.constFn(value_delegate.ValueDelegate$(ui.Offset)))(),
    ValueDelegateOfdouble: () => (T$.ValueDelegateOfdouble = dart.constFn(value_delegate.ValueDelegate$(core.double)))(),
    ValueDelegateOfint: () => (T$.ValueDelegateOfint = dart.constFn(value_delegate.ValueDelegate$(core.int)))(),
    ValueDelegateOfColor: () => (T$.ValueDelegateOfColor = dart.constFn(value_delegate.ValueDelegate$(ui.Color)))(),
    ValueDelegateOfString: () => (T$.ValueDelegateOfString = dart.constFn(value_delegate.ValueDelegate$(core.String)))(),
    ValueDelegateOfColorFilter: () => (T$.ValueDelegateOfColorFilter = dart.constFn(value_delegate.ValueDelegate$(ui.ColorFilter)))(),
    ValueDelegateOfListOfColor: () => (T$.ValueDelegateOfListOfColor = dart.constFn(value_delegate.ValueDelegate$(T$.ListOfColor())))(),
    ValueDelegateOfDropShadow: () => (T$.ValueDelegateOfDropShadow = dart.constFn(value_delegate.ValueDelegate$(drop_shadow.DropShadow)))(),
    ListEqualityOfString: () => (T$.ListEqualityOfString = dart.constFn(utils.ListEquality$(core.String)))(),
    JSArrayOfValueDelegate: () => (T$.JSArrayOfValueDelegate = dart.constFn(_interceptors.JSArray$(value_delegate.ValueDelegate)))(),
    LottieFontStyleToTextStyle: () => (T$.LottieFontStyleToTextStyle = dart.constFn(dart.fnType(text_style.TextStyle, [lottie_drawable.LottieFontStyle])))(),
    ValueDelegateTobool: () => (T$.ValueDelegateTobool = dart.constFn(dart.fnType(core.bool, [value_delegate.ValueDelegate])))(),
    JSArrayOfKeyPath: () => (T$.JSArrayOfKeyPath = dart.constFn(_interceptors.JSArray$(key_path.KeyPath)))(),
    JSArrayOfGreedyContent: () => (T$.JSArrayOfGreedyContent = dart.constFn(_interceptors.JSArray$(greedy_content.GreedyContent)))(),
    MutableRectangleOfint: () => (T$.MutableRectangleOfint = dart.constFn(math.MutableRectangle$(core.int)))(),
    ListOfLayer: () => (T$.ListOfLayer = dart.constFn(core.List$(layer$.Layer)))(),
    IdentityMapOfString$ListOfLayer: () => (T$.IdentityMapOfString$ListOfLayer = dart.constFn(_js_helper.IdentityMap$(core.String, T$.ListOfLayer())))(),
    IdentityMapOfString$LottieImageAsset: () => (T$.IdentityMapOfString$LottieImageAsset = dart.constFn(_js_helper.IdentityMap$(core.String, lottie_image_asset.LottieImageAsset)))(),
    IdentityMapOfint$FontCharacter: () => (T$.IdentityMapOfint$FontCharacter = dart.constFn(_js_helper.IdentityMap$(core.int, font_character.FontCharacter)))(),
    IdentityMapOfString$Font: () => (T$.IdentityMapOfString$Font = dart.constFn(_js_helper.IdentityMap$(core.String, font.Font)))(),
    JSArrayOfMarker: () => (T$.JSArrayOfMarker = dart.constFn(_interceptors.JSArray$(marker.Marker)))(),
    LinkedHashSetOfString: () => (T$.LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))(),
    ArchiveFileTobool: () => (T$.ArchiveFileTobool = dart.constFn(dart.fnType(core.bool, [archive_file.ArchiveFile])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: alignment$.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RawLottie",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/raw_lottie.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie_builder.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 3,
        [_Location_line]: 66,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie_builder.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 3,
        [_Location_line]: 102,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie_builder.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 3,
        [_Location_line]: 127,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie_builder.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 3,
        [_Location_line]: 157,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie_builder.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ErrorWidget",
        [_Location_column]: 20,
        [_Location_line]: 475,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie_builder.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Lottie",
        [_Location_column]: 25,
        [_Location_line]: 481,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie_builder.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FutureBuilder",
        [_Location_column]: 12,
        [_Location_line]: 467,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie_builder.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Lottie",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 21,
        [_Location_line]: 155,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LottieBuilder",
        [_Location_column]: 21,
        [_Location_line]: 201,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RawLottie",
        [_Location_column]: 16,
        [_Location_line]: 374,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedBuilder",
        [_Location_column]: 20,
        [_Location_line]: 371,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RepaintBoundary",
        [_Location_column]: 15,
        [_Location_line]: 390,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/lottie.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: polystar_shape.PolystarShapeType.prototype,
        [PolystarShapeType_value]: 1
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: polystar_shape.PolystarShapeType.prototype,
        [PolystarShapeType_value]: 2
      });
    },
    get C21() {
      return C[21] = dart.constList([C[19] || CT.C19, C[20] || CT.C20], polystar_shape.PolystarShapeType);
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: merge_paths.MergePathsMode.prototype,
        [_Enum__name]: "merge",
        [_Enum_index]: 0
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: merge_paths.MergePathsMode.prototype,
        [_Enum__name]: "add",
        [_Enum_index]: 1
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: merge_paths.MergePathsMode.prototype,
        [_Enum__name]: "substract",
        [_Enum_index]: 2
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: merge_paths.MergePathsMode.prototype,
        [_Enum__name]: "intersect",
        [_Enum_index]: 3
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: merge_paths.MergePathsMode.prototype,
        [_Enum__name]: "excludeIntersections",
        [_Enum_index]: 4
      });
    },
    get C27() {
      return C[27] = dart.constList([C[22] || CT.C22, C[23] || CT.C23, C[24] || CT.C24, C[25] || CT.C25, C[26] || CT.C26], merge_paths.MergePathsMode);
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: shape_stroke.LineCapType.prototype,
        [_Enum__name]: "butt",
        [_Enum_index]: 0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: shape_stroke.LineCapType.prototype,
        [_Enum__name]: "round",
        [_Enum_index]: 1
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: shape_stroke.LineCapType.prototype,
        [_Enum__name]: "unknown",
        [_Enum_index]: 2
      });
    },
    get C28() {
      return C[28] = dart.constList([C[29] || CT.C29, C[30] || CT.C30, C[31] || CT.C31], shape_stroke.LineCapType);
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: shape_stroke.LineJoinType.prototype,
        [_Enum__name]: "miter",
        [_Enum_index]: 0
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: shape_stroke.LineJoinType.prototype,
        [_Enum__name]: "round",
        [_Enum_index]: 1
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: shape_stroke.LineJoinType.prototype,
        [_Enum__name]: "bevel",
        [_Enum_index]: 2
      });
    },
    get C32() {
      return C[32] = dart.constList([C[33] || CT.C33, C[34] || CT.C34, C[35] || CT.C35], shape_stroke.LineJoinType);
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C38() {
      return C[38] = dart.fn(path_parser.pathParser, T$.JsonReader__ToOffset());
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 1
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C41() {
      return C[41] = dart.fn(float_parser.floatParser, T$.JsonReader__Todouble());
    },
    get C42() {
      return C[42] = dart.fn(integer_parser.integerParser, T$.JsonReader__Toint());
    },
    get C43() {
      return C[43] = dart.fn(offset_parser.offsetParser, T$.JsonReader__ToOffset());
    },
    get C44() {
      return C[44] = dart.fn(scale_xy_parser.scaleXYParser, T$.JsonReader__ToOffset());
    },
    get C45() {
      return C[45] = dart.fn(shape_data_parser.shapeDataParser, T$.JsonReader__ToShapeData());
    },
    get C46() {
      return C[46] = dart.fn(document_data_parser.documentDataParser, T$.JsonReader__ToDocumentData());
    },
    get C47() {
      return C[47] = dart.fn(color_parser.colorParser, T$.JsonReader__ToColor());
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: document_data.Justification.prototype,
        [_Enum__name]: "leftAlign",
        [_Enum_index]: 0
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: document_data.Justification.prototype,
        [_Enum__name]: "rightAlign",
        [_Enum_index]: 1
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: document_data.Justification.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: layer$.LayerType.prototype,
        [_Enum__name]: "shape",
        [_Enum_index]: 4
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: layer$.LayerType.prototype,
        [_Enum__name]: "preComp",
        [_Enum_index]: 0
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: layer$.LayerType.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: layer$.LayerType.prototype,
        [_Enum__name]: "image",
        [_Enum_index]: 2
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: layer$.LayerType.prototype,
        [_Enum__name]: "nullLayer",
        [_Enum_index]: 3
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: layer$.LayerType.prototype,
        [_Enum__name]: "text",
        [_Enum_index]: 5
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: layer$.LayerType.prototype,
        [_Enum__name]: "unknown",
        [_Enum_index]: 6
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: mask.MaskMode.prototype,
        [_Enum__name]: "maskModeNone",
        [_Enum_index]: 3
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: mask.MaskMode.prototype,
        [_Enum__name]: "maskModeSubstract",
        [_Enum_index]: 1
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: mask.MaskMode.prototype,
        [_Enum__name]: "maskModeIntersect",
        [_Enum_index]: 2
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: mask.MaskMode.prototype,
        [_Enum__name]: "maskModeAdd",
        [_Enum_index]: 0
      });
    },
    get C62() {
      return C[62] = dart.constList([C[52] || CT.C52, C[53] || CT.C53, C[54] || CT.C54, C[55] || CT.C55, C[51] || CT.C51, C[56] || CT.C56, C[57] || CT.C57], layer$.LayerType);
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: layer$.MatteType.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: layer$.MatteType.prototype,
        [_Enum__name]: "add",
        [_Enum_index]: 1
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: layer$.MatteType.prototype,
        [_Enum__name]: "invert",
        [_Enum_index]: 2
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: layer$.MatteType.prototype,
        [_Enum__name]: "luma",
        [_Enum_index]: 3
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: layer$.MatteType.prototype,
        [_Enum__name]: "lumaInverted",
        [_Enum_index]: 4
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: layer$.MatteType.prototype,
        [_Enum__name]: "unknown",
        [_Enum_index]: 5
      });
    },
    get C63() {
      return C[63] = dart.constList([C[64] || CT.C64, C[65] || CT.C65, C[66] || CT.C66, C[67] || CT.C67, C[68] || CT.C68, C[69] || CT.C69], layer$.MatteType);
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: shape_trim_path.ShapeTrimPathType.prototype,
        [_Enum__name]: "simultaneously",
        [_Enum_index]: 0
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: shape_trim_path.ShapeTrimPathType.prototype,
        [_Enum__name]: "individually",
        [_Enum_index]: 1
      });
    },
    get C70() {
      return C[70] = dart.constList([C[71] || CT.C71, C[72] || CT.C72], shape_trim_path.ShapeTrimPathType);
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C74() {
      return C[74] = dart.constList([C[61] || CT.C61, C[59] || CT.C59, C[60] || CT.C60, C[58] || CT.C58], mask.MaskMode);
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: T$.ListEqualityOfString().prototype
      });
    },
    get C76() {
      return C[76] = dart.fn(lottie_delegates.defaultTextStyleDelegate, T$.LottieFontStyleToTextStyle());
    },
    get C77() {
      return C[77] = dart.constList([], value_delegate.ValueDelegate);
    }
  }, false);
  var C = Array(78).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/render_lottie.dart",
    "package:lottie/src/render_lottie.dart",
    "package:lottie/src/raw_lottie.dart",
    "package:lottie/src/providers/lottie_provider.dart",
    "package:lottie/src/providers/network_provider.dart",
    "package:lottie/src/providers/memory_provider.dart",
    "package:lottie/src/providers/file_provider.dart",
    "package:lottie/src/providers/asset_provider.dart",
    "package:lottie/src/lottie_builder.dart",
    "package:lottie/src/lottie.dart",
    "package:lottie/src/parser/font_character_parser.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/parser/lottie_composition_parser.dart",
    "package:lottie/src/parser/lottie_composition_parser.dart",
    "package:lottie/src/model/marker.dart",
    "package:lottie/src/parser/mask_parser.dart",
    "package:lottie/src/parser/drop_shadow_effect_parser.dart",
    "package:lottie/src/parser/shape_trim_path_parser.dart",
    "package:lottie/src/parser/shape_stroke_parser.dart",
    "package:lottie/src/animation/content/shape_content.dart",
    "package:lottie/src/model/content/shape_path.dart",
    "package:lottie/src/parser/shape_path_parser.dart",
    "package:lottie/src/parser/shape_group_parser.dart",
    "package:lottie/src/animation/content/fill_content.dart",
    "package:lottie/src/model/content/shape_fill.dart",
    "package:lottie/src/parser/shape_fill_parser.dart",
    "package:lottie/src/parser/rounded_corners_parser.dart",
    "package:lottie/src/animation/content/repeater_content.dart",
    "package:lottie/src/model/content/repeater.dart",
    "package:lottie/src/parser/repeat_parser.dart",
    "package:lottie/src/model/content/rounded_corners.dart",
    "package:lottie/src/animation/content/rounded_corners_content.dart",
    "package:lottie/src/animation/content/rectangle_content.dart",
    "package:lottie/src/model/content/rectangle_shape.dart",
    "package:lottie/src/parser/rectangle_shape_parser.dart",
    "package:lottie/src/animation/content/polystar_content.dart",
    "package:lottie/src/model/content/polystar_shape.dart",
    "package:lottie/src/parser/polysar_shape_parser.dart",
    "package:lottie/src/animation/content/merge_paths_content.dart",
    "package:lottie/src/model/content/merge_paths.dart",
    "package:lottie/src/parser/merge_paths_parser.dart",
    "package:lottie/src/animation/content/base_stroke_content.dart",
    "package:lottie/src/animation/content/stroke_content.dart",
    "package:lottie/src/model/content/shape_stroke.dart",
    "package:lottie/src/animation/content/gradient_stroke_content.dart",
    "package:lottie/src/model/content/gradient_stroke.dart",
    "package:lottie/src/parser/gradient_stroke_parser.dart",
    "package:lottie/src/animation/keyframe/drop_shadow_keyframe_animation.dart",
    "package:lottie/src/animation/content/gradient_fill_content.dart",
    "package:lottie/src/model/content/gradient_fill.dart",
    "package:lottie/src/parser/gradient_fill_parser.dart",
    "package:lottie/src/animation/content/compound_trim_path_content.dart",
    "package:lottie/src/animation/content/ellipse_content.dart",
    "package:lottie/src/model/content/circle_shape.dart",
    "package:lottie/src/parser/circle_shape_parser.dart",
    "package:lottie/src/parser/content_model_parser.dart",
    "package:lottie/src/parser/blur_effect_parser.dart",
    "package:lottie/src/parser/path_keyframe_parser.dart",
    "package:lottie/src/parser/animatable_path_value_parser.dart",
    "package:lottie/src/animation/keyframe/base_keyframe_animation.dart",
    "package:lottie/src/animation/keyframe/split_dimension_path_keyframe_animation.dart",
    "package:lottie/src/model/animatable/animatable_split_dimension_path_value.dart",
    "package:lottie/src/parser/animatable_transform_parser.dart",
    "package:lottie/src/parser/keyframe_parser.dart",
    "package:lottie/src/parser/keyframes_parser.dart",
    "package:lottie/src/model/animatable/base_animatable_value.dart",
    "package:lottie/src/model/animatable/animatable_point_value.dart",
    "package:lottie/src/animation/keyframe/keyframe_animation.dart",
    "package:lottie/src/animation/keyframe/gradient_color_keyframe_animation.dart",
    "package:lottie/src/model/animatable/animatable_gradient_color_value.dart",
    "package:lottie/src/parser/animatable_value_parser.dart",
    "package:lottie/src/parser/animatable_text_properties_parser.dart",
    "package:lottie/src/parser/layer_parser.dart",
    "package:lottie/src/model/layer/base_layer.dart",
    "package:lottie/src/model/layer/text_layer.dart",
    "package:lottie/src/model/layer/solid_layer.dart",
    "package:lottie/src/model/layer/shape_layer.dart",
    "package:lottie/src/model/layer/null_layer.dart",
    "package:lottie/src/model/animatable/animatable_text_properties.dart",
    "package:lottie/src/animation/keyframe/text_keyframe_animation.dart",
    "package:lottie/src/value/lottie_value_callback.dart",
    "package:lottie/src/model/animatable/animatable_text_frame.dart",
    "package:lottie/src/model/layer/layer.dart",
    "package:lottie/src/model/layer/image_layer.dart",
    "package:lottie/src/animation/keyframe/color_keyframe_animation.dart",
    "package:lottie/src/model/animatable/animatable_color_value.dart",
    "package:lottie/src/model/content/drop_shadow_effect.dart",
    "package:lottie/src/model/content/blur_effect.dart",
    "package:lottie/src/model/animatable/animatable_scale_value.dart",
    "package:lottie/src/animation/keyframe/point_keyframe_animation.dart",
    "package:lottie/src/model/content/shape_trim_path.dart",
    "package:lottie/src/animation/content/trim_path_content.dart",
    "package:lottie/src/utils/utils.dart",
    "package:lottie/src/value/keyframe.dart",
    "package:lottie/src/animation/keyframe/path_keyframe.dart",
    "package:lottie/src/animation/keyframe/path_keyframe_animation.dart",
    "package:lottie/src/model/animatable/animatable_path_value.dart",
    "package:lottie/src/model/animatable/animatable_double_value.dart",
    "package:lottie/src/model/content/content_model.dart",
    "package:lottie/src/model/animatable/animatable_transform.dart",
    "package:lottie/src/animation/keyframe/transform_keyframe_animation.dart",
    "package:lottie/src/animation/content/key_path_element_content.dart",
    "package:lottie/src/utils/misc.dart",
    "package:lottie/src/animation/keyframe/shape_keyframe_animation.dart",
    "package:lottie/src/model/animatable/animatable_shape_value.dart",
    "package:lottie/src/model/animatable/animatable_value.dart",
    "package:lottie/src/animation/keyframe/integer_keyframe_animation.dart",
    "package:lottie/src/model/animatable/animatable_integer_value.dart",
    "package:lottie/src/model/content/mask.dart",
    "package:lottie/src/animation/keyframe/mask_keyframe_animation.dart",
    "package:lottie/src/animation/keyframe/double_keyframe_animation.dart",
    "package:lottie/src/animation/keyframe/value_callback_keyframe_animation.dart",
    "package:lottie/src/model/layer/composition_layer.dart",
    "package:lottie/src/model/key_path_element.dart",
    "package:lottie/src/model/key_path.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/value_delegate.dart",
    "package:lottie/src/value_delegate.dart",
    "package:lottie/src/lottie_delegates.dart",
    "package:lottie/src/lottie_drawable.dart",
    "package:lottie/src/animation/content/content_group.dart",
    "package:lottie/src/model/content/shape_group.dart",
    "package:lottie/src/model/font_character.dart",
    "package:lottie/src/composition.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/composition.dart"
  ];
  var Alignment_y = dart.privateName(alignment$, "Alignment.y");
  var Alignment_x = dart.privateName(alignment$, "Alignment.x");
  var _drawable = dart.privateName(render_lottie, "_drawable");
  var _width = dart.privateName(render_lottie, "_width");
  var _height = dart.privateName(render_lottie, "_height");
  var _fit = dart.privateName(render_lottie, "_fit");
  var _alignment = dart.privateName(render_lottie, "_alignment");
  var _sizeForConstraints = dart.privateName(render_lottie, "_sizeForConstraints");
  render_lottie.RenderLottie = class RenderLottie extends box.RenderBox {
    static ['_#new#tearOff'](opts) {
      let composition = opts && 'composition' in opts ? opts.composition : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let enableMergePaths = opts && 'enableMergePaths' in opts ? opts.enableMergePaths : null;
      let progress = opts && 'progress' in opts ? opts.progress : 0;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      return new render_lottie.RenderLottie.new({composition: composition, delegates: delegates, enableMergePaths: enableMergePaths, progress: progress, frameRate: frameRate, width: width, height: height, fit: fit, alignment: alignment, filterQuality: filterQuality});
    }
    get composition() {
      let t0;
      t0 = this[_drawable];
      return t0 == null ? null : t0.composition;
    }
    setComposition(composition, opts) {
      let progress = opts && 'progress' in opts ? opts.progress : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let enableMergePaths = opts && 'enableMergePaths' in opts ? opts.enableMergePaths : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let drawable = this[_drawable];
      enableMergePaths == null ? enableMergePaths = false : null;
      let needsLayout = false;
      let needsPaint = false;
      if (composition == null) {
        if (drawable != null) {
          drawable = this[_drawable] = null;
          needsPaint = true;
          needsLayout = true;
        }
      } else {
        if (drawable == null || !drawable.composition[$_equals](composition)) {
          drawable = this[_drawable] = new lottie_drawable.LottieDrawable.new(composition);
          needsLayout = true;
          needsPaint = true;
        }
        needsPaint = !!(needsPaint | drawable.setProgress(progress, {frameRate: frameRate}));
        if (!dart.equals(drawable.delegates, delegates)) {
          drawable.delegates = delegates;
          needsPaint = true;
        }
        if (enableMergePaths !== drawable.enableMergePaths) {
          drawable.enableMergePaths = enableMergePaths;
          needsPaint = true;
        }
        if (filterQuality != drawable.filterQuality) {
          drawable.filterQuality = filterQuality;
          needsPaint = true;
        }
      }
      if (needsPaint) {
        this.markNeedsPaint();
      }
      if (needsLayout && (this[_width] == null || this[_height] == null)) {
        this.markNeedsLayout();
      }
    }
    get width() {
      return this[_width];
    }
    set width(value) {
      if (value == this[_width]) {
        return;
      }
      this[_width] = value;
      this.markNeedsLayout();
    }
    get height() {
      return this[_height];
    }
    set height(value) {
      if (value == this[_height]) {
        return;
      }
      this[_height] = value;
      this.markNeedsLayout();
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (value == this[_fit]) {
        return;
      }
      this[_fit] = value;
      this.markNeedsPaint();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (value._equals(this[_alignment])) {
        return;
      }
      this[_alignment] = value;
    }
    [_sizeForConstraints](constraints) {
      constraints = new box.BoxConstraints.tightFor({width: this[_width], height: this[_height]}).enforce(constraints);
      if (this[_drawable] == null) {
        return constraints.smallest;
      }
      return constraints.constrainSizeAndAttemptToPreserveAspectRatio(dart.nullCheck(this[_drawable]).size);
    }
    computeMinIntrinsicWidth(height) {
      if (!(height >= 0.0)) dart.assertFailed(null, I[0], 165, 12, "height >= 0.0");
      if (this[_width] == null && this[_height] == null) {
        return 0.0;
      }
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({height: height})).width;
    }
    computeMaxIntrinsicWidth(height) {
      if (!(height >= 0.0)) dart.assertFailed(null, I[0], 175, 12, "height >= 0.0");
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({height: height})).width;
    }
    computeMinIntrinsicHeight(width) {
      if (!(width >= 0.0)) dart.assertFailed(null, I[0], 182, 12, "width >= 0.0");
      if (this[_width] == null && this[_height] == null) {
        return 0.0;
      }
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({width: width})).height;
    }
    computeMaxIntrinsicHeight(width) {
      if (!(width >= 0.0)) dart.assertFailed(null, I[0], 192, 12, "width >= 0.0");
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({width: width})).height;
    }
    hitTestSelf(position) {
      return true;
    }
    computeDryLayout(constraints) {
      return this[_sizeForConstraints](constraints);
    }
    performLayout() {
      this.size = this[_sizeForConstraints](this.constraints);
    }
    paint(context, offset) {
      if (this[_drawable] == null) return;
      dart.nullCheck(this[_drawable]).draw(context.canvas, offset['&'](this.size), {fit: this[_fit], alignment: this[_alignment].resolve(ui.TextDirection.ltr)});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLottieComposition()).new("composition", this.composition));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
      properties.add(new (T$.EnumPropertyOfBoxFit()).new("fit", this.fit, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {defaultValue: null}));
    }
  };
  (render_lottie.RenderLottie.new = function(opts) {
    let t1, t0;
    let composition = opts && 'composition' in opts ? opts.composition : null;
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    let enableMergePaths = opts && 'enableMergePaths' in opts ? opts.enableMergePaths : null;
    let progress = opts && 'progress' in opts ? opts.progress : 0;
    let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    if (!(progress >= 0.0 && progress <= 1.0)) dart.assertFailed(null, I[0], 23, 16, "progress >= 0.0 && progress <= 1.0");
    this[_drawable] = composition != null ? (t0 = new lottie_drawable.LottieDrawable.new(composition), (() => {
      t0.setProgress(progress, {frameRate: frameRate});
      t0.delegates = delegates;
      t0.enableMergePaths = (t1 = enableMergePaths, t1 == null ? false : t1);
      t0.filterQuality = filterQuality;
      return t0;
    })()) : null;
    this[_width] = width;
    this[_height] = height;
    this[_fit] = fit;
    this[_alignment] = alignment;
    render_lottie.RenderLottie.__proto__.new.call(this);
    ;
  }).prototype = render_lottie.RenderLottie.prototype;
  dart.addTypeTests(render_lottie.RenderLottie);
  dart.addTypeCaches(render_lottie.RenderLottie);
  dart.setMethodSignature(render_lottie.RenderLottie, () => ({
    __proto__: dart.getMethods(render_lottie.RenderLottie.__proto__),
    setComposition: dart.fnType(dart.void, [dart.nullable(composition$.LottieComposition)], {enableMergePaths: dart.nullable(core.bool), filterQuality: dart.nullable(ui.FilterQuality)}, {delegates: dart.nullable(lottie_delegates.LottieDelegates), frameRate: dart.nullable(frame_rate.FrameRate), progress: core.double}),
    [_sizeForConstraints]: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setGetterSignature(render_lottie.RenderLottie, () => ({
    __proto__: dart.getGetters(render_lottie.RenderLottie.__proto__),
    composition: dart.nullable(composition$.LottieComposition),
    width: dart.nullable(core.double),
    height: dart.nullable(core.double),
    fit: dart.nullable(box_fit.BoxFit),
    alignment: alignment$.AlignmentGeometry
  }));
  dart.setSetterSignature(render_lottie.RenderLottie, () => ({
    __proto__: dart.getSetters(render_lottie.RenderLottie.__proto__),
    width: dart.nullable(core.double),
    height: dart.nullable(core.double),
    fit: dart.nullable(box_fit.BoxFit),
    alignment: alignment$.AlignmentGeometry
  }));
  dart.setLibraryUri(render_lottie.RenderLottie, I[1]);
  dart.setFieldSignature(render_lottie.RenderLottie, () => ({
    __proto__: dart.getFields(render_lottie.RenderLottie.__proto__),
    [_drawable]: dart.fieldType(dart.nullable(lottie_drawable.LottieDrawable)),
    [_width]: dart.fieldType(dart.nullable(core.double)),
    [_height]: dart.fieldType(dart.nullable(core.double)),
    [_fit]: dart.fieldType(dart.nullable(box_fit.BoxFit)),
    [_alignment]: dart.fieldType(alignment$.AlignmentGeometry)
  }));
  var composition$0 = dart.privateName(raw_lottie, "RawLottie.composition");
  var delegates$ = dart.privateName(raw_lottie, "RawLottie.delegates");
  var options$ = dart.privateName(raw_lottie, "RawLottie.options");
  var progress$ = dart.privateName(raw_lottie, "RawLottie.progress");
  var frameRate$ = dart.privateName(raw_lottie, "RawLottie.frameRate");
  var width$ = dart.privateName(raw_lottie, "RawLottie.width");
  var height$ = dart.privateName(raw_lottie, "RawLottie.height");
  var fit$ = dart.privateName(raw_lottie, "RawLottie.fit");
  var alignment$0 = dart.privateName(raw_lottie, "RawLottie.alignment");
  var filterQuality$ = dart.privateName(raw_lottie, "RawLottie.filterQuality");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  raw_lottie.RawLottie = class RawLottie extends framework.LeafRenderObjectWidget {
    get composition() {
      return this[composition$0];
    }
    set composition(value) {
      super.composition = value;
    }
    get delegates() {
      return this[delegates$];
    }
    set delegates(value) {
      super.delegates = value;
    }
    get options() {
      return this[options$];
    }
    set options(value) {
      super.options = value;
    }
    get progress() {
      return this[progress$];
    }
    set progress(value) {
      super.progress = value;
    }
    get frameRate() {
      return this[frameRate$];
    }
    set frameRate(value) {
      super.frameRate = value;
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
    get fit() {
      return this[fit$];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let composition = opts && 'composition' in opts ? opts.composition : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let progress = opts && 'progress' in opts ? opts.progress : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      return new raw_lottie.RawLottie.new({key: key, composition: composition, delegates: delegates, options: options, progress: progress, frameRate: frameRate, width: width, height: height, fit: fit, alignment: alignment, filterQuality: filterQuality, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    createRenderObject(context) {
      let t0;
      return new render_lottie.RenderLottie.new({composition: this.composition, delegates: this.delegates, enableMergePaths: (t0 = this.options, t0 == null ? null : t0.enableMergePaths), progress: this.progress, frameRate: this.frameRate, width: this.width, height: this.height, fit: this.fit, alignment: this.alignment, filterQuality: this.filterQuality});
    }
    updateRenderObject(context, renderObject) {
      let t1, t0;
      render_lottie.RenderLottie.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.setComposition(this.composition, {progress: this.progress, frameRate: this.frameRate, delegates: this.delegates, enableMergePaths: (t1 = this.options, t1 == null ? null : t1.enableMergePaths), filterQuality: this.filterQuality});
        t0.width = this.width;
        t0.height = this.height;
        t0.alignment = this.alignment;
        t0.fit = this.fit;
        return t0;
      })();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLottieComposition()).new("composition", this.composition));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
      properties.add(new (T$.EnumPropertyOfBoxFit()).new("fit", this.fit, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {defaultValue: null}));
    }
  };
  (raw_lottie.RawLottie.new = function(opts) {
    let t0, t0$;
    let key = opts && 'key' in opts ? opts.key : null;
    let composition = opts && 'composition' in opts ? opts.composition : null;
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let progress = opts && 'progress' in opts ? opts.progress : null;
    let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[composition$0] = composition;
    this[delegates$] = delegates;
    this[options$] = options;
    this[frameRate$] = frameRate;
    this[width$] = width;
    this[height$] = height;
    this[fit$] = fit;
    this[filterQuality$] = filterQuality;
    this[progress$] = (t0 = progress, t0 == null ? 0.0 : t0);
    this[alignment$0] = (t0$ = alignment, t0$ == null ? alignment$.Alignment.center : t0$);
    raw_lottie.RawLottie.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = raw_lottie.RawLottie.prototype;
  dart.addTypeTests(raw_lottie.RawLottie);
  dart.addTypeCaches(raw_lottie.RawLottie);
  dart.setMethodSignature(raw_lottie.RawLottie, () => ({
    __proto__: dart.getMethods(raw_lottie.RawLottie.__proto__),
    createRenderObject: dart.fnType(render_lottie.RenderLottie, [framework.BuildContext])
  }));
  dart.setLibraryUri(raw_lottie.RawLottie, I[2]);
  dart.setFieldSignature(raw_lottie.RawLottie, () => ({
    __proto__: dart.getFields(raw_lottie.RawLottie.__proto__),
    composition: dart.finalFieldType(dart.nullable(composition$.LottieComposition)),
    delegates: dart.finalFieldType(dart.nullable(lottie_delegates.LottieDelegates)),
    options: dart.finalFieldType(dart.nullable(options.LottieOptions)),
    progress: dart.finalFieldType(core.double),
    frameRate: dart.finalFieldType(dart.nullable(frame_rate.FrameRate)),
    width: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double)),
    fit: dart.finalFieldType(dart.nullable(box_fit.BoxFit)),
    alignment: dart.finalFieldType(alignment$.AlignmentGeometry),
    filterQuality: dart.finalFieldType(dart.nullable(ui.FilterQuality))
  }));
  var url$ = dart.privateName(network_provider, "NetworkLottie.url");
  var headers$ = dart.privateName(network_provider, "NetworkLottie.headers");
  var _loadImage = dart.privateName(network_provider, "_loadImage");
  var imageProviderFactory$ = dart.privateName(lottie_provider, "LottieProvider.imageProviderFactory");
  lottie_provider.LottieProvider = class LottieProvider extends core.Object {
    get imageProviderFactory() {
      return this[imageProviderFactory$];
    }
    set imageProviderFactory(value) {
      super.imageProviderFactory = value;
    }
    getImageProvider(lottieImage) {
      let imageProvider = load_image.fromDataUri(lottieImage.fileName);
      if (imageProvider == null && this.imageProviderFactory != null) {
        imageProvider = dart.nullCheck(this.imageProviderFactory)(lottieImage);
      }
      return imageProvider;
    }
  };
  (lottie_provider.LottieProvider.new = function(opts) {
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    this[imageProviderFactory$] = imageProviderFactory;
    ;
  }).prototype = lottie_provider.LottieProvider.prototype;
  dart.addTypeTests(lottie_provider.LottieProvider);
  dart.addTypeCaches(lottie_provider.LottieProvider);
  dart.setMethodSignature(lottie_provider.LottieProvider, () => ({
    __proto__: dart.getMethods(lottie_provider.LottieProvider.__proto__),
    getImageProvider: dart.fnType(dart.nullable(image_provider.ImageProvider$(core.Object)), [lottie_image_asset.LottieImageAsset])
  }));
  dart.setLibraryUri(lottie_provider.LottieProvider, I[3]);
  dart.setFieldSignature(lottie_provider.LottieProvider, () => ({
    __proto__: dart.getFields(lottie_provider.LottieProvider.__proto__),
    imageProviderFactory: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(image_provider.ImageProvider$(core.Object)), [lottie_image_asset.LottieImageAsset])))
  }));
  network_provider.NetworkLottie = class NetworkLottie extends lottie_provider.LottieProvider {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    static ['_#new#tearOff'](url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      return new network_provider.NetworkLottie.new(url, {headers: headers, imageProviderFactory: imageProviderFactory});
    }
    load() {
      return async.async(composition$.LottieComposition, (function* load() {
        let cacheKey = "network-" + this.url;
        return lottie_provider.sharedLottieCache.putIfAbsent(cacheKey, dart.fn(() => async.async(composition$.LottieComposition, (function*() {
          let t0;
          let resolved = core.Uri.base.resolve(this.url);
          let bytes = (yield provider_web.loadHttp(resolved, {headers: this.headers}));
          let composition = (yield composition$.LottieComposition.fromBytes(bytes, {name: path.url.basenameWithoutExtension(this.url), imageProviderFactory: this.imageProviderFactory}));
          for (let image of composition.images[$values]) {
            t0 = image;
            t0.loadedImage == null ? t0.loadedImage = (yield this[_loadImage](resolved, composition, image)) : null;
          }
          return composition;
        }).bind(this)), T$.VoidToFutureOfLottieComposition()));
      }).bind(this));
    }
    [_loadImage](jsonUri, composition, lottieImage) {
      let imageProvider = this.getImageProvider(lottieImage);
      if (imageProvider == null) {
        let imageUrl = jsonUri.resolve(path.url.join(lottieImage.dirName, lottieImage.fileName));
        imageProvider = new _network_image_web.NetworkImage.new(imageUrl.toString());
      }
      return load_image.loadImage(composition, lottieImage, imageProvider);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.runtimeType(other)._equals(this[$runtimeType])) return false;
      return network_provider.NetworkLottie.is(other) && other.url === this.url;
    }
    get hashCode() {
      return this.url[$hashCode];
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(url: " + this.url + ")";
    }
  };
  (network_provider.NetworkLottie.new = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    this[url$] = url;
    this[headers$] = headers;
    network_provider.NetworkLottie.__proto__.new.call(this, {imageProviderFactory: imageProviderFactory});
    ;
  }).prototype = network_provider.NetworkLottie.prototype;
  dart.addTypeTests(network_provider.NetworkLottie);
  dart.addTypeCaches(network_provider.NetworkLottie);
  dart.setMethodSignature(network_provider.NetworkLottie, () => ({
    __proto__: dart.getMethods(network_provider.NetworkLottie.__proto__),
    load: dart.fnType(async.Future$(composition$.LottieComposition), []),
    [_loadImage]: dart.fnType(async.Future$(dart.nullable(ui.Image)), [core.Uri, composition$.LottieComposition, lottie_image_asset.LottieImageAsset]),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(network_provider.NetworkLottie, I[4]);
  dart.setFieldSignature(network_provider.NetworkLottie, () => ({
    __proto__: dart.getFields(network_provider.NetworkLottie.__proto__),
    url: dart.finalFieldType(core.String),
    headers: dart.finalFieldType(dart.nullable(core.Map$(core.String, core.String)))
  }));
  dart.defineExtensionMethods(network_provider.NetworkLottie, ['_equals', 'toString']);
  dart.defineExtensionAccessors(network_provider.NetworkLottie, ['hashCode']);
  var bytes$ = dart.privateName(memory_provider, "MemoryLottie.bytes");
  var _loadImage$ = dart.privateName(memory_provider, "_loadImage");
  memory_provider.MemoryLottie = class MemoryLottie extends lottie_provider.LottieProvider {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](bytes, opts) {
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      return new memory_provider.MemoryLottie.new(bytes, {imageProviderFactory: imageProviderFactory});
    }
    load() {
      return async.async(composition$.LottieComposition, (function* load() {
        let cacheKey = "memory-" + dart.str(this.bytes[$hashCode]) + "-" + dart.str(this.bytes[$lengthInBytes]);
        return lottie_provider.sharedLottieCache.putIfAbsent(cacheKey, dart.fn(() => async.async(composition$.LottieComposition, (function*() {
          let t0;
          let composition = (yield composition$.LottieComposition.fromBytes(this.bytes, {imageProviderFactory: this.imageProviderFactory}));
          for (let image of composition.images[$values]) {
            t0 = image;
            t0.loadedImage == null ? t0.loadedImage = (yield this[_loadImage$](composition, image)) : null;
          }
          return composition;
        }).bind(this)), T$.VoidToFutureOfLottieComposition()));
      }).bind(this));
    }
    [_loadImage$](composition, lottieImage) {
      let imageProvider = this.getImageProvider(lottieImage);
      imageProvider == null ? imageProvider = new image_resolution.AssetImage.new(path.join(lottieImage.dirName, lottieImage.fileName)) : null;
      return load_image.loadImage(composition, lottieImage, imageProvider);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.runtimeType(other)._equals(this[$runtimeType])) return false;
      return memory_provider.MemoryLottie.is(other) && other.bytes[$_equals](this.bytes);
    }
    get hashCode() {
      return this.bytes[$hashCode];
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(bytes: " + dart.str(this.bytes[$length]) + ")";
    }
  };
  (memory_provider.MemoryLottie.new = function(bytes, opts) {
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    this[bytes$] = bytes;
    memory_provider.MemoryLottie.__proto__.new.call(this, {imageProviderFactory: imageProviderFactory});
    ;
  }).prototype = memory_provider.MemoryLottie.prototype;
  dart.addTypeTests(memory_provider.MemoryLottie);
  dart.addTypeCaches(memory_provider.MemoryLottie);
  dart.setMethodSignature(memory_provider.MemoryLottie, () => ({
    __proto__: dart.getMethods(memory_provider.MemoryLottie.__proto__),
    load: dart.fnType(async.Future$(composition$.LottieComposition), []),
    [_loadImage$]: dart.fnType(async.Future$(dart.nullable(ui.Image)), [composition$.LottieComposition, lottie_image_asset.LottieImageAsset]),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(memory_provider.MemoryLottie, I[5]);
  dart.setFieldSignature(memory_provider.MemoryLottie, () => ({
    __proto__: dart.getFields(memory_provider.MemoryLottie.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  dart.defineExtensionMethods(memory_provider.MemoryLottie, ['_equals', 'toString']);
  dart.defineExtensionAccessors(memory_provider.MemoryLottie, ['hashCode']);
  var file$ = dart.privateName(file_provider, "FileLottie.file");
  var _loadImage$0 = dart.privateName(file_provider, "_loadImage");
  file_provider.FileLottie = class FileLottie extends lottie_provider.LottieProvider {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    static ['_#new#tearOff'](file, opts) {
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      return new file_provider.FileLottie.new(file, {imageProviderFactory: imageProviderFactory});
    }
    load() {
      return async.async(composition$.LottieComposition, (function* load() {
        let cacheKey = "file-" + provider_web.filePath(this.file);
        return lottie_provider.sharedLottieCache.putIfAbsent(cacheKey, dart.fn(() => async.async(composition$.LottieComposition, (function*() {
          let t0;
          let bytes = (yield provider_web.loadFile(this.file));
          let composition = (yield composition$.LottieComposition.fromBytes(bytes, {name: path.basenameWithoutExtension(provider_web.filePath(this.file)), imageProviderFactory: this.imageProviderFactory}));
          for (let image of composition.images[$values]) {
            t0 = image;
            t0.loadedImage == null ? t0.loadedImage = (yield this[_loadImage$0](composition, image)) : null;
          }
          return composition;
        }).bind(this)), T$.VoidToFutureOfLottieComposition()));
      }).bind(this));
    }
    [_loadImage$0](composition, lottieImage) {
      let imageProvider = this.getImageProvider(lottieImage);
      imageProvider == null ? imageProvider = provider_web.loadImageForFile(this.file, lottieImage) : null;
      return load_image.loadImage(composition, lottieImage, imageProvider);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.runtimeType(other)._equals(this[$runtimeType])) return false;
      return file_provider.FileLottie.is(other) && other.file[$_equals](this.file);
    }
    get hashCode() {
      return this.file[$hashCode];
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(file: " + provider_web.filePath(this.file) + ")";
    }
  };
  (file_provider.FileLottie.new = function(file, opts) {
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    this[file$] = file;
    file_provider.FileLottie.__proto__.new.call(this, {imageProviderFactory: imageProviderFactory});
    ;
  }).prototype = file_provider.FileLottie.prototype;
  dart.addTypeTests(file_provider.FileLottie);
  dart.addTypeCaches(file_provider.FileLottie);
  dart.setMethodSignature(file_provider.FileLottie, () => ({
    __proto__: dart.getMethods(file_provider.FileLottie.__proto__),
    load: dart.fnType(async.Future$(composition$.LottieComposition), []),
    [_loadImage$0]: dart.fnType(async.Future$(dart.nullable(ui.Image)), [composition$.LottieComposition, lottie_image_asset.LottieImageAsset]),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(file_provider.FileLottie, I[6]);
  dart.setFieldSignature(file_provider.FileLottie, () => ({
    __proto__: dart.getFields(file_provider.FileLottie.__proto__),
    file: dart.finalFieldType(core.Object)
  }));
  dart.defineExtensionMethods(file_provider.FileLottie, ['_equals', 'toString']);
  dart.defineExtensionAccessors(file_provider.FileLottie, ['hashCode']);
  var maximumSize$ = dart.privateName(lottie_provider, "LottieCache.maximumSize");
  var _cache = dart.privateName(lottie_provider, "_cache");
  var _checkCacheSize = dart.privateName(lottie_provider, "_checkCacheSize");
  lottie_provider.LottieCache = class LottieCache extends core.Object {
    get maximumSize() {
      return this[maximumSize$];
    }
    set maximumSize(value) {
      super.maximumSize = value;
    }
    static ['_#new#tearOff'](opts) {
      let maximumSize = opts && 'maximumSize' in opts ? opts.maximumSize : null;
      return new lottie_provider.LottieCache.new({maximumSize: maximumSize});
    }
    putIfAbsent(key, load) {
      let composition = this[_cache][$_get](key);
      if (composition != null) {
        this[_cache][$remove](key);
      } else {
        composition = load();
      }
      this[_cache][$_set](key, composition);
      this[_checkCacheSize]();
      return composition;
    }
    [_checkCacheSize]() {
      while (this[_cache][$length] > this.maximumSize) {
        this[_cache][$remove](this[_cache][$keys][$first]);
      }
    }
    clear() {
      this[_cache][$clear]();
    }
  };
  (lottie_provider.LottieCache.new = function(opts) {
    let t0;
    let maximumSize = opts && 'maximumSize' in opts ? opts.maximumSize : null;
    this[_cache] = new (T$.IdentityMapOfString$FutureOfLottieComposition()).new();
    this[maximumSize$] = (t0 = maximumSize, t0 == null ? 1000 : t0);
    ;
  }).prototype = lottie_provider.LottieCache.prototype;
  dart.addTypeTests(lottie_provider.LottieCache);
  dart.addTypeCaches(lottie_provider.LottieCache);
  dart.setMethodSignature(lottie_provider.LottieCache, () => ({
    __proto__: dart.getMethods(lottie_provider.LottieCache.__proto__),
    putIfAbsent: dart.fnType(async.Future$(composition$.LottieComposition), [core.String, dart.fnType(async.Future$(composition$.LottieComposition), [])]),
    [_checkCacheSize]: dart.fnType(dart.void, []),
    clear: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(lottie_provider.LottieCache, I[3]);
  dart.setFieldSignature(lottie_provider.LottieCache, () => ({
    __proto__: dart.getFields(lottie_provider.LottieCache.__proto__),
    maximumSize: dart.finalFieldType(core.int),
    [_cache]: dart.finalFieldType(core.Map$(core.String, async.Future$(composition$.LottieComposition)))
  }));
  dart.defineLazy(lottie_provider, {
    /*lottie_provider.sharedLottieCache*/get sharedLottieCache() {
      return new lottie_provider.LottieCache.new();
    }
  }, false);
  var assetName$ = dart.privateName(asset_provider, "AssetLottie.assetName");
  var bundle$ = dart.privateName(asset_provider, "AssetLottie.bundle");
  var $package$ = dart.privateName(asset_provider, "AssetLottie.package");
  var _loadImage$1 = dart.privateName(asset_provider, "_loadImage");
  asset_provider.AssetLottie = class AssetLottie extends lottie_provider.LottieProvider {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[$package$];
    }
    set package(value) {
      super.package = value;
    }
    static ['_#new#tearOff'](assetName, opts) {
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      return new asset_provider.AssetLottie.new(assetName, {bundle: bundle, package: $package, imageProviderFactory: imageProviderFactory});
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + this.assetName;
    }
    load() {
      return async.async(composition$.LottieComposition, (function* load() {
        let cacheKey = "asset-" + this.keyName + "-" + dart.str(this.bundle);
        return lottie_provider.sharedLottieCache.putIfAbsent(cacheKey, dart.fn(() => async.async(composition$.LottieComposition, (function*() {
          let t0, t0$;
          let chosenBundle = (t0 = this.bundle, t0 == null ? asset_bundle.rootBundle : t0);
          let data = (yield chosenBundle.load(this.keyName));
          let composition = (yield composition$.LottieComposition.fromByteData(data, {name: path.url.basenameWithoutExtension(this.keyName), imageProviderFactory: this.imageProviderFactory}));
          for (let image of composition.images[$values]) {
            t0$ = image;
            t0$.loadedImage == null ? t0$.loadedImage = (yield this[_loadImage$1](composition, image)) : null;
          }
          return composition;
        }).bind(this)), T$.VoidToFutureOfLottieComposition()));
      }).bind(this));
    }
    [_loadImage$1](composition, lottieImage) {
      let imageProvider = this.getImageProvider(lottieImage);
      if (imageProvider == null) {
        let imageAssetPath = path.url.join(path.dirname(this.assetName), lottieImage.dirName, lottieImage.fileName);
        imageProvider = new image_resolution.AssetImage.new(imageAssetPath, {bundle: this.bundle, package: this.package});
      }
      return load_image.loadImage(composition, lottieImage, imageProvider);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.runtimeType(other)._equals(this[$runtimeType])) return false;
      return asset_provider.AssetLottie.is(other) && other.keyName === this.keyName && dart.equals(other.bundle, this.bundle);
    }
    get hashCode() {
      return core.Object.hash(this.keyName, this.bundle);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + this.keyName + "\")";
    }
  };
  (asset_provider.AssetLottie.new = function(assetName, opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    this[assetName$] = assetName;
    this[bundle$] = bundle;
    this[$package$] = $package;
    asset_provider.AssetLottie.__proto__.new.call(this, {imageProviderFactory: imageProviderFactory});
    ;
  }).prototype = asset_provider.AssetLottie.prototype;
  dart.addTypeTests(asset_provider.AssetLottie);
  dart.addTypeCaches(asset_provider.AssetLottie);
  dart.setMethodSignature(asset_provider.AssetLottie, () => ({
    __proto__: dart.getMethods(asset_provider.AssetLottie.__proto__),
    load: dart.fnType(async.Future$(composition$.LottieComposition), []),
    [_loadImage$1]: dart.fnType(async.Future$(dart.nullable(ui.Image)), [composition$.LottieComposition, lottie_image_asset.LottieImageAsset]),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setGetterSignature(asset_provider.AssetLottie, () => ({
    __proto__: dart.getGetters(asset_provider.AssetLottie.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(asset_provider.AssetLottie, I[7]);
  dart.setFieldSignature(asset_provider.AssetLottie, () => ({
    __proto__: dart.getFields(asset_provider.AssetLottie.__proto__),
    assetName: dart.finalFieldType(core.String),
    bundle: dart.finalFieldType(dart.nullable(asset_bundle.AssetBundle)),
    package: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(asset_provider.AssetLottie, ['_equals', 'toString']);
  dart.defineExtensionAccessors(asset_provider.AssetLottie, ['hashCode']);
  var lottie$0 = dart.privateName(lottie_builder, "LottieBuilder.lottie");
  var onLoaded$ = dart.privateName(lottie_builder, "LottieBuilder.onLoaded");
  var controller$ = dart.privateName(lottie_builder, "LottieBuilder.controller");
  var frameRate$0 = dart.privateName(lottie_builder, "LottieBuilder.frameRate");
  var animate$ = dart.privateName(lottie_builder, "LottieBuilder.animate");
  var repeat$ = dart.privateName(lottie_builder, "LottieBuilder.repeat");
  var reverse$ = dart.privateName(lottie_builder, "LottieBuilder.reverse");
  var delegates$0 = dart.privateName(lottie_builder, "LottieBuilder.delegates");
  var options$0 = dart.privateName(lottie_builder, "LottieBuilder.options");
  var frameBuilder$ = dart.privateName(lottie_builder, "LottieBuilder.frameBuilder");
  var width$0 = dart.privateName(lottie_builder, "LottieBuilder.width");
  var height$0 = dart.privateName(lottie_builder, "LottieBuilder.height");
  var fit$0 = dart.privateName(lottie_builder, "LottieBuilder.fit");
  var alignment$1 = dart.privateName(lottie_builder, "LottieBuilder.alignment");
  var addRepaintBoundary$ = dart.privateName(lottie_builder, "LottieBuilder.addRepaintBoundary");
  var filterQuality$0 = dart.privateName(lottie_builder, "LottieBuilder.filterQuality");
  var onWarning$ = dart.privateName(lottie_builder, "LottieBuilder.onWarning");
  var errorBuilder$ = dart.privateName(lottie_builder, "LottieBuilder.errorBuilder");
  lottie_builder.LottieBuilder = class LottieBuilder extends framework.StatefulWidget {
    get lottie() {
      return this[lottie$0];
    }
    set lottie(value) {
      super.lottie = value;
    }
    get onLoaded() {
      return this[onLoaded$];
    }
    set onLoaded(value) {
      super.onLoaded = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get frameRate() {
      return this[frameRate$0];
    }
    set frameRate(value) {
      super.frameRate = value;
    }
    get animate() {
      return this[animate$];
    }
    set animate(value) {
      super.animate = value;
    }
    get repeat() {
      return this[repeat$];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get delegates() {
      return this[delegates$0];
    }
    set delegates(value) {
      super.delegates = value;
    }
    get options() {
      return this[options$0];
    }
    set options(value) {
      super.options = value;
    }
    get frameBuilder() {
      return this[frameBuilder$];
    }
    set frameBuilder(value) {
      super.frameBuilder = value;
    }
    get width() {
      return this[width$0];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    get fit() {
      return this[fit$0];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$1];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get addRepaintBoundary() {
      return this[addRepaintBoundary$];
    }
    set addRepaintBoundary(value) {
      super.addRepaintBoundary = value;
    }
    get filterQuality() {
      return this[filterQuality$0];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    get onWarning() {
      return this[onWarning$];
    }
    set onWarning(value) {
      super.onWarning = value;
    }
    get errorBuilder() {
      return this[errorBuilder$];
    }
    set errorBuilder(value) {
      super.errorBuilder = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let lottie = opts && 'lottie' in opts ? opts.lottie : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.new({key: key, lottie: lottie, controller: controller, frameRate: frameRate, animate: animate, reverse: reverse, repeat: repeat, delegates: delegates, options: options, onLoaded: onLoaded, frameBuilder: frameBuilder, errorBuilder: errorBuilder, width: width, height: height, fit: fit, alignment: alignment, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    static ['_#network#tearOff'](src, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.network(src, {headers: headers, controller: controller, frameRate: frameRate, animate: animate, reverse: reverse, repeat: repeat, delegates: delegates, options: options, imageProviderFactory: imageProviderFactory, onLoaded: onLoaded, key: key, frameBuilder: frameBuilder, errorBuilder: errorBuilder, width: width, height: height, fit: fit, alignment: alignment, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    static ['_#file#tearOff'](file, opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.file(file, {controller: controller, frameRate: frameRate, animate: animate, reverse: reverse, repeat: repeat, delegates: delegates, options: options, imageProviderFactory: imageProviderFactory, onLoaded: onLoaded, key: key, frameBuilder: frameBuilder, errorBuilder: errorBuilder, width: width, height: height, fit: fit, alignment: alignment, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    static ['_#asset#tearOff'](name, opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.asset(name, {controller: controller, frameRate: frameRate, animate: animate, reverse: reverse, repeat: repeat, delegates: delegates, options: options, imageProviderFactory: imageProviderFactory, onLoaded: onLoaded, key: key, bundle: bundle, frameBuilder: frameBuilder, errorBuilder: errorBuilder, width: width, height: height, fit: fit, alignment: alignment, package: $package, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    static ['_#memory#tearOff'](bytes, opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.memory(bytes, {controller: controller, frameRate: frameRate, animate: animate, reverse: reverse, repeat: repeat, delegates: delegates, options: options, imageProviderFactory: imageProviderFactory, onLoaded: onLoaded, errorBuilder: errorBuilder, key: key, frameBuilder: frameBuilder, width: width, height: height, fit: fit, alignment: alignment, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
    createState() {
      return new lottie_builder._LottieBuilderState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLottieProvider()).new("lottie", this.lottie));
      properties.add(new (T$.DiagnosticsPropertyOfFunction()).new("frameBuilder", this.frameBuilder));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
      properties.add(new (T$.EnumPropertyOfBoxFit()).new("fit", this.fit, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {defaultValue: null}));
    }
  };
  (lottie_builder.LottieBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let lottie = opts && 'lottie' in opts ? opts.lottie : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : null;
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
    let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
    let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[lottie$0] = lottie;
    this[controller$] = controller;
    this[frameRate$0] = frameRate;
    this[animate$] = animate;
    this[reverse$] = reverse;
    this[repeat$] = repeat;
    this[delegates$0] = delegates;
    this[options$0] = options;
    this[onLoaded$] = onLoaded;
    this[frameBuilder$] = frameBuilder;
    this[errorBuilder$] = errorBuilder;
    this[width$0] = width;
    this[height$0] = height;
    this[fit$0] = fit;
    this[alignment$1] = alignment;
    this[addRepaintBoundary$] = addRepaintBoundary;
    this[filterQuality$0] = filterQuality;
    this[onWarning$] = onWarning;
    lottie_builder.LottieBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = lottie_builder.LottieBuilder.prototype;
  (lottie_builder.LottieBuilder.network = function(src, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : null;
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
    let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[frameRate$0] = frameRate;
    this[animate$] = animate;
    this[reverse$] = reverse;
    this[repeat$] = repeat;
    this[delegates$0] = delegates;
    this[options$0] = options;
    this[onLoaded$] = onLoaded;
    this[frameBuilder$] = frameBuilder;
    this[errorBuilder$] = errorBuilder;
    this[width$0] = width;
    this[height$0] = height;
    this[fit$0] = fit;
    this[alignment$1] = alignment;
    this[addRepaintBoundary$] = addRepaintBoundary;
    this[filterQuality$0] = filterQuality;
    this[onWarning$] = onWarning;
    this[lottie$0] = new network_provider.NetworkLottie.new(src, {headers: headers, imageProviderFactory: imageProviderFactory});
    lottie_builder.LottieBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = lottie_builder.LottieBuilder.prototype;
  (lottie_builder.LottieBuilder.file = function(file, opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : null;
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
    let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[frameRate$0] = frameRate;
    this[animate$] = animate;
    this[reverse$] = reverse;
    this[repeat$] = repeat;
    this[delegates$0] = delegates;
    this[options$0] = options;
    this[onLoaded$] = onLoaded;
    this[frameBuilder$] = frameBuilder;
    this[errorBuilder$] = errorBuilder;
    this[width$0] = width;
    this[height$0] = height;
    this[fit$0] = fit;
    this[alignment$1] = alignment;
    this[addRepaintBoundary$] = addRepaintBoundary;
    this[filterQuality$0] = filterQuality;
    this[onWarning$] = onWarning;
    this[lottie$0] = new file_provider.FileLottie.new(file, {imageProviderFactory: imageProviderFactory});
    lottie_builder.LottieBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = lottie_builder.LottieBuilder.prototype;
  (lottie_builder.LottieBuilder.asset = function(name, opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : null;
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
    let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[frameRate$0] = frameRate;
    this[animate$] = animate;
    this[reverse$] = reverse;
    this[repeat$] = repeat;
    this[delegates$0] = delegates;
    this[options$0] = options;
    this[onLoaded$] = onLoaded;
    this[frameBuilder$] = frameBuilder;
    this[errorBuilder$] = errorBuilder;
    this[width$0] = width;
    this[height$0] = height;
    this[fit$0] = fit;
    this[alignment$1] = alignment;
    this[addRepaintBoundary$] = addRepaintBoundary;
    this[filterQuality$0] = filterQuality;
    this[onWarning$] = onWarning;
    this[lottie$0] = new asset_provider.AssetLottie.new(name, {bundle: bundle, package: $package, imageProviderFactory: imageProviderFactory});
    lottie_builder.LottieBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = lottie_builder.LottieBuilder.prototype;
  (lottie_builder.LottieBuilder.memory = function(bytes, opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : null;
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
    let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
    let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[frameRate$0] = frameRate;
    this[animate$] = animate;
    this[reverse$] = reverse;
    this[repeat$] = repeat;
    this[delegates$0] = delegates;
    this[options$0] = options;
    this[onLoaded$] = onLoaded;
    this[errorBuilder$] = errorBuilder;
    this[frameBuilder$] = frameBuilder;
    this[width$0] = width;
    this[height$0] = height;
    this[fit$0] = fit;
    this[alignment$1] = alignment;
    this[addRepaintBoundary$] = addRepaintBoundary;
    this[filterQuality$0] = filterQuality;
    this[onWarning$] = onWarning;
    this[lottie$0] = new memory_provider.MemoryLottie.new(bytes, {imageProviderFactory: imageProviderFactory});
    lottie_builder.LottieBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = lottie_builder.LottieBuilder.prototype;
  dart.addTypeTests(lottie_builder.LottieBuilder);
  dart.addTypeCaches(lottie_builder.LottieBuilder);
  dart.setMethodSignature(lottie_builder.LottieBuilder, () => ({
    __proto__: dart.getMethods(lottie_builder.LottieBuilder.__proto__),
    createState: dart.fnType(framework.State$(lottie_builder.LottieBuilder), [])
  }));
  dart.setLibraryUri(lottie_builder.LottieBuilder, I[8]);
  dart.setFieldSignature(lottie_builder.LottieBuilder, () => ({
    __proto__: dart.getFields(lottie_builder.LottieBuilder.__proto__),
    lottie: dart.finalFieldType(lottie_provider.LottieProvider),
    onLoaded: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [composition$.LottieComposition]))),
    controller: dart.finalFieldType(dart.nullable(animation.Animation$(core.double))),
    frameRate: dart.finalFieldType(dart.nullable(frame_rate.FrameRate)),
    animate: dart.finalFieldType(dart.nullable(core.bool)),
    repeat: dart.finalFieldType(dart.nullable(core.bool)),
    reverse: dart.finalFieldType(dart.nullable(core.bool)),
    delegates: dart.finalFieldType(dart.nullable(lottie_delegates.LottieDelegates)),
    options: dart.finalFieldType(dart.nullable(options.LottieOptions)),
    frameBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, dart.nullable(composition$.LottieComposition)]))),
    width: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double)),
    fit: dart.finalFieldType(dart.nullable(box_fit.BoxFit)),
    alignment: dart.finalFieldType(dart.nullable(alignment$.AlignmentGeometry)),
    addRepaintBoundary: dart.finalFieldType(dart.nullable(core.bool)),
    filterQuality: dart.finalFieldType(dart.nullable(ui.FilterQuality)),
    onWarning: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    errorBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.Object, dart.nullable(core.StackTrace)])))
  }));
  var _loadingFuture = dart.privateName(lottie_builder, "_loadingFuture");
  var _load = dart.privateName(lottie_builder, "_load");
  lottie_builder._LottieBuilderState = class _LottieBuilderState extends framework.State$(lottie_builder.LottieBuilder) {
    initState() {
      super.initState();
      this[_load]();
    }
    didUpdateWidget(oldWidget) {
      lottie_builder.LottieBuilder.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!oldWidget.lottie[$_equals](this.widget.lottie)) {
        this[_load]();
      }
    }
    [_load]() {
      let provider = this.widget.lottie;
      this[_loadingFuture] = this.widget.lottie.load().then(composition$.LottieComposition, dart.fn(composition => {
        let t0;
        if (this.mounted && this.widget.lottie[$_equals](provider)) {
          let onWarning = this.widget.onWarning;
          composition.onWarning = onWarning;
          if (onWarning != null) {
            for (let warning of composition.warnings) {
              onWarning(warning);
            }
          }
          t0 = this.widget.onLoaded;
          t0 == null ? null : t0(composition);
        }
        return composition;
      }, T$.LottieCompositionToLottieComposition()));
    }
    build(context) {
      return new (T$.FutureBuilderOfLottieComposition()).new({future: this[_loadingFuture], builder: dart.fn((context, snapshot) => {
          if (snapshot.hasError) {
            let errorBuilder = this.widget.errorBuilder;
            if (errorBuilder != null) {
              return errorBuilder(context, dart.nullCheck(snapshot.error), snapshot.stackTrace);
            } else {
              return new framework.ErrorWidget.new(dart.nullCheck(snapshot.error), {$creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
            }
          }
          let composition = snapshot.data;
          let result = new lottie.Lottie.new({composition: composition, controller: this.widget.controller, frameRate: this.widget.frameRate, animate: this.widget.animate, reverse: this.widget.reverse, repeat: this.widget.repeat, delegates: this.widget.delegates, options: this.widget.options, width: this.widget.width, height: this.widget.height, fit: this.widget.fit, alignment: this.widget.alignment, addRepaintBoundary: this.widget.addRepaintBoundary, filterQuality: this.widget.filterQuality, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
          if (this.widget.frameBuilder != null) {
            result = dart.nullCheck(this.widget.frameBuilder)(context, result, composition);
          }
          return result;
        }, T$.BuildContextAndAsyncSnapshotOfLottieCompositionToWidget()), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T$.DiagnosticsPropertyOfFutureOfLottieComposition()).new("loadingFuture", this[_loadingFuture]));
    }
    static ['_#new#tearOff']() {
      return new lottie_builder._LottieBuilderState.new();
    }
  };
  (lottie_builder._LottieBuilderState.new = function() {
    this[_loadingFuture] = null;
    lottie_builder._LottieBuilderState.__proto__.new.call(this);
    ;
  }).prototype = lottie_builder._LottieBuilderState.prototype;
  dart.addTypeTests(lottie_builder._LottieBuilderState);
  dart.addTypeCaches(lottie_builder._LottieBuilderState);
  dart.setMethodSignature(lottie_builder._LottieBuilderState, () => ({
    __proto__: dart.getMethods(lottie_builder._LottieBuilderState.__proto__),
    [_load]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(lottie_builder._LottieBuilderState, I[8]);
  dart.setFieldSignature(lottie_builder._LottieBuilderState, () => ({
    __proto__: dart.getFields(lottie_builder._LottieBuilderState.__proto__),
    [_loadingFuture]: dart.fieldType(dart.nullable(async.Future$(composition$.LottieComposition)))
  }));
  var composition$1 = dart.privateName(lottie, "Lottie.composition");
  var controller$0 = dart.privateName(lottie, "Lottie.controller");
  var frameRate$1 = dart.privateName(lottie, "Lottie.frameRate");
  var animate$0 = dart.privateName(lottie, "Lottie.animate");
  var repeat$0 = dart.privateName(lottie, "Lottie.repeat");
  var reverse$0 = dart.privateName(lottie, "Lottie.reverse");
  var width$1 = dart.privateName(lottie, "Lottie.width");
  var height$1 = dart.privateName(lottie, "Lottie.height");
  var fit$1 = dart.privateName(lottie, "Lottie.fit");
  var alignment$2 = dart.privateName(lottie, "Lottie.alignment");
  var delegates$1 = dart.privateName(lottie, "Lottie.delegates");
  var options$1 = dart.privateName(lottie, "Lottie.options");
  var addRepaintBoundary$0 = dart.privateName(lottie, "Lottie.addRepaintBoundary");
  var filterQuality$1 = dart.privateName(lottie, "Lottie.filterQuality");
  lottie.Lottie = class Lottie extends framework.StatefulWidget {
    get composition() {
      return this[composition$1];
    }
    set composition(value) {
      super.composition = value;
    }
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    get frameRate() {
      return this[frameRate$1];
    }
    set frameRate(value) {
      super.frameRate = value;
    }
    get animate() {
      return this[animate$0];
    }
    set animate(value) {
      super.animate = value;
    }
    get repeat() {
      return this[repeat$0];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get reverse() {
      return this[reverse$0];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get width() {
      return this[width$1];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$1];
    }
    set height(value) {
      super.height = value;
    }
    get fit() {
      return this[fit$1];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$2];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get delegates() {
      return this[delegates$1];
    }
    set delegates(value) {
      super.delegates = value;
    }
    get options() {
      return this[options$1];
    }
    set options(value) {
      super.options = value;
    }
    get addRepaintBoundary() {
      return this[addRepaintBoundary$0];
    }
    set addRepaintBoundary(value) {
      super.addRepaintBoundary = value;
    }
    get filterQuality() {
      return this[filterQuality$1];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let composition = opts && 'composition' in opts ? opts.composition : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      return new lottie.Lottie.new({key: key, composition: composition, controller: controller, width: width, height: height, alignment: alignment, fit: fit, animate: animate, frameRate: frameRate, repeat: repeat, reverse: reverse, delegates: delegates, options: options, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    static asset(name, opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.asset(name, {controller: controller, frameRate: frameRate, animate: animate, repeat: repeat, reverse: reverse, delegates: delegates, options: options, imageProviderFactory: imageProviderFactory, onLoaded: onLoaded, key: key, bundle: bundle, frameBuilder: frameBuilder, errorBuilder: errorBuilder, width: width, height: height, fit: fit, alignment: alignment, package: $package, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    static file(file, opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.file(file, {controller: controller, frameRate: frameRate, animate: animate, repeat: repeat, reverse: reverse, delegates: delegates, options: options, imageProviderFactory: imageProviderFactory, onLoaded: onLoaded, key: key, frameBuilder: frameBuilder, errorBuilder: errorBuilder, width: width, height: height, fit: fit, alignment: alignment, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    static memory(bytes, opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.memory(bytes, {controller: controller, frameRate: frameRate, animate: animate, repeat: repeat, reverse: reverse, delegates: delegates, options: options, imageProviderFactory: imageProviderFactory, onLoaded: onLoaded, key: key, frameBuilder: frameBuilder, errorBuilder: errorBuilder, width: width, height: height, fit: fit, alignment: alignment, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    static network(url, opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let animate = opts && 'animate' in opts ? opts.animate : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      let onLoaded = opts && 'onLoaded' in opts ? opts.onLoaded : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let onWarning = opts && 'onWarning' in opts ? opts.onWarning : null;
      return new lottie_builder.LottieBuilder.network(url, {controller: controller, frameRate: frameRate, animate: animate, repeat: repeat, reverse: reverse, delegates: delegates, options: options, imageProviderFactory: imageProviderFactory, onLoaded: onLoaded, key: key, frameBuilder: frameBuilder, errorBuilder: errorBuilder, width: width, height: height, fit: fit, alignment: alignment, addRepaintBoundary: addRepaintBoundary, filterQuality: filterQuality, onWarning: onWarning, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    static get traceEnabled() {
      return l.L.traceEnabled;
    }
    static set traceEnabled(enabled) {
      l.L.traceEnabled = enabled;
    }
    createState() {
      return new lottie._LottieState.new();
    }
  };
  (lottie.Lottie.new = function(opts) {
    let t0, t0$, t0$0, t0$1;
    let key = opts && 'key' in opts ? opts.key : null;
    let composition = opts && 'composition' in opts ? opts.composition : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let animate = opts && 'animate' in opts ? opts.animate : null;
    let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : null;
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let addRepaintBoundary = opts && 'addRepaintBoundary' in opts ? opts.addRepaintBoundary : null;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[composition$1] = composition;
    this[controller$0] = controller;
    this[width$1] = width;
    this[height$1] = height;
    this[alignment$2] = alignment;
    this[fit$1] = fit;
    this[frameRate$1] = frameRate;
    this[delegates$1] = delegates;
    this[options$1] = options;
    this[filterQuality$1] = filterQuality;
    this[animate$0] = (t0 = animate, t0 == null ? true : t0);
    this[reverse$0] = (t0$ = reverse, t0$ == null ? false : t0$);
    this[repeat$0] = (t0$0 = repeat, t0$0 == null ? true : t0$0);
    this[addRepaintBoundary$0] = (t0$1 = addRepaintBoundary, t0$1 == null ? true : t0$1);
    lottie.Lottie.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = lottie.Lottie.prototype;
  dart.addTypeTests(lottie.Lottie);
  dart.addTypeCaches(lottie.Lottie);
  dart.setMethodSignature(lottie.Lottie, () => ({
    __proto__: dart.getMethods(lottie.Lottie.__proto__),
    createState: dart.fnType(framework.State$(lottie.Lottie), [])
  }));
  dart.setStaticMethodSignature(lottie.Lottie, () => ['asset', 'file', 'memory', 'network']);
  dart.setStaticGetterSignature(lottie.Lottie, () => ['traceEnabled']);
  dart.setStaticSetterSignature(lottie.Lottie, () => ['traceEnabled']);
  dart.setLibraryUri(lottie.Lottie, I[9]);
  dart.setFieldSignature(lottie.Lottie, () => ({
    __proto__: dart.getFields(lottie.Lottie.__proto__),
    composition: dart.finalFieldType(dart.nullable(composition$.LottieComposition)),
    controller: dart.finalFieldType(dart.nullable(animation.Animation$(core.double))),
    frameRate: dart.finalFieldType(dart.nullable(frame_rate.FrameRate)),
    animate: dart.finalFieldType(core.bool),
    repeat: dart.finalFieldType(core.bool),
    reverse: dart.finalFieldType(core.bool),
    width: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double)),
    fit: dart.finalFieldType(dart.nullable(box_fit.BoxFit)),
    alignment: dart.finalFieldType(dart.nullable(alignment$.AlignmentGeometry)),
    delegates: dart.finalFieldType(dart.nullable(lottie_delegates.LottieDelegates)),
    options: dart.finalFieldType(dart.nullable(options.LottieOptions)),
    addRepaintBoundary: dart.finalFieldType(core.bool),
    filterQuality: dart.finalFieldType(dart.nullable(ui.FilterQuality))
  }));
  var ___LottieState__autoAnimation = dart.privateName(lottie, "_#_LottieState#_autoAnimation");
  var _autoAnimation = dart.privateName(lottie, "_autoAnimation");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _updateAutoAnimation = dart.privateName(lottie, "_updateAutoAnimation");
  var _progressAnimation = dart.privateName(lottie, "_progressAnimation");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(lottie.Lottie) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(lottie.Lottie)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(lottie.Lottie));
  lottie._LottieState = class _LottieState extends State_TickerProviderStateMixin$36 {
    get [_autoAnimation]() {
      let t0;
      t0 = this[___LottieState__autoAnimation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_autoAnimation")) : t0;
    }
    set [_autoAnimation](library$32package$58lottie$47src$47lottie$46dart$58$58_autoAnimation$35param) {
      this[___LottieState__autoAnimation] = library$32package$58lottie$47src$47lottie$46dart$58$58_autoAnimation$35param;
    }
    initState() {
      let t0, t0$;
      super.initState();
      this[_autoAnimation] = new animation_controller.AnimationController.new({vsync: this, duration: (t0$ = (t0 = this.widget.composition, t0 == null ? null : t0.duration), t0$ == null ? C[15] || CT.C15 : t0$)});
      this[_updateAutoAnimation]();
    }
    didUpdateWidget(oldWidget) {
      let t0, t0$;
      lottie.Lottie.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      this[_autoAnimation].duration = (t0$ = (t0 = this.widget.composition, t0 == null ? null : t0.duration), t0$ == null ? C[15] || CT.C15 : t0$);
      this[_updateAutoAnimation]();
    }
    [_updateAutoAnimation]() {
      this[_autoAnimation].stop();
      if (this.widget.animate && this.widget.controller == null) {
        if (this.widget.repeat) {
          this[_autoAnimation].repeat({reverse: this.widget.reverse});
        } else {
          this[_autoAnimation].forward();
        }
      }
    }
    dispose() {
      this[_autoAnimation].dispose();
      super.dispose();
    }
    get [_progressAnimation]() {
      let t0;
      t0 = this.widget.controller;
      return t0 == null ? this[_autoAnimation] : t0;
    }
    build(context) {
      let child = new transitions.AnimatedBuilder.new({animation: this[_progressAnimation], builder: dart.fn((context, _) => new raw_lottie.RawLottie.new({composition: this.widget.composition, delegates: this.widget.delegates, options: this.widget.options, progress: this[_progressAnimation].value, frameRate: this.widget.frameRate, width: this.widget.width, height: this.widget.height, fit: this.widget.fit, alignment: this.widget.alignment, filterQuality: this.widget.filterQuality, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), T$.BuildContextAndWidgetNToRawLottie()), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
      if (this.widget.addRepaintBoundary) {
        child = new basic.RepaintBoundary.new({child: child, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
      }
      return child;
    }
    static ['_#new#tearOff']() {
      return new lottie._LottieState.new();
    }
  };
  (lottie._LottieState.new = function() {
    this[___LottieState__autoAnimation] = null;
    lottie._LottieState.__proto__.new.call(this);
    ;
  }).prototype = lottie._LottieState.prototype;
  dart.addTypeTests(lottie._LottieState);
  dart.addTypeCaches(lottie._LottieState);
  dart.setMethodSignature(lottie._LottieState, () => ({
    __proto__: dart.getMethods(lottie._LottieState.__proto__),
    [_updateAutoAnimation]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(lottie._LottieState, () => ({
    __proto__: dart.getGetters(lottie._LottieState.__proto__),
    [_autoAnimation]: animation_controller.AnimationController,
    [_progressAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(lottie._LottieState, () => ({
    __proto__: dart.getSetters(lottie._LottieState.__proto__),
    [_autoAnimation]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(lottie._LottieState, I[9]);
  dart.setFieldSignature(lottie._LottieState, () => ({
    __proto__: dart.getFields(lottie._LottieState.__proto__),
    [___LottieState__autoAnimation]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  load_image.loadImage = function loadImage(composition, lottieImage, provider) {
    let completer = T$.CompleterOfImageN().new();
    let imageStream = provider.resolve(image_provider.ImageConfiguration.empty);
    let listener = null;
    function listener$35get() {
      let t1;
      t1 = listener;
      return t1 == null ? dart.throw(new _internal.LateError.localNI("listener")) : t1;
    }
    dart.fn(listener$35get, T$.VoidToImageStreamListener());
    function listener$35set(listener$35param) {
      return listener = listener$35param;
    }
    dart.fn(listener$35set, T$.ImageStreamListenerTodynamic());
    listener$35set(new image_stream.ImageStreamListener.new(dart.fn((image, synchronousLoaded) => {
      imageStream.removeListener(listener$35get());
      completer.complete(image.image);
    }, T$.ImageInfoAndboolTovoid()), {onError: dart.fn((e, __) => {
        imageStream.removeListener(listener$35get());
        composition.addWarning("Failed to load image " + lottieImage.id + ": " + dart.str(e));
        completer.complete();
      }, T$.dynamicAndStackTraceNTovoid())}));
    imageStream.addListener(listener$35get());
    return completer.future;
  };
  load_image.fromDataUri = function fromDataUri(filePath) {
    if (filePath[$startsWith]("data:")) {
      return new image_provider.MemoryImage.new(dart.nullCheck(core.Uri.parse(filePath).data).contentAsBytes());
    }
    return null;
  };
  font_character_parser.FontCharacterParser = class FontCharacterParser extends core.Object {
    static ['_#_#tearOff']() {
      return new font_character_parser.FontCharacterParser.__();
    }
    static parse(reader, composition) {
      let t3, t3$;
      let character = "";
      let size = 0.0;
      let width = 0.0;
      let style = null;
      let fontFamily = null;
      let shapes = T$.JSArrayOfShapeGroup().of([]);
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(font_character_parser.FontCharacterParser._names)) {
          case 0:
            {
              character = reader.nextString();
              break;
            }
          case 1:
            {
              size = reader.nextDouble();
              break;
            }
          case 2:
            {
              width = reader.nextDouble();
              break;
            }
          case 3:
            {
              style = reader.nextString();
              break;
            }
          case 4:
            {
              fontFamily = reader.nextString();
              break;
            }
          case 5:
            {
              reader.beginObject();
              while (reader.hasNext()) {
                switch (reader.selectName(font_character_parser.FontCharacterParser._dataNames)) {
                  case 0:
                    {
                      reader.beginArray();
                      while (reader.hasNext()) {
                        shapes[$add](shape_group.ShapeGroup.as(dart.nullCheck(content_model_parser.ContentModelParser.parse(reader, composition))));
                      }
                      reader.endArray();
                      break;
                    }
                  default:
                    {
                      reader.skipName();
                      reader.skipValue();
                    }
                }
              }
              reader.endObject();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      return new font_character.FontCharacter.new({shapes: shapes, character: character, size: size, width: width, style: (t3 = style, t3 == null ? "" : t3), fontFamily: (t3$ = fontFamily, t3$ == null ? "" : t3$)});
    }
  };
  (font_character_parser.FontCharacterParser.__ = function() {
    ;
  }).prototype = font_character_parser.FontCharacterParser.prototype;
  dart.addTypeTests(font_character_parser.FontCharacterParser);
  dart.addTypeCaches(font_character_parser.FontCharacterParser);
  dart.setStaticMethodSignature(font_character_parser.FontCharacterParser, () => ['parse']);
  dart.setLibraryUri(font_character_parser.FontCharacterParser, I[10]);
  dart.setStaticFieldSignature(font_character_parser.FontCharacterParser, () => ['_names', '_dataNames']);
  dart.defineLazy(font_character_parser.FontCharacterParser, {
    /*font_character_parser.FontCharacterParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["ch", "size", "w", "style", "fFamily", "data"]));
    },
    /*font_character_parser.FontCharacterParser._dataNames*/get _dataNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["shapes"]));
    }
  }, false);
  lottie_composition_parser.LottieCompositionParser = class LottieCompositionParser extends core.Object {
    static parse(composition, reader) {
      let parameters = composition$.CompositionParameters.forComposition(composition);
      let scale = ui.window.devicePixelRatio;
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(lottie_composition_parser.LottieCompositionParser._names)) {
          case 0:
            {
              parameters.bounds.width = (reader.nextInt() * scale)[$round]();
              break;
            }
          case 1:
            {
              parameters.bounds.height = (reader.nextInt() * scale)[$round]();
              break;
            }
          case 2:
            {
              parameters.startFrame = reader.nextDouble();
              break;
            }
          case 3:
            {
              parameters.endFrame = reader.nextDouble() - 0.01;
              break;
            }
          case 4:
            {
              parameters.frameRate = reader.nextDouble();
              break;
            }
          case 5:
            {
              let version = reader.nextString();
              let versions = version[$split](".");
              let majorVersion = core.int.parse(versions[$_get](0));
              let minorVersion = core.int.parse(versions[$_get](1));
              let patchVersion = core.int.parse(versions[$_get](2));
              if (!misc.MiscUtils.isAtLeastVersion(majorVersion, minorVersion, patchVersion, 4, 4, 0)) {
                composition.addWarning("Lottie only supports bodymovin >= 4.4.0");
              }
              break;
            }
          case 6:
            {
              lottie_composition_parser.LottieCompositionParser._parseLayers(reader, composition, parameters.layers, parameters.layerMap);
              break;
            }
          case 7:
            {
              lottie_composition_parser.LottieCompositionParser._parseAssets(reader, composition, parameters.precomps, parameters.images);
              break;
            }
          case 8:
            {
              lottie_composition_parser.LottieCompositionParser._parseFonts(reader, parameters.fonts);
              break;
            }
          case 9:
            {
              lottie_composition_parser.LottieCompositionParser._parseChars(reader, composition, parameters.characters);
              break;
            }
          case 10:
            {
              lottie_composition_parser.LottieCompositionParser._parseMarkers(reader, composition, parameters.markers);
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      if (!(parameters.startFrame !== parameters.endFrame)) dart.assertFailed("startFrame == endFrame (" + dart.str(parameters) + ".startFrame)", I[11], 85, 12, "parameters.startFrame != parameters.endFrame");
      if (!(parameters.frameRate > 0)) dart.assertFailed("invalid framerate: " + dart.str(parameters.frameRate), I[11], 88, 9, "parameters.frameRate > 0");
      return composition;
    }
    static _parseLayers(reader, composition, layers, layerMap) {
      let imageCount = 0;
      reader.beginArray();
      while (reader.hasNext()) {
        let layer = layer_parser.LayerParser.parseJson(reader, composition);
        if (layer.layerType === layer$.LayerType.image) {
          imageCount = imageCount + 1;
        }
        layers[$add](layer);
        layerMap[$_set](layer.id, layer);
      }
      if (imageCount > 4) {
        composition.addWarning("You have " + dart.str(imageCount) + " images. Lottie should primarily be " + "used with shapes. If you are using Adobe Illustrator, convert the Illustrator layers" + " to shape layers.");
      }
      reader.endArray();
    }
    static _parseAssets(reader, composition, precomps, images) {
      let t6;
      reader.beginArray();
      while (reader.hasNext()) {
        let id = null;
        function id$35get() {
          let t4;
          t4 = id;
          return t4 == null ? dart.throw(new _internal.LateError.localNI("id")) : t4;
        }
        dart.fn(id$35get, T$.VoidToString());
        function id$35set(id$35param) {
          return id = id$35param;
        }
        dart.fn(id$35set, T$.StringTodynamic());
        let layers = T$.JSArrayOfLayer().of([]);
        let layerMap = new (T$.IdentityMapOfint$Layer()).new();
        let width = 0;
        let height = 0;
        let imageFileName = null;
        let relativeFolder = null;
        reader.beginObject();
        while (reader.hasNext()) {
          switch (reader.selectName(lottie_composition_parser.LottieCompositionParser._assetsNames)) {
            case 0:
              {
                id$35set(reader.nextString());
                break;
              }
            case 1:
              {
                reader.beginArray();
                while (reader.hasNext()) {
                  let layer = layer_parser.LayerParser.parseJson(reader, composition);
                  layerMap[$_set](layer.id, layer);
                  layers[$add](layer);
                }
                reader.endArray();
                break;
              }
            case 2:
              {
                width = reader.nextInt();
                break;
              }
            case 3:
              {
                height = reader.nextInt();
                break;
              }
            case 4:
              {
                imageFileName = reader.nextString();
                break;
              }
            case 5:
              {
                relativeFolder = reader.nextString();
                break;
              }
            default:
              {
                reader.skipName();
                reader.skipValue();
              }
          }
        }
        reader.endObject();
        if (imageFileName != null) {
          let image = new lottie_image_asset.LottieImageAsset.new({width: width, height: height, id: id$35get(), fileName: imageFileName, dirName: (t6 = relativeFolder, t6 == null ? "" : t6)});
          images[$_set](image.id, image);
        } else {
          precomps[$_set](id$35get(), layers);
        }
      }
      reader.endArray();
    }
    static _parseFonts(reader, fonts) {
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(lottie_composition_parser.LottieCompositionParser._fontNames)) {
          case 0:
            {
              reader.beginArray();
              while (reader.hasNext()) {
                let font = font_parser.FontParser.parse(reader);
                fonts[$_set](font.name, font);
              }
              reader.endArray();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
    }
    static _parseChars(reader, composition, characters) {
      reader.beginArray();
      while (reader.hasNext()) {
        let character = font_character_parser.FontCharacterParser.parse(reader, composition);
        characters[$_set](character.hashCode, character);
      }
      reader.endArray();
    }
    static _parseMarkers(reader, composition, markers) {
      let t6;
      reader.beginArray();
      while (reader.hasNext()) {
        let comment = null;
        let frame = 0.0;
        let durationFrames = 0.0;
        reader.beginObject();
        while (reader.hasNext()) {
          switch (reader.selectName(lottie_composition_parser.LottieCompositionParser._markerNames)) {
            case 0:
              {
                comment = reader.nextString();
                break;
              }
            case 1:
              {
                frame = reader.nextDouble();
                break;
              }
            case 2:
              {
                durationFrames = reader.nextDouble();
                break;
              }
            default:
              {
                reader.skipName();
                reader.skipValue();
              }
          }
        }
        reader.endObject();
        markers[$add](new marker.Marker.new(composition, (t6 = comment, t6 == null ? "" : t6), {startFrame: frame, durationFrames: durationFrames}));
      }
      reader.endArray();
    }
    static ['_#new#tearOff']() {
      return new lottie_composition_parser.LottieCompositionParser.new();
    }
  };
  (lottie_composition_parser.LottieCompositionParser.new = function() {
    ;
  }).prototype = lottie_composition_parser.LottieCompositionParser.prototype;
  dart.addTypeTests(lottie_composition_parser.LottieCompositionParser);
  dart.addTypeCaches(lottie_composition_parser.LottieCompositionParser);
  dart.setStaticMethodSignature(lottie_composition_parser.LottieCompositionParser, () => ['parse', '_parseLayers', '_parseAssets', '_parseFonts', '_parseChars', '_parseMarkers']);
  dart.setLibraryUri(lottie_composition_parser.LottieCompositionParser, I[12]);
  dart.setStaticFieldSignature(lottie_composition_parser.LottieCompositionParser, () => ['_names', '_assetsNames', '_fontNames', '_markerNames']);
  dart.defineLazy(lottie_composition_parser.LottieCompositionParser, {
    /*lottie_composition_parser.LottieCompositionParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["w", "h", "ip", "op", "fr", "v", "layers", "assets", "fonts", "chars", "markers"]));
    },
    /*lottie_composition_parser.LottieCompositionParser._assetsNames*/get _assetsNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["id", "layers", "w", "h", "p", "u"]));
    },
    /*lottie_composition_parser.LottieCompositionParser._fontNames*/get _fontNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["list"]));
    },
    /*lottie_composition_parser.LottieCompositionParser._markerNames*/get _markerNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["cm", "tm", "dr"]));
    }
  }, false);
  var name$ = dart.privateName(marker, "Marker.name");
  var startFrame$ = dart.privateName(marker, "Marker.startFrame");
  var durationFrames$ = dart.privateName(marker, "Marker.durationFrames");
  var _composition$ = dart.privateName(marker, "_composition");
  marker.Marker = class Marker extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get startFrame() {
      return this[startFrame$];
    }
    set startFrame(value) {
      super.startFrame = value;
    }
    get durationFrames() {
      return this[durationFrames$];
    }
    set durationFrames(value) {
      super.durationFrames = value;
    }
    static ['_#new#tearOff'](_composition, name, opts) {
      let startFrame = opts && 'startFrame' in opts ? opts.startFrame : null;
      let durationFrames = opts && 'durationFrames' in opts ? opts.durationFrames : null;
      return new marker.Marker.new(_composition, name, {startFrame: startFrame, durationFrames: durationFrames});
    }
    matchesName(name) {
      return this.name[$trim]()[$toLowerCase]() === name[$toLowerCase]();
    }
    get start() {
      return (this.startFrame - this[_composition$].startFrame) / this[_composition$].durationFrames;
    }
    get end() {
      return (this.startFrame + this.durationFrames - this[_composition$].startFrame) / this[_composition$].durationFrames;
    }
  };
  (marker.Marker.new = function(_composition, name, opts) {
    let startFrame = opts && 'startFrame' in opts ? opts.startFrame : null;
    let durationFrames = opts && 'durationFrames' in opts ? opts.durationFrames : null;
    this[_composition$] = _composition;
    this[name$] = name;
    this[startFrame$] = startFrame;
    this[durationFrames$] = durationFrames;
    ;
  }).prototype = marker.Marker.prototype;
  dart.addTypeTests(marker.Marker);
  dart.addTypeCaches(marker.Marker);
  dart.setMethodSignature(marker.Marker, () => ({
    __proto__: dart.getMethods(marker.Marker.__proto__),
    matchesName: dart.fnType(core.bool, [core.String])
  }));
  dart.setGetterSignature(marker.Marker, () => ({
    __proto__: dart.getGetters(marker.Marker.__proto__),
    start: core.double,
    end: core.double
  }));
  dart.setLibraryUri(marker.Marker, I[13]);
  dart.setFieldSignature(marker.Marker, () => ({
    __proto__: dart.getFields(marker.Marker.__proto__),
    [_composition$]: dart.finalFieldType(composition$.LottieComposition),
    name: dart.finalFieldType(core.String),
    startFrame: dart.finalFieldType(core.double),
    durationFrames: dart.finalFieldType(core.double)
  }));
  mask_parser.MaskParser = class MaskParser extends core.Object {
    static ['_#_#tearOff']() {
      return new mask_parser.MaskParser.__();
    }
    static parse(reader, composition) {
      let maskMode = null;
      function maskMode$35get() {
        let t7;
        t7 = maskMode;
        return t7 == null ? dart.throw(new _internal.LateError.localNI("maskMode")) : t7;
      }
      dart.fn(maskMode$35get, T$.VoidToMaskMode());
      function maskMode$35set(maskMode$35param) {
        return maskMode = maskMode$35param;
      }
      dart.fn(maskMode$35set, T$.MaskModeTodynamic());
      let maskPath = null;
      function maskPath$35get() {
        let t10;
        t10 = maskPath;
        return t10 == null ? dart.throw(new _internal.LateError.localNI("maskPath")) : t10;
      }
      dart.fn(maskPath$35get, T$.VoidToAnimatableShapeValue());
      function maskPath$35set(maskPath$35param) {
        return maskPath = maskPath$35param;
      }
      dart.fn(maskPath$35set, T$.AnimatableShapeValueTodynamic());
      let opacity = null;
      function opacity$35get() {
        let t13;
        t13 = opacity;
        return t13 == null ? dart.throw(new _internal.LateError.localNI("opacity")) : t13;
      }
      dart.fn(opacity$35get, T$.VoidToAnimatableIntegerValue());
      function opacity$35set(opacity$35param) {
        return opacity = opacity$35param;
      }
      dart.fn(opacity$35set, T$.AnimatableIntegerValueTodynamic());
      let inverted = false;
      reader.beginObject();
      while (reader.hasNext()) {
        let mode = reader.nextName();
        switch (mode) {
          case "mode":
            {
              let modeName = reader.nextString();
              switch (modeName) {
                case "a":
                  {
                    maskMode$35set(mask.MaskMode.maskModeAdd);
                    break;
                  }
                case "s":
                  {
                    maskMode$35set(mask.MaskMode.maskModeSubstract);
                    break;
                  }
                case "n":
                  {
                    maskMode$35set(mask.MaskMode.maskModeNone);
                    break;
                  }
                case "i":
                  {
                    composition.addWarning("Animation contains intersect masks. They are not supported but will be treated like add masks.");
                    maskMode$35set(mask.MaskMode.maskModeIntersect);
                    break;
                  }
                default:
                  {
                    composition.addWarning("Unknown mask mode " + modeName + ". Defaulting to Add.");
                    maskMode$35set(mask.MaskMode.maskModeAdd);
                  }
              }
              break;
            }
          case "pt":
            {
              maskPath$35set(animatable_value_parser.AnimatableValueParser.parseShapeData(reader, composition));
              break;
            }
          case "o":
            {
              opacity$35set(animatable_value_parser.AnimatableValueParser.parseInteger(reader, composition));
              break;
            }
          case "inv":
            {
              inverted = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      return new mask.Mask.new({maskMode: maskMode$35get(), maskPath: maskPath$35get(), opacity: opacity$35get(), isInverted: inverted});
    }
  };
  (mask_parser.MaskParser.__ = function() {
    ;
  }).prototype = mask_parser.MaskParser.prototype;
  dart.addTypeTests(mask_parser.MaskParser);
  dart.addTypeCaches(mask_parser.MaskParser);
  dart.setStaticMethodSignature(mask_parser.MaskParser, () => ['parse']);
  dart.setLibraryUri(mask_parser.MaskParser, I[14]);
  var _color = dart.privateName(drop_shadow_effect_parser, "_color");
  var _opacity = dart.privateName(drop_shadow_effect_parser, "_opacity");
  var _direction = dart.privateName(drop_shadow_effect_parser, "_direction");
  var _distance = dart.privateName(drop_shadow_effect_parser, "_distance");
  var _radius = dart.privateName(drop_shadow_effect_parser, "_radius");
  var _maybeParseInnerEffect = dart.privateName(drop_shadow_effect_parser, "_maybeParseInnerEffect");
  drop_shadow_effect_parser.DropShadowEffectParser = class DropShadowEffectParser extends core.Object {
    parse(reader, composition) {
      while (reader.hasNext()) {
        switch (reader.selectName(drop_shadow_effect_parser.DropShadowEffectParser._dropShadowEffectNames)) {
          case 0:
            {
              reader.beginArray();
              while (reader.hasNext()) {
                this[_maybeParseInnerEffect](reader, composition);
              }
              reader.endArray();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      let color = this[_color];
      let opacity = this[_opacity];
      let direction = this[_direction];
      let distance = this[_distance];
      let radius = this[_radius];
      if (color != null && opacity != null && direction != null && distance != null && radius != null) {
        return new drop_shadow_effect.DropShadowEffect.new({color: color, opacity: opacity, direction: direction, distance: distance, radius: radius});
      }
      return null;
    }
    [_maybeParseInnerEffect](reader, composition) {
      let currentEffectName = "";
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(drop_shadow_effect_parser.DropShadowEffectParser._innerEffectNames)) {
          case 0:
            {
              currentEffectName = reader.nextString();
              break;
            }
          case 1:
            {
              switch (currentEffectName) {
                case "Shadow Color":
                  {
                    this[_color] = animatable_value_parser.AnimatableValueParser.parseColor(reader, composition);
                    break;
                  }
                case "Opacity":
                  {
                    this[_opacity] = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
                    break;
                  }
                case "Direction":
                  {
                    this[_direction] = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
                    break;
                  }
                case "Distance":
                  {
                    this[_distance] = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
                    break;
                  }
                case "Softness":
                  {
                    this[_radius] = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
                    break;
                  }
                default:
                  {
                    reader.skipValue();
                    break;
                  }
              }
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
    }
    static ['_#new#tearOff']() {
      return new drop_shadow_effect_parser.DropShadowEffectParser.new();
    }
  };
  (drop_shadow_effect_parser.DropShadowEffectParser.new = function() {
    this[_color] = null;
    this[_opacity] = null;
    this[_direction] = null;
    this[_distance] = null;
    this[_radius] = null;
    ;
  }).prototype = drop_shadow_effect_parser.DropShadowEffectParser.prototype;
  dart.addTypeTests(drop_shadow_effect_parser.DropShadowEffectParser);
  dart.addTypeCaches(drop_shadow_effect_parser.DropShadowEffectParser);
  dart.setMethodSignature(drop_shadow_effect_parser.DropShadowEffectParser, () => ({
    __proto__: dart.getMethods(drop_shadow_effect_parser.DropShadowEffectParser.__proto__),
    parse: dart.fnType(dart.nullable(drop_shadow_effect.DropShadowEffect), [json_reader.JsonReader, composition$.LottieComposition]),
    [_maybeParseInnerEffect]: dart.fnType(dart.void, [json_reader.JsonReader, composition$.LottieComposition])
  }));
  dart.setLibraryUri(drop_shadow_effect_parser.DropShadowEffectParser, I[15]);
  dart.setFieldSignature(drop_shadow_effect_parser.DropShadowEffectParser, () => ({
    __proto__: dart.getFields(drop_shadow_effect_parser.DropShadowEffectParser.__proto__),
    [_color]: dart.fieldType(dart.nullable(animatable_color_value.AnimatableColorValue)),
    [_opacity]: dart.fieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    [_direction]: dart.fieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    [_distance]: dart.fieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    [_radius]: dart.fieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue))
  }));
  dart.setStaticFieldSignature(drop_shadow_effect_parser.DropShadowEffectParser, () => ['_dropShadowEffectNames', '_innerEffectNames']);
  dart.defineLazy(drop_shadow_effect_parser.DropShadowEffectParser, {
    /*drop_shadow_effect_parser.DropShadowEffectParser._dropShadowEffectNames*/get _dropShadowEffectNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["ef"]));
    },
    /*drop_shadow_effect_parser.DropShadowEffectParser._innerEffectNames*/get _innerEffectNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "v"]));
    }
  }, false);
  shape_trim_path_parser.ShapeTrimPathParser = class ShapeTrimPathParser extends core.Object {
    static ['_#_#tearOff']() {
      return new shape_trim_path_parser.ShapeTrimPathParser.__();
    }
    static parse(reader, composition) {
      let name = null;
      let type = null;
      let start = null;
      let end = null;
      let offset = null;
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(shape_trim_path_parser.ShapeTrimPathParser._names)) {
          case 0:
            {
              start = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 1:
            {
              end = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 2:
            {
              offset = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 3:
            {
              name = reader.nextString();
              break;
            }
          case 4:
            {
              type = shape_trim_path.ShapeTrimPath.typeForId(reader.nextInt());
              break;
            }
          case 5:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      return new shape_trim_path.ShapeTrimPath.new({name: name, type: dart.nullCheck(type), start: dart.nullCheck(start), end: dart.nullCheck(end), offset: dart.nullCheck(offset), hidden: hidden});
    }
  };
  (shape_trim_path_parser.ShapeTrimPathParser.__ = function() {
    ;
  }).prototype = shape_trim_path_parser.ShapeTrimPathParser.prototype;
  dart.addTypeTests(shape_trim_path_parser.ShapeTrimPathParser);
  dart.addTypeCaches(shape_trim_path_parser.ShapeTrimPathParser);
  dart.setStaticMethodSignature(shape_trim_path_parser.ShapeTrimPathParser, () => ['parse']);
  dart.setLibraryUri(shape_trim_path_parser.ShapeTrimPathParser, I[16]);
  dart.setStaticFieldSignature(shape_trim_path_parser.ShapeTrimPathParser, () => ['_names']);
  dart.defineLazy(shape_trim_path_parser.ShapeTrimPathParser, {
    /*shape_trim_path_parser.ShapeTrimPathParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["s", "e", "o", "nm", "m", "hd"]));
    }
  }, false);
  shape_stroke_parser.ShapeStrokeParser = class ShapeStrokeParser extends core.Object {
    static ['_#_#tearOff']() {
      return new shape_stroke_parser.ShapeStrokeParser.__();
    }
    static parse(reader, composition) {
      let name = null;
      let color = null;
      let width = null;
      let opacity = null;
      let capType = null;
      let joinType = null;
      let offset = null;
      let miterLimit = 0.0;
      let hidden = false;
      let lineDashPattern = T$.JSArrayOfAnimatableDoubleValue().of([]);
      while (reader.hasNext()) {
        switch (reader.selectName(shape_stroke_parser.ShapeStrokeParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              color = animatable_value_parser.AnimatableValueParser.parseColor(reader, composition);
              break;
            }
          case 2:
            {
              width = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
              break;
            }
          case 3:
            {
              opacity = animatable_value_parser.AnimatableValueParser.parseInteger(reader, composition);
              break;
            }
          case 4:
            {
              capType = shape_stroke.LineCapType.values[$_get](reader.nextInt() - 1);
              break;
            }
          case 5:
            {
              joinType = shape_stroke.LineJoinType.values[$_get](reader.nextInt() - 1);
              break;
            }
          case 6:
            {
              miterLimit = reader.nextDouble();
              break;
            }
          case 7:
            {
              hidden = reader.nextBoolean();
              break;
            }
          case 8:
            {
              reader.beginArray();
              while (reader.hasNext()) {
                let n = null;
                let val = null;
                reader.beginObject();
                while (reader.hasNext()) {
                  switch (reader.selectName(shape_stroke_parser.ShapeStrokeParser._dashPatternNames)) {
                    case 0:
                      {
                        n = reader.nextString();
                        break;
                      }
                    case 1:
                      {
                        val = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
                        break;
                      }
                    default:
                      {
                        reader.skipName();
                        reader.skipValue();
                      }
                  }
                }
                reader.endObject();
                switch (n) {
                  case "o":
                    {
                      offset = val;
                      break;
                    }
                  case "d":
                  case "g":
                    {
                      composition.hasDashPattern = true;
                      lineDashPattern[$add](dart.nullCheck(val));
                      break;
                    }
                }
              }
              reader.endArray();
              if (lineDashPattern[$length] === 1) {
                lineDashPattern[$add](lineDashPattern[$first]);
              }
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      opacity == null ? opacity = new animatable_integer_value.AnimatableIntegerValue.fromKeyframes(T$.JSArrayOfKeyframeOfint().of([new (T$.KeyframeOfint()).nonAnimated(100)])) : null;
      return new shape_stroke.ShapeStroke.new({name: name, dashOffset: offset, lineDashPattern: lineDashPattern, color: dart.nullCheck(color), opacity: opacity, width: dart.nullCheck(width), capType: capType, joinType: joinType, miterLimit: miterLimit, hidden: hidden});
    }
  };
  (shape_stroke_parser.ShapeStrokeParser.__ = function() {
    ;
  }).prototype = shape_stroke_parser.ShapeStrokeParser.prototype;
  dart.addTypeTests(shape_stroke_parser.ShapeStrokeParser);
  dart.addTypeCaches(shape_stroke_parser.ShapeStrokeParser);
  dart.setStaticMethodSignature(shape_stroke_parser.ShapeStrokeParser, () => ['parse']);
  dart.setLibraryUri(shape_stroke_parser.ShapeStrokeParser, I[17]);
  dart.setStaticFieldSignature(shape_stroke_parser.ShapeStrokeParser, () => ['_names', '_dashPatternNames']);
  dart.defineLazy(shape_stroke_parser.ShapeStrokeParser, {
    /*shape_stroke_parser.ShapeStrokeParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "c", "w", "o", "lc", "lj", "ml", "hd", "d"]));
    },
    /*shape_stroke_parser.ShapeStrokeParser._dashPatternNames*/get _dashPatternNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["n", "v"]));
    }
  }, false);
  var lottieDrawable$ = dart.privateName(shape_content, "ShapeContent.lottieDrawable");
  var _path = dart.privateName(shape_content, "_path");
  var _isPathValid = dart.privateName(shape_content, "_isPathValid");
  var _trimPaths = dart.privateName(shape_content, "_trimPaths");
  var _shape$ = dart.privateName(shape_content, "_shape");
  var _shapeAnimation = dart.privateName(shape_content, "_shapeAnimation");
  var _invalidate = dart.privateName(shape_content, "_invalidate");
  shape_content.ShapeContent = class ShapeContent extends core.Object {
    get lottieDrawable() {
      return this[lottieDrawable$];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, _shape) {
      return new shape_content.ShapeContent.new(lottieDrawable, layer, _shape);
    }
    [_invalidate]() {
      this[_isPathValid] = false;
      this.lottieDrawable.invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
      let shapeModifierContents = null;
      for (let i = 0; i < contentsBefore[$length]; i = i + 1) {
        let content = contentsBefore[$_get](i);
        if (trim_path_content.TrimPathContent.is(content) && content.type === shape_trim_path.ShapeTrimPathType.simultaneously) {
          let trimPath = content;
          this[_trimPaths].addTrimPath(trimPath);
          trimPath.addListener(dart.bind(this, _invalidate));
        } else if (shape_modifier_content.ShapeModifierContent.is(content)) {
          shapeModifierContents == null ? shapeModifierContents = T$.JSArrayOfShapeModifierContent().of([]) : null;
          shapeModifierContents[$add](content);
        }
      }
      this[_shapeAnimation].setShapeModifiers(shapeModifierContents);
    }
    get name() {
      return this[_shape$].name;
    }
    getPath() {
      if (this[_isPathValid]) {
        return this[_path];
      }
      this[_path].reset();
      if (this[_shape$].hidden) {
        this[_isPathValid] = true;
        return this[_path];
      }
      utils['PathExtension|set'](this[_path], this[_shapeAnimation].value);
      this[_path].fillType = ui.PathFillType.evenOdd;
      this[_trimPaths].apply(this[_path]);
      this[_isPathValid] = true;
      return this[_path];
    }
  };
  (shape_content.ShapeContent.new = function(lottieDrawable, layer, _shape) {
    this[_path] = path_factory.PathFactory.create();
    this[_isPathValid] = false;
    this[_trimPaths] = new compound_trim_path_content.CompoundTrimPathContent.new();
    this[lottieDrawable$] = lottieDrawable;
    this[_shape$] = _shape;
    this[_shapeAnimation] = _shape.shapePath.createAnimation();
    layer.addAnimation(this[_shapeAnimation]);
    this[_shapeAnimation].addUpdateListener(dart.bind(this, _invalidate));
  }).prototype = shape_content.ShapeContent.prototype;
  dart.addTypeTests(shape_content.ShapeContent);
  dart.addTypeCaches(shape_content.ShapeContent);
  shape_content.ShapeContent[dart.implements] = () => [path_content.PathContent];
  dart.setMethodSignature(shape_content.ShapeContent, () => ({
    __proto__: dart.getMethods(shape_content.ShapeContent.__proto__),
    [_invalidate]: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    getPath: dart.fnType(ui.Path, [])
  }));
  dart.setGetterSignature(shape_content.ShapeContent, () => ({
    __proto__: dart.getGetters(shape_content.ShapeContent.__proto__),
    name: dart.nullable(core.String)
  }));
  dart.setLibraryUri(shape_content.ShapeContent, I[18]);
  dart.setFieldSignature(shape_content.ShapeContent, () => ({
    __proto__: dart.getFields(shape_content.ShapeContent.__proto__),
    [_path]: dart.finalFieldType(ui.Path),
    [_shape$]: dart.finalFieldType(shape_path.ShapePath),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    [_shapeAnimation]: dart.finalFieldType(shape_keyframe_animation.ShapeKeyframeAnimation),
    [_isPathValid]: dart.fieldType(core.bool),
    [_trimPaths]: dart.finalFieldType(compound_trim_path_content.CompoundTrimPathContent)
  }));
  var name$0 = dart.privateName(shape_path, "ShapePath.name");
  var index$ = dart.privateName(shape_path, "ShapePath.index");
  var shapePath$ = dart.privateName(shape_path, "ShapePath.shapePath");
  var hidden$ = dart.privateName(shape_path, "ShapePath.hidden");
  shape_path.ShapePath = class ShapePath extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get shapePath() {
      return this[shapePath$];
    }
    set shapePath(value) {
      super.shapePath = value;
    }
    get hidden() {
      return this[hidden$];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let shapePath = opts && 'shapePath' in opts ? opts.shapePath : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new shape_path.ShapePath.new({name: name, index: index, shapePath: shapePath, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new shape_content.ShapeContent.new(drawable, layer, this);
    }
    toString() {
      return "ShapePath{name=" + dart.str(this.name) + ", index=" + dart.str(this.index) + "}";
    }
  };
  (shape_path.ShapePath.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let shapePath = opts && 'shapePath' in opts ? opts.shapePath : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$0] = name;
    this[index$] = index;
    this[shapePath$] = shapePath;
    this[hidden$] = hidden;
    ;
  }).prototype = shape_path.ShapePath.prototype;
  dart.addTypeTests(shape_path.ShapePath);
  dart.addTypeCaches(shape_path.ShapePath);
  shape_path.ShapePath[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(shape_path.ShapePath, () => ({
    __proto__: dart.getMethods(shape_path.ShapePath.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(shape_path.ShapePath, I[19]);
  dart.setFieldSignature(shape_path.ShapePath, () => ({
    __proto__: dart.getFields(shape_path.ShapePath.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    index: dart.finalFieldType(core.int),
    shapePath: dart.finalFieldType(animatable_shape_value.AnimatableShapeValue),
    hidden: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(shape_path.ShapePath, ['toString']);
  shape_path_parser.ShapePathParser = class ShapePathParser extends core.Object {
    static ['_#_#tearOff']() {
      return new shape_path_parser.ShapePathParser.__();
    }
    static parse(reader, composition) {
      let name = null;
      let ind = 0;
      let shape = null;
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(shape_path_parser.ShapePathParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              ind = reader.nextInt();
              break;
            }
          case 2:
            {
              shape = animatable_value_parser.AnimatableValueParser.parseShapeData(reader, composition);
              break;
            }
          case 3:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      return new shape_path.ShapePath.new({name: name, index: ind, shapePath: dart.nullCheck(shape), hidden: hidden});
    }
  };
  (shape_path_parser.ShapePathParser.__ = function() {
    ;
  }).prototype = shape_path_parser.ShapePathParser.prototype;
  dart.addTypeTests(shape_path_parser.ShapePathParser);
  dart.addTypeCaches(shape_path_parser.ShapePathParser);
  dart.setStaticMethodSignature(shape_path_parser.ShapePathParser, () => ['parse']);
  dart.setLibraryUri(shape_path_parser.ShapePathParser, I[20]);
  dart.setStaticFieldSignature(shape_path_parser.ShapePathParser, () => ['_names']);
  dart.defineLazy(shape_path_parser.ShapePathParser, {
    /*shape_path_parser.ShapePathParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "ind", "ks", "hd"]));
    }
  }, false);
  shape_group_parser.ShapeGroupParser = class ShapeGroupParser extends core.Object {
    static ['_#_#tearOff']() {
      return new shape_group_parser.ShapeGroupParser.__();
    }
    static parse(reader, composition) {
      let name = null;
      let hidden = false;
      let items = T$.JSArrayOfContentModel().of([]);
      while (reader.hasNext()) {
        switch (reader.selectName(shape_group_parser.ShapeGroupParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              hidden = reader.nextBoolean();
              break;
            }
          case 2:
            {
              reader.beginArray();
              while (reader.hasNext()) {
                let newItem = content_model_parser.ContentModelParser.parse(reader, composition);
                if (newItem != null) {
                  items[$add](newItem);
                }
              }
              reader.endArray();
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      return new shape_group.ShapeGroup.new(name, items, {hidden: hidden});
    }
  };
  (shape_group_parser.ShapeGroupParser.__ = function() {
    ;
  }).prototype = shape_group_parser.ShapeGroupParser.prototype;
  dart.addTypeTests(shape_group_parser.ShapeGroupParser);
  dart.addTypeCaches(shape_group_parser.ShapeGroupParser);
  dart.setStaticMethodSignature(shape_group_parser.ShapeGroupParser, () => ['parse']);
  dart.setLibraryUri(shape_group_parser.ShapeGroupParser, I[21]);
  dart.setStaticFieldSignature(shape_group_parser.ShapeGroupParser, () => ['_names']);
  dart.defineLazy(shape_group_parser.ShapeGroupParser, {
    /*shape_group_parser.ShapeGroupParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "hd", "it"]));
    }
  }, false);
  var layer$0 = dart.privateName(fill_content, "FillContent.layer");
  var name = dart.privateName(fill_content, "FillContent.name");
  var lottieDrawable$0 = dart.privateName(fill_content, "FillContent.lottieDrawable");
  var dropShadowAnimation = dart.privateName(fill_content, "FillContent.dropShadowAnimation");
  var _path$ = dart.privateName(fill_content, "_path");
  var _paint = dart.privateName(fill_content, "_paint");
  var _paths = dart.privateName(fill_content, "_paths");
  var __FillContent__colorAnimation = dart.privateName(fill_content, "_#FillContent#_colorAnimation");
  var __FillContent__opacityAnimation = dart.privateName(fill_content, "_#FillContent#_opacityAnimation");
  var _colorFilterAnimation = dart.privateName(fill_content, "_colorFilterAnimation");
  var _blurAnimation = dart.privateName(fill_content, "_blurAnimation");
  var _blurMaskFilterRadius = dart.privateName(fill_content, "_blurMaskFilterRadius");
  var _hidden = dart.privateName(fill_content, "_hidden");
  var _colorAnimation = dart.privateName(fill_content, "_colorAnimation");
  var _opacityAnimation = dart.privateName(fill_content, "_opacityAnimation");
  fill_content.FillContent = class FillContent extends core.Object {
    get layer() {
      return this[layer$0];
    }
    set layer(value) {
      super.layer = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      super.name = value;
    }
    get lottieDrawable() {
      return this[lottieDrawable$0];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    get dropShadowAnimation() {
      return this[dropShadowAnimation];
    }
    set dropShadowAnimation(value) {
      this[dropShadowAnimation] = value;
    }
    get [_colorAnimation]() {
      let t15;
      t15 = this[__FillContent__colorAnimation];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_colorAnimation")) : t15;
    }
    set [_colorAnimation](library$32package$58lottie$47src$47animation$47content$47fill_content$46dart$58$58_colorAnimation$35param) {
      if (this[__FillContent__colorAnimation] == null)
        this[__FillContent__colorAnimation] = library$32package$58lottie$47src$47animation$47content$47fill_content$46dart$58$58_colorAnimation$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_colorAnimation"));
    }
    get [_opacityAnimation]() {
      let t15;
      t15 = this[__FillContent__opacityAnimation];
      return t15 == null ? dart.throw(new _internal.LateError.fieldNI("_opacityAnimation")) : t15;
    }
    set [_opacityAnimation](library$32package$58lottie$47src$47animation$47content$47fill_content$46dart$58$58_opacityAnimation$35param) {
      if (this[__FillContent__opacityAnimation] == null)
        this[__FillContent__opacityAnimation] = library$32package$58lottie$47src$47animation$47content$47fill_content$46dart$58$58_opacityAnimation$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_opacityAnimation"));
    }
    static ['_#new#tearOff'](lottieDrawable, layer, fill) {
      return new fill_content.FillContent.new(lottieDrawable, layer, fill);
    }
    onValueChanged() {
      this.lottieDrawable.invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
      for (let i = 0; i < contentsAfter[$length]; i = i + 1) {
        let content = contentsAfter[$_get](i);
        if (path_content.PathContent.is(content)) {
          this[_paths][$add](content);
        }
      }
    }
    draw(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      if (this[_hidden]) {
        return;
      }
      l.L.beginSection("FillContent#draw");
      this[_paint].color = this[_colorAnimation].value;
      let alpha = (parentAlpha / 255.0 * this[_opacityAnimation].value / 100.0 * 255)[$round]();
      utils['PaintExtension|setAlpha'](this[_paint], alpha[$clamp](0, 255)[$toInt]());
      if (this.lottieDrawable.antiAliasingSuggested) {
        this[_paint].isAntiAlias = true;
      }
      if (this[_colorFilterAnimation] != null) {
        this[_paint].colorFilter = dart.nullCheck(this[_colorFilterAnimation]).value;
      }
      let blurAnimation = this[_blurAnimation];
      if (blurAnimation != null) {
        let blurRadius = blurAnimation.value;
        if (blurRadius === 0) {
          this[_paint].maskFilter = null;
        } else if (blurRadius !== this[_blurMaskFilterRadius]) {
          let blur = this.layer.getBlurMaskFilter(blurRadius);
          this[_paint].maskFilter = blur;
        }
        this[_blurMaskFilterRadius] = blurRadius;
      }
      this[_path$].reset();
      for (let i = 0; i < this[_paths][$length]; i = i + 1) {
        this[_path$].addPath(this[_paths][$_get](i).getPath(), ui.Offset.zero);
      }
      canvas.save();
      canvas.transform(parentMatrix.storage);
      let dropShadow = this.dropShadowAnimation;
      if (dropShadow != null) {
        dropShadow.draw(canvas, this[_path$]);
      }
      canvas.drawPath(this[_path$], this[_paint]);
      canvas.restore();
      l.L.endSection("FillContent#draw");
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      this[_path$].reset();
      for (let i = 0; i < this[_paths][$length]; i = i + 1) {
        this[_path$].addPath(this[_paths][$_get](i).getPath(), ui.Offset.zero, {matrix4: parentMatrix.storage});
      }
      let outBounds = this[_path$].getBounds();
      outBounds = outBounds.inflate(1.0);
      return outBounds;
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      misc.MiscUtils.resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath, this);
    }
    addValueCallback(T, property, callback) {
      let t15, t15$, t15$0, t15$1;
      if (dart.equals(property, lottie_property.LottieProperty.color)) {
        this[_colorAnimation].setValueCallback(T$.LottieValueCallbackNOfColor().as(callback));
      } else if (dart.equals(property, 4)) {
        this[_opacityAnimation].setValueCallback(T$.LottieValueCallbackNOfint().as(callback));
      } else if (dart.equals(property, lottie_property.LottieProperty.colorFilter)) {
        if (this[_colorFilterAnimation] != null) {
          this.layer.removeAnimation(this[_colorFilterAnimation]);
        }
        if (callback == null) {
          this[_colorFilterAnimation] = null;
        } else {
          this[_colorFilterAnimation] = (t15 = new (T$.ValueCallbackKeyframeAnimationOfColorFilter$ColorFilterN()).new(T$.LottieValueCallbackOfColorFilter().as(callback), null), (() => {
            t15.addUpdateListener(dart.bind(this, 'onValueChanged'));
            return t15;
          })());
          this.layer.addAnimation(this[_colorFilterAnimation]);
        }
      } else if (dart.equals(property, 29)) {
        let blurAnimation = this[_blurAnimation];
        if (blurAnimation != null) {
          blurAnimation.setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
        } else {
          let callbackBlur = T$.LottieValueCallbackNOfdouble().as(callback);
          this[_blurAnimation] = blurAnimation = (t15$1 = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(callbackBlur, (t15$0 = (t15$ = callbackBlur, t15$ == null ? null : t15$.value), t15$0 == null ? 0.0 : t15$0)), (() => {
            t15$1.addUpdateListener(dart.bind(this, 'onValueChanged'));
            return t15$1;
          })());
          this.layer.addAnimation(blurAnimation);
        }
      } else if (dart.equals(property, lottie_property.LottieProperty.dropShadow)) {
        let dropShadowAnimation = this.dropShadowAnimation;
        if (dropShadowAnimation == null) {
          let effect = drop_shadow_effect.DropShadowEffect.createEmpty();
          this.dropShadowAnimation = dropShadowAnimation = dropShadowAnimation = new drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.new(dart.bind(this, 'onValueChanged'), this.layer, effect);
        }
        dropShadowAnimation.setCallback(T$.LottieValueCallbackNOfDropShadow().as(callback));
      }
    }
  };
  (fill_content.FillContent.new = function(lottieDrawable, layer, fill) {
    let t15;
    this[_path$] = path_factory.PathFactory.create();
    this[_paint] = ui.Paint.new();
    this[_paths] = T$.JSArrayOfPathContent().of([]);
    this[__FillContent__colorAnimation] = null;
    this[__FillContent__opacityAnimation] = null;
    this[_colorFilterAnimation] = null;
    this[_blurAnimation] = null;
    this[_blurMaskFilterRadius] = 0.0;
    this[dropShadowAnimation] = null;
    this[lottieDrawable$0] = lottieDrawable;
    this[layer$0] = layer;
    this[name] = fill.name;
    this[_hidden] = fill.hidden;
    let blurEffect = this.layer.blurEffect;
    if (blurEffect != null) {
      this[_blurAnimation] = (t15 = blurEffect.blurriness.createAnimation(), (() => {
        t15.addUpdateListener(dart.bind(this, 'onValueChanged'));
        return t15;
      })());
      this.layer.addAnimation(this[_blurAnimation]);
    }
    let dropShadowEffect = this.layer.dropShadowEffect;
    if (dropShadowEffect != null) {
      this.dropShadowAnimation = new drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.new(dart.bind(this, 'onValueChanged'), this.layer, dropShadowEffect);
    }
    if (fill.color == null || fill.opacity == null) {
      return;
    }
    this[_path$].fillType = fill.fillType;
    this[_colorAnimation] = dart.nullCheck(fill.color).createAnimation();
    this[_colorAnimation].addUpdateListener(dart.bind(this, 'onValueChanged'));
    this.layer.addAnimation(this[_colorAnimation]);
    this[_opacityAnimation] = dart.nullCheck(fill.opacity).createAnimation();
    this[_opacityAnimation].addUpdateListener(dart.bind(this, 'onValueChanged'));
    this.layer.addAnimation(this[_opacityAnimation]);
  }).prototype = fill_content.FillContent.prototype;
  dart.addTypeTests(fill_content.FillContent);
  dart.addTypeCaches(fill_content.FillContent);
  fill_content.FillContent[dart.implements] = () => [drawing_content.DrawingContent, key_path_element_content.KeyPathElementContent];
  dart.setMethodSignature(fill_content.FillContent, () => ({
    __proto__: dart.getMethods(fill_content.FillContent.__proto__),
    onValueChanged: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    getBounds: dart.fnType(ui.Rect, [vector_math_64.Matrix4], {}, {applyParents: core.bool}),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(fill_content.FillContent, () => ({
    __proto__: dart.getGetters(fill_content.FillContent.__proto__),
    [_colorAnimation]: base_keyframe_animation.BaseKeyframeAnimation$(ui.Color, ui.Color),
    [_opacityAnimation]: base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)
  }));
  dart.setSetterSignature(fill_content.FillContent, () => ({
    __proto__: dart.getSetters(fill_content.FillContent.__proto__),
    [_colorAnimation]: base_keyframe_animation.BaseKeyframeAnimation$(ui.Color, ui.Color),
    [_opacityAnimation]: base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)
  }));
  dart.setLibraryUri(fill_content.FillContent, I[22]);
  dart.setFieldSignature(fill_content.FillContent, () => ({
    __proto__: dart.getFields(fill_content.FillContent.__proto__),
    [_path$]: dart.finalFieldType(ui.Path),
    [_paint]: dart.finalFieldType(ui.Paint),
    layer: dart.finalFieldType(base_layer.BaseLayer),
    name: dart.finalFieldType(dart.nullable(core.String)),
    [_hidden]: dart.finalFieldType(core.bool),
    [_paths]: dart.finalFieldType(core.List$(path_content.PathContent)),
    [__FillContent__colorAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.Color, ui.Color))),
    [__FillContent__opacityAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int))),
    [_colorFilterAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.ColorFilter, dart.nullable(ui.ColorFilter)))),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    [_blurAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_blurMaskFilterRadius]: dart.fieldType(core.double),
    dropShadowAnimation: dart.fieldType(dart.nullable(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation))
  }));
  var fillEnabled$ = dart.privateName(shape_fill, "ShapeFill.fillEnabled");
  var fillType$ = dart.privateName(shape_fill, "ShapeFill.fillType");
  var name$1 = dart.privateName(shape_fill, "ShapeFill.name");
  var color$ = dart.privateName(shape_fill, "ShapeFill.color");
  var opacity$ = dart.privateName(shape_fill, "ShapeFill.opacity");
  var hidden$0 = dart.privateName(shape_fill, "ShapeFill.hidden");
  shape_fill.ShapeFill = class ShapeFill extends core.Object {
    get fillEnabled() {
      return this[fillEnabled$];
    }
    set fillEnabled(value) {
      super.fillEnabled = value;
    }
    get fillType() {
      return this[fillType$];
    }
    set fillType(value) {
      super.fillType = value;
    }
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get hidden() {
      return this[hidden$0];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let fillEnabled = opts && 'fillEnabled' in opts ? opts.fillEnabled : null;
      let fillType = opts && 'fillType' in opts ? opts.fillType : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new shape_fill.ShapeFill.new({fillEnabled: fillEnabled, fillType: fillType, name: name, color: color, opacity: opacity, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new fill_content.FillContent.new(drawable, layer, this);
    }
    toString() {
      return "ShapeFill{" + "color=" + ", fillEnabled=" + dart.str(this.fillEnabled) + "}";
    }
  };
  (shape_fill.ShapeFill.new = function(opts) {
    let fillEnabled = opts && 'fillEnabled' in opts ? opts.fillEnabled : null;
    let fillType = opts && 'fillType' in opts ? opts.fillType : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[fillEnabled$] = fillEnabled;
    this[fillType$] = fillType;
    this[name$1] = name;
    this[color$] = color;
    this[opacity$] = opacity;
    this[hidden$0] = hidden;
    ;
  }).prototype = shape_fill.ShapeFill.prototype;
  dart.addTypeTests(shape_fill.ShapeFill);
  dart.addTypeCaches(shape_fill.ShapeFill);
  shape_fill.ShapeFill[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(shape_fill.ShapeFill, () => ({
    __proto__: dart.getMethods(shape_fill.ShapeFill.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(shape_fill.ShapeFill, I[23]);
  dart.setFieldSignature(shape_fill.ShapeFill, () => ({
    __proto__: dart.getFields(shape_fill.ShapeFill.__proto__),
    fillEnabled: dart.finalFieldType(core.bool),
    fillType: dart.finalFieldType(ui.PathFillType),
    name: dart.finalFieldType(dart.nullable(core.String)),
    color: dart.finalFieldType(dart.nullable(animatable_color_value.AnimatableColorValue)),
    opacity: dart.finalFieldType(dart.nullable(animatable_integer_value.AnimatableIntegerValue)),
    hidden: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(shape_fill.ShapeFill, ['toString']);
  shape_fill_parser.ShapeFillParser = class ShapeFillParser extends core.Object {
    static ['_#_#tearOff']() {
      return new shape_fill_parser.ShapeFillParser.__();
    }
    static parse(reader, composition) {
      let color = null;
      let fillEnabled = false;
      let opacity = null;
      let name = null;
      let fillTypeInt = 1;
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(shape_fill_parser.ShapeFillParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              color = animatable_value_parser.AnimatableValueParser.parseColor(reader, composition);
              break;
            }
          case 2:
            {
              opacity = animatable_value_parser.AnimatableValueParser.parseInteger(reader, composition);
              break;
            }
          case 3:
            {
              fillEnabled = reader.nextBoolean();
              break;
            }
          case 4:
            {
              fillTypeInt = reader.nextInt();
              break;
            }
          case 5:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      let fillType = fillTypeInt === 1 ? ui.PathFillType.nonZero : ui.PathFillType.evenOdd;
      opacity == null ? opacity = new animatable_integer_value.AnimatableIntegerValue.fromKeyframes(T$.JSArrayOfKeyframeOfint().of([new (T$.KeyframeOfint()).nonAnimated(100)])) : null;
      return new shape_fill.ShapeFill.new({name: name, fillEnabled: fillEnabled, fillType: fillType, color: color, opacity: opacity, hidden: hidden});
    }
  };
  (shape_fill_parser.ShapeFillParser.__ = function() {
    ;
  }).prototype = shape_fill_parser.ShapeFillParser.prototype;
  dart.addTypeTests(shape_fill_parser.ShapeFillParser);
  dart.addTypeCaches(shape_fill_parser.ShapeFillParser);
  dart.setStaticMethodSignature(shape_fill_parser.ShapeFillParser, () => ['parse']);
  dart.setLibraryUri(shape_fill_parser.ShapeFillParser, I[24]);
  dart.setStaticFieldSignature(shape_fill_parser.ShapeFillParser, () => ['_names']);
  dart.defineLazy(shape_fill_parser.ShapeFillParser, {
    /*shape_fill_parser.ShapeFillParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "c", "o", "fillEnabled", "r", "hd"]));
    }
  }, false);
  rounded_corners_parser.RoundedCornersParser = class RoundedCornersParser extends core.Object {
    static parse(reader, composition) {
      let name = null;
      let cornerRadius = null;
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(rounded_corners_parser.RoundedCornersParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              cornerRadius = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: true});
              break;
            }
          case 2:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      return hidden ? null : new rounded_corners.RoundedCorners.new(dart.nullCheck(name), dart.nullCheck(cornerRadius));
    }
    static ['_#new#tearOff']() {
      return new rounded_corners_parser.RoundedCornersParser.new();
    }
  };
  (rounded_corners_parser.RoundedCornersParser.new = function() {
    ;
  }).prototype = rounded_corners_parser.RoundedCornersParser.prototype;
  dart.addTypeTests(rounded_corners_parser.RoundedCornersParser);
  dart.addTypeCaches(rounded_corners_parser.RoundedCornersParser);
  dart.setStaticMethodSignature(rounded_corners_parser.RoundedCornersParser, () => ['parse']);
  dart.setLibraryUri(rounded_corners_parser.RoundedCornersParser, I[25]);
  dart.setStaticFieldSignature(rounded_corners_parser.RoundedCornersParser, () => ['_names']);
  dart.defineLazy(rounded_corners_parser.RoundedCornersParser, {
    /*rounded_corners_parser.RoundedCornersParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "r", "hd"]));
    }
  }, false);
  var lottieDrawable$1 = dart.privateName(repeater_content, "RepeaterContent.lottieDrawable");
  var layer$1 = dart.privateName(repeater_content, "RepeaterContent.layer");
  var _matrix = dart.privateName(repeater_content, "_matrix");
  var _path$0 = dart.privateName(repeater_content, "_path");
  var _contentGroup = dart.privateName(repeater_content, "_contentGroup");
  var _repeater$ = dart.privateName(repeater_content, "_repeater");
  var _copies = dart.privateName(repeater_content, "_copies");
  var _offset = dart.privateName(repeater_content, "_offset");
  var _transform = dart.privateName(repeater_content, "_transform");
  var _invalidate$ = dart.privateName(repeater_content, "_invalidate");
  repeater_content.RepeaterContent = class RepeaterContent extends core.Object {
    get lottieDrawable() {
      return this[lottieDrawable$1];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    get layer() {
      return this[layer$1];
    }
    set layer(value) {
      super.layer = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, _repeater) {
      return new repeater_content.RepeaterContent.new(lottieDrawable, layer, _repeater);
    }
    absorbContent(contents) {
      if (this[_contentGroup] != null) {
        return;
      }
      let index = contents[$lastIndexOf](this) - 1;
      let newContents = T$.JSArrayOfContent().of([]);
      while (index >= 0) {
        let content = contents[$_get](index);
        newContents[$add](content);
        contents[$removeAt](index);
        index = index - 1;
      }
      newContents = newContents[$reversed][$toList]();
      this[_contentGroup] = new content_group.ContentGroup.copy(this.lottieDrawable, this.layer, "Repeater", this[_repeater$].hidden, newContents, null);
    }
    get name() {
      return this[_repeater$].name;
    }
    setContents(contentsBefore, contentsAfter) {
      dart.nullCheck(this[_contentGroup]).setContents(contentsBefore, contentsAfter);
    }
    getPath() {
      let contentPath = dart.nullCheck(this[_contentGroup]).getPath();
      this[_path$0].reset();
      let copies = this[_copies].value;
      let offset = this[_offset].value;
      for (let i = copies[$toInt]() - 1; i >= 0; i = i - 1) {
        utils['Matrix4Extension|set'](this[_matrix], this[_transform].getMatrixForRepeater(i + offset));
        this[_path$0].addPath(contentPath, ui.Offset.zero, {matrix4: this[_matrix].storage});
      }
      return this[_path$0];
    }
    draw(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      let copies = this[_copies].value;
      let offset = this[_offset].value;
      let startOpacity = dart.nullCheck(this[_transform].startOpacity).value / 100.0;
      let endOpacity = dart.nullCheck(this[_transform].endOpacity).value / 100.0;
      for (let i = copies[$toInt]() - 1; i >= 0; i = i - 1) {
        utils['Matrix4Extension|set'](this[_matrix], parentMatrix);
        utils['Matrix4Extension|preConcat'](this[_matrix], this[_transform].getMatrixForRepeater(i + offset));
        let newAlpha = parentAlpha * dart.nullCheck(ui.lerpDouble(startOpacity, endOpacity, i / copies));
        dart.nullCheck(this[_contentGroup]).draw(canvas, size, this[_matrix], {parentAlpha: newAlpha[$round]()});
      }
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      return dart.nullCheck(this[_contentGroup]).getBounds(parentMatrix, {applyParents: applyParents});
    }
    [_invalidate$]() {
      this.lottieDrawable.invalidateSelf();
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      misc.MiscUtils.resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath, this);
    }
    addValueCallback(T, property, callback) {
      if (this[_transform].applyValueCallback(T, property, callback)) {
        return;
      }
      if (dart.equals(property, 17)) {
        this[_copies].setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else if (dart.equals(property, 18)) {
        this[_offset].setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      }
    }
  };
  (repeater_content.RepeaterContent.new = function(lottieDrawable, layer, _repeater) {
    this[_matrix] = vector_math_64.Matrix4.identity();
    this[_path$0] = path_factory.PathFactory.create();
    this[_contentGroup] = null;
    this[lottieDrawable$1] = lottieDrawable;
    this[layer$1] = layer;
    this[_repeater$] = _repeater;
    this[_copies] = _repeater.copies.createAnimation();
    this[_offset] = _repeater.offset.createAnimation();
    this[_transform] = _repeater.transform.createAnimation();
    this.layer.addAnimation(this[_copies]);
    this[_copies].addUpdateListener(dart.bind(this, _invalidate$));
    this.layer.addAnimation(this[_offset]);
    this[_offset].addUpdateListener(dart.bind(this, _invalidate$));
    this[_transform].addAnimationsToLayer(this.layer);
    this[_transform].addListener(dart.bind(this, _invalidate$));
  }).prototype = repeater_content.RepeaterContent.prototype;
  dart.addTypeTests(repeater_content.RepeaterContent);
  dart.addTypeCaches(repeater_content.RepeaterContent);
  repeater_content.RepeaterContent[dart.implements] = () => [drawing_content.DrawingContent, path_content.PathContent, greedy_content.GreedyContent, key_path_element_content.KeyPathElementContent];
  dart.setMethodSignature(repeater_content.RepeaterContent, () => ({
    __proto__: dart.getMethods(repeater_content.RepeaterContent.__proto__),
    absorbContent: dart.fnType(dart.void, [core.List$(content.Content)]),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    getPath: dart.fnType(ui.Path, []),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    getBounds: dart.fnType(ui.Rect, [vector_math_64.Matrix4], {}, {applyParents: core.bool}),
    [_invalidate$]: dart.fnType(dart.void, []),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(repeater_content.RepeaterContent, () => ({
    __proto__: dart.getGetters(repeater_content.RepeaterContent.__proto__),
    name: dart.nullable(core.String)
  }));
  dart.setLibraryUri(repeater_content.RepeaterContent, I[26]);
  dart.setFieldSignature(repeater_content.RepeaterContent, () => ({
    __proto__: dart.getFields(repeater_content.RepeaterContent.__proto__),
    [_matrix]: dart.finalFieldType(vector_math_64.Matrix4),
    [_path$0]: dart.finalFieldType(ui.Path),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    layer: dart.finalFieldType(base_layer.BaseLayer),
    [_repeater$]: dart.finalFieldType(repeater.Repeater),
    [_copies]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)),
    [_offset]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)),
    [_transform]: dart.finalFieldType(transform_keyframe_animation.TransformKeyframeAnimation),
    [_contentGroup]: dart.fieldType(dart.nullable(content_group.ContentGroup))
  }));
  var name$2 = dart.privateName(repeater, "Repeater.name");
  var copies$ = dart.privateName(repeater, "Repeater.copies");
  var offset$ = dart.privateName(repeater, "Repeater.offset");
  var transform$ = dart.privateName(repeater, "Repeater.transform");
  var hidden$1 = dart.privateName(repeater, "Repeater.hidden");
  repeater.Repeater = class Repeater extends core.Object {
    get name() {
      return this[name$2];
    }
    set name(value) {
      super.name = value;
    }
    get copies() {
      return this[copies$];
    }
    set copies(value) {
      super.copies = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get hidden() {
      return this[hidden$1];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let copies = opts && 'copies' in opts ? opts.copies : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new repeater.Repeater.new({name: name, copies: copies, offset: offset, transform: transform, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new repeater_content.RepeaterContent.new(drawable, layer, this);
    }
  };
  (repeater.Repeater.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let copies = opts && 'copies' in opts ? opts.copies : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$2] = name;
    this[copies$] = copies;
    this[offset$] = offset;
    this[transform$] = transform;
    this[hidden$1] = hidden;
    ;
  }).prototype = repeater.Repeater.prototype;
  dart.addTypeTests(repeater.Repeater);
  dart.addTypeCaches(repeater.Repeater);
  repeater.Repeater[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(repeater.Repeater, () => ({
    __proto__: dart.getMethods(repeater.Repeater.__proto__),
    toContent: dart.fnType(dart.nullable(content.Content), [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(repeater.Repeater, I[27]);
  dart.setFieldSignature(repeater.Repeater, () => ({
    __proto__: dart.getFields(repeater.Repeater.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    copies: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    offset: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    transform: dart.finalFieldType(animatable_transform.AnimatableTransform),
    hidden: dart.finalFieldType(core.bool)
  }));
  repeat_parser.RepeaterParser = class RepeaterParser extends core.Object {
    static ['_#_#tearOff']() {
      return new repeat_parser.RepeaterParser.__();
    }
    static parse(reader, composition) {
      let name = null;
      let copies = null;
      let offset = null;
      let transform = null;
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(repeat_parser.RepeaterParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              copies = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 2:
            {
              offset = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 3:
            {
              transform = animatable_transform_parser.AnimatableTransformParser.parse(reader, composition);
              break;
            }
          case 4:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      return new repeater.Repeater.new({name: name, copies: dart.nullCheck(copies), offset: dart.nullCheck(offset), transform: dart.nullCheck(transform), hidden: hidden});
    }
  };
  (repeat_parser.RepeaterParser.__ = function() {
    ;
  }).prototype = repeat_parser.RepeaterParser.prototype;
  dart.addTypeTests(repeat_parser.RepeaterParser);
  dart.addTypeCaches(repeat_parser.RepeaterParser);
  dart.setStaticMethodSignature(repeat_parser.RepeaterParser, () => ['parse']);
  dart.setLibraryUri(repeat_parser.RepeaterParser, I[28]);
  dart.setStaticFieldSignature(repeat_parser.RepeaterParser, () => ['_names']);
  dart.defineLazy(repeat_parser.RepeaterParser, {
    /*repeat_parser.RepeaterParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "c", "o", "tr", "hd"]));
    }
  }, false);
  var name$3 = dart.privateName(rounded_corners, "RoundedCorners.name");
  var cornerRadius$ = dart.privateName(rounded_corners, "RoundedCorners.cornerRadius");
  rounded_corners.RoundedCorners = class RoundedCorners extends core.Object {
    get name() {
      return this[name$3];
    }
    set name(value) {
      super.name = value;
    }
    get cornerRadius() {
      return this[cornerRadius$];
    }
    set cornerRadius(value) {
      super.cornerRadius = value;
    }
    static ['_#new#tearOff'](name, cornerRadius) {
      return new rounded_corners.RoundedCorners.new(name, cornerRadius);
    }
    toContent(drawable, layer) {
      return new rounded_corners_content.RoundedCornersContent.new(drawable, layer, this);
    }
  };
  (rounded_corners.RoundedCorners.new = function(name, cornerRadius) {
    this[name$3] = name;
    this[cornerRadius$] = cornerRadius;
    ;
  }).prototype = rounded_corners.RoundedCorners.prototype;
  dart.addTypeTests(rounded_corners.RoundedCorners);
  dart.addTypeCaches(rounded_corners.RoundedCorners);
  rounded_corners.RoundedCorners[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(rounded_corners.RoundedCorners, () => ({
    __proto__: dart.getMethods(rounded_corners.RoundedCorners.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(rounded_corners.RoundedCorners, I[29]);
  dart.setFieldSignature(rounded_corners.RoundedCorners, () => ({
    __proto__: dart.getFields(rounded_corners.RoundedCorners.__proto__),
    name: dart.finalFieldType(core.String),
    cornerRadius: dart.finalFieldType(animatable_value.AnimatableValue$(core.double, core.double))
  }));
  var lottieDrawable$2 = dart.privateName(rounded_corners_content, "RoundedCornersContent.lottieDrawable");
  var name$4 = dart.privateName(rounded_corners_content, "RoundedCornersContent.name");
  var roundedCorners$ = dart.privateName(rounded_corners_content, "RoundedCornersContent.roundedCorners");
  var shapeData = dart.privateName(rounded_corners_content, "RoundedCornersContent.shapeData");
  var _onValueChanged = dart.privateName(rounded_corners_content, "_onValueChanged");
  var _getShapeData = dart.privateName(rounded_corners_content, "_getShapeData");
  rounded_corners_content.RoundedCornersContent = class RoundedCornersContent extends core.Object {
    get lottieDrawable() {
      return this[lottieDrawable$2];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    get name() {
      return this[name$4];
    }
    set name(value) {
      super.name = value;
    }
    get roundedCorners() {
      return this[roundedCorners$];
    }
    set roundedCorners(value) {
      super.roundedCorners = value;
    }
    get shapeData() {
      return this[shapeData];
    }
    set shapeData(value) {
      this[shapeData] = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, roundedCorners) {
      return new rounded_corners_content.RoundedCornersContent.new(lottieDrawable, layer, roundedCorners);
    }
    [_onValueChanged]() {
      this.lottieDrawable.invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
    }
    modifyShape(startingShapeData) {
      let startingCurves = startingShapeData.curves;
      if (startingCurves[$length] <= 2) {
        return startingShapeData;
      }
      let roundedness = this.roundedCorners.value;
      if (roundedness === 0) {
        return startingShapeData;
      }
      let modifiedShapeData = this[_getShapeData](startingShapeData);
      modifiedShapeData.setInitialPoint(startingShapeData.initialPoint.dx, startingShapeData.initialPoint.dy);
      let modifiedCurves = modifiedShapeData.curves;
      let modifiedCurvesIndex = 0;
      let isClosed = startingShapeData.isClosed;
      for (let i = 0; i < startingCurves[$length]; i = i + 1) {
        let startingCurve = startingCurves[$_get](i);
        let previousCurve = startingCurves[$_get](rounded_corners_content.RoundedCornersContent.floorMod(i - 1, startingCurves[$length]));
        let previousPreviousCurve = startingCurves[$_get](rounded_corners_content.RoundedCornersContent.floorMod(i - 2, startingCurves[$length]));
        let vertex = i === 0 && !isClosed ? startingShapeData.initialPoint : previousCurve.vertex;
        let inPoint = i === 0 && !isClosed ? vertex : previousCurve.controlPoint2;
        let outPoint = startingCurve.controlPoint1;
        let previousVertex = previousPreviousCurve.vertex;
        let nextVertex = startingCurve.vertex;
        let isEndOfCurve = !startingShapeData.isClosed && i === 0 && i === startingCurves[$length] - 1;
        if (inPoint._equals(vertex) && outPoint._equals(vertex) && !isEndOfCurve) {
          let dxToPreviousVertex = vertex.dx - previousVertex.dx;
          let dyToPreviousVertex = vertex.dy - previousVertex.dy;
          let dxToNextVertex = nextVertex.dx - vertex.dx;
          let dyToNextVertex = nextVertex.dy - vertex.dy;
          let dToPreviousVertex = utils.hypot(dxToPreviousVertex, dyToPreviousVertex);
          let dToNextVertex = utils.hypot(dxToNextVertex, dyToNextVertex);
          let previousVertexPercent = math.min(core.double, roundedness / dToPreviousVertex, 0.5);
          let nextVertexPercent = math.min(core.double, roundedness / dToNextVertex, 0.5);
          let newVertex1X = vertex.dx + (previousVertex.dx - vertex.dx) * previousVertexPercent;
          let newVertex1Y = vertex.dy + (previousVertex.dy - vertex.dy) * previousVertexPercent;
          let newVertex2X = vertex.dx + (nextVertex.dx - vertex.dx) * nextVertexPercent;
          let newVertex2Y = vertex.dy + (nextVertex.dy - vertex.dy) * nextVertexPercent;
          let newVertex1OutPointX = newVertex1X - (newVertex1X - vertex.dx) * 0.5519;
          let newVertex1OutPointY = newVertex1Y - (newVertex1Y - vertex.dy) * 0.5519;
          let newVertex2InPointX = newVertex2X - (newVertex2X - vertex.dx) * 0.5519;
          let newVertex2InPointY = newVertex2Y - (newVertex2Y - vertex.dy) * 0.5519;
          let previousCurveData = modifiedCurves[$_get](rounded_corners_content.RoundedCornersContent.floorMod(modifiedCurvesIndex - 1, modifiedCurves[$length]));
          let currentCurveData = modifiedCurves[$_get](modifiedCurvesIndex);
          previousCurveData.controlPoint2 = new ui.Offset.new(newVertex1X, newVertex1Y);
          previousCurveData.vertex = new ui.Offset.new(newVertex1X, newVertex1Y);
          if (i === 0) {
            modifiedShapeData.setInitialPoint(newVertex1X, newVertex1Y);
          }
          currentCurveData.controlPoint1 = new ui.Offset.new(newVertex1OutPointX, newVertex1OutPointY);
          modifiedCurvesIndex = modifiedCurvesIndex + 1;
          previousCurveData = currentCurveData;
          currentCurveData = modifiedCurves[$_get](modifiedCurvesIndex);
          previousCurveData.controlPoint2 = new ui.Offset.new(newVertex2InPointX, newVertex2InPointY);
          previousCurveData.vertex = new ui.Offset.new(newVertex2X, newVertex2Y);
          currentCurveData.controlPoint1 = new ui.Offset.new(newVertex2X, newVertex2Y);
          modifiedCurvesIndex = modifiedCurvesIndex + 1;
        } else {
          let previousCurveData = modifiedCurves[$_get](rounded_corners_content.RoundedCornersContent.floorMod(modifiedCurvesIndex - 1, modifiedCurves[$length]));
          let currentCurveData = modifiedCurves[$_get](modifiedCurvesIndex);
          previousCurveData.controlPoint2 = new ui.Offset.new(previousCurve.vertex.dx, previousCurve.vertex.dy);
          previousCurveData.vertex = new ui.Offset.new(previousCurve.vertex.dx, previousCurve.vertex.dy);
          currentCurveData.controlPoint1 = new ui.Offset.new(startingCurve.vertex.dx, startingCurve.vertex.dy);
          modifiedCurvesIndex = modifiedCurvesIndex + 1;
        }
      }
      return modifiedShapeData;
    }
    [_getShapeData](startingShapeData) {
      let startingCurves = startingShapeData.curves;
      let isClosed = startingShapeData.isClosed;
      let vertices = 0;
      for (let i = startingCurves[$length] - 1; i >= 0; i = i - 1) {
        let startingCurve = startingCurves[$_get](i);
        let previousCurve = startingCurves[$_get](rounded_corners_content.RoundedCornersContent.floorMod(i - 1, startingCurves[$length]));
        let vertex = i === 0 && !isClosed ? startingShapeData.initialPoint : previousCurve.vertex;
        let inPoint = i === 0 && !isClosed ? vertex : previousCurve.controlPoint2;
        let outPoint = startingCurve.controlPoint1;
        let isEndOfCurve = !startingShapeData.isClosed && i === 0 && i === startingCurves[$length] - 1;
        if (inPoint._equals(vertex) && outPoint._equals(vertex) && !isEndOfCurve) {
          vertices = vertices + 2;
        } else {
          vertices = vertices + 1;
        }
      }
      let shapeData = this.shapeData;
      if (shapeData == null || shapeData.curves[$length] !== vertices) {
        let newCurves = T$.JSArrayOfCubicCurveData().of([]);
        for (let i = 0; i < vertices; i = i + 1) {
          newCurves[$add](new cubic_curve_data.CubicCurveData.new());
        }
        this.shapeData = shapeData = new shape_data.ShapeData.new(newCurves, {initialPoint: ui.Offset.zero, closed: false});
      }
      shapeData.setClosed(isClosed);
      return shapeData;
    }
    static floorMod(x, y) {
      return x - rounded_corners_content.RoundedCornersContent.floorDiv(x, y) * y;
    }
    static floorDiv(x, y) {
      let r = (x / y)[$truncate]();
      if ((x ^ y) >>> 0 < 0 && r * y !== x) {
        r = r - 1;
      }
      return r;
    }
  };
  (rounded_corners_content.RoundedCornersContent.new = function(lottieDrawable, layer, roundedCorners) {
    this[shapeData] = null;
    this[lottieDrawable$2] = lottieDrawable;
    this[name$4] = roundedCorners.name;
    this[roundedCorners$] = roundedCorners.cornerRadius.createAnimation();
    layer.addAnimation(this.roundedCorners);
    this.roundedCorners.addUpdateListener(dart.bind(this, _onValueChanged));
  }).prototype = rounded_corners_content.RoundedCornersContent.prototype;
  dart.addTypeTests(rounded_corners_content.RoundedCornersContent);
  dart.addTypeCaches(rounded_corners_content.RoundedCornersContent);
  rounded_corners_content.RoundedCornersContent[dart.implements] = () => [shape_modifier_content.ShapeModifierContent];
  dart.setMethodSignature(rounded_corners_content.RoundedCornersContent, () => ({
    __proto__: dart.getMethods(rounded_corners_content.RoundedCornersContent.__proto__),
    [_onValueChanged]: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    modifyShape: dart.fnType(shape_data.ShapeData, [shape_data.ShapeData]),
    [_getShapeData]: dart.fnType(shape_data.ShapeData, [shape_data.ShapeData])
  }));
  dart.setStaticMethodSignature(rounded_corners_content.RoundedCornersContent, () => ['floorMod', 'floorDiv']);
  dart.setLibraryUri(rounded_corners_content.RoundedCornersContent, I[30]);
  dart.setFieldSignature(rounded_corners_content.RoundedCornersContent, () => ({
    __proto__: dart.getFields(rounded_corners_content.RoundedCornersContent.__proto__),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    name: dart.finalFieldType(core.String),
    roundedCorners: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)),
    shapeData: dart.fieldType(dart.nullable(shape_data.ShapeData))
  }));
  dart.setStaticFieldSignature(rounded_corners_content.RoundedCornersContent, () => ['_roundedCornerMagicNumber']);
  dart.defineLazy(rounded_corners_content.RoundedCornersContent, {
    /*rounded_corners_content.RoundedCornersContent._roundedCornerMagicNumber*/get _roundedCornerMagicNumber() {
      return 0.5519;
    }
  }, false);
  var name$5 = dart.privateName(rectangle_content, "RectangleContent.name");
  var lottieDrawable$3 = dart.privateName(rectangle_content, "RectangleContent.lottieDrawable");
  var _path$1 = dart.privateName(rectangle_content, "_path");
  var _trimPaths$ = dart.privateName(rectangle_content, "_trimPaths");
  var _roundedCornersAnimation = dart.privateName(rectangle_content, "_roundedCornersAnimation");
  var _isPathValid$ = dart.privateName(rectangle_content, "_isPathValid");
  var _hidden$ = dart.privateName(rectangle_content, "_hidden");
  var _positionAnimation = dart.privateName(rectangle_content, "_positionAnimation");
  var _sizeAnimation = dart.privateName(rectangle_content, "_sizeAnimation");
  var _cornerRadiusAnimation = dart.privateName(rectangle_content, "_cornerRadiusAnimation");
  rectangle_content.RectangleContent = class RectangleContent extends core.Object {
    get name() {
      return this[name$5];
    }
    set name(value) {
      super.name = value;
    }
    get lottieDrawable() {
      return this[lottieDrawable$3];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, rectShape) {
      return new rectangle_content.RectangleContent.new(lottieDrawable, layer, rectShape);
    }
    invalidate() {
      this[_isPathValid$] = false;
      this.lottieDrawable.invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
      for (let i = 0; i < contentsBefore[$length]; i = i + 1) {
        let content = contentsBefore[$_get](i);
        if (trim_path_content.TrimPathContent.is(content) && content.type === shape_trim_path.ShapeTrimPathType.simultaneously) {
          let trimPath = content;
          this[_trimPaths$].addTrimPath(trimPath);
          trimPath.addListener(dart.bind(this, 'invalidate'));
        } else if (rounded_corners_content.RoundedCornersContent.is(content)) {
          this[_roundedCornersAnimation] = content.roundedCorners;
        }
      }
    }
    getPath() {
      if (this[_isPathValid$]) {
        return this[_path$1];
      }
      this[_path$1].reset();
      if (this[_hidden$]) {
        this[_isPathValid$] = true;
        return this[_path$1];
      }
      let size = this[_sizeAnimation].value;
      let halfWidth = size.dx / 2.0;
      let halfHeight = size.dy / 2.0;
      let radius = this[_cornerRadiusAnimation].value;
      let roundedCornersAnimation = this[_roundedCornersAnimation];
      if (radius === 0 && roundedCornersAnimation != null) {
        radius = math.min(core.double, roundedCornersAnimation.value, math.min(core.double, halfWidth, halfHeight));
      }
      let maxRadius = math.min(core.double, halfWidth, halfHeight);
      if (radius > maxRadius) {
        radius = maxRadius;
      }
      let position = this[_positionAnimation].value;
      this[_path$1].moveTo(position.dx + halfWidth, position.dy - halfHeight + radius);
      this[_path$1].lineTo(position.dx + halfWidth, position.dy + halfHeight - radius);
      if (radius > 0) {
        this[_path$1].arcTo(new ui.Rect.fromLTRB(position.dx + halfWidth - 2 * radius, position.dy + halfHeight - 2 * radius, position.dx + halfWidth, position.dy + halfHeight), 0.0, vector_math_64.radians(90.0), false);
      }
      this[_path$1].lineTo(position.dx - halfWidth + radius, position.dy + halfHeight);
      if (radius > 0) {
        this[_path$1].arcTo(new ui.Rect.fromLTRB(position.dx - halfWidth, position.dy + halfHeight - 2 * radius, position.dx - halfWidth + 2 * radius, position.dy + halfHeight), vector_math_64.radians(90.0), vector_math_64.radians(90.0), false);
      }
      this[_path$1].lineTo(position.dx - halfWidth, position.dy - halfHeight + radius);
      if (radius > 0) {
        this[_path$1].arcTo(new ui.Rect.fromLTRB(position.dx - halfWidth, position.dy - halfHeight, position.dx - halfWidth + 2 * radius, position.dy - halfHeight + 2 * radius), vector_math_64.radians(180.0), vector_math_64.radians(90.0), false);
      }
      this[_path$1].lineTo(position.dx + halfWidth - radius, position.dy - halfHeight);
      if (radius > 0) {
        this[_path$1].arcTo(new ui.Rect.fromLTRB(position.dx + halfWidth - 2 * radius, position.dy - halfHeight, position.dx + halfWidth, position.dy - halfHeight + 2 * radius), vector_math_64.radians(270.0), vector_math_64.radians(90.0), false);
      }
      this[_path$1].close();
      this[_trimPaths$].apply(this[_path$1]);
      this[_isPathValid$] = true;
      return this[_path$1];
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      misc.MiscUtils.resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath, this);
    }
    addValueCallback(T, property, callback) {
      if (dart.equals(property, lottie_property.LottieProperty.rectangleSize)) {
        this[_sizeAnimation].setValueCallback(T$.LottieValueCallbackNOfOffset().as(callback));
      } else if (dart.equals(property, lottie_property.LottieProperty.position)) {
        this[_positionAnimation].setValueCallback(T$.LottieValueCallbackNOfOffset().as(callback));
      } else if (dart.equals(property, 9)) {
        this[_cornerRadiusAnimation].setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      }
    }
  };
  (rectangle_content.RectangleContent.new = function(lottieDrawable, layer, rectShape) {
    this[_path$1] = path_factory.PathFactory.create();
    this[_trimPaths$] = new compound_trim_path_content.CompoundTrimPathContent.new();
    this[_roundedCornersAnimation] = null;
    this[_isPathValid$] = false;
    this[lottieDrawable$3] = lottieDrawable;
    this[name$5] = rectShape.name;
    this[_hidden$] = rectShape.hidden;
    this[_positionAnimation] = rectShape.position.createAnimation();
    this[_sizeAnimation] = rectShape.size.createAnimation();
    this[_cornerRadiusAnimation] = rectShape.cornerRadius.createAnimation();
    layer.addAnimation(this[_positionAnimation]);
    layer.addAnimation(this[_sizeAnimation]);
    layer.addAnimation(this[_cornerRadiusAnimation]);
    this[_positionAnimation].addUpdateListener(dart.bind(this, 'invalidate'));
    this[_sizeAnimation].addUpdateListener(dart.bind(this, 'invalidate'));
    this[_cornerRadiusAnimation].addUpdateListener(dart.bind(this, 'invalidate'));
  }).prototype = rectangle_content.RectangleContent.prototype;
  dart.addTypeTests(rectangle_content.RectangleContent);
  dart.addTypeCaches(rectangle_content.RectangleContent);
  rectangle_content.RectangleContent[dart.implements] = () => [key_path_element_content.KeyPathElementContent, path_content.PathContent];
  dart.setMethodSignature(rectangle_content.RectangleContent, () => ({
    __proto__: dart.getMethods(rectangle_content.RectangleContent.__proto__),
    invalidate: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    getPath: dart.fnType(ui.Path, []),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(rectangle_content.RectangleContent, I[31]);
  dart.setFieldSignature(rectangle_content.RectangleContent, () => ({
    __proto__: dart.getFields(rectangle_content.RectangleContent.__proto__),
    [_path$1]: dart.finalFieldType(ui.Path),
    name: dart.finalFieldType(dart.nullable(core.String)),
    [_hidden$]: dart.finalFieldType(core.bool),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    [_positionAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, ui.Offset)),
    [_sizeAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, ui.Offset)),
    [_cornerRadiusAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double)),
    [_trimPaths$]: dart.finalFieldType(compound_trim_path_content.CompoundTrimPathContent),
    [_roundedCornersAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_isPathValid$]: dart.fieldType(core.bool)
  }));
  var name$6 = dart.privateName(rectangle_shape, "RectangleShape.name");
  var position$ = dart.privateName(rectangle_shape, "RectangleShape.position");
  var size$ = dart.privateName(rectangle_shape, "RectangleShape.size");
  var cornerRadius$0 = dart.privateName(rectangle_shape, "RectangleShape.cornerRadius");
  var hidden$2 = dart.privateName(rectangle_shape, "RectangleShape.hidden");
  rectangle_shape.RectangleShape = class RectangleShape extends core.Object {
    get name() {
      return this[name$6];
    }
    set name(value) {
      super.name = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get cornerRadius() {
      return this[cornerRadius$0];
    }
    set cornerRadius(value) {
      super.cornerRadius = value;
    }
    get hidden() {
      return this[hidden$2];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let cornerRadius = opts && 'cornerRadius' in opts ? opts.cornerRadius : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new rectangle_shape.RectangleShape.new({name: name, position: position, size: size, cornerRadius: cornerRadius, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new rectangle_content.RectangleContent.new(drawable, layer, this);
    }
    toString() {
      return "RectangleShape{position=" + dart.str(this.position) + ", size=" + dart.str(this.size) + "}";
    }
  };
  (rectangle_shape.RectangleShape.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let cornerRadius = opts && 'cornerRadius' in opts ? opts.cornerRadius : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$6] = name;
    this[position$] = position;
    this[size$] = size;
    this[cornerRadius$0] = cornerRadius;
    this[hidden$2] = hidden;
    ;
  }).prototype = rectangle_shape.RectangleShape.prototype;
  dart.addTypeTests(rectangle_shape.RectangleShape);
  dart.addTypeCaches(rectangle_shape.RectangleShape);
  rectangle_shape.RectangleShape[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(rectangle_shape.RectangleShape, () => ({
    __proto__: dart.getMethods(rectangle_shape.RectangleShape.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(rectangle_shape.RectangleShape, I[32]);
  dart.setFieldSignature(rectangle_shape.RectangleShape, () => ({
    __proto__: dart.getFields(rectangle_shape.RectangleShape.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    position: dart.finalFieldType(animatable_value.AnimatableValue$(ui.Offset, ui.Offset)),
    size: dart.finalFieldType(animatable_value.AnimatableValue$(ui.Offset, ui.Offset)),
    cornerRadius: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    hidden: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(rectangle_shape.RectangleShape, ['toString']);
  rectangle_shape_parser.RectangleShapeParser = class RectangleShapeParser extends core.Object {
    static ['_#_#tearOff']() {
      return new rectangle_shape_parser.RectangleShapeParser.__();
    }
    static parse(reader, composition) {
      let name = null;
      let position = null;
      let size = null;
      let roundedness = null;
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(rectangle_shape_parser.RectangleShapeParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              position = animatable_path_value_parser.AnimatablePathValueParser.parseSplitPath(reader, composition);
              break;
            }
          case 2:
            {
              size = animatable_value_parser.AnimatableValueParser.parsePoint(reader, composition);
              break;
            }
          case 3:
            {
              roundedness = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
              break;
            }
          case 4:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      return new rectangle_shape.RectangleShape.new({name: name, position: dart.nullCheck(position), size: dart.nullCheck(size), cornerRadius: dart.nullCheck(roundedness), hidden: hidden});
    }
  };
  (rectangle_shape_parser.RectangleShapeParser.__ = function() {
    ;
  }).prototype = rectangle_shape_parser.RectangleShapeParser.prototype;
  dart.addTypeTests(rectangle_shape_parser.RectangleShapeParser);
  dart.addTypeCaches(rectangle_shape_parser.RectangleShapeParser);
  dart.setStaticMethodSignature(rectangle_shape_parser.RectangleShapeParser, () => ['parse']);
  dart.setLibraryUri(rectangle_shape_parser.RectangleShapeParser, I[33]);
  dart.setStaticFieldSignature(rectangle_shape_parser.RectangleShapeParser, () => ['_names']);
  dart.defineLazy(rectangle_shape_parser.RectangleShapeParser, {
    /*rectangle_shape_parser.RectangleShapeParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "p", "s", "r", "hd"]));
    }
  }, false);
  var lottieDrawable$4 = dart.privateName(polystar_content, "PolystarContent.lottieDrawable");
  var _path$2 = dart.privateName(polystar_content, "_path");
  var _trimPaths$0 = dart.privateName(polystar_content, "_trimPaths");
  var _isPathValid$0 = dart.privateName(polystar_content, "_isPathValid");
  var _polystarShape$ = dart.privateName(polystar_content, "_polystarShape");
  var _pointsAnimation = dart.privateName(polystar_content, "_pointsAnimation");
  var _positionAnimation$ = dart.privateName(polystar_content, "_positionAnimation");
  var _rotationAnimation = dart.privateName(polystar_content, "_rotationAnimation");
  var _outerRadiusAnimation = dart.privateName(polystar_content, "_outerRadiusAnimation");
  var _outerRoundednessAnimation = dart.privateName(polystar_content, "_outerRoundednessAnimation");
  var _innerRadiusAnimation = dart.privateName(polystar_content, "_innerRadiusAnimation");
  var _innerRoundednessAnimation = dart.privateName(polystar_content, "_innerRoundednessAnimation");
  var _createStarPath = dart.privateName(polystar_content, "_createStarPath");
  var PolystarShapeType_value = dart.privateName(polystar_shape, "PolystarShapeType.value");
  var _createPolygonPath = dart.privateName(polystar_content, "_createPolygonPath");
  polystar_content.PolystarContent = class PolystarContent extends core.Object {
    get lottieDrawable() {
      return this[lottieDrawable$4];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, _polystarShape) {
      return new polystar_content.PolystarContent.new(lottieDrawable, layer, _polystarShape);
    }
    invalidate() {
      this[_isPathValid$0] = false;
      this.lottieDrawable.invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
      for (let i = 0; i < contentsBefore[$length]; i = i + 1) {
        let content = contentsBefore[$_get](i);
        if (trim_path_content.TrimPathContent.is(content) && content.type === shape_trim_path.ShapeTrimPathType.simultaneously) {
          let trimPath = content;
          this[_trimPaths$0].addTrimPath(trimPath);
          trimPath.addListener(dart.bind(this, 'invalidate'));
        }
      }
    }
    getPath() {
      if (this[_isPathValid$0]) {
        return this[_path$2];
      }
      this[_path$2].reset();
      if (this[_polystarShape$].hidden) {
        this[_isPathValid$0] = true;
        return this[_path$2];
      }
      switch (this[_polystarShape$].type) {
        case C[19] || CT.C19:
          {
            this[_createStarPath]();
            break;
          }
        case C[20] || CT.C20:
          {
            this[_createPolygonPath]();
            break;
          }
      }
      this[_path$2].close();
      this[_trimPaths$0].apply(this[_path$2]);
      this[_isPathValid$0] = true;
      return this[_path$2];
    }
    get name() {
      return this[_polystarShape$].name;
    }
    [_createStarPath]() {
      let points = this[_pointsAnimation].value;
      let currentAngle = this[_rotationAnimation].value;
      currentAngle = currentAngle - 90;
      currentAngle = vector_math_64.radians(currentAngle);
      let anglePerPoint = 2 * 3.141592653589793 / points;
      if (this[_polystarShape$].isReversed) {
        anglePerPoint = anglePerPoint * -1;
      }
      let halfAnglePerPoint = anglePerPoint / 2.0;
      let partialPointAmount = points - points[$toInt]();
      if (partialPointAmount !== 0) {
        currentAngle = currentAngle + halfAnglePerPoint * (1.0 - partialPointAmount);
      }
      let outerRadius = this[_outerRadiusAnimation].value;
      let innerRadius = dart.nullCheck(this[_innerRadiusAnimation]).value;
      let innerRoundedness = 0.0;
      if (this[_innerRoundednessAnimation] != null) {
        innerRoundedness = dart.nullCheck(this[_innerRoundednessAnimation]).value / 100.0;
      }
      let outerRoundedness = this[_outerRoundednessAnimation].value / 100.0;
      let x = null;
      let y = null;
      let previousX = null;
      let previousY = null;
      let partialPointRadius = 0.0;
      if (partialPointAmount !== 0) {
        partialPointRadius = innerRadius + partialPointAmount * (outerRadius - innerRadius);
        x = partialPointRadius * math.cos(currentAngle);
        y = partialPointRadius * math.sin(currentAngle);
        this[_path$2].moveTo(x, y);
        currentAngle = currentAngle + anglePerPoint * partialPointAmount / 2.0;
      } else {
        x = outerRadius * math.cos(currentAngle);
        y = outerRadius * math.sin(currentAngle);
        this[_path$2].moveTo(x, y);
        currentAngle = currentAngle + halfAnglePerPoint;
      }
      let longSegment = false;
      let numPoints = (points[$ceil]() * 2)[$toDouble]();
      for (let i = 0; i < numPoints; i = i + 1) {
        let radius = longSegment ? outerRadius : innerRadius;
        let dTheta = halfAnglePerPoint;
        if (partialPointRadius !== 0 && i === numPoints - 2) {
          dTheta = anglePerPoint * partialPointAmount / 2.0;
        }
        if (partialPointRadius !== 0 && i === numPoints - 1) {
          radius = partialPointRadius;
        }
        previousX = x;
        previousY = y;
        x = radius * math.cos(currentAngle);
        y = radius * math.sin(currentAngle);
        if (innerRoundedness === 0 && outerRoundedness === 0) {
          this[_path$2].lineTo(x, y);
        } else {
          let cp1Theta = math.atan2(previousY, previousX) - 3.141592653589793 / 2.0;
          let cp1Dx = math.cos(cp1Theta);
          let cp1Dy = math.sin(cp1Theta);
          let cp2Theta = math.atan2(y, x) - 3.141592653589793 / 2.0;
          let cp2Dx = math.cos(cp2Theta);
          let cp2Dy = math.sin(cp2Theta);
          let cp1Roundedness = longSegment ? innerRoundedness : outerRoundedness;
          let cp2Roundedness = longSegment ? outerRoundedness : innerRoundedness;
          let cp1Radius = longSegment ? innerRadius : outerRadius;
          let cp2Radius = longSegment ? outerRadius : innerRadius;
          let cp1x = cp1Radius * cp1Roundedness * 0.47829 * cp1Dx;
          let cp1y = cp1Radius * cp1Roundedness * 0.47829 * cp1Dy;
          let cp2x = cp2Radius * cp2Roundedness * 0.47829 * cp2Dx;
          let cp2y = cp2Radius * cp2Roundedness * 0.47829 * cp2Dy;
          if (partialPointAmount !== 0) {
            if (i === 0) {
              cp1x = cp1x * partialPointAmount;
              cp1y = cp1y * partialPointAmount;
            } else if (i === numPoints - 1) {
              cp2x = cp2x * partialPointAmount;
              cp2y = cp2y * partialPointAmount;
            }
          }
          this[_path$2].cubicTo(previousX - cp1x, previousY - cp1y, x + cp2x, y + cp2y, x, y);
        }
        currentAngle = currentAngle + dTheta;
        longSegment = !longSegment;
      }
      let position = this[_positionAnimation$].value;
      this[_path$2].shift(position);
      this[_path$2].close();
    }
    [_createPolygonPath]() {
      let points = this[_pointsAnimation].value[$floor]();
      let currentAngle = this[_rotationAnimation].value;
      currentAngle = currentAngle - 90;
      currentAngle = vector_math_64.radians(currentAngle);
      let anglePerPoint = 2 * 3.141592653589793 / points;
      let roundedness = this[_outerRoundednessAnimation].value / 100.0;
      let radius = this[_outerRadiusAnimation].value;
      let x = null;
      let y = null;
      let previousX = null;
      let previousY = null;
      x = radius * math.cos(currentAngle);
      y = radius * math.sin(currentAngle);
      this[_path$2].moveTo(x, y);
      currentAngle = currentAngle + anglePerPoint;
      let numPoints = points[$ceil]()[$toDouble]();
      for (let i = 0; i < numPoints; i = i + 1) {
        previousX = x;
        previousY = y;
        x = radius * math.cos(currentAngle);
        y = radius * math.sin(currentAngle);
        if (roundedness !== 0) {
          let cp1Theta = math.atan2(previousY, previousX) - 3.141592653589793 / 2.0;
          let cp1Dx = math.cos(cp1Theta);
          let cp1Dy = math.sin(cp1Theta);
          let cp2Theta = math.atan2(y, x) - 3.141592653589793 / 2.0;
          let cp2Dx = math.cos(cp2Theta);
          let cp2Dy = math.sin(cp2Theta);
          let cp1x = radius * roundedness * 0.25 * cp1Dx;
          let cp1y = radius * roundedness * 0.25 * cp1Dy;
          let cp2x = radius * roundedness * 0.25 * cp2Dx;
          let cp2y = radius * roundedness * 0.25 * cp2Dy;
          this[_path$2].cubicTo(previousX - cp1x, previousY - cp1y, x + cp2x, y + cp2y, x, y);
        } else {
          this[_path$2].lineTo(x, y);
        }
        currentAngle = currentAngle + anglePerPoint;
      }
      let position = this[_positionAnimation$].value;
      this[_path$2].shift(position);
      this[_path$2].close();
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      misc.MiscUtils.resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath, this);
    }
    addValueCallback(T, property, callback) {
      if (dart.equals(property, 19)) {
        this[_pointsAnimation].setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else if (dart.equals(property, 20)) {
        this[_rotationAnimation].setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else if (dart.equals(property, lottie_property.LottieProperty.position)) {
        this[_positionAnimation$].setValueCallback(T$.LottieValueCallbackNOfOffset().as(callback));
      } else if (dart.equals(property, 21) && this[_innerRadiusAnimation] != null) {
        dart.nullCheck(this[_innerRadiusAnimation]).setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else if (dart.equals(property, 22)) {
        this[_outerRadiusAnimation].setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else if (dart.equals(property, 23) && this[_innerRoundednessAnimation] != null) {
        dart.nullCheck(this[_innerRoundednessAnimation]).setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else if (dart.equals(property, 24)) {
        this[_outerRoundednessAnimation].setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      }
    }
  };
  (polystar_content.PolystarContent.new = function(lottieDrawable, layer, _polystarShape) {
    this[_path$2] = path_factory.PathFactory.create();
    this[_trimPaths$0] = new compound_trim_path_content.CompoundTrimPathContent.new();
    this[_isPathValid$0] = false;
    this[lottieDrawable$4] = lottieDrawable;
    this[_polystarShape$] = _polystarShape;
    this[_pointsAnimation] = _polystarShape.points.createAnimation();
    this[_positionAnimation$] = _polystarShape.position.createAnimation();
    this[_rotationAnimation] = _polystarShape.rotation.createAnimation();
    this[_outerRadiusAnimation] = _polystarShape.outerRadius.createAnimation();
    this[_outerRoundednessAnimation] = _polystarShape.outerRoundedness.createAnimation();
    this[_innerRadiusAnimation] = dart.equals(_polystarShape.type, polystar_shape.PolystarShapeType.star) ? dart.nullCheck(_polystarShape.innerRadius).createAnimation() : null;
    this[_innerRoundednessAnimation] = dart.equals(_polystarShape.type, polystar_shape.PolystarShapeType.star) ? dart.nullCheck(_polystarShape.innerRoundedness).createAnimation() : null;
    layer.addAnimation(this[_pointsAnimation]);
    layer.addAnimation(this[_positionAnimation$]);
    layer.addAnimation(this[_rotationAnimation]);
    layer.addAnimation(this[_outerRadiusAnimation]);
    layer.addAnimation(this[_outerRoundednessAnimation]);
    if (dart.equals(this[_polystarShape$].type, polystar_shape.PolystarShapeType.star)) {
      layer.addAnimation(this[_innerRadiusAnimation]);
      layer.addAnimation(this[_innerRoundednessAnimation]);
    }
    this[_pointsAnimation].addUpdateListener(dart.bind(this, 'invalidate'));
    this[_positionAnimation$].addUpdateListener(dart.bind(this, 'invalidate'));
    this[_rotationAnimation].addUpdateListener(dart.bind(this, 'invalidate'));
    this[_outerRadiusAnimation].addUpdateListener(dart.bind(this, 'invalidate'));
    this[_outerRoundednessAnimation].addUpdateListener(dart.bind(this, 'invalidate'));
    if (dart.equals(this[_polystarShape$].type, polystar_shape.PolystarShapeType.star)) {
      dart.nullCheck(this[_innerRadiusAnimation]).addUpdateListener(dart.bind(this, 'invalidate'));
      dart.nullCheck(this[_innerRoundednessAnimation]).addUpdateListener(dart.bind(this, 'invalidate'));
    }
  }).prototype = polystar_content.PolystarContent.prototype;
  dart.addTypeTests(polystar_content.PolystarContent);
  dart.addTypeCaches(polystar_content.PolystarContent);
  polystar_content.PolystarContent[dart.implements] = () => [path_content.PathContent, key_path_element_content.KeyPathElementContent];
  dart.setMethodSignature(polystar_content.PolystarContent, () => ({
    __proto__: dart.getMethods(polystar_content.PolystarContent.__proto__),
    invalidate: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    getPath: dart.fnType(ui.Path, []),
    [_createStarPath]: dart.fnType(dart.void, []),
    [_createPolygonPath]: dart.fnType(dart.void, []),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(polystar_content.PolystarContent, () => ({
    __proto__: dart.getGetters(polystar_content.PolystarContent.__proto__),
    name: dart.nullable(core.String)
  }));
  dart.setLibraryUri(polystar_content.PolystarContent, I[34]);
  dart.setFieldSignature(polystar_content.PolystarContent, () => ({
    __proto__: dart.getFields(polystar_content.PolystarContent.__proto__),
    [_path$2]: dart.finalFieldType(ui.Path),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    [_polystarShape$]: dart.finalFieldType(polystar_shape.PolystarShape),
    [_pointsAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double)),
    [_positionAnimation$]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, ui.Offset)),
    [_rotationAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double)),
    [_innerRadiusAnimation]: dart.finalFieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double))),
    [_outerRadiusAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double)),
    [_innerRoundednessAnimation]: dart.finalFieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double))),
    [_outerRoundednessAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double)),
    [_trimPaths$0]: dart.finalFieldType(compound_trim_path_content.CompoundTrimPathContent),
    [_isPathValid$0]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(polystar_content.PolystarContent, () => ['_polystarMagicNumber', '_polygonMagicNumber']);
  dart.defineLazy(polystar_content.PolystarContent, {
    /*polystar_content.PolystarContent._polystarMagicNumber*/get _polystarMagicNumber() {
      return 0.47829;
    },
    /*polystar_content.PolystarContent._polygonMagicNumber*/get _polygonMagicNumber() {
      return 0.25;
    }
  }, false);
  const value$ = PolystarShapeType_value;
  polystar_shape.PolystarShapeType = class PolystarShapeType extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    static ['_#new#tearOff'](value) {
      return new polystar_shape.PolystarShapeType.new(value);
    }
    static forValue(value) {
      for (let type of polystar_shape.PolystarShapeType.values) {
        if (type.value === value) {
          return type;
        }
      }
      return null;
    }
  };
  (polystar_shape.PolystarShapeType.new = function(value) {
    this[value$] = value;
    ;
  }).prototype = polystar_shape.PolystarShapeType.prototype;
  dart.addTypeTests(polystar_shape.PolystarShapeType);
  dart.addTypeCaches(polystar_shape.PolystarShapeType);
  dart.setStaticMethodSignature(polystar_shape.PolystarShapeType, () => ['forValue']);
  dart.setLibraryUri(polystar_shape.PolystarShapeType, I[35]);
  dart.setFieldSignature(polystar_shape.PolystarShapeType, () => ({
    __proto__: dart.getFields(polystar_shape.PolystarShapeType.__proto__),
    value: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(polystar_shape.PolystarShapeType, () => ['star', 'polygon', 'values']);
  dart.defineLazy(polystar_shape.PolystarShapeType, {
    /*polystar_shape.PolystarShapeType.star*/get star() {
      return C[19] || CT.C19;
    },
    /*polystar_shape.PolystarShapeType.polygon*/get polygon() {
      return C[20] || CT.C20;
    },
    /*polystar_shape.PolystarShapeType.values*/get values() {
      return C[21] || CT.C21;
    }
  }, false);
  var name$7 = dart.privateName(polystar_shape, "PolystarShape.name");
  var type$ = dart.privateName(polystar_shape, "PolystarShape.type");
  var points$ = dart.privateName(polystar_shape, "PolystarShape.points");
  var position$0 = dart.privateName(polystar_shape, "PolystarShape.position");
  var rotation$ = dart.privateName(polystar_shape, "PolystarShape.rotation");
  var innerRadius$ = dart.privateName(polystar_shape, "PolystarShape.innerRadius");
  var outerRadius$ = dart.privateName(polystar_shape, "PolystarShape.outerRadius");
  var innerRoundedness$ = dart.privateName(polystar_shape, "PolystarShape.innerRoundedness");
  var outerRoundedness$ = dart.privateName(polystar_shape, "PolystarShape.outerRoundedness");
  var hidden$3 = dart.privateName(polystar_shape, "PolystarShape.hidden");
  var isReversed$ = dart.privateName(polystar_shape, "PolystarShape.isReversed");
  polystar_shape.PolystarShape = class PolystarShape extends core.Object {
    get name() {
      return this[name$7];
    }
    set name(value) {
      super.name = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get points() {
      return this[points$];
    }
    set points(value) {
      super.points = value;
    }
    get position() {
      return this[position$0];
    }
    set position(value) {
      super.position = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    get innerRadius() {
      return this[innerRadius$];
    }
    set innerRadius(value) {
      super.innerRadius = value;
    }
    get outerRadius() {
      return this[outerRadius$];
    }
    set outerRadius(value) {
      super.outerRadius = value;
    }
    get innerRoundedness() {
      return this[innerRoundedness$];
    }
    set innerRoundedness(value) {
      super.innerRoundedness = value;
    }
    get outerRoundedness() {
      return this[outerRoundedness$];
    }
    set outerRoundedness(value) {
      super.outerRoundedness = value;
    }
    get hidden() {
      return this[hidden$3];
    }
    set hidden(value) {
      super.hidden = value;
    }
    get isReversed() {
      return this[isReversed$];
    }
    set isReversed(value) {
      super.isReversed = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let points = opts && 'points' in opts ? opts.points : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let rotation = opts && 'rotation' in opts ? opts.rotation : null;
      let innerRadius = opts && 'innerRadius' in opts ? opts.innerRadius : null;
      let outerRadius = opts && 'outerRadius' in opts ? opts.outerRadius : null;
      let innerRoundedness = opts && 'innerRoundedness' in opts ? opts.innerRoundedness : null;
      let outerRoundedness = opts && 'outerRoundedness' in opts ? opts.outerRoundedness : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      let isReversed = opts && 'isReversed' in opts ? opts.isReversed : null;
      return new polystar_shape.PolystarShape.new({name: name, type: type, points: points, position: position, rotation: rotation, innerRadius: innerRadius, outerRadius: outerRadius, innerRoundedness: innerRoundedness, outerRoundedness: outerRoundedness, hidden: hidden, isReversed: isReversed});
    }
    toContent(drawable, layer) {
      return new polystar_content.PolystarContent.new(drawable, layer, this);
    }
  };
  (polystar_shape.PolystarShape.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let points = opts && 'points' in opts ? opts.points : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let rotation = opts && 'rotation' in opts ? opts.rotation : null;
    let innerRadius = opts && 'innerRadius' in opts ? opts.innerRadius : null;
    let outerRadius = opts && 'outerRadius' in opts ? opts.outerRadius : null;
    let innerRoundedness = opts && 'innerRoundedness' in opts ? opts.innerRoundedness : null;
    let outerRoundedness = opts && 'outerRoundedness' in opts ? opts.outerRoundedness : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    let isReversed = opts && 'isReversed' in opts ? opts.isReversed : null;
    this[name$7] = name;
    this[type$] = type;
    this[points$] = points;
    this[position$0] = position;
    this[rotation$] = rotation;
    this[innerRadius$] = innerRadius;
    this[outerRadius$] = outerRadius;
    this[innerRoundedness$] = innerRoundedness;
    this[outerRoundedness$] = outerRoundedness;
    this[hidden$3] = hidden;
    this[isReversed$] = isReversed;
    ;
  }).prototype = polystar_shape.PolystarShape.prototype;
  dart.addTypeTests(polystar_shape.PolystarShape);
  dart.addTypeCaches(polystar_shape.PolystarShape);
  polystar_shape.PolystarShape[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(polystar_shape.PolystarShape, () => ({
    __proto__: dart.getMethods(polystar_shape.PolystarShape.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(polystar_shape.PolystarShape, I[35]);
  dart.setFieldSignature(polystar_shape.PolystarShape, () => ({
    __proto__: dart.getFields(polystar_shape.PolystarShape.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    type: dart.finalFieldType(dart.nullable(polystar_shape.PolystarShapeType)),
    points: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    position: dart.finalFieldType(animatable_value.AnimatableValue$(ui.Offset, ui.Offset)),
    rotation: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    innerRadius: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    outerRadius: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    innerRoundedness: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    outerRoundedness: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    hidden: dart.finalFieldType(core.bool),
    isReversed: dart.finalFieldType(core.bool)
  }));
  polysar_shape_parser.PolystarShapeParser = class PolystarShapeParser extends core.Object {
    static ['_#_#tearOff']() {
      return new polysar_shape_parser.PolystarShapeParser.__();
    }
    static parse(reader, composition, opts) {
      let d = opts && 'd' in opts ? opts.d : null;
      let name = null;
      let type = null;
      let points = null;
      function points$35get() {
        let t16;
        t16 = points;
        return t16 == null ? dart.throw(new _internal.LateError.localNI("points")) : t16;
      }
      dart.fn(points$35get, T$.VoidToAnimatableDoubleValue());
      function points$35set(points$35param) {
        return points = points$35param;
      }
      dart.fn(points$35set, T$.AnimatableDoubleValueTodynamic());
      let position = null;
      function position$35get() {
        let t19;
        t19 = position;
        return t19 == null ? dart.throw(new _internal.LateError.localNI("position")) : t19;
      }
      dart.fn(position$35get, T$.VoidToAnimatableValueOfOffset$Offset());
      function position$35set(position$35param) {
        return position = position$35param;
      }
      dart.fn(position$35set, T$.AnimatableValueOfOffset$OffsetTodynamic());
      let rotation = null;
      function rotation$35get() {
        let t22;
        t22 = rotation;
        return t22 == null ? dart.throw(new _internal.LateError.localNI("rotation")) : t22;
      }
      dart.fn(rotation$35get, T$.VoidToAnimatableDoubleValue());
      function rotation$35set(rotation$35param) {
        return rotation = rotation$35param;
      }
      dart.fn(rotation$35set, T$.AnimatableDoubleValueTodynamic());
      let outerRadius = null;
      function outerRadius$35get() {
        let t25;
        t25 = outerRadius;
        return t25 == null ? dart.throw(new _internal.LateError.localNI("outerRadius")) : t25;
      }
      dart.fn(outerRadius$35get, T$.VoidToAnimatableDoubleValue());
      function outerRadius$35set(outerRadius$35param) {
        return outerRadius = outerRadius$35param;
      }
      dart.fn(outerRadius$35set, T$.AnimatableDoubleValueTodynamic());
      let outerRoundedness = null;
      function outerRoundedness$35get() {
        let t28;
        t28 = outerRoundedness;
        return t28 == null ? dart.throw(new _internal.LateError.localNI("outerRoundedness")) : t28;
      }
      dart.fn(outerRoundedness$35get, T$.VoidToAnimatableDoubleValue());
      function outerRoundedness$35set(outerRoundedness$35param) {
        return outerRoundedness = outerRoundedness$35param;
      }
      dart.fn(outerRoundedness$35set, T$.AnimatableDoubleValueTodynamic());
      let innerRadius = null;
      let innerRoundedness = null;
      let hidden = false;
      let reversed = d === 3;
      while (reader.hasNext()) {
        switch (reader.selectName(polysar_shape_parser.PolystarShapeParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              type = polystar_shape.PolystarShapeType.forValue(reader.nextInt());
              break;
            }
          case 2:
            {
              points$35set(animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false}));
              break;
            }
          case 3:
            {
              position$35set(animatable_path_value_parser.AnimatablePathValueParser.parseSplitPath(reader, composition));
              break;
            }
          case 4:
            {
              rotation$35set(animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false}));
              break;
            }
          case 5:
            {
              outerRadius$35set(animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition));
              break;
            }
          case 6:
            {
              outerRoundedness$35set(animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false}));
              break;
            }
          case 7:
            {
              innerRadius = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
              break;
            }
          case 8:
            {
              innerRoundedness = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 9:
            {
              hidden = reader.nextBoolean();
              break;
            }
          case 10:
            {
              reversed = reader.nextInt() === 3;
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      return new polystar_shape.PolystarShape.new({name: name, type: type, points: points$35get(), position: position$35get(), rotation: rotation$35get(), innerRadius: innerRadius, outerRadius: outerRadius$35get(), innerRoundedness: innerRoundedness, outerRoundedness: outerRoundedness$35get(), hidden: hidden, isReversed: reversed});
    }
  };
  (polysar_shape_parser.PolystarShapeParser.__ = function() {
    ;
  }).prototype = polysar_shape_parser.PolystarShapeParser.prototype;
  dart.addTypeTests(polysar_shape_parser.PolystarShapeParser);
  dart.addTypeCaches(polysar_shape_parser.PolystarShapeParser);
  dart.setStaticMethodSignature(polysar_shape_parser.PolystarShapeParser, () => ['parse']);
  dart.setLibraryUri(polysar_shape_parser.PolystarShapeParser, I[36]);
  dart.setStaticFieldSignature(polysar_shape_parser.PolystarShapeParser, () => ['_names']);
  dart.defineLazy(polysar_shape_parser.PolystarShapeParser, {
    /*polysar_shape_parser.PolystarShapeParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "sy", "pt", "p", "r", "or", "os", "ir", "is", "hd", "d"]));
    }
  }, false);
  var _firstPath = dart.privateName(merge_paths_content, "_firstPath");
  var _remainderPath = dart.privateName(merge_paths_content, "_remainderPath");
  var _path$3 = dart.privateName(merge_paths_content, "_path");
  var _pathContents = dart.privateName(merge_paths_content, "_pathContents");
  var _mergePaths$ = dart.privateName(merge_paths_content, "_mergePaths");
  var _addPaths = dart.privateName(merge_paths_content, "_addPaths");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _opFirstPathWithRest = dart.privateName(merge_paths_content, "_opFirstPathWithRest");
  merge_paths_content.MergePathsContent = class MergePathsContent extends core.Object {
    static ['_#new#tearOff'](_mergePaths) {
      return new merge_paths_content.MergePathsContent.new(_mergePaths);
    }
    absorbContent(contents) {
      let index = contents[$lastIndexOf](this) - 1;
      while (index >= 0) {
        let content = contents[$_get](index);
        if (path_content.PathContent.is(content)) {
          this[_pathContents][$add](content);
          contents[$removeAt](index);
        }
        index = index - 1;
      }
    }
    setContents(contentsBefore, contentsAfter) {
      for (let i = 0; i < this[_pathContents][$length]; i = i + 1) {
        this[_pathContents][$_get](i).setContents(contentsBefore, contentsAfter);
      }
    }
    getPath() {
      this[_path$3].reset();
      if (this[_mergePaths$].hidden) {
        return this[_path$3];
      }
      switch (this[_mergePaths$].mode) {
        case C[22] || CT.C22:
          {
            this[_addPaths]();
            break;
          }
        case C[23] || CT.C23:
          {
            this[_opFirstPathWithRest](ui.PathOperation.union);
            break;
          }
        case C[24] || CT.C24:
          {
            this[_opFirstPathWithRest](ui.PathOperation.reverseDifference);
            break;
          }
        case C[25] || CT.C25:
          {
            this[_opFirstPathWithRest](ui.PathOperation.intersect);
            break;
          }
        case C[26] || CT.C26:
          {
            this[_opFirstPathWithRest](ui.PathOperation.xor);
            break;
          }
      }
      return this[_path$3];
    }
    get name() {
      return this[_mergePaths$].name;
    }
    [_addPaths]() {
      for (let i = 0; i < this[_pathContents][$length]; i = i + 1) {
        this[_path$3].addPath(this[_pathContents][$_get](i).getPath(), ui.Offset.zero);
      }
    }
    [_opFirstPathWithRest](op) {
      this[_remainderPath].reset();
      this[_firstPath].reset();
      for (let i = this[_pathContents][$length] - 1; i >= 1; i = i - 1) {
        let content = this[_pathContents][$_get](i);
        if (content_group.ContentGroup.is(content)) {
          let pathList = content.getPathList();
          for (let j = pathList[$length] - 1; j >= 0; j = j - 1) {
            let path = pathList[$_get](j).getPath();
            path = path.transform(content.getTransformationMatrix().storage);
            this[_remainderPath].addPath(path, ui.Offset.zero);
          }
        } else {
          this[_remainderPath].addPath(content.getPath(), ui.Offset.zero);
        }
      }
      let lastContent = this[_pathContents][$_get](0);
      if (content_group.ContentGroup.is(lastContent)) {
        let pathList = lastContent.getPathList();
        for (let j = 0; j < pathList[$length]; j = j + 1) {
          let path = pathList[$_get](j).getPath();
          path = path.transform(lastContent.getTransformationMatrix().storage);
          this[_firstPath].addPath(path, ui.Offset.zero);
        }
      } else {
        utils['PathExtension|set'](this[_firstPath], lastContent.getPath());
      }
      utils['PathExtension|set'](this[_path$3], ui.Path.combine(op, this[_firstPath], this[_remainderPath]));
    }
  };
  (merge_paths_content.MergePathsContent.new = function(_mergePaths) {
    this[_firstPath] = path_factory.PathFactory.create();
    this[_remainderPath] = path_factory.PathFactory.create();
    this[_path$3] = path_factory.PathFactory.create();
    this[_pathContents] = T$.JSArrayOfPathContent().of([]);
    this[_mergePaths$] = _mergePaths;
    ;
  }).prototype = merge_paths_content.MergePathsContent.prototype;
  dart.addTypeTests(merge_paths_content.MergePathsContent);
  dart.addTypeCaches(merge_paths_content.MergePathsContent);
  merge_paths_content.MergePathsContent[dart.implements] = () => [path_content.PathContent, greedy_content.GreedyContent];
  dart.setMethodSignature(merge_paths_content.MergePathsContent, () => ({
    __proto__: dart.getMethods(merge_paths_content.MergePathsContent.__proto__),
    absorbContent: dart.fnType(dart.void, [core.List$(content.Content)]),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    getPath: dart.fnType(ui.Path, []),
    [_addPaths]: dart.fnType(dart.void, []),
    [_opFirstPathWithRest]: dart.fnType(dart.void, [ui.PathOperation])
  }));
  dart.setGetterSignature(merge_paths_content.MergePathsContent, () => ({
    __proto__: dart.getGetters(merge_paths_content.MergePathsContent.__proto__),
    name: core.String
  }));
  dart.setLibraryUri(merge_paths_content.MergePathsContent, I[37]);
  dart.setFieldSignature(merge_paths_content.MergePathsContent, () => ({
    __proto__: dart.getFields(merge_paths_content.MergePathsContent.__proto__),
    [_firstPath]: dart.finalFieldType(ui.Path),
    [_remainderPath]: dart.finalFieldType(ui.Path),
    [_path$3]: dart.finalFieldType(ui.Path),
    [_pathContents]: dart.finalFieldType(core.List$(path_content.PathContent)),
    [_mergePaths$]: dart.finalFieldType(merge_paths.MergePaths)
  }));
  var _name = dart.privateName(core, "_name");
  merge_paths.MergePathsMode = class MergePathsMode extends core._Enum {
    toString() {
      return "MergePathsMode." + this[_name];
    }
  };
  (merge_paths.MergePathsMode.new = function(index, name) {
    merge_paths.MergePathsMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = merge_paths.MergePathsMode.prototype;
  dart.addTypeTests(merge_paths.MergePathsMode);
  dart.addTypeCaches(merge_paths.MergePathsMode);
  dart.setLibraryUri(merge_paths.MergePathsMode, I[38]);
  dart.setStaticFieldSignature(merge_paths.MergePathsMode, () => ['values', 'merge', 'add', 'substract', 'intersect', 'excludeIntersections']);
  dart.defineExtensionMethods(merge_paths.MergePathsMode, ['toString']);
  dart.defineLazy(merge_paths.MergePathsMode, {
    /*merge_paths.MergePathsMode.values*/get values() {
      return C[27] || CT.C27;
    },
    /*merge_paths.MergePathsMode.merge*/get merge() {
      return C[22] || CT.C22;
    },
    /*merge_paths.MergePathsMode.add*/get add() {
      return C[23] || CT.C23;
    },
    /*merge_paths.MergePathsMode.substract*/get substract() {
      return C[24] || CT.C24;
    },
    /*merge_paths.MergePathsMode.intersect*/get intersect() {
      return C[25] || CT.C25;
    },
    /*merge_paths.MergePathsMode.excludeIntersections*/get excludeIntersections() {
      return C[26] || CT.C26;
    }
  }, false);
  var name$8 = dart.privateName(merge_paths, "MergePaths.name");
  var mode$ = dart.privateName(merge_paths, "MergePaths.mode");
  var hidden$4 = dart.privateName(merge_paths, "MergePaths.hidden");
  merge_paths.MergePaths = class MergePaths extends core.Object {
    get name() {
      return this[name$8];
    }
    set name(value) {
      super.name = value;
    }
    get mode() {
      return this[mode$];
    }
    set mode(value) {
      super.mode = value;
    }
    get hidden() {
      return this[hidden$4];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let mode = opts && 'mode' in opts ? opts.mode : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new merge_paths.MergePaths.new({name: name, mode: mode, hidden: hidden});
    }
    toContent(drawable, layer) {
      if (!drawable.enableMergePaths) {
        drawable.composition.addWarning("Animation contains merge paths but they are disabled.");
        return null;
      }
      return new merge_paths_content.MergePathsContent.new(this);
    }
    toString() {
      return "MergePaths{mode=" + dart.str(this.mode) + "}";
    }
    static modeForId(id) {
      switch (id) {
        case 1:
          {
            return merge_paths.MergePathsMode.merge;
          }
        case 2:
          {
            return merge_paths.MergePathsMode.add;
          }
        case 3:
          {
            return merge_paths.MergePathsMode.substract;
          }
        case 4:
          {
            return merge_paths.MergePathsMode.intersect;
          }
        case 5:
          {
            return merge_paths.MergePathsMode.excludeIntersections;
          }
        default:
          {
            return merge_paths.MergePathsMode.merge;
          }
      }
    }
  };
  (merge_paths.MergePaths.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let mode = opts && 'mode' in opts ? opts.mode : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$8] = name;
    this[mode$] = mode;
    this[hidden$4] = hidden;
    ;
  }).prototype = merge_paths.MergePaths.prototype;
  dart.addTypeTests(merge_paths.MergePaths);
  dart.addTypeCaches(merge_paths.MergePaths);
  merge_paths.MergePaths[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(merge_paths.MergePaths, () => ({
    __proto__: dart.getMethods(merge_paths.MergePaths.__proto__),
    toContent: dart.fnType(dart.nullable(content.Content), [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setStaticMethodSignature(merge_paths.MergePaths, () => ['modeForId']);
  dart.setLibraryUri(merge_paths.MergePaths, I[38]);
  dart.setFieldSignature(merge_paths.MergePaths, () => ({
    __proto__: dart.getFields(merge_paths.MergePaths.__proto__),
    name: dart.finalFieldType(core.String),
    mode: dart.finalFieldType(merge_paths.MergePathsMode),
    hidden: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(merge_paths.MergePaths, ['toString']);
  merge_paths_parser.MergePathsParser = class MergePathsParser extends core.Object {
    static ['_#_#tearOff']() {
      return new merge_paths_parser.MergePathsParser.__();
    }
    static parse(reader) {
      let t35;
      let name = null;
      let mode = null;
      function mode$35get() {
        let t33;
        t33 = mode;
        return t33 == null ? dart.throw(new _internal.LateError.localNI("mode")) : t33;
      }
      dart.fn(mode$35get, T$.VoidToMergePathsMode());
      function mode$35set(mode$35param) {
        return mode = mode$35param;
      }
      dart.fn(mode$35set, T$.MergePathsModeTodynamic());
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(merge_paths_parser.MergePathsParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              mode$35set(merge_paths.MergePaths.modeForId(reader.nextInt()));
              break;
            }
          case 2:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      return new merge_paths.MergePaths.new({name: (t35 = name, t35 == null ? "" : t35), mode: mode$35get(), hidden: hidden});
    }
  };
  (merge_paths_parser.MergePathsParser.__ = function() {
    ;
  }).prototype = merge_paths_parser.MergePathsParser.prototype;
  dart.addTypeTests(merge_paths_parser.MergePathsParser);
  dart.addTypeCaches(merge_paths_parser.MergePathsParser);
  dart.setStaticMethodSignature(merge_paths_parser.MergePathsParser, () => ['parse']);
  dart.setLibraryUri(merge_paths_parser.MergePathsParser, I[39]);
  dart.setStaticFieldSignature(merge_paths_parser.MergePathsParser, () => ['_names']);
  dart.defineLazy(merge_paths_parser.MergePathsParser, {
    /*merge_paths_parser.MergePathsParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "mm", "hd"]));
    }
  }, false);
  var lottieDrawable$5 = dart.privateName(base_stroke_content, "BaseStrokeContent.lottieDrawable");
  var layer$2 = dart.privateName(base_stroke_content, "BaseStrokeContent.layer");
  var paint = dart.privateName(base_stroke_content, "BaseStrokeContent.paint");
  var dropShadowAnimation$ = dart.privateName(base_stroke_content, "BaseStrokeContent.dropShadowAnimation");
  var _path$4 = dart.privateName(base_stroke_content, "_path");
  var _trimPathPath = dart.privateName(base_stroke_content, "_trimPathPath");
  var _pathGroups = dart.privateName(base_stroke_content, "_pathGroups");
  var _colorFilterAnimation$ = dart.privateName(base_stroke_content, "_colorFilterAnimation");
  var _blurAnimation$ = dart.privateName(base_stroke_content, "_blurAnimation");
  var _blurMaskFilterRadius$ = dart.privateName(base_stroke_content, "_blurMaskFilterRadius");
  var _widthAnimation = dart.privateName(base_stroke_content, "_widthAnimation");
  var _opacityAnimation$ = dart.privateName(base_stroke_content, "_opacityAnimation");
  var _dashPatternOffsetAnimation = dart.privateName(base_stroke_content, "_dashPatternOffsetAnimation");
  var _dashPatternAnimations = dart.privateName(base_stroke_content, "_dashPatternAnimations");
  var _dashPatternValues = dart.privateName(base_stroke_content, "_dashPatternValues");
  var _applyTrimPath = dart.privateName(base_stroke_content, "_applyTrimPath");
  var _withDashPattern = dart.privateName(base_stroke_content, "_withDashPattern");
  base_stroke_content.BaseStrokeContent = class BaseStrokeContent extends core.Object {
    get lottieDrawable() {
      return this[lottieDrawable$5];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    get layer() {
      return this[layer$2];
    }
    set layer(value) {
      super.layer = value;
    }
    get paint() {
      return this[paint];
    }
    set paint(value) {
      super.paint = value;
    }
    get dropShadowAnimation() {
      return this[dropShadowAnimation$];
    }
    set dropShadowAnimation(value) {
      this[dropShadowAnimation$] = value;
    }
    onUpdateListener() {
      this.lottieDrawable.invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
      let trimPathContentBefore = null;
      for (let i = contentsBefore[$length] - 1; i >= 0; i = i - 1) {
        let content = contentsBefore[$_get](i);
        if (trim_path_content.TrimPathContent.is(content) && content.type === shape_trim_path.ShapeTrimPathType.individually) {
          trimPathContentBefore = content;
        }
      }
      if (trimPathContentBefore != null) {
        trimPathContentBefore.addListener(dart.bind(this, 'onUpdateListener'));
      }
      let currentPathGroup = null;
      for (let i = contentsAfter[$length] - 1; i >= 0; i = i - 1) {
        let content = contentsAfter[$_get](i);
        if (trim_path_content.TrimPathContent.is(content) && content.type === shape_trim_path.ShapeTrimPathType.individually) {
          if (currentPathGroup != null) {
            this[_pathGroups][$add](currentPathGroup);
          }
          currentPathGroup = new base_stroke_content._PathGroup.new(content);
          content.addListener(dart.bind(this, 'onUpdateListener'));
        } else if (path_content.PathContent.is(content)) {
          currentPathGroup == null ? currentPathGroup = new base_stroke_content._PathGroup.new(trimPathContentBefore) : null;
          currentPathGroup.paths[$add](content);
        }
      }
      if (currentPathGroup != null) {
        this[_pathGroups][$add](currentPathGroup);
      }
    }
    draw(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      l.L.beginSection("StrokeContent#draw");
      if (utils['Matrix4Extension|get#hasZeroScaleAxis'](parentMatrix)) {
        l.L.endSection("StrokeContent#draw");
        return;
      }
      let alpha = (parentAlpha / 255.0 * this[_opacityAnimation$].value / 100.0 * 255)[$round]();
      utils['PaintExtension|setAlpha'](this.paint, alpha[$clamp](0, 255)[$toInt]());
      this.paint.strokeWidth = this[_widthAnimation].value * utils['Matrix4Extension|getScale'](parentMatrix);
      if (this.paint.strokeWidth <= 0) {
        l.L.endSection("StrokeContent#draw");
        return;
      }
      if (this[_colorFilterAnimation$] != null) {
        this.paint.colorFilter = dart.nullCheck(this[_colorFilterAnimation$]).value;
      }
      let blurAnimation = this[_blurAnimation$];
      if (blurAnimation != null) {
        let blurRadius = blurAnimation.value;
        if (blurRadius === 0) {
          this.paint.maskFilter = null;
        } else if (blurRadius !== this[_blurMaskFilterRadius$]) {
          let blur = this.layer.getBlurMaskFilter(blurRadius);
          this.paint.maskFilter = blur;
        }
        this[_blurMaskFilterRadius$] = blurRadius;
      }
      for (let i = 0; i < this[_pathGroups][$length]; i = i + 1) {
        let pathGroup = this[_pathGroups][$_get](i);
        if (pathGroup.trimPath != null) {
          this[_applyTrimPath](canvas, pathGroup, parentMatrix);
        } else {
          l.L.beginSection("StrokeContent#buildPath");
          this[_path$4].reset();
          for (let j = pathGroup.paths[$length] - 1; j >= 0; j = j - 1) {
            this[_path$4].addPath(pathGroup.paths[$_get](j).getPath(), ui.Offset.zero, {matrix4: parentMatrix.storage});
          }
          l.L.endSection("StrokeContent#buildPath");
          l.L.beginSection("StrokeContent#drawPath");
          let dropShadow = this.dropShadowAnimation;
          if (dropShadow != null) {
            dropShadow.draw(canvas, this[_path$4]);
          }
          canvas.drawPath(this[_withDashPattern](this[_path$4], parentMatrix), this.paint);
          l.L.endSection("StrokeContent#drawPath");
        }
      }
      l.L.endSection("StrokeContent#draw");
    }
    [_applyTrimPath](canvas, pathGroup, parentMatrix) {
      l.L.beginSection("StrokeContent#applyTrimPath");
      let trimPath = pathGroup.trimPath;
      if (trimPath == null) {
        l.L.endSection("StrokeContent#applyTrimPath");
        return;
      }
      this[_path$4].reset();
      for (let j = pathGroup.paths[$length] - 1; j >= 0; j = j - 1) {
        this[_path$4].addPath(pathGroup.paths[$_get](j).getPath(), ui.Offset.zero, {matrix4: parentMatrix.storage});
      }
      let animStartValue = trimPath.start.value / 100;
      let animEndValue = trimPath.end.value / 100;
      let animOffsetValue = trimPath.offset.value / 360;
      if (animStartValue < 0.01 && animEndValue > 0.99) {
        canvas.drawPath(this[_path$4], this.paint);
        l.L.endSection("StrokeContent#applyTrimPath");
        return;
      }
      let pathMetrics = this[_path$4].computeMetrics()[$toList]();
      let totalLength = pathMetrics[$fold](core.double, 0.0, dart.fn((a, b) => a + b.length, T$.doubleAndPathMetricTodouble()));
      let offsetLength = totalLength * animOffsetValue;
      let startLength = totalLength * animStartValue + offsetLength;
      let endLength = math.min(core.double, totalLength * animEndValue + offsetLength, startLength + totalLength - 1);
      let currentLength = 0.0;
      for (let j = pathGroup.paths[$length] - 1; j >= 0; j = j - 1) {
        utils['PathExtension|set'](this[_trimPathPath], pathGroup.paths[$_get](j).getPath().transform(parentMatrix.storage));
        let pathMetrics = this[_trimPathPath].computeMetrics()[$toList]();
        let length = pathMetrics[$isNotEmpty] ? pathMetrics[$first].length : 0;
        if (endLength > totalLength && endLength - totalLength < currentLength + length && currentLength < endLength - totalLength) {
          let startValue = null;
          if (startLength > totalLength) {
            startValue = (startLength - totalLength) / length;
          } else {
            startValue = 0.0;
          }
          let endValue = math.min(core.num, (endLength - totalLength) / length, 1)[$toDouble]();
          utils$.Utils.applyTrimPathIfNeeded(this[_trimPathPath], startValue, endValue, 0.0);
          canvas.drawPath(this[_withDashPattern](this[_trimPathPath], parentMatrix), this.paint);
        } else if (currentLength + length < startLength || currentLength > endLength) {
        } else if (currentLength + length <= endLength && startLength < currentLength) {
          canvas.drawPath(this[_withDashPattern](this[_trimPathPath], parentMatrix), this.paint);
        } else {
          let startValue = null;
          if (startLength < currentLength) {
            startValue = 0.0;
          } else {
            startValue = (startLength - currentLength) / length;
          }
          let endValue = null;
          if (endLength > currentLength + length) {
            endValue = 1.0;
          } else {
            endValue = (endLength - currentLength) / length;
          }
          utils$.Utils.applyTrimPathIfNeeded(this[_trimPathPath], startValue, endValue, 0.0);
          canvas.drawPath(this[_withDashPattern](this[_trimPathPath], parentMatrix), this.paint);
        }
        currentLength = currentLength + length;
      }
      l.L.endSection("StrokeContent#applyTrimPath");
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      l.L.beginSection("StrokeContent#getBounds");
      this[_path$4].reset();
      for (let i = 0; i < this[_pathGroups][$length]; i = i + 1) {
        let pathGroup = this[_pathGroups][$_get](i);
        for (let j = 0; j < pathGroup.paths[$length]; j = j + 1) {
          this[_path$4].addPath(pathGroup.paths[$_get](j).getPath(), ui.Offset.zero, {matrix4: parentMatrix.storage});
        }
      }
      let bounds = this[_path$4].getBounds();
      let width = this[_widthAnimation].value;
      bounds = bounds.inflate(width / 2.0);
      bounds = bounds.inflate(1.0);
      l.L.endSection("StrokeContent#getBounds");
      return bounds;
    }
    [_withDashPattern](path, parentMatrix) {
      let t36, t35;
      l.L.beginSection("StrokeContent#applyDashPattern");
      if (this[_dashPatternAnimations][$isEmpty]) {
        l.L.endSection("StrokeContent#applyDashPattern");
        return path;
      }
      let scale = utils['Matrix4Extension|getScale'](parentMatrix);
      for (let i = 0; i < this[_dashPatternAnimations][$length]; i = i + 1) {
        this[_dashPatternValues][$_set](i, this[_dashPatternAnimations][$_get](i).value);
        if (i[$modulo](2) === 0) {
          if (this[_dashPatternValues][$_get](i) < 1.0) {
            this[_dashPatternValues][$_set](i, 1.0);
          }
        } else {
          if (this[_dashPatternValues][$_get](i) < 0.1) {
            this[_dashPatternValues][$_set](i, 0.1);
          }
        }
        t35 = this[_dashPatternValues];
        t36 = i;
        t35[$_set](t36, t35[$_get](t36) * scale);
      }
      let offset = this[_dashPatternOffsetAnimation] == null ? 0.0 : dart.nullCheck(this[_dashPatternOffsetAnimation]).value * scale;
      let newPath = dash_path.dashPath(path, {intervals: this[_dashPatternValues], phase: offset});
      l.L.endSection("StrokeContent#applyDashPattern");
      return newPath;
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      misc.MiscUtils.resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath, this);
    }
    addValueCallback(T, property, callback) {
      let t35, t35$;
      if (dart.equals(property, 4)) {
        this[_opacityAnimation$].setValueCallback(T$.LottieValueCallbackNOfint().as(callback));
      } else if (dart.equals(property, 15)) {
        this[_widthAnimation].setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else if (dart.equals(property, lottie_property.LottieProperty.colorFilter)) {
        if (this[_colorFilterAnimation$] != null) {
          this.layer.removeAnimation(this[_colorFilterAnimation$]);
        }
        if (callback == null) {
          this[_colorFilterAnimation$] = null;
        } else {
          this[_colorFilterAnimation$] = (t35 = new (T$.ValueCallbackKeyframeAnimationOfColorFilter$ColorFilterN()).new(T$.LottieValueCallbackOfColorFilter().as(callback), null), (() => {
            t35.addUpdateListener(dart.bind(this, 'onUpdateListener'));
            return t35;
          })());
          this.layer.addAnimation(this[_colorFilterAnimation$]);
        }
      } else if (dart.equals(property, 29)) {
        let blurAnimation = this[_blurAnimation$];
        if (blurAnimation != null) {
          blurAnimation.setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
        } else {
          this[_blurAnimation$] = blurAnimation = (t35$ = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackNOfdouble().as(callback), 0.0), (() => {
            t35$.addUpdateListener(dart.bind(this, 'onUpdateListener'));
            return t35$;
          })());
          this.layer.addAnimation(blurAnimation);
        }
      } else if (dart.equals(property, lottie_property.LottieProperty.dropShadow)) {
        let dropShadowAnimation = this.dropShadowAnimation;
        if (dropShadowAnimation == null) {
          let effect = drop_shadow_effect.DropShadowEffect.createEmpty();
          this.dropShadowAnimation = dropShadowAnimation = dropShadowAnimation = new drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.new(dart.bind(this, 'onUpdateListener'), this.layer, effect);
        }
        dropShadowAnimation.setCallback(T$.LottieValueCallbackNOfDropShadow().as(callback));
      }
    }
  };
  (base_stroke_content.BaseStrokeContent.new = function(lottieDrawable, layer, opts) {
    let t35, t35$, t35$0, t35$1;
    let cap = opts && 'cap' in opts ? opts.cap : null;
    let join = opts && 'join' in opts ? opts.join : null;
    let miterLimit = opts && 'miterLimit' in opts ? opts.miterLimit : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let dashPattern = opts && 'dashPattern' in opts ? opts.dashPattern : null;
    let dashOffset = opts && 'dashOffset' in opts ? opts.dashOffset : null;
    this[_path$4] = path_factory.PathFactory.create();
    this[_trimPathPath] = path_factory.PathFactory.create();
    this[_pathGroups] = T$.JSArrayOf_PathGroup().of([]);
    this[paint] = (t35 = ui.Paint.new(), (() => {
      t35.style = ui.PaintingStyle.stroke;
      return t35;
    })());
    this[_colorFilterAnimation$] = null;
    this[_blurAnimation$] = null;
    this[_blurMaskFilterRadius$] = 0.0;
    this[dropShadowAnimation$] = null;
    this[lottieDrawable$5] = lottieDrawable;
    this[layer$2] = layer;
    this[_widthAnimation] = width.createAnimation();
    this[_opacityAnimation$] = opacity.createAnimation();
    this[_dashPatternOffsetAnimation] = (t35$ = dashOffset, t35$ == null ? null : t35$.createAnimation());
    this[_dashPatternAnimations] = dashPattern[$map](double_keyframe_animation.DoubleKeyframeAnimation, dart.fn(d => d.createAnimation(), T$.AnimatableDoubleValueToDoubleKeyframeAnimation()))[$toList]();
    this[_dashPatternValues] = T$.ListOfdouble().filled(dashPattern[$length], 0.0);
    t35$0 = this.paint;
    (() => {
      t35$0.strokeCap = cap;
      t35$0.strokeJoin = join;
      t35$0.strokeMiterLimit = miterLimit;
      return t35$0;
    })();
    this.layer.addAnimation(this[_opacityAnimation$]);
    this.layer.addAnimation(this[_widthAnimation]);
    for (let i = 0; i < this[_dashPatternAnimations][$length]; i = i + 1) {
      this.layer.addAnimation(this[_dashPatternAnimations][$_get](i));
    }
    if (this[_dashPatternOffsetAnimation] != null) {
      this.layer.addAnimation(this[_dashPatternOffsetAnimation]);
    }
    this[_opacityAnimation$].addUpdateListener(dart.bind(this, 'onUpdateListener'));
    this[_widthAnimation].addUpdateListener(dart.bind(this, 'onUpdateListener'));
    for (let i = 0; i < dashPattern[$length]; i = i + 1) {
      this[_dashPatternAnimations][$_get](i).addUpdateListener(dart.bind(this, 'onUpdateListener'));
    }
    if (this[_dashPatternOffsetAnimation] != null) {
      dart.nullCheck(this[_dashPatternOffsetAnimation]).addUpdateListener(dart.bind(this, 'onUpdateListener'));
    }
    let blurEffect = this.layer.blurEffect;
    if (blurEffect != null) {
      this[_blurAnimation$] = (t35$1 = blurEffect.blurriness.createAnimation(), (() => {
        t35$1.addUpdateListener(dart.bind(this, 'onUpdateListener'));
        return t35$1;
      })());
      this.layer.addAnimation(this[_blurAnimation$]);
    }
    let dropShadowEffect = this.layer.dropShadowEffect;
    if (dropShadowEffect != null) {
      this.dropShadowAnimation = new drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.new(dart.bind(this, 'onUpdateListener'), this.layer, dropShadowEffect);
    }
  }).prototype = base_stroke_content.BaseStrokeContent.prototype;
  dart.addTypeTests(base_stroke_content.BaseStrokeContent);
  dart.addTypeCaches(base_stroke_content.BaseStrokeContent);
  base_stroke_content.BaseStrokeContent[dart.implements] = () => [key_path_element_content.KeyPathElementContent, drawing_content.DrawingContent];
  dart.setMethodSignature(base_stroke_content.BaseStrokeContent, () => ({
    __proto__: dart.getMethods(base_stroke_content.BaseStrokeContent.__proto__),
    onUpdateListener: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    [_applyTrimPath]: dart.fnType(dart.void, [ui.Canvas, base_stroke_content._PathGroup, vector_math_64.Matrix4]),
    getBounds: dart.fnType(ui.Rect, [vector_math_64.Matrix4], {}, {applyParents: core.bool}),
    [_withDashPattern]: dart.fnType(ui.Path, [ui.Path, vector_math_64.Matrix4]),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(base_stroke_content.BaseStrokeContent, I[40]);
  dart.setFieldSignature(base_stroke_content.BaseStrokeContent, () => ({
    __proto__: dart.getFields(base_stroke_content.BaseStrokeContent.__proto__),
    [_path$4]: dart.finalFieldType(ui.Path),
    [_trimPathPath]: dart.finalFieldType(ui.Path),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    layer: dart.finalFieldType(base_layer.BaseLayer),
    [_pathGroups]: dart.finalFieldType(core.List$(base_stroke_content._PathGroup)),
    [_dashPatternValues]: dart.finalFieldType(core.List$(core.double)),
    paint: dart.finalFieldType(ui.Paint),
    [_widthAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double)),
    [_opacityAnimation$]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.int)),
    [_dashPatternAnimations]: dart.finalFieldType(core.List$(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double))),
    [_dashPatternOffsetAnimation]: dart.finalFieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double))),
    [_colorFilterAnimation$]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.ColorFilter, dart.nullable(ui.ColorFilter)))),
    [_blurAnimation$]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_blurMaskFilterRadius$]: dart.fieldType(core.double),
    dropShadowAnimation: dart.fieldType(dart.nullable(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation))
  }));
  base_stroke_content._PathGroup = class _PathGroup extends core.Object {
    static ['_#new#tearOff'](trimPath) {
      return new base_stroke_content._PathGroup.new(trimPath);
    }
  };
  (base_stroke_content._PathGroup.new = function(trimPath) {
    this.paths = T$.JSArrayOfPathContent().of([]);
    this.trimPath = trimPath;
    ;
  }).prototype = base_stroke_content._PathGroup.prototype;
  dart.addTypeTests(base_stroke_content._PathGroup);
  dart.addTypeCaches(base_stroke_content._PathGroup);
  dart.setLibraryUri(base_stroke_content._PathGroup, I[40]);
  dart.setFieldSignature(base_stroke_content._PathGroup, () => ({
    __proto__: dart.getFields(base_stroke_content._PathGroup.__proto__),
    paths: dart.finalFieldType(core.List$(path_content.PathContent)),
    trimPath: dart.finalFieldType(dart.nullable(trim_path_content.TrimPathContent))
  }));
  var name$9 = dart.privateName(stroke_content, "StrokeContent.name");
  var _colorFilterAnimation$0 = dart.privateName(stroke_content, "_colorFilterAnimation");
  var _hidden$0 = dart.privateName(stroke_content, "_hidden");
  var _colorAnimation$ = dart.privateName(stroke_content, "_colorAnimation");
  stroke_content.StrokeContent = class StrokeContent extends base_stroke_content.BaseStrokeContent {
    get name() {
      return this[name$9];
    }
    set name(value) {
      super.name = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, stroke) {
      return new stroke_content.StrokeContent.new(lottieDrawable, layer, stroke);
    }
    draw(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      if (this[_hidden$0]) {
        return;
      }
      this.paint.color = this[_colorAnimation$].value.withAlpha(this.paint.color.alpha);
      if (this[_colorFilterAnimation$0] != null) {
        this.paint.colorFilter = dart.nullCheck(this[_colorFilterAnimation$0]).value;
      }
      super.draw(canvas, size, parentMatrix, {parentAlpha: parentAlpha});
    }
    addValueCallback(T, property, callback) {
      let t35;
      super.addValueCallback(T, property, callback);
      if (dart.equals(property, lottie_property.LottieProperty.strokeColor)) {
        this[_colorAnimation$].setValueCallback(T$.LottieValueCallbackNOfColor().as(callback));
      } else if (dart.equals(property, lottie_property.LottieProperty.colorFilter)) {
        if (this[_colorFilterAnimation$0] != null) {
          this.layer.removeAnimation(this[_colorFilterAnimation$0]);
        }
        if (callback == null) {
          this[_colorFilterAnimation$0] = null;
        } else {
          this[_colorFilterAnimation$0] = (t35 = new (T$.ValueCallbackKeyframeAnimationOfColorFilter$ColorFilterN()).new(T$.LottieValueCallbackOfColorFilter().as(callback), null), (() => {
            t35.addUpdateListener(dart.bind(this, 'onUpdateListener'));
            return t35;
          })());
          this.layer.addAnimation(this[_colorAnimation$]);
        }
      }
    }
  };
  (stroke_content.StrokeContent.new = function(lottieDrawable, layer, stroke) {
    this[_colorFilterAnimation$0] = null;
    this[name$9] = stroke.name;
    this[_hidden$0] = stroke.hidden;
    this[_colorAnimation$] = stroke.color.createAnimation();
    stroke_content.StrokeContent.__proto__.new.call(this, lottieDrawable, layer, {cap: shape_stroke.lineCapTypeToPaintCap(stroke.capType), join: shape_stroke.lineJoinTypeToPaintJoin(stroke.joinType), miterLimit: stroke.miterLimit, opacity: stroke.opacity, width: stroke.width, dashPattern: stroke.lineDashPattern, dashOffset: stroke.dashOffset});
    this[_colorAnimation$].addUpdateListener(dart.bind(this, 'onUpdateListener'));
    layer.addAnimation(this[_colorAnimation$]);
  }).prototype = stroke_content.StrokeContent.prototype;
  dart.addTypeTests(stroke_content.StrokeContent);
  dart.addTypeCaches(stroke_content.StrokeContent);
  dart.setMethodSignature(stroke_content.StrokeContent, () => ({
    __proto__: dart.getMethods(stroke_content.StrokeContent.__proto__),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(stroke_content.StrokeContent, I[41]);
  dart.setFieldSignature(stroke_content.StrokeContent, () => ({
    __proto__: dart.getFields(stroke_content.StrokeContent.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    [_hidden$0]: dart.finalFieldType(core.bool),
    [_colorAnimation$]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(ui.Color, ui.Color)),
    [_colorFilterAnimation$0]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.ColorFilter, dart.nullable(ui.ColorFilter))))
  }));
  shape_stroke.LineCapType = class LineCapType extends core._Enum {
    toString() {
      return "LineCapType." + this[_name];
    }
  };
  (shape_stroke.LineCapType.new = function(index, name) {
    shape_stroke.LineCapType.__proto__.new.call(this, index, name);
    ;
  }).prototype = shape_stroke.LineCapType.prototype;
  dart.addTypeTests(shape_stroke.LineCapType);
  dart.addTypeCaches(shape_stroke.LineCapType);
  dart.setLibraryUri(shape_stroke.LineCapType, I[42]);
  dart.setStaticFieldSignature(shape_stroke.LineCapType, () => ['values', 'butt', 'round', 'unknown']);
  dart.defineExtensionMethods(shape_stroke.LineCapType, ['toString']);
  dart.defineLazy(shape_stroke.LineCapType, {
    /*shape_stroke.LineCapType.values*/get values() {
      return C[28] || CT.C28;
    },
    /*shape_stroke.LineCapType.butt*/get butt() {
      return C[29] || CT.C29;
    },
    /*shape_stroke.LineCapType.round*/get round() {
      return C[30] || CT.C30;
    },
    /*shape_stroke.LineCapType.unknown*/get unknown() {
      return C[31] || CT.C31;
    }
  }, false);
  shape_stroke.LineJoinType = class LineJoinType extends core._Enum {
    toString() {
      return "LineJoinType." + this[_name];
    }
  };
  (shape_stroke.LineJoinType.new = function(index, name) {
    shape_stroke.LineJoinType.__proto__.new.call(this, index, name);
    ;
  }).prototype = shape_stroke.LineJoinType.prototype;
  dart.addTypeTests(shape_stroke.LineJoinType);
  dart.addTypeCaches(shape_stroke.LineJoinType);
  dart.setLibraryUri(shape_stroke.LineJoinType, I[42]);
  dart.setStaticFieldSignature(shape_stroke.LineJoinType, () => ['values', 'miter', 'round', 'bevel']);
  dart.defineExtensionMethods(shape_stroke.LineJoinType, ['toString']);
  dart.defineLazy(shape_stroke.LineJoinType, {
    /*shape_stroke.LineJoinType.values*/get values() {
      return C[32] || CT.C32;
    },
    /*shape_stroke.LineJoinType.miter*/get miter() {
      return C[33] || CT.C33;
    },
    /*shape_stroke.LineJoinType.round*/get round() {
      return C[34] || CT.C34;
    },
    /*shape_stroke.LineJoinType.bevel*/get bevel() {
      return C[35] || CT.C35;
    }
  }, false);
  var name$10 = dart.privateName(shape_stroke, "ShapeStroke.name");
  var dashOffset$ = dart.privateName(shape_stroke, "ShapeStroke.dashOffset");
  var lineDashPattern$ = dart.privateName(shape_stroke, "ShapeStroke.lineDashPattern");
  var color$0 = dart.privateName(shape_stroke, "ShapeStroke.color");
  var opacity$0 = dart.privateName(shape_stroke, "ShapeStroke.opacity");
  var width$2 = dart.privateName(shape_stroke, "ShapeStroke.width");
  var capType$ = dart.privateName(shape_stroke, "ShapeStroke.capType");
  var joinType$ = dart.privateName(shape_stroke, "ShapeStroke.joinType");
  var miterLimit$ = dart.privateName(shape_stroke, "ShapeStroke.miterLimit");
  var hidden$5 = dart.privateName(shape_stroke, "ShapeStroke.hidden");
  shape_stroke.ShapeStroke = class ShapeStroke extends core.Object {
    get name() {
      return this[name$10];
    }
    set name(value) {
      super.name = value;
    }
    get dashOffset() {
      return this[dashOffset$];
    }
    set dashOffset(value) {
      super.dashOffset = value;
    }
    get lineDashPattern() {
      return this[lineDashPattern$];
    }
    set lineDashPattern(value) {
      super.lineDashPattern = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get opacity() {
      return this[opacity$0];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get width() {
      return this[width$2];
    }
    set width(value) {
      super.width = value;
    }
    get capType() {
      return this[capType$];
    }
    set capType(value) {
      super.capType = value;
    }
    get joinType() {
      return this[joinType$];
    }
    set joinType(value) {
      super.joinType = value;
    }
    get miterLimit() {
      return this[miterLimit$];
    }
    set miterLimit(value) {
      super.miterLimit = value;
    }
    get hidden() {
      return this[hidden$5];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dashOffset = opts && 'dashOffset' in opts ? opts.dashOffset : null;
      let lineDashPattern = opts && 'lineDashPattern' in opts ? opts.lineDashPattern : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let capType = opts && 'capType' in opts ? opts.capType : null;
      let joinType = opts && 'joinType' in opts ? opts.joinType : null;
      let miterLimit = opts && 'miterLimit' in opts ? opts.miterLimit : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new shape_stroke.ShapeStroke.new({name: name, dashOffset: dashOffset, lineDashPattern: lineDashPattern, color: color, opacity: opacity, width: width, capType: capType, joinType: joinType, miterLimit: miterLimit, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new stroke_content.StrokeContent.new(drawable, layer, this);
    }
  };
  (shape_stroke.ShapeStroke.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let dashOffset = opts && 'dashOffset' in opts ? opts.dashOffset : null;
    let lineDashPattern = opts && 'lineDashPattern' in opts ? opts.lineDashPattern : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let capType = opts && 'capType' in opts ? opts.capType : null;
    let joinType = opts && 'joinType' in opts ? opts.joinType : null;
    let miterLimit = opts && 'miterLimit' in opts ? opts.miterLimit : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$10] = name;
    this[dashOffset$] = dashOffset;
    this[lineDashPattern$] = lineDashPattern;
    this[color$0] = color;
    this[opacity$0] = opacity;
    this[width$2] = width;
    this[capType$] = capType;
    this[joinType$] = joinType;
    this[miterLimit$] = miterLimit;
    this[hidden$5] = hidden;
    ;
  }).prototype = shape_stroke.ShapeStroke.prototype;
  dart.addTypeTests(shape_stroke.ShapeStroke);
  dart.addTypeCaches(shape_stroke.ShapeStroke);
  shape_stroke.ShapeStroke[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(shape_stroke.ShapeStroke, () => ({
    __proto__: dart.getMethods(shape_stroke.ShapeStroke.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(shape_stroke.ShapeStroke, I[42]);
  dart.setFieldSignature(shape_stroke.ShapeStroke, () => ({
    __proto__: dart.getFields(shape_stroke.ShapeStroke.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    dashOffset: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    lineDashPattern: dart.finalFieldType(core.List$(animatable_double_value.AnimatableDoubleValue)),
    color: dart.finalFieldType(animatable_color_value.AnimatableColorValue),
    opacity: dart.finalFieldType(animatable_integer_value.AnimatableIntegerValue),
    width: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    capType: dart.finalFieldType(dart.nullable(shape_stroke.LineCapType)),
    joinType: dart.finalFieldType(dart.nullable(shape_stroke.LineJoinType)),
    miterLimit: dart.finalFieldType(core.double),
    hidden: dart.finalFieldType(core.bool)
  }));
  shape_stroke.lineCapTypeToPaintCap = function lineCapTypeToPaintCap(cap) {
    switch (cap) {
      case C[29] || CT.C29:
        {
          return ui.StrokeCap.butt;
        }
      case C[30] || CT.C30:
        {
          return ui.StrokeCap.round;
        }
      case C[31] || CT.C31:
      case null:
        {
          return ui.StrokeCap.square;
        }
    }
  };
  shape_stroke.lineJoinTypeToPaintJoin = function lineJoinTypeToPaintJoin(join) {
    switch (join) {
      case C[35] || CT.C35:
        {
          return ui.StrokeJoin.bevel;
        }
      case C[34] || CT.C34:
        {
          return ui.StrokeJoin.round;
        }
      case C[33] || CT.C33:
      case null:
        {
          return ui.StrokeJoin.miter;
        }
    }
  };
  var name$11 = dart.privateName(gradient_stroke_content, "GradientStrokeContent.name");
  var _linearGradientCache = dart.privateName(gradient_stroke_content, "_linearGradientCache");
  var _radialGradientCache = dart.privateName(gradient_stroke_content, "_radialGradientCache");
  var _colorCallbackAnimation = dart.privateName(gradient_stroke_content, "_colorCallbackAnimation");
  var _type = dart.privateName(gradient_stroke_content, "_type");
  var _hidden$1 = dart.privateName(gradient_stroke_content, "_hidden");
  var _cacheSteps = dart.privateName(gradient_stroke_content, "_cacheSteps");
  var _colorAnimation$0 = dart.privateName(gradient_stroke_content, "_colorAnimation");
  var _startPointAnimation = dart.privateName(gradient_stroke_content, "_startPointAnimation");
  var _endPointAnimation = dart.privateName(gradient_stroke_content, "_endPointAnimation");
  var _getLinearGradient = dart.privateName(gradient_stroke_content, "_getLinearGradient");
  var _getRadialGradient = dart.privateName(gradient_stroke_content, "_getRadialGradient");
  var _getGradientHash = dart.privateName(gradient_stroke_content, "_getGradientHash");
  var _applyDynamicColorsIfNeeded = dart.privateName(gradient_stroke_content, "_applyDynamicColorsIfNeeded");
  var Color_value = dart.privateName(ui, "Color.value");
  gradient_stroke_content.GradientStrokeContent = class GradientStrokeContent extends base_stroke_content.BaseStrokeContent {
    get name() {
      return this[name$11];
    }
    set name(value) {
      super.name = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, stroke) {
      return new gradient_stroke_content.GradientStrokeContent.new(lottieDrawable, layer, stroke);
    }
    draw(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      if (this[_hidden$1]) {
        return;
      }
      let gradient = null;
      if (this[_type] === gradient_type.GradientType.linear) {
        gradient = this[_getLinearGradient](parentMatrix);
      } else {
        gradient = this[_getRadialGradient](parentMatrix);
      }
      this.paint.shader = gradient;
      super.draw(canvas, size, parentMatrix, {parentAlpha: parentAlpha});
    }
    [_getLinearGradient](parentMatrix) {
      let gradientHash = this[_getGradientHash](parentMatrix);
      let gradient = this[_linearGradientCache][$_get](gradientHash);
      if (gradient != null) {
        return gradient;
      }
      let startPoint = this[_startPointAnimation].value;
      let endPoint = this[_endPointAnimation].value;
      let gradientColor = this[_colorAnimation$0].value;
      let colors = this[_applyDynamicColorsIfNeeded](gradientColor.colors);
      let positions = gradientColor.positions;
      gradient = ui.Gradient.linear(startPoint, endPoint, colors, positions, ui.TileMode.clamp, parentMatrix.storage);
      this[_linearGradientCache][$_set](gradientHash, gradient);
      return gradient;
    }
    [_getRadialGradient](parentMatrix) {
      let gradientHash = this[_getGradientHash](parentMatrix);
      let gradient = this[_radialGradientCache][$_get](gradientHash);
      if (gradient != null) {
        return gradient;
      }
      let startPoint = this[_startPointAnimation].value;
      let endPoint = this[_endPointAnimation].value;
      let gradientColor = this[_colorAnimation$0].value;
      let colors = this[_applyDynamicColorsIfNeeded](gradientColor.colors);
      let positions = gradientColor.positions;
      let x0 = startPoint.dx;
      let y0 = startPoint.dy;
      let x1 = endPoint.dx;
      let y1 = endPoint.dy;
      let radius = utils.hypot(x1 - x0, y1 - y0)[$toDouble]();
      gradient = ui.Gradient.radial(startPoint, radius, colors, positions, ui.TileMode.clamp, parentMatrix.storage);
      this[_radialGradientCache][$_set](gradientHash, gradient);
      return gradient;
    }
    [_getGradientHash](parentMatrix) {
      let startPointProgress = (this[_startPointAnimation].progress * this[_cacheSteps])[$round]();
      let endPointProgress = (this[_endPointAnimation].progress * this[_cacheSteps])[$round]();
      let colorProgress = (this[_colorAnimation$0].progress * this[_cacheSteps])[$round]();
      let hash = 17;
      if (startPointProgress !== 0) {
        hash = hash * 31 * startPointProgress;
      }
      if (endPointProgress !== 0) {
        hash = hash * 31 * endPointProgress;
      }
      if (colorProgress !== 0) {
        hash = hash * 31 * colorProgress;
      }
      hash = hash * (31 * parentMatrix.hashCode);
      return hash;
    }
    [_applyDynamicColorsIfNeeded](colors) {
      if (this[_colorCallbackAnimation] != null) {
        let dynamicColors = dart.nullCheck(this[_colorCallbackAnimation]).value;
        if (colors[$length] === dynamicColors[$length]) {
          for (let i = 0; i < colors[$length]; i = i + 1) {
            colors[$_set](i, dynamicColors[$_get](i));
          }
        } else {
          colors = T$.ListOfColor().filled(dynamicColors[$length], C[36] || CT.C36);
          for (let i = 0; i < dynamicColors[$length]; i = i + 1) {
            colors[$_set](i, dynamicColors[$_get](i));
          }
        }
      }
      return colors;
    }
    addValueCallback(T, property, callback) {
      let t39;
      super.addValueCallback(T, property, callback);
      if (dart.equals(property, lottie_property.LottieProperty.gradientColor)) {
        if (this[_colorCallbackAnimation] != null) {
          this.layer.removeAnimation(this[_colorCallbackAnimation]);
        }
        if (callback == null) {
          this[_colorCallbackAnimation] = null;
        } else {
          this[_colorCallbackAnimation] = (t39 = new (T$.ValueCallbackKeyframeAnimationOfListOfColor$ListOfColor()).new(T$.LottieValueCallbackOfListOfColor().as(callback), T$.JSArrayOfColor().of([])), (() => {
            t39.addUpdateListener(dart.bind(this, 'onUpdateListener'));
            return t39;
          })());
          this.layer.addAnimation(this[_colorCallbackAnimation]);
        }
      }
    }
  };
  (gradient_stroke_content.GradientStrokeContent.new = function(lottieDrawable, layer, stroke) {
    this[_linearGradientCache] = new (T$.IdentityMapOfint$Gradient()).new();
    this[_radialGradientCache] = new (T$.IdentityMapOfint$Gradient()).new();
    this[_colorCallbackAnimation] = null;
    this[name$11] = stroke.name;
    this[_type] = stroke.gradientType;
    this[_hidden$1] = stroke.hidden;
    this[_cacheSteps] = (lottieDrawable.composition.duration.inMilliseconds / 32)[$round]();
    this[_colorAnimation$0] = stroke.gradientColor.createAnimation();
    this[_startPointAnimation] = stroke.startPoint.createAnimation();
    this[_endPointAnimation] = stroke.endPoint.createAnimation();
    gradient_stroke_content.GradientStrokeContent.__proto__.new.call(this, lottieDrawable, layer, {cap: shape_stroke.lineCapTypeToPaintCap(stroke.capType), join: shape_stroke.lineJoinTypeToPaintJoin(stroke.joinType), miterLimit: stroke.miterLimit, opacity: stroke.opacity, width: stroke.width, dashPattern: stroke.lineDashPattern, dashOffset: stroke.dashOffset});
    this[_colorAnimation$0].addUpdateListener(dart.bind(this, 'onUpdateListener'));
    layer.addAnimation(this[_colorAnimation$0]);
    this[_startPointAnimation].addUpdateListener(dart.bind(this, 'onUpdateListener'));
    layer.addAnimation(this[_startPointAnimation]);
    this[_endPointAnimation].addUpdateListener(dart.bind(this, 'onUpdateListener'));
    layer.addAnimation(this[_endPointAnimation]);
  }).prototype = gradient_stroke_content.GradientStrokeContent.prototype;
  dart.addTypeTests(gradient_stroke_content.GradientStrokeContent);
  dart.addTypeCaches(gradient_stroke_content.GradientStrokeContent);
  dart.setMethodSignature(gradient_stroke_content.GradientStrokeContent, () => ({
    __proto__: dart.getMethods(gradient_stroke_content.GradientStrokeContent.__proto__),
    [_getLinearGradient]: dart.fnType(ui.Gradient, [vector_math_64.Matrix4]),
    [_getRadialGradient]: dart.fnType(ui.Gradient, [vector_math_64.Matrix4]),
    [_getGradientHash]: dart.fnType(core.int, [vector_math_64.Matrix4]),
    [_applyDynamicColorsIfNeeded]: dart.fnType(core.List$(ui.Color), [core.List$(ui.Color)]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(gradient_stroke_content.GradientStrokeContent, I[43]);
  dart.setFieldSignature(gradient_stroke_content.GradientStrokeContent, () => ({
    __proto__: dart.getFields(gradient_stroke_content.GradientStrokeContent.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    [_hidden$1]: dart.finalFieldType(core.bool),
    [_linearGradientCache]: dart.finalFieldType(core.Map$(core.int, ui.Gradient)),
    [_radialGradientCache]: dart.finalFieldType(core.Map$(core.int, ui.Gradient)),
    [_type]: dart.finalFieldType(gradient_type.GradientType),
    [_cacheSteps]: dart.finalFieldType(core.int),
    [_colorAnimation$0]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(gradient_color.GradientColor, gradient_color.GradientColor)),
    [_startPointAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset)),
    [_endPointAnimation]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset)),
    [_colorCallbackAnimation]: dart.fieldType(dart.nullable(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(core.List$(ui.Color), core.List$(ui.Color))))
  }));
  dart.setStaticFieldSignature(gradient_stroke_content.GradientStrokeContent, () => ['_cacheStepsMs']);
  dart.defineLazy(gradient_stroke_content.GradientStrokeContent, {
    /*gradient_stroke_content.GradientStrokeContent._cacheStepsMs*/get _cacheStepsMs() {
      return 32;
    }
  }, false);
  var name$12 = dart.privateName(gradient_stroke, "GradientStroke.name");
  var gradientType$ = dart.privateName(gradient_stroke, "GradientStroke.gradientType");
  var gradientColor$ = dart.privateName(gradient_stroke, "GradientStroke.gradientColor");
  var opacity$1 = dart.privateName(gradient_stroke, "GradientStroke.opacity");
  var startPoint$ = dart.privateName(gradient_stroke, "GradientStroke.startPoint");
  var endPoint$ = dart.privateName(gradient_stroke, "GradientStroke.endPoint");
  var width$3 = dart.privateName(gradient_stroke, "GradientStroke.width");
  var capType$0 = dart.privateName(gradient_stroke, "GradientStroke.capType");
  var joinType$0 = dart.privateName(gradient_stroke, "GradientStroke.joinType");
  var miterLimit$0 = dart.privateName(gradient_stroke, "GradientStroke.miterLimit");
  var lineDashPattern$0 = dart.privateName(gradient_stroke, "GradientStroke.lineDashPattern");
  var dashOffset$0 = dart.privateName(gradient_stroke, "GradientStroke.dashOffset");
  var hidden$6 = dart.privateName(gradient_stroke, "GradientStroke.hidden");
  gradient_stroke.GradientStroke = class GradientStroke extends core.Object {
    get name() {
      return this[name$12];
    }
    set name(value) {
      super.name = value;
    }
    get gradientType() {
      return this[gradientType$];
    }
    set gradientType(value) {
      super.gradientType = value;
    }
    get gradientColor() {
      return this[gradientColor$];
    }
    set gradientColor(value) {
      super.gradientColor = value;
    }
    get opacity() {
      return this[opacity$1];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get startPoint() {
      return this[startPoint$];
    }
    set startPoint(value) {
      super.startPoint = value;
    }
    get endPoint() {
      return this[endPoint$];
    }
    set endPoint(value) {
      super.endPoint = value;
    }
    get width() {
      return this[width$3];
    }
    set width(value) {
      super.width = value;
    }
    get capType() {
      return this[capType$0];
    }
    set capType(value) {
      super.capType = value;
    }
    get joinType() {
      return this[joinType$0];
    }
    set joinType(value) {
      super.joinType = value;
    }
    get miterLimit() {
      return this[miterLimit$0];
    }
    set miterLimit(value) {
      super.miterLimit = value;
    }
    get lineDashPattern() {
      return this[lineDashPattern$0];
    }
    set lineDashPattern(value) {
      super.lineDashPattern = value;
    }
    get dashOffset() {
      return this[dashOffset$0];
    }
    set dashOffset(value) {
      super.dashOffset = value;
    }
    get hidden() {
      return this[hidden$6];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let gradientType = opts && 'gradientType' in opts ? opts.gradientType : null;
      let gradientColor = opts && 'gradientColor' in opts ? opts.gradientColor : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let startPoint = opts && 'startPoint' in opts ? opts.startPoint : null;
      let endPoint = opts && 'endPoint' in opts ? opts.endPoint : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let capType = opts && 'capType' in opts ? opts.capType : null;
      let joinType = opts && 'joinType' in opts ? opts.joinType : null;
      let miterLimit = opts && 'miterLimit' in opts ? opts.miterLimit : null;
      let lineDashPattern = opts && 'lineDashPattern' in opts ? opts.lineDashPattern : null;
      let dashOffset = opts && 'dashOffset' in opts ? opts.dashOffset : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new gradient_stroke.GradientStroke.new({name: name, gradientType: gradientType, gradientColor: gradientColor, opacity: opacity, startPoint: startPoint, endPoint: endPoint, width: width, capType: capType, joinType: joinType, miterLimit: miterLimit, lineDashPattern: lineDashPattern, dashOffset: dashOffset, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new gradient_stroke_content.GradientStrokeContent.new(drawable, layer, this);
    }
  };
  (gradient_stroke.GradientStroke.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let gradientType = opts && 'gradientType' in opts ? opts.gradientType : null;
    let gradientColor = opts && 'gradientColor' in opts ? opts.gradientColor : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let startPoint = opts && 'startPoint' in opts ? opts.startPoint : null;
    let endPoint = opts && 'endPoint' in opts ? opts.endPoint : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let capType = opts && 'capType' in opts ? opts.capType : null;
    let joinType = opts && 'joinType' in opts ? opts.joinType : null;
    let miterLimit = opts && 'miterLimit' in opts ? opts.miterLimit : null;
    let lineDashPattern = opts && 'lineDashPattern' in opts ? opts.lineDashPattern : null;
    let dashOffset = opts && 'dashOffset' in opts ? opts.dashOffset : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$12] = name;
    this[gradientType$] = gradientType;
    this[gradientColor$] = gradientColor;
    this[opacity$1] = opacity;
    this[startPoint$] = startPoint;
    this[endPoint$] = endPoint;
    this[width$3] = width;
    this[capType$0] = capType;
    this[joinType$0] = joinType;
    this[miterLimit$0] = miterLimit;
    this[lineDashPattern$0] = lineDashPattern;
    this[dashOffset$0] = dashOffset;
    this[hidden$6] = hidden;
    ;
  }).prototype = gradient_stroke.GradientStroke.prototype;
  dart.addTypeTests(gradient_stroke.GradientStroke);
  dart.addTypeCaches(gradient_stroke.GradientStroke);
  gradient_stroke.GradientStroke[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(gradient_stroke.GradientStroke, () => ({
    __proto__: dart.getMethods(gradient_stroke.GradientStroke.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(gradient_stroke.GradientStroke, I[44]);
  dart.setFieldSignature(gradient_stroke.GradientStroke, () => ({
    __proto__: dart.getFields(gradient_stroke.GradientStroke.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    gradientType: dart.finalFieldType(gradient_type.GradientType),
    gradientColor: dart.finalFieldType(animatable_gradient_color_value.AnimatableGradientColorValue),
    opacity: dart.finalFieldType(animatable_integer_value.AnimatableIntegerValue),
    startPoint: dart.finalFieldType(animatable_point_value.AnimatablePointValue),
    endPoint: dart.finalFieldType(animatable_point_value.AnimatablePointValue),
    width: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    capType: dart.finalFieldType(dart.nullable(shape_stroke.LineCapType)),
    joinType: dart.finalFieldType(dart.nullable(shape_stroke.LineJoinType)),
    miterLimit: dart.finalFieldType(core.double),
    lineDashPattern: dart.finalFieldType(core.List$(animatable_double_value.AnimatableDoubleValue)),
    dashOffset: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    hidden: dart.finalFieldType(core.bool)
  }));
  gradient_stroke_parser.GradientStrokeParser = class GradientStrokeParser extends core.Object {
    static ['_#_#tearOff']() {
      return new gradient_stroke_parser.GradientStrokeParser.__();
    }
    static parse(reader, composition) {
      let t39;
      let name = null;
      let color = null;
      let opacity = null;
      let gradientType = null;
      let startPoint = null;
      let endPoint = null;
      let width = null;
      let capType = null;
      let joinType = null;
      let offset = null;
      let miterLimit = 0.0;
      let hidden = false;
      let lineDashPattern = T$.JSArrayOfAnimatableDoubleValue().of([]);
      while (reader.hasNext()) {
        switch (reader.selectName(gradient_stroke_parser.GradientStrokeParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              let points = -1;
              reader.beginObject();
              while (reader.hasNext()) {
                switch (reader.selectName(gradient_stroke_parser.GradientStrokeParser._gradientNames)) {
                  case 0:
                    {
                      points = reader.nextInt();
                      break;
                    }
                  case 1:
                    {
                      color = animatable_value_parser.AnimatableValueParser.parseGradientColor(reader, composition, points);
                      break;
                    }
                  default:
                    {
                      reader.skipName();
                      reader.skipValue();
                    }
                }
              }
              reader.endObject();
              break;
            }
          case 2:
            {
              opacity = animatable_value_parser.AnimatableValueParser.parseInteger(reader, composition);
              break;
            }
          case 3:
            {
              gradientType = reader.nextInt() === 1 ? gradient_type.GradientType.linear : gradient_type.GradientType.radial;
              break;
            }
          case 4:
            {
              startPoint = animatable_value_parser.AnimatableValueParser.parsePoint(reader, composition);
              break;
            }
          case 5:
            {
              endPoint = animatable_value_parser.AnimatableValueParser.parsePoint(reader, composition);
              break;
            }
          case 6:
            {
              width = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
              break;
            }
          case 7:
            {
              capType = shape_stroke.LineCapType.values[$_get](reader.nextInt() - 1);
              break;
            }
          case 8:
            {
              joinType = shape_stroke.LineJoinType.values[$_get](reader.nextInt() - 1);
              break;
            }
          case 9:
            {
              miterLimit = reader.nextDouble();
              break;
            }
          case 10:
            {
              hidden = reader.nextBoolean();
              break;
            }
          case 11:
            {
              reader.beginArray();
              while (reader.hasNext()) {
                let n = null;
                let val = null;
                reader.beginObject();
                while (reader.hasNext()) {
                  switch (reader.selectName(gradient_stroke_parser.GradientStrokeParser._dashPatternNames)) {
                    case 0:
                      {
                        n = reader.nextString();
                        break;
                      }
                    case 1:
                      {
                        val = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
                        break;
                      }
                    default:
                      {
                        reader.skipName();
                        reader.skipValue();
                      }
                  }
                }
                reader.endObject();
                if (n === "o") {
                  offset = val;
                } else if (n === "d" || n === "g") {
                  composition.hasDashPattern = true;
                  lineDashPattern[$add](dart.nullCheck(val));
                }
              }
              reader.endArray();
              if (lineDashPattern[$length] === 1) {
                lineDashPattern[$add](lineDashPattern[$_get](0));
              }
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      opacity == null ? opacity = new animatable_integer_value.AnimatableIntegerValue.fromKeyframes(T$.JSArrayOfKeyframeOfint().of([new (T$.KeyframeOfint()).nonAnimated(100)])) : null;
      return new gradient_stroke.GradientStroke.new({name: name, gradientType: (t39 = gradientType, t39 == null ? gradient_type.GradientType.linear : t39), gradientColor: dart.nullCheck(color), opacity: opacity, startPoint: dart.nullCheck(startPoint), endPoint: dart.nullCheck(endPoint), width: dart.nullCheck(width), capType: capType, joinType: joinType, miterLimit: miterLimit, lineDashPattern: lineDashPattern, dashOffset: offset, hidden: hidden});
    }
  };
  (gradient_stroke_parser.GradientStrokeParser.__ = function() {
    ;
  }).prototype = gradient_stroke_parser.GradientStrokeParser.prototype;
  dart.addTypeTests(gradient_stroke_parser.GradientStrokeParser);
  dart.addTypeCaches(gradient_stroke_parser.GradientStrokeParser);
  dart.setStaticMethodSignature(gradient_stroke_parser.GradientStrokeParser, () => ['parse']);
  dart.setLibraryUri(gradient_stroke_parser.GradientStrokeParser, I[45]);
  dart.setStaticFieldSignature(gradient_stroke_parser.GradientStrokeParser, () => ['_names', '_gradientNames', '_dashPatternNames']);
  dart.defineLazy(gradient_stroke_parser.GradientStrokeParser, {
    /*gradient_stroke_parser.GradientStrokeParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "g", "o", "t", "s", "e", "w", "lc", "lj", "ml", "hd", "d"]));
    },
    /*gradient_stroke_parser.GradientStrokeParser._gradientNames*/get _gradientNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["p", "k"]));
    },
    /*gradient_stroke_parser.GradientStrokeParser._dashPatternNames*/get _dashPatternNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["n", "v"]));
    }
  }, false);
  var listener$ = dart.privateName(drop_shadow_keyframe_animation, "DropShadowKeyframeAnimation.listener");
  var __DropShadowKeyframeAnimation__color = dart.privateName(drop_shadow_keyframe_animation, "_#DropShadowKeyframeAnimation#_color");
  var __DropShadowKeyframeAnimation__opacity = dart.privateName(drop_shadow_keyframe_animation, "_#DropShadowKeyframeAnimation#_opacity");
  var __DropShadowKeyframeAnimation__direction = dart.privateName(drop_shadow_keyframe_animation, "_#DropShadowKeyframeAnimation#_direction");
  var __DropShadowKeyframeAnimation__distance = dart.privateName(drop_shadow_keyframe_animation, "_#DropShadowKeyframeAnimation#_distance");
  var __DropShadowKeyframeAnimation__radius = dart.privateName(drop_shadow_keyframe_animation, "_#DropShadowKeyframeAnimation#_radius");
  var _paint$ = dart.privateName(drop_shadow_keyframe_animation, "_paint");
  var _color$ = dart.privateName(drop_shadow_keyframe_animation, "_color");
  var _opacity$ = dart.privateName(drop_shadow_keyframe_animation, "_opacity");
  var _direction$ = dart.privateName(drop_shadow_keyframe_animation, "_direction");
  var _distance$ = dart.privateName(drop_shadow_keyframe_animation, "_distance");
  var _radius$ = dart.privateName(drop_shadow_keyframe_animation, "_radius");
  var _createCallback = dart.privateName(drop_shadow_keyframe_animation, "_createCallback");
  drop_shadow_keyframe_animation.DropShadowKeyframeAnimation = class DropShadowKeyframeAnimation extends core.Object {
    get listener() {
      return this[listener$];
    }
    set listener(value) {
      super.listener = value;
    }
    get [_color$]() {
      let t39;
      t39 = this[__DropShadowKeyframeAnimation__color];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_color")) : t39;
    }
    set [_color$](library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_color$35param) {
      if (this[__DropShadowKeyframeAnimation__color] == null)
        this[__DropShadowKeyframeAnimation__color] = library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_color$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_color"));
    }
    get [_opacity$]() {
      let t39;
      t39 = this[__DropShadowKeyframeAnimation__opacity];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_opacity")) : t39;
    }
    set [_opacity$](library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_opacity$35param) {
      if (this[__DropShadowKeyframeAnimation__opacity] == null)
        this[__DropShadowKeyframeAnimation__opacity] = library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_opacity$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_opacity"));
    }
    get [_direction$]() {
      let t39;
      t39 = this[__DropShadowKeyframeAnimation__direction];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_direction")) : t39;
    }
    set [_direction$](library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_direction$35param) {
      if (this[__DropShadowKeyframeAnimation__direction] == null)
        this[__DropShadowKeyframeAnimation__direction] = library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_direction$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_direction"));
    }
    get [_distance$]() {
      let t39;
      t39 = this[__DropShadowKeyframeAnimation__distance];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_distance")) : t39;
    }
    set [_distance$](library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_distance$35param) {
      if (this[__DropShadowKeyframeAnimation__distance] == null)
        this[__DropShadowKeyframeAnimation__distance] = library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_distance$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_distance"));
    }
    get [_radius$]() {
      let t39;
      t39 = this[__DropShadowKeyframeAnimation__radius];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_radius")) : t39;
    }
    set [_radius$](library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_radius$35param) {
      if (this[__DropShadowKeyframeAnimation__radius] == null)
        this[__DropShadowKeyframeAnimation__radius] = library$32package$58lottie$47src$47animation$47keyframe$47drop_shadow_keyframe_animation$46dart$58$58_radius$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_radius"));
    }
    static ['_#new#tearOff'](listener, layer, dropShadowEffect) {
      return new drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.new(listener, layer, dropShadowEffect);
    }
    onValueChanged() {
      this[_paint$] = null;
      this.listener();
    }
    draw(canvas, path) {
      let t39;
      let directionRad = this[_direction$].value * 0.017453292519943295;
      let distance = this[_distance$].value;
      let x = math.sin(directionRad) * distance;
      let y = math.cos(directionRad + 3.141592653589793) * distance;
      let baseColor = this[_color$].value;
      let opacity = this[_opacity$].value[$round]();
      let color = baseColor.withAlpha(opacity);
      let radius = this[_radius$].value;
      let sigma = radius * 0.57735 + 0.5;
      let paint = this[_paint$];
      paint == null ? paint = this[_paint$] = (t39 = ui.Paint.new(), (() => {
        t39.color = color;
        t39.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.normal, sigma);
        return t39;
      })()) : null;
      canvas.drawPath(path.shift(new ui.Offset.new(x, y)), paint);
    }
    setCallback(callback) {
      if (callback != null) {
        this[_color$].setValueCallback(this[_createCallback](ui.Color, callback, dart.fn(c => {
          let t39, t39$;
          t39$ = (t39 = c, t39 == null ? null : t39.color);
          return t39$ == null ? C[37] || CT.C37 : t39$;
        }, T$.DropShadowNToColor())));
        this[_opacity$].setValueCallback(this[_createCallback](core.double, callback, dart.fn(c => {
          let t39, t39$;
          t39$ = (t39 = c, t39 == null ? null : t39.color.alpha[$toDouble]());
          return t39$ == null ? 255.0 : t39$;
        }, T$.DropShadowNTodouble())));
        this[_direction$].setValueCallback(this[_createCallback](core.double, callback, dart.fn(c => {
          let t39, t39$;
          t39$ = (t39 = c, t39 == null ? null : t39.direction);
          return t39$ == null ? 0.0 : t39$;
        }, T$.DropShadowNTodouble())));
        this[_distance$].setValueCallback(this[_createCallback](core.double, callback, dart.fn(c => {
          let t39, t39$;
          t39$ = (t39 = c, t39 == null ? null : t39.distance);
          return t39$ == null ? 0.0 : t39$;
        }, T$.DropShadowNTodouble())));
        this[_radius$].setValueCallback(this[_createCallback](core.double, callback, dart.fn(c => {
          let t39, t39$;
          t39$ = (t39 = c, t39 == null ? null : t39.radius);
          return t39$ == null ? 0.0 : t39$;
        }, T$.DropShadowNTodouble())));
      } else {
        this[_color$].setValueCallback(null);
        this[_opacity$].setValueCallback(null);
        this[_direction$].setValueCallback(null);
        this[_distance$].setValueCallback(null);
        this[_radius$].setValueCallback(null);
      }
    }
    [_createCallback](T, callback, selector) {
      let t39;
      t39 = new (lottie_value_callback.LottieValueCallback$(T)).new(null);
      return (() => {
        t39.callback = dart.fn(info => {
          this.onValueChanged();
          let frameInfo = new (T$.LottieFrameInfoOfDropShadow()).new(info.startFrame, info.endFrame, lottie_property.LottieProperty.dropShadow, lottie_property.LottieProperty.dropShadow, info.linearKeyframeProgress, info.interpolatedKeyframeProgress, info.overallProgress);
          let dropShadow = callback.getValue(frameInfo);
          return selector(dropShadow);
        }, dart.fnType(T, [lottie_frame_info.LottieFrameInfo$(T)]));
        return t39;
      })();
    }
  };
  (drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.new = function(listener, layer, dropShadowEffect) {
    let t39, t39$, t39$0, t39$1, t39$2;
    this[__DropShadowKeyframeAnimation__color] = null;
    this[__DropShadowKeyframeAnimation__opacity] = null;
    this[__DropShadowKeyframeAnimation__direction] = null;
    this[__DropShadowKeyframeAnimation__distance] = null;
    this[__DropShadowKeyframeAnimation__radius] = null;
    this[_paint$] = null;
    this[listener$] = listener;
    this[_color$] = (t39 = dropShadowEffect.color.createAnimation(), (() => {
      t39.addUpdateListener(dart.bind(this, 'onValueChanged'));
      return t39;
    })());
    layer.addAnimation(this[_color$]);
    this[_opacity$] = (t39$ = dropShadowEffect.opacity.createAnimation(), (() => {
      t39$.addUpdateListener(dart.bind(this, 'onValueChanged'));
      return t39$;
    })());
    layer.addAnimation(this[_opacity$]);
    this[_direction$] = (t39$0 = dropShadowEffect.direction.createAnimation(), (() => {
      t39$0.addUpdateListener(dart.bind(this, 'onValueChanged'));
      return t39$0;
    })());
    layer.addAnimation(this[_direction$]);
    this[_distance$] = (t39$1 = dropShadowEffect.distance.createAnimation(), (() => {
      t39$1.addUpdateListener(dart.bind(this, 'onValueChanged'));
      return t39$1;
    })());
    layer.addAnimation(this[_distance$]);
    this[_radius$] = (t39$2 = dropShadowEffect.radius.createAnimation(), (() => {
      t39$2.addUpdateListener(dart.bind(this, 'onValueChanged'));
      return t39$2;
    })());
    layer.addAnimation(this[_radius$]);
  }).prototype = drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.prototype;
  dart.addTypeTests(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation);
  dart.addTypeCaches(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation);
  dart.setMethodSignature(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation, () => ({
    __proto__: dart.getMethods(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.__proto__),
    onValueChanged: dart.fnType(dart.void, []),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Path]),
    setCallback: dart.fnType(dart.void, [dart.nullable(lottie_value_callback.LottieValueCallback$(drop_shadow.DropShadow))]),
    [_createCallback]: dart.gFnType(T => [lottie_value_callback.LottieValueCallback$(T), [lottie_value_callback.LottieValueCallback$(drop_shadow.DropShadow), dart.fnType(T, [dart.nullable(drop_shadow.DropShadow)])]], T => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation, () => ({
    __proto__: dart.getGetters(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.__proto__),
    [_color$]: color_keyframe_animation.ColorKeyframeAnimation,
    [_opacity$]: base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double),
    [_direction$]: base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double),
    [_distance$]: base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double),
    [_radius$]: base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)
  }));
  dart.setSetterSignature(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation, () => ({
    __proto__: dart.getSetters(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.__proto__),
    [_color$]: color_keyframe_animation.ColorKeyframeAnimation,
    [_opacity$]: base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double),
    [_direction$]: base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double),
    [_distance$]: base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double),
    [_radius$]: base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)
  }));
  dart.setLibraryUri(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation, I[46]);
  dart.setFieldSignature(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation, () => ({
    __proto__: dart.getFields(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.__proto__),
    listener: dart.finalFieldType(dart.fnType(dart.void, [])),
    [__DropShadowKeyframeAnimation__color]: dart.fieldType(dart.nullable(color_keyframe_animation.ColorKeyframeAnimation)),
    [__DropShadowKeyframeAnimation__opacity]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [__DropShadowKeyframeAnimation__direction]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [__DropShadowKeyframeAnimation__distance]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [__DropShadowKeyframeAnimation__radius]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_paint$]: dart.fieldType(dart.nullable(ui.Paint))
  }));
  dart.setStaticFieldSignature(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation, () => ['_degToRad']);
  dart.defineLazy(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation, {
    /*drop_shadow_keyframe_animation.DropShadowKeyframeAnimation._degToRad*/get _degToRad() {
      return 0.017453292519943295;
    }
  }, false);
  var layer$3 = dart.privateName(gradient_fill_content, "GradientFillContent.layer");
  var lottieDrawable$6 = dart.privateName(gradient_fill_content, "GradientFillContent.lottieDrawable");
  var dropShadowAnimation$0 = dart.privateName(gradient_fill_content, "GradientFillContent.dropShadowAnimation");
  var _linearGradientCache$ = dart.privateName(gradient_fill_content, "_linearGradientCache");
  var _radialGradientCache$ = dart.privateName(gradient_fill_content, "_radialGradientCache");
  var _path$5 = dart.privateName(gradient_fill_content, "_path");
  var _paint$0 = dart.privateName(gradient_fill_content, "_paint");
  var _paths$ = dart.privateName(gradient_fill_content, "_paths");
  var _colorFilterAnimation$1 = dart.privateName(gradient_fill_content, "_colorFilterAnimation");
  var _colorCallbackAnimation$ = dart.privateName(gradient_fill_content, "_colorCallbackAnimation");
  var _blurAnimation$0 = dart.privateName(gradient_fill_content, "_blurAnimation");
  var _blurMaskFilterRadius$0 = dart.privateName(gradient_fill_content, "_blurMaskFilterRadius");
  var _fill$ = dart.privateName(gradient_fill_content, "_fill");
  var _cacheSteps$ = dart.privateName(gradient_fill_content, "_cacheSteps");
  var _colorAnimation$1 = dart.privateName(gradient_fill_content, "_colorAnimation");
  var _opacityAnimation$0 = dart.privateName(gradient_fill_content, "_opacityAnimation");
  var _startPointAnimation$ = dart.privateName(gradient_fill_content, "_startPointAnimation");
  var _endPointAnimation$ = dart.privateName(gradient_fill_content, "_endPointAnimation");
  var _getLinearGradient$ = dart.privateName(gradient_fill_content, "_getLinearGradient");
  var _getRadialGradient$ = dart.privateName(gradient_fill_content, "_getRadialGradient");
  var _getGradientHash$ = dart.privateName(gradient_fill_content, "_getGradientHash");
  var _applyDynamicColorsIfNeeded$ = dart.privateName(gradient_fill_content, "_applyDynamicColorsIfNeeded");
  gradient_fill_content.GradientFillContent = class GradientFillContent extends core.Object {
    get layer() {
      return this[layer$3];
    }
    set layer(value) {
      super.layer = value;
    }
    get lottieDrawable() {
      return this[lottieDrawable$6];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    get dropShadowAnimation() {
      return this[dropShadowAnimation$0];
    }
    set dropShadowAnimation(value) {
      this[dropShadowAnimation$0] = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, _fill) {
      return new gradient_fill_content.GradientFillContent.new(lottieDrawable, layer, _fill);
    }
    get name() {
      return this[_fill$].name;
    }
    invalidate() {
      this.lottieDrawable.invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
      for (let i = 0; i < contentsAfter[$length]; i = i + 1) {
        let content = contentsAfter[$_get](i);
        if (path_content.PathContent.is(content)) {
          this[_paths$][$add](content);
        }
      }
    }
    draw(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      if (this[_fill$].hidden) {
        return;
      }
      l.L.beginSection("GradientFillContent#draw");
      this[_path$5].reset();
      for (let i = 0; i < this[_paths$][$length]; i = i + 1) {
        this[_path$5].addPath(this[_paths$][$_get](i).getPath(), ui.Offset.zero);
      }
      let gradient = null;
      if (this[_fill$].gradientType === gradient_type.GradientType.linear) {
        gradient = this[_getLinearGradient$]();
      } else {
        gradient = this[_getRadialGradient$]();
      }
      this[_paint$0].shader = gradient;
      if (this[_colorFilterAnimation$1] != null) {
        this[_paint$0].colorFilter = dart.nullCheck(this[_colorFilterAnimation$1]).value;
      }
      let blurAnimation = this[_blurAnimation$0];
      if (blurAnimation != null) {
        let blurRadius = blurAnimation.value;
        if (blurRadius === 0) {
          this[_paint$0].maskFilter = null;
        } else if (blurRadius !== this[_blurMaskFilterRadius$0]) {
          let blur = this.layer.getBlurMaskFilter(blurRadius);
          this[_paint$0].maskFilter = blur;
        }
        this[_blurMaskFilterRadius$0] = blurRadius;
      }
      let alpha = (parentAlpha / 255.0 * this[_opacityAnimation$0].value / 100.0 * 255)[$round]();
      utils['PaintExtension|setAlpha'](this[_paint$0], alpha[$clamp](0, 255)[$toInt]());
      if (this.lottieDrawable.antiAliasingSuggested) {
        this[_paint$0].isAntiAlias = true;
      }
      canvas.save();
      canvas.transform(parentMatrix.storage);
      let dropShadow = this.dropShadowAnimation;
      if (dropShadow != null) {
        dropShadow.draw(canvas, this[_path$5]);
      }
      canvas.drawPath(this[_path$5], this[_paint$0]);
      canvas.restore();
      l.L.endSection("GradientFillContent#draw");
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      this[_path$5].reset();
      for (let i = 0; i < this[_paths$][$length]; i = i + 1) {
        this[_path$5].addPath(this[_paths$][$_get](i).getPath(), ui.Offset.zero, {matrix4: parentMatrix.storage});
      }
      let outBounds = this[_path$5].getBounds();
      return outBounds.inflate(1.0);
    }
    [_getLinearGradient$]() {
      let gradientHash = this[_getGradientHash$]();
      let gradient = this[_linearGradientCache$][$_get](gradientHash);
      if (gradient != null) {
        return gradient;
      }
      let startPoint = this[_startPointAnimation$].value;
      let endPoint = this[_endPointAnimation$].value;
      let gradientColor = this[_colorAnimation$1].value;
      let colors = this[_applyDynamicColorsIfNeeded$](gradientColor.colors);
      let positions = gradientColor.positions;
      gradient = ui.Gradient.linear(startPoint, endPoint, colors, positions, ui.TileMode.clamp);
      this[_linearGradientCache$][$_set](gradientHash, gradient);
      return gradient;
    }
    [_getRadialGradient$]() {
      let gradientHash = this[_getGradientHash$]();
      let gradient = this[_radialGradientCache$][$_get](gradientHash);
      if (gradient != null) {
        return gradient;
      }
      let startPoint = this[_startPointAnimation$].value;
      let endPoint = this[_endPointAnimation$].value;
      let gradientColor = this[_colorAnimation$1].value;
      let colors = this[_applyDynamicColorsIfNeeded$](gradientColor.colors);
      let positions = gradientColor.positions;
      let x0 = startPoint.dx;
      let y0 = startPoint.dy;
      let x1 = endPoint.dx;
      let y1 = endPoint.dy;
      let radius = utils.hypot(x1 - x0, y1 - y0)[$toDouble]();
      if (radius <= 0) {
        radius = 0.001;
      }
      gradient = ui.Gradient.radial(startPoint, radius, colors, positions, ui.TileMode.clamp);
      this[_radialGradientCache$][$_set](gradientHash, gradient);
      return gradient;
    }
    [_getGradientHash$]() {
      let startPointProgress = (this[_startPointAnimation$].progress * this[_cacheSteps$])[$round]();
      let endPointProgress = (this[_endPointAnimation$].progress * this[_cacheSteps$])[$round]();
      let colorProgress = (this[_colorAnimation$1].progress * this[_cacheSteps$])[$round]();
      let hash = 17;
      if (startPointProgress !== 0) {
        hash = hash * 31 * startPointProgress;
      }
      if (endPointProgress !== 0) {
        hash = hash * 31 * endPointProgress;
      }
      if (colorProgress !== 0) {
        hash = hash * 31 * colorProgress;
      }
      return hash;
    }
    [_applyDynamicColorsIfNeeded$](colors) {
      if (this[_colorCallbackAnimation$] != null) {
        let dynamicColors = dart.nullCheck(this[_colorCallbackAnimation$]).value;
        if (colors[$length] === dynamicColors[$length]) {
          for (let i = 0; i < colors[$length]; i = i + 1) {
            colors[$_set](i, dynamicColors[$_get](i));
          }
        } else {
          colors = T$.ListOfColor().filled(dynamicColors[$length], C[36] || CT.C36);
          for (let i = 0; i < dynamicColors[$length]; i = i + 1) {
            colors[$_set](i, dynamicColors[$_get](i));
          }
        }
      }
      return colors;
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      misc.MiscUtils.resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath, this);
    }
    addValueCallback(T, property, callback) {
      let t39, t39$, t39$0;
      if (dart.equals(property, 4)) {
        this[_opacityAnimation$0].setValueCallback(T$.LottieValueCallbackNOfint().as(callback));
      } else if (dart.equals(property, lottie_property.LottieProperty.colorFilter)) {
        if (this[_colorFilterAnimation$1] != null) {
          this.layer.removeAnimation(this[_colorFilterAnimation$1]);
        }
        if (callback == null) {
          this[_colorFilterAnimation$1] = null;
        } else {
          this[_colorFilterAnimation$1] = (t39 = new (T$.ValueCallbackKeyframeAnimationOfColorFilter$ColorFilterN()).new(T$.LottieValueCallbackOfColorFilter().as(callback), null), (() => {
            t39.addUpdateListener(dart.bind(this, 'invalidate'));
            return t39;
          })());
          this.layer.addAnimation(this[_colorFilterAnimation$1]);
        }
      } else if (dart.equals(property, lottie_property.LottieProperty.gradientColor)) {
        if (this[_colorCallbackAnimation$] != null) {
          this.layer.removeAnimation(this[_colorCallbackAnimation$]);
        }
        if (callback == null) {
          this[_colorCallbackAnimation$] = null;
        } else {
          this[_linearGradientCache$][$clear]();
          this[_radialGradientCache$][$clear]();
          this[_colorCallbackAnimation$] = (t39$ = new (T$.ValueCallbackKeyframeAnimationOfListOfColor$ListOfColor()).new(T$.LottieValueCallbackOfListOfColor().as(callback), T$.JSArrayOfColor().of([])), (() => {
            t39$.addUpdateListener(dart.bind(this, 'invalidate'));
            return t39$;
          })());
          this.layer.addAnimation(this[_colorCallbackAnimation$]);
        }
      } else if (dart.equals(property, 29)) {
        let blurAnimation = this[_blurAnimation$0];
        if (blurAnimation != null) {
          blurAnimation.setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
        } else {
          this[_blurAnimation$0] = blurAnimation = (t39$0 = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackNOfdouble().as(callback), 0.0), (() => {
            t39$0.addUpdateListener(dart.bind(this, 'invalidate'));
            return t39$0;
          })());
          this.layer.addAnimation(blurAnimation);
        }
      } else if (dart.equals(property, lottie_property.LottieProperty.dropShadow)) {
        let dropShadowAnimation = this.dropShadowAnimation;
        if (dropShadowAnimation == null) {
          let effect = drop_shadow_effect.DropShadowEffect.createEmpty();
          this.dropShadowAnimation = dropShadowAnimation = dropShadowAnimation = new drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.new(dart.bind(this, 'invalidate'), this.layer, effect);
        }
        dropShadowAnimation.setCallback(T$.LottieValueCallbackNOfDropShadow().as(callback));
      }
    }
  };
  (gradient_fill_content.GradientFillContent.new = function(lottieDrawable, layer, _fill) {
    let t39;
    this[_linearGradientCache$] = new (T$.IdentityMapOfint$Gradient()).new();
    this[_radialGradientCache$] = new (T$.IdentityMapOfint$Gradient()).new();
    this[_path$5] = path_factory.PathFactory.create();
    this[_paint$0] = ui.Paint.new();
    this[_paths$] = T$.JSArrayOfPathContent().of([]);
    this[_colorFilterAnimation$1] = null;
    this[_colorCallbackAnimation$] = null;
    this[_blurAnimation$0] = null;
    this[_blurMaskFilterRadius$0] = 0.0;
    this[dropShadowAnimation$0] = null;
    this[lottieDrawable$6] = lottieDrawable;
    this[layer$3] = layer;
    this[_fill$] = _fill;
    this[_cacheSteps$] = (lottieDrawable.composition.duration.inMilliseconds / 32)[$round]();
    this[_colorAnimation$1] = _fill.gradientColor.createAnimation();
    this[_opacityAnimation$0] = _fill.opacity.createAnimation();
    this[_startPointAnimation$] = _fill.startPoint.createAnimation();
    this[_endPointAnimation$] = _fill.endPoint.createAnimation();
    this[_path$5].fillType = this[_fill$].fillType;
    this[_colorAnimation$1].addUpdateListener(dart.bind(this, 'invalidate'));
    this.layer.addAnimation(this[_colorAnimation$1]);
    this[_opacityAnimation$0].addUpdateListener(dart.bind(this, 'invalidate'));
    this.layer.addAnimation(this[_opacityAnimation$0]);
    this[_startPointAnimation$].addUpdateListener(dart.bind(this, 'invalidate'));
    this.layer.addAnimation(this[_startPointAnimation$]);
    this[_endPointAnimation$].addUpdateListener(dart.bind(this, 'invalidate'));
    this.layer.addAnimation(this[_endPointAnimation$]);
    let blurEffect = this.layer.blurEffect;
    if (blurEffect != null) {
      this[_blurAnimation$0] = (t39 = blurEffect.blurriness.createAnimation(), (() => {
        t39.addUpdateListener(dart.bind(this, 'invalidate'));
        return t39;
      })());
      this.layer.addAnimation(this[_blurAnimation$0]);
    }
    let dropShadowEffect = this.layer.dropShadowEffect;
    if (dropShadowEffect != null) {
      this.dropShadowAnimation = new drop_shadow_keyframe_animation.DropShadowKeyframeAnimation.new(dart.bind(this, 'invalidate'), this.layer, dropShadowEffect);
    }
  }).prototype = gradient_fill_content.GradientFillContent.prototype;
  dart.addTypeTests(gradient_fill_content.GradientFillContent);
  dart.addTypeCaches(gradient_fill_content.GradientFillContent);
  gradient_fill_content.GradientFillContent[dart.implements] = () => [drawing_content.DrawingContent, key_path_element_content.KeyPathElementContent];
  dart.setMethodSignature(gradient_fill_content.GradientFillContent, () => ({
    __proto__: dart.getMethods(gradient_fill_content.GradientFillContent.__proto__),
    invalidate: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    getBounds: dart.fnType(ui.Rect, [vector_math_64.Matrix4], {}, {applyParents: core.bool}),
    [_getLinearGradient$]: dart.fnType(ui.Gradient, []),
    [_getRadialGradient$]: dart.fnType(ui.Gradient, []),
    [_getGradientHash$]: dart.fnType(core.int, []),
    [_applyDynamicColorsIfNeeded$]: dart.fnType(core.List$(ui.Color), [core.List$(ui.Color)]),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(gradient_fill_content.GradientFillContent, () => ({
    __proto__: dart.getGetters(gradient_fill_content.GradientFillContent.__proto__),
    name: dart.nullable(core.String)
  }));
  dart.setLibraryUri(gradient_fill_content.GradientFillContent, I[47]);
  dart.setFieldSignature(gradient_fill_content.GradientFillContent, () => ({
    __proto__: dart.getFields(gradient_fill_content.GradientFillContent.__proto__),
    layer: dart.finalFieldType(base_layer.BaseLayer),
    [_fill$]: dart.finalFieldType(gradient_fill.GradientFill),
    [_linearGradientCache$]: dart.finalFieldType(core.Map$(core.int, ui.Gradient)),
    [_radialGradientCache$]: dart.finalFieldType(core.Map$(core.int, ui.Gradient)),
    [_path$5]: dart.finalFieldType(ui.Path),
    [_paint$0]: dart.finalFieldType(ui.Paint),
    [_paths$]: dart.finalFieldType(core.List$(path_content.PathContent)),
    [_colorAnimation$1]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(gradient_color.GradientColor, gradient_color.GradientColor)),
    [_opacityAnimation$0]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)),
    [_startPointAnimation$]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset)),
    [_endPointAnimation$]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset)),
    [_colorFilterAnimation$1]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.ColorFilter, dart.nullable(ui.ColorFilter)))),
    [_colorCallbackAnimation$]: dart.fieldType(dart.nullable(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(core.List$(ui.Color), core.List$(ui.Color)))),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    [_cacheSteps$]: dart.finalFieldType(core.int),
    [_blurAnimation$0]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_blurMaskFilterRadius$0]: dart.fieldType(core.double),
    dropShadowAnimation: dart.fieldType(dart.nullable(drop_shadow_keyframe_animation.DropShadowKeyframeAnimation))
  }));
  dart.setStaticFieldSignature(gradient_fill_content.GradientFillContent, () => ['_cacheStepsMs']);
  dart.defineLazy(gradient_fill_content.GradientFillContent, {
    /*gradient_fill_content.GradientFillContent._cacheStepsMs*/get _cacheStepsMs() {
      return 32;
    }
  }, false);
  var name$13 = dart.privateName(gradient_fill, "GradientFill.name");
  var gradientType$0 = dart.privateName(gradient_fill, "GradientFill.gradientType");
  var fillType$0 = dart.privateName(gradient_fill, "GradientFill.fillType");
  var gradientColor$0 = dart.privateName(gradient_fill, "GradientFill.gradientColor");
  var opacity$2 = dart.privateName(gradient_fill, "GradientFill.opacity");
  var startPoint$0 = dart.privateName(gradient_fill, "GradientFill.startPoint");
  var endPoint$0 = dart.privateName(gradient_fill, "GradientFill.endPoint");
  var highlightLength$ = dart.privateName(gradient_fill, "GradientFill.highlightLength");
  var highlightAngle$ = dart.privateName(gradient_fill, "GradientFill.highlightAngle");
  var hidden$7 = dart.privateName(gradient_fill, "GradientFill.hidden");
  gradient_fill.GradientFill = class GradientFill extends core.Object {
    get name() {
      return this[name$13];
    }
    set name(value) {
      super.name = value;
    }
    get gradientType() {
      return this[gradientType$0];
    }
    set gradientType(value) {
      super.gradientType = value;
    }
    get fillType() {
      return this[fillType$0];
    }
    set fillType(value) {
      super.fillType = value;
    }
    get gradientColor() {
      return this[gradientColor$0];
    }
    set gradientColor(value) {
      super.gradientColor = value;
    }
    get opacity() {
      return this[opacity$2];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get startPoint() {
      return this[startPoint$0];
    }
    set startPoint(value) {
      super.startPoint = value;
    }
    get endPoint() {
      return this[endPoint$0];
    }
    set endPoint(value) {
      super.endPoint = value;
    }
    get highlightLength() {
      return this[highlightLength$];
    }
    set highlightLength(value) {
      super.highlightLength = value;
    }
    get highlightAngle() {
      return this[highlightAngle$];
    }
    set highlightAngle(value) {
      super.highlightAngle = value;
    }
    get hidden() {
      return this[hidden$7];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let gradientType = opts && 'gradientType' in opts ? opts.gradientType : null;
      let fillType = opts && 'fillType' in opts ? opts.fillType : null;
      let gradientColor = opts && 'gradientColor' in opts ? opts.gradientColor : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let startPoint = opts && 'startPoint' in opts ? opts.startPoint : null;
      let endPoint = opts && 'endPoint' in opts ? opts.endPoint : null;
      let highlightLength = opts && 'highlightLength' in opts ? opts.highlightLength : null;
      let highlightAngle = opts && 'highlightAngle' in opts ? opts.highlightAngle : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new gradient_fill.GradientFill.new({name: name, gradientType: gradientType, fillType: fillType, gradientColor: gradientColor, opacity: opacity, startPoint: startPoint, endPoint: endPoint, highlightLength: highlightLength, highlightAngle: highlightAngle, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new gradient_fill_content.GradientFillContent.new(drawable, layer, this);
    }
  };
  (gradient_fill.GradientFill.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let gradientType = opts && 'gradientType' in opts ? opts.gradientType : null;
    let fillType = opts && 'fillType' in opts ? opts.fillType : null;
    let gradientColor = opts && 'gradientColor' in opts ? opts.gradientColor : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let startPoint = opts && 'startPoint' in opts ? opts.startPoint : null;
    let endPoint = opts && 'endPoint' in opts ? opts.endPoint : null;
    let highlightLength = opts && 'highlightLength' in opts ? opts.highlightLength : null;
    let highlightAngle = opts && 'highlightAngle' in opts ? opts.highlightAngle : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$13] = name;
    this[gradientType$0] = gradientType;
    this[fillType$0] = fillType;
    this[gradientColor$0] = gradientColor;
    this[opacity$2] = opacity;
    this[startPoint$0] = startPoint;
    this[endPoint$0] = endPoint;
    this[highlightLength$] = highlightLength;
    this[highlightAngle$] = highlightAngle;
    this[hidden$7] = hidden;
    ;
  }).prototype = gradient_fill.GradientFill.prototype;
  dart.addTypeTests(gradient_fill.GradientFill);
  dart.addTypeCaches(gradient_fill.GradientFill);
  gradient_fill.GradientFill[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(gradient_fill.GradientFill, () => ({
    __proto__: dart.getMethods(gradient_fill.GradientFill.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(gradient_fill.GradientFill, I[48]);
  dart.setFieldSignature(gradient_fill.GradientFill, () => ({
    __proto__: dart.getFields(gradient_fill.GradientFill.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    gradientType: dart.finalFieldType(gradient_type.GradientType),
    fillType: dart.finalFieldType(ui.PathFillType),
    gradientColor: dart.finalFieldType(animatable_gradient_color_value.AnimatableGradientColorValue),
    opacity: dart.finalFieldType(animatable_integer_value.AnimatableIntegerValue),
    startPoint: dart.finalFieldType(animatable_point_value.AnimatablePointValue),
    endPoint: dart.finalFieldType(animatable_point_value.AnimatablePointValue),
    highlightLength: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    highlightAngle: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    hidden: dart.finalFieldType(core.bool)
  }));
  gradient_fill_parser.GradientFillParser = class GradientFillParser extends core.Object {
    static ['_#_#tearOff']() {
      return new gradient_fill_parser.GradientFillParser.__();
    }
    static parse(reader, composition) {
      let t39;
      let name = null;
      let color = null;
      let opacity = null;
      let gradientType = null;
      let startPoint = null;
      let endPoint = null;
      let fillType = ui.PathFillType.nonZero;
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(gradient_fill_parser.GradientFillParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              let points = -1;
              reader.beginObject();
              while (reader.hasNext()) {
                switch (reader.selectName(gradient_fill_parser.GradientFillParser._gradientNames)) {
                  case 0:
                    {
                      points = reader.nextInt();
                      break;
                    }
                  case 1:
                    {
                      color = animatable_value_parser.AnimatableValueParser.parseGradientColor(reader, composition, points);
                      break;
                    }
                  default:
                    {
                      reader.skipName();
                      reader.skipValue();
                    }
                }
              }
              reader.endObject();
              break;
            }
          case 2:
            {
              opacity = animatable_value_parser.AnimatableValueParser.parseInteger(reader, composition);
              break;
            }
          case 3:
            {
              gradientType = reader.nextInt() === 1 ? gradient_type.GradientType.linear : gradient_type.GradientType.radial;
              break;
            }
          case 4:
            {
              startPoint = animatable_value_parser.AnimatableValueParser.parsePoint(reader, composition);
              break;
            }
          case 5:
            {
              endPoint = animatable_value_parser.AnimatableValueParser.parsePoint(reader, composition);
              break;
            }
          case 6:
            {
              fillType = reader.nextInt() === 1 ? ui.PathFillType.nonZero : ui.PathFillType.evenOdd;
              break;
            }
          case 7:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      opacity == null ? opacity = new animatable_integer_value.AnimatableIntegerValue.fromKeyframes(T$.JSArrayOfKeyframeOfint().of([new (T$.KeyframeOfint()).nonAnimated(100)])) : null;
      return new gradient_fill.GradientFill.new({name: name, gradientType: (t39 = gradientType, t39 == null ? gradient_type.GradientType.linear : t39), fillType: fillType, gradientColor: dart.nullCheck(color), opacity: opacity, startPoint: dart.nullCheck(startPoint), endPoint: dart.nullCheck(endPoint), highlightLength: null, highlightAngle: null, hidden: hidden});
    }
  };
  (gradient_fill_parser.GradientFillParser.__ = function() {
    ;
  }).prototype = gradient_fill_parser.GradientFillParser.prototype;
  dart.addTypeTests(gradient_fill_parser.GradientFillParser);
  dart.addTypeCaches(gradient_fill_parser.GradientFillParser);
  dart.setStaticMethodSignature(gradient_fill_parser.GradientFillParser, () => ['parse']);
  dart.setLibraryUri(gradient_fill_parser.GradientFillParser, I[49]);
  dart.setStaticFieldSignature(gradient_fill_parser.GradientFillParser, () => ['_names', '_gradientNames']);
  dart.defineLazy(gradient_fill_parser.GradientFillParser, {
    /*gradient_fill_parser.GradientFillParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "g", "o", "t", "s", "e", "r", "hd"]));
    },
    /*gradient_fill_parser.GradientFillParser._gradientNames*/get _gradientNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["p", "k"]));
    }
  }, false);
  var _contents = dart.privateName(compound_trim_path_content, "_contents");
  compound_trim_path_content.CompoundTrimPathContent = class CompoundTrimPathContent extends core.Object {
    addTrimPath(trimPath) {
      this[_contents][$add](trimPath);
    }
    apply(path) {
      for (let i = this[_contents][$length] - 1; i >= 0; i = i - 1) {
        utils$.Utils.applyTrimPathContentIfNeeded(path, this[_contents][$_get](i));
      }
    }
    static ['_#new#tearOff']() {
      return new compound_trim_path_content.CompoundTrimPathContent.new();
    }
  };
  (compound_trim_path_content.CompoundTrimPathContent.new = function() {
    this[_contents] = T$.JSArrayOfTrimPathContent().of([]);
    ;
  }).prototype = compound_trim_path_content.CompoundTrimPathContent.prototype;
  dart.addTypeTests(compound_trim_path_content.CompoundTrimPathContent);
  dart.addTypeCaches(compound_trim_path_content.CompoundTrimPathContent);
  dart.setMethodSignature(compound_trim_path_content.CompoundTrimPathContent, () => ({
    __proto__: dart.getMethods(compound_trim_path_content.CompoundTrimPathContent.__proto__),
    addTrimPath: dart.fnType(dart.void, [trim_path_content.TrimPathContent]),
    apply: dart.fnType(dart.void, [ui.Path])
  }));
  dart.setLibraryUri(compound_trim_path_content.CompoundTrimPathContent, I[50]);
  dart.setFieldSignature(compound_trim_path_content.CompoundTrimPathContent, () => ({
    __proto__: dart.getFields(compound_trim_path_content.CompoundTrimPathContent.__proto__),
    [_contents]: dart.finalFieldType(core.List$(trim_path_content.TrimPathContent))
  }));
  var name$14 = dart.privateName(ellipse_content, "EllipseContent.name");
  var lottieDrawable$7 = dart.privateName(ellipse_content, "EllipseContent.lottieDrawable");
  var _path$6 = dart.privateName(ellipse_content, "_path");
  var _trimPaths$1 = dart.privateName(ellipse_content, "_trimPaths");
  var _isPathValid$1 = dart.privateName(ellipse_content, "_isPathValid");
  var _circleShape$ = dart.privateName(ellipse_content, "_circleShape");
  var _sizeAnimation$ = dart.privateName(ellipse_content, "_sizeAnimation");
  var _positionAnimation$0 = dart.privateName(ellipse_content, "_positionAnimation");
  ellipse_content.EllipseContent = class EllipseContent extends core.Object {
    get name() {
      return this[name$14];
    }
    set name(value) {
      super.name = value;
    }
    get lottieDrawable() {
      return this[lottieDrawable$7];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, _circleShape) {
      return new ellipse_content.EllipseContent.new(lottieDrawable, layer, _circleShape);
    }
    invalidate() {
      this[_isPathValid$1] = false;
      this.lottieDrawable.invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
      for (let i = 0; i < contentsBefore[$length]; i = i + 1) {
        let content = contentsBefore[$_get](i);
        if (trim_path_content.TrimPathContent.is(content) && content.type === shape_trim_path.ShapeTrimPathType.simultaneously) {
          let trimPath = content;
          this[_trimPaths$1].addTrimPath(trimPath);
          trimPath.addListener(dart.bind(this, 'invalidate'));
        }
      }
    }
    getPath() {
      if (this[_isPathValid$1]) {
        return this[_path$6];
      }
      this[_path$6].reset();
      if (this[_circleShape$].hidden) {
        this[_isPathValid$1] = true;
        return this[_path$6];
      }
      let size = this[_sizeAnimation$].value;
      let halfWidth = size.dx / 2.0;
      let halfHeight = size.dy / 2.0;
      let cpW = halfWidth * 0.55228;
      let cpH = halfHeight * 0.55228;
      this[_path$6].reset();
      if (this[_circleShape$].isReversed) {
        this[_path$6].moveTo(0.0, -halfHeight);
        this[_path$6].cubicTo(0 - cpW, -halfHeight, -halfWidth, 0 - cpH, -halfWidth, 0.0);
        this[_path$6].cubicTo(-halfWidth, 0 + cpH, 0 - cpW, halfHeight, 0.0, halfHeight);
        this[_path$6].cubicTo(0 + cpW, halfHeight, halfWidth, 0 + cpH, halfWidth, 0.0);
        this[_path$6].cubicTo(halfWidth, 0 - cpH, 0 + cpW, -halfHeight, 0.0, -halfHeight);
      } else {
        this[_path$6].moveTo(0.0, -halfHeight);
        this[_path$6].cubicTo(0 + cpW, -halfHeight, halfWidth, 0 - cpH, halfWidth, 0.0);
        this[_path$6].cubicTo(halfWidth, 0 + cpH, 0 + cpW, halfHeight, 0.0, halfHeight);
        this[_path$6].cubicTo(0 - cpW, halfHeight, -halfWidth, 0 + cpH, -halfWidth, 0.0);
        this[_path$6].cubicTo(-halfWidth, 0 - cpH, 0 - cpW, -halfHeight, 0.0, -halfHeight);
      }
      let position = this[_positionAnimation$0].value;
      utils['PathExtension|offset'](this[_path$6], position);
      this[_path$6].close();
      this[_trimPaths$1].apply(this[_path$6]);
      this[_isPathValid$1] = true;
      return this[_path$6];
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      misc.MiscUtils.resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath, this);
    }
    addValueCallback(T, property, callback) {
      if (dart.equals(property, lottie_property.LottieProperty.ellipseSize)) {
        this[_sizeAnimation$].setValueCallback(T$.LottieValueCallbackNOfOffset().as(callback));
      } else if (dart.equals(property, lottie_property.LottieProperty.position)) {
        this[_positionAnimation$0].setValueCallback(T$.LottieValueCallbackNOfOffset().as(callback));
      }
    }
  };
  (ellipse_content.EllipseContent.new = function(lottieDrawable, layer, _circleShape) {
    this[_path$6] = path_factory.PathFactory.create();
    this[_trimPaths$1] = new compound_trim_path_content.CompoundTrimPathContent.new();
    this[_isPathValid$1] = false;
    this[lottieDrawable$7] = lottieDrawable;
    this[_circleShape$] = _circleShape;
    this[name$14] = _circleShape.name;
    this[_sizeAnimation$] = _circleShape.size.createAnimation();
    this[_positionAnimation$0] = _circleShape.position.createAnimation();
    layer.addAnimation(this[_sizeAnimation$]);
    layer.addAnimation(this[_positionAnimation$0]);
    this[_sizeAnimation$].addUpdateListener(dart.bind(this, 'invalidate'));
    this[_positionAnimation$0].addUpdateListener(dart.bind(this, 'invalidate'));
  }).prototype = ellipse_content.EllipseContent.prototype;
  dart.addTypeTests(ellipse_content.EllipseContent);
  dart.addTypeCaches(ellipse_content.EllipseContent);
  ellipse_content.EllipseContent[dart.implements] = () => [path_content.PathContent, key_path_element_content.KeyPathElementContent];
  dart.setMethodSignature(ellipse_content.EllipseContent, () => ({
    __proto__: dart.getMethods(ellipse_content.EllipseContent.__proto__),
    invalidate: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    getPath: dart.fnType(ui.Path, []),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(ellipse_content.EllipseContent, I[51]);
  dart.setFieldSignature(ellipse_content.EllipseContent, () => ({
    __proto__: dart.getFields(ellipse_content.EllipseContent.__proto__),
    [_path$6]: dart.finalFieldType(ui.Path),
    name: dart.finalFieldType(dart.nullable(core.String)),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    [_sizeAnimation$]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, ui.Offset)),
    [_positionAnimation$0]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, ui.Offset)),
    [_circleShape$]: dart.finalFieldType(circle_shape.CircleShape),
    [_trimPaths$1]: dart.finalFieldType(compound_trim_path_content.CompoundTrimPathContent),
    [_isPathValid$1]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(ellipse_content.EllipseContent, () => ['_ellipseControlPointPercentage']);
  dart.defineLazy(ellipse_content.EllipseContent, {
    /*ellipse_content.EllipseContent._ellipseControlPointPercentage*/get _ellipseControlPointPercentage() {
      return 0.55228;
    }
  }, false);
  var name$15 = dart.privateName(circle_shape, "CircleShape.name");
  var position$1 = dart.privateName(circle_shape, "CircleShape.position");
  var size$0 = dart.privateName(circle_shape, "CircleShape.size");
  var isReversed$0 = dart.privateName(circle_shape, "CircleShape.isReversed");
  var hidden$8 = dart.privateName(circle_shape, "CircleShape.hidden");
  circle_shape.CircleShape = class CircleShape extends core.Object {
    get name() {
      return this[name$15];
    }
    set name(value) {
      super.name = value;
    }
    get position() {
      return this[position$1];
    }
    set position(value) {
      super.position = value;
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get isReversed() {
      return this[isReversed$0];
    }
    set isReversed(value) {
      super.isReversed = value;
    }
    get hidden() {
      return this[hidden$8];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let isReversed = opts && 'isReversed' in opts ? opts.isReversed : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new circle_shape.CircleShape.new({name: name, position: position, size: size, isReversed: isReversed, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new ellipse_content.EllipseContent.new(drawable, layer, this);
    }
  };
  (circle_shape.CircleShape.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let isReversed = opts && 'isReversed' in opts ? opts.isReversed : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$15] = name;
    this[position$1] = position;
    this[size$0] = size;
    this[isReversed$0] = isReversed;
    this[hidden$8] = hidden;
    ;
  }).prototype = circle_shape.CircleShape.prototype;
  dart.addTypeTests(circle_shape.CircleShape);
  dart.addTypeCaches(circle_shape.CircleShape);
  circle_shape.CircleShape[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(circle_shape.CircleShape, () => ({
    __proto__: dart.getMethods(circle_shape.CircleShape.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(circle_shape.CircleShape, I[52]);
  dart.setFieldSignature(circle_shape.CircleShape, () => ({
    __proto__: dart.getFields(circle_shape.CircleShape.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    position: dart.finalFieldType(animatable_value.AnimatableValue$(ui.Offset, ui.Offset)),
    size: dart.finalFieldType(animatable_point_value.AnimatablePointValue),
    isReversed: dart.finalFieldType(core.bool),
    hidden: dart.finalFieldType(core.bool)
  }));
  circle_shape_parser.CircleShapeParser = class CircleShapeParser extends core.Object {
    static ['_#_#tearOff']() {
      return new circle_shape_parser.CircleShapeParser.__();
    }
    static parse(reader, composition, d) {
      let name = null;
      let position = null;
      function position$35get() {
        let t40;
        t40 = position;
        return t40 == null ? dart.throw(new _internal.LateError.localNI("position")) : t40;
      }
      dart.fn(position$35get, T$.VoidToAnimatableValueOfOffset$Offset());
      function position$35set(position$35param) {
        return position = position$35param;
      }
      dart.fn(position$35set, T$.AnimatableValueOfOffset$OffsetTodynamic());
      let size = null;
      function size$35get() {
        let t43;
        t43 = size;
        return t43 == null ? dart.throw(new _internal.LateError.localNI("size")) : t43;
      }
      dart.fn(size$35get, T$.VoidToAnimatablePointValue());
      function size$35set(size$35param) {
        return size = size$35param;
      }
      dart.fn(size$35set, T$.AnimatablePointValueTodynamic());
      let reversed = d === 3;
      let hidden = false;
      while (reader.hasNext()) {
        switch (reader.selectName(circle_shape_parser.CircleShapeParser._names)) {
          case 0:
            {
              name = reader.nextString();
              break;
            }
          case 1:
            {
              position$35set(animatable_path_value_parser.AnimatablePathValueParser.parseSplitPath(reader, composition));
              break;
            }
          case 2:
            {
              size$35set(animatable_value_parser.AnimatableValueParser.parsePoint(reader, composition));
              break;
            }
          case 3:
            {
              hidden = reader.nextBoolean();
              break;
            }
          case 4:
            {
              reversed = reader.nextInt() === 3;
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      return new circle_shape.CircleShape.new({name: name, position: position$35get(), size: size$35get(), isReversed: reversed, hidden: hidden});
    }
  };
  (circle_shape_parser.CircleShapeParser.__ = function() {
    ;
  }).prototype = circle_shape_parser.CircleShapeParser.prototype;
  dart.addTypeTests(circle_shape_parser.CircleShapeParser);
  dart.addTypeCaches(circle_shape_parser.CircleShapeParser);
  dart.setStaticMethodSignature(circle_shape_parser.CircleShapeParser, () => ['parse']);
  dart.setLibraryUri(circle_shape_parser.CircleShapeParser, I[53]);
  dart.setStaticFieldSignature(circle_shape_parser.CircleShapeParser, () => ['_names']);
  dart.defineLazy(circle_shape_parser.CircleShapeParser, {
    /*circle_shape_parser.CircleShapeParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "p", "s", "hd", "d"]));
    }
  }, false);
  content_model_parser.ContentModelParser = class ContentModelParser extends core.Object {
    static ['_#_#tearOff']() {
      return new content_model_parser.ContentModelParser.__();
    }
    static parse(reader, composition) {
      let type = null;
      reader.beginObject();
      let d = 2;
      L0:
        while (reader.hasNext()) {
          switch (reader.selectName(content_model_parser.ContentModelParser._names)) {
            case 0:
              {
                type = reader.nextString();
                break L0;
              }
            case 1:
              {
                d = reader.nextInt();
                break;
              }
            default:
              {
                reader.skipName();
                reader.skipValue();
              }
          }
        }
      if (type == null) {
        return null;
      }
      let model = null;
      switch (type) {
        case "gr":
          {
            model = shape_group_parser.ShapeGroupParser.parse(reader, composition);
            break;
          }
        case "st":
          {
            model = shape_stroke_parser.ShapeStrokeParser.parse(reader, composition);
            break;
          }
        case "gs":
          {
            model = gradient_stroke_parser.GradientStrokeParser.parse(reader, composition);
            break;
          }
        case "fl":
          {
            model = shape_fill_parser.ShapeFillParser.parse(reader, composition);
            break;
          }
        case "gf":
          {
            model = gradient_fill_parser.GradientFillParser.parse(reader, composition);
            break;
          }
        case "tr":
          {
            model = animatable_transform_parser.AnimatableTransformParser.parse(reader, composition);
            break;
          }
        case "sh":
          {
            model = shape_path_parser.ShapePathParser.parse(reader, composition);
            break;
          }
        case "el":
          {
            model = circle_shape_parser.CircleShapeParser.parse(reader, composition, d);
            break;
          }
        case "rc":
          {
            model = rectangle_shape_parser.RectangleShapeParser.parse(reader, composition);
            break;
          }
        case "tm":
          {
            model = shape_trim_path_parser.ShapeTrimPathParser.parse(reader, composition);
            break;
          }
        case "sr":
          {
            model = polysar_shape_parser.PolystarShapeParser.parse(reader, composition, {d: d});
            break;
          }
        case "mm":
          {
            model = merge_paths_parser.MergePathsParser.parse(reader);
            break;
          }
        case "rp":
          {
            model = repeat_parser.RepeaterParser.parse(reader, composition);
            break;
          }
        case "rd":
          {
            model = rounded_corners_parser.RoundedCornersParser.parse(reader, composition);
            break;
          }
        default:
          {
            composition.addWarning("Unknown shape type " + dart.str(type));
          }
      }
      while (reader.hasNext()) {
        reader.skipValue();
      }
      reader.endObject();
      return model;
    }
  };
  (content_model_parser.ContentModelParser.__ = function() {
    ;
  }).prototype = content_model_parser.ContentModelParser.prototype;
  dart.addTypeTests(content_model_parser.ContentModelParser);
  dart.addTypeCaches(content_model_parser.ContentModelParser);
  dart.setStaticMethodSignature(content_model_parser.ContentModelParser, () => ['parse']);
  dart.setLibraryUri(content_model_parser.ContentModelParser, I[54]);
  dart.setStaticFieldSignature(content_model_parser.ContentModelParser, () => ['_names']);
  dart.defineLazy(content_model_parser.ContentModelParser, {
    /*content_model_parser.ContentModelParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["ty", "d"]));
    }
  }, false);
  blur_effect_parser.BlurEffectParser = class BlurEffectParser extends core.Object {
    static parse(reader, composition) {
      let blurEffect = null;
      while (reader.hasNext()) {
        switch (reader.selectName(blur_effect_parser.BlurEffectParser._blurEffectNames)) {
          case 0:
            {
              reader.beginArray();
              while (reader.hasNext()) {
                let be = blur_effect_parser.BlurEffectParser._maybeParseInnerEffect(reader, composition);
                if (be != null) {
                  blurEffect = be;
                }
              }
              reader.endArray();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      return blurEffect;
    }
    static _maybeParseInnerEffect(reader, composition) {
      let blurEffect = null;
      let isCorrectType = false;
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(blur_effect_parser.BlurEffectParser._innerBlurEffectNames)) {
          case 0:
            {
              isCorrectType = reader.nextInt() === 0;
              break;
            }
          case 1:
            {
              if (isCorrectType) {
                blurEffect = new blur_effect.BlurEffect.new(animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition));
              } else {
                reader.skipValue();
              }
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      return blurEffect;
    }
    static ['_#new#tearOff']() {
      return new blur_effect_parser.BlurEffectParser.new();
    }
  };
  (blur_effect_parser.BlurEffectParser.new = function() {
    ;
  }).prototype = blur_effect_parser.BlurEffectParser.prototype;
  dart.addTypeTests(blur_effect_parser.BlurEffectParser);
  dart.addTypeCaches(blur_effect_parser.BlurEffectParser);
  dart.setStaticMethodSignature(blur_effect_parser.BlurEffectParser, () => ['parse', '_maybeParseInnerEffect']);
  dart.setLibraryUri(blur_effect_parser.BlurEffectParser, I[55]);
  dart.setStaticFieldSignature(blur_effect_parser.BlurEffectParser, () => ['_blurEffectNames', '_innerBlurEffectNames']);
  dart.defineLazy(blur_effect_parser.BlurEffectParser, {
    /*blur_effect_parser.BlurEffectParser._blurEffectNames*/get _blurEffectNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["ef"]));
    },
    /*blur_effect_parser.BlurEffectParser._innerBlurEffectNames*/get _innerBlurEffectNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["ty", "v"]));
    }
  }, false);
  path_keyframe_parser.PathKeyframeParser = class PathKeyframeParser extends core.Object {
    static ['_#_#tearOff']() {
      return new path_keyframe_parser.PathKeyframeParser.__();
    }
    static parse(reader, composition) {
      let animated = reader.peek() === json_reader.Token.beginObject;
      let keyframe = keyframe_parser.KeyframeParser.parse(ui.Offset, reader, composition, ui.window.devicePixelRatio, C[38] || CT.C38, {animated: animated});
      return new path_keyframe.PathKeyframe.new(composition, keyframe);
    }
  };
  (path_keyframe_parser.PathKeyframeParser.__ = function() {
    ;
  }).prototype = path_keyframe_parser.PathKeyframeParser.prototype;
  dart.addTypeTests(path_keyframe_parser.PathKeyframeParser);
  dart.addTypeCaches(path_keyframe_parser.PathKeyframeParser);
  dart.setStaticMethodSignature(path_keyframe_parser.PathKeyframeParser, () => ['parse']);
  dart.setLibraryUri(path_keyframe_parser.PathKeyframeParser, I[56]);
  animatable_path_value_parser.AnimatablePathValueParser = class AnimatablePathValueParser extends core.Object {
    static ['_#_#tearOff']() {
      return new animatable_path_value_parser.AnimatablePathValueParser.__();
    }
    static parse(reader, composition) {
      let keyframes = T$.JSArrayOfKeyframeOfOffset().of([]);
      if (reader.peek() === json_reader.Token.beginArray) {
        reader.beginArray();
        while (reader.hasNext()) {
          keyframes[$add](path_keyframe_parser.PathKeyframeParser.parse(reader, composition));
        }
        reader.endArray();
        keyframes_parser.KeyframesParser.setEndFrames(ui.Offset, keyframes);
      } else {
        keyframes[$add](new (T$.KeyframeOfOffset()).nonAnimated(json_utils.JsonUtils.jsonToPoint(reader, ui.window.devicePixelRatio)));
      }
      return new animatable_path_value.AnimatablePathValue.fromKeyframes(keyframes);
    }
    static parseSplitPath(reader, composition) {
      let pathAnimation = null;
      let xAnimation = null;
      let yAnimation = null;
      let hasExpressions = false;
      reader.beginObject();
      while (reader.peek() !== json_reader.Token.endObject) {
        switch (reader.selectName(animatable_path_value_parser.AnimatablePathValueParser._names)) {
          case 0:
            {
              pathAnimation = animatable_path_value_parser.AnimatablePathValueParser.parse(reader, composition);
              break;
            }
          case 1:
            {
              if (reader.peek() === json_reader.Token.string) {
                hasExpressions = true;
                reader.skipValue();
              } else {
                xAnimation = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
              }
              break;
            }
          case 2:
            {
              if (reader.peek() === json_reader.Token.string) {
                hasExpressions = true;
                reader.skipValue();
              } else {
                yAnimation = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
              }
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      if (hasExpressions) {
        composition.addWarning("Lottie doesn't support expressions.");
      }
      if (pathAnimation != null) {
        return pathAnimation;
      }
      return new animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue.new(dart.nullCheck(xAnimation), dart.nullCheck(yAnimation));
    }
  };
  (animatable_path_value_parser.AnimatablePathValueParser.__ = function() {
    ;
  }).prototype = animatable_path_value_parser.AnimatablePathValueParser.prototype;
  dart.addTypeTests(animatable_path_value_parser.AnimatablePathValueParser);
  dart.addTypeCaches(animatable_path_value_parser.AnimatablePathValueParser);
  dart.setStaticMethodSignature(animatable_path_value_parser.AnimatablePathValueParser, () => ['parse', 'parseSplitPath']);
  dart.setLibraryUri(animatable_path_value_parser.AnimatablePathValueParser, I[57]);
  dart.setStaticFieldSignature(animatable_path_value_parser.AnimatablePathValueParser, () => ['_names']);
  dart.defineLazy(animatable_path_value_parser.AnimatablePathValueParser, {
    /*animatable_path_value_parser.AnimatablePathValueParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["k", "x", "y"]));
    }
  }, false);
  var __SplitDimensionPathKeyframeAnimation__point = dart.privateName(split_dimension_path_keyframe_animation, "_#SplitDimensionPathKeyframeAnimation#_point");
  var _xAnimation$ = dart.privateName(split_dimension_path_keyframe_animation, "_xAnimation");
  var _yAnimation$ = dart.privateName(split_dimension_path_keyframe_animation, "_yAnimation");
  var _point = dart.privateName(split_dimension_path_keyframe_animation, "_point");
  var listeners = dart.privateName(base_keyframe_animation, "BaseKeyframeAnimation.listeners");
  var valueCallback = dart.privateName(base_keyframe_animation, "BaseKeyframeAnimation.valueCallback");
  var _isDiscrete = dart.privateName(base_keyframe_animation, "_isDiscrete");
  var _progress = dart.privateName(base_keyframe_animation, "_progress");
  var _cachedGetValue = dart.privateName(base_keyframe_animation, "_cachedGetValue");
  var _cachedStartDelayProgress = dart.privateName(base_keyframe_animation, "_cachedStartDelayProgress");
  var _cachedEndProgress = dart.privateName(base_keyframe_animation, "_cachedEndProgress");
  var _keyframesWrapper = dart.privateName(base_keyframe_animation, "_keyframesWrapper");
  const _is_BaseKeyframeAnimation_default = Symbol('_is_BaseKeyframeAnimation_default');
  base_keyframe_animation.BaseKeyframeAnimation$ = dart.generic((K, A) => {
    var __t$KeyframeOfK = () => (__t$KeyframeOfK = dart.constFn(keyframe$.Keyframe$(K)))();
    var __t$LottieValueCallbackOfA = () => (__t$LottieValueCallbackOfA = dart.constFn(lottie_value_callback.LottieValueCallback$(A)))();
    var __t$LottieValueCallbackNOfA = () => (__t$LottieValueCallbackNOfA = dart.constFn(dart.nullable(__t$LottieValueCallbackOfA())))();
    class BaseKeyframeAnimation extends core.Object {
      get listeners() {
        return this[listeners];
      }
      set listeners(value) {
        super.listeners = value;
      }
      get valueCallback() {
        return this[valueCallback];
      }
      set valueCallback(value) {
        this[valueCallback] = __t$LottieValueCallbackNOfA().as(value);
      }
      setIsDiscrete() {
        this[_isDiscrete] = true;
      }
      addUpdateListener(listener) {
        this.listeners[$add](listener);
      }
      setProgress(progress) {
        if (this[_keyframesWrapper].isEmpty) {
          return;
        }
        if (progress < this.getStartDelayProgress()) {
          progress = this.getStartDelayProgress();
        } else if (progress > this.getEndProgress()) {
          progress = this.getEndProgress();
        }
        if (progress === this[_progress]) {
          return;
        }
        this[_progress] = progress;
        if (this[_keyframesWrapper].isValueChanged(progress)) {
          this.notifyListeners();
        }
      }
      notifyListeners() {
        for (let listener of this.listeners) {
          listener();
        }
      }
      getCurrentKeyframe() {
        l.L.beginSection("BaseKeyframeAnimation#getCurrentKeyframe");
        let keyframe = this[_keyframesWrapper].getCurrentKeyframe();
        l.L.endSection("BaseKeyframeAnimation#getCurrentKeyframe");
        return keyframe;
      }
      getLinearCurrentKeyframeProgress() {
        if (this[_isDiscrete]) {
          return 0.0;
        }
        let keyframe = this.getCurrentKeyframe();
        if (keyframe.isStatic) {
          return 0.0;
        }
        let progressIntoFrame = this[_progress] - keyframe.startProgress;
        let keyframeProgress = keyframe.endProgress - keyframe.startProgress;
        return (progressIntoFrame / keyframeProgress)[$clamp](0.0, 1.0);
      }
      getInterpolatedCurrentKeyframeProgress() {
        let keyframe = this.getCurrentKeyframe();
        if (keyframe.isStatic) {
          return 0.0;
        }
        return dart.nullCheck(keyframe.interpolator).transform(this.getLinearCurrentKeyframeProgress());
      }
      getStartDelayProgress() {
        if (this[_cachedStartDelayProgress] === -1) {
          this[_cachedStartDelayProgress] = this[_keyframesWrapper].getStartDelayProgress();
        }
        return this[_cachedStartDelayProgress];
      }
      getEndProgress() {
        if (this[_cachedEndProgress] === -1) {
          this[_cachedEndProgress] = this[_keyframesWrapper].getEndProgress();
        }
        return this[_cachedEndProgress];
      }
      get value() {
        let value = null;
        let linearProgress = this.getLinearCurrentKeyframeProgress();
        if (this.valueCallback == null && this[_keyframesWrapper].isCachedValueEnabled(linearProgress)) {
          return dart.nullCheck(this[_cachedGetValue]);
        }
        let keyframe = this.getCurrentKeyframe();
        if (keyframe.xInterpolator != null && keyframe.yInterpolator != null) {
          let xProgress = dart.nullCheck(keyframe.xInterpolator).transform(linearProgress);
          let yProgress = dart.nullCheck(keyframe.yInterpolator).transform(linearProgress);
          value = this.getValueSplitDimension(keyframe, linearProgress, xProgress, yProgress);
        } else {
          let progress = this.getInterpolatedCurrentKeyframeProgress();
          value = this.getValue(keyframe, progress);
        }
        this[_cachedGetValue] = value;
        return value;
      }
      get progress() {
        return this[_progress];
      }
      set progress(value) {
        this[_progress] = value;
      }
      setValueCallback(valueCallback) {
        __t$LottieValueCallbackNOfA().as(valueCallback);
        if (this.valueCallback != null) {
          dart.nullCheck(this.valueCallback).setAnimation(null);
        }
        this.valueCallback = valueCallback;
        if (valueCallback != null) {
          valueCallback.setAnimation(this);
        }
      }
      getValueSplitDimension(keyframe, linearKeyframeProgress, xKeyframeProgress, yKeyframeProgress) {
        __t$KeyframeOfK().as(keyframe);
        dart.throw(core.Exception.new("This animation does not support split dimensions!"));
      }
      static _wrap(T, keyframes) {
        if (keyframes[$isEmpty]) {
          return new (base_keyframe_animation._EmptyKeyframeWrapper$(T)).new();
        }
        if (keyframes[$length] === 1) {
          return new (base_keyframe_animation._SingleKeyframeWrapper$(T)).new(keyframes);
        }
        return new (base_keyframe_animation._KeyframesWrapperImpl$(T)).new(keyframes);
      }
    }
    (BaseKeyframeAnimation.new = function(keyframes) {
      this[listeners] = T$.JSArrayOfVoidTovoid().of([]);
      this[_isDiscrete] = false;
      this[_progress] = 0.0;
      this[valueCallback] = null;
      this[_cachedGetValue] = null;
      this[_cachedStartDelayProgress] = -1.0;
      this[_cachedEndProgress] = -1.0;
      this[_keyframesWrapper] = base_keyframe_animation.BaseKeyframeAnimation._wrap(K, keyframes);
      ;
    }).prototype = BaseKeyframeAnimation.prototype;
    dart.addTypeTests(BaseKeyframeAnimation);
    BaseKeyframeAnimation.prototype[_is_BaseKeyframeAnimation_default] = true;
    dart.addTypeCaches(BaseKeyframeAnimation);
    dart.setMethodSignature(BaseKeyframeAnimation, () => ({
      __proto__: dart.getMethods(BaseKeyframeAnimation.__proto__),
      setIsDiscrete: dart.fnType(dart.void, []),
      addUpdateListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      setProgress: dart.fnType(dart.void, [core.double]),
      notifyListeners: dart.fnType(dart.void, []),
      getCurrentKeyframe: dart.fnType(keyframe$.Keyframe$(K), []),
      getLinearCurrentKeyframeProgress: dart.fnType(core.double, []),
      getInterpolatedCurrentKeyframeProgress: dart.fnType(core.double, []),
      getStartDelayProgress: dart.fnType(core.double, []),
      getEndProgress: dart.fnType(core.double, []),
      setValueCallback: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      getValueSplitDimension: dart.fnType(A, [dart.nullable(core.Object), core.double, core.double, core.double])
    }));
    dart.setStaticMethodSignature(BaseKeyframeAnimation, () => ['_wrap']);
    dart.setGetterSignature(BaseKeyframeAnimation, () => ({
      __proto__: dart.getGetters(BaseKeyframeAnimation.__proto__),
      value: A,
      progress: core.double
    }));
    dart.setSetterSignature(BaseKeyframeAnimation, () => ({
      __proto__: dart.getSetters(BaseKeyframeAnimation.__proto__),
      progress: core.double
    }));
    dart.setLibraryUri(BaseKeyframeAnimation, I[58]);
    dart.setFieldSignature(BaseKeyframeAnimation, () => ({
      __proto__: dart.getFields(BaseKeyframeAnimation.__proto__),
      listeners: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
      [_isDiscrete]: dart.fieldType(core.bool),
      [_keyframesWrapper]: dart.finalFieldType(base_keyframe_animation._KeyframesWrapper$(K)),
      [_progress]: dart.fieldType(core.double),
      valueCallback: dart.fieldType(dart.nullable(lottie_value_callback.LottieValueCallback$(A))),
      [_cachedGetValue]: dart.fieldType(dart.nullable(A)),
      [_cachedStartDelayProgress]: dart.fieldType(core.double),
      [_cachedEndProgress]: dart.fieldType(core.double)
    }));
    return BaseKeyframeAnimation;
  });
  base_keyframe_animation.BaseKeyframeAnimation = base_keyframe_animation.BaseKeyframeAnimation$();
  dart.addTypeTests(base_keyframe_animation.BaseKeyframeAnimation, _is_BaseKeyframeAnimation_default);
  split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation = class SplitDimensionPathKeyframeAnimation extends base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset) {
    get [_point]() {
      let t45;
      t45 = this[__SplitDimensionPathKeyframeAnimation__point];
      return t45 == null ? dart.throw(new _internal.LateError.fieldNI("_point")) : t45;
    }
    set [_point](library$32package$58lottie$47src$47animation$47keyframe$47split_dimension_path_keyframe_animation$46dart$58$58_point$35param) {
      this[__SplitDimensionPathKeyframeAnimation__point] = library$32package$58lottie$47src$47animation$47keyframe$47split_dimension_path_keyframe_animation$46dart$58$58_point$35param;
    }
    static ['_#new#tearOff'](_xAnimation, _yAnimation) {
      return new split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.new(_xAnimation, _yAnimation);
    }
    setProgress(progress) {
      this[_xAnimation$].setProgress(progress);
      this[_yAnimation$].setProgress(progress);
      this[_point] = new ui.Offset.new(this[_xAnimation$].value, this[_yAnimation$].value);
      for (let i = 0; i < this.listeners[$length]; i = i + 1) {
        this.listeners[$_get](i)();
      }
    }
    get value() {
      return this[_point];
    }
    getValue(keyframe, keyframeProgress) {
      T$.KeyframeOfOffset().as(keyframe);
      return this[_point];
    }
  };
  (split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.new = function(_xAnimation, _yAnimation) {
    this[__SplitDimensionPathKeyframeAnimation__point] = null;
    this[_xAnimation$] = _xAnimation;
    this[_yAnimation$] = _yAnimation;
    split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.__proto__.new.call(this, T$.JSArrayOfKeyframeOfOffset().of([]));
    this.setProgress(this.progress);
  }).prototype = split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.prototype;
  dart.addTypeTests(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation);
  dart.addTypeCaches(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation);
  dart.setMethodSignature(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation, () => ({
    __proto__: dart.getMethods(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.__proto__),
    getValue: dart.fnType(ui.Offset, [dart.nullable(core.Object), core.double])
  }));
  dart.setGetterSignature(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation, () => ({
    __proto__: dart.getGetters(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.__proto__),
    [_point]: ui.Offset
  }));
  dart.setSetterSignature(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation, () => ({
    __proto__: dart.getSetters(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.__proto__),
    [_point]: ui.Offset
  }));
  dart.setLibraryUri(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation, I[59]);
  dart.setFieldSignature(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation, () => ({
    __proto__: dart.getFields(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.__proto__),
    [__SplitDimensionPathKeyframeAnimation__point]: dart.fieldType(dart.nullable(ui.Offset)),
    [_xAnimation$]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)),
    [_yAnimation$]: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))
  }));
  var _animatableXDimension$ = dart.privateName(animatable_split_dimension_path_value, "_animatableXDimension");
  var _animatableYDimension$ = dart.privateName(animatable_split_dimension_path_value, "_animatableYDimension");
  animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue = class AnimatableSplitDimensionPathValue extends core.Object {
    static ['_#new#tearOff'](_animatableXDimension, _animatableYDimension) {
      return new animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue.new(_animatableXDimension, _animatableYDimension);
    }
    get keyframes() {
      dart.throw(new core.UnsupportedError.new("Cannot call getKeyframes on AnimatableSplitDimensionPathValue."));
    }
    get isStatic() {
      return this[_animatableXDimension$].isStatic && this[_animatableYDimension$].isStatic;
    }
    createAnimation() {
      return new split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation.new(this[_animatableXDimension$].createAnimation(), this[_animatableYDimension$].createAnimation());
    }
  };
  (animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue.new = function(_animatableXDimension, _animatableYDimension) {
    this[_animatableXDimension$] = _animatableXDimension;
    this[_animatableYDimension$] = _animatableYDimension;
    ;
  }).prototype = animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue.prototype;
  dart.addTypeTests(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue);
  dart.addTypeCaches(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue);
  animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue[dart.implements] = () => [animatable_value.AnimatableValue$(ui.Offset, ui.Offset)];
  dart.setMethodSignature(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue, () => ({
    __proto__: dart.getMethods(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue.__proto__),
    createAnimation: dart.fnType(split_dimension_path_keyframe_animation.SplitDimensionPathKeyframeAnimation, [])
  }));
  dart.setGetterSignature(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue, () => ({
    __proto__: dart.getGetters(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue.__proto__),
    keyframes: core.List$(keyframe$.Keyframe$(ui.Offset)),
    isStatic: core.bool
  }));
  dart.setLibraryUri(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue, I[60]);
  dart.setFieldSignature(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue, () => ({
    __proto__: dart.getFields(animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue.__proto__),
    [_animatableXDimension$]: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    [_animatableYDimension$]: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue)
  }));
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  animatable_transform_parser.AnimatableTransformParser = class AnimatableTransformParser extends core.Object {
    static ['_#_#tearOff']() {
      return new animatable_transform_parser.AnimatableTransformParser.__();
    }
    static parse(reader, composition) {
      let anchorPoint = null;
      let position = null;
      let scale = null;
      let rotation = null;
      let opacity = null;
      let startOpacity = null;
      let endOpacity = null;
      let skew = null;
      let skewAngle = null;
      let isObject = reader.peek() === json_reader.Token.beginObject;
      if (isObject) {
        reader.beginObject();
      }
      while (reader.hasNext()) {
        let name = reader.selectName(animatable_transform_parser.AnimatableTransformParser._names);
        switch (name) {
          case 0:
            {
              reader.beginObject();
              while (reader.hasNext()) {
                switch (reader.selectName(animatable_transform_parser.AnimatableTransformParser._animatableNames)) {
                  case 0:
                    {
                      anchorPoint = animatable_path_value_parser.AnimatablePathValueParser.parse(reader, composition);
                      break;
                    }
                  default:
                    {
                      reader.skipName();
                      reader.skipValue();
                    }
                }
              }
              reader.endObject();
              break;
            }
          case 1:
            {
              position = animatable_path_value_parser.AnimatablePathValueParser.parseSplitPath(reader, composition);
              break;
            }
          case 2:
            {
              scale = animatable_value_parser.AnimatableValueParser.parseScale(reader, composition);
              break;
            }
          case 3:
          case 4:
            {
              if (name === 3) {
                composition.addWarning("Lottie doesn't support 3D layers.");
              }
              rotation = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              if (rotation.keyframes[$isEmpty]) {
                rotation.keyframes[$add](new (T$.KeyframeOfdouble()).new(composition, {startValue: 0.0, endValue: 0.0, interpolator: null, startFrame: 0.0, endFrame: composition.endFrame}));
              } else if (rotation.keyframes[$first].startValue == null) {
                rotation.keyframes[$first] = new (T$.KeyframeOfdouble()).new(composition, {startValue: 0.0, endValue: 0.0, interpolator: null, startFrame: 0.0, endFrame: composition.endFrame});
              }
              break;
            }
          case 5:
            {
              opacity = animatable_value_parser.AnimatableValueParser.parseInteger(reader, composition);
              break;
            }
          case 6:
            {
              startOpacity = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 7:
            {
              endOpacity = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 8:
            {
              skew = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 9:
            {
              skewAngle = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      if (isObject) {
        reader.endObject();
      }
      if (animatable_transform_parser.AnimatableTransformParser.isAnchorPointIdentity(anchorPoint)) {
        anchorPoint = null;
      }
      if (animatable_transform_parser.AnimatableTransformParser.isPositionIdentity(position)) {
        position = null;
      }
      if (animatable_transform_parser.AnimatableTransformParser.isRotationIdentity(rotation)) {
        rotation = null;
      }
      if (animatable_transform_parser.AnimatableTransformParser.isScaleIdentity(scale)) {
        scale = null;
      }
      if (animatable_transform_parser.AnimatableTransformParser.isSkewIdentity(skew)) {
        skew = null;
      }
      if (animatable_transform_parser.AnimatableTransformParser.isSkewAngleIdentity(skewAngle)) {
        skewAngle = null;
      }
      return new animatable_transform.AnimatableTransform.new({anchorPoint: anchorPoint, position: position, scale: scale, rotation: rotation, opacity: opacity, startOpacity: startOpacity, endOpacity: endOpacity, skew: skew, skewAngle: skewAngle});
    }
    static isAnchorPointIdentity(anchorPoint) {
      return anchorPoint == null || anchorPoint.isStatic && dart.equals(anchorPoint.keyframes[$first].startValue, ui.Offset.zero);
    }
    static isPositionIdentity(position) {
      return position == null || !animatable_split_dimension_path_value.AnimatableSplitDimensionPathValue.is(position) && position.isStatic && dart.equals(position.keyframes[$first].startValue, ui.Offset.zero);
    }
    static isRotationIdentity(rotation) {
      return rotation == null || rotation.isStatic && rotation.keyframes[$first].startValue === 0.0;
    }
    static isScaleIdentity(scale) {
      return scale == null || scale.isStatic && dart.equals(scale.keyframes[$first].startValue, C[39] || CT.C39);
    }
    static isSkewIdentity(skew) {
      return skew == null || skew.isStatic && skew.keyframes[$first].startValue === 0.0;
    }
    static isSkewAngleIdentity(skewAngle) {
      return skewAngle == null || skewAngle.isStatic && skewAngle.keyframes[$first].startValue === 0.0;
    }
  };
  (animatable_transform_parser.AnimatableTransformParser.__ = function() {
    ;
  }).prototype = animatable_transform_parser.AnimatableTransformParser.prototype;
  dart.addTypeTests(animatable_transform_parser.AnimatableTransformParser);
  dart.addTypeCaches(animatable_transform_parser.AnimatableTransformParser);
  dart.setStaticMethodSignature(animatable_transform_parser.AnimatableTransformParser, () => ['parse', 'isAnchorPointIdentity', 'isPositionIdentity', 'isRotationIdentity', 'isScaleIdentity', 'isSkewIdentity', 'isSkewAngleIdentity']);
  dart.setLibraryUri(animatable_transform_parser.AnimatableTransformParser, I[61]);
  dart.setStaticFieldSignature(animatable_transform_parser.AnimatableTransformParser, () => ['_names', '_animatableNames']);
  dart.defineLazy(animatable_transform_parser.AnimatableTransformParser, {
    /*animatable_transform_parser.AnimatableTransformParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["a", "p", "s", "rz", "r", "o", "so", "eo", "sk", "sa"]));
    },
    /*animatable_transform_parser.AnimatableTransformParser._animatableNames*/get _animatableNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["k"]));
    }
  }, false);
  keyframe_parser.KeyframeParser = class KeyframeParser extends core.Object {
    static parse(T, reader, composition, scale, valueParser, opts) {
      let animated = opts && 'animated' in opts ? opts.animated : null;
      let multiDimensional = opts && 'multiDimensional' in opts ? opts.multiDimensional : false;
      if (animated && multiDimensional) {
        return keyframe_parser.KeyframeParser._parseMultiDimensionalKeyframe(T, composition, reader, scale, valueParser);
      } else if (animated) {
        return keyframe_parser.KeyframeParser._parseKeyframe(T, composition, reader, scale, valueParser);
      } else {
        return keyframe_parser.KeyframeParser._parseStaticValue(T, reader, scale, valueParser);
      }
    }
    static _parseKeyframe(T, composition, reader, scale, valueParser) {
      let cp1 = null;
      let cp2 = null;
      let startFrame = 0.0;
      let startValue = null;
      let endValue = null;
      let hold = false;
      let interpolator = null;
      let pathCp1 = null;
      let pathCp2 = null;
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(keyframe_parser.KeyframeParser._names)) {
          case 0:
            {
              startFrame = reader.nextDouble();
              break;
            }
          case 1:
            {
              startValue = valueParser(reader, {scale: scale});
              break;
            }
          case 2:
            {
              endValue = valueParser(reader, {scale: scale});
              break;
            }
          case 3:
            {
              cp1 = json_utils.JsonUtils.jsonToPoint(reader, 1.0);
              break;
            }
          case 4:
            {
              cp2 = json_utils.JsonUtils.jsonToPoint(reader, 1.0);
              break;
            }
          case 5:
            {
              hold = reader.nextInt() === 1;
              break;
            }
          case 6:
            {
              pathCp1 = json_utils.JsonUtils.jsonToPoint(reader, scale);
              break;
            }
          case 7:
            {
              pathCp2 = json_utils.JsonUtils.jsonToPoint(reader, scale);
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      if (hold) {
        endValue = startValue;
        interpolator = keyframe_parser.KeyframeParser._linearInterpolator;
      } else if (cp1 != null && cp2 != null) {
        interpolator = keyframe_parser.KeyframeParser._interpolatorFor(cp1, cp2);
      } else {
        interpolator = keyframe_parser.KeyframeParser._linearInterpolator;
      }
      let keyframe = new (keyframe$.Keyframe$(T)).new(composition, {startValue: startValue, endValue: endValue, interpolator: interpolator, startFrame: startFrame, endFrame: null});
      keyframe.pathCp1 = pathCp1;
      keyframe.pathCp2 = pathCp2;
      return keyframe;
    }
    static _parseMultiDimensionalKeyframe(T, composition, reader, scale, valueParser) {
      let cp1 = null;
      let cp2 = null;
      let xCp1 = null;
      let xCp2 = null;
      let yCp1 = null;
      let yCp2 = null;
      let startFrame = 0.0;
      let startValue = null;
      let endValue = null;
      let hold = false;
      let interpolator = null;
      let xInterpolator = null;
      let yInterpolator = null;
      let pathCp1 = null;
      let pathCp2 = null;
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(keyframe_parser.KeyframeParser._names)) {
          case 0:
            {
              startFrame = reader.nextDouble();
              break;
            }
          case 1:
            {
              startValue = valueParser(reader, {scale: scale});
              break;
            }
          case 2:
            {
              endValue = valueParser(reader, {scale: scale});
              break;
            }
          case 3:
            {
              if (reader.peek() === json_reader.Token.beginObject) {
                reader.beginObject();
                let xCp1x = 0.0;
                let xCp1y = 0.0;
                let yCp1x = 0.0;
                let yCp1y = 0.0;
                while (reader.hasNext()) {
                  switch (reader.selectName(keyframe_parser.KeyframeParser._interpolatorNames)) {
                    case 0:
                      {
                        if (reader.peek() === json_reader.Token.number) {
                          xCp1x = reader.nextDouble();
                          yCp1x = xCp1x;
                        } else {
                          reader.beginArray();
                          xCp1x = reader.nextDouble();
                          if (reader.peek() === json_reader.Token.number) {
                            yCp1x = reader.nextDouble();
                          } else {
                            yCp1x = xCp1x;
                          }
                          reader.endArray();
                        }
                        break;
                      }
                    case 1:
                      {
                        if (reader.peek() === json_reader.Token.number) {
                          xCp1y = reader.nextDouble();
                          yCp1y = xCp1y;
                        } else {
                          reader.beginArray();
                          xCp1y = reader.nextDouble();
                          if (reader.peek() === json_reader.Token.number) {
                            yCp1y = reader.nextDouble();
                          } else {
                            yCp1y = xCp1y;
                          }
                          reader.endArray();
                        }
                        break;
                      }
                    default:
                      {
                        reader.skipValue();
                      }
                  }
                }
                xCp1 = new ui.Offset.new(xCp1x, xCp1y);
                yCp1 = new ui.Offset.new(yCp1x, yCp1y);
                reader.endObject();
              } else {
                cp1 = json_utils.JsonUtils.jsonToPoint(reader, scale);
              }
              break;
            }
          case 4:
            {
              if (reader.peek() === json_reader.Token.beginObject) {
                reader.beginObject();
                let xCp2x = 0.0;
                let xCp2y = 0.0;
                let yCp2x = 0.0;
                let yCp2y = 0.0;
                while (reader.hasNext()) {
                  switch (reader.selectName(keyframe_parser.KeyframeParser._interpolatorNames)) {
                    case 0:
                      {
                        if (reader.peek() === json_reader.Token.number) {
                          xCp2x = reader.nextDouble();
                          yCp2x = xCp2x;
                        } else {
                          reader.beginArray();
                          xCp2x = reader.nextDouble();
                          if (reader.peek() === json_reader.Token.number) {
                            yCp2x = reader.nextDouble();
                          } else {
                            yCp2x = xCp2x;
                          }
                          reader.endArray();
                        }
                        break;
                      }
                    case 1:
                      {
                        if (reader.peek() === json_reader.Token.number) {
                          xCp2y = reader.nextDouble();
                          yCp2y = xCp2y;
                        } else {
                          reader.beginArray();
                          xCp2y = reader.nextDouble();
                          if (reader.peek() === json_reader.Token.number) {
                            yCp2y = reader.nextDouble();
                          } else {
                            yCp2y = xCp2y;
                          }
                          reader.endArray();
                        }
                        break;
                      }
                    default:
                      {
                        reader.skipValue();
                      }
                  }
                }
                xCp2 = new ui.Offset.new(xCp2x, xCp2y);
                yCp2 = new ui.Offset.new(yCp2x, yCp2y);
                reader.endObject();
              } else {
                cp2 = json_utils.JsonUtils.jsonToPoint(reader, scale);
              }
              break;
            }
          case 5:
            {
              hold = reader.nextInt() === 1;
              break;
            }
          case 6:
            {
              pathCp1 = json_utils.JsonUtils.jsonToPoint(reader, scale);
              break;
            }
          case 7:
            {
              pathCp2 = json_utils.JsonUtils.jsonToPoint(reader, scale);
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      if (hold) {
        endValue = startValue;
        interpolator = keyframe_parser.KeyframeParser._linearInterpolator;
      } else if (cp1 != null && cp2 != null) {
        interpolator = keyframe_parser.KeyframeParser._interpolatorFor(cp1, cp2);
      } else if (xCp1 != null && yCp1 != null && xCp2 != null && yCp2 != null) {
        xInterpolator = keyframe_parser.KeyframeParser._interpolatorFor(xCp1, xCp2);
        yInterpolator = keyframe_parser.KeyframeParser._interpolatorFor(yCp1, yCp2);
      } else {
        interpolator = keyframe_parser.KeyframeParser._linearInterpolator;
      }
      let keyframe = null;
      if (xInterpolator != null && yInterpolator != null) {
        keyframe = new (keyframe$.Keyframe$(T)).new(composition, {startValue: startValue, endValue: endValue, xInterpolator: xInterpolator, yInterpolator: yInterpolator, startFrame: startFrame});
      } else {
        keyframe = new (keyframe$.Keyframe$(T)).new(composition, {startValue: startValue, endValue: endValue, interpolator: interpolator, startFrame: startFrame});
      }
      keyframe.pathCp1 = pathCp1;
      keyframe.pathCp2 = pathCp2;
      return keyframe;
    }
    static _interpolatorFor(cp1, cp2) {
      let interpolator = null;
      cp1 = new ui.Offset.new(cp1.dx[$clamp](-1.0, 1.0), cp1.dy[$clamp](-100, 100));
      cp2 = new ui.Offset.new(cp2.dx[$clamp](-1.0, 1.0), cp2.dy[$clamp](-100, 100));
      let hash = utils$.Utils.hashFor(cp1.dx, cp1.dy, cp2.dx, cp2.dy);
      interpolator = keyframe_parser.KeyframeParser._pathInterpolatorCache[$putIfAbsent](hash, dart.fn(() => {
        try {
          return path_interpolator.PathInterpolator.cubic(cp1.dx, cp1.dy, cp2.dx, cp2.dy);
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (core.Object.is(e)) {
            print.debugPrint("DEBUG: Path interpolator error " + dart.str(e));
            if (dart.str(e)[$contains]("The Path cannot loop back on itself.")) {
              return path_interpolator.PathInterpolator.cubic(math.min(core.double, cp1.dx, 1.0), cp1.dy, math.max(core.double, cp2.dx, 0.0), cp2.dy);
            } else {
              return curves.Curves.linear;
            }
          } else
            throw e$;
        }
      }, T$.VoidToCurve()));
      return interpolator;
    }
    static _parseStaticValue(T, reader, scale, valueParser) {
      let value = valueParser(reader, {scale: scale});
      return new (keyframe$.Keyframe$(T)).nonAnimated(value);
    }
    static ['_#new#tearOff']() {
      return new keyframe_parser.KeyframeParser.new();
    }
  };
  (keyframe_parser.KeyframeParser.new = function() {
    ;
  }).prototype = keyframe_parser.KeyframeParser.prototype;
  dart.addTypeTests(keyframe_parser.KeyframeParser);
  dart.addTypeCaches(keyframe_parser.KeyframeParser);
  dart.setStaticMethodSignature(keyframe_parser.KeyframeParser, () => ['parse', '_parseKeyframe', '_parseMultiDimensionalKeyframe', '_interpolatorFor', '_parseStaticValue']);
  dart.setLibraryUri(keyframe_parser.KeyframeParser, I[62]);
  dart.setStaticFieldSignature(keyframe_parser.KeyframeParser, () => ['_maxCpValue', '_linearInterpolator', '_pathInterpolatorCache', '_names', '_interpolatorNames']);
  dart.defineLazy(keyframe_parser.KeyframeParser, {
    /*keyframe_parser.KeyframeParser._maxCpValue*/get _maxCpValue() {
      return 100;
    },
    /*keyframe_parser.KeyframeParser._linearInterpolator*/get _linearInterpolator() {
      return C[40] || CT.C40;
    },
    /*keyframe_parser.KeyframeParser._pathInterpolatorCache*/get _pathInterpolatorCache() {
      return new (T$.IdentityMapOfint$Curve()).new();
    },
    /*keyframe_parser.KeyframeParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["t", "s", "e", "o", "i", "h", "to", "ti"]));
    },
    /*keyframe_parser.KeyframeParser._interpolatorNames*/get _interpolatorNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["x", "y"]));
    }
  }, false);
  keyframes_parser.KeyframesParser = class KeyframesParser extends core.Object {
    static ['_#_#tearOff']() {
      return new keyframes_parser.KeyframesParser.__();
    }
    static parse(T, reader, composition, scale, valueParser, opts) {
      let multiDimensional = opts && 'multiDimensional' in opts ? opts.multiDimensional : false;
      let keyframes = _interceptors.JSArray$(keyframe$.Keyframe$(T)).of([]);
      if (reader.peek() === json_reader.Token.string) {
        composition.addWarning("Lottie doesn't support expressions.");
        return keyframes;
      }
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(keyframes_parser.KeyframesParser._names)) {
          case 0:
            {
              if (reader.peek() === json_reader.Token.beginArray) {
                reader.beginArray();
                if (reader.peek() === json_reader.Token.number) {
                  keyframes[$add](keyframe_parser.KeyframeParser.parse(T, reader, composition, scale, valueParser, {animated: false, multiDimensional: multiDimensional}));
                } else {
                  while (reader.hasNext()) {
                    keyframes[$add](keyframe_parser.KeyframeParser.parse(T, reader, composition, scale, valueParser, {animated: true, multiDimensional: multiDimensional}));
                  }
                }
                reader.endArray();
              } else {
                keyframes[$add](keyframe_parser.KeyframeParser.parse(T, reader, composition, scale, valueParser, {animated: false, multiDimensional: multiDimensional}));
              }
              break;
            }
          default:
            {
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      keyframes_parser.KeyframesParser.setEndFrames(T, keyframes);
      return keyframes;
    }
    static setEndFrames(T, keyframes) {
      let size = keyframes[$length];
      for (let i = 0; i < size - 1; i = i + 1) {
        let keyframe = keyframes[$_get](i);
        let nextKeyframe = keyframes[$_get](i + 1);
        keyframe.endFrame = nextKeyframe.startFrame;
        if (keyframe.endValue == null && nextKeyframe.startValue != null) {
          keyframe.endValue = nextKeyframe.startValue;
          if (path_keyframe.PathKeyframe.is(keyframe)) {
            path_keyframe.PathKeyframe.as(keyframe).createPath();
          }
        }
      }
      let lastKeyframe = keyframes[$_get](size - 1);
      if ((lastKeyframe.startValue == null || lastKeyframe.endValue == null) && keyframes[$length] > 1) {
        keyframes[$remove](lastKeyframe);
      }
    }
  };
  (keyframes_parser.KeyframesParser.__ = function() {
    ;
  }).prototype = keyframes_parser.KeyframesParser.prototype;
  dart.addTypeTests(keyframes_parser.KeyframesParser);
  dart.addTypeCaches(keyframes_parser.KeyframesParser);
  dart.setStaticMethodSignature(keyframes_parser.KeyframesParser, () => ['parse', 'setEndFrames']);
  dart.setLibraryUri(keyframes_parser.KeyframesParser, I[63]);
  dart.setStaticFieldSignature(keyframes_parser.KeyframesParser, () => ['_names']);
  dart.defineLazy(keyframes_parser.KeyframesParser, {
    /*keyframes_parser.KeyframesParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["k"]));
    }
  }, false);
  var keyframes$ = dart.privateName(base_animatable_value, "BaseAnimatableValue.keyframes");
  const _is_BaseAnimatableValue_default = Symbol('_is_BaseAnimatableValue_default');
  base_animatable_value.BaseAnimatableValue$ = dart.generic((V, O) => {
    var __t$KeyframeOfV = () => (__t$KeyframeOfV = dart.constFn(keyframe$.Keyframe$(V)))();
    var __t$JSArrayOfKeyframeOfV = () => (__t$JSArrayOfKeyframeOfV = dart.constFn(_interceptors.JSArray$(__t$KeyframeOfV())))();
    class BaseAnimatableValue extends core.Object {
      get keyframes() {
        return this[keyframes$];
      }
      set keyframes(value) {
        super.keyframes = value;
      }
      get isStatic() {
        return this.keyframes[$isEmpty] || this.keyframes[$length] === 1 && this.keyframes[$first].isStatic;
      }
      toString() {
        let t46;
        let sb = new core.StringBuffer.new();
        if (this.keyframes[$isNotEmpty]) {
          t46 = sb;
          (() => {
            t46.write("values=");
            t46.write(dart.str(this.keyframes));
            return t46;
          })();
        }
        return sb.toString();
      }
    }
    (BaseAnimatableValue.fromValue = function(value) {
      BaseAnimatableValue.fromKeyframes.call(this, __t$JSArrayOfKeyframeOfV().of([new (__t$KeyframeOfV()).nonAnimated(value)]));
    }).prototype = BaseAnimatableValue.prototype;
    (BaseAnimatableValue.fromKeyframes = function(keyframes) {
      this[keyframes$] = keyframes;
      ;
    }).prototype = BaseAnimatableValue.prototype;
    dart.addTypeTests(BaseAnimatableValue);
    BaseAnimatableValue.prototype[_is_BaseAnimatableValue_default] = true;
    dart.addTypeCaches(BaseAnimatableValue);
    BaseAnimatableValue[dart.implements] = () => [animatable_value.AnimatableValue$(V, O)];
    dart.setGetterSignature(BaseAnimatableValue, () => ({
      __proto__: dart.getGetters(BaseAnimatableValue.__proto__),
      isStatic: core.bool
    }));
    dart.setLibraryUri(BaseAnimatableValue, I[64]);
    dart.setFieldSignature(BaseAnimatableValue, () => ({
      __proto__: dart.getFields(BaseAnimatableValue.__proto__),
      keyframes: dart.finalFieldType(core.List$(keyframe$.Keyframe$(V)))
    }));
    dart.defineExtensionMethods(BaseAnimatableValue, ['toString']);
    return BaseAnimatableValue;
  });
  base_animatable_value.BaseAnimatableValue = base_animatable_value.BaseAnimatableValue$();
  dart.addTypeTests(base_animatable_value.BaseAnimatableValue, _is_BaseAnimatableValue_default);
  animatable_point_value.AnimatablePointValue = class AnimatablePointValue extends base_animatable_value.BaseAnimatableValue$(ui.Offset, ui.Offset) {
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_point_value.AnimatablePointValue.fromKeyframes(keyframes);
    }
    createAnimation() {
      return new point_keyframe_animation.PointKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_point_value.AnimatablePointValue.fromKeyframes = function(keyframes) {
    animatable_point_value.AnimatablePointValue.__proto__.fromKeyframes.call(this, keyframes);
    ;
  }).prototype = animatable_point_value.AnimatablePointValue.prototype;
  dart.addTypeTests(animatable_point_value.AnimatablePointValue);
  dart.addTypeCaches(animatable_point_value.AnimatablePointValue);
  dart.setMethodSignature(animatable_point_value.AnimatablePointValue, () => ({
    __proto__: dart.getMethods(animatable_point_value.AnimatablePointValue.__proto__),
    createAnimation: dart.fnType(point_keyframe_animation.PointKeyframeAnimation, [])
  }));
  dart.setLibraryUri(animatable_point_value.AnimatablePointValue, I[65]);
  var __GradientColorKeyframeAnimation__gradientColor = dart.privateName(gradient_color_keyframe_animation, "_#GradientColorKeyframeAnimation#_gradientColor");
  var _gradientColor = dart.privateName(gradient_color_keyframe_animation, "_gradientColor");
  const _is_KeyframeAnimation_default = Symbol('_is_KeyframeAnimation_default');
  keyframe_animation.KeyframeAnimation$ = dart.generic(T => {
    class KeyframeAnimation extends base_keyframe_animation.BaseKeyframeAnimation$(T, T) {}
    (KeyframeAnimation.new = function(keyframes) {
      KeyframeAnimation.__proto__.new.call(this, keyframes);
      ;
    }).prototype = KeyframeAnimation.prototype;
    dart.addTypeTests(KeyframeAnimation);
    KeyframeAnimation.prototype[_is_KeyframeAnimation_default] = true;
    dart.addTypeCaches(KeyframeAnimation);
    dart.setLibraryUri(KeyframeAnimation, I[66]);
    return KeyframeAnimation;
  });
  keyframe_animation.KeyframeAnimation = keyframe_animation.KeyframeAnimation$();
  dart.addTypeTests(keyframe_animation.KeyframeAnimation, _is_KeyframeAnimation_default);
  gradient_color_keyframe_animation.GradientColorKeyframeAnimation = class GradientColorKeyframeAnimation extends keyframe_animation.KeyframeAnimation$(gradient_color.GradientColor) {
    get [_gradientColor]() {
      let t46;
      t46 = this[__GradientColorKeyframeAnimation__gradientColor];
      return t46 == null ? dart.throw(new _internal.LateError.fieldNI("_gradientColor")) : t46;
    }
    set [_gradientColor](library$32package$58lottie$47src$47animation$47keyframe$47gradient_color_keyframe_animation$46dart$58$58_gradientColor$35param) {
      this[__GradientColorKeyframeAnimation__gradientColor] = library$32package$58lottie$47src$47animation$47keyframe$47gradient_color_keyframe_animation$46dart$58$58_gradientColor$35param;
    }
    static ['_#new#tearOff'](keyframes) {
      return new gradient_color_keyframe_animation.GradientColorKeyframeAnimation.new(keyframes);
    }
    getValue(keyframe, keyframeProgress) {
      T$.KeyframeOfGradientColor().as(keyframe);
      this[_gradientColor].lerp(dart.nullCheck(keyframe.startValue), dart.nullCheck(keyframe.endValue), keyframeProgress);
      return this[_gradientColor];
    }
  };
  (gradient_color_keyframe_animation.GradientColorKeyframeAnimation.new = function(keyframes) {
    this[__GradientColorKeyframeAnimation__gradientColor] = null;
    gradient_color_keyframe_animation.GradientColorKeyframeAnimation.__proto__.new.call(this, keyframes);
    let startValue = keyframes[$first].startValue;
    let size = startValue == null ? 0 : startValue.size;
    this[_gradientColor] = new gradient_color.GradientColor.new(T$.ListOfdouble().filled(size, 0.0), T$.ListOfColor().filled(size, C[36] || CT.C36));
  }).prototype = gradient_color_keyframe_animation.GradientColorKeyframeAnimation.prototype;
  dart.addTypeTests(gradient_color_keyframe_animation.GradientColorKeyframeAnimation);
  dart.addTypeCaches(gradient_color_keyframe_animation.GradientColorKeyframeAnimation);
  dart.setMethodSignature(gradient_color_keyframe_animation.GradientColorKeyframeAnimation, () => ({
    __proto__: dart.getMethods(gradient_color_keyframe_animation.GradientColorKeyframeAnimation.__proto__),
    getValue: dart.fnType(gradient_color.GradientColor, [dart.nullable(core.Object), core.double])
  }));
  dart.setGetterSignature(gradient_color_keyframe_animation.GradientColorKeyframeAnimation, () => ({
    __proto__: dart.getGetters(gradient_color_keyframe_animation.GradientColorKeyframeAnimation.__proto__),
    [_gradientColor]: gradient_color.GradientColor
  }));
  dart.setSetterSignature(gradient_color_keyframe_animation.GradientColorKeyframeAnimation, () => ({
    __proto__: dart.getSetters(gradient_color_keyframe_animation.GradientColorKeyframeAnimation.__proto__),
    [_gradientColor]: gradient_color.GradientColor
  }));
  dart.setLibraryUri(gradient_color_keyframe_animation.GradientColorKeyframeAnimation, I[67]);
  dart.setFieldSignature(gradient_color_keyframe_animation.GradientColorKeyframeAnimation, () => ({
    __proto__: dart.getFields(gradient_color_keyframe_animation.GradientColorKeyframeAnimation.__proto__),
    [__GradientColorKeyframeAnimation__gradientColor]: dart.fieldType(dart.nullable(gradient_color.GradientColor))
  }));
  animatable_gradient_color_value.AnimatableGradientColorValue = class AnimatableGradientColorValue extends base_animatable_value.BaseAnimatableValue$(gradient_color.GradientColor, gradient_color.GradientColor) {
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_gradient_color_value.AnimatableGradientColorValue.fromKeyframes(keyframes);
    }
    createAnimation() {
      return new gradient_color_keyframe_animation.GradientColorKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_gradient_color_value.AnimatableGradientColorValue.fromKeyframes = function(keyframes) {
    animatable_gradient_color_value.AnimatableGradientColorValue.__proto__.fromKeyframes.call(this, keyframes);
    ;
  }).prototype = animatable_gradient_color_value.AnimatableGradientColorValue.prototype;
  dart.addTypeTests(animatable_gradient_color_value.AnimatableGradientColorValue);
  dart.addTypeCaches(animatable_gradient_color_value.AnimatableGradientColorValue);
  dart.setMethodSignature(animatable_gradient_color_value.AnimatableGradientColorValue, () => ({
    __proto__: dart.getMethods(animatable_gradient_color_value.AnimatableGradientColorValue.__proto__),
    createAnimation: dart.fnType(gradient_color_keyframe_animation.GradientColorKeyframeAnimation, [])
  }));
  dart.setLibraryUri(animatable_gradient_color_value.AnimatableGradientColorValue, I[68]);
  animatable_value_parser.AnimatableValueParser = class AnimatableValueParser extends core.Object {
    static ['_#_#tearOff']() {
      return new animatable_value_parser.AnimatableValueParser.__();
    }
    static parseFloat(reader, composition, opts) {
      let isDp = opts && 'isDp' in opts ? opts.isDp : null;
      isDp == null ? isDp = true : null;
      return new animatable_double_value.AnimatableDoubleValue.fromKeyframes(animatable_value_parser.AnimatableValueParser.parse(core.double, reader, composition, C[41] || CT.C41, {scale: dart.test(isDp) ? ui.window.devicePixelRatio : 1.0}));
    }
    static parseInteger(reader, composition) {
      return new animatable_integer_value.AnimatableIntegerValue.fromKeyframes(animatable_value_parser.AnimatableValueParser.parse(core.int, reader, composition, C[42] || CT.C42));
    }
    static parsePoint(reader, composition) {
      return new animatable_point_value.AnimatablePointValue.fromKeyframes(keyframes_parser.KeyframesParser.parse(ui.Offset, reader, composition, ui.window.devicePixelRatio, C[43] || CT.C43, {multiDimensional: true}));
    }
    static parseScale(reader, composition) {
      return new animatable_scale_value.AnimatableScaleValue.fromKeyframes(animatable_value_parser.AnimatableValueParser.parse(ui.Offset, reader, composition, C[44] || CT.C44));
    }
    static parseShapeData(reader, composition) {
      return new animatable_shape_value.AnimatableShapeValue.fromKeyframes(animatable_value_parser.AnimatableValueParser.parse(shape_data.ShapeData, reader, composition, C[45] || CT.C45, {scale: ui.window.devicePixelRatio}));
    }
    static parseDocumentData(reader, composition) {
      return new animatable_text_frame.AnimatableTextFrame.fromKeyframes(animatable_value_parser.AnimatableValueParser.parse(document_data.DocumentData, reader, composition, C[46] || CT.C46));
    }
    static parseColor(reader, composition) {
      return new animatable_color_value.AnimatableColorValue.fromKeyframes(animatable_value_parser.AnimatableValueParser.parse(ui.Color, reader, composition, C[47] || CT.C47));
    }
    static parseGradientColor(reader, composition, points) {
      return new animatable_gradient_color_value.AnimatableGradientColorValue.fromKeyframes(animatable_value_parser.AnimatableValueParser.parse(gradient_color.GradientColor, reader, composition, dart.bind(new gradient_color_parser.GradientColorParser.new(points), 'parse')));
    }
    static parse(T, reader, composition, valueParser, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : null;
      scale == null ? scale = 1.0 : null;
      return keyframes_parser.KeyframesParser.parse(T, reader, composition, scale, valueParser);
    }
  };
  (animatable_value_parser.AnimatableValueParser.__ = function() {
    ;
  }).prototype = animatable_value_parser.AnimatableValueParser.prototype;
  dart.addTypeTests(animatable_value_parser.AnimatableValueParser);
  dart.addTypeCaches(animatable_value_parser.AnimatableValueParser);
  dart.setStaticMethodSignature(animatable_value_parser.AnimatableValueParser, () => ['parseFloat', 'parseInteger', 'parsePoint', 'parseScale', 'parseShapeData', 'parseDocumentData', 'parseColor', 'parseGradientColor', 'parse']);
  dart.setLibraryUri(animatable_value_parser.AnimatableValueParser, I[69]);
  animatable_text_properties_parser.AnimatableTextPropertiesParser = class AnimatableTextPropertiesParser extends core.Object {
    static ['_#new#tearOff']() {
      return new animatable_text_properties_parser.AnimatableTextPropertiesParser.new();
    }
    static parse(reader, composition) {
      let anim = null;
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(animatable_text_properties_parser.AnimatableTextPropertiesParser._propertiesNames)) {
          case 0:
            {
              anim = animatable_text_properties_parser.AnimatableTextPropertiesParser._parseAnimatableTextProperties(reader, composition);
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      if (anim == null) {
        return new animatable_text_properties.AnimatableTextProperties.new();
      }
      return anim;
    }
    static _parseAnimatableTextProperties(reader, composition) {
      let color = null;
      let stroke = null;
      let strokeWidth = null;
      let tracking = null;
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(animatable_text_properties_parser.AnimatableTextPropertiesParser._animatablePropertiesNames)) {
          case 0:
            {
              color = animatable_value_parser.AnimatableValueParser.parseColor(reader, composition);
              break;
            }
          case 1:
            {
              stroke = animatable_value_parser.AnimatableValueParser.parseColor(reader, composition);
              break;
            }
          case 2:
            {
              strokeWidth = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
              break;
            }
          case 3:
            {
              tracking = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition);
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      return new animatable_text_properties.AnimatableTextProperties.new({color: color, stroke: stroke, strokeWidth: strokeWidth, tracking: tracking});
    }
  };
  (animatable_text_properties_parser.AnimatableTextPropertiesParser.new = function() {
    ;
  }).prototype = animatable_text_properties_parser.AnimatableTextPropertiesParser.prototype;
  dart.addTypeTests(animatable_text_properties_parser.AnimatableTextPropertiesParser);
  dart.addTypeCaches(animatable_text_properties_parser.AnimatableTextPropertiesParser);
  dart.setStaticMethodSignature(animatable_text_properties_parser.AnimatableTextPropertiesParser, () => ['parse', '_parseAnimatableTextProperties']);
  dart.setLibraryUri(animatable_text_properties_parser.AnimatableTextPropertiesParser, I[70]);
  dart.setStaticFieldSignature(animatable_text_properties_parser.AnimatableTextPropertiesParser, () => ['_propertiesNames', '_animatablePropertiesNames']);
  dart.defineLazy(animatable_text_properties_parser.AnimatableTextPropertiesParser, {
    /*animatable_text_properties_parser.AnimatableTextPropertiesParser._propertiesNames*/get _propertiesNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["a"]));
    },
    /*animatable_text_properties_parser.AnimatableTextPropertiesParser._animatablePropertiesNames*/get _animatablePropertiesNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["fc", "sc", "sw", "t"]));
    }
  }, false);
  layer_parser.LayerParser = class LayerParser extends core.Object {
    static ['_#_#tearOff']() {
      return new layer_parser.LayerParser.__();
    }
    static parse(composition) {
      let bounds = composition.bounds;
      return new layer$.Layer.new({shapes: T$.JSArrayOfContentModel().of([]), composition: composition, name: "__container", id: -1, layerType: layer$.LayerType.preComp, parentId: -1, refId: null, masks: T$.JSArrayOfMask().of([]), transform: new animatable_transform.AnimatableTransform.new(), solidWidth: 0, solidHeight: 0, solidColor: C[36] || CT.C36, timeStretch: 0.0, startFrame: 0.0, preCompWidth: bounds[$width], preCompHeight: bounds[$height], text: null, textProperties: null, inOutKeyframes: T$.JSArrayOfKeyframeOfdouble().of([]), matteType: layer$.MatteType.none, timeRemapping: null, isHidden: false});
    }
    static parseJson(reader, composition) {
      let layerName = "UNSET";
      let layerType = layer$.LayerType.unknown;
      let refId = null;
      let layerId = 0;
      let solidWidth = 0;
      let solidHeight = 0;
      let solidColor = C[36] || CT.C36;
      let preCompWidth = 0;
      let preCompHeight = 0;
      let parentId = -1;
      let timeStretch = 1.0;
      let startFrame = 0.0;
      let inFrame = 0.0;
      let outFrame = 0.0;
      let cl = null;
      let hidden = false;
      let blurEffect = null;
      let dropShadowEffect = null;
      let matteType = layer$.MatteType.none;
      let transform = null;
      let text = null;
      let textProperties = null;
      let timeRemapping = null;
      let masks = T$.JSArrayOfMask().of([]);
      let shapes = T$.JSArrayOfContentModel().of([]);
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(layer_parser.LayerParser._names)) {
          case 0:
            {
              layerName = reader.nextString();
              break;
            }
          case 1:
            {
              layerId = reader.nextInt();
              break;
            }
          case 2:
            {
              refId = reader.nextString();
              break;
            }
          case 3:
            {
              let layerTypeInt = reader.nextInt();
              if (layerTypeInt < layer$.LayerType.unknown.index) {
                layerType = layer$.LayerType.values[$_get](layerTypeInt);
              } else {
                layerType = layer$.LayerType.unknown;
              }
              break;
            }
          case 4:
            {
              parentId = reader.nextInt();
              break;
            }
          case 5:
            {
              solidWidth = (reader.nextInt() * ui.window.devicePixelRatio)[$round]();
              break;
            }
          case 6:
            {
              solidHeight = (reader.nextInt() * ui.window.devicePixelRatio)[$round]();
              break;
            }
          case 7:
            {
              solidColor = misc.MiscUtils.parseColor(reader.nextString(), {warningCallback: dart.bind(composition, 'addWarning')});
              break;
            }
          case 8:
            {
              transform = animatable_transform_parser.AnimatableTransformParser.parse(reader, composition);
              break;
            }
          case 9:
            {
              let matteTypeIndex = reader.nextInt();
              if (matteTypeIndex >= layer$.MatteType.values[$length]) {
                composition.addWarning("Unsupported matte type: " + dart.str(matteTypeIndex));
                break;
              }
              matteType = layer$.MatteType.values[$_get](matteTypeIndex);
              if (matteType === layer$.MatteType.luma) {
                composition.addWarning("Unsupported matte type: Luma");
              } else if (matteType === layer$.MatteType.lumaInverted) {
                composition.addWarning("Unsupported matte type: Luma Inverted");
              }
              composition.incrementMatteOrMaskCount(1);
              break;
            }
          case 10:
            {
              reader.beginArray();
              while (reader.hasNext()) {
                masks[$add](mask_parser.MaskParser.parse(reader, composition));
              }
              composition.incrementMatteOrMaskCount(masks[$length]);
              reader.endArray();
              break;
            }
          case 11:
            {
              reader.beginArray();
              while (reader.hasNext()) {
                let shape = content_model_parser.ContentModelParser.parse(reader, composition);
                if (shape != null) {
                  shapes[$add](shape);
                }
              }
              reader.endArray();
              break;
            }
          case 12:
            {
              reader.beginObject();
              while (reader.hasNext()) {
                switch (reader.selectName(layer_parser.LayerParser._textNames)) {
                  case 0:
                    {
                      text = animatable_value_parser.AnimatableValueParser.parseDocumentData(reader, composition);
                      break;
                    }
                  case 1:
                    {
                      reader.beginArray();
                      if (reader.hasNext()) {
                        textProperties = animatable_text_properties_parser.AnimatableTextPropertiesParser.parse(reader, composition);
                      }
                      while (reader.hasNext()) {
                        reader.skipValue();
                      }
                      reader.endArray();
                      break;
                    }
                  default:
                    {
                      reader.skipName();
                      reader.skipValue();
                    }
                }
              }
              reader.endObject();
              break;
            }
          case 13:
            {
              reader.beginArray();
              let effectNames = T$.JSArrayOfString().of([]);
              while (reader.hasNext()) {
                reader.beginObject();
                while (reader.hasNext()) {
                  switch (reader.selectName(layer_parser.LayerParser._effectsNames)) {
                    case 0:
                      {
                        let type = reader.nextInt();
                        if (type === 29) {
                          blurEffect = blur_effect_parser.BlurEffectParser.parse(reader, composition);
                        } else if (type === 25) {
                          dropShadowEffect = new drop_shadow_effect_parser.DropShadowEffectParser.new().parse(reader, composition);
                        }
                        break;
                      }
                    case 1:
                      {
                        let effectName = reader.nextString();
                        effectNames[$add](effectName);
                        break;
                      }
                    default:
                      {
                        reader.skipName();
                        reader.skipValue();
                      }
                  }
                }
                reader.endObject();
              }
              reader.endArray();
              composition.addWarning("Lottie doesn't support layer effects. If you are using them for " + " fills, strokes, trim paths etc. then try adding them directly as contents " + " in your shape. Found: " + dart.str(effectNames));
              break;
            }
          case 14:
            {
              timeStretch = reader.nextDouble();
              break;
            }
          case 15:
            {
              startFrame = reader.nextDouble();
              break;
            }
          case 16:
            {
              preCompWidth = (reader.nextInt() * ui.window.devicePixelRatio)[$round]();
              break;
            }
          case 17:
            {
              preCompHeight = (reader.nextInt() * ui.window.devicePixelRatio)[$round]();
              break;
            }
          case 18:
            {
              inFrame = reader.nextDouble();
              break;
            }
          case 19:
            {
              outFrame = reader.nextDouble();
              break;
            }
          case 20:
            {
              timeRemapping = animatable_value_parser.AnimatableValueParser.parseFloat(reader, composition, {isDp: false});
              break;
            }
          case 21:
            {
              cl = reader.nextString();
              break;
            }
          case 22:
            {
              hidden = reader.nextBoolean();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      let inOutKeyframes = T$.JSArrayOfKeyframeOfdouble().of([]);
      if (inFrame > 0) {
        let preKeyframe = new (T$.KeyframeOfdouble()).new(composition, {startValue: 0.0, endValue: 0.0, interpolator: null, startFrame: 0.0, endFrame: inFrame});
        inOutKeyframes[$add](preKeyframe);
      }
      outFrame = outFrame > 0 ? outFrame : composition.endFrame;
      let visibleKeyframe = new (T$.KeyframeOfdouble()).new(composition, {startValue: 1.0, endValue: 1.0, interpolator: null, startFrame: inFrame, endFrame: outFrame});
      inOutKeyframes[$add](visibleKeyframe);
      let outKeyframe = new (T$.KeyframeOfdouble()).new(composition, {startValue: 0.0, endValue: 0.0, interpolator: null, startFrame: outFrame, endFrame: 1.7976931348623157e+308});
      inOutKeyframes[$add](outKeyframe);
      if (layerName[$endsWith](".ai") || "ai" === cl) {
        composition.addWarning("Convert your Illustrator layers to shape layers.");
      }
      return new layer$.Layer.new({shapes: shapes, composition: composition, name: layerName, id: layerId, layerType: layerType, parentId: parentId, refId: refId, masks: masks, transform: dart.nullCheck(transform), solidWidth: solidWidth, solidHeight: solidHeight, solidColor: solidColor, timeStretch: timeStretch, startFrame: startFrame, preCompWidth: preCompWidth, preCompHeight: preCompHeight, text: text, textProperties: textProperties, inOutKeyframes: inOutKeyframes, matteType: matteType, timeRemapping: timeRemapping, isHidden: hidden, blurEffect: blurEffect, dropShadowEffect: dropShadowEffect});
    }
  };
  (layer_parser.LayerParser.__ = function() {
    ;
  }).prototype = layer_parser.LayerParser.prototype;
  dart.addTypeTests(layer_parser.LayerParser);
  dart.addTypeCaches(layer_parser.LayerParser);
  dart.setStaticMethodSignature(layer_parser.LayerParser, () => ['parse', 'parseJson']);
  dart.setLibraryUri(layer_parser.LayerParser, I[71]);
  dart.setStaticFieldSignature(layer_parser.LayerParser, () => ['_names', '_textNames', '_effectsNames']);
  dart.defineLazy(layer_parser.LayerParser, {
    /*layer_parser.LayerParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["nm", "ind", "refId", "ty", "parent", "sw", "sh", "sc", "ks", "tt", "masksProperties", "shapes", "t", "ef", "sr", "st", "w", "h", "ip", "op", "tm", "cl", "hd"]));
    },
    /*layer_parser.LayerParser._textNames*/get _textNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["d", "a"]));
    },
    /*layer_parser.LayerParser._effectsNames*/get _effectsNames() {
      return json_reader.JsonReaderOptions.of(T$.JSArrayOfString().of(["ty", "nm"]));
    }
  }, false);
  var _textDirection = dart.privateName(text_layer, "_textDirection");
  var _matrix$ = dart.privateName(text_layer, "_matrix");
  var _fillPaint = dart.privateName(text_layer, "_fillPaint");
  var _strokePaint = dart.privateName(text_layer, "_strokePaint");
  var _contentsForCharacter = dart.privateName(text_layer, "_contentsForCharacter");
  var _colorAnimation$2 = dart.privateName(text_layer, "_colorAnimation");
  var _colorCallbackAnimation$0 = dart.privateName(text_layer, "_colorCallbackAnimation");
  var _strokeColorAnimation = dart.privateName(text_layer, "_strokeColorAnimation");
  var _strokeColorCallbackAnimation = dart.privateName(text_layer, "_strokeColorCallbackAnimation");
  var _strokeWidthAnimation = dart.privateName(text_layer, "_strokeWidthAnimation");
  var _strokeWidthCallbackAnimation = dart.privateName(text_layer, "_strokeWidthCallbackAnimation");
  var _trackingAnimation = dart.privateName(text_layer, "_trackingAnimation");
  var _trackingCallbackAnimation = dart.privateName(text_layer, "_trackingCallbackAnimation");
  var _textSizeAnimation = dart.privateName(text_layer, "_textSizeAnimation");
  var _textSizeCallbackAnimation = dart.privateName(text_layer, "_textSizeCallbackAnimation");
  var _composition = dart.privateName(text_layer, "_composition");
  var _textAnimation = dart.privateName(text_layer, "_textAnimation");
  var _drawTextGlyphs = dart.privateName(text_layer, "_drawTextGlyphs");
  var _drawTextWithFont = dart.privateName(text_layer, "_drawTextWithFont");
  var _getTextLines = dart.privateName(text_layer, "_getTextLines");
  var _getTextLineWidthForGlyphs = dart.privateName(text_layer, "_getTextLineWidthForGlyphs");
  var _applyJustification = dart.privateName(text_layer, "_applyJustification");
  var _drawGlyphTextLine = dart.privateName(text_layer, "_drawGlyphTextLine");
  var _drawCharacterAsGlyph = dart.privateName(text_layer, "_drawCharacterAsGlyph");
  var _drawFontTextLine = dart.privateName(text_layer, "_drawFontTextLine");
  var _drawCharacterFromFont = dart.privateName(text_layer, "_drawCharacterFromFont");
  var _getContentsForCharacter = dart.privateName(text_layer, "_getContentsForCharacter");
  var _drawGlyph = dart.privateName(text_layer, "_drawGlyph");
  var _drawCharacter = dart.privateName(text_layer, "_drawCharacter");
  var boundsMatrix = dart.privateName(base_layer, "BaseLayer.boundsMatrix");
  var lottieDrawable$8 = dart.privateName(base_layer, "BaseLayer.lottieDrawable");
  var layerModel$ = dart.privateName(base_layer, "BaseLayer.layerModel");
  var transform = dart.privateName(base_layer, "BaseLayer.transform");
  var blurMaskFilterRadius = dart.privateName(base_layer, "BaseLayer.blurMaskFilterRadius");
  var blurMaskFilter = dart.privateName(base_layer, "BaseLayer.blurMaskFilter");
  var _matrix$0 = dart.privateName(base_layer, "_matrix");
  var _contentPaint = dart.privateName(base_layer, "_contentPaint");
  var _dstInPaint = dart.privateName(base_layer, "_dstInPaint");
  var _dstOutPaint = dart.privateName(base_layer, "_dstOutPaint");
  var _mattePaint = dart.privateName(base_layer, "_mattePaint");
  var _clearPaint = dart.privateName(base_layer, "_clearPaint");
  var _mask = dart.privateName(base_layer, "_mask");
  var _inOutAnimation = dart.privateName(base_layer, "_inOutAnimation");
  var _matteLayer = dart.privateName(base_layer, "_matteLayer");
  var _parentLayer = dart.privateName(base_layer, "_parentLayer");
  var _parentLayers = dart.privateName(base_layer, "_parentLayers");
  var _animations = dart.privateName(base_layer, "_animations");
  var _visible = dart.privateName(base_layer, "_visible");
  var _drawTraceName = dart.privateName(base_layer, "_drawTraceName");
  var _setupInOutAnimations = dart.privateName(base_layer, "_setupInOutAnimations");
  var _setVisible = dart.privateName(base_layer, "_setVisible");
  var _buildParentLayerListIfNeeded = dart.privateName(base_layer, "_buildParentLayerListIfNeeded");
  var _recordRenderTime = dart.privateName(base_layer, "_recordRenderTime");
  var _intersectBoundsWithMatte = dart.privateName(base_layer, "_intersectBoundsWithMatte");
  var _intersectBoundsWithMask = dart.privateName(base_layer, "_intersectBoundsWithMask");
  var _clearCanvas = dart.privateName(base_layer, "_clearCanvas");
  var _applyMasks = dart.privateName(base_layer, "_applyMasks");
  var _areAllMasksNone = dart.privateName(base_layer, "_areAllMasksNone");
  var _applyInvertedAddMask = dart.privateName(base_layer, "_applyInvertedAddMask");
  var _applyAddMask = dart.privateName(base_layer, "_applyAddMask");
  var _applyInvertedSubtractMask = dart.privateName(base_layer, "_applyInvertedSubtractMask");
  var _applySubtractMask = dart.privateName(base_layer, "_applySubtractMask");
  var _applyInvertedIntersectMask = dart.privateName(base_layer, "_applyInvertedIntersectMask");
  var _applyIntersectMask = dart.privateName(base_layer, "_applyIntersectMask");
  base_layer.BaseLayer = class BaseLayer extends core.Object {
    get boundsMatrix() {
      return this[boundsMatrix];
    }
    set boundsMatrix(value) {
      super.boundsMatrix = value;
    }
    get lottieDrawable() {
      return this[lottieDrawable$8];
    }
    set lottieDrawable(value) {
      super.lottieDrawable = value;
    }
    get layerModel() {
      return this[layerModel$];
    }
    set layerModel(value) {
      super.layerModel = value;
    }
    get transform() {
      return this[transform];
    }
    set transform(value) {
      super.transform = value;
    }
    get blurMaskFilterRadius() {
      return this[blurMaskFilterRadius];
    }
    set blurMaskFilterRadius(value) {
      this[blurMaskFilterRadius] = value;
    }
    get blurMaskFilter() {
      return this[blurMaskFilter];
    }
    set blurMaskFilter(value) {
      this[blurMaskFilter] = value;
    }
    static forModel(compositionLayer, layerModel, drawable, composition) {
      switch (layerModel.layerType) {
        case C[51] || CT.C51:
          {
            return new shape_layer.ShapeLayer.new(drawable, layerModel, compositionLayer);
          }
        case C[52] || CT.C52:
          {
            return new composition_layer.CompositionLayer.new(drawable, layerModel, dart.nullCheck(composition.getPrecomps(layerModel.refId)), composition);
          }
        case C[53] || CT.C53:
          {
            return new solid_layer.SolidLayer.new(drawable, layerModel);
          }
        case C[54] || CT.C54:
          {
            return new image_layer.ImageLayer.new(drawable, layerModel);
          }
        case C[55] || CT.C55:
          {
            return new null_layer.NullLayer.new(drawable, layerModel);
          }
        case C[56] || CT.C56:
          {
            return new text_layer.TextLayer.new(drawable, layerModel);
          }
        case C[57] || CT.C57:
          {
            drawable.composition.addWarning("Unknown layer type " + dart.str(layerModel.layerType));
            return null;
          }
      }
    }
    setMatteLayer(matteLayer) {
      this[_matteLayer] = matteLayer;
    }
    hasMatteOnThisLayer() {
      return this[_matteLayer] != null;
    }
    setParentLayer(parentLayer) {
      this[_parentLayer] = parentLayer;
    }
    [_setupInOutAnimations]() {
      let t46;
      if (this.layerModel.inOutKeyframes[$isNotEmpty]) {
        let inOutAnimation = this[_inOutAnimation] = (t46 = new double_keyframe_animation.DoubleKeyframeAnimation.new(this.layerModel.inOutKeyframes), (() => {
          t46.setIsDiscrete();
          return t46;
        })());
        inOutAnimation.addUpdateListener(dart.fn(() => {
          this[_setVisible](inOutAnimation.value === 1);
        }, T$.VoidTovoid()));
        this[_setVisible](inOutAnimation.value === 1);
        this.addAnimation(inOutAnimation);
      } else {
        this[_setVisible](true);
      }
    }
    invalidateSelf() {
      this.lottieDrawable.invalidateSelf();
    }
    addAnimation(newAnimation) {
      if (newAnimation == null) {
        return;
      }
      this[_animations][$add](newAnimation);
    }
    removeAnimation(animation) {
      this[_animations][$remove](animation);
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      this[_buildParentLayerListIfNeeded]();
      utils['Matrix4Extension|set'](this.boundsMatrix, parentMatrix);
      if (applyParents) {
        if (this[_parentLayers] != null) {
          for (let i = dart.nullCheck(this[_parentLayers])[$length] - 1; i >= 0; i = i - 1) {
            utils['Matrix4Extension|preConcat'](this.boundsMatrix, dart.nullCheck(this[_parentLayers])[$_get](i).transform.getMatrix());
          }
        } else if (this[_parentLayer] != null) {
          utils['Matrix4Extension|preConcat'](this.boundsMatrix, dart.nullCheck(this[_parentLayer]).transform.getMatrix());
        }
      }
      utils['Matrix4Extension|preConcat'](this.boundsMatrix, this.transform.getMatrix());
      return ui.Rect.zero;
    }
    draw(canvas, canvasSize, parentMatrix, opts) {
      let t46, t46$;
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      l.L.beginSection(this[_drawTraceName]);
      if (!this[_visible] || this.layerModel.isHidden) {
        l.L.endSection(this[_drawTraceName]);
        return;
      }
      this[_buildParentLayerListIfNeeded]();
      l.L.beginSection("Layer#parentMatrix");
      utils['Matrix4Extension|reset'](this[_matrix$0]);
      utils['Matrix4Extension|set'](this[_matrix$0], parentMatrix);
      for (let i = dart.nullCheck(this[_parentLayers])[$length] - 1; i >= 0; i = i - 1) {
        utils['Matrix4Extension|preConcat'](this[_matrix$0], dart.nullCheck(this[_parentLayers])[$_get](i).transform.getMatrix());
      }
      l.L.endSection("Layer#parentMatrix");
      let opacity = (t46$ = (t46 = this.transform.opacity, t46 == null ? null : t46.value), t46$ == null ? 100 : t46$);
      let alpha = (parentAlpha / 255.0 * opacity / 100.0 * 255)[$toInt]();
      if (!this.hasMatteOnThisLayer() && !this.hasMasksOnThisLayer()) {
        utils['Matrix4Extension|preConcat'](this[_matrix$0], this.transform.getMatrix());
        l.L.beginSection("Layer#drawLayer");
        this.drawLayer(canvas, canvasSize, this[_matrix$0], {parentAlpha: alpha});
        l.L.endSection("Layer#drawLayer");
        this[_recordRenderTime](l.L.endSection(this[_drawTraceName]));
        return;
      }
      l.L.beginSection("Layer#computeBounds");
      let bounds = this.getBounds(this[_matrix$0], {applyParents: false});
      bounds = this[_intersectBoundsWithMatte](bounds, parentMatrix);
      utils['Matrix4Extension|preConcat'](this[_matrix$0], this.transform.getMatrix());
      bounds = this[_intersectBoundsWithMask](bounds, this[_matrix$0]);
      if (bounds.intersect(new ui.Rect.fromLTWH(0.0, 0.0, canvasSize.width, canvasSize.height)).isEmpty) {
        bounds = ui.Rect.zero;
      }
      l.L.endSection("Layer#computeBounds");
      if (!bounds.isEmpty) {
        l.L.beginSection("Layer#saveLayer");
        utils['PaintExtension|setAlpha'](this[_contentPaint], 255);
        canvas.saveLayer(bounds, this[_contentPaint]);
        l.L.endSection("Layer#saveLayer");
        this[_clearCanvas](canvas, bounds);
        l.L.beginSection("Layer#drawLayer");
        this.drawLayer(canvas, canvasSize, this[_matrix$0], {parentAlpha: alpha});
        l.L.endSection("Layer#drawLayer");
        if (this.hasMasksOnThisLayer()) {
          this[_applyMasks](canvas, bounds, this[_matrix$0]);
        }
        if (this.hasMatteOnThisLayer()) {
          l.L.beginSection("Layer#drawMatte");
          l.L.beginSection("Layer#saveLayer");
          canvas.saveLayer(bounds, this[_mattePaint]);
          l.L.endSection("Layer#saveLayer");
          this[_clearCanvas](canvas, bounds);
          dart.nullCheck(this[_matteLayer]).draw(canvas, canvasSize, parentMatrix, {parentAlpha: alpha});
          l.L.beginSection("Layer#restoreLayer");
          canvas.restore();
          l.L.endSection("Layer#restoreLayer");
          l.L.endSection("Layer#drawMatte");
        }
        l.L.beginSection("Layer#restoreLayer");
        canvas.restore();
        l.L.endSection("Layer#restoreLayer");
      }
      this[_recordRenderTime](l.L.endSection(this[_drawTraceName]));
    }
    [_recordRenderTime](ms) {
      this.lottieDrawable.composition.performanceTracker.recordRenderTime(this.layerModel.name, ms);
    }
    [_clearCanvas](canvas, bounds) {
      l.L.beginSection("Layer#clearLayer");
      canvas.drawRect(bounds.inflate(1.0), this[_clearPaint]);
      l.L.endSection("Layer#clearLayer");
    }
    [_intersectBoundsWithMask](bounds, matrix) {
      if (!this.hasMasksOnThisLayer()) {
        return bounds;
      }
      let size = dart.nullCheck(this[_mask]).masks[$length];
      let maskBoundsRect = ui.Rect.zero;
      for (let i = 0; i < size; i = i + 1) {
        let mask = dart.nullCheck(this[_mask]).masks[$_get](i);
        let maskAnimation = dart.nullCheck(this[_mask]).maskAnimations[$_get](i);
        let maskPath = maskAnimation.value;
        let path = maskPath.transform(matrix.storage);
        switch (mask.maskMode) {
          case C[58] || CT.C58:
            {
              return bounds;
            }
          case C[59] || CT.C59:
            {
              return bounds;
            }
          case C[60] || CT.C60:
          case C[61] || CT.C61:
            {
              if (mask.isInverted) {
                return bounds;
              }
              let maskBounds = path.getBounds();
              if (i === 0) {
                maskBoundsRect = maskBounds;
              } else {
                maskBoundsRect = new ui.Rect.fromLTRB(math.min(core.double, maskBoundsRect.left, maskBounds.left), math.min(core.double, maskBoundsRect.top, maskBounds.top), math.max(core.double, maskBoundsRect.right, maskBounds.right), math.max(core.double, maskBoundsRect.bottom, maskBounds.bottom));
              }
            }
        }
      }
      let intersects = bounds.intersect(maskBoundsRect);
      if (intersects.isEmpty) {
        return ui.Rect.zero;
      }
      return bounds;
    }
    [_intersectBoundsWithMatte](bounds, matrix) {
      if (!this.hasMatteOnThisLayer()) {
        return bounds;
      }
      if (this.layerModel.matteType === layer$.MatteType.invert) {
        return bounds;
      }
      let matteBounds = dart.nullCheck(this[_matteLayer]).getBounds(matrix, {applyParents: true});
      let intersects = bounds.intersect(matteBounds);
      if (intersects.isEmpty) {
        return ui.Rect.zero;
      }
      return bounds;
    }
    [_applyMasks](canvas, bounds, matrix) {
      l.L.beginSection("Layer#saveLayer");
      canvas.saveLayer(bounds, this[_dstInPaint]);
      l.L.endSection("Layer#saveLayer");
      for (let i = 0; i < dart.nullCheck(this[_mask]).masks[$length]; i = i + 1) {
        let mask = dart.nullCheck(this[_mask]).masks[$_get](i);
        let maskAnimation = dart.nullCheck(this[_mask]).maskAnimations[$_get](i);
        let opacityAnimation = dart.nullCheck(this[_mask]).opacityAnimations[$_get](i);
        switch (mask.maskMode) {
          case C[58] || CT.C58:
            {
              if (this[_areAllMasksNone]()) {
                utils['PaintExtension|setAlpha'](this[_contentPaint], 255);
                canvas.drawRect(bounds, this[_contentPaint]);
              }
              break;
            }
          case C[61] || CT.C61:
            {
              if (mask.isInverted) {
                this[_applyInvertedAddMask](canvas, bounds, matrix, mask, maskAnimation, opacityAnimation);
              } else {
                this[_applyAddMask](canvas, matrix, mask, maskAnimation, opacityAnimation);
              }
              break;
            }
          case C[59] || CT.C59:
            {
              if (i === 0) {
                this[_contentPaint].color = C[37] || CT.C37;
                canvas.drawRect(bounds, this[_contentPaint]);
              }
              if (mask.isInverted) {
                this[_applyInvertedSubtractMask](canvas, bounds, matrix, mask, maskAnimation, opacityAnimation);
              } else {
                this[_applySubtractMask](canvas, matrix, mask, maskAnimation, opacityAnimation);
              }
              break;
            }
          case C[60] || CT.C60:
            {
              if (mask.isInverted) {
                this[_applyInvertedIntersectMask](canvas, bounds, matrix, mask, maskAnimation, opacityAnimation);
              } else {
                this[_applyIntersectMask](canvas, bounds, matrix, mask, maskAnimation, opacityAnimation);
              }
              break;
            }
        }
      }
      l.L.beginSection("Layer#restoreLayer");
      canvas.restore();
      l.L.endSection("Layer#restoreLayer");
    }
    [_areAllMasksNone]() {
      if (this[_mask] == null || dart.nullCheck(this[_mask]).maskAnimations[$isEmpty]) {
        return false;
      }
      for (let i = 0; i < dart.nullCheck(this[_mask]).masks[$length]; i = i + 1) {
        if (dart.nullCheck(this[_mask]).masks[$_get](i).maskMode !== mask.MaskMode.maskModeNone) {
          return false;
        }
      }
      return true;
    }
    [_applyAddMask](canvas, matrix, mask, maskAnimation, opacityAnimation) {
      let maskPath = maskAnimation.value;
      let path = maskPath.transform(matrix.storage);
      utils['PaintExtension|setAlpha'](this[_contentPaint], (opacityAnimation.value * 2.55)[$round]());
      canvas.drawPath(path, this[_contentPaint]);
    }
    [_applyInvertedAddMask](canvas, bounds, matrix, mask, maskAnimation, opacityAnimation) {
      canvas.saveLayer(bounds, this[_contentPaint]);
      canvas.drawRect(bounds, this[_contentPaint]);
      let maskPath = maskAnimation.value;
      let path = maskPath.transform(matrix.storage);
      utils['PaintExtension|setAlpha'](this[_contentPaint], (opacityAnimation.value * 2.55)[$round]());
      canvas.drawPath(path, this[_dstOutPaint]);
      canvas.restore();
    }
    [_applySubtractMask](canvas, matrix, mask, maskAnimation, opacityAnimation) {
      let maskPath = maskAnimation.value;
      let path = maskPath.transform(matrix.storage);
      canvas.drawPath(path, this[_dstOutPaint]);
    }
    [_applyInvertedSubtractMask](canvas, bounds, matrix, mask, maskAnimation, opacityAnimation) {
      canvas.saveLayer(bounds, this[_dstOutPaint]);
      canvas.drawRect(bounds, this[_contentPaint]);
      utils['PaintExtension|setAlpha'](this[_dstOutPaint], (opacityAnimation.value * 2.55)[$round]());
      let maskPath = maskAnimation.value;
      let path = maskPath.transform(matrix.storage);
      canvas.drawPath(path, this[_dstOutPaint]);
      canvas.restore();
    }
    [_applyIntersectMask](canvas, bounds, matrix, mask, maskAnimation, opacityAnimation) {
      canvas.saveLayer(bounds, this[_dstInPaint]);
      let maskPath = maskAnimation.value;
      let path = maskPath.transform(matrix.storage);
      utils['PaintExtension|setAlpha'](this[_contentPaint], (opacityAnimation.value * 2.55)[$round]());
      canvas.drawPath(path, this[_contentPaint]);
      canvas.restore();
    }
    [_applyInvertedIntersectMask](canvas, bounds, matrix, mask, maskAnimation, opacityAnimation) {
      canvas.saveLayer(bounds, this[_dstInPaint]);
      canvas.drawRect(bounds, this[_contentPaint]);
      utils['PaintExtension|setAlpha'](this[_dstOutPaint], (opacityAnimation.value * 2.55)[$round]());
      let maskPath = maskAnimation.value;
      let path = maskPath.transform(matrix.storage);
      canvas.drawPath(path, this[_dstOutPaint]);
      canvas.restore();
    }
    hasMasksOnThisLayer() {
      return this[_mask] != null && dart.nullCheck(this[_mask]).maskAnimations[$isNotEmpty];
    }
    [_setVisible](visible) {
      if (visible !== this[_visible]) {
        this[_visible] = visible;
        this.invalidateSelf();
      }
    }
    setProgress(progress) {
      this.transform.setProgress(progress);
      if (this[_mask] != null) {
        for (let i = 0; i < dart.nullCheck(this[_mask]).maskAnimations[$length]; i = i + 1) {
          dart.nullCheck(this[_mask]).maskAnimations[$_get](i).setProgress(progress);
        }
      }
      if (this[_inOutAnimation] != null) {
        dart.nullCheck(this[_inOutAnimation]).setProgress(progress);
      }
      if (this[_matteLayer] != null) {
        dart.nullCheck(this[_matteLayer]).setProgress(progress);
      }
      for (let i = 0; i < this[_animations][$length]; i = i + 1) {
        this[_animations][$_get](i).setProgress(progress);
      }
    }
    [_buildParentLayerListIfNeeded]() {
      if (this[_parentLayers] != null) {
        return;
      }
      if (this[_parentLayer] == null) {
        this[_parentLayers] = T$.JSArrayOfBaseLayer().of([]);
        return;
      }
      this[_parentLayers] = T$.JSArrayOfBaseLayer().of([]);
      let layer = this[_parentLayer];
      while (layer != null) {
        dart.nullCheck(this[_parentLayers])[$add](layer);
        layer = layer[_parentLayer];
      }
    }
    get name() {
      return this.layerModel.name;
    }
    get blurEffect() {
      return this.layerModel.blurEffect;
    }
    getBlurMaskFilter(radius) {
      if (this.blurMaskFilterRadius === radius) {
        return this.blurMaskFilter;
      }
      let sigma = radius * 0.57735 + 0.5;
      this.blurMaskFilter = new ui.MaskFilter.blur(ui.BlurStyle.normal, sigma);
      this.blurMaskFilterRadius = radius;
      return this.blurMaskFilter;
    }
    get dropShadowEffect() {
      return this.layerModel.dropShadowEffect;
    }
    setContents(contentsBefore, contentsAfter) {
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      if (keyPath.keys[$isEmpty]) return;
      let matteLayer = this[_matteLayer];
      if (matteLayer != null) {
        let matteCurrentPartialKeyPath = currentPartialKeyPath.addKey(matteLayer.name);
        if (keyPath.fullyResolvesTo(matteLayer.name, depth)) {
          accumulator[$add](matteCurrentPartialKeyPath.resolve(matteLayer));
        }
        if (keyPath.propagateToChildren(this.name, depth)) {
          let newDepth = depth + keyPath.incrementDepthBy(matteLayer.name, depth);
          matteLayer.resolveChildKeyPath(keyPath, newDepth, accumulator, matteCurrentPartialKeyPath);
        }
      }
      if (!keyPath.matches(this.name, depth)) {
        return;
      }
      if (this.name !== "__container") {
        currentPartialKeyPath = currentPartialKeyPath.addKey(this.name);
        if (keyPath.fullyResolvesTo(this.name, depth)) {
          accumulator[$add](currentPartialKeyPath.resolve(this));
        }
      }
      if (keyPath.propagateToChildren(this.name, depth)) {
        let newDepth = depth + keyPath.incrementDepthBy(this.name, depth);
        this.resolveChildKeyPath(keyPath, newDepth, accumulator, currentPartialKeyPath);
      }
    }
    resolveChildKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
    }
    addValueCallback(T, property, callback) {
      this.transform.applyValueCallback(T, property, callback);
    }
  };
  (base_layer.BaseLayer.new = function(lottieDrawable, layerModel) {
    let t46, t46$, t46$0;
    this[_matrix$0] = vector_math_64.Matrix4.identity();
    this[_contentPaint] = ui.Paint.new();
    this[_dstInPaint] = (t46 = ui.Paint.new(), (() => {
      t46.blendMode = ui.BlendMode.dstIn;
      return t46;
    })());
    this[_dstOutPaint] = (t46$ = ui.Paint.new(), (() => {
      t46$.blendMode = ui.BlendMode.dstOut;
      return t46$;
    })());
    this[_mattePaint] = ui.Paint.new();
    this[_clearPaint] = (t46$0 = ui.Paint.new(), (() => {
      t46$0.isAntiAlias = false;
      t46$0.blendMode = ui.BlendMode.clear;
      return t46$0;
    })());
    this[boundsMatrix] = vector_math_64.Matrix4.identity();
    this[_mask] = null;
    this[_inOutAnimation] = null;
    this[_matteLayer] = null;
    this[_parentLayer] = null;
    this[_parentLayers] = null;
    this[_animations] = T$.JSArrayOfBaseKeyframeAnimationOfObject$ObjectN().of([]);
    this[_visible] = true;
    this[blurMaskFilterRadius] = 0.0;
    this[blurMaskFilter] = null;
    this[lottieDrawable$8] = lottieDrawable;
    this[layerModel$] = layerModel;
    this[_drawTraceName] = layerModel.name + "#draw";
    this[transform] = layerModel.transform.createAnimation();
    if (this.layerModel.matteType === layer$.MatteType.invert) {
      this[_mattePaint].blendMode = ui.BlendMode.dstOut;
    } else {
      this[_mattePaint].blendMode = ui.BlendMode.dstIn;
    }
    this.transform.addListener(dart.bind(this, 'invalidateSelf'));
    if (this.layerModel.masks[$isNotEmpty]) {
      let mask = this[_mask] = new mask_keyframe_animation.MaskKeyframeAnimation.new(this.layerModel.masks);
      for (let animation of mask.maskAnimations) {
        animation.addUpdateListener(dart.bind(this, 'invalidateSelf'));
      }
      for (let animation of mask.opacityAnimations) {
        this.addAnimation(animation);
        animation.addUpdateListener(dart.bind(this, 'invalidateSelf'));
      }
    }
    this[_setupInOutAnimations]();
  }).prototype = base_layer.BaseLayer.prototype;
  dart.addTypeTests(base_layer.BaseLayer);
  dart.addTypeCaches(base_layer.BaseLayer);
  base_layer.BaseLayer[dart.implements] = () => [drawing_content.DrawingContent, key_path_element.KeyPathElement];
  dart.setMethodSignature(base_layer.BaseLayer, () => ({
    __proto__: dart.getMethods(base_layer.BaseLayer.__proto__),
    setMatteLayer: dart.fnType(dart.void, [dart.nullable(base_layer.BaseLayer)]),
    hasMatteOnThisLayer: dart.fnType(core.bool, []),
    setParentLayer: dart.fnType(dart.void, [dart.nullable(base_layer.BaseLayer)]),
    [_setupInOutAnimations]: dart.fnType(dart.void, []),
    invalidateSelf: dart.fnType(dart.void, []),
    addAnimation: dart.fnType(dart.void, [dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, dart.nullable(core.Object)))]),
    removeAnimation: dart.fnType(dart.void, [dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, dart.nullable(core.Object)))]),
    getBounds: dart.fnType(ui.Rect, [vector_math_64.Matrix4], {}, {applyParents: core.bool}),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    [_recordRenderTime]: dart.fnType(dart.void, [core.double]),
    [_clearCanvas]: dart.fnType(dart.void, [ui.Canvas, ui.Rect]),
    [_intersectBoundsWithMask]: dart.fnType(ui.Rect, [ui.Rect, vector_math_64.Matrix4]),
    [_intersectBoundsWithMatte]: dart.fnType(ui.Rect, [ui.Rect, vector_math_64.Matrix4]),
    [_applyMasks]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, vector_math_64.Matrix4]),
    [_areAllMasksNone]: dart.fnType(core.bool, []),
    [_applyAddMask]: dart.fnType(dart.void, [ui.Canvas, vector_math_64.Matrix4, mask.Mask, base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path), base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)]),
    [_applyInvertedAddMask]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, vector_math_64.Matrix4, mask.Mask, base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path), base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)]),
    [_applySubtractMask]: dart.fnType(dart.void, [ui.Canvas, vector_math_64.Matrix4, mask.Mask, base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path), base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)]),
    [_applyInvertedSubtractMask]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, vector_math_64.Matrix4, mask.Mask, base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path), base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)]),
    [_applyIntersectMask]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, vector_math_64.Matrix4, mask.Mask, base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path), base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)]),
    [_applyInvertedIntersectMask]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, vector_math_64.Matrix4, mask.Mask, base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path), base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)]),
    hasMasksOnThisLayer: dart.fnType(core.bool, []),
    [_setVisible]: dart.fnType(dart.void, [core.bool]),
    setProgress: dart.fnType(dart.void, [core.double]),
    [_buildParentLayerListIfNeeded]: dart.fnType(dart.void, []),
    getBlurMaskFilter: dart.fnType(dart.nullable(ui.MaskFilter), [core.double]),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    resolveChildKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setStaticMethodSignature(base_layer.BaseLayer, () => ['forModel']);
  dart.setGetterSignature(base_layer.BaseLayer, () => ({
    __proto__: dart.getGetters(base_layer.BaseLayer.__proto__),
    name: core.String,
    blurEffect: dart.nullable(blur_effect.BlurEffect),
    dropShadowEffect: dart.nullable(drop_shadow_effect.DropShadowEffect)
  }));
  dart.setLibraryUri(base_layer.BaseLayer, I[72]);
  dart.setFieldSignature(base_layer.BaseLayer, () => ({
    __proto__: dart.getFields(base_layer.BaseLayer.__proto__),
    [_matrix$0]: dart.finalFieldType(vector_math_64.Matrix4),
    [_contentPaint]: dart.finalFieldType(ui.Paint),
    [_dstInPaint]: dart.finalFieldType(ui.Paint),
    [_dstOutPaint]: dart.finalFieldType(ui.Paint),
    [_mattePaint]: dart.finalFieldType(ui.Paint),
    [_clearPaint]: dart.finalFieldType(ui.Paint),
    [_drawTraceName]: dart.finalFieldType(core.String),
    boundsMatrix: dart.finalFieldType(vector_math_64.Matrix4),
    lottieDrawable: dart.finalFieldType(lottie_drawable.LottieDrawable),
    layerModel: dart.finalFieldType(layer$.Layer),
    [_mask]: dart.fieldType(dart.nullable(mask_keyframe_animation.MaskKeyframeAnimation)),
    [_inOutAnimation]: dart.fieldType(dart.nullable(double_keyframe_animation.DoubleKeyframeAnimation)),
    [_matteLayer]: dart.fieldType(dart.nullable(base_layer.BaseLayer)),
    [_parentLayer]: dart.fieldType(dart.nullable(base_layer.BaseLayer)),
    [_parentLayers]: dart.fieldType(dart.nullable(core.List$(base_layer.BaseLayer))),
    [_animations]: dart.finalFieldType(core.List$(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, dart.nullable(core.Object)))),
    transform: dart.finalFieldType(transform_keyframe_animation.TransformKeyframeAnimation),
    [_visible]: dart.fieldType(core.bool),
    blurMaskFilterRadius: dart.fieldType(core.double),
    blurMaskFilter: dart.fieldType(dart.nullable(ui.MaskFilter))
  }));
  text_layer.TextLayer = class TextLayer extends base_layer.BaseLayer {
    static ['_#new#tearOff'](lottieDrawable, layerModel) {
      return new text_layer.TextLayer.new(lottieDrawable, layerModel);
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      super.getBounds(parentMatrix, {applyParents: applyParents});
      return new ui.Rect.fromLTWH(0.0, 0.0, this[_composition].bounds[$width][$toDouble](), this[_composition].bounds[$height][$toDouble]());
    }
    drawLayer(canvas, size, parentMatrix, opts) {
      let t46, t46$;
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      canvas.save();
      if (!this.lottieDrawable.useTextGlyphs) {
        canvas.transform(parentMatrix.storage);
      }
      let documentData = this[_textAnimation].value;
      let font = this[_composition].fonts[$_get](documentData.fontName);
      if (font == null) {
        canvas.restore();
        return;
      }
      let fillPaintColor = null;
      if (this[_colorCallbackAnimation$0] != null) {
        fillPaintColor = dart.nullCheck(this[_colorCallbackAnimation$0]).value;
      } else if (this[_colorAnimation$2] != null) {
        fillPaintColor = dart.nullCheck(this[_colorAnimation$2]).value;
      } else {
        fillPaintColor = documentData.color;
      }
      this[_fillPaint].color = fillPaintColor.withAlpha(this[_fillPaint].color.alpha);
      let strokePaintColor = null;
      if (this[_strokeColorCallbackAnimation] != null) {
        strokePaintColor = dart.nullCheck(this[_strokeColorCallbackAnimation]).value;
      } else if (this[_strokeColorAnimation] != null) {
        strokePaintColor = dart.nullCheck(this[_strokeColorAnimation]).value;
      } else {
        strokePaintColor = documentData.strokeColor;
      }
      this[_strokePaint].color = strokePaintColor.withAlpha(this[_strokePaint].color.alpha);
      let opacity = (t46$ = (t46 = this.transform.opacity, t46 == null ? null : t46.value), t46$ == null ? 100 : t46$);
      let alpha = (opacity * 255 / 100)[$round]();
      utils['PaintExtension|setAlpha'](this[_fillPaint], alpha);
      utils['PaintExtension|setAlpha'](this[_strokePaint], alpha);
      if (this[_strokeWidthCallbackAnimation] != null) {
        this[_strokePaint].strokeWidth = dart.nullCheck(this[_strokeWidthCallbackAnimation]).value;
      } else if (this[_strokeWidthAnimation] != null) {
        this[_strokePaint].strokeWidth = dart.nullCheck(this[_strokeWidthAnimation]).value;
      } else {
        let parentScale = utils['Matrix4Extension|getScale'](parentMatrix);
        this[_strokePaint].strokeWidth = documentData.strokeWidth * ui.window.devicePixelRatio * parentScale;
      }
      if (this.lottieDrawable.useTextGlyphs) {
        this[_drawTextGlyphs](documentData, parentMatrix, font, canvas);
      } else {
        this[_drawTextWithFont](documentData, font, parentMatrix, canvas);
      }
      canvas.restore();
    }
    [_drawTextGlyphs](documentData, parentMatrix, font, canvas) {
      let textSize = null;
      if (this[_textSizeCallbackAnimation] != null) {
        textSize = dart.nullCheck(this[_textSizeCallbackAnimation]).value;
      } else if (this[_textSizeAnimation] != null) {
        textSize = dart.nullCheck(this[_textSizeAnimation]).value;
      } else {
        textSize = documentData.size;
      }
      let fontScale = textSize / 100.0;
      let parentScale = utils['Matrix4Extension|getScale'](parentMatrix);
      let text = documentData.text;
      let lineHeight = documentData.lineHeight * ui.window.devicePixelRatio;
      let textLines = this[_getTextLines](text);
      let textLineCount = textLines[$length];
      for (let l = 0; l < textLineCount; l = l + 1) {
        let textLine = textLines[$_get](l);
        let textLineWidth = this[_getTextLineWidthForGlyphs](textLine, font, fontScale, parentScale);
        canvas.save();
        this[_applyJustification](documentData.justification, canvas, textLineWidth);
        let multilineTranslateY = (textLineCount - 1) * lineHeight / 2;
        let translateY = l * lineHeight - multilineTranslateY;
        canvas.translate(0.0, translateY);
        this[_drawGlyphTextLine](textLine, documentData, parentMatrix, font, canvas, parentScale, fontScale);
        canvas.restore();
      }
    }
    [_drawGlyphTextLine](text, documentData, parentMatrix, font, canvas, parentScale, fontScale) {
      for (let i = 0; i < text.length; i = i + 1) {
        let c = text[$_get](i);
        let characterHash = font_character.FontCharacter.hashFor(c, font.family, font.style);
        let character = this[_composition].characters[$_get](characterHash);
        if (character == null) {
          continue;
        }
        this[_drawCharacterAsGlyph](character, parentMatrix, fontScale, documentData, canvas);
        let tx = character.width * fontScale * ui.window.devicePixelRatio * parentScale;
        let tracking = documentData.tracking / 10.0;
        if (this[_trackingCallbackAnimation] != null) {
          tracking = tracking + dart.nullCheck(this[_trackingCallbackAnimation]).value;
        } else if (this[_trackingAnimation] != null) {
          tracking = tracking + dart.nullCheck(this[_trackingAnimation]).value;
        }
        tx = tx + tracking * parentScale;
        canvas.translate(tx, 0.0);
      }
    }
    [_drawTextWithFont](documentData, font, parentMatrix, canvas) {
      let t46;
      let textStyle = this.lottieDrawable.getTextStyle(font.family, font.style);
      let text = documentData.text;
      let textDelegate = (t46 = this.lottieDrawable.delegates, t46 == null ? null : t46.text);
      if (textDelegate != null) {
        text = textDelegate(text);
      }
      let textSize = null;
      if (this[_textSizeCallbackAnimation] != null) {
        textSize = dart.nullCheck(this[_textSizeCallbackAnimation]).value;
      } else if (this[_textSizeAnimation] != null) {
        textSize = dart.nullCheck(this[_textSizeAnimation]).value;
      } else {
        textSize = documentData.size;
      }
      textStyle = textStyle.copyWith({fontSize: textSize * ui.window.devicePixelRatio});
      let lineHeight = documentData.lineHeight * ui.window.devicePixelRatio;
      let tracking = documentData.tracking / 10;
      if (this[_trackingCallbackAnimation] != null) {
        tracking = tracking + dart.nullCheck(this[_trackingCallbackAnimation]).value;
      } else if (this[_trackingAnimation] != null) {
        tracking = tracking + dart.nullCheck(this[_trackingAnimation]).value;
      }
      tracking = tracking * ui.window.devicePixelRatio * textSize / 100.0;
      let textLines = this[_getTextLines](text);
      let textLineCount = textLines[$length];
      for (let l = 0; l < textLineCount; l = l + 1) {
        let textLine = textLines[$_get](l);
        let textPainter = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({text: textLine, style: textStyle}), textDirection: this[_textDirection]});
        textPainter.layout();
        let textLineWidth = textPainter.width;
        textLineWidth = textLineWidth + (textLine.length - 1) * tracking;
        canvas.save();
        this[_applyJustification](documentData.justification, canvas, textLineWidth);
        let multilineTranslateY = (textLineCount - 1) * lineHeight / 2;
        let translateY = l * lineHeight - multilineTranslateY;
        canvas.translate(0.0, translateY);
        this[_drawFontTextLine](textLine, textStyle, documentData, canvas, tracking);
        canvas.restore();
      }
    }
    [_getTextLines](text) {
      let formattedText = text[$replaceAll]("\r\n", "\r")[$replaceAll]("\n", "\r");
      let textLinesArray = formattedText[$split]("\r");
      return textLinesArray;
    }
    [_drawFontTextLine](text, textStyle, documentData, canvas, tracking) {
      for (let char of extensions['StringCharacters|get#characters'](text)) {
        let charString = char;
        this[_drawCharacterFromFont](charString, textStyle, documentData, canvas);
        let textPainter = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({text: charString, style: textStyle}), textDirection: this[_textDirection]});
        textPainter.layout();
        let charWidth = textPainter.width;
        let tx = charWidth + tracking;
        canvas.translate(tx, 0.0);
      }
    }
    [_getTextLineWidthForGlyphs](textLine, font, fontScale, parentScale) {
      let textLineWidth = 0.0;
      for (let i = 0; i < textLine.length; i = i + 1) {
        let c = textLine[$_get](i);
        let characterHash = font_character.FontCharacter.hashFor(c, font.family, font.style);
        let character = this[_composition].characters[$_get](characterHash);
        if (character == null) {
          continue;
        }
        textLineWidth = textLineWidth + character.width * fontScale * ui.window.devicePixelRatio * parentScale;
      }
      return textLineWidth;
    }
    [_applyJustification](justification, canvas, textLineWidth) {
      switch (justification) {
        case C[48] || CT.C48:
          {
            break;
          }
        case C[49] || CT.C49:
          {
            canvas.translate(-textLineWidth, 0.0);
            break;
          }
        case C[50] || CT.C50:
          {
            canvas.translate(-textLineWidth / 2, 0.0);
            break;
          }
      }
    }
    [_drawCharacterAsGlyph](character, parentMatrix, fontScale, documentData, canvas) {
      let contentGroups = this[_getContentsForCharacter](character);
      for (let j = 0; j < contentGroups[$length]; j = j + 1) {
        let path = contentGroups[$_get](j).getPath();
        path.getBounds();
        utils['Matrix4Extension|set'](this[_matrix$], parentMatrix);
        this[_matrix$].translate(0.0, -documentData.baselineShift * ui.window.devicePixelRatio);
        this[_matrix$].scale(fontScale, fontScale);
        path = path.transform(this[_matrix$].storage);
        if (documentData.strokeOverFill) {
          this[_drawGlyph](path, this[_fillPaint], canvas);
          this[_drawGlyph](path, this[_strokePaint], canvas);
        } else {
          this[_drawGlyph](path, this[_strokePaint], canvas);
          this[_drawGlyph](path, this[_fillPaint], canvas);
        }
      }
    }
    [_drawGlyph](path, paint, canvas) {
      if (paint.color.alpha === 0) {
        return;
      }
      if (paint.style === ui.PaintingStyle.stroke && paint.strokeWidth === 0) {
        return;
      }
      canvas.drawPath(path, paint);
    }
    [_drawCharacterFromFont](character, textStyle, documentData, canvas) {
      if (documentData.strokeOverFill) {
        this[_drawCharacter](character, textStyle, this[_fillPaint], canvas);
        this[_drawCharacter](character, textStyle, this[_strokePaint], canvas);
      } else {
        this[_drawCharacter](character, textStyle, this[_strokePaint], canvas);
        this[_drawCharacter](character, textStyle, this[_fillPaint], canvas);
      }
    }
    [_drawCharacter](character, textStyle, paint, canvas) {
      if (paint.color.alpha === 0) {
        return;
      }
      if (paint.style === ui.PaintingStyle.stroke && paint.strokeWidth === 0) {
        return;
      }
      if (paint.style === ui.PaintingStyle.fill) {
        textStyle = textStyle.copyWith({foreground: paint});
      } else if (paint.style === ui.PaintingStyle.stroke) {
        textStyle = textStyle.copyWith({background: paint});
      }
      let painter = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({text: character, style: textStyle}), textDirection: this[_textDirection]});
      painter.layout();
      painter.paint(canvas, new ui.Offset.new(0.0, -dart.nullCheck(textStyle.fontSize)));
    }
    [_getContentsForCharacter](character) {
      if (this[_contentsForCharacter][$containsKey](character)) {
        return dart.nullCheck(this[_contentsForCharacter][$_get](character));
      }
      let shapes = character.shapes;
      let size = shapes[$length];
      let contents = T$.JSArrayOfContentGroup().of([]);
      for (let i = 0; i < size; i = i + 1) {
        let sg = shapes[$_get](i);
        contents[$add](new content_group.ContentGroup.new(this.lottieDrawable, this, sg));
      }
      this[_contentsForCharacter][$_set](character, contents);
      return contents;
    }
    addValueCallback(T, property, callback) {
      let t46, t46$, t46$0, t46$1, t46$2;
      super.addValueCallback(T, property, callback);
      if (dart.equals(property, lottie_property.LottieProperty.color)) {
        if (this[_colorCallbackAnimation$0] != null) {
          this.removeAnimation(this[_colorCallbackAnimation$0]);
        }
        if (callback == null) {
          this[_colorCallbackAnimation$0] = null;
        } else {
          this[_colorCallbackAnimation$0] = (t46 = new (T$.ValueCallbackKeyframeAnimationOfColor$Color()).new(T$.LottieValueCallbackOfColor().as(callback), C[36] || CT.C36), (() => {
            t46.addUpdateListener(dart.bind(this, 'invalidateSelf'));
            return t46;
          })());
          this.addAnimation(this[_colorCallbackAnimation$0]);
        }
      } else if (dart.equals(property, lottie_property.LottieProperty.strokeColor)) {
        if (this[_strokeColorCallbackAnimation] != null) {
          this.removeAnimation(this[_strokeColorCallbackAnimation]);
        }
        if (callback == null) {
          this[_strokeColorCallbackAnimation] = null;
        } else {
          this[_strokeColorCallbackAnimation] = (t46$ = new (T$.ValueCallbackKeyframeAnimationOfColor$Color()).new(T$.LottieValueCallbackOfColor().as(callback), C[36] || CT.C36), (() => {
            t46$.addUpdateListener(dart.bind(this, 'invalidateSelf'));
            return t46$;
          })());
          this.addAnimation(this[_strokeColorCallbackAnimation]);
        }
      } else if (dart.equals(property, 15)) {
        if (this[_strokeWidthCallbackAnimation] != null) {
          this.removeAnimation(this[_strokeWidthCallbackAnimation]);
        }
        if (callback == null) {
          this[_strokeWidthCallbackAnimation] = null;
        } else {
          this[_strokeWidthCallbackAnimation] = (t46$0 = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackOfdouble().as(callback), 0.0), (() => {
            t46$0.addUpdateListener(dart.bind(this, 'invalidateSelf'));
            return t46$0;
          })());
          this.addAnimation(this[_strokeWidthCallbackAnimation]);
        }
      } else if (dart.equals(property, 16)) {
        if (this[_trackingCallbackAnimation] != null) {
          this.removeAnimation(this[_trackingCallbackAnimation]);
        }
        if (callback == null) {
          this[_trackingCallbackAnimation] = null;
        } else {
          this[_trackingCallbackAnimation] = (t46$1 = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackOfdouble().as(callback), 0.0), (() => {
            t46$1.addUpdateListener(dart.bind(this, 'invalidateSelf'));
            return t46$1;
          })());
          this.addAnimation(this[_trackingCallbackAnimation]);
        }
      } else if (dart.equals(property, 28)) {
        if (this[_textSizeCallbackAnimation] != null) {
          this.removeAnimation(this[_textSizeCallbackAnimation]);
        }
        if (callback == null) {
          this[_textSizeCallbackAnimation] = null;
        } else {
          this[_textSizeCallbackAnimation] = (t46$2 = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackOfdouble().as(callback), 10.0), (() => {
            t46$2.addUpdateListener(dart.bind(this, 'invalidateSelf'));
            return t46$2;
          })());
          this.addAnimation(this[_textSizeCallbackAnimation]);
        }
      } else if (dart.equals(property, "dynamic_text")) {
        if (callback != null) {
          this[_textAnimation].setStringValueCallback(T$.LottieValueCallbackOfString().as(callback));
        }
      }
    }
  };
  (text_layer.TextLayer.new = function(lottieDrawable, layerModel) {
    let t46, t46$, t46$0, t46$1, t46$2, t46$3;
    this[_textDirection] = ui.TextDirection.ltr;
    this[_matrix$] = vector_math_64.Matrix4.identity();
    this[_fillPaint] = (t46 = ui.Paint.new(), (() => {
      t46.style = ui.PaintingStyle.fill;
      return t46;
    })());
    this[_strokePaint] = (t46$ = ui.Paint.new(), (() => {
      t46$.style = ui.PaintingStyle.stroke;
      return t46$;
    })());
    this[_contentsForCharacter] = new (T$.LinkedMapOfFontCharacter$ListOfContentGroup()).new();
    this[_colorAnimation$2] = null;
    this[_colorCallbackAnimation$0] = null;
    this[_strokeColorAnimation] = null;
    this[_strokeColorCallbackAnimation] = null;
    this[_strokeWidthAnimation] = null;
    this[_strokeWidthCallbackAnimation] = null;
    this[_trackingAnimation] = null;
    this[_trackingCallbackAnimation] = null;
    this[_textSizeAnimation] = null;
    this[_textSizeCallbackAnimation] = null;
    this[_composition] = layerModel.composition;
    this[_textAnimation] = dart.nullCheck(layerModel.text).createAnimation();
    text_layer.TextLayer.__proto__.new.call(this, lottieDrawable, layerModel);
    this[_textAnimation].addUpdateListener(dart.bind(this, 'invalidateSelf'));
    this.addAnimation(this[_textAnimation]);
    let textProperties = layerModel.textProperties;
    if (textProperties != null && textProperties.color != null) {
      this[_colorAnimation$2] = (t46$0 = dart.nullCheck(textProperties.color).createAnimation(), (() => {
        t46$0.addUpdateListener(dart.bind(this, 'invalidateSelf'));
        return t46$0;
      })());
      this.addAnimation(this[_colorAnimation$2]);
    }
    if (textProperties != null && textProperties.stroke != null) {
      this[_strokeColorAnimation] = (t46$1 = dart.nullCheck(textProperties.stroke).createAnimation(), (() => {
        t46$1.addUpdateListener(dart.bind(this, 'invalidateSelf'));
        return t46$1;
      })());
      this.addAnimation(this[_strokeColorAnimation]);
    }
    if (textProperties != null && textProperties.strokeWidth != null) {
      this[_strokeWidthAnimation] = (t46$2 = dart.nullCheck(textProperties.strokeWidth).createAnimation(), (() => {
        t46$2.addUpdateListener(dart.bind(this, 'invalidateSelf'));
        return t46$2;
      })());
      this.addAnimation(this[_strokeWidthAnimation]);
    }
    if (textProperties != null && textProperties.tracking != null) {
      this[_trackingAnimation] = (t46$3 = dart.nullCheck(textProperties.tracking).createAnimation(), (() => {
        t46$3.addUpdateListener(dart.bind(this, 'invalidateSelf'));
        return t46$3;
      })());
      this.addAnimation(this[_trackingAnimation]);
    }
  }).prototype = text_layer.TextLayer.prototype;
  dart.addTypeTests(text_layer.TextLayer);
  dart.addTypeCaches(text_layer.TextLayer);
  dart.setMethodSignature(text_layer.TextLayer, () => ({
    __proto__: dart.getMethods(text_layer.TextLayer.__proto__),
    drawLayer: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    [_drawTextGlyphs]: dart.fnType(dart.void, [document_data.DocumentData, vector_math_64.Matrix4, font.Font, ui.Canvas]),
    [_drawGlyphTextLine]: dart.fnType(dart.void, [core.String, document_data.DocumentData, vector_math_64.Matrix4, font.Font, ui.Canvas, core.double, core.double]),
    [_drawTextWithFont]: dart.fnType(dart.void, [document_data.DocumentData, font.Font, vector_math_64.Matrix4, ui.Canvas]),
    [_getTextLines]: dart.fnType(core.List$(core.String), [core.String]),
    [_drawFontTextLine]: dart.fnType(dart.void, [core.String, text_style.TextStyle, document_data.DocumentData, ui.Canvas, core.double]),
    [_getTextLineWidthForGlyphs]: dart.fnType(core.double, [core.String, font.Font, core.double, core.double]),
    [_applyJustification]: dart.fnType(dart.void, [document_data.Justification, ui.Canvas, core.double]),
    [_drawCharacterAsGlyph]: dart.fnType(dart.void, [font_character.FontCharacter, vector_math_64.Matrix4, core.double, document_data.DocumentData, ui.Canvas]),
    [_drawGlyph]: dart.fnType(dart.void, [ui.Path, ui.Paint, ui.Canvas]),
    [_drawCharacterFromFont]: dart.fnType(dart.void, [core.String, text_style.TextStyle, document_data.DocumentData, ui.Canvas]),
    [_drawCharacter]: dart.fnType(dart.void, [core.String, text_style.TextStyle, ui.Paint, ui.Canvas]),
    [_getContentsForCharacter]: dart.fnType(core.List$(content_group.ContentGroup), [font_character.FontCharacter]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(text_layer.TextLayer, I[73]);
  dart.setFieldSignature(text_layer.TextLayer, () => ({
    __proto__: dart.getFields(text_layer.TextLayer.__proto__),
    [_textDirection]: dart.finalFieldType(ui.TextDirection),
    [_matrix$]: dart.finalFieldType(vector_math_64.Matrix4),
    [_fillPaint]: dart.finalFieldType(ui.Paint),
    [_strokePaint]: dart.finalFieldType(ui.Paint),
    [_contentsForCharacter]: dart.finalFieldType(core.Map$(font_character.FontCharacter, core.List$(content_group.ContentGroup))),
    [_textAnimation]: dart.finalFieldType(text_keyframe_animation.TextKeyframeAnimation),
    [_composition]: dart.finalFieldType(composition$.LottieComposition),
    [_colorAnimation$2]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.Color, ui.Color))),
    [_colorCallbackAnimation$0]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.Color, ui.Color))),
    [_strokeColorAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.Color, ui.Color))),
    [_strokeColorCallbackAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.Color, ui.Color))),
    [_strokeWidthAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_strokeWidthCallbackAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_trackingAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_trackingCallbackAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_textSizeAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_textSizeCallbackAnimation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)))
  }));
  var paint$ = dart.privateName(solid_layer, "SolidLayer.paint");
  var path$ = dart.privateName(solid_layer, "SolidLayer.path");
  var _colorFilterAnimation$2 = dart.privateName(solid_layer, "_colorFilterAnimation");
  solid_layer.SolidLayer = class SolidLayer extends base_layer.BaseLayer {
    get paint() {
      return this[paint$];
    }
    set paint(value) {
      super.paint = value;
    }
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layerModel) {
      return new solid_layer.SolidLayer.new(lottieDrawable, layerModel);
    }
    drawLayer(canvas, size, parentMatrix, opts) {
      let t46, t46$, t48, t47, t46$0, t48$, t47$, t46$1;
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      let backgroundAlpha = this.layerModel.solidColor.alpha;
      if (backgroundAlpha === 0) {
        return;
      }
      let opacity = (t46$ = (t46 = this.transform.opacity, t46 == null ? null : t46.value), t46$ == null ? 100 : t46$);
      let alpha = (parentAlpha / 255.0 * (backgroundAlpha / 255.0 * opacity / 100.0) * 255.0)[$round]();
      utils['PaintExtension|setAlpha'](this.paint, alpha);
      if (this[_colorFilterAnimation$2] != null) {
        this.paint.colorFilter = dart.nullCheck(this[_colorFilterAnimation$2]).value;
      }
      if (alpha > 0) {
        let points = T$.ListOfdouble().filled(8, 0.0);
        points[$_set](2, (t46$0 = points, t47 = 4, t48 = this.layerModel.solidWidth[$toDouble](), t46$0[$_set](t47, t48), t48));
        points[$_set](5, (t46$1 = points, t47$ = 7, t48$ = this.layerModel.solidHeight[$toDouble](), t46$1[$_set](t47$, t48$), t48$));
        utils['Matrix4Extension|mapPoints'](parentMatrix, points);
        this.path.reset();
        this.path.moveTo(points[$_get](0), points[$_get](1));
        this.path.lineTo(points[$_get](2), points[$_get](3));
        this.path.lineTo(points[$_get](4), points[$_get](5));
        this.path.lineTo(points[$_get](6), points[$_get](7));
        this.path.lineTo(points[$_get](0), points[$_get](1));
        this.path.close();
        canvas.drawPath(this.path, this.paint);
      }
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      super.getBounds(parentMatrix, {applyParents: applyParents});
      let rect = new ui.Rect.fromLTWH(0.0, 0.0, this.layerModel.solidWidth[$toDouble](), this.layerModel.solidHeight[$toDouble]());
      rect = utils['Matrix4Extension|mapRect'](this.boundsMatrix, rect);
      return rect;
    }
    addValueCallback(T, property, callback) {
      super.addValueCallback(T, property, callback);
      if (dart.equals(property, lottie_property.LottieProperty.colorFilter)) {
        if (callback == null) {
          this[_colorFilterAnimation$2] = null;
        } else {
          this[_colorFilterAnimation$2] = new (T$.ValueCallbackKeyframeAnimationOfColorFilter$ColorFilterN()).new(T$.LottieValueCallbackOfColorFilter().as(callback), null);
        }
      }
    }
  };
  (solid_layer.SolidLayer.new = function(lottieDrawable, layerModel) {
    let t46;
    this[paint$] = (t46 = ui.Paint.new(), (() => {
      t46.style = ui.PaintingStyle.fill;
      return t46;
    })());
    this[path$] = path_factory.PathFactory.create();
    this[_colorFilterAnimation$2] = null;
    solid_layer.SolidLayer.__proto__.new.call(this, lottieDrawable, layerModel);
    this.paint.color = layerModel.solidColor.withAlpha(0);
  }).prototype = solid_layer.SolidLayer.prototype;
  dart.addTypeTests(solid_layer.SolidLayer);
  dart.addTypeCaches(solid_layer.SolidLayer);
  dart.setMethodSignature(solid_layer.SolidLayer, () => ({
    __proto__: dart.getMethods(solid_layer.SolidLayer.__proto__),
    drawLayer: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(solid_layer.SolidLayer, I[74]);
  dart.setFieldSignature(solid_layer.SolidLayer, () => ({
    __proto__: dart.getFields(solid_layer.SolidLayer.__proto__),
    paint: dart.finalFieldType(ui.Paint),
    path: dart.finalFieldType(ui.Path),
    [_colorFilterAnimation$2]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.ColorFilter, dart.nullable(ui.ColorFilter))))
  }));
  var __ShapeLayer__contentGroup = dart.privateName(shape_layer, "_#ShapeLayer#_contentGroup");
  var _compositionLayer$ = dart.privateName(shape_layer, "_compositionLayer");
  var _contentGroup$ = dart.privateName(shape_layer, "_contentGroup");
  shape_layer.ShapeLayer = class ShapeLayer extends base_layer.BaseLayer {
    get [_contentGroup$]() {
      let t46;
      t46 = this[__ShapeLayer__contentGroup];
      return t46 == null ? dart.throw(new _internal.LateError.fieldNI("_contentGroup")) : t46;
    }
    set [_contentGroup$](library$32package$58lottie$47src$47model$47layer$47shape_layer$46dart$58$58_contentGroup$35param) {
      this[__ShapeLayer__contentGroup] = library$32package$58lottie$47src$47model$47layer$47shape_layer$46dart$58$58_contentGroup$35param;
    }
    static ['_#new#tearOff'](lottieDrawable, layerModel, _compositionLayer) {
      return new shape_layer.ShapeLayer.new(lottieDrawable, layerModel, _compositionLayer);
    }
    drawLayer(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      this[_contentGroup$].draw(canvas, size, parentMatrix, {parentAlpha: parentAlpha});
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      let bounds = super.getBounds(parentMatrix, {applyParents: applyParents});
      bounds = bounds.expandToInclude(this[_contentGroup$].getBounds(this.boundsMatrix, {applyParents: applyParents}));
      return bounds;
    }
    get blurEffect() {
      let layerBlur = super.blurEffect;
      if (layerBlur != null) {
        return layerBlur;
      }
      return this[_compositionLayer$].blurEffect;
    }
    get dropShadowEffect() {
      let layerDropShadow = super.dropShadowEffect;
      if (layerDropShadow != null) {
        return layerDropShadow;
      }
      return this[_compositionLayer$].dropShadowEffect;
    }
    resolveChildKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      this[_contentGroup$].resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath);
    }
  };
  (shape_layer.ShapeLayer.new = function(lottieDrawable, layerModel, _compositionLayer) {
    let t46;
    this[__ShapeLayer__contentGroup] = null;
    this[_compositionLayer$] = _compositionLayer;
    shape_layer.ShapeLayer.__proto__.new.call(this, lottieDrawable, layerModel);
    let shapeGroup = new shape_group.ShapeGroup.new("__container", layerModel.shapes, {hidden: false});
    this[_contentGroup$] = (t46 = new content_group.ContentGroup.new(lottieDrawable, this, shapeGroup), (() => {
      t46.setContents(T$.JSArrayOfContent().of([]), T$.JSArrayOfContent().of([]));
      return t46;
    })());
  }).prototype = shape_layer.ShapeLayer.prototype;
  dart.addTypeTests(shape_layer.ShapeLayer);
  dart.addTypeCaches(shape_layer.ShapeLayer);
  dart.setMethodSignature(shape_layer.ShapeLayer, () => ({
    __proto__: dart.getMethods(shape_layer.ShapeLayer.__proto__),
    drawLayer: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int})
  }));
  dart.setGetterSignature(shape_layer.ShapeLayer, () => ({
    __proto__: dart.getGetters(shape_layer.ShapeLayer.__proto__),
    [_contentGroup$]: content_group.ContentGroup
  }));
  dart.setSetterSignature(shape_layer.ShapeLayer, () => ({
    __proto__: dart.getSetters(shape_layer.ShapeLayer.__proto__),
    [_contentGroup$]: content_group.ContentGroup
  }));
  dart.setLibraryUri(shape_layer.ShapeLayer, I[75]);
  dart.setFieldSignature(shape_layer.ShapeLayer, () => ({
    __proto__: dart.getFields(shape_layer.ShapeLayer.__proto__),
    [__ShapeLayer__contentGroup]: dart.fieldType(dart.nullable(content_group.ContentGroup)),
    [_compositionLayer$]: dart.finalFieldType(composition_layer.CompositionLayer)
  }));
  null_layer.NullLayer = class NullLayer extends base_layer.BaseLayer {
    static ['_#new#tearOff'](lottieDrawable, layerModel) {
      return new null_layer.NullLayer.new(lottieDrawable, layerModel);
    }
    drawLayer(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      super.getBounds(parentMatrix, {applyParents: applyParents});
      return ui.Rect.zero;
    }
  };
  (null_layer.NullLayer.new = function(lottieDrawable, layerModel) {
    null_layer.NullLayer.__proto__.new.call(this, lottieDrawable, layerModel);
    ;
  }).prototype = null_layer.NullLayer.prototype;
  dart.addTypeTests(null_layer.NullLayer);
  dart.addTypeCaches(null_layer.NullLayer);
  dart.setMethodSignature(null_layer.NullLayer, () => ({
    __proto__: dart.getMethods(null_layer.NullLayer.__proto__),
    drawLayer: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int})
  }));
  dart.setLibraryUri(null_layer.NullLayer, I[76]);
  var color$1 = dart.privateName(animatable_text_properties, "AnimatableTextProperties.color");
  var stroke$ = dart.privateName(animatable_text_properties, "AnimatableTextProperties.stroke");
  var strokeWidth$ = dart.privateName(animatable_text_properties, "AnimatableTextProperties.strokeWidth");
  var tracking$ = dart.privateName(animatable_text_properties, "AnimatableTextProperties.tracking");
  animatable_text_properties.AnimatableTextProperties = class AnimatableTextProperties extends core.Object {
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get stroke() {
      return this[stroke$];
    }
    set stroke(value) {
      super.stroke = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    get tracking() {
      return this[tracking$];
    }
    set tracking(value) {
      super.tracking = value;
    }
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let stroke = opts && 'stroke' in opts ? opts.stroke : null;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      let tracking = opts && 'tracking' in opts ? opts.tracking : null;
      return new animatable_text_properties.AnimatableTextProperties.new({color: color, stroke: stroke, strokeWidth: strokeWidth, tracking: tracking});
    }
  };
  (animatable_text_properties.AnimatableTextProperties.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let stroke = opts && 'stroke' in opts ? opts.stroke : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let tracking = opts && 'tracking' in opts ? opts.tracking : null;
    this[color$1] = color;
    this[stroke$] = stroke;
    this[strokeWidth$] = strokeWidth;
    this[tracking$] = tracking;
    ;
  }).prototype = animatable_text_properties.AnimatableTextProperties.prototype;
  dart.addTypeTests(animatable_text_properties.AnimatableTextProperties);
  dart.addTypeCaches(animatable_text_properties.AnimatableTextProperties);
  dart.setLibraryUri(animatable_text_properties.AnimatableTextProperties, I[77]);
  dart.setFieldSignature(animatable_text_properties.AnimatableTextProperties, () => ({
    __proto__: dart.getFields(animatable_text_properties.AnimatableTextProperties.__proto__),
    color: dart.finalFieldType(dart.nullable(animatable_color_value.AnimatableColorValue)),
    stroke: dart.finalFieldType(dart.nullable(animatable_color_value.AnimatableColorValue)),
    strokeWidth: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    tracking: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue))
  }));
  text_keyframe_animation.TextKeyframeAnimation = class TextKeyframeAnimation extends keyframe_animation.KeyframeAnimation$(document_data.DocumentData) {
    static ['_#new#tearOff'](keyframes) {
      return new text_keyframe_animation.TextKeyframeAnimation.new(keyframes);
    }
    getValue(keyframe, keyframeProgress) {
      let t46, t46$;
      T$.KeyframeOfDocumentData().as(keyframe);
      let valueCallback = this.valueCallback;
      if (valueCallback != null) {
        return dart.nullCheck(valueCallback.getValueInternal(keyframe.startFrame, (t46 = keyframe.endFrame, t46 == null ? 1.7976931348623157e+308 : t46), keyframe.startValue, (t46$ = keyframe.endValue, t46$ == null ? keyframe.startValue : t46$), keyframeProgress, this.getInterpolatedCurrentKeyframeProgress(), this.progress));
      } else if (keyframeProgress !== 1.0 || keyframe.endValue == null) {
        return dart.nullCheck(keyframe.startValue);
      } else {
        return dart.nullCheck(keyframe.endValue);
      }
    }
    setStringValueCallback(valueCallback) {
      super.setValueCallback(new text_keyframe_animation._DocumentDataValueCallback.new(valueCallback));
    }
  };
  (text_keyframe_animation.TextKeyframeAnimation.new = function(keyframes) {
    text_keyframe_animation.TextKeyframeAnimation.__proto__.new.call(this, keyframes);
    ;
  }).prototype = text_keyframe_animation.TextKeyframeAnimation.prototype;
  dart.addTypeTests(text_keyframe_animation.TextKeyframeAnimation);
  dart.addTypeCaches(text_keyframe_animation.TextKeyframeAnimation);
  dart.setMethodSignature(text_keyframe_animation.TextKeyframeAnimation, () => ({
    __proto__: dart.getMethods(text_keyframe_animation.TextKeyframeAnimation.__proto__),
    getValue: dart.fnType(document_data.DocumentData, [dart.nullable(core.Object), core.double]),
    setStringValueCallback: dart.fnType(dart.void, [lottie_value_callback.LottieValueCallback$(core.String)])
  }));
  dart.setLibraryUri(text_keyframe_animation.TextKeyframeAnimation, I[78]);
  var callback = dart.privateName(lottie_value_callback, "LottieValueCallback.callback");
  var _animation = dart.privateName(lottie_value_callback, "_animation");
  var _value$ = dart.privateName(lottie_value_callback, "_value");
  const _is_LottieValueCallback_default = Symbol('_is_LottieValueCallback_default');
  lottie_value_callback.LottieValueCallback$ = dart.generic(T => {
    var __t$LottieFrameInfoOfT = () => (__t$LottieFrameInfoOfT = dart.constFn(lottie_frame_info.LottieFrameInfo$(T)))();
    var __t$LottieFrameInfoOfTToT = () => (__t$LottieFrameInfoOfTToT = dart.constFn(dart.fnType(T, [__t$LottieFrameInfoOfT()])))();
    var __t$LottieFrameInfoOfTToNT = () => (__t$LottieFrameInfoOfTToNT = dart.constFn(dart.nullable(__t$LottieFrameInfoOfTToT())))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    class LottieValueCallback extends core.Object {
      get callback() {
        return this[callback];
      }
      set callback(value) {
        this[callback] = __t$LottieFrameInfoOfTToNT().as(value);
      }
      static ['_#new#tearOff'](T, _value) {
        return new (lottie_value_callback.LottieValueCallback$(T)).new(_value);
      }
      get animation() {
        return this[_animation];
      }
      get value() {
        return this[_value$];
      }
      getValue(frameInfo) {
        __t$LottieFrameInfoOfT().as(frameInfo);
        if (this.callback != null) {
          return dart.nullCheck(this.callback)(frameInfo);
        }
        return this.value;
      }
      setValue(value) {
        __t$TN().as(value);
        this[_value$] = value;
        if (this[_animation] != null) {
          dart.nullCheck(this[_animation]).notifyListeners();
        }
      }
      getValueInternal(startFrame, endFrame, startValue, endValue, linearKeyframeProgress, interpolatedKeyframeProgress, overallProgress) {
        __t$TN().as(startValue);
        __t$TN().as(endValue);
        return this.getValue(new (__t$LottieFrameInfoOfT()).new(startFrame, endFrame, startValue, endValue, linearKeyframeProgress, interpolatedKeyframeProgress, overallProgress));
      }
      setAnimation(animation) {
        this[_animation] = animation;
      }
    }
    (LottieValueCallback.new = function(_value) {
      this[_animation] = null;
      this[callback] = null;
      this[_value$] = _value;
      ;
    }).prototype = LottieValueCallback.prototype;
    dart.addTypeTests(LottieValueCallback);
    LottieValueCallback.prototype[_is_LottieValueCallback_default] = true;
    dart.addTypeCaches(LottieValueCallback);
    dart.setMethodSignature(LottieValueCallback, () => ({
      __proto__: dart.getMethods(LottieValueCallback.__proto__),
      getValue: dart.fnType(dart.nullable(T), [dart.nullable(core.Object)]),
      setValue: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      getValueInternal: dart.fnType(dart.nullable(T), [core.double, dart.nullable(core.double), dart.nullable(core.Object), dart.nullable(core.Object), core.double, core.double, core.double]),
      setAnimation: dart.fnType(dart.void, [dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, dart.nullable(core.Object)))])
    }));
    dart.setGetterSignature(LottieValueCallback, () => ({
      __proto__: dart.getGetters(LottieValueCallback.__proto__),
      animation: dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, dart.nullable(core.Object))),
      value: dart.nullable(T)
    }));
    dart.setLibraryUri(LottieValueCallback, I[79]);
    dart.setFieldSignature(LottieValueCallback, () => ({
      __proto__: dart.getFields(LottieValueCallback.__proto__),
      [_animation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, dart.nullable(core.Object)))),
      [_value$]: dart.fieldType(dart.nullable(T)),
      callback: dart.fieldType(dart.nullable(dart.fnType(T, [lottie_frame_info.LottieFrameInfo$(T)])))
    }));
    return LottieValueCallback;
  });
  lottie_value_callback.LottieValueCallback = lottie_value_callback.LottieValueCallback$();
  dart.addTypeTests(lottie_value_callback.LottieValueCallback, _is_LottieValueCallback_default);
  text_keyframe_animation._DocumentDataValueCallback = class _DocumentDataValueCallback extends lottie_value_callback.LottieValueCallback$(document_data.DocumentData) {
    static ['_#new#tearOff'](valueCallback) {
      return new text_keyframe_animation._DocumentDataValueCallback.new(valueCallback);
    }
    getValue(frameInfo) {
      T$.LottieFrameInfoOfDocumentData().as(frameInfo);
      let stringFrameInfo = new (T$.LottieFrameInfoOfString()).new(frameInfo.startFrame, frameInfo.endFrame, dart.nullCheck(frameInfo.startValue).text, dart.nullCheck(frameInfo.endValue).text, frameInfo.linearKeyframeProgress, frameInfo.interpolatedKeyframeProgress, frameInfo.overallProgress);
      let text = dart.nullCheck(this.valueCallback.getValue(stringFrameInfo));
      let baseDocumentData = frameInfo.interpolatedKeyframeProgress === 1 ? dart.nullCheck(frameInfo.endValue) : dart.nullCheck(frameInfo.startValue);
      return new document_data.DocumentData.new({text: text, fontName: baseDocumentData.fontName, size: baseDocumentData.size, justification: baseDocumentData.justification, tracking: baseDocumentData.tracking, lineHeight: baseDocumentData.lineHeight, baselineShift: baseDocumentData.baselineShift, color: baseDocumentData.color, strokeColor: baseDocumentData.strokeColor, strokeWidth: baseDocumentData.strokeWidth, strokeOverFill: baseDocumentData.strokeOverFill});
    }
  };
  (text_keyframe_animation._DocumentDataValueCallback.new = function(valueCallback) {
    this.valueCallback = valueCallback;
    text_keyframe_animation._DocumentDataValueCallback.__proto__.new.call(this, null);
    ;
  }).prototype = text_keyframe_animation._DocumentDataValueCallback.prototype;
  dart.addTypeTests(text_keyframe_animation._DocumentDataValueCallback);
  dart.addTypeCaches(text_keyframe_animation._DocumentDataValueCallback);
  dart.setMethodSignature(text_keyframe_animation._DocumentDataValueCallback, () => ({
    __proto__: dart.getMethods(text_keyframe_animation._DocumentDataValueCallback.__proto__),
    getValue: dart.fnType(document_data.DocumentData, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(text_keyframe_animation._DocumentDataValueCallback, I[78]);
  dart.setFieldSignature(text_keyframe_animation._DocumentDataValueCallback, () => ({
    __proto__: dart.getFields(text_keyframe_animation._DocumentDataValueCallback.__proto__),
    valueCallback: dart.finalFieldType(lottie_value_callback.LottieValueCallback$(core.String))
  }));
  animatable_text_frame.AnimatableTextFrame = class AnimatableTextFrame extends base_animatable_value.BaseAnimatableValue$(document_data.DocumentData, document_data.DocumentData) {
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_text_frame.AnimatableTextFrame.fromKeyframes(keyframes);
    }
    createAnimation() {
      return new text_keyframe_animation.TextKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_text_frame.AnimatableTextFrame.fromKeyframes = function(keyframes) {
    animatable_text_frame.AnimatableTextFrame.__proto__.fromKeyframes.call(this, keyframes);
    ;
  }).prototype = animatable_text_frame.AnimatableTextFrame.prototype;
  dart.addTypeTests(animatable_text_frame.AnimatableTextFrame);
  dart.addTypeCaches(animatable_text_frame.AnimatableTextFrame);
  dart.setMethodSignature(animatable_text_frame.AnimatableTextFrame, () => ({
    __proto__: dart.getMethods(animatable_text_frame.AnimatableTextFrame.__proto__),
    createAnimation: dart.fnType(text_keyframe_animation.TextKeyframeAnimation, [])
  }));
  dart.setLibraryUri(animatable_text_frame.AnimatableTextFrame, I[80]);
  layer$.LayerType = class LayerType extends core._Enum {
    toString() {
      return "LayerType." + this[_name];
    }
  };
  (layer$.LayerType.new = function(index, name) {
    layer$.LayerType.__proto__.new.call(this, index, name);
    ;
  }).prototype = layer$.LayerType.prototype;
  dart.addTypeTests(layer$.LayerType);
  dart.addTypeCaches(layer$.LayerType);
  dart.setLibraryUri(layer$.LayerType, I[81]);
  dart.setStaticFieldSignature(layer$.LayerType, () => ['values', 'preComp', 'solid', 'image', 'nullLayer', 'shape', 'text', 'unknown']);
  dart.defineExtensionMethods(layer$.LayerType, ['toString']);
  dart.defineLazy(layer$.LayerType, {
    /*layer$.LayerType.values*/get values() {
      return C[62] || CT.C62;
    },
    /*layer$.LayerType.preComp*/get preComp() {
      return C[52] || CT.C52;
    },
    /*layer$.LayerType.solid*/get solid() {
      return C[53] || CT.C53;
    },
    /*layer$.LayerType.image*/get image() {
      return C[54] || CT.C54;
    },
    /*layer$.LayerType.nullLayer*/get nullLayer() {
      return C[55] || CT.C55;
    },
    /*layer$.LayerType.shape*/get shape() {
      return C[51] || CT.C51;
    },
    /*layer$.LayerType.text*/get text() {
      return C[56] || CT.C56;
    },
    /*layer$.LayerType.unknown*/get unknown() {
      return C[57] || CT.C57;
    }
  }, false);
  layer$.MatteType = class MatteType extends core._Enum {
    toString() {
      return "MatteType." + this[_name];
    }
  };
  (layer$.MatteType.new = function(index, name) {
    layer$.MatteType.__proto__.new.call(this, index, name);
    ;
  }).prototype = layer$.MatteType.prototype;
  dart.addTypeTests(layer$.MatteType);
  dart.addTypeCaches(layer$.MatteType);
  dart.setLibraryUri(layer$.MatteType, I[81]);
  dart.setStaticFieldSignature(layer$.MatteType, () => ['values', 'none', 'add', 'invert', 'luma', 'lumaInverted', 'unknown']);
  dart.defineExtensionMethods(layer$.MatteType, ['toString']);
  dart.defineLazy(layer$.MatteType, {
    /*layer$.MatteType.values*/get values() {
      return C[63] || CT.C63;
    },
    /*layer$.MatteType.none*/get none() {
      return C[64] || CT.C64;
    },
    /*layer$.MatteType.add*/get add() {
      return C[65] || CT.C65;
    },
    /*layer$.MatteType.invert*/get invert() {
      return C[66] || CT.C66;
    },
    /*layer$.MatteType.luma*/get luma() {
      return C[67] || CT.C67;
    },
    /*layer$.MatteType.lumaInverted*/get lumaInverted() {
      return C[68] || CT.C68;
    },
    /*layer$.MatteType.unknown*/get unknown() {
      return C[69] || CT.C69;
    }
  }, false);
  var shapes$ = dart.privateName(layer$, "Layer.shapes");
  var composition$2 = dart.privateName(layer$, "Layer.composition");
  var name$16 = dart.privateName(layer$, "Layer.name");
  var id$ = dart.privateName(layer$, "Layer.id");
  var layerType$ = dart.privateName(layer$, "Layer.layerType");
  var parentId$ = dart.privateName(layer$, "Layer.parentId");
  var refId$ = dart.privateName(layer$, "Layer.refId");
  var masks$ = dart.privateName(layer$, "Layer.masks");
  var transform$0 = dart.privateName(layer$, "Layer.transform");
  var solidWidth$ = dart.privateName(layer$, "Layer.solidWidth");
  var solidHeight$ = dart.privateName(layer$, "Layer.solidHeight");
  var solidColor$ = dart.privateName(layer$, "Layer.solidColor");
  var timeStretch$ = dart.privateName(layer$, "Layer.timeStretch");
  var startFrame$0 = dart.privateName(layer$, "Layer.startFrame");
  var preCompWidth$ = dart.privateName(layer$, "Layer.preCompWidth");
  var preCompHeight$ = dart.privateName(layer$, "Layer.preCompHeight");
  var text$ = dart.privateName(layer$, "Layer.text");
  var textProperties$ = dart.privateName(layer$, "Layer.textProperties");
  var inOutKeyframes$ = dart.privateName(layer$, "Layer.inOutKeyframes");
  var matteType$ = dart.privateName(layer$, "Layer.matteType");
  var timeRemapping$ = dart.privateName(layer$, "Layer.timeRemapping");
  var isHidden$ = dart.privateName(layer$, "Layer.isHidden");
  var blurEffect$ = dart.privateName(layer$, "Layer.blurEffect");
  var dropShadowEffect$ = dart.privateName(layer$, "Layer.dropShadowEffect");
  layer$.Layer = class Layer extends core.Object {
    get shapes() {
      return this[shapes$];
    }
    set shapes(value) {
      super.shapes = value;
    }
    get composition() {
      return this[composition$2];
    }
    set composition(value) {
      super.composition = value;
    }
    get name() {
      return this[name$16];
    }
    set name(value) {
      super.name = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get layerType() {
      return this[layerType$];
    }
    set layerType(value) {
      super.layerType = value;
    }
    get parentId() {
      return this[parentId$];
    }
    set parentId(value) {
      super.parentId = value;
    }
    get refId() {
      return this[refId$];
    }
    set refId(value) {
      super.refId = value;
    }
    get masks() {
      return this[masks$];
    }
    set masks(value) {
      super.masks = value;
    }
    get transform() {
      return this[transform$0];
    }
    set transform(value) {
      super.transform = value;
    }
    get solidWidth() {
      return this[solidWidth$];
    }
    set solidWidth(value) {
      super.solidWidth = value;
    }
    get solidHeight() {
      return this[solidHeight$];
    }
    set solidHeight(value) {
      super.solidHeight = value;
    }
    get solidColor() {
      return this[solidColor$];
    }
    set solidColor(value) {
      super.solidColor = value;
    }
    get timeStretch() {
      return this[timeStretch$];
    }
    set timeStretch(value) {
      super.timeStretch = value;
    }
    get startFrame() {
      return this[startFrame$0];
    }
    set startFrame(value) {
      super.startFrame = value;
    }
    get preCompWidth() {
      return this[preCompWidth$];
    }
    set preCompWidth(value) {
      super.preCompWidth = value;
    }
    get preCompHeight() {
      return this[preCompHeight$];
    }
    set preCompHeight(value) {
      super.preCompHeight = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get textProperties() {
      return this[textProperties$];
    }
    set textProperties(value) {
      super.textProperties = value;
    }
    get inOutKeyframes() {
      return this[inOutKeyframes$];
    }
    set inOutKeyframes(value) {
      super.inOutKeyframes = value;
    }
    get matteType() {
      return this[matteType$];
    }
    set matteType(value) {
      super.matteType = value;
    }
    get timeRemapping() {
      return this[timeRemapping$];
    }
    set timeRemapping(value) {
      super.timeRemapping = value;
    }
    get isHidden() {
      return this[isHidden$];
    }
    set isHidden(value) {
      super.isHidden = value;
    }
    get blurEffect() {
      return this[blurEffect$];
    }
    set blurEffect(value) {
      super.blurEffect = value;
    }
    get dropShadowEffect() {
      return this[dropShadowEffect$];
    }
    set dropShadowEffect(value) {
      super.dropShadowEffect = value;
    }
    get startProgress() {
      return this.startFrame / this.composition.durationFrames;
    }
    static ['_#new#tearOff'](opts) {
      let shapes = opts && 'shapes' in opts ? opts.shapes : null;
      let composition = opts && 'composition' in opts ? opts.composition : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let id = opts && 'id' in opts ? opts.id : null;
      let layerType = opts && 'layerType' in opts ? opts.layerType : null;
      let parentId = opts && 'parentId' in opts ? opts.parentId : null;
      let refId = opts && 'refId' in opts ? opts.refId : null;
      let masks = opts && 'masks' in opts ? opts.masks : null;
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let solidWidth = opts && 'solidWidth' in opts ? opts.solidWidth : null;
      let solidHeight = opts && 'solidHeight' in opts ? opts.solidHeight : null;
      let solidColor = opts && 'solidColor' in opts ? opts.solidColor : null;
      let timeStretch = opts && 'timeStretch' in opts ? opts.timeStretch : null;
      let startFrame = opts && 'startFrame' in opts ? opts.startFrame : null;
      let preCompWidth = opts && 'preCompWidth' in opts ? opts.preCompWidth : null;
      let preCompHeight = opts && 'preCompHeight' in opts ? opts.preCompHeight : null;
      let text = opts && 'text' in opts ? opts.text : null;
      let textProperties = opts && 'textProperties' in opts ? opts.textProperties : null;
      let inOutKeyframes = opts && 'inOutKeyframes' in opts ? opts.inOutKeyframes : null;
      let matteType = opts && 'matteType' in opts ? opts.matteType : null;
      let timeRemapping = opts && 'timeRemapping' in opts ? opts.timeRemapping : null;
      let isHidden = opts && 'isHidden' in opts ? opts.isHidden : null;
      let blurEffect = opts && 'blurEffect' in opts ? opts.blurEffect : null;
      let dropShadowEffect = opts && 'dropShadowEffect' in opts ? opts.dropShadowEffect : null;
      return new layer$.Layer.new({shapes: shapes, composition: composition, name: name, id: id, layerType: layerType, parentId: parentId, refId: refId, masks: masks, transform: transform, solidWidth: solidWidth, solidHeight: solidHeight, solidColor: solidColor, timeStretch: timeStretch, startFrame: startFrame, preCompWidth: preCompWidth, preCompHeight: preCompHeight, text: text, textProperties: textProperties, inOutKeyframes: inOutKeyframes, matteType: matteType, timeRemapping: timeRemapping, isHidden: isHidden, blurEffect: blurEffect, dropShadowEffect: dropShadowEffect});
    }
    toString() {
      return this.toStringWithPrefix("");
    }
    toStringWithPrefix(prefix) {
      let t50, t50$, t50$0, t50$1, t50$2, t50$3, t50$4, t50$5;
      let sb = (t50 = new core.StringBuffer.new(), (() => {
        t50.write(prefix);
        t50.write(this.name);
        t50.write("\n");
        return t50;
      })());
      let parent = this.composition.layerModelForId(this.parentId);
      if (parent != null) {
        t50$ = sb;
        (() => {
          t50$.write("\t\tParents: ");
          t50$.write(parent.name);
          return t50$;
        })();
        parent = this.composition.layerModelForId(parent.parentId);
        while (parent != null) {
          t50$0 = sb;
          (() => {
            t50$0.write("->");
            t50$0.write(parent.name);
            return t50$0;
          })();
          parent = this.composition.layerModelForId(parent.parentId);
        }
        t50$1 = sb;
        (() => {
          t50$1.write(prefix);
          t50$1.write("\n");
          return t50$1;
        })();
      }
      if (this.masks[$isNotEmpty]) {
        t50$2 = sb;
        (() => {
          t50$2.write(prefix);
          t50$2.write("\tMasks: ");
          t50$2.write(this.masks[$length]);
          t50$2.write("\n");
          return t50$2;
        })();
      }
      if (this.solidWidth !== 0 && this.solidHeight !== 0) {
        t50$3 = sb;
        (() => {
          t50$3.write(prefix);
          t50$3.write("\tBackground: ");
          t50$3.write(dart.str(this.solidWidth) + "x" + dart.str(this.solidHeight) + " " + dart.str(this.solidColor));
          return t50$3;
        })();
      }
      if (this.shapes[$isNotEmpty]) {
        t50$4 = sb;
        (() => {
          t50$4.write(prefix);
          t50$4.write("\tShapes:\n");
          return t50$4;
        })();
        for (let shape of this.shapes) {
          t50$5 = sb;
          (() => {
            t50$5.write(prefix);
            t50$5.write("\t\t");
            t50$5.write(shape);
            t50$5.write("\n");
            return t50$5;
          })();
        }
      }
      return sb.toString();
    }
  };
  (layer$.Layer.new = function(opts) {
    let shapes = opts && 'shapes' in opts ? opts.shapes : null;
    let composition = opts && 'composition' in opts ? opts.composition : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let layerType = opts && 'layerType' in opts ? opts.layerType : null;
    let parentId = opts && 'parentId' in opts ? opts.parentId : null;
    let refId = opts && 'refId' in opts ? opts.refId : null;
    let masks = opts && 'masks' in opts ? opts.masks : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let solidWidth = opts && 'solidWidth' in opts ? opts.solidWidth : null;
    let solidHeight = opts && 'solidHeight' in opts ? opts.solidHeight : null;
    let solidColor = opts && 'solidColor' in opts ? opts.solidColor : null;
    let timeStretch = opts && 'timeStretch' in opts ? opts.timeStretch : null;
    let startFrame = opts && 'startFrame' in opts ? opts.startFrame : null;
    let preCompWidth = opts && 'preCompWidth' in opts ? opts.preCompWidth : null;
    let preCompHeight = opts && 'preCompHeight' in opts ? opts.preCompHeight : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let textProperties = opts && 'textProperties' in opts ? opts.textProperties : null;
    let inOutKeyframes = opts && 'inOutKeyframes' in opts ? opts.inOutKeyframes : null;
    let matteType = opts && 'matteType' in opts ? opts.matteType : null;
    let timeRemapping = opts && 'timeRemapping' in opts ? opts.timeRemapping : null;
    let isHidden = opts && 'isHidden' in opts ? opts.isHidden : null;
    let blurEffect = opts && 'blurEffect' in opts ? opts.blurEffect : null;
    let dropShadowEffect = opts && 'dropShadowEffect' in opts ? opts.dropShadowEffect : null;
    this[shapes$] = shapes;
    this[composition$2] = composition;
    this[name$16] = name;
    this[id$] = id;
    this[layerType$] = layerType;
    this[parentId$] = parentId;
    this[refId$] = refId;
    this[masks$] = masks;
    this[transform$0] = transform;
    this[solidWidth$] = solidWidth;
    this[solidHeight$] = solidHeight;
    this[solidColor$] = solidColor;
    this[timeStretch$] = timeStretch;
    this[startFrame$0] = startFrame;
    this[preCompWidth$] = preCompWidth;
    this[preCompHeight$] = preCompHeight;
    this[text$] = text;
    this[textProperties$] = textProperties;
    this[inOutKeyframes$] = inOutKeyframes;
    this[matteType$] = matteType;
    this[timeRemapping$] = timeRemapping;
    this[isHidden$] = isHidden;
    this[blurEffect$] = blurEffect;
    this[dropShadowEffect$] = dropShadowEffect;
    ;
  }).prototype = layer$.Layer.prototype;
  dart.addTypeTests(layer$.Layer);
  dart.addTypeCaches(layer$.Layer);
  dart.setMethodSignature(layer$.Layer, () => ({
    __proto__: dart.getMethods(layer$.Layer.__proto__),
    toStringWithPrefix: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(layer$.Layer, () => ({
    __proto__: dart.getGetters(layer$.Layer.__proto__),
    startProgress: core.double
  }));
  dart.setLibraryUri(layer$.Layer, I[81]);
  dart.setFieldSignature(layer$.Layer, () => ({
    __proto__: dart.getFields(layer$.Layer.__proto__),
    shapes: dart.finalFieldType(core.List$(content_model.ContentModel)),
    composition: dart.finalFieldType(composition$.LottieComposition),
    name: dart.finalFieldType(core.String),
    id: dart.finalFieldType(core.int),
    layerType: dart.finalFieldType(layer$.LayerType),
    parentId: dart.finalFieldType(core.int),
    refId: dart.finalFieldType(dart.nullable(core.String)),
    masks: dart.finalFieldType(core.List$(mask.Mask)),
    transform: dart.finalFieldType(animatable_transform.AnimatableTransform),
    solidWidth: dart.finalFieldType(core.int),
    solidHeight: dart.finalFieldType(core.int),
    solidColor: dart.finalFieldType(ui.Color),
    timeStretch: dart.finalFieldType(core.double),
    startFrame: dart.finalFieldType(core.double),
    preCompWidth: dart.finalFieldType(core.int),
    preCompHeight: dart.finalFieldType(core.int),
    text: dart.finalFieldType(dart.nullable(animatable_text_frame.AnimatableTextFrame)),
    textProperties: dart.finalFieldType(dart.nullable(animatable_text_properties.AnimatableTextProperties)),
    inOutKeyframes: dart.finalFieldType(core.List$(keyframe$.Keyframe$(core.double))),
    matteType: dart.finalFieldType(layer$.MatteType),
    timeRemapping: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    isHidden: dart.finalFieldType(core.bool),
    blurEffect: dart.finalFieldType(dart.nullable(blur_effect.BlurEffect)),
    dropShadowEffect: dart.finalFieldType(dart.nullable(drop_shadow_effect.DropShadowEffect))
  }));
  dart.defineExtensionMethods(layer$.Layer, ['toString']);
  var paint$0 = dart.privateName(image_layer, "ImageLayer.paint");
  var _colorFilterAnimation$3 = dart.privateName(image_layer, "_colorFilterAnimation");
  image_layer.ImageLayer = class ImageLayer extends base_layer.BaseLayer {
    get paint() {
      return this[paint$0];
    }
    set paint(value) {
      super.paint = value;
    }
    static ['_#new#tearOff'](lottieDrawable, layerModel) {
      return new image_layer.ImageLayer.new(lottieDrawable, layerModel);
    }
    drawLayer(canvas, size, parentMatrix, opts) {
      let t50;
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      let bitmap = this.getBitmap();
      if (bitmap == null) {
        return;
      }
      let density = ui.window.devicePixelRatio;
      this.paint.filterQuality = (t50 = this.lottieDrawable.filterQuality, t50 == null ? ui.FilterQuality.low : t50);
      utils['PaintExtension|setAlpha'](this.paint, parentAlpha);
      if (this[_colorFilterAnimation$3] != null) {
        this.paint.colorFilter = dart.nullCheck(this[_colorFilterAnimation$3]).value;
      }
      canvas.save();
      canvas.transform(parentMatrix.storage);
      let src = new ui.Rect.fromLTWH(0.0, 0.0, bitmap.width[$toDouble](), bitmap.height[$toDouble]());
      let dst = new ui.Rect.fromLTWH(0.0, 0.0, bitmap.width * density, bitmap.height[$toDouble]() * density);
      canvas.drawImageRect(bitmap, src, dst, this.paint);
      canvas.restore();
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      let superBounds = super.getBounds(parentMatrix, {applyParents: applyParents});
      let bitmap = this.getBitmap();
      if (bitmap != null) {
        let bounds = new ui.Rect.fromLTWH(0.0, 0.0, bitmap.width * ui.window.devicePixelRatio, bitmap.height * ui.window.devicePixelRatio);
        return utils['Matrix4Extension|mapRect'](this.boundsMatrix, bounds);
      }
      return superBounds;
    }
    getBitmap() {
      let refId = this.layerModel.refId;
      return this.lottieDrawable.getImageAsset(refId);
    }
    addValueCallback(T, property, callback) {
      super.addValueCallback(T, property, callback);
      if (dart.equals(property, lottie_property.LottieProperty.colorFilter)) {
        if (callback == null) {
          this[_colorFilterAnimation$3] = null;
        } else {
          this[_colorFilterAnimation$3] = new (T$.ValueCallbackKeyframeAnimationOfColorFilter$ColorFilterN()).new(T$.LottieValueCallbackOfColorFilter().as(callback), null);
        }
      }
    }
  };
  (image_layer.ImageLayer.new = function(lottieDrawable, layerModel) {
    this[paint$0] = ui.Paint.new();
    this[_colorFilterAnimation$3] = null;
    image_layer.ImageLayer.__proto__.new.call(this, lottieDrawable, layerModel);
    ;
  }).prototype = image_layer.ImageLayer.prototype;
  dart.addTypeTests(image_layer.ImageLayer);
  dart.addTypeCaches(image_layer.ImageLayer);
  dart.setMethodSignature(image_layer.ImageLayer, () => ({
    __proto__: dart.getMethods(image_layer.ImageLayer.__proto__),
    drawLayer: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    getBitmap: dart.fnType(dart.nullable(ui.Image), []),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(image_layer.ImageLayer, I[82]);
  dart.setFieldSignature(image_layer.ImageLayer, () => ({
    __proto__: dart.getFields(image_layer.ImageLayer.__proto__),
    paint: dart.finalFieldType(ui.Paint),
    [_colorFilterAnimation$3]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.ColorFilter, dart.nullable(ui.ColorFilter))))
  }));
  color_keyframe_animation.ColorKeyframeAnimation = class ColorKeyframeAnimation extends keyframe_animation.KeyframeAnimation$(ui.Color) {
    static ['_#new#tearOff'](keyframes) {
      return new color_keyframe_animation.ColorKeyframeAnimation.new(keyframes);
    }
    getValue(keyframe, keyframeProgress) {
      T$.KeyframeOfColor().as(keyframe);
      if (keyframe.startValue == null || keyframe.endValue == null) {
        dart.throw(core.Exception.new("Missing values for keyframe."));
      }
      let startColor = keyframe.startValue;
      let endColor = keyframe.endValue;
      if (this.valueCallback != null) {
        let value = dart.nullCheck(this.valueCallback).getValueInternal(keyframe.startFrame, keyframe.endFrame, startColor, endColor, keyframeProgress, this.getLinearCurrentKeyframeProgress(), this.progress);
        if (value != null) {
          return value;
        }
      }
      return gamma_evaluator.GammaEvaluator.evaluate(keyframeProgress[$clamp](0, 1)[$toDouble](), dart.nullCheck(startColor), dart.nullCheck(endColor));
    }
  };
  (color_keyframe_animation.ColorKeyframeAnimation.new = function(keyframes) {
    color_keyframe_animation.ColorKeyframeAnimation.__proto__.new.call(this, keyframes);
    ;
  }).prototype = color_keyframe_animation.ColorKeyframeAnimation.prototype;
  dart.addTypeTests(color_keyframe_animation.ColorKeyframeAnimation);
  dart.addTypeCaches(color_keyframe_animation.ColorKeyframeAnimation);
  dart.setMethodSignature(color_keyframe_animation.ColorKeyframeAnimation, () => ({
    __proto__: dart.getMethods(color_keyframe_animation.ColorKeyframeAnimation.__proto__),
    getValue: dart.fnType(ui.Color, [dart.nullable(core.Object), core.double])
  }));
  dart.setLibraryUri(color_keyframe_animation.ColorKeyframeAnimation, I[83]);
  animatable_color_value.AnimatableColorValue = class AnimatableColorValue extends base_animatable_value.BaseAnimatableValue$(ui.Color, ui.Color) {
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_color_value.AnimatableColorValue.fromKeyframes(keyframes);
    }
    createAnimation() {
      return new color_keyframe_animation.ColorKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_color_value.AnimatableColorValue.fromKeyframes = function(keyframes) {
    animatable_color_value.AnimatableColorValue.__proto__.fromKeyframes.call(this, keyframes);
    ;
  }).prototype = animatable_color_value.AnimatableColorValue.prototype;
  dart.addTypeTests(animatable_color_value.AnimatableColorValue);
  dart.addTypeCaches(animatable_color_value.AnimatableColorValue);
  dart.setMethodSignature(animatable_color_value.AnimatableColorValue, () => ({
    __proto__: dart.getMethods(animatable_color_value.AnimatableColorValue.__proto__),
    createAnimation: dart.fnType(color_keyframe_animation.ColorKeyframeAnimation, [])
  }));
  dart.setLibraryUri(animatable_color_value.AnimatableColorValue, I[84]);
  var color$2 = dart.privateName(drop_shadow_effect, "DropShadowEffect.color");
  var opacity$3 = dart.privateName(drop_shadow_effect, "DropShadowEffect.opacity");
  var direction$ = dart.privateName(drop_shadow_effect, "DropShadowEffect.direction");
  var distance$ = dart.privateName(drop_shadow_effect, "DropShadowEffect.distance");
  var radius$ = dart.privateName(drop_shadow_effect, "DropShadowEffect.radius");
  drop_shadow_effect.DropShadowEffect = class DropShadowEffect extends core.Object {
    get color() {
      return this[color$2];
    }
    set color(value) {
      super.color = value;
    }
    get opacity() {
      return this[opacity$3];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let direction = opts && 'direction' in opts ? opts.direction : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      return new drop_shadow_effect.DropShadowEffect.new({color: color, opacity: opacity, direction: direction, distance: distance, radius: radius});
    }
    static createEmpty() {
      return new drop_shadow_effect.DropShadowEffect.new({color: new animatable_color_value.AnimatableColorValue.fromKeyframes(T$.JSArrayOfKeyframeOfColor().of([new (T$.KeyframeOfColor()).nonAnimated(C[36] || CT.C36)])), direction: new animatable_double_value.AnimatableDoubleValue.new(), radius: new animatable_double_value.AnimatableDoubleValue.new(), distance: new animatable_double_value.AnimatableDoubleValue.new(), opacity: new animatable_double_value.AnimatableDoubleValue.new()});
    }
  };
  (drop_shadow_effect.DropShadowEffect.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let direction = opts && 'direction' in opts ? opts.direction : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    this[color$2] = color;
    this[opacity$3] = opacity;
    this[direction$] = direction;
    this[distance$] = distance;
    this[radius$] = radius;
    ;
  }).prototype = drop_shadow_effect.DropShadowEffect.prototype;
  dart.addTypeTests(drop_shadow_effect.DropShadowEffect);
  dart.addTypeCaches(drop_shadow_effect.DropShadowEffect);
  dart.setStaticMethodSignature(drop_shadow_effect.DropShadowEffect, () => ['createEmpty']);
  dart.setLibraryUri(drop_shadow_effect.DropShadowEffect, I[85]);
  dart.setFieldSignature(drop_shadow_effect.DropShadowEffect, () => ({
    __proto__: dart.getFields(drop_shadow_effect.DropShadowEffect.__proto__),
    color: dart.finalFieldType(animatable_color_value.AnimatableColorValue),
    opacity: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    direction: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    distance: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    radius: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue)
  }));
  var blurriness$ = dart.privateName(blur_effect, "BlurEffect.blurriness");
  blur_effect.BlurEffect = class BlurEffect extends core.Object {
    get blurriness() {
      return this[blurriness$];
    }
    set blurriness(value) {
      super.blurriness = value;
    }
    static ['_#new#tearOff'](blurriness) {
      return new blur_effect.BlurEffect.new(blurriness);
    }
  };
  (blur_effect.BlurEffect.new = function(blurriness) {
    this[blurriness$] = blurriness;
    ;
  }).prototype = blur_effect.BlurEffect.prototype;
  dart.addTypeTests(blur_effect.BlurEffect);
  dart.addTypeCaches(blur_effect.BlurEffect);
  dart.setLibraryUri(blur_effect.BlurEffect, I[86]);
  dart.setFieldSignature(blur_effect.BlurEffect, () => ({
    __proto__: dart.getFields(blur_effect.BlurEffect.__proto__),
    blurriness: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue)
  }));
  animatable_scale_value.AnimatableScaleValue = class AnimatableScaleValue extends base_animatable_value.BaseAnimatableValue$(ui.Offset, ui.Offset) {
    static ['_#one#tearOff']() {
      return new animatable_scale_value.AnimatableScaleValue.one();
    }
    static ['_#new#tearOff'](value) {
      return new animatable_scale_value.AnimatableScaleValue.new(value);
    }
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_scale_value.AnimatableScaleValue.fromKeyframes(keyframes);
    }
    createAnimation() {
      return new point_keyframe_animation.PointKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_scale_value.AnimatableScaleValue.one = function() {
    animatable_scale_value.AnimatableScaleValue.new.call(this, C[39] || CT.C39);
  }).prototype = animatable_scale_value.AnimatableScaleValue.prototype;
  (animatable_scale_value.AnimatableScaleValue.new = function(value) {
    animatable_scale_value.AnimatableScaleValue.__proto__.fromValue.call(this, value);
    ;
  }).prototype = animatable_scale_value.AnimatableScaleValue.prototype;
  (animatable_scale_value.AnimatableScaleValue.fromKeyframes = function(keyframes) {
    animatable_scale_value.AnimatableScaleValue.__proto__.fromKeyframes.call(this, keyframes);
    ;
  }).prototype = animatable_scale_value.AnimatableScaleValue.prototype;
  dart.addTypeTests(animatable_scale_value.AnimatableScaleValue);
  dart.addTypeCaches(animatable_scale_value.AnimatableScaleValue);
  dart.setMethodSignature(animatable_scale_value.AnimatableScaleValue, () => ({
    __proto__: dart.getMethods(animatable_scale_value.AnimatableScaleValue.__proto__),
    createAnimation: dart.fnType(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset), [])
  }));
  dart.setLibraryUri(animatable_scale_value.AnimatableScaleValue, I[87]);
  point_keyframe_animation.PointKeyframeAnimation = class PointKeyframeAnimation extends keyframe_animation.KeyframeAnimation$(ui.Offset) {
    static ['_#new#tearOff'](keyframes) {
      return new point_keyframe_animation.PointKeyframeAnimation.new(keyframes);
    }
    getValue(keyframe, keyframeProgress) {
      T$.KeyframeOfOffset().as(keyframe);
      return this.getValueSplitDimension(keyframe, keyframeProgress, keyframeProgress, keyframeProgress);
    }
    getValueSplitDimension(keyframe, linearKeyframeProgress, xKeyframeProgress, yKeyframeProgress) {
      T$.KeyframeOfOffset().as(keyframe);
      if (keyframe.startValue == null || keyframe.endValue == null) {
        dart.throw(core.Exception.new("Missing values for keyframe."));
      }
      let startPoint = dart.nullCheck(keyframe.startValue);
      let endPoint = dart.nullCheck(keyframe.endValue);
      if (this.valueCallback != null) {
        let value = dart.nullCheck(this.valueCallback).getValueInternal(keyframe.startFrame, keyframe.endFrame, startPoint, endPoint, linearKeyframeProgress, this.getLinearCurrentKeyframeProgress(), this.progress);
        if (value != null) {
          return value;
        }
      }
      return new ui.Offset.new(startPoint.dx + xKeyframeProgress * (endPoint.dx - startPoint.dx), startPoint.dy + yKeyframeProgress * (endPoint.dy - startPoint.dy));
    }
  };
  (point_keyframe_animation.PointKeyframeAnimation.new = function(keyframes) {
    point_keyframe_animation.PointKeyframeAnimation.__proto__.new.call(this, keyframes);
    ;
  }).prototype = point_keyframe_animation.PointKeyframeAnimation.prototype;
  dart.addTypeTests(point_keyframe_animation.PointKeyframeAnimation);
  dart.addTypeCaches(point_keyframe_animation.PointKeyframeAnimation);
  dart.setMethodSignature(point_keyframe_animation.PointKeyframeAnimation, () => ({
    __proto__: dart.getMethods(point_keyframe_animation.PointKeyframeAnimation.__proto__),
    getValue: dart.fnType(ui.Offset, [dart.nullable(core.Object), core.double])
  }));
  dart.setLibraryUri(point_keyframe_animation.PointKeyframeAnimation, I[88]);
  shape_trim_path.ShapeTrimPathType = class ShapeTrimPathType extends core._Enum {
    toString() {
      return "ShapeTrimPathType." + this[_name];
    }
  };
  (shape_trim_path.ShapeTrimPathType.new = function(index, name) {
    shape_trim_path.ShapeTrimPathType.__proto__.new.call(this, index, name);
    ;
  }).prototype = shape_trim_path.ShapeTrimPathType.prototype;
  dart.addTypeTests(shape_trim_path.ShapeTrimPathType);
  dart.addTypeCaches(shape_trim_path.ShapeTrimPathType);
  dart.setLibraryUri(shape_trim_path.ShapeTrimPathType, I[89]);
  dart.setStaticFieldSignature(shape_trim_path.ShapeTrimPathType, () => ['values', 'simultaneously', 'individually']);
  dart.defineExtensionMethods(shape_trim_path.ShapeTrimPathType, ['toString']);
  dart.defineLazy(shape_trim_path.ShapeTrimPathType, {
    /*shape_trim_path.ShapeTrimPathType.values*/get values() {
      return C[70] || CT.C70;
    },
    /*shape_trim_path.ShapeTrimPathType.simultaneously*/get simultaneously() {
      return C[71] || CT.C71;
    },
    /*shape_trim_path.ShapeTrimPathType.individually*/get individually() {
      return C[72] || CT.C72;
    }
  }, false);
  var name$17 = dart.privateName(shape_trim_path, "ShapeTrimPath.name");
  var type$0 = dart.privateName(shape_trim_path, "ShapeTrimPath.type");
  var start$ = dart.privateName(shape_trim_path, "ShapeTrimPath.start");
  var end$ = dart.privateName(shape_trim_path, "ShapeTrimPath.end");
  var offset$0 = dart.privateName(shape_trim_path, "ShapeTrimPath.offset");
  var hidden$9 = dart.privateName(shape_trim_path, "ShapeTrimPath.hidden");
  shape_trim_path.ShapeTrimPath = class ShapeTrimPath extends core.Object {
    get name() {
      return this[name$17];
    }
    set name(value) {
      super.name = value;
    }
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get offset() {
      return this[offset$0];
    }
    set offset(value) {
      super.offset = value;
    }
    get hidden() {
      return this[hidden$9];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let start = opts && 'start' in opts ? opts.start : null;
      let end = opts && 'end' in opts ? opts.end : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new shape_trim_path.ShapeTrimPath.new({name: name, type: type, start: start, end: end, offset: offset, hidden: hidden});
    }
    toContent(drawable, layer) {
      return new trim_path_content.TrimPathContent.new(layer, this);
    }
    toString() {
      return "Trim Path: {start: " + dart.str(this.start) + ", end: " + dart.str(this.end) + ", offset: " + dart.str(this.offset) + "}";
    }
    static typeForId(id) {
      switch (id) {
        case 1:
          {
            return shape_trim_path.ShapeTrimPathType.simultaneously;
          }
        case 2:
          {
            return shape_trim_path.ShapeTrimPathType.individually;
          }
        default:
          {
            dart.throw(core.Exception.new("Unknown trim path type " + dart.str(id)));
          }
      }
    }
  };
  (shape_trim_path.ShapeTrimPath.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let start = opts && 'start' in opts ? opts.start : null;
    let end = opts && 'end' in opts ? opts.end : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$17] = name;
    this[type$0] = type;
    this[start$] = start;
    this[end$] = end;
    this[offset$0] = offset;
    this[hidden$9] = hidden;
    ;
  }).prototype = shape_trim_path.ShapeTrimPath.prototype;
  dart.addTypeTests(shape_trim_path.ShapeTrimPath);
  dart.addTypeCaches(shape_trim_path.ShapeTrimPath);
  shape_trim_path.ShapeTrimPath[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(shape_trim_path.ShapeTrimPath, () => ({
    __proto__: dart.getMethods(shape_trim_path.ShapeTrimPath.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setStaticMethodSignature(shape_trim_path.ShapeTrimPath, () => ['typeForId']);
  dart.setLibraryUri(shape_trim_path.ShapeTrimPath, I[89]);
  dart.setFieldSignature(shape_trim_path.ShapeTrimPath, () => ({
    __proto__: dart.getFields(shape_trim_path.ShapeTrimPath.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    type: dart.finalFieldType(shape_trim_path.ShapeTrimPathType),
    start: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    end: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    offset: dart.finalFieldType(animatable_double_value.AnimatableDoubleValue),
    hidden: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(shape_trim_path.ShapeTrimPath, ['toString']);
  var name$18 = dart.privateName(trim_path_content, "TrimPathContent.name");
  var hidden = dart.privateName(trim_path_content, "TrimPathContent.hidden");
  var type = dart.privateName(trim_path_content, "TrimPathContent.type");
  var start = dart.privateName(trim_path_content, "TrimPathContent.start");
  var end = dart.privateName(trim_path_content, "TrimPathContent.end");
  var offset = dart.privateName(trim_path_content, "TrimPathContent.offset");
  var _listeners = dart.privateName(trim_path_content, "_listeners");
  var _onValueChanged$ = dart.privateName(trim_path_content, "_onValueChanged");
  trim_path_content.TrimPathContent = class TrimPathContent extends core.Object {
    get name() {
      return this[name$18];
    }
    set name(value) {
      super.name = value;
    }
    get hidden() {
      return this[hidden];
    }
    set hidden(value) {
      super.hidden = value;
    }
    get type() {
      return this[type];
    }
    set type(value) {
      super.type = value;
    }
    get start() {
      return this[start];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end];
    }
    set end(value) {
      super.end = value;
    }
    get offset() {
      return this[offset];
    }
    set offset(value) {
      super.offset = value;
    }
    static ['_#new#tearOff'](layer, trimPath) {
      return new trim_path_content.TrimPathContent.new(layer, trimPath);
    }
    [_onValueChanged$]() {
      for (let i = 0; i < this[_listeners][$length]; i = i + 1) {
        this[_listeners][$_get](i)();
      }
    }
    setContents(contentsBefore, contentsAfter) {
    }
    addListener(listener) {
      this[_listeners][$add](listener);
    }
  };
  (trim_path_content.TrimPathContent.new = function(layer, trimPath) {
    this[_listeners] = T$.JSArrayOfVoidTovoid().of([]);
    this[name$18] = trimPath.name;
    this[hidden] = trimPath.hidden;
    this[type] = trimPath.type;
    this[start] = trimPath.start.createAnimation();
    this[end] = trimPath.end.createAnimation();
    this[offset] = trimPath.offset.createAnimation();
    layer.addAnimation(this.start);
    layer.addAnimation(this.end);
    layer.addAnimation(this.offset);
    this.start.addUpdateListener(dart.bind(this, _onValueChanged$));
    this.end.addUpdateListener(dart.bind(this, _onValueChanged$));
    this.offset.addUpdateListener(dart.bind(this, _onValueChanged$));
  }).prototype = trim_path_content.TrimPathContent.prototype;
  dart.addTypeTests(trim_path_content.TrimPathContent);
  dart.addTypeCaches(trim_path_content.TrimPathContent);
  trim_path_content.TrimPathContent[dart.implements] = () => [content.Content];
  dart.setMethodSignature(trim_path_content.TrimPathContent, () => ({
    __proto__: dart.getMethods(trim_path_content.TrimPathContent.__proto__),
    [_onValueChanged$]: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(trim_path_content.TrimPathContent, I[90]);
  dart.setFieldSignature(trim_path_content.TrimPathContent, () => ({
    __proto__: dart.getFields(trim_path_content.TrimPathContent.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    hidden: dart.finalFieldType(core.bool),
    [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    type: dart.finalFieldType(dart.nullable(shape_trim_path.ShapeTrimPathType)),
    start: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double)),
    end: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double)),
    offset: dart.finalFieldType(base_keyframe_animation.BaseKeyframeAnimation$(core.Object, core.double))
  }));
  utils$.Utils = class Utils extends core.Object {
    static createPath(startPoint, endPoint, cp1, cp2) {
      let path = path_factory.PathFactory.create();
      path.moveTo(startPoint.dx, startPoint.dy);
      if (cp1 != null && cp2 != null && (cp1.distance !== 0 || cp2.distance !== 0)) {
        path.cubicTo(startPoint.dx + cp1.dx, startPoint.dy + cp1.dy, endPoint.dx + cp2.dx, endPoint.dy + cp2.dy, endPoint.dx, endPoint.dy);
      } else {
        path.lineTo(endPoint.dx, endPoint.dy);
      }
      return path;
    }
    static hashFor(a, b, c, d) {
      let result = 17;
      if (a !== 0) {
        result = (31 * result * a)[$round]();
      }
      if (b !== 0) {
        result = (31 * result * b)[$round]();
      }
      if (c !== 0) {
        result = (31 * result * c)[$round]();
      }
      if (d !== 0) {
        result = (31 * result * d)[$round]();
      }
      return result;
    }
    static applyTrimPathContentIfNeeded(path, trimPath) {
      if (trimPath == null || trimPath.hidden) {
        return;
      }
      let start = trimPath.start.value;
      let end = trimPath.end.value;
      let offset = trimPath.offset.value;
      utils$.Utils.applyTrimPathIfNeeded(path, start / 100.0, end / 100.0, offset / 360.0);
    }
    static applyTrimPathIfNeeded(path, startValue, endValue, offsetValue) {
      l.L.beginSection("applyTrimPathIfNeeded");
      let metrics = path.computeMetrics()[$toList]();
      if (metrics[$isEmpty]) {
        l.L.endSection("applyTrimPathIfNeeded");
        return;
      }
      let pathMeasure = metrics[$first];
      if (startValue === 1.0 && endValue === 0.0) {
        l.L.endSection("applyTrimPathIfNeeded");
        return;
      }
      let length = pathMeasure.length;
      if (length < 1.0 || (endValue - startValue - 1)[$abs]() < 0.01) {
        l.L.endSection("applyTrimPathIfNeeded");
        return;
      }
      let start = length * startValue;
      let end = length * endValue;
      let newStart = math.min(core.double, start, end);
      let newEnd = math.max(core.double, start, end);
      let offset = offsetValue * length;
      newStart = newStart + offset;
      newEnd = newEnd + offset;
      if (newStart >= length && newEnd >= length) {
        newStart = misc.MiscUtils.floorMod(newStart, length)[$toDouble]();
        newEnd = misc.MiscUtils.floorMod(newEnd, length)[$toDouble]();
      }
      if (newStart < 0) {
        newStart = misc.MiscUtils.floorMod(newStart, length)[$toDouble]();
      }
      if (newEnd < 0) {
        newEnd = misc.MiscUtils.floorMod(newEnd, length)[$toDouble]();
      }
      if (newStart === newEnd) {
        path.reset();
        l.L.endSection("applyTrimPathIfNeeded");
        return;
      }
      if (newStart >= newEnd) {
        newStart = newStart - length;
      }
      let tempPath = pathMeasure.extractPath(newStart, newEnd, {startWithMoveTo: true});
      if (newEnd > length) {
        let tempPath2 = pathMeasure.extractPath(0.0, newEnd[$modulo](length), {startWithMoveTo: true});
        tempPath.addPath(tempPath2, ui.Offset.zero);
      } else if (newStart < 0) {
        let tempPath2 = pathMeasure.extractPath(length + newStart, length, {startWithMoveTo: true});
        tempPath.addPath(tempPath2, ui.Offset.zero);
      }
      utils['PathExtension|set'](path, tempPath);
      l.L.endSection("applyTrimPathIfNeeded");
    }
    static ['_#new#tearOff']() {
      return new utils$.Utils.new();
    }
  };
  (utils$.Utils.new = function() {
    ;
  }).prototype = utils$.Utils.prototype;
  dart.addTypeTests(utils$.Utils);
  dart.addTypeCaches(utils$.Utils);
  dart.setStaticMethodSignature(utils$.Utils, () => ['createPath', 'hashFor', 'applyTrimPathContentIfNeeded', 'applyTrimPathIfNeeded']);
  dart.setLibraryUri(utils$.Utils, I[91]);
  var _path$7 = dart.privateName(path_keyframe, "_path");
  var _pointKeyFrame = dart.privateName(path_keyframe, "_pointKeyFrame");
  var startValue$ = dart.privateName(keyframe$, "Keyframe.startValue");
  var endValue$ = dart.privateName(keyframe$, "Keyframe.endValue");
  var interpolator$ = dart.privateName(keyframe$, "Keyframe.interpolator");
  var xInterpolator$ = dart.privateName(keyframe$, "Keyframe.xInterpolator");
  var yInterpolator$ = dart.privateName(keyframe$, "Keyframe.yInterpolator");
  var startFrame$1 = dart.privateName(keyframe$, "Keyframe.startFrame");
  var endFrame$ = dart.privateName(keyframe$, "Keyframe.endFrame");
  var pathCp1 = dart.privateName(keyframe$, "Keyframe.pathCp1");
  var pathCp2 = dart.privateName(keyframe$, "Keyframe.pathCp2");
  var _startProgress = dart.privateName(keyframe$, "_startProgress");
  var _endProgress = dart.privateName(keyframe$, "_endProgress");
  var _composition$0 = dart.privateName(keyframe$, "_composition");
  const _is_Keyframe_default = Symbol('_is_Keyframe_default');
  keyframe$.Keyframe$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    class Keyframe extends core.Object {
      get startValue() {
        return this[startValue$];
      }
      set startValue(value) {
        super.startValue = value;
      }
      get endValue() {
        return this[endValue$];
      }
      set endValue(value) {
        this[endValue$] = __t$TN().as(value);
      }
      get interpolator() {
        return this[interpolator$];
      }
      set interpolator(value) {
        super.interpolator = value;
      }
      get xInterpolator() {
        return this[xInterpolator$];
      }
      set xInterpolator(value) {
        super.xInterpolator = value;
      }
      get yInterpolator() {
        return this[yInterpolator$];
      }
      set yInterpolator(value) {
        super.yInterpolator = value;
      }
      get startFrame() {
        return this[startFrame$1];
      }
      set startFrame(value) {
        super.startFrame = value;
      }
      get endFrame() {
        return this[endFrame$];
      }
      set endFrame(value) {
        this[endFrame$] = value;
      }
      get pathCp1() {
        return this[pathCp1];
      }
      set pathCp1(value) {
        this[pathCp1] = value;
      }
      get pathCp2() {
        return this[pathCp2];
      }
      set pathCp2(value) {
        this[pathCp2] = value;
      }
      static ['_#new#tearOff'](T, _composition, opts) {
        let startValue = opts && 'startValue' in opts ? opts.startValue : null;
        let endValue = opts && 'endValue' in opts ? opts.endValue : null;
        let interpolator = opts && 'interpolator' in opts ? opts.interpolator : null;
        let xInterpolator = opts && 'xInterpolator' in opts ? opts.xInterpolator : null;
        let yInterpolator = opts && 'yInterpolator' in opts ? opts.yInterpolator : null;
        let startFrame = opts && 'startFrame' in opts ? opts.startFrame : null;
        let endFrame = opts && 'endFrame' in opts ? opts.endFrame : null;
        return new (keyframe$.Keyframe$(T)).new(_composition, {startValue: startValue, endValue: endValue, interpolator: interpolator, xInterpolator: xInterpolator, yInterpolator: yInterpolator, startFrame: startFrame, endFrame: endFrame});
      }
      static ['_#nonAnimated#tearOff'](T, value) {
        return new (keyframe$.Keyframe$(T)).nonAnimated(value);
      }
      get startProgress() {
        if (this[_composition$0] == null) {
          return 0.0;
        }
        if (this[_startProgress] === 5e-324) {
          this[_startProgress] = (this.startFrame - dart.nullCheck(this[_composition$0]).startFrame) / dart.nullCheck(this[_composition$0]).durationFrames;
        }
        return this[_startProgress];
      }
      get endProgress() {
        if (this[_composition$0] == null) {
          return 1.0;
        }
        if (this[_endProgress] === 5e-324) {
          if (this.endFrame == null) {
            this[_endProgress] = 1.0;
          } else {
            let durationFrames = dart.nullCheck(this.endFrame) - this.startFrame;
            let durationProgress = durationFrames / dart.nullCheck(this[_composition$0]).durationFrames;
            this[_endProgress] = this.startProgress + durationProgress;
          }
        }
        return this[_endProgress];
      }
      get isStatic() {
        return this.interpolator == null && this.xInterpolator == null && this.yInterpolator == null;
      }
      containsProgress(progress) {
        return progress >= this.startProgress && progress < this.endProgress;
      }
      toString() {
        return "Keyframe{" + "startValue=" + dart.str(this.startValue) + ", endValue=" + dart.str(this.endValue) + ", startFrame=" + dart.str(this.startFrame) + ", endFrame=" + dart.str(this.endFrame) + ", interpolator=" + dart.str(this.interpolator) + "}";
      }
    }
    (Keyframe.new = function(_composition, opts) {
      let t52;
      let startValue = opts && 'startValue' in opts ? opts.startValue : null;
      let endValue = opts && 'endValue' in opts ? opts.endValue : null;
      let interpolator = opts && 'interpolator' in opts ? opts.interpolator : null;
      let xInterpolator = opts && 'xInterpolator' in opts ? opts.xInterpolator : null;
      let yInterpolator = opts && 'yInterpolator' in opts ? opts.yInterpolator : null;
      let startFrame = opts && 'startFrame' in opts ? opts.startFrame : null;
      let endFrame = opts && 'endFrame' in opts ? opts.endFrame : null;
      this[_startProgress] = 5e-324;
      this[_endProgress] = 5e-324;
      this[pathCp1] = null;
      this[pathCp2] = null;
      this[_composition$0] = _composition;
      this[startValue$] = startValue;
      this[endValue$] = endValue;
      this[interpolator$] = interpolator;
      this[xInterpolator$] = xInterpolator;
      this[yInterpolator$] = yInterpolator;
      this[endFrame$] = endFrame;
      this[startFrame$1] = (t52 = startFrame, t52 == null ? 0.0 : t52);
      ;
    }).prototype = Keyframe.prototype;
    (Keyframe.nonAnimated = function(value) {
      this[_startProgress] = 5e-324;
      this[_endProgress] = 5e-324;
      this[pathCp1] = null;
      this[pathCp2] = null;
      this[_composition$0] = null;
      this[startValue$] = value;
      this[endValue$] = value;
      this[interpolator$] = null;
      this[startFrame$1] = 5e-324;
      this[endFrame$] = 1.7976931348623157e+308;
      this[xInterpolator$] = null;
      this[yInterpolator$] = null;
      ;
    }).prototype = Keyframe.prototype;
    dart.addTypeTests(Keyframe);
    Keyframe.prototype[_is_Keyframe_default] = true;
    dart.addTypeCaches(Keyframe);
    dart.setMethodSignature(Keyframe, () => ({
      __proto__: dart.getMethods(Keyframe.__proto__),
      containsProgress: dart.fnType(core.bool, [core.double])
    }));
    dart.setGetterSignature(Keyframe, () => ({
      __proto__: dart.getGetters(Keyframe.__proto__),
      startProgress: core.double,
      endProgress: core.double,
      isStatic: core.bool
    }));
    dart.setLibraryUri(Keyframe, I[92]);
    dart.setFieldSignature(Keyframe, () => ({
      __proto__: dart.getFields(Keyframe.__proto__),
      [_composition$0]: dart.finalFieldType(dart.nullable(composition$.LottieComposition)),
      startValue: dart.finalFieldType(dart.nullable(T)),
      endValue: dart.fieldType(dart.nullable(T)),
      interpolator: dart.finalFieldType(dart.nullable(curves.Curve)),
      xInterpolator: dart.finalFieldType(dart.nullable(curves.Curve)),
      yInterpolator: dart.finalFieldType(dart.nullable(curves.Curve)),
      startFrame: dart.finalFieldType(core.double),
      endFrame: dart.fieldType(dart.nullable(core.double)),
      [_startProgress]: dart.fieldType(core.double),
      [_endProgress]: dart.fieldType(core.double),
      pathCp1: dart.fieldType(dart.nullable(ui.Offset)),
      pathCp2: dart.fieldType(dart.nullable(ui.Offset))
    }));
    dart.defineExtensionMethods(Keyframe, ['toString']);
    return Keyframe;
  });
  keyframe$.Keyframe = keyframe$.Keyframe$();
  dart.addTypeTests(keyframe$.Keyframe, _is_Keyframe_default);
  path_keyframe.PathKeyframe = class PathKeyframe extends keyframe$.Keyframe$(ui.Offset) {
    static ['_#new#tearOff'](composition, keyframe) {
      return new path_keyframe.PathKeyframe.new(composition, keyframe);
    }
    createPath() {
      let equals = this.endValue != null && this.startValue != null && dart.equals(this.startValue, this.endValue);
      if (this.startValue != null && this.endValue != null && !equals) {
        this[_path$7] = utils$.Utils.createPath(dart.nullCheck(this.startValue), dart.nullCheck(this.endValue), this[_pointKeyFrame].pathCp1, this[_pointKeyFrame].pathCp2);
      }
    }
    getPath() {
      return this[_path$7];
    }
  };
  (path_keyframe.PathKeyframe.new = function(composition, keyframe) {
    this[_path$7] = null;
    this[_pointKeyFrame] = keyframe;
    path_keyframe.PathKeyframe.__proto__.new.call(this, composition, {startValue: keyframe.startValue, endValue: keyframe.endValue, interpolator: keyframe.interpolator, xInterpolator: keyframe.xInterpolator, yInterpolator: keyframe.yInterpolator, startFrame: keyframe.startFrame, endFrame: keyframe.endFrame});
    this.createPath();
  }).prototype = path_keyframe.PathKeyframe.prototype;
  dart.addTypeTests(path_keyframe.PathKeyframe);
  dart.addTypeCaches(path_keyframe.PathKeyframe);
  dart.setMethodSignature(path_keyframe.PathKeyframe, () => ({
    __proto__: dart.getMethods(path_keyframe.PathKeyframe.__proto__),
    createPath: dart.fnType(dart.void, []),
    getPath: dart.fnType(dart.nullable(ui.Path), [])
  }));
  dart.setLibraryUri(path_keyframe.PathKeyframe, I[93]);
  dart.setFieldSignature(path_keyframe.PathKeyframe, () => ({
    __proto__: dart.getFields(path_keyframe.PathKeyframe.__proto__),
    [_path$7]: dart.fieldType(dart.nullable(ui.Path)),
    [_pointKeyFrame]: dart.finalFieldType(keyframe$.Keyframe$(ui.Offset))
  }));
  var _pathMeasureKeyframe = dart.privateName(path_keyframe_animation, "_pathMeasureKeyframe");
  var __PathKeyframeAnimation__pathMeasure = dart.privateName(path_keyframe_animation, "_#PathKeyframeAnimation#_pathMeasure");
  var _pathMeasure = dart.privateName(path_keyframe_animation, "_pathMeasure");
  path_keyframe_animation.PathKeyframeAnimation = class PathKeyframeAnimation extends keyframe_animation.KeyframeAnimation$(ui.Offset) {
    get [_pathMeasure]() {
      let t52;
      t52 = this[__PathKeyframeAnimation__pathMeasure];
      return t52 == null ? dart.throw(new _internal.LateError.fieldNI("_pathMeasure")) : t52;
    }
    set [_pathMeasure](library$32package$58lottie$47src$47animation$47keyframe$47path_keyframe_animation$46dart$58$58_pathMeasure$35param) {
      this[__PathKeyframeAnimation__pathMeasure] = library$32package$58lottie$47src$47animation$47keyframe$47path_keyframe_animation$46dart$58$58_pathMeasure$35param;
    }
    static ['_#new#tearOff'](keyframes) {
      return new path_keyframe_animation.PathKeyframeAnimation.new(keyframes);
    }
    getValue(keyframe, keyframeProgress) {
      T$.KeyframeOfOffset().as(keyframe);
      let pathKeyframe = path_keyframe.PathKeyframe.as(keyframe);
      let path = pathKeyframe.getPath();
      if (path == null) {
        return dart.nullCheck(keyframe.startValue);
      }
      if (this.valueCallback != null) {
        let value = dart.nullCheck(this.valueCallback).getValueInternal(pathKeyframe.startFrame, pathKeyframe.endFrame, pathKeyframe.startValue, pathKeyframe.endValue, this.getLinearCurrentKeyframeProgress(), keyframeProgress, this.progress);
        if (value != null) {
          return value;
        }
      }
      if (!dart.equals(this[_pathMeasureKeyframe], pathKeyframe)) {
        this[_pathMeasure] = path.computeMetrics()[$toList]()[$first];
        this[_pathMeasureKeyframe] = pathKeyframe;
      }
      return dart.nullCheck(this[_pathMeasure].getTangentForOffset(keyframeProgress * this[_pathMeasure].length)).position;
    }
  };
  (path_keyframe_animation.PathKeyframeAnimation.new = function(keyframes) {
    this[_pathMeasureKeyframe] = null;
    this[__PathKeyframeAnimation__pathMeasure] = null;
    path_keyframe_animation.PathKeyframeAnimation.__proto__.new.call(this, keyframes);
    ;
  }).prototype = path_keyframe_animation.PathKeyframeAnimation.prototype;
  dart.addTypeTests(path_keyframe_animation.PathKeyframeAnimation);
  dart.addTypeCaches(path_keyframe_animation.PathKeyframeAnimation);
  dart.setMethodSignature(path_keyframe_animation.PathKeyframeAnimation, () => ({
    __proto__: dart.getMethods(path_keyframe_animation.PathKeyframeAnimation.__proto__),
    getValue: dart.fnType(ui.Offset, [dart.nullable(core.Object), core.double])
  }));
  dart.setGetterSignature(path_keyframe_animation.PathKeyframeAnimation, () => ({
    __proto__: dart.getGetters(path_keyframe_animation.PathKeyframeAnimation.__proto__),
    [_pathMeasure]: ui.PathMetric
  }));
  dart.setSetterSignature(path_keyframe_animation.PathKeyframeAnimation, () => ({
    __proto__: dart.getSetters(path_keyframe_animation.PathKeyframeAnimation.__proto__),
    [_pathMeasure]: ui.PathMetric
  }));
  dart.setLibraryUri(path_keyframe_animation.PathKeyframeAnimation, I[94]);
  dart.setFieldSignature(path_keyframe_animation.PathKeyframeAnimation, () => ({
    __proto__: dart.getFields(path_keyframe_animation.PathKeyframeAnimation.__proto__),
    [_pathMeasureKeyframe]: dart.fieldType(dart.nullable(path_keyframe.PathKeyframe)),
    [__PathKeyframeAnimation__pathMeasure]: dart.fieldType(dart.nullable(ui.PathMetric))
  }));
  var keyframes$0 = dart.privateName(animatable_path_value, "AnimatablePathValue.keyframes");
  animatable_path_value.AnimatablePathValue = class AnimatablePathValue extends core.Object {
    get keyframes() {
      return this[keyframes$0];
    }
    set keyframes(value) {
      super.keyframes = value;
    }
    static ['_#new#tearOff']() {
      return new animatable_path_value.AnimatablePathValue.new();
    }
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_path_value.AnimatablePathValue.fromKeyframes(keyframes);
    }
    get isStatic() {
      return this.keyframes[$length] === 1 && this.keyframes[$_get](0).isStatic;
    }
    createAnimation() {
      if (this.keyframes[$first].isStatic) {
        return new point_keyframe_animation.PointKeyframeAnimation.new(this.keyframes);
      }
      return new path_keyframe_animation.PathKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_path_value.AnimatablePathValue.new = function() {
    this[keyframes$0] = T$.JSArrayOfKeyframeOfOffset().of([new (T$.KeyframeOfOffset()).nonAnimated(ui.Offset.zero)]);
    ;
  }).prototype = animatable_path_value.AnimatablePathValue.prototype;
  (animatable_path_value.AnimatablePathValue.fromKeyframes = function(keyframes) {
    this[keyframes$0] = keyframes;
    ;
  }).prototype = animatable_path_value.AnimatablePathValue.prototype;
  dart.addTypeTests(animatable_path_value.AnimatablePathValue);
  dart.addTypeCaches(animatable_path_value.AnimatablePathValue);
  animatable_path_value.AnimatablePathValue[dart.implements] = () => [animatable_value.AnimatableValue$(ui.Offset, ui.Offset)];
  dart.setMethodSignature(animatable_path_value.AnimatablePathValue, () => ({
    __proto__: dart.getMethods(animatable_path_value.AnimatablePathValue.__proto__),
    createAnimation: dart.fnType(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset), [])
  }));
  dart.setGetterSignature(animatable_path_value.AnimatablePathValue, () => ({
    __proto__: dart.getGetters(animatable_path_value.AnimatablePathValue.__proto__),
    isStatic: core.bool
  }));
  dart.setLibraryUri(animatable_path_value.AnimatablePathValue, I[95]);
  dart.setFieldSignature(animatable_path_value.AnimatablePathValue, () => ({
    __proto__: dart.getFields(animatable_path_value.AnimatablePathValue.__proto__),
    keyframes: dart.finalFieldType(core.List$(keyframe$.Keyframe$(ui.Offset)))
  }));
  animatable_double_value.AnimatableDoubleValue = class AnimatableDoubleValue extends base_animatable_value.BaseAnimatableValue$(core.double, core.double) {
    static ['_#new#tearOff']() {
      return new animatable_double_value.AnimatableDoubleValue.new();
    }
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_double_value.AnimatableDoubleValue.fromKeyframes(keyframes);
    }
    createAnimation() {
      return new double_keyframe_animation.DoubleKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_double_value.AnimatableDoubleValue.new = function() {
    animatable_double_value.AnimatableDoubleValue.__proto__.fromValue.call(this, 0.0);
    ;
  }).prototype = animatable_double_value.AnimatableDoubleValue.prototype;
  (animatable_double_value.AnimatableDoubleValue.fromKeyframes = function(keyframes) {
    animatable_double_value.AnimatableDoubleValue.__proto__.fromKeyframes.call(this, keyframes);
    ;
  }).prototype = animatable_double_value.AnimatableDoubleValue.prototype;
  dart.addTypeTests(animatable_double_value.AnimatableDoubleValue);
  dart.addTypeCaches(animatable_double_value.AnimatableDoubleValue);
  dart.setMethodSignature(animatable_double_value.AnimatableDoubleValue, () => ({
    __proto__: dart.getMethods(animatable_double_value.AnimatableDoubleValue.__proto__),
    createAnimation: dart.fnType(double_keyframe_animation.DoubleKeyframeAnimation, [])
  }));
  dart.setLibraryUri(animatable_double_value.AnimatableDoubleValue, I[96]);
  content_model.ContentModel = class ContentModel extends core.Object {};
  (content_model.ContentModel.new = function() {
    ;
  }).prototype = content_model.ContentModel.prototype;
  dart.addTypeTests(content_model.ContentModel);
  dart.addTypeCaches(content_model.ContentModel);
  dart.setLibraryUri(content_model.ContentModel, I[97]);
  var anchorPoint$ = dart.privateName(animatable_transform, "AnimatableTransform.anchorPoint");
  var position$2 = dart.privateName(animatable_transform, "AnimatableTransform.position");
  var scale$ = dart.privateName(animatable_transform, "AnimatableTransform.scale");
  var rotation$0 = dart.privateName(animatable_transform, "AnimatableTransform.rotation");
  var opacity$4 = dart.privateName(animatable_transform, "AnimatableTransform.opacity");
  var skew$ = dart.privateName(animatable_transform, "AnimatableTransform.skew");
  var skewAngle$ = dart.privateName(animatable_transform, "AnimatableTransform.skewAngle");
  var startOpacity$ = dart.privateName(animatable_transform, "AnimatableTransform.startOpacity");
  var endOpacity$ = dart.privateName(animatable_transform, "AnimatableTransform.endOpacity");
  animatable_transform.AnimatableTransform = class AnimatableTransform extends core.Object {
    get anchorPoint() {
      return this[anchorPoint$];
    }
    set anchorPoint(value) {
      super.anchorPoint = value;
    }
    get position() {
      return this[position$2];
    }
    set position(value) {
      super.position = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get rotation() {
      return this[rotation$0];
    }
    set rotation(value) {
      super.rotation = value;
    }
    get opacity() {
      return this[opacity$4];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get skew() {
      return this[skew$];
    }
    set skew(value) {
      super.skew = value;
    }
    get skewAngle() {
      return this[skewAngle$];
    }
    set skewAngle(value) {
      super.skewAngle = value;
    }
    get startOpacity() {
      return this[startOpacity$];
    }
    set startOpacity(value) {
      super.startOpacity = value;
    }
    get endOpacity() {
      return this[endOpacity$];
    }
    set endOpacity(value) {
      super.endOpacity = value;
    }
    static ['_#new#tearOff'](opts) {
      let anchorPoint = opts && 'anchorPoint' in opts ? opts.anchorPoint : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let scale = opts && 'scale' in opts ? opts.scale : null;
      let rotation = opts && 'rotation' in opts ? opts.rotation : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let skew = opts && 'skew' in opts ? opts.skew : null;
      let skewAngle = opts && 'skewAngle' in opts ? opts.skewAngle : null;
      let startOpacity = opts && 'startOpacity' in opts ? opts.startOpacity : null;
      let endOpacity = opts && 'endOpacity' in opts ? opts.endOpacity : null;
      return new animatable_transform.AnimatableTransform.new({anchorPoint: anchorPoint, position: position, scale: scale, rotation: rotation, opacity: opacity, skew: skew, skewAngle: skewAngle, startOpacity: startOpacity, endOpacity: endOpacity});
    }
    createAnimation() {
      return new transform_keyframe_animation.TransformKeyframeAnimation.new(this);
    }
    toContent(drawable, layer) {
      return null;
    }
  };
  (animatable_transform.AnimatableTransform.new = function(opts) {
    let anchorPoint = opts && 'anchorPoint' in opts ? opts.anchorPoint : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let rotation = opts && 'rotation' in opts ? opts.rotation : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let skew = opts && 'skew' in opts ? opts.skew : null;
    let skewAngle = opts && 'skewAngle' in opts ? opts.skewAngle : null;
    let startOpacity = opts && 'startOpacity' in opts ? opts.startOpacity : null;
    let endOpacity = opts && 'endOpacity' in opts ? opts.endOpacity : null;
    this[anchorPoint$] = anchorPoint;
    this[position$2] = position;
    this[scale$] = scale;
    this[rotation$0] = rotation;
    this[opacity$4] = opacity;
    this[skew$] = skew;
    this[skewAngle$] = skewAngle;
    this[startOpacity$] = startOpacity;
    this[endOpacity$] = endOpacity;
    ;
  }).prototype = animatable_transform.AnimatableTransform.prototype;
  dart.addTypeTests(animatable_transform.AnimatableTransform);
  dart.addTypeCaches(animatable_transform.AnimatableTransform);
  animatable_transform.AnimatableTransform[dart.implements] = () => [modifier_content.ModifierContent, content_model.ContentModel];
  dart.setMethodSignature(animatable_transform.AnimatableTransform, () => ({
    __proto__: dart.getMethods(animatable_transform.AnimatableTransform.__proto__),
    createAnimation: dart.fnType(transform_keyframe_animation.TransformKeyframeAnimation, []),
    toContent: dart.fnType(dart.nullable(content.Content), [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(animatable_transform.AnimatableTransform, I[98]);
  dart.setFieldSignature(animatable_transform.AnimatableTransform, () => ({
    __proto__: dart.getFields(animatable_transform.AnimatableTransform.__proto__),
    anchorPoint: dart.finalFieldType(dart.nullable(animatable_path_value.AnimatablePathValue)),
    position: dart.finalFieldType(dart.nullable(animatable_value.AnimatableValue$(ui.Offset, ui.Offset))),
    scale: dart.finalFieldType(dart.nullable(animatable_scale_value.AnimatableScaleValue)),
    rotation: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    opacity: dart.finalFieldType(dart.nullable(animatable_integer_value.AnimatableIntegerValue)),
    skew: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    skewAngle: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    startOpacity: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue)),
    endOpacity: dart.finalFieldType(dart.nullable(animatable_double_value.AnimatableDoubleValue))
  }));
  var _matrix$1 = dart.privateName(transform_keyframe_animation, "_matrix");
  var _skewMatrix1 = dart.privateName(transform_keyframe_animation, "_skewMatrix1");
  var _skewMatrix2 = dart.privateName(transform_keyframe_animation, "_skewMatrix2");
  var _skewMatrix3 = dart.privateName(transform_keyframe_animation, "_skewMatrix3");
  var _anchorPoint = dart.privateName(transform_keyframe_animation, "_anchorPoint");
  var _position = dart.privateName(transform_keyframe_animation, "_position");
  var _scale = dart.privateName(transform_keyframe_animation, "_scale");
  var _rotation = dart.privateName(transform_keyframe_animation, "_rotation");
  var _skew = dart.privateName(transform_keyframe_animation, "_skew");
  var _skewAngle = dart.privateName(transform_keyframe_animation, "_skewAngle");
  var _opacity$0 = dart.privateName(transform_keyframe_animation, "_opacity");
  var _startOpacity = dart.privateName(transform_keyframe_animation, "_startOpacity");
  var _endOpacity = dart.privateName(transform_keyframe_animation, "_endOpacity");
  transform_keyframe_animation.TransformKeyframeAnimation = class TransformKeyframeAnimation extends core.Object {
    static ['_#new#tearOff'](animatableTransform) {
      return new transform_keyframe_animation.TransformKeyframeAnimation.new(animatableTransform);
    }
    get opacity() {
      return this[_opacity$0];
    }
    get startOpacity() {
      return this[_startOpacity];
    }
    get endOpacity() {
      return this[_endOpacity];
    }
    addAnimationsToLayer(layer) {
      layer.addAnimation(this[_opacity$0]);
      layer.addAnimation(this[_startOpacity]);
      layer.addAnimation(this[_endOpacity]);
      layer.addAnimation(this[_anchorPoint]);
      layer.addAnimation(this[_position]);
      layer.addAnimation(this[_scale]);
      layer.addAnimation(this[_rotation]);
      layer.addAnimation(this[_skew]);
      layer.addAnimation(this[_skewAngle]);
    }
    addListener(listener) {
      let t52, t52$, t52$0, t52$1, t52$2, t52$3, t52$4, t52$5, t52$6;
      t52 = this[_opacity$0];
      t52 == null ? null : t52.addUpdateListener(listener);
      t52$ = this[_startOpacity];
      t52$ == null ? null : t52$.addUpdateListener(listener);
      t52$0 = this[_endOpacity];
      t52$0 == null ? null : t52$0.addUpdateListener(listener);
      t52$1 = this[_anchorPoint];
      t52$1 == null ? null : t52$1.addUpdateListener(listener);
      t52$2 = this[_position];
      t52$2 == null ? null : t52$2.addUpdateListener(listener);
      t52$3 = this[_scale];
      t52$3 == null ? null : t52$3.addUpdateListener(listener);
      t52$4 = this[_rotation];
      t52$4 == null ? null : t52$4.addUpdateListener(listener);
      t52$5 = this[_skew];
      t52$5 == null ? null : t52$5.addUpdateListener(listener);
      t52$6 = this[_skewAngle];
      t52$6 == null ? null : t52$6.addUpdateListener(listener);
    }
    setProgress(progress) {
      let t52, t52$, t52$0, t52$1, t52$2, t52$3, t52$4, t52$5, t52$6;
      t52 = this[_opacity$0];
      t52 == null ? null : t52.setProgress(progress);
      t52$ = this[_startOpacity];
      t52$ == null ? null : t52$.setProgress(progress);
      t52$0 = this[_endOpacity];
      t52$0 == null ? null : t52$0.setProgress(progress);
      t52$1 = this[_anchorPoint];
      t52$1 == null ? null : t52$1.setProgress(progress);
      t52$2 = this[_position];
      t52$2 == null ? null : t52$2.setProgress(progress);
      t52$3 = this[_scale];
      t52$3 == null ? null : t52$3.setProgress(progress);
      t52$4 = this[_rotation];
      t52$4 == null ? null : t52$4.setProgress(progress);
      t52$5 = this[_skew];
      t52$5 == null ? null : t52$5.setProgress(progress);
      t52$6 = this[_skewAngle];
      t52$6 == null ? null : t52$6.setProgress(progress);
    }
    getMatrix() {
      utils['Matrix4Extension|reset'](this[_matrix$1]);
      if (this[_position] != null) {
        let position = dart.nullCheck(this[_position]).value;
        if (position.dx !== 0 || position.dy !== 0) {
          this[_matrix$1].translate(position.dx, position.dy);
        }
      }
      if (this[_rotation] != null) {
        let rotation = dart.nullCheck(this[_rotation]).value;
        if (rotation !== 0) {
          this[_matrix$1].rotateZ(rotation * 3.141592653589793 / 180.0);
        }
      }
      if (this[_skew] != null) {
        let mCos = this[_skewAngle] == null ? 0.0 : math.cos(vector_math_64.radians(-dart.nullCheck(this[_skewAngle]).value + 90));
        let mSin = this[_skewAngle] == null ? 1.0 : math.sin(vector_math_64.radians(-dart.nullCheck(this[_skewAngle]).value + 90));
        let aTan = math.tan(vector_math_64.radians(dart.nullCheck(this[_skew]).value));
        dart.nullCheck(this[_skewMatrix1]).setValues(mCos, mSin, 0.0, 0.0, -mSin, mCos, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
        dart.nullCheck(this[_skewMatrix2]).setValues(1.0, 0.0, 0.0, 0.0, aTan, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
        dart.nullCheck(this[_skewMatrix3]).setValues(mCos, -mSin, 0.0, 0.0, mSin, mCos, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
        dart.nullCheck(this[_skewMatrix2]).multiply(dart.nullCheck(this[_skewMatrix1]));
        dart.nullCheck(this[_skewMatrix3]).multiply(dart.nullCheck(this[_skewMatrix2]));
        this[_matrix$1].multiply(dart.nullCheck(this[_skewMatrix3]));
      }
      if (this[_scale] != null) {
        let scale = dart.nullCheck(this[_scale]).value;
        if (scale.dx !== 1 || scale.dy !== 1) {
          this[_matrix$1].scale(scale.dx, scale.dy);
        }
      }
      if (this[_anchorPoint] != null) {
        let anchorPoint = dart.nullCheck(this[_anchorPoint]).value;
        if (anchorPoint.dx !== 0 || anchorPoint.dy !== 0) {
          this[_matrix$1].translate(-anchorPoint.dx, -anchorPoint.dy);
        }
      }
      return this[_matrix$1];
    }
    getMatrixForRepeater(amount) {
      let t52, t52$, t52$0;
      let position = (t52 = this[_position], t52 == null ? null : t52.value);
      let scale = (t52$ = this[_scale], t52$ == null ? null : t52$.value);
      this[_matrix$1].setIdentity();
      if (position != null) {
        this[_matrix$1].translate(position.dx * amount, position.dy * amount);
      }
      if (scale != null) {
        this[_matrix$1].scale(math.pow(scale.dx, amount)[$toDouble](), math.pow(scale.dy, amount)[$toDouble]());
      }
      if (this[_rotation] != null) {
        let rotation = dart.nullCheck(this[_rotation]).value;
        let anchorPoint = (t52$0 = this[_anchorPoint], t52$0 == null ? null : t52$0.value);
        this[_matrix$1].rotate(vector_math_64.Vector3.new(anchorPoint == null ? 0.0 : anchorPoint.dx, anchorPoint == null ? 0.0 : anchorPoint.dy, 1.0), vector_math_64.radians(rotation * amount));
      }
      return this[_matrix$1];
    }
    applyValueCallback(T, property, callback) {
      if (dart.equals(property, lottie_property.LottieProperty.transformAnchorPoint)) {
        if (this[_anchorPoint] == null) {
          this[_anchorPoint] = new (T$.ValueCallbackKeyframeAnimationOfOffset$Offset()).new(T$.LottieValueCallbackNOfOffset().as(callback), ui.Offset.zero);
        } else {
          dart.nullCheck(this[_anchorPoint]).setValueCallback(T$.LottieValueCallbackNOfOffset().as(callback));
        }
      } else if (dart.equals(property, lottie_property.LottieProperty.transformPosition)) {
        if (this[_position] == null) {
          this[_position] = new (T$.ValueCallbackKeyframeAnimationOfOffset$Offset()).new(T$.LottieValueCallbackNOfOffset().as(callback), ui.Offset.zero);
        } else {
          dart.nullCheck(this[_position]).setValueCallback(T$.LottieValueCallbackNOfOffset().as(callback));
        }
      } else if (dart.equals(property, lottie_property.LottieProperty.transformScale)) {
        if (this[_scale] == null) {
          this[_scale] = new (T$.ValueCallbackKeyframeAnimationOfOffset$Offset()).new(T$.LottieValueCallbackNOfOffset().as(callback), C[39] || CT.C39);
        } else {
          dart.nullCheck(this[_scale]).setValueCallback(T$.LottieValueCallbackNOfOffset().as(callback));
        }
      } else if (dart.equals(property, 12)) {
        if (this[_rotation] == null) {
          this[_rotation] = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackNOfdouble().as(callback), 0.0);
        } else {
          dart.nullCheck(this[_rotation]).setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
        }
      } else if (dart.equals(property, 3)) {
        if (this[_opacity$0] == null) {
          this[_opacity$0] = new (T$.ValueCallbackKeyframeAnimationOfint$int()).new(T$.LottieValueCallbackNOfint().as(callback), 100);
        } else {
          dart.nullCheck(this[_opacity$0]).setValueCallback(T$.LottieValueCallbackNOfint().as(callback));
        }
      } else if (dart.equals(property, 25)) {
        if (this[_startOpacity] == null) {
          this[_startOpacity] = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackNOfdouble().as(callback), 100.0);
        } else {
          dart.nullCheck(this[_startOpacity]).setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
        }
      } else if (dart.equals(property, 26)) {
        if (this[_endOpacity] == null) {
          this[_endOpacity] = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackNOfdouble().as(callback), 100.0);
        } else {
          dart.nullCheck(this[_endOpacity]).setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
        }
      } else if (dart.equals(property, 13)) {
        this[_skew] == null ? this[_skew] = new double_keyframe_animation.DoubleKeyframeAnimation.new(T$.JSArrayOfKeyframeOfdouble().of([new (T$.KeyframeOfdouble()).nonAnimated(0.0)])) : null;
        dart.nullCheck(this[_skew]).setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else if (dart.equals(property, 14)) {
        this[_skewAngle] == null ? this[_skewAngle] = new double_keyframe_animation.DoubleKeyframeAnimation.new(T$.JSArrayOfKeyframeOfdouble().of([new (T$.KeyframeOfdouble()).nonAnimated(0.0)])) : null;
        dart.nullCheck(this[_skewAngle]).setValueCallback(T$.LottieValueCallbackNOfdouble().as(callback));
      } else {
        return false;
      }
      return true;
    }
  };
  (transform_keyframe_animation.TransformKeyframeAnimation.new = function(animatableTransform) {
    let t52, t52$, t52$0, t52$1, t52$2, t52$3, t52$4, t52$5, t52$6;
    this[_matrix$1] = vector_math_64.Matrix4.identity();
    this[_skewMatrix1] = animatableTransform.skew == null ? null : vector_math_64.Matrix4.identity();
    this[_skewMatrix2] = animatableTransform.skew == null ? null : vector_math_64.Matrix4.identity();
    this[_skewMatrix3] = animatableTransform.skew == null ? null : vector_math_64.Matrix4.identity();
    this[_anchorPoint] = (t52 = animatableTransform.anchorPoint, t52 == null ? null : t52.createAnimation());
    this[_position] = (t52$ = animatableTransform.position, t52$ == null ? null : t52$.createAnimation());
    this[_scale] = (t52$0 = animatableTransform.scale, t52$0 == null ? null : t52$0.createAnimation());
    this[_rotation] = (t52$1 = animatableTransform.rotation, t52$1 == null ? null : t52$1.createAnimation());
    this[_skew] = (t52$2 = animatableTransform.skew, t52$2 == null ? null : t52$2.createAnimation());
    this[_skewAngle] = (t52$3 = animatableTransform.skewAngle, t52$3 == null ? null : t52$3.createAnimation());
    this[_opacity$0] = (t52$4 = animatableTransform.opacity, t52$4 == null ? null : t52$4.createAnimation());
    this[_startOpacity] = (t52$5 = animatableTransform.startOpacity, t52$5 == null ? null : t52$5.createAnimation());
    this[_endOpacity] = (t52$6 = animatableTransform.endOpacity, t52$6 == null ? null : t52$6.createAnimation());
    ;
  }).prototype = transform_keyframe_animation.TransformKeyframeAnimation.prototype;
  dart.addTypeTests(transform_keyframe_animation.TransformKeyframeAnimation);
  dart.addTypeCaches(transform_keyframe_animation.TransformKeyframeAnimation);
  dart.setMethodSignature(transform_keyframe_animation.TransformKeyframeAnimation, () => ({
    __proto__: dart.getMethods(transform_keyframe_animation.TransformKeyframeAnimation.__proto__),
    addAnimationsToLayer: dart.fnType(dart.void, [base_layer.BaseLayer]),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    setProgress: dart.fnType(dart.void, [core.double]),
    getMatrix: dart.fnType(vector_math_64.Matrix4, []),
    getMatrixForRepeater: dart.fnType(vector_math_64.Matrix4, [core.double]),
    applyValueCallback: dart.gFnType(T => [core.bool, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(transform_keyframe_animation.TransformKeyframeAnimation, () => ({
    __proto__: dart.getGetters(transform_keyframe_animation.TransformKeyframeAnimation.__proto__),
    opacity: dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int)),
    startOpacity: dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)),
    endOpacity: dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))
  }));
  dart.setLibraryUri(transform_keyframe_animation.TransformKeyframeAnimation, I[99]);
  dart.setFieldSignature(transform_keyframe_animation.TransformKeyframeAnimation, () => ({
    __proto__: dart.getFields(transform_keyframe_animation.TransformKeyframeAnimation.__proto__),
    [_matrix$1]: dart.finalFieldType(vector_math_64.Matrix4),
    [_skewMatrix1]: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    [_skewMatrix2]: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    [_skewMatrix3]: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    [_anchorPoint]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset))),
    [_position]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset))),
    [_scale]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(ui.Offset, ui.Offset))),
    [_rotation]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_skew]: dart.fieldType(dart.nullable(double_keyframe_animation.DoubleKeyframeAnimation)),
    [_skewAngle]: dart.fieldType(dart.nullable(double_keyframe_animation.DoubleKeyframeAnimation)),
    [_opacity$0]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int))),
    [_startOpacity]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_endOpacity]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double)))
  }));
  key_path_element_content.KeyPathElementContent = class KeyPathElementContent extends core.Object {};
  (key_path_element_content.KeyPathElementContent.new = function() {
    ;
  }).prototype = key_path_element_content.KeyPathElementContent.prototype;
  dart.addTypeTests(key_path_element_content.KeyPathElementContent);
  dart.addTypeCaches(key_path_element_content.KeyPathElementContent);
  key_path_element_content.KeyPathElementContent[dart.implements] = () => [key_path_element.KeyPathElement, content.Content];
  dart.setLibraryUri(key_path_element_content.KeyPathElementContent, I[100]);
  misc.MiscUtils = class MiscUtils extends core.Object {
    static getPathFromData(shapeData, outPath) {
      outPath.reset();
      let initialPoint = shapeData.initialPoint;
      outPath.moveTo(initialPoint.dx, initialPoint.dy);
      let currentPoint = initialPoint;
      for (let i = 0; i < shapeData.curves[$length]; i = i + 1) {
        let curveData = shapeData.curves[$_get](i);
        let cp1 = curveData.controlPoint1;
        let cp2 = curveData.controlPoint2;
        let vertex = curveData.vertex;
        if (cp1._equals(currentPoint) && cp2._equals(vertex)) {
          outPath.lineTo(vertex.dx, vertex.dy);
        } else {
          outPath.cubicTo(cp1.dx, cp1.dy, cp2.dx, cp2.dy, vertex.dx, vertex.dy);
        }
        currentPoint = vertex;
      }
      if (shapeData.isClosed) {
        outPath.close();
      }
    }
    static isAtLeastVersion(major, minor, patch, minMajor, minMinor, minPatch) {
      if (major < minMajor) {
        return false;
      } else if (major > minMajor) {
        return true;
      }
      if (minor < minMinor) {
        return false;
      } else if (minor > minMinor) {
        return true;
      }
      return patch >= minPatch;
    }
    static parseColor(colorString, opts) {
      let warningCallback = opts && 'warningCallback' in opts ? opts.warningCallback : null;
      if (colorString[$isNotEmpty] && colorString[$_get](0) === "#") {
        let color = core.int.parse(colorString[$substring](1), {radix: 16});
        if (colorString.length === 7) {
          color = (color | 4278190080) >>> 0;
        } else if (colorString.length !== 9) {
          warningCallback("Unknown color colorString: " + colorString);
          return C[73] || CT.C73;
        }
        return new ui.Color.new(color);
      }
      warningCallback("Unknown colorString is empty or format incorrect: " + colorString);
      return C[73] || CT.C73;
    }
    static floorMod(x, y) {
      return x[$toInt]() - y[$toInt]() * misc.MiscUtils._floorDiv(x[$toInt](), y[$toInt]());
    }
    static _floorDiv(x, y) {
      let r = (x / y)[$truncate]();
      let sameSign = (x ^ y) >>> 0 >= 0;
      let mod = x[$modulo](y);
      if (!sameSign && mod !== 0) {
        r = r - 1;
      }
      return r;
    }
    static resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath, content) {
      if (keyPath.fullyResolvesTo(content.name, depth)) {
        currentPartialKeyPath = currentPartialKeyPath.addKey(dart.nullCheck(content.name));
        accumulator[$add](currentPartialKeyPath.resolve(content));
      }
    }
    static ['_#new#tearOff']() {
      return new misc.MiscUtils.new();
    }
  };
  (misc.MiscUtils.new = function() {
    ;
  }).prototype = misc.MiscUtils.prototype;
  dart.addTypeTests(misc.MiscUtils);
  dart.addTypeCaches(misc.MiscUtils);
  dart.setStaticMethodSignature(misc.MiscUtils, () => ['getPathFromData', 'isAtLeastVersion', 'parseColor', 'floorMod', '_floorDiv', 'resolveKeyPath']);
  dart.setLibraryUri(misc.MiscUtils, I[101]);
  var _tempShapeData = dart.privateName(shape_keyframe_animation, "_tempShapeData");
  var _tempPath = dart.privateName(shape_keyframe_animation, "_tempPath");
  var _shapeModifiers = dart.privateName(shape_keyframe_animation, "_shapeModifiers");
  shape_keyframe_animation.ShapeKeyframeAnimation = class ShapeKeyframeAnimation extends base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path) {
    static ['_#new#tearOff'](keyframes) {
      return new shape_keyframe_animation.ShapeKeyframeAnimation.new(keyframes);
    }
    getValue(keyframe, keyframeProgress) {
      T$.KeyframeOfShapeData().as(keyframe);
      let startShapeData = dart.nullCheck(keyframe.startValue);
      let endShapeData = dart.nullCheck(keyframe.endValue);
      this[_tempShapeData].interpolateBetween(startShapeData, endShapeData, keyframeProgress);
      let modifiedShapeData = this[_tempShapeData];
      let shapeModifiers = this[_shapeModifiers];
      if (shapeModifiers != null) {
        for (let i = shapeModifiers[$length] - 1; i >= 0; i = i - 1) {
          modifiedShapeData = shapeModifiers[$_get](i).modifyShape(modifiedShapeData);
        }
      }
      misc.MiscUtils.getPathFromData(modifiedShapeData, this[_tempPath]);
      return this[_tempPath];
    }
    setShapeModifiers(shapeModifiers) {
      this[_shapeModifiers] = shapeModifiers;
    }
  };
  (shape_keyframe_animation.ShapeKeyframeAnimation.new = function(keyframes) {
    this[_tempShapeData] = new shape_data.ShapeData.empty();
    this[_tempPath] = path_factory.PathFactory.create();
    this[_shapeModifiers] = null;
    shape_keyframe_animation.ShapeKeyframeAnimation.__proto__.new.call(this, keyframes);
    ;
  }).prototype = shape_keyframe_animation.ShapeKeyframeAnimation.prototype;
  dart.addTypeTests(shape_keyframe_animation.ShapeKeyframeAnimation);
  dart.addTypeCaches(shape_keyframe_animation.ShapeKeyframeAnimation);
  dart.setMethodSignature(shape_keyframe_animation.ShapeKeyframeAnimation, () => ({
    __proto__: dart.getMethods(shape_keyframe_animation.ShapeKeyframeAnimation.__proto__),
    getValue: dart.fnType(ui.Path, [dart.nullable(core.Object), core.double]),
    setShapeModifiers: dart.fnType(dart.void, [dart.nullable(core.List$(shape_modifier_content.ShapeModifierContent))])
  }));
  dart.setLibraryUri(shape_keyframe_animation.ShapeKeyframeAnimation, I[102]);
  dart.setFieldSignature(shape_keyframe_animation.ShapeKeyframeAnimation, () => ({
    __proto__: dart.getFields(shape_keyframe_animation.ShapeKeyframeAnimation.__proto__),
    [_tempShapeData]: dart.finalFieldType(shape_data.ShapeData),
    [_tempPath]: dart.finalFieldType(ui.Path),
    [_shapeModifiers]: dart.fieldType(dart.nullable(core.List$(shape_modifier_content.ShapeModifierContent)))
  }));
  animatable_shape_value.AnimatableShapeValue = class AnimatableShapeValue extends base_animatable_value.BaseAnimatableValue$(shape_data.ShapeData, ui.Path) {
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_shape_value.AnimatableShapeValue.fromKeyframes(keyframes);
    }
    createAnimation() {
      return new shape_keyframe_animation.ShapeKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_shape_value.AnimatableShapeValue.fromKeyframes = function(keyframes) {
    animatable_shape_value.AnimatableShapeValue.__proto__.fromKeyframes.call(this, keyframes);
    ;
  }).prototype = animatable_shape_value.AnimatableShapeValue.prototype;
  dart.addTypeTests(animatable_shape_value.AnimatableShapeValue);
  dart.addTypeCaches(animatable_shape_value.AnimatableShapeValue);
  dart.setMethodSignature(animatable_shape_value.AnimatableShapeValue, () => ({
    __proto__: dart.getMethods(animatable_shape_value.AnimatableShapeValue.__proto__),
    createAnimation: dart.fnType(shape_keyframe_animation.ShapeKeyframeAnimation, [])
  }));
  dart.setLibraryUri(animatable_shape_value.AnimatableShapeValue, I[103]);
  const _is_AnimatableValue_default = Symbol('_is_AnimatableValue_default');
  animatable_value.AnimatableValue$ = dart.generic((K, A) => {
    class AnimatableValue extends core.Object {}
    (AnimatableValue.new = function() {
      ;
    }).prototype = AnimatableValue.prototype;
    dart.addTypeTests(AnimatableValue);
    AnimatableValue.prototype[_is_AnimatableValue_default] = true;
    dart.addTypeCaches(AnimatableValue);
    dart.setLibraryUri(AnimatableValue, I[104]);
    return AnimatableValue;
  });
  animatable_value.AnimatableValue = animatable_value.AnimatableValue$();
  dart.addTypeTests(animatable_value.AnimatableValue, _is_AnimatableValue_default);
  integer_keyframe_animation.IntegerKeyframeAnimation = class IntegerKeyframeAnimation extends keyframe_animation.KeyframeAnimation$(core.int) {
    static ['_#new#tearOff'](keyframes) {
      return new integer_keyframe_animation.IntegerKeyframeAnimation.new(keyframes);
    }
    getValue(keyframe, keyframeProgress) {
      T$.KeyframeOfint().as(keyframe);
      if (keyframe.startValue == null || keyframe.endValue == null) {
        dart.throw(core.Exception.new("Missing values for keyframe."));
      }
      if (this.valueCallback != null) {
        let value = dart.nullCheck(this.valueCallback).getValueInternal(keyframe.startFrame, keyframe.endFrame, keyframe.startValue, keyframe.endValue, keyframeProgress, this.getLinearCurrentKeyframeProgress(), this.progress);
        if (value != null) {
          return value;
        }
      }
      return dart.nullCheck(ui.lerpDouble(keyframe.startValue, keyframe.endValue, keyframeProgress))[$round]();
    }
  };
  (integer_keyframe_animation.IntegerKeyframeAnimation.new = function(keyframes) {
    integer_keyframe_animation.IntegerKeyframeAnimation.__proto__.new.call(this, keyframes);
    ;
  }).prototype = integer_keyframe_animation.IntegerKeyframeAnimation.prototype;
  dart.addTypeTests(integer_keyframe_animation.IntegerKeyframeAnimation);
  dart.addTypeCaches(integer_keyframe_animation.IntegerKeyframeAnimation);
  dart.setMethodSignature(integer_keyframe_animation.IntegerKeyframeAnimation, () => ({
    __proto__: dart.getMethods(integer_keyframe_animation.IntegerKeyframeAnimation.__proto__),
    getValue: dart.fnType(core.int, [dart.nullable(core.Object), core.double])
  }));
  dart.setLibraryUri(integer_keyframe_animation.IntegerKeyframeAnimation, I[105]);
  animatable_integer_value.AnimatableIntegerValue = class AnimatableIntegerValue extends base_animatable_value.BaseAnimatableValue$(core.int, core.int) {
    static ['_#new#tearOff']() {
      return new animatable_integer_value.AnimatableIntegerValue.new();
    }
    static ['_#fromKeyframes#tearOff'](keyframes) {
      return new animatable_integer_value.AnimatableIntegerValue.fromKeyframes(keyframes);
    }
    createAnimation() {
      return new integer_keyframe_animation.IntegerKeyframeAnimation.new(this.keyframes);
    }
  };
  (animatable_integer_value.AnimatableIntegerValue.new = function() {
    animatable_integer_value.AnimatableIntegerValue.__proto__.fromValue.call(this, 100);
    ;
  }).prototype = animatable_integer_value.AnimatableIntegerValue.prototype;
  (animatable_integer_value.AnimatableIntegerValue.fromKeyframes = function(keyframes) {
    animatable_integer_value.AnimatableIntegerValue.__proto__.fromKeyframes.call(this, keyframes);
    ;
  }).prototype = animatable_integer_value.AnimatableIntegerValue.prototype;
  dart.addTypeTests(animatable_integer_value.AnimatableIntegerValue);
  dart.addTypeCaches(animatable_integer_value.AnimatableIntegerValue);
  dart.setMethodSignature(animatable_integer_value.AnimatableIntegerValue, () => ({
    __proto__: dart.getMethods(animatable_integer_value.AnimatableIntegerValue.__proto__),
    createAnimation: dart.fnType(base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int), [])
  }));
  dart.setLibraryUri(animatable_integer_value.AnimatableIntegerValue, I[106]);
  mask.MaskMode = class MaskMode extends core._Enum {
    toString() {
      return "MaskMode." + this[_name];
    }
  };
  (mask.MaskMode.new = function(index, name) {
    mask.MaskMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = mask.MaskMode.prototype;
  dart.addTypeTests(mask.MaskMode);
  dart.addTypeCaches(mask.MaskMode);
  dart.setLibraryUri(mask.MaskMode, I[107]);
  dart.setStaticFieldSignature(mask.MaskMode, () => ['values', 'maskModeAdd', 'maskModeSubstract', 'maskModeIntersect', 'maskModeNone']);
  dart.defineExtensionMethods(mask.MaskMode, ['toString']);
  dart.defineLazy(mask.MaskMode, {
    /*mask.MaskMode.values*/get values() {
      return C[74] || CT.C74;
    },
    /*mask.MaskMode.maskModeAdd*/get maskModeAdd() {
      return C[61] || CT.C61;
    },
    /*mask.MaskMode.maskModeSubstract*/get maskModeSubstract() {
      return C[59] || CT.C59;
    },
    /*mask.MaskMode.maskModeIntersect*/get maskModeIntersect() {
      return C[60] || CT.C60;
    },
    /*mask.MaskMode.maskModeNone*/get maskModeNone() {
      return C[58] || CT.C58;
    }
  }, false);
  var maskMode$ = dart.privateName(mask, "Mask.maskMode");
  var maskPath$ = dart.privateName(mask, "Mask.maskPath");
  var opacity$5 = dart.privateName(mask, "Mask.opacity");
  var isInverted$ = dart.privateName(mask, "Mask.isInverted");
  mask.Mask = class Mask extends core.Object {
    get maskMode() {
      return this[maskMode$];
    }
    set maskMode(value) {
      super.maskMode = value;
    }
    get maskPath() {
      return this[maskPath$];
    }
    set maskPath(value) {
      super.maskPath = value;
    }
    get opacity() {
      return this[opacity$5];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get isInverted() {
      return this[isInverted$];
    }
    set isInverted(value) {
      super.isInverted = value;
    }
    static ['_#new#tearOff'](opts) {
      let maskMode = opts && 'maskMode' in opts ? opts.maskMode : null;
      let maskPath = opts && 'maskPath' in opts ? opts.maskPath : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let isInverted = opts && 'isInverted' in opts ? opts.isInverted : null;
      return new mask.Mask.new({maskMode: maskMode, maskPath: maskPath, opacity: opacity, isInverted: isInverted});
    }
  };
  (mask.Mask.new = function(opts) {
    let maskMode = opts && 'maskMode' in opts ? opts.maskMode : null;
    let maskPath = opts && 'maskPath' in opts ? opts.maskPath : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let isInverted = opts && 'isInverted' in opts ? opts.isInverted : null;
    this[maskMode$] = maskMode;
    this[maskPath$] = maskPath;
    this[opacity$5] = opacity;
    this[isInverted$] = isInverted;
    ;
  }).prototype = mask.Mask.prototype;
  dart.addTypeTests(mask.Mask);
  dart.addTypeCaches(mask.Mask);
  dart.setLibraryUri(mask.Mask, I[107]);
  dart.setFieldSignature(mask.Mask, () => ({
    __proto__: dart.getFields(mask.Mask.__proto__),
    maskMode: dart.finalFieldType(mask.MaskMode),
    maskPath: dart.finalFieldType(animatable_shape_value.AnimatableShapeValue),
    opacity: dart.finalFieldType(animatable_integer_value.AnimatableIntegerValue),
    isInverted: dart.finalFieldType(core.bool)
  }));
  var maskAnimations = dart.privateName(mask_keyframe_animation, "MaskKeyframeAnimation.maskAnimations");
  var opacityAnimations = dart.privateName(mask_keyframe_animation, "MaskKeyframeAnimation.opacityAnimations");
  var masks$0 = dart.privateName(mask_keyframe_animation, "MaskKeyframeAnimation.masks");
  mask_keyframe_animation.MaskKeyframeAnimation = class MaskKeyframeAnimation extends core.Object {
    get maskAnimations() {
      return this[maskAnimations];
    }
    set maskAnimations(value) {
      super.maskAnimations = value;
    }
    get opacityAnimations() {
      return this[opacityAnimations];
    }
    set opacityAnimations(value) {
      super.opacityAnimations = value;
    }
    get masks() {
      return this[masks$0];
    }
    set masks(value) {
      super.masks = value;
    }
    static ['_#new#tearOff'](masks) {
      return new mask_keyframe_animation.MaskKeyframeAnimation.new(masks);
    }
  };
  (mask_keyframe_animation.MaskKeyframeAnimation.new = function(masks) {
    this[maskAnimations] = T$.JSArrayOfBaseKeyframeAnimationOfShapeData$Path().of([]);
    this[opacityAnimations] = T$.JSArrayOfBaseKeyframeAnimationOfint$int().of([]);
    this[masks$0] = masks;
    for (let mask of this.masks) {
      this.maskAnimations[$add](mask.maskPath.createAnimation());
      this.opacityAnimations[$add](mask.opacity.createAnimation());
    }
  }).prototype = mask_keyframe_animation.MaskKeyframeAnimation.prototype;
  dart.addTypeTests(mask_keyframe_animation.MaskKeyframeAnimation);
  dart.addTypeCaches(mask_keyframe_animation.MaskKeyframeAnimation);
  dart.setLibraryUri(mask_keyframe_animation.MaskKeyframeAnimation, I[108]);
  dart.setFieldSignature(mask_keyframe_animation.MaskKeyframeAnimation, () => ({
    __proto__: dart.getFields(mask_keyframe_animation.MaskKeyframeAnimation.__proto__),
    maskAnimations: dart.finalFieldType(core.List$(base_keyframe_animation.BaseKeyframeAnimation$(shape_data.ShapeData, ui.Path))),
    opacityAnimations: dart.finalFieldType(core.List$(base_keyframe_animation.BaseKeyframeAnimation$(core.int, core.int))),
    masks: dart.finalFieldType(core.List$(mask.Mask))
  }));
  double_keyframe_animation.DoubleKeyframeAnimation = class DoubleKeyframeAnimation extends keyframe_animation.KeyframeAnimation$(core.double) {
    static ['_#new#tearOff'](keyframes) {
      return new double_keyframe_animation.DoubleKeyframeAnimation.new(keyframes);
    }
    getValue(keyframe, keyframeProgress) {
      T$.KeyframeOfdouble().as(keyframe);
      if (keyframe.startValue == null || keyframe.endValue == null) {
        dart.throw(core.Exception.new("Missing values for keyframe."));
      }
      if (this.valueCallback != null) {
        let value = dart.nullCheck(this.valueCallback).getValueInternal(keyframe.startFrame, keyframe.endFrame, keyframe.startValue, keyframe.endValue, keyframeProgress, this.getLinearCurrentKeyframeProgress(), this.progress);
        if (value != null) {
          return value;
        }
      }
      return dart.nullCheck(ui.lerpDouble(keyframe.startValue, keyframe.endValue, keyframeProgress));
    }
  };
  (double_keyframe_animation.DoubleKeyframeAnimation.new = function(keyframes) {
    double_keyframe_animation.DoubleKeyframeAnimation.__proto__.new.call(this, keyframes);
    ;
  }).prototype = double_keyframe_animation.DoubleKeyframeAnimation.prototype;
  dart.addTypeTests(double_keyframe_animation.DoubleKeyframeAnimation);
  dart.addTypeCaches(double_keyframe_animation.DoubleKeyframeAnimation);
  dart.setMethodSignature(double_keyframe_animation.DoubleKeyframeAnimation, () => ({
    __proto__: dart.getMethods(double_keyframe_animation.DoubleKeyframeAnimation.__proto__),
    getValue: dart.fnType(core.double, [dart.nullable(core.Object), core.double])
  }));
  dart.setLibraryUri(double_keyframe_animation.DoubleKeyframeAnimation, I[109]);
  var valueCallbackValue$ = dart.privateName(value_callback_keyframe_animation, "ValueCallbackKeyframeAnimation.valueCallbackValue");
  const _is_ValueCallbackKeyframeAnimation_default = Symbol('_is_ValueCallbackKeyframeAnimation_default');
  value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$ = dart.generic((K, A) => {
    var __t$KeyframeOfK = () => (__t$KeyframeOfK = dart.constFn(keyframe$.Keyframe$(K)))();
    var __t$JSArrayOfKeyframeOfK = () => (__t$JSArrayOfKeyframeOfK = dart.constFn(_interceptors.JSArray$(__t$KeyframeOfK())))();
    class ValueCallbackKeyframeAnimation extends base_keyframe_animation.BaseKeyframeAnimation$(K, A) {
      get valueCallbackValue() {
        return this[valueCallbackValue$];
      }
      set valueCallbackValue(value) {
        super.valueCallbackValue = value;
      }
      static ['_#new#tearOff'](K, A, valueCallback, valueCallbackValue) {
        return new (value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$(K, A)).new(valueCallback, valueCallbackValue);
      }
      setProgress(progress) {
        this.progress = progress;
      }
      getEndProgress() {
        return 1.0;
      }
      notifyListeners() {
        if (this.valueCallback != null) {
          super.notifyListeners();
        }
      }
      get value() {
        let t54;
        t54 = dart.nullCheck(this.valueCallback).getValueInternal(0.0, 0.0, this.valueCallbackValue, this.valueCallbackValue, this.progress, this.progress, this.progress);
        return t54 == null ? this.valueCallbackValue : t54;
      }
      getValue(keyframe, keyframeProgress) {
        __t$KeyframeOfK().as(keyframe);
        return this.value;
      }
    }
    (ValueCallbackKeyframeAnimation.new = function(valueCallback, valueCallbackValue) {
      this[valueCallbackValue$] = valueCallbackValue;
      ValueCallbackKeyframeAnimation.__proto__.new.call(this, __t$JSArrayOfKeyframeOfK().of([]));
      this.setValueCallback(valueCallback);
    }).prototype = ValueCallbackKeyframeAnimation.prototype;
    dart.addTypeTests(ValueCallbackKeyframeAnimation);
    ValueCallbackKeyframeAnimation.prototype[_is_ValueCallbackKeyframeAnimation_default] = true;
    dart.addTypeCaches(ValueCallbackKeyframeAnimation);
    dart.setMethodSignature(ValueCallbackKeyframeAnimation, () => ({
      __proto__: dart.getMethods(ValueCallbackKeyframeAnimation.__proto__),
      getValue: dart.fnType(A, [dart.nullable(core.Object), core.double])
    }));
    dart.setLibraryUri(ValueCallbackKeyframeAnimation, I[110]);
    dart.setFieldSignature(ValueCallbackKeyframeAnimation, () => ({
      __proto__: dart.getFields(ValueCallbackKeyframeAnimation.__proto__),
      valueCallbackValue: dart.finalFieldType(A)
    }));
    return ValueCallbackKeyframeAnimation;
  });
  value_callback_keyframe_animation.ValueCallbackKeyframeAnimation = value_callback_keyframe_animation.ValueCallbackKeyframeAnimation$();
  dart.addTypeTests(value_callback_keyframe_animation.ValueCallbackKeyframeAnimation, _is_ValueCallbackKeyframeAnimation_default);
  var _timeRemapping = dart.privateName(composition_layer, "_timeRemapping");
  var _layers = dart.privateName(composition_layer, "_layers");
  var _layerPaint = dart.privateName(composition_layer, "_layerPaint");
  var _hasMatte = dart.privateName(composition_layer, "_hasMatte");
  var _hasMasks = dart.privateName(composition_layer, "_hasMasks");
  composition_layer.CompositionLayer = class CompositionLayer extends base_layer.BaseLayer {
    static ['_#new#tearOff'](lottieDrawable, layerModel, layerModels, composition) {
      return new composition_layer.CompositionLayer.new(lottieDrawable, layerModel, layerModels, composition);
    }
    drawLayer(canvas, size, parentMatrix, opts) {
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      l.L.beginSection("CompositionLayer#draw");
      let newClipRect = new ui.Rect.fromLTWH(0.0, 0.0, this.layerModel.preCompWidth[$toDouble](), this.layerModel.preCompHeight[$toDouble]());
      newClipRect = utils['Matrix4Extension|mapRect'](parentMatrix, newClipRect);
      let isDrawingWithOffScreen = this.lottieDrawable.isApplyingOpacityToLayersEnabled && this[_layers][$length] > 1 && parentAlpha !== 255;
      if (isDrawingWithOffScreen) {
        utils['PaintExtension|setAlpha'](this[_layerPaint], parentAlpha);
        canvas.saveLayer(newClipRect, this[_layerPaint]);
      } else {
        canvas.save();
      }
      let childAlpha = isDrawingWithOffScreen ? 255 : parentAlpha;
      for (let i = this[_layers][$length] - 1; i >= 0; i = i - 1) {
        if (!newClipRect.isEmpty) {
          canvas.clipRect(newClipRect);
        }
        let layer = this[_layers][$_get](i);
        layer.draw(canvas, size, parentMatrix, {parentAlpha: childAlpha});
      }
      canvas.restore();
      l.L.endSection("CompositionLayer#draw");
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      let bounds = super.getBounds(parentMatrix, {applyParents: applyParents});
      for (let i = this[_layers][$length] - 1; i >= 0; i = i - 1) {
        let layerBounds = this[_layers][$_get](i).getBounds(this.boundsMatrix, {applyParents: true});
        bounds = bounds.expandToInclude(layerBounds);
      }
      return bounds;
    }
    setProgress(progress) {
      super.setProgress(progress);
      if (this[_timeRemapping] != null) {
        let durationFrames = this.lottieDrawable.composition.durationFrames + 0.01;
        let compositionDelayFrames = this.layerModel.composition.startFrame;
        let remappedFrames = dart.nullCheck(this[_timeRemapping]).value * this.layerModel.composition.frameRate - compositionDelayFrames;
        progress = remappedFrames / durationFrames;
      }
      if (this[_timeRemapping] == null) {
        progress = progress - this.layerModel.startProgress;
      }
      if (this.layerModel.timeStretch !== 0 && this.layerModel.name !== "__container") {
        progress = progress / this.layerModel.timeStretch;
      }
      for (let i = this[_layers][$length] - 1; i >= 0; i = i - 1) {
        this[_layers][$_get](i).setProgress(progress);
      }
    }
    get hasMasks() {
      if (this[_hasMasks] == null) {
        for (let i = this[_layers][$length] - 1; i >= 0; i = i - 1) {
          let layer = this[_layers][$_get](i);
          if (shape_layer.ShapeLayer.is(layer)) {
            if (layer.hasMasksOnThisLayer()) {
              this[_hasMasks] = true;
              return true;
            }
          } else if (composition_layer.CompositionLayer.is(layer) && dart.nullCheck(layer.hasMasks)) {
            this[_hasMasks] = true;
            return true;
          }
        }
        this[_hasMasks] = false;
      }
      return this[_hasMasks];
    }
    get hasMatte() {
      if (this[_hasMatte] == null) {
        if (this.hasMatteOnThisLayer()) {
          this[_hasMatte] = true;
          return true;
        }
        for (let i = this[_layers][$length] - 1; i >= 0; i = i - 1) {
          if (this[_layers][$_get](i).hasMatteOnThisLayer()) {
            this[_hasMatte] = true;
            return true;
          }
        }
        this[_hasMatte] = false;
      }
      return dart.nullCheck(this[_hasMatte]);
    }
    resolveChildKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      for (let i = 0; i < this[_layers][$length]; i = i + 1) {
        this[_layers][$_get](i).resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath);
      }
    }
    addValueCallback(T, property, callback) {
      super.addValueCallback(T, property, callback);
      if (dart.equals(property, 27)) {
        if (callback == null) {
          if (this[_timeRemapping] != null) {
            dart.nullCheck(this[_timeRemapping]).setValueCallback(null);
          }
        } else {
          this[_timeRemapping] = new (T$.ValueCallbackKeyframeAnimationOfdouble$double()).new(T$.LottieValueCallbackOfdouble().as(callback), 1.0);
          dart.nullCheck(this[_timeRemapping]).addUpdateListener(dart.bind(this, 'invalidateSelf'));
          this.addAnimation(this[_timeRemapping]);
        }
      }
    }
  };
  (composition_layer.CompositionLayer.new = function(lottieDrawable, layerModel, layerModels, composition) {
    this[_timeRemapping] = null;
    this[_layers] = T$.JSArrayOfBaseLayer().of([]);
    this[_layerPaint] = ui.Paint.new();
    this[_hasMatte] = null;
    this[_hasMasks] = null;
    composition_layer.CompositionLayer.__proto__.new.call(this, lottieDrawable, layerModel);
    let timeRemapping = layerModel.timeRemapping;
    if (timeRemapping != null) {
      this[_timeRemapping] = timeRemapping.createAnimation();
      this.addAnimation(this[_timeRemapping]);
      dart.nullCheck(this[_timeRemapping]).addUpdateListener(dart.bind(this, 'invalidateSelf'));
    }
    let layerMap = new (T$.IdentityMapOfint$BaseLayer()).new();
    let mattedLayer = null;
    for (let i = layerModels[$length] - 1; i >= 0; i = i - 1) {
      let lm = layerModels[$_get](i);
      let layer = base_layer.BaseLayer.forModel(this, lm, lottieDrawable, composition);
      if (layer == null) {
        continue;
      }
      layerMap[$_set](layer.layerModel.id, layer);
      if (mattedLayer != null) {
        mattedLayer.setMatteLayer(layer);
        mattedLayer = null;
      } else {
        this[_layers][$insert](0, layer);
        switch (lm.matteType) {
          case C[65] || CT.C65:
          case C[66] || CT.C66:
            {
              mattedLayer = layer;
              break;
            }
          case C[67] || CT.C67:
          case C[68] || CT.C68:
          case C[64] || CT.C64:
          case C[69] || CT.C69:
            {
              break;
            }
        }
      }
    }
    for (let key of layerMap[$keys]) {
      let layerView = layerMap[$_get](key);
      if (layerView == null) {
        continue;
      }
      let parentLayer = layerMap[$_get](layerView.layerModel.parentId);
      if (parentLayer != null) {
        layerView.setParentLayer(parentLayer);
      }
    }
  }).prototype = composition_layer.CompositionLayer.prototype;
  dart.addTypeTests(composition_layer.CompositionLayer);
  dart.addTypeCaches(composition_layer.CompositionLayer);
  dart.setMethodSignature(composition_layer.CompositionLayer, () => ({
    __proto__: dart.getMethods(composition_layer.CompositionLayer.__proto__),
    drawLayer: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(composition_layer.CompositionLayer, () => ({
    __proto__: dart.getGetters(composition_layer.CompositionLayer.__proto__),
    hasMasks: dart.nullable(core.bool),
    hasMatte: core.bool
  }));
  dart.setLibraryUri(composition_layer.CompositionLayer, I[111]);
  dart.setFieldSignature(composition_layer.CompositionLayer, () => ({
    __proto__: dart.getFields(composition_layer.CompositionLayer.__proto__),
    [_timeRemapping]: dart.fieldType(dart.nullable(base_keyframe_animation.BaseKeyframeAnimation$(core.double, core.double))),
    [_layers]: dart.finalFieldType(core.List$(base_layer.BaseLayer)),
    [_layerPaint]: dart.finalFieldType(ui.Paint),
    [_hasMatte]: dart.fieldType(dart.nullable(core.bool)),
    [_hasMasks]: dart.fieldType(dart.nullable(core.bool))
  }));
  const _is__KeyframesWrapper_default = Symbol('_is__KeyframesWrapper_default');
  base_keyframe_animation._KeyframesWrapper$ = dart.generic(T => {
    class _KeyframesWrapper extends core.Object {}
    (_KeyframesWrapper.new = function() {
      ;
    }).prototype = _KeyframesWrapper.prototype;
    dart.addTypeTests(_KeyframesWrapper);
    _KeyframesWrapper.prototype[_is__KeyframesWrapper_default] = true;
    dart.addTypeCaches(_KeyframesWrapper);
    dart.setLibraryUri(_KeyframesWrapper, I[58]);
    return _KeyframesWrapper;
  });
  base_keyframe_animation._KeyframesWrapper = base_keyframe_animation._KeyframesWrapper$();
  dart.addTypeTests(base_keyframe_animation._KeyframesWrapper, _is__KeyframesWrapper_default);
  const _is__EmptyKeyframeWrapper_default = Symbol('_is__EmptyKeyframeWrapper_default');
  base_keyframe_animation._EmptyKeyframeWrapper$ = dart.generic(T => {
    class _EmptyKeyframeWrapper extends core.Object {
      get isEmpty() {
        return true;
      }
      isValueChanged(progress) {
        return false;
      }
      getCurrentKeyframe() {
        dart.throw(new core.StateError.new("not implemented"));
      }
      getStartDelayProgress() {
        return 0.0;
      }
      getEndProgress() {
        return 1.0;
      }
      isCachedValueEnabled(progress) {
        dart.throw(new core.StateError.new("not implemented"));
      }
      static ['_#new#tearOff'](T) {
        return new (base_keyframe_animation._EmptyKeyframeWrapper$(T)).new();
      }
    }
    (_EmptyKeyframeWrapper.new = function() {
      ;
    }).prototype = _EmptyKeyframeWrapper.prototype;
    dart.addTypeTests(_EmptyKeyframeWrapper);
    _EmptyKeyframeWrapper.prototype[_is__EmptyKeyframeWrapper_default] = true;
    dart.addTypeCaches(_EmptyKeyframeWrapper);
    _EmptyKeyframeWrapper[dart.implements] = () => [base_keyframe_animation._KeyframesWrapper$(T)];
    dart.setMethodSignature(_EmptyKeyframeWrapper, () => ({
      __proto__: dart.getMethods(_EmptyKeyframeWrapper.__proto__),
      isValueChanged: dart.fnType(core.bool, [core.double]),
      getCurrentKeyframe: dart.fnType(keyframe$.Keyframe$(T), []),
      getStartDelayProgress: dart.fnType(core.double, []),
      getEndProgress: dart.fnType(core.double, []),
      isCachedValueEnabled: dart.fnType(core.bool, [core.double])
    }));
    dart.setGetterSignature(_EmptyKeyframeWrapper, () => ({
      __proto__: dart.getGetters(_EmptyKeyframeWrapper.__proto__),
      isEmpty: core.bool
    }));
    dart.setLibraryUri(_EmptyKeyframeWrapper, I[58]);
    return _EmptyKeyframeWrapper;
  });
  base_keyframe_animation._EmptyKeyframeWrapper = base_keyframe_animation._EmptyKeyframeWrapper$();
  dart.addTypeTests(base_keyframe_animation._EmptyKeyframeWrapper, _is__EmptyKeyframeWrapper_default);
  var _cachedInterpolatedProgress = dart.privateName(base_keyframe_animation, "_cachedInterpolatedProgress");
  const _is__SingleKeyframeWrapper_default = Symbol('_is__SingleKeyframeWrapper_default');
  base_keyframe_animation._SingleKeyframeWrapper$ = dart.generic(T => {
    class _SingleKeyframeWrapper extends core.Object {
      static ['_#new#tearOff'](T, keyframes) {
        return new (base_keyframe_animation._SingleKeyframeWrapper$(T)).new(keyframes);
      }
      get isEmpty() {
        return false;
      }
      isValueChanged(progress) {
        return !this.keyframe.isStatic;
      }
      getCurrentKeyframe() {
        return this.keyframe;
      }
      getStartDelayProgress() {
        return this.keyframe.startProgress;
      }
      getEndProgress() {
        return this.keyframe.endProgress;
      }
      isCachedValueEnabled(progress) {
        if (this[_cachedInterpolatedProgress] === progress) {
          return true;
        }
        this[_cachedInterpolatedProgress] = progress;
        return false;
      }
    }
    (_SingleKeyframeWrapper.new = function(keyframes) {
      this[_cachedInterpolatedProgress] = -1.0;
      this.keyframe = keyframes[$first];
      ;
    }).prototype = _SingleKeyframeWrapper.prototype;
    dart.addTypeTests(_SingleKeyframeWrapper);
    _SingleKeyframeWrapper.prototype[_is__SingleKeyframeWrapper_default] = true;
    dart.addTypeCaches(_SingleKeyframeWrapper);
    _SingleKeyframeWrapper[dart.implements] = () => [base_keyframe_animation._KeyframesWrapper$(T)];
    dart.setMethodSignature(_SingleKeyframeWrapper, () => ({
      __proto__: dart.getMethods(_SingleKeyframeWrapper.__proto__),
      isValueChanged: dart.fnType(core.bool, [core.double]),
      getCurrentKeyframe: dart.fnType(keyframe$.Keyframe$(T), []),
      getStartDelayProgress: dart.fnType(core.double, []),
      getEndProgress: dart.fnType(core.double, []),
      isCachedValueEnabled: dart.fnType(core.bool, [core.double])
    }));
    dart.setGetterSignature(_SingleKeyframeWrapper, () => ({
      __proto__: dart.getGetters(_SingleKeyframeWrapper.__proto__),
      isEmpty: core.bool
    }));
    dart.setLibraryUri(_SingleKeyframeWrapper, I[58]);
    dart.setFieldSignature(_SingleKeyframeWrapper, () => ({
      __proto__: dart.getFields(_SingleKeyframeWrapper.__proto__),
      keyframe: dart.finalFieldType(keyframe$.Keyframe$(T)),
      [_cachedInterpolatedProgress]: dart.fieldType(core.double)
    }));
    return _SingleKeyframeWrapper;
  });
  base_keyframe_animation._SingleKeyframeWrapper = base_keyframe_animation._SingleKeyframeWrapper$();
  dart.addTypeTests(base_keyframe_animation._SingleKeyframeWrapper, _is__SingleKeyframeWrapper_default);
  var _currentKeyframe = dart.privateName(base_keyframe_animation, "_currentKeyframe");
  var _cachedCurrentKeyframe = dart.privateName(base_keyframe_animation, "_cachedCurrentKeyframe");
  const _is__KeyframesWrapperImpl_default = Symbol('_is__KeyframesWrapperImpl_default');
  base_keyframe_animation._KeyframesWrapperImpl$ = dart.generic(T => {
    class _KeyframesWrapperImpl extends core.Object {
      static ['_#new#tearOff'](T, keyframes) {
        return new (base_keyframe_animation._KeyframesWrapperImpl$(T)).new(keyframes);
      }
      get isEmpty() {
        return false;
      }
      isValueChanged(progress) {
        if (dart.nullCheck(this[_currentKeyframe]).containsProgress(progress)) {
          return !dart.nullCheck(this[_currentKeyframe]).isStatic;
        }
        this[_currentKeyframe] = this.findKeyframe(progress);
        return true;
      }
      findKeyframe(progress) {
        let keyframe = this.keyframes[$last];
        if (progress >= keyframe.startProgress) {
          return keyframe;
        }
        for (let i = this.keyframes[$length] - 2; i >= 1; i = i - 1) {
          keyframe = this.keyframes[$_get](i);
          if (dart.equals(this[_currentKeyframe], keyframe)) {
            continue;
          }
          if (keyframe.containsProgress(progress)) {
            return keyframe;
          }
        }
        return this.keyframes[$first];
      }
      getCurrentKeyframe() {
        return dart.nullCheck(this[_currentKeyframe]);
      }
      getStartDelayProgress() {
        return this.keyframes[$first].startProgress;
      }
      getEndProgress() {
        return this.keyframes[$last].endProgress;
      }
      isCachedValueEnabled(progress) {
        if (dart.equals(this[_cachedCurrentKeyframe], this[_currentKeyframe]) && this[_cachedInterpolatedProgress] === progress) {
          return true;
        }
        this[_cachedCurrentKeyframe] = this[_currentKeyframe];
        this[_cachedInterpolatedProgress] = progress;
        return false;
      }
    }
    (_KeyframesWrapperImpl.new = function(keyframes) {
      this[_currentKeyframe] = null;
      this[_cachedCurrentKeyframe] = null;
      this[_cachedInterpolatedProgress] = -1.0;
      this.keyframes = keyframes;
      this[_currentKeyframe] = this.findKeyframe(0.0);
    }).prototype = _KeyframesWrapperImpl.prototype;
    dart.addTypeTests(_KeyframesWrapperImpl);
    _KeyframesWrapperImpl.prototype[_is__KeyframesWrapperImpl_default] = true;
    dart.addTypeCaches(_KeyframesWrapperImpl);
    _KeyframesWrapperImpl[dart.implements] = () => [base_keyframe_animation._KeyframesWrapper$(T)];
    dart.setMethodSignature(_KeyframesWrapperImpl, () => ({
      __proto__: dart.getMethods(_KeyframesWrapperImpl.__proto__),
      isValueChanged: dart.fnType(core.bool, [core.double]),
      findKeyframe: dart.fnType(keyframe$.Keyframe$(T), [core.double]),
      getCurrentKeyframe: dart.fnType(keyframe$.Keyframe$(T), []),
      getStartDelayProgress: dart.fnType(core.double, []),
      getEndProgress: dart.fnType(core.double, []),
      isCachedValueEnabled: dart.fnType(core.bool, [core.double])
    }));
    dart.setGetterSignature(_KeyframesWrapperImpl, () => ({
      __proto__: dart.getGetters(_KeyframesWrapperImpl.__proto__),
      isEmpty: core.bool
    }));
    dart.setLibraryUri(_KeyframesWrapperImpl, I[58]);
    dart.setFieldSignature(_KeyframesWrapperImpl, () => ({
      __proto__: dart.getFields(_KeyframesWrapperImpl.__proto__),
      keyframes: dart.finalFieldType(core.List$(keyframe$.Keyframe$(T))),
      [_currentKeyframe]: dart.fieldType(dart.nullable(keyframe$.Keyframe$(T))),
      [_cachedCurrentKeyframe]: dart.fieldType(dart.nullable(keyframe$.Keyframe$(T))),
      [_cachedInterpolatedProgress]: dart.fieldType(core.double)
    }));
    return _KeyframesWrapperImpl;
  });
  base_keyframe_animation._KeyframesWrapperImpl = base_keyframe_animation._KeyframesWrapperImpl$();
  dart.addTypeTests(base_keyframe_animation._KeyframesWrapperImpl, _is__KeyframesWrapperImpl_default);
  key_path_element.KeyPathElement = class KeyPathElement extends core.Object {};
  (key_path_element.KeyPathElement.new = function() {
    ;
  }).prototype = key_path_element.KeyPathElement.prototype;
  dart.addTypeTests(key_path_element.KeyPathElement);
  dart.addTypeCaches(key_path_element.KeyPathElement);
  dart.setLibraryUri(key_path_element.KeyPathElement, I[112]);
  var keys$ = dart.privateName(key_path, "KeyPath.keys");
  var _resolvedElement = dart.privateName(key_path, "_resolvedElement");
  key_path.KeyPath = class KeyPath extends core.Object {
    get keys() {
      return this[keys$];
    }
    set keys(value) {
      super.keys = value;
    }
    static ['_#new#tearOff'](keys) {
      return new key_path.KeyPath.new(keys);
    }
    static ['_#copy#tearOff'](keyPath) {
      return new key_path.KeyPath.copy(keyPath);
    }
    addKey(key) {
      let newKeyPath = new key_path.KeyPath.copy(this);
      newKeyPath.keys[$add](key);
      return newKeyPath;
    }
    resolve(element) {
      let keyPath = new key_path.KeyPath.copy(this);
      keyPath[_resolvedElement] = element;
      return keyPath;
    }
    get resolvedElement() {
      return this[_resolvedElement];
    }
    matches(key, depth) {
      if (this.isContainer(key)) {
        return true;
      }
      if (depth >= this.keys[$length]) {
        return false;
      }
      if (this.keys[$_get](depth) === key || this.keys[$_get](depth) === "**" || this.keys[$_get](depth) === "*") {
        return true;
      }
      return false;
    }
    incrementDepthBy(key, depth) {
      if (this.isContainer(key)) {
        return 0;
      }
      if (this.keys[$_get](depth) !== "**") {
        return 1;
      }
      if (depth === this.keys[$length] - 1) {
        return 0;
      }
      if (this.keys[$_get](depth + 1) === key) {
        return 2;
      }
      return 0;
    }
    fullyResolvesTo(key, depth) {
      if (depth >= this.keys[$length]) {
        return false;
      }
      let isLastDepth = depth === this.keys[$length] - 1;
      let keyAtDepth = this.keys[$_get](depth);
      let isGlobstar = keyAtDepth === "**";
      if (!isGlobstar) {
        let matches = keyAtDepth === key || keyAtDepth === "*";
        return (isLastDepth || depth === this.keys[$length] - 2 && this.endsWithGlobstar()) && matches;
      }
      let isGlobstarButNextKeyMatches = !isLastDepth && this.keys[$_get](depth + 1) === key;
      if (isGlobstarButNextKeyMatches) {
        return depth === this.keys[$length] - 2 || depth === this.keys[$length] - 3 && this.endsWithGlobstar();
      }
      if (isLastDepth) {
        return true;
      }
      if (depth + 1 < this.keys[$length] - 1) {
        return false;
      }
      return this.keys[$_get](depth + 1) === key;
    }
    propagateToChildren(key, depth) {
      if ("__container" === key) {
        return true;
      }
      return depth < this.keys[$length] - 1 || this.keys[$_get](depth) === "**";
    }
    isContainer(key) {
      return "__container" === key;
    }
    endsWithGlobstar() {
      return this.keys[$_get](this.keys[$length] - 1) === "**";
    }
    keysToString() {
      return this.keys[$toString]();
    }
    toString() {
      return "KeyPath{keys=" + dart.str(this.keys) + ",resolved=" + dart.str(this.resolvedElement != null) + "}";
    }
  };
  (key_path.KeyPath.new = function(keys) {
    this[_resolvedElement] = null;
    this[keys$] = keys[$toList]();
    ;
  }).prototype = key_path.KeyPath.prototype;
  (key_path.KeyPath.copy = function(keyPath) {
    this[keys$] = keyPath.keys[$toList]();
    this[_resolvedElement] = keyPath[_resolvedElement];
    ;
  }).prototype = key_path.KeyPath.prototype;
  dart.addTypeTests(key_path.KeyPath);
  dart.addTypeCaches(key_path.KeyPath);
  dart.setMethodSignature(key_path.KeyPath, () => ({
    __proto__: dart.getMethods(key_path.KeyPath.__proto__),
    addKey: dart.fnType(key_path.KeyPath, [core.String]),
    resolve: dart.fnType(key_path.KeyPath, [key_path_element.KeyPathElement]),
    matches: dart.fnType(core.bool, [dart.nullable(core.String), core.int]),
    incrementDepthBy: dart.fnType(core.int, [dart.nullable(core.String), core.int]),
    fullyResolvesTo: dart.fnType(core.bool, [dart.nullable(core.String), core.int]),
    propagateToChildren: dart.fnType(core.bool, [dart.nullable(core.String), core.int]),
    isContainer: dart.fnType(core.bool, [dart.nullable(core.String)]),
    endsWithGlobstar: dart.fnType(core.bool, []),
    keysToString: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(key_path.KeyPath, () => ({
    __proto__: dart.getGetters(key_path.KeyPath.__proto__),
    resolvedElement: dart.nullable(key_path_element.KeyPathElement)
  }));
  dart.setLibraryUri(key_path.KeyPath, I[113]);
  dart.setFieldSignature(key_path.KeyPath, () => ({
    __proto__: dart.getFields(key_path.KeyPath.__proto__),
    keys: dart.finalFieldType(core.List$(core.String)),
    [_resolvedElement]: dart.fieldType(dart.nullable(key_path_element.KeyPathElement))
  }));
  dart.defineExtensionMethods(key_path.KeyPath, ['toString']);
  var keyPath$ = dart.privateName(value_delegate, "ValueDelegate.keyPath");
  var property$ = dart.privateName(value_delegate, "ValueDelegate.property");
  var value$0 = dart.privateName(value_delegate, "ValueDelegate.value");
  var callback$ = dart.privateName(value_delegate, "ValueDelegate.callback");
  var _resolved = dart.privateName(value_delegate, "_resolved");
  var _resolve = dart.privateName(value_delegate, "_resolve");
  const _is_ValueDelegate_default = Symbol('_is_ValueDelegate_default');
  value_delegate.ValueDelegate$ = dart.generic(T => {
    var __t$ResolvedValueDelegateOfT = () => (__t$ResolvedValueDelegateOfT = dart.constFn(value_delegate.ResolvedValueDelegate$(T)))();
    var __t$ValueDelegateOfT = () => (__t$ValueDelegateOfT = dart.constFn(value_delegate.ValueDelegate$(T)))();
    class ValueDelegate extends core.Object {
      get keyPath() {
        return this[keyPath$];
      }
      set keyPath(value) {
        super.keyPath = value;
      }
      get property() {
        return this[property$];
      }
      set property(value) {
        super.property = value;
      }
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      get callback() {
        return this[callback$];
      }
      set callback(value) {
        super.callback = value;
      }
      static ['_#_#tearOff'](T, keyPath, property, value, callback) {
        return new (value_delegate.ValueDelegate$(T)).__(keyPath, property, value, callback);
      }
      static _offset(keyPath, property, value, callback, relative) {
        if (relative != null) {
          if (!(callback == null)) dart.assertFailed(null, I[114], 30, 14, "callback == null");
          callback = lottie_relative_point_value_callback.relativeOffsetValueCallback(relative);
        }
        return new (T$.ValueDelegateOfOffset()).__(keyPath, property, value, callback);
      }
      static _double(keyPath, property, value, callback, relative) {
        if (relative != null) {
          if (!(callback == null)) dart.assertFailed(null, I[114], 43, 14, "callback == null");
          callback = lottie_relative_double_value_callback.relativeDoubleValueCallback(relative);
        }
        return new (T$.ValueDelegateOfdouble()).__(keyPath, property, value, callback);
      }
      static _int(keyPath, property, value, callback, relative) {
        if (relative != null) {
          if (!(callback == null)) dart.assertFailed(null, I[114], 52, 14, "callback == null");
          callback = lottie_relative_integer_value_callback.relativeIntegerValueCallback(relative);
        }
        return new (T$.ValueDelegateOfint()).__(keyPath, property, value, callback);
      }
      static color(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        return new (T$.ValueDelegateOfColor()).__(keyPath, lottie_property.LottieProperty.color, value, callback);
      }
      static strokeColor(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        return new (T$.ValueDelegateOfColor()).__(keyPath, lottie_property.LottieProperty.strokeColor, value, callback);
      }
      static transformOpacity(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._int(keyPath, 3, value, callback, relative);
      }
      static opacity(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._int(keyPath, 4, value, callback, relative);
      }
      static transformAnchorPoint(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._offset(keyPath, lottie_property.LottieProperty.transformAnchorPoint, value, callback, relative);
      }
      static transformPosition(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._offset(keyPath, lottie_property.LottieProperty.transformPosition, value, callback, relative);
      }
      static ellipseSize(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._offset(keyPath, lottie_property.LottieProperty.ellipseSize, value, callback, relative);
      }
      static rectangleSize(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._offset(keyPath, lottie_property.LottieProperty.rectangleSize, value, callback, relative);
      }
      static cornerRadius(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 9, value, callback, relative);
      }
      static position(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._offset(keyPath, lottie_property.LottieProperty.position, value, callback, relative);
      }
      static transformScale(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._offset(keyPath, lottie_property.LottieProperty.transformScale, value, callback, relative);
      }
      static transformRotation(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 12, value, callback, relative);
      }
      static transformSkew(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 13, value, callback, relative);
      }
      static transformSkewAngle(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 14, value, callback, relative);
      }
      static strokeWidth(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 15, value, callback, relative);
      }
      static textTracking(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 16, value, callback, relative);
      }
      static repeaterCopies(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 17, value, callback, relative);
      }
      static repeaterOffset(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 18, value, callback, relative);
      }
      static polystarPoints(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 19, value, callback, relative);
      }
      static polystarRotation(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 20, value, callback, relative);
      }
      static polystarInnerRadius(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 21, value, callback, relative);
      }
      static polystarOuterRadius(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 22, value, callback, relative);
      }
      static polystarInnerRoundedness(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 23, value, callback, relative);
      }
      static polystarOuterRoundedness(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 24, value, callback, relative);
      }
      static transformStartOpacity(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 25, value, callback, relative);
      }
      static transformEndOpacity(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 26, value, callback, relative);
      }
      static timeRemap(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 27, value, callback, relative);
      }
      static textSize(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        let relative = opts && 'relative' in opts ? opts.relative : null;
        return value_delegate.ValueDelegate._double(keyPath, 28, value, callback, relative);
      }
      static text(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        return new (T$.ValueDelegateOfString()).__(keyPath, "dynamic_text", value, callback);
      }
      static colorFilter(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        return new (T$.ValueDelegateOfColorFilter()).__(keyPath, lottie_property.LottieProperty.colorFilter, value, callback);
      }
      static gradientColor(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        return new (T$.ValueDelegateOfListOfColor()).__(keyPath, lottie_property.LottieProperty.gradientColor, value, callback);
      }
      static blurRadius(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        return new (T$.ValueDelegateOfdouble()).__(keyPath, 29, value, callback);
      }
      static dropShadow(keyPath, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let callback = opts && 'callback' in opts ? opts.callback : null;
        return new (T$.ValueDelegateOfDropShadow()).__(keyPath, lottie_property.LottieProperty.dropShadow, value, callback);
      }
      [_resolve](resolvedPaths) {
        this[_resolved] = new (__t$ResolvedValueDelegateOfT()).new(this, resolvedPaths);
        return dart.nullCheck(this[_resolved]);
      }
      isSameProperty(other) {
        if (this === other) return true;
        return __t$ValueDelegateOfT().is(other) && (C[75] || CT.C75).equals(other.keyPath, this.keyPath) && dart.equals(other.property, this.property);
      }
    }
    (ValueDelegate.__ = function(keyPath, property, value, callback) {
      this[_resolved] = null;
      this[keyPath$] = keyPath;
      this[property$] = property;
      this[value$0] = value;
      this[callback$] = callback;
      if (!(value == null || callback == null)) dart.assertFailed("Value and callback can't be both specified.", I[114], 20, 16, "value == null || callback == null");
      ;
    }).prototype = ValueDelegate.prototype;
    dart.addTypeTests(ValueDelegate);
    ValueDelegate.prototype[_is_ValueDelegate_default] = true;
    dart.addTypeCaches(ValueDelegate);
    dart.setMethodSignature(ValueDelegate, () => ({
      __proto__: dart.getMethods(ValueDelegate.__proto__),
      [_resolve]: dart.fnType(value_delegate.ResolvedValueDelegate, [core.List$(key_path.KeyPath)]),
      isSameProperty: dart.fnType(core.bool, [value_delegate.ValueDelegate])
    }));
    dart.setStaticMethodSignature(ValueDelegate, () => ['_offset', '_double', '_int', 'color', 'strokeColor', 'transformOpacity', 'opacity', 'transformAnchorPoint', 'transformPosition', 'ellipseSize', 'rectangleSize', 'cornerRadius', 'position', 'transformScale', 'transformRotation', 'transformSkew', 'transformSkewAngle', 'strokeWidth', 'textTracking', 'repeaterCopies', 'repeaterOffset', 'polystarPoints', 'polystarRotation', 'polystarInnerRadius', 'polystarOuterRadius', 'polystarInnerRoundedness', 'polystarOuterRoundedness', 'transformStartOpacity', 'transformEndOpacity', 'timeRemap', 'textSize', 'text', 'colorFilter', 'gradientColor', 'blurRadius', 'dropShadow']);
    dart.setLibraryUri(ValueDelegate, I[115]);
    dart.setFieldSignature(ValueDelegate, () => ({
      __proto__: dart.getFields(ValueDelegate.__proto__),
      keyPath: dart.finalFieldType(core.List$(core.String)),
      property: dart.finalFieldType(T),
      value: dart.finalFieldType(dart.nullable(T)),
      callback: dart.finalFieldType(dart.nullable(dart.fnType(T, [lottie_frame_info.LottieFrameInfo$(T)]))),
      [_resolved]: dart.fieldType(dart.nullable(value_delegate.ResolvedValueDelegate$(T)))
    }));
    return ValueDelegate;
  });
  value_delegate.ValueDelegate = value_delegate.ValueDelegate$();
  dart.addTypeTests(value_delegate.ValueDelegate, _is_ValueDelegate_default);
  var valueDelegate$ = dart.privateName(value_delegate, "ResolvedValueDelegate.valueDelegate");
  var keyPaths$ = dart.privateName(value_delegate, "ResolvedValueDelegate.keyPaths");
  var valueCallback$ = dart.privateName(value_delegate, "ResolvedValueDelegate.valueCallback");
  const _is_ResolvedValueDelegate_default = Symbol('_is_ResolvedValueDelegate_default');
  value_delegate.ResolvedValueDelegate$ = dart.generic(T => {
    var __t$LottieValueCallbackOfT = () => (__t$LottieValueCallbackOfT = dart.constFn(lottie_value_callback.LottieValueCallback$(T)))();
    var __t$LottieFrameInfoOfT = () => (__t$LottieFrameInfoOfT = dart.constFn(lottie_frame_info.LottieFrameInfo$(T)))();
    var __t$LottieFrameInfoOfTToT = () => (__t$LottieFrameInfoOfTToT = dart.constFn(dart.fnType(T, [__t$LottieFrameInfoOfT()])))();
    var __t$LottieFrameInfoOfTToNT = () => (__t$LottieFrameInfoOfTToNT = dart.constFn(dart.nullable(__t$LottieFrameInfoOfTToT())))();
    var __t$ValueDelegateOfT = () => (__t$ValueDelegateOfT = dart.constFn(value_delegate.ValueDelegate$(T)))();
    class ResolvedValueDelegate extends core.Object {
      get valueDelegate() {
        return this[valueDelegate$];
      }
      set valueDelegate(value) {
        super.valueDelegate = value;
      }
      get keyPaths() {
        return this[keyPaths$];
      }
      set keyPaths(value) {
        super.keyPaths = value;
      }
      get valueCallback() {
        return this[valueCallback$];
      }
      set valueCallback(value) {
        super.valueCallback = value;
      }
      static ['_#new#tearOff'](T, valueDelegate, keyPaths) {
        return new (value_delegate.ResolvedValueDelegate$(T)).new(valueDelegate, keyPaths);
      }
      get property() {
        return this.valueDelegate.property;
      }
      updateDelegate(delegate) {
        let t54;
        __t$ValueDelegateOfT().as(delegate);
        t54 = this.valueCallback;
        (() => {
          t54.setValue(delegate.value);
          t54.callback = __t$LottieFrameInfoOfTToNT().as(delegate.callback);
          return t54;
        })();
      }
      clear() {
        let t54;
        t54 = this.valueCallback;
        (() => {
          t54.setValue(null);
          t54.callback = null;
          return t54;
        })();
      }
      addValueCallback(drawable) {
        let invalidate = false;
        if (this.valueDelegate.keyPath[$isEmpty]) {
          drawable.compositionLayer.addValueCallback(T, this.property, this.valueCallback);
          invalidate = true;
        } else {
          for (let keyPath of this.keyPaths) {
            dart.nullCheck(keyPath.resolvedElement).addValueCallback(T, this.property, this.valueCallback);
            invalidate = true;
          }
        }
        if (invalidate) {
          drawable.invalidateSelf();
          if (dart.equals(this.property, 27)) {
            drawable.setProgress(drawable.progress);
          }
        }
      }
    }
    (ResolvedValueDelegate.new = function(valueDelegate, keyPaths) {
      let t54;
      this[valueDelegate$] = valueDelegate;
      this[keyPaths$] = keyPaths;
      this[valueCallback$] = (t54 = new (__t$LottieValueCallbackOfT()).new(valueDelegate.value), (() => {
        t54.callback = __t$LottieFrameInfoOfTToNT().as(valueDelegate.callback);
        return t54;
      })());
      ;
    }).prototype = ResolvedValueDelegate.prototype;
    dart.addTypeTests(ResolvedValueDelegate);
    ResolvedValueDelegate.prototype[_is_ResolvedValueDelegate_default] = true;
    dart.addTypeCaches(ResolvedValueDelegate);
    dart.setMethodSignature(ResolvedValueDelegate, () => ({
      __proto__: dart.getMethods(ResolvedValueDelegate.__proto__),
      updateDelegate: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      addValueCallback: dart.fnType(dart.void, [lottie_drawable.LottieDrawable])
    }));
    dart.setGetterSignature(ResolvedValueDelegate, () => ({
      __proto__: dart.getGetters(ResolvedValueDelegate.__proto__),
      property: T
    }));
    dart.setLibraryUri(ResolvedValueDelegate, I[115]);
    dart.setFieldSignature(ResolvedValueDelegate, () => ({
      __proto__: dart.getFields(ResolvedValueDelegate.__proto__),
      valueDelegate: dart.finalFieldType(value_delegate.ValueDelegate$(T)),
      keyPaths: dart.finalFieldType(core.List$(key_path.KeyPath)),
      valueCallback: dart.finalFieldType(lottie_value_callback.LottieValueCallback$(T))
    }));
    return ResolvedValueDelegate;
  });
  value_delegate.ResolvedValueDelegate = value_delegate.ResolvedValueDelegate$();
  dart.addTypeTests(value_delegate.ResolvedValueDelegate, _is_ResolvedValueDelegate_default);
  value_delegate.internalResolved = function internalResolved(valueDelegate) {
    return dart.nullCheck(valueDelegate[_resolved]);
  };
  value_delegate.internalResolve = function internalResolve(delegate, resolvedPaths) {
    return delegate[_resolve](resolvedPaths);
  };
  var text$0 = dart.privateName(lottie_delegates, "LottieDelegates.text");
  var textStyle$ = dart.privateName(lottie_delegates, "LottieDelegates.textStyle");
  var values$ = dart.privateName(lottie_delegates, "LottieDelegates.values");
  var image$ = dart.privateName(lottie_delegates, "LottieDelegates.image");
  lottie_delegates.LottieDelegates = class LottieDelegates extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get values() {
      return this[values$];
    }
    set values(value) {
      super.values = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
      let values = opts && 'values' in opts ? opts.values : null;
      let image = opts && 'image' in opts ? opts.image : null;
      return new lottie_delegates.LottieDelegates.new({text: text, textStyle: textStyle, values: values, image: image});
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || lottie_delegates.LottieDelegates.is(other) && dart.equals(this.text, other.text) && dart.equals(this.textStyle, other.textStyle) && dart.equals(this.values, other.values);
    }
    get hashCode() {
      return core.Object.hash(this.text, this.textStyle, this.values);
    }
  };
  (lottie_delegates.LottieDelegates.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let values = opts && 'values' in opts ? opts.values : null;
    let image = opts && 'image' in opts ? opts.image : null;
    this[text$0] = text;
    this[textStyle$] = textStyle;
    this[values$] = values;
    this[image$] = image;
    ;
  }).prototype = lottie_delegates.LottieDelegates.prototype;
  dart.addTypeTests(lottie_delegates.LottieDelegates);
  dart.addTypeCaches(lottie_delegates.LottieDelegates);
  dart.setLibraryUri(lottie_delegates.LottieDelegates, I[116]);
  dart.setFieldSignature(lottie_delegates.LottieDelegates, () => ({
    __proto__: dart.getFields(lottie_delegates.LottieDelegates.__proto__),
    text: dart.finalFieldType(dart.nullable(dart.fnType(core.String, [core.String]))),
    textStyle: dart.finalFieldType(dart.nullable(dart.fnType(text_style.TextStyle, [lottie_drawable.LottieFontStyle]))),
    values: dart.finalFieldType(dart.nullable(core.List$(value_delegate.ValueDelegate))),
    image: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(ui.Image), [composition$.LottieComposition, lottie_image_asset.LottieImageAsset])))
  }));
  dart.defineExtensionMethods(lottie_delegates.LottieDelegates, ['_equals']);
  dart.defineExtensionAccessors(lottie_delegates.LottieDelegates, ['hashCode']);
  lottie_delegates.defaultTextStyleDelegate = function defaultTextStyleDelegate(font) {
    return new text_style.TextStyle.new({fontFamily: font.fontFamily});
  };
  var composition$3 = dart.privateName(lottie_drawable, "LottieDrawable.composition");
  var size = dart.privateName(lottie_drawable, "LottieDrawable.size");
  var enableMergePaths = dart.privateName(lottie_drawable, "LottieDrawable.enableMergePaths");
  var filterQuality = dart.privateName(lottie_drawable, "LottieDrawable.filterQuality");
  var antiAliasingSuggested = dart.privateName(lottie_drawable, "LottieDrawable.antiAliasingSuggested");
  var isApplyingOpacityToLayersEnabled = dart.privateName(lottie_drawable, "LottieDrawable.isApplyingOpacityToLayersEnabled");
  var _matrix$2 = dart.privateName(lottie_drawable, "_matrix");
  var __LottieDrawable__compositionLayer = dart.privateName(lottie_drawable, "_#LottieDrawable#_compositionLayer");
  var _delegates = dart.privateName(lottie_drawable, "_delegates");
  var _isDirty = dart.privateName(lottie_drawable, "_isDirty");
  var _progress$ = dart.privateName(lottie_drawable, "_progress");
  var _valueDelegates = dart.privateName(lottie_drawable, "_valueDelegates");
  var _compositionLayer = dart.privateName(lottie_drawable, "_compositionLayer");
  var _updateValueDelegates = dart.privateName(lottie_drawable, "_updateValueDelegates");
  var _resolveKeyPath = dart.privateName(lottie_drawable, "_resolveKeyPath");
  lottie_drawable.LottieDrawable = class LottieDrawable extends core.Object {
    get composition() {
      return this[composition$3];
    }
    set composition(value) {
      super.composition = value;
    }
    get size() {
      return this[size];
    }
    set size(value) {
      super.size = value;
    }
    get enableMergePaths() {
      return this[enableMergePaths];
    }
    set enableMergePaths(value) {
      this[enableMergePaths] = value;
    }
    get filterQuality() {
      return this[filterQuality];
    }
    set filterQuality(value) {
      this[filterQuality] = value;
    }
    get antiAliasingSuggested() {
      return this[antiAliasingSuggested];
    }
    set antiAliasingSuggested(value) {
      this[antiAliasingSuggested] = value;
    }
    get isApplyingOpacityToLayersEnabled() {
      return this[isApplyingOpacityToLayersEnabled];
    }
    set isApplyingOpacityToLayersEnabled(value) {
      this[isApplyingOpacityToLayersEnabled] = value;
    }
    get [_compositionLayer]() {
      let t54;
      t54 = this[__LottieDrawable__compositionLayer];
      return t54 == null ? dart.throw(new _internal.LateError.fieldNI("_compositionLayer")) : t54;
    }
    set [_compositionLayer](library$32package$58lottie$47src$47lottie_drawable$46dart$58$58_compositionLayer$35param) {
      this[__LottieDrawable__compositionLayer] = library$32package$58lottie$47src$47lottie_drawable$46dart$58$58_compositionLayer$35param;
    }
    static ['_#new#tearOff'](composition, opts) {
      let delegates = opts && 'delegates' in opts ? opts.delegates : null;
      return new lottie_drawable.LottieDrawable.new(composition, {delegates: delegates});
    }
    get compositionLayer() {
      return this[_compositionLayer];
    }
    invalidateSelf() {
      this[_isDirty] = true;
    }
    get progress() {
      let t54;
      t54 = this[_progress$];
      return t54 == null ? 0.0 : t54;
    }
    setProgress(value, opts) {
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      frameRate == null ? frameRate = frame_rate.FrameRate.composition : null;
      let roundedProgress = this.composition.roundProgress(value, {frameRate: frameRate});
      if (roundedProgress !== this[_progress$]) {
        this[_isDirty] = false;
        this[_progress$] = roundedProgress;
        this[_compositionLayer].setProgress(roundedProgress);
        return this[_isDirty];
      } else {
        return false;
      }
    }
    get delegates() {
      return this[_delegates];
    }
    set delegates(delegates) {
      let t54;
      if (!dart.equals(this[_delegates], delegates)) {
        this[_delegates] = delegates;
        this[_updateValueDelegates]((t54 = delegates, t54 == null ? null : t54.values));
      }
    }
    get useTextGlyphs() {
      let t54;
      return (t54 = this.delegates, t54 == null ? null : t54.text) == null && this.composition.characters[$isNotEmpty];
    }
    getImageAsset(ref) {
      let t54, t54$;
      let imageAsset = this.composition.images[$_get](ref);
      if (imageAsset != null) {
        let imageDelegate = (t54 = this.delegates, t54 == null ? null : t54.image);
        let image = null;
        if (imageDelegate != null) {
          image = imageDelegate(this.composition, imageAsset);
        }
        t54$ = image;
        return t54$ == null ? imageAsset.loadedImage : t54$;
      } else {
        return null;
      }
    }
    getTextStyle(font, style) {
      let t54, t54$;
      return (t54$ = (t54 = this[_delegates], t54 == null ? null : t54.textStyle), t54$ == null ? C[76] || CT.C76 : t54$)(new lottie_drawable.LottieFontStyle.new({fontFamily: font, style: style}));
    }
    [_updateValueDelegates](newDelegates) {
      if (this[_valueDelegates] === newDelegates) return;
      newDelegates == null ? newDelegates = C[77] || CT.C77 : null;
      let delegates = T$.JSArrayOfValueDelegate().of([]);
      for (let newDelegate of newDelegates) {
        let existingDelegate = utils['IterableExtension|firstWhereOrNull'](value_delegate.ValueDelegate, this[_valueDelegates], dart.fn(f => f.isSameProperty(newDelegate), T$.ValueDelegateTobool()));
        if (existingDelegate != null) {
          let resolved = value_delegate.internalResolved(existingDelegate);
          resolved.updateDelegate(newDelegate);
          delegates[$add](existingDelegate);
        } else {
          let keyPaths = this[_resolveKeyPath](new key_path.KeyPath.new(newDelegate.keyPath));
          let resolvedValueDelegate = value_delegate.internalResolve(newDelegate, keyPaths);
          resolvedValueDelegate.addValueCallback(this);
          delegates[$add](newDelegate);
        }
      }
      for (let oldDelegate of this[_valueDelegates]) {
        if (delegates[$every](dart.fn(c => !c.isSameProperty(oldDelegate), T$.ValueDelegateTobool()))) {
          let resolved = value_delegate.internalResolved(oldDelegate);
          resolved.clear();
        }
      }
      this[_valueDelegates] = delegates;
    }
    [_resolveKeyPath](keyPath) {
      let keyPaths = T$.JSArrayOfKeyPath().of([]);
      this[_compositionLayer].resolveKeyPath(keyPath, 0, keyPaths, new key_path.KeyPath.new(T$.JSArrayOfString().of([])));
      return keyPaths;
    }
    draw(canvas, rect, opts) {
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      if (rect.isEmpty) {
        return;
      }
      fit == null ? fit = box_fit.BoxFit.scaleDown : null;
      alignment == null ? alignment = alignment$.Alignment.center : null;
      let outputSize = rect.size;
      let inputSize = this.size;
      let fittedSizes = box_fit.applyBoxFit(fit, inputSize, outputSize);
      let sourceSize = fittedSizes.source;
      let destinationSize = fittedSizes.destination;
      let halfWidthDelta = (outputSize.width - destinationSize.width) / 2.0;
      let halfHeightDelta = (outputSize.height - destinationSize.height) / 2.0;
      let dx = halfWidthDelta + alignment.x * halfWidthDelta;
      let dy = halfHeightDelta + alignment.y * halfHeightDelta;
      let destinationPosition = rect.topLeft.translate(dx, dy);
      let destinationRect = destinationPosition['&'](destinationSize);
      let sourceRect = alignment.inscribe(sourceSize, ui.Offset.zero['&'](inputSize));
      canvas.save();
      canvas.translate(destinationRect.left, destinationRect.top);
      this[_matrix$2].setIdentity();
      this[_matrix$2].scale(destinationRect.size.width / sourceRect.width, destinationRect.size.height / sourceRect.height);
      this[_compositionLayer].draw(canvas, rect.size, this[_matrix$2], {parentAlpha: 255});
      canvas.restore();
    }
  };
  (lottie_drawable.LottieDrawable.new = function(composition, opts) {
    let delegates = opts && 'delegates' in opts ? opts.delegates : null;
    this[_matrix$2] = vector_math_64.Matrix4.identity();
    this[__LottieDrawable__compositionLayer] = null;
    this[_delegates] = null;
    this[_isDirty] = true;
    this[enableMergePaths] = false;
    this[filterQuality] = null;
    this[antiAliasingSuggested] = true;
    this[isApplyingOpacityToLayersEnabled] = false;
    this[_progress$] = null;
    this[_valueDelegates] = T$.JSArrayOfValueDelegate().of([]);
    this[composition$3] = composition;
    this[size] = new ui.Size.new(composition.bounds[$width][$toDouble](), composition.bounds[$height][$toDouble]());
    this.delegates = delegates;
    this[_compositionLayer] = new composition_layer.CompositionLayer.new(this, layer_parser.LayerParser.parse(this.composition), this.composition.layers, this.composition);
  }).prototype = lottie_drawable.LottieDrawable.prototype;
  dart.addTypeTests(lottie_drawable.LottieDrawable);
  dart.addTypeCaches(lottie_drawable.LottieDrawable);
  dart.setMethodSignature(lottie_drawable.LottieDrawable, () => ({
    __proto__: dart.getMethods(lottie_drawable.LottieDrawable.__proto__),
    invalidateSelf: dart.fnType(dart.void, []),
    setProgress: dart.fnType(core.bool, [core.double], {frameRate: dart.nullable(frame_rate.FrameRate)}, {}),
    getImageAsset: dart.fnType(dart.nullable(ui.Image), [dart.nullable(core.String)]),
    getTextStyle: dart.fnType(text_style.TextStyle, [core.String, core.String]),
    [_updateValueDelegates]: dart.fnType(dart.void, [dart.nullable(core.List$(value_delegate.ValueDelegate))]),
    [_resolveKeyPath]: dart.fnType(core.List$(key_path.KeyPath), [key_path.KeyPath]),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {alignment: dart.nullable(alignment$.Alignment), fit: dart.nullable(box_fit.BoxFit)}, {})
  }));
  dart.setGetterSignature(lottie_drawable.LottieDrawable, () => ({
    __proto__: dart.getGetters(lottie_drawable.LottieDrawable.__proto__),
    [_compositionLayer]: composition_layer.CompositionLayer,
    compositionLayer: composition_layer.CompositionLayer,
    progress: core.double,
    delegates: dart.nullable(lottie_delegates.LottieDelegates),
    useTextGlyphs: core.bool
  }));
  dart.setSetterSignature(lottie_drawable.LottieDrawable, () => ({
    __proto__: dart.getSetters(lottie_drawable.LottieDrawable.__proto__),
    [_compositionLayer]: composition_layer.CompositionLayer,
    delegates: dart.nullable(lottie_delegates.LottieDelegates)
  }));
  dart.setLibraryUri(lottie_drawable.LottieDrawable, I[117]);
  dart.setFieldSignature(lottie_drawable.LottieDrawable, () => ({
    __proto__: dart.getFields(lottie_drawable.LottieDrawable.__proto__),
    composition: dart.finalFieldType(composition$.LottieComposition),
    [_matrix$2]: dart.finalFieldType(vector_math_64.Matrix4),
    [__LottieDrawable__compositionLayer]: dart.fieldType(dart.nullable(composition_layer.CompositionLayer)),
    size: dart.finalFieldType(ui.Size),
    [_delegates]: dart.fieldType(dart.nullable(lottie_delegates.LottieDelegates)),
    [_isDirty]: dart.fieldType(core.bool),
    enableMergePaths: dart.fieldType(core.bool),
    filterQuality: dart.fieldType(dart.nullable(ui.FilterQuality)),
    antiAliasingSuggested: dart.fieldType(core.bool),
    isApplyingOpacityToLayersEnabled: dart.fieldType(core.bool),
    [_progress$]: dart.fieldType(dart.nullable(core.double)),
    [_valueDelegates]: dart.fieldType(core.List$(value_delegate.ValueDelegate))
  }));
  var fontFamily$ = dart.privateName(lottie_drawable, "LottieFontStyle.fontFamily");
  var style$ = dart.privateName(lottie_drawable, "LottieFontStyle.style");
  lottie_drawable.LottieFontStyle = class LottieFontStyle extends core.Object {
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static ['_#new#tearOff'](opts) {
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new lottie_drawable.LottieFontStyle.new({fontFamily: fontFamily, style: style});
    }
  };
  (lottie_drawable.LottieFontStyle.new = function(opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let style = opts && 'style' in opts ? opts.style : null;
    this[fontFamily$] = fontFamily;
    this[style$] = style;
    ;
  }).prototype = lottie_drawable.LottieFontStyle.prototype;
  dart.addTypeTests(lottie_drawable.LottieFontStyle);
  dart.addTypeCaches(lottie_drawable.LottieFontStyle);
  dart.setLibraryUri(lottie_drawable.LottieFontStyle, I[117]);
  dart.setFieldSignature(lottie_drawable.LottieFontStyle, () => ({
    __proto__: dart.getFields(lottie_drawable.LottieFontStyle.__proto__),
    fontFamily: dart.finalFieldType(core.String),
    style: dart.finalFieldType(core.String)
  }));
  var name$19 = dart.privateName(content_group, "ContentGroup.name");
  var _offScreenPaint = dart.privateName(content_group, "_offScreenPaint");
  var _matrix$3 = dart.privateName(content_group, "_matrix");
  var _path$8 = dart.privateName(content_group, "_path");
  var _pathContents$ = dart.privateName(content_group, "_pathContents");
  var _transformAnimation = dart.privateName(content_group, "_transformAnimation");
  var _lottieDrawable$ = dart.privateName(content_group, "_lottieDrawable");
  var _hidden$2 = dart.privateName(content_group, "_hidden");
  var _contents$ = dart.privateName(content_group, "_contents");
  content_group.ContentGroup = class ContentGroup extends core.Object {
    get name() {
      return this[name$19];
    }
    set name(value) {
      super.name = value;
    }
    static contentsFromModels(drawable, layer, contentModels) {
      let contents = T$.JSArrayOfContent().of([]);
      for (let i = 0; i < contentModels[$length]; i = i + 1) {
        let content = contentModels[$_get](i).toContent(drawable, layer);
        if (content != null) {
          contents[$add](content);
        }
      }
      return contents;
    }
    static findTransform(contentModels) {
      for (let i = 0; i < contentModels[$length]; i = i + 1) {
        let contentModel = contentModels[$_get](i);
        if (animatable_transform.AnimatableTransform.is(contentModel)) {
          return contentModel;
        }
      }
      return null;
    }
    static ['_#new#tearOff'](lottieDrawable, layer, shapeGroup) {
      return new content_group.ContentGroup.new(lottieDrawable, layer, shapeGroup);
    }
    static ['_#copy#tearOff'](_lottieDrawable, layer, name, _hidden, _contents, transform) {
      return new content_group.ContentGroup.copy(_lottieDrawable, layer, name, _hidden, _contents, transform);
    }
    onValueChanged() {
      this[_lottieDrawable$].invalidateSelf();
    }
    setContents(contentsBefore, contentsAfter) {
      let myContentsBefore = T$.JSArrayOfContent().of([]);
      myContentsBefore[$addAll](contentsBefore);
      for (let i = this[_contents$][$length] - 1; i >= 0; i = i - 1) {
        let content = this[_contents$][$_get](i);
        content.setContents(myContentsBefore, this[_contents$][$sublist](0, i));
        myContentsBefore[$add](content);
      }
    }
    getPathList() {
      if (this[_pathContents$] == null) {
        let pathContents = this[_pathContents$] = T$.JSArrayOfPathContent().of([]);
        for (let i = 0; i < this[_contents$][$length]; i = i + 1) {
          let content = this[_contents$][$_get](i);
          if (path_content.PathContent.is(content)) {
            pathContents[$add](content);
          }
        }
      }
      return dart.nullCheck(this[_pathContents$]);
    }
    getTransformationMatrix() {
      if (this[_transformAnimation] != null) {
        return dart.nullCheck(this[_transformAnimation]).getMatrix();
      }
      utils['Matrix4Extension|reset'](this[_matrix$3]);
      return this[_matrix$3];
    }
    getPath() {
      utils['Matrix4Extension|reset'](this[_matrix$3]);
      if (this[_transformAnimation] != null) {
        utils['Matrix4Extension|set'](this[_matrix$3], dart.nullCheck(this[_transformAnimation]).getMatrix());
      }
      this[_path$8].reset();
      if (this[_hidden$2]) {
        return this[_path$8];
      }
      for (let i = this[_contents$][$length] - 1; i >= 0; i = i - 1) {
        let content = this[_contents$][$_get](i);
        if (path_content.PathContent.is(content)) {
          this[_path$8].addPath(content.getPath(), ui.Offset.zero, {matrix4: this[_matrix$3].storage});
        }
      }
      return this[_path$8];
    }
    draw(canvas, size, parentMatrix, opts) {
      let t54;
      let parentAlpha = opts && 'parentAlpha' in opts ? opts.parentAlpha : null;
      if (this[_hidden$2]) {
        return;
      }
      utils['Matrix4Extension|set'](this[_matrix$3], parentMatrix);
      let layerAlpha = null;
      if (this[_transformAnimation] != null) {
        utils['Matrix4Extension|preConcat'](this[_matrix$3], dart.nullCheck(this[_transformAnimation]).getMatrix());
        let opacity = (t54 = this[_transformAnimation], t54 == null ? null : t54.opacity) == null ? 100 : dart.nullCheck(dart.nullCheck(this[_transformAnimation]).opacity).value;
        layerAlpha = (opacity / 100.0 * parentAlpha / 255.0 * 255)[$round]();
      } else {
        layerAlpha = parentAlpha;
      }
      let isRenderingWithOffScreen = this[_lottieDrawable$].isApplyingOpacityToLayersEnabled && this.hasTwoOrMoreDrawableContent() && layerAlpha !== 255;
      if (isRenderingWithOffScreen) {
        let offScreenRect = this.getBounds(this[_matrix$3], {applyParents: true});
        utils['PaintExtension|setAlpha'](this[_offScreenPaint], layerAlpha);
        canvas.saveLayer(offScreenRect, this[_offScreenPaint]);
      }
      let childAlpha = isRenderingWithOffScreen ? 255 : layerAlpha;
      for (let i = this[_contents$][$length] - 1; i >= 0; i = i - 1) {
        let content = this[_contents$][$_get](i);
        if (drawing_content.DrawingContent.is(content)) {
          content.draw(canvas, size, this[_matrix$3], {parentAlpha: childAlpha});
        }
      }
      if (isRenderingWithOffScreen) {
        canvas.restore();
      }
    }
    hasTwoOrMoreDrawableContent() {
      let drawableContentCount = 0;
      for (let i = 0; i < this[_contents$][$length]; i = i + 1) {
        if (drawing_content.DrawingContent.is(this[_contents$][$_get](i))) {
          drawableContentCount = drawableContentCount + 1;
          if (drawableContentCount >= 2) {
            return true;
          }
        }
      }
      return false;
    }
    getBounds(parentMatrix, opts) {
      let applyParents = opts && 'applyParents' in opts ? opts.applyParents : null;
      utils['Matrix4Extension|set'](this[_matrix$3], parentMatrix);
      if (this[_transformAnimation] != null) {
        utils['Matrix4Extension|preConcat'](this[_matrix$3], dart.nullCheck(this[_transformAnimation]).getMatrix());
      }
      let bounds = ui.Rect.zero;
      for (let i = this[_contents$][$length] - 1; i >= 0; i = i - 1) {
        let content = this[_contents$][$_get](i);
        if (drawing_content.DrawingContent.is(content)) {
          let contentBounds = content.getBounds(this[_matrix$3], {applyParents: applyParents});
          bounds = bounds.expandToInclude(contentBounds);
        }
      }
      return bounds;
    }
    resolveKeyPath(keyPath, depth, accumulator, currentPartialKeyPath) {
      if (!keyPath.matches(this.name, depth) && this.name !== "__container") {
        return;
      }
      if ("__container" !== this.name && this.name != null) {
        currentPartialKeyPath = currentPartialKeyPath.addKey(dart.nullCheck(this.name));
        if (keyPath.fullyResolvesTo(this.name, depth)) {
          accumulator[$add](currentPartialKeyPath.resolve(this));
        }
      }
      if (keyPath.propagateToChildren(this.name, depth)) {
        let newDepth = depth + keyPath.incrementDepthBy(this.name, depth);
        for (let i = 0; i < this[_contents$][$length]; i = i + 1) {
          let content = this[_contents$][$_get](i);
          if (key_path_element.KeyPathElement.is(content)) {
            let element = key_path_element.KeyPathElement.as(content);
            element.resolveKeyPath(keyPath, newDepth, accumulator, currentPartialKeyPath);
          }
        }
      }
    }
    addValueCallback(T, property, callback) {
      if (this[_transformAnimation] != null) {
        dart.nullCheck(this[_transformAnimation]).applyValueCallback(T, property, callback);
      }
    }
  };
  (content_group.ContentGroup.new = function(lottieDrawable, layer, shapeGroup) {
    content_group.ContentGroup.copy.call(this, lottieDrawable, layer, shapeGroup.name, shapeGroup.hidden, content_group.ContentGroup.contentsFromModels(lottieDrawable, layer, shapeGroup.items), content_group.ContentGroup.findTransform(shapeGroup.items));
  }).prototype = content_group.ContentGroup.prototype;
  (content_group.ContentGroup.copy = function(_lottieDrawable, layer, name, _hidden, _contents, transform) {
    let t54;
    this[_offScreenPaint] = ui.Paint.new();
    this[_matrix$3] = vector_math_64.Matrix4.identity();
    this[_path$8] = path_factory.PathFactory.create();
    this[_pathContents$] = null;
    this[_transformAnimation] = null;
    this[_lottieDrawable$] = _lottieDrawable;
    this[name$19] = name;
    this[_hidden$2] = _hidden;
    this[_contents$] = _contents;
    if (transform != null) {
      this[_transformAnimation] = (t54 = transform.createAnimation(), (() => {
        t54.addAnimationsToLayer(layer);
        t54.addListener(dart.bind(this, 'onValueChanged'));
        return t54;
      })());
    }
    let greedyContents = T$.JSArrayOfGreedyContent().of([]);
    for (let i = this[_contents$][$length] - 1; i >= 0; i = i - 1) {
      let content = this[_contents$][$_get](i);
      if (greedy_content.GreedyContent.is(content)) {
        greedyContents[$add](greedy_content.GreedyContent.as(content));
      }
    }
    for (let i = greedyContents[$length] - 1; i >= 0; i = i - 1) {
      greedyContents[$_get](i).absorbContent(this[_contents$]);
    }
  }).prototype = content_group.ContentGroup.prototype;
  dart.addTypeTests(content_group.ContentGroup);
  dart.addTypeCaches(content_group.ContentGroup);
  content_group.ContentGroup[dart.implements] = () => [drawing_content.DrawingContent, path_content.PathContent, key_path_element.KeyPathElement];
  dart.setMethodSignature(content_group.ContentGroup, () => ({
    __proto__: dart.getMethods(content_group.ContentGroup.__proto__),
    onValueChanged: dart.fnType(dart.void, []),
    setContents: dart.fnType(dart.void, [core.List$(content.Content), core.List$(content.Content)]),
    getPathList: dart.fnType(core.List$(path_content.PathContent), []),
    getTransformationMatrix: dart.fnType(vector_math_64.Matrix4, []),
    getPath: dart.fnType(ui.Path, []),
    draw: dart.fnType(dart.void, [ui.Canvas, ui.Size, vector_math_64.Matrix4], {}, {parentAlpha: core.int}),
    hasTwoOrMoreDrawableContent: dart.fnType(core.bool, []),
    getBounds: dart.fnType(ui.Rect, [vector_math_64.Matrix4], {}, {applyParents: core.bool}),
    resolveKeyPath: dart.fnType(dart.void, [key_path.KeyPath, core.int, core.List$(key_path.KeyPath), key_path.KeyPath]),
    addValueCallback: dart.gFnType(T => [dart.void, [T, dart.nullable(lottie_value_callback.LottieValueCallback$(T))]], T => [dart.nullable(core.Object)])
  }));
  dart.setStaticMethodSignature(content_group.ContentGroup, () => ['contentsFromModels', 'findTransform']);
  dart.setLibraryUri(content_group.ContentGroup, I[118]);
  dart.setFieldSignature(content_group.ContentGroup, () => ({
    __proto__: dart.getFields(content_group.ContentGroup.__proto__),
    [_offScreenPaint]: dart.finalFieldType(ui.Paint),
    [_matrix$3]: dart.finalFieldType(vector_math_64.Matrix4),
    [_path$8]: dart.finalFieldType(ui.Path),
    name: dart.finalFieldType(dart.nullable(core.String)),
    [_hidden$2]: dart.finalFieldType(core.bool),
    [_contents$]: dart.finalFieldType(core.List$(content.Content)),
    [_lottieDrawable$]: dart.finalFieldType(lottie_drawable.LottieDrawable),
    [_pathContents$]: dart.fieldType(dart.nullable(core.List$(path_content.PathContent))),
    [_transformAnimation]: dart.fieldType(dart.nullable(transform_keyframe_animation.TransformKeyframeAnimation))
  }));
  var name$20 = dart.privateName(shape_group, "ShapeGroup.name");
  var items$ = dart.privateName(shape_group, "ShapeGroup.items");
  var hidden$10 = dart.privateName(shape_group, "ShapeGroup.hidden");
  shape_group.ShapeGroup = class ShapeGroup extends core.Object {
    get name() {
      return this[name$20];
    }
    set name(value) {
      super.name = value;
    }
    get items() {
      return this[items$];
    }
    set items(value) {
      super.items = value;
    }
    get hidden() {
      return this[hidden$10];
    }
    set hidden(value) {
      super.hidden = value;
    }
    static ['_#new#tearOff'](name, items, opts) {
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      return new shape_group.ShapeGroup.new(name, items, {hidden: hidden});
    }
    toContent(drawable, layer) {
      return new content_group.ContentGroup.new(drawable, layer, this);
    }
    toString() {
      return "ShapeGroup{name: '" + dart.str(this.name) + "' Shapes: " + dart.str(this.items) + "}";
    }
  };
  (shape_group.ShapeGroup.new = function(name, items, opts) {
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    this[name$20] = name;
    this[items$] = items;
    this[hidden$10] = hidden;
    ;
  }).prototype = shape_group.ShapeGroup.prototype;
  dart.addTypeTests(shape_group.ShapeGroup);
  dart.addTypeCaches(shape_group.ShapeGroup);
  shape_group.ShapeGroup[dart.implements] = () => [content_model.ContentModel];
  dart.setMethodSignature(shape_group.ShapeGroup, () => ({
    __proto__: dart.getMethods(shape_group.ShapeGroup.__proto__),
    toContent: dart.fnType(content.Content, [lottie_drawable.LottieDrawable, base_layer.BaseLayer])
  }));
  dart.setLibraryUri(shape_group.ShapeGroup, I[119]);
  dart.setFieldSignature(shape_group.ShapeGroup, () => ({
    __proto__: dart.getFields(shape_group.ShapeGroup.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    items: dart.finalFieldType(core.List$(content_model.ContentModel)),
    hidden: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(shape_group.ShapeGroup, ['toString']);
  var shapes$0 = dart.privateName(font_character, "FontCharacter.shapes");
  var character$ = dart.privateName(font_character, "FontCharacter.character");
  var size$1 = dart.privateName(font_character, "FontCharacter.size");
  var width$4 = dart.privateName(font_character, "FontCharacter.width");
  var style$0 = dart.privateName(font_character, "FontCharacter.style");
  var fontFamily$0 = dart.privateName(font_character, "FontCharacter.fontFamily");
  font_character.FontCharacter = class FontCharacter extends core.Object {
    get shapes() {
      return this[shapes$0];
    }
    set shapes(value) {
      super.shapes = value;
    }
    get character() {
      return this[character$];
    }
    set character(value) {
      super.character = value;
    }
    get size() {
      return this[size$1];
    }
    set size(value) {
      super.size = value;
    }
    get width() {
      return this[width$4];
    }
    set width(value) {
      super.width = value;
    }
    get style() {
      return this[style$0];
    }
    set style(value) {
      super.style = value;
    }
    get fontFamily() {
      return this[fontFamily$0];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    static hashFor(character, fontFamily, style) {
      let result = 0;
      result = 31 * result + character[$hashCode];
      result = 31 * result + fontFamily[$hashCode];
      result = 31 * result + style[$hashCode];
      return result;
    }
    static ['_#new#tearOff'](opts) {
      let shapes = opts && 'shapes' in opts ? opts.shapes : null;
      let character = opts && 'character' in opts ? opts.character : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      return new font_character.FontCharacter.new({shapes: shapes, character: character, size: size, width: width, style: style, fontFamily: fontFamily});
    }
    get hashCode() {
      return font_character.FontCharacter.hashFor(this.character, this.fontFamily, this.style);
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || font_character.FontCharacter.is(other) && this[$runtimeType]._equals(other[$runtimeType]) && this.shapes[$_equals](other.shapes) && this.character === other.character && this.size === other.size && this.width === other.width && this.style === other.style && this.fontFamily === other.fontFamily;
    }
  };
  (font_character.FontCharacter.new = function(opts) {
    let shapes = opts && 'shapes' in opts ? opts.shapes : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    this[shapes$0] = shapes;
    this[character$] = character;
    this[size$1] = size;
    this[width$4] = width;
    this[style$0] = style;
    this[fontFamily$0] = fontFamily;
    ;
  }).prototype = font_character.FontCharacter.prototype;
  dart.addTypeTests(font_character.FontCharacter);
  dart.addTypeCaches(font_character.FontCharacter);
  dart.setStaticMethodSignature(font_character.FontCharacter, () => ['hashFor']);
  dart.setLibraryUri(font_character.FontCharacter, I[120]);
  dart.setFieldSignature(font_character.FontCharacter, () => ({
    __proto__: dart.getFields(font_character.FontCharacter.__proto__),
    shapes: dart.finalFieldType(core.List$(shape_group.ShapeGroup)),
    character: dart.finalFieldType(core.String),
    size: dart.finalFieldType(core.double),
    width: dart.finalFieldType(core.double),
    style: dart.finalFieldType(core.String),
    fontFamily: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(font_character.FontCharacter, ['_equals']);
  dart.defineExtensionAccessors(font_character.FontCharacter, ['hashCode']);
  var bounds = dart.privateName(composition$, "CompositionParameters.bounds");
  var startFrame = dart.privateName(composition$, "CompositionParameters.startFrame");
  var endFrame = dart.privateName(composition$, "CompositionParameters.endFrame");
  var frameRate = dart.privateName(composition$, "CompositionParameters.frameRate");
  var layers = dart.privateName(composition$, "CompositionParameters.layers");
  var layerMap = dart.privateName(composition$, "CompositionParameters.layerMap");
  var precomps = dart.privateName(composition$, "CompositionParameters.precomps");
  var images = dart.privateName(composition$, "CompositionParameters.images");
  var characters = dart.privateName(composition$, "CompositionParameters.characters");
  var fonts = dart.privateName(composition$, "CompositionParameters.fonts");
  var markers = dart.privateName(composition$, "CompositionParameters.markers");
  var _parameters = dart.privateName(composition$, "_parameters");
  composition$.CompositionParameters = class CompositionParameters extends core.Object {
    get bounds() {
      return this[bounds];
    }
    set bounds(value) {
      this[bounds] = value;
    }
    get startFrame() {
      return this[startFrame];
    }
    set startFrame(value) {
      this[startFrame] = value;
    }
    get endFrame() {
      return this[endFrame];
    }
    set endFrame(value) {
      this[endFrame] = value;
    }
    get frameRate() {
      return this[frameRate];
    }
    set frameRate(value) {
      this[frameRate] = value;
    }
    get layers() {
      return this[layers];
    }
    set layers(value) {
      super.layers = value;
    }
    get layerMap() {
      return this[layerMap];
    }
    set layerMap(value) {
      super.layerMap = value;
    }
    get precomps() {
      return this[precomps];
    }
    set precomps(value) {
      super.precomps = value;
    }
    get images() {
      return this[images];
    }
    set images(value) {
      super.images = value;
    }
    get characters() {
      return this[characters];
    }
    set characters(value) {
      super.characters = value;
    }
    get fonts() {
      return this[fonts];
    }
    set fonts(value) {
      super.fonts = value;
    }
    get markers() {
      return this[markers];
    }
    set markers(value) {
      super.markers = value;
    }
    static forComposition(composition) {
      return composition[_parameters];
    }
    static ['_#new#tearOff']() {
      return new composition$.CompositionParameters.new();
    }
  };
  (composition$.CompositionParameters.new = function() {
    this[bounds] = new (T$.MutableRectangleOfint()).new(0, 0, 0, 0);
    this[startFrame] = 0.0;
    this[endFrame] = 0.0;
    this[frameRate] = 0.0;
    this[layers] = T$.JSArrayOfLayer().of([]);
    this[layerMap] = new (T$.IdentityMapOfint$Layer()).new();
    this[precomps] = new (T$.IdentityMapOfString$ListOfLayer()).new();
    this[images] = new (T$.IdentityMapOfString$LottieImageAsset()).new();
    this[characters] = new (T$.IdentityMapOfint$FontCharacter()).new();
    this[fonts] = new (T$.IdentityMapOfString$Font()).new();
    this[markers] = T$.JSArrayOfMarker().of([]);
    ;
  }).prototype = composition$.CompositionParameters.prototype;
  dart.addTypeTests(composition$.CompositionParameters);
  dart.addTypeCaches(composition$.CompositionParameters);
  dart.setStaticMethodSignature(composition$.CompositionParameters, () => ['forComposition']);
  dart.setLibraryUri(composition$.CompositionParameters, I[121]);
  dart.setFieldSignature(composition$.CompositionParameters, () => ({
    __proto__: dart.getFields(composition$.CompositionParameters.__proto__),
    bounds: dart.fieldType(math.MutableRectangle$(core.int)),
    startFrame: dart.fieldType(core.double),
    endFrame: dart.fieldType(core.double),
    frameRate: dart.fieldType(core.double),
    layers: dart.finalFieldType(core.List$(layer$.Layer)),
    layerMap: dart.finalFieldType(core.Map$(core.int, layer$.Layer)),
    precomps: dart.finalFieldType(core.Map$(core.String, core.List$(layer$.Layer))),
    images: dart.finalFieldType(core.Map$(core.String, lottie_image_asset.LottieImageAsset)),
    characters: dart.finalFieldType(core.Map$(core.int, font_character.FontCharacter)),
    fonts: dart.finalFieldType(core.Map$(core.String, font.Font)),
    markers: dart.finalFieldType(core.List$(marker.Marker))
  }));
  var name$21 = dart.privateName(composition$, "LottieComposition.name");
  var hasDashPattern = dart.privateName(composition$, "LottieComposition.hasDashPattern");
  var onWarning = dart.privateName(composition$, "LottieComposition.onWarning");
  var _performanceTracker = dart.privateName(composition$, "_performanceTracker");
  var _warnings = dart.privateName(composition$, "_warnings");
  var _maskAndMatteCount = dart.privateName(composition$, "_maskAndMatteCount");
  composition$.LottieComposition = class LottieComposition extends core.Object {
    get name() {
      return this[name$21];
    }
    set name(value) {
      super.name = value;
    }
    get hasDashPattern() {
      return this[hasDashPattern];
    }
    set hasDashPattern(value) {
      this[hasDashPattern] = value;
    }
    get onWarning() {
      return this[onWarning];
    }
    set onWarning(value) {
      this[onWarning] = value;
    }
    static fromByteData(data, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      return composition$.LottieComposition.fromBytes(data[$buffer][$asUint8List](), {name: name, imageProviderFactory: imageProviderFactory});
    }
    static fromBytes(bytes, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let imageProviderFactory = opts && 'imageProviderFactory' in opts ? opts.imageProviderFactory : null;
      return async.async(composition$.LottieComposition, function* fromBytes() {
        let t54;
        let archive = null;
        if (bytes[$_get](0) === 80 && bytes[$_get](1) === 75) {
          archive = new zip_decoder.ZipDecoder.new().decodeBytes(bytes);
          let jsonFile = archive.files[$firstWhere](dart.fn(e => e.name[$endsWith](".json"), T$.ArchiveFileTobool()));
          bytes = typed_data.Uint8List.as(jsonFile.content);
        }
        let composition = lottie_composition_parser.LottieCompositionParser.parse(new composition$.LottieComposition.__(name), json_reader.JsonReader.fromBytes(bytes));
        if (archive != null) {
          for (let image of composition.images[$values]) {
            let imagePath = path.posix.join(image.dirName, image.fileName);
            let found = utils['IterableExtension|firstWhereOrNull'](archive_file.ArchiveFile, archive.files, dart.fn(f => f.name[$toLowerCase]() === imagePath[$toLowerCase](), T$.ArchiveFileTobool()));
            let provider = null;
            if (imageProviderFactory != null) {
              provider = imageProviderFactory(image);
            }
            if (provider != null) {
              image.loadedImage = (yield load_image.loadImage(composition, image, provider));
            }
            if (found != null) {
              t54 = image;
              t54.loadedImage == null ? t54.loadedImage = (yield load_image.loadImage(composition, image, new image_provider.MemoryImage.new(typed_data.Uint8List.as(found.content)))) : null;
            }
          }
        }
        return composition;
      });
    }
    static ['_#_#tearOff'](name) {
      return new composition$.LottieComposition.__(name);
    }
    addWarning(warning) {
      let t54;
      let isNew = this[_warnings].add(warning);
      if (isNew) {
        t54 = this.onWarning;
        t54 == null ? null : t54(warning);
      }
    }
    incrementMatteOrMaskCount(amount) {
      this[_maskAndMatteCount] = this[_maskAndMatteCount] + amount;
    }
    get maskAndMatteCount() {
      return this[_maskAndMatteCount];
    }
    get warnings() {
      return this[_warnings][$toList]();
    }
    get performanceTrackingEnabled() {
      return this[_performanceTracker].enabled;
    }
    set performanceTrackingEnabled(enabled) {
      this[_performanceTracker].enabled = enabled;
    }
    get performanceTracker() {
      return this[_performanceTracker];
    }
    layerModelForId(id) {
      return this[_parameters].layerMap[$_get](id);
    }
    get bounds() {
      return this[_parameters].bounds;
    }
    get duration() {
      return new core.Duration.new({milliseconds: (this.seconds * 1000)[$round]()});
    }
    get seconds() {
      return this.durationFrames / this.frameRate;
    }
    get startFrame() {
      return this[_parameters].startFrame;
    }
    get endFrame() {
      return this[_parameters].endFrame;
    }
    get frameRate() {
      return this[_parameters].frameRate;
    }
    get layers() {
      return this[_parameters].layers;
    }
    getPrecomps(id) {
      return this[_parameters].precomps[$_get](id);
    }
    get characters() {
      return this[_parameters].characters;
    }
    get fonts() {
      return this[_parameters].fonts;
    }
    get markers() {
      return this[_parameters].markers;
    }
    getMarker(markerName) {
      for (let i = 0; i < this.markers[$length]; i = i + 1) {
        let marker = this.markers[$_get](i);
        if (marker.matchesName(markerName)) {
          return marker;
        }
      }
      return null;
    }
    get hasImages() {
      return this.images[$isNotEmpty];
    }
    get images() {
      return this[_parameters].images;
    }
    get durationFrames() {
      return this.endFrame - this.startFrame;
    }
    roundProgress(progress, opts) {
      let frameRate = opts && 'frameRate' in opts ? opts.frameRate : null;
      let fps = null;
      if (frameRate[$_equals](frame_rate.FrameRate.max)) {
        return progress;
      } else if (frameRate[$_equals](frame_rate.FrameRate.composition)) {
        fps = this.frameRate;
      }
      fps == null ? fps = frameRate.framesPerSecond : null;
      let totalFrameCount = this.seconds * dart.notNull(fps);
      let frameIndex = (totalFrameCount * progress)[$toInt]();
      let roundedProgress = frameIndex / totalFrameCount;
      if (!(roundedProgress >= 0 && roundedProgress <= 1)) dart.assertFailed("Progress is " + dart.str(roundedProgress), I[122], 189, 12, "roundedProgress >= 0 && roundedProgress <= 1");
      return roundedProgress;
    }
    toString() {
      let sb = new core.StringBuffer.new("LottieComposition:\n");
      for (let layer of this.layers) {
        sb.write(layer.toStringWithPrefix("\t"));
      }
      return sb.toString();
    }
  };
  (composition$.LottieComposition.__ = function(name) {
    this[_performanceTracker] = new performance_tracker.PerformanceTracker.new();
    this[_warnings] = T$.LinkedHashSetOfString().new();
    this[_parameters] = new composition$.CompositionParameters.new();
    this[hasDashPattern] = false;
    this[_maskAndMatteCount] = 0;
    this[onWarning] = null;
    this[name$21] = name;
    ;
  }).prototype = composition$.LottieComposition.prototype;
  dart.addTypeTests(composition$.LottieComposition);
  dart.addTypeCaches(composition$.LottieComposition);
  dart.setMethodSignature(composition$.LottieComposition, () => ({
    __proto__: dart.getMethods(composition$.LottieComposition.__proto__),
    addWarning: dart.fnType(dart.void, [core.String]),
    incrementMatteOrMaskCount: dart.fnType(dart.void, [core.int]),
    layerModelForId: dart.fnType(dart.nullable(layer$.Layer), [core.int]),
    getPrecomps: dart.fnType(dart.nullable(core.List$(layer$.Layer)), [dart.nullable(core.String)]),
    getMarker: dart.fnType(dart.nullable(marker.Marker), [core.String]),
    roundProgress: dart.fnType(core.double, [core.double], {}, {frameRate: frame_rate.FrameRate})
  }));
  dart.setStaticMethodSignature(composition$.LottieComposition, () => ['fromByteData', 'fromBytes']);
  dart.setGetterSignature(composition$.LottieComposition, () => ({
    __proto__: dart.getGetters(composition$.LottieComposition.__proto__),
    maskAndMatteCount: core.int,
    warnings: core.List$(core.String),
    performanceTrackingEnabled: core.bool,
    performanceTracker: performance_tracker.PerformanceTracker,
    bounds: math.Rectangle$(core.int),
    duration: core.Duration,
    seconds: core.double,
    startFrame: core.double,
    endFrame: core.double,
    frameRate: core.double,
    layers: core.List$(layer$.Layer),
    characters: core.Map$(core.int, font_character.FontCharacter),
    fonts: core.Map$(core.String, font.Font),
    markers: core.List$(marker.Marker),
    hasImages: core.bool,
    images: core.Map$(core.String, lottie_image_asset.LottieImageAsset),
    durationFrames: core.double
  }));
  dart.setSetterSignature(composition$.LottieComposition, () => ({
    __proto__: dart.getSetters(composition$.LottieComposition.__proto__),
    performanceTrackingEnabled: core.bool
  }));
  dart.setLibraryUri(composition$.LottieComposition, I[121]);
  dart.setFieldSignature(composition$.LottieComposition, () => ({
    __proto__: dart.getFields(composition$.LottieComposition.__proto__),
    name: dart.finalFieldType(dart.nullable(core.String)),
    [_performanceTracker]: dart.finalFieldType(performance_tracker.PerformanceTracker),
    [_warnings]: dart.finalFieldType(core.Set$(core.String)),
    [_parameters]: dart.finalFieldType(composition$.CompositionParameters),
    hasDashPattern: dart.fieldType(core.bool),
    [_maskAndMatteCount]: dart.fieldType(core.int),
    onWarning: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.String])))
  }));
  dart.defineExtensionMethods(composition$.LottieComposition, ['toString']);
  dart.trackLibraries("packages/lottie/src/render_lottie.dart", {
    "package:lottie/src/render_lottie.dart": render_lottie,
    "package:lottie/src/raw_lottie.dart": raw_lottie,
    "package:lottie/src/providers/network_provider.dart": network_provider,
    "package:lottie/src/providers/memory_provider.dart": memory_provider,
    "package:lottie/src/providers/file_provider.dart": file_provider,
    "package:lottie/src/providers/lottie_provider.dart": lottie_provider,
    "package:lottie/src/providers/asset_provider.dart": asset_provider,
    "package:lottie/src/lottie_builder.dart": lottie_builder,
    "package:lottie/src/lottie.dart": lottie,
    "package:lottie/src/providers/load_image.dart": load_image,
    "package:lottie/src/parser/font_character_parser.dart": font_character_parser,
    "package:lottie/src/parser/lottie_composition_parser.dart": lottie_composition_parser,
    "package:lottie/src/model/marker.dart": marker,
    "package:lottie/src/parser/mask_parser.dart": mask_parser,
    "package:lottie/src/parser/drop_shadow_effect_parser.dart": drop_shadow_effect_parser,
    "package:lottie/src/parser/shape_trim_path_parser.dart": shape_trim_path_parser,
    "package:lottie/src/parser/shape_stroke_parser.dart": shape_stroke_parser,
    "package:lottie/src/animation/content/shape_content.dart": shape_content,
    "package:lottie/src/model/content/shape_path.dart": shape_path,
    "package:lottie/src/parser/shape_path_parser.dart": shape_path_parser,
    "package:lottie/src/parser/shape_group_parser.dart": shape_group_parser,
    "package:lottie/src/animation/content/fill_content.dart": fill_content,
    "package:lottie/src/model/content/shape_fill.dart": shape_fill,
    "package:lottie/src/parser/shape_fill_parser.dart": shape_fill_parser,
    "package:lottie/src/parser/rounded_corners_parser.dart": rounded_corners_parser,
    "package:lottie/src/animation/content/repeater_content.dart": repeater_content,
    "package:lottie/src/model/content/repeater.dart": repeater,
    "package:lottie/src/parser/repeat_parser.dart": repeat_parser,
    "package:lottie/src/model/content/rounded_corners.dart": rounded_corners,
    "package:lottie/src/animation/content/rounded_corners_content.dart": rounded_corners_content,
    "package:lottie/src/animation/content/rectangle_content.dart": rectangle_content,
    "package:lottie/src/model/content/rectangle_shape.dart": rectangle_shape,
    "package:lottie/src/parser/rectangle_shape_parser.dart": rectangle_shape_parser,
    "package:lottie/src/animation/content/polystar_content.dart": polystar_content,
    "package:lottie/src/model/content/polystar_shape.dart": polystar_shape,
    "package:lottie/src/parser/polysar_shape_parser.dart": polysar_shape_parser,
    "package:lottie/src/animation/content/merge_paths_content.dart": merge_paths_content,
    "package:lottie/src/model/content/merge_paths.dart": merge_paths,
    "package:lottie/src/parser/merge_paths_parser.dart": merge_paths_parser,
    "package:lottie/src/animation/content/base_stroke_content.dart": base_stroke_content,
    "package:lottie/src/animation/content/stroke_content.dart": stroke_content,
    "package:lottie/src/model/content/shape_stroke.dart": shape_stroke,
    "package:lottie/src/animation/content/gradient_stroke_content.dart": gradient_stroke_content,
    "package:lottie/src/model/content/gradient_stroke.dart": gradient_stroke,
    "package:lottie/src/parser/gradient_stroke_parser.dart": gradient_stroke_parser,
    "package:lottie/src/animation/keyframe/drop_shadow_keyframe_animation.dart": drop_shadow_keyframe_animation,
    "package:lottie/src/animation/content/gradient_fill_content.dart": gradient_fill_content,
    "package:lottie/src/model/content/gradient_fill.dart": gradient_fill,
    "package:lottie/src/parser/gradient_fill_parser.dart": gradient_fill_parser,
    "package:lottie/src/animation/content/compound_trim_path_content.dart": compound_trim_path_content,
    "package:lottie/src/animation/content/ellipse_content.dart": ellipse_content,
    "package:lottie/src/model/content/circle_shape.dart": circle_shape,
    "package:lottie/src/parser/circle_shape_parser.dart": circle_shape_parser,
    "package:lottie/src/parser/content_model_parser.dart": content_model_parser,
    "package:lottie/src/parser/blur_effect_parser.dart": blur_effect_parser,
    "package:lottie/src/parser/path_keyframe_parser.dart": path_keyframe_parser,
    "package:lottie/src/parser/animatable_path_value_parser.dart": animatable_path_value_parser,
    "package:lottie/src/animation/keyframe/split_dimension_path_keyframe_animation.dart": split_dimension_path_keyframe_animation,
    "package:lottie/src/model/animatable/animatable_split_dimension_path_value.dart": animatable_split_dimension_path_value,
    "package:lottie/src/parser/animatable_transform_parser.dart": animatable_transform_parser,
    "package:lottie/src/parser/keyframe_parser.dart": keyframe_parser,
    "package:lottie/src/parser/keyframes_parser.dart": keyframes_parser,
    "package:lottie/src/model/animatable/animatable_point_value.dart": animatable_point_value,
    "package:lottie/src/animation/keyframe/gradient_color_keyframe_animation.dart": gradient_color_keyframe_animation,
    "package:lottie/src/model/animatable/animatable_gradient_color_value.dart": animatable_gradient_color_value,
    "package:lottie/src/parser/animatable_value_parser.dart": animatable_value_parser,
    "package:lottie/src/parser/animatable_text_properties_parser.dart": animatable_text_properties_parser,
    "package:lottie/src/parser/layer_parser.dart": layer_parser,
    "package:lottie/src/model/layer/text_layer.dart": text_layer,
    "package:lottie/src/model/layer/solid_layer.dart": solid_layer,
    "package:lottie/src/model/layer/shape_layer.dart": shape_layer,
    "package:lottie/src/model/layer/null_layer.dart": null_layer,
    "package:lottie/src/model/animatable/animatable_text_properties.dart": animatable_text_properties,
    "package:lottie/src/animation/keyframe/text_keyframe_animation.dart": text_keyframe_animation,
    "package:lottie/src/model/animatable/animatable_text_frame.dart": animatable_text_frame,
    "package:lottie/src/model/layer/layer.dart": layer$,
    "package:lottie/src/model/layer/image_layer.dart": image_layer,
    "package:lottie/src/animation/keyframe/color_keyframe_animation.dart": color_keyframe_animation,
    "package:lottie/src/model/animatable/animatable_color_value.dart": animatable_color_value,
    "package:lottie/src/model/content/drop_shadow_effect.dart": drop_shadow_effect,
    "package:lottie/src/model/content/blur_effect.dart": blur_effect,
    "package:lottie/src/model/animatable/animatable_scale_value.dart": animatable_scale_value,
    "package:lottie/src/animation/keyframe/point_keyframe_animation.dart": point_keyframe_animation,
    "package:lottie/src/model/content/shape_trim_path.dart": shape_trim_path,
    "package:lottie/src/animation/content/trim_path_content.dart": trim_path_content,
    "package:lottie/src/utils/utils.dart": utils$,
    "package:lottie/src/animation/keyframe/path_keyframe.dart": path_keyframe,
    "package:lottie/src/animation/keyframe/path_keyframe_animation.dart": path_keyframe_animation,
    "package:lottie/src/model/animatable/animatable_path_value.dart": animatable_path_value,
    "package:lottie/src/model/animatable/animatable_double_value.dart": animatable_double_value,
    "package:lottie/src/model/content/content_model.dart": content_model,
    "package:lottie/src/model/animatable/animatable_transform.dart": animatable_transform,
    "package:lottie/src/animation/keyframe/transform_keyframe_animation.dart": transform_keyframe_animation,
    "package:lottie/src/animation/content/key_path_element_content.dart": key_path_element_content,
    "package:lottie/src/utils/misc.dart": misc,
    "package:lottie/src/animation/keyframe/shape_keyframe_animation.dart": shape_keyframe_animation,
    "package:lottie/src/model/animatable/animatable_shape_value.dart": animatable_shape_value,
    "package:lottie/src/model/animatable/animatable_value.dart": animatable_value,
    "package:lottie/src/model/animatable/base_animatable_value.dart": base_animatable_value,
    "package:lottie/src/animation/keyframe/integer_keyframe_animation.dart": integer_keyframe_animation,
    "package:lottie/src/model/animatable/animatable_integer_value.dart": animatable_integer_value,
    "package:lottie/src/model/content/mask.dart": mask,
    "package:lottie/src/animation/keyframe/mask_keyframe_animation.dart": mask_keyframe_animation,
    "package:lottie/src/animation/keyframe/keyframe_animation.dart": keyframe_animation,
    "package:lottie/src/animation/keyframe/double_keyframe_animation.dart": double_keyframe_animation,
    "package:lottie/src/model/layer/base_layer.dart": base_layer,
    "package:lottie/src/animation/keyframe/value_callback_keyframe_animation.dart": value_callback_keyframe_animation,
    "package:lottie/src/model/layer/composition_layer.dart": composition_layer,
    "package:lottie/src/value/keyframe.dart": keyframe$,
    "package:lottie/src/animation/keyframe/base_keyframe_animation.dart": base_keyframe_animation,
    "package:lottie/src/value/lottie_value_callback.dart": lottie_value_callback,
    "package:lottie/src/model/key_path_element.dart": key_path_element,
    "package:lottie/src/model/key_path.dart": key_path,
    "package:lottie/src/value_delegate.dart": value_delegate,
    "package:lottie/src/lottie_delegates.dart": lottie_delegates,
    "package:lottie/src/lottie_drawable.dart": lottie_drawable,
    "package:lottie/src/animation/content/content_group.dart": content_group,
    "package:lottie/src/model/content/shape_group.dart": shape_group,
    "package:lottie/src/model/font_character.dart": font_character,
    "package:lottie/src/composition.dart": composition$,
    "package:lottie/lottie.dart": lottie$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["render_lottie.dart","raw_lottie.dart","providers/lottie_provider.dart","providers/network_provider.dart","providers/memory_provider.dart","providers/file_provider.dart","providers/asset_provider.dart","lottie_builder.dart","lottie.dart","providers/load_image.dart","parser/font_character_parser.dart","parser/lottie_composition_parser.dart","model/marker.dart","parser/mask_parser.dart","parser/drop_shadow_effect_parser.dart","parser/shape_trim_path_parser.dart","parser/shape_stroke_parser.dart","animation/content/shape_content.dart","model/content/shape_path.dart","parser/shape_path_parser.dart","parser/shape_group_parser.dart","animation/content/fill_content.dart","model/content/shape_fill.dart","parser/shape_fill_parser.dart","parser/rounded_corners_parser.dart","animation/content/repeater_content.dart","model/content/repeater.dart","parser/repeat_parser.dart","model/content/rounded_corners.dart","animation/content/rounded_corners_content.dart","animation/content/rectangle_content.dart","model/content/rectangle_shape.dart","parser/rectangle_shape_parser.dart","animation/content/polystar_content.dart","model/content/polystar_shape.dart","parser/polysar_shape_parser.dart","animation/content/merge_paths_content.dart","model/content/merge_paths.dart","parser/merge_paths_parser.dart","animation/content/base_stroke_content.dart","animation/content/stroke_content.dart","model/content/shape_stroke.dart","animation/content/gradient_stroke_content.dart","model/content/gradient_stroke.dart","parser/gradient_stroke_parser.dart","animation/keyframe/drop_shadow_keyframe_animation.dart","animation/content/gradient_fill_content.dart","model/content/gradient_fill.dart","parser/gradient_fill_parser.dart","animation/content/compound_trim_path_content.dart","animation/content/ellipse_content.dart","model/content/circle_shape.dart","parser/circle_shape_parser.dart","parser/content_model_parser.dart","parser/blur_effect_parser.dart","parser/path_keyframe_parser.dart","parser/animatable_path_value_parser.dart","animation/keyframe/base_keyframe_animation.dart","animation/keyframe/split_dimension_path_keyframe_animation.dart","model/animatable/animatable_split_dimension_path_value.dart","parser/animatable_transform_parser.dart","parser/keyframe_parser.dart","parser/keyframes_parser.dart","model/animatable/base_animatable_value.dart","model/animatable/animatable_point_value.dart","animation/keyframe/keyframe_animation.dart","animation/keyframe/gradient_color_keyframe_animation.dart","model/animatable/animatable_gradient_color_value.dart","parser/animatable_value_parser.dart","parser/animatable_text_properties_parser.dart","parser/layer_parser.dart","model/layer/base_layer.dart","model/layer/text_layer.dart","model/layer/solid_layer.dart","model/layer/shape_layer.dart","model/layer/null_layer.dart","model/animatable/animatable_text_properties.dart","animation/keyframe/text_keyframe_animation.dart","value/lottie_value_callback.dart","model/animatable/animatable_text_frame.dart","model/layer/layer.dart","model/layer/image_layer.dart","animation/keyframe/color_keyframe_animation.dart","model/animatable/animatable_color_value.dart","model/content/drop_shadow_effect.dart","model/content/blur_effect.dart","model/animatable/animatable_scale_value.dart","animation/keyframe/point_keyframe_animation.dart","model/content/shape_trim_path.dart","animation/content/trim_path_content.dart","utils/utils.dart","value/keyframe.dart","animation/keyframe/path_keyframe.dart","animation/keyframe/path_keyframe_animation.dart","model/animatable/animatable_path_value.dart","model/animatable/animatable_double_value.dart","model/content/content_model.dart","model/animatable/animatable_transform.dart","animation/keyframe/transform_keyframe_animation.dart","animation/content/key_path_element_content.dart","utils/misc.dart","animation/keyframe/shape_keyframe_animation.dart","model/animatable/animatable_shape_value.dart","model/animatable/animatable_value.dart","animation/keyframe/integer_keyframe_animation.dart","model/animatable/animatable_integer_value.dart","model/content/mask.dart","animation/keyframe/mask_keyframe_animation.dart","animation/keyframe/double_keyframe_animation.dart","animation/keyframe/value_callback_keyframe_animation.dart","model/layer/composition_layer.dart","model/key_path_element.dart","model/key_path.dart","value_delegate.dart","lottie_delegates.dart","lottie_drawable.dart","animation/content/content_group.dart","model/content/shape_group.dart","model/font_character.dart","composition.dart"],"names":[],"mappings":"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,OAAO,yBAAmB;AAGtC,MAFxB,AAAW,UAAD,KAAK,sDACX,aAAa,+BACC;IACpB;;;QA5XO;QACS;QACT;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAjBS;IACT;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;AACF,gEAAW,GAAG;;EAAC;mDAIX;QACc;QAChB;QACA;QACA;QACA;QACA;QACA;QACA;QACuB;QACvB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAlBA;IACA;IACA;IACA;IACA;IACA;IACA;IAEA;IAEA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACM,iBAAE,uCAAc,GAAG,YACb,OAAO,wBAAwB,oBAAoB;AAChE,gEAAW,GAAG;;EAAC;gDAaU;QACxB;QACA;QACA;QACA;QACA;QACA;QACA;QACuB;QACvB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAlBA;IACA;IACA;IACA;IACA;IACA;IACA;IAEA;IAEA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACM,iBAAE,iCAAW,IAAI,yBAAwB,oBAAoB;AACpE,gEAAW,GAAG;;EAAC;iDAIZ;QACF;QACA;QACA;QACA;QACA;QACA;QACA;QACuB;QACvB;QACA;QACQ;QACR;QACA;QACA;QACA;QACA;QACA;QACG;QACH;QACA;QACA;;IApBA;IACA;IACA;IACA;IACA;IACA;IACA;IAEA;IAGA;IACA;IACA;IACA;IACA;IACA;IAEA;IACA;IACA;IACM,iBAAE,mCAAY,IAAI,WACb,MAAM,WACL,gCACa,oBAAoB;AAC9C,gEAAW,GAAG;;EAAC;kDAIT;QACL;QACA;QACA;QACA;QACA;QACA;QACA;QACuB;QACvB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAlBA;IACA;IACA;IACA;IACA;IACA;IACA;IAEA;IACA;IAEA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACM,iBACH,qCAAa,KAAK,yBAAwB,oBAAoB;AAClE,gEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4PF,MAAX;AAEC,MAAP;IACF;oBAGmC;;AACD,MAA1B,sBAAgB,SAAS;AAE/B,WAAI,AAAU,SAAD,kBAAW,AAAO;AACtB,QAAP;;IAEJ;;AAGM,qBAAW,AAAO;AAepB,MAdF,uBAAiB,AAAO,AAAO,AAAO,+DAAK,QAAC;;AAC1C,YAAI,gBAAW,AAAO,AAAO,6BAAG,QAAQ;AAClC,0BAAY,AAAO;AACU,UAAjC,AAAY,WAAD,aAAa,SAAS;AACjC,cAAI,SAAS;AACX,qBAAS,UAAW,AAAY,YAAD;AACX,cAAlB,AAAS,SAAA,CAAC,OAAO;;;AAIa,eAAlC,AAAO;uBAAA,OAAU,GAAK,WAAW;;AAGnC,cAAO,YAAW;;IAEtB;UAG0B;AACxB,YAAO,0DACG,+BACC,SAAC,SAAS;AACjB,cAAI,AAAS,QAAD;AACN,+BAAe,AAAO;AAC1B,gBAAI,YAAY;AACd,oBAAO,AAAY,aAAA,CAAC,OAAO,EAAgB,eAAd,AAAS,QAAD,SAAS,AAAS,QAAD;mBACjD;AACL,oBAAO,+BAA0B,eAAd,AAAS,QAAD;;;AAI3B,4BAAc,AAAS,QAAD;AAEnB,uBAAS,oCACD,WAAW,cACZ,AAAO,mCACR,AAAO,gCACT,AAAO,8BACP,AAAO,6BACR,AAAO,+BACJ,AAAO,gCACT,AAAO,4BACT,AAAO,2BACN,AAAO,yBACV,AAAO,4BACD,AAAO,2CACE,AAAO,+CACZ,AAAO;AAGxB,cAAI,AAAO;AACkD,YAA3D,SAA4B,AAAC,eAApB,AAAO,0BAAc,OAAO,EAAE,MAAM,EAAE,WAAW;;AAG5D,gBAAO,OAAM;;IAGnB;wBAGqD;AACb,MAAhC,0BAAoB,WAAW;AAEA,MADrC,AAAY,WAAD,KAAK,8DACZ,iBAAiB;IACvB;;;;;;IApF2B;;;EAqF7B;;;;;;;;;;;;;;;;;;;;;;;;;;;;IC/R2B;;;;;;IAKA;;;;;;IAQR;;;;;;IAON;;;;;;IAIA;;;;;;IAMA;;;;;;IAMG;;;;;;IAMA;;;;;;IAGA;;;;;;IAoBW;;;;;;IAOF;;;;;;IAIF;;;;;;IAOV;;;;;;IAMU;;;;;;;;;;;;;;;;;;;;;;;;iBArRZ;UACY;UACb;UACK;UACL;UACA;UACW;UACF;UACmB;UACN;UACvB;UACQ;UACO;UACK;UACjB;UACA;UACA;UACW;UACX;UACF;UACS;UACE;AAEf,YAAc,wCACZ,IAAI,eACQ,UAAU,aACX,SAAS,WACX,OAAO,UACR,MAAM,WACL,OAAO,aACL,SAAS,WACX,OAAO,wBACM,oBAAoB,YAChC,QAAQ,OACb,GAAG,UACA,MAAM,gBACA,YAAY,gBACZ,YAAY,SACnB,KAAK,UACJ,MAAM,OACT,GAAG,aACG,SAAS,WACX,8BACW,kBAAkB,iBACvB,aAAa,aACjB,SAAS;IACrB;gBAI0B;UACV;UACR;UACL;UACA;UACA;UACW;UACF;UACa;UACM;UAC7B;UACe;UACK;UACjB;UACA;UACA;UACW;UACb;UACS;UACE;AAEf,YAAc,uCACZ,IAAI,eACQ,UAAU,aACX,SAAS,WACX,OAAO,UACR,MAAM,WACL,OAAO,aACL,SAAS,WACX,OAAO,wBACM,oBAAoB,YAChC,QAAQ,OACb,GAAG,gBACM,YAAY,gBACZ,YAAY,SACnB,KAAK,UACJ,MAAM,OACT,GAAG,aACG,SAAS,sBACA,kBAAkB,iBACvB,aAAa,aACjB,SAAS;IACrB;kBAIO;UACS;UACR;UACL;UACA;UACA;UACW;UACF;UACa;UACM;UAC7B;UACe;UACK;UACjB;UACA;UACA;UACW;UACb;UACS;UACE;AAEf,YAAc,yCACZ,KAAK,eACO,UAAU,aACX,SAAS,WACX,OAAO,UACR,MAAM,WACL,OAAO,aACL,SAAS,WACX,OAAO,wBACM,oBAAoB,YAChC,QAAQ,OACb,GAAG,gBACM,YAAY,gBACZ,YAAY,SACnB,KAAK,UACJ,MAAM,OACT,GAAG,aACG,SAAS,sBACA,kBAAkB,iBACvB,aAAa,aACjB,SAAS;IACrB;mBAII;UACY;UACR;UACL;UACA;UACA;UACW;UACF;UACa;UACM;UAC7B;UAC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","file":"../../../../../../../../../../../packages/lottie/src/render_lottie.dart.lib.js"}');
  // Exports:
  return {
    src__render_lottie: render_lottie,
    src__raw_lottie: raw_lottie,
    src__providers__network_provider: network_provider,
    src__providers__memory_provider: memory_provider,
    src__providers__file_provider: file_provider,
    src__providers__lottie_provider: lottie_provider,
    src__providers__asset_provider: asset_provider,
    src__lottie_builder: lottie_builder,
    src__lottie: lottie,
    src__providers__load_image: load_image,
    src__parser__font_character_parser: font_character_parser,
    src__parser__lottie_composition_parser: lottie_composition_parser,
    src__model__marker: marker,
    src__parser__mask_parser: mask_parser,
    src__parser__drop_shadow_effect_parser: drop_shadow_effect_parser,
    src__parser__shape_trim_path_parser: shape_trim_path_parser,
    src__parser__shape_stroke_parser: shape_stroke_parser,
    src__animation__content__shape_content: shape_content,
    src__model__content__shape_path: shape_path,
    src__parser__shape_path_parser: shape_path_parser,
    src__parser__shape_group_parser: shape_group_parser,
    src__animation__content__fill_content: fill_content,
    src__model__content__shape_fill: shape_fill,
    src__parser__shape_fill_parser: shape_fill_parser,
    src__parser__rounded_corners_parser: rounded_corners_parser,
    src__animation__content__repeater_content: repeater_content,
    src__model__content__repeater: repeater,
    src__parser__repeat_parser: repeat_parser,
    src__model__content__rounded_corners: rounded_corners,
    src__animation__content__rounded_corners_content: rounded_corners_content,
    src__animation__content__rectangle_content: rectangle_content,
    src__model__content__rectangle_shape: rectangle_shape,
    src__parser__rectangle_shape_parser: rectangle_shape_parser,
    src__animation__content__polystar_content: polystar_content,
    src__model__content__polystar_shape: polystar_shape,
    src__parser__polysar_shape_parser: polysar_shape_parser,
    src__animation__content__merge_paths_content: merge_paths_content,
    src__model__content__merge_paths: merge_paths,
    src__parser__merge_paths_parser: merge_paths_parser,
    src__animation__content__base_stroke_content: base_stroke_content,
    src__animation__content__stroke_content: stroke_content,
    src__model__content__shape_stroke: shape_stroke,
    src__animation__content__gradient_stroke_content: gradient_stroke_content,
    src__model__content__gradient_stroke: gradient_stroke,
    src__parser__gradient_stroke_parser: gradient_stroke_parser,
    src__animation__keyframe__drop_shadow_keyframe_animation: drop_shadow_keyframe_animation,
    src__animation__content__gradient_fill_content: gradient_fill_content,
    src__model__content__gradient_fill: gradient_fill,
    src__parser__gradient_fill_parser: gradient_fill_parser,
    src__animation__content__compound_trim_path_content: compound_trim_path_content,
    src__animation__content__ellipse_content: ellipse_content,
    src__model__content__circle_shape: circle_shape,
    src__parser__circle_shape_parser: circle_shape_parser,
    src__parser__content_model_parser: content_model_parser,
    src__parser__blur_effect_parser: blur_effect_parser,
    src__parser__path_keyframe_parser: path_keyframe_parser,
    src__parser__animatable_path_value_parser: animatable_path_value_parser,
    src__animation__keyframe__split_dimension_path_keyframe_animation: split_dimension_path_keyframe_animation,
    src__model__animatable__animatable_split_dimension_path_value: animatable_split_dimension_path_value,
    src__parser__animatable_transform_parser: animatable_transform_parser,
    src__parser__keyframe_parser: keyframe_parser,
    src__parser__keyframes_parser: keyframes_parser,
    src__model__animatable__animatable_point_value: animatable_point_value,
    src__animation__keyframe__gradient_color_keyframe_animation: gradient_color_keyframe_animation,
    src__model__animatable__animatable_gradient_color_value: animatable_gradient_color_value,
    src__parser__animatable_value_parser: animatable_value_parser,
    src__parser__animatable_text_properties_parser: animatable_text_properties_parser,
    src__parser__layer_parser: layer_parser,
    src__model__layer__text_layer: text_layer,
    src__model__layer__solid_layer: solid_layer,
    src__model__layer__shape_layer: shape_layer,
    src__model__layer__null_layer: null_layer,
    src__model__animatable__animatable_text_properties: animatable_text_properties,
    src__animation__keyframe__text_keyframe_animation: text_keyframe_animation,
    src__model__animatable__animatable_text_frame: animatable_text_frame,
    src__model__layer__layer: layer$,
    src__model__layer__image_layer: image_layer,
    src__animation__keyframe__color_keyframe_animation: color_keyframe_animation,
    src__model__animatable__animatable_color_value: animatable_color_value,
    src__model__content__drop_shadow_effect: drop_shadow_effect,
    src__model__content__blur_effect: blur_effect,
    src__model__animatable__animatable_scale_value: animatable_scale_value,
    src__animation__keyframe__point_keyframe_animation: point_keyframe_animation,
    src__model__content__shape_trim_path: shape_trim_path,
    src__animation__content__trim_path_content: trim_path_content,
    src__utils__utils: utils$,
    src__animation__keyframe__path_keyframe: path_keyframe,
    src__animation__keyframe__path_keyframe_animation: path_keyframe_animation,
    src__model__animatable__animatable_path_value: animatable_path_value,
    src__model__animatable__animatable_double_value: animatable_double_value,
    src__model__content__content_model: content_model,
    src__model__animatable__animatable_transform: animatable_transform,
    src__animation__keyframe__transform_keyframe_animation: transform_keyframe_animation,
    src__animation__content__key_path_element_content: key_path_element_content,
    src__utils__misc: misc,
    src__animation__keyframe__shape_keyframe_animation: shape_keyframe_animation,
    src__model__animatable__animatable_shape_value: animatable_shape_value,
    src__model__animatable__animatable_value: animatable_value,
    src__model__animatable__base_animatable_value: base_animatable_value,
    src__animation__keyframe__integer_keyframe_animation: integer_keyframe_animation,
    src__model__animatable__animatable_integer_value: animatable_integer_value,
    src__model__content__mask: mask,
    src__animation__keyframe__mask_keyframe_animation: mask_keyframe_animation,
    src__animation__keyframe__keyframe_animation: keyframe_animation,
    src__animation__keyframe__double_keyframe_animation: double_keyframe_animation,
    src__model__layer__base_layer: base_layer,
    src__animation__keyframe__value_callback_keyframe_animation: value_callback_keyframe_animation,
    src__model__layer__composition_layer: composition_layer,
    src__value__keyframe: keyframe$,
    src__animation__keyframe__base_keyframe_animation: base_keyframe_animation,
    src__value__lottie_value_callback: lottie_value_callback,
    src__model__key_path_element: key_path_element,
    src__model__key_path: key_path,
    src__value_delegate: value_delegate,
    src__lottie_delegates: lottie_delegates,
    src__lottie_drawable: lottie_drawable,
    src__animation__content__content_group: content_group,
    src__model__content__shape_group: shape_group,
    src__model__font_character: font_character,
    src__composition: composition$,
    lottie: lottie$
  };
}));

//# sourceMappingURL=render_lottie.dart.lib.js.map