"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/lemoncms-forms.min.js");
} else {
  module.exports = require("./cjs/lemoncms-forms.js");
}
