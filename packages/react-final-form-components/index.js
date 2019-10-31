"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/final-form-bootstrap3.min.js");
} else {
  module.exports = require("./cjs/final-form-bootstrap3.js");
}
