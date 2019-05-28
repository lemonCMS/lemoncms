import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import context from '../../decorators/context';
import field from '../../decorators/field';

const Select = props => {
  const {
    input, children, placeholder, formControl, computedInvalid
  } = props;

  const {value, ...rest} = input;


  const options = Array.isArray(children) ? children : [children];
  const list = options.map((option, key) => (
    <option
      key={key}
      value={option.props.value}
      selected={String(input.value) === String(option.props.value)}
    >
      {option.props.children}
    </option>
  ));

  return (
    <select
      placeholder={placeholder}
      className={classNames('ffc-input', { 'is-invalid': computedInvalid }, formControl)}
      {...rest}
    >
      {list}
    </select>
  );
};

Select.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  placeholder: PropTypes.string,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

Select.defaultProps = {
  input: {},
  placeholder: null,
  formControl: null
};

export default context(field(Select));
