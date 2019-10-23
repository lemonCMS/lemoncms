(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("react"))
    : typeof define === "function" && define.amd
    ? define(["exports", "react"], factory)
    : ((global = global || self),
      factory((global.Miniverse = {}), global.React));
})(this, function(exports, React) {
  "use strict";

  var React__default = "default" in React ? React["default"] : React;

  function _extends() {
    _extends =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var commonjsGlobal =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : typeof self !== "undefined"
      ? self
      : {};

  function unwrapExports(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, "default")
      ? x["default"]
      : x;
  }

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }

  var reactIs_production_min = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.fundamental") : 60117,
      w = b ? Symbol.for("react.responder") : 60118,
      x = b ? Symbol.for("react.scope") : 60119;

    function y(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;

        switch (u) {
          case c:
            switch (((a = a.type), a)) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;

              default:
                switch (((a = a && a.$$typeof), a)) {
                  case k:
                  case n:
                  case h:
                    return a;

                  default:
                    return u;
                }
            }

          case t:
          case r:
          case d:
            return u;
        }
      }
    }

    function z(a) {
      return y(a) === m;
    }

    exports.typeOf = y;
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = t;
    exports.Memo = r;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;

    exports.isValidElementType = function(a) {
      return (
        "string" === typeof a ||
        "function" === typeof a ||
        a === e ||
        a === m ||
        a === g ||
        a === f ||
        a === p ||
        a === q ||
        ("object" === typeof a &&
          null !== a &&
          (a.$$typeof === t ||
            a.$$typeof === r ||
            a.$$typeof === h ||
            a.$$typeof === k ||
            a.$$typeof === n ||
            a.$$typeof === v ||
            a.$$typeof === w ||
            a.$$typeof === x))
      );
    };

    exports.isAsyncMode = function(a) {
      return z(a) || y(a) === l;
    };

    exports.isConcurrentMode = z;

    exports.isContextConsumer = function(a) {
      return y(a) === k;
    };

    exports.isContextProvider = function(a) {
      return y(a) === h;
    };

    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };

    exports.isForwardRef = function(a) {
      return y(a) === n;
    };

    exports.isFragment = function(a) {
      return y(a) === e;
    };

    exports.isLazy = function(a) {
      return y(a) === t;
    };

    exports.isMemo = function(a) {
      return y(a) === r;
    };

    exports.isPortal = function(a) {
      return y(a) === d;
    };

    exports.isProfiler = function(a) {
      return y(a) === g;
    };

    exports.isStrictMode = function(a) {
      return y(a) === f;
    };

    exports.isSuspense = function(a) {
      return y(a) === p;
    };
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function(module, exports) {
    {
      (function() {
        Object.defineProperty(exports, "__esModule", {
          value: true
        }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.

        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol
          ? Symbol.for("react.element")
          : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol
          ? Symbol.for("react.fragment")
          : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.strict_mode")
          : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol
          ? Symbol.for("react.profiler")
          : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol
          ? Symbol.for("react.provider")
          : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol
          ? Symbol.for("react.context")
          : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol
          ? Symbol.for("react.async_mode")
          : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.concurrent_mode")
          : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for("react.forward_ref")
          : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol
          ? Symbol.for("react.suspense")
          : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol
          ? Symbol.for("react.suspense_list")
          : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol
          ? Symbol.for("react.fundamental")
          : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol
          ? Symbol.for("react.responder")
          : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;

        function isValidElementType(type) {
          return (
            typeof type === "string" ||
            typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            (typeof type === "object" &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                type.$$typeof === REACT_RESPONDER_TYPE ||
                type.$$typeof === REACT_SCOPE_TYPE))
          );
        }
        /**
         * Forked from fbjs/warning:
         * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
         *
         * Only change is we use console.warn instead of console.error,
         * and do nothing when 'console' is not supported.
         * This really simplifies the code.
         * ---
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var lowPriorityWarningWithoutStack = function() {};

        {
          var printWarning = function(format) {
            for (
              var _len = arguments.length,
                args = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }

            var argIndex = 0;
            var message =
              "Warning: " +
              format.replace(/%s/g, function() {
                return args[argIndex++];
              });

            if (typeof console !== "undefined") {
              console.warn(message);
            }

            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };

          lowPriorityWarningWithoutStack = function(condition, format) {
            if (format === undefined) {
              throw new Error(
                "`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning " +
                  "message argument"
              );
            }

            if (!condition) {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2 > 2 ? _len2 - 2 : 0),
                  _key2 = 2;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2 - 2] = arguments[_key2];
              }

              printWarning.apply(void 0, [format].concat(args));
            }
          };
        }
        var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;

            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;

                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;

                  default:
                    var $$typeofType = type && type.$$typeof;

                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;

                      default:
                        return $$typeof;
                    }
                }

              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }

          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode

        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              lowPriorityWarningWithoutStack$1(
                false,
                "The ReactIs.isAsyncMode() alias has been deprecated, " +
                  "and will be removed in React 17+. Update your code to use " +
                  "ReactIs.isConcurrentMode() instead. It has the exact same API."
              );
            }
          }
          return (
            isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
          );
        }

        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }

        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }

        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }

        function isElement(object) {
          return (
            typeof object === "object" &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }

        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }

        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }

        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }

        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }

        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }

        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }

        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }

        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }

        exports.typeOf = typeOf;
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isValidElementType = isValidElementType;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
      })();
    }
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function(module) {
    {
      module.exports = reactIs_development;
    }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118

      var test1 = new String("abc"); // eslint-disable-line no-new-wrappers

      test1[5] = "de";

      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });

      if (order2.join("") !== "0123456789") {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });

      if (
        Object.keys(Object.assign({}, test3)).join("") !==
        "abcdefghijklmnopqrst"
      ) {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative()
    ? Object.assign
    : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);

            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function(text) {
      var message = "Warning: " + text;

      if (typeof console !== "undefined") {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */

  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") +
                  ": " +
                  location +
                  " type `" +
                  typeSpecName +
                  "` is invalid; " +
                  "it must be a function, usually from the `prop-types` package, but received `" +
                  typeof typeSpecs[typeSpecName] +
                  "`."
              );
              err.name = "Invariant Violation";
              throw err;
            }

            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret$1
            );
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") +
                ": type specification of " +
                location +
                " `" +
                typeSpecName +
                "` is invalid; the type checker " +
                "function must return `null` or an `Error` but returned a " +
                typeof error +
                ". " +
                "You may have forgotten to pass an argument to the type checker " +
                "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                "shape all require an argument)."
            );
          }

          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning(
              "Failed " +
                location +
                " type: " +
                error.message +
                (stack != null ? stack : "")
            );
          }
        }
      }
    }
  }
  /**
   * Resets warning cache when testing.
   *
   * @private
   */

  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
      var message = "Warning: " + text;

      if (typeof console !== "undefined") {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */

    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]);

      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = "<<anonymous>>"; // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */

    /*eslint-disable no-self-compare*/

    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */

    function PropTypeError(message) {
      this.message = message;
      this.stack = "";
    } // Make `instanceof Error` still work for returned errors.

    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }

      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                "Use `PropTypes.checkPropTypes()` to call them. " +
                "Read more at http://fb.me/use-check-prop-types"
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (typeof console !== "undefined") {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ":" + propName;

            if (
              !manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                "You are manually calling a React.PropTypes validation " +
                  "function for the `" +
                  propFullName +
                  "` prop on `" +
                  componentName +
                  "`. This is deprecated " +
                  "and will throw in the standalone `prop-types` package. " +
                  "You may be seeing this warning due to a third-party PropTypes " +
                  "library. See https://fb.me/react-warning-dont-call-proptypes " +
                  "for details."
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }

        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required " +
                  ("in `" + componentName + "`, but its value is `null`.")
              );
            }

            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required in " +
                ("`" + componentName + "`, but its value is `undefined`.")
            );
          }

          return null;
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          );
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                preciseType +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("`" + expectedType + "`.")
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside arrayOf."
          );
        }

        var propValue = props[propName];

        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an array.")
          );
        }

        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + "[" + i + "]",
            ReactPropTypesSecret_1
          );

          if (error instanceof Error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];

        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement.")
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];

        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement type.")
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                actualClassName +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("instance of `" + expectedClassName + "`.")
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1(
              "Invalid arguments supplied to oneOf, expected an array, got " +
                arguments.length +
                " arguments. " +
                "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
            );
          } else {
            printWarning$1(
              "Invalid argument supplied to oneOf, expected an array."
            );
          }
        }

        return emptyFunctionThatReturnsNull;
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];

        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(
          key,
          value
        ) {
          var type = getPreciseType(value);

          if (type === "symbol") {
            return String(value);
          }

          return value;
        });
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of value `" +
            String(propValue) +
            "` " +
            ("supplied to `" +
              componentName +
              "`, expected one of " +
              valuesString +
              ".")
        );
      }

      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside objectOf."
          );
        }

        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an object.")
          );
        }

        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret_1
            );

            if (error instanceof Error) {
              return error;
            }
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1(
          "Invalid argument supplied to oneOfType, expected an instance of array."
        );
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (typeof checker !== "function") {
          printWarning$1(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
              "received " +
              getPostfixForTypeWarning(checker) +
              " at index " +
              i +
              "."
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];

          if (
            checker(
              props,
              propName,
              componentName,
              location,
              propFullName,
              ReactPropTypesSecret_1
            ) == null
          ) {
            return null;
          }
        }

        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`.")
        );
      }

      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`, expected a ReactNode.")
          );
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`.")
          );
        }

        for (var key in shapeTypes) {
          var checker = shapeTypes[key];

          if (!checker) {
            continue;
          }

          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret_1
          );

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`.")
          );
        } // We need to check all keys in case some are required but missing from
        // props.

        var allKeys = objectAssign({}, props[propName], shapeTypes);

        for (var key in allKeys) {
          var checker = shapeTypes[key];

          if (!checker) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` key `" +
                key +
                "` supplied to `" +
                componentName +
                "`." +
                "\nBad object: " +
                JSON.stringify(props[propName], null, "  ") +
                "\nValid keys: " +
                JSON.stringify(Object.keys(shapeTypes), null, "  ")
            );
          }

          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret_1
          );

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;

        case "boolean":
          return !propValue;

        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }

          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);

          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;

            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;

                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;

        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === "symbol") {
        return true;
      } // falsy value can't be a Symbol

      if (!propValue) {
        return false;
      } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'

      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      } // Fallback for non-spec compliant Symbols which are polyfilled.

      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }

      return false;
    } // Equivalent of `typeof` but with special handling for array and regexp.

    function getPropType(propValue) {
      var propType = typeof propValue;

      if (Array.isArray(propValue)) {
        return "array";
      }

      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
      }

      if (isSymbol(propType, propValue)) {
        return "symbol";
      }

      return propType;
    } // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.

    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }

      var propType = getPropType(propValue);

      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }

      return propType;
    } // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"

    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);

      switch (type) {
        case "array":
        case "object":
          return "an " + type;

        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;

        default:
          return type;
      }
    } // Returns class name of the object, if any.

    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }

      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function(module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod

      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(
        ReactIs.isElement,
        throwOnDirectAccess
      );
    }
  });

  var toPath = function toPath(key) {
    if (key === null || key === undefined || !key.length) {
      return [];
    }

    if (typeof key !== "string") {
      throw new Error("toPath() expects a string");
    }

    return key.split(/[.[\]]+/).filter(Boolean);
  }; //

  var getIn = function getIn(state, complexKey) {
    // Intentionally using iteration rather than recursion
    var path = toPath(complexKey);
    var current = state;

    for (var i = 0; i < path.length; i++) {
      var key = path[i];

      if (
        current === undefined ||
        current === null ||
        typeof current !== "object" ||
        (Array.isArray(current) && isNaN(key))
      ) {
        return undefined;
      }

      current = current[key];
    }

    return current;
  };

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  var setInRecursor = function setInRecursor(
    current,
    index,
    path,
    value,
    destroyArrays
  ) {
    if (index >= path.length) {
      // end of recursion
      return value;
    }

    var key = path[index]; // determine type of key

    if (isNaN(key)) {
      var _extends2; // object set

      if (current === undefined || current === null) {
        var _ref; // recurse

        var _result2 = setInRecursor(
          undefined,
          index + 1,
          path,
          value,
          destroyArrays
        ); // delete or create an object

        return _result2 === undefined
          ? undefined
          : ((_ref = {}), (_ref[key] = _result2), _ref);
      }

      if (Array.isArray(current)) {
        throw new Error("Cannot set a non-numeric property on an array");
      } // current exists, so make a copy of all its values, and add/update the new one

      var _result = setInRecursor(
        current[key],
        index + 1,
        path,
        value,
        destroyArrays
      );

      if (_result === undefined) {
        var numKeys = Object.keys(current).length;

        if (current[key] === undefined && numKeys === 0) {
          // object was already empty
          return undefined;
        }

        if (current[key] !== undefined && numKeys <= 1) {
          // only key we had was the one we are deleting
          if (!isNaN(path[index - 1]) && !destroyArrays) {
            // we are in an array, so return an empty object
            return {};
          } else {
            return undefined;
          }
        }

        var _removed = current[key],
          _final = _objectWithoutPropertiesLoose(
            current,
            [key].map(_toPropertyKey)
          );

        return _final;
      } // set result in key

      return _extends(
        {},
        current,
        ((_extends2 = {}), (_extends2[key] = _result), _extends2)
      );
    } // array set

    var numericKey = Number(key);

    if (current === undefined || current === null) {
      // recurse
      var _result3 = setInRecursor(
        undefined,
        index + 1,
        path,
        value,
        destroyArrays
      ); // if nothing returned, delete it

      if (_result3 === undefined) {
        return undefined;
      } // create an array

      var _array = [];
      _array[numericKey] = _result3;
      return _array;
    }

    if (!Array.isArray(current)) {
      throw new Error("Cannot set a numeric property on an object");
    } // recurse

    var existingValue = current[numericKey];
    var result = setInRecursor(
      existingValue,
      index + 1,
      path,
      value,
      destroyArrays
    ); // current exists, so make a copy of all its values, and add/update the new one

    var array = [].concat(current);

    if (destroyArrays && result === undefined) {
      array.splice(numericKey, 1);

      if (array.length === 0) {
        return undefined;
      }
    } else {
      array[numericKey] = result;
    }

    return array;
  };

  var setIn = function setIn(state, key, value, destroyArrays) {
    if (destroyArrays === void 0) {
      destroyArrays = false;
    }

    if (state === undefined || state === null) {
      throw new Error("Cannot call setIn() with " + String(state) + " state");
    }

    if (key === undefined || key === null) {
      throw new Error("Cannot call setIn() with " + String(key) + " key");
    } // Recursive function needs to accept and return State, but public API should
    // only deal with Objects

    return setInRecursor(state, 0, toPath(key), value, destroyArrays);
  };

  var FORM_ERROR = "FINAL_FORM/form-error";
  var ARRAY_ERROR = "FINAL_FORM/array-error"; //

  /**
   * Converts internal field state to published field state
   */

  function publishFieldState(formState, field) {
    var errors = formState.errors,
      initialValues = formState.initialValues,
      lastSubmittedValues = formState.lastSubmittedValues,
      submitErrors = formState.submitErrors,
      submitFailed = formState.submitFailed,
      submitSucceeded = formState.submitSucceeded,
      submitting = formState.submitting,
      values = formState.values;
    var active = field.active,
      blur = field.blur,
      change = field.change,
      data = field.data,
      focus = field.focus,
      modified = field.modified,
      name = field.name,
      touched = field.touched,
      validating = field.validating,
      visited = field.visited;
    var value = getIn(values, name);
    var error = getIn(errors, name);

    if (error && error[ARRAY_ERROR]) {
      error = error[ARRAY_ERROR];
    }

    var submitError = submitErrors && getIn(submitErrors, name);
    var initial = initialValues && getIn(initialValues, name);
    var pristine = field.isEqual(initial, value);
    var dirtySinceLastSubmit = !!(
      lastSubmittedValues &&
      !field.isEqual(getIn(lastSubmittedValues, name), value)
    );
    var valid = !error && !submitError;
    return {
      active: active,
      blur: blur,
      change: change,
      data: data,
      dirty: !pristine,
      dirtySinceLastSubmit: dirtySinceLastSubmit,
      error: error,
      focus: focus,
      initial: initial,
      invalid: !valid,
      length: Array.isArray(value) ? value.length : undefined,
      modified: modified,
      name: name,
      pristine: pristine,
      submitError: submitError,
      submitFailed: submitFailed,
      submitSucceeded: submitSucceeded,
      submitting: submitting,
      touched: touched,
      valid: valid,
      value: value,
      visited: visited,
      validating: validating
    };
  } //

  var fieldSubscriptionItems = [
    "active",
    "data",
    "dirty",
    "dirtySinceLastSubmit",
    "error",
    "initial",
    "invalid",
    "length",
    "modified",
    "pristine",
    "submitError",
    "submitFailed",
    "submitSucceeded",
    "submitting",
    "touched",
    "valid",
    "value",
    "visited",
    "validating"
  ]; //

  var shallowEqual = function shallowEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (typeof a !== "object" || !a || typeof b !== "object" || !b) {
      return false;
    }

    var keysA = Object.keys(a);
    var keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

    for (var idx = 0; idx < keysA.length; idx++) {
      var key = keysA[idx];

      if (!bHasOwnProperty(key) || a[key] !== b[key]) {
        return false;
      }
    }

    return true;
  }; //

  function subscriptionFilter(
    dest,
    src,
    previous,
    subscription,
    keys,
    shallowEqualKeys
  ) {
    var different = false;
    keys.forEach(function(key) {
      if (subscription[key]) {
        dest[key] = src[key];

        if (
          !previous ||
          (~shallowEqualKeys.indexOf(key)
            ? !shallowEqual(src[key], previous[key])
            : src[key] !== previous[key])
        ) {
          different = true;
        }
      }
    });
    return different;
  } //

  var shallowEqualKeys = ["data"];
  /**
   * Filters items in a FieldState based on a FieldSubscription
   */

  var filterFieldState = function filterFieldState(
    state,
    previousState,
    subscription,
    force
  ) {
    var result = {
      blur: state.blur,
      change: state.change,
      focus: state.focus,
      name: state.name
    };
    var different =
      subscriptionFilter(
        result,
        state,
        previousState,
        subscription,
        fieldSubscriptionItems,
        shallowEqualKeys
      ) || !previousState;
    return different || force ? result : undefined;
  }; //

  var formSubscriptionItems = [
    "active",
    "dirty",
    "dirtyFields",
    "dirtySinceLastSubmit",
    "error",
    "errors",
    "hasSubmitErrors",
    "hasValidationErrors",
    "initialValues",
    "invalid",
    "modified",
    "pristine",
    "submitting",
    "submitError",
    "submitErrors",
    "submitFailed",
    "submitSucceeded",
    "touched",
    "valid",
    "validating",
    "values",
    "visited"
  ]; //

  var shallowEqualKeys$1 = ["touched", "visited"];
  /**
   * Filters items in a FormState based on a FormSubscription
   */

  function filterFormState(state, previousState, subscription, force) {
    var result = {};
    var different =
      subscriptionFilter(
        result,
        state,
        previousState,
        subscription,
        formSubscriptionItems,
        shallowEqualKeys$1
      ) || !previousState;
    return different || force ? result : undefined;
  } //

  var memoize = function memoize(fn) {
    var lastArgs;
    var lastResult;
    return function() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      if (
        !lastArgs ||
        args.length !== lastArgs.length ||
        args.some(function(arg, index) {
          return !shallowEqual(lastArgs[index], arg);
        })
      ) {
        lastArgs = args;
        lastResult = fn.apply(void 0, args);
      }

      return lastResult;
    };
  };

  var isPromise = function(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  };

  var version = "4.18.5";

  var tripleEquals = function tripleEquals(a, b) {
    return a === b;
  };

  var hasAnyError = function hasAnyError(errors) {
    return Object.keys(errors).some(function(key) {
      var value = errors[key];

      if (value && typeof value === "object" && !(value instanceof Error)) {
        return hasAnyError(value);
      }

      return typeof value !== "undefined";
    });
  };

  function convertToExternalFormState(_ref) {
    var active = _ref.active,
      dirtySinceLastSubmit = _ref.dirtySinceLastSubmit,
      error = _ref.error,
      errors = _ref.errors,
      initialValues = _ref.initialValues,
      pristine = _ref.pristine,
      submitting = _ref.submitting,
      submitFailed = _ref.submitFailed,
      submitSucceeded = _ref.submitSucceeded,
      submitError = _ref.submitError,
      submitErrors = _ref.submitErrors,
      valid = _ref.valid,
      validating = _ref.validating,
      values = _ref.values;
    return {
      active: active,
      dirty: !pristine,
      dirtySinceLastSubmit: dirtySinceLastSubmit,
      error: error,
      errors: errors,
      hasSubmitErrors: !!(
        submitError ||
        (submitErrors && hasAnyError(submitErrors))
      ),
      hasValidationErrors: !!(error || hasAnyError(errors)),
      invalid: !valid,
      initialValues: initialValues,
      pristine: pristine,
      submitting: submitting,
      submitFailed: submitFailed,
      submitSucceeded: submitSucceeded,
      submitError: submitError,
      submitErrors: submitErrors,
      valid: valid,
      validating: validating > 0,
      values: values
    };
  }

  function notifySubscriber(
    subscriber,
    subscription,
    state,
    lastState,
    filter,
    force
  ) {
    var notification = filter(state, lastState, subscription, force);

    if (notification) {
      subscriber(notification);
      return true;
    }

    return false;
  }

  function notify(_ref2, state, lastState, filter, force) {
    var entries = _ref2.entries;
    Object.keys(entries).forEach(function(key) {
      var entry = entries[Number(key)]; // istanbul ignore next

      if (entry) {
        var subscription = entry.subscription,
          subscriber = entry.subscriber,
          notified = entry.notified;

        if (
          notifySubscriber(
            subscriber,
            subscription,
            state,
            lastState,
            filter,
            force || !notified
          )
        ) {
          entry.notified = true;
        }
      }
    });
  }

  function createForm(config) {
    if (!config) {
      throw new Error("No config specified");
    }

    var debug = config.debug,
      destroyOnUnregister = config.destroyOnUnregister,
      keepDirtyOnReinitialize = config.keepDirtyOnReinitialize,
      initialValues = config.initialValues,
      mutators = config.mutators,
      onSubmit = config.onSubmit,
      validate = config.validate,
      validateOnBlur = config.validateOnBlur;

    if (!onSubmit) {
      throw new Error("No onSubmit function specified");
    }

    var state = {
      subscribers: {
        index: 0,
        entries: {}
      },
      fieldSubscribers: {},
      fields: {},
      formState: {
        dirtySinceLastSubmit: false,
        errors: {},
        initialValues: initialValues && _extends({}, initialValues),
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        submitSucceeded: false,
        valid: true,
        validating: 0,
        values: initialValues ? _extends({}, initialValues) : {}
      },
      lastFormState: undefined
    };
    var inBatch = false;
    var validationPaused = false;
    var validationBlocked = false;
    var nextAsyncValidationKey = 0;
    var asyncValidationPromises = {};

    var clearAsyncValidationPromise = function clearAsyncValidationPromise(
      key
    ) {
      return function(result) {
        delete asyncValidationPromises[key];
        return result;
      };
    };

    var changeValue = function changeValue(state, name, mutate) {
      var before = getIn(state.formState.values, name);
      var after = mutate(before);
      state.formState.values = setIn(state.formState.values, name, after) || {};
    };

    var renameField = function renameField(state, from, to) {
      if (state.fields[from]) {
        var _extends2, _extends3;

        state.fields = _extends(
          {},
          state.fields,
          ((_extends2 = {}),
          (_extends2[to] = _extends({}, state.fields[from], {
            name: to,
            // rebind event handlers
            blur: function blur() {
              return api.blur(to);
            },
            change: function change(value) {
              return api.change(to, value);
            },
            focus: function focus() {
              return api.focus(to);
            },
            lastFieldState: undefined
          })),
          _extends2)
        );
        delete state.fields[from];
        state.fieldSubscribers = _extends(
          {},
          state.fieldSubscribers,
          ((_extends3 = {}),
          (_extends3[to] = state.fieldSubscribers[from]),
          _extends3)
        );
        delete state.fieldSubscribers[from];
        var value = getIn(state.formState.values, from);
        state.formState.values =
          setIn(state.formState.values, from, undefined) || {};
        state.formState.values = setIn(state.formState.values, to, value);
        delete state.lastFormState;
      }
    }; // bind state to mutators

    var getMutatorApi = function getMutatorApi(key) {
      return function() {
        // istanbul ignore next
        if (mutators) {
          // ^^ causes branch coverage warning, but needed to appease the Flow gods
          var mutatableState = {
            formState: state.formState,
            fields: state.fields,
            fieldSubscribers: state.fieldSubscribers,
            lastFormState: state.lastFormState
          };

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          var returnValue = mutators[key](args, mutatableState, {
            changeValue: changeValue,
            getIn: getIn,
            renameField: renameField,
            resetFieldState: api.resetFieldState,
            setIn: setIn,
            shallowEqual: shallowEqual
          });
          state.formState = mutatableState.formState;
          state.fields = mutatableState.fields;
          state.fieldSubscribers = mutatableState.fieldSubscribers;
          state.lastFormState = mutatableState.lastFormState;
          runValidation(undefined, function() {
            notifyFieldListeners();
            notifyFormListeners();
          });
          return returnValue;
        }
      };
    };

    var mutatorsApi = mutators
      ? Object.keys(mutators).reduce(function(result, key) {
          result[key] = getMutatorApi(key);
          return result;
        }, {})
      : {};

    var runRecordLevelValidation = function runRecordLevelValidation(
      setErrors
    ) {
      var promises = [];

      if (validate) {
        var errorsOrPromise = validate(_extends({}, state.formState.values)); // clone to avoid writing

        if (isPromise(errorsOrPromise)) {
          promises.push(errorsOrPromise.then(setErrors));
        } else {
          setErrors(errorsOrPromise);
        }
      }

      return promises;
    };

    var getValidators = function getValidators(field) {
      return Object.keys(field.validators).reduce(function(result, index) {
        var validator = field.validators[Number(index)]();

        if (validator) {
          result.push(validator);
        }

        return result;
      }, []);
    };

    var runFieldLevelValidation = function runFieldLevelValidation(
      field,
      setError
    ) {
      var promises = [];
      var validators = getValidators(field);

      if (validators.length) {
        var error;
        validators.forEach(function(validator) {
          var errorOrPromise = validator(
            getIn(state.formState.values, field.name),
            state.formState.values,
            validator.length === 3
              ? publishFieldState(state.formState, state.fields[field.name])
              : undefined
          );

          if (errorOrPromise && isPromise(errorOrPromise)) {
            field.validating = true;
            var promise = errorOrPromise.then(function(error) {
              field.validating = false;
              setError(error);
            }); // errors must be resolved, not rejected

            promises.push(promise);
          } else if (!error) {
            // first registered validator wins
            error = errorOrPromise;
          }
        });
        setError(error);
      }

      return promises;
    };

    var runValidation = function runValidation(fieldChanged, callback) {
      if (validationPaused) {
        validationBlocked = true;
        callback();
        return;
      }

      var fields = state.fields,
        formState = state.formState;

      var safeFields = _extends({}, fields);

      var fieldKeys = Object.keys(safeFields);

      if (
        !validate &&
        !fieldKeys.some(function(key) {
          return getValidators(safeFields[key]).length;
        })
      ) {
        callback();
        return; // no validation rules
      } // pare down field keys to actually validate

      var limitedFieldLevelValidation = false;

      if (fieldChanged) {
        var changedField = safeFields[fieldChanged];

        if (changedField) {
          var validateFields = changedField.validateFields;

          if (validateFields) {
            limitedFieldLevelValidation = true;
            fieldKeys = validateFields.length
              ? validateFields.concat(fieldChanged)
              : [fieldChanged];
          }
        }
      }

      var recordLevelErrors = {};
      var fieldLevelErrors = {};
      var promises = [].concat(
        runRecordLevelValidation(function(errors) {
          recordLevelErrors = errors || {};
        }),
        fieldKeys.reduce(function(result, name) {
          return result.concat(
            runFieldLevelValidation(fields[name], function(error) {
              fieldLevelErrors[name] = error;
            })
          );
        }, [])
      );
      var hasAsyncValidations = promises.length > 0;
      var asyncValidationPromiseKey = ++nextAsyncValidationKey;
      var promise = Promise.all(promises).then(
        clearAsyncValidationPromise(asyncValidationPromiseKey)
      ); // backwards-compat: add promise to submit-blocking promises iff there are any promises to await

      if (hasAsyncValidations) {
        asyncValidationPromises[asyncValidationPromiseKey] = promise;
      }

      var processErrors = function processErrors() {
        var merged = _extends(
          {},
          limitedFieldLevelValidation ? formState.errors : {},
          recordLevelErrors
        );

        var forEachError = function forEachError(fn) {
          fieldKeys.forEach(function(name) {
            if (fields[name]) {
              // make sure field is still registered
              // field-level errors take precedent over record-level errors
              var recordLevelError = getIn(recordLevelErrors, name);
              var errorFromParent = getIn(merged, name);
              var hasFieldLevelValidation = getValidators(safeFields[name])
                .length;
              var fieldLevelError = fieldLevelErrors[name];
              fn(
                name,
                (hasFieldLevelValidation && fieldLevelError) ||
                  (validate && recordLevelError) ||
                  (!recordLevelError && !limitedFieldLevelValidation
                    ? errorFromParent
                    : undefined)
              );
            }
          });
        };

        forEachError(function(name, error) {
          merged = setIn(merged, name, error) || {};
        });
        forEachError(function(name, error) {
          if (error && error[ARRAY_ERROR]) {
            var existing = getIn(merged, name);
            var copy = [].concat(existing);
            copy[ARRAY_ERROR] = error[ARRAY_ERROR];
            merged = setIn(merged, name, copy);
          }
        });

        if (!shallowEqual(formState.errors, merged)) {
          formState.errors = merged;
        }

        formState.error = recordLevelErrors[FORM_ERROR];
      }; // process sync errors

      processErrors(); // sync errors have been set. notify listeners while we wait for others

      callback();

      if (hasAsyncValidations) {
        state.formState.validating++;
        callback();

        var afterPromise = function afterPromise() {
          state.formState.validating--;
          callback();
        };

        promise
          .then(function() {
            if (nextAsyncValidationKey > asyncValidationPromiseKey) {
              // if this async validator has been superseded by another, ignore its results
              return;
            }

            processErrors();
          })
          .then(afterPromise, afterPromise);
      }
    };

    var notifyFieldListeners = function notifyFieldListeners(name) {
      if (inBatch) {
        return;
      }

      var fields = state.fields,
        fieldSubscribers = state.fieldSubscribers,
        formState = state.formState;

      var safeFields = _extends({}, fields);

      var notifyField = function notifyField(name) {
        var field = safeFields[name];
        var fieldState = publishFieldState(formState, field);
        var lastFieldState = field.lastFieldState;
        field.lastFieldState = fieldState;
        var fieldSubscriber = fieldSubscribers[name];

        if (fieldSubscriber) {
          notify(
            fieldSubscriber,
            fieldState,
            lastFieldState,
            filterFieldState,
            lastFieldState === undefined
          );
        }
      };

      if (name) {
        notifyField(name);
      } else {
        Object.keys(safeFields).forEach(notifyField);
      }
    };

    var markAllFieldsTouched = function markAllFieldsTouched() {
      Object.keys(state.fields).forEach(function(key) {
        state.fields[key].touched = true;
      });
    };

    var hasSyncErrors = function hasSyncErrors() {
      return !!(state.formState.error || hasAnyError(state.formState.errors));
    };

    var calculateNextFormState = function calculateNextFormState() {
      var fields = state.fields,
        formState = state.formState,
        lastFormState = state.lastFormState;

      var safeFields = _extends({}, fields);

      var safeFieldKeys = Object.keys(safeFields); // calculate dirty/pristine

      var foundDirty = false;
      var dirtyFields = safeFieldKeys.reduce(function(result, key) {
        var dirty = !safeFields[key].isEqual(
          getIn(formState.values, key),
          getIn(formState.initialValues || {}, key)
        );

        if (dirty) {
          foundDirty = true;
          result[key] = true;
        }

        return result;
      }, {});
      formState.pristine = !foundDirty;
      formState.dirtySinceLastSubmit = !!(
        formState.lastSubmittedValues &&
        !safeFieldKeys.every(function(key) {
          // istanbul ignore next
          var nonNullLastSubmittedValues = formState.lastSubmittedValues || {}; // || {} is for flow, but causes branch coverage complaint

          return safeFields[key].isEqual(
            getIn(formState.values, key),
            getIn(nonNullLastSubmittedValues, key)
          );
        })
      );
      formState.valid =
        !formState.error &&
        !formState.submitError &&
        !hasAnyError(formState.errors) &&
        !(formState.submitErrors && hasAnyError(formState.submitErrors));
      var nextFormState = convertToExternalFormState(formState);

      var _safeFieldKeys$reduce = safeFieldKeys.reduce(
          function(result, key) {
            result.modified[key] = safeFields[key].modified;
            result.touched[key] = safeFields[key].touched;
            result.visited[key] = safeFields[key].visited;
            return result;
          },
          {
            modified: {},
            touched: {},
            visited: {}
          }
        ),
        modified = _safeFieldKeys$reduce.modified,
        touched = _safeFieldKeys$reduce.touched,
        visited = _safeFieldKeys$reduce.visited;

      nextFormState.dirtyFields =
        lastFormState && shallowEqual(lastFormState.dirtyFields, dirtyFields)
          ? lastFormState.dirtyFields
          : dirtyFields;
      nextFormState.modified =
        lastFormState && shallowEqual(lastFormState.modified, modified)
          ? lastFormState.modified
          : modified;
      nextFormState.touched =
        lastFormState && shallowEqual(lastFormState.touched, touched)
          ? lastFormState.touched
          : touched;
      nextFormState.visited =
        lastFormState && shallowEqual(lastFormState.visited, visited)
          ? lastFormState.visited
          : visited;
      return lastFormState && shallowEqual(lastFormState, nextFormState)
        ? lastFormState
        : nextFormState;
    };

    var callDebug = function callDebug() {
      return (
        debug &&
        "development" !== "production" &&
        debug(
          calculateNextFormState(),
          Object.keys(state.fields).reduce(function(result, key) {
            result[key] = state.fields[key];
            return result;
          }, {})
        )
      );
    };

    var notifying = false;
    var scheduleNotification = false;

    var notifyFormListeners = function notifyFormListeners() {
      if (notifying) {
        scheduleNotification = true;
      } else {
        notifying = true;
        callDebug();

        if (!inBatch && !validationPaused) {
          var lastFormState = state.lastFormState;
          var nextFormState = calculateNextFormState();

          if (nextFormState !== lastFormState) {
            state.lastFormState = nextFormState;
            notify(
              state.subscribers,
              nextFormState,
              lastFormState,
              filterFormState
            );
          }
        }

        notifying = false;

        if (scheduleNotification) {
          scheduleNotification = false;
          notifyFormListeners();
        }
      }
    };

    var beforeSubmit = function beforeSubmit() {
      return Object.keys(state.fields).some(function(name) {
        return (
          state.fields[name].beforeSubmit &&
          state.fields[name].beforeSubmit() === false
        );
      });
    };

    var afterSubmit = function afterSubmit() {
      return Object.keys(state.fields).forEach(function(name) {
        return (
          state.fields[name].afterSubmit && state.fields[name].afterSubmit()
        );
      });
    }; // generate initial errors

    runValidation(undefined, function() {
      notifyFormListeners();
    });
    var api = {
      batch: function batch(fn) {
        inBatch = true;
        fn();
        inBatch = false;
        notifyFieldListeners();
        notifyFormListeners();
      },
      blur: function blur(name) {
        var fields = state.fields,
          formState = state.formState;
        var previous = fields[name];

        if (previous) {
          // can only blur registered fields
          delete formState.active;
          fields[name] = _extends({}, previous, {
            active: false,
            touched: true
          });

          if (validateOnBlur) {
            runValidation(name, function() {
              notifyFieldListeners();
              notifyFormListeners();
            });
          } else {
            notifyFieldListeners();
            notifyFormListeners();
          }
        }
      },
      change: function change(name, value) {
        var fields = state.fields,
          formState = state.formState;

        if (getIn(formState.values, name) !== value) {
          changeValue(state, name, function() {
            return value;
          });
          var previous = fields[name];

          if (previous) {
            // only track modified for registered fields
            fields[name] = _extends({}, previous, {
              modified: true
            });
          }

          if (validateOnBlur) {
            notifyFieldListeners();
            notifyFormListeners();
          } else {
            runValidation(name, function() {
              notifyFieldListeners();
              notifyFormListeners();
            });
          }
        }
      },

      get destroyOnUnregister() {
        return !!destroyOnUnregister;
      },

      set destroyOnUnregister(value) {
        destroyOnUnregister = value;
      },

      focus: function focus(name) {
        var field = state.fields[name];

        if (field && !field.active) {
          state.formState.active = name;
          field.active = true;
          field.visited = true;
          notifyFieldListeners();
          notifyFormListeners();
        }
      },
      mutators: mutatorsApi,
      getFieldState: function getFieldState(name) {
        var field = state.fields[name];
        return field && field.lastFieldState;
      },
      getRegisteredFields: function getRegisteredFields() {
        return Object.keys(state.fields);
      },
      getState: function getState() {
        return calculateNextFormState();
      },
      initialize: function initialize(data) {
        var fields = state.fields,
          formState = state.formState;

        var safeFields = _extends({}, fields);

        var values = typeof data === "function" ? data(formState.values) : data;

        if (!keepDirtyOnReinitialize) {
          formState.values = values;
        }

        Object.keys(safeFields).forEach(function(key) {
          var field = safeFields[key];
          field.modified = false;
          field.touched = false;
          field.visited = false;

          if (keepDirtyOnReinitialize) {
            var pristine = field.isEqual(
              getIn(formState.values, key),
              getIn(formState.initialValues || {}, key)
            );

            if (pristine) {
              // only update pristine values
              formState.values = setIn(
                formState.values,
                key,
                getIn(values, key)
              );
            }
          }
        });
        formState.initialValues = values;
        runValidation(undefined, function() {
          notifyFieldListeners();
          notifyFormListeners();
        });
      },
      isValidationPaused: function isValidationPaused() {
        return validationPaused;
      },
      pauseValidation: function pauseValidation() {
        validationPaused = true;
      },
      registerField: function registerField(
        name,
        subscriber,
        subscription,
        fieldConfig
      ) {
        if (subscription === void 0) {
          subscription = {};
        }

        if (!state.fieldSubscribers[name]) {
          state.fieldSubscribers[name] = {
            index: 0,
            entries: {}
          };
        }

        var index = state.fieldSubscribers[name].index++; // save field subscriber callback

        state.fieldSubscribers[name].entries[index] = {
          subscriber: memoize(subscriber),
          subscription: subscription,
          notified: false
        };

        if (!state.fields[name]) {
          // create initial field state
          state.fields[name] = {
            active: false,
            afterSubmit: fieldConfig && fieldConfig.afterSubmit,
            beforeSubmit: fieldConfig && fieldConfig.beforeSubmit,
            blur: function blur() {
              return api.blur(name);
            },
            change: function change(value) {
              return api.change(name, value);
            },
            data: (fieldConfig && fieldConfig.data) || {},
            focus: function focus() {
              return api.focus(name);
            },
            isEqual: (fieldConfig && fieldConfig.isEqual) || tripleEquals,
            lastFieldState: undefined,
            modified: false,
            name: name,
            touched: false,
            valid: true,
            validateFields: fieldConfig && fieldConfig.validateFields,
            validators: {},
            validating: false,
            visited: false
          };
        }

        var haveValidator = false;

        if (fieldConfig) {
          haveValidator = !!(
            fieldConfig.getValidator && fieldConfig.getValidator()
          );

          if (fieldConfig.getValidator) {
            state.fields[name].validators[index] = fieldConfig.getValidator;
          }

          if (fieldConfig.initialValue !== undefined) {
            state.formState.initialValues = setIn(
              state.formState.initialValues || {},
              name,
              fieldConfig.initialValue
            );
            state.formState.values = setIn(
              state.formState.values,
              name,
              fieldConfig.initialValue
            );
          }

          if (fieldConfig.defaultValue !== undefined) {
            state.formState.values = setIn(
              state.formState.values,
              name,
              fieldConfig.defaultValue
            );
          }
        }

        if (haveValidator) {
          runValidation(undefined, function() {
            notifyFormListeners();
            notifyFieldListeners();
          });
        } else {
          notifyFormListeners();
          notifyFieldListeners(name);
        }

        return function() {
          var validatorRemoved = false; // istanbul ignore next

          if (state.fields[name]) {
            // state.fields[name] may have been removed by a mutator
            validatorRemoved = !!(
              state.fields[name].validators[index] &&
              state.fields[name].validators[index]()
            );
            delete state.fields[name].validators[index];
          }

          delete state.fieldSubscribers[name].entries[index];
          var lastOne = !Object.keys(state.fieldSubscribers[name].entries)
            .length;

          if (lastOne) {
            delete state.fieldSubscribers[name];
            delete state.fields[name];

            if (validatorRemoved) {
              state.formState.errors =
                setIn(state.formState.errors, name, undefined) || {};
            }

            if (destroyOnUnregister) {
              state.formState.values =
                setIn(state.formState.values, name, undefined, true) || {};
            }
          }

          if (validatorRemoved) {
            runValidation(undefined, function() {
              notifyFormListeners();
              notifyFieldListeners();
            });
          } else if (lastOne) {
            // values or errors may have changed
            notifyFormListeners();
          }
        };
      },
      reset: function reset(initialValues) {
        if (initialValues === void 0) {
          initialValues = state.formState.initialValues;
        }

        if (state.formState.submitting) {
          throw Error(
            "Cannot reset() in onSubmit(), use setTimeout(form.reset)"
          );
        }

        state.formState.submitFailed = false;
        state.formState.submitSucceeded = false;
        delete state.formState.submitError;
        delete state.formState.submitErrors;
        delete state.formState.lastSubmittedValues;
        api.initialize(initialValues || {});
      },

      /**
       * Resets all field flags (e.g. touched, visited, etc.) to their initial state
       */
      resetFieldState: function resetFieldState(name) {
        state.fields[name] = _extends({}, state.fields[name], {
          active: false,
          lastFieldState: undefined,
          modified: false,
          touched: false,
          valid: true,
          validating: false,
          visited: false
        });
        runValidation(undefined, function() {
          notifyFieldListeners();
          notifyFormListeners();
        });
      },
      resumeValidation: function resumeValidation() {
        validationPaused = false;

        if (validationBlocked) {
          // validation was attempted while it was paused, so run it now
          runValidation(undefined, function() {
            notifyFieldListeners();
            notifyFormListeners();
          });
        }

        validationBlocked = false;
      },
      setConfig: function setConfig(name, value) {
        switch (name) {
          case "debug":
            debug = value;
            break;

          case "destroyOnUnregister":
            destroyOnUnregister = value;
            break;

          case "initialValues":
            api.initialize(value);
            break;

          case "keepDirtyOnReinitialize":
            keepDirtyOnReinitialize = value;
            break;

          case "mutators":
            mutators = value;

            if (value) {
              Object.keys(mutatorsApi).forEach(function(key) {
                if (!(key in value)) {
                  delete mutatorsApi[key];
                }
              });
              Object.keys(value).forEach(function(key) {
                mutatorsApi[key] = getMutatorApi(key);
              });
            } else {
              Object.keys(mutatorsApi).forEach(function(key) {
                delete mutatorsApi[key];
              });
            }

            break;

          case "onSubmit":
            onSubmit = value;
            break;

          case "validate":
            validate = value;
            runValidation(undefined, function() {
              notifyFieldListeners();
              notifyFormListeners();
            });
            break;

          case "validateOnBlur":
            validateOnBlur = value;
            break;

          default:
            throw new Error("Unrecognised option " + name);
        }
      },
      submit: function submit() {
        var formState = state.formState;

        if (formState.submitting) {
          return;
        }

        if (hasSyncErrors()) {
          markAllFieldsTouched();
          state.formState.submitFailed = true;
          notifyFormListeners();
          notifyFieldListeners();
          return; // no submit for you!!
        }

        var asyncValidationPromisesKeys = Object.keys(asyncValidationPromises);

        if (asyncValidationPromisesKeys.length) {
          // still waiting on async validation to complete...
          Promise.all(
            asyncValidationPromisesKeys.map(function(key) {
              return asyncValidationPromises[Number(key)];
            })
          ).then(api.submit, api.submit);
          return;
        }

        var submitIsBlocked = beforeSubmit();

        if (submitIsBlocked) {
          return;
        }

        var resolvePromise;
        var completeCalled = false;

        var complete = function complete(errors) {
          formState.submitting = false;

          if (errors && hasAnyError(errors)) {
            formState.submitFailed = true;
            formState.submitSucceeded = false;
            formState.submitErrors = errors;
            formState.submitError = errors[FORM_ERROR];
            markAllFieldsTouched();
          } else {
            formState.submitFailed = false;
            formState.submitSucceeded = true;
            afterSubmit();
          }

          notifyFormListeners();
          notifyFieldListeners();
          completeCalled = true;

          if (resolvePromise) {
            resolvePromise(errors);
          }

          return errors;
        };

        delete formState.submitErrors;
        delete formState.submitError;
        formState.submitting = true;
        formState.submitFailed = false;
        formState.submitSucceeded = false;
        formState.lastSubmittedValues = _extends({}, formState.values); // onSubmit is either sync, callback or async with a Promise

        var result = onSubmit(formState.values, api, complete);

        if (!completeCalled) {
          if (result && isPromise(result)) {
            // onSubmit is async with a Promise
            notifyFormListeners(); // let everyone know we are submitting

            notifyFieldListeners(); // notify fields also

            return result.then(complete, function(error) {
              complete();
              throw error;
            });
          } else if (onSubmit.length >= 3) {
            // must be async, so we should return a Promise
            notifyFormListeners(); // let everyone know we are submitting

            notifyFieldListeners(); // notify fields also

            return new Promise(function(resolve) {
              resolvePromise = resolve;
            });
          } else {
            // onSubmit is sync
            complete(result);
          }
        }
      },
      subscribe: function subscribe(subscriber, subscription) {
        if (!subscriber) {
          throw new Error("No callback given.");
        }

        if (!subscription) {
          throw new Error(
            "No subscription provided. What values do you want to listen to?"
          );
        }

        var memoized = memoize(subscriber);
        var subscribers = state.subscribers;
        var index = subscribers.index++;
        subscribers.entries[index] = {
          subscriber: memoized,
          subscription: subscription,
          notified: false
        };
        var nextFormState = calculateNextFormState();
        notifySubscriber(
          memoized,
          subscription,
          nextFormState,
          nextFormState,
          filterFormState,
          true
        );
        return function() {
          delete subscribers.entries[index];
        };
      }
    };
    return api;
  } //

  // children render function, or component prop

  function renderComponent(props, name) {
    var render = props.render,
      children = props.children,
      component = props.component,
      rest = _objectWithoutPropertiesLoose(props, [
        "render",
        "children",
        "component"
      ]);

    if (component) {
      return React.createElement(
        component,
        _extends({}, rest, {
          children: children,
          render: render
        })
      );
    }

    if (render) {
      return render(
        children === undefined
          ? rest
          : _extends({}, rest, {
              children: children
            })
      ); // inject children back in
    }

    if (typeof children !== "function") {
      throw new Error(
        "Must specify either a render prop, a render function as children, or a component prop to " +
          name
      );
    }

    return children(rest);
  }

  function useWhenValueChanges(value, callback, isEqual) {
    if (isEqual === void 0) {
      isEqual = function isEqual(a, b) {
        return a === b;
      };
    }

    var previous = React__default.useRef(value);
    React__default.useEffect(function() {
      if (!isEqual(value, previous.current)) {
        callback();
        previous.current = value;
      }
    });
  }
  /**
   * A simple hook to create a constant value that lives for
   * the lifetime of the component.
   *
   * Plagiarized from https://github.com/Andarist/use-constant
   *
   * Do NOT reuse this code unless you know what you're doing.
   * Use Andarist's hook; it's more fault tolerant to things like
   * falsy values.
   *
   * @param {Function} init - A function to generate the value
   */

  function useConstant(init) {
    var ref = React__default.useRef();

    if (!ref.current) {
      ref.current = init();
    }

    return ref.current;
  }

  var shallowEqual$1 = function shallowEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (typeof a !== "object" || !a || typeof b !== "object" || !b) {
      return false;
    }

    var keysA = Object.keys(a);
    var keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

    for (var idx = 0; idx < keysA.length; idx++) {
      var key = keysA[idx];

      if (!bHasOwnProperty(key) || a[key] !== b[key]) {
        return false;
      }
    }

    return true;
  };

  var isSyntheticEvent = function isSyntheticEvent(candidate) {
    return !!(candidate && typeof candidate.stopPropagation === "function");
  };

  var ReactFinalFormContext = React.createContext();

  function useLatest(value) {
    var ref = React__default.useRef(value);
    React__default.useEffect(function() {
      ref.current = value;
    });
    return ref;
  }

  var version$1 = "6.3.0";
  var versions = {
    "final-form": version,
    "react-final-form": version$1
  };
  var all = formSubscriptionItems.reduce(function(result, key) {
    result[key] = true;
    return result;
  }, {});

  function ReactFinalForm(_ref) {
    var debug = _ref.debug,
      decorators = _ref.decorators,
      destroyOnUnregister = _ref.destroyOnUnregister,
      alternateFormApi = _ref.form,
      initialValues = _ref.initialValues,
      initialValuesEqual = _ref.initialValuesEqual,
      keepDirtyOnReinitialize = _ref.keepDirtyOnReinitialize,
      mutators = _ref.mutators,
      onSubmit = _ref.onSubmit,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all : _ref$subscription,
      validate = _ref.validate,
      validateOnBlur = _ref.validateOnBlur,
      rest = _objectWithoutPropertiesLoose(_ref, [
        "debug",
        "decorators",
        "destroyOnUnregister",
        "form",
        "initialValues",
        "initialValuesEqual",
        "keepDirtyOnReinitialize",
        "mutators",
        "onSubmit",
        "subscription",
        "validate",
        "validateOnBlur"
      ]);

    var config = {
      debug: debug,
      destroyOnUnregister: destroyOnUnregister,
      initialValues: initialValues,
      keepDirtyOnReinitialize: keepDirtyOnReinitialize,
      mutators: mutators,
      onSubmit: onSubmit,
      validate: validate,
      validateOnBlur: validateOnBlur
    };
    var form = useConstant(function() {
      var f = alternateFormApi || createForm(config);
      f.pauseValidation();
      return f;
    }); // synchronously register and unregister to query form state for our subscription on first render

    var _React$useState = React.useState(function() {
        var initialState = {};
        form.subscribe(function(state) {
          initialState = state;
        }, subscription)();
        return initialState;
      }),
      state = _React$useState[0],
      setState = _React$useState[1]; // save a copy of state that can break through the closure
    // on the shallowEqual() line below.

    var stateRef = useLatest(state);
    React.useEffect(
      function() {
        // We have rendered, so all fields are no registered, so we can unpause validation
        form.isValidationPaused() && form.resumeValidation();
        var unsubscriptions = [
          form.subscribe(function(s) {
            if (!shallowEqual$1(s, stateRef.current)) {
              setState(s);
            }
          }, subscription)
        ].concat(
          decorators
            ? decorators.map(function(decorator) {
                return (
                  // this noop ternary is to appease the flow gods
                  // istanbul ignore next
                  decorator(form)
                );
              })
            : []
        );
        return function() {
          unsubscriptions.forEach(function(unsubscribe) {
            return unsubscribe();
          });
        }; // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [decorators]
    ); // warn about decorator changes
    // istanbul ignore next

    {
      // You're never supposed to use hooks inside a conditional, but in this
      // case we can be certain that you're not going to be changing your
      // NODE_ENV between renders, so this is safe.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useWhenValueChanges(
        decorators,
        function() {
          console.error(
            "Form decorators should not change from one render to the next as new values will be ignored"
          );
        },
        shallowEqual$1
      );
    } // allow updatable config

    useWhenValueChanges(debug, function() {
      form.setConfig("debug", debug);
    });
    useWhenValueChanges(destroyOnUnregister, function() {
      form.destroyOnUnregister = !!destroyOnUnregister;
    });
    useWhenValueChanges(
      initialValues,
      function() {
        form.setConfig("initialValues", initialValues);
      },
      initialValuesEqual || shallowEqual$1
    );
    useWhenValueChanges(keepDirtyOnReinitialize, function() {
      form.setConfig("keepDirtyOnReinitialize", keepDirtyOnReinitialize);
    });
    useWhenValueChanges(mutators, function() {
      form.setConfig("mutators", mutators);
    });
    useWhenValueChanges(onSubmit, function() {
      form.setConfig("onSubmit", onSubmit);
    });
    useWhenValueChanges(validate, function() {
      form.setConfig("validate", validate);
    });
    useWhenValueChanges(validateOnBlur, function() {
      form.setConfig("validateOnBlur", validateOnBlur);
    });

    var handleSubmit = function handleSubmit(event) {
      if (event) {
        // sometimes not true, e.g. React Native
        if (typeof event.preventDefault === "function") {
          event.preventDefault();
        }

        if (typeof event.stopPropagation === "function") {
          // prevent any outer forms from receiving the event too
          event.stopPropagation();
        }
      }

      return form.submit();
    };

    var renderProps = _extends({}, state, {
      form: _extends({}, form, {
        reset: function reset(eventOrValues) {
          if (isSyntheticEvent(eventOrValues)) {
            // it's a React SyntheticEvent, call reset with no arguments
            form.reset();
          } else {
            form.reset(eventOrValues);
          }
        }
      }),
      handleSubmit: handleSubmit
    });

    return React.createElement(
      ReactFinalFormContext.Provider,
      {
        value: form
      },
      renderComponent(
        _extends({}, rest, renderProps, {
          __versions: versions
        }),
        "ReactFinalForm"
      )
    );
  }

  function useForm(componentName) {
    var form = React.useContext(ReactFinalFormContext);

    if (!form) {
      throw new Error(
        (componentName || "useForm") +
          " must be used inside of a <Form> component"
      );
    }

    return form;
  }

  function useFormState(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      onChange = _ref.onChange,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all : _ref$subscription;

    var form = useForm("useFormState");
    var firstRender = React.useRef(true); // synchronously register and unregister to query field state for our subscription on first render

    var _React$useState = React.useState(function() {
        var initialState = {};
        form.subscribe(function(state) {
          initialState = state;
        }, subscription)();

        if (onChange) {
          onChange(initialState);
        }

        return initialState;
      }),
      state = _React$useState[0],
      setState = _React$useState[1];

    React.useEffect(
      function() {
        return form.subscribe(function(newState) {
          if (firstRender.current) {
            firstRender.current = false;
          } else {
            setState(newState);

            if (onChange) {
              onChange(newState);
            }
          }
        }, subscription);
      }, // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    return state;
  }

  function FormSpy(_ref) {
    var onChange = _ref.onChange,
      subscription = _ref.subscription,
      rest = _objectWithoutPropertiesLoose(_ref, ["onChange", "subscription"]);

    var reactFinalForm = useForm("FormSpy");
    var state = useFormState({
      onChange: onChange,
      subscription: subscription
    });

    if (onChange) {
      return null;
    }

    var renderProps = {
      form: _extends({}, reactFinalForm, {
        reset: function reset(eventOrValues) {
          if (isSyntheticEvent(eventOrValues)) {
            // it's a React SyntheticEvent, call reset with no arguments
            reactFinalForm.reset();
          } else {
            reactFinalForm.reset(eventOrValues);
          }
        }
      })
    };
    return renderComponent(_extends({}, rest, state, renderProps), "FormSpy");
  }

  var isReactNative =
    typeof window !== "undefined" &&
    window.navigator &&
    window.navigator.product &&
    window.navigator.product === "ReactNative";

  var getSelectedValues = function getSelectedValues(options) {
    var result = [];

    if (options) {
      for (var index = 0; index < options.length; index++) {
        var option = options[index];

        if (option.selected) {
          result.push(option.value);
        }
      }
    }

    return result;
  };

  var getValue = function getValue(
    event,
    currentValue,
    valueProp,
    isReactNative
  ) {
    if (
      !isReactNative &&
      event.nativeEvent &&
      event.nativeEvent.text !== undefined
    ) {
      return event.nativeEvent.text;
    }

    if (isReactNative && event.nativeEvent) {
      return event.nativeEvent.text;
    }

    var detypedEvent = event;
    var _detypedEvent$target = detypedEvent.target,
      type = _detypedEvent$target.type,
      value = _detypedEvent$target.value,
      checked = _detypedEvent$target.checked;

    switch (type) {
      case "checkbox":
        if (valueProp !== undefined) {
          // we are maintaining an array, not just a boolean
          if (checked) {
            // add value to current array value
            return Array.isArray(currentValue)
              ? currentValue.concat(valueProp)
              : [valueProp];
          } else {
            // remove value from current array value
            if (!Array.isArray(currentValue)) {
              return currentValue;
            }

            var index = currentValue.indexOf(valueProp);

            if (index < 0) {
              return currentValue;
            } else {
              return currentValue
                .slice(0, index)
                .concat(currentValue.slice(index + 1));
            }
          }
        } else {
          // it's just a boolean
          return !!checked;
        }

      case "select-multiple":
        return getSelectedValues(event.target.options);

      default:
        return value;
    }
  };

  var all$1 = fieldSubscriptionItems.reduce(function(result, key) {
    result[key] = true;
    return result;
  }, {});

  var defaultFormat = function defaultFormat(value, name) {
    return value === undefined ? "" : value;
  };

  var defaultParse = function defaultParse(value, name) {
    return value === "" ? undefined : value;
  };

  function useField(name, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      afterSubmit = _ref.afterSubmit,
      allowNull = _ref.allowNull,
      beforeSubmit = _ref.beforeSubmit,
      component = _ref.component,
      defaultValue = _ref.defaultValue,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? defaultFormat : _ref$format,
      formatOnBlur = _ref.formatOnBlur,
      initialValue = _ref.initialValue,
      isEqual = _ref.isEqual,
      multiple = _ref.multiple,
      _ref$parse = _ref.parse,
      parse = _ref$parse === void 0 ? defaultParse : _ref$parse,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription,
      type = _ref.type,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      _value = _ref.value;

    var form = useForm("useField");
    var validateRef = useLatest(validate);
    var beforeSubmitRef = useLatest(function() {
      if (formatOnBlur) {
        var formatted = format(state.value, state.name);

        if (formatted !== state.value) {
          state.change(formatted);
        }
      }

      return beforeSubmit && beforeSubmit();
    });

    var register = function register(callback) {
      return form.registerField(name, callback, subscription, {
        afterSubmit: afterSubmit,
        beforeSubmit: function beforeSubmit() {
          return beforeSubmitRef.current();
        },
        defaultValue: defaultValue,
        getValidator: function getValidator() {
          return validateRef.current;
        },
        initialValue: initialValue,
        isEqual: isEqual,
        validateFields: validateFields
      });
    };

    var firstRender = React.useRef(true); // synchronously register and unregister to query field state for our subscription on first render

    var _React$useState = React.useState(function() {
        var initialState = {}; // temporarily disable destroyOnUnregister

        var destroyOnUnregister = form.destroyOnUnregister;
        form.destroyOnUnregister = false;
        register(function(state) {
          initialState = state;
        })(); // return destroyOnUnregister to its original value

        form.destroyOnUnregister = destroyOnUnregister;
        return initialState;
      }),
      state = _React$useState[0],
      setState = _React$useState[1];

    React.useEffect(
      function() {
        return register(function(state) {
          if (firstRender.current) {
            firstRender.current = false;
          } else {
            setState(state);
          }
        });
      }, // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        name,
        defaultValue, // If we want to allow inline fat-arrow field-level validation functions, we
        // cannot reregister field every time validate function !==.
        // validate,
        initialValue,
        isEqual // The validateFields array is often passed as validateFields={[]}, creating
        // a !== new array every time. If it needs to be changed, a rerender/reregister
        // can be forced by changing the key prop
        // validateFields
      ]
    );
    var handlers = {
      onBlur: React.useCallback(
        function(event) {
          state.blur();

          if (formatOnBlur) {
            /**
             * Here we must fetch the value directly from Final Form because we cannot
             * trust that our `state` closure has the most recent value. This is a problem
             * if-and-only-if the library consumer has called `onChange()` immediately
             * before calling `onBlur()`, but before the field has had a chance to receive
             * the value update from Final Form.
             */
            var fieldState = form.getFieldState(state.name); // this ternary is primarily to appease the Flow gods
            // istanbul ignore next

            state.change(
              format(fieldState ? fieldState.value : state.value, state.name)
            );
          }
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [state.name, state.value, format, formatOnBlur]
      ),
      onChange: React.useCallback(
        function(event) {
          // istanbul ignore next
          if (event && event.target) {
            var targetType = event.target.type;
            var unknown =
              ~["checkbox", "radio", "select-multiple"].indexOf(targetType) &&
              !type;

            var _value2 =
              targetType === "select-multiple" ? state.value : _value;

            if (unknown) {
              console.error(
                'You must pass `type="' +
                  (targetType === "select-multiple" ? "select" : targetType) +
                  '"` prop to your Field(' +
                  name +
                  ") component.\n" +
                  ("Without it we don't know how to unpack your `value` prop - " +
                    (Array.isArray(_value2)
                      ? "[" + _value2 + "]"
                      : '"' + _value2 + '"') +
                    ".")
              );
            }
          }

          var value =
            event && event.target
              ? getValue(event, state.value, _value, isReactNative)
              : event;
          state.change(parse(value, name));
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [_value, name, parse, state.change, state.value, type]
      ),
      onFocus: React.useCallback(function(event) {
        state.focus(); // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    };

    var blur = state.blur,
      change = state.change,
      focus = state.focus,
      value = state.value,
      ignoreName = state.name,
      otherState = _objectWithoutPropertiesLoose(state, [
        "blur",
        "change",
        "focus",
        "value",
        "name"
      ]);

    var meta = {
      // this is to appease the Flow gods
      active: otherState.active,
      data: otherState.data,
      dirty: otherState.dirty,
      dirtySinceLastSubmit: otherState.dirtySinceLastSubmit,
      error: otherState.error,
      initial: otherState.initial,
      invalid: otherState.invalid,
      length: otherState.length,
      modified: otherState.modified,
      pristine: otherState.pristine,
      submitError: otherState.submitError,
      submitFailed: otherState.submitFailed,
      submitSucceeded: otherState.submitSucceeded,
      submitting: otherState.submitting,
      touched: otherState.touched,
      valid: otherState.valid,
      validating: otherState.validating,
      visited: otherState.visited
    };

    if (formatOnBlur) {
      if (component === "input") {
        value = defaultFormat(value);
      }
    } else {
      value = format(value, name);
    }

    if (value === null && !allowNull) {
      value = "";
    }

    var input = _extends(
      {
        name: name,
        value: value,
        type: type
      },
      handlers
    );

    if (type === "checkbox") {
      if (_value === undefined) {
        input.checked = !!value;
      } else {
        input.checked = !!(Array.isArray(value) && ~value.indexOf(_value));
        input.value = _value;
      }
    } else if (type === "radio") {
      input.checked = value === _value;
      input.value = _value;
    } else if (component === "select" && multiple) {
      input.value = input.value || [];
      input.multiple = true;
    }

    var renderProps = {
      input: input,
      meta: meta // assign to force Flow check
    };
    return renderProps;
  }

  var Field = function Field(_ref) {
    var afterSubmit = _ref.afterSubmit,
      allowNull = _ref.allowNull,
      beforeSubmit = _ref.beforeSubmit,
      children = _ref.children,
      component = _ref.component,
      defaultValue = _ref.defaultValue,
      format = _ref.format,
      formatOnBlur = _ref.formatOnBlur,
      initialValue = _ref.initialValue,
      isEqual = _ref.isEqual,
      multiple = _ref.multiple,
      name = _ref.name,
      parse = _ref.parse,
      subscription = _ref.subscription,
      type = _ref.type,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      value = _ref.value,
      rest = _objectWithoutPropertiesLoose(_ref, [
        "afterSubmit",
        "allowNull",
        "beforeSubmit",
        "children",
        "component",
        "defaultValue",
        "format",
        "formatOnBlur",
        "initialValue",
        "isEqual",
        "multiple",
        "name",
        "parse",
        "subscription",
        "type",
        "validate",
        "validateFields",
        "value"
      ]);

    var field = useField(name, {
      afterSubmit: afterSubmit,
      allowNull: allowNull,
      beforeSubmit: beforeSubmit,
      children: children,
      component: component,
      defaultValue: defaultValue,
      format: format,
      formatOnBlur: formatOnBlur,
      initialValue: initialValue,
      isEqual: isEqual,
      multiple: multiple,
      parse: parse,
      subscription: subscription,
      type: type,
      validate: validate,
      validateFields: validateFields,
      value: value
    });

    if (typeof children === "function") {
      return children(_extends({}, field, rest));
    }

    if (typeof component === "string") {
      // ignore meta, combine input with any other props
      return React.createElement(
        component,
        _extends(
          {},
          field.input,
          {
            children: children
          },
          rest
        )
      );
    }

    return renderComponent(
      _extends(
        {},
        field,
        {
          children: children,
          component: component
        },
        rest
      ),
      "Field(" + name + ")"
    );
  };

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return self;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof commonjsGlobal == "object" &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal;
  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */

  var freeSelf =
    typeof self == "object" && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = _freeGlobal || freeSelf || Function("return this")();
  var _root = root;

  /** Built-in value references. */

  var Symbol$1 = _root.Symbol;
  var _Symbol = Symbol$1;

  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$1.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */

  var nullTag = "[object Null]",
    undefinedTag = "[object Undefined]";
  /** Built-in value references. */

  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag$1 && symToStringTag$1 in Object(value)
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */

  var asyncTag = "[object AsyncFunction]",
    funcTag = "[object Function]",
    genTag = "[object GeneratorFunction]",
    proxyTag = "[object Proxy]";
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.

    var tag = _baseGetTag(value);
    return (
      tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
    );
  }

  var isFunction_1 = isFunction;

  var AppContext = React.createContext({});

  var ContextWrapper =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose(ContextWrapper, _React$Component);

      function ContextWrapper(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;
        _this.checkCondition = _this.checkCondition.bind(
          _assertThisInitialized(_this)
        );
        _this.getStatus = _this.getStatus.bind(_assertThisInitialized(_this));
        _this.values = {};
        return _this;
      }

      var _proto = ContextWrapper.prototype;

      _proto.getStatus = function getStatus() {
        var _this$props = this.props,
          dirty = _this$props.dirty,
          dirtySinceLastSubmit = _this$props.dirtySinceLastSubmit,
          error = _this$props.error,
          errors = _this$props.errors,
          invalid = _this$props.invalid,
          pristine = _this$props.pristine,
          submitError = _this$props.submitError,
          submitErrors = _this$props.submitErrors,
          submitFailed = _this$props.submitFailed,
          submitSucceeded = _this$props.submitSucceeded,
          submitting = _this$props.submitting,
          valid = _this$props.valid,
          validating = _this$props.validating;
        return {
          dirty: dirty,
          dirtySinceLastSubmit: dirtySinceLastSubmit,
          error: error,
          errors: errors,
          invalid: invalid,
          pristine: pristine,
          submitError: submitError,
          submitErrors: submitErrors,
          submitFailed: submitFailed,
          submitSucceeded: submitSucceeded,
          submitting: submitting,
          valid: valid,
          validating: validating
        };
      };

      _proto.checkCondition = function checkCondition(args) {
        var values = this.props.values;
        return args(values);
      };

      _proto.render = function render() {
        var _this$props2 = this.props,
          debug = _this$props2.debug,
          children = _this$props2.children,
          listen = _this$props2.listen;

        if (debug) {
          return React__default.createElement(
            AppContext.Provider,
            {
              value: {
                checkCondition: this.checkCondition,
                isStatic: this.props.static,
                // eslint-disable-line react/destructuring-assignment
                debug: debug,
                status: this.getStatus()
              }
            },
            children
          );
        }

        return React__default.createElement(
          AppContext.Provider,
          {
            value: {
              checkCondition: this.checkCondition,
              isStatic: this.props.static,
              // eslint-disable-line react/destructuring-assignment
              debug: debug,
              status: this.getStatus()
            }
          },
          children,
          listen &&
            isFunction_1(listen) &&
            React__default.createElement(FormSpy, {
              subscription: {
                values: true
              },
              onChange: function onChange(props) {
                listen(props.values);
              }
            })
        );
      };

      return ContextWrapper;
    })(React__default.Component);
  /* eslint react/require-default-props: 0 */

  ContextWrapper.propTypes = {
    children: propTypes.oneOfType([propTypes.array, propTypes.object]),
    static: propTypes.bool,
    // eslint-disable-line quote-props
    values: propTypes.oneOfType([propTypes.object]),
    debug: propTypes.bool,
    dirty: propTypes.bool,
    dirtySinceLastSubmit: propTypes.bool,
    errors: propTypes.oneOfType([propTypes.object]),
    error: propTypes.bool,
    invalid: propTypes.bool,
    pristine: propTypes.bool,
    submitError: propTypes.bool,
    submitErrors: propTypes.oneOfType([propTypes.object]),
    submitFailed: propTypes.bool,
    submitSucceeded: propTypes.bool,
    submitting: propTypes.bool,
    valid: propTypes.bool,
    validating: propTypes.bool,
    listen: propTypes.func
  };
  ContextWrapper.defaultProps = {
    static: false,
    // eslint-disable-line quote-props
    debug: false
  };

  var Form = function Form(props) {
    var children = props.children,
      className = props.className,
      debug = props.debug,
      listen = props.listen,
      formProps = _objectWithoutPropertiesLoose(props, [
        "children",
        "className",
        "debug",
        "listen"
      ]);

    return React__default.createElement(
      ReactFinalForm,
      _extends({}, formProps, {
        render: function render(_ref) {
          var handleSubmit = _ref.handleSubmit,
            rest = _objectWithoutPropertiesLoose(_ref, ["handleSubmit"]);

          return React__default.createElement(
            ContextWrapper,
            _extends({}, rest, {
              debug: debug,
              listen: listen
            }),
            React__default.createElement(
              "form",
              {
                onSubmit: handleSubmit,
                className: className
              },
              children
            )
          );
        }
      })
    );
  };

  Form.propTypes = {
    className: propTypes.string,
    validate: propTypes.func,
    onSubmit: propTypes.func.isRequired,
    children: propTypes.oneOfType([propTypes.object, propTypes.array])
      .isRequired,
    debug: propTypes.bool,
    listen: propTypes.func,
    initialValues: propTypes.objectOf(
      propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
        propTypes.array,
        propTypes.object
      ])
    )
  };
  Form.defaultProps = {
    className: "",
    validate: function validate() {},
    listen: function listen() {},
    debug: false,
    initialValues: {}
  };

  var classnames = createCommonjsModule(function(module) {
    /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

    /* global define */
    (function() {
      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = [];

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;
          var argType = typeof arg;

          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);

            if (inner) {
              classes.push(inner);
            }
          } else if (argType === "object") {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }

        return classes.join(" ");
      }

      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  });

  function Context(Component) {
    var TmpClass = function TmpClass(props) {
      return React__default.createElement(AppContext.Consumer, null, function(
        context
      ) {
        return React__default.createElement(Field, {
          name: props.name,
          render: function render(_ref) {
            var input = _ref.input,
              meta = _ref.meta;

            var type = input.type,
              allOther = _objectWithoutPropertiesLoose(input, ["type"]);

            return React__default.createElement(
              Component,
              _extends(
                {
                  input: allOther,
                  meta: meta,
                  context: context
                },
                props
              )
            );
          }
        });
      });
    };

    TmpClass.propTypes = {
      name: propTypes.string.isRequired
    };
    return TmpClass;
  }

  function Context$1(Component) {
    var TmpClass = function TmpClass(props) {
      var label = props.label,
        name = props.name,
        text = props.text,
        disabled = props.disabled,
        formGroup = props.formGroup,
        formLabel = props.formLabel,
        formError = props.formError,
        formText = props.formText,
        checkCondition = props.context.checkCondition,
        _props$meta = props.meta,
        submitFailed = _props$meta.submitFailed,
        invalid = _props$meta.invalid,
        error = _props$meta.error;
      var computedInvalid = submitFailed && invalid;
      var isDisabled = disabled && checkCondition(disabled);
      var showText =
        !computedInvalid &&
        text &&
        React__default.createElement(
          "div",
          {
            className: classnames("ffc-help", formText)
          },
          text
        );
      var showError =
        computedInvalid &&
        error &&
        React__default.createElement(
          "div",
          {
            className: classnames("ffc-error", formError)
          },
          error
        );
      return React__default.createElement(
        "div",
        {
          className: classnames(
            "ffc-field",
            {
              "text-danger": computedInvalid
            },
            formGroup
          )
        },
        label &&
          React__default.createElement(
            "label",
            {
              htmlFor: name,
              className: classnames("ffc-label", formLabel)
            },
            label
          ),
        React__default.createElement(
          Component,
          _extends({}, props, {
            computedInvalid: computedInvalid,
            isDisabled: isDisabled
          })
        ),
        showText,
        showError
      );
    };

    TmpClass.propTypes = {
      name: propTypes.string.isRequired,
      label: propTypes.string,
      text: propTypes.string,
      disabled: propTypes.func,
      formGroup: propTypes.string,
      formLabel: propTypes.string,
      formError: propTypes.string,
      formText: propTypes.string,
      meta: propTypes.shape({
        submitFailed: propTypes.bool.isRequired,
        invalid: propTypes.bool.isRequired,
        error: propTypes.string
      }).isRequired,
      context: propTypes.shape({
        checkCondition: propTypes.func
      }).isRequired
    };
    TmpClass.defaultProps = {
      label: null,
      text: null,
      formGroup: null,
      formLabel: null,
      formError: null,
      formText: null,
      disabled: null
    };
    return TmpClass;
  }

  var Checkbox = function Checkbox(props) {
    var input = props.input,
      isDisabled = props.isDisabled,
      multiple = props.multiple,
      children = props.children,
      formControl = props.formControl,
      computedInvalid = props.computedInvalid;
    var radioList = Array.isArray(children) ? children : [children];

    var _onChange = function onChange(event, key, option) {
      if (multiple) {
        var newValue = (input.value instanceof Array
          ? input.value
          : [input.value]
        ).filter(Boolean);

        if (event.target.checked) {
          newValue.push(option.props.value);
        } else {
          newValue.splice(newValue.indexOf(option.props.value), 1);
        }

        return input.onChange(newValue);
      }

      return input.onChange(event.target.checked ? option.props.value : false);
    };

    var list = radioList.map(function(option, key) {
      var name = multiple ? input.name + "[" + key + "]" : input.name;
      var value = (Array.isArray(input.value)
        ? input.value
        : [input.value]
      ).filter(function(val) {
        return String(val);
      });
      var checked = value.indexOf(option.props.value) !== -1;
      return React__default.createElement(
        "div",
        {
          className: "form-check",
          key: option.props.value
        },
        React__default.createElement("input", {
          type: "checkbox",
          name: name,
          disabled: isDisabled,
          id: input.name + "_" + key,
          value: option.props.value,
          className: classnames("form-check-label"),
          checked: checked,
          onChange: function onChange(event) {
            return _onChange(event, key, option);
          }
        }),
        " ",
        React__default.createElement(
          "label",
          {
            htmlFor: input.name + "_" + key,
            className: classnames("form-check-label")
          },
          option.props.children
        )
      );
    });
    return React__default.createElement(
      "div",
      {
        className: classnames(
          "ffc-input",
          {
            "is-invalid": computedInvalid
          },
          formControl
        )
      },
      list
    );
  };

  Checkbox.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    children: propTypes.oneOfType([propTypes.object, propTypes.array])
      .isRequired,
    formControl: propTypes.string,
    multiple: propTypes.bool,
    isDisabled: propTypes.bool,
    computedInvalid: propTypes.bool.isRequired
  };
  Checkbox.defaultProps = {
    input: {},
    formControl: null,
    multiple: false,
    isDisabled: false
  };
  var Checkbox$1 = Context(Context$1(Checkbox));

  var Condition = function Condition(props) {
    var context = props.context,
      children = props.children,
      hidden = props.hidden,
      visible = props.visible;

    if (hidden && context.checkCondition(hidden)) {
      return null;
    }

    if (visible && !context.checkCondition(visible)) {
      return null;
    }

    return children;
  };

  Condition.propTypes = {
    children: propTypes.oneOfType([propTypes.array, propTypes.object])
      .isRequired,
    context: propTypes.shape({
      checkCondition: propTypes.func
    }).isRequired,
    hidden: propTypes.func,
    visible: propTypes.func
  };
  Condition.defaultProps = {
    hidden: null,
    visible: null
  };
  var Condition$1 = function(props) {
    return React__default.createElement(AppContext.Consumer, null, function(
      context
    ) {
      return React__default.createElement(
        Condition,
        _extends(
          {
            context: context
          },
          props
        )
      );
    });
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );

    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));

    return ar;
  }

  var COMMON_MIME_TYPES = new Map([
    ["avi", "video/avi"],
    ["gif", "image/gif"],
    ["ico", "image/x-icon"],
    ["jpeg", "image/jpeg"],
    ["jpg", "image/jpeg"],
    ["mkv", "video/x-matroska"],
    ["mov", "video/quicktime"],
    ["mp4", "video/mp4"],
    ["pdf", "application/pdf"],
    ["png", "image/png"],
    ["zip", "application/zip"],
    ["doc", "application/msword"],
    [
      "docx",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ]
  ]);
  function toFileWithPath(file, path) {
    var f = withMimeType(file);

    if (typeof f.path !== "string") {
      // on electron, path is already set to the absolute path
      var webkitRelativePath = file.webkitRelativePath;
      Object.defineProperty(f, "path", {
        value:
          typeof path === "string"
            ? path // If <input webkitdirectory> is set,
            : // the File will have a {webkitRelativePath} property
            // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
            typeof webkitRelativePath === "string" &&
              webkitRelativePath.length > 0
            ? webkitRelativePath
            : file.name,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }

    return f;
  }

  function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf(".") !== -1;

    if (hasExtension && !file.type) {
      var ext = name
        .split(".")
        .pop()
        .toLowerCase();
      var type = COMMON_MIME_TYPES.get(ext);

      if (type) {
        Object.defineProperty(file, "type", {
          value: type,
          writable: false,
          configurable: false,
          enumerable: true
        });
      }
    }

    return file;
  }

  var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    ".DS_Store",
    "Thumbs.db" // Windows
  ];
  /**
   * Convert a DragEvent's DataTrasfer object to a list of File objects
   * NOTE: If some of the items are folders,
   * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
   * @param evt
   */

  function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [
          2,
          /*return*/
          isDragEvt(evt) && evt.dataTransfer
            ? getDataTransferFiles(evt.dataTransfer, evt.type)
            : getInputFiles(evt)
        ];
      });
    });
  }

  function isDragEvt(value) {
    return !!value.dataTransfer;
  }

  function getInputFiles(evt) {
    var files = isInput(evt.target)
      ? evt.target.files
        ? fromList(evt.target.files)
        : []
      : [];
    return files.map(function(file) {
      return toFileWithPath(file);
    });
  }

  function isInput(value) {
    return value !== null;
  }

  function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function() {
      var items, files;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!dt.items)
              return [
                3,
                /*break*/
                2
              ];
            items = fromList(dt.items).filter(function(item) {
              return item.kind === "file";
            }); // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
            // only 'dragstart' and 'drop' has access to the data (source node)

            if (type !== "drop") {
              return [
                2,
                /*return*/
                items
              ];
            }

            return [
              4,
              /*yield*/
              Promise.all(items.map(toFilePromises))
            ];

          case 1:
            files = _a.sent();
            return [
              2,
              /*return*/
              noIgnoredFiles(flatten(files))
            ];

          case 2:
            return [
              2,
              /*return*/
              noIgnoredFiles(
                fromList(dt.files).map(function(file) {
                  return toFileWithPath(file);
                })
              )
            ];
        }
      });
    });
  }

  function noIgnoredFiles(files) {
    return files.filter(function(file) {
      return FILES_TO_IGNORE.indexOf(file.name) === -1;
    });
  } // IE11 does not support Array.from()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
  // https://developer.mozilla.org/en-US/docs/Web/API/FileList
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList

  function fromList(items) {
    var files = []; // tslint:disable: prefer-for-of

    for (var i = 0; i < items.length; i++) {
      var file = items[i];
      files.push(file);
    }

    return files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem

  function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== "function") {
      return fromDataTransferItem(item);
    }

    var entry = item.webkitGetAsEntry(); // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file

    if (entry && entry.isDirectory) {
      return fromDirEntry(entry);
    }

    return fromDataTransferItem(item);
  }

  function flatten(items) {
    return items.reduce(function(acc, files) {
      return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
    }, []);
  }

  function fromDataTransferItem(item) {
    var file = item.getAsFile();

    if (!file) {
      return Promise.reject(item + " is not a File");
    }

    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
  } // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry

  function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [
          2,
          /*return*/
          entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)
        ];
      });
    });
  } // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry

  function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function(resolve, reject) {
      var entries = [];

      function readEntries() {
        var _this = this; // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
        // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries

        reader.readEntries(
          function(batch) {
            return __awaiter(_this, void 0, void 0, function() {
              var files, err_1, items;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    if (!!batch.length)
                      return [
                        3,
                        /*break*/
                        5
                      ];
                    _a.label = 1;

                  case 1:
                    _a.trys.push([1, 3, , 4]);

                    return [
                      4,
                      /*yield*/
                      Promise.all(entries)
                    ];

                  case 2:
                    files = _a.sent();
                    resolve(files);
                    return [
                      3,
                      /*break*/
                      4
                    ];

                  case 3:
                    err_1 = _a.sent();
                    reject(err_1);
                    return [
                      3,
                      /*break*/
                      4
                    ];

                  case 4:
                    return [
                      3,
                      /*break*/
                      6
                    ];

                  case 5:
                    items = Promise.all(batch.map(fromEntry));
                    entries.push(items); // Continue reading

                    readEntries();
                    _a.label = 6;

                  case 6:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          },
          function(err) {
            reject(err);
          }
        );
      }

      readEntries();
    });
  } // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry

  function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [
          2,
          /*return*/
          new Promise(function(resolve, reject) {
            entry.file(
              function(file) {
                var fwp = toFileWithPath(file, entry.fullPath);
                resolve(fwp);
              },
              function(err) {
                reject(err);
              }
            );
          })
        ];
      });
    });
  }

  var dist = createCommonjsModule(function(module) {
    module.exports = (function(t) {
      function n(e) {
        if (r[e]) return r[e].exports;
        var o = (r[e] = {
          i: e,
          l: !1,
          exports: {}
        });
        return t[e].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
      }

      var r = {};
      return (
        (n.m = t),
        (n.c = r),
        (n.d = function(t, r, e) {
          n.o(t, r) ||
            Object.defineProperty(t, r, {
              configurable: !1,
              enumerable: !0,
              get: e
            });
        }),
        (n.n = function(t) {
          var r =
            t && t.__esModule
              ? function() {
                  return t.default;
                }
              : function() {
                  return t;
                };
          return n.d(r, "a", r), r;
        }),
        (n.o = function(t, n) {
          return Object.prototype.hasOwnProperty.call(t, n);
        }),
        (n.p = ""),
        n((n.s = 13))
      );
    })([
      function(t, n) {
        var r = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = r);
      },
      function(t, n) {
        t.exports = function(t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
        };
      },
      function(t, n) {
        var r = (t.exports = {
          version: "2.5.0"
        });
        "number" == typeof __e && (__e = r);
      },
      function(t, n, r) {
        t.exports = !r(4)(function() {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
      },
      function(t, n) {
        t.exports = function(t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      function(t, n) {
        var r = {}.toString;

        t.exports = function(t) {
          return r.call(t).slice(8, -1);
        };
      },
      function(t, n, r) {
        var e = r(32)("wks"),
          o = r(9),
          i = r(0).Symbol,
          u = "function" == typeof i;
        (t.exports = function(t) {
          return e[t] || (e[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
        }).store = e;
      },
      function(t, n, r) {
        var e = r(0),
          o = r(2),
          i = r(8),
          u = r(22),
          c = r(10),
          f = function(t, n, r) {
            var a,
              s,
              p,
              l,
              v = t & f.F,
              y = t & f.G,
              h = t & f.S,
              d = t & f.P,
              x = t & f.B,
              g = y ? e : h ? e[n] || (e[n] = {}) : (e[n] || {}).prototype,
              m = y ? o : o[n] || (o[n] = {}),
              b = m.prototype || (m.prototype = {});
            y && (r = n);

            for (a in r)
              (s = !v && g && void 0 !== g[a]),
                (p = (s ? g : r)[a]),
                (l =
                  x && s
                    ? c(p, e)
                    : d && "function" == typeof p
                    ? c(Function.call, p)
                    : p),
                g && u(g, a, p, t & f.U),
                m[a] != p && i(m, a, l),
                d && b[a] != p && (b[a] = p);
          };

        (e.core = o),
          (f.F = 1),
          (f.G = 2),
          (f.S = 4),
          (f.P = 8),
          (f.B = 16),
          (f.W = 32),
          (f.U = 64),
          (f.R = 128),
          (t.exports = f);
      },
      function(t, n, r) {
        var e = r(16),
          o = r(21);
        t.exports = r(3)
          ? function(t, n, r) {
              return e.f(t, n, o(1, r));
            }
          : function(t, n, r) {
              return (t[n] = r), t;
            };
      },
      function(t, n) {
        var r = 0,
          e = Math.random();

        t.exports = function(t) {
          return "Symbol(".concat(
            void 0 === t ? "" : t,
            ")_",
            (++r + e).toString(36)
          );
        };
      },
      function(t, n, r) {
        var e = r(24);

        t.exports = function(t, n, r) {
          if ((e(t), void 0 === n)) return t;

          switch (r) {
            case 1:
              return function(r) {
                return t.call(n, r);
              };

            case 2:
              return function(r, e) {
                return t.call(n, r, e);
              };

            case 3:
              return function(r, e, o) {
                return t.call(n, r, e, o);
              };
          }

          return function() {
            return t.apply(n, arguments);
          };
        };
      },
      function(t, n) {
        t.exports = function(t) {
          if (void 0 == t) throw TypeError("Can't call method on  " + t);
          return t;
        };
      },
      function(t, n, r) {
        var e = r(28),
          o = Math.min;

        t.exports = function(t) {
          return t > 0 ? o(e(t), 9007199254740991) : 0;
        };
      },
      function(t, n, r) {
        (n.__esModule = !0),
          (n.default = function(t, n) {
            if (t && n) {
              var r = Array.isArray(n) ? n : n.split(","),
                e = t.name || "",
                o = t.type || "",
                i = o.replace(/\/.*$/, "");
              return r.some(function(t) {
                var n = t.trim();
                return "." === n.charAt(0)
                  ? e.toLowerCase().endsWith(n.toLowerCase())
                  : n.endsWith("/*")
                  ? i === n.replace(/\/.*$/, "")
                  : o === n;
              });
            }

            return !0;
          }),
          r(14),
          r(34);
      },
      function(t, n, r) {
        r(15), (t.exports = r(2).Array.some);
      },
      function(t, n, r) {
        var e = r(7),
          o = r(25)(3);
        e(e.P + e.F * !r(33)([].some, !0), "Array", {
          some: function(t) {
            return o(this, t, arguments[1]);
          }
        });
      },
      function(t, n, r) {
        var e = r(17),
          o = r(18),
          i = r(20),
          u = Object.defineProperty;
        n.f = r(3)
          ? Object.defineProperty
          : function(t, n, r) {
              if ((e(t), (n = i(n, !0)), e(r), o))
                try {
                  return u(t, n, r);
                } catch (t) {}
              if ("get" in r || "set" in r)
                throw TypeError("Accessors not supported!");
              return "value" in r && (t[n] = r.value), t;
            };
      },
      function(t, n, r) {
        var e = r(1);

        t.exports = function(t) {
          if (!e(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      },
      function(t, n, r) {
        t.exports =
          !r(3) &&
          !r(4)(function() {
            return (
              7 !=
              Object.defineProperty(r(19)("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a
            );
          });
      },
      function(t, n, r) {
        var e = r(1),
          o = r(0).document,
          i = e(o) && e(o.createElement);

        t.exports = function(t) {
          return i ? o.createElement(t) : {};
        };
      },
      function(t, n, r) {
        var e = r(1);

        t.exports = function(t, n) {
          if (!e(t)) return t;
          var r, o;
          if (n && "function" == typeof (r = t.toString) && !e((o = r.call(t))))
            return o;
          if ("function" == typeof (r = t.valueOf) && !e((o = r.call(t))))
            return o;
          if (
            !n &&
            "function" == typeof (r = t.toString) &&
            !e((o = r.call(t)))
          )
            return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function(t, n) {
        t.exports = function(t, n) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n
          };
        };
      },
      function(t, n, r) {
        var e = r(0),
          o = r(8),
          i = r(23),
          u = r(9)("src"),
          c = Function.toString,
          f = ("" + c).split("toString");
        (r(2).inspectSource = function(t) {
          return c.call(t);
        }),
          (t.exports = function(t, n, r, c) {
            var a = "function" == typeof r;
            a && (i(r, "name") || o(r, "name", n)),
              t[n] !== r &&
                (a &&
                  (i(r, u) || o(r, u, t[n] ? "" + t[n] : f.join(String(n)))),
                t === e
                  ? (t[n] = r)
                  : c
                  ? t[n]
                    ? (t[n] = r)
                    : o(t, n, r)
                  : (delete t[n], o(t, n, r)));
          })(Function.prototype, "toString", function() {
            return ("function" == typeof this && this[u]) || c.call(this);
          });
      },
      function(t, n) {
        var r = {}.hasOwnProperty;

        t.exports = function(t, n) {
          return r.call(t, n);
        };
      },
      function(t, n) {
        t.exports = function(t) {
          if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
          return t;
        };
      },
      function(t, n, r) {
        var e = r(10),
          o = r(26),
          i = r(27),
          u = r(12),
          c = r(29);

        t.exports = function(t, n) {
          var r = 1 == t,
            f = 2 == t,
            a = 3 == t,
            s = 4 == t,
            p = 6 == t,
            l = 5 == t || p,
            v = n || c;
          return function(n, c, y) {
            for (
              var h,
                d,
                x = i(n),
                g = o(x),
                m = e(c, y, 3),
                b = u(g.length),
                _ = 0,
                w = r ? v(n, b) : f ? v(n, 0) : void 0;
              b > _;
              _++
            )
              if ((l || _ in g) && ((h = g[_]), (d = m(h, _, x)), t))
                if (r) w[_] = d;
                else if (d)
                  switch (t) {
                    case 3:
                      return !0;

                    case 5:
                      return h;

                    case 6:
                      return _;

                    case 2:
                      w.push(h);
                  }
                else if (s) return !1;

            return p ? -1 : a || s ? s : w;
          };
        };
      },
      function(t, n, r) {
        var e = r(5);
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function(t) {
              return "String" == e(t) ? t.split("") : Object(t);
            };
      },
      function(t, n, r) {
        var e = r(11);

        t.exports = function(t) {
          return Object(e(t));
        };
      },
      function(t, n) {
        var r = Math.ceil,
          e = Math.floor;

        t.exports = function(t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? e : r)(t);
        };
      },
      function(t, n, r) {
        var e = r(30);

        t.exports = function(t, n) {
          return new (e(t))(n);
        };
      },
      function(t, n, r) {
        var e = r(1),
          o = r(31),
          i = r(6)("species");

        t.exports = function(t) {
          var n;
          return (
            o(t) &&
              ((n = t.constructor),
              "function" != typeof n ||
                (n !== Array && !o(n.prototype)) ||
                (n = void 0),
              e(n) && null === (n = n[i]) && (n = void 0)),
            void 0 === n ? Array : n
          );
        };
      },
      function(t, n, r) {
        var e = r(5);

        t.exports =
          Array.isArray ||
          function(t) {
            return "Array" == e(t);
          };
      },
      function(t, n, r) {
        var e = r(0),
          o = e["__core-js_shared__"] || (e["__core-js_shared__"] = {});

        t.exports = function(t) {
          return o[t] || (o[t] = {});
        };
      },
      function(t, n, r) {
        var e = r(4);

        t.exports = function(t, n) {
          return (
            !!t &&
            e(function() {
              n ? t.call(null, function() {}, 1) : t.call(null);
            })
          );
        };
      },
      function(t, n, r) {
        r(35), (t.exports = r(2).String.endsWith);
      },
      function(t, n, r) {
        var e = r(7),
          o = r(12),
          i = r(36),
          u = "".endsWith;
        e(e.P + e.F * r(38)("endsWith"), "String", {
          endsWith: function(t) {
            var n = i(this, t, "endsWith"),
              r = arguments.length > 1 ? arguments[1] : void 0,
              e = o(n.length),
              c = void 0 === r ? e : Math.min(o(r), e),
              f = String(t);
            return u ? u.call(n, f, c) : n.slice(c - f.length, c) === f;
          }
        });
      },
      function(t, n, r) {
        var e = r(37),
          o = r(11);

        t.exports = function(t, n, r) {
          if (e(n)) throw TypeError("String#" + r + " doesn't accept regex!");
          return String(o(t));
        };
      },
      function(t, n, r) {
        var e = r(1),
          o = r(5),
          i = r(6)("match");

        t.exports = function(t) {
          var n;
          return e(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t));
        };
      },
      function(t, n, r) {
        var e = r(6)("match");

        t.exports = function(t) {
          var n = /./;

          try {
            "/./"[t](n);
          } catch (r) {
            try {
              return (n[e] = !1), !"/./"[t](n);
            } catch (t) {}
          }

          return !0;
        };
      }
    ]);
  });

  var accepts = unwrapExports(dist);

  // that MIME type will always be accepted

  function fileAccepted(file, accept) {
    return file.type === "application/x-moz-file" || accepts(file, accept);
  }
  function fileMatchSize(file, maxSize, minSize) {
    return file.size <= maxSize && file.size >= minSize;
  }
  function allFilesAccepted(files, accept, maxSize, minSize) {
    return files.every(function(file) {
      return (
        fileAccepted(file, accept) && fileMatchSize(file, maxSize, minSize)
      );
    });
  } // React's synthetic events has event.isPropagationStopped,
  // but to remain compatibility with other libs (Preact) fall back
  // to check event.cancelBubble

  function isPropagationStopped(event) {
    if (typeof event.isPropagationStopped === "function") {
      return event.isPropagationStopped();
    } else if (typeof event.cancelBubble !== "undefined") {
      return event.cancelBubble;
    }

    return false;
  }
  function isEvtWithFiles(event) {
    if (!event.dataTransfer) {
      return !!event.target && !!event.target.files;
    } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file

    return Array.prototype.some.call(event.dataTransfer.types, function(type) {
      return type === "Files" || type === "application/x-moz-file";
    });
  }

  function onDocumentDragOver(event) {
    event.preventDefault();
  }

  function isIe(userAgent) {
    return (
      userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1
    );
  }

  function isEdge(userAgent) {
    return userAgent.indexOf("Edge/") !== -1;
  }

  function isIeOrEdge() {
    var userAgent =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : window.navigator.userAgent;
    return isIe(userAgent) || isEdge(userAgent);
  }
  /**
   * This is intended to be used to compose event handlers
   * They are executed in order until one of them calls `event.isPropagationStopped()`.
   * Note that the check is done on the first invoke too,
   * meaning that if propagation was stopped before invoking the fns,
   * no handlers will be executed.
   *
   * @param {Function} fns the event hanlder functions
   * @return {Function} the event handler to add to an element
   */

  function composeEventHandlers() {
    for (
      var _len = arguments.length, fns = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      fns[_key] = arguments[_key];
    }

    return function(event) {
      for (
        var _len2 = arguments.length,
          args = new Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2 - 1] = arguments[_key2];
      }

      return fns.some(function(fn) {
        if (!isPropagationStopped(event) && fn) {
          fn.apply(void 0, [event].concat(args));
        }

        return isPropagationStopped(event);
      });
    };
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    );
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _iterableToArray(iter) {
    if (
      Symbol.iterator in Object(iter) ||
      Object.prototype.toString.call(iter) === "[object Arguments]"
    )
      return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _nonIterableRest()
    );
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _iterableToArrayLimit(arr, i) {
    if (
      !(
        Symbol.iterator in Object(arr) ||
        Object.prototype.toString.call(arr) === "[object Arguments]"
      )
    ) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys(source).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose$1(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
  /**
   * Convenience wrapper component for the `useDropzone` hook
   *
   * ```jsx
   * <Dropzone>
   *   {({getRootProps, getInputProps}) => (
   *     <div {...getRootProps()}>
   *       <input {...getInputProps()} />
   *       <p>Drag 'n' drop some files here, or click to select files</p>
   *     </div>
   *   )}
   * </Dropzone>
   * ```
   */

  var Dropzone = React.forwardRef(function(_ref, ref) {
    var children = _ref.children,
      params = _objectWithoutProperties(_ref, ["children"]);

    var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, ["open"]);

    React.useEffect(
      function() {
        if (typeof ref === "function") {
          ref({
            open: open
          });
        } else if (_typeof(ref) === "object" && ref !== null) {
          ref.current = {
            open: open
          };
        }

        return function() {
          if (typeof ref === "function") {
            ref(null);
          } else if (_typeof(ref) === "object" && ref !== null) {
            ref.current = null;
          }
        };
      },
      [ref]
    ); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

    return React__default.createElement(
      React.Fragment,
      null,
      children(
        _objectSpread({}, props, {
          open: open
        })
      )
    );
  });
  Dropzone.displayName = "Dropzone";
  Dropzone.propTypes = {
    /**
     * Render function that exposes the dropzone state and prop getter fns
     *
     * @param {object} params
     * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
     * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
     * @param {Function} params.open Open the native file selection dialog
     * @param {boolean} params.isFocused Dropzone area is in focus
     * @param {boolean} params.isFileDialogActive File dialog is opened
     * @param {boolean} params.isDragActive Active drag is in progress
     * @param {boolean} params.isDragAccept Dragged files are accepted
     * @param {boolean} params.isDragReject Some dragged files are rejected
     * @param {File[]} params.draggedFiles Files in active drag
     * @param {File[]} params.acceptedFiles Accepted files
     * @param {File[]} params.rejectedFiles Rejected files
     */
    children: propTypes.func,

    /**
     * Set accepted file types.
     * See https://github.com/okonet/attr-accept for more information.
     * Keep in mind that mime type determination is not reliable across platforms. CSV files,
     * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
     * Windows. In some cases there might not be a mime type set at all.
     * See: https://github.com/react-dropzone/react-dropzone/issues/276
     */
    accept: propTypes.oneOfType([
      propTypes.string,
      propTypes.arrayOf(propTypes.string)
    ]),

    /**
     * Allow drag 'n' drop (or selection from the file dialog) of multiple files
     */
    multiple: propTypes.bool,

    /**
     * If false, allow dropped items to take over the current browser window
     */
    preventDropOnDocument: propTypes.bool,

    /**
     * If true, disables click to open the native file selection dialog
     */
    noClick: propTypes.bool,

    /**
     * If true, disables SPACE/ENTER to open the native file selection dialog.
     * Note that it also stops tracking the focus state.
     */
    noKeyboard: propTypes.bool,

    /**
     * If true, disables drag 'n' drop
     */
    noDrag: propTypes.bool,

    /**
     * If true, stops drag event propagation to parents
     */
    noDragEventsBubbling: propTypes.bool,

    /**
     * Minimum file size (in bytes)
     */
    minSize: propTypes.number,

    /**
     * Maximum file size (in bytes)
     */
    maxSize: propTypes.number,

    /**
     * Enable/disable the dropzone
     */
    disabled: propTypes.bool,

    /**
     * Use this to provide a custom file aggregator
     *
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */
    getFilesFromEvent: propTypes.func,

    /**
     * Cb for when closing the file dialog with no selection
     */
    onFileDialogCancel: propTypes.func,

    /**
     * Cb for when the `dragenter` event occurs.
     *
     * @param {DragEvent} event
     */
    onDragEnter: propTypes.func,

    /**
     * Cb for when the `dragleave` event occurs
     *
     * @param {DragEvent} event
     */
    onDragLeave: propTypes.func,

    /**
     * Cb for when the `dragover` event occurs
     *
     * @param {DragEvent} event
     */
    onDragOver: propTypes.func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
     *
     * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
     * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
     * If `multiple` is set to false and additional files are droppped,
     * all files besides the first will be rejected.
     * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
     *
     * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
     * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
     *
     * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
     * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
     *
     * ```js
     * function onDrop(acceptedFiles) {
     *   const req = request.post('/upload')
     *   acceptedFiles.forEach(file => {
     *     req.attach(file.name, file)
     *   })
     *   req.end(callback)
     * }
     * ```
     *
     * @param {File[]} acceptedFiles
     * @param {File[]} rejectedFiles
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */
    onDrop: propTypes.func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that if no files are accepted, this callback is not invoked.
     *
     * @param {File[]} files
     * @param {(DragEvent|Event)} event
     */
    onDropAccepted: propTypes.func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that if no files are rejected, this callback is not invoked.
     *
     * @param {object[]} files
     * @param {(DragEvent|Event)} event
     */
    onDropRejected: propTypes.func
  };
  /**
   * A function that is invoked for the `dragenter`,
   * `dragover` and `dragleave` events.
   * It is not invoked if the items are not files (such as link, text, etc.).
   *
   * @callback dragCb
   * @param {DragEvent} event
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   * It is not invoked if the items are not files (such as link, text, etc.).
   *
   * @callback dropCb
   * @param {File[]} acceptedFiles List of accepted files
   * @param {File[]} rejectedFiles List of rejected files
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   * It is not invoked if the items are files (such as link, text, etc.).
   *
   * @callback dropAcceptedCb
   * @param {File[]} files List of accepted files that meet the given criteria
   * (`accept`, `multiple`, `minSize`, `maxSize`)
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   *
   * @callback dropRejectedCb
   * @param {File[]} files List of rejected files that do not meet the given criteria
   * (`accept`, `multiple`, `minSize`, `maxSize`)
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is used aggregate files,
   * in a asynchronous fashion, from drag or input change events.
   *
   * @callback getFilesFromEvent
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   * @returns {(File[]|Promise<File[]>)}
   */

  /**
   * An object with the current dropzone state and some helper functions.
   *
   * @typedef {object} DropzoneState
   * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
   * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
   * @property {Function} open Open the native file selection dialog
   * @property {boolean} isFocused Dropzone area is in focus
   * @property {boolean} isFileDialogActive File dialog is opened
   * @property {boolean} isDragActive Active drag is in progress
   * @property {boolean} isDragAccept Dragged files are accepted
   * @property {boolean} isDragReject Some dragged files are rejected
   * @property {File[]} draggedFiles Files in active drag
   * @property {File[]} acceptedFiles Accepted files
   * @property {File[]} rejectedFiles Rejected files
   */

  var initialState = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    draggedFiles: [],
    acceptedFiles: [],
    rejectedFiles: []
  };
  /**
   * A React hook that creates a drag 'n' drop area.
   *
   * ```jsx
   * function MyDropzone(props) {
   *   const {getRootProps, getInputProps} = useDropzone({
   *     onDrop: acceptedFiles => {
   *       // do something with the File objects, e.g. upload to some server
   *     }
   *   });
   *   return (
   *     <div {...getRootProps()}>
   *       <input {...getInputProps()} />
   *       <p>Drag and drop some files here, or click to select files</p>
   *     </div>
   *   )
   * }
   * ```
   *
   * @function useDropzone
   *
   * @param {object} props
   * @param {string|string[]} [props.accept] Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
   * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
   * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
   * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
   * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
   * @param {number} [props.minSize=0] Minimum file size (in bytes)
   * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
   * @param {boolean} [props.disabled=false] Enable/disable the dropzone
   * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
   * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
   * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
   * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
   * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
   * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are droppped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   * @param {dropAcceptedCb} [props.onDropAccepted]
   * @param {dropRejectedCb} [props.onDropRejected]
   *
   * @returns {DropzoneState}
   */

  function useDropzone() {
    var _ref2 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      accept = _ref2.accept,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$getFilesFromEve = _ref2.getFilesFromEvent,
      getFilesFromEvent =
        _ref2$getFilesFromEve === void 0 ? fromEvent : _ref2$getFilesFromEve,
      _ref2$maxSize = _ref2.maxSize,
      maxSize = _ref2$maxSize === void 0 ? Infinity : _ref2$maxSize,
      _ref2$minSize = _ref2.minSize,
      minSize = _ref2$minSize === void 0 ? 0 : _ref2$minSize,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? true : _ref2$multiple,
      onDragEnter = _ref2.onDragEnter,
      onDragLeave = _ref2.onDragLeave,
      onDragOver = _ref2.onDragOver,
      onDrop = _ref2.onDrop,
      onDropAccepted = _ref2.onDropAccepted,
      onDropRejected = _ref2.onDropRejected,
      onFileDialogCancel = _ref2.onFileDialogCancel,
      _ref2$preventDropOnDo = _ref2.preventDropOnDocument,
      preventDropOnDocument =
        _ref2$preventDropOnDo === void 0 ? true : _ref2$preventDropOnDo,
      _ref2$noClick = _ref2.noClick,
      noClick = _ref2$noClick === void 0 ? false : _ref2$noClick,
      _ref2$noKeyboard = _ref2.noKeyboard,
      noKeyboard = _ref2$noKeyboard === void 0 ? false : _ref2$noKeyboard,
      _ref2$noDrag = _ref2.noDrag,
      noDrag = _ref2$noDrag === void 0 ? false : _ref2$noDrag,
      _ref2$noDragEventsBub = _ref2.noDragEventsBubbling,
      noDragEventsBubbling =
        _ref2$noDragEventsBub === void 0 ? false : _ref2$noDragEventsBub;

    var rootRef = React.useRef(null);
    var inputRef = React.useRef(null);

    var _useReducer = React.useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

    var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive,
      draggedFiles = state.draggedFiles; // Fn for opening the file dialog programmatically

    var openFileDialog = function openFileDialog() {
      if (inputRef.current) {
        dispatch({
          type: "openDialog"
        });
        inputRef.current.value = null;
        inputRef.current.click();
      }
    }; // Update file dialog active state when the window is focused on

    var onWindowFocus = function onWindowFocus() {
      // Execute the timeout only if the file dialog is opened in the browser
      if (isFileDialogActive) {
        setTimeout(function() {
          if (inputRef.current) {
            var files = inputRef.current.files;

            if (!files.length) {
              dispatch({
                type: "closeDialog"
              });

              if (typeof onFileDialogCancel === "function") {
                onFileDialogCancel();
              }
            }
          }
        }, 300);
      }
    };

    React.useEffect(
      function() {
        window.addEventListener("focus", onWindowFocus, false);
        return function() {
          window.removeEventListener("focus", onWindowFocus, false);
        };
      },
      [inputRef, isFileDialogActive, onFileDialogCancel]
    ); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

    var onKeyDownCb = React.useCallback(
      function(event) {
        // Ignore keyboard events bubbling up the DOM tree
        if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
          return;
        }

        if (event.keyCode === 32 || event.keyCode === 13) {
          event.preventDefault();
          openFileDialog();
        }
      },
      [rootRef, inputRef]
    ); // Update focus state for the dropzone

    var onFocusCb = React.useCallback(function() {
      dispatch({
        type: "focus"
      });
    }, []);
    var onBlurCb = React.useCallback(function() {
      dispatch({
        type: "blur"
      });
    }, []); // Cb to open the file dialog when click occurs on the dropzone

    var onClickCb = React.useCallback(
      function() {
        if (noClick) {
          return;
        } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
        // to ensure React can handle state changes
        // See: https://github.com/react-dropzone/react-dropzone/issues/450

        if (isIeOrEdge()) {
          setTimeout(openFileDialog, 0);
        } else {
          openFileDialog();
        }
      },
      [inputRef, noClick]
    );
    var dragTargetsRef = React.useRef([]);

    var onDocumentDrop = function onDocumentDrop(event) {
      if (rootRef.current && rootRef.current.contains(event.target)) {
        // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
        return;
      }

      event.preventDefault();
      dragTargetsRef.current = [];
    };

    React.useEffect(
      function() {
        if (preventDropOnDocument) {
          document.addEventListener("dragover", onDocumentDragOver, false);
          document.addEventListener("drop", onDocumentDrop, false);
        }

        return function() {
          if (preventDropOnDocument) {
            document.removeEventListener("dragover", onDocumentDragOver);
            document.removeEventListener("drop", onDocumentDrop);
          }
        };
      },
      [rootRef, preventDropOnDocument]
    );
    var onDragEnterCb = React.useCallback(
      function(event) {
        event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

        event.persist();
        stopPropagation(event); // Count the dropzone and any children that are entered.

        if (dragTargetsRef.current.indexOf(event.target) === -1) {
          dragTargetsRef.current = [].concat(
            _toConsumableArray(dragTargetsRef.current),
            [event.target]
          );
        }

        if (isEvtWithFiles(event)) {
          Promise.resolve(getFilesFromEvent(event)).then(function(
            draggedFiles
          ) {
            if (isPropagationStopped(event) && !noDragEventsBubbling) {
              return;
            }

            dispatch({
              draggedFiles: draggedFiles,
              isDragActive: true,
              type: "setDraggedFiles"
            });

            if (onDragEnter) {
              onDragEnter(event);
            }
          });
        }
      },
      [getFilesFromEvent, onDragEnter, noDragEventsBubbling]
    );
    var onDragOverCb = React.useCallback(
      function(event) {
        event.preventDefault();
        event.persist();
        stopPropagation(event);

        if (event.dataTransfer) {
          try {
            event.dataTransfer.dropEffect = "copy";
          } catch (_unused) {}
          /* eslint-disable-line no-empty */
        }

        if (isEvtWithFiles(event) && onDragOver) {
          onDragOver(event);
        }

        return false;
      },
      [onDragOver, noDragEventsBubbling]
    );
    var onDragLeaveCb = React.useCallback(
      function(event) {
        event.preventDefault();
        event.persist();
        stopPropagation(event); // Only deactivate once the dropzone and all children have been left

        var targets = dragTargetsRef.current.filter(function(target) {
          return (
            target !== event.target &&
            rootRef.current &&
            rootRef.current.contains(target)
          );
        });
        dragTargetsRef.current = targets;

        if (targets.length > 0) {
          return;
        }

        dispatch({
          isDragActive: false,
          type: "setDraggedFiles",
          draggedFiles: []
        });

        if (isEvtWithFiles(event) && onDragLeave) {
          onDragLeave(event);
        }
      },
      [rootRef, onDragLeave, noDragEventsBubbling]
    );
    var onDropCb = React.useCallback(
      function(event) {
        event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

        event.persist();
        stopPropagation(event);
        dragTargetsRef.current = [];
        dispatch({
          type: "reset"
        });

        if (isEvtWithFiles(event)) {
          Promise.resolve(getFilesFromEvent(event)).then(function(files) {
            if (isPropagationStopped(event) && !noDragEventsBubbling) {
              return;
            }

            var acceptedFiles = [];
            var rejectedFiles = [];
            files.forEach(function(file) {
              if (
                fileAccepted(file, accept) &&
                fileMatchSize(file, maxSize, minSize)
              ) {
                acceptedFiles.push(file);
              } else {
                rejectedFiles.push(file);
              }
            });

            if (!multiple && acceptedFiles.length > 1) {
              rejectedFiles.push.apply(
                rejectedFiles,
                _toConsumableArray(acceptedFiles.splice(0))
              ); // Reject everything and empty accepted files
            }

            dispatch({
              acceptedFiles: acceptedFiles,
              rejectedFiles: rejectedFiles,
              type: "setFiles"
            });

            if (onDrop) {
              onDrop(acceptedFiles, rejectedFiles, event);
            }

            if (rejectedFiles.length > 0 && onDropRejected) {
              onDropRejected(rejectedFiles, event);
            }

            if (acceptedFiles.length > 0 && onDropAccepted) {
              onDropAccepted(acceptedFiles, event);
            }
          });
        }
      },
      [
        multiple,
        accept,
        minSize,
        maxSize,
        getFilesFromEvent,
        onDrop,
        onDropAccepted,
        onDropRejected,
        noDragEventsBubbling
      ]
    );

    var composeHandler = function composeHandler(fn) {
      return disabled ? null : fn;
    };

    var composeKeyboardHandler = function composeKeyboardHandler(fn) {
      return noKeyboard ? null : composeHandler(fn);
    };

    var composeDragHandler = function composeDragHandler(fn) {
      return noDrag ? null : composeHandler(fn);
    };

    var stopPropagation = function stopPropagation(event) {
      if (noDragEventsBubbling) {
        event.stopPropagation();
      }
    };

    var getRootProps = React.useMemo(
      function() {
        return function() {
          var _ref3 =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            _ref3$refKey = _ref3.refKey,
            refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
            onKeyDown = _ref3.onKeyDown,
            onFocus = _ref3.onFocus,
            onBlur = _ref3.onBlur,
            onClick = _ref3.onClick,
            onDragEnter = _ref3.onDragEnter,
            onDragOver = _ref3.onDragOver,
            onDragLeave = _ref3.onDragLeave,
            onDrop = _ref3.onDrop,
            rest = _objectWithoutProperties(_ref3, [
              "refKey",
              "onKeyDown",
              "onFocus",
              "onBlur",
              "onClick",
              "onDragEnter",
              "onDragOver",
              "onDragLeave",
              "onDrop"
            ]);

          return _objectSpread(
            _defineProperty(
              {
                onKeyDown: composeKeyboardHandler(
                  composeEventHandlers(onKeyDown, onKeyDownCb)
                ),
                onFocus: composeKeyboardHandler(
                  composeEventHandlers(onFocus, onFocusCb)
                ),
                onBlur: composeKeyboardHandler(
                  composeEventHandlers(onBlur, onBlurCb)
                ),
                onClick: composeHandler(
                  composeEventHandlers(onClick, onClickCb)
                ),
                onDragEnter: composeDragHandler(
                  composeEventHandlers(onDragEnter, onDragEnterCb)
                ),
                onDragOver: composeDragHandler(
                  composeEventHandlers(onDragOver, onDragOverCb)
                ),
                onDragLeave: composeDragHandler(
                  composeEventHandlers(onDragLeave, onDragLeaveCb)
                ),
                onDrop: composeDragHandler(
                  composeEventHandlers(onDrop, onDropCb)
                )
              },
              refKey,
              rootRef
            ),
            !disabled && !noKeyboard
              ? {
                  tabIndex: 0
                }
              : {},
            {},
            rest
          );
        };
      },
      [
        rootRef,
        onKeyDownCb,
        onFocusCb,
        onBlurCb,
        onClickCb,
        onDragEnterCb,
        onDragOverCb,
        onDragLeaveCb,
        onDropCb,
        noKeyboard,
        noDrag,
        disabled
      ]
    );
    var onInputElementClick = React.useCallback(function(event) {
      event.stopPropagation();
    }, []);
    var getInputProps = React.useMemo(
      function() {
        return function() {
          var _ref4 =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            _ref4$refKey = _ref4.refKey,
            refKey = _ref4$refKey === void 0 ? "ref" : _ref4$refKey,
            onChange = _ref4.onChange,
            onClick = _ref4.onClick,
            rest = _objectWithoutProperties(_ref4, [
              "refKey",
              "onChange",
              "onClick"
            ]);

          var inputProps = _defineProperty(
            {
              accept: accept,
              multiple: multiple,
              type: "file",
              style: {
                display: "none"
              },
              onChange: composeHandler(
                composeEventHandlers(onChange, onDropCb)
              ),
              onClick: composeHandler(
                composeEventHandlers(onClick, onInputElementClick)
              ),
              autoComplete: "off",
              tabIndex: -1
            },
            refKey,
            inputRef
          );

          return _objectSpread({}, inputProps, {}, rest);
        };
      },
      [inputRef, accept, multiple, onDropCb, disabled]
    );
    var fileCount = draggedFiles.length;
    var isMultipleAllowed = multiple || fileCount <= 1;
    var isDragAccept =
      fileCount > 0 && allFilesAccepted(draggedFiles, accept, maxSize, minSize);
    var isDragReject = fileCount > 0 && (!isDragAccept || !isMultipleAllowed);
    return _objectSpread({}, state, {
      isDragAccept: isDragAccept,
      isDragReject: isDragReject,
      isFocused: isFocused && !disabled,
      getRootProps: getRootProps,
      getInputProps: getInputProps,
      rootRef: rootRef,
      inputRef: inputRef,
      open: composeHandler(openFileDialog)
    });
  }

  function reducer(state, action) {
    /* istanbul ignore next */
    switch (action.type) {
      case "focus":
        return _objectSpread({}, state, {
          isFocused: true
        });

      case "blur":
        return _objectSpread({}, state, {
          isFocused: false
        });

      case "openDialog":
        return _objectSpread({}, state, {
          isFileDialogActive: true
        });

      case "closeDialog":
        return _objectSpread({}, state, {
          isFileDialogActive: false
        });

      case "setDraggedFiles":
        /* eslint no-case-declarations: 0 */
        var isDragActive = action.isDragActive,
          draggedFiles = action.draggedFiles;
        return _objectSpread({}, state, {
          draggedFiles: draggedFiles,
          isDragActive: isDragActive
        });

      case "setFiles":
        return _objectSpread({}, state, {
          acceptedFiles: action.acceptedFiles,
          rejectedFiles: action.rejectedFiles
        });

      case "reset":
        return _objectSpread({}, state, {
          isFileDialogActive: false,
          isDragActive: false,
          draggedFiles: []
        });

      default:
        return state;
    }
  }

  var bind = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);

      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      return fn.apply(thisArg, args);
    };
  };

  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  var isBuffer = function isBuffer(obj) {
    return (
      obj != null &&
      obj.constructor != null &&
      typeof obj.constructor.isBuffer === "function" &&
      obj.constructor.isBuffer(obj)
    );
  };

  /*global toString:true*/
  // utils is a library of generic helper functions non-specific to axios

  var toString = Object.prototype.toString;
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */

  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */

  function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
  }
  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */

  function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
  }
  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */

  function isArrayBufferView(val) {
    var result;

    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }

    return result;
  }
  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */

  function isString(val) {
    return typeof val === "string";
  }
  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */

  function isNumber(val) {
    return typeof val === "number";
  }
  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */

  function isUndefined(val) {
    return typeof val === "undefined";
  }
  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */

  function isObject$1(val) {
    return val !== null && typeof val === "object";
  }
  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */

  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */

  function isFile(val) {
    return toString.call(val) === "[object File]";
  }
  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */

  function isBlob(val) {
    return toString.call(val) === "[object Blob]";
  }
  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */

  function isFunction$1(val) {
    return toString.call(val) === "[object Function]";
  }
  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */

  function isStream(val) {
    return isObject$1(val) && isFunction$1(val.pipe);
  }
  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */

  function isURLSearchParams(val) {
    return (
      typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams
    );
  }
  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */

  function trim(str) {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
  }
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */

  function isStandardBrowserEnv() {
    if (
      typeof navigator !== "undefined" &&
      (navigator.product === "ReactNative" ||
        navigator.product === "NativeScript" ||
        navigator.product === "NS")
    ) {
      return false;
    }

    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */

  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") {
      return;
    } // Force an array if not already something iterable

    if (typeof obj !== "object") {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */

  function merge() {
    /* obj1, obj2, obj3, ... */
    var result = {};

    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = merge(result[key], val);
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }

    return result;
  }
  /**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */

  function deepMerge() {
    /* obj1, obj2, obj3, ... */
    var result = {};

    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }

    return result;
  }
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */

  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }

  var utils = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject$1,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction$1,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    deepMerge: deepMerge,
    extend: extend,
    trim: trim
  };

  function encode(val) {
    return encodeURIComponent(val)
      .replace(/%40/gi, "@")
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */

  var buildURL = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }

    var serializedParams;

    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }

        if (utils.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }

        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }

          parts.push(encode(key) + "=" + encode(v));
        });
      });
      serializedParams = parts.join("&");
    }

    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");

      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }

      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }

    return url;
  };

  function InterceptorManager() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */

  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */

  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */

  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };

  var InterceptorManager_1 = InterceptorManager;

  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */

  var transformData = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
    return data;
  };

  var isCancel = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };

  var normalizeHeaderName = function normalizeHeaderName(
    headers,
    normalizedName
  ) {
    utils.forEach(headers, function processHeader(value, name) {
      if (
        name !== normalizedName &&
        name.toUpperCase() === normalizedName.toUpperCase()
      ) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };

  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */

  var enhanceError = function enhanceError(
    error,
    config,
    code,
    request,
    response
  ) {
    error.config = config;

    if (code) {
      error.code = code;
    }

    error.request = request;
    error.response = response;
    error.isAxiosError = true;

    error.toJSON = function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    };

    return error;
  };

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */

  var createError = function createError(
    message,
    config,
    code,
    request,
    response
  ) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */

  var settle = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;

    if (!validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(
        createError(
          "Request failed with status code " + response.status,
          response.config,
          null,
          response.request,
          response
        )
      );
    }
  };

  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers

  var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */

  var parseHeaders = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;

    if (!headers) {
      return parsed;
    }

    utils.forEach(headers.split("\n"), function parser(line) {
      i = line.indexOf(":");
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));

      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }

        if (key === "set-cookie") {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }
    });
    return parsed;
  };

  var isURLSameOrigin = utils.isStandardBrowserEnv() // Standard browser envs have full support of the APIs needed to test
    ? // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        /**
         * Parse a URL to discover it's components
         *
         * @param {String} url The URL to be parsed
         * @returns {Object}
         */

        function resolveURL(url) {
          var href = url;

          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute("href", href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol
              ? urlParsingNode.protocol.replace(/:$/, "")
              : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search
              ? urlParsingNode.search.replace(/^\?/, "")
              : "",
            hash: urlParsingNode.hash
              ? urlParsingNode.hash.replace(/^#/, "")
              : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname:
              urlParsingNode.pathname.charAt(0) === "/"
                ? urlParsingNode.pathname
                : "/" + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);
        /**
         * Determine if a URL shares the same origin as the current location
         *
         * @param {String} requestURL The URL to test
         * @returns {boolean} True if URL shares the same origin, otherwise false
         */

        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL)
            ? resolveURL(requestURL)
            : requestURL;
          return (
            parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host
          );
        };
      })() // Non standard browser envs (web workers, react-native) lack needed support.
    : (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })();

  var cookies = utils.isStandardBrowserEnv() // Standard browser envs support document.cookie
    ? (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));

            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }

            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }

            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }

            if (secure === true) {
              cookie.push("secure");
            }

            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(
              new RegExp("(^|;\\s*)(" + name + ")=([^;]*)")
            );
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
          }
        };
      })() // Non standard browser env (web workers, react-native) lack needed support.
    : (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() {
            return null;
          },
          remove: function remove() {}
        };
      })();

  var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;

      if (utils.isFormData(requestData)) {
        delete requestHeaders["Content-Type"]; // Let the browser set it
      }

      var request = new XMLHttpRequest(); // HTTP basic authentication

      if (config.auth) {
        var username = config.auth.username || "";
        var password = config.auth.password || "";
        requestHeaders.Authorization =
          "Basic " + btoa(username + ":" + password);
      }

      request.open(
        config.method.toUpperCase(),
        buildURL(config.url, config.params, config.paramsSerializer),
        true
      ); // Set the request timeout in MS

      request.timeout = config.timeout; // Listen for ready state

      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        } // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request

        if (
          request.status === 0 &&
          !(request.responseURL && request.responseURL.indexOf("file:") === 0)
        ) {
          return;
        } // Prepare the response

        var responseHeaders =
          "getAllResponseHeaders" in request
            ? parseHeaders(request.getAllResponseHeaders())
            : null;
        var responseData =
          !config.responseType || config.responseType === "text"
            ? request.responseText
            : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
        settle(resolve, reject, response); // Clean up request

        request = null;
      }; // Handle browser request cancellation (as opposed to a manual cancellation)

      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(createError("Request aborted", config, "ECONNABORTED", request)); // Clean up request

        request = null;
      }; // Handle low level network errors

      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError("Network Error", config, null, request)); // Clean up request

        request = null;
      }; // Handle timeout

      request.ontimeout = function handleTimeout() {
        reject(
          createError(
            "timeout of " + config.timeout + "ms exceeded",
            config,
            "ECONNABORTED",
            request
          )
        ); // Clean up request

        request = null;
      }; // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.

      if (utils.isStandardBrowserEnv()) {
        var cookies$1 = cookies; // Add xsrf header

        var xsrfValue =
          (config.withCredentials || isURLSameOrigin(config.url)) &&
          config.xsrfCookieName
            ? cookies$1.read(config.xsrfCookieName)
            : undefined;

        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      } // Add headers to the request

      if ("setRequestHeader" in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (
            typeof requestData === "undefined" &&
            key.toLowerCase() === "content-type"
          ) {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      } // Add withCredentials to request if needed

      if (config.withCredentials) {
        request.withCredentials = true;
      } // Add responseType to request if needed

      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== "json") {
            throw e;
          }
        }
      } // Handle progress if needed

      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", config.onDownloadProgress);
      } // Not all browsers support upload events

      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", config.onUploadProgress);
      }

      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }

          request.abort();
          reject(cancel); // Clean up request

          request = null;
        });
      }

      if (requestData === undefined) {
        requestData = null;
      } // Send the request

      request.send(requestData);
    });
  };

  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

  function setContentTypeIfUnset(headers, value) {
    if (
      !utils.isUndefined(headers) &&
      utils.isUndefined(headers["Content-Type"])
    ) {
      headers["Content-Type"] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter; // Only Node.JS has a process variable that is of [[Class]] process

    if (
      typeof process !== "undefined" &&
      Object.prototype.toString.call(process) === "[object process]"
    ) {
      // For node use HTTP adapter
      adapter = xhr;
    } else if (typeof XMLHttpRequest !== "undefined") {
      // For browsers use XHR adapter
      adapter = xhr;
    }

    return adapter;
  }

  var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [
      function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");

        if (
          utils.isFormData(data) ||
          utils.isArrayBuffer(data) ||
          utils.isBuffer(data) ||
          utils.isStream(data) ||
          utils.isFile(data) ||
          utils.isBlob(data)
        ) {
          return data;
        }

        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }

        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(
            headers,
            "application/x-www-form-urlencoded;charset=utf-8"
          );
          return data.toString();
        }

        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, "application/json;charset=utf-8");
          return JSON.stringify(data);
        }

        return data;
      }
    ],
    transformResponse: [
      function transformResponse(data) {
        /*eslint no-param-reassign:0*/
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
            /* Ignore */
          }
        }

        return data;
      }
    ],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  defaults.headers = {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  };
  utils.forEach(["delete", "get", "head"], function forEachMethodNoData(
    method
  ) {
    defaults.headers[method] = {};
  });
  utils.forEach(["post", "put", "patch"], function forEachMethodWithData(
    method
  ) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  var defaults_1 = defaults;

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */

  var isAbsoluteURL = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */

  var combineURLs = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
      : baseURL;
  };

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */

  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */

  var dispatchRequest = function dispatchRequest(config) {
    throwIfCancellationRequested(config); // Support baseURL config

    if (config.baseURL && !isAbsoluteURL(config.url)) {
      config.url = combineURLs(config.baseURL, config.url);
    } // Ensure headers exist

    config.headers = config.headers || {}; // Transform request data

    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    ); // Flatten headers

    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers || {}
    );
    utils.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
    var adapter = config.adapter || defaults_1.adapter;
    return adapter(config).then(
      function onAdapterResolution(response) {
        throwIfCancellationRequested(config); // Transform response data

        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );
        return response;
      },
      function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config); // Transform response data

          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      }
    );
  };

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */

  var mergeConfig = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    utils.forEach(
      ["url", "method", "params", "data"],
      function valueFromConfig2(prop) {
        if (typeof config2[prop] !== "undefined") {
          config[prop] = config2[prop];
        }
      }
    );
    utils.forEach(["headers", "auth", "proxy"], function mergeDeepProperties(
      prop
    ) {
      if (utils.isObject(config2[prop])) {
        config[prop] = utils.deepMerge(config1[prop], config2[prop]);
      } else if (typeof config2[prop] !== "undefined") {
        config[prop] = config2[prop];
      } else if (utils.isObject(config1[prop])) {
        config[prop] = utils.deepMerge(config1[prop]);
      } else if (typeof config1[prop] !== "undefined") {
        config[prop] = config1[prop];
      }
    });
    utils.forEach(
      [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "maxContentLength",
        "validateStatus",
        "maxRedirects",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath"
      ],
      function defaultToConfig2(prop) {
        if (typeof config2[prop] !== "undefined") {
          config[prop] = config2[prop];
        } else if (typeof config1[prop] !== "undefined") {
          config[prop] = config1[prop];
        }
      }
    );
    return config;
  };

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */

  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_1(),
      response: new InterceptorManager_1()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */

  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === "string") {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }

    config = mergeConfig(this.defaults, config);
    config.method = config.method ? config.method.toLowerCase() : "get"; // Hook up interceptors middleware

    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(
      interceptor
    ) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(
      interceptor
    ) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  };

  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(
      /^\?/,
      ""
    );
  }; // Provide aliases for supported request methods

  utils.forEach(
    ["delete", "get", "head", "options"],
    function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, config) {
        return this.request(
          utils.merge(config || {}, {
            method: method,
            url: url
          })
        );
      };
    }
  );
  utils.forEach(["post", "put", "patch"], function forEachMethodWithData(
    method
  ) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(
        utils.merge(config || {}, {
          method: method,
          url: url,
          data: data
        })
      );
    };
  });
  var Axios_1 = Axios;

  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */

  function Cancel(message) {
    this.message = message;
  }

  Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  };

  Cancel.prototype.__CANCEL__ = true;
  var Cancel_1 = Cancel;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */

  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }

    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new Cancel_1(message);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */

  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */

  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };

  var CancelToken_1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */

  var spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */

  function createInstance(defaultConfig) {
    var context = new Axios_1(defaultConfig);
    var instance = bind(Axios_1.prototype.request, context); // Copy axios.prototype to instance

    utils.extend(instance, Axios_1.prototype, context); // Copy context to instance

    utils.extend(instance, context);
    return instance;
  } // Create the default instance to be exported

  var axios = createInstance(defaults_1); // Expose Axios class to allow class inheritance

  axios.Axios = Axios_1; // Factory for creating new instances

  axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
  }; // Expose Cancel & CancelToken

  axios.Cancel = Cancel_1;
  axios.CancelToken = CancelToken_1;
  axios.isCancel = isCancel; // Expose all/spread

  axios.all = function all(promises) {
    return Promise.all(promises);
  };

  axios.spread = spread;
  var axios_1 = axios; // Allow use of default import syntax in TypeScript

  var default_1 = axios;
  axios_1.default = default_1;

  var axios$1 = axios_1;

  var FileUpload =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose(FileUpload, _React$Component);

      function FileUpload() {
        var _this;

        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }

        _this =
          _React$Component.call.apply(_React$Component, [this].concat(args)) ||
          this;
        _this.progressElem = null;
        _this.state = {
          error: null
        };
        return _this;
      }

      var _proto = FileUpload.prototype;

      _proto.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var _this$props = this.props,
          file = _this$props.file,
          addOnStack = _this$props.addOnStack,
          endPoint = _this$props.endPoint;
        var progress = 0;
        var formData = new FormData();
        formData.append("upload", file);
        axios$1
          .post(endPoint.path, formData, {
            headers: endPoint.headers,
            onUploadProgress: function onUploadProgress(progressEvent) {
              var percentage = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              progress = [percentage, "%"].join("");
              _this2.progressElem.style.width = progress;

              if (percentage === 100) {
                _this2.progressElem.innerHTML = "done";
              } else {
                _this2.progressElem.innerHTML = progress;
              }
            }
          })
          .then(function() {
            addOnStack(file);
          })
          .catch(function(error) {
            _this2.setState({
              error: error
            });
          });
      };

      _proto.render = function render() {
        var _this3 = this;

        var _this$props2 = this.props,
          file = _this$props2.file,
          removeFromStack = _this$props2.removeFromStack;
        var error = this.state.error;

        if (error) {
          return React__default.createElement(
            "tr",
            null,
            React__default.createElement(
              "td",
              {
                colSpan: 3
              },
              React__default.createElement(
                "div",
                {
                  className: "file-upload-error"
                },
                "There was an error, try again or contact the site owner."
              )
            )
          );
        }

        return React__default.createElement(
          "tr",
          null,
          React__default.createElement(
            "td",
            {
              className: "file-upload-name"
            },
            file.preview &&
              React__default.createElement("img", {
                src: file.preview,
                alt: file.name,
                className: "img-thumbnail",
                style: {
                  maxWidth: "80px"
                }
              })
          ),
          React__default.createElement(
            "td",
            {
              className: "file-upload-progress"
            },
            React__default.createElement(
              "div",
              {
                className: "progress"
              },
              React__default.createElement(
                "div",
                {
                  ref: function ref(elem) {
                    _this3.progressElem = elem;
                  },
                  className: "progress-bar",
                  role: "progressbar",
                  style: {
                    width: "0%"
                  },
                  "aria-valuenow": "0",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                },
                "0%"
              )
            )
          ),
          React__default.createElement(
            "td",
            {
              className: "file-upload-delete"
            },
            React__default.createElement(
              "button",
              {
                className: "file-upload-delete-button",
                type: "button",
                onClick: function onClick() {
                  removeFromStack(file);
                }
              },
              "x"
            )
          )
        );
      };

      return FileUpload;
    })(React__default.Component);

  FileUpload.propTypes = {
    file: propTypes.shape({
      name: propTypes.string.isRequired,
      size: propTypes.number.isRequired,
      preview: propTypes.string.isRequired
    }).isRequired,
    endPoint: propTypes.shape({
      path: propTypes.string.isRequired,
      headers: propTypes.shape({})
    }),
    removeFromStack: propTypes.func.isRequired,
    addOnStack: propTypes.func.isRequired
  };
  FileUpload.defaultProps = {
    endPoint: {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  };

  var DropZone =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose(DropZone, _React$Component);

      function DropZone() {
        var _this;

        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }

        _this =
          _React$Component.call.apply(_React$Component, [this].concat(args)) ||
          this;
        _this.state = {
          queue: []
        };
        _this.stack = [];

        _this.filesFromClient = function(files) {
          var queue = _this.state.queue;
          var tmpQueue = [].concat(queue);
          files.forEach(function(file) {
            file.preview = URL.createObjectURL(file);
            tmpQueue.push(file);
          });

          _this.setState({
            queue: tmpQueue
          });
        };

        _this.addOnStack = function(file) {
          var input = _this.props.input;
          var name = file.name,
            size = file.size,
            type = file.type,
            lastModified = file.lastModified;

          _this.stack.push({
            name: name,
            size: size,
            type: type,
            lastModified: lastModified
          });

          input.onChange(_this.stack);
        };

        _this.removeFromStack = function(fileToDelete) {
          var queue = _this.state.queue;
          var input = _this.props.input;
          var filtered = queue.filter(function(file) {
            return file.name !== fileToDelete.name;
          });

          var stackFiltered = _this.stack.filter(function(file) {
            return file.name !== fileToDelete.name;
          });

          _this.stack = stackFiltered;
          input.onChange(stackFiltered);

          _this.setState({
            queue: filtered
          });
        };

        _this.displayFiles = function() {
          var queue = _this.state.queue;
          var endPoint = _this.props.endPoint;

          if (queue.length === 0) {
            return null;
          }

          var list = queue.map(function(file) {
            return React__default.createElement(FileUpload, {
              key: file.name,
              file: file,
              addOnStack: _this.addOnStack,
              removeFromStack: _this.removeFromStack,
              endPoint: endPoint
            });
          });
          return React__default.createElement(
            "table",
            {
              className: "table"
            },
            React__default.createElement("tbody", null, list)
          );
        };

        return _this;
      }

      var _proto = DropZone.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(
        nextProps,
        nextState
      ) {
        var queue = this.state.queue;
        return queue !== nextState.queue;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var queue = this.state.queue;
        queue.forEach(function(file) {
          URL.createObjectURL(file);
        });
      };

      _proto.render = function render() {
        return React__default.createElement(
          React__default.Fragment,
          null,
          React__default.createElement(
            Dropzone,
            {
              onDrop: this.filesFromClient
            },
            function(_ref) {
              var getRootProps = _ref.getRootProps,
                getInputProps = _ref.getInputProps;
              return React__default.createElement(
                "section",
                {
                  className: "file-upload-dropzone"
                },
                React__default.createElement(
                  "div",
                  getRootProps(),
                  React__default.createElement("input", getInputProps()),
                  React__default.createElement(
                    "button",
                    {
                      type: "button",
                      className: "btn btn-primary"
                    },
                    "select files..."
                  )
                )
              );
            }
          ),
          this.displayFiles()
        );
      };

      return DropZone;
    })(React__default.Component);

  DropZone.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    placeholder: propTypes.string,
    endPoint: propTypes.shape({
      path: propTypes.string.isRequired,
      headers: propTypes.shape({})
    }).isRequired,
    formControl: propTypes.string,
    computedInvalid: propTypes.bool.isRequired
  };
  DropZone.defaultProps = {
    input: {},
    placeholder: null,
    formControl: null
  };
  var DropZone$1 = Context(Context$1(DropZone));

  var Password = function Password(props) {
    var input = props.input,
      placeholder = props.placeholder,
      formControl = props.formControl,
      computedInvalid = props.computedInvalid;
    return React__default.createElement(
      "input",
      _extends(
        {
          type: "password",
          placeholder: placeholder,
          className: classnames(
            "ffc-input",
            {
              "is-invalid": computedInvalid
            },
            formControl
          )
        },
        input
      )
    );
  };

  Password.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    placeholder: propTypes.string,
    formControl: propTypes.string,
    computedInvalid: propTypes.bool.isRequired
  };
  Password.defaultProps = {
    input: {},
    placeholder: null,
    formControl: null
  };
  var Password$1 = Context(Context$1(Password));

  var Radio = function Radio(props) {
    var input = props.input,
      children = props.children,
      formControl = props.formControl,
      computedInvalid = props.computedInvalid;
    var radioList = Array.isArray(children) ? children : [children];

    var _onChange = function onChange(event, key, option) {
      input.onChange(option.props.value);
    };

    var list = radioList.map(function(option, key) {
      return React__default.createElement(
        "div",
        {
          className: "form-check",
          key: option.props.value
        },
        React__default.createElement("input", {
          type: "radio",
          name: "" + input.name,
          id: input.name + "_" + key,
          value: option.props.value,
          className: classnames("form-check-label"),
          onChange: function onChange(event) {
            return _onChange(event, key, option);
          },
          checked: String(input.value) === String(option.props.value)
        }),
        " ",
        React__default.createElement(
          "label",
          {
            htmlFor: input.name + "_" + key,
            className: classnames("form-check-label")
          },
          option.props.children
        )
      );
    });
    return React__default.createElement(
      "div",
      {
        className: classnames(
          "ffc-input",
          {
            "is-invalid": computedInvalid
          },
          formControl
        )
      },
      list
    );
  };

  Radio.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    children: propTypes.oneOfType([propTypes.object, propTypes.array])
      .isRequired,
    formControl: propTypes.string,
    computedInvalid: propTypes.bool.isRequired
  };
  Radio.defaultProps = {
    input: {},
    formControl: null
  };
  var Radio$1 = Context(Context$1(Radio));

  var Select = function Select(props) {
    var input = props.input,
      children = props.children,
      placeholder = props.placeholder,
      formControl = props.formControl,
      computedInvalid = props.computedInvalid;

    var value = input.value,
      rest = _objectWithoutPropertiesLoose(input, ["value"]);

    var options = Array.isArray(children) ? children : [children];
    var list = options.map(function(option, key) {
      return React__default.createElement(
        "option",
        {
          key: key,
          value: option.props.value,
          selected: String(input.value) === String(option.props.value)
        },
        option.props.children
      );
    });
    return React__default.createElement(
      "select",
      _extends(
        {
          placeholder: placeholder,
          className: classnames(
            "ffc-input",
            {
              "is-invalid": computedInvalid
            },
            formControl
          )
        },
        rest
      ),
      list
    );
  };

  Select.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    children: propTypes.oneOfType([propTypes.object, propTypes.array])
      .isRequired,
    placeholder: propTypes.string,
    formControl: propTypes.string,
    computedInvalid: propTypes.bool.isRequired
  };
  Select.defaultProps = {
    input: {},
    placeholder: null,
    formControl: null
  };
  var Select$1 = Context(Context$1(Select));

  var Text = function Text(props) {
    var input = props.input,
      placeholder = props.placeholder,
      formControl = props.formControl,
      computedInvalid = props.computedInvalid;
    return React__default.createElement(
      "input",
      _extends(
        {
          type: "text",
          placeholder: placeholder,
          className: classnames(
            "ffc-input",
            {
              "is-invalid": computedInvalid
            },
            formControl
          )
        },
        input
      )
    );
  };

  Text.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    placeholder: propTypes.string,
    formControl: propTypes.string,
    computedInvalid: propTypes.bool.isRequired
  };
  Text.defaultProps = {
    input: {},
    placeholder: null,
    formControl: null
  };
  var Text$1 = Context(Context$1(Text));

  var Textarea = function Textarea(props) {
    var input = props.input,
      placeholder = props.placeholder,
      formControl = props.formControl,
      computedInvalid = props.computedInvalid,
      rows = props.rows;

    var value = input.value,
      rest = _objectWithoutPropertiesLoose(input, ["value"]);

    return React__default.createElement(
      "textarea",
      _extends(
        {
          placeholder: placeholder,
          className: classnames(
            "ffc-input",
            {
              "is-invalid": computedInvalid
            },
            formControl
          ),
          rows: rows
        },
        rest
      )
    );
  };

  Textarea.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    placeholder: propTypes.string,
    formControl: propTypes.string,
    computedInvalid: propTypes.bool.isRequired,
    rows: propTypes.number
  };
  Textarea.defaultProps = {
    input: {},
    placeholder: null,
    formControl: null,
    rows: 10
  };
  var Textarea$1 = Context(Context$1(Textarea));

  var _global = createCommonjsModule(function(module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = (module.exports =
      typeof window != "undefined" && window.Math == Math
        ? window
        : typeof self != "undefined" && self.Math == Math
        ? self // eslint-disable-next-line no-new-func
        : Function("return this")());
    if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function(module) {
    var core = (module.exports = {
      version: "2.6.10"
    });
    if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _aFunction = function(it) {
    if (typeof it != "function") throw TypeError(it + " is not a function!");
    return it;
  };

  // optional / simple context binding

  var _ctx = function(fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };

      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function() /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var _isObject = function(it) {
    return typeof it === "object" ? it !== null : typeof it === "function";
  };

  var _anObject = function(it) {
    if (!_isObject(it)) throw TypeError(it + " is not an object!");
    return it;
  };

  var _fails = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function() {
    return (
      Object.defineProperty({}, "a", {
        get: function() {
          return 7;
        }
      }).a != 7
    );
  });

  var document$1 = _global.document; // typeof document.createElement is 'object' in old IE

  var is = _isObject(document$1) && _isObject(document$1.createElement);

  var _domCreate = function(it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine =
    !_descriptors &&
    !_fails(function() {
      return (
        Object.defineProperty(_domCreate("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7
      );
    });

  // 7.1.1 ToPrimitive(input [, PreferredType])
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var _toPrimitive$1 = function(it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (
      S &&
      typeof (fn = it.toString) == "function" &&
      !_isObject((val = fn.call(it)))
    )
      return val;
    if (
      typeof (fn = it.valueOf) == "function" &&
      !_isObject((val = fn.call(it)))
    )
      return val;
    if (
      !S &&
      typeof (fn = it.toString) == "function" &&
      !_isObject((val = fn.call(it)))
    )
      return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;
  var f = _descriptors
    ? Object.defineProperty
    : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive$1(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine)
          try {
            return dP(O, P, Attributes);
          } catch (e) {
            /* empty */
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError("Accessors not supported!");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };

  var _objectDp = {
    f: f
  };

  var _propertyDesc = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors
    ? function(object, key, value) {
        return _objectDp.f(object, key, _propertyDesc(1, value));
      }
    : function(object, key, value) {
        object[key] = value;
        return object;
      };

  var hasOwnProperty$2 = {}.hasOwnProperty;

  var _has = function(it, key) {
    return hasOwnProperty$2.call(it, key);
  };

  var PROTOTYPE = "prototype";

  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL
      ? _global
      : IS_STATIC
      ? _global[name]
      : (_global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has(exports, key)) continue; // export native or passed

      out = own ? target[key] : source[key]; // prevent global pollution for namespaces

      exports[key] =
        IS_GLOBAL && typeof target[key] != "function"
          ? source[key] // bind timers to global for call from export context
          : IS_BIND && own
          ? _ctx(out, _global) // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out
          ? (function(C) {
              var F = function(a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0:
                      return new C();

                    case 1:
                      return new C(a);

                    case 2:
                      return new C(a, b);
                  }

                  return new C(a, b, c);
                }

                return C.apply(this, arguments);
              };

              F[PROTOTYPE] = C[PROTOTYPE];
              return F; // make static versions for prototype methods
            })(out)
          : IS_PROTO && typeof out == "function"
          ? _ctx(Function.call, out)
          : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

        if (type & $export.R && expProto && !expProto[key])
          _hide(expProto, key, out);
      }
    }
  }; // type bitmap

  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  var toString$1 = {}.toString;

  var _cof = function(it) {
    return toString$1.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  // eslint-disable-next-line no-prototype-builtins

  var _iobject = Object("z").propertyIsEnumerable(0)
    ? Object
    : function(it) {
        return _cof(it) == "String" ? it.split("") : Object(it);
      };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings

  var _toIobject = function(it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;

  var _toInteger = function(it) {
    return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;

  var _toLength = function(it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  var _toAbsoluteIndex = function(index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes

  var _arrayIncludes = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        }
      else
        for (; length > index; index++)
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
      return !IS_INCLUDES && -1;
    };
  };

  var _shared = createCommonjsModule(function(module) {
    var SHARED = "__core-js_shared__";
    var store = _global[SHARED] || (_global[SHARED] = {});
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })("versions", []).push({
      version: _core.version,
      mode: "pure",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  });

  var id = 0;
  var px = Math.random();

  var _uid = function(key) {
    return "Symbol(".concat(
      key === undefined ? "" : key,
      ")_",
      (++id + px).toString(36)
    );
  };

  var shared = _shared("keys");

  var _sharedKey = function(key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);

  var IE_PROTO = _sharedKey("IE_PROTO");

  var _objectKeysInternal = function(object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key); // Don't enum bug & hidden keys

    while (names.length > i)
      if (_has(O, (key = names[i++]))) {
        ~arrayIndexOf(result, key) || result.push(key);
      }

    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
    ","
  );

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)

  var _objectKeys =
    Object.keys ||
    function keys(O) {
      return _objectKeysInternal(O, _enumBugKeys);
    };

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
    f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
    f: f$2
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function(it) {
    return Object(_defined(it));
  };

  var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

  var _objectAssign =
    !$assign ||
    _fails(function() {
      var A = {};
      var B = {}; // eslint-disable-next-line no-undef

      var S = Symbol();
      var K = "abcdefghijklmnopqrst";
      A[S] = 7;
      K.split("").forEach(function(k) {
        B[k] = k;
      });
      return (
        $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K
      );
    })
      ? function assign(target, source) {
          // eslint-disable-line no-unused-vars
          var T = _toObject(target);
          var aLen = arguments.length;
          var index = 1;
          var getSymbols = _objectGops.f;
          var isEnum = _objectPie.f;

          while (aLen > index) {
            var S = _iobject(arguments[index++]);
            var keys = getSymbols
              ? _objectKeys(S).concat(getSymbols(S))
              : _objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;

            while (length > j) {
              key = keys[j++];
              if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
            }
          }

          return T;
        }
      : $assign;

  // 19.1.3.1 Object.assign(target, source)

  _export(_export.S + _export.F, "Object", {
    assign: _objectAssign
  });

  var assign = _core.Object.assign;

  var assign$1 = assign;

  function _extends$1() {
    _extends$1 =
      assign$1 ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends$1.apply(this, arguments);
  }

  var _objectDps = _descriptors
    ? Object.defineProperties
    : function defineProperties(O, Properties) {
        _anObject(O);
        var keys = _objectKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;

        while (length > i) _objectDp.f(O, (P = keys[i++]), Properties[P]);

        return O;
      };

  var document$2 = _global.document;

  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

  var IE_PROTO$1 = _sharedKey("IE_PROTO");

  var Empty = function() {
    /* empty */
  };

  var PROTOTYPE$1 = "prototype"; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var createDict = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate("iframe");

    var i = _enumBugKeys.length;
    var lt = "<";
    var gt = ">";
    var iframeDocument;
    iframe.style.display = "none";

    _html.appendChild(iframe);

    iframe.src = "javascript:"; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(
      lt + "script" + gt + "document.F=Object" + lt + "/script" + gt
    );
    iframeDocument.close();
    createDict = iframeDocument.F;

    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];

    return createDict();
  };

  var _objectCreate =
    Object.create ||
    function create(O, Properties) {
      var result;

      if (O !== null) {
        Empty[PROTOTYPE$1] = _anObject(O);
        result = new Empty();
        Empty[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO$1] = O;
      } else result = createDict();

      return Properties === undefined ? result : _objectDps(result, Properties);
    };

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

  _export(_export.S, "Object", {
    create: _objectCreate
  });

  var $Object = _core.Object;

  var create = function create(P, D) {
    return $Object.create(P, D);
  };

  var create$1 = create;

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = create$1(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  // most Object methods by ES6 should accept primitives

  var _objectSap = function(KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(
      _export.S +
        _export.F *
          _fails(function() {
            fn(1);
          }),
      "Object",
      exp
    );
  };

  // 19.1.2.14 Object.keys(O)

  _objectSap("keys", function() {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  var keys = _core.Object.keys;

  var keys$1 = keys;

  function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null) return {};
    var target = {};

    var sourceKeys = keys$1(source);

    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var invariant = function(condition, format, a, b, c, d, e, f) {
    {
      if (format === undefined) {
        throw new Error("invariant requires an error message argument");
      }
    }

    if (!condition) {
      var error;

      if (format === undefined) {
        error = new Error(
          "Minified exception occurred; use the non-minified dev environment " +
            "for the full error message and additional helpful warnings."
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() {
            return args[argIndex++];
          })
        );
        error.name = "Invariant Violation";
      }

      error.framesToPop = 1; // we don't care about invariant's own frame

      throw error;
    }
  };

  var browser = invariant;

  var isEnum = _objectPie.f;

  var _objectToArray = function(isEntries) {
    return function(it) {
      var O = _toIobject(it);
      var keys = _objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!_descriptors || isEnum.call(O, key)) {
          result.push(isEntries ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  // https://github.com/tc39/proposal-object-values-entries

  var $entries = _objectToArray(true);

  _export(_export.S, "Object", {
    entries: function entries(it) {
      return $entries(it);
    }
  });

  var entries = _core.Object.entries;

  var entries$1 = entries;

  var Size = {
    LARGE: "large",
    SMALL: "small",
    XSMALL: "xsmall"
  };
  var SIZE_MAP = {
    large: "lg",
    medium: "md",
    small: "sm",
    xsmall: "xs",
    lg: "lg",
    md: "md",
    sm: "sm",
    xs: "xs"
  };

  function curry(fn) {
    return function() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      var last = args[args.length - 1];

      if (typeof last === "function") {
        return fn.apply(void 0, args);
      }

      return function(Component) {
        return fn.apply(void 0, args.concat([Component]));
      };
    };
  }

  function prefix(props, variant) {
    var bsClass = (props.bsClass || "").trim();
    !(bsClass != null)
      ? browser(false, "A `bsClass` prop is required for this component")
      : void 0;
    return bsClass + (variant ? "-" + variant : "");
  }
  var bsClass = curry(function(defaultClass, Component) {
    var propTypes$1 = Component.propTypes || (Component.propTypes = {});
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    propTypes$1.bsClass = propTypes.string;
    defaultProps.bsClass = defaultClass;
    return Component;
  });
  var bsSizes = curry(function(sizes, defaultSize, Component) {
    if (typeof defaultSize !== "string") {
      Component = defaultSize;
      defaultSize = undefined;
    }

    var existing = Component.SIZES || [];
    var propTypes$1 = Component.propTypes || {};
    sizes.forEach(function(size) {
      if (existing.indexOf(size) === -1) {
        existing.push(size);
      }
    });
    var values = [];
    existing.forEach(function(size) {
      var mappedSize = SIZE_MAP[size];

      if (mappedSize && mappedSize !== size) {
        values.push(mappedSize);
      }

      values.push(size);
    });
    var propType = propTypes.oneOf(values);
    propType._values = values; // expose the values on the propType function for documentation

    Component.SIZES = existing;
    Component.propTypes = _extends$1({}, propTypes$1, {
      bsSize: propType
    });

    if (defaultSize !== undefined) {
      if (!Component.defaultProps) {
        Component.defaultProps = {};
      }

      Component.defaultProps.bsSize = defaultSize;
    }

    return Component;
  });
  function getClassSet(props) {
    var _classes;

    var classes = ((_classes = {}), (_classes[prefix(props)] = true), _classes);

    if (props.bsSize) {
      var bsSize = SIZE_MAP[props.bsSize] || props.bsSize;
      classes[prefix(props, bsSize)] = true;
    }

    if (props.bsStyle) {
      classes[prefix(props, props.bsStyle)] = true;
    }

    return classes;
  }

  function getBsProps(props) {
    return {
      bsClass: props.bsClass,
      bsSize: props.bsSize,
      bsStyle: props.bsStyle,
      bsRole: props.bsRole
    };
  }

  function isBsProp(propName) {
    return (
      propName === "bsClass" ||
      propName === "bsSize" ||
      propName === "bsStyle" ||
      propName === "bsRole"
    );
  }

  function splitBsProps(props) {
    var elementProps = {};

    entries$1(props).forEach(function(_ref) {
      var propName = _ref[0],
        propValue = _ref[1];

      if (!isBsProp(propName)) {
        elementProps[propName] = propValue;
      }
    });

    return [getBsProps(props), elementProps];
  }
  function splitBsPropsAndOmit(props, omittedPropNames) {
    var isOmittedProp = {};
    omittedPropNames.forEach(function(propName) {
      isOmittedProp[propName] = true;
    });
    var elementProps = {};

    entries$1(props).forEach(function(_ref2) {
      var propName = _ref2[0],
        propValue = _ref2[1];

      if (!isBsProp(propName) && !isOmittedProp[propName]) {
        elementProps[propName] = propValue;
      }
    });

    return [getBsProps(props), elementProps];
  }

  // TODO: This module should be ElementChildren, and should use named exports.
  /**
   * Iterates through children that are typically specified as `props.children`,
   * but only maps over children that are "valid components".
   *
   * The mapFunction provided index will be normalised to the components mapped,
   * so an invalid component would not increase the index.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func.
   * @param {*} context Context for func.
   * @return {object} Object containing the ordered map of results.
   */

  function map(children, func, context) {
    var index = 0;
    return React__default.Children.map(children, function(child) {
      if (!React__default.isValidElement(child)) {
        return child;
      }

      return func.call(context, child, index++);
    });
  }
  /**
   * Iterates through children that are "valid components".
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child with the index reflecting the position relative to "valid components".
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func.
   * @param {*} context Context for context.
   */

  function forEach$1(children, func, context) {
    var index = 0;
    React__default.Children.forEach(children, function(child) {
      if (!React__default.isValidElement(child)) {
        return;
      }

      func.call(context, child, index++);
    });
  }
  /**
   * Count the number of "valid components" in the Children container.
   *
   * @param {?*} children Children tree container.
   * @returns {number}
   */

  function count(children) {
    var result = 0;
    React__default.Children.forEach(children, function(child) {
      if (!React__default.isValidElement(child)) {
        return;
      }

      ++result;
    });
    return result;
  }
  /**
   * Finds children that are typically specified as `props.children`,
   * but only iterates over children that are "valid components".
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child with the index reflecting the position relative to "valid components".
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func.
   * @param {*} context Context for func.
   * @returns {array} of children that meet the func return statement
   */

  function filter(children, func, context) {
    var index = 0;
    var result = [];
    React__default.Children.forEach(children, function(child) {
      if (!React__default.isValidElement(child)) {
        return;
      }

      if (func.call(context, child, index++)) {
        result.push(child);
      }
    });
    return result;
  }

  function find(children, func, context) {
    var index = 0;
    var result;
    React__default.Children.forEach(children, function(child) {
      if (result) {
        return;
      }

      if (!React__default.isValidElement(child)) {
        return;
      }

      if (func.call(context, child, index++)) {
        result = child;
      }
    });
    return result;
  }

  function every(children, func, context) {
    var index = 0;
    var result = true;
    React__default.Children.forEach(children, function(child) {
      if (!result) {
        return;
      }

      if (!React__default.isValidElement(child)) {
        return;
      }

      if (!func.call(context, child, index++)) {
        result = false;
      }
    });
    return result;
  }

  function some(children, func, context) {
    var index = 0;
    var result = false;
    React__default.Children.forEach(children, function(child) {
      if (result) {
        return;
      }

      if (!React__default.isValidElement(child)) {
        return;
      }

      if (func.call(context, child, index++)) {
        result = true;
      }
    });
    return result;
  }

  function toArray(children) {
    var result = [];
    React__default.Children.forEach(children, function(child) {
      if (!React__default.isValidElement(child)) {
        return;
      }

      result.push(child);
    });
    return result;
  }

  var ValidChildren = {
    map: map,
    forEach: forEach$1,
    count: count,
    find: find,
    filter: filter,
    every: every,
    some: some,
    toArray: toArray
  };

  var createChainableTypeChecker_1 = createCommonjsModule(function(
    module,
    exports
  ) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createChainableTypeChecker;
    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     */
    // Mostly taken from ReactPropTypes.

    function createChainableTypeChecker(validate) {
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var componentNameSafe = componentName || "<<anonymous>>";
        var propFullNameSafe = propFullName || propName;

        if (props[propName] == null) {
          if (isRequired) {
            return new Error(
              "Required " +
                location +
                " `" +
                propFullNameSafe +
                "` was not specified " +
                ("in `" + componentNameSafe + "`.")
            );
          }

          return null;
        }

        for (
          var _len = arguments.length,
            args = Array(_len > 6 ? _len - 6 : 0),
            _key = 6;
          _key < _len;
          _key++
        ) {
          args[_key - 6] = arguments[_key];
        }

        return validate.apply(
          undefined,
          [
            props,
            propName,
            componentNameSafe,
            location,
            propFullNameSafe
          ].concat(args)
        );
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }

    module.exports = exports["default"];
  });

  unwrapExports(createChainableTypeChecker_1);

  var elementType_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _react2 = _interopRequireDefault(React__default);

    var _createChainableTypeChecker2 = _interopRequireDefault(
      createChainableTypeChecker_1
    );

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj
          };
    }

    function elementType(
      props,
      propName,
      componentName,
      location,
      propFullName
    ) {
      var propValue = props[propName];

      if (_react2.default.isValidElement(propValue)) {
        return new Error(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type ReactElement " +
            ("supplied to `" +
              componentName +
              "`,expected an element type (a string ") +
            ", component class, or function component)."
        );
      }

      if (!(0, reactIs.isValidElementType)(propValue)) {
        return new Error(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of value `" +
            propValue +
            "` " +
            ("supplied to `" +
              componentName +
              "`, expected an element type (a string ") +
            ", component class, or function component)."
        );
      }

      return null;
    }

    exports.default = (0, _createChainableTypeChecker2.default)(elementType);
    module.exports = exports["default"];
  });

  var elementType = unwrapExports(elementType_1);

  var propTypes$1 = {
    /**
     * An icon name without "glyphicon-" prefix. See e.g. http://getbootstrap.com/components/#glyphicons
     */
    glyph: propTypes.string.isRequired
  };

  var Glyphicon =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose$1(Glyphicon, _React$Component);

      function Glyphicon() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = Glyphicon.prototype;

      _proto.render = function render() {
        var _extends2;

        var _this$props = this.props,
          glyph = _this$props.glyph,
          className = _this$props.className,
          props = _objectWithoutPropertiesLoose$2(_this$props, [
            "glyph",
            "className"
          ]);

        var _splitBsProps = splitBsProps(props),
          bsProps = _splitBsProps[0],
          elementProps = _splitBsProps[1];

        var classes = _extends$1(
          {},
          getClassSet(bsProps),
          ((_extends2 = {}),
          (_extends2[prefix(bsProps, glyph)] = true),
          _extends2)
        );

        return React__default.createElement(
          "span",
          _extends$1({}, elementProps, {
            className: classnames(className, classes)
          })
        );
      };

      return Glyphicon;
    })(React__default.Component);

  Glyphicon.propTypes = propTypes$1;
  var Glyphicon$1 = bsClass("glyphicon", Glyphicon);

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */
  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning = function() {};

  {
    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);

      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }

      if (format === undefined) {
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning " +
            "message argument"
        );
      }

      if (format.length < 10 || /^[s\W]*$/.test(format)) {
        throw new Error(
          "The warning format should be able to uniquely identify this " +
            "warning. Please, use a more descriptive format than: " +
            format
        );
      }

      if (!condition) {
        var argIndex = 0;
        var message =
          "Warning: " +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });

        if (typeof console !== "undefined") {
          console.error(message);
        }

        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      }
    };
  }

  var browser$1 = warning;

  var propTypes$2 = {
    /**
     * Uses `controlId` from `<FormGroup>` if not explicitly specified.
     */
    htmlFor: propTypes.string,
    srOnly: propTypes.bool
  };
  var defaultProps = {
    srOnly: false
  };
  var contextTypes = {
    $bs_formGroup: propTypes.object
  };

  var ControlLabel =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose$1(ControlLabel, _React$Component);

      function ControlLabel() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = ControlLabel.prototype;

      _proto.render = function render() {
        var formGroup = this.context.$bs_formGroup;
        var controlId = formGroup && formGroup.controlId;

        var _this$props = this.props,
          _this$props$htmlFor = _this$props.htmlFor,
          htmlFor =
            _this$props$htmlFor === void 0 ? controlId : _this$props$htmlFor,
          srOnly = _this$props.srOnly,
          className = _this$props.className,
          props = _objectWithoutPropertiesLoose$2(_this$props, [
            "htmlFor",
            "srOnly",
            "className"
          ]);

        var _splitBsProps = splitBsProps(props),
          bsProps = _splitBsProps[0],
          elementProps = _splitBsProps[1];

        browser$1(
          controlId == null || htmlFor === controlId,
          "`controlId` is ignored on `<ControlLabel>` when `htmlFor` is specified."
        );

        var classes = _extends$1({}, getClassSet(bsProps), {
          "sr-only": srOnly
        });

        return React__default.createElement(
          "label",
          _extends$1({}, elementProps, {
            htmlFor: htmlFor,
            className: classnames(className, classes)
          })
        );
      };

      return ControlLabel;
    })(React__default.Component);

  ControlLabel.propTypes = propTypes$2;
  ControlLabel.defaultProps = defaultProps;
  ControlLabel.contextTypes = contextTypes;
  var ControlLabel$1 = bsClass("control-label", ControlLabel);

  var defaultProps$1 = {
    bsRole: "feedback"
  };
  var contextTypes$1 = {
    $bs_formGroup: propTypes.object
  };

  var FormControlFeedback =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose$1(FormControlFeedback, _React$Component);

      function FormControlFeedback() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = FormControlFeedback.prototype;

      _proto.getGlyph = function getGlyph(validationState) {
        switch (validationState) {
          case "success":
            return "ok";

          case "warning":
            return "warning-sign";

          case "error":
            return "remove";

          default:
            return null;
        }
      };

      _proto.renderDefaultFeedback = function renderDefaultFeedback(
        formGroup,
        className,
        classes,
        elementProps
      ) {
        var glyph = this.getGlyph(formGroup && formGroup.validationState);

        if (!glyph) {
          return null;
        }

        return React__default.createElement(
          Glyphicon$1,
          _extends$1({}, elementProps, {
            glyph: glyph,
            className: classnames(className, classes)
          })
        );
      };

      _proto.render = function render() {
        var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          props = _objectWithoutPropertiesLoose$2(_this$props, [
            "className",
            "children"
          ]);

        var _splitBsProps = splitBsProps(props),
          bsProps = _splitBsProps[0],
          elementProps = _splitBsProps[1];

        var classes = getClassSet(bsProps);

        if (!children) {
          return this.renderDefaultFeedback(
            this.context.$bs_formGroup,
            className,
            classes,
            elementProps
          );
        }

        var child = React__default.Children.only(children);
        return React__default.cloneElement(
          child,
          _extends$1({}, elementProps, {
            className: classnames(child.props.className, className, classes)
          })
        );
      };

      return FormControlFeedback;
    })(React__default.Component);

  FormControlFeedback.defaultProps = defaultProps$1;
  FormControlFeedback.contextTypes = contextTypes$1;
  var FormControlFeedback$1 = bsClass(
    "form-control-feedback",
    FormControlFeedback
  );

  var propTypes$3 = {
    componentClass: elementType
  };
  var defaultProps$2 = {
    componentClass: "p"
  };

  var FormControlStatic =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose$1(FormControlStatic, _React$Component);

      function FormControlStatic() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = FormControlStatic.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
          Component = _this$props.componentClass,
          className = _this$props.className,
          props = _objectWithoutPropertiesLoose$2(_this$props, [
            "componentClass",
            "className"
          ]);

        var _splitBsProps = splitBsProps(props),
          bsProps = _splitBsProps[0],
          elementProps = _splitBsProps[1];

        var classes = getClassSet(bsProps);
        return React__default.createElement(
          Component,
          _extends$1({}, elementProps, {
            className: classnames(className, classes)
          })
        );
      };

      return FormControlStatic;
    })(React__default.Component);

  FormControlStatic.propTypes = propTypes$3;
  FormControlStatic.defaultProps = defaultProps$2;
  var FormControlStatic$1 = bsClass("form-control-static", FormControlStatic);

  var propTypes$4 = {
    componentClass: elementType,

    /**
     * Only relevant if `componentClass` is `'input'`.
     */
    type: propTypes.string,

    /**
     * Uses `controlId` from `<FormGroup>` if not explicitly specified.
     */
    id: propTypes.string,

    /**
     * Attaches a ref to the `<input>` element. Only functions can be used here.
     *
     * ```js
     * <FormControl inputRef={ref => { this.input = ref; }} />
     * ```
     */
    inputRef: propTypes.func
  };
  var defaultProps$3 = {
    componentClass: "input"
  };
  var contextTypes$2 = {
    $bs_formGroup: propTypes.object
  };

  var FormControl =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose$1(FormControl, _React$Component);

      function FormControl() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = FormControl.prototype;

      _proto.render = function render() {
        var formGroup = this.context.$bs_formGroup;
        var controlId = formGroup && formGroup.controlId;

        var _this$props = this.props,
          Component = _this$props.componentClass,
          type = _this$props.type,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? controlId : _this$props$id,
          inputRef = _this$props.inputRef,
          className = _this$props.className,
          bsSize = _this$props.bsSize,
          props = _objectWithoutPropertiesLoose$2(_this$props, [
            "componentClass",
            "type",
            "id",
            "inputRef",
            "className",
            "bsSize"
          ]);

        var _splitBsProps = splitBsProps(props),
          bsProps = _splitBsProps[0],
          elementProps = _splitBsProps[1];

        browser$1(
          controlId == null || id === controlId,
          "`controlId` is ignored on `<FormControl>` when `id` is specified."
        ); // input[type="file"] should not have .form-control.

        var classes;

        if (type !== "file") {
          classes = getClassSet(bsProps);
        } // If user provides a size, make sure to append it to classes as input-
        // e.g. if bsSize is small, it will append input-sm

        if (bsSize) {
          var size = SIZE_MAP[bsSize] || bsSize;
          classes[
            prefix(
              {
                bsClass: "input"
              },
              size
            )
          ] = true;
        }

        return React__default.createElement(
          Component,
          _extends$1({}, elementProps, {
            type: type,
            id: id,
            ref: inputRef,
            className: classnames(className, classes)
          })
        );
      };

      return FormControl;
    })(React__default.Component);

  FormControl.propTypes = propTypes$4;
  FormControl.defaultProps = defaultProps$3;
  FormControl.contextTypes = contextTypes$2;
  FormControl.Feedback = FormControlFeedback$1;
  FormControl.Static = FormControlStatic$1;
  var FormControl$1 = bsClass(
    "form-control",
    bsSizes([Size.SMALL, Size.LARGE], FormControl)
  );

  var propTypes$5 = {
    /**
     * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
     */
    controlId: propTypes.string,
    validationState: propTypes.oneOf(["success", "warning", "error", null])
  };
  var childContextTypes = {
    $bs_formGroup: propTypes.object.isRequired
  };

  var FormGroup =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose$1(FormGroup, _React$Component);

      function FormGroup() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = FormGroup.prototype;

      _proto.getChildContext = function getChildContext() {
        var _this$props = this.props,
          controlId = _this$props.controlId,
          validationState = _this$props.validationState;
        return {
          $bs_formGroup: {
            controlId: controlId,
            validationState: validationState
          }
        };
      };

      _proto.hasFeedback = function hasFeedback(children) {
        var _this = this;

        return ValidChildren.some(children, function(child) {
          return (
            child.props.bsRole === "feedback" ||
            (child.props.children && _this.hasFeedback(child.props.children))
          );
        });
      };

      _proto.render = function render() {
        var _this$props2 = this.props,
          validationState = _this$props2.validationState,
          className = _this$props2.className,
          children = _this$props2.children,
          props = _objectWithoutPropertiesLoose$2(_this$props2, [
            "validationState",
            "className",
            "children"
          ]);

        var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ["controlId"]),
          bsProps = _splitBsPropsAndOmit[0],
          elementProps = _splitBsPropsAndOmit[1];

        var classes = _extends$1({}, getClassSet(bsProps), {
          "has-feedback": this.hasFeedback(children)
        });

        if (validationState) {
          classes["has-" + validationState] = true;
        }

        return React__default.createElement(
          "div",
          _extends$1({}, elementProps, {
            className: classnames(className, classes)
          }),
          children
        );
      };

      return FormGroup;
    })(React__default.Component);

  FormGroup.propTypes = propTypes$5;
  FormGroup.childContextTypes = childContextTypes;
  var FormGroup$1 = bsClass(
    "form-group",
    bsSizes([Size.LARGE, Size.SMALL], FormGroup)
  );

  var HelpBlock =
    /*#__PURE__*/
    (function(_React$Component) {
      _inheritsLoose$1(HelpBlock, _React$Component);

      function HelpBlock() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = HelpBlock.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
          className = _this$props.className,
          props = _objectWithoutPropertiesLoose$2(_this$props, ["className"]);

        var _splitBsProps = splitBsProps(props),
          bsProps = _splitBsProps[0],
          elementProps = _splitBsProps[1];

        var classes = getClassSet(bsProps);
        return React__default.createElement(
          "span",
          _extends$1({}, elementProps, {
            className: classnames(className, classes)
          })
        );
      };

      return HelpBlock;
    })(React__default.Component);

  var HelpBlock$1 = bsClass("help-block", HelpBlock);

  function fieldGroup(Component) {
    var FieldGroup = function FieldGroup(props) {
      var label = props.label,
        help = props.help,
        disabled = props.disabled,
        checkCondition = props.context.checkCondition,
        _props$meta = props.meta,
        submitFailed = _props$meta.submitFailed,
        invalid = _props$meta.invalid,
        error = _props$meta.error;
      var computedInvalid = submitFailed && invalid;
      var isDisabled = disabled && checkCondition(disabled);
      return React__default.createElement(
        FormGroup$1,
        {
          validationState: computedInvalid ? "error" : null
        },
        label && React__default.createElement(ControlLabel$1, null, label),
        React__default.createElement(
          Component,
          _extends({}, props, {
            computedInvalid: computedInvalid,
            isDisabled: isDisabled
          })
        ),
        React__default.createElement(FormControl$1.Feedback, null),
        !computedInvalid &&
          help &&
          React__default.createElement(HelpBlock$1, null, help),
        computedInvalid &&
          error &&
          React__default.createElement(HelpBlock$1, null, error)
      );
    };

    FieldGroup.propTypes = {
      name: propTypes.string.isRequired,
      label: propTypes.string,
      help: propTypes.string,
      type: propTypes.string,
      disabled: propTypes.func,
      formGroup: propTypes.string,
      formLabel: propTypes.string,
      formError: propTypes.string,
      formText: propTypes.string,
      meta: propTypes.shape({
        submitFailed: propTypes.bool.isRequired,
        invalid: propTypes.bool.isRequired,
        error: propTypes.string
      }).isRequired,
      context: propTypes.shape({
        checkCondition: propTypes.func
      }).isRequired
    };
    FieldGroup.defaultProps = {
      label: null,
      text: null,
      type: null,
      formGroup: null,
      formLabel: null,
      formError: null,
      formText: null,
      disabled: null
    };
    return FieldGroup;
  }

  var Text$2 = function Text(props) {
    var input = props.input,
      type = props.type;
    return React__default.createElement(
      FormControl$1,
      _extends({}, input, {
        type: type
      })
    );
  };

  Text$2.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    placeholder: propTypes.string,
    label: propTypes.string,
    help: propTypes.string,
    computedInvalid: propTypes.bool.isRequired,
    type: propTypes.oneOf([
      "text",
      "email",
      "date",
      "datetime-local",
      "checkbox"
    ])
  };
  Text$2.defaultProps = {
    input: {},
    label: null,
    help: null,
    placeholder: null,
    type: "text"
  };
  var Text$3 = Context(fieldGroup(Text$2));

  var Password$2 = function Password(props) {
    var input = props.input;
    return React__default.createElement(
      FormControl$1,
      _extends({}, input, {
        type: "password"
      })
    );
  };

  Password$2.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    placeholder: propTypes.string,
    label: propTypes.string,
    help: propTypes.string,
    computedInvalid: propTypes.bool.isRequired
  };
  Password$2.defaultProps = {
    input: {},
    label: null,
    help: null,
    placeholder: null
  };
  var Password$3 = Context(fieldGroup(Password$2));

  var Checkbox$2 = function Checkbox(props) {
    var input = props.input;
    return React__default.createElement(
      FormControl$1,
      _extends({}, input, {
        type: "password"
      })
    );
  };

  Checkbox$2.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    placeholder: propTypes.string,
    label: propTypes.string,
    help: propTypes.string,
    computedInvalid: propTypes.bool.isRequired
  };
  Checkbox$2.defaultProps = {
    input: {},
    label: null,
    help: null,
    placeholder: null
  };
  var Checkbox$3 = Context(fieldGroup(Checkbox$2));

  exports.Checkbox = Checkbox$1;
  exports.CheckboxBs3 = Checkbox$3;
  exports.Condition = Condition$1;
  exports.DropZone = DropZone$1;
  exports.Form = Form;
  exports.PassWordBs3 = Password$3;
  exports.Password = Password$1;
  exports.Radio = Radio$1;
  exports.Select = Select$1;
  exports.Text = Text$1;
  exports.TextBs3 = Text$3;
  exports.Textarea = Textarea$1;

  Object.defineProperty(exports, "__esModule", { value: true });
});
