import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap-v3";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const Text = props => {
  const { input, type } = props;
  return <FormControl {...input} type={type} />;
};

Text.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
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

export default context(fieldGroup(Text));
