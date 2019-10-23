import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

export default function fieldGroup(Component) {
  const WrappedComponent = props => {
    const {
      label,
      help,
      disabled,
      context: { checkCondition },
      meta: { submitFailed, invalid, error }
    } = props;

    const computedInvalid = submitFailed && invalid;
    const isDisabled = disabled && checkCondition(disabled);

    return (
      <FormGroup validationState={computedInvalid ? "error" : null}>
        {label && <ControlLabel>{label}</ControlLabel>}
        <Component
          {...props}
          computedInvalid={computedInvalid}
          isDisabled={isDisabled}
        />
        <FormControl.Feedback />
        {!computedInvalid && help && <HelpBlock>{help}</HelpBlock>}
        {computedInvalid && error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    );
  };

  WrappedComponent.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    help: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.func,
    formGroup: PropTypes.string,
    formLabel: PropTypes.string,
    formError: PropTypes.string,
    formText: PropTypes.string,
    meta: PropTypes.shape({
      submitFailed: PropTypes.bool.isRequired,
      invalid: PropTypes.bool.isRequired,
      error: PropTypes.string
    }).isRequired,
    context: PropTypes.shape({
      checkCondition: PropTypes.func
    }).isRequired
  };

  WrappedComponent.defaultProps = {
    label: null,
    text: null,
    type: null,
    formGroup: null,
    formLabel: null,
    formError: null,
    formText: null,
    disabled: null
  };

  return WrappedComponent;
}
