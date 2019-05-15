import React from 'react';
import provideHooks from '../../provideHooks';
import { ReplaySubject } from 'rxjs';

@provideHooks({
  fetch: ({ serviceProvider }) => {
    const sub$ = new ReplaySubject();
    sub$.error('SOMETHING IS WRONG');
    return serviceProvider.zip(sub$);
  }
})
class ComponentWithError extends React.Component {
  render() {
    return (<div />);
  }
}

export default ComponentWithError;

