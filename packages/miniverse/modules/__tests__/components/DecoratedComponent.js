import React from 'react';
import PropTypes from 'prop-types';
import provideHooks from '../../provideHooks';
import withSummer from '../../withSummer';
let i = 0;
@provideHooks({
  fetch: ({ serviceProvider }) => {
    return serviceProvider.zip(
      serviceProvider.getService('Github').getUsers()
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
    return (<div>Rerenderd: {i} {JSON.stringify(this.props.github)}</div>);
  }
}

TestComponent.propTypes = {
  github: PropTypes.objectOf(PropTypes.any)
};

export default TestComponent;

