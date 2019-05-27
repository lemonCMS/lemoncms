import React from 'react';
import renderer from 'react-test-renderer';
import Rick from '../Rick';
import Miniverse from '../Miniverse';
import Github from './__mock__/Github-mock';
import Component from './components/DecoratedComponent';
import ComponentFakeHook from './components/ComponentFakeHook';
import ComponentThatDoesToMuch from './components/ComponentThatDoesToMuch';
import ComponentWithError from './components/ComponentWithError';
import WatchComponent from './components/WatchComponent';
import PlainComponent from './components/PlainComponent';
import axios from 'axios';
import mockTinyWarning from 'tiny-warning';
import MeeSeeksContext from '../MeeSeeksContext';

jest.mock("tiny-warning");
jest.mock("axios");

describe('Rick should do it', () => {
  test('Should retreive data', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      serviceProvider: initiatedServiceProvider
    };

    const components = [];
    components.push(Component);
    axios.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: ["cat.jpg"] }
      })
    );
    const rick = new Rick('fetch', components, providers);
    rick.subscribe(() => {
      process.nextTick(() => {
        initiatedServiceProvider.eject().subscribe((data) => {
          expect(data.Github['https://api.github.com/users']).toBeDefined();
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
      serviceProvider: initiatedServiceProvider
    };

    const components = [];
    components.push(ComponentFakeHook);
    axios.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: ["cat.jpg"] }
      })
    );

    expect(() => {
      const rick = new Rick('fetch', components, providers);
      rick.subscribe(() => {
        process.nextTick(() => {

          initiatedServiceProvider.eject().subscribe((data) => {
            expect(data.Github['https://api.github.com/users']).not.toBeDefined();
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
      serviceProvider: initiatedServiceProvider
    };

    const components = [];
    components.push(PlainComponent);
    const rick = new Rick('fetch', components, providers);
    rick.subscribe(() => {
      initiatedServiceProvider.eject().subscribe((data) => {
        expect(data.Github['https://api.github.com/users']).not.toBeDefined();
        done();
      });
    });
  })

  test('Should throw warning about to many renders', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      serviceProvider: initiatedServiceProvider
    };

    const components = [];
    components.push(ComponentThatDoesToMuch);
    components.push(ComponentThatDoesToMuch);
    axios.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: ["cat.jpg"] }
      })
    );
    const rick = new Rick('fetch', components, providers);
    rick.subscribe(() => {
      process.nextTick(() => {
        initiatedServiceProvider.eject().subscribe(() => {
          expect(mockTinyWarning).toBeCalled();
          done();
        });
      });
    });
  })

  test('Should resolve a error with multiple componentns', (done) => {
    const initiatedServiceProvider = new Miniverse({
      Github
    });
    const providers = {
      serviceProvider: initiatedServiceProvider
    };

    const components = [];
    components.push(ComponentWithError);
    components.push(ComponentThatDoesToMuch);
    axios.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: ["cat.jpg"] }
      })
    );
    const rick = new Rick('fetch', components, providers);
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
      serviceProvider: initiatedServiceProvider
    };

    const components = [];
    components.push(ComponentWithError);
    axios.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: ["cat.jpg"] }
      })
    );
    const rick = new Rick('fetch', components, providers);
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
      serviceProvider: initiatedServiceProvider
    };

    const components = [];
    components.push(Component);
    components.push(WatchComponent);
    axios.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: ["cat.jpg"] }
      })
    );
    const rick = new Rick('fetch', components, providers);
    rick.subscribe(() => {
      const tree = renderer
        .create(<MeeSeeksContext.Provider value={providers}>
          <WatchComponent />
        </MeeSeeksContext.Provider>);
      process.nextTick(() => {
        const output = tree.toJSON();
        expect(output).toMatchSnapshot();
        done();
      });
    });
  })
})
;

