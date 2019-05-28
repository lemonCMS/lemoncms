import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import consumer from '../../decorators/consumer';

const Message = props => {
  const {
    type,
    className,
    context: {
      status: {
        invalid, valid, submitSucceeded, submitFailed
      }
    },
    children
  } = props;

  if (type === 'success') {
    if (valid && submitSucceeded) {
      return <div className={classNames(['message-success', className])}>{children}</div>;
    }
    return null;
  }

  if (invalid && submitFailed) {
    return <div className={classNames(['message-error', className])}>{children}</div>;
  }

  return null;
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  context: PropTypes.shape({
    status: PropTypes.shape({
      invalid: PropTypes.bool,
      valid: PropTypes.bool,
      submitFailed: PropTypes.bool,
      submitSucceeded: PropTypes.bool
    })
  }),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};

Message.defaultProps = {
  className: '',
  context: {}
};

export default consumer(Message);
