import {
  BehaviorSubject,
  of,
  ReplaySubject
} from 'rxjs';

class Store {
  /**
   * @type {Miniverse}
   */
  miniverse;

  /**
   *
   * @type {axios}
   */
  subjects = {};

  /**
   * contains keys of cached resources
   */
  cacheKeys = {};

  /**
   *
   * @type {{}}
   */
  locations = {};

  /**
   *
   * @type {{}}
   */
  requestSubjects = {};

  /**
   *
   * @type {null}
   */
  config = {
    events: true
  };

  /**
   *
   * @param miniverse
   */
  constructor(miniverse) {
    this.miniverse = miniverse;
  }

  /**
   * Eject current data from Subjects
   *
   *@returns {*}
   */
  eject() {
    this.miniverse.getEventService().emit('eject', 'start');
    this.subjects['cache'] = of(this.cacheKeys);
    return this.miniverse._waitAllDone(this.subjects);
  }

  /**
   *  Create subjects and import data
   *
   * @param data
   */
  insert(data) {
    Object.keys(data).forEach(key => {
      if (key === 'cache') {
        this.cacheKeys = data[key];
        return;
      }

      const subject = this.importSubject(key);
      subject.next(data[key]);
    });
    return this.miniverse._waitAllDone(this.subjects);
  }

  /**
   * Import an already hash url
   *
   * @param hash
   * @returns {*}
   */
  importSubject(hash) {
    if (this.subjects[hash]) {
      return this.subjects[hash];
    }

    this.subjects[hash] = process.browser ? new BehaviorSubject({}) : new ReplaySubject();
    return this.subjects[hash];
  }

  /**
   *
   * @param url
   * @returns {*}
   */
  createSubject(url) {
    const hash = this.hashCode(url);

    if (this.subjects[hash]) {
      return this.subjects[hash];
    }

    /**
     * Server side rendering does not return on time when using BehaviorSubject()
     */
    this.subjects[hash] = process.browser ? new BehaviorSubject({}) : new ReplaySubject();
    return this.subjects[hash];
  }

  /**
   *
   * @param resource
   * @param component
   */
  unsubscribe(resource, componentName) {
    if (this.locations[resource] && this.locations[resource][componentName]) {
      this.locations[resource][componentName].unsubscribe();
      delete this.locations[resource][componentName];
    }
  }

  /**
   *
   * @param component
   */
  unsubscribeByComponent(componentName) {
    Object.keys(this.locations).forEach(resource => {
      if (typeof this.locations[resource] !== 'undefined') {
        if (typeof this.locations[resource][componentName] !== 'undefined') {
          this.locations[resource][componentName].unsubscribe();
          delete this.locations[resource][componentName];
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
  inMemory(resource, componentName, subscription) {
    if (typeof this.locations[resource] === 'undefined') {
      this.locations[resource] = {};
    }
    this.locations[resource][componentName] = subscription;
  }

  /**
   *
   * @returns {{}}
   */
  getLocations() {
    return this.locations;
  }

  /**
   * Create a new watcher
   *
   * @param resource
   * @param component
   * @param callback
   */
  watch = (resource, componentName = null, callback = null) => {
    this.unsubscribe(resource, componentName);
    const subject = this.createSubject(resource);
    if (callback) {
      this.inMemory(resource, componentName, subject.subscribe(callback));
    } else {
      this.inMemory(resource, componentName, subject)
    }
    return subject;
  };

  /**
   *
   * @returns {*}
   */
  getApiService = () => {
    return this.miniverse.apiService;
  };

  /**
   * Reset given subject
   *
   * @param path
   * @param data
   */
  reset(path, data = null) {
    const subject = this.createSubject(path);
    subject.next(data);
    return subject;
  }

  /**
   *
   * @param type
   * @param path
   * @param query
   * @param body
   * @param headers
   * @param name
   * @param cacheKey
   * @param rest
   * @param subject
   */
  runApi = (type, { path, query, body, headers, name, cacheKey, ...rest }, subject) => {
    /**
     * Clear running request to the same endpoint
     * @type {number}
     */
    if (this.inCache(path, cacheKey)) {
      return subject;
    }

    this.emit(type, 'start', { path });
    const hashCode = this.hashCode(name || `${type}/${path}`);
    if (typeof this.requestSubjects[hashCode] !== 'undefined') {
      this.requestSubjects[hashCode].unsubscribe();
      delete this.requestSubjects[hashCode];
    }

    this.requestSubjects[hashCode] = this.miniverse.apiService[type]({
      path,
      query,
      body,
      headers, ...rest
    }, this.config).subscribe(
      request => {
        this.emit(type, 'next', { path });
        subject.next(request.response);
      },
      error => {
        this.emit(type, 'error', { path });
        subject.error(error);
        this.deleteCache(path);
      },
      () => {
        delete this.requestSubjects[hashCode];
      }
    );
    this.setCache(path, cacheKey);
  };

  /**
   * Check if resource is cached
   *
   * @param path
   * @param cacheKey
   * @returns {boolean}
   */
  inCache(path, cacheKey) {

    if (!this.cacheKeys[this.hashCode(path)]) {
      return false;
    }

    const { key, expire } = this.cacheKeys[this.hashCode(path)];

    if (expire && expire < Date.now()) {
      this.deleteCache(path);
      return false;
    }

    if (typeof cacheKey === 'undefined') {
      return false
    }

    if (typeof cacheKey === 'boolean') {
      return key;
    }

    if (typeof cacheKey === 'object') {
      const hashPath = this.hashCode(path);
      const hashCode = this.hashCode(JSON.stringify(cacheKey));
      if (this.cacheKeys[hashPath]) {
        return String(key) === String(hashCode);
      }
    }
    return false;
  }

  /**
   *
   * @param path
   * @param cacheKey
   * @param time 3600 seconds
   */
  setCache(path, cacheKey, time = 3600) {
    if (typeof cacheKey === 'undefined') {
      return;
    }
    if (typeof cacheKey === 'boolean') {
      this.cacheKeys[this.hashCode(path)] = {
        key: true,
        expire: Date.now() + (time * 1000)
      };
    }
    if (typeof cacheKey === 'object') {
      this.cacheKeys[this.hashCode(path)] = {
        key: this.hashCode(JSON.stringify(cacheKey)),
        expire: Date.now() + (time * 1000)
      };
    }
  }

  /**
   *
   * @param path
   */
  deleteCache(path) {
    if (typeof this.cacheKeys[this.hashCode(path)] !== 'undefined') {
      this.emit('cache', 'delete', { path });
      delete this.cacheKeys[this.hashCode(path)];
    }
  }

  /**
   *
   * @param path
   * @param query
   * @param headers
   * @param reload
   * @param cacheKey
   * @param rest
   * @returns {*}
   */
  get = ({ path, query, headers, reload, cacheKey, ...rest }) => {
    const subject = this.createSubject(path, cacheKey);
    this.runApi('get', { path, query, headers, cacheKey, ...rest }, subject);
    return subject;
  };

  /**
   *
   * @param path
   * @param query
   * @param params
   * @param headers
   * @param cacheKey
   * @param rest
   * @returns {*}
   */
  put = ({ path, query, params, headers, cacheKey, ...rest }) => {
    const subject = this.createSubject(path, cacheKey);
    this.runApi('put', { path, query, headers, cacheKey, ...rest }, subject);
    return subject;
  };

  /**
   *
   * @param path
   * @param query
   * @param params
   * @param headers
   * @param cacheKey
   * @param rest
   * @returns {*}
   */
  post = ({ path, query, params, headers, cacheKey, ...rest }) => {
    const subject = this.createSubject(path, cacheKey);
    this.runApi('post', { path, query, headers, cacheKey, ...rest }, subject);
    return subject;
  };

  /**
   *
   * @param path
   * @param query
   * @param params
   * @param headers
   * @param cacheKey
   * @param rest
   * @returns {*|Observable<AjaxResponse>|AjaxObservable|Promise<AxiosResponse<T>>}
   */
  patch = ({ path, query, params, headers, cacheKey, ...rest }) => {
    const subject = this.createSubject(path, cacheKey);
    this.runApi('patch', { path, query, headers, cacheKey, ...rest }, subject);
    return subject;
  };

  /**
   *
   * @param path
   * @param query
   * @param params
   * @param headers
   * @param rest
   * @returns {*}
   */
  delete = ({ path, query, params, headers, ...rest }) => {
    const subject = this.createSubject(path, query);
    this.runApi('delete', { path, query, headers, ...rest }, subject);
    return subject;
  };

  /**
   * push data in store
   *
   * @param path
   * @param data
   * @returns {*}
   */
  push = ({ path, data }) => {
    const subject = this.createSubject(path);
    subject.next(data);
    return subject;
  };

  /**
   *
   * @param callback
   */
  setConfCallback(config) {
    this.config = Object.assign({}, this.config, config);
  }

  /**
   *
   * @param string
   * @returns {number}
   */
  hashCode = (string) => {
    if (typeof string === 'undefined') {
      return 0;
    }

    let hash = 0;
    if (string.length == 0) {
      return hash;
    }
    for (let i = 0; i < string.length; i++) {
      const char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  };

  emit(type, value, rest) {
    if (this.config.events === true) {
      this.miniverse.getEventService().emit(type, { store: this.constructor.name, value, type, ...rest });
    }
  }
}

export default Store;
