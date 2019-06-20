/**
 *
 * @type {Array}
 */
let watchers = [];

/**
 *
 * @param string
 * @returns {string}
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const callMiniVerse = (deepLocation, miniverse, serviceName, conf, callback) => {
  const service = miniverse.getService(capitalizeFirstLetter(serviceName));
  if (service) {
    conf.watch[serviceName].forEach(watcher => {
      // const watchFunction = `watch${capitalizeFirstLetter(watcher)}`;
      const composedCB = {
        next: data => callback.next(serviceName, watcher, data),
        error: error => callback.error(serviceName, watcher, error)
      };
      watchers.push(service.watch(watcher, `${deepLocation}-constructor`, composedCB));
      /*if (typeof service[watchFunction] !== 'function') {
        console.error(`Watcher ${watchFunction} does not exist in ${serviceName} service provider.`);
        return null;
      }
      watchers.push(service[watchFunction](`${deepLocation}-constructor`, composedCB));*/
    });
  }
};

const unsubscribeMiniverse = (deepLocation, miniverse, serviceName, conf) => {
  const service = miniverse.getService(capitalizeFirstLetter(serviceName));
  if (service) {
    service.unsubscribeByComponent(`${deepLocation}-constructor`);
/*    conf.watch[serviceName].forEach(watcher => {
      const watchFunction = `watch${capitalizeFirstLetter(watcher)}`;
      if (typeof service[watchFunction] !== 'function') {
        console.error(`Tried to unsubscribe ${watchFunction} in a service that does not exists ${serviceName}.`);
        return null;
      }
      service.unsubscribeByComponent(`${deepLocation}-constructor`);
    });*/
  }
};

/**
 *
 * @param deepLocation
 * @param miniverse
 * @param conf
 * @param callback
 * @returns {Array}
 */
export const createWatchers = (deepLocation, miniverse, conf, callback) => {
  if (conf.watch) {
    Object.keys(conf.watch).map(serviceName => {
      callMiniVerse(deepLocation, miniverse, serviceName, conf, callback)
    });
    return watchers;
  }
};

export const unsubscribeWatchers = (deepLocation, miniverse, conf) => {
  if (conf.watch) {
    Object.keys(conf.watch).map(serviceName => {
      unsubscribeMiniverse(deepLocation, miniverse, serviceName, conf);
    });
  }
};

export default createWatchers;
