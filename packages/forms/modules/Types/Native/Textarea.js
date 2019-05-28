import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import context from '../../decorators/context';
import field from '../../decorators/field';

const Textarea = props => {
  const {
    input, placeholder, formControl, computedInvalid, rows
  } = props;
  const {value, ...rest} = input;
  return (
    <textarea
      placeholder={placeholder}
      className={classNames('ffc-input', { 'is-invalid': computedInvalid }, formControl)}
      rows={rows}
      {...rest}
    />
  );
};

Textarea.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired,
  rows: PropTypes.number
};

Textarea.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null,
  rows: 10
};

export default context(field(Textarea));
