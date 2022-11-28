define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/material/icon_button.dart'], (function load__packages__my_ticket_care__reusable__widgets__unexpected_error_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__material__icon_button$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  var unexpected_error = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UnexpectedError",
        [_Location_column]: 9,
        [_Location_line]: 4,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/unexpected_error.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 11,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/unexpected_error.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/unexpected_error.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/unexpected_error.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/unexpected_error.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/unexpected_error.dart"
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = ["package:my_ticket_care/reusable/widgets/unexpected_error.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  unexpected_error.UnexpectedError = class UnexpectedError extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new unexpected_error.UnexpectedError.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.error_outline, {size: 50.0, color: theme.Theme.of(context).colorScheme.primary, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), new text.Text.new("Ocurrio un error inesperado", {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), new text.Text.new("Revisa tu conexión a internet", {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3})]), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
  };
  (unexpected_error.UnexpectedError.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    unexpected_error.UnexpectedError.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = unexpected_error.UnexpectedError.prototype;
  dart.addTypeTests(unexpected_error.UnexpectedError);
  dart.addTypeCaches(unexpected_error.UnexpectedError);
  dart.setMethodSignature(unexpected_error.UnexpectedError, () => ({
    __proto__: dart.getMethods(unexpected_error.UnexpectedError.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(unexpected_error.UnexpectedError, I[0]);
  dart.trackLibraries("packages/my_ticket_care/reusable/widgets/unexpected_error.dart", {
    "package:my_ticket_care/reusable/widgets/unexpected_error.dart": unexpected_error
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["unexpected_error.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,8BACE,yCACgC,yCAC3B,wBACR,kBACQ,kCACA,aACO,AAAY,AAAY,eAArB,OAAO,gFAEzB,kBACE,uCACa,AAAY,AAAU,eAAnB,OAAO,iFAEzB,kBACE,yCACa,AAAY,AAAU,eAAnB,OAAO;IAKjC;;;QAxB4B;;AAAQ,oEAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/reusable/widgets/unexpected_error.dart.lib.js"}');
  // Exports:
  return {
    reusable__widgets__unexpected_error: unexpected_error
  };
}));

//# sourceMappingURL=unexpected_error.dart.lib.js.map
