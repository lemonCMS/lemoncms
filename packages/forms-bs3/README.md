# miniverse

Declarative routing for [React](https://facebook.github.io/react).

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save miniverse

**Note:** This package provides the core routing functionality for React Router, but you might not want to install it directly. If you are writing an application that will run in the browser, you should instead install `miniverse`. Similarly, if you are writing a React Native application, you should instead install `miniverse`. Both of those will install `miniverse` as a dependency.

Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// using ES6 modules
import { Rick, Morty, Miniverse } from "miniverse";

// using CommonJS modules
var Rick = require("miniverse").Rick;
var Morty = require("miniverse").Morty;
var Miniverse = require("miniverse").Miniverse;
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/LemonCMS/lemoncms/issues).

## Credits
