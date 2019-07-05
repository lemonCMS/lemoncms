import React from 'react';
import renderer from 'react-test-renderer';
import RunHooks from '../runHooks';
import Miniverse from '../Miniverse';
import Github from './__mock__/Github-mock';
import Component from './components/DecoratedComponent';
import ComponentFakeHook from './components/ComponentFakeHook';
import ComponentThatDoesToMuch from './components/ComponentThatDoesToMuch';
import ComponentWithError from './components/ComponentWithError';
import WatchComponent from './components/WatchComponent';
import PlainComponent from './components/PlainComponent';
import MiniverseContext from '../MiniverseContext';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

jest.mock("tiny-warning");
jest.mock("rxjs/ajax");


describe('RunHooks should do it', () => {
  test('Should retrieve data', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      miniverse: initiatedServiceProvider
    };

    const components = [];
    components.push(Component);
    ajax.mockImplementationOnce(() =>
      of({
        response: { results: ["cat.jpg"] }
      })
    );
    const rick = new RunHooks('fetch', components, providers);
    rick.subscribe(() => {
      done();


      process.nextTick(() => {
        initiatedServiceProvider.eject().subscribe((data) => {
          expect(data.Github['111578632']).toBeDefined();
          done();
        });
      });
    });
  });

  test('Should not return data', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      miniverse: initiatedServiceProvider
    };

    const components = [];
    components.push(ComponentFakeHook);
    ajax.mockImplementationOnce(() =>
      of({
        response: { results: ["cat.jpg"] }
      })
    );

    expect(() => {
      const rick = new RunHooks('fetch', components, providers);
      rick.subscribe(() => {
        process.nextTick(() => {

          initiatedServiceProvider.eject().subscribe((data) => {
            expect(data.Github['111578632']).not.toBeDefined();
          });
        });
      });
    }).toThrowError();
    done();

  });

  test('Should just return no execution', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      miniverse: initiatedServiceProvider
    };

    const components = [];
    components.push(PlainComponent);
    const rick = new RunHooks('fetch', components, providers);
    rick.subscribe(() => {
      initiatedServiceProvider.eject().subscribe((data) => {
        expect(data.Github['111578632']).not.toBeDefined();
        done();
      });
    });
  });

  /*test('Should throw warning about to many renders', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      miniverse: initiatedServiceProvider
    };

    const components = [];
    components.push(ComponentThatDoesToMuch);
    components.push(ComponentThatDoesToMuch);
    ajax.mockImplementationOnce(() =>
      of({
        response: { results: ["cat.jpg"] }
      })
    );
    const rick = new RunHooks('fetch', components, providers);
    rick.subscribe(() => {
      process.nextTick(() => {
        initiatedServiceProvider.eject().subscribe(() => {
          expect(mockTinyWarning).toBeCalled();
          done();
        });
      });
    });
  });*/

  test('Should resolve a error with multiple componentns', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      miniverse: initiatedServiceProvider
    };

    const components = [];
    components.push(ComponentWithError);
    components.push(ComponentThatDoesToMuch);
    ajax.mockImplementationOnce(() =>
      of({
        response: { results: ["cat.jpg"] }
      })
    );
    const rick = new RunHooks('fetch', components, providers);
    rick.subscribe(() => {

    }, (error) => {
      process.nextTick(() => {
        expect(error).toBeDefined()
        done();
      });
    });
  })

  test('Should resolve a error with single componentns', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      miniverse: initiatedServiceProvider
    };

    const components = [];
    components.push(ComponentWithError);
    ajax.mockImplementationOnce(() =>
      of({
        response: { results: ["cat.jpg"] }
      })
    );
    const rick = new RunHooks('fetch', components, providers);
    rick.subscribe(() => {

    }, (error) => {
      process.nextTick(() => {
        expect(error).toBeDefined()
        done();
      });
    });
  })

  test('Watch Component should resolve data', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      miniverse: initiatedServiceProvider
    };

    const components = [];
    components.push(Component);
    components.push(WatchComponent);
    ajax.mockImplementationOnce(() =>
      of({
        response: { results: ["cat.jpg"] }
      })
    );
    const rick = new RunHooks('fetch', components, providers);
    rick.subscribe(() => {
      const tree = renderer
        .create(<MiniverseContext.Provider value={providers}>
          <WatchComponent />
        </MiniverseContext.Provider>);
      process.nextTick(() => {
        const output = tree.toJSON();
        expect(output).toMatchSnapshot();
        done();
      });
    });
  })
})
;

