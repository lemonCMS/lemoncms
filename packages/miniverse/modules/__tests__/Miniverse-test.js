import { Miniverse } from '../index';
import Github from './__mock__/Github-mock';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
jest.mock("rxjs/ajax");

const Git2 = Github;

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  // axiosMock.mockClear();
});

const helpers = {
  testHelper: () => {
    return true;
  }
};

describe('Miniverse should be invalid', () => {
  test('should construct Github', () => {
    const miniverse = new Miniverse({ Github });
    expect(() => {
      miniverse.getService('Githubx');
    }).toThrowError();
  });

  test('hashcode should return 0', () => {
    const miniverse = new Miniverse({ Github });
    expect(
      miniverse.getService('Github').hashCode('')
    ).toEqual(0);

    expect(
      miniverse.getService('Github').hashCode()
    ).toEqual(0);
  });


  test('should eject github data', (done) => {
    ajax.mockImplementationOnce(() =>
      of({
        response: { data: { github: true } }
      })
    );

    const miniverse = new Miniverse({ Github, Git2 });

    miniverse.eventService.on('get', (event) => {
      expect(event.store).toBe('Github');
    });

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

      });


  });
  test('should inject github data', (done) => {
    const data = {
      Github: {
        "111578632": {
          "github": true
        }
      }
    };

    const miniverse = new Miniverse({ Github, Git2 });

    miniverse
      .insert(data)
      .subscribe((tmpData) => {
        expect(tmpData.Github['111578632']).toBeTruthy();
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
      .getService('Github')
      .getApiService())
      .toBeDefined();
  });

  test('expect resource to be reset', (done) => {
    ajax.mockImplementationOnce(() =>
      of({
        response: {  github: true }
      })
    );
    const miniverse = new Miniverse({ Github, Git2 });
    miniverse
      .getService('Github')
      .getUsers()
      .subscribe(data => {
        expect(data.github).toBe(true);
        done();
      });
    process.nextTick(() => {
      miniverse
        .getService('Github')
        .reset('users')
        .subscribe(data => {
          expect(data).toBeNull();
          done();
        });
    });
  });

});
