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
   *
   * @type {{}}
   */
  subjectsThatEmitted = {}

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
    let emittedSubjects = {
      cache: of(this.cacheKeys)
    };
    Object.keys(this.subjectsThatEmitted).forEach(key => emittedSubjects[key] = this.subjects[key]);
    return this.miniverse._waitAllDone(emittedSubjects);
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
  createSubject(url, emitted = true) {
    const hash = this.hashCode(url);

    if (this.subjects[hash]) {
      if (!this.subjects[hash].isStopped) {
        return this.subjects[hash];
      }
      delete this.subjects[hash];
    }
    if (emitted) {
      this.subjectsThatEmitted[hash] = true;
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
   * @param componentName
   */
  unsubscribe(resource, componentName) {
    if (this.locations[resource] && this.locations[resource][componentName]) {
      this.locations[resource][componentName].unsubscribe();
      delete this.locations[resource][componentName];
    }
  }

  /**
   *
   * @param componentName
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
   * @param componentName
   * @param subscription
   */
  setSubScription(resource, componentName, subscription) {
    if (typeof this.locations[resource] === 'undefined') {
      this.locations[resource] = {};
    }
    this.locations[resource][componentName] = subscription;
  }

  /**
   *
   * @param resource
   * @param componentName
   * @returns {*}
   */
  hasSubscription(resource, componentName) {
    return (this.locations[resource] && this.locations[resource][componentName]);
  }

  /**
   *
   * @param resource
   * @param componentName
   * @returns {null|*}
   */
  getSubscription(resource, componentName) {
    if (this.locations[resource] && this.locations[resource][componentName]) {
      return this.locations[resource][componentName];
    }
    return null;
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
   */
  watch = (resource, componentName = '__watch') => {
    this.unsubscribe(resource, componentName);
    const subject = this.createSubject(resource, false);
    return this.wrapSubject(resource, componentName, subject);
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
    delete this.cacheKeys[this.hashCode(path)];
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
   * @param single
   * @param rest
   * @param subject
   */
  runApi = (type, { path, query, body, headers, name, cacheKey, single, ...rest }, subject) => {
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
        if (single === true) {
          subject.complete();
        }
      },
      error => {
        this.emit(type, 'error', { path });
        subject.error(error);
        this.deleteCache(path);
      },
      () => {
        if (single === true) {
          subject.complete();
        }
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
    const subject = this.createSubject(path);
    this.runApi('get', { path, query, headers, cacheKey, ...rest }, subject);
    return this.wrapSubject(path, '__get', subject);
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
  put = ({ path, query, body, headers, cacheKey, ...rest }) => {
    const subject = this.createSubject(path);
    this.runApi('put', { path, query, body, headers, cacheKey, ...rest }, subject);
    return this.wrapSubject(path, '__put', subject);
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
  post = ({ path, query, body, headers, cacheKey, ...rest }) => {
    const subject = this.createSubject(path);
    this.runApi('post', { path, query, body, headers, cacheKey, ...rest }, subject);
    return this.wrapSubject(path, '__post', subject);
  };

  /**
   *
   * @param type
   * @param path
   * @param query
   * @param body
   * @param headers
   * @param cacheKey
   * @param rest
   * @returns {*}
   */
  request(type, { path, query, body, headers, cacheKey, ...rest }) {
    const subject = this.createSubject(path);
    this.runApi(type, { path, query, body, headers, cacheKey, ...rest }, subject);
    return subject;
  }

  /**
   *
   * @param path
   * @param query
   * @param params
   * @param headers
   * @param cacheKey
   * @param rest
   * @returns {{subscribe: subscribe, subject: subject, pipe: (function(...[*]): {subscribe: subscribe, subject: subject, pipe})}}
   */
  patch = ({ path, query, body, headers, cacheKey, ...rest }) => {
    const subject = this.createSubject(path);
    this.runApi('patch', { path, query, body, headers, cacheKey, ...rest }, subject);
    return this.wrapSubject(path, '__patch', subject);
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
  delete = ({ path, query, body, headers, ...rest }) => {
    const subject = this.createSubject(path);
    this.runApi('delete', { path, query, body, headers, ...rest }, subject);
    return this.wrapSubject(path, '__delete', subject);
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
    return this.wrapSubject(path, '__push', subject);
  };

  wrapSubject(path, componentName, subject) {
    return {
      pipe: (...rest) => {
        return this.wrapSubject(path, componentName, subject.pipe(...rest));
      },
      subscribe: (...rest) => {
        if (!this.hasSubscription(path, componentName)) {
          const sub$ = subject.subscribe(...rest);
          this.setSubScription(path, componentName, sub$);
          return sub$;
        }
        return this.getSubscription(path, componentName);
      },
      subject: () => {
        if (!this.hasSubscription(path, componentName)) {
          this.setSubScription(path, componentName, subject);
        }
        return subject;
      },
      toPromise: () => {
        return subject.toPromise();
      }
    }
  }

  /**
   *
   * @param config
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
    if (string.length === 0) {
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

  /**
   * Set authorization token for all registered services.
   * @param token
   */
  setJwtToken(token) {
    this.getApiService().setJwtToken(token);
  }
}

export default Store;
