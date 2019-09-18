import { Miniverse } from '../index';
import Github from './__mock__/Github-mock';
import { ajax } from 'rxjs/ajax';
import {
  BehaviorSubject,
  of
} from 'rxjs';

jest.mock("rxjs/ajax");

const Git2 = Github;

beforeEach(() => {
  jest.resetAllMocks();
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
    ).mockImplementationOnce(() =>
      of({
        response: { data: { github: true } }
      })
    ).mockImplementationOnce(() =>
      of({
        response: { data: { github: true } }
      })
    );

    const miniverse = new Miniverse({ Github, Git2 });

    miniverse.eventService.on('get', (event) => {
      expect(event.store).toBe('Github');
    });

    miniverse.getService('Github')
      .getUsersCacheBoolean();

    miniverse.getService('Github')
      .getUsersCacheObject({ page: 1 });

    miniverse.getService('Github')
      .getUsers()
      .subscribe(
        (response) => {
          expect(response.data.github).toBe(true);
        });
    miniverse
      .eject()
      .subscribe((response) => {
        expect(response.Github).toBeTruthy();
        done();

      });
  });

  test('should inject github data', (done) => {
    const data = {
      Github:
        {
          '111578632': { github: true },
          '412672594': { github: true },
          '1632309109': { github: true },
          cache: {
            '412672594': { key: '1132654554', expire: Date.now() + (3600 * 1000) },
            '1632309109': { key: true, expire: Date.now() + (3600 * 1000) }
          }
        }
    };

    ajax.mockImplementation(() => of({ response: { github: true } }));
    const miniverse = new Miniverse({ Github });
    miniverse
      .insert(data)
      .subscribe();

    miniverse.getService('Github')
      .getUsersCacheBoolean()
      .subscribe();
    process.nextTick(() => {
      miniverse.getService('Github')
        .getUsersCacheObject({ page: 1 })
        .subscribe();
      expect(ajax).toHaveBeenCalledTimes(0);

      process.nextTick(() => {
        miniverse.eject().subscribe(next => {

          expect(next.Github).toBeTruthy();
          expect(next.Github['1632309109']).toBeTruthy();
          expect(next.Github['1632309109']['github']).toBeTruthy();
          expect(next.Github['412672594']).toBeTruthy();
          expect(next.Github['412672594']['github']).toBeTruthy();
          expect(next.Github['111578632']).toBeTruthy();
          expect(next.Github['111578632']['github']).toBeTruthy();
          expect(next.Github['cache']).toBeTruthy();
          done();
        },);
      });
    });
  });


  test('should fetch expired cache data', (done) => {

    const data = {
      Github:
        {
          '111578632': { github: true },
          '412672594': { github: true },
          '1632309109': { github: true },
          cache: {
            '412672594': { key: '1132654554', expire: Date.now() - (3600 * 1000) },
            '1632309109': { key: true, expire: Date.now() + (3600 * 1000) }
          }
        }
    };

    ajax.mockImplementation(() => of({ response: { github: true } }));
    const miniverse = new Miniverse({ Github });

    miniverse
      .insert(data)
      .subscribe((tmpData) => {
        expect(tmpData.Github['111578632']).toBeTruthy();
      });
    miniverse.getService('Github')
      .watchUsers()
      .subscribe(data => {
        expect(data).toEqual({});
      });

    process.nextTick(() => {
      miniverse.getService('Github')
        .getUsersCacheBoolean()
        .subscribe();
      process.nextTick(() => {
        miniverse.getService('Github')
          .getUsersCacheObject({ page: 1 })
          .subscribe();
        expect(ajax).toHaveBeenCalledTimes(1);

        process.nextTick(() => {
          miniverse.eject().subscribe(() => {
            done();
          },);
        });
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
        response: { github: true }
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

  test('should store data without api call', (done) => {

    const miniverse = new Miniverse({ Github });
    miniverse
      .getService('Github')
      .pushState({ totalLoaded: 30 });

    process.nextTick(() => {
      miniverse
        .getService('Github')
        .watchState('home')
        .subscribe(data => {
          expect(data.totalLoaded).toEqual(30);
          done();
        });
    });
  });

  test('should make api call and complete subject', (done) => {
    ajax.mockImplementation(() =>
      new BehaviorSubject({
        response: { github: true }
      })
    );
    const miniverse = new Miniverse({ Github });
    const sub = miniverse
      .getService('Github')
      .getUsersSingle()
      .subscribe(
        data => expect(data).toBeTruthy()
      );
    process.nextTick(() => {
      expect(sub.isStopped).toBeTruthy();

      miniverse.getService('Github').getUsersSingle2().subscribe(data => {
        expect(data).toBeTruthy();
      });
      miniverse.getService('Github').getUsersSingle3().subscribe(data => {
        expect(data).toBeTruthy();
      });
      process.nextTick(() => {

        miniverse.eject().subscribe(data => {
          expect(data).toBeTruthy();
          done();
        });
      });
    });

  });
});
