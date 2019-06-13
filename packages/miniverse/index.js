"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/react-miniverse.min.js");
} else {
  module.exports = require("./cjs/react-miniverse.js");
}
