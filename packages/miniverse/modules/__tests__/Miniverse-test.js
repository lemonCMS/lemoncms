import { Miniverse } from '../index';
import Github from './__mock__/Github-mock';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

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
      .subscribe((tmpData) => {
        expect(tmpData.Github['111578632']).toBeTruthy();
      });

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
          miniverse.eject().subscribe(next => {
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

});
