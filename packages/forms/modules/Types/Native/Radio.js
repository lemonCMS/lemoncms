import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import context from '../../decorators/context';
import field from '../../decorators/field';

const Radio = props => {
  const {
    input, children, formControl, computedInvalid
  } = props;

  const radioList = Array.isArray(children) ? children : [children];

  const onChange = (event, key, option) => {
    input.onChange(option.props.value);
  };

  const list = radioList.map((option, key) => (
    <div className="form-check" key={option.props.value}>
      <input
        type="radio"
        name={`${input.name}`}
        id={`${input.name}_${key}`}
        value={option.props.value}
        className={classNames('form-check-label')}
        onChange={event => onChange(event, key, option)}
        checked={String(input.value) === String(option.props.value)}
      />{' '}
      <label htmlFor={`${input.name}_${key}`} className={classNames('form-check-label')}>
        {option.props.children}
      </label>
    </div>
  ));

  return <div className={classNames('ffc-input', { 'is-invalid': computedInvalid }, formControl)}>{list}</div>;
};

Radio.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  formControl: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

Radio.defaultProps = {
  input: {},
  formControl: null
};

export default context(field(Radio));
