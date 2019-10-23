import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap-v3";
import context from "../../decorators/context";
import fieldGroup from "./fieldGroup";

const Checkbox = props => {
  const { input } = props;

  return <FormControl {...input} type={"password"} />;
};

Checkbox.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

Checkbox.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null
};

export default context(fieldGroup(Checkbox));
