import React from 'react';
import provideHooks from '../../provideHooks';
import { BehaviorSubject } from 'rxjs';

@provideHooks({
  fetch: ({ serviceProvider }) => {
    const sub$ = new BehaviorSubject({});
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

