import React from "react";
import PropTypes from "prop-types";
import context from "../decorators/context";

const Show = ({ condition, children, context: { checkCondition } }) => {
  if (condition && typeof condition === "function") {
    if (checkCondition(condition) !== true) {
      return null;
    }
    return children;
  }
};

Show.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  hidden: PropTypes.func,
  condition: PropTypes.func
};
export default context()(Show);
