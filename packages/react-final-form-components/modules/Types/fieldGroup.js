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
      addon,
      help,
      disabled,
      context: { checkCondition, layout },
      meta: { submitFailed, invalid, error }
    } = props;
    const computedInvalid = submitFailed && invalid;
    const isDisabled = disabled && checkCondition(disabled);

    const getComponent = () => {
      if (addon === null) {
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
          {typeof addon === "string" && (
            <InputGroup.Addon>{addon}</InputGroup.Addon>
          )}
          {typeof addon !== "string" && addon}
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
        <Col {...layout.field}>{getComponent()}</Col>
        <FormControl.Feedback />
        {!computedInvalid && help && <HelpBlock>{help}</HelpBlock>}
        {computedInvalid && error && <HelpBlock>{error}</HelpBlock>}
        <Clearfix />
      </FormGroup>
    );
  };

  WrappedComponent.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    addon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
      checkCondition: PropTypes.func,
      layout: PropTypes.shape({
        label: PropTypes.object,
        field: PropTypes.object
      })
    }).isRequired
  };

  WrappedComponent.defaultProps = {
    label: null,
    addon: null,
    text: null,
    type: null,
    formGroup: null,
    formLabel: null,
    formError: null,
    formText: null,
    disabled: null,
    context: {
      layout: {
        label: { sm: 4 },
        field: { sm: 8 }
      }
    }
  };

  return WrappedComponent;
}
