import React from "react";
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Decorated from './components/DecoratedComponent';
import PassedThroughComponent from './__mock__/PassedThroughComponent';
import MiniverseContext from '../MiniverseContext';
import Miniverse from '../Miniverse';
import Github from './__mock__/Github-mock';
import mockTinyWarning from 'tiny-warning';
import { ajax } from 'rxjs/ajax';
import {
  of,
  throwError
} from 'rxjs';

jest.mock("rxjs/ajax");

jest.mock("tiny-warning");
let sP = null;
beforeEach(() => {
  sP = new Miniverse({ Github });
  jest.resetAllMocks();
});

const Mock = () => (
  <MiniverseContext.Provider value={{ miniverse: sP }}>
    <Decorated />
  </MiniverseContext.Provider>);

const PassedThroughMock = () => (
  <MiniverseContext.Provider value={{ miniverse: sP }}>
    <PassedThroughComponent />
  </MiniverseContext.Provider>
);

describe('Miniverse', () => {

  test("Should just render child component", (done) => {
    const tree = renderer
      .create(<PassedThroughMock />);
    process.nextTick(() => {
      const output = tree.toJSON();
      expect(output).toMatchSnapshot();
      done();
    });
  });

  test("Should just log error", (done) => {
    ajax.mockImplementationOnce(() =>
      throwError('error')
    );
    sP.getService('Github').getUsers();

    const tree = renderer
      .create(<Mock />);
    expect(ajax).toHaveBeenCalledTimes(1);
    process.nextTick(() => {
      const output = tree.toJSON();
      expect(output).toMatchSnapshot();
      expect(mockTinyWarning).toBeCalled();
      done();
    });
  });


  test("Should fetch, watch and render Github users", (done) => {
    ajax.mockImplementationOnce(() =>
      of({
        response: { data: { github: true } }
      })
    );

    sP.getService('Github').getUsers();

    const component = mount(<Mock />);

    expect(ajax).toHaveBeenCalledTimes(1);

    process.nextTick(() => {
      const subjects = sP.getService('Github').getLocations();
      expect(Object.keys(sP.getService('Github').getLocations())).toHaveLength(1);
      Object.keys(subjects).forEach(resource => {
        expect(Object.keys(subjects[resource])).toHaveLength(1)
      });


      const wrapped = component.find('TestComponent');
      // console.log(component.debug());
      expect(wrapped).toBeDefined();
      expect(wrapped.props().github.users.data.github).toBeTruthy();
      // expect(component.find('span').text()).toEqual("1");
      process.nextTick(() => {
        component.unmount();

        expect(Object.keys(subjects)).toHaveLength(1);
        Object.keys(subjects).forEach(resource => {
          expect(Object.keys(subjects[resource])).toHaveLength(0)
        });
        done();
      });
    });
  });

  test("Should fetch, watch and render and update Github users", (done) => {
    ajax
      .mockImplementationOnce(() =>
        of({ response: { data: { github: true } } })
      )
      .mockImplementationOnce(() =>
        of({ response: { data: { github: false } } })
      )
    ;

    sP.getService('Github').getUsers();

    const component = mount(<Mock />);

    expect(ajax).toHaveBeenCalledTimes(1);

    process.nextTick(() => {
      const subjects = sP.getService('Github').getLocations();
      expect(Object.keys(sP.getService('Github').getLocations())).toHaveLength(1);
      Object.keys(subjects).forEach(resource => {
        expect(Object.keys(subjects[resource])).toHaveLength(1)
      });

      let wrapped = null;
      wrapped = component.find('TestComponent');
      // console.log(component.debug());
      expect(wrapped).toBeDefined();
      expect(wrapped.props().github.users.data.github).toBeTruthy();

      sP.getService('Github').getUsers();
      expect(ajax).toHaveBeenCalledTimes(2);

      process.nextTick(() => {
        component.update();
        wrapped = component.find('TestComponent');
        expect(wrapped.props().github.users.data.github).toEqual(false);

        sP.getService('Github').resetUsers();
        expect(ajax).toHaveBeenCalledTimes(2);
        process.nextTick(() => {
          component.update();
          wrapped = component.find('TestComponent');
          expect(wrapped.props().github.users).toEqual(null);
          done();
        });
      });
    });
  });

  test("Should fetch from cache boolean", () => {
    ajax
      .mockImplementationOnce(() =>
        of({ response: { data: { github: true } } })
      );

    sP.getService('Github').getUsersCacheBoolean();
    sP.getService('Github').getUsersCacheBoolean();
    expect(ajax).toHaveBeenCalledTimes(1);

  });

  test("Should fetch from cache object", () => {
    ajax
      .mockImplementation(() =>
        of({ response: { data: { page: 1 } } })
      )
      .mockImplementation(() =>
        of({ response: { data: { page: 2 } } })
      );

    sP.getService('Github').getUsersCacheObject({page: 1});
    sP.getService('Github').getUsersCacheObject({page: 1});
    sP.getService('Github').getUsersCacheObject({page: 2});
    expect(ajax).toHaveBeenCalledTimes(2);

  });
});
