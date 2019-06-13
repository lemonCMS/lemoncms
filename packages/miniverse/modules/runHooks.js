import { BehaviorSubject } from 'rxjs';
import { last } from 'rxjs/operators';
import warning from 'tiny-warning';
import propName from './propName';

export default class RunHooks {
  /**
   *
   * @type {null}
   */
  sub$ = null;

  /**
   *
   * @type {Array}
   */
  components = [];

  /**
   *
   * @type {Array}
   */
  hooks = [];

  /**
   *
   * @type {null}
   */
  name = null;

  /**
   *
   * @type {null}
   */
  locals = null;

  /**
   *
   * @type {boolean}
   */
  shouldRun = true;

  /**
   *
   * @type {number}
   */
  willRun = 0;

  /**
   *
   * @type {number}
   */
  hasRun = 0;

  /**
   *
   * @param name
   * @param components
   * @param locals
   */
  constructor(name, components, locals) {
    this.components = components;
    this.name = name;
    this.locals = locals;
    this.sub$ = new BehaviorSubject();
    this.reset();
  }

  /**
   *
   * @param next
   * @param error
   * @param complete
   * @returns {*}
   */
  subscribe = (next, error = () => {
  }, complete = () => {
  }) => {
    this.run();
    this.sub$.subscribe(next, error, complete);
  };

  /**
   *
   * @param data
   */
  next = data => {
    this.sub$.next(data);
  };

  /**
   *
   * @param data
   * @returns {*}
   */
  error = data => this.sub$.error(data);

  /**
   *
   * @returns {*}
   */
  complete = () => this.sub$.complete();

  /**
   *
   */
  reset = () => {
    this.hooks = this.getHooks(this.components, this.name);
    this.willRun = this.hooks.length;
    this.shouldRun = this.willRun > 0;

  };

  /**
   *
   * @param components
   * @param name
   * @returns {any[]}
   */
  getHooks = (components, name) => {
    return (Array.isArray(components) ? components : [components])

      .filter(component => component)

      .map(component => ({
        component,
        hooks: component.default
          ? component.default[propName]
          : component[propName],
      }))

      .filter(({ hooks }) => hooks && hooks[name])
      .map(({ component, hooks }) => {
        const hook = hooks[name];

        if (typeof hook !== 'function') {
          throw new Error('decorator provideHooks MUST contain "fetch" or "defer" functions');
        }

        return { hook, component };
      });
  };

  /**
   *
   * @returns {*}
   */
  run = () => {
    this.hasRun += 1;

    if (!this.shouldRun) {
      this.next();
      // this.complete();
      return;
    }

    if (this.hooks.length === 0) {
      warning(true, 'RunHooks has run more times then he could handle.' +
        `Should run: ${this.willRun}, Has run: ${this.hasRun}` +
        '@morty should return rxjs zip()');
      this.next();
      return;
    }

    const hook = this.hooks.shift();
    if (this.hooks.length === 0) {
      return this.runHook(hook).subscribe(
        () => this.next(),
        err => this.error(err),
        () => this.complete()
      );
    }

    return this.runHook(hook).subscribe(
      () => {
        this.run();
      },
      err => this.error(err)
    );
  };

  /**
   *
   * @param hook
   * @param component
   * @returns {*}
   */
  runHook = ({ hook, component }) => {
    return typeof this.locals === 'function'
      ? hook(this.locals(component))
      : hook(this.locals);
  };
}
