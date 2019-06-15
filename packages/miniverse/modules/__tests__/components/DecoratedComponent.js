import React from 'react';
import PropTypes from 'prop-types';
import provideHooks from '../../provideHooks';
import withSummer from '../../withMiniverse';
let i = 0;
@provideHooks({
  fetch: ({ miniverse }) => {
    return miniverse.zip(
      miniverse.getService('Github').getUsers()
    );
  }
})
@withSummer({
  watch: {
    github: ['users']
  }
})
class TestComponent extends React.Component {
  render() {
    i += 1;
    return (<div>Rendered: <span>{i}</span> {JSON.stringify(this.props.github)}</div>);
  }
}

TestComponent.propTypes = {
  github: PropTypes.objectOf(PropTypes.any)
};

export default TestComponent;

