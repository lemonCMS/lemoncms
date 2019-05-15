"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/react-morty.min.js");
} else {
  module.exports = require("./cjs/react-morty.js");
}
