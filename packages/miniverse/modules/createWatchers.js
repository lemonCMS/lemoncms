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
      watchers.push(service.watch(watcher, `${deepLocation}-constructor`).subscribe(
        next => callback.next(serviceName, watcher, next),
        error => callback.error(serviceName, watcher, error)
      ));
    });
  }
};

const unsubscribeMiniverse = (deepLocation, miniverse, serviceName) => {
  const service = miniverse.getService(capitalizeFirstLetter(serviceName));
  if (service) {
    service.unsubscribeByComponent(`${deepLocation}-constructor`);
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
