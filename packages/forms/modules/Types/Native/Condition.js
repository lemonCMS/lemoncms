import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../Context/AppContext';

const Condition = props => {
  const {
    context, children, hidden, visible
  } = props;
  if (hidden && context.checkCondition(hidden)) {
    return null;
  }
  if (visible && !context.checkCondition(visible)) {
    return null;
  }
  return children;
};

Condition.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  context: PropTypes.shape({
    checkCondition: PropTypes.func
  }).isRequired,
  hidden: PropTypes.func,
  visible: PropTypes.func
};

Condition.defaultProps = {
  hidden: null,
  visible: null
};

export default props => (
  <AppContext.Consumer>{context => <Condition context={context} {...props} />}</AppContext.Consumer>
);
