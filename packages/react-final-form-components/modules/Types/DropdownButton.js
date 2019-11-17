import React from "react";
import PropTypes from "prop-types";
import {
  DropdownButton as DropdownButtonAlias,
  MenuItem,
  InputGroup
} from "react-bootstrap";
import context from "../decorators/context";

const createMenuitems = children => {
  return children.map(option => {
    if (option.type !== "option") {
      return option;
    }
    const { value, children } = option.props;
    return (
      <MenuItem key={value} eventKey={value}>
        {children}
      </MenuItem>
    );
  });
};

const extractTitle = (placeholder, selectedValue, children) => {
  if (!selectedValue) {
    return placeholder;
  }
  let title = "x";

  children.forEach(child => {
    if (child.type !== "option") {
      return;
    }

    const {
      props: { value }
    } = child;
    if (String(selectedValue) === String(value)) {
      if (typeof child.props.children === "string") {
        title = child.props.children;
      }
    }
  });
  return title;
};

const DropdownButton = props => {
  const {
    input: { name, onChange, value },
    disabled,
    children,
    placeholder,
    context: { checkCondition },
    meta: { submitFailed, invalid }
  } = props;
  const computedInvalid = submitFailed && invalid;
  const isDisabled = disabled && checkCondition(disabled);

  return (
    <DropdownButtonAlias
      id={`input-dropdown-${name}`}
      title={extractTitle(placeholder, value, children)}
      onSelect={eventKey => onChange(eventKey)}
      componentClass={InputGroup.Button}
      disabled={isDisabled}
    >
      {createMenuitems(children)}
    </DropdownButtonAlias>
  );
};

DropdownButton.propTypes = {
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
  disabled: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  layout: PropTypes.shape({
    label: PropTypes.object,
    field: PropTypes.object
  })
};

DropdownButton.defaultProps = {
  input: {},
  placeholder: null,
  disabled: null,
  isDisabled: false,
  layout: null
};

export default context()(DropdownButton);
