import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import context from '../../decorators/context';
import field from '../../decorators/field';

const Password = props => {
  const {
    input, placeholder, formControl, computedInvalid
  } = props;
  return (
    <input
      type={'password'}
      placeholder={placeholder}
      className={classNames('ffc-input', { 'is-invalid': computedInvalid }, formControl)}
      {...input}
    />
  );
};

Password.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

Password.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null
};

export default context(field(Password));
