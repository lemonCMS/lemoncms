import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const Text = props => {
  const { input, type, isDisabled } = props;
  return <FormControl {...input} type={type} disabled={isDisabled} />;
};

Text.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ])
  }),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["text", "email", "date", "datetime-local", "checkbox"])
};

Text.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  type: "text"
};

export default context()(fieldGroup(Text));
