(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('react-dropzone')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', 'react-dropzone'], factory) :
  (factory((global.Miniverse = {}),global.React,global.classNames,global.Dropzone));
}(this, (function (exports,React,classNames,Dropzone) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
  Dropzone = Dropzone && Dropzone.hasOwnProperty('default') ? Dropzone['default'] : Dropzone;

  function _extends() {
    _extends = Object.assign || function (target) {
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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
  60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
  exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
  exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
  exports.isSuspense=function(a){return t(a)===p};
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

  var reactIs_development = createCommonjsModule(function (module, exports) {



  {
    (function() {

  Object.defineProperty(exports, '__esModule', { value: true });

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;

  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' ||
    // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
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

  var lowPriorityWarning = function () {};

  {
    var printWarning = function (format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.warn(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    lowPriorityWarning = function (condition, format) {
      if (format === undefined) {
        throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  var lowPriorityWarning$1 = lowPriorityWarning;

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
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
  }

  // AsyncMode is deprecated along with isAsyncMode
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

  var hasWarnedAboutDeprecatedIsAsyncMode = false;

  // AsyncMode should be deprecated
  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true;
        lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }
    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
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
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });
  var reactIs_1 = reactIs.isValidElementType;

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
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
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
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
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
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
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
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

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
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
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

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

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
      exact: createStrictShapeTypeChecker,
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
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
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
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
        printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
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
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
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

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
  });

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
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

  function _extends$2() {
    _extends$2 = Object.assign || function (target) {
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

    return _extends$2.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$2(source, excluded) {
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

  //      
  var toPath = function toPath(key) {
    if (key === null || key === undefined || !key.length) {
      return [];
    }

    if (typeof key !== 'string') {
      throw new Error('toPath() expects a string');
    }

    return key.split(/[.[\]]+/).filter(Boolean);
  };

  //      

  var getIn = function getIn(state, complexKey) {
    // Intentionally using iteration rather than recursion
    var path = toPath(complexKey);
    var current = state;

    for (var i = 0; i < path.length; i++) {
      var key = path[i];

      if (current === undefined || current === null || typeof current !== 'object' || Array.isArray(current) && isNaN(key)) {
        return undefined;
      }

      current = current[key];
    }

    return current;
  };

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  var setInRecursor = function setInRecursor(current, index, path, value, destroyArrays) {
    if (index >= path.length) {
      // end of recursion
      return value;
    }

    var key = path[index]; // determine type of key

    if (isNaN(key)) {
      var _extends2;

      // object set
      if (current === undefined || current === null) {
        var _ref;

        // recurse
        var _result2 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // delete or create an object


        return _result2 === undefined ? undefined : (_ref = {}, _ref[key] = _result2, _ref);
      }

      if (Array.isArray(current)) {
        throw new Error('Cannot set a non-numeric property on an array');
      } // current exists, so make a copy of all its values, and add/update the new one


      var _result = setInRecursor(current[key], index + 1, path, value, destroyArrays);

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
            _final = _objectWithoutPropertiesLoose$2(current, [key].map(_toPropertyKey));

        return _final;
      } // set result in key


      return _extends$2({}, current, (_extends2 = {}, _extends2[key] = _result, _extends2));
    } // array set


    var numericKey = Number(key);

    if (current === undefined || current === null) {
      // recurse
      var _result3 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // if nothing returned, delete it


      if (_result3 === undefined) {
        return undefined;
      } // create an array


      var _array = [];
      _array[numericKey] = _result3;
      return _array;
    }

    if (!Array.isArray(current)) {
      throw new Error('Cannot set a numeric property on an object');
    } // recurse


    var existingValue = current[numericKey];
    var result = setInRecursor(existingValue, index + 1, path, value, destroyArrays); // current exists, so make a copy of all its values, and add/update the new one

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

  var FORM_ERROR = 'FINAL_FORM/form-error';
  var ARRAY_ERROR = 'FINAL_FORM/array-error';

  //      
  /**
   * Converts internal field state to published field state
   */

  var publishFieldState = function publishFieldState(formState, field) {
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
        visited = field.visited;
    var value = getIn(values, name);
    var error = getIn(errors, name);

    if (error && error[ARRAY_ERROR]) {
      error = error[ARRAY_ERROR];
    }

    var submitError = submitErrors && getIn(submitErrors, name);
    var initial = initialValues && getIn(initialValues, name);
    var pristine = field.isEqual(initial, value);
    var dirtySinceLastSubmit = !!(lastSubmittedValues && !field.isEqual(getIn(lastSubmittedValues, name), value));
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
      visited: visited
    };
  };

  //      
  var fieldSubscriptionItems = ['active', 'data', 'dirty', 'dirtySinceLastSubmit', 'error', 'initial', 'invalid', 'length', 'modified', 'pristine', 'submitError', 'submitFailed', 'submitSucceeded', 'submitting', 'touched', 'valid', 'value', 'visited'];

  //      
  var shallowEqual = function shallowEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (typeof a !== 'object' || !a || typeof b !== 'object' || !b) {
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

  //      
  function subscriptionFilter (dest, src, previous, subscription, keys, shallowEqualKeys) {
    var different = false;
    keys.forEach(function (key) {
      if (subscription[key]) {
        dest[key] = src[key];

        if (!previous || (~shallowEqualKeys.indexOf(key) ? !shallowEqual(src[key], previous[key]) : src[key] !== previous[key])) {
          different = true;
        }
      }
    });
    return different;
  }

  //      
  var shallowEqualKeys = ['data'];
  /**
   * Filters items in a FieldState based on a FieldSubscription
   */

  var filterFieldState = function filterFieldState(state, previousState, subscription, force) {
    var result = {
      blur: state.blur,
      change: state.change,
      focus: state.focus,
      name: state.name
    };
    var different = subscriptionFilter(result, state, previousState, subscription, fieldSubscriptionItems, shallowEqualKeys) || !previousState;
    return different || force ? result : undefined;
  };

  //      
  var formSubscriptionItems = ['active', 'dirty', 'dirtyFields', 'dirtySinceLastSubmit', 'error', 'errors', 'hasSubmitErrors', 'hasValidationErrors', 'initialValues', 'invalid', 'modified', 'pristine', 'submitting', 'submitError', 'submitErrors', 'submitFailed', 'submitSucceeded', 'touched', 'valid', 'validating', 'values', 'visited'];

  //      
  var shallowEqualKeys$1 = ['touched', 'visited'];
  /**
   * Filters items in a FormState based on a FormSubscription
   */

  var filterFormState = function filterFormState(state, previousState, subscription, force) {
    var result = {};
    var different = subscriptionFilter(result, state, previousState, subscription, formSubscriptionItems, shallowEqualKeys$1) || !previousState;
    return different || force ? result : undefined;
  };

  //      

  var memoize = function memoize(fn) {
    var lastArgs;
    var lastResult;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (!lastArgs || args.length !== lastArgs.length || args.some(function (arg, index) {
        return !shallowEqual(lastArgs[index], arg);
      })) {
        lastArgs = args;
        lastResult = fn.apply(void 0, args);
      }

      return lastResult;
    };
  };

  var isPromise = (function (obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  });
  var version = '4.13.0';

  var tripleEquals = function tripleEquals(a, b) {
    return a === b;
  };

  var hasAnyError = function hasAnyError(errors) {
    return Object.keys(errors).some(function (key) {
      var value = errors[key];

      if (value && typeof value === 'object') {
        return hasAnyError(value);
      }

      return typeof value !== 'undefined';
    });
  };

  var convertToExternalFormState = function convertToExternalFormState(_ref) {
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
      hasSubmitErrors: !!(submitError || submitErrors && hasAnyError(submitErrors)),
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
  };

  function notifySubscriber(subscriber, subscription, state, lastState, filter, force) {
    if (force === void 0) {
      force = false;
    }

    var notification = filter(state, lastState, subscription, force);

    if (notification) {
      subscriber(notification);
    }
  }

  function notify(_ref2, state, lastState, filter) {
    var entries = _ref2.entries;
    Object.keys(entries).forEach(function (key) {
      var entry = entries[Number(key)];

      if (entry) {
        var subscription = entry.subscription,
            subscriber = entry.subscriber;
        notifySubscriber(subscriber, subscription, state, lastState, filter);
      }
    });
  }

  var createForm = function createForm(config) {
    if (!config) {
      throw new Error('No config specified');
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
      throw new Error('No onSubmit function specified');
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
        initialValues: initialValues && _extends$2({}, initialValues),
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        submitSucceeded: false,
        valid: true,
        validating: 0,
        values: initialValues ? _extends$2({}, initialValues) : {}
      },
      lastFormState: undefined
    };
    var inBatch = false;
    var validationPaused = false;
    var validationBlocked = false;
    var nextAsyncValidationKey = 0;
    var asyncValidationPromises = {};

    var clearAsyncValidationPromise = function clearAsyncValidationPromise(key) {
      return function (result) {
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

        state.fields = _extends$2({}, state.fields, (_extends2 = {}, _extends2[to] = _extends$2({}, state.fields[from], {
          name: to,
          lastFieldState: undefined
        }), _extends2));
        delete state.fields[from];
        state.fieldSubscribers = _extends$2({}, state.fieldSubscribers, (_extends3 = {}, _extends3[to] = state.fieldSubscribers[from], _extends3));
        delete state.fieldSubscribers[from];
        var value = getIn(state.formState.values, from);
        state.formState.values = setIn(state.formState.values, from, undefined) || {};
        state.formState.values = setIn(state.formState.values, to, value);
        delete state.lastFormState;
      }
    }; // bind state to mutators


    var getMutatorApi = function getMutatorApi(key) {
      return function () {
        // istanbul ignore next
        if (mutators) {
          // ^^ causes branch coverage warning, but needed to appease the Flow gods
          var mutatableState = {
            formState: state.formState,
            fields: state.fields,
            fieldSubscribers: state.fieldSubscribers,
            lastFormState: state.lastFormState
          };

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var returnValue = mutators[key](args, mutatableState, {
            changeValue: changeValue,
            getIn: getIn,
            renameField: renameField,
            setIn: setIn,
            shallowEqual: shallowEqual
          });
          state.formState = mutatableState.formState;
          state.fields = mutatableState.fields;
          state.fieldSubscribers = mutatableState.fieldSubscribers;
          state.lastFormState = mutatableState.lastFormState;
          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
          return returnValue;
        }
      };
    };

    var mutatorsApi = mutators ? Object.keys(mutators).reduce(function (result, key) {
      result[key] = getMutatorApi(key);
      return result;
    }, {}) : {};

    var runRecordLevelValidation = function runRecordLevelValidation(setErrors) {
      var promises = [];

      if (validate) {
        var errorsOrPromise = validate(_extends$2({}, state.formState.values)); // clone to avoid writing

        if (isPromise(errorsOrPromise)) {
          var asyncValidationPromiseKey = nextAsyncValidationKey++;
          var promise = errorsOrPromise.then(setErrors).then(clearAsyncValidationPromise(asyncValidationPromiseKey));
          promises.push(promise);
          asyncValidationPromises[asyncValidationPromiseKey] = promise;
        } else {
          setErrors(errorsOrPromise);
        }
      }

      return promises;
    };

    var getValidators = function getValidators(field) {
      return Object.keys(field.validators).reduce(function (result, index) {
        var validator = field.validators[Number(index)]();

        if (validator) {
          result.push(validator);
        }

        return result;
      }, []);
    };

    var runFieldLevelValidation = function runFieldLevelValidation(field, setError) {
      var promises = [];
      var validators = getValidators(field);

      if (validators.length) {
        var error;
        validators.forEach(function (validator) {
          var errorOrPromise = validator(getIn(state.formState.values, field.name), state.formState.values, validator.length === 3 ? publishFieldState(state.formState, state.fields[field.name]) : undefined);

          if (errorOrPromise && isPromise(errorOrPromise)) {
            var asyncValidationPromiseKey = nextAsyncValidationKey++;
            var promise = errorOrPromise.then(setError) // errors must be resolved, not rejected
            .then(clearAsyncValidationPromise(asyncValidationPromiseKey));
            promises.push(promise);
            asyncValidationPromises[asyncValidationPromiseKey] = promise;
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
        /* istanbul ignore next */

        if (callback) {
          callback();
        }

        return;
      }

      var fields = state.fields,
          formState = state.formState;
      var fieldKeys = Object.keys(fields);

      if (!validate && !fieldKeys.some(function (key) {
        return getValidators(fields[key]).length;
      })) {
        if (callback) {
          callback();
        }

        return; // no validation rules
      } // pare down field keys to actually validate


      var limitedFieldLevelValidation = false;

      if (fieldChanged) {
        var changedField = fields[fieldChanged];

        if (changedField) {
          var validateFields = changedField.validateFields;

          if (validateFields) {
            limitedFieldLevelValidation = true;
            fieldKeys = validateFields.length ? validateFields.concat(fieldChanged) : [fieldChanged];
          }
        }
      }

      var recordLevelErrors = {};
      var fieldLevelErrors = {};
      var promises = [].concat(runRecordLevelValidation(function (errors) {
        recordLevelErrors = errors || {};
      }), fieldKeys.reduce(function (result, name) {
        return result.concat(runFieldLevelValidation(fields[name], function (error) {
          fieldLevelErrors[name] = error;
        }));
      }, []));

      var processErrors = function processErrors() {
        var merged = _extends$2({}, limitedFieldLevelValidation ? formState.errors : {}, recordLevelErrors);

        var forEachError = function forEachError(fn) {
          fieldKeys.forEach(function (name) {
            if (fields[name]) {
              // make sure field is still registered
              // field-level errors take precedent over record-level errors
              var recordLevelError = getIn(recordLevelErrors, name);
              var errorFromParent = getIn(merged, name);
              var hasFieldLevelValidation = getValidators(fields[name]).length;
              var fieldLevelError = fieldLevelErrors[name];
              fn(name, hasFieldLevelValidation && fieldLevelError || validate && recordLevelError || (!recordLevelError && !limitedFieldLevelValidation ? errorFromParent : undefined));
            }
          });
        };

        forEachError(function (name, error) {
          merged = setIn(merged, name, error) || {};
        });
        forEachError(function (name, error) {
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


      processErrors();

      if (promises.length) {
        // sync errors have been set. notify listeners while we wait for others
        state.formState.validating++;

        if (callback) {
          callback();
        }

        var afterPromises = function afterPromises() {
          state.formState.validating--;
          processErrors();

          if (callback) {
            callback();
          }
        };

        Promise.all(promises).then(afterPromises, afterPromises);
      } else if (callback) {
        callback();
      }
    };

    var notifyFieldListeners = function notifyFieldListeners(force) {
      if (inBatch || validationPaused) {
        return;
      }

      var fields = state.fields,
          fieldSubscribers = state.fieldSubscribers,
          formState = state.formState;
      Object.keys(fields).forEach(function (name) {
        var field = fields[name];
        var fieldState = publishFieldState(formState, field);
        var lastFieldState = field.lastFieldState;

        if (!shallowEqual(fieldState, lastFieldState)) {
          // **************************************************************
          // Curious about why a field is getting notified? Uncomment this.
          // **************************************************************
          // const diffKeys = Object.keys(fieldState).filter(
          //   key => fieldState[key] !== (lastFieldState && lastFieldState[key])
          // )
          // console.debug(
          //   'notifying',
          //   name,
          //   '\nField State\n',
          //   diffKeys.reduce(
          //     (result, key) => ({ ...result, [key]: fieldState[key] }),
          //     {}
          //   ),
          //   '\nLast Field State\n',
          //   diffKeys.reduce(
          //     (result, key) => ({
          //       ...result,
          //       [key]: lastFieldState && lastFieldState[key]
          //     }),
          //     {}
          //   )
          // )
          field.lastFieldState = fieldState;
          notify(fieldSubscribers[name], fieldState, lastFieldState, filterFieldState);
        }
      });
    };

    var markAllFieldsTouched = function markAllFieldsTouched() {
      Object.keys(state.fields).forEach(function (key) {
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
      var fieldKeys = Object.keys(fields); // calculate dirty/pristine

      var foundDirty = false;
      var dirtyFields = fieldKeys.reduce(function (result, key) {
        var dirty = !fields[key].isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

        if (dirty) {
          foundDirty = true;
          result[key] = true;
        }

        return result;
      }, {});
      formState.pristine = !foundDirty;
      formState.dirtySinceLastSubmit = !!(formState.lastSubmittedValues && !fieldKeys.every(function (key) {
        // istanbul ignore next
        var nonNullLastSubmittedValues = formState.lastSubmittedValues || {}; // || {} is for flow, but causes branch coverage complaint

        return fields[key].isEqual(getIn(formState.values, key), getIn(nonNullLastSubmittedValues, key));
      }));
      formState.valid = !formState.error && !formState.submitError && !hasAnyError(formState.errors) && !(formState.submitErrors && hasAnyError(formState.submitErrors));
      var nextFormState = convertToExternalFormState(formState);

      var _fieldKeys$reduce = fieldKeys.reduce(function (result, key) {
        result.modified[key] = fields[key].modified;
        result.touched[key] = fields[key].touched;
        result.visited[key] = fields[key].visited;
        return result;
      }, {
        modified: {},
        touched: {},
        visited: {}
      }),
          modified = _fieldKeys$reduce.modified,
          touched = _fieldKeys$reduce.touched,
          visited = _fieldKeys$reduce.visited;

      nextFormState.dirtyFields = lastFormState && shallowEqual(lastFormState.dirtyFields, dirtyFields) ? lastFormState.dirtyFields : dirtyFields;
      nextFormState.modified = lastFormState && shallowEqual(lastFormState.modified, modified) ? lastFormState.modified : modified;
      nextFormState.touched = lastFormState && shallowEqual(lastFormState.touched, touched) ? lastFormState.touched : touched;
      nextFormState.visited = lastFormState && shallowEqual(lastFormState.visited, visited) ? lastFormState.visited : visited;
      return lastFormState && shallowEqual(lastFormState, nextFormState) ? lastFormState : nextFormState;
    };

    var callDebug = function callDebug() {
      return debug && "development" !== 'production' && debug(calculateNextFormState(), Object.keys(state.fields).reduce(function (result, key) {
        result[key] = state.fields[key];
        return result;
      }, {}));
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
            notify(state.subscribers, nextFormState, lastFormState, filterFormState);
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
      return Object.keys(state.fields).find(function (name) {
        return state.fields[name].beforeSubmit && state.fields[name].beforeSubmit() === false;
      });
    };

    var afterSubmit = function afterSubmit() {
      return Object.keys(state.fields).forEach(function (name) {
        return state.fields[name].afterSubmit && state.fields[name].afterSubmit();
      });
    }; // generate initial errors


    runValidation();
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
          fields[name] = _extends$2({}, previous, {
            active: false,
            touched: true
          });

          if (validateOnBlur) {
            runValidation(name, function () {
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
          changeValue(state, name, function () {
            return value;
          });
          var previous = fields[name];

          if (previous) {
            // only track modified for registered fields
            fields[name] = _extends$2({}, previous, {
              modified: true
            });
          }

          if (validateOnBlur) {
            notifyFieldListeners();
            notifyFormListeners();
          } else {
            runValidation(name, function () {
              notifyFieldListeners();
              notifyFormListeners();
            });
          }
        }
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
        var values = typeof data === 'function' ? data(formState.values) : data;

        if (!keepDirtyOnReinitialize) {
          formState.values = values;
        }

        Object.keys(fields).forEach(function (key) {
          var field = fields[key];
          field.modified = false;
          field.touched = false;
          field.visited = false;

          if (keepDirtyOnReinitialize) {
            var pristine = fields[key].isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

            if (pristine) {
              // only update pristine values
              formState.values = setIn(formState.values, key, getIn(values, key));
            }
          }
        });
        formState.initialValues = values;
        runValidation(undefined, function () {
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
      registerField: function registerField(name, subscriber, subscription, fieldConfig) {
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
          subscription: subscription
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
            data: {},
            focus: function focus() {
              return api.focus(name);
            },
            isEqual: fieldConfig && fieldConfig.isEqual || tripleEquals,
            lastFieldState: undefined,
            modified: false,
            name: name,
            touched: false,
            valid: true,
            validateFields: fieldConfig && fieldConfig.validateFields,
            validators: {},
            visited: false
          };
        }

        if (fieldConfig) {
          if (fieldConfig.getValidator) {
            state.fields[name].validators[index] = fieldConfig.getValidator;
          }

          if (fieldConfig.initialValue !== undefined) {
            state.formState.initialValues = setIn(state.formState.initialValues || {}, name, fieldConfig.initialValue);
            state.formState.values = setIn(state.formState.values, name, fieldConfig.initialValue);
          }

          if (fieldConfig.defaultValue !== undefined) {
            state.formState.values = setIn(state.formState.values, name, fieldConfig.defaultValue);
          }
        }

        var sentFirstNotification = false;

        var firstNotification = function firstNotification() {
          var fieldState = publishFieldState(state.formState, state.fields[name]);
          notifySubscriber(subscriber, subscription, fieldState, undefined, filterFieldState, true);
          state.fields[name].lastFieldState = fieldState;
          sentFirstNotification = true;
        };

        runValidation(undefined, function () {
          notifyFormListeners();

          if (!sentFirstNotification) {
            firstNotification();
          }

          notifyFieldListeners();
        });
        return function () {
          delete state.fields[name].validators[index];
          delete state.fieldSubscribers[name].entries[index];

          if (!Object.keys(state.fieldSubscribers[name].entries).length) {
            delete state.fieldSubscribers[name];
            delete state.fields[name];
            state.formState.errors = setIn(state.formState.errors, name, undefined) || {};

            if (destroyOnUnregister) {
              state.formState.values = setIn(state.formState.values, name, undefined, true) || {};
            }
          }

          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        };
      },
      reset: function reset(initialValues) {
        if (initialValues === void 0) {
          initialValues = state.formState.initialValues;
        }

        state.formState.submitFailed = false;
        state.formState.submitSucceeded = false;
        delete state.formState.submitError;
        delete state.formState.submitErrors;
        delete state.formState.lastSubmittedValues;
        api.initialize(initialValues || {});
      },
      resumeValidation: function resumeValidation() {
        validationPaused = false;

        if (validationBlocked) {
          // validation was attempted while it was paused, so run it now
          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        }

        validationBlocked = false;
      },
      setConfig: function setConfig(name, value) {
        switch (name) {
          case 'debug':
            debug = value;
            break;

          case 'destroyOnUnregister':
            destroyOnUnregister = value;
            break;

          case 'initialValues':
            api.initialize(value);
            break;

          case 'keepDirtyOnReinitialize':
            keepDirtyOnReinitialize = value;
            break;

          case 'mutators':
            mutators = value;

            if (value) {
              Object.keys(mutatorsApi).forEach(function (key) {
                if (!(key in value)) {
                  delete mutatorsApi[key];
                }
              });
              Object.keys(value).forEach(function (key) {
                mutatorsApi[key] = getMutatorApi(key);
              });
            } else {
              Object.keys(mutatorsApi).forEach(function (key) {
                delete mutatorsApi[key];
              });
            }

            break;

          case 'onSubmit':
            onSubmit = value;
            break;

          case 'validate':
            validate = value;
            runValidation(undefined, function () {
              notifyFieldListeners();
              notifyFormListeners();
            });
            break;

          case 'validateOnBlur':
            validateOnBlur = value;
            break;

          default:
            throw new Error('Unrecognised option ' + name);
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
          Promise.all(asyncValidationPromisesKeys.reduce(function (result, key) {
            result.push(asyncValidationPromises[Number(key)]);
            return result;
          }, [])).then(api.submit, api.submit);
          return;
        }

        var fieldBlockingSubmit = beforeSubmit();

        if (fieldBlockingSubmit) {
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
            delete formState.submitErrors;
            delete formState.submitError;
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

        formState.submitting = true;
        formState.submitFailed = false;
        formState.submitSucceeded = false;
        formState.lastSubmittedValues = _extends$2({}, formState.values); // onSubmit is either sync, callback or async with a Promise

        var result = onSubmit(formState.values, api, complete);

        if (!completeCalled) {
          if (result && isPromise(result)) {
            // onSubmit is async with a Promise
            notifyFormListeners(); // let everyone know we are submitting

            notifyFieldListeners(); // notify fields also

            return result.then(complete, function (error) {
              complete();
              throw error;
            });
          } else if (onSubmit.length >= 3) {
            // must be async, so we should return a Promise
            notifyFormListeners(); // let everyone know we are submitting

            notifyFieldListeners(); // notify fields also

            return new Promise(function (resolve) {
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
          throw new Error('No callback given.');
        }

        if (!subscription) {
          throw new Error('No subscription provided. What values do you want to listen to?');
        }

        var memoized = memoize(subscriber);
        var subscribers = state.subscribers,
            lastFormState = state.lastFormState;
        var index = subscribers.index++;
        subscribers.entries[index] = {
          subscriber: memoized,
          subscription: subscription
        };
        var nextFormState = calculateNextFormState();

        if (nextFormState !== lastFormState) {
          state.lastFormState = nextFormState;
        }

        notifySubscriber(memoized, subscription, nextFormState, nextFormState, filterFormState, true);
        return function () {
          delete subscribers.entries[index];
        };
      }
    };
    return api;
  };

  // shared logic between components that use either render prop,
  // children render function, or component prop
  function renderComponent(props, name) {
    var render = props.render,
        children = props.children,
        component = props.component,
        rest = _objectWithoutPropertiesLoose$1(props, ["render", "children", "component"]);

    if (component) {
      return React.createElement(component, _extends$1({}, rest, {
        children: children,
        render: render
      }));
    }

    if (render) {
      return render(children === undefined ? rest : _extends$1({}, rest, {
        children: children
      })); // inject children back in
    }

    if (typeof children !== 'function') {
      throw new Error("Must specify either a render prop, a render function as children, or a component prop to " + name);
    }

    return children(rest);
  }

  var isReactNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';

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

  var getValue = function getValue(event, currentValue, valueProp, isReactNative) {
    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
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
      case 'checkbox':
        if (valueProp !== undefined) {
          // we are maintaining an array, not just a boolean
          if (checked) {
            // add value to current array value
            return Array.isArray(currentValue) ? currentValue.concat(valueProp) : [valueProp];
          } else {
            // remove value from current array value
            if (!Array.isArray(currentValue)) {
              return currentValue;
            }

            var index = currentValue.indexOf(valueProp);

            if (index < 0) {
              return currentValue;
            } else {
              return currentValue.slice(0, index).concat(currentValue.slice(index + 1));
            }
          }
        } else {
          // it's just a boolean
          return !!checked;
        }

      case 'select-multiple':
        return getSelectedValues(event.target.options);

      default:
        return value;
    }
  };

  var ReactFinalFormContext = React.createContext();

  var useForm = function useForm(componentName) {
    var form = React.useContext(ReactFinalFormContext);

    if (!form) {
      throw new Error((componentName || 'useForm') + " must be used inside of a <Form> component");
    }

    return form;
  };

  var all = fieldSubscriptionItems.reduce(function (result, key) {
    result[key] = true;
    return result;
  }, {});

  var defaultFormat = function defaultFormat(value, name) {
    return value === undefined ? '' : value;
  };

  var defaultParse = function defaultParse(value, name) {
    return value === '' ? undefined : value;
  };

  var useField = function useField(name, _temp) {
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
        subscription = _ref$subscription === void 0 ? all : _ref$subscription,
        type = _ref.type,
        validate = _ref.validate,
        validateFields = _ref.validateFields,
        _value = _ref.value;

    var form = useForm('useField'); // keep ref to most recent copy of validate function

    var validateRef = React.useRef(validate);
    React.useEffect(function () {
      validateRef.current = validate;
    });
    var beforeSubmitRef = React.useRef();

    var register = function register(callback) {
      return form.registerField(name, callback, subscription, {
        afterSubmit: afterSubmit,
        beforeSubmit: function beforeSubmit() {
          return beforeSubmitRef.current && beforeSubmitRef.current();
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

    var _React$useState = React.useState(function () {
      var initialState = {};
      register(function (state) {
        initialState = state;
      })();
      return initialState;
    }),
        state = _React$useState[0],
        setState = _React$useState[1];

    beforeSubmitRef.current = function () {
      if (formatOnBlur) {
        var formatted = format(state.value, state.name);

        if (formatted !== state.value) {
          state.change(formatted);
        }
      }

      return beforeSubmit && beforeSubmit();
    };

    React.useEffect(function () {
      return register(function (state) {
        if (firstRender.current) {
          firstRender.current = false;
        } else {
          setState(state);
        }
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [name, defaultValue, // If we want to allow inline fat-arrow field-level validation functions, we
    // cannot reregister field every time validate function !==.
    // validate,
    initialValue, isEqual, validateFields]);
    var handlers = {
      onBlur: React.useCallback(function (event) {
        state.blur();

        if (formatOnBlur) {
          state.change(format(state.value, state.name));
        }
      }, // eslint-disable-next-line react-hooks/exhaustive-deps
      [state.name, state.value, format, formatOnBlur]),
      onChange: React.useCallback(function (event) {
        // istanbul ignore next
        if (event && event.target) {
          var targetType = event.target.type;
          var unknown = ~['checkbox', 'radio', 'select-multiple'].indexOf(targetType) && !type;

          var _value2 = targetType === 'select-multiple' ? state.value : _value;

          if (unknown) {
            console.error("You must pass `type=\"" + (targetType === 'select-multiple' ? 'select' : targetType) + "\"` prop to your Field(" + name + ") component.\n" + ("Without it we don't know how to unpack your `value` prop - " + (Array.isArray(_value2) ? "[" + _value2 + "]" : "\"" + _value2 + "\"") + "."));
          }
        }

        var value = event && event.target ? getValue(event, state.value, _value, isReactNative) : event;
        state.change(parse(value, name));
      }, // eslint-disable-next-line react-hooks/exhaustive-deps
      [_value, name, parse, state.change, state.value, type]),
      onFocus: React.useCallback(function (event) {
        state.focus(); // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    };

    var blur = state.blur,
        change = state.change,
        focus = state.focus,
        value = state.value,
        ignoreName = state.name,
        otherState = _objectWithoutPropertiesLoose$1(state, ["blur", "change", "focus", "value", "name"]);

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
      visited: otherState.visited
    };

    if (formatOnBlur) {
      if (component === 'input') {
        value = defaultFormat(value, name);
      }
    } else {
      value = format(value, name);
    }

    if (value === null && !allowNull) {
      value = '';
    }

    var input = _extends$1({
      name: name,
      value: value,
      type: type
    }, handlers);

    if (type === 'checkbox') {
      if (_value === undefined) {
        input.checked = !!value;
      } else {
        input.checked = !!(Array.isArray(value) && ~value.indexOf(_value));
        input.value = _value;
      }
    } else if (type === 'radio') {
      input.checked = value === _value;
      input.value = _value;
    } else if (component === 'select' && multiple) {
      input.value = input.value || [];
      input.multiple = true;
    }

    var renderProps = {
      input: input,
      meta: meta // assign to force Flow check

    };
    return renderProps;
  };

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
        rest = _objectWithoutPropertiesLoose$1(_ref, ["afterSubmit", "allowNull", "beforeSubmit", "children", "component", "defaultValue", "format", "formatOnBlur", "initialValue", "isEqual", "multiple", "name", "parse", "subscription", "type", "validate", "validateFields", "value"]);

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

    if (typeof children === 'function') {
      return children(_extends$1({}, field, rest));
    }

    if (typeof component === 'string') {
      // ignore meta, combine input with any other props
      return React.createElement(component, _extends$1({}, field.input, {
        children: children
      }, rest));
    }

    return renderComponent(_extends$1({}, field, {
      children: children,
      component: component
    }, rest), "Field(" + name + ")");
  };

  function useWhenValueChanges(value, callback, isEqual) {
    if (isEqual === void 0) {
      isEqual = function isEqual(a, b) {
        return a === b;
      };
    }

    var previous = React__default.useRef(value);
    React__default.useEffect(function () {
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

    if (typeof a !== 'object' || !a || typeof b !== 'object' || !b) {
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
    return !!(candidate && typeof candidate.stopPropagation === 'function');
  };

  var version$1 = '5.1.0';
  var versions = {
    'final-form': version,
    'react-final-form': version$1
  };
  var all$1 = formSubscriptionItems.reduce(function (result, key) {
    result[key] = true;
    return result;
  }, {});

  var ReactFinalForm = function ReactFinalForm(_ref) {
    var debug = _ref.debug,
        decorators = _ref.decorators,
        destroyOnUnregister = _ref.destroyOnUnregister,
        initialValues = _ref.initialValues,
        initialValuesEqual = _ref.initialValuesEqual,
        keepDirtyOnReinitialize = _ref.keepDirtyOnReinitialize,
        mutators = _ref.mutators,
        onSubmit = _ref.onSubmit,
        _ref$subscription = _ref.subscription,
        subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription,
        validate = _ref.validate,
        validateOnBlur = _ref.validateOnBlur,
        rest = _objectWithoutPropertiesLoose$1(_ref, ["debug", "decorators", "destroyOnUnregister", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "onSubmit", "subscription", "validate", "validateOnBlur"]);

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
    var form = useConstant(function () {
      var f = createForm(config);
      f.pauseValidation();
      return f;
    }); // synchronously register and unregister to query form state for our subscription on first render

    var _React$useState = React.useState(function () {
      var initialState = {};
      form.subscribe(function (state) {
        initialState = state;
      }, subscription)();
      return initialState;
    }),
        state = _React$useState[0],
        setState = _React$useState[1]; // save a copy of state that can break through the closure
    // on the shallowEqual() line below.


    var stateRef = React.useRef(state);
    stateRef.current = state;
    React.useEffect(function () {
      // We have rendered, so all fields are no registered, so we can unpause validation
      form.isValidationPaused() && form.resumeValidation();
      var unsubscriptions = [form.subscribe(function (s) {
        if (!shallowEqual$1(s, stateRef.current)) {
          setState(s);
        }
      }, subscription)].concat(decorators ? decorators.map(function (decorator) {
        return (// this noop ternary is to appease the flow gods
          // istanbul ignore next
          decorator(form)
        );
      }) : []);
      return function () {
        unsubscriptions.forEach(function (unsubscribe) {
          return unsubscribe();
        });
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [decorators]); // warn about decorator changes
    // istanbul ignore next

    {
      // You're never supposed to use hooks inside a conditional, but in this
      // case we can be certain that you're not going to be changing your
      // NODE_ENV between renders, so this is safe.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useWhenValueChanges(decorators, function () {
        console.error('Form decorators should not change from one render to the next as new values will be ignored');
      }, shallowEqual$1);
    } // allow updatable config


    useWhenValueChanges(debug, function () {
      form.setConfig('debug', debug);
    });
    useWhenValueChanges(destroyOnUnregister, function () {
      form.setConfig('destroyOnUnregister', destroyOnUnregister);
    });
    useWhenValueChanges(initialValues, function () {
      form.setConfig('initialValues', initialValues);
    }, initialValuesEqual || shallowEqual$1);
    useWhenValueChanges(keepDirtyOnReinitialize, function () {
      form.setConfig('keepDirtyOnReinitialize', keepDirtyOnReinitialize);
    });
    useWhenValueChanges(mutators, function () {
      form.setConfig('mutators', mutators);
    });
    useWhenValueChanges(onSubmit, function () {
      form.setConfig('onSubmit', onSubmit);
    });
    useWhenValueChanges(validate, function () {
      form.setConfig('validate', validate);
    });
    useWhenValueChanges(validateOnBlur, function () {
      form.setConfig('validateOnBlur', validateOnBlur);
    });

    var handleSubmit = function handleSubmit(event) {
      if (event) {
        // sometimes not true, e.g. React Native
        if (typeof event.preventDefault === 'function') {
          event.preventDefault();
        }

        if (typeof event.stopPropagation === 'function') {
          // prevent any outer forms from receiving the event too
          event.stopPropagation();
        }
      }

      return form.submit();
    };

    var renderProps = _extends$1({}, state, {
      form: _extends$1({}, form, {
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

    return React.createElement(ReactFinalFormContext.Provider, {
      value: form
    }, renderComponent(_extends$1({}, rest, renderProps, {
      __versions: versions
    }), 'ReactFinalForm'));
  };

  var useFormState = function useFormState(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        onChange = _ref.onChange,
        _ref$subscription = _ref.subscription,
        subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription;

    var form = useForm('useFormState');
    var firstRender = React.useRef(true); // synchronously register and unregister to query field state for our subscription on first render

    var _React$useState = React.useState(function () {
      var initialState = {};
      form.subscribe(function (state) {
        initialState = state;
      }, subscription)();

      if (onChange) {
        onChange(initialState);
      }

      return initialState;
    }),
        state = _React$useState[0],
        setState = _React$useState[1];

    React.useEffect(function () {
      return form.subscribe(function (newState) {
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
    []);
    return state;
  };

  var FormSpy = function FormSpy(_ref) {
    var onChange = _ref.onChange,
        subscription = _ref.subscription,
        rest = _objectWithoutPropertiesLoose$1(_ref, ["onChange", "subscription"]);

    var reactFinalForm = React.useContext(ReactFinalFormContext);

    if (!reactFinalForm) {
      throw new Error('FormSpy must be used inside of a ReactFinalForm component');
    }

    var state = useFormState({
      onChange: onChange,
      subscription: subscription
    });

    if (onChange) {
      return null;
    }

    var renderProps = {
      form: _extends$1({}, reactFinalForm, {
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
    return renderComponent(_extends$1({}, rest, state, renderProps), 'FormSpy');
  };

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

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
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    {
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
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

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
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
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
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

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
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  var AppContext = React.createContext({});

  var ContextWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ContextWrapper, _React$Component);

    function ContextWrapper(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      _this.checkCondition = _this.checkCondition.bind(_assertThisInitialized(_this));
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
        return React__default.createElement(AppContext.Provider, {
          value: {
            checkCondition: this.checkCondition,
            isStatic: this.props.static,
            // eslint-disable-line react/destructuring-assignment
            debug: debug,
            status: this.getStatus()
          }
        }, children);
      }

      return React__default.createElement(AppContext.Provider, {
        value: {
          checkCondition: this.checkCondition,
          isStatic: this.props.static,
          // eslint-disable-line react/destructuring-assignment
          debug: debug,
          status: this.getStatus()
        }
      }, children, listen && isFunction_1(listen) && React__default.createElement(FormSpy, {
        subscription: {
          values: true
        },
        onChange: function onChange(props) {
          listen(props.values);
        }
      }));
    };

    return ContextWrapper;
  }(React__default.Component);
  /* eslint react/require-default-props: 0 */


  ContextWrapper.propTypes = {
    children: propTypes.oneOfType([propTypes.array, propTypes.object]),
    'static': propTypes.bool,
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
    'static': false,
    // eslint-disable-line quote-props
    debug: false
  };

  var Form$$1 = function Form$$1(props) {
    var children = props.children,
        className = props.className,
        formProps = _objectWithoutPropertiesLoose(props, ["children", "className"]);

    return React__default.createElement(ReactFinalForm, _extends({}, formProps, {
      render: function render(_ref) {
        var handleSubmit = _ref.handleSubmit,
            rest = _objectWithoutPropertiesLoose(_ref, ["handleSubmit"]);

        return React__default.createElement(ContextWrapper, rest, React__default.createElement("form", {
          onSubmit: handleSubmit,
          className: className
        }, children));
      }
    }));
  };

  Form$$1.propTypes = {
    className: propTypes.string,
    validate: propTypes.func,
    onSubmit: propTypes.func.isRequired,
    children: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired
  };
  Form$$1.defaultProps = {
    className: '',
    validate: function validate() {}
  };

  function Context(Component) {
    var TmpClass = function TmpClass(props) {
      return React__default.createElement(AppContext.Consumer, null, function (context) {
        return React__default.createElement(Field, {
          name: props.name,
          render: function render(_ref) {
            var input = _ref.input,
                meta = _ref.meta;
            return React__default.createElement(Component, _extends({
              input: input,
              meta: meta,
              context: context
            }, props));
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
      var showText = !computedInvalid && text && React__default.createElement("div", {
        className: classNames('ffc-help', formText)
      }, text);
      var showError = computedInvalid && error && React__default.createElement("div", {
        className: classNames('ffc-erro', formError)
      }, error);
      return React__default.createElement("div", {
        className: classNames('ffc-field', {
          'text-danger': computedInvalid
        }, formGroup)
      }, label && React__default.createElement("label", {
        htmlFor: name,
        className: classNames('ffc-label', formLabel)
      }, label), React__default.createElement(Component, _extends({}, props, {
        computedInvalid: computedInvalid,
        isDisabled: isDisabled
      })), showText, showError);
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
        var newValue = (input.value instanceof Array ? input.value : [input.value]).filter(Boolean);

        if (event.target.checked) {
          newValue.push(option.props.value);
        } else {
          newValue.splice(newValue.indexOf(option.props.value), 1);
        }

        return input.onChange(newValue);
      }

      return input.onChange(event.target.checked ? option.props.value : false);
    };

    var list = radioList.map(function (option, key) {
      var name = multiple ? input.name + "[" + key + "]" : input.name;
      var value = (Array.isArray(input.value) ? input.value : [input.value]).filter(function (val) {
        return String(val);
      });
      var checked = value.indexOf(option.props.value) !== -1;
      return React__default.createElement("div", {
        className: "form-check",
        key: option.props.value
      }, React__default.createElement("input", {
        type: "checkbox",
        name: name,
        disabled: isDisabled,
        id: input.name + "_" + key,
        value: option.props.value,
        className: classNames('form-check-label'),
        checked: checked,
        onChange: function onChange(event) {
          return _onChange(event, key, option);
        }
      }), ' ', React__default.createElement("label", {
        htmlFor: input.name + "_" + key,
        className: classNames('form-check-label')
      }, option.props.children));
    });
    return React__default.createElement("div", {
      className: classNames('ffc-input', {
        'is-invalid': computedInvalid
      }, formControl)
    }, list);
  };

  Checkbox.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    children: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
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
    children: propTypes.oneOfType([propTypes.array, propTypes.object]).isRequired,
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
  var Condition$1 = (function (props) {
    return React__default.createElement(AppContext.Consumer, null, function (context) {
      return React__default.createElement(Condition, _extends({
        context: context
      }, props));
    });
  });

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

  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  var isBuffer_1 = function (obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
  };

  function isBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
  }

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
    return toString.call(val) === '[object Array]';
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }

  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
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
    return typeof val === 'string';
  }

  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }

  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }

  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject$1(val) {
    return val !== null && typeof val === 'object';
  }

  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }

  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }

  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }

  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction$1(val) {
    return toString.call(val) === '[object Function]';
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
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
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
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
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
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
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
  function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
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
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
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
    isBuffer: isBuffer_1,
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
    extend: extend,
    trim: trim
  };

  var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
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
  var enhanceError = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
    error.request = request;
    error.response = response;
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
  var createError = function createError(message, config, code, request, response) {
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
    // Note: status is not exposed by XDomainRequest
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };

  function encode(val) {
    return encodeURIComponent(val).
      replace(/%40/gi, '@').
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
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
        if (val === null || typeof val === 'undefined') {
          return;
        }

        if (utils.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }

        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });

      serializedParams = parts.join('&');
    }

    if (serializedParams) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };

  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
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

    if (!headers) { return parsed; }

    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));

      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });

    return parsed;
  };

  var isURLSameOrigin = (
    utils.isStandardBrowserEnv() ?

    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
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
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                    urlParsingNode.pathname :
                    '/' + urlParsingNode.pathname
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
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
      };
    })() :

    // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
  );

  // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function E() {
    this.message = 'String contains an invalid character';
  }
  E.prototype = new Error;
  E.prototype.code = 5;
  E.prototype.name = 'InvalidCharacterError';

  function btoa(input) {
    var str = String(input);
    var output = '';
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars;
      // if the next str index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      str.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = str.charCodeAt(idx += 3 / 4);
      if (charCode > 0xFF) {
        throw new E();
      }
      block = block << 8 | charCode;
    }
    return output;
  }

  var btoa_1 = btoa;

  var cookies = (
    utils.isStandardBrowserEnv() ?

    // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

    // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
  );

  var btoa$1 = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || btoa_1;

  var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;

      if (utils.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }

      var request = new XMLHttpRequest();
      var loadEvent = 'onreadystatechange';
      var xDomain = false;

      // For IE 8/9 CORS support
      // Only supports POST and GET calls and doesn't returns the response headers.
      // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
      if (typeof window !== 'undefined' &&
          window.XDomainRequest && !('withCredentials' in request) &&
          !isURLSameOrigin(config.url)) {
        request = new window.XDomainRequest();
        loadEvent = 'onload';
        xDomain = true;
        request.onprogress = function handleProgress() {};
        request.ontimeout = function handleTimeout() {};
      }

      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        requestHeaders.Authorization = 'Basic ' + btoa$1(username + ':' + password);
      }

      request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

      // Set the request timeout in MS
      request.timeout = config.timeout;

      // Listen for ready state
      request[loadEvent] = function handleLoad() {
        if (!request || (request.readyState !== 4 && !xDomain)) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }

        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
          status: request.status === 1223 ? 204 : request.status,
          statusText: request.status === 1223 ? 'No Content' : request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };

        settle(resolve, reject, response);

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config, null, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
          request));

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        var cookies$$1 = cookies;

        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
            cookies$$1.read(config.xsrfCookieName) :
            undefined;

        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }

      // Add withCredentials to request if needed
      if (config.withCredentials) {
        request.withCredentials = true;
      }

      // Add responseType to request if needed
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      }

      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }

      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }

      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }

          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }

      if (requestData === undefined) {
        requestData = null;
      }

      // Send the request
      request.send(requestData);
    });
  };

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = xhr;
    } else if (typeof process !== 'undefined') {
      // For node use HTTP adapter
      adapter = xhr;
    }
    return adapter;
  }

  var defaults = {
    adapter: getDefaultAdapter(),

    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Content-Type');
      if (utils.isFormData(data) ||
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
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }
      return data;
    }],

    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) { /* Ignore */ }
      }
      return data;
    }],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    maxContentLength: -1,

    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };

  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };

  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });

  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });

  var defaults_1 = defaults;

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
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
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
    throwIfCancellationRequested(config);

    // Support baseURL config
    if (config.baseURL && !isAbsoluteURL(config.url)) {
      config.url = combineURLs(config.baseURL, config.url);
    }

    // Ensure headers exist
    config.headers = config.headers || {};

    // Transform request data
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );

    // Flatten headers
    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers || {}
    );

    utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );

    var adapter = config.adapter || defaults_1.adapter;

    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData(
        response.data,
        response.headers,
        config.transformResponse
      );

      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }

      return Promise.reject(reason);
    });
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
    if (typeof config === 'string') {
      config = utils.merge({
        url: arguments[0]
      }, arguments[1]);
    }

    config = utils.merge(defaults_1, {method: 'get'}, this.defaults, config);
    config.method = config.method.toLowerCase();

    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);

    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  };

  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });

  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
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
    return 'Cancel' + (this.message ? ': ' + this.message : '');
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
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
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
    var instance = bind(Axios_1.prototype.request, context);

    // Copy axios.prototype to instance
    utils.extend(instance, Axios_1.prototype, context);

    // Copy context to instance
    utils.extend(instance, context);

    return instance;
  }

  // Create the default instance to be exported
  var axios = createInstance(defaults_1);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios_1;

  // Factory for creating new instances
  axios.create = function create(instanceConfig) {
    return createInstance(utils.merge(defaults_1, instanceConfig));
  };

  // Expose Cancel & CancelToken
  axios.Cancel = Cancel_1;
  axios.CancelToken = CancelToken_1;
  axios.isCancel = isCancel;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;

  var axios_1 = axios;

  // Allow use of default import syntax in TypeScript
  var default_1 = axios;
  axios_1.default = default_1;

  var axios$1 = axios_1;

  var FileUpload =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(FileUpload, _React$Component);

    function FileUpload() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
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
      formData.append('upload', file);
      axios$1.post(endPoint.path, formData, {
        headers: endPoint.headers,
        onUploadProgress: function onUploadProgress(progressEvent) {
          var percentage = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          progress = [percentage, '%'].join('');
          _this2.progressElem.style.width = progress;

          if (percentage === 100) {
            _this2.progressElem.innerHTML = 'done';
          } else {
            _this2.progressElem.innerHTML = progress;
          }
        }
      }).then(function () {
        addOnStack(file);
      }).catch(function (error) {
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
        return React__default.createElement("tr", null, React__default.createElement("td", {
          colSpan: 3
        }, React__default.createElement("div", {
          className: "file-upload-error"
        }, "There was an error, try again or contact the site owner.")));
      }

      return React__default.createElement("tr", null, React__default.createElement("td", {
        className: "file-upload-name"
      }, file.preview && React__default.createElement("img", {
        src: file.preview,
        alt: file.name,
        className: "img-thumbnail",
        style: {
          maxWidth: '80px'
        }
      })), React__default.createElement("td", {
        className: "file-upload-progress"
      }, React__default.createElement("div", {
        className: "progress"
      }, React__default.createElement("div", {
        ref: function ref(elem) {
          _this3.progressElem = elem;
        },
        className: "progress-bar",
        role: "progressbar",
        style: {
          width: '0%'
        },
        "aria-valuenow": "0",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, "0%"))), React__default.createElement("td", {
        className: "file-upload-delete"
      }, React__default.createElement("button", {
        className: "file-upload-delete-button",
        type: "button",
        onClick: function onClick() {
          removeFromStack(file);
        }
      }, "x")));
    };

    return FileUpload;
  }(React__default.Component);

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
        'Content-Type': 'multipart/form-data'
      }
    }
  };

  var DropZone =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(DropZone, _React$Component);

    function DropZone() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.state = {
        queue: []
      };
      _this.stack = [];

      _this.filesFromClient = function (files) {
        var queue = _this.state.queue;
        var tmpQueue = [].concat(queue);
        files.forEach(function (file) {
          file.preview = URL.createObjectURL(file);
          tmpQueue.push(file);
        });

        _this.setState({
          queue: tmpQueue
        });
      };

      _this.addOnStack = function (file) {
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

      _this.removeFromStack = function (fileToDelete) {
        var queue = _this.state.queue;
        var input = _this.props.input;
        var filtered = queue.filter(function (file) {
          return file.name !== fileToDelete.name;
        });

        var stackFiltered = _this.stack.filter(function (file) {
          return file.name !== fileToDelete.name;
        });

        _this.stack = stackFiltered;
        input.onChange(stackFiltered);

        _this.setState({
          queue: filtered
        });
      };

      _this.displayFiles = function () {
        var queue = _this.state.queue;
        var endPoint = _this.props.endPoint;

        if (queue.length === 0) {
          return null;
        }

        var list = queue.map(function (file) {
          return React__default.createElement(FileUpload, {
            key: file.name,
            file: file,
            addOnStack: _this.addOnStack,
            removeFromStack: _this.removeFromStack,
            endPoint: endPoint
          });
        });
        return React__default.createElement("table", {
          className: "table"
        }, React__default.createElement("tbody", null, list));
      };

      return _this;
    }

    var _proto = DropZone.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
      var queue = this.state.queue;
      return queue !== nextState.queue;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      var queue = this.state.queue;
      queue.forEach(function (file) {
        URL.createObjectURL(file);
      });
    };

    _proto.render = function render() {
      return React__default.createElement(React__default.Fragment, null, React__default.createElement(Dropzone, {
        onDrop: this.filesFromClient
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps;
        return React__default.createElement("section", {
          className: "file-upload-dropzone"
        }, React__default.createElement("div", getRootProps(), React__default.createElement("input", getInputProps()), React__default.createElement("button", {
          type: "button",
          className: "btn btn-primary"
        }, "select files...")));
      }), this.displayFiles());
    };

    return DropZone;
  }(React__default.Component);

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
    return React__default.createElement("input", _extends({
      type: "password",
      placeholder: placeholder,
      className: classNames('ffc-input', {
        'is-invalid': computedInvalid
      }, formControl)
    }, input));
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

    var list = radioList.map(function (option, key) {
      return React__default.createElement("div", {
        className: "form-check",
        key: option.props.value
      }, React__default.createElement("input", {
        type: "radio",
        name: "" + input.name,
        id: input.name + "_" + key,
        value: option.props.value,
        className: classNames('form-check-label'),
        onChange: function onChange(event) {
          return _onChange(event, key, option);
        }
      }), ' ', React__default.createElement("label", {
        htmlFor: input.name + "_" + key,
        className: classNames('form-check-label')
      }, option.props.children));
    });
    return React__default.createElement("div", {
      className: classNames('ffc-input', {
        'is-invalid': computedInvalid
      }, formControl)
    }, list);
  };

  Radio.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    children: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
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
    return React__default.createElement("select", _extends({
      placeholder: placeholder,
      className: classNames('ffc-input', {
        'is-invalid': computedInvalid
      }, formControl)
    }, input), children);
  };

  Select.propTypes = {
    input: propTypes.oneOfType([propTypes.object]),
    children: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
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
    return React__default.createElement("input", _extends({
      type: "text",
      placeholder: placeholder,
      className: classNames('ffc-input', {
        'is-invalid': computedInvalid
      }, formControl)
    }, input));
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
    return React__default.createElement("textarea", _extends({
      placeholder: placeholder,
      className: classNames('ffc-input', {
        'is-invalid': computedInvalid
      }, formControl),
      rows: rows
    }, input));
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

  exports.Form = Form$$1;
  exports.Checkbox = Checkbox$1;
  exports.Condition = Condition$1;
  exports.Password = Password$1;
  exports.Radio = Radio$1;
  exports.Select = Select$1;
  exports.Text = Text$1;
  exports.Textarea = Textarea$1;
  exports.DropZone = DropZone$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
