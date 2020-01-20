import React from "react";
import PropTypes from "prop-types";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";
import { FormControl } from "react-bootstrap";

const Custom = props => {
  const { control, input, isDisabled, children, context } = props;
  if (control) {
    return (
      <FormControl {...input} componentClass={children} disabled={isDisabled} />
    );
  }

  return children({ input, context }, isDisabled);
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
  addOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  addOnBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  mandatory: PropTypes.bool,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};

Custom.defaultProps = {
  input: {},
  label: null,
  help: null,
  addOn: null,
  addOnBefore: null,
  placeholder: null,
  control: true,
  disabled: null,
  isDisabled: false,
  mandatory: false,
  layout: null
};

export default context()(fieldGroup(Custom));
