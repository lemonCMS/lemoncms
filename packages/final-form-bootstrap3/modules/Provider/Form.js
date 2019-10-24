import React from "react";
import PropTypes from "prop-types";
import { Form as FinalForm } from "react-final-form";
import arrayMutators from "final-form-arrays";
import ContextWrapper from "../Context/ContextWrapper";

const Form = props => {
  const { children, className, debug, readOnly, listen, ...formProps } = props;

  return (
    <FinalForm
      {...formProps}
      mutators={{
        ...arrayMutators
      }}
      render={({ handleSubmit, ...rest }) => {
        return (
          <ContextWrapper
            {...rest}
            debug={debug}
            listen={listen}
            readOnly={readOnly}
          >
            <form onSubmit={handleSubmit} className={className}>
              {children}
            </form>
          </ContextWrapper>
        );
      }}
    />
  );
};

Form.propTypes = {
  className: PropTypes.string,
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  debug: PropTypes.bool,
  readOnly: PropTypes.bool,
  listen: PropTypes.func,
  initialValues: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.object,
      PropTypes.bool
    ])
  )
};

Form.defaultProps = {
  className: "",
  validate: () => {},
  listen: () => {},
  debug: false,
  readOnly: false,
  initialValues: {}
};

export default Form;
