import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap-v3";
import context from "../../decorators/context";
import field from "../../decorators/field";

const Password = props => {
  const { input, placeholder, computedInvalid, label, help } = props;

  return (
    <FormGroup validationState={computedInvalid ? "error" : null}>
      {label && <ControlLabel>{label}</ControlLabel>}
      <FormControl type="password" placeholder={placeholder} {...input} />
      <FormControl.Feedback />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
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

export default context(field(Password));
