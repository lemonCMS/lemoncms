'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rxjs = require('rxjs');
var warning = _interopDefault(require('tiny-warning'));
var React = require('react');
var React__default = _interopDefault(React);
var ajax = require('rxjs/ajax');
var axios = _interopDefault(require('axios'));
var fastEquals = require('fast-equals');
var PropTypes = _interopDefault(require('prop-types'));

/**
 *
 * @type {Array}
 */
var watchers = [];
/**
 *
 * @param string
 * @returns {string}
 */

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var callMiniVerse = function callMiniVerse(deepLocation, miniverse, serviceName, conf, callback) {
  var service = miniverse.getService(capitalizeFirstLetter(serviceName));

  if (service) {
    conf.watch[serviceName].forEach(function (watcher) {
      var watchFunction = "watch" + capitalizeFirstLetter(watcher);
      var composedCB = {
        next: function next(data) {
          return callback.next(serviceName, watcher, data);
        },
        error: function error(_error) {
          return callback.error(serviceName, watcher, _error);
        }
      };

      if (typeof service[watchFunction] !== 'function') {
        console.error("Watcher " + watchFunction + " does not exist in " + serviceName + " service provider.");
        return null;
      }

      watchers.push(service[watchFunction](deepLocation + "-constructor", composedCB));
    });
  }
};

var unsubscribeMiniverse = function unsubscribeMiniverse(deepLocation, miniverse, serviceName, conf) {
  var service = miniverse.getService(capitalizeFirstLetter(serviceName));

  if (service) {
    conf.watch[serviceName].forEach(function (watcher) {
      var watchFunction = "watch" + capitalizeFirstLetter(watcher);

      if (typeof service[watchFunction] !== 'function') {
        console.error("Tried to unsubscribe " + watchFunction + " in a service that does not exists " + serviceName + ".");
        return null;
      }

      service.unsubscribeByComponent(deepLocation + "-constructor");
    });
  }
};
/**
 *
 * @param deepLocation
 * @param miniverse
 * @param conf
 * @param callback
 * @returns {Array}
 */


var createWatchers = function createWatchers(deepLocation, miniverse, conf, callback) {
  if (conf.watch) {
    Object.keys(conf.watch).map(function (serviceName) {
      callMiniVerse(deepLocation, miniverse, serviceName, conf, callback);
    });
    return watchers;
  }
};
var unsubscribeWatchers = function unsubscribeWatchers(deepLocation, miniverse, conf) {
  if (conf.watch) {
    Object.keys(conf.watch).map(function (serviceName) {
      unsubscribeMiniverse(deepLocation, miniverse, serviceName, conf);
    });
  }
};

var propName = '@@rxjs-hooks';

var propNameAuth = '@@rxjs-hooks-auth';

var RunHooks =
/**
 *
 * @type {null}
 */

/**
 *
 * @type {Array}
 */

/**
 *
 * @type {Array}
 */

/**
 *
 * @type {null}
 */

/**
 *
 * @type {null}
 */

/**
 *
 * @type {boolean}
 */

/**
 *
 * @type {number}
 */

/**
 *
 * @type {number}
 */

/**
 *
 * @param name
 * @param components
 * @param locals
 */
function RunHooks(_name, _components, locals) {
  var _this = this;

  this.sub$ = null;
  this.components = [];
  this.hooks = [];
  this.name = null;
  this.locals = null;
  this.shouldRun = true;
  this.willRun = 0;
  this.hasRun = 0;

  this.subscribe = function (next, error, complete) {
    if (error === void 0) {
      error = function error() {};
    }

    if (complete === void 0) {
      complete = function complete() {};
    }

    _this.run();

    _this.sub$.subscribe(next, error, complete);
  };

  this.next = function (data) {
    _this.sub$.next(data);
  };

  this.error = function (data) {
    return _this.sub$.error(data);
  };

  this.complete = function () {
    return _this.sub$.complete();
  };

  this.reset = function () {
    _this.hooks = _this.getHooks(_this.components, _this.name);
    _this.willRun = _this.hooks.length;
    _this.shouldRun = _this.willRun > 0;
  };

  this.getHooks = function (components, name) {
    return (Array.isArray(components) ? components : [components]).filter(function (component) {
      return component;
    }).map(function (component) {
      return {
        component: component,
        hooks: component.default ? component.default[propName] : component[propName]
      };
    }).filter(function (_ref) {
      var hooks = _ref.hooks;
      return hooks && hooks[name];
    }).map(function (_ref2) {
      var component = _ref2.component,
          hooks = _ref2.hooks;
      var hook = hooks[name];

      if (typeof hook !== 'function') {
        throw new Error('decorator provideHooks MUST contain "fetch" or "watch" functions');
      }

      return {
        hook: hook,
        component: component
      };
    });
  };

  this.run = function () {
    _this.hasRun += 1;

    if (!_this.shouldRun) {
      _this.next();

      _this.complete();

      return;
    }

    if (_this.hooks.length === 0) {
      warning(true, 'RunHooks has run more times then he could handle.' + ("Should run: " + _this.willRun + ", Has run: " + _this.hasRun) + '@morty should return rxjs zip()');

      _this.next();

      return;
    }

    var hook = _this.hooks.shift();

    if (_this.hooks.length === 0) {
      return _this.runHook(hook).subscribe(function () {
        return _this.next();
      }, function (err) {
        return _this.error(err);
      }, function () {
        return _this.complete();
      });
    }

    return _this.runHook(hook).subscribe(function () {
      _this.run();
    }, function (err) {
      return _this.error(err);
    });
  };

  this.runHook = function (_ref3) {
    var hook = _ref3.hook,
        component = _ref3.component;
    return typeof _this.locals === 'function' ? hook(_this.locals(component)) : hook(_this.locals);
  };

  this.components = _components;
  this.name = _name;
  this.locals = locals;
  this.sub$ = new rxjs.ReplaySubject();
  this.reset();
}
/**
 *
 * @param next
 * @param error
 * @param complete
 * @returns {*}
 */
;

var MiniverseContext = React.createContext({});

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

var Miniverse =
/*#__PURE__*/
function () {
  /**
   *
   * @type {{}}
   */

  /**
   *
   * @type concat
   * */

  /**
   *
   * @type zip
   */

  /**
   *
   * @type {{}}
   */

  /**
   *
   * @param services
   */
  function Miniverse(services) {
    var _this = this;

    this.services = {};
    this.concat = rxjs.concat;
    this.zip = rxjs.zip;
    this.helpers = {};

    this.eject = function () {
      var subjects = {};
      Object.keys(_this.services).forEach(function (service) {
        subjects[service] = _this.services[service].eject();
      });
      return _this._waitAllDone(subjects);
    };

    this.insert = function (data) {
      var subjects = {};
      Object.keys(data).forEach(function (service) {
        if (_this.isService(service)) {
          subjects[service] = _this.services[service].insert(data[service]);
        }
      });
      return _this._waitAllDone(subjects);
    };

    this.getService = function (name) {
      if (typeof _this.services[name] === 'undefined') {
        throw Error("Service " + name + " is not registered in services");
      }

      return _this.services[name];
    };

    this.setHelpers = function (helpers) {
      var client = helpers.client,
          rest = _objectWithoutPropertiesLoose(helpers, ["client"]);

      _this.client = client;
      _this.helpers = rest;
    };

    this.getHelper = function (name) {
      if (typeof _this.helpers[name] === 'undefined') {
        console.error("Helper " + name + " is not registered in helpers");
        return false;
      }

      return _this.helpers[name];
    };

    this.objectMap = function (object, mapFn) {
      return Object.keys(object).reduce(function (result, key) {
        result[key] = mapFn(object[key]);
        return result;
      }, {});
    };

    this._waitAllDone = function (subjects) {
      var subject = new rxjs.ReplaySubject();
      var toExport = Object.keys(subjects);
      var nextAfter = toExport.length;
      var preparedExport = {};

      if (nextAfter === 0) {
        subject.next({});
      }

      toExport.forEach(function (key) {
        subjects[key].subscribe(function (data) {
          preparedExport[key] = data;
          nextAfter -= 1;

          if (nextAfter <= 0) {
            subject.next(preparedExport);
          }
        });
      });
      return subject;
    };

    this.services = this.objectMap(services, function (Service) {
      return new Service(_this);
    });
  }

  var _proto = Miniverse.prototype;

  _proto.isService = function isService(name) {
    return typeof this.services[name] !== 'undefined';
  }
  /**
   *
   * @returns {*}
   */
  ;

  /**
   *
   * @returns {*}
   */
  _proto.getClient = function getClient() {
    if (this.client === undefined) {
      this.client = ajax.ajax;
    }

    return this.client;
  }
  /**
   *
   * @param object
   * @param mapFn
   * @returns {{}}
   */
  ;

  return Miniverse;
}();

var Store =
/*#__PURE__*/
function () {
  /**
   * @type {Miniverse}
   */

  /**
   *
   * @type {axios}
   */

  /**
   *
   * @type {{}}
   */

  /**
   *
   * @param miniverses
   */
  function Store(miniverses) {
    var _this = this;

    this.miniverse = void 0;
    this.subjects = {};
    this.locations = {};

    this.watch = function (resource, component, callback) {
      _this.unsubscribe(resource, component);

      var subject = _this.createSubject(resource);

      _this.inMemory(resource, component, subject.subscribe(callback));

      return subject;
    };

    this.get = function (url, params, headers) {
      if (params === void 0) {
        params = {};
      }

      if (headers === void 0) {
        headers = {};
      }

      var subject = _this.createSubject(url); // Send a GET request


      axios({
        method: 'get',
        url: url,
        params: params,
        headers: headers
      }).then(function (response) {
        subject.next(response.data);
      }).catch(function (error) {
        subject.error(error);
      });
      return subject;
    };

    this.miniverse = miniverses;
  }
  /**
   * Eject current data from Subjects
   *
   *@returns {*}
   */


  var _proto = Store.prototype;

  _proto.eject = function eject() {
    return this.miniverse._waitAllDone(this.subjects);
  }
  /**
   *  Create subjects and import data
   *
   * @param data
   */
  ;

  _proto.insert = function insert(data) {
    var _this2 = this;

    Object.keys(data).forEach(function (key) {
      var subject = _this2.createSubject(key);

      subject.next(data[key]);
    });
    return this.miniverse._waitAllDone(this.subjects);
  }
  /**
   *
   * @param url
   * @returns {*}
   */
  ;

  _proto.createSubject = function createSubject(url) {
    if (this.subjects[url]) {
      return this.subjects[url];
    }

    this.subjects[url] = new rxjs.ReplaySubject();
    return this.subjects[url];
  }
  /**
   *
   * @param resource
   * @param component
   */
  ;

  _proto.unsubscribe = function unsubscribe(resource, component) {
    if (this.locations[resource] && this.locations[resource][component]) {
      this.locations[resource][component].unsubscribe();
      delete this.locations[resource][component];
    }
  }
  /**
   *
   * @param component
   */
  ;

  _proto.unsubscribeByComponent = function unsubscribeByComponent(component) {
    var _this3 = this;

    Object.keys(this.locations).forEach(function (resource) {
      if (typeof _this3.locations[resource] !== 'undefined') {
        if (typeof _this3.locations[resource][component] !== 'undefined') {
          _this3.locations[resource][component].unsubscribe();

          delete _this3.locations[resource][component];
        }
      }
    });
  }
  /**
   * Keep track of all current watchers.
   *
   * @param resource
   * @param component
   * @param subscription
   */
  ;

  _proto.inMemory = function inMemory(resource, component, subscription) {
    if (typeof this.locations[resource] === 'undefined') {
      this.locations[resource] = {};
    }

    this.locations[resource][component] = subscription;
  }
  /**
   *
   * @returns {{}}
   */
  ;

  _proto.getLocations = function getLocations() {
    return this.locations;
  }
  /**
   * Create a new watcher
   *
   * @param resource
   * @param component
   * @param callback
   */
  ;

  /**
   * Reset given subject
   *
   * @param url
   * @param data
   */
  _proto.reset = function reset(url, data) {
    if (data === void 0) {
      data = null;
    }

    var subject = this.createSubject(url);
    subject.next(data);
    return subject;
  };

  return Store;
}();

var provideHooks = (function (hooks) {
  return function (ComposedComponent) {
    if (hooks.authorized !== 'undefined') {
      var authHooks = {};
      authHooks.authorized = hooks.authorized;
      ComposedComponent[propNameAuth] = authHooks;
      delete hooks.authorized;
    }

    if (Object.keys(hooks).length > 0) {
      ComposedComponent[propName] = hooks;
    }

    return ComposedComponent;
  };
});

/**
 *
 * @param conf
 * @returns {Function}
 */

var withMiniverse = (function (conf) {
  if (conf === void 0) {
    conf = null;
  }

  return function (Component) {
    if (!conf) {
      return function (props) {
        return React__default.createElement(MiniverseContext.Consumer, null, function (context) {
          return React__default.createElement(Component, _extends({}, props, context));
        });
      };
    }

    var Subscriber =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inheritsLoose(Subscriber, _React$PureComponent);

      /**
       *
       * @type {{}}
       */

      /**
       *
       * @type {{}}
       */

      /**
       *
       * @type {null}
       */

      /**
       *
       * @type {null}
       */

      /**
       *
       * @type {boolean}
       */

      /**
       *
       * @param props
       * @param context
       */
      function Subscriber(props, context) {
        var _this;

        _this = _React$PureComponent.call(this, props, context) || this;
        _this.state = {};
        _this.cache = {};
        _this.deepLocation = null;
        _this.provider = null;
        _this.mounted = false;

        _this.updateState = function (service, watcher, data) {
          var oldState = JSON.parse(JSON.stringify(_this.state));

          if (typeof oldState[service] === 'undefined') {
            oldState[service] = {};
          }

          if (typeof oldState[service][watcher] === 'undefined') {
            oldState[service][watcher] = {};
          }

          oldState[service][watcher] = JSON.parse(JSON.stringify(data));

          if (!fastEquals.deepEqual(_this.state, oldState)) {
            if (_this.mounted) {
              _this.setState(oldState);
            }

            return oldState;
          }
        };

        var serviceProvider = props.serviceProvider;
        _this.provider = serviceProvider;
        _this.deepLocation = conf.name || Component.displayName || Component.name || Component.constructor.name;
        var callback = {
          next: function next(service, watcher, data) {
            _this.state = _this.updateState(service, watcher, data);
          },
          error: function error(service, watcher, _error) {
            warning(true, _error);

            _this.updateState(service, watcher, _error);
          }
        };
        createWatchers(_this.deepLocation, _this.provider, conf, callback);
        return _this;
      }
      /**
       *
       */


      var _proto = Subscriber.prototype;

      _proto.componentWillUnmount = function componentWillUnmount() {
        unsubscribeWatchers(this.deepLocation, this.provider, conf);
      }
      /**
       *
       * @param service
       * @param watcher
       * @param data
       * @returns {any}
       */
      ;

      /**
       *
       * @returns {*}
       */
      _proto.render = function render() {
        this.mounted = true;
        var newProps = Object.assign({}, _extends({}, this.cache), _extends({}, this.state));
        return React__default.createElement(Component, _extends({}, this.props, newProps, this.context));
      };

      return Subscriber;
    }(React__default.PureComponent);

    Subscriber.propTypes = {
      serviceProvider: PropTypes.objectOf(PropTypes.any).isRequired
    };
    return function (props) {
      return React__default.createElement(MiniverseContext.Consumer, null, function (context) {
        return React__default.createElement(Subscriber, _extends({}, props, context));
      });
    };
  };
});

{
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_morty_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "cjs") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["cjs"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of Miniverse " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "cjs";
  }
}

exports.createWatchers = createWatchers;
exports.unsubscribeWatchers = unsubscribeWatchers;
exports.propName = propName;
exports.propNameAuth = propNameAuth;
exports.runHooks = RunHooks;
exports.MiniverseContext = MiniverseContext;
exports.Miniverse = Miniverse;
exports.Store = Store;
exports.provideHooks = provideHooks;
exports.withMiniverse = withMiniverse;
