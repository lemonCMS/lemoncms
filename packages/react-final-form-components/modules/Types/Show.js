import React from "react";
import PropTypes from "prop-types";
import context from "../decorators/consumer";

const Show = ({ condition, children, context: { checkCondition } }) => {
  if (condition && typeof condition === "function") {
    if (checkCondition(condition) !== true) {
      return null;
    }
    return children;
  }

  return null;
};

Show.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  condition: PropTypes.func
};
export default context(Show);
