// next.config.js
const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  [
    withCSS,
    {
      ssLoaderOptions: {
        url: false
      }
    }
  ],
  [
    withTM,
    {
      transpileModules: ["react-datetime-picker"]
    }
  ]
]);
