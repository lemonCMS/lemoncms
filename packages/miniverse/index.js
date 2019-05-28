"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/lemoncms-miniverse.min.js");
} else {
  module.exports = require("./cjs/lemoncms-miniverse.js");
}
