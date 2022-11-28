define(['dart_sdk', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/synchronous_future.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/services/binary_messenger.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/serialization.dart', 'packages/flutter/src/services/keyboard_maps.g.dart', 'packages/flutter/src/services/keyboard_key.g.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/foundation/licenses.dart', 'packages/flutter/src/foundation/_isolates_web.dart', 'packages/flutter/src/foundation/consolidate_response.dart'], (function load__packages__flutter__src__services__text_editing_delta_dart(dart_sdk, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__collections$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__synchronous_future$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__services__binary_messenger$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation__serialization$46dart, packages__flutter__src__services__keyboard_maps$46g$46dart, packages__flutter__src__services__keyboard_key$46g$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__foundation__licenses$46dart, packages__flutter__src__foundation___isolates_web$46dart, packages__flutter__src__foundation__consolidate_response$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const io = dart_sdk.io;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const typed_data = dart_sdk.typed_data;
  const developer = dart_sdk.developer;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _http = dart_sdk._http;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const synchronous_future = packages__flutter__src__foundation__synchronous_future$46dart.src__foundation__synchronous_future;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const binary_messenger = packages__flutter__src__services__binary_messenger$46dart.src__services__binary_messenger;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const serialization = packages__flutter__src__foundation__serialization$46dart.src__foundation__serialization;
  const keyboard_maps$46g = packages__flutter__src__services__keyboard_maps$46g$46dart.src__services__keyboard_maps$46g;
  const keyboard_key$46g = packages__flutter__src__services__keyboard_key$46g$46dart.src__services__keyboard_key$46g;
  const binding$ = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const licenses$ = packages__flutter__src__foundation__licenses$46dart.src__foundation__licenses;
  const isolates = packages__flutter__src__foundation___isolates_web$46dart.src__foundation__isolates;
  const consolidate_response = packages__flutter__src__foundation__consolidate_response$46dart.src__foundation__consolidate_response;
  var text_editing_delta = Object.create(dart.library);
  var clipboard = Object.create(dart.library);
  var autofill = Object.create(dart.library);
  var text_input = Object.create(dart.library);
  var restoration = Object.create(dart.library);
  var debug = Object.create(dart.library);
  var platform_channel = Object.create(dart.library);
  var message_codec = Object.create(dart.library);
  var message_codecs = Object.create(dart.library);
  var system_channels = Object.create(dart.library);
  var raw_keyboard_windows = Object.create(dart.library);
  var raw_keyboard_web = Object.create(dart.library);
  var raw_keyboard_macos = Object.create(dart.library);
  var raw_keyboard_linux = Object.create(dart.library);
  var raw_keyboard_ios = Object.create(dart.library);
  var raw_keyboard_fuchsia = Object.create(dart.library);
  var raw_keyboard_android = Object.create(dart.library);
  var raw_keyboard = Object.create(dart.library);
  var hardware_keyboard = Object.create(dart.library);
  var binding$0 = Object.create(dart.library);
  var asset_bundle = Object.create(dart.library);
  var $_get = dartx._get;
  var $isEmpty = dartx.isEmpty;
  var $substring = dartx.substring;
  var $_set = dartx._set;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $toString = dartx.toString;
  var $any = dartx.any;
  var $replaceRange = dartx.replaceRange;
  var $clamp = dartx.clamp;
  var $hashCode = dartx.hashCode;
  var $runtimeType = dartx.runtimeType;
  var $contains = dartx.contains;
  var $toDouble = dartx.toDouble;
  var $cast = dartx.cast;
  var $keys = dartx.keys;
  var $where = dartx.where;
  var $addAll = dartx.addAll;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $buffer = dartx.buffer;
  var $offsetInBytes = dartx.offsetInBytes;
  var $lengthInBytes = dartx.lengthInBytes;
  var $asByteData = dartx.asByteData;
  var $asUint8List = dartx.asUint8List;
  var $putIfAbsent = dartx.putIfAbsent;
  var $containsKey = dartx.containsKey;
  var $entries = dartx.entries;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $values = dartx.values;
  var $expand = dartx.expand;
  var $followedBy = dartx.followedBy;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $sort = dartx.sort;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $length = dartx.length;
  var $codeUnitAt = dartx.codeUnitAt;
  var $toLowerCase = dartx.toLowerCase;
  var $runes = dartx.runes;
  var $toSet = dartx.toSet;
  var $times = dartx['*'];
  var $split = dartx.split;
  var $indexOf = dartx.indexOf;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    boolN: () => (T$.boolN = dart.constFn(dart.nullable(core.bool)))(),
    IdentityMapOfString$dynamic: () => (T$.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T$.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    ClipboardDataN: () => (T$.ClipboardDataN = dart.constFn(dart.nullable(clipboard.ClipboardData)))(),
    TextInputConfigurationToMapOfString$dynamic: () => (T$.TextInputConfigurationToMapOfString$dynamic = dart.constFn(dart.fnType(T$.MapOfString$dynamic(), [text_input.TextInputConfiguration])))(),
    AutofillClientTobool: () => (T$.AutofillClientTobool = dart.constFn(dart.fnType(core.bool, [autofill.AutofillClient])))(),
    AutofillClientToTextInputConfiguration: () => (T$.AutofillClientToTextInputConfiguration = dart.constFn(dart.fnType(text_input.TextInputConfiguration, [autofill.AutofillClient])))(),
    intToint: () => (T$.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    JSArrayOfSelectionRect: () => (T$.JSArrayOfSelectionRect = dart.constFn(_interceptors.JSArray$(text_input.SelectionRect)))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    ListOfnum: () => (T$.ListOfnum = dart.constFn(core.List$(core.num)))(),
    JSArrayOfnum: () => (T$.JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core.num)))(),
    SelectionRectToListOfnum: () => (T$.SelectionRectToListOfnum = dart.constFn(dart.fnType(T$.ListOfnum(), [text_input.SelectionRect])))(),
    IdentityMapOfString$ScribbleClient: () => (T$.IdentityMapOfString$ScribbleClient = dart.constFn(_js_helper.IdentityMap$(core.String, text_input.ScribbleClient)))(),
    JSArrayOfObject: () => (T$.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))(),
    DiagnosticsPropertyOfMethodCall: () => (T$.DiagnosticsPropertyOfMethodCall = dart.constFn(diagnostics.DiagnosticsProperty$(message_codec.MethodCall)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T$.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T$.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T$.ListOfDiagnosticsNode(), [])))(),
    numTodouble: () => (T$.numTodouble = dart.constFn(dart.fnType(core.double, [core.num])))(),
    StringTobool: () => (T$.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))(),
    StringToList: () => (T$.StringToList = dart.constFn(dart.fnType(core.List, [core.String])))(),
    JSArrayOfTextEditingDelta: () => (T$.JSArrayOfTextEditingDelta = dart.constFn(_interceptors.JSArray$(text_editing_delta.TextEditingDelta)))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    LinkedHashSetOfRestorationBucket: () => (T$.LinkedHashSetOfRestorationBucket = dart.constFn(collection.LinkedHashSet$(restoration.RestorationBucket)))(),
    RestorationBucketN: () => (T$.RestorationBucketN = dart.constFn(dart.nullable(restoration.RestorationBucket)))(),
    SynchronousFutureOfRestorationBucketN: () => (T$.SynchronousFutureOfRestorationBucketN = dart.constFn(synchronous_future.SynchronousFuture$(T$.RestorationBucketN())))(),
    CompleterOfRestorationBucketN: () => (T$.CompleterOfRestorationBucketN = dart.constFn(async.Completer$(T$.RestorationBucketN())))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    MapOfObjectN$ObjectN: () => (T$.MapOfObjectN$ObjectN = dart.constFn(core.Map$(T$.ObjectN(), T$.ObjectN())))(),
    Uint8ListN: () => (T$.Uint8ListN = dart.constFn(dart.nullable(typed_data.Uint8List)))(),
    DurationTovoid: () => (T$.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    MapNOfObjectN$ObjectN: () => (T$.MapNOfObjectN$ObjectN = dart.constFn(dart.nullable(T$.MapOfObjectN$ObjectN())))(),
    IdentityMapOfString$RestorationBucket: () => (T$.IdentityMapOfString$RestorationBucket = dart.constFn(_js_helper.IdentityMap$(core.String, restoration.RestorationBucket)))(),
    ListOfRestorationBucket: () => (T$.ListOfRestorationBucket = dart.constFn(core.List$(restoration.RestorationBucket)))(),
    IdentityMapOfString$ListOfRestorationBucket: () => (T$.IdentityMapOfString$ListOfRestorationBucket = dart.constFn(_js_helper.IdentityMap$(core.String, T$.ListOfRestorationBucket())))(),
    IdentityMapOfString$ObjectN: () => (T$.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T$.ObjectN())))(),
    LinkedMapOfObjectN$ObjectN: () => (T$.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T$.ObjectN(), T$.ObjectN())))(),
    VoidToMapOfObjectN$ObjectN: () => (T$.VoidToMapOfObjectN$ObjectN = dart.constFn(dart.fnType(T$.MapOfObjectN$ObjectN(), [])))(),
    RestorationBucketToErrorDescription: () => (T$.RestorationBucketToErrorDescription = dart.constFn(dart.fnType(assertions.ErrorDescription, [restoration.RestorationBucket])))(),
    JSArrayOfRestorationBucket: () => (T$.JSArrayOfRestorationBucket = dart.constFn(_interceptors.JSArray$(restoration.RestorationBucket)))(),
    VoidToListOfRestorationBucket: () => (T$.VoidToListOfRestorationBucket = dart.constFn(dart.fnType(T$.ListOfRestorationBucket(), [])))(),
    ListOfRestorationBucketToListOfRestorationBucket: () => (T$.ListOfRestorationBucketToListOfRestorationBucket = dart.constFn(dart.fnType(T$.ListOfRestorationBucket(), [T$.ListOfRestorationBucket()])))(),
    ByteDataN: () => (T$.ByteDataN = dart.constFn(dart.nullable(typed_data.ByteData)))(),
    FutureOfByteDataN: () => (T$.FutureOfByteDataN = dart.constFn(async.Future$(T$.ByteDataN())))(),
    ByteDataNToFutureOfByteDataN: () => (T$.ByteDataNToFutureOfByteDataN = dart.constFn(dart.fnType(T$.FutureOfByteDataN(), [T$.ByteDataN()])))(),
    VoidToStreamController: () => (T$.VoidToStreamController = dart.constFn(dart.fnType(async.StreamController, [])))(),
    StreamControllerTodynamic: () => (T$.StreamControllerTodynamic = dart.constFn(dart.fnType(dart.dynamic, [async.StreamController])))(),
    FutureOfNull: () => (T$.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    ByteDataNToFutureOfNull: () => (T$.ByteDataNToFutureOfNull = dart.constFn(dart.fnType(T$.FutureOfNull(), [T$.ByteDataN()])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T$.VoidToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [])))(),
    _PlatformChannelStatsAnd_PlatformChannelStatsToint: () => (T$._PlatformChannelStatsAnd_PlatformChannelStatsToint = dart.constFn(dart.fnType(core.int, [platform_channel._PlatformChannelStats, platform_channel._PlatformChannelStats])))(),
    ExpandoOfBinaryMessenger: () => (T$.ExpandoOfBinaryMessenger = dart.constFn(core.Expando$(binary_messenger.BinaryMessenger)))(),
    IdentityMapOfString$_PlatformChannelStats: () => (T$.IdentityMapOfString$_PlatformChannelStats = dart.constFn(_js_helper.IdentityMap$(core.String, platform_channel._PlatformChannelStats)))(),
    JSArrayOfObjectN: () => (T$.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T$.ObjectN())))(),
    ObjectNAndObjectNTovoid: () => (T$.ObjectNAndObjectNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ObjectN(), T$.ObjectN()])))(),
    ListOfObjectN: () => (T$.ListOfObjectN = dart.constFn(core.List$(T$.ObjectN())))(),
    BasicMessageChannelOfObjectN: () => (T$.BasicMessageChannelOfObjectN = dart.constFn(platform_channel.BasicMessageChannel$(T$.ObjectN())))(),
    BasicMessageChannelOfStringN: () => (T$.BasicMessageChannelOfStringN = dart.constFn(platform_channel.BasicMessageChannel$(T$.StringN())))(),
    KeyboardSideN: () => (T$.KeyboardSideN = dart.constFn(dart.nullable(raw_keyboard.KeyboardSide)))(),
    intAndintAndintToKeyboardSideN: () => (T$.intAndintAndintToKeyboardSideN = dart.constFn(dart.fnType(T$.KeyboardSideN(), [core.int, core.int, core.int])))(),
    DiagnosticsPropertyOfint: () => (T$.DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))(),
    LinkedMapOfModifierKey$KeyboardSide: () => (T$.LinkedMapOfModifierKey$KeyboardSide = dart.constFn(_js_helper.LinkedMap$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)))(),
    DiagnosticsPropertyOfString: () => (T$.DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))(),
    DiagnosticsPropertyOfintN: () => (T$.DiagnosticsPropertyOfintN = dart.constFn(diagnostics.DiagnosticsProperty$(T$.intN())))(),
    DiagnosticsPropertyOfbool: () => (T$.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    VoidToRawKeyEventData: () => (T$.VoidToRawKeyEventData = dart.constFn(dart.fnType(raw_keyboard.RawKeyEventData, [])))(),
    DiagnosticsPropertyOfLogicalKeyboardKey: () => (T$.DiagnosticsPropertyOfLogicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key$46g.LogicalKeyboardKey)))(),
    DiagnosticsPropertyOfPhysicalKeyboardKey: () => (T$.DiagnosticsPropertyOfPhysicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key$46g.PhysicalKeyboardKey)))(),
    RawKeyEventTovoid: () => (T$.RawKeyEventTovoid = dart.constFn(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])))(),
    JSArrayOfRawKeyEventTovoid: () => (T$.JSArrayOfRawKeyEventTovoid = dart.constFn(_interceptors.JSArray$(T$.RawKeyEventTovoid())))(),
    LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey: () => (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(keyboard_key$46g.PhysicalKeyboardKey, keyboard_key$46g.LogicalKeyboardKey)))(),
    RawKeyEventTobool: () => (T$.RawKeyEventTobool = dart.constFn(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent])))(),
    KeyMessageTobool: () => (T$.KeyMessageTobool = dart.constFn(dart.fnType(core.bool, [hardware_keyboard.KeyMessage])))(),
    ListOfRawKeyEventTovoid: () => (T$.ListOfRawKeyEventTovoid = dart.constFn(core.List$(T$.RawKeyEventTovoid())))(),
    DiagnosticsPropertyOfRawKeyEvent: () => (T$.DiagnosticsPropertyOfRawKeyEvent = dart.constFn(diagnostics.DiagnosticsProperty$(raw_keyboard.RawKeyEvent)))(),
    LinkedHashSetOfPhysicalKeyboardKey: () => (T$.LinkedHashSetOfPhysicalKeyboardKey = dart.constFn(collection.LinkedHashSet$(keyboard_key$46g.PhysicalKeyboardKey)))(),
    PhysicalKeyboardKeyTobool: () => (T$.PhysicalKeyboardKeyTobool = dart.constFn(dart.fnType(core.bool, [keyboard_key$46g.PhysicalKeyboardKey])))(),
    SetOfPhysicalKeyboardKey: () => (T$.SetOfPhysicalKeyboardKey = dart.constFn(core.Set$(keyboard_key$46g.PhysicalKeyboardKey)))(),
    LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey: () => (T$.LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(raw_keyboard._ModifierSidePair, T$.SetOfPhysicalKeyboardKey())))(),
    IdentityMapOfint$KeyboardLockMode: () => (T$.IdentityMapOfint$KeyboardLockMode = dart.constFn(_js_helper.IdentityMap$(core.int, hardware_keyboard.KeyboardLockMode)))(),
    DiagnosticsPropertyOfDuration: () => (T$.DiagnosticsPropertyOfDuration = dart.constFn(diagnostics.DiagnosticsProperty$(core.Duration)))(),
    LinkedHashSetOfKeyboardLockMode: () => (T$.LinkedHashSetOfKeyboardLockMode = dart.constFn(collection.LinkedHashSet$(hardware_keyboard.KeyboardLockMode)))(),
    KeyEventTobool: () => (T$.KeyEventTobool = dart.constFn(dart.fnType(core.bool, [hardware_keyboard.KeyEvent])))(),
    JSArrayOfKeyEventTobool: () => (T$.JSArrayOfKeyEventTobool = dart.constFn(_interceptors.JSArray$(T$.KeyEventTobool())))(),
    ListOfKeyEventTobool: () => (T$.ListOfKeyEventTobool = dart.constFn(core.List$(T$.KeyEventTobool())))(),
    DiagnosticsPropertyOfKeyEvent: () => (T$.DiagnosticsPropertyOfKeyEvent = dart.constFn(diagnostics.DiagnosticsProperty$(hardware_keyboard.KeyEvent)))(),
    JSArrayOfKeyEvent: () => (T$.JSArrayOfKeyEvent = dart.constFn(_interceptors.JSArray$(hardware_keyboard.KeyEvent)))(),
    DiagnosticsPropertyOfKeyMessage: () => (T$.DiagnosticsPropertyOfKeyMessage = dart.constFn(diagnostics.DiagnosticsProperty$(hardware_keyboard.KeyMessage)))(),
    dynamicToFutureOfvoid: () => (T$.dynamicToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [dart.dynamic])))(),
    StreamControllerOfLicenseEntry: () => (T$.StreamControllerOfLicenseEntry = dart.constFn(async.StreamController$(licenses$.LicenseEntry)))(),
    VoidToStreamControllerOfLicenseEntry: () => (T$.VoidToStreamControllerOfLicenseEntry = dart.constFn(dart.fnType(T$.StreamControllerOfLicenseEntry(), [])))(),
    StreamControllerOfLicenseEntryTodynamic: () => (T$.StreamControllerOfLicenseEntryTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.StreamControllerOfLicenseEntry()])))(),
    VoidToString: () => (T$.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    StringTodynamic: () => (T$.StringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String])))(),
    ListOfLicenseEntry: () => (T$.ListOfLicenseEntry = dart.constFn(core.List$(licenses$.LicenseEntry)))(),
    StringToListOfLicenseEntry: () => (T$.StringToListOfLicenseEntry = dart.constFn(dart.fnType(T$.ListOfLicenseEntry(), [core.String])))(),
    LicenseEntryTovoid: () => (T$.LicenseEntryTovoid = dart.constFn(dart.fnType(dart.void, [licenses$.LicenseEntry])))(),
    JSArrayOfLicenseEntry: () => (T$.JSArrayOfLicenseEntry = dart.constFn(_interceptors.JSArray$(licenses$.LicenseEntry)))(),
    FutureOfString: () => (T$.FutureOfString = dart.constFn(async.Future$(core.String)))(),
    VoidToFutureOfString: () => (T$.VoidToFutureOfString = dart.constFn(dart.fnType(T$.FutureOfString(), [])))(),
    StringToFutureOfvoid: () => (T$.StringToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [core.String])))(),
    ByteDataNTovoid: () => (T$.ByteDataNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ByteDataN()])))(),
    CompleterOfByteDataN: () => (T$.CompleterOfByteDataN = dart.constFn(async.Completer$(T$.ByteDataN())))(),
    ByteDataNAndFnToFutureOfvoid: () => (T$.ByteDataNAndFnToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [T$.ByteDataN(), T$.ByteDataNTovoid()])))(),
    ByteDataToString: () => (T$.ByteDataToString = dart.constFn(dart.fnType(core.String, [typed_data.ByteData])))(),
    IdentityMapOfString$FutureOfString: () => (T$.IdentityMapOfString$FutureOfString = dart.constFn(_js_helper.IdentityMap$(core.String, T$.FutureOfString())))(),
    IdentityMapOfString$Future: () => (T$.IdentityMapOfString$Future = dart.constFn(_js_helper.IdentityMap$(core.String, async.Future)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], core.String);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.TextRange.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_Enum__name]: "downstream",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1,
        [TextSelection_isDirectional]: false,
        [TextSelection_affinity]: C[5] || CT.C5,
        [TextSelection_extentOffset]: -1,
        [TextSelection_baseOffset]: -1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text_input.TextEditingValue.prototype,
        [TextEditingValue_composing]: C[3] || CT.C3,
        [TextEditingValue_selection]: C[4] || CT.C4,
        [TextEditingValue_text]: ""
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: autofill.AutofillConfiguration.prototype,
        [hintText$]: null,
        [currentEditingValue$]: C[2] || CT.C2,
        [autofillHints$]: C[0] || CT.C0,
        [uniqueIdentifier$]: "",
        [enabled$]: false
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "done",
        [_Enum_index]: 2
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 3
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: text_input.SmartDashesType.prototype,
        [_Enum__name]: "disabled",
        [_Enum_index]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: text_input.SmartDashesType.prototype,
        [_Enum__name]: "enabled",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.constList([C[11] || CT.C11, C[12] || CT.C12], text_input.SmartDashesType);
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: text_input.SmartQuotesType.prototype,
        [_Enum__name]: "disabled",
        [_Enum_index]: 0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text_input.SmartQuotesType.prototype,
        [_Enum__name]: "enabled",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.constList([C[14] || CT.C14, C[15] || CT.C15], text_input.SmartQuotesType);
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 1
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: false,
        [TextInputType_signed]: false,
        [TextInputType_index]: 2
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 3
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 4
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 5
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 6
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 7
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 8
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 9
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 10
      });
    },
    get C26() {
      return C[26] = dart.constList([C[6] || CT.C6, C[16] || CT.C16, C[17] || CT.C17, C[18] || CT.C18, C[19] || CT.C19, C[20] || CT.C20, C[21] || CT.C21, C[22] || CT.C22, C[23] || CT.C23, C[24] || CT.C24, C[25] || CT.C25], text_input.TextInputType);
    },
    get C27() {
      return C[27] = dart.constList(["text", "multiline", "number", "phone", "datetime", "emailAddress", "url", "visiblePassword", "name", "address", "none"], core.String);
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "unspecified",
        [_Enum_index]: 1
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "go",
        [_Enum_index]: 3
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "search",
        [_Enum_index]: 4
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "send",
        [_Enum_index]: 5
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "next",
        [_Enum_index]: 6
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "previous",
        [_Enum_index]: 7
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "continueAction",
        [_Enum_index]: 8
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "join",
        [_Enum_index]: 9
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "route",
        [_Enum_index]: 10
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "emergencyCall",
        [_Enum_index]: 11
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "newline",
        [_Enum_index]: 12
      });
    },
    get C28() {
      return C[28] = dart.constList([C[29] || CT.C29, C[30] || CT.C30, C[7] || CT.C7, C[31] || CT.C31, C[32] || CT.C32, C[33] || CT.C33, C[34] || CT.C34, C[35] || CT.C35, C[36] || CT.C36, C[37] || CT.C37, C[38] || CT.C38, C[39] || CT.C39, C[40] || CT.C40], text_input.TextInputAction);
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "words",
        [_Enum_index]: 0
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "sentences",
        [_Enum_index]: 1
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "characters",
        [_Enum_index]: 2
      });
    },
    get C41() {
      return C[41] = dart.constList([C[42] || CT.C42, C[43] || CT.C43, C[44] || CT.C44, C[9] || CT.C9], text_input.TextCapitalization);
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_Enum__name]: "Start",
        [_Enum_index]: 0
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_Enum__name]: "Update",
        [_Enum_index]: 1
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_Enum__name]: "End",
        [_Enum_index]: 2
      });
    },
    get C45() {
      return C[45] = dart.constList([C[46] || CT.C46, C[47] || CT.C47, C[48] || CT.C48], text_input.FloatingCursorDragState);
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "tap",
        [_Enum_index]: 0
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "doubleTap",
        [_Enum_index]: 1
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "longPress",
        [_Enum_index]: 2
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "forcePress",
        [_Enum_index]: 3
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "keyboard",
        [_Enum_index]: 4
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "toolbar",
        [_Enum_index]: 5
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "drag",
        [_Enum_index]: 6
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "scribble",
        [_Enum_index]: 7
      });
    },
    get C49() {
      return C[49] = dart.constList([C[50] || CT.C50, C[51] || CT.C51, C[52] || CT.C52, C[53] || CT.C53, C[54] || CT.C54, C[55] || CT.C55, C[56] || CT.C56, C[57] || CT.C57], text_input.SelectionChangedCause);
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: -1,
        [OffsetBase__dx]: -1
      });
    },
    get C59() {
      return C[59] = dart.constList([C[29] || CT.C29, C[30] || CT.C30, C[7] || CT.C7, C[33] || CT.C33, C[31] || CT.C31, C[32] || CT.C32, C[34] || CT.C34, C[35] || CT.C35, C[40] || CT.C40], text_input.TextInputAction);
    },
    get C60() {
      return C[60] = dart.constList([C[30] || CT.C30, C[7] || CT.C7, C[33] || CT.C33, C[31] || CT.C31, C[32] || CT.C32, C[34] || CT.C34, C[40] || CT.C40, C[36] || CT.C36, C[37] || CT.C37, C[38] || CT.C38, C[39] || CT.C39], text_input.TextInputAction);
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C[61] || CT.C61
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: message_codecs.StringCodec.prototype
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: message_codecs.JSONMessageCodec.prototype
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Message corrupted"
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Invalid method call"
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Expected envelope, got nothing"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Invalid envelope"
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: message_codecs.JSONMethodCodec.prototype
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[71] || CT.C71,
        [name$0]: "flutter/navigation"
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[71] || CT.C71,
        [name$0]: "flutter/platform"
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[71] || CT.C71,
        [name$0]: "flutter/textinput"
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: T$.BasicMessageChannelOfObjectN().prototype,
        [_binaryMessenger]: null,
        [codec$]: C[65] || CT.C65,
        [name$]: "flutter/keyevent"
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: T$.BasicMessageChannelOfStringN().prototype,
        [_binaryMessenger]: null,
        [codec$]: C[64] || CT.C64,
        [name$]: "flutter/lifecycle"
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: T$.BasicMessageChannelOfObjectN().prototype,
        [_binaryMessenger]: null,
        [codec$]: C[65] || CT.C65,
        [name$]: "flutter/system"
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: T$.BasicMessageChannelOfObjectN().prototype,
        [_binaryMessenger]: null,
        [codec$]: C[61] || CT.C61,
        [name$]: "flutter/accessibility"
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[62] || CT.C62,
        [name$0]: "flutter/platform_views"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[71] || CT.C71,
        [name$0]: "flutter/skia"
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[62] || CT.C62,
        [name$0]: "flutter/mousecursor"
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[62] || CT.C62,
        [name$0]: "flutter/restoration"
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[62] || CT.C62,
        [name$0]: "flutter/deferredcomponent"
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[71] || CT.C71,
        [name$0]: "flutter/localization"
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[62] || CT.C62,
        [name$0]: "flutter/menu"
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_Enum__name]: "any",
        [_Enum_index]: 0
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_Enum__name]: "all",
        [_Enum_index]: 3
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 1
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 2
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "controlModifier",
        [_Enum_index]: 0
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "shiftModifier",
        [_Enum_index]: 1
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "altModifier",
        [_Enum_index]: 2
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "metaModifier",
        [_Enum_index]: 3
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "capsLockModifier",
        [_Enum_index]: 4
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "scrollLockModifier",
        [_Enum_index]: 6
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "numLockModifier",
        [_Enum_index]: 5
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "functionModifier",
        [_Enum_index]: 7
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "symbolModifier",
        [_Enum_index]: 8
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967323.0
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969345.0
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969346.0
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969347.0
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969348.0
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969349.0
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969350.0
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969351.0
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969352.0
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969353.0
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969354.0
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969355.0
      });
    },
    get C111() {
      return C[111] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969356.0
      });
    },
    get C112() {
      return C[112] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968068.0
      });
    },
    get C113() {
      return C[113] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968065.0
      });
    },
    get C114() {
      return C[114] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968066.0
      });
    },
    get C115() {
      return C[115] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968067.0
      });
    },
    get C116() {
      return C[116] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968070.0
      });
    },
    get C117() {
      return C[117] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967309.0
      });
    },
    get C118() {
      return C[118] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968072.0
      });
    },
    get C119() {
      return C[119] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968071.0
      });
    },
    get C98() {
      return C[98] = dart.constMap(core.String, keyboard_key$46g.LogicalKeyboardKey, ["UIKeyInputEscape", C[99] || CT.C99, "UIKeyInputF1", C[100] || CT.C100, "UIKeyInputF2", C[101] || CT.C101, "UIKeyInputF3", C[102] || CT.C102, "UIKeyInputF4", C[103] || CT.C103, "UIKeyInputF5", C[104] || CT.C104, "UIKeyInputF6", C[105] || CT.C105, "UIKeyInputF7", C[106] || CT.C106, "UIKeyInputF8", C[107] || CT.C107, "UIKeyInputF9", C[108] || CT.C108, "UIKeyInputF10", C[109] || CT.C109, "UIKeyInputF11", C[110] || CT.C110, "UIKeyInputF12", C[111] || CT.C111, "UIKeyInputUpArrow", C[112] || CT.C112, "UIKeyInputDownArrow", C[113] || CT.C113, "UIKeyInputLeftArrow", C[114] || CT.C114, "UIKeyInputRightArrow", C[115] || CT.C115, "UIKeyInputHome", C[116] || CT.C116, "UIKeyInputEnd", C[117] || CT.C117, "UIKeyInputPageUp", C[118] || CT.C118, "UIKeyInputPageDown", C[119] || CT.C119]);
    },
    get C120() {
      return C[120] = dart.constList([C[85] || CT.C85, C[87] || CT.C87, C[88] || CT.C88, C[86] || CT.C86], raw_keyboard.KeyboardSide);
    },
    get C121() {
      return C[121] = dart.constList([C[89] || CT.C89, C[90] || CT.C90, C[91] || CT.C91, C[92] || CT.C92, C[93] || CT.C93, C[95] || CT.C95, C[94] || CT.C94, C[96] || CT.C96, C[97] || CT.C97], raw_keyboard.ModifierKey);
    },
    get C122() {
      return C[122] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[87] || CT.C87,
        [_ModifierSidePair_modifier]: C[91] || CT.C91
      });
    },
    get C123() {
      return C[123] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[88] || CT.C88,
        [_ModifierSidePair_modifier]: C[91] || CT.C91
      });
    },
    get C124() {
      return C[124] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[86] || CT.C86,
        [_ModifierSidePair_modifier]: C[91] || CT.C91
      });
    },
    get C125() {
      return C[125] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[85] || CT.C85,
        [_ModifierSidePair_modifier]: C[91] || CT.C91
      });
    },
    get C126() {
      return C[126] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[87] || CT.C87,
        [_ModifierSidePair_modifier]: C[90] || CT.C90
      });
    },
    get C127() {
      return C[127] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[88] || CT.C88,
        [_ModifierSidePair_modifier]: C[90] || CT.C90
      });
    },
    get C128() {
      return C[128] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[86] || CT.C86,
        [_ModifierSidePair_modifier]: C[90] || CT.C90
      });
    },
    get C129() {
      return C[129] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[85] || CT.C85,
        [_ModifierSidePair_modifier]: C[90] || CT.C90
      });
    },
    get C130() {
      return C[130] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[87] || CT.C87,
        [_ModifierSidePair_modifier]: C[89] || CT.C89
      });
    },
    get C131() {
      return C[131] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[88] || CT.C88,
        [_ModifierSidePair_modifier]: C[89] || CT.C89
      });
    },
    get C132() {
      return C[132] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[86] || CT.C86,
        [_ModifierSidePair_modifier]: C[89] || CT.C89
      });
    },
    get C133() {
      return C[133] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[85] || CT.C85,
        [_ModifierSidePair_modifier]: C[89] || CT.C89
      });
    },
    get C134() {
      return C[134] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[87] || CT.C87,
        [_ModifierSidePair_modifier]: C[92] || CT.C92
      });
    },
    get C135() {
      return C[135] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[88] || CT.C88,
        [_ModifierSidePair_modifier]: C[92] || CT.C92
      });
    },
    get C136() {
      return C[136] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[86] || CT.C86,
        [_ModifierSidePair_modifier]: C[92] || CT.C92
      });
    },
    get C137() {
      return C[137] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[85] || CT.C85,
        [_ModifierSidePair_modifier]: C[92] || CT.C92
      });
    },
    get C138() {
      return C[138] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[86] || CT.C86,
        [_ModifierSidePair_modifier]: C[93] || CT.C93
      });
    },
    get C139() {
      return C[139] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[86] || CT.C86,
        [_ModifierSidePair_modifier]: C[95] || CT.C95
      });
    },
    get C140() {
      return C[140] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[86] || CT.C86,
        [_ModifierSidePair_modifier]: C[94] || CT.C94
      });
    },
    get C141() {
      return C[141] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[86] || CT.C86,
        [_ModifierSidePair_modifier]: C[96] || CT.C96
      });
    },
    get C143() {
      return C[143] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967562.0
      });
    },
    get C142() {
      return C[142] = dart.const({
        __proto__: hardware_keyboard.KeyboardLockMode.prototype,
        [logicalKey$]: C[143] || CT.C143
      });
    },
    get C145() {
      return C[145] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967564.0
      });
    },
    get C144() {
      return C[144] = dart.const({
        __proto__: hardware_keyboard.KeyboardLockMode.prototype,
        [logicalKey$]: C[145] || CT.C145
      });
    },
    get C147() {
      return C[147] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967556.0
      });
    },
    get C146() {
      return C[146] = dart.const({
        __proto__: hardware_keyboard.KeyboardLockMode.prototype,
        [logicalKey$]: C[147] || CT.C147
      });
    },
    get C149() {
      return C[149] = dart.const({
        __proto__: hardware_keyboard.KeyDataTransitMode.prototype,
        [_Enum__name]: "rawKeyData",
        [_Enum_index]: 0
      });
    },
    get C150() {
      return C[150] = dart.const({
        __proto__: hardware_keyboard.KeyDataTransitMode.prototype,
        [_Enum__name]: "keyDataThenRawKeyData",
        [_Enum_index]: 1
      });
    },
    get C148() {
      return C[148] = dart.constList([C[149] || CT.C149, C[150] || CT.C150], hardware_keyboard.KeyDataTransitMode);
    },
    get C151() {
      return C[151] = dart.const({
        __proto__: ui.KeyEventType.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 0
      });
    },
    get C152() {
      return C[152] = dart.const({
        __proto__: ui.KeyEventType.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 1
      });
    },
    get C153() {
      return C[153] = dart.const({
        __proto__: ui.KeyEventType.prototype,
        [_Enum__name]: "repeat",
        [_Enum_index]: 2
      });
    },
    get C154() {
      return C[154] = dart.const({
        __proto__: binding$0._DefaultBinaryMessenger.prototype
      });
    },
    get C155() {
      return C[155] = dart.fn(binding$0.ServicesBinding._parseLicenses, T$.StringToListOfLicenseEntry());
    },
    get C156() {
      return C[156] = dart.fn(asset_bundle.AssetBundle._utf8decode, T$.ByteDataToString());
    }
  }, false);
  var C = Array(157).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/text_editing_delta.dart",
    "package:flutter/src/services/text_editing_delta.dart",
    "package:flutter/src/services/clipboard.dart",
    "package:flutter/src/services/autofill.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/autofill.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/text_input.dart",
    "package:flutter/src/services/text_input.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/restoration.dart",
    "package:flutter/src/services/restoration.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/debug.dart",
    "package:flutter/src/services/platform_channel.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/platform_channel.dart",
    "package:flutter/src/services/message_codec.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/message_codec.dart",
    "package:flutter/src/services/message_codecs.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/message_codecs.dart",
    "package:flutter/src/services/system_channels.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/raw_keyboard_windows.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/raw_keyboard.dart",
    "package:flutter/src/services/raw_keyboard.dart",
    "package:flutter/src/services/raw_keyboard_windows.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/raw_keyboard_web.dart",
    "package:flutter/src/services/raw_keyboard_web.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/raw_keyboard_macos.dart",
    "package:flutter/src/services/raw_keyboard_macos.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/raw_keyboard_linux.dart",
    "package:flutter/src/services/raw_keyboard_linux.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/raw_keyboard_ios.dart",
    "package:flutter/src/services/raw_keyboard_ios.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/raw_keyboard_fuchsia.dart",
    "package:flutter/src/services/raw_keyboard_fuchsia.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/raw_keyboard_android.dart",
    "package:flutter/src/services/raw_keyboard_android.dart",
    "package:flutter/src/services/hardware_keyboard.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/hardware_keyboard.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/binding.dart",
    "package:flutter/src/services/binding.dart",
    "package:flutter/src/services/asset_bundle.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/asset_bundle.dart"
  ];
  var oldText$ = dart.privateName(text_editing_delta, "TextEditingDelta.oldText");
  var selection$ = dart.privateName(text_editing_delta, "TextEditingDelta.selection");
  var composing$ = dart.privateName(text_editing_delta, "TextEditingDelta.composing");
  text_editing_delta.TextEditingDelta = class TextEditingDelta extends core.Object {
    get oldText() {
      return this[oldText$];
    }
    set oldText(value) {
      super.oldText = value;
    }
    get selection() {
      return this[selection$];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$];
    }
    set composing(value) {
      super.composing = value;
    }
    static fromJSON(encoded) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let oldText = core.String.as(encoded[$_get]("oldText"));
      let replacementDestinationStart = core.int.as(encoded[$_get]("deltaStart"));
      let replacementDestinationEnd = core.int.as(encoded[$_get]("deltaEnd"));
      let replacementSource = core.String.as(encoded[$_get]("deltaText"));
      let replacementSourceEnd = replacementSource.length;
      let isNonTextUpdate = replacementDestinationStart === -1 && replacementDestinationStart === replacementDestinationEnd;
      let newComposing = new ui.TextRange.new({start: (t0 = T$.intN().as(encoded[$_get]("composingBase")), t0 == null ? -1 : t0), end: (t0$ = T$.intN().as(encoded[$_get]("composingExtent")), t0$ == null ? -1 : t0$)});
      let newSelection = new text_editing.TextSelection.new({baseOffset: (t0$0 = T$.intN().as(encoded[$_get]("selectionBase")), t0$0 == null ? -1 : t0$0), extentOffset: (t0$1 = T$.intN().as(encoded[$_get]("selectionExtent")), t0$1 == null ? -1 : t0$1), affinity: (t0$2 = text_editing_delta._toTextAffinity(T$.StringN().as(encoded[$_get]("selectionAffinity"))), t0$2 == null ? ui.TextAffinity.downstream : t0$2), isDirectional: (t0$3 = T$.boolN().as(encoded[$_get]("selectionIsDirectional")), t0$3 == null ? false : t0$3)});
      if (isNonTextUpdate) {
        return new text_editing_delta.TextEditingDeltaNonTextUpdate.new({oldText: oldText, selection: newSelection, composing: newComposing});
      }
      let newText = text_editing_delta._replace(oldText, replacementSource, replacementDestinationStart, replacementDestinationEnd);
      let isEqual = oldText === newText;
      let isDeletionGreaterThanOne = replacementDestinationEnd - replacementDestinationStart - (replacementSourceEnd - 0) > 1;
      let isDeletingByReplacingWithEmpty = replacementSource[$isEmpty] && 0 === 0 && 0 === replacementSourceEnd;
      let isReplacedByShorter = isDeletionGreaterThanOne && replacementSourceEnd - 0 < replacementDestinationEnd - replacementDestinationStart;
      let isReplacedByLonger = replacementSourceEnd - 0 > replacementDestinationEnd - replacementDestinationStart;
      let isReplacedBySame = replacementSourceEnd - 0 === replacementDestinationEnd - replacementDestinationStart;
      let isInsertingInsideComposingRegion = replacementDestinationStart + replacementSourceEnd > replacementDestinationEnd;
      let isDeletingInsideComposingRegion = !isReplacedByShorter && !isDeletingByReplacingWithEmpty && replacementDestinationStart + replacementSourceEnd < replacementDestinationEnd;
      let newComposingText = null;
      let originalComposingText = null;
      if (isDeletingByReplacingWithEmpty || isDeletingInsideComposingRegion || isReplacedByShorter) {
        newComposingText = replacementSource[$substring](0, replacementSourceEnd);
        originalComposingText = oldText[$substring](replacementDestinationStart, replacementDestinationStart + replacementSourceEnd);
      } else {
        newComposingText = replacementSource[$substring](0, 0 + (replacementDestinationEnd - replacementDestinationStart));
        originalComposingText = oldText[$substring](replacementDestinationStart, replacementDestinationEnd);
      }
      let isOriginalComposingRegionTextChanged = originalComposingText !== newComposingText;
      let isReplaced = isOriginalComposingRegionTextChanged || isReplacedByLonger || isReplacedByShorter || isReplacedBySame;
      if (isEqual) {
        return new text_editing_delta.TextEditingDeltaNonTextUpdate.new({oldText: oldText, selection: newSelection, composing: newComposing});
      } else if ((isDeletingByReplacingWithEmpty || isDeletingInsideComposingRegion) && !isOriginalComposingRegionTextChanged) {
        let actualStart = replacementDestinationStart;
        if (!isDeletionGreaterThanOne) {
          actualStart = replacementDestinationEnd - 1;
        }
        return new text_editing_delta.TextEditingDeltaDeletion.new({oldText: oldText, deletedRange: new ui.TextRange.new({start: actualStart, end: replacementDestinationEnd}), selection: newSelection, composing: newComposing});
      } else if ((replacementDestinationStart === replacementDestinationEnd || isInsertingInsideComposingRegion) && !isOriginalComposingRegionTextChanged) {
        return new text_editing_delta.TextEditingDeltaInsertion.new({oldText: oldText, textInserted: replacementSource[$substring](replacementDestinationEnd - replacementDestinationStart, replacementDestinationEnd - replacementDestinationStart + (replacementSource.length - (replacementDestinationEnd - replacementDestinationStart))), insertionOffset: replacementDestinationEnd, selection: newSelection, composing: newComposing});
      } else if (isReplaced) {
        return new text_editing_delta.TextEditingDeltaReplacement.new({oldText: oldText, replacementText: replacementSource, replacedRange: new ui.TextRange.new({start: replacementDestinationStart, end: replacementDestinationEnd}), selection: newSelection, composing: newComposing});
      }
      if (!false) dart.assertFailed(null, I[0], 209, 12, "false");
      return new text_editing_delta.TextEditingDeltaNonTextUpdate.new({oldText: oldText, selection: newSelection, composing: newComposing});
    }
    static ['_#fromJSON#tearOff'](encoded) {
      return text_editing_delta.TextEditingDelta.fromJSON(encoded);
    }
  };
  (text_editing_delta.TextEditingDelta.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    this[oldText$] = oldText;
    this[selection$] = selection;
    this[composing$] = composing;
    if (!(oldText !== null)) dart.assertFailed(null, I[0], 59, 15, "oldText != null");
    if (!(selection !== null)) dart.assertFailed(null, I[0], 60, 15, "selection != null");
    if (!(composing !== null)) dart.assertFailed(null, I[0], 61, 15, "composing != null");
    ;
  }).prototype = text_editing_delta.TextEditingDelta.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDelta);
  dart.addTypeCaches(text_editing_delta.TextEditingDelta);
  dart.setStaticMethodSignature(text_editing_delta.TextEditingDelta, () => ['fromJSON']);
  dart.setLibraryUri(text_editing_delta.TextEditingDelta, I[1]);
  dart.setFieldSignature(text_editing_delta.TextEditingDelta, () => ({
    __proto__: dart.getFields(text_editing_delta.TextEditingDelta.__proto__),
    oldText: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(text_editing.TextSelection),
    composing: dart.finalFieldType(ui.TextRange)
  }));
  var textInserted$ = dart.privateName(text_editing_delta, "TextEditingDeltaInsertion.textInserted");
  var insertionOffset$ = dart.privateName(text_editing_delta, "TextEditingDeltaInsertion.insertionOffset");
  text_editing_delta.TextEditingDeltaInsertion = class TextEditingDeltaInsertion extends text_editing_delta.TextEditingDelta {
    get textInserted() {
      return this[textInserted$];
    }
    set textInserted(value) {
      super.textInserted = value;
    }
    get insertionOffset() {
      return this[insertionOffset$];
    }
    set insertionOffset(value) {
      super.insertionOffset = value;
    }
    static ['_#new#tearOff'](opts) {
      let oldText = opts && 'oldText' in opts ? opts.oldText : null;
      let textInserted = opts && 'textInserted' in opts ? opts.textInserted : null;
      let insertionOffset = opts && 'insertionOffset' in opts ? opts.insertionOffset : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_editing_delta.TextEditingDeltaInsertion.new({oldText: oldText, textInserted: textInserted, insertionOffset: insertionOffset, selection: selection, composing: composing});
    }
    apply(value) {
      let newText = this.oldText;
      newText = text_editing_delta._replace(newText, this.textInserted, this.insertionOffset, this.insertionOffset);
      return value.copyWith({text: newText, selection: this.selection, composing: this.composing});
    }
  };
  (text_editing_delta.TextEditingDeltaInsertion.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let textInserted = opts && 'textInserted' in opts ? opts.textInserted : null;
    let insertionOffset = opts && 'insertionOffset' in opts ? opts.insertionOffset : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    this[textInserted$] = textInserted;
    this[insertionOffset$] = insertionOffset;
    text_editing_delta.TextEditingDeltaInsertion.__proto__.new.call(this, {oldText: oldText, selection: selection, composing: composing});
    ;
  }).prototype = text_editing_delta.TextEditingDeltaInsertion.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDeltaInsertion);
  dart.addTypeCaches(text_editing_delta.TextEditingDeltaInsertion);
  dart.setMethodSignature(text_editing_delta.TextEditingDeltaInsertion, () => ({
    __proto__: dart.getMethods(text_editing_delta.TextEditingDeltaInsertion.__proto__),
    apply: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_editing_delta.TextEditingDeltaInsertion, I[1]);
  dart.setFieldSignature(text_editing_delta.TextEditingDeltaInsertion, () => ({
    __proto__: dart.getFields(text_editing_delta.TextEditingDeltaInsertion.__proto__),
    textInserted: dart.finalFieldType(core.String),
    insertionOffset: dart.finalFieldType(core.int)
  }));
  var deletedRange$ = dart.privateName(text_editing_delta, "TextEditingDeltaDeletion.deletedRange");
  text_editing_delta.TextEditingDeltaDeletion = class TextEditingDeltaDeletion extends text_editing_delta.TextEditingDelta {
    get deletedRange() {
      return this[deletedRange$];
    }
    set deletedRange(value) {
      super.deletedRange = value;
    }
    static ['_#new#tearOff'](opts) {
      let oldText = opts && 'oldText' in opts ? opts.oldText : null;
      let deletedRange = opts && 'deletedRange' in opts ? opts.deletedRange : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_editing_delta.TextEditingDeltaDeletion.new({oldText: oldText, deletedRange: deletedRange, selection: selection, composing: composing});
    }
    get textDeleted() {
      return this.oldText[$substring](this.deletedRange.start, this.deletedRange.end);
    }
    apply(value) {
      let newText = this.oldText;
      newText = text_editing_delta._replace(newText, "", this.deletedRange.start, this.deletedRange.end);
      return value.copyWith({text: newText, selection: this.selection, composing: this.composing});
    }
  };
  (text_editing_delta.TextEditingDeltaDeletion.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let deletedRange = opts && 'deletedRange' in opts ? opts.deletedRange : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    this[deletedRange$] = deletedRange;
    text_editing_delta.TextEditingDeltaDeletion.__proto__.new.call(this, {oldText: oldText, selection: selection, composing: composing});
    ;
  }).prototype = text_editing_delta.TextEditingDeltaDeletion.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDeltaDeletion);
  dart.addTypeCaches(text_editing_delta.TextEditingDeltaDeletion);
  dart.setMethodSignature(text_editing_delta.TextEditingDeltaDeletion, () => ({
    __proto__: dart.getMethods(text_editing_delta.TextEditingDeltaDeletion.__proto__),
    apply: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue])
  }));
  dart.setGetterSignature(text_editing_delta.TextEditingDeltaDeletion, () => ({
    __proto__: dart.getGetters(text_editing_delta.TextEditingDeltaDeletion.__proto__),
    textDeleted: core.String
  }));
  dart.setLibraryUri(text_editing_delta.TextEditingDeltaDeletion, I[1]);
  dart.setFieldSignature(text_editing_delta.TextEditingDeltaDeletion, () => ({
    __proto__: dart.getFields(text_editing_delta.TextEditingDeltaDeletion.__proto__),
    deletedRange: dart.finalFieldType(ui.TextRange)
  }));
  var replacementText$ = dart.privateName(text_editing_delta, "TextEditingDeltaReplacement.replacementText");
  var replacedRange$ = dart.privateName(text_editing_delta, "TextEditingDeltaReplacement.replacedRange");
  text_editing_delta.TextEditingDeltaReplacement = class TextEditingDeltaReplacement extends text_editing_delta.TextEditingDelta {
    get replacementText() {
      return this[replacementText$];
    }
    set replacementText(value) {
      super.replacementText = value;
    }
    get replacedRange() {
      return this[replacedRange$];
    }
    set replacedRange(value) {
      super.replacedRange = value;
    }
    static ['_#new#tearOff'](opts) {
      let oldText = opts && 'oldText' in opts ? opts.oldText : null;
      let replacementText = opts && 'replacementText' in opts ? opts.replacementText : null;
      let replacedRange = opts && 'replacedRange' in opts ? opts.replacedRange : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_editing_delta.TextEditingDeltaReplacement.new({oldText: oldText, replacementText: replacementText, replacedRange: replacedRange, selection: selection, composing: composing});
    }
    get textReplaced() {
      return this.oldText[$substring](this.replacedRange.start, this.replacedRange.end);
    }
    apply(value) {
      let newText = this.oldText;
      newText = text_editing_delta._replace(newText, this.replacementText, this.replacedRange.start, this.replacedRange.end);
      return value.copyWith({text: newText, selection: this.selection, composing: this.composing});
    }
  };
  (text_editing_delta.TextEditingDeltaReplacement.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let replacementText = opts && 'replacementText' in opts ? opts.replacementText : null;
    let replacedRange = opts && 'replacedRange' in opts ? opts.replacedRange : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    this[replacementText$] = replacementText;
    this[replacedRange$] = replacedRange;
    text_editing_delta.TextEditingDeltaReplacement.__proto__.new.call(this, {oldText: oldText, selection: selection, composing: composing});
    ;
  }).prototype = text_editing_delta.TextEditingDeltaReplacement.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDeltaReplacement);
  dart.addTypeCaches(text_editing_delta.TextEditingDeltaReplacement);
  dart.setMethodSignature(text_editing_delta.TextEditingDeltaReplacement, () => ({
    __proto__: dart.getMethods(text_editing_delta.TextEditingDeltaReplacement.__proto__),
    apply: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue])
  }));
  dart.setGetterSignature(text_editing_delta.TextEditingDeltaReplacement, () => ({
    __proto__: dart.getGetters(text_editing_delta.TextEditingDeltaReplacement.__proto__),
    textReplaced: core.String
  }));
  dart.setLibraryUri(text_editing_delta.TextEditingDeltaReplacement, I[1]);
  dart.setFieldSignature(text_editing_delta.TextEditingDeltaReplacement, () => ({
    __proto__: dart.getFields(text_editing_delta.TextEditingDeltaReplacement.__proto__),
    replacementText: dart.finalFieldType(core.String),
    replacedRange: dart.finalFieldType(ui.TextRange)
  }));
  text_editing_delta.TextEditingDeltaNonTextUpdate = class TextEditingDeltaNonTextUpdate extends text_editing_delta.TextEditingDelta {
    static ['_#new#tearOff'](opts) {
      let oldText = opts && 'oldText' in opts ? opts.oldText : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_editing_delta.TextEditingDeltaNonTextUpdate.new({oldText: oldText, selection: selection, composing: composing});
    }
    apply(value) {
      return new text_input.TextEditingValue.new({text: this.oldText, selection: this.selection, composing: this.composing});
    }
  };
  (text_editing_delta.TextEditingDeltaNonTextUpdate.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    text_editing_delta.TextEditingDeltaNonTextUpdate.__proto__.new.call(this, {oldText: oldText, selection: selection, composing: composing});
    ;
  }).prototype = text_editing_delta.TextEditingDeltaNonTextUpdate.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDeltaNonTextUpdate);
  dart.addTypeCaches(text_editing_delta.TextEditingDeltaNonTextUpdate);
  dart.setMethodSignature(text_editing_delta.TextEditingDeltaNonTextUpdate, () => ({
    __proto__: dart.getMethods(text_editing_delta.TextEditingDeltaNonTextUpdate.__proto__),
    apply: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_editing_delta.TextEditingDeltaNonTextUpdate, I[1]);
  text_editing_delta._toTextAffinity = function _toTextAffinity(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
        {
          return ui.TextAffinity.downstream;
        }
      case "TextAffinity.upstream":
        {
          return ui.TextAffinity.upstream;
        }
    }
    return null;
  };
  text_editing_delta._replace = function _replace(originalText, replacementText, start, end) {
    let textStart = originalText[$substring](0, start);
    let textEnd = originalText[$substring](end, originalText.length);
    let newText = textStart + replacementText + textEnd;
    return newText;
  };
  var text$ = dart.privateName(clipboard, "ClipboardData.text");
  clipboard.ClipboardData = class ClipboardData extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      return new clipboard.ClipboardData.new({text: text});
    }
  };
  (clipboard.ClipboardData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$] = text;
    ;
  }).prototype = clipboard.ClipboardData.prototype;
  dart.addTypeTests(clipboard.ClipboardData);
  dart.addTypeCaches(clipboard.ClipboardData);
  dart.setLibraryUri(clipboard.ClipboardData, I[2]);
  dart.setFieldSignature(clipboard.ClipboardData, () => ({
    __proto__: dart.getFields(clipboard.ClipboardData.__proto__),
    text: dart.finalFieldType(dart.nullable(core.String))
  }));
  clipboard.Clipboard = class Clipboard extends core.Object {
    static ['_#_#tearOff']() {
      return new clipboard.Clipboard.__();
    }
    static setData(data) {
      return async.async(dart.void, function* setData() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "Clipboard.setData", new (T$.IdentityMapOfString$dynamic()).from(["text", data.text]));
      });
    }
    static getData(format) {
      return async.async(T$.ClipboardDataN(), function* getData() {
        let result = (yield system_channels.SystemChannels.platform.invokeMethod(T$.MapOfString$dynamic(), "Clipboard.getData", format));
        if (result == null) {
          return null;
        }
        return new clipboard.ClipboardData.new({text: T$.StringN().as(result[$_get]("text"))});
      });
    }
    static hasStrings() {
      return async.async(core.bool, function* hasStrings() {
        let result = (yield system_channels.SystemChannels.platform.invokeMethod(T$.MapOfString$dynamic(), "Clipboard.hasStrings", "text/plain"));
        if (result == null) {
          return false;
        }
        return core.bool.as(result[$_get]("value"));
      });
    }
  };
  (clipboard.Clipboard.__ = function() {
    ;
  }).prototype = clipboard.Clipboard.prototype;
  dart.addTypeTests(clipboard.Clipboard);
  dart.addTypeCaches(clipboard.Clipboard);
  dart.setStaticMethodSignature(clipboard.Clipboard, () => ['setData', 'getData', 'hasStrings']);
  dart.setLibraryUri(clipboard.Clipboard, I[2]);
  dart.setStaticFieldSignature(clipboard.Clipboard, () => ['kTextPlain']);
  dart.defineLazy(clipboard.Clipboard, {
    /*clipboard.Clipboard.kTextPlain*/get kTextPlain() {
      return "text/plain";
    }
  }, false);
  autofill.AutofillHints = class AutofillHints extends core.Object {
    static ['_#_#tearOff']() {
      return new autofill.AutofillHints.__();
    }
  };
  (autofill.AutofillHints.__ = function() {
    ;
  }).prototype = autofill.AutofillHints.prototype;
  dart.addTypeTests(autofill.AutofillHints);
  dart.addTypeCaches(autofill.AutofillHints);
  dart.setLibraryUri(autofill.AutofillHints, I[3]);
  dart.setStaticFieldSignature(autofill.AutofillHints, () => ['addressCity', 'addressCityAndState', 'addressState', 'birthday', 'birthdayDay', 'birthdayMonth', 'birthdayYear', 'countryCode', 'countryName', 'creditCardExpirationDate', 'creditCardExpirationDay', 'creditCardExpirationMonth', 'creditCardExpirationYear', 'creditCardFamilyName', 'creditCardGivenName', 'creditCardMiddleName', 'creditCardName', 'creditCardNumber', 'creditCardSecurityCode', 'creditCardType', 'email', 'familyName', 'fullStreetAddress', 'gender', 'givenName', 'impp', 'jobTitle', 'language', 'location', 'middleInitial', 'middleName', 'name_', 'namePrefix', 'nameSuffix', 'newPassword', 'newUsername', 'nickname', 'oneTimeCode', 'organizationName', 'password', 'photo', 'postalAddress', 'postalAddressExtended', 'postalAddressExtendedPostalCode', 'postalCode', 'streetAddressLevel1', 'streetAddressLevel2', 'streetAddressLevel3', 'streetAddressLevel4', 'streetAddressLine1', 'streetAddressLine2', 'streetAddressLine3', 'sublocality', 'telephoneNumber', 'telephoneNumberAreaCode', 'telephoneNumberCountryCode', 'telephoneNumberDevice', 'telephoneNumberExtension', 'telephoneNumberLocal', 'telephoneNumberLocalPrefix', 'telephoneNumberLocalSuffix', 'telephoneNumberNational', 'transactionAmount', 'transactionCurrency', 'url', 'username']);
  dart.defineLazy(autofill.AutofillHints, {
    /*autofill.AutofillHints.addressCity*/get addressCity() {
      return "addressCity";
    },
    /*autofill.AutofillHints.addressCityAndState*/get addressCityAndState() {
      return "addressCityAndState";
    },
    /*autofill.AutofillHints.addressState*/get addressState() {
      return "addressState";
    },
    /*autofill.AutofillHints.birthday*/get birthday() {
      return "birthday";
    },
    /*autofill.AutofillHints.birthdayDay*/get birthdayDay() {
      return "birthdayDay";
    },
    /*autofill.AutofillHints.birthdayMonth*/get birthdayMonth() {
      return "birthdayMonth";
    },
    /*autofill.AutofillHints.birthdayYear*/get birthdayYear() {
      return "birthdayYear";
    },
    /*autofill.AutofillHints.countryCode*/get countryCode() {
      return "countryCode";
    },
    /*autofill.AutofillHints.countryName*/get countryName() {
      return "countryName";
    },
    /*autofill.AutofillHints.creditCardExpirationDate*/get creditCardExpirationDate() {
      return "creditCardExpirationDate";
    },
    /*autofill.AutofillHints.creditCardExpirationDay*/get creditCardExpirationDay() {
      return "creditCardExpirationDay";
    },
    /*autofill.AutofillHints.creditCardExpirationMonth*/get creditCardExpirationMonth() {
      return "creditCardExpirationMonth";
    },
    /*autofill.AutofillHints.creditCardExpirationYear*/get creditCardExpirationYear() {
      return "creditCardExpirationYear";
    },
    /*autofill.AutofillHints.creditCardFamilyName*/get creditCardFamilyName() {
      return "creditCardFamilyName";
    },
    /*autofill.AutofillHints.creditCardGivenName*/get creditCardGivenName() {
      return "creditCardGivenName";
    },
    /*autofill.AutofillHints.creditCardMiddleName*/get creditCardMiddleName() {
      return "creditCardMiddleName";
    },
    /*autofill.AutofillHints.creditCardName*/get creditCardName() {
      return "creditCardName";
    },
    /*autofill.AutofillHints.creditCardNumber*/get creditCardNumber() {
      return "creditCardNumber";
    },
    /*autofill.AutofillHints.creditCardSecurityCode*/get creditCardSecurityCode() {
      return "creditCardSecurityCode";
    },
    /*autofill.AutofillHints.creditCardType*/get creditCardType() {
      return "creditCardType";
    },
    /*autofill.AutofillHints.email*/get email() {
      return "email";
    },
    /*autofill.AutofillHints.familyName*/get familyName() {
      return "familyName";
    },
    /*autofill.AutofillHints.fullStreetAddress*/get fullStreetAddress() {
      return "fullStreetAddress";
    },
    /*autofill.AutofillHints.gender*/get gender() {
      return "gender";
    },
    /*autofill.AutofillHints.givenName*/get givenName() {
      return "givenName";
    },
    /*autofill.AutofillHints.impp*/get impp() {
      return "impp";
    },
    /*autofill.AutofillHints.jobTitle*/get jobTitle() {
      return "jobTitle";
    },
    /*autofill.AutofillHints.language*/get language() {
      return "language";
    },
    /*autofill.AutofillHints.location*/get location() {
      return "location";
    },
    /*autofill.AutofillHints.middleInitial*/get middleInitial() {
      return "middleInitial";
    },
    /*autofill.AutofillHints.middleName*/get middleName() {
      return "middleName";
    },
    /*autofill.AutofillHints.name_*/get name_() {
      return "name";
    },
    /*autofill.AutofillHints.namePrefix*/get namePrefix() {
      return "namePrefix";
    },
    /*autofill.AutofillHints.nameSuffix*/get nameSuffix() {
      return "nameSuffix";
    },
    /*autofill.AutofillHints.newPassword*/get newPassword() {
      return "newPassword";
    },
    /*autofill.AutofillHints.newUsername*/get newUsername() {
      return "newUsername";
    },
    /*autofill.AutofillHints.nickname*/get nickname() {
      return "nickname";
    },
    /*autofill.AutofillHints.oneTimeCode*/get oneTimeCode() {
      return "oneTimeCode";
    },
    /*autofill.AutofillHints.organizationName*/get organizationName() {
      return "organizationName";
    },
    /*autofill.AutofillHints.password*/get password() {
      return "password";
    },
    /*autofill.AutofillHints.photo*/get photo() {
      return "photo";
    },
    /*autofill.AutofillHints.postalAddress*/get postalAddress() {
      return "postalAddress";
    },
    /*autofill.AutofillHints.postalAddressExtended*/get postalAddressExtended() {
      return "postalAddressExtended";
    },
    /*autofill.AutofillHints.postalAddressExtendedPostalCode*/get postalAddressExtendedPostalCode() {
      return "postalAddressExtendedPostalCode";
    },
    /*autofill.AutofillHints.postalCode*/get postalCode() {
      return "postalCode";
    },
    /*autofill.AutofillHints.streetAddressLevel1*/get streetAddressLevel1() {
      return "streetAddressLevel1";
    },
    /*autofill.AutofillHints.streetAddressLevel2*/get streetAddressLevel2() {
      return "streetAddressLevel2";
    },
    /*autofill.AutofillHints.streetAddressLevel3*/get streetAddressLevel3() {
      return "streetAddressLevel3";
    },
    /*autofill.AutofillHints.streetAddressLevel4*/get streetAddressLevel4() {
      return "streetAddressLevel4";
    },
    /*autofill.AutofillHints.streetAddressLine1*/get streetAddressLine1() {
      return "streetAddressLine1";
    },
    /*autofill.AutofillHints.streetAddressLine2*/get streetAddressLine2() {
      return "streetAddressLine2";
    },
    /*autofill.AutofillHints.streetAddressLine3*/get streetAddressLine3() {
      return "streetAddressLine3";
    },
    /*autofill.AutofillHints.sublocality*/get sublocality() {
      return "sublocality";
    },
    /*autofill.AutofillHints.telephoneNumber*/get telephoneNumber() {
      return "telephoneNumber";
    },
    /*autofill.AutofillHints.telephoneNumberAreaCode*/get telephoneNumberAreaCode() {
      return "telephoneNumberAreaCode";
    },
    /*autofill.AutofillHints.telephoneNumberCountryCode*/get telephoneNumberCountryCode() {
      return "telephoneNumberCountryCode";
    },
    /*autofill.AutofillHints.telephoneNumberDevice*/get telephoneNumberDevice() {
      return "telephoneNumberDevice";
    },
    /*autofill.AutofillHints.telephoneNumberExtension*/get telephoneNumberExtension() {
      return "telephoneNumberExtension";
    },
    /*autofill.AutofillHints.telephoneNumberLocal*/get telephoneNumberLocal() {
      return "telephoneNumberLocal";
    },
    /*autofill.AutofillHints.telephoneNumberLocalPrefix*/get telephoneNumberLocalPrefix() {
      return "telephoneNumberLocalPrefix";
    },
    /*autofill.AutofillHints.telephoneNumberLocalSuffix*/get telephoneNumberLocalSuffix() {
      return "telephoneNumberLocalSuffix";
    },
    /*autofill.AutofillHints.telephoneNumberNational*/get telephoneNumberNational() {
      return "telephoneNumberNational";
    },
    /*autofill.AutofillHints.transactionAmount*/get transactionAmount() {
      return "transactionAmount";
    },
    /*autofill.AutofillHints.transactionCurrency*/get transactionCurrency() {
      return "transactionCurrency";
    },
    /*autofill.AutofillHints.url*/get url() {
      return "url";
    },
    /*autofill.AutofillHints.username*/get username() {
      return "username";
    }
  }, false);
  var enabled$ = dart.privateName(autofill, "AutofillConfiguration.enabled");
  var uniqueIdentifier$ = dart.privateName(autofill, "AutofillConfiguration.uniqueIdentifier");
  var autofillHints$ = dart.privateName(autofill, "AutofillConfiguration.autofillHints");
  var currentEditingValue$ = dart.privateName(autofill, "AutofillConfiguration.currentEditingValue");
  var hintText$ = dart.privateName(autofill, "AutofillConfiguration.hintText");
  var TextRange_end = dart.privateName(ui, "TextRange.end");
  var TextRange_start = dart.privateName(ui, "TextRange.start");
  var TextEditingValue_composing = dart.privateName(text_input, "TextEditingValue.composing");
  var TextSelection_isDirectional = dart.privateName(text_editing, "TextSelection.isDirectional");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var TextSelection_affinity = dart.privateName(text_editing, "TextSelection.affinity");
  var TextSelection_extentOffset = dart.privateName(text_editing, "TextSelection.extentOffset");
  var TextSelection_baseOffset = dart.privateName(text_editing, "TextSelection.baseOffset");
  var TextEditingValue_selection = dart.privateName(text_input, "TextEditingValue.selection");
  var TextEditingValue_text = dart.privateName(text_input, "TextEditingValue.text");
  autofill.AutofillConfiguration = class AutofillConfiguration extends core.Object {
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get uniqueIdentifier() {
      return this[uniqueIdentifier$];
    }
    set uniqueIdentifier(value) {
      super.uniqueIdentifier = value;
    }
    get autofillHints() {
      return this[autofillHints$];
    }
    set autofillHints(value) {
      super.autofillHints = value;
    }
    get currentEditingValue() {
      return this[currentEditingValue$];
    }
    set currentEditingValue(value) {
      super.currentEditingValue = value;
    }
    get hintText() {
      return this[hintText$];
    }
    set hintText(value) {
      super.hintText = value;
    }
    static ['_#new#tearOff'](opts) {
      let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
      let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : null;
      let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
      let hintText = opts && 'hintText' in opts ? opts.hintText : null;
      return new autofill.AutofillConfiguration.new({uniqueIdentifier: uniqueIdentifier, autofillHints: autofillHints, currentEditingValue: currentEditingValue, hintText: hintText});
    }
    static ['_#_#tearOff'](opts) {
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
      let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : C[0] || CT.C0;
      let hintText = opts && 'hintText' in opts ? opts.hintText : null;
      let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
      return new autofill.AutofillConfiguration.__({enabled: enabled, uniqueIdentifier: uniqueIdentifier, autofillHints: autofillHints, hintText: hintText, currentEditingValue: currentEditingValue});
    }
    toJson() {
      return this.enabled ? (() => {
        let t0 = new (T$.IdentityMapOfString$dynamic()).new();
        t0[$_set]("uniqueIdentifier", this.uniqueIdentifier);
        t0[$_set]("hints", this.autofillHints);
        t0[$_set]("editingValue", this.currentEditingValue.toJSON());
        if (this.hintText != null) t0[$_set]("hintText", this.hintText);
        return t0;
      })() : null;
    }
  };
  (autofill.AutofillConfiguration.new = function(opts) {
    let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
    let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : null;
    let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
    let hintText = opts && 'hintText' in opts ? opts.hintText : null;
    autofill.AutofillConfiguration.__.call(this, {enabled: true, uniqueIdentifier: uniqueIdentifier, autofillHints: autofillHints, currentEditingValue: currentEditingValue, hintText: hintText});
  }).prototype = autofill.AutofillConfiguration.prototype;
  (autofill.AutofillConfiguration.__ = function(opts) {
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
    let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : C[0] || CT.C0;
    let hintText = opts && 'hintText' in opts ? opts.hintText : null;
    let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
    this[enabled$] = enabled;
    this[uniqueIdentifier$] = uniqueIdentifier;
    this[autofillHints$] = autofillHints;
    this[hintText$] = hintText;
    this[currentEditingValue$] = currentEditingValue;
    if (!(uniqueIdentifier !== null)) dart.assertFailed(null, I[4], 654, 15, "uniqueIdentifier != null");
    if (!(autofillHints !== null)) dart.assertFailed(null, I[4], 655, 15, "autofillHints != null");
    ;
  }).prototype = autofill.AutofillConfiguration.prototype;
  dart.addTypeTests(autofill.AutofillConfiguration);
  dart.addTypeCaches(autofill.AutofillConfiguration);
  dart.setMethodSignature(autofill.AutofillConfiguration, () => ({
    __proto__: dart.getMethods(autofill.AutofillConfiguration.__proto__),
    toJson: dart.fnType(dart.nullable(core.Map$(core.String, dart.dynamic)), [])
  }));
  dart.setLibraryUri(autofill.AutofillConfiguration, I[3]);
  dart.setFieldSignature(autofill.AutofillConfiguration, () => ({
    __proto__: dart.getFields(autofill.AutofillConfiguration.__proto__),
    enabled: dart.finalFieldType(core.bool),
    uniqueIdentifier: dart.finalFieldType(core.String),
    autofillHints: dart.finalFieldType(core.List$(core.String)),
    currentEditingValue: dart.finalFieldType(text_input.TextEditingValue),
    hintText: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(autofill.AutofillConfiguration, () => ['disabled']);
  dart.defineLazy(autofill.AutofillConfiguration, {
    /*autofill.AutofillConfiguration.disabled*/get disabled() {
      return C[1] || CT.C1;
    }
  }, false);
  autofill.AutofillClient = class AutofillClient extends core.Object {};
  (autofill.AutofillClient.new = function() {
    ;
  }).prototype = autofill.AutofillClient.prototype;
  dart.addTypeTests(autofill.AutofillClient);
  dart.addTypeCaches(autofill.AutofillClient);
  dart.setLibraryUri(autofill.AutofillClient, I[3]);
  autofill.AutofillScope = class AutofillScope extends core.Object {};
  (autofill.AutofillScope.new = function() {
    ;
  }).prototype = autofill.AutofillScope.prototype;
  dart.addTypeTests(autofill.AutofillScope);
  dart.addTypeCaches(autofill.AutofillScope);
  dart.setLibraryUri(autofill.AutofillScope, I[3]);
  var inputType$ = dart.privateName(text_input, "TextInputConfiguration.inputType");
  var readOnly$ = dart.privateName(text_input, "TextInputConfiguration.readOnly");
  var obscureText$ = dart.privateName(text_input, "TextInputConfiguration.obscureText");
  var autocorrect$ = dart.privateName(text_input, "TextInputConfiguration.autocorrect");
  var autofillConfiguration$ = dart.privateName(text_input, "TextInputConfiguration.autofillConfiguration");
  var smartDashesType$ = dart.privateName(text_input, "TextInputConfiguration.smartDashesType");
  var smartQuotesType$ = dart.privateName(text_input, "TextInputConfiguration.smartQuotesType");
  var enableSuggestions$ = dart.privateName(text_input, "TextInputConfiguration.enableSuggestions");
  var enableInteractiveSelection$ = dart.privateName(text_input, "TextInputConfiguration.enableInteractiveSelection");
  var actionLabel$ = dart.privateName(text_input, "TextInputConfiguration.actionLabel");
  var inputAction$ = dart.privateName(text_input, "TextInputConfiguration.inputAction");
  var textCapitalization$ = dart.privateName(text_input, "TextInputConfiguration.textCapitalization");
  var keyboardAppearance$ = dart.privateName(text_input, "TextInputConfiguration.keyboardAppearance");
  var enableIMEPersonalizedLearning$ = dart.privateName(text_input, "TextInputConfiguration.enableIMEPersonalizedLearning");
  var enableDeltaModel$ = dart.privateName(text_input, "TextInputConfiguration.enableDeltaModel");
  var TextInputType_decimal = dart.privateName(text_input, "TextInputType.decimal");
  var TextInputType_signed = dart.privateName(text_input, "TextInputType.signed");
  var TextInputType_index = dart.privateName(text_input, "TextInputType.index");
  text_input.TextInputConfiguration = class TextInputConfiguration extends core.Object {
    get inputType() {
      return this[inputType$];
    }
    set inputType(value) {
      super.inputType = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get autofillConfiguration() {
      return this[autofillConfiguration$];
    }
    set autofillConfiguration(value) {
      super.autofillConfiguration = value;
    }
    get smartDashesType() {
      return this[smartDashesType$];
    }
    set smartDashesType(value) {
      super.smartDashesType = value;
    }
    get smartQuotesType() {
      return this[smartQuotesType$];
    }
    set smartQuotesType(value) {
      super.smartQuotesType = value;
    }
    get enableSuggestions() {
      return this[enableSuggestions$];
    }
    set enableSuggestions(value) {
      super.enableSuggestions = value;
    }
    get enableInteractiveSelection() {
      return this[enableInteractiveSelection$];
    }
    set enableInteractiveSelection(value) {
      super.enableInteractiveSelection = value;
    }
    get actionLabel() {
      return this[actionLabel$];
    }
    set actionLabel(value) {
      super.actionLabel = value;
    }
    get inputAction() {
      return this[inputAction$];
    }
    set inputAction(value) {
      super.inputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    get enableIMEPersonalizedLearning() {
      return this[enableIMEPersonalizedLearning$];
    }
    set enableIMEPersonalizedLearning(value) {
      super.enableIMEPersonalizedLearning = value;
    }
    get enableDeltaModel() {
      return this[enableDeltaModel$];
    }
    set enableDeltaModel(value) {
      super.enableDeltaModel = value;
    }
    static ['_#new#tearOff'](opts) {
      let inputType = opts && 'inputType' in opts ? opts.inputType : C[6] || CT.C6;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
      let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
      let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
      let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
      let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
      let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
      let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : true;
      let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
      let inputAction = opts && 'inputAction' in opts ? opts.inputAction : C[7] || CT.C7;
      let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C[8] || CT.C8;
      let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C[9] || CT.C9;
      let autofillConfiguration = opts && 'autofillConfiguration' in opts ? opts.autofillConfiguration : C[1] || CT.C1;
      let enableIMEPersonalizedLearning = opts && 'enableIMEPersonalizedLearning' in opts ? opts.enableIMEPersonalizedLearning : true;
      let enableDeltaModel = opts && 'enableDeltaModel' in opts ? opts.enableDeltaModel : false;
      return new text_input.TextInputConfiguration.new({inputType: inputType, readOnly: readOnly, obscureText: obscureText, autocorrect: autocorrect, smartDashesType: smartDashesType, smartQuotesType: smartQuotesType, enableSuggestions: enableSuggestions, enableInteractiveSelection: enableInteractiveSelection, actionLabel: actionLabel, inputAction: inputAction, keyboardAppearance: keyboardAppearance, textCapitalization: textCapitalization, autofillConfiguration: autofillConfiguration, enableIMEPersonalizedLearning: enableIMEPersonalizedLearning, enableDeltaModel: enableDeltaModel});
    }
    copyWith(opts) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7, t1$8, t1$9, t1$10, t1$11;
      let inputType = opts && 'inputType' in opts ? opts.inputType : null;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
      let obscureText = opts && 'obscureText' in opts ? opts.obscureText : null;
      let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : null;
      let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
      let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
      let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : null;
      let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
      let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
      let inputAction = opts && 'inputAction' in opts ? opts.inputAction : null;
      let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : null;
      let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : null;
      let enableIMEPersonalizedLearning = opts && 'enableIMEPersonalizedLearning' in opts ? opts.enableIMEPersonalizedLearning : null;
      let autofillConfiguration = opts && 'autofillConfiguration' in opts ? opts.autofillConfiguration : null;
      let enableDeltaModel = opts && 'enableDeltaModel' in opts ? opts.enableDeltaModel : null;
      return new text_input.TextInputConfiguration.new({inputType: (t1 = inputType, t1 == null ? this.inputType : t1), readOnly: (t1$ = readOnly, t1$ == null ? this.readOnly : t1$), obscureText: (t1$0 = obscureText, t1$0 == null ? this.obscureText : t1$0), autocorrect: (t1$1 = autocorrect, t1$1 == null ? this.autocorrect : t1$1), smartDashesType: (t1$2 = smartDashesType, t1$2 == null ? this.smartDashesType : t1$2), smartQuotesType: (t1$3 = smartQuotesType, t1$3 == null ? this.smartQuotesType : t1$3), enableSuggestions: (t1$4 = enableSuggestions, t1$4 == null ? this.enableSuggestions : t1$4), enableInteractiveSelection: (t1$5 = enableInteractiveSelection, t1$5 == null ? this.enableInteractiveSelection : t1$5), inputAction: (t1$6 = inputAction, t1$6 == null ? this.inputAction : t1$6), textCapitalization: (t1$7 = textCapitalization, t1$7 == null ? this.textCapitalization : t1$7), keyboardAppearance: (t1$8 = keyboardAppearance, t1$8 == null ? this.keyboardAppearance : t1$8), enableIMEPersonalizedLearning: (t1$9 = enableIMEPersonalizedLearning, t1$9 == null ? this.enableIMEPersonalizedLearning : t1$9), autofillConfiguration: (t1$10 = autofillConfiguration, t1$10 == null ? this.autofillConfiguration : t1$10), enableDeltaModel: (t1$11 = enableDeltaModel, t1$11 == null ? this.enableDeltaModel : t1$11)});
    }
    toJson() {
      let autofill = this.autofillConfiguration.toJson();
      return (() => {
        let t1 = new (T$.IdentityMapOfString$dynamic()).new();
        t1[$_set]("inputType", this.inputType.toJson());
        t1[$_set]("readOnly", this.readOnly);
        t1[$_set]("obscureText", this.obscureText);
        t1[$_set]("autocorrect", this.autocorrect);
        t1[$_set]("smartDashesType", this.smartDashesType.index[$toString]());
        t1[$_set]("smartQuotesType", this.smartQuotesType.index[$toString]());
        t1[$_set]("enableSuggestions", this.enableSuggestions);
        t1[$_set]("enableInteractiveSelection", this.enableInteractiveSelection);
        t1[$_set]("actionLabel", this.actionLabel);
        t1[$_set]("inputAction", this.inputAction.toString());
        t1[$_set]("textCapitalization", this.textCapitalization.toString());
        t1[$_set]("keyboardAppearance", this.keyboardAppearance.toString());
        t1[$_set]("enableIMEPersonalizedLearning", this.enableIMEPersonalizedLearning);
        if (autofill != null) t1[$_set]("autofill", autofill);
        t1[$_set]("enableDeltaModel", this.enableDeltaModel);
        return t1;
      })();
    }
  };
  (text_input.TextInputConfiguration.new = function(opts) {
    let t1, t1$;
    let inputType = opts && 'inputType' in opts ? opts.inputType : C[6] || CT.C6;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
    let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
    let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : true;
    let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
    let inputAction = opts && 'inputAction' in opts ? opts.inputAction : C[7] || CT.C7;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C[8] || CT.C8;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C[9] || CT.C9;
    let autofillConfiguration = opts && 'autofillConfiguration' in opts ? opts.autofillConfiguration : C[1] || CT.C1;
    let enableIMEPersonalizedLearning = opts && 'enableIMEPersonalizedLearning' in opts ? opts.enableIMEPersonalizedLearning : true;
    let enableDeltaModel = opts && 'enableDeltaModel' in opts ? opts.enableDeltaModel : false;
    this[inputType$] = inputType;
    this[readOnly$] = readOnly;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[enableSuggestions$] = enableSuggestions;
    this[enableInteractiveSelection$] = enableInteractiveSelection;
    this[actionLabel$] = actionLabel;
    this[inputAction$] = inputAction;
    this[keyboardAppearance$] = keyboardAppearance;
    this[textCapitalization$] = textCapitalization;
    this[autofillConfiguration$] = autofillConfiguration;
    this[enableIMEPersonalizedLearning$] = enableIMEPersonalizedLearning;
    this[enableDeltaModel$] = enableDeltaModel;
    if (!(inputType !== null)) dart.assertFailed(null, I[5], 478, 15, "inputType != null");
    if (!(obscureText !== null)) dart.assertFailed(null, I[5], 479, 15, "obscureText != null");
    this[smartDashesType$] = (t1 = smartDashesType, t1 == null ? obscureText ? text_input.SmartDashesType.disabled : text_input.SmartDashesType.enabled : t1);
    this[smartQuotesType$] = (t1$ = smartQuotesType, t1$ == null ? obscureText ? text_input.SmartQuotesType.disabled : text_input.SmartQuotesType.enabled : t1$);
    if (!(autocorrect !== null)) dart.assertFailed(null, I[5], 482, 15, "autocorrect != null");
    if (!(enableSuggestions !== null)) dart.assertFailed(null, I[5], 483, 15, "enableSuggestions != null");
    if (!(keyboardAppearance !== null)) dart.assertFailed(null, I[5], 484, 15, "keyboardAppearance != null");
    if (!(inputAction !== null)) dart.assertFailed(null, I[5], 485, 15, "inputAction != null");
    if (!(textCapitalization !== null)) dart.assertFailed(null, I[5], 486, 15, "textCapitalization != null");
    if (!(enableIMEPersonalizedLearning !== null)) dart.assertFailed(null, I[5], 487, 15, "enableIMEPersonalizedLearning != null");
    if (!(enableDeltaModel !== null)) dart.assertFailed(null, I[5], 488, 15, "enableDeltaModel != null");
    ;
  }).prototype = text_input.TextInputConfiguration.prototype;
  dart.addTypeTests(text_input.TextInputConfiguration);
  dart.addTypeCaches(text_input.TextInputConfiguration);
  dart.setMethodSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getMethods(text_input.TextInputConfiguration.__proto__),
    copyWith: dart.fnType(text_input.TextInputConfiguration, [], {actionLabel: dart.nullable(core.String), autocorrect: dart.nullable(core.bool), autofillConfiguration: dart.nullable(autofill.AutofillConfiguration), enableDeltaModel: dart.nullable(core.bool), enableIMEPersonalizedLearning: dart.nullable(core.bool), enableInteractiveSelection: dart.nullable(core.bool), enableSuggestions: dart.nullable(core.bool), inputAction: dart.nullable(text_input.TextInputAction), inputType: dart.nullable(text_input.TextInputType), keyboardAppearance: dart.nullable(ui.Brightness), obscureText: dart.nullable(core.bool), readOnly: dart.nullable(core.bool), smartDashesType: dart.nullable(text_input.SmartDashesType), smartQuotesType: dart.nullable(text_input.SmartQuotesType), textCapitalization: dart.nullable(text_input.TextCapitalization)}, {}),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(text_input.TextInputConfiguration, I[6]);
  dart.setFieldSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getFields(text_input.TextInputConfiguration.__proto__),
    inputType: dart.finalFieldType(text_input.TextInputType),
    readOnly: dart.finalFieldType(core.bool),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    autofillConfiguration: dart.finalFieldType(autofill.AutofillConfiguration),
    smartDashesType: dart.finalFieldType(text_input.SmartDashesType),
    smartQuotesType: dart.finalFieldType(text_input.SmartQuotesType),
    enableSuggestions: dart.finalFieldType(core.bool),
    enableInteractiveSelection: dart.finalFieldType(core.bool),
    actionLabel: dart.finalFieldType(dart.nullable(core.String)),
    inputAction: dart.finalFieldType(text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    keyboardAppearance: dart.finalFieldType(ui.Brightness),
    enableIMEPersonalizedLearning: dart.finalFieldType(core.bool),
    enableDeltaModel: dart.finalFieldType(core.bool)
  }));
  autofill._AutofillScopeTextInputConfiguration = class _AutofillScopeTextInputConfiguration extends text_input.TextInputConfiguration {
    static ['_#new#tearOff'](opts) {
      let allConfigurations = opts && 'allConfigurations' in opts ? opts.allConfigurations : null;
      let currentClientConfiguration = opts && 'currentClientConfiguration' in opts ? opts.currentClientConfiguration : null;
      return new autofill._AutofillScopeTextInputConfiguration.new({allConfigurations: allConfigurations, currentClientConfiguration: currentClientConfiguration});
    }
    toJson() {
      let result = super.toJson();
      result[$_set]("fields", this.allConfigurations[$map](T$.MapOfString$dynamic(), dart.fn(configuration => configuration.toJson(), T$.TextInputConfigurationToMapOfString$dynamic()))[$toList]({growable: false}));
      return result;
    }
  };
  (autofill._AutofillScopeTextInputConfiguration.new = function(opts) {
    let allConfigurations = opts && 'allConfigurations' in opts ? opts.allConfigurations : null;
    let currentClientConfiguration = opts && 'currentClientConfiguration' in opts ? opts.currentClientConfiguration : null;
    this.allConfigurations = allConfigurations;
    if (!(allConfigurations !== null)) dart.assertFailed(null, I[4], 813, 15, "allConfigurations != null");
    if (!(currentClientConfiguration !== null)) dart.assertFailed(null, I[4], 814, 15, "currentClientConfiguration != null");
    autofill._AutofillScopeTextInputConfiguration.__proto__.new.call(this, {inputType: currentClientConfiguration.inputType, obscureText: currentClientConfiguration.obscureText, autocorrect: currentClientConfiguration.autocorrect, smartDashesType: currentClientConfiguration.smartDashesType, smartQuotesType: currentClientConfiguration.smartQuotesType, enableSuggestions: currentClientConfiguration.enableSuggestions, inputAction: currentClientConfiguration.inputAction, textCapitalization: currentClientConfiguration.textCapitalization, keyboardAppearance: currentClientConfiguration.keyboardAppearance, actionLabel: currentClientConfiguration.actionLabel, autofillConfiguration: currentClientConfiguration.autofillConfiguration});
    ;
  }).prototype = autofill._AutofillScopeTextInputConfiguration.prototype;
  dart.addTypeTests(autofill._AutofillScopeTextInputConfiguration);
  dart.addTypeCaches(autofill._AutofillScopeTextInputConfiguration);
  dart.setLibraryUri(autofill._AutofillScopeTextInputConfiguration, I[3]);
  dart.setFieldSignature(autofill._AutofillScopeTextInputConfiguration, () => ({
    __proto__: dart.getFields(autofill._AutofillScopeTextInputConfiguration.__proto__),
    allConfigurations: dart.finalFieldType(core.Iterable$(text_input.TextInputConfiguration))
  }));
  autofill.AutofillScopeMixin = class AutofillScopeMixin extends core.Object {};
  autofill.AutofillScopeMixin[dart.mixinOn] = Object => class AutofillScopeMixin extends Object {
    attach(trigger, configuration) {
      if (!(trigger !== null)) dart.assertFailed(null, I[4], 846, 12, "trigger != null");
      if (!!this.autofillClients[$any](dart.fn(client => !client.textInputConfiguration.autofillConfiguration.enabled, T$.AutofillClientTobool()))) dart.assertFailed("Every client in AutofillScope.autofillClients must enable autofill", I[4], 848, 7, "!autofillClients.any((AutofillClient client) => !client.textInputConfiguration.autofillConfiguration.enabled)");
      let inputConfiguration = new autofill._AutofillScopeTextInputConfiguration.new({allConfigurations: this.autofillClients[$map](text_input.TextInputConfiguration, dart.fn(client => client.textInputConfiguration, T$.AutofillClientToTextInputConfiguration())), currentClientConfiguration: configuration});
      return text_input.TextInput.attach(trigger, inputConfiguration);
    }
  };
  (autofill.AutofillScopeMixin[dart.mixinNew] = function() {
  }).prototype = autofill.AutofillScopeMixin.prototype;
  dart.addTypeTests(autofill.AutofillScopeMixin);
  dart.addTypeCaches(autofill.AutofillScopeMixin);
  autofill.AutofillScopeMixin[dart.implements] = () => [autofill.AutofillScope, core.Object];
  dart.setMethodSignature(autofill.AutofillScopeMixin, () => ({
    __proto__: dart.getMethods(autofill.AutofillScopeMixin.__proto__),
    attach: dart.fnType(text_input.TextInputConnection, [text_input.TextInputClient, text_input.TextInputConfiguration])
  }));
  dart.setLibraryUri(autofill.AutofillScopeMixin, I[3]);
  var _name = dart.privateName(core, "_name");
  text_input.SmartDashesType = class SmartDashesType extends core._Enum {
    toString() {
      return "SmartDashesType." + this[_name];
    }
  };
  (text_input.SmartDashesType.new = function(index, name) {
    text_input.SmartDashesType.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.SmartDashesType.prototype;
  dart.addTypeTests(text_input.SmartDashesType);
  dart.addTypeCaches(text_input.SmartDashesType);
  dart.setLibraryUri(text_input.SmartDashesType, I[6]);
  dart.setStaticFieldSignature(text_input.SmartDashesType, () => ['values', 'disabled', 'enabled']);
  dart.defineExtensionMethods(text_input.SmartDashesType, ['toString']);
  dart.defineLazy(text_input.SmartDashesType, {
    /*text_input.SmartDashesType.values*/get values() {
      return C[10] || CT.C10;
    },
    /*text_input.SmartDashesType.disabled*/get disabled() {
      return C[11] || CT.C11;
    },
    /*text_input.SmartDashesType.enabled*/get enabled() {
      return C[12] || CT.C12;
    }
  }, false);
  text_input.SmartQuotesType = class SmartQuotesType extends core._Enum {
    toString() {
      return "SmartQuotesType." + this[_name];
    }
  };
  (text_input.SmartQuotesType.new = function(index, name) {
    text_input.SmartQuotesType.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.SmartQuotesType.prototype;
  dart.addTypeTests(text_input.SmartQuotesType);
  dart.addTypeCaches(text_input.SmartQuotesType);
  dart.setLibraryUri(text_input.SmartQuotesType, I[6]);
  dart.setStaticFieldSignature(text_input.SmartQuotesType, () => ['values', 'disabled', 'enabled']);
  dart.defineExtensionMethods(text_input.SmartQuotesType, ['toString']);
  dart.defineLazy(text_input.SmartQuotesType, {
    /*text_input.SmartQuotesType.values*/get values() {
      return C[13] || CT.C13;
    },
    /*text_input.SmartQuotesType.disabled*/get disabled() {
      return C[14] || CT.C14;
    },
    /*text_input.SmartQuotesType.enabled*/get enabled() {
      return C[15] || CT.C15;
    }
  }, false);
  var _name$ = dart.privateName(text_input, "_name");
  const index$ = TextInputType_index;
  const signed$ = TextInputType_signed;
  const decimal$ = TextInputType_decimal;
  text_input.TextInputType = class TextInputType extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get signed() {
      return this[signed$];
    }
    set signed(value) {
      super.signed = value;
    }
    get decimal() {
      return this[decimal$];
    }
    set decimal(value) {
      super.decimal = value;
    }
    static ['_#_#tearOff'](index) {
      return new text_input.TextInputType.__(index);
    }
    static ['_#numberWithOptions#tearOff'](opts) {
      let signed = opts && 'signed' in opts ? opts.signed : false;
      let decimal = opts && 'decimal' in opts ? opts.decimal : false;
      return new text_input.TextInputType.numberWithOptions({signed: signed, decimal: decimal});
    }
    get [_name$]() {
      return "TextInputType." + text_input.TextInputType._names[$_get](this.index);
    }
    toJson() {
      return new (T$.IdentityMapOfString$dynamic()).from(["name", this[_name$], "signed", this.signed, "decimal", this.decimal]);
    }
    toString() {
      return object.objectRuntimeType(this, "TextInputType") + "(" + "name: " + this[_name$] + ", " + "signed: " + dart.str(this.signed) + ", " + "decimal: " + dart.str(this.decimal) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return text_input.TextInputType.is(other) && other.index === this.index && other.signed == this.signed && other.decimal == this.decimal;
    }
    get hashCode() {
      return core.Object.hash(this.index, this.signed, this.decimal);
    }
  };
  (text_input.TextInputType.__ = function(index) {
    this[index$] = index;
    this[signed$] = null;
    this[decimal$] = null;
    ;
  }).prototype = text_input.TextInputType.prototype;
  (text_input.TextInputType.numberWithOptions = function(opts) {
    let signed = opts && 'signed' in opts ? opts.signed : false;
    let decimal = opts && 'decimal' in opts ? opts.decimal : false;
    this[signed$] = signed;
    this[decimal$] = decimal;
    this[index$] = 2;
    ;
  }).prototype = text_input.TextInputType.prototype;
  dart.addTypeTests(text_input.TextInputType);
  dart.addTypeCaches(text_input.TextInputType);
  dart.setMethodSignature(text_input.TextInputType, () => ({
    __proto__: dart.getMethods(text_input.TextInputType.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(text_input.TextInputType, () => ({
    __proto__: dart.getGetters(text_input.TextInputType.__proto__),
    [_name$]: core.String
  }));
  dart.setLibraryUri(text_input.TextInputType, I[6]);
  dart.setFieldSignature(text_input.TextInputType, () => ({
    __proto__: dart.getFields(text_input.TextInputType.__proto__),
    index: dart.finalFieldType(core.int),
    signed: dart.finalFieldType(dart.nullable(core.bool)),
    decimal: dart.finalFieldType(dart.nullable(core.bool))
  }));
  dart.setStaticFieldSignature(text_input.TextInputType, () => ['text', 'multiline', 'number', 'phone', 'datetime', 'emailAddress', 'url', 'visiblePassword', 'name_', 'streetAddress', 'none', 'values', '_names']);
  dart.defineExtensionMethods(text_input.TextInputType, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextInputType, ['hashCode']);
  dart.defineLazy(text_input.TextInputType, {
    /*text_input.TextInputType.text*/get text() {
      return C[6] || CT.C6;
    },
    /*text_input.TextInputType.multiline*/get multiline() {
      return C[16] || CT.C16;
    },
    /*text_input.TextInputType.number*/get number() {
      return C[17] || CT.C17;
    },
    /*text_input.TextInputType.phone*/get phone() {
      return C[18] || CT.C18;
    },
    /*text_input.TextInputType.datetime*/get datetime() {
      return C[19] || CT.C19;
    },
    /*text_input.TextInputType.emailAddress*/get emailAddress() {
      return C[20] || CT.C20;
    },
    /*text_input.TextInputType.url*/get url() {
      return C[21] || CT.C21;
    },
    /*text_input.TextInputType.visiblePassword*/get visiblePassword() {
      return C[22] || CT.C22;
    },
    /*text_input.TextInputType.name_*/get name_() {
      return C[23] || CT.C23;
    },
    /*text_input.TextInputType.streetAddress*/get streetAddress() {
      return C[24] || CT.C24;
    },
    /*text_input.TextInputType.none*/get none() {
      return C[25] || CT.C25;
    },
    /*text_input.TextInputType.values*/get values() {
      return C[26] || CT.C26;
    },
    /*text_input.TextInputType._names*/get _names() {
      return C[27] || CT.C27;
    }
  }, false);
  text_input.TextInputAction = class TextInputAction extends core._Enum {
    toString() {
      return "TextInputAction." + this[_name];
    }
  };
  (text_input.TextInputAction.new = function(index, name) {
    text_input.TextInputAction.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.TextInputAction.prototype;
  dart.addTypeTests(text_input.TextInputAction);
  dart.addTypeCaches(text_input.TextInputAction);
  dart.setLibraryUri(text_input.TextInputAction, I[6]);
  dart.setStaticFieldSignature(text_input.TextInputAction, () => ['values', 'none', 'unspecified', 'done', 'go', 'search', 'send', 'next', 'previous', 'continueAction', 'join', 'route', 'emergencyCall', 'newline']);
  dart.defineExtensionMethods(text_input.TextInputAction, ['toString']);
  dart.defineLazy(text_input.TextInputAction, {
    /*text_input.TextInputAction.values*/get values() {
      return C[28] || CT.C28;
    },
    /*text_input.TextInputAction.none*/get none() {
      return C[29] || CT.C29;
    },
    /*text_input.TextInputAction.unspecified*/get unspecified() {
      return C[30] || CT.C30;
    },
    /*text_input.TextInputAction.done*/get done() {
      return C[7] || CT.C7;
    },
    /*text_input.TextInputAction.go*/get go() {
      return C[31] || CT.C31;
    },
    /*text_input.TextInputAction.search*/get search() {
      return C[32] || CT.C32;
    },
    /*text_input.TextInputAction.send*/get send() {
      return C[33] || CT.C33;
    },
    /*text_input.TextInputAction.next*/get next() {
      return C[34] || CT.C34;
    },
    /*text_input.TextInputAction.previous*/get previous() {
      return C[35] || CT.C35;
    },
    /*text_input.TextInputAction.continueAction*/get continueAction() {
      return C[36] || CT.C36;
    },
    /*text_input.TextInputAction.join*/get join() {
      return C[37] || CT.C37;
    },
    /*text_input.TextInputAction.route*/get route() {
      return C[38] || CT.C38;
    },
    /*text_input.TextInputAction.emergencyCall*/get emergencyCall() {
      return C[39] || CT.C39;
    },
    /*text_input.TextInputAction.newline*/get newline() {
      return C[40] || CT.C40;
    }
  }, false);
  text_input.TextCapitalization = class TextCapitalization extends core._Enum {
    toString() {
      return "TextCapitalization." + this[_name];
    }
  };
  (text_input.TextCapitalization.new = function(index, name) {
    text_input.TextCapitalization.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.TextCapitalization.prototype;
  dart.addTypeTests(text_input.TextCapitalization);
  dart.addTypeCaches(text_input.TextCapitalization);
  dart.setLibraryUri(text_input.TextCapitalization, I[6]);
  dart.setStaticFieldSignature(text_input.TextCapitalization, () => ['values', 'words', 'sentences', 'characters', 'none']);
  dart.defineExtensionMethods(text_input.TextCapitalization, ['toString']);
  dart.defineLazy(text_input.TextCapitalization, {
    /*text_input.TextCapitalization.values*/get values() {
      return C[41] || CT.C41;
    },
    /*text_input.TextCapitalization.words*/get words() {
      return C[42] || CT.C42;
    },
    /*text_input.TextCapitalization.sentences*/get sentences() {
      return C[43] || CT.C43;
    },
    /*text_input.TextCapitalization.characters*/get characters() {
      return C[44] || CT.C44;
    },
    /*text_input.TextCapitalization.none*/get none() {
      return C[9] || CT.C9;
    }
  }, false);
  text_input.FloatingCursorDragState = class FloatingCursorDragState extends core._Enum {
    toString() {
      return "FloatingCursorDragState." + this[_name];
    }
  };
  (text_input.FloatingCursorDragState.new = function(index, name) {
    text_input.FloatingCursorDragState.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.FloatingCursorDragState.prototype;
  dart.addTypeTests(text_input.FloatingCursorDragState);
  dart.addTypeCaches(text_input.FloatingCursorDragState);
  dart.setLibraryUri(text_input.FloatingCursorDragState, I[6]);
  dart.setStaticFieldSignature(text_input.FloatingCursorDragState, () => ['values', 'Start', 'Update', 'End']);
  dart.defineExtensionMethods(text_input.FloatingCursorDragState, ['toString']);
  dart.defineLazy(text_input.FloatingCursorDragState, {
    /*text_input.FloatingCursorDragState.values*/get values() {
      return C[45] || CT.C45;
    },
    /*text_input.FloatingCursorDragState.Start*/get Start() {
      return C[46] || CT.C46;
    },
    /*text_input.FloatingCursorDragState.Update*/get Update() {
      return C[47] || CT.C47;
    },
    /*text_input.FloatingCursorDragState.End*/get End() {
      return C[48] || CT.C48;
    }
  }, false);
  var offset$ = dart.privateName(text_input, "RawFloatingCursorPoint.offset");
  var state$ = dart.privateName(text_input, "RawFloatingCursorPoint.state");
  text_input.RawFloatingCursorPoint = class RawFloatingCursorPoint extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
    static ['_#new#tearOff'](opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let state = opts && 'state' in opts ? opts.state : null;
      return new text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
    }
  };
  (text_input.RawFloatingCursorPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let state = opts && 'state' in opts ? opts.state : null;
    this[offset$] = offset;
    this[state$] = state;
    if (!(state !== null)) dart.assertFailed(null, I[5], 746, 15, "state != null");
    if (!(state !== text_input.FloatingCursorDragState.Update || offset != null)) dart.assertFailed(null, I[5], 747, 15, "state != FloatingCursorDragState.Update || offset != null");
    ;
  }).prototype = text_input.RawFloatingCursorPoint.prototype;
  dart.addTypeTests(text_input.RawFloatingCursorPoint);
  dart.addTypeCaches(text_input.RawFloatingCursorPoint);
  dart.setLibraryUri(text_input.RawFloatingCursorPoint, I[6]);
  dart.setFieldSignature(text_input.RawFloatingCursorPoint, () => ({
    __proto__: dart.getFields(text_input.RawFloatingCursorPoint.__proto__),
    offset: dart.finalFieldType(dart.nullable(ui.Offset)),
    state: dart.finalFieldType(text_input.FloatingCursorDragState)
  }));
  const text$0 = TextEditingValue_text;
  const selection$0 = TextEditingValue_selection;
  const composing$0 = TextEditingValue_composing;
  text_input.TextEditingValue = class TextEditingValue extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get selection() {
      return this[selection$0];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$0];
    }
    set composing(value) {
      super.composing = value;
    }
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : "";
      let selection = opts && 'selection' in opts ? opts.selection : C[4] || CT.C4;
      let composing = opts && 'composing' in opts ? opts.composing : C[3] || CT.C3;
      return new text_input.TextEditingValue.new({text: text, selection: selection, composing: composing});
    }
    static fromJSON(encoded) {
      let t12, t12$, t12$0, t12$1, t12$2, t12$3;
      let text = core.String.as(encoded[$_get]("text"));
      let selection = new text_editing.TextSelection.new({baseOffset: (t12 = T$.intN().as(encoded[$_get]("selectionBase")), t12 == null ? -1 : t12), extentOffset: (t12$ = T$.intN().as(encoded[$_get]("selectionExtent")), t12$ == null ? -1 : t12$), affinity: (t12$0 = text_input._toTextAffinity(T$.StringN().as(encoded[$_get]("selectionAffinity"))), t12$0 == null ? ui.TextAffinity.downstream : t12$0), isDirectional: (t12$1 = T$.boolN().as(encoded[$_get]("selectionIsDirectional")), t12$1 == null ? false : t12$1)});
      let composing = new ui.TextRange.new({start: (t12$2 = T$.intN().as(encoded[$_get]("composingBase")), t12$2 == null ? -1 : t12$2), end: (t12$3 = T$.intN().as(encoded[$_get]("composingExtent")), t12$3 == null ? -1 : t12$3)});
      if (!text_input.TextEditingValue._textRangeIsValid(selection, text)) dart.assertFailed(null, I[5], 794, 12, "_textRangeIsValid(selection, text)");
      if (!text_input.TextEditingValue._textRangeIsValid(composing, text)) dart.assertFailed(null, I[5], 795, 12, "_textRangeIsValid(composing, text)");
      return new text_input.TextEditingValue.new({text: text, selection: selection, composing: composing});
    }
    static ['_#fromJSON#tearOff'](encoded) {
      return text_input.TextEditingValue.fromJSON(encoded);
    }
    copyWith(opts) {
      let t12, t12$, t12$0;
      let text = opts && 'text' in opts ? opts.text : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_input.TextEditingValue.new({text: (t12 = text, t12 == null ? this.text : t12), selection: (t12$ = selection, t12$ == null ? this.selection : t12$), composing: (t12$0 = composing, t12$0 == null ? this.composing : t12$0)});
    }
    get isComposingRangeValid() {
      return this.composing.isValid && this.composing.isNormalized && this.composing.end <= this.text.length;
    }
    replaced(replacementRange, replacementString) {
      if (!replacementRange.isValid) {
        return this;
      }
      let newText = this.text[$replaceRange](replacementRange.start, replacementRange.end, replacementString);
      if (replacementRange.end - replacementRange.start === replacementString.length) {
        return this.copyWith({text: newText});
      }
      function adjustIndex(originalIndex) {
        let replacedLength = originalIndex <= replacementRange.start && originalIndex < replacementRange.end ? 0 : replacementString.length;
        let removedLength = originalIndex[$clamp](replacementRange.start, replacementRange.end) - replacementRange.start;
        return originalIndex + replacedLength - removedLength;
      }
      dart.fn(adjustIndex, T$.intToint());
      let adjustedSelection = new text_editing.TextSelection.new({baseOffset: adjustIndex(this.selection.baseOffset), extentOffset: adjustIndex(this.selection.extentOffset)});
      let adjustedComposing = new ui.TextRange.new({start: adjustIndex(this.composing.start), end: adjustIndex(this.composing.end)});
      if (!text_input.TextEditingValue._textRangeIsValid(adjustedSelection, newText)) dart.assertFailed(null, I[5], 912, 12, "_textRangeIsValid(adjustedSelection, newText)");
      if (!text_input.TextEditingValue._textRangeIsValid(adjustedComposing, newText)) dart.assertFailed(null, I[5], 913, 12, "_textRangeIsValid(adjustedComposing, newText)");
      return new text_input.TextEditingValue.new({text: newText, selection: adjustedSelection, composing: adjustedComposing});
    }
    toJSON() {
      if (!text_input.TextEditingValue._textRangeIsValid(this.selection, this.text)) dart.assertFailed(null, I[5], 923, 12, "_textRangeIsValid(selection, text)");
      if (!text_input.TextEditingValue._textRangeIsValid(this.composing, this.text)) dart.assertFailed(null, I[5], 924, 12, "_textRangeIsValid(composing, text)");
      return new (T$.IdentityMapOfString$dynamic()).from(["text", this.text, "selectionBase", this.selection.baseOffset, "selectionExtent", this.selection.extentOffset, "selectionAffinity", this.selection.affinity.toString(), "selectionIsDirectional", this.selection.isDirectional, "composingBase", this.composing.start, "composingExtent", this.composing.end]);
    }
    toString() {
      return object.objectRuntimeType(this, "TextEditingValue") + "(text: ┤" + this.text + "├, selection: " + dart.str(this.selection) + ", composing: " + dart.str(this.composing) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      return text_input.TextEditingValue.is(other) && other.text === this.text && other.selection._equals(this.selection) && other.composing._equals(this.composing);
    }
    get hashCode() {
      return core.Object.hash(this.text[$hashCode], this.selection.hashCode, this.composing.hashCode);
    }
    static _textRangeIsValid(range, text) {
      if (range.start === -1 && range.end === -1) {
        return true;
      }
      if (!(range.start >= 0 && range.start <= text.length)) dart.assertFailed("Range start " + dart.str(range.start) + " is out of text of length " + dart.str(text.length), I[5], 968, 12, "range.start >= 0 && range.start <= text.length");
      if (!(range.end >= 0 && range.end <= text.length)) dart.assertFailed("Range end " + dart.str(range.end) + " is out of text of length " + dart.str(text.length), I[5], 970, 12, "range.end >= 0 && range.end <= text.length");
      return true;
    }
  };
  (text_input.TextEditingValue.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    let selection = opts && 'selection' in opts ? opts.selection : C[4] || CT.C4;
    let composing = opts && 'composing' in opts ? opts.composing : C[3] || CT.C3;
    this[text$0] = text;
    this[selection$0] = selection;
    this[composing$0] = composing;
    if (!(text !== null)) dart.assertFailed(null, I[5], 773, 15, "text != null");
    if (!(selection !== null)) dart.assertFailed(null, I[5], 778, 15, "selection != null");
    if (!(composing !== null)) dart.assertFailed(null, I[5], 779, 15, "composing != null");
    ;
  }).prototype = text_input.TextEditingValue.prototype;
  dart.addTypeTests(text_input.TextEditingValue);
  dart.addTypeCaches(text_input.TextEditingValue);
  dart.setMethodSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getMethods(text_input.TextEditingValue.__proto__),
    copyWith: dart.fnType(text_input.TextEditingValue, [], {composing: dart.nullable(ui.TextRange), selection: dart.nullable(text_editing.TextSelection), text: dart.nullable(core.String)}, {}),
    replaced: dart.fnType(text_input.TextEditingValue, [ui.TextRange, core.String]),
    toJSON: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setStaticMethodSignature(text_input.TextEditingValue, () => ['fromJSON', '_textRangeIsValid']);
  dart.setGetterSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getGetters(text_input.TextEditingValue.__proto__),
    isComposingRangeValid: core.bool
  }));
  dart.setLibraryUri(text_input.TextEditingValue, I[6]);
  dart.setFieldSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getFields(text_input.TextEditingValue.__proto__),
    text: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(text_editing.TextSelection),
    composing: dart.finalFieldType(ui.TextRange)
  }));
  dart.setStaticFieldSignature(text_input.TextEditingValue, () => ['empty']);
  dart.defineExtensionMethods(text_input.TextEditingValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextEditingValue, ['hashCode']);
  dart.defineLazy(text_input.TextEditingValue, {
    /*text_input.TextEditingValue.empty*/get empty() {
      return C[2] || CT.C2;
    }
  }, false);
  text_input.SelectionChangedCause = class SelectionChangedCause extends core._Enum {
    toString() {
      return "SelectionChangedCause." + this[_name];
    }
  };
  (text_input.SelectionChangedCause.new = function(index, name) {
    text_input.SelectionChangedCause.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.SelectionChangedCause.prototype;
  dart.addTypeTests(text_input.SelectionChangedCause);
  dart.addTypeCaches(text_input.SelectionChangedCause);
  dart.setLibraryUri(text_input.SelectionChangedCause, I[6]);
  dart.setStaticFieldSignature(text_input.SelectionChangedCause, () => ['values', 'tap', 'doubleTap', 'longPress', 'forcePress', 'keyboard', 'toolbar', 'drag', 'scribble']);
  dart.defineExtensionMethods(text_input.SelectionChangedCause, ['toString']);
  dart.defineLazy(text_input.SelectionChangedCause, {
    /*text_input.SelectionChangedCause.values*/get values() {
      return C[49] || CT.C49;
    },
    /*text_input.SelectionChangedCause.tap*/get tap() {
      return C[50] || CT.C50;
    },
    /*text_input.SelectionChangedCause.doubleTap*/get doubleTap() {
      return C[51] || CT.C51;
    },
    /*text_input.SelectionChangedCause.longPress*/get longPress() {
      return C[52] || CT.C52;
    },
    /*text_input.SelectionChangedCause.forcePress*/get forcePress() {
      return C[53] || CT.C53;
    },
    /*text_input.SelectionChangedCause.keyboard*/get keyboard() {
      return C[54] || CT.C54;
    },
    /*text_input.SelectionChangedCause.toolbar*/get toolbar() {
      return C[55] || CT.C55;
    },
    /*text_input.SelectionChangedCause.drag*/get drag() {
      return C[56] || CT.C56;
    },
    /*text_input.SelectionChangedCause.scribble*/get scribble() {
      return C[57] || CT.C57;
    }
  }, false);
  text_input.TextSelectionDelegate = class TextSelectionDelegate extends core.Object {};
  text_input.TextSelectionDelegate[dart.mixinOn] = Object => class TextSelectionDelegate extends Object {
    get cutEnabled() {
      return true;
    }
    get copyEnabled() {
      return true;
    }
    get pasteEnabled() {
      return true;
    }
    get selectAllEnabled() {
      return true;
    }
  };
  (text_input.TextSelectionDelegate[dart.mixinNew] = function() {
  }).prototype = text_input.TextSelectionDelegate.prototype;
  dart.addTypeTests(text_input.TextSelectionDelegate);
  dart.addTypeCaches(text_input.TextSelectionDelegate);
  text_input.TextSelectionDelegate[dart.implements] = () => [core.Object];
  dart.setGetterSignature(text_input.TextSelectionDelegate, () => ({
    __proto__: dart.getGetters(text_input.TextSelectionDelegate.__proto__),
    cutEnabled: core.bool,
    copyEnabled: core.bool,
    pasteEnabled: core.bool,
    selectAllEnabled: core.bool
  }));
  dart.setLibraryUri(text_input.TextSelectionDelegate, I[6]);
  text_input.TextInputClient = class TextInputClient extends core.Object {};
  text_input.TextInputClient[dart.mixinOn] = Object => class TextInputClient extends Object {
    showToolbar() {
    }
    insertTextPlaceholder(size) {
    }
    removeTextPlaceholder() {
    }
  };
  (text_input.TextInputClient[dart.mixinNew] = function() {
  }).prototype = text_input.TextInputClient.prototype;
  dart.addTypeTests(text_input.TextInputClient);
  dart.addTypeCaches(text_input.TextInputClient);
  text_input.TextInputClient[dart.implements] = () => [core.Object];
  dart.setMethodSignature(text_input.TextInputClient, () => ({
    __proto__: dart.getMethods(text_input.TextInputClient.__proto__),
    showToolbar: dart.fnType(dart.void, []),
    insertTextPlaceholder: dart.fnType(dart.void, [ui.Size]),
    removeTextPlaceholder: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(text_input.TextInputClient, I[6]);
  text_input.ScribbleClient = class ScribbleClient extends core.Object {};
  (text_input.ScribbleClient.new = function() {
    ;
  }).prototype = text_input.ScribbleClient.prototype;
  dart.addTypeTests(text_input.ScribbleClient);
  dart.addTypeCaches(text_input.ScribbleClient);
  dart.setLibraryUri(text_input.ScribbleClient, I[6]);
  var position$ = dart.privateName(text_input, "SelectionRect.position");
  var bounds$ = dart.privateName(text_input, "SelectionRect.bounds");
  text_input.SelectionRect = class SelectionRect extends core.Object {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get bounds() {
      return this[bounds$];
    }
    set bounds(value) {
      super.bounds = value;
    }
    static ['_#new#tearOff'](opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let bounds = opts && 'bounds' in opts ? opts.bounds : null;
      return new text_input.SelectionRect.new({position: position, bounds: bounds});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!this[$runtimeType]._equals(other[$runtimeType])) {
        return false;
      }
      return text_input.SelectionRect.is(other) && other.position === this.position && other.bounds._equals(this.bounds);
    }
    get hashCode() {
      return core.Object.hash(this.position, this.bounds);
    }
    toString() {
      return "SelectionRect(" + dart.str(this.position) + ", " + dart.str(this.bounds) + ")";
    }
  };
  (text_input.SelectionRect.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let bounds = opts && 'bounds' in opts ? opts.bounds : null;
    this[position$] = position;
    this[bounds$] = bounds;
    ;
  }).prototype = text_input.SelectionRect.prototype;
  dart.addTypeTests(text_input.SelectionRect);
  dart.addTypeCaches(text_input.SelectionRect);
  dart.setLibraryUri(text_input.SelectionRect, I[6]);
  dart.setFieldSignature(text_input.SelectionRect, () => ({
    __proto__: dart.getFields(text_input.SelectionRect.__proto__),
    position: dart.finalFieldType(core.int),
    bounds: dart.finalFieldType(ui.Rect)
  }));
  dart.defineExtensionMethods(text_input.SelectionRect, ['_equals', 'toString']);
  dart.defineExtensionAccessors(text_input.SelectionRect, ['hashCode']);
  text_input.DeltaTextInputClient = class DeltaTextInputClient extends core.Object {};
  text_input.DeltaTextInputClient[dart.mixinOn] = Object => class DeltaTextInputClient extends Object {};
  (text_input.DeltaTextInputClient[dart.mixinNew] = function() {
  }).prototype = text_input.DeltaTextInputClient.prototype;
  dart.addTypeTests(text_input.DeltaTextInputClient);
  dart.addTypeCaches(text_input.DeltaTextInputClient);
  text_input.DeltaTextInputClient[dart.implements] = () => [text_input.TextInputClient, core.Object];
  dart.setLibraryUri(text_input.DeltaTextInputClient, I[6]);
  var _cachedSize = dart.privateName(text_input, "_cachedSize");
  var _cachedTransform = dart.privateName(text_input, "_cachedTransform");
  var _cachedRect = dart.privateName(text_input, "_cachedRect");
  var _cachedCaretRect = dart.privateName(text_input, "_cachedCaretRect");
  var _cachedSelectionRects = dart.privateName(text_input, "_cachedSelectionRects");
  var _client$ = dart.privateName(text_input, "_client");
  var _id = dart.privateName(text_input, "_id");
  var _currentConnection = dart.privateName(text_input, "_currentConnection");
  var _show = dart.privateName(text_input, "_show");
  var _requestAutofill = dart.privateName(text_input, "_requestAutofill");
  var _updateConfig = dart.privateName(text_input, "_updateConfig");
  var _setEditingState = dart.privateName(text_input, "_setEditingState");
  var _setEditableSizeAndTransform = dart.privateName(text_input, "_setEditableSizeAndTransform");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var _setComposingTextRect = dart.privateName(text_input, "_setComposingTextRect");
  var _setCaretRect = dart.privateName(text_input, "_setCaretRect");
  var _setSelectionRects = dart.privateName(text_input, "_setSelectionRects");
  var _setStyle = dart.privateName(text_input, "_setStyle");
  var _clearClient = dart.privateName(text_input, "_clearClient");
  text_input.TextInputConnection = class TextInputConnection extends core.Object {
    static ['_#_#tearOff'](_client) {
      return new text_input.TextInputConnection.__(_client);
    }
    static debugResetId(opts) {
      let to = opts && 'to' in opts ? opts.to : 1;
      if (!(to !== null)) dart.assertFailed(null, I[5], 1288, 12, "to != null");
      if (!dart.fn(() => {
        text_input.TextInputConnection._nextId = to;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[5], 1289, 12, "() {\n      _nextId = to;\n      return true;\n    }()");
    }
    get attached() {
      return dart.equals(text_input.TextInput._instance[_currentConnection], this);
    }
    get scribbleInProgress() {
      return text_input.TextInput._instance.scribbleInProgress;
    }
    show() {
      if (!this.attached) dart.assertFailed(null, I[5], 1308, 12, "attached");
      text_input.TextInput._instance[_show]();
    }
    requestAutofill() {
      if (!this.attached) dart.assertFailed(null, I[5], 1321, 12, "attached");
      text_input.TextInput._instance[_requestAutofill]();
    }
    updateConfig(configuration) {
      if (!this.attached) dart.assertFailed(null, I[5], 1328, 12, "attached");
      text_input.TextInput._instance[_updateConfig](configuration);
    }
    setEditingState(value) {
      if (!this.attached) dart.assertFailed(null, I[5], 1335, 12, "attached");
      text_input.TextInput._instance[_setEditingState](value);
    }
    setEditableSizeAndTransform(editableBoxSize, transform) {
      if (!editableBoxSize._equals(this[_cachedSize]) || !transform._equals(this[_cachedTransform])) {
        this[_cachedSize] = editableBoxSize;
        this[_cachedTransform] = transform;
        text_input.TextInput._instance[_setEditableSizeAndTransform](new (T$.IdentityMapOfString$dynamic()).from(["width", editableBoxSize.width, "height", editableBoxSize.height, "transform", transform.storage]));
      }
    }
    setComposingRect(rect) {
      if (!(rect !== null)) dart.assertFailed(null, I[5], 1371, 12, "rect != null");
      if (rect._equals(this[_cachedRect])) {
        return;
      }
      this[_cachedRect] = rect;
      let validRect = rect.isFinite ? rect : ui.Offset.zero['&'](C[58] || CT.C58);
      text_input.TextInput._instance[_setComposingTextRect](new (T$.IdentityMapOfString$dynamic()).from(["width", validRect.width, "height", validRect.height, "x", validRect.left, "y", validRect.top]));
    }
    setCaretRect(rect) {
      if (!(rect !== null)) dart.assertFailed(null, I[5], 1390, 12, "rect != null");
      if (rect._equals(this[_cachedCaretRect])) {
        return;
      }
      this[_cachedCaretRect] = rect;
      let validRect = rect.isFinite ? rect : ui.Offset.zero['&'](C[58] || CT.C58);
      text_input.TextInput._instance[_setCaretRect](new (T$.IdentityMapOfString$dynamic()).from(["width", validRect.width, "height", validRect.height, "x", validRect.left, "y", validRect.top]));
    }
    setSelectionRects(selectionRects) {
      if (!collections.listEquals(text_input.SelectionRect, this[_cachedSelectionRects], selectionRects)) {
        this[_cachedSelectionRects] = selectionRects;
        text_input.TextInput._instance[_setSelectionRects](selectionRects[$map](T$.ListOfnum(), dart.fn(rect => T$.JSArrayOfnum().of([rect.bounds.left, rect.bounds.top, rect.bounds.width, rect.bounds.height, rect.position]), T$.SelectionRectToListOfnum()))[$toList]());
      }
    }
    setStyle(opts) {
      let t14;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      if (!this.attached) dart.assertFailed(null, I[5], 1431, 12, "attached");
      text_input.TextInput._instance[_setStyle](new (T$.IdentityMapOfString$dynamic()).from(["fontFamily", fontFamily, "fontSize", fontSize, "fontWeightIndex", (t14 = fontWeight, t14 == null ? null : t14.index), "textAlignIndex", textAlign.index, "textDirectionIndex", textDirection.index]));
    }
    close() {
      if (this.attached) {
        text_input.TextInput._instance[_clearClient]();
      }
      if (!!this.attached) dart.assertFailed(null, I[5], 1452, 12, "!attached");
    }
    connectionClosedReceived() {
      text_input.TextInput._instance[_currentConnection] = null;
      if (!!this.attached) dart.assertFailed(null, I[5], 1460, 12, "!attached");
    }
  };
  (text_input.TextInputConnection.__ = function(_client) {
    let t14;
    this[_cachedSize] = null;
    this[_cachedTransform] = null;
    this[_cachedRect] = null;
    this[_cachedCaretRect] = null;
    this[_cachedSelectionRects] = T$.JSArrayOfSelectionRect().of([]);
    this[_client$] = _client;
    if (!(_client !== null)) dart.assertFailed(null, I[5], 1270, 16, "_client != null");
    this[_id] = (t14 = text_input.TextInputConnection._nextId, text_input.TextInputConnection._nextId = dart.notNull(t14) + 1, t14);
    ;
  }).prototype = text_input.TextInputConnection.prototype;
  dart.addTypeTests(text_input.TextInputConnection);
  dart.addTypeCaches(text_input.TextInputConnection);
  dart.setMethodSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getMethods(text_input.TextInputConnection.__proto__),
    show: dart.fnType(dart.void, []),
    requestAutofill: dart.fnType(dart.void, []),
    updateConfig: dart.fnType(dart.void, [text_input.TextInputConfiguration]),
    setEditingState: dart.fnType(dart.void, [text_input.TextEditingValue]),
    setEditableSizeAndTransform: dart.fnType(dart.void, [ui.Size, vector_math_64.Matrix4]),
    setComposingRect: dart.fnType(dart.void, [ui.Rect]),
    setCaretRect: dart.fnType(dart.void, [ui.Rect]),
    setSelectionRects: dart.fnType(dart.void, [core.List$(text_input.SelectionRect)]),
    setStyle: dart.fnType(dart.void, [], {}, {fontFamily: dart.nullable(core.String), fontSize: dart.nullable(core.double), fontWeight: dart.nullable(ui.FontWeight), textAlign: ui.TextAlign, textDirection: ui.TextDirection}),
    close: dart.fnType(dart.void, []),
    connectionClosedReceived: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(text_input.TextInputConnection, () => ['debugResetId']);
  dart.setGetterSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getGetters(text_input.TextInputConnection.__proto__),
    attached: core.bool,
    scribbleInProgress: core.bool
  }));
  dart.setLibraryUri(text_input.TextInputConnection, I[6]);
  dart.setFieldSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getFields(text_input.TextInputConnection.__proto__),
    [_cachedSize]: dart.fieldType(dart.nullable(ui.Size)),
    [_cachedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_cachedRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_cachedCaretRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_cachedSelectionRects]: dart.fieldType(core.List$(text_input.SelectionRect)),
    [_id]: dart.finalFieldType(core.int),
    [_client$]: dart.finalFieldType(text_input.TextInputClient)
  }));
  dart.setStaticFieldSignature(text_input.TextInputConnection, () => ['_nextId']);
  dart.defineLazy(text_input.TextInputConnection, {
    /*text_input.TextInputConnection._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  }, false);
  var __TextInput__channel = dart.privateName(text_input, "_#TextInput#_channel");
  var __TextInput__currentConfiguration = dart.privateName(text_input, "_#TextInput#_currentConfiguration");
  var _scribbleClients = dart.privateName(text_input, "_scribbleClients");
  var _scribbleInProgress = dart.privateName(text_input, "_scribbleInProgress");
  var _hidePending = dart.privateName(text_input, "_hidePending");
  var _channel = dart.privateName(text_input, "_channel");
  var _loudlyHandleTextInputInvocation = dart.privateName(text_input, "_loudlyHandleTextInputInvocation");
  var _attach = dart.privateName(text_input, "_attach");
  var _currentConfiguration = dart.privateName(text_input, "_currentConfiguration");
  var _handleTextInputInvocation = dart.privateName(text_input, "_handleTextInputInvocation");
  var _scheduleHide = dart.privateName(text_input, "_scheduleHide");
  text_input.TextInput = class TextInput extends core.Object {
    static ['_#_#tearOff']() {
      return new text_input.TextInput.__();
    }
    static setChannel(newChannel) {
      if (!dart.fn(() => {
        let t14;
        text_input.TextInput._instance[_channel] = (t14 = newChannel, (() => {
          t14.setMethodCallHandler(dart.bind(text_input.TextInput._instance, _loudlyHandleTextInputInvocation));
          return t14;
        })());
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[5], 1585, 12, "() {\n      _instance._channel = newChannel..setMethodCallHandler(_instance._loudlyHandleTextInputInvocation);\n      return true;\n    }()");
    }
    static ensureInitialized() {
      text_input.TextInput._instance;
    }
    static attach(client, configuration) {
      if (!(client !== null)) dart.assertFailed(null, I[5], 1636, 12, "client != null");
      if (!(configuration !== null)) dart.assertFailed(null, I[5], 1637, 12, "configuration != null");
      let connection = new text_input.TextInputConnection.__(client);
      text_input.TextInput._instance[_attach](connection, configuration);
      return connection;
    }
    [_attach](connection, configuration) {
      if (!(connection !== null)) dart.assertFailed(null, I[5], 1647, 12, "connection != null");
      if (!(connection[_client$] !== null)) dart.assertFailed(null, I[5], 1648, 12, "connection._client != null");
      if (!(configuration !== null)) dart.assertFailed(null, I[5], 1649, 12, "configuration != null");
      if (!text_input.TextInput._debugEnsureInputActionWorksOnPlatform(configuration.inputAction)) dart.assertFailed(null, I[5], 1650, 12, "_debugEnsureInputActionWorksOnPlatform(configuration.inputAction)");
      this[_channel].invokeMethod(dart.void, "TextInput.setClient", T$.JSArrayOfObject().of([connection[_id], configuration.toJson()]));
      this[_currentConnection] = connection;
      this[_currentConfiguration] = configuration;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction) {
      if (!dart.fn(() => {
        {
          return true;
        }
        if (io.Platform.isIOS) {
          if (!text_input.TextInput._iOSSupportedInputActions[$contains](inputAction)) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on iOS.", I[5], 1670, 11, "_iOSSupportedInputActions.contains(inputAction)");
        } else if (io.Platform.isAndroid) {
          if (!text_input.TextInput._androidSupportedInputActions[$contains](inputAction)) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on Android.", I[5], 1675, 11, "_androidSupportedInputActions.contains(inputAction)");
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[5], 1663, 12, "() {\n      if (kIsWeb) {\n        // TODO(flutterweb): what makes sense here?\n        return true;\n      }\n      if (Platform.isIOS) {\n        assert(\n          _iOSSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on iOS.',\n        );\n      } else if (Platform.isAndroid) {\n        assert(\n          _androidSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on Android.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    get [_channel]() {
      let t14;
      t14 = this[__TextInput__channel];
      return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_channel")) : t14;
    }
    set [_channel](library$32package$58flutter$47src$47services$47text_input$46dart$58$58_channel$35param) {
      this[__TextInput__channel] = library$32package$58flutter$47src$47services$47text_input$46dart$58$58_channel$35param;
    }
    get [_currentConfiguration]() {
      let t14;
      t14 = this[__TextInput__currentConfiguration];
      return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_currentConfiguration")) : t14;
    }
    set [_currentConfiguration](library$32package$58flutter$47src$47services$47text_input$46dart$58$58_currentConfiguration$35param) {
      this[__TextInput__currentConfiguration] = library$32package$58flutter$47src$47services$47text_input$46dart$58$58_currentConfiguration$35param;
    }
    static get scribbleClients() {
      return text_input.TextInput._instance[_scribbleClients];
    }
    get scribbleInProgress() {
      return this[_scribbleInProgress];
    }
    [_loudlyHandleTextInputInvocation](call) {
      return async.async(dart.dynamic, (function* _loudlyHandleTextInputInvocation() {
        try {
          return yield this[_handleTextInputInvocation](call);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during method call " + call.method), informationCollector: dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfMethodCall()).new("call", call, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]), T$.VoidToListOfDiagnosticsNode())}));
            dart.rethrow(e);
          } else
            throw e;
        }
      }).bind(this));
    }
    [_handleTextInputInvocation](methodCall) {
      return async.async(dart.dynamic, (function* _handleTextInputInvocation() {
        let t15, t16;
        let method = methodCall.method;
        if (method === "TextInputClient.focusElement") {
          let args = core.List.as(methodCall.arguments);
          t15 = this[_scribbleClients][$_get](args[$_get](0));
          t15 == null ? null : t15.onScribbleFocus(new ui.Offset.new(core.num.as(args[$_get](1))[$toDouble](), core.num.as(args[$_get](2))[$toDouble]()));
          return;
        } else if (method === "TextInputClient.requestElementsInRect") {
          let args = core.List.as(methodCall.arguments)[$cast](core.num)[$map](core.double, dart.fn(value => value[$toDouble](), T$.numTodouble()))[$toList]();
          return this[_scribbleClients][$keys][$where](dart.fn(elementIdentifier => {
            let t15, t15$, t15$0, t15$1;
            let rect = new ui.Rect.fromLTWH(args[$_get](0), args[$_get](1), args[$_get](2), args[$_get](3));
            if (!dart.test((t15$ = (t15 = this[_scribbleClients][$_get](elementIdentifier), t15 == null ? null : t15.isInScribbleRect(rect)), t15$ == null ? false : t15$))) {
              return false;
            }
            let bounds = (t15$1 = (t15$0 = this[_scribbleClients][$_get](elementIdentifier), t15$0 == null ? null : t15$0.bounds), t15$1 == null ? ui.Rect.zero : t15$1);
            return !(bounds._equals(ui.Rect.zero) || bounds.hasNaN || bounds.isInfinite);
          }, T$.StringTobool()))[$map](core.List, dart.fn(elementIdentifier => {
            let bounds = dart.nullCheck(this[_scribbleClients][$_get](elementIdentifier)).bounds;
            return (() => {
              let t15 = [elementIdentifier];
              t15[$addAll]([bounds.left, bounds.top, bounds.width, bounds.height]);
              return t15;
            })();
          }, T$.StringToList()))[$toList]();
        } else if (method === "TextInputClient.scribbleInteractionBegan") {
          this[_scribbleInProgress] = true;
          return;
        } else if (method === "TextInputClient.scribbleInteractionFinished") {
          this[_scribbleInProgress] = false;
          return;
        }
        if (this[_currentConnection] == null) {
          return;
        }
        if (method === "TextInputClient.requestExistingInputState") {
          if (!(dart.nullCheck(this[_currentConnection])[_client$] !== null)) dart.assertFailed(null, I[5], 1749, 14, "_currentConnection!._client != null");
          this[_attach](dart.nullCheck(this[_currentConnection]), this[_currentConfiguration]);
          let editingValue = dart.nullCheck(this[_currentConnection])[_client$].currentTextEditingValue;
          if (editingValue != null) {
            this[_setEditingState](editingValue);
          }
          return;
        }
        let args = core.List.as(methodCall.arguments);
        if (method === "TextInputClient.updateEditingStateWithTag") {
          if (!(dart.nullCheck(this[_currentConnection])[_client$] !== null)) dart.assertFailed(null, I[5], 1763, 14, "_currentConnection!._client != null");
          let client = dart.nullCheck(this[_currentConnection])[_client$];
          let scope = client.currentAutofillScope;
          let editingValue = T$.MapOfString$dynamic().as(args[$_get](1));
          for (let tag of editingValue[$keys]) {
            let textEditingValue = text_input.TextEditingValue.fromJSON(T$.MapOfString$dynamic().as(editingValue[$_get](tag)));
            let client = (t16 = scope, t16 == null ? null : t16.getAutofillClient(tag));
            if (client != null && client.textInputConfiguration.autofillConfiguration.enabled) {
              client.autofill(textEditingValue);
            }
          }
          return;
        }
        let client = core.int.as(args[$_get](0));
        if (client !== dart.nullCheck(this[_currentConnection])[_id]) {
          let debugAllowAnyway = false;
          if (!dart.fn(() => {
            if (client === -1) {
              debugAllowAnyway = true;
            }
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[5], 1785, 14, "() {\n        // In debug builds we allow \"-1\" as a magical client ID that ignores\n        // this verification step so that tests can always get through, even\n        // when they are not mocking the engine side of text input.\n        if (client == -1) {\n          debugAllowAnyway = true;\n        }\n        return true;\n      }()");
          if (!debugAllowAnyway) {
            return;
          }
        }
        switch (method) {
          case "TextInputClient.updateEditingState":
            {
              dart.nullCheck(this[_currentConnection])[_client$].updateEditingValue(text_input.TextEditingValue.fromJSON(T$.MapOfString$dynamic().as(args[$_get](1))));
              break;
            }
          case "TextInputClient.updateEditingStateWithDeltas":
            {
              if (!text_input.DeltaTextInputClient.is(dart.nullCheck(this[_currentConnection])[_client$])) dart.assertFailed("You must be using a DeltaTextInputClient if TextInputConfiguration.enableDeltaModel is set to true", I[5], 1804, 16, "_currentConnection!._client is DeltaTextInputClient");
              let deltas = T$.JSArrayOfTextEditingDelta().of([]);
              let encoded = T$.MapOfString$dynamic().as(args[$_get](1));
              for (let encodedDelta of core.List.as(encoded[$_get]("deltas"))) {
                let delta = text_editing_delta.TextEditingDelta.fromJSON(T$.MapOfString$dynamic().as(encodedDelta));
                deltas[$add](delta);
              }
              text_input.DeltaTextInputClient.as(dart.nullCheck(this[_currentConnection])[_client$]).updateEditingValueWithDeltas(deltas);
              break;
            }
          case "TextInputClient.performAction":
            {
              dart.nullCheck(this[_currentConnection])[_client$].performAction(text_input._toTextInputAction(core.String.as(args[$_get](1))));
              break;
            }
          case "TextInputClient.performPrivateCommand":
            {
              let firstArg = T$.MapOfString$dynamic().as(args[$_get](1));
              dart.nullCheck(this[_currentConnection])[_client$].performPrivateCommand(core.String.as(firstArg[$_get]("action")), T$.MapOfString$dynamic().as(firstArg[$_get]("data")));
              break;
            }
          case "TextInputClient.updateFloatingCursor":
            {
              dart.nullCheck(this[_currentConnection])[_client$].updateFloatingCursor(text_input._toTextPoint(text_input._toTextCursorAction(core.String.as(args[$_get](1))), T$.MapOfString$dynamic().as(args[$_get](2))));
              break;
            }
          case "TextInputClient.onConnectionClosed":
            {
              dart.nullCheck(this[_currentConnection])[_client$].connectionClosed();
              break;
            }
          case "TextInputClient.showAutocorrectionPromptRect":
            {
              dart.nullCheck(this[_currentConnection])[_client$].showAutocorrectionPromptRect(core.int.as(args[$_get](1)), core.int.as(args[$_get](2)));
              break;
            }
          case "TextInputClient.showToolbar":
            {
              dart.nullCheck(this[_currentConnection])[_client$].showToolbar();
              break;
            }
          case "TextInputClient.insertTextPlaceholder":
            {
              dart.nullCheck(this[_currentConnection])[_client$].insertTextPlaceholder(new ui.Size.new(core.num.as(args[$_get](1))[$toDouble](), core.num.as(args[$_get](2))[$toDouble]()));
              break;
            }
          case "TextInputClient.removeTextPlaceholder":
            {
              dart.nullCheck(this[_currentConnection])[_client$].removeTextPlaceholder();
              break;
            }
          default:
            {
              dart.throw(new message_codec.MissingPluginException.new());
            }
        }
      }).bind(this));
    }
    [_scheduleHide]() {
      if (this[_hidePending]) {
        return;
      }
      this[_hidePending] = true;
      async.scheduleMicrotask(dart.fn(() => {
        this[_hidePending] = false;
        if (this[_currentConnection] == null) {
          this[_channel].invokeMethod(dart.void, "TextInput.hide");
        }
      }, T$.VoidTovoid()));
    }
    [_clearClient]() {
      this[_channel].invokeMethod(dart.void, "TextInput.clearClient");
      this[_currentConnection] = null;
      this[_scheduleHide]();
    }
    [_updateConfig](configuration) {
      if (!(configuration !== null)) dart.assertFailed(null, I[5], 1878, 12, "configuration != null");
      this[_channel].invokeMethod(dart.void, "TextInput.updateConfig", configuration.toJson());
    }
    [_setEditingState](value) {
      if (!(value !== null)) dart.assertFailed(null, I[5], 1886, 12, "value != null");
      this[_channel].invokeMethod(dart.void, "TextInput.setEditingState", value.toJSON());
    }
    [_show]() {
      this[_channel].invokeMethod(dart.void, "TextInput.show");
    }
    [_requestAutofill]() {
      this[_channel].invokeMethod(dart.void, "TextInput.requestAutofill");
    }
    [_setEditableSizeAndTransform](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setEditableSizeAndTransform", args);
    }
    [_setComposingTextRect](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setMarkedTextRect", args);
    }
    [_setCaretRect](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setCaretRect", args);
    }
    [_setSelectionRects](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setSelectionRects", args);
    }
    [_setStyle](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setStyle", args);
    }
    static finishAutofillContext(opts) {
      let shouldSave = opts && 'shouldSave' in opts ? opts.shouldSave : true;
      if (!(shouldSave !== null)) dart.assertFailed(null, I[5], 1985, 12, "shouldSave != null");
      text_input.TextInput._instance[_channel].invokeMethod(dart.void, "TextInput.finishAutofillContext", shouldSave);
    }
    static registerScribbleElement(elementIdentifier, scribbleClient) {
      text_input.TextInput._instance[_scribbleClients][$_set](elementIdentifier, scribbleClient);
    }
    static unregisterScribbleElement(elementIdentifier) {
      text_input.TextInput._instance[_scribbleClients][$remove](elementIdentifier);
    }
  };
  (text_input.TextInput.__ = function() {
    this[__TextInput__channel] = null;
    this[_currentConnection] = null;
    this[__TextInput__currentConfiguration] = null;
    this[_scribbleClients] = new (T$.IdentityMapOfString$ScribbleClient()).new();
    this[_scribbleInProgress] = false;
    this[_hidePending] = false;
    this[_channel] = system_channels.SystemChannels.textInput;
    this[_channel].setMethodCallHandler(dart.bind(this, _loudlyHandleTextInputInvocation));
  }).prototype = text_input.TextInput.prototype;
  dart.addTypeTests(text_input.TextInput);
  dart.addTypeCaches(text_input.TextInput);
  dart.setMethodSignature(text_input.TextInput, () => ({
    __proto__: dart.getMethods(text_input.TextInput.__proto__),
    [_attach]: dart.fnType(dart.void, [text_input.TextInputConnection, text_input.TextInputConfiguration]),
    [_loudlyHandleTextInputInvocation]: dart.fnType(async.Future, [message_codec.MethodCall]),
    [_handleTextInputInvocation]: dart.fnType(async.Future, [message_codec.MethodCall]),
    [_scheduleHide]: dart.fnType(dart.void, []),
    [_clearClient]: dart.fnType(dart.void, []),
    [_updateConfig]: dart.fnType(dart.void, [text_input.TextInputConfiguration]),
    [_setEditingState]: dart.fnType(dart.void, [text_input.TextEditingValue]),
    [_show]: dart.fnType(dart.void, []),
    [_requestAutofill]: dart.fnType(dart.void, []),
    [_setEditableSizeAndTransform]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setComposingTextRect]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setCaretRect]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setSelectionRects]: dart.fnType(dart.void, [core.List$(core.List$(core.num))]),
    [_setStyle]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setStaticMethodSignature(text_input.TextInput, () => ['setChannel', 'ensureInitialized', 'attach', '_debugEnsureInputActionWorksOnPlatform', 'finishAutofillContext', 'registerScribbleElement', 'unregisterScribbleElement']);
  dart.setGetterSignature(text_input.TextInput, () => ({
    __proto__: dart.getGetters(text_input.TextInput.__proto__),
    [_channel]: platform_channel.MethodChannel,
    [_currentConfiguration]: text_input.TextInputConfiguration,
    scribbleInProgress: core.bool
  }));
  dart.setSetterSignature(text_input.TextInput, () => ({
    __proto__: dart.getSetters(text_input.TextInput.__proto__),
    [_channel]: platform_channel.MethodChannel,
    [_currentConfiguration]: text_input.TextInputConfiguration
  }));
  dart.setStaticGetterSignature(text_input.TextInput, () => ['scribbleClients']);
  dart.setLibraryUri(text_input.TextInput, I[6]);
  dart.setFieldSignature(text_input.TextInput, () => ({
    __proto__: dart.getFields(text_input.TextInput.__proto__),
    [__TextInput__channel]: dart.fieldType(dart.nullable(platform_channel.MethodChannel)),
    [_currentConnection]: dart.fieldType(dart.nullable(text_input.TextInputConnection)),
    [__TextInput__currentConfiguration]: dart.fieldType(dart.nullable(text_input.TextInputConfiguration)),
    [_scribbleClients]: dart.finalFieldType(core.Map$(core.String, text_input.ScribbleClient)),
    [_scribbleInProgress]: dart.fieldType(core.bool),
    [_hidePending]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(text_input.TextInput, () => ['_instance', '_androidSupportedInputActions', '_iOSSupportedInputActions']);
  dart.defineLazy(text_input.TextInput, {
    /*text_input.TextInput._instance*/get _instance() {
      return new text_input.TextInput.__();
    },
    /*text_input.TextInput._androidSupportedInputActions*/get _androidSupportedInputActions() {
      return C[59] || CT.C59;
    },
    /*text_input.TextInput._iOSSupportedInputActions*/get _iOSSupportedInputActions() {
      return C[60] || CT.C60;
    }
  }, false);
  text_input._toTextAffinity = function _toTextAffinity$(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
        {
          return ui.TextAffinity.downstream;
        }
      case "TextAffinity.upstream":
        {
          return ui.TextAffinity.upstream;
        }
    }
    return null;
  };
  text_input._toTextInputAction = function _toTextInputAction(action) {
    switch (action) {
      case "TextInputAction.none":
        {
          return text_input.TextInputAction.none;
        }
      case "TextInputAction.unspecified":
        {
          return text_input.TextInputAction.unspecified;
        }
      case "TextInputAction.go":
        {
          return text_input.TextInputAction.go;
        }
      case "TextInputAction.search":
        {
          return text_input.TextInputAction.search;
        }
      case "TextInputAction.send":
        {
          return text_input.TextInputAction.send;
        }
      case "TextInputAction.next":
        {
          return text_input.TextInputAction.next;
        }
      case "TextInputAction.previous":
        {
          return text_input.TextInputAction.previous;
        }
      case "TextInputAction.continueAction":
        {
          return text_input.TextInputAction.continueAction;
        }
      case "TextInputAction.join":
        {
          return text_input.TextInputAction.join;
        }
      case "TextInputAction.route":
        {
          return text_input.TextInputAction.route;
        }
      case "TextInputAction.emergencyCall":
        {
          return text_input.TextInputAction.emergencyCall;
        }
      case "TextInputAction.done":
        {
          return text_input.TextInputAction.done;
        }
      case "TextInputAction.newline":
        {
          return text_input.TextInputAction.newline;
        }
    }
    dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unknown text input action: " + action)])));
  };
  text_input._toTextCursorAction = function _toTextCursorAction(state) {
    switch (state) {
      case "FloatingCursorDragState.start":
        {
          return text_input.FloatingCursorDragState.Start;
        }
      case "FloatingCursorDragState.update":
        {
          return text_input.FloatingCursorDragState.Update;
        }
      case "FloatingCursorDragState.end":
        {
          return text_input.FloatingCursorDragState.End;
        }
    }
    dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unknown text cursor action: " + state)])));
  };
  text_input._toTextPoint = function _toTextPoint(state, encoded) {
    if (!(state !== null)) dart.assertFailed("You must provide a state to set a new editing point.", I[5], 1509, 10, "state != null");
    if (!(encoded[$_get]("X") != null)) dart.assertFailed("You must provide a value for the horizontal location of the floating cursor.", I[5], 1510, 10, "encoded['X'] != null");
    if (!(encoded[$_get]("Y") != null)) dart.assertFailed("You must provide a value for the vertical location of the floating cursor.", I[5], 1511, 10, "encoded['Y'] != null");
    let offset = state === text_input.FloatingCursorDragState.Update ? new ui.Offset.new(core.double.as(encoded[$_get]("X")), core.double.as(encoded[$_get]("Y"))) : ui.Offset.zero;
    return new text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
  };
  var _rootBucket = dart.privateName(restoration, "_rootBucket");
  var _pendingRootBucket = dart.privateName(restoration, "_pendingRootBucket");
  var _rootBucketIsValid = dart.privateName(restoration, "_rootBucketIsValid");
  var _isReplacing = dart.privateName(restoration, "_isReplacing");
  var _debugDoingUpdate = dart.privateName(restoration, "_debugDoingUpdate");
  var _serializationScheduled = dart.privateName(restoration, "_serializationScheduled");
  var _bucketsNeedingSerialization = dart.privateName(restoration, "_bucketsNeedingSerialization");
  var _methodHandler = dart.privateName(restoration, "_methodHandler");
  var _getRootBucketFromEngine = dart.privateName(restoration, "_getRootBucketFromEngine");
  var _parseAndHandleRestorationUpdateFromEngine = dart.privateName(restoration, "_parseAndHandleRestorationUpdateFromEngine");
  var _decodeRestorationData = dart.privateName(restoration, "_decodeRestorationData");
  var _encodeRestorationData = dart.privateName(restoration, "_encodeRestorationData");
  var _manager = dart.privateName(restoration, "_manager");
  var _doSerialization = dart.privateName(restoration, "_doSerialization");
  var _rawData = dart.privateName(restoration, "_rawData");
  restoration.RestorationManager = class RestorationManager extends change_notifier.ChangeNotifier {
    static ['_#new#tearOff']() {
      return new restoration.RestorationManager.new();
    }
    initChannels() {
      system_channels.SystemChannels.restoration.setMethodCallHandler(dart.bind(this, _methodHandler));
    }
    get rootBucket() {
      if (this[_rootBucketIsValid]) {
        return new (T$.SynchronousFutureOfRestorationBucketN()).new(this[_rootBucket]);
      }
      if (this[_pendingRootBucket] == null) {
        this[_pendingRootBucket] = T$.CompleterOfRestorationBucketN().new();
        this[_getRootBucketFromEngine]();
      }
      return dart.nullCheck(this[_pendingRootBucket]).future;
    }
    get isReplacing() {
      return this[_isReplacing];
    }
    [_getRootBucketFromEngine]() {
      return async.async(dart.void, (function* _getRootBucketFromEngine() {
        let config = (yield system_channels.SystemChannels.restoration.invokeMethod(T$.MapOfObjectN$ObjectN(), "get"));
        if (this[_pendingRootBucket] == null) {
          return;
        }
        if (!(this[_rootBucket] == null)) dart.assertFailed(null, I[7], 235, 12, "_rootBucket == null");
        this[_parseAndHandleRestorationUpdateFromEngine](config);
      }).bind(this));
    }
    [_parseAndHandleRestorationUpdateFromEngine](update) {
      this.handleRestorationUpdateFromEngine({enabled: update != null && core.bool.as(dart.nullCheck(update[$_get]("enabled"))), data: update == null ? null : T$.Uint8ListN().as(update[$_get]("data"))});
    }
    handleRestorationUpdateFromEngine(opts) {
      let t16, t16$;
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let data = opts && 'data' in opts ? opts.data : null;
      if (!(enabled !== null)) dart.assertFailed(null, I[7], 262, 12, "enabled != null");
      if (!(enabled || data == null)) dart.assertFailed(null, I[7], 263, 12, "enabled || data == null");
      this[_isReplacing] = this[_rootBucketIsValid] && enabled;
      if (this[_isReplacing]) {
        binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(_ => {
          this[_isReplacing] = false;
        }, T$.DurationTovoid()));
      }
      let oldRoot = this[_rootBucket];
      this[_rootBucket] = enabled ? new restoration.RestorationBucket.root({manager: this, rawData: this[_decodeRestorationData](data)}) : null;
      this[_rootBucketIsValid] = true;
      if (!(this[_pendingRootBucket] == null || !dart.nullCheck(this[_pendingRootBucket]).isCompleted)) dart.assertFailed(null, I[7], 277, 12, "_pendingRootBucket == null || !_pendingRootBucket!.isCompleted");
      t16 = this[_pendingRootBucket];
      t16 == null ? null : t16.complete(this[_rootBucket]);
      this[_pendingRootBucket] = null;
      if (!dart.equals(this[_rootBucket], oldRoot)) {
        this.notifyListeners();
        t16$ = oldRoot;
        t16$ == null ? null : t16$.dispose();
      }
    }
    sendToEngine(encodedData) {
      if (!(encodedData !== null)) dart.assertFailed(null, I[7], 300, 12, "encodedData != null");
      return system_channels.SystemChannels.restoration.invokeMethod(dart.void, "put", encodedData);
    }
    [_methodHandler](call) {
      return async.async(dart.void, (function* _methodHandler() {
        switch (call.method) {
          case "push":
            {
              this[_parseAndHandleRestorationUpdateFromEngine](T$.MapOfObjectN$ObjectN().as(call.arguments));
              break;
            }
          default:
            {
              dart.throw(new core.UnimplementedError.new(call.method + " was invoked but isn't implemented by " + dart.str(this[$runtimeType])));
            }
        }
      }).bind(this));
    }
    [_decodeRestorationData](data) {
      if (data == null) {
        return null;
      }
      let encoded = data[$buffer][$asByteData](data[$offsetInBytes], data[$lengthInBytes]);
      return T$.MapNOfObjectN$ObjectN().as((C[61] || CT.C61).decodeMessage(encoded));
    }
    [_encodeRestorationData](data) {
      let encoded = dart.nullCheck((C[61] || CT.C61).encodeMessage(data));
      return encoded[$buffer][$asUint8List](encoded[$offsetInBytes], encoded[$lengthInBytes]);
    }
    scheduleSerializationFor(bucket) {
      if (!(bucket !== null)) dart.assertFailed(null, I[7], 347, 12, "bucket != null");
      if (!dart.equals(bucket[_manager], this)) dart.assertFailed(null, I[7], 348, 12, "bucket._manager == this");
      if (!!this[_debugDoingUpdate]) dart.assertFailed(null, I[7], 349, 12, "!_debugDoingUpdate");
      this[_bucketsNeedingSerialization].add(bucket);
      if (!this[_serializationScheduled]) {
        this[_serializationScheduled] = true;
        binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(_ => this[_doSerialization](), T$.DurationTovoid()));
      }
    }
    unscheduleSerializationFor(bucket) {
      if (!(bucket !== null)) dart.assertFailed(null, I[7], 369, 12, "bucket != null");
      if (!dart.equals(bucket[_manager], this)) dart.assertFailed(null, I[7], 370, 12, "bucket._manager == this");
      if (!!this[_debugDoingUpdate]) dart.assertFailed(null, I[7], 371, 12, "!_debugDoingUpdate");
      this[_bucketsNeedingSerialization].remove(bucket);
    }
    [_doSerialization]() {
      if (!this[_serializationScheduled]) {
        return;
      }
      if (!dart.fn(() => {
        this[_debugDoingUpdate] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 379, 12, "() {\n      _debugDoingUpdate = true;\n      return true;\n    }()");
      this[_serializationScheduled] = false;
      for (let bucket of this[_bucketsNeedingSerialization]) {
        bucket.finalize();
      }
      this[_bucketsNeedingSerialization].clear();
      this.sendToEngine(this[_encodeRestorationData](dart.nullCheck(this[_rootBucket])[_rawData]));
      if (!dart.fn(() => {
        this[_debugDoingUpdate] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 391, 12, "() {\n      _debugDoingUpdate = false;\n      return true;\n    }()");
    }
    flushData() {
      if (!!this[_debugDoingUpdate]) dart.assertFailed(null, I[7], 415, 12, "!_debugDoingUpdate");
      if (binding.SchedulerBinding.instance.hasScheduledFrame) {
        return;
      }
      this[_doSerialization]();
      if (!!this[_serializationScheduled]) dart.assertFailed(null, I[7], 420, 12, "!_serializationScheduled");
    }
  };
  (restoration.RestorationManager.new = function() {
    this[_rootBucket] = null;
    this[_pendingRootBucket] = null;
    this[_rootBucketIsValid] = false;
    this[_isReplacing] = false;
    this[_debugDoingUpdate] = false;
    this[_serializationScheduled] = false;
    this[_bucketsNeedingSerialization] = T$.LinkedHashSetOfRestorationBucket().new();
    restoration.RestorationManager.__proto__.new.call(this);
    this.initChannels();
  }).prototype = restoration.RestorationManager.prototype;
  dart.addTypeTests(restoration.RestorationManager);
  dart.addTypeCaches(restoration.RestorationManager);
  dart.setMethodSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getMethods(restoration.RestorationManager.__proto__),
    initChannels: dart.fnType(dart.void, []),
    [_getRootBucketFromEngine]: dart.fnType(async.Future$(dart.void), []),
    [_parseAndHandleRestorationUpdateFromEngine]: dart.fnType(dart.void, [dart.nullable(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)))]),
    handleRestorationUpdateFromEngine: dart.fnType(dart.void, [], {}, {data: dart.nullable(typed_data.Uint8List), enabled: core.bool}),
    sendToEngine: dart.fnType(async.Future$(dart.void), [typed_data.Uint8List]),
    [_methodHandler]: dart.fnType(async.Future$(dart.void), [message_codec.MethodCall]),
    [_decodeRestorationData]: dart.fnType(dart.nullable(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))), [dart.nullable(typed_data.Uint8List)]),
    [_encodeRestorationData]: dart.fnType(typed_data.Uint8List, [core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))]),
    scheduleSerializationFor: dart.fnType(dart.void, [restoration.RestorationBucket]),
    unscheduleSerializationFor: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_doSerialization]: dart.fnType(dart.void, []),
    flushData: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getGetters(restoration.RestorationManager.__proto__),
    rootBucket: async.Future$(dart.nullable(restoration.RestorationBucket)),
    isReplacing: core.bool
  }));
  dart.setLibraryUri(restoration.RestorationManager, I[8]);
  dart.setFieldSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getFields(restoration.RestorationManager.__proto__),
    [_rootBucket]: dart.fieldType(dart.nullable(restoration.RestorationBucket)),
    [_pendingRootBucket]: dart.fieldType(dart.nullable(async.Completer$(dart.nullable(restoration.RestorationBucket)))),
    [_rootBucketIsValid]: dart.fieldType(core.bool),
    [_isReplacing]: dart.fieldType(core.bool),
    [_debugDoingUpdate]: dart.fieldType(core.bool),
    [_serializationScheduled]: dart.fieldType(core.bool),
    [_bucketsNeedingSerialization]: dart.finalFieldType(core.Set$(restoration.RestorationBucket))
  }));
  var _debugOwner = dart.privateName(restoration, "_debugOwner");
  var _claimedChildren = dart.privateName(restoration, "_claimedChildren");
  var _childrenToAdd = dart.privateName(restoration, "_childrenToAdd");
  var _needsSerialization = dart.privateName(restoration, "_needsSerialization");
  var _debugDisposed = dart.privateName(restoration, "_debugDisposed");
  var _parent = dart.privateName(restoration, "_parent");
  var _restorationId = dart.privateName(restoration, "_restorationId");
  var _rawChildren = dart.privateName(restoration, "_rawChildren");
  var _debugAssertNotDisposed = dart.privateName(restoration, "_debugAssertNotDisposed");
  var _rawValues = dart.privateName(restoration, "_rawValues");
  var _markNeedsSerialization = dart.privateName(restoration, "_markNeedsSerialization");
  var _removeChildData = dart.privateName(restoration, "_removeChildData");
  var _addChildData = dart.privateName(restoration, "_addChildData");
  var _recursivelyUpdateManager = dart.privateName(restoration, "_recursivelyUpdateManager");
  var _updateManager = dart.privateName(restoration, "_updateManager");
  var _visitChildren = dart.privateName(restoration, "_visitChildren");
  var _dropChild = dart.privateName(restoration, "_dropChild");
  var _debugAssertIntegrity = dart.privateName(restoration, "_debugAssertIntegrity");
  var _finalizeAddChildData = dart.privateName(restoration, "_finalizeAddChildData");
  restoration.RestorationBucket = class RestorationBucket extends core.Object {
    static ['_#empty#tearOff'](opts) {
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      return new restoration.RestorationBucket.empty({restorationId: restorationId, debugOwner: debugOwner});
    }
    static ['_#root#tearOff'](opts) {
      let manager = opts && 'manager' in opts ? opts.manager : null;
      let rawData = opts && 'rawData' in opts ? opts.rawData : null;
      return new restoration.RestorationBucket.root({manager: manager, rawData: rawData});
    }
    static ['_#child#tearOff'](opts) {
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let parent = opts && 'parent' in opts ? opts.parent : null;
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      return new restoration.RestorationBucket.child({restorationId: restorationId, parent: parent, debugOwner: debugOwner});
    }
    get debugOwner() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 588, 12, "_debugAssertNotDisposed()");
      return this[_debugOwner];
    }
    get isReplacing() {
      let t16, t16$;
      t16$ = (t16 = this[_manager], t16 == null ? null : t16.isReplacing);
      return t16$ == null ? false : t16$;
    }
    get restorationId() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 612, 12, "_debugAssertNotDisposed()");
      return this[_restorationId];
    }
    get [_rawChildren]() {
      return T$.MapOfObjectN$ObjectN().as(dart.nullCheck(this[_rawData][$putIfAbsent]("c", dart.fn(() => new (T$.LinkedMapOfObjectN$ObjectN()).new(), T$.VoidToMapOfObjectN$ObjectN()))));
    }
    get [_rawValues]() {
      return T$.MapOfObjectN$ObjectN().as(dart.nullCheck(this[_rawData][$putIfAbsent]("v", dart.fn(() => new (T$.LinkedMapOfObjectN$ObjectN()).new(), T$.VoidToMapOfObjectN$ObjectN()))));
    }
    read(P, restorationId) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 637, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[7], 638, 12, "restorationId != null");
      return dart.nullable(P).as(this[_rawValues][$_get](restorationId));
    }
    write(P, restorationId, value) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 659, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[7], 660, 12, "restorationId != null");
      if (!restoration.debugIsSerializableForRestoration(value)) dart.assertFailed(null, I[7], 661, 12, "debugIsSerializableForRestoration(value)");
      if (!dart.equals(this[_rawValues][$_get](restorationId), value) || !this[_rawValues][$containsKey](restorationId)) {
        this[_rawValues][$_set](restorationId, value);
        this[_markNeedsSerialization]();
      }
    }
    remove(P, restorationId) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 681, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[7], 682, 12, "restorationId != null");
      let needsUpdate = this[_rawValues][$containsKey](restorationId);
      let result = dart.nullable(P).as(this[_rawValues][$remove](restorationId));
      if (this[_rawValues][$isEmpty]) {
        this[_rawData][$remove]("v");
      }
      if (needsUpdate) {
        this[_markNeedsSerialization]();
      }
      return result;
    }
    contains(restorationId) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 703, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[7], 704, 12, "restorationId != null");
      return this[_rawValues][$containsKey](restorationId);
    }
    claimChild(restorationId, opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 739, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[7], 740, 12, "restorationId != null");
      if (this[_claimedChildren][$containsKey](restorationId) || !this[_rawChildren][$containsKey](restorationId)) {
        let child = new restoration.RestorationBucket.empty({debugOwner: debugOwner, restorationId: restorationId});
        this.adoptChild(child);
        return child;
      }
      if (!(this[_rawChildren][$_get](restorationId) != null)) dart.assertFailed(null, I[7], 766, 12, "_rawChildren[restorationId] != null");
      let child = new restoration.RestorationBucket.child({restorationId: restorationId, parent: this, debugOwner: debugOwner});
      this[_claimedChildren][$_set](restorationId, child);
      return child;
    }
    adoptChild(child) {
      let t16;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 789, 12, "_debugAssertNotDisposed()");
      if (!(child !== null)) dart.assertFailed(null, I[7], 790, 12, "child != null");
      if (!dart.equals(child[_parent], this)) {
        t16 = child[_parent];
        t16 == null ? null : t16[_removeChildData](child);
        child[_parent] = this;
        this[_addChildData](child);
        if (!dart.equals(child[_manager], this[_manager])) {
          this[_recursivelyUpdateManager](child);
        }
      }
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[7], 799, 12, "child._parent == this");
      if (!dart.equals(child[_manager], this[_manager])) dart.assertFailed(null, I[7], 800, 12, "child._manager == _manager");
    }
    [_dropChild](child) {
      if (!(child !== null)) dart.assertFailed(null, I[7], 804, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[7], 805, 12, "child._parent == this");
      this[_removeChildData](child);
      child[_parent] = null;
      if (child[_manager] != null) {
        child[_updateManager](null);
        child[_visitChildren](dart.bind(this, _recursivelyUpdateManager));
      }
    }
    [_markNeedsSerialization]() {
      let t16;
      if (!this[_needsSerialization]) {
        this[_needsSerialization] = true;
        t16 = this[_manager];
        t16 == null ? null : t16.scheduleSerializationFor(this);
      }
    }
    finalize() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 828, 12, "_debugAssertNotDisposed()");
      if (!this[_needsSerialization]) dart.assertFailed(null, I[7], 829, 12, "_needsSerialization");
      this[_needsSerialization] = false;
      if (!this[_debugAssertIntegrity]()) dart.assertFailed(null, I[7], 831, 12, "_debugAssertIntegrity()");
    }
    [_recursivelyUpdateManager](bucket) {
      bucket[_updateManager](this[_manager]);
      bucket[_visitChildren](dart.bind(this, _recursivelyUpdateManager));
    }
    [_updateManager](newManager) {
      let t16;
      if (dart.equals(this[_manager], newManager)) {
        return;
      }
      if (this[_needsSerialization]) {
        t16 = this[_manager];
        t16 == null ? null : t16.unscheduleSerializationFor(this);
      }
      this[_manager] = newManager;
      if (this[_needsSerialization] && this[_manager] != null) {
        this[_needsSerialization] = false;
        this[_markNeedsSerialization]();
      }
    }
    [_debugAssertIntegrity]() {
      if (!dart.fn(() => {
        if (this[_childrenToAdd][$isEmpty]) {
          return true;
        }
        let error = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Multiple owners claimed child RestorationBuckets with the same IDs."), new assertions.ErrorDescription.new("The following IDs were claimed multiple times from the parent " + dart.str(this) + ":")]);
        for (let child of this[_childrenToAdd][$entries]) {
          let id = child.key;
          let buckets = child.value;
          if (!buckets[$isNotEmpty]) dart.assertFailed(null, I[7], 865, 16, "buckets.isNotEmpty");
          if (!this[_claimedChildren][$containsKey](id)) dart.assertFailed(null, I[7], 866, 16, "_claimedChildren.containsKey(id)");
          error[$addAll]((() => {
            let t16 = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new(" * \"" + id + "\" was claimed by:")]);
            t16[$addAll](buckets[$map](diagnostics.DiagnosticsNode, dart.fn(bucket => new assertions.ErrorDescription.new("   * " + dart.str(bucket.debugOwner)), T$.RestorationBucketToErrorDescription())));
            t16.push(new assertions.ErrorDescription.new("   * " + dart.str(dart.nullCheck(this[_claimedChildren][$_get](id)).debugOwner) + " (current owner)"));
            return t16;
          })());
        }
        dart.throw(new assertions.FlutterError.fromParts(error));
      }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 854, 12, "() {\n      if (_childrenToAdd.isEmpty) {\n        return true;\n      }\n      final List<DiagnosticsNode> error = <DiagnosticsNode>[\n        ErrorSummary('Multiple owners claimed child RestorationBuckets with the same IDs.'),\n        ErrorDescription('The following IDs were claimed multiple times from the parent $this:'),\n      ];\n      for (final MapEntry<String, List<RestorationBucket>> child in _childrenToAdd.entries) {\n        final String id = child.key;\n        final List<RestorationBucket> buckets = child.value;\n        assert(buckets.isNotEmpty);\n        assert(_claimedChildren.containsKey(id));\n        error.addAll(<DiagnosticsNode>[\n          ErrorDescription(' * \"$id\" was claimed by:'),\n          ...buckets.map((RestorationBucket bucket) => ErrorDescription('   * ${bucket.debugOwner}')),\n          ErrorDescription('   * ${_claimedChildren[id]!.debugOwner} (current owner)'),\n        ]);\n      }\n      throw FlutterError.fromParts(error);\n    }()");
      return true;
    }
    [_removeChildData](child) {
      let t17, t17$, t17$0;
      if (!(child !== null)) dart.assertFailed(null, I[7], 879, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[7], 880, 12, "child._parent == this");
      if (dart.equals(this[_claimedChildren][$remove](child.restorationId), child)) {
        this[_rawChildren][$remove](child.restorationId);
        let pendingChildren = this[_childrenToAdd][$_get](child.restorationId);
        if (pendingChildren != null) {
          let toAdd = pendingChildren[$removeLast]();
          this[_finalizeAddChildData](toAdd);
          if (pendingChildren[$isEmpty]) {
            this[_childrenToAdd][$remove](child.restorationId);
          }
        }
        if (this[_rawChildren][$isEmpty]) {
          this[_rawData][$remove]("c");
        }
        this[_markNeedsSerialization]();
        return;
      }
      t17 = this[_childrenToAdd][$_get](child.restorationId);
      t17 == null ? null : t17[$remove](child);
      if (dart.test((t17$0 = (t17$ = this[_childrenToAdd][$_get](child.restorationId), t17$ == null ? null : t17$[$isEmpty]), t17$0 == null ? false : t17$0))) {
        this[_childrenToAdd][$remove](child.restorationId);
      }
    }
    [_addChildData](child) {
      if (!(child !== null)) dart.assertFailed(null, I[7], 904, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[7], 905, 12, "child._parent == this");
      if (this[_claimedChildren][$containsKey](child.restorationId)) {
        this[_childrenToAdd][$putIfAbsent](child.restorationId, dart.fn(() => T$.JSArrayOfRestorationBucket().of([]), T$.VoidToListOfRestorationBucket()))[$add](child);
        this[_markNeedsSerialization]();
        return;
      }
      this[_finalizeAddChildData](child);
      this[_markNeedsSerialization]();
    }
    [_finalizeAddChildData](child) {
      if (!(this[_claimedChildren][$_get](child.restorationId) == null)) dart.assertFailed(null, I[7], 919, 12, "_claimedChildren[child.restorationId] == null");
      if (!(this[_rawChildren][$_get](child.restorationId) == null)) dart.assertFailed(null, I[7], 920, 12, "_rawChildren[child.restorationId] == null");
      this[_claimedChildren][$_set](child.restorationId, child);
      this[_rawChildren][$_set](child.restorationId, child[_rawData]);
    }
    [_visitChildren](visitor, opts) {
      let concurrentModification = opts && 'concurrentModification' in opts ? opts.concurrentModification : false;
      let children = this[_claimedChildren][$values][$followedBy](this[_childrenToAdd][$values][$expand](restoration.RestorationBucket, dart.fn(buckets => buckets, T$.ListOfRestorationBucketToListOfRestorationBucket())));
      if (concurrentModification) {
        children = children[$toList]({growable: false});
      }
      children[$forEach](visitor);
    }
    rename(newRestorationId) {
      let t17, t17$;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 946, 12, "_debugAssertNotDisposed()");
      if (!(newRestorationId !== null)) dart.assertFailed(null, I[7], 947, 12, "newRestorationId != null");
      if (newRestorationId === this.restorationId) {
        return;
      }
      t17 = this[_parent];
      t17 == null ? null : t17[_removeChildData](this);
      this[_restorationId] = newRestorationId;
      t17$ = this[_parent];
      t17$ == null ? null : t17$[_addChildData](this);
    }
    dispose() {
      let t17;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[7], 969, 12, "_debugAssertNotDisposed()");
      this[_visitChildren](dart.bind(this, _dropChild), {concurrentModification: true});
      this[_claimedChildren][$clear]();
      this[_childrenToAdd][$clear]();
      t17 = this[_parent];
      t17 == null ? null : t17[_removeChildData](this);
      this[_parent] = null;
      this[_updateManager](null);
      this[_debugDisposed] = true;
    }
    toString() {
      return object.objectRuntimeType(this, "RestorationBucket") + "(restorationId: " + this.restorationId + ", owner: " + dart.str(this.debugOwner) + ")";
    }
    [_debugAssertNotDisposed]() {
      if (!dart.fn(() => {
        if (this[_debugDisposed]) {
          dart.throw(assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used."));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 984, 12, "() {\n      if (_debugDisposed) {\n        throw FlutterError(\n            'A $runtimeType was used after being disposed.\\n'\n            'Once you have called dispose() on a $runtimeType, it can no longer be used.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
  };
  (restoration.RestorationBucket.empty = function(opts) {
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (T$.IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (T$.IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    this[_parent] = null;
    this[_manager] = null;
    if (!(restorationId !== null)) dart.assertFailed(null, I[7], 505, 15, "restorationId != null");
    this[_restorationId] = restorationId;
    this[_rawData] = new (T$.IdentityMapOfString$ObjectN()).new();
    if (!dart.fn(() => {
      this[_debugOwner] = debugOwner;
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 508, 12, "() {\n      _debugOwner = debugOwner;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  (restoration.RestorationBucket.root = function(opts) {
    let t16;
    let manager = opts && 'manager' in opts ? opts.manager : null;
    let rawData = opts && 'rawData' in opts ? opts.rawData : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (T$.IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (T$.IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    this[_parent] = null;
    if (!(manager !== null)) dart.assertFailed(null, I[7], 540, 15, "manager != null");
    this[_manager] = manager;
    this[_rawData] = (t16 = rawData, t16 == null ? new (T$.LinkedMapOfObjectN$ObjectN()).new() : t16);
    this[_restorationId] = "root";
    if (!dart.fn(() => {
      this[_debugOwner] = manager;
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 544, 12, "() {\n      _debugOwner = manager;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  (restoration.RestorationBucket.child = function(opts) {
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (T$.IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (T$.IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    if (!(restorationId !== null)) dart.assertFailed(null, I[7], 564, 15, "restorationId != null");
    if (!(parent !== null)) dart.assertFailed(null, I[7], 565, 15, "parent != null");
    if (!(parent[_rawChildren][$_get](restorationId) != null)) dart.assertFailed(null, I[7], 566, 15, "parent._rawChildren[restorationId] != null");
    this[_manager] = parent[_manager];
    this[_parent] = parent;
    this[_rawData] = T$.MapOfObjectN$ObjectN().as(dart.nullCheck(parent[_rawChildren][$_get](restorationId)));
    this[_restorationId] = restorationId;
    if (!dart.fn(() => {
      this[_debugOwner] = debugOwner;
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 571, 12, "() {\n      _debugOwner = debugOwner;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  dart.addTypeTests(restoration.RestorationBucket);
  dart.addTypeCaches(restoration.RestorationBucket);
  dart.setMethodSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getMethods(restoration.RestorationBucket.__proto__),
    read: dart.gFnType(P => [dart.nullable(P), [core.String]], P => [dart.nullable(core.Object)]),
    write: dart.gFnType(P => [dart.void, [core.String, P]], P => [dart.nullable(core.Object)]),
    remove: dart.gFnType(P => [dart.nullable(P), [core.String]], P => [dart.nullable(core.Object)]),
    contains: dart.fnType(core.bool, [core.String]),
    claimChild: dart.fnType(restoration.RestorationBucket, [core.String], {}, {debugOwner: dart.nullable(core.Object)}),
    adoptChild: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_dropChild]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_markNeedsSerialization]: dart.fnType(dart.void, []),
    finalize: dart.fnType(dart.void, []),
    [_recursivelyUpdateManager]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_updateManager]: dart.fnType(dart.void, [dart.nullable(restoration.RestorationManager)]),
    [_debugAssertIntegrity]: dart.fnType(core.bool, []),
    [_removeChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_addChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_finalizeAddChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_visitChildren]: dart.fnType(dart.void, [dart.fnType(dart.void, [restoration.RestorationBucket])], {concurrentModification: core.bool}, {}),
    rename: dart.fnType(dart.void, [core.String]),
    dispose: dart.fnType(dart.void, []),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getGetters(restoration.RestorationBucket.__proto__),
    debugOwner: dart.nullable(core.Object),
    isReplacing: core.bool,
    restorationId: core.String,
    [_rawChildren]: core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)),
    [_rawValues]: core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))
  }));
  dart.setLibraryUri(restoration.RestorationBucket, I[8]);
  dart.setFieldSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getFields(restoration.RestorationBucket.__proto__),
    [_rawData]: dart.finalFieldType(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))),
    [_debugOwner]: dart.fieldType(dart.nullable(core.Object)),
    [_manager]: dart.fieldType(dart.nullable(restoration.RestorationManager)),
    [_parent]: dart.fieldType(dart.nullable(restoration.RestorationBucket)),
    [_restorationId]: dart.fieldType(core.String),
    [_claimedChildren]: dart.finalFieldType(core.Map$(core.String, restoration.RestorationBucket)),
    [_childrenToAdd]: dart.finalFieldType(core.Map$(core.String, core.List$(restoration.RestorationBucket))),
    [_needsSerialization]: dart.fieldType(core.bool),
    [_debugDisposed]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(restoration.RestorationBucket, () => ['_childrenMapKey', '_valuesMapKey']);
  dart.defineExtensionMethods(restoration.RestorationBucket, ['toString']);
  dart.defineLazy(restoration.RestorationBucket, {
    /*restoration.RestorationBucket._childrenMapKey*/get _childrenMapKey() {
      return "c";
    },
    /*restoration.RestorationBucket._valuesMapKey*/get _valuesMapKey() {
      return "v";
    }
  }, false);
  restoration.debugIsSerializableForRestoration = function debugIsSerializableForRestoration(object) {
    let result = false;
    if (!dart.fn(() => {
      try {
        (C[61] || CT.C61).encodeMessage(object);
        result = true;
      } catch (e) {
        let error = dart.getThrown(e);
        if (core.Object.is(error)) {
          result = false;
        } else
          throw e;
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 1005, 10, "() {\n    try {\n      const StandardMessageCodec().encodeMessage(object);\n      result = true;\n    } catch (error) {\n      // This is only used in asserts, so reporting the exception isn't\n      // particularly useful, since the assert itself will likely fail.\n      result = false;\n    }\n    return true;\n  }()");
    return result;
  };
  debug.debugAssertAllServicesVarsUnset = function debugAssertAllServicesVarsUnset(reason) {
    if (!dart.fn(() => {
      if (debug.debugKeyEventSimulatorTransitModeOverride != null) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      if (debug.debugProfilePlatformChannels) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[9], 37, 10, "() {\n    if (debugKeyEventSimulatorTransitModeOverride != null) {\n      throw FlutterError(reason);\n    }\n    if (debugProfilePlatformChannels) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugKeyEventSimulatorTransitModeOverride*/get debugKeyEventSimulatorTransitModeOverride() {
      return null;
    },
    set debugKeyEventSimulatorTransitModeOverride(_) {},
    /*debug.debugProfilePlatformChannels*/get debugProfilePlatformChannels() {
      return false;
    },
    set debugProfilePlatformChannels(_) {}
  }, false);
  var proxy$ = dart.privateName(platform_channel, "_ProfiledBinaryMessenger.proxy");
  var channelTypeName$ = dart.privateName(platform_channel, "_ProfiledBinaryMessenger.channelTypeName");
  var codecTypeName$ = dart.privateName(platform_channel, "_ProfiledBinaryMessenger.codecTypeName");
  platform_channel._ProfiledBinaryMessenger = class _ProfiledBinaryMessenger extends core.Object {
    get proxy() {
      return this[proxy$];
    }
    set proxy(value) {
      super.proxy = value;
    }
    get channelTypeName() {
      return this[channelTypeName$];
    }
    set channelTypeName(value) {
      super.channelTypeName = value;
    }
    get codecTypeName() {
      return this[codecTypeName$];
    }
    set codecTypeName(value) {
      super.codecTypeName = value;
    }
    static ['_#new#tearOff'](proxy, channelTypeName, codecTypeName) {
      return new platform_channel._ProfiledBinaryMessenger.new(proxy, channelTypeName, codecTypeName);
    }
    handlePlatformMessage(channel, data, callback) {
      return this.proxy.handlePlatformMessage(channel, data, callback);
    }
    sendWithPostfix(channel, postfix, message) {
      return async.async(T$.ByteDataN(), (function* sendWithPostfix() {
        let task = new developer.TimelineTask.new();
        platform_channel._debugRecordUpStream(this.channelTypeName, channel + postfix, this.codecTypeName, message);
        task.start("Platform Channel send " + channel + postfix);
        let result = null;
        try {
          result = (yield this.proxy.send(channel, message));
        } finally {
          task.finish();
        }
        platform_channel._debugRecordDownStream(this.channelTypeName, channel + postfix, this.codecTypeName, result);
        return result;
      }).bind(this));
    }
    send(channel, message) {
      return this.sendWithPostfix(channel, "", message);
    }
    setMessageHandler(channel, handler) {
      this.proxy.setMessageHandler(channel, handler);
    }
  };
  (platform_channel._ProfiledBinaryMessenger.new = function(proxy, channelTypeName, codecTypeName) {
    this[proxy$] = proxy;
    this[channelTypeName$] = channelTypeName;
    this[codecTypeName$] = codecTypeName;
    ;
  }).prototype = platform_channel._ProfiledBinaryMessenger.prototype;
  dart.addTypeTests(platform_channel._ProfiledBinaryMessenger);
  dart.addTypeCaches(platform_channel._ProfiledBinaryMessenger);
  platform_channel._ProfiledBinaryMessenger[dart.implements] = () => [binary_messenger.BinaryMessenger];
  dart.setMethodSignature(platform_channel._ProfiledBinaryMessenger, () => ({
    __proto__: dart.getMethods(platform_channel._ProfiledBinaryMessenger.__proto__),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(typed_data.ByteData), dart.nullable(dart.fnType(dart.void, [dart.nullable(typed_data.ByteData)]))]),
    sendWithPostfix: dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [core.String, core.String, dart.nullable(typed_data.ByteData)]),
    send: dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [core.String, dart.nullable(typed_data.ByteData)]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))])
  }));
  dart.setLibraryUri(platform_channel._ProfiledBinaryMessenger, I[10]);
  dart.setFieldSignature(platform_channel._ProfiledBinaryMessenger, () => ({
    __proto__: dart.getFields(platform_channel._ProfiledBinaryMessenger.__proto__),
    proxy: dart.finalFieldType(binary_messenger.BinaryMessenger),
    channelTypeName: dart.finalFieldType(core.String),
    codecTypeName: dart.finalFieldType(core.String)
  }));
  var _upCount = dart.privateName(platform_channel, "_upCount");
  var _upBytes = dart.privateName(platform_channel, "_upBytes");
  var _downCount = dart.privateName(platform_channel, "_downCount");
  var _downBytes = dart.privateName(platform_channel, "_downBytes");
  platform_channel._PlatformChannelStats = class _PlatformChannelStats extends core.Object {
    static ['_#new#tearOff'](channel, codec, type) {
      return new platform_channel._PlatformChannelStats.new(channel, codec, type);
    }
    get upBytes() {
      return this[_upBytes];
    }
    addUpStream(bytes) {
      this[_upCount] = this[_upCount] + 1;
      this[_upBytes] = this[_upBytes] + bytes;
    }
    get downBytes() {
      return this[_downBytes];
    }
    addDownStream(bytes) {
      this[_downCount] = this[_downCount] + 1;
      this[_downBytes] = this[_downBytes] + bytes;
    }
    get averageUpPayload() {
      return this[_upBytes] / this[_upCount];
    }
    get averageDownPayload() {
      return this[_downBytes] / this[_downCount];
    }
  };
  (platform_channel._PlatformChannelStats.new = function(channel, codec, type) {
    this[_upCount] = 0;
    this[_upBytes] = 0;
    this[_downCount] = 0;
    this[_downBytes] = 0;
    this.channel = channel;
    this.codec = codec;
    this.type = type;
    ;
  }).prototype = platform_channel._PlatformChannelStats.prototype;
  dart.addTypeTests(platform_channel._PlatformChannelStats);
  dart.addTypeCaches(platform_channel._PlatformChannelStats);
  dart.setMethodSignature(platform_channel._PlatformChannelStats, () => ({
    __proto__: dart.getMethods(platform_channel._PlatformChannelStats.__proto__),
    addUpStream: dart.fnType(dart.void, [core.int]),
    addDownStream: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(platform_channel._PlatformChannelStats, () => ({
    __proto__: dart.getGetters(platform_channel._PlatformChannelStats.__proto__),
    upBytes: core.int,
    downBytes: core.int,
    averageUpPayload: core.double,
    averageDownPayload: core.double
  }));
  dart.setLibraryUri(platform_channel._PlatformChannelStats, I[10]);
  dart.setFieldSignature(platform_channel._PlatformChannelStats, () => ({
    __proto__: dart.getFields(platform_channel._PlatformChannelStats.__proto__),
    channel: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(core.String),
    type: dart.finalFieldType(core.String),
    [_upCount]: dart.fieldType(core.int),
    [_upBytes]: dart.fieldType(core.int),
    [_downCount]: dart.fieldType(core.int),
    [_downBytes]: dart.fieldType(core.int)
  }));
  var name$ = dart.privateName(platform_channel, "BasicMessageChannel.name");
  var codec$ = dart.privateName(platform_channel, "BasicMessageChannel.codec");
  var _binaryMessenger = dart.privateName(platform_channel, "BasicMessageChannel._binaryMessenger");
  var _binaryMessenger$ = dart.privateName(platform_channel, "_binaryMessenger");
  const _is_BasicMessageChannel_default = Symbol('_is_BasicMessageChannel_default');
  platform_channel.BasicMessageChannel$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$FutureOfT = () => (__t$FutureOfT = dart.constFn(async.Future$(T)))();
    var __t$TNToFutureOfT = () => (__t$TNToFutureOfT = dart.constFn(dart.fnType(__t$FutureOfT(), [__t$TN()])))();
    var __t$TNToNFutureOfT = () => (__t$TNToNFutureOfT = dart.constFn(dart.nullable(__t$TNToFutureOfT())))();
    class BasicMessageChannel extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get codec() {
        return this[codec$];
      }
      set codec(value) {
        super.codec = value;
      }
      get [_binaryMessenger$]() {
        return this[_binaryMessenger];
      }
      set [_binaryMessenger$](value) {
        super[_binaryMessenger$] = value;
      }
      static ['_#new#tearOff'](T, name, codec, opts) {
        let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
        return new (platform_channel.BasicMessageChannel$(T)).new(name, codec, {binaryMessenger: binaryMessenger});
      }
      get binaryMessenger() {
        let t18, t20, t19, t18$;
        let result = (t18 = this[_binaryMessenger$], t18 == null ? binding$0.ServicesBinding.instance.defaultBinaryMessenger : t18);
        return true && debug.debugProfilePlatformChannels ? (t18$ = platform_channel._debugBinaryMessengers, t19 = t18$._get(this), t19 == null ? (t20 = new platform_channel._ProfiledBinaryMessenger.new(result, this[$runtimeType].toString(), this.codec[$runtimeType].toString()), t18$._set(this, t20), t20) : t19) : result;
      }
      send(message) {
        T.as(message);
        return async.async(__t$TN(), (function* send() {
          return this.codec.decodeMessage(yield this.binaryMessenger.send(this.name, this.codec.encodeMessage(message)));
        }).bind(this));
      }
      setMessageHandler(handler) {
        __t$TNToNFutureOfT().as(handler);
        if (handler == null) {
          this.binaryMessenger.setMessageHandler(this.name, null);
        } else {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(message => async.async(T$.ByteDataN(), (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), T$.ByteDataNToFutureOfByteDataN()));
        }
      }
    }
    (BasicMessageChannel.new = function(name, codec, opts) {
      let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
      this[name$] = name;
      this[codec$] = codec;
      if (!(name !== null)) dart.assertFailed(null, I[11], 153, 16, "name != null");
      if (!(codec !== null)) dart.assertFailed(null, I[11], 154, 16, "codec != null");
      this[_binaryMessenger] = binaryMessenger;
      ;
    }).prototype = BasicMessageChannel.prototype;
    dart.addTypeTests(BasicMessageChannel);
    BasicMessageChannel.prototype[_is_BasicMessageChannel_default] = true;
    dart.addTypeCaches(BasicMessageChannel);
    dart.setMethodSignature(BasicMessageChannel, () => ({
      __proto__: dart.getMethods(BasicMessageChannel.__proto__),
      send: dart.fnType(async.Future$(dart.nullable(T)), [dart.nullable(core.Object)]),
      setMessageHandler: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(BasicMessageChannel, () => ({
      __proto__: dart.getGetters(BasicMessageChannel.__proto__),
      binaryMessenger: binary_messenger.BinaryMessenger
    }));
    dart.setLibraryUri(BasicMessageChannel, I[10]);
    dart.setFieldSignature(BasicMessageChannel, () => ({
      __proto__: dart.getFields(BasicMessageChannel.__proto__),
      name: dart.finalFieldType(core.String),
      codec: dart.finalFieldType(message_codec.MessageCodec$(T)),
      [_binaryMessenger$]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
    }));
    return BasicMessageChannel;
  });
  platform_channel.BasicMessageChannel = platform_channel.BasicMessageChannel$();
  dart.addTypeTests(platform_channel.BasicMessageChannel, _is_BasicMessageChannel_default);
  var name$0 = dart.privateName(platform_channel, "MethodChannel.name");
  var codec$0 = dart.privateName(platform_channel, "MethodChannel.codec");
  var _binaryMessenger$0 = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var _invokeMethod = dart.privateName(platform_channel, "_invokeMethod");
  var _handleAsMethodCall = dart.privateName(platform_channel, "_handleAsMethodCall");
  platform_channel.MethodChannel = class MethodChannel extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$0];
    }
    set codec(value) {
      super.codec = value;
    }
    get [_binaryMessenger$]() {
      return this[_binaryMessenger$0];
    }
    set [_binaryMessenger$](value) {
      super[_binaryMessenger$] = value;
    }
    static ['_#new#tearOff'](name, codec = C[62] || CT.C62, binaryMessenger = null) {
      return new platform_channel.MethodChannel.new(name, codec, binaryMessenger);
    }
    get binaryMessenger() {
      let t18, t20, t19, t18$;
      let result = (t18 = this[_binaryMessenger$], t18 == null ? binding$0.ServicesBinding.instance.defaultBinaryMessenger : t18);
      return true && debug.debugProfilePlatformChannels ? (t18$ = platform_channel._debugBinaryMessengers, t19 = t18$._get(this), t19 == null ? (t20 = new platform_channel._ProfiledBinaryMessenger.new(result, this[$runtimeType].toString(), this.codec[$runtimeType].toString()), t18$._set(this, t20), t20) : t19) : result;
    }
    [_invokeMethod](T, method, opts) {
      let missingOk = opts && 'missingOk' in opts ? opts.missingOk : null;
      let $arguments = opts && 'arguments' in opts ? opts.arguments : null;
      return async.async(dart.nullable(T), (function* _invokeMethod() {
        if (!(method !== null)) dart.assertFailed(null, I[11], 284, 12, "method != null");
        let input = this.codec.encodeMethodCall(new message_codec.MethodCall.new(method, $arguments));
        let result = true && debug.debugProfilePlatformChannels ? (yield platform_channel._ProfiledBinaryMessenger.as(this.binaryMessenger).sendWithPostfix(this.name, "#" + method, input)) : (yield this.binaryMessenger.send(this.name, input));
        if (result == null) {
          if (missingOk) {
            return null;
          }
          dart.throw(new message_codec.MissingPluginException.new("No implementation found for method " + method + " on channel " + this.name));
        }
        return dart.nullable(T).as(this.codec.decodeEnvelope(result));
      }).bind(this));
    }
    invokeMethod(T, method, $arguments = null) {
      return this[_invokeMethod](T, method, {missingOk: false, arguments: $arguments});
    }
    invokeListMethod(T, method, $arguments = null) {
      return async.async(dart.nullable(core.List$(T)), (function* invokeListMethod() {
        let t18;
        let result = (yield this.invokeMethod(core.List, method, $arguments));
        t18 = result;
        return t18 == null ? null : t18[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, $arguments = null) {
      return async.async(dart.nullable(core.Map$(K, V)), (function* invokeMapMethod() {
        let t18;
        let result = (yield this.invokeMethod(core.Map, method, $arguments));
        t18 = result;
        return t18 == null ? null : t18[$cast](K, V);
      }).bind(this));
    }
    setMethodCallHandler(handler) {
      if (!(this[_binaryMessenger$] != null || binding$0.ServicesBinding.instance !== null)) dart.assertFailed("Cannot set the method call handler before the binary messenger has been initialized. " + "This happens when you call setMethodCallHandler() before the WidgetsFlutterBinding " + "has been initialized. You can fix this by either calling WidgetsFlutterBinding.ensureInitialized() " + "before this or by passing a custom BinaryMessenger instance to MethodChannel().", I[11], 519, 7, "_binaryMessenger != null || ServicesBinding.instance != null");
      this.binaryMessenger.setMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), T$.ByteDataNToFutureOfByteDataN()));
    }
    [_handleAsMethodCall](message, handler) {
      return async.async(T$.ByteDataN(), (function* _handleAsMethodCall() {
        let call = this.codec.decodeMethodCall(message);
        try {
          return this.codec.encodeSuccessEnvelope(yield handler(call));
        } catch (e$) {
          let ex = dart.getThrown(e$);
          if (message_codec.PlatformException.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: e.code, message: e.message, details: e.details});
          } else if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else if (core.Object.is(ex)) {
            let error = ex;
            return this.codec.encodeErrorEnvelope({code: "error", message: error[$toString]()});
          } else
            throw e$;
        }
      }).bind(this));
    }
  };
  (platform_channel.MethodChannel.new = function(name, codec = C[62] || CT.C62, binaryMessenger = null) {
    this[name$0] = name;
    this[codec$0] = codec;
    if (!(name !== null)) dart.assertFailed(null, I[11], 239, 16, "name != null");
    if (!(codec !== null)) dart.assertFailed(null, I[11], 240, 16, "codec != null");
    this[_binaryMessenger$0] = binaryMessenger;
    ;
  }).prototype = platform_channel.MethodChannel.prototype;
  dart.addTypeTests(platform_channel.MethodChannel);
  dart.addTypeCaches(platform_channel.MethodChannel);
  dart.setMethodSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.MethodChannel.__proto__),
    [_invokeMethod]: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], {arguments: dart.dynamic}, {missingOk: core.bool}], T => [dart.nullable(core.Object)]),
    invokeMethod: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)]),
    invokeListMethod: dart.gFnType(T => [async.Future$(dart.nullable(core.List$(T))), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(dart.nullable(core.Map$(K, V))), [core.String], [dart.dynamic]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    setMethodCallHandler: dart.fnType(dart.void, [dart.nullable(dart.fnType(async.Future, [message_codec.MethodCall]))]),
    [_handleAsMethodCall]: dart.fnType(async.Future$(dart.nullable(typed_data.ByteData)), [dart.nullable(typed_data.ByteData), dart.fnType(async.Future, [message_codec.MethodCall])])
  }));
  dart.setGetterSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getGetters(platform_channel.MethodChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.MethodChannel, I[10]);
  dart.setFieldSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getFields(platform_channel.MethodChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger$]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
  }));
  const _invokeMethod$ = Symbol("_invokeMethod");
  platform_channel.OptionalMethodChannel = class OptionalMethodChannel extends platform_channel.MethodChannel {
    static ['_#new#tearOff'](name, codec, binaryMessenger) {
      return new platform_channel.OptionalMethodChannel.new(name, codec, binaryMessenger);
    }
    invokeMethod(T, method, $arguments = null) {
      return async.async(dart.nullable(T), (function* invokeMethod() {
        return this[_invokeMethod$](T, method, {missingOk: true, arguments: $arguments});
      }).bind(this));
    }
    [_invokeMethod$](T, method, opts) {
      return super[_invokeMethod](T, method, opts);
    }
  };
  (platform_channel.OptionalMethodChannel.new = function(name, codec = C[62] || CT.C62, binaryMessenger = null) {
    platform_channel.OptionalMethodChannel.__proto__.new.call(this, name, codec, binaryMessenger);
    ;
  }).prototype = platform_channel.OptionalMethodChannel.prototype;
  dart.addTypeTests(platform_channel.OptionalMethodChannel);
  dart.addTypeCaches(platform_channel.OptionalMethodChannel);
  dart.setMethodSignature(platform_channel.OptionalMethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.OptionalMethodChannel.__proto__),
    invokeMethod: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(platform_channel.OptionalMethodChannel, I[10]);
  var name$1 = dart.privateName(platform_channel, "EventChannel.name");
  var codec$1 = dart.privateName(platform_channel, "EventChannel.codec");
  var _binaryMessenger$1 = dart.privateName(platform_channel, "EventChannel._binaryMessenger");
  platform_channel.EventChannel = class EventChannel extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$1];
    }
    set codec(value) {
      super.codec = value;
    }
    get [_binaryMessenger$]() {
      return this[_binaryMessenger$1];
    }
    set [_binaryMessenger$](value) {
      super[_binaryMessenger$] = value;
    }
    static ['_#new#tearOff'](name, codec = C[62] || CT.C62, binaryMessenger = null) {
      return new platform_channel.EventChannel.new(name, codec, binaryMessenger);
    }
    get binaryMessenger() {
      let t20;
      t20 = this[_binaryMessenger$];
      return t20 == null ? binding$0.ServicesBinding.instance.defaultBinaryMessenger : t20;
    }
    receiveBroadcastStream($arguments = null) {
      let methodChannel = new platform_channel.MethodChannel.new(this.name, this.codec);
      let controller = null;
      function controller$35get() {
        let t21;
        t21 = controller;
        return t21 == null ? dart.throw(new _internal.LateError.localNI("controller")) : t21;
      }
      dart.fn(controller$35get, T$.VoidToStreamController());
      function controller$35set(controller$35param) {
        return controller = controller$35param;
      }
      dart.fn(controller$35set, T$.StreamControllerTodynamic());
      controller$35set(async.StreamController.broadcast({onListen: dart.fn(() => async.async(dart.void, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(reply => async.async(core.Null, (function*() {
            if (reply == null) {
              controller$35get().close();
            } else {
              try {
                controller$35get().add(this.codec.decodeEnvelope(reply));
              } catch (e$) {
                let e = dart.getThrown(e$);
                if (message_codec.PlatformException.is(e)) {
                  controller$35get().addError(e);
                } else
                  throw e$;
              }
            }
            return null;
          }).bind(this)), T$.ByteDataNToFutureOfNull()));
          try {
            yield methodChannel.invokeMethod(dart.void, "listen", $arguments);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while activating platform stream on channel " + this.name)}));
            } else
              throw e;
          }
        }).bind(this)), T$.VoidToFutureOfvoid()), onCancel: dart.fn(() => async.async(dart.void, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, null);
          try {
            yield methodChannel.invokeMethod(dart.void, "cancel", $arguments);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while de-activating platform stream on channel " + this.name)}));
            } else
              throw e;
          }
        }).bind(this)), T$.VoidToFutureOfvoid())}));
      return controller$35get().stream;
    }
  };
  (platform_channel.EventChannel.new = function(name, codec = C[62] || CT.C62, binaryMessenger = null) {
    this[name$1] = name;
    this[codec$1] = codec;
    if (!(name !== null)) dart.assertFailed(null, I[11], 593, 16, "name != null");
    if (!(codec !== null)) dart.assertFailed(null, I[11], 594, 16, "codec != null");
    this[_binaryMessenger$1] = binaryMessenger;
    ;
  }).prototype = platform_channel.EventChannel.prototype;
  dart.addTypeTests(platform_channel.EventChannel);
  dart.addTypeCaches(platform_channel.EventChannel);
  dart.setMethodSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getMethods(platform_channel.EventChannel.__proto__),
    receiveBroadcastStream: dart.fnType(async.Stream, [], [dart.dynamic])
  }));
  dart.setGetterSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getGetters(platform_channel.EventChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.EventChannel, I[10]);
  dart.setFieldSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getFields(platform_channel.EventChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger$]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
  }));
  platform_channel._debugLaunchProfilePlatformChannels = function _debugLaunchProfilePlatformChannels() {
    return async.async(dart.void, function* _debugLaunchProfilePlatformChannels() {
      if (!platform_channel._debugProfilePlatformChannelsIsRunning) {
        platform_channel._debugProfilePlatformChannelsIsRunning = true;
        yield async.Future.delayed(platform_channel._debugProfilePlatformChannelsRate);
        platform_channel._debugProfilePlatformChannelsIsRunning = false;
        let log = new core.StringBuffer.new();
        log.writeln("Platform Channel Stats:");
        let allStats = platform_channel._debugProfilePlatformChannelsStats[$values][$toList]();
        allStats[$sort](dart.fn((x, y) => y.upBytes + y.downBytes - (x.upBytes + x.downBytes), T$._PlatformChannelStatsAnd_PlatformChannelStatsToint()));
        for (let stats of allStats) {
          log.writeln("  (name:\"" + stats.channel + "\" type:\"" + stats.type + "\" codec:\"" + stats.codec + "\" upBytes:" + dart.str(stats.upBytes) + " upBytes_avg:" + stats.averageUpPayload[$toStringAsFixed](1) + " downBytes:" + dart.str(stats.downBytes) + " downBytes_avg:" + stats.averageDownPayload[$toStringAsFixed](1) + ")");
        }
        print.debugPrint(log.toString());
        platform_channel._debugProfilePlatformChannelsStats[$clear]();
      }
    });
  };
  platform_channel._debugRecordUpStream = function _debugRecordUpStream(channelTypeName, name, codecTypeName, bytes) {
    let t29, t28, t27, t26, t26$, t26$0;
    let stats = (t26 = platform_channel._debugProfilePlatformChannelsStats, t27 = name, t28 = t26[$_get](t27), t28 == null ? (t29 = new platform_channel._PlatformChannelStats.new(name, codecTypeName, channelTypeName), t26[$_set](t27, t29), t29) : t28);
    stats.addUpStream((t26$0 = (t26$ = bytes, t26$ == null ? null : t26$[$lengthInBytes]), t26$0 == null ? 0 : t26$0));
    platform_channel._debugLaunchProfilePlatformChannels();
  };
  platform_channel._debugRecordDownStream = function _debugRecordDownStream(channelTypeName, name, codecTypeName, bytes) {
    let t29, t28, t27, t26, t26$, t26$0;
    let stats = (t26 = platform_channel._debugProfilePlatformChannelsStats, t27 = name, t28 = t26[$_get](t27), t28 == null ? (t29 = new platform_channel._PlatformChannelStats.new(name, codecTypeName, channelTypeName), t26[$_set](t27, t29), t29) : t28);
    stats.addDownStream((t26$0 = (t26$ = bytes, t26$ == null ? null : t26$[$lengthInBytes]), t26$0 == null ? 0 : t26$0));
    platform_channel._debugLaunchProfilePlatformChannels();
  };
  var Duration__duration = dart.privateName(core, "Duration._duration");
  dart.defineLazy(platform_channel, {
    /*platform_channel._debugProfilePlatformChannelsIsRunning*/get _debugProfilePlatformChannelsIsRunning() {
      return false;
    },
    set _debugProfilePlatformChannelsIsRunning(_) {},
    /*platform_channel._debugProfilePlatformChannelsRate*/get _debugProfilePlatformChannelsRate() {
      return C[63] || CT.C63;
    },
    /*platform_channel._debugBinaryMessengers*/get _debugBinaryMessengers() {
      return new (T$.ExpandoOfBinaryMessenger()).new();
    },
    /*platform_channel._debugProfilePlatformChannelsStats*/get _debugProfilePlatformChannelsStats() {
      return new (T$.IdentityMapOfString$_PlatformChannelStats()).new();
    }
  }, false);
  const _is_MessageCodec_default = Symbol('_is_MessageCodec_default');
  message_codec.MessageCodec$ = dart.generic(T => {
    class MessageCodec extends core.Object {}
    (MessageCodec.new = function() {
      ;
    }).prototype = MessageCodec.prototype;
    dart.addTypeTests(MessageCodec);
    MessageCodec.prototype[_is_MessageCodec_default] = true;
    dart.addTypeCaches(MessageCodec);
    dart.setLibraryUri(MessageCodec, I[12]);
    return MessageCodec;
  });
  message_codec.MessageCodec = message_codec.MessageCodec$();
  dart.addTypeTests(message_codec.MessageCodec, _is_MessageCodec_default);
  var method$ = dart.privateName(message_codec, "MethodCall.method");
  var $arguments$ = dart.privateName(message_codec, "MethodCall.arguments");
  message_codec.MethodCall = class MethodCall extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get arguments() {
      return this[$arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    static ['_#new#tearOff'](method, $arguments = null) {
      return new message_codec.MethodCall.new(method, $arguments);
    }
    toString() {
      return object.objectRuntimeType(this, "MethodCall") + "(" + this.method + ", " + dart.str(this.arguments) + ")";
    }
  };
  (message_codec.MethodCall.new = function(method, $arguments = null) {
    this[method$] = method;
    this[$arguments$] = $arguments;
    if (!(method !== null)) dart.assertFailed(null, I[13], 38, 14, "method != null");
    ;
  }).prototype = message_codec.MethodCall.prototype;
  dart.addTypeTests(message_codec.MethodCall);
  dart.addTypeCaches(message_codec.MethodCall);
  dart.setLibraryUri(message_codec.MethodCall, I[12]);
  dart.setFieldSignature(message_codec.MethodCall, () => ({
    __proto__: dart.getFields(message_codec.MethodCall.__proto__),
    method: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.MethodCall, ['toString']);
  message_codec.MethodCodec = class MethodCodec extends core.Object {};
  (message_codec.MethodCodec.new = function() {
    ;
  }).prototype = message_codec.MethodCodec.prototype;
  dart.addTypeTests(message_codec.MethodCodec);
  dart.addTypeCaches(message_codec.MethodCodec);
  dart.setLibraryUri(message_codec.MethodCodec, I[12]);
  var code$ = dart.privateName(message_codec, "PlatformException.code");
  var message$ = dart.privateName(message_codec, "PlatformException.message");
  var details$ = dart.privateName(message_codec, "PlatformException.details");
  var stacktrace$ = dart.privateName(message_codec, "PlatformException.stacktrace");
  message_codec.PlatformException = class PlatformException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    get stacktrace() {
      return this[stacktrace$];
    }
    set stacktrace(value) {
      super.stacktrace = value;
    }
    static ['_#new#tearOff'](opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let stacktrace = opts && 'stacktrace' in opts ? opts.stacktrace : null;
      return new message_codec.PlatformException.new({code: code, message: message, details: details, stacktrace: stacktrace});
    }
    toString() {
      return "PlatformException(" + this.code + ", " + dart.str(this.message) + ", " + dart.str(this.details) + ", " + dart.str(this.stacktrace) + ")";
    }
  };
  (message_codec.PlatformException.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let details = opts && 'details' in opts ? opts.details : null;
    let stacktrace = opts && 'stacktrace' in opts ? opts.stacktrace : null;
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    this[stacktrace$] = stacktrace;
    if (!(code !== null)) dart.assertFailed(null, I[13], 117, 15, "code != null");
    ;
  }).prototype = message_codec.PlatformException.prototype;
  dart.addTypeTests(message_codec.PlatformException);
  dart.addTypeCaches(message_codec.PlatformException);
  message_codec.PlatformException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.PlatformException, I[12]);
  dart.setFieldSignature(message_codec.PlatformException, () => ({
    __proto__: dart.getFields(message_codec.PlatformException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(dart.nullable(core.String)),
    details: dart.finalFieldType(dart.dynamic),
    stacktrace: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(message_codec.PlatformException, ['toString']);
  var message$0 = dart.privateName(message_codec, "MissingPluginException.message");
  message_codec.MissingPluginException = class MissingPluginException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    static ['_#new#tearOff'](message = null) {
      return new message_codec.MissingPluginException.new(message);
    }
    toString() {
      return "MissingPluginException(" + dart.str(this.message) + ")";
    }
  };
  (message_codec.MissingPluginException.new = function(message = null) {
    this[message$0] = message;
    ;
  }).prototype = message_codec.MissingPluginException.prototype;
  dart.addTypeTests(message_codec.MissingPluginException);
  dart.addTypeCaches(message_codec.MissingPluginException);
  message_codec.MissingPluginException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.MissingPluginException, I[12]);
  dart.setFieldSignature(message_codec.MissingPluginException, () => ({
    __proto__: dart.getFields(message_codec.MissingPluginException.__proto__),
    message: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(message_codec.MissingPluginException, ['toString']);
  message_codecs.BinaryCodec = class BinaryCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.BinaryCodec.new();
    }
    decodeMessage(message) {
      return message;
    }
    encodeMessage(message) {
      T$.ByteDataN().as(message);
      return message;
    }
  };
  (message_codecs.BinaryCodec.new = function() {
    ;
  }).prototype = message_codecs.BinaryCodec.prototype;
  dart.addTypeTests(message_codecs.BinaryCodec);
  dart.addTypeCaches(message_codecs.BinaryCodec);
  message_codecs.BinaryCodec[dart.implements] = () => [message_codec.MessageCodec$(typed_data.ByteData)];
  dart.setMethodSignature(message_codecs.BinaryCodec, () => ({
    __proto__: dart.getMethods(message_codecs.BinaryCodec.__proto__),
    decodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(typed_data.ByteData)]),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(message_codecs.BinaryCodec, I[14]);
  message_codecs.StringCodec = class StringCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.StringCodec.new();
    }
    decodeMessage(message) {
      if (message == null) {
        return null;
      }
      return convert.utf8.decoder.convert(message[$buffer][$asUint8List](message[$offsetInBytes], message[$lengthInBytes]));
    }
    encodeMessage(message) {
      T$.StringN().as(message);
      if (message == null) {
        return null;
      }
      let encoded = convert.utf8.encoder.convert(message);
      return encoded[$buffer][$asByteData]();
    }
  };
  (message_codecs.StringCodec.new = function() {
    ;
  }).prototype = message_codecs.StringCodec.prototype;
  dart.addTypeTests(message_codecs.StringCodec);
  dart.addTypeCaches(message_codecs.StringCodec);
  message_codecs.StringCodec[dart.implements] = () => [message_codec.MessageCodec$(core.String)];
  dart.setMethodSignature(message_codecs.StringCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StringCodec.__proto__),
    decodeMessage: dart.fnType(dart.nullable(core.String), [dart.nullable(typed_data.ByteData)]),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(message_codecs.StringCodec, I[14]);
  message_codecs.JSONMessageCodec = class JSONMessageCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.JSONMessageCodec.new();
    }
    encodeMessage(message) {
      if (message == null) {
        return null;
      }
      return (C[64] || CT.C64).encodeMessage(convert.json.encode(message));
    }
    decodeMessage(message) {
      if (message == null) {
        return message;
      }
      return convert.json.decode(dart.nullCheck((C[64] || CT.C64).decodeMessage(message)));
    }
  };
  (message_codecs.JSONMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMessageCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMessageCodec);
  dart.addTypeCaches(message_codecs.JSONMessageCodec);
  message_codecs.JSONMessageCodec[dart.implements] = () => [message_codec.MessageCodec$(dart.nullable(core.Object))];
  dart.setMethodSignature(message_codecs.JSONMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMessageCodec.__proto__),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)]),
    decodeMessage: dart.fnType(dart.dynamic, [dart.nullable(typed_data.ByteData)])
  }));
  dart.setLibraryUri(message_codecs.JSONMessageCodec, I[14]);
  message_codecs.JSONMethodCodec = class JSONMethodCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.JSONMethodCodec.new();
    }
    encodeMethodCall(methodCall) {
      return dart.nullCheck((C[65] || CT.C65).encodeMessage(new (T$.IdentityMapOfString$ObjectN()).from(["method", methodCall.method, "args", methodCall.arguments])));
    }
    decodeMethodCall(methodCall) {
      let decoded = (C[65] || CT.C65).decodeMessage(methodCall);
      if (!core.Map.is(decoded)) {
        dart.throw(new core.FormatException.new("Expected method call Map, got " + dart.str(decoded)));
      }
      let method = decoded[$_get]("method");
      let $arguments = decoded[$_get]("args");
      if (typeof method == 'string') {
        return new message_codec.MethodCall.new(method, $arguments);
      }
      dart.throw(new core.FormatException.new("Invalid method call: " + dart.str(decoded)));
    }
    decodeEnvelope(envelope) {
      let decoded = (C[65] || CT.C65).decodeMessage(envelope);
      if (!core.List.is(decoded)) {
        dart.throw(new core.FormatException.new("Expected envelope List, got " + dart.str(decoded)));
      }
      if (decoded[$length] === 1) {
        return decoded[$_get](0);
      }
      if (decoded[$length] === 3 && typeof decoded[$_get](0) == 'string' && (decoded[$_get](1) == null || typeof decoded[$_get](1) == 'string')) {
        dart.throw(new message_codec.PlatformException.new({code: core.String.as(decoded[$_get](0)), message: T$.StringN().as(decoded[$_get](1)), details: decoded[$_get](2)}));
      }
      if (decoded[$length] === 4 && typeof decoded[$_get](0) == 'string' && (decoded[$_get](1) == null || typeof decoded[$_get](1) == 'string') && (decoded[$_get](3) == null || typeof decoded[$_get](3) == 'string')) {
        dart.throw(new message_codec.PlatformException.new({code: core.String.as(decoded[$_get](0)), message: T$.StringN().as(decoded[$_get](1)), details: decoded[$_get](2), stacktrace: T$.StringN().as(decoded[$_get](3))}));
      }
      dart.throw(new core.FormatException.new("Invalid envelope: " + dart.str(decoded)));
    }
    encodeSuccessEnvelope(result) {
      return dart.nullCheck((C[65] || CT.C65).encodeMessage(T$.JSArrayOfObjectN().of([result])));
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      if (!(code !== null)) dart.assertFailed(null, I[15], 198, 12, "code != null");
      return dart.nullCheck((C[65] || CT.C65).encodeMessage(T$.JSArrayOfObjectN().of([code, message, details])));
    }
  };
  (message_codecs.JSONMethodCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMethodCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMethodCodec);
  dart.addTypeCaches(message_codecs.JSONMethodCodec);
  message_codecs.JSONMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.JSONMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [dart.nullable(typed_data.ByteData)]),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.nullable(core.Object)]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {details: dart.nullable(core.Object), message: dart.nullable(core.String)}, {code: core.String})
  }));
  dart.setLibraryUri(message_codecs.JSONMethodCodec, I[14]);
  var FormatException_offset = dart.privateName(core, "FormatException.offset");
  var FormatException_source = dart.privateName(core, "FormatException.source");
  var FormatException_message = dart.privateName(core, "FormatException.message");
  message_codecs.StandardMessageCodec = class StandardMessageCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.StandardMessageCodec.new();
    }
    encodeMessage(message) {
      if (message == null) {
        return null;
      }
      let buffer = serialization.WriteBuffer.new({startCapacity: 64});
      this.writeValue(buffer, message);
      return buffer.done();
    }
    decodeMessage(message) {
      if (message == null) {
        return null;
      }
      let buffer = new serialization.ReadBuffer.new(message);
      let result = this.readValue(buffer);
      if (buffer.hasRemaining) {
        dart.throw(C[66] || CT.C66);
      }
      return result;
    }
    writeValue(buffer, value) {
      if (value == null) {
        buffer.putUint8(0);
      } else if (typeof value == 'boolean') {
        buffer.putUint8(dart.test(value) ? 1 : 2);
      } else if (typeof value == 'number') {
        buffer.putUint8(6);
        buffer.putFloat64(value);
      } else if (core.int.is(value)) {
        if (-2147483647 - 1 <= dart.notNull(value) && dart.notNull(value) <= 2147483647) {
          buffer.putUint8(3);
          buffer.putInt32(value);
        } else {
          buffer.putUint8(4);
          buffer.putInt64(value);
        }
      } else if (typeof value == 'string') {
        buffer.putUint8(7);
        let asciiBytes = _native_typed_data.NativeUint8List.new(value.length);
        let utf8Bytes = null;
        let utf8Offset = 0;
        for (let i = 0; i < value.length; i = i + 1) {
          let char = value[$codeUnitAt](i);
          if (char <= 127) {
            asciiBytes[$_set](i, char);
          } else {
            utf8Bytes = convert.utf8.encoder.convert(value[$substring](i));
            utf8Offset = i;
            break;
          }
        }
        if (utf8Bytes != null) {
          this.writeSize(buffer, utf8Offset + utf8Bytes[$length]);
          buffer.putUint8List(typed_data.Uint8List.sublistView(asciiBytes, 0, utf8Offset));
          buffer.putUint8List(utf8Bytes);
        } else {
          this.writeSize(buffer, asciiBytes[$length]);
          buffer.putUint8List(asciiBytes);
        }
      } else if (typed_data.Uint8List.is(value)) {
        buffer.putUint8(8);
        this.writeSize(buffer, value[$length]);
        buffer.putUint8List(value);
      } else if (typed_data.Int32List.is(value)) {
        buffer.putUint8(9);
        this.writeSize(buffer, value[$length]);
        buffer.putInt32List(value);
      } else if (typed_data.Int64List.is(value)) {
        buffer.putUint8(10);
        this.writeSize(buffer, value[$length]);
        buffer.putInt64List(value);
      } else if (typed_data.Float32List.is(value)) {
        buffer.putUint8(14);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat32List(value);
      } else if (typed_data.Float64List.is(value)) {
        buffer.putUint8(11);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat64List(value);
      } else if (core.List.is(value)) {
        buffer.putUint8(12);
        this.writeSize(buffer, value[$length]);
        for (let item of value) {
          this.writeValue(buffer, item);
        }
      } else if (core.Map.is(value)) {
        buffer.putUint8(13);
        this.writeSize(buffer, value[$length]);
        value[$forEach](dart.fn((key, value) => {
          this.writeValue(buffer, key);
          this.writeValue(buffer, value);
        }, T$.ObjectNAndObjectNTovoid()));
      } else {
        dart.throw(new core.ArgumentError.value(value));
      }
    }
    readValue(buffer) {
      if (!buffer.hasRemaining) {
        dart.throw(C[66] || CT.C66);
      }
      let type = buffer.getUint8();
      return this.readValueOfType(type, buffer);
    }
    readValueOfType(type, buffer) {
      switch (type) {
        case 0:
          {
            return null;
          }
        case 1:
          {
            return true;
          }
        case 2:
          {
            return false;
          }
        case 3:
          {
            return buffer.getInt32();
          }
        case 4:
          {
            return buffer.getInt64();
          }
        case 6:
          {
            return buffer.getFloat64();
          }
        case 5:
        case 7:
          {
            let length = this.readSize(buffer);
            return convert.utf8.decoder.convert(buffer.getUint8List(length));
          }
        case 8:
          {
            let length = this.readSize(buffer);
            return buffer.getUint8List(length);
          }
        case 9:
          {
            let length = this.readSize(buffer);
            return buffer.getInt32List(length);
          }
        case 10:
          {
            let length = this.readSize(buffer);
            return buffer.getInt64List(length);
          }
        case 14:
          {
            let length = this.readSize(buffer);
            return buffer.getFloat32List(length);
          }
        case 11:
          {
            let length = this.readSize(buffer);
            return buffer.getFloat64List(length);
          }
        case 12:
          {
            let length = this.readSize(buffer);
            let result = T$.ListOfObjectN().filled(length, null);
            for (let i = 0; i < length; i = i + 1) {
              result[$_set](i, this.readValue(buffer));
            }
            return result;
          }
        case 13:
          {
            let length = this.readSize(buffer);
            let result = new (T$.LinkedMapOfObjectN$ObjectN()).new();
            for (let i = 0; i < length; i = i + 1) {
              result[$_set](this.readValue(buffer), this.readValue(buffer));
            }
            return result;
          }
        default:
          {
            dart.throw(C[66] || CT.C66);
          }
      }
    }
    writeSize(buffer, value) {
      if (!(0 <= value && value <= 4294967295)) dart.assertFailed(null, I[15], 544, 12, "0 <= value && value <= 0xffffffff");
      if (value < 254) {
        buffer.putUint8(value);
      } else if (value <= 65535) {
        buffer.putUint8(254);
        buffer.putUint16(value);
      } else {
        buffer.putUint8(255);
        buffer.putUint32(value);
      }
    }
    readSize(buffer) {
      let value = buffer.getUint8();
      switch (value) {
        case 254:
          {
            return buffer.getUint16();
          }
        case 255:
          {
            return buffer.getUint32();
          }
        default:
          {
            return value;
          }
      }
    }
  };
  (message_codecs.StandardMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.StandardMessageCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMessageCodec);
  dart.addTypeCaches(message_codecs.StandardMessageCodec);
  message_codecs.StandardMessageCodec[dart.implements] = () => [message_codec.MessageCodec$(dart.nullable(core.Object))];
  dart.setMethodSignature(message_codecs.StandardMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMessageCodec.__proto__),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)]),
    decodeMessage: dart.fnType(dart.dynamic, [dart.nullable(typed_data.ByteData)]),
    writeValue: dart.fnType(dart.void, [serialization.WriteBuffer, dart.nullable(core.Object)]),
    readValue: dart.fnType(dart.nullable(core.Object), [serialization.ReadBuffer]),
    readValueOfType: dart.fnType(dart.nullable(core.Object), [core.int, serialization.ReadBuffer]),
    writeSize: dart.fnType(dart.void, [serialization.WriteBuffer, core.int]),
    readSize: dart.fnType(core.int, [serialization.ReadBuffer])
  }));
  dart.setLibraryUri(message_codecs.StandardMessageCodec, I[14]);
  dart.setStaticFieldSignature(message_codecs.StandardMessageCodec, () => ['_valueNull', '_valueTrue', '_valueFalse', '_valueInt32', '_valueInt64', '_valueLargeInt', '_valueFloat64', '_valueString', '_valueUint8List', '_valueInt32List', '_valueInt64List', '_valueFloat64List', '_valueList', '_valueMap', '_valueFloat32List']);
  dart.defineLazy(message_codecs.StandardMessageCodec, {
    /*message_codecs.StandardMessageCodec._valueNull*/get _valueNull() {
      return 0;
    },
    /*message_codecs.StandardMessageCodec._valueTrue*/get _valueTrue() {
      return 1;
    },
    /*message_codecs.StandardMessageCodec._valueFalse*/get _valueFalse() {
      return 2;
    },
    /*message_codecs.StandardMessageCodec._valueInt32*/get _valueInt32() {
      return 3;
    },
    /*message_codecs.StandardMessageCodec._valueInt64*/get _valueInt64() {
      return 4;
    },
    /*message_codecs.StandardMessageCodec._valueLargeInt*/get _valueLargeInt() {
      return 5;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64*/get _valueFloat64() {
      return 6;
    },
    /*message_codecs.StandardMessageCodec._valueString*/get _valueString() {
      return 7;
    },
    /*message_codecs.StandardMessageCodec._valueUint8List*/get _valueUint8List() {
      return 8;
    },
    /*message_codecs.StandardMessageCodec._valueInt32List*/get _valueInt32List() {
      return 9;
    },
    /*message_codecs.StandardMessageCodec._valueInt64List*/get _valueInt64List() {
      return 10;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64List*/get _valueFloat64List() {
      return 11;
    },
    /*message_codecs.StandardMessageCodec._valueList*/get _valueList() {
      return 12;
    },
    /*message_codecs.StandardMessageCodec._valueMap*/get _valueMap() {
      return 13;
    },
    /*message_codecs.StandardMessageCodec._valueFloat32List*/get _valueFloat32List() {
      return 14;
    }
  }, false);
  const messageCodec$ = StandardMethodCodec_messageCodec;
  message_codecs.StandardMethodCodec = class StandardMethodCodec extends core.Object {
    get messageCodec() {
      return this[messageCodec$];
    }
    set messageCodec(value) {
      super.messageCodec = value;
    }
    static ['_#new#tearOff'](messageCodec = C[61] || CT.C61) {
      return new message_codecs.StandardMethodCodec.new(messageCodec);
    }
    encodeMethodCall(methodCall) {
      let buffer = serialization.WriteBuffer.new({startCapacity: 64});
      this.messageCodec.writeValue(buffer, methodCall.method);
      this.messageCodec.writeValue(buffer, methodCall.arguments);
      return buffer.done();
    }
    decodeMethodCall(methodCall) {
      let buffer = new serialization.ReadBuffer.new(dart.nullCheck(methodCall));
      let method = this.messageCodec.readValue(buffer);
      let $arguments = this.messageCodec.readValue(buffer);
      if (typeof method == 'string' && !buffer.hasRemaining) {
        return new message_codec.MethodCall.new(method, $arguments);
      } else {
        dart.throw(C[67] || CT.C67);
      }
    }
    encodeSuccessEnvelope(result) {
      let buffer = serialization.WriteBuffer.new({startCapacity: 64});
      buffer.putUint8(0);
      this.messageCodec.writeValue(buffer, result);
      return buffer.done();
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let buffer = serialization.WriteBuffer.new({startCapacity: 64});
      buffer.putUint8(1);
      this.messageCodec.writeValue(buffer, code);
      this.messageCodec.writeValue(buffer, message);
      this.messageCodec.writeValue(buffer, details);
      return buffer.done();
    }
    decodeEnvelope(envelope) {
      if (envelope[$lengthInBytes] === 0) {
        dart.throw(C[68] || CT.C68);
      }
      let buffer = new serialization.ReadBuffer.new(envelope);
      if (buffer.getUint8() === 0) {
        return this.messageCodec.readValue(buffer);
      }
      let errorCode = this.messageCodec.readValue(buffer);
      let errorMessage = this.messageCodec.readValue(buffer);
      let errorDetails = this.messageCodec.readValue(buffer);
      let errorStacktrace = buffer.hasRemaining ? T$.StringN().as(this.messageCodec.readValue(buffer)) : null;
      if (typeof errorCode == 'string' && (errorMessage == null || typeof errorMessage == 'string') && !buffer.hasRemaining) {
        dart.throw(new message_codec.PlatformException.new({code: errorCode, message: T$.StringN().as(errorMessage), details: errorDetails, stacktrace: errorStacktrace}));
      } else {
        dart.throw(C[69] || CT.C69);
      }
    }
  };
  (message_codecs.StandardMethodCodec.new = function(messageCodec = C[61] || CT.C61) {
    this[messageCodec$] = messageCodec;
    ;
  }).prototype = message_codecs.StandardMethodCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMethodCodec);
  dart.addTypeCaches(message_codecs.StandardMethodCodec);
  message_codecs.StandardMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [dart.nullable(typed_data.ByteData)]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.nullable(core.Object)]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {details: dart.nullable(core.Object), message: dart.nullable(core.String)}, {code: core.String}),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.StandardMethodCodec, I[14]);
  dart.setFieldSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getFields(message_codecs.StandardMethodCodec.__proto__),
    messageCodec: dart.finalFieldType(message_codecs.StandardMessageCodec)
  }));
  dart.defineLazy(message_codecs, {
    /*message_codecs._writeBufferStartCapacity*/get _writeBufferStartCapacity() {
      return 64;
    }
  }, false);
  system_channels.SystemChannels = class SystemChannels extends core.Object {
    static ['_#_#tearOff']() {
      return new system_channels.SystemChannels.__();
    }
  };
  (system_channels.SystemChannels.__ = function() {
    ;
  }).prototype = system_channels.SystemChannels.prototype;
  dart.addTypeTests(system_channels.SystemChannels);
  dart.addTypeCaches(system_channels.SystemChannels);
  dart.setLibraryUri(system_channels.SystemChannels, I[16]);
  dart.setStaticFieldSignature(system_channels.SystemChannels, () => ['navigation', 'platform', 'textInput', 'keyEvent', 'lifecycle', 'system', 'accessibility', 'platform_views', 'skia', 'mouseCursor', 'restoration', 'deferredComponent', 'localization', 'menu']);
  dart.defineLazy(system_channels.SystemChannels, {
    /*system_channels.SystemChannels.navigation*/get navigation() {
      return C[70] || CT.C70;
    },
    /*system_channels.SystemChannels.platform*/get platform() {
      return C[72] || CT.C72;
    },
    /*system_channels.SystemChannels.textInput*/get textInput() {
      return C[73] || CT.C73;
    },
    /*system_channels.SystemChannels.keyEvent*/get keyEvent() {
      return C[74] || CT.C74;
    },
    /*system_channels.SystemChannels.lifecycle*/get lifecycle() {
      return C[75] || CT.C75;
    },
    /*system_channels.SystemChannels.system*/get system() {
      return C[76] || CT.C76;
    },
    /*system_channels.SystemChannels.accessibility*/get accessibility() {
      return C[77] || CT.C77;
    },
    /*system_channels.SystemChannels.platform_views*/get platform_views() {
      return C[78] || CT.C78;
    },
    /*system_channels.SystemChannels.skia*/get skia() {
      return C[79] || CT.C79;
    },
    /*system_channels.SystemChannels.mouseCursor*/get mouseCursor() {
      return C[80] || CT.C80;
    },
    /*system_channels.SystemChannels.restoration*/get restoration() {
      return C[81] || CT.C81;
    },
    /*system_channels.SystemChannels.deferredComponent*/get deferredComponent() {
      return C[82] || CT.C82;
    },
    /*system_channels.SystemChannels.localization*/get localization() {
      return C[83] || CT.C83;
    },
    /*system_channels.SystemChannels.menu*/get menu() {
      return C[84] || CT.C84;
    }
  }, false);
  var keyCode$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.keyCode");
  var scanCode$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.scanCode");
  var characterCodePoint$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.characterCodePoint");
  var modifiers$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.modifiers");
  var _isLeftRightModifierPressed = dart.privateName(raw_keyboard_windows, "_isLeftRightModifierPressed");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  raw_keyboard.RawKeyEventData = class RawKeyEventData extends Object_Diagnosticable$36 {
    get isControlPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.controlModifier);
    }
    get isShiftPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.shiftModifier);
    }
    get isAltPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.altModifier);
    }
    get isMetaPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.metaModifier);
    }
    get modifiersPressed() {
      let result = new (T$.LinkedMapOfModifierKey$KeyboardSide()).new();
      for (let key of raw_keyboard.ModifierKey.values) {
        if (this.isModifierPressed(key)) {
          let side = this.getModifierSide(key);
          if (side != null) {
            result[$_set](key, side);
          }
          if (!dart.fn(() => {
            if (side == null) {
              print.debugPrint("Raw key data is returning inconsistent information for " + "pressed modifiers. isModifierPressed returns true for " + dart.str(key) + " " + "being pressed, but when getModifierSide is called, it says " + "that no modifiers are pressed.");
              if (raw_keyboard_android.RawKeyEventDataAndroid.is(this)) {
                print.debugPrint("Android raw key metaState: " + dart.str(raw_keyboard_android.RawKeyEventDataAndroid.as(this).metaState));
              }
            }
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[18], 177, 16, "() {\n          if (side == null) {\n            debugPrint(\n              'Raw key data is returning inconsistent information for '\n              'pressed modifiers. isModifierPressed returns true for $key '\n              'being pressed, but when getModifierSide is called, it says '\n              'that no modifiers are pressed.',\n            );\n            if (this is RawKeyEventDataAndroid) {\n              debugPrint('Android raw key metaState: ${(this as RawKeyEventDataAndroid).metaState}');\n            }\n          }\n          return true;\n        }()");
        }
      }
      return result;
    }
    shouldDispatchEvent() {
      return true;
    }
  };
  (raw_keyboard.RawKeyEventData.new = function() {
    ;
  }).prototype = raw_keyboard.RawKeyEventData.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEventData);
  dart.addTypeCaches(raw_keyboard.RawKeyEventData);
  dart.setMethodSignature(raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyEventData.__proto__),
    shouldDispatchEvent: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEventData.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    modifiersPressed: core.Map$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEventData, I[19]);
  raw_keyboard_windows.RawKeyEventDataWindows = class RawKeyEventDataWindows extends raw_keyboard.RawKeyEventData {
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get characterCodePoint() {
      return this[characterCodePoint$];
    }
    set characterCodePoint(value) {
      super.characterCodePoint = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    static ['_#new#tearOff'](opts) {
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
      let characterCodePoint = opts && 'characterCodePoint' in opts ? opts.characterCodePoint : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      return new raw_keyboard_windows.RawKeyEventDataWindows.new({keyCode: keyCode, scanCode: scanCode, characterCodePoint: characterCodePoint, modifiers: modifiers});
    }
    get keyLabel() {
      return this.characterCodePoint === 0 ? "" : core.String.fromCharCode(this.characterCodePoint);
    }
    get physicalKey() {
      let t26;
      t26 = keyboard_maps$46g.kWindowsToPhysicalKey[$_get](this.scanCode);
      return t26 == null ? new keyboard_key$46g.PhysicalKeyboardKey.new(94489280512.0 + this.scanCode) : t26;
    }
    get logicalKey() {
      let t26;
      let numPadKey = keyboard_maps$46g.kWindowsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !keyboard_key$46g.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) {
        let keyId = (0 | (this.characterCodePoint & 4294967295.0) >>> 0) >>> 0;
        t26 = keyboard_key$46g.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t26 == null ? new keyboard_key$46g.LogicalKeyboardKey.new(keyId) : t26;
      }
      let newKey = keyboard_maps$46g.kWindowsToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key$46g.LogicalKeyboardKey.new((this.keyCode | 94489280512.0) >>> 0);
    }
    [_isLeftRightModifierPressed](side, anyMask, leftMask, rightMask) {
      if ((this.modifiers & anyMask) === 0 && (this.modifiers & leftMask) === 0 && (this.modifiers & rightMask) === 0) {
        return false;
      }
      let anyOnly = (this.modifiers & (leftMask | rightMask | anyMask) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C[85] || CT.C85:
          {
            return true;
          }
        case C[86] || CT.C86:
          {
            return (this.modifiers & leftMask) !== 0 && (this.modifiers & rightMask) !== 0 || anyOnly;
          }
        case C[87] || CT.C87:
          {
            return (this.modifiers & leftMask) !== 0 || anyOnly;
          }
        case C[88] || CT.C88:
          {
            return (this.modifiers & rightMask) !== 0 || anyOnly;
          }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      let result = null;
      switch (key) {
        case C[89] || CT.C89:
          {
            result = this[_isLeftRightModifierPressed](side, 8, 16, 32);
            break;
          }
        case C[90] || CT.C90:
          {
            result = this[_isLeftRightModifierPressed](side, 1, 2, 4);
            break;
          }
        case C[91] || CT.C91:
          {
            result = this[_isLeftRightModifierPressed](side, 64, 128, 256);
            break;
          }
        case C[92] || CT.C92:
          {
            result = this[_isLeftRightModifierPressed](side, (512 | 1024) >>> 0, 512, 1024);
            break;
          }
        case C[93] || CT.C93:
          {
            result = (this.modifiers & 2048) !== 0;
            break;
          }
        case C[94] || CT.C94:
          {
            result = (this.modifiers & 8192) !== 0;
            break;
          }
        case C[95] || CT.C95:
          {
            result = (this.modifiers & 4096) !== 0;
            break;
          }
        case C[96] || CT.C96:
        case C[97] || CT.C97:
          {
            result = false;
            break;
          }
      }
      if (!(!result || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", I[17], 155, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask, anyMask) => {
        let combinedMask = (leftMask | rightMask) >>> 0;
        let combined = (this.modifiers & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (this.modifiers & (combinedMask | anyMask) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[89] || CT.C89:
          {
            return findSide(16, 32, 8);
          }
        case C[90] || CT.C90:
          {
            return findSide(2, 4, 1);
          }
        case C[91] || CT.C91:
          {
            return findSide(128, 256, 64);
          }
        case C[92] || CT.C92:
          {
            return findSide(512, 1024, 0);
          }
        case C[93] || CT.C93:
        case C[95] || CT.C95:
        case C[94] || CT.C94:
        case C[96] || CT.C96:
        case C[97] || CT.C97:
          {
            return raw_keyboard.KeyboardSide.all;
          }
      }
    }
    shouldDispatchEvent() {
      return this.keyCode !== 229;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("scanCode", this.scanCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("characterCodePoint", this.characterCodePoint));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return raw_keyboard_windows.RawKeyEventDataWindows.is(other) && other.keyCode === this.keyCode && other.scanCode === this.scanCode && other.characterCodePoint === this.characterCodePoint && other.modifiers === this.modifiers;
    }
    get hashCode() {
      return core.Object.hash(this.keyCode, this.scanCode, this.characterCodePoint, this.modifiers);
    }
  };
  (raw_keyboard_windows.RawKeyEventDataWindows.new = function(opts) {
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let characterCodePoint = opts && 'characterCodePoint' in opts ? opts.characterCodePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[keyCode$] = keyCode;
    this[scanCode$] = scanCode;
    this[characterCodePoint$] = characterCodePoint;
    this[modifiers$] = modifiers;
    if (!(keyCode !== null)) dart.assertFailed(null, I[17], 38, 15, "keyCode != null");
    if (!(scanCode !== null)) dart.assertFailed(null, I[17], 39, 15, "scanCode != null");
    if (!(characterCodePoint !== null)) dart.assertFailed(null, I[17], 40, 15, "characterCodePoint != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[17], 41, 15, "modifiers != null");
    raw_keyboard_windows.RawKeyEventDataWindows.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_windows.RawKeyEventDataWindows.prototype;
  dart.addTypeTests(raw_keyboard_windows.RawKeyEventDataWindows);
  dart.addTypeCaches(raw_keyboard_windows.RawKeyEventDataWindows);
  dart.setMethodSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getMethods(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    [_isLeftRightModifierPressed]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getGetters(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key$46g.PhysicalKeyboardKey,
    logicalKey: keyboard_key$46g.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_windows.RawKeyEventDataWindows, I[20]);
  dart.setFieldSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getFields(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    characterCodePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ['modifierShift', 'modifierLeftShift', 'modifierRightShift', 'modifierControl', 'modifierLeftControl', 'modifierRightControl', 'modifierAlt', 'modifierLeftAlt', 'modifierRightAlt', 'modifierLeftMeta', 'modifierRightMeta', 'modifierCaps', 'modifierNumLock', 'modifierScrollLock']);
  dart.defineExtensionMethods(raw_keyboard_windows.RawKeyEventDataWindows, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_windows.RawKeyEventDataWindows, ['hashCode']);
  dart.defineLazy(raw_keyboard_windows.RawKeyEventDataWindows, {
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierControl*/get modifierControl() {
      return 8;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftControl*/get modifierLeftControl() {
      return 16;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightControl*/get modifierRightControl() {
      return 32;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierAlt*/get modifierAlt() {
      return 64;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftAlt*/get modifierLeftAlt() {
      return 128;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightAlt*/get modifierRightAlt() {
      return 256;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftMeta*/get modifierLeftMeta() {
      return 512;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightMeta*/get modifierRightMeta() {
      return 1024;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierCaps*/get modifierCaps() {
      return 2048;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierNumLock*/get modifierNumLock() {
      return 4096;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierScrollLock*/get modifierScrollLock() {
      return 8192;
    }
  }, false);
  dart.defineLazy(raw_keyboard_windows, {
    /*raw_keyboard_windows._vkProcessKey*/get _vkProcessKey() {
      return 229;
    }
  }, false);
  var code$0 = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.code");
  var key$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.key");
  var location$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.location");
  var metaState$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.metaState");
  var keyCode$0 = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.keyCode");
  raw_keyboard_web.RawKeyEventDataWeb = class RawKeyEventDataWeb extends raw_keyboard.RawKeyEventData {
    get code() {
      return this[code$0];
    }
    set code(value) {
      super.code = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get keyCode() {
      return this[keyCode$0];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    static ['_#new#tearOff'](opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let location = opts && 'location' in opts ? opts.location : 0;
      let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      return new raw_keyboard_web.RawKeyEventDataWeb.new({code: code, key: key, location: location, metaState: metaState, keyCode: keyCode});
    }
    get keyLabel() {
      let t26;
      return this.key === "Unidentified" ? "" : (t26 = raw_keyboard_web._unicodeChar(this.key), t26 == null ? "" : t26);
    }
    get physicalKey() {
      let t26;
      t26 = keyboard_maps$46g.kWebToPhysicalKey[$_get](this.code);
      return t26 == null ? new keyboard_key$46g.PhysicalKeyboardKey.new(98784247808.0 + this.code[$hashCode]) : t26;
    }
    get logicalKey() {
      let t26;
      let maybeLocationKey = (t26 = keyboard_maps$46g.kWebLocationMap[$_get](this.key), t26 == null ? null : t26[$_get](this.location));
      if (maybeLocationKey != null) {
        return maybeLocationKey;
      }
      let newKey = keyboard_maps$46g.kWebToLogicalKey[$_get](this.code);
      if (newKey != null) {
        return newKey;
      }
      let isPrintable = this.key.length === 1;
      if (isPrintable) {
        return new keyboard_key$46g.LogicalKeyboardKey.new(this.key[$toLowerCase]()[$codeUnitAt](0));
      }
      return new keyboard_key$46g.LogicalKeyboardKey.new(this.code[$hashCode] + 98784247808.0);
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      switch (key) {
        case C[89] || CT.C89:
          {
            return (this.metaState & 4) !== 0;
          }
        case C[90] || CT.C90:
          {
            return (this.metaState & 1) !== 0;
          }
        case C[91] || CT.C91:
          {
            return (this.metaState & 2) !== 0;
          }
        case C[92] || CT.C92:
          {
            return (this.metaState & 8) !== 0;
          }
        case C[95] || CT.C95:
          {
            return (this.metaState & 16) !== 0;
          }
        case C[93] || CT.C93:
          {
            return (this.metaState & 32) !== 0;
          }
        case C[94] || CT.C94:
          {
            return (this.metaState & 64) !== 0;
          }
        case C[96] || CT.C96:
        case C[97] || CT.C97:
          {
            return false;
          }
      }
    }
    getModifierSide(key) {
      return raw_keyboard.KeyboardSide.any;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("code", this.code));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("key", this.key));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("location", this.location));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("metaState", this.metaState));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return raw_keyboard_web.RawKeyEventDataWeb.is(other) && other.code === this.code && other.key === this.key && other.location === this.location && other.metaState === this.metaState && other.keyCode === this.keyCode;
    }
    get hashCode() {
      return core.Object.hash(this.code, this.key, this.location, this.metaState, this.keyCode);
    }
  };
  (raw_keyboard_web.RawKeyEventDataWeb.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let location = opts && 'location' in opts ? opts.location : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    this[code$0] = code;
    this[key$] = key;
    this[location$] = location;
    this[metaState$] = metaState;
    this[keyCode$0] = keyCode;
    if (!(code !== null)) dart.assertFailed(null, I[21], 38, 16, "code != null");
    if (!(metaState !== null)) dart.assertFailed(null, I[21], 39, 16, "metaState != null");
    raw_keyboard_web.RawKeyEventDataWeb.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_web.RawKeyEventDataWeb.prototype;
  dart.addTypeTests(raw_keyboard_web.RawKeyEventDataWeb);
  dart.addTypeCaches(raw_keyboard_web.RawKeyEventDataWeb);
  dart.setMethodSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getMethods(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getGetters(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key$46g.PhysicalKeyboardKey,
    logicalKey: keyboard_key$46g.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_web.RawKeyEventDataWeb, I[22]);
  dart.setFieldSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getFields(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    code: dart.finalFieldType(core.String),
    key: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ['modifierNone', 'modifierShift', 'modifierAlt', 'modifierControl', 'modifierMeta', 'modifierNumLock', 'modifierCapsLock', 'modifierScrollLock']);
  dart.defineExtensionMethods(raw_keyboard_web.RawKeyEventDataWeb, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_web.RawKeyEventDataWeb, ['hashCode']);
  dart.defineLazy(raw_keyboard_web.RawKeyEventDataWeb, {
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierControl*/get modifierControl() {
      return 4;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierNumLock*/get modifierNumLock() {
      return 16;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierCapsLock*/get modifierCapsLock() {
      return 32;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierScrollLock*/get modifierScrollLock() {
      return 64;
    }
  }, false);
  raw_keyboard_web._unicodeChar = function _unicodeChar(key) {
    if (key.length === 1) {
      return key[$substring](0, 1);
    }
    return null;
  };
  var characters$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.characters");
  var charactersIgnoringModifiers$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.charactersIgnoringModifiers");
  var keyCode$1 = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.keyCode");
  var modifiers$0 = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.modifiers");
  var specifiedLogicalKey$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.specifiedLogicalKey");
  var _isLeftRightModifierPressed$ = dart.privateName(raw_keyboard_macos, "_isLeftRightModifierPressed");
  raw_keyboard_macos.RawKeyEventDataMacOs = class RawKeyEventDataMacOs extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$1];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$0];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get specifiedLogicalKey() {
      return this[specifiedLogicalKey$];
    }
    set specifiedLogicalKey(value) {
      super.specifiedLogicalKey = value;
    }
    static ['_#new#tearOff'](opts) {
      let characters = opts && 'characters' in opts ? opts.characters : "";
      let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      let specifiedLogicalKey = opts && 'specifiedLogicalKey' in opts ? opts.specifiedLogicalKey : null;
      return new raw_keyboard_macos.RawKeyEventDataMacOs.new({characters: characters, charactersIgnoringModifiers: charactersIgnoringModifiers, keyCode: keyCode, modifiers: modifiers, specifiedLogicalKey: specifiedLogicalKey});
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t26;
      t26 = keyboard_maps$46g.kMacOsToPhysicalKey[$_get](this.keyCode);
      return t26 == null ? new keyboard_key$46g.PhysicalKeyboardKey.new(94489280512.0 + this.keyCode) : t26;
    }
    get logicalKey() {
      let t26, t26$;
      if (this.specifiedLogicalKey != null) {
        let key = dart.nullCheck(this.specifiedLogicalKey);
        t26 = keyboard_key$46g.LogicalKeyboardKey.findKeyByKeyId(key);
        return t26 == null ? new keyboard_key$46g.LogicalKeyboardKey.new(key) : t26;
      }
      let numPadKey = keyboard_maps$46g.kMacOsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      let knownKey = keyboard_maps$46g.kMacOsToLogicalKey[$_get](this.keyCode);
      if (knownKey != null) {
        return knownKey;
      }
      let character = null;
      if (this.keyLabel[$isNotEmpty]) {
        let codePoints = this.keyLabel[$runes][$toList]();
        if (codePoints[$length] === 1 && !keyboard_key$46g.LogicalKeyboardKey.isControlCharacter(this.keyLabel) && !raw_keyboard_macos.RawKeyEventDataMacOs._isUnprintableKey(this.keyLabel)) {
          character = raw_keyboard_macos.runeToLowerCase(codePoints[$_get](0));
        }
      }
      if (character != null) {
        let keyId = (0 | (dart.notNull(character) & 4294967295.0) >>> 0) >>> 0;
        t26$ = keyboard_key$46g.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t26$ == null ? new keyboard_key$46g.LogicalKeyboardKey.new(keyId) : t26$;
      }
      return new keyboard_key$46g.LogicalKeyboardKey.new((this.keyCode | 85899345920.0) >>> 0);
    }
    [_isLeftRightModifierPressed$](side, anyMask, leftMask, rightMask) {
      if ((this.modifiers & anyMask) === 0) {
        return false;
      }
      let anyOnly = (this.modifiers & (leftMask | rightMask | anyMask) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C[85] || CT.C85:
          {
            return true;
          }
        case C[86] || CT.C86:
          {
            return (this.modifiers & leftMask) !== 0 && (this.modifiers & rightMask) !== 0 || anyOnly;
          }
        case C[87] || CT.C87:
          {
            return (this.modifiers & leftMask) !== 0 || anyOnly;
          }
        case C[88] || CT.C88:
          {
            return (this.modifiers & rightMask) !== 0 || anyOnly;
          }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      let independentModifier = (this.modifiers & 4294901760.0) >>> 0;
      let result = null;
      switch (key) {
        case C[89] || CT.C89:
          {
            result = this[_isLeftRightModifierPressed$](side, (independentModifier & 262144) >>> 0, 1, 8192);
            break;
          }
        case C[90] || CT.C90:
          {
            result = this[_isLeftRightModifierPressed$](side, (independentModifier & 131072) >>> 0, 2, 4);
            break;
          }
        case C[91] || CT.C91:
          {
            result = this[_isLeftRightModifierPressed$](side, (independentModifier & 524288) >>> 0, 32, 64);
            break;
          }
        case C[92] || CT.C92:
          {
            result = this[_isLeftRightModifierPressed$](side, (independentModifier & 1048576) >>> 0, 8, 16);
            break;
          }
        case C[93] || CT.C93:
          {
            result = (independentModifier & 65536) !== 0;
            break;
          }
        case C[96] || CT.C96:
        case C[95] || CT.C95:
        case C[97] || CT.C97:
        case C[94] || CT.C94:
          {
            result = false;
            break;
          }
      }
      if (!(!result || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", I[23], 195, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      const findSide = (anyMask, leftMask, rightMask) => {
        let combinedMask = (leftMask | rightMask) >>> 0;
        let combined = (this.modifiers & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (this.modifiers & (combinedMask | anyMask) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[89] || CT.C89:
          {
            return findSide(262144, 1, 8192);
          }
        case C[90] || CT.C90:
          {
            return findSide(131072, 2, 4);
          }
        case C[91] || CT.C91:
          {
            return findSide(524288, 32, 64);
          }
        case C[92] || CT.C92:
          {
            return findSide(1048576, 8, 16);
          }
        case C[93] || CT.C93:
        case C[95] || CT.C95:
        case C[94] || CT.C94:
        case C[96] || CT.C96:
        case C[97] || CT.C97:
          {
            return raw_keyboard.KeyboardSide.all;
          }
      }
    }
    shouldDispatchEvent() {
      return !this.logicalKey._equals(keyboard_key$46g.LogicalKeyboardKey.fn);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("characters", this.characters));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("charactersIgnoringModifiers", this.charactersIgnoringModifiers));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
      properties.add(new (T$.DiagnosticsPropertyOfintN()).new("specifiedLogicalKey", this.specifiedLogicalKey, {defaultValue: null}));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return raw_keyboard_macos.RawKeyEventDataMacOs.is(other) && other.characters === this.characters && other.charactersIgnoringModifiers === this.charactersIgnoringModifiers && other.keyCode === this.keyCode && other.modifiers === this.modifiers;
    }
    get hashCode() {
      return core.Object.hash(this.characters, this.charactersIgnoringModifiers, this.keyCode, this.modifiers);
    }
    static _isUnprintableKey(label) {
      if (label.length !== 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit >= 63232 && codeUnit <= 63743;
    }
  };
  (raw_keyboard_macos.RawKeyEventDataMacOs.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    let specifiedLogicalKey = opts && 'specifiedLogicalKey' in opts ? opts.specifiedLogicalKey : null;
    this[characters$] = characters;
    this[charactersIgnoringModifiers$] = charactersIgnoringModifiers;
    this[keyCode$1] = keyCode;
    this[modifiers$0] = modifiers;
    this[specifiedLogicalKey$] = specifiedLogicalKey;
    if (!(characters !== null)) dart.assertFailed(null, I[23], 45, 15, "characters != null");
    if (!(charactersIgnoringModifiers !== null)) dart.assertFailed(null, I[23], 46, 15, "charactersIgnoringModifiers != null");
    if (!(keyCode !== null)) dart.assertFailed(null, I[23], 47, 15, "keyCode != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[23], 48, 15, "modifiers != null");
    raw_keyboard_macos.RawKeyEventDataMacOs.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_macos.RawKeyEventDataMacOs.prototype;
  dart.addTypeTests(raw_keyboard_macos.RawKeyEventDataMacOs);
  dart.addTypeCaches(raw_keyboard_macos.RawKeyEventDataMacOs);
  dart.setMethodSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getMethods(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    [_isLeftRightModifierPressed$]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setStaticMethodSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ['_isUnprintableKey']);
  dart.setGetterSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getGetters(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key$46g.PhysicalKeyboardKey,
    logicalKey: keyboard_key$46g.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_macos.RawKeyEventDataMacOs, I[24]);
  dart.setFieldSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getFields(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int),
    specifiedLogicalKey: dart.finalFieldType(dart.nullable(core.int))
  }));
  dart.setStaticFieldSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ['modifierCapsLock', 'modifierShift', 'modifierLeftShift', 'modifierRightShift', 'modifierControl', 'modifierLeftControl', 'modifierRightControl', 'modifierOption', 'modifierLeftOption', 'modifierRightOption', 'modifierCommand', 'modifierLeftCommand', 'modifierRightCommand', 'modifierNumericPad', 'modifierHelp', 'modifierFunction', 'deviceIndependentMask']);
  dart.defineExtensionMethods(raw_keyboard_macos.RawKeyEventDataMacOs, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_macos.RawKeyEventDataMacOs, ['hashCode']);
  dart.defineLazy(raw_keyboard_macos.RawKeyEventDataMacOs, {
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  }, false);
  raw_keyboard_macos.runeToLowerCase = function runeToLowerCase(rune) {
    if (rune > 55295) {
      return rune;
    }
    return core.String.fromCharCode(rune)[$toLowerCase]()[$codeUnitAt](0);
  };
  var keyHelper$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.keyHelper");
  var unicodeScalarValues$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.unicodeScalarValues");
  var scanCode$0 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.scanCode");
  var keyCode$2 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.keyCode");
  var modifiers$1 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.modifiers");
  var isDown$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.isDown");
  var specifiedLogicalKey$0 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.specifiedLogicalKey");
  raw_keyboard_linux.RawKeyEventDataLinux = class RawKeyEventDataLinux extends raw_keyboard.RawKeyEventData {
    get keyHelper() {
      return this[keyHelper$];
    }
    set keyHelper(value) {
      super.keyHelper = value;
    }
    get unicodeScalarValues() {
      return this[unicodeScalarValues$];
    }
    set unicodeScalarValues(value) {
      super.unicodeScalarValues = value;
    }
    get scanCode() {
      return this[scanCode$0];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get keyCode() {
      return this[keyCode$2];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$1];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get isDown() {
      return this[isDown$];
    }
    set isDown(value) {
      super.isDown = value;
    }
    get specifiedLogicalKey() {
      return this[specifiedLogicalKey$0];
    }
    set specifiedLogicalKey(value) {
      super.specifiedLogicalKey = value;
    }
    static ['_#new#tearOff'](opts) {
      let keyHelper = opts && 'keyHelper' in opts ? opts.keyHelper : null;
      let unicodeScalarValues = opts && 'unicodeScalarValues' in opts ? opts.unicodeScalarValues : 0;
      let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      let specifiedLogicalKey = opts && 'specifiedLogicalKey' in opts ? opts.specifiedLogicalKey : null;
      return new raw_keyboard_linux.RawKeyEventDataLinux.new({keyHelper: keyHelper, unicodeScalarValues: unicodeScalarValues, scanCode: scanCode, keyCode: keyCode, modifiers: modifiers, isDown: isDown, specifiedLogicalKey: specifiedLogicalKey});
    }
    get keyLabel() {
      return this.unicodeScalarValues === 0 ? "" : core.String.fromCharCode(this.unicodeScalarValues);
    }
    get physicalKey() {
      let t26;
      t26 = keyboard_maps$46g.kLinuxToPhysicalKey[$_get](this.scanCode);
      return t26 == null ? new keyboard_key$46g.PhysicalKeyboardKey.new(98784247808.0 + this.scanCode) : t26;
    }
    get logicalKey() {
      let t26, t26$;
      if (this.specifiedLogicalKey != null) {
        let key = dart.nullCheck(this.specifiedLogicalKey);
        t26 = keyboard_key$46g.LogicalKeyboardKey.findKeyByKeyId(key);
        return t26 == null ? new keyboard_key$46g.LogicalKeyboardKey.new(key) : t26;
      }
      let numPadKey = this.keyHelper.numpadKey(this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !keyboard_key$46g.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) {
        let keyId = (0 | (this.unicodeScalarValues & 4294967295.0) >>> 0) >>> 0;
        t26$ = keyboard_key$46g.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t26$ == null ? new keyboard_key$46g.LogicalKeyboardKey.new(keyId) : t26$;
      }
      let newKey = this.keyHelper.logicalKey(this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key$46g.LogicalKeyboardKey.new((this.keyCode | this.keyHelper.platformPlane) >>> 0);
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      return this.keyHelper.isModifierPressed(key, this.modifiers, {side: side, keyCode: this.keyCode, isDown: this.isDown});
    }
    getModifierSide(key) {
      return this.keyHelper.getModifierSide(key);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("toolkit", this.keyHelper.debugToolkit));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("unicodeScalarValues", this.unicodeScalarValues));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("scanCode", this.scanCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("isDown", this.isDown));
      properties.add(new (T$.DiagnosticsPropertyOfintN()).new("specifiedLogicalKey", this.specifiedLogicalKey, {defaultValue: null}));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return raw_keyboard_linux.RawKeyEventDataLinux.is(other) && other.keyHelper[$runtimeType]._equals(this.keyHelper[$runtimeType]) && other.unicodeScalarValues === this.unicodeScalarValues && other.scanCode === this.scanCode && other.keyCode === this.keyCode && other.modifiers === this.modifiers && other.isDown === this.isDown;
    }
    get hashCode() {
      return core.Object.hash(this.keyHelper[$runtimeType], this.unicodeScalarValues, this.scanCode, this.keyCode, this.modifiers, this.isDown);
    }
  };
  (raw_keyboard_linux.RawKeyEventDataLinux.new = function(opts) {
    let keyHelper = opts && 'keyHelper' in opts ? opts.keyHelper : null;
    let unicodeScalarValues = opts && 'unicodeScalarValues' in opts ? opts.unicodeScalarValues : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    let isDown = opts && 'isDown' in opts ? opts.isDown : null;
    let specifiedLogicalKey = opts && 'specifiedLogicalKey' in opts ? opts.specifiedLogicalKey : null;
    this[keyHelper$] = keyHelper;
    this[unicodeScalarValues$] = unicodeScalarValues;
    this[scanCode$0] = scanCode;
    this[keyCode$2] = keyCode;
    this[modifiers$1] = modifiers;
    this[isDown$] = isDown;
    this[specifiedLogicalKey$0] = specifiedLogicalKey;
    if (!(scanCode !== null)) dart.assertFailed(null, I[25], 36, 15, "scanCode != null");
    if (!(unicodeScalarValues !== null)) dart.assertFailed(null, I[25], 37, 15, "unicodeScalarValues != null");
    if (!((unicodeScalarValues & ~4294967295.0 >>> 0) === 0)) dart.assertFailed(null, I[25], 38, 15, "(unicodeScalarValues & ~LogicalKeyboardKey.valueMask) == 0");
    if (!(keyCode !== null)) dart.assertFailed(null, I[25], 39, 15, "keyCode != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[25], 40, 15, "modifiers != null");
    if (!(keyHelper !== null)) dart.assertFailed(null, I[25], 41, 15, "keyHelper != null");
    raw_keyboard_linux.RawKeyEventDataLinux.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_linux.RawKeyEventDataLinux.prototype;
  dart.addTypeTests(raw_keyboard_linux.RawKeyEventDataLinux);
  dart.addTypeCaches(raw_keyboard_linux.RawKeyEventDataLinux);
  dart.setMethodSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key$46g.PhysicalKeyboardKey,
    logicalKey: keyboard_key$46g.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_linux.RawKeyEventDataLinux, I[26]);
  dart.setFieldSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getFields(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyHelper: dart.finalFieldType(raw_keyboard_linux.KeyHelper),
    unicodeScalarValues: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int),
    isDown: dart.finalFieldType(core.bool),
    specifiedLogicalKey: dart.finalFieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(raw_keyboard_linux.RawKeyEventDataLinux, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_linux.RawKeyEventDataLinux, ['hashCode']);
  raw_keyboard_linux.KeyHelper = class KeyHelper extends core.Object {
    static new(toolkit) {
      if (toolkit === "glfw") {
        return new raw_keyboard_linux.GLFWKeyHelper.new();
      } else if (toolkit === "gtk") {
        return new raw_keyboard_linux.GtkKeyHelper.new();
      } else {
        dart.throw(assertions.FlutterError.new("Window toolkit not recognized: " + toolkit));
      }
    }
    static ['_#new#tearOff'](toolkit) {
      return raw_keyboard_linux.KeyHelper.new(toolkit);
    }
  };
  (raw_keyboard_linux.KeyHelper[dart.mixinNew] = function() {
  }).prototype = raw_keyboard_linux.KeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.KeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.KeyHelper);
  dart.setStaticMethodSignature(raw_keyboard_linux.KeyHelper, () => ['new']);
  dart.setLibraryUri(raw_keyboard_linux.KeyHelper, I[26]);
  var _mergeModifiers = dart.privateName(raw_keyboard_linux, "_mergeModifiers");
  raw_keyboard_linux.GLFWKeyHelper = class GLFWKeyHelper extends core.Object {
    get debugToolkit() {
      return "GLFW";
    }
    [_mergeModifiers](opts) {
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : null;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      let modifierChange = 0;
      switch (keyCode) {
        case 340:
        case 344:
          {
            modifierChange = 1;
            break;
          }
        case 341:
        case 345:
          {
            modifierChange = 2;
            break;
          }
        case 342:
        case 346:
          {
            modifierChange = 4;
            break;
          }
        case 343:
        case 347:
          {
            modifierChange = 8;
            break;
          }
        case 280:
          {
            modifierChange = 16;
            break;
          }
        case 282:
          {
            modifierChange = 32;
            break;
          }
        default:
          {
            break;
          }
      }
      return isDown ? (modifiers | modifierChange) >>> 0 : (modifiers & ~modifierChange >>> 0) >>> 0;
    }
    isModifierPressed(key, modifiers, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      modifiers = this[_mergeModifiers]({modifiers: modifiers, keyCode: keyCode, isDown: isDown});
      switch (key) {
        case C[89] || CT.C89:
          {
            return (modifiers & 2) !== 0;
          }
        case C[90] || CT.C90:
          {
            return (modifiers & 1) !== 0;
          }
        case C[91] || CT.C91:
          {
            return (modifiers & 4) !== 0;
          }
        case C[92] || CT.C92:
          {
            return (modifiers & 8) !== 0;
          }
        case C[93] || CT.C93:
          {
            return (modifiers & 16) !== 0;
          }
        case C[95] || CT.C95:
          {
            return (modifiers & 32) !== 0;
          }
        case C[96] || CT.C96:
        case C[97] || CT.C97:
        case C[94] || CT.C94:
          {
            return false;
          }
      }
    }
    getModifierSide(key) {
      return raw_keyboard.KeyboardSide.all;
    }
    numpadKey(keyCode) {
      return keyboard_maps$46g.kGlfwNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      return keyboard_maps$46g.kGlfwToLogicalKey[$_get](keyCode);
    }
    get platformPlane() {
      return 103079215104.0;
    }
    static ['_#new#tearOff']() {
      return new raw_keyboard_linux.GLFWKeyHelper.new();
    }
  };
  (raw_keyboard_linux.GLFWKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GLFWKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GLFWKeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.GLFWKeyHelper);
  raw_keyboard_linux.GLFWKeyHelper[dart.implements] = () => [raw_keyboard_linux.KeyHelper];
  dart.setMethodSignature(raw_keyboard_linux.GLFWKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GLFWKeyHelper.__proto__),
    [_mergeModifiers]: dart.fnType(core.int, [], {}, {isDown: core.bool, keyCode: core.int, modifiers: core.int}),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {side: raw_keyboard.KeyboardSide}, {isDown: core.bool, keyCode: core.int}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(dart.nullable(keyboard_key$46g.LogicalKeyboardKey), [core.int]),
    logicalKey: dart.fnType(dart.nullable(keyboard_key$46g.LogicalKeyboardKey), [core.int])
  }));
  dart.setGetterSignature(raw_keyboard_linux.GLFWKeyHelper, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.GLFWKeyHelper.__proto__),
    debugToolkit: core.String,
    platformPlane: core.int
  }));
  dart.setLibraryUri(raw_keyboard_linux.GLFWKeyHelper, I[26]);
  dart.setStaticFieldSignature(raw_keyboard_linux.GLFWKeyHelper, () => ['modifierCapsLock', 'modifierShift', 'modifierControl', 'modifierAlt', 'modifierMeta', 'modifierNumericPad']);
  dart.defineLazy(raw_keyboard_linux.GLFWKeyHelper, {
    /*raw_keyboard_linux.GLFWKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 16;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierControl*/get modifierControl() {
      return 2;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierAlt*/get modifierAlt() {
      return 4;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierNumericPad*/get modifierNumericPad() {
      return 32;
    }
  }, false);
  raw_keyboard_linux.GtkKeyHelper = class GtkKeyHelper extends core.Object {
    get debugToolkit() {
      return "GTK";
    }
    [_mergeModifiers](opts) {
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : null;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      let modifierChange = 0;
      switch (keyCode) {
        case 65505:
        case 65506:
          {
            modifierChange = 1;
            break;
          }
        case 65507:
        case 65508:
          {
            modifierChange = 4;
            break;
          }
        case 65513:
        case 65514:
          {
            modifierChange = 8;
            break;
          }
        case 65515:
        case 65516:
          {
            modifierChange = 67108864;
            break;
          }
        case 65509:
        case 65510:
          {
            modifierChange = 2;
            break;
          }
        case 65407:
          {
            modifierChange = 16;
            break;
          }
        default:
          {
            break;
          }
      }
      return isDown ? (modifiers | modifierChange) >>> 0 : (modifiers & ~modifierChange >>> 0) >>> 0;
    }
    isModifierPressed(key, modifiers, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      modifiers = this[_mergeModifiers]({modifiers: modifiers, keyCode: keyCode, isDown: isDown});
      switch (key) {
        case C[89] || CT.C89:
          {
            return (modifiers & 4) !== 0;
          }
        case C[90] || CT.C90:
          {
            return (modifiers & 1) !== 0;
          }
        case C[91] || CT.C91:
          {
            return (modifiers & 8) !== 0;
          }
        case C[92] || CT.C92:
          {
            return (modifiers & 67108864) !== 0;
          }
        case C[93] || CT.C93:
          {
            return (modifiers & 2) !== 0;
          }
        case C[95] || CT.C95:
          {
            return (modifiers & 16) !== 0;
          }
        case C[96] || CT.C96:
        case C[97] || CT.C97:
        case C[94] || CT.C94:
          {
            return false;
          }
      }
    }
    getModifierSide(key) {
      return raw_keyboard.KeyboardSide.all;
    }
    numpadKey(keyCode) {
      return keyboard_maps$46g.kGtkNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      return keyboard_maps$46g.kGtkToLogicalKey[$_get](keyCode);
    }
    get platformPlane() {
      return 90194313216.0;
    }
    static ['_#new#tearOff']() {
      return new raw_keyboard_linux.GtkKeyHelper.new();
    }
  };
  (raw_keyboard_linux.GtkKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GtkKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GtkKeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.GtkKeyHelper);
  raw_keyboard_linux.GtkKeyHelper[dart.implements] = () => [raw_keyboard_linux.KeyHelper];
  dart.setMethodSignature(raw_keyboard_linux.GtkKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GtkKeyHelper.__proto__),
    [_mergeModifiers]: dart.fnType(core.int, [], {}, {isDown: core.bool, keyCode: core.int, modifiers: core.int}),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {side: raw_keyboard.KeyboardSide}, {isDown: core.bool, keyCode: core.int}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(dart.nullable(keyboard_key$46g.LogicalKeyboardKey), [core.int]),
    logicalKey: dart.fnType(dart.nullable(keyboard_key$46g.LogicalKeyboardKey), [core.int])
  }));
  dart.setGetterSignature(raw_keyboard_linux.GtkKeyHelper, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.GtkKeyHelper.__proto__),
    debugToolkit: core.String,
    platformPlane: core.int
  }));
  dart.setLibraryUri(raw_keyboard_linux.GtkKeyHelper, I[26]);
  dart.setStaticFieldSignature(raw_keyboard_linux.GtkKeyHelper, () => ['modifierShift', 'modifierCapsLock', 'modifierControl', 'modifierMod1', 'modifierMod2', 'modifierMeta']);
  dart.defineLazy(raw_keyboard_linux.GtkKeyHelper, {
    /*raw_keyboard_linux.GtkKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 2;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierControl*/get modifierControl() {
      return 4;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMod1*/get modifierMod1() {
      return 8;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMod2*/get modifierMod2() {
      return 16;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMeta*/get modifierMeta() {
      return 67108864;
    }
  }, false);
  var characters$0 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.characters");
  var charactersIgnoringModifiers$0 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.charactersIgnoringModifiers");
  var keyCode$3 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.keyCode");
  var modifiers$2 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.modifiers");
  var _isLeftRightModifierPressed$0 = dart.privateName(raw_keyboard_ios, "_isLeftRightModifierPressed");
  raw_keyboard_ios.RawKeyEventDataIos = class RawKeyEventDataIos extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$0];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$0];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$3];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$2];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    static ['_#new#tearOff'](opts) {
      let characters = opts && 'characters' in opts ? opts.characters : "";
      let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      return new raw_keyboard_ios.RawKeyEventDataIos.new({characters: characters, charactersIgnoringModifiers: charactersIgnoringModifiers, keyCode: keyCode, modifiers: modifiers});
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t26;
      t26 = keyboard_maps$46g.kIosToPhysicalKey[$_get](this.keyCode);
      return t26 == null ? new keyboard_key$46g.PhysicalKeyboardKey.new(81604378624.0 + this.keyCode) : t26;
    }
    get logicalKey() {
      let t26;
      let numPadKey = keyboard_maps$46g.kIosNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      let newKey = raw_keyboard_ios._kIosToLogicalMap[$_get](this.keyLabel);
      if (newKey != null) {
        return newKey;
      }
      let knownKey = keyboard_maps$46g.kIosToLogicalKey[$_get](this.keyCode);
      if (knownKey != null) {
        return knownKey;
      }
      if (this.keyLabel[$isNotEmpty] && !keyboard_key$46g.LogicalKeyboardKey.isControlCharacter(this.keyLabel) && !raw_keyboard_ios.RawKeyEventDataIos._isUnprintableKey(this.keyLabel)) {
        if (!(this.charactersIgnoringModifiers.length <= 2)) dart.assertFailed(null, I[27], 133, 14, "charactersIgnoringModifiers.length <= 2");
        let codeUnit = this.charactersIgnoringModifiers[$codeUnitAt](0);
        if (this.charactersIgnoringModifiers.length === 2) {
          let secondCode = this.charactersIgnoringModifiers[$codeUnitAt](1);
          codeUnit = (codeUnit << 16 | secondCode) >>> 0;
        }
        let keyId = (0 | (codeUnit & 4294967295.0) >>> 0) >>> 0;
        t26 = keyboard_key$46g.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t26 == null ? new keyboard_key$46g.LogicalKeyboardKey.new(keyId) : t26;
      }
      return new keyboard_key$46g.LogicalKeyboardKey.new((this.keyCode | 81604378624.0) >>> 0);
    }
    static _isUnprintableKey(label) {
      if (label.length !== 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit >= 63232 && codeUnit <= 63743;
    }
    [_isLeftRightModifierPressed$0](side, anyMask, leftMask, rightMask) {
      if ((this.modifiers & anyMask) === 0) {
        return false;
      }
      let anyOnly = (this.modifiers & (leftMask | rightMask | anyMask) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C[85] || CT.C85:
          {
            return true;
          }
        case C[86] || CT.C86:
          {
            return (this.modifiers & leftMask) !== 0 && (this.modifiers & rightMask) !== 0 || anyOnly;
          }
        case C[87] || CT.C87:
          {
            return (this.modifiers & leftMask) !== 0 || anyOnly;
          }
        case C[88] || CT.C88:
          {
            return (this.modifiers & rightMask) !== 0 || anyOnly;
          }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      let independentModifier = (this.modifiers & 4294901760.0) >>> 0;
      let result = null;
      switch (key) {
        case C[89] || CT.C89:
          {
            result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 262144) >>> 0, 1, 8192);
            break;
          }
        case C[90] || CT.C90:
          {
            result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 131072) >>> 0, 2, 4);
            break;
          }
        case C[91] || CT.C91:
          {
            result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 524288) >>> 0, 32, 64);
            break;
          }
        case C[92] || CT.C92:
          {
            result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 1048576) >>> 0, 8, 16);
            break;
          }
        case C[93] || CT.C93:
          {
            result = (independentModifier & 65536) !== 0;
            break;
          }
        case C[96] || CT.C96:
        case C[95] || CT.C95:
        case C[97] || CT.C97:
        case C[94] || CT.C94:
          {
            result = false;
            break;
          }
      }
      if (!(!result || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", I[27], 219, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      const findSide = (anyMask, leftMask, rightMask) => {
        let combinedMask = (leftMask | rightMask) >>> 0;
        let combined = (this.modifiers & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (this.modifiers & (combinedMask | anyMask) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[89] || CT.C89:
          {
            return findSide(262144, 1, 8192);
          }
        case C[90] || CT.C90:
          {
            return findSide(131072, 2, 4);
          }
        case C[91] || CT.C91:
          {
            return findSide(524288, 32, 64);
          }
        case C[92] || CT.C92:
          {
            return findSide(1048576, 8, 16);
          }
        case C[93] || CT.C93:
        case C[95] || CT.C95:
        case C[94] || CT.C94:
        case C[96] || CT.C96:
        case C[97] || CT.C97:
          {
            return raw_keyboard.KeyboardSide.all;
          }
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("characters", this.characters));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("charactersIgnoringModifiers", this.charactersIgnoringModifiers));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return raw_keyboard_ios.RawKeyEventDataIos.is(other) && other.characters === this.characters && other.charactersIgnoringModifiers === this.charactersIgnoringModifiers && other.keyCode === this.keyCode && other.modifiers === this.modifiers;
    }
    get hashCode() {
      return core.Object.hash(this.characters, this.charactersIgnoringModifiers, this.keyCode, this.modifiers);
    }
  };
  (raw_keyboard_ios.RawKeyEventDataIos.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[characters$0] = characters;
    this[charactersIgnoringModifiers$0] = charactersIgnoringModifiers;
    this[keyCode$3] = keyCode;
    this[modifiers$2] = modifiers;
    if (!(characters !== null)) dart.assertFailed(null, I[27], 59, 15, "characters != null");
    if (!(charactersIgnoringModifiers !== null)) dart.assertFailed(null, I[27], 60, 15, "charactersIgnoringModifiers != null");
    if (!(keyCode !== null)) dart.assertFailed(null, I[27], 61, 15, "keyCode != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[27], 62, 15, "modifiers != null");
    raw_keyboard_ios.RawKeyEventDataIos.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_ios.RawKeyEventDataIos.prototype;
  dart.addTypeTests(raw_keyboard_ios.RawKeyEventDataIos);
  dart.addTypeCaches(raw_keyboard_ios.RawKeyEventDataIos);
  dart.setMethodSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getMethods(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    [_isLeftRightModifierPressed$0]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setStaticMethodSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ['_isUnprintableKey']);
  dart.setGetterSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getGetters(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key$46g.PhysicalKeyboardKey,
    logicalKey: keyboard_key$46g.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_ios.RawKeyEventDataIos, I[28]);
  dart.setFieldSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getFields(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ['modifierCapsLock', 'modifierShift', 'modifierLeftShift', 'modifierRightShift', 'modifierControl', 'modifierLeftControl', 'modifierRightControl', 'modifierOption', 'modifierLeftOption', 'modifierRightOption', 'modifierCommand', 'modifierLeftCommand', 'modifierRightCommand', 'modifierNumericPad', 'modifierHelp', 'modifierFunction', 'deviceIndependentMask']);
  dart.defineExtensionMethods(raw_keyboard_ios.RawKeyEventDataIos, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_ios.RawKeyEventDataIos, ['hashCode']);
  dart.defineLazy(raw_keyboard_ios.RawKeyEventDataIos, {
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  }, false);
  var LogicalKeyboardKey_keyId = dart.privateName(keyboard_key$46g, "LogicalKeyboardKey.keyId");
  dart.defineLazy(raw_keyboard_ios, {
    /*raw_keyboard_ios._kIosToLogicalMap*/get _kIosToLogicalMap() {
      return C[98] || CT.C98;
    }
  }, false);
  var hidUsage$ = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.hidUsage");
  var codePoint$ = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.codePoint");
  var modifiers$3 = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.modifiers");
  var _isLeftRightModifierPressed$1 = dart.privateName(raw_keyboard_fuchsia, "_isLeftRightModifierPressed");
  raw_keyboard_fuchsia.RawKeyEventDataFuchsia = class RawKeyEventDataFuchsia extends raw_keyboard.RawKeyEventData {
    get hidUsage() {
      return this[hidUsage$];
    }
    set hidUsage(value) {
      super.hidUsage = value;
    }
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get modifiers() {
      return this[modifiers$3];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    static ['_#new#tearOff'](opts) {
      let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
      let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      return new raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new({hidUsage: hidUsage, codePoint: codePoint, modifiers: modifiers});
    }
    get keyLabel() {
      return this.codePoint === 0 ? "" : core.String.fromCharCode(this.codePoint);
    }
    get logicalKey() {
      let t26;
      if (this.codePoint !== 0) {
        let flutterId = (0 | (this.codePoint & 4294967295.0) >>> 0) >>> 0;
        t26 = keyboard_maps$46g.kFuchsiaToLogicalKey[$_get](flutterId);
        return t26 == null ? new keyboard_key$46g.LogicalKeyboardKey.new((0 | (this.codePoint & 4294967295.0) >>> 0) >>> 0) : t26;
      }
      let newKey = keyboard_maps$46g.kFuchsiaToLogicalKey[$_get]((this.hidUsage | 77309411328.0) >>> 0);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key$46g.LogicalKeyboardKey.new((this.hidUsage | 77309411328.0) >>> 0);
    }
    get physicalKey() {
      let t26;
      t26 = keyboard_maps$46g.kFuchsiaToPhysicalKey[$_get](this.hidUsage);
      return t26 == null ? new keyboard_key$46g.PhysicalKeyboardKey.new(77309411328.0 + this.hidUsage) : t26;
    }
    [_isLeftRightModifierPressed$1](side, anyMask, leftMask, rightMask) {
      if ((this.modifiers & anyMask) === 0) {
        return false;
      }
      switch (side) {
        case C[85] || CT.C85:
          {
            return true;
          }
        case C[86] || CT.C86:
          {
            return (this.modifiers & leftMask) !== 0 && (this.modifiers & rightMask) !== 0;
          }
        case C[87] || CT.C87:
          {
            return (this.modifiers & leftMask) !== 0;
          }
        case C[88] || CT.C88:
          {
            return (this.modifiers & rightMask) !== 0;
          }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      if (!(side !== null)) dart.assertFailed(null, I[29], 110, 12, "side != null");
      switch (key) {
        case C[89] || CT.C89:
          {
            return this[_isLeftRightModifierPressed$1](side, 24, 8, 16);
          }
        case C[90] || CT.C90:
          {
            return this[_isLeftRightModifierPressed$1](side, 6, 2, 4);
          }
        case C[91] || CT.C91:
          {
            return this[_isLeftRightModifierPressed$1](side, 96, 32, 64);
          }
        case C[92] || CT.C92:
          {
            return this[_isLeftRightModifierPressed$1](side, 384, 128, 256);
          }
        case C[93] || CT.C93:
          {
            return (this.modifiers & 1) !== 0;
          }
        case C[95] || CT.C95:
        case C[94] || CT.C94:
        case C[96] || CT.C96:
        case C[97] || CT.C97:
          {
            return false;
          }
      }
    }
    getModifierSide(key) {
      const findSide = (anyMask, leftMask, rightMask) => {
        let combined = (this.modifiers & anyMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[89] || CT.C89:
          {
            return findSide(24, 8, 16);
          }
        case C[90] || CT.C90:
          {
            return findSide(6, 2, 4);
          }
        case C[91] || CT.C91:
          {
            return findSide(96, 32, 64);
          }
        case C[92] || CT.C92:
          {
            return findSide(384, 128, 256);
          }
        case C[93] || CT.C93:
          {
            return (this.modifiers & 1) === 0 ? null : raw_keyboard.KeyboardSide.all;
          }
        case C[95] || CT.C95:
        case C[94] || CT.C94:
        case C[96] || CT.C96:
        case C[97] || CT.C97:
          {
            return null;
          }
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("hidUsage", this.hidUsage));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("codePoint", this.codePoint));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return raw_keyboard_fuchsia.RawKeyEventDataFuchsia.is(other) && other.hidUsage === this.hidUsage && other.codePoint === this.codePoint && other.modifiers === this.modifiers;
    }
    get hashCode() {
      return core.Object.hash(this.hidUsage, this.codePoint, this.modifiers);
    }
  };
  (raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new = function(opts) {
    let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[hidUsage$] = hidUsage;
    this[codePoint$] = codePoint;
    this[modifiers$3] = modifiers;
    if (!(hidUsage !== null)) dart.assertFailed(null, I[29], 31, 15, "hidUsage != null");
    if (!(codePoint !== null)) dart.assertFailed(null, I[29], 32, 15, "codePoint != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[29], 33, 15, "modifiers != null");
    raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_fuchsia.RawKeyEventDataFuchsia.prototype;
  dart.addTypeTests(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  dart.addTypeCaches(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  dart.setMethodSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    [_isLeftRightModifierPressed$1]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getGetters(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    keyLabel: core.String,
    logicalKey: keyboard_key$46g.LogicalKeyboardKey,
    physicalKey: keyboard_key$46g.PhysicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, I[30]);
  dart.setFieldSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getFields(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    hidUsage: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ['modifierNone', 'modifierCapsLock', 'modifierLeftShift', 'modifierRightShift', 'modifierShift', 'modifierLeftControl', 'modifierRightControl', 'modifierControl', 'modifierLeftAlt', 'modifierRightAlt', 'modifierAlt', 'modifierLeftMeta', 'modifierRightMeta', 'modifierMeta']);
  dart.defineExtensionMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, ['hashCode']);
  dart.defineLazy(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, {
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierCapsLock*/get modifierCapsLock() {
      return 1;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierShift*/get modifierShift() {
      return 6;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftControl*/get modifierLeftControl() {
      return 8;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightControl*/get modifierRightControl() {
      return 16;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierControl*/get modifierControl() {
      return 24;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftAlt*/get modifierLeftAlt() {
      return 32;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightAlt*/get modifierRightAlt() {
      return 64;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierAlt*/get modifierAlt() {
      return 96;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftMeta*/get modifierLeftMeta() {
      return 128;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightMeta*/get modifierRightMeta() {
      return 256;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierMeta*/get modifierMeta() {
      return 384;
    }
  }, false);
  var flags$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.flags");
  var codePoint$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.codePoint");
  var plainCodePoint$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.plainCodePoint");
  var keyCode$4 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.keyCode");
  var scanCode$1 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.scanCode");
  var metaState$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.metaState");
  var eventSource$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.eventSource");
  var vendorId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.vendorId");
  var productId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.productId");
  var deviceId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.deviceId");
  var repeatCount$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.repeatCount");
  var _isLeftRightModifierPressed$2 = dart.privateName(raw_keyboard_android, "_isLeftRightModifierPressed");
  raw_keyboard_android.RawKeyEventDataAndroid = class RawKeyEventDataAndroid extends raw_keyboard.RawKeyEventData {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get codePoint() {
      return this[codePoint$0];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get plainCodePoint() {
      return this[plainCodePoint$];
    }
    set plainCodePoint(value) {
      super.plainCodePoint = value;
    }
    get keyCode() {
      return this[keyCode$4];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$1];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get metaState() {
      return this[metaState$0];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get eventSource() {
      return this[eventSource$];
    }
    set eventSource(value) {
      super.eventSource = value;
    }
    get vendorId() {
      return this[vendorId$];
    }
    set vendorId(value) {
      super.vendorId = value;
    }
    get productId() {
      return this[productId$];
    }
    set productId(value) {
      super.productId = value;
    }
    get deviceId() {
      return this[deviceId$];
    }
    set deviceId(value) {
      super.deviceId = value;
    }
    get repeatCount() {
      return this[repeatCount$];
    }
    set repeatCount(value) {
      super.repeatCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let flags = opts && 'flags' in opts ? opts.flags : 0;
      let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
      let plainCodePoint = opts && 'plainCodePoint' in opts ? opts.plainCodePoint : 0;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
      let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
      let eventSource = opts && 'eventSource' in opts ? opts.eventSource : 0;
      let vendorId = opts && 'vendorId' in opts ? opts.vendorId : 0;
      let productId = opts && 'productId' in opts ? opts.productId : 0;
      let deviceId = opts && 'deviceId' in opts ? opts.deviceId : 0;
      let repeatCount = opts && 'repeatCount' in opts ? opts.repeatCount : 0;
      return new raw_keyboard_android.RawKeyEventDataAndroid.new({flags: flags, codePoint: codePoint, plainCodePoint: plainCodePoint, keyCode: keyCode, scanCode: scanCode, metaState: metaState, eventSource: eventSource, vendorId: vendorId, productId: productId, deviceId: deviceId, repeatCount: repeatCount});
    }
    get keyLabel() {
      return this.plainCodePoint === 0 ? "" : core.String.fromCharCode((this.plainCodePoint & 2147483647) >>> 0);
    }
    get physicalKey() {
      if (keyboard_maps$46g.kAndroidToPhysicalKey[$containsKey](this.scanCode)) {
        return dart.nullCheck(keyboard_maps$46g.kAndroidToPhysicalKey[$_get](this.scanCode));
      }
      if ((this.eventSource & 16777232) >>> 0 === 16777232) {
        let foundKey = keyboard_maps$46g.kAndroidToLogicalKey[$_get](this.keyCode);
        if (dart.equals(foundKey, keyboard_key$46g.LogicalKeyboardKey.arrowUp)) {
          return keyboard_key$46g.PhysicalKeyboardKey.arrowUp;
        }
        if (dart.equals(foundKey, keyboard_key$46g.LogicalKeyboardKey.arrowDown)) {
          return keyboard_key$46g.PhysicalKeyboardKey.arrowDown;
        }
        if (dart.equals(foundKey, keyboard_key$46g.LogicalKeyboardKey.arrowLeft)) {
          return keyboard_key$46g.PhysicalKeyboardKey.arrowLeft;
        }
        if (dart.equals(foundKey, keyboard_key$46g.LogicalKeyboardKey.arrowRight)) {
          return keyboard_key$46g.PhysicalKeyboardKey.arrowRight;
        }
      }
      return new keyboard_key$46g.PhysicalKeyboardKey.new(73014444032.0 + this.scanCode);
    }
    get logicalKey() {
      let t26;
      let numPadKey = keyboard_maps$46g.kAndroidNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !keyboard_key$46g.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) {
        let combinedCodePoint = (this.plainCodePoint & 2147483647) >>> 0;
        let keyId = (0 | (combinedCodePoint & 4294967295.0) >>> 0) >>> 0;
        t26 = keyboard_key$46g.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t26 == null ? new keyboard_key$46g.LogicalKeyboardKey.new(keyId) : t26;
      }
      let newKey = keyboard_maps$46g.kAndroidToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key$46g.LogicalKeyboardKey.new((this.keyCode | 73014444032.0) >>> 0);
    }
    [_isLeftRightModifierPressed$2](side, anyMask, leftMask, rightMask) {
      if ((this.metaState & anyMask) === 0) {
        return false;
      }
      switch (side) {
        case C[85] || CT.C85:
          {
            return true;
          }
        case C[86] || CT.C86:
          {
            return (this.metaState & leftMask) !== 0 && (this.metaState & rightMask) !== 0;
          }
        case C[87] || CT.C87:
          {
            return (this.metaState & leftMask) !== 0;
          }
        case C[88] || CT.C88:
          {
            return (this.metaState & rightMask) !== 0;
          }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[85] || CT.C85;
      if (!(side !== null)) dart.assertFailed(null, I[31], 230, 12, "side != null");
      switch (key) {
        case C[89] || CT.C89:
          {
            return this[_isLeftRightModifierPressed$2](side, 4096, 8192, 16384);
          }
        case C[90] || CT.C90:
          {
            return this[_isLeftRightModifierPressed$2](side, 1, 64, 128);
          }
        case C[91] || CT.C91:
          {
            return this[_isLeftRightModifierPressed$2](side, 2, 16, 32);
          }
        case C[92] || CT.C92:
          {
            return this[_isLeftRightModifierPressed$2](side, 65536, 131072, 262144);
          }
        case C[93] || CT.C93:
          {
            return (this.metaState & 1048576) !== 0;
          }
        case C[95] || CT.C95:
          {
            return (this.metaState & 2097152) !== 0;
          }
        case C[94] || CT.C94:
          {
            return (this.metaState & 4194304) !== 0;
          }
        case C[96] || CT.C96:
          {
            return (this.metaState & 8) !== 0;
          }
        case C[97] || CT.C97:
          {
            return (this.metaState & 4) !== 0;
          }
      }
    }
    getModifierSide(key) {
      const findSide = (anyMask, leftMask, rightMask) => {
        let combinedMask = (leftMask | rightMask) >>> 0;
        let combined = (this.metaState & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        if ((this.metaState & anyMask) !== 0) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[89] || CT.C89:
          {
            return findSide(4096, 8192, 16384);
          }
        case C[90] || CT.C90:
          {
            return findSide(1, 64, 128);
          }
        case C[91] || CT.C91:
          {
            return findSide(2, 16, 32);
          }
        case C[92] || CT.C92:
          {
            return findSide(65536, 131072, 262144);
          }
        case C[93] || CT.C93:
        case C[95] || CT.C95:
        case C[94] || CT.C94:
        case C[96] || CT.C96:
        case C[97] || CT.C97:
          {
            return raw_keyboard.KeyboardSide.all;
          }
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("flags", this.flags));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("codePoint", this.codePoint));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("plainCodePoint", this.plainCodePoint));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("scanCode", this.scanCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("metaState", this.metaState));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return raw_keyboard_android.RawKeyEventDataAndroid.is(other) && other.flags === this.flags && other.codePoint === this.codePoint && other.plainCodePoint === this.plainCodePoint && other.keyCode === this.keyCode && other.scanCode === this.scanCode && other.metaState === this.metaState;
    }
    get hashCode() {
      return core.Object.hash(this.flags, this.codePoint, this.plainCodePoint, this.keyCode, this.scanCode, this.metaState);
    }
  };
  (raw_keyboard_android.RawKeyEventDataAndroid.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let plainCodePoint = opts && 'plainCodePoint' in opts ? opts.plainCodePoint : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    let eventSource = opts && 'eventSource' in opts ? opts.eventSource : 0;
    let vendorId = opts && 'vendorId' in opts ? opts.vendorId : 0;
    let productId = opts && 'productId' in opts ? opts.productId : 0;
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : 0;
    let repeatCount = opts && 'repeatCount' in opts ? opts.repeatCount : 0;
    this[flags$] = flags;
    this[codePoint$0] = codePoint;
    this[plainCodePoint$] = plainCodePoint;
    this[keyCode$4] = keyCode;
    this[scanCode$1] = scanCode;
    this[metaState$0] = metaState;
    this[eventSource$] = eventSource;
    this[vendorId$] = vendorId;
    this[productId$] = productId;
    this[deviceId$] = deviceId;
    this[repeatCount$] = repeatCount;
    if (!(flags !== null)) dart.assertFailed(null, I[31], 45, 15, "flags != null");
    if (!(codePoint !== null)) dart.assertFailed(null, I[31], 46, 15, "codePoint != null");
    if (!(keyCode !== null)) dart.assertFailed(null, I[31], 47, 15, "keyCode != null");
    if (!(scanCode !== null)) dart.assertFailed(null, I[31], 48, 15, "scanCode != null");
    if (!(metaState !== null)) dart.assertFailed(null, I[31], 49, 15, "metaState != null");
    raw_keyboard_android.RawKeyEventDataAndroid.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_android.RawKeyEventDataAndroid.prototype;
  dart.addTypeTests(raw_keyboard_android.RawKeyEventDataAndroid);
  dart.addTypeCaches(raw_keyboard_android.RawKeyEventDataAndroid);
  dart.setMethodSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getMethods(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    [_isLeftRightModifierPressed$2]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getGetters(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key$46g.PhysicalKeyboardKey,
    logicalKey: keyboard_key$46g.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_android.RawKeyEventDataAndroid, I[32]);
  dart.setFieldSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getFields(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    flags: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    plainCodePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int),
    eventSource: dart.finalFieldType(core.int),
    vendorId: dart.finalFieldType(core.int),
    productId: dart.finalFieldType(core.int),
    deviceId: dart.finalFieldType(core.int),
    repeatCount: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ['_sourceJoystick', 'modifierNone', 'modifierAlt', 'modifierLeftAlt', 'modifierRightAlt', 'modifierShift', 'modifierLeftShift', 'modifierRightShift', 'modifierSym', 'modifierFunction', 'modifierControl', 'modifierLeftControl', 'modifierRightControl', 'modifierMeta', 'modifierLeftMeta', 'modifierRightMeta', 'modifierCapsLock', 'modifierNumLock', 'modifierScrollLock']);
  dart.defineExtensionMethods(raw_keyboard_android.RawKeyEventDataAndroid, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_android.RawKeyEventDataAndroid, ['hashCode']);
  dart.defineLazy(raw_keyboard_android.RawKeyEventDataAndroid, {
    /*raw_keyboard_android.RawKeyEventDataAndroid._sourceJoystick*/get _sourceJoystick() {
      return 16777232;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt*/get modifierLeftAlt() {
      return 16;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt*/get modifierRightAlt() {
      return 32;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift*/get modifierLeftShift() {
      return 64;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift*/get modifierRightShift() {
      return 128;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierSym*/get modifierSym() {
      return 4;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction*/get modifierFunction() {
      return 8;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierControl*/get modifierControl() {
      return 4096;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl*/get modifierLeftControl() {
      return 8192;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl*/get modifierRightControl() {
      return 16384;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta*/get modifierMeta() {
      return 65536;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta*/get modifierLeftMeta() {
      return 131072;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta*/get modifierRightMeta() {
      return 262144;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock*/get modifierCapsLock() {
      return 1048576;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock*/get modifierNumLock() {
      return 2097152;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock*/get modifierScrollLock() {
      return 4194304;
    }
  }, false);
  dart.defineLazy(raw_keyboard_android, {
    /*raw_keyboard_android._kCombiningCharacterMask*/get _kCombiningCharacterMask() {
      return 2147483647;
    }
  }, false);
  raw_keyboard.KeyboardSide = class KeyboardSide extends core._Enum {
    toString() {
      return "KeyboardSide." + this[_name];
    }
  };
  (raw_keyboard.KeyboardSide.new = function(index, name) {
    raw_keyboard.KeyboardSide.__proto__.new.call(this, index, name);
    ;
  }).prototype = raw_keyboard.KeyboardSide.prototype;
  dart.addTypeTests(raw_keyboard.KeyboardSide);
  dart.addTypeCaches(raw_keyboard.KeyboardSide);
  dart.setLibraryUri(raw_keyboard.KeyboardSide, I[19]);
  dart.setStaticFieldSignature(raw_keyboard.KeyboardSide, () => ['values', 'any', 'left', 'right', 'all']);
  dart.defineExtensionMethods(raw_keyboard.KeyboardSide, ['toString']);
  dart.defineLazy(raw_keyboard.KeyboardSide, {
    /*raw_keyboard.KeyboardSide.values*/get values() {
      return C[120] || CT.C120;
    },
    /*raw_keyboard.KeyboardSide.any*/get any() {
      return C[85] || CT.C85;
    },
    /*raw_keyboard.KeyboardSide.left*/get left() {
      return C[87] || CT.C87;
    },
    /*raw_keyboard.KeyboardSide.right*/get right() {
      return C[88] || CT.C88;
    },
    /*raw_keyboard.KeyboardSide.all*/get all() {
      return C[86] || CT.C86;
    }
  }, false);
  raw_keyboard.ModifierKey = class ModifierKey extends core._Enum {
    toString() {
      return "ModifierKey." + this[_name];
    }
  };
  (raw_keyboard.ModifierKey.new = function(index, name) {
    raw_keyboard.ModifierKey.__proto__.new.call(this, index, name);
    ;
  }).prototype = raw_keyboard.ModifierKey.prototype;
  dart.addTypeTests(raw_keyboard.ModifierKey);
  dart.addTypeCaches(raw_keyboard.ModifierKey);
  dart.setLibraryUri(raw_keyboard.ModifierKey, I[19]);
  dart.setStaticFieldSignature(raw_keyboard.ModifierKey, () => ['values', 'controlModifier', 'shiftModifier', 'altModifier', 'metaModifier', 'capsLockModifier', 'numLockModifier', 'scrollLockModifier', 'functionModifier', 'symbolModifier']);
  dart.defineExtensionMethods(raw_keyboard.ModifierKey, ['toString']);
  dart.defineLazy(raw_keyboard.ModifierKey, {
    /*raw_keyboard.ModifierKey.values*/get values() {
      return C[121] || CT.C121;
    },
    /*raw_keyboard.ModifierKey.controlModifier*/get controlModifier() {
      return C[89] || CT.C89;
    },
    /*raw_keyboard.ModifierKey.shiftModifier*/get shiftModifier() {
      return C[90] || CT.C90;
    },
    /*raw_keyboard.ModifierKey.altModifier*/get altModifier() {
      return C[91] || CT.C91;
    },
    /*raw_keyboard.ModifierKey.metaModifier*/get metaModifier() {
      return C[92] || CT.C92;
    },
    /*raw_keyboard.ModifierKey.capsLockModifier*/get capsLockModifier() {
      return C[93] || CT.C93;
    },
    /*raw_keyboard.ModifierKey.numLockModifier*/get numLockModifier() {
      return C[95] || CT.C95;
    },
    /*raw_keyboard.ModifierKey.scrollLockModifier*/get scrollLockModifier() {
      return C[94] || CT.C94;
    },
    /*raw_keyboard.ModifierKey.functionModifier*/get functionModifier() {
      return C[96] || CT.C96;
    },
    /*raw_keyboard.ModifierKey.symbolModifier*/get symbolModifier() {
      return C[97] || CT.C97;
    }
  }, false);
  var character$ = dart.privateName(raw_keyboard, "RawKeyEvent.character");
  var repeat$ = dart.privateName(raw_keyboard, "RawKeyEvent.repeat");
  var data$ = dart.privateName(raw_keyboard, "RawKeyEvent.data");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  raw_keyboard.RawKeyEvent = class RawKeyEvent extends Object_Diagnosticable$36$ {
    get character() {
      return this[character$];
    }
    set character(value) {
      super.character = value;
    }
    get repeat() {
      return this[repeat$];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static fromMessage(message) {
      let character = null;
      function dataFromWeb() {
        let t30, t30$, t30$0, t30$1, t30$2;
        let key = T$.StringN().as(message[$_get]("key"));
        if (key != null && key[$isNotEmpty] && key.length === 1) {
          character = key;
        }
        return new raw_keyboard_web.RawKeyEventDataWeb.new({code: (t30 = T$.StringN().as(message[$_get]("code")), t30 == null ? "" : t30), key: (t30$ = key, t30$ == null ? "" : t30$), location: (t30$0 = T$.intN().as(message[$_get]("location")), t30$0 == null ? 0 : t30$0), metaState: (t30$1 = T$.intN().as(message[$_get]("metaState")), t30$1 == null ? 0 : t30$1), keyCode: (t30$2 = T$.intN().as(message[$_get]("keyCode")), t30$2 == null ? 0 : t30$2)});
      }
      dart.fn(dataFromWeb, T$.VoidToRawKeyEventData());
      let data = null;
      {
        data = dataFromWeb();
      }
      let repeat = raw_keyboard.RawKeyboard.instance.physicalKeysPressed.contains(data.physicalKey);
      let type = core.String.as(dart.nullCheck(message[$_get]("type")));
      switch (type) {
        case "keydown":
          {
            return new raw_keyboard.RawKeyDownEvent.new({data: data, character: character, repeat: repeat});
          }
        case "keyup":
          {
            return new raw_keyboard.RawKeyUpEvent.new({data: data});
          }
        default:
          {
            dart.throw(assertions.FlutterError.new("Unknown key event type: " + type));
          }
      }
    }
    static ['_#fromMessage#tearOff'](message) {
      return raw_keyboard.RawKeyEvent.fromMessage(message);
    }
    isKeyPressed(key) {
      return raw_keyboard.RawKeyboard.instance.keysPressed.contains(key);
    }
    get isControlPressed() {
      return this.isKeyPressed(keyboard_key$46g.LogicalKeyboardKey.controlLeft) || this.isKeyPressed(keyboard_key$46g.LogicalKeyboardKey.controlRight);
    }
    get isShiftPressed() {
      return this.isKeyPressed(keyboard_key$46g.LogicalKeyboardKey.shiftLeft) || this.isKeyPressed(keyboard_key$46g.LogicalKeyboardKey.shiftRight);
    }
    get isAltPressed() {
      return this.isKeyPressed(keyboard_key$46g.LogicalKeyboardKey.altLeft) || this.isKeyPressed(keyboard_key$46g.LogicalKeyboardKey.altRight);
    }
    get isMetaPressed() {
      return this.isKeyPressed(keyboard_key$46g.LogicalKeyboardKey.metaLeft) || this.isKeyPressed(keyboard_key$46g.LogicalKeyboardKey.metaRight);
    }
    get physicalKey() {
      return this.data.physicalKey;
    }
    get logicalKey() {
      return this.data.logicalKey;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLogicalKeyboardKey()).new("logicalKey", this.logicalKey));
      properties.add(new (T$.DiagnosticsPropertyOfPhysicalKeyboardKey()).new("physicalKey", this.physicalKey));
      if (raw_keyboard.RawKeyDownEvent.is(this)) {
        properties.add(new (T$.DiagnosticsPropertyOfbool()).new("repeat", this.repeat));
      }
    }
  };
  (raw_keyboard.RawKeyEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : false;
    this[data$] = data;
    this[character$] = character;
    this[repeat$] = repeat;
    ;
  }).prototype = raw_keyboard.RawKeyEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyEvent);
  dart.setMethodSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyEvent.__proto__),
    isKeyPressed: dart.fnType(core.bool, [keyboard_key$46g.LogicalKeyboardKey])
  }));
  dart.setStaticMethodSignature(raw_keyboard.RawKeyEvent, () => ['fromMessage']);
  dart.setGetterSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEvent.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    physicalKey: keyboard_key$46g.PhysicalKeyboardKey,
    logicalKey: keyboard_key$46g.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEvent, I[19]);
  dart.setFieldSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyEvent.__proto__),
    character: dart.finalFieldType(dart.nullable(core.String)),
    repeat: dart.finalFieldType(core.bool),
    data: dart.finalFieldType(raw_keyboard.RawKeyEventData)
  }));
  raw_keyboard.RawKeyDownEvent = class RawKeyDownEvent extends raw_keyboard.RawKeyEvent {
    static ['_#new#tearOff'](opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let character = opts && 'character' in opts ? opts.character : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : null;
      return new raw_keyboard.RawKeyDownEvent.new({data: data, character: character, repeat: repeat});
    }
  };
  (raw_keyboard.RawKeyDownEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : false;
    raw_keyboard.RawKeyDownEvent.__proto__.new.call(this, {data: data, character: character, repeat: repeat});
    ;
  }).prototype = raw_keyboard.RawKeyDownEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyDownEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyDownEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyDownEvent, I[19]);
  raw_keyboard.RawKeyUpEvent = class RawKeyUpEvent extends raw_keyboard.RawKeyEvent {
    static ['_#new#tearOff'](opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let character = opts && 'character' in opts ? opts.character : null;
      return new raw_keyboard.RawKeyUpEvent.new({data: data, character: character});
    }
  };
  (raw_keyboard.RawKeyUpEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyUpEvent.__proto__.new.call(this, {repeat: false, data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyUpEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyUpEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyUpEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyUpEvent, I[19]);
  var _listeners = dart.privateName(raw_keyboard, "_listeners");
  var _cachedKeyEventHandler = dart.privateName(raw_keyboard, "_cachedKeyEventHandler");
  var _cachedKeyMessageHandler = dart.privateName(raw_keyboard, "_cachedKeyMessageHandler");
  var _keysPressed = dart.privateName(raw_keyboard, "_keysPressed");
  var _synchronizeModifiers = dart.privateName(raw_keyboard, "_synchronizeModifiers");
  var _ModifierSidePair_side = dart.privateName(raw_keyboard, "_ModifierSidePair.side");
  var _ModifierSidePair_modifier = dart.privateName(raw_keyboard, "_ModifierSidePair.modifier");
  raw_keyboard.RawKeyboard = class RawKeyboard extends core.Object {
    static ['_#_#tearOff']() {
      return new raw_keyboard.RawKeyboard.__();
    }
    addListener(listener) {
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      this[_listeners][$remove](listener);
    }
    get keyEventHandler() {
      if (!dart.equals(binding$0.ServicesBinding.instance.keyEventManager.keyMessageHandler, this[_cachedKeyMessageHandler])) {
        this[_cachedKeyMessageHandler] = binding$0.ServicesBinding.instance.keyEventManager.keyMessageHandler;
        this[_cachedKeyEventHandler] = this[_cachedKeyMessageHandler] == null ? null : dart.fn(event => {
          if (!false) dart.assertFailed("The RawKeyboard.instance.keyEventHandler assigned by Flutter is a dummy " + "callback kept for compatibility and should not be directly called. Use " + "ServicesBinding.instance!.keyMessageHandler instead.", I[18], 643, 18, "false");
          return true;
        }, T$.RawKeyEventTobool());
      }
      return this[_cachedKeyEventHandler];
    }
    set keyEventHandler(handler) {
      this[_cachedKeyEventHandler] = handler;
      this[_cachedKeyMessageHandler] = handler == null ? null : dart.fn(message => {
        if (message.rawEvent != null) {
          return handler(dart.nullCheck(message.rawEvent));
        }
        return false;
      }, T$.KeyMessageTobool());
      binding$0.ServicesBinding.instance.keyEventManager.keyMessageHandler = this[_cachedKeyMessageHandler];
    }
    handleRawKeyEvent(event) {
      if (raw_keyboard.RawKeyDownEvent.is(event)) {
        this[_keysPressed][$_set](event.physicalKey, event.logicalKey);
      } else if (raw_keyboard.RawKeyUpEvent.is(event)) {
        this[_keysPressed][$remove](event.physicalKey);
      }
      this[_synchronizeModifiers](event);
      if (!(!raw_keyboard.RawKeyDownEvent.is(event) || this[_keysPressed][$isNotEmpty])) dart.assertFailed("Attempted to send a key down event when no keys are in keysPressed. " + "This state can occur if the key event being sent doesn't properly " + "set its modifier flags. This was the event: " + dart.str(event) + " and its data: " + dart.str(event.data), I[18], 682, 7, "event is! RawKeyDownEvent || _keysPressed.isNotEmpty");
      for (let listener of T$.ListOfRawKeyEventTovoid().of(this[_listeners])) {
        try {
          if (this[_listeners][$contains](listener)) {
            listener(event);
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.fn(() => {
              collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfRawKeyEvent()).new("Event", event)]), T$.VoidToListOfDiagnosticsNode());
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[18], 696, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<RawKeyEvent>('Event', event),\n          ];\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while processing a raw key listener"), informationCollector: collector}));
          } else
            throw e;
        }
      }
      return false;
    }
    [_synchronizeModifiers](event) {
      let modifiersPressed = event.data.modifiersPressed;
      let modifierKeys = new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
      let anySideKeys = T$.LinkedHashSetOfPhysicalKeyboardKey().new();
      let keysPressedAfterEvent = (() => {
        let t31 = T$.LinkedHashSetOfPhysicalKeyboardKey().of(this[_keysPressed][$keys]);
        if (raw_keyboard.RawKeyDownEvent.is(event)) t31.add(event.physicalKey);
        return t31;
      })();
      let thisKeyModifier = null;
      for (let key of raw_keyboard.ModifierKey.values) {
        let thisModifierKeys = raw_keyboard.RawKeyboard._modifierKeyMap[$_get](new raw_keyboard._ModifierSidePair.new(key, raw_keyboard.KeyboardSide.all));
        if (thisModifierKeys == null) {
          continue;
        }
        if (thisModifierKeys.contains(event.physicalKey)) {
          thisKeyModifier = key;
        }
        if (modifiersPressed[$_get](key) === raw_keyboard.KeyboardSide.any) {
          anySideKeys.addAll(thisModifierKeys);
          if (thisModifierKeys[$any](dart.bind(keysPressedAfterEvent, 'contains'))) {
            continue;
          }
        }
        let mappedKeys = modifiersPressed[$_get](key) == null ? T$.LinkedHashSetOfPhysicalKeyboardKey().new() : raw_keyboard.RawKeyboard._modifierKeyMap[$_get](new raw_keyboard._ModifierSidePair.new(key, modifiersPressed[$_get](key)));
        if (!dart.fn(() => {
          if (mappedKeys == null) {
            print.debugPrint("Platform key support for " + io.Platform.operatingSystem + " is " + "producing unsupported modifier combinations for " + "modifier " + dart.str(key) + " on side " + dart.str(modifiersPressed[$_get](key)) + ".");
            if (raw_keyboard_android.RawKeyEventDataAndroid.is(event.data)) {
              print.debugPrint("Android raw key metaState: " + dart.str(raw_keyboard_android.RawKeyEventDataAndroid.as(event.data).metaState));
            }
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[18], 806, 14, "() {\n        if (mappedKeys == null) {\n          debugPrint(\n            'Platform key support for ${Platform.operatingSystem} is '\n            'producing unsupported modifier combinations for '\n            'modifier $key on side ${modifiersPressed[key]}.',\n          );\n          if (event.data is RawKeyEventDataAndroid) {\n            debugPrint('Android raw key metaState: ${(event.data as RawKeyEventDataAndroid).metaState}');\n          }\n        }\n        return true;\n      }()");
        if (mappedKeys == null) {
          continue;
        }
        for (let physicalModifier of mappedKeys) {
          modifierKeys[$_set](physicalModifier, dart.nullCheck(raw_keyboard.RawKeyboard._allModifiers[$_get](physicalModifier)));
        }
      }
      raw_keyboard.RawKeyboard._allModifiersExceptFn[$keys][$where](dart.fn(key => !anySideKeys.contains(key), T$.PhysicalKeyboardKeyTobool()))[$forEach](dart.bind(this[_keysPressed], $remove));
      if (!raw_keyboard_fuchsia.RawKeyEventDataFuchsia.is(event.data) && !raw_keyboard_macos.RawKeyEventDataMacOs.is(event.data)) {
        this[_keysPressed][$remove](keyboard_key$46g.PhysicalKeyboardKey.fn);
      }
      this[_keysPressed][$addAll](modifierKeys);
      if (raw_keyboard.RawKeyDownEvent.is(event) && thisKeyModifier != null && !this[_keysPressed][$containsKey](event.physicalKey)) {
        if (raw_keyboard_linux.RawKeyEventDataLinux.is(event.data) && event.physicalKey._equals(keyboard_key$46g.PhysicalKeyboardKey.altRight)) {
          let logicalKey = raw_keyboard.RawKeyboard._allModifiersExceptFn[$_get](event.physicalKey);
          if (logicalKey != null) {
            this[_keysPressed][$_set](event.physicalKey, logicalKey);
          }
        }
      }
    }
    get keysPressed() {
      return this[_keysPressed][$values][$toSet]();
    }
    get physicalKeysPressed() {
      return this[_keysPressed][$keys][$toSet]();
    }
    lookUpLayout(physicalKey) {
      return this[_keysPressed][$_get](physicalKey);
    }
    clearKeysPressed() {
      return this[_keysPressed][$clear]();
    }
  };
  (raw_keyboard.RawKeyboard.__ = function() {
    this[_listeners] = T$.JSArrayOfRawKeyEventTovoid().of([]);
    this[_cachedKeyEventHandler] = null;
    this[_cachedKeyMessageHandler] = null;
    this[_keysPressed] = new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
    ;
  }).prototype = raw_keyboard.RawKeyboard.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyboard);
  dart.addTypeCaches(raw_keyboard.RawKeyboard);
  dart.setMethodSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyboard.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    handleRawKeyEvent: dart.fnType(core.bool, [raw_keyboard.RawKeyEvent]),
    [_synchronizeModifiers]: dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]),
    lookUpLayout: dart.fnType(dart.nullable(keyboard_key$46g.LogicalKeyboardKey), [keyboard_key$46g.PhysicalKeyboardKey]),
    clearKeysPressed: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyboard.__proto__),
    keyEventHandler: dart.nullable(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent])),
    keysPressed: core.Set$(keyboard_key$46g.LogicalKeyboardKey),
    physicalKeysPressed: core.Set$(keyboard_key$46g.PhysicalKeyboardKey)
  }));
  dart.setSetterSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getSetters(raw_keyboard.RawKeyboard.__proto__),
    keyEventHandler: dart.nullable(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent]))
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyboard, I[19]);
  dart.setFieldSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyboard.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]))),
    [_cachedKeyEventHandler]: dart.fieldType(dart.nullable(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent]))),
    [_cachedKeyMessageHandler]: dart.fieldType(dart.nullable(dart.fnType(core.bool, [hardware_keyboard.KeyMessage]))),
    [_keysPressed]: dart.finalFieldType(core.Map$(keyboard_key$46g.PhysicalKeyboardKey, keyboard_key$46g.LogicalKeyboardKey))
  }));
  dart.setStaticFieldSignature(raw_keyboard.RawKeyboard, () => ['instance', '_modifierKeyMap', '_allModifiersExceptFn', '_allModifiers']);
  dart.defineLazy(raw_keyboard.RawKeyboard, {
    /*raw_keyboard.RawKeyboard.instance*/get instance() {
      return new raw_keyboard.RawKeyboard.__();
    },
    /*raw_keyboard.RawKeyboard._modifierKeyMap*/get _modifierKeyMap() {
      return new (T$.LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey()).from([C[122] || CT.C122, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.altLeft]), C[123] || CT.C123, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.altRight]), C[124] || CT.C124, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.altLeft, keyboard_key$46g.PhysicalKeyboardKey.altRight]), C[125] || CT.C125, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.altLeft]), C[126] || CT.C126, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.shiftLeft]), C[127] || CT.C127, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.shiftRight]), C[128] || CT.C128, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.shiftLeft, keyboard_key$46g.PhysicalKeyboardKey.shiftRight]), C[129] || CT.C129, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.shiftLeft]), C[130] || CT.C130, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.controlLeft]), C[131] || CT.C131, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.controlRight]), C[132] || CT.C132, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.controlLeft, keyboard_key$46g.PhysicalKeyboardKey.controlRight]), C[133] || CT.C133, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.controlLeft]), C[134] || CT.C134, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.metaLeft]), C[135] || CT.C135, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.metaRight]), C[136] || CT.C136, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.metaLeft, keyboard_key$46g.PhysicalKeyboardKey.metaRight]), C[137] || CT.C137, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.metaLeft]), C[138] || CT.C138, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.capsLock]), C[139] || CT.C139, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.numLock]), C[140] || CT.C140, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.scrollLock]), C[141] || CT.C141, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key$46g.PhysicalKeyboardKey.fn])]);
    },
    /*raw_keyboard.RawKeyboard._allModifiersExceptFn*/get _allModifiersExceptFn() {
      return new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).from([keyboard_key$46g.PhysicalKeyboardKey.altLeft, keyboard_key$46g.LogicalKeyboardKey.altLeft, keyboard_key$46g.PhysicalKeyboardKey.altRight, keyboard_key$46g.LogicalKeyboardKey.altRight, keyboard_key$46g.PhysicalKeyboardKey.shiftLeft, keyboard_key$46g.LogicalKeyboardKey.shiftLeft, keyboard_key$46g.PhysicalKeyboardKey.shiftRight, keyboard_key$46g.LogicalKeyboardKey.shiftRight, keyboard_key$46g.PhysicalKeyboardKey.controlLeft, keyboard_key$46g.LogicalKeyboardKey.controlLeft, keyboard_key$46g.PhysicalKeyboardKey.controlRight, keyboard_key$46g.LogicalKeyboardKey.controlRight, keyboard_key$46g.PhysicalKeyboardKey.metaLeft, keyboard_key$46g.LogicalKeyboardKey.metaLeft, keyboard_key$46g.PhysicalKeyboardKey.metaRight, keyboard_key$46g.LogicalKeyboardKey.metaRight, keyboard_key$46g.PhysicalKeyboardKey.capsLock, keyboard_key$46g.LogicalKeyboardKey.capsLock, keyboard_key$46g.PhysicalKeyboardKey.numLock, keyboard_key$46g.LogicalKeyboardKey.numLock, keyboard_key$46g.PhysicalKeyboardKey.scrollLock, keyboard_key$46g.LogicalKeyboardKey.scrollLock]);
    },
    /*raw_keyboard.RawKeyboard._allModifiers*/get _allModifiers() {
      return (() => {
        let t32 = new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
        t32[$_set](keyboard_key$46g.PhysicalKeyboardKey.fn, keyboard_key$46g.LogicalKeyboardKey.fn);
        t32[$addAll](raw_keyboard.RawKeyboard._allModifiersExceptFn);
        return t32;
      })();
    }
  }, false);
  const modifier$ = _ModifierSidePair_modifier;
  const side$ = _ModifierSidePair_side;
  raw_keyboard._ModifierSidePair = class _ModifierSidePair extends core.Object {
    get modifier() {
      return this[modifier$];
    }
    set modifier(value) {
      super.modifier = value;
    }
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
    static ['_#new#tearOff'](modifier, side) {
      return new raw_keyboard._ModifierSidePair.new(modifier, side);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return raw_keyboard._ModifierSidePair.is(other) && other.modifier === this.modifier && other.side == this.side;
    }
    get hashCode() {
      return core.Object.hash(this.modifier, this.side);
    }
  };
  (raw_keyboard._ModifierSidePair.new = function(modifier, side) {
    this[modifier$] = modifier;
    this[side$] = side;
    ;
  }).prototype = raw_keyboard._ModifierSidePair.prototype;
  dart.addTypeTests(raw_keyboard._ModifierSidePair);
  dart.addTypeCaches(raw_keyboard._ModifierSidePair);
  dart.setLibraryUri(raw_keyboard._ModifierSidePair, I[19]);
  dart.setFieldSignature(raw_keyboard._ModifierSidePair, () => ({
    __proto__: dart.getFields(raw_keyboard._ModifierSidePair.__proto__),
    modifier: dart.finalFieldType(raw_keyboard.ModifierKey),
    side: dart.finalFieldType(dart.nullable(raw_keyboard.KeyboardSide))
  }));
  dart.defineExtensionMethods(raw_keyboard._ModifierSidePair, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard._ModifierSidePair, ['hashCode']);
  var logicalKey$ = dart.privateName(hardware_keyboard, "KeyboardLockMode.logicalKey");
  hardware_keyboard.KeyboardLockMode = class KeyboardLockMode extends core.Object {
    get logicalKey() {
      return this[logicalKey$];
    }
    set logicalKey(value) {
      super.logicalKey = value;
    }
    static ['_#_#tearOff'](logicalKey) {
      return new hardware_keyboard.KeyboardLockMode.__(logicalKey);
    }
    static findLockByLogicalKey(logicalKey) {
      return hardware_keyboard.KeyboardLockMode._knownLockModes[$_get](logicalKey.keyId);
    }
  };
  (hardware_keyboard.KeyboardLockMode.__ = function(logicalKey) {
    this[logicalKey$] = logicalKey;
    ;
  }).prototype = hardware_keyboard.KeyboardLockMode.prototype;
  dart.addTypeTests(hardware_keyboard.KeyboardLockMode);
  dart.addTypeCaches(hardware_keyboard.KeyboardLockMode);
  dart.setStaticMethodSignature(hardware_keyboard.KeyboardLockMode, () => ['findLockByLogicalKey']);
  dart.setLibraryUri(hardware_keyboard.KeyboardLockMode, I[33]);
  dart.setFieldSignature(hardware_keyboard.KeyboardLockMode, () => ({
    __proto__: dart.getFields(hardware_keyboard.KeyboardLockMode.__proto__),
    logicalKey: dart.finalFieldType(keyboard_key$46g.LogicalKeyboardKey)
  }));
  dart.setStaticFieldSignature(hardware_keyboard.KeyboardLockMode, () => ['numLock', 'scrollLock', 'capsLock', '_knownLockModes']);
  dart.defineLazy(hardware_keyboard.KeyboardLockMode, {
    /*hardware_keyboard.KeyboardLockMode.numLock*/get numLock() {
      return C[142] || CT.C142;
    },
    /*hardware_keyboard.KeyboardLockMode.scrollLock*/get scrollLock() {
      return C[144] || CT.C144;
    },
    /*hardware_keyboard.KeyboardLockMode.capsLock*/get capsLock() {
      return C[146] || CT.C146;
    },
    /*hardware_keyboard.KeyboardLockMode._knownLockModes*/get _knownLockModes() {
      return new (T$.IdentityMapOfint$KeyboardLockMode()).from([hardware_keyboard.KeyboardLockMode.numLock.logicalKey.keyId, hardware_keyboard.KeyboardLockMode.numLock, hardware_keyboard.KeyboardLockMode.scrollLock.logicalKey.keyId, hardware_keyboard.KeyboardLockMode.scrollLock, hardware_keyboard.KeyboardLockMode.capsLock.logicalKey.keyId, hardware_keyboard.KeyboardLockMode.capsLock]);
    }
  }, false);
  var physicalKey$ = dart.privateName(hardware_keyboard, "KeyEvent.physicalKey");
  var logicalKey$0 = dart.privateName(hardware_keyboard, "KeyEvent.logicalKey");
  var character$0 = dart.privateName(hardware_keyboard, "KeyEvent.character");
  var timeStamp$ = dart.privateName(hardware_keyboard, "KeyEvent.timeStamp");
  var synthesized$ = dart.privateName(hardware_keyboard, "KeyEvent.synthesized");
  const Object_Diagnosticable$36$0 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$0.new = function() {
  }).prototype = Object_Diagnosticable$36$0.prototype;
  dart.applyMixin(Object_Diagnosticable$36$0, diagnostics.Diagnosticable);
  hardware_keyboard.KeyEvent = class KeyEvent extends Object_Diagnosticable$36$0 {
    get physicalKey() {
      return this[physicalKey$];
    }
    set physicalKey(value) {
      super.physicalKey = value;
    }
    get logicalKey() {
      return this[logicalKey$0];
    }
    set logicalKey(value) {
      super.logicalKey = value;
    }
    get character() {
      return this[character$0];
    }
    set character(value) {
      super.character = value;
    }
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get synthesized() {
      return this[synthesized$];
    }
    set synthesized(value) {
      super.synthesized = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfPhysicalKeyboardKey()).new("physicalKey", this.physicalKey));
      properties.add(new (T$.DiagnosticsPropertyOfLogicalKeyboardKey()).new("logicalKey", this.logicalKey));
      properties.add(new diagnostics.StringProperty.new("character", this.character));
      properties.add(new (T$.DiagnosticsPropertyOfDuration()).new("timeStamp", this.timeStamp));
      properties.add(new diagnostics.FlagProperty.new("synthesized", {value: this.synthesized, ifTrue: "synthesized"}));
    }
  };
  (hardware_keyboard.KeyEvent.new = function(opts) {
    let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
    let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    this[physicalKey$] = physicalKey;
    this[logicalKey$0] = logicalKey;
    this[character$0] = character;
    this[timeStamp$] = timeStamp;
    this[synthesized$] = synthesized;
    ;
  }).prototype = hardware_keyboard.KeyEvent.prototype;
  dart.addTypeTests(hardware_keyboard.KeyEvent);
  dart.addTypeCaches(hardware_keyboard.KeyEvent);
  dart.setLibraryUri(hardware_keyboard.KeyEvent, I[33]);
  dart.setFieldSignature(hardware_keyboard.KeyEvent, () => ({
    __proto__: dart.getFields(hardware_keyboard.KeyEvent.__proto__),
    physicalKey: dart.finalFieldType(keyboard_key$46g.PhysicalKeyboardKey),
    logicalKey: dart.finalFieldType(keyboard_key$46g.LogicalKeyboardKey),
    character: dart.finalFieldType(dart.nullable(core.String)),
    timeStamp: dart.finalFieldType(core.Duration),
    synthesized: dart.finalFieldType(core.bool)
  }));
  hardware_keyboard.KeyDownEvent = class KeyDownEvent extends hardware_keyboard.KeyEvent {
    static ['_#new#tearOff'](opts) {
      let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
      let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
      let character = opts && 'character' in opts ? opts.character : null;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      return new hardware_keyboard.KeyDownEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp, synthesized: synthesized});
    }
  };
  (hardware_keyboard.KeyDownEvent.new = function(opts) {
    let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
    let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    hardware_keyboard.KeyDownEvent.__proto__.new.call(this, {physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp, synthesized: synthesized});
    ;
  }).prototype = hardware_keyboard.KeyDownEvent.prototype;
  dart.addTypeTests(hardware_keyboard.KeyDownEvent);
  dart.addTypeCaches(hardware_keyboard.KeyDownEvent);
  dart.setLibraryUri(hardware_keyboard.KeyDownEvent, I[33]);
  hardware_keyboard.KeyUpEvent = class KeyUpEvent extends hardware_keyboard.KeyEvent {
    static ['_#new#tearOff'](opts) {
      let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
      let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      return new hardware_keyboard.KeyUpEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, synthesized: synthesized});
    }
  };
  (hardware_keyboard.KeyUpEvent.new = function(opts) {
    let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
    let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    hardware_keyboard.KeyUpEvent.__proto__.new.call(this, {physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, synthesized: synthesized});
    ;
  }).prototype = hardware_keyboard.KeyUpEvent.prototype;
  dart.addTypeTests(hardware_keyboard.KeyUpEvent);
  dart.addTypeCaches(hardware_keyboard.KeyUpEvent);
  dart.setLibraryUri(hardware_keyboard.KeyUpEvent, I[33]);
  hardware_keyboard.KeyRepeatEvent = class KeyRepeatEvent extends hardware_keyboard.KeyEvent {
    static ['_#new#tearOff'](opts) {
      let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
      let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
      let character = opts && 'character' in opts ? opts.character : null;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      return new hardware_keyboard.KeyRepeatEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp});
    }
  };
  (hardware_keyboard.KeyRepeatEvent.new = function(opts) {
    let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
    let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    hardware_keyboard.KeyRepeatEvent.__proto__.new.call(this, {physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp});
    ;
  }).prototype = hardware_keyboard.KeyRepeatEvent.prototype;
  dart.addTypeTests(hardware_keyboard.KeyRepeatEvent);
  dart.addTypeCaches(hardware_keyboard.KeyRepeatEvent);
  dart.setLibraryUri(hardware_keyboard.KeyRepeatEvent, I[33]);
  var _pressedKeys = dart.privateName(hardware_keyboard, "_pressedKeys");
  var _lockModes = dart.privateName(hardware_keyboard, "_lockModes");
  var _handlers = dart.privateName(hardware_keyboard, "_handlers");
  var _duringDispatch = dart.privateName(hardware_keyboard, "_duringDispatch");
  var _modifiedHandlers = dart.privateName(hardware_keyboard, "_modifiedHandlers");
  var _assertEventIsRegular = dart.privateName(hardware_keyboard, "_assertEventIsRegular");
  var _dispatchKeyEvent = dart.privateName(hardware_keyboard, "_dispatchKeyEvent");
  hardware_keyboard.HardwareKeyboard = class HardwareKeyboard extends core.Object {
    static get instance() {
      return binding$0.ServicesBinding.instance.keyboard;
    }
    get physicalKeysPressed() {
      return this[_pressedKeys][$keys][$toSet]();
    }
    get logicalKeysPressed() {
      return this[_pressedKeys][$values][$toSet]();
    }
    lookUpLayout(physicalKey) {
      return this[_pressedKeys][$_get](physicalKey);
    }
    get lockModesEnabled() {
      return this[_lockModes];
    }
    [_assertEventIsRegular](event) {
      if (!dart.fn(() => {
        let common = "If this occurs in real application, please report this bug to Flutter. If this occurs in unit tests, please ensure that simulated events follow Flutter's event model as documented in `HardwareKeyboard`. This was the event: ";
        if (hardware_keyboard.KeyDownEvent.is(event)) {
          if (!!this[_pressedKeys][$containsKey](event.physicalKey)) dart.assertFailed("A " + dart.str(event[$runtimeType]) + " is dispatched, but the state shows that the physical " + "key is already pressed. " + common + dart.str(event), I[34], 428, 16, "!_pressedKeys.containsKey(event.physicalKey)");
        } else if (hardware_keyboard.KeyRepeatEvent.is(event) || hardware_keyboard.KeyUpEvent.is(event)) {
          if (!this[_pressedKeys][$containsKey](event.physicalKey)) dart.assertFailed("A " + dart.str(event[$runtimeType]) + " is dispatched, but the state shows that the physical " + "key is not pressed. " + common + dart.str(event), I[34], 432, 16, "_pressedKeys.containsKey(event.physicalKey)");
          if (!dart.equals(this[_pressedKeys][$_get](event.physicalKey), event.logicalKey)) dart.assertFailed("A " + dart.str(event[$runtimeType]) + " is dispatched, but the state shows that the physical " + "key is pressed on a different logical key. " + common + dart.str(event) + " " + "and the recorded logical key " + dart.str(this[_pressedKeys][$_get](event.physicalKey)), I[34], 435, 16, "_pressedKeys[event.physicalKey] == event.logicalKey");
        } else {
          if (!false) dart.assertFailed("Unexpected key event class " + dart.str(event[$runtimeType]), I[34], 440, 16, "false");
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[34], 422, 12, "() {\n      const String common = 'If this occurs in real application, please report this '\n        'bug to Flutter. If this occurs in unit tests, please ensure that '\n        \"simulated events follow Flutter's event model as documented in \"\n        '`HardwareKeyboard`. This was the event: ';\n      if (event is KeyDownEvent) {\n        assert(!_pressedKeys.containsKey(event.physicalKey),\n          'A ${event.runtimeType} is dispatched, but the state shows that the physical '\n          'key is already pressed. $common$event');\n      } else if (event is KeyRepeatEvent || event is KeyUpEvent) {\n        assert(_pressedKeys.containsKey(event.physicalKey),\n          'A ${event.runtimeType} is dispatched, but the state shows that the physical '\n          'key is not pressed. $common$event');\n        assert(_pressedKeys[event.physicalKey] == event.logicalKey,\n          'A ${event.runtimeType} is dispatched, but the state shows that the physical '\n          'key is pressed on a different logical key. $common$event '\n          'and the recorded logical key ${_pressedKeys[event.physicalKey]}');\n      } else {\n        assert(false, 'Unexpected key event class ${event.runtimeType}');\n      }\n      return true;\n    }()");
    }
    addHandler(handler) {
      if (this[_duringDispatch]) {
        this[_modifiedHandlers] == null ? this[_modifiedHandlers] = (() => {
          let t33 = T$.ListOfKeyEventTobool().of(this[_handlers]);
          return t33;
        })() : null;
        dart.nullCheck(this[_modifiedHandlers])[$add](handler);
      } else {
        this[_handlers][$add](handler);
      }
    }
    removeHandler(handler) {
      if (this[_duringDispatch]) {
        this[_modifiedHandlers] == null ? this[_modifiedHandlers] = (() => {
          let t34 = T$.ListOfKeyEventTobool().of(this[_handlers]);
          return t34;
        })() : null;
        dart.nullCheck(this[_modifiedHandlers])[$remove](handler);
      } else {
        this[_handlers][$remove](handler);
      }
    }
    [_dispatchKeyEvent](event) {
      if (!!this[_duringDispatch]) dart.assertFailed("Nested keyboard dispatching is not supported", I[34], 500, 12, "!_duringDispatch");
      this[_duringDispatch] = true;
      let handled = false;
      for (let handler of this[_handlers]) {
        try {
          let thisResult = handler(event);
          handled = handled || thisResult;
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.fn(() => {
              collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfKeyEvent()).new("Event", event)]), T$.VoidToListOfDiagnosticsNode());
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[34], 509, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<KeyEvent>('Event', event),\n          ];\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while processing a key handler"), informationCollector: collector}));
          } else
            throw e;
        }
      }
      this[_duringDispatch] = false;
      if (this[_modifiedHandlers] != null) {
        this[_handlers] = dart.nullCheck(this[_modifiedHandlers]);
        this[_modifiedHandlers] = null;
      }
      return handled;
    }
    handleKeyEvent(event) {
      this[_assertEventIsRegular](event);
      let physicalKey = event.physicalKey;
      let logicalKey = event.logicalKey;
      if (hardware_keyboard.KeyDownEvent.is(event)) {
        this[_pressedKeys][$_set](physicalKey, logicalKey);
        let lockMode = hardware_keyboard.KeyboardLockMode.findLockByLogicalKey(event.logicalKey);
        if (lockMode != null) {
          if (this[_lockModes].contains(lockMode)) {
            this[_lockModes].remove(lockMode);
          } else {
            this[_lockModes].add(lockMode);
          }
        }
      } else if (hardware_keyboard.KeyUpEvent.is(event)) {
        this[_pressedKeys][$remove](physicalKey);
      } else if (hardware_keyboard.KeyRepeatEvent.is(event)) {
      }
      return this[_dispatchKeyEvent](event);
    }
    clearState() {
      this[_pressedKeys][$clear]();
      this[_lockModes].clear();
      this[_handlers][$clear]();
      if (!(this[_modifiedHandlers] == null)) dart.assertFailed(null, I[34], 568, 12, "_modifiedHandlers == null");
    }
    static ['_#new#tearOff']() {
      return new hardware_keyboard.HardwareKeyboard.new();
    }
  };
  (hardware_keyboard.HardwareKeyboard.new = function() {
    this[_pressedKeys] = new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
    this[_lockModes] = T$.LinkedHashSetOfKeyboardLockMode().new();
    this[_handlers] = T$.JSArrayOfKeyEventTobool().of([]);
    this[_duringDispatch] = false;
    this[_modifiedHandlers] = null;
    ;
  }).prototype = hardware_keyboard.HardwareKeyboard.prototype;
  dart.addTypeTests(hardware_keyboard.HardwareKeyboard);
  dart.addTypeCaches(hardware_keyboard.HardwareKeyboard);
  dart.setMethodSignature(hardware_keyboard.HardwareKeyboard, () => ({
    __proto__: dart.getMethods(hardware_keyboard.HardwareKeyboard.__proto__),
    lookUpLayout: dart.fnType(dart.nullable(keyboard_key$46g.LogicalKeyboardKey), [keyboard_key$46g.PhysicalKeyboardKey]),
    [_assertEventIsRegular]: dart.fnType(dart.void, [hardware_keyboard.KeyEvent]),
    addHandler: dart.fnType(dart.void, [dart.fnType(core.bool, [hardware_keyboard.KeyEvent])]),
    removeHandler: dart.fnType(dart.void, [dart.fnType(core.bool, [hardware_keyboard.KeyEvent])]),
    [_dispatchKeyEvent]: dart.fnType(core.bool, [hardware_keyboard.KeyEvent]),
    handleKeyEvent: dart.fnType(core.bool, [hardware_keyboard.KeyEvent]),
    clearState: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(hardware_keyboard.HardwareKeyboard, () => ({
    __proto__: dart.getGetters(hardware_keyboard.HardwareKeyboard.__proto__),
    physicalKeysPressed: core.Set$(keyboard_key$46g.PhysicalKeyboardKey),
    logicalKeysPressed: core.Set$(keyboard_key$46g.LogicalKeyboardKey),
    lockModesEnabled: core.Set$(hardware_keyboard.KeyboardLockMode)
  }));
  dart.setStaticGetterSignature(hardware_keyboard.HardwareKeyboard, () => ['instance']);
  dart.setLibraryUri(hardware_keyboard.HardwareKeyboard, I[33]);
  dart.setFieldSignature(hardware_keyboard.HardwareKeyboard, () => ({
    __proto__: dart.getFields(hardware_keyboard.HardwareKeyboard.__proto__),
    [_pressedKeys]: dart.finalFieldType(core.Map$(keyboard_key$46g.PhysicalKeyboardKey, keyboard_key$46g.LogicalKeyboardKey)),
    [_lockModes]: dart.finalFieldType(core.Set$(hardware_keyboard.KeyboardLockMode)),
    [_handlers]: dart.fieldType(core.List$(dart.fnType(core.bool, [hardware_keyboard.KeyEvent]))),
    [_duringDispatch]: dart.fieldType(core.bool),
    [_modifiedHandlers]: dart.fieldType(dart.nullable(core.List$(dart.fnType(core.bool, [hardware_keyboard.KeyEvent]))))
  }));
  hardware_keyboard.KeyDataTransitMode = class KeyDataTransitMode extends core._Enum {
    toString() {
      return "KeyDataTransitMode." + this[_name];
    }
  };
  (hardware_keyboard.KeyDataTransitMode.new = function(index, name) {
    hardware_keyboard.KeyDataTransitMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = hardware_keyboard.KeyDataTransitMode.prototype;
  dart.addTypeTests(hardware_keyboard.KeyDataTransitMode);
  dart.addTypeCaches(hardware_keyboard.KeyDataTransitMode);
  dart.setLibraryUri(hardware_keyboard.KeyDataTransitMode, I[33]);
  dart.setStaticFieldSignature(hardware_keyboard.KeyDataTransitMode, () => ['values', 'rawKeyData', 'keyDataThenRawKeyData']);
  dart.defineExtensionMethods(hardware_keyboard.KeyDataTransitMode, ['toString']);
  dart.defineLazy(hardware_keyboard.KeyDataTransitMode, {
    /*hardware_keyboard.KeyDataTransitMode.values*/get values() {
      return C[148] || CT.C148;
    },
    /*hardware_keyboard.KeyDataTransitMode.rawKeyData*/get rawKeyData() {
      return C[149] || CT.C149;
    },
    /*hardware_keyboard.KeyDataTransitMode.keyDataThenRawKeyData*/get keyDataThenRawKeyData() {
      return C[150] || CT.C150;
    }
  }, false);
  var events$ = dart.privateName(hardware_keyboard, "KeyMessage.events");
  var rawEvent$ = dart.privateName(hardware_keyboard, "KeyMessage.rawEvent");
  hardware_keyboard.KeyMessage = class KeyMessage extends core.Object {
    get events() {
      return this[events$];
    }
    set events(value) {
      super.events = value;
    }
    get rawEvent() {
      return this[rawEvent$];
    }
    set rawEvent(value) {
      super.rawEvent = value;
    }
    static ['_#new#tearOff'](events, rawEvent) {
      return new hardware_keyboard.KeyMessage.new(events, rawEvent);
    }
    toString() {
      return "KeyMessage(" + dart.str(this.events) + ")";
    }
  };
  (hardware_keyboard.KeyMessage.new = function(events, rawEvent) {
    this[events$] = events;
    this[rawEvent$] = rawEvent;
    ;
  }).prototype = hardware_keyboard.KeyMessage.prototype;
  dart.addTypeTests(hardware_keyboard.KeyMessage);
  dart.addTypeCaches(hardware_keyboard.KeyMessage);
  dart.setLibraryUri(hardware_keyboard.KeyMessage, I[33]);
  dart.setFieldSignature(hardware_keyboard.KeyMessage, () => ({
    __proto__: dart.getFields(hardware_keyboard.KeyMessage.__proto__),
    events: dart.finalFieldType(core.List$(hardware_keyboard.KeyEvent)),
    rawEvent: dart.finalFieldType(dart.nullable(raw_keyboard.RawKeyEvent))
  }));
  dart.defineExtensionMethods(hardware_keyboard.KeyMessage, ['toString']);
  var keyMessageHandler = dart.privateName(hardware_keyboard, "KeyEventManager.keyMessageHandler");
  var _transitMode = dart.privateName(hardware_keyboard, "_transitMode");
  var _keyEventsSinceLastMessage = dart.privateName(hardware_keyboard, "_keyEventsSinceLastMessage");
  var _skippedRawKeysPressed = dart.privateName(hardware_keyboard, "_skippedRawKeysPressed");
  var _hardwareKeyboard$ = dart.privateName(hardware_keyboard, "_hardwareKeyboard");
  var _rawKeyboard$ = dart.privateName(hardware_keyboard, "_rawKeyboard");
  var _dispatchKeyMessage = dart.privateName(hardware_keyboard, "_dispatchKeyMessage");
  var _convertRawEventAndStore = dart.privateName(hardware_keyboard, "_convertRawEventAndStore");
  hardware_keyboard.KeyEventManager = class KeyEventManager extends core.Object {
    get keyMessageHandler() {
      return this[keyMessageHandler];
    }
    set keyMessageHandler(value) {
      this[keyMessageHandler] = value;
    }
    static ['_#new#tearOff'](_hardwareKeyboard, _rawKeyboard) {
      return new hardware_keyboard.KeyEventManager.new(_hardwareKeyboard, _rawKeyboard);
    }
    handleKeyData(data) {
      this[_transitMode] == null ? this[_transitMode] = hardware_keyboard.KeyDataTransitMode.keyDataThenRawKeyData : null;
      switch (dart.nullCheck(this[_transitMode])) {
        case C[149] || CT.C149:
          {
            if (!false) dart.assertFailed("Should never encounter KeyData when transitMode is rawKeyData.", I[34], 788, 16, "false");
            return false;
          }
        case C[150] || CT.C150:
          {
            if (data.physical === 0 && data.logical === 0) {
              return false;
            }
            if (!(data.physical !== 0 && data.logical !== 0)) dart.assertFailed(null, I[34], 798, 16, "data.physical != 0 && data.logical != 0");
            let event = hardware_keyboard.KeyEventManager._eventFromData(data);
            if (data.synthesized && this[_keyEventsSinceLastMessage][$isEmpty]) {
              this[_hardwareKeyboard$].handleKeyEvent(event);
              this[_dispatchKeyMessage](T$.JSArrayOfKeyEvent().of([event]), null);
            } else {
              this[_keyEventsSinceLastMessage][$add](event);
            }
            return false;
          }
      }
    }
    [_dispatchKeyMessage](keyEvents, rawEvent) {
      if (this.keyMessageHandler != null) {
        let message = new hardware_keyboard.KeyMessage.new(keyEvents, rawEvent);
        try {
          return dart.nullCheck(this.keyMessageHandler)(message);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.fn(() => {
              collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfKeyMessage()).new("KeyMessage", message)]), T$.VoidToListOfDiagnosticsNode());
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[34], 827, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<KeyMessage>('KeyMessage', message),\n          ];\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while processing the key message handler"), informationCollector: collector}));
          } else
            throw e;
        }
      }
      return false;
    }
    handleRawKeyMessage(message) {
      return async.async(T$.MapOfString$dynamic(), (function* handleRawKeyMessage() {
        if (this[_transitMode] == null) {
          this[_transitMode] = hardware_keyboard.KeyDataTransitMode.rawKeyData;
          this[_rawKeyboard$].addListener(dart.bind(this, _convertRawEventAndStore));
        }
        let rawEvent = raw_keyboard.RawKeyEvent.fromMessage(T$.MapOfString$dynamic().as(message));
        let shouldDispatch = true;
        if (raw_keyboard.RawKeyDownEvent.is(rawEvent)) {
          if (!rawEvent.data.shouldDispatchEvent()) {
            shouldDispatch = false;
            this[_skippedRawKeysPressed].add(rawEvent.physicalKey);
          } else {
            this[_skippedRawKeysPressed].remove(rawEvent.physicalKey);
          }
        } else if (raw_keyboard.RawKeyUpEvent.is(rawEvent)) {
          if (this[_skippedRawKeysPressed].contains(rawEvent.physicalKey)) {
            this[_skippedRawKeysPressed].remove(rawEvent.physicalKey);
            shouldDispatch = false;
          }
        }
        let handled = true;
        if (shouldDispatch) {
          handled = this[_rawKeyboard$].handleRawKeyEvent(rawEvent);
          for (let event of this[_keyEventsSinceLastMessage]) {
            handled = this[_hardwareKeyboard$].handleKeyEvent(event) || handled;
          }
          if (this[_transitMode] === hardware_keyboard.KeyDataTransitMode.rawKeyData) {
            if (!collections.setEquals(keyboard_key$46g.PhysicalKeyboardKey, this[_rawKeyboard$].physicalKeysPressed, this[_hardwareKeyboard$].physicalKeysPressed)) dart.assertFailed("RawKeyboard reported " + dart.str(this[_rawKeyboard$].physicalKeysPressed) + ", " + "while HardwareKeyboard reported " + dart.str(this[_hardwareKeyboard$].physicalKeysPressed), I[34], 884, 16, "setEquals(_rawKeyboard.physicalKeysPressed, _hardwareKeyboard.physicalKeysPressed)");
          }
          handled = this[_dispatchKeyMessage](this[_keyEventsSinceLastMessage], rawEvent) || handled;
          this[_keyEventsSinceLastMessage][$clear]();
        }
        return new (T$.IdentityMapOfString$dynamic()).from(["handled", handled]);
      }).bind(this));
    }
    [_convertRawEventAndStore](rawEvent) {
      let physicalKey = rawEvent.physicalKey;
      let logicalKey = rawEvent.logicalKey;
      let physicalKeysPressed = this[_hardwareKeyboard$].physicalKeysPressed;
      let eventAfterwards = T$.JSArrayOfKeyEvent().of([]);
      let mainEvent = null;
      let recordedLogicalMain = this[_hardwareKeyboard$].lookUpLayout(physicalKey);
      let timeStamp = binding$0.ServicesBinding.instance.currentSystemFrameTimeStamp;
      let character = rawEvent.character === "" ? null : rawEvent.character;
      if (raw_keyboard.RawKeyDownEvent.is(rawEvent)) {
        if (recordedLogicalMain == null) {
          mainEvent = new hardware_keyboard.KeyDownEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp});
          physicalKeysPressed.add(physicalKey);
        } else {
          if (!physicalKeysPressed.contains(physicalKey)) dart.assertFailed(null, I[34], 920, 16, "physicalKeysPressed.contains(physicalKey)");
          mainEvent = new hardware_keyboard.KeyRepeatEvent.new({physicalKey: physicalKey, logicalKey: recordedLogicalMain, character: character, timeStamp: timeStamp});
        }
      } else {
        if (!raw_keyboard.RawKeyUpEvent.is(rawEvent)) dart.assertFailed("Unexpected subclass of RawKeyEvent: " + dart.str(rawEvent[$runtimeType]), I[34], 929, 14, "rawEvent is RawKeyUpEvent");
        if (recordedLogicalMain == null) {
          mainEvent = null;
        } else {
          mainEvent = new hardware_keyboard.KeyUpEvent.new({logicalKey: recordedLogicalMain, physicalKey: physicalKey, timeStamp: timeStamp});
          physicalKeysPressed.remove(physicalKey);
        }
      }
      for (let key of physicalKeysPressed.difference(this[_rawKeyboard$].physicalKeysPressed)) {
        if (key._equals(physicalKey)) {
          eventAfterwards[$add](new hardware_keyboard.KeyUpEvent.new({physicalKey: key, logicalKey: logicalKey, timeStamp: timeStamp, synthesized: true}));
        } else {
          this[_keyEventsSinceLastMessage][$add](new hardware_keyboard.KeyUpEvent.new({physicalKey: key, logicalKey: dart.nullCheck(this[_hardwareKeyboard$].lookUpLayout(key)), timeStamp: timeStamp, synthesized: true}));
        }
      }
      for (let key of this[_rawKeyboard$].physicalKeysPressed.difference(physicalKeysPressed)) {
        this[_keyEventsSinceLastMessage][$add](new hardware_keyboard.KeyDownEvent.new({physicalKey: key, logicalKey: dart.nullCheck(this[_rawKeyboard$].lookUpLayout(key)), timeStamp: timeStamp, synthesized: true}));
      }
      if (mainEvent != null) {
        this[_keyEventsSinceLastMessage][$add](mainEvent);
      }
      this[_keyEventsSinceLastMessage][$addAll](eventAfterwards);
    }
    clearState() {
      if (!dart.fn(() => {
        this[_transitMode] = null;
        this[_rawKeyboard$].removeListener(dart.bind(this, _convertRawEventAndStore));
        this[_keyEventsSinceLastMessage][$clear]();
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[34], 980, 12, "() {\n      _transitMode = null;\n      _rawKeyboard.removeListener(_convertRawEventAndStore);\n      _keyEventsSinceLastMessage.clear();\n      return true;\n    }()");
    }
    static _eventFromData(keyData) {
      let t39, t39$;
      let physicalKey = (t39 = keyboard_key$46g.PhysicalKeyboardKey.findKeyByCode(keyData.physical), t39 == null ? new keyboard_key$46g.PhysicalKeyboardKey.new(keyData.physical) : t39);
      let logicalKey = (t39$ = keyboard_key$46g.LogicalKeyboardKey.findKeyByKeyId(keyData.logical), t39$ == null ? new keyboard_key$46g.LogicalKeyboardKey.new(keyData.logical) : t39$);
      let timeStamp = keyData.timeStamp;
      switch (keyData.type) {
        case C[151] || CT.C151:
          {
            return new hardware_keyboard.KeyDownEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, character: keyData.character, synthesized: keyData.synthesized});
          }
        case C[152] || CT.C152:
          {
            if (!(keyData.character == null)) dart.assertFailed(null, I[34], 1006, 16, "keyData.character == null");
            return new hardware_keyboard.KeyUpEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, synthesized: keyData.synthesized});
          }
        case C[153] || CT.C153:
          {
            return new hardware_keyboard.KeyRepeatEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, character: keyData.character});
          }
      }
    }
  };
  (hardware_keyboard.KeyEventManager.new = function(_hardwareKeyboard, _rawKeyboard) {
    this[keyMessageHandler] = null;
    this[_transitMode] = null;
    this[_keyEventsSinceLastMessage] = T$.JSArrayOfKeyEvent().of([]);
    this[_skippedRawKeysPressed] = T$.LinkedHashSetOfPhysicalKeyboardKey().new();
    this[_hardwareKeyboard$] = _hardwareKeyboard;
    this[_rawKeyboard$] = _rawKeyboard;
    ;
  }).prototype = hardware_keyboard.KeyEventManager.prototype;
  dart.addTypeTests(hardware_keyboard.KeyEventManager);
  dart.addTypeCaches(hardware_keyboard.KeyEventManager);
  dart.setMethodSignature(hardware_keyboard.KeyEventManager, () => ({
    __proto__: dart.getMethods(hardware_keyboard.KeyEventManager.__proto__),
    handleKeyData: dart.fnType(core.bool, [ui.KeyData]),
    [_dispatchKeyMessage]: dart.fnType(core.bool, [core.List$(hardware_keyboard.KeyEvent), dart.nullable(raw_keyboard.RawKeyEvent)]),
    handleRawKeyMessage: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [dart.dynamic]),
    [_convertRawEventAndStore]: dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]),
    clearState: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(hardware_keyboard.KeyEventManager, () => ['_eventFromData']);
  dart.setLibraryUri(hardware_keyboard.KeyEventManager, I[33]);
  dart.setFieldSignature(hardware_keyboard.KeyEventManager, () => ({
    __proto__: dart.getFields(hardware_keyboard.KeyEventManager.__proto__),
    keyMessageHandler: dart.fieldType(dart.nullable(dart.fnType(core.bool, [hardware_keyboard.KeyMessage]))),
    [_hardwareKeyboard$]: dart.finalFieldType(hardware_keyboard.HardwareKeyboard),
    [_rawKeyboard$]: dart.finalFieldType(raw_keyboard.RawKeyboard),
    [_transitMode]: dart.fieldType(dart.nullable(hardware_keyboard.KeyDataTransitMode)),
    [_keyEventsSinceLastMessage]: dart.finalFieldType(core.List$(hardware_keyboard.KeyEvent)),
    [_skippedRawKeysPressed]: dart.finalFieldType(core.Set$(keyboard_key$46g.PhysicalKeyboardKey))
  }));
  var __ServicesBinding__keyboard = dart.privateName(binding$0, "_#ServicesBinding#_keyboard");
  var __ServicesBinding__keyEventManager = dart.privateName(binding$0, "_#ServicesBinding#_keyEventManager");
  var __ServicesBinding__defaultBinaryMessenger = dart.privateName(binding$0, "_#ServicesBinding#_defaultBinaryMessenger");
  var __ServicesBinding__restorationManager = dart.privateName(binding$0, "_#ServicesBinding#_restorationManager");
  var _systemUiChangeCallback = dart.privateName(binding$0, "_systemUiChangeCallback");
  var _defaultBinaryMessenger = dart.privateName(binding$0, "_defaultBinaryMessenger");
  var _restorationManager = dart.privateName(binding$0, "_restorationManager");
  var _initKeyboard = dart.privateName(binding$0, "_initKeyboard");
  var _handleLifecycleMessage = dart.privateName(binding$0, "_handleLifecycleMessage");
  var _handlePlatformMessage = dart.privateName(binding$0, "_handlePlatformMessage");
  var _keyboard = dart.privateName(binding$0, "_keyboard");
  var _keyEventManager = dart.privateName(binding$0, "_keyEventManager");
  var _addLicenses = dart.privateName(binding$0, "_addLicenses");
  binding$0.ServicesBinding = class ServicesBinding extends core.Object {
    static get instance() {
      return binding$.BindingBase.checkInstance(binding$0.ServicesBinding, binding$0.ServicesBinding._instance);
    }
    static _parseLicenses(rawLicenses) {
      let licenseSeparator = "\n" + "-"[$times](80) + "\n";
      let result = T$.JSArrayOfLicenseEntry().of([]);
      let licenses = rawLicenses[$split](licenseSeparator);
      for (let license of licenses) {
        let split = license[$indexOf]("\n\n");
        if (split >= 0) {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(license[$substring](0, split)[$split]("\n"), license[$substring](split + 2)));
        } else {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(C[0] || CT.C0, license));
        }
      }
      return result;
    }
    static _parseAppLifecycleMessage(message) {
      switch (message) {
        case "AppLifecycleState.paused":
          {
            return ui.AppLifecycleState.paused;
          }
        case "AppLifecycleState.resumed":
          {
            return ui.AppLifecycleState.resumed;
          }
        case "AppLifecycleState.inactive":
          {
            return ui.AppLifecycleState.inactive;
          }
        case "AppLifecycleState.detached":
          {
            return ui.AppLifecycleState.detached;
          }
      }
      return null;
    }
  };
  binding$0.ServicesBinding[dart.mixinOn] = _ServicesBinding$36BindingBase$36SchedulerBinding => class ServicesBinding extends _ServicesBinding$36BindingBase$36SchedulerBinding {
    initInstances() {
      super.initInstances();
      binding$0.ServicesBinding._instance = this;
      this[_defaultBinaryMessenger] = this.createBinaryMessenger();
      this[_restorationManager] = this.createRestorationManager();
      this[_initKeyboard]();
      this.initLicenses();
      system_channels.SystemChannels.system.setMessageHandler(dart.fn(message => this.handleSystemMessage(core.Object.as(message)), T$.dynamicToFutureOfvoid()));
      system_channels.SystemChannels.lifecycle.setMessageHandler(dart.bind(this, _handleLifecycleMessage));
      system_channels.SystemChannels.platform.setMethodCallHandler(dart.bind(this, _handlePlatformMessage));
      text_input.TextInput.ensureInitialized();
      this.readInitialLifecycleStateFromNativeWindow();
    }
    get keyboard() {
      return this[_keyboard];
    }
    get [_keyboard]() {
      let t39;
      t39 = this[__ServicesBinding__keyboard];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_keyboard")) : t39;
    }
    set [_keyboard](library$32package$58flutter$47src$47services$47binding$46dart$58$58_keyboard$35param) {
      if (this[__ServicesBinding__keyboard] == null)
        this[__ServicesBinding__keyboard] = library$32package$58flutter$47src$47services$47binding$46dart$58$58_keyboard$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_keyboard"));
    }
    get keyEventManager() {
      return this[_keyEventManager];
    }
    get [_keyEventManager]() {
      let t39;
      t39 = this[__ServicesBinding__keyEventManager];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_keyEventManager")) : t39;
    }
    set [_keyEventManager](library$32package$58flutter$47src$47services$47binding$46dart$58$58_keyEventManager$35param) {
      if (this[__ServicesBinding__keyEventManager] == null)
        this[__ServicesBinding__keyEventManager] = library$32package$58flutter$47src$47services$47binding$46dart$58$58_keyEventManager$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_keyEventManager"));
    }
    [_initKeyboard]() {
      this[_keyboard] = new hardware_keyboard.HardwareKeyboard.new();
      this[_keyEventManager] = new hardware_keyboard.KeyEventManager.new(this[_keyboard], raw_keyboard.RawKeyboard.instance);
      this.platformDispatcher.onKeyData = dart.bind(this[_keyEventManager], 'handleKeyData');
      system_channels.SystemChannels.keyEvent.setMessageHandler(dart.bind(this[_keyEventManager], 'handleRawKeyMessage'));
    }
    get defaultBinaryMessenger() {
      return this[_defaultBinaryMessenger];
    }
    get [_defaultBinaryMessenger]() {
      let t39;
      t39 = this[__ServicesBinding__defaultBinaryMessenger];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_defaultBinaryMessenger")) : t39;
    }
    set [_defaultBinaryMessenger](library$32package$58flutter$47src$47services$47binding$46dart$58$58_defaultBinaryMessenger$35param) {
      if (this[__ServicesBinding__defaultBinaryMessenger] == null)
        this[__ServicesBinding__defaultBinaryMessenger] = library$32package$58flutter$47src$47services$47binding$46dart$58$58_defaultBinaryMessenger$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_defaultBinaryMessenger"));
    }
    get channelBuffers() {
      return ui.channelBuffers;
    }
    createBinaryMessenger() {
      return C[154] || CT.C154;
    }
    handleMemoryPressure() {
      asset_bundle.rootBundle.clear();
    }
    handleSystemMessage(systemMessage) {
      return async.async(dart.void, (function* handleSystemMessage() {
        let message = T$.MapOfString$dynamic().as(systemMessage);
        let type = core.String.as(message[$_get]("type"));
        switch (type) {
          case "memoryPressure":
            {
              this.handleMemoryPressure();
              break;
            }
        }
        return;
      }).bind(this));
    }
    initLicenses() {
      licenses$.LicenseRegistry.addLicense(dart.bind(this, _addLicenses));
    }
    [_addLicenses]() {
      let controller = null;
      function controller$35get() {
        let t40;
        t40 = controller;
        return t40 == null ? dart.throw(new _internal.LateError.localNI("controller")) : t40;
      }
      dart.fn(controller$35get, T$.VoidToStreamControllerOfLicenseEntry());
      function controller$35set(controller$35param) {
        if (controller == null)
          return controller = controller$35param;
        else
          dart.throw(new _internal.LateError.localAI("controller"));
      }
      dart.fn(controller$35set, T$.StreamControllerOfLicenseEntryTodynamic());
      controller$35set(T$.StreamControllerOfLicenseEntry().new({onListen: dart.fn(() => async.async(dart.void, function*() {
          let rawLicenses = null;
          function rawLicenses$35get() {
            let t43;
            t43 = rawLicenses;
            return t43 == null ? dart.throw(new _internal.LateError.localNI("rawLicenses")) : t43;
          }
          dart.fn(rawLicenses$35get, T$.VoidToString());
          function rawLicenses$35set(rawLicenses$35param) {
            if (rawLicenses == null)
              return rawLicenses = rawLicenses$35param;
            else
              dart.throw(new _internal.LateError.localAI("rawLicenses"));
          }
          dart.fn(rawLicenses$35set, T$.StringTodynamic());
          {
            rawLicenses$35set(yield asset_bundle.rootBundle.loadString("NOTICES", {cache: false}));
          }
          let licenses = (yield isolates.compute(core.String, T$.ListOfLicenseEntry(), C[155] || CT.C155, rawLicenses$35get(), {debugLabel: "parseLicenses"}));
          licenses[$forEach](T$.LicenseEntryTovoid().as(dart.bind(controller$35get(), 'add')));
          yield controller$35get().close();
        }), T$.VoidToFutureOfvoid())}));
      return controller$35get().stream;
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.fn(() => {
        this.registerStringServiceExtension({name: "evict", getter: dart.fn(() => async.async(core.String, function*() {
            return "";
          }), T$.VoidToFutureOfString()), setter: dart.fn(value => async.async(dart.void, (function*() {
            this.evict(value);
          }).bind(this)), T$.StringToFutureOfvoid())});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[35], 205, 12, "() {\n      registerStringServiceExtension(\n        // ext.flutter.evict value=foo.png will cause foo.png to be evicted from\n        // the rootBundle cache and cause the entire image cache to be cleared.\n        // This is used by hot reload mode to clear out the cache of resources\n        // that have changed.\n        name: 'evict',\n        getter: () async => '',\n        setter: (String value) async {\n          evict(value);\n        },\n      );\n      return true;\n    }()");
    }
    evict(asset) {
      asset_bundle.rootBundle.evict(asset);
    }
    readInitialLifecycleStateFromNativeWindow() {
      if (this.lifecycleState != null) {
        return;
      }
      let state = binding$0.ServicesBinding._parseAppLifecycleMessage(this.platformDispatcher.initialLifecycleState);
      if (state != null) {
        this.handleAppLifecycleStateChanged(state);
      }
    }
    [_handleLifecycleMessage](message) {
      return async.async(T$.StringN(), (function* _handleLifecycleMessage() {
        this.handleAppLifecycleStateChanged(dart.nullCheck(binding$0.ServicesBinding._parseAppLifecycleMessage(dart.nullCheck(message))));
        return null;
      }).bind(this));
    }
    [_handlePlatformMessage](methodCall) {
      return async.async(dart.void, (function* _handlePlatformMessage() {
        let method = methodCall.method;
        if (!(method === "SystemChrome.systemUIChange")) dart.assertFailed(null, I[35], 263, 12, "method == 'SystemChrome.systemUIChange'");
        let args = core.List.as(methodCall.arguments);
        if (this[_systemUiChangeCallback] != null) {
          yield dart.nullCheck(this[_systemUiChangeCallback])(core.bool.as(args[$_get](0)));
        }
      }).bind(this));
    }
    get restorationManager() {
      return this[_restorationManager];
    }
    get [_restorationManager]() {
      let t45;
      t45 = this[__ServicesBinding__restorationManager];
      return t45 == null ? dart.throw(new _internal.LateError.fieldNI("_restorationManager")) : t45;
    }
    set [_restorationManager](library$32package$58flutter$47src$47services$47binding$46dart$58$58_restorationManager$35param) {
      this[__ServicesBinding__restorationManager] = library$32package$58flutter$47src$47services$47binding$46dart$58$58_restorationManager$35param;
    }
    createRestorationManager() {
      return new restoration.RestorationManager.new();
    }
    setSystemUiChangeCallback(callback) {
      this[_systemUiChangeCallback] = callback;
    }
  };
  (binding$0.ServicesBinding[dart.mixinNew] = function() {
    this[__ServicesBinding__keyboard] = null;
    this[__ServicesBinding__keyEventManager] = null;
    this[__ServicesBinding__defaultBinaryMessenger] = null;
    this[__ServicesBinding__restorationManager] = null;
    this[_systemUiChangeCallback] = null;
  }).prototype = binding$0.ServicesBinding.prototype;
  dart.addTypeTests(binding$0.ServicesBinding);
  dart.addTypeCaches(binding$0.ServicesBinding);
  binding$0.ServicesBinding[dart.implements] = () => [binding.SchedulerBinding, binding$.BindingBase];
  dart.setMethodSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getMethods(binding$0.ServicesBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    [_initKeyboard]: dart.fnType(dart.void, []),
    createBinaryMessenger: dart.fnType(binary_messenger.BinaryMessenger, []),
    handleMemoryPressure: dart.fnType(dart.void, []),
    handleSystemMessage: dart.fnType(async.Future$(dart.void), [core.Object]),
    initLicenses: dart.fnType(dart.void, []),
    [_addLicenses]: dart.fnType(async.Stream$(licenses$.LicenseEntry), []),
    initServiceExtensions: dart.fnType(dart.void, []),
    evict: dart.fnType(dart.void, [core.String]),
    readInitialLifecycleStateFromNativeWindow: dart.fnType(dart.void, []),
    [_handleLifecycleMessage]: dart.fnType(async.Future$(dart.nullable(core.String)), [dart.nullable(core.String)]),
    [_handlePlatformMessage]: dart.fnType(async.Future$(dart.void), [message_codec.MethodCall]),
    createRestorationManager: dart.fnType(restoration.RestorationManager, []),
    setSystemUiChangeCallback: dart.fnType(dart.void, [dart.nullable(dart.fnType(async.Future$(dart.void), [core.bool]))])
  }));
  dart.setStaticMethodSignature(binding$0.ServicesBinding, () => ['_parseLicenses', '_parseAppLifecycleMessage']);
  dart.setGetterSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getGetters(binding$0.ServicesBinding.__proto__),
    keyboard: hardware_keyboard.HardwareKeyboard,
    [_keyboard]: hardware_keyboard.HardwareKeyboard,
    keyEventManager: hardware_keyboard.KeyEventManager,
    [_keyEventManager]: hardware_keyboard.KeyEventManager,
    defaultBinaryMessenger: binary_messenger.BinaryMessenger,
    [_defaultBinaryMessenger]: binary_messenger.BinaryMessenger,
    channelBuffers: ui.ChannelBuffers,
    restorationManager: restoration.RestorationManager,
    [_restorationManager]: restoration.RestorationManager
  }));
  dart.setSetterSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getSetters(binding$0.ServicesBinding.__proto__),
    [_keyboard]: hardware_keyboard.HardwareKeyboard,
    [_keyEventManager]: hardware_keyboard.KeyEventManager,
    [_defaultBinaryMessenger]: binary_messenger.BinaryMessenger,
    [_restorationManager]: restoration.RestorationManager
  }));
  dart.setStaticGetterSignature(binding$0.ServicesBinding, () => ['instance']);
  dart.setLibraryUri(binding$0.ServicesBinding, I[36]);
  dart.setFieldSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getFields(binding$0.ServicesBinding.__proto__),
    [__ServicesBinding__keyboard]: dart.fieldType(dart.nullable(hardware_keyboard.HardwareKeyboard)),
    [__ServicesBinding__keyEventManager]: dart.fieldType(dart.nullable(hardware_keyboard.KeyEventManager)),
    [__ServicesBinding__defaultBinaryMessenger]: dart.fieldType(dart.nullable(binary_messenger.BinaryMessenger)),
    [__ServicesBinding__restorationManager]: dart.fieldType(dart.nullable(restoration.RestorationManager)),
    [_systemUiChangeCallback]: dart.fieldType(dart.nullable(dart.fnType(async.Future$(dart.void), [core.bool])))
  }));
  dart.setStaticFieldSignature(binding$0.ServicesBinding, () => ['_instance']);
  dart.defineLazy(binding$0.ServicesBinding, {
    /*binding$0.ServicesBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  binding$0._DefaultBinaryMessenger = class _DefaultBinaryMessenger extends binary_messenger.BinaryMessenger {
    static ['_#_#tearOff']() {
      return new binding$0._DefaultBinaryMessenger.__();
    }
    handlePlatformMessage(channel, message, callback) {
      return async.async(dart.void, function* handlePlatformMessage() {
        ui.channelBuffers.push(channel, message, dart.fn(data => {
          if (callback != null) {
            callback(data);
          }
        }, T$.ByteDataNTovoid()));
      });
    }
    send(channel, message) {
      let completer = T$.CompleterOfByteDataN().new();
      ui.PlatformDispatcher.instance.sendPlatformMessage(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message response callback")}));
          } else
            throw e;
        }
      }, T$.ByteDataNTovoid()));
      return completer.future;
    }
    setMessageHandler(channel, handler) {
      if (handler == null) {
        ui.channelBuffers.clearListener(channel);
      } else {
        ui.channelBuffers.setListener(channel, dart.fn((data, callback) => async.async(dart.void, function*() {
          let response = null;
          try {
            response = (yield handler(data));
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message callback")}));
            } else
              throw e;
          } finally {
            callback(response);
          }
        }), T$.ByteDataNAndFnToFutureOfvoid()));
      }
    }
  };
  (binding$0._DefaultBinaryMessenger.__ = function() {
    binding$0._DefaultBinaryMessenger.__proto__.new.call(this);
    ;
  }).prototype = binding$0._DefaultBinaryMessenger.prototype;
  dart.addTypeTests(binding$0._DefaultBinaryMessenger);
  dart.addTypeCaches(binding$0._DefaultBinaryMessenger);
  dart.setMethodSignature(binding$0._DefaultBinaryMessenger, () => ({
    __proto__: dart.getMethods(binding$0._DefaultBinaryMessenger.__proto__),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(typed_data.ByteData), dart.nullable(dart.fnType(dart.void, [dart.nullable(typed_data.ByteData)]))]),
    send: dart.fnType(async.Future$(dart.nullable(typed_data.ByteData)), [core.String, dart.nullable(typed_data.ByteData)]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))])
  }));
  dart.setLibraryUri(binding$0._DefaultBinaryMessenger, I[36]);
  asset_bundle.AssetBundle = class AssetBundle extends core.Object {
    loadBuffer(key) {
      return async.async(ui.ImmutableBuffer, (function* loadBuffer() {
        let data = (yield this.load(key));
        return ui.ImmutableBuffer.fromUint8List(data[$buffer][$asUint8List]());
      }).bind(this));
    }
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      return async.async(core.String, (function* loadString() {
        let data = (yield this.load(key));
        if (data === null) {
          dart.throw(assertions.FlutterError.new("Unable to load asset: " + key));
        }
        if (data[$lengthInBytes] < 50 * 1024) {
          return convert.utf8.decode(data[$buffer][$asUint8List]());
        }
        return isolates.compute(typed_data.ByteData, core.String, C[156] || CT.C156, data, {debugLabel: "UTF8 decode for \"" + key + "\""});
      }).bind(this));
    }
    static _utf8decode(data) {
      return convert.utf8.decode(data[$buffer][$asUint8List]());
    }
    evict(key) {
    }
    clear() {
    }
    toString() {
      return diagnostics.describeIdentity(this) + "()";
    }
  };
  (asset_bundle.AssetBundle.new = function() {
    ;
  }).prototype = asset_bundle.AssetBundle.prototype;
  dart.addTypeTests(asset_bundle.AssetBundle);
  dart.addTypeCaches(asset_bundle.AssetBundle);
  dart.setMethodSignature(asset_bundle.AssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.AssetBundle.__proto__),
    loadBuffer: dart.fnType(async.Future$(ui.ImmutableBuffer), [core.String]),
    loadString: dart.fnType(async.Future$(core.String), [core.String], {cache: core.bool}, {}),
    evict: dart.fnType(dart.void, [core.String]),
    clear: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(asset_bundle.AssetBundle, () => ['_utf8decode']);
  dart.setLibraryUri(asset_bundle.AssetBundle, I[37]);
  dart.defineExtensionMethods(asset_bundle.AssetBundle, ['toString']);
  var _baseUrl = dart.privateName(asset_bundle, "_baseUrl");
  var _httpClient = dart.privateName(asset_bundle, "_httpClient");
  var _urlFromKey = dart.privateName(asset_bundle, "_urlFromKey");
  asset_bundle.NetworkAssetBundle = class NetworkAssetBundle extends asset_bundle.AssetBundle {
    static ['_#new#tearOff'](baseUrl) {
      return new asset_bundle.NetworkAssetBundle.new(baseUrl);
    }
    [_urlFromKey](key) {
      return this[_baseUrl].resolve(key);
    }
    load(key) {
      return async.async(typed_data.ByteData, (function* load() {
        let request = (yield this[_httpClient].getUrl(this[_urlFromKey](key)));
        let response = (yield request.close());
        if (response.statusCode !== 200) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unable to load asset: " + key), new diagnostics.IntProperty.new("HTTP status code", response.statusCode)])));
        }
        let bytes = (yield consolidate_response.consolidateHttpClientResponseBytes(response));
        return bytes[$buffer][$asByteData]();
      }).bind(this));
    }
    loadStructuredData(T, key, parser) {
      return async.async(T, (function* loadStructuredData() {
        if (!(key !== null)) dart.assertFailed(null, I[38], 157, 12, "key != null");
        if (!(parser !== null)) dart.assertFailed(null, I[38], 158, 12, "parser != null");
        return parser(yield this.loadString(key));
      }).bind(this));
    }
    toString() {
      return diagnostics.describeIdentity(this) + "(" + dart.str(this[_baseUrl]) + ")";
    }
  };
  (asset_bundle.NetworkAssetBundle.new = function(baseUrl) {
    this[_baseUrl] = baseUrl;
    this[_httpClient] = _http.HttpClient.new();
    ;
  }).prototype = asset_bundle.NetworkAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.NetworkAssetBundle);
  dart.addTypeCaches(asset_bundle.NetworkAssetBundle);
  dart.setMethodSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.NetworkAssetBundle.__proto__),
    [_urlFromKey]: dart.fnType(core.Uri, [core.String]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String]),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(asset_bundle.NetworkAssetBundle, I[37]);
  dart.setFieldSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.NetworkAssetBundle.__proto__),
    [_baseUrl]: dart.finalFieldType(core.Uri),
    [_httpClient]: dart.finalFieldType(_http.HttpClient)
  }));
  dart.defineExtensionMethods(asset_bundle.NetworkAssetBundle, ['toString']);
  var _stringCache = dart.privateName(asset_bundle, "_stringCache");
  var _structuredDataCache = dart.privateName(asset_bundle, "_structuredDataCache");
  asset_bundle.CachingAssetBundle = class CachingAssetBundle extends asset_bundle.AssetBundle {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      if (cache) {
        return this[_stringCache][$putIfAbsent](key, dart.fn(() => super.loadString(key), T$.VoidToFutureOfString()));
      }
      return super.loadString(key);
    }
    loadStructuredData(T, key, parser) {
      if (!(key !== null)) dart.assertFailed(null, I[38], 202, 12, "key != null");
      if (!(parser !== null)) dart.assertFailed(null, I[38], 203, 12, "parser != null");
      if (this[_structuredDataCache][$containsKey](key)) {
        return async.Future$(T).as(dart.nullCheck(this[_structuredDataCache][$_get](key)));
      }
      let completer = null;
      let result = null;
      this.loadString(key, {cache: false}).then(T, parser).then(dart.void, dart.fn(value => {
        result = new (synchronous_future.SynchronousFuture$(T)).new(value);
        this[_structuredDataCache][$_set](key, dart.nullCheck(result));
        if (completer != null) {
          completer.complete(value);
        }
      }, dart.fnType(core.Null, [T])));
      if (result != null) {
        return dart.nullCheck(result);
      }
      completer = async.Completer$(T).new();
      this[_structuredDataCache][$_set](key, completer.future);
      return completer.future;
    }
    evict(key) {
      this[_stringCache][$remove](key);
      this[_structuredDataCache][$remove](key);
    }
    clear() {
      this[_stringCache][$clear]();
      this[_structuredDataCache][$clear]();
    }
    loadBuffer(key) {
      return async.async(ui.ImmutableBuffer, (function* loadBuffer() {
        let data = (yield this.load(key));
        return ui.ImmutableBuffer.fromUint8List(data[$buffer][$asUint8List]());
      }).bind(this));
    }
  };
  (asset_bundle.CachingAssetBundle.new = function() {
    this[_stringCache] = new (T$.IdentityMapOfString$FutureOfString()).new();
    this[_structuredDataCache] = new (T$.IdentityMapOfString$Future()).new();
    ;
  }).prototype = asset_bundle.CachingAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.CachingAssetBundle);
  dart.addTypeCaches(asset_bundle.CachingAssetBundle);
  dart.setMethodSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.CachingAssetBundle.__proto__),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(asset_bundle.CachingAssetBundle, I[37]);
  dart.setFieldSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.CachingAssetBundle.__proto__),
    [_stringCache]: dart.finalFieldType(core.Map$(core.String, async.Future$(core.String))),
    [_structuredDataCache]: dart.finalFieldType(core.Map$(core.String, async.Future))
  }));
  asset_bundle.PlatformAssetBundle = class PlatformAssetBundle extends asset_bundle.CachingAssetBundle {
    load(key) {
      return async.async(typed_data.ByteData, function* load() {
        let encoded = convert.utf8.encoder.convert(core._Uri.new({path: core.Uri.encodeFull(key)}).path);
        let asset = (yield binding$0.ServicesBinding.instance.defaultBinaryMessenger.send("flutter/assets", encoded[$buffer][$asByteData]()));
        if (asset == null) {
          dart.throw(assertions.FlutterError.new("Unable to load asset: " + key));
        }
        return asset;
      });
    }
    loadBuffer(key) {
      return async.async(ui.ImmutableBuffer, (function* loadBuffer() {
        {
          let bytes = (yield this.load(key));
          return ui.ImmutableBuffer.fromUint8List(bytes[$buffer][$asUint8List]());
        }
        try {
          return yield ui.ImmutableBuffer.fromAsset(key);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (core.Exception.is(ex)) {
            dart.throw(assertions.FlutterError.new("Unable to load asset: " + key + "."));
          } else
            throw e;
        }
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new asset_bundle.PlatformAssetBundle.new();
    }
  };
  (asset_bundle.PlatformAssetBundle.new = function() {
    asset_bundle.PlatformAssetBundle.__proto__.new.call(this);
    ;
  }).prototype = asset_bundle.PlatformAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.PlatformAssetBundle);
  dart.addTypeCaches(asset_bundle.PlatformAssetBundle);
  dart.setMethodSignature(asset_bundle.PlatformAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.PlatformAssetBundle.__proto__),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String])
  }));
  dart.setLibraryUri(asset_bundle.PlatformAssetBundle, I[37]);
  asset_bundle._initRootBundle = function _initRootBundle() {
    return new asset_bundle.PlatformAssetBundle.new();
  };
  dart.defineLazy(asset_bundle, {
    /*asset_bundle.rootBundle*/get rootBundle() {
      return asset_bundle._initRootBundle();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/services/text_editing_delta.dart", {
    "package:flutter/src/services/text_editing_delta.dart": text_editing_delta,
    "package:flutter/src/services/clipboard.dart": clipboard,
    "package:flutter/src/services/autofill.dart": autofill,
    "package:flutter/src/services/text_input.dart": text_input,
    "package:flutter/src/services/restoration.dart": restoration,
    "package:flutter/src/services/debug.dart": debug,
    "package:flutter/src/services/platform_channel.dart": platform_channel,
    "package:flutter/src/services/message_codec.dart": message_codec,
    "package:flutter/src/services/message_codecs.dart": message_codecs,
    "package:flutter/src/services/system_channels.dart": system_channels,
    "package:flutter/src/services/raw_keyboard_windows.dart": raw_keyboard_windows,
    "package:flutter/src/services/raw_keyboard_web.dart": raw_keyboard_web,
    "package:flutter/src/services/raw_keyboard_macos.dart": raw_keyboard_macos,
    "package:flutter/src/services/raw_keyboard_linux.dart": raw_keyboard_linux,
    "package:flutter/src/services/raw_keyboard_ios.dart": raw_keyboard_ios,
    "package:flutter/src/services/raw_keyboard_fuchsia.dart": raw_keyboard_fuchsia,
    "package:flutter/src/services/raw_keyboard_android.dart": raw_keyboard_android,
    "package:flutter/src/services/raw_keyboard.dart": raw_keyboard,
    "package:flutter/src/services/hardware_keyboard.dart": hardware_keyboard,
    "package:flutter/src/services/binding.dart": binding$0,
    "package:flutter/src/services/asset_bundle.dart": asset_bundle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_editing_delta.dart","clipboard.dart","autofill.dart","text_input.dart","restoration.dart","debug.dart","platform_channel.dart","message_codec.dart","message_codecs.dart","system_channels.dart","raw_keyboard.dart","raw_keyboard_windows.dart","raw_keyboard_web.dart","raw_keyboard_macos.dart","raw_keyboard_linux.dart","raw_keyboard_ios.dart","raw_keyboard_fuchsia.dart","raw_keyboard_android.dart","hardware_keyboard.dart","binding.dart","asset_bundle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"../../../../../../../../../../packages/flutter/src/services/text_editing_delta.dart.lib.js"}');
  // Exports:
  return {
    src__services__text_editing_delta: text_editing_delta,
    src__services__clipboard: clipboard,
    src__services__autofill: autofill,
    src__services__text_input: text_input,
    src__services__restoration: restoration,
    src__services__debug: debug,
    src__services__platform_channel: platform_channel,
    src__services__message_codec: message_codec,
    src__services__message_codecs: message_codecs,
    src__services__system_channels: system_channels,
    src__services__raw_keyboard_windows: raw_keyboard_windows,
    src__services__raw_keyboard_web: raw_keyboard_web,
    src__services__raw_keyboard_macos: raw_keyboard_macos,
    src__services__raw_keyboard_linux: raw_keyboard_linux,
    src__services__raw_keyboard_ios: raw_keyboard_ios,
    src__services__raw_keyboard_fuchsia: raw_keyboard_fuchsia,
    src__services__raw_keyboard_android: raw_keyboard_android,
    src__services__raw_keyboard: raw_keyboard,
    src__services__hardware_keyboard: hardware_keyboard,
    src__services__binding: binding$0,
    src__services__asset_bundle: asset_bundle
  };
}));

//# sourceMappingURL=text_editing_delta.dart.lib.js.map
