import {
  ReplaySubject,
  BehaviorSubject
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
  apiConfig = {};

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
    return this.miniverse._waitAllDone(this.subjects);
  }

  /**
   *  Create subjects and import data
   *
   * @param data
   */
  insert(data) {
    Object.keys(data).forEach(key => {
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
  unsubscribe(resource, component) {
    if (this.locations[resource] && this.locations[resource][component]) {
      this.locations[resource][component].unsubscribe();
      delete this.locations[resource][component];
    }
  }

  /**
   *
   * @param component
   */
  unsubscribeByComponent(component) {
    Object.keys(this.locations).forEach(resource => {
      if (typeof this.locations[resource] !== 'undefined') {
        if (typeof this.locations[resource][component] !== 'undefined') {
          this.locations[resource][component].unsubscribe();
          delete this.locations[resource][component];
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
  inMemory(resource, component, subscription) {
    if (typeof this.locations[resource] === 'undefined') {
      this.locations[resource] = {};
    }
    this.locations[resource][component] = subscription;
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
  watch = (resource, component, callback) => {
    this.unsubscribe(resource, component);
    const subject = this.createSubject(resource);
    this.inMemory(resource, component, subject.subscribe(callback));
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
    const subject = this.createSubject(path, true);
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
   * @param rest
   * @param subject
   */
  runApi = (type, { path, query, body, headers, ...rest }, subject) => {
    /**
     * Clear running request to the same endpoint
     * @type {number}
     */
    const hashCode = this.hashCode(`${type}/${path}`);
    if (typeof this.requestSubjects[hashCode] !== 'undefined') {
      this.requestSubjects[hashCode].unsubscribe();
      delete this.requestSubjects[hashCode];
    }

    this.requestSubjects[hashCode] = this.miniverse.apiService[type]({path, query, body, headers, ...rest}, this.apiConfig).subscribe(
      request => {
        subject.next(request.response);
      },
      error => {
        subject.error(error);
      },
      () => {
        delete this.requestSubjects[hashCode];
      }
    );
  };

  /**
   *
   * @param path
   * @param query
   * @param headers
   * @param rest
   * @returns {*}
   */
  get = ({ path, query, headers, ...rest }) => {
    const subject = this.createSubject(path, query);
    this.runApi('get', { path, query, headers, ...rest }, subject);
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
  put = ({ path, query, params, headers, ...rest }) => {
    const subject = this.createSubject(path, query);
    this.runApi('put', { path, query, headers, ...rest }, subject);
    return subject;  };

  /**
   *
   * @param path
   * @param query
   * @param params
   * @param headers
   * @param rest
   * @returns {*}
   */
  post = ({ path, query, params, headers, ...rest }) => {
    const subject = this.createSubject(path, query);
    this.runApi('post', { path, query, headers, ...rest }, subject);
    return subject;  };

  /**
   *
   * @param path
   * @param query
   * @param params
   * @param headers
   * @param rest
   * @returns {*|Observable<AjaxResponse>|AjaxObservable|Promise<AxiosResponse<T>>}
   */
  patch = ({ path, query, params, headers, ...rest }) => {
    const subject = this.createSubject(path, query);
    this.runApi('patch', { path, query, headers, ...rest }, subject);
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
   *
   * @param callback
   */
  setConfCallback(config) {
    this.apiConfig = config;
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
  }
}

export default Store;
