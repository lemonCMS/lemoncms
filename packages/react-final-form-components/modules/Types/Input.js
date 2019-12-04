import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const Input = props => {
  const { input, type, isDisabled, placeholder, readonly } = props;
  return (
    <FormControl
      {...input}
      type={type}
      disabled={isDisabled}
      placeholder={placeholder}
      readonly={readonly}
    />
  );
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
  readonly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  addOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([
    "text",
    "email",
    "date",
    "datetime-local",
    "checkbox"
  ]),
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};

Input.defaultProps = {
  input: {},
  label: null,
  help: null,
  addOn: null,
  placeholder: null,
  type: "text",
  disabled: null,
  readonly: false,
  isDisabled: false,
  layout: null
};

export default context()(fieldGroup(Input));
