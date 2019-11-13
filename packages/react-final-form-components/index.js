"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/react-final-form-components.min.js");
} else {
  module.exports = require("./cjs/react-final-form-components.js");
}
