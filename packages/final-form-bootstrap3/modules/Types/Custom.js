import React from "react";
import PropTypes from "prop-types";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";
import { FormControl } from "react-bootstrap";

const Custom = props => {
  const { control, input, isDisabled, children } = props;
  if (control) {
    return (
      <FormControl {...input} componentClass={children} disabled={isDisabled} />
    );
  }

  return children(input, isDisabled);
};

Custom.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any
  }),
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.func,
  control: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

Custom.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  control: true,
  disabled: null,
  isDisabled: false
};

export default context()(fieldGroup(Custom));
