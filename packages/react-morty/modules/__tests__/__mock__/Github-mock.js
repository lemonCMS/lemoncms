import Store from '../../Store';

class Github extends Store {
  getUsers() {
    return this.get('https://api.github.com/users');
  }

  watchUsers(location, callback) {
    return this.watch('https://api.github.com/users', location, callback);
  }

  resetUsers() {
    return this.reset('https://api.github.com/users');
  }
}

export default Github;
