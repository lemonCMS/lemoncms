/* eslint react/no-unused-state: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router';
import NProgress from 'nprogress';
import { runHooks as RunHooks } from 'react-miniverse';
import asyncMatchRoutes from '../../utils/asyncMatchRoutes';

const Error = () => (
  <div>
    <h1>Error</h1>
    <p>Unfortunately there has been an irrecoverable error.</p>
    <p>So... well, yeah nothing we can do right now.</p>
  </div>
);


class AsyncConnect extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    routes: PropTypes.arrayOf(PropTypes.any).isRequired,
    helpers: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    errorPage: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any)]),
  };

  static defaultProps = {
    errorPage: null
  };

  constructor(props) {
    console.log(props);

    super(props);
    this.runMiniverse = this.runMiniverse.bind(this);
    this.state = {
      location: props.location,
      nextLocation: {
        pathname: '',
        search: ''
      },
      inTransition: false,
      authorized: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname === state.nextLocation.pathname
      && props.location.search === state.nextLocation.search
    ) {
      return null;
    }

    if (props.location.pathname !== state.location.pathname
      || props.location.search !== state.location.search
    ) {
      return {
        nextLocation: Object.assign({}, props.location)
      };
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    const { inTransition, nextLocation: { pathname, search } } = this.state;
    if (inTransition === false) {
      if (prevState.nextLocation.pathname !== pathname
        || prevState.nextLocation.search !== search
      ) {
        const {
          history, location, routes, helpers
        } = this.props;
        this.runMiniverse(history, location, routes, helpers, true);
      }
    }
  }

  async runMiniverse(history, location, routes, helpers) {
    NProgress.start();
    this.setState({ inTransition: true });
    const { components, match, params } = await asyncMatchRoutes(routes, location.pathname);
    const triggerLocals = {
      ...helpers,
      match,
      params,
      history,
      location
    };
    new RunHooks('fetch', components, triggerLocals).subscribe(() => {
      new RunHooks('defer', components, triggerLocals).subscribe(() => {
        this.setState({ inTransition: false, location });
        NProgress.done();
      });
    });
  }

  render() {
    const { children, errorPage } = this.props;
    const { authorized, location } = this.state;
    if (authorized) {
      return (
        <Route
          location={location}
          render={() => children}
        />
      );
    }

    if (errorPage !== null) {
      const ErrorPage = errorPage;

      return (
        <Route
          location={location}
          render={() => <ErrorPage error="Not authorized" />}
        />
      );
    }

    return (
      <Route
        location={location}
        render={() => <Error />}
      />
    );
  }
}

export default withRouter(AsyncConnect);
