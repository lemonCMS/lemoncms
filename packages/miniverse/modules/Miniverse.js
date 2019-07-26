import {
  BehaviorSubject,
  concat,
  ReplaySubject,
  zip,
  of,
  Observable,
  forkJoin,
} from 'rxjs';
import { ApiService } from './ApiService';
import { EventService } from './EventService';

class Miniverse {
  /**
   *
   * @type {{}}
   */
  services = {};

  /**
   *
   * @type concat
   * */
  concat = concat;

  /**
   *
   * @type {{}}
   */
  helpers = {};

  /**
   *
   * @type {ApiService}
   */
  apiService = null;

  /**
   *
   * @type {EventService}
   */
  eventService = null;

  /**
   *
   * @param services
   * @param apiService
   */
  constructor(services, apiService = null) {

    if (apiService === null) {
      this.apiService = new ApiService()
    } else {
      this.apiService = apiService;
    }

    this.eventService = new EventService;

    this.services = this.objectMap(services, Service => {
      const service = new Service(this, this.apiService, this.eventService);
      if (typeof service.init === 'function') {
        service.setConfCallback(service.init());
      }
      return service;
    });
  }

  /**
   *
   * @param name
   * @returns {boolean}
   */
  isService(name) {
    return typeof this.services[name] !== 'undefined';
  }

  /**
   *
   * @returns {*}
   */
  eject = () => {
    const subjects = {};
    Object.keys(this.services).forEach(service => {
      subjects[service] = this.services[service].eject();
    });
    return forkJoin(subjects);
  };

  /**
   *
   * @returns {*}
   */
  insert = (data) => {
    const subjects = {};
    Object.keys(data).forEach(service => {
      if (this.isService(service)) {
        subjects[service] = this.services[service].insert(data[service]);
      }
    });
    return forkJoin(subjects);
  };

  /**
   *
   * @param name
   * @returns {boolean|*}
   */
  getService = name => {
    if (typeof this.services[name] === 'undefined') {
      throw Error(`Service ${name} is not registered in services`);
    }
    return this.services[name];
  };

  /**
   *
   * @returns {EventService}
   */
  getEventService() {
    return this.eventService;
  }

  /**
   *
   * @param helpers
   */
  setHelpers = helpers => {
    const { client, ...rest } = helpers;
    this.client = client;
    this.helpers = rest;
  };

  /**
   *
   * @param name
   * @returns {boolean|*}
   */
  getHelper = name => {
    if (typeof this.helpers[name] === 'undefined') {
      console.error(`Helper ${name} is not registered in helpers`);
      return false;
    }
    return this.helpers[name];
  };

  /**
   *
   * @param object
   * @param mapFn
   * @returns {{}}
   */
  objectMap = (object, mapFn) => {
    return Object.keys(object).reduce((result, key) => {
      result[key] = mapFn(object[key]);
      return result;
    }, {});
  };

  zip(...rest) {
    return zip(...rest);
  }
}

export default Miniverse;
