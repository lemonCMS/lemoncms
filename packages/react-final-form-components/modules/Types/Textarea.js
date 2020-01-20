import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const Textarea = props => {
  const { input, type, isDisabled, rows, cols } = props;
  return (
    <FormControl
      componentClass={"textarea"}
      {...input}
      type={type}
      rows={rows}
      cols={cols}
      disabled={isDisabled}
    />
  );
};

Textarea.propTypes = {
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
  rows: PropTypes.number,
  cols: PropTypes.number,
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  addOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  addOnBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  mandatory: PropTypes.bool,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};

Textarea.defaultProps = {
  input: {},
  label: null,
  help: null,
  addOn: null,
  addOnBefore: null,
  rows: null,
  cols: null,
  placeholder: null,
  type: "text",
  disabled: null,
  isDisabled: false,
  layout: null,
  mandatory: false
};

export default context()(fieldGroup(Textarea));
