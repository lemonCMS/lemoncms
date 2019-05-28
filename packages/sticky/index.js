"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/lemoncms-sticky.min.js");
} else {
  module.exports = require("./cjs/lemoncms-sticky.js");
}
