import { ReplaySubject } from 'rxjs';
import axios from 'axios';

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
   * @param miniverses
   */
  constructor(miniverses) {
    this.miniverse = miniverses;
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
      const subject  = this.createSubject(key);
      subject.next(data[key]);
    });
    return this.miniverse._waitAllDone(this.subjects);
  }

  /**
   *
   * @param url
   * @returns {*}
   */
  createSubject(url) {
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
   * @param url
   * @param params
   * @param headers
   * @returns {*}
   */
  get = (url, params = {}, headers = {}) => {
    const subject = this.createSubject(url);
    // Send a GET request
    axios({
      method: 'get',
      url,
      params,
      headers
    })
      .then(response => {
        subject.next(response.data);
      })
      .catch(error => {
        subject.error(error);
      });
    return subject;
  };

  /**
   * Reset given subject
   *
   * @param url
   * @param data
   */
  reset(url, data = null) {
    const subject = this.createSubject(url);
    subject.next(data);
    return subject;
  }

}

export default Store;
