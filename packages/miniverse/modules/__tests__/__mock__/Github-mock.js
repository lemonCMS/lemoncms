import Store from '../../Store';

class Github extends Store {

  init() {
    return {
      baseUrl: 'https://github.com',
      events: true
    }

    /*return {
      baseUrl: {
        server: 'http://',
        client: '/api'
      }
    }*/
  }

  getUsers() {
    return this.get({ path: 'users' });
  }

  getUsersCacheBoolean() {
    return this.get({ path: 'api-boolean', cacheKey: true });
  }

  getUsersCacheObject(query) {
    return this.get({ path: 'api-object', query, cacheKey: { page: query.page } });
  }

  getUsersSingle(query) {
    return this.get({ path: 'api-object', query, single: true });
  }

  getUsersSingle2(query) {
    return this.get({ path: 'api-object2', query, single: true });
  }

  getUsersSingle3(query) {
    return this.get({ path: 'api-object3', query});
  }
  watchUsers(location, callback) {
    return this.watch('users', location, callback);
  }

  resetUsers() {
    return this.reset('users');
  }

  pushState(data) {
    this.push({ path: 'state', data });
  }

  watchState(componentName) {
    return this.watch('state', componentName);
  }

}

export default Github;
