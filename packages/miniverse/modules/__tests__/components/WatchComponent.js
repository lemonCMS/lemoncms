import React from 'react';
import PropTypes from 'prop-types';
import withSummer from '../../withMiniverse';

let i = 0;

@withSummer({
  watch: {
    github: ['users']
  }
})
class WatchComponent extends React.Component {
  render() {
    i += 1;
    return (<div>Rerenderd: {i} {JSON.stringify(this.props.github)}</div>);
  }
}

WatchComponent.propTypes = {
  github: PropTypes.objectOf(PropTypes.any)
};

export default WatchComponent;

