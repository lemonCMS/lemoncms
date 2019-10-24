import React from "react";
import PropTypes from "prop-types";
import { FieldArray } from "react-final-form-arrays";

const Complex = props => {
  const { children, name } = props;
  let header = null;
  let childFunction = null;
  let footer = null;

  if (Array.isArray(children)) {
    children.forEach((child, index) => {
      if (React.isValidElement(child) && index === 0) {
        header = child;
        return;
      }

      if (React.isValidElement(child) && [1, 2].includes(index)) {
        footer = child;
        return;
      }

      if (typeof child === "function") {
        childFunction = child;
      }
    });
  }

  return (
    <FieldArray name={name}>
      {({ fields }) => {
        const {
          push,
          move,
          insert,
          pop,
          remove,
          shift,
          swap,
          update,
          unshift
        } = fields;
        return (
          <React.Fragment>
            {header &&
              React.cloneElement(header, {
                push,
                move,
                insert,
                pop,
                remove,
                shift,
                swap,
                update,
                unshift
              })}
            {fields.map((name, index) => (
              <React.Fragment key={name}>
                {childFunction({
                  name,
                  index,
                  push,
                  move,
                  insert,
                  pop,
                  remove,
                  shift,
                  swap,
                  update,
                  unshift
                })}
              </React.Fragment>
            ))}
            {footer &&
              React.cloneElement(footer, {
                push,
                move,
                insert,
                pop,
                remove,
                shift,
                swap,
                update,
                unshift
              })}
          </React.Fragment>
        );
      }}
    </FieldArray>
  );
};

Complex.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  name: PropTypes.string.isRequired
};

Complex.defaultProps = {
  input: {},
  label: null,
  help: null,
  placeholder: null,
  control: true
};

export default Complex;

export const Footer = props => {
  const { children, ...rest } = props;
  return children(rest);
};

Footer.propTypes = {
  children: PropTypes.func.isRequired,
  push: PropTypes.func,
  move: PropTypes.func,
  insert: PropTypes.func,
  pop: PropTypes.func,
  remove: PropTypes.func,
  shift: PropTypes.func,
  swap: PropTypes.func,
  update: PropTypes.func,
  unshift: PropTypes.func
};

export const Header = props => {
  const { children, ...rest } = props;
  return children(rest);
};

Header.propTypes = {
  children: PropTypes.func.isRequired,
  push: PropTypes.func,
  move: PropTypes.func,
  insert: PropTypes.func,
  pop: PropTypes.func,
  remove: PropTypes.func,
  shift: PropTypes.func,
  swap: PropTypes.func,
  update: PropTypes.func,
  unshift: PropTypes.func
};
