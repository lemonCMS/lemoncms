import React from 'react';
import warning from 'tiny-warning';
import { createWatchers, unsubscribeWatchers } from './createWatchers';
import { deepEqual } from 'fast-equals';
import PropTypes from 'prop-types';
import MiniverseContext from './MiniverseContext';

/**
 *
 * @param conf
 * @returns {Function}
 */
export default (conf = null) => Component => {
  if (!conf) {
    return props => (
      <MiniverseContext.Consumer>{context => <Component {...props} {...context} />}</MiniverseContext.Consumer>
    );
  }

  class Subscriber extends React.PureComponent {

    /**
     *
     * @type {{}}
     */
    state = {};

    /**
     *
     * @type {{}}
     */
    cache = {};

    /**
     *
     * @type {null}
     */
    deepLocation = null;

    /**
     *
     * @type {null}
     */
    provider = null;

    /**
     *
     * @type {boolean}
     */
    mounted = false;

    /**
     *
     * @param props
     * @param context
     */
    constructor(props, context) {
      super(props, context);
      const { serviceProvider } = props;
      this.provider = serviceProvider;
      this.deepLocation = conf.name || Component.displayName || Component.name || Component.constructor.name;
      const callback = {
        next: (service, watcher, data) => {
          this.state = this.updateState(service, watcher, data);
        },
        error: (service, watcher, error) => {
          warning(true, error);
          this.updateState(service, watcher, error);
        }
      };
      createWatchers(this.deepLocation, this.provider, conf, callback);
    }

    /**
     *
     */
    componentWillUnmount() {
      unsubscribeWatchers(this.deepLocation, this.provider, conf);
    }

    /**
     *
     * @param service
     * @param watcher
     * @param data
     * @returns {any}
     */
    updateState = (service, watcher, data) => {
      const oldState = JSON.parse(JSON.stringify(this.state));
      if (typeof oldState[service] === 'undefined') {
        oldState[service] = {};
      }
      if (typeof oldState[service][watcher] === 'undefined') {
        oldState[service][watcher] = {};
      }

      oldState[service][watcher] = JSON.parse(JSON.stringify(data));

      if (!deepEqual(this.state, oldState)) {
        if (this.mounted) {
          this.setState(oldState);
        }

        return oldState;
      }
    };

    /**
     *
     * @returns {*}
     */
    render() {
      this.mounted = true;
      const newProps = Object.assign({}, { ...this.cache }, { ...this.state });
      return <Component {...this.props} {...newProps} {...this.context} />;
    }
  }

  Subscriber.propTypes = {
    serviceProvider: PropTypes.objectOf(PropTypes.any).isRequired
  };

  return props => (
    <MiniverseContext.Consumer>{context => <Subscriber {...props} {...context} />}</MiniverseContext.Consumer>
  );
};


