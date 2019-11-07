import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const Input = props => {
  const { input, type, isDisabled } = props;
  return <FormControl {...input} type={type} disabled={isDisabled} />;
};

Input.propTypes = {
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
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  addon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["text", "email", "date", "datetime-local", "checkbox"])
};

Input.defaultProps = {
  input: {},
  label: null,
  help: null,
  addon: null,
  placeholder: null,
  type: "text",
  disabled: null,
  isDisabled: false
};

export default context()(fieldGroup(Input));
