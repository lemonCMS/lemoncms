import React from 'react';
import PropTypes from 'prop-types';
import provideHooks from '../../provideHooks';
import withSummer from '../../withSummer';
let i = 0;
@provideHooks({
  fetch: 'a string!!'
})
@withSummer({
  watch: {
    github: ['users']
  }
})
class ComponentFakeHook extends React.Component {
  render() {
    i += 1;
    return (<div>Rerenderd: {i} {JSON.stringify(this.props.github)}</div>);
  }
}

ComponentFakeHook.propTypes = {
  github: PropTypes.objectOf(PropTypes.any)
};

export default ComponentFakeHook;

