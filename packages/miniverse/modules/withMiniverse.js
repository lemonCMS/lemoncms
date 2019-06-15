import React from 'react';
import warning from 'tiny-warning';
import {
  createWatchers,
  unsubscribeWatchers
} from './createWatchers';
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
    state = {
      updated: 0
    };

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
     * @type {{}}
     */
    data = {};

    /**
     *
     * @param props
     * @param context
     */
    constructor(props, context) {
      super(props, context);
      const { miniverse } = props;
      this.provider = miniverse;
      this.deepLocation = conf.name || Component.displayName || Component.name || Component.constructor.name;
      this.state = {
        updated: 0
      };
      const callback = {
        next: (service, watcher, data) => {
          this.updateState(service, watcher, data);
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
      const oldState = JSON.parse(JSON.stringify(this.data));
      if (typeof oldState[service] === 'undefined') {
        oldState[service] = {};
      }
      if (typeof oldState[service][watcher] === 'undefined') {
        oldState[service][watcher] = {};
      }

      oldState[service][watcher] = JSON.parse(JSON.stringify(data));

      if (!deepEqual(this.data, oldState)) {
        this.data = oldState;
        if (this.mounted) {
          const { updated } = this.state;
          this.setState({updated: updated + 1});
        }
      }
    };

    /**
     *
     * @returns {*}
     */
    render() {
      this.mounted = true;
      const newProps = Object.assign({}, { ...this.cache }, { ...this.data });
      return <Component {...this.props} {...newProps} {...this.context} />;
    }
  }

  Subscriber.propTypes = {
    miniverse: PropTypes.objectOf(PropTypes.any).isRequired
  };

  return props => (
    <MiniverseContext.Consumer>{context => <Subscriber {...props} {...context} />}</MiniverseContext.Consumer>
  );
};


