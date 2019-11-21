import React from "react";
import context from "../decorators/consumer";
import { Button as BsButton } from "react-bootstrap";

const Button = props => {
  const {
    children,
    disabled,
    context: {
      status: { submitting }
    },
    ...rest
  } = props;
  const computedDisabled = disabled || submitting || false;
  return (
    <BsButton {...rest} disabled={computedDisabled}>
      {children}
    </BsButton>
  );
};

export default context(Button);
