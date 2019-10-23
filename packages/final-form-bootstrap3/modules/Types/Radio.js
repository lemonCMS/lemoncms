import React from "react";
import PropTypes from "prop-types";
import RadioAlias from "react-bootstrap/lib/Radio";
import context from "../decorators/context";
import fieldGroup from "./fieldGroup";

const createRadioButtons = (children, initialValue, emit, name) => {
  if (
    children &&
    Array.isArray(children) &&
    React.isValidElement(children[0]) &&
    children[0].type === "option"
  ) {
    return children.map(option => {
      const { value, children } = option.props;
      return (
        <RadioAlias
          name={name}
          key={value}
          checked={value === initialValue}
          onChange={event => {
            emit(event, value);
          }}
        >
          {children}
        </RadioAlias>
      );
    });
  }
};

const Radio = props => {
  const { input, children } = props;

  const emit = (event, value) => {
    input.onChange(value);
  };

  return <>{createRadioButtons(children, input.value, emit, input.name)}</>;
};

Radio.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number
    ])
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  computedInvalid: PropTypes.bool.isRequired
};

Radio.defaultProps = {
  input: {},
  children: [],
  label: null,
  help: null,
  placeholder: null
};

export default context()(fieldGroup(Radio));
