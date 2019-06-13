/* eslint-disable */
import { ajax } from 'rxjs/ajax';
import queryString from 'query-string';

export class ApiService {
  /**
   *
   * @type {null|string}
   */
  token = null;

  /**
   * Default Json headers
   * @type {{'Content-type': string, Accept: string}}
   */
  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  /**
   * Contains createXhr when it does not exists.
   * mainly for nodejs environments.
   *
   * @type {null|XHR2}
   */
  XHR2 = null;

  setJwtToken = token => {
    this.token = token;
  };


  /**
   *
   * @returns {XMLHttpRequest}
   */
  createXHR = () => {
    if (typeof XMLHttpRequest === 'undefined') {
      if (this.XHR2 === null) {
        this.XHR2 = require('xhr2');
      }
      return new this.XHR2();
    }
    return new XMLHttpRequest();
  };

  /**
   *
   * @param path
   * @param query
   * @param body
   * @param headers
   * @param conf
   * @returns {Observable<AjaxResponse>}
   */
  get({ path, query, body, headers }, conf) {
    return ajax({
      createXHR: this.createXHR,
      url: this.getUrl(path, query, conf),
      crossDomain: true,
      withCredentials: false,
      method: 'GET',
      headers: this.getHeaders(headers),
      body
    });
  }

  /**
   *
   * @param path
   * @param query
   * @param body
   * @param headers
   * @param conf
   * @returns {Observable<AjaxResponse>}
   */
  post({ path, query, body, headers }, conf) {
    return ajax({
      createXHR: this.createXHR,
      url: this.getUrl(path, query, conf),
      method: 'POST',
      headers: this.getHeaders(headers),
      body
    });
  }

  /**
   *
   * @param path
   * @param query
   * @param body
   * @param headers
   * @param conf
   * @returns {Observable<AjaxResponse>}
   */
  put({ path, query, body, headers }, conf) {
    return ajax({
      createXHR: this.createXHR,
      url: this.getUrl(path, query, conf),
      method: 'PUT',
      headers: this.getHeaders(headers),
      body
    });
  }

  /**
   *
   * @param path
   * @param query
   * @param body
   * @param headers
   * @param conf
   * @returns {Observable<AjaxResponse>}
   */
  patch({ path, query, body, headers }, conf) {
    return ajax({
      createXHR: this.createXHR,
      url: this.getUrl(path, query, conf),
      method: 'PATCH',
      headers: this.getHeaders(headers),
      body
    });
  }

  /**
   *
   * @param path
   * @param query
   * @param body
   * @param headers
   * @param conf
   * @returns {Observable<AjaxResponse>}
   */
  delete({ path, query, body, headers }, conf) {
    return ajax({
      createXHR: this.createXHR,
      url: this.getUrl(path, query, conf),
      method: 'DELETE',
      headers: this.getHeaders(headers),
      body
    });
  }

  /**
   * Set global headers.
   * Headers can be modified when making the request
   *
   * @param headers
   */
  setHeaders = headers => {
    this.headers = headers;
  };

  /**
   * Get headers
   *
   * @param headers
   * @returns {any}
   */
  getHeaders(headers = {}) {
    return Object.assign({},
      this.headers,
      this.getBearerToken(),
      headers
    )
  }

  /**
   * Set Authentication token for all services.
   *
   * ApiService is a singleton.
   * This will make it easy to only set the token
   * once and then is available for all services.
   *
   * @returns {{}|{Authentication: string}}
   */
  getBearerToken() {
    if (this.token === null) {
      return {};
    }

    return {
      'Authentication': `Bearer ${this.token}`
    };
  }

  /**
   *
   * @param path
   * @param params
   * @param conf
   * @returns {string}
   */
  getUrl(path, params = {}, conf) {
    const baseUrl = this.getBaseUrl(conf);
    if (baseUrl !== null) {
      return `${baseUrl}/${path}?${queryString.stringify(params, { arrayFormat: 'bracket', sort: false })}`;
    }
    return `${path}?${queryString.stringify(params, { arrayFormat: 'bracket', sort: false })}`
  }

  /**
   *
   * BaseUrl when using a external api setting as string is enough
   * {
   *   baseUrl: 'https://github.com'
   * }
   *
   * If you are running your api calls through nodejs you may want to set
   * a url for backend and client
   * {
   *   baseUrl: {
   *     server: 'http://localhost:8080/api',
   *     client: '/api'
   *   }
   * }
   *
   * @param conf
   * @returns {null|string|AjaxCreationMethod|net.Server | Http2Server | Http2SecureServer}
   */
  getBaseUrl(conf) {
    if (typeof conf.baseUrl === 'string') {
      return conf.baseUrl;
    }

    if (typeof process.browser === 'undefined') {
      if (conf.baseUrl && conf.baseUrl.server) {
        return conf.baseUrl.server;
      }
    }

    if (conf.baseUrl.client) {
      return conf.baseUrl.client;
    }

    return null;
  }
}
