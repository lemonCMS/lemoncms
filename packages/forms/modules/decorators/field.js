import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Context(Component) {
  const TmpClass = props => {
    const {
      label,
      name,
      text,
      disabled,
      formGroup,
      formLabel,
      formError,
      formText,
      context: { checkCondition },
      meta: { submitFailed, invalid, error }
    } = props;

    const computedInvalid = submitFailed && invalid;
    const isDisabled = disabled && checkCondition(disabled);
    const showText = !computedInvalid && text && <div className={classNames('ffc-help', formText)}>{text}</div>;
    const showError = computedInvalid && error && <div className={classNames('ffc-error', formError)}>{error}</div>;

    return (
      <div className={classNames('ffc-field', { 'text-danger': computedInvalid }, formGroup)}>
        {label && (
          <label htmlFor={name} className={classNames('ffc-label', formLabel)}>
            {label}
          </label>
        )}
        <Component {...props} computedInvalid={computedInvalid} isDisabled={isDisabled} />
        {showText}
        {showError}
      </div>
    );
  };

  TmpClass.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    text: PropTypes.string,
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

  TmpClass.defaultProps = {
    label: null,
    text: null,
    formGroup: null,
    formLabel: null,
    formError: null,
    formText: null,
    disabled: null
  };

  return TmpClass;
}
