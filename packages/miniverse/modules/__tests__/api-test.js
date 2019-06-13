import Github from './__mock__/Github-mock';
import {
  ApiService,
  Miniverse
} from '../index';
import { ajax } from 'rxjs/ajax';
import {
  of,
  throwError
} from 'rxjs';

jest.mock("rxjs/ajax");

let miniverse = null;

beforeEach(() => {
  miniverse = new Miniverse({
    Github
  });
});


describe('Api', () => {
  it('should GET and succeed', (done) => {
    ajax.mockImplementationOnce(() =>
      of({ response: { results: ["cat.jpg"] } })
    );

    miniverse.getService('Github')
      .get({ path: 'some-path' })
      .subscribe({
        next: (response) => {
          expect(response.results).toBeDefined();
          done();
        }
      });

  })

  it('should GET and fail with 404', (done) => {
    ajax.mockImplementationOnce(() =>
      throwError(404)
    );

    miniverse.getService('Github')
      .get({ path: 'some-path' })
      .subscribe({
        error: (response) => {
          expect(response).toEqual(404);
          done();
        }
      });
  })

  it('should POST and succeed', (done) => {
    ajax.mockImplementationOnce(() =>
      of({ response: { results: ["cat.jpg"] } })
    );

    miniverse.getService('Github')
      .post({ path: 'some-path' })
      .subscribe({
        next: (response) => {
          expect(response.results).toBeDefined();
          done();
        }
      });

  })

  it('should POST and fail with 404', (done) => {
    ajax.mockImplementationOnce(() =>
      throwError(404)
    );

    miniverse.getService('Github')
      .post({ path: 'some-path' })
      .subscribe({
        error: (response) => {
          expect(response).toEqual(404);
          done();
        }
      });
  })

  it('should PUT and succeed', (done) => {
    ajax.mockImplementationOnce(() =>
      of({ response: { results: ["cat.jpg"] } })
    );

    miniverse.getService('Github')
      .put({ path: 'some-path' })
      .subscribe({
        next: (response) => {
          expect(response.results).toBeDefined();
          done();
        }
      });

  })

  it('should PUT and fail with 404', (done) => {
    ajax.mockImplementationOnce(() =>
      throwError(404)
    );

    miniverse.getService('Github')
      .put({ path: 'some-path' })
      .subscribe({
        error: (response) => {
          expect(response).toEqual(404);
          done();
        }
      });
  })

  it('should PATCH and succeed', (done) => {
    ajax.mockImplementationOnce(() =>
      of({ response: { results: ["cat.jpg"] } })
    );

    miniverse.getService('Github')
      .patch({ path: 'some-path' })
      .subscribe({
        next: (response) => {
          expect(response.results).toBeDefined();
          done();
        }
      });

  })

  it('should PATCH and fail with 404', (done) => {
    ajax.mockImplementationOnce(() =>
      throwError(404)
    );

    miniverse.getService('Github')
      .patch({ path: 'some-path' })
      .subscribe({
        error: (response) => {
          expect(response).toEqual(404);
          done();
        }
      });
  })

  it('should DELETE and succeed', (done) => {
    ajax.mockImplementationOnce(() =>
      of({ response: { results: ["cat.jpg"] } })
    );

    miniverse.getService('Github')
      .delete({ path: 'some-path' })
      .subscribe({
        next: (response) => {
          expect(response.results).toBeDefined();
          done();
        }
      });

  })

  it('should DELETE and fail with 404', (done) => {
    ajax.mockImplementationOnce(() =>
      throwError(404)
    );

    miniverse.getService('Github')
      .delete({ path: 'some-path' })
      .subscribe({
        error: (response) => {
          expect(response).toEqual(404);
          done();
        }
      });
  })

  it('should HEAD and succeed', (done) => {
    ajax.mockImplementationOnce(() =>
      of({ response: { results: ["cat.jpg"] } })
    );

    miniverse.getService('Github')
      .head({ path: 'some-path' })
      .subscribe({
        next: (response) => {
          expect(response.results).toBeDefined();
          done();
        }
      });

  })

  it('should HEAD and fail with 404', (done) => {
    ajax.mockImplementationOnce(() =>
      throwError(404)
    );

    miniverse.getService('Github')
      .head({ path: 'some-path' })
      .subscribe({
        error: (response) => {
          expect(response).toEqual(404);
          done();
        }
      });
  })

  it('should OPTIONS and succeed', (done) => {
    ajax.mockImplementationOnce(() =>
      of({ response: { results: ["cat.jpg"] } })
    );

    miniverse.getService('Github')
      .options({ path: 'some-path' })
      .subscribe({
        next: (response) => {
          expect(response.results).toBeDefined();
          done();
        }
      });

  })

  it('should OPTIONS and fail with 404', (done) => {
    ajax.mockImplementationOnce(() =>
      throwError(404)
    );

    miniverse.getService('Github')
      .options({ path: 'some-path' })
      .subscribe({
        error: (response) => {
          expect(response).toEqual(404);
          done();
        }
      });
  })

  it('should set TOKEN', (done) => {
    ajax.mockImplementationOnce(() =>
      of({})
    );

    miniverse.apiService.setJwtToken('ABC-123-rrtt-xyz');

    miniverse.getService('Github')
      .get({ path: 'some-path' })
      .subscribe({
        next: () => {
          expect(ajax).toHaveBeenCalledWith(expect.objectContaining({
            "crossDomain": true,
            "headers": expect.objectContaining({
              'Authentication': 'Bearer ABC-123-rrtt-xyz'
            })
          }));
          done();
        }
      });
  })

  it('should set Custome Header CUSTOMER-ID: XYZ', (done) => {
    ajax.mockImplementationOnce(() =>
      of({})
    );

    miniverse.apiService.setHeaders({ 'CUSTOMER-ID': 'XYZ' });

    miniverse.getService('Github')
      .get({ path: 'some-path' })
      .subscribe({
        next: () => {
          expect(ajax).toHaveBeenCalledWith(expect.objectContaining({
            "crossDomain": true,
            "headers": expect.objectContaining({
              'CUSTOMER-ID': 'XYZ'
            })
          }));
          done();
        }
      });
  })

  it('should create miniverse and fetch with custom ApiService', (done) => {
    miniverse = new Miniverse({
      Github
    }, new ApiService);

    ajax.mockImplementationOnce(() =>
      of({ response: { results: ["cat.jpg"] } })
    );

    miniverse.getService('Github')
      .get({ path: 'some-path' })
      .subscribe({
        next: (response) => {
          expect(response.results).toBeDefined();
          done();
        }
      });
  })

});
