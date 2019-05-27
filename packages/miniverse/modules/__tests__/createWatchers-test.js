import {
  createWatchers,
  unsubscribeWatchers,
  Miniverse
} from 'miniverse';
import Github from './__mock__/Github-mock';
import axios from 'axios';

jest.mock("axios");

const miniverse = new Miniverse({
  Github
});
const callback = {
  next: jest.fn(),
  error: jest.fn(),
  complete: jest.fn()
};

const conf = {
  watch: {
    github: ['users']
  }
};

describe('CreateWatchers', () => {
  test('should return 1 watcher', () => {

    const watchers = createWatchers('Github', miniverse, conf, callback);
    expect(watchers).toHaveLength(1);
  });

  test('should not return watcher', () => {
    const confRepo = {
      watch: {
        github: ['repos']
      }
    };
    console.error = jest.fn();
    createWatchers('Github', miniverse, confRepo, callback);
    expect(console.error).toHaveBeenCalled();
  });


  test('should fail on unsubscribe non existing service', () => {
    const confRepo = {
      watch: {
        github: ['users']
      }
    };
    console.error = jest.fn();
    createWatchers('Github', miniverse, confRepo, callback);

    const confRepoFalse = {
      watch: {
        github: ['repos']
      }
    };
    unsubscribeWatchers('Github', miniverse, confRepoFalse);
    expect(console.error).toHaveBeenCalled();
  });

  test('should have called callback next', done => {
    axios.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: ["cat.jpg"] }
      })
    );

    const callBack = {
      next: () => {
        done();
      }
    };

    createWatchers('github', miniverse, conf, callBack);
    miniverse
      .getService('Github')
      .getUsers()
      .subscribe((data) => {
        expect(data.results[0]).toBe('cat.jpg');
      }
    );
  });

  test('should have called callback error', done => {
    axios.mockImplementationOnce(() =>
      Promise.reject('error')
    );

    const callBack = {
      next: () => {},
      error: () => {
        done();
      }
    };

    createWatchers('github', miniverse, conf, callBack);
    miniverse.getService('Github').getUsers().subscribe(() => {
      },
      (error) => {
        expect(error).toBe('error');
      }
    );
  });
});
