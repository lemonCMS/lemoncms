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
    return this.get({path: 'users'});
  }

  watchUsers(location, callback) {
    return this.watch('users', location, callback);
  }

  resetUsers() {
    return this.reset('users');
  }
}

export default Github;
