# react-miniverse

Store manager build on top of rxjs for react. 16+

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-miniverse

## Usage
Creating our very first and very simple store.
For our example we will use the [github api](https://developer.github.com/v3/) to fetch some users.

```ecmascript 6
/** 
* <project-source>/miniverse/Github.js 
**/
import { Store } from 'react-miniverse';

export default class Github {
  
  /**
  * Set baseUrl of API
  * 
  * When only running only client side code
  * you can return a string full url of path
  * @returns {{baseUrl: string}}
  * 
  * When running SSR and server and client side api
  * location differ this can be provide like follows
  * @returns { baseUrl: {
  *             client: '/api',
  *             server: 'http://webserver/api'
  *           }}
  */
  init = () => ({
    baseUrl: 'https://api.github.com'
  });
  
  /**
  * Load list of users
  * @converts: https://api.github.com/users
  * 
  * @returns subject
  */
  getUsers() {
    return this.get({path: 'users'})
  }
  
  /**
  * Fetch user resource
  * @converts: https://api.github.com/users/{{id}}
  * 
  * @param id
  * @returns subject
  */
  getUser(id) {
    return this.get({path: 'users', id});
  }
} 
```

Next we need to initiate the miniverse

```ecmascript 6
/** 
* <project-source>/miniverse/index.js 
**/
import { Miniverse } from 'react-miniverse';
import Github from './Github';

const provider = () => new Miniverse({
  Github
});

export default provider;
```

Next we need to initiate the miniverse and wrap the App.

```ecmascript 6
/** 
* <project-source>/client.js 
**/
import React from 'react';
import ReactDOM from 'react-dom';
import {MiniverseContext} from 'react-miniverse';
import App from './App';
import Miniverse from './miniverse';

const serviceProvider = Miniverse();

ReactDOM.render(
  <MiniverseContext.Provider value={{ serviceProvider }}>
    <App />
  </MiniverseContext.Provider>
  dest
);

````



## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/LemonCMS/lemoncms/issues).

## Credits

