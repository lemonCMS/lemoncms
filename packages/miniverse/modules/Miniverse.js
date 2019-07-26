import {
  BehaviorSubject,
  concat,
  ReplaySubject,
  zip,
  of,
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
    return this._waitAllDone(subjects);
  };

  waitForIt(items, subject, index = 0, nextData = {}) {
    const service = Object.key(items)[index];
    if (!service) {
      subject.next(nextData);
    }

    items[service].subscribe(data => {
      nextData[service] = data;
      this.waitForIt(items, subject, index++, nextData )
    });
  }

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
    return this._waitAllDone(subjects);
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

  _waitAllDone = subjects => {
    const subject = new BehaviorSubject({});
    const toExport = Object.keys(subjects);
    let nextAfter = toExport.length;
    const preparedExport = {};

    if (nextAfter === 0) {
      subject.next({});
      subject.complete();
    }

    toExport.forEach(key => {
      if (subjects[key].isStopped) { // When subject isStopped there wil be no next or complete events.
        if (subject[key] instanceof BehaviorSubject) {
          preparedExport[key] = subjects[key].value;
        } else {
          preparedExport[key] = null;
        }

        nextAfter -= 1;
        if (nextAfter <= 0) {
          subject.next(preparedExport);
          // subject.complete();
        }
        return;
      }

      subjects[key].subscribe(data => {
        preparedExport[key] = data;
        nextAfter -= 1;
        if (nextAfter <= 0) {
          subject.next(preparedExport);
          // subject.complete();
        }
      }, () => { // when there is an error
        nextAfter -= 1;
        if (nextAfter <= 0) {
          subject.next(preparedExport);
          //subject.complete();
        }
      });
    });
    return subject;
  };

  zip(...rest) {
    const toZip = rest.map(apiCall => {
      if (typeof apiCall === 'object' && typeof apiCall.subject === 'function') {
        return apiCall.subject();
      }
      return apiCall;
    });
    return zip(...toZip);
  }
}

export default Miniverse;
