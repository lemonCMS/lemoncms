import PropTypes from "prop-types";
import React from "react";
import { FormSpy } from "react-final-form";
import AppContext from "./AppContext";

class ContextWrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.checkCondition = this.checkCondition.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.values = {};
  }

  getStatus() {
    const {
      dirty,
      dirtySinceLastSubmit,
      error,
      errors,
      invalid,
      pristine,
      submitError,
      submitErrors,
      submitFailed,
      submitSucceeded,
      submitting,
      valid,
      validating
    } = this.props;
    return {
      dirty,
      dirtySinceLastSubmit,
      error,
      errors,
      invalid,
      pristine,
      submitError,
      submitErrors,
      submitFailed,
      submitSucceeded,
      submitting,
      valid,
      validating
    };
  }

  checkCondition(args) {
    const { values } = this.props;
    return args(values);
  }

  render() {
    const { debug, children, listen, layout } = this.props;
    if (debug) {
      return (
        <AppContext.Provider
          value={{
            checkCondition: this.checkCondition,
            isStatic: this.props.static, // eslint-disable-line react/destructuring-assignment
            debug,
            layout,
            status: this.getStatus()
          }}
        >
          {children}
          <FormSpy subscription={{ values: true }}>
            {({ values }) => {
              if (listen && typeof listen === 'function"') {
                listen(values);
              }
              return <pre>{JSON.stringify(values, 0, 2)}</pre>;
            }}
          </FormSpy>
        </AppContext.Provider>
      );
    }

    return (
      <AppContext.Provider
        value={{
          checkCondition: this.checkCondition,
          isStatic: this.props.static, // eslint-disable-line react/destructuring-assignment
          debug,
          layout,
          status: this.getStatus()
        }}
      >
        {children}
        {listen && typeof listen === "function" && (
          <FormSpy
            subscription={{ values: true }}
            onChange={props => {
              listen(props.values);
            }}
          />
        )}
      </AppContext.Provider>
    );
  }
}
/* eslint react/require-default-props: 0 */

ContextWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  static: PropTypes.bool, // eslint-disable-line quote-props
  values: PropTypes.oneOfType([PropTypes.object]),
  debug: PropTypes.bool,
  dirty: PropTypes.bool,
  dirtySinceLastSubmit: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.object]),
  error: PropTypes.any,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  submitErrors: PropTypes.oneOfType([PropTypes.object]),
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
  submitting: PropTypes.bool,
  valid: PropTypes.bool,
  validating: PropTypes.bool,
  listen: PropTypes.func
};

ContextWrapper.defaultProps = {
  static: false, // eslint-disable-line quote-props
  debug: false
};

export default ContextWrapper;
