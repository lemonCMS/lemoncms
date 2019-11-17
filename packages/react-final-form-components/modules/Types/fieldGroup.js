import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Clearfix
} from "react-bootstrap";
import InputGroup from "react-bootstrap/lib/InputGroup";
import Col from "react-bootstrap/lib/Col";

export default function fieldGroup(Component) {
  const WrappedComponent = props => {
    const {
      label,
      addOn,
      help,
      disabled,
      layout: inputLayout,
      context: { checkCondition, layout: contextLayout },
      meta: { submitError, submitFailed, invalid, error }
    } = props;
    const computedInvalid = submitFailed && invalid;
    const isDisabled = disabled && checkCondition(disabled);
    const layout = { ...contextLayout, ...inputLayout };
    const getComponent = () => {
      if (addOn === null) {
        return (
          <Component
            {...props}
            computedInvalid={computedInvalid}
            isDisabled={isDisabled}
          />
        );
      }

      return (
        <InputGroup>
          <Component
            {...props}
            computedInvalid={computedInvalid}
            isDisabled={isDisabled}
          />
          {typeof addOn === "string" && (
            <InputGroup.addOn>{addOn}</InputGroup.addOn>
          )}
          {typeof addOn !== "string" && addOn}
        </InputGroup>
      );
    };

    return (
      <FormGroup validationState={computedInvalid ? "error" : null}>
        {label && (
          <Col componentClass={ControlLabel} {...layout.label}>
            {label}
          </Col>
        )}
        <Col {...layout.field}>
          {getComponent()}
          <FormControl.Feedback />
          {!computedInvalid && help && <HelpBlock>{help}</HelpBlock>}
          {computedInvalid && error && <HelpBlock>{error}</HelpBlock>}
          {computedInvalid && submitError && (
            <HelpBlock>{submitError}</HelpBlock>
          )}
        </Col>
        <Clearfix />
      </FormGroup>
    );
  };

  WrappedComponent.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    addOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    help: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.func,
    formGroup: PropTypes.string,
    formLabel: PropTypes.string,
    formError: PropTypes.string,
    formText: PropTypes.string,
    layout: PropTypes.shape({
      label: PropTypes.object,
      field: PropTypes.object
    }),
    meta: PropTypes.shape({
      submitFailed: PropTypes.bool.isRequired,
      invalid: PropTypes.bool.isRequired,
      error: PropTypes.string
    }).isRequired,
    context: PropTypes.shape({
      checkCondition: PropTypes.func,
      layout: PropTypes.shape({
        label: PropTypes.object,
        field: PropTypes.object
      })
    }).isRequired
  };

  WrappedComponent.defaultProps = {
    label: null,
    addOn: null,
    text: null,
    type: null,
    formGroup: null,
    formLabel: null,
    formError: null,
    formText: null,
    disabled: null,
    layout: {
      label: { sm: 4 },
      field: { sm: 8 }
    },
    context: {
      layout: {
        label: { sm: 4 },
        field: { sm: 8 }
      }
    }
  };

  return WrappedComponent;
}
