import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap-v3";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const Password = props => {
  const { input } = props;
  return <FormControl {...input} type={"password"} />;
};

Password.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

Password.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null
};

export default context(fieldGroup(Password));
