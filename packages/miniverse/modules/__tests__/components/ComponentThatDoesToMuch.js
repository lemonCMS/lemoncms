import React from 'react';
import PropTypes from 'prop-types';
import provideHooks from '../../provideHooks';
import withSummer from '../../withMiniverse';
import { of } from 'rxjs';

let i = 0;

@provideHooks({
  fetch: () => {
    return of(1, 2, 3, 4, 5, 6)
  }
})
@withSummer({
  watch: {
    github: ['users']
  }
})
class ComponentThatDoesToMuch extends React.Component {
  render() {
    i += 1;
    return (<div>Rerenderd: {i} {JSON.stringify(this.props.github)}</div>);
  }
}

ComponentThatDoesToMuch.propTypes = {
  github: PropTypes.objectOf(PropTypes.any)
};

export default ComponentThatDoesToMuch;

