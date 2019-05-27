import {
  concat,
  ReplaySubject,
  zip,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

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
   * @type zip
   */
  zip = zip;

  /**
   *
   * @type {{}}
   */
  helpers = {};

  /**
   *
   * @param services
   */
  constructor(services) {
    this.services = this.objectMap(services, Service => {
      return new Service(this);
    });
  }

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
   * @returns {*}
   */
  getClient() {
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
  objectMap = (object, mapFn) => {
    return Object.keys(object).reduce((result, key) => {
      result[key] = mapFn(object[key]);
      return result;
    }, {});
  };

  _waitAllDone = subjects => {
    const subject = new ReplaySubject();
    const toExport = Object.keys(subjects);
    let nextAfter = toExport.length;
    const preparedExport = {};

    if (nextAfter === 0) {
      subject.next({});
    }

    toExport.forEach(key => {
      subjects[key].subscribe(data => {
        preparedExport[key] = data;
        nextAfter -= 1;
        if (nextAfter <= 0) {
          subject.next(preparedExport);
        }
      });
    });
    return subject;
  }
}

export default Miniverse;
