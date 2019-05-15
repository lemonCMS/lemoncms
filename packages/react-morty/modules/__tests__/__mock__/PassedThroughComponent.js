import React from 'react';
import PropTypes from 'prop-types';
import withSummer from '../../withSummer';
let i = 0;

@withSummer()
class PassedThroughComponent extends React.Component {
  render() {
    i += 1;
    return (<div>Rerenderd: {i}</div>);
  }
}

PassedThroughComponent.propTypes = {
  github: PropTypes.objectOf(PropTypes.any)
};

export default PassedThroughComponent;

