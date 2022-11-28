define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/url_launcher_platform_interface/link.dart', 'packages/flutter/src/rendering/stack.dart', 'packages/flutter/src/widgets/platform_view.dart', 'packages/flutter/src/foundation/basic_types.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/rendering/platform_view.dart', 'packages/flutter/src/services/platform_views.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter_web_plugins/src/navigation/url_strategy.dart', 'packages/flutter/src/gestures/events.dart'], (function load__packages__url_launcher_web__src__link_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__url_launcher_platform_interface__link$46dart, packages__flutter__src__rendering__stack$46dart, packages__flutter__src__widgets__platform_view$46dart, packages__flutter__src__foundation__basic_types$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__rendering__platform_view$46dart, packages__flutter__src__services__platform_views$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter_web_plugins__src__navigation__url_strategy$46dart, packages__flutter__src__gestures__events$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const js_util = dart_sdk.js_util;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const link = packages__url_launcher_platform_interface__link$46dart.link;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  const platform_view = packages__flutter__src__widgets__platform_view$46dart.src__widgets__platform_view;
  const basic_types = packages__flutter__src__foundation__basic_types$46dart.src__foundation__basic_types;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const platform_view$ = packages__flutter__src__rendering__platform_view$46dart.src__rendering__platform_view;
  const platform_views = packages__flutter__src__services__platform_views$46dart.src__services__platform_views;
  const system_channels = packages__flutter__src__services__text_editing_delta$46dart.src__services__system_channels;
  const url_strategy = packages__flutter_web_plugins__src__navigation__url_strategy$46dart.src__navigation__url_strategy;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  var link$ = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $isEmpty = dartx.isEmpty;
  var $onClick = dartx.onClick;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $style = dartx.style;
  var $opacity = dartx.opacity;
  var $display = dartx.display;
  var $width = dartx.width;
  var $height = dartx.height;
  var $cursor = dartx.cursor;
  var $setAttribute = dartx.setAttribute;
  var $toString = dartx.toString;
  var $removeAttribute = dartx.removeAttribute;
  var $remove = dartx.remove;
  var $target = dartx.target;
  var $shadowRoot = dartx.shadowRoot;
  var $tagName = dartx.tagName;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    PlatformViewCreationParamsToLinkViewController: () => (T.PlatformViewCreationParamsToLinkViewController = dart.constFn(dart.fnType(link$.LinkViewController, [platform_view.PlatformViewCreationParams])))(),
    FactoryOfOneSequenceGestureRecognizer: () => (T.FactoryOfOneSequenceGestureRecognizer = dart.constFn(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer)))(),
    BuildContextAndPlatformViewControllerToPlatformViewSurface: () => (T.BuildContextAndPlatformViewControllerToPlatformViewSurface = dart.constFn(dart.fnType(platform_view.PlatformViewSurface, [framework.BuildContext, platform_views.PlatformViewController])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    voidToNull: () => (T.voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    IdentityMapOfint$LinkViewController: () => (T.IdentityMapOfint$LinkViewController = dart.constFn(_js_helper.IdentityMap$(core.int, link$.LinkViewController)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    intToElement: () => (T.intToElement = dart.constFn(dart.fnType(html.Element, [core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "WebLinkDelegate",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/url_launcher_web-2.0.13/lib/src/link.dart"
      });
    },
    get C1() {
      return C[1] = dart.constSet(T.FactoryOfOneSequenceGestureRecognizer(), []);
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PlatformViewSurface",
        [_Location_column]: 22,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/url_launcher_web-2.0.13/lib/src/link.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PlatformViewLink",
        [_Location_column]: 18,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/url_launcher_web-2.0.13/lib/src/link.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 20,
        [_Location_line]: 75,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/url_launcher_web-2.0.13/lib/src/link.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 12,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/url_launcher_web-2.0.13/lib/src/link.dart"
      });
    },
    get C6() {
      return C[6] = dart.fn(link$.LinkViewController._onGlobalClick, T.MouseEventTovoid());
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: link.LinkTarget.prototype,
        [LinkTarget_debugLabel]: "defaultTarget"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: link.LinkTarget.prototype,
        [LinkTarget_debugLabel]: "self"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: link.LinkTarget.prototype,
        [LinkTarget_debugLabel]: "blank"
      });
    },
    get C10() {
      return C[10] = dart.fn(link$.LinkViewController._viewFactory, T.intToElement());
    }
  }, false);
  var C = Array(11).fill(void 0);
  var I = [
    "package:url_launcher_web/src/link.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/url_launcher_web-2.0.13/lib/src/link.dart"
  ];
  var link$0 = dart.privateName(link$, "WebLinkDelegate.link");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  link$.WebLinkDelegate = class WebLinkDelegate extends framework.StatefulWidget {
    get link() {
      return this[link$0];
    }
    set link(value) {
      super.link = value;
    }
    static ['_#new#tearOff'](link, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new link$.WebLinkDelegate.new(link, {key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new link$.WebLinkDelegateState.new();
    }
  };
  (link$.WebLinkDelegate.new = function(link, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[link$0] = link;
    link$.WebLinkDelegate.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = link$.WebLinkDelegate.prototype;
  dart.addTypeTests(link$.WebLinkDelegate);
  dart.addTypeCaches(link$.WebLinkDelegate);
  dart.setMethodSignature(link$.WebLinkDelegate, () => ({
    __proto__: dart.getMethods(link$.WebLinkDelegate.__proto__),
    createState: dart.fnType(link$.WebLinkDelegateState, [])
  }));
  dart.setLibraryUri(link$.WebLinkDelegate, I[0]);
  dart.setFieldSignature(link$.WebLinkDelegate, () => ({
    __proto__: dart.getFields(link$.WebLinkDelegate.__proto__),
    link: dart.finalFieldType(link.LinkInfo)
  }));
  var __WebLinkDelegateState__controller = dart.privateName(link$, "_#WebLinkDelegateState#_controller");
  var _controller = dart.privateName(link$, "_controller");
  var _followLink = dart.privateName(link$, "_followLink");
  link$.WebLinkDelegateState = class WebLinkDelegateState extends framework.State$(link$.WebLinkDelegate) {
    get [_controller]() {
      let t0;
      t0 = this[__WebLinkDelegateState__controller];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t0;
    }
    set [_controller](library$32package$58url_launcher_web$47src$47link$46dart$58$58_controller$35param) {
      this[__WebLinkDelegateState__controller] = library$32package$58url_launcher_web$47src$47link$46dart$58$58_controller$35param;
    }
    didUpdateWidget(oldWidget) {
      link$.WebLinkDelegate.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.link.uri, oldWidget.link.uri)) {
        this[_controller].setUri(this.widget.link.uri);
      }
      if (!this.widget.link.target[$_equals](oldWidget.link.target)) {
        this[_controller].setTarget(this.widget.link.target);
      }
    }
    [_followLink]() {
      link$.LinkViewController.registerHitTest(this[_controller]);
      return T.FutureOfvoid().value();
    }
    build(context) {
      let t2, t1, t0;
      return new basic.Stack.new({fit: stack.StackFit.passthrough, children: T.JSArrayOfWidget().of([(t0 = this.widget.link, t1 = context, t2 = this.widget.link.isDisabled ? null : dart.bind(this, _followLink), t0.builder(t1, t2)), new basic.Positioned.fill({child: new platform_view.PlatformViewLink.new({viewType: "__url_launcher::link", onCreatePlatformView: dart.fn(params => {
                let t0;
                this[_controller] = link$.LinkViewController.fromParams(params);
                t0 = this[_controller];
                return (() => {
                  t0.setUri(this.widget.link.uri);
                  t0.setTarget(this.widget.link.target);
                  return t0;
                })();
              }, T.PlatformViewCreationParamsToLinkViewController()), surfaceFactory: dart.fn((context, controller) => new platform_view.PlatformViewSurface.new({controller: controller, gestureRecognizers: C[1] || CT.C1, hitTestBehavior: platform_view$.PlatformViewHitTestBehavior.transparent, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), T.BuildContextAndPlatformViewControllerToPlatformViewSurface()), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4})]), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    static ['_#new#tearOff']() {
      return new link$.WebLinkDelegateState.new();
    }
  };
  (link$.WebLinkDelegateState.new = function() {
    this[__WebLinkDelegateState__controller] = null;
    link$.WebLinkDelegateState.__proto__.new.call(this);
    ;
  }).prototype = link$.WebLinkDelegateState.prototype;
  dart.addTypeTests(link$.WebLinkDelegateState);
  dart.addTypeCaches(link$.WebLinkDelegateState);
  dart.setMethodSignature(link$.WebLinkDelegateState, () => ({
    __proto__: dart.getMethods(link$.WebLinkDelegateState.__proto__),
    [_followLink]: dart.fnType(async.Future$(dart.void), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(link$.WebLinkDelegateState, () => ({
    __proto__: dart.getGetters(link$.WebLinkDelegateState.__proto__),
    [_controller]: link$.LinkViewController
  }));
  dart.setSetterSignature(link$.WebLinkDelegateState, () => ({
    __proto__: dart.getSetters(link$.WebLinkDelegateState.__proto__),
    [_controller]: link$.LinkViewController
  }));
  dart.setLibraryUri(link$.WebLinkDelegateState, I[0]);
  dart.setFieldSignature(link$.WebLinkDelegateState, () => ({
    __proto__: dart.getFields(link$.WebLinkDelegateState.__proto__),
    [__WebLinkDelegateState__controller]: dart.fieldType(dart.nullable(link$.LinkViewController))
  }));
  var viewId$ = dart.privateName(link$, "LinkViewController.viewId");
  var __LinkViewController__element = dart.privateName(link$, "_#LinkViewController#_element");
  var _uri = dart.privateName(link$, "_uri");
  var _initialize = dart.privateName(link$, "_initialize");
  var _element = dart.privateName(link$, "_element");
  var _onDomClick = dart.privateName(link$, "_onDomClick");
  var _isInitialized = dart.privateName(link$, "_isInitialized");
  var _getHtmlTarget = dart.privateName(link$, "_getHtmlTarget");
  var LinkTarget_debugLabel = dart.privateName(link, "LinkTarget.debugLabel");
  link$.LinkViewController = class LinkViewController extends platform_views.PlatformViewController {
    get viewId() {
      return this[viewId$];
    }
    set viewId(value) {
      super.viewId = value;
    }
    static ['_#new#tearOff'](viewId) {
      return new link$.LinkViewController.new(viewId);
    }
    static fromParams(params) {
      let viewId = params.id;
      let controller = new link$.LinkViewController.new(viewId);
      controller[_initialize]().then(core.Null, dart.fn(_ => {
        let t1, t0;
        if (dart.equals(link$.LinkViewController._instances[$_get](viewId), controller)) {
          t0 = params;
          t1 = viewId;
          t0.onPlatformViewCreated(t1);
        }
      }, T.voidToNull()));
      return controller;
    }
    static ['_#fromParams#tearOff'](params) {
      return link$.LinkViewController.fromParams(params);
    }
    static _viewFactory(viewId) {
      return dart.nullCheck(link$.LinkViewController._instances[$_get](viewId))[_element];
    }
    static get _clickSubscription() {
      let t0;
      t0 = link$.LinkViewController['_#_clickSubscription'];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_clickSubscription")) : t0;
    }
    static set _clickSubscription(library$32package$58url_launcher_web$47src$47link$46dart$58$58_clickSubscription$35param) {
      link$.LinkViewController['_#_clickSubscription'] = library$32package$58url_launcher_web$47src$47link$46dart$58$58_clickSubscription$35param;
    }
    static _onGlobalClick(event) {
      let t0;
      let viewId = link$.getViewIdFromTarget(event);
      t0 = link$.LinkViewController._instances[$_get](viewId);
      t0 == null ? null : t0[_onDomClick](event);
      link$.LinkViewController.unregisterHitTest();
    }
    static registerHitTest(controller) {
      link$.LinkViewController._hitTestedViewId = controller.viewId;
    }
    static unregisterHitTest() {
      link$.LinkViewController._hitTestedViewId = null;
    }
    get [_element]() {
      let t0;
      t0 = this[__LinkViewController__element];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_element")) : t0;
    }
    set [_element](library$32package$58url_launcher_web$47src$47link$46dart$58$58_element$35param) {
      this[__LinkViewController__element] = library$32package$58url_launcher_web$47src$47link$46dart$58$58_element$35param;
    }
    get [_isInitialized]() {
      return this[_element] !== null;
    }
    [_initialize]() {
      return async.async(dart.void, (function* _initialize() {
        let t0;
        this[_element] = html.Element.tag("a");
        js_util._setPropertyUnchecked(core.int, this[_element], "__url_launcher::link::viewId", this.viewId);
        t0 = this[_element][$style];
        (() => {
          t0[$opacity] = "0";
          t0[$display] = "block";
          t0[$width] = "100%";
          t0[$height] = "100%";
          t0[$cursor] = "unset";
          return t0;
        })();
        this[_element][$setAttribute]("rel", "noreferrer noopener");
        let args = new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "viewType", "__url_launcher::link"]);
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "create", args);
      }).bind(this));
    }
    [_onDomClick](event) {
      let isHitTested = link$.LinkViewController._hitTestedViewId === this.viewId;
      if (!isHitTested) {
        event.preventDefault();
        return;
      }
      if (this[_uri] != null && dart.nullCheck(this[_uri]).hasScheme) {
        return;
      }
      event.preventDefault();
      let routeName = dart.toString(this[_uri]);
      link.pushRouteNameToFramework(null, routeName);
    }
    setUri(uri) {
      let t0, t0$;
      if (!this[_isInitialized]) dart.assertFailed(null, I[1], 222, 12, "_isInitialized");
      this[_uri] = uri;
      if (uri == null) {
        this[_element][$removeAttribute]("href");
      } else {
        let href = dart.toString(uri);
        if (!uri.hasScheme) {
          href = (t0$ = (t0 = url_strategy.urlStrategy, t0 == null ? null : t0.prepareExternalUrl(href)), t0$ == null ? href : t0$);
        }
        this[_element][$setAttribute]("href", href);
      }
    }
    setTarget(target) {
      if (!this[_isInitialized]) dart.assertFailed(null, I[1], 239, 12, "_isInitialized");
      this[_element][$setAttribute]("target", this[_getHtmlTarget](target));
    }
    [_getHtmlTarget](target) {
      switch (target) {
        case C[7] || CT.C7:
        case C[8] || CT.C8:
          {
            return "_self";
          }
        case C[9] || CT.C9:
          {
            return "_blank";
          }
        default:
          {
            dart.throw(core.Exception.new("Unknown LinkTarget value " + dart.str(target) + "."));
          }
      }
    }
    clearFocus() {
      return async.async(dart.void, function* clearFocus() {
      });
    }
    dispatchPointerEvent(event) {
      return async.async(dart.void, function* dispatchPointerEvent() {
      });
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        if (this[_isInitialized]) {
          if (!dart.equals(link$.LinkViewController._instances[$_get](this.viewId), this)) dart.assertFailed(null, I[1], 270, 14, "_instances[viewId] == this");
          link$.LinkViewController._instances[$remove](this.viewId);
          if (link$.LinkViewController._instances[$isEmpty]) {
            yield link$.LinkViewController._clickSubscription.cancel();
          }
          yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.viewId);
        }
      }).bind(this));
    }
  };
  (link$.LinkViewController.new = function(viewId) {
    this[__LinkViewController__element] = null;
    this[_uri] = null;
    this[viewId$] = viewId;
    if (link$.LinkViewController._instances[$isEmpty]) {
      link$.LinkViewController._clickSubscription = html.window[$onClick].listen(C[6] || CT.C6);
    }
    link$.LinkViewController._instances[$_set](this.viewId, this);
  }).prototype = link$.LinkViewController.prototype;
  dart.addTypeTests(link$.LinkViewController);
  dart.addTypeCaches(link$.LinkViewController);
  dart.setMethodSignature(link$.LinkViewController, () => ({
    __proto__: dart.getMethods(link$.LinkViewController.__proto__),
    [_initialize]: dart.fnType(async.Future$(dart.void), []),
    [_onDomClick]: dart.fnType(dart.void, [html.MouseEvent]),
    setUri: dart.fnType(dart.void, [dart.nullable(core.Uri)]),
    setTarget: dart.fnType(dart.void, [link.LinkTarget]),
    [_getHtmlTarget]: dart.fnType(core.String, [link.LinkTarget]),
    clearFocus: dart.fnType(async.Future$(dart.void), []),
    dispatchPointerEvent: dart.fnType(async.Future$(dart.void), [events.PointerEvent]),
    dispose: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setStaticMethodSignature(link$.LinkViewController, () => ['fromParams', '_viewFactory', '_onGlobalClick', 'registerHitTest', 'unregisterHitTest']);
  dart.setGetterSignature(link$.LinkViewController, () => ({
    __proto__: dart.getGetters(link$.LinkViewController.__proto__),
    [_element]: html.Element,
    [_isInitialized]: core.bool
  }));
  dart.setSetterSignature(link$.LinkViewController, () => ({
    __proto__: dart.getSetters(link$.LinkViewController.__proto__),
    [_element]: html.Element
  }));
  dart.setStaticGetterSignature(link$.LinkViewController, () => ['_clickSubscription']);
  dart.setStaticSetterSignature(link$.LinkViewController, () => ['_clickSubscription']);
  dart.setLibraryUri(link$.LinkViewController, I[0]);
  dart.setFieldSignature(link$.LinkViewController, () => ({
    __proto__: dart.getFields(link$.LinkViewController.__proto__),
    viewId: dart.finalFieldType(core.int),
    [__LinkViewController__element]: dart.fieldType(dart.nullable(html.Element)),
    [_uri]: dart.fieldType(dart.nullable(core.Uri))
  }));
  dart.setStaticFieldSignature(link$.LinkViewController, () => ['_instances', '_hitTestedViewId', '_#_clickSubscription']);
  dart.defineLazy(link$.LinkViewController, {
    /*link$.LinkViewController._instances*/get _instances() {
      return new (T.IdentityMapOfint$LinkViewController()).new();
    },
    /*link$.LinkViewController._hitTestedViewId*/get _hitTestedViewId() {
      return null;
    },
    set _hitTestedViewId(_) {},
    /*link$.LinkViewController['_#_clickSubscription']*/get ['_#_clickSubscription']() {
      return null;
    },
    set ['_#_clickSubscription'](_) {}
  }, false);
  link$.getViewIdFromTarget = function getViewIdFromTarget(event) {
    let linkElement = link$.getLinkElementFromTarget(event);
    if (linkElement != null) {
      return js_util.getProperty(T.intN(), linkElement, "__url_launcher::link::viewId");
    }
    return null;
  };
  link$.getLinkElementFromTarget = function getLinkElementFromTarget(event) {
    let target = event[$target];
    if (target != null && html.Element.is(target)) {
      if (link$.isLinkElement(target)) {
        return target;
      }
      if (target[$shadowRoot] != null) {
        let child = dart.nullCheck(target[$shadowRoot]).lastChild;
        if (child != null && html.Element.is(child) && link$.isLinkElement(child)) {
          return child;
        }
      }
    }
    return null;
  };
  link$.isLinkElement = function isLinkElement(element) {
    return element != null && element[$tagName] === "A" && js_util.hasProperty(element, "__url_launcher::link::viewId");
  };
  dart.copyProperties(link$, {
    get linkViewFactory() {
      return C[10] || CT.C10;
    }
  });
  dart.defineLazy(link$, {
    /*link$.linkViewType*/get linkViewType() {
      return "__url_launcher::link";
    },
    /*link$.linkViewIdProperty*/get linkViewIdProperty() {
      return "__url_launcher::link::viewId";
    }
  }, false);
  dart.trackLibraries("packages/url_launcher_web/src/link.dart", {
    "package:url_launcher_web/src/link.dart": link$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["link.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/url_launcher_web/src/link.dart.lib.js"}');
  // Exports:
  return {
    src__link: link$
  };
}));

//# sourceMappingURL=link.dart.lib.js.map
