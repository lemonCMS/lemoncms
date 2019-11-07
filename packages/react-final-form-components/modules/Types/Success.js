import React from "react";
import context from "../decorators/consumer";
import { Alert } from "react-bootstrap";

const Success = props => {
  const {
    children,
    context: {
      status: { submitSucceeded }
    }
  } = props;

  if (!submitSucceeded) {
    return null;
  }
  return <Alert bsStyle={"success"}>{children}</Alert>;
};

export default context(Success);
