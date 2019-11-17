import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const Select = props => {
  const { input, children, isDisabled, multiple } = props;
  return (
    <FormControl
      {...input}
      componentClass="select"
      disabled={isDisabled}
      multiple={multiple}
    >
      {children}
    </FormControl>
  );
};

Select.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.array
    ])
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  multiple: PropTypes.bool,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};

Select.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  multiple: false,
  disabled: null,
  isDisabled: false,
  layout: null
};

export default context({ type: "select" })(fieldGroup(Select));
