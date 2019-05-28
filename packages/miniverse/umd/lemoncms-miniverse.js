(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (factory((global.Miniverse = {}),global.React));
}(this, (function (exports,React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

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
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isFunction(x) {
      return typeof x === 'function';
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var _enable_super_gross_mode_that_will_cause_bad_things = false;
  var config = {
      Promise: undefined,
      set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
              var error = /*@__PURE__*/ new Error();
              /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
          }
          else if (_enable_super_gross_mode_that_will_cause_bad_things) {
              /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
          }
          _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
      },
  };

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function hostReportError(err) {
      setTimeout(function () { throw err; }, 0);
  }

  /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
  var empty = {
      closed: true,
      next: function (value) { },
      error: function (err) {
          if (config.useDeprecatedSynchronousErrorHandling) {
              throw err;
          }
          else {
              hostReportError(err);
          }
      },
      complete: function () { }
  };

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isObject(x) {
      return x !== null && typeof x === 'object';
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function UnsubscriptionErrorImpl(errors) {
      Error.call(this);
      this.message = errors ?
          errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
      this.name = 'UnsubscriptionError';
      this.errors = errors;
      return this;
  }
  UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
  var UnsubscriptionError = UnsubscriptionErrorImpl;

  /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
  var Subscription = /*@__PURE__*/ (function () {
      function Subscription(unsubscribe) {
          this.closed = false;
          this._parentOrParents = null;
          this._subscriptions = null;
          if (unsubscribe) {
              this._unsubscribe = unsubscribe;
          }
      }
      Subscription.prototype.unsubscribe = function () {
          var errors;
          if (this.closed) {
              return;
          }
          var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;
          if (_parentOrParents instanceof Subscription) {
              _parentOrParents.remove(this);
          }
          else if (_parentOrParents !== null) {
              for (var index = 0; index < _parentOrParents.length; ++index) {
                  var parent_1 = _parentOrParents[index];
                  parent_1.remove(this);
              }
          }
          if (isFunction(_unsubscribe)) {
              try {
                  _unsubscribe.call(this);
              }
              catch (e) {
                  errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
              }
          }
          if (isArray(_subscriptions)) {
              var index = -1;
              var len = _subscriptions.length;
              while (++index < len) {
                  var sub = _subscriptions[index];
                  if (isObject(sub)) {
                      try {
                          sub.unsubscribe();
                      }
                      catch (e) {
                          errors = errors || [];
                          if (e instanceof UnsubscriptionError) {
                              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                          }
                          else {
                              errors.push(e);
                          }
                      }
                  }
              }
          }
          if (errors) {
              throw new UnsubscriptionError(errors);
          }
      };
      Subscription.prototype.add = function (teardown) {
          var subscription = teardown;
          if (!teardown) {
              return Subscription.EMPTY;
          }
          switch (typeof teardown) {
              case 'function':
                  subscription = new Subscription(teardown);
              case 'object':
                  if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                      return subscription;
                  }
                  else if (this.closed) {
                      subscription.unsubscribe();
                      return subscription;
                  }
                  else if (!(subscription instanceof Subscription)) {
                      var tmp = subscription;
                      subscription = new Subscription();
                      subscription._subscriptions = [tmp];
                  }
                  break;
              default: {
                  throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }
          var _parentOrParents = subscription._parentOrParents;
          if (_parentOrParents === null) {
              subscription._parentOrParents = this;
          }
          else if (_parentOrParents instanceof Subscription) {
              if (_parentOrParents === this) {
                  return subscription;
              }
              subscription._parentOrParents = [_parentOrParents, this];
          }
          else if (_parentOrParents.indexOf(this) === -1) {
              _parentOrParents.push(this);
          }
          else {
              return subscription;
          }
          var subscriptions = this._subscriptions;
          if (subscriptions === null) {
              this._subscriptions = [subscription];
          }
          else {
              subscriptions.push(subscription);
          }
          return subscription;
      };
      Subscription.prototype.remove = function (subscription) {
          var subscriptions = this._subscriptions;
          if (subscriptions) {
              var subscriptionIndex = subscriptions.indexOf(subscription);
              if (subscriptionIndex !== -1) {
                  subscriptions.splice(subscriptionIndex, 1);
              }
          }
      };
      Subscription.EMPTY = (function (empty) {
          empty.closed = true;
          return empty;
      }(new Subscription()));
      return Subscription;
  }());
  function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var rxSubscriber = typeof Symbol === 'function'
      ? /*@__PURE__*/ Symbol('rxSubscriber')
      : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();

  /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
  var Subscriber = /*@__PURE__*/ (function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destinationOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this.syncErrorValue = null;
          _this.syncErrorThrown = false;
          _this.syncErrorThrowable = false;
          _this.isStopped = false;
          switch (arguments.length) {
              case 0:
                  _this.destination = empty;
                  break;
              case 1:
                  if (!destinationOrNext) {
                      _this.destination = empty;
                      break;
                  }
                  if (typeof destinationOrNext === 'object') {
                      if (destinationOrNext instanceof Subscriber) {
                          _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                          _this.destination = destinationOrNext;
                          destinationOrNext.add(_this);
                      }
                      else {
                          _this.syncErrorThrowable = true;
                          _this.destination = new SafeSubscriber(_this, destinationOrNext);
                      }
                      break;
                  }
              default:
                  _this.syncErrorThrowable = true;
                  _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                  break;
          }
          return _this;
      }
      Subscriber.prototype[rxSubscriber] = function () { return this; };
      Subscriber.create = function (next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
      };
      Subscriber.prototype.next = function (value) {
          if (!this.isStopped) {
              this._next(value);
          }
      };
      Subscriber.prototype.error = function (err) {
          if (!this.isStopped) {
              this.isStopped = true;
              this._error(err);
          }
      };
      Subscriber.prototype.complete = function () {
          if (!this.isStopped) {
              this.isStopped = true;
              this._complete();
          }
      };
      Subscriber.prototype.unsubscribe = function () {
          if (this.closed) {
              return;
          }
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
      };
      Subscriber.prototype._next = function (value) {
          this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
          this.destination.error(err);
          this.unsubscribe();
      };
      Subscriber.prototype._complete = function () {
          this.destination.complete();
          this.unsubscribe();
      };
      Subscriber.prototype._unsubscribeAndRecycle = function () {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
      };
      return Subscriber;
  }(Subscription));
  var SafeSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(SafeSubscriber, _super);
      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this._parentSubscriber = _parentSubscriber;
          var next;
          var context = _this;
          if (isFunction(observerOrNext)) {
              next = observerOrNext;
          }
          else if (observerOrNext) {
              next = observerOrNext.next;
              error = observerOrNext.error;
              complete = observerOrNext.complete;
              if (observerOrNext !== empty) {
                  context = Object.create(observerOrNext);
                  if (isFunction(context.unsubscribe)) {
                      _this.add(context.unsubscribe.bind(context));
                  }
                  context.unsubscribe = _this.unsubscribe.bind(_this);
              }
          }
          _this._context = context;
          _this._next = next;
          _this._error = error;
          _this._complete = complete;
          return _this;
      }
      SafeSubscriber.prototype.next = function (value) {
          if (!this.isStopped && this._next) {
              var _parentSubscriber = this._parentSubscriber;
              if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                  this.__tryOrUnsub(this._next, value);
              }
              else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.error = function (err) {
          if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
              if (this._error) {
                  if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(this._error, err);
                      this.unsubscribe();
                  }
                  else {
                      this.__tryOrSetError(_parentSubscriber, this._error, err);
                      this.unsubscribe();
                  }
              }
              else if (!_parentSubscriber.syncErrorThrowable) {
                  this.unsubscribe();
                  if (useDeprecatedSynchronousErrorHandling) {
                      throw err;
                  }
                  hostReportError(err);
              }
              else {
                  if (useDeprecatedSynchronousErrorHandling) {
                      _parentSubscriber.syncErrorValue = err;
                      _parentSubscriber.syncErrorThrown = true;
                  }
                  else {
                      hostReportError(err);
                  }
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.complete = function () {
          var _this = this;
          if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              if (this._complete) {
                  var wrappedComplete = function () { return _this._complete.call(_this._context); };
                  if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(wrappedComplete);
                      this.unsubscribe();
                  }
                  else {
                      this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                      this.unsubscribe();
                  }
              }
              else {
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
          try {
              fn.call(this._context, value);
          }
          catch (err) {
              this.unsubscribe();
              if (config.useDeprecatedSynchronousErrorHandling) {
                  throw err;
              }
              else {
                  hostReportError(err);
              }
          }
      };
      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
          if (!config.useDeprecatedSynchronousErrorHandling) {
              throw new Error('bad call');
          }
          try {
              fn.call(this._context, value);
          }
          catch (err) {
              if (config.useDeprecatedSynchronousErrorHandling) {
                  parent.syncErrorValue = err;
                  parent.syncErrorThrown = true;
                  return true;
              }
              else {
                  hostReportError(err);
                  return true;
              }
          }
          return false;
      };
      SafeSubscriber.prototype._unsubscribe = function () {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;
          _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber;
  }(Subscriber));

  /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
  function canReportError(observer) {
      while (observer) {
          var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
          if (closed_1 || isStopped) {
              return false;
          }
          else if (destination && destination instanceof Subscriber) {
              observer = destination;
          }
          else {
              observer = null;
          }
      }
      return true;
  }

  /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
  function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
          if (nextOrObserver instanceof Subscriber) {
              return nextOrObserver;
          }
          if (nextOrObserver[rxSubscriber]) {
              return nextOrObserver[rxSubscriber]();
          }
      }
      if (!nextOrObserver && !error && !complete) {
          return new Subscriber(empty);
      }
      return new Subscriber(nextOrObserver, error, complete);
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function noop() { }

  /** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
  function pipeFromArray(fns) {
      if (!fns) {
          return noop;
      }
      if (fns.length === 1) {
          return fns[0];
      }
      return function piped(input) {
          return fns.reduce(function (prev, fn) { return fn(prev); }, input);
      };
  }

  /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
  var Observable = /*@__PURE__*/ (function () {
      function Observable(subscribe) {
          this._isScalar = false;
          if (subscribe) {
              this._subscribe = subscribe;
          }
      }
      Observable.prototype.lift = function (operator) {
          var observable$$1 = new Observable();
          observable$$1.source = this;
          observable$$1.operator = operator;
          return observable$$1;
      };
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber(observerOrNext, error, complete);
          if (operator) {
              sink.add(operator.call(sink, this.source));
          }
          else {
              sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                  this._subscribe(sink) :
                  this._trySubscribe(sink));
          }
          if (config.useDeprecatedSynchronousErrorHandling) {
              if (sink.syncErrorThrowable) {
                  sink.syncErrorThrowable = false;
                  if (sink.syncErrorThrown) {
                      throw sink.syncErrorValue;
                  }
              }
          }
          return sink;
      };
      Observable.prototype._trySubscribe = function (sink) {
          try {
              return this._subscribe(sink);
          }
          catch (err) {
              if (config.useDeprecatedSynchronousErrorHandling) {
                  sink.syncErrorThrown = true;
                  sink.syncErrorValue = err;
              }
              if (canReportError(sink)) {
                  sink.error(err);
              }
              else {
                  console.warn(err);
              }
          }
      };
      Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var subscription;
              subscription = _this.subscribe(function (value) {
                  try {
                      next(value);
                  }
                  catch (err) {
                      reject(err);
                      if (subscription) {
                          subscription.unsubscribe();
                      }
                  }
              }, reject, resolve);
          });
      };
      Observable.prototype._subscribe = function (subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
      };
      Observable.prototype[observable] = function () {
          return this;
      };
      Observable.prototype.pipe = function () {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              operations[_i] = arguments[_i];
          }
          if (operations.length === 0) {
              return this;
          }
          return pipeFromArray(operations)(this);
      };
      Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var value;
              _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
          });
      };
      Observable.create = function (subscribe) {
          return new Observable(subscribe);
      };
      return Observable;
  }());
  function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
          promiseCtor = config.Promise || Promise;
      }
      if (!promiseCtor) {
          throw new Error('no Promise impl found');
      }
      return promiseCtor;
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function ObjectUnsubscribedErrorImpl() {
      Error.call(this);
      this.message = 'object unsubscribed';
      this.name = 'ObjectUnsubscribedError';
      return this;
  }
  ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
  var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

  /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
  var SubjectSubscription = /*@__PURE__*/ (function (_super) {
      __extends(SubjectSubscription, _super);
      function SubjectSubscription(subject, subscriber) {
          var _this = _super.call(this) || this;
          _this.subject = subject;
          _this.subscriber = subscriber;
          _this.closed = false;
          return _this;
      }
      SubjectSubscription.prototype.unsubscribe = function () {
          if (this.closed) {
              return;
          }
          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;
          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
              return;
          }
          var subscriberIndex = observers.indexOf(this.subscriber);
          if (subscriberIndex !== -1) {
              observers.splice(subscriberIndex, 1);
          }
      };
      return SubjectSubscription;
  }(Subscription));

  /** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
  var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(SubjectSubscriber, _super);
      function SubjectSubscriber(destination) {
          var _this = _super.call(this, destination) || this;
          _this.destination = destination;
          return _this;
      }
      return SubjectSubscriber;
  }(Subscriber));
  var Subject = /*@__PURE__*/ (function (_super) {
      __extends(Subject, _super);
      function Subject() {
          var _this = _super.call(this) || this;
          _this.observers = [];
          _this.closed = false;
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
      }
      Subject.prototype[rxSubscriber] = function () {
          return new SubjectSubscriber(this);
      };
      Subject.prototype.lift = function (operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
      };
      Subject.prototype.next = function (value) {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          if (!this.isStopped) {
              var observers = this.observers;
              var len = observers.length;
              var copy = observers.slice();
              for (var i = 0; i < len; i++) {
                  copy[i].next(value);
              }
          }
      };
      Subject.prototype.error = function (err) {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i = 0; i < len; i++) {
              copy[i].error(err);
          }
          this.observers.length = 0;
      };
      Subject.prototype.complete = function () {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i = 0; i < len; i++) {
              copy[i].complete();
          }
          this.observers.length = 0;
      };
      Subject.prototype.unsubscribe = function () {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
      };
      Subject.prototype._trySubscribe = function (subscriber) {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          else {
              return _super.prototype._trySubscribe.call(this, subscriber);
          }
      };
      Subject.prototype._subscribe = function (subscriber) {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          else if (this.hasError) {
              subscriber.error(this.thrownError);
              return Subscription.EMPTY;
          }
          else if (this.isStopped) {
              subscriber.complete();
              return Subscription.EMPTY;
          }
          else {
              this.observers.push(subscriber);
              return new SubjectSubscription(this, subscriber);
          }
      };
      Subject.prototype.asObservable = function () {
          var observable = new Observable();
          observable.source = this;
          return observable;
      };
      Subject.create = function (destination, source) {
          return new AnonymousSubject(destination, source);
      };
      return Subject;
  }(Observable));
  var AnonymousSubject = /*@__PURE__*/ (function (_super) {
      __extends(AnonymousSubject, _super);
      function AnonymousSubject(destination, source) {
          var _this = _super.call(this) || this;
          _this.destination = destination;
          _this.source = source;
          return _this;
      }
      AnonymousSubject.prototype.next = function (value) {
          var destination = this.destination;
          if (destination && destination.next) {
              destination.next(value);
          }
      };
      AnonymousSubject.prototype.error = function (err) {
          var destination = this.destination;
          if (destination && destination.error) {
              this.destination.error(err);
          }
      };
      AnonymousSubject.prototype.complete = function () {
          var destination = this.destination;
          if (destination && destination.complete) {
              this.destination.complete();
          }
      };
      AnonymousSubject.prototype._subscribe = function (subscriber) {
          var source = this.source;
          if (source) {
              return this.source.subscribe(subscriber);
          }
          else {
              return Subscription.EMPTY;
          }
      };
      return AnonymousSubject;
  }(Subject));

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  function refCount() {
      return function refCountOperatorFunction(source) {
          return source.lift(new RefCountOperator(source));
      };
  }
  var RefCountOperator = /*@__PURE__*/ (function () {
      function RefCountOperator(connectable) {
          this.connectable = connectable;
      }
      RefCountOperator.prototype.call = function (subscriber, source) {
          var connectable = this.connectable;
          connectable._refCount++;
          var refCounter = new RefCountSubscriber(subscriber, connectable);
          var subscription = source.subscribe(refCounter);
          if (!refCounter.closed) {
              refCounter.connection = connectable.connect();
          }
          return subscription;
      };
      return RefCountOperator;
  }());
  var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(RefCountSubscriber, _super);
      function RefCountSubscriber(destination, connectable) {
          var _this = _super.call(this, destination) || this;
          _this.connectable = connectable;
          return _this;
      }
      RefCountSubscriber.prototype._unsubscribe = function () {
          var connectable = this.connectable;
          if (!connectable) {
              this.connection = null;
              return;
          }
          this.connectable = null;
          var refCount = connectable._refCount;
          if (refCount <= 0) {
              this.connection = null;
              return;
          }
          connectable._refCount = refCount - 1;
          if (refCount > 1) {
              this.connection = null;
              return;
          }
          var connection = this.connection;
          var sharedConnection = connectable._connection;
          this.connection = null;
          if (sharedConnection && (!connection || sharedConnection === connection)) {
              sharedConnection.unsubscribe();
          }
      };
      return RefCountSubscriber;
  }(Subscriber));

  /** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
  var ConnectableObservable = /*@__PURE__*/ (function (_super) {
      __extends(ConnectableObservable, _super);
      function ConnectableObservable(source, subjectFactory) {
          var _this = _super.call(this) || this;
          _this.source = source;
          _this.subjectFactory = subjectFactory;
          _this._refCount = 0;
          _this._isComplete = false;
          return _this;
      }
      ConnectableObservable.prototype._subscribe = function (subscriber) {
          return this.getSubject().subscribe(subscriber);
      };
      ConnectableObservable.prototype.getSubject = function () {
          var subject = this._subject;
          if (!subject || subject.isStopped) {
              this._subject = this.subjectFactory();
          }
          return this._subject;
      };
      ConnectableObservable.prototype.connect = function () {
          var connection = this._connection;
          if (!connection) {
              this._isComplete = false;
              connection = this._connection = new Subscription();
              connection.add(this.source
                  .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
              if (connection.closed) {
                  this._connection = null;
                  connection = Subscription.EMPTY;
              }
          }
          return connection;
      };
      ConnectableObservable.prototype.refCount = function () {
          return refCount()(this);
      };
      return ConnectableObservable;
  }(Observable));
  var connectableProto = ConnectableObservable.prototype;
  var connectableObservableDescriptor = {
      operator: { value: null },
      _refCount: { value: 0, writable: true },
      _subject: { value: null, writable: true },
      _connection: { value: null, writable: true },
      _subscribe: { value: connectableProto._subscribe },
      _isComplete: { value: connectableProto._isComplete, writable: true },
      getSubject: { value: connectableProto.getSubject },
      connect: { value: connectableProto.connect },
      refCount: { value: connectableProto.refCount }
  };
  var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(ConnectableSubscriber, _super);
      function ConnectableSubscriber(destination, connectable) {
          var _this = _super.call(this, destination) || this;
          _this.connectable = connectable;
          return _this;
      }
      ConnectableSubscriber.prototype._error = function (err) {
          this._unsubscribe();
          _super.prototype._error.call(this, err);
      };
      ConnectableSubscriber.prototype._complete = function () {
          this.connectable._isComplete = true;
          this._unsubscribe();
          _super.prototype._complete.call(this);
      };
      ConnectableSubscriber.prototype._unsubscribe = function () {
          var connectable = this.connectable;
          if (connectable) {
              this.connectable = null;
              var connection = connectable._connection;
              connectable._refCount = 0;
              connectable._subject = null;
              connectable._connection = null;
              if (connection) {
                  connection.unsubscribe();
              }
          }
      };
      return ConnectableSubscriber;
  }(SubjectSubscriber));
  var RefCountSubscriber$1 = /*@__PURE__*/ (function (_super) {
      __extends(RefCountSubscriber, _super);
      function RefCountSubscriber(destination, connectable) {
          var _this = _super.call(this, destination) || this;
          _this.connectable = connectable;
          return _this;
      }
      RefCountSubscriber.prototype._unsubscribe = function () {
          var connectable = this.connectable;
          if (!connectable) {
              this.connection = null;
              return;
          }
          this.connectable = null;
          var refCount$$1 = connectable._refCount;
          if (refCount$$1 <= 0) {
              this.connection = null;
              return;
          }
          connectable._refCount = refCount$$1 - 1;
          if (refCount$$1 > 1) {
              this.connection = null;
              return;
          }
          var connection = this.connection;
          var sharedConnection = connectable._connection;
          this.connection = null;
          if (sharedConnection && (!connection || sharedConnection === connection)) {
              sharedConnection.unsubscribe();
          }
      };
      return RefCountSubscriber;
  }(Subscriber));

  /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */
  var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
      __extends(GroupBySubscriber, _super);
      function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
          var _this = _super.call(this, destination) || this;
          _this.keySelector = keySelector;
          _this.elementSelector = elementSelector;
          _this.durationSelector = durationSelector;
          _this.subjectSelector = subjectSelector;
          _this.groups = null;
          _this.attemptedToUnsubscribe = false;
          _this.count = 0;
          return _this;
      }
      GroupBySubscriber.prototype._next = function (value) {
          var key;
          try {
              key = this.keySelector(value);
          }
          catch (err) {
              this.error(err);
              return;
          }
          this._group(value, key);
      };
      GroupBySubscriber.prototype._group = function (value, key) {
          var groups = this.groups;
          if (!groups) {
              groups = this.groups = new Map();
          }
          var group = groups.get(key);
          var element;
          if (this.elementSelector) {
              try {
                  element = this.elementSelector(value);
              }
              catch (err) {
                  this.error(err);
              }
          }
          else {
              element = value;
          }
          if (!group) {
              group = (this.subjectSelector ? this.subjectSelector() : new Subject());
              groups.set(key, group);
              var groupedObservable = new GroupedObservable(key, group, this);
              this.destination.next(groupedObservable);
              if (this.durationSelector) {
                  var duration = void 0;
                  try {
                      duration = this.durationSelector(new GroupedObservable(key, group));
                  }
                  catch (err) {
                      this.error(err);
                      return;
                  }
                  this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
              }
          }
          if (!group.closed) {
              group.next(element);
          }
      };
      GroupBySubscriber.prototype._error = function (err) {
          var groups = this.groups;
          if (groups) {
              groups.forEach(function (group, key) {
                  group.error(err);
              });
              groups.clear();
          }
          this.destination.error(err);
      };
      GroupBySubscriber.prototype._complete = function () {
          var groups = this.groups;
          if (groups) {
              groups.forEach(function (group, key) {
                  group.complete();
              });
              groups.clear();
          }
          this.destination.complete();
      };
      GroupBySubscriber.prototype.removeGroup = function (key) {
          this.groups.delete(key);
      };
      GroupBySubscriber.prototype.unsubscribe = function () {
          if (!this.closed) {
              this.attemptedToUnsubscribe = true;
              if (this.count === 0) {
                  _super.prototype.unsubscribe.call(this);
              }
          }
      };
      return GroupBySubscriber;
  }(Subscriber));
  var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(GroupDurationSubscriber, _super);
      function GroupDurationSubscriber(key, group, parent) {
          var _this = _super.call(this, group) || this;
          _this.key = key;
          _this.group = group;
          _this.parent = parent;
          return _this;
      }
      GroupDurationSubscriber.prototype._next = function (value) {
          this.complete();
      };
      GroupDurationSubscriber.prototype._unsubscribe = function () {
          var _a = this, parent = _a.parent, key = _a.key;
          this.key = this.parent = null;
          if (parent) {
              parent.removeGroup(key);
          }
      };
      return GroupDurationSubscriber;
  }(Subscriber));
  var GroupedObservable = /*@__PURE__*/ (function (_super) {
      __extends(GroupedObservable, _super);
      function GroupedObservable(key, groupSubject, refCountSubscription) {
          var _this = _super.call(this) || this;
          _this.key = key;
          _this.groupSubject = groupSubject;
          _this.refCountSubscription = refCountSubscription;
          return _this;
      }
      GroupedObservable.prototype._subscribe = function (subscriber) {
          var subscription = new Subscription();
          var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
          if (refCountSubscription && !refCountSubscription.closed) {
              subscription.add(new InnerRefCountSubscription(refCountSubscription));
          }
          subscription.add(groupSubject.subscribe(subscriber));
          return subscription;
      };
      return GroupedObservable;
  }(Observable));
  var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
      __extends(InnerRefCountSubscription, _super);
      function InnerRefCountSubscription(parent) {
          var _this = _super.call(this) || this;
          _this.parent = parent;
          parent.count++;
          return _this;
      }
      InnerRefCountSubscription.prototype.unsubscribe = function () {
          var parent = this.parent;
          if (!parent.closed && !this.closed) {
              _super.prototype.unsubscribe.call(this);
              parent.count -= 1;
              if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                  parent.unsubscribe();
              }
          }
      };
      return InnerRefCountSubscription;
  }(Subscription));

  /** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
  var BehaviorSubject = /*@__PURE__*/ (function (_super) {
      __extends(BehaviorSubject, _super);
      function BehaviorSubject(_value) {
          var _this = _super.call(this) || this;
          _this._value = _value;
          return _this;
      }
      Object.defineProperty(BehaviorSubject.prototype, "value", {
          get: function () {
              return this.getValue();
          },
          enumerable: true,
          configurable: true
      });
      BehaviorSubject.prototype._subscribe = function (subscriber) {
          var subscription = _super.prototype._subscribe.call(this, subscriber);
          if (subscription && !subscription.closed) {
              subscriber.next(this._value);
          }
          return subscription;
      };
      BehaviorSubject.prototype.getValue = function () {
          if (this.hasError) {
              throw this.thrownError;
          }
          else if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          else {
              return this._value;
          }
      };
      BehaviorSubject.prototype.next = function (value) {
          _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject;
  }(Subject));

  /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
  var Action = /*@__PURE__*/ (function (_super) {
      __extends(Action, _super);
      function Action(scheduler, work) {
          return _super.call(this) || this;
      }
      Action.prototype.schedule = function (state, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          return this;
      };
      return Action;
  }(Subscription));

  /** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
  var AsyncAction = /*@__PURE__*/ (function (_super) {
      __extends(AsyncAction, _super);
      function AsyncAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          _this.pending = false;
          return _this;
      }
      AsyncAction.prototype.schedule = function (state, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (this.closed) {
              return this;
          }
          this.state = state;
          var id = this.id;
          var scheduler = this.scheduler;
          if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
          }
          this.pending = true;
          this.delay = delay;
          this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
          return this;
      };
      AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          return setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
          }
          clearInterval(id);
          return undefined;
      };
      AsyncAction.prototype.execute = function (state, delay) {
          if (this.closed) {
              return new Error('executing a cancelled action');
          }
          this.pending = false;
          var error = this._execute(state, delay);
          if (error) {
              return error;
          }
          else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
          }
      };
      AsyncAction.prototype._execute = function (state, delay) {
          var errored = false;
          var errorValue = undefined;
          try {
              this.work(state);
          }
          catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
          }
          if (errored) {
              this.unsubscribe();
              return errorValue;
          }
      };
      AsyncAction.prototype._unsubscribe = function () {
          var id = this.id;
          var scheduler = this.scheduler;
          var actions = scheduler.actions;
          var index = actions.indexOf(this);
          this.work = null;
          this.state = null;
          this.pending = false;
          this.scheduler = null;
          if (index !== -1) {
              actions.splice(index, 1);
          }
          if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
      };
      return AsyncAction;
  }(Action));

  /** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
  var QueueAction = /*@__PURE__*/ (function (_super) {
      __extends(QueueAction, _super);
      function QueueAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          return _this;
      }
      QueueAction.prototype.schedule = function (state, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (delay > 0) {
              return _super.prototype.schedule.call(this, state, delay);
          }
          this.delay = delay;
          this.state = state;
          this.scheduler.flush(this);
          return this;
      };
      QueueAction.prototype.execute = function (state, delay) {
          return (delay > 0 || this.closed) ?
              _super.prototype.execute.call(this, state, delay) :
              this._execute(state, delay);
      };
      QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
              return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
          }
          return scheduler.flush(this);
      };
      return QueueAction;
  }(AsyncAction));

  var Scheduler = /*@__PURE__*/ (function () {
      function Scheduler(SchedulerAction, now) {
          if (now === void 0) {
              now = Scheduler.now;
          }
          this.SchedulerAction = SchedulerAction;
          this.now = now;
      }
      Scheduler.prototype.schedule = function (work, delay, state) {
          if (delay === void 0) {
              delay = 0;
          }
          return new this.SchedulerAction(this, work).schedule(state, delay);
      };
      Scheduler.now = function () { return Date.now(); };
      return Scheduler;
  }());

  /** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
  var AsyncScheduler = /*@__PURE__*/ (function (_super) {
      __extends(AsyncScheduler, _super);
      function AsyncScheduler(SchedulerAction, now) {
          if (now === void 0) {
              now = Scheduler.now;
          }
          var _this = _super.call(this, SchedulerAction, function () {
              if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                  return AsyncScheduler.delegate.now();
              }
              else {
                  return now();
              }
          }) || this;
          _this.actions = [];
          _this.active = false;
          _this.scheduled = undefined;
          return _this;
      }
      AsyncScheduler.prototype.schedule = function (work, delay, state) {
          if (delay === void 0) {
              delay = 0;
          }
          if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
              return AsyncScheduler.delegate.schedule(work, delay, state);
          }
          else {
              return _super.prototype.schedule.call(this, work, delay, state);
          }
      };
      AsyncScheduler.prototype.flush = function (action) {
          var actions = this.actions;
          if (this.active) {
              actions.push(action);
              return;
          }
          var error;
          this.active = true;
          do {
              if (error = action.execute(action.state, action.delay)) {
                  break;
              }
          } while (action = actions.shift());
          this.active = false;
          if (error) {
              while (action = actions.shift()) {
                  action.unsubscribe();
              }
              throw error;
          }
      };
      return AsyncScheduler;
  }(Scheduler));

  /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
  var QueueScheduler = /*@__PURE__*/ (function (_super) {
      __extends(QueueScheduler, _super);
      function QueueScheduler() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return QueueScheduler;
  }(AsyncScheduler));

  /** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
  var queue = /*@__PURE__*/ new QueueScheduler(QueueAction);

  /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
  var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
  function empty$1(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : EMPTY;
  }
  function emptyScheduled(scheduler) {
      return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isScheduler(value) {
      return value && typeof value.schedule === 'function';
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var subscribeToArray = function (array) {
      return function (subscriber) {
          for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
              subscriber.next(array[i]);
          }
          subscriber.complete();
      };
  };

  /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
  function scheduleArray(input, scheduler) {
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          var i = 0;
          sub.add(scheduler.schedule(function () {
              if (i === input.length) {
                  subscriber.complete();
                  return;
              }
              subscriber.next(input[i++]);
              if (!subscriber.closed) {
                  sub.add(this.schedule());
              }
          }));
          return sub;
      });
  }

  /** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
  function fromArray(input, scheduler) {
      if (!scheduler) {
          return new Observable(subscribeToArray(input));
      }
      else {
          return scheduleArray(input, scheduler);
      }
  }

  /** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
  function of() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      var scheduler = args[args.length - 1];
      if (isScheduler(scheduler)) {
          args.pop();
          return scheduleArray(args, scheduler);
      }
      else {
          return fromArray(args);
      }
  }

  /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
  function throwError(error, scheduler) {
      if (!scheduler) {
          return new Observable(function (subscriber) { return subscriber.error(error); });
      }
      else {
          return new Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
      }
  }
  function dispatch(_a) {
      var error = _a.error, subscriber = _a.subscriber;
      subscriber.error(error);
  }

  /** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
  var NotificationKind;
  /*@__PURE__*/ (function (NotificationKind) {
      NotificationKind["NEXT"] = "N";
      NotificationKind["ERROR"] = "E";
      NotificationKind["COMPLETE"] = "C";
  })(NotificationKind || (NotificationKind = {}));
  var Notification = /*@__PURE__*/ (function () {
      function Notification(kind, value, error) {
          this.kind = kind;
          this.value = value;
          this.error = error;
          this.hasValue = kind === 'N';
      }
      Notification.prototype.observe = function (observer) {
          switch (this.kind) {
              case 'N':
                  return observer.next && observer.next(this.value);
              case 'E':
                  return observer.error && observer.error(this.error);
              case 'C':
                  return observer.complete && observer.complete();
          }
      };
      Notification.prototype.do = function (next, error, complete) {
          var kind = this.kind;
          switch (kind) {
              case 'N':
                  return next && next(this.value);
              case 'E':
                  return error && error(this.error);
              case 'C':
                  return complete && complete();
          }
      };
      Notification.prototype.accept = function (nextOrObserver, error, complete) {
          if (nextOrObserver && typeof nextOrObserver.next === 'function') {
              return this.observe(nextOrObserver);
          }
          else {
              return this.do(nextOrObserver, error, complete);
          }
      };
      Notification.prototype.toObservable = function () {
          var kind = this.kind;
          switch (kind) {
              case 'N':
                  return of(this.value);
              case 'E':
                  return throwError(this.error);
              case 'C':
                  return empty$1();
          }
          throw new Error('unexpected notification kind value');
      };
      Notification.createNext = function (value) {
          if (typeof value !== 'undefined') {
              return new Notification('N', value);
          }
          return Notification.undefinedValueNotification;
      };
      Notification.createError = function (err) {
          return new Notification('E', undefined, err);
      };
      Notification.createComplete = function () {
          return Notification.completeNotification;
      };
      Notification.completeNotification = new Notification('C');
      Notification.undefinedValueNotification = new Notification('N', undefined);
      return Notification;
  }());

  /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
  var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(ObserveOnSubscriber, _super);
      function ObserveOnSubscriber(destination, scheduler, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          var _this = _super.call(this, destination) || this;
          _this.scheduler = scheduler;
          _this.delay = delay;
          return _this;
      }
      ObserveOnSubscriber.dispatch = function (arg) {
          var notification = arg.notification, destination = arg.destination;
          notification.observe(destination);
          this.unsubscribe();
      };
      ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
          var destination = this.destination;
          destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
      };
      ObserveOnSubscriber.prototype._next = function (value) {
          this.scheduleMessage(Notification.createNext(value));
      };
      ObserveOnSubscriber.prototype._error = function (err) {
          this.scheduleMessage(Notification.createError(err));
          this.unsubscribe();
      };
      ObserveOnSubscriber.prototype._complete = function () {
          this.scheduleMessage(Notification.createComplete());
          this.unsubscribe();
      };
      return ObserveOnSubscriber;
  }(Subscriber));
  var ObserveOnMessage = /*@__PURE__*/ (function () {
      function ObserveOnMessage(notification, destination) {
          this.notification = notification;
          this.destination = destination;
      }
      return ObserveOnMessage;
  }());

  /** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
  var ReplaySubject = /*@__PURE__*/ (function (_super) {
      __extends(ReplaySubject, _super);
      function ReplaySubject(bufferSize, windowTime, scheduler) {
          if (bufferSize === void 0) {
              bufferSize = Number.POSITIVE_INFINITY;
          }
          if (windowTime === void 0) {
              windowTime = Number.POSITIVE_INFINITY;
          }
          var _this = _super.call(this) || this;
          _this.scheduler = scheduler;
          _this._events = [];
          _this._infiniteTimeWindow = false;
          _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
          _this._windowTime = windowTime < 1 ? 1 : windowTime;
          if (windowTime === Number.POSITIVE_INFINITY) {
              _this._infiniteTimeWindow = true;
              _this.next = _this.nextInfiniteTimeWindow;
          }
          else {
              _this.next = _this.nextTimeWindow;
          }
          return _this;
      }
      ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
          var _events = this._events;
          _events.push(value);
          if (_events.length > this._bufferSize) {
              _events.shift();
          }
          _super.prototype.next.call(this, value);
      };
      ReplaySubject.prototype.nextTimeWindow = function (value) {
          this._events.push(new ReplayEvent(this._getNow(), value));
          this._trimBufferThenGetEvents();
          _super.prototype.next.call(this, value);
      };
      ReplaySubject.prototype._subscribe = function (subscriber) {
          var _infiniteTimeWindow = this._infiniteTimeWindow;
          var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
          var scheduler = this.scheduler;
          var len = _events.length;
          var subscription;
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          else if (this.isStopped || this.hasError) {
              subscription = Subscription.EMPTY;
          }
          else {
              this.observers.push(subscriber);
              subscription = new SubjectSubscription(this, subscriber);
          }
          if (scheduler) {
              subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
          }
          if (_infiniteTimeWindow) {
              for (var i = 0; i < len && !subscriber.closed; i++) {
                  subscriber.next(_events[i]);
              }
          }
          else {
              for (var i = 0; i < len && !subscriber.closed; i++) {
                  subscriber.next(_events[i].value);
              }
          }
          if (this.hasError) {
              subscriber.error(this.thrownError);
          }
          else if (this.isStopped) {
              subscriber.complete();
          }
          return subscription;
      };
      ReplaySubject.prototype._getNow = function () {
          return (this.scheduler || queue).now();
      };
      ReplaySubject.prototype._trimBufferThenGetEvents = function () {
          var now = this._getNow();
          var _bufferSize = this._bufferSize;
          var _windowTime = this._windowTime;
          var _events = this._events;
          var eventsCount = _events.length;
          var spliceCount = 0;
          while (spliceCount < eventsCount) {
              if ((now - _events[spliceCount].time) < _windowTime) {
                  break;
              }
              spliceCount++;
          }
          if (eventsCount > _bufferSize) {
              spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
          }
          if (spliceCount > 0) {
              _events.splice(0, spliceCount);
          }
          return _events;
      };
      return ReplaySubject;
  }(Subject));
  var ReplayEvent = /*@__PURE__*/ (function () {
      function ReplayEvent(time, value) {
          this.time = time;
          this.value = value;
      }
      return ReplayEvent;
  }());

  /** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
  var AsyncSubject = /*@__PURE__*/ (function (_super) {
      __extends(AsyncSubject, _super);
      function AsyncSubject() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.value = null;
          _this.hasNext = false;
          _this.hasCompleted = false;
          return _this;
      }
      AsyncSubject.prototype._subscribe = function (subscriber) {
          if (this.hasError) {
              subscriber.error(this.thrownError);
              return Subscription.EMPTY;
          }
          else if (this.hasCompleted && this.hasNext) {
              subscriber.next(this.value);
              subscriber.complete();
              return Subscription.EMPTY;
          }
          return _super.prototype._subscribe.call(this, subscriber);
      };
      AsyncSubject.prototype.next = function (value) {
          if (!this.hasCompleted) {
              this.value = value;
              this.hasNext = true;
          }
      };
      AsyncSubject.prototype.error = function (error) {
          if (!this.hasCompleted) {
              _super.prototype.error.call(this, error);
          }
      };
      AsyncSubject.prototype.complete = function () {
          this.hasCompleted = true;
          if (this.hasNext) {
              _super.prototype.next.call(this, this.value);
          }
          _super.prototype.complete.call(this);
      };
      return AsyncSubject;
  }(Subject));

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var nextHandle = 1;
  var tasksByHandle = {};
  function runIfPresent(handle) {
      var cb = tasksByHandle[handle];
      if (cb) {
          cb();
      }
  }
  var Immediate = {
      setImmediate: function (cb) {
          var handle = nextHandle++;
          tasksByHandle[handle] = cb;
          Promise.resolve().then(function () { return runIfPresent(handle); });
          return handle;
      },
      clearImmediate: function (handle) {
          delete tasksByHandle[handle];
      },
  };

  /** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
  var AsapAction = /*@__PURE__*/ (function (_super) {
      __extends(AsapAction, _super);
      function AsapAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          return _this;
      }
      AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (delay !== null && delay > 0) {
              return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
          }
          scheduler.actions.push(this);
          return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
      };
      AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
              return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
          }
          if (scheduler.actions.length === 0) {
              Immediate.clearImmediate(id);
              scheduler.scheduled = undefined;
          }
          return undefined;
      };
      return AsapAction;
  }(AsyncAction));

  /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
  var AsapScheduler = /*@__PURE__*/ (function (_super) {
      __extends(AsapScheduler, _super);
      function AsapScheduler() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      AsapScheduler.prototype.flush = function (action) {
          this.active = true;
          this.scheduled = undefined;
          var actions = this.actions;
          var error;
          var index = -1;
          var count = actions.length;
          action = action || actions.shift();
          do {
              if (error = action.execute(action.state, action.delay)) {
                  break;
              }
          } while (++index < count && (action = actions.shift()));
          this.active = false;
          if (error) {
              while (++index < count && (action = actions.shift())) {
                  action.unsubscribe();
              }
              throw error;
          }
      };
      return AsapScheduler;
  }(AsyncScheduler));

  /** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
  var asap = /*@__PURE__*/ new AsapScheduler(AsapAction);

  /** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
  var async = /*@__PURE__*/ new AsyncScheduler(AsyncAction);

  /** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
  var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
      __extends(AnimationFrameAction, _super);
      function AnimationFrameAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          return _this;
      }
      AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (delay !== null && delay > 0) {
              return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
          }
          scheduler.actions.push(this);
          return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
      };
      AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
              return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
          }
          if (scheduler.actions.length === 0) {
              cancelAnimationFrame(id);
              scheduler.scheduled = undefined;
          }
          return undefined;
      };
      return AnimationFrameAction;
  }(AsyncAction));

  /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
  var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
      __extends(AnimationFrameScheduler, _super);
      function AnimationFrameScheduler() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      AnimationFrameScheduler.prototype.flush = function (action) {
          this.active = true;
          this.scheduled = undefined;
          var actions = this.actions;
          var error;
          var index = -1;
          var count = actions.length;
          action = action || actions.shift();
          do {
              if (error = action.execute(action.state, action.delay)) {
                  break;
              }
          } while (++index < count && (action = actions.shift()));
          this.active = false;
          if (error) {
              while (++index < count && (action = actions.shift())) {
                  action.unsubscribe();
              }
              throw error;
          }
      };
      return AnimationFrameScheduler;
  }(AsyncScheduler));

  /** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
  var animationFrame = /*@__PURE__*/ new AnimationFrameScheduler(AnimationFrameAction);

  /** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
  var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
      __extends(VirtualTimeScheduler, _super);
      function VirtualTimeScheduler(SchedulerAction, maxFrames) {
          if (SchedulerAction === void 0) {
              SchedulerAction = VirtualAction;
          }
          if (maxFrames === void 0) {
              maxFrames = Number.POSITIVE_INFINITY;
          }
          var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
          _this.maxFrames = maxFrames;
          _this.frame = 0;
          _this.index = -1;
          return _this;
      }
      VirtualTimeScheduler.prototype.flush = function () {
          var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
          var error, action;
          while ((action = actions[0]) && action.delay <= maxFrames) {
              actions.shift();
              this.frame = action.delay;
              if (error = action.execute(action.state, action.delay)) {
                  break;
              }
          }
          if (error) {
              while (action = actions.shift()) {
                  action.unsubscribe();
              }
              throw error;
          }
      };
      VirtualTimeScheduler.frameTimeFactor = 10;
      return VirtualTimeScheduler;
  }(AsyncScheduler));
  var VirtualAction = /*@__PURE__*/ (function (_super) {
      __extends(VirtualAction, _super);
      function VirtualAction(scheduler, work, index) {
          if (index === void 0) {
              index = scheduler.index += 1;
          }
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          _this.index = index;
          _this.active = true;
          _this.index = scheduler.index = index;
          return _this;
      }
      VirtualAction.prototype.schedule = function (state, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (!this.id) {
              return _super.prototype.schedule.call(this, state, delay);
          }
          this.active = false;
          var action = new VirtualAction(this.scheduler, this.work);
          this.add(action);
          return action.schedule(state, delay);
      };
      VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          this.delay = scheduler.frame + delay;
          var actions = scheduler.actions;
          actions.push(this);
          actions.sort(VirtualAction.sortActions);
          return true;
      };
      VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          return undefined;
      };
      VirtualAction.prototype._execute = function (state, delay) {
          if (this.active === true) {
              return _super.prototype._execute.call(this, state, delay);
          }
      };
      VirtualAction.sortActions = function (a, b) {
          if (a.delay === b.delay) {
              if (a.index === b.index) {
                  return 0;
              }
              else if (a.index > b.index) {
                  return 1;
              }
              else {
                  return -1;
              }
          }
          else if (a.delay > b.delay) {
              return 1;
          }
          else {
              return -1;
          }
      };
      return VirtualAction;
  }(AsyncAction));

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function identity(x) {
      return x;
  }

  /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  function map(project, thisArg) {
      return function mapOperation(source) {
          if (typeof project !== 'function') {
              throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          }
          return source.lift(new MapOperator(project, thisArg));
      };
  }
  var MapOperator = /*@__PURE__*/ (function () {
      function MapOperator(project, thisArg) {
          this.project = project;
          this.thisArg = thisArg;
      }
      MapOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator;
  }());
  var MapSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(MapSubscriber, _super);
      function MapSubscriber(destination, project, thisArg) {
          var _this = _super.call(this, destination) || this;
          _this.project = project;
          _this.count = 0;
          _this.thisArg = thisArg || _this;
          return _this;
      }
      MapSubscriber.prototype._next = function (value) {
          var result;
          try {
              result = this.project.call(this.thisArg, value, this.count++);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.destination.next(result);
      };
      return MapSubscriber;
  }(Subscriber));

  /** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  var OuterSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(OuterSubscriber, _super);
      function OuterSubscriber() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.destination.next(innerValue);
      };
      OuterSubscriber.prototype.notifyError = function (error, innerSub) {
          this.destination.error(error);
      };
      OuterSubscriber.prototype.notifyComplete = function (innerSub) {
          this.destination.complete();
      };
      return OuterSubscriber;
  }(Subscriber));

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  var InnerSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(InnerSubscriber, _super);
      function InnerSubscriber(parent, outerValue, outerIndex) {
          var _this = _super.call(this) || this;
          _this.parent = parent;
          _this.outerValue = outerValue;
          _this.outerIndex = outerIndex;
          _this.index = 0;
          return _this;
      }
      InnerSubscriber.prototype._next = function (value) {
          this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
      };
      InnerSubscriber.prototype._error = function (error) {
          this.parent.notifyError(error, this);
          this.unsubscribe();
      };
      InnerSubscriber.prototype._complete = function () {
          this.parent.notifyComplete(this);
          this.unsubscribe();
      };
      return InnerSubscriber;
  }(Subscriber));

  /** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
  var subscribeToPromise = function (promise) {
      return function (subscriber) {
          promise.then(function (value) {
              if (!subscriber.closed) {
                  subscriber.next(value);
                  subscriber.complete();
              }
          }, function (err) { return subscriber.error(err); })
              .then(null, hostReportError);
          return subscriber;
      };
  };

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function getSymbolIterator() {
      if (typeof Symbol !== 'function' || !Symbol.iterator) {
          return '@@iterator';
      }
      return Symbol.iterator;
  }
  var iterator = /*@__PURE__*/ getSymbolIterator();

  /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
  var subscribeToIterable = function (iterable) {
      return function (subscriber) {
          var iterator$$1 = iterable[iterator]();
          do {
              var item = iterator$$1.next();
              if (item.done) {
                  subscriber.complete();
                  break;
              }
              subscriber.next(item.value);
              if (subscriber.closed) {
                  break;
              }
          } while (true);
          if (typeof iterator$$1.return === 'function') {
              subscriber.add(function () {
                  if (iterator$$1.return) {
                      iterator$$1.return();
                  }
              });
          }
          return subscriber;
      };
  };

  /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
  var subscribeToObservable = function (obj) {
      return function (subscriber) {
          var obs = obj[observable]();
          if (typeof obs.subscribe !== 'function') {
              throw new TypeError('Provided object does not correctly implement Symbol.observable');
          }
          else {
              return obs.subscribe(subscriber);
          }
      };
  };

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isPromise(value) {
      return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
  }

  /** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
  var subscribeTo = function (result) {
      if (!!result && typeof result[observable] === 'function') {
          return subscribeToObservable(result);
      }
      else if (isArrayLike(result)) {
          return subscribeToArray(result);
      }
      else if (isPromise(result)) {
          return subscribeToPromise(result);
      }
      else if (!!result && typeof result[iterator] === 'function') {
          return subscribeToIterable(result);
      }
      else {
          var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
          var msg = "You provided " + value + " where a stream was expected."
              + ' You can provide an Observable, Promise, Array, or Iterable.';
          throw new TypeError(msg);
      }
  };

  /** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
  function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
      if (destination === void 0) {
          destination = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
      }
      if (destination.closed) {
          return undefined;
      }
      if (result instanceof Observable) {
          return result.subscribe(destination);
      }
      return subscribeTo(result)(destination);
  }

  /** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
  var NONE = {};
  var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(CombineLatestSubscriber, _super);
      function CombineLatestSubscriber(destination, resultSelector) {
          var _this = _super.call(this, destination) || this;
          _this.resultSelector = resultSelector;
          _this.active = 0;
          _this.values = [];
          _this.observables = [];
          return _this;
      }
      CombineLatestSubscriber.prototype._next = function (observable) {
          this.values.push(NONE);
          this.observables.push(observable);
      };
      CombineLatestSubscriber.prototype._complete = function () {
          var observables = this.observables;
          var len = observables.length;
          if (len === 0) {
              this.destination.complete();
          }
          else {
              this.active = len;
              this.toRespond = len;
              for (var i = 0; i < len; i++) {
                  var observable = observables[i];
                  this.add(subscribeToResult(this, observable, observable, i));
              }
          }
      };
      CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
          if ((this.active -= 1) === 0) {
              this.destination.complete();
          }
      };
      CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          var values = this.values;
          var oldVal = values[outerIndex];
          var toRespond = !this.toRespond
              ? 0
              : oldVal === NONE ? --this.toRespond : this.toRespond;
          values[outerIndex] = innerValue;
          if (toRespond === 0) {
              if (this.resultSelector) {
                  this._tryResultSelector(values);
              }
              else {
                  this.destination.next(values.slice());
              }
          }
      };
      CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
          var result;
          try {
              result = this.resultSelector.apply(this, values);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.destination.next(result);
      };
      return CombineLatestSubscriber;
  }(OuterSubscriber));

  /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
  function scheduleObservable(input, scheduler) {
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          sub.add(scheduler.schedule(function () {
              var observable$$1 = input[observable]();
              sub.add(observable$$1.subscribe({
                  next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                  error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                  complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
              }));
          }));
          return sub;
      });
  }

  /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
  function schedulePromise(input, scheduler) {
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          sub.add(scheduler.schedule(function () {
              return input.then(function (value) {
                  sub.add(scheduler.schedule(function () {
                      subscriber.next(value);
                      sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                  }));
              }, function (err) {
                  sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
              });
          }));
          return sub;
      });
  }

  /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
  function scheduleIterable(input, scheduler) {
      if (!input) {
          throw new Error('Iterable cannot be null');
      }
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          var iterator$$1;
          sub.add(function () {
              if (iterator$$1 && typeof iterator$$1.return === 'function') {
                  iterator$$1.return();
              }
          });
          sub.add(scheduler.schedule(function () {
              iterator$$1 = input[iterator]();
              sub.add(scheduler.schedule(function () {
                  if (subscriber.closed) {
                      return;
                  }
                  var value;
                  var done;
                  try {
                      var result = iterator$$1.next();
                      value = result.value;
                      done = result.done;
                  }
                  catch (err) {
                      subscriber.error(err);
                      return;
                  }
                  if (done) {
                      subscriber.complete();
                  }
                  else {
                      subscriber.next(value);
                      this.schedule();
                  }
              }));
          }));
          return sub;
      });
  }

  /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
  function isInteropObservable(input) {
      return input && typeof input[observable] === 'function';
  }

  /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
  function isIterable(input) {
      return input && typeof input[iterator] === 'function';
  }

  /** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
  function scheduled(input, scheduler) {
      if (input != null) {
          if (isInteropObservable(input)) {
              return scheduleObservable(input, scheduler);
          }
          else if (isPromise(input)) {
              return schedulePromise(input, scheduler);
          }
          else if (isArrayLike(input)) {
              return scheduleArray(input, scheduler);
          }
          else if (isIterable(input) || typeof input === 'string') {
              return scheduleIterable(input, scheduler);
          }
      }
      throw new TypeError((input !== null && typeof input || input) + ' is not observable');
  }

  /** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
  function from(input, scheduler) {
      if (!scheduler) {
          if (input instanceof Observable) {
              return input;
          }
          return new Observable(subscribeTo(input));
      }
      else {
          return scheduled(input, scheduler);
      }
  }

  /** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
  function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
      }
      if (typeof resultSelector === 'function') {
          return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
      }
      else if (typeof resultSelector === 'number') {
          concurrent = resultSelector;
      }
      return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
  }
  var MergeMapOperator = /*@__PURE__*/ (function () {
      function MergeMapOperator(project, concurrent) {
          if (concurrent === void 0) {
              concurrent = Number.POSITIVE_INFINITY;
          }
          this.project = project;
          this.concurrent = concurrent;
      }
      MergeMapOperator.prototype.call = function (observer, source) {
          return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
      };
      return MergeMapOperator;
  }());
  var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(MergeMapSubscriber, _super);
      function MergeMapSubscriber(destination, project, concurrent) {
          if (concurrent === void 0) {
              concurrent = Number.POSITIVE_INFINITY;
          }
          var _this = _super.call(this, destination) || this;
          _this.project = project;
          _this.concurrent = concurrent;
          _this.hasCompleted = false;
          _this.buffer = [];
          _this.active = 0;
          _this.index = 0;
          return _this;
      }
      MergeMapSubscriber.prototype._next = function (value) {
          if (this.active < this.concurrent) {
              this._tryNext(value);
          }
          else {
              this.buffer.push(value);
          }
      };
      MergeMapSubscriber.prototype._tryNext = function (value) {
          var result;
          var index = this.index++;
          try {
              result = this.project(value, index);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.active++;
          this._innerSub(result, value, index);
      };
      MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
          var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
          var destination = this.destination;
          destination.add(innerSubscriber);
          subscribeToResult(this, ish, value, index, innerSubscriber);
      };
      MergeMapSubscriber.prototype._complete = function () {
          this.hasCompleted = true;
          if (this.active === 0 && this.buffer.length === 0) {
              this.destination.complete();
          }
          this.unsubscribe();
      };
      MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.destination.next(innerValue);
      };
      MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
          var buffer = this.buffer;
          this.remove(innerSub);
          this.active--;
          if (buffer.length > 0) {
              this._next(buffer.shift());
          }
          else if (this.active === 0 && this.hasCompleted) {
              this.destination.complete();
          }
      };
      return MergeMapSubscriber;
  }(OuterSubscriber));

  /** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
  function mergeAll(concurrent) {
      if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
      }
      return mergeMap(identity, concurrent);
  }

  /** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
  function concatAll() {
      return mergeAll(1);
  }

  /** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */
  function concat() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i] = arguments[_i];
      }
      return concatAll()(of.apply(void 0, observables));
  }

  /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
  var NEVER = /*@__PURE__*/ new Observable(noop);

  /** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  var FilterSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(FilterSubscriber, _super);
      function FilterSubscriber(destination, predicate, thisArg) {
          var _this = _super.call(this, destination) || this;
          _this.predicate = predicate;
          _this.thisArg = thisArg;
          _this.count = 0;
          return _this;
      }
      FilterSubscriber.prototype._next = function (value) {
          var result;
          try {
              result = this.predicate.call(this.thisArg, value, this.count++);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          if (result) {
              this.destination.next(value);
          }
      };
      return FilterSubscriber;
  }(Subscriber));

  /** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */

  /** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
  var RaceSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(RaceSubscriber, _super);
      function RaceSubscriber(destination) {
          var _this = _super.call(this, destination) || this;
          _this.hasFirst = false;
          _this.observables = [];
          _this.subscriptions = [];
          return _this;
      }
      RaceSubscriber.prototype._next = function (observable) {
          this.observables.push(observable);
      };
      RaceSubscriber.prototype._complete = function () {
          var observables = this.observables;
          var len = observables.length;
          if (len === 0) {
              this.destination.complete();
          }
          else {
              for (var i = 0; i < len && !this.hasFirst; i++) {
                  var observable = observables[i];
                  var subscription = subscribeToResult(this, observable, observable, i);
                  if (this.subscriptions) {
                      this.subscriptions.push(subscription);
                  }
                  this.add(subscription);
              }
              this.observables = null;
          }
      };
      RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          if (!this.hasFirst) {
              this.hasFirst = true;
              for (var i = 0; i < this.subscriptions.length; i++) {
                  if (i !== outerIndex) {
                      var subscription = this.subscriptions[i];
                      subscription.unsubscribe();
                      this.remove(subscription);
                  }
              }
              this.subscriptions = null;
          }
          this.destination.next(innerValue);
      };
      return RaceSubscriber;
  }(OuterSubscriber));

  /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */

  /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */

  /** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */
  function zip() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i] = arguments[_i];
      }
      var resultSelector = observables[observables.length - 1];
      if (typeof resultSelector === 'function') {
          observables.pop();
      }
      return fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
  }
  var ZipOperator = /*@__PURE__*/ (function () {
      function ZipOperator(resultSelector) {
          this.resultSelector = resultSelector;
      }
      ZipOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
      };
      return ZipOperator;
  }());
  var ZipSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(ZipSubscriber, _super);
      function ZipSubscriber(destination, resultSelector, values) {
          if (values === void 0) {
              values = Object.create(null);
          }
          var _this = _super.call(this, destination) || this;
          _this.iterators = [];
          _this.active = 0;
          _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
          _this.values = values;
          return _this;
      }
      ZipSubscriber.prototype._next = function (value) {
          var iterators = this.iterators;
          if (isArray(value)) {
              iterators.push(new StaticArrayIterator(value));
          }
          else if (typeof value[iterator] === 'function') {
              iterators.push(new StaticIterator(value[iterator]()));
          }
          else {
              iterators.push(new ZipBufferIterator(this.destination, this, value));
          }
      };
      ZipSubscriber.prototype._complete = function () {
          var iterators = this.iterators;
          var len = iterators.length;
          this.unsubscribe();
          if (len === 0) {
              this.destination.complete();
              return;
          }
          this.active = len;
          for (var i = 0; i < len; i++) {
              var iterator$$1 = iterators[i];
              if (iterator$$1.stillUnsubscribed) {
                  var destination = this.destination;
                  destination.add(iterator$$1.subscribe(iterator$$1, i));
              }
              else {
                  this.active--;
              }
          }
      };
      ZipSubscriber.prototype.notifyInactive = function () {
          this.active--;
          if (this.active === 0) {
              this.destination.complete();
          }
      };
      ZipSubscriber.prototype.checkIterators = function () {
          var iterators = this.iterators;
          var len = iterators.length;
          var destination = this.destination;
          for (var i = 0; i < len; i++) {
              var iterator$$1 = iterators[i];
              if (typeof iterator$$1.hasValue === 'function' && !iterator$$1.hasValue()) {
                  return;
              }
          }
          var shouldComplete = false;
          var args = [];
          for (var i = 0; i < len; i++) {
              var iterator$$1 = iterators[i];
              var result = iterator$$1.next();
              if (iterator$$1.hasCompleted()) {
                  shouldComplete = true;
              }
              if (result.done) {
                  destination.complete();
                  return;
              }
              args.push(result.value);
          }
          if (this.resultSelector) {
              this._tryresultSelector(args);
          }
          else {
              destination.next(args);
          }
          if (shouldComplete) {
              destination.complete();
          }
      };
      ZipSubscriber.prototype._tryresultSelector = function (args) {
          var result;
          try {
              result = this.resultSelector.apply(this, args);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.destination.next(result);
      };
      return ZipSubscriber;
  }(Subscriber));
  var StaticIterator = /*@__PURE__*/ (function () {
      function StaticIterator(iterator$$1) {
          this.iterator = iterator$$1;
          this.nextResult = iterator$$1.next();
      }
      StaticIterator.prototype.hasValue = function () {
          return true;
      };
      StaticIterator.prototype.next = function () {
          var result = this.nextResult;
          this.nextResult = this.iterator.next();
          return result;
      };
      StaticIterator.prototype.hasCompleted = function () {
          var nextResult = this.nextResult;
          return nextResult && nextResult.done;
      };
      return StaticIterator;
  }());
  var StaticArrayIterator = /*@__PURE__*/ (function () {
      function StaticArrayIterator(array) {
          this.array = array;
          this.index = 0;
          this.length = 0;
          this.length = array.length;
      }
      StaticArrayIterator.prototype[iterator] = function () {
          return this;
      };
      StaticArrayIterator.prototype.next = function (value) {
          var i = this.index++;
          var array = this.array;
          return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
      };
      StaticArrayIterator.prototype.hasValue = function () {
          return this.array.length > this.index;
      };
      StaticArrayIterator.prototype.hasCompleted = function () {
          return this.array.length === this.index;
      };
      return StaticArrayIterator;
  }());
  var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
      __extends(ZipBufferIterator, _super);
      function ZipBufferIterator(destination, parent, observable) {
          var _this = _super.call(this, destination) || this;
          _this.parent = parent;
          _this.observable = observable;
          _this.stillUnsubscribed = true;
          _this.buffer = [];
          _this.isComplete = false;
          return _this;
      }
      ZipBufferIterator.prototype[iterator] = function () {
          return this;
      };
      ZipBufferIterator.prototype.next = function () {
          var buffer = this.buffer;
          if (buffer.length === 0 && this.isComplete) {
              return { value: null, done: true };
          }
          else {
              return { value: buffer.shift(), done: false };
          }
      };
      ZipBufferIterator.prototype.hasValue = function () {
          return this.buffer.length > 0;
      };
      ZipBufferIterator.prototype.hasCompleted = function () {
          return this.buffer.length === 0 && this.isComplete;
      };
      ZipBufferIterator.prototype.notifyComplete = function () {
          if (this.buffer.length > 0) {
              this.isComplete = true;
              this.parent.notifyInactive();
          }
          else {
              this.destination.complete();
          }
      };
      ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.buffer.push(innerValue);
          this.parent.checkIterators();
      };
      ZipBufferIterator.prototype.subscribe = function (value, index) {
          return subscribeToResult(this, this.observable, this, index);
      };
      return ZipBufferIterator;
  }(OuterSubscriber));

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */

  function warning(condition, message) {
    {
      if (condition) {
        return;
      }

      var text = "Warning: " + message;

      if (typeof console !== 'undefined') {
        console.warn(text);
      }

      try {
        throw Error(text);
      } catch (x) {}
    }
  }

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
    this.sub$ = new ReplaySubject();
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

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var __window = typeof window !== 'undefined' && window;
  var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
      self instanceof WorkerGlobalScope && self;
  var __global = typeof global !== 'undefined' && global;
  var _root = __window || __global || __self;
  /*@__PURE__*/ (function () {
      if (!_root) {
          throw /*@__PURE__*/ new Error('RxJS could not find any global context (window, self, global)');
      }
  })();

  /** PURE_IMPORTS_START tslib,_.._util_root,_.._Observable,_.._Subscriber,_.._operators_map PURE_IMPORTS_END */
  function getCORSRequest() {
      if (_root.XMLHttpRequest) {
          return new _root.XMLHttpRequest();
      }
      else if (!!_root.XDomainRequest) {
          return new _root.XDomainRequest();
      }
      else {
          throw new Error('CORS is not supported by your browser');
      }
  }
  function getXMLHttpRequest() {
      if (_root.XMLHttpRequest) {
          return new _root.XMLHttpRequest();
      }
      else {
          var progId = void 0;
          try {
              var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
              for (var i = 0; i < 3; i++) {
                  try {
                      progId = progIds[i];
                      if (new _root.ActiveXObject(progId)) {
                          break;
                      }
                  }
                  catch (e) {
                  }
              }
              return new _root.ActiveXObject(progId);
          }
          catch (e) {
              throw new Error('XMLHttpRequest is not supported by your browser');
          }
      }
  }
  function ajaxGet(url, headers) {
      if (headers === void 0) {
          headers = null;
      }
      return new AjaxObservable({ method: 'GET', url: url, headers: headers });
  }
  function ajaxPost(url, body, headers) {
      return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
  }
  function ajaxDelete(url, headers) {
      return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
  }
  function ajaxPut(url, body, headers) {
      return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
  }
  function ajaxPatch(url, body, headers) {
      return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
  }
  var mapResponse = /*@__PURE__*/ map(function (x, index) { return x.response; });
  function ajaxGetJSON(url, headers) {
      return mapResponse(new AjaxObservable({
          method: 'GET',
          url: url,
          responseType: 'json',
          headers: headers
      }));
  }
  var AjaxObservable = /*@__PURE__*/ (function (_super) {
      __extends(AjaxObservable, _super);
      function AjaxObservable(urlOrRequest) {
          var _this = _super.call(this) || this;
          var request = {
              async: true,
              createXHR: function () {
                  return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
              },
              crossDomain: true,
              withCredentials: false,
              headers: {},
              method: 'GET',
              responseType: 'json',
              timeout: 0
          };
          if (typeof urlOrRequest === 'string') {
              request.url = urlOrRequest;
          }
          else {
              for (var prop in urlOrRequest) {
                  if (urlOrRequest.hasOwnProperty(prop)) {
                      request[prop] = urlOrRequest[prop];
                  }
              }
          }
          _this.request = request;
          return _this;
      }
      AjaxObservable.prototype._subscribe = function (subscriber) {
          return new AjaxSubscriber(subscriber, this.request);
      };
      AjaxObservable.create = (function () {
          var create = function (urlOrRequest) {
              return new AjaxObservable(urlOrRequest);
          };
          create.get = ajaxGet;
          create.post = ajaxPost;
          create.delete = ajaxDelete;
          create.put = ajaxPut;
          create.patch = ajaxPatch;
          create.getJSON = ajaxGetJSON;
          return create;
      })();
      return AjaxObservable;
  }(Observable));
  var AjaxSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(AjaxSubscriber, _super);
      function AjaxSubscriber(destination, request) {
          var _this = _super.call(this, destination) || this;
          _this.request = request;
          _this.done = false;
          var headers = request.headers = request.headers || {};
          if (!request.crossDomain && !_this.getHeader(headers, 'X-Requested-With')) {
              headers['X-Requested-With'] = 'XMLHttpRequest';
          }
          var contentTypeHeader = _this.getHeader(headers, 'Content-Type');
          if (!contentTypeHeader && !(_root.FormData && request.body instanceof _root.FormData) && typeof request.body !== 'undefined') {
              headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
          }
          request.body = _this.serializeBody(request.body, _this.getHeader(request.headers, 'Content-Type'));
          _this.send();
          return _this;
      }
      AjaxSubscriber.prototype.next = function (e) {
          this.done = true;
          var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
          var result;
          try {
              result = new AjaxResponse(e, xhr, request);
          }
          catch (err) {
              return destination.error(err);
          }
          destination.next(result);
      };
      AjaxSubscriber.prototype.send = function () {
          var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
          try {
              var xhr = this.xhr = request.createXHR();
              this.setupEvents(xhr, request);
              if (user) {
                  xhr.open(method, url, async, user, password);
              }
              else {
                  xhr.open(method, url, async);
              }
              if (async) {
                  xhr.timeout = request.timeout;
                  xhr.responseType = request.responseType;
              }
              if ('withCredentials' in xhr) {
                  xhr.withCredentials = !!request.withCredentials;
              }
              this.setHeaders(xhr, headers);
              if (body) {
                  xhr.send(body);
              }
              else {
                  xhr.send();
              }
          }
          catch (err) {
              this.error(err);
          }
      };
      AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
          if (!body || typeof body === 'string') {
              return body;
          }
          else if (_root.FormData && body instanceof _root.FormData) {
              return body;
          }
          if (contentType) {
              var splitIndex = contentType.indexOf(';');
              if (splitIndex !== -1) {
                  contentType = contentType.substring(0, splitIndex);
              }
          }
          switch (contentType) {
              case 'application/x-www-form-urlencoded':
                  return Object.keys(body).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(body[key]); }).join('&');
              case 'application/json':
                  return JSON.stringify(body);
              default:
                  return body;
          }
      };
      AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
          for (var key in headers) {
              if (headers.hasOwnProperty(key)) {
                  xhr.setRequestHeader(key, headers[key]);
              }
          }
      };
      AjaxSubscriber.prototype.getHeader = function (headers, headerName) {
          for (var key in headers) {
              if (key.toLowerCase() === headerName.toLowerCase()) {
                  return headers[key];
              }
          }
          return undefined;
      };
      AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
          var progressSubscriber = request.progressSubscriber;
          function xhrTimeout(e) {
              var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
              if (progressSubscriber) {
                  progressSubscriber.error(e);
              }
              var error;
              try {
                  error = new AjaxTimeoutError(this, request);
              }
              catch (err) {
                  error = err;
              }
              subscriber.error(error);
          }
          xhr.ontimeout = xhrTimeout;
          xhrTimeout.request = request;
          xhrTimeout.subscriber = this;
          xhrTimeout.progressSubscriber = progressSubscriber;
          if (xhr.upload && 'withCredentials' in xhr) {
              if (progressSubscriber) {
                  var xhrProgress_1;
                  xhrProgress_1 = function (e) {
                      var progressSubscriber = xhrProgress_1.progressSubscriber;
                      progressSubscriber.next(e);
                  };
                  if (_root.XDomainRequest) {
                      xhr.onprogress = xhrProgress_1;
                  }
                  else {
                      xhr.upload.onprogress = xhrProgress_1;
                  }
                  xhrProgress_1.progressSubscriber = progressSubscriber;
              }
              var xhrError_1;
              xhrError_1 = function (e) {
                  var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                  if (progressSubscriber) {
                      progressSubscriber.error(e);
                  }
                  var error;
                  try {
                      error = new AjaxError('ajax error', this, request);
                  }
                  catch (err) {
                      error = err;
                  }
                  subscriber.error(error);
              };
              xhr.onerror = xhrError_1;
              xhrError_1.request = request;
              xhrError_1.subscriber = this;
              xhrError_1.progressSubscriber = progressSubscriber;
          }
          function xhrReadyStateChange(e) {
              return;
          }
          xhr.onreadystatechange = xhrReadyStateChange;
          xhrReadyStateChange.subscriber = this;
          xhrReadyStateChange.progressSubscriber = progressSubscriber;
          xhrReadyStateChange.request = request;
          function xhrLoad(e) {
              var _a = xhrLoad, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
              if (this.readyState === 4) {
                  var status_1 = this.status === 1223 ? 204 : this.status;
                  var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                  if (status_1 === 0) {
                      status_1 = response ? 200 : 0;
                  }
                  if (status_1 < 400) {
                      if (progressSubscriber) {
                          progressSubscriber.complete();
                      }
                      subscriber.next(e);
                      subscriber.complete();
                  }
                  else {
                      if (progressSubscriber) {
                          progressSubscriber.error(e);
                      }
                      var error = void 0;
                      try {
                          error = new AjaxError('ajax error ' + status_1, this, request);
                      }
                      catch (err) {
                          error = err;
                      }
                      subscriber.error(error);
                  }
              }
          }
          xhr.onload = xhrLoad;
          xhrLoad.subscriber = this;
          xhrLoad.progressSubscriber = progressSubscriber;
          xhrLoad.request = request;
      };
      AjaxSubscriber.prototype.unsubscribe = function () {
          var _a = this, done = _a.done, xhr = _a.xhr;
          if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
              xhr.abort();
          }
          _super.prototype.unsubscribe.call(this);
      };
      return AjaxSubscriber;
  }(Subscriber));
  var AjaxResponse = /*@__PURE__*/ (function () {
      function AjaxResponse(originalEvent, xhr, request) {
          this.originalEvent = originalEvent;
          this.xhr = xhr;
          this.request = request;
          this.status = xhr.status;
          this.responseType = xhr.responseType || request.responseType;
          this.response = parseXhrResponse(this.responseType, xhr);
      }
      return AjaxResponse;
  }());
  function AjaxErrorImpl(message, xhr, request) {
      Error.call(this);
      this.message = message;
      this.name = 'AjaxError';
      this.xhr = xhr;
      this.request = request;
      this.status = xhr.status;
      this.responseType = xhr.responseType || request.responseType;
      this.response = parseXhrResponse(this.responseType, xhr);
      return this;
  }
  AjaxErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
  var AjaxError = AjaxErrorImpl;
  function parseJson(xhr) {
      if ('response' in xhr) {
          return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
      }
      else {
          return JSON.parse(xhr.responseText || 'null');
      }
  }
  function parseXhrResponse(responseType, xhr) {
      switch (responseType) {
          case 'json':
              return parseJson(xhr);
          case 'xml':
              return xhr.responseXML;
          case 'text':
          default:
              return ('response' in xhr) ? xhr.response : xhr.responseText;
      }
  }
  function AjaxTimeoutErrorImpl(xhr, request) {
      AjaxError.call(this, 'ajax timeout', xhr, request);
      this.name = 'AjaxTimeoutError';
      return this;
  }
  var AjaxTimeoutError = AjaxTimeoutErrorImpl;

  /** PURE_IMPORTS_START _AjaxObservable PURE_IMPORTS_END */
  var ajax = AjaxObservable.create;

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */

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
      this.concat = concat;
      this.zip = zip;
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
        var subject = new ReplaySubject();
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
        this.client = ajax;
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

  var toString$1 = Object.prototype.toString;

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray$1(val) {
    return toString$1.call(val) === '[object Array]';
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString$1.call(val) === '[object ArrayBuffer]';
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
    return toString$1.call(val) === '[object Date]';
  }

  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString$1.call(val) === '[object File]';
  }

  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString$1.call(val) === '[object Blob]';
  }

  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction$1(val) {
    return toString$1.call(val) === '[object Function]';
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

    if (isArray$1(obj)) {
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
  function merge$1(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = merge$1(result[key], val);
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
    isArray: isArray$1,
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
    merge: merge$1,
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


        axios$1({
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

      this.subjects[url] = new ReplaySubject();
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var fastEquals = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory(exports);
  }(commonjsGlobal, function (exports) {
    var HAS_WEAKSET_SUPPORT = typeof WeakSet === 'function';
    var keys = Object.keys;
    /**
     * @function addToCache
     *
     * add object to cache if an object
     *
     * @param value the value to potentially add to cache
     * @param cache the cache to add to
     */
    function addToCache(value, cache) {
        if (value && typeof value === 'object') {
            cache.add(value);
        }
    }
    /**
     * @function hasPair
     *
     * @description
     * does the `pairToMatch` exist in the list of `pairs` provided based on the
     * `isEqual` check
     *
     * @param pairs the pairs to compare against
     * @param pairToMatch the pair to match
     * @param isEqual the equality comparator used
     * @param meta the meta provided
     * @returns does the pair exist in the pairs provided
     */
    function hasPair(pairs, pairToMatch, isEqual, meta) {
        var length = pairs.length;
        var pair;
        for (var index = 0; index < length; index++) {
            pair = pairs[index];
            if (isEqual(pair[0], pairToMatch[0], meta) &&
                isEqual(pair[1], pairToMatch[1], meta)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @function hasValue
     *
     * @description
     * does the `valueToMatch` exist in the list of `values` provided based on the
     * `isEqual` check
     *
     * @param values the values to compare against
     * @param valueToMatch the value to match
     * @param isEqual the equality comparator used
     * @param meta the meta provided
     * @returns does the value exist in the values provided
     */
    function hasValue(values, valueToMatch, isEqual, meta) {
        var length = values.length;
        for (var index = 0; index < length; index++) {
            if (isEqual(values[index], valueToMatch, meta)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @function sameValueZeroEqual
     *
     * @description
     * are the values passed strictly equal or both NaN
     *
     * @param a the value to compare against
     * @param b the value to test
     * @returns are the values equal by the SameValueZero principle
     */
    function sameValueZeroEqual(a, b) {
        return a === b || (a !== a && b !== b);
    }
    /**
     * @function isPlainObject
     *
     * @description
     * is the value a plain object
     *
     * @param value the value to test
     * @returns is the value a plain object
     */
    function isPlainObject(value) {
        return value.constructor === Object || value.constructor == null;
    }
    /**
     * @function isPromiseLike
     *
     * @description
     * is the value promise-like (meaning it is thenable)
     *
     * @param value the value to test
     * @returns is the value promise-like
     */
    function isPromiseLike(value) {
        return !!value && typeof value.then === 'function';
    }
    /**
     * @function isReactElement
     *
     * @description
     * is the value passed a react element
     *
     * @param value the value to test
     * @returns is the value a react element
     */
    function isReactElement(value) {
        return !!(value && value.$$typeof);
    }
    /**
     * @function getNewCacheFallback
     *
     * @description
     * in cases where WeakSet is not supported, creates a new custom
     * object that mimics the necessary API aspects for cache purposes
     *
     * @returns the new cache object
     */
    function getNewCacheFallback() {
        return Object.create({
            _values: [],
            add: function (value) {
                this._values.push(value);
            },
            has: function (value) {
                return this._values.indexOf(value) !== -1;
            },
        });
    }
    /**
     * @function getNewCache
     *
     * @description
     * get a new cache object to prevent circular references
     *
     * @returns the new cache object
     */
    var getNewCache = (function (canUseWeakMap) {
        if (canUseWeakMap) {
            return function _getNewCache() {
                return new WeakSet();
            };
        }
        return getNewCacheFallback;
    })(HAS_WEAKSET_SUPPORT);
    /**
     * @function createCircularEqualCreator
     *
     * @description
     * create a custom isEqual handler specific to circular objects
     *
     * @param [isEqual] the isEqual comparator to use instead of isDeepEqual
     * @returns the method to create the `isEqual` function
     */
    function createCircularEqualCreator(isEqual) {
        return function createCircularEqual(comparator) {
            var _comparator = isEqual || comparator;
            return function circularEqual(a, b, cache) {
                if (cache === void 0) { cache = getNewCache(); }
                var hasA = cache.has(a);
                var hasB = cache.has(b);
                if (hasA || hasB) {
                    return hasA && hasB;
                }
                addToCache(a, cache);
                addToCache(b, cache);
                return _comparator(a, b, cache);
            };
        };
    }
    /**
     * @function toPairs
     *
     * @description
     * convert the map passed into pairs (meaning an array of [key, value] tuples)
     *
     * @param map the map to convert to [key, value] pairs (entries)
     * @returns the [key, value] pairs
     */
    function toPairs(map) {
        var pairs = new Array(map.size);
        var index = 0;
        map.forEach(function (value, key) {
            pairs[index++] = [key, value];
        });
        return pairs;
    }
    /**
     * @function toValues
     *
     * @description
     * convert the set passed into values
     *
     * @param set the set to convert to values
     * @returns the values
     */
    function toValues(set) {
        var values = new Array(set.size);
        var index = 0;
        set.forEach(function (value) {
            values[index++] = value;
        });
        return values;
    }
    /**
     * @function areArraysEqual
     *
     * @description
     * are the arrays equal in value
     *
     * @param a the array to test
     * @param b the array to test against
     * @param isEqual the comparator to determine equality
     * @param meta the meta object to pass through
     * @returns are the arrays equal
     */
    function areArraysEqual(a, b, isEqual, meta) {
        var length = a.length;
        if (b.length !== length) {
            return false;
        }
        for (var index = 0; index < length; index++) {
            if (!isEqual(a[index], b[index], meta)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @function areMapsEqual
     *
     * @description
     * are the maps equal in value
     *
     * @param a the map to test
     * @param b the map to test against
     * @param isEqual the comparator to determine equality
     * @param meta the meta map to pass through
     * @returns are the maps equal
     */
    function areMapsEqual(a, b, isEqual, meta) {
        if (a.size !== b.size) {
            return false;
        }
        var pairsA = toPairs(a);
        var pairsB = toPairs(b);
        var length = pairsA.length;
        for (var index = 0; index < length; index++) {
            if (!hasPair(pairsB, pairsA[index], isEqual, meta) ||
                !hasPair(pairsA, pairsB[index], isEqual, meta)) {
                return false;
            }
        }
        return true;
    }
    var OWNER = '_owner';
    var hasOwnProperty = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
    /**
     * @function areObjectsEqual
     *
     * @description
     * are the objects equal in value
     *
     * @param a the object to test
     * @param b the object to test against
     * @param isEqual the comparator to determine equality
     * @param meta the meta object to pass through
     * @returns are the objects equal
     */
    function areObjectsEqual(a, b, isEqual, meta) {
        var keysA = keys(a);
        var length = keysA.length;
        if (keys(b).length !== length) {
            return false;
        }
        var key;
        for (var index = 0; index < length; index++) {
            key = keysA[index];
            if (!hasOwnProperty(b, key)) {
                return false;
            }
            if (key === OWNER && isReactElement(a)) {
                if (!isReactElement(b)) {
                    return false;
                }
            }
            else if (!isEqual(a[key], b[key], meta)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @function areRegExpsEqual
     *
     * @description
     * are the regExps equal in value
     *
     * @param a the regExp to test
     * @param b the regExp to test agains
     * @returns are the regExps equal
     */
    function areRegExpsEqual(a, b) {
        return (a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.unicode === b.unicode &&
            a.sticky === b.sticky &&
            a.lastIndex === b.lastIndex);
    }
    /**
     * @function areSetsEqual
     *
     * @description
     * are the sets equal in value
     *
     * @param a the set to test
     * @param b the set to test against
     * @param isEqual the comparator to determine equality
     * @param meta the meta set to pass through
     * @returns are the sets equal
     */
    function areSetsEqual(a, b, isEqual, meta) {
        if (a.size !== b.size) {
            return false;
        }
        var valuesA = toValues(a);
        var valuesB = toValues(b);
        var length = valuesA.length;
        for (var index = 0; index < length; index++) {
            if (!hasValue(valuesB, valuesA[index], isEqual, meta) ||
                !hasValue(valuesA, valuesB[index], isEqual, meta)) {
                return false;
            }
        }
        return true;
    }

    var isArray = Array.isArray;
    var HAS_MAP_SUPPORT = typeof Map === 'function';
    var HAS_SET_SUPPORT = typeof Set === 'function';
    var OBJECT_TYPEOF = 'object';
    function createComparator(createIsEqual) {
        var isEqual = 
        /* eslint-disable no-use-before-define */
        typeof createIsEqual === 'function'
            ? createIsEqual(comparator)
            : comparator;
        /* eslint-enable */
        /**
         * @function comparator
         *
         * @description
         * compare the value of the two objects and return true if they are equivalent in values
         *
         * @param a the value to test against
         * @param b the value to test
         * @param [meta] an optional meta object that is passed through to all equality test calls
         * @returns are a and b equivalent in value
         */
        function comparator(a, b, meta) {
            if (sameValueZeroEqual(a, b)) {
                return true;
            }
            if (a && b && typeof a === OBJECT_TYPEOF && typeof b === OBJECT_TYPEOF) {
                if (isPlainObject(a) && isPlainObject(b)) {
                    return areObjectsEqual(a, b, isEqual, meta);
                }
                var arrayA = isArray(a);
                var arrayB = isArray(b);
                if (arrayA || arrayB) {
                    return arrayA === arrayB && areArraysEqual(a, b, isEqual, meta);
                }
                var aDate = a instanceof Date;
                var bDate = b instanceof Date;
                if (aDate || bDate) {
                    return aDate === bDate && sameValueZeroEqual(a.getTime(), b.getTime());
                }
                var aRegExp = a instanceof RegExp;
                var bRegExp = b instanceof RegExp;
                if (aRegExp || bRegExp) {
                    return aRegExp === bRegExp && areRegExpsEqual(a, b);
                }
                if (isPromiseLike(a) || isPromiseLike(b)) {
                    return a === b;
                }
                if (HAS_MAP_SUPPORT) {
                    var aMap = a instanceof Map;
                    var bMap = b instanceof Map;
                    if (aMap || bMap) {
                        return aMap === bMap && areMapsEqual(a, b, isEqual, meta);
                    }
                }
                if (HAS_SET_SUPPORT) {
                    var aSet = a instanceof Set;
                    var bSet = b instanceof Set;
                    if (aSet || bSet) {
                        return aSet === bSet && areSetsEqual(a, b, isEqual, meta);
                    }
                }
                return areObjectsEqual(a, b, isEqual, meta);
            }
            return false;
        }
        return comparator;
    }

    // comparator
    var deepEqual = createComparator();
    var shallowEqual = createComparator(function () { return sameValueZeroEqual; });
    var circularDeepEqual = createComparator(createCircularEqualCreator());
    var circularShallowEqual = createComparator(createCircularEqualCreator(sameValueZeroEqual));

    exports.circularDeepEqual = circularDeepEqual;
    exports.circularShallowEqual = circularShallowEqual;
    exports.createCustomEqual = createComparator;
    exports.deepEqual = deepEqual;
    exports.sameValueZeroEqual = sameValueZeroEqual;
    exports.shallowEqual = shallowEqual;

    Object.defineProperty(exports, '__esModule', { value: true });

  }));

  });

  unwrapExports(fastEquals);
  var fastEquals_1 = fastEquals.deepEqual;

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

            if (!fastEquals_1(_this.state, oldState)) {
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
        serviceProvider: propTypes.objectOf(propTypes.any).isRequired
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
      var global$1 = window;
      var key = "__react_morty_build__";
      var buildNames = {
        cjs: "CommonJS",
        esm: "ES modules",
        umd: "UMD"
      };

      if (global$1[key] && global$1[key] !== "umd") {
        var initialBuildName = buildNames[global$1[key]];
        var secondaryBuildName = buildNames["umd"]; // TODO: Add link to article that explains in detail how to avoid
        // loading 2 different builds.

        throw new Error("You are loading the " + secondaryBuildName + " build of Miniverse " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
      }

      global$1[key] = "umd";
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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
