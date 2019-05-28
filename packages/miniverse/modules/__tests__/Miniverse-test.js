import { Miniverse } from 'miniverse';
import Github from './__mock__/Github-mock';
import axiosMock from 'axios';

const Git2 = Github;

jest.mock("axios");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  // axiosMock.mockClear();
});

const helpers = {
  client: axiosMock,
  testHelper: () => {
    return true;
  }
};

describe('Miniverse should be valid', () => {
  test('should construct Github', () => {
    const miniverse = new Miniverse({ Github });
    expect(() => {
      miniverse.getService('Githubx');
    }).toThrowError();
  });

  test('should eject github data', (done) => {
    axiosMock.mockImplementationOnce(() =>
      Promise.resolve({
        data: { github: true }
      })
    );

    const miniverse = new Miniverse({ Github, Git2 });

    miniverse.getService('Github')
      .getUsers()
      .subscribe(
        (data) => {
          expect(data.github).toBe(true);
        });
    miniverse
      .eject()
      .subscribe((data) => {
        expect(data.Github).toBeTruthy();
        done();
      })
  });

  test('should inject github data', (done) => {
    const data = {
      Github: {
        "https://api.github.com/users": {
          "github": true
        }
      }
    };

    const miniverse = new Miniverse({ Github, Git2 });

    miniverse
      .insert(data)
      .subscribe((tmpData) => {
        expect(tmpData.Github['https://api.github.com/users']).toBeTruthy();
      });

    process.nextTick(() => {
      miniverse.getService('Github')
        .watchUsers()
        .subscribe(
          (data) => {
            expect(data.github).toBe(true);
            done();

          });
    });

  });

  test('check existing helpers', () => {
    const miniverse = new Miniverse({ Github, Git2 });
    miniverse.setHelpers(helpers);
    expect(miniverse
      .getHelper('testHelper'))
      .toBeTruthy();
  });

  test('check bogus helper', () => {
    console.error = jest.fn();
    const miniverse = new Miniverse({ Github, Git2 });
    miniverse.setHelpers(helpers);
    expect(miniverse
      .getHelper('mangoHelper'));
    expect(console.error).toBeCalled();
  });

  test('expect client to be defined', () => {
    const miniverse = new Miniverse({ Github, Git2 });
    expect(miniverse).toBeInstanceOf(Miniverse);
    expect(miniverse
      .getClient())
      .toBeDefined();
  });

  test('expect resource to be reset', (done) => {
    axiosMock.mockImplementationOnce(() =>
      Promise.resolve({
        data: { github: true }
      })
    );
    const miniverse = new Miniverse({ Github, Git2 });
    miniverse
      .getService('Github')
      .getUsers()
      .subscribe(data => {
        expect(data.gitshub).toBe(true);
      });
    process.nextTick(() => {
      miniverse
        .getService('Github')
        .reset()
        .subscribe(data => {
          expect(data).toBeNull();
          done();
        });
    });
  });

});
