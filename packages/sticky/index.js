"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/react-sticky.min.js");
} else {
  module.exports = require("./cjs/react-sticky.js");
}
