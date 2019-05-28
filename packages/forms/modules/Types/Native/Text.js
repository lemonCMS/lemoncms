import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import context from '../../decorators/context';
import field from '../../decorators/field';

const Text = props => {
  const {
    input, placeholder, formControl, computedInvalid
  } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames('ffc-input', { 'is-invalid': computedInvalid }, formControl)}
      {...input}
    />
  );
};

Text.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

Text.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null
};

export default context(field(Text));
