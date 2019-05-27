import React from "react";
import renderer from 'react-test-renderer';
import Decorated from './components/DecoratedComponent';
import PassedThroughComponent from './__mock__/PassedThroughComponent';
import MeeSeeksContext from '../MeeSeeksContext';
import Miniverse from '../Miniverse';
import Github from './__mock__/Github-mock';
import axios from 'axios';
import mockTinyWarning from 'tiny-warning';

jest.mock("axios");
jest.mock("tiny-warning");
const helpers = {
  client: axios,
  testHelper: () => {
    return true;
  }
};

const sP = new Miniverse({ Github });
sP.setHelpers(helpers);
const Mock = () => (
  <MeeSeeksContext.Provider value={{ serviceProvider: sP }}>
    <Decorated />
  </MeeSeeksContext.Provider>);

const PassedThroughMock = () => (
  <MeeSeeksContext.Provider value={{ serviceProvider: sP }}>
    <PassedThroughComponent />
  </MeeSeeksContext.Provider>
);

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  axios.mockClear();

});


describe('Summer', () => {

  test("Should just render child component",  (done) => {
    const tree = renderer
      .create(<PassedThroughMock />);
    process.nextTick(() => {
      const output = tree.toJSON();
      expect(output).toMatchSnapshot();
      done();
    });
  });

  test("Should just log error",  (done) => {
    axios.mockImplementationOnce(() =>
      Promise.reject('error')
    );
    sP.getService('Github').getUsers();

    const tree = renderer
      .create(<Mock />);
    expect(axios).toHaveBeenCalledTimes(1);
    process.nextTick(() => {
      const output = tree.toJSON();
      expect(output).toMatchSnapshot();
      expect(mockTinyWarning).toBeCalled();
      done();
    });
  });


  test("Should fetch, watch and render Github users",  (done) => {
    axios.mockImplementationOnce(() =>
      Promise.resolve({
        data: { github: true }
      })
    );

    sP.getService('Github').getUsers();

    const tree = renderer
      .create(<Mock />);

    expect(axios).toHaveBeenCalledTimes(1);

    process.nextTick(() => {
      const output = tree.toJSON();
      expect(output).toMatchSnapshot();
      const subjects = sP.getService('Github').getLocations();
      expect(Object.keys(sP.getService('Github').getLocations())).toHaveLength(1);
      Object.keys(subjects).forEach(resource => {
        expect( Object.keys(subjects[resource])).toHaveLength(1)
      });

      tree.unmount();
      process.nextTick(() => {
        expect(Object.keys(subjects)).toHaveLength(1);
        Object.keys(subjects).forEach(resource => {
          expect( Object.keys(subjects[resource])).toHaveLength(0)
        });
        done();
      });
    });


  });
});
