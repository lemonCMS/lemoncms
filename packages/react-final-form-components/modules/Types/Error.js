import React from "react";
import context from "../decorators/consumer";
import { Alert } from "react-bootstrap";

const Error = props => {
  const {
    children,
    context: {
      status: { submitFailed, submitError, error }
    }
  } = props;

  if (!submitFailed) {
    return null;
  }

  return (
    <Alert bsStyle={"danger"}>
      {children}
      <div>
        {error}
        {submitError}
      </div>
    </Alert>
  );
};

export default context(Error);
