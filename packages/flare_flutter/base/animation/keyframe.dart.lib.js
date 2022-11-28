define(['dart_sdk', 'packages/flare_flutter/base/json_reader.dart', 'packages/flare_flutter/base/animation/interpolation/linear.dart', 'packages/flare_flutter/base/animation/interpolation/hold.dart', 'packages/flare_flutter/base/animation/interpolation/cubic.dart', 'packages/flare_flutter/base/animation/interpolation/interpolator.dart', 'packages/flare_flutter/base/path_point.dart', 'packages/flare_flutter/base/math/vec2d.dart', 'packages/collection/src/iterable_extensions.dart', 'packages/flare_flutter/base/math/aabb.dart', 'packages/flare_flutter/base/block_types.dart', 'packages/flare_flutter/base/animation/property_types.dart'], (function load__packages__flare_flutter__base__animation__keyframe_dart(dart_sdk, packages__flare_flutter__base__json_reader$46dart, packages__flare_flutter__base__animation__interpolation__linear$46dart, packages__flare_flutter__base__animation__interpolation__hold$46dart, packages__flare_flutter__base__animation__interpolation__cubic$46dart, packages__flare_flutter__base__animation__interpolation__interpolator$46dart, packages__flare_flutter__base__path_point$46dart, packages__flare_flutter__base__math__vec2d$46dart, packages__collection__src__iterable_extensions$46dart, packages__flare_flutter__base__math__aabb$46dart, packages__flare_flutter__base__block_types$46dart, packages__flare_flutter__base__animation__property_types$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const stream_reader = packages__flare_flutter__base__json_reader$46dart.base__stream_reader;
  const linear = packages__flare_flutter__base__animation__interpolation__linear$46dart.base__animation__interpolation__linear;
  const hold = packages__flare_flutter__base__animation__interpolation__hold$46dart.base__animation__interpolation__hold;
  const cubic = packages__flare_flutter__base__animation__interpolation__cubic$46dart.base__animation__interpolation__cubic;
  const interpolator = packages__flare_flutter__base__animation__interpolation__interpolator$46dart.base__animation__interpolation__interpolator;
  const path_point = packages__flare_flutter__base__path_point$46dart.base__path_point;
  const vec2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__vec2d;
  const mat2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__mat2d;
  const transform_components = packages__flare_flutter__base__math__vec2d$46dart.base__math__transform_components;
  const iterable_extensions = packages__collection__src__iterable_extensions$46dart.src__iterable_extensions;
  const aabb$ = packages__flare_flutter__base__math__aabb$46dart.base__math__aabb;
  const block_types = packages__flare_flutter__base__block_types$46dart.base__block_types;
  const property_types = packages__flare_flutter__base__animation__property_types$46dart.base__animation__property_types;
  var keyframe = Object.create(dart.library);
  var dependency_sorter = Object.create(dart.library);
  var actor_translation_constraint = Object.create(dart.library);
  var actor_transform_constraint = Object.create(dart.library);
  var actor_axis_constraint = Object.create(dart.library);
  var actor_scale_constraint = Object.create(dart.library);
  var actor_rotation_constraint = Object.create(dart.library);
  var actor_node_solo = Object.create(dart.library);
  var actor_ik_constraint = Object.create(dart.library);
  var actor_event = Object.create(dart.library);
  var actor_targeted_constraint = Object.create(dart.library);
  var actor_distance_constraint = Object.create(dart.library);
  var actor_root_bone = Object.create(dart.library);
  var actor_jelly_bone = Object.create(dart.library);
  var jelly_component = Object.create(dart.library);
  var actor_bone_base = Object.create(dart.library);
  var actor_bone = Object.create(dart.library);
  var actor_triangle = Object.create(dart.library);
  var actor_star = Object.create(dart.library);
  var actor_rectangle = Object.create(dart.library);
  var actor_polygon = Object.create(dart.library);
  var actor_image = Object.create(dart.library);
  var actor_ellipse = Object.create(dart.library);
  var actor_mask = Object.create(dart.library);
  var actor_inner_shadow = Object.create(dart.library);
  var actor_shadow = Object.create(dart.library);
  var actor_drop_shadow = Object.create(dart.library);
  var actor_skin = Object.create(dart.library);
  var actor_skinnable = Object.create(dart.library);
  var actor_path = Object.create(dart.library);
  var actor_shape = Object.create(dart.library);
  var actor_drawable = Object.create(dart.library);
  var actor_layer_effect = Object.create(dart.library);
  var actor_blur = Object.create(dart.library);
  var actor_layer_effect_renderer = Object.create(dart.library);
  var actor_constraint = Object.create(dart.library);
  var actor_node = Object.create(dart.library);
  var actor_component = Object.create(dart.library);
  var actor_color = Object.create(dart.library);
  var actor = Object.create(dart.library);
  var actor_artboard = Object.create(dart.library);
  var actor_animation = Object.create(dart.library);
  var $toInt = dartx.toInt;
  var $isNaN = dartx.isNaN;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $toDouble = dartx.toDouble;
  var $fold = dartx.fold;
  var $modulo = dartx['%'];
  var $floor = dartx.floor;
  var $insert = dartx.insert;
  var $plus = dartx['+'];
  var $contains = dartx.contains;
  var $whereType = dartx.whereType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $reversed = dartx.reversed;
  var $toList = dartx.toList;
  var $_equals = dartx._equals;
  var $last = dartx.last;
  var $abs = dartx.abs;
  var $clear = dartx.clear;
  var $forEach = dartx.forEach;
  var $where = dartx.where;
  var $sort = dartx.sort;
  var $lengthInBytes = dartx.lengthInBytes;
  var $getUint8 = dartx.getUint8;
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $compareTo = dartx.compareTo;
  var $rightShift = dartx['>>'];
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfDrawOrderIndex: () => (T.JSArrayOfDrawOrderIndex = dart.constFn(_interceptors.JSArray$(keyframe.DrawOrderIndex)))(),
    ActorBoneBaseN: () => (T.ActorBoneBaseN = dart.constFn(dart.nullable(actor_bone_base.ActorBoneBase)))(),
    intAndPathPointToint: () => (T.intAndPathPointToint = dart.constFn(dart.fnType(core.int, [core.int, path_point.PathPoint])))(),
    HashMapOfint$InterpolationTypes: () => (T.HashMapOfint$InterpolationTypes = dart.constFn(collection.HashMap$(core.int, keyframe.InterpolationTypes)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    JSArrayOfInterpolationTypes: () => (T.JSArrayOfInterpolationTypes = dart.constFn(_interceptors.JSArray$(keyframe.InterpolationTypes)))(),
    ActorComponentN: () => (T.ActorComponentN = dart.constFn(dart.nullable(actor_component.ActorComponent)))(),
    _HashSetOfActorComponentN: () => (T._HashSetOfActorComponentN = dart.constFn(collection._HashSet$(T.ActorComponentN())))(),
    JSArrayOfActorComponentN: () => (T.JSArrayOfActorComponentN = dart.constFn(_interceptors.JSArray$(T.ActorComponentN())))(),
    ActorNodeN: () => (T.ActorNodeN = dart.constFn(dart.nullable(actor_node.ActorNode)))(),
    ListOfActorClip: () => (T.ListOfActorClip = dart.constFn(core.List$(actor_node.ActorClip)))(),
    ListNOfActorClip: () => (T.ListNOfActorClip = dart.constFn(dart.nullable(T.ListOfActorClip())))(),
    JSArrayOfListNOfActorClip: () => (T.JSArrayOfListNOfActorClip = dart.constFn(_interceptors.JSArray$(T.ListNOfActorClip())))(),
    JSArrayOfActorConstraint: () => (T.JSArrayOfActorConstraint = dart.constFn(_interceptors.JSArray$(actor_constraint.ActorConstraint)))(),
    JSArrayOfActorComponent: () => (T.JSArrayOfActorComponent = dart.constFn(_interceptors.JSArray$(actor_component.ActorComponent)))(),
    JSArrayOfActorClip: () => (T.JSArrayOfActorClip = dart.constFn(_interceptors.JSArray$(actor_node.ActorClip)))(),
    JSArrayOfBoneChain: () => (T.JSArrayOfBoneChain = dart.constFn(_interceptors.JSArray$(actor_ik_constraint.BoneChain)))(),
    BoneChainTobool: () => (T.BoneChainTobool = dart.constFn(dart.fnType(core.bool, [actor_ik_constraint.BoneChain])))(),
    JSArrayOfInfluencedBone: () => (T.JSArrayOfInfluencedBone = dart.constFn(_interceptors.JSArray$(actor_ik_constraint.InfluencedBone)))(),
    ListOfVec2D: () => (T.ListOfVec2D = dart.constFn(core.List$(vec2d.Vec2D)))(),
    JSArrayOfActorJellyBone: () => (T.JSArrayOfActorJellyBone = dart.constFn(_interceptors.JSArray$(actor_jelly_bone.ActorJellyBone)))(),
    JSArrayOfVec2D: () => (T.JSArrayOfVec2D = dart.constFn(_interceptors.JSArray$(vec2d.Vec2D)))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    ActorBoneN: () => (T.ActorBoneN = dart.constFn(dart.nullable(actor_bone.ActorBone)))(),
    LinkedHashSetOfActorConstraint: () => (T.LinkedHashSetOfActorConstraint = dart.constFn(collection.LinkedHashSet$(actor_constraint.ActorConstraint)))(),
    JSArrayOfPathPoint: () => (T.JSArrayOfPathPoint = dart.constFn(_interceptors.JSArray$(path_point.PathPoint)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    ListOfClipShape: () => (T.ListOfClipShape = dart.constFn(core.List$(actor_drawable.ClipShape)))(),
    JSArrayOfListOfClipShape: () => (T.JSArrayOfListOfClipShape = dart.constFn(_interceptors.JSArray$(T.ListOfClipShape())))(),
    JSArrayOfClipShape: () => (T.JSArrayOfClipShape = dart.constFn(_interceptors.JSArray$(actor_drawable.ClipShape)))(),
    ActorComponentTobool: () => (T.ActorComponentTobool = dart.constFn(dart.fnType(core.bool, [actor_component.ActorComponent])))(),
    JSArrayOfSkinnedBone: () => (T.JSArrayOfSkinnedBone = dart.constFn(_interceptors.JSArray$(actor_skinnable.SkinnedBone)))(),
    HashMapOfint$MaskType: () => (T.HashMapOfint$MaskType = dart.constFn(collection.HashMap$(core.int, actor_mask.MaskType)))(),
    JSArrayOfMaskType: () => (T.JSArrayOfMaskType = dart.constFn(_interceptors.JSArray$(actor_mask.MaskType)))(),
    ActorSkinnableN: () => (T.ActorSkinnableN = dart.constFn(dart.nullable(actor_skinnable.ActorSkinnable)))(),
    JSArrayOfActorBasePath: () => (T.JSArrayOfActorBasePath = dart.constFn(_interceptors.JSArray$(actor_path.ActorBasePath)))(),
    JSArrayOfActorStroke: () => (T.JSArrayOfActorStroke = dart.constFn(_interceptors.JSArray$(actor_color.ActorStroke)))(),
    JSArrayOfActorFill: () => (T.JSArrayOfActorFill = dart.constFn(_interceptors.JSArray$(actor_color.ActorFill)))(),
    JSArrayOfActorDrawable: () => (T.JSArrayOfActorDrawable = dart.constFn(_interceptors.JSArray$(actor_drawable.ActorDrawable)))(),
    JSArrayOfActorLayerEffectRendererMask: () => (T.JSArrayOfActorLayerEffectRendererMask = dart.constFn(_interceptors.JSArray$(actor_layer_effect_renderer.ActorLayerEffectRendererMask)))(),
    JSArrayOfActorDropShadow: () => (T.JSArrayOfActorDropShadow = dart.constFn(_interceptors.JSArray$(actor_drop_shadow.ActorDropShadow)))(),
    JSArrayOfActorInnerShadow: () => (T.JSArrayOfActorInnerShadow = dart.constFn(_interceptors.JSArray$(actor_inner_shadow.ActorInnerShadow)))(),
    ActorDrawableN: () => (T.ActorDrawableN = dart.constFn(dart.nullable(actor_drawable.ActorDrawable)))(),
    ActorDrawableNTovoid: () => (T.ActorDrawableNTovoid = dart.constFn(dart.fnType(dart.void, [T.ActorDrawableN()])))(),
    ActorDrawableNAndActorDrawableNToint: () => (T.ActorDrawableNAndActorDrawableNToint = dart.constFn(dart.fnType(core.int, [T.ActorDrawableN(), T.ActorDrawableN()])))(),
    HashMapOfint$FillRule: () => (T.HashMapOfint$FillRule = dart.constFn(collection.HashMap$(core.int, actor_color.FillRule)))(),
    JSArrayOfFillRule: () => (T.JSArrayOfFillRule = dart.constFn(_interceptors.JSArray$(actor_color.FillRule)))(),
    HashMapOfint$StrokeCap: () => (T.HashMapOfint$StrokeCap = dart.constFn(collection.HashMap$(core.int, actor_color.StrokeCap)))(),
    JSArrayOfStrokeCap: () => (T.JSArrayOfStrokeCap = dart.constFn(_interceptors.JSArray$(actor_color.StrokeCap)))(),
    HashMapOfint$StrokeJoin: () => (T.HashMapOfint$StrokeJoin = dart.constFn(collection.HashMap$(core.int, actor_color.StrokeJoin)))(),
    JSArrayOfStrokeJoin: () => (T.JSArrayOfStrokeJoin = dart.constFn(_interceptors.JSArray$(actor_color.StrokeJoin)))(),
    HashMapOfint$TrimPath: () => (T.HashMapOfint$TrimPath = dart.constFn(collection.HashMap$(core.int, actor_color.TrimPath)))(),
    JSArrayOfTrimPath: () => (T.JSArrayOfTrimPath = dart.constFn(_interceptors.JSArray$(actor_color.TrimPath)))(),
    ActorArtboardN: () => (T.ActorArtboardN = dart.constFn(dart.nullable(actor_artboard.ActorArtboard)))(),
    JSArrayOfActorArtboardN: () => (T.JSArrayOfActorArtboardN = dart.constFn(_interceptors.JSArray$(T.ActorArtboardN())))(),
    ActorArtboardNTobool: () => (T.ActorArtboardNTobool = dart.constFn(dart.fnType(core.bool, [T.ActorArtboardN()])))(),
    ListOfActorArtboardN: () => (T.ListOfActorArtboardN = dart.constFn(core.List$(T.ActorArtboardN())))(),
    FutureOfUint8List: () => (T.FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))(),
    JSArrayOfFutureOfUint8List: () => (T.JSArrayOfFutureOfUint8List = dart.constFn(_interceptors.JSArray$(T.FutureOfUint8List())))(),
    JSArrayOfUint8List: () => (T.JSArrayOfUint8List = dart.constFn(_interceptors.JSArray$(typed_data.Uint8List)))(),
    ListOfUint8List: () => (T.ListOfUint8List = dart.constFn(core.List$(typed_data.Uint8List)))(),
    CompleterOfListOfUint8List: () => (T.CompleterOfListOfUint8List = dart.constFn(async.Completer$(T.ListOfUint8List())))(),
    JSArrayOfActorLayerEffectRenderer: () => (T.JSArrayOfActorLayerEffectRenderer = dart.constFn(_interceptors.JSArray$(actor_layer_effect_renderer.ActorLayerEffectRenderer)))(),
    ListOfActorNodeN: () => (T.ListOfActorNodeN = dart.constFn(core.List$(T.ActorNodeN())))(),
    ListOfActorComponentN: () => (T.ListOfActorComponentN = dart.constFn(core.List$(T.ActorComponentN())))(),
    ActorDrawableAndActorDrawableToint: () => (T.ActorDrawableAndActorDrawableToint = dart.constFn(dart.fnType(core.int, [actor_drawable.ActorDrawable, actor_drawable.ActorDrawable])))(),
    JSArrayOfActorAnimation: () => (T.JSArrayOfActorAnimation = dart.constFn(_interceptors.JSArray$(actor_animation.ActorAnimation)))(),
    JSArrayOfComponentAnimation: () => (T.JSArrayOfComponentAnimation = dart.constFn(_interceptors.JSArray$(actor_animation.ComponentAnimation)))(),
    PropertyAnimationN: () => (T.PropertyAnimationN = dart.constFn(dart.nullable(actor_animation.PropertyAnimation)))(),
    JSArrayOfPropertyAnimationN: () => (T.JSArrayOfPropertyAnimationN = dart.constFn(_interceptors.JSArray$(T.PropertyAnimationN())))(),
    KeyFrameN: () => (T.KeyFrameN = dart.constFn(dart.nullable(keyframe.KeyFrame)))(),
    StreamReaderAndActorComponentNToKeyFrameN: () => (T.StreamReaderAndActorComponentNToKeyFrameN = dart.constFn(dart.fnType(T.KeyFrameN(), [stream_reader.StreamReader, T.ActorComponentN()])))(),
    JSArrayOfKeyFrameN: () => (T.JSArrayOfKeyFrameN = dart.constFn(_interceptors.JSArray$(T.KeyFrameN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: keyframe.InterpolationTypes.prototype,
        [_Enum__name]: "hold",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: keyframe.InterpolationTypes.prototype,
        [_Enum__name]: "linear",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: keyframe.InterpolationTypes.prototype,
        [_Enum__name]: "cubic",
        [_Enum_index]: 2
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], keyframe.InterpolationTypes);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: actor_mask.MaskType.prototype,
        [_Enum__name]: "alpha",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: actor_mask.MaskType.prototype,
        [_Enum__name]: "invertedAlpha",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: actor_mask.MaskType.prototype,
        [_Enum__name]: "luminance",
        [_Enum_index]: 2
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: actor_mask.MaskType.prototype,
        [_Enum__name]: "invertedLuminance",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.constList([C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8], actor_mask.MaskType);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: path_point.PointType.prototype,
        [_Enum__name]: "straight",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: actor_drawable.BlendModes.prototype,
        [_Enum__name]: "normal",
        [_Enum_index]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: actor_drawable.BlendModes.prototype,
        [_Enum__name]: "multiply",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: actor_drawable.BlendModes.prototype,
        [_Enum__name]: "screen",
        [_Enum_index]: 2
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: actor_drawable.BlendModes.prototype,
        [_Enum__name]: "additive",
        [_Enum_index]: 3
      });
    },
    get C10() {
      return C[10] = dart.constList([C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14], actor_drawable.BlendModes);
    },
    get C15() {
      return C[15] = dart.fn(actor_layer_effect_renderer._computeLayerNode, T.ActorDrawableNTovoid());
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: actor_color.FillRule.prototype,
        [_Enum__name]: "evenOdd",
        [_Enum_index]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: actor_color.FillRule.prototype,
        [_Enum__name]: "nonZero",
        [_Enum_index]: 1
      });
    },
    get C16() {
      return C[16] = dart.constList([C[17] || CT.C17, C[18] || CT.C18], actor_color.FillRule);
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_Enum__name]: "butt",
        [_Enum_index]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_Enum__name]: "round",
        [_Enum_index]: 1
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_Enum__name]: "square",
        [_Enum_index]: 2
      });
    },
    get C19() {
      return C[19] = dart.constList([C[20] || CT.C20, C[21] || CT.C21, C[22] || CT.C22], actor_color.StrokeCap);
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_Enum__name]: "miter",
        [_Enum_index]: 0
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_Enum__name]: "round",
        [_Enum_index]: 1
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_Enum__name]: "bevel",
        [_Enum_index]: 2
      });
    },
    get C23() {
      return C[23] = dart.constList([C[24] || CT.C24, C[25] || CT.C25, C[26] || CT.C26], actor_color.StrokeJoin);
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: actor_color.TrimPath.prototype,
        [_Enum__name]: "off",
        [_Enum_index]: 0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: actor_color.TrimPath.prototype,
        [_Enum__name]: "sequential",
        [_Enum_index]: 1
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: actor_color.TrimPath.prototype,
        [_Enum__name]: "synced",
        [_Enum_index]: 2
      });
    },
    get C27() {
      return C[27] = dart.constList([C[28] || CT.C28, C[29] || CT.C29, C[30] || CT.C30], actor_color.TrimPath);
    },
    get C31() {
      return C[31] = dart.fn(keyframe.KeyFramePosX.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C32() {
      return C[32] = dart.fn(keyframe.KeyFramePosY.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C33() {
      return C[33] = dart.fn(keyframe.KeyFrameScaleX.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C34() {
      return C[34] = dart.fn(keyframe.KeyFrameScaleY.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C35() {
      return C[35] = dart.fn(keyframe.KeyFrameRotation.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C36() {
      return C[36] = dart.fn(keyframe.KeyFrameOpacity.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C37() {
      return C[37] = dart.fn(keyframe.KeyFrameDrawOrder.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C38() {
      return C[38] = dart.fn(keyframe.KeyFrameLength.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C39() {
      return C[39] = dart.fn(keyframe.KeyFrameImageVertices.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C40() {
      return C[40] = dart.fn(keyframe.KeyFrameConstraintStrength.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C41() {
      return C[41] = dart.fn(keyframe.KeyFrameTrigger.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C42() {
      return C[42] = dart.fn(keyframe.KeyFrameIntProperty.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C43() {
      return C[43] = dart.fn(keyframe.KeyFrameFloatProperty.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C44() {
      return C[44] = dart.fn(keyframe.KeyFrameStringProperty.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C45() {
      return C[45] = dart.fn(keyframe.KeyFrameBooleanProperty.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C46() {
      return C[46] = dart.fn(keyframe.KeyFrameCollisionEnabledProperty.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C47() {
      return C[47] = dart.fn(keyframe.KeyFrameActiveChild.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C48() {
      return C[48] = dart.fn(keyframe.KeyFrameSequence.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C49() {
      return C[49] = dart.fn(keyframe.KeyFramePathVertices.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C50() {
      return C[50] = dart.fn(keyframe.KeyFrameFillColor.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C51() {
      return C[51] = dart.fn(keyframe.KeyFrameShadowColor.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C52() {
      return C[52] = dart.fn(keyframe.KeyFrameShadowOffsetX.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C53() {
      return C[53] = dart.fn(keyframe.KeyFrameShadowOffsetY.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C54() {
      return C[54] = dart.fn(keyframe.KeyFrameBlurX.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C55() {
      return C[55] = dart.fn(keyframe.KeyFrameBlurY.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C56() {
      return C[56] = dart.fn(keyframe.KeyFrameGradient.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C57() {
      return C[57] = dart.fn(keyframe.KeyFrameRadial.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C58() {
      return C[58] = dart.fn(keyframe.KeyFrameStrokeColor.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C59() {
      return C[59] = dart.fn(keyframe.KeyFrameStrokeWidth.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C60() {
      return C[60] = dart.fn(keyframe.KeyFramePaintOpacity.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C61() {
      return C[61] = dart.fn(keyframe.KeyFrameShapeWidth.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C62() {
      return C[62] = dart.fn(keyframe.KeyFrameShapeHeight.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C63() {
      return C[63] = dart.fn(keyframe.KeyFrameCornerRadius.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C64() {
      return C[64] = dart.fn(keyframe.KeyFrameInnerRadius.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C65() {
      return C[65] = dart.fn(keyframe.KeyFrameStrokeStart.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C66() {
      return C[66] = dart.fn(keyframe.KeyFrameStrokeEnd.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    },
    get C67() {
      return C[67] = dart.fn(keyframe.KeyFrameStrokeOffset.read, T.StreamReaderAndActorComponentNToKeyFrameN());
    }
  }, false);
  var C = Array(68).fill(void 0);
  var I = [
    "package:flare_flutter/base/animation/keyframe.dart",
    "package:flare_flutter/base/dependency_sorter.dart",
    "package:flare_flutter/base/actor_component.dart",
    "package:flare_flutter/base/actor_constraint.dart",
    "package:flare_flutter/base/actor_targeted_constraint.dart",
    "package:flare_flutter/base/actor_axis_constraint.dart",
    "package:flare_flutter/base/actor_translation_constraint.dart",
    "package:flare_flutter/base/actor_transform_constraint.dart",
    "package:flare_flutter/base/actor_scale_constraint.dart",
    "package:flare_flutter/base/actor_rotation_constraint.dart",
    "package:flare_flutter/base/actor_node.dart",
    "package:flare_flutter/base/actor_node_solo.dart",
    "package:flare_flutter/base/actor_ik_constraint.dart",
    "package:flare_flutter/base/actor_event.dart",
    "package:flare_flutter/base/actor_distance_constraint.dart",
    "package:flare_flutter/base/actor_root_bone.dart",
    "package:flare_flutter/base/actor_bone_base.dart",
    "package:flare_flutter/base/actor_jelly_bone.dart",
    "package:flare_flutter/base/jelly_component.dart",
    "package:flare_flutter/base/actor_bone.dart",
    "package:flare_flutter/base/actor_path.dart",
    "package:flare_flutter/base/actor_triangle.dart",
    "package:flare_flutter/base/actor_star.dart",
    "package:flare_flutter/base/actor_rectangle.dart",
    "package:flare_flutter/base/actor_polygon.dart",
    "package:flare_flutter/base/actor_drawable.dart",
    "package:flare_flutter/base/actor_skinnable.dart",
    "package:flare_flutter/base/actor_image.dart",
    "package:flare_flutter/base/actor_ellipse.dart",
    "package:flare_flutter/base/actor_mask.dart",
    "package:flare_flutter/base/actor_layer_effect.dart",
    "package:flare_flutter/base/actor_blur.dart",
    "package:flare_flutter/base/actor_shadow.dart",
    "package:flare_flutter/base/actor_inner_shadow.dart",
    "package:flare_flutter/base/actor_drop_shadow.dart",
    "package:flare_flutter/base/actor_skin.dart",
    "package:flare_flutter/base/actor_shape.dart",
    "package:flare_flutter/base/actor_layer_effect_renderer.dart",
    "package:flare_flutter/base/actor_color.dart",
    "package:flare_flutter/base/actor.dart",
    "package:flare_flutter/base/actor_artboard.dart",
    "package:flare_flutter/base/animation/actor_animation.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flare_flutter-3.0.2/lib/base/animation/actor_animation.dart"
  ];
  var componentIndex$ = dart.privateName(keyframe, "DrawOrderIndex.componentIndex");
  var order$ = dart.privateName(keyframe, "DrawOrderIndex.order");
  keyframe.DrawOrderIndex = class DrawOrderIndex extends core.Object {
    get componentIndex() {
      return this[componentIndex$];
    }
    set componentIndex(value) {
      super.componentIndex = value;
    }
    get order() {
      return this[order$];
    }
    set order(value) {
      super.order = value;
    }
    static ['_#new#tearOff'](componentIndex, order) {
      return new keyframe.DrawOrderIndex.new(componentIndex, order);
    }
  };
  (keyframe.DrawOrderIndex.new = function(componentIndex, order) {
    this[componentIndex$] = componentIndex;
    this[order$] = order;
    ;
  }).prototype = keyframe.DrawOrderIndex.prototype;
  dart.addTypeTests(keyframe.DrawOrderIndex);
  dart.addTypeCaches(keyframe.DrawOrderIndex);
  dart.setLibraryUri(keyframe.DrawOrderIndex, I[0]);
  dart.setFieldSignature(keyframe.DrawOrderIndex, () => ({
    __proto__: dart.getFields(keyframe.DrawOrderIndex.__proto__),
    componentIndex: dart.finalFieldType(core.int),
    order: dart.finalFieldType(core.int)
  }));
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  keyframe.InterpolationTypes = class InterpolationTypes extends core._Enum {
    toString() {
      return "InterpolationTypes." + this[_name];
    }
  };
  (keyframe.InterpolationTypes.new = function(index, name) {
    keyframe.InterpolationTypes.__proto__.new.call(this, index, name);
    ;
  }).prototype = keyframe.InterpolationTypes.prototype;
  dart.addTypeTests(keyframe.InterpolationTypes);
  dart.addTypeCaches(keyframe.InterpolationTypes);
  dart.setLibraryUri(keyframe.InterpolationTypes, I[0]);
  dart.setStaticFieldSignature(keyframe.InterpolationTypes, () => ['values', 'hold', 'linear', 'cubic']);
  dart.defineExtensionMethods(keyframe.InterpolationTypes, ['toString']);
  dart.defineLazy(keyframe.InterpolationTypes, {
    /*keyframe.InterpolationTypes.values*/get values() {
      return C[0] || CT.C0;
    },
    /*keyframe.InterpolationTypes.hold*/get hold() {
      return C[1] || CT.C1;
    },
    /*keyframe.InterpolationTypes.linear*/get linear() {
      return C[2] || CT.C2;
    },
    /*keyframe.InterpolationTypes.cubic*/get cubic() {
      return C[3] || CT.C3;
    }
  }, false);
  var __KeyFrame__time = dart.privateName(keyframe, "_#KeyFrame#_time");
  var _time = dart.privateName(keyframe, "_time");
  keyframe.KeyFrame = class KeyFrame extends core.Object {
    get [_time]() {
      let t2;
      t2 = this[__KeyFrame__time];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_time")) : t2;
    }
    set [_time](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_time$35param) {
      this[__KeyFrame__time] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_time$35param;
    }
    get time() {
      return this[_time];
    }
    static read(reader, frame) {
      frame[_time] = reader.readFloat64("time");
      return true;
    }
  };
  (keyframe.KeyFrame.new = function() {
    this[__KeyFrame__time] = null;
    ;
  }).prototype = keyframe.KeyFrame.prototype;
  dart.addTypeTests(keyframe.KeyFrame);
  dart.addTypeCaches(keyframe.KeyFrame);
  dart.setStaticMethodSignature(keyframe.KeyFrame, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrame, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrame.__proto__),
    [_time]: core.double,
    time: core.double
  }));
  dart.setSetterSignature(keyframe.KeyFrame, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrame.__proto__),
    [_time]: core.double
  }));
  dart.setLibraryUri(keyframe.KeyFrame, I[0]);
  dart.setFieldSignature(keyframe.KeyFrame, () => ({
    __proto__: dart.getFields(keyframe.KeyFrame.__proto__),
    [__KeyFrame__time]: dart.fieldType(dart.nullable(core.double))
  }));
  var __KeyFrameActiveChild__value = dart.privateName(keyframe, "_#KeyFrameActiveChild#_value");
  var _value = dart.privateName(keyframe, "_value");
  keyframe.KeyFrameActiveChild = class KeyFrameActiveChild extends keyframe.KeyFrame {
    get [_value]() {
      let t2;
      t2 = this[__KeyFrameActiveChild__value];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t2;
    }
    set [_value](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param) {
      this[__KeyFrameActiveChild__value] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param;
    }
    apply(component, mix) {
      let soloNode = actor_node_solo.ActorNodeSolo.as(component);
      soloNode.activeChildIndex = this[_value];
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameActiveChild.new();
      if (!keyframe.KeyFrame.read(reader, frame)) {
        return null;
      }
      frame[_value] = reader.readFloat32("value")[$toInt]();
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameActiveChild.new();
    }
  };
  (keyframe.KeyFrameActiveChild.new = function() {
    this[__KeyFrameActiveChild__value] = null;
    keyframe.KeyFrameActiveChild.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameActiveChild.prototype;
  dart.addTypeTests(keyframe.KeyFrameActiveChild);
  dart.addTypeCaches(keyframe.KeyFrameActiveChild);
  dart.setMethodSignature(keyframe.KeyFrameActiveChild, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameActiveChild.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double]),
    setNext: dart.fnType(dart.void, [dart.nullable(keyframe.KeyFrame)])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameActiveChild, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameActiveChild, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameActiveChild.__proto__),
    [_value]: core.int
  }));
  dart.setSetterSignature(keyframe.KeyFrameActiveChild, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameActiveChild.__proto__),
    [_value]: core.int
  }));
  dart.setLibraryUri(keyframe.KeyFrameActiveChild, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameActiveChild, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameActiveChild.__proto__),
    [__KeyFrameActiveChild__value]: dart.fieldType(dart.nullable(core.int))
  }));
  var __KeyFrameNumeric__value = dart.privateName(keyframe, "_#KeyFrameNumeric#_value");
  var _interpolator = dart.privateName(keyframe, "_interpolator");
  keyframe.KeyFrameWithInterpolation = class KeyFrameWithInterpolation extends keyframe.KeyFrame {
    get interpolator() {
      return this[_interpolator];
    }
    setNext(frame) {
    }
    static read(reader, frame) {
      if (!keyframe.KeyFrame.read(reader, frame)) {
        return false;
      }
      let type = reader.readUint8("interpolatorType");
      let actualType = keyframe.interpolationTypesLookup[$_get](type);
      actualType == null ? actualType = keyframe.InterpolationTypes.linear : null;
      switch (actualType) {
        case C[1] || CT.C1:
          {
            frame[_interpolator] = hold.HoldInterpolator.instance;
            break;
          }
        case C[2] || CT.C2:
          {
            frame[_interpolator] = linear.LinearInterpolator.instance;
            break;
          }
        case C[3] || CT.C3:
          {
            {
              let interpolator = new cubic.CubicInterpolator.new();
              if (interpolator.read(reader)) {
                frame[_interpolator] = interpolator;
              }
              break;
            }
          }
        default:
          {
            frame[_interpolator] = hold.HoldInterpolator.instance;
          }
      }
      return true;
    }
  };
  (keyframe.KeyFrameWithInterpolation.new = function() {
    this[_interpolator] = linear.LinearInterpolator.instance;
    keyframe.KeyFrameWithInterpolation.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameWithInterpolation.prototype;
  dart.addTypeTests(keyframe.KeyFrameWithInterpolation);
  dart.addTypeCaches(keyframe.KeyFrameWithInterpolation);
  dart.setMethodSignature(keyframe.KeyFrameWithInterpolation, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameWithInterpolation.__proto__),
    setNext: dart.fnType(dart.void, [dart.nullable(keyframe.KeyFrame)])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameWithInterpolation, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameWithInterpolation, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameWithInterpolation.__proto__),
    interpolator: interpolator.Interpolator
  }));
  dart.setLibraryUri(keyframe.KeyFrameWithInterpolation, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameWithInterpolation, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameWithInterpolation.__proto__),
    [_interpolator]: dart.fieldType(interpolator.Interpolator)
  }));
  keyframe.KeyFrameNumeric = class KeyFrameNumeric extends keyframe.KeyFrameWithInterpolation {
    get [_value]() {
      let t2;
      t2 = this[__KeyFrameNumeric__value];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t2;
    }
    set [_value](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param) {
      this[__KeyFrameNumeric__value] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param;
    }
    get value() {
      return this[_value];
    }
    apply(component, mix) {
      this.setValue(component, this[_value], mix);
    }
    applyInterpolation(component, time, toFrame, mix) {
      let to = keyframe.KeyFrameNumeric.as(toFrame);
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (to[_time] - this[_time]));
      this.setValue(component, this[_value] * (1.0 - f) + to[_value] * f, mix);
    }
    static read(reader, frame) {
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame)) {
        return false;
      }
      frame[_value] = reader.readFloat32("value");
      if (frame[_value][$isNaN]) {
        frame[_value] = 1.0;
      }
      return true;
    }
  };
  (keyframe.KeyFrameNumeric.new = function() {
    this[__KeyFrameNumeric__value] = null;
    keyframe.KeyFrameNumeric.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameNumeric.prototype;
  dart.addTypeTests(keyframe.KeyFrameNumeric);
  dart.addTypeCaches(keyframe.KeyFrameNumeric);
  dart.setMethodSignature(keyframe.KeyFrameNumeric, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameNumeric.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameNumeric, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameNumeric, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameNumeric.__proto__),
    [_value]: core.double,
    value: core.double
  }));
  dart.setSetterSignature(keyframe.KeyFrameNumeric, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameNumeric.__proto__),
    [_value]: core.double
  }));
  dart.setLibraryUri(keyframe.KeyFrameNumeric, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameNumeric, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameNumeric.__proto__),
    [__KeyFrameNumeric__value]: dart.fieldType(dart.nullable(core.double))
  }));
  keyframe.KeyFrameBlurX = class KeyFrameBlurX extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_blur.ActorBlur.as(component);
      node.blurX = node.blurX * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameBlurX.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameBlurX.new();
    }
  };
  (keyframe.KeyFrameBlurX.new = function() {
    keyframe.KeyFrameBlurX.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameBlurX.prototype;
  dart.addTypeTests(keyframe.KeyFrameBlurX);
  dart.addTypeCaches(keyframe.KeyFrameBlurX);
  dart.setMethodSignature(keyframe.KeyFrameBlurX, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameBlurX.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameBlurX, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameBlurX, I[0]);
  keyframe.KeyFrameBlurY = class KeyFrameBlurY extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_blur.ActorBlur.as(component);
      node.blurY = node.blurY * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameBlurY.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameBlurY.new();
    }
  };
  (keyframe.KeyFrameBlurY.new = function() {
    keyframe.KeyFrameBlurY.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameBlurY.prototype;
  dart.addTypeTests(keyframe.KeyFrameBlurY);
  dart.addTypeCaches(keyframe.KeyFrameBlurY);
  dart.setMethodSignature(keyframe.KeyFrameBlurY, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameBlurY.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameBlurY, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameBlurY, I[0]);
  keyframe.KeyFrameBooleanProperty = class KeyFrameBooleanProperty extends keyframe.KeyFrame {
    apply(component, mix) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameBooleanProperty.new();
      if (!keyframe.KeyFrame.read(reader, frame)) {
        return null;
      }
      reader.readBool("value");
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameBooleanProperty.new();
    }
  };
  (keyframe.KeyFrameBooleanProperty.new = function() {
    keyframe.KeyFrameBooleanProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameBooleanProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameBooleanProperty);
  dart.addTypeCaches(keyframe.KeyFrameBooleanProperty);
  dart.setMethodSignature(keyframe.KeyFrameBooleanProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameBooleanProperty.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double]),
    setNext: dart.fnType(dart.void, [dart.nullable(keyframe.KeyFrame)])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameBooleanProperty, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameBooleanProperty, I[0]);
  keyframe.KeyFrameCollisionEnabledProperty = class KeyFrameCollisionEnabledProperty extends keyframe.KeyFrame {
    apply(component, mix) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameCollisionEnabledProperty.new();
      if (!keyframe.KeyFrame.read(reader, frame)) {
        return null;
      }
      reader.readBool("value");
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameCollisionEnabledProperty.new();
    }
  };
  (keyframe.KeyFrameCollisionEnabledProperty.new = function() {
    keyframe.KeyFrameCollisionEnabledProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameCollisionEnabledProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameCollisionEnabledProperty);
  dart.addTypeCaches(keyframe.KeyFrameCollisionEnabledProperty);
  dart.setMethodSignature(keyframe.KeyFrameCollisionEnabledProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameCollisionEnabledProperty.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double]),
    setNext: dart.fnType(dart.void, [dart.nullable(keyframe.KeyFrame)])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameCollisionEnabledProperty, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameCollisionEnabledProperty, I[0]);
  keyframe.KeyFrameConstraintStrength = class KeyFrameConstraintStrength extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let constraint = actor_constraint.ActorConstraint.as(component);
      constraint.strength = constraint.strength * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameConstraintStrength.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameConstraintStrength.new();
    }
  };
  (keyframe.KeyFrameConstraintStrength.new = function() {
    keyframe.KeyFrameConstraintStrength.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameConstraintStrength.prototype;
  dart.addTypeTests(keyframe.KeyFrameConstraintStrength);
  dart.addTypeCaches(keyframe.KeyFrameConstraintStrength);
  dart.setMethodSignature(keyframe.KeyFrameConstraintStrength, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameConstraintStrength.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameConstraintStrength, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameConstraintStrength, I[0]);
  keyframe.KeyFrameCornerRadius = class KeyFrameCornerRadius extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_rectangle.ActorRectangle.as(component);
      node.radius = node.radius * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameCornerRadius.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameCornerRadius.new();
    }
  };
  (keyframe.KeyFrameCornerRadius.new = function() {
    keyframe.KeyFrameCornerRadius.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameCornerRadius.prototype;
  dart.addTypeTests(keyframe.KeyFrameCornerRadius);
  dart.addTypeCaches(keyframe.KeyFrameCornerRadius);
  dart.setMethodSignature(keyframe.KeyFrameCornerRadius, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameCornerRadius.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameCornerRadius, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameCornerRadius, I[0]);
  var __KeyFrameDrawOrder__orderedNodes = dart.privateName(keyframe, "_#KeyFrameDrawOrder#_orderedNodes");
  var _orderedNodes = dart.privateName(keyframe, "_orderedNodes");
  keyframe.KeyFrameDrawOrder = class KeyFrameDrawOrder extends keyframe.KeyFrame {
    get [_orderedNodes]() {
      let t2;
      t2 = this[__KeyFrameDrawOrder__orderedNodes];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_orderedNodes")) : t2;
    }
    set [_orderedNodes](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_orderedNodes$35param) {
      this[__KeyFrameDrawOrder__orderedNodes] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_orderedNodes$35param;
    }
    apply(component, mix) {
      let artboard = dart.nullCheck(component).artboard;
      for (let doi of this[_orderedNodes]) {
        let component = artboard._get(doi.componentIndex);
        if (actor_drawable.ActorDrawable.is(component)) {
          component.drawOrder = doi.order;
        }
      }
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameDrawOrder.new();
      if (!keyframe.KeyFrame.read(reader, frame)) {
        return null;
      }
      reader.openArray("drawOrder");
      let numOrderedNodes = reader.readUint16Length();
      frame[_orderedNodes] = T.JSArrayOfDrawOrderIndex().of([]);
      for (let i = 0; i < numOrderedNodes; i = i + 1) {
        reader.openObject("order");
        let drawOrder = new keyframe.DrawOrderIndex.new(reader.readId("component"), reader.readUint16("order"));
        reader.closeObject();
        frame[_orderedNodes][$add](drawOrder);
      }
      reader.closeArray();
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameDrawOrder.new();
    }
  };
  (keyframe.KeyFrameDrawOrder.new = function() {
    this[__KeyFrameDrawOrder__orderedNodes] = null;
    keyframe.KeyFrameDrawOrder.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameDrawOrder.prototype;
  dart.addTypeTests(keyframe.KeyFrameDrawOrder);
  dart.addTypeCaches(keyframe.KeyFrameDrawOrder);
  dart.setMethodSignature(keyframe.KeyFrameDrawOrder, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameDrawOrder.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double]),
    setNext: dart.fnType(dart.void, [dart.nullable(keyframe.KeyFrame)])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameDrawOrder, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameDrawOrder, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameDrawOrder.__proto__),
    [_orderedNodes]: core.List$(keyframe.DrawOrderIndex)
  }));
  dart.setSetterSignature(keyframe.KeyFrameDrawOrder, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameDrawOrder.__proto__),
    [_orderedNodes]: core.List$(keyframe.DrawOrderIndex)
  }));
  dart.setLibraryUri(keyframe.KeyFrameDrawOrder, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameDrawOrder, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameDrawOrder.__proto__),
    [__KeyFrameDrawOrder__orderedNodes]: dart.fieldType(dart.nullable(core.List$(keyframe.DrawOrderIndex)))
  }));
  var __KeyFrameFillColor__value = dart.privateName(keyframe, "_#KeyFrameFillColor#_value");
  keyframe.KeyFrameFillColor = class KeyFrameFillColor extends keyframe.KeyFrameWithInterpolation {
    get [_value]() {
      let t2;
      t2 = this[__KeyFrameFillColor__value];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t2;
    }
    set [_value](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param) {
      this[__KeyFrameFillColor__value] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param;
    }
    get value() {
      return this[_value];
    }
    apply(component, mix) {
      let ac = actor_color.ActorColor.as(component);
      let l = this[_value][$length];
      let wr = ac.color;
      if (mix === 1.0) {
        for (let i = 0; i < l; i = i + 1) {
          wr[$_set](i, this[_value][$_get](i));
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < l; i = i + 1) {
          wr[$_set](i, wr[$_get](i) * mixi + this[_value][$_get](i) * mix);
        }
      }
      ac.markPaintDirty();
    }
    applyInterpolation(component, time, toFrame, mix) {
      let ac = actor_color.ActorColor.as(component);
      let wr = ac.color;
      let to = keyframe.KeyFrameFillColor.as(toFrame)[_value];
      let l = this[_value][$length];
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (toFrame.time - this[_time]));
      let fi = 1.0 - f;
      if (mix === 1.0) {
        for (let i = 0; i < l; i = i + 1) {
          wr[$_set](i, this[_value][$_get](i) * fi + to[$_get](i) * f);
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < l; i = i + 1) {
          let v = this[_value][$_get](i) * fi + to[$_get](i) * f;
          wr[$_set](i, wr[$_get](i) * mixi + v * mix);
        }
      }
      ac.markPaintDirty();
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameFillColor.new();
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame)) {
        return null;
      }
      frame[_value] = reader.readFloat32Array(4, "value");
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameFillColor.new();
    }
  };
  (keyframe.KeyFrameFillColor.new = function() {
    this[__KeyFrameFillColor__value] = null;
    keyframe.KeyFrameFillColor.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameFillColor.prototype;
  dart.addTypeTests(keyframe.KeyFrameFillColor);
  dart.addTypeCaches(keyframe.KeyFrameFillColor);
  dart.setMethodSignature(keyframe.KeyFrameFillColor, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameFillColor.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameFillColor, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameFillColor, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameFillColor.__proto__),
    [_value]: typed_data.Float32List,
    value: typed_data.Float32List
  }));
  dart.setSetterSignature(keyframe.KeyFrameFillColor, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameFillColor.__proto__),
    [_value]: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameFillColor, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameFillColor, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameFillColor.__proto__),
    [__KeyFrameFillColor__value]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  keyframe.KeyFrameFloatProperty = class KeyFrameFloatProperty extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameFloatProperty.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameFloatProperty.new();
    }
  };
  (keyframe.KeyFrameFloatProperty.new = function() {
    keyframe.KeyFrameFloatProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameFloatProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameFloatProperty);
  dart.addTypeCaches(keyframe.KeyFrameFloatProperty);
  dart.setMethodSignature(keyframe.KeyFrameFloatProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameFloatProperty.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameFloatProperty, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameFloatProperty, I[0]);
  var __KeyFrameGradient__value = dart.privateName(keyframe, "_#KeyFrameGradient#_value");
  keyframe.KeyFrameGradient = class KeyFrameGradient extends keyframe.KeyFrameWithInterpolation {
    get [_value]() {
      let t2;
      t2 = this[__KeyFrameGradient__value];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t2;
    }
    set [_value](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param) {
      this[__KeyFrameGradient__value] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param;
    }
    get value() {
      return this[_value];
    }
    apply(component, mix) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8;
      let gradient = actor_color.GradientColor.as(component);
      let ridx = 0;
      let wi = 0;
      if (mix === 1.0) {
        gradient.start._set(0, this[_value][$_get]((t2 = ridx, ridx = t2 + 1, t2)));
        gradient.start._set(1, this[_value][$_get]((t2$ = ridx, ridx = t2$ + 1, t2$)));
        gradient.end._set(0, this[_value][$_get]((t2$0 = ridx, ridx = t2$0 + 1, t2$0)));
        gradient.end._set(1, this[_value][$_get]((t2$1 = ridx, ridx = t2$1 + 1, t2$1)));
        while (ridx < this[_value][$length] && wi < gradient.colorStops[$length]) {
          gradient.colorStops[$_set]((t2$2 = wi, wi = t2$2 + 1, t2$2), this[_value][$_get]((t2$3 = ridx, ridx = t2$3 + 1, t2$3)));
        }
      } else {
        let imix = 1.0 - mix;
        gradient.start._set(0, gradient.start._get(0) * imix + this[_value][$_get]((t2$4 = ridx, ridx = t2$4 + 1, t2$4)) * mix);
        gradient.start._set(1, gradient.start._get(1) * imix + this[_value][$_get]((t2$5 = ridx, ridx = t2$5 + 1, t2$5)) * mix);
        gradient.end._set(0, gradient.end._get(0) * imix + this[_value][$_get]((t2$6 = ridx, ridx = t2$6 + 1, t2$6)) * mix);
        gradient.end._set(1, gradient.end._get(1) * imix + this[_value][$_get]((t2$7 = ridx, ridx = t2$7 + 1, t2$7)) * mix);
        while (ridx < this[_value][$length] && wi < gradient.colorStops[$length]) {
          gradient.colorStops[$_set](wi, gradient.colorStops[$_get](wi) * imix + this[_value][$_get]((t2$8 = ridx, ridx = t2$8 + 1, t2$8)));
          wi = wi + 1;
        }
      }
      gradient.markPaintDirty();
    }
    applyInterpolation(component, time, toFrame, mix) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3;
      let gradient = actor_color.GradientColor.as(component);
      let v = keyframe.KeyFrameGradient.as(toFrame)[_value];
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (toFrame.time - this[_time]));
      let fi = 1.0 - f;
      let ridx = 0;
      let wi = 0;
      if (mix === 1.0) {
        gradient.start._set(0, this[_value][$_get](ridx) * fi + v[$_get]((t2 = ridx, ridx = t2 + 1, t2)) * f);
        gradient.start._set(1, this[_value][$_get](ridx) * fi + v[$_get]((t2$ = ridx, ridx = t2$ + 1, t2$)) * f);
        gradient.end._set(0, this[_value][$_get](ridx) * fi + v[$_get]((t2$0 = ridx, ridx = t2$0 + 1, t2$0)) * f);
        gradient.end._set(1, this[_value][$_get](ridx) * fi + v[$_get]((t2$1 = ridx, ridx = t2$1 + 1, t2$1)) * f);
        while (ridx < v[$length] && wi < gradient.colorStops[$length]) {
          gradient.colorStops[$_set]((t2$2 = wi, wi = t2$2 + 1, t2$2), this[_value][$_get](ridx) * fi + v[$_get]((t2$3 = ridx, ridx = t2$3 + 1, t2$3)) * f);
        }
      } else {
        let imix = 1.0 - mix;
        let val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        gradient.start._set(0, gradient.start._get(0) * imix + val * mix);
        ridx = ridx + 1;
        val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        gradient.start._set(1, gradient.start._get(1) * imix + val * mix);
        ridx = ridx + 1;
        val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        gradient.end._set(0, gradient.end._get(0) * imix + val * mix);
        ridx = ridx + 1;
        val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        gradient.end._set(1, gradient.end._get(1) * imix + val * mix);
        ridx = ridx + 1;
        while (ridx < v[$length] && wi < gradient.colorStops[$length]) {
          val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
          gradient.colorStops[$_set](wi, gradient.colorStops[$_get](wi) * imix + val * mix);
          ridx = ridx + 1;
          wi = wi + 1;
        }
      }
      gradient.markPaintDirty();
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameGradient.new();
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame)) {
        return null;
      }
      let len = reader.readUint16("length");
      frame[_value] = reader.readFloat32Array(len, "value");
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameGradient.new();
    }
  };
  (keyframe.KeyFrameGradient.new = function() {
    this[__KeyFrameGradient__value] = null;
    keyframe.KeyFrameGradient.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameGradient.prototype;
  dart.addTypeTests(keyframe.KeyFrameGradient);
  dart.addTypeCaches(keyframe.KeyFrameGradient);
  dart.setMethodSignature(keyframe.KeyFrameGradient, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameGradient.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameGradient, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameGradient, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameGradient.__proto__),
    [_value]: typed_data.Float32List,
    value: typed_data.Float32List
  }));
  dart.setSetterSignature(keyframe.KeyFrameGradient, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameGradient.__proto__),
    [_value]: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameGradient, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameGradient, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameGradient.__proto__),
    [__KeyFrameGradient__value]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  var __KeyFrameImageVertices__vertices = dart.privateName(keyframe, "_#KeyFrameImageVertices#_vertices");
  var _vertices = dart.privateName(keyframe, "_vertices");
  keyframe.KeyFrameImageVertices = class KeyFrameImageVertices extends keyframe.KeyFrameWithInterpolation {
    get [_vertices]() {
      let t2;
      t2 = this[__KeyFrameImageVertices__vertices];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_vertices")) : t2;
    }
    set [_vertices](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_vertices$35param) {
      this[__KeyFrameImageVertices__vertices] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_vertices$35param;
    }
    get vertices() {
      return this[_vertices];
    }
    apply(component, mix) {
      let imageNode = actor_image.ActorImage.as(component);
      let l = this[_vertices][$length];
      let wr = imageNode.animationDeformedVertices;
      if (mix === 1.0) {
        for (let i = 0; i < l; i = i + 1) {
          dart.nullCheck(wr)[$_set](i, this[_vertices][$_get](i));
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < l; i = i + 1) {
          dart.nullCheck(wr)[$_set](i, wr[$_get](i) * mixi + this[_vertices][$_get](i) * mix);
        }
      }
      imageNode.invalidateDrawable();
    }
    applyInterpolation(component, time, toFrame, mix) {
      let imageNode = actor_image.ActorImage.as(component);
      let wr = imageNode.animationDeformedVertices;
      let to = keyframe.KeyFrameImageVertices.as(toFrame)[_vertices];
      let l = this[_vertices][$length];
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (toFrame.time - this[_time]));
      let fi = 1.0 - f;
      if (mix === 1.0) {
        for (let i = 0; i < l; i = i + 1) {
          dart.nullCheck(wr)[$_set](i, this[_vertices][$_get](i) * fi + to[$_get](i) * f);
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < l; i = i + 1) {
          let v = this[_vertices][$_get](i) * fi + to[$_get](i) * f;
          dart.nullCheck(wr)[$_set](i, wr[$_get](i) * mixi + v * mix);
        }
      }
      imageNode.invalidateDrawable();
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameImageVertices.new();
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame)) {
        return null;
      }
      let imageNode = actor_image.ActorImage.as(component);
      frame[_vertices] = reader.readFloat32Array(imageNode.vertexCount * 2, "value");
      imageNode.doesAnimationVertexDeform = true;
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameImageVertices.new();
    }
  };
  (keyframe.KeyFrameImageVertices.new = function() {
    this[__KeyFrameImageVertices__vertices] = null;
    keyframe.KeyFrameImageVertices.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameImageVertices.prototype;
  dart.addTypeTests(keyframe.KeyFrameImageVertices);
  dart.addTypeCaches(keyframe.KeyFrameImageVertices);
  dart.setMethodSignature(keyframe.KeyFrameImageVertices, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameImageVertices.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameImageVertices, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameImageVertices, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameImageVertices.__proto__),
    [_vertices]: typed_data.Float32List,
    vertices: typed_data.Float32List
  }));
  dart.setSetterSignature(keyframe.KeyFrameImageVertices, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameImageVertices.__proto__),
    [_vertices]: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameImageVertices, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameImageVertices, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameImageVertices.__proto__),
    [__KeyFrameImageVertices__vertices]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  keyframe.KeyFrameInnerRadius = class KeyFrameInnerRadius extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      if (component == null) return;
      let star = actor_star.ActorStar.as(component);
      star.innerRadius = star.innerRadius * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameInnerRadius.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameInnerRadius.new();
    }
  };
  (keyframe.KeyFrameInnerRadius.new = function() {
    keyframe.KeyFrameInnerRadius.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameInnerRadius.prototype;
  dart.addTypeTests(keyframe.KeyFrameInnerRadius);
  dart.addTypeCaches(keyframe.KeyFrameInnerRadius);
  dart.setMethodSignature(keyframe.KeyFrameInnerRadius, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameInnerRadius.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameInnerRadius, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameInnerRadius, I[0]);
  var __KeyFrameInt__value = dart.privateName(keyframe, "_#KeyFrameInt#_value");
  keyframe.KeyFrameInt = class KeyFrameInt extends keyframe.KeyFrameWithInterpolation {
    get [_value]() {
      let t2;
      t2 = this[__KeyFrameInt__value];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t2;
    }
    set [_value](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param) {
      this[__KeyFrameInt__value] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param;
    }
    get value() {
      return this[_value];
    }
    apply(component, mix) {
      this.setValue(component, this[_value], mix);
    }
    applyInterpolation(component, time, toFrame, mix) {
      let to = keyframe.KeyFrameNumeric.as(toFrame);
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (to[_time] - this[_time]));
      this.setValue(component, this[_value] * (1.0 - f) + to[_value] * f, mix);
    }
    static read(reader, frame) {
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame)) {
        return false;
      }
      frame[_value] = reader.readInt32("value")[$toDouble]();
      return true;
    }
  };
  (keyframe.KeyFrameInt.new = function() {
    this[__KeyFrameInt__value] = null;
    keyframe.KeyFrameInt.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameInt.prototype;
  dart.addTypeTests(keyframe.KeyFrameInt);
  dart.addTypeCaches(keyframe.KeyFrameInt);
  dart.setMethodSignature(keyframe.KeyFrameInt, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameInt.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameInt, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameInt, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameInt.__proto__),
    [_value]: core.double,
    value: core.double
  }));
  dart.setSetterSignature(keyframe.KeyFrameInt, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameInt.__proto__),
    [_value]: core.double
  }));
  dart.setLibraryUri(keyframe.KeyFrameInt, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameInt, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameInt.__proto__),
    [__KeyFrameInt__value]: dart.fieldType(dart.nullable(core.double))
  }));
  keyframe.KeyFrameIntProperty = class KeyFrameIntProperty extends keyframe.KeyFrameInt {
    setValue(component, value, mix) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameIntProperty.new();
      if (keyframe.KeyFrameInt.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameIntProperty.new();
    }
  };
  (keyframe.KeyFrameIntProperty.new = function() {
    keyframe.KeyFrameIntProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameIntProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameIntProperty);
  dart.addTypeCaches(keyframe.KeyFrameIntProperty);
  dart.setMethodSignature(keyframe.KeyFrameIntProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameIntProperty.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameIntProperty, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameIntProperty, I[0]);
  keyframe.KeyFrameLength = class KeyFrameLength extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let bone = T.ActorBoneBaseN().as(component);
      if (bone == null) {
        return;
      }
      bone.length = bone.length * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameLength.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameLength.new();
    }
  };
  (keyframe.KeyFrameLength.new = function() {
    keyframe.KeyFrameLength.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameLength.prototype;
  dart.addTypeTests(keyframe.KeyFrameLength);
  dart.addTypeCaches(keyframe.KeyFrameLength);
  dart.setMethodSignature(keyframe.KeyFrameLength, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameLength.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameLength, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameLength, I[0]);
  keyframe.KeyFrameOpacity = class KeyFrameOpacity extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.opacity = node.opacity * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameOpacity.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameOpacity.new();
    }
  };
  (keyframe.KeyFrameOpacity.new = function() {
    keyframe.KeyFrameOpacity.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameOpacity.prototype;
  dart.addTypeTests(keyframe.KeyFrameOpacity);
  dart.addTypeCaches(keyframe.KeyFrameOpacity);
  dart.setMethodSignature(keyframe.KeyFrameOpacity, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameOpacity.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameOpacity, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameOpacity, I[0]);
  keyframe.KeyFramePaintOpacity = class KeyFramePaintOpacity extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_color.ActorPaint.as(component);
      node.opacity = node.opacity * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFramePaintOpacity.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFramePaintOpacity.new();
    }
  };
  (keyframe.KeyFramePaintOpacity.new = function() {
    keyframe.KeyFramePaintOpacity.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFramePaintOpacity.prototype;
  dart.addTypeTests(keyframe.KeyFramePaintOpacity);
  dart.addTypeCaches(keyframe.KeyFramePaintOpacity);
  dart.setMethodSignature(keyframe.KeyFramePaintOpacity, () => ({
    __proto__: dart.getMethods(keyframe.KeyFramePaintOpacity.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFramePaintOpacity, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFramePaintOpacity, I[0]);
  var __KeyFramePathVertices__vertices = dart.privateName(keyframe, "_#KeyFramePathVertices#_vertices");
  keyframe.KeyFramePathVertices = class KeyFramePathVertices extends keyframe.KeyFrameWithInterpolation {
    get [_vertices]() {
      let t2;
      t2 = this[__KeyFramePathVertices__vertices];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_vertices")) : t2;
    }
    set [_vertices](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_vertices$35param) {
      this[__KeyFramePathVertices__vertices] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_vertices$35param;
    }
    get vertices() {
      return this[_vertices];
    }
    apply(component, mix) {
      let path = actor_path.ActorPath.as(component);
      let l = this[_vertices][$length];
      let wr = path.vertexDeform;
      if (mix === 1.0) {
        for (let i = 0; i < l; i = i + 1) {
          dart.nullCheck(wr)[$_set](i, this[_vertices][$_get](i));
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < l; i = i + 1) {
          dart.nullCheck(wr)[$_set](i, wr[$_get](i) * mixi + this[_vertices][$_get](i) * mix);
        }
      }
      path.markVertexDeformDirty();
    }
    applyInterpolation(component, time, toFrame, mix) {
      let path = actor_path.ActorPath.as(component);
      let wr = path.vertexDeform;
      let to = keyframe.KeyFramePathVertices.as(toFrame)[_vertices];
      let l = this[_vertices][$length];
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (toFrame.time - this[_time]));
      let fi = 1.0 - f;
      if (mix === 1.0) {
        for (let i = 0; i < l; i = i + 1) {
          dart.nullCheck(wr)[$_set](i, this[_vertices][$_get](i) * fi + to[$_get](i) * f);
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < l; i = i + 1) {
          let v = this[_vertices][$_get](i) * fi + to[$_get](i) * f;
          dart.nullCheck(wr)[$_set](i, wr[$_get](i) * mixi + v * mix);
        }
      }
      path.markVertexDeformDirty();
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4;
      let frame = new keyframe.KeyFramePathVertices.new();
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame) || !actor_path.ActorPath.is(component)) {
        return null;
      }
      let pathNode = component;
      let length = pathNode.points[$fold](core.int, 0, dart.fn((previous, point) => previous + 2 + (point.pointType === path_point.PointType.straight ? 1 : 4), T.intAndPathPointToint()));
      frame[_vertices] = _native_typed_data.NativeFloat32List.new(length);
      let readIdx = 0;
      reader.openArray("value");
      for (let point of pathNode.points) {
        frame[_vertices][$_set]((t2 = readIdx, readIdx = t2 + 1, t2), reader.readFloat32("translationX"));
        frame[_vertices][$_set]((t2$ = readIdx, readIdx = t2$ + 1, t2$), reader.readFloat32("translationY"));
        if (point.pointType === path_point.PointType.straight) {
          frame[_vertices][$_set]((t2$0 = readIdx, readIdx = t2$0 + 1, t2$0), reader.readFloat32("radius"));
        } else {
          frame[_vertices][$_set]((t2$1 = readIdx, readIdx = t2$1 + 1, t2$1), reader.readFloat32("inValueX"));
          frame[_vertices][$_set]((t2$2 = readIdx, readIdx = t2$2 + 1, t2$2), reader.readFloat32("inValueY"));
          frame[_vertices][$_set]((t2$3 = readIdx, readIdx = t2$3 + 1, t2$3), reader.readFloat32("outValueX"));
          frame[_vertices][$_set]((t2$4 = readIdx, readIdx = t2$4 + 1, t2$4), reader.readFloat32("outValueY"));
        }
      }
      reader.closeArray();
      pathNode.makeVertexDeform();
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFramePathVertices.new();
    }
  };
  (keyframe.KeyFramePathVertices.new = function() {
    this[__KeyFramePathVertices__vertices] = null;
    keyframe.KeyFramePathVertices.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFramePathVertices.prototype;
  dart.addTypeTests(keyframe.KeyFramePathVertices);
  dart.addTypeCaches(keyframe.KeyFramePathVertices);
  dart.setMethodSignature(keyframe.KeyFramePathVertices, () => ({
    __proto__: dart.getMethods(keyframe.KeyFramePathVertices.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFramePathVertices, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFramePathVertices, () => ({
    __proto__: dart.getGetters(keyframe.KeyFramePathVertices.__proto__),
    [_vertices]: typed_data.Float32List,
    vertices: typed_data.Float32List
  }));
  dart.setSetterSignature(keyframe.KeyFramePathVertices, () => ({
    __proto__: dart.getSetters(keyframe.KeyFramePathVertices.__proto__),
    [_vertices]: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFramePathVertices, I[0]);
  dart.setFieldSignature(keyframe.KeyFramePathVertices, () => ({
    __proto__: dart.getFields(keyframe.KeyFramePathVertices.__proto__),
    [__KeyFramePathVertices__vertices]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  keyframe.KeyFramePosX = class KeyFramePosX extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.x = node.x * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFramePosX.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFramePosX.new();
    }
  };
  (keyframe.KeyFramePosX.new = function() {
    keyframe.KeyFramePosX.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFramePosX.prototype;
  dart.addTypeTests(keyframe.KeyFramePosX);
  dart.addTypeCaches(keyframe.KeyFramePosX);
  dart.setMethodSignature(keyframe.KeyFramePosX, () => ({
    __proto__: dart.getMethods(keyframe.KeyFramePosX.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFramePosX, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFramePosX, I[0]);
  keyframe.KeyFramePosY = class KeyFramePosY extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.y = node.y * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFramePosY.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFramePosY.new();
    }
  };
  (keyframe.KeyFramePosY.new = function() {
    keyframe.KeyFramePosY.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFramePosY.prototype;
  dart.addTypeTests(keyframe.KeyFramePosY);
  dart.addTypeCaches(keyframe.KeyFramePosY);
  dart.setMethodSignature(keyframe.KeyFramePosY, () => ({
    __proto__: dart.getMethods(keyframe.KeyFramePosY.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFramePosY, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFramePosY, I[0]);
  var __KeyFrameRadial__value = dart.privateName(keyframe, "_#KeyFrameRadial#_value");
  keyframe.KeyFrameRadial = class KeyFrameRadial extends keyframe.KeyFrameWithInterpolation {
    get [_value]() {
      let t2;
      t2 = this[__KeyFrameRadial__value];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t2;
    }
    set [_value](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param) {
      this[__KeyFrameRadial__value] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param;
    }
    get value() {
      return this[_value];
    }
    apply(component, mix) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10;
      let radial = actor_color.RadialGradientColor.as(component);
      let ridx = 0;
      let wi = 0;
      if (mix === 1.0) {
        radial.secondaryRadiusScale = this.value[$_get]((t2 = ridx, ridx = t2 + 1, t2));
        radial.start._set(0, this[_value][$_get]((t2$ = ridx, ridx = t2$ + 1, t2$)));
        radial.start._set(1, this[_value][$_get]((t2$0 = ridx, ridx = t2$0 + 1, t2$0)));
        radial.end._set(0, this[_value][$_get]((t2$1 = ridx, ridx = t2$1 + 1, t2$1)));
        radial.end._set(1, this[_value][$_get]((t2$2 = ridx, ridx = t2$2 + 1, t2$2)));
        while (ridx < this[_value][$length] && wi < radial.colorStops[$length]) {
          radial.colorStops[$_set]((t2$3 = wi, wi = t2$3 + 1, t2$3), this[_value][$_get]((t2$4 = ridx, ridx = t2$4 + 1, t2$4)));
        }
      } else {
        let imix = 1.0 - mix;
        radial.secondaryRadiusScale = radial.secondaryRadiusScale * imix + this.value[$_get]((t2$5 = ridx, ridx = t2$5 + 1, t2$5)) * mix;
        radial.start._set(0, radial.start._get(0) * imix + this[_value][$_get]((t2$6 = ridx, ridx = t2$6 + 1, t2$6)) * mix);
        radial.start._set(1, radial.start._get(1) * imix + this[_value][$_get]((t2$7 = ridx, ridx = t2$7 + 1, t2$7)) * mix);
        radial.end._set(0, radial.end._get(0) * imix + this[_value][$_get]((t2$8 = ridx, ridx = t2$8 + 1, t2$8)) * mix);
        radial.end._set(1, radial.end._get(1) * imix + this[_value][$_get]((t2$9 = ridx, ridx = t2$9 + 1, t2$9)) * mix);
        while (ridx < this[_value][$length] && wi < radial.colorStops[$length]) {
          radial.colorStops[$_set](wi, radial.colorStops[$_get](wi) * imix + this[_value][$_get]((t2$10 = ridx, ridx = t2$10 + 1, t2$10)));
          wi = wi + 1;
        }
      }
      radial.markPaintDirty();
    }
    applyInterpolation(component, time, toFrame, mix) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9;
      let radial = actor_color.RadialGradientColor.as(component);
      let v = keyframe.KeyFrameRadial.as(toFrame)[_value];
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (toFrame.time - this[_time]));
      let fi = 1.0 - f;
      let ridx = 0;
      let wi = 0;
      if (mix === 1.0) {
        radial.secondaryRadiusScale = this[_value][$_get](ridx) * fi + v[$_get]((t2 = ridx, ridx = t2 + 1, t2)) * f;
        radial.start._set(0, this[_value][$_get](ridx) * fi + v[$_get]((t2$ = ridx, ridx = t2$ + 1, t2$)) * f);
        radial.start._set(1, this[_value][$_get](ridx) * fi + v[$_get]((t2$0 = ridx, ridx = t2$0 + 1, t2$0)) * f);
        radial.end._set(0, this[_value][$_get](ridx) * fi + v[$_get]((t2$1 = ridx, ridx = t2$1 + 1, t2$1)) * f);
        radial.end._set(1, this[_value][$_get](ridx) * fi + v[$_get]((t2$2 = ridx, ridx = t2$2 + 1, t2$2)) * f);
        while (ridx < v[$length] && wi < radial.colorStops[$length]) {
          radial.colorStops[$_set]((t2$3 = wi, wi = t2$3 + 1, t2$3), this[_value][$_get](ridx) * fi + v[$_get]((t2$4 = ridx, ridx = t2$4 + 1, t2$4)) * f);
        }
      } else {
        let imix = 1.0 - mix;
        let val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        radial.secondaryRadiusScale = this[_value][$_get](ridx) * fi + v[$_get]((t2$5 = ridx, ridx = t2$5 + 1, t2$5)) * f;
        val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        radial.start._set(0, this[_value][$_get]((t2$6 = ridx, ridx = t2$6 + 1, t2$6)) * imix + val * mix);
        val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        radial.start._set(1, this[_value][$_get]((t2$7 = ridx, ridx = t2$7 + 1, t2$7)) * imix + val * mix);
        val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        radial.end._set(0, this[_value][$_get]((t2$8 = ridx, ridx = t2$8 + 1, t2$8)) * imix + val * mix);
        val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
        radial.end._set(1, this[_value][$_get]((t2$9 = ridx, ridx = t2$9 + 1, t2$9)) * imix + val * mix);
        while (ridx < v[$length] && wi < radial.colorStops[$length]) {
          val = this[_value][$_get](ridx) * fi + v[$_get](ridx) * f;
          radial.colorStops[$_set](wi, radial.colorStops[$_get](wi) * imix + val * mix);
          ridx = ridx + 1;
          wi = wi + 1;
        }
      }
      radial.markPaintDirty();
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameRadial.new();
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame)) {
        return null;
      }
      let len = reader.readUint16("length");
      frame[_value] = reader.readFloat32Array(len, "value");
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameRadial.new();
    }
  };
  (keyframe.KeyFrameRadial.new = function() {
    this[__KeyFrameRadial__value] = null;
    keyframe.KeyFrameRadial.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameRadial.prototype;
  dart.addTypeTests(keyframe.KeyFrameRadial);
  dart.addTypeCaches(keyframe.KeyFrameRadial);
  dart.setMethodSignature(keyframe.KeyFrameRadial, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameRadial.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameRadial, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameRadial, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameRadial.__proto__),
    [_value]: typed_data.Float32List,
    value: typed_data.Float32List
  }));
  dart.setSetterSignature(keyframe.KeyFrameRadial, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameRadial.__proto__),
    [_value]: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameRadial, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameRadial, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameRadial.__proto__),
    [__KeyFrameRadial__value]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  keyframe.KeyFrameRotation = class KeyFrameRotation extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.rotation = node.rotation * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameRotation.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameRotation.new();
    }
  };
  (keyframe.KeyFrameRotation.new = function() {
    keyframe.KeyFrameRotation.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameRotation.prototype;
  dart.addTypeTests(keyframe.KeyFrameRotation);
  dart.addTypeCaches(keyframe.KeyFrameRotation);
  dart.setMethodSignature(keyframe.KeyFrameRotation, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameRotation.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameRotation, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameRotation, I[0]);
  keyframe.KeyFrameScaleX = class KeyFrameScaleX extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.scaleX = node.scaleX * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameScaleX.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameScaleX.new();
    }
  };
  (keyframe.KeyFrameScaleX.new = function() {
    keyframe.KeyFrameScaleX.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameScaleX.prototype;
  dart.addTypeTests(keyframe.KeyFrameScaleX);
  dart.addTypeCaches(keyframe.KeyFrameScaleX);
  dart.setMethodSignature(keyframe.KeyFrameScaleX, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameScaleX.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameScaleX, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameScaleX, I[0]);
  keyframe.KeyFrameScaleY = class KeyFrameScaleY extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.scaleY = node.scaleY * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameScaleY.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameScaleY.new();
    }
  };
  (keyframe.KeyFrameScaleY.new = function() {
    keyframe.KeyFrameScaleY.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameScaleY.prototype;
  dart.addTypeTests(keyframe.KeyFrameScaleY);
  dart.addTypeCaches(keyframe.KeyFrameScaleY);
  dart.setMethodSignature(keyframe.KeyFrameScaleY, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameScaleY.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameScaleY, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameScaleY, I[0]);
  keyframe.KeyFrameSequence = class KeyFrameSequence extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_image.ActorImage.as(component);
      let frameIndex = value[$floor]()[$modulo](dart.nullCheck(node.sequenceFrames)[$length]);
      if (frameIndex < 0) {
        frameIndex = frameIndex + dart.nullCheck(node.sequenceFrames)[$length];
      }
      node.sequenceFrame = frameIndex;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameSequence.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameSequence.new();
    }
  };
  (keyframe.KeyFrameSequence.new = function() {
    keyframe.KeyFrameSequence.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameSequence.prototype;
  dart.addTypeTests(keyframe.KeyFrameSequence);
  dart.addTypeCaches(keyframe.KeyFrameSequence);
  dart.setMethodSignature(keyframe.KeyFrameSequence, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameSequence.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameSequence, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameSequence, I[0]);
  var __KeyFrameShadowColor__value = dart.privateName(keyframe, "_#KeyFrameShadowColor#_value");
  keyframe.KeyFrameShadowColor = class KeyFrameShadowColor extends keyframe.KeyFrameWithInterpolation {
    get [_value]() {
      let t2;
      t2 = this[__KeyFrameShadowColor__value];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t2;
    }
    set [_value](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param) {
      this[__KeyFrameShadowColor__value] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param;
    }
    get value() {
      return this[_value];
    }
    apply(component, mix) {
      let shadow = actor_shadow.ActorShadow.as(component);
      let l = this[_value][$length];
      let wr = shadow.color;
      if (mix === 1.0) {
        for (let i = 0; i < l; i = i + 1) {
          wr[$_set](i, this[_value][$_get](i));
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < l; i = i + 1) {
          wr[$_set](i, wr[$_get](i) * mixi + this[_value][$_get](i) * mix);
        }
      }
    }
    applyInterpolation(component, time, toFrame, mix) {
      let shadow = actor_shadow.ActorShadow.as(component);
      let wr = shadow.color;
      let to = keyframe.KeyFrameShadowColor.as(toFrame)[_value];
      let l = this[_value][$length];
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (toFrame.time - this[_time]));
      let fi = 1.0 - f;
      if (mix === 1.0) {
        for (let i = 0; i < l; i = i + 1) {
          wr[$_set](i, this[_value][$_get](i) * fi + to[$_get](i) * f);
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < l; i = i + 1) {
          let v = this[_value][$_get](i) * fi + to[$_get](i) * f;
          wr[$_set](i, wr[$_get](i) * mixi + v * mix);
        }
      }
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameShadowColor.new();
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame)) {
        return null;
      }
      frame[_value] = reader.readFloat32Array(4, "value");
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameShadowColor.new();
    }
  };
  (keyframe.KeyFrameShadowColor.new = function() {
    this[__KeyFrameShadowColor__value] = null;
    keyframe.KeyFrameShadowColor.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameShadowColor.prototype;
  dart.addTypeTests(keyframe.KeyFrameShadowColor);
  dart.addTypeCaches(keyframe.KeyFrameShadowColor);
  dart.setMethodSignature(keyframe.KeyFrameShadowColor, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameShadowColor.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameShadowColor, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameShadowColor, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameShadowColor.__proto__),
    [_value]: typed_data.Float32List,
    value: typed_data.Float32List
  }));
  dart.setSetterSignature(keyframe.KeyFrameShadowColor, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameShadowColor.__proto__),
    [_value]: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameShadowColor, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameShadowColor, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameShadowColor.__proto__),
    [__KeyFrameShadowColor__value]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  keyframe.KeyFrameShadowOffsetX = class KeyFrameShadowOffsetX extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_shadow.ActorShadow.as(component);
      node.offsetX = node.offsetX * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameShadowOffsetX.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameShadowOffsetX.new();
    }
  };
  (keyframe.KeyFrameShadowOffsetX.new = function() {
    keyframe.KeyFrameShadowOffsetX.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameShadowOffsetX.prototype;
  dart.addTypeTests(keyframe.KeyFrameShadowOffsetX);
  dart.addTypeCaches(keyframe.KeyFrameShadowOffsetX);
  dart.setMethodSignature(keyframe.KeyFrameShadowOffsetX, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameShadowOffsetX.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameShadowOffsetX, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameShadowOffsetX, I[0]);
  keyframe.KeyFrameShadowOffsetY = class KeyFrameShadowOffsetY extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      let node = actor_shadow.ActorShadow.as(component);
      node.offsetY = node.offsetY * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameShadowOffsetY.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameShadowOffsetY.new();
    }
  };
  (keyframe.KeyFrameShadowOffsetY.new = function() {
    keyframe.KeyFrameShadowOffsetY.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameShadowOffsetY.prototype;
  dart.addTypeTests(keyframe.KeyFrameShadowOffsetY);
  dart.addTypeCaches(keyframe.KeyFrameShadowOffsetY);
  dart.setMethodSignature(keyframe.KeyFrameShadowOffsetY, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameShadowOffsetY.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameShadowOffsetY, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameShadowOffsetY, I[0]);
  keyframe.KeyFrameShapeHeight = class KeyFrameShapeHeight extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      if (component == null) return;
      if (actor_path.ActorProceduralPath.is(component)) {
        component.height = component.height * (1.0 - mix) + value * mix;
      }
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameShapeHeight.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameShapeHeight.new();
    }
  };
  (keyframe.KeyFrameShapeHeight.new = function() {
    keyframe.KeyFrameShapeHeight.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameShapeHeight.prototype;
  dart.addTypeTests(keyframe.KeyFrameShapeHeight);
  dart.addTypeCaches(keyframe.KeyFrameShapeHeight);
  dart.setMethodSignature(keyframe.KeyFrameShapeHeight, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameShapeHeight.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameShapeHeight, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameShapeHeight, I[0]);
  keyframe.KeyFrameShapeWidth = class KeyFrameShapeWidth extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      if (component == null) return;
      if (actor_path.ActorProceduralPath.is(component)) {
        component.width = component.width * (1.0 - mix) + value * mix;
      }
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameShapeWidth.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameShapeWidth.new();
    }
  };
  (keyframe.KeyFrameShapeWidth.new = function() {
    keyframe.KeyFrameShapeWidth.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameShapeWidth.prototype;
  dart.addTypeTests(keyframe.KeyFrameShapeWidth);
  dart.addTypeCaches(keyframe.KeyFrameShapeWidth);
  dart.setMethodSignature(keyframe.KeyFrameShapeWidth, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameShapeWidth.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameShapeWidth, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameShapeWidth, I[0]);
  keyframe.KeyFrameStringProperty = class KeyFrameStringProperty extends keyframe.KeyFrame {
    apply(component, mix) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStringProperty.new();
      if (!keyframe.KeyFrame.read(reader, frame)) {
        return null;
      }
      reader.readString("value");
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameStringProperty.new();
    }
  };
  (keyframe.KeyFrameStringProperty.new = function() {
    keyframe.KeyFrameStringProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStringProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameStringProperty);
  dart.addTypeCaches(keyframe.KeyFrameStringProperty);
  dart.setMethodSignature(keyframe.KeyFrameStringProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStringProperty.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double]),
    setNext: dart.fnType(dart.void, [dart.nullable(keyframe.KeyFrame)])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameStringProperty, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameStringProperty, I[0]);
  var __KeyFrameStrokeColor__value = dart.privateName(keyframe, "_#KeyFrameStrokeColor#_value");
  keyframe.KeyFrameStrokeColor = class KeyFrameStrokeColor extends keyframe.KeyFrameWithInterpolation {
    get [_value]() {
      let t2;
      t2 = this[__KeyFrameStrokeColor__value];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t2;
    }
    set [_value](library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param) {
      this[__KeyFrameStrokeColor__value] = library$32package$58flare_flutter$47base$47animation$47keyframe$46dart$58$58_value$35param;
    }
    get value() {
      return this[_value];
    }
    apply(component, mix) {
      let node = actor_color.ColorStroke.as(component);
      let wr = node.color;
      let len = wr[$length];
      if (mix === 1.0) {
        for (let i = 0; i < len; i = i + 1) {
          wr[$_set](i, this[_value][$_get](i));
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < len; i = i + 1) {
          wr[$_set](i, wr[$_get](i) * mixi + this[_value][$_get](i) * mix);
        }
      }
      node.markPaintDirty();
    }
    applyInterpolation(component, time, toFrame, mix) {
      let cs = actor_color.ColorStroke.as(component);
      let wr = cs.color;
      let to = keyframe.KeyFrameStrokeColor.as(toFrame)[_value];
      let len = this[_value][$length];
      let f = this[_interpolator].getEasedMix((time - this[_time]) / (toFrame.time - this[_time]));
      let fi = 1.0 - f;
      if (mix === 1.0) {
        for (let i = 0; i < len; i = i + 1) {
          wr[$_set](i, this[_value][$_get](i) * fi + to[$_get](i) * f);
        }
      } else {
        let mixi = 1.0 - mix;
        for (let i = 0; i < len; i = i + 1) {
          let v = this[_value][$_get](i) * fi + to[$_get](i) * f;
          wr[$_set](i, wr[$_get](i) * mixi + v * mix);
        }
      }
      cs.markPaintDirty();
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeColor.new();
      if (!keyframe.KeyFrameWithInterpolation.read(reader, frame)) {
        return null;
      }
      frame[_value] = reader.readFloat32Array(4, "value");
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameStrokeColor.new();
    }
  };
  (keyframe.KeyFrameStrokeColor.new = function() {
    this[__KeyFrameStrokeColor__value] = null;
    keyframe.KeyFrameStrokeColor.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeColor.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeColor);
  dart.addTypeCaches(keyframe.KeyFrameStrokeColor);
  dart.setMethodSignature(keyframe.KeyFrameStrokeColor, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeColor.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameStrokeColor, () => ['read']);
  dart.setGetterSignature(keyframe.KeyFrameStrokeColor, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameStrokeColor.__proto__),
    [_value]: typed_data.Float32List,
    value: typed_data.Float32List
  }));
  dart.setSetterSignature(keyframe.KeyFrameStrokeColor, () => ({
    __proto__: dart.getSetters(keyframe.KeyFrameStrokeColor.__proto__),
    [_value]: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameStrokeColor, I[0]);
  dart.setFieldSignature(keyframe.KeyFrameStrokeColor, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameStrokeColor.__proto__),
    [__KeyFrameStrokeColor__value]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  keyframe.KeyFrameStrokeEnd = class KeyFrameStrokeEnd extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      if (!actor_color.ActorStroke.is(component)) return;
      let star = actor_color.ActorStroke.as(component);
      star.trimEnd = star.trimEnd * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeEnd.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameStrokeEnd.new();
    }
  };
  (keyframe.KeyFrameStrokeEnd.new = function() {
    keyframe.KeyFrameStrokeEnd.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeEnd.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeEnd);
  dart.addTypeCaches(keyframe.KeyFrameStrokeEnd);
  dart.setMethodSignature(keyframe.KeyFrameStrokeEnd, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeEnd.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameStrokeEnd, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameStrokeEnd, I[0]);
  keyframe.KeyFrameStrokeOffset = class KeyFrameStrokeOffset extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      if (component == null) return;
      let star = actor_color.ActorStroke.as(component);
      star.trimOffset = star.trimOffset * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeOffset.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameStrokeOffset.new();
    }
  };
  (keyframe.KeyFrameStrokeOffset.new = function() {
    keyframe.KeyFrameStrokeOffset.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeOffset.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeOffset);
  dart.addTypeCaches(keyframe.KeyFrameStrokeOffset);
  dart.setMethodSignature(keyframe.KeyFrameStrokeOffset, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeOffset.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameStrokeOffset, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameStrokeOffset, I[0]);
  keyframe.KeyFrameStrokeStart = class KeyFrameStrokeStart extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      if (!actor_color.ActorStroke.is(component)) return;
      let star = actor_color.ActorStroke.as(component);
      star.trimStart = star.trimStart * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeStart.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameStrokeStart.new();
    }
  };
  (keyframe.KeyFrameStrokeStart.new = function() {
    keyframe.KeyFrameStrokeStart.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeStart.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeStart);
  dart.addTypeCaches(keyframe.KeyFrameStrokeStart);
  dart.setMethodSignature(keyframe.KeyFrameStrokeStart, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeStart.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameStrokeStart, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameStrokeStart, I[0]);
  keyframe.KeyFrameStrokeWidth = class KeyFrameStrokeWidth extends keyframe.KeyFrameNumeric {
    setValue(component, value, mix) {
      if (component == null) return;
      let stroke = actor_color.ActorStroke.as(component);
      stroke.width = stroke.width * (1.0 - mix) + value * mix;
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeWidth.new();
      if (keyframe.KeyFrameNumeric.read(reader, frame)) {
        return frame;
      }
      return null;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameStrokeWidth.new();
    }
  };
  (keyframe.KeyFrameStrokeWidth.new = function() {
    keyframe.KeyFrameStrokeWidth.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeWidth.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeWidth);
  dart.addTypeCaches(keyframe.KeyFrameStrokeWidth);
  dart.setMethodSignature(keyframe.KeyFrameStrokeWidth, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeWidth.__proto__),
    setValue: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, core.double])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameStrokeWidth, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameStrokeWidth, I[0]);
  keyframe.KeyFrameTrigger = class KeyFrameTrigger extends keyframe.KeyFrame {
    apply(component, mix) {
    }
    applyInterpolation(component, time, toFrame, mix) {
    }
    setNext(frame) {
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameTrigger.new();
      if (!keyframe.KeyFrame.read(reader, frame)) {
        return null;
      }
      return frame;
    }
    static ['_#new#tearOff']() {
      return new keyframe.KeyFrameTrigger.new();
    }
  };
  (keyframe.KeyFrameTrigger.new = function() {
    keyframe.KeyFrameTrigger.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameTrigger.prototype;
  dart.addTypeTests(keyframe.KeyFrameTrigger);
  dart.addTypeCaches(keyframe.KeyFrameTrigger);
  dart.setMethodSignature(keyframe.KeyFrameTrigger, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameTrigger.__proto__),
    apply: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double]),
    applyInterpolation: dart.fnType(dart.void, [dart.nullable(actor_component.ActorComponent), core.double, keyframe.KeyFrame, core.double]),
    setNext: dart.fnType(dart.void, [dart.nullable(keyframe.KeyFrame)])
  }));
  dart.setStaticMethodSignature(keyframe.KeyFrameTrigger, () => ['read']);
  dart.setLibraryUri(keyframe.KeyFrameTrigger, I[0]);
  dart.defineLazy(keyframe, {
    /*keyframe.interpolationTypesLookup*/get interpolationTypesLookup() {
      return T.HashMapOfint$InterpolationTypes().fromIterables(T.JSArrayOfint().of([0, 1, 2]), T.JSArrayOfInterpolationTypes().of([keyframe.InterpolationTypes.hold, keyframe.InterpolationTypes.linear, keyframe.InterpolationTypes.cubic]));
    },
    set interpolationTypesLookup(_) {}
  }, false);
  var _perm = dart.privateName(dependency_sorter, "_perm");
  var _temp = dart.privateName(dependency_sorter, "_temp");
  var _visit = dart.privateName(dependency_sorter, "_visit");
  dependency_sorter.DependencySorter = class DependencySorter extends core.Object {
    sort(root) {
      let order = T.JSArrayOfActorComponentN().of([]);
      if (!this[_visit](root, order)) {
        return null;
      }
      return order;
    }
    [_visit](n, order) {
      if (this[_perm].contains(n)) {
        return true;
      }
      if (this[_temp].contains(n)) {
        core.print("Dependency cycle!");
        return false;
      }
      this[_temp].add(n);
      let dependents = dart.nullCheck(n).dependents;
      if (dependents != null) {
        for (let d of dependents) {
          if (!this[_visit](d, order)) {
            return false;
          }
        }
      }
      this[_perm].add(n);
      order[$insert](0, n);
      return true;
    }
    static ['_#new#tearOff']() {
      return new dependency_sorter.DependencySorter.new();
    }
  };
  (dependency_sorter.DependencySorter.new = function() {
    this[_perm] = new (T._HashSetOfActorComponentN()).new();
    this[_temp] = new (T._HashSetOfActorComponentN()).new();
    ;
  }).prototype = dependency_sorter.DependencySorter.prototype;
  dart.addTypeTests(dependency_sorter.DependencySorter);
  dart.addTypeCaches(dependency_sorter.DependencySorter);
  dart.setMethodSignature(dependency_sorter.DependencySorter, () => ({
    __proto__: dart.getMethods(dependency_sorter.DependencySorter.__proto__),
    sort: dart.fnType(dart.nullable(core.List$(dart.nullable(actor_component.ActorComponent))), [actor_component.ActorComponent]),
    [_visit]: dart.fnType(core.bool, [dart.nullable(actor_component.ActorComponent), core.List$(dart.nullable(actor_component.ActorComponent))])
  }));
  dart.setLibraryUri(dependency_sorter.DependencySorter, I[1]);
  dart.setFieldSignature(dependency_sorter.DependencySorter, () => ({
    __proto__: dart.getFields(dependency_sorter.DependencySorter.__proto__),
    [_perm]: dart.finalFieldType(collection.HashSet$(dart.nullable(actor_component.ActorComponent))),
    [_temp]: dart.finalFieldType(collection.HashSet$(dart.nullable(actor_component.ActorComponent)))
  }));
  var _copyX = dart.privateName(actor_axis_constraint, "_copyX");
  var _copyY = dart.privateName(actor_axis_constraint, "_copyY");
  var _enableMinX = dart.privateName(actor_axis_constraint, "_enableMinX");
  var _enableMaxX = dart.privateName(actor_axis_constraint, "_enableMaxX");
  var _enableMinY = dart.privateName(actor_axis_constraint, "_enableMinY");
  var _enableMaxY = dart.privateName(actor_axis_constraint, "_enableMaxY");
  var _offset = dart.privateName(actor_axis_constraint, "_offset");
  var _scaleX = dart.privateName(actor_axis_constraint, "_scaleX");
  var _scaleY = dart.privateName(actor_axis_constraint, "_scaleY");
  var _minX = dart.privateName(actor_axis_constraint, "_minX");
  var _maxX = dart.privateName(actor_axis_constraint, "_maxX");
  var _minY = dart.privateName(actor_axis_constraint, "_minY");
  var _maxY = dart.privateName(actor_axis_constraint, "_maxY");
  var _sourceSpace = dart.privateName(actor_axis_constraint, "_sourceSpace");
  var _destSpace = dart.privateName(actor_axis_constraint, "_destSpace");
  var _minMaxSpace = dart.privateName(actor_axis_constraint, "_minMaxSpace");
  var __ActorTargetedConstraint__targetIdx = dart.privateName(actor_targeted_constraint, "_#ActorTargetedConstraint#_targetIdx");
  var _target = dart.privateName(actor_targeted_constraint, "_target");
  var _targetIdx = dart.privateName(actor_targeted_constraint, "_targetIdx");
  var _isEnabled = dart.privateName(actor_constraint, "_isEnabled");
  var _strength = dart.privateName(actor_constraint, "_strength");
  var idx = dart.privateName(actor_component, "ActorComponent.idx");
  var graphOrder = dart.privateName(actor_component, "ActorComponent.graphOrder");
  var dirtMask = dart.privateName(actor_component, "ActorComponent.dirtMask");
  var dependents = dart.privateName(actor_component, "ActorComponent.dependents");
  var _name$ = dart.privateName(actor_component, "_name");
  var _parent = dart.privateName(actor_component, "_parent");
  var __ActorComponent_artboard = dart.privateName(actor_component, "_#ActorComponent#artboard");
  var _parentIdx = dart.privateName(actor_component, "_parentIdx");
  actor_component.ActorComponent = class ActorComponent extends core.Object {
    get idx() {
      return this[idx];
    }
    set idx(value) {
      this[idx] = value;
    }
    get graphOrder() {
      return this[graphOrder];
    }
    set graphOrder(value) {
      this[graphOrder] = value;
    }
    get dirtMask() {
      return this[dirtMask];
    }
    set dirtMask(value) {
      this[dirtMask] = value;
    }
    get dependents() {
      return this[dependents];
    }
    set dependents(value) {
      this[dependents] = value;
    }
    get parent() {
      return this[_parent];
    }
    set parent(value) {
      if (dart.equals(this[_parent], value)) {
        return;
      }
      let from = this[_parent];
      this[_parent] = value;
      this.onParentChanged(from, value);
    }
    onParentChanged(from, to) {
    }
    get artboard() {
      let t2;
      t2 = this[__ActorComponent_artboard];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("artboard")) : t2;
    }
    set artboard(artboard$35param) {
      this[__ActorComponent_artboard] = artboard$35param;
    }
    get name() {
      return this[_name$];
    }
    resolveComponentIndices(components) {
      let node = T.ActorNodeN().as(components[$_get](this[_parentIdx]));
      if (node != null) {
        node.addChild(this);
        this.artboard.addDependency(this, node);
      }
    }
    static read(artboard, reader, component) {
      component.artboard = artboard;
      component[_name$] = reader.readString("name");
      component[_parentIdx] = reader.readId("parent");
      return component;
    }
    copyComponent(component, resetArtboard) {
      this[_name$] = component[_name$];
      this.artboard = resetArtboard;
      this[_parentIdx] = component[_parentIdx];
      this.idx = component.idx;
    }
  };
  (actor_component.ActorComponent.new = function() {
    this[_name$] = "Unnamed";
    this[_parent] = null;
    this[__ActorComponent_artboard] = null;
    this[_parentIdx] = 0;
    this[idx] = 0;
    this[graphOrder] = 0;
    this[dirtMask] = 0;
    this[dependents] = null;
    ;
  }).prototype = actor_component.ActorComponent.prototype;
  (actor_component.ActorComponent.withArtboard = function(artboard) {
    this[_name$] = "Unnamed";
    this[_parent] = null;
    this[__ActorComponent_artboard] = null;
    this[_parentIdx] = 0;
    this[idx] = 0;
    this[graphOrder] = 0;
    this[dirtMask] = 0;
    this[dependents] = null;
    this[__ActorComponent_artboard] = artboard;
    ;
  }).prototype = actor_component.ActorComponent.prototype;
  dart.addTypeTests(actor_component.ActorComponent);
  dart.addTypeCaches(actor_component.ActorComponent);
  dart.setMethodSignature(actor_component.ActorComponent, () => ({
    __proto__: dart.getMethods(actor_component.ActorComponent.__proto__),
    onParentChanged: dart.fnType(dart.void, [dart.nullable(actor_node.ActorNode), dart.nullable(actor_node.ActorNode)]),
    resolveComponentIndices: dart.fnType(dart.void, [core.List$(dart.nullable(actor_component.ActorComponent))]),
    copyComponent: dart.fnType(dart.void, [actor_component.ActorComponent, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_component.ActorComponent, () => ['read']);
  dart.setGetterSignature(actor_component.ActorComponent, () => ({
    __proto__: dart.getGetters(actor_component.ActorComponent.__proto__),
    parent: dart.nullable(actor_node.ActorNode),
    artboard: actor_artboard.ActorArtboard,
    name: core.String
  }));
  dart.setSetterSignature(actor_component.ActorComponent, () => ({
    __proto__: dart.getSetters(actor_component.ActorComponent.__proto__),
    parent: dart.nullable(actor_node.ActorNode),
    artboard: actor_artboard.ActorArtboard
  }));
  dart.setLibraryUri(actor_component.ActorComponent, I[2]);
  dart.setFieldSignature(actor_component.ActorComponent, () => ({
    __proto__: dart.getFields(actor_component.ActorComponent.__proto__),
    [_name$]: dart.fieldType(core.String),
    [_parent]: dart.fieldType(dart.nullable(actor_node.ActorNode)),
    [__ActorComponent_artboard]: dart.fieldType(dart.nullable(actor_artboard.ActorArtboard)),
    [_parentIdx]: dart.fieldType(core.int),
    idx: dart.fieldType(core.int),
    graphOrder: dart.fieldType(core.int),
    dirtMask: dart.fieldType(core.int),
    dependents: dart.fieldType(dart.nullable(core.List$(actor_component.ActorComponent)))
  }));
  actor_constraint.ActorConstraint = class ActorConstraint extends actor_component.ActorComponent {
    get isEnabled() {
      return dart.nullCheck(this[_isEnabled]);
    }
    set isEnabled(value) {
      if (value === this[_isEnabled]) {
        return;
      }
      this[_isEnabled] = value;
      this.markDirty();
    }
    get strength() {
      return dart.nullCheck(this[_strength]);
    }
    set strength(value) {
      if (value === this[_strength]) {
        return;
      }
      this[_strength] = value;
      this.markDirty();
    }
    copyConstraint(node, resetArtboard) {
      this.copyComponent(node, resetArtboard);
      this[_isEnabled] = node[_isEnabled];
      this[_strength] = node[_strength];
    }
    markDirty() {
      dart.nullCheck(this.parent).markTransformDirty();
    }
    onDirty(dirt) {
      this.markDirty();
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this.parent != null) {
        dart.nullCheck(this.parent).addConstraint(this);
      }
    }
    static read(artboard, reader, component) {
      actor_component.ActorComponent.read(artboard, reader, component);
      component[_strength] = reader.readFloat32("strength");
      component[_isEnabled] = reader.readBool("isEnabled");
      return component;
    }
  };
  (actor_constraint.ActorConstraint.new = function() {
    this[_isEnabled] = null;
    this[_strength] = null;
    actor_constraint.ActorConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_constraint.ActorConstraint.prototype;
  dart.addTypeTests(actor_constraint.ActorConstraint);
  dart.addTypeCaches(actor_constraint.ActorConstraint);
  dart.setMethodSignature(actor_constraint.ActorConstraint, () => ({
    __proto__: dart.getMethods(actor_constraint.ActorConstraint.__proto__),
    copyConstraint: dart.fnType(dart.void, [actor_constraint.ActorConstraint, actor_artboard.ActorArtboard]),
    markDirty: dart.fnType(dart.void, []),
    onDirty: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_constraint.ActorConstraint, () => ['read']);
  dart.setGetterSignature(actor_constraint.ActorConstraint, () => ({
    __proto__: dart.getGetters(actor_constraint.ActorConstraint.__proto__),
    isEnabled: core.bool,
    strength: core.double
  }));
  dart.setSetterSignature(actor_constraint.ActorConstraint, () => ({
    __proto__: dart.getSetters(actor_constraint.ActorConstraint.__proto__),
    isEnabled: core.bool,
    strength: core.double
  }));
  dart.setLibraryUri(actor_constraint.ActorConstraint, I[3]);
  dart.setFieldSignature(actor_constraint.ActorConstraint, () => ({
    __proto__: dart.getFields(actor_constraint.ActorConstraint.__proto__),
    [_isEnabled]: dart.fieldType(dart.nullable(core.bool)),
    [_strength]: dart.fieldType(dart.nullable(core.double))
  }));
  actor_targeted_constraint.ActorTargetedConstraint = class ActorTargetedConstraint extends actor_constraint.ActorConstraint {
    get [_targetIdx]() {
      let t2;
      t2 = this[__ActorTargetedConstraint__targetIdx];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_targetIdx")) : t2;
    }
    set [_targetIdx](library$32package$58flare_flutter$47base$47actor_targeted_constraint$46dart$58$58_targetIdx$35param) {
      this[__ActorTargetedConstraint__targetIdx] = library$32package$58flare_flutter$47base$47actor_targeted_constraint$46dart$58$58_targetIdx$35param;
    }
    get target() {
      return this[_target];
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this[_targetIdx] !== 0) {
        this[_target] = components[$_get](this[_targetIdx]);
        if (this[_target] != null) {
          this.artboard.addDependency(dart.nullCheck(this.parent), dart.nullCheck(this[_target]));
        }
      }
    }
    static read(artboard, reader, component) {
      actor_constraint.ActorConstraint.read(artboard, reader, component);
      component[_targetIdx] = reader.readId("target");
      return component;
    }
    copyTargetedConstraint(node, resetArtboard) {
      this.copyConstraint(node, resetArtboard);
      this[_targetIdx] = node[_targetIdx];
    }
  };
  (actor_targeted_constraint.ActorTargetedConstraint.new = function() {
    this[__ActorTargetedConstraint__targetIdx] = null;
    this[_target] = null;
    actor_targeted_constraint.ActorTargetedConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_targeted_constraint.ActorTargetedConstraint.prototype;
  dart.addTypeTests(actor_targeted_constraint.ActorTargetedConstraint);
  dart.addTypeCaches(actor_targeted_constraint.ActorTargetedConstraint);
  dart.setMethodSignature(actor_targeted_constraint.ActorTargetedConstraint, () => ({
    __proto__: dart.getMethods(actor_targeted_constraint.ActorTargetedConstraint.__proto__),
    copyTargetedConstraint: dart.fnType(dart.void, [actor_targeted_constraint.ActorTargetedConstraint, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_targeted_constraint.ActorTargetedConstraint, () => ['read']);
  dart.setGetterSignature(actor_targeted_constraint.ActorTargetedConstraint, () => ({
    __proto__: dart.getGetters(actor_targeted_constraint.ActorTargetedConstraint.__proto__),
    [_targetIdx]: core.int,
    target: dart.nullable(actor_component.ActorComponent)
  }));
  dart.setSetterSignature(actor_targeted_constraint.ActorTargetedConstraint, () => ({
    __proto__: dart.getSetters(actor_targeted_constraint.ActorTargetedConstraint.__proto__),
    [_targetIdx]: core.int
  }));
  dart.setLibraryUri(actor_targeted_constraint.ActorTargetedConstraint, I[4]);
  dart.setFieldSignature(actor_targeted_constraint.ActorTargetedConstraint, () => ({
    __proto__: dart.getFields(actor_targeted_constraint.ActorTargetedConstraint.__proto__),
    [__ActorTargetedConstraint__targetIdx]: dart.fieldType(dart.nullable(core.int)),
    [_target]: dart.fieldType(dart.nullable(actor_component.ActorComponent))
  }));
  actor_axis_constraint.ActorAxisConstraint = class ActorAxisConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    static read(artboard, reader, component) {
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_copyX] = reader.readBool("copyX");
      if (component[_copyX]) {
        component[_scaleX] = reader.readFloat32("scaleX");
      }
      component[_enableMinX] = reader.readBool("enableMinX");
      if (component[_enableMinX]) {
        component[_minX] = reader.readFloat32("minX");
      }
      component[_enableMaxX] = reader.readBool("enableMaxX");
      if (component[_enableMaxX]) {
        component[_maxX] = reader.readFloat32("maxX");
      }
      component[_copyY] = reader.readBool("copyY");
      if (component[_copyY]) {
        component[_scaleY] = reader.readFloat32("scaleY");
      }
      component[_enableMinY] = reader.readBool("enableMinY");
      if (component[_enableMinY]) {
        component[_minY] = reader.readFloat32("minY");
      }
      component[_enableMaxY] = reader.readBool("enableMaxY");
      if (component[_enableMaxY]) {
        component[_maxY] = reader.readFloat32("maxY");
      }
      component[_offset] = reader.readBool("offset");
      component[_sourceSpace] = reader.readUint8("sourceSpaceId");
      component[_destSpace] = reader.readUint8("destSpaceId");
      component[_minMaxSpace] = reader.readUint8("minMaxSpaceId");
      return component;
    }
    copyAxisConstraint(node, resetArtboard) {
      this.copyTargetedConstraint(node, resetArtboard);
      this[_copyX] = node[_copyX];
      this[_copyY] = node[_copyY];
      this[_enableMinX] = node[_enableMinX];
      this[_enableMaxX] = node[_enableMaxX];
      this[_enableMinY] = node[_enableMinY];
      this[_enableMaxY] = node[_enableMaxY];
      this[_offset] = node[_offset];
      this[_scaleX] = node[_scaleX];
      this[_scaleY] = node[_scaleY];
      this[_minX] = node[_minX];
      this[_maxX] = node[_maxX];
      this[_minY] = node[_minY];
      this[_maxY] = node[_maxY];
      this[_sourceSpace] = node[_sourceSpace];
      this[_destSpace] = node[_destSpace];
      this[_minMaxSpace] = node[_minMaxSpace];
    }
    onDirty(dirt) {
      this.markDirty();
    }
    get copyX() {
      return this[_copyX];
    }
    get copyY() {
      return this[_copyY];
    }
    get destSpace() {
      return this[_destSpace];
    }
    get enableMaxX() {
      return this[_enableMaxX];
    }
    get enableMaxY() {
      return this[_enableMaxY];
    }
    get enableMinX() {
      return this[_enableMinX];
    }
    get enableMinY() {
      return this[_enableMinY];
    }
    get maxX() {
      return this[_maxX];
    }
    get maxY() {
      return this[_maxY];
    }
    get minMaxSpace() {
      return this[_minMaxSpace];
    }
    get minX() {
      return this[_minX];
    }
    get minY() {
      return this[_minY];
    }
    get offset() {
      return this[_offset];
    }
    get scaleX() {
      return this[_scaleX];
    }
    get scaleY() {
      return this[_scaleY];
    }
    get sourceSpace() {
      return this[_sourceSpace];
    }
  };
  (actor_axis_constraint.ActorAxisConstraint.new = function() {
    this[_copyX] = false;
    this[_copyY] = false;
    this[_enableMinX] = false;
    this[_enableMaxX] = false;
    this[_enableMinY] = false;
    this[_enableMaxY] = false;
    this[_offset] = false;
    this[_scaleX] = 1.0;
    this[_scaleY] = 1.0;
    this[_minX] = 0.0;
    this[_maxX] = 0.0;
    this[_minY] = 0.0;
    this[_maxY] = 0.0;
    this[_sourceSpace] = 1;
    this[_destSpace] = 1;
    this[_minMaxSpace] = 1;
    actor_axis_constraint.ActorAxisConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_axis_constraint.ActorAxisConstraint.prototype;
  dart.addTypeTests(actor_axis_constraint.ActorAxisConstraint);
  dart.addTypeCaches(actor_axis_constraint.ActorAxisConstraint);
  dart.setMethodSignature(actor_axis_constraint.ActorAxisConstraint, () => ({
    __proto__: dart.getMethods(actor_axis_constraint.ActorAxisConstraint.__proto__),
    copyAxisConstraint: dart.fnType(dart.void, [actor_axis_constraint.ActorAxisConstraint, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_axis_constraint.ActorAxisConstraint, () => ['read']);
  dart.setGetterSignature(actor_axis_constraint.ActorAxisConstraint, () => ({
    __proto__: dart.getGetters(actor_axis_constraint.ActorAxisConstraint.__proto__),
    copyX: core.bool,
    copyY: core.bool,
    destSpace: core.int,
    enableMaxX: core.bool,
    enableMaxY: core.bool,
    enableMinX: core.bool,
    enableMinY: core.bool,
    maxX: core.double,
    maxY: core.double,
    minMaxSpace: core.int,
    minX: core.double,
    minY: core.double,
    offset: core.bool,
    scaleX: core.double,
    scaleY: core.double,
    sourceSpace: core.int
  }));
  dart.setLibraryUri(actor_axis_constraint.ActorAxisConstraint, I[5]);
  dart.setFieldSignature(actor_axis_constraint.ActorAxisConstraint, () => ({
    __proto__: dart.getFields(actor_axis_constraint.ActorAxisConstraint.__proto__),
    [_copyX]: dart.fieldType(core.bool),
    [_copyY]: dart.fieldType(core.bool),
    [_enableMinX]: dart.fieldType(core.bool),
    [_enableMaxX]: dart.fieldType(core.bool),
    [_enableMinY]: dart.fieldType(core.bool),
    [_enableMaxY]: dart.fieldType(core.bool),
    [_offset]: dart.fieldType(core.bool),
    [_scaleX]: dart.fieldType(core.double),
    [_scaleY]: dart.fieldType(core.double),
    [_minX]: dart.fieldType(core.double),
    [_maxX]: dart.fieldType(core.double),
    [_minY]: dart.fieldType(core.double),
    [_maxY]: dart.fieldType(core.double),
    [_sourceSpace]: dart.fieldType(core.int),
    [_destSpace]: dart.fieldType(core.int),
    [_minMaxSpace]: dart.fieldType(core.int)
  }));
  actor_translation_constraint.ActorTranslationConstraint = class ActorTranslationConstraint extends actor_axis_constraint.ActorAxisConstraint {
    static ['_#new#tearOff']() {
      return new actor_translation_constraint.ActorTranslationConstraint.new();
    }
    completeResolve() {
    }
    constrain(node) {
      let t3, t2, t3$, t2$, t3$0, t2$0, t3$1, t2$1;
      let t = T.ActorNodeN().as(this.target);
      let p = dart.nullCheck(this.parent);
      let grandParent = p.parent;
      let transformA = dart.nullCheck(this.parent).worldTransform;
      let translationA = new vec2d.Vec2D.fromValues(transformA._get(4), transformA._get(5));
      let translationB = new vec2d.Vec2D.new();
      if (t == null) {
        vec2d.Vec2D.copy(translationB, translationA);
      } else {
        let transformB = new mat2d.Mat2D.clone(t.worldTransform);
        if (this.sourceSpace === 0) {
          let sourceGrandParent = t.parent;
          if (sourceGrandParent != null) {
            let inverse = new mat2d.Mat2D.new();
            mat2d.Mat2D.invert(inverse, sourceGrandParent.worldTransform);
            mat2d.Mat2D.multiply(transformB, inverse, transformB);
          }
        }
        translationB._set(0, transformB._get(4));
        translationB._set(1, transformB._get(5));
        if (!this.copyX) {
          translationB._set(0, this.destSpace === 0 ? 0.0 : translationA._get(0));
        } else {
          t2 = translationB;
          t3 = 0;
          t2._set(t3, t2._get(t3) * this.scaleX);
          if (this.offset) {
            t2$ = translationB;
            t3$ = 0;
            t2$._set(t3$, t2$._get(t3$) + dart.nullCheck(this.parent).translation._get(0));
          }
        }
        if (!this.copyY) {
          translationB._set(1, this.destSpace === 0 ? 0.0 : translationA._get(1));
        } else {
          t2$0 = translationB;
          t3$0 = 1;
          t2$0._set(t3$0, t2$0._get(t3$0) * this.scaleY);
          if (this.offset) {
            t2$1 = translationB;
            t3$1 = 1;
            t2$1._set(t3$1, t2$1._get(t3$1) + dart.nullCheck(this.parent).translation._get(1));
          }
        }
        if (this.destSpace === 0) {
          if (grandParent != null) {
            vec2d.Vec2D.transformMat2D(translationB, translationB, grandParent.worldTransform);
          }
        }
      }
      let clampLocal = this.minMaxSpace === 0 && grandParent != null;
      if (clampLocal) {
        let temp = new mat2d.Mat2D.new();
        mat2d.Mat2D.invert(temp, grandParent.worldTransform);
        vec2d.Vec2D.transformMat2D(translationB, translationB, temp);
      }
      if (this.enableMaxX && translationB._get(0) > this.maxX) {
        translationB._set(0, this.maxX);
      }
      if (this.enableMinX && translationB._get(0) < this.minX) {
        translationB._set(0, this.minX);
      }
      if (this.enableMaxY && translationB._get(1) > this.maxY) {
        translationB._set(1, this.maxY);
      }
      if (this.enableMinY && translationB._get(1) < this.minY) {
        translationB._set(1, this.minY);
      }
      if (clampLocal) {
        vec2d.Vec2D.transformMat2D(translationB, translationB, grandParent.worldTransform);
      }
      let ti = 1.0 - this.strength;
      transformA._set(4, translationA._get(0) * ti + translationB._get(0) * this.strength);
      transformA._set(5, translationA._get(1) * ti + translationB._get(1) * this.strength);
    }
    makeInstance(resetArtboard) {
      let node = new actor_translation_constraint.ActorTranslationConstraint.new();
      node.copyAxisConstraint(this, resetArtboard);
      return node;
    }
    update(dirt) {
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_translation_constraint.ActorTranslationConstraint.new() : null;
      actor_axis_constraint.ActorAxisConstraint.read(artboard, reader, component);
      return component;
    }
  };
  (actor_translation_constraint.ActorTranslationConstraint.new = function() {
    actor_translation_constraint.ActorTranslationConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_translation_constraint.ActorTranslationConstraint.prototype;
  dart.addTypeTests(actor_translation_constraint.ActorTranslationConstraint);
  dart.addTypeCaches(actor_translation_constraint.ActorTranslationConstraint);
  dart.setMethodSignature(actor_translation_constraint.ActorTranslationConstraint, () => ({
    __proto__: dart.getMethods(actor_translation_constraint.ActorTranslationConstraint.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_translation_constraint.ActorTranslationConstraint, () => ['read']);
  dart.setLibraryUri(actor_translation_constraint.ActorTranslationConstraint, I[6]);
  var _sourceSpace$ = dart.privateName(actor_transform_constraint, "_sourceSpace");
  var _destSpace$ = dart.privateName(actor_transform_constraint, "_destSpace");
  var _componentsA = dart.privateName(actor_transform_constraint, "_componentsA");
  var _componentsB = dart.privateName(actor_transform_constraint, "_componentsB");
  actor_transform_constraint.ActorTransformConstraint = class ActorTransformConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    static ['_#new#tearOff']() {
      return new actor_transform_constraint.ActorTransformConstraint.new();
    }
    completeResolve() {
    }
    constrain(node) {
      let t = T.ActorNodeN().as(this.target);
      if (t == null) {
        return;
      }
      let parent = dart.nullCheck(this.parent);
      let transformA = parent.worldTransform;
      let transformB = new mat2d.Mat2D.clone(t.worldTransform);
      if (this[_sourceSpace$] === 0) {
        let grandParent = dart.nullCheck(this.target).parent;
        if (grandParent != null) {
          let inverse = new mat2d.Mat2D.new();
          mat2d.Mat2D.invert(inverse, grandParent.worldTransform);
          mat2d.Mat2D.multiply(transformB, inverse, transformB);
        }
      }
      if (this[_destSpace$] === 0) {
        let grandParent = parent.parent;
        if (grandParent != null) {
          mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
        }
      }
      mat2d.Mat2D.decompose(transformA, this[_componentsA]);
      mat2d.Mat2D.decompose(transformB, this[_componentsB]);
      let angleA = this[_componentsA]._get(4)[$modulo](6.283185307179586);
      let angleB = this[_componentsB]._get(4)[$modulo](6.283185307179586);
      let diff = angleB - angleA;
      if (diff > 3.141592653589793) {
        diff = diff - 6.283185307179586;
      } else if (diff < -3.141592653589793) {
        diff = diff + 6.283185307179586;
      }
      let ti = 1.0 - this.strength;
      this[_componentsB]._set(4, angleA + diff * this.strength);
      this[_componentsB]._set(0, this[_componentsA]._get(0) * ti + this[_componentsB]._get(0) * this.strength);
      this[_componentsB]._set(1, this[_componentsA]._get(1) * ti + this[_componentsB]._get(1) * this.strength);
      this[_componentsB]._set(2, this[_componentsA]._get(2) * ti + this[_componentsB]._get(2) * this.strength);
      this[_componentsB]._set(3, this[_componentsA]._get(3) * ti + this[_componentsB]._get(3) * this.strength);
      this[_componentsB]._set(5, this[_componentsA]._get(5) * ti + this[_componentsB]._get(5) * this.strength);
      mat2d.Mat2D.compose(parent.worldTransform, this[_componentsB]);
    }
    copyTransformConstraint(node, resetArtboard) {
      this.copyTargetedConstraint(node, resetArtboard);
      this[_sourceSpace$] = node[_sourceSpace$];
      this[_destSpace$] = node[_destSpace$];
    }
    makeInstance(resetArtboard) {
      let node = new actor_transform_constraint.ActorTransformConstraint.new();
      node.copyTransformConstraint(this, resetArtboard);
      return node;
    }
    update(dirt) {
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_transform_constraint.ActorTransformConstraint.new() : null;
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_sourceSpace$] = reader.readUint8("sourceSpaceId");
      component[_destSpace$] = reader.readUint8("destSpaceId");
      return component;
    }
  };
  (actor_transform_constraint.ActorTransformConstraint.new = function() {
    this[_sourceSpace$] = 1;
    this[_destSpace$] = 1;
    this[_componentsA] = new transform_components.TransformComponents.new();
    this[_componentsB] = new transform_components.TransformComponents.new();
    actor_transform_constraint.ActorTransformConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_transform_constraint.ActorTransformConstraint.prototype;
  dart.addTypeTests(actor_transform_constraint.ActorTransformConstraint);
  dart.addTypeCaches(actor_transform_constraint.ActorTransformConstraint);
  dart.setMethodSignature(actor_transform_constraint.ActorTransformConstraint, () => ({
    __proto__: dart.getMethods(actor_transform_constraint.ActorTransformConstraint.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    copyTransformConstraint: dart.fnType(dart.void, [actor_transform_constraint.ActorTransformConstraint, actor_artboard.ActorArtboard]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_transform_constraint.ActorTransformConstraint, () => ['read']);
  dart.setLibraryUri(actor_transform_constraint.ActorTransformConstraint, I[7]);
  dart.setFieldSignature(actor_transform_constraint.ActorTransformConstraint, () => ({
    __proto__: dart.getFields(actor_transform_constraint.ActorTransformConstraint.__proto__),
    [_sourceSpace$]: dart.fieldType(core.int),
    [_destSpace$]: dart.fieldType(core.int),
    [_componentsA]: dart.finalFieldType(transform_components.TransformComponents),
    [_componentsB]: dart.finalFieldType(transform_components.TransformComponents)
  }));
  dart.defineLazy(actor_transform_constraint, {
    /*actor_transform_constraint.pi2*/get pi2() {
      return 6.283185307179586;
    }
  }, false);
  var _componentsA$ = dart.privateName(actor_scale_constraint, "_componentsA");
  var _componentsB$ = dart.privateName(actor_scale_constraint, "_componentsB");
  actor_scale_constraint.ActorScaleConstraint = class ActorScaleConstraint extends actor_axis_constraint.ActorAxisConstraint {
    static ['_#new#tearOff']() {
      return new actor_scale_constraint.ActorScaleConstraint.new();
    }
    completeResolve() {
    }
    constrain(node) {
      let t3, t2, t3$, t2$, t3$0, t2$0, t3$1, t2$1;
      let t = T.ActorNodeN().as(this.target);
      let p = dart.nullCheck(this.parent);
      let grandParent = p.parent;
      let transformA = dart.nullCheck(this.parent).worldTransform;
      let transformB = new mat2d.Mat2D.new();
      mat2d.Mat2D.decompose(transformA, this[_componentsA$]);
      if (t == null) {
        mat2d.Mat2D.copy(transformB, transformA);
        this[_componentsB$]._set(0, this[_componentsA$]._get(0));
        this[_componentsB$]._set(1, this[_componentsA$]._get(1));
        this[_componentsB$]._set(2, this[_componentsA$]._get(2));
        this[_componentsB$]._set(3, this[_componentsA$]._get(3));
        this[_componentsB$]._set(4, this[_componentsA$]._get(4));
        this[_componentsB$]._set(5, this[_componentsA$]._get(5));
      } else {
        mat2d.Mat2D.copy(transformB, t.worldTransform);
        if (this.sourceSpace === 0) {
          let sourceGrandParent = t.parent;
          if (sourceGrandParent != null) {
            let inverse = new mat2d.Mat2D.new();
            mat2d.Mat2D.invert(inverse, sourceGrandParent.worldTransform);
            mat2d.Mat2D.multiply(transformB, inverse, transformB);
          }
        }
        mat2d.Mat2D.decompose(transformB, this[_componentsB$]);
        if (!this.copyX) {
          this[_componentsB$]._set(2, this.destSpace === 0 ? 1.0 : this[_componentsA$]._get(2));
        } else {
          t2 = this[_componentsB$];
          t3 = 2;
          t2._set(t3, t2._get(t3) * this.scaleX);
          if (this.offset) {
            t2$ = this[_componentsB$];
            t3$ = 2;
            t2$._set(t3$, t2$._get(t3$) * dart.nullCheck(this.parent).scaleX);
          }
        }
        if (!this.copyY) {
          this[_componentsB$]._set(3, this.destSpace === 0 ? 0.0 : this[_componentsA$]._get(3));
        } else {
          t2$0 = this[_componentsB$];
          t3$0 = 3;
          t2$0._set(t3$0, t2$0._get(t3$0) * this.scaleY);
          if (this.offset) {
            t2$1 = this[_componentsB$];
            t3$1 = 3;
            t2$1._set(t3$1, t2$1._get(t3$1) * dart.nullCheck(this.parent).scaleY);
          }
        }
        if (this.destSpace === 0) {
          if (grandParent != null) {
            mat2d.Mat2D.compose(transformB, this[_componentsB$]);
            mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
            mat2d.Mat2D.decompose(transformB, this[_componentsB$]);
          }
        }
      }
      let clampLocal = this.minMaxSpace === 0 && grandParent != null;
      if (clampLocal) {
        mat2d.Mat2D.compose(transformB, this[_componentsB$]);
        let inverse = new mat2d.Mat2D.new();
        mat2d.Mat2D.invert(inverse, grandParent.worldTransform);
        mat2d.Mat2D.multiply(transformB, inverse, transformB);
        mat2d.Mat2D.decompose(transformB, this[_componentsB$]);
      }
      if (this.enableMaxX && this[_componentsB$]._get(2) > this.maxX) {
        this[_componentsB$]._set(2, this.maxX);
      }
      if (this.enableMinX && this[_componentsB$]._get(2) < this.minX) {
        this[_componentsB$]._set(2, this.minX);
      }
      if (this.enableMaxY && this[_componentsB$]._get(3) > this.maxY) {
        this[_componentsB$]._set(3, this.maxY);
      }
      if (this.enableMinY && this[_componentsB$]._get(3) < this.minY) {
        this[_componentsB$]._set(3, this.minY);
      }
      if (clampLocal) {
        mat2d.Mat2D.compose(transformB, this[_componentsB$]);
        mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
        mat2d.Mat2D.decompose(transformB, this[_componentsB$]);
      }
      let ti = 1.0 - this.strength;
      this[_componentsB$]._set(4, this[_componentsA$]._get(4));
      this[_componentsB$]._set(0, this[_componentsA$]._get(0));
      this[_componentsB$]._set(1, this[_componentsA$]._get(1));
      this[_componentsB$]._set(2, this[_componentsA$]._get(2) * ti + this[_componentsB$]._get(2) * this.strength);
      this[_componentsB$]._set(3, this[_componentsA$]._get(3) * ti + this[_componentsB$]._get(3) * this.strength);
      this[_componentsB$]._set(5, this[_componentsA$]._get(5));
      mat2d.Mat2D.compose(dart.nullCheck(this.parent).worldTransform, this[_componentsB$]);
    }
    makeInstance(resetArtboard) {
      let node = new actor_scale_constraint.ActorScaleConstraint.new();
      node.copyAxisConstraint(this, resetArtboard);
      return node;
    }
    update(dirt) {
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_scale_constraint.ActorScaleConstraint.new() : null;
      actor_axis_constraint.ActorAxisConstraint.read(artboard, reader, component);
      return component;
    }
  };
  (actor_scale_constraint.ActorScaleConstraint.new = function() {
    this[_componentsA$] = new transform_components.TransformComponents.new();
    this[_componentsB$] = new transform_components.TransformComponents.new();
    actor_scale_constraint.ActorScaleConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_scale_constraint.ActorScaleConstraint.prototype;
  dart.addTypeTests(actor_scale_constraint.ActorScaleConstraint);
  dart.addTypeCaches(actor_scale_constraint.ActorScaleConstraint);
  dart.setMethodSignature(actor_scale_constraint.ActorScaleConstraint, () => ({
    __proto__: dart.getMethods(actor_scale_constraint.ActorScaleConstraint.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_scale_constraint.ActorScaleConstraint, () => ['read']);
  dart.setLibraryUri(actor_scale_constraint.ActorScaleConstraint, I[8]);
  dart.setFieldSignature(actor_scale_constraint.ActorScaleConstraint, () => ({
    __proto__: dart.getFields(actor_scale_constraint.ActorScaleConstraint.__proto__),
    [_componentsA$]: dart.finalFieldType(transform_components.TransformComponents),
    [_componentsB$]: dart.finalFieldType(transform_components.TransformComponents)
  }));
  var _copy = dart.privateName(actor_rotation_constraint, "_copy");
  var _scale = dart.privateName(actor_rotation_constraint, "_scale");
  var _enableMin = dart.privateName(actor_rotation_constraint, "_enableMin");
  var _enableMax = dart.privateName(actor_rotation_constraint, "_enableMax");
  var _max = dart.privateName(actor_rotation_constraint, "_max");
  var _min = dart.privateName(actor_rotation_constraint, "_min");
  var _offset$ = dart.privateName(actor_rotation_constraint, "_offset");
  var _sourceSpace$0 = dart.privateName(actor_rotation_constraint, "_sourceSpace");
  var _destSpace$0 = dart.privateName(actor_rotation_constraint, "_destSpace");
  var _minMaxSpace$ = dart.privateName(actor_rotation_constraint, "_minMaxSpace");
  var _componentsA$0 = dart.privateName(actor_rotation_constraint, "_componentsA");
  var _componentsB$0 = dart.privateName(actor_rotation_constraint, "_componentsB");
  actor_rotation_constraint.ActorRotationConstraint = class ActorRotationConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    completeResolve() {
    }
    constrain(node) {
      let t2, t2$;
      let target = T.ActorNodeN().as(this.target);
      let grandParent = dart.nullCheck(this.parent).parent;
      let transformA = dart.nullCheck(this.parent).worldTransform;
      let transformB = new mat2d.Mat2D.new();
      mat2d.Mat2D.decompose(transformA, this[_componentsA$0]);
      if (target == null) {
        mat2d.Mat2D.copy(transformB, transformA);
        this[_componentsB$0]._set(0, this[_componentsA$0]._get(0));
        this[_componentsB$0]._set(1, this[_componentsA$0]._get(1));
        this[_componentsB$0]._set(2, this[_componentsA$0]._get(2));
        this[_componentsB$0]._set(3, this[_componentsA$0]._get(3));
        this[_componentsB$0]._set(4, this[_componentsA$0]._get(4));
        this[_componentsB$0]._set(5, this[_componentsA$0]._get(5));
      } else {
        mat2d.Mat2D.copy(transformB, target.worldTransform);
        if (this[_sourceSpace$0] === 0) {
          let sourceGrandParent = target.parent;
          if (sourceGrandParent != null) {
            let inverse = new mat2d.Mat2D.new();
            if (!mat2d.Mat2D.invert(inverse, sourceGrandParent.worldTransform)) {
              return;
            }
            mat2d.Mat2D.multiply(transformB, inverse, transformB);
          }
        }
        mat2d.Mat2D.decompose(transformB, this[_componentsB$0]);
        if (!this[_copy]) {
          this[_componentsB$0].rotation = this[_destSpace$0] === 0 ? 1.0 : this[_componentsA$0].rotation;
        } else {
          t2 = this[_componentsB$0];
          t2.rotation = t2.rotation * this[_scale];
          if (this[_offset$]) {
            t2$ = this[_componentsB$0];
            t2$.rotation = t2$.rotation + dart.nullCheck(this.parent).rotation;
          }
        }
        if (this[_destSpace$0] === 0) {
          if (grandParent != null) {
            mat2d.Mat2D.compose(transformB, this[_componentsB$0]);
            mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
            mat2d.Mat2D.decompose(transformB, this[_componentsB$0]);
          }
        }
      }
      let clampLocal = this[_minMaxSpace$] === 0 && grandParent != null;
      if (clampLocal) {
        mat2d.Mat2D.compose(transformB, this[_componentsB$0]);
        let inverse = new mat2d.Mat2D.new();
        if (!mat2d.Mat2D.invert(inverse, grandParent.worldTransform)) {
          return;
        }
        mat2d.Mat2D.multiply(transformB, inverse, transformB);
        mat2d.Mat2D.decompose(transformB, this[_componentsB$0]);
      }
      if (this[_enableMax] && this[_componentsB$0].rotation > this[_max]) {
        this[_componentsB$0].rotation = this[_max];
      }
      if (this[_enableMin] && this[_componentsB$0].rotation < this[_min]) {
        this[_componentsB$0].rotation = this[_min];
      }
      if (clampLocal) {
        mat2d.Mat2D.compose(transformB, this[_componentsB$0]);
        mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
        mat2d.Mat2D.decompose(transformB, this[_componentsB$0]);
      }
      let angleA = this[_componentsA$0].rotation[$modulo](6.283185307179586);
      let angleB = this[_componentsB$0].rotation[$modulo](6.283185307179586);
      let diff = angleB - angleA;
      if (diff > 3.141592653589793) {
        diff = diff - 6.283185307179586;
      } else if (diff < -3.141592653589793) {
        diff = diff + 6.283185307179586;
      }
      this[_componentsB$0].rotation = this[_componentsA$0].rotation + diff * this.strength;
      this[_componentsB$0].x = this[_componentsA$0].x;
      this[_componentsB$0].y = this[_componentsA$0].y;
      this[_componentsB$0].scaleX = this[_componentsA$0].scaleX;
      this[_componentsB$0].scaleY = this[_componentsA$0].scaleY;
      this[_componentsB$0].skew = this[_componentsA$0].skew;
      mat2d.Mat2D.compose(dart.nullCheck(this.parent).worldTransform, this[_componentsB$0]);
    }
    copyRotationConstraint(node, resetArtboard) {
      this.copyTargetedConstraint(node, resetArtboard);
      this[_copy] = node[_copy];
      this[_scale] = node[_scale];
      this[_enableMin] = node[_enableMin];
      this[_enableMax] = node[_enableMax];
      this[_min] = node[_min];
      this[_max] = node[_max];
      this[_offset$] = node[_offset$];
      this[_sourceSpace$0] = node[_sourceSpace$0];
      this[_destSpace$0] = node[_destSpace$0];
      this[_minMaxSpace$] = node[_minMaxSpace$];
    }
    makeInstance(resetArtboard) {
      let instance = new actor_rotation_constraint.ActorRotationConstraint.new();
      instance.copyRotationConstraint(this, resetArtboard);
      return instance;
    }
    update(dirt) {
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_rotation_constraint.ActorRotationConstraint.new() : null;
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_copy] = reader.readBool("copy");
      if (component[_copy]) {
        component[_scale] = reader.readFloat32("scale");
      }
      component[_enableMin] = reader.readBool("enableMin");
      if (component[_enableMin]) {
        component[_min] = reader.readFloat32("min");
      }
      component[_enableMax] = reader.readBool("enableMax");
      if (component[_enableMax]) {
        component[_max] = reader.readFloat32("max");
      }
      component[_offset$] = reader.readBool("offset");
      component[_sourceSpace$0] = reader.readUint8("sourceSpaceId");
      component[_destSpace$0] = reader.readUint8("destSpaceId");
      component[_minMaxSpace$] = reader.readUint8("minMaxSpaceId");
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_rotation_constraint.ActorRotationConstraint.new();
    }
  };
  (actor_rotation_constraint.ActorRotationConstraint.new = function() {
    this[_copy] = false;
    this[_scale] = 1.0;
    this[_enableMin] = false;
    this[_enableMax] = false;
    this[_max] = 6.283185307179586;
    this[_min] = -6.283185307179586;
    this[_offset$] = false;
    this[_sourceSpace$0] = 1;
    this[_destSpace$0] = 1;
    this[_minMaxSpace$] = 1;
    this[_componentsA$0] = new transform_components.TransformComponents.new();
    this[_componentsB$0] = new transform_components.TransformComponents.new();
    actor_rotation_constraint.ActorRotationConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_rotation_constraint.ActorRotationConstraint.prototype;
  dart.addTypeTests(actor_rotation_constraint.ActorRotationConstraint);
  dart.addTypeCaches(actor_rotation_constraint.ActorRotationConstraint);
  dart.setMethodSignature(actor_rotation_constraint.ActorRotationConstraint, () => ({
    __proto__: dart.getMethods(actor_rotation_constraint.ActorRotationConstraint.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    copyRotationConstraint: dart.fnType(dart.void, [actor_rotation_constraint.ActorRotationConstraint, actor_artboard.ActorArtboard]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_rotation_constraint.ActorRotationConstraint, () => ['read']);
  dart.setLibraryUri(actor_rotation_constraint.ActorRotationConstraint, I[9]);
  dart.setFieldSignature(actor_rotation_constraint.ActorRotationConstraint, () => ({
    __proto__: dart.getFields(actor_rotation_constraint.ActorRotationConstraint.__proto__),
    [_copy]: dart.fieldType(core.bool),
    [_scale]: dart.fieldType(core.double),
    [_enableMin]: dart.fieldType(core.bool),
    [_enableMax]: dart.fieldType(core.bool),
    [_max]: dart.fieldType(core.double),
    [_min]: dart.fieldType(core.double),
    [_offset$]: dart.fieldType(core.bool),
    [_sourceSpace$0]: dart.fieldType(core.int),
    [_destSpace$0]: dart.fieldType(core.int),
    [_minMaxSpace$]: dart.fieldType(core.int),
    [_componentsA$0]: dart.finalFieldType(transform_components.TransformComponents),
    [_componentsB$0]: dart.finalFieldType(transform_components.TransformComponents)
  }));
  dart.setStaticFieldSignature(actor_rotation_constraint.ActorRotationConstraint, () => ['pi2']);
  dart.defineLazy(actor_rotation_constraint.ActorRotationConstraint, {
    /*actor_rotation_constraint.ActorRotationConstraint.pi2*/get pi2() {
      return 6.283185307179586;
    }
  }, false);
  var _activeChildIndex = dart.privateName(actor_node_solo, "_activeChildIndex");
  var _children = dart.privateName(actor_node, "_children");
  var _transform = dart.privateName(actor_node, "_transform");
  var _worldTransform = dart.privateName(actor_node, "_worldTransform");
  var _translation = dart.privateName(actor_node, "_translation");
  var _rotation = dart.privateName(actor_node, "_rotation");
  var _scale$ = dart.privateName(actor_node, "_scale");
  var _opacity = dart.privateName(actor_node, "_opacity");
  var _renderOpacity = dart.privateName(actor_node, "_renderOpacity");
  var _layerEffect = dart.privateName(actor_node, "_layerEffect");
  var _overrideWorldTransform = dart.privateName(actor_node, "_overrideWorldTransform");
  var _isCollapsedVisibility = dart.privateName(actor_node, "_isCollapsedVisibility");
  var _renderCollapsed = dart.privateName(actor_node, "_renderCollapsed");
  var _clips = dart.privateName(actor_node, "_clips");
  var _constraints = dart.privateName(actor_node, "_constraints");
  var _peerConstraints = dart.privateName(actor_node, "_peerConstraints");
  actor_node.ActorNode = class ActorNode extends actor_component.ActorComponent {
    static ['_#new#tearOff']() {
      return new actor_node.ActorNode.new();
    }
    static ['_#withArtboard#tearOff'](artboard) {
      return new actor_node.ActorNode.withArtboard(artboard);
    }
    get allClips() {
      let all = T.JSArrayOfListNOfActorClip().of([]);
      let clipSearch = this;
      while (clipSearch != null) {
        if (clipSearch.clips != null) {
          all[$add](clipSearch.clips);
        }
        clipSearch = clipSearch.parent;
      }
      return all;
    }
    get allConstraints() {
      let t2;
      t2 = this[_constraints] == null ? this[_peerConstraints] : this[_peerConstraints] == null ? this[_constraints] : dart.nullCheck(this[_constraints])[$plus](dart.nullCheck(this[_peerConstraints]));
      return t2 == null ? T.JSArrayOfActorConstraint().of([]) : t2;
    }
    get childOpacity() {
      return this[_layerEffect] == null ? this[_renderOpacity] : 1.0;
    }
    get children() {
      return this[_children];
    }
    get clips() {
      return this[_clips];
    }
    get collapsedVisibility() {
      return this[_isCollapsedVisibility];
    }
    set collapsedVisibility(value) {
      if (this[_isCollapsedVisibility] !== value) {
        this[_isCollapsedVisibility] = value;
        this.markTransformDirty();
      }
    }
    get layerEffect() {
      return this[_layerEffect];
    }
    get opacity() {
      return this[_opacity];
    }
    set opacity(value) {
      if (this[_opacity] === value) {
        return;
      }
      this[_opacity] = value;
      this.markTransformDirty();
    }
    get renderCollapsed() {
      return this[_renderCollapsed];
    }
    get renderOpacity() {
      return this[_renderOpacity];
    }
    get rotation() {
      return this[_rotation];
    }
    set rotation(value) {
      if (this[_rotation] === value) {
        return;
      }
      this[_rotation] = value;
      this.markTransformDirty();
    }
    get scaleX() {
      return this[_scale$]._get(0);
    }
    set scaleX(value) {
      if (this[_scale$]._get(0) === value) {
        return;
      }
      this[_scale$]._set(0, value);
      this.markTransformDirty();
    }
    get scaleY() {
      return this[_scale$]._get(1);
    }
    set scaleY(value) {
      if (this[_scale$]._get(1) === value) {
        return;
      }
      this[_scale$]._set(1, value);
      this.markTransformDirty();
    }
    get transform() {
      return this[_transform];
    }
    get translation() {
      return new vec2d.Vec2D.clone(this[_translation]);
    }
    set translation(value) {
      vec2d.Vec2D.copy(this[_translation], value);
      this.markTransformDirty();
    }
    get worldTransform() {
      return this[_worldTransform];
    }
    set worldTransform(value) {
      mat2d.Mat2D.copy(this[_worldTransform], value);
    }
    get worldTransformOverride() {
      return this[_overrideWorldTransform] ? this[_worldTransform] : null;
    }
    set worldTransformOverride(value) {
      if (value == null) {
        this[_overrideWorldTransform] = false;
      } else {
        this[_overrideWorldTransform] = true;
        mat2d.Mat2D.copy(this.worldTransform, value);
      }
      this.markTransformDirty();
    }
    get x() {
      return this[_translation]._get(0);
    }
    set x(value) {
      if (this[_translation]._get(0) === value) {
        return;
      }
      this[_translation]._set(0, value);
      this.markTransformDirty();
    }
    get y() {
      return this[_translation]._get(1);
    }
    set y(value) {
      if (this[_translation]._get(1) === value) {
        return;
      }
      this[_translation]._set(1, value);
      this.markTransformDirty();
    }
    addChild(component) {
      if (component.parent != null) {
        dart.nullCheck(component.parent).removeChild(component);
      }
      component.parent = this;
      this[_children] == null ? this[_children] = T.JSArrayOfActorComponent().of([]) : null;
      dart.nullCheck(this[_children])[$add](component);
    }
    addConstraint(constraint) {
      this[_constraints] == null ? this[_constraints] = T.JSArrayOfActorConstraint().of([]) : null;
      if (dart.nullCheck(this[_constraints])[$contains](constraint)) {
        return false;
      }
      dart.nullCheck(this[_constraints])[$add](constraint);
      return true;
    }
    addPeerConstraint(constraint) {
      this[_peerConstraints] == null ? this[_peerConstraints] = T.JSArrayOfActorConstraint().of([]) : null;
      if (dart.nullCheck(this[_peerConstraints])[$contains](constraint)) {
        return false;
      }
      dart.nullCheck(this[_peerConstraints])[$add](constraint);
      return true;
    }
    all(cb) {
      if (cb(this) === false) {
        return false;
      }
      if (this[_children] != null) {
        for (let child of dart.nullCheck(this[_children])) {
          if (cb(child) === false) {
            return false;
          }
          if (actor_node.ActorNode.is(child)) {
            child.eachChildRecursive(cb);
          }
        }
      }
      return true;
    }
    completeResolve() {
    }
    copyNode(node, resetArtboard) {
      this.copyComponent(node, resetArtboard);
      this[_transform] = new mat2d.Mat2D.clone(node[_transform]);
      this[_worldTransform] = new mat2d.Mat2D.clone(node[_worldTransform]);
      this[_translation] = new vec2d.Vec2D.clone(node[_translation]);
      this[_scale$] = new vec2d.Vec2D.clone(node[_scale$]);
      this[_rotation] = node[_rotation];
      this[_opacity] = node[_opacity];
      this[_renderOpacity] = node[_renderOpacity];
      this[_overrideWorldTransform] = node[_overrideWorldTransform];
      if (node[_clips] != null) {
        this[_clips] = T.JSArrayOfActorClip().of([]);
        for (let i = 0, l = dart.nullCheck(node[_clips])[$length]; i < l; i = i + 1) {
          dart.nullCheck(this[_clips])[$add](new actor_node.ActorClip.copy(dart.nullCheck(node[_clips])[$_get](i)));
        }
      } else {
        this[_clips] = null;
      }
    }
    eachChildRecursive(cb) {
      if (this[_children] != null) {
        for (let child of dart.nullCheck(this[_children])) {
          if (cb(child) === false) {
            return false;
          }
          if (actor_node.ActorNode.is(child) && child.eachChildRecursive(cb) === false) {
            return false;
          }
        }
      }
      return true;
    }
    findLayerEffect() {
      let t2;
      let layerEffects = (t2 = this.children, t2 == null ? null : t2[$whereType](actor_layer_effect_renderer.ActorLayerEffectRenderer));
      let change = layerEffects != null && layerEffects[$isNotEmpty] ? layerEffects[$first] : null;
      if (!dart.equals(this[_layerEffect], change)) {
        this[_layerEffect] = change;
        this.markTransformDirty();
      }
    }
    getWorldTranslation(vec) {
      vec._set(0, this[_worldTransform]._get(4));
      vec._set(1, this[_worldTransform]._get(5));
      return vec;
    }
    invalidateShape() {
    }
    makeInstance(resetArtboard) {
      let instanceNode = new actor_node.ActorNode.new();
      instanceNode.copyNode(this, resetArtboard);
      return instanceNode;
    }
    markTransformDirty() {
      if (!this.artboard.addDirt(this, 1, false)) {
        return;
      }
      this.artboard.addDirt(this, 2, true);
    }
    onDirty(dirt) {
    }
    removeChild(component) {
      let t2;
      t2 = this[_children];
      t2 == null ? null : t2[$remove](component);
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this[_clips] == null) {
        return;
      }
      for (let clip of dart.nullCheck(this[_clips])) {
        let component = components[$_get](clip.clipIdx);
        if (actor_node.ActorNode.is(component)) {
          clip.node = component;
        }
      }
    }
    update(dirt) {
      if ((dirt & 1) >>> 0 === 1) {
        this.updateTransform();
      }
      if ((dirt & 2) >>> 0 === 2) {
        this.updateWorldTransform();
        if (this[_constraints] != null) {
          for (let constraint of dart.nullCheck(this[_constraints])) {
            if (constraint.isEnabled) {
              constraint.constrain(this);
            }
          }
        }
      }
    }
    updateTransform() {
      mat2d.Mat2D.fromRotation(this[_transform], this[_rotation]);
      this[_transform]._set(4, this[_translation]._get(0));
      this[_transform]._set(5, this[_translation]._get(1));
      mat2d.Mat2D.scale(this[_transform], this[_transform], this[_scale$]);
    }
    updateWorldTransform() {
      this[_renderOpacity] = this[_opacity];
      if (this.parent != null) {
        this[_renderCollapsed] = this[_isCollapsedVisibility] || dart.nullCheck(this.parent)[_renderCollapsed];
        this[_renderOpacity] = this[_renderOpacity] * dart.nullCheck(this.parent).childOpacity;
        if (!this[_overrideWorldTransform]) {
          mat2d.Mat2D.multiply(this[_worldTransform], dart.nullCheck(this.parent)[_worldTransform], this[_transform]);
        }
      } else {
        mat2d.Mat2D.copy(this[_worldTransform], this[_transform]);
      }
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_node.ActorNode.new() : null;
      actor_component.ActorComponent.read(artboard, reader, node);
      vec2d.Vec2D.copyFromList(node[_translation], reader.readFloat32Array(2, "translation"));
      node[_rotation] = reader.readFloat32("rotation");
      vec2d.Vec2D.copyFromList(node[_scale$], reader.readFloat32Array(2, "scale"));
      node[_opacity] = reader.readFloat32("opacity");
      node[_isCollapsedVisibility] = reader.readBool("isCollapsed");
      reader.openArray("clips");
      let clipCount = reader.readUint8Length();
      if (clipCount > 0) {
        node[_clips] = T.JSArrayOfActorClip().of([]);
        for (let i = 0; i < clipCount; i = i + 1) {
          reader.openObject("clip");
          let clip = new actor_node.ActorClip.new(reader.readId("node"));
          if (artboard.actor.version >= 23) {
            clip.intersect = reader.readBool("intersect");
          }
          reader.closeObject();
          dart.nullCheck(node[_clips])[$add](clip);
        }
      }
      reader.closeArray();
      return node;
    }
  };
  (actor_node.ActorNode.new = function() {
    this[_children] = null;
    this[_transform] = new mat2d.Mat2D.new();
    this[_worldTransform] = new mat2d.Mat2D.new();
    this[_translation] = new vec2d.Vec2D.new();
    this[_rotation] = 0.0;
    this[_scale$] = new vec2d.Vec2D.fromValues(1.0, 1.0);
    this[_opacity] = 1.0;
    this[_renderOpacity] = 1.0;
    this[_layerEffect] = null;
    this[_overrideWorldTransform] = false;
    this[_isCollapsedVisibility] = false;
    this[_renderCollapsed] = false;
    this[_clips] = null;
    this[_constraints] = null;
    this[_peerConstraints] = null;
    actor_node.ActorNode.__proto__.new.call(this);
    ;
  }).prototype = actor_node.ActorNode.prototype;
  (actor_node.ActorNode.withArtboard = function(artboard) {
    this[_children] = null;
    this[_transform] = new mat2d.Mat2D.new();
    this[_worldTransform] = new mat2d.Mat2D.new();
    this[_translation] = new vec2d.Vec2D.new();
    this[_rotation] = 0.0;
    this[_scale$] = new vec2d.Vec2D.fromValues(1.0, 1.0);
    this[_opacity] = 1.0;
    this[_renderOpacity] = 1.0;
    this[_layerEffect] = null;
    this[_overrideWorldTransform] = false;
    this[_isCollapsedVisibility] = false;
    this[_renderCollapsed] = false;
    this[_clips] = null;
    this[_constraints] = null;
    this[_peerConstraints] = null;
    actor_node.ActorNode.__proto__.withArtboard.call(this, artboard);
    ;
  }).prototype = actor_node.ActorNode.prototype;
  dart.addTypeTests(actor_node.ActorNode);
  dart.addTypeCaches(actor_node.ActorNode);
  dart.setMethodSignature(actor_node.ActorNode, () => ({
    __proto__: dart.getMethods(actor_node.ActorNode.__proto__),
    addChild: dart.fnType(dart.void, [actor_component.ActorComponent]),
    addConstraint: dart.fnType(core.bool, [actor_constraint.ActorConstraint]),
    addPeerConstraint: dart.fnType(core.bool, [actor_constraint.ActorConstraint]),
    all: dart.fnType(core.bool, [dart.fnType(core.bool, [actor_component.ActorComponent])]),
    completeResolve: dart.fnType(dart.void, []),
    copyNode: dart.fnType(dart.void, [actor_node.ActorNode, actor_artboard.ActorArtboard]),
    eachChildRecursive: dart.fnType(core.bool, [dart.fnType(core.bool, [actor_component.ActorComponent])]),
    findLayerEffect: dart.fnType(dart.void, []),
    getWorldTranslation: dart.fnType(vec2d.Vec2D, [vec2d.Vec2D]),
    invalidateShape: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    markTransformDirty: dart.fnType(dart.void, []),
    onDirty: dart.fnType(dart.void, [core.int]),
    removeChild: dart.fnType(dart.void, [actor_component.ActorComponent]),
    update: dart.fnType(dart.void, [core.int]),
    updateTransform: dart.fnType(dart.void, []),
    updateWorldTransform: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_node.ActorNode, () => ['read']);
  dart.setGetterSignature(actor_node.ActorNode, () => ({
    __proto__: dart.getGetters(actor_node.ActorNode.__proto__),
    allClips: core.List$(dart.nullable(core.List$(actor_node.ActorClip))),
    allConstraints: core.List$(actor_constraint.ActorConstraint),
    childOpacity: core.double,
    children: dart.nullable(core.List$(actor_component.ActorComponent)),
    clips: dart.nullable(core.List$(actor_node.ActorClip)),
    collapsedVisibility: core.bool,
    layerEffect: dart.nullable(actor_layer_effect_renderer.ActorLayerEffectRenderer),
    opacity: core.double,
    renderCollapsed: core.bool,
    renderOpacity: core.double,
    rotation: core.double,
    scaleX: core.double,
    scaleY: core.double,
    transform: mat2d.Mat2D,
    translation: vec2d.Vec2D,
    worldTransform: mat2d.Mat2D,
    worldTransformOverride: dart.nullable(mat2d.Mat2D),
    x: core.double,
    y: core.double
  }));
  dart.setSetterSignature(actor_node.ActorNode, () => ({
    __proto__: dart.getSetters(actor_node.ActorNode.__proto__),
    collapsedVisibility: core.bool,
    opacity: core.double,
    rotation: core.double,
    scaleX: core.double,
    scaleY: core.double,
    translation: vec2d.Vec2D,
    worldTransform: mat2d.Mat2D,
    worldTransformOverride: dart.nullable(mat2d.Mat2D),
    x: core.double,
    y: core.double
  }));
  dart.setLibraryUri(actor_node.ActorNode, I[10]);
  dart.setFieldSignature(actor_node.ActorNode, () => ({
    __proto__: dart.getFields(actor_node.ActorNode.__proto__),
    [_children]: dart.fieldType(dart.nullable(core.List$(actor_component.ActorComponent))),
    [_transform]: dart.fieldType(mat2d.Mat2D),
    [_worldTransform]: dart.fieldType(mat2d.Mat2D),
    [_translation]: dart.fieldType(vec2d.Vec2D),
    [_rotation]: dart.fieldType(core.double),
    [_scale$]: dart.fieldType(vec2d.Vec2D),
    [_opacity]: dart.fieldType(core.double),
    [_renderOpacity]: dart.fieldType(core.double),
    [_layerEffect]: dart.fieldType(dart.nullable(actor_layer_effect_renderer.ActorLayerEffectRenderer)),
    [_overrideWorldTransform]: dart.fieldType(core.bool),
    [_isCollapsedVisibility]: dart.fieldType(core.bool),
    [_renderCollapsed]: dart.fieldType(core.bool),
    [_clips]: dart.fieldType(dart.nullable(core.List$(actor_node.ActorClip))),
    [_constraints]: dart.fieldType(dart.nullable(core.List$(actor_constraint.ActorConstraint))),
    [_peerConstraints]: dart.fieldType(dart.nullable(core.List$(actor_constraint.ActorConstraint)))
  }));
  dart.setStaticFieldSignature(actor_node.ActorNode, () => ['transformDirty', 'worldTransformDirty']);
  dart.defineLazy(actor_node.ActorNode, {
    /*actor_node.ActorNode.transformDirty*/get transformDirty() {
      return 1;
    },
    /*actor_node.ActorNode.worldTransformDirty*/get worldTransformDirty() {
      return 2;
    }
  }, false);
  actor_node_solo.ActorNodeSolo = class ActorNodeSolo extends actor_node.ActorNode {
    get activeChildIndex() {
      return this[_activeChildIndex];
    }
    set activeChildIndex(idx) {
      if (idx !== this[_activeChildIndex]) {
        this.setActiveChildIndex(idx);
      }
    }
    completeResolve() {
      super.completeResolve();
      this.setActiveChildIndex(this.activeChildIndex);
    }
    copySolo(node, resetArtboard) {
      this.copyNode(node, resetArtboard);
      this[_activeChildIndex] = node[_activeChildIndex];
    }
    makeInstance(resetArtboard) {
      let soloInstance = new actor_node_solo.ActorNodeSolo.new();
      soloInstance.copySolo(this, resetArtboard);
      return soloInstance;
    }
    setActiveChildIndex(idx) {
      if (this.children != null) {
        this[_activeChildIndex] = math.min(core.int, dart.nullCheck(this.children)[$length], math.max(core.int, 0, idx));
        for (let i = 0; i < dart.nullCheck(this.children)[$length]; i = i + 1) {
          let child = dart.nullCheck(this.children)[$_get](i);
          let cv = i !== this[_activeChildIndex] - 1;
          if (actor_node.ActorNode.is(child)) {
            child.collapsedVisibility = cv;
          }
        }
      }
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_node_solo.ActorNodeSolo.new() : null;
      actor_node.ActorNode.read(artboard, reader, node);
      node[_activeChildIndex] = reader.readUint32("activeChild");
      return node;
    }
    static ['_#new#tearOff']() {
      return new actor_node_solo.ActorNodeSolo.new();
    }
  };
  (actor_node_solo.ActorNodeSolo.new = function() {
    this[_activeChildIndex] = 0;
    actor_node_solo.ActorNodeSolo.__proto__.new.call(this);
    ;
  }).prototype = actor_node_solo.ActorNodeSolo.prototype;
  dart.addTypeTests(actor_node_solo.ActorNodeSolo);
  dart.addTypeCaches(actor_node_solo.ActorNodeSolo);
  dart.setMethodSignature(actor_node_solo.ActorNodeSolo, () => ({
    __proto__: dart.getMethods(actor_node_solo.ActorNodeSolo.__proto__),
    copySolo: dart.fnType(dart.void, [actor_node_solo.ActorNodeSolo, actor_artboard.ActorArtboard]),
    setActiveChildIndex: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_node_solo.ActorNodeSolo, () => ['read']);
  dart.setGetterSignature(actor_node_solo.ActorNodeSolo, () => ({
    __proto__: dart.getGetters(actor_node_solo.ActorNodeSolo.__proto__),
    activeChildIndex: core.int
  }));
  dart.setSetterSignature(actor_node_solo.ActorNodeSolo, () => ({
    __proto__: dart.getSetters(actor_node_solo.ActorNodeSolo.__proto__),
    activeChildIndex: core.int
  }));
  dart.setLibraryUri(actor_node_solo.ActorNodeSolo, I[11]);
  dart.setFieldSignature(actor_node_solo.ActorNodeSolo, () => ({
    __proto__: dart.getFields(actor_node_solo.ActorNodeSolo.__proto__),
    [_activeChildIndex]: dart.fieldType(core.int)
  }));
  var _invertDirection = dart.privateName(actor_ik_constraint, "_invertDirection");
  var _influencedBones = dart.privateName(actor_ik_constraint, "_influencedBones");
  var __ActorIKConstraint__fkChain = dart.privateName(actor_ik_constraint, "_#ActorIKConstraint#_fkChain");
  var __ActorIKConstraint__boneData = dart.privateName(actor_ik_constraint, "_#ActorIKConstraint#_boneData");
  var _fkChain = dart.privateName(actor_ik_constraint, "_fkChain");
  var _boneData = dart.privateName(actor_ik_constraint, "_boneData");
  actor_ik_constraint.ActorIKConstraint = class ActorIKConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    get [_fkChain]() {
      let t2;
      t2 = this[__ActorIKConstraint__fkChain];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_fkChain")) : t2;
    }
    set [_fkChain](library$32package$58flare_flutter$47base$47actor_ik_constraint$46dart$58$58_fkChain$35param) {
      this[__ActorIKConstraint__fkChain] = library$32package$58flare_flutter$47base$47actor_ik_constraint$46dart$58$58_fkChain$35param;
    }
    get [_boneData]() {
      let t2;
      t2 = this[__ActorIKConstraint__boneData];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_boneData")) : t2;
    }
    set [_boneData](library$32package$58flare_flutter$47base$47actor_ik_constraint$46dart$58$58_boneData$35param) {
      this[__ActorIKConstraint__boneData] = library$32package$58flare_flutter$47base$47actor_ik_constraint$46dart$58$58_boneData$35param;
    }
    completeResolve() {
      if (this[_influencedBones] == null || dart.nullCheck(this[_influencedBones])[$isEmpty]) {
        return;
      }
      let start = dart.nullCheck(this[_influencedBones])[$_get](0).bone;
      let end = dart.nullCheck(this[_influencedBones])[$_get](dart.nullCheck(this[_influencedBones])[$length] - 1).bone;
      this[_fkChain] = T.JSArrayOfBoneChain().of([]);
      while (end != null && !dart.equals(end, start.parent)) {
        let bc = new actor_ik_constraint.BoneChain.new(this.idx, actor_bone.ActorBone.as(end), 0.0, false, new transform_components.TransformComponents.new(), new mat2d.Mat2D.new());
        this[_fkChain][$add](bc);
        end = end.parent;
      }
      let allIn = this[_fkChain][$length] < 3;
      if (allIn) {
        for (let bc of this[_fkChain]) {
          bc.included = true;
        }
      }
      this[_fkChain] = this[_fkChain][$reversed][$toList]();
      this[_boneData] = T.JSArrayOfBoneChain().of([]);
      for (let bone of dart.nullCheck(this[_influencedBones])) {
        let item = iterable_extensions['IterableExtension|firstWhereOrNull'](actor_ik_constraint.BoneChain, this[_fkChain], dart.fn(chainItem => chainItem.bone[$_equals](bone.bone), T.BoneChainTobool()));
        if (item == null) {
          core.print("Bone not in chain: " + bone.bone.name);
          continue;
        }
        this[_boneData][$add](item);
      }
      if (!allIn) {
        for (let i = 0; i < this[_boneData][$length] - 1; i = i + 1) {
          let item = this[_boneData][$_get](i);
          item.included = true;
          this[_fkChain][$_get](item.index + 1).included = true;
        }
      }
      for (let bone of dart.nullCheck(this[_influencedBones])) {
        if (bone.bone[$_equals](this.parent)) {
          continue;
        }
        this.artboard.addDependency(this, bone.bone);
      }
      if (this.target != null) {
        this.artboard.addDependency(this, dart.nullCheck(this.target));
      }
      let tip = this[_fkChain][$_get](this[_fkChain][$length] - 1);
      for (let fk of this[_fkChain]) {
        if (fk[$_equals](tip)) {
          continue;
        }
        let bone = fk.bone;
        for (let node of dart.nullCheck(bone.children)) {
          let item = iterable_extensions['IterableExtension|firstWhereOrNull'](actor_ik_constraint.BoneChain, this[_fkChain], dart.fn(chainItem => chainItem.bone[$_equals](node), T.BoneChainTobool()));
          if (item != null) {
            continue;
          }
          this.artboard.addDependency(node, tip.bone);
        }
      }
    }
    constrain(node) {
      let target = T.ActorNodeN().as(this.target);
      if (target == null) {
        return;
      }
      let worldTargetTranslation = new vec2d.Vec2D.new();
      target.getWorldTranslation(worldTargetTranslation);
      if (dart.nullCheck(this[_influencedBones])[$isEmpty]) {
        return;
      }
      for (let item of this[_fkChain]) {
        let bone = item.bone;
        let parentWorld = dart.nullCheck(bone.parent).worldTransform;
        mat2d.Mat2D.invert(item.parentWorldInverse, parentWorld);
        mat2d.Mat2D.multiply(bone.transform, item.parentWorldInverse, bone.worldTransform);
        mat2d.Mat2D.decompose(bone.transform, item.transformComponents);
      }
      let count = this[_boneData][$length];
      if (count === 1) {
        this.solve1(this[_boneData][$_get](0), worldTargetTranslation);
      } else if (count === 2) {
        this.solve2(this[_boneData][$_get](0), this[_boneData][$_get](1), worldTargetTranslation);
      } else {
        let tip = this[_boneData][$_get](count - 1);
        for (let i = 0; i < count - 1; i = i + 1) {
          let item = this[_boneData][$_get](i);
          this.solve2(item, tip, worldTargetTranslation);
          for (let j = item.index + 1; j < this[_fkChain][$length] - 1; j = j + 1) {
            let fk = this[_fkChain][$_get](j);
            mat2d.Mat2D.invert(fk.parentWorldInverse, dart.nullCheck(fk.bone.parent).worldTransform);
          }
        }
      }
      if (this.strength !== 1.0) {
        for (let fk of this[_fkChain]) {
          if (!fk.included) {
            let bone = fk.bone;
            mat2d.Mat2D.multiply(bone.worldTransform, dart.nullCheck(bone.parent).worldTransform, bone.transform);
            continue;
          }
          let fromAngle = fk.transformComponents.rotation[$modulo](6.283185307179586);
          let toAngle = fk.angle[$modulo](6.283185307179586);
          let diff = toAngle - fromAngle;
          if (diff > 3.141592653589793) {
            diff = diff - 6.283185307179586;
          } else if (diff < -3.141592653589793) {
            diff = diff + 6.283185307179586;
          }
          let angle = fromAngle + diff * this.strength;
          this.constrainRotation(fk, angle);
        }
      }
    }
    constrainRotation(fk, rotation) {
      let t3, t2, t3$, t2$, t3$0, t2$0, t3$1, t2$1;
      let bone = fk.bone;
      let parentWorld = dart.nullCheck(bone.parent).worldTransform;
      let transform = bone.transform;
      let c = fk.transformComponents;
      if (rotation === 0.0) {
        mat2d.Mat2D.identity(transform);
      } else {
        mat2d.Mat2D.fromRotation(transform, rotation);
      }
      transform._set(4, c.x);
      transform._set(5, c.y);
      let scaleX = c.scaleX;
      let scaleY = c.scaleY;
      t2 = transform;
      t3 = 0;
      t2._set(t3, t2._get(t3) * scaleX);
      t2$ = transform;
      t3$ = 1;
      t2$._set(t3$, t2$._get(t3$) * scaleX);
      t2$0 = transform;
      t3$0 = 2;
      t2$0._set(t3$0, t2$0._get(t3$0) * scaleY);
      t2$1 = transform;
      t3$1 = 3;
      t2$1._set(t3$1, t2$1._get(t3$1) * scaleY);
      let skew = c.skew;
      if (skew !== 0.0) {
        transform._set(2, transform._get(0) * skew + transform._get(2));
        transform._set(3, transform._get(1) * skew + transform._get(3));
      }
      mat2d.Mat2D.multiply(bone.worldTransform, parentWorld, transform);
    }
    copyIKConstraint(node, artboard) {
      this.copyTargetedConstraint(node, artboard);
      this[_invertDirection] = node[_invertDirection];
      if (node[_influencedBones] != null) {
        this[_influencedBones] = T.JSArrayOfInfluencedBone().of([]);
        for (let i = 0; i < dart.nullCheck(this[_influencedBones])[$length]; i = i + 1) {
          dart.nullCheck(this[_influencedBones])[$add](new actor_ik_constraint.InfluencedBone.new(dart.nullCheck(node[_influencedBones])[$_get](i).boneIdx));
        }
      }
    }
    makeInstance(artboard) {
      let instance = new actor_ik_constraint.ActorIKConstraint.new();
      instance.copyIKConstraint(this, artboard);
      return instance;
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this[_influencedBones] != null) {
        for (let influenced of dart.nullCheck(this[_influencedBones])) {
          influenced.bone = actor_bone.ActorBone.as(dart.nullCheck(components[$_get](influenced.boneIdx)));
          if (!influenced.bone[$_equals](this.parent)) {
            influenced.bone.addPeerConstraint(this);
          }
        }
      }
    }
    solve1(fk1, worldTargetTranslation) {
      let iworld = fk1.parentWorldInverse;
      let pA = new vec2d.Vec2D.new();
      fk1.bone.getWorldTranslation(pA);
      let pBT = new vec2d.Vec2D.clone(worldTargetTranslation);
      let toTarget = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pBT, pA);
      let toTargetLocal = vec2d.Vec2D.transformMat2(new vec2d.Vec2D.new(), toTarget, iworld);
      let r = math.atan2(toTargetLocal._get(1), toTargetLocal._get(0));
      this.constrainRotation(fk1, r);
      fk1.angle = r;
    }
    solve2(fk1, fk2, worldTargetTranslation) {
      let b1 = fk1.bone;
      let b2 = fk2.bone;
      let firstChild = this[_fkChain][$_get](fk1.index + 1);
      let iworld = fk1.parentWorldInverse;
      let pA = b1.getWorldTranslation(new vec2d.Vec2D.new());
      let pC = firstChild.bone.getWorldTranslation(new vec2d.Vec2D.new());
      let pB = b2.getTipWorldTranslation(new vec2d.Vec2D.new());
      let pBT = new vec2d.Vec2D.clone(worldTargetTranslation);
      pA = vec2d.Vec2D.transformMat2D(pA, pA, iworld);
      pC = vec2d.Vec2D.transformMat2D(pC, pC, iworld);
      pB = vec2d.Vec2D.transformMat2D(pB, pB, iworld);
      pBT = vec2d.Vec2D.transformMat2D(pBT, pBT, iworld);
      let av = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pB, pC);
      let a = vec2d.Vec2D.length(av);
      let bv = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pC, pA);
      let b = vec2d.Vec2D.length(bv);
      let cv = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pBT, pA);
      let c = vec2d.Vec2D.length(cv);
      let A = math.acos(math.max(core.num, -1, math.min(core.num, 1, (-a * a + b * b + c * c) / (2 * b * c))));
      let C = math.acos(math.max(core.num, -1, math.min(core.num, 1, (a * a + b * b - c * c) / (2 * a * b))));
      let r1 = null;
      let r2 = null;
      if (!dart.equals(b2.parent, b1)) {
        let secondChild = this[_fkChain][$_get](fk1.index + 2);
        let secondChildWorldInverse = secondChild.parentWorldInverse;
        pC = firstChild.bone.getWorldTranslation(new vec2d.Vec2D.new());
        pB = b2.getTipWorldTranslation(new vec2d.Vec2D.new());
        let avec = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pB, pC);
        let avLocal = vec2d.Vec2D.transformMat2(new vec2d.Vec2D.new(), avec, secondChildWorldInverse);
        let angleCorrection = -math.atan2(avLocal._get(1), avLocal._get(0));
        if (this[_invertDirection]) {
          r1 = math.atan2(cv._get(1), cv._get(0)) - A;
          r2 = -C + 3.141592653589793 + angleCorrection;
        } else {
          r1 = A + math.atan2(cv._get(1), cv._get(0));
          r2 = C - 3.141592653589793 + angleCorrection;
        }
      } else if (this[_invertDirection]) {
        r1 = math.atan2(cv._get(1), cv._get(0)) - A;
        r2 = -C + 3.141592653589793;
      } else {
        r1 = A + math.atan2(cv._get(1), cv._get(0));
        r2 = C - 3.141592653589793;
      }
      this.constrainRotation(fk1, r1);
      this.constrainRotation(firstChild, r2);
      if (!firstChild[$_equals](fk2)) {
        let bone = fk2.bone;
        mat2d.Mat2D.multiply(bone.worldTransform, dart.nullCheck(bone.parent).worldTransform, bone.transform);
      }
      fk1.angle = r1;
      firstChild.angle = r2;
    }
    update(dirt) {
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_ik_constraint.ActorIKConstraint.new() : null;
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_invertDirection] = reader.readBool("isInverted");
      reader.openArray("bones");
      let numInfluencedBones = reader.readUint8Length();
      if (numInfluencedBones > 0) {
        component[_influencedBones] = T.JSArrayOfInfluencedBone().of([]);
        for (let i = 0; i < numInfluencedBones; i = i + 1) {
          dart.nullCheck(component[_influencedBones])[$add](new actor_ik_constraint.InfluencedBone.new(reader.readId("")));
        }
      }
      reader.closeArray();
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_ik_constraint.ActorIKConstraint.new();
    }
  };
  (actor_ik_constraint.ActorIKConstraint.new = function() {
    this[_invertDirection] = false;
    this[_influencedBones] = null;
    this[__ActorIKConstraint__fkChain] = null;
    this[__ActorIKConstraint__boneData] = null;
    actor_ik_constraint.ActorIKConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_ik_constraint.ActorIKConstraint.prototype;
  dart.addTypeTests(actor_ik_constraint.ActorIKConstraint);
  dart.addTypeCaches(actor_ik_constraint.ActorIKConstraint);
  dart.setMethodSignature(actor_ik_constraint.ActorIKConstraint, () => ({
    __proto__: dart.getMethods(actor_ik_constraint.ActorIKConstraint.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    constrainRotation: dart.fnType(dart.void, [actor_ik_constraint.BoneChain, core.double]),
    copyIKConstraint: dart.fnType(dart.void, [actor_ik_constraint.ActorIKConstraint, actor_artboard.ActorArtboard]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    solve1: dart.fnType(dart.void, [actor_ik_constraint.BoneChain, vec2d.Vec2D]),
    solve2: dart.fnType(dart.void, [actor_ik_constraint.BoneChain, actor_ik_constraint.BoneChain, vec2d.Vec2D]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_ik_constraint.ActorIKConstraint, () => ['read']);
  dart.setGetterSignature(actor_ik_constraint.ActorIKConstraint, () => ({
    __proto__: dart.getGetters(actor_ik_constraint.ActorIKConstraint.__proto__),
    [_fkChain]: core.List$(actor_ik_constraint.BoneChain),
    [_boneData]: core.List$(actor_ik_constraint.BoneChain)
  }));
  dart.setSetterSignature(actor_ik_constraint.ActorIKConstraint, () => ({
    __proto__: dart.getSetters(actor_ik_constraint.ActorIKConstraint.__proto__),
    [_fkChain]: core.List$(actor_ik_constraint.BoneChain),
    [_boneData]: core.List$(actor_ik_constraint.BoneChain)
  }));
  dart.setLibraryUri(actor_ik_constraint.ActorIKConstraint, I[12]);
  dart.setFieldSignature(actor_ik_constraint.ActorIKConstraint, () => ({
    __proto__: dart.getFields(actor_ik_constraint.ActorIKConstraint.__proto__),
    [_invertDirection]: dart.fieldType(core.bool),
    [_influencedBones]: dart.fieldType(dart.nullable(core.List$(actor_ik_constraint.InfluencedBone))),
    [__ActorIKConstraint__fkChain]: dart.fieldType(dart.nullable(core.List$(actor_ik_constraint.BoneChain))),
    [__ActorIKConstraint__boneData]: dart.fieldType(dart.nullable(core.List$(actor_ik_constraint.BoneChain)))
  }));
  dart.setStaticFieldSignature(actor_ik_constraint.ActorIKConstraint, () => ['pi2']);
  dart.defineLazy(actor_ik_constraint.ActorIKConstraint, {
    /*actor_ik_constraint.ActorIKConstraint.pi2*/get pi2() {
      return 6.283185307179586;
    }
  }, false);
  var index$ = dart.privateName(actor_ik_constraint, "BoneChain.index");
  var bone$ = dart.privateName(actor_ik_constraint, "BoneChain.bone");
  var angle$ = dart.privateName(actor_ik_constraint, "BoneChain.angle");
  var included$ = dart.privateName(actor_ik_constraint, "BoneChain.included");
  var transformComponents$ = dart.privateName(actor_ik_constraint, "BoneChain.transformComponents");
  var parentWorldInverse$ = dart.privateName(actor_ik_constraint, "BoneChain.parentWorldInverse");
  actor_ik_constraint.BoneChain = class BoneChain extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get bone() {
      return this[bone$];
    }
    set bone(value) {
      super.bone = value;
    }
    get angle() {
      return this[angle$];
    }
    set angle(value) {
      this[angle$] = value;
    }
    get included() {
      return this[included$];
    }
    set included(value) {
      this[included$] = value;
    }
    get transformComponents() {
      return this[transformComponents$];
    }
    set transformComponents(value) {
      super.transformComponents = value;
    }
    get parentWorldInverse() {
      return this[parentWorldInverse$];
    }
    set parentWorldInverse(value) {
      super.parentWorldInverse = value;
    }
    static ['_#new#tearOff'](index, bone, angle, included, transformComponents, parentWorldInverse) {
      return new actor_ik_constraint.BoneChain.new(index, bone, angle, included, transformComponents, parentWorldInverse);
    }
  };
  (actor_ik_constraint.BoneChain.new = function(index, bone, angle, included, transformComponents, parentWorldInverse) {
    this[index$] = index;
    this[bone$] = bone;
    this[angle$] = angle;
    this[included$] = included;
    this[transformComponents$] = transformComponents;
    this[parentWorldInverse$] = parentWorldInverse;
    ;
  }).prototype = actor_ik_constraint.BoneChain.prototype;
  dart.addTypeTests(actor_ik_constraint.BoneChain);
  dart.addTypeCaches(actor_ik_constraint.BoneChain);
  dart.setLibraryUri(actor_ik_constraint.BoneChain, I[12]);
  dart.setFieldSignature(actor_ik_constraint.BoneChain, () => ({
    __proto__: dart.getFields(actor_ik_constraint.BoneChain.__proto__),
    index: dart.finalFieldType(core.int),
    bone: dart.finalFieldType(actor_bone.ActorBone),
    angle: dart.fieldType(core.double),
    included: dart.fieldType(core.bool),
    transformComponents: dart.finalFieldType(transform_components.TransformComponents),
    parentWorldInverse: dart.finalFieldType(mat2d.Mat2D)
  }));
  var boneIdx$ = dart.privateName(actor_ik_constraint, "InfluencedBone.boneIdx");
  var __InfluencedBone_bone = dart.privateName(actor_ik_constraint, "_#InfluencedBone#bone");
  actor_ik_constraint.InfluencedBone = class InfluencedBone extends core.Object {
    get boneIdx() {
      return this[boneIdx$];
    }
    set boneIdx(value) {
      super.boneIdx = value;
    }
    get bone() {
      let t2;
      t2 = this[__InfluencedBone_bone];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("bone")) : t2;
    }
    set bone(bone$35param) {
      this[__InfluencedBone_bone] = bone$35param;
    }
    static ['_#new#tearOff'](boneIdx) {
      return new actor_ik_constraint.InfluencedBone.new(boneIdx);
    }
  };
  (actor_ik_constraint.InfluencedBone.new = function(boneIdx) {
    this[__InfluencedBone_bone] = null;
    this[boneIdx$] = boneIdx;
    ;
  }).prototype = actor_ik_constraint.InfluencedBone.prototype;
  dart.addTypeTests(actor_ik_constraint.InfluencedBone);
  dart.addTypeCaches(actor_ik_constraint.InfluencedBone);
  dart.setGetterSignature(actor_ik_constraint.InfluencedBone, () => ({
    __proto__: dart.getGetters(actor_ik_constraint.InfluencedBone.__proto__),
    bone: actor_bone.ActorBone
  }));
  dart.setSetterSignature(actor_ik_constraint.InfluencedBone, () => ({
    __proto__: dart.getSetters(actor_ik_constraint.InfluencedBone.__proto__),
    bone: actor_bone.ActorBone
  }));
  dart.setLibraryUri(actor_ik_constraint.InfluencedBone, I[12]);
  dart.setFieldSignature(actor_ik_constraint.InfluencedBone, () => ({
    __proto__: dart.getFields(actor_ik_constraint.InfluencedBone.__proto__),
    boneIdx: dart.finalFieldType(core.int),
    [__InfluencedBone_bone]: dart.fieldType(dart.nullable(actor_bone.ActorBone))
  }));
  actor_event.ActorEvent = class ActorEvent extends actor_component.ActorComponent {
    completeResolve() {
    }
    makeInstance(resetArtboard) {
      let instanceEvent = new actor_event.ActorEvent.new();
      instanceEvent.copyComponent(this, resetArtboard);
      return instanceEvent;
    }
    onDirty(dirt) {
    }
    update(dirt) {
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_event.ActorEvent.new() : null;
      actor_component.ActorComponent.read(artboard, reader, component);
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_event.ActorEvent.new();
    }
  };
  (actor_event.ActorEvent.new = function() {
    actor_event.ActorEvent.__proto__.new.call(this);
    ;
  }).prototype = actor_event.ActorEvent.prototype;
  dart.addTypeTests(actor_event.ActorEvent);
  dart.addTypeCaches(actor_event.ActorEvent);
  dart.setMethodSignature(actor_event.ActorEvent, () => ({
    __proto__: dart.getMethods(actor_event.ActorEvent.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_event.ActorEvent, () => ['read']);
  dart.setLibraryUri(actor_event.ActorEvent, I[13]);
  var _distance = dart.privateName(actor_distance_constraint, "_distance");
  var _mode = dart.privateName(actor_distance_constraint, "_mode");
  actor_distance_constraint.ActorDistanceConstraint = class ActorDistanceConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    static ['_#new#tearOff']() {
      return new actor_distance_constraint.ActorDistanceConstraint.new();
    }
    get distance() {
      return this[_distance];
    }
    set distance(d) {
      if (this[_distance] !== d) {
        this[_distance] = d;
        this.markDirty();
      }
    }
    get mode() {
      return this[_mode];
    }
    set mode(m) {
      if (this[_mode] !== m) {
        this[_mode] = m;
        this.markDirty();
      }
    }
    completeResolve() {
    }
    constrain(node) {
      let t = T.ActorNodeN().as(this.target);
      if (t == null) {
        return;
      }
      let p = dart.nullCheck(this.parent);
      let targetTranslation = t.getWorldTranslation(new vec2d.Vec2D.new());
      let ourTranslation = p.getWorldTranslation(new vec2d.Vec2D.new());
      let toTarget = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), ourTranslation, targetTranslation);
      let currentDistance = vec2d.Vec2D.length(toTarget);
      switch (this[_mode]) {
        case 0:
          {
            if (currentDistance < this[_distance]) {
              return;
            }
            break;
          }
        case 1:
          {
            if (currentDistance > this[_distance]) {
              return;
            }
            break;
          }
      }
      if (currentDistance < 0.001) {
        return;
      }
      vec2d.Vec2D.scale(toTarget, toTarget, 1.0 / currentDistance);
      vec2d.Vec2D.scale(toTarget, toTarget, this[_distance]);
      let world = p.worldTransform;
      let position = vec2d.Vec2D.lerp(new vec2d.Vec2D.new(), ourTranslation, vec2d.Vec2D.add(new vec2d.Vec2D.new(), targetTranslation, toTarget), this.strength);
      world._set(4, position._get(0));
      world._set(5, position._get(1));
    }
    copyDistanceConstraint(node, resetArtboard) {
      this.copyTargetedConstraint(node, resetArtboard);
      this[_distance] = node[_distance];
      this[_mode] = node[_mode];
    }
    makeInstance(resetArtboard) {
      let node = new actor_distance_constraint.ActorDistanceConstraint.new();
      node.copyDistanceConstraint(this, resetArtboard);
      return node;
    }
    update(dirt) {
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_distance_constraint.ActorDistanceConstraint.new() : null;
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_distance] = reader.readFloat32("distance");
      component[_mode] = reader.readUint8("modeId");
      return component;
    }
  };
  (actor_distance_constraint.ActorDistanceConstraint.new = function() {
    this[_distance] = 100.0;
    this[_mode] = 0;
    actor_distance_constraint.ActorDistanceConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_distance_constraint.ActorDistanceConstraint.prototype;
  dart.addTypeTests(actor_distance_constraint.ActorDistanceConstraint);
  dart.addTypeCaches(actor_distance_constraint.ActorDistanceConstraint);
  dart.setMethodSignature(actor_distance_constraint.ActorDistanceConstraint, () => ({
    __proto__: dart.getMethods(actor_distance_constraint.ActorDistanceConstraint.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    copyDistanceConstraint: dart.fnType(dart.void, [actor_distance_constraint.ActorDistanceConstraint, actor_artboard.ActorArtboard]),
    makeInstance: dart.fnType(actor_distance_constraint.ActorDistanceConstraint, [actor_artboard.ActorArtboard]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_distance_constraint.ActorDistanceConstraint, () => ['read']);
  dart.setGetterSignature(actor_distance_constraint.ActorDistanceConstraint, () => ({
    __proto__: dart.getGetters(actor_distance_constraint.ActorDistanceConstraint.__proto__),
    distance: core.double,
    mode: core.int
  }));
  dart.setSetterSignature(actor_distance_constraint.ActorDistanceConstraint, () => ({
    __proto__: dart.getSetters(actor_distance_constraint.ActorDistanceConstraint.__proto__),
    distance: core.double,
    mode: core.int
  }));
  dart.setLibraryUri(actor_distance_constraint.ActorDistanceConstraint, I[14]);
  dart.setFieldSignature(actor_distance_constraint.ActorDistanceConstraint, () => ({
    __proto__: dart.getFields(actor_distance_constraint.ActorDistanceConstraint.__proto__),
    [_distance]: dart.fieldType(core.double),
    [_mode]: dart.fieldType(core.int)
  }));
  actor_distance_constraint.DistanceMode = class DistanceMode extends core.Object {
    static ['_#new#tearOff']() {
      return new actor_distance_constraint.DistanceMode.new();
    }
  };
  (actor_distance_constraint.DistanceMode.new = function() {
    ;
  }).prototype = actor_distance_constraint.DistanceMode.prototype;
  dart.addTypeTests(actor_distance_constraint.DistanceMode);
  dart.addTypeCaches(actor_distance_constraint.DistanceMode);
  dart.setLibraryUri(actor_distance_constraint.DistanceMode, I[14]);
  dart.setStaticFieldSignature(actor_distance_constraint.DistanceMode, () => ['closer', 'further', 'exact']);
  dart.defineLazy(actor_distance_constraint.DistanceMode, {
    /*actor_distance_constraint.DistanceMode.closer*/get closer() {
      return 0;
    },
    /*actor_distance_constraint.DistanceMode.further*/get further() {
      return 1;
    },
    /*actor_distance_constraint.DistanceMode.exact*/get exact() {
      return 2;
    }
  }, false);
  var _firstBone = dart.privateName(actor_root_bone, "_firstBone");
  actor_root_bone.ActorRootBone = class ActorRootBone extends actor_node.ActorNode {
    get firstBone() {
      return this[_firstBone];
    }
    completeResolve() {
      super.completeResolve();
      if (this.children == null) {
        return;
      }
      for (let component of dart.nullCheck(this.children)) {
        if (actor_bone.ActorBone.is(component)) {
          this[_firstBone] = component;
          return;
        }
      }
    }
    makeInstance(resetArtboard) {
      let instanceNode = new actor_root_bone.ActorRootBone.new();
      instanceNode.copyNode(this, resetArtboard);
      return instanceNode;
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_root_bone.ActorRootBone.new() : null;
      actor_node.ActorNode.read(artboard, reader, node);
      return node;
    }
    static ['_#new#tearOff']() {
      return new actor_root_bone.ActorRootBone.new();
    }
  };
  (actor_root_bone.ActorRootBone.new = function() {
    this[_firstBone] = null;
    actor_root_bone.ActorRootBone.__proto__.new.call(this);
    ;
  }).prototype = actor_root_bone.ActorRootBone.prototype;
  dart.addTypeTests(actor_root_bone.ActorRootBone);
  dart.addTypeCaches(actor_root_bone.ActorRootBone);
  dart.setStaticMethodSignature(actor_root_bone.ActorRootBone, () => ['read']);
  dart.setGetterSignature(actor_root_bone.ActorRootBone, () => ({
    __proto__: dart.getGetters(actor_root_bone.ActorRootBone.__proto__),
    firstBone: dart.nullable(actor_bone.ActorBone)
  }));
  dart.setLibraryUri(actor_root_bone.ActorRootBone, I[15]);
  dart.setFieldSignature(actor_root_bone.ActorRootBone, () => ({
    __proto__: dart.getFields(actor_root_bone.ActorRootBone.__proto__),
    [_firstBone]: dart.fieldType(dart.nullable(actor_bone.ActorBone))
  }));
  var _length = dart.privateName(actor_bone_base, "_length");
  actor_bone_base.ActorBoneBase = class ActorBoneBase extends actor_node.ActorNode {
    get length() {
      return dart.nullCheck(this[_length]);
    }
    set length(value) {
      if (this[_length] === value) {
        return;
      }
      this[_length] = value;
      if (this.children == null) {
        return;
      }
      for (let component of dart.nullCheck(this.children)) {
        if (actor_bone_base.ActorBoneBase.is(component)) {
          component.x = value;
        }
      }
    }
    getTipWorldTranslation(vec) {
      let transform = new mat2d.Mat2D.new();
      transform._set(4, this.length);
      mat2d.Mat2D.multiply(transform, this.worldTransform, transform);
      vec._set(0, transform._get(4));
      vec._set(1, transform._get(5));
      return vec;
    }
    static read(artboard, reader, node) {
      actor_node.ActorNode.read(artboard, reader, node);
      node[_length] = reader.readFloat32("length");
      return node;
    }
    copyBoneBase(node, resetArtboard) {
      super.copyNode(node, resetArtboard);
      this[_length] = node[_length];
    }
    static ['_#new#tearOff']() {
      return new actor_bone_base.ActorBoneBase.new();
    }
  };
  (actor_bone_base.ActorBoneBase.new = function() {
    this[_length] = null;
    actor_bone_base.ActorBoneBase.__proto__.new.call(this);
    ;
  }).prototype = actor_bone_base.ActorBoneBase.prototype;
  dart.addTypeTests(actor_bone_base.ActorBoneBase);
  dart.addTypeCaches(actor_bone_base.ActorBoneBase);
  dart.setMethodSignature(actor_bone_base.ActorBoneBase, () => ({
    __proto__: dart.getMethods(actor_bone_base.ActorBoneBase.__proto__),
    getTipWorldTranslation: dart.fnType(vec2d.Vec2D, [vec2d.Vec2D]),
    copyBoneBase: dart.fnType(dart.void, [actor_bone_base.ActorBoneBase, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_bone_base.ActorBoneBase, () => ['read']);
  dart.setGetterSignature(actor_bone_base.ActorBoneBase, () => ({
    __proto__: dart.getGetters(actor_bone_base.ActorBoneBase.__proto__),
    length: core.double
  }));
  dart.setSetterSignature(actor_bone_base.ActorBoneBase, () => ({
    __proto__: dart.getSetters(actor_bone_base.ActorBoneBase.__proto__),
    length: core.double
  }));
  dart.setLibraryUri(actor_bone_base.ActorBoneBase, I[16]);
  dart.setFieldSignature(actor_bone_base.ActorBoneBase, () => ({
    __proto__: dart.getFields(actor_bone_base.ActorBoneBase.__proto__),
    [_length]: dart.fieldType(dart.nullable(core.double))
  }));
  actor_jelly_bone.ActorJellyBone = class ActorJellyBone extends actor_bone_base.ActorBoneBase {
    makeInstance(artboard) {
      let instanceNode = new actor_jelly_bone.ActorJellyBone.new();
      instanceNode.copyBoneBase(this, artboard);
      return instanceNode;
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_jelly_bone.ActorJellyBone.new() : null;
      actor_component.ActorComponent.read(artboard, reader, node);
      node.opacity = reader.readFloat32("opacity");
      node.collapsedVisibility = reader.readBool("isCollapsed");
      return node;
    }
    static ['_#new#tearOff']() {
      return new actor_jelly_bone.ActorJellyBone.new();
    }
  };
  (actor_jelly_bone.ActorJellyBone.new = function() {
    actor_jelly_bone.ActorJellyBone.__proto__.new.call(this);
    ;
  }).prototype = actor_jelly_bone.ActorJellyBone.prototype;
  dart.addTypeTests(actor_jelly_bone.ActorJellyBone);
  dart.addTypeCaches(actor_jelly_bone.ActorJellyBone);
  dart.setStaticMethodSignature(actor_jelly_bone.ActorJellyBone, () => ['read']);
  dart.setLibraryUri(actor_jelly_bone.ActorJellyBone, I[17]);
  var __JellyComponent__easeIn = dart.privateName(jelly_component, "_#JellyComponent#_easeIn");
  var __JellyComponent__easeOut = dart.privateName(jelly_component, "_#JellyComponent#_easeOut");
  var __JellyComponent__scaleIn = dart.privateName(jelly_component, "_#JellyComponent#_scaleIn");
  var __JellyComponent__scaleOut = dart.privateName(jelly_component, "_#JellyComponent#_scaleOut");
  var __JellyComponent__inTargetIdx = dart.privateName(jelly_component, "_#JellyComponent#_inTargetIdx");
  var __JellyComponent__outTargetIdx = dart.privateName(jelly_component, "_#JellyComponent#_outTargetIdx");
  var _inTarget = dart.privateName(jelly_component, "_inTarget");
  var _outTarget = dart.privateName(jelly_component, "_outTarget");
  var _bones = dart.privateName(jelly_component, "_bones");
  var _inPoint = dart.privateName(jelly_component, "_inPoint");
  var _inDirection = dart.privateName(jelly_component, "_inDirection");
  var _outPoint = dart.privateName(jelly_component, "_outPoint");
  var _outDirection = dart.privateName(jelly_component, "_outDirection");
  var _cachedTip = dart.privateName(jelly_component, "_cachedTip");
  var _cachedOut = dart.privateName(jelly_component, "_cachedOut");
  var _cachedIn = dart.privateName(jelly_component, "_cachedIn");
  var _cachedScaleIn = dart.privateName(jelly_component, "_cachedScaleIn");
  var _cachedScaleOut = dart.privateName(jelly_component, "_cachedScaleOut");
  var _jellyPoints = dart.privateName(jelly_component, "_jellyPoints");
  var _easeIn = dart.privateName(jelly_component, "_easeIn");
  var _easeOut = dart.privateName(jelly_component, "_easeOut");
  var _scaleIn = dart.privateName(jelly_component, "_scaleIn");
  var _scaleOut = dart.privateName(jelly_component, "_scaleOut");
  var _inTargetIdx = dart.privateName(jelly_component, "_inTargetIdx");
  var _outTargetIdx = dart.privateName(jelly_component, "_outTargetIdx");
  jelly_component.JellyComponent = class JellyComponent extends actor_component.ActorComponent {
    get [_easeIn]() {
      let t2;
      t2 = this[__JellyComponent__easeIn];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_easeIn")) : t2;
    }
    set [_easeIn](library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_easeIn$35param) {
      this[__JellyComponent__easeIn] = library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_easeIn$35param;
    }
    get [_easeOut]() {
      let t2;
      t2 = this[__JellyComponent__easeOut];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_easeOut")) : t2;
    }
    set [_easeOut](library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_easeOut$35param) {
      this[__JellyComponent__easeOut] = library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_easeOut$35param;
    }
    get [_scaleIn]() {
      let t2;
      t2 = this[__JellyComponent__scaleIn];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_scaleIn")) : t2;
    }
    set [_scaleIn](library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_scaleIn$35param) {
      this[__JellyComponent__scaleIn] = library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_scaleIn$35param;
    }
    get [_scaleOut]() {
      let t2;
      t2 = this[__JellyComponent__scaleOut];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_scaleOut")) : t2;
    }
    set [_scaleOut](library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_scaleOut$35param) {
      this[__JellyComponent__scaleOut] = library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_scaleOut$35param;
    }
    get [_inTargetIdx]() {
      let t2;
      t2 = this[__JellyComponent__inTargetIdx];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_inTargetIdx")) : t2;
    }
    set [_inTargetIdx](library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_inTargetIdx$35param) {
      this[__JellyComponent__inTargetIdx] = library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_inTargetIdx$35param;
    }
    get [_outTargetIdx]() {
      let t2;
      t2 = this[__JellyComponent__outTargetIdx];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_outTargetIdx")) : t2;
    }
    set [_outTargetIdx](library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_outTargetIdx$35param) {
      this[__JellyComponent__outTargetIdx] = library$32package$58flare_flutter$47base$47jelly_component$46dart$58$58_outTargetIdx$35param;
    }
    get inTarget() {
      return this[_inTarget];
    }
    get outTarget() {
      return this[_inTarget];
    }
    completeResolve() {
      let bone = actor_bone.ActorBone.as(this.parent);
      bone.jelly = this;
      let children = bone.children;
      if (children == null) {
        return;
      }
      this[_bones] = T.JSArrayOfActorJellyBone().of([]);
      for (let child of children) {
        if (actor_jelly_bone.ActorJellyBone.is(child)) {
          dart.nullCheck(this[_bones])[$add](child);
          this.artboard.addDependency(child, this);
        }
      }
    }
    copyJelly(component, artboard) {
      super.copyComponent(component, artboard);
      this[_easeIn] = component[_easeIn];
      this[_easeOut] = component[_easeOut];
      this[_scaleIn] = component[_scaleIn];
      this[_scaleOut] = component[_scaleOut];
      this[_inTargetIdx] = component[_inTargetIdx];
      this[_outTargetIdx] = component[_outTargetIdx];
    }
    makeInstance(artboard) {
      let instance = new jelly_component.JellyComponent.new();
      instance.copyJelly(this, artboard);
      return instance;
    }
    normalizeCurve(curve, numSegments) {
      let points = T.JSArrayOfVec2D().of([]);
      let curvePointCount = curve[$length];
      let distances = T.ListOfdouble().filled(curvePointCount, 0.0);
      for (let i = 0; i < curvePointCount - 1; i = i + 1) {
        let p1 = curve[$_get](i);
        let p2 = curve[$_get](i + 1);
        distances[$_set](i + 1, distances[$_get](i) + vec2d.Vec2D.distance(p1, p2));
      }
      let totalDistance = distances[$last];
      let segmentLength = totalDistance / numSegments;
      let pointIndex = 1;
      for (let i = 1; i <= numSegments; i = i + 1) {
        let distance = segmentLength * i;
        while (pointIndex < curvePointCount - 1 && distances[$_get](pointIndex) < distance) {
          pointIndex = pointIndex + 1;
        }
        let d = distances[$_get](pointIndex);
        let lastCurveSegmentLength = d - distances[$_get](pointIndex - 1);
        let remainderOfDesired = d - distance;
        let ratio = remainderOfDesired / lastCurveSegmentLength;
        let iratio = 1.0 - ratio;
        let p1 = curve[$_get](pointIndex - 1);
        let p2 = curve[$_get](pointIndex);
        points[$add](new vec2d.Vec2D.fromValues(p1._get(0) * ratio + p2._get(0) * iratio, p1._get(1) * ratio + p2._get(1) * iratio));
      }
      return points;
    }
    onDirty(dirt) {
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this[_inTargetIdx] !== 0) {
        this[_inTarget] = T.ActorNodeN().as(components[$_get](this[_inTargetIdx]));
      }
      if (this[_outTargetIdx] !== 0) {
        this[_outTarget] = T.ActorNodeN().as(components[$_get](this[_outTargetIdx]));
      }
      let dependencyConstraints = T.JSArrayOfActorConstraint().of([]);
      let bone = T.ActorBoneN().as(this.parent);
      if (bone != null) {
        this.artboard.addDependency(this, bone);
        dependencyConstraints = dependencyConstraints[$plus](bone.allConstraints);
        let firstBone = bone.firstBone;
        if (firstBone != null) {
          this.artboard.addDependency(this, firstBone);
          dependencyConstraints = dependencyConstraints[$plus](firstBone.allConstraints);
          if (this[_outTarget] == null && firstBone.jelly != null && dart.nullCheck(firstBone.jelly).inTarget != null) {
            this.artboard.addDependency(this, dart.nullCheck(dart.nullCheck(firstBone.jelly).inTarget));
            dependencyConstraints = dependencyConstraints[$plus](dart.nullCheck(dart.nullCheck(firstBone.jelly).inTarget).allConstraints);
          }
        }
        if (actor_bone.ActorBone.is(bone.parent)) {
          let parentBone = actor_bone.ActorBone.as(bone.parent);
          let parentBoneJelly = parentBone.jelly;
          if (parentBoneJelly != null && parentBoneJelly.outTarget != null) {
            this.artboard.addDependency(this, dart.nullCheck(parentBoneJelly.outTarget));
            dependencyConstraints = dependencyConstraints[$plus](dart.nullCheck(parentBoneJelly.outTarget).allConstraints);
          }
        }
      }
      if (this[_inTarget] != null) {
        this.artboard.addDependency(this, dart.nullCheck(this[_inTarget]));
        dependencyConstraints = dependencyConstraints[$plus](dart.nullCheck(this[_inTarget]).allConstraints);
      }
      if (this[_outTarget] != null) {
        this.artboard.addDependency(this, dart.nullCheck(this[_outTarget]));
        dependencyConstraints = dependencyConstraints[$plus](dart.nullCheck(this[_outTarget]).allConstraints);
      }
      let constraints = T.LinkedHashSetOfActorConstraint().from(dependencyConstraints);
      for (let constraint of constraints) {
        this.artboard.addDependency(this, constraint);
      }
    }
    update(dirt) {
      let bone = actor_bone.ActorBone.as(this.parent);
      let parentBone = bone.parent;
      let parentBoneJelly = null;
      if (actor_bone.ActorBone.is(parentBone)) {
        parentBoneJelly = parentBone.jelly;
      }
      let inverseWorld = new mat2d.Mat2D.new();
      if (!mat2d.Mat2D.invert(inverseWorld, bone.worldTransform)) {
        return;
      }
      if (this[_inTarget] != null) {
        let translation = dart.nullCheck(this[_inTarget]).getWorldTranslation(new vec2d.Vec2D.new());
        vec2d.Vec2D.transformMat2D(this[_inPoint], translation, inverseWorld);
        vec2d.Vec2D.normalize(this[_inDirection], this[_inPoint]);
      } else if (parentBone != null) {
        let firstBone = null;
        if (actor_bone.ActorBone.is(parentBone)) {
          firstBone = parentBone.firstBone;
        } else if (actor_root_bone.ActorRootBone.is(parentBone)) {
          firstBone = parentBone.firstBone;
        }
        if (dart.equals(firstBone, bone) && parentBoneJelly != null && parentBoneJelly[_outTarget] != null) {
          let translation = dart.nullCheck(parentBoneJelly[_outTarget]).getWorldTranslation(new vec2d.Vec2D.new());
          let localParentOut = vec2d.Vec2D.transformMat2D(new vec2d.Vec2D.new(), translation, inverseWorld);
          vec2d.Vec2D.normalize(localParentOut, localParentOut);
          vec2d.Vec2D.negate(this[_inDirection], localParentOut);
        } else {
          let d1 = new vec2d.Vec2D.fromValues(1.0, 0.0);
          let d2 = new vec2d.Vec2D.fromValues(1.0, 0.0);
          vec2d.Vec2D.transformMat2(d1, d1, parentBone.worldTransform);
          vec2d.Vec2D.transformMat2(d2, d2, bone.worldTransform);
          let sum = vec2d.Vec2D.add(new vec2d.Vec2D.new(), d1, d2);
          vec2d.Vec2D.transformMat2(this[_inDirection], sum, inverseWorld);
          vec2d.Vec2D.normalize(this[_inDirection], this[_inDirection]);
        }
        this[_inPoint]._set(0, this[_inDirection]._get(0) * this[_easeIn] * bone.length * jelly_component.JellyComponent.curveConstant);
        this[_inPoint]._set(1, this[_inDirection]._get(1) * this[_easeIn] * bone.length * jelly_component.JellyComponent.curveConstant);
      } else {
        this[_inDirection]._set(0, 1.0);
        this[_inDirection]._set(1, 0.0);
        this[_inPoint]._set(0, this[_inDirection]._get(0) * this[_easeIn] * bone.length * jelly_component.JellyComponent.curveConstant);
      }
      if (this[_outTarget] != null) {
        let translation = dart.nullCheck(this[_outTarget]).getWorldTranslation(new vec2d.Vec2D.new());
        vec2d.Vec2D.transformMat2D(this[_outPoint], translation, inverseWorld);
        let tip = new vec2d.Vec2D.fromValues(bone.length, 0.0);
        vec2d.Vec2D.subtract(this[_outDirection], this[_outPoint], tip);
        vec2d.Vec2D.normalize(this[_outDirection], this[_outDirection]);
      } else if (bone.firstBone != null) {
        let firstBone = dart.nullCheck(bone.firstBone);
        let firstBoneJelly = firstBone.jelly;
        if (firstBoneJelly != null && firstBoneJelly[_inTarget] != null) {
          let translation = dart.nullCheck(firstBoneJelly[_inTarget]).getWorldTranslation(new vec2d.Vec2D.new());
          let worldChildInDir = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), firstBone.getWorldTranslation(new vec2d.Vec2D.new()), translation);
          vec2d.Vec2D.transformMat2(this[_outDirection], worldChildInDir, inverseWorld);
        } else {
          let d1 = new vec2d.Vec2D.fromValues(1.0, 0.0);
          let d2 = new vec2d.Vec2D.fromValues(1.0, 0.0);
          vec2d.Vec2D.transformMat2(d1, d1, firstBone.worldTransform);
          vec2d.Vec2D.transformMat2(d2, d2, bone.worldTransform);
          let sum = vec2d.Vec2D.add(new vec2d.Vec2D.new(), d1, d2);
          let negativeSum = vec2d.Vec2D.negate(new vec2d.Vec2D.new(), sum);
          vec2d.Vec2D.transformMat2(this[_outDirection], negativeSum, inverseWorld);
          vec2d.Vec2D.normalize(this[_outDirection], this[_outDirection]);
        }
        vec2d.Vec2D.normalize(this[_outDirection], this[_outDirection]);
        let scaledOut = vec2d.Vec2D.scale(new vec2d.Vec2D.new(), this[_outDirection], this[_easeOut] * bone.length * jelly_component.JellyComponent.curveConstant);
        this[_outPoint]._set(0, bone.length);
        this[_outPoint]._set(1, 0.0);
        vec2d.Vec2D.add(this[_outPoint], this[_outPoint], scaledOut);
      } else {
        this[_outDirection]._set(0, -1.0);
        this[_outDirection]._set(1, 0.0);
        let scaledOut = vec2d.Vec2D.scale(new vec2d.Vec2D.new(), this[_outDirection], this[_easeOut] * bone.length * jelly_component.JellyComponent.curveConstant);
        this[_outPoint]._set(0, bone.length);
        this[_outPoint]._set(1, 0.0);
        vec2d.Vec2D.add(this[_outPoint], this[_outPoint], scaledOut);
      }
      this.updateJellies();
    }
    updateJellies() {
      if (this[_bones] == null) {
        return;
      }
      let bone = actor_bone.ActorBone.as(this.parent);
      let tipPosition = new vec2d.Vec2D.fromValues(bone.length, 0.0);
      if (jelly_component.JellyComponent.fuzzyEquals(this[_cachedTip], tipPosition) && jelly_component.JellyComponent.fuzzyEquals(this[_cachedOut], this[_outPoint]) && jelly_component.JellyComponent.fuzzyEquals(this[_cachedIn], this[_inPoint]) && this[_cachedScaleIn] === this[_scaleIn] && this[_cachedScaleOut] === this[_scaleOut]) {
        return;
      }
      vec2d.Vec2D.copy(this[_cachedTip], tipPosition);
      vec2d.Vec2D.copy(this[_cachedOut], this[_outPoint]);
      vec2d.Vec2D.copy(this[_cachedIn], this[_inPoint]);
      this[_cachedScaleIn] = this[_scaleIn];
      this[_cachedScaleOut] = this[_scaleOut];
      let q0 = new vec2d.Vec2D.new();
      let q1 = this[_inPoint];
      let q2 = this[_outPoint];
      let q3 = tipPosition;
      jelly_component.JellyComponent.forwardDiffBezier(q0._get(0), q1._get(0), q2._get(0), q3._get(0), this[_jellyPoints], 16, 0);
      jelly_component.JellyComponent.forwardDiffBezier(q0._get(1), q1._get(1), q2._get(1), q3._get(1), this[_jellyPoints], 16, 1);
      let normalizedPoints = this.normalizeCurve(this[_jellyPoints], dart.nullCheck(this[_bones])[$length]);
      let lastPoint = this[_jellyPoints][$_get](0);
      let scale = this[_scaleIn];
      let scaleInc = (this[_scaleOut] - this[_scaleIn]) / (dart.nullCheck(this[_bones])[$length] - 1);
      for (let i = 0; i < normalizedPoints[$length]; i = i + 1) {
        let jelly = dart.nullCheck(this[_bones])[$_get](i);
        let p = normalizedPoints[$_get](i);
        jelly.translation = lastPoint;
        jelly.length = vec2d.Vec2D.distance(p, lastPoint);
        jelly.scaleY = scale;
        scale = scale + scaleInc;
        let diff = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), p, lastPoint);
        jelly.rotation = math.atan2(diff._get(1), diff._get(0));
        lastPoint = p;
      }
    }
    static forwardDiffBezier(c0, c1, c2, c3, points, count, offset) {
      let f = count[$toDouble]();
      let p0 = c0;
      let p1 = 3.0 * (c1 - c0) / f;
      f = f * count;
      let p2 = 3.0 * (c0 - 2.0 * c1 + c2) / f;
      f = f * count;
      let p3 = (c3 - c0 + 3.0 * (c1 - c2)) / f;
      c0 = p0;
      c1 = p1 + p2 + p3;
      c2 = 2 * p2 + 6 * p3;
      c3 = 6 * p3;
      for (let a = 0; a <= count; a = a + 1) {
        points[$_get](a)._set(offset, c0);
        c0 = c0 + c1;
        c1 = c1 + c2;
        c2 = c2 + c3;
      }
    }
    static fuzzyEquals(a, b) {
      let a0 = a._get(0);
      let a1 = a._get(1);
      let b0 = b._get(0);
      let b1 = b._get(1);
      return (a0 - b0)[$abs]() <= 0.001 * math.max(core.num, 1.0, math.max(core.num, a0[$abs](), b0[$abs]())) && (a1 - b1)[$abs]() <= 0.001 * math.max(core.num, 1.0, math.max(core.num, a1[$abs](), b1[$abs]()));
    }
    static read(artboard, reader, node) {
      node == null ? node = new jelly_component.JellyComponent.new() : null;
      actor_component.ActorComponent.read(artboard, reader, node);
      node[_easeIn] = reader.readFloat32("easeIn");
      node[_easeOut] = reader.readFloat32("easeOut");
      node[_scaleIn] = reader.readFloat32("scaleIn");
      node[_scaleOut] = reader.readFloat32("scaleOut");
      node[_inTargetIdx] = reader.readId("inTargetId");
      node[_outTargetIdx] = reader.readId("outTargetId");
      return node;
    }
    static ['_#new#tearOff']() {
      return new jelly_component.JellyComponent.new();
    }
  };
  (jelly_component.JellyComponent.new = function() {
    this[__JellyComponent__easeIn] = null;
    this[__JellyComponent__easeOut] = null;
    this[__JellyComponent__scaleIn] = null;
    this[__JellyComponent__scaleOut] = null;
    this[__JellyComponent__inTargetIdx] = null;
    this[__JellyComponent__outTargetIdx] = null;
    this[_inTarget] = null;
    this[_outTarget] = null;
    this[_bones] = null;
    this[_inPoint] = new vec2d.Vec2D.new();
    this[_inDirection] = new vec2d.Vec2D.new();
    this[_outPoint] = new vec2d.Vec2D.new();
    this[_outDirection] = new vec2d.Vec2D.new();
    this[_cachedTip] = new vec2d.Vec2D.new();
    this[_cachedOut] = new vec2d.Vec2D.new();
    this[_cachedIn] = new vec2d.Vec2D.new();
    this[_cachedScaleIn] = null;
    this[_cachedScaleOut] = null;
    this[_jellyPoints] = T.ListOfVec2D().filled(16 + 1, new vec2d.Vec2D.new());
    jelly_component.JellyComponent.__proto__.new.call(this);
    ;
  }).prototype = jelly_component.JellyComponent.prototype;
  dart.addTypeTests(jelly_component.JellyComponent);
  dart.addTypeCaches(jelly_component.JellyComponent);
  dart.setMethodSignature(jelly_component.JellyComponent, () => ({
    __proto__: dart.getMethods(jelly_component.JellyComponent.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    copyJelly: dart.fnType(dart.void, [jelly_component.JellyComponent, actor_artboard.ActorArtboard]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    normalizeCurve: dart.fnType(core.List$(vec2d.Vec2D), [core.List$(vec2d.Vec2D), core.int]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int]),
    updateJellies: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(jelly_component.JellyComponent, () => ['forwardDiffBezier', 'fuzzyEquals', 'read']);
  dart.setGetterSignature(jelly_component.JellyComponent, () => ({
    __proto__: dart.getGetters(jelly_component.JellyComponent.__proto__),
    [_easeIn]: core.double,
    [_easeOut]: core.double,
    [_scaleIn]: core.double,
    [_scaleOut]: core.double,
    [_inTargetIdx]: core.int,
    [_outTargetIdx]: core.int,
    inTarget: dart.nullable(actor_node.ActorNode),
    outTarget: dart.nullable(actor_node.ActorNode)
  }));
  dart.setSetterSignature(jelly_component.JellyComponent, () => ({
    __proto__: dart.getSetters(jelly_component.JellyComponent.__proto__),
    [_easeIn]: core.double,
    [_easeOut]: core.double,
    [_scaleIn]: core.double,
    [_scaleOut]: core.double,
    [_inTargetIdx]: core.int,
    [_outTargetIdx]: core.int
  }));
  dart.setLibraryUri(jelly_component.JellyComponent, I[18]);
  dart.setFieldSignature(jelly_component.JellyComponent, () => ({
    __proto__: dart.getFields(jelly_component.JellyComponent.__proto__),
    [__JellyComponent__easeIn]: dart.fieldType(dart.nullable(core.double)),
    [__JellyComponent__easeOut]: dart.fieldType(dart.nullable(core.double)),
    [__JellyComponent__scaleIn]: dart.fieldType(dart.nullable(core.double)),
    [__JellyComponent__scaleOut]: dart.fieldType(dart.nullable(core.double)),
    [__JellyComponent__inTargetIdx]: dart.fieldType(dart.nullable(core.int)),
    [__JellyComponent__outTargetIdx]: dart.fieldType(dart.nullable(core.int)),
    [_inTarget]: dart.fieldType(dart.nullable(actor_node.ActorNode)),
    [_outTarget]: dart.fieldType(dart.nullable(actor_node.ActorNode)),
    [_bones]: dart.fieldType(dart.nullable(core.List$(actor_jelly_bone.ActorJellyBone))),
    [_inPoint]: dart.finalFieldType(vec2d.Vec2D),
    [_inDirection]: dart.finalFieldType(vec2d.Vec2D),
    [_outPoint]: dart.finalFieldType(vec2d.Vec2D),
    [_outDirection]: dart.finalFieldType(vec2d.Vec2D),
    [_cachedTip]: dart.finalFieldType(vec2d.Vec2D),
    [_cachedOut]: dart.finalFieldType(vec2d.Vec2D),
    [_cachedIn]: dart.finalFieldType(vec2d.Vec2D),
    [_cachedScaleIn]: dart.fieldType(dart.nullable(core.double)),
    [_cachedScaleOut]: dart.fieldType(dart.nullable(core.double)),
    [_jellyPoints]: dart.finalFieldType(core.List$(vec2d.Vec2D))
  }));
  dart.setStaticFieldSignature(jelly_component.JellyComponent, () => ['jellyMax', 'optimalDistance', 'curveConstant', 'epsilon']);
  dart.defineLazy(jelly_component.JellyComponent, {
    /*jelly_component.JellyComponent.jellyMax*/get jellyMax() {
      return 16;
    },
    /*jelly_component.JellyComponent.optimalDistance*/get optimalDistance() {
      return 4.0 * (math.sqrt(2.0) - 1.0) / 3.0;
    },
    set optimalDistance(_) {},
    /*jelly_component.JellyComponent.curveConstant*/get curveConstant() {
      return jelly_component.JellyComponent.optimalDistance * math.sqrt(2.0) * 0.5;
    },
    set curveConstant(_) {},
    /*jelly_component.JellyComponent.epsilon*/get epsilon() {
      return 0.001;
    }
  }, false);
  var jelly = dart.privateName(actor_bone, "ActorBone.jelly");
  var _firstBone$ = dart.privateName(actor_bone, "_firstBone");
  actor_bone.ActorBone = class ActorBone extends actor_bone_base.ActorBoneBase {
    get jelly() {
      return this[jelly];
    }
    set jelly(value) {
      this[jelly] = value;
    }
    get firstBone() {
      return this[_firstBone$];
    }
    makeInstance(resetArtboard) {
      let instanceNode = new actor_bone.ActorBone.new();
      instanceNode.copyBoneBase(this, resetArtboard);
      return instanceNode;
    }
    completeResolve() {
      super.completeResolve();
      if (this.children == null) {
        return;
      }
      for (let component of dart.nullCheck(this.children)) {
        if (actor_bone.ActorBone.is(component)) {
          this[_firstBone$] = component;
          return;
        }
      }
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_bone.ActorBone.new() : null;
      actor_bone_base.ActorBoneBase.read(artboard, reader, node);
      return node;
    }
    static ['_#new#tearOff']() {
      return new actor_bone.ActorBone.new();
    }
  };
  (actor_bone.ActorBone.new = function() {
    this[_firstBone$] = null;
    this[jelly] = null;
    actor_bone.ActorBone.__proto__.new.call(this);
    ;
  }).prototype = actor_bone.ActorBone.prototype;
  dart.addTypeTests(actor_bone.ActorBone);
  dart.addTypeCaches(actor_bone.ActorBone);
  dart.setStaticMethodSignature(actor_bone.ActorBone, () => ['read']);
  dart.setGetterSignature(actor_bone.ActorBone, () => ({
    __proto__: dart.getGetters(actor_bone.ActorBone.__proto__),
    firstBone: dart.nullable(actor_bone.ActorBone)
  }));
  dart.setLibraryUri(actor_bone.ActorBone, I[19]);
  dart.setFieldSignature(actor_bone.ActorBone, () => ({
    __proto__: dart.getFields(actor_bone.ActorBone.__proto__),
    [_firstBone$]: dart.fieldType(dart.nullable(actor_bone.ActorBone)),
    jelly: dart.fieldType(dart.nullable(jelly_component.JellyComponent))
  }));
  var _width = dart.privateName(actor_path, "_width");
  var _height = dart.privateName(actor_path, "_height");
  var _shape = dart.privateName(actor_path, "ActorBasePath._shape");
  var _isRootPath = dart.privateName(actor_path, "ActorBasePath._isRootPath");
  var _shape$ = dart.privateName(actor_path, "_shape");
  var _isRootPath$ = dart.privateName(actor_path, "_isRootPath");
  actor_path.ActorBasePath = class ActorBasePath extends core.Object {
    get [_shape$]() {
      return this[_shape];
    }
    set [_shape$](value) {
      this[_shape] = value;
    }
    get [_isRootPath$]() {
      return this[_isRootPath];
    }
    set [_isRootPath$](value) {
      this[_isRootPath] = value;
    }
    get deformedPoints() {
      return this.points;
    }
    get isPathInWorldSpace() {
      return false;
    }
    get isRootPath() {
      return this[_isRootPath$];
    }
    get shape() {
      return this[_shape$];
    }
    completeResolve() {
      this.updateShape();
    }
    getPathAABB() {
      let minX = 1.7976931348623157e+308;
      let minY = 1.7976931348623157e+308;
      let maxX = -1.7976931348623157e+308;
      let maxY = -1.7976931348623157e+308;
      let obb = this.getPathOBB();
      let pts = T.JSArrayOfVec2D().of([new vec2d.Vec2D.fromValues(obb._get(0), obb._get(1)), new vec2d.Vec2D.fromValues(obb._get(2), obb._get(1)), new vec2d.Vec2D.fromValues(obb._get(2), obb._get(3)), new vec2d.Vec2D.fromValues(obb._get(0), obb._get(3))]);
      let localTransform = null;
      if (this.isPathInWorldSpace) {
        localTransform = new mat2d.Mat2D.new();
        mat2d.Mat2D.invert(localTransform, dart.nullCheck(this.parent).worldTransform);
      } else if (!this[_isRootPath$]) {
        localTransform = new mat2d.Mat2D.new();
        if (mat2d.Mat2D.invert(localTransform, dart.nullCheck(this.shape).worldTransform)) {
          mat2d.Mat2D.multiply(localTransform, localTransform, this.worldTransform);
        }
      } else {
        localTransform = this.transform;
      }
      for (let p of pts) {
        let wp = vec2d.Vec2D.transformMat2D(p, p, localTransform);
        if (wp._get(0) < minX) {
          minX = wp._get(0);
        }
        if (wp._get(1) < minY) {
          minY = wp._get(1);
        }
        if (wp._get(0) > maxX) {
          maxX = wp._get(0);
        }
        if (wp._get(1) > maxY) {
          maxY = wp._get(1);
        }
      }
      return new aabb$.AABB.fromValues(minX, minY, maxX, maxY);
    }
    getPathOBB() {
      let minX = 1.7976931348623157e+308;
      let minY = 1.7976931348623157e+308;
      let maxX = -1.7976931348623157e+308;
      let maxY = -1.7976931348623157e+308;
      let renderPoints = this.points;
      for (let point of renderPoints) {
        let t = point.translation;
        let x = t._get(0);
        let y = t._get(1);
        if (x < minX) {
          minX = x;
        }
        if (y < minY) {
          minY = y;
        }
        if (x > maxX) {
          maxX = x;
        }
        if (y > maxY) {
          maxY = y;
        }
        if (path_point.CubicPathPoint.is(point)) {
          let t = point.inPoint;
          x = t._get(0);
          y = t._get(1);
          if (x < minX) {
            minX = x;
          }
          if (y < minY) {
            minY = y;
          }
          if (x > maxX) {
            maxX = x;
          }
          if (y > maxY) {
            maxY = y;
          }
          t = point.outPoint;
          x = t._get(0);
          y = t._get(1);
          if (x < minX) {
            minX = x;
          }
          if (y < minY) {
            minY = y;
          }
          if (x > maxX) {
            maxX = x;
          }
          if (y > maxY) {
            maxY = y;
          }
        }
      }
      return new aabb$.AABB.fromValues(minX, minY, maxX, maxY);
    }
    invalidateDrawable() {
      this.invalidatePath();
      if (this.shape != null) {
        dart.nullCheck(this.shape).invalidateShape();
      }
    }
    updateShape() {
      if (this[_shape$] != null) {
        dart.nullCheck(this[_shape$]).removePath(this);
      }
      let possibleShape = this.parent;
      while (possibleShape != null && !actor_shape.ActorShape.is(possibleShape)) {
        possibleShape = possibleShape.parent;
      }
      if (possibleShape != null) {
        this[_shape$] = actor_shape.ActorShape.as(possibleShape);
        dart.nullCheck(this[_shape$]).addPath(this);
      } else {
        this[_shape$] = null;
      }
      this[_isRootPath$] = dart.equals(this[_shape$], this.parent);
    }
  };
  (actor_path.ActorBasePath.new = function() {
    this[_shape] = null;
    this[_isRootPath] = false;
    ;
  }).prototype = actor_path.ActorBasePath.prototype;
  dart.addTypeTests(actor_path.ActorBasePath);
  dart.addTypeCaches(actor_path.ActorBasePath);
  dart.setMethodSignature(actor_path.ActorBasePath, () => ({
    __proto__: dart.getMethods(actor_path.ActorBasePath.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    getPathAABB: dart.fnType(aabb$.AABB, []),
    getPathOBB: dart.fnType(aabb$.AABB, []),
    invalidateDrawable: dart.fnType(dart.void, []),
    updateShape: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_path.ActorBasePath, () => ({
    __proto__: dart.getGetters(actor_path.ActorBasePath.__proto__),
    deformedPoints: core.List$(path_point.PathPoint),
    isPathInWorldSpace: core.bool,
    isRootPath: core.bool,
    shape: dart.nullable(actor_shape.ActorShape)
  }));
  dart.setLibraryUri(actor_path.ActorBasePath, I[20]);
  dart.setFieldSignature(actor_path.ActorBasePath, () => ({
    __proto__: dart.getFields(actor_path.ActorBasePath.__proto__),
    [_shape$]: dart.fieldType(dart.nullable(actor_shape.ActorShape)),
    [_isRootPath$]: dart.fieldType(core.bool)
  }));
  const ActorNode_ActorBasePath$36 = class ActorNode_ActorBasePath extends actor_node.ActorNode {};
  (ActorNode_ActorBasePath$36.new = function() {
    actor_path.ActorBasePath.new.call(this);
    ActorNode_ActorBasePath$36.__proto__.new.call(this);
  }).prototype = ActorNode_ActorBasePath$36.prototype;
  (ActorNode_ActorBasePath$36.withArtboard = function(artboard) {
    actor_path.ActorBasePath.new.call(this);
    ActorNode_ActorBasePath$36.__proto__.withArtboard.call(this, artboard);
  }).prototype = ActorNode_ActorBasePath$36.prototype;
  dart.applyMixin(ActorNode_ActorBasePath$36, actor_path.ActorBasePath);
  actor_path.ActorProceduralPath = class ActorProceduralPath extends ActorNode_ActorBasePath$36 {
    get height() {
      return dart.nullCheck(this[_height]);
    }
    set height(w) {
      if (w !== this[_height]) {
        this[_height] = w;
        this.invalidateDrawable();
      }
    }
    get pathTransform() {
      return this.worldTransform;
    }
    get width() {
      return dart.nullCheck(this[_width]);
    }
    set width(w) {
      if (w !== this[_width]) {
        this[_width] = w;
        this.invalidateDrawable();
      }
    }
    copyPath(node, resetArtboard) {
      this.copyNode(node, resetArtboard);
      this[_width] = node.width;
      this[_height] = node.height;
    }
    onDirty(dirt) {
      super.onDirty(dirt);
      if (this.shape != null) {
        dart.nullCheck(this.shape).invalidateShape();
      }
    }
  };
  (actor_path.ActorProceduralPath.new = function() {
    this[_width] = null;
    this[_height] = null;
    actor_path.ActorProceduralPath.__proto__.new.call(this);
    ;
  }).prototype = actor_path.ActorProceduralPath.prototype;
  dart.addTypeTests(actor_path.ActorProceduralPath);
  dart.addTypeCaches(actor_path.ActorProceduralPath);
  dart.setMethodSignature(actor_path.ActorProceduralPath, () => ({
    __proto__: dart.getMethods(actor_path.ActorProceduralPath.__proto__),
    copyPath: dart.fnType(dart.void, [actor_path.ActorProceduralPath, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_path.ActorProceduralPath, () => ({
    __proto__: dart.getGetters(actor_path.ActorProceduralPath.__proto__),
    height: core.double,
    pathTransform: mat2d.Mat2D,
    width: core.double
  }));
  dart.setSetterSignature(actor_path.ActorProceduralPath, () => ({
    __proto__: dart.getSetters(actor_path.ActorProceduralPath.__proto__),
    height: core.double,
    width: core.double
  }));
  dart.setLibraryUri(actor_path.ActorProceduralPath, I[20]);
  dart.setFieldSignature(actor_path.ActorProceduralPath, () => ({
    __proto__: dart.getFields(actor_path.ActorProceduralPath.__proto__),
    [_width]: dart.fieldType(dart.nullable(core.double)),
    [_height]: dart.fieldType(dart.nullable(core.double))
  }));
  actor_triangle.ActorTriangle = class ActorTriangle extends actor_path.ActorProceduralPath {
    get doesDraw() {
      return !this.renderCollapsed;
    }
    get isClosed() {
      return true;
    }
    get points() {
      let _trianglePoints = T.JSArrayOfPathPoint().of([]);
      _trianglePoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(0.0, -this.radiusY)));
      _trianglePoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(this.radiusX, this.radiusY)));
      _trianglePoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(-this.radiusX, this.radiusY)));
      return _trianglePoints;
    }
    get radiusX() {
      return this.width / 2;
    }
    get radiusY() {
      return this.height / 2;
    }
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_triangle.ActorTriangle.new();
      instance.copyPath(this, resetArtboard);
      return instance;
    }
    static read(artboard, reader, component) {
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_triangle.ActorTriangle.new();
    }
  };
  (actor_triangle.ActorTriangle.new = function() {
    actor_triangle.ActorTriangle.__proto__.new.call(this);
    ;
  }).prototype = actor_triangle.ActorTriangle.prototype;
  dart.addTypeTests(actor_triangle.ActorTriangle);
  dart.addTypeCaches(actor_triangle.ActorTriangle);
  dart.setMethodSignature(actor_triangle.ActorTriangle, () => ({
    __proto__: dart.getMethods(actor_triangle.ActorTriangle.__proto__),
    invalidatePath: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_triangle.ActorTriangle, () => ['read']);
  dart.setGetterSignature(actor_triangle.ActorTriangle, () => ({
    __proto__: dart.getGetters(actor_triangle.ActorTriangle.__proto__),
    doesDraw: core.bool,
    isClosed: core.bool,
    points: core.List$(path_point.PathPoint),
    radiusX: core.double,
    radiusY: core.double
  }));
  dart.setLibraryUri(actor_triangle.ActorTriangle, I[21]);
  var _numPoints = dart.privateName(actor_star, "_numPoints");
  var _innerRadius = dart.privateName(actor_star, "_innerRadius");
  actor_star.ActorStar = class ActorStar extends actor_path.ActorProceduralPath {
    get doesDraw() {
      return !this.renderCollapsed;
    }
    get innerRadius() {
      return this[_innerRadius];
    }
    set innerRadius(val) {
      if (val !== this[_innerRadius]) {
        this[_innerRadius] = val;
        this.invalidateDrawable();
      }
    }
    get isClosed() {
      return true;
    }
    get numPoints() {
      return this[_numPoints];
    }
    get points() {
      let _starPoints = T.JSArrayOfPathPoint().of([new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(0.0, -this.radiusY))]);
      let angle = -3.141592653589793 / 2.0;
      let inc = 3.141592653589793 * 2.0 / this.sides;
      let sx = new vec2d.Vec2D.fromValues(this.radiusX, this.radiusX * this[_innerRadius]);
      let sy = new vec2d.Vec2D.fromValues(this.radiusY, this.radiusY * this[_innerRadius]);
      for (let i = 0; i < this.sides; i = i + 1) {
        _starPoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(math.cos(angle) * sx._get(i[$modulo](2)), math.sin(angle) * sy._get(i[$modulo](2)))));
        angle = angle + inc;
      }
      return _starPoints;
    }
    get radiusX() {
      return this.width / 2;
    }
    get radiusY() {
      return this.height / 2;
    }
    get sides() {
      return this[_numPoints] * 2;
    }
    copyStar(node, resetArtboard) {
      this.copyPath(node, resetArtboard);
      this[_numPoints] = node[_numPoints];
      this[_innerRadius] = node[_innerRadius];
    }
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_star.ActorStar.new();
      instance.copyStar(this, resetArtboard);
      return instance;
    }
    static read(artboard, reader, component) {
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      component[_numPoints] = reader.readUint32("points");
      component[_innerRadius] = reader.readFloat32("innerRadius");
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_star.ActorStar.new();
    }
  };
  (actor_star.ActorStar.new = function() {
    this[_numPoints] = 5;
    this[_innerRadius] = 0.0;
    actor_star.ActorStar.__proto__.new.call(this);
    ;
  }).prototype = actor_star.ActorStar.prototype;
  dart.addTypeTests(actor_star.ActorStar);
  dart.addTypeCaches(actor_star.ActorStar);
  dart.setMethodSignature(actor_star.ActorStar, () => ({
    __proto__: dart.getMethods(actor_star.ActorStar.__proto__),
    copyStar: dart.fnType(dart.void, [actor_star.ActorStar, actor_artboard.ActorArtboard]),
    invalidatePath: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_star.ActorStar, () => ['read']);
  dart.setGetterSignature(actor_star.ActorStar, () => ({
    __proto__: dart.getGetters(actor_star.ActorStar.__proto__),
    doesDraw: core.bool,
    innerRadius: core.double,
    isClosed: core.bool,
    numPoints: core.int,
    points: core.List$(path_point.PathPoint),
    radiusX: core.double,
    radiusY: core.double,
    sides: core.int
  }));
  dart.setSetterSignature(actor_star.ActorStar, () => ({
    __proto__: dart.getSetters(actor_star.ActorStar.__proto__),
    innerRadius: core.double
  }));
  dart.setLibraryUri(actor_star.ActorStar, I[22]);
  dart.setFieldSignature(actor_star.ActorStar, () => ({
    __proto__: dart.getFields(actor_star.ActorStar.__proto__),
    [_numPoints]: dart.fieldType(core.int),
    [_innerRadius]: dart.fieldType(core.double)
  }));
  var _radius = dart.privateName(actor_rectangle, "_radius");
  actor_rectangle.ActorRectangle = class ActorRectangle extends actor_path.ActorProceduralPath {
    get doesDraw() {
      return !this.renderCollapsed;
    }
    get isClosed() {
      return true;
    }
    get points() {
      let halfWidth = this.width / 2;
      let halfHeight = this.height / 2;
      let renderRadius = math.min(core.double, this[_radius], math.min(core.double, halfWidth, halfHeight));
      let _rectanglePathPoints = T.JSArrayOfPathPoint().of([]);
      _rectanglePathPoints[$add](new path_point.StraightPathPoint.fromValues(new vec2d.Vec2D.fromValues(-halfWidth, -halfHeight), renderRadius));
      _rectanglePathPoints[$add](new path_point.StraightPathPoint.fromValues(new vec2d.Vec2D.fromValues(halfWidth, -halfHeight), renderRadius));
      _rectanglePathPoints[$add](new path_point.StraightPathPoint.fromValues(new vec2d.Vec2D.fromValues(halfWidth, halfHeight), renderRadius));
      _rectanglePathPoints[$add](new path_point.StraightPathPoint.fromValues(new vec2d.Vec2D.fromValues(-halfWidth, halfHeight), renderRadius));
      return _rectanglePathPoints;
    }
    get radius() {
      return this[_radius];
    }
    set radius(rd) {
      if (rd !== this[_radius]) {
        this[_radius] = rd;
        this.invalidateDrawable();
      }
    }
    copyRectangle(node, resetArtboard) {
      this.copyPath(node, resetArtboard);
      this[_radius] = node[_radius];
    }
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_rectangle.ActorRectangle.new();
      instance.copyRectangle(this, resetArtboard);
      return instance;
    }
    static read(artboard, reader, component) {
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      component[_radius] = reader.readFloat32("cornerRadius");
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_rectangle.ActorRectangle.new();
    }
  };
  (actor_rectangle.ActorRectangle.new = function() {
    this[_radius] = 0.0;
    actor_rectangle.ActorRectangle.__proto__.new.call(this);
    ;
  }).prototype = actor_rectangle.ActorRectangle.prototype;
  dart.addTypeTests(actor_rectangle.ActorRectangle);
  dart.addTypeCaches(actor_rectangle.ActorRectangle);
  dart.setMethodSignature(actor_rectangle.ActorRectangle, () => ({
    __proto__: dart.getMethods(actor_rectangle.ActorRectangle.__proto__),
    copyRectangle: dart.fnType(dart.void, [actor_rectangle.ActorRectangle, actor_artboard.ActorArtboard]),
    invalidatePath: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_rectangle.ActorRectangle, () => ['read']);
  dart.setGetterSignature(actor_rectangle.ActorRectangle, () => ({
    __proto__: dart.getGetters(actor_rectangle.ActorRectangle.__proto__),
    doesDraw: core.bool,
    isClosed: core.bool,
    points: core.List$(path_point.PathPoint),
    radius: core.double
  }));
  dart.setSetterSignature(actor_rectangle.ActorRectangle, () => ({
    __proto__: dart.getSetters(actor_rectangle.ActorRectangle.__proto__),
    radius: core.double
  }));
  dart.setLibraryUri(actor_rectangle.ActorRectangle, I[23]);
  dart.setFieldSignature(actor_rectangle.ActorRectangle, () => ({
    __proto__: dart.getFields(actor_rectangle.ActorRectangle.__proto__),
    [_radius]: dart.fieldType(core.double)
  }));
  var sides = dart.privateName(actor_polygon, "ActorPolygon.sides");
  actor_polygon.ActorPolygon = class ActorPolygon extends actor_path.ActorProceduralPath {
    get sides() {
      return this[sides];
    }
    set sides(value) {
      this[sides] = value;
    }
    get doesDraw() {
      return !this.renderCollapsed;
    }
    get isClosed() {
      return true;
    }
    get points() {
      let _polygonPoints = T.JSArrayOfPathPoint().of([]);
      let angle = -3.141592653589793 / 2.0;
      let inc = 3.141592653589793 * 2.0 / this.sides;
      for (let i = 0; i < this.sides; i = i + 1) {
        _polygonPoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(math.cos(angle) * this.radiusX, math.sin(angle) * this.radiusY)));
        angle = angle + inc;
      }
      return _polygonPoints;
    }
    get radiusX() {
      return this.width / 2;
    }
    get radiusY() {
      return this.height / 2;
    }
    copyPolygon(node, resetArtboard) {
      this.copyPath(node, resetArtboard);
      this.sides = node.sides;
    }
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_polygon.ActorPolygon.new();
      instance.copyPolygon(this, resetArtboard);
      return instance;
    }
    static read(artboard, reader, component) {
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      component.sides = reader.readUint32("sides");
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_polygon.ActorPolygon.new();
    }
  };
  (actor_polygon.ActorPolygon.new = function() {
    this[sides] = 5;
    actor_polygon.ActorPolygon.__proto__.new.call(this);
    ;
  }).prototype = actor_polygon.ActorPolygon.prototype;
  dart.addTypeTests(actor_polygon.ActorPolygon);
  dart.addTypeCaches(actor_polygon.ActorPolygon);
  dart.setMethodSignature(actor_polygon.ActorPolygon, () => ({
    __proto__: dart.getMethods(actor_polygon.ActorPolygon.__proto__),
    copyPolygon: dart.fnType(dart.void, [actor_polygon.ActorPolygon, actor_artboard.ActorArtboard]),
    invalidatePath: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_polygon.ActorPolygon, () => ['read']);
  dart.setGetterSignature(actor_polygon.ActorPolygon, () => ({
    __proto__: dart.getGetters(actor_polygon.ActorPolygon.__proto__),
    doesDraw: core.bool,
    isClosed: core.bool,
    points: core.List$(path_point.PathPoint),
    radiusX: core.double,
    radiusY: core.double
  }));
  dart.setLibraryUri(actor_polygon.ActorPolygon, I[24]);
  dart.setFieldSignature(actor_polygon.ActorPolygon, () => ({
    __proto__: dart.getFields(actor_polygon.ActorPolygon.__proto__),
    sides: dart.fieldType(core.int)
  }));
  var drawOrder = dart.privateName(actor_image, "ActorImage.drawOrder");
  var sequenceFrame = dart.privateName(actor_image, "ActorImage.sequenceFrame");
  var _textureIndex = dart.privateName(actor_image, "_textureIndex");
  var _vertices$ = dart.privateName(actor_image, "_vertices");
  var _dynamicUV = dart.privateName(actor_image, "_dynamicUV");
  var _triangles = dart.privateName(actor_image, "_triangles");
  var _vertexCount = dart.privateName(actor_image, "_vertexCount");
  var _triangleCount = dart.privateName(actor_image, "_triangleCount");
  var _animationDeformedVertices = dart.privateName(actor_image, "_animationDeformedVertices");
  var _sequenceFrames = dart.privateName(actor_image, "_sequenceFrames");
  var _sequenceUVs = dart.privateName(actor_image, "_sequenceUVs");
  var layerEffectRenderParent = dart.privateName(actor_drawable, "ActorDrawable.layerEffectRenderParent");
  var _clipShapes = dart.privateName(actor_drawable, "_clipShapes");
  var _drawOrder = dart.privateName(actor_drawable, "_drawOrder");
  var __ActorDrawable_drawIndex = dart.privateName(actor_drawable, "_#ActorDrawable#drawIndex");
  var __ActorDrawable_isHidden = dart.privateName(actor_drawable, "_#ActorDrawable#isHidden");
  actor_drawable.ActorDrawable = class ActorDrawable extends actor_node.ActorNode {
    get layerEffectRenderParent() {
      return this[layerEffectRenderParent];
    }
    set layerEffectRenderParent(value) {
      this[layerEffectRenderParent] = value;
    }
    get drawIndex() {
      let t2;
      t2 = this[__ActorDrawable_drawIndex];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("drawIndex")) : t2;
    }
    set drawIndex(drawIndex$35param) {
      this[__ActorDrawable_drawIndex] = drawIndex$35param;
    }
    get isHidden() {
      let t2;
      t2 = this[__ActorDrawable_isHidden];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("isHidden")) : t2;
    }
    set isHidden(isHidden$35param) {
      this[__ActorDrawable_isHidden] = isHidden$35param;
    }
    get clipShapes() {
      return this[_clipShapes];
    }
    get doesDraw() {
      return !this.isHidden && !this.renderCollapsed;
    }
    get drawOrder() {
      return this[_drawOrder];
    }
    set drawOrder(value) {
      if (this[_drawOrder] === value) {
        return;
      }
      this[_drawOrder] = value;
      this.artboard.markDrawOrderDirty();
    }
    completeResolve() {
      this[_clipShapes][$clear]();
      let clippers = this.allClips;
      for (let clips of clippers) {
        let shapes = T.JSArrayOfClipShape().of([]);
        for (let clip of dart.nullCheck(clips)) {
          dart.nullCheck(clip).node.all(dart.fn(component => {
            if (actor_shape.ActorShape.is(component)) {
              shapes[$add](new actor_drawable.ClipShape.new(component, clip.intersect));
            }
            return true;
          }, T.ActorComponentTobool()));
        }
        if (shapes[$isNotEmpty]) {
          this[_clipShapes][$add](shapes);
        }
      }
    }
    copyDrawable(node, resetArtboard) {
      this.copyNode(node, resetArtboard);
      this.drawOrder = node.drawOrder;
      this.blendModeId = node.blendModeId;
      this.isHidden = node.isHidden;
    }
    initializeGraphics() {
    }
    static read(artboard, reader, component) {
      actor_node.ActorNode.read(artboard, reader, component);
      component.isHidden = !reader.readBool("isVisible");
      if (artboard.actor.version < 21) {
        component.blendModeId = 3;
      } else {
        component.blendModeId = reader.readUint8("blendMode");
      }
      component.drawOrder = reader.readUint16("drawOrder");
      return component;
    }
  };
  (actor_drawable.ActorDrawable.new = function() {
    this[_clipShapes] = T.JSArrayOfListOfClipShape().of([]);
    this[_drawOrder] = 0;
    this[__ActorDrawable_drawIndex] = null;
    this[__ActorDrawable_isHidden] = null;
    this[layerEffectRenderParent] = null;
    actor_drawable.ActorDrawable.__proto__.new.call(this);
    ;
  }).prototype = actor_drawable.ActorDrawable.prototype;
  dart.addTypeTests(actor_drawable.ActorDrawable);
  dart.addTypeCaches(actor_drawable.ActorDrawable);
  dart.setMethodSignature(actor_drawable.ActorDrawable, () => ({
    __proto__: dart.getMethods(actor_drawable.ActorDrawable.__proto__),
    copyDrawable: dart.fnType(dart.void, [actor_drawable.ActorDrawable, actor_artboard.ActorArtboard]),
    initializeGraphics: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_drawable.ActorDrawable, () => ['read']);
  dart.setGetterSignature(actor_drawable.ActorDrawable, () => ({
    __proto__: dart.getGetters(actor_drawable.ActorDrawable.__proto__),
    drawIndex: core.int,
    isHidden: core.bool,
    clipShapes: core.List$(core.List$(actor_drawable.ClipShape)),
    doesDraw: core.bool,
    drawOrder: core.int
  }));
  dart.setSetterSignature(actor_drawable.ActorDrawable, () => ({
    __proto__: dart.getSetters(actor_drawable.ActorDrawable.__proto__),
    drawIndex: core.int,
    isHidden: core.bool,
    drawOrder: core.int
  }));
  dart.setLibraryUri(actor_drawable.ActorDrawable, I[25]);
  dart.setFieldSignature(actor_drawable.ActorDrawable, () => ({
    __proto__: dart.getFields(actor_drawable.ActorDrawable.__proto__),
    [_clipShapes]: dart.finalFieldType(core.List$(core.List$(actor_drawable.ClipShape))),
    [_drawOrder]: dart.fieldType(core.int),
    [__ActorDrawable_drawIndex]: dart.fieldType(dart.nullable(core.int)),
    [__ActorDrawable_isHidden]: dart.fieldType(dart.nullable(core.bool)),
    layerEffectRenderParent: dart.fieldType(dart.nullable(actor_node.ActorNode))
  }));
  var skin = dart.privateName(actor_skinnable, "ActorSkinnable.skin");
  var _connectedBones = dart.privateName(actor_skinnable, "_connectedBones");
  actor_skinnable.ActorSkinnable = class ActorSkinnable extends core.Object {
    get skin() {
      return this[skin];
    }
    set skin(value) {
      this[skin] = value;
    }
    get connectedBones() {
      return this[_connectedBones];
    }
    get isConnectedToBones() {
      return this[_connectedBones] != null && dart.nullCheck(this[_connectedBones])[$isNotEmpty];
    }
    copySkinnable(node, resetArtboard) {
      if (node[_connectedBones] != null) {
        this[_connectedBones] = T.JSArrayOfSkinnedBone().of([]);
        for (let i = 0; i < dart.nullCheck(node[_connectedBones])[$length]; i = i + 1) {
          let from = dart.nullCheck(node[_connectedBones])[$_get](i);
          let bc = new actor_skinnable.SkinnedBone.new(from.boneIdx);
          mat2d.Mat2D.copy(bc.bind, from.bind);
          mat2d.Mat2D.copy(bc.inverseBind, from.inverseBind);
          dart.nullCheck(this[_connectedBones])[$add](bc);
        }
      }
    }
    resolveSkinnable(components) {
      if (this[_connectedBones] != null) {
        for (let i = 0; i < dart.nullCheck(this[_connectedBones])[$length]; i = i + 1) {
          let bc = dart.nullCheck(this[_connectedBones])[$_get](i);
          bc.node = actor_node.ActorNode.as(dart.nullCheck(components[$_get](bc.boneIdx)));
        }
      }
    }
    static read(artboard, reader, node) {
      reader.openArray("bones");
      let numConnectedBones = reader.readUint8Length();
      if (numConnectedBones !== 0) {
        node[_connectedBones] = T.JSArrayOfSkinnedBone().of([]);
        for (let i = 0; i < numConnectedBones; i = i + 1) {
          reader.openObject("bone");
          let bc = new actor_skinnable.SkinnedBone.new(reader.readId("component"));
          mat2d.Mat2D.copyFromList(bc.bind, reader.readFloat32Array(6, "bind"));
          reader.closeObject();
          mat2d.Mat2D.invert(bc.inverseBind, bc.bind);
          dart.nullCheck(node[_connectedBones])[$add](bc);
        }
        reader.closeArray();
        let worldOverride = new mat2d.Mat2D.new();
        mat2d.Mat2D.copyFromList(worldOverride, reader.readFloat32Array(6, "worldTransform"));
        node.worldTransformOverride = worldOverride;
      } else {
        reader.closeArray();
      }
      return node;
    }
  };
  (actor_skinnable.ActorSkinnable.new = function() {
    this[skin] = null;
    this[_connectedBones] = null;
    ;
  }).prototype = actor_skinnable.ActorSkinnable.prototype;
  dart.addTypeTests(actor_skinnable.ActorSkinnable);
  dart.addTypeCaches(actor_skinnable.ActorSkinnable);
  dart.setMethodSignature(actor_skinnable.ActorSkinnable, () => ({
    __proto__: dart.getMethods(actor_skinnable.ActorSkinnable.__proto__),
    copySkinnable: dart.fnType(dart.void, [actor_skinnable.ActorSkinnable, actor_artboard.ActorArtboard]),
    resolveSkinnable: dart.fnType(dart.void, [core.List$(dart.nullable(actor_component.ActorComponent))])
  }));
  dart.setStaticMethodSignature(actor_skinnable.ActorSkinnable, () => ['read']);
  dart.setGetterSignature(actor_skinnable.ActorSkinnable, () => ({
    __proto__: dart.getGetters(actor_skinnable.ActorSkinnable.__proto__),
    connectedBones: dart.nullable(core.List$(actor_skinnable.SkinnedBone)),
    isConnectedToBones: core.bool
  }));
  dart.setLibraryUri(actor_skinnable.ActorSkinnable, I[26]);
  dart.setFieldSignature(actor_skinnable.ActorSkinnable, () => ({
    __proto__: dart.getFields(actor_skinnable.ActorSkinnable.__proto__),
    skin: dart.fieldType(dart.nullable(actor_skin.ActorSkin)),
    [_connectedBones]: dart.fieldType(dart.nullable(core.List$(actor_skinnable.SkinnedBone)))
  }));
  const ActorDrawable_ActorSkinnable$36 = class ActorDrawable_ActorSkinnable extends actor_drawable.ActorDrawable {};
  (ActorDrawable_ActorSkinnable$36.new = function() {
    actor_skinnable.ActorSkinnable.new.call(this);
    ActorDrawable_ActorSkinnable$36.__proto__.new.call(this);
  }).prototype = ActorDrawable_ActorSkinnable$36.prototype;
  dart.applyMixin(ActorDrawable_ActorSkinnable$36, actor_skinnable.ActorSkinnable);
  actor_image.ActorImage = class ActorImage extends ActorDrawable_ActorSkinnable$36 {
    get drawOrder() {
      return this[drawOrder];
    }
    set drawOrder(value) {
      this[drawOrder] = value;
    }
    get sequenceFrame() {
      return this[sequenceFrame];
    }
    set sequenceFrame(value) {
      this[sequenceFrame] = value;
    }
    static ['_#new#tearOff']() {
      return new actor_image.ActorImage.new();
    }
    get animationDeformedVertices() {
      return this[_animationDeformedVertices];
    }
    get blendModeId() {
      return 0;
    }
    set blendModeId(value) {
    }
    get doesAnimationVertexDeform() {
      return this[_animationDeformedVertices] != null;
    }
    set doesAnimationVertexDeform(value) {
      let t2, t2$;
      if (value) {
        if (this[_animationDeformedVertices] == null || dart.nullCheck(this[_animationDeformedVertices])[$length] !== this[_vertexCount] * 2) {
          this[_animationDeformedVertices] = _native_typed_data.NativeFloat32List.new(this.vertexCount * 2);
          let writeIdx = 0;
          let readIdx = 0;
          let readStride = this.vertexStride;
          for (let i = 0; i < this[_vertexCount]; i = i + 1) {
            dart.nullCheck(this[_animationDeformedVertices])[$_set]((t2 = writeIdx, writeIdx = t2 + 1, t2), dart.nullCheck(this[_vertices$])[$_get](readIdx));
            dart.nullCheck(this[_animationDeformedVertices])[$_set]((t2$ = writeIdx, writeIdx = t2$ + 1, t2$), dart.nullCheck(this[_vertices$])[$_get](readIdx + 1));
            readIdx = readIdx + readStride;
          }
        }
      } else {
        this[_animationDeformedVertices] = null;
      }
    }
    get dynamicUV() {
      return this[_dynamicUV];
    }
    get imageTransform() {
      return this.isConnectedToBones ? null : this.worldTransform;
    }
    get sequenceFrames() {
      return this[_sequenceFrames];
    }
    get sequenceUVs() {
      return this[_sequenceUVs];
    }
    get textureIndex() {
      return this[_textureIndex];
    }
    get triangleCount() {
      return this[_triangleCount];
    }
    get triangles() {
      return this[_triangles];
    }
    get vertexBoneIndexOffset() {
      return 4;
    }
    get vertexBoneWeightOffset() {
      return 8;
    }
    get vertexCount() {
      return this[_vertexCount];
    }
    get vertexPositionOffset() {
      return 0;
    }
    get vertexStride() {
      return this.isConnectedToBones ? 12 : 4;
    }
    get vertexUVOffset() {
      return 2;
    }
    get vertices() {
      return this[_vertices$];
    }
    computeAABB() {
      let worldTransform = this.worldTransform;
      return new aabb$.AABB.fromValues(worldTransform._get(4), worldTransform._get(5), worldTransform._get(4), worldTransform._get(5));
    }
    copyImage(node, resetArtboard) {
      this.copyDrawable(node, resetArtboard);
      this.copySkinnable(node, resetArtboard);
      this[_textureIndex] = node[_textureIndex];
      this[_vertexCount] = node[_vertexCount];
      this[_triangleCount] = node[_triangleCount];
      this[_vertices$] = node[_vertices$];
      this[_triangles] = node[_triangles];
      this[_dynamicUV] = node[_dynamicUV];
      if (node[_animationDeformedVertices] != null) {
        this[_animationDeformedVertices] = _native_typed_data.NativeFloat32List.fromList(dart.nullCheck(node[_animationDeformedVertices]));
      }
    }
    disposeGeometry() {
      if (this[_animationDeformedVertices] == null) {
        this[_vertices$] = null;
      }
      this[_triangles] = null;
    }
    initializeGraphics() {
    }
    invalidateDrawable() {
    }
    makeInstance(resetArtboard) {
      let instanceNode = resetArtboard.actor.makeImageNode();
      instanceNode.copyImage(this, resetArtboard);
      return instanceNode;
    }
    makeVertexPositionBuffer() {
      return _native_typed_data.NativeFloat32List.new(this[_vertexCount] * 2);
    }
    makeVertexUVBuffer() {
      return _native_typed_data.NativeFloat32List.new(this[_vertexCount] * 2);
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      this.resolveSkinnable(components);
    }
    transformDeformVertices(wt) {
      if (this[_animationDeformedVertices] == null) {
        return;
      }
      let fv = this[_animationDeformedVertices];
      let vidx = 0;
      for (let j = 0; j < this[_vertexCount]; j = j + 1) {
        let x = dart.nullCheck(fv)[$_get](vidx);
        let y = fv[$_get](vidx + 1);
        fv[$_set](vidx, wt._get(0) * x + wt._get(2) * y + wt._get(4));
        fv[$_set](vidx + 1, wt._get(1) * x + wt._get(3) * y + wt._get(5));
        vidx = vidx + 2;
      }
    }
    updateVertexPositionBuffer(buffer, isSkinnedDeformInWorld) {
      let t4, t3, t2, t4$, t3$, t2$, t4$0, t3$0, t2$0, t4$1, t3$1, t2$1, t4$2, t3$2, t2$2, t3$3, t2$3, t2$4, t2$5, t2$6, t2$7;
      let worldTransform = this.worldTransform;
      let readIdx = 0;
      let writeIdx = 0;
      let v = this[_animationDeformedVertices] != null ? this[_animationDeformedVertices] : this[_vertices$];
      let stride = this[_animationDeformedVertices] != null ? 2 : this.vertexStride;
      if (this.skin != null) {
        let boneTransforms = dart.nullCheck(this.skin).boneMatrices;
        let influenceMatrix = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([0.0, 0.0, 0.0, 0.0, 0.0, 0.0]));
        let boneIndexOffset = this.vertexBoneIndexOffset;
        let weightOffset = this.vertexBoneWeightOffset;
        for (let i = 0; i < this[_vertexCount]; i = i + 1) {
          let x = dart.nullCheck(v)[$_get](readIdx);
          let y = v[$_get](readIdx + 1);
          let px = null;
          let py = null;
          if (this[_animationDeformedVertices] != null && isSkinnedDeformInWorld) {
            px = x;
            py = y;
          } else {
            px = worldTransform._get(0) * x + worldTransform._get(2) * y + worldTransform._get(4);
            py = worldTransform._get(1) * x + worldTransform._get(3) * y + worldTransform._get(5);
          }
          influenceMatrix[$_set](0, (t2$2 = influenceMatrix, t3$2 = 1, t4$2 = (t2$1 = influenceMatrix, t3$1 = 2, t4$1 = (t2$0 = influenceMatrix, t3$0 = 3, t4$0 = (t2$ = influenceMatrix, t3$ = 4, t4$ = (t2 = influenceMatrix, t3 = 5, t4 = 0.0, t2[$_set](t3, t4), t4), t2$[$_set](t3$, t4$), t4$), t2$0[$_set](t3$0, t4$0), t4$0), t2$1[$_set](t3$1, t4$1), t4$1), t2$2[$_set](t3$2, t4$2), t4$2));
          for (let wi = 0; wi < 4; wi = wi + 1) {
            let boneIndex = dart.nullCheck(this[_vertices$])[$_get](boneIndexOffset + wi)[$toInt]();
            let weight = dart.nullCheck(this[_vertices$])[$_get](weightOffset + wi);
            let boneTransformIndex = boneIndex * 6;
            if (boneIndex <= dart.nullCheck(this.connectedBones)[$length]) {
              for (let j = 0; j < 6; j = j + 1) {
                t2$3 = influenceMatrix;
                t3$3 = j;
                t2$3[$_set](t3$3, t2$3[$_get](t3$3) + boneTransforms[$_get](boneTransformIndex + j) * weight);
              }
            }
          }
          x = influenceMatrix[$_get](0) * px + influenceMatrix[$_get](2) * py + influenceMatrix[$_get](4);
          y = influenceMatrix[$_get](1) * px + influenceMatrix[$_get](3) * py + influenceMatrix[$_get](5);
          readIdx = readIdx + stride;
          boneIndexOffset = boneIndexOffset + this.vertexStride;
          weightOffset = weightOffset + this.vertexStride;
          buffer[$_set]((t2$4 = writeIdx, writeIdx = t2$4 + 1, t2$4), x);
          buffer[$_set]((t2$5 = writeIdx, writeIdx = t2$5 + 1, t2$5), y);
        }
      } else {
        for (let i = 0; i < this[_vertexCount]; i = i + 1) {
          buffer[$_set]((t2$6 = writeIdx, writeIdx = t2$6 + 1, t2$6), dart.nullCheck(v)[$_get](readIdx));
          buffer[$_set]((t2$7 = writeIdx, writeIdx = t2$7 + 1, t2$7), v[$_get](readIdx + 1));
          readIdx = readIdx + stride;
        }
      }
    }
    updateVertexUVBuffer(buffer) {
      let t2, t2$;
      let readIdx = this.vertexUVOffset;
      let writeIdx = 0;
      let stride = this.vertexStride;
      let v = this[_vertices$];
      for (let i = 0; i < this[_vertexCount]; i = i + 1) {
        buffer[$_set]((t2 = writeIdx, writeIdx = t2 + 1, t2), dart.nullCheck(v)[$_get](readIdx));
        buffer[$_set]((t2$ = writeIdx, writeIdx = t2$ + 1, t2$), v[$_get](readIdx + 1));
        readIdx = readIdx + stride;
      }
    }
    static read(artboard, reader, node) {
      actor_drawable.ActorDrawable.read(artboard, reader, node);
      actor_skinnable.ActorSkinnable.read(artboard, reader, node);
      if (!node.isHidden) {
        node[_textureIndex] = reader.readUint8("atlas");
        let numVertices = reader.readUint32("numVertices");
        node[_vertexCount] = numVertices;
        node[_vertices$] = reader.readFloat32Array(numVertices * node.vertexStride, "vertices");
        if (artboard.actor.version >= 24) {
          let isDynamic = reader.readBool("isDynamic");
          if (isDynamic) {
            node[_dynamicUV] = reader.readFloat32Array(numVertices * 2, "uv");
          }
        }
        let numTris = reader.readUint32("numTriangles");
        node[_triangles] = _native_typed_data.NativeUint16List.new(numTris * 3);
        node[_triangleCount] = numTris;
        node[_triangles] = reader.readUint16Array(numTris * 3, "triangles");
      }
      return node;
    }
  };
  (actor_image.ActorImage.new = function() {
    this[drawOrder] = 0;
    this[_textureIndex] = -1;
    this[_vertices$] = null;
    this[_dynamicUV] = null;
    this[_triangles] = null;
    this[_vertexCount] = 0;
    this[_triangleCount] = 0;
    this[_animationDeformedVertices] = null;
    this[_sequenceFrames] = null;
    this[_sequenceUVs] = null;
    this[sequenceFrame] = 0;
    actor_image.ActorImage.__proto__.new.call(this);
    ;
  }).prototype = actor_image.ActorImage.prototype;
  dart.addTypeTests(actor_image.ActorImage);
  dart.addTypeCaches(actor_image.ActorImage);
  dart.setMethodSignature(actor_image.ActorImage, () => ({
    __proto__: dart.getMethods(actor_image.ActorImage.__proto__),
    computeAABB: dart.fnType(aabb$.AABB, []),
    copyImage: dart.fnType(dart.void, [actor_image.ActorImage, actor_artboard.ActorArtboard]),
    disposeGeometry: dart.fnType(dart.void, []),
    invalidateDrawable: dart.fnType(dart.void, []),
    makeVertexPositionBuffer: dart.fnType(typed_data.Float32List, []),
    makeVertexUVBuffer: dart.fnType(typed_data.Float32List, []),
    transformDeformVertices: dart.fnType(dart.void, [mat2d.Mat2D]),
    updateVertexPositionBuffer: dart.fnType(dart.void, [typed_data.Float32List, core.bool]),
    updateVertexUVBuffer: dart.fnType(dart.void, [typed_data.Float32List])
  }));
  dart.setStaticMethodSignature(actor_image.ActorImage, () => ['read']);
  dart.setGetterSignature(actor_image.ActorImage, () => ({
    __proto__: dart.getGetters(actor_image.ActorImage.__proto__),
    animationDeformedVertices: dart.nullable(typed_data.Float32List),
    blendModeId: core.int,
    doesAnimationVertexDeform: core.bool,
    dynamicUV: dart.nullable(typed_data.Float32List),
    imageTransform: dart.nullable(mat2d.Mat2D),
    sequenceFrames: dart.nullable(core.List$(actor_image.SequenceFrame)),
    sequenceUVs: dart.nullable(typed_data.Float32List),
    textureIndex: core.int,
    triangleCount: core.int,
    triangles: dart.nullable(typed_data.Uint16List),
    vertexBoneIndexOffset: core.int,
    vertexBoneWeightOffset: core.int,
    vertexCount: core.int,
    vertexPositionOffset: core.int,
    vertexStride: core.int,
    vertexUVOffset: core.int,
    vertices: dart.nullable(typed_data.Float32List)
  }));
  dart.setSetterSignature(actor_image.ActorImage, () => ({
    __proto__: dart.getSetters(actor_image.ActorImage.__proto__),
    blendModeId: core.int,
    doesAnimationVertexDeform: core.bool
  }));
  dart.setLibraryUri(actor_image.ActorImage, I[27]);
  dart.setFieldSignature(actor_image.ActorImage, () => ({
    __proto__: dart.getFields(actor_image.ActorImage.__proto__),
    drawOrder: dart.fieldType(core.int),
    [_textureIndex]: dart.fieldType(core.int),
    [_vertices$]: dart.fieldType(dart.nullable(typed_data.Float32List)),
    [_dynamicUV]: dart.fieldType(dart.nullable(typed_data.Float32List)),
    [_triangles]: dart.fieldType(dart.nullable(typed_data.Uint16List)),
    [_vertexCount]: dart.fieldType(core.int),
    [_triangleCount]: dart.fieldType(core.int),
    [_animationDeformedVertices]: dart.fieldType(dart.nullable(typed_data.Float32List)),
    [_sequenceFrames]: dart.fieldType(dart.nullable(core.List$(actor_image.SequenceFrame))),
    [_sequenceUVs]: dart.fieldType(dart.nullable(typed_data.Float32List)),
    sequenceFrame: dart.fieldType(core.int)
  }));
  var _atlasIndex$ = dart.privateName(actor_image, "_atlasIndex");
  var _offset$0 = dart.privateName(actor_image, "_offset");
  actor_image.SequenceFrame = class SequenceFrame extends core.Object {
    static ['_#new#tearOff'](_atlasIndex, _offset) {
      return new actor_image.SequenceFrame.new(_atlasIndex, _offset);
    }
    get atlasIndex() {
      return this[_atlasIndex$];
    }
    get offset() {
      return this[_offset$0];
    }
    toString() {
      return "SequenceFrame(" + dart.str(this[_atlasIndex$]) + ", " + dart.str(this[_offset$0]) + ")";
    }
  };
  (actor_image.SequenceFrame.new = function(_atlasIndex, _offset) {
    this[_atlasIndex$] = _atlasIndex;
    this[_offset$0] = _offset;
    ;
  }).prototype = actor_image.SequenceFrame.prototype;
  dart.addTypeTests(actor_image.SequenceFrame);
  dart.addTypeCaches(actor_image.SequenceFrame);
  dart.setGetterSignature(actor_image.SequenceFrame, () => ({
    __proto__: dart.getGetters(actor_image.SequenceFrame.__proto__),
    atlasIndex: core.int,
    offset: core.int
  }));
  dart.setLibraryUri(actor_image.SequenceFrame, I[27]);
  dart.setFieldSignature(actor_image.SequenceFrame, () => ({
    __proto__: dart.getFields(actor_image.SequenceFrame.__proto__),
    [_atlasIndex$]: dart.finalFieldType(core.int),
    [_offset$0]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(actor_image.SequenceFrame, ['toString']);
  actor_ellipse.ActorEllipse = class ActorEllipse extends actor_path.ActorProceduralPath {
    get doesDraw() {
      return !this.renderCollapsed;
    }
    get isClosed() {
      return true;
    }
    get points() {
      let _ellipsePathPoints = T.JSArrayOfPathPoint().of([]);
      _ellipsePathPoints[$add](new path_point.CubicPathPoint.fromValues(new vec2d.Vec2D.fromValues(0.0, -this.radiusY), new vec2d.Vec2D.fromValues(-this.radiusX * 0.55, -this.radiusY), new vec2d.Vec2D.fromValues(this.radiusX * 0.55, -this.radiusY)));
      _ellipsePathPoints[$add](new path_point.CubicPathPoint.fromValues(new vec2d.Vec2D.fromValues(this.radiusX, 0.0), new vec2d.Vec2D.fromValues(this.radiusX, 0.55 * -this.radiusY), new vec2d.Vec2D.fromValues(this.radiusX, 0.55 * this.radiusY)));
      _ellipsePathPoints[$add](new path_point.CubicPathPoint.fromValues(new vec2d.Vec2D.fromValues(0.0, this.radiusY), new vec2d.Vec2D.fromValues(this.radiusX * 0.55, this.radiusY), new vec2d.Vec2D.fromValues(-this.radiusX * 0.55, this.radiusY)));
      _ellipsePathPoints[$add](new path_point.CubicPathPoint.fromValues(new vec2d.Vec2D.fromValues(-this.radiusX, 0.0), new vec2d.Vec2D.fromValues(-this.radiusX, this.radiusY * 0.55), new vec2d.Vec2D.fromValues(-this.radiusX, -this.radiusY * 0.55)));
      return _ellipsePathPoints;
    }
    get radiusX() {
      return this.width / 2;
    }
    get radiusY() {
      return this.height / 2;
    }
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_ellipse.ActorEllipse.new();
      instance.copyPath(this, resetArtboard);
      return instance;
    }
    static read(artboard, reader, component) {
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_ellipse.ActorEllipse.new();
    }
  };
  (actor_ellipse.ActorEllipse.new = function() {
    actor_ellipse.ActorEllipse.__proto__.new.call(this);
    ;
  }).prototype = actor_ellipse.ActorEllipse.prototype;
  dart.addTypeTests(actor_ellipse.ActorEllipse);
  dart.addTypeCaches(actor_ellipse.ActorEllipse);
  dart.setMethodSignature(actor_ellipse.ActorEllipse, () => ({
    __proto__: dart.getMethods(actor_ellipse.ActorEllipse.__proto__),
    invalidatePath: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_ellipse.ActorEllipse, () => ['read']);
  dart.setGetterSignature(actor_ellipse.ActorEllipse, () => ({
    __proto__: dart.getGetters(actor_ellipse.ActorEllipse.__proto__),
    doesDraw: core.bool,
    isClosed: core.bool,
    points: core.List$(path_point.PathPoint),
    radiusX: core.double,
    radiusY: core.double
  }));
  dart.setLibraryUri(actor_ellipse.ActorEllipse, I[28]);
  dart.defineLazy(actor_ellipse, {
    /*actor_ellipse.circleConstant*/get circleConstant() {
      return 0.55;
    }
  }, false);
  actor_mask.MaskType = class MaskType extends core._Enum {
    toString() {
      return "MaskType." + this[_name];
    }
  };
  (actor_mask.MaskType.new = function(index, name) {
    actor_mask.MaskType.__proto__.new.call(this, index, name);
    ;
  }).prototype = actor_mask.MaskType.prototype;
  dart.addTypeTests(actor_mask.MaskType);
  dart.addTypeCaches(actor_mask.MaskType);
  dart.setLibraryUri(actor_mask.MaskType, I[29]);
  dart.setStaticFieldSignature(actor_mask.MaskType, () => ['values', 'alpha', 'invertedAlpha', 'luminance', 'invertedLuminance']);
  dart.defineExtensionMethods(actor_mask.MaskType, ['toString']);
  dart.defineLazy(actor_mask.MaskType, {
    /*actor_mask.MaskType.values*/get values() {
      return C[4] || CT.C4;
    },
    /*actor_mask.MaskType.alpha*/get alpha() {
      return C[5] || CT.C5;
    },
    /*actor_mask.MaskType.invertedAlpha*/get invertedAlpha() {
      return C[6] || CT.C6;
    },
    /*actor_mask.MaskType.luminance*/get luminance() {
      return C[7] || CT.C7;
    },
    /*actor_mask.MaskType.invertedLuminance*/get invertedLuminance() {
      return C[8] || CT.C8;
    }
  }, false);
  var __ActorMask__source = dart.privateName(actor_mask, "_#ActorMask#_source");
  var __ActorMask__sourceIdx = dart.privateName(actor_mask, "_#ActorMask#_sourceIdx");
  var __ActorMask__maskType = dart.privateName(actor_mask, "_#ActorMask#_maskType");
  var _source = dart.privateName(actor_mask, "_source");
  var _sourceIdx = dart.privateName(actor_mask, "_sourceIdx");
  var _maskType = dart.privateName(actor_mask, "_maskType");
  var __ActorLayerEffect__isActive = dart.privateName(actor_layer_effect, "_#ActorLayerEffect#_isActive");
  var _isActive = dart.privateName(actor_layer_effect, "_isActive");
  actor_layer_effect.ActorLayerEffect = class ActorLayerEffect extends actor_component.ActorComponent {
    get [_isActive]() {
      let t4;
      t4 = this[__ActorLayerEffect__isActive];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_isActive")) : t4;
    }
    set [_isActive](library$32package$58flare_flutter$47base$47actor_layer_effect$46dart$58$58_isActive$35param) {
      this[__ActorLayerEffect__isActive] = library$32package$58flare_flutter$47base$47actor_layer_effect$46dart$58$58_isActive$35param;
    }
    get isActive() {
      return this[_isActive];
    }
    copyLayerEffect(from, resetArtboard) {
      this.copyComponent(from, resetArtboard);
      this[_isActive] = from[_isActive];
    }
    static read(artboard, reader, component) {
      actor_component.ActorComponent.read(artboard, reader, component);
      component[_isActive] = reader.readBool("isActive");
      return component;
    }
  };
  (actor_layer_effect.ActorLayerEffect.new = function() {
    this[__ActorLayerEffect__isActive] = null;
    actor_layer_effect.ActorLayerEffect.__proto__.new.call(this);
    ;
  }).prototype = actor_layer_effect.ActorLayerEffect.prototype;
  dart.addTypeTests(actor_layer_effect.ActorLayerEffect);
  dart.addTypeCaches(actor_layer_effect.ActorLayerEffect);
  dart.setMethodSignature(actor_layer_effect.ActorLayerEffect, () => ({
    __proto__: dart.getMethods(actor_layer_effect.ActorLayerEffect.__proto__),
    copyLayerEffect: dart.fnType(dart.void, [actor_layer_effect.ActorLayerEffect, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_layer_effect.ActorLayerEffect, () => ['read']);
  dart.setGetterSignature(actor_layer_effect.ActorLayerEffect, () => ({
    __proto__: dart.getGetters(actor_layer_effect.ActorLayerEffect.__proto__),
    [_isActive]: core.bool,
    isActive: core.bool
  }));
  dart.setSetterSignature(actor_layer_effect.ActorLayerEffect, () => ({
    __proto__: dart.getSetters(actor_layer_effect.ActorLayerEffect.__proto__),
    [_isActive]: core.bool
  }));
  dart.setLibraryUri(actor_layer_effect.ActorLayerEffect, I[30]);
  dart.setFieldSignature(actor_layer_effect.ActorLayerEffect, () => ({
    __proto__: dart.getFields(actor_layer_effect.ActorLayerEffect.__proto__),
    [__ActorLayerEffect__isActive]: dart.fieldType(dart.nullable(core.bool))
  }));
  actor_mask.ActorMask = class ActorMask extends actor_layer_effect.ActorLayerEffect {
    get [_source]() {
      let t4;
      t4 = this[__ActorMask__source];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_source")) : t4;
    }
    set [_source](library$32package$58flare_flutter$47base$47actor_mask$46dart$58$58_source$35param) {
      this[__ActorMask__source] = library$32package$58flare_flutter$47base$47actor_mask$46dart$58$58_source$35param;
    }
    get [_sourceIdx]() {
      let t4;
      t4 = this[__ActorMask__sourceIdx];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_sourceIdx")) : t4;
    }
    set [_sourceIdx](library$32package$58flare_flutter$47base$47actor_mask$46dart$58$58_sourceIdx$35param) {
      this[__ActorMask__sourceIdx] = library$32package$58flare_flutter$47base$47actor_mask$46dart$58$58_sourceIdx$35param;
    }
    get [_maskType]() {
      let t4;
      t4 = this[__ActorMask__maskType];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_maskType")) : t4;
    }
    set [_maskType](library$32package$58flare_flutter$47base$47actor_mask$46dart$58$58_maskType$35param) {
      this[__ActorMask__maskType] = library$32package$58flare_flutter$47base$47actor_mask$46dart$58$58_maskType$35param;
    }
    get source() {
      return this[_source];
    }
    get maskType() {
      return this[_maskType];
    }
    static read(artboard, reader, component) {
      let t4;
      actor_layer_effect.ActorLayerEffect.read(artboard, reader, component);
      component[_sourceIdx] = reader.readId("source");
      component[_maskType] = (t4 = actor_mask.maskTypeLookup[$_get](reader.readUint8("maskType")), t4 == null ? actor_mask.MaskType.alpha : t4);
      return component;
    }
    copyMask(from, resetArtboard) {
      this.copyLayerEffect(from, resetArtboard);
      this[_sourceIdx] = from[_sourceIdx];
      this[_maskType] = from[_maskType];
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      this[_source] = actor_node.ActorNode.as(dart.nullCheck(components[$_get](this[_sourceIdx])));
    }
    completeResolve() {
    }
    makeInstance(resetArtboard) {
      let instanceNode = new actor_mask.ActorMask.new();
      instanceNode.copyMask(this, resetArtboard);
      return instanceNode;
    }
    onDirty(dirt) {
    }
    update(dirt) {
    }
    static ['_#new#tearOff']() {
      return new actor_mask.ActorMask.new();
    }
  };
  (actor_mask.ActorMask.new = function() {
    this[__ActorMask__source] = null;
    this[__ActorMask__sourceIdx] = null;
    this[__ActorMask__maskType] = null;
    actor_mask.ActorMask.__proto__.new.call(this);
    ;
  }).prototype = actor_mask.ActorMask.prototype;
  dart.addTypeTests(actor_mask.ActorMask);
  dart.addTypeCaches(actor_mask.ActorMask);
  dart.setMethodSignature(actor_mask.ActorMask, () => ({
    __proto__: dart.getMethods(actor_mask.ActorMask.__proto__),
    copyMask: dart.fnType(dart.void, [actor_mask.ActorMask, actor_artboard.ActorArtboard]),
    completeResolve: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_mask.ActorMask, () => ['read']);
  dart.setGetterSignature(actor_mask.ActorMask, () => ({
    __proto__: dart.getGetters(actor_mask.ActorMask.__proto__),
    [_source]: actor_node.ActorNode,
    [_sourceIdx]: core.int,
    [_maskType]: actor_mask.MaskType,
    source: dart.nullable(actor_node.ActorNode),
    maskType: actor_mask.MaskType
  }));
  dart.setSetterSignature(actor_mask.ActorMask, () => ({
    __proto__: dart.getSetters(actor_mask.ActorMask.__proto__),
    [_source]: actor_node.ActorNode,
    [_sourceIdx]: core.int,
    [_maskType]: actor_mask.MaskType
  }));
  dart.setLibraryUri(actor_mask.ActorMask, I[29]);
  dart.setFieldSignature(actor_mask.ActorMask, () => ({
    __proto__: dart.getFields(actor_mask.ActorMask.__proto__),
    [__ActorMask__source]: dart.fieldType(dart.nullable(actor_node.ActorNode)),
    [__ActorMask__sourceIdx]: dart.fieldType(dart.nullable(core.int)),
    [__ActorMask__maskType]: dart.fieldType(dart.nullable(actor_mask.MaskType))
  }));
  dart.defineLazy(actor_mask, {
    /*actor_mask.maskTypeLookup*/get maskTypeLookup() {
      return T.HashMapOfint$MaskType().fromIterables(T.JSArrayOfint().of([0, 1, 2, 3]), T.JSArrayOfMaskType().of([actor_mask.MaskType.alpha, actor_mask.MaskType.invertedAlpha, actor_mask.MaskType.luminance, actor_mask.MaskType.invertedLuminance]));
    },
    set maskTypeLookup(_) {}
  }, false);
  var __ActorShadow_offsetX = dart.privateName(actor_shadow, "_#ActorShadow#offsetX");
  var __ActorShadow_offsetY = dart.privateName(actor_shadow, "_#ActorShadow#offsetY");
  var _color = dart.privateName(actor_shadow, "_color");
  var __ActorBlur_blurX = dart.privateName(actor_blur, "_#ActorBlur#blurX");
  var __ActorBlur_blurY = dart.privateName(actor_blur, "_#ActorBlur#blurY");
  actor_blur.ActorBlur = class ActorBlur extends actor_layer_effect.ActorLayerEffect {
    get blurX() {
      let t4;
      t4 = this[__ActorBlur_blurX];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("blurX")) : t4;
    }
    set blurX(blurX$35param) {
      this[__ActorBlur_blurX] = blurX$35param;
    }
    get blurY() {
      let t4;
      t4 = this[__ActorBlur_blurY];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("blurY")) : t4;
    }
    set blurY(blurY$35param) {
      this[__ActorBlur_blurY] = blurY$35param;
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_blur.ActorBlur.new() : null;
      actor_layer_effect.ActorLayerEffect.read(artboard, reader, component);
      component.blurX = reader.readFloat32("blurX");
      component.blurY = reader.readFloat32("blurY");
      return component;
    }
    copyBlur(from, resetArtboard) {
      this.copyLayerEffect(from, resetArtboard);
      this.blurX = from.blurX;
      this.blurY = from.blurY;
    }
    completeResolve() {
    }
    makeInstance(resetArtboard) {
      let instanceNode = new actor_blur.ActorBlur.new();
      instanceNode.copyBlur(this, resetArtboard);
      return instanceNode;
    }
    onDirty(dirt) {
    }
    update(dirt) {
    }
    static ['_#new#tearOff']() {
      return new actor_blur.ActorBlur.new();
    }
  };
  (actor_blur.ActorBlur.new = function() {
    this[__ActorBlur_blurX] = null;
    this[__ActorBlur_blurY] = null;
    actor_blur.ActorBlur.__proto__.new.call(this);
    ;
  }).prototype = actor_blur.ActorBlur.prototype;
  dart.addTypeTests(actor_blur.ActorBlur);
  dart.addTypeCaches(actor_blur.ActorBlur);
  dart.setMethodSignature(actor_blur.ActorBlur, () => ({
    __proto__: dart.getMethods(actor_blur.ActorBlur.__proto__),
    copyBlur: dart.fnType(dart.void, [actor_blur.ActorBlur, actor_artboard.ActorArtboard]),
    completeResolve: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_blur.ActorBlur, () => ['read']);
  dart.setGetterSignature(actor_blur.ActorBlur, () => ({
    __proto__: dart.getGetters(actor_blur.ActorBlur.__proto__),
    blurX: core.double,
    blurY: core.double
  }));
  dart.setSetterSignature(actor_blur.ActorBlur, () => ({
    __proto__: dart.getSetters(actor_blur.ActorBlur.__proto__),
    blurX: core.double,
    blurY: core.double
  }));
  dart.setLibraryUri(actor_blur.ActorBlur, I[31]);
  dart.setFieldSignature(actor_blur.ActorBlur, () => ({
    __proto__: dart.getFields(actor_blur.ActorBlur.__proto__),
    [__ActorBlur_blurX]: dart.fieldType(dart.nullable(core.double)),
    [__ActorBlur_blurY]: dart.fieldType(dart.nullable(core.double))
  }));
  actor_shadow.ActorShadow = class ActorShadow extends actor_blur.ActorBlur {
    get offsetX() {
      let t4;
      t4 = this[__ActorShadow_offsetX];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("offsetX")) : t4;
    }
    set offsetX(offsetX$35param) {
      this[__ActorShadow_offsetX] = offsetX$35param;
    }
    get offsetY() {
      let t4;
      t4 = this[__ActorShadow_offsetY];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("offsetY")) : t4;
    }
    set offsetY(offsetY$35param) {
      this[__ActorShadow_offsetY] = offsetY$35param;
    }
    get color() {
      return this[_color];
    }
    copyShadow(from, resetArtboard) {
      this.copyBlur(from, resetArtboard);
      this.offsetX = from.offsetX;
      this.offsetY = from.offsetY;
      this[_color][$_set](0, from[_color][$_get](0));
      this[_color][$_set](1, from[_color][$_get](1));
      this[_color][$_set](2, from[_color][$_get](2));
      this[_color][$_set](3, from[_color][$_get](3));
      this.blendModeId = from.blendModeId;
    }
    static read(artboard, reader, component) {
      actor_blur.ActorBlur.read(artboard, reader, component);
      component.offsetX = reader.readFloat32("offsetX");
      component.offsetY = reader.readFloat32("offsetY");
      component[_color] = reader.readFloat32Array(4, "color");
      component.blendModeId = reader.readUint8("blendMode");
      return component;
    }
  };
  (actor_shadow.ActorShadow.new = function() {
    this[__ActorShadow_offsetX] = null;
    this[__ActorShadow_offsetY] = null;
    this[_color] = _native_typed_data.NativeFloat32List.new(4);
    actor_shadow.ActorShadow.__proto__.new.call(this);
    ;
  }).prototype = actor_shadow.ActorShadow.prototype;
  dart.addTypeTests(actor_shadow.ActorShadow);
  dart.addTypeCaches(actor_shadow.ActorShadow);
  dart.setMethodSignature(actor_shadow.ActorShadow, () => ({
    __proto__: dart.getMethods(actor_shadow.ActorShadow.__proto__),
    copyShadow: dart.fnType(dart.void, [actor_shadow.ActorShadow, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_shadow.ActorShadow, () => ['read']);
  dart.setGetterSignature(actor_shadow.ActorShadow, () => ({
    __proto__: dart.getGetters(actor_shadow.ActorShadow.__proto__),
    offsetX: core.double,
    offsetY: core.double,
    color: typed_data.Float32List
  }));
  dart.setSetterSignature(actor_shadow.ActorShadow, () => ({
    __proto__: dart.getSetters(actor_shadow.ActorShadow.__proto__),
    offsetX: core.double,
    offsetY: core.double
  }));
  dart.setLibraryUri(actor_shadow.ActorShadow, I[32]);
  dart.setFieldSignature(actor_shadow.ActorShadow, () => ({
    __proto__: dart.getFields(actor_shadow.ActorShadow.__proto__),
    [__ActorShadow_offsetX]: dart.fieldType(dart.nullable(core.double)),
    [__ActorShadow_offsetY]: dart.fieldType(dart.nullable(core.double)),
    [_color]: dart.fieldType(typed_data.Float32List)
  }));
  actor_inner_shadow.ActorInnerShadow = class ActorInnerShadow extends actor_shadow.ActorShadow {
    get blendModeId() {
      return 0;
    }
    set blendModeId(value) {
    }
    makeInstance(resetArtboard) {
      let instanceShape = resetArtboard.actor.makeInnerShadow();
      instanceShape.copyShadow(this, resetArtboard);
      return instanceShape;
    }
    static ['_#new#tearOff']() {
      return new actor_inner_shadow.ActorInnerShadow.new();
    }
  };
  (actor_inner_shadow.ActorInnerShadow.new = function() {
    actor_inner_shadow.ActorInnerShadow.__proto__.new.call(this);
    ;
  }).prototype = actor_inner_shadow.ActorInnerShadow.prototype;
  dart.addTypeTests(actor_inner_shadow.ActorInnerShadow);
  dart.addTypeCaches(actor_inner_shadow.ActorInnerShadow);
  dart.setGetterSignature(actor_inner_shadow.ActorInnerShadow, () => ({
    __proto__: dart.getGetters(actor_inner_shadow.ActorInnerShadow.__proto__),
    blendModeId: core.int
  }));
  dart.setSetterSignature(actor_inner_shadow.ActorInnerShadow, () => ({
    __proto__: dart.getSetters(actor_inner_shadow.ActorInnerShadow.__proto__),
    blendModeId: core.int
  }));
  dart.setLibraryUri(actor_inner_shadow.ActorInnerShadow, I[33]);
  actor_drop_shadow.ActorDropShadow = class ActorDropShadow extends actor_shadow.ActorShadow {
    get blendModeId() {
      return 0;
    }
    set blendModeId(value) {
    }
    makeInstance(resetArtboard) {
      let instanceShape = resetArtboard.actor.makeDropShadow();
      instanceShape.copyShadow(this, resetArtboard);
      return instanceShape;
    }
    static ['_#new#tearOff']() {
      return new actor_drop_shadow.ActorDropShadow.new();
    }
  };
  (actor_drop_shadow.ActorDropShadow.new = function() {
    actor_drop_shadow.ActorDropShadow.__proto__.new.call(this);
    ;
  }).prototype = actor_drop_shadow.ActorDropShadow.prototype;
  dart.addTypeTests(actor_drop_shadow.ActorDropShadow);
  dart.addTypeCaches(actor_drop_shadow.ActorDropShadow);
  dart.setGetterSignature(actor_drop_shadow.ActorDropShadow, () => ({
    __proto__: dart.getGetters(actor_drop_shadow.ActorDropShadow.__proto__),
    blendModeId: core.int
  }));
  dart.setSetterSignature(actor_drop_shadow.ActorDropShadow, () => ({
    __proto__: dart.getSetters(actor_drop_shadow.ActorDropShadow.__proto__),
    blendModeId: core.int
  }));
  dart.setLibraryUri(actor_drop_shadow.ActorDropShadow, I[34]);
  var _boneMatrices = dart.privateName(actor_skin, "_boneMatrices");
  actor_skin.ActorSkin = class ActorSkin extends actor_component.ActorComponent {
    get boneMatrices() {
      return this[_boneMatrices];
    }
    completeResolve() {
      let skinnable = T.ActorSkinnableN().as(this.parent);
      if (skinnable == null) {
        return;
      }
      skinnable.skin = this;
      this.artboard.addDependency(this, actor_component.ActorComponent.as(skinnable));
      if (skinnable.isConnectedToBones) {
        let connectedBones = dart.nullCheck(skinnable.connectedBones);
        for (let skinnedBone of connectedBones) {
          this.artboard.addDependency(this, skinnedBone.node);
          let constraints = skinnedBone.node.allConstraints;
          for (let constraint of constraints) {
            this.artboard.addDependency(this, constraint);
          }
        }
      }
    }
    makeInstance(resetArtboard) {
      let instance = new actor_skin.ActorSkin.new();
      instance.copyComponent(this, resetArtboard);
      return instance;
    }
    onDirty(dirt) {
    }
    update(dirt) {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3;
      let skinnable = T.ActorSkinnableN().as(this.parent);
      if (skinnable == null) {
        return;
      }
      if (skinnable.isConnectedToBones) {
        let connectedBones = dart.nullCheck(skinnable.connectedBones);
        let length = (connectedBones[$length] + 1) * 6;
        if (this[_boneMatrices][$length] !== length) {
          this[_boneMatrices] = _native_typed_data.NativeFloat32List.new(length);
          this[_boneMatrices][$_set](0, 1.0);
          this[_boneMatrices][$_set](1, 0.0);
          this[_boneMatrices][$_set](2, 0.0);
          this[_boneMatrices][$_set](3, 1.0);
          this[_boneMatrices][$_set](4, 0.0);
          this[_boneMatrices][$_set](5, 0.0);
        }
        let bidx = 6;
        let mat = new mat2d.Mat2D.new();
        for (let cb of connectedBones) {
          mat2d.Mat2D.multiply(mat, cb.node.worldTransform, cb.inverseBind);
          this[_boneMatrices][$_set]((t4 = bidx, bidx = t4 + 1, t4), mat._get(0));
          this[_boneMatrices][$_set]((t4$ = bidx, bidx = t4$ + 1, t4$), mat._get(1));
          this[_boneMatrices][$_set]((t4$0 = bidx, bidx = t4$0 + 1, t4$0), mat._get(2));
          this[_boneMatrices][$_set]((t4$1 = bidx, bidx = t4$1 + 1, t4$1), mat._get(3));
          this[_boneMatrices][$_set]((t4$2 = bidx, bidx = t4$2 + 1, t4$2), mat._get(4));
          this[_boneMatrices][$_set]((t4$3 = bidx, bidx = t4$3 + 1, t4$3), mat._get(5));
        }
      }
      skinnable.invalidateDrawable();
    }
    static ['_#new#tearOff']() {
      return new actor_skin.ActorSkin.new();
    }
  };
  (actor_skin.ActorSkin.new = function() {
    this[_boneMatrices] = _native_typed_data.NativeFloat32List.new(0);
    actor_skin.ActorSkin.__proto__.new.call(this);
    ;
  }).prototype = actor_skin.ActorSkin.prototype;
  dart.addTypeTests(actor_skin.ActorSkin);
  dart.addTypeCaches(actor_skin.ActorSkin);
  dart.setMethodSignature(actor_skin.ActorSkin, () => ({
    __proto__: dart.getMethods(actor_skin.ActorSkin.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(actor_skin.ActorSkin, () => ({
    __proto__: dart.getGetters(actor_skin.ActorSkin.__proto__),
    boneMatrices: typed_data.Float32List
  }));
  dart.setLibraryUri(actor_skin.ActorSkin, I[35]);
  dart.setFieldSignature(actor_skin.ActorSkin, () => ({
    __proto__: dart.getFields(actor_skin.ActorSkin.__proto__),
    [_boneMatrices]: dart.fieldType(typed_data.Float32List)
  }));
  var boneIdx$0 = dart.privateName(actor_skinnable, "SkinnedBone.boneIdx");
  var bind = dart.privateName(actor_skinnable, "SkinnedBone.bind");
  var inverseBind = dart.privateName(actor_skinnable, "SkinnedBone.inverseBind");
  var __SkinnedBone_node = dart.privateName(actor_skinnable, "_#SkinnedBone#node");
  actor_skinnable.SkinnedBone = class SkinnedBone extends core.Object {
    get boneIdx() {
      return this[boneIdx$0];
    }
    set boneIdx(value) {
      super.boneIdx = value;
    }
    get bind() {
      return this[bind];
    }
    set bind(value) {
      super.bind = value;
    }
    get inverseBind() {
      return this[inverseBind];
    }
    set inverseBind(value) {
      super.inverseBind = value;
    }
    get node() {
      let t4;
      t4 = this[__SkinnedBone_node];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("node")) : t4;
    }
    set node(node$35param) {
      this[__SkinnedBone_node] = node$35param;
    }
    static ['_#new#tearOff'](boneIdx) {
      return new actor_skinnable.SkinnedBone.new(boneIdx);
    }
  };
  (actor_skinnable.SkinnedBone.new = function(boneIdx) {
    this[__SkinnedBone_node] = null;
    this[bind] = new mat2d.Mat2D.new();
    this[inverseBind] = new mat2d.Mat2D.new();
    this[boneIdx$0] = boneIdx;
    ;
  }).prototype = actor_skinnable.SkinnedBone.prototype;
  dart.addTypeTests(actor_skinnable.SkinnedBone);
  dart.addTypeCaches(actor_skinnable.SkinnedBone);
  dart.setGetterSignature(actor_skinnable.SkinnedBone, () => ({
    __proto__: dart.getGetters(actor_skinnable.SkinnedBone.__proto__),
    node: actor_node.ActorNode
  }));
  dart.setSetterSignature(actor_skinnable.SkinnedBone, () => ({
    __proto__: dart.getSetters(actor_skinnable.SkinnedBone.__proto__),
    node: actor_node.ActorNode
  }));
  dart.setLibraryUri(actor_skinnable.SkinnedBone, I[26]);
  dart.setFieldSignature(actor_skinnable.SkinnedBone, () => ({
    __proto__: dart.getFields(actor_skinnable.SkinnedBone.__proto__),
    boneIdx: dart.finalFieldType(core.int),
    [__SkinnedBone_node]: dart.fieldType(dart.nullable(actor_node.ActorNode)),
    bind: dart.finalFieldType(mat2d.Mat2D),
    inverseBind: dart.finalFieldType(mat2d.Mat2D)
  }));
  var vertexDeform = dart.privateName(actor_path, "ActorPath.vertexDeform");
  var __ActorPath__isHidden = dart.privateName(actor_path, "_#ActorPath#_isHidden");
  var __ActorPath__isClosed = dart.privateName(actor_path, "_#ActorPath#_isClosed");
  var __ActorPath__points = dart.privateName(actor_path, "_#ActorPath#_points");
  var _isHidden = dart.privateName(actor_path, "_isHidden");
  var _isClosed = dart.privateName(actor_path, "_isClosed");
  var _points = dart.privateName(actor_path, "_points");
  const ActorNode_ActorSkinnable$36 = class ActorNode_ActorSkinnable extends actor_node.ActorNode {};
  (ActorNode_ActorSkinnable$36.new = function() {
    actor_skinnable.ActorSkinnable.new.call(this);
    ActorNode_ActorSkinnable$36.__proto__.new.call(this);
  }).prototype = ActorNode_ActorSkinnable$36.prototype;
  (ActorNode_ActorSkinnable$36.withArtboard = function(artboard) {
    actor_skinnable.ActorSkinnable.new.call(this);
    ActorNode_ActorSkinnable$36.__proto__.withArtboard.call(this, artboard);
  }).prototype = ActorNode_ActorSkinnable$36.prototype;
  dart.applyMixin(ActorNode_ActorSkinnable$36, actor_skinnable.ActorSkinnable);
  const ActorNode_ActorBasePath$36$ = class ActorNode_ActorBasePath extends ActorNode_ActorSkinnable$36 {};
  (ActorNode_ActorBasePath$36$.new = function() {
    actor_path.ActorBasePath.new.call(this);
    ActorNode_ActorBasePath$36$.__proto__.new.call(this);
  }).prototype = ActorNode_ActorBasePath$36$.prototype;
  (ActorNode_ActorBasePath$36$.withArtboard = function(artboard) {
    actor_path.ActorBasePath.new.call(this);
    ActorNode_ActorBasePath$36$.__proto__.withArtboard.call(this, artboard);
  }).prototype = ActorNode_ActorBasePath$36$.prototype;
  dart.applyMixin(ActorNode_ActorBasePath$36$, actor_path.ActorBasePath);
  actor_path.ActorPath = class ActorPath extends ActorNode_ActorBasePath$36$ {
    get vertexDeform() {
      return this[vertexDeform];
    }
    set vertexDeform(value) {
      this[vertexDeform] = value;
    }
    get [_isHidden]() {
      let t4;
      t4 = this[__ActorPath__isHidden];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_isHidden")) : t4;
    }
    set [_isHidden](library$32package$58flare_flutter$47base$47actor_path$46dart$58$58_isHidden$35param) {
      this[__ActorPath__isHidden] = library$32package$58flare_flutter$47base$47actor_path$46dart$58$58_isHidden$35param;
    }
    get [_isClosed]() {
      let t4;
      t4 = this[__ActorPath__isClosed];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_isClosed")) : t4;
    }
    set [_isClosed](library$32package$58flare_flutter$47base$47actor_path$46dart$58$58_isClosed$35param) {
      this[__ActorPath__isClosed] = library$32package$58flare_flutter$47base$47actor_path$46dart$58$58_isClosed$35param;
    }
    get [_points]() {
      let t4;
      t4 = this[__ActorPath__points];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_points")) : t4;
    }
    set [_points](library$32package$58flare_flutter$47base$47actor_path$46dart$58$58_points$35param) {
      this[__ActorPath__points] = library$32package$58flare_flutter$47base$47actor_path$46dart$58$58_points$35param;
    }
    get deformedPoints() {
      if (!this.isConnectedToBones || this.skin == null) {
        return this[_points];
      }
      let boneMatrices = dart.nullCheck(this.skin).boneMatrices;
      let deformed = T.JSArrayOfPathPoint().of([]);
      for (let point of this[_points]) {
        deformed[$add](point.skin(this.worldTransform, boneMatrices));
      }
      return deformed;
    }
    get isClosed() {
      return this[_isClosed];
    }
    get isPathInWorldSpace() {
      return this.isConnectedToBones;
    }
    get pathTransform() {
      return this.isConnectedToBones ? new mat2d.Mat2D.new() : this.worldTransform;
    }
    get points() {
      return this[_points];
    }
    copyPath(node, resetArtboard) {
      this.copyNode(node, resetArtboard);
      this.copySkinnable(node, resetArtboard);
      this[_isHidden] = node[_isHidden];
      this[_isClosed] = node[_isClosed];
      let pointCount = node[_points][$length];
      this[_points] = T.JSArrayOfPathPoint().of([]);
      for (let i = 0; i < pointCount; i = i + 1) {
        this[_points][$add](node[_points][$_get](i).makeInstance());
      }
      if (node.vertexDeform != null) {
        this.vertexDeform = _native_typed_data.NativeFloat32List.fromList(dart.nullCheck(node.vertexDeform));
      }
    }
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instanceEvent = new actor_path.ActorPath.new();
      instanceEvent.copyPath(this, resetArtboard);
      return instanceEvent;
    }
    makeVertexDeform() {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3, t4$4;
      if (this.vertexDeform != null) {
        return;
      }
      let length = this.points[$fold](core.int, 0, dart.fn((previous, point) => previous + 2 + (point.pointType === path_point.PointType.straight ? 1 : 4), T.intAndPathPointToint()));
      let vertices = _native_typed_data.NativeFloat32List.new(length);
      let readIdx = 0;
      for (let point of this.points) {
        vertices[$_set]((t4 = readIdx, readIdx = t4 + 1, t4), point.translation._get(0));
        vertices[$_set]((t4$ = readIdx, readIdx = t4$ + 1, t4$), point.translation._get(1));
        if (point.pointType === path_point.PointType.straight) {
          vertices[$_set]((t4$0 = readIdx, readIdx = t4$0 + 1, t4$0), path_point.StraightPathPoint.as(point).radius);
        } else {
          let cubicPoint = path_point.CubicPathPoint.as(point);
          vertices[$_set]((t4$1 = readIdx, readIdx = t4$1 + 1, t4$1), cubicPoint.inPoint._get(0));
          vertices[$_set]((t4$2 = readIdx, readIdx = t4$2 + 1, t4$2), cubicPoint.inPoint._get(1));
          vertices[$_set]((t4$3 = readIdx, readIdx = t4$3 + 1, t4$3), cubicPoint.outPoint._get(0));
          vertices[$_set]((t4$4 = readIdx, readIdx = t4$4 + 1, t4$4), cubicPoint.outPoint._get(1));
        }
      }
      this.vertexDeform = vertices;
    }
    markVertexDeformDirty() {
      return this.artboard.addDirt(this, 2, false);
    }
    onDirty(dirt) {
      super.onDirty(dirt);
      if (this.shape != null) {
        dart.nullCheck(this.shape).invalidateShape();
      }
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      this.resolveSkinnable(components);
    }
    update(dirt) {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3, t4$4;
      if (this.vertexDeform != null && (dirt & 2) >>> 0 === 2) {
        let readIdx = 0;
        for (let point of this[_points]) {
          point.translation._set(0, dart.nullCheck(this.vertexDeform)[$_get]((t4 = readIdx, readIdx = t4 + 1, t4)));
          point.translation._set(1, dart.nullCheck(this.vertexDeform)[$_get]((t4$ = readIdx, readIdx = t4$ + 1, t4$)));
          switch (point.pointType) {
            case C[9] || CT.C9:
              {
                path_point.StraightPathPoint.as(point).radius = dart.nullCheck(this.vertexDeform)[$_get]((t4$0 = readIdx, readIdx = t4$0 + 1, t4$0));
                break;
              }
            default:
              {
                let cubicPoint = path_point.CubicPathPoint.as(point);
                cubicPoint.inPoint._set(0, dart.nullCheck(this.vertexDeform)[$_get]((t4$1 = readIdx, readIdx = t4$1 + 1, t4$1)));
                cubicPoint.inPoint._set(1, dart.nullCheck(this.vertexDeform)[$_get]((t4$2 = readIdx, readIdx = t4$2 + 1, t4$2)));
                cubicPoint.outPoint._set(0, dart.nullCheck(this.vertexDeform)[$_get]((t4$3 = readIdx, readIdx = t4$3 + 1, t4$3)));
                cubicPoint.outPoint._set(1, dart.nullCheck(this.vertexDeform)[$_get]((t4$4 = readIdx, readIdx = t4$4 + 1, t4$4)));
                break;
              }
          }
        }
      }
      this.invalidateDrawable();
      super.update(dirt);
    }
    static read(artboard, reader, component) {
      actor_node.ActorNode.read(artboard, reader, component);
      actor_skinnable.ActorSkinnable.read(artboard, reader, component);
      component[_isHidden] = !reader.readBool("isVisible");
      component[_isClosed] = reader.readBool("isClosed");
      reader.openArray("points");
      let pointCount = reader.readUint16Length();
      component[_points] = T.JSArrayOfPathPoint().of([]);
      for (let i = 0; i < pointCount; i = i + 1) {
        reader.openObject("point");
        let point = null;
        let type = path_point.pointTypeLookup[$_get](reader.readUint8("pointType"));
        switch (type) {
          case C[9] || CT.C9:
            {
              {
                point = new path_point.StraightPathPoint.new();
                break;
              }
            }
          default:
            {
              {
                point = new path_point.CubicPathPoint.new(dart.nullCheck(type));
                break;
              }
            }
        }
        point.read(reader, component.isConnectedToBones);
        reader.closeObject();
        component[_points][$add](point);
      }
      reader.closeArray();
      return component;
    }
    static ['_#new#tearOff']() {
      return new actor_path.ActorPath.new();
    }
  };
  (actor_path.ActorPath.new = function() {
    this[__ActorPath__isHidden] = null;
    this[__ActorPath__isClosed] = null;
    this[__ActorPath__points] = null;
    this[vertexDeform] = null;
    actor_path.ActorPath.__proto__.new.call(this);
    ;
  }).prototype = actor_path.ActorPath.prototype;
  dart.addTypeTests(actor_path.ActorPath);
  dart.addTypeCaches(actor_path.ActorPath);
  dart.setMethodSignature(actor_path.ActorPath, () => ({
    __proto__: dart.getMethods(actor_path.ActorPath.__proto__),
    copyPath: dart.fnType(dart.void, [actor_path.ActorPath, actor_artboard.ActorArtboard]),
    invalidatePath: dart.fnType(dart.void, []),
    makeVertexDeform: dart.fnType(dart.void, []),
    markVertexDeformDirty: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_path.ActorPath, () => ['read']);
  dart.setGetterSignature(actor_path.ActorPath, () => ({
    __proto__: dart.getGetters(actor_path.ActorPath.__proto__),
    [_isHidden]: core.bool,
    [_isClosed]: core.bool,
    [_points]: core.List$(path_point.PathPoint),
    isClosed: core.bool,
    pathTransform: mat2d.Mat2D,
    points: core.List$(path_point.PathPoint)
  }));
  dart.setSetterSignature(actor_path.ActorPath, () => ({
    __proto__: dart.getSetters(actor_path.ActorPath.__proto__),
    [_isHidden]: core.bool,
    [_isClosed]: core.bool,
    [_points]: core.List$(path_point.PathPoint)
  }));
  dart.setLibraryUri(actor_path.ActorPath, I[20]);
  dart.setFieldSignature(actor_path.ActorPath, () => ({
    __proto__: dart.getFields(actor_path.ActorPath.__proto__),
    [__ActorPath__isHidden]: dart.fieldType(dart.nullable(core.bool)),
    [__ActorPath__isClosed]: dart.fieldType(dart.nullable(core.bool)),
    [__ActorPath__points]: dart.fieldType(dart.nullable(core.List$(path_point.PathPoint))),
    vertexDeform: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  dart.setStaticFieldSignature(actor_path.ActorPath, () => ['vertexDeformDirty']);
  dart.defineLazy(actor_path.ActorPath, {
    /*actor_path.ActorPath.vertexDeformDirty*/get vertexDeformDirty() {
      return 2;
    }
  }, false);
  var _paths = dart.privateName(actor_shape, "_paths");
  var _strokes = dart.privateName(actor_shape, "_strokes");
  var _fills = dart.privateName(actor_shape, "_fills");
  var _transformAffectsStroke = dart.privateName(actor_shape, "_transformAffectsStroke");
  actor_shape.ActorShape = class ActorShape extends actor_drawable.ActorDrawable {
    get transformAffectsStroke() {
      return this[_transformAffectsStroke];
    }
    get fill() {
      return this[_fills][$isNotEmpty] ? this[_fills][$first] : null;
    }
    get stroke() {
      return this[_strokes][$isNotEmpty] ? this[_strokes][$first] : null;
    }
    get fills() {
      return this[_fills];
    }
    get strokes() {
      return this[_strokes];
    }
    get paths() {
      return this[_paths];
    }
    update(dirt) {
      super.update(dirt);
      this.invalidateShape();
    }
    static read(artboard, reader, component) {
      actor_drawable.ActorDrawable.read(artboard, reader, component);
      if (artboard.actor.version >= 22) {
        component[_transformAffectsStroke] = reader.readBool("transformAffectsStroke");
      }
      return component;
    }
    makeInstance(resetArtboard) {
      let instanceShape = resetArtboard.actor.makeShapeNode(this);
      instanceShape.copyShape(this, resetArtboard);
      return instanceShape;
    }
    copyShape(node, resetArtboard) {
      this.copyDrawable(node, resetArtboard);
      this[_transformAffectsStroke] = node[_transformAffectsStroke];
    }
    computeAABB() {
      let t5, t4, t5$, t4$, t5$0, t4$0, t5$1, t4$1;
      let aabb = null;
      for (let clips of this.clipShapes) {
        for (let clipShape of clips) {
          let bounds = clipShape.shape.computeAABB();
          if (aabb == null) {
            aabb = bounds;
          } else {
            if (bounds._get(0) < aabb._get(0)) {
              aabb._set(0, bounds._get(0));
            }
            if (bounds._get(1) < aabb._get(1)) {
              aabb._set(1, bounds._get(1));
            }
            if (bounds._get(2) > aabb._get(2)) {
              aabb._set(2, bounds._get(2));
            }
            if (bounds._get(3) > aabb._get(3)) {
              aabb._set(3, bounds._get(3));
            }
          }
        }
      }
      if (aabb != null) {
        return aabb;
      }
      for (let component of dart.nullCheck(this.children)) {
        if (!actor_path.ActorBasePath.is(component)) {
          continue;
        }
        let path = actor_path.ActorBasePath.as(component);
        let pathAABB = path.getPathAABB();
        if (aabb == null) {
          aabb = pathAABB;
        } else {
          aabb._set(0, math.min(core.double, aabb._get(0), pathAABB._get(0)));
          aabb._set(1, math.min(core.double, aabb._get(1), pathAABB._get(1)));
          aabb._set(2, math.max(core.double, aabb._get(2), pathAABB._get(2)));
          aabb._set(3, math.max(core.double, aabb._get(3), pathAABB._get(3)));
        }
      }
      let minX = 1.7976931348623157e+308;
      let minY = 1.7976931348623157e+308;
      let maxX = -1.7976931348623157e+308;
      let maxY = -1.7976931348623157e+308;
      if (aabb == null) {
        return new aabb$.AABB.fromValues(minX, minY, maxX, maxY);
      }
      let world = this.worldTransform;
      let maxStroke = 0.0;
      for (let stroke of this[_strokes]) {
        if (stroke.width > maxStroke) {
          maxStroke = stroke.width;
        }
      }
      let padStroke = maxStroke / 2.0;
      t4 = aabb;
      t5 = 0;
      t4._set(t5, t4._get(t5) - padStroke);
      t4$ = aabb;
      t5$ = 2;
      t4$._set(t5$, t4$._get(t5$) + padStroke);
      t4$0 = aabb;
      t5$0 = 1;
      t4$0._set(t5$0, t4$0._get(t5$0) - padStroke);
      t4$1 = aabb;
      t5$1 = 3;
      t4$1._set(t5$1, t4$1._get(t5$1) + padStroke);
      let points = T.JSArrayOfVec2D().of([new vec2d.Vec2D.fromValues(aabb._get(0), aabb._get(1)), new vec2d.Vec2D.fromValues(aabb._get(2), aabb._get(1)), new vec2d.Vec2D.fromValues(aabb._get(2), aabb._get(3)), new vec2d.Vec2D.fromValues(aabb._get(0), aabb._get(3))]);
      for (let i = 0; i < points[$length]; i = i + 1) {
        let pt = points[$_get](i);
        let wp = vec2d.Vec2D.transformMat2D(pt, pt, world);
        if (wp._get(0) < minX) {
          minX = wp._get(0);
        }
        if (wp._get(1) < minY) {
          minY = wp._get(1);
        }
        if (wp._get(0) > maxX) {
          maxX = wp._get(0);
        }
        if (wp._get(1) > maxY) {
          maxY = wp._get(1);
        }
      }
      return new aabb$.AABB.fromValues(minX, minY, maxX, maxY);
    }
    addStroke(stroke) {
      this[_strokes][$add](stroke);
    }
    addFill(fill) {
      this[_fills][$add](fill);
    }
    initializeGraphics() {
      for (let stroke of this[_strokes]) {
        stroke.initializeGraphics();
      }
      for (let fill of this[_fills]) {
        fill.initializeGraphics();
      }
    }
    get blendModeId() {
      return 0;
    }
    set blendModeId(value) {
    }
    addPath(path) {
      if (this[_paths][$contains](path)) {
        return false;
      }
      this[_paths][$add](path);
      return true;
    }
    removePath(path) {
      return this[_paths][$remove](path);
    }
    static ['_#new#tearOff']() {
      return new actor_shape.ActorShape.new();
    }
  };
  (actor_shape.ActorShape.new = function() {
    this[_paths] = T.JSArrayOfActorBasePath().of([]);
    this[_strokes] = T.JSArrayOfActorStroke().of([]);
    this[_fills] = T.JSArrayOfActorFill().of([]);
    this[_transformAffectsStroke] = false;
    actor_shape.ActorShape.__proto__.new.call(this);
    ;
  }).prototype = actor_shape.ActorShape.prototype;
  dart.addTypeTests(actor_shape.ActorShape);
  dart.addTypeCaches(actor_shape.ActorShape);
  dart.setMethodSignature(actor_shape.ActorShape, () => ({
    __proto__: dart.getMethods(actor_shape.ActorShape.__proto__),
    copyShape: dart.fnType(dart.void, [actor_shape.ActorShape, actor_artboard.ActorArtboard]),
    computeAABB: dart.fnType(aabb$.AABB, []),
    addStroke: dart.fnType(dart.void, [actor_color.ActorStroke]),
    addFill: dart.fnType(dart.void, [actor_color.ActorFill]),
    addPath: dart.fnType(core.bool, [actor_path.ActorBasePath]),
    removePath: dart.fnType(core.bool, [actor_path.ActorBasePath])
  }));
  dart.setStaticMethodSignature(actor_shape.ActorShape, () => ['read']);
  dart.setGetterSignature(actor_shape.ActorShape, () => ({
    __proto__: dart.getGetters(actor_shape.ActorShape.__proto__),
    transformAffectsStroke: core.bool,
    fill: dart.nullable(actor_color.ActorFill),
    stroke: dart.nullable(actor_color.ActorStroke),
    fills: core.List$(actor_color.ActorFill),
    strokes: core.List$(actor_color.ActorStroke),
    paths: core.List$(actor_path.ActorBasePath),
    blendModeId: core.int
  }));
  dart.setSetterSignature(actor_shape.ActorShape, () => ({
    __proto__: dart.getSetters(actor_shape.ActorShape.__proto__),
    blendModeId: core.int
  }));
  dart.setLibraryUri(actor_shape.ActorShape, I[36]);
  dart.setFieldSignature(actor_shape.ActorShape, () => ({
    __proto__: dart.getFields(actor_shape.ActorShape.__proto__),
    [_paths]: dart.finalFieldType(core.List$(actor_path.ActorBasePath)),
    [_strokes]: dart.finalFieldType(core.List$(actor_color.ActorStroke)),
    [_fills]: dart.finalFieldType(core.List$(actor_color.ActorFill)),
    [_transformAffectsStroke]: dart.fieldType(core.bool)
  }));
  actor_drawable.BlendModes = class BlendModes extends core._Enum {
    toString() {
      return "BlendModes." + this[_name];
    }
  };
  (actor_drawable.BlendModes.new = function(index, name) {
    actor_drawable.BlendModes.__proto__.new.call(this, index, name);
    ;
  }).prototype = actor_drawable.BlendModes.prototype;
  dart.addTypeTests(actor_drawable.BlendModes);
  dart.addTypeCaches(actor_drawable.BlendModes);
  dart.setLibraryUri(actor_drawable.BlendModes, I[25]);
  dart.setStaticFieldSignature(actor_drawable.BlendModes, () => ['values', 'normal', 'multiply', 'screen', 'additive']);
  dart.defineExtensionMethods(actor_drawable.BlendModes, ['toString']);
  dart.defineLazy(actor_drawable.BlendModes, {
    /*actor_drawable.BlendModes.values*/get values() {
      return C[10] || CT.C10;
    },
    /*actor_drawable.BlendModes.normal*/get normal() {
      return C[11] || CT.C11;
    },
    /*actor_drawable.BlendModes.multiply*/get multiply() {
      return C[12] || CT.C12;
    },
    /*actor_drawable.BlendModes.screen*/get screen() {
      return C[13] || CT.C13;
    },
    /*actor_drawable.BlendModes.additive*/get additive() {
      return C[14] || CT.C14;
    }
  }, false);
  var shape$ = dart.privateName(actor_drawable, "ClipShape.shape");
  var intersect$ = dart.privateName(actor_drawable, "ClipShape.intersect");
  actor_drawable.ClipShape = class ClipShape extends core.Object {
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get intersect() {
      return this[intersect$];
    }
    set intersect(value) {
      super.intersect = value;
    }
    static ['_#new#tearOff'](shape, intersect) {
      return new actor_drawable.ClipShape.new(shape, intersect);
    }
  };
  (actor_drawable.ClipShape.new = function(shape, intersect) {
    this[shape$] = shape;
    this[intersect$] = intersect;
    ;
  }).prototype = actor_drawable.ClipShape.prototype;
  dart.addTypeTests(actor_drawable.ClipShape);
  dart.addTypeCaches(actor_drawable.ClipShape);
  dart.setLibraryUri(actor_drawable.ClipShape, I[25]);
  dart.setFieldSignature(actor_drawable.ClipShape, () => ({
    __proto__: dart.getFields(actor_drawable.ClipShape.__proto__),
    shape: dart.finalFieldType(actor_shape.ActorShape),
    intersect: dart.finalFieldType(core.bool)
  }));
  var _drawables = dart.privateName(actor_layer_effect_renderer, "_drawables");
  var _renderMasks = dart.privateName(actor_layer_effect_renderer, "_renderMasks");
  var _blur = dart.privateName(actor_layer_effect_renderer, "_blur");
  var _dropShadows = dart.privateName(actor_layer_effect_renderer, "_dropShadows");
  var _innerShadows = dart.privateName(actor_layer_effect_renderer, "_innerShadows");
  actor_layer_effect_renderer.ActorLayerEffectRenderer = class ActorLayerEffectRenderer extends actor_drawable.ActorDrawable {
    get blendModeId() {
      return 0;
    }
    set blendModeId(value) {
    }
    get blur() {
      return this[_blur];
    }
    get drawables() {
      return this[_drawables];
    }
    get dropShadows() {
      return this[_dropShadows];
    }
    get innerShadows() {
      return this[_innerShadows];
    }
    get renderMasks() {
      return this[_renderMasks];
    }
    completeResolve() {
      let t6;
      super.completeResolve();
      this[_drawables][$clear]();
      t6 = this.parent;
      t6 == null ? null : t6.all(dart.fn(node => {
        if (node[$_equals](this)) {
          return false;
        } else if (actor_node.ActorNode.is(node) && node.layerEffect != null && !dart.equals(node.layerEffect, this)) {
          this[_drawables][$add](dart.nullCheck(node.layerEffect));
          return false;
        }
        if (actor_drawable.ActorDrawable.is(node)) {
          this[_drawables][$add](node);
        }
        return true;
      }, T.ActorComponentTobool()));
      this[_drawables][$forEach](C[15] || CT.C15);
      this.sortDrawables();
      this.computeMasks();
      this.findEffects();
    }
    computeAABB() {
      return this.artboard.artboardAABB();
    }
    computeMasks() {
      let t6;
      this[_renderMasks][$clear]();
      let masks = dart.nullCheck(dart.nullCheck(this.parent).children)[$whereType](actor_mask.ActorMask)[$toList]({growable: false});
      for (let mask of masks) {
        let renderMask = new actor_layer_effect_renderer.ActorLayerEffectRendererMask.new(mask);
        t6 = mask.source;
        t6 == null ? null : t6.all(dart.fn(child => {
          if (child[$_equals](this.parent)) {
            return false;
          }
          if (actor_drawable.ActorDrawable.is(child)) {
            if (child[$_equals](this)) {
              return false;
            } else if (child.layerEffect != null) {
              renderMask.drawables[$add](dart.nullCheck(child.layerEffect));
              return false;
            } else {
              renderMask.drawables[$add](child);
            }
          }
          return true;
        }, T.ActorComponentTobool()));
        if (renderMask.drawables[$isNotEmpty]) {
          this[_renderMasks][$add](renderMask);
        }
      }
    }
    findEffects() {
      let blurs = dart.nullCheck(dart.nullCheck(this.parent).children)[$where](dart.fn(child => actor_blur.ActorBlur.is(child) && !actor_shadow.ActorShadow.is(child), T.ActorComponentTobool()))[$toList]({growable: false});
      this[_blur] = blurs[$isNotEmpty] ? actor_blur.ActorBlur.as(blurs[$first]) : null;
      this[_dropShadows] = dart.nullCheck(dart.nullCheck(this.parent).children)[$whereType](actor_drop_shadow.ActorDropShadow)[$toList]({growable: false});
      this[_innerShadows] = dart.nullCheck(dart.nullCheck(this.parent).children)[$whereType](actor_inner_shadow.ActorInnerShadow)[$toList]({growable: false});
    }
    makeInstance(resetArtboard) {
      let instanceNode = resetArtboard.actor.makeLayerEffectRenderer();
      instanceNode.copyDrawable(this, resetArtboard);
      return instanceNode;
    }
    onParentChanged(from, to) {
      let t6, t6$;
      super.onParentChanged(from, to);
      t6 = from;
      t6 == null ? null : t6.findLayerEffect();
      t6$ = to;
      t6$ == null ? null : t6$.findLayerEffect();
      this.findEffects();
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      dart.nullCheck(this.parent).findLayerEffect();
    }
    sortDrawables() {
      this[_drawables][$sort](dart.fn((a, b) => dart.nullCheck(a).drawOrder - dart.nullCheck(b).drawOrder, T.ActorDrawableNAndActorDrawableNToint()));
    }
    static ['_#new#tearOff']() {
      return new actor_layer_effect_renderer.ActorLayerEffectRenderer.new();
    }
  };
  (actor_layer_effect_renderer.ActorLayerEffectRenderer.new = function() {
    this[_drawables] = T.JSArrayOfActorDrawable().of([]);
    this[_renderMasks] = T.JSArrayOfActorLayerEffectRendererMask().of([]);
    this[_blur] = null;
    this[_dropShadows] = T.JSArrayOfActorDropShadow().of([]);
    this[_innerShadows] = T.JSArrayOfActorInnerShadow().of([]);
    actor_layer_effect_renderer.ActorLayerEffectRenderer.__proto__.new.call(this);
    ;
  }).prototype = actor_layer_effect_renderer.ActorLayerEffectRenderer.prototype;
  dart.addTypeTests(actor_layer_effect_renderer.ActorLayerEffectRenderer);
  dart.addTypeCaches(actor_layer_effect_renderer.ActorLayerEffectRenderer);
  dart.setMethodSignature(actor_layer_effect_renderer.ActorLayerEffectRenderer, () => ({
    __proto__: dart.getMethods(actor_layer_effect_renderer.ActorLayerEffectRenderer.__proto__),
    computeAABB: dart.fnType(aabb$.AABB, []),
    computeMasks: dart.fnType(dart.void, []),
    findEffects: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_layer_effect_renderer.ActorLayerEffectRenderer, [actor_artboard.ActorArtboard]),
    sortDrawables: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_layer_effect_renderer.ActorLayerEffectRenderer, () => ({
    __proto__: dart.getGetters(actor_layer_effect_renderer.ActorLayerEffectRenderer.__proto__),
    blendModeId: core.int,
    blur: dart.nullable(actor_blur.ActorBlur),
    drawables: core.List$(actor_drawable.ActorDrawable),
    dropShadows: core.List$(actor_drop_shadow.ActorDropShadow),
    innerShadows: core.List$(actor_inner_shadow.ActorInnerShadow),
    renderMasks: core.List$(actor_layer_effect_renderer.ActorLayerEffectRendererMask)
  }));
  dart.setSetterSignature(actor_layer_effect_renderer.ActorLayerEffectRenderer, () => ({
    __proto__: dart.getSetters(actor_layer_effect_renderer.ActorLayerEffectRenderer.__proto__),
    blendModeId: core.int
  }));
  dart.setLibraryUri(actor_layer_effect_renderer.ActorLayerEffectRenderer, I[37]);
  dart.setFieldSignature(actor_layer_effect_renderer.ActorLayerEffectRenderer, () => ({
    __proto__: dart.getFields(actor_layer_effect_renderer.ActorLayerEffectRenderer.__proto__),
    [_drawables]: dart.finalFieldType(core.List$(actor_drawable.ActorDrawable)),
    [_renderMasks]: dart.finalFieldType(core.List$(actor_layer_effect_renderer.ActorLayerEffectRendererMask)),
    [_blur]: dart.fieldType(dart.nullable(actor_blur.ActorBlur)),
    [_dropShadows]: dart.fieldType(core.List$(actor_drop_shadow.ActorDropShadow)),
    [_innerShadows]: dart.fieldType(core.List$(actor_inner_shadow.ActorInnerShadow))
  }));
  var mask$ = dart.privateName(actor_layer_effect_renderer, "ActorLayerEffectRendererMask.mask");
  var drawables = dart.privateName(actor_layer_effect_renderer, "ActorLayerEffectRendererMask.drawables");
  actor_layer_effect_renderer.ActorLayerEffectRendererMask = class ActorLayerEffectRendererMask extends core.Object {
    get mask() {
      return this[mask$];
    }
    set mask(value) {
      super.mask = value;
    }
    get drawables() {
      return this[drawables];
    }
    set drawables(value) {
      super.drawables = value;
    }
    static ['_#new#tearOff'](mask) {
      return new actor_layer_effect_renderer.ActorLayerEffectRendererMask.new(mask);
    }
  };
  (actor_layer_effect_renderer.ActorLayerEffectRendererMask.new = function(mask) {
    this[drawables] = T.JSArrayOfActorDrawable().of([]);
    this[mask$] = mask;
    ;
  }).prototype = actor_layer_effect_renderer.ActorLayerEffectRendererMask.prototype;
  dart.addTypeTests(actor_layer_effect_renderer.ActorLayerEffectRendererMask);
  dart.addTypeCaches(actor_layer_effect_renderer.ActorLayerEffectRendererMask);
  dart.setLibraryUri(actor_layer_effect_renderer.ActorLayerEffectRendererMask, I[37]);
  dart.setFieldSignature(actor_layer_effect_renderer.ActorLayerEffectRendererMask, () => ({
    __proto__: dart.getFields(actor_layer_effect_renderer.ActorLayerEffectRendererMask.__proto__),
    mask: dart.finalFieldType(actor_mask.ActorMask),
    drawables: dart.finalFieldType(core.List$(actor_drawable.ActorDrawable))
  }));
  actor_layer_effect_renderer._computeLayerNode = function _computeLayerNode(drawable) {
    let parent = drawable;
    while (parent != null) {
      if (parent.layerEffect != null) {
        dart.nullCheck(drawable).layerEffectRenderParent = parent;
        return;
      }
      parent = parent.parent;
    }
    dart.nullCheck(drawable).layerEffectRenderParent = null;
  };
  var clipIdx$ = dart.privateName(actor_node, "ActorClip.clipIdx");
  var intersect = dart.privateName(actor_node, "ActorClip.intersect");
  var __ActorClip_node = dart.privateName(actor_node, "_#ActorClip#node");
  actor_node.ActorClip = class ActorClip extends core.Object {
    get clipIdx() {
      return this[clipIdx$];
    }
    set clipIdx(value) {
      super.clipIdx = value;
    }
    get intersect() {
      return this[intersect];
    }
    set intersect(value) {
      this[intersect] = value;
    }
    get node() {
      let t6;
      t6 = this[__ActorClip_node];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("node")) : t6;
    }
    set node(node$35param) {
      this[__ActorClip_node] = node$35param;
    }
    static ['_#new#tearOff'](clipIdx) {
      return new actor_node.ActorClip.new(clipIdx);
    }
    static ['_#copy#tearOff'](from) {
      return new actor_node.ActorClip.copy(from);
    }
  };
  (actor_node.ActorClip.new = function(clipIdx) {
    this[intersect] = true;
    this[__ActorClip_node] = null;
    this[clipIdx$] = clipIdx;
    ;
  }).prototype = actor_node.ActorClip.prototype;
  (actor_node.ActorClip.copy = function(from) {
    this[intersect] = true;
    this[__ActorClip_node] = null;
    this[clipIdx$] = from.clipIdx;
    this[intersect] = from.intersect;
    ;
  }).prototype = actor_node.ActorClip.prototype;
  dart.addTypeTests(actor_node.ActorClip);
  dart.addTypeCaches(actor_node.ActorClip);
  dart.setGetterSignature(actor_node.ActorClip, () => ({
    __proto__: dart.getGetters(actor_node.ActorClip.__proto__),
    node: actor_node.ActorNode
  }));
  dart.setSetterSignature(actor_node.ActorClip, () => ({
    __proto__: dart.getSetters(actor_node.ActorClip.__proto__),
    node: actor_node.ActorNode
  }));
  dart.setLibraryUri(actor_node.ActorClip, I[10]);
  dart.setFieldSignature(actor_node.ActorClip, () => ({
    __proto__: dart.getFields(actor_node.ActorClip.__proto__),
    clipIdx: dart.finalFieldType(core.int),
    intersect: dart.fieldType(core.bool),
    [__ActorClip_node]: dart.fieldType(dart.nullable(actor_node.ActorNode))
  }));
  var _color$ = dart.privateName(actor_color, "_color");
  var _opacity$ = dart.privateName(actor_color, "_opacity");
  actor_color.ActorPaint = class ActorPaint extends actor_component.ActorComponent {
    get opacity() {
      return this[_opacity$];
    }
    set opacity(value) {
      if (value === this[_opacity$]) {
        return;
      }
      this[_opacity$] = value;
      this.markPaintDirty();
    }
    get shape() {
      return actor_shape.ActorShape.as(this.parent);
    }
    completeResolve() {
      this.artboard.addDependency(this, dart.nullCheck(this.parent));
    }
    copyPaint(component, resetArtboard) {
      this.copyComponent(component, resetArtboard);
      this.opacity = component.opacity;
    }
    markPaintDirty() {
      this.artboard.addDirt(this, 4, false);
    }
    static read(artboard, reader, component) {
      actor_component.ActorComponent.read(artboard, reader, component);
      component.opacity = reader.readFloat32("opacity");
      return component;
    }
  };
  (actor_color.ActorPaint.new = function() {
    this[_opacity$] = 1.0;
    actor_color.ActorPaint.__proto__.new.call(this);
    ;
  }).prototype = actor_color.ActorPaint.prototype;
  dart.addTypeTests(actor_color.ActorPaint);
  dart.addTypeCaches(actor_color.ActorPaint);
  dart.setMethodSignature(actor_color.ActorPaint, () => ({
    __proto__: dart.getMethods(actor_color.ActorPaint.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    copyPaint: dart.fnType(dart.void, [actor_color.ActorPaint, actor_artboard.ActorArtboard]),
    markPaintDirty: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(actor_color.ActorPaint, () => ['read']);
  dart.setGetterSignature(actor_color.ActorPaint, () => ({
    __proto__: dart.getGetters(actor_color.ActorPaint.__proto__),
    opacity: core.double,
    shape: actor_shape.ActorShape
  }));
  dart.setSetterSignature(actor_color.ActorPaint, () => ({
    __proto__: dart.getSetters(actor_color.ActorPaint.__proto__),
    opacity: core.double
  }));
  dart.setLibraryUri(actor_color.ActorPaint, I[38]);
  dart.setFieldSignature(actor_color.ActorPaint, () => ({
    __proto__: dart.getFields(actor_color.ActorPaint.__proto__),
    [_opacity$]: dart.fieldType(core.double)
  }));
  actor_color.ActorColor = class ActorColor extends actor_color.ActorPaint {
    get color() {
      return this[_color$];
    }
    set color(value) {
      if (value[$length] !== 4) {
        return;
      }
      this[_color$][$_set](0, value[$_get](0));
      this[_color$][$_set](1, value[$_get](1));
      this[_color$][$_set](2, value[$_get](2));
      this[_color$][$_set](3, value[$_get](3));
      this.markPaintDirty();
    }
    get displayColor() {
      let t6;
      t6 = this.artboard.overrideColor;
      return t6 == null ? this[_color$] : t6;
    }
    copyColor(node, resetArtboard) {
      this.copyPaint(node, resetArtboard);
      this[_color$][$_set](0, node[_color$][$_get](0));
      this[_color$][$_set](1, node[_color$][$_get](1));
      this[_color$][$_set](2, node[_color$][$_get](2));
      this[_color$][$_set](3, node[_color$][$_get](3));
    }
    onDirty(dirt) {
    }
    update(dirt) {
    }
    static read(artboard, reader, component) {
      actor_color.ActorPaint.read(artboard, reader, component);
      component[_color$] = reader.readFloat32Array(4, "color");
      return component;
    }
  };
  (actor_color.ActorColor.new = function() {
    this[_color$] = _native_typed_data.NativeFloat32List.new(4);
    actor_color.ActorColor.__proto__.new.call(this);
    ;
  }).prototype = actor_color.ActorColor.prototype;
  dart.addTypeTests(actor_color.ActorColor);
  dart.addTypeCaches(actor_color.ActorColor);
  dart.setMethodSignature(actor_color.ActorColor, () => ({
    __proto__: dart.getMethods(actor_color.ActorColor.__proto__),
    copyColor: dart.fnType(dart.void, [actor_color.ActorColor, actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_color.ActorColor, () => ['read']);
  dart.setGetterSignature(actor_color.ActorColor, () => ({
    __proto__: dart.getGetters(actor_color.ActorColor.__proto__),
    color: typed_data.Float32List,
    displayColor: typed_data.Float32List
  }));
  dart.setSetterSignature(actor_color.ActorColor, () => ({
    __proto__: dart.getSetters(actor_color.ActorColor.__proto__),
    color: typed_data.Float32List
  }));
  dart.setLibraryUri(actor_color.ActorColor, I[38]);
  dart.setFieldSignature(actor_color.ActorColor, () => ({
    __proto__: dart.getFields(actor_color.ActorColor.__proto__),
    [_color$]: dart.fieldType(typed_data.Float32List)
  }));
  var _fillRule = dart.privateName(actor_color, "ActorFill._fillRule");
  var _fillRule$ = dart.privateName(actor_color, "_fillRule");
  actor_color.ActorFill = class ActorFill extends core.Object {
    get [_fillRule$]() {
      return this[_fillRule];
    }
    set [_fillRule$](value) {
      this[_fillRule] = value;
    }
    get fillRule() {
      return this[_fillRule$];
    }
    copyFill(node, resetArtboard) {
      this[_fillRule$] = node[_fillRule$];
    }
    static read(artboard, reader, component) {
      let t6;
      component[_fillRule$] = (t6 = actor_color.fillRuleLookup[$_get](reader.readUint8("fillRule")), t6 == null ? actor_color.FillRule.evenOdd : t6);
    }
  };
  (actor_color.ActorFill.new = function() {
    this[_fillRule] = actor_color.FillRule.evenOdd;
    ;
  }).prototype = actor_color.ActorFill.prototype;
  dart.addTypeTests(actor_color.ActorFill);
  dart.addTypeCaches(actor_color.ActorFill);
  dart.setMethodSignature(actor_color.ActorFill, () => ({
    __proto__: dart.getMethods(actor_color.ActorFill.__proto__),
    copyFill: dart.fnType(dart.void, [actor_color.ActorFill, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.ActorFill, () => ['read']);
  dart.setGetterSignature(actor_color.ActorFill, () => ({
    __proto__: dart.getGetters(actor_color.ActorFill.__proto__),
    fillRule: actor_color.FillRule
  }));
  dart.setLibraryUri(actor_color.ActorFill, I[38]);
  dart.setFieldSignature(actor_color.ActorFill, () => ({
    __proto__: dart.getFields(actor_color.ActorFill.__proto__),
    [_fillRule$]: dart.fieldType(actor_color.FillRule)
  }));
  var _width$ = dart.privateName(actor_color, "ActorStroke._width");
  var _cap = dart.privateName(actor_color, "ActorStroke._cap");
  var _join = dart.privateName(actor_color, "ActorStroke._join");
  var _trim = dart.privateName(actor_color, "ActorStroke._trim");
  var _trimStart = dart.privateName(actor_color, "ActorStroke._trimStart");
  var _trimEnd = dart.privateName(actor_color, "ActorStroke._trimEnd");
  var _trimOffset = dart.privateName(actor_color, "ActorStroke._trimOffset");
  var _width$0 = dart.privateName(actor_color, "_width");
  var _cap$ = dart.privateName(actor_color, "_cap");
  var _join$ = dart.privateName(actor_color, "_join");
  var _trim$ = dart.privateName(actor_color, "_trim");
  var _trimStart$ = dart.privateName(actor_color, "_trimStart");
  var _trimEnd$ = dart.privateName(actor_color, "_trimEnd");
  var _trimOffset$ = dart.privateName(actor_color, "_trimOffset");
  actor_color.ActorStroke = class ActorStroke extends core.Object {
    get [_width$0]() {
      return this[_width$];
    }
    set [_width$0](value) {
      this[_width$] = value;
    }
    get [_cap$]() {
      return this[_cap];
    }
    set [_cap$](value) {
      this[_cap] = value;
    }
    get [_join$]() {
      return this[_join];
    }
    set [_join$](value) {
      this[_join] = value;
    }
    get [_trim$]() {
      return this[_trim];
    }
    set [_trim$](value) {
      this[_trim] = value;
    }
    get [_trimStart$]() {
      return this[_trimStart];
    }
    set [_trimStart$](value) {
      this[_trimStart] = value;
    }
    get [_trimEnd$]() {
      return this[_trimEnd];
    }
    set [_trimEnd$](value) {
      this[_trimEnd] = value;
    }
    get [_trimOffset$]() {
      return this[_trimOffset];
    }
    set [_trimOffset$](value) {
      this[_trimOffset] = value;
    }
    get cap() {
      return this[_cap$];
    }
    get isTrimmed() {
      return this[_trim$] !== actor_color.TrimPath.off;
    }
    get join() {
      return this[_join$];
    }
    get trim() {
      return this[_trim$];
    }
    get trimEnd() {
      return this[_trimEnd$];
    }
    set trimEnd(value) {
      if (this[_trimEnd$] === value) {
        return;
      }
      this[_trimEnd$] = value;
      this.markPathEffectsDirty();
    }
    get trimOffset() {
      return this[_trimOffset$];
    }
    set trimOffset(value) {
      if (this[_trimOffset$] === value) {
        return;
      }
      this[_trimOffset$] = value;
      this.markPathEffectsDirty();
    }
    get trimStart() {
      return this[_trimStart$];
    }
    set trimStart(value) {
      if (this[_trimStart$] === value) {
        return;
      }
      this[_trimStart$] = value;
      this.markPathEffectsDirty();
    }
    get width() {
      return this[_width$0];
    }
    set width(value) {
      if (value === this[_width$0]) {
        return;
      }
      this[_width$0] = value;
      this.markPaintDirty();
    }
    copyStroke(node, resetArtboard) {
      this.width = node.width;
      this[_cap$] = node[_cap$];
      this[_join$] = node[_join$];
      this[_trim$] = node[_trim$];
      this[_trimStart$] = node[_trimStart$];
      this[_trimEnd$] = node[_trimEnd$];
      this[_trimOffset$] = node[_trimOffset$];
    }
    static read(artboard, reader, component) {
      let t6;
      component.width = reader.readFloat32("width");
      if (artboard.actor.version >= 19) {
        let capValue = actor_color.strokeCapLookup[$_get](reader.readUint8("cap"));
        if (capValue != null) {
          component[_cap$] = capValue;
        }
        let joinValue = actor_color.strokeJoinLookup[$_get](reader.readUint8("join"));
        if (joinValue != null) {
          component[_join$] = joinValue;
        }
        if (artboard.actor.version >= 20) {
          component[_trim$] = (t6 = actor_color.trimPathLookup[$_get](reader.readUint8("trim")), t6 == null ? actor_color.TrimPath.off : t6);
          if (component.isTrimmed) {
            component[_trimStart$] = reader.readFloat32("start");
            component[_trimEnd$] = reader.readFloat32("end");
            component[_trimOffset$] = reader.readFloat32("offset");
          }
        }
      }
    }
  };
  (actor_color.ActorStroke.new = function() {
    this[_width$] = 1.0;
    this[_cap] = actor_color.StrokeCap.butt;
    this[_join] = actor_color.StrokeJoin.miter;
    this[_trim] = actor_color.TrimPath.off;
    this[_trimStart] = 0.0;
    this[_trimEnd] = 0.0;
    this[_trimOffset] = 0.0;
    ;
  }).prototype = actor_color.ActorStroke.prototype;
  dart.addTypeTests(actor_color.ActorStroke);
  dart.addTypeCaches(actor_color.ActorStroke);
  dart.setMethodSignature(actor_color.ActorStroke, () => ({
    __proto__: dart.getMethods(actor_color.ActorStroke.__proto__),
    copyStroke: dart.fnType(dart.void, [actor_color.ActorStroke, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.ActorStroke, () => ['read']);
  dart.setGetterSignature(actor_color.ActorStroke, () => ({
    __proto__: dart.getGetters(actor_color.ActorStroke.__proto__),
    cap: actor_color.StrokeCap,
    isTrimmed: core.bool,
    join: actor_color.StrokeJoin,
    trim: actor_color.TrimPath,
    trimEnd: core.double,
    trimOffset: core.double,
    trimStart: core.double,
    width: core.double
  }));
  dart.setSetterSignature(actor_color.ActorStroke, () => ({
    __proto__: dart.getSetters(actor_color.ActorStroke.__proto__),
    trimEnd: core.double,
    trimOffset: core.double,
    trimStart: core.double,
    width: core.double
  }));
  dart.setLibraryUri(actor_color.ActorStroke, I[38]);
  dart.setFieldSignature(actor_color.ActorStroke, () => ({
    __proto__: dart.getFields(actor_color.ActorStroke.__proto__),
    [_width$0]: dart.fieldType(core.double),
    [_cap$]: dart.fieldType(actor_color.StrokeCap),
    [_join$]: dart.fieldType(actor_color.StrokeJoin),
    [_trim$]: dart.fieldType(actor_color.TrimPath),
    [_trimStart$]: dart.fieldType(core.double),
    [_trimEnd$]: dart.fieldType(core.double),
    [_trimOffset$]: dart.fieldType(core.double)
  }));
  const ActorColor_ActorFill$36 = class ActorColor_ActorFill extends actor_color.ActorColor {};
  (ActorColor_ActorFill$36.new = function() {
    actor_color.ActorFill.new.call(this);
    ActorColor_ActorFill$36.__proto__.new.call(this);
  }).prototype = ActorColor_ActorFill$36.prototype;
  dart.applyMixin(ActorColor_ActorFill$36, actor_color.ActorFill);
  actor_color.ColorFill = class ColorFill extends ActorColor_ActorFill$36 {
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addFill(this);
      }
    }
    copyColorFill(node, resetArtboard) {
      this.copyColor(node, resetArtboard);
      this.copyFill(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.ActorColor.read(artboard, reader, component);
      actor_color.ActorFill.read(artboard, reader, component);
      return component;
    }
  };
  (actor_color.ColorFill.new = function() {
    actor_color.ColorFill.__proto__.new.call(this);
    ;
  }).prototype = actor_color.ColorFill.prototype;
  dart.addTypeTests(actor_color.ColorFill);
  dart.addTypeCaches(actor_color.ColorFill);
  dart.setMethodSignature(actor_color.ColorFill, () => ({
    __proto__: dart.getMethods(actor_color.ColorFill.__proto__),
    copyColorFill: dart.fnType(dart.void, [actor_color.ColorFill, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.ColorFill, () => ['read']);
  dart.setLibraryUri(actor_color.ColorFill, I[38]);
  const ActorColor_ActorStroke$36 = class ActorColor_ActorStroke extends actor_color.ActorColor {};
  (ActorColor_ActorStroke$36.new = function() {
    actor_color.ActorStroke.new.call(this);
    ActorColor_ActorStroke$36.__proto__.new.call(this);
  }).prototype = ActorColor_ActorStroke$36.prototype;
  dart.applyMixin(ActorColor_ActorStroke$36, actor_color.ActorStroke);
  actor_color.ColorStroke = class ColorStroke extends ActorColor_ActorStroke$36 {
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addStroke(this);
      }
    }
    copyColorStroke(node, resetArtboard) {
      this.copyColor(node, resetArtboard);
      this.copyStroke(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.ActorColor.read(artboard, reader, component);
      actor_color.ActorStroke.read(artboard, reader, component);
      return component;
    }
  };
  (actor_color.ColorStroke.new = function() {
    actor_color.ColorStroke.__proto__.new.call(this);
    ;
  }).prototype = actor_color.ColorStroke.prototype;
  dart.addTypeTests(actor_color.ColorStroke);
  dart.addTypeCaches(actor_color.ColorStroke);
  dart.setMethodSignature(actor_color.ColorStroke, () => ({
    __proto__: dart.getMethods(actor_color.ColorStroke.__proto__),
    copyColorStroke: dart.fnType(dart.void, [actor_color.ColorStroke, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.ColorStroke, () => ['read']);
  dart.setLibraryUri(actor_color.ColorStroke, I[38]);
  actor_color.FillRule = class FillRule extends core._Enum {
    toString() {
      return "FillRule." + this[_name];
    }
  };
  (actor_color.FillRule.new = function(index, name) {
    actor_color.FillRule.__proto__.new.call(this, index, name);
    ;
  }).prototype = actor_color.FillRule.prototype;
  dart.addTypeTests(actor_color.FillRule);
  dart.addTypeCaches(actor_color.FillRule);
  dart.setLibraryUri(actor_color.FillRule, I[38]);
  dart.setStaticFieldSignature(actor_color.FillRule, () => ['values', 'evenOdd', 'nonZero']);
  dart.defineExtensionMethods(actor_color.FillRule, ['toString']);
  dart.defineLazy(actor_color.FillRule, {
    /*actor_color.FillRule.values*/get values() {
      return C[16] || CT.C16;
    },
    /*actor_color.FillRule.evenOdd*/get evenOdd() {
      return C[17] || CT.C17;
    },
    /*actor_color.FillRule.nonZero*/get nonZero() {
      return C[18] || CT.C18;
    }
  }, false);
  var _colorStops = dart.privateName(actor_color, "_colorStops");
  var _start = dart.privateName(actor_color, "_start");
  var _end = dart.privateName(actor_color, "_end");
  var _renderStart = dart.privateName(actor_color, "_renderStart");
  var _renderEnd = dart.privateName(actor_color, "_renderEnd");
  actor_color.GradientColor = class GradientColor extends actor_color.ActorPaint {
    get colorStops() {
      return this[_colorStops];
    }
    get end() {
      return this[_end];
    }
    get renderEnd() {
      return this[_renderEnd];
    }
    get renderStart() {
      return this[_renderStart];
    }
    get start() {
      return this[_start];
    }
    copyGradient(node, resetArtboard) {
      this.copyPaint(node, resetArtboard);
      this[_colorStops] = _native_typed_data.NativeFloat32List.fromList(node[_colorStops]);
      vec2d.Vec2D.copy(this[_start], node[_start]);
      vec2d.Vec2D.copy(this[_end], node[_end]);
      this.opacity = node.opacity;
    }
    onDirty(dirt) {
    }
    update(dirt) {
      let shape = actor_shape.ActorShape.as(this.parent);
      let world = shape.worldTransform;
      if (shape.transformAffectsStroke) {
        vec2d.Vec2D.copy(this[_renderStart], this[_start]);
        vec2d.Vec2D.copy(this[_renderEnd], this[_end]);
      } else {
        vec2d.Vec2D.transformMat2D(this[_renderStart], this[_start], world);
        vec2d.Vec2D.transformMat2D(this[_renderEnd], this[_end], world);
      }
    }
    static read(artboard, reader, component) {
      actor_color.ActorPaint.read(artboard, reader, component);
      let numStops = reader.readUint8("numColorStops");
      let stops = reader.readFloat32Array(numStops * 5, "colorStops");
      component[_colorStops] = stops;
      vec2d.Vec2D.copyFromList(component[_start], reader.readFloat32Array(2, "start"));
      vec2d.Vec2D.copyFromList(component[_end], reader.readFloat32Array(2, "end"));
      return component;
    }
  };
  (actor_color.GradientColor.new = function() {
    this[_colorStops] = _native_typed_data.NativeFloat32List.new(10);
    this[_start] = new vec2d.Vec2D.new();
    this[_end] = new vec2d.Vec2D.new();
    this[_renderStart] = new vec2d.Vec2D.new();
    this[_renderEnd] = new vec2d.Vec2D.new();
    actor_color.GradientColor.__proto__.new.call(this);
    ;
  }).prototype = actor_color.GradientColor.prototype;
  dart.addTypeTests(actor_color.GradientColor);
  dart.addTypeCaches(actor_color.GradientColor);
  dart.setMethodSignature(actor_color.GradientColor, () => ({
    __proto__: dart.getMethods(actor_color.GradientColor.__proto__),
    copyGradient: dart.fnType(dart.void, [actor_color.GradientColor, actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(actor_color.GradientColor, () => ['read']);
  dart.setGetterSignature(actor_color.GradientColor, () => ({
    __proto__: dart.getGetters(actor_color.GradientColor.__proto__),
    colorStops: typed_data.Float32List,
    end: vec2d.Vec2D,
    renderEnd: vec2d.Vec2D,
    renderStart: vec2d.Vec2D,
    start: vec2d.Vec2D
  }));
  dart.setLibraryUri(actor_color.GradientColor, I[38]);
  dart.setFieldSignature(actor_color.GradientColor, () => ({
    __proto__: dart.getFields(actor_color.GradientColor.__proto__),
    [_colorStops]: dart.fieldType(typed_data.Float32List),
    [_start]: dart.finalFieldType(vec2d.Vec2D),
    [_end]: dart.finalFieldType(vec2d.Vec2D),
    [_renderStart]: dart.finalFieldType(vec2d.Vec2D),
    [_renderEnd]: dart.finalFieldType(vec2d.Vec2D)
  }));
  const GradientColor_ActorFill$36 = class GradientColor_ActorFill extends actor_color.GradientColor {};
  (GradientColor_ActorFill$36.new = function() {
    actor_color.ActorFill.new.call(this);
    GradientColor_ActorFill$36.__proto__.new.call(this);
  }).prototype = GradientColor_ActorFill$36.prototype;
  dart.applyMixin(GradientColor_ActorFill$36, actor_color.ActorFill);
  actor_color.GradientFill = class GradientFill extends GradientColor_ActorFill$36 {
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addFill(this);
      }
    }
    copyGradientFill(node, resetArtboard) {
      this.copyGradient(node, resetArtboard);
      this.copyFill(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      let t8;
      actor_color.GradientColor.read(artboard, reader, component);
      component[_fillRule$] = (t8 = actor_color.fillRuleLookup[$_get](reader.readUint8("fillRule")), t8 == null ? actor_color.FillRule.evenOdd : t8);
      return component;
    }
  };
  (actor_color.GradientFill.new = function() {
    actor_color.GradientFill.__proto__.new.call(this);
    ;
  }).prototype = actor_color.GradientFill.prototype;
  dart.addTypeTests(actor_color.GradientFill);
  dart.addTypeCaches(actor_color.GradientFill);
  dart.setMethodSignature(actor_color.GradientFill, () => ({
    __proto__: dart.getMethods(actor_color.GradientFill.__proto__),
    copyGradientFill: dart.fnType(dart.void, [actor_color.GradientFill, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.GradientFill, () => ['read']);
  dart.setLibraryUri(actor_color.GradientFill, I[38]);
  const GradientColor_ActorStroke$36 = class GradientColor_ActorStroke extends actor_color.GradientColor {};
  (GradientColor_ActorStroke$36.new = function() {
    actor_color.ActorStroke.new.call(this);
    GradientColor_ActorStroke$36.__proto__.new.call(this);
  }).prototype = GradientColor_ActorStroke$36.prototype;
  dart.applyMixin(GradientColor_ActorStroke$36, actor_color.ActorStroke);
  actor_color.GradientStroke = class GradientStroke extends GradientColor_ActorStroke$36 {
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addStroke(this);
      }
    }
    copyGradientStroke(node, resetArtboard) {
      this.copyGradient(node, resetArtboard);
      this.copyStroke(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.GradientColor.read(artboard, reader, component);
      actor_color.ActorStroke.read(artboard, reader, component);
      return component;
    }
  };
  (actor_color.GradientStroke.new = function() {
    actor_color.GradientStroke.__proto__.new.call(this);
    ;
  }).prototype = actor_color.GradientStroke.prototype;
  dart.addTypeTests(actor_color.GradientStroke);
  dart.addTypeCaches(actor_color.GradientStroke);
  dart.setMethodSignature(actor_color.GradientStroke, () => ({
    __proto__: dart.getMethods(actor_color.GradientStroke.__proto__),
    copyGradientStroke: dart.fnType(dart.void, [actor_color.GradientStroke, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.GradientStroke, () => ['read']);
  dart.setLibraryUri(actor_color.GradientStroke, I[38]);
  var secondaryRadiusScale = dart.privateName(actor_color, "RadialGradientColor.secondaryRadiusScale");
  actor_color.RadialGradientColor = class RadialGradientColor extends actor_color.GradientColor {
    get secondaryRadiusScale() {
      return this[secondaryRadiusScale];
    }
    set secondaryRadiusScale(value) {
      this[secondaryRadiusScale] = value;
    }
    copyRadialGradient(node, resetArtboard) {
      this.copyGradient(node, resetArtboard);
      this.secondaryRadiusScale = node.secondaryRadiusScale;
    }
    static read(artboard, reader, component) {
      actor_color.GradientColor.read(artboard, reader, component);
      component.secondaryRadiusScale = reader.readFloat32("secondaryRadiusScale");
      return component;
    }
  };
  (actor_color.RadialGradientColor.new = function() {
    this[secondaryRadiusScale] = 1.0;
    actor_color.RadialGradientColor.__proto__.new.call(this);
    ;
  }).prototype = actor_color.RadialGradientColor.prototype;
  dart.addTypeTests(actor_color.RadialGradientColor);
  dart.addTypeCaches(actor_color.RadialGradientColor);
  dart.setMethodSignature(actor_color.RadialGradientColor, () => ({
    __proto__: dart.getMethods(actor_color.RadialGradientColor.__proto__),
    copyRadialGradient: dart.fnType(dart.void, [actor_color.RadialGradientColor, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.RadialGradientColor, () => ['read']);
  dart.setLibraryUri(actor_color.RadialGradientColor, I[38]);
  dart.setFieldSignature(actor_color.RadialGradientColor, () => ({
    __proto__: dart.getFields(actor_color.RadialGradientColor.__proto__),
    secondaryRadiusScale: dart.fieldType(core.double)
  }));
  const RadialGradientColor_ActorFill$36 = class RadialGradientColor_ActorFill extends actor_color.RadialGradientColor {};
  (RadialGradientColor_ActorFill$36.new = function() {
    actor_color.ActorFill.new.call(this);
    RadialGradientColor_ActorFill$36.__proto__.new.call(this);
  }).prototype = RadialGradientColor_ActorFill$36.prototype;
  dart.applyMixin(RadialGradientColor_ActorFill$36, actor_color.ActorFill);
  actor_color.RadialGradientFill = class RadialGradientFill extends RadialGradientColor_ActorFill$36 {
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addFill(this);
      }
    }
    copyRadialFill(node, resetArtboard) {
      this.copyRadialGradient(node, resetArtboard);
      this.copyFill(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.RadialGradientColor.read(artboard, reader, component);
      actor_color.ActorFill.read(artboard, reader, component);
      return component;
    }
  };
  (actor_color.RadialGradientFill.new = function() {
    actor_color.RadialGradientFill.__proto__.new.call(this);
    ;
  }).prototype = actor_color.RadialGradientFill.prototype;
  dart.addTypeTests(actor_color.RadialGradientFill);
  dart.addTypeCaches(actor_color.RadialGradientFill);
  dart.setMethodSignature(actor_color.RadialGradientFill, () => ({
    __proto__: dart.getMethods(actor_color.RadialGradientFill.__proto__),
    copyRadialFill: dart.fnType(dart.void, [actor_color.RadialGradientFill, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.RadialGradientFill, () => ['read']);
  dart.setLibraryUri(actor_color.RadialGradientFill, I[38]);
  const RadialGradientColor_ActorStroke$36 = class RadialGradientColor_ActorStroke extends actor_color.RadialGradientColor {};
  (RadialGradientColor_ActorStroke$36.new = function() {
    actor_color.ActorStroke.new.call(this);
    RadialGradientColor_ActorStroke$36.__proto__.new.call(this);
  }).prototype = RadialGradientColor_ActorStroke$36.prototype;
  dart.applyMixin(RadialGradientColor_ActorStroke$36, actor_color.ActorStroke);
  actor_color.RadialGradientStroke = class RadialGradientStroke extends RadialGradientColor_ActorStroke$36 {
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addStroke(this);
      }
    }
    copyRadialStroke(node, resetArtboard) {
      this.copyRadialGradient(node, resetArtboard);
      this.copyStroke(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.RadialGradientColor.read(artboard, reader, component);
      actor_color.ActorStroke.read(artboard, reader, component);
      return component;
    }
  };
  (actor_color.RadialGradientStroke.new = function() {
    actor_color.RadialGradientStroke.__proto__.new.call(this);
    ;
  }).prototype = actor_color.RadialGradientStroke.prototype;
  dart.addTypeTests(actor_color.RadialGradientStroke);
  dart.addTypeCaches(actor_color.RadialGradientStroke);
  dart.setMethodSignature(actor_color.RadialGradientStroke, () => ({
    __proto__: dart.getMethods(actor_color.RadialGradientStroke.__proto__),
    copyRadialStroke: dart.fnType(dart.void, [actor_color.RadialGradientStroke, actor_artboard.ActorArtboard])
  }));
  dart.setStaticMethodSignature(actor_color.RadialGradientStroke, () => ['read']);
  dart.setLibraryUri(actor_color.RadialGradientStroke, I[38]);
  actor_color.StrokeCap = class StrokeCap extends core._Enum {
    toString() {
      return "StrokeCap." + this[_name];
    }
  };
  (actor_color.StrokeCap.new = function(index, name) {
    actor_color.StrokeCap.__proto__.new.call(this, index, name);
    ;
  }).prototype = actor_color.StrokeCap.prototype;
  dart.addTypeTests(actor_color.StrokeCap);
  dart.addTypeCaches(actor_color.StrokeCap);
  dart.setLibraryUri(actor_color.StrokeCap, I[38]);
  dart.setStaticFieldSignature(actor_color.StrokeCap, () => ['values', 'butt', 'round', 'square']);
  dart.defineExtensionMethods(actor_color.StrokeCap, ['toString']);
  dart.defineLazy(actor_color.StrokeCap, {
    /*actor_color.StrokeCap.values*/get values() {
      return C[19] || CT.C19;
    },
    /*actor_color.StrokeCap.butt*/get butt() {
      return C[20] || CT.C20;
    },
    /*actor_color.StrokeCap.round*/get round() {
      return C[21] || CT.C21;
    },
    /*actor_color.StrokeCap.square*/get square() {
      return C[22] || CT.C22;
    }
  }, false);
  actor_color.StrokeJoin = class StrokeJoin extends core._Enum {
    toString() {
      return "StrokeJoin." + this[_name];
    }
  };
  (actor_color.StrokeJoin.new = function(index, name) {
    actor_color.StrokeJoin.__proto__.new.call(this, index, name);
    ;
  }).prototype = actor_color.StrokeJoin.prototype;
  dart.addTypeTests(actor_color.StrokeJoin);
  dart.addTypeCaches(actor_color.StrokeJoin);
  dart.setLibraryUri(actor_color.StrokeJoin, I[38]);
  dart.setStaticFieldSignature(actor_color.StrokeJoin, () => ['values', 'miter', 'round', 'bevel']);
  dart.defineExtensionMethods(actor_color.StrokeJoin, ['toString']);
  dart.defineLazy(actor_color.StrokeJoin, {
    /*actor_color.StrokeJoin.values*/get values() {
      return C[23] || CT.C23;
    },
    /*actor_color.StrokeJoin.miter*/get miter() {
      return C[24] || CT.C24;
    },
    /*actor_color.StrokeJoin.round*/get round() {
      return C[25] || CT.C25;
    },
    /*actor_color.StrokeJoin.bevel*/get bevel() {
      return C[26] || CT.C26;
    }
  }, false);
  actor_color.TrimPath = class TrimPath extends core._Enum {
    toString() {
      return "TrimPath." + this[_name];
    }
  };
  (actor_color.TrimPath.new = function(index, name) {
    actor_color.TrimPath.__proto__.new.call(this, index, name);
    ;
  }).prototype = actor_color.TrimPath.prototype;
  dart.addTypeTests(actor_color.TrimPath);
  dart.addTypeCaches(actor_color.TrimPath);
  dart.setLibraryUri(actor_color.TrimPath, I[38]);
  dart.setStaticFieldSignature(actor_color.TrimPath, () => ['values', 'off', 'sequential', 'synced']);
  dart.defineExtensionMethods(actor_color.TrimPath, ['toString']);
  dart.defineLazy(actor_color.TrimPath, {
    /*actor_color.TrimPath.values*/get values() {
      return C[27] || CT.C27;
    },
    /*actor_color.TrimPath.off*/get off() {
      return C[28] || CT.C28;
    },
    /*actor_color.TrimPath.sequential*/get sequential() {
      return C[29] || CT.C29;
    },
    /*actor_color.TrimPath.synced*/get synced() {
      return C[30] || CT.C30;
    }
  }, false);
  dart.defineLazy(actor_color, {
    /*actor_color.fillRuleLookup*/get fillRuleLookup() {
      return T.HashMapOfint$FillRule().fromIterables(T.JSArrayOfint().of([0, 1]), T.JSArrayOfFillRule().of([actor_color.FillRule.evenOdd, actor_color.FillRule.nonZero]));
    },
    /*actor_color.strokeCapLookup*/get strokeCapLookup() {
      return T.HashMapOfint$StrokeCap().fromIterables(T.JSArrayOfint().of([0, 1, 2]), T.JSArrayOfStrokeCap().of([actor_color.StrokeCap.butt, actor_color.StrokeCap.round, actor_color.StrokeCap.square]));
    },
    /*actor_color.strokeJoinLookup*/get strokeJoinLookup() {
      return T.HashMapOfint$StrokeJoin().fromIterables(T.JSArrayOfint().of([0, 1, 2]), T.JSArrayOfStrokeJoin().of([actor_color.StrokeJoin.miter, actor_color.StrokeJoin.round, actor_color.StrokeJoin.bevel]));
    },
    /*actor_color.trimPathLookup*/get trimPathLookup() {
      return T.HashMapOfint$TrimPath().fromIterables(T.JSArrayOfint().of([0, 1, 2]), T.JSArrayOfTrimPath().of([actor_color.TrimPath.off, actor_color.TrimPath.sequential, actor_color.TrimPath.synced]));
    }
  }, false);
  var maxTextureIndex = dart.privateName(actor, "Actor.maxTextureIndex");
  var _version = dart.privateName(actor, "_version");
  var __Actor__artboards = dart.privateName(actor, "_#Actor#_artboards");
  var _artboards = dart.privateName(actor, "_artboards");
  actor.Actor = class Actor extends core.Object {
    get maxTextureIndex() {
      return this[maxTextureIndex];
    }
    set maxTextureIndex(value) {
      this[maxTextureIndex] = value;
    }
    get [_artboards]() {
      let t14;
      t14 = this[__Actor__artboards];
      return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_artboards")) : t14;
    }
    set [_artboards](library$32package$58flare_flutter$47base$47actor$46dart$58$58_artboards$35param) {
      this[__Actor__artboards] = library$32package$58flare_flutter$47base$47actor$46dart$58$58_artboards$35param;
    }
    get artboard() {
      return this[_artboards][$isNotEmpty] ? this[_artboards][$first] : null;
    }
    get texturesUsed() {
      return this.maxTextureIndex + 1;
    }
    get version() {
      return this[_version];
    }
    copyActor(actor) {
      let t14;
      this.maxTextureIndex = actor.maxTextureIndex;
      let artboardCount = actor[_artboards][$length];
      if (artboardCount > 0) {
        this[_artboards] = T.JSArrayOfActorArtboardN().of([]);
        for (let artboard of actor[_artboards]) {
          this[_artboards][$add]((t14 = artboard, t14 == null ? null : t14.makeInstanceWithActor(this)));
        }
      }
    }
    getArtboard(name = null) {
      return name == null ? this.artboard : iterable_extensions['IterableExtension|firstWhereOrNull'](T.ActorArtboardN(), this[_artboards], dart.fn(artboard => {
        let t14;
        return (t14 = artboard, t14 == null ? null : t14.name) == name;
      }, T.ActorArtboardNTobool()));
    }
    load(data, context) {
      return async.async(core.bool, (function* load() {
        if (data[$lengthInBytes] < 5) {
          dart.throw(new core.UnsupportedError.new("Not a valid Flare file."));
        }
        let success = true;
        let F = data[$getUint8](0);
        let L = data[$getUint8](1);
        let A = data[$getUint8](2);
        let R = data[$getUint8](3);
        let E = data[$getUint8](4);
        let inputData = data;
        if (F !== 70 || L !== 76 || A !== 65 || R !== 82 || E !== 69) {
          let charCodes = data[$buffer][$asUint8List]();
          let stringData = core.String.fromCharCodes(charCodes);
          let jsonActor = convert.jsonDecode(stringData);
          let jsonObject = new _js_helper.LinkedMap.new();
          jsonObject[$_set]("container", jsonActor);
          inputData = jsonObject;
        }
        let reader = stream_reader.StreamReader.new(inputData);
        this[_version] = reader.readVersion();
        let block = null;
        while ((block = reader.readNextBlock(block_types.blockTypesMap)) != null) {
          switch (dart.nullCheck(block).blockType) {
            case 115:
              {
                this.readArtboardsBlock(block);
                break;
              }
            case 9:
              {
                let rawAtlases = (yield this.readAtlasesBlock(block, context));
                success = (yield this.loadAtlases(rawAtlases));
                break;
              }
          }
        }
        for (let artboard of this[_artboards]) {
          dart.nullCheck(artboard).resolveHierarchy();
        }
        for (let artboard of this[_artboards]) {
          dart.nullCheck(artboard).completeResolveHierarchy();
        }
        for (let artboard of this[_artboards]) {
          dart.nullCheck(artboard).sortDependencies();
        }
        return success;
      }).bind(this));
    }
    makeArtboard() {
      return new actor_artboard.ActorArtboard.new(this);
    }
    makeEllipse() {
      return new actor_ellipse.ActorEllipse.new();
    }
    makeImageNode() {
      return new actor_image.ActorImage.new();
    }
    makePathNode() {
      return new actor_path.ActorPath.new();
    }
    makePolygon() {
      return new actor_polygon.ActorPolygon.new();
    }
    makeRectangle() {
      return new actor_rectangle.ActorRectangle.new();
    }
    makeShapeNode(source) {
      return new actor_shape.ActorShape.new();
    }
    makeStar() {
      return new actor_star.ActorStar.new();
    }
    makeTriangle() {
      return new actor_triangle.ActorTriangle.new();
    }
    readArtboardsBlock(block) {
      let artboardCount = block.readUint16Length();
      this[_artboards] = T.ListOfActorArtboardN().filled(artboardCount, null);
      for (let artboardIndex = 0, end = this[_artboards][$length]; artboardIndex < end; artboardIndex = artboardIndex + 1) {
        let artboardBlock = block.readNextBlock(block_types.blockTypesMap);
        if (artboardBlock == null) {
          break;
        }
        switch (artboardBlock.blockType) {
          case 114:
            {
              {
                let artboard = this.makeArtboard();
                artboard.read(artboardBlock);
                this[_artboards][$_set](artboardIndex, artboard);
                break;
              }
            }
        }
      }
    }
    readAtlasesBlock(block, context) {
      let isOOB = block.readBool("isOOB");
      block.openArray("data");
      let numAtlases = block.readUint16Length();
      let result = null;
      if (isOOB) {
        let waitingFor = T.JSArrayOfFutureOfUint8List().of([]);
        for (let i = 0; i < numAtlases; i = i + 1) {
          waitingFor[$add](this.readOutOfBandAsset(block.readString("data"), context));
        }
        result = async.Future.wait(typed_data.Uint8List, waitingFor);
      } else {
        let inBandAssets = T.JSArrayOfUint8List().of([]);
        for (let i = 0; i < numAtlases; i = i + 1) {
          inBandAssets[$add](block.readAsset());
        }
        let completer = T.CompleterOfListOfUint8List().new();
        completer.complete(inBandAssets);
        result = completer.future;
      }
      block.closeArray();
      return result;
    }
  };
  (actor.Actor.new = function() {
    this[maxTextureIndex] = 0;
    this[_version] = 0;
    this[__Actor__artboards] = null;
    ;
  }).prototype = actor.Actor.prototype;
  dart.addTypeTests(actor.Actor);
  dart.addTypeCaches(actor.Actor);
  dart.setMethodSignature(actor.Actor, () => ({
    __proto__: dart.getMethods(actor.Actor.__proto__),
    copyActor: dart.fnType(dart.void, [actor.Actor]),
    getArtboard: dart.fnType(dart.nullable(actor_artboard.ActorArtboard), [], [dart.nullable(core.String)]),
    load: dart.fnType(async.Future$(core.bool), [typed_data.ByteData, dart.dynamic]),
    makeArtboard: dart.fnType(actor_artboard.ActorArtboard, []),
    makeEllipse: dart.fnType(actor_ellipse.ActorEllipse, []),
    makeImageNode: dart.fnType(actor_image.ActorImage, []),
    makePathNode: dart.fnType(actor_path.ActorPath, []),
    makePolygon: dart.fnType(actor_polygon.ActorPolygon, []),
    makeRectangle: dart.fnType(actor_rectangle.ActorRectangle, []),
    makeShapeNode: dart.fnType(actor_shape.ActorShape, [dart.nullable(actor_shape.ActorShape)]),
    makeStar: dart.fnType(actor_star.ActorStar, []),
    makeTriangle: dart.fnType(actor_triangle.ActorTriangle, []),
    readArtboardsBlock: dart.fnType(dart.void, [stream_reader.StreamReader]),
    readAtlasesBlock: dart.fnType(async.Future$(core.List$(typed_data.Uint8List)), [stream_reader.StreamReader, dart.dynamic])
  }));
  dart.setGetterSignature(actor.Actor, () => ({
    __proto__: dart.getGetters(actor.Actor.__proto__),
    [_artboards]: core.List$(dart.nullable(actor_artboard.ActorArtboard)),
    artboard: dart.nullable(actor_artboard.ActorArtboard),
    texturesUsed: core.int,
    version: core.int
  }));
  dart.setSetterSignature(actor.Actor, () => ({
    __proto__: dart.getSetters(actor.Actor.__proto__),
    [_artboards]: core.List$(dart.nullable(actor_artboard.ActorArtboard))
  }));
  dart.setLibraryUri(actor.Actor, I[39]);
  dart.setFieldSignature(actor.Actor, () => ({
    __proto__: dart.getFields(actor.Actor.__proto__),
    maxTextureIndex: dart.fieldType(core.int),
    [_version]: dart.fieldType(core.int),
    [__Actor__artboards]: dart.fieldType(dart.nullable(core.List$(dart.nullable(actor_artboard.ActorArtboard))))
  }));
  var _flags = dart.privateName(actor_artboard, "_flags");
  var _drawableNodeCount = dart.privateName(actor_artboard, "_drawableNodeCount");
  var _nodeCount = dart.privateName(actor_artboard, "_nodeCount");
  var _dirtDepth = dart.privateName(actor_artboard, "_dirtDepth");
  var __ActorArtboard__root = dart.privateName(actor_artboard, "_#ActorArtboard#_root");
  var __ActorArtboard__components = dart.privateName(actor_artboard, "_#ActorArtboard#_components");
  var __ActorArtboard__nodes = dart.privateName(actor_artboard, "_#ActorArtboard#_nodes");
  var _drawableNodes = dart.privateName(actor_artboard, "_drawableNodes");
  var _effectRenderers = dart.privateName(actor_artboard, "_effectRenderers");
  var __ActorArtboard__animations = dart.privateName(actor_artboard, "_#ActorArtboard#_animations");
  var __ActorArtboard__dependencyOrder = dart.privateName(actor_artboard, "_#ActorArtboard#_dependencyOrder");
  var __ActorArtboard__dependencyOrder_isSet = dart.privateName(actor_artboard, "_#ActorArtboard#_dependencyOrder#isSet");
  var __ActorArtboard__name = dart.privateName(actor_artboard, "_#ActorArtboard#_name");
  var _translation$ = dart.privateName(actor_artboard, "_translation");
  var _width$1 = dart.privateName(actor_artboard, "_width");
  var _height$ = dart.privateName(actor_artboard, "_height");
  var _origin = dart.privateName(actor_artboard, "_origin");
  var _clipContents = dart.privateName(actor_artboard, "_clipContents");
  var _color$0 = dart.privateName(actor_artboard, "_color");
  var _modulateOpacity = dart.privateName(actor_artboard, "_modulateOpacity");
  var _overrideColor = dart.privateName(actor_artboard, "_overrideColor");
  var _actor = dart.privateName(actor_artboard, "_actor");
  var _root = dart.privateName(actor_artboard, "_root");
  var _components = dart.privateName(actor_artboard, "_components");
  var _nodes = dart.privateName(actor_artboard, "_nodes");
  var _animations = dart.privateName(actor_artboard, "_animations");
  var _dependencyOrder = dart.privateName(actor_artboard, "_dependencyOrder");
  var _name$0 = dart.privateName(actor_artboard, "_name");
  actor_artboard.ActorArtboard = class ActorArtboard extends core.Object {
    get [_root]() {
      let t14;
      t14 = this[__ActorArtboard__root];
      return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_root")) : t14;
    }
    set [_root](library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_root$35param) {
      this[__ActorArtboard__root] = library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_root$35param;
    }
    get [_components]() {
      let t14;
      t14 = this[__ActorArtboard__components];
      return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_components")) : t14;
    }
    set [_components](library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_components$35param) {
      this[__ActorArtboard__components] = library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_components$35param;
    }
    get [_nodes]() {
      let t14;
      t14 = this[__ActorArtboard__nodes];
      return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_nodes")) : t14;
    }
    set [_nodes](library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_nodes$35param) {
      this[__ActorArtboard__nodes] = library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_nodes$35param;
    }
    get [_animations]() {
      let t14;
      t14 = this[__ActorArtboard__animations];
      return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_animations")) : t14;
    }
    set [_animations](library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_animations$35param) {
      this[__ActorArtboard__animations] = library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_animations$35param;
    }
    get [_dependencyOrder]() {
      return this[__ActorArtboard__dependencyOrder_isSet] ? this[__ActorArtboard__dependencyOrder] : dart.throw(new _internal.LateError.fieldNI("_dependencyOrder"));
    }
    set [_dependencyOrder](library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_dependencyOrder$35param) {
      this[__ActorArtboard__dependencyOrder_isSet] = true;
      this[__ActorArtboard__dependencyOrder] = library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_dependencyOrder$35param;
    }
    get [_name$0]() {
      let t14;
      t14 = this[__ActorArtboard__name];
      return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_name")) : t14;
    }
    set [_name$0](library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_name$35param) {
      this[__ActorArtboard__name] = library$32package$58flare_flutter$47base$47actor_artboard$46dart$58$58_name$35param;
    }
    get name() {
      return this[_name$0];
    }
    get width() {
      return this[_width$1];
    }
    get height() {
      return this[_height$];
    }
    get origin() {
      return this[_origin];
    }
    get translation() {
      return this[_translation$];
    }
    get clipContents() {
      return this[_clipContents];
    }
    get modulateOpacity() {
      return this[_modulateOpacity];
    }
    get overrideColor() {
      return this[_overrideColor];
    }
    set overrideColor(value) {
      this[_overrideColor] = value;
      for (let drawable of this[_drawableNodes]) {
        this.addDirt(drawable, 4, true);
      }
    }
    set modulateOpacity(value) {
      this[_modulateOpacity] = value;
      for (let drawable of this[_drawableNodes]) {
        this.addDirt(drawable, 4, true);
      }
    }
    static ['_#new#tearOff'](actor) {
      return new actor_artboard.ActorArtboard.new(actor);
    }
    get actor() {
      return this[_actor];
    }
    get components() {
      return this[_components];
    }
    get nodes() {
      return this[_nodes];
    }
    get animations() {
      return this[_animations];
    }
    get drawableNodes() {
      return this[_drawableNodes];
    }
    _get(index) {
      return this[_components][$_get](index);
    }
    get componentCount() {
      return this[_components][$length];
    }
    get nodeCount() {
      return this[_nodeCount];
    }
    get drawNodeCount() {
      return this[_drawableNodeCount];
    }
    get root() {
      return this[_root];
    }
    addDependency(a, b) {
      let dependents = b.dependents;
      if (dependents == null) {
        b.dependents = dependents = T.JSArrayOfActorComponent().of([]);
      }
      if (dependents[$contains](a)) {
        return false;
      }
      dependents[$add](a);
      return true;
    }
    sortDependencies() {
      let t14;
      let sorter = new dependency_sorter.DependencySorter.new();
      this[_dependencyOrder] = sorter.sort(this[_root]);
      let graphOrder = 0;
      for (let component of dart.nullCheck(this[_dependencyOrder])) {
        dart.nullCheck(component).graphOrder = (t14 = graphOrder, graphOrder = t14 + 1, t14);
        component.dirtMask = 255;
      }
      this[_flags] = (this[_flags] | 2) >>> 0;
    }
    addDirt(component, value, recurse) {
      if ((component.dirtMask & value) >>> 0 === value) {
        return false;
      }
      let dirt = (component.dirtMask | value) >>> 0;
      component.dirtMask = dirt;
      this[_flags] = (this[_flags] | 2) >>> 0;
      component.onDirty(dirt);
      if (component.graphOrder < this[_dirtDepth]) {
        this[_dirtDepth] = component.graphOrder;
      }
      if (!recurse) {
        return true;
      }
      let dependents = component.dependents;
      if (dependents != null) {
        for (let d of dependents) {
          this.addDirt(dart.nullCheck(d), value, recurse);
        }
      }
      return true;
    }
    getAnimation(name) {
      for (let a of this[_animations]) {
        if (a.name === name) {
          return a;
        }
      }
      return null;
    }
    getNode(T, name) {
      for (let node of this[_nodes]) {
        if (T.is(node) && node.name === name) {
          return node;
        }
      }
      return null;
    }
    markDrawOrderDirty() {
      this[_flags] = (this[_flags] | 1) >>> 0;
    }
    makeInstance() {
      let artboardInstance = this[_actor].makeArtboard();
      artboardInstance.copyArtboard(this);
      return artboardInstance;
    }
    makeInstanceWithActor(actor) {
      let artboardInstance = actor.makeArtboard();
      artboardInstance.copyArtboard(this);
      return artboardInstance;
    }
    copyArtboard(artboard) {
      let t14;
      this[_name$0] = artboard[_name$0];
      vec2d.Vec2D.copy(this[_translation$], artboard[_translation$]);
      this[_width$1] = artboard[_width$1];
      this[_height$] = artboard[_height$];
      vec2d.Vec2D.copy(this[_origin], artboard[_origin]);
      this[_clipContents] = artboard[_clipContents];
      this[_color$0][$_set](0, artboard[_color$0][$_get](0));
      this[_color$0][$_set](1, artboard[_color$0][$_get](1));
      this[_color$0][$_set](2, artboard[_color$0][$_get](2));
      this[_color$0][$_set](3, artboard[_color$0][$_get](3));
      this[_animations] = artboard[_animations];
      this[_drawableNodeCount] = artboard[_drawableNodeCount];
      this[_nodeCount] = artboard[_nodeCount];
      if (artboard.componentCount !== 0) {
        this[_components] = T.JSArrayOfActorComponentN().of([]);
      }
      if (this[_nodeCount] !== 0) {
        this[_nodes] = T.ListOfActorNodeN().filled(this[_nodeCount], null);
      }
      if (artboard.componentCount !== 0) {
        for (let component of artboard.components) {
          this[_components][$add]((t14 = component, t14 == null ? null : t14.makeInstance(this)));
        }
      }
      this[_dependencyOrder] = T.ListOfActorComponentN().filled(dart.nullCheck(artboard[_dependencyOrder])[$length], null);
      for (let component of dart.nullCheck(artboard[_dependencyOrder])) {
        let localComponent = dart.nullCheck(this[_components][$_get](dart.nullCheck(component).idx));
        dart.nullCheck(this[_dependencyOrder])[$_set](component.graphOrder, localComponent);
        localComponent.dirtMask = 255;
      }
      this[_flags] = (this[_flags] | 2) >>> 0;
      this[_root] = actor_node.ActorNode.as(dart.nullCheck(this[_components][$_get](0)));
      this.resolveHierarchy();
      this.completeResolveHierarchy();
    }
    resolveHierarchy() {
      let t14;
      let anIdx = 0;
      this[_drawableNodes][$clear]();
      let componentCount = this.componentCount;
      for (let i = 1; i < componentCount; i = i + 1) {
        let c = this[_components][$_get](i);
        if (c != null) {
          c.resolveComponentIndices(this[_components]);
        }
        if (actor_node.ActorNode.is(c)) {
          this[_nodes][$_set]((t14 = anIdx, anIdx = t14 + 1, t14), c);
        }
      }
    }
    completeResolveHierarchy() {
      let componentCount = this.componentCount;
      for (let i = 1; i < componentCount; i = i + 1) {
        let c = this.components[$_get](i);
        if (c != null) {
          c.completeResolve();
        }
      }
      for (let i = 1; i < componentCount; i = i + 1) {
        let c = this.components[$_get](i);
        if (actor_drawable.ActorDrawable.is(c) && c.layerEffectRenderParent == null) {
          this[_drawableNodes][$add](c);
        }
        if (actor_layer_effect_renderer.ActorLayerEffectRenderer.is(c) && c.layerEffectRenderParent == null) {
          this[_effectRenderers][$add](c);
        }
      }
      this.sortDrawOrder();
    }
    sortDrawOrder() {
      this[_drawableNodes][$sort](dart.fn((a, b) => a.drawOrder[$compareTo](b.drawOrder), T.ActorDrawableAndActorDrawableToint()));
      for (let i = 0; i < this[_drawableNodes][$length]; i = i + 1) {
        this[_drawableNodes][$_get](i).drawIndex = i;
      }
      for (let layer of this[_effectRenderers]) {
        layer.sortDrawables();
      }
    }
    advance(seconds) {
      if ((this[_flags] & 2) !== 0) {
        let step = 0;
        let count = dart.nullCheck(this[_dependencyOrder])[$length];
        while ((this[_flags] & 2) !== 0 && step < 100) {
          this[_flags] = (this[_flags] & ~2 >>> 0) >>> 0;
          for (let i = 0; i < count; i = i + 1) {
            let component = dart.nullCheck(dart.nullCheck(this[_dependencyOrder])[$_get](i));
            this[_dirtDepth] = i;
            let d = component.dirtMask;
            if (d === 0) {
              continue;
            }
            component.dirtMask = 0;
            component.update(d);
            if (this[_dirtDepth] < i) {
              break;
            }
          }
          step = step + 1;
        }
      }
      if ((this[_flags] & 1) !== 0) {
        this[_flags] = (this[_flags] & ~1 >>> 0) >>> 0;
        this.sortDrawOrder();
      }
    }
    read(reader) {
      this[_name$0] = reader.readString("name");
      vec2d.Vec2D.copyFromList(this[_translation$], reader.readFloat32Array(2, "translation"));
      this[_width$1] = reader.readFloat32("width");
      this[_height$] = reader.readFloat32("height");
      vec2d.Vec2D.copyFromList(this[_origin], reader.readFloat32Array(2, "origin"));
      this[_clipContents] = reader.readBool("clipContents");
      let color = reader.readFloat32Array(4, "color");
      this[_color$0][$_set](0, color[$_get](0));
      this[_color$0][$_set](1, color[$_get](1));
      this[_color$0][$_set](2, color[$_get](2));
      this[_color$0][$_set](3, color[$_get](3));
      let block = null;
      while ((block = reader.readNextBlock(block_types.blockTypesMap)) != null) {
        switch (dart.nullCheck(block).blockType) {
          case 1:
            {
              this.readComponentsBlock(block);
              break;
            }
          case 8:
            {
              this.readAnimationsBlock(block);
              break;
            }
        }
      }
    }
    readComponentsBlock(block) {
      let componentCount = block.readUint16Length();
      this[_components] = T.ListOfActorComponentN().filled(componentCount + 1, null);
      this[_components][$_set](0, this[_root]);
      this[_nodeCount] = 1;
      for (let componentIndex = 1, end = componentCount + 1; componentIndex < end; componentIndex = componentIndex + 1) {
        let nodeBlock = block.readNextBlock(block_types.blockTypesMap);
        if (nodeBlock == null) {
          break;
        }
        let component = null;
        switch (nodeBlock.blockType) {
          case 2:
            {
              component = actor_node.ActorNode.read(this, nodeBlock, null);
              break;
            }
          case 3:
            {
              component = actor_bone.ActorBone.read(this, nodeBlock, null);
              break;
            }
          case 4:
            {
              component = actor_root_bone.ActorRootBone.read(this, nodeBlock, null);
              break;
            }
          case 5:
            {
              component = actor_image.ActorImage.read(this, nodeBlock, this.actor.makeImageNode());
              if (actor_image.ActorImage.as(component).textureIndex > this.actor.maxTextureIndex) {
                this.actor.maxTextureIndex = component.textureIndex;
              }
              break;
            }
          case 12:
            {
              component = actor_event.ActorEvent.read(this, nodeBlock, null);
              break;
            }
          case 23:
            {
              component = actor_node_solo.ActorNodeSolo.read(this, nodeBlock, null);
              break;
            }
          case 29:
            {
              component = actor_jelly_bone.ActorJellyBone.read(this, nodeBlock, null);
              break;
            }
          case 28:
            {
              component = jelly_component.JellyComponent.read(this, nodeBlock, null);
              break;
            }
          case 30:
            {
              component = actor_ik_constraint.ActorIKConstraint.read(this, nodeBlock, null);
              break;
            }
          case 31:
            {
              component = actor_distance_constraint.ActorDistanceConstraint.read(this, nodeBlock, null);
              break;
            }
          case 32:
            {
              component = actor_translation_constraint.ActorTranslationConstraint.read(this, nodeBlock, null);
              break;
            }
          case 34:
            {
              component = actor_scale_constraint.ActorScaleConstraint.read(this, nodeBlock, null);
              break;
            }
          case 33:
            {
              component = actor_rotation_constraint.ActorRotationConstraint.read(this, nodeBlock, null);
              break;
            }
          case 35:
            {
              component = actor_transform_constraint.ActorTransformConstraint.read(this, nodeBlock, null);
              break;
            }
          case 100:
            {
              component = actor_shape.ActorShape.read(this, nodeBlock, this.actor.makeShapeNode(null));
              break;
            }
          case 101:
            {
              component = actor_path.ActorPath.read(this, nodeBlock, this.actor.makePathNode());
              break;
            }
          case 102:
            {
              component = actor_color.ColorFill.read(this, nodeBlock, this.actor.makeColorFill());
              break;
            }
          case 103:
            {
              component = actor_color.ColorStroke.read(this, nodeBlock, this.actor.makeColorStroke());
              break;
            }
          case 104:
            {
              component = actor_color.GradientFill.read(this, nodeBlock, this.actor.makeGradientFill());
              break;
            }
          case 105:
            {
              component = actor_color.GradientStroke.read(this, nodeBlock, this.actor.makeGradientStroke());
              break;
            }
          case 106:
            {
              component = actor_color.RadialGradientFill.read(this, nodeBlock, this.actor.makeRadialFill());
              break;
            }
          case 107:
            {
              component = actor_color.RadialGradientStroke.read(this, nodeBlock, this.actor.makeRadialStroke());
              break;
            }
          case 108:
            {
              component = actor_ellipse.ActorEllipse.read(this, nodeBlock, this.actor.makeEllipse());
              break;
            }
          case 109:
            {
              component = actor_rectangle.ActorRectangle.read(this, nodeBlock, this.actor.makeRectangle());
              break;
            }
          case 110:
            {
              component = actor_triangle.ActorTriangle.read(this, nodeBlock, this.actor.makeTriangle());
              break;
            }
          case 111:
            {
              component = actor_star.ActorStar.read(this, nodeBlock, this.actor.makeStar());
              break;
            }
          case 112:
            {
              component = actor_polygon.ActorPolygon.read(this, nodeBlock, this.actor.makePolygon());
              break;
            }
          case 113:
            {
              component = actor_component.ActorComponent.read(this, nodeBlock, new actor_skin.ActorSkin.new());
              break;
            }
          case 116:
            {
              component = actor_drawable.ActorDrawable.read(this, nodeBlock, this.actor.makeLayerEffectRenderer());
              break;
            }
          case 117:
            {
              component = actor_mask.ActorMask.read(this, nodeBlock, new actor_mask.ActorMask.new());
              break;
            }
          case 118:
            {
              component = actor_blur.ActorBlur.read(this, nodeBlock, null);
              break;
            }
          case 119:
            {
              component = actor_shadow.ActorShadow.read(this, nodeBlock, this.actor.makeDropShadow());
              break;
            }
          case 120:
            {
              component = actor_shadow.ActorShadow.read(this, nodeBlock, this.actor.makeInnerShadow());
              break;
            }
          default:
            {
              break;
            }
        }
        if (actor_drawable.ActorDrawable.is(component)) {
          this[_drawableNodeCount] = this[_drawableNodeCount] + 1;
        }
        if (actor_node.ActorNode.is(component)) {
          this[_nodeCount] = this[_nodeCount] + 1;
        }
        this[_components][$_set](componentIndex, component);
        if (component != null) {
          component.idx = componentIndex;
        }
      }
      this[_nodes] = T.ListOfActorNodeN().filled(this[_nodeCount], null);
      this[_nodes][$_set](0, this[_root]);
    }
    initializeGraphics() {
      for (let component of this[_components]) {
        if (actor_drawable.ActorDrawable.is(component)) {
          component.initializeGraphics();
        }
      }
    }
    readAnimationsBlock(block) {
      let animationCount = block.readUint16Length();
      this[_animations] = T.JSArrayOfActorAnimation().of([]);
      let animationBlock = null;
      while ((animationBlock = block.readNextBlock(block_types.blockTypesMap)) != null) {
        switch (dart.nullCheck(animationBlock).blockType) {
          case 7:
            {
              let anim = actor_animation.ActorAnimation.read(animationBlock, this[_components]);
              this[_animations][$add](anim);
              break;
            }
        }
      }
    }
    artboardAABB() {
      let minX = -1 * this[_origin]._get(0) * this.width;
      let minY = -1 * this[_origin]._get(1) * this.height;
      return new aabb$.AABB.fromValues(minX, minY, minX + this[_width$1], minY + this.height);
    }
    computeAABB() {
      let aabb = null;
      for (let drawable of this[_drawableNodes]) {
        let pathAABB = drawable.computeAABB();
        if (aabb == null) {
          aabb = pathAABB;
        } else {
          aabb._set(0, math.min(core.double, aabb._get(0), pathAABB._get(0)));
          aabb._set(1, math.min(core.double, aabb._get(1), pathAABB._get(1)));
          aabb._set(2, math.max(core.double, aabb._get(2), pathAABB._get(2)));
          aabb._set(3, math.max(core.double, aabb._get(3), pathAABB._get(3)));
        }
      }
      return aabb;
    }
  };
  (actor_artboard.ActorArtboard.new = function(actor) {
    this[_flags] = 1;
    this[_drawableNodeCount] = 0;
    this[_nodeCount] = 0;
    this[_dirtDepth] = 0;
    this[__ActorArtboard__root] = null;
    this[__ActorArtboard__components] = null;
    this[__ActorArtboard__nodes] = null;
    this[_drawableNodes] = T.JSArrayOfActorDrawable().of([]);
    this[_effectRenderers] = T.JSArrayOfActorLayerEffectRenderer().of([]);
    this[__ActorArtboard__animations] = null;
    this[__ActorArtboard__dependencyOrder] = null;
    this[__ActorArtboard__dependencyOrder_isSet] = false;
    this[__ActorArtboard__name] = null;
    this[_translation$] = new vec2d.Vec2D.new();
    this[_width$1] = 0.0;
    this[_height$] = 0.0;
    this[_origin] = new vec2d.Vec2D.new();
    this[_clipContents] = true;
    this[_color$0] = _native_typed_data.NativeFloat32List.new(4);
    this[_modulateOpacity] = 1.0;
    this[_overrideColor] = null;
    this[_actor] = actor;
    this[_root] = new actor_node.ActorNode.withArtboard(this);
  }).prototype = actor_artboard.ActorArtboard.prototype;
  dart.addTypeTests(actor_artboard.ActorArtboard);
  dart.addTypeCaches(actor_artboard.ActorArtboard);
  dart.setMethodSignature(actor_artboard.ActorArtboard, () => ({
    __proto__: dart.getMethods(actor_artboard.ActorArtboard.__proto__),
    _get: dart.fnType(dart.nullable(actor_component.ActorComponent), [core.int]),
    addDependency: dart.fnType(core.bool, [actor_component.ActorComponent, actor_component.ActorComponent]),
    sortDependencies: dart.fnType(dart.void, []),
    addDirt: dart.fnType(core.bool, [actor_component.ActorComponent, core.int, core.bool]),
    getAnimation: dart.fnType(dart.nullable(actor_animation.ActorAnimation), [core.String]),
    getNode: dart.gFnType(T => [dart.nullable(T), [core.String]], T => [actor_node.ActorNode]),
    markDrawOrderDirty: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_artboard.ActorArtboard, []),
    makeInstanceWithActor: dart.fnType(actor_artboard.ActorArtboard, [actor.Actor]),
    copyArtboard: dart.fnType(dart.void, [actor_artboard.ActorArtboard]),
    resolveHierarchy: dart.fnType(dart.void, []),
    completeResolveHierarchy: dart.fnType(dart.void, []),
    sortDrawOrder: dart.fnType(dart.void, []),
    advance: dart.fnType(dart.void, [core.double]),
    read: dart.fnType(dart.void, [stream_reader.StreamReader]),
    readComponentsBlock: dart.fnType(dart.void, [stream_reader.StreamReader]),
    initializeGraphics: dart.fnType(dart.void, []),
    readAnimationsBlock: dart.fnType(dart.void, [stream_reader.StreamReader]),
    artboardAABB: dart.fnType(aabb$.AABB, []),
    computeAABB: dart.fnType(dart.nullable(aabb$.AABB), [])
  }));
  dart.setGetterSignature(actor_artboard.ActorArtboard, () => ({
    __proto__: dart.getGetters(actor_artboard.ActorArtboard.__proto__),
    [_root]: actor_node.ActorNode,
    [_components]: core.List$(dart.nullable(actor_component.ActorComponent)),
    [_nodes]: core.List$(dart.nullable(actor_node.ActorNode)),
    [_animations]: core.List$(actor_animation.ActorAnimation),
    [_dependencyOrder]: dart.nullable(core.List$(dart.nullable(actor_component.ActorComponent))),
    [_name$0]: core.String,
    name: core.String,
    width: core.double,
    height: core.double,
    origin: vec2d.Vec2D,
    translation: vec2d.Vec2D,
    clipContents: core.bool,
    modulateOpacity: core.double,
    overrideColor: dart.nullable(typed_data.Float32List),
    actor: actor.Actor,
    components: core.List$(dart.nullable(actor_component.ActorComponent)),
    nodes: core.List$(dart.nullable(actor_node.ActorNode)),
    animations: core.List$(actor_animation.ActorAnimation),
    drawableNodes: core.List$(actor_drawable.ActorDrawable),
    componentCount: core.int,
    nodeCount: core.int,
    drawNodeCount: core.int,
    root: actor_node.ActorNode
  }));
  dart.setSetterSignature(actor_artboard.ActorArtboard, () => ({
    __proto__: dart.getSetters(actor_artboard.ActorArtboard.__proto__),
    [_root]: actor_node.ActorNode,
    [_components]: core.List$(dart.nullable(actor_component.ActorComponent)),
    [_nodes]: core.List$(dart.nullable(actor_node.ActorNode)),
    [_animations]: core.List$(actor_animation.ActorAnimation),
    [_dependencyOrder]: dart.nullable(core.List$(dart.nullable(actor_component.ActorComponent))),
    [_name$0]: core.String,
    overrideColor: dart.nullable(typed_data.Float32List),
    modulateOpacity: core.double
  }));
  dart.setLibraryUri(actor_artboard.ActorArtboard, I[40]);
  dart.setFieldSignature(actor_artboard.ActorArtboard, () => ({
    __proto__: dart.getFields(actor_artboard.ActorArtboard.__proto__),
    [_flags]: dart.fieldType(core.int),
    [_drawableNodeCount]: dart.fieldType(core.int),
    [_nodeCount]: dart.fieldType(core.int),
    [_dirtDepth]: dart.fieldType(core.int),
    [__ActorArtboard__root]: dart.fieldType(dart.nullable(actor_node.ActorNode)),
    [__ActorArtboard__components]: dart.fieldType(dart.nullable(core.List$(dart.nullable(actor_component.ActorComponent)))),
    [__ActorArtboard__nodes]: dart.fieldType(dart.nullable(core.List$(dart.nullable(actor_node.ActorNode)))),
    [_drawableNodes]: dart.finalFieldType(core.List$(actor_drawable.ActorDrawable)),
    [_effectRenderers]: dart.finalFieldType(core.List$(actor_layer_effect_renderer.ActorLayerEffectRenderer)),
    [__ActorArtboard__animations]: dart.fieldType(dart.nullable(core.List$(actor_animation.ActorAnimation))),
    [__ActorArtboard__dependencyOrder]: dart.fieldType(dart.nullable(core.List$(dart.nullable(actor_component.ActorComponent)))),
    [__ActorArtboard__dependencyOrder_isSet]: dart.fieldType(core.bool),
    [_actor]: dart.finalFieldType(actor.Actor),
    [__ActorArtboard__name]: dart.fieldType(dart.nullable(core.String)),
    [_translation$]: dart.finalFieldType(vec2d.Vec2D),
    [_width$1]: dart.fieldType(core.double),
    [_height$]: dart.fieldType(core.double),
    [_origin]: dart.finalFieldType(vec2d.Vec2D),
    [_clipContents]: dart.fieldType(core.bool),
    [_color$0]: dart.finalFieldType(typed_data.Float32List),
    [_modulateOpacity]: dart.fieldType(core.double),
    [_overrideColor]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  var _components$ = dart.privateName(actor_animation, "_components");
  var _triggerComponents = dart.privateName(actor_animation, "_triggerComponents");
  var _name$1 = dart.privateName(actor_animation, "_name");
  var _fps = dart.privateName(actor_animation, "_fps");
  var _duration = dart.privateName(actor_animation, "_duration");
  var _isLooping = dart.privateName(actor_animation, "_isLooping");
  actor_animation.ActorAnimation = class ActorAnimation extends core.Object {
    static ['_#new#tearOff'](name, fps, duration, isLooping) {
      return new actor_animation.ActorAnimation.new(name, fps, duration, isLooping);
    }
    get animatedComponents() {
      return this[_components$];
    }
    get duration() {
      return this[_duration];
    }
    get fps() {
      return this[_fps];
    }
    get isLooping() {
      return this[_isLooping];
    }
    get name() {
      return this[_name$1];
    }
    apply(time, artboard, mix) {
      for (let componentAnimation of this[_components$]) {
        componentAnimation.apply(time, artboard.components, mix);
      }
    }
    triggerEvents(components, fromTime, toTime, triggerEvents) {
      for (let i = 0; i < this[_triggerComponents][$length]; i = i + 1) {
        let keyedComponent = this[_triggerComponents][$_get](i);
        for (let property of keyedComponent.properties) {
          switch (dart.nullCheck(property).propertyType) {
            case 11:
              {
                let keyFrames = dart.nullCheck(property.keyFrames);
                let kfl = keyFrames[$length];
                if (kfl === 0) {
                  continue;
                }
                let idx = 0;
                {
                  let mid = 0;
                  let element = 0.0;
                  let start = 0;
                  let end = kfl - 1;
                  while (start <= end) {
                    mid = (start + end)[$rightShift](1);
                    element = dart.nullCheck(keyFrames[$_get](mid)).time;
                    if (element < toTime) {
                      start = mid + 1;
                    } else if (element > toTime) {
                      end = mid - 1;
                    } else {
                      start = mid;
                      break;
                    }
                  }
                  idx = start;
                }
                if (idx === 0) {
                  if (kfl > 0 && dart.nullCheck(keyFrames[$_get](0)).time === toTime) {
                    let component = components[$_get](keyedComponent.componentIndex);
                    triggerEvents[$add](new actor_animation.AnimationEventArgs.new(component.name, component, property.propertyType, toTime, 0.0));
                  }
                } else {
                  for (let k = idx - 1; k >= 0; k = k - 1) {
                    let frame = dart.nullCheck(keyFrames[$_get](k));
                    if (frame.time > fromTime) {
                      let component = components[$_get](keyedComponent.componentIndex);
                      triggerEvents[$add](new actor_animation.AnimationEventArgs.new(component.name, component, property.propertyType, frame.time, toTime - frame.time));
                    } else {
                      break;
                    }
                  }
                }
                break;
              }
            default:
              {
                break;
              }
          }
        }
      }
    }
    static read(reader, components) {
      let animation = new actor_animation.ActorAnimation.new(reader.readString("name"), reader.readUint8("fps"), reader.readFloat32("duration"), reader.readBool("isLooping"));
      reader.openArray("keyed");
      let numKeyedComponents = reader.readUint16Length();
      let animatedComponents = T.JSArrayOfComponentAnimation().of([]);
      for (let i = 0; i < numKeyedComponents; i = i + 1) {
        let componentAnimation = actor_animation.ComponentAnimation.read(reader, components);
        animatedComponents[$add](componentAnimation);
      }
      reader.closeArray();
      for (let i = 0; i < numKeyedComponents; i = i + 1) {
        let componentAnimation = animatedComponents[$_get](i);
        let actorComponent = components[$_get](componentAnimation.componentIndex);
        if (actorComponent != null) {
          if (actor_event.ActorEvent.is(actorComponent)) {
            animation[_triggerComponents][$add](componentAnimation);
          } else {
            animation[_components$][$add](componentAnimation);
          }
        }
      }
      return animation;
    }
  };
  (actor_animation.ActorAnimation.new = function(name, fps, duration, isLooping) {
    this[_components$] = T.JSArrayOfComponentAnimation().of([]);
    this[_triggerComponents] = T.JSArrayOfComponentAnimation().of([]);
    this[_name$1] = name;
    this[_fps] = fps;
    this[_duration] = duration;
    this[_isLooping] = isLooping;
    ;
  }).prototype = actor_animation.ActorAnimation.prototype;
  dart.addTypeTests(actor_animation.ActorAnimation);
  dart.addTypeCaches(actor_animation.ActorAnimation);
  dart.setMethodSignature(actor_animation.ActorAnimation, () => ({
    __proto__: dart.getMethods(actor_animation.ActorAnimation.__proto__),
    apply: dart.fnType(dart.void, [core.double, actor_artboard.ActorArtboard, core.double]),
    triggerEvents: dart.fnType(dart.void, [core.List$(actor_component.ActorComponent), core.double, core.double, core.List$(actor_animation.AnimationEventArgs)])
  }));
  dart.setStaticMethodSignature(actor_animation.ActorAnimation, () => ['read']);
  dart.setGetterSignature(actor_animation.ActorAnimation, () => ({
    __proto__: dart.getGetters(actor_animation.ActorAnimation.__proto__),
    animatedComponents: core.List$(actor_animation.ComponentAnimation),
    duration: core.double,
    fps: core.int,
    isLooping: core.bool,
    name: core.String
  }));
  dart.setLibraryUri(actor_animation.ActorAnimation, I[41]);
  dart.setFieldSignature(actor_animation.ActorAnimation, () => ({
    __proto__: dart.getFields(actor_animation.ActorAnimation.__proto__),
    [_name$1]: dart.finalFieldType(core.String),
    [_fps]: dart.finalFieldType(core.int),
    [_duration]: dart.finalFieldType(core.double),
    [_isLooping]: dart.finalFieldType(core.bool),
    [_components$]: dart.finalFieldType(core.List$(actor_animation.ComponentAnimation)),
    [_triggerComponents]: dart.finalFieldType(core.List$(actor_animation.ComponentAnimation))
  }));
  var _component = dart.privateName(actor_animation, "_component");
  var _propertyType = dart.privateName(actor_animation, "_propertyType");
  var _keyFrameTime = dart.privateName(actor_animation, "_keyFrameTime");
  var _elapsedTime = dart.privateName(actor_animation, "_elapsedTime");
  actor_animation.AnimationEventArgs = class AnimationEventArgs extends core.Object {
    static ['_#new#tearOff'](name, component, type, keyframeTime, elapsedTime) {
      return new actor_animation.AnimationEventArgs.new(name, component, type, keyframeTime, elapsedTime);
    }
    get component() {
      return this[_component];
    }
    get elapsedTime() {
      return this[_elapsedTime];
    }
    get keyFrameTime() {
      return this[_keyFrameTime];
    }
    get name() {
      return this[_name$1];
    }
    get propertyType() {
      return this[_propertyType];
    }
  };
  (actor_animation.AnimationEventArgs.new = function(name, component, type, keyframeTime, elapsedTime) {
    this[_name$1] = name;
    this[_component] = component;
    this[_propertyType] = type;
    this[_keyFrameTime] = keyframeTime;
    this[_elapsedTime] = elapsedTime;
    ;
  }).prototype = actor_animation.AnimationEventArgs.prototype;
  dart.addTypeTests(actor_animation.AnimationEventArgs);
  dart.addTypeCaches(actor_animation.AnimationEventArgs);
  dart.setGetterSignature(actor_animation.AnimationEventArgs, () => ({
    __proto__: dart.getGetters(actor_animation.AnimationEventArgs.__proto__),
    component: actor_component.ActorComponent,
    elapsedTime: core.double,
    keyFrameTime: core.double,
    name: core.String,
    propertyType: core.int
  }));
  dart.setLibraryUri(actor_animation.AnimationEventArgs, I[41]);
  dart.setFieldSignature(actor_animation.AnimationEventArgs, () => ({
    __proto__: dart.getFields(actor_animation.AnimationEventArgs.__proto__),
    [_name$1]: dart.finalFieldType(core.String),
    [_component]: dart.finalFieldType(actor_component.ActorComponent),
    [_propertyType]: dart.finalFieldType(core.int),
    [_keyFrameTime]: dart.finalFieldType(core.double),
    [_elapsedTime]: dart.finalFieldType(core.double)
  }));
  var _properties = dart.privateName(actor_animation, "_properties");
  var _componentIndex = dart.privateName(actor_animation, "_componentIndex");
  actor_animation.ComponentAnimation = class ComponentAnimation extends core.Object {
    static ['_#new#tearOff'](componentIndex) {
      return new actor_animation.ComponentAnimation.new(componentIndex);
    }
    get componentIndex() {
      return this[_componentIndex];
    }
    get properties() {
      return this[_properties];
    }
    apply(time, components, mix) {
      for (let propertyAnimation of this[_properties]) {
        if (propertyAnimation != null) {
          propertyAnimation.apply(time, components[$_get](this[_componentIndex]), mix);
        }
      }
    }
    static read(reader, components) {
      reader.openObject("component");
      let componentAnimation = new actor_animation.ComponentAnimation.new(reader.readId("component"));
      let numProperties = reader.readUint16Length();
      for (let i = 0; i < numProperties; i = i + 1) {
        if (!(componentAnimation[_componentIndex] < components[$length])) dart.assertFailed(null, I[42], 234, 14, "componentAnimation._componentIndex < components.length");
        componentAnimation[_properties][$add](actor_animation.PropertyAnimation.read(reader, components[$_get](componentAnimation[_componentIndex])));
      }
      reader.closeObject();
      return componentAnimation;
    }
  };
  (actor_animation.ComponentAnimation.new = function(componentIndex) {
    this[_properties] = T.JSArrayOfPropertyAnimationN().of([]);
    this[_componentIndex] = componentIndex;
    ;
  }).prototype = actor_animation.ComponentAnimation.prototype;
  dart.addTypeTests(actor_animation.ComponentAnimation);
  dart.addTypeCaches(actor_animation.ComponentAnimation);
  dart.setMethodSignature(actor_animation.ComponentAnimation, () => ({
    __proto__: dart.getMethods(actor_animation.ComponentAnimation.__proto__),
    apply: dart.fnType(dart.void, [core.double, core.List$(dart.nullable(actor_component.ActorComponent)), core.double])
  }));
  dart.setStaticMethodSignature(actor_animation.ComponentAnimation, () => ['read']);
  dart.setGetterSignature(actor_animation.ComponentAnimation, () => ({
    __proto__: dart.getGetters(actor_animation.ComponentAnimation.__proto__),
    componentIndex: core.int,
    properties: core.List$(dart.nullable(actor_animation.PropertyAnimation))
  }));
  dart.setLibraryUri(actor_animation.ComponentAnimation, I[41]);
  dart.setFieldSignature(actor_animation.ComponentAnimation, () => ({
    __proto__: dart.getFields(actor_animation.ComponentAnimation.__proto__),
    [_componentIndex]: dart.finalFieldType(core.int),
    [_properties]: dart.finalFieldType(core.List$(dart.nullable(actor_animation.PropertyAnimation)))
  }));
  var _keyFrames = dart.privateName(actor_animation, "_keyFrames");
  var _type = dart.privateName(actor_animation, "_type");
  actor_animation.PropertyAnimation = class PropertyAnimation extends core.Object {
    static ['_#new#tearOff'](type) {
      return new actor_animation.PropertyAnimation.new(type);
    }
    get keyFrames() {
      return this[_keyFrames];
    }
    get propertyType() {
      return this[_type];
    }
    apply(time, component, mix) {
      if (dart.nullCheck(this[_keyFrames])[$isEmpty]) {
        return;
      }
      let idx = 0;
      {
        let mid = 0;
        let element = 0.0;
        let start = 0;
        let end = dart.nullCheck(this[_keyFrames])[$length] - 1;
        while (start <= end) {
          mid = (start + end)[$rightShift](1);
          element = dart.nullCheck(dart.nullCheck(this[_keyFrames])[$_get](mid)).time;
          if (element < time) {
            start = mid + 1;
          } else if (element > time) {
            end = mid - 1;
          } else {
            start = mid;
            break;
          }
        }
        idx = start;
      }
      if (idx === 0) {
        dart.nullCheck(dart.nullCheck(this[_keyFrames])[$_get](0)).apply(component, mix);
      } else {
        if (idx < dart.nullCheck(this[_keyFrames])[$length]) {
          let fromFrame = dart.nullCheck(this[_keyFrames])[$_get](idx - 1);
          let toFrame = dart.nullCheck(dart.nullCheck(this[_keyFrames])[$_get](idx));
          if (time === toFrame.time) {
            toFrame.apply(component, mix);
          } else {
            dart.nullCheck(fromFrame).applyInterpolation(component, time, toFrame, mix);
          }
        } else {
          dart.nullCheck(dart.nullCheck(this[_keyFrames])[$_get](idx - 1)).apply(component, mix);
        }
      }
    }
    static read(reader, component) {
      let propertyBlock = reader.readNextBlock(property_types.propertyTypesMap);
      if (propertyBlock == null) {
        return null;
      }
      let propertyAnimation = new actor_animation.PropertyAnimation.new(propertyBlock.blockType);
      let keyFrameReader = null;
      switch (propertyAnimation[_type]) {
        case 1:
          {
            keyFrameReader = C[31] || CT.C31;
            break;
          }
        case 2:
          {
            keyFrameReader = C[32] || CT.C32;
            break;
          }
        case 3:
          {
            keyFrameReader = C[33] || CT.C33;
            break;
          }
        case 4:
          {
            keyFrameReader = C[34] || CT.C34;
            break;
          }
        case 5:
          {
            keyFrameReader = C[35] || CT.C35;
            break;
          }
        case 6:
          {
            keyFrameReader = C[36] || CT.C36;
            break;
          }
        case 7:
          {
            keyFrameReader = C[37] || CT.C37;
            break;
          }
        case 8:
          {
            keyFrameReader = C[38] || CT.C38;
            break;
          }
        case 9:
          {
            keyFrameReader = C[39] || CT.C39;
            break;
          }
        case 10:
          {
            keyFrameReader = C[40] || CT.C40;
            break;
          }
        case 11:
          {
            keyFrameReader = C[41] || CT.C41;
            break;
          }
        case 12:
          {
            keyFrameReader = C[42] || CT.C42;
            break;
          }
        case 13:
          {
            keyFrameReader = C[43] || CT.C43;
            break;
          }
        case 14:
          {
            keyFrameReader = C[44] || CT.C44;
            break;
          }
        case 15:
          {
            keyFrameReader = C[45] || CT.C45;
            break;
          }
        case 16:
          {
            keyFrameReader = C[46] || CT.C46;
            break;
          }
        case 18:
          {
            keyFrameReader = C[47] || CT.C47;
            break;
          }
        case 17:
          {
            keyFrameReader = C[48] || CT.C48;
            break;
          }
        case 19:
          {
            keyFrameReader = C[49] || CT.C49;
            break;
          }
        case 20:
          {
            keyFrameReader = C[50] || CT.C50;
            break;
          }
        case 36:
          {
            keyFrameReader = C[51] || CT.C51;
            break;
          }
        case 37:
          {
            keyFrameReader = C[52] || CT.C52;
            break;
          }
        case 38:
          {
            keyFrameReader = C[53] || CT.C53;
            break;
          }
        case 39:
          {
            keyFrameReader = C[54] || CT.C54;
            break;
          }
        case 40:
          {
            keyFrameReader = C[55] || CT.C55;
            break;
          }
        case 21:
          {
            keyFrameReader = C[56] || CT.C56;
            break;
          }
        case 24:
          {
            keyFrameReader = C[56] || CT.C56;
            break;
          }
        case 22:
          {
            keyFrameReader = C[57] || CT.C57;
            break;
          }
        case 25:
          {
            keyFrameReader = C[57] || CT.C57;
            break;
          }
        case 23:
          {
            keyFrameReader = C[58] || CT.C58;
            break;
          }
        case 26:
          {
            keyFrameReader = C[59] || CT.C59;
            break;
          }
        case 27:
        case 28:
          {
            keyFrameReader = C[60] || CT.C60;
            break;
          }
        case 29:
          {
            keyFrameReader = C[61] || CT.C61;
            break;
          }
        case 30:
          {
            keyFrameReader = C[62] || CT.C62;
            break;
          }
        case 31:
          {
            keyFrameReader = C[63] || CT.C63;
            break;
          }
        case 32:
          {
            keyFrameReader = C[64] || CT.C64;
            break;
          }
        case 33:
          {
            keyFrameReader = C[65] || CT.C65;
            break;
          }
        case 34:
          {
            keyFrameReader = C[66] || CT.C66;
            break;
          }
        case 35:
          {
            keyFrameReader = C[67] || CT.C67;
            break;
          }
      }
      if (keyFrameReader == null) {
        return null;
      }
      propertyBlock.openArray("frames");
      let keyFrameCount = propertyBlock.readUint16Length();
      propertyAnimation[_keyFrames] = T.JSArrayOfKeyFrameN().of([]);
      let lastKeyFrame = null;
      for (let i = 0; i < keyFrameCount; i = i + 1) {
        propertyBlock.openObject("frame");
        let frame = keyFrameReader(propertyBlock, component);
        dart.nullCheck(propertyAnimation[_keyFrames])[$add](frame);
        if (lastKeyFrame != null) {
          lastKeyFrame.setNext(frame);
        }
        lastKeyFrame = frame;
        propertyBlock.closeObject();
      }
      propertyBlock.closeArray();
      return propertyAnimation;
    }
  };
  (actor_animation.PropertyAnimation.new = function(type) {
    this[_keyFrames] = null;
    this[_type] = type;
    ;
  }).prototype = actor_animation.PropertyAnimation.prototype;
  dart.addTypeTests(actor_animation.PropertyAnimation);
  dart.addTypeCaches(actor_animation.PropertyAnimation);
  dart.setMethodSignature(actor_animation.PropertyAnimation, () => ({
    __proto__: dart.getMethods(actor_animation.PropertyAnimation.__proto__),
    apply: dart.fnType(dart.void, [core.double, dart.nullable(actor_component.ActorComponent), core.double])
  }));
  dart.setStaticMethodSignature(actor_animation.PropertyAnimation, () => ['read']);
  dart.setGetterSignature(actor_animation.PropertyAnimation, () => ({
    __proto__: dart.getGetters(actor_animation.PropertyAnimation.__proto__),
    keyFrames: dart.nullable(core.List$(dart.nullable(keyframe.KeyFrame))),
    propertyType: core.int
  }));
  dart.setLibraryUri(actor_animation.PropertyAnimation, I[41]);
  dart.setFieldSignature(actor_animation.PropertyAnimation, () => ({
    __proto__: dart.getFields(actor_animation.PropertyAnimation.__proto__),
    [_type]: dart.finalFieldType(core.int),
    [_keyFrames]: dart.fieldType(dart.nullable(core.List$(dart.nullable(keyframe.KeyFrame))))
  }));
  dart.trackLibraries("packages/flare_flutter/base/animation/keyframe.dart", {
    "package:flare_flutter/base/animation/keyframe.dart": keyframe,
    "package:flare_flutter/base/dependency_sorter.dart": dependency_sorter,
    "package:flare_flutter/base/actor_translation_constraint.dart": actor_translation_constraint,
    "package:flare_flutter/base/actor_transform_constraint.dart": actor_transform_constraint,
    "package:flare_flutter/base/actor_axis_constraint.dart": actor_axis_constraint,
    "package:flare_flutter/base/actor_scale_constraint.dart": actor_scale_constraint,
    "package:flare_flutter/base/actor_rotation_constraint.dart": actor_rotation_constraint,
    "package:flare_flutter/base/actor_node_solo.dart": actor_node_solo,
    "package:flare_flutter/base/actor_ik_constraint.dart": actor_ik_constraint,
    "package:flare_flutter/base/actor_event.dart": actor_event,
    "package:flare_flutter/base/actor_targeted_constraint.dart": actor_targeted_constraint,
    "package:flare_flutter/base/actor_distance_constraint.dart": actor_distance_constraint,
    "package:flare_flutter/base/actor_root_bone.dart": actor_root_bone,
    "package:flare_flutter/base/actor_jelly_bone.dart": actor_jelly_bone,
    "package:flare_flutter/base/jelly_component.dart": jelly_component,
    "package:flare_flutter/base/actor_bone_base.dart": actor_bone_base,
    "package:flare_flutter/base/actor_bone.dart": actor_bone,
    "package:flare_flutter/base/actor_triangle.dart": actor_triangle,
    "package:flare_flutter/base/actor_star.dart": actor_star,
    "package:flare_flutter/base/actor_rectangle.dart": actor_rectangle,
    "package:flare_flutter/base/actor_polygon.dart": actor_polygon,
    "package:flare_flutter/base/actor_image.dart": actor_image,
    "package:flare_flutter/base/actor_ellipse.dart": actor_ellipse,
    "package:flare_flutter/base/actor_mask.dart": actor_mask,
    "package:flare_flutter/base/actor_inner_shadow.dart": actor_inner_shadow,
    "package:flare_flutter/base/actor_shadow.dart": actor_shadow,
    "package:flare_flutter/base/actor_drop_shadow.dart": actor_drop_shadow,
    "package:flare_flutter/base/actor_skin.dart": actor_skin,
    "package:flare_flutter/base/actor_skinnable.dart": actor_skinnable,
    "package:flare_flutter/base/actor_path.dart": actor_path,
    "package:flare_flutter/base/actor_shape.dart": actor_shape,
    "package:flare_flutter/base/actor_drawable.dart": actor_drawable,
    "package:flare_flutter/base/actor_layer_effect.dart": actor_layer_effect,
    "package:flare_flutter/base/actor_blur.dart": actor_blur,
    "package:flare_flutter/base/actor_layer_effect_renderer.dart": actor_layer_effect_renderer,
    "package:flare_flutter/base/actor_constraint.dart": actor_constraint,
    "package:flare_flutter/base/actor_node.dart": actor_node,
    "package:flare_flutter/base/actor_component.dart": actor_component,
    "package:flare_flutter/base/actor_color.dart": actor_color,
    "package:flare_flutter/base/actor.dart": actor,
    "package:flare_flutter/base/actor_artboard.dart": actor_artboard,
    "package:flare_flutter/base/animation/actor_animation.dart": actor_animation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keyframe.dart","../dependency_sorter.dart","../actor_component.dart","../actor_constraint.dart","../actor_targeted_constraint.dart","../actor_axis_constraint.dart","../actor_translation_constraint.dart","../actor_transform_constraint.dart","../actor_scale_constraint.dart","../actor_rotation_constraint.dart","../actor_node.dart","../actor_node_solo.dart","../actor_ik_constraint.dart","../actor_event.dart","../actor_distance_constraint.dart","../actor_root_bone.dart","../actor_bone_base.dart","../actor_jelly_bone.dart","../jelly_component.dart","../actor_bone.dart","../actor_path.dart","../actor_triangle.dart","../actor_star.dart","../actor_rectangle.dart","../actor_polygon.dart","../actor_drawable.dart","../actor_skinnable.dart","../actor_image.dart","../actor_ellipse.dart","../actor_mask.dart","../actor_layer_effect.dart","../actor_blur.dart","../actor_shadow.dart","../actor_inner_shadow.dart","../actor_drop_shadow.dart","../actor_skin.dart","../actor_shape.dart","../actor_layer_effect_renderer.dart","../actor_color.dart","../actor.dart","../actor_artboard.dart","actor_animation.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/flare_flutter/base/animation/keyframe.dart.lib.js"}');
  // Exports:
  return {
    base__animation__keyframe: keyframe,
    base__dependency_sorter: dependency_sorter,
    base__actor_translation_constraint: actor_translation_constraint,
    base__actor_transform_constraint: actor_transform_constraint,
    base__actor_axis_constraint: actor_axis_constraint,
    base__actor_scale_constraint: actor_scale_constraint,
    base__actor_rotation_constraint: actor_rotation_constraint,
    base__actor_node_solo: actor_node_solo,
    base__actor_ik_constraint: actor_ik_constraint,
    base__actor_event: actor_event,
    base__actor_targeted_constraint: actor_targeted_constraint,
    base__actor_distance_constraint: actor_distance_constraint,
    base__actor_root_bone: actor_root_bone,
    base__actor_jelly_bone: actor_jelly_bone,
    base__jelly_component: jelly_component,
    base__actor_bone_base: actor_bone_base,
    base__actor_bone: actor_bone,
    base__actor_triangle: actor_triangle,
    base__actor_star: actor_star,
    base__actor_rectangle: actor_rectangle,
    base__actor_polygon: actor_polygon,
    base__actor_image: actor_image,
    base__actor_ellipse: actor_ellipse,
    base__actor_mask: actor_mask,
    base__actor_inner_shadow: actor_inner_shadow,
    base__actor_shadow: actor_shadow,
    base__actor_drop_shadow: actor_drop_shadow,
    base__actor_skin: actor_skin,
    base__actor_skinnable: actor_skinnable,
    base__actor_path: actor_path,
    base__actor_shape: actor_shape,
    base__actor_drawable: actor_drawable,
    base__actor_layer_effect: actor_layer_effect,
    base__actor_blur: actor_blur,
    base__actor_layer_effect_renderer: actor_layer_effect_renderer,
    base__actor_constraint: actor_constraint,
    base__actor_node: actor_node,
    base__actor_component: actor_component,
    base__actor_color: actor_color,
    base__actor: actor,
    base__actor_artboard: actor_artboard,
    base__animation__actor_animation: actor_animation
  };
}));

//# sourceMappingURL=keyframe.dart.lib.js.map
