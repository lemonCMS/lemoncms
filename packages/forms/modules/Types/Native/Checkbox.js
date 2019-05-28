import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import context from '../../decorators/context';
import field from '../../decorators/field';

const Checkbox = props => {
  const {
    input, isDisabled, multiple, children, formControl, computedInvalid
  } = props;

  const radioList = Array.isArray(children) ? children : [children];

  const onChange = (event, key, option) => {
    if (multiple) {
      const newValue = (input.value instanceof Array ? input.value : [input.value]).filter(Boolean);
      if (event.target.checked) {
        newValue.push(option.props.value);
      } else {
        newValue.splice(newValue.indexOf(option.props.value), 1);
      }
      return input.onChange(newValue);
    }
    return input.onChange(event.target.checked ? option.props.value : false);
  };

  const list = radioList.map((option, key) => {
    const name = multiple ? `${input.name}[${key}]` : input.name;
    const value = (Array.isArray(input.value) ? input.value : [input.value]).filter(val => String(val));
    const checked = value.indexOf(option.props.value) !== -1;

    return (
      <div className="form-check" key={option.props.value}>
        <input
          type="checkbox"
          name={name}
          disabled={isDisabled}
          id={`${input.name}_${key}`}
          value={option.props.value}
          className={classNames('form-check-label')}
          checked={checked}
          onChange={event => onChange(event, key, option)}
        />{' '}
        <label htmlFor={`${input.name}_${key}`} className={classNames('form-check-label')}>
          {option.props.children}
        </label>
      </div>
    );
  });

  return <div className={classNames('ffc-input', { 'is-invalid': computedInvalid }, formControl)}>{list}</div>;
};

Checkbox.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  formControl: PropTypes.string,
  multiple: PropTypes.bool,
  isDisabled: PropTypes.bool,
  computedInvalid: PropTypes.bool.isRequired
};

Checkbox.defaultProps = {
  input: {},
  formControl: null,
  multiple: false,
  isDisabled: false
};

export default context(field(Checkbox));
