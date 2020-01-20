import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const Password = props => {
  const { input, isDisabled, placeholder, readOnly } = props;

  return (
    <FormControl
      {...input}
      type={"password"}
      disabled={isDisabled}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
};

Password.propTypes = {
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
  readOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  addOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  addOnBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  mandatory: PropTypes.bool,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};

Password.defaultProps = {
  input: {},
  label: null,
  help: null,
  addOn: null,
  addOnBefore: null,
  placeholder: null,
  disabled: null,
  isDisabled: false,
  mandatory: false,
  layout: null
};

export default context()(fieldGroup(Password));
